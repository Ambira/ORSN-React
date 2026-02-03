import { useEffect, useState } from "react";
import { getConferenceDates, getConferenceStatus, calculateTimeLeft } from "../utils/conferenceDates";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [status, setStatus] = useState(getConferenceStatus());
  const [conferenceYear, setConferenceYear] = useState(null);

  const updateCountdown = () => {
    const currentStatus = getConferenceStatus();
    const { start, year } = getConferenceDates();
    
    setStatus(currentStatus);
    setConferenceYear(year);
    
    if (currentStatus === 'before' || currentStatus === 'next_year') {
      const timeData = calculateTimeLeft(start);
      if (timeData) {
        setTimeLeft(timeData);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderContent = () => {
    switch (status) {
      case 'during':
        return (
          <section className="counter-section py-3 bg-gradient-to-r from-green-700 via-green-500 to-green-300 text-white text-center">
            <h2 className="text-xl font-semibold mb-4">ORSN Conference {conferenceYear}</h2>
            <p className="text-lg font-bold">Conference has started!</p>
          </section>
        );
      
      case 'ended':
        return (
          <section className="counter-section py-3 bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300 text-white text-center">
            <h2 className="text-xl font-semibold mb-4">ORSN Conference {conferenceYear}</h2>
            <p className="text-lg font-bold">Conference has ended</p>
            <p className="text-sm mt-2">Thank you for attending!</p>
          </section>
        );
      
      case 'before':
      case 'next_year':
        return (
          <section className="counter-section py-3 bg-gradient-to-r from-green-700 via-green-500 to-green-300 text-white text-center">
            <h2 className="text-xl font-semibold mb-4">ORSN Conference {conferenceYear} Countdown:</h2>
            <div className="flex justify-center gap-6 text-lg">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <span className="font-bold text-xl">{value}</span>
                  <span className="capitalize">{unit}</span>
                </div>
              ))}
            </div>
          </section>
        );
      
      default:
        return null;
    }
  };

  return renderContent();
};

export default CountdownTimer;
