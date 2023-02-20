import React from 'react'
import botimg from '../image/bottom.png'

export default function Foot() {
  return (
    <div>      
        <div className='flex flex-col justify-center items-center ' >
            <img src={botimg} className='absolute inset-x-0 bottom-0 mx-auto w-50 h-35' alt={botimg}/>
        </div>
    </div>
  )
}
