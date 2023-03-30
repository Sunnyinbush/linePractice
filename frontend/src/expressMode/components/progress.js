import React, { useState, useEffect } from 'react';
import Timer from './Timer';


function Progress({setProgress}) {
  const [progress, _setProgress] = useState(100);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (progress <= 0 && count < 5) {
      setCount(counting => counting + 1);
      _setProgress(100);
    }
  }, [progress, count]);

  useEffect(() => {
    const timer = setInterval(() => {
      _setProgress(prev => (prev === 0 ? 100 : prev - 1));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count >= 5) {
      _setProgress(0);
    }
  }, [count]);

  const progressValue = count >= 5 ? 0 : progress;

  // Pass down setProgress as a prop to the body file
  return (
    <div className='rounded-r-lg rounded-l-lg'>
      <div className='h-11 md:w-[168px] md:w-[200px] m-2 md:m-5 h-11 md:h-17 rounded-r-lg rounded-l-lg bg-grey lg:w-240 container'>
        <div style={{ width: `${progressValue}%` }}>
          <div className='h-11 md:h-17 rounded-r-lg rounded-l-lg bg-orange'>
            <div className='circle w-[30px] h-[30px] md:w-[40px] md:h-[40px]'>
              <div className='absolute p-0.5 left-1.5 md:p-1 md:p-2'>
                <Timer time={progress === 0 ? 5 : progress / 20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
