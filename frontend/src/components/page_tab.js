import React, { useState, useEffect } from "react";

export default function Page() {
//   const [progress, setProgress] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        return prev + 1;
      });
      
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const childStyle1 = {
    backgroundColor: time >= 5 ? "#EFDA63" : "grey",
 
  };
  const childStyle2 ={
    backgroundColor: time >= 10 ? "#EFDA63" : "grey",
  }

  const childStyle3 = {
    backgroundColor: time >= 15 ? "#EFDA63" : "grey"
  }
  const childStyle4 = {
    backgroundColor: time >= 20? "#EFDA63" : "grey"
  }
  const childStyle5 = {
    backgroundColor: time >= 25? "#EFDA63" : "grey"
  }
  
  return (
   
   <div className="flex flex-row justify-center">
      <div className="rounded-l-lg md:w-[67px] md:h-[17px] mr-[5px] ip6:w-[60px] ip6:h-[12px] w-[45px] h-[10px]" style={childStyle1} />
      <div className="md:w-[67px] md:h-[17px] mr-[5px] ip6:w-[60px] ip6:h-[12px] w-[45px] h-[10px]" style={childStyle2} />
      <div className="md:w-[67px] md:h-[17px] mr-[5px] ip6:w-[60px] ip6:h-[12px] w-[45px] h-[10px]" style={childStyle3} />
      <div className="md:w-[67px] md:h-[17px] mr-[5px] ip6:w-[60px] ip6:h-[12px] w-[45px] h-[10px]" style={childStyle4} />
      <div className="rounded-r-lg md:w-[67px] md:h-[17px] ip6:w-[60px] ip6:h-[12px] w-[45px] h-[10px]" style={childStyle5} />
    </div>
  );
}
