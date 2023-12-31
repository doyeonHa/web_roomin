import React, { useState } from 'react';
import image from '../image/enlargement.png'
import styled from 'styled-components';
import './Reserve.css';

function Reserve() {
  return (
    <div>
        <div id="maingrid">
            <div>
                <div class="gridgroup">
                    <div class="chat">전체</div>
                    <div class="chat">승인대기</div>
                    <div class="chat">승인완료</div>
                </div>
                <div id="g1">
                    <div id="first">
                        <div id="mt">예약자 정보</div>
                        <div>
                            <input type="search" id="search" placeholder="검색하기"/>
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"/>
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
                                <th>날짜/시간</th>
                                <th>성명</th>
                                <th>생년월일</th>
                                <th>여권번호</th>
                                <th>여권요청상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023.05.23 11:46:12</td>
                                <td>Lee ruda</td>
                                <td>2000.01.01</td>
                                <td>M12345678</td>
                                <td>승인대기</td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="back">처음으로</div>
                </div>
            </div>
            <div>
                <div id="g2">
                    <div id="first">
                        <div id="mts">여권등록요청</div>
                    </div>
                    <table id="table2">
                        <thead>
                            <tr>
                                <th>성명</th>
                                <th>여권번호</th>
                                <th>여권요청</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>김땡땡</td>
                                <td>M12345678</td>
                                <td>
                                    <div id="btng"><button>승인</button><button>거절</button></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <hr id="selecline" />
        <div id="gridgrid" style={{marginTop:-800}}>
            <div>
                    <div id="reservation">예약 현황</div>
                    <div></div>
                    <select id="select2">
                        <option value="1">최신순</option>
                        <option value="2">오래된 순</option>
                        <option value="3">이름순</option>
                    </select>
                    <div style={{backgroundImage: `url(${image})`}}></div>

                <div id="grid3">
                    <div class="rec">
                        <div class="data">2025.05.25</div>
                        <div class="checktime">체크인 15시</div>
                        <div class="badroom">더블베드룸</div>
                        <div class="g">
                            <div class="ggg">
                                <div class="gg1">기간 </div>
                                <div class="gg2">2023.05.25 ~ 2023.05.27</div>
                            </div>
                            <div class="ggg">
                                <div class="gg1">인원 </div>
                                <div class="gg2">2명 (추가비용 없음)</div>
                            </div>
                        </div>
                        <div class="backblack">
                            <div class="sorting">
                                <div class="person"></div>
                                <div class="persontext">예약자 : </div>
                                <div id="personname" class="persontext"> Lee ruda</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div id="resevrer2">
                    <div id="reservation2">객실 현황</div>
                    <div id="text">
                        <div id="per">697</div>
                        <div>/806</div>
                    </div>
                </div>
                <div id="grid4">
                    <div class="room" id="r">
                        <div class="sort" id="badtext">더블베드룸</div>
                        <div class="sort" id="bad"></div>
                        <div class="sort" id="count">
                            <div class="counts">187/221</div>
                        </div>
                    </div>
                    <div class="room" id="r2">
                        <div class="sort" id="badtext">싱글베드룸</div>
                        <div class="sort" id="bad"></div>
                        <div class="sort" id="count">
                            <div class="counts">90/98</div>
                        </div>
                    </div>
                    <div class="room" id="r3">
                        <div class="sort" id="badtext">퀸베드룸</div>
                        <div class="sort" id="bad"></div>
                        <div class="sort" id="count">
                            <div class="counts">146/194</div>
                        </div>
                    </div>
                    <div class="room" id="r4">
                        <div class="sort" id="badtext">트윈룸</div>
                        <div class="sort" id="bad"></div>
                        <div class="sort" id="count">
                            <div class="counts">246/276</div>
                        </div>
                    </div>
                    <div class="room" id="r5">
                        <div class="sort" id="badtext">트리플룸</div>
                        <div class="sort" id="bad"></div>
                        <div class="sort" id="count">
                            <div class="counts">44/53</div>
                        </div>
                    </div>
                    <div class="room" id="r6">
                        <div class="sort" id="badtext">쿼드러플룸</div>
                        <div class="sort" id="bad"></div>
                        <div class="sort" id="count">
                            <div class="counts">46/54</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Reserve;
