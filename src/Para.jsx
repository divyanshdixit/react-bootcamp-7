// first letter must be capital 
// export name and function name must be same 


import React from 'react';

const paraStyle = {
    color:'green',
    textAlign:'center'
  }
  
//   make our own custom attri
// react props are like function argument in js

// accessin the props value:

// 

function Para(props){
    console.log(props);
    // console.log(props.val())
    return(
        <>
        <p style={paraStyle} > {`Today's date is ${props.currentDate}`} </p>
        <p style={paraStyle}> {`Today's Time is ${props.currentTime}`} </p>
        </>
    )
}

export default Para;