import React from 'react'
import './App.css'; 

function App() {
    // return(
    //   <div className='App'>
    //       <h1>Hi,I'm a Vcard App!!</h1> 
    //   </div>
    // )
    //This code gets compiled down to this code

   return (React.createElement('div', {className :"App"}, React.createElement('h1',null,'Hi, I\'m a Vcard App!!')));
}
export default App;
 