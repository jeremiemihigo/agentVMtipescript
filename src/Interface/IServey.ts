export interface IServey {
  active: boolean;
  concerne: string[];
  dateFin: Date;
  subtitle: string;
  title: string;
  _id: string;
  question?: IQuestion[];
  idServey: string;
}
export interface IQuestion {
  question: string;
  idQuestion: string;
  type_reponse: "text" | "select_one" | "select_many" | "date";
  _id: string;
  item?: string[];
}
