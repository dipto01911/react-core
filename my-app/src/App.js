
function Person(props){
  let t={
    height:'200px',
    width:'30%',
    border:'2px solid red',
    margin:'0 auto',
    marginBottom:'30px',
    textAlign:'center'
  }
  return(
    <div style={t}>
  <h1>Name:{props.name}</h1>
  <h2>salary:{props.salary}</h2>
    </div>
  )
}

function App() {
  let k={
    fontSize:'40px',
    color:'red',
    textAlign:'center',
    listStyle:'none'
  }
  let n={
    fontSize:'50px',
    color:'green',
    textAlign:'center',
    listStyle:'none'
  }
  let t=[{name:'karim',roll:'101'},{name:'rahim',roll:'102'},{name:'zalil',roll:'103'}]
  return (
    <div className="App">
      <header className="App-header">

<Person name={t[0].name} salary={t[0].roll}></Person>
<Person name={t[1].name} salary={t[1].roll}></Person>
<Person name={t[2].name} salary={t[2].roll}></Person>
<ul style={n}>
  {
    t.map(x=><li>{x.name}</li>)
  }
</ul>

<ul style={k}>
  {
    t.map(z=><li>{z.roll}</li>)
  }
</ul>
          </header>
    </div>
  );
}

export default App;
