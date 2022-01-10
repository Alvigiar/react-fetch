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
})