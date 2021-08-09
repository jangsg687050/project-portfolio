/* -------------------------- 필수 입력 필드의 입력값 체크 함수 START ----------------------------------*/
/*
chk_field 함수 이외에 chk_range, chk_radio를 함께 사용한다.

chk_field에서의 체크 종류
 - null    : 값이 없으면 false
 - email   : email 형식에 맞지 않으면 false
 - checked : checkbox가 체크되어있지 않으면 false
 - number  : 값이 숫자로만 되어있으면 true
 - alpha   : 값이 알파벳으로만 되어있으면 true
 - alnum   : 값이 알파벳, 숫자, 언더바로만 되어있으면 true


* 사용예 )
function chk_f(f) {
	return (chk_field ($("#usr_id")  , "null"     , "아이디")
		&&  chk_range ($("#usr_id")  , 4, 10      , "아이디")
		&&  chk_field ($("#usr_id")  , "email"    , "이메일")
		&&  chk_field ($("#usr_pass"), "null"     , "비밀번호")
		&&  chk_field ($("#chkbox")  , "checked"  , "체크박스")
		&&  chk_field ($("#select")     , "null"     , "선택")
		&&  chk_field ($("#radio")  , "checked"  , "체크박스") <-- radio 일경우
	);
}
*/
var chk_field = function(field, check, msg, autoFlag) {
	if (autoFlag!=false) {
		autoFlag = true;
	}
	var failFlag = false;
	var fieldValue = getFieldValue(field);

	switch(check) {
		case "null": // null 체크
			if (autoFlag==true) {
				msg = msg +" : 필수 입력 사항입니다.";
			}

			failFlag = (fieldValue==null || fieldValue=="" || fieldValue.length<1);
		break;

		case "editor": //null 체크
			if (autoFlag==true) {
				msg = msg +" : 필수 입력 사항입니다.";
			}

			failFlag = !chk_ckeditor(field);
		break;

		case "hidden": //null 체크
			if (autoFlag==true) {
				msg = msg +" : 필수 입력 사항입니다.";
			}

			failFlag = !chk_field2(field, "null", null, false);
		break;

		case "checked": //체크박스
			if (autoFlag==true) {
				msg = msg +" : 필수 체크 사항입니다.";
			}

			failFlag = !getFieldCheck(field);
		break;

		case "email": //이메일
			if (autoFlag==true) {
				msg = "올바른 메일주소가 아닙니다.";
			}

			failFlag = !chk_email(fieldValue);
		break;

		/*
		case "date": //날짜
			if (autoFlag==true) {
				msg = "올바른 날짜가 아닙니다.";
			}
		break;
		*/

		case "number": //숫자만 입력.
			if (autoFlag==true) {
				msg = msg +" : 숫자만 입력 가능합니다.";
			}

			failFlag = !chk_number(fieldValue);
		break;

		default:
			msg = "Validation을 지원하지 않은 속성입니다.";
			failFlag = false;
		break;
	}

	if (failFlag) {
		if (msg!=null) {
			alert (msg);
		}

		try {
			switch(check) {
				case 'hidden':
				case 'editor':
					break;
				default:
					field.focus();
					field.select();
					break;
			}
		} catch(e) {
			console.log(e);
		}
	}

	return !failFlag;
}

var chk_ckeditor = function(field) {
	if(CrossEditor.GetTextValue() == "") {
		return false;
	} else {
		$("#"+field).val(CrossEditor.GetBodyValue());
	}

	return true;
}

var chk_number = function(fieldValue) {
	return !isNaN(Number(fieldValue));
}

var chk_email = function(asValue) {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

// 체크박스나 라디오버튼 선택시 특정 텍스트 필드 필수 입력 체크
var chk_options = function(field1, field2, mode, msg) {
	if(mode == 0) {
		if(field1.checked!=true) {
			return chk_field(field2, "null", msg);
		}
	} else {
		if(field1.checked==true) {
			return chk_field(field2, "null", msg);
		}
	}
	return true;
}

// 체크박스나 라디오버튼 선택시 특정 라디오/체크박스 필드 필수 입력 체크
var chk_options2 = function(field1, field2, mode, msg) {
	if(mode == 0) {
		if(field1.checked!=true) {
			return chk_radio(field2, msg);
		}
	} else {
		if(field1.checked==true) {
			return chk_radio(field2, msg);
		}
	}
	return true;
}


// 텍스트 필드 입력시 특정 텍스트 필드 필수 입력 체크
var chk_options3 = function(field1, field2, msg) {
	val1 = field1.val();
	val2 = field2.val();

	if(field1.val()) {					// 필드1에 입력값이 있는 경우
		if(field2.val()) {				// 필드2에 입력값이 있는 경우
			return true;
		} else {							// 필드2에 입력값이 없는 경우
			alert(msg + " : 필수 입력 사항입니다.");
			field2.focus();
			return false;
		}
	} else {								// 필드1에 입력값이 없는 경우
		return true;
	}
}

// 글자 수 체크.
//min: 최소글자수, max: 최대글자수
var chk_valueRange = function(field, min, max, msg) {
	var fieldValue = getFieldValue(field);
	if (typeof fieldValue!="undefined") {
		if (fieldValue.length >=min && fieldValue.length <=max) {
			return true;
		} else {
			alert (msg+" : "+min+"글자 이상, "+max+"글자 이하로 입력하세요.");
			field.select();
			field.focus();
			return false;
		}
	}
}

// 두개 필드의 값이 같은지 비교
var chk_fieldSame = function(field1, field2, msg) {
	var fieldValue1 = getFieldValue(field1);
	var fieldValue2 = getFieldValue(field2);

	if (typeof fieldValue1=="undefined") {
		return false;
	} else if (typeof fieldValue2=="undefined") {
		return false;
	} else {
		if (fieldValue1!=fieldValue2) {
			alert(msg + " : 값이 일치하지 않습니다.");
			field1.focus();
			return false;
		}
	}
}

