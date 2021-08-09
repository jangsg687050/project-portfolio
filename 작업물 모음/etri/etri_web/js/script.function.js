//Validation
var getFieldValue = function(field) {
	var fieldValue = null;
	if (field!=null) {
		if (typeof field=="object") {
			if (field.jquery!=undefined) {
				fieldValue = field.val();
			} else {
				fieldValue = field.value;
				if (typeof fieldValue=="undefined") {
					var fieldType = field[0].type;
					if (fieldType=='radio' || fieldType=='checkbox') {
						for (var idx=0; idx<field.length; idx++) {
							if (field[idx].checked) {
								fieldValue = field[idx].value;
								break;
							}
						}
					} else {
						fieldValue = field[0].value;
					}
				}
			}
		} else if (typeof field=="string") {
			fieldValue = getFieldValue(document.getElementById(field));
			if (fieldValue==null) {
				fieldValue = getFieldValue(document.getElementsByName(field));
			}
		}
	}

	return fieldValue;
}

var getFieldCheck = function(field) {
	var fieldChecked = null;
	if (field!=null) {
		if (typeof field=="object") {
			if (field.jquery!=undefined) {
				fieldChecked = field.is(":checked");
			} else {
				fieldChecked = field.checked;
				if (typeof fieldChecked=="undefined") {
					field.forEach(function(v, k){
						fieldChecked = fieldChecked || getFieldCheck(v);
					});
				}
			}
		} else if (typeof field=="string") {
			fieldChecked = getFieldCheck(document.getElementById(field));
			if (fieldChecked==null) {
				fieldChecked = getFieldCheck(document.getElementsByName(field));
			}
		}
	}

	return fieldChecked;
}

