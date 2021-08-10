// ie => edge 자동전환 
// if(navigator.userAgent.indexOf('Trident') > 0){
// 	console.log('exLog');
//     alert('이 페이지는 Microsoft Edge, Chrome 브라우저에 최적화 되어있습니다. 확인버튼을 누르면 Edge브라우저로 이동합니다.')
// 	window.location = 'microsoft-edge:' + window.location.href; //url
// }
// else if(/MSIE \d |Trident.*rv:/.test(navigator.userAgent)){
// 	console.log('exLog')
//     alert('이 페이지는 Microsoft Edge, Chrome 브라우저에 최적화 되어있습니다. 확인버튼을 누르면 Edge브라우저로 이동합니다.')
// 	window.location = 'microsoft-edge:' + window.location.href;
// }


$(document).ready(function() {
    // Loader
    // $(window).on('load', function() {
    //     $('#loading').hide();
    // })

    // Nav accodian
    $('.nav_depth1 > a').click(function() {
        if($(this).parent().hasClass('active')) {
            $(this).parents('.nav_wrap').find('.nav_depth1').removeClass('active');
            $(this).parent('.nav_wrap').find('.nav_depth1 .nav_depth2').slideUp(300);
            $(this).parent().removeClass('active');
            $(this).parent().find('.nav_depth2').slideUp(300);
        } else {
            $(this).parents('.nav_wrap').find('.nav_depth1').removeClass('active');
            $(this).parents('.nav_wrap').find('.nav_depth1 .nav_depth2').slideUp(300);
            $(this).parent().addClass('active');
            $(this).parent().find('.nav_depth2').slideDown(300);
        }
    })

    // mobile menu
    $('.btn_nav').click(function() {
        $('.nav_wrap').toggleClass('active');
    })

    // fadeUp animation
	$('.card, .list_item').each(function(i){
        $(this).css('animation-delay', 0.1 * i + 's');
	})

    // scroll animation add
    function reveal() {
        $('.reveal').each(function(){
            var scrlTop = $(window).scrollTop() + $(window).height();
            var cntTop = $(this).offset().top + 50;
            if (scrlTop >= cntTop) {
                $(this).addClass('animated');
            }
        });
    }

    // scroll move
    function scroll(){
        setTimeout(function() {
            reveal();
            $(window).bind('touchmove, scroll', reveal);
        }, 1000);
    } scroll()
    
    // library tab
    $('.library_wrap .list_item').click(function() {
        var dataLink = $(this).attr('data-link');
        var dataCate = $(this).attr('data-cate');

        $('.list_item').removeClass('current'); 
        $(this).addClass('current'); 

        $('.view_box').find('.view_iframe').attr('src', dataCate + '/' + dataLink + '.html');
    });
    $(window).on('load', function() {
        var dataLink = $('.library_wrap .list_item').attr('data-link');
        var dataCate = $('.library_wrap .list_item').attr('data-cate');

        if($('.library_wrap .list_item').hasClass('current')) {
            $('.view_box').find('.view_iframe').attr('src', dataCate + '/' + dataLink + '.html');
        }
    })
});   

// popup
function layerOpen (popup) {
    var popup = $(popup);

    popup.show();
}
function layerClose (_this) {
    var _this = $(_this);

    _this.parents('.layer_wrap').hide();
}
 
// jQuery.scroll
jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

// highlight.js
// hljs.highlightAll(); 최신버전
// hljs.initHighlightingOnLoad(); // v9.13.1
// hljs.initLineNumbersOnLoad();
setTimeout(function () {
    var pres = document.querySelectorAll("pre>code");
    for (var i = 0; i < pres.length; i++) {
        hljs.highlightBlock(pres[i]);
    }
    var options = {
        contentSelector: "#container",
        // Delay in ms used for `setTimeout` before badging is applied
        // Use if you need to time highlighting and badge application
        // since the badges need to be applied afterwards.
        // 0 - direct execution (ie. you handle timing
        loadDelay:0,

        // CSS class(es) used to render the copy icon.
        copyIconClass: "icon_copy",
        // CSS class(es) used to render the done icon.
        checkIconClass: "icon_check",
      
        // hook to allow modifying the text before it's pasted
        onBeforeTextCopied: function(text, codeElement) {
          return text;   //  you can fix up the text here
        }
    };
    window.highlightJsBadge(options);
},10);