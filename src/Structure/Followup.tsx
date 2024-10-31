/* eslint-disable react/prop-types */
import { Edit } from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import { message } from "antd";
import { motion } from "framer-motion";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { IDemande } from "../Interface/IPaquet";
import ImageComponent from "../Static/ImageComponent";
import { lien_image } from "../Static/static";

// import UpdateDemande from "../UpdateDemande";

type Props = {
  donner: IDemande[];
};

function Followup(props: Props) {
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
    <>
      {contextHolder}
      <div>
        <p
          style={{
            fontSize: "12px",
            textAlign: "center",
            fontWeight: "bolder",
            marginBottom: "15px",
          }}
        >
          Ces visites sont conformes et seront considérées comme des Follow up
        </p>
      </div>
      <div>
        {donner &&
          donner.map((index, key) => {
            return (
              <motion.div
                initial={{ x: `-${(key + 1) * 100}vw` }}
                animate={{ x: 0 }}
                key={index._id}
                transition={{
                  type: "spring",
                  delay: 0.5,
                  duration: 5,
                  stiffness: 80,
                }}
              >
                <Paper
                  elevation={3}
                  sx={{ marginBottom: "10px", padding: "5px" }}
                >
                  <div className="listeImage">
                    <ImageComponent src={`${lien_image}/${index.file}`} />

                    <Typography component="p" sx={{ fontSize: "13px" }}>
                      code : {index.idDemande}
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
                        copy code
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
                    <div onClick={() => updateDemande(index)}>
                      <Edit fontSize="small" /> <span>Modifier</span>
                    </div>
                  </div>
                  {index?.typeVisit?.followup === "followup" && (
                    <p
                      style={{
                        fontSize: "12px",
                        lineHeight: "1.2rem",
                        textAlign: "center",
                      }}
                    >
                      {`
                 Client : ${index.typeVisit.codeclient} visité le ${moment(
                        index.typeVisit.dateFollowup
                      ).format("DD-MM-YYYY")}
                 
                 `}
                    </p>
                  )}
                </Paper>
              </motion.div>
            );
          })}
      </div>
    </>
  );
}

export default Followup;
