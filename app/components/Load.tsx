/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Load = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl mr-2">Loading</div>
        <img
          src="/gifs/gears.gif"
          style={{ width: '100px', display: 'block' }}
          alt="..."
        />
      </div>
    );
  };
  
  export default Load;