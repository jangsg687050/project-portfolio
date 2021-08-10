<?
 $activemenu = 8;
	include "header.php";
?>

<div id="sub7">
	<div class="sub_page">
		<h2 class="small_title">도전, 겨레말!</h2>

		<div class="contents">
			<div id="quiz">
				<div class="quiz_main">
					<strong class="quiz_title">
						<img src="images/quiz_title.png" alt="도전, 겨레말! OX 퀴즈">
					</strong>
					<div class="quiz_content">
						<strong class="quiz_guide_title">참여 방법</strong>
						<ul class="quiz_guide_list">
							<li><span class="num">1</span>남녘말과 북녘말에 관한 퀴즈 총 7개 문제가 출제됩니다.</li>
							<li><span class="num">2</span>문제를 풀 때마다 정답과 해설을 확인하실 수 있습니다.</li>
							<li><span class="num">3</span>마지막 단계에서 이벤트에 응모하실 수 있습니다.</li>
						</ul>
						<p class="quiz_guide_desc"><span class="point1">※</span> 응모자의 <b>성함</b>과 <b>연락처</b>를 입력하시고, <b>개인정보 수집에 동의</b>해 주세요!</p>

						<div class="quiz_guide_list2">
							<dl>
								<dt>응모 기간</dt>
								<dd class="point1">~ 5월 10일(월)까지</dd>
							</dl>
							<dl>
								<dt>당첨자 발표</dt>
								<dd>당첨되신 분께는 5월 중, 응모하신 연락처로 개별 연락드립니다.</dd>
							</dl>
						</div>
					</div>
					<div class="quiz_content event">
						<strong class="quiz_guide_title">선물</strong>
						<ul class="quiz_guide_list event">
							<li><span class="num">선물1</span><b>보조배터리 20000mAh(5명)</b></li>
							<li><span class="num">선물2</span><b>모바일 커피 교환권(30명)</b></li>
						</ul>
					</div>
					<span class="quiz_start_btn" onclick="goQuiz(this,'start');"><img src="images/quiz_start_btn.png" alt=""></span>
				</div>

				<div class="quiz_sub quiz_sub1">
					<div class="quiz_content_wrap">
						<div class="quiz_content">
							<div class="quiz_num"><span>문제01</span></div>
							<p class="quiz_desc">
								북녘에서도 화학조미료 중 하나인 ‘맛소금’을 사용한다.
							</p>
							<div class="o_x_btns">
								<span class="o_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_o_btn.png" alt="O"></span>
								<span class="x_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_x_btn.png" alt="X"></span>
							</div>
						</div>
						<a href="https://youtu.be/mpIQ_j_S-us" class="quiz_hint_btn" target="_blank"><img src="images/quiz_hint.png" alt="힌트보기"></a>
					</div>
					
					<div class="quiz_wrong">
						<strong class="wrong_title">정답은<span class="o_btn"><img src="images/quiz_o_btn.png" alt="O"></span> 입니다.</strong>
						<div class="ex_wrap">
							<dl class="ex_list type1">
								<dt>해설</dt>
								<dd>북녘에서도 요리를 할 때, ‘소금결정에 맛내기를 입힌’ ‘맛내기소금’을 사용합니다.</dd>
							</dl>
							<!-- <dl class="ex_list type2">
								<dt>용례</dt>
								<dd>그의 용모는 삽시에 {뚝비}맞은 강아지처럼 초췌하게 되었다. 《명재상》(북)</dd>
							</dl> -->
						</div>
						<span class="quiz_next_btn" onclick="goQuiz(this,'next');"><img src="images/quiz_next.png" alt="다음퀴즈 풀기"></span>
					</div>
				</div>

				<div class="quiz_sub quiz_sub2">
					<div class="quiz_content_wrap">
						<div class="quiz_content">
							<div class="quiz_num"><span>문제02</span></div>
							<p class="quiz_desc">
								 ‘칼파스’, ‘꼴바싸’는 ‘소시지’의 북녘말이다. 
							</p>
							<div class="o_x_btns">
								<span class="o_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_o_btn.png" alt="O"></span>
								<span class="x_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_x_btn.png" alt="X"></span>
							</div>
						</div>
						<a href="http://dic.gyeoremal.or.kr/living_view.php?sq=162" class="quiz_hint_btn" target="_blank"><img src="images/quiz_hint.png" alt="힌트보기"></a>
					</div>
					<div class="quiz_wrong">
						<strong class="wrong_title">정답은<span class="o_btn"><img src="images/quiz_o_btn.png" alt="O"></span> 입니다.</strong>
						<div class="ex_wrap">
							<dl class="ex_list type1">
								<dt>해설</dt>
								<dd>북녘에서는 외래어로 ‘쏘세지’, ‘칼파스’, ‘꼴바싸’, 다듬은 말로 ‘고기순대’를 쓰기도 합니다.</dd>
							</dl>
							<dl class="ex_list type2">
								<dt>용례</dt>
								<dd>로씨야제 워드까와 둥근빵, 빠다, {칼파스와} 닭알부침, 사과 그리고 남새료리가 전부였다. 《녀가수》(북)</dd>
							</dl>
						</div>
						<span class="quiz_next_btn" onclick="goQuiz(this,'next');"><img src="images/quiz_next.png" alt="다음퀴즈 풀기"></span>
					</div>
				</div>
				<div class="quiz_sub quiz_sub3">
					<div class="quiz_content_wrap">
						<div class="quiz_content">
							<div class="quiz_num"><span>문제03</span></div>
							<p class="quiz_desc">
								‘십일메터벌차기’는 ‘코너킥’의 북녘말이다.
							</p>
							<div class="o_x_btns">
								<span class="o_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_o_btn.png" alt="O"></span>
								<span class="x_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_x_btn.png" alt="X"></span>
							</div>
						</div>
						<a href="http://www.gyeoremal.or.kr/board/view.php?code=card_news&cat=&sq=5400&page=1&s_fld=&s_txt=" class="quiz_hint_btn" target="_blank"><img src="images/quiz_hint.png" alt="힌트보기"></a>
					</div>
					<div class="quiz_wrong">
						<strong class="wrong_title">정답은 <span class="x_btn"><img src="images/quiz_x_btn.png" alt="X"></span> 입니다.</strong>
						<div class="ex_wrap">
							<dl class="ex_list type1">
								<dt>해설</dt>
								<dd>‘십일메터벌차기’는 ‘페널티킥’의 북녘말입니다. ‘코너킥’은 ‘코너키크’, 또는‘ 구석차기’라고 합니다.</dd>
							</dl>
							<dl class="ex_list type2">
								<dt>용례</dt>
								<dd>대회요강에 의하여 비긴 상태에서는 매팀에서 5명씩 나와 {11m 벌차기를} 하게 되였다.《아슬아슬한 격전 끝에》(북)</dd>
							</dl>
						</div>
						<span class="quiz_next_btn" onclick="goQuiz(this,'next');"><img src="images/quiz_next.png" alt="다음퀴즈 풀기"></span>
					</div>
				</div>
				<div class="quiz_sub quiz_sub4">
					<div class="quiz_content_wrap">
						<div class="quiz_content">
							<div class="quiz_num"><span>문제04</span></div>
							<p class="quiz_desc">
								‘먼지떨이’, ‘재떨이’는 북녘에서 ‘먼지털이’, ‘재털이’라고 쓴다.
							</p>
							<div class="o_x_btns">
								<span class="o_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_o_btn.png" alt="O"></span>
								<span class="x_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_x_btn.png" alt="X"></span>
							</div>
						</div>
						<a href="http://www.gyeoremal.or.kr/webzine/2020_12/gyeore_sub7.php" class="quiz_hint_btn" target="_blank"><img src="images/quiz_hint.png" alt="힌트보기"></a>
					</div>
					<div class="quiz_wrong">
						<strong class="wrong_title">정답은 <span class="x_btn"><img src="images/quiz_x_btn.png" alt="X"></span> 입니다.</strong>
						<div class="ex_wrap">
							<dl class="ex_list type1">
								<dt>해설</dt>
								<dd>‘먼지떨이’, ‘재털이’라고 씁니다. ‘먼지털개’라고도 합니다.</dd>
							</dl>
							<dl class="ex_list type2">
								<dt>용례</dt>
								<dd>그는 담배꽁초가 그득한 {재털이를} 털고 책상우를 걸레로 훔치면서 혼자 웃었다.《꽃》(북)</dd>
							</dl>
						</div>
						<span class="quiz_next_btn" onclick="goQuiz(this,'next');"><img src="images/quiz_next.png" alt="다음퀴즈 풀기"></span>
					</div>
				</div>
				<div class="quiz_sub quiz_sub5">
					<div class="quiz_content_wrap">
						<div class="quiz_content">
							<div class="quiz_num"><span>문제05</span></div>
							<p class="quiz_desc">
								‘휴게소’, ‘휴게실’은 북녘에서 ‘휴계소’, ‘휴계실’이라고 쓴다.
							</p>
							<div class="o_x_btns">
								<span class="o_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_o_btn.png" alt="O"></span>
								<span class="x_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_x_btn.png" alt="X"></span>
							</div>
						</div>
						<a href="http://www.gyeoremal.or.kr/webzine/2020_09/gyeore_sub7.php" class="quiz_hint_btn" target="_blank"><img src="images/quiz_hint.png" alt="힌트보기"></a>
					</div>
					<div class="quiz_wrong">
						<strong class="wrong_title">정답은 <span class="o_btn"><img src="images/quiz_o_btn.png" alt="O"></span> 입니다.</strong>
						<div class="ex_wrap">
							<dl class="ex_list type1">
								<dt>해설</dt>
								<dd>‘게(憩)’의 한자음을 남녘에서는 ‘게’로, 북녘에서는 ‘계’로 읽습니다. 중국 동포사회에서는 두 표기가 모두 쓰입니다.</dd>
							</dl>
							<dl class="ex_list type2">
								<dt>용례</dt>
								<dd>고속뻐스는 {휴계소에서} 20분간 정차하고 다시 야행을 계속하였다.《윤림호: 명암의 세계》(중국)</dd>
							</dl>
						</div>
						<span class="quiz_next_btn" onclick="goQuiz(this,'next');"><img src="images/quiz_next.png" alt="다음퀴즈 풀기"></span>
					</div>
				</div>
				<div class="quiz_sub quiz_sub6">
					<div class="quiz_content_wrap">
						<div class="quiz_content">
							<div class="quiz_num"><span>문제06</span></div>
							<p class="quiz_desc">
								별자리 이름 ‘돌고래자리’를 북녘에서는 ‘곱등어자리’라고 한다.
							</p>
							<div class="o_x_btns">
								<span class="o_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_o_btn.png" alt="O"></span>
								<span class="x_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_x_btn.png" alt="X"></span>
							</div>
						</div>
						<a href="http://www.gyeoremal.or.kr/webzine/2020_12/gyeore_sub3.php" class="quiz_hint_btn" target="_blank"><img src="images/quiz_hint.png" alt="힌트보기"></a>
					</div>
					<div class="quiz_wrong">
						<strong class="wrong_title">정답은 <span class="x_btn"><img src="images/quiz_x_btn.png" alt="X"></span> 입니다.</strong>
						<div class="ex_wrap">
							<dl class="ex_list type1">
								<dt>해설</dt>
								<dd>‘돌고래자리’는 북녘에서 ‘물돼지자리’라고 합니다.<br>‘물돼지’는 ‘돌고래’와 같은 말로 남북의 국어사전에 모두 올라있습니다.</dd>
							</dl>
							<!-- <dl class="ex_list type2">
								<dt>용례</dt>
								<dd>새벽 출근을 하는 {직장세대의} 주부들인 모양이였다. 《보통날아침》(북)</dd>
							</dl> -->
						</div>
						<span class="quiz_next_btn" onclick="goQuiz(this,'next');"><img src="images/quiz_next.png" alt="다음퀴즈 풀기"></span>
					</div>
				</div>

				<div class="quiz_sub quiz_sub7">
					<div class="quiz_content_wrap">
						<div class="quiz_content">
							<div class="quiz_num"><span>문제07</span></div>
							<p class="quiz_desc">
								남과 북의 컴퓨터 자판은 배열순서가 같다.
							</p>
							<div class="o_x_btns">
								<span class="o_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_o_btn.png" alt="O"></span>
								<span class="x_btn" onclick="goQuiz(this,'submit');"><img src="images/quiz_x_btn.png" alt="X"></span>
							</div>
						</div>
						<!-- <a href="http://www.gyeoremal.or.kr/webzine/2020_12/gyeore_sub3.php" class="quiz_hint_btn" target="_blank"><img src="images/quiz_hint.png" alt="힌트보기"></a> -->
					</div>
					<div class="quiz_wrong">
						<strong class="wrong_title">정답은 <span class="x_btn"><img src="images/quiz_x_btn.png" alt="X"></span> 입니다.</strong>
						<div class="ex_wrap">
							<dl class="ex_list type1">
								<dt>해설</dt>
								<dd>남과 북의 컴퓨터 자판 배열순서는 다릅니다. 남녘의 ‘키보드’를 북녘에서는 ‘건반’이라고 합니다.</dd>
							</dl>
							
							<a href="http://www.gyeoremal.or.kr/board/view.php?code=card_news&cat=&sq=5457&page=1&s_fld=&s_txt=" class="quiz_more_btn" target="_blank"><img src="images/quiz_more_btn.png" alt="자세히알아보기"></a>
						</div>
						<span class="quiz_next_btn" onclick="goQuiz(this,'next');"><img src="images/quiz_next.png" alt="다음퀴즈 풀기"></span>
					</div>
				</div>
				<div class="quiz_end">
					<strong class="quiz_title">
						<img src="images/quiz_title.png" alt="도전, 겨레말! OX 퀴즈">
					</strong>
					<div class="content">
						<img src="images/quiz_end.png" alt="도전 성공! 도전, 겨레말 OX퀴즈에 참여해 주셔서 감사합니다.">
						<div class="btns">
							<span class="quiz_again_btn btn" onclick="goQuiz(this,'start');"><img src="images/quiz_again.png" alt="다시 도전하기"></span>
							<a href="https://docs.google.com/forms/d/13LZkeMEcgBbQadwO_dX5DZStCw35jnGIVsWJzQJhaTg/edit" target="_blank" class="quiz_event_btn btn"><img src="images/quiz_event.png" alt="이벤트 응모하기"></a>
						</div>
						<p class="close_txt1">※ 이벤트 응모 기간: ~5월 10(월)까지</p>
						<p class="close_txt2"><b>※이벤트 응모를 위한 개인정보를 남겨 주세요.</b>(개인정보제공에 동의해 주셔야 응모가 완료됩니다.)</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<?
	include "footer.php";
?>