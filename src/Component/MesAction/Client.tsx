import { Paper, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { IObjectif } from "../../Interface/IObjectif";
import Logo from "../../Static/Logo";
import Header from "../Header";
import "./client.style.css";

function Client() {
  const { state } = useLocation();
  const { client, titre } = state;
  const [customer] = React.useState<IObjectif[]>(client);

  return (
    <>
      <Header />
      <Logo text={titre} />
      <div style={{ padding: "10px" }}>
        {customer.length > 0 &&
          customer.map((index, key) => {
            return (
              <Paper key={key} elevation={1} className="client_papier">
                <Typography className="client_info" component="p" noWrap>
                  {index.codeclient + " "}
                  {index.customer_name}
                </Typography>

                {index.visites.length > 0 && (
                  <>
                    <p className="visites_expl">
                      Payment : <span>{index.visites[0].PayementStatut}</span>;
                      Customer_status :{" "}
                      <span>{index.visites[0].clientStatut}</span>; Exp.Days :{" "}
                      <span>
                        {index.visites[0].consExpDays.toString() + " Days"}
                      </span>
                    </p>
                  </>
                )}
                {index.action && index.action?.length > 0 && (
                  <>
                    <p className="visites_expl">
                      Type d&apos;action : <span>{index.action[0].action}</span>
                      ; Statut :{" "}
                      <span
                        style={{
                          background: "green",
                          padding: "3px",
                          color: "white",
                          borderRadius: "5px",
                        }}
                      >
                        {index.action[0].statut}
                      </span>
                      ;
                    </p>
                  </>
                )}
              </Paper>
            );
          })}
      </div>
    </>
  );
}

export default Client;
