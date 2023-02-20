import React from 'react'

import botimg from '../image/bottom.png'
import clock from '../image/clock.png'
import location from '../image/location.png'
import price from '../image/price.png'
import './main.css';
import Toppage from './toppage';
import Foot from './foot'

export default function Userinput() {



  return (
    <div >
      
      <Toppage/>

        <div className="flex flex-col justify-center items-center ">
        <div className="bg-box p-4 rounded-xl w-90 h-72">

          <div className=" flex mx-3 ">
            <img src={clock} alt={clock} className="w-6 h-6 mr-4" />
            <p className='mr-11 text-blue'>ระยะเวลาที่คุณมี</p>
          </div>
          <div className="slidecontainer justify-center w-120 mx-10 mt-2">
          <label for="customRange1" class="form-label"></label>
              <input
                type="range"
                class="
                  form-range
                  appearance-none
                  w-full
                  h-6
                  p-0
                  bg-transparent
                  focus:outline-none focus:ring-0 focus:shadow-none
                "   
                min="0"
                max="5"
                step="0.5"
                id="customRange1"
              />
          </div>

          <div className="flex mx-3">
            <img src={price} alt={clock} className="w-6 h-6 mr-4" />
            <p  className='mr-11'>จำนวนเงินที่มี</p>
          </div>

          <div className="slidecontainer w-80 mx-auto mt-2">
            <input type="range" min="1" max="100" value="50" className="slider" />
          </div>

          <div className="flex mx-3">
            <img src={location} alt={clock} className="w-6 h-6 mr-4" />
            <p  className='mr-11'>สถานที่</p>
          </div>

          <div className="search mt-2">
            <input type="text" className="w-80 mx-auto bg-black" />
          </div>
        </div>
      </div>
      
    <Foot/>
   
    </div>

  )
}
