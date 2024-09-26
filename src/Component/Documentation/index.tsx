/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Paper } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ICommuniquer } from "../../Interface/ICommuniquer";
import Logo from "../../Static/Logo";
import Popup from "../../Static/Popup";
import Header from "../Header";
import "./documentation.style.css";
import TextWithLineBreaks from "./StructureText";
import VoirPlus from "./VoirPlus";

function Documentation() {
  const [open, setOpen] = React.useState(false);
  const communiquer: ICommuniquer[] = useSelector(
    (state: any) => state.communiquer.communiquer
  );

  return (
    <>
      <Header />

      <div style={{ padding: "10px" }}>
        <Logo text="Messages" />
        {communiquer &&
          communiquer?.map((index: ICommuniquer) => {
            return (
              <Paper
                key={index._id}
                sx={{ padding: "10px", marginTop: "10px" }}
              >
                <div className="title_communiquer">
                  <p>{index.title}</p>
                </div>

                <TextWithLineBreaks text={index.content} />
              </Paper>
            );
          })}
        <Popup
          open={open}
          setOpen={setOpen}
          title="Tous les feedback possibles"
        >
          <VoirPlus />
        </Popup>
      </div>
    </>
  );
}

export default Documentation;
