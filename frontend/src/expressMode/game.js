import logo from '../expressMode/image/Profile.png';
import React from 'react';
import './game.css';
import Heading from "./components/Heading.js";
import Progress from './components/progress';
import Body from './components/Body';
import PageTag from './components/page_tab';
import chineseFood from './image/Pics/chinese.jpg';
import chineseFood2 from './image/Pics/chinese-food2.jpg';
import foerign1 from './image/Pics/foerign1.jpg';
import foreign2 from './image/Pics/western.jpg';
import japanese from './image/Pics/japanese.jpg';
import italian from './image/Pics/italian2.jpg';
import onePlate from './image/Category/1plate.jpeg';
import dimSum from './image/Category/dimsum.jpeg';
import steak from './image/Category/steak.jpeg';
import tarmSung from './image/Category/tarmsung.jpeg';
import cafe from './image/vibe/cafe.jpeg';
import pub from './image/vibe/pub.jpeg';
import roofTop from './image/vibe/rooftop.jpeg';
import wine from './image/vibe/wine.jpeg';
import couple from './image/who/couple.jpeg';
import family from './image/who/family.jpeg';
import business from './image/who/business.jpeg';
import friends from './image/who/friends.jpeg';
import alcohol from './image/additional/alcohol.jpeg';
import creditCard from './image/additional/credit.jpeg'
import wifi from './image/additional/wifi.jpeg';
import parking from './image/additional/parking.jpeg';

function Game() {
    const foodType = [foerign1,chineseFood2,japanese,italian,tarmSung,onePlate,dimSum,steak,wine,pub,roofTop,cafe,couple,family,business,friends,wifi,parking,alcohol, creditCard];
    // const serve = [tarmSung,onePlate,dimSum,steak];
    // const vibe = [wine,pub,roofTop,cafe];
    // const who = [couple,family,business,friends];
    // const addOn = [wifi,parking,alcohol, creditCard];
    // const picAll = foodType + serve + vibe + who + addOn
    
  return (
    
    <div id='overall-con'> 
        <div className='mt-73 plus:mt-[30px] lg:mt-73'>
            <div className='flex justify-center items-center ' id='timer&head'>
                <div className='flex-1 w-32 mx-auto ml-8'>
                    <Heading/>
                </div>
                <div className='flex-1 w-64 mr-30'>
                    <Progress/>
                </div>
            </div>
            <div className="ip6:h-[320px] md:h-[400px] lg:h-[400px] mt-[10px] h-[280px]">
                <Body picture={foodType}  />

            </div>
           
            <div className='mt-100 md:mt-[250px] lg:mt-[150px] '>
                <PageTag/>
            </div>
        </div>
    </div>
    
  );
}

export default Game;

// "grid grid-cols-2 gap-4 ml-10 ip14:mt-12 ip5:mr-9 "