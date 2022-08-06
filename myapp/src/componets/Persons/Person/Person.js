import React, {Component}  from 'react';
import PropTypes from 'prop-types'
import styles from './Person.module.css';



class  Person  extends Component{
  render(){
  console.log('[Persons.js] rendering...') 
    //When using class-based components, its this.props
    return(
      <div className = {styles.Person}>
        <p onClick={this.props.click}>l'm  {this.props.name} and l am {this.props.age} years old !</p>
        <p>{this.props.children}</p>  
        <input type='text' onChange={this.props.changed} value = {this.props.name}/>
    </div>  
    )
  }

};

Person.propTypes = {
  click: PropTypes.func,
  name:PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Person;