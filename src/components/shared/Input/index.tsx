import React from "react";

import styles from "./Input.module.scss";

type PropsInput = {
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "email" | "text" | "password" | "number";
};

const Input = (props: PropsInput) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
