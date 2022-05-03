import React, { MouseEventHandler } from "react";
import style from "./Button.module.css";

interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button = ({ children, ...props }: IButton) => {
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
