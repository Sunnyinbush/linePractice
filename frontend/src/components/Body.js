import React, { useState, useEffect, useCallback } from "react";
import liff from '@line/liff';
// import Progress from "./progress";

function Body({ picture }) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(-1);
  const [count, setCount] = useState(1);
  const [imgIndexes, setImgIndexes] = useState([]);
  const [list,setList] = useState([]);
  const [list2,setList2] = useState([]);
  const [list3,setList3] = useState([]);
  const [list4,setList4] = useState([]);
  const [list5,setList5] = useState([]);
  const [borderIndex,setBorderIndex] = useState(null);
  const [counting,setCounting] = useState(0);
  

  
  const handleImgClick = useCallback((index, src) => {
    if (count === 1) {
      setList2((prevList) => [...prevList, "localhost:3000" + src]);
    } 
    if (count===2){
      setList3((prevList) => [...prevList, "localhost:3000" + src]);
  }
    if (count === 0) {
      setList((prevList) => [...prevList, "localhost:3000" + src]);
    }
    if (count === 3){
      setList4((prevList) => [...prevList, "localhost:3000" + src]);
    }
    if (count=== 4){
      setList5((prevList) => [...prevList, "localhost:3000" + src]);
    }
    setSelectedImgIndex(index);
    setCounting((prev) => prev+1);
    // setImgIndexes(getRandomInts(4, picture.length-1));
    // console.log(count);
    // console.log(counting);
    console.log(count);
    console.log("List 1:", list);
    console.log("List 2:", list2);
    console.log("List 3:", list3);
    console.log("List 4:", list4);
    console.log("List 5:", list5);

  }, [count, counting, picture.length, setList, setList2, setList3, setSelectedImgIndex, setCounting, setImgIndexes]);

    
  
 
  const getRandomInts = (n, max) => {
    const arr = [];
    while (arr.length < n) {
      const r = Math.floor(Math.random() * max);
      if (!arr.includes(r)) {
        arr.push(r);
      }
    }
    return arr;
  };


  useEffect(() => {
    
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      
    }, 5000);

    if (count === 5) {
      clearInterval(interval);
    } else {
      setImgIndexes(getRandomInts(4, picture.length - 1));
      setSelectedImgIndex(-1);
    }

    // Clear the orange border
    setBorderIndex(-1);

    return () => clearInterval(interval);
  }, [count,picture.length]);

  // useEffect(() => {
  //   // Your existing code...
  
  //   // Click on the first image after mounting the component
  //   if (selectedImgIndex === -1 && imgIndexes.length > 0) {
  //     handleImgClick(0, picture[imgIndexes[0]]);
  //   }
  
  //   // Your existing code...
  // }, [selectedImgIndex, imgIndexes, picture, handleImgClick]);
  

  return (
    <div className="h-[200px] grid grid-cols-2 gap-2 lg:gap-2 md:gap-3 content-around justify-items-center mt-71 sm:mt-[90px] md:mt-180 ml-16 mr-16">
      <div className={`w-121 h-163 md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] ${selectedImgIndex === 0 && counting > 1? "border-4 border-orange" : ""}`}   onClick={() => handleImgClick(0, picture[imgIndexes[0]])} >
        <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={picture[imgIndexes[0]]}  alt="pic1" />
      </div>
      <div className={`w-121 h-163 md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] ${selectedImgIndex === 1 && counting > 0 ? "border-4 border-orange" : ""}`} onClick={() => handleImgClick(1, picture[imgIndexes[1]])}>
        <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={picture[imgIndexes[1]]} alt="pic2" />
      </div>
      <div className={`w-121 h-163 md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] ${selectedImgIndex === 2 && counting > 0 ? "border-4 border-orange" : ""}`} onClick={() => handleImgClick(2, picture[imgIndexes[2]])}>
        <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={picture[imgIndexes[2]]} alt="pic3" />
      </div>
      <div className={`w-121 h-[163px] md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] ${selectedImgIndex === 3 && counting > 0? "border-4 border-orange" : ""}`} onClick={() => handleImgClick(3, picture[imgIndexes[3]])}>
        <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={picture[imgIndexes[3]]} alt="pic4" />
      </div>
    </div>
  );
}

export default Body;