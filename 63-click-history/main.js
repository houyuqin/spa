$(function() {
    var o = $(".main input")
      , t = 0;
    function i(n) {
        o.val("被按了 " + n + " 次")
    }
    i(t),
    o.click(function() {
        var n = location.origin + location.pathname + "#/" + ++t;
        history.pushState(null, null, n),
        i(t)
    }),
    $(window).on("popstate", function() {
        i(t = "" === (t = location.href.match(/(\d*)$/)[0]) ? 0 : t)
    })
});

