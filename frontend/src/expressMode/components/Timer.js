import React, { useState, useEffect } from 'react';

function Timer({ restartTime }) {
  const [time, setTime] = useState(4);
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (count === 5) {
      setTime(0);
      clearInterval(intervalId);
    }
  }, [count]);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(prevTime => {
        if (prevTime === 0) {
          setCount(prevCount => prevCount + 1);
          return 4;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, []);

  return <p className='text-white'>{time+1}</p>;
}

export default Timer;
