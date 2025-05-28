import { Paper } from "@mui/material";
import axios from "axios";
import moment from "moment";
import React from "react";
import LoaderGif from "../../Static/LoaderGif";
import Logo from "../../Static/Logo";
import { config, lien_dash } from "../../Static/static";
import Header from "../Header";
import "./mesaction.style.css";

interface IMessage {
  concerne: string;
  message: string;
  createdAt: string;
  vu: boolean;
}
function Index() {
  const [donner, setDonner] = React.useState<IMessage[] | null>(null);
  const [load, setLoad] = React.useState<Boolean>(false);
  const loading = async () => {
    try {
      setLoad(true);
      const response = await axios.get(lien_dash + "/readmessage", config);
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
      <Logo text="Communications importantes" />
      {load && <LoaderGif width={400} height={400} />}
      {donner &&
        !load &&
        donner.map((index) => {
          return (
            <Paper
              elevation={1}
              className="papier"
              key={`${index}-${Math.random()}`}
            >
              <p className="messages">{index.message}</p>
              <p className="moment">{moment(index.createdAt).fromNow()}</p>
            </Paper>
          );
        })}
      {/* <Composant /> */}
    </>
  );
}

export default Index;
