// Add Express
const express = require("express");
const path = require("path");

// Initialize Express
const app = express();

// Serve the stopwatch.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "stopwatch.html"));
});

// Initialize server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
