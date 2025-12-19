const express = require("express");
const router = express.Router();
const {generateShortUrl, handleRedirect} = require("../controllers/url");

router.post("/url", generateShortUrl);
router.get("/url/:shortId", handleRedirect);
module.exports = router;