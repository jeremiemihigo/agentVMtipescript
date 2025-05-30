export interface IShop {
  id: string;
  shop: string;
  idZone: string;
}
export interface IRegion {
  id: string;
  denomination: string;
  idZone: string;
}

export interface IUser {
  nom: string;
  codeAgent: string;
  codeZone: string;
  fonction: string;
  filename: string;
  idShop: string;
  telephone: string;
  active: boolean;
  region: IRegion;
  first: boolean;
  shop: IShop[];
}
