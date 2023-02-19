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

        <div className='box_center'>
        <div className='box'>

              <div className='custom'>           
              <img src={clock} alt={clock} className="icon"/>
              <p>ระยะเวลาที่คุณมี</p>
             </div>
 
            <div className="slidecontainer">
              <input type="range" min="1" max="100" value="50" className="slider" />
            </div>



              <div className='custom'>           
                <img src={price} alt={clock} className="icon"/>
                <p>ระยะเวลาที่คุณมี</p>
              </div>
        
              <div className="slidecontainer">
                <input type="range" min="1" max="100" value="50" className="slider" />
              </div>



            <div className='custom'>           
                <img src={location} alt={clock} className="icon"/>
                <p>สถานที่</p>
            </div>
            <div className="search">
              <input type="text"/>
            </div>



        </div>


        </div>
        

      



          <div className='center'>
              <img src={botimg} className='bot' alt={botimg}/>
          </div>

        
    </div>
  )
}
