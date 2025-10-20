//export const lien = "http://localhost:5000/bboxx/support";
//  export const lien_image = "http://localhost:4000/bboxx/image";
// export const lien = "http://localhost:4000/bboxx/support";
// export const lien_image = "http://109.199.122.241:5000/bboxx/image";

import _ from "lodash";
import React from "react";
import { IDeedline, IDelai, ISat } from "../Interface/IStatic";
const link = "https://visitemenagesbackend.bboxxvm.com";
//const link = "http://localhost:5000";
export const big_data =
  "https://visitemenagesbackend.bboxxvm.com/bboxx/support";
//export const big_data = "http://localhost:5000/bboxx/support";
export const account_manager = `${link}/account_manager`;
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
export const raison = [
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
    idSat: "1",
    region: "Ituri",
    shop: "Bunia Shop",
    nom_SAT: "BANKOKO CENTRE",
    _id: "1",
  },
  {
    idSat: "2",
    region: "Ituri",
    shop: "Bunia Shop",
    nom_SAT: "HOHO 1",
    _id: "2",
  },
  {
    idSat: "3",
    region: "Ituri",
    shop: "Bunia Shop",
    nom_SAT: "HOHO 2",
    _id: "3",
  },
  {
    idSat: "4",
    region: "Ituri",
    shop: "Bunia Shop",
    nom_SAT: "KANYASI MUDZIPELA 1 & 2",
    _id: "4",
  },
  {
    idSat: "5",
    region: "Ituri",
    shop: "Bunia Shop",
    nom_SAT: "KASENYI",
    _id: "5",
  },
  {
    idSat: "6",
    region: "Ituri",
    shop: "Bunia Shop",
    nom_SAT: "KINDIA",
    _id: "6",
  },
  {
    idSat: "7",
    region: "Ituri",
    shop: "Bunia Shop",
    nom_SAT: "LUMUMBA",
    _id: "7",
  },
  {
    idSat: "8",
    region: "Ituri",
    shop: "Bunia Shop",
    nom_SAT: "SIMBILIYABO 1 & 2",
    _id: "8",
  },
  {
    idSat: "9",
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "ARIWARA 1 & 2",
    _id: "9",
  },
  {
    idSat: "10",
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "ARU",
    _id: "10",
  },
  {
    idSat: "11",
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "BANDAI",
    _id: "11",
  },
  {
    idSat: "12",
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "DJALASIGA",
    _id: "12",
  },
  {
    idSat: "13",
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "INGBOKOLO",
    _id: "13",
  },
  {
    idSat: "14",
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "KOKIZA",
    _id: "14",
  },
  {
    idSat: "15",
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "MALEMBA",
    _id: "15",
  },
  {
    idSat: "16",
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "WATSA",
    _id: "16",
  },
  {
    idSat: "17",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "AEROPORT",
    _id: "17",
  },
  {
    idSat: "18",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "DILALA",
    _id: "18",
  },
  {
    idSat: "19",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "GOUVERNORAT 1",
    _id: "19",
  },
  {
    idSat: "20",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "GOUVERNORAT 2",
    _id: "20",
  },
  {
    idSat: "21",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "ISTM 1",
    _id: "21",
  },
  {
    idSat: "22",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "ISTM 2",
    _id: "22",
  },
  {
    idSat: "23",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "KAPATA",
    _id: "23",
  },
  {
    idSat: "24",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "KAPATA ",
    _id: "24",
  },
  {
    idSat: "25",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "LUILU",
    _id: "25",
  },
  {
    idSat: "26",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "LUPUNDU 1",
    _id: "26",
  },
  {
    idSat: "27",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "LUPUNDU 2",
    _id: "27",
  },
  {
    idSat: "28",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "MANIKA",
    _id: "28",
  },
  {
    idSat: "29",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "MUTOSHI",
    _id: "29",
  },
  {
    idSat: "30",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "MWANGEJI",
    _id: "30",
  },
  {
    idSat: "31",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "ROYAL 1",
    _id: "31",
  },
  {
    idSat: "32",
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "ROYAL 2",
    _id: "32",
  },
  {
    idSat: "33",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "HEWA BORA",
    _id: "33",
  },
  {
    idSat: "34",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "JOLI SITE 1 & 2",
    _id: "34",
  },
  {
    idSat: "35",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KALUBWE 1",
    _id: "35",
  },
  {
    idSat: "36",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KALUBWE 2",
    _id: "36",
  },
  {
    idSat: "37",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KAMASAKA",
    _id: "37",
  },
  {
    idSat: "38",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KARAVIA",
    _id: "38",
  },
  {
    idSat: "39",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KASANGIRI",
    _id: "39",
  },
  {
    idSat: "40",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KASAPA",
    _id: "40",
  },
  {
    idSat: "41",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KILOBELOBE 1 & 2",
    _id: "41",
  },
  {
    idSat: "42",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "MUNUA 1",
    _id: "42",
  },
  {
    idSat: "43",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "MUNUA 2",
    _id: "43",
  },
  {
    idSat: "44",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "RUASHI & BEL AIR",
    _id: "44",
  },
  {
    idSat: "45",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "TABACONGO & BRIQUET",
    _id: "45",
  },
  {
    idSat: "46",
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "TABERNACLE 1 & 2",
    _id: "46",
  },
  {
    idSat: "47",
    region: "Kinshasa",
    shop: "Kinshasa Ngaliema",
    nom_SAT: "BADIADINGI 1",
    _id: "47",
  },
  {
    idSat: "48",
    region: "Kinshasa",
    shop: "Kinshasa Ngaliema",
    nom_SAT: "BADIADINGI 2",
    _id: "48",
  },
  {
    idSat: "49",
    region: "Kinshasa",
    shop: "Kinshasa Ngaliema",
    nom_SAT: "BRIKIN ",
    _id: "49",
  },
  {
    idSat: "50",
    region: "Kinshasa",
    shop: "Kinshasa Ngaliema",
    nom_SAT: "LUTENDELE ",
    _id: "50",
  },
  {
    idSat: "51",
    region: "Kinshasa",
    shop: "Kinshasa Ngaliema",
    nom_SAT: "Tshangu",
    _id: "51",
  },
  {
    idSat: "52",
    region: "North Kivu",
    shop: "Beni",
    nom_SAT: "BEU",
    _id: "52",
  },
  {
    idSat: "53",
    region: "North Kivu",
    shop: "Beni",
    nom_SAT: "BUNGULU",
    _id: "53",
  },
  {
    idSat: "54",
    region: "North Kivu",
    shop: "Beni",
    nom_SAT: "MULEKERA",
    _id: "54",
  },
  {
    idSat: "55",
    region: "North Kivu",
    shop: "Beni",
    nom_SAT: "OICHA",
    _id: "55",
  },
  {
    idSat: "56",
    region: "North Kivu",
    shop: "Butembo",
    nom_SAT: "BULENGERA",
    _id: "56",
  },
  {
    idSat: "57",
    region: "North Kivu",
    shop: "Butembo",
    nom_SAT: "KIMEMI",
    _id: "57",
  },
  {
    idSat: "58",
    region: "North Kivu",
    shop: "Butembo",
    nom_SAT: "MUSUSA",
    _id: "58",
  },
  {
    idSat: "59",
    region: "North Kivu",
    shop: "Butembo",
    nom_SAT: "VULAMBA",
    _id: "59",
  },
  {
    idSat: "60",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "BWEREMANA_SAKE_KITCHANGA",
    _id: "60",
  },
  {
    idSat: "61",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "BWESHA",
    _id: "61",
  },
  {
    idSat: "62",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "Himbi",
    _id: "62",
  },
  {
    idSat: "63",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "Keshero",
    _id: "63",
  },
  {
    idSat: "64",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "MASISI EST",
    _id: "64",
  },
  {
    idSat: "65",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "MINOVA CENTRE",
    _id: "65",
  },
  {
    idSat: "66",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "Mont_Goma",
    _id: "66",
  },
  {
    idSat: "67",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "Ndosho",
    _id: "67",
  },
  {
    idSat: "68",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "NGUNGU ",
    _id: "68",
  },
  {
    idSat: "69",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "NUMBI_KALUNGU",
    _id: "69",
  },
  {
    idSat: "70",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "RUBAYA SAT",
    _id: "70",
  },
  {
    idSat: "71",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "RUHUNDE",
    _id: "71",
  },
  {
    idSat: "72",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "Turunga",
    _id: "72",
  },
  {
    idSat: "73",
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "Virunga_Mabanga",
    _id: "73",
  },
  {
    idSat: "74",
    region: "South Kivu",
    shop: "Baraka",
    nom_SAT: "BARAKA NORD",
    _id: "74",
  },
  {
    idSat: "75",
    region: "South Kivu",
    shop: "Baraka",
    nom_SAT: "BARAKA OUEST",
    _id: "75",
  },
  {
    idSat: "76",
    region: "South Kivu",
    shop: "Baraka",
    nom_SAT: "BARAKA SUD",
    _id: "76",
  },
  {
    idSat: "77",
    region: "South Kivu",
    shop: "Baraka",
    nom_SAT: "FIZI KMS",
    _id: "77",
  },
  {
    idSat: "78",
    region: "South Kivu",
    shop: "Baraka",
    nom_SAT: "LUSENDA",
    _id: "78",
  },
  {
    idSat: "79",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "BAGIRA LUMUMBA 1 & 2",
    _id: "79",
  },
  {
    idSat: "80",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "BAGIRA_NYAKAVOGO",
    _id: "80",
  },
  {
    idSat: "81",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "BRASSERIE",
    _id: "81",
  },
  {
    idSat: "82",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "CIMPUNDA BUHOLO",
    _id: "82",
  },
  {
    idSat: "83",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "HOPITAL PANZI-UEA",
    _id: "83",
  },
  {
    idSat: "84",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "KALEHE-KATANA",
    _id: "84",
  },
  {
    idSat: "85",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "KAVUMU CENTRE EST",
    _id: "85",
  },
  {
    idSat: "86",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "KAVUMU CENTRE OUEST",
    _id: "86",
  },
  {
    idSat: "87",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "KAZIBA",
    _id: "87",
  },
  {
    idSat: "88",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "LA CONCORDE-ROUTE D'UVIRA",
    _id: "88",
  },
  {
    idSat: "89",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "LABOTTE_NYALUKEMBA",
    _id: "89",
  },
  {
    idSat: "90",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "MAJOR VANGU Nord",
    _id: "90",
  },
  {
    idSat: "91",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "MAJOR VANGU Sud & CLINIQUE",
    _id: "91",
  },
  {
    idSat: "92",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "MUDAKA",
    _id: "92",
  },
  {
    idSat: "93",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "MUSHINGA",
    _id: "93",
  },
  {
    idSat: "94",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "NZIBIRA",
    _id: "94",
  },
  {
    idSat: "95",
    region: "South Kivu",
    shop: "Bukavu Shop",
    nom_SAT: "Walungu Centre",
    _id: "95",
  },
  {
    idSat: "96",
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "Kalemie_Sud",
    _id: "96",
  },
  {
    idSat: "97",
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "KALUNDU ",
    _id: "97",
  },
  {
    idSat: "98",
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "KASENGA & KAVINVIRA",
    _id: "98",
  },
  {
    idSat: "99",
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "KIMANGA",
    _id: "99",
  },
  {
    idSat: "100",
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "LUBARIKA",
    _id: "100",
  },
  {
    idSat: "101",
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "LUVUNGI",
    _id: "101",
  },
  {
    idSat: "102",
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "STADE_UNITE ",
    _id: "102",
  },
  {
    idSat: "103",
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "UVIRA CENTRE 1",
    _id: "103",
  },
  {
    idSat: "104",
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "UVIRA CENTRE 2",
    _id: "104",
  },
  {
    idSat: "105",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "ARTISANAL",
    _id: "105",
  },
  {
    idSat: "106",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "BANALIA",
    _id: "106",
  },
  {
    idSat: "107",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "BOYOMA",
    _id: "107",
  },
  {
    idSat: "108",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "BRALIMA",
    _id: "108",
  },
  {
    idSat: "109",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "BRALIMA 2",
    _id: "109",
  },
  {
    idSat: "110",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Cabine",
    _id: "110",
  },
  {
    idSat: "111",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Cathedrale",
    _id: "111",
  },
  {
    idSat: "112",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Cathedrale 2",
    _id: "112",
  },
  {
    idSat: "113",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Du 30 juin",
    _id: "113",
  },
  {
    idSat: "114",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "FARDC",
    _id: "114",
  },
  {
    idSat: "115",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Kisangani",
    _id: "115",
  },
  {
    idSat: "116",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Motumbe",
    _id: "116",
  },
  {
    idSat: "117",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Simisimi",
    _id: "117",
  },
  {
    idSat: "118",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Simisimi 2",
    _id: "118",
  },
  {
    idSat: "119",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Sotexki 1",
    _id: "119",
  },
  {
    idSat: "120",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Sotexki 2",
    _id: "120",
  },
  {
    idSat: "121",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Sotexki 3",
    _id: "121",
  },
  {
    idSat: "122",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Stade_Pont_Tshopo",
    _id: "122",
  },
  {
    idSat: "123",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "tp",
    _id: "123",
  },
  {
    idSat: "124",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Wenze_tshai 1",
    _id: "124",
  },
  {
    idSat: "125",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Wenze_tshai 2",
    _id: "125",
  },
  {
    idSat: "126",
    region: "Tshopo",
    shop: "Kisangani Shop",
    nom_SAT: "Yanonge_isangi",
    _id: "126",
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
