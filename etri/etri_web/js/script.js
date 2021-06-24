function fnWarking() {
	alert('작업중입니다.');
}
function fnWaiting() {
	alert('API 대기중입니다.');
}
function isMobile(){
	var filter = "win16|win32|win64|mac|macintel";

	if (navigator.platform) { 
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { // Mobile
			return true;
		 } else { // web
			 return false;
		 }
		 
	}
}
//통화 천단위 콤마
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function copyValueMapToForm(form, mapKVs) {
	form.find("input, select, textarea").each(function(index, obj) {
		$.each(mapKVs, function(key, value) {
			if (obj.name == key) {
				obj.value = value;
			}
		});
	});
}

function getFormatDate(date) {
	var year = date.getFullYear();
	var month = (1 + date.getMonth());
	month = month >= 10 ? month : '0' + month;
	var day = date.getDate();
	day = day >= 10 ? day : '0' + day;
	return year + '-' + month + '-' + day;
}
$(document).ready(function(){
	var hidWidth;
	var scrollBarWidths = 40;

	var widthOfList = function() {
		var itemsWidth = 0;
		$('.bookmark_list > li').each(function() {
			var itemWidth = $(this).outerWidth();
			itemsWidth += itemWidth;
		});
		return itemsWidth;
	};

	var widthOfHidden = function() {
		return (($('.bookmark_list_wrap').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;
	};

	var getLeftPosi = function() {
		let arr = $('.bookmark_list');
		if (arr.length>0) {
			return arr.position().left;
		}
		return 0;
	};

	var reAdjust = function() {
		if (($('.bookmark_list_wrap').outerWidth()) < widthOfList()) {
			$('.scroller-right').show();
		} else {
			$('.scroller-right').hide();
		}

		if (getLeftPosi() < 0) {
			$('.scroller-left').show();
		} else {
			$('.item').animate({
				left: "-=" + getLeftPosi() + "px"
			}, 'slow');
			$('.scroller-left').hide();
		}
	}

	reAdjust();

	$(window).on('resize', function(e) {
		reAdjust();
	});

	$('.scroller-right').click(function() {

		$('.scroller-left').fadeIn('slow');
		$('.scroller-right').fadeOut('slow');

		$('.bookmark_list').animate({
			left: "+=" + widthOfHidden() + "px"
		}, 'slow', function() {

		});
	});

	$('.scroller-left').click(function() {

		$('.scroller-right').fadeIn('slow');
		$('.scroller-left').fadeOut('slow');

		$('.bookmark_list').animate({
			left: "-=" + getLeftPosi() + "px"
		}, 'slow', function() {

		});
	});

	$('.header_scroll').scrollbar();
	
	$('.countUpDown input[count_range]').click(function(e){
		e.preventDefault();
		var type = $(this).attr('count_range');
		var min_num = $(this).parent().attr('min_num');
		var max_num = $(this).parent().attr('max_num');
		var $count = $(this).parent().children('input.count_num');
		var count_val = $count.val();
		
//		alert("##count_val>>" + count_val);
		if(type=='m'){
			if(min_num == null) {
				//제한없을떄 무조건 디폴트 0까지임.
				if(count_val < 1){
					return;
				}
			} else {
				if(Number(count_val) <= Number(min_num)){
					return;
				}
			}
			$count.val(parseInt(count_val)-1);
			
		}else if(type=='p'){
			if(max_num == null) {
				//제한없을땐 무한
			} else {
				if(Number(count_val) >= Number(max_num)){
					return;
				}
			}
			$count.val(parseInt(count_val)+1);
		}
	});

	// LNB 클릭 이벤트
	$(".snb .snb_list > li > a").on('click', function() {
		__this = $(this);
		__this.parent().find('ul').slideUp();
		__this.parent().find('ul').show();
	});

	var toolTipTxt = $('.oc-heading-txt');

	toolTipTxt.each(function(){
		if ($(this)[0].scrollWidth >  $(this).innerWidth()) {
			var toolTipTxt_Txt = $(this).text();
			$(this).attr('title', toolTipTxt_Txt);
			$(this).tooltip({
				placement: "right"
			})
		}
	});
});

//툴팁
function openNav(){
	$('#header').toggleClass('on');
}