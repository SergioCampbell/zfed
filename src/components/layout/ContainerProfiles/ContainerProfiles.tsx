import { Card, List } from "../../../components/ui";
import Menu from "../../../components/ui/Menu";
import { optionsMenu } from "../../../constants/constants";
import React, { useEffect, useState } from "react";
import style from "./ContainerProfiles.module.css";

const ContainerProfiles = () => {
  const [card, setCard] = useState(true);
  const [options, setOptions] = useState(optionsMenu);

  useEffect(() => {
    setCard(options.find((option) => option.id === "grid")?.selected ?? false);
  }, [options]);

  const changeView = (id: string) => {
    const optionsFound = options.find((option) => option.id === id);
    if (optionsFound) {
      const newData = options.map((option) => ({ ...option, selected: false }));
      const index = options.indexOf(optionsFound);
      newData[index].selected = true;
      setOptions(newData);
    }
  };

  return (
    <main className={style.container}>
      <div className={style.container__menu}>
        <Menu options={options} onSelect={changeView} />
        <p>Previous Rulings</p>
      </div>
      <section className={style.container__profiles}>
        {card ? (
          <div className={style.container__grid}>
            <Card />
          </div>
        ) : (
          <List />
        )}
      </section>
    </main>
  );
};

export default ContainerProfiles;
