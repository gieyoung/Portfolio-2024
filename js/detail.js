// 포트폴리오 디테일 JS - detail.js

// 나의 함수 불러오기
import mFn from "./my_function.js";

// 포트폴리오 리스트 데이터 불러오기 /////
import portData from "../data/portfolio_list.js";

/****************************************************
     [ 포트폴리오 리스트 ]
******************************************************/

// HTML태그 로딩후 tabFn함수 호출! ///
mFn.addEvt(window, "DOMContentLoaded", detailList);

// [ 포트폴리오 디테일 코드 만들기 함수 ]

function detailList() {
 // URL에서 id 쿼리 문자열을 추출
  const urlParams = new URLSearchParams(window.location.search);
  const idx = urlParams.get("id");

  // id로 포트폴리오 데이터 필터링
  const item = portData.find((v) => v.idx === idx);
 
  if (!item) return; // id가 일치하는 데이터가 없을 경우


  mFn.qs(".wrap").innerHTML = `
    <div class="description">
      <!-- 타이틀 -->
      <h3>${item.title}</h3>
      <!-- 세부내용 -->
      <div class="detail-con">
        <div class="item">
          <h5>컨셉:</h5>
          <span>${item.subject}</span>
        </div>
      </div>
      <div class="detail-con">
        <div class="item">
          <h5>담당역할:</h5>
          <span>${item.role}</span>
        </div>
      </div>
      <div class="detail-con">
        <div class="item">
          <h5>제작기간:</h5>
          <span>${item.date}</span>
        </div>
        <div class="item">
          <h5>참여인원</h5>
          <span>${item.num}</span>
        </div>
      </div>
      <div class="detail-con">
        <div class="item">
          <h5>사용언어:</h5>
          <span>${item.skill}</span>
        </div>
        <div class="item">
          <h5>개발환경</h5>
          <span>${item.tool}</span>
        </div>
      </div>
     
    </div>
    <div class="txt">
      ${item.desc} <!-- 포트폴리오 설명 추가 -->
    </div>
    <div class="go-btn">
      <a href="${item.link}" target="_blank" class="btn">사이트 열기</a>
    </div>
    <div class="preview">
      <div class="prj-item w-100 box-full">
        <img src="${item.img2}" alt="Main Image" />
      </div>
      <div class="flex-box2">
        <div class="prj-item box-lg">
          <img src="${item.img3}" alt="Sub Image 1" />
        </div>
        <div class="prj-item box-md">
          <img src="${item.img4}" alt="Sub Image 2" />
        </div>
      </div>
    </div>
  `;
}