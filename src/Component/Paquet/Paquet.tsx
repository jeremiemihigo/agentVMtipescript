/* eslint-disable react/prop-types */
import { Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IDemande } from "../../Interface/IPaquet.js";
import LoaderGif from "../../Static/LoaderGif.js";
import Logo from "../../Static/Logo.js";
import { big_data, config } from "../../Static/static.js";
import Liste from "../../Structure/Listes";
import "./Paquet.style.css";

interface TDonner {
  allData: IDemande[];
  attente: IDemande[];
  nConforme: IDemande[];
  valide: IDemande[];
  followup: IDemande[];
  _id: string;
}

interface Lot {
  donner: IDemande[];
  critere: string;
}

function Paquet() {
  const [data, setData] = React.useState<TDonner>();
  const [lotSelect, setLotSelect] = React.useState<Lot>();
  const navigation = useNavigate();
  const loading = async () => {
    try {
      const response = await axios.get(`${big_data}/paquet`, config);
      if (response.status === 201) {
        localStorage.removeItem("auth");
        localStorage.removeItem("codeAgent");
        localStorage.removeItem("codeZone");
        localStorage.removeItem("nom");
        localStorage.removeItem("shop");
        navigation("/", { replace: true });
      } else {
        const data: TDonner = response.data[0];
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    loading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const choisirLot = (paquet: IDemande[], critere: string) => {
    setLotSelect({ donner: paquet, critere });
  };
  return (
    <>
      <div style={{ padding: "15px" }}>
        <Logo text="Paquet" />
        {!data ? (
          <LoaderGif width={400} height={400} />
        ) : (
          <>
            {!lotSelect && (
              <Grid container>
                <Grid
                  item
                  lg={12}
                  xs={12}
                  sm={12}
                  md={12}
                  className="lotActive lot"
                >
                  <Typography component="p">
                    {data ? data._id : "Loading..."}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  className="conforme"
                  onClick={() => data && choisirLot(data.valide, "valide")}
                >
                  <Paper elevation={3} className="paper">
                    <Grid
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Grid sx={{ marginRight: "10px" }}>
                        <Typography noWrap component="p" className="title">
                          Visites (visits)
                        </Typography>
                        <Typography component="p" className="value">
                          {
                            data.valide.filter(
                              (x: any) => !x.reponse[0].followup
                            ).length
                          }
                        </Typography>
                      </Grid>
                    </Grid>

                    {data && data.valide.length > 0 ? (
                      <Typography
                        component="p"
                        noWrap
                        style={{ fontSize: "9px", textAlign: "center" }}
                      >
                        Approved by support team
                      </Typography>
                    ) : (
                      <p></p>
                    )}
                  </Paper>
                </Grid>
                <Grid
                  item
                  xs={6}
                  className="attente"
                  onClick={() => data && choisirLot(data.attente, "attentes")}
                >
                  <Paper elevation={3} className="paper">
                    <Typography noWrap component="p" className="title">
                      En Attentes (Waiting)
                    </Typography>
                    {data ? (
                      <Typography component="p" className="content">
                        {data.attente.length}
                      </Typography>
                    ) : (
                      <Typography component="p" className="loading">
                        Loading...
                      </Typography>
                    )}
                    {data && data.attente.length > 0 ? (
                      <p style={{ fontSize: "9px", textAlign: "center" }}>
                        Being verified
                      </p>
                    ) : (
                      <p style={{ fontSize: "9px", textAlign: "center" }}>
                        Everything is done
                      </p>
                    )}
                  </Paper>
                </Grid>
                <Grid
                  item
                  xs={6}
                  className="nConforme"
                  onClick={() =>
                    data && choisirLot(data.nConforme, "nConformes")
                  }
                >
                  <Paper elevation={3} className="paper">
                    <Typography noWrap component="p" className="title">
                      Non conformes (Non-compliant)
                    </Typography>
                    {data ? (
                      <Typography component="p" className="content">
                        {data.nConforme.length}
                      </Typography>
                    ) : (
                      <Typography component="p" className="loading">
                        Loading...
                      </Typography>
                    )}
                    {data && (
                      <Typography
                        noWrap
                        component="p"
                        style={{ fontSize: "9px", textAlign: "center" }}
                      >
                        It is possible to make changes
                      </Typography>
                    )}
                  </Paper>
                </Grid>
                <Grid
                  item
                  xs={6}
                  className="nConforme"
                  onClick={() => data && choisirLot(data.followup, "followup")}
                >
                  <Paper elevation={3} className="paper">
                    <Typography noWrap component="p" className="title">
                      Suivi (Follow up)
                    </Typography>
                    {data ? (
                      <Typography component="p" className="content">
                        {data.followup.length}
                      </Typography>
                    ) : (
                      <Typography component="p" className="loading">
                        Loading...
                      </Typography>
                    )}
                    {data && data.followup.length > 0 && (
                      <Typography
                        component="p"
                        noWrap
                        style={{ fontSize: "9px", textAlign: "center" }}
                      >
                        We are waiting for the followup
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              </Grid>
            )}
          </>
        )}

        {lotSelect && (
          <Liste donner={lotSelect.donner} critere={lotSelect.critere} />
        )}
      </div>
    </>
  );
}

export default Paquet;
