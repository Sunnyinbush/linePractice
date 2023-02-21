import React from 'react'
import { useState } from "react" ;
import { Range, getTrackBackground } from "react-range";
import pricepic from '../image/price.png'



export default function Priceslider() {

    const STEP = 100;
    const MIN = 0;
    const MAX = 3000;
  
    const [price, setPrice] = useState([100,2000]);
   return (
    <div>
        
        <div className="flex ml-3 mt-4">
            <img src={pricepic} alt={pricepic} className="w-6 h-6 mr-4" />
            <p  className='mr-3 text-blue '>งบประมาณต่อคน</p>
            <p className='  text-krd text-lg font-medium'>{price[0]}-{price[1]} บาท</p>
          </div>

          <div className="slidecontainer justify-center w-120 mx-4 mt-4 rounded-md">
            <Range
              step= {STEP}
              min={MIN}
              max={MAX}
              values={price}
              onChange={(values) => {
                setPrice(values)
              }}
              renderTrack={({ props, children }) => (
                <div
                {...props}
                style={{
                  ...props.style,
                  height: '20px',
                  display: 'flex',
                  width: '100%'
                }}
                className="h-11 flex w-full"
              >
                <div
                  ref={props.ref}
                  style={{
                    height: '8px',
                    width: '100%',
                    borderRadius: '4px',
                    background: getTrackBackground({
                      values:price,
                      colors: ['#ccc', '#EF7D52', '#ccc'],
                      min: MIN,
                      max: MAX,
                
                    }),
                    alignSelf: 'center'
                  }}
                  className="h-1 w-full rounded-2xl"
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-5 h-5 transform translate-x-10 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-krd"
              >
              </div>
              )}
            />
      </div>
      <div className="text-krd mt-4 text-sm">
        <div class="flex justify-between">
          <p class="text-sm">100 บาท</p>
          <p class="text-sm">1000 บาท</p>
          <p class="text-sm">2000 บาท</p>
          <p class="text-sm">Right text</p>
   
        </div>
        </div>
    </div>
  )
}
