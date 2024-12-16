import { Grid, Paper } from "@mui/material";
import Logo from "../../Static/Logo";
import Header from "../Header";
import "./mesaction.style.css";
//import Composant from "./Composant";

function Index() {
  return (
    <>
      <Header />
      <Logo text="Analyse de mes actions" />
      <Grid container>
        <Grid item xs={6} className="gridclasse">
          <Paper elevation={1} className="papier">
            <p className="titleaction">Mes objectifs</p>
            <p className="client">20</p>
          </Paper>
        </Grid>
        <Grid item xs={6} className="gridclasse">
          <Paper elevation={1} className="papier">
            <p className="titleaction">Objectif visité</p>
            <p className="client">5</p>
          </Paper>
        </Grid>
        <Grid item xs={6} className="gridclasse">
          <Paper elevation={1} className="papier">
            <p className="titleaction">Action client visité en objectif</p>
            <p className="client">5</p>
          </Paper>
        </Grid>
        <Grid item xs={6} className="gridclasse">
          <Paper elevation={1} className="papier">
            <p className="titleaction">Non action</p>
            <p className="client">10</p>
          </Paper>
        </Grid>
        <Grid item xs={6} className="gridclasse">
          <Paper elevation={1} className="papier">
            <p className="titleaction">Pourcentage d&apos;action</p>
            <p className="client">5%</p>
          </Paper>
        </Grid>
      </Grid>
      {/* <Composant /> */}
    </>
  );
}

export default Index;
