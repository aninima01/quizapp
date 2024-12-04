import React, { useState } from "react";

const mockQuizData = {
  quizCode: "ABC123",
  title: "Sample Quiz",
  questions: [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctOption: 2,
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctOption: 1,
    },
  ],
};

const JoinQuiz = () => {
  const [quizCode, setQuizCode] = useState("");
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const joinQuiz = () => {
    // Simulate fetching the quiz by code (replace with actual API call)
    if (quizCode === mockQuizData.quizCode) {
      setQuiz(mockQuizData);
    } else {
      alert("Invalid Quiz Code");
    }
  };

  const handleAnswer = (index) => {
    const isCorrect =
      index === quiz.questions[currentQuestionIndex].correctOption;
    if (isCorrect) setScore(score + 1);

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quiz.questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      alert(
        `Quiz completed! Your score: ${score + (isCorrect ? 1 : 0)}/${
          quiz.questions.length
        }`
      );
      setQuiz(null); // Reset to join another quiz
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-cyan-500 to-pink-500">
      {!quiz ? (
        <>
          <h1 className="text-8xl md:text-8xl font-extrabold mb-6 animate-fadeIn text-white">
            Join a Quiz
          </h1>
          <input
            type="text"
            placeholder="Enter Quiz Code"
            value={quizCode}
            onChange={(e) => setQuizCode(e.target.value)}
            className="p-2 border-4 rounded w-1/2 mb-4 border-purple-800"
          />
          <button
            onClick={joinQuiz}
            className="px-4 py-2 font-semibold text-xl rounded-full shadow-xl bg-pink-500 hover:bg-pink-600 text-white rounded transition-transform transform hover:scale-110 "
          >
            Join Quiz
          </button>
        </>
      ) : (
        <div className="w-2/3">
          <h2 className="text-3xl font-bold mb-4">{quiz.title}</h2>
          <div className="mb-6">
            <h3 className="text-xl mb-2">
              {quiz.questions[currentQuestionIndex].question}
            </h3>
            {quiz.questions[currentQuestionIndex].options.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="block w-full p-2 bg-gray-200 rounded mb-2 hover:bg-blue-400 hover:text-white"
                >
                  {option}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinQuiz;
