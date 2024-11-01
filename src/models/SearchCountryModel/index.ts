import { CountryInfo } from "../../services/apiService";

export class SearchCountryModel {
  query: string = "";
  suggestions: CountryInfo[] = [];
  isLoading: boolean = false;
  isNotFound: boolean = false;
  protected maxSuggestions: number;

  constructor(maxSuggestions: number) {
    this.maxSuggestions = maxSuggestions;
  }
}
