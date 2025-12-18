const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function generateShortUrl(req, res) {
    const { url } = req.body || {};

    if (!url) {
        return res.status(400).json({ error: "url is required" });
    }

    const shortId = nanoid(8);

    await URL.create({
        shortId,
        redirectURL: url,
        visitHistory: [],
    });

    return res.json({ id: shortId });
}

async function handleRedirect(req, res) {
    const { shortId } = req.params;

    const entry = await URL.findOne({ shortId });

    if (!entry) {
        return res.status(404).send("Not found");
    }

    return res.redirect(entry.redirectURL);
}

module.exports = { generateShortUrl, handleRedirect, };