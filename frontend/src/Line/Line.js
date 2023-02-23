import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../image/KrD_log2.svg';
import SearchComponent from './search';
import {useState,useEffect} from 'react';
import {getProfile} from '@line/liff'

export default function Line(props) {

  const [users,setUsers] = useState([]);


  // Make sure that the path is redirect to the new one properly

  return (
    <div >
        <div className='justify-center pb-4' >

            <img  src={Logo} className=' h-[30px] w-35 mx-8 mt-10  ' alt={Logo}/>
          
            <p className='font-semibold text-[36px] ml-8 pb-4 text-lblack mt-2'>ใครจะเล่นเกมบ้าง~?</p>
            <SearchComponent/>
    
            <div className="flex items-center mb-4 mt-4">
            <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5"  />

              <img src={props.pictureUrl} className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
              <p className='mr-10 font-semibold text-[16px]'>{props.name}</p>
   
             </div>

             <hr/>






            <div className="absolute bottom-0 w-full">
            <div className="relative shadow-3t p-4 rounded-t-[30px] h-[150px]">

            <img src={props.pictureUrl} className='h-[50px] inline-flex rounded-[300px] mr-3'></img>


              <Link to="/urchoice" className="bg-krd hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4
               rounded-[12px] w-full h-[50px] inline-flex items-center justify-center mt-[20px]">
                <p className='text-white text-center'>สร้างเกมโหมดทันใจ</p>
              </Link>
            </div>
          </div>




        </div>
 

     

   
        </div>
  )
}