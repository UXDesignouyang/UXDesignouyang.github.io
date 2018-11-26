$(function() {
    init();
    function init() {
      // 第一张图片功能
      ImgTwo();
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
  });