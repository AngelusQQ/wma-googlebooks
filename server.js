const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const server = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// ------------------- DEVELOPMENT (DELETE FOR PRODUCTION) ------------------------
server.use(express.static('client/build'));
// --------------------------------------------------------------------------------

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}

// Add routes, both API and view
server.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
