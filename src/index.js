import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';

// render(what to show, where to show, callback)
// jsx => js extension

// {/* <> </> */} => react Fragment
ReactDOM.render(
    <>
    <h1 className="hello"> Hello world! </h1>
    <p> Hello para </p>
    </>,
  document.getElementById('root')
);

