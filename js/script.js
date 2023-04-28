$(document).ready(function(){
  var height= $('.sc_news_items').height();
  var num = $('.sc_news_items div').length;
  var max = height*num;
  move = 0;
  function news_items_Rolling(){
    move += height;
    $(".sc_news_items").animate({"top":-move},600,function(){
      if(move>=max){
        $(this).css('top',-3);
        move = 0;
      }
    })
  }
  noticeRollingOff = setInterval(news_items_Rolling,3000); 

  $(window).off().on('scroll',reOrder);

  function reOrder(){

      var scroll = $(window).scrollTop();
      var topCnt = $('.container').position().top;
      var rightH = $('.right_box').height();
      var leftH = $('.column_left').height();
      var bottomCnt =topCnt+rightH;

      if(scroll > topCnt && scroll < (bottomCnt-window.innerHeight )) {
        $('.right_box').removeClass('posFix').removeClass('posAddAbs').addClass('posAbs');
      } else if (scroll > (bottomCnt-window.innerHeight)&&(topCnt+leftH-window.innerHeight) > scroll) {
        $('.right_box').removeClass('posAbs').removeClass('posAddAbs').addClass('posFix');
      } else if (scroll < topCnt ) {
      	$('.right_box').removeClass('posFix').removeClass('posAbs');
      }else if((topCnt+leftH-window.innerHeight) < scroll){
        $('.right_box').removeClass('posFix').removeClass('posAbs').addClass('posAddAbs');
      }
  }
})