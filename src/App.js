import "./App.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Result from './components/results/results'
function App() {
  return (
    <Router>
      <Navbar style={{ height: "80px" }}>
        <Navbar.Brand href="#" style={{ marginLeft: "80px", fontSize: "30px" }}>
          <img
            src="https://www.spreadshirt.com/image-server/v1/mp/designs/1002960020,width=178,height=178/the-good-wife-chumhum.png"
            style={{ width: "40px", height: "40px" }}
            alt="hello"
          />
        </Navbar.Brand>
        <Nav style={{ marginLeft: "70%" }}>
        <Nav.Link href="/">Search</Nav.Link>
          <Nav.Link  style={{ marginLeft: "30px" }}  href="History">History</Nav.Link>
          <Nav.Link style={{ marginLeft: "30px" }} href="about">
            About
          </Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="about" element={<About/>} />
      <Route exact path="history" element={<Result/>} />
      </Routes>
    </Router>
  );
}

export default App;
