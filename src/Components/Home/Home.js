import React from "react";
// import Footer from "./Footer";
// import NavBar from "./NavBar"
import Navbar from "./NavBar";

import Jumbo from "./Jumbo";
import Footer from "./Footer";
import CardSection from "./CardSection";
// import LoginButton from "./LogInButton";
// import About from "./About";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbo />
      <CardSection />
      <Footer />
    </div>
  );
};

export default Home;
