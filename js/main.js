document.addEventListener('DOMContentLoaded', function () {
    if ($(document).height() <= $(window).height()) {
        $(".footer-container").addClass("fixed-bottom");
    }
})
