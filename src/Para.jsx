// first letter must be capital 
// export name and function name must be same 


import React, {useState} from 'react';

const paraStyle = {
    color:'green',
    textAlign:'center'
  }
  
function Para(props){
    return(
        <>
        <p style={paraStyle}> {`Today's date is ${props.currentDate}`} </p>
        <p style={paraStyle}> {`Today's Time is ${props.currentTime}`} </p>
        </>
    )
}

export default Para;