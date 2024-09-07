import React, { useEffect, useState,useRef } from 'react'
import "../../App.css"
import Smallroom from "../../assets/small.jpg"
import Largeroom from "../../assets/large.jpg"
import Heart from "../../assets/ri--heart-fill.svg"
import Paint from "../../assets/ri--paint-fill.svg"
import Shield from "../../assets/ri--shield-star-line.svg"

export const Livingroom = (props) => {
    const [isVisible,setisVisible]=useState(false);
    const sectionRef=useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setisVisible(true); // Set isVisible to true when section is in the viewport
                }
            },
            { threshold: 0.4 } // Trigger when 10% of the section is visible
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
    <div>
        <section className='max-w-[1200px] m-auto py-20 px-4' id={props.id} ref={sectionRef}>
            <div className='flex flex-row'>
                <p className=' mb-2 relative font-medium 
                tracking-[2px] text-[#0c0a09]'>
                    OUR LIVING ROOM
                </p>
                <hr className='h-[3px] top-2/4 -translate-x-1/2 w-[4.3rem] content-none 
                bg-[#e82574] ml-[50px] mt-[12px]'/>
            </div>
            <h2 className='max-w-[600px] mb-4 text-[2.5rem] font-semibold leading-[3rem] text-[#0c0a09] '>
                The Most Memorable Rest Time Starts Here.
            </h2>
            <div className='mt-16 grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-8'>
                <div className={`${isVisible ? "transformation" : "initial"} rounded-[10px] overflow-hidden shadow-[5px_5px_10px_rgba(0,0,0,0.1)]`}
                >
                    <div className='relative isolate'>
                        <img src={Smallroom} alt='smallroom' />
                        <div className='absolute right-4 bottom-4 w-full flex items-center justify-end
                        flex-wrap gap-4 z-10'>
                            <span className='inline-block text-center py-[8px] px-2  text-2xl bg-white rounded-full
                            cursor-pointer' style={{boxShadow:"5px 5px 10px rgba(0,0,0,0.2)"}}>
                               <img src={Heart} className='w-6 h-6 text-[#f472b6]'/>
                            </span>
                            <span className='inline-block text-center py-[8px] px-2  text-2xl bg-white rounded-full
                            cursor-pointer' style={{boxShadow:"5px 5px 10px rgba(0,0,0,0.2)"}}>
                               <img src={Paint} className='w-6 h-6 '/>
                            </span>
                            <span className='inline-block text-center py-[8px] px-2  text-2xl bg-white rounded-full
                            cursor-pointer' style={{boxShadow:"5px 5px 10px rgba(0,0,0,0.2)"}}>
                               <img src={Shield} className='w-6 h-6 '/>
                            </span>
                        </div>
                    </div>
                    <div className='p-4'>
                        <h4 className='text-[#0c0a09] mb-2 font-medium text-[1.2rem]'>
                            Cozy Haven Room
                        </h4>
                        <p className='mb-2 text-[#78716c] '>
                            Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
                        </p>
                        <h5 className='mb-4 text-base font-medium text-[#78716c]'>
                            Starting from
                            <span className='text-[1.1rem] text-[#0c0a09]'> Rs. 1000/night</span>
                        </h5>
                        <a href='https://wa.link/at5ion'>
                            <button className='mb-2 py-3 px-6 outline-none border-none text-base
                            font-medium text-white bg-[#e82574] rounded-[5px] cursor-pointer
                             transition-all duration-300 hover:bg-[#bc1c5c]'>BOOK NOW</button>
                        </a>
                    </div>
                </div>
                <div className={`${isVisible ? "transformation" : "initial"} rounded-[10px] overflow-hidden`}
                style={{boxShadow:"5px 5px 10px rgba(0,0,0,0.1)"}}>
                    <div className='relative isolate'>
                        <img src={Largeroom} alt='smallroom' />
                        <div className='absolute right-4 bottom-4 w-full flex items-center justify-end
                        flex-wrap gap-4 z-10'>
                            <span className='inline-block text-center py-[8px] px-2  text-2xl bg-white rounded-full
                            cursor-pointer' style={{boxShadow:"5px 5px 10px rgba(0,0,0,0.2)"}}>
                               <img src={Heart} className='w-6 h-6 text-[#f472b6]'/>
                            </span>
                            <span className='inline-block text-center py-[8px] px-2  text-2xl bg-white rounded-full
                            cursor-pointer' style={{boxShadow:"5px 5px 10px rgba(0,0,0,0.2)"}}>
                               <img src={Paint} className='w-6 h-6 '/>
                            </span>
                            <span className='inline-block text-center py-[8px] px-2  text-2xl bg-white rounded-full
                            cursor-pointer' style={{boxShadow:"5px 5px 10px rgba(0,0,0,0.2)"}}>
                               <img src={Shield} className='w-6 h-6 '/>
                            </span>
                        </div>
                    </div>
                    <div className='p-4'>
                        <h4 className='text-[#0c0a09] mb-2 font-medium text-[1.2rem]'>
                            Spacious Serenity Suite
                        </h4>
                        <p className='mb-2 text-[#78716c] '>
                            Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
                        </p>
                        <h5 className='mb-4 font-medium text-[#78716c]'>
                            Starting from
                            <span className='text-[1.1rem] text-[#0c0a09]'> Rs. 1500/night</span>
                        </h5>
                        <a href='https://wa.link/at5ion' >
                            <button className='mb-2 py-3 px-6 outline-none border-none text-base
                            font-medium text-white bg-[#e82574] rounded-[5px] cursor-pointer 
                            transition-all duration-300 hover:bg-[#bc1c5c]'>BOOK NOW</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
