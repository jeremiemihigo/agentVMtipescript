import { ISat } from "./IStatic";

type technicien = {
  assignBy: string;
  numSynchro: string;
};
type adresse = {
  commune: string;
  quartier: string;
  avenue: string;
  reference: string;
  sat: ISat;
};
type Resultat = {
  changeto: string;
  commentaire?: string;
  dateSave: Date;
  delai: string;
  fullDate: Date;
  laststatus?: string;
  nomAgent: string;
  _id: string;
};
export interface IIssue {
  codeclient: string;
  idPlainte: string;
  _id: string;
  plainteSelect: string;
  statut: string;
  shop: string;
  resultat: Resultat[];
  technicien: technicien;
  nomClient: string;
  time_delai: number;
  fullDateSave: Date;
  adresse: adresse;
}
