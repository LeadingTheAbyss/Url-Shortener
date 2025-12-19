const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const { connectToMDB } = require("./connect"); 
const app = express();
const PORT = 8001;  

connectToMDB('mongodb://localhost:27017/short-url').then(() => console.log("Connected to mongo DB connected"))

app.use(express.static("views"));

app.set("view engine", "ejs");
app.set('views', path.resolve('./views'));
app.get("/home", async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home', { urls : allUrls });
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", urlRoute);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
