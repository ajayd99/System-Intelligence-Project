import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact, services, home, about, contact } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <header />
        <Switch>
          <Route path="/" exact component={() => <home />} />
          <Route path="/services" exact component={() => <services />} />
          <Route path="/about" exact component={() => <about />} />
          <Route path="/contact" exact component={() => <contact />} />
        </Switch>
        <footer />
      </Router>
    </div>
  );
}

export default App;



/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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

export default App;*/
