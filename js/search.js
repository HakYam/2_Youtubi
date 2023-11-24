$(document).ready(function () {
    $("#search-filter-icon").click(function () {
        $(".filter-column").slideToggle("slow");
      
    });

    $('.CheckBoxInputName1, .CheckBoxInputName2, .CheckBoxInputName3, .CheckBoxInputName4').on('change', function() {
        var currentClassName = $(this).attr('class');
        
        if ($(this).prop('checked')) {
            // Uncheck all checkboxes with the same class as the current checkbox
            $('.' + currentClassName).prop('checked', false);
            
            // Check the current checkbox back again
            $(this).prop('checked', true);
        }
    });
});