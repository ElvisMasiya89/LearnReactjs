import React,{Component} from 'react'
import './App.css'; 
import Person from './Person/Person'

class App extends Component() {

  render(){
    return(
      <div className='App'>
          <h1>Hi,I'm a React App!!</h1> 
          <p>This is going really well!</p>
          <Person/>
          <Person/>
          <Person/>
      </div> ) 
  }

    //This code gets compiled down to this code
  //  return (React.createElement('div', {className :"App"}, React.createElement('h1',null,'Hi, I\'m a Vcard App!!')));
}
export default App;
 