import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LogoBboxx from "../assets/bboxx.png";
import "./static.style.css";

type Props = {
  text: string;
};
function Logo(props: Props) {
  const { text } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="titre">
        <img src={LogoBboxx} alt="bboxxPages" />
        <p> {text}</p>
      </div>
      <div>
        <Link
          to="/operation"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            component="p"
            style={{
              padding: "0px",
              color: "blue",
              fontWeight: "bolder",
              margin: "0px",
              fontSize: "12px",
              marginRight: "15px",
            }}
          >
            Dashboard
          </Typography>
        </Link>
      </div>
    </div>
  );
}

export default Logo;