// cookies
var setCookie = function(name, value, expiredays) {
	var todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

var getCookie = function(name) {
	var nameOfCookie = name + "=";
	var x = 0;
	while(x <= document.cookie.length) {
		var y = (x + nameOfCookie.length);
		if(document.cookie.substring(x, y) == nameOfCookie) {
			if ((endOfCookie=document.cookie.indexOf(";", y)) == -1) {
				endOfCookie = document.cookie.length;
			}
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf(" ", x) + 1;
		if(x == 0) {
			break;
		}
	}
	return "";
}

var delCookie = function(name) {
	var date = new Date();
	document.cookie = name + "= " + "; expires=" + date.toUTCString() + "; path=/";
}

// text 타입의 element strip
var form_strip = function(f) {
	var elList = f.getElementsByTagName("input");
	for (i=0;i<elList.length;i++ ){
		if (elList[i].type.toLowerCase() == "text" || elList[i].type.toLowerCase() == "textarea"){
			elList[i].value = elList[i].value.strip();
		}
	}
}


// window 띄우기
var open_popup = function(URL, name, sizeWidth, sizeHeight, posTop, posLeft) {
	if (!chk_number(sizeWidth)) {
		alert("창의 너비를 지정해주세요.");
		return null;
	} else if (!chk_number(sizeHeight)) {
		alert("창의 높이를 지정해주세요.");
		return null;
	} else

	if (chk_number(posTop)) {
		posTop = 0;
	} else
	if (chk_number(posLeft)) {
		posLeft = 0;
	}

	var arr_feature = [
			"location=0"
		,	"toolbar=no"
		,	"width="+sizeWidth
		,	"height="+sizeHeight
		,	"top="+posTop
		,	"left="+posLeft
		,	"directories=no"
		,	"status=no"
		,	"scrollbars=Yes"
		,	"resizable=no"
		,	"menubar=no"
		,	"border=0"
	];

	var win = open_popup2(URL, name, arr_feature.join(","));
	win.focus();

	return win;
}

// 기본 팝업창
var open_popup2 = function(url,name,features) {
	return window.open(url, name, features);
}

// SNS 공유
var snsLinker = function(sns) {
	var url = "";
	var title = getFieldValue('sns_title');
	var link  = document.location;

	switch(sns) {
		case "facebook" :
			url = "http://www.facebook.com/sharer.php?u="+encodeURIComponent(link)+"&t="+encodeURIComponent(title);
			layout = "width=645px, height=370px";
			break;
		case "twitter" :
			url = "http://twitter.com/home?status="+encodeURIComponent(title)+" : "+encodeURIComponent(link);
			layout = "width=750px, height=250px";
			break;
		case "google_plus" :
			url = "https://plus.google.com/share?url="+encodeURIComponent(link)+"&t="+encodeURIComponent(title);
			layout = "width=1000px, height=450px";
			break;
		case "band":
			url = "http://www.band.us/plugin/share?body="+encodeURIComponent(title)+encodeURIComponent("\n")+encodeURIComponent(link);
			layout = "width=550px, height=580px, location=no, resizable=yes, status=no, scrollbars=no, personalbar=no, toolbar=no, menubar=no";
			break;
		case "kakaostory":
			url = "https://story.kakao.com/share?url="+encodeURIComponent(link);
			layout = "width=600px, height=460px, location=no, resizable=yes, status=no, scrollbars=no, personalbar=no, toolbar=no, menubar=no";
			break;

	}

	var retPop = open_popup2(url, 'sns', layout);
	if(retPop == null){
		alert("팝업 차단을 사용안함으로 설정해주시기 바랍니다." );
	}
}

// php에서 urlencode한 문자열을 urldecode 처리해주는 함수
var urldecode = function(str) {
   return decodeURIComponent((str+'').replace(/\+/g, '%20'));
}


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
var openDaumPostcode = function(zip_field1, basic_addr_field1, detail_addr_field1, addr_type, useLang, zip_field2, basic_addr_field2, detail_addr_field2, guide_field) {
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

var copyValueMapToForm = function(form, mapKVs) {
	form.find("input, select, textarea").each(function(index, obj) {
		$.each(mapKVs, function(key, value) {
			if (obj.name == key) {
				obj.value = value;
			}
		});
	});
}

//Form Submit 중복 방지
var prevent_data = null;
var prevent_period = 10;
var fnPrevent_check = function() {
	//중복 방지 예방 시간 - 단위(초)
	var current_date = new Date();
	var chk_pass = false;

	if (prevent_data!=null) {
		var prev_time = Math.floor(prevent_data.getTime() /1000);
		var now_time = Math.floor(current_date.getTime() /1000);

		var gap_time = (now_time -prev_time);

		if ( gap_time>prevent_period ) {
			prevent_data = current_date;
			chk_pass = true;

		} else {
			alert( (prevent_period -gap_time) +" 초 후 다시 시도해주세요.");
			chk_pass = false;

		}

	} else {
		prevent_data = current_date;
		chk_pass = true;
	}

	if (chk_pass) {
		fnLoading_show();
	}

	return chk_pass;
}
var fnPrevent_init = function() {
	//중복방지 시간 초기화
	prevent_data = null;

	//로딩바 지우기
	fnLoading_hide();
}

//로딩페이지
var fnLoading_show = function() {
	var div = $("<div />",{
			"id" : "viewLoading"
	})
	var div_loader = $("<div />", {
			"class" : "lds-spinner"
		,	"html" : "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"
	});
	div.append(div_loader);

	$("body").append(div);
}
var fnLoading_hide = function() {
	$("#viewLoading").remove();
}

/*
 * 조직도 불러오기
 * loadTP->A : 부서
 * loadTP->B : 팀
 * loadTP->C : 직원
 */
var fnAjax_org = function(loadTP, parent_sq) {
	var json_data = null;
	var params = {
			"TP" : "org"
		,	"loadTP" : loadTP
		,	"parent_sq" : parent_sq
	}

	$.ajax({
		type : "post",
		url : fnLoad_contextPath() +"/other/process.json.do",
		data : params,
		async : false,
		dataType : "json",
		success : function(res) {
			if (res.status!="OK") {
				alert(res.message);
				return null;
			}
			
			json_data = res.data; 
		},
		error : function(data) {
			alert("잠시 후 다시 시도해주세요.");
			return false;
		}
	});
	
	return json_data;
}
