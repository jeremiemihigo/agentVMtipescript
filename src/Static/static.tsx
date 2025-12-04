//  export const lien_image = "http://localhost:4000/bboxx/image";
// export const lien = "http://localhost:4000/bboxx/support";
// export const lien_image = "http://109.199.122.241:5000/bboxx/image";

import _ from "lodash";
import React from "react";
import { IDeedline, IDelai, ISat } from "../Interface/IStatic";
const link = "https://visitemenagesbackend.bboxxvm.com";
//const link = "http://localhost:5000";
export const big_data = `${link}/bboxx/support`;
export const account_manager = `${link}/account_manager`;
export const lien_dash = `${link}/bboxx/dashboard`;

export const lien = `${link}/bboxx/support`;
export const lien_socket = link;
export const lien_image = `${link}/bboxx/image`;
export const lien_issue = `${link}/issue`;
export const lien_dt = `${link}/dt`;
export const lien_terrain = `${link}/bboxx/terrain`;
export const communication = `${link}/communication`;
export const lien_file_communication = `${link}/bboxx/file/communication`;

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
    region: "South Kivu",
    shop: "Baraka",
    nom_SAT: "BARAKA NORD",
    _id: "1",
  },
  {
    region: "South Kivu",
    shop: "Baraka",
    nom_SAT: "BARAKA OUEST",
    _id: "2",
  },
  {
    region: "South Kivu",
    shop: "Baraka",
    nom_SAT: "BARAKA SUD",
    _id: "3",
  },
  {
    region: "South Kivu",
    shop: "Baraka",
    nom_SAT: "FIZI KMS",
    _id: "4",
  },
  {
    region: "South Kivu",
    shop: "Baraka",
    nom_SAT: "LUSENDA",
    _id: "5",
  },
  {
    region: "Ituri",
    shop: "Bunia shop",
    nom_SAT: "BANKOKO CENTRE & LUMUMBA",
    _id: "6",
  },
  {
    region: "Ituri",
    shop: "Bunia shop",
    nom_SAT: "HOHO ",
    _id: "7",
  },
  {
    region: "Ituri",
    shop: "Bunia shop",
    nom_SAT: "KANYASI MUDZIPELA ",
    _id: "8",
  },
  {
    region: "Ituri",
    shop: "Bunia shop",
    nom_SAT: "KINDIA & KASENYI",
    _id: "9",
  },
  {
    region: "Ituri",
    shop: "Bunia shop",
    nom_SAT: "SIMBILIYABO ",
    _id: "10",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "MUNUA ",
    _id: "11",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "HEWA BORA & KASAPA",
    _id: "12",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "TABERNACLE ",
    _id: "13",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KASANGIRI",
    _id: "14",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "JOLI SITE ",
    _id: "15",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KARAVIA",
    _id: "16",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KILOBELOBE ",
    _id: "17",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KALUBWE 1",
    _id: "18",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "RUASHI & BEL AIR",
    _id: "19",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KAMASAKA",
    _id: "20",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "TABACONGO & BRIQUET",
    _id: "21",
  },
  {
    region: "Katanga",
    shop: "Lubumbashi",
    nom_SAT: "KALUBWE 2",
    _id: "22",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "LUPUNDU 1",
    _id: "23",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "MUTOSHI",
    _id: "24",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "KAPATA",
    _id: "25",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "ROYAL 2",
    _id: "26",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "DILALA",
    _id: "27",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "AEROPORT",
    _id: "28",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "ISTM",
    _id: "29",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "LUPUNDU 2",
    _id: "30",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "GOUVERNORAT",
    _id: "31",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "MANIKA",
    _id: "32",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "LUILU",
    _id: "33",
  },
  {
    region: "Katanga",
    shop: "Kolwezi",
    nom_SAT: "ROYAL 1",
    _id: "34",
  },
  {
    region: "North Kivu",
    shop: "Butembo",
    nom_SAT: "MUSUSA",
    _id: "35",
  },
  {
    region: "North Kivu",
    shop: "Butembo",
    nom_SAT: "BULENGERA",
    _id: "36",
  },
  {
    region: "North Kivu",
    shop: "Béni",
    nom_SAT: "OICHA",
    _id: "37",
  },
  {
    region: "North Kivu",
    shop: "Béni",
    nom_SAT: "MULEKERA",
    _id: "38",
  },
  {
    region: "North Kivu",
    shop: "Béni",
    nom_SAT: "BUNGULU",
    _id: "39",
  },
  {
    region: "South Kivu",
    shop: "Bukavu shop",
    nom_SAT: "BAGIRA NYAKAVOGO & BAGIRA LUMUMBA ",
    _id: "40",
  },
  {
    region: "South Kivu",
    shop: "Bukavu shop",
    nom_SAT: "BRASSERIE & CIMPUNDA_BUHOLO",
    _id: "41",
  },
  {
    region: "South Kivu",
    shop: "Bukavu shop",
    nom_SAT: "NZIBIRA ",
    _id: "42",
  },
  {
    region: "South Kivu",
    shop: "Bukavu shop",
    nom_SAT: "MUDAKA_BIRAVA & KAVUMU CENTRE OUEST",
    _id: "43",
  },
  {
    region: "South Kivu",
    shop: "Bukavu shop",
    nom_SAT: "HOPITAL_PANZI_UEA & LA CONCORDE_ROUTE D'UVIRA",
    _id: "44",
  },
  {
    region: "South Kivu",
    shop: "Bukavu shop",
    nom_SAT: "kaziba",
    _id: "45",
  },
  {
    region: "South Kivu",
    shop: "Bukavu shop",
    nom_SAT: "MUSHINGA",
    _id: "46",
  },
  {
    region: "South Kivu",
    shop: "Bukavu shop",
    nom_SAT: "LABOTTE_NYALUKEMBA",
    _id: "47",
  },
  {
    region: "South Kivu",
    shop: "Bukavu shop",
    nom_SAT: "Walungu Centre",
    _id: "48",
  },
  {
    region: "South Kivu",
    shop: "Bukavu shop",
    nom_SAT: "KAVUMU CENTRE EST & KATANA_KALEHE",
    _id: "49",
  },
  {
    region: "South Kivu",
    shop: "Bukavu shop",
    nom_SAT: "MAJOR VANGU NORD_SUD & CLINIQUES",
    _id: "50",
  },
  {
    region: "Tshopo",
    shop: "Kisangani",
    nom_SAT: "Yanonge isangi",
    _id: "51",
  },
  {
    region: "Tshopo",
    shop: "Kisangani",
    nom_SAT: "cabine",
    _id: "52",
  },
  {
    region: "Tshopo",
    shop: "Kisangani",
    nom_SAT: "Cathedrale & tp",
    _id: "53",
  },
  {
    region: "Tshopo",
    shop: "Kisangani",
    nom_SAT: "BRALIMA & Stade_Pont_Tshopo",
    _id: "54",
  },
  {
    region: "Tshopo",
    shop: "Kisangani",
    nom_SAT: "Wenze_tshai ",
    _id: "55",
  },
  {
    region: "Tshopo",
    shop: "Kisangani",
    nom_SAT: "Boyoma & FARDC",
    _id: "56",
  },
  {
    region: "Tshopo",
    shop: "Kisangani",
    nom_SAT: "Simisimi",
    _id: "57",
  },
  {
    region: "Tshopo",
    shop: "Kisangani",
    nom_SAT: "Du 30 juin & Motumbe",
    _id: "58",
  },
  {
    region: "Tshopo",
    shop: "Kisangani",
    nom_SAT: "Sotexki ",
    _id: "59",
  },
  {
    region: "Tshopo",
    shop: "Kisangani",
    nom_SAT: "ARTISANAL & Kisangani",
    _id: "60",
  },
  {
    region: "Tshopo",
    shop: "Kisangani",
    nom_SAT: "BANALIA",
    _id: "61",
  },
  {
    region: "Kinshasa",
    shop: "Kinshasa Ngaliema",
    nom_SAT: "BRIKIN",
    _id: "62",
  },
  {
    region: "Kinshasa",
    shop: "Kinshasa Ngaliema",
    nom_SAT: "BADIADINGI",
    _id: "63",
  },
  {
    region: "Kinshasa",
    shop: "Kinshasa Ngaliema",
    nom_SAT: "TSHANGU",
    _id: "64",
  },
  {
    region: "Kinshasa",
    shop: "Kinshasa Ngaliema",
    nom_SAT: "LUTENDELE",
    _id: "65",
  },
  {
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "Himbi -kyeshero",
    _id: "66",
  },
  {
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "Minova Centre",
    _id: "67",
  },
  {
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "Mont-goma et virunga -mabanga",
    _id: "68",
  },
  {
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "BWEREMANA_SAKE_KITCHANGA",
    _id: "69",
  },
  {
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "Ndosho-Turunga",
    _id: "70",
  },
  {
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "New SAT. NGUNGU-MASISI",
    _id: "71",
  },
  {
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "New. SAT. RUBAYA CENTRE.",
    _id: "72",
  },
  {
    region: "North Kivu",
    shop: "Goma",
    nom_SAT: "NUMBI_KALUNGU",
    _id: "73",
  },
  {
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "ARIWARA & ARU & INGBOKOLO",
    _id: "74",
  },
  {
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "KOKIZA & MALEMBA",
    _id: "75",
  },
  {
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "BANDAI & WATSA",
    _id: "76",
  },
  {
    region: "Ituri",
    shop: "Durba",
    nom_SAT: "DJALASIGA",
    _id: "77",
  },
  {
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "KASENGA & KAVINVIRA",
    _id: "78",
  },
  {
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "Kalemie_Sud",
    _id: "79",
  },
  {
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "KALUNDU ",
    _id: "80",
  },
  {
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "LUBARIKA",
    _id: "81",
  },
  {
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "LUVUNGI",
    _id: "82",
  },
  {
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "STADE_UNITE & KIMANGA",
    _id: "83",
  },
  {
    region: "South Kivu",
    shop: "Uvira",
    nom_SAT: "UVIRA CENTRE ",
    _id: "84",
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
