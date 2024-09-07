import React from 'react'

import { Rinput } from './Rinput'
import { Rtextarea } from './Rtextarea'

export const Contact1 = () => {
  return (
    <div className='absolute py-[70px] px-[50px] pl-[250px] ml-[150px]  shadow-[0_50px_50px_rgba(0,0,0,0.25)]
    w-[950px] h-full bg-white rounded-[22px] max-[991px]:w-full max-[991px]:h-auto max-[991px]:rounded-none
    max-[1200px]:relative max-[1200px]:w-[calc(100%_-_350px)]  max-[1200px]:ml-0 max-[1200px]:p-[40px]
    max-[1200px]:h-[550px] max-[1200px]:shadow-none max-[1200px]:rounded-none max-[600px]:p-[25px]' 
   >
        <h2 className='text-2xl font-medium text-[#e82574]'>Send a Message</h2>
        <div className='relative flex justify-between flex-wrap pt-[30px]'>
            <div className='w-[47%] max-[600px]:w-full relative mb-[35px]'>
              <Rinput type={"text"} placeholder={"First Name"}/>
            </div>
            <div className='w-[47%] max-[600px]:w-full relative mb-[35px]'>
              <Rinput type={"text"} placeholder={"Last Name"}/>
            </div>
            <div className='w-[47%] max-[600px]:w-full relative mb-[35px]'>
              <Rinput type={"email"} placeholder={"Email Address"}/>
            </div>
            <div className='w-[47%] max-[600px]:w-full relative mb-[35px]'>
              <Rinput type={"number"} placeholder={"Mobile Number"}/>
            </div>
            <div className='w-full relative mb-[35px]'>
              <Rtextarea placeholder={"Write your message here..."}/>
            </div>
            <div className='w-full relative mb-[35px]'>
              <button className='relative cursor-pointer bg-[#e82574] rounded-[20px] text-white border-none
              max-w-[150px] p-3 font-light text-lg outline-none resize-none w-full'>Send</button>
            </div>
        </div>
    </div>
  )
}
