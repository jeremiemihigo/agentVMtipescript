/* eslint-disable react/prop-types */
import { Language } from "@mui/icons-material";
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
import { Input } from "antd";
import imageCompression from "browser-image-compression";
import React from "react";
import { useSelector } from "react-redux";
import { IRaison } from "../../../Interface/IStatic";
import AutoComplement from "../../../Static/AutoComplete";
import Loading from "../../../Static/Loading";
import Logo from "../../../Static/Logo";
import { sat } from "../../../Static/static";
import TextArea from "../../../Static/TextArea";
import "../VisiteMenage/demande.style.css";
import { ActeEngagementContext } from "./Context";
// import UploadImage from './Image'

function DemandeActeEngagement() {
  const {
    handleChange,
    initial,
    typephoto,
    setTypePhoto,
    value,
    setValue,
    compressedFile,
    setCompressedFile,
    location,
    setLocation,
    raisonSelect,
    setRaisonSelect,
    raisonRwrite,
    setRaisonRwrite,
    itemswap,
    setItemSwap,
    satSelect,
    setSatSelect,
  } = React.useContext(ActeEngagementContext);
  const raison: IRaison[] = useSelector(
    (state: any) => state.feedback.feedback
  );

  const [generateLoc, setGenerateLoc] = React.useState(false);

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

  const [load, setLoad] = React.useState(false);
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoad(true);
    const file = event.target.files?.[0];
    if (!file) return;
    const taille = parseInt((file.size / 2097152).toFixed(0));
    const options = {
      maxSizeMB: taille,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      initialQuality: 0.8,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      setCompressedFile(compressedFile);
      setLoad(false);
    } catch (error) {
      console.error("Erreur lors de la compression:", error);
    }
  };

  const onclickCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valeur = event.target.value;
    if (itemswap?.includes(valeur)) {
      setItemSwap(itemswap.filter((x) => x !== valeur));
    } else {
      setItemSwap([...itemswap, valeur]);
    }
  };

  const itemsSwap = [
    "Telecommande",
    "Panneau solaire",
    "USB",
    "Torche",
    "C.U",
    "Television",
    "Radio",
  ];

  return (
    <>
      <div style={{ padding: "15px" }}>
        <Logo text="Request" />
        <form id="formDemande">
          <div style={{ marginBottom: "10px" }}>
            <Input
              placeholder="Code client *"
              name="codeclient"
              value={initial.codeclient}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div style={{ marginBottom: "11px" }}>
            <Input
              required
              name="commune"
              value={initial.commune}
              onChange={(e) => handleChange(e)}
              placeholder="Commune *"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Input
              required
              name="sector"
              value={initial.sector}
              onChange={(e) => handleChange(e)}
              placeholder="Quartier *"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Input
              name="cell"
              value={initial.cell}
              onChange={(e) => handleChange(e)}
              placeholder="Avenue *"
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Input
              name="reference"
              value={initial.reference}
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
            <p style={{ fontSize: "12px", fontWeight: "bolder" }}>
              Selectionnez le type d&apos;image capturée
            </p>
            <Box sx={{ display: "flex" }}>
              <FormControl
                sx={{ m: 1 }}
                component="fieldset"
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    onClick={() => setTypePhoto("Capture exterieure maison")}
                    control={
                      <Checkbox
                        checked={typephoto === "Capture exterieure maison"}
                        name="Capture"
                      />
                    }
                    label="Exterieure maison"
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
                    onClick={() => setTypePhoto("C.U")}
                    control={
                      <Checkbox checked={typephoto === "C.U"} name="C.U" />
                    }
                    label="C.U"
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              accept=".png, .jpg, .jpeg"
              onChange={(e) => handleFileUpload(e)}
              type="file"
              id="actual-btn"
              hidden
            />
            {compressedFile?.name ? (
              <label
                className="label"
                style={{
                  color: "green",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
                htmlFor="actual-btn"
              >
                {compressedFile?.name}
              </label>
            ) : (
              <label className="label" htmlFor="actual-btn">
                Cliquez ici pour télécharger la photo
              </label>
            )}
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
            <div style={{ marginBottom: "10px" }}>
              <AutoComplement
                value={raisonSelect}
                setValue={setRaisonSelect}
                options={raison}
                title="Selectionnez le feedback *"
                propr="title"
              />
            </div>
            {raisonSelect && raisonSelect?.idFeedback !== "autre" && (
              <div style={{ marginBottom: "10px" }}>
                <Input
                  name="commentaire"
                  value={initial.commentaire}
                  onChange={(e) => handleChange(e)}
                  placeholder="Commentaire du feedback (facultatif)"
                />
              </div>
            )}
            <div style={{ marginBottom: "10px" }}>
              {raisonSelect && raisonSelect?.idFeedback === "autre" && (
                <TextArea
                  setValue={setRaisonRwrite}
                  value={raisonRwrite}
                  placeholder="Autres *"
                />
              )}
            </div>
          </div>

          {raisonSelect && raisonSelect?.idFeedback === "2" && (
            <div style={{ marginTop: "10px" }}>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "13px",
                  marginBottom: "10px",
                }}
              >
                sélectionner le(s) matériel(s) que le client souhaite échanger.
              </p>
              <div style={{ marginBottom: "10px" }}>
                <Box>
                  <Grid container>
                    {itemsSwap.map((index) => {
                      return (
                        <Grid item xs={6} key={index}>
                          <FormControl component="fieldset" variant="standard">
                            <FormGroup>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    onChange={(e) => onclickCheckBox(e)}
                                    name={index}
                                    value={index}
                                  />
                                }
                                label={index}
                              />
                            </FormGroup>
                          </FormControl>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </div>
            </div>
          )}
          {raisonSelect && raisonSelect?.idFeedback === "6" && (
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
              value={initial.numero}
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
            <Grid item xs={12}>
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
      {load && <Loading open={load} title="En cours de compression" />}
    </>
  );
}

export default DemandeActeEngagement;
