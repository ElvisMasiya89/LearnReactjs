import React  from 'react'

const person = (props) =>{
    //When using class-based components, its this.props
    return(
      <div>
        <p>l'm a {props.name} and l am {props.age} years old !</p>
        <p>{props.children}</p>  
    </div>  
    )

};


export default person;