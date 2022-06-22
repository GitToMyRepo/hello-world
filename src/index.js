import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<p>Hello World</p>
//VERSION 1
// const p1 = React.createElement("p", null, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById('root'));

// const li1 = React.createElement("li", {id : "1st"}, "First bullet");
// const li2 = React.createElement("li",  {id : "2nd"}, "Second bullet");
// const ul = React.createElement("ul", null, [li1, li2]);

// const myDiv = React.createElement("div", null, [p1, ul]);

// root.render(myDiv, document.getElementById("root"));

//VERSION 2 - using JSX
// const p1 = <p>Hello World 2</p>;
// const ul = <ul>
//   <li>first</li>
//   <li>second</li>
// </ul>
// const twoParagraphs = <div><p>paragraph one</p><p>paragraph two</p></div>

// const numberArray = [1, 2, 3, 4, 5];
// const [first, second] = numberArray;
// console.log(first, second);   // this prints out "1 2"

// const customer = {name : "matt", age : 32, active : true};
// const {age, acitve} = customer;
// console.log(age, acitve);   // this prints out "32 undefined"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(React.createElement("div", null, [p1, ul, twoParagraphs]), document.getElementById("root"));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
