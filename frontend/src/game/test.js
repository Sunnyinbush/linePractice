import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

const TwoThumbs = ({ rtl }) => {
  const [values, setValues] = useState([25, 75]);

  return (
    <div className="flex justify-center flex-wrap">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
            className="h-9 flex w-full"
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#ccc', '#548BF4', '#ccc'],
                  min: MIN,
                  max: MAX,
                  rtl
                }),
                alignSelf: 'center'
              }}
              className="h-1 w-full rounded-2xl"
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA'
            }}
            className="h-10 w-10 rounded-2xl bg-white flex items-center justify-center shadow"
          >
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#548BF4' : '#CCC'
              }}
              className={`${isDragged ? 'bg-blue-500' : 'bg-gray-300'} h-4 w-1 rounded-full`}
            />
          </div>
        )}
      />
      <output className="mt-6" id="output">
        {values[0].toFixed(1)} - {values[1].toFixed(1)}
      </output>
    </div>
  );
};

export default TwoThumbs;
