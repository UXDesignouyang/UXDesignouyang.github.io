$(function() {
    girl();
   function girl() {
    $(window).scroll(function() {
      var scrollTop = document.documentElement.scrollTop || window.pageYOffset  || document.body.scrollTop
        console.log(scrollTop);
        if (scrollTop >=  1000) {
            $('.row_middle_right').css({ transform: 'translateX(0px)' });
        }
    })
   }
})
 
