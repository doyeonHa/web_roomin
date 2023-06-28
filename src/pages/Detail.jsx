import React from 'react';
import './Detail.css'

function Detail() {
  return (
    <div>
        <div id="nav">
            <div id="logo"></div>
            <div id="nav-con">
                <div class="box" onclick="window.location.href = '../main.html'">
                    <div id="icon1" class="img"></div>
                    <div>예약자 정보</div>
                </div>
                <div class="box" id="nav1" onclick="window.location.href = './chek.html'">
                    <div id="icon2" class="img"></div>
                    <div>체크인/체크아웃</div>
                </div>
                <div class="box" id="nav3" onclick="window.location.href = './service.html'">
                    <div id="icon3" class="img"></div>
                    <div>유/무료 서비스</div>
                </div>
                <div class="box" id="nav4" onclick="window.location.href = '../../login.html'">
                    <div id="icon4" class="img"></div>
                    <div>로그아웃</div>
                </div>
                <div class="box" id="nav5" onclick="window.location.href = './set.html'">
                    <div id="icon5" class="img"></div>
                    <div>설정</div>
                </div>
            </div>
        </div>

        <div id="g1">
            <div id="first">
                <div id="mts">서비스 명세표</div>
            </div>
            <div id="day">오전<br />8:11</div>
            <div id="bin">
            </div>
            <div id="specifi">
                <div style={{display: 'block'}}>
                    <div>와이파이(무료)</div>
                    <div style={{color: '#A4A4A4'}}>비밀번호 전달 ∙ 요청사항없음</div>
                </div>
            </div>
        </div>

        <div id="g2">
            <div id="first">
                <div id="mts">서비스 명세표</div>
            </div>
            <div style={{color: '#777777', marginLeft: 60}}>2023.05.25~2023.05.28</div>
            <hr />
            <div style={{marginLeft: 60}}>와이파이<div style={{display: 'flex', float: 'right'}}>무료</div>
            </div><br />
            <div><span id="span">ㄴ</span> <span id="date">2023.05.25 08:11:34</span></div>

            <hr />

            <div id="bar">미니바</div><br />

            <div><span id="span">ㄴ</span> <span id="date">2023.05.25 11:03:47 &nbsp;&nbsp;물*2
                    &nbsp;&nbsp;음료*1<div id="fleex">¥500</div></span></div><br />

            <div><span id="span">ㄴ</span> <span id="date">2023.05.25 11:03:47
                    &nbsp;&nbsp;화이트와인*1<div id="fleex">¥5200</div></span></div><br />
\
            <div><span id="span">ㄴ</span> <span id="date">2023.05.26 07:16:09 &nbsp;&nbsp;물*3
                    &nbsp;&nbsp;음료*1<div id="fleex">¥700</div></span></div><br />

            <div><span id="span">ㄴ</span> <span id="date">2023.05.26 18:20:46 &nbsp;&nbsp;물*2
                    &nbsp;&nbsp;음료*1<div id="fleex">¥800</div></span></div><br />

            <div><span id="span">ㄴ</span> <span id="date">2023.05.27 12:49:01 &nbsp;&nbsp;물*3
                    <div id="fleex">¥300</div>
                </span></div><br /><br />
            <hr /><br />

            <div><span id="date"
                    class="service">물*10&nbsp;&nbsp;&nbsp;음료*3&nbsp;&nbsp;&nbsp;화이트와인*1&nbsp;&nbsp;&nbsp;와이파이<div id="won">¥7500</div></span></div><br />
            <hr />

            <button type="submit" id="butsub">결제요청하기</button>
        </div>
    </div>
  );
}
export default Detail;