import { Paper } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IIssue } from "../../Interface/Issue";
import Logo from "../../Static/Logo";
import { config, lien_issue } from "../../Static/static";
import "./synchro.style.css";

function Composant() {
  const [data, setData] = React.useState<IIssue[]>([]);
  const loading = async () => {
    try {
      const response = await axios.get(lien_issue + "/actionsynchro", config);
      setData(response.data);
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
          {data && data.length === 0 && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>No tickets</p>
          )}
          {!data && (
            <p
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "12px",
              }}
            >
              Loading...
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Composant;
