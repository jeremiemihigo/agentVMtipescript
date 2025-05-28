export interface IViste {
  codeclient: String;
  PayementStatut: String;
  clientStatut: String;
  consExpDays: Number;
}
export interface IAction {
  action: String;
  statut: String;
}

// export interface IObjectif {
//   codeAgent: String;
//   codeclient: String;
//   customer_name: String;
//   month: String;
//   region: String;
//   shop: String;
//   visites: IViste[];
//   action?: IAction[];
// }
