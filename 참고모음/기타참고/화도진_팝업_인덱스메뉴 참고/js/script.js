$(function(){
	//배너1
	var swiper1 = new Swiper('.banner .swiper-container', {
		slidesPerView: 1,
		parallax: true,
		loop: true,
		autoplay: true,
		speed: 300,
		pagination: {
        el: '.swiper-pagination',
        clickable: true,
		type: 'fraction',
		},
	  navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	  }

	});

	//배너2
	var swiper2 = new Swiper('.banner2 .swiper-container2', {
	  slidesPerView: 1,
	  parallax: true,
	  loop: true,
	  autoplay: {
		delay: 4000,
	},
	  navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	  }
	});

	//배너3
	var swiper3 = new Swiper('.swiper-container3', {
	  slidesPerView: 4,
	  spaceBetween: 40,
	  loop: true,
	  autoplay: {
      delay: 4000,
	},
	 breakpoints: {
	1920: {
		slidesPerView: 4,
		slidesPerGroup: 1,
	},
	900: {
		slidesPerView: 4,
		slidesPerGroup: 1,
	},
	100: {
		slidesPerView: 2,
		slidesPerGroup: 1,
		spaceBetween: 20,
	}
	},
	  navigation: {
		nextEl: '.swiper-button-next3',
		prevEl: '.swiper-button-prev3',
		}
	});

	//배너4
	var swiper4 = new Swiper('.swiper-container4', {
	  slidesPerView: 5,
	  slidesPerGroup: 5,
	  breakpoints: {
		1000: {
			slidesPerView: 5,
			slidesPerGroup: 5,
		},
		300: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			navigation: {
			nextEl: '.swiper-button-next4',
			prevEl: '.swiper-button-prev4',
		  }
		}
		}
	});
	
	
});


//swiper 재생/정지 컨트롤
function playBtnControl(btn, slide){
	var btn_el = $(btn);
	var text = $(btn).text();
	var slide_el = document.querySelector(slide).swiper;

	console.log(btn_el);
	console.log(text);
	console.log(slide_el);
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


//검색바
$(document).ready(function(){
	customSelect();
});

//검색바 커스텀 셀렉트 박스
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


//로케이션 바
$(document).ready(function(){
	customSelect2();
});

//로케이션 커스텀 셀렉트 박스
function customSelect2(){
$(".custom-select2 select").each(function() {
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
$(".custom-select2 .select-selected").on("click", function() {
	$("html").one("click", function() {
		$(".custom-select2 .select-control").removeClass("opened");
	});
	$(this)
		.parents(".select-control")
		.toggleClass("opened");
	event.stopPropagation();
});
$(".custom-select2 .select-items div").on("click", function() {
	$(this)
		.parents(".custom-select2")
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

	location.href=$(this).data("value"); // 2021-05-24 박수일 추가
	});
}

//탭
function tab(el, tabName){
	$('.tab-st1 > li > a').removeClass('active');
	$(el).addClass('active');
	$('.tab-info .tab').hide();
	$('.tab-info .'+tabName).show();
}

//모바일메뉴 열고닫기 btn
function main_navToggle(btn){ //파라미터1 = btn인데 btn이 여기서는 <a>
	$(btn).parents('.gnb_btn').siblings('.gnb_btn').removeClass('active');
	$(btn).parents('.gnb_btn').toggleClass('active');
}

//모달팝업
function layer_pop_control(type, popup) { //첫번째 파라미터 -> 여는버튼인지 닫는버튼인지 판단, 두번째 파라미터는 팝업 이름
	if(type == "open"){
		//팝업 열기
		$('#'+popup).show();
		console.log("열림");
	}else if(type =="close"){
		//팝업 닫기
		$(popup).parents('.layer_pop_wrap').hide();
	};
}

$(function(){

//서브페이지 로케이션
$('.select_place .btn_select').on('click', function(e) {
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

//서브페이지 검색 bar
$('.select-wrap .btn_select').on('click', function(e) {
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



//메인메뉴 dropdown
	$('.main_header .depth_01 > li > a').mouseenter(function(){
		console.log("마우스 올림");
		$(this).parent().siblings().find('.sub_menu_wrap > ul').stop().slideUp();
		$(this).parent().find('.sub_menu_wrap > ul').stop().slideDown();
	});

	$('.top_bar').mouseleave(function(){
		//.sub_menu를 벗어나면 css 변경
		$(this).parent().find('.sub_menu_wrap > ul').stop().slideUp();
	});

	$('.sub_menu_wrap > ul > li > a').click(function(){
	$('.sub_menu_wrap > ul > li').removeClass('active');
		$(this).parents('.sub_menu_wrap > ul > li').addClass('active');
	});

	
	//메인메뉴2
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

	//메인pc메뉴
	$(".subl-menu-pc .m-tit > div > a").click(function(){
		$('.subl-menu-pc .m-tit').removeClass('active');
		$(this).parents('li.m-tit').addClass('active');
	});
	$(".subl-menu_sub li a").click(function(){
		$(this).parents().find('.subl-menu-pc .m-tit').removeClass('active');
		$(this).parents('li.m-tit').addClass('active');
	});

	//모바일메뉴
	$(".subl-menu > ul > li").click(function(){
		$(".subl-menu > ul > li").removeClass("active"); //<-이부분 없애면 다른 메뉴 누를시 자동 닫기는거 없어짐. 클릭으로 열리고 닫김.
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
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