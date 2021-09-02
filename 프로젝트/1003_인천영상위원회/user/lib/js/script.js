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

	//메인슬라이드
	var swiper1 = new Swiper('.section1 .swiper-container', {
		slidesPerView: 1,
		observer:true,
		observeParents:true,
		parallax: true,
		loop: true,
		autoplay: true,
		speed: 500,
		effect: 'fade',
		fadeEffect: {
		crossFade: true
		},
		pagination: {
        el: '.swiper-pagination',
        clickable: true,
		type: 'fraction',
		},
	  navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	  },
		on: {
		init: function () {
		$(".swiper-progress-bar-wrap").removeClass("animate");
		$(".swiper-progress-bar-wrap").removeClass("active");
		$(".swiper-progress-bar-wrap").eq(0).addClass("animate");
		$(".swiper-progress-bar-wrap").eq(0).addClass("active");
		},
		slideChangeTransitionStart: function () {
		$(".swiper-progress-bar-wrap").removeClass("animate");
		$(".swiper-progress-bar-wrap").removeClass("active");
		$(".swiper-progress-bar-wrap").eq(0).addClass("active");
		},
		slideChangeTransitionEnd: function () {
		$(".swiper-progress-bar-wrap").eq(0).addClass("animate");
		}
		}
	});
});
