<?
date_default_timezone_set("America/New_York");
require_once('lib/systemDatabase.php');
require_once("lib/systemCookie.php");
require_once("lib/displayNavigation.php");

// parse $id
$id = $_GET['id'];
if(!$id)
	$id = 0;
else {
	$ids = explode(",", $id);
	$idFull = $id;
	$id = end($ids);
}

// dev
$dev = $_REQUEST['dev'];
$dev = systemCookie("devCookie", $dev, 0);
if(!$dev) 
	die('mmm. . .');

// document header
$doc_title = 'mmm';
$pageName = basename($_SERVER['PHP_SELF'], ".php");

// $u = "http://www.mollys.us";
// = 'mollys.us'
// do i need to add http:// to it? 
// seems like i do
$u = "http://".$_SERVER['SERVER_NAME'];

$sql = "SELECT * from objects where id = $id";
$res = MYSQL_QUERY($sql);
$obj = MYSQL_FETCH_ARRAY($res);
$name = $obj['name1'] ? $obj['name1'] : "mollys";

// detect mobile
// $isMobile = (bool)preg_match('#\b(ip(hone|od|ad)|android|opera m(ob|in)i|windows (phone|ce)|blackberry|tablet'.
// 				'|s(ymbian|eries60|amsung)|p(laybook|alm|rofile/midp|laystation portable)|nokia|fennec|htc[\-_]'.
// 				'|mobile|up\.browser|[1-4][0-9]{2}x[1-4][0-9]{2})\b#i', $_SERVER['HTTP_USER_AGENT']);

?>

<!DOCTYPE html>
<html>
	<head>
		<title><? echo $doc_title; ?></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="GLOBAL/global.css">
	    <script type="text/javascript" src="JS/animateX.js"></script><?
	    // only load ajax script if on homepage
	    if(!$id)
	    {
	    ?><script type="text/javascript" src="JS/ajax.js"></script><?
	    }
	?></head>
	<body>
		<div id="page">
			<header id="menu">
				<div id="menu-base"><?
					echo $name;
					if($id)
						echo "<br>mollys"; ?>
				</div>
				<div id="menu-hover">
					<a href="<? echo $u; ?>">molly<br>mciver<br>mfg.</a>
					<br>
					<br>
					<div style="display: inline-block;"><? 
						displayNavigation(); 
					?></div>
				</div>
			</header>
