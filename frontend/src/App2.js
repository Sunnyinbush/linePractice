import logo from './logo.svg';
import React from 'react';
import './App.css';
import Heading from "./components/Heading.js";
import Progress from './components/progress';
import Body from './components/Body';
import PageTag from './components/page_tab';
import maskgroup1 from "./components/image/Mask group-1.png";
import maskgroup2 from "./components/image/Mask group-2.png";
import maskgroup3 from "./components/image/Mask group-3.png";
import maskgroup4 from "./components/image/Mask group.png";


function App() {
    const pic_list = [maskgroup1, maskgroup2, maskgroup3, maskgroup4,''];

    
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
            <div className="ip6:h-[320px] md:h-[400px] lg:h-[400px] mt-[100px] h-[280px]">
                <Body picture={pic_list} />

            </div>
           
            <div className='mt-100'>
                <PageTag/>
            </div>
        </div>
    </div>
    
  );
}

export default App;

// "grid grid-cols-2 gap-4 ml-10 ip14:mt-12 ip5:mr-9 "