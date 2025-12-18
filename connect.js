const mongoose = require("mongoose");

async function connectToMDB(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectToMDB,
}