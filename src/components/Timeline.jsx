import { useRef, useEffect } from 'react';

const getOrdinal = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
};

const startYear = 2007;
const currentYear = new Date().getFullYear();
const totalYears = currentYear - startYear + 1;

const conferences = Array.from({ length: totalYears }, (_, i) => ({
  year: startYear + i,
  title: `${i + 1}${getOrdinal(i + 1)} International Conference`,
}));


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
        // Scroll right continuously
        timelineRef.current.scrollLeft += 160;

        // If at the end, rewind to start
        const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          timelineRef.current.scrollLeft = 0;
        }
      }
    }, 3000); // 3 seconds

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
        <div className="absolute w-full h-[2px] top-1/2 bg-white-300 z-[-1]" />

        <div
          ref={timelineRef}
    className="flex gap-3 overflow-x-auto scroll-smooth px-2 py-4 scroll-snap-x mandatory bg-white"
        >
          {conferences.map((conf, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-green-600 text-white rounded-md p-2 min-w-[140px] text-center scroll-snap-align-start shadow"
            >
              <div className="text-sm font-semibold">{conf.title}</div>
              <div className="text-xs">{`Feb 1–2, ${conf.year}`}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
