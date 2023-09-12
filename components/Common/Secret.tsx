import React from 'react'

type Props = {}

const Secret = (props: Props) => {
  return (
    <section className='w-full'>
      <div className='w-[92%] max-w-[1140px] mx-auto py-[150px] text-center rounded-[30px] border shadow-[8px_8px_8px_#616161] px-[30px]'>
        <p className='text-[40px] font-[700] mb-[50px]'>귀하의 광고 정보는<br/><strong className='text-red-500'>엄격한 기밀</strong>을 준수하며 <strong className='text-red-500'>안전하게 보호</strong>됩니다!</p>
        <h4 className='text-[16px] text-[#6b7684]'>(타 업체와는 다르게 홈페이지에도 광고주님의 정보를 게시하지 않습니다)</h4>
      </div>
    </section>
  )
}

export default Secret