import React,{ useEffect, useState } from "react";


function Person(props){
  let t={
    height:'200px',
    width:'30%',
    border:'2px solid red',
    margin:'0 auto',
    textAlign:'center',
    marginBottom:'20px',
  }
  return(
    <div style={t}>
      <h1>name:{props.nam} </h1>
      <h1>salary:{props.sal} </h1>
    </div>
  )
}

function App() {
  let ara=[{name:'karinm',roll:'101'},{name:'nazim',roll:'102'},{name:'zasim',roll:'103'}];

return (
    <div className="App">
      <header className="App-header">
       <Person nam={ara[0].name} sal={ara[0].roll}></Person>
       <Person nam={ara[1].name} sal={ara[1].roll}></Person>
       <Person nam={ara[2].name} sal={ara[2].roll}></Person>
 
          </header>
    </div>
  );
}

export default App;
