


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

//스크롤탑 버튼
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

//아코디언 메뉴
function menuToggle(btn){
		$(btn).parents('.panel-group2').siblings('.panel-group2').removeClass('active');
		$(btn).parents('.panel-group2').toggleClass('active');
};


$(function(){

//햄버거버튼2
document.querySelector('.btn-menu').addEventListener('click', function(){
		this.classList.toggle('active');
	});

//햄버거버튼3
var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
});

//스크롤탑 버튼
	moveTop();

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