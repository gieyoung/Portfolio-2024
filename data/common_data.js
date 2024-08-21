// 공통요소 데이터 객체 - common_data.js

const comData = {
  // 1. 상단영역 코드
  headerArea: `    
          <header class="inbox header">
        <!-- 1-1.로고 -->
        <h1 id="logo">
          <a href="/"> GIEYOUNG'S PORTFOLIO </a>
        </h1>
        <!-- 1-2.GNB메뉴 -->
        <nav class="gnb">
          <ul>
            <li class="on">
              <a href="#pg1">INTRO</a>
            </li>
            <li>
              <a href="#pg2">프로필</a>
            </li>
            <li>
              <a href="#pg3">기술</a>
            </li>
            <li>
              <a href="#pg4">포트폴리오</a>
            </li>
            <li>
              <a href="#pg5">연락처</a>
            </li>
          </ul>
        </nav>
      </header>
      `,

  // 2. 하단영역 코드
  footerArea: `    
       <footer class="inbox">
        <div class="copyright"> Designed and developed </span> by Lee Gieyoung. © 2024 All rights reserved</div>
         <!-- 탑버튼 -->
        <a href="#null" class="top-btn"><i class="fa fa-solid fa-chevron-up"></i><span class="ir">상단으로 이동</span></a>
      </footer>
  
      `,
}; /////////// comData 객체 ////////////////

export default comData;
