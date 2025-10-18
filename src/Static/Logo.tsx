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
        <img src={LogoBboxx} alt="bboxxPages" style={{ borderRadius: "50%" }} />
        <p> {text}</p>
      </div>
    </div>
  );
}

export default Logo;
