import React from 'react'
import mainLogo from'./KrD_log.png';
import topimg from './top_image.png'
import './main.css';
import  './userinput.css'

export default function Userinput() {



  return (
    <div >
      
      <div class='center'>
        <img src={topimg} class='top'/>
      
         <img  src={mainLogo} class='Logo' />

         <h1>โหมดทันใจ</h1>
      </div>


        <div class='box'>

          <p>ระยะเวลาที่คุณมี</p>

          <div class="slidecontainer">
            <input type="range" min="1" max="100" value="50" class="slider" />

          </div>


        </div>


        < div class='seacr'>
          <button> CLick</button>
        </div>
      
        
    </div>
  )
}
