import React, {useEffect, useRef, useContext} from "react";
import styles from './Cockpit.module.css'; 
import AuthContext from "../../context/auth-context";

 const Cockpit = props =>{

   const toogleBtnRef = useRef(null); 
   const authContext = useContext(AuthContext);
   
   console.log(authContext.authenticated);



    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        //Fake http request
        //  setTimeout(()=>{
        //     alert('Saved data to clound!');
        //  }, 1000);

        toogleBtnRef.current.click()
         
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


    // <AuthContext.Consumer>
    //              {(context)=><button onClick={context.login}>Log in</button>   }   
    // </AuthContext.Consumer>    
    return(
        <div className={styles.Cockpit}>
            <h1>Hi,I'm a React App!!</h1> 
            <p className={ classes.join(' ')}>This is going really well!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}
                ref={toogleBtnRef}> Toogle Persons</button>
                {<button onClick={authContext.login}>Log in</button>   }    
        </div>  
    );
 };
 export default React.memo(Cockpit)