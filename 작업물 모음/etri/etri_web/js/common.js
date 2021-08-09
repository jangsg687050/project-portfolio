$(function() {
    $('#pub_header').load("/publish/header.html");
    $('#pub_sidebar').load("/publish/aside.html");
    $('#pub_footer').load("/publish/footer.html");
});

//팝업
function modalControl(type, id, size) {
	var $html = $("html");
	if (type == "o") {
		$html.addClass("modal-open");
		var $modalOn = $(id).addClass("modal-on").on("click", function(e) {
			if ($modalOn.hasClass("modal-overlay") && $(".modal-n-wrap").is(e.target)) {
				$modalOn.removeClass("modal-on");
				$html.removeClass("modal-open");
			}
		});
		$modalOn.find(".modal-n-body").addClass("modal-" + size);
	} else if (type == "c") {
		$(".modal-new.modal-on").removeClass("modal-on");
		$html.removeClass("modal-open");
	}
}