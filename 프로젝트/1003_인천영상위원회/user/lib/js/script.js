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

//모달팝업
function layer_pop_control(type, popup) { 
		
	if(type == "open"){
		//팝업 열기
		$('#'+popup).show();
		console.log("열림");
	}else if(type =="close"){
		//팝업 닫기
		$(popup).parents('.layer_pop_wrap').hide();
	};
};


//모달팝업 swiper
function layer_pop_control(type, popup) { 
		
	if(type == "open"){
		//팝업 열기
		$('#'+popup).show();
		console.log("열림");
	}else if(type =="close"){
		//팝업 닫기
		$(popup).parents('.layer_pop_wrap').hide();
	};

	//DB검색상세페이지3
	var swipe3 = new Swiper('.db_slide_st3 .swiper-container', {
		slidesPerView: 1,
		parallax: true,
		loop: true,
		speed: 300,
		navigation: {
		nextEl: '.swiper-button-next_st3',
		prevEl: '.swiper-button-prev_st3',
	  }
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

	//swiper
	//DB검색상세페이지1
	var swiper1 = new Swiper('.db_slide_st1 .swiper-container', {
		slidesPerView: 1,
		parallax: true,
		loop: true,
		speed: 300,
		navigation: {
		nextEl: '.swiper-button-next_st1',
		prevEl: '.swiper-button-prev_st1',
	  }
	});

	//DB검색상세페이지2
	var swiper2 = new Swiper('.db_slide_st2 .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 20,
		parallax: true,
		loop: true,
		speed: 300,
		pagination: {
        el: '.swiper-pagination',
        clickable: true,
		type: 'fraction',
		},
		navigation: {
		nextEl: '.swiper-button-next_st2',
		prevEl: '.swiper-button-prev_st2',
		},
		breakpoints: {
			1300: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
			730: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			300: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			}
		}
	});

});
