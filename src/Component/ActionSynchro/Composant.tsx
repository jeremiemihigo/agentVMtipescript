import { Paper } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IIssue } from "../../Interface/Issue";
import LoaderGif from "../../Static/LoaderGif";
import Logo from "../../Static/Logo";
import { config, lien_issue } from "../../Static/static";
import "./synchro.style.css";

function Composant() {
  const [data, setData] = React.useState<IIssue[]>([]);
  const [load, setLoad] = React.useState(false);
  const loading = async () => {
    setLoad(true);
    try {
      const response = await axios.get(lien_issue + "/actionsynchro", config);
      setData(response.data);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    loading();
  }, []);
  const navigation = useNavigate();
  const clic = (data: IIssue) => {
    navigation("/info", { state: data });
  };
  return (
    <>
      <div style={{ padding: "15px" }}>
        <Logo text="Actions Synchro" />
        <div style={{ marginBottom: "15px" }}>
          {data &&
            data.length > 0 &&
            data.map((index) => {
              return (
                <Paper
                  elevation={3}
                  key={index._id}
                  className="synchro"
                  onClick={() => clic(index)}
                >
                  <div className="synchro_id">
                    <p>{index.codeclient}</p>
                    <div>
                      <p>{index.idPlainte}</p>
                    </div>
                  </div>

                  <div className="synchro_plainte">
                    <p>{index.plainteSelect}</p>
                    <p
                      className={
                        index.statut === "Not_resolved"
                          ? "Not_resolved synchro_statut"
                          : "synchro_statut"
                      }
                    >
                      {index.statut}
                    </p>
                  </div>
                </Paper>
              );
            })}
          {data && data.length === 0 && !load && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>No tickets</p>
          )}
          {load && <LoaderGif width={400} height={400} />}
        </div>
      </div>
    </>
  );
}

export default Composant;
