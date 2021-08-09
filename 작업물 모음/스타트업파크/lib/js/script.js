var App = {

	accessibleMenu: function(){
		$menu = $('.dropdown');
		$menuItem = $menu.find('> button');

		$subMenu = $('.dropdown-content');
		$subMenuItem = $subMenu.find('> a');
		$submenuLastItem = $subMenu.find('> a:last-child');

		$menuItem.bind({
			focus: function(){
				$subMenu.parent().removeClass('is-show');
				if($(this).next($subMenu).parent()){
					$(this).next($subMenu).parent().addClass('is-show');
				}
			}
		});

		$subMenuItem.bind({
			focus: function(){
				$(this).parent().parent().parent().addClass('is-show');
			}
		});

		$submenuLastItem.bind({
			blur: function(){
                $subMenu.parent().removeClass('is-show');
			}
		});
	},

	cancelAccessibleMenu: function(){
		$(document).click(function(){
			if($subMenu.parent().hasClass('is-show')){
				$subMenu.parent().removeClass('is-show');
			}
		});
	},

    scrollAddMenu: function(){
        $scrollIcon = $('.content').find('.table_scroll');
        $scrollIcon.before('<div class="mo_icon_scroll"></div>');
        
	},
};
$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});
$(document).ready(function(){
    $(".moveinput input,.moveinput2 input").on("mouseleave",function(){
        var va = this.value;
        if (va){
            $(this).parent().addClass("active");
        }
    })
    $(".moveinput input,.moveinput2 input,.moveinput textarea,.moveinput2 textarea").on("focus",function(){
        $(this).parent().addClass("active");
    })
    $(".moveinput input,.moveinput2 input").on("blur",function(){
        var va = this.value;
        if (va){
        } else {
            $(this).parent().removeClass("active");
        }
    })
    $(".moveinput textarea,.moveinput2 textarea").on("blur",function(){
        var va = this.value;
        if ($(this).val()==""||$(this).val()==" "){
            $(this).parent().removeClass("active");
        } else {
        }
    })
    $(".btn_gnb").on("click",function(){
        w = $("html").width();
        if (w > 1023) {
            var el = $(this);
            $(".menuwrap").addClass("open");
            $("html").addClass("modal-open");
            el.attr('data-focus','on'); // 레이어 팝업이 닫힐 때를 위한 표시 - 웹접근성
            $(".menuwrap").attr("tabindex","0");
            $(".menuwrap").focus();
        } else {
            //$(".wrap:not(.mainwrap) .rightquick").addClass("on");

			// 임시 추가
            $(".rightquick").addClass("on");
            $("html").addClass("modal-open");
		
		}
    })
    $(".rightquick .head .mmenu_close").on("click",function(){
        $(".rightquick").removeClass("on");
        $("html").removeClass("modal-open");
    })
    $(".menuwrap .btn_close").on("click",function(){
        $(".menuwrap").removeClass("open");
        $("html").removeClass("modal-open");
        $("a[data-focus~=on]").focus();

        window.setTimeout(function(){
            $("a[data-focus~=on]").removeAttr("data-focus");
        },500); // 역할을 다하고 필요없어진 표시 삭제
    })
    $("footer .btn-hisback").on("click",function(){
        window.history.back();
    })

    $(".btn_util .btn_search").on("click",function(){
    	var el_search = $(".search_head_wrap_li");
        el_search.toggleClass("active");
        /*
    	if (el_search.hasClass("active")) {
    		el_search.removeClass("active");
    	} else {
    		el_search.addClass("active");
    	}
        */
    })
    $(".search_head_close").on("click",function(){
        $(".search_head_wrap_li").removeClass("active");
    })
    $(".sub_con .content h3").on("click",function(){
        w = $("html").width();
        if (w < 1024) {
            $(this).toggleClass("on");
            $(".sub_con .lnb").toggleClass("on");
        }
    })
    $(".mmenu > li > button").on("click",function(){
        $(".mmenu > li > button").removeClass("on");
        $(this).addClass("on");
    })
    $(".rightquick").on("mouseover",function(){
        w = $("html").width();
        if (w > 1023) {
            $(this).addClass("on");
        }
    });
    $(".rightquick").on("mouseleave",function(){
        w = $("html").width();
        if (w > 1023) {
            $(this).removeClass("on");
        }
    });
    $(".rquick a").on("focus",function(){
        w = $("html").width();
        if (w > 1023) {
            $(".rightquick").addClass("on");
        }
    });
    $(".rquick a").on("blur",function(){
        w = $("html").width();
        if (w > 1023) {
            $(".rightquick").removeClass("on");
        }
    });
	App.accessibleMenu();
	App.cancelAccessibleMenu();
	App.scrollAddMenu();
    $(".table_scroll").scroll(function() {
		if ($(this).scrollLeft() > 0) {
			$('.table_scroll:before').fadeIn();
		} else {
			$('.table_scroll:before').fadeOut();
		}
	});
});

//탑버튼
function moveTop(){
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('footer .btn-top,footer .btn-hisback').fadeIn();
		} else {
			$('footer .btn-top,footer .btn-hisback').fadeOut();
		}
	});
	$('footer .btn-top').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});
}

//swiper 재생/정지 컨트롤
function playBtnControl(btn, slide){
	var btn_el = $(btn);
	var text = $(btn).text();
	var slide_el = document.querySelector(slide).swiper;
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

//스크롤 고정
	function scrollDisable(){
		$('html, body').addClass('hidden');
	}
	function scrollAble(){
		$('html, body').removeClass('hidden');
	}
	function scrollDisable(){
    $('body').addClass('scrollDisable').on('scroll touchmove mousewheel', function(e){
        e.preventDefault();
    });
}
function scrollAble(){
    $('body').removeClass('scrollDisable').off('scroll touchmove mousewheel');
}
