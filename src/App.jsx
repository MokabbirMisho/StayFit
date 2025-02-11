import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Trainer from "./components/Trainer";
import Pricing from "./components/Pricing";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <AboutUs />
      <Trainer />
      <Pricing />
      <Review />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
