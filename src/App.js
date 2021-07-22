import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Route, Link,
} from "react-router-dom";
import Home from "./pages/Home"
import Games from "./pages/Games"
import WebDev from "./pages/WebDev"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/webdev" component={WebDev} />
      </Router>
    </div>
  );
}

export default App;
