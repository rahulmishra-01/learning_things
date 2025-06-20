const express = require("express");
const router = require("./router/auth_router");
const app = express();

app.use("/api/auth",router);

const PORT = 3000;

app.listen(PORT,() => {
    console.log(`server running on: http://localhost:${PORT}`)
})