import React from "react";
import { useState, useEffect } from "react";
function Timer(){
    const [time,setTime] = useState(5)
    
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => prev > 0 ? prev - 1 : 0)
        }, 1000)
        return () => clearInterval(timer)
    }, [time])
    
    
    
    return(
        <div>
            <p className=" text-white">{time}</p>
        </div>
    )
}
export default Timer;