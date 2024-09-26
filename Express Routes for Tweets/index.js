// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import tweetRoutes from "./src/features/tweet/tweet.routes.js";
const app = express();

// TODO: Refactor these route handlers into tweet.routes.js file using express Router --------->>>>

// Write your code here
// app.use("/", router)

// -------------->>>>>>>>>>>>>>>>>>>

// middleware for accessing these routes after refactoring
app.use("/api/tweets", tweetRoutes);

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});
