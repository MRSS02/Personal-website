import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Route, Link,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Games from "./pages/Games"
import Sites from "./pages/Sites"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/sites" component={Sites} />
      </Router>
    </div>
  );
}

export default App;
