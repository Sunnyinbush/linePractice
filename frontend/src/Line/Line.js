import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../image/KrD_log2.svg';
import SearchComponent from './search';
import {useState,useEffect} from 'react';
import {getProfile} from '@line/liff'
import axios from 'axios';
import fu from '../image/fu.png'
import all from '../image/all.svg'
import kao from '../image/Kao.png'
import arty from '../image/Art.png'
import Pun from '../image/Pun.png'
import tt from '../image/tt.png'


export default function Line(props) {

  const [users,setUsers] = useState([]);
  // const url = ' http://localhost:9000/gameState';

  // axios.get(url)
  // .then(response => {
  //   console.log(response.data);
  //   // console.log(response.memberList)
  // })
  // .catch(error => {
  //   console.error(error);
  // });
  
 


  // Make sure that the path is redirect to the new one properly

  return (
    <div >
        <div className='justify-center pb-4' >

            <img  src={Logo} className=' h-[30px] w-35 mx-8 mt-10  ' alt={Logo}/>
          
            <p className='font-semibold text-[36px] ml-8 pb-4 text-lblack mt-2'>ใครจะเล่นเกมบ้าง~?</p>
            <SearchComponent/>
    

    
            <div className="flex items-center mb-4 mt-4">

            <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5" checked />

              <img  src={all}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
              <p className='mr-10  text-[16px]'>All</p>
   
             </div>

             <hr className='w-[70%] ml-[20%]'/>

             <div className="flex items-center mb-4 mt-4">

              <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5"  checked/>

                <img  src={props.pictureUrl}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
                <p className='mr-10  text-[16px]'>{props.name}</p>
              </div>

              <hr className='w-[70%] ml-[20%]'/>

            <div className="flex items-center mb-4 mt-4">

            <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5" checked />

              <img  src={fu}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
              <p className='mr-10  text-[16px]'>Fu</p>
             </div>

             <hr className='w-[70%] ml-[20%]'/>

             <div className="flex items-center mb-4 mt-4">

              <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5" checked />

                <img  src={Pun}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
                <p className='mr-10  text-[16px]'>Pun</p>
              </div>

              <hr className='w-[70%] ml-[20%]'/>


              <div className="flex items-center mb-4 mt-4">

                <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5" checked />

                  <img  src={arty}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
                  <p className='mr-10  text-[16px]'>Arty</p>
                </div>

                <hr className='w-[70%] ml-[20%]'/>


               

                <div className="flex items-center mb-4 mt-4">

                <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5" checked />

                  <img  src={tt}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
                  <p className='mr-10  text-[16px]'>tt</p>
                </div>

                <hr className='w-[70%] ml-[20%]'/>








            <div className="absolute bottom-0 w-full">
            <div className="relative shadow-3t p-4 rounded-t-[30px] h-[150px]">

            <img src={fu} className='h-[50px] inline-flex rounded-[300px] mr-3'></img>
            <img src={fu} className='h-[50px] inline-flex rounded-[300px] mr-3'></img>
            <img src={fu} className='h-[50px] inline-flex rounded-[300px] mr-3'></img>
            <img src={fu} className='h-[50px] inline-flex rounded-[300px] mr-3'></img>
            <img src={fu} className='h-[50px] inline-flex rounded-[300px] mr-3'></img>
            



              <Link to="/userinput" className="bg-krd hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4
               rounded-[12px] w-full h-[50px] inline-flex items-center justify-center mt-[20px]">
                <p className='text-white text-center'>สร้างเกมโหมดทันใจ</p>
              </Link>
            </div>
          </div>




        </div>
 

     

   
        </div>
  )
}