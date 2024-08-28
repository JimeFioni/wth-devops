// components/Hours.js
import React from 'react';

const Hours = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayName = daysOfWeek[today.getDay()];

  const getOpeningHours = (day) => {
    if (day === 'Saturday' || day === 'Sunday') {
      return '9 a.m. to 8 p.m.';
    } else {
      return '10 a.m. to 4 p.m.';
    }
  };

  const openingHours = getOpeningHours(dayName);

  return (
    <div>
      <h2>Today is {dayName}</h2>
      <p>Shelter hours: {openingHours}</p>
    </div>
  );
};

export default Hours;