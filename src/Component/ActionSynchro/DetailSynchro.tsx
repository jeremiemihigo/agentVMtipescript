import { Grid, Paper, Typography } from "@mui/material";
import moment from "moment";
import { useLocation } from "react-router-dom";
import { IIssue } from "../../Interface/Issue";
import Logo from "../../Static/Logo";
import { TimeCounter } from "../../Static/static";
import Header from "../Header";
import "./detail.style.css";

function DetailPlainte() {
  const location = useLocation();
  const plainteSelect: IIssue = location.state;
  const returnTime = (date1: Date, date2: Date) => {
    let resultat =
      (new Date(date2).getTime() - new Date(date1).getTime()) / 60000;
    if (resultat < 1) {
      return 1;
    } else {
      return resultat;
    }
  };
  return (
    <>
      <Header />
      <Logo text={plainteSelect.codeclient} />
      {plainteSelect ? (
        <div style={{ padding: "10px" }}>
          <Grid container sx={{ marginBottom: "10px" }}>
            <Grid item xs={12}>
              <Paper>
                <Grid
                  sx={{
                    padding: "5px",
                    backgroundColor: "rgb(0, 169, 254)",
                    color: "#fff",
                    height: "2rem",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      padding: "0px",
                      margin: "0px",
                      fontWeight: "bolder",
                    }}
                    noWrap
                  >
                    {plainteSelect.nomClient}
                  </Typography>
                </Grid>
                <Grid sx={{ padding: "5px" }}>
                  <Grid container>
                    <Grid item xs={6} className="grid">
                      <Typography component="p" className="title">
                        Num_ticket
                      </Typography>
                      <Typography className="values">
                        {plainteSelect.idPlainte}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} className="grid">
                      <Typography className="title">Shop</Typography>
                      <Typography className="values">
                        {plainteSelect?.shop}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} className="grid">
                      <Typography className="title">Type Plainte</Typography>
                      <Typography className="values">
                        {plainteSelect.plainteSelect}
                      </Typography>
                    </Grid>

                    <Grid item xs={6} className="grid">
                      <Typography className="title">assignBy</Typography>
                      <Typography className="values">
                        {plainteSelect?.technicien?.assignBy}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} className="grid">
                      <Typography className="title">Num_synchro</Typography>
                      <Typography className="values">
                        {plainteSelect?.technicien?.numSynchro}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} className="grid">
                      <Typography className="title">Statut</Typography>
                      <Typography className="values">
                        {plainteSelect?.statut}
                      </Typography>
                    </Grid>
                    {plainteSelect.statut === "Not_resolved" && (
                      <Grid item xs={12} className="action_button">
                        <div className="grid">
                          {TimeCounter(
                            (
                              plainteSelect.time_delai -
                              returnTime(plainteSelect.fullDateSave, new Date())
                            ).toFixed(0)
                          )}
                        </div>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item lg={4}>
              {plainteSelect?.adresse && (
                <Paper sx={{ padding: "10px", marginTop: "10px" }}>
                  <p>Adresses</p>
                  <p style={{ padding: "0px", margin: "0px 0px" }}>
                    Commune : {plainteSelect?.adresse?.commune}
                  </p>
                  <p style={{ padding: "0px", margin: "10px 0px" }}>
                    Quartier : {plainteSelect?.adresse?.quartier}
                  </p>
                  <p style={{ padding: "0px", margin: "0px" }}>
                    Avenue : {plainteSelect?.adresse?.avenue}
                  </p>
                  <p style={{ padding: "0px", margin: "10px 0px" }}>
                    SAT : {plainteSelect?.adresse?.sat.nom_SAT}/{" "}
                    {plainteSelect?.adresse?.sat?.region}/{" "}
                    {plainteSelect?.adresse?.sat?.shop}
                  </p>
                  <p style={{ padding: "0px", margin: "0px" }}>
                    Reference : {plainteSelect?.adresse?.reference}
                  </p>
                </Paper>
              )}
            </Grid>
          </Grid>
          <div className="history">
            <p>History</p>
          </div>
          <Grid container>
            {plainteSelect.resultat.map((index) => {
              return (
                <div key={index._id} className="infoTicket">
                  {index.laststatus && (
                    <p>
                      <span>Last status :</span> {index.laststatus}
                    </p>
                  )}
                  {index.changeto && (
                    <p>
                      <span>Change to :</span> {index.changeto}
                    </p>
                  )}
                  {index.commentaire && (
                    <p>
                      <span>Comment :</span> {index.commentaire}
                    </p>
                  )}
                  <p>
                    <span>Date : </span>
                    {moment(index.fullDate).format("DD/MM/YYYY hh:mm")}
                  </p>
                  <p>
                    <span>Do by : </span> {index.nomAgent}; {index.delai}
                  </p>
                </div>
              );
            })}
          </Grid>
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>No information</p>
      )}
    </>
  );
}

export default DetailPlainte;
