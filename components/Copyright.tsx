import React from 'react';

const Copyright: React.FC = () => {
  return (
    <div className="flex flex-col pb-6 mt-12 w-full text-sm leading-tight text-center text-zinc-500 max-md:mt-10 max-md:max-w-full">
      <div className="w-full min-h-0 border border-solid bg-neutral-500 border-neutral-500 max-md:max-w-full" />
      <div className="flex flex-wrap gap-6 justify-between items-center mt-6 w-full max-md:max-w-full">
        <div className="w-full flex justify-center md:gap-1">
          <div className=' sm:flex items-center'>
          <span>
          © 2025 Zenqor - All Rights Reserved  |  Privacy and Policy. 
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;