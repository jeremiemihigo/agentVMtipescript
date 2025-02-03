import { Grid, Paper } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IObjectif } from "../../Interface/IObjectif";
import LoaderGif from "../../Static/LoaderGif";
import Logo from "../../Static/Logo";
import { config, lien_dash } from "../../Static/static";
import Header from "../Header";
import "./mesaction.style.css";
//import Composant from "./Composant";

interface IDonner {
  objectif: IObjectif[];
  visite: IObjectif[];
  action: IObjectif[];
  non_action: IObjectif[];
  pourcentage: Number;
}

function Index() {
  const [donner, setDonner] = React.useState<IDonner>();
  const navigation = useNavigate();
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
  const showcustomer = (client: any, titre: String) => {
    navigation("/showclient", { state: { client, titre } });
  };

  return (
    <>
      <Header />
      <Logo text="Analyse de mes actions" />
      {load && <LoaderGif width={400} height={400} />}
      {donner && !load && (
        <Grid container>
          <Grid item xs={6} className="gridclasse">
            <Paper
              onClick={() => showcustomer(donner?.objectif, "Mes Objectifs")}
              elevation={1}
              className="papier"
            >
              <p className="titleaction">Mes objectifs</p>
              <p className="client">{donner?.objectif.length.toString()}</p>
            </Paper>
          </Grid>
          <Grid item xs={6} className="gridclasse">
            <Paper
              onClick={() => showcustomer(donner?.visite, "No action")}
              elevation={1}
              className="papier"
            >
              <p className="titleaction">Objectif visité</p>
              <p className="client">{donner?.visite.length.toString()}</p>
            </Paper>
          </Grid>
          <Grid item xs={6} className="gridclasse">
            <Paper
              onClick={() =>
                showcustomer(donner?.action, "Action client visité en objectif")
              }
              elevation={1}
              className="papier"
            >
              <p className="titleaction">Action client visité en objectif</p>
              <p className="client">{donner?.action.length.toString()}</p>
            </Paper>
          </Grid>
          <Grid item xs={6} className="gridclasse">
            <Paper
              onClick={() => showcustomer(donner?.non_action, "No action")}
              elevation={1}
              className="papier"
            >
              <p className="titleaction">Non action</p>
              <p className="client">{donner?.non_action.length.toString()}</p>
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
