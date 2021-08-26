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

	//스크롤감지헤더
	var $header = $('#header'); //헤더를 변수에 넣기
	var $page = $('.search_main_head'); //색상이 변할 부분
	var $window = $(window);
	var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기

	$window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
	pageOffsetTop = $page.offset().top;
	});

	$window.on('scroll', function(){ //스크롤시
	var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
	$header.toggleClass('scrolldown_header', scrolled); //클래스 토글
	});

	//메인 슬라이드
	var swiper = new Swiper('.swiper-container.board-list', {
	slidesPerView: 4,
	spaceBetween: 30,
	effect: 'slide',
	loop: true,
	slidesOffsetBefore: 0,
	autoplay: {
		delay: 4000,
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
	},
	breakpoints: {
		1080: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
		330: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 20,
		}
	}
	});
});
