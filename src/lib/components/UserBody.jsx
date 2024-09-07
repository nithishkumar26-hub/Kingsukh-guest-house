import React from 'react'
import  '../../App.css'
import { Header } from "./Header"
import { Section } from './section'
import { About } from './About'
import { Livingroom } from './Livingroom'
import { Services } from './Services'
import { Banner } from './Banner'
import { Gallary } from './Gallary'
import { Contact } from './Contact'
import { Mapcontainer } from './Mapcontainer'
import { Footer } from './Footer'


export const UserBody = () => {
    

  return (
      <div className='h-full w-full font-poppins scroll-smooth'>
        <Header/>
        <Section />
        <About id={"about"}/>
        <Livingroom id={"room"}/>
        <Services id={"service"}/>
        <Banner/>
        <Gallary id={"gallary"}/>
        <Contact id={"contact"}/>
        <Mapcontainer/>
        <Footer/>
    
      </div>
        
   
  )
}
