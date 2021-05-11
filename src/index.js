import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  { id: "todo-0", name: "Eat", completed: false },
  { id: "todo-1", name: "Clean", completed: false },
  { id: "todo-2", name: "Chess", completed: false },
  { id: "todo-2", name: "Check Bees", completed: false }
];


ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
