var $timerButton = (function(){
  var $btn = $('<input class="timer-button" type="button" value="同意（6s）" disabled>'),         cfg = {
        container:'body',
        num: 6,
        title: '同意'
      },
      num,
      timer;
 
  /*$btn.css({
    height:'50px',
    width:'100px'
  })*/

  function show(conf){
    //1.DOM draw 
    $(cfg.container).append($btn);
    $.extend(cfg,conf);

    $btn.val(cfg.title + ' (' + cfg.num + 's)');
    
    //2.event bind
    num = cfg.num;
    timer = setInterval(function(){
      num--;
      if(num === 0){
        clearInterval(timer);
        $btn.val(cfg.title);
        $btn.removeAttr('disabled');
      }else{
        $btn.val(cfg.title + '(' + num + 's)');
      }
    },1000);

  }


  $btn.click(function(){
  cfg.onClick();
  });

return {
  show: show
}
}());

//不用page load event
//
//封装成对象，有几种方法
//1.简单对象自卖能量,不完全是面向对象的，不能包括私有方法
//vartimerBtn{
//show：function（）
//}
//2.工厂函数：一个函数返回值是简单对象
//var timerBtn = (function（）{
  //return{
  //show：function（）{}
  //}
//}())
//3.构造函数 
//function TimerBtn(){
//}
//var tb = new TimerBtn();
