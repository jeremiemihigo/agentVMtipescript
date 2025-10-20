type TDemandeur = {
  fonction: string;
  codeAgent: string;
  nom: string;
};

type TypeFollowup = {
  followup: string;
  dateFollowup?: Date;
  codeclient?: string;
};

export interface IReponse {
  codeclient: string;
  codeCu?: string;
  clientStatut: string;
  PayementStatut: string;
  consExpDays: number;
  idDemande: string;
  nomClient: string;
  demandeur: TDemandeur;
  coordonnee: ICoordonnee;
  _id: string;
  createdAt: Date;
  followup: boolean;
  demande: IDemande;
  statut: "PENDING" | "REJECTED" | "APPROVED";
}
export interface IDouble {
  codeAgent: string;
  valeur: string;
}

export interface IConversation {
  code: string;
  codeAgent: string;
  createdAt: Date;
  message: string;
  sender: string;
  updatedAt: Date;
  valide: boolean;
  _id: string;
}
export interface ICoordonnee {
  altitude: string;
  latitude: string;
  longitude: string;
}
export interface IDemande {
  cell: string;
  codeAgent: string;
  codeZone: string;
  feedbackrs?: string;
  double?: IDouble;
  codeclient?: string;
  commune: string;
  createdAt: Date;
  feedback: string;
  file?: string;
  idDemande: string;
  idShop?: string;
  jours?: number;
  lot: string;
  numero?: string;
  raison: string;
  reference: string;
  sat: string;
  sector: string;
  statut: string;
  typeImage: string;
  updatedAt: Date;
  valide: boolean;
  _id: string;
  conversation: IConversation[];
  coordonnes: ICoordonnee;
  reponse: IReponse[];
  typeVisit: TypeFollowup;
}
