/* eslint-disable react/prop-types */
import { Box, Grid, Paper, styled, Typography, useTheme } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IDemande } from "../../Interface/IPaquet.js";
import LoaderGif from "../../Static/LoaderGif.js";
import Logo from "../../Static/Logo.js";
import { big_data, config } from "../../Static/static.js";
import Liste from "../../Structure/Listes";

interface TDonner {
  allData: IDemande[];
  attente: IDemande[];
  nConforme: IDemande[];
  valide: IDemande[];
  followup: IDemande[];
  rs: IDemande[];
  _id: string;
}

interface Lot {
  donner: IDemande[];
  critere: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "16px",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[6],
  },
}));

function Paquet() {
  const [data, setData] = React.useState<TDonner>();
  const [lotSelect, setLotSelect] = React.useState<Lot>();
  const navigate = useNavigate();
  const theme = useTheme();

  const loading = async () => {
    try {
      const response = await axios.get(`${big_data}/paquet`, config);
      if (response.status === 201) {
        localStorage.clear();
        navigate("/", { replace: true });
      } else {
        const d: TDonner = response.data[0];
        setData(d);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    loading();
  }, []);

  const choisirLot = (paquet: IDemande[], critere: string) => {
    setLotSelect({ donner: paquet, critere });
  };

  if (!data) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <LoaderGif width={200} height={200} />
      </Box>
    );
  }

  const cards = [
    {
      title: "Visites (Visits)",
      value: data.valide.filter((x: any) => !x.reponse[0].followup).length,
      subtitle: "Approved by support team",
      color: theme.palette.success.main,
      onClick: () => choisirLot(data.valide, "valide"),
    },
    {
      title: "En Attentes (Waiting)",
      value: data.attente.length,
      subtitle:
        data.attente.length > 0 ? "Being verified" : "Everything is done",
      color: theme.palette.warning.main,
      onClick: () => choisirLot(data.attente, "attentes"),
    },
    {
      title: "Non conformes (Non-compliant)",
      value: data.nConforme.length,
      subtitle: "Possible to make changes",
      color: theme.palette.error.main,
      onClick: () => choisirLot(data.nConforme, "nConformes"),
    },
    {
      title: "Suivi (Follow up)",
      value: data.followup.length,
      subtitle: "Waiting for followup",
      color: theme.palette.info.main,
      onClick: () => choisirLot(data.followup, "followup"),
    },
    {
      title: "Approbation of RS",
      value: data.rs.length,
      subtitle: "Waiting approbation of RS",
      color: theme.palette.secondary.main,
      onClick: () => choisirLot(data.rs, "approbation"),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
          color: "#fff",
          borderRadius: "16px",
          p: 2,
        }}
      >
        <Logo text="Pack" />
        <Typography variant="h6">{data._id}</Typography>
      </Box>

      {/* Liste des cartes */}
      {!lotSelect ? (
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledPaper
                onClick={card.onClick}
                sx={{
                  backgroundColor: `${card.color}22`, // couleur transparente
                  border: `1px solid ${card.color}`,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", mb: 1, color: card.color }}
                >
                  {card.title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {card.value}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
                  {card.subtitle}
                </Typography>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Liste donner={lotSelect.donner} critere={lotSelect.critere} />
      )}
    </Box>
  );
}

export default Paquet;
