import logo from './logo.svg';
import './App.css';


function App() {
  let x=5;
  let y=20;
  let valueData = xyz();
  let config = getConfig(valueData);
  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello Wold</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hey {x} {addTwoNo(x, y)}</p>
        <div>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input value="Submit" onClick={handler}/>
          </form>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>


  );
}

const addTwoNo = (a, b) => {
  return a+b;
}

const handler = () =>  console.log("hello");

const xyz = () => {
  let valueData = null;
  return valueData;
}

const getConfig = (valueData) => {
  let x= null;
  return x;
}

export default App;

