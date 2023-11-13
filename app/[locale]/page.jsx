"use client";
import Image from "next/image";
import Header from "./layouts/Header";
import HomeHero from "./components/HomeHero";
import AboutUS from "./components/AboutUS";
import Features from "./components/Features";
import MarketingDesc from "./components/MarketingDesc";
import AppScreenshots from "./components/AppScreenshots";
import Footer from "./layouts/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <AboutUS />
      <Features />
      <MarketingDesc />
      <AppScreenshots />
      <Footer />
    </>
  );
}
