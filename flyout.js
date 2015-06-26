$(document).ready(function () {

    $(".slidingDiv, innerslidingDiv").hide();
    $(".show_hide, innershow_hide").show();

    $('.show_hide').click(function () {
        $(".slidingDiv, .tab").toggle("slide");
    });
        $('.innershow_hide').click(function () {
        $(".innerslidingDiv, .innertab").toggle("slide");
    });

});