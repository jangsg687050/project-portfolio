$(function(){
	hasScrollBarProcess();
	imgNoCash();
	Nav();
	customSelect();
	customSelect2();
	slideTab();
	resizeDoneProcess();
	customLink();
	mainAni();
	newsLetterSlide();
	subTopNavi();
});

// 스크롤 여부 (true of false)
function hasScrollBarProcess(){
	$.fn.hasScrollBar = function() {
		return (this.prop("scrollHeight") == 0 && this.prop("clientHeight") == 0) || (this.prop("scrollHeight") > this.prop("clientHeight"));
	};
}

//이미지 캐싱 방지
function imgNoCash(){
	$('img').attr('src', function() {
		var src = $(this).attr('src');
		if(src.indexOf("?") == -1){
			//이미지 경로에 "?"가 포함되어있지않으면
			return $(this).attr('src') + "?ver=" + Math.random();
		} else {
			//이미지 경로에 "?"가 포함되어있으면
		}
	});
}

//resize 이벤트 함수 한번만 실행
function resizeDoneProcess(){
	var delta = 300;
	var timer = null;
	$(window).on('resize', function() {
		clearTimeout(timer);
		timer = setTimeout(resizeDone, delta);
	});
}

function resizeDone() {
	//customScrollbar();
}

//헤더 인클루드
function headerLoad(){
	$('#header').load('/user/publish/include/header.html',function(e){
		$(this).find('#header').unwrap('#header');
	});
}

//푸터 인클루드
function footerLoad(){
	$('#footer').load('/user/publish/include/footer.html',function(e){
		$(this).find('#footer').unwrap('#footer');
	});
}

//Navigation
function openNav() {
	$('#header .nav-side').addClass('open');
}

function closeNav() {
	$('#header .nav-side').removeClass('open');
}

function Nav(){
	var navMenu = $('#header .nav-side .nav-menu');
	var depth1 = navMenu.find('> li');
	var depth1_cnt = depth1.length;
	var depth2 = navMenu.find('.depth2');

	depth2.each(function(){
		var depth2_menu = $(this).find('> li');
		var depth2_cnt = depth2_menu.length;
		var arrow = "<span class='nav-arrow'></span>";

		$(this).parent().append(arrow);
		$(this).parent().find('> a').click(function(e) {
			e.preventDefault();
			$(this).parent().siblings().find('.nav-arrow').stop().removeClass('active');
			$(this).parent().siblings().find('.depth2').stop().slideUp('100');
			$(this).parent().find('.nav-arrow').stop().toggleClass('active');
			$(this).parent().find('.depth2').stop().slideToggle('100');
		});
	});
}

//커스텀 스크롤바
function customScrollbar(){
	$('.scrollbar-outer').scrollbar({
		"onDestroy": function(){
			//소멸될때
			//console.log("소멸");	
		},
		"onInit": function(){
			//처음 초기화될때
			//console.log("처음 초기화");	
		},
		"onScroll": function(){
			//스크롤중
			//console.log("스크롤중");	
		},
		"onUpdate": function(){
			//크기계산전
			//console.log("크기계산전");
		}
	});
}

//커스텀 셀렉트박스
function customSelect(){
	$(".custom-select-trigger").on("click", function() {
		var select_height = $(this).outerHeight() + $(this).next(".custom-options").outerHeight();
		$(this).parents('.custom-select-wrapper').siblings().find(".custom-select").removeClass("opened");
		$(this).parents('.custom-select-wrapper').siblings().find(".custom-select-bg").css("height","");
		$("html").one("click", function() {
			$(".custom-select").removeClass("opened");
			$(".custom-select-bg").css("height","");
		});
		$(this).parents(".custom-select").toggleClass("opened");

		if($(this).parents(".custom-select").hasClass('opened')){
			$(this).parents(".custom-select").find(".custom-select-bg").css("height",select_height);
		} else {
			$(this).parents(".custom-select").find(".custom-select-bg").css("height","");
		}
		
		event.stopPropagation();
	});
	$(".custom-option").on("click", function() {
		$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
		$(this).parents(".custom-select").removeClass("opened");
		$(".custom-select-bg").css("height","");
	});
}

