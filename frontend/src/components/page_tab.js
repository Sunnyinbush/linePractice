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
      <div className="rounded-l-lg w-[67px] h-[17px] mr-[5px] " style={childStyle1} />
      <div className="w-[67px] h-[17px] mr-[5px]" style={childStyle2} />
      <div className="w-[67px] h-[17px] mr-[5px]" style={childStyle3} />
      <div className="w-[67px] h-[17px] mr-[5px]" style={childStyle4} />
      <div className="rounded-r-lg w-[67px] h-[17px]" style={childStyle5} />
    </div>
  );
}
