import React, { useState } from "react";
import axios from "axios";

function UploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      axios
        .post("http://localhost:5000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          // Handle the response from the server (e.g., success message)
          console.log("Post Successfull");
        })
        .catch((error) => {
          // Handle errors, e.g., show an error message
          console.log("Error: " + error);
        });
    }
  };

  return (
    <div>
      <h2>Upload an Excel File</h2>
      <div className="file-upload">
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload Excel File</button>
      </div>
      {file && <p>File selected: {file.name}</p>}
    </div>
  );
}

export default UploadForm;
