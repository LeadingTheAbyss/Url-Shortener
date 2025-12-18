const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMDB } = require("./connect"); 
const app = express();
const PORT = 8001;

connectToMDB('mongodb://localhost:27017/short-url').then(() => console.log("Connected to mongo DB connected"))

app.use(express.json());
app.use("/", urlRoute);


app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
