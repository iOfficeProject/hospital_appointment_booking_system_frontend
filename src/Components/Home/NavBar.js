import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./NavBar.module.css";
// import "./NavBar.css";

function App() {
  return (
  
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">ContactUs</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <button>
            <a href="/login">SignIn</a>
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default App;
