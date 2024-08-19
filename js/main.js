// 메인화면 JS - main.js


///////////[ main2 동영상 열고 닫기 ]/////////////

    $(".v-open").on("click", () => {
      $(".vid-popup").addClass("on");
      $(".close-btn").show();
      $(".vid-popup>table").show();

    });
    $(".close-btn").on("click", () => {
      $(".vid-popup").removeClass("on");
      $(".close-btn").hide();
     
    });
