import React from 'react';
import { useState } from 'react';
import { Range,getTrackBackground } from 'react-range';
import pricepic from '../image/price.svg';


export default function Priceslider() {
  const [values, setValues] = useState([1]);

  const priceRange  = () => {
    if (values[0] === 1) {
      return "< 100 บาท";
    } 
    
    if (values[0] === 2) {
      return "101-250 บาท";
    } 
    
    if (values[0] === 3) {
      return "251-500 บาท";
    } 
    
    if (values[0] === 4) {
      return "501-100 บาท";
    } 
    
    
    else {
      return 'ไม่จำกัด';
    }
  }

  console.log(priceRange())
  const STEP = 1;
  const MIN = 1;
  const MAX = 5;




  return (
    <div>
      <div className="flex mt-4 ml-2">
        <img src={pricepic} alt={pricepic} className="w-6 h-6 mr-4" />
        <p className="mr-4 text-blue text-[15px]'">งบประมาณต่อคน</p>
        <p className=" ml-12 text-krd text-lg font-medium text-right text-[15px]">

        {priceRange()} 

        </p>
      </div>
      <div className="slidecontainer justify-center w-120 mx-4 mt-4 rounded-md">
            <Range
              step= {STEP}
              min={MIN}
              max={MAX}
           
              values={values}
              onChange={(newValues) => {
                setValues([newValues[0]]);
              }}
              renderTrack={({ props, children }) => (
                <div
                {...props}
                className="h-2 flex w-full rounded-md"
                style={{
                  background: getTrackBackground({
                    values: values,
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
      </div>
      <div className="text-krd mt-2 text-sm">
        <div className="flex ">
        <p className=" text-[10px] font-small">  &lt; 100</p>
          <p className=" mx-10 text-[10px] font-small">101-250</p>
      
          <p className=" mx-10 text-[10px] font-small">251-500</p>
          <p className=" mx-10 text-[10px] font-small">501-100</p>
          <p className="mx-10 text-[10px] font-small"> 	&gt; 1000</p>
        </div>
        </div>
    </div>
  );
}
