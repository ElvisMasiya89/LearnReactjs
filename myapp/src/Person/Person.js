import React  from 'react';
import styles from './Person.module.css';


const person = (props) =>{
    const rnd = Math.random();

    if (rnd > 0.7){
      throw new Error('Something went Wrong');
    }
    //When using class-based components, its this.props
    return(
      <div className = {styles.Person}>
        <p onClick={props.click}>l'm  {props.name} and l am {props.age} years old !</p>
        <p>{props.children}</p>  
        <input type='text' onChange={props.changed} value = {props.name}/>
    </div>  
    )

};


export default person;