import React, { useEffect, useState } from "react";

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = () => {
    const quotes = [
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
      {
        text: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer",
      },
      {
        text: "Life is what happens when you’re busy making other plans.",
        author: "John Lennon",
      },
      {
        text: "Do not watch the clock. Do what it does. Keep going.",
        author: "Sam Levenson",
      },
      {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
      },
      {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
      },
      {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
      },
      {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
      },
      {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
      },
      {
        text: "Act as if what you do makes a difference. It does.",
        author: "William James",
      },
      {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
      },
      {
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
      },
      {
        text: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama",
      },
      {
        text: "Don’t watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
      },
      {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
      },
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote.text);
    setAuthor(randomQuote.author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#B81365] to-[#BFAB25] flex flex-col items-center justify-center text-white text-center p-8">
      <h1 className="text-8xl md:text-8xl font-extrabold mb-6 animate-fadeIn text-[#E2C044] ">
        Quote of the Day
      </h1>
      <p className="text-2xl italic mb-4">"{quote}"</p>
      <p className="text-lg font-semibold">- {author}</p>
      <button
        onClick={fetchQuote}
        className="mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105"
      >
        Generate New Quote
      </button>
    </div>
  );
};

export default QuoteOfTheDay;
