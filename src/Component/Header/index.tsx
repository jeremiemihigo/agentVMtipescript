import { Logout } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../Interface/IUser";
import FirstLogin from "../Login/FirstLogin";
import "./header.css";

function Header() {
  const userConnect: IUser = useSelector((state: any) => state.user?.user);

  const navigation = useNavigate();
  const deconnection = (e?: any) => {
    e?.preventDefault();
    localStorage.removeItem("auth");
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
          marginBottom: "10px",
        }}
      >
        {userConnect && (
          <>
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
                  {userConnect?.nom}
                </Typography>
                <Typography
                  component="p"
                  sx={{ width: "20%", fontSize: "14px", fontWeight: "bolder" }}
                >
                  {userConnect?.codeAgent}
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
                sx={{
                  textAlign: "center",
                  marginTop: "10px",
                  fontSize: "12px",
                }}
              >
                Type de compte : {userConnect.fonction.toUpperCase()}
              </Typography>
            </Box>
          </>
        )}
      </div>
      {userConnect?.first && <FirstLogin />}
    </>
  );
}

export default Header;
