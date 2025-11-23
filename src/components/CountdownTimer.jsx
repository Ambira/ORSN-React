// src/components/CountdownTimer.jsx
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = new Date("February 1, 2026 08:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) return;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="counter-section py-3 bg-gradient-to-r from-green-550 via-green-350 to-green-900 text-white text-center">
      <h2 className="text-xl font-semibold mb-4">ORSN Conference Countdown:</h2>
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
};

export default CountdownTimer;
