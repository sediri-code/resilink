const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const { PDFDocument, StandardFonts } = require("pdf-lib");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Get Started → form.html
app.get("/get-started", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));  // ✅ must exist here
});

// Serve static files (CSS, JS, images)
app.use(express.static(__dirname));

// Form submission
app.post("/submit", async (req, res) => {
  // … PDF + email logic …
  res.redirect("/success.html");
});

app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));
