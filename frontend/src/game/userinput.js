import React from 'react'
import mainLogo from'./KrD_log.png';
import topimg from './top_image.png'
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
     


      <Container>
        <div class='box'>

          <p>ระยะเวลาที่คุณมี</p>

          <div class="slidecontainer">
            <input type="range" min="1" max="100" value="50" class="slider" />

          </div>


        </div>
        </Container>
     

      
        < div class='seacrh'>
          <Button> Click</Button>
        </div>
      
        
    </div>
  )
}
