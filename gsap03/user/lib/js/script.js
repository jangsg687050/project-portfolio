//simple 함수 실행
$(function () {
  // 초기 셋팅
  // 1. 로고(조선로고 화이트(chosunW),조선로고 블랙(chosunB),조선비즈 화이트(bizW),조선비즈 블랙(bizB),조선비즈 10주년 화이트(biz10W),조선비즈 10주년 블랙(biz10B)) 🔴필수값
  // 2. 네비컬러(블랙(dark), 화이트(light), 투명(transparent) ) 🔴필수값
  // 3. 서비스명(텍스트 입력 또는 <img>로 이미지 삽입, 💢이미지로 삽입 시 css로 사이즈 조절)
  // 4. 미디어그룹 링크 사용여부(사용(show) / 비사용(hide))
  // 5. 로그인 사용여부(사용(show) / 비사용(hide))
  // 6. 스크롤메뉴 사용여부(메뉴가 있을 때 'sticky' / 사용하지 않을 때 '')
  // 7. URL (사이트 도메인 혹은 URL을 입력 ) 🔴필수값
  simpleElem('chosunB', 'light', '타이틀', 'show', 'show', '', 'http://www.chosun.com/');
})();