import { action, makeObservable, observable, runInAction } from "mobx";
import { SearchCountryModel } from "../../models/SearchCountryModel";
import { CountryInfo, getCountryByName } from "../../services/apiService";

export class SearchCountryViewModel extends SearchCountryModel {
  private timeoutId: number | null = null;
  private currentRequestId: number = 0;
  isNotFound: boolean = false;
  constructor(maxSuggestions: number) {
    super(maxSuggestions);
    makeObservable(this, {
      query: observable,
      setQuery: action,
      selectSuggestion: action,
      suggestions: observable,
      isLoading: observable,
      isNotFound: observable,
    });
  }

  setQuery(newValue: string) {
    this.query = newValue;

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (newValue.trim() === "") {
      this.suggestions = [];
      this.isNotFound = false;
      return;
    }

    this.timeoutId = setTimeout(this.fetchSuggestions, 1000);
  }

  private fetchSuggestions = async () => {
    const requestId = ++this.currentRequestId;
    runInAction(() => {
      this.isLoading = true;
      this.isNotFound = false;
    });
    const results = await getCountryByName(this.query);

    if (requestId !== this.currentRequestId) {
      return;
    }

    runInAction(() => {
      this.suggestions = results.slice(0, this.maxSuggestions);
      this.isNotFound = this.suggestions.length === 0 && this.query.length > 0;
      this.isLoading = false;
    });
  };

  selectSuggestion(suggestion: CountryInfo) {
    this.query = suggestion.name;
    this.suggestions = [];
  }
}
