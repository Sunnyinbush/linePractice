import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

import clock from '../image/clock.svg'


export default function TimeSlide() {
  const STEP = 5;
  const MIN = 10;
  const MAX = 120;
  const [times, setTime] = useState([10]);

  const timevalue  = () => {
    if (times[0] === 120) {
      return "ไม่จำกัด";
    } else {
      return times + ' นาที';
    }
  }



  return (
    <div> 
    <div className=" flex ml-2 ">
        <img src={clock} alt={clock} className="w-6 h-6 mr-4" />
        <p className='mr-12 text-blue text-[15px]'>ระยะเวลาที่คุณมี</p>
        <p className='ml-10 text-krd text-lg font-medium text-[15px]'>
        {timevalue()} 
      </p>
      </div>
      <div className="slidecontainer justify-center w-120 mx-4 mt-4 rounded-md">
            <Range
              step= {STEP}
              min={MIN}
              max={MAX}
           
              values={times}
              onChange={(newValues) => {
                setTime([newValues[0]]);
              }}
              renderTrack={({ props, children }) => (
                <div
                {...props}
                className="h-2 flex w-full rounded-md"
                style={{
                  background: getTrackBackground({
                    values: times,
                    colors: ["#EF7D52", "#ccc"],
                    min: MIN,
                    max: MAX,
                  }),
                }}
              >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-5 h-5 transform translate-x-10 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-krd"
                />
              )}
              
            />
        <div className="text-krd mt-2 text-sm">
        <div className="flex ">
          <p className="mr-2 text-[10px] font-small">10 นาที</p>
          <p className="pr-6 text-[10px] font-small">30 นาที</p>
          <p className="ml-6 mr-5 text-[10px] font-small">60 นาที</p>
          <p className="ml-6 mr-5 text-[10px] font-small">90 นาที</p>
          <p className="ml-3 text-[10px] font-small">ไม่จำกัด</p>

   
        </div>
        </div>
      </div>
    </div>
  )
}

