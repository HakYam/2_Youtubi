$(document).ready(function () {
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $("#baricon").click(function () {
        $("#wrap, #overlay").fadeToggle();
    });

    $('#overlay').click(function () {
        $("#wrap, #overlay").fadeOut();  /* Hide menu and overlay when overlay is clicked */
    });

    

    $('.search-icon').click(function () {
        $(".search-input").slideToggle("slow");  /* Hide menu and overlay when overlay is clicked */
    });

});
