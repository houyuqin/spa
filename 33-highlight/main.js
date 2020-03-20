$(function(){
  $('input').click(function(){
    var $code = $('<div><pre class="javascript"></pre></div>');
    var $txt = $('textarea');

    if($txt.val() != '') {
      $code.find('pre').html($txt.val());
      hljs.highlightBlock($code.find('pre')[0]);
      $('body').append($code);
    }

    })
})
