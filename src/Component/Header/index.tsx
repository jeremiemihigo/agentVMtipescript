import { Logout } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Image } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../Interface/IUser";
import FirstLogin from "../Login/FirstLogin";
import "./header.css";

function Header() {
  const userConnect: IUser = useSelector((state: any) => state.user?.user);

  const navigation = useNavigate();
  const deconnection = (e?: any) => {
    e?.preventDefault();
    localStorage.removeItem("auth");
    localStorage.removeItem("nom");
    localStorage.removeItem("codeAgent");
    localStorage.removeItem("codeZone");
    navigation("/", { replace: true });
  };

  const user: string = useSelector((state: any) => state.user.readUser);

  React.useEffect(() => {
    if (user === "rejected") {
      deconnection();
    }
  }, [user]);

  return (
    <>
      <div
        style={{
          color: "#fff",
          backgroundColor: "rgb(0, 169, 224)",
          padding: "4px",
          margin: "0px",
        }}
      >
        <Grid className="images" component={Link} to="/image">
          <Image
            width={100}
            style={{ borderRadius: "50%" }}
            src={
              userConnect && userConnect.filename
                ? userConnect.filename
                : "/profile.png"
            }
            placeholder={
              <Image
                preview={false}
                src={
                  userConnect && userConnect.filename
                    ? userConnect.filename
                    : "/profile.png"
                }
                width={100}
              />
            }
          />
        </Grid>
        <Box>
          <div style={{ display: "flex", paddingTop: "10px" }}>
            <Typography
              component="p"
              noWrap
              sx={{
                width: "60%",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "bolder",
              }}
            >
              {localStorage.getItem("nom")}
            </Typography>
            <Typography
              component="p"
              sx={{ width: "20%", fontSize: "14px", fontWeight: "bolder" }}
            >
              {localStorage.getItem("codeAgent")}
            </Typography>
            <Typography
              component="p"
              onClick={(e) => deconnection(e)}
              noWrap
              sx={{ width: "20%", textAlign: "right", cursor: "pointer" }}
            >
              {" "}
              <Logout />
            </Typography>
          </div>
        </Box>
        {userConnect && (
          <Box sx={{ margin: "0px", padding: "0px" }}>
            <Typography sx={{ textAlign: "center", fontSize: "13px" }}>
              Region : {userConnect?.region?.denomination}{" "}
              {["PO", "ZBM"].includes(userConnect?.fonction)
                ? ""
                : `${
                    userConnect?.shop.length === 1 &&
                    "/ " + userConnect?.shop[0].shop
                  }`}
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
              contact : {userConnect?.telephone}
            </Typography>
            <Typography
              sx={{ textAlign: "center", marginTop: "10px", fontSize: "12px" }}
            >
              Type de compte :{" "}
              {userConnect?.account_manager
                ? "ACCOUNT MANAGER"
                : userConnect.fonction.toUpperCase()}
            </Typography>
          </Box>
        )}
      </div>
      {userConnect?.first && <FirstLogin />}
    </>
  );
}

export default Header;
