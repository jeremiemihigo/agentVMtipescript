import { Search } from "@mui/icons-material";
import { Button, FormControl, Grid, OutlinedInput } from "@mui/material";
import { message } from "antd";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
import React from "react";
import { IReponse } from "../../Interface/IPaquet";
import LoaderGif from "../../Static/LoaderGif";
import Logo from "../../Static/Logo";
import { config, lien } from "../../Static/static";
import Header from "../Header";
import "./recherche.style.css";

function Recherche() {
  const [value, setValue] = React.useState<string>("");
  const [data, setData] = React.useState<IReponse[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [cles, setCles] = React.useState<Array<string>>([]);

  const [messageApi, contextHolder] = message.useMessage();
  const successAlert = (texte: string, type: any) => {
    messageApi.open({
      type: type,
      content: "" + texte,
      duration: 5,
    });
  };

  const sendDonner = async (e: any) => {
    e.preventDefault();
    setCles([]);
    try {
      setLoading(true);
      const reponse = await axios.get(`${lien}/oneReponse/${value}`, config);
      if (reponse.data === "token expired") {
        localStorage.removeItem("auth");
        window.location.replace("/");
      } else {
        if (reponse.data.length === 0) {
          successAlert("No result found", "error");
          setLoading(false);
          setCles([]);
        } else {
          setCles(Object.keys(_.groupBy(reponse.data, "demande.lot")));
          setData(reponse.data);
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      <div style={{ margin: "10px" }}>
        <Logo text="Customer visits" />
        {contextHolder}
        <Grid container>
          <Grid item xs={8}>
            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                size="small"
                id="header-search"
                aria-describedby="header-search-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Account_id"
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              paddingLeft: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={(e) => sendDonner(e)}
              variant="contained"
              color="primary"
              disabled={loading}
            >
              <Search fontSize="small" />
            </Button>
          </Grid>
        </Grid>

        {loading && <LoaderGif width={300} height={300} />}
        <Grid sx={{ marginTop: "10px" }}>
          {cles.length > 0 &&
            cles.map((item) => {
              return (
                <React.Fragment key={item}>
                  <div className="lot">{item}</div>
                  <Grid container>
                    {data
                      .filter((x) => x.demande.lot === item)
                      .map((index, key) => {
                        return (
                          <React.Fragment key={key + 1}>
                            <Grid item lg={12}>
                              <div
                                className="reponseClasse"
                                style={{ padding: "5px", minWidth: "100%" }}
                              >
                                <p>
                                  <span style={{ fontWeight: "bolder" }}>
                                    customer_name :
                                  </span>
                                  {" " + index?.nomClient}
                                </p>

                                <p>
                                  <span style={{ fontWeight: "bolder" }}>
                                    Feedback :{" "}
                                  </span>{" "}
                                  {index.demande?.raison.toLowerCase()};
                                </p>
                                <p>
                                  <span style={{ fontWeight: "bolder" }}>
                                    Adresse{" "}
                                  </span>
                                  : {index.demande?.sector},{" "}
                                  {index.demande?.cell}, {index.demande?.sat},{" "}
                                  {index.demande.reference}{" "}
                                </p>
                                <p>
                                  {index.demandeur.fonction}{" "}
                                  {index.demandeur.codeAgent};{" "}
                                  {index.demandeur.nom};{" "}
                                </p>
                                {index.demande?.numero !== "undefined" && (
                                  <p>
                                    <span style={{ fontWeight: "bolder" }}>
                                      Numero joignable du client
                                    </span>{" "}
                                    : {index.demande?.numero}
                                  </p>
                                )}
                                <p style={{ fontWeight: "bolder" }}>
                                  C.U : {index?.codeCu}
                                </p>
                                <p className="retard">
                                  <span style={{ fontWeight: "bolder" }}>
                                    Date
                                  </span>{" "}
                                  {moment(index.demande.createdAt).format(
                                    "DD/MM/YYYY hh:mm"
                                  )}
                                </p>
                                <p>
                                  <span style={{ fontWeight: "bolder" }}>
                                    alt :{" "}
                                  </span>
                                  {index.coordonnee?.altitude + " "}
                                  <span style={{ fontWeight: "bolder" }}>
                                    long :{" "}
                                  </span>
                                  {index.coordonnee?.longitude + " "}
                                  <span style={{ fontWeight: "bolder" }}>
                                    lat :{" "}
                                  </span>
                                  {" " + index.coordonnee?.altitude}
                                </p>
                              </div>
                              <div
                                className="reponseClasse"
                                style={{ display: "flex" }}
                              >
                                <p>
                                  customer :{" "}
                                  <span style={{ fontWeight: "bolder" }}>
                                    {index.clientStatut}
                                  </span>
                                </p>
                                <p>
                                  payment :{" "}
                                  <span style={{ fontWeight: "bolder" }}>
                                    {index.PayementStatut}
                                  </span>
                                </p>
                                <p>Days : {index.consExpDays} jour(s)</p>
                              </div>
                            </Grid>
                            <div className="marge"></div>
                          </React.Fragment>
                        );
                      })}
                  </Grid>
                </React.Fragment>
              );
            })}
        </Grid>
      </div>
    </>
  );
}

export default Recherche;
