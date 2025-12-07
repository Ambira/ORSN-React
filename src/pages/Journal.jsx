import React from 'react';

const Journal = () => {
  return (
    <div className="px-6 sm:px-12 py-16 bg-white text-gray-900">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-4xl font-bold text-green-700 pt-4">International Journal of Operational Research and Networking (IJORN)</h1>
        <p className="text-lg sm:text-xl mt-2 text-gray-700">Explore the latest research and advancements in operational research.</p>
      </div>

      {/* Editorial and Year Buttons */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Editorial Info */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Editorial Team</h2>
          <p className="font-semibold mb-2">Editor-in-Chief: Prof Dr. Sunity Shrestha, T.U. Nepal</p>
          <p className="font-semibold">Editors:</p>
          <ul className="list-disc list-inside text-gray-800 font-medium mt-2 space-y-1">
            <li>Prof Dr. Sunity Shrestha, T.U. Nepal</li>
            <li>Prof Dr. Shankar Pd. Khanal, T.U.</li>
            <li>Prof. Dr. Tanka Nalk Dhamala, T.U.</li>
            <li>Prof Dr. Hans Kellerer, University of Graz, Austria</li>
            <li>Prof Dr. Yuri N. Sotskev, United Institute of Informatics Problems</li>
            <li>Prof. Dr. Matthias Ehrgott, Lancaster University, UK</li>
            <li>Dr. Govind Tamang, SOM, Tribhuvan University, Nepal</li>
            {/* <li>Dr. Bijay Lal Pradhan, Tribhuvan University, Nepal</li> */}
          </ul>
        </div>

        {/* Year Buttons */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-green-700 mb-4 text-right"></h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 justify-items-end">
            {[
              2024, 2023, 2022, 2021,
              2020, 2019, 2018, 2017,
              2016, 2015, 2014, 2013, 2012,
            ].map((year) => (
              <a
                key={year}
                href={`https://www.nepjol.info/index.php/ijorn/issue/archive/${year}`}
                className="bg-green-600 hover:bg-green-700 text-white w-16 h-16 flex items-center justify-center rounded-full shadow font-semibold"
              >
                {year}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* About the Journal */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-green-700 mb-4">About the Journal</h2>
        <p className="text-gray-800 leading-relaxed text-justify">
          The International Journal of Operational Research Nepal (IJORN) is the official journal published by Operational Research Society of Nepal (ORSN).
          This journal addresses the theoretical framework, models, computational studies, and conceptual development of operations research.
          It aims to promote models, methods, and applicability of operational research and share constructive recommendations for optimizing resources.
          IJORN welcomes original articles, expository reports, and short notes related to:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-800 font-medium">
          <li>Optimization (continuous/discrete)</li>
          <li>Scheduling theory and algorithms</li>
          <li>Project management</li>
          <li>Multi-criterion decision analysis</li>
          <li>Logistics, transportation, and manufacturing</li>
          <li>Game theory and queuing theory</li>
          <li>Neural networks and simulation</li>
          <li>Applied statistics and mathematical modeling</li>
        </ul>
      </div>

    </div>
  );
};

export default Journal;
