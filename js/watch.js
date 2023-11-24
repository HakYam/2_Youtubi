$(document).ready(function () {
    $(".showMore").click(function () {
        $("#dots").hide("");
        $("#more").fadeToggle("0.2");
        
        if ($(this).text() === "عرض المزيد") {
            $(this).text("عرض أقل");           
          } else {
            $(this).text("عرض المزيد");
            $("#dots").show("");
          }
    });
});