import React from 'react'

type Props = {}

const Outbox = (props: Props) => {
  return (
    <div className='fixed w-full h-full top-0 left-0 z-[100] flex justify-center items-center overflow-'>
      <div className='w-full h-full bg-black opacity-60 absolute'></div>
      <div className='bg-white w-[1000px] h-[450px] z-10 rounded-[30px] px-[30px] py-[20px]'>
        123
      </div>
    </div>
  )
}

export default Outbox