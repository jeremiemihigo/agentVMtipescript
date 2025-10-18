import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { message } from "antd";
import axios from "axios";
import imageCompression from "browser-image-compression";
import React from "react";
import Loading from "../../../Static/Loading";
import { lien } from "../../../Static/static";
import { ActeEngagementContext } from "./Context";

interface IPhotos {
  acte_engagement: File | null;
  acte_engagement_client: File | null;
  googlemap: File | null;
}
interface IPreviews {
  acte_engagement: string;
  acte_engagement_client: string;
  googlemap: string;
}

function FormulaireActeEngagement() {
  const {
    refus,
    setRefus,
    action,
    setAction,
    initialActe,
    setinitialActeActe,
    compressedFileActe,
    setcompressedFileActe,
    initial,
    sendData,
    appeller,
    setAppeller,
    setActiveStep,
  } = React.useContext(ActeEngagementContext);

  const [messageApi, contextHolder] = message.useMessage();
  const successAlert = (texte: string, type: any) => {
    messageApi.open({
      type,
      content: "" + texte,
      duration: 5,
    });
  };

  const [previews, setPreviews] = React.useState<IPreviews>({
    acte_engagement: "",
    acte_engagement_client: "",
    googlemap: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setinitialActeActe({
      ...initialActe,
      [name]: value,
    });
  };
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name } = event.target;
    const file = event.target.files?.[0];
    if (!file) return;

    const taille = parseInt((file.size / 2097152).toFixed(0));
    const options = {
      maxSizeMB: taille,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
      initialActeQuality: 0.8,
    };

    try {
      const compressed = await imageCompression(file, options);
      setcompressedFileActe({
        ...compressedFileActe,
        [name]: compressed,
      });

      // créer un aperçu
      const previewUrl = URL.createObjectURL(compressed);
      setPreviews((prev) => ({
        ...prev,
        [name]: previewUrl,
      }));
    } catch (error) {
      console.error("Erreur lors de la compression:", error);
    }
  };
  const renderFileInput = (label: string, name: keyof IPhotos) => (
    <Box sx={{ mb: 3 }}>
      <Typography variant="body2" fontWeight="bold" gutterBottom>
        {label}
      </Typography>
      <input
        accept=".png, .jpg, .jpeg"
        onChange={(e) => handleFileUpload(e)}
        type="file"
        id={`input-${name}`}
        name={name}
        hidden
      />
      <label
        htmlFor={`input-${name}`}
        style={{
          display: "block",
          padding: "10px",
          border: "1px dashed #1976d2",
          borderRadius: "8px",
          textAlign: "center",
          cursor: "pointer",
          color: compressedFileActe[name] ? "green" : "#555",
          fontWeight: "bold",
        }}
      >
        {compressedFileActe[name]?.name || "Cliquez pour choisir une image"}
      </label>

      {/* Aperçu */}
      {previews[name] && (
        <img
          src={previews[name]}
          alt={`preview-${name}`}
          style={{
            maxWidth: "100%",
            marginTop: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
          }}
        />
      )}
    </Box>
  );
  const [fetching, setFeching] = React.useState(true);

  const fetchCustomer = async () => {
    try {
      let clients =
        initial.codeclient.trim().length === 12
          ? initial.codeclient.toUpperCase().trim()
          : initial.codeclient.length === 8
          ? "BDRC" + initial.codeclient.trim()
          : "";

      if (clients !== "") {
        const response = await axios.get(`${lien}/customer/${clients}`);
        if (response.status === 200) {
          const { info } = response.data;
          setinitialActeActe({ ...initialActe, montant: info.tot_to_payed });
          setFeching(false);
          if (info.engagement === "OUI" && !info.tot_to_payed) {
            successAlert("Le montant est introuvable", "error");
            setActiveStep(0);
          }
          if (info.engagement === "NON" || !info.engagement) {
            successAlert(
              "Ce client n'est pas à tracker par acte d'engagement",
              "error"
            );
          }
        } else {
          successAlert("Client introuvable ", "error");
          setFeching(false);
          setActiveStep(0);
        }
      } else {
        successAlert(
          "Veuillez renseigner le code client exemple : BDRC........ ou 10101010",
          "error"
        );
        setFeching(false);
        setActiveStep(0);
      }
    } catch (error) {
      successAlert(JSON.stringify(error), "error");
      setFeching(false);
    }
  };

  React.useEffect(() => {
    const initialize = async () => {
      fetchCustomer();
    };
    initialize();
  }, [initialActe.montant]);

  return (
    <Box>
      {contextHolder}
      <Loading open={fetching} title="Loading..." />
      <Card variant="outlined" sx={{ padding: "10px" }}>
        <CardContent>
          {/* Refus de signer */}
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Le client a-t-il accepté de signer l&apos;acte d&apos;engagement ?
          </Typography>
          <FormGroup row>
            <FormControlLabel
              onClick={() => setRefus("OUI")}
              control={<Checkbox checked={refus === "OUI"} />}
              label="OUI"
            />
            <FormControlLabel
              onClick={() => setRefus("NON")}
              control={<Checkbox checked={refus === "NON"} />}
              label="NON"
            />
            <FormControlLabel
              onClick={() => setRefus("ABSENT")}
              control={<Checkbox checked={refus === "ABSENT"} />}
              label="ABSENT A LA MAISON"
            />
          </FormGroup>

          {refus === "NON" && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Motif du refus de signer l&apos;acte d&apos;engagement
              </Typography>

              <TextField
                name="raison_refus"
                value={initialActe.raison_refus}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e)
                }
                label="Motif *"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Box>
          )}
          {refus === "ABSENT" && (
            <>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Avez-vous appeller le client ?
              </Typography>
              <FormGroup row>
                <FormControlLabel
                  onClick={() => setAppeller("OUI")}
                  control={<Checkbox checked={appeller === "OUI"} />}
                  label="OUI"
                />
                <FormControlLabel
                  onClick={() => setAppeller("NON")}
                  control={<Checkbox checked={appeller === "NON"} />}
                  label="NON"
                />
              </FormGroup>
            </>
          )}

          {/* Feedback */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Votre feedback
            </Typography>
            <TextField
              name="feedback_account_manager"
              value={initialActe.feedback_account_manager}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
              label="Feedback Account Manager *"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </Box>

          {/* Upload photos */}
          {refus === "OUI" && (
            <>
              <Box sx={{ mt: 3 }}>
                {renderFileInput(
                  "Capture d’écran de la géolocalisation",
                  "googlemap"
                )}
                {renderFileInput(
                  "Photo de l’acte d’engagement",
                  "acte_engagement"
                )}
                {renderFileInput(
                  "Acte d’engagement signé (client + staff + manager)",
                  "acte_engagement_client"
                )}
              </Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Type d&apos;action
              </Typography>
              <FormGroup row>
                <FormControlLabel
                  onClick={() => setAction("REACTIVATION")}
                  control={<Checkbox checked={action === "REACTIVATION"} />}
                  label="Réactivation"
                />
                <FormControlLabel
                  onClick={() => setAction("REFUS_DE_SIGNER")}
                  control={<Checkbox checked={action === "REFUS_DE_SIGNER"} />}
                  label="Refus de signer"
                />
              </FormGroup>
              <div style={{ display: "flex", gap: 10 }}>
                {initialActe.montant !== "" && (
                  <div
                    style={{
                      marginTop: "15px",
                      width: "50%",
                      padding: "15px",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "8px",
                      border: "1px solid #e0e0e0",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 8px 0",
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "#333",
                        }}
                      >
                        Tot to payed
                      </p>
                      ${initialActe.montant}
                    </div>
                  </div>
                )}
                <div
                  style={{
                    marginTop: "15px",
                    width: "50%",
                    padding: "15px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "8px",
                    border: "1px solid #e0e0e0",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color:
                        initialActe.montant !== "" &&
                        parseFloat(initialActe.montant) -
                          ((initialActe.premier_engagement.montant !== ""
                            ? parseFloat(initialActe.premier_engagement.montant)
                            : 0) +
                            (initialActe.deuxieme_engagement.montant !== ""
                              ? parseFloat(
                                  initialActe.deuxieme_engagement.montant
                                )
                              : 0) +
                            (initialActe.troisieme_engagement.montant !== ""
                              ? parseFloat(
                                  initialActe.troisieme_engagement.montant
                                )
                              : 0)) <
                          0
                          ? "#d32f2f"
                          : "#2e7d32",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 8px 0",
                        fontWeight: "600",
                        fontSize: "16px",
                        color: "#333",
                      }}
                    >
                      Amount due
                    </p>
                    {initialActe.montant !== ""
                      ? `$${
                          parseFloat(initialActe.montant) -
                          ((initialActe.premier_engagement.montant !== ""
                            ? parseFloat(initialActe.premier_engagement.montant)
                            : 0) +
                            (initialActe.deuxieme_engagement.montant !== ""
                              ? parseFloat(
                                  initialActe.deuxieme_engagement.montant
                                )
                              : 0) +
                            (initialActe.troisieme_engagement.montant !== ""
                              ? parseFloat(
                                  initialActe.troisieme_engagement.montant
                                )
                              : 0))
                        }`
                      : "$0"}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "10px" }}>
                <p
                  style={{
                    padding: "0px",
                    margin: "0px",
                    fontWeight: "bolder",
                  }}
                >
                  Premier échéance
                </p>
              </div>
              <Grid container>
                <Grid item xs={6} sx={{ padding: "5px" }}>
                  <TextField
                    type="number"
                    placeholder="Montant"
                    value={initialActe.premier_engagement.montant}
                    fullWidth
                    sx={{ marginRight: "5px" }}
                    onChange={(e) =>
                      setinitialActeActe({
                        ...initialActe,
                        premier_engagement: {
                          ...initialActe.premier_engagement,
                          montant: e.target.value,
                        },
                      })
                    }
                  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "5px" }}>
                  <TextField
                    type="date"
                    value={initialActe.premier_engagement.date}
                    fullWidth
                    onChange={(e) =>
                      setinitialActeActe({
                        ...initialActe,
                        premier_engagement: {
                          ...initialActe.premier_engagement,
                          date: e.target.value,
                        },
                      })
                    }
                  />
                </Grid>
              </Grid>
              <div style={{ margin: "10px 0px" }}>
                <p
                  style={{
                    padding: "0px",
                    margin: "0px",
                    fontWeight: "bolder",
                  }}
                >
                  Deuxième échéance
                </p>
              </div>
              <Grid container>
                <Grid item xs={6} sx={{ padding: "5px" }}>
                  <TextField
                    type="number"
                    placeholder="Montant"
                    value={initialActe.deuxieme_engagement.montant}
                    fullWidth
                    sx={{ marginRight: "5px" }}
                    onChange={(e) =>
                      setinitialActeActe({
                        ...initialActe,
                        deuxieme_engagement: {
                          ...initialActe.deuxieme_engagement,
                          montant: e.target.value,
                        },
                      })
                    }
                  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "5px" }}>
                  <TextField
                    type="date"
                    fullWidth
                    value={initialActe.deuxieme_engagement.date}
                    onChange={(e) =>
                      setinitialActeActe({
                        ...initialActe,
                        deuxieme_engagement: {
                          ...initialActe.deuxieme_engagement,
                          date: e.target.value,
                        },
                      })
                    }
                  />
                </Grid>
              </Grid>
              <div style={{ margin: "10px 0px" }}>
                <p
                  style={{
                    padding: "0px",
                    margin: "0px",
                    fontWeight: "bolder",
                  }}
                >
                  Troisième échéance
                </p>
              </div>
              <Grid container>
                <Grid item xs={6} sx={{ padding: "5px" }}>
                  <TextField
                    type="number"
                    placeholder="Montant"
                    value={initialActe.troisieme_engagement.montant}
                    fullWidth
                    sx={{ marginRight: "5px" }}
                    onChange={(e) =>
                      setinitialActeActe({
                        ...initialActe,
                        troisieme_engagement: {
                          ...initialActe.troisieme_engagement,
                          montant: e.target.value,
                        },
                      })
                    }
                  />
                </Grid>
                <Grid item xs={6} sx={{ padding: "5px" }}>
                  <TextField
                    type="date"
                    value={initialActe.troisieme_engagement.date}
                    fullWidth
                    onChange={(e) =>
                      setinitialActeActe({
                        ...initialActe,
                        troisieme_engagement: {
                          ...initialActe.troisieme_engagement,
                          date: e.target.value,
                        },
                      })
                    }
                  />
                </Grid>
              </Grid>
            </>
          )}

          {/* Type d’action */}
        </CardContent>
        <Button
          onClick={(e) => sendData(e)}
          variant="contained"
          color="primary"
          fullWidth
        >
          Send
        </Button>
      </Card>
    </Box>
  );
}

export default FormulaireActeEngagement;
