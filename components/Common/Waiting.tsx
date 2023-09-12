import React from 'react'

type Props = {}
//hover:animate-[imageUp_1s_ease_infinite]
const Waiting = (props: Props) => {
  return (
    <section className='w-full'>
      <div className='w-[92%] max-w-[1140px] mx-auto relative py-[80px] px-[70px] bg-[#fff] rounded-[30px]'>
        <p className='text-center text-[45px] font-[700] mb-[60px]'>수많은 커뮤니티가 당신을 기다리고 있습니다</p>
        <div className='flex flex-wrap justify-center gap-[40px]'>
          <div className='w-[135px] hover:-translate-y-[20px] duration-700'>
            <img src="images/dc.svg" alt="nate" className='w-full'/>
          </div>
          <div className='w-[135px] hover:-translate-y-[20px] duration-700'>
            <img src="images/ruri.svg" alt="ruri" className='w-full'/>
          </div>
          <div className='w-[135px] hover:-translate-y-[20px] duration-700'>
            <img src="images/namo.svg" alt="nate" className='w-full'/>
          </div>
          <div className='w-[135px] hover:-translate-y-[20px] duration-700'>
            <img src="images/nate.svg" alt="nate" className='w-full'/>
          </div>
          <div className='w-[135px] hover:-translate-y-[20px] duration-700'>
            <img src="images/fm.svg" alt="nate" className='w-full'/>
          </div>
          <div className='w-[135px] hover:-translate-y-[20px] duration-700'>
            <img src="images/dog.svg" alt="nate" className='w-full'/>
          </div>
          <div className='w-[135px] hover:-translate-y-[20px] duration-700'>
            <img src="images/women.svg" alt="nate" className='w-full'/>
          </div>
          <div className='w-[135px] hover:-translate-y-[20px] duration-700'>
            <img src="images/arche.svg" alt="nate" className='w-full'/>
          </div>
          <div className='w-[135px] hover:-translate-y-[20px] duration-700'>
            <img src="images/cli.svg" alt="nate" className='w-full'/>
          </div>
          <div className='w-[135px] hover:-translate-y-[20px] duration-700'>
            <img src="images/instiz.svg" alt="nate" className='w-full'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Waiting