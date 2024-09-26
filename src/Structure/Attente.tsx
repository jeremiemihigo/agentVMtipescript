/* eslint-disable react/prop-types */
import { Edit } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { message } from "antd";
import moment from "moment";
import ImageComponent from "../Static/ImageComponent";
// import Popup from "../Control/Popup";
import { lien_image } from "../Static/static";
// import UpdateDemande from "../UpdateDemande";
import { useNavigate } from "react-router-dom";
import { IDemande } from "../Interface/IPaquet";
import "./structure.style.css";

type Props = {
  donner: IDemande[];
};

function Attente(props: Props) {
  const { donner } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const success = (texte: string) => {
    navigator.clipboard.writeText(texte);
    messageApi.open({
      type: "success",
      content: "Done " + texte,
      duration: 2,
    });
  };

  const navigation = useNavigate();

  const updateDemande = (index: IDemande) => {
    navigation("/update", { state: index });
  };

  return (
    <div className="listeAll">
      <>{contextHolder}</>
      {donner.map((index) => {
        return (
          <div key={index._id} className="messagesToutes">
            <div className="listeImage">
              <ImageComponent src={`${lien_image}/${index.file}`} />
              <Typography component="p" sx={{ fontSize: "13px" }}>
                ID : {index.idDemande}
                <span
                  onClick={() => success(index.idDemande)}
                  style={{
                    marginLeft: "10px",
                    color: "blue",
                    fontWeight: "bolder",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  copy ID
                </span>
                <span style={{ float: "right", fontSize: "10px" }}>
                  {moment(index.createdAt).fromNow()}
                </span>
                {index.codeclient !== undefined && index.codeclient};
                {index?.sat} {index?.reference}
                {index?.statut}; {index?.raison.toLowerCase()},{" "}
                {index.numero && index.numero};
              </Typography>
            </div>
            <div className="itemButtons">
              {index.reponse.length <= 0 && (
                <div onClick={() => updateDemande(index)}>
                  <Edit fontSize="small" /> <span>Modifier</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Attente;
