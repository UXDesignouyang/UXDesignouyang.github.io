$(function() {
  init();
  function init() {
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
        $(".ShowImgThreeUl >li>img").css('transform','translateY(0%)')
        // transform: translateY(-99%);

    });
    $(".ShowImgThreeUl").on("mouseleave", function() {
        $(".ShowImgThreeUl >li>img").css('transform','translateY(-99%)')

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
