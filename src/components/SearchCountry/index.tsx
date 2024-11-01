import React from "react";
import { CountryInfo } from "../../services/apiService";
import Input from "../shared/Input";

import styles from "./SearchCountry.module.scss";
import SuggestionItem from "../shared/SuggestionItem";

type PropsSearchCountry = {
  query: string;
  onChangeQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  isNotFound: boolean;
  suggestions: CountryInfo[];
  onSelect: (country: CountryInfo) => void;
};

const SearchCountry = ({
  query,
  onChangeQuery,
  isLoading,
  isNotFound,
  suggestions,
  onSelect,
}: PropsSearchCountry) => {
  const suggestionElements = React.useMemo(
    () =>
      suggestions.map((country) => (
        <SuggestionItem
          key={country.name}
          country={country}
          onSelect={onSelect}
        />
      )),
    [suggestions, onSelect]
  );
  return (
    <div className={styles["search-country"]}>
      <div className={styles["search-country__input-wrapper"]}>
        <Input
          type="text"
          placeholder="Введите название страны"
          value={query}
          onChange={onChangeQuery}
        />
        {isLoading && <p>Ищем страны...</p>}
        {isNotFound && <p>Ничего не найдено</p>}
      </div>

      {suggestions.length > 0 && (
        <ul className={styles["search-country__list"]}>{suggestionElements}</ul>
      )}
    </div>
  );
};

export default React.memo(SearchCountry);
