/* eslint-disable react/prop-types */
import { Paper, Typography } from "@mui/material";
import { Input, message } from "antd";
import moment from "moment";
import React from "react";
import { IDemande } from "../Interface/IPaquet";
import ImageComponent from "../Static/ImageComponent";
import { lien_image } from "../Static/static";
import "./structure.style.css";

type Props = {
  donner: IDemande[];
};
function Liste(props: Props) {
  const { donner } = props;

  const [validates, setValidate] = React.useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const success = (texte: string) => {
    navigator.clipboard.writeText(texte);
    messageApi.open({
      type: "success",
      content: "Done " + texte,
      duration: 2,
    });
  };

  const [filterFn, setFilterFn] = React.useState({
    fn: (items: any) => {
      return items;
    },
  });
  const handleChange = (e: any) => {
    let target = e.target.value.toUpperCase();

    setFilterFn({
      fn: (items) => {
        if (target === "") {
          return items;
        } else {
          return items.filter((x: any) =>
            x.reponse[0].codeclient.includes(target)
          );
        }
      },
    });
  };

  return (
    <>
      {contextHolder}
      <div style={{ marginBottom: "10px" }}>
        <Input
          onChange={(e) => handleChange(e)}
          placeholder="Recherchez un code client"
        />
      </div>
      <div className="listeReponses">
        {filterFn.fn(donner).map((index: IDemande) => {
          return (
            <React.Fragment key={index._id}>
              <Paper
                className="paper"
                sx={{
                  background: "rgb(0, 169, 224)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={() => setValidate(index.reponse[0]._id)}
              >
                <div>
                  <p style={{ fontSize: "12px" }}>
                    {index.reponse[0].codeclient +
                      "; " +
                      index.reponse[0].PayementStatut}
                  </p>
                </div>
                <div>
                  <p
                    style={{ float: "right", fontSize: "10px", color: "white" }}
                  >
                    {moment(index.reponse[0].createdAt).fromNow()}
                  </p>
                </div>
              </Paper>
              <>
                {validates === index.reponse[0]._id && (
                  <Paper className="paper">
                    <div className="listeImage">
                      <ImageComponent src={`${lien_image}/${index.file}`} />

                      <Typography component="div" sx={{ fontSize: "13px" }}>
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
                        {index.codeclient !== undefined && index.codeclient};
                        {index?.sat} {index?.reference}
                        {index?.statut}; {index?.raison.toLowerCase()},{" "}
                        {index.numero && index.numero};
                      </Typography>
                    </div>

                    <div className="contentDemande">
                      <div className="reponseListe">
                        <p>
                          {index.reponse[0]?.codeclient};{" "}
                          {" " + index.reponse[0]?.nomClient.toUpperCase()}
                        </p>
                        <p>
                          statut client :{" "}
                          <span style={{ fontWeight: "bolder" }}>
                            {index.reponse[0]?.clientStatut}
                          </span>
                        </p>
                        <p>
                          statut payement
                          <span style={{ fontWeight: "bolder" }}>
                            {" : " + index.reponse[0]?.PayementStatut}
                          </span>{" "}
                        </p>
                        <p>
                          cons.Exp.Days :{" "}
                          <span style={{ fontWeight: "bolder" }}>
                            {index.reponse[0]?.consExpDays} jour(s)
                          </span>
                        </p>
                        <p>{index.reponse[0]?.codeCu}</p>
                      </div>
                    </div>
                  </Paper>
                )}
              </>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default Liste;
