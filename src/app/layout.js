"use client";

import React, { useState } from "react";

import "./globals.css";

import DefaultContent from "./default-content/default-content";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Sloka from "./sloka";

const inter = { variable: "font-inter" };
const robotoMono = { variable: "font-roboto-mono" };

export default function RootLayout({}) {
  const [selectedSloka, setSelectedSloka] = useState(null);

  const handleHomeClick = () => {
    console.log("Home clicked");
    setSelectedSloka(null);
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="container">
         <Header className={inter.variable} onHomeClick={handleHomeClick} />
          <div className="main-content">
            <Sidebar
              className={robotoMono.variable}
              onSelectSloka={setSelectedSloka}
            />
            <main className={`content ${inter.variable}`}>
              {selectedSloka ? (
                <Sloka fileName={selectedSloka} />
              ) : (
                <DefaultContent />
              )}
            </main>
          </div>
          <footer className={`footer ${inter.variable}`}>Footer</footer>
        </div>
      </body>
    </html>
  );
}
