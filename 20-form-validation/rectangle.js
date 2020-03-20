$(function(){
    /*calc button click event*/
    //get dom elem
    var $width = $("#width"),
        $height = $("#height"),
        $btnCal = $("#calculate"),
        $perimeter = $("#perimeter"),
        $area = $("#area")

    $btnCal.click(function(){
      //validate if error return
      if(!validate('#width') || !validate('#height')) return;

      //get value
      var w = Number($width.val()),
          h = Number($height.val());

      //calculate
      var p = 2*(w+h),
          a = w*h;

      //output
      $perimeter.val(p);
      $area.val(a);
    }); 

    function validate(field) {
      //get Dom error meaage
      var $data = $(field),
          $msg = $(filed + '-validation-message');
      //validate null
      if($data.val() ==== '') {
        $msg.html('不能为空');
        $data.select();
        return false;
      }

      //validate number
      if(!/^-?(0![1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
        $msg.html('必须是数值');
        $data.select();
        return false;
      }

      //validate > 0
    if(Number($data.val()) < 0) {
        $msg.html('不能小于0');
        $data.select();
        return false;
      }
    
    return true;
  }

})
