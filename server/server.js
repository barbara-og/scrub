const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Store text from file
let tweets;

app.post("/upload", (req, res) => {
  //req.body.fileContent.part0 contains an object with keys 0,1,2 etc whose values are tweet-objects
  //console.log("filecontent", req.body.fileContent);
  tweets = req.body.fileContent.part0;
  if (tweets) {
    return res.send({ success: true });
  } else {
    return res.send({ success: false });
  }
});
app.get("/alltweets", (req, res) => {
  res.send({ success: true, tweets: tweets });
});

//set express server to listen on port 4000
app.listen(4000, () => {
  console.log("Server listening on port 4000!");
});
