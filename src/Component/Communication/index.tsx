import CommentIcon from "@mui/icons-material/Comment";
import { Badge, Paper } from "@mui/material";
import DOMPurify from "dompurify";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICommuniquer } from "../../Interface/ICommuniquer";
import Logo from "../../Static/Logo";
import Header from "../Header";
import "./mesaction.style.css";

function Index() {
  const communication: ICommuniquer[] = useSelector(
    (state: any) => state.communiquer.communiquer
  );
  //communication_chat
  const navigation = useNavigate();

  return (
    <>
      <Header />
      <Logo text="Communications importantes" />
      {communication &&
        communication.map((index, key) => {
          return (
            <Paper elevation={1} className="papier" key={key}>
              {index.content && (
                <div
                  className="html-viewer"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(index.content),
                  }}
                />
              )}

              <div className="footer_message">
                <Badge
                  onClick={() =>
                    navigation(`/communication_chat/${index.idMail}`, {
                      state: index,
                    })
                  }
                  badgeContent={3}
                  color="primary"
                >
                  <CommentIcon fontSize="small" />
                </Badge>

                <p className="moment">{moment(index.createdAt).fromNow()}</p>
              </div>
            </Paper>
          );
        })}
      {/* <Composant /> */}
    </>
  );
}

export default Index;
