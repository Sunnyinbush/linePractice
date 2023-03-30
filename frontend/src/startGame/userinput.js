import React from 'react'
import { useState } from 'react';
import location from './image/location.svg'
import next from './image/next.svg'
import './main.css';
import liff from '@line/liff';
import Toppage from './f1Component/toppage';
import TimeSlide from './f1Component/timeslider';
import Priceslider from './f1Component/priceslider';
import Foot from './f1Component/foot';


import axios from 'axios';


export default function Userinput(props) {


  
  const [locations, setLocations] = useState(["สีลม"]);
  function handleClick() {
    liff.init({ liffId: '1657442367-op7nlxeV' })
      .then(() => {
        return liff.getProfile();
      })
      .then((profile) => {
        const name = profile.displayName;
        // const member = {"memmber1":"Fu" , "memmber2":"Pun" ,"memmber3":"Arty","memmber4":"tt"   }
        const ownerid = profile.userId;
        console.log(profile);
       
        const userdata ={
          "id": 2,
          "ownerid": {ownerid},
          "gameId": 2,
          "groupId": "C29a0bbf62743fb10aaa004df79e67fcd",
          "memberList": [
            {ownerid},
            "Ucf9ec7f00586024466abf3868e307206",
            "Ucf9ec7f00586024466abf3868e307206",
            "Ue4572e769d5070cbfda0667831ab4f97",
            "Ua88a68ffeefa6bf11ca5115bd0f221a1"
          ],
          "selectedTime": 0,
          "selectedBudget": 0,
          "selectedLocation": "MBK Center"
        };
        return axios.post("https://8189-161-200-191-206.ap.ngrok.io/api/liff/line-group", userdata);
      })
      .then((response1) => {
        console.log(response1);
        const gameData = { 
          "ownerId" : this.ownerid,
          "functionName": "startGame",
        }
        return axios.post("https://8189-161-200-191-206.ap.ngrok.io/webhook", gameData);
      })
      .then((response2) => {
        console.log(response2);
        //liff.closeWindow();
      })
      .catch((error) => {
        console.log('LIFF Error:', error);
      })
      .finally(() => {
        liff.closeWindow();
      });
  }
  
  
  



  return (
    <div className='h-screen'>
      <Toppage />
      <div className="flex flex-col justify-center items-center ">
        <div className="relative bg-box p-4 rounded-xl w-[350px] h-68">
          <TimeSlide/>
          <Priceslider/>
          <div className="flex mx-2 mt-3 ">
            <img src={location} alt={location} className="w-6 h-6 mr-4" />
            <p  className='mr-11 text-blue'>สถานที่</p>
          </div>
          <div className="search mt-2">
          <input className=" placeholder-krd appearance-none bg-darkyel border rounded-xl w-full py-2 px-3 text-krd leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={locations} disabled/>

          </div>
        </div>
        <button className="bg-krd hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-[12px] w-20 h-10 inline-flex items-center mt-4"  onClick={handleClick}>
          <span className="bg-no-repeat bg-center bg-cover w-4 h-4 ml-4 " style={{ backgroundImage: `url(${next})` }} />
        </button>
      </div>
      <Foot/>
    </div>
  )
}
