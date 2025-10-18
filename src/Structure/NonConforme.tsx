/* eslint-disable react/prop-types */
import { Edit } from "@mui/icons-material";
import { Card, CardContent, Chip, Tooltip, Typography } from "@mui/material";
import { message } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { IDemande } from "../Interface/IPaquet";
import ImageComponent from "../Static/ImageComponent";
import { lien_image } from "../Static/static";

type Props = {
  donner: IDemande[];
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  card: {
    marginBottom: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
    },
  },
  imageSection: {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "16px",
  },
  imageContainer: {
    flexShrink: 0,
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  contentSection: {
    flex: 1,
  },
  codeSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "8px",
  },
  copyButton: {
    padding: "4px 8px",
    backgroundColor: "#e3f2fd",
    color: "#1976d2",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "11px",
    fontWeight: "bold",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#bbdefb",
    },
  },
  timestamp: {
    fontSize: "10px",
    color: "#666",
    marginLeft: "auto",
  },
  infoChips: {
    display: "flex",
    gap: "8px",

    marginTop: "8px",
  },
  chip: {
    fontSize: "10px",
    height: "24px",
  },
  actionButtons: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: "16px",
    borderTop: "1px solid #e0e0e0",
    marginBottom: "5px",
  },
  editButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    backgroundColor: "#fff3e0",
    color: "#f57c00",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "#ffe0b2",
      transform: "translateY(-1px)",
    },
  },
  followupAlert: {
    margin: "16px 0",
    background: "linear-gradient(135deg, #4684D3 0%, #5a9bd4 100%)",
    padding: "16px",
    borderRadius: "12px",
    color: "white",
    boxShadow: "0 4px 12px rgba(70, 132, 211, 0.3)",
  },
  followupText: {
    fontSize: "12px",
    lineHeight: "1.4",
    margin: 0,
  },
  doubleAlert: {
    background: "linear-gradient(135deg, #00a9e0 0%, #0bb4e6 100%)",
    fontSize: "12px",
    padding: "16px",
    borderRadius: "12px",
    color: "white",
    margin: "16px 0",
    boxShadow: "0 4px 12px rgba(0, 169, 224, 0.3)",
  },
  feedbackAlert: {
    background: "linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%)",
    color: "white",
    padding: "16px",
    borderRadius: "12px",
    fontSize: "12px",
    margin: "16px 0",
    boxShadow: "0 4px 12px rgba(255, 107, 107, 0.3)",
  },
  rsMessage: {
    marginBottom: "16px",
    padding: "12px",
    backgroundColor: "#ffebee",
    borderLeft: "4px solid #f44336",
    borderRadius: "0 8px 8px 0",
  },
  rsMessageText: {
    padding: "0px",
    margin: "0px",
    fontSize: "12px",
    color: "#d32f2f",
    fontWeight: "bold",
  },
  conversationItem: {
    background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "8px",
    border: "1px solid #dee2e6",
  },
  messageText: {
    fontSize: "13px",
    color: "#495057",
    margin: "0 0 8px 0",
    lineHeight: "1.4",
  },
  messageTime: {
    fontSize: "10px",
    color: "#6c757d",
    margin: 0,
    textAlign: "right" as const,
  },
};

function NonConforme(props: Props) {
  const { donner } = props;
  const [messageApi, contextHolder] = message.useMessage();
  const success = (texte: string) => {
    navigator.clipboard.writeText(texte);
    messageApi.open({
      type: "success",
      content: "Code copié: " + texte,
      duration: 2,
    });
  };

  const navigation = useNavigate();

  const updateDemande = (index: IDemande) => {
    navigation("/update", { state: index });
  };

  return (
    <div style={styles.container}>
      {contextHolder}
      {donner &&
        donner.map((index) => {
          return (
            <Card key={index._id} sx={styles.card}>
              <CardContent>
                <div style={styles.imageSection}>
                  <div style={styles.imageContainer}>
                    <ImageComponent src={`${lien_image}/${index.file}`} />
                  </div>

                  <div style={styles.contentSection}>
                    <div style={styles.codeSection}>
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", color: "#333" }}
                      >
                        ID Demande : {index.idDemande}
                      </Typography>
                      <button
                        onClick={() => success(index.idDemande)}
                        style={styles.copyButton}
                      >
                        Copier
                      </button>
                      <span style={styles.timestamp}>
                        {moment(index.createdAt).fromNow()}
                      </span>
                    </div>

                    <div style={styles.infoChips}>
                      {index.codeclient && (
                        <Chip
                          label={`Code client: ${index.codeclient}`}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={styles.chip}
                        />
                      )}
                      {index.sat && (
                        <Chip
                          label={`SAT: ${index.sat}`}
                          size="small"
                          color="secondary"
                          variant="outlined"
                          sx={styles.chip}
                        />
                      )}
                      {index.reference && (
                        <Chip
                          label={`Ref: ${index.reference}`}
                          size="small"
                          color="info"
                          variant="outlined"
                          sx={styles.chip}
                        />
                      )}
                      {index.statut && (
                        <Chip
                          label={index.statut}
                          size="small"
                          color="warning"
                          variant="outlined"
                          sx={styles.chip}
                        />
                      )}
                      {index.raison && (
                        <Chip
                          label={index.raison.toLowerCase()}
                          size="small"
                          color="error"
                          variant="outlined"
                          sx={styles.chip}
                        />
                      )}
                      {index.numero && (
                        <Chip
                          label={`N°: ${index.numero}`}
                          size="small"
                          color="success"
                          variant="outlined"
                          sx={styles.chip}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div style={styles.actionButtons}>
                  <Tooltip title="Modifier cette demande">
                    <button
                      onClick={() => updateDemande(index)}
                      style={styles.editButton}
                    >
                      <Edit fontSize="small" />
                      <span>Modifier</span>
                    </button>
                  </Tooltip>
                </div>

                {(index?.typeVisit?.followup === "followup" ||
                  index?.reponse[0]?.followup) && (
                  <div style={styles.followupAlert}>
                    <p style={styles.followupText}>
                      🔄 Ce client a déjà été visité par vous en date du{" "}
                      <strong>
                        {moment(index?.typeVisit?.dateFollowup).format(
                          "DD-MM-YYYY"
                        )}
                      </strong>
                      . Cette visite sera considérée comme followup, et nous
                      comptons sur vous pour mener une action sur lui.
                    </p>
                  </div>
                )}

                {index.double && (
                  <div style={styles.doubleAlert}>
                    ⚠️ Tu as déjà envoyé cette visite{" "}
                    <strong>{index.double.valeur}</strong> fois. Tu peux
                    vérifier dans tes visites conformes.
                  </div>
                )}

                {index.feedback === "doublon" && (
                  <div style={styles.feedbackAlert}>
                    🚫 Cette visite a déjà été effectuée. Vous pouvez le
                    vérifier dans
                    <strong> « All customer visit »</strong>
                  </div>
                )}

                <div>
                  {index.feedbackrs && (
                    <div style={styles.rsMessage}>
                      <p style={styles.rsMessageText}>
                        💬 Message du RS: <span>{index.feedbackrs}</span>
                      </p>
                    </div>
                  )}

                  {index.conversation.length > 0 &&
                    index.conversation.map((item) => {
                      return (
                        <div key={item._id} style={styles.conversationItem}>
                          <p style={styles.messageText}>💬 {item.message}</p>
                          <p style={styles.messageTime}>
                            {moment(item.createdAt).fromNow()}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
}

export default NonConforme;
