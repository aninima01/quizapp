import React, { useState } from "react";

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctOption, setCorrectOption] = useState(null);

  const addQuestion = () => {
    const newQuestion = {
      question: currentQuestion,
      options,
      correctOption,
    };
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectOption(null);
  };

  const submitQuiz = () => {
    const quizCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    console.log("Quiz Created:", { quizTitle, questions, quizCode });
    alert(`Quiz created! Share this code: ${quizCode}`);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-cyan-500 to-pink-500">
      <h1 className="text-8xl md:text-8xl font-extrabold mb-6 animate-fadeIn">
        <span className="block text-white ">Create Your Quiz</span>
      </h1>
      <input
        type="text"
        placeholder="Quiz Title"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
        className="mb-4 p-2 w-2/3 border-4 border-pink-500 rounded"
      />
      <div className="w-2/3 mb-4">
        <input
          type="text"
          placeholder="Question"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
          className="w-full p-2 border-4 border-pink-500 rounded mb-2"
        />
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) =>
              setOptions(
                options.map((o, i) => (i === index ? e.target.value : o))
              )
            }
            className="w-full p-2 border-4 border-purple-800 rounded-lg mb-2"
          />
        ))}
        <div>
          <label className="block">Correct Option:</label>
          <select
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            className="p-2 border-4 border-pink-500 rounded"
          >
            <option value={null}>Select</option>
            {options.map((_, index) => (
              <option key={index} value={index}>
                Option {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={addQuestion}
        className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black text-white font-semibold text-m rounded-full shadow-xl transition-transform transform hover:scale-110 "
      >
        Add Question
      </button>
      <button
        onClick={submitQuiz}
        className="mt-4 px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white text-white font-semibold text-m rounded-full shadow-xl transition-transform transform hover:scale-110 "
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;
