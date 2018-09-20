$(function() {
  init();
  function init() {
    // // 动态改变长度单位
    // setHTML();
    // // 浏览器窗口发生改变触发函数
    // window.onresize = function() {
    //   setHTML();
    // };
    // 点击展开侧边栏
    setOnNav();
    // 点击关闭侧边栏
    offNav();
  }
  //   // 动态改变长度单位
  // function setHTML() {
  //   // 设计的宽度 / 基础值 = 要适配的屏幕的宽度 / fz
  //   // fz=要适配的屏幕的宽度*基础值/设计的宽度

  //   // 基础值
  //   var baseVal = 100;
  //   // 设计稿的宽度
  //   var pageWidth = 1920;
  //   // 当前屏幕的宽度
  //   var screenWidth = document.querySelector('html').offsetWidth;
  //   // 要设置fontsize
  //   var fz = (screenWidth * baseVal) / pageWidth;

  //   // 赋值给HTML标签
  //   document.querySelector('html').style.fontSize = fz + 'px';
  // }
    // 点击关闭侧边栏
    function offNav() {
      // 点击关闭侧边栏
      $('.nav_up>img').on('click', function() {
        setoffNav();
      });
      // 点击遮罩也可以关闭
      $('.fullshade').on('click', function() {
        setoffNav();
      });
      // 关闭侧边栏
      function setoffNav() {
        $('.nav').removeClass('nav_open');
        $('.nav>div').css('opacity', '0');
        $('.fullshade').css('opacity', '0');
        setTimeout(() => {
          $('.fullshade').hide();
        }, 800);
        $('body').css('overflow-y', 'scroll');
      }
    }
    // 点击展开侧边栏
    function setOnNav(e) {
      $('#kaiNav').on('click', function() {
        $('.nav').addClass('nav_open');
        $('.fullshade').show();
        setTimeout(() => {
          $('.nav>div').css('opacity', '1');
        }, 1000);
        setTimeout(() => {
          $('.fullshade').css('opacity', '1');
        }, 500);
        $('body').css('overflow-y', 'hidden');
      });
    }
});
