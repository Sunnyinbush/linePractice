import React from 'react'

import location from '../image/location.png'

import next from '../image/next.png'
import './main.css';
import Toppage from './toppage';
import Urchoice from './urchoice';
import Foot from './foot'




import TimeSlide from './timeslider';
import Priceslider from './priceslider';

export default function Userinput() {



  return (
    <div >
      
      <Toppage/>

        <div className="flex flex-col justify-center items-center ">
        <div className="relative bg-box p-4 rounded-xl w-90 h-72">

          <TimeSlide/>
          <Priceslider/>
          


          <div className="flex mx-3 mt-5 ">
            <img src={location} alt={location} className="w-6 h-6 mr-4" />
            <p  className='mr-11'>สถานที่</p>
          </div>

          <div className="search mt-2">
            <input type="text" className="w-80 mx-auto bg-darkyel text-krd" />
          </div>
        </div>
            
        <button className="bg-krd hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-[12px] w-20 h-10 inline-flex items-center mt-4">
          <span className="bg-no-repeat bg-center bg-cover w-4 h-4 " style={{ backgroundImage: `url(${next})` }} />

        </button>
      </div>

      
    <Foot/>
   
    </div>

  )
}
