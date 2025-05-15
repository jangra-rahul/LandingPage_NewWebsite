import React from "react";
import Hero from "../components/homepage/Hero";
import RequestSection from "../components/homepage/RequestSection";
import FeaturesSection from "../components/homepage/FeaturesSection";
import AboutSection from "../components/homepage/AboutSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <RequestSection />
      <FeaturesSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
