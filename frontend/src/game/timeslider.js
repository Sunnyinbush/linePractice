import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

import clock from '../image/clock.png'


export default function TimeSlide() {
  const STEP = 5;
  const MIN = 5;
  const MAX = 120;
  const [times, setTime] = useState([10]);


  return (
    <div> 
    <div className=" flex ml-3 ">
        <img src={clock} alt={clock} className="w-6 h-6 mr-4" />
        <p className='mr-12 text-blue text-[15px]'>ระยะเวลาที่คุณมี</p>
        <p className='ml-12 text-krd text-lg font-medium text-[15px]'>{times[0]} นาที</p>
      </div>
      <div className="slidecontainer justify-center w-120 mx-4 mt-4 rounded-md">
            <Range
              step= {STEP}
              min={MIN}
              max={MAX}
           
              values={times}
              onChange={(values) => {
              setTime(values)
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
        <div className="text-krd mt-4 text-sm">
        <div class="flex justify-between">
          <p class="text-sm">10 นาที</p>
          <p class="text-sm">Center text</p>
          <p class="text-sm">Right text</p>
          <p class="text-sm">Right text</p>
   
        </div>
        </div>
      </div>
    </div>
  )
}

