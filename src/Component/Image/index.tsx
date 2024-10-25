import axios from "axios";
import React, { useState } from "react";

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) {
      setMessage("Veuillez sélectionner une image à télécharger.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      // Envoyer la requête POST au serveur PHP
      const response = await axios.post(
        "https://www.bboxxvm.com/ImagesVisite/upload.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Vérifier si la réponse du serveur est un succès
      if (response.data.status === "success") {
        setMessage("Téléchargement réussi.");
        setImageUrl(response.data.file_url); // L'URL du fichier téléchargé
      } else {
        setMessage(response.data.filename || "Erreur lors du téléchargement.");
      }
    } catch (error) {
      console.error("Erreur lors du téléchargement:", error);
      setMessage("Erreur lors du téléchargement de l'image.");
    }
  };

  return (
    <div>
      <h1>Télécharger une image</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Télécharger</button>
      </form>
      {message && <p>{message}</p>}
      {imageUrl && (
        <div>
          <p>Image enregistrée avec succès :</p>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            {imageUrl}
          </a>
          <img
            src={imageUrl}
            alt="Image téléchargée"
            style={{ width: "200px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
