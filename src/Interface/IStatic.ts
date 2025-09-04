export interface IRaison {
  idFeedback: string;
  title: string;
  plateforme: [string];
}
export interface ISat {
  idSat: string;
  nom_SAT: string;
  shop: string;
  region: string;
  _id: string;
}

export interface IDelai {
  day_of_week: number;
  datetime: Date;
}
export interface IDeedline {
  plainte: string;
  defaut: number;
  critere: Array<{ [key: string]: any }>; // Typage générique pour les objets de l'array
}
export interface ICritere {
  jours: number;
  debut: string;
  delai: number;
}
