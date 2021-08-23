/*jquery-2.1.4.js*/
$(function(){
	var leftValue=0;
	var maxLeft=0;

	setInterval(function(){
		maxLeft=-($(".imgs_wrap > ul").outerWidth()-$("#poster").outerWidth());
		//console.log(maxLeft);

		/*if(leftValue<=maxLeft){
			leftValue=maxLeft;
			$(".imgs_wrap > ul").css({left:lleftValue});
		}else{
			
		}$("#poster > .btn_next").css({});
	},50);
	//이벤트 발생
	$("#poster > .btn_next").click(function(){
		$("#poster > .btn_prev").css({backgroundImage:"url(imges/btn_prev_a.png"});
		leftvlaue-=175;
	}
	//.imgs_wrap > ul의 left속성이 maxLeft가 되면 더이상 증가하거나 감소하지 않게
	if(leftvalue
	//.imgs_wrap > ul 의 left속성이 -175씩 이동
	
*/
	$("#poster > .btn_next").click(function(){
		leftValue-=20;
		if(leftValue < -280){
					$(".imgs_wrap > ul").css({left:0+"%"});
					leftValue=-20;
				}
				$(".imgs_wrap > ul").stop().animate({left:leftValue+"%"});
			});
			$("#poster > .btn_prev").click(function(){
				leftValue+=20;
				if(leftValue>0){
					$(".imgs_wrap > ul").css({left:-175+"%"});
					leftValue=-0;
				}
				$(".imgs_wrap > ul").stop().animate({left:leftValue+"%"});
			});
		});

		