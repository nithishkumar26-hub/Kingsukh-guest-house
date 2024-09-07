import React from 'react'
import { Contact1 } from './Contact1'
import Location from "../../assets/location.png"
import Mail from "../../assets/mail.png"
import Call from "../../assets/call.png"
import Fb from "../../assets/facebook.png"
import Insta from "../../assets/instagram.png"
import Twitter from "../../assets/twitter.png"
import Linkedin from "../../assets/linkedin.png"


export const Contact = (props) => {
  return (
    <section className='flex justify-center items-center min-h-[100vh] bg-white max-[991px]:flex max-[991px]:justify-center 
    max-[991px]:items-center max-[991px]:min-h-[100vh] max-[991px]:bg-[#e82574]' id={props.id}>
        <div className='relative min-w-[1100px] min-h-[550px] flex  max-[991px]:flex max-[991px]:flex-col-reverse
        max-[1200px]:w-[90%] max-[1200px]:min-w-0 max-[1200px]:m-[20px] max-[1200px]:shadow-[0_20px_50px_rgba(0,0,0,0.2)]' >
            <div className='absolute top-[40px] w-[350px] h-[470px] z-10 p-[40px] flex flex-col justify-between shadow-[0_20px_25px_rgba(0,0,0,0.15)]
            rounded-[22px] bg-[#e82574] max-[991px]:w-full max-[991px]:h-auto max-[991px]:flex-row max-[991px]:rounded-none max-[991px]:z-0
            max-[1200px]:top-0 max-[1200px]:h-[550px] max-[1200px]:relative max-[1200px]:rounded-none max-[1200px]:shadow-none
            max-[600px]:p-[25px] max-[600px]:flex-col max-[600px]:items-start max-[600px]:z-0'
            >
                <div>
                    <h2 className='text-white text-2xl font-medium'>Contact Info</h2>
                    <ul className='my-[20px] mx-0 relative'>
                        <li className='relative list-none flex my-[20px] mx-0 cursor-pointer items-start'>
                            <span>
                                <img src={Location} alt='location' className='w-[30px] h-[30px] invert'/>
                            </span>
                            <span className='text-white ml-[10px] font-light flex flex-col'>
                                <span>Beside Barshal Water Tank</span>
                                <span>Manpur, Barhanti,</span>
                                <span>West Bengal 723156</span>
                            </span>
                        </li>
                        <li className='relative list-none flex my-[20px] mx-0 cursor-pointer items-start'>
                            <span>
                                <img src={Mail} alt='mail' className='w-[30px] h-[30px] invert'/>
                            </span>
                            <span className='text-white ml-[10px] font-light '>
                                <a href='mailto:kkghosh0099@gmail.com'>kkghosh0099@gmail.com</a>
                            </span>
                        </li>
                        <li className='relative list-none flex my-[20px] mx-0 cursor-pointer items-start'>
                            <span>
                                <img src={Call} alt='call' className='w-[30px] h-[30px] invert'/>
                            </span>
                            <span className='text-white ml-[10px] font-light '>
                                <a href='tel:+919007062180'>+91 9007062180</a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className=' max-[991px]:relative max-[991px]:flex max-[991px]:justify-center
                    max-[991px]:items-center max-[600px]:mt-10'>
                    <ul className='relative flex'>
                        <li className='list-none mr-[15px] cursor-pointer'>
                            <a href="#">
                                <img src={Fb} className='invert'/>
                            </a>
                        </li>
                        <li className='list-none mr-[15px] cursor-pointer'>
                            <a href='https://www.instagram.com/kingsukhguesthouse/'>
                                <img src={Insta} className='invert'/>
                            </a>
                        </li>
                        <li className='list-none mr-[15px] cursor-pointer'>
                            <a href='#'>
                                <img src={Twitter} className='invert'/>
                            </a>
                        </li>
                        <li className='list-none mr-[15px] cursor-pointer'>
                            <a href='#'>
                                <img src={Linkedin} className='invert'/>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <Contact1/>
        </div>
    </section>
  )
}
