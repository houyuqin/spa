
$(function() {
    var t = $("progress")
      , n = 0
      , c = 0;
    $("#start-button").click(function() {
        0 === n && (n = window.setInterval(function() {
            t.attr("value", c++)
        }, 100))
    }),
    $("#stop-button").click(function() {
        window.clearInterval(n),
        n = 0
    }),
    $("#reset-button").click(function() {
        t.attr("value", c = 0)
    })
});

