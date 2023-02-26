import React, { useState, useEffect, useCallback } from "react";
import liff from '@line/liff';
import axios from "axios";
// import Progress from "./progress";

function Body({ picture, picture2, picture3, picture4, picture5}) {
  const [selectedImgIndex, setSelectedImgIndex] = useState(-1);
  const [count, setCount] = useState(1);
  const [imgIndexes, setImgIndexes] = useState([]);
  const [list,setList] = useState([]);
  const [list2,setList2] = useState([]);
  const [list3,setList3] = useState([]);
  const [list4,setList4] = useState([]);
  const [list5,setList5] = useState([]);
  
  const [counting,setCounting] = useState(0);
  const [name, setName] = useState('');
  const [userLineID, setUserLineID] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  // const [done,setDone] = useState('0')
  
  useEffect(() => {
    const initLine = async () => {
      try {
        await liff.init({ liffId: '1657442367-JL8n6BYl' });
        if (liff.isLoggedIn()) {
          const getProfile = await liff.getProfile();
          setName(getProfile.displayName);
          setUserLineID(getProfile.userId);
          setPictureUrl(getProfile.pictureUrl);
          const message = {
            groupId : 'C29a0bbf62743fb10aaa004df79e67fcd',
            userId: userLineID,
            gameResult: [1,2,3,4]
          }
          console.log(message)
          // Send POST request with userLineID
          //const response = await axios.post('https://78c9-49-237-39-230.ap.ngrok.io/api/liff/game', { message });
          //console.log(response.data);
          
        } else {
          liff.login();
        }
      } catch (error) {
        throw error;
      }
    };
    initLine();
  }, []);

  
  const handleImgClick = useCallback((index, src) => {
    if (count === 2 && counting<1) {
      setList2((prevList) => [...prevList, "localhost:3000" + src]);
      setCounting(1);
    } 
    if (count===3 && counting<1){
      setList3((prevList) => [...prevList, "localhost:3000" + src]);
  }
    if (count === 1 && counting<1) {
      setList((prevList) => [...prevList, "localhost:3000" + src]);
    }
    if (count === 4 && counting<1){
      setList4((prevList) => [...prevList, "localhost:3000" + src]);
    }
    if (count=== 5 && counting<1){
      setList5((prevList) => [...prevList, "localhost:3000" + src]);
    }
    setSelectedImgIndex(index);
    setCounting((prev) => prev+1);
    
    console.log(count);
    console.log("List 1:", list);
    console.log("List 2:", list2);
    console.log("List 3:", list3);
    console.log("List 4:", list4);
    console.log("List 5:", list5);

  }, [count, counting, picture.length, setList, setList2, setList3, setSelectedImgIndex, setCounting, setImgIndexes]);

    
  
 
  const getRandomInts = (n, min, max) => {
    const arr = [];
    while (arr.length < n) {
      const r = Math.floor(Math.random() * (max - min + 1)) + min;
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
  
    if (count === 1) {
      setImgIndexes(getRandomInts(4, 0, 3));
    } else if (count === 2) {
      setImgIndexes(getRandomInts(4, 4, 7));
    } else if (count === 3) {
      setImgIndexes(getRandomInts(4, 8, 11));
    } else if (count === 4) {
      setImgIndexes(getRandomInts(4, 12, 15));
    } else if (count === 5) {
      setImgIndexes(getRandomInts(4, 16, 19));
      
    } 
    else{
      clearInterval(interval);
      liff.closeWindow();
      // setDone(1);
      try{
        const endGame ={
          "functionName": "finishGame",
          "userId": userLineID,
          "groupId": "C29a0bbf62743fb10aaa004df79e67fcd"
      };
         const end = axios.post('https://78c9-49-237-39-230.ap.ngrok.io/webhook',endGame);
         console.log(end.data);
      }catch(error){
        throw error;
      }
    
    }
  
    // Clear the orange border
    setSelectedImgIndex(-1);
  
    return () => clearInterval(interval);
  }, [count, picture.length]);
  

 

  return (
    <div>
   
   <div className="h-[250px] flex flex-wrap justify-center items-center  mx-16 ">
   <div className={`w-121 h-163 md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] mr-[1px] md:mr-[5px] lg:mr-[10px] mt-[5px] ${selectedImgIndex === 0 && counting > 0 ? "border-4 border-orange" : ""}`} onClick={() => handleImgClick(0, picture[imgIndexes[0]])}>
    <img className="rounded-md w-full h-full object-cover" src={picture[imgIndexes[0]]} alt="pic1" />
    {selectedImgIndex === 0 && counting > 0 && (
      <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-10"></div>
    )}
  </div>
  <div className={`w-121 h-163 md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] ml-[1px] md:ml-[5px] lg:ml-[10px] mt-[5px] ${selectedImgIndex === 1 && counting > 0 ? "border-4 border-orange" : ""}`} onClick={() => handleImgClick(1, picture[imgIndexes[1]])}>
    <img className="rounded-md w-full h-full object-cover" src={picture[imgIndexes[1]]} alt="pic2" />
    {selectedImgIndex === 1 && counting > 0 && (
      <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-10"></div>
    )}
  </div>
  <div className={`w-121 h-163 md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] mr-[1px] md:mr-[5px] lg:mr-[10px] mt-[5px] ${selectedImgIndex === 2 && counting > 0 ? "border-4 border-orange" : ""}`} onClick={() => handleImgClick(2, picture[imgIndexes[2]])}>
    <img className="rounded-md w-full h-full object-cover" src={picture[imgIndexes[2]]} alt="pic3" />
    {selectedImgIndex === 2 && counting > 0 && (
      <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-10"></div>
    )}
  </div>
  <div className={`w-121 h-163 md:w-173 md:h-[255px] sm:w-[130px] sm:h-[180px] mr-[1px] md:mr-[5px] lg:ml-[10px] mt-[5px] ${selectedImgIndex === 3 && counting > 0 ? "border-4 border-orange" : ""}`} onClick={() => handleImgClick(3, picture[imgIndexes[3]])}>
    <img className="rounded-md w-full h-full object-cover" src={picture[imgIndexes[3]]} alt="pic3" />
    {selectedImgIndex === 3 && counting > 0 && (
      <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-10"></div>
    )}
  </div>
</div>





    
    </div>
  );
}

export default Body;