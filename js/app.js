$(function() {
  init();
  function init() {
    // 第一张图片功能
    ImgTwo();
    // 轮播图功能
    scrollBannerImg();
  }
  // 第二张图片功能点
  function ImgTwo() {
    // 遍历所有img
    $(".centreShowUl >li").on("click", function() {
      console.log(123);
      $(this)
        .css("opacity", "1")
        .siblings()
        .css("opacity", "0.3");
      $(".entreImg >img")
        .eq($(this).index())
        .css("display", "block")
        .siblings()
        .css("display", "none");
    });
    // 第一张图片鼠标移入显示
    $(".centreShowUl").on("mouseover", function() {
      $(".centreShowUl >li>img").css({"transform": "translateY(0%)","border-bottom":"0"});
    });
    // 第一张图片鼠标移开隐藏
    $(".centreShowUl").on("mouseleave", function() {
      $(".centreShowUl >li>img").css({"transform": "translateY(-99%)","border-bottom":"1px solid #000"});
    });
  }
  // 轮播图功能
  function scrollBannerImg() {
    $(".leftBtn").on("mouseover", function() {
      $(".ShowImgThreeBox").css("transform", "matrix(1, 0, 0, 1, 90, 0)");
      $(".leftBtn>span>div").css("width", "30px");
    });
    $(".leftBtn").on("mouseleave", function() {
      $(".ShowImgThreeBox").css("transform", "matrix(1, 0, 0, 1, 0, 0)");
      $(".leftBtn>span>div").css("width", "0px");
    });
    $(".rightBtn").on("mouseover", function() {
      $(".ShowImgThreeBox").css("transform", "matrix(1, 0, 0, 1, -90, 0)");
      $(".rightBtn>span>div").css("width", "30px");
    });
    $(".rightBtn").on("mouseleave", function() {
      $(".ShowImgThreeBox").css("transform", "matrix(1, 0, 0, 1, 0, 0)");
      $(".rightBtn>span>div").css("width", "0px");
    });
    $(".ShowImgThreeUl").on("mouseover", function() {
      $(".ShowImgThreeUl >li>img").css("transform", "translateY(0%)");
      // transform: translateY(-99%);
    });
    $(".ShowImgThreeUl").on("mouseleave", function() {
      $(".ShowImgThreeUl >li>img").css("transform", "translateY(-99%)");
    });
    $("#carousel-example-generic").on("slide.bs.carousel", function(event) {
      var $hoder = $("#carousel-example-generic").find(".item"),
        $items = $(event.relatedTarget);
      //getIndex就是轮播到当前位置的索引
      var getIndex = $hoder.index($items);
      console.log(getIndex);
      $(".ShowImgThreeUl >li ")
        .eq(getIndex)
        .css("opacity", "1")
        .siblings()
        .css("opacity", ".3");
    });
  }
});
