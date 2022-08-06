import React,{Component} from 'react'
// import React,{useState} from 'react' // import hook function that start with 'use' key word
import styles from './App.module.css'; 
import Persons from '../componets/Persons/Persons';
import Cockpit from '../componets/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends Component{
   
   constructor(props){
    super(props)
    console.log('[App.js] constructor')
   }

  state = {
    persons:[
      {id:'fafdv',name:'Max', age:28},
      {id:'fafaa',name:'Manu', age:29},
      {id:'faafa',name:'Stephanie', age:26},
    ],

  otherState:'some other value',
  showPersons:false,
  showCockpit:true
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js]  getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  componentWillUnmount(){
    console.log('[App.js]  componentWillUnmount');
  }



  nameChangedHandler = (event, id)=> {
    const personIndex = this.state.persons.findIndex( p =>{
       return p.id ===id;
    });

    //const person = Object.assign({}, this.state.persons[personIndex] )
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});   
  
  };

  
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();//Slice without arguements simply returns a new array.
    //or use the spread operator
    const persons= [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
    console.log("whaats")
  };


//This method declaration "function_name = ()=>{}" ensurs the 'this' key word always refer to this class
//

  togglePersonHandler=()=>{
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow});
  };

  render(){
     console.log('[App.js] render');

     let persons = null;
     if(this.state.showPersons===true){
       persons = (  
             <Persons
                     persons = {this.state.persons}
                     clicked = {this.deletePersonHandler}
                     changed = {this.nameChangedHandler}             
                 />
        );
     }


    return(   
         
          <WithClass classes={styles.App}>
          <button onClick={()=>{
            this.setState({showCockpit: false});
            }}>
            Remove Cockpit 
          </button>
          {this.state.showCockpit ? <Cockpit
             showPersons={this.state.showPersons} 
             personsLength = {this.state.persons.length}
             clicked={this.togglePersonHandler}/> : null}
          {persons}
        </WithClass>);
  }  
}
export default App;
 




//Using Class component 
// class App extends Component{

//     state = {
//       persons:[
//         {name:'Max', age:28},
//         {name:'Manu', age:29},
//         {name:'Stephanie', age:26},
//       ],
  
//     otherState:'some other value' 
//     }
  
  
//     switchNameHadler = (newName)=>{
//       console.log('Was Clicked')
//       //DO NO DO THIS personsState.persons[0].name = 'Princess'
//         this.setState( {persons: [
//           {name:newName, age:28},
//           {name:'Manu', age:29},
//           {name:'Danzel', age:26},]
//         } )
//     }

//       nameChangedHandler = (event)=>{
//       this.setState({persons: [
//         {name:"Wakanda", age:28},
//         {name:event.target.value, age:29},
//         {name:'Danzel', age:26},]
//       })
//     };    
  
//     render(){

//        //Inline CSS
//        const  style={
//           backgroudColor:'white',
//           font :'inherit',
//           border: '1px solid blue',
//           padding:'8px',
//           cursor:'pointer'
//        };

//       return(   
//         <div className='App'>
//           <h1>Hi,I'm a React App!!</h1> 
//           <p>This is going really well!</p>
//           <button 
//               style={style} 
//               onClick={()=>this.switchNameHadler('Wakanda')}> Switch Name</button>
//           <Person name={this.state.persons[0].name}  age={this.state.persons[0].age}/>
//           <Person
//            name={this.state.persons[1].name}
//            age={this.state.persons[1].age}
//            click={this.switchNameHadler.bind(this,'Wakanda')}
//            changed = {this.nameChangedHandler}>My Hobbies: Racing
//            </Person>
//           <Person  name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
//       </div> 
//         );
//     }
  
//       //This code gets compiled down to this code
//     //  return (React.createElement('div', {className :"App"}, React.createElement('h1',null,'Hi, I\'m a Vcard App!!')));
//   }
//   export default App;
   














// //React with Hooks
// const App = (props)=>{

//   //Using array distructuring
//   const [personsState, setPersonState] =  useState({
//     //useState hook function returns an array with 2 items an state object and a function to modify state
//     persons:[
//             {name:'Max', age:28},
//             {name:'Manu', age:29},
//             {name:'Stephanie', age:26},
//           ],
//     })

//     const [otherState, setOtherState] =  useState({
//       //useState hook function returns an array with 2 items an state object and a function to modify state
//       otherState:'some other value' 
  
//       });

//   //In JavaScript you can declare functions with other functions  
//   const switchNameHadler = (newName)=>{
//           console.log('Was Clicked')
//           //setPersonState does not merge the old state with the new 
//           //state as in class based componets instead it replace the old state,
//           //To manage different states,  use multiple setStates
//             setPersonState( {persons: [
//               {name:newName, age:28},
//               {name:'Manu', age:29},
//               {name:'Danzel', age:26},]
//             } )
//         };

//   // const nameChangedHandler = (event)=>{
//   //     this.setState({persons: [
//   //       {name:"Wakanda", age:28},
//   //       {name:event.target.value, age:29},
//   //       {name:'Danzel', age:26},]
//   //     })
//   //   };    

//     return(
//       <div className='App'>
//           <h1>Hi,I'm a React App!!</h1> 
//           <p>This is going really well!</p>
//           <button onClick={()=>switchNameHadler('Wakanda')}> Switch Name</button>
//           <Person name={personsState.persons[0].name}  age={personsState.persons[0].age}/>
//           <Person
//            name={personsState.persons[1].name}
//            age={personsState.persons[1].age}
//            click={switchNameHadler.bind(this,'Waka!')}>My Hobbies: Racing
//            </Person>
//           <Person  name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
//       </div> 
//       );
//   }
// export default App;
 

