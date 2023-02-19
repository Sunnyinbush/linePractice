import React from 'react'

import botimg from '../image/bottom.png'
import clock from '../image/clock.png'
import location from '../image/location.png'
import price from '../image/price.png'
import './main.css';
import  './userinput.css'
import Toppage from './toppage';

export default function Userinput() {



  return (
    <div >
      
      <Toppage/>

        <div className='flex item-center justify-center allign-center w-60%'>
          <div className='box'>

                <div className='custom'>           
                <img src={clock} alt={clock} className=""/>
                <p>ระยะเวลาที่คุณมี</p>
              </div>
  
              <div className="slidecontainer">
                <input type="range" min="1" max="100" value="50" className="slider" />
              </div>



                <div className='custom'>           
                  <img src={price} alt={clock} className=""/>
                  <p>ระยะเวลาที่คุณมี</p>
                </div>
          
                <div className="slidecontainer">
                  <input type="range" min="1" max="100" value="50" className="slider" />
                </div>



              <div className='custom'>           
                  <img src={location} alt={clock} className=""/>
                  <p>สถานที่</p>
              </div>
              <div className="search">
                <input type="text"/>
              </div>



          </div>


        </div>
        

      



          <div className='justify-center max-w-screen-lg mx-auto pb-10'>
              <img src={botimg} className='absolute  mt-10' alt={botimg}/>
          </div>

        
    </div>
  )
}
