import React  from 'react'

const person = (props) =>{
    //When using class-based components, its this.props
    return(
      <div>
        <p onClick={props.click}>l'm a {props.name} and l am {props.age} years old !</p>
        <p>{props.children}</p>  
        <input type='text' onChange={props.changed} value = {props.name}/>
    </div>  
    )

};


export default person;