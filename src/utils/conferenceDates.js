const getConferenceDates = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  
  // Conference runs February 1-2
  const conferenceStart = new Date(currentYear, 1, 1, 8, 0, 0); // Feb 1, 8:00 AM
  const conferenceEnd = new Date(currentYear, 1, 2, 23, 59, 59); // Feb 2, 11:59 PM
  const conferenceEndedPeriod = new Date(currentYear, 1, 29, 23, 59, 59); // Feb 29, 11:59 PM (entire February)
  
  // If current date is after the conference ended period, calculate for next year
  if (now > conferenceEndedPeriod) {
    const nextYear = currentYear + 1;
    return {
      start: new Date(nextYear, 1, 1, 8, 0, 0),
      end: new Date(nextYear, 1, 2, 23, 59, 59),
      endedPeriod: new Date(nextYear, 1, 29, 23, 59, 59),
      year: nextYear
    };
  }
  
  return {
    start: conferenceStart,
    end: conferenceEnd,
    endedPeriod: conferenceEndedPeriod,
    year: currentYear
  };
};

const getConferenceStatus = () => {
  const now = new Date();
  const { start, end, endedPeriod, year } = getConferenceDates();
  
  if (now < start) {
    return 'before';
  } else if (now >= start && now <= end) {
    return 'during';
  } else if (now > end && now <= endedPeriod) {
    return 'ended';
  } else {
    return 'next_year';
  }
};

const calculateTimeLeft = (targetDate) => {
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

export { getConferenceDates, getConferenceStatus, calculateTimeLeft };
