export interface Exhibit {
  exhibitId: number;
  title: string;
  dated: string;
  material: string;
  archiveNum: string;
  description: string;
  imageUrl: string;
}

export interface Guilde {
  guideId: number;
  username: string;
  password: string;
  fio: string;
  age: number;
  experience: number;
  languages: string;
}

export interface Tour {
  tourId: number;
  theme: string;
  typeOfExhibits: string;
  duration: number;
  cost: number;
  imageUrl: string;
}

export interface Visitor {
  visitorId: number;
  username: string;
  password: string;
  fio: string;
  age: number;
  email: string;
}
