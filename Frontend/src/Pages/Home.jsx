import { Cog } from "lucide-react";
import React, { useState } from "react";
import Header from "../component/Header";
import earthauger from "../../public/images/earthauger.png";
import LandingProductPage from "./LandingProductPage";
import CategoryPage from "./Category";
import Hero from "./Hero";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      {/* Hero Section */}
      <Hero/>
      <LandingProductPage />
      <CategoryPage />
      <Footer/>
    </div>
  );
};

export default Home;
