$(document).ready(function() {
	$('img[usemap]').rwdImageMaps();
	gnb();
	main_fullpage();

	//메인 selection1 슬라이드
	var main_slider01 = $('#main_slide').bxSlider({
		mode:'fade',
		auto:true,
		pager: true,
		controls:false,
		touchEnabled : (navigator.maxTouchPoints > 0)
	});

	//메인 selection4 팝업존 슬라이드
	$('#pop_zone').bxSlider({
		auto:true,
		pager: true,
		controls:false
	});

	$('#top_btn').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});

// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('#top_btn').addClass('show');
	} else {
		$('#top_btn').removeClass('show');
	}
});

$(window).resize(function(){
	gnb();
});

function gnb() {
	var viewportwidth = window.innerWidth;
	if (viewportwidth > 1200) {
		header_navi();
	} else {
		$('#header .gnb .depth1 > li > a').click(function(e) {
			e.preventDefault();
			var submenu = $(this).next('.depth2');

			if(submenu.is(":visible")){
				submenu.addClass("open");
			}
			
			$(this).parent().siblings().find('.depth2').removeClass("open");
		});
		header_navi_mo();
	}
}

function header_navi(){
	var el = $('#header');

	$('#header .gnb').mouseenter(function(){
		el.stop().animate({
			'height':'19.3rem'
		},300);
		$('#header .gnb_wrap').addClass('open');
	});

	$('#header .gnb').mouseleave(function(){
		$('#header').stop().animate({
			'height':'5rem'
		},300);
		$('#header .gnb_wrap').removeClass('open');
	});

	$('#header .gnb a').focus(function(){
		$('#header').css('height','19.3rem');
	});

	$('#header .gnb a').blur(function(){
		$('#header').css('height','5rem');
	});
}

function header_navi_mo(){
	var el = $('#header');
	
	$('#header .gnb').off("mouseenter mouseleave");
	$('#header .gnb a').off("focus blur");

	$('#header .gnb_wrap > .mobile_menu').click(function(){
		$('body, html').addClass("no_scroll");
		$('#header .m_gnb_wrap').addClass("open");
		$("#header .bg").show();
	});

	$('#header .x_btn').click(function(){
		$('body, html').removeClass("no_scroll");
		$('#header .m_gnb_wrap').removeClass("open");
		$("#header .bg").hide();
	});
}

function main_fullpage(){
	$('#main').fullpage({
		navigation:true,
		navigationTooltips: ['AIoT 실증지원랩', '공간 및 장비 예약', '지원사업'],
		showActiveTooltip: true,
		slidesNavigation: true,
		controlArrows:false,
		keyboardScrolling: true,
		animateAnchor :  true,
		recordHistory :  true,
		responsiveWidth: 1200,
		responsiveHeight: 800,
		onLeave: function(index, i, direction) {
			//console.log(index);
			if(index == 3 && direction =='down') {
				$('#footer').addClass('on');
			}else if(index == 4 && direction == 'up') {
				$('#footer').removeClass('on');
			}else if(index == 1 && direction == 'down') {
				
			}else{
				$('#footer').removeClass('on');
			}
		},
		afterLoad: function(a, index) {
			//console.log(index);
			if(index == 4) {
				$('#footer').addClass('on');
			}
		}
	});
}

/*시설예약 노트북 개수 선택 노출*/
function laptop_visible(v,id){
	if(v == "1"){
		document.getElementById(id).style.display = "";
	}else{
		document.getElementById(id).style.display = "none";
	}
}

//탭
function tab(el, tabName){
	$('.tab_wrap2 > .tabs2 > li').removeClass('active');
	$(el).addClass('active');
	$('.tab-conwrap .tab-con').hide();
	$('.tab-conwrap .'+tabName).show();
}