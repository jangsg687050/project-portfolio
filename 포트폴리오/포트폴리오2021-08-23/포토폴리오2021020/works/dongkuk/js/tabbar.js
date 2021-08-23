/*tabbar.js*/

$(function(){
	$("#history_tabbar > .title > div >  h3").click(function(){
		var index=$(this).index();
		$("#history_tabbar > .title > div > h3").removeClass("active");
		$(this).addClass("active");
		
		$("#history_tabbar > .description > div").removeClass("active");
		$("#history_tabbar > .description > div").eq(index).addClass("active");
	});
	$("#location_tabbar > .title > div > h3").click(function(){
		var index=$(this).index();
		$("#location_tabbar > .title > div > h3").removeClass("active");
		$(this).addClass("active");
		
		$("#location_tabbar > .description > div").removeClass("active");
		$("#location_tabbar > .description > div").eq(index).addClass("active");
	});
});