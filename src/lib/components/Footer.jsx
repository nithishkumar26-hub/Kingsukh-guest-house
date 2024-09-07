import React from 'react'
import Fb from "../../assets/facebook-1.png"
import Insta from "../../assets/instagram-1.png"
import Youtube from "../../assets/youtube.png"
import twitter from "../../assets/twitter-1.png"

export const Footer = () => {
  return (
    <footer className='bg-[#0c0a09]'>
        <div className='grid gap-x-8 gap-y-16 max-w-[1200px] m-auto py-20 px-4 min-[768px]:grid-cols-4
        min-[576px]:grid-cols-2 '>
            <div>
                <div className='max-w-[120px] cursor-pointer'>
                    <a href='#'>
                        <h4 className='mb-8 text-[1.2rem] font-medium text-white'>Kingsukh Guest House</h4>
                    </a>
                </div>
                <p className='mt-8 mb-9 max-w-[600px] text-[#78716c]'>
                    Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels,
                     making every moment of your getaway truly extraordinary.
                </p>
                <a href='https://wa.link/at5ion'>
                    <button className='py-3 px-6 outline-none border-none text-base font-medium
                    text-white bg-[#e82574] rounded-[5px] cursor-pointer transition-all duration-300 hover:bg-[#bc1c5c]'>
                        BOOK NOW
                    </button>
                </a>
            </div>
            <div>
                <h4 className='mb-8 text-[1.2rem] font-medium text-white'>QUICK LINKS</h4>
                <ul className='list-none grid gap-4'>
                    <li>
                        <a className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'
                        href='#'>
                            Browse Destinations
                        </a>
                    </li>
                    <li>
                        <a className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'
                        href='#'>
                            Special Offers & Packages
                        </a>
                    </li>
                    <li>
                        <a className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'
                        href='#'>
                            Room Types & Amenities
                        </a>
                    </li>
                    <li>
                        <a className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'
                        href='#'>
                            Customer Reviews & Ratings
                        </a>
                    </li>
                    <li>
                        <a className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'
                        href='#'>
                            Travel Tips & Guides
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div>
                <h4 className='mb-8 text-[1.2rem] font-medium text-white'>OUR SERVICES</h4>
                <ul className='list-none grid gap-4'>
                    <li>
                        <a className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'
                        href='#'>
                            Concierge Assistance
                        </a>
                    </li>
                    <li>
                        <a className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'
                        href='#'>
                            Flexible Booking Options
                        </a>
                    </li>
                    <li>
                        <a className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'
                        href='#'>
                            Airport Transfers
                        </a>
                    </li>
                    <li>
                        <a className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'
                        href='#'>
                            Wellness & Recreation
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div>
                <h4 className='mb-8 text-[1.2rem] font-medium text-white'>CONTACT US</h4>
                <ul className='list-none grid gap-4'>
                    <li>
                        <a href='https://maps.app.goo.gl/fWtHgSR2phbJHw87A'
                        className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'>
                            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
                        </a>
                    </li>
                    <li>
                        <a href='mailto:kkghosh0099@gmail.com'
                        className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'>
                            kkghosh0099@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href='tel:+919007062180' 
                        className='text-[#78716c] transition-all duration-300 cursor-pointer hover:text-white'>
                            +91 9007062180
                        </a>
                    </li>
                    
                    
                </ul>   
                <div className='mt-8 flex items-center gap-4 flex-wrap'>
                    <a href='#'>
                        <img src={Fb} alt='facebook' 
                        className='max-w-[25px] transition-all duration-300 hover:opacity-[1] opacity-[0.8] cursor-pointer'/>
                    </a>
                    <a href='https://www.instagram.com/kingsukhguesthouse/'>
                        <img src={Insta} alt='Instagram' 
                        className='max-w-[25px] transition-all duration-300 opacity-[0.8] hover:opacity-[1] cursor-pointer'/>
                    </a>
                    <a href='#'>
                        <img src={Youtube} alt='Youtube' 
                        
                        className='max-w-[25px] transition-all duration-300 opacity-[0.8] hover:opacity-[1]  cursor-pointer'/>
                    </a>
                    <a href='#'>
                        <img src={twitter} alt='Twitter' 
                        className='max-w-[25px] transition-all duration-300 opacity-[0.8] hover:opacity-[1] cursor-pointer'/>
                    </a>
                </div>
            </div>
        </div>
        <div className='p-4 text-[0.9rem] text-[#78716c] text-center'>
            Copyright © 2024 Kingsukh Guest House. All rights reserved.
        </div>
    </footer>
  )
}
