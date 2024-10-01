import imageCompression from "browser-image-compression";
import React, { useState } from "react";

function UploadImage() {
  const [compressedFile, setCompressedFile] = useState<File | null>(null);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      setCompressedFile(compressedFile);
      console.log("Image compressée:", compressedFile);
    } catch (error) {
      console.error("Erreur lors de la compression:", error);
    }
  };

  const handleSubmit = async () => {
    if (!compressedFile) return;
    const formData = new FormData();
    formData.append("image", compressedFile);

    // Envoie de l'image compressée vers le backend
    await fetch("/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default UploadImage;
