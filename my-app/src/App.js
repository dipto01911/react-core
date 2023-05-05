import React,{ useEffect, useState } from "react";

function Person(props){
  let t={
    height:'220px',
    width:'20%',
    backgroundColor:'red',
    border:'2px solid red',
    margin:'0 auto',
    color:'green',
    textAlign:'center',
    marginBottom:'20px',
  }
  

  return(
    
   
   <div style={t}>
    <h1>{props.head}</h1>
   <p>this the product </p>
   <h2>prize:{props.prize}</h2>
   <button onClick>click me</button>
    </div>
  )
}
function Counter(){
  const[count,setcount]=useState(1);
const increase=()=>{
  let newcount =count+1;
  setcount(newcount);
}
return(
  <div>
    <h1>count:{count}</h1>
    <button onClick={increase}>click me</button>
  </div>
) 
}
// function User(){
//   const[user,setuser]=useEffect([]);
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res =>res.json())
//   .then(data => console.log(data));
// return(
//   <div>
//     <p>hello </p>
//   </div>
// )
// }
//  function User(){
//   const[user, setuser]=useEffect([]);
//   useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res =>res.json())
//   .then(data => setuser(data));
//   })
//   return(
//     <div>
//       <h3>number of user:{user.length}</h3>
//       <ul>
//         {
//           user.map(x => <li>{x.name}</li>)
//         }
//       </ul> 
//     </div>
//   )
//  }

function App() {
let t=[{nam:'apple',price:'101'},{nam:'ball',price:'102'},{nam:'cat',price:'103'}]
  return (
    <div className="App">
      <header className="App-header">
       
       <Counter></Counter>
        <Person head={t[0].nam} prize={t[0].price}></Person>
        <Person head={t[1].nam} prize={t[1].price}></Person>
        <Person head={t[2].nam} prize={t[2].price}></Person>
          </header>
    </div>
  );
}

export default App;
