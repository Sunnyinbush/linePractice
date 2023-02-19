import React from 'react'
import mainLogo from'../image/KrD_log.png';
import topimg from '../image/top_image.png';


export default function Toppage() {
  return (
    <div>      
   
    <div className='justify-center flex '>
    
      <div className='justify-center max-w-screen-lg mx-auto pb-10' >
        <img src={topimg} className='absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-35 w-50 ' alt={topimg}/>

       <img  src={mainLogo} className='h-40 w-35 mt-10' alt={mainLogo}/>

       <h1 className='font-medium text-2xl text-krd relative -mt-5 text-center'>โหมดทันใจ</h1>
      </div>
      
     
        
      
    </div>


   
</div>
  )
}
