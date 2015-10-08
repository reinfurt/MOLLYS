<?
// dev
require_once("lib/systemCookie.php");
$dev = $_REQUEST['dev'];
$dev = systemCookie("devCookie", $dev, 0);
if(!$dev)
	require_once("holding.php");
else
{
	require_once("GLOBAL/head.php");
	require_once("lib/displayMedia.php");
	// exception for shop page
	if($id == 10)
		require_once("shop.php");
	else
		require_once("page.php");
	require_once("GLOBAL/foot.php");
}
?>
