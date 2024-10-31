/* eslint-disable react/prop-types */
// import {  lien_image } from './Static'
import { IDemande } from "../Interface/IPaquet";
import Attente from "./Attente";
import Followup from "./Followup";
import NonConforme from "./NonConforme";
// import "./demandeListe.css";
import Valide from "./Valide";

type Props = {
  donner: IDemande[];
  critere: string;
};

function Listes(props: Props) {
  const { donner, critere } = props;
  return (
    <div className="listeAll">
      <div className="liste">
        {critere === "valide" && <Valide donner={donner} />}
        {critere === "attentes" && <Attente donner={donner} />}
        {critere === "nConformes" && <NonConforme donner={donner} />}
        {critere === "followup" && <Followup donner={donner} />}
      </div>
    </div>
  );
}

export default Listes;
