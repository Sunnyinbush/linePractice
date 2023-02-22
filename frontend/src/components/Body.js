import React from "react";

function Body({ picture }) {
  if (picture.length === 0) {
    return <div>No pictures to display</div>;
  }

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

  const picIndexes = getRandomInts(4, picture.length);

  return (
    <div className="h-[200px] grid grid-cols-2 gap-2 lg:gap-2 md:gap-3 content-around justify-items-center mt-71 sm:mt-[90px] md:mt-180 ml-16 mr-16">
      <img
        className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]"
        src={picture[picIndexes[0]]}
        alt="pic1"
      />
      <img
        className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]"
        src={picture[picIndexes[1]]}
        alt="pic2"
      />
      <img
        className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]"
        src={picture[picIndexes[2]]}
        alt="pic3"
      />
      <img
        className="w-121 h-156 md:w-173 md:h-248 sm:w-[130px] sm:h-[180px]"
        src={picture[picIndexes[3]]}
        alt="pic4"
      />
    </div>
  );
}

export default Body;
