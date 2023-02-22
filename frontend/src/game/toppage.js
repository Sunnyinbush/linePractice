import React from 'react'

import topimg from '../image/top_image.png';
import Logo from '../image/KrD_log.svg';


export default function Toppage() {
  return (
    <div>      
   
    <div className='flex flex-col justify-center items-center'>
    
      <div className='justify-center max-w-screen-lg mx-auto pb-4' >
        <img src={topimg} className='absolute top-42 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-35 w-50 ' alt={topimg}/>

        <img  src={Logo} className='h-40 w-35 mt-10 ' alt={Logo}/>
       
       <h1 className='font-semibold text-xl text-krd relative -mt-5 text-center'>โหมดทันใจ</h1>
      </div>
      
     
     
        
      
    </div>


   
</div>
  )
}
