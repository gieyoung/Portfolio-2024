// 포트폴리오 데이터 JS

// 1. 미리보기 구성 데이터
/************************************* 
    [ 데이터항목 : ]
    1.순번(기본키) : idx
    2.카테고리: category
    3.이미지: img
    4.제목 : title
    5.제목하단: sub
    6.작업기간:date
    7.관련서류:doc
    8.설명 : desc
    9.사용기술: skill
    10.링크: link
    
*************************************/

const portData = [
  {
    idx: "1",
    category: "그린",
    id: "green",
    img: "",
    title: "[개인프로젝트] 네니아 사이트",
    sub: "React를 활용한 반응형 사이트 제작",
    subject:"자연주의 식품을 제작하여 판매하는 네니아 사이트",
    date: "2024.05.24. ~ 2024.07.24",
    num:"개인작업",
    doc: "",
    desc: "기존의 네니아 사이트를 벤치마킹하고, 쇼핑몰 기능을 추가하였습니다. 상품 구매를 위한 회원가입,로그인, 상품검색, 장바구니 기능이 있습니다. 위의 작업은 React를 활용해 재사용 가능한 컴포넌트를 설계 및 구현하여 코드의 가독성과 유지보수성을 향상시키는 방향으로 진행하였습니다.",
    role:"프론트엔드 개발",
    skill: "React, Html, Scss, Css, JavaScript, Jquery",
    tool: "gitHub",
    link: "https://gieyoung.github.io/FED-RF-2nd-PJ-gieyoung/2%EC%B0%A8%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/03.%20%EA%B5%AC%ED%98%84%EC%86%8C%EC%8A%A4/nenia-app/build/",
  },
  {
    idx: "2",
    category: "그린",
    id: "green",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[팀프로젝트] 행성 소개 사이트",
    sub: "React를 활용한 반응형 사이트 제작",
    subject:"행성 소개 사이트",
    date: "2024.04.23. ~ 2024.05.10",
    doc: "",
    desc: "",
    role:"팀장, 개발환경 및 공통코드 세팅, 메인화면, 검색기능",
    skill: "React, Html, Scss, Css, JavaScript, Jquery",
    link: "https://gieyoung.github.io/Solar-system/%EB%A6%AC%EC%95%A1%ED%8A%B8PJ/solar-app/build/",
  },
  {
    idx: "3",
    category: "그린",
    id: "green",
    img: "",
    title: "[개인프로젝트] 오뚜기 홈페이지",
    sub: "반응형 홈페이지 퍼블리싱",
    subject:"오뚜기 브랜드 홍보 사이트",
    date: "2024.03.16. ~ 2024.04.16",
    doc: "",
    desc: "",
    role:"퍼블리싱",
    skill: "Html, Css, JavaScript",
    link: "",
  },

 
];

// 데이터 공개하기 //////
export default portData;
