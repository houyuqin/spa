$(function(){
  var $menu = $(''
      +'<div id="menu">'
          +'<div id="files">文件(F)</div>'
          +'<div id="edit">编辑(E)</div>'
          +'<div id="ooo">格式(O)</div>'
          +'<div id="view">查看(V)</div>'
          +'<div id="help">帮助(H)</div>'
      +'</div>'
      //+'<div class="cen"></div>'
      +'');
  /* $edit = $('#edit'),
      $cen = $('.cen');*/

  var $box = $('#box');

  $box.append($menu);

  var $cen = $('<div class="cen"></div>');
  var $area = $('<textarea id="area"></textarea>');
  
  $cen.append($area);
  $box.append($cen);

  //格式
  $box.on('click','#ooo',function(){
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
              + '<span>初号</span><br>'
              + '<span>小初</span><br>'
              + '<span>一号</span><br>'
              + '<span>二号</span><br>'
              + '<span>小二</span><br>'
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
              +'<input class="btn-cancel btn" type="button" value="取消">'
          +'</div>'
      +'</div>'
   +'</div>'   
  +'');
    
    //取消
    $('.btn-cancel').click(function(){
      console.log('000');
      //$('.notepad-dlg-font').style.display = 'none';
      $box.remove($select);
    });

    var one='';
    //function styles(){
      //console.log('abc');
      $('#family').on('click','$',function(){
        console.log('123');
        one = this.html();
      });
    //}
    var $egg = $('#egg');
    $egg.css('font-size',one);

    $box.append($select);
  });

  /*$('.setfont').click(function(){
        $('.menus').css('display','none');
        $('body').append($settingfont);
        $('.notepad-dlg-font').draggable({handle:$settingfont.find('.notepad-dlg-titlebar')});

        var l1 = new comList();   
        l1.show({
          container: '.list1',
          width: '176px',
          list: fonts,
          isFont: true,
          selectHandler: function(e) { console.log(fonts[e]); }
        });

        var l2 = new comList();
        l2.show({
          container: '.list2',
          select: 3,
          width: '132px',
          list: styles,
          isFontStyle: true,
          selectHandler: function(e) { console.log(styles[e]); }
        });

        var l3 = new comList();
        l3.show({
          container: '.list3',
          width: '64px',
          list: sizes,
          selectHandler: function(e) { console.log(sizes[e]); }
        }); 

       $settingfont.find('.btn-ok').click(destoryDlgFont);
       $settingfont.find('.btn-cancel').click(destoryDlgFont);
       $settingfont.find('.close-btn').click(destoryDlgFont);

    })
    
  }*/ 

  //function destoryDlg() { $dlg.remove();  }
  //function destoryDlgFont() { $settingfont.remove(); }

  /*function comList() {
    var $comList = $(''
        + '<div class="notepad-com-list">'
          + '<input class="editor" type="text"><br>'
          + '<ul class="list">'
          + '</ul>'
        + '</div>');

    var $editor = $comList.find('.editor'),
        $list = $comList.find('.list'),
        $items;

    var cfg = {
      container: '',
      list: [],
      select: 0,
      width: '200px',
      isFont: false,
      isFontStyle: false,
      selectHandler: null
    };

    function setFontStyle(item, style) {
      if(style === '斜体') {
        item.css({'font-style': 'italic'});
        return;
      }

      if(style === '粗体') {
        item.css({'font-weight': 'bold'});
        return;
      }

      if(style === '粗偏斜体') {
        item.css({'font-weight': 'bold', 'font-style': 'italic'});
        return;
      }
    }

    function fillData() {
      var i = 0, $item;

      if(cfg.isFont) {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<ol class="item"></ol>');
          $item.css({'font-family': cfg.list[i]});
          $list.append($item.html(cfg.list[i]));
        }
      } else if(cfg.isFontStyle) {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<ol class="item"></ol>');
          setFontStyle($item, cfg.list[i]);
          $list.append($item.html(cfg.list[i]));
        }
      } else {
        for(i=0; i<cfg.list.length; i++) {
          $item = $('<ol class="item"></ol>');
          $list.append($item.html(cfg.list[i]));
        }
      }

      $items = $list.find('.item');
    }

    function setSelect(n) {
      $($items[n]).addClass('selected');
      $editor.val(cfg.list[n]);
      $editor.select();
    }

    function init() {
      var $oldList = $(cfg.container).find('.notepad-com-list');
      if($oldList.length !== 0) $oldList.remove();
       
      $(cfg.container).append($comList);
      
      $comList.css({ width: cfg.width });
      fillData();
      setSelect(cfg.select);
    }

    this.show = function(conf) {
      $.extend(cfg, conf);
      init();

      $list.click(function(e) {
        $($items[cfg.select]).removeClass('selected');
        cfg.select = cfg.list.indexOf($(e.target).html());
        $($items[cfg.select]).addClass('selected');
        $editor.val(cfg.list[cfg.select]);
        $editor.select();
        cfg.selectHandler(cfg.select);
      });

      $editor.keyup(function() {
        var i = 0;

        for(i=0; i<cfg.list.length; i++) {
          if(cfg.list[i].indexOf($editor.val()) === 0) break;
        }

        if(i === cfg.list.length) return;

        $items[i].scrollIntoView({behavior: 'smooth', block: 'start'});
        $($items[cfg.select]).removeClass('selected');
        $($items[i]).addClass('selected');
        cfg.select = i;
      });
    };
  }

  return {
    show: show
  };*/


}());
