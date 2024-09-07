import React from 'react'

export const Section = (props) => {
  return (
    <div>
        <section className='pt-0 pb-0 max-w-[1200px] m-auto py-20 px-4' id={props.id}>
            <div className='p-[2rem] flex items-center justify-center
            flex-wrap gap-4 bg-white rounded-[10px] -translate-y-[50%] ' style={{boxShadow:"5px 5px 20px rgba(0,0,0,0.1)"}}>
                <div className='fle items-center justify-center gap-4'>
                    <a href='https://wa.link/at5ion'>
                        <button className='py-3 px-6 outline-none border-none text-base font-medium
                        text-white bg-[#e82574] rounded-[5px] cursor-pointer transition-all duration-300
                        hover:bg-[#bc1c5c]'>BOOK NOW</button>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}
