/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { Input } from "antd";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { IUser } from "../../Interface/IUser";
import Logo from "../../Static/Logo";
import { lien } from "../../Static/static";
import Header from "../Header";

interface IInitial {
  ancien: string;
  nouvelle: string;
}
function Profil() {
  const [initial, setInitial] = React.useState<IInitial>({
    ancien: "",
    nouvelle: "",
  });
  const [sendIng, setSendIng] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");
  const user: IUser = useSelector((state: any) => state.user?.user);

  const change = (e: any) => {
    setMessage("");
    const { name, value } = e.target;
    setInitial({
      ...initial,
      [name]: value,
    });
  };

  const sendData = async (e: any) => {
    e.preventDefault();
    setSendIng(true);
    setMessage("");
    try {
      const response = await axios.put(lien + "/userId", {
        codeAgent: localStorage.getItem("codeAgent"),
        ancien: initial?.ancien,
        nouvelle: initial?.nouvelle,
      });
      if (response.status === 200) {
        localStorage.removeItem("auth");
        window.location.replace("/");
      } else {
        setMessage("Identification incorrect");
      }
      setSendIng(false);
    } catch (error) {
      console.log(error);
      setSendIng(false);
    }
  };
  return (
    <>
      <Header />
      <div style={{ padding: "15px" }}>
        <Logo text="Changing password" />
        <div style={{ marginBottom: "10px" }}>
          <Input placeholder="Nom" disabled value={user?.nom} />
        </div>
        <Input placeholder="Code Agent" disabled value={user?.codeAgent} />
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontSize: "12px",
            fontWeight: "bolder",
          }}
        >
          Modifiez le mot de passe
        </p>
        {message !== "" && (
          <p
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              color: "red",
              fontSize: "10px",
              margin: "10px",
            }}
          >
            {message}
          </p>
        )}
        <div style={{ marginTop: "10px" }}>
          <Input
            placeholder="Ancien mot de passe"
            name="ancien"
            onChange={(e) => change(e)}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Input
            onChange={(e) => change(e)}
            placeholder="Nouveau mot de passe"
            name="nouvelle"
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button
            variant="contained"
            disabled={sendIng}
            color="primary"
            fullWidth
            onClick={(e) => sendData(e)}
          >
            Modifiez
          </Button>
        </div>
      </div>
    </>
  );
}

export default Profil;
