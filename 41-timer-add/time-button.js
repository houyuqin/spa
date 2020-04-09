/*var timerBtn={
  show:function(){}
}*/
function  TimerButton(){
 var $btn=$('<input  class="timer-button" type="button"  disabled>');
  var             cfg={
      container:'body',
      num:6,//默认时长
     title:'同意',//默认按钮文字
    onClick:null
    },
    timer;
 this.show=function(conf){
  $(cfg.container).append($btn);
  $.extend(cfg,conf);
  $btn.val(cfg.title+'('+cfg.num+'s)');
  //2.事件绑定  event bind

timer=setInterval(function(){
 cfg.num--;
  if(cfg.num===0){
    clearInterval(timer);
    $btn.val(cfg.title);
        $btn.removeAttr('disabled');
  }else
{
  $btn.val(cfg.title+'('+cfg.num+'s)')
}
},1000);
  $btn.click(cfg.onClick)
  }
}
