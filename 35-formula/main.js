
$(function() {
    var t = MathQuill.getInterface(2)
      , a = $("#formula").get(0)
      , n = ""
      , i = t.MathField(a, {
        handlers: {
            edit: function() {
                var a = i.latex();
                n = a
            }
        }
    });
    $('input[type="button"]').click(function() {
        var a = $('<p><span class="formula"></span></p>');
        a.find(".formula").html(n),
        t.StaticMath(a.find(".formula").get(0)),
        $(".main").append(a)
    })
});

