import { Paper } from "@mui/material";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IServey } from "../../Interface/IServey";
import "./servey.style.css";

function Presentation() {
  const serveys: IServey[] = useSelector((state: any) => state.servey.servey);
  const navigate = useNavigate();

  const repondre = (id: string) => {
    navigate(`/servey/reponse/${id}`);
  };
  return (
    <div className="presentation">
      {serveys &&
        serveys.length > 0 &&
        serveys.map((index) => {
          return (
            <Paper
              onClick={() => repondre(index._id)}
              key={index._id}
              elevation={3}
              className="paper_Servey"
            >
              <p className="paper_title">
                {index.title}{" "}
                <span
                  style={{
                    color: "rgb(0,169,244)",
                    fontWeight: "bolder",
                    fontSize: "10px",
                  }}
                >
                  Répondre
                </span>
              </p>
              <p className="paper_subtitle">{index.subtitle}</p>
              <p className="expired_at">
                Expire {moment(index.dateFin).fromNow()}
              </p>
            </Paper>
          );
        })}
    </div>
  );
}

export default Presentation;
