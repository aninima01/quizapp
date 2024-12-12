import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import CreateQuiz from "./components/CreateQuiz";
import JoinQuiz from "./components/JoinQuiz";
import QuoteOfTheDay from "./components/QuoteOfTheDay";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/join-quiz" element={<JoinQuiz />} />
        <Route path="/quote" element={<QuoteOfTheDay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
