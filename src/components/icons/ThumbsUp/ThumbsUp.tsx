import React from "react";
import ThumbsUpIcon from "assets/thumbs-up.svg";

interface IThumbsUp {
  className?: string;
}
const ThumbsUp = (props: IThumbsUp) => (
  <img {...props} src={ThumbsUpIcon} alt={"Like up"} />
);

export default ThumbsUp;
