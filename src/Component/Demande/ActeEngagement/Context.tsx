/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { message } from "antd";
import axios from "axios";
import React, { createContext, ReactNode } from "react";
import { useSelector } from "react-redux";
import { IInitiale } from "../../../Interface/Demande";
import { IRaison, ISat } from "../../../Interface/IStatic";
import { IUser } from "../../../Interface/IUser";
import Loading from "../../../Static/Loading";
import { config, lien } from "../../../Static/static";
import "../VisiteMenage/demande.style.css";

interface Localisation {
  latitude?: string;
  longitude?: string;
  altitude?: string;
}
interface IinitialActee {
  raison_refus: string;
  feedback_account_manager: string;
  montant: string;
  premier_engagement: { montant: string; date: string };
  deuxieme_engagement: { montant: string; date: string };
  troisieme_engagement: { montant: string; date: string };
}
interface IPhotos {
  acte_engagement: File | null;
  acte_engagement_client: File | null;
  googlemap: File | null;
}
// Interface pour définir la structure du contexte
interface ActeEngagementContextType {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  sendData: (e: React.MouseEvent<HTMLButtonElement>) => void;
  initial: IInitiale;
  typephoto: string;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  setTypePhoto: React.Dispatch<React.SetStateAction<string>>;
  appeller: string;
  setAppeller: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setCompressedFile: React.Dispatch<React.SetStateAction<File | null>>;
  compressedFile: File | null;
  location: Localisation;
  setLocation: React.Dispatch<React.SetStateAction<Localisation>>;
  raisonSelect: IRaison | null;
  setRaisonSelect: React.Dispatch<React.SetStateAction<IRaison | null>>;
  raisonRwrite: string;
  setRaisonRwrite: React.Dispatch<React.SetStateAction<string>>;
  itemswap: string[];
  setItemSwap: React.Dispatch<React.SetStateAction<string[]>>;
  satSelect: ISat | null;
  setSatSelect: React.Dispatch<React.SetStateAction<ISat | null>>;
  refus: string;
  setRefus: React.Dispatch<React.SetStateAction<string>>;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  action: string;
  initialActe: IinitialActee;
  setinitialActeActe: React.Dispatch<React.SetStateAction<IinitialActee>>;
  compressedFileActe: IPhotos;
  setcompressedFileActe: React.Dispatch<React.SetStateAction<IPhotos>>;
}

// Valeur par défaut du contexte
const defaultContextValue: ActeEngagementContextType = {
  handleChange: () => {},
  sendData: () => {},
  initial: {
    cell: "",
    codeclient: "",
    commune: "",
    reference: "",
    commentaire: "",
    sector: "",
    numero: "",
  },
  raisonRwrite: "",
  setRaisonRwrite: () => {},
  typephoto: "",
  activeStep: 0,
  setActiveStep: () => {},
  setAppeller: () => {},
  appeller: "",
  setTypePhoto: () => {},
  value: "",
  setValue: () => {},
  setCompressedFile: () => {},
  compressedFile: null,
  location: { latitude: "", longitude: "", altitude: "" },
  initialActe: {
    raison_refus: "",
    feedback_account_manager: "",
    montant: "",
    premier_engagement: { montant: "", date: "" },
    deuxieme_engagement: { montant: "", date: "" },
    troisieme_engagement: { montant: "", date: "" },
  },
  compressedFileActe: {
    acte_engagement: null,
    acte_engagement_client: null,
    googlemap: null,
  },
  setcompressedFileActe: () => {},
  setinitialActeActe: () => {},
  setLocation: () => {},
  setRaisonSelect: () => {},
  raisonSelect: null,
  itemswap: [""],
  setItemSwap: () => {},
  setSatSelect: () => null,
  satSelect: null,
  refus: "",
  setRefus: () => {},
  action: "",
  setAction: () => {},
};

// Création du contexte avec une valeur par défaut
export const ActeEngagementContext =
  createContext<ActeEngagementContextType>(defaultContextValue);

// Interface pour les props du provider
interface ActeEngagementProviderProps {
  children: ReactNode;
}

