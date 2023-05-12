import React,{ useEffect, useState } from "react";


function Person(){
  const[count,setcount]=useState(0);
  let t={
    padding:'5px',
    backgroundColor:'red',
    borderRadius:'100vmax',
    marginLeft:'5px',
    fontSize:'15px'
  }
  const inc=()=>{
   let  newcount=count+1;
    setcount(newcount);
  }
  const dec=()=>{
    let newcount=count-1;
    setcount(newcount);
  }
return(
  <div>
    <h1>count:{count}</h1>
    <button onClick={inc} style={t}>increase</button>
    <button onClick={dec} style={t}>decrease</button>
  </div>
)
}


function App() {
  

return (
    <div className="App">
      <header className="App-header">
       <Person></Person>
 
          </header>
    </div>
  );
}

export default App;
