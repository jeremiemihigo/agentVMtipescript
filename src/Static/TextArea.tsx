/* eslint-disable react/prop-types */
import Textarea from "@mui/joy/Textarea";
import { SxProps } from "@mui/system";

interface TextAreaProps {
  setValue: (value: string) => void;
  value: string;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  setValue,
  value,
  placeholder,
}) => {
  return (
    <Textarea
      onChange={(e: any) => setValue(e.target.value)}
      placeholder={placeholder}
      value={value}
      minRows={2}
      sx={
        {
          "&::before": {
            display: "none",
          },
          "&:focus-within": {
            outline: "2px solid var(--Textarea-focusedHighlight)",
            outlineOffset: "2px",
          },
        } as SxProps
      }
    />
  );
};

export default TextArea;
