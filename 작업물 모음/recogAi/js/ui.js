$(function(){
	// Gnb
	$(".gnb>li>a").hover(function(){
		$(".header_wrap").addClass("active");
	});
	$(".gnb").mouseleave(function(){
		$(".header_wrap").removeClass("active");
	});


	// Sticky menu
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		scrollTop > 550 ? $('#fundraiser_quick').addClass('active') : $('#fundraiser_quick').removeClass('active');
	});
});


// Popup
function popOpen (popup) {
	var popup = $(popup);
	popup.show();
}
function popClose (_this) {
	var _this = $(_this);
	_this.parents(".popup_wrap").hide();
}


// Select
function selectFunc (_this) {
	var _this = $(_this);
	_this.next("ul").stop().toggle();
}
function selectClick (_this) {
	var _this = $(_this);
	_this.parents(".select_box ul").prev().html(_this.find("a").html());
	_this.parents(".select_box ul").stop().toggle();
}


// 달력 한글
$.datepicker.setDefaults({
	dateFormat: "yy-mm-dd",
	prevText: "이전 달",
	nextText: "다음 달",
	monthNames: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
	monthNamesShort: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
	dayNames: ["일", "월", "화", "수", "목", "금", "토"],
	dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
	dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
	showMonthAfterYear: true,
	changeMonth: true,
	changeYear: true,
	yearSuffix: "."
});

/*
// 달력
$( function() {
	$( "#datepicker" ).datepicker().datepicker("setDate", new Date());
});
*/

// Tooltip
function tooltipFunc (_this) {
	var _this = $(_this);
	_this.find(".tooltip").toggle();
}


// Faq
function faqFunc (_this) {
	var _this = $(_this);
	if (_this.closest("li").hasClass("active")) {
		_this.closest("ul").find("li").removeClass("active");
		_this.closest("ul").find("li .text").stop().slideUp(200);
	}else {
		_this.closest("ul").find("li").removeClass("active");
		_this.closest("ul").find("li .text").stop().slideUp(200);
		_this.closest("li").addClass("active");
		_this.closest("li").find(".text").stop().slideDown(200);
	}
}

