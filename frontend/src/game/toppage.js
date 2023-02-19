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
      <div className='Logo absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mt-170'>
        <img  src={mainLogo} className='w-159' alt={mainLogo}/>
      </div>
       
       <h1 className='font-medium text-2xl text-red-500 relative -mt-20 text-center'>โหมดทันใจ</h1>
    </div>

    </Container>
    
   
</div>
  )
}
