import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import mainLogo from '../image/KrD_log.png'
import SearchComponent from './search';

export default function Line(props) {
  const location = useLocation();
  const isUserinput = location.pathname === '/userinput';

  //Create the GAME ID here
  // Make sure that the path is redirect to the new one properly

  return (
    <div className={`justify-center ${isUserinput ? 'hidden' : ''}`}>
        <div className='justify-center max-w-screen-lg mx-auto pb-4' >

            <img  src={mainLogo} className='h-40 w-35 mt-10 ' alt={mainLogo}/>
            <p className='font-semibold text-[40px] ml-8'>ใครจะเล่นเกมนี้บ้าง</p>

        
        </div>
    <SearchComponent/>
      
     
        {/* <p>{props.name}</p> */}

        {/* <Link to='/userinput'>Go to userinput</Link> */}
    </div>
  )
}