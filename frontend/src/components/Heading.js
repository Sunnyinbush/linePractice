import React from "react";
import profileImage from "./image/Profile.png";

function Heading() {
  return (
    <div className="lg:ml-32  ">
  <img className="w-20 lg:w-40" src={profileImage} alt="KinRaiDee"></img>
  <h3 className="lg:text-xl lg:ml-7  text-sm mt-2 ml-0.5 text-orange tunjai">โหมดทันใจ</h3>
</div>

  );
}

export default Heading;
