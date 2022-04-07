import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <App> 
    <h1> Hello </h1> 
  </App>,
  document.getElementById('root')
);

// React-element !== DOM-element
// <h1 className="header"> Hello </h1> === React.createElement('h1', {className: 'header' }, 'Hello')