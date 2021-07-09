import React, {Component} from 'react';

// ES6 
// DOM, BOM, OOPS, PROMISE, async/await, CALLBACK, then , catch , this 

class Student extends Component{
    // without constru.

    // state here as a class property
    state = {
        name:'Divyansh',
        prop1:this.props.prop1,
        prop2:this.props.prop2
    }

    render(){
        const {name, prop1, prop2} = this.state;

        return(
            <>
                <h1>{`Hello ${name} first prop is ${prop1} second prop is ${prop2}`}</h1>
            </>
        )
    }
    
}

export default Student;