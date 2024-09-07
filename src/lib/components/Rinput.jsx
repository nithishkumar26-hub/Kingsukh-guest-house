import React, { useState } from 'react'

export const Rinput = (props) => {
  const [isFocused,setIsFocused]=useState(false)
  const [hasValue,sethasValue]=useState(false);

  const handleFocus = () =>{
    setIsFocused(true)
  }

  const handleBlur =(e) =>{
    setIsFocused(false)
    sethasValue(e.target.value !== "")
  }
  
  return (
    
    <>
      
      <input id="myInput" className='w-full resize-none py-[5px] px-0  placeholder-[#333]
      outline-none border-b-[#777] border-b text-lg font-light text-[#333]'
       type={props.type}  onFocus={handleFocus} onBlur={(e)=>handleBlur(e)} />
      <span className={`absolute left-0  py-[5px] pointer-events-none text-lg font-light duration-300 transition-all"
      ${ isFocused || hasValue ? "top-0 -translate-y-5 text-xs text-[#e82574] font-medium tracking-[1px]" : ""}`}>
      {props.placeholder}</span>
    </>
    
  )
}