//커스텀 셀렉트박스2(검색과 함께 쓰일때)
function customSelect2(){
	$(".custom-select2 select").each(function() {
		var template = '<div class="select-control">';
		var optionTemplate = "";
		var selectedText = "";
		
		$(this)
			.find("option")
			.each(function() {
				var cls_selected = '';
				if($(this).attr("selected")) {
					selectedText = $(this).text();
					cls_selected = 'selection';
				}
				
				optionTemplate +=
					"<div " +
					" data-value=" + $(this).attr("value") +
					" class=" + cls_selected +
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

		//Event 실행
		$(this)
			.parents(".custom-select2")
			.find("select").trigger('click', [this]);
	});
}

//커스텀 링크
function customLink(){
	$('*[data-href]').on('click', function() {
		var href = $(this).data("href");
		//새창
		//window.open(href);

		//현재페이지
		location.href=href;
	});
};

//슬라이드 탭
function slideTab(){
	var tab = $('.tab-s1 .tab-list');
	var totalWidth = 0;

	tab.each(function(){
		var tabItem = $(this).find('> li').length;

		var btnPrevItem = "<button class='tab-control prev'></button>";
		var btnNextItem = "<button class='tab-control next'></button>";

		//탭이 4개 이상일경우 슬라이드 추가
		if(tabItem > 4){
			$(this).parents('.tab-s1').addClass('tab-slide');
			$(this).before(btnPrevItem);
			$(this).after(btnNextItem);
		}
	});

	//탭 슬라이드 컨트롤
	$(".tab-s1 .tab-control.prev").click(function() {
		var tabListWidth = $(this).parent('.tab-s1').find(".tab-list > li").outerWidth();
		$(this).parent('.tab-s1').find(".tab-list").animate({
			scrollLeft: "-=" + tabListWidth
		}, 'fast');
	});

	$(".tab-s1 .tab-control.next").click(function() {
		var tabListWidth = $(this).parent('.tab-s1').find(".tab-list > li").outerWidth();
		$(this).parent('.tab-s1').find(".tab-list").animate({
			scrollLeft: "+=" + tabListWidth
		}, 'fast');
	});
};

//레이어 팝업
function modalControl(type, id) {
	var $html = $("html");
	if (type == "o") {
		$html.addClass("modal-open");
		var $modalOn = $(id).addClass("modal-on").on("click", function(e) {
			if ($modalOn.hasClass("modal-overlay") && $(".modal-n-wrap").is(e.target)) {
				$modalOn.removeClass("modal-on");
				$html.removeClass("modal-open");
			}
		});
	} else if (type == "c") {
		$(".modal-new.modal-on").removeClass("modal-on");
		$html.removeClass("modal-open");
	}
}

//메인 페이지 메뉴 애니메이션
function mainAni() {
	var menu = $('#contents.main .main-menu .main-menu-list > li > .item');
    menu.on({
		mouseenter: function () {
			var idx = $(this).parents('li').index() + 1;
			$(this).find('.item-img img').prop('src','/user/images/main/main_list'+idx+'_on.gif');
			$(this).find('.item-btn img').prop('src','/user/images/main/main_list_btn'+idx+'_on.png');
		},
		mouseleave: function () {
			var idx = $(this).parents('li').index() + 1;
			$(this).find('.item-img img').prop('src','/user/images/main/main_list'+idx+'.png');
			$(this).find('.item-btn img').prop('src','/user/images/main/main_list_btn'+idx+'.png');
		}
  });
}

//뉴스레터 슬라이드
function newsLetterSlide(){
	var newsLetter = new Swiper(".newsletter-list-slide", {
		slidesPerView: 6,
		spaceBetween: 15,
		breakpoints: {
			0: {
				slidesPerView: 2,
				spaceBetween: 5
			},
			641: {
				slidesPerView: 4,
				spaceBetween: 10
			},
			1024: {
				slidesPerView: 6,
				spaceBetween: 15
			}
		},
		navigation: {
			nextEl: '.newsletter-next',
			prevEl: '.newsletter-prev',
		},
	});
}

//서브 탑 네비게이션
function subTopNavi(){
	$('#js-sub-top-navi').find('.navi-select .select-selected').click(function(){
		$(this).parents('.navi-item2').siblings().find(".select-control").removeClass("opened");
	});
}