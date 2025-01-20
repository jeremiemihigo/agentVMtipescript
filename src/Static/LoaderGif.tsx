import Loader from "../assets/loader.gif";

type Props = {
  width: number;
  height: number;
};

function LoaderGif({ width, height }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginTop: "30px",
      }}
    >
      <img width={width} height={height} src={Loader} alt="Loading" />
    </div>
  );
}

export default LoaderGif;
