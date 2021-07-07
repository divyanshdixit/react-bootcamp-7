import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';

// render(what to show, where to show, callback)
// jsx => js extension

// {/* <> </> */} => react Fragment

// render mulitple elements
{/* <div>

</div> */}



// it wont create any extra node 

{/* <React.Fragment>

<React.Fragment/>

[

] */}

// const fname = "Divyansh";
// const lname = "Dixit";
// // use js in jsx:

// // cant use js statments inside jsx but expression can 
// // 
// const currentDate = new Date().toLocaleDateString();
// const currentTime = new Date().toLocaleTimeString();


ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
)

// jsx attributes in react
// single page application

// camel case attributes

// css styling