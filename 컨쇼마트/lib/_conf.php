<?
/*-----------------------------------------------------
* Program : 사용자 > 공통 설정 파일
* Author  : 박수일
* Create  : 2021.02.15
* Etc     :
-----------------------------------------------------*/

include $_SERVER["DOCUMENT_ROOT"]."/lib/conf.php";

$ContentsDir								=	"user";																		// 관리자모드 디렉토리명
$Contents_dir							=	$Root_dir."/".$ContentsDir;													// 관리자모드 경로
$Contents_url							=	"/".$ContentsDir;

//현재 경로 가져오기
$uri_current = $_SERVER['PHP_SELF'];
$uri_current = str_replace($Contents_url, '', $uri_current);
$move_dir = substr($uri_current, 0, strripos($uri_current, '/'));
$move_url = substr($uri_current, strripos($uri_current, '/'));
