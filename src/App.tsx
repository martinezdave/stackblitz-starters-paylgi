import React, { useState } from 'react';
import './App.css';

const BibleQuiz = () => {
  const [responses, setResponses] = useState([]);

  const questions = [
    {
      question: 'The Bible consists of the Old and New Testaments.',
      correct: true,
    },
    {
      question: 'Moses led the Israelites out of Egypt.',
      correct: true,
    },
    {
      question: 'The Sermon on the Mount is found in the Book of Luke.',
      correct: false,
    },
  ];

  const handleResponse = (index, response) => {
    const newResponses = [...responses];
    newResponses[index] = response;
    setResponses(newResponses);
  };

  return (
    <div className="App">
      <h1>The Bible Quiz</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.question}</p>
          <button
            onClick={() => handleResponse(index, true)}
            className={responses[index] === true ? 'correct' : ''}
          >
            True
          </button>
          <button
            onClick={() => handleResponse(index, false)}
            className={responses[index] === false ? 'incorrect' : ''}
          >
            False
          </button>
        </div>
      ))}
    </div>
  );
};

export default BibleQuiz;
