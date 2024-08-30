const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to My REST API");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

// ================================================== Img Upload ==================================================
// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Return the URL of the uploaded file
  const imageUrl = `http://0.0.0.0:3000/uploads/${req.file.filename}`;
  res.json({ imageUrl });
});

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ================================================== ==================================================

// ================================================== People ==================================================
let people = [];

const testPerson = {
  name: "Will",
  pin: {
    background: { r: 100, g: 100, b: 255 },
    center: { r: 255, g: 100, b: 100 },
    outline: { r: 100, g: 255, b: 100 },
  },
  points: 0,
};

const testPerson2 = {
  name: "Julian",
  pin: {
    background: { r: 255, g: 100, b: 255 },
    center: { r: 100, g: 255, b: 255 },
    outline: { r: 255, g: 0, b: 0 },
  },
  points: 0,
};

people.push(testPerson);
people.push(testPerson2);

app.get("/people", (req, res) => {
  res.json(people);
});
