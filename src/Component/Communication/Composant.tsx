import { Paper } from "@mui/material";
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import Logo from "../../Static/Logo";
import "../ActionSynchro/synchro.style.css";

type IAction = {
  codeclient: string;
  action: "Reactivation" | "repossession";
  _id: string;
};
function Composant() {
  const data: IAction[] = useSelector((state: any) => state.action.action);
  const [donner, setDonner] = React.useState({ repos: 0, reactiv: 0 });
  React.useEffect(() => {
    if (data?.length > 0) {
      setDonner({
        repos: _.filter(data, { action: "repossession" }).length,
        reactiv: _.filter(data, { action: "Reactivation" }).length,
      });
    }
  }, [data]);

  return (
    <>
      <div style={{ padding: "15px" }}>
        <Logo text="My actions for this month" />
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "rgb(0, 169, 224)",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ padding: "0px", fontSize: "11px", margin: "0px" }}>
              Reactivation :{" "}
              <span style={{ fontWeight: "bolder" }}>{donner.reactiv}</span>
            </p>
          </div>
          <div>
            <p style={{ padding: "0px", fontSize: "11px", margin: "0px" }}>
              Repossession :{" "}
              <span style={{ fontWeight: "bolder" }}> {donner.repos}</span>
            </p>
          </div>
        </Paper>
        <div style={{ marginBottom: "15px" }}>
          {data &&
            data.length > 0 &&
            data.map((index) => {
              return (
                <Paper elevation={1} key={index._id} className="synchro">
                  <div className="synchro_id">
                    <p>{index.codeclient}</p>
                    <div>
                      <p>{index.action}</p>
                    </div>
                  </div>
                </Paper>
              );
            })}
          {data && data.length === 0 && (
            <p style={{ textAlign: "center", marginTop: "20px" }}>No action</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Composant;
