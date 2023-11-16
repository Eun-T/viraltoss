"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import consulting from "../../public/images/talk_consulting.png";
import phone from "../../public/images/phone1.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Friend = (props: Props) => {
  // const loadingNotify = () => {
  //   const id = toast.loading("제출중...",{
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     theme: "colored",
  //   });

  //   setTimeout(() => {
  //     toast.update(id, {
  //       render: () => (<div>제출 완료되었습니다!<br/> 3초 뒤에 새로고침 됩니다.</div>),
  //       type: "success",
  //       position: "top-right",
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       theme: "colored",
  //     });
  //   }, 2000);
  // }
  
  
  // const successNotify = () =>
  //   toast.error("제출 완료되었습니다! 3초 뒤에 새로고침 됩니다.", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     theme: "colored",
  //   });
  return (
    <>
      {/* <ToastContainer
        // toastStyle={{
        //   backgroundColor: "#44e321"
        // }}
        position="top-right" // 알람 위치 지정
        autoClose={3000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        pauseOnHover // 마우스를 올리면 알람 정지
        theme="colored"
        // limit={1} // 알람 개수 제한
      /> */}
      <section>
        <div className="w-full" id="question">
          <div className="w-[92%] max-w-[1140px] mx-auto py-[125px]">
            <h2 className="text-[#191f28] text-[20px] s:text-[25px] m:text-[30px] l:text-[40px] font-[700] text-center mb-[40px] break-keep">
              고객님이 신뢰할 수 있는&nbsp;
              <em className="not-italic bg-clip-text text-transparent bg-gradient-to-r from-[#efd74f] to-[#000300]">
                Best Partner
              </em>
              &nbsp;가 되겠습니다.
            </h2>
            <div className="flex flex-col s:flex-row justify-center items-center gap-[20px]">
              <Link
                href="http://pf.kakao.com/_xlqtdG/chat"
                className="flex items-center px-[55px] py-[15px] l:px-[65px] l:py-[20px] rounded-[50px] bg-[#fcd94a] text-[#000300]"
              >
                <Image src={consulting} alt="톡상담." width={30} height={30} />
                상담하기
              </Link>
              <Link
                href="tel:010-3981-4325"
                className="flex gap-[5px] items-center px-[55px] py-[15px] l:px-[65px] l:py-[20px] rounded-[50px] bg-[#2a2626] text-[#fff] border-[2px]"
              >
                <Image src={phone} alt="전화하기." width={24} height={24} />
                통화하기
              </Link>
              {/* <button onClick={loadingNotify}>버튼</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Friend;
