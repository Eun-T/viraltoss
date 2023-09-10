"use client"

import React, { useEffect, useState } from 'react'

type Props = {}

const Worry = (props: Props) => {

  const [isHover,setIsHover] = useState(false)
  
  const mouseEnter = () => {
    setIsHover(true)

  }

  const leaveMouseEnter = () => {
    setIsHover(false)

  }

  useEffect(() => {
    // console.log(isHover)
  })

  return (
    <section className='w-full bg-[#f4f4f4]' onMouseEnter={mouseEnter} onMouseLeave={leaveMouseEnter}>
      <div className='w-[92%] max-w-[1140px] py-[80px] text-center mx-auto leading-[1.6] '>
        <h1 className={'text-[40px] font-[700] '}>걱정말고 신청하세요</h1>
        <span className='font-[600] bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500'>Don't Worry</span>
      </div>
    </section>
  )
}
//text-gradient-to-r from-green-500 to-blue-500
export default Worry