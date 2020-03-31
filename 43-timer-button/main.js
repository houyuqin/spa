requirejs.config({
  'paths':{
    'jquery':'//apps:bdimg.com/libs/jquery/2.1.4/jquery.min.js'
  }
})

require(['jquery'],function($){
  $(function(){
    var $btnAdd = $('#add');

    $btnAdd.click(function(){
      require(['time-button'],function(TimerButton){
        var tb = new TimerButton();
        tb.show({
          num: 9,
          title: '同意',
          onClick: function(){
            alert('就知道你会同意的');
          }
        });
      });
    });
  });
});
