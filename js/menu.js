$(window).scroll(function() { 
    var scroll = $(window).scrollTop();
 
    if (scroll > 100) {
        $('.nave').addClass('nave-auxiliar');
    } else {
        $('.nave').removeClass('nave-auxiliar');
    }
});