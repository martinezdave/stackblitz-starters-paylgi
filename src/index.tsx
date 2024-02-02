import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import BibleQuiz from './App';
import reportWebVitals from './App';

ReactDOM.render(
  <React.StrictMode>
    <BibleQuiz />
  </React.StrictMode>,
  document.getElementById('root')
);

// Remove this line: App();

// Add this line if you want to measure performance (optional):
reportWebVitals();
