import React, { useState } from 'react';
import styled from 'styled-components';
import './Signuping.css'
import image from '../image/signline.png';
import Modal from '../component/Modal'

function Signuping() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchMap = () => {
    console.log("isModalOpen")
    setIsModalOpen(true);
  }
  
  return (
    <div>
      <button id="minilogin">로그인</button>
      <div id="linestep" style={{backgroundImage: `url(${image})`}}>
        <div id="circle1" class="circle">
            1
        </div>
        <div id="text1">호텔정보</div>
        <div class="circle" id="circle2">
            2
        </div>
        <div id="text2">사업자등록</div>
        <div class="circle" id="circle3">
            3
        </div>
        <div id="text3">계정생성</div>
        </div>
    <div id="text">호텔 주소를 입력해주세요!</div>

    {/* 모달창 띄우기 */}
    <button id="search" onClick={searchMap}>주소검색</button>
    {isModalOpen && (
              <Modal/>
      )}
    <input type="text" class="detailaddress" placeholder="상세주소"/>
    <button id="nextbtn" onclick="window.location.href = '/회원가입/html/step2.html'">다음</button>
    </div>
  );
}
export default Signuping;
