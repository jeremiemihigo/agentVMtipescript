import { useLocation } from "react-router-dom";
import Logo from "../../../Static/Logo";
import Header from "../../Header";
import Communication from "./Message";

function Detail_chat() {
  const location = useLocation();
  const { state } = location;
  console.log(state);
  return (
    <>
      <Header />
      <Logo text={state.object} />
      <Communication concerne={state} />
    </>
  );
}

export default Detail_chat;
