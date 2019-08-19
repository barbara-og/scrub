import React, { useState, useEffect } from "react";

function TweetsView() {
  const [tweetsList, setTweetsList] = useState([]);
  useEffect(() => {
    //update state with list of tweets
    fetch("http://localhost:4000/alltweets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(resJson => {
        /* use setTweetsList(resJson.tweetsList.tweets) to update*/
        if (resJson.success) {
          setTweetsList(resJson.tweets);
        }
      })
      .catch(err => console.log("get all tweets error", err));
  });

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
