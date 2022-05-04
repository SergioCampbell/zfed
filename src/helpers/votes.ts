import { keyStorage } from "../constants/constants";

export const initStorage = () =>
  !getVotes() && localStorage.setItem(keyStorage, "");

export const getVotes = () => localStorage.getItem(keyStorage);

export const valdiateVotes = (id: string) => getVotes()?.includes(id);

export const addVote = (id: string) => {
  const aux: string[] = getVotes()?.split(",") ?? [];
  aux.push(id);
  localStorage.setItem(keyStorage, aux.join(","));
};

export const removeVote = (id: string) => {
  const aux: string[] = getVotes()?.split(",") ?? [];
  aux.splice(aux.indexOf(id), 1);
  localStorage.setItem(keyStorage, aux.join(","));
};
