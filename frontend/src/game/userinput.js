import React from 'react'
import location from '../image/location.svg'
import next from '../image/next.svg'
import './main.css';
import liff from '@line/liff';
import Toppage from './toppage';
import TimeSlide from './timeslider';
import Priceslider from './priceslider';
import Foot from './foot';


export default function Userinput() {

  async function handleClick() {
  try {
    await liff.init({ liffId: this.state.lineLiffId }); // initialize LIFF
    const profile = await liff.getProfile(); // get user profile
    const userId = profile.userId;

    const message = {
      type: "flex",
      altText: "This is a Flex Message",
      contents: {
        type: "bubble",
        direction: "ltr",
        header: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "creator สร้างเกมแล้ว!",
              weight: "regular",
              size: "xl",
              align: "start",
              contents: []
            },
            {
              type: "text",
              text: userId,
              align: "start",
              contents: []
            }
          ]
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "มาหาอาหารที่เหมาะสมสําหรับทุกคนกันเถอะ",
              offsetBottom: "20px",
              contents: []
            },
            {
              type: "button",
              action: {
                type: "uri",
                label: "เล่นเกมกันๆ",
                uri: "https://liff.line.me/1657442367-JL8n6BYl"
              },
              color: "#EC711EFF",
              style: "primary"
            }
          ]
        }
      }
    };

    await liff.sendMessages([message]).then(() => {
      console.log("message sent");
      liff.closeWindow();
    });
  } catch (error) {
    console.log("error", error);
  }
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
            <input className="appearance-none bg-darkyel border rounded-xl w-full py-2 px-3 text-krd leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Location"/>
          </div>
        </div>
        <button className="bg-krd hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-[12px] w-20 h-10 inline-flex items-center mt-4" onClick={handleClick}>
          <span className="bg-no-repeat bg-center bg-cover w-4 h-4 ml-4 " style={{ backgroundImage: `url(${next})` }} />
        </button>
      </div>
      <Foot/>
    </div>
  )
}
