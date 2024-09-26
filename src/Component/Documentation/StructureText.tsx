import { useSelector } from "react-redux";
import { IUser } from "../../Interface/IUser";
import { returnName } from "../../Static/static";

type Props = {
  text: string;
};

function TextWithLineBreaks({ text }: Props) {
  const user: IUser = useSelector((state: any) => state.user.user);
  const textWithBreaks = text.split("@p").map((index, key) => (
    <div className="title_content" key={key}>
      <p>{index.replace("@name", returnName(user?.nom))}</p>
    </div>
  ));
  return textWithBreaks;
}

export default TextWithLineBreaks;
