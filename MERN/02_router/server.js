const express = require("express");
const app = express();
const router = require("./router/auth_router");

app.use("/api/auth",router);

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`server running on: http://localhost:${PORT}`)
})
