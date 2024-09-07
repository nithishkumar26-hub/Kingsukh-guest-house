import React from 'react'
import { useState,useEffect,useRef } from 'react'
import Menu from "../../assets/ri--menu-line.svg"
import Close from "../../assets/ri--close-line.svg"

export const Header = () => {
    const [focus,setFocus]=useState(false);
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

    const handleClick = () =>{
        setFocus(false)
    }

    const handleClickOpen = ()=>{
        setFocus(true)
    }

    useEffect(()=>{
        setisVisible(true);
    },[])

  return (
    <div>
        <header className='background' ref={sectionRef}>
            <nav className='md:py-8 md:px-4 md:static md:flex md:items-center md:justify-between 
            m-auto w-full isolate max-w-[1200px] fixed top-0 z-10 '>
                <div className='p-4 flex items-center justify-between gap-8 bg-[#e82574] md:p-0 md:bg-transparent'>
                <div className='max-w-[120px]'>
                    <a href='https://wa.link/at5ion' >
                    <span className='text-[aliceblue] cursor-pointer'>Kingsukh Guest House</span>
                    </a>
                </div>
                <div className='text-[1.5rem] text-white cursor-pointer md:hidden'>
                    <div >

                    {focus ? 
                    <img src={Close} alt='menu' className='w-[24px] h-[24px] text-white' onClick={handleClick}/>
                    :
                    <img src={Menu} alt='menu' className='w-[24px] h-[24px] text-white' onClick={handleClickOpen}/>
                    }
                    
                    </div>

                </div>
                </div>
                <ul className={` anchor list-none absolute w-full p-8 flex items-center flex-col 
                gap-8 bg-[#bc1c5ce6] transition-all duration-500  z-[-1] 
                ${focus ? "translate-y-0" : "-translate-y-full"} md:p-0 md:[width:unset]
                md:static md:transform-none md:flex-row md:bg-transparent`}>
                    <li>
                        <a  href='#home' onClick={handleClick}>Home</a>
                    </li>
                    <li>
                        <a  href='#about' onClick={handleClick}>About</a>
                    </li>
                    <li>
                        <a  href='#service' onClick={handleClick}>Services</a>
                    </li>
                    <li>
                        <a  href='#room' onClick={handleClick}>Rooms</a>
                    </li>
                    <li>
                        <a href='#gallary' onClick={handleClick}>Gallary</a>
                    </li>
                    <li>
                        <a href='#contact' onClick={handleClick}>Contact</a>
                    </li>
                </ul>

                <a href='https://wa.link/at5ion'>
                    <button className='py-3 px-6 text-base font-medium bg-[#e82574] 
                    text-white rounded-[5px] cursor-pointer hover:bg-[#bc1c5c] transition-all 
                    duration-300 outline-none border-none hidden md:block' >
                    BOOK NOW
                    </button>
                </a>
            
            </nav>
            <div className='pt-40 pb-60 max-w-[1200px] m-auto  px-4 py-20' id='home'>
            <p className={`${isVisible ? "transformation opacity-60" : "initial"} mb-4 
            text-[1.2rem] text-center text-white`}>Simple - Unique - Friendly</p>
            <h1 className={`${isVisible ? "transformation trans1" : "initial"} text-[4rem] font-medium 
            text-white text-center leading-[4.5rem] ` }
            >
                Make Yourself At Home
                <br/>
                In Our
                <span className='text-[#e82574]'> Guest House</span>
                .
            </h1>
            </div>
        </header>
    </div>
  )
}
