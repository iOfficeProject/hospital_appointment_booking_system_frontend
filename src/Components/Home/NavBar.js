import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./NavBar.module.css";
// import "./NavBar.css";
import { Link } from "react-router-dom";

function App() {
  return (
  
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <button>
            <Link to="/login">SignIn</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default App;
