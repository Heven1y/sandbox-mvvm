import React from "react";
import Button, { PropsButton } from "../shared/Button";
import Input from "../shared/Input";
import styles from "./TextControll.module.scss";

type TextControlProps = {
  value: string;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  buttons: {
    left: PropsButton[];
    right: PropsButton[];
  };
};

const TextControl = ({ value, onChangeValue, buttons }: TextControlProps) => {
  return (
    <div className={styles["text-controll"]}>
      {buttons.left.map((button, index) => (
        <Button
          title={button.title}
          key={`left-${index}`}
          onClick={button.onClick}
        />
      ))}
      <Input type="text" value={value} onChange={onChangeValue} />
      {buttons.right.map((button, index) => (
        <Button
          title={button.title}
          key={`right-${index}`}
          onClick={button.onClick}
        />
      ))}
    </div>
  );
};

export default TextControl;
