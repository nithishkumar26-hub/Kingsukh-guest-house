import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import "../../App.css"
import Image from "../../assets/out.jpg"

export const About = (props) => {
    const [isVisible,setisVisible]=useState(false)
    const [isVisible1,setisVisible1]=useState(false);
    const sectionRef=useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setisVisible(true); // Set isVisible to true when section is in the viewport
                    setisVisible1(true);
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
        <section ref={sectionRef} className=' max-w-[1200px] m-auto gap-8 grid md:grid-cols-2 md:items-center overflow-hidden py-20 px-4 ' id={props.id}>
            <div>
                <img src={Image} className={`${isVisible ? "transformation" : "initial initialimg "}
                max-w-[450px] m-auto rounded-[5px] w-full flex`}/>
            </div>
            <div >
                <div className={`flex flex-row ${isVisible ? "transformation trans1" : "initial"}`}>
                    <p className=' mb-2 relative font-medium
                    tracking-[2px] text-[#0c0a09] '>
                        ABOUT US
                    </p>
                    <hr className='h-[3px] top-2/4 -translate-x-1/2 w-[4rem] content-none 
                    bg-[#e82574] ml-[50px] mt-[9px]'/>
                </div>
                <h2 className={`${isVisible ? "transformation trans2" : "initial"} max-w-[600px]
                mb-4 text-[2.5rem] font-semibold leading-[3rem] text-[#0c0a09]`}>
                    The Best Holidays Start Here!</h2>
                <p className={`${isVisible ? "transformation trans3" : "initial"} max-w-[600px] mb-4 
                text-[#78716c] text-[1rem] h-[200px]`}>
                    Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic 
                    allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, 
                    Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort,
                     relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat 
                     beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. 
                     Explore the hidden gems of Purulia, creating memories that linger long after your stay. 
                </p>
                <h4 className='max-w-[600px] visible font-bold  text-[#002bd8] cursor-pointer'>
                    <a href='https://maps.app.goo.gl/fWtHgSR2phbJHw87A' className='active:text-red-500 visited:text-[#551A8B] ' >
                        Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
                    </a>
                </h4>
                <h4 className='max-w-[600px] mb-8 visible font-bold text-[#002bd8]'>
                    <a className='active:text-red-500' href='tel:+919007062180'>
                        Contact us: +91 9007062180
                    </a>
                </h4>
                <div className={`${isVisible1 ? "transformation trans4" : "initial"}`}>
                    <a href='https://wa.link/at5ion'>
                        <button className='py-3 px-6 outline-none border-none text-[1rem] font-medium
                        text-white bg-[#e82574] rounded-[5px] cursor-pointer transition-all duration-300
                        hover:bg-[#bc1c5c]'>
                            BOOK NOW
                        </button>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}
