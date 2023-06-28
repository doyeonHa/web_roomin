import React from 'react';
import styled from 'styled-components';
import './FreeCharge.css'

function Service() {
  return (
    <div>
        <div id="g1">
            <div id="first2">
                <div id="mt">서비스 요청</div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>시간</th>
                        <th>방번호</th>
                        <th>투숙객명</th>
                        <th>요청 서비스</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2023.05.25<br />19:23</td>
                        <td>R1401</td>
                        <td>Noha Meyers</td>
                        <td>와이파이, 미니바 등</td>
                        <td id="buttd">
                            <div id="btng">
                                <button id="yes">승인</button>
                                <button id="no">거절</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div id="g2">
                <div id="first">
                    <div id="mts">서비스 명세표</div>
                    <button id="mtss"><a href="../html/detail.html">상세보기</a></button>
                </div>
                <div id="backround">
                    <div id="specifi">
                        <div id="room">R1401</div>
                        <div id="empty"></div>
                        <div id="box">
                            <div>와이파이, 미니바</div>
                            <div id="money">20,000</div>
                        </div>
                        <button>영수증 발주</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Service;