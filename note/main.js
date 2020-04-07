$(function(){
  var $menu = $(''
      +'<div id="menu">'
          +'<div id="files">文件(F)</div>'
          +'<div id="edit">编辑(E)</div>'
          +'<div id="ooo">格式(O)</div>'
          +'<div id="view">查看(V)</div>'
          +'<div id="help">帮助(H)</div>'
      +'</div>'
      +'<div class="cen">'
      +'<textarea id="area"></textarea>'
      +'</div>'
      +'');
  var $select = $(''
     +'<div class="notepad-dlg-mask notepad-dlg-font">'
      +'<div class="dialogbox notepad-dlgbox">'
          +'<div class="notepad-dlg-titlebar">'
              +'<p class="title">字体</p>'
              +'<span class="close-btn">✖</span>'
          +'</div>'
          +'<div class="main notepad-dlg-main">'
              +'<div class="font-family font-daxiao">'
            +'<p>字体(F):</p>' 
            +'<input type="text" class="one" value="宋体">'
            +'<div id="family">'
              + '<span style="font-family:幼圆">幼圆</span><br>'
              + '<span style="font-family:新宋体">新宋体</span><br>'
              + '<span style="font-family:微软雅黑">微软雅黑</span><br>'
              + '<span style="font-family:宋体">宋体</span><br>'
              + '<span style="font-family:隶书">隶书</span><br>'
              + '<span style="font-family:楷体">楷体</span><br>'
              + '<span style="font-family:华文中宋">华文中宋</span><br>'
              + '<span style="font-family:黑体">黑体</span><br>'
              + '<span style="font-family:仿宋">仿宋</span><br>'
              + '<span style="font-family:方正粗黑宋简体">方正粗黑宋简体</span><br>'
            +'</div>'
          +'</div>'
          +'<div class="font-style font-daxiao">'
            +'<p>字形(Y):</p>'
            +'<input type="text" class="two" value="常规">'
               + '<div id="style">'
                + '<span style="font-style:normal">常规</span><br>'
                + '<span style="font-style:oblique">斜体</span><br>'
                + '<span style="font-weight:bold">粗体</span><br>'
                + '<span style="font-style:oblique;font-weight:bold">粗偏斜体</span><br>'
              + '</div>'
          +'</div>'
          +'<div class="font-size font-daxiao">'
            +'<p>大小(S):</p>'
            +'<input type="text" class="three" value="14">'
              + '<div id="size">'
              + '<span>8</span><br>'
              + '<span>9</span><br>'
              + '<span>10</span><br>'
              + '<span>11</span><br>'
              + '<span>12</span><br>'
              + '<span>14</span><br>'
              + '<span>16</span><br>'
              + '<span>18</span><br>'
              + '<span>20</span><br>'
              + '<span>24</span><br>'
              + '<span>26</span><br>'
              + '<span>28</span><br>'
              + '<span>36</span><br>'
              + '<span>48</span><br>'
              + '<span>72</span><br>'
            + '</div>'
          +'</div>'
              +'<br>'
              +'<div class="list1"></div>'
              +'<div class="list2"></div>'
              +'<div class="list3"></div>'
              +'<fieldset class="sample">'
                +'<legend>示例</legend>'
                +'<p id="egg">AaBbYyZz</p>'
              +'</fieldset>'
              +'<div class="script">'
                +'<label>'
                  +'脚本(R):<br>'
                  +'<select>'
                    +'<option value="西欧语言">西欧语言</option>'
                    +'<option value="中文 GB2312">中文 GB2312</option>'
                  +'</select>'
                +'</label>'
                +'</div>' 
                +'<input class="btn-ok btn" type="button" value="确定">'
                +'<input class="btn-cancel btn" id="cancel" type="button" value="取消">'
            +'</div>'
        +'</div>'
     +'</div>'   
    +'');

  $('#box').append($menu);
  var $ooo = $('#ooo');
  var $family = $(''),
      $style  = $(''),
      $size   = $(''),
      family  = '',
      style   = '',
      size;

  //弹出弹框
  $ooo.click(function(){
    $('#box').append($select); 
    //关闭弹框
    $select.find('#cancel').click(function(){
      $select.remove();
    });
    $select.find('.close-btn').click(function(){
      $select.remove();
    });

    //确定
    $select.find('.btn-ok').click(function(){
      //关闭
      $select.remove();
      //字体
      $('#area').css('font-family',family);
      //字形
      if(style === '常规'){
        $('#area').css('font-style','normal');
      }else if(style === '斜体'){
        $('#area').css('font-style','oblique');
        $('#area').css('font-weight','normal');
      }else if(style === '粗体'){
        $('#area').css('font-style','normal');
        $('#area').css('font-weight','bold');
      }else{
        $('#area').css('font-style','oblique');
        $('#area').css('font-weight','bold');
      }
      //大小
      $('#area').css('font-size',Number(size));
    });

    //字体选择
    $select.find('#family').children(this).click(function(){
      //family = $select.find('#family').children(this).html();
      $family = this;
      family = $family.innerHTML;
      //选定后上面框中内容变化
      $select.find('.one').val(family);
      //设置示例中AaBbYyZz样式
      $select.find('#egg').css('font-family',family);
    });

    //选择字形
    $select.find('#style').children(this).click(function(){
      $style = this;
      style = $style.innerHTML;
      $select.find('.two').val(style);
      if(style === '常规'){
        $select.find('#egg').css('font-style','normal');
      }else if(style === '斜体'){
        $select.find('#egg').css('font-style','oblique');
        $select.find('#egg').css('font-weight','normal');
      }else if(style === '粗体'){
        $select.find('#egg').css('font-style','normal');
        $select.find('#egg').css('font-weight','bold');
      }else{
        $select.find('#egg').css('font-style','oblique');
        $select.find('#egg').css('font-weight','bold');
      }
    });
    //选择字体大小
    $select.find('#size').children(this).click(function(){
      $size = this;
      size = $size.innerHTML;
      $select.find('.three').val(size);
      $select.find('#egg').css('font-size',Number(size));
    });

  
  });

  //字体选择
  /*$select.find('#family').children(this).click(function(){
    //family = $select.find('#family').children(this).html();
    $family = this;
    family = $family.innerHTML;
    //选定后上面框中内容变化
    $select.find('.one').val(family);
    //设置示例中AaBbYyZz样式
    $select.find('#egg').css('font-family',family);
  });

  //选择字形
  $select.find('#style').children(this).click(function(){
    $style = this;
    style = $style.innerHTML;
    $select.find('.two').val(style);
    if(style === '常规'){
      $select.find('#egg').css('font-style','normal');
    }else if(style === '斜体'){
      $select.find('#egg').css('font-style','oblique');
      $select.find('#egg').css('font-weight','normal');
    }else if(style === '粗体'){
      $select.find('#egg').css('font-style','normal');
      $select.find('#egg').css('font-weight','bold');
    }else{
      $select.find('#egg').css('font-style','oblique');
      $select.find('#egg').css('font-weight','bold');
    }
  });

  //选择字体大小
  $select.find('#size').children(this).click(function(){
    $size = this;
    size = $size.innerHTML;
    $select.find('.three').val(size);
    $select.find('#egg').css('font-size',Number(size));
  });*/
 
});
