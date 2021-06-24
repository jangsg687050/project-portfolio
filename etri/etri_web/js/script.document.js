$(document).ready(function(){
	var datepickers = $(".datepicker");
	if (datepickers.length>0) {
		datepickers.datepicker({
			dateFormat  : 'yy-mm-dd',
			changeMonth : true,
			changeYear  : true,
			yearRange : '-100: +50',
			showAnum: "slide",
			prevText : "이전달",
			nextText : "다음달",
			monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			dayNamesMin:["일","월","화","수","목","금","토"],
			showMonthAfterYear : true,				// 년도 뒤에 월 선택 나오도록
			showOtherMonths : true,					// 1개월내에 다른달 날짜도 출력 여부
			firstDay : 0,									// 0이면 일요일부터 출력, 1:이면 월요일부터 출력
			duration :"fast",								// 달력이 나타나는 속도( slow / normal / fast)
			buttonImageOnly: true
		});
		
		datepickers.addClass("form-calendar").addClass("wd200");
	}

	// 기간 제한 달력(시작일/종료일 선택시 자동 범위 설정)
	var datepickers2 = $(".period_datepicker");
	if (datepickers2.length>0) {
		var dates = $(".period_datepicker").datepicker({
			dateFormat  : 'yy-mm-dd',
			changeMonth : true,
			changeYear  : true,
			yearRange : '-100: +50',
			showAnum: "slide",
			prevText : "이전달",
			nextText : "다음달",
			monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			dayNamesMin:["일","월","화","수","목","금","토"],
			showMonthAfterYear : true,				// 년도 뒤에 월 선택 나오도록
			showOtherMonths : true,					// 1개월내에 다른달 날짜도 출력 여부
			firstDay : 0,							// 0이면 일요일부터 출력, 1:이면 월요일부터 출력
			duration :"fast",						// 달력이 나타나는 속도( slow / normal / fast)
			buttonImageOnly: true,
			onSelect: function(selectedDate) {
				var option = (this.id == "st_date") ? 'minDate' : 'maxDate',
				instance = $(this).data('datepicker'),
				date = $.datepicker.parseDate(
					instance.settings.dateFormat ||
					$.datepicker._defaults.dateFormat,
					selectedDate, instance.settings
				);
				dates.not(this).datepicker('option', option, date);
			}
		});
	}

	// 관리자 달력 기간 일부 제외 기능
	var datepickers3 = $(".r_datepicker");
	if (datepickers3.length>0) {
		var dates2 = $(".r_datepicker").datepicker({
			dateFormat  : 'yy-mm-dd',
			changeMonth : true,
			changeYear  : true,
			yearRange : '-100: +50',
			showAnum: "slide",
			prevText : "이전달",
			nextText : "다음달",
			monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			dayNamesMin:["일","월","화","수","목","금","토"],
			showMonthAfterYear : true,				// 년도 뒤에 월 선택 나오도록
			showOtherMonths : true,					// 1개월내에 다른달 날짜도 출력 여부
			firstDay : 0,							// 0이면 일요일부터 출력, 1:이면 월요일부터 출력
			duration :"fast",						// 달력이 나타나는 속도( slow / normal / fast)
			buttonImageOnly: true,
			beforeShowDay: disableAllTheseDays
		});
	}


	// 기간 제한 달력 - 관리자 프로그램등록시 접수기간
	var datepickers4 = $(".period_datepicker2");
	if (datepickers4.length>0) {
		var dates3 = $(".period_datepicker2").datepicker({
			dateFormat  : 'yy-mm-dd',
			changeMonth : true,
			changeYear  : true,
			yearRange : '-50: +50',
			showAnum: "slide",
			prevText : "이전달",
			nextText : "다음달",
			monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			dayNamesMin:["일","월","화","수","목","금","토"],
			showMonthAfterYear : true,				// 년도 뒤에 월 선택 나오도록
			showOtherMonths : true,					// 1개월내에 다른달 날짜도 출력 여부
			firstDay : 0,							// 0이면 일요일부터 출력, 1:이면 월요일부터 출력
			duration :"fast",						// 달력이 나타나는 속도( slow / normal / fast)
			buttonImageOnly: true,
			onSelect: function(selectedDate) {
				var option = (this.id == "receipt_period_st") ? 'minDate' : 'maxDate',
				instance = $(this).data('datepicker'),
				date = $.datepicker.parseDate(
					instance.settings.dateFormat ||
					$.datepicker._defaults.dateFormat,
					selectedDate, instance.settings
				);
				dates3.not(this).datepicker('option', option, date);
			}
		});
	}


	// 기간 제한 달력 - 관리자 프로그램등록시 프로그램기간
	var datepickers5 = $(".period_datepicker3");
	if (datepickers5.length>0) {
		var dates4 = $(".period_datepicker3").datepicker({
			dateFormat  : 'yy-mm-dd',
			changeMonth : true,
			changeYear  : true,
			yearRange : '-50: +50',
			showAnum: "slide",
			prevText : "이전달",
			nextText : "다음달",
			monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			dayNamesMin:["일","월","화","수","목","금","토"],
			showMonthAfterYear : true,				// 년도 뒤에 월 선택 나오도록
			showOtherMonths : true,					// 1개월내에 다른달 날짜도 출력 여부
			firstDay : 0,							// 0이면 일요일부터 출력, 1:이면 월요일부터 출력
			duration :"fast",						// 달력이 나타나는 속도( slow / normal / fast)
			buttonImageOnly: true,
			onSelect: function(selectedDate) {
				var option = (this.id == "prg_period_st") ? 'minDate' : 'maxDate',
				instance = $(this).data('datepicker'),
				date = $.datepicker.parseDate(
					instance.settings.dateFormat ||
					$.datepicker._defaults.dateFormat,
					selectedDate, instance.settings
				);
				dates4.not(this).datepicker('option', option, date);
			}
		});
	}

	// 기간 제한 달력 - 관리자 사업등록시 사업기간
	var datepickers6 = $(".period_datepicker4");
	if (datepickers6.length>0) {
		var dates5 = $(".period_datepicker4").datepicker({
			dateFormat  : 'yy-mm-dd',
			changeMonth : true,
			changeYear  : true,
			yearRange : '-50: +50',
			showAnum: "slide",
			prevText : "이전달",
			nextText : "다음달",
			monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			dayNamesMin:["일","월","화","수","목","금","토"],
			showMonthAfterYear : true,				// 년도 뒤에 월 선택 나오도록
			showOtherMonths : true,					// 1개월내에 다른달 날짜도 출력 여부
			firstDay : 0,							// 0이면 일요일부터 출력, 1:이면 월요일부터 출력
			duration :"fast",						// 달력이 나타나는 속도( slow / normal / fast)
			buttonImageOnly: true,
			onSelect: function(selectedDate) {
				var option = (this.id == "biz_period_st") ? 'minDate' : 'maxDate',
				instance = $(this).data('datepicker'),
				date = $.datepicker.parseDate(
					instance.settings.dateFormat ||
					$.datepicker._defaults.dateFormat,
					selectedDate, instance.settings
				);
				dates5.not(this).datepicker('option', option, date);
			}
		});
	}

	// 기간 제한 달력 - 관리자 입주공고 등록시 입주기간
	var datepickers7 = $(".period_datepicker5");
	if (datepickers7.length>0) {
		var dates6 = $(".period_datepicker5").datepicker({
			dateFormat  : 'yy-mm-dd',
			changeMonth : true,
			changeYear  : true,
			yearRange : '-50: +50',
			showAnum: "slide",
			prevText : "이전달",
			nextText : "다음달",
			monthNamesShort:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],
			dayNamesMin:["일","월","화","수","목","금","토"],
			showMonthAfterYear : true,				// 년도 뒤에 월 선택 나오도록
			showOtherMonths : true,					// 1개월내에 다른달 날짜도 출력 여부
			firstDay : 0,							// 0이면 일요일부터 출력, 1:이면 월요일부터 출력
			duration :"fast",						// 달력이 나타나는 속도( slow / normal / fast)
			buttonImageOnly: true,
			onSelect: function(selectedDate) {
				var option = (this.id == "mov_period_st") ? 'minDate' : 'maxDate',
				instance = $(this).data('datepicker'),
				date = $.datepicker.parseDate(
					instance.settings.dateFormat ||
					$.datepicker._defaults.dateFormat,
					selectedDate, instance.settings
				);
				dates6.not(this).datepicker('option', option, date);
			}
		});
	}
	
	var arr_inputText = $("input[type=text]");
	for(var i = 0; i < arr_inputText.length; i++) {
		if(!($("input[type=text]").eq(i).is('[maxlength]'))) {
			$("input[type=text]").eq(i).attr("maxlength", 300);
		}
		
	}
	/*
	if (arr_inputText.length>0) {
		$.each(arr_inputText, function(key, obj){
			var _this = $(obj);
			if (!_this.hasAttr("maxlength")) {
				_this.prop("maxlength", 300);
			}
		});
	}
	*/
	
});