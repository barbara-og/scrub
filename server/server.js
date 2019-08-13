const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const upload = require("./upload");

//connect mongoose & display errors if any
// mongoose.connect(process.env.MONGODB_URI);
// mongoose.connection.on("error", function(err) {
//   console.log("Mongoose connection error: " + err);
// });
app.use(cors);

app.post("/upload", upload(req,res){
  //upload functionality
});
//set express server to listen on port 4000
app.listen(4000, () => {
  console.log("Server listening on port 4000!");
});
