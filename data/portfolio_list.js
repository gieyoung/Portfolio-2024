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
    img2: "",
    img3: "",
    img4: "",
    title: "[개인프로젝트] 네니아 사이트",
    sub: "React를 활용한 반응형 사이트 제작",
    subject: "자연주의 식품을 제작하여 판매하는 네니아 쇼핑몰 겸 홍보사이트",
    date: "2024.05.24. ~ 2024.07.24",
    num: "개인작업",
    doc: "",
    desc: "프론트엔드 수업의 마지막 프로젝트로서 기존의 네니아 홍보사이트를 벤치마킹하고, 쇼핑몰 기능을 추가하였습니다. \n상품 구매를 위한 회원가입,로그인, 상품검색, 장바구니 기능이 있습니다. \n위의 작업은 React를 활용해 재사용 가능한 컴포넌트를 설계 및 구현하여 코드의 가독성과 유지보수성을 향상시키는 방향으로 진행하였습니다.",
    role: "프론트엔드 개발",
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
    subject: "행성 소개 사이트",
    date: "2024.04.23. ~ 2024.05.10",
    num: "4명",
    doc: "",
    desc: "프론트엔드 수업의 두번째 프로젝트로서 4명의 팀원이 함께 제작한 행성 소개 사이트입니다. \n리액트 환경에서 제작되었으며, 로그인, 회원가입과 검색 기능이 있습니다.\n 저는 팀장으로서 전체적인 개발환경 틀을 세팅하고, 개발 일정 및 업무분담을 조율하는 역할을 맡았습니다",
    role: "팀장, 개발환경 및 공통코드 세팅, 메인화면, 검색기능, 기획 및 준공서류 작성",
    skill: "React, Html, Scss, Css, JavaScript, Jquery",
    tool: "gitHub",
    link: "https://gieyoung.github.io/Solar-system/%EB%A6%AC%EC%95%A1%ED%8A%B8PJ/solar-app/build/",
  },
  {
    idx: "3",
    category: "그린",
    id: "green",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[개인프로젝트] 오뚜기 사이트",
    sub: "반응형 사이트 퍼블리싱",
    subject: "오뚜기 브랜드 소개 사이트",
    date: "2024.03.16. ~ 2024.04.16",
    num: "개인작업",
    doc: "",
    desc: "프론트엔드 수업의 첫 프로젝트로서 오뚜기 사이트를 벤치마킹하여 메인페이지와, 서브페이지 하나를 퍼블리싱 하는 작업을 했습니다. \n다양한 애니메이션 효과로 역동적인 움직임을 주었습니다.",
    role: "퍼블리싱",
    skill: "Html, Css, JavaScript",
    tool: "gitHub",
    link: "https://gieyoung.github.io/Lee-gie-young-PJ-LIVE/",
  },
  {
    idx: "4",
    category: "드림웨어",
    id: "dream",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[숙명여대] 학군단 사이트",
    sub: "그누보드를 활용한 사이트 제작",
    subject: "학군단 홍보 및 안내, 소통을 위한 사이트 리뉴얼 작업",
    date: "2023.02 ~ 2023.03",
    num: "기획자(1명), 디자인 및 개발(1명)",
    doc: "",
    desc: "",
    role: "디자인 및 퍼블리싱 전체, 그누보드를 활용해 홈페이지 제작, 시안 디자인 및 메뉴 구성 회의 참여, 초기 및 준공서류 작성, 유지보수",
    skill: "PHP, MySQL, Html, Css, JavaScript",
    tool: "그누보드",
    link: "https://rotc.sookmyung.ac.kr/",
  },
  {
    idx: "5",
    category: "드림웨어",
    id: "dream",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[우체국금융개발원] 사이트",
    sub: "디자인 및 퍼블리싱",
    subject:
      "우체국 금융 개발원 기관 소개 및 자료 제공을 위한 사이트 리뉴얼 작업",
    date: "2022.05 ~ 2022.09",
    num: "기획자(1명), 디자인 및 퍼블리셔(1명)",
    doc: "",
    desc: "",
    role: "디자인 및 퍼블리싱 전체, 시안 디자인 및 메뉴 구성 회의 참여, 초기 및 준공서류 작성, 유지보수",
    skill: "Html, Css, JavaScript",
    tool: "전자정부프레임워크",
    link: "https://www.posid.or.kr/index.jsp",
  },
  {
    idx: "6",
    category: "드림웨어",
    id: "dream",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[숙명여대] 공군학생군사교육단 사이트",
    sub: "그누보드를 활용한 사이트 제작",
    subject: "공군학생군사교육단 홍보 및 안내, 소통을 위한 사이트",
    date: "2022.02 ~ 2022.04",
    num: "기획자(1명), 디자인 및 개발(1명)",
    doc: "",
    desc: "",
    role: "디자인 및 퍼블리싱 전체, 그누보드를 활용해 홈페이지 제작, 시안 디자인 및 메뉴 구성 회의 참여, 초기 및 준공서류 작성, 유지보수",
    skill: "PHP, MySQL, Html, Css, JavaScript",
    tool: "그누보드",
    link: "https://afrotc.sookmyung.ac.kr",
  },
  {
    idx: "7",
    category: "드림웨어",
    id: "dream",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[숙명여대] 공군학생군사교육단 사이트",
    sub: "그누보드를 활용한 사이트 제작",
    subject: "공군학생군사교육단 홍보 및 안내, 소통을 위한 사이트",
    date: "2022.02 ~ 2022.04",
    num: "기획자(1명), 디자인 및 개발(1명)",
    doc: "",
    desc: "",
    role: "디자인 및 퍼블리싱 전체, 그누보드를 활용해 홈페이지 제작, 시안 디자인 및 메뉴 구성 회의 참여, 초기 및 준공서류 작성, 유지보수",
    skill: "PHP, MySQL, Html, Css, JavaScript",
    tool: "그누보드",
    link: "https://afrotc.sookmyung.ac.kr",
  },
  {
    idx: "8",
    category: "드림웨어",
    id: "dream",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[한국교총] 회장 선거 사이트",
    sub: "디자인 및 퍼블리싱",
    subject: "한국 교원단체 총 연합회의 회장 선거를 위한 사이트 ",
    date: "2021.11 ~ 2021.12",
    num: "기획자(1명), 디자인 및 퍼블리셔(1명)",
    doc: "",
    desc: "",
    role: "디자인 및 퍼블리싱 전체, 시안 디자인 및 메뉴 구성 회의 참여, 초기 및 준공서류 작성, 유지보수",
    skill: "Html, Css, JavaScript",
    tool: "전자정부프레임워크",
    link: "http://vote.kfta.or.kr",
  },
  {
    idx: "9",
    category: "드림웨어",
    id: "dream",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[숙명여대] 만성ㆍ대사질환 연구지원센터 사이트",
    sub: "디자인 및 퍼블리싱",
    subject:
      "만성ㆍ대사질환 연구지원센터 소개 및 장비 대여 예약을 위한 사이트 ",
    date: "2021.11 ~ 2021.12",
    num: "기획자(1명), 백엔드 개발자(1명), 디자인 및 퍼블리셔(1명)",
    doc: "",
    desc: "",
    role: "디자인 및 퍼블리싱 전체, 시안 디자인 및 메뉴 구성 회의 참여, 초기 및 준공서류 작성, 유지보수",
    skill: "Html, Css, JavaScript",
    tool: "그누보드",
    link: "https://cfcmd2021.cafe24.com/",
  },
  {
    idx: "10",
    category: "드림웨어",
    id: "dream",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[숙명여대] 만성ㆍ대사질환 연구지원센터 사이트",
    sub: "디자인 및 퍼블리싱",
    subject:
      "만성ㆍ대사질환 연구지원센터 소개 및 장비 대여 예약을 위한 사이트 ",
    date: "2021.11 ~ 2021.12",
    num: "기획자(1명), 백엔드 개발자(1명), 디자인 및 퍼블리셔(1명)",
    doc: "",
    desc: "",
    role: "디자인 및 퍼블리싱 전체, 시안 디자인 및 메뉴 구성 회의 참여, 초기 및 준공서류 작성, 유지보수",
    skill: "Html, Css, JavaScript",
    tool: "그누보드",
    link: "https://cfcmd2021.cafe24.com/",
  },
  {
    idx: "11",
    category: "드림웨어",
    id: "dream",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[휴세스] 사이트",
    sub: "디자인 및 퍼블리싱",
    subject: "에너지 회사 휴세스의 사업소개 및 요금조회 사이트 ",
    date: "2021.11 ~ 2021.12",
    num: "기획자(1명), 백엔드 개발자(1명), 디자인 및 퍼블리셔(1명)",
    doc: "",
    desc: "",
    role: "디자인 및 퍼블리싱 전체, 시안 디자인 및 메뉴 구성 회의 참여, 초기 및 준공서류 작성, 유지보수",
    skill: "Html, Css, JavaScript",
    tool: "그누보드",
    link: "http://huces.com/",
  },
  {
    idx: "12",
    category: "드림웨어",
    id: "dream",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[한국교총] 학생언어문화개선 사이트",
    sub: "디자인 및 퍼블리싱",
    subject:
      "한국 교원단체 총 연합회에서 진행하는 학생언어문화개선을 위한 공모전 사이트",
    date: "2021.04 ~ 2021.05",
    num: "기획자(1명), 백엔드 개발자(1명), 디자인 및 퍼블리셔(1명)",
    doc: "",
    desc: "",
    role: "디자인 및 퍼블리싱 전체, 시안 디자인 및 메뉴 구성 회의 참여, 초기 및 준공서류 작성, 유지보수",
    skill: "Html, Css, JavaScript",
    tool: "전자정부프레임워크",
    link: "http://childwelfare.sookmyung.ac.kr/",
  },
  {
    idx: "13",
    category: "드림웨어",
    id: "dream",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    title: "[숙명여자대학교] 아동복지학부 사이트",
    sub: "디자인 및 퍼블리싱",
    subject: "숙명여자대학교 아동복지학부 사이트 리뉴얼 작업",
    date: "2020.12 ~ 2021.02",
    num: "기획자(1명), 백엔드 개발자(1명), 디자인 및 퍼블리셔(1명)",
    doc: "",
    desc: "퍼블리셔로 입사 후 처음으로 맡은 프로젝트로 디자인과 퍼블리싱을 맡았습니다.",
    role: "디자인 및 퍼블리싱 전체, 시안 디자인 및 메뉴 구성 회의 참여, 초기 및 준공서류 작성, 유지보수",
    skill: "Html, Css, JavaScript",
    tool: "그누보드",
    link: "http://childwelfare.sookmyung.ac.kr/",
  },
];

// 데이터 공개하기 //////
export default portData;
