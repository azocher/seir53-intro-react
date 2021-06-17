import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import reportWebVitals from './reportWebVitals';

let post1 = {
  postTitle: "Learn More About Dinos",
  author: "Nick Schmitt",
  content: "This is my amazing article about dinosaurs and their many amazing properties.",
  comments: [
    'This article is awesome!',
    'Wow - what an incredible article.'
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <Post postTitle={post1.postTitle} author={post1.author} content={post1.content} comments={post1.comments} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
