<?
/*-----------------------------------------------------
* Program : 사용자(user) > 공통 설정 파일
* Author  : 황인용, 유성재
* Create  : 2019.03.05
* Modify  : 2021-06-22
* Etc     :
-----------------------------------------------------*/

include $_SERVER["DOCUMENT_ROOT"]."/lib/conf.php";

$ContentsDir								=	"user";																		// 관리자모드 디렉토리명
$Contents_dir							=	$Root_dir."/".$ContentsDir;													// 관리자모드 경로
$Contents_url							=	"/".$ContentsDir;

//사이트 정보 가져오기
$sql = "SELECT *
					FROM
						$TBL_CMS_SITE
					WHERE
								1=1
						AND	delete_yn = 'N'
						AND	use_yn = 'Y'
						AND	site_code = '$ContentsDir'
			";
//echo $sql;
$result = mysqli_query($conn, $sql) or errorCntCount($conn);
$__currentSite = mysqli_fetch_assoc($result);

function getContentPath($url) {
	GLOBAL $Contents_url;

	if(stristr($url, 'http://') || stristr($url, 'https://')) {
		return $url;
	} else {
		return $Contents_url.$url;
	}
}

//권한을 가져오기 위해 기본정보 세팅
$uri_current = $_SERVER['PHP_SELF'];
$uri_current = str_replace($Contents_url, '', $uri_current);
$move_dir = substr($uri_current, 0, strripos($uri_current, '/'));
$move_url = substr($uri_current, strripos($uri_current, '/'));

$sq = (isset($_GET['sq'])		&&	is_numeric($_GET['sq']))	?	$_GET['sq']	:	'';

$current_menu_where = '';


// 서브페이지 gnb 백그라운드 클래스 설정
switch($move_dir) {
	case "/business": case "/space":															$gnbClass	=	"sub_visual05";			break;			// 사업공고, 컨설팅   0507_컨설팅 visual05에 추가
	case "/survey":																				$gnbClass	=	"sub_visual03";			break;			// 설문조사

	case "/board":
		switch($_GET['board_code']) {
			case "notice":	case "pds":															$gnbClass	=	"sub_visual03";			break;			// 공지사항, 실증후기
		}
		break;


	default:
		if($uri_current == "/contents.php") {
			switch($sq) {
				case 7:		case 11:															$gnbClass	=	"sub_visual01";			break;			// IoT테스트필드 소개
				case 66:	case 67:	case 68:	case 69:									$gnbClass	=	"sub_visual02";			break;			// 실증자원
				case 47:																		$gnbClass	=	"sub_visual04";			break;			// 실증대시보드
				case 60:																		$gnbClass	=	"sub_visual05";			break;			// 컨설팅(IoT 기술지원 및 컨설팅)
			}
		}
		break;
}


switch($move_dir) {
	case "/space":				// 시설
	case "/material":			// 장비
	case "/survey":				// 설문조사
	case "/member":				// 멤버쉽
	case "/mypage":				// 마이페이지
	case "/business":			// 사업공고
		$current_menu_where = "move_url LIKE '$uri_current%' ";
		break;

	case "/board":
		$board_code			=	(isset($_GET['board_code']) && trim($_GET['board_code']))			?	trim($_GET['board_code'])			:	$_POST['board_code'];

		$current_menu_where = "move_url LIKE '$move_dir%board_code=$board_code' ";
	break;

	default:
		if (strpos($uri_current, '/index.php')!==false) {
			$current_menu_where = "move_url LIKE '$uri_current%' ";
		} else {
			if ($sql_version=='1.0') {
				$current_menu_where = "AAA.sq='$sq' ";
			} else {
				$current_menu_where = "sq='$sq' ";
			}
		}
	break;
}

//echo $current_menu_where;

