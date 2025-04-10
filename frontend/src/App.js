import React, { useEffect, useState } from "react";
import "./App.css"; 

function App() {
  const [quote, setQuote] = useState("Chargement...");
  const [newQuote, setNewQuote] = useState("");  

  
  const fetchQuote = () => {
    fetch("http://localhost:5000/quotes")
      .then((res) => res.json())
      .then((data) => setQuote(data.quote))
      .catch((err) => {
        console.error("Erreur :", err);
        setQuote("Erreur de chargement");
      });
  };


  const addQuote = () => {
    if (!newQuote) {
      alert("Please enter a quote!");
      return;
    }

    fetch("http://localhost:5000/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quote: newQuote }),
    })
      .then((res) => res.json())
      .then(() => {
        setNewQuote(""); 
        alert("Citation added!");
        fetchQuote(); 
      })
      .catch((err) => console.error("Error adding quote:", err));
  };


  useEffect(() => {
    fetchQuote(); 
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">📜 Citation du jour</h1>
        <blockquote className="quote">{quote}</blockquote>

        <div className="button-group">
          {/* Button to add a new quote */}
          <input
            type="text"
            placeholder="Ajouter une citation"
            value={newQuote}
            onChange={(e) => setNewQuote(e.target.value)}
            style={{ padding: "0.5rem", fontSize: "1rem", width: "80%" }}
          />
          <button onClick={addQuote} className="button">
            Ajouter une citation
          </button>

          {}
          <button onClick={fetchQuote} className="button">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;





