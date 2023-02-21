import React, { useState, useEffect } from 'react';
import Timer from './Timer';

function Progress(restart) {
  
  const [progress, setProgress] = useState(100);
  // const [start,setStart] = useState(true);

  useEffect(() => {
    const timer = setInterval(() =>{
        setProgress(prev => {
           return prev === 0? prev = 0: prev - 1;
        })
    },60)
    return () => {
      clearInterval(timer);
    };
})


  

  return (
    
    <div className=' rounded-r-lg rounded-l-lg'>
    <div className='h-11 md:w-[168px] md:w-[200px]  m-2 md:m-5 h-11 md:h-17 rounded-r-lg rounded-l-lg bg-grey lg:w-240 container'>
    <div style={{width: `${progress}%` }}>
  
      <div className='h-11 md:h-17 rounded-r-lg rounded-l-lg bg-orange'>
        <div className='circle w-[30px] h-[30px] md:w-[40px] md:h-[40px]'>
          <div className='absolute p-0.5  left-1.5 md:p-1 md:p-2'>
            <Timer/>
          </div>
        </div>
      </div>

    </div>
    </div>
    </div>
  );
}

export default Progress;
