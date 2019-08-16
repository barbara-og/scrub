import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import "bootstrap";

function LandingPage(selectedFile, setSelectedFile) {
  //const [tweets, setTweets] = useState(null);
  // const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  function onFileUpload(event) {
    event.preventDefault();
    //function should make upload request and save result to state
    //setSelectedFile(event.target.files); //does not work
    selectedFile = event.target.files[0];
    console.log("event target", event.target.files[0]);
    console.log("selectedfile", selectedFile);
  }
  function onUploadClick(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("tweetsfile", selectedFile); //does not work
    console.log("data", formData);
    // fetch("http://localhost:4000/upload", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   credentials: "include",
    //   redirect: "follow",
    //   body: {}
    // }).then(res => console.log(res));
    setUploadSuccess(true); //only do this after checking success of upload
  }

  return uploadSuccess ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className="landing" display="flex">
      {/* <div className="banner">
        <h3>Scrub</h3>
      </div> */}
      <div className="about">
        <h3>Lorem Ipsum explaining the app</h3>
        <input type="file" name="file" onChange={e => onFileUpload(e)} />
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={event => onUploadClick(event)}
        >
          Upload My Archive
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
