// 공통처리 JS - common.js

// 나의 함수 불러오기
import mFn from "./my_function.js";

// 공통 처리 데이터 불러오기
import comData from "../data/common_data.js";

/****************************************************
     [ 상단/하단 공통 함수 ]
******************************************************/
setElement(); // 함수호출!!!

export default function setElement() {
  // 1.대상선정: #header-area, #footer-area
  const headerArea = mFn.qs("#header");
  const footerArea = mFn.qs("#footer");



  // 2. 코드넣기 ///////
  headerArea.innerHTML = comData.headerArea;
  footerArea.innerHTML = comData.footerArea;

  /****************************************************
     [ top버튼-클릭시 상단으로 이동하는 버튼]
******************************************************/

const topBtn = mFn.qs(".top-btn");

mFn.addEvt(window, "scroll", scrollTopBtn);

function scrollTopBtn(){
  let scTop = window.scrollY;
  // console.log("스크롤 위치 : ", scTop);

  if(scTop>=300){
    topBtn.classList.add("on");
  }
  else{
    topBtn.classList.remove("on");
  }
}////////////scrollTopBtn함수////////////

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}; ///////click///////////


} /////////// setElement 함수 ///////////////
