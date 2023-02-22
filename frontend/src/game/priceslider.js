import React from 'react';
import { useState } from 'react';
import { Range } from 'react-range';
import pricepic from '../image/price.svg';

export default function Priceslider() {
  const [values, setValues] = useState([250, 2000]);


  return (
    <div>
      <div className="flex mt-4 ml-2">
        <img src={pricepic} alt={pricepic} className="w-6 h-6 mr-4" />
        <p className="mr-4 text-blue text-[15px]'">งบประมาณต่อคน</p>
        <p className=" ml-2 text-krd text-lg font-medium text-[15px]">
          {values[0]} - {values[1]} บาท
        </p>
      </div>
      <div className="justify-center w-120 mx-4 mt-4 rounded-md">
        <Range
          values={values}
          step={300}
          min={100}
          max={3000}
          onChange={(newValues) => setValues(newValues)}
          renderTrack={({ props, children }) => {
            const range = values[1] - values[0];
            const minPercent = ((values[0] - 100) / (3000 - 100)) * 100;
          
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
      <div className="text-krd mt-2 text-sm">
        <div className="flex ">
        <p className="pr-2 text-[10px] font-small">100 บาท</p>
          <p className="pl-10 text-[10px] font-small">1000 บาท</p>
      
          <p className="pl-14 text-[10px] font-small">2000 บาท</p>
          <p className="pl-14 text-[10px] font-small">ไม่จำกัด</p>
        </div>
        </div>
    </div>
  );
}
