import React, {useEffect} from "react";
import styles from './Cockpit.module.css'; 

 const Cockpit = props =>{

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        //Fake http request
         setTimeout(()=>{
            alert('Saved data to clound!');
         }, 1000);
         
         return ()=>{
          console.log('[Cockpit.js] cleanup work in   useEffect')
         };

        }, []);

     useEffect(()=>{
      console.log('[Cockpit.js] 2nd  useEffect');
       return ()=>{
        console.log('[Cockpit.js] cleanup work in 2nd useEffect')
       };

      });


    let btnClass = '';
    if (props.showPersons){
        btnClass = styles.Red;
    }
    
    let classes = []
    

    if(props.personsLength <=2){
      classes.push(styles.red);
    }

    if(props.personsLength <=1){
      classes.push(styles.bold);
    }

    return(
        <div className={styles.Cockpit}>
            <h1>Hi,I'm a React App!!</h1> 
            <p className={ classes.join(' ')}>This is going really well!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}> Toogle Persons</button>
        </div>  
    );
 };
 export default React.memo(Cockpit)