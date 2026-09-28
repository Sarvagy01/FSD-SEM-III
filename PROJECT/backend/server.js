const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

// GET
app.get("/", (req, res) => {
    res.json({ message: "hello" });
});

// POST
app.post("/", (req, res) => {
    res.json({ message: "hello" });
});

// PUT
app.put("/", (req, res) => {
    res.json({ message: "hello" });
});

// DELETE
app.delete("/", (req, res) => {
    res.json({ message: "deleted" });
});

// Start server
app.listen(3000, () => {
    console.log(`App is running on port ${PORT}`);
});