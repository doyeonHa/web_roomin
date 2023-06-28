import React from "react";
import './Sidenav.css'
import logoimage from '../image/roomin.png';
import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import icon3 from '../image/icon3.png';
import logout from '../image/logout.png';
import setting from '../image/setting.png';

function Sidenav(props) {
    console.log(props.props)
    return (
        <body>
            <div id="nav">
                <div id="logo" style={{backgroundImage: `url(${logoimage})`}}></div>
                <div id="nav-con">
                    <div class="box" id="nav0">
                        <div id="icon1" class="img" style={{backgroundImage: `url(${icon1})`}}></div>
                        <div>예약자 정보</div>
                    </div>
                    <div class="box" id="nav1">
                        <div id="icon2" class="img" style={{backgroundImage: `url(${icon2})`}}></div>
                        <div>체크인/체크아웃</div>
                    </div>
                    <div class="box" id="nav3">
                        <div id="icon3" class="img" style={{backgroundImage: `url(${icon3})`}}></div>
                        <div>유/무료 서비스</div>
                    </div>
                    <div class="box" id="nav4">
                        <div id="icon4" class="img" style={{backgroundImage: `url(${logout  })`}}></div>
                        <div>로그아웃</div>
                    </div>
                    <div class="box" id="nav5">
                        <div id="icon5" class="img" style={{backgroundImage: `url(${setting})`}}></div>
                        <div>설정</div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Sidenav