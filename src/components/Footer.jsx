// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary py-4 text-white text-center text-sm">
      <p className="leading-snug">
        &copy; {year} ORSN. All rights reserved.{" "}
        Design:{" "}
        <a
          href="https://ambirapradhan.com.np"
          className="text-white underline hover:text-gray-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ambira Pradhan
        </a>
      </p>
    </footer>
  );
};

export default Footer;
