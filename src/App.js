import logo from './logo.svg';
import './App.css';
import {Button} from "./stories/Button/Button";
import {TabTitle} from "./stories/TabTitle/TabTitle";

function App() {
  return (
    <div className="App">
      <Button label="Hello" />
      <TabTitle text="Hello There" isActive={true} />
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
