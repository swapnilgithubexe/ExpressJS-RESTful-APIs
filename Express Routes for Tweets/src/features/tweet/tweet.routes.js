// Please don't change the pre-written code
// Import the necessary modules here
import { getTweets, createTweet } from "./tweet.controller";

import express from "express";

const router = express.Router();

// Write your code here
router.get("/", getTweets);

router.post("/", createTweet);

export default router;

