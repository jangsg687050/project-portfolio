String.prototype.strip =  function() {
	return this.replace(/^\s+/, '').replace(/\s+$/, '');
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

/* form clear 함수 */
$.fn.clearForm = function(flag_blankValue) {
	if (flag_blankValue==null || flag_blankValue) {
		return this.each(function() {
			var type = this.type
			var tag = this.tagName.toLowerCase()
			var name = $(this).attr("name");
				if (tag === 'form'){
						return $(':input',this).clearForm();
				}
				if (type === 'text' || type === 'password' || tag === 'textarea'){
						if (name == 'page') {
							this.value = '1';
						} else if (name != 'search') {
							this.value = '';
						}
				}else if (type === 'checkbox' || type === 'radio'){
						this.checked = false;
				}else if (tag === 'select'){
						this.selectedIndex = 0;
				}
		});
	} else {
		return this.each(function(){
			this.reset();
		});
	}
};

String.prototype.lpad = function(padLength, padString){
	var s = this;
	while(s.length < padLength)
		s = padString + s;
	return s;
}