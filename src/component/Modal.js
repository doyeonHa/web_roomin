import React from "react";
import './Modal.css'

const Modal = () => {
    return (
        <Modal>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <div id="madaltext">호텔 주소를 입력해주세요!</div>
                    <input id="pac-input" class="controls" type="text" placeholder="예&#41; 신라호텔, 중구 동호로 249" />
                    <button id="searchadress">검색</button>
                    <div id="grid-box">
                        <div class="box1">도로명</div>
                        <div class="box2">예&#41; 무학로 33, 도산대로 8길 23</div>
                        <div class="box1">동주소</div>
                        <div class="box2">예&#41; 연희동 42-18</div>
                        <div class="box1">건물명</div>
                        <div class="box2">예&#41; 역삼동 푸르지오</div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default Modal;