<?
 $activemenu = 3;
	include "header.php";
?>

<div id="sub3">
	<div class="sub_page">
		<h2 class="small_title">카드로 보는 겨레말</h2>
	
		<!-- 상단 제목 -->
		<div class="sub_title_wrap">
			<h3 class="sub_title">[겨레말큰사전, 오늘은]<br>4월 27일</h3>
			<!--p class="desc">-부제-</p-->
		</div>
		<!-- //상단 제목 -->

		<div class="card_news_wrap">
			<ul id="card_news">
				<li><img src="images/card_news1.jpg" alt=""></li>
				<li><img src="images/card_news2.jpg" alt=""></li>
				<li><img src="images/card_news3.jpg" alt=""></li>
				<li><img src="images/card_news4.jpg" alt=""></li>
				<li><img src="images/card_news5.jpg" alt=""></li>
				<li><img src="images/card_news6.jpg" alt=""></li>
				<li><img src="images/card_news7.jpg" alt=""></li>
				<li><img src="images/card_news8.jpg" alt=""></li>
			</ul>
		</div>
		<script>
			//카드 뉴스 슬라이드
			$('#card_news').bxSlider({
				touchEnabled:false,
				hideControlOnEnd : true,
				infiniteLoop:false,
				adaptiveHeight:true
			});
		</script>
	</div>
</div>

<?
	include "footer.php";
?>