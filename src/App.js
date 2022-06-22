import logo from './logo.svg';
import './App.css';
import ExampleComponent, {SecondExampleComponent} from './components/ExampleComponent';
import AnotherComponent from './components/AnotherComponent';
import Greeting from './components/Greeting';


function App() {
  return (
    <div className="App">
      <ExampleComponent/>
      <AnotherComponent/>
      <SecondExampleComponent/>
      <Greeting name="Ken" age="25"/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
