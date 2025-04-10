const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); 

const quotes = [
  "La simplicité est la sophistication suprême.",
  "Le code propre est une œuvre d'art.",
  "L'ordinateur est incroyablement rapide, précis et stupide ; l'humain est incroyablement lent, inexact et brillant."
];


app.get("/quotes", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});


app.post("/quotes", (req, res) => {
  const { quote } = req.body;
  if (quote) {
    quotes.push(quote);
    res.status(201).json({ message: "Citation added!" });
  } else {
    res.status(400).json({ message: "No quote provided" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend is running on http://localhost:${PORT}`);
});
