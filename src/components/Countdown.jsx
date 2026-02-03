import React, { useEffect, useState } from 'react';
import { getConferenceDates, getConferenceStatus, calculateTimeLeft } from '../utils/conferenceDates';

const Countdown = () => {
  const [status, setStatus] = useState(getConferenceStatus());
  const [timeLeft, setTimeLeft] = useState(null);
  const [conferenceYear, setConferenceYear] = useState(null);

  const updateCountdown = () => {
    const currentStatus = getConferenceStatus();
    const { start, year } = getConferenceDates();
    
    setStatus(currentStatus);
    setConferenceYear(year);
    
    if (currentStatus === 'before') {
      setTimeLeft(calculateTimeLeft(start));
    } else if (currentStatus === 'next_year') {
      setTimeLeft(calculateTimeLeft(start));
    } else {
      setTimeLeft(null);
    }
  };

  useEffect(() => {
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
    switch (status) {
      case 'during':
        return (
          <div className="mt-8 bg-white bg-opacity-70 rounded-lg p-4 w-full max-w-lg text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">ORSN Conference {conferenceYear}</h2>
            <p className="text-lg font-semibold text-green-600">Conference has started!</p>
          </div>
        );
      
      case 'ended':
        return (
          <div className="mt-8 bg-white bg-opacity-70 rounded-lg p-4 w-full max-w-lg text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">ORSN Conference {conferenceYear}</h2>
            <p className="text-lg font-semibold text-orange-600">Conference has ended</p>
            <p className="text-sm text-gray-600 mt-2">Thank you for attending!</p>
          </div>
        );
      
      case 'before':
      case 'next_year':
        return (
          <div className="mt-8 bg-white bg-opacity-70 rounded-lg p-4 w-full max-w-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              ORSN Conference {conferenceYear} Countdown
            </h2>
            {timeLeft ? (
              <div className="flex justify-center gap-6 text-lg font-bold">
                <div className="text-center">
                  <span className="block text-2xl sm:text-3xl">{timeLeft.days}</span>
                  <span>Days</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl sm:text-3xl">{timeLeft.hours}</span>
                  <span>Hours</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl sm:text-3xl">{timeLeft.minutes}</span>
                  <span>Minutes</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl sm:text-3xl">{timeLeft.seconds}</span>
                  <span>Seconds</span>
                </div>
              </div>
            ) : (
              <p className="text-lg font-semibold">Loading countdown...</p>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return renderContent();
};

export default Countdown;
