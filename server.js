const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        message: "CloudPilot is running!",
        status: "running"
    });
});

app.get("/healthy", (req, res) => {
    res.json({ status: "healthy"});
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Demo app running on port ${PORT}`);
});