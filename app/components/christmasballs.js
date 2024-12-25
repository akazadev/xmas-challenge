import React from 'react';
import '../christmasballs.css';

const ChristmasBalls = () => {
  const balls = Array.from({ length: 50});

  return (
    <div className="christmas-balls-container">
      {balls.map((_, index) => (
        <div key={index} className={`christmas-ball ball-${index + 1}`}></div>
      ))}
    </div>
  );
};

export default ChristmasBalls;