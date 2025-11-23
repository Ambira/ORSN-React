import { useRef, useEffect } from "react";

// Real conference timeline data (empty years removed)
const conferences = [
  { year: 2007, conference: "1st ORSN National Conference", theme: "", location: "" },
  { year: 2011, conference: "1st ORSN National Conference", theme: "Operations Research for Sustainable Development", location: "Police Club" },
  { year: 2012, conference: "2nd ORSN International Conference", theme: "Operations Research for Sustainable Development", location: "Nepal Academy of Tourism and Hotel Management (NATHM), Kathmandu" },
  { year: 2013, conference: "3rd ORSN National Conference", theme: "Operations Research for Sustainable Development", location: "Agricultural Development Bank Central Training Institute, Bode, Bhaktapur" },
  { year: 2014, conference: "4th ORSN International Conference", theme: "Operations Research: Applications in Developing Countries", location: "Chitwan Chamber of Commerce, Chitwan" },
  { year: 2015, conference: "5th ORSN National Conference", theme: "Operations Research: Applications in Developing Countries", location: "The British College, Thapathali, Kathmandu" },
  { year: 2016, conference: "6th ORSN International Conference", theme: "Operations Research for Sustainable Development", location: "CG Institute of Management, Kathmandu" },
  { year: 2017, conference: "7th ORSN National Conference", theme: "Operations Research and Development", location: "Patan Campus, LBEF" },
  { year: 2018, conference: "8th ORSN International Conference", theme: "Operations Research: Sustainable Development", location: "Patan College for Professional Studies, Kopundole, Lalitpur" },
  { year: 2018, conference: "9th ORSN Conference & 11th Triennial APORS International Conference", theme: "", location: "Hotel Radisson, Lazimpat, Kathmandu" },
  { year: 2019, conference: "10th ORSN National Conference", theme: "OR and Development", location: "Hetauda School of Management" },
  { year: 2020, conference: "11th ORSN International Conference", theme: "Operations Research: Sustainable Development", location: "Janapriya Multiple Campus, Pokhara" },
  { year: 2021, conference: "Special ORSN International Conference, May 28–31", theme: "Sustainable Energy for Mitigation and Adaptation of Climate Change and Global Warming", location: "Online jointly organized with PSU" },
  { year: 2021, conference: "12th ORSN National Conference", theme: "Operations Research and Development", location: "Online" },
  { year: 2022, conference: "13th ORSN International Conference", theme: "Operations Research: Sustainable Development", location: "Online" },
  { year: 2023, conference: "14th ORSN International Conference", theme: "Operations Research: Sustainable Development", location: "Hetauda School of Management" },
  { year: 2024, conference: "15th ORSN International Conference", theme: "Operations Research: Energy, Digitization, & Sustainability", location: "Agricultural Development Bank Central Training Institute, Bode, Bhaktapur" },
  { year: 2025, conference: "16th ORSN International Conference", theme: "Operations Research: Environmental Social and Governance", location: "Pokhara" },
  { year: 2026, conference: "17th ORSN International Conference", theme: "ESG", location: "Thailand" },
];

const Timeline = () => {
  const timelineRef = useRef();

  const scroll = (direction) => {
    if (timelineRef.current) {
      timelineRef.current.scrollLeft += direction * 160;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timelineRef.current) {
        timelineRef.current.scrollLeft += 160;
        const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          timelineRef.current.scrollLeft = 0;
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative px-4 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">
        ORSN Conference Timeline
      </h2>

      {/* Navigation Buttons */}
      <button
        onClick={() => scroll(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 text-xl w-8 h-8 rounded-full shadow"
      >
        ‹
      </button>
      <button
        onClick={() => scroll(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 text-xl w-8 h-8 rounded-full shadow"
      >
        ›
      </button>

      {/* Scrollable Timeline */}
      <div className="overflow-hidden relative mt-8">
        <div className="absolute w-full h-[2px] top-1/2 bg-gray-300 z-[-1]" />
        <div
          ref={timelineRef}
          className="flex gap-3 overflow-x-auto scroll-smooth px-2 py-4 scroll-snap-x mandatory bg-white"
        >
          {conferences.map((conf, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-green-600 text-white rounded-md p-4 min-w-[220px] text-center scroll-snap-align-start shadow"
            >
              <div className="text-sm font-bold">{conf.year}</div>
              <div className="text-xs mt-1">{conf.conference}</div>
              {conf.theme && <div className="text-xs italic mt-1">{conf.theme}</div>}
              {conf.location && <div className="text-xs mt-1">{conf.location}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
