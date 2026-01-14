import React from 'react';
import backgroundImage from '../assets/images/APORS.jpg';
import CountdownTimer from '../components/CountdownTimer';
import Countdown from '../components/Countdown';

const Conference = () => {
  return (
    <>
      {/* Header Section */}
      <div
  className="relative w-full min-h-screen bg-cover bg-center flex items-start justify-center"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center text-black text-center px-4 py-8 gap-6 max-w-full pt-32 sm:pt-40">
    {/* Headings */}
    <h1 className="text-3xl sm:text-5xl font-bold">2026 CONFERENCE</h1>
    <h2 className="text-xl sm:text-3xl">
      17<sup>th</sup> ORSN International Conference, Phuket, Thailand
    </h2>

    {/* Buttons + QR in a row */}
    <div className="flex flex-wrap justify-center items-start gap-8 mt-4">
      {/* Brochure */}
      <div className="flex flex-col items-center">
        <a
          href="https://orsn.org.np/pdfs/broc.pdf"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded w-full sm:w-auto text-center"
        >
          Brochure
        </a>
        <img src="/Brochure.jpg" alt="Brochure QR" className="w-16 h-16 mt-2" />
      </div>

      {/* Submit Abstract */}
      <div className="flex flex-col items-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSem7s9CF20yLLk9rNUaDY6tKv20-ABGxkdmZCtoj7dquAM6og/viewform?usp=header"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded w-full sm:w-auto text-center"
        >
          Submit Abstract
        </a>
        <img src="/Abstract.jpg" alt="Submit Abstract QR" className="w-16 h-16 mt-2" />
        <p className="text-xs mt-1 text-center">
          Or submit via: <a href="mailto:orsn.nepal@gmail.com" className="text-blue-600 underline">orsn.nepal@gmail.com</a>
        </p>
      </div>

      {/* Register */}
      <div className="flex flex-col items-center">
        <a
          href="https://forms.gle/QZx7pqd7AsCyPZLp9"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded w-full sm:w-auto text-center"
        >
          Register
        </a>
        <img src="/Register.jpg" alt="Register QR" className="w-16 h-16 mt-2" />
      </div>
    </div>

    {/* Countdown */}
    <div className="mt-4">
      <Countdown />
    </div>
  </div>
</div>


      {/* Conference Details Section */}
      <section className="container mx-auto px-4 py-10">

<div className="mb-8">
  <h2 className="text-2xl font-bold text-green-700">Venue Partner: </h2>
  <p className="text-black font-bold mb-2 flex items-center gap-2">
    Faculty of Technology and Environment, Prince of Songkla University, Phuket Campus, Thailand
    <img src="psu.png" alt="Venue Partner" className="w-1/5 h-auto" />
  </p>
</div>



        <div className="mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Conference Theme</h2>
          <p className="text-black font-bold mb-2">
            This conference brings together researchers, practitioners, policymakers, and industry leaders to discuss the role of Operational Research (OR) in Sustainability and ESG challenges. The aim is to promote exchange of knowledge, collaboration, and innovation in OR applications for ethical governance, environmental sustainability, social responsibility, technological resilience, and digital transformation.
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
              {[                ['Last date for abstract submission', '15th Jan, 2025'],
                ['Acceptance Notification', '20th Jan, 2025'],
                ['Full paper submission', '25th Jan, 2026'],
                ['Early Bird Registration Ends', '20th Jan, 2026'],
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
              <li>ESG-aligned operations frameworks</li>
              <li>AI, metaverse, digital transformation, cybersecurity and operational resilience</li>
              <li>Ethical decision-making in operations</li>
              <li>Environmental sustainability and sustainable development</li>
              <li>Supply chain optimization and circular economy</li>
              <li>Governance, policy-making, and social impact</li>
              <li>Risk management and resilience under uncertainty</li>
              <li>Green logistics, energy efficiency, and carbon-neutral operations</li>
              <li>Humanitarian operations and disaster response management</li>
              <li>Behavioral operations and human factors in decision-making</li>
              <li>Agriculture and agricultural value chain</li>
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
              {[                ['Presenter & Participants', 'NRS 10000', 'NRS 12000'],
              ['Thai Participants', 'THB 4000', 'THB 5000'],
                ['International Delegates', 'USD 200', 'USD 250'],
                ['Poster Presentation', 'NRS 4000', 'NRS 6000'],
                ['Industry Delegates', 'THB 10000', 'THB 12000'],
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
