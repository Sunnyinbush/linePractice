import React from 'react'
import mainLogo from'../image/KrD_log.png';
import topimg from '../image/top_image.png'
import botimg from '../image/bottom.png'
import './main.css';
import  './userinput.css'

import { Container,Row ,Button} from 'react-bootstrap';

export default function Userinput() {



  return (
    <div >
      
      <Container>
      <div class='center'>
        <img src={topimg} class='top'/>
         <img  src={mainLogo} class='Logo' />


      </div>
      <Row>
        <h1>โหมดทันใจ</h1>
      </Row>

      </Container>
     


      <Container xl={12}>
        <div class='box'>
          <Row>
          <p>ระยะเวลาที่คุณมี</p>

        <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" />

        </div>

          </Row>
          <Row>
          <p>ระยะเวลาที่คุณมี</p>

        <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" />

        </div>

          </Row>
          <Row>
          <p>สถานที</p>

          <div class="slidecontainer">
            <input type="text"/>

          </div>

          </Row>
   

        </div>
        </Container>
     

      
        < div class='seacrh'>
          <Button> Click</Button>
        </div>


        <Container>
          <div class='center'>
              <img src={botimg} class='bot'/>
        
          </div>
        </Container>
      
        
    </div>
  )
}
