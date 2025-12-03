function getFileType(filename: string) {
  if (!filename || typeof filename !== "string") return "Unknown";
  const parts = filename.split(".");
  if (parts.length < 2) return "Unknown";
  const ext = parts.pop()?.toLowerCase();
  if (!ext) return "Unknown";
  const types: { [key: string]: string } = {
    // Documents
    pdf: "PDF",
    doc: "Word",
    docx: "Word",
    xls: "Excel",
    xlsx: "Excel",
    ppt: "PowerPoint",
    pptx: "PowerPoint",
    txt: "Text",
    csv: "CSV",

    // Images
    jpg: "Image",
    jpeg: "Image",
    png: "Image",
    gif: "Image",
    webp: "Image",
    svg: "Image",

    // Audio
    mp3: "Audio",
    wav: "Audio",
    ogg: "Audio",

    // Vidéos
    mp4: "Video",
    mov: "Video",
    avi: "Video",
    mkv: "Video",
  };

  return types[ext] || "Unknown";
}

type Props = {
  originalname: string;
  width?: number;
  height?: number;
};
function ReturnIcon({ originalname, width, height }: Props) {
  return (
    <>
      {getFileType(originalname) === "PDF" && (
        <img width={width} height={height} src="/icons/pdf.png" alt="pdf" />
      )}
      {getFileType(originalname) === "Excel" && (
        <img width={width} height={height} src="/icons/excel.png" alt="excel" />
      )}
      {getFileType(originalname) === "Word" && (
        <img width={width} height={height} src="/icons/word.png" alt="Word" />
      )}
      {getFileType(originalname) === "PowerPoint" && (
        <img
          width={width}
          height={height}
          src="/icons/powepoint.png"
          alt="Powerpoint"
        />
      )}
    </>
  );
}

export default ReturnIcon;
