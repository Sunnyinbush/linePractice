import React from 'react'
import mainLogo from'../image/KrD_log.png';
import topimg from '../image/top_image.png'
import { Container,Row ,Button} from 'react-bootstrap';

export default function Toppage() {
  return (
    <div>      
    <Container>
    <div className='center'>
      <img src={topimg} className='top' alt={topimg}/>
       <img  src={mainLogo} className='Logo' alt={mainLogo}/>
       <h1 className='text-xl text-blue-400-font-blue'>โหมดทันใจ</h1>
    </div>

    </Container>
    
   
</div>
  )
}
