import {
  AccountBalance,
  AccountBox,
  Construction,
  Inventory,
  KeyboardVoice,
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
}

export default function BasicTabs() {
  const userConnect: IUser = useSelector((state: any) => state.user?.user);

  const navigation = useNavigate();
  const title: IOptions[] = [
    {
      id: 1,
      title: "Pack",
      link: "/paquet",
      icon: <Inventory fontSize="small" />,
      badget: false,
    },
    {
      id: 2,
      title: "Request",
      link: "/demande",
      icon: <Visibility fontSize="small" />,
      badget: false,
    },

    {
      id: 4,
      title: "Changing password",
      link: "/profil",
      icon: <AccountBox fontSize="small" />,
      badget: false,
    },
    {
      id: 5,
      title: "All customer visits",
      link: "/recherche",
      icon: <Search fontSize="small" />,
      badget: false,
    },
    {
      id: 6,
      title: "Communication",
      link: "/mesactions",
      icon: <KeyboardVoice fontSize="small" />,
      badget: false,
    },
  ];
  const changePage = (link: string) => {
    navigation(link);
  };
  const communication: ICommuniquer[] = useSelector(
    (state: any) => state.communiquer.communiquer
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          padding: 2,
          borderColor: "divider",
          color: "#fff",
        }}
      >
        <Grid container>
          {title.map((index: IOptions) => {
            return (
              <Grid
                onClick={() => changePage(index.link)}
                item
                key={index.id}
                lg={6}
                sm={6}
                xs={6}
              >
                <Paper sx={style.paper} elevation={3}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "10px",
                      }}
                    >
                      {index.icon}
                    </div>
                    {index.badget ? (
                      <Badge
                        badgeContent={communication ? communication.length : 0}
                        color="primary"
                      >
                        <Typography
                          sx={{ fontSize: "12px" }}
                          component="p"
                          noWrap
                        >
                          {index.title}
                        </Typography>
                      </Badge>
                    ) : (
                      <Typography
                        sx={{ fontSize: "12px" }}
                        component="p"
                        noWrap
                      >
                        {index.title}
                      </Typography>
                    )}
                  </div>
                </Paper>
              </Grid>
            );
          })}

          {userConnect?.fonction === "tech" && (
            <Grid
              onClick={() => changePage("/action")}
              item
              lg={6}
              sm={6}
              xs={6}
            >
              <Paper sx={style.paper} elevation={3}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Construction fontSize="small" />
                  </div>
                  <Typography sx={{ fontSize: "12px" }} component="p" noWrap>
                    Actions Synchro
                  </Typography>
                </div>
              </Paper>
            </Grid>
          )}
          {userConnect?.account_manager && (
            <Grid
              onClick={() => changePage("/account_manager")}
              item
              lg={6}
              sm={6}
              xs={6}
            >
              <Paper sx={style.paper} elevation={3}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <AccountBalance fontSize="small" />
                  </div>
                  <Typography sx={{ fontSize: "12px" }} component="p" noWrap>
                    ACCOUNT MANAGER
                  </Typography>
                </div>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
}
const style = {
  paper: {
    padding: "5px",
    minHeight: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "3px",
  },
};
