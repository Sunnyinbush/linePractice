import React from 'react'

import botimg from '../image/bottom.png'
import clock from '../image/clock.png'
import location from '../image/location.png'
import price from '../image/price.png'
import './main.css';
import Toppage from './toppage';

export default function Userinput() {



  return (
    <div >
      
      <Toppage/>

      <div class="flex items-center justify-center w-full">
      <div class="box-content w-360 h-300 bg-box mt-5 rounded-2sm">
        <div class="custom flex items-center mt-10">
          <img src={clock} alt={clock} class="w-6 h-6 mr-2" />
          <p>ระยะเวลาที่คุณมี</p>
        </div>

        <div class="slidecontainer w-80 mx-auto mt-2">
          <input type="range" min="1" max="100" value="50" class="slider" />
        </div>

        <div class="custom flex items-center mt-4">
          <img src={price} alt={clock} class="w-6 h-6 mr-2" />
          <p>จำนวนเงินที่มี</p>
        </div>

        <div class="slidecontainer w-80 mx-auto mt-2">
          <input type="range" min="1" max="100" value="50" class="slider" />
        </div>

        <div class="custom flex items-center mt-4">
          <img src={location} alt={clock} class="w-6 h-6 mr-2" />
          <p>สถานที่</p>
        </div>

        <div class="search mt-2">
          <input type="text" class="w-80 mx-auto" />
        </div>
      </div>
    </div>



      



          <div className='justify-center max-w-screen-lg mx-auto pb-10'>
              <img src={botimg} className='absolute  mt-10' alt={botimg}/>
          </div>

        
    </div>
  )
}
