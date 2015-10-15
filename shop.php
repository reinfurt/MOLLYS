<?
require_once("GLOBAL/head.php");

$action = $_REQUEST['action'];

$labels = array();
$labels['M'] = "Men's";
$labels['W'] = "Women's";
$labels['high'] = "High-tops";
$labels['low'] = "Low-tops";

?><div id="body"><?
// choose high tops / low tops
if(!$action)
{
	?><form action="shop.php" method="post">
		<input name="action" type="hidden" value="style">
		<input name="style" type="hidden" value="high">
		<input class="link" type="submit" value="High-tops"><?
		// high-tops
		?><div id="high-tops">
			<object id="high-svg" data="MEDIA/paypal/high.svg" type="image/svg+xml"></object>
		</div>
	</form>
	<form action="shop.php" method="post">
		<input name="action" type="hidden" value="style">
		<input name="style" type="hidden" value="low">
		<input class="link" type="submit" value="Low-tops"><?
		// low-tops
		?><div id="low-tops">
			<object id="low-svg" data="MEDIA/paypal/low.svg" type="image/svg+xml"></object>
		</div>
	</form><?
}
// choose men's / women's
elseif($action == 'style')
{
	$style = $_REQUEST['style'];
	if($style == "high")
		$img = '<div id="high-tops"><object id="high-svg" data="MEDIA/paypal/high.svg" type="image/svg+xml"></object></div>';
	else
		$img = '<div id="low-tops"><object id="low-svg" data="MEDIA/paypal/low.svg" type="image/svg+xml"></object></div>'; 
	?><div class='large-text'><? echo $labels[$style]; ?></div>
	<form action="shop.php" method="post">
		<input name="action" type="hidden" value="gender">
		<input name="style" type="hidden" value="<? echo $style; ?>">
		<input name="gender" type="hidden" value="M">
		<input class="link" type="submit" value="Men's">
	</form>
	<form action="shop.php" method="post">
		<input name="action" type="hidden" value="gender">
		<input name="style" type="hidden" value="<? echo $style; ?>">
		<input name="gender" type="hidden" value="W">
		<input class="link" type="submit" value="Women's">
	</form><?
	echo $img;
}
// choose size
elseif($action == 'gender')
{
	$style = $_REQUEST['style'];
	$gender = $_REQUEST['gender'];
	$sizes = array(5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5);
	if($style == "high")
		$img = '<div id="high-tops"><object id="high-svg" data="MEDIA/paypal/high.svg" type="image/svg+xml"></object></div>';
	else
		$img = '<div id="low-tops"><object id="low-svg" data="MEDIA/paypal/low.svg" type="image/svg+xml"></object></div>'; 
	?>
	<div class='large-text'><? echo $labels[$style]; ?></div>
	<div class='large-text'><? echo $labels[$gender]; ?></div>
	<form action="shop.php" method="post">
		<input name="action" type="hidden" value="size">
		<input name="style" type="hidden" value="<? echo $style; ?>">
		<input name="gender" type="hidden" value="<? echo $gender; ?>">
		<span class="large-text">Size: </span>
		<div class="styled-select">
			<select name="size"><?
				foreach($sizes as $s) {
				?><option value="<? echo $s; ?>"><? echo $s; ?></option><?
				}
			?></select>
		</div>
		<input class="link" type="submit" value="Select">
		<?
		echo $img;
	?></form><?
}
// choose colour
elseif($action == 'size')
{
	$style = $_REQUEST['style'];
	$gender = $_REQUEST['gender'];
	$size = $_REQUEST['size'];
	$colours = array("Red", "Blue", "Yellow");
	if($style == "high")
		$img = '<div id="high-tops"><input type="image" src="MEDIA/paypal/high.svg"></div>';
	else
		$img = '<div id="low-tops"><input type="image" src="MEDIA/paypal/low.svg"></div>'; 
	?><div class='large-text'><? echo $labels[$style]; ?></div>
	<div class='large-text'><? echo $labels[$gender]; ?></div>
	<div class='large-text'>Size: <? echo $size; ?></div>
	<form action="shop.php" method="post">
		<input name="action" type="hidden" value="colour">
		<input name="style" type="hidden" value="<? echo $style; ?>">
		<input name="gender" type="hidden" value="<? echo $gender; ?>">
		<input name="size" type="hidden" value="<? echo $size; ?>">
		<span class="large-text">Color: </span>
		<div class="styled-select">
		<select name="colour"><?
			foreach($colours as $c) {
			?><option value="<? echo $c; ?>"><? echo $c; ?></option><?
			}
		?></select></div>
		<input class="link" name="submit" type="submit" value="Select">
	</form><?
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
// add to paypal cart
elseif($action == 'colour')
{
	$style = $_REQUEST['style'];
	$gender = $_REQUEST['gender'];
	$size = $_REQUEST['size'];
	$color = $_REQUEST['colour'];
	?><div class='large-text'><? echo $labels[$style]; ?></div>
	<div class='large-text'><? echo $labels[$gender]; ?></div>
	<div class='large-text'>Size: <? echo $size; ?></div>
	<div class='large-text'><? echo $color; ?></div>
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
		<input type="hidden" name="os2" value="<? echo $color; ?>">
		<input class="link" name="submit" type="submit" value="Add to Cart">
	</form><?
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
}
else
{
	?><div class='large-text'>sorry, something went wrong</div><?
}
?></div><?
require_once("GLOBAL/foot.php");
?>