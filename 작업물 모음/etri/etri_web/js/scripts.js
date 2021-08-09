function fnWarking() {
	alert('작업중입니다.');
}
function fnWaiting() {
	alert('SODAS+ API 대기중입니다.');
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
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};

//yyyy-mm-dd 형태로 포멧팅하여 날짜 반환
Date.prototype.yyyymmdd = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1).toString();
    var dd = this.getDate().toString();
 
    return yyyy + "-" + (mm[1] ? mm : '0'+mm[0]) + "-" + (dd[1] ? dd : '0'+dd[0]);
}