import React, { useState, useEffect } from 'react';

function Timer({ restartTime }) {
  const [time, setTime] = useState(4);
  const [count,setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => {
        if (prevTime === 0 ) {
          return 4;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);
    
    

    return () => clearInterval(intervalId);
  }, [restartTime]);

  return <p className='text-white'>{time+1}</p>;
}

export default Timer;
