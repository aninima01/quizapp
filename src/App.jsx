import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import CreateQuiz from "./components/CreateQuiz";
import JoinQuiz from "./components/JoinQuiz";
import QuoteOfTheDay from "./components/QuoteOfTheDay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/join-quiz" element={<JoinQuiz />} />
        <Route path="/quote" element={<QuoteOfTheDay />} />
      </Routes>
    </Router>
  );
}

export default App;
