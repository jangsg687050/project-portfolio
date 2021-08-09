
// 다음 주소 API 호출 함수
// zip_field1				:	첫번째 주소영역 우편번호 필드 ID
// basic_addr_field1	:	첫번째 주소영역 기본주소 필드 ID
// detail_addr_field1	:	첫번째 주소영역 상세주소 필드 ID
// zip_field2				:	두번째 주소영역 우편번호 필드 ID
// basic_addr_field2	:	두번째 주소영역 기본주소 필드 ID
// detail_addr_field2	:	두번째 주소영역 상세주소 필드 ID
// guide_field				:	주소 사용안함 선택시 안내할 예상주소 정보가 들어갈 영역 ID
// addr_type				:	사용할 주소 형식(1:도로명 주소만, 2:지번 주소만, 3:도로명 주소 + 지번 주소)
// useLang				:	사용할 언어(ko:국문, en:영문) - 생략시 국문
function openDaumPostcode(zip_field1, basic_addr_field1, detail_addr_field1, addr_type, useLang, zip_field2, basic_addr_field2, detail_addr_field2, guide_field) {
	if(useLang == undefined)		useLang	=	"ko";				// 사용할 언어 생략시 기본 국문으로
	if(addr_type == undefined)	addr_type	=	1;					// 사용할 주소형식 생략시 기본 도로명 주소만으로

	daum.postcode.load(function(){
		new daum.Postcode({
			oncomplete: function(data) {
				// 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
				// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
				var fullRoadAddr			=	data.roadAddress;					// 국문 도로명 주소 변수
				var fullRoadAddrEng	=	data.roadAddressEnglish;		// 영문 도로명 주소 변수
				var fullJibunAddr			=	data.jibunAddress;					// 국문 지번 주소 변수
				var fullJibunAddrEng	=	data.jibunAddressEnglish;		// 영문 지번 주소 변수
				var extraRoadAddr		=	'';											// 도로명 조합형 주소 변수
				select_change(fullJibunAddr);								//지역 폼이 있는 경우 지역 폼 입력

				// 법정동명이 있을 경우 추가한다. (법정리는 제외)
				// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
				if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
					extraRoadAddr += data.bname;
				}
				// 건물명이 있고, 공동주택일 경우 추가한다.
				if(data.buildingName !== '' && data.apartment === 'Y'){
					extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
				if(extraRoadAddr !== ''){
					extraRoadAddr = ' (' + extraRoadAddr + ')';
				}
				// 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
				if(fullRoadAddr !== '') {
					fullRoadAddr += extraRoadAddr;
				}

				//----------------------------------------------------------------
				// 우편번호와 주소 정보를 해당 필드에 넣는다.
				//----------------------------------------------------------------

				if(useLang == "ko") {													// 국문 주소정보를 요청한 경우
					switch(addr_type) {
						case 1:																// 도로명 주소만 요청한 경우
							$("#"+zip_field1).val(data.zonecode);					// 도로명 주소파트 우편번호 정보 할당
							$("#"+basic_addr_field1).val(fullRoadAddr);			// 도로명 주소파트 기본주소 정보 할당

							if(detail_addr_field1 == "") {								// 도로명 주소파트 상세주소 필드가 없는 경우
								$("#"+basic_addr_field1).focus();					// 도로명 주소파트 기본주소 필드에 포커스
							} else {															// 도로명 주소파트 상세주소 필드가 있는 경우
								$("#"+detail_addr_field1).focus();					// 도로명 주소파트 상세주소 필드에 포커스
							}
							break;
						case 2:																// 지번 주소만 요청한 경우
							$("#"+zip_field1).val(data.zonecode);					// 지번 주소파트 우편번호 정보 할당
							$("#"+basic_addr_field1).val(fullJibunAddr);			// 지번 주소파트 기본주소 정보 할당

							if(detail_addr_field1 == "") {								// 지번 주소파트 상세주소 필드가 없는 경우
								$("#"+basic_addr_field1).focus();					// 지번 주소파트 기본주소 필드에 포커스
							} else {															// 지번 주소파트 상세주소 필드가 있는 경우
								$("#"+detail_addr_field1).focus();					// 지번 주소파트 상세주소 필드에 포커스
							}
						case 3:																// 도로명 주소 + 지번 주소를 요청한 경우
							$("#"+zip_field1).val(data.zonecode);					// 도로명 주소파트 우편번호 정보 할당
							$("#"+basic_addr_field1).val(fullRoadAddr);			// 도로명 주소파트 기본주소 정보 할당
							$("#"+zip_field2).val(data.zonecode);					// 지번 주소파트 우편번호 정보 할당
							$("#"+basic_addr_field2).val(fullJibunAddr);			// 지번 주소파트 기본주소 정보 할당

							if(detail_addr_field1 == "") {								// 도로명 주소파트 상세주소 필드가 없는 경우
								$("#"+basic_addr_field1).focus();					// 도로명 주소파트 기본주소 필드에 포커스
							} else {															// 도로명 주소파트 상세주소 필드가 있는 경우
								$("#"+detail_addr_field1).focus();					// 도로명 주소파트 상세주소 필드에 포커스
							}
							break;
					}

					if(guide_field != "") {
						// 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
						if(data.autoRoadAddress) {
							var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
							$("#"+guide_field).html('(예상 도로명 주소 : ' + expRoadAddr + ')');				// 예상되는 도로명 주소에 조합형 주소를 추가한다.
						} else if(data.autoJibunAddress) {
							var expJibunAddr = data.autoJibunAddress;
							$("#"+guide_field).html('(예상 지번 주소 : ' + expJibunAddr + ')');					// 예상되는 지번 주소에 조합형 주소를 추가한다.
						} else {
							$("#"+guide_field).html('');
						}
					}
				} else {																				// 영문 주소정보를 요청한 경우
					switch(addr_type) {
						case 1:																		// 도로명 주소만 요청한 경우
							$("#"+zip_field1).val(data.zonecode);					// 도로명 주소파트 우편번호 정보 할당
							$("#"+basic_addr_field1).val(fullRoadAddrEng);				// 도로명 주소파트 기본주소 정보 할당

							if(detail_addr_field1 == "") {										// 도로명 주소파트 상세주소 필드가 없는 경우
								$("#"+basic_addr_field1).focus();							// 도로명 주소파트 기본주소 필드에 포커스
							} else {																	// 도로명 주소파트 상세주소 필드가 있는 경우
								$("#"+detail_addr_field1).focus();							// 도로명 주소파트 상세주소 필드에 포커스
							}
							break;
						case 2:																		// 지번 주소만 요청한 경우
							$("#"+zip_field2).val(data.zonecode);					// 지번 주소파트 우편번호 정보 할당
							$("#"+basic_addr_field2).val(fullJibunAddrEng);			// 지번 주소파트 기본주소 정보 할당

							if(detail_addr_field2 == "") {										// 지번 주소파트 상세주소 필드가 없는 경우
								$("#"+basic_addr_field2).focus();							// 지번 주소파트 기본주소 필드에 포커스
							} else {																	// 지번 주소파트 상세주소 필드가 있는 경우
								$("#"+detail_addr_field2).focus();							// 지번 주소파트 상세주소 필드에 포커스
							}
						case 3:																		// 도로명 주소 + 지번 주소를 요청한 경우
							$("#"+zip_field1).val(data.zonecode);					// 도로명 주소파트 우편번호 정보 할당
							$("#"+basic_addr_field1).val(fullRoadAddrEng);				// 도로명 주소파트 기본주소 정보 할당
							$("#"+zip_field2).val(data.zonecode);					// 지번 주소파트 우편번호 정보 할당
							$("#"+basic_addr_field2).val(fullJibunAddrEng);			// 지번 주소파트 기본주소 정보 할당

							if(detail_addr_field1 == "") {										// 도로명 주소파트 상세주소 필드가 없는 경우
								$("#"+basic_addr_field1).focus();							// 도로명 주소파트 기본주소 필드에 포커스
							} else {																	// 도로명 주소파트 상세주소 필드가 있는 경우
								$("#"+detail_addr_field1).focus();							// 도로명 주소파트 상세주소 필드에 포커스
							}
							break;
					}

					if(guide_field != "") {
						// 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
						if(data.autoRoadAddressEnglish) {
							$("#"+guide_field).html('(Estimated street name address: ' + data.autoRoadAddressEnglish + ')');				// 예상되는 도로명 주소에 조합형 주소를 추가한다.
						} else if(data.autoJibunAddressEnglish) {
							$("#"+guide_field).html('(Estimated jibun address: ' + data.autoJibunAddressEnglish + ')');							// 예상되는 지번 주소에 조합형 주소를 추가한다.
						} else {
							$("#"+guide_field).html('');
						}
					}
				}
			}
		}).open();
	});
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

Date.prototype.format = function(f) {
	if (!this.valueOf()) return " ";

	var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
	var d = this;

	return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
	switch ($1) {
		case "yyyy": return d.getFullYear();
		case "yy": return (d.getFullYear() % 1000).zf(2);
		case "MM": return (d.getMonth() + 1).zf(2);
		case "dd": return d.getDate().zf(2);
		case "E": return weekName[d.getDay()];
		case "HH": return d.getHours().zf(2);
		case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
		case "mm": return d.getMinutes().zf(2);
		case "ss": return d.getSeconds().zf(2);
		case "a/p": return d.getHours() < 12 ? "오전" : "오후";
		default: return $1;
	}
	});
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

