import React from 'react'
import brand from '@/love/dFunction/gBrand';


const Loader = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen body-font bg-[#F0A07B] dark:bg-[#4A274F] text-[#4A274F] dark:text-[#F0A07B]">          
      <img src={brand().logo} alt={brand().name} className='w-1/12' />
      {text || "Loading..."}
    </div>
  )
}

export default Loader