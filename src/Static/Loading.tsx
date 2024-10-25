/* eslint-disable react/prop-types */
import { CircularProgress } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface PopupProps {
  open: boolean;
  title: string;
}

const Loading: React.FC<PopupProps> = ({ open, title }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress size={20} />
        </div>
        <p style={{ textAlign: "center", fontSize: "10px", marginTop: "10px" }}>
          {title}
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default Loading;
