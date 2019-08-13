import React from "react";
// import "bootstrap";

function LandingPage() {
  const [tweets, setTweets] = useState(null);
  function onUploadClick(event) {
    event.preventDefault();
    //function should make upload request and save result to state
  }

  return (
    <div className="landing" display="flex">
      <div className="banner">
        <h3>Scrub</h3>
      </div>
      <span className="about">
        <h3>Lorem Ipsum explaining the app</h3>
        <button
          type="button"
          class="btn btn-outline-info"
          onClick={event => onUploadClick(event)}
        >
          Upload My Archive
        </button>
      </span>
    </div>
  );
}

export default LandingPage;
