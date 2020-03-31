var $dlgGoto = (function(){
    var $dlg = $('<input class="timer-button" type="button" disabled>'),
        cfg = {
          container:'body',
          num: 6,
          title: '同意',
          onClick: null
        }; 
  function show(conf){
    //1.DOM draw 
    $(cfg.container).append($dlg);
    $.extend(cfg,conf);
    num = cfg.num;

   //2.event bind
    $dlg.click(cfg.onClick);
  }

  return {
    show: show
  };
}());
