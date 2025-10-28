// src/pages/Home.jsx
import Carousel from '../components/Carousel';
import CountdownTimer from '../components/CountdownTimer';
import ExecutiveBoard from '../components/ExecutiveBoard';
import Timeline from '../components/Timeline';

// You can paste static sections like About, Conference Info, Executive Board, Talk Program directly here.
const Home = () => {
  return (
    <main className="mt-20">
      <Carousel />
      <CountdownTimer />
      {/* Static sections like About ORSN, Conference Info, Executive Board go here as plain JSX */}
{/* About Section */}
<section className="w-full bg-white py-12 px-4">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start">
    <div className="w-full">
      <h2 className="text-3xl font-bold text-primary mb-4">About ORSN</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">
        The Operational Research Society of Nepal (ORSN), established on
        February 1, 2007, is a professional platform for those involved in
        Operations Research. As the 53rd national member society of the
        International Federation of Operational Research Societies (IFORS) and
        a member of the Asia Pacific Operational Research Societies (APORS),
        ORSN facilitates knowledge sharing through talks, seminars, workshops,
        and networking with OR experts globally. ORSN publishes the
        “International Journal of Operational Research/Nepal (IJORN)” and
        plans to establish the “Nepalese Institute of Operational Research
        (NIOR)” in the future. Supported by membership fees, workshops, and
        contributions, ORSN is dedicated to advancing management science in
        Nepal by applying scientific tools and techniques to optimize
        decision-making and resource management across various sectors. ORSN
        is a not-for-profit organization solely run from membership fees and
        voluntary contributions.
      </p>
    </div>
  </div>
</section>

{/* Conference Information */}
<section>
  <div className="mt-8 overflow-hidden relative bg-white">
    <h3 className="text-3xl font-extrabold text-center mb-4 text-black">ORSN Conference</h3>
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="text-gray-700 leading-relaxed mb-4">
        The annual ORSN Conference is the flagship event of our society,
        bringing together researchers, practitioners, and students from across
        Nepal and beyond. It serves as a platform for sharing cutting-edge
        research, fostering collaborations, and discussing the latest trends
        and challenges in operations research.
      </p>
      <h4 className="text-xl font-semibold text-black mb-2">Conference Areas</h4>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Business and Management</li>
        <li>Economics and Development Studies</li>
        <li>Accounting and Finance</li>
        <li>Marketing and Entrepreneurship</li>
        <li>Information Technology and its Applications</li>
        <li>Social Sciences and Humanities</li>
      </ul>
      <a
        href="http://orsn.org.np/conference"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-800 text-white py-2 px-4 rounded hover:bg-green-900 transition duration-300"
      >
        Learn More About Forthcoming ORSN Conference
      </a>
    </div>
  </div>
</section>
<ExecutiveBoard/>

  {/* Talk Program */}
<section
  id="talk-program"
  className="bg-white py-12 px-4"
>
  <div className="max-w-screen-md mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8 text-black">
      <a href="talk_program.html" className="text-blue-600 hover:underline">
        Talk Program
      </a>
    </h2>

    <div className="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto">
      <div
        className="relative rounded-lg overflow-hidden"
        style={{ paddingTop: '56.25%' }} // 16:9 aspect ratio
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/vtnTmprX_0Y?si=pSYEiwsLQRd9T4e0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>



  
    </main>
  );
};

export default Home;
