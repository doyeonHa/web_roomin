import React, {useState} from 'react';
import styled from 'styled-components';
import './MainStart.css'
import logoimage from '../image/roomin.png';
import axios from 'axios'

function Mainstart(){
  const [id, setId] = useState("");
  const [pw, setPw] = useState(""); 

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // 서버로 로그인 요청을 보냄
      const response = await axios.post("/api/login", {
        email: id,
        password: pw
      });
  
      // 응답의 상태 코드를 확인하여 로그인 성공 여부를 판단
      if (response.status === 200) {
        const user = response.data.user;
        const message = response.data.message;
  
        alert(message); // 로그인 성공 출력
        // router.replace('/');
      } else {
        // 로그인 실패 처리
        alert('로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error.message);
    }
     
  }
   return (
	  <body>
      <Logo style={{backgroundImage: `url(${logoimage})`}}></Logo>
      <Form id="forms" method="post">
        <input type="text" placeholder="호텔 아이디" class="input1" id="inp1" name="id"/>
        <input type="password" placeholder="비밀번호" class="input2" id="inp2" name="pw"/>
      </Form>
      <div id="btnsignup">
        <div id="pass" class="sign">비밀번호 찾기</div>
        <div id="line" class="sign"> | </div>
        <div id="signup" class="sign" onclick="window.location.href='/회원가입/html/step1.html'">회원가입</div>
      </div>
      <div id="mark"></div>
      <button type="submit" id="loginbtn" onclick="window.location.href = './관리자페이지/main.html'">로그인</button>
	  </body>
   );
}
const Form = styled.div`
  position: absolute;
  width: 508px;
  height: 180px;
  left: 1186px;
  top: 403px;
  display: grid;
  grid-template-rows: 80px 80px;
`;

const Logo = styled.div`
  position: absolute;
  width: 210.71px;
  height: 40px;
  left: 1335px;
  top: 233px;
  background-size: cover;
`

export default Mainstart;