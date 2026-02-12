const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

