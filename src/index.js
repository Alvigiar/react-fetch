import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

function Click() {
  console.log('click');
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  Click()
})