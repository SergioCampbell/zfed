import { ThumbsDown, ThumbsUp } from "../../../../components/icons";
import React, { MouseEventHandler } from "react";
import style from "./ButtonLike.module.css";

interface IButtonLike {
  like?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  active?: boolean;
  className?: string;
}

const ButtonLike = ({
  like = false,
  onClick,
  disabled = false,
  active = false,
  className = "",
}: IButtonLike) => {
  return (
    <button className={`${style.button__like} ${className}`} onClick={onClick}>
      <div
        className={`${like ? style.like__up : style.like__down} ${
          disabled && style["button__like--disabled"]
        } ${active && style["button__like--active"]}`}
      >
        {like ? <ThumbsUp /> : <ThumbsDown />}
      </div>
    </button>
  );
};

export default ButtonLike;
