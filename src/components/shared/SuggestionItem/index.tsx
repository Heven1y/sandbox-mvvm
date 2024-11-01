import React from "react";
import { CountryInfo } from "../../../services/apiService";

import styles from "./SuggestionItem.module.scss";

type PropsSuggestionItem = {
  country: CountryInfo;
  onSelect: (country: CountryInfo) => void;
};

const SuggestionItem = ({ country, onSelect }: PropsSuggestionItem) => {
  const handleClick = React.useCallback(() => {
    onSelect(country);
  }, [onSelect, country]);

  return (
    <li onClick={handleClick} className={styles["suggestion-item"]}>
      <img
        className={styles["suggestion-item__img"]}
        src={country.flag}
        alt={country.name}
      />
      <div>
        <strong>{country.name}</strong> - {country.fullName}
      </div>
    </li>
  );
};

export default React.memo(SuggestionItem);
