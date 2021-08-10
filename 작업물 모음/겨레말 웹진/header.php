<!doctype html>
<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>겨레말큰사전 웹진</title>

		<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
		<script src="js/jquery.bxslider.min.js"></script>

		<link rel="stylesheet" href="/lib/css/reset.min.css">
		<link rel="stylesheet" href="/lib/css/fonts.css">
		<link rel="stylesheet" href="/lib/css/jquery.bxslider.css">
		<link rel="stylesheet" href="/webzine/2021_04/css/webzine.css" />
	</head>
	<body>
		<div id="wrap">
			<div id="header">
				<div class="header_inner">
					<div class="header_top">
						<a href="/board/index.php?code=webzine"><img src="images/ico_webzine_more.png" alt="지난호보기"></a>
					</div>
					<div class="header_bottom clear">
						<div class="left_con clear">
							<h1 class="logo"><a href="index.php" class="txt_hide">겨레말 누리판</a></h1>
							<div class="header-txt">
								<span class="date">2021. 04. 27.</span>
								<span class="hd-txt">* 2007년 4월 27일, <span class="color">겨레말큰사전남북공동편찬사업회법</span>이 제정되었습니다.</span>
							</div>
						</div>
						<div class="right_con">
							<div class="sns_area">
								<ul class="sns_list clear">
									<li class="sns01"><a href="https://www.youtube.com/channel/UCnyl2ivFGyS8Q78G6bTeEGg" target="_blank">유튜브</a></li>
									<li class="sns02"><a href="https://www.instagram.com/gyeoremaltv/" target="_blank">인스타그램</a></li>
									<li class="sns03"><a href="https://www.facebook.com/한눈에-보는-남녘말-북녘말-1427979243964671/" target="_blank">페이스북</a></li>
									<li class="sns04"><a href="https://twitter.com/gyeoremalsajeon" target="_blank">트위터</a></li>
								</ul>
								<a href="http://www.gyeoremal.or.kr/webzine_recommend.php" target="_blank" class="btn_subscribe">
									<img src="images/btn_subscribe.png" alt="구독신청">
								</a>
							</div>
						</div>
					</div>
				</div>
				<? if (strpos($_SERVER['PHP_SELF'], '/index.php')) {?>
					
				<? } else {?>
					<div class="gnb_wrap">
						<ul class="gnb clear">
							<li <?=$activemenu == 1 ? "class='active'" : ""?>><a href="gyeore_sub1.php">겨레의 창</a></li>
							<li <?=$activemenu == 2 ? "class='active'" : ""?>><a href="gyeore_sub2.php">집중 탐구</a></li>
							<li <?=$activemenu == 3 ? "class='active'" : ""?>><a href="gyeore_sub3.php">카드로 보는 겨레말</a></li>
							<li <?=$activemenu == 4 ? "class='active'" : ""?>><a href="gyeore_sub4.php">겨레말TV</a></li>
							<li <?=$activemenu == 5 ? "class='active active5'" : ""?>><a href="gyeore_sub5.php">삼천리 <span>방언</span>곡곡</a></li>
							<li <?=$activemenu == 6 ? "class='active'" : ""?>><a href="gyeore_sub6.php">뜻풀이 깁고 더하기</a></li>
							<li <?=$activemenu == 7 ? "class='active'" : ""?>><a href="gyeore_sub7.php">겨레말 이야기</a></li>
							<!--li <?=$activemenu == 8 ? "class='active'" : ""?>><a href="gyeore_sub8.php">도전, 겨레말!</a></li-->
						</ul>
					</div>
				<? } ?>
			</div>