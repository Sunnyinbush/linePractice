import React from "react";
import { useState, useEffect } from "react";
import maskgroup1 from "./image/Mask group-1.png";
import maskgroup2 from "./image/Mask group-2.png";
import maskgroup3 from "./image/Mask group-3.png";
import maskgroup4 from "./image/Mask group.png";
function Body(picture){
    const [pic,setPic]= useState(0)
    
    useEffect(() =>{
        setPic(()=>{
            Math.floor(Math.random() * picture.length)
        })
    })
    return(
        <div className="h-56 grid grid-cols-2  gap-2 lg:gap-2 md:gap-3 content-around justify-items-center mt-71 sm:mt-[90px] md:mt-180 ml-16 mr-16">
            <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={maskgroup1}/>
            <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={maskgroup2}/>
            <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={maskgroup3}/>
            <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={maskgroup4}/>
        </div>
    );
}
export default Body;