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

//커스텀 셀렉트 박스
$(document).ready(function(){
			customSelect();
			scrollTest();
});

function customSelect(){
	$(".custom-select select").each(function() {
		var template = '<div class="select-control">';
		var optionTemplate = "";
		var selectedText = "";
		
		$(this)
			.find("option")
			.each(function() {
				if($(this).attr("selected")) {
					selectedText = $(this).text();
				}
				
				optionTemplate +=
					"<div " +
					" data-value=" +
					$(this).attr("value") +
					">" +
					$(this).html() +
					"</div>";
			});
		optionTemplate += "</div></div>";
		
		template +=
			'<div class="select-selected">' +
			((selectedText != "") ? selectedText : $(this).find('option:eq(0)').text()) +
			"</div>";
		template += '<div class="select-items">';

		$(this).hide();
		$(this).after(template + optionTemplate);
	});
	$(".custom-select .select-selected").on("click", function() {
		$("html").one("click", function() {
			$(".custom-select .select-control").removeClass("opened");
		});
		$(this)
			.parents(".select-control")
			.toggleClass("opened");
		event.stopPropagation();
	});
	$(".custom-select .select-items div").on("click", function() {
		$(this)
			.parents(".custom-select")
			.find("select")
			.val($(this).data("value"));
		$(this)
			.parents(".select-items")
			.find("div")
			.removeClass("selection");
		$(this).addClass("selection");
		$(this)
			.parents(".select-control")
			.removeClass("opened");
		$(this)
			.parents(".select-control")
			.find(".select-selected")
			.text($(this).text());
	});
}

//모바일메뉴 열고닫기 btn
function main_navToggle(btn){ //파라미터1 = btn인데 btn이 여기서는 <a>
	$(btn).parents('.gnb_btn').siblings('.gnb_btn').removeClass('active');
	$(btn).parents('.gnb_btn').toggleClass('active');
}


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

	//탭효과
	$(".tab-title.history > li > a").click(function(){
		$('.depth_02 > li').removeClass('colorover');
		$(this).parents('.tab-title > li').addClass('colorover');
		$(this).parents('.tab-title > li').prevAll().addClass('colorover');
		$(this).parents('.tab-title > li').nextAll().removeClass('colorover');
	});


	//모바일메뉴
	$('.main_nav').click(function() {
		if ($(".mobile-menu").css("display") == "none") {
			jQuery('.mobile-menu').css("display", "block");
			jQuery('.mobile-menu').css("width", "100vw");
			jQuery('.mobile-menu').css("height", "100vh");
			$("html, body").addClass("not_scroll");
		} else {
			jQuery('.mobile-menu').css("display", "none");
			jQuery('.mobile-menu').css("width", "0");
			jQuery('.mobile-menu').css("height", "0");
			$("html, body").removeClass("not_scroll");
		}
	});

	$(".mobile-menu-con > .depth_01_m > li > a").click(function(){
		if($(this).parent("li").attr("class") != "active"){
			$(".mobile-menu-con > .depth_01_m > li").removeClass("active"); //<-이부분 없애면 다른 메뉴 누를시 자동 닫기는거 없어짐. 클릭으로 열리고 닫김.
			$(this).parent("li").addClass("active");
		}else{
			$(this).parent("li").removeClass("active");
		}
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

	//서브페이지 검색 bar
	$('.sub_search .select_wrap').on('click', function(e) {
			var btn = $(this);
			var lst = btn.next();
			openDropDown(btn, lst);
		});
		//DIV 드롭다운
		function openDropDown(btn, lst) {
			btn.attr('title', '열기');

			if (!lst.is(':animated')) {
				btn.attr('title', (lst.parent('div').hasClass('active')) ? '열기' : '닫기');
				lst.slideToggle(250, 'easeInOutExpo').parent('div').toggleClass('active').siblings('div').removeClass('active').children('div').slideUp(250, 'easeInOutExpo').prev(btn).attr('title', '열기');
			}
		}

		function closeDropDown(btn, lst, open_btn) {
			if (!lst.is(':animated')) {
				lst.slideUp(250, 'easeInOutExpo').parent('div').removeClass('active');
				lst.siblings(open_btn).attr('title', '열기');
			}
		}

	//swiper
	//DB검색상세페이지1
	var swiper1 = new Swiper('.db_slide_st1 .swiper-container', {
		slidesPerView: 1,
		parallax: true,
		loop: true,
		speed: 300,
		loopedSlides: 4,
		navigation: {
		nextEl: '.swiper-button-next_st1',
		prevEl: '.swiper-button-prev_st1',
	  },
		thumbs: {
		swiper: swiper2
	  }
	});

	//DB검색상세페이지2
	var swiper2 = new Swiper('.db_slide_st2 .swiper-container', {
		slidesPerView: 4,
		spaceBetween: 20,
		effect: 'slide',
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
		loopedSlides: 4,
		breakpoints: {
			1300: {
				slidesPerView: 4
			},
			730: {
				slidesPerView: 3
			},
			300: {
				slidesPerView: 2
			}
		}
	});

	swiper1.controller.control = swiper2;
    swiper2.controller.control = swiper1;


	//DB검색상세페이지4
	var swiper4 = new Swiper('.db_slide_st4 .swiper-container', {
		slidesPerView: 5,
		spaceBetween: 20,
		effect: 'slide',
		parallax: true,
		loop: true,
		speed: 300,
		pagination: {
        el: '.swiper-pagination',
        clickable: true,
		type: 'fraction',
		},
		navigation: {
		nextEl: '.swiper-button-next_st4',
		prevEl: '.swiper-button-prev_st4',
		},
		breakpoints: {
			1300: {
				slidesPerView: 5
			},
			730: {
				slidesPerView: 3
			},
			300: {
				slidesPerView: 2
			}
		}
	});
});

function scrollTest(){
	var val1 = $('.history .tabwrap-box').offset().top;
	var val2 = val1 - 87;
	console.log(val1);

	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		console.log("현재 top " + scroll + "px");

		if(scroll >= val2){
			console.log("1");
			$('.history .left_con').addClass('fix');
		} else {
			$('.history .left_con').removeClass('fix');
		}
	});
}
