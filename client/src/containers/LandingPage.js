import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function LandingPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  function onFileUpload(event) {
    event.preventDefault();
    setSelectedFile(event.target.files[0]); //does not work?
    //selectedFile = event.target.files[0];
    // console.log("event target", event.target.files[0]);
    // console.log("selectedfile", selectedFile);
  }

  async function onUploadClick(event) {
    event.preventDefault();
    let fileContent;
    const reader = new FileReader();
    window.YTD = { tweet: {} };
    reader.onload = event => {
      fileContent = event.target.result;
      eval(fileContent);

      //console.log(window.YTD);
      //debugger;
      fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        redirect: "follow",
        body: JSON.stringify({ fileContent: window.YTD.tweet })
      })
        .then(res => res.json())
        .then(resJson => {
          if (resJson.success) {
            setUploadSuccess(true);
          }
        })
        .catch(err => console.log("error uploading file", err));
    };
    reader.readAsText(selectedFile);
  }

  return uploadSuccess ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className="landing" display="flex">
      <div className="about">
        <h3>Lorem Ipsum explaining the app</h3>
        <input type="file" name="file" onChange={e => onFileUpload(e)} />
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={event => onUploadClick(event)}
        >
          Upload My Archive
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
