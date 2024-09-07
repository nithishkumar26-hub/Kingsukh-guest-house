import React, { useRef, useState,useEffect } from 'react'
import "../../App.css"
import Gate from "../../assets/out.jpg"
import Ayodhya from "../../assets/ayodhya.webp"
import Large from "../../assets/large.jpg"
import Palash from "../../assets/palash.webp"
import Small from "../../assets/small.jpg"
import Baranti from "../../assets/baranti.webp"
import Reception from "../../assets/recep.jpg"
import Flower from "../../assets/flower.jpg"
import Room from "../../assets/room1.jpg"
import Dam from "../../assets/mithonDam.webp"

export const Gallary = (props) => {
  const [isVisible,setisVisible]=useState(false);
  const sectionRef=useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setisVisible(true); // Set isVisible to true when section is in the viewport
            }
        },
        { threshold: 0.2 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
    };
  }, []);
  return (
    <section  id={props.id} ref={sectionRef}>
        <div>
            <p className={`${isVisible ? "transformation trans1" : "initial"} trans1 text-center mb-2 relative font-medium tracking-[2px] text-[#0c0a09] text-base
                    after:absolute after:top-1/2 after:translate-x-4 after:-translate-y-1/2 after:h-[2.5px] after:w-16 
                    after:bg-[#e82574] `}>
                GALLARY
            </p>
        </div>
        <div className='w-full mt-[30px] custom-grid-template '>
          <div className='row-span-2 row-end-auto relative bg-[#ccc]'>
            <img src={Gate} alt='gate' className='absolute top-0 left-0 w-full h-full object-cover'/>
          </div>
          <div className='col-span-2 col-end-auto relative bg-[#ccc]'>
            <img src={Ayodhya} alt='Ayodhya' className='absolute top-0 left-0 w-full h-full object-cover'/>
          </div>
          <div className=' relative bg-[#ccc]'>
            <img src={Large} alt='Large room' className='absolute top-0 left-0 w-full h-full object-cover'/>
          </div>
          <div className=' relative bg-[#ccc]'>
            <img src={Palash} alt='Palash' className='absolute top-0 left-0 w-full h-full object-cover'/>
          </div>
          <div className=' relative bg-[#ccc]'>
            <img src={Small} alt='Small room' className='absolute top-0 left-0 w-full h-full object-cover'/>
          </div>
          <div className='col-span-2 col-end-auto relative bg-[#ccc]'>
            <img src={Baranti} alt='Baranti' className='absolute top-0 left-0 w-full h-full object-cover'/>
          </div>
          <div className=' relative bg-[#ccc]'>
            <img src={Reception} alt='Reception' className='absolute top-0 left-0 w-full h-full object-cover'/>
          </div>
          <div className='col-span-1 col-end-auto relative bg-[#ccc]'>
            <img src={Flower} alt='flower' className='absolute top-0 left-0 w-full h-full object-cover'/>
          </div>
          <div className='col-span-2 col-end-auto relative bg-[#ccc]'>
            <img src={Room} alt='Room1' className='absolute top-0 left-0 w-full h-full object-cover'/>
          </div>
          <div className=' relative bg-[#ccc]'>
            <img src={Dam} alt='Mithon Dam' className='absolute top-0 left-0 w-full h-full object-cover'/>
          </div>
        </div>
    </section>
  )
}
