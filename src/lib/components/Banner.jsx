import React from 'react'

export const Banner = () => {
  return (
    <div>
        <section className='max-w-[1200px] m-auto px-4 pt-20 py-32'>
            <div className='p-8 flex gap-8 items-center justify-evenly flex-wrap rounded-[10px]'
           style={{boxShadow:"5px 5px 20px rgba(0,0,0,0.1)"}}>
                <div className='text-center flex-grow flex-shrink basis-[180px]'>
                    <h4 className='text-[2rem] font-semibold text-[#0c0a09]'>100+</h4>
                    <p className='text-[#78716c]'>Bookings Completed</p>
                </div>
                <div className='text-center flex-grow flex-shrink basis-[180px]'>
                    <h4 className='text-[2rem] font-semibold text-[#0c0a09]'>150+</h4>
                    <p className='text-[#78716c]'>Happy Customers</p>
                </div>
            </div>
        </section>
    </div>
  )
}
