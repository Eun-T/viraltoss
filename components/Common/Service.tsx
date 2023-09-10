import React from 'react'

type Props = {}

const Service = (props: Props) => {
  return (
    <section className='w-full bg-[#f4f4f4] py-[150px]'>
      <div className='w-[92%] max-w-[1140px] mx-auto'>
        <div className='mb-[80px]'>
          <p className='text-center text-[40px] font-[700] mb-[50px]'>유튜버를 위한 서비스</p>
          <div className='w-full bg--500 rounded-[30px] flex gap-[30px] justify-center flex-wrap'>
              <div className='w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer'>
                <div className='w-full h-[220px] relative'>
                  <div className='w-full h-full opacity-25 absolute bg-black'></div>
                  <img src="images/7000961.jpg" alt="" className='w-full h-full object-cover object-top'/>
                </div>
                <div className='px-[20px] my-[20px]'>
                  <h1 className='font-[700] mb-[5px] text-[20px]'>컨설팅</h1>
                  <p>스포츠에도 전략이 있듯이 유튜브에도 '성공하는 전략'이 있습니다. 바이럴토스는 모든 클라이언트에게 우리만의 '전략'을 제공해 드립니다.</p>
                  {/* <p>바이럴토스는 모든 클라이언트에게 우리만의 '전략'을 제공해 드립니다.</p> */}
                </div>
              </div>
              <div className='w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer'>
                <div className='w-full h-[220px] relative'>
                  <div className='w-full h-full opacity-25 absolute bg-black'></div>
                  <img src="images/popularity.avif" alt="" className='w-full h-full object-contain object-center'/>
                </div>
                <div className='px-[20px] my-[20px]'>
                  <h1 className='font-[700] mb-[5px] text-[20px]'>인기글</h1>
                  <p>유튜브 영상을 캡쳐해서 하나의 스토리를 만들어 드립니다. 이를 국내 다양한 온라인 커뮤니티에
                    게시하여 화제성을 확보하고 인기글 게시판에 노출시킵니다.
                  </p>
                </div>
              </div>
              <div className='w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer'>
                <div className='w-full h-[220px] relative'>
                  <div className='w-full h-full opacity-25 absolute bg-black'></div>
                  <img src="images/consult.jpg" alt="" className='w-full h-full object-cover object-center'/>
                </div>
                <div className='px-[20px] my-[20px]'>
                  <h1>컨설팅</h1>
                  <p>스포츠에도 전략이 있듯이 유튜브에도 '성공하는 전략'이 있습니다.</p>
                  <p>바이럴토스는 모든 클라이언트에게 우리만의 '전략'을 제공해 드립니다.</p>
                </div>
              </div>
          </div>
        </div>
        <div>
          <p className='text-center text-[40px] font-[700] mb-[50px]'>기업을 위한 서비스</p>
          <div className='w-full bg--500 rounded-[30px] flex gap-[30px] justify-center flex-wrap'>
              <div className='w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer'>
                <div className='w-full h-[220px] relative'>
                  <div className='w-full h-full opacity-25 absolute bg-black'></div>
                  <h2 className='text-[10px] absolute right-0 [writing-mode:vertical-lr] top-[10%]'>Designed by stories / Freepik</h2>
                  <img src="images/blog.jpg" alt="" className='w-full h-full object-cover object-top'/>
                </div>
                <div className='px-[20px] my-[20px]'>
                  <h1 className='font-[700] mb-[5px] text-[20px]'>블로그</h1>
                  <p>스포츠에도 전략이 있듯이 유튜브에도 '성공하는 전략'이 있습니다. 바이럴토스는 모든 클라이언트에게 우리만의 '전략'을 제공해 드립니다.</p>
                  {/* <p>바이럴토스는 모든 클라이언트에게 우리만의 '전략'을 제공해 드립니다.</p> */}
                </div>
              </div>
              <div className='w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer'>
                <div className='w-full h-[220px] relative'>
                  <div className='w-full h-full opacity-25 absolute bg-black'></div>
                  <h2 className='text-[10px] absolute right-0 [writing-mode:vertical-lr] top-[10%]'>Designed by Freepik</h2>
                  <img src="images/youtube.jpg" alt="" className='w-full h-full object-cover object-top'/>
                </div>
                <div className='px-[20px] my-[20px]'>
                  <h1 className='font-[700] mb-[5px] text-[20px]'>유튜브</h1>
                  <p>유튜브 영상을 캡쳐해서 하나의 스토리를 만들어 드립니다. 이를 국내 다양한 온라인 커뮤니티에
                    게시하여 화제성을 확보하고 인기글 게시판에 노출시킵니다.
                  </p>
                </div>
              </div>
              <div className='w-[360px] bg-white rounded-[30px] overflow-hidden flex flex-col cursor-pointer'>
                <div className='w-full h-[220px] relative'>
                  <div className='w-full h-full opacity-25 absolute bg-black'></div>
                  <h2 className='text-[10px] absolute right-0 [writing-mode:vertical-lr] top-[10%]'>Designed by studiogstock / Freepik</h2>
                  <img src="images/community.jpg" alt="" className='w-full h-full object-cover object-center'/>
                </div>
                <div className='px-[20px] my-[20px]'>
                  <h1 className='font-[700] mb-[5px] text-[20px]'>커뮤니티</h1>
                  <p>스포츠에도 전략이 있듯이 유튜브에도 '성공하는 전략'이 있습니다.</p>
                  <p>바이럴토스는 모든 클라이언트에게 우리만의 '전략'을 제공해 드립니다.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service