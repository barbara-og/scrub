import React, { useState, useEffect } from "react";

function TweetsView() {
  const [tweetsList, setTweetsList] = useState([{ hi: "I am a tweet" }]);
  // useEffect();
  // //update state with list of tweets

  return (
    <div>
      <h2> This is a tweets view</h2>
      <div>
        {/* div containing all tweets */}
        {tweetsList.map(tweet => {
          return (
            <div className="tweetContainer">
              <span>Display Name</span>
              <span> @ name</span>
              <span> date tweeted</span>
              <p> Tweet content </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TweetsView;
