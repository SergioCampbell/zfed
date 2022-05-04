// images png
import KanyePicture from "../assets/img/profile/kanye.png";
import CristinaPicture from "../assets/img/profile/cristina.png";
import ElonPicture from "../assets/img/profile/elon.png";
import GretaPicture from "../assets/img/profile/greta.png";
import MalalaPicture from "../assets/img/profile/malala.png";
import MarkPicture from "../assets/img/profile/mark.png";

//images webp
import KanyePictureWebP from "../assets/img/profile/kanye.webp";
import CristinaPictureWebP from "../assets/img/profile/cristina.webp";
import ElonPictureWebP from "../assets/img/profile/elon.webp";
import GretaPictureWebP from "../assets/img/profile/greta.webp";
import MalalaPictureWebP from "../assets/img/profile/malala.webp";
import MarkPictureWebP from "../assets/img/profile/mark.webp";

export const resolvePercent = (totalVotes: number, value: number) =>
  ((value / totalVotes) * 100).toFixed(1);

export const resolveProfilePicture = (picture: string) => {
  const profilesPictures = {
    "kanye.png": KanyePicture,
    "cristina.png": CristinaPicture,
    "elon.png": ElonPicture,
    "greta.png": GretaPicture,
    "malala.png": MalalaPicture,
    "mark.png": MarkPicture,
  } as any;
  return profilesPictures[picture];
};

export const resolveProfilePictureWebp = (picture: string) => {
  const profilesPictures = {
    "kanye.png": KanyePictureWebP,
    "cristina.png": CristinaPictureWebP,
    "elon.png": ElonPictureWebP,
    "greta.png": GretaPictureWebP,
    "malala.png": MalalaPictureWebP,
    "mark.png": MarkPictureWebP,
  } as any;
  return profilesPictures[picture];
};

export const timesAgo = (date: Date | string) => {
  const seconds = Math.floor(
    ((new Date() as any) - (new Date(date) as any)) / 1000
  );
  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
};
