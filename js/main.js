// 메인화면 JS - main.js

// 나의 함수 불러오기
import mFn from "./my_function.js";

// 포트폴리오 리스트 데이터 불러오기 /////
import portData from "../data/portfolio_list.js";





/****************************************************
     [ 포트폴리오 리스트 ]
******************************************************/

 // HTML태그 로딩후 tabFn함수 호출! ///
 mFn.addEvt(window, "DOMContentLoaded", portList);


// [ 포트폴리오 리스트 코드 만들기 함수 ]
function portList(id = "all") {
  const filteredData =
    id === "all" ? portData : portData.filter((i) => i.id === id);

  mFn.qs(".port-list-wrap").innerHTML = `
  <ul class="port-list">
  ${filteredData
    .map(
      (v) => `
<li id="${v.id}">
  <div class="image">
    <a
      href="./detail.html?id=${v.idx}"
      style="
        background-image: url('${v.img}');
        
      "
    ></a
    >
  </div>
  <dl class="info">
    <a href="./detail.html?id=${v.idx}"
      ><dt class="subject">
        <span>${v.title}</span>
      </dt>
      <dd class="content">${v.sub}</dd></a>
     
  </dl>
</li>
`
    )
    .join("")}
</ul>

 `;
} ///////////portList함수//////////////

/****************************************************
     [ 포트폴리오 카테고리 탭버튼 ]
  ******************************************************/

 // HTML태그 로딩후 tabFn함수 호출! ///
 mFn.addEvt(window, "DOMContentLoaded", tabFn);

 function tabFn() {
//   대상선정: 카테고리 버튼들 .category ul li a
  const tabBtn = mFn.qsa(".category ul li a");


//   카테고리 버튼 클릭 이벤트 처리: 카테고리 버튼 클릭 시, 해당 버튼의 ID를 기반으로 portList 함수를 호출하여 필터링된 포트폴리오 리스트를 업데이트.
  tabBtn.forEach((ele) => {
    // 버튼 대상에 이벤트를 걸어준다!
    // forEach()메서드 사용!
    // ele 는 버튼요소자신
    mFn.addEvt(ele, "click", function (e) {
      e.preventDefault(); // 기본 a 링크 동작 방지
      tabBtn.forEach((btn) => btn.classList.remove("on")); // 기존 강조 제거
      this.classList.add("on"); // 클릭한 버튼 강조

      const category = this.id; // 클릭한 버튼의 ID를 카테고리로 사용
      portList(category); // 선택한 카테고리로 포트폴리오 리스트 필터링
    });
  });

  // 초기 로드 시 전체보기로 설정
  portList("all");
  
};/////////tabFn함수///////////////





///////////[ main2 동영상 열고 닫기 ]/////////////

// $(".v-open").on("click", () => {
//   $(".vid-popup").addClass("on");
//   $(".close-btn").show();
//   $(".vid-popup>table").show();

// });
// $(".close-btn").on("click", () => {
//   $(".vid-popup").removeClass("on");
//   $(".close-btn").hide();

// });
