import React, { useState } from 'react'

import location from '../image/location.svg'
import next from '../image/next.svg'
import './main.css';


import Toppage from './toppage';
import TimeSlide from './timeslider';
import Priceslider from './priceslider';
import Foot from './foot'
import liff from '@line/liff/dist/lib';

export default function Userinput(props) {

  async function handleClick() {
    try {
      await liff.init({ liffId: this.state.lineLiffId }); // initialize LIFF
 
      const userId = props.userId;


      console.log("message sent");
      liff.closeWindow();
    } catch (error) {
      console.log("error", error);
    }
  }



  const [locations, setLocations] = useState(["สีลม"]);


  const [timeData,setTimeData] =useState(null);

  function handleTimeUpdate(times) {
    setTimeData(times);
  }

  console.log("this in userinput", timeData)

  



  return (
    <div className='h-screen ' >
    
      <Toppage />

      <div className="flex flex-col justify-center items-center ">
        <div className="relative bg-box p-4 rounded-xl w-[350px] h-68">

          <TimeSlide onTimeUpdate={handleTimeUpdate} />
          <Priceslider/>
          


          <div className="flex mx-2 mt-3 ">
            <img src={location} alt={location} className="w-6 h-6 mr-4" />
            <p  className='mr-11 text-blue'>สถานที่</p>
          </div>

          <div className="search mt-2">
          <input className=" appearance-none bg-darkyel border rounded-xl w-full py-2 px-3 text-krd leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={locations} disabled/>
          </div>
        </div>
  
        <button  onClick={handleClick} className="bg-krd hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-[12px] w-20 h-10 inline-flex items-center mt-4">
          <span className="bg-no-repeat bg-center bg-cover w-4 h-4 ml-4 " style={{ backgroundImage: `url(${next})` }} />
        </button>
      </div>

      
    <Foot/>
   
   
    </div>

  )
}
