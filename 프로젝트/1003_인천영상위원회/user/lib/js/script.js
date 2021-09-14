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

//탑버튼
function moveTop(){
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('#footer .btn-top').fadeIn();
		} else {
			$('#footer .btn-top').fadeOut();
		}
	});
	$('#footer .btn-top').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
};

//탭
function tab(el, tabName){
	$('.tab-title > li > a').removeClass('active');
	$(el).addClass('active');
	$('.tab_info .tab').hide();
	$('.tab_info .'+tabName).show();
};


$(function(){
	//탑버튼
	moveTop();

	//메인gnb
	$('.main_gnb .depth_01 > li > a').mouseenter(function(){
		console.log("마우스 올림");
		$(this).parent().siblings().find('.depth_02_wrap').stop().slideUp();
		$(this).parent().find('.depth_02_wrap').stop().slideDown();
		$("#header > .inner").parent().find('.depth_wrap').stop().slideDown();
		$("#header > .inner").parent().find('.depth_wrap').stop().slideDown();
	});

	$(' #header > .inner').mouseleave(function(){
		//.sub_menu를 벗어나면 css 변경
		$(this).parent().find('.depth_02_wrap').stop().slideUp();
		$("#header > .inner").parent().find('.depth_wrap').stop().slideUp();
	});

	$('.depth_02 > li > a').click(function(){
	$('.depth_02 > li').removeClass('active');
		$(this).parents('.depth_02 > li').addClass('active');
	});
	

	//datepicker
	$("#datepicker").datepicker();

	$.datepicker.setDefaults({
	dateFormat: 'yy-mm-dd',
	prevText: '이전 달',
	nextText: '다음 달',
	monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	showMonthAfterYear: true,
	yearSuffix: '.'
	});

});
