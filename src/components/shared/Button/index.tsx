import styles from "./Button.module.scss";

export type PropsButton = {
  title: string;
  onClick?: () => void;
};

const Button = ({ title, onClick }: PropsButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
