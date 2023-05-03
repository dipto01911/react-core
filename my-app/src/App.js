
function Person(props)
{
  let t={
  height:'200px',
  width:'30%',
    margin:'0 auto',
   border:'2px solid black',
   backgroundColor:'green',
   color:'red',
   textAlign:'center',
   marginBottom:'10px',
   
   
  }
  return(
    <div style={t}>
      <h1>name:{props.name}</h1>
      <h2>salary:{props.salary}</h2>
    </div>
  )
}

function App() {
  let x=[{nam:'karim',salary:'1000'},{nam:'zalil',salary:'2000'},{nam:'shamim',salary:'3000'}]
 return (
    <div className="App">
      <header className="App-header">
      <Person name={x[0].nam} salary={x[0].salary}></Person>
      <Person name={x[1].nam} salary={x[1].salary}></Person>
      <Person name={x[2].nam} salary={x[2].salary}></Person>

          </header>
    </div>
  );
}

export default App;
