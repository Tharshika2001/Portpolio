import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#111827] text-gray-400 py-6 text-center'>

     <div className='container p-4 md:p-12 justify-between 
      flex flex-col md:flex-row items-center gap-4 md:gap-0'>

        <div className='text-white text-2xl font-black cursor-pointer'>
            PORTFOLIO<span className='text-primary'>.</span>
        </div>
        <p className='text-slate-600 text-sm md:text-base'>
            All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;