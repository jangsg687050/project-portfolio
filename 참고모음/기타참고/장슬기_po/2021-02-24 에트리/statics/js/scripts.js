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