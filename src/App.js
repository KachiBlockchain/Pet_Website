import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Appointment from "./components/Appointment";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-orange-quaternary relative">
      <Header />
      <Hero />
      <Appointment />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
