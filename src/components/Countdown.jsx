import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-02-01T08:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      if (!newTimeLeft) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="mt-8 bg-white bg-opacity-70 rounded-lg p-4 w-full max-w-lg text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">ORSN Conference Countdown</h2>
        <p className="text-lg font-semibold">Event has started!</p>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-opacity-70 rounded-lg p-4 w-full max-w-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">ORSN Conference Countdown</h2>
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
    </div>
  );
};

export default Countdown;
