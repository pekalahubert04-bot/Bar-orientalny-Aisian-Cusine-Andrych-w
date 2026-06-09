import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DeliverySection from "./components/DeliverySection";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-950 font-sans antialiased text-stone-200">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Hero Slideshow Section */}
      <Hero />

      {/* Interactive Menu Section */}
      <MenuSection />

      {/* Delivery and Pickup Info Area */}
      <DeliverySection />

      {/* O Nas / About Story section */}
      <AboutSection />

      {/* Maps and Contact Area */}
      <ContactSection />

      {/* Guest Reviews Section */}
      <ReviewsSection />

      {/* Footer Area */}
      <Footer />

      {/* Bottom Floating Bar on Smartphone Screens */}
      <FloatingCallButton />
    </div>
  );
}

