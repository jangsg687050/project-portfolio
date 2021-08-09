$(function(){
    /*==================================================================
    [ Focus input ]*/
    $('.validate-input').each(function(){
		if($(this).val().trim() != "") {
			$(this).addClass('has-val');
		}
		else {
			$(this).removeClass('has-val');
		}
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        });
    });

	//메뉴
	$('.menu-link').click(function(){
		$('#menu').show();
	});

	$('#menu .close').click(function(){
		$('#menu').hide();
	});

});

//팝업 공통
function modalControl(type, id) {
	var $html = $("html");
	if (type == "o") {
		$html.addClass("modal-open");
		var $modalOn = $(id).addClass("modal-on").on("click", function(e) {
			if ($modalOn.hasClass("modal-overlay") && $(".modal-n-wrap").is(e.target)) {
				$modalOn.removeClass("modal-on");
				$html.removeClass("modal-open");
			}
		});
	} else if (type == "c") {
		$(".modal-new.modal-on").removeClass("modal-on");
		//$html.removeClass("modal-open");
	}
}

//메뉴팝업시 바디스크롤 고정
var posY;
        
	$(".menu-link").on("click", function(e){
		posY = $(window).scrollTop();
		
		$("html, body").addClass("not_scroll");
		$(".menu").css("display","block");
	});

	$(".close").on("click", function(){
		$("html, body").removeClass("not_scroll");
		$(".menu").css("display","none");
		posY = $(window).scrollTop(posY);
});