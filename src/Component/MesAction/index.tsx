import { Grid, Paper } from "@mui/material";
import axios from "axios";
import React from "react";
import LoaderGif from "../../Static/LoaderGif";
import Logo from "../../Static/Logo";
import { config, lien_dash } from "../../Static/static";
import Header from "../Header";
import "./mesaction.style.css";
//import Composant from "./Composant";

interface IDonner {
  nombre: Number;
  visite: Number;
  action: Number;
  non_action: Number;
  pourcentage: Number;
}

function Index() {
  const [donner, setDonner] = React.useState<IDonner>();
  const [load, setLoad] = React.useState<Boolean>(false);
  const loading = async () => {
    try {
      setLoad(true);
      const response = await axios.get(lien_dash + "/analyse_agent", config);
      if (response.status === 200) {
        setDonner(response.data);
        setLoad(false);
      }
    } catch (error) {}
  };
  React.useEffect(() => {
    loading();
  }, []);
  return (
    <>
      <Header />
      <Logo text="Analyse de mes actions" />
      {load && <LoaderGif width={400} height={400} />}
      {donner && !load && (
        <Grid container>
          <Grid item xs={6} className="gridclasse">
            <Paper elevation={1} className="papier">
              <p className="titleaction">Mes objectifs</p>
              <p className="client">{donner?.nombre.toString()}</p>
            </Paper>
          </Grid>
          <Grid item xs={6} className="gridclasse">
            <Paper elevation={1} className="papier">
              <p className="titleaction">Objectif visité</p>
              <p className="client">{donner?.visite.toString()}</p>
            </Paper>
          </Grid>
          <Grid item xs={6} className="gridclasse">
            <Paper elevation={1} className="papier">
              <p className="titleaction">Action client visité en objectif</p>
              <p className="client">{donner?.action.toString()}</p>
            </Paper>
          </Grid>
          <Grid item xs={6} className="gridclasse">
            <Paper elevation={1} className="papier">
              <p className="titleaction">Non action</p>
              <p className="client">{donner?.non_action.toString()}</p>
            </Paper>
          </Grid>
          <Grid item xs={6} className="gridclasse">
            <Paper elevation={1} className="papier">
              <p className="titleaction">Pourcentage d&apos;action</p>
              <p className="client">{donner?.pourcentage.toString()}%</p>
            </Paper>
          </Grid>
        </Grid>
      )}
      {/* <Composant /> */}
    </>
  );
}

export default Index;
