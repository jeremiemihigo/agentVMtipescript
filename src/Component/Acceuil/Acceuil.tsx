import {
  AccountBalance,
  AccountBox,
  Construction,
  Inventory,
  KeyboardVoice,
  Person,
  Search,
  Visibility,
} from "@mui/icons-material";
import { Badge, Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICommuniquer } from "../../Interface/ICommuniquer";
import { IUser } from "../../Interface/IUser";

interface IOptions {
  id: number;
  title: string;
  link: string;
  icon: React.ReactNode;
  badget: boolean;
  color?: string;
}

const title: IOptions[] = [
  {
    id: 1,
    title: "Pack",
    link: "/paquet",
    icon: <Inventory fontSize="large" />,
    badget: false,
    color: "#4CAF50",
  },
  {
    id: 2,
    title: "Request",
    link: "/type_demande",
    icon: <Visibility fontSize="large" />,
    badget: false,
    color: "#2196F3",
  },
  {
    id: 4,
    title: "Changing password",
    link: "/profil",
    icon: <AccountBox fontSize="large" />,
    badget: false,
    color: "#FF9800",
  },
  {
    id: 5,
    title: "All customer visits",
    link: "/recherche",
    icon: <Search fontSize="large" />,
    badget: false,
    color: "#9C27B0",
  },
  {
    id: 6,
    title: "Communication",
    link: "/communication",
    icon: <KeyboardVoice fontSize="large" />,
    badget: true,
    color: "#F44336",
  },
];

export default function BasicTabs() {
  const userConnect: IUser = useSelector((state: any) => state.user?.user);

  const navigation = useNavigate();

  const changePage = (link: string) => {
    navigation(link);
  };

  const communication: ICommuniquer[] = useSelector(
    (state: any) => state.communiquer.communiquer
  );

  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography>Welcome back</Typography>
      </Box>

      <Box sx={styles.gridContainer}>
        <Grid container spacing={3}>
          {title.map((item: IOptions) => {
            return (
              <Grid item key={item.id} xs={6} sm={6} md={4} lg={3}>
                <Paper
                  sx={{
                    ...styles.paper,
                    "&:hover": {
                      ...styles.paperHover,
                      "& .icon": {
                        color: item.color,
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                  elevation={0}
                  onClick={() => changePage(item.link)}
                >
                  <Box sx={styles.cardContent}>
                    <Box sx={styles.iconContainer} className="icon">
                      {item.icon}
                    </Box>
                    {item.badget ? (
                      <Badge
                        badgeContent={communication ? communication.length : 0}
                        color="error"
                        sx={styles.badge}
                      >
                        <Typography sx={styles.cardTitle}>
                          {item.title}
                        </Typography>
                      </Badge>
                    ) : (
                      <Typography sx={styles.cardTitle}>
                        {item.title}
                      </Typography>
                    )}
                  </Box>
                </Paper>
              </Grid>
            );
          })}

          {userConnect?.fonction === "tech" && (
            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Paper
                sx={{
                  ...styles.paper,
                  "&:hover": {
                    ...styles.paperHover,
                    "& .icon": {
                      color: "#607D8B",
                      transform: "scale(1.1)",
                    },
                  },
                }}
                elevation={0}
                onClick={() => changePage("/action")}
              >
                <Box sx={styles.cardContent}>
                  <Box sx={styles.iconContainer} className="icon">
                    <Construction fontSize="large" />
                  </Box>
                  <Typography sx={styles.cardTitle}>Actions Synchro</Typography>
                </Box>
              </Paper>
            </Grid>
          )}

          {userConnect?.fonction === "Account_Manager" && (
            <Grid item xs={6} sm={6} md={4} lg={3}>
              <Paper
                sx={{
                  ...styles.paper,
                  "&:hover": {
                    ...styles.paperHover,
                    "& .icon": {
                      color: "#795548",
                      transform: "scale(1.1)",
                    },
                  },
                }}
                elevation={0}
                onClick={() => changePage("/account_manager")}
              >
                <Box sx={styles.cardContent}>
                  <Box sx={styles.iconContainer} className="icon">
                    <AccountBalance fontSize="large" />
                  </Box>
                  <Typography sx={styles.cardTitle}>ACCOUNT MANAGER</Typography>
                </Box>
              </Paper>
            </Grid>
          )}

          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Paper
              sx={{
                ...styles.paper,
                "&:hover": {
                  ...styles.paperHover,
                  "& .icon": {
                    color: "#3F51B5",
                    transform: "scale(1.1)",
                  },
                },
              }}
              elevation={0}
              onClick={() => changePage("/acte_engagement")}
            >
              <Box sx={styles.cardContent}>
                <Box sx={styles.iconContainer} className="icon">
                  <Person fontSize="large" />
                </Box>
                <Typography sx={styles.cardTitle}>
                  ACTE D&apos;ENGAGEMENT
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f0f2f5 0%, #f0f2f5 100%)",
    padding: { xs: 2, sm: 3, md: 4 },
  },
  header: {
    textAlign: "center",
    marginBottom: 4,
  },
  headerTitle: {
    fontWeight: 700,
    marginBottom: 1,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },
  headerSubtitle: {
    fontWeight: 300,
  },
  gridContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  paper: {
    padding: 3,
    minHeight: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "3px",
      background: "linear-gradient(90deg, #667eea, #764ba2)",
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 0.3s ease",
    },
  },
  paperHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    background: "rgba(255, 255, 255, 1)",
    "&::before": {
      transform: "scaleX(1)",
    },
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    textAlign: "center",
  },
  iconContainer: {
    color: "#666",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#333",
    textAlign: "center",
    lineHeight: 1.3,
    letterSpacing: "0.5px",
  },
  badge: {
    "& .MuiBadge-badge": {
      backgroundColor: "#f44336",
      color: "#fff",
      fontWeight: 600,
    },
  },
};
