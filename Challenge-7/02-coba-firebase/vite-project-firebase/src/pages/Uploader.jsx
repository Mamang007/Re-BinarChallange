import { useState } from "react";
import firebase from "../services/firebase";

export default function Uploader() {
  const [image, setImage] = useState();
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFile(e.target.files);

    try {
      const response = await firebase
        .storage()
        .ref(`files/${file}`)
        .put(file)
        .then((snapshot) => {
          console.log(snapshot);
        });
      alert("File Uploaded!");
      console.log(response);
    } catch (err) {
      console.log(err);
      alert("Failed to upload file!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Random Uploader</h3>
        {!!image && <img src={image} alt="Image Preview" style={{ width: "250px" }} />}
        <form onSubmit={handleSubmit}>
          <div className="form-control" style={{ margin: "32px 0px" }}>
            <input type="file" onChange={handleFileChange} placeholder="Random File" />
          </div>
          <div className="form-control">
            <input type="submit" value="Upload" className="form-submit" />
          </div>
        </form>
      </header>
    </div>
  );
}
