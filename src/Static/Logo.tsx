import LogoBboxx from "../assets/bboxx.png";
import "./static.style.css";

type Props = {
  text: string;
};
function Logo(props: Props) {
  const { text } = props;
  return (
    <div className="titre">
      <img src={LogoBboxx} alt="bboxxPages" />
      <p> {text}</p>
    </div>
  );
}

export default Logo;
