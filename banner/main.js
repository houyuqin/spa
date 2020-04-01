(function(){
  var $banner = $(''
    +'<div class="slider" id="slider">'
    +'<div class="slide"><img src="img/b5.png" alt=""></div>'
    +'<div class="slide"><img src="img/b1.png" alt=""></div>'
    +'<div class="slide"><img src="img/b2.png" alt=""></div>'
    +'<div class="slide"><img src="img/b3.png" alt=""></div>'
    +'<div class="slide"><img src="img/b4.png" alt=""></div>'
    +'<div class="slide"><img src="img/b5.png" alt=""></div>'
    +'<div class="slide"><img src="img/b1.png" alt=""></div>'
    +'</div>'
    +'<span id="left" class="btn"><</span>'
    +'<span id="right" class="btn">></span>'
    +'<ul class="nav" id="navs">'
    //+'<li></li>'
    +'<li class="active">1</li>'
    +'<li>2</li>'
    +'<li>3</li>'
    +'<li>4</li>'
    +'<li>5</li>'
    //+'<li></li>'
    +'</ul>'
    +''
  );
  //加入html页面
  $('#box').append($banner);

  var index=1,
      linum=0,
      timer;

  var $slider = $('#slider'),
      $left = $('#left'),
      $right = $('#right'),
      $list = $('#navs li'),
      left = -1200;


  //下一页
  function next(i){
    if(i == 6){
      index = 1;
      $slider.animate({left:left+'px'});
    }
    $slider.animate({left:left*i+'px'});
    $list.eq(i).addClass('active').siblings().removeClass('active');
  }

  //list转换
  function liTrans(i){
    //i++;
    if(i==5){
      $list.eq(0).addClass('active').siblings().removeAttr('class');
    }
    $list.eq(i).addClass('active').siblings().removeClass('active');
  }

  //自动轮播
  function lunbo(){
    timer = setInterval(function(){
      index++;
      linum++;
      if(linum==5){
        linum=0;
      }
      next(index);
      liTrans(linum);
    },2000);
  }

  lunbo();

  //上一页
  function prev(i){
    i--;
    if(i==0){
      $slider.animate({left:left*5+'px'});
    }
    $slider.animate({left:left*i+'px'});
  }

  //鼠标滑入显示，滑出隐藏左右箭头
  $('#box').mouseover(function(){
    clearInterval(timer);
    $('span').css('opacity',0.5);
  });
  $('#box').mouseout(function(){
    lunbo();
    $('span').css('opacity',0);
  });

  //鼠标点击左右箭头
  $left.click(function(){
    prev(index);
    linum--;
    $list.eq(linum).addClass('active').siblings().removeClass('active');
  });

  $right.click(function(){
    index++;
    next(index);
    linum++;
    $list.eq(linum).addClass('active').siblings().removeClass('active');
  });

  //点击下边list更改图片 
  $list.click(function(){
    var i = $(this).index();
    linum = i-1;
    index = i;
    $slider.animate({left:left*(i+1)});
    liTrans(i);
  });







}());
