// import React,{Component} from 'react'

import React,{useState} from 'react' // import hook function that start with 'use' key word
import './App.css'; 
import Person from './Person/Person'

//React with Hooks
const App = (props)=>{

  //Using array distructuring
  const [personsState, setPersonState] =  useState({
    persons:[
            {name:'Max', age:28},
            {name:'Manu', age:29},
            {name:'Stephanie', age:26},
          ],

    otherState:'some other value' 

    })

  //In JavaScript you can declare functions with other functions  
  const switchNameHadler = ()=>{
          console.log('Was Clicked')
          //DO NO DO THIS personsState.persons[0].name = 'Princess'
            setPersonState( {persons: [
              {name:'Wakanda', age:28},
              {name:'Manu', age:29},
              {name:'Danzel', age:26},]
            } )
        }

    return(
      <div className='App'>
          <h1>Hi,I'm a React App!!</h1> 
          <p>This is going really well!</p>
          <button onClick={switchNameHadler}> Switch Name</button>
          <Person name={personsState.persons[0].name}  age={personsState.persons[0].age}/>
          <Person name = {personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
          <Person  name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
      </div> 
      );
  }
export default App;
 








































// class App extends Component{

//   state = {
//     persons:[
//       {name:'Max', age:28},
//       {name:'Manu', age:29},
//       {name:'Stephanie', age:26},
//     ],

//   otherState:'some other value' 
//   }


//   switchNameHadler = ()=>{
//     console.log('Was Clicked')
//     //DO NO DO THIS personsState.persons[0].name = 'Princess'
//       this.setState( {persons: [
//         {name:'Wakanda', age:28},
//         {name:'Manu', age:29},
//         {name:'Danzel', age:26},]
//       } )
//   }

//   render(){
//     return(
//       <div className='App'>
//           <h1>Hi,I'm a React App!!</h1> 
//           <p>This is going really well!</p>
//           <button onClick={this.switchNameHadler}> Switch Name</button>
//           <Person name={personsState.persons[0].name}  age={personsState.persons[0].age}/>
//           <Person name = {personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//           <Person  name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
//       </div> 
//       );
//   }

//     //This code gets compiled down to this code
//   //  return (React.createElement('div', {className :"App"}, React.createElement('h1',null,'Hi, I\'m a Vcard App!!')));
// }
// export default App;
 