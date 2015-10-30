<?
require_once("GLOBAL/head.php");

$action = $_REQUEST['action'];
$id = $_REQUEST['id'];

$labels = array();
$labels['M'] = "Men";
$labels['W'] = "Women";
$labels['high'] = "High";
$labels['low'] = "Low";

?><div id="body"><?
// choose high tops / low tops
if(!$action)
{
	?><form action="shop.php" method="post">
		<input name="action" type="hidden" value="style">
		<input name="style" type="hidden" value="high">
		<input name="id" type="hidden" value="<? echo $id; ?>">
		<input class="link" type="submit" value="<? echo $labels['high']; ?>">
	</form>
	<form action="shop.php" method="post">
		<input name="action" type="hidden" value="style">
		<input name="style" type="hidden" value="low">
		<input name="id" type="hidden" value="<? echo $id; ?>">
		<input class="link" type="submit" value="<? echo $labels['low']; ?>"><?
		// low-tops
		?>
		</form>
		<div id="high-tops">
			<object id="high-svg" data="MEDIA/paypal/high.svg" type="image/svg+xml"></object>
		</div>
		<div id="low-tops">
			<object id="low-svg" data="MEDIA/paypal/low.svg" type="image/svg+xml"></object>
		</div>
	<?
}
else
{
	$style = $_REQUEST['style'];
	if($style == "high")
		$img = '<div id="high-tops"><object id="high-svg" data="MEDIA/paypal/high.svg" type="image/svg+xml"></object></div>';
	else
		$img = '<div id="low-tops"><object id="low-svg" data="MEDIA/paypal/low.svg" type="image/svg+xml"></object></div>'; 
	?><div class='large-text'><? echo $labels[$style]; ?></div><?
		
	// choose size
	if($action == 'style')
	{
		$sizes = array(5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5);
		?><form action="shop.php" method="post">
			<input name="id" type="hidden" value="<? echo $id; ?>">
			<input name="action" type="hidden" value="size">
			<input name="style" type="hidden" value="<? echo $style; ?>">
			<!--input name="gender" type="hidden" value="<? echo $gender; ?>"-->
			<span class="large-text">Size: </span>
			<div class="styled-select">
				<select name="size"><?
					foreach($sizes as $s) {
					?><option value="<? echo $s; ?>"><? echo $s; ?></option><?
					}
				?></select>
			</div>
			<input class="link" type="submit" value="OK">
		</form><?
		echo $img;
	}
	else
	{
		$size = $_REQUEST['size'];
		?><div class='large-text'><? echo $size; ?></div><?
		
		// choose colour
		if($action == 'size')
		{		
			$colours = array("Red", "Blue", "Yellow");
			?><form action="shop.php" method="post">
				<input name="id" type="hidden" value="<? echo $id; ?>">
				<input name="action" type="hidden" value="colour">
				<input name="style" type="hidden" value="<? echo $style; ?>">
				<input name="size" type="hidden" value="<? echo $size; ?>">
				<input name="solecolour" id="sole-colour" type="hidden" value="">
				<input name="lacescolour" id="laces-colour" type="hidden" value="">
				<input name="bodycolour" id="body-colour" type="hidden" value="">
				<div class="large-text">Color: (click to change)</div><?
				echo $img;
				?><script>init();</script>
				<input class="link" name="submit" type="submit" value="OK">
			</form><?
		}
		else
		{
			$sole_color = $_REQUEST['solecolour'];
			$laces_color = $_REQUEST['lacescolour'];
			$body_color = $_REQUEST['bodycolour'];
			?><div class='large-text'><? echo $body_color;?> </div><?
			
			// add to paypal cart
			if($action == 'colour')
			{
				?><form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
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
				echo $img;
				?><script src="JS/shop.js"></script>
				<script>init2('<? echo $sole_color; ?>', '<? echo $laces_color; ?>', '<? echo $body_color; ?>');</script>
					<input class="link" name="submit" type="submit" value="Buy now . . .">
				</form><?
			}
			else
			{
				?><div class='large-text'>sorry, something went wrong</div><?
			}
		}
	}
}
?></div><?
require_once("GLOBAL/foot.php");
?>