<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';


function Click() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((post) => {
      const root = document.querySelector('#root')
      console.log(post);
      ReactDOM.render(
        <div>
          <div>Id: {post.id}</div>
          <div>Title: {post.title}</div>
          <div>Body: {post.body}</div>
        </div>,
        root
      )
    });
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  Click()
=======
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
>>>>>>> 06fc6daa3ea781188b54efd783ae9cc85530017c
})