//CK에디터 필수 입력 체크
function ckeditor_chk(field, msg) {
	if(CKEDITOR.instances[field].getData() == "") {
		alert (msg+" : 필수 입력 사항입니다.");
		CKEDITOR.instances[field].focus();
		return false;
	} else {
		$("#"+field).val(CKEDITOR.instances[field].getData());
	}
}

//Javascript Date Format
Date.prototype.format = function(f) {
	if (!this.valueOf()) return " ";

	var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
	var d = this;

	return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
	switch ($1) {
		case "yyyy": return d.getFullYear();
		case "yy": return (d.getFullYear() % 1000).zf(2);
		case "MM": return (d.getMonth() + 1).zf(2);
		case "dd": return d.getDate().zf(2);
		case "E": return weekName[d.getDay()];
		case "HH": return d.getHours().zf(2);
		case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
		case "mm": return d.getMinutes().zf(2);
		case "ss": return d.getSeconds().zf(2);
		case "a/p": return d.getHours() < 12 ? "오전" : "오후";
		default: return $1;
	}
	});
};

String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};








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
	  //loop: true,
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
		slidesPerView: 8,
		slidesPerGroup: 8,
		breakpoints: {
			1300: {
				slidesPerView: 8,
				slidesPerGroup: 8,
			},
			730: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
			300: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			}
		},
		navigation: {
			nextEl: '.swiper-button-next4',
			prevEl: '.swiper-button-prev4',
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