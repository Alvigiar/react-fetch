import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

function Click() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((post) => {
      const root = document.querySelector('#root')

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