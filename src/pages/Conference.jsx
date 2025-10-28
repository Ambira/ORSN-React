import React from 'react';
import backgroundImage from '../assets/images/APORS.jpg';
import CountdownTimer from '../components/CountdownTimer';
import Countdown from '../components/Countdown';

const Conference = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="relative w-full h-full sm:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-black text-center p-4 pt-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 pt-16">CONFERENCE</h1>
          <h2 className="text-2xl sm:text-3xl mb-8">
            17<sup>th</sup> ORSN International Conference, Kathmandu, NEPAL
          </h2>

          <div className="flex flex-wrap justify-center gap-4 w-full max-w-xl mt-8 pt-2 pb-8">
            <a
              href="images/APORS.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            >
              <strong>Brochure</strong>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScE6eedcYw8ZH6H8kPCb8T0nbR5PAVODThYJCqKzrpygUM9jg/viewform?usp=sf_link1"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            >
              <strong>Submit Abstract</strong>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScecUCyY4_h2nWjgLwTDWvycpUg3r2NGNXq_MXszgpk7dKqNQ/viewform?usp=sf_link1"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            >
              <strong>Register</strong>
            </a>
          </div>

          <Countdown/>
        </div>
      </div>

      {/* Conference Details Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-700">Conference Organizer:</h2>
          {/* <p className="text-black font-bold">[Insert organizer name/link here]</p> */}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Conference Theme</h2>
          <p className="text-black font-bold mb-2">
            This conference will focus on the latest advancements in operational research, bringing together researchers and practitioners to share insights and collaborate on innovative solutions.
          </p>
          <p className="text-black font-bold">
            The theme for this year's conference is <span>ENVIRONMENTAL, SOCIAL AND GOVERNANCE</span>, highlighting the significance of these aspects in operational research.
          </p>
        </div>

        {/* Conference Dates Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Conference Date</h2>
          <table className="table-auto border-collapse border border-gray-300 w-full text-black font-bold">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-black">Event</th>
                <th className="border border-gray-300 px-4 py-2 text-black">Date</th>
              </tr>
            </thead>
            <tbody>
              {[                ['Last date for abstract submission', '31st Oct, 2025'],
                ['Acceptance Notification', '20th Nov, 2025'],
                ['Full paper submission', '20th Dec, 2025'],
                ['Early Bird Registration Ends', '25th Dec, 2025'],
                ['Conference Day', '1–2 Feb, 2026'],
              ].map(([event, date]) => (
                <tr key={event}>
                  <td className="border border-gray-300 px-4 py-2">{event}</td>
                  <td className="border border-gray-300 px-4 py-2">{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sub Themes and What to Present */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow hover:bg-green-500 hover:text-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold text-black mb-4">Sub Themes</h2>
            <ul className="list-disc list-inside text-black font-bold">
               <li>Social responsibility in Operations</li>
                    <li>Governance and Policy in Operations</li>
                    <li>Ethical decision-Making in Operations</li>
                    <li>Technological Innovations in Operational Research</li>
                    <li>Digital transformation and operation resilience</li>
                    <li>Environmental Sustainability and Operations Research</li>
                    <li>Integration of AI and machine learning in operations</li>
                    <li>Operational Excellence and Performance Management</li>
                    <li>Cybersecurity and data privacy in operational decision-making</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow hover:bg-green-500 hover:text-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold text-black mb-4">What to Present</h2>
            <p className="mb-2 text-black font-bold">
              We invite original research papers, case studies, and presentations on topics related to operational research and its applications. Please ensure your submissions adhere to the guidelines provided on our website.
            </p>
            <ul className="list-disc list-inside text-black font-bold">
              <li>Research study</li>
              <li>Literature review</li>
              <li>Case study / Best practice</li>
              <li>Evidence-based analysis</li>
              <li>Poster Presentation</li>
            </ul>
          </div>
        </div>

        {/* Who Should Attend and Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="bg-white p-8 rounded-lg shadow hover:bg-green-500 hover:text-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold text-black mb-4">Who Should Attend</h2>
            <ul className="list-disc list-inside text-black font-bold">
              <li>CEOs, COOs, and Directors</li>
              <li>Representatives from governmental organizations</li>
              <li>Policy makers and leaders</li>
              <li>Departmental heads and heads of operational units</li>
              <li>Quality professionals, researchers, and students</li>
              <li>Academicians and practitioners from all businesses & industries</li>
              <li>Non-profit organizations</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow hover:bg-green-500 hover:text-gray-700 transition duration-300">
            <h2 className="text-2xl font-bold text-black mb-4">Conference Objectives</h2>
            <ul className="list-disc list-inside text-black font-bold">
              <li>To promote knowledge exchange among researchers and practitioners.</li>
              <li>To provide a platform for networking and collaboration.</li>
              <li>To discuss the latest trends and challenges in operational research.</li>
              <li>To share knowledge on best practices.</li>
              <li>To identify future trends.</li>
            </ul>
          </div>
        </div>

        {/* Conference Fees Table */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold !text-green-700 mb-4">Conference Fees</h2>
          <table className="table-auto border-collapse border border-gray-300 w-full text-black font-bold">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-black">Category</th>
                <th className="border border-gray-300 px-4 py-2 text-black">Early Bird Pricing</th>
                <th className="border border-gray-300 px-4 py-2 text-black">Normal Pricing</th>
              </tr>
            </thead>
            <tbody>
              {[                ['Presenter & Participants', 'NRS 8000', 'NRS 10000'],
                ['International Delegates', 'USD 250', 'USD 300'],
                ['Poster Presentation', 'NRS 2500', 'NRS 3000'],
              ].map(([cat, early, normal]) => (
                <tr key={cat}>
                  <td className="border border-gray-300 px-4 py-2">{cat}</td>
                  <td className="border border-gray-300 px-4 py-2">{early}</td>
                  <td className="border border-gray-300 px-4 py-2">{normal}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-black font-bold mt-2">
            *Special rates are available for group booking above 10 participants.
          </p>
        </div>
      </section>
    </>
  );
};

export default Conference;
