import React, { useState } from 'react'

import location from '../image/location.svg'
import next from '../image/next.svg'
import './main.css';

import Urchoice from './urchoice';

import { Link } from 'react-router-dom';

import Toppage from './toppage';
import TimeSlide from './timeslider';
import Priceslider from './priceslider';
import Foot from './foot'
import axios from 'axios';

export default function Userinput() {

  const [locations, setLocations] = useState(["สีลม"]);


  const [timeData,setTimeData] =useState(null);

  function handleTimeUpdate(times) {
    setTimeData(times);
  }

  console.log("this in userinput", timeData)



  const PostJson =async (customize) =>{
    try {
      const response = await axios.post('http://localhost:4000/api/liff/line-group ', customize);
      console.log(response.data); // log the response data if successful
    } catch (error) {
      console.error(error); // log the error if the request fails
    }
    };
  



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
  
        <Link to="/userinput2" className="bg-krd hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-[12px] w-20 h-10 inline-flex items-center mt-4">
          <span className="bg-no-repeat bg-center bg-cover w-4 h-4 ml-4 " style={{ backgroundImage: `url(${next})` }} />
        </Link>
      </div>

      
    <Foot/>
   
   
    </div>

  )
}
