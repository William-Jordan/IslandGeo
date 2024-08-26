import React, { useState } from "react";
import axios from "axios";

const Upload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    setUploading(true);
    setError(null);

    try {
      const response = await axios.post<{ imageUrl: string }>(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img
            src={imageUrl}
            alt="Uploaded"
            style={{ maxWidth: "300px", marginTop: "20px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
