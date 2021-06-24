var file_box = null;
var index_attach = null;
var url_down = null;
var url_delete = null;

var attach_init = function (file_box, idx_attach, url_down, url_delete) {
	this.file_box = file_box;
	this.index_attach = idx_attach;
	this.url_down = url_down;
	this.url_delete = url_delete;

	file_add();
}
var file_init = function() {
	file_add();
}

var file_attach = function(object) {
	var _this = $(object);
	_this.siblings(".file_name").text(_this.val().replace(/.*(\/|\\)/, ""));
	_this.siblings(".file_remove").show();
	file_add();
}

var file_add = function() {
	var label = this.file_box.find("#select_attach");
	label.attr("for", "multiple_attach_"+this.index_attach)

	var li = $("<li />", {
		"class" : "file_list"
	});
	var input = $("<input />", {
			"type" : "file"
		,	"id" : "multiple_attach_"+this.index_attach
		,	"name" : "multiple_attach"
		,	"class" : "input_file"
		,	"onchange" : "file_attach(this); "
	});
	var span = $("<span/>", {
			"class" : "file_name"
		,	"text" : "파일을 선택해주세요."
	});
	var button = $("<a/>", {
			"href" : "javascript: void(0); "
		,	"onclick" : "file_del(this); "
		,	"class" : "file_remove text-hide"
		,	"text" : "첨부파일 삭제"
		,	"style" : "display: none; "
	});
	li.append(input).append(span).append(button);
	this.file_box.find("ul").append(li);

	this.index_attach = this.index_attach+1;
}

var file_del = function(object) {
	var _this = $(object);
	var input = _this.siblings("input");
	if (input.val()) {
		var li = _this.closest("li");
		li.remove();
	}
}

var file_down = function(json) {
	var params = "?";
	$.each(json, function(key, val){
		params = params + key + "=" + val + "&";
	});

	document.hidden_iframe.location.href = this.url_down + params;
}
var file_delete = function(object, json) {
	var _this = $(object);
	var li = _this.closest("li");
	if (confirm("정말로 삭제하시겠습니까?\n삭제한 첨부파일은 복구가 안됩니다.")) {
		var params = json;

		$.ajax({
			type : "post",
			url : this.url_delete,
			data : params,
			dataType : "json",
			success : function(data) {
				if (data.status == "OK") {
					li.remove();
				} else {
					alert(data.message);
				}
			},
			error : function(data) {
				alert("잠시 후 다시 시도해주세요.");
				return false;
			}
		});
	}
}