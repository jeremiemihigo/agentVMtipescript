import Logo from "../../Static/Logo";
import Header from "../Header";
import Presentation from "./Presentation";

function Index() {
  return (
    <>
      <Header />
      <div style={{ padding: "10px" }}>
        <Logo text="Servey" />
        <Presentation />
      </div>
    </>
  );
}

export default Index;
