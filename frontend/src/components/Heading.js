import React from "react";
import profileImage from "./image/Profile.png";

function Heading() {
  return (
    <div className="flex flex-col justify-center">
   
  <img className="w-60 h-27 md:w-74 md:h-32 sm:w-74 sm:h-32" src={profileImage} alt="KinRaiDee"></img>
  <h3 className=" text-[11px] md:text-[15px] mt-1 md:mt-2 ml-0.5 text-orange tunjai">โหมดทันใจ</h3>
 
</div>

  );
}

export default Heading;
