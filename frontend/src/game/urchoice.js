import React from 'react'
import mainLogo from'../image/KrD_log.svg';
import topimg from '../image/top_image.png';

import location from '../image/location.svg'

import next from '../image/next.svg'
import './main.css';

import Foot from './foot'
import { Link } from 'react-router-dom';
import TimeSlide from './timeslider';
import Priceslider from './priceslider';




export default function Urchoice() {
  return (
    <div>      
   
    <div className='flex flex-col justify-center items-center'>
    
    <div className='justify-center max-w-screen-lg mx-auto pb-4' >
        <img src={topimg} className='absolute top-42 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-35 w-50 ' alt={topimg}/>

        <img  src={mainLogo} className='h-40 w-35 mt-10 ' alt={mainLogo}/>

       <h1 className='font-medium text-2xl relative -mt-5 text-center'>โหมดตามใจ</h1>
      </div>
      
           
      
    </div>



    <div className="flex flex-col justify-center items-center ">
        <div className="relative bg-box p-4 rounded-xl w-[350px] h-68">

          <TimeSlide/>
          <Priceslider/>
          


          <div className="flex mx-2 mt-3 ">
            <img src={location} alt={location} className="w-6 h-6 mr-4" />
            <p  className='mr-11 text-blue'>สถานที่</p>
          </div>

          <div className="search mt-2">
          <input className=" appearance-none bg-darkyel border rounded-xl w-full py-2 px-3 text-krd leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Location"/>
          </div>
        </div>
            
        <Link to="/" className="bg-krd hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-[12px] w-20 h-10 inline-flex items-center mt-4">
          <span className="bg-no-repeat bg-center bg-cover w-4 h-4 ml-4 " style={{ backgroundImage: `url(${next})` }} />
 
        </Link>
      </div>

      
    <Foot/>
   

   
</div>
  )
}
