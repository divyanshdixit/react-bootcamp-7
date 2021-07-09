// props, state(stateful, smart)
// lifecycle methods

import React, { Component } from 'react'

class Welcome extends Component{
//   state without constru.
    // state = {

    // }
    
    // state within constru.
   constructor(props) {
    super(props)

    this.state = {
         name:'',
         keyname:props.name
    }

}

    render(){
        return (
            <>
                <h1> This is class component example </h1>
            </>
        )
    }
}

export default Welcome;

