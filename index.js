
$("button.rating").click(function () {

    rate = $(this).text();
    $("button.rating").css("backgroundColor", "hsl(213, 19%, 18%)");
    $(this).css("backgroundColor", "hsl(25, 97%, 53%)");

    $("#submit").click(function () {
        $(".first-page").css("display", "none");
        $(".second-page").css("display", "block");
        $("#demo").text(rate);
    })
    
})

