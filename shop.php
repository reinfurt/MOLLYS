<?
require_once("GLOBAL/head.php");

$action = $_REQUEST['action'];
$labels = array();
$labels['M'] = "Men's";
$labels['W'] = "Women's";
$labels['high'] = "High-tops";
$labels['low'] = "Low-tops";
?><div id="body"><?
if(!$action)
{
	?><form action="shop.php" method="post">
		<input name="action" type="hidden" value="style">
		<input name="style" type="hidden" value="high">
		   <div class="large-text">High-tops</div><?
			// high-tops
			?><div id="high-tops"><input type="image" src="MEDIA/paypal/high.svg"></div>
	</form>
	<form action="shop.php" method="post">
		<input name="action" type="hidden" value="style">
		<input name="style" type="hidden" value="low">
		   <div class="large-text">or Low-tops</div><?
			// low-tops
			?><div id="low-tops"><input type="image" src="MEDIA/paypal/low.svg"></div>
	</form><?
}
elseif($action == 'style')
{
	$style = $_REQUEST['style'];
	if($style == "high")
		$img = '<div id="high-tops"><input type="image" src="MEDIA/paypal/high.svg"></div>';
	else
		$img = '<div id="low-tops"><input type="image" src="MEDIA/paypal/low.svg"></div>'; 
	?><form action="shop.php" method="post">
		<input name="action" type="hidden" value="gender">
		<input name="style" type="hidden" value="<? echo $style; ?>">
		<input name="gender" type="hidden" value="M">
		<div class="large-text">Men's</div>
		<div class='large-text'><? echo $labels[$style]; ?></div><?
		echo $img;
	?></form>
	<form action="shop.php" method="post">
		<input name="action" type="hidden" value="gender">
		<input name="style" type="hidden" value="<? echo $style; ?>">
		<input name="gender" type="hidden" value="W">
		<div class="large-text">Women's</div>
		<div class='large-text'><? echo $labels[$style]; ?></div><?
		echo $img;
	?></form><?
}
elseif($action == 'gender')
{
	$style = $_REQUEST['style'];
	$gender = $_REQUEST['gender'];
	$sizes = array(5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5);
	?><div class='large-text'><? echo $labels[$gender]; ?></div>
	<form action="shop.php" method="post">
		<input name="action" type="hidden" value="size">
		<input name="style" type="hidden" value="<? echo $style; ?>">
		<input name="gender" type="hidden" value="<? echo $gender; ?>">
		<span class="large-text">Size</span>
		<select name="size"><?
			foreach($sizes as $s) {
			?><option value="<? echo $s; ?>"><? echo $s; ?></option><?
			}
		?></select>
		<input name="submit" type="submit" value="submit">
	</form>
	<div class='large-text'><? echo $labels[$style]; ?></div><?
	if($style == "high")
	{
	?><object id="high-svg" data="MEDIA/paypal/high.svg" type="image/svg+xml"></object><?
	}
	else
	{
	?><object id="low-svg" data="MEDIA/paypal/low.svg" type="image/svg+xml"></object><?
	}
}
elseif($action == 'size')
{
	$style = $_REQUEST['style'];
	$gender = $_REQUEST['gender'];
	$size = $_REQUEST['size'];
	$colours = array("Red", "Blue", "Yellow");
	?><div class='large-text'><? echo $labels[$gender]; ?></div>
	<div class='large-text'>Size <? echo $size; ?></div>
	<form action="shop.php" method="post">
		<input name="action" type="hidden" value="colour">
		<input name="style" type="hidden" value="<? echo $style; ?>">
		<input name="gender" type="hidden" value="<? echo $gender; ?>">
		<input name="size" type="hidden" value="<? echo $size; ?>">
		<select name="colour"><?
			foreach($colours as $c) {
			?><option value="<? echo $c; ?>"><? echo $c; ?></option><?
			}
		?></select>
		<input name="submit" type="submit" value="submit">
	</form>
	<div class='large-text'><? echo $labels[$style]; ?></div><?
	if($style == "high")
	{
	?><div id="high-tops">
		<object id="high-svg" data="MEDIA/paypal/high.svg" type="image/svg+xml"></object>
	</div><?
	}
	else
	{
	// low-tops
	?><div id="low-tops">
		<object id="low-svg" data="MEDIA/paypal/low.svg" type="image/svg+xml"></object>
	</div><?
	}
	?><script src="JS/shop.js"></script>
	<script>init();</script><?
}
elseif($action == 'colour')
{
	$style = $_REQUEST['style'];
	$gender = $_REQUEST['gender'];
	$size = $_REQUEST['size'];
	$color = $_REQUEST['colour'];
	if($style == "high")
		$img = '<div id="high-tops"><input type="image" src="MEDIA/paypal/high.svg"></div>';
	else
		$img = '<div id="low-tops"><input type="image" src="MEDIA/paypal/low.svg"></div>'; 
	?><div class='large-text'><? echo $labels[$gender]; ?></div>
	<div class='large-text'>Size <? echo $size; ?></div>
	<div class='large-text'><? echo $color; ?></div>
	<div class='large-text'><? echo $labels[$style]; ?></div>
	<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
		<input type="hidden" name="cmd" value="_s-xclick"><?
		if($style == "low") {
			?><input type="hidden" name="hosted_button_id" value="5JSZDTRUQ3SQ4"><?
		} elseif($style == "high") {
			?><input type="hidden" name="hosted_button_id" value="ZPTAPJPL2WXK6"><?
		}
		?><input type="hidden" name="on0" value="gender">
		<input type="hidden" name="os0" value="<? echo $gender; ?>">
		<input type="hidden" name="on1" value="size">
		<input type="hidden" name="os1" value="<? echo $size; ?>">
		<input type="hidden" name="on2" value="color">
		<input type="hidden" name="os2" value="<? echo $color; ?>"><?
		if($style == "high")
		{
		?><div id="high-tops">
			<object id="high-svg" data="MEDIA/paypal/high.svg" type="image/svg+xml"></object>
		</div><?
		}
		else
		{
		// low-tops
		?><div id="low-tops">
			<object id="low-svg" data="MEDIA/paypal/low.svg" type="image/svg+xml"></object>
		</div><?
		}
		?><input type="submit" name="submit" value="add to cart">
	</form><?
}
else
{
	?><div>sorry</div><?
}
?></div><?
require_once("GLOBAL/foot.php");
?>