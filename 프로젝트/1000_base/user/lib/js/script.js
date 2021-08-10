(function(){


// popup
function layerOpen (popup) {
    var popup = $(popup);
    popup.show();
}
function layerClose (_this) {
    var _this = $(_this);
    _this.parents('.layer_wrap').hide();
}

// scroll animation add
function reveal() {
    $('.reveal').each(function(){
        var scrlTop = $(window).scrollTop() + $(window).height();
        var cntTop = $(this).offset().top + 50;
        if (scrlTop >= cntTop) {
            $(this).addClass('animated');
        }
    });
}
function scroll(){
    setTimeout(function() {
        reveal();
        $(window).bind('touchmove, scroll', reveal);
    }, 1000);
} 
scroll();


})