import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Contactme></Contactme>
      <Footer></Footer>
    </>
  );
}

export default App;
