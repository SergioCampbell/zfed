export interface Votes {
  positive: number;
  negative: number;
}

export interface DataPerson {
  id?: string;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: Date | string;
  positive: number;
  negative: number;
  active?: string;
}

export interface IOptions {
  id: string;
  title: string;
  selected: boolean;
}

export interface IHoc {
  data?: DataPerson;
  updateByid?: any; //(id: string | undefined, vote: string) => void;
}
