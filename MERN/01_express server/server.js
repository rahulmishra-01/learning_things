const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.status(200).send("This is home page")
})

app.get("/about",(req,res) => {
    res.status(200).send("This is about us page")
})

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`server is running on: http://localhost:${PORT}`)
})