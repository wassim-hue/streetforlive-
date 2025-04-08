import React from "react";
// Main Widget Component
import './App.css'; // Import the CSS file

export default function Widget() {
    return (
      <div className="bg-background text-primary-foreground">
        <Header />
        <Hero />
        <Services />
        <Footer />
      </div>
    );
  }
  