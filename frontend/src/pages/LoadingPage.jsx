import React from 'react';

const LoadingPage = () => {
  return (
    <div className="absolute top-0 right-0 div h-screen w-screen bg-white flex items-center justify-center z-40">
      <div className="loaderReapper w-2/3 h-2/3 flex  items-center justify-center">
        <img
          className="width:{100%}"
          src="https://i.pinimg.com/originals/c1/bc/d8/c1bcd8a8c945b53da6b29f10a2a553c0.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoadingPage;
