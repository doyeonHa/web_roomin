import React, { useState } from 'react';
import styled from 'styled-components';
import './Checkinout.css';

function Check() {
  return (
    <div>
        <div id="hotelname">호텔이름</div>
        <div id="hotelimg"></div>
        <div id="g1">
            <div id="first2">
                <div id="mt">체크인/체크아웃</div>
                <div>
                    <input type="search" id="search" placeholder="검색하기"/>
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" id="icons"/>
                </div>
                <select id="select">
                        <option value="">최신순</option>
                        <option value="">오래된 순</option>
                        <option value="">이름순</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>체크인완료시간</th>
                        <th>성명</th>
                        <th>전화번호</th>
                        <th>여권번호</th>
                        <th>예약내용</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2023.05.23 11:46:12</td>
                        <td>Lee ruda</td>
                        <td>010-1234-5678</td>
                        <td>
                            <div id="gridtable">
                                <div id="port">M12345678</div>
                                <div id="portimg"></div>
                            </div>
                        </td>
                        <td id="boxes">
                            <div id="grid5">
                                <div id="grid6">
                                    <div>2023.05.23 ~ 05.28</div>
                                    <div>더블베드룸(2인)</div>
                                    <button id="detail">자세히보기</button>
                                </div>
                                <div class="updown"></div>
                                <div class="t">체크인대기중</div>
                                <div class="updown"></div>
                                <div class="t">체크아웃</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <div id="modalImg"></div>
                        <div class="data" id="tim">2025.05.25</div>
                        <div class="checktime2">체크인 15시</div>
                        <div class="badroom2">더블베드룸</div>
                        <div class="g2">
                            <div class="ggg">
                                <div class="gg1">기간 </div>
                                <div class="gg2">2023.05.25 ~ 2023.05.27</div>
                            </div>
                            <div class="ggg">
                                <div class="gg1">인원 </div>
                                <div class="gg2">2명 (추가비용 없음)</div>
                            </div>
                        </div>
                        <div class="backblack2">
                            <div class="sorting2">
                                <div class="person2"></div>
                                <div class="persontext2">예약자 : </div>
                                <div id="personname" class="persontext2"> Lee ruda</div>
                            </div>
                        </div>
                        <div class="che1">2023.05.25 체크인</div>
                        <div class="cho1">2023.05.27 체크아웃</div>
                        <hr class="line"/>
                        <h2 id="timer">체크인까지 00:30:12</h2>
                    </div>
                </div>
            </table>
        </div>
    </div>
  );
}
export default Check;
