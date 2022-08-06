import React from 'react'


const withClass2nd=(WrappedCompont, className)=>{
    return props=>(
        <div className={className}>
        <WrappedCompont {...props}/>
        </div>
    );
};


export default withClass2nd;