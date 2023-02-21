import React from 'react';
import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import pricepic from '../image/price.png';

export default function Priceslider() {
  const [values, setValues] = useState([400, 2000]);


  return (
    <div>
      <div className="flex mt-4 ml-3">
        <img src={pricepic} alt={pricepic} className="w-6 h-6 mr-4" />
        <p className="mr-4 text-blue text-[15px]'">งบประมาณต่อคน</p>
        <p className="ml-3 text-krd text-lg font-medium text-[15px]">
          {values[0]} - {values[1]} บาท
        </p>
      </div>
      <div className="justify-center w-120 mx-4 mt-4 rounded-md">
        <Range
          values={values}
          step={100}
          min={100}
          max={3000}
          onChange={(newValues) => setValues(newValues)}
          renderTrack={({ props, children }) => {
            const range = values[1] - values[0];
            const minPercent = ((values[0] - 100) / (3000 - 100)) * 100;
            const maxPercent = ((values[1] - 100) / (3000 - 100)) * 100;
            return (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "8px",
                  width: "100%",
                  backgroundColor: "#ccc",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    width: `${range / (3000 - 100) * 100}%`,
                    left: `${minPercent}%`,
                    backgroundColor: "#EF7D52",
                    position: "absolute",
                    borderRadius: "4px",
                  }}
                />
                {children}
              </div>
            );
          }}
          
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
        
              }}
              className=' h-5 transform translate-x-10 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-krd'
            >
   
            </div>
          )}
        />
      </div>
    </div>
  );
}
