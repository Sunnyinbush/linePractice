import React, { useState, useEffect } from "react";

function Body({ picture }) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(-1);
  const [count, setCount] = useState(0);
  const [imgIndexes, setImgIndexes] = useState([]);
  const [list1,setList1] = useState([]);
  const [list2,setList2] = useState([]);
  const [list3,setList3] = useState([]);
  const [list4,setList4] = useState([]);
  const [list5,setList5] = useState([]);
  const [counting,setCounting] = useState(0);

  
  const handleImgClick = (index, src) => {
    const picLink = "localhost:3000" + src;
    setSelectedImgIndex(index);
    setCounting((prevCounting) => prevCounting + 1);
    
    if (list1.length === 0) {
      setList1([picLink]);
    } else if (list2.length === 0) {
      setList2([picLink]);
    } else if (list3.length === 0) {
      setList3([picLink]);
    } else if (list4.length === 0) {
      setList4([picLink]);
    } else if (list5.length === 0) {
      setList5([picLink]);
    } else if (list1.length === 1) {
      setList2((list) => [...list, picLink]);
    } else if (list2.length === 2) {
      setList3((list) => [...list, picLink]);
    } else if (list3.length === 3) {
      setList4((list) => [...list, picLink]);
    } else if (list4.length === 4) {
      setList5((list) => [...list, picLink]);
    } else {
      setList5((list) => [...list, picLink]);
    }
  };
  
  
  
 
  // const getRandomInts = (n, max) => {
  //   const arr = [];
  //   while (arr.length < n) {
  //     const r = Math.floor(Math.random() * max);
  //     if (!arr.includes(r)) {
  //       arr.push(r);
  //     }
  //   }
  //   return arr;
  // };



  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      
    }, 5000);
  
    if (count === 5) {
      clearInterval(interval);
    } else {
      const newImgIndexes = [0,1,2,3];
      setImgIndexes(newImgIndexes);
      setSelectedImgIndex(-1); // reset selected image index
      setCounting(0); // reset counting state
    }
    return () => clearInterval(interval);
  }, [count, picture]);


  useEffect(() => {
    if (selectedImgIndex === -1 && imgIndexes.length > 0) {
      handleImgClick(4, picture[imgIndexes[4]]);
    }
  }, [selectedImgIndex, imgIndexes, picture, handleImgClick]);

  useEffect(() => {
    if (count === 0){
      console.log(list1);
    }
    else if (count === 1){
      console.log(list2);
    }
    else if (count === 2){
      console.log(list3);
    }
    else if (count === 3){
      console.log(list4);
    }
    else if (count === 5){
      console.log(list5);
    };
      
  }, [list1,list2,list3,list4,list5]);

  

  return (
    <div className="h-[200px] grid grid-cols-2 gap-2 lg:gap-2 md:gap-3 content-around justify-items-center mt-71 sm:mt-[90px] md:mt-180 ml-16 mr-16">
      <div className={`w-121 h-163 md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] ${selectedImgIndex === 0 && counting > 1  ? "border-4 border-orange" : ""}`}   onClick={() => handleImgClick(0, picture[imgIndexes[0]])} >
        <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={picture[imgIndexes[0]]}  alt="pic1" />
      </div>
      <div className={`w-121 h-163 md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] ${selectedImgIndex === 1 && counting > 1 ? "border-4 border-orange" : ""}`} onClick={() => handleImgClick(1, picture[imgIndexes[1]])}>
        <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={picture[imgIndexes[1]]} alt="pic2" />
      </div>
      <div className={`w-121 h-163 md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] ${selectedImgIndex === 2 && counting > 1 ? "border-4 border-orange" : ""}`} onClick={() => handleImgClick(2, picture[imgIndexes[2]])}>
        <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={picture[imgIndexes[2]]} alt="pic3" />
      </div>
      <div className={`w-121 h-[163px] md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] ${selectedImgIndex === 3 && counting > 1? "border-4 border-orange" : ""}`} onClick={() => handleImgClick(3, picture[imgIndexes[3]])}>
        <img className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]" src={picture[imgIndexes[3]]} alt="pic4" />
      </div>
      <div className="h-0 w-0" >
        <img className="w-0 h-0" src={picture[imgIndexes[4]]} alt="empty" onClick={() => handleImgClick(5, picture[imgIndexes[4]])}/>
      </div>
    </div>
  );
}

export default Body;
