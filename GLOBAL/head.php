<?
date_default_timezone_set("America/New_York");
require_once('lib/systemDatabase.php');
require_once("lib/systemCookie.php");
require_once("lib/displayNavigation.php");

$host = "http://mollymcivermanufacturing.us";

// parse $id
$id = $_GET['id'];
if(!$id)
	$id = 0;
else
{
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

$sql = "SELECT name1 from objects where id = $id";
$res = MYSQL_QUERY($sql);
$row = MYSQL_FETCH_ARRAY($res);
$name = $row['name1'] ? $row['name1'] : "mollys";
?><!DOCTYPE html>
<html>
	<head>
		<title><? echo $doc_title; ?></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="GLOBAL/global.css">
	    <script type="text/javascript" src="JS/-animateX.js"></script>
	</head>
	<body onload="initX();">
		<div id="page">
			<header id="menu">
				<div id="menu-base">
					<a href="<? echo $host; ?>"><? echo $name; ?></a>
				</div>
				<div id="menu-hover">
					<a href="<? echo $host; ?>">molly<br>
					mciver<br>
					mfg.<br>
					<br>
					<div style="display: inline-block;"><? 
						displayNavigation(); 
					?></div>
				</div>
			</header>
