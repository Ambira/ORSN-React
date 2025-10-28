// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="bg-white py-12 px-6 md:px-12" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About ORSN</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Operations Research Society of Nepal (ORSN) is a professional organization dedicated
          to the development and promotion of operational research in Nepal. It serves as a
          platform for researchers, academicians, and practitioners to exchange ideas and
          collaborate on various projects. ORSN aims to contribute to national development
          through the application of scientific methods and analytical approaches to decision-making.
        </p>
      </div>
    </section>
  );
}