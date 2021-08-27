import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Navigation/About";
import Home from "./Navigation/Home";
import Work from "./Navigation/Work";

function App() {
  return (
    <Router>
      <>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/portofolio" exact component={Work}></Route>
      </>
    </Router>
  );
}

export default App;
