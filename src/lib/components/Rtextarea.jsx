import React from 'react'
import { useState } from 'react';

export const Rtextarea = (props) => {
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
            <textarea id="myInput" className={` w-full h-[120px] resize-none py-[5px] px-0 text-lg font-light text-[#333] placeholder-[#333]
            outline-none border-b-[#777] border-b focus:outline-none`} 
            type={props.type}  onFocus={handleFocus} onBlur={(e)=>handleBlur(e)} ></textarea>
            <span className={`absolute left-0  py-[5px] pointer-events-none text-lg font-light transition-all duration-300
            ${ isFocused || hasValue ? "top-0 -translate-y-5 text-xs text-[#e82574] font-medium tracking-[1px]" : ""}`}>
            {props.placeholder}</span>
        </>
    
    )
}
