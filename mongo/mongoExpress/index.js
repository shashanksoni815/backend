const express = require("express");
const app = express();
const mongoose = require("mongoose");

main().then(() =>{console.log("connection successful")})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatBox');
}

app.get("/", (req, res) => {
    res.send("root is WORKING");
});

app.listen(8080, () => {
    console.log("Server listining to port 8080");
})