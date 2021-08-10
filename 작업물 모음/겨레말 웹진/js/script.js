//문자 변환
function transc (){
	//console.log(location.href.indexOf('_sub3') <0);

	var replace_str = $('.sub_page').html();
	replace_str = replace_str.replace(/\《/g,'<span class="nanum">《</span>');
	replace_str = replace_str.replace(/\》/g,'<span class="nanum">》</span>');

	replace_str = replace_str.replace(/\『/g,'<span class="nanum">『</span>');
	replace_str = replace_str.replace(/\』/g,'<span class="nanum">』</span>');

	replace_str = replace_str.replace(/\「/g,'<span class="nanum">「</span>');
	replace_str = replace_str.replace(/\」/g,'<span class="nanum">」</span>');

	replace_str = replace_str.replace(/\〈/g,'<span class="nanum">〈</span>');
	replace_str = replace_str.replace(/\〉/g,'<span class="nanum">〉</span>');

	replace_str = replace_str.replace(/\【/g,'<span class="nanum">【</span>');
	replace_str = replace_str.replace(/\】/g,'<span class="nanum">】</span>');
	$('.sub_page').html(replace_str);
}

function goQuiz(btn,type) {
	switch (type){
		case "start" :
			$('.quiz_sub').find('.quiz_content_wrap').show();
			$('.quiz_sub').find('.quiz_wrong').hide();
			$(".quiz_end").hide();
			$(".quiz_main").hide();
			$(".quiz_sub").hide();
			$(".quiz_sub1").show();
			break;

		case "submit" :
			$(btn).parents('.quiz_sub').find('.quiz_content_wrap').hide();
			$(btn).parents('.quiz_sub').find('.quiz_wrong').show();
			break;

		case "next" :
			$(btn).parents('.quiz_sub').hide();
			$(btn).parents('.quiz_sub').next().show();
			$(btn).parents('.quiz_sub').find('.quiz_content_wrap').show();
			$(btn).parents('.quiz_sub').find('.quiz_wrong').hide();
			break;
		case "check" :
			$(".quiz_sub").hide();
			$(".quiz_end").show();
			break;
	}
}