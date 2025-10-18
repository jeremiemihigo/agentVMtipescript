export interface ICustomerManager {
  unique_account_id: string;
  customer_name: string;
  sat: string;
  id_Account_manager: string;
  customer_lookup: string;
  actif: boolean;
  dateuploaded: number;
  datefinished: number;
  visites?: [];
}
export interface IEngagement {
  region: string;
  shop: string;
  customer_name: string;
  customer_id: string;
  customer_cu: string;
  id_account_manager: string;
  engagement: "OUI" | "NON";
}
