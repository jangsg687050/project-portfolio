$(function(){
	//탑버튼
	moveTop();

	//메인메뉴 dropdown
	$('.main_header .depth_01 > li > a').mouseenter(function(){
		console.log("마우스 올림");
		$(this).parent().find('.sub_menu_wrap > ul').slideDown();
	});

	$('.top_bar').mouseleave(function(){
		//.sub_menu를 벗어나면 css 변경
		$(this).parent().find('.sub_menu_wrap > ul').slideUp();
	});

	$('.main_nav').click(function() {
		if ($(".main_menu").css("display") == "none") {
			jQuery('.main_menu').css("display", "block");
			jQuery('.main_menu').css("width", "100vw");
			jQuery('.main_menu').css("height", "100vh");
			$("html, body").addClass("not_scroll");
		} else {
			jQuery('.main_menu').css("display", "none");
			jQuery('.main_menu').css("width", "0");
			jQuery('.main_menu').css("height", "0");
			$("html, body").removeClass("not_scroll");
		}
	});

	//
	$(".subl-menu-pc .m-tit > div > a").click(function(){
		$('.subl-menu-pc .m-tit').removeClass('active');
		$(this).parents('li.m-tit').addClass('active');
	});

	$(".subl-menu > ul > li > a").click(function(){
		if($(this).parent("li").attr("class") != "active"){
			$(".subl-menu > ul > li").removeClass("active"); //<-이부분 없애면 다른 메뉴 누를시 자동 닫기는거 없어짐. 클릭으로 열리고 닫김.
			$(this).parent("li").addClass("active");
		}else{
			$(this).parent("li").removeClass("active");
		}
	});

	$(".subl-menu_sub > li > a").click(function(){
		if($(this).parent("li").attr("class") != "active"){
			$(".subl-menu_sub > li").removeClass("active"); //<-이부분 없애면 다른 메뉴 누를시 자동 닫기는거 없어짐. 클릭으로 열리고 닫김.
			$(this).parent("li").addClass("active");
		}else{
			$(this).parent("li").removeClass("active");
		}
	});

	$('#footer .footer-site .btn-site-open').on('click',function(e){
		var btn = $(this);
		var lst = btn.next();
		openDropDown(btn,lst);
	});

	$('#footer .footer-site .btn-site-close').on('click',function(e){
		var btn = $(this);
		var lst = btn.parent();
		var open_btn = lst.prev();
		closeDropDown(btn,lst,open_btn);
	});
});

//모바일메뉴 열고닫기 btn
function main_navToggle(btn){ //파라미터1 = btn인데 btn이 여기서는 <a>
	$(btn).parents('.gnb_btn').siblings('.gnb_btn').removeClass('active');
	$(btn).parents('.gnb_btn').toggleClass('active');
}

//swiper 재생/정지 컨트롤
function playBtnControl(btn, slide){
	var btn_el = $(btn);
	var text = $(btn).text();
	var slide_el = document.querySelector(slide).swiper;
	if(text == '일시정지'){
		slide_el.autoplay.stop();
		btn_el.attr('class','control play');
		$(btn).text('재생');
	} else if(text == '재생') {
		slide_el.autoplay.start();
		btn_el.attr('class','control stop');
		$(btn).text('일시정지');
	}
}


$(function(){
	//배너1
	var swiper1 = new Swiper('.swiper-container', {
		slidesPerView: 1,
		speed: 500,
		centeredSlides: true,
		effect : 'fade',
		fadeEffect: {
		crossFade: true
		},
		loop: true,
		autoplay: {
		delay: 4000,
		},
		pagination: {
		  el: ".swiper-pagination",
		  type: "fraction"
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
	
	//공지배너
	var swiper2 = new Swiper('.swiper-container1', {
		direction: 'vertical',
		loop: true,
		autoplay: {
		delay: 4000,
		},
		navigation: {
			nextEl: '.swiper-button-next1',
			prevEl: '.swiper-button-prev1',
		}
	});


	//배너2
	var swiper3 = new Swiper('.banner2 .swiper-container2', {
	  slidesPerView: 1,
	  spaceBetween: 30,
	  parallax: true,
	  loop: true,
	  autoplay: {
		delay: 4000,
	},
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  }
	});

		
	//배너3
	var swiper4 = new Swiper('.swiper-container3', {
	  slidesPerView: 3,
	  spaceBetween: 30,
	  breakpoints: {
		1080: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
		350: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 20,
		}
	  },
	  loop: true,
	  navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
		}
	});
});

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

//DIV 드롭다운
function openDropDown(btn,lst){
	btn.attr('title', '열기');

	if(!lst.is(':animated')) {
		btn.attr('title', (lst.parent('div').hasClass('active')) ? '열기' : '닫기');
		lst.slideToggle(250, 'easeInOutExpo').parent('div').toggleClass('active').siblings('div').removeClass('active').children('div').slideUp(250, 'easeInOutExpo').prev(btn).attr('title', '열기');
	}
}
function closeDropDown(btn,lst,open_btn){
	if(!lst.is(':animated')) {
		lst.slideUp(250, 'easeInOutExpo').parent('div').removeClass('active');	
		lst.siblings(open_btn).attr('title', '열기');
	}
}