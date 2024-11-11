import { Edit } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Button, Flex, Input } from "antd";
import axios from "axios";
import * as React from "react";
import { useSelector } from "react-redux";
import { lien } from "../../Static/static";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FirstLogin() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const userConnect = useSelector((state: any) => state.user?.user);
  const [password, setPassword] = React.useState({ first: "", second: "" });
  const [message, setMessage] = React.useState<string>("");
  const [sending, setSending] = React.useState<boolean>(false);

  const sendData = async (e: any) => {
    e.preventDefault();
    try {
      if (password.first !== password.second) {
        setMessage("The password is not correct");
      } else {
        if (password.first === "1234") {
          setMessage("Default password to change");
        } else {
          setSending(true);
          const response = await axios.post(lien + "/updatedefaultpwd", {
            codeAgent: userConnect && userConnect.codeAgent,
            ancien: "1234",
            nouvelle: password.first,
          });
          setSending(false);
          if (response.status === 200) {
            setOpen(false);
            handleClose();
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby=" Please Change the default password"
      >
        <DialogTitle>{"Please Change the default password"}</DialogTitle>
        <DialogContent>
          {message !== "" && (
            <p style={{ fontSize: "12px", marginBottom: "10px", color: "red" }}>
              {message}
            </p>
          )}
          <div style={{ marginBottom: "10px" }}>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setPassword({
                  ...password,
                  first: e.target.value,
                })
              }
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <Input
              type="password"
              placeholder="Repeat password"
              onChange={(e) =>
                setPassword({
                  ...password,
                  second: e.target.value,
                })
              }
            />
          </div>
          <Flex vertical gap="small" style={{ width: "100%" }}>
            <Button
              disabled={sending}
              onClick={(e) => sendData(e)}
              type="primary"
              block
            >
              <Edit fontSize="small" sx={{ marginRight: "5px" }} /> Edit
            </Button>
          </Flex>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