const ActeEngagementProvider: React.FC<ActeEngagementProviderProps> = ({
  children,
}) => {
  const [initial, setInitial] = React.useState<IInitiale>({
    cell: "",
    codeclient: "",
    commune: "",
    reference: "",
    commentaire: "",
    sector: "",
    numero: "",
  });
  const [typephoto, setTypePhoto] = React.useState<string>("");
  const [value, setValue] = React.useState<string>("");
  const [compressedFile, setCompressedFile] = React.useState<File | null>(null);
  const [raisonSelect, setRaisonSelect] = React.useState<IRaison | null>(null);
  const [itemswap, setItemSwap] = React.useState<string[]>([]);
  const [raisonRwrite, setRaisonRwrite] = React.useState("");
  const [loading, setLoadings] = React.useState<boolean>(false);
  const [appeller, setAppeller] = React.useState<string>("");
  const [location, setLocation] = React.useState<Localisation>({
    latitude: "",
    longitude: "",
    altitude: "",
  });
  const [satSelect, setSatSelect] = React.useState<ISat | null>(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const userConnect: IUser = useSelector((state: any) => state.user?.user);
  //Acte d4engagement
  const [refus, setRefus] = React.useState<string>("");
  const [action, setAction] = React.useState<string>("");
  const [initialActe, setinitialActeActe] = React.useState<IinitialActee>({
    raison_refus: "",
    montant: "",
    feedback_account_manager: "",
    premier_engagement: { montant: "", date: "" },
    deuxieme_engagement: { montant: "", date: "" },
    troisieme_engagement: { montant: "", date: "" },
  });
  const [compressedFileActe, setcompressedFileActe] = React.useState<IPhotos>({
    acte_engagement: null,
    acte_engagement_client: null,
    googlemap: null,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setInitial({ ...initial, [name]: value });
  };

  const [messageApi, contextHolder] = message.useMessage();
  const successAlert = (texte: string, type: any) => {
    messageApi.open({
      type,
      content: "" + texte,
      duration: 5,
    });
  };
  const sendData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      setLoadings(true);
      if (raisonSelect?.idFeedback === "2" && itemswap.length === 0) {
        successAlert(
          "Veuillez sélectionner le(s) matériel(s) que le client souhaite échanger",
          "error"
        );
      } else if (
        !initial?.reference ||
        satSelect === null ||
        !initial?.cell ||
        typephoto === "" ||
        !raisonSelect ||
        (raisonSelect?.idFeedback === "autre" && raisonRwrite === "") ||
        value === ""
      ) {
        successAlert(
          "Veuillez renseigner les champs ayant l'asterisque ainsi que la photo",
          "error"
        );
      } else if (
        (refus === "NON" &&
          (initialActe.raison_refus === "" ||
            initialActe.feedback_account_manager === "")) ||
        (refus === "ABSENT" && appeller === "") ||
        (refus === "OUI" &&
          (initialActe.montant === "" ||
            initialActe.premier_engagement.montant === "" ||
            initialActe.premier_engagement.date === "" ||
            initialActe.deuxieme_engagement.montant === "" ||
            initialActe.deuxieme_engagement.date === "" ||
            initialActe.troisieme_engagement.montant === "" ||
            initialActe.troisieme_engagement.date === "" ||
            initialActe.feedback_account_manager === "" ||
            !compressedFileActe.acte_engagement ||
            !compressedFileActe.acte_engagement_client ||
            !compressedFileActe.googlemap))
      ) {
        successAlert(
          "Veuillez renseigner les champs ayant l'asterisque",
          "error"
        );
      } else {
        let raison =
          raisonSelect?.idFeedback === "autre"
            ? raisonRwrite
            : raisonSelect?.idFeedback;
        let days = initial?.jours ? initial?.jours : 0;
        const data = new FormData();
        data.append("file", compressedFile as Blob);
        data.append(
          "acte_engagement",
          compressedFileActe.acte_engagement as Blob
        );
        data.append(
          "acte_engagement_client",
          compressedFileActe.acte_engagement_client as Blob
        );
        data.append("refus_signer", refus);
        data.append("raison_refus_signer", initialActe.raison_refus);
        data.append("feedback_agent", initialActe.feedback_account_manager);
        data.append("type_action", action);
        data.append("googlemap", compressedFileActe.googlemap as Blob);
        data.append("longitude", "" + location?.longitude);
        data.append("latitude", "" + location?.latitude);
        data.append("altitude", "" + location?.altitude);
        data.append("codeAgent", userConnect.codeAgent);
        data.append("codeZone", userConnect.codeZone);
        data.append("fonctionAgent", userConnect.fonction);
        data.append("codeclient", "" + initial?.codeclient);
        data.append("statut", value);
        data.append("appeller", appeller);
        data.append("raison", "" + raison);
        data.append("itemswap", itemswap.length > 0 ? itemswap.join(";") : "");
        data.append("sector", initial?.sector);
        data.append("cell", initial?.cell);
        data.append("typeImage", typephoto);
        data.append("reference", initial?.reference);
        data.append("sat", satSelect?.nom_SAT);
        data.append("numero", "" + initial?.numero);
        data.append("commune", initial?.commune);
        data.append("commentaire", "" + initial.commentaire);
        data.append("type", "acteengagement");
        data.append("jours", "" + days);

        data.append("montant", initialActe.montant);
        data.append(
          "premier_engagement",
          JSON.stringify(initialActe.premier_engagement)
        );
        data.append(
          "deuxieme_engagement",
          JSON.stringify(initialActe.deuxieme_engagement)
        );
        data.append(
          "troisieme_engagement",
          JSON.stringify(initialActe.troisieme_engagement)
        );

        const response = await axios.post(lien + "/demande", data, config);
        if (response.status === 200) {
          window.location.replace("/demande_acteengagement");
        } else {
          successAlert("" + response.data, "error");
        }
      }
      setLoadings(false);
    } catch (error: any) {
      setLoadings(false);
      if (error.code === "ERR_NETWORK") {
        successAlert(
          "Rassurez-vous que votre appareil a une connexion active",
          "error"
        );
      }
    }
  };

  const contextValue = {
    handleChange: handleChange,
    initial: initial,
    typephoto,
    setTypePhoto,
    value,
    setValue,
    compressedFile,
    setCompressedFile,
    appeller,
    setAppeller,
    location,
    setLocation,
    raisonSelect,
    setRaisonSelect,
    raisonRwrite,
    setRaisonRwrite,
    itemswap,
    setItemSwap,
    satSelect,
    setSatSelect,
    refus,
    setRefus,
    action,
    setAction,
    initialActe,
    setinitialActeActe,
    compressedFileActe,
    setcompressedFileActe,
    sendData,
    activeStep,
    setActiveStep,
    // Passez ici vos valeurs d'état et fonctions
    // data,
    // loading,
    // error,
    // updateData,
  };

  return (
    <ActeEngagementContext.Provider value={contextValue}>
      {contextHolder}

      {children}
      <Loading open={loading} title="Please wait..." />
    </ActeEngagementContext.Provider>
  );
};

export default React.memo(ActeEngagementProvider);
