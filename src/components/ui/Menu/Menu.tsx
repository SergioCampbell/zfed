import { IOptions } from "../../../interfaces/interfaces";
import React, { useState } from "react";
import Triangle from "../../../assets/img/triangle.png";
import style from "./Menu.module.css";
interface IMenu {
  options: IOptions[];
  onSelect: any;
}

const Menu = ({ options, onSelect }: IMenu) => {
  const [open, setOpen] = useState(false);

  const selectItem = (id: string) => {
    onSelect(id);
    setOpen(false);
  };

  return (
    <div className={style.menu}>
      <button
        type="button"
        className={style.menu__header}
        onClick={() => setOpen(!open)}
      >
        <div>{options.find((option) => option.selected)?.title}</div>
        <img src={Triangle} alt="Triangle to select an option in the menu" />
      </button>
      {open && (
        <div role="list" className="dd-list">
          {options.map((option) => (
            <button
              type="button"
              className={`${style.menu__option} ${
                option.selected && style["menu__option--selected"]
              }`}
              key={option.id}
              onClick={() => selectItem(option.id)}
            >
              {option.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
