/* global require requirejs:true */
requirejs.config({
  'paths':{
    'jquery':'//apps.bdimg.com/libs/jquery/2.1.4/jquery.min'
  }
});

require(['jquery'],function($){
  $(function(){
    require(['Banner'],function(Banner){
      new Banner();
    });
  });
});
