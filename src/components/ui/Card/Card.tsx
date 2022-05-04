import React, { useState } from "react";
import ShowList from "../../../components/hocs";
import { DataPerson } from "../../../interfaces/interfaces";
import style from "./Card.module.css";
import { Button, ButtonLike } from "../Buttons";
import {
  resolvePercent,
  resolveProfilePicture,
  resolveProfilePictureWebp,
  timesAgo,
} from "../../../helpers/utils";
import { ThumbsDown, ThumbsUp } from "../../../components/icons";
import { IHoc } from "../../../interfaces/interfaces";
import { addVote, removeVote, valdiateVotes } from "../../../helpers/votes";

const Card = ({ data = {} as DataPerson, updateByid }: IHoc) => {
  const [active, setActive] = useState<string | null>(null);
  const totalVotes = data.positive + data.negative;

  const handleActive = (vote: "positive" | "negative") =>
    active === vote ? setActive(null) : setActive(vote);

  const voteNow = () => {
    if (active) {
      updateByid(data.id, active);
      addVote(data.id ?? "");
    }
  };

  const voteAgain = () => removeVote(data.id ?? "");

  return (
    <div className={style.card}>
      <picture>
        <source
          srcSet={resolveProfilePictureWebp(data.picture)}
          type="image/webp"
        />
        <img
          src={resolveProfilePicture(data.picture)}
          alt={data.name}
          className={style.card__image}
          loading="lazy"
        />
      </picture>
      <main className={style.card__container}>
        <section className={style.card__body}>
          <div className={style.card__name}>
            <ButtonLike like={data.positive > data.negative} disabled />
            <p>{data.name}</p>
          </div>
          <div className={style.card__description}>
            <p>{data.description}</p>
            <span>
              {valdiateVotes(data.id ?? "")
                ? "Thank you for your vote!"
                : `${timesAgo(data.lastUpdated)} in ${data.category}`}
            </span>
            {valdiateVotes(data.id ?? "") ? (
              <div className={style.card__buttons}>
                <Button onClick={voteAgain}>Vote Again</Button>
              </div>
            ) : (
              <div className={style.card__buttons}>
                <ButtonLike
                  like
                  onClick={() => handleActive("positive")}
                  active={active === "positive"}
                />
                <ButtonLike
                  onClick={() => handleActive("negative")}
                  active={active === "negative"}
                />
                <Button onClick={voteNow}>Vote Now</Button>
              </div>
            )}
          </div>
        </section>
        <footer className={style.card__footer}>
          <div
            className={style["card__footer--up"]}
            style={{
              width: `${resolvePercent(totalVotes, data.positive)}%`,
            }}
          >
            <ThumbsUp />
            <p> {`${resolvePercent(totalVotes, data.positive)} %`}</p>
          </div>
          <div
            className={style["card__footer--down"]}
            style={{
              width: `${resolvePercent(totalVotes, data.negative)}%`,
            }}
          >
            <p> {`${resolvePercent(totalVotes, data.negative)} %`}</p>
            <ThumbsDown />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ShowList(Card);
