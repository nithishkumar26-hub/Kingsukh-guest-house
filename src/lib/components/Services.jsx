import React, { useRef, useState,useEffect } from 'react'
import "../../App.css"
import Palash from "../../assets/palash.webp"
import Shield from "../../assets/ri--shield-star-line.svg"
import Hours from "../../assets/ri--24-hours-line.svg"
import Restaurant from "../../assets/ri--restaurant-2-fill.svg"
import Map from "../../assets/ri--map-2-line.svg"
export const Services = (props) => {
    const [isVisible,setisVisible]=useState(false);
    const [isVisible1,setisVisible1]=useState(false);
    const [isVisible2,setisVisible2]=useState(false);
    const [isVisible3,setisVisible3]=useState(false);
    const sectionRef=useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setisVisible(true); // Set isVisible to true when section is in the viewport
                    setisVisible1(true);
                    setisVisible2(true);
                    setisVisible3(true);
                }
            },
            { threshold: 0.7 } // Trigger when 10% of the section is visible
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
        <section className='bg-center bg-cover bg-no-repeat ' ref={sectionRef}  style={{ backgroundImage:`url(${Palash})` }} id={props.id} >
            <div className='px-4 m-auto max-w-[1200px] grid grid-cols-2'>
                <div className='py-8 px-16 bg-white col-start-1 col-end-3 md:col-start-2 md:col-end-3'>
                    <p className='mb-2 relative font-medium tracking-[2px] text-[#0c0a09] 
                    after:absolute after:top-1/2 after:-translate-y-1/2 after:h-[2.5px] after:w-16 
                    after:bg-[#e82574] after:ml-4'>
                        SERVICES
                    </p>
                    <div className='max-w-[600px] mb-4 text-[2.5rem] font-semibold leading-[3rem] text-[#0c0a09]'>
                        Strive Only For The Best.
                    </div>
                    <ul className='list-none mt-8 gap-8 grid'>
                        <li className={`${isVisible ? "transformation" : "initial initialli"} flex items-center gap-4 text-[1.2rem] font-medium 
                        text-[#0c0a09]`}>
                               <span className='py-[12px] px-3 bg-[#dbeafe] text-[1.75rem] rounded-full '>
                                    <img src={Shield} alt="shield" className='w-[30px] h-[30px]'/>
                               </span>
                               High Class Security
                        </li>
                        <li className={`${isVisible1 ? "transformation trans1" : "initial initialli"} flex items-center gap-4 text-[1.2rem] font-medium 
                        text-[#0c0a09]`}>
                               <span className='py-[12px] px-3 bg-[#fce7f3] text-[1.75rem] rounded-full '>
                                    <img src={Hours} alt="shield" className='w-[30px] h-[30px]'/>
                               </span>
                               24 Hours Room Service
                        </li>
                        <li className={`${isVisible2 ? "transformation trans2" : "initial initialli"} flex items-center gap-4 text-[1.2rem] font-medium 
                        text-[#0c0a09]`}>
                               <span className='py-[12px] px-3 bg-[#f3e8ff] text-[1.75rem] rounded-full '>
                                    <img src={Restaurant} alt="shield" className='w-[30px] h-[30px]'/>
                               </span>
                               Restaurant
                        </li>
                        <li className={`${isVisible3 ? "transformation trans3" : "initial initialli"} flex items-center gap-4 text-[1.2rem] font-medium 
                        text-[#0c0a09]`}>
                               <span className='py-[12px] px-3 bg-[#ffe4e6] text-[1.75rem] rounded-full '>
                                    <img src={Map} alt="shield" className='w-[30px] h-[30px]'/>
                               </span>
                               Tourist Guide Support
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}
