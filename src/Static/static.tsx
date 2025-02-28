// export const lien = "http://localhost:5000/bboxx/support";
//  export const lien_image = "http://localhost:4000/bboxx/image";
// export const lien = "http://localhost:4000/bboxx/support";
// export const lien_image = "http://109.199.122.241:5000/bboxx/image";

import _ from "lodash";
import React from "react";
import { IDeedline, IDelai, IRaison, ISat } from "../Interface/IStatic";

const link = "https://callcentersupport.bboxxvm.com";
//const link = "http://localhost:5000";
export const big_data = "https://callcentersupport.bboxxvm.com/bboxx/support";
//export const big_data = "http://localhost:5000/bboxx/support";
export const lien_dash = `${link}/bboxx/dashboard`;
//export const big_data = "https://visitetwo.bboxxvm.com/bboxx/support";

export const lien = `${link}/bboxx/support`;
export const lien_socket = link;
export const lien_image = `${link}/bboxx/image`;
export const lien_issue = `${link}/issue`;
export const lien_dt = `${link}/dt`;
export const lien_terrain = `${link}/bboxx/terrain`;

export const dateFrancais = (donner: string) => {
  let dates = new Date(donner);
  return `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()}`;
};
export const config = {
  headers: {
    "Content-Type": "Application/json",
    Authorization: "Bearer " + localStorage.getItem("auth"),
  },
};
export const returnName = (nom: string) => {
  const split = nom.split(" ");
  return nom.split(" ")[split.length - 1];
};
export const raison: IRaison[] = [
  { id: 1, raison: "Le client n'a pas de probleme" },
  { id: 2, raison: "En attente de swap" },
  {
    id: 3,
    raison:
      "En attente de swap des autres items (torche, radio, TV, panneau,…)",
  },
  { id: 4, raison: "zone insecurisée" },
  { id: 5, raison: "absent à la maison" },
  { id: 6, raison: "Promesse de payement" },
  { id: 7, raison: "cas de déménagement" },
  { id: 8, raison: "En cours de repossession" },
  { id: 9, raison: "introuvable" },
  { id: 10, raison: "cas de resistance" },
  { id: 11, raison: "Resistance" },
  { id: 12, raison: "Victime de vol" },
  { id: 13, raison: "Victime d'inendie" },
  { id: 14, raison: "reactivation non utilisée" },
  { id: 15, raison: "Pretend avoir fini" },
  { id: 16, raison: "Probleme technique" },
  { id: 17, raison: "Client en voyage" },
  { id: 18, raison: "Maison fermee" },
  { id: 19, raison: "Probleme financier" },
  { id: 20, raison: "Deja repossedee par notre agent" },
  { id: 21, raison: "Malade" },
  { id: 22, raison: "Demande la repossession" },
  { id: 23, raison: "Le client a laissé les matériels à quelqu'un d'autre" },
  { id: 24, raison: "Demenager sans signaler" },
  { id: 25, raison: "Utilise une autre source d'énergie" },
  { id: 26, raison: "Le client veut déménager" },
];
export const sat: ISat[] = [
  {
    idSat: "ARI001",
    nom_SAT: "ARU",
    shop: "Ariwara",
    region: "Ituri",
    id: "1",
  },
  {
    idSat: "ARI002",
    nom_SAT: "ARIWARA 1",
    shop: "Ariwara",
    region: "Ituri",
    id: "2",
  },
  {
    idSat: "ARI003",
    nom_SAT: "ARIWARA 2",
    shop: "Ariwara",
    region: "Ituri",
    id: "3",
  },
  {
    idSat: "ARI004",
    nom_SAT: "INGBOKOLO",
    shop: "Ariwara",
    region: "Ituri",
    id: "4",
  },
  {
    idSat: "ARI005",
    nom_SAT: "DJALASIGA",
    shop: "Ariwara",
    region: "Ituri",
    id: "5",
  },
  {
    idSat: "BAR001",
    nom_SAT: "FIZI KMS",
    shop: "Baraka",
    region: "Sud-Kivu",
    id: "6",
  },
  {
    idSat: "BAR002",
    nom_SAT: "BARAKA NORD",
    shop: "Baraka",
    region: "Sud-Kivu",
    id: "7",
  },
  {
    idSat: "BAR003",
    nom_SAT: "BARAKA SUD",
    shop: "Baraka",
    region: "Sud-Kivu",
    id: "8",
  },
  {
    idSat: "BAR004",
    nom_SAT: "BARAKA OUEST",
    shop: "Baraka",
    region: "Sud-Kivu",
    id: "9",
  },
  {
    idSat: "BAR005",
    nom_SAT: "LUSENDA MS",
    shop: "Baraka",
    region: "Sud-Kivu",
    id: "10",
  },
  {
    idSat: "BEN001",
    nom_SAT: "RWENZORI",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "11",
  },
  {
    idSat: "BEN002",
    nom_SAT: "BEU",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "12",
  },
  {
    idSat: "BEN003",
    nom_SAT: "MULEKERA",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "13",
  },
  {
    idSat: "BEN004",
    nom_SAT: "OICHA",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "14",
  },
  {
    idSat: "BEN005",
    nom_SAT: "BUNGULU",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "15",
  },
  {
    idSat: "BEN006",
    nom_SAT: "CANTINE",
    shop: "Beni",
    region: "Nord-Kivu",
    id: "16",
  },
  {
    idSat: "BUK001",
    nom_SAT: "LABOTTE",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "17",
  },
  {
    idSat: "BUK002",
    nom_SAT: "ROUTE UVIRA",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "18",
  },
  {
    idSat: "BUK003",
    nom_SAT: "NYALUKEMBA",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "19",
  },
  {
    idSat: "BUK004",
    nom_SAT: "MUKUKWE",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "20",
  },
  {
    idSat: "BUK005",
    nom_SAT: "BAGIRA_LUMUMBA",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "21",
  },
  {
    idSat: "BUK006",
    nom_SAT: "BRASERIE",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "22",
  },
  {
    idSat: "BUK007",
    nom_SAT: "CLINIQUE",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "23",
  },
  {
    idSat: "BUK008",
    nom_SAT: "CIMPUNDA_BUHOLO",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "24",
  },
  {
    idSat: "BUK009",
    nom_SAT: "LA CONCONRDE",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "25",
  },
  {
    idSat: "BUK010",
    nom_SAT: "BAGIRA_NYAKAVOGO",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "26",
  },
  {
    idSat: "BUK014",
    nom_SAT: "MAJOR VANGU NORD",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "27",
  },
  {
    idSat: "BUK011",
    nom_SAT: "MAJOR VANGU SUD",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "28",
  },
  {
    idSat: "BUK012",
    nom_SAT: "UEA",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "29",
  },
  {
    idSat: "BUK013",
    nom_SAT: "HOPITAL PANZI",
    shop: "Bukavu",
    region: "Sud-Kivu",
    id: "30",
  },
  {
    idSat: "BUN001",
    nom_SAT: "HOHO",
    shop: "Bunia",
    region: "Ituri",
    id: "31",
  },
  {
    idSat: "BUN002",
    nom_SAT: "KINDIA",
    shop: "Bunia",
    region: "Ituri",
    id: "32",
  },
  {
    idSat: "BUN003",
    nom_SAT: "BANKOKO CENTRE",
    shop: "Bunia",
    region: "Ituri",
    id: "33",
  },
  {
    idSat: "BUN004",
    nom_SAT: "KANYASI MUDZIPELA",
    shop: "Bunia",
    region: "Ituri",
    id: "34",
  },
  {
    idSat: "BUN005",
    nom_SAT: "KASENYI",
    shop: "Bunia",
    region: "Ituri",
    id: "35",
  },
  {
    idSat: "BUN006",
    nom_SAT: "SIMBILIYABO",
    shop: "Bunia",
    region: "Ituri",
    id: "36",
  },
  {
    idSat: "BUN007",
    nom_SAT: "LUMUMBA",
    shop: "Bunia",
    region: "Ituri",
    id: "37",
  },
  {
    idSat: "BUT001",
    nom_SAT: "Vulamba",
    shop: "Butembo",
    region: "Nord-Kivu",
    id: "38",
  },
  {
    idSat: "BUT002",
    nom_SAT: "Bulengera",
    shop: "Butembo",
    region: "Nord-Kivu",
    id: "39",
  },
  {
    idSat: "BUT003",
    nom_SAT: "KIMEMI",
    shop: "Butembo",
    region: "Nord-Kivu",
    id: "40",
  },
  {
    idSat: "BUT004",
    nom_SAT: "Mususa",
    shop: "Butembo",
    region: "Nord-Kivu",
    id: "41",
  },
  {
    idSat: "DUR001",
    nom_SAT: "Watsa",
    shop: "Durba",
    region: "Ituri",
    id: "42",
  },
  {
    idSat: "DUR002",
    nom_SAT: "Bandai",
    shop: "Durba",
    region: "Ituri",
    id: "43",
  },
  {
    idSat: "DUR003",
    nom_SAT: "KOKIZA",
    shop: "Durba",
    region: "Ituri",
    id: "44",
  },
  {
    idSat: "DUR004",
    nom_SAT: "MALEMBA",
    shop: "Durba",
    region: "Ituri",
    id: "45",
  },
  {
    idSat: "GOM001",
    nom_SAT: "Mugunga",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "46",
  },
  {
    idSat: "GOM002",
    nom_SAT: "Virunga",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "47",
  },
  {
    idSat: "GOM003",
    nom_SAT: "Himbi",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "48",
  },
  {
    idSat: "GOM004",
    nom_SAT: "Kyeshero",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "49",
  },
  {
    idSat: "GOM005",
    nom_SAT: "Ndosho",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "50",
  },
  {
    idSat: "GOM006",
    nom_SAT: "Katoyi_Kasika",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "51",
  },
  {
    idSat: "GOM007",
    nom_SAT: "Mabanga",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "52",
  },
  {
    idSat: "GOM008",
    nom_SAT: "Mont_Goma",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "53",
  },
  {
    idSat: "GOM009",
    nom_SAT: "ITIG",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "54",
  },
  {
    idSat: "GOM010",
    nom_SAT: "Turunga",
    shop: "Goma",
    region: "Nord-Kivu",
    id: "55",
  },
  {
    idSat: "KAL001",
    nom_SAT: "Kalemie_Sud",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "56",
  },
  {
    idSat: "KAL002",
    nom_SAT: "Kalemie_Nord",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "57",
  },
  {
    idSat: "KAV001",
    nom_SAT: "KAVUMU CENTRE EST",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "58",
  },
  {
    idSat: "KAV002",
    nom_SAT: "MUDAKA",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "59",
  },
  {
    idSat: "KAV003",
    nom_SAT: "BIRAVA",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "60",
  },
  {
    idSat: "KAV004",
    nom_SAT: "KATANA",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "61",
  },
  {
    idSat: "KAV005",
    nom_SAT: "KALEHE",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "62",
  },
  {
    idSat: "KAV006",
    nom_SAT: "KAVUMU CENTRE OUEST",
    shop: "Kavumu",
    region: "Sud-Kivu",
    id: "63",
  },
  {
    idSat: "KIS001",
    nom_SAT: "Simisimi",
    shop: "Kisangani",
    region: "Tshopo",
    id: "64",
  },
  {
    idSat: "KIS017",
    nom_SAT: "FARDC",
    shop: "Kisangani",
    region: "Tshopo",
    id: "65",
  },
  {
    idSat: "KIS016",
    nom_SAT: "Sotexki 3",
    shop: "Kisangani",
    region: "Tshopo",
    id: "66",
  },
  {
    idSat: "KIS015",
    nom_SAT: "Sotexki 2",
    shop: "Kisangani",
    region: "Tshopo",
    id: "67",
  },
  {
    idSat: "KIS002",
    nom_SAT: "Sotexki 1",
    shop: "Kisangani",
    region: "Tshopo",
    id: "68",
  },
  {
    idSat: "KIS003",
    nom_SAT: "Cathedrale",
    shop: "Kisangani",
    region: "Tshopo",
    id: "69",
  },
  {
    idSat: "KIS004",
    nom_SAT: "Bralima",
    shop: "Kisangani",
    region: "Tshopo",
    id: "70",
  },
  {
    idSat: "KIS005",
    nom_SAT: "Du30juin",
    shop: "Kisangani",
    region: "Tshopo",
    id: "71",
  },
  {
    idSat: "KIS006",
    nom_SAT: "Magopi",
    shop: "Kisangani",
    region: "Tshopo",
    id: "72",
  },
  {
    idSat: "KIS007",
    nom_SAT: "Motumbe",
    shop: "Kisangani",
    region: "Tshopo",
    id: "73",
  },
  {
    idSat: "KIS008",
    nom_SAT: "Tp",
    shop: "Kisangani",
    region: "Tshopo",
    id: "74",
  },
  {
    idSat: "KIS009",
    nom_SAT: "Kisangani",
    shop: "Kisangani",
    region: "Tshopo",
    id: "75",
  },
  {
    idSat: "KIS010",
    nom_SAT: "Wenze_tshai 1",
    shop: "Kisangani",
    region: "Tshopo",
    id: "76",
  },
  {
    idSat: "KIS011",
    nom_SAT: "Wenze_tshai 2",
    shop: "Kisangani",
    region: "Tshopo",
    id: "77",
  },
  {
    idSat: "KIS012",
    nom_SAT: "Yanonge_isangi",
    shop: "Kisangani",
    region: "Tshopo",
    id: "78",
  },
  {
    idSat: "KIS013",
    nom_SAT: "Stade_Pont_Tshopo",
    shop: "Kisangani",
    region: "Tshopo",
    id: "79",
  },
  {
    idSat: "KIS014",
    nom_SAT: "Tshatshi",
    shop: "Kisangani",
    region: "Tshopo",
    id: "80",
  },
  {
    idSat: "KOL001",
    nom_SAT: "LUILU",
    shop: "Kolwezi",
    region: "Katanga",
    id: "81",
  },
  {
    idSat: "KOL002",
    nom_SAT: "MWANGEJI",
    shop: "Kolwezi",
    region: "Katanga",
    id: "82",
  },
  {
    idSat: "KOL003",
    nom_SAT: "MUTOSHI",
    shop: "Kolwezi",
    region: "Katanga",
    id: "83",
  },
  {
    idSat: "KOL004",
    nom_SAT: "LUPUNDU 1",
    shop: "Kolwezi",
    region: "Katanga",
    id: "84",
  },
  {
    idSat: "KOL005",
    nom_SAT: "LUPUNDU 2",
    shop: "Kolwezi",
    region: "Katanga",
    id: "85",
  },
  {
    idSat: "KOL006",
    nom_SAT: "GOUVERNORAT",
    shop: "Kolwezi",
    region: "Katanga",
    id: "86",
  },
  {
    idSat: "KOL007",
    nom_SAT: "ROYAL",
    shop: "Kolwezi",
    region: "Katanga",
    id: "87",
  },
  {
    idSat: "KOL008",
    nom_SAT: "ISTM",
    shop: "Kolwezi",
    region: "Katanga",
    id: "88",
  },
  {
    idSat: "KOL009",
    nom_SAT: "MANIKA",
    shop: "Kolwezi",
    region: "Katanga",
    id: "89",
  },
  {
    idSat: "KOL010",
    nom_SAT: "DILALA",
    shop: "Kolwezi",
    region: "Katanga",
    id: "90",
  },
  {
    idSat: "KOL011",
    nom_SAT: "AEROPORT",
    shop: "Kolwezi",
    region: "Katanga",
    id: "91",
  },
  {
    idSat: "KOL012",
    nom_SAT: "KAPATA",
    shop: "Kolwezi",
    region: "Katanga",
    id: "92",
  },
  {
    idSat: "LUB001",
    nom_SAT: "Briquet",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "93",
  },
  {
    idSat: "LUB002",
    nom_SAT: "Kalubwe",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "94",
  },
  {
    idSat: "LUB003",
    nom_SAT: "Kasapa",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "95",
  },
  {
    idSat: "LUB004",
    nom_SAT: "Mubanzo",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "96",
  },
  {
    idSat: "LUB005",
    nom_SAT: "Tabernacle",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "97",
  },
  {
    idSat: "LUB006",
    nom_SAT: "Munua",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "98",
  },
  {
    idSat: "LUB007",
    nom_SAT: "Karavia",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "99",
  },
  {
    idSat: "LUB008",
    nom_SAT: "HEWA BORA",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "100",
  },
  {
    idSat: "LUB009",
    nom_SAT: "RUASHI",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "101",
  },
  {
    idSat: "LUB010",
    nom_SAT: "REGIDESO",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "102",
  },
  {
    idSat: "LUB011",
    nom_SAT: "LA VALEE",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "103",
  },
  {
    idSat: "LUB012",
    nom_SAT: "BEL AIR",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "104",
  },
  {
    idSat: "LUB013",
    nom_SAT: "KILOBELOBE",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "105",
  },
  {
    idSat: "LUB014",
    nom_SAT: "KAMASAKA",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "106",
  },
  {
    idSat: "LUB015",
    nom_SAT: "KASANGIRI",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "107",
  },
  {
    idSat: "LUB016",
    nom_SAT: "JOLI SITE",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "108",
  },
  {
    idSat: "LUB017",
    nom_SAT: "Tabacongo",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "109",
  },
  {
    idSat: "LUB018",
    nom_SAT: "ERNIKA",
    shop: "Lubumbashi",
    region: "Katanga",
    id: "110",
  },
  {
    idSat: "LUV001",
    nom_SAT: "SANGE",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "111",
  },
  {
    idSat: "LUV002",
    nom_SAT: "LUVUNGI 1",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "112",
  },
  {
    idSat: "LUV003",
    nom_SAT: "LUBARIKA",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "113",
  },
  {
    idSat: "LUV004",
    nom_SAT: "LUVUNGI 2",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "114",
  },
  {
    idSat: "MIN001",
    nom_SAT: "Idjwi",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "115",
  },
  {
    idSat: "MIN002",
    nom_SAT: "Sake_Mushaki",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "116",
  },
  {
    idSat: "MIN003",
    nom_SAT: "Bweremana",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "117",
  },
  {
    idSat: "MIN004",
    nom_SAT: "Minova Centre",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "118",
  },
  {
    idSat: "MIN005",
    nom_SAT: "Numbi_Kalungu",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "119",
  },
  {
    idSat: "MIN006",
    nom_SAT: "Ruhunde",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "120",
  },
  {
    idSat: "MIN007",
    nom_SAT: "Kitchanga_Kilolirwe",
    shop: "Minova",
    region: "Nord-Kivu",
    id: "121",
  },
  {
    idSat: "NGA001",
    nom_SAT: "Brikin",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "122",
  },
  {
    idSat: "NGA002",
    nom_SAT: "Lutendele",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "123",
  },
  {
    idSat: "NGA003",
    nom_SAT: "Badiadingi",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "124",
  },
  {
    idSat: "NGA004",
    nom_SAT: "Upn",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "125",
  },
  {
    idSat: "NGA005",
    nom_SAT: "Cpa",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "126",
  },
  {
    idSat: "NGA006",
    nom_SAT: "Dgc",
    shop: "Ngaliema",
    region: "Kinshasa",
    id: "127",
  },
  {
    idSat: "RUB001",
    nom_SAT: "RUBAYA",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "128",
  },
  {
    idSat: "RUB002",
    nom_SAT: "BWESHA",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "129",
  },
  {
    idSat: "RUB003",
    nom_SAT: "KIBABI",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "130",
  },
  {
    idSat: "RUB004",
    nom_SAT: "MASISI EST",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "131",
  },
  {
    idSat: "RUB005",
    nom_SAT: "MASISI OUEST",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "132",
  },
  {
    idSat: "RUB006",
    nom_SAT: "NGUNGU SUD",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "133",
  },
  {
    idSat: "RUB007",
    nom_SAT: "NGUNGU NORD",
    shop: "Rubaya",
    region: "Nord-Kivu",
    id: "134",
  },
  {
    idSat: "TSH001",
    nom_SAT: "Maluku_centre",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "135",
  },
  {
    idSat: "TSH002",
    nom_SAT: "Menkao",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "136",
  },
  {
    idSat: "TSH003",
    nom_SAT: "Masina",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "137",
  },
  {
    idSat: "TSH004",
    nom_SAT: "Ndjili",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "138",
  },
  {
    idSat: "TSH005",
    nom_SAT: "Bibwa",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "139",
  },
  {
    idSat: "TSH006",
    nom_SAT: "Badara",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "140",
  },
  {
    idSat: "TSH007",
    nom_SAT: "Kingasani",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "141",
  },
  {
    idSat: "TSH008",
    nom_SAT: "Cimetiere",
    shop: "Tshangu",
    region: "Kinshasa",
    id: "142",
  },
  {
    idSat: "UVI001",
    nom_SAT: "KALUNDU",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "143",
  },
  {
    idSat: "UVI002",
    nom_SAT: "STADE_UNITE",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "144",
  },
  {
    idSat: "UVI003",
    nom_SAT: "KIMANGA",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "145",
  },
  {
    idSat: "UVI004",
    nom_SAT: "UVIRA CENTRE",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "146",
  },
  {
    idSat: "UVI005",
    nom_SAT: "KASENGA",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "147",
  },
  {
    idSat: "UVI006",
    nom_SAT: "KAVINVIRA",
    shop: "Uvira",
    region: "Sud-Kivu",
    id: "148",
  },
  {
    idSat: "WAL001",
    nom_SAT: "Walungu centre nord",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "149",
  },
  {
    idSat: "WAL002",
    nom_SAT: "Walungu centre sud",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "150",
  },
  {
    idSat: "WAL003",
    nom_SAT: "Mushinga",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "151",
  },
  {
    idSat: "WAL004",
    nom_SAT: "Kaziba",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "152",
  },
  {
    idSat: "WAL005",
    nom_SAT: "Nyangezi",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "153",
  },
  {
    idSat: "WAL006",
    nom_SAT: "Nzibira",
    shop: "Walungu",
    region: "Sud-Kivu",
    id: "154",
  },
  {
    idSat: "KIS018",
    nom_SAT: "Cabine",
    shop: "Kisangani",
    region: "Tshopo",
    id: "155",
  },
  {
    idSat: "KIS019",
    nom_SAT: "Boyoma",
    shop: "Kisangani",
    region: "Tshopo",
    id: "156",
  },
  {
    idSat: "KIS020",
    nom_SAT: "Banalia",
    shop: "Kisangani",
    region: "Tshopo",
    id: "157",
  },
  {
    idSat: "KIS021",
    nom_SAT: "Artisanal",
    shop: "Kisangani",
    region: "Tshopo",
    id: "158",
  },
];
export const returnDelai = async (
  statut: string,
  deedline: IDeedline[],
  today: IDelai
) => {
  if (deedline && today) {
    const a = _.filter(deedline, { plainte: statut });
    if (a.length > 0) {
      let crite = a[0].critere;
      //si la plainte existe je cherche le jour
      let critere = crite.filter((x) => x.jour === today.day_of_week);
      if (critere.length > 0) {
        //si le critere existe
        let debutHeure = critere[0].debut.split(":")[0];
        let debutMinutes = critere[0].debut.split(":")[1];
        if (
          new Date(today.datetime).getHours() > parseInt(debutHeure) ||
          (new Date(today.datetime).getHours() === parseInt(debutHeure) &&
            new Date(today.datetime).getMinutes() >= parseInt(debutMinutes))
        ) {
          return critere[0]?.delai;
        } else {
          return a[0]?.defaut;
        }
      } else {
        return a[0]?.defaut;
      }
    } else {
      return 0;
    }
  }
};
export const formatTime = (seconds: number) => {
  if (seconds <= 0) {
    return (
      <p
        style={{
          padding: "1px 10px",
          borderRadius: "4px",
          fontSize: "10px",
          margin: "0px",
          background: "red",
          color: "wheat",
        }}
      >
        OUT SLA
      </p>
    );
  } else {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return (
      <p
        style={{
          width: "100%",
          borderRadius: "4px",
          fontSize: "12px",
          textAlign: "center",
          margin: "0px",
          padding: "10px",
          background: "green",
          color: "white",
        }}
      >{`${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`}</p>
    );
  }
};
export function TimeCounter(durationInMinutes: any) {
  const [remainingTimeInSeconds, setRemainingTimeInSeconds] = React.useState(
    durationInMinutes * 60
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTimeInSeconds((prev: any) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    // Nettoyage du timer à la fin
    return () => clearInterval(interval);
  }, []);
  const days = Math.floor(remainingTimeInSeconds / (24 * 3600));
  const hours = Math.floor((remainingTimeInSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((remainingTimeInSeconds % 3600) / 60);
  const seconds = remainingTimeInSeconds % 60;
  if (remainingTimeInSeconds <= 0) {
    return (
      <p
        style={{
          background: "red",
          fontSize: "15px",
          color: "white",
          width: "100%",
          fontWeight: "bolder",
          padding: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        OUT SLA
      </p>
    );
  } else {
    return (
      <p
        style={{
          background: "rgb(0, 169, 254)",
          fontSize: "15px",
          color: "white",
          width: "100%",
          fontWeight: "bolder",
          padding: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px",
          height: "100%",
        }}
      >{`
      ${days + "jr"} ${hours + "h"} ${minutes + "m"} ${seconds + "s"}
      `}</p>
    );
  }
}
export const returnTime = (date1: Date, date2: Date) => {
  let resultat =
    (new Date(date2).getTime() - new Date(date1).getTime()) / 60000;
  if (resultat < 1) {
    return 1;
  } else {
    return resultat;
  }
};
