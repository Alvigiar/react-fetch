import React from 'react';
import ReactDOM from 'react-dom';


const btn = document.querySelector('.btn')
const root = document.querySelector('#root')

function Click(massive) {
  
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((post) => {
      const root = document.querySelector('#root')
      
      massive = post
        console.log(massive)
      ReactDOM.render(
        <div class='box'>
          <div>Id: {post.id}</div>
          <div>Title: {post.title}</div>
          <div>Body: {post.body}</div>
        </div>,
        root
      )
    });
}

btn.addEventListener('click', () => {
  let massive = null
  Click(massive)
})