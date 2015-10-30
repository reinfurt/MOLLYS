<?
require_once("GLOBAL/head.php");
$f = fopen("sizes.csv", "r");
$html = "";
while(($line = fgetcsv($f)) !== false)
{
	$html.= "<tr>";
	foreach($line as $cell)
		$html.= "<td>".htmlspecialchars($cell)."</td>";
	$html.="</tr>\n";
}
fclose($f);
?>
<div id="body">
	<table><? echo $html; ?></table>
</div><?
require_once("GLOBAL/foot.php");
?>