//현재 페이지 찾기
if ($sql_version=='1.0') {
	$sql = "
				SELECT
					AAA.sq
				,	AAB.cms_menu_sq
				,	AAB.depths
				,	AAB.name
				,	AAB.cms_type
				,	AAB.move_url
				,	AAB.move_target
				,	AAA.menu_root
				,	AAA.menu_path
				,	AAA.menu_path_sq
				,	AAA.orderby

				,	AAB.meta_keyword
				,	AAB.meta_title
				,	AAB.meta_content
			FROM (
				$sql_cms_menu_base
			) AAA
			INNER JOIN
				tb_cms_menu AAB
			ON (
						AAA.sq = AAB.sq
				AND	AAB.use_yn='Y'
				AND	AAB.delete_yn='N'
			)
			WHERE
				$current_menu_where
			ORDER BY
				orderby
		";
	//echo $sql;
} else {
	$sql = "
		WITH RECURSIVE menu_tree AS (
				SELECT
						A.sq
					,	A.site_code
					,	A.cms_menu_sq
					,	A.depths
					,	A.name
					,	A.sub_name
					,	A.move_url
					,	A.meta_keyword
					,	A.meta_title
					,	A.meta_content
					,	CONCAT(A.depths, LPAD(A.orderby, 3, 0), LPAD(A.sq, 4, 0), '-', '$sql_fill_char') AS orderby
					, 	A.sq AS menu_root
					,	CONCAT_WS('>', CONCAT(A.name, '$sql_fill_char')) AS menu_path
					,	CONCAT_WS('>', CONCAT(A.sq, '$sql_fill_char')) AS menu_path_sq
				FROM
					tb_cms_menu A
				WHERE
						A.cms_menu_sq = '0'
					AND	A.delete_yn = 'N'
					AND	A.use_yn = 'Y'
			UNION ALL
				SELECT
						A2.sq
					,	A2.site_code
					,	A2.cms_menu_sq
					,	A2.depths
					,	A2.name
					,	A2.sub_name
					,	A2.move_url
					,	A2.meta_keyword
					,	A2.meta_title
					,	A2.meta_content
					,	CONCAT(REPLACE(B.orderby, 'A', ''), A2.depths, LPAD(A2.orderby, 3, 0), LPAD(A2.sq, 4, 0), '-')
					,	B.menu_root
					,	CONCAT_WS('>', B.menu_path, A2.name)
					,	CONCAT_WS('>', B.menu_path_sq, A2.sq)
				FROM
					tb_cms_menu A2
				INNER JOIN
					menu_tree B
				ON (
						A2.cms_menu_sq=B.sq
					AND	A2.delete_yn = 'N'
					AND	A2.use_yn = 'Y'
				)
		)
		SELECT
			sq
		,	site_code
		,	cms_menu_sq
		,	depths
		,	name
		,	sub_name
		,	move_url
		, meta_keyword
		, meta_title
		, meta_content
		,	menu_root
		,	menu_path
		,	menu_path_sq
		FROM (
			SELECT
					sq
				,	site_code
				,	cms_menu_sq
				,	depths
				,	name
				,	sub_name
				,	move_url
				, meta_keyword
				, meta_title
				, meta_content
				,	REPLACE(orderby, 'A', '') AS orderby
				,	menu_root
				,	REPLACE(menu_path, 'A', '') AS menu_path
				,	REPLACE(menu_path_sq, 'A', '') AS menu_path_sq
			FROM
				menu_tree A
			WHERE
				$current_menu_where
		) A
	";
}
//echo $sql;
$result = mysqli_query($conn, $sql) or errorCntCount($conn);
while($row = mysqli_fetch_assoc($result)) {
	if($row['sq'] == 3) continue;
	$__currentMenuNavi = $row;
//	$__currentMenuNavi = mysqli_fetch_assoc($result);
}
mysqli_free_result($result);

//=================================================================================
// 통계(페이지 뷰 / 방문자수) 작업
//=================================================================================
// 오늘날짜의 통계정보가 있는지 확인
if (!is_bot() && is_numeric($__currentMenuNavi['sq'])) {
	$nowDate = date("Y-m-d");
	$menuSq = $__currentMenuNavi['sq'];
	$sess_id = $_SESSION['session_id'];

	$sql_view = "SELECT count(*)
						FROM
							$TBL_CMS_PAGEVIEW
						WHERE
									1=1
							AND	vdate				='$nowDate'
							AND	site_code		='$ContentsDir'
							AND	cms_menu_sq	= '$menuSq'
				";
	$result_view = mysqli_query($conn, $sql_view) or errorCntCount($conn);
	$resultRow_view = mysqli_fetch_row($result_view);

	//신규 방문자이면 vistior +1
	if (!isset($sess_id) || !trim($sess_id)) {
		$visitor = 1;
		$pageview = 1;

		$_SESSION['session_id'] = session_id();
	} else {
		$visitor = 0;
		$pageview = 1;
	}

	//오늘 방문을 페이지이면 update
	//오늘 한번도 방문을 안한 페이지이면 insert
	if (is_numeric($resultRow_view[0]) && $resultRow_view[0]>0) {
		$sql_view = "UPDATE
										$TBL_CMS_PAGEVIEW
									SET
											upd_id 		= 'SYSTEM'
										,	upd_date	= NOW()

										,	visitor 	= visitor 	+ '$visitor'
										,	pageview 	= pageview	+ '$pageview'
									WHERE
												1=1
										AND	vdate				='$nowDate'
										AND	site_code		='$ContentsDir'
										AND	cms_menu_sq	= '$menuSq'
							";
	} else {
		$sql_view = "INSERT INTO
									$TBL_CMS_PAGEVIEW (
											site_code
										,	cms_menu_sq
										,	vdate
										,	pageview
										,	visitor

										,	delete_yn
										,	reg_id
										,	reg_date
										,	upd_id
										,	upd_date
									) VALUES (
											'$ContentsDir'
										,	'$menuSq'
										,	'$nowDate'
										,	'$pageview'
										,	'$visitor'

										,	'N'
										,	'SYSTEM'
										,	NOW()
										,	NULL
										,	NULL
									)
							";

	}
	mysqli_query($conn, $sql_view) or errorCntCount($conn);
}

?>