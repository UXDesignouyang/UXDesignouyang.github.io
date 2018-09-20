$(function() {
  init();
  function init() {
    // 轮播图部分
    setBanner();
    // 页面主体部分
    pageBody();
  }

  // 轮播图部分
  function setBanner() {
    $('#carousel-example-generic').on('slide.bs.carousel', function(event) {
      var $hoder = $('#carousel-example-generic').find('.item'),
        $items = $(event.relatedTarget);
      //getIndex就是轮播到当前位置的索引
      var getIndex = $hoder.index($items);
      // console.log(getIndex);
      $('.showFont_a')
        .eq(getIndex)
        .css('margin-left', '80px')
        .fadeIn(1000)
        .css('margin-left', '0px')
        .siblings()
        .hide();
      $('.nums_banner>div')
        .eq(getIndex)
        .css('bottom', '50px')
        .fadeIn(1000)
        .css('bottom', '80px')
        .siblings()
        .hide();
    });

    // }
  }
  // 页面主体部分
  function pageBody() {
    $(window).scroll(function() {
      var logoContentOne = $(".logoContentOne").offset().top;
      var logoContentTwo = $(".logoContentTwo").offset().top;
      var logoContentThree = $(".logoContentThree").offset().top;
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset  || document.body.scrollTop
      // var logoContentOne = document.querySelector('.logoContentOne').offsetTop;
      // var logoContentTwo = document.querySelector('.logoContentTwo').offsetTop;
      // var logoContentThree = document.querySelector('.logoContentThree').offsetTop;
      if (scrollTop >= logoContentOne - 600) {
        $('.logoContentOne').css({ marginTop: '80px' });
        $('.logoContentOne .logoContent').css({ opacity: '1' });
        $('.logoContentOne .logoContent')
          .siblings()
          .css({ opacity: '1' });
      }
      if (scrollTop >= logoContentTwo - 600) {
        $('.logoContentTwo').css({ marginTop: '80px' });
        $('.logoContentTwo .logoContent').css({ opacity: '1' });
        $('.logoContentTwo .logoContent')
          .siblings()
          .css({ opacity: '1' });
      }
      if (scrollTop >= logoContentThree - 600) {
        $('.logoContentThree').css({ marginTop: '80px' });
        $('.logoContentThree .logoContent').css({ opacity: '1' });
        $('.logoContentThree .logoContent')
          .siblings()
          .css({ opacity: '1' });
      }
    });
  }
});