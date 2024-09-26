/* eslint-disable react/prop-types */
import { Edit, Language } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
} from "@mui/material";
import { Input, message } from "antd";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IInitiale } from "../../Interface/Demande";
import { IDemande } from "../../Interface/IPaquet";
import { IRaison, ISat } from "../../Interface/IStatic";
import AutoComplement from "../../Static/AutoComplete";
import Logo from "../../Static/Logo";
import { lien, raison, sat } from "../../Static/static";
import TextArea from "../../Static/TextArea";
import Header from "../Header";

interface Localisation {
  latitude?: string;
  longitude?: string;
  altitude?: string;
}

function UpdateDemande() {
  const locations = useLocation();
  const demande: IDemande = locations.state;
  const [initial, setInitial] = React.useState<IInitiale | any>({
    cell: "",
    codeclient: "",
    commune: "",
    reference: "",
    sector: "",
    numero: "",
    jours: "",
  });
  const { cell, codeclient, commune, reference, sector, numero } = initial;
  const [value, setValue] = React.useState<string>("");
  const [generateLoc, setGenerateLoc] = React.useState(false);
  const [file, setImage] = React.useState<any>();
  const [satSelect, setSatSelect] = React.useState<ISat | null>(null);

  const [raisonSelect, setRaisonSelect] = React.useState<IRaison | null>(null);
  const [raisonRwrite, setRaisonRwrite] = React.useState<string>("");
  const [autre, setAutre] = React.useState(false);

  const [loadings, setLoadings] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setInitial({ ...initial, [name]: value });
  };

  const [location, setLocation] = React.useState<Localisation>();

  function success(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const altitude = position.coords.altitude;
    setLocation({ latitude, longitude, altitude });
    setGenerateLoc(false);
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  function handleLocationClick() {
    setGenerateLoc(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setGenerateLoc(false);
    }
  }
  const [messageApi, contextHolder] = message.useMessage();
  const successAlert = (texte: string, type: any) => {
    messageApi.open({
      type,
      content: "" + texte,
      duration: 5,
    });
  };
  const navigate = useNavigate();
  const sendData = async (e: any) => {
    try {
      setLoadings(true);
      e.preventDefault();
      if (
        !reference ||
        !satSelect ||
        !cell ||
        (raisonSelect?.raison === "" && raisonRwrite === "") ||
        value === ""
      ) {
        successAlert(
          "Veuillez renseigner les champs ayant l'asterisque ainsi que la photo",
          "error"
        );
      } else {
        let raison = autre ? raisonRwrite : raisonSelect?.raison;
        let days = initial?.jours ? initial?.jours : 0;

        const datas = new FormData();
        datas.append("file", file);
        datas.append("codeAgent", "" + localStorage.getItem("codeAgent"));
        datas.append("codeZone", "" + localStorage.getItem("codeZone"));
        datas.append("codeclient", "" + initial?.codeclient);
        datas.append("statut", "" + value);
        datas.append("raison", "" + raison);
        datas.append("sector", sector); //placeholder = Sector/constituency
        datas.append("cell", cell); //placeholder = Cell/Ward
        datas.append("reference", reference); //placeholder = Reference
        datas.append("sat", satSelect?.nom_SAT);
        datas.append("numero", numero);
        datas.append("commune", commune);
        datas.append("id", demande._id);
        datas.append("jours", days);

        const dataWithourFile = {
          codeAgent: localStorage.getItem("codeAgent"),
          codeZone: localStorage.getItem("codeZone"),
          codeclient: initial?.codeclient,
          statut: value,
          raison,
          sector,
          cell,
          reference,
          sat: satSelect?.nom_SAT,
          numero,
          commune,
          id: demande._id,
          jours: days,
        };

        const linfile = file
          ? `${lien}/updateDemandeFile`
          : `${lien}/updateDemande`;
        const donner = file ? datas : dataWithourFile;
        const response = await axios.put(linfile, donner);

        // socket.emit("sendData", data);

        if (response.status === 200) {
          setLocation({ longitude: "", latitude: "", altitude: "" });
          const form: any = document.getElementById("formDemande");

          const fileInput = form.querySelector('input[type="file"]');
          fileInput.value = "";

          setInitial({
            codeclient: "",
            cell: "",
            commune: "",
            reference: "",
            sector: "",
            numero: "",
          });
          setImage("");
          setAutre(false);
          setRaisonSelect(null);
          setSatSelect(null);
          setValue("");
          window.location.replace("/paquet");
        } else {
          successAlert("" + response.data, "error");
        }
      }
      setLoadings(false);
    } catch (error: any) {
      setLoadings(false);
      if (error.code === "ERR_NETWORK") {
        successAlert(
          "Rassurez-vous que votre appareil a une connexion active",
          "error"
        );
      }
    }
  };

  const changeRaison = () => {
    setRaisonRwrite("");
    setRaisonSelect(null);
    setAutre(!autre);
  };

  React.useEffect(() => {
    if (demande.codeAgent) {
      setInitial({
        cell: demande.cell,
        commune: demande.commune,
        reference: demande.commune,
        sector: demande.sector,
        jours: demande.jours,
        numero: demande.numero,
        codeclient: demande.codeclient,
      });
      let sat_shop = sat.filter((x: ISat) => x.nom_SAT === demande.sat)[0];
      setSatSelect(sat_shop);
      setLocation({
        latitude: demande.coordonnes.latitude,
        longitude: demande.coordonnes.longitude,
        altitude: demande.coordonnes.altitude,
      });
      // donnerStat.filter(x=>x.value === demande.statut)
      setValue(demande.statut);
      let raisons: IRaison[] = raison.filter(
        (x) => x.raison === demande.raison
      );
      if (raisons.length > 0) {
        setRaisonSelect(raisons[0]);
      } else {
        setRaisonRwrite(demande.raison);
        setAutre(true);
      }
    } else {
      navigate("/paquet", { state: undefined });
    }
  }, [demande]);

  return (
    <>
      <Header />

      <div style={{ padding: "15px" }}>
        <Logo text="Update Request" />
        <form id="formDemande">
          {contextHolder}

          <div style={{ marginBottom: "10px" }}>
            <Input
              placeholder="Code client"
              name="codeclient"
              value={codeclient}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div style={{ marginBottom: "11px" }}>
            <Input
              required
              name="commune"
              value={commune}
              onChange={(e) => handleChange(e)}
              placeholder="Commune *"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Input
              required
              name="sector"
              value={sector}
              onChange={(e) => handleChange(e)}
              placeholder="Quartier *"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Input
              name="cell"
              value={cell}
              onChange={(e) => handleChange(e)}
              placeholder="Avenue *"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Input
              name="reference"
              value={reference}
              onChange={(e) => handleChange(e)}
              placeholder="Référence *"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <AutoComplement
              value={satSelect}
              setValue={setSatSelect}
              options={sat}
              title="Selectionnez le sat du client *"
              propr="nom_SAT"
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            {/* <UploadImage setFile={setFichier} /> */}

            <input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const file = event.target.files?.[0]; // Use optional chaining in case files is null
                if (file) {
                  setImage(file); // Assuming setImage is your state setter function
                }
              }}
              type="file"
              accept=".png, .jpg, .jpeg"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Box sx={{ display: "flex" }}>
              <FormControl
                sx={{ m: 1 }}
                component="fieldset"
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    onClick={() => setValue("allumer")}
                    control={
                      <Checkbox checked={value === "allumer"} name="allumer" />
                    }
                    label="Allumé"
                  />
                </FormGroup>
              </FormControl>
              <FormControl
                component="fieldset"
                sx={{ m: 1 }}
                variant="standard"
              >
                <FormLabel component="legend"></FormLabel>
                <FormGroup>
                  <FormControlLabel
                    onClick={() => setValue("eteint")}
                    control={
                      <Checkbox checked={value === "eteint"} name="eteint" />
                    }
                    label="Eteint"
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </div>
          <div style={{ marginBottom: "10px" }}>
            {autre ? (
              <TextArea
                setValue={setRaisonRwrite}
                value={raisonRwrite}
                placeholder="Autres *"
              />
            ) : (
              <AutoComplement
                value={raisonSelect}
                setValue={setRaisonSelect}
                options={raison}
                title="Selectionnez le feedback *"
                propr="raison"
              />
            )}

            <p
              onClick={() => changeRaison()}
              style={{
                fontSize: "12px",
                textAlign: "right",
                cursor: "pointer",
                color: "blue",
                fontWeight: "bolder",
                margin: "5px",
              }}
            >
              {autre ? "Choisir la selection du feedback" : "Autre feedback"}
            </p>
          </div>
          {raisonSelect && raisonSelect?.id === 5 && (
            <div style={{ marginTop: "10px" }}>
              <Input
                value={initial.jours}
                placeholder="Le client va payer dans combien de jours ?"
                name="jours"
                onChange={(e) => handleChange(e)}
              />
            </div>
          )}

          <div style={{ marginTop: "10px" }}>
            <Input
              value={numero}
              placeholder="Numero joignable du client"
              name="numero"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#dedede",
              borderRadius: "20px",
              padding: "10px",
              margin: "10px",
            }}
          >
            <p>
              long : {location?.longitude}
              {" lat : "}
              {location?.latitude}
            </p>
          </div>
          <Grid container>
            <Grid item xs={6}>
              <Button
                color="secondary"
                variant="contained"
                disabled={generateLoc}
                fullWidth
                onClick={handleLocationClick}
              >
                <Language fontSize="small" />
                <span style={{ marginLeft: "10px" }}>
                  {generateLoc && "Patientez..."}
                </span>
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                sx={{ marginLeft: "10px" }}
                fullWidth
                className="primary"
                variant="contained"
                onClick={(e) => sendData(e)}
                disabled={loadings}
              >
                <Edit fontSize="small" />
                <span style={{ marginLeft: "10px" }}>
                  {loadings ? "Patientez..." : "Update"}
                </span>
              </Button>
            </Grid>
          </Grid>

          <div style={{ marginTop: "10px" }}>
            <p>
              Rassurez-vous que vous etes chez le client pour une meilleure
              géolocalisation
            </p>
          </div>
          <div></div>
        </form>
      </div>
    </>
  );
}

export default UpdateDemande;
