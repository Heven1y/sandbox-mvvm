import { observer } from "mobx-react-lite";
import React from "react";
import { SearchCountryViewModel } from "../../viewModels/SearchCountryViewModel";
import SearchCountry from "../../components/SearchCountry";
import { CountryInfo } from "../../services/apiService";

type PropsSearchCountryView = {
  maxSuggestions?: number;
};

export const SearchCountryView = observer(({ maxSuggestions = 3 }: PropsSearchCountryView) => {
  const VM = React.useMemo(
    () => new SearchCountryViewModel(maxSuggestions),
    [maxSuggestions]
  );
  const onChangeQuery = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      VM.setQuery(event.target.value);
    },
    [VM]
  );

  const onSelect = React.useCallback(
    (country: CountryInfo) => {
      VM.selectSuggestion(country);
    },
    [VM]
  );

  return (
    <div>
      <p>{`Автокомплит стран - ${maxSuggestions} предложения(ий)`}</p>
      <SearchCountry
        query={VM.query}
        onChangeQuery={onChangeQuery}
        isLoading={VM.isLoading}
        isNotFound={VM.isNotFound}
        suggestions={VM.suggestions}
        onSelect={onSelect}
      />
    </div>
  );
});
