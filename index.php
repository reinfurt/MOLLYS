<?
require_once("GLOBAL/head.php");
require_once("lib/displayMedia.php");

$rootid = $ids[0];
if(!$id)
{
	?><div id="posts"><?
	require_once("posts.php");
	?></div><?
}
else
{
	// sql objects plus media plus rootname
	$sql = "SELECT
				objects.id AS objectsId,
				objects.name1,
				objects.deck,
				objects.body,
				objects.notes,
				objects.active,
				objects.end,
				objects.rank as objectsRank,
				(SELECT objects.name1
				FROM objects
				WHERE objects.id = $rootid) AS rootname,
				media.id AS mediaId,
				media.object AS mediaObject,
				media.type,
				media.caption,
				media.active AS mediaActive,
				media.rank
			FROM objects
			LEFT JOIN media
			ON
				objects.id = media.object
				AND media.active = 1
			WHERE
				objects.id = $id
				AND objects.active
			ORDER BY media.rank";

	$result = MYSQL_QUERY($sql);
	$images[] = "";
	$image_files[] = "";
	$caption[] = "";
	$i = 0; 
	$id_last = 0;

	while($myrow = MYSQL_FETCH_ARRAY($result))
	{
		if($myrow['mediaActive'] != null)
		{
			$m_file = "MEDIA/";
			$m_file.= str_pad($myrow["mediaId"], 5, "0", STR_PAD_LEFT);
			$m_file.= ".".$myrow["type"];
			$m_caption = strip_tags($myrow["caption"]);
	 		$m_style = "width: 100%;";
			$image_files[$i] = $m_file;
			$captions[$i] = $m_caption;
		
			// build random styles
			$randomPadding = rand(0, 15);
			$randomPadding *= 10;
			$randomWidth = rand(4, 7);
			$randomWidth *= 10;
			$randomFloat = (rand(0, 1) == 0) ? 'left' : 'right';
			$icStyle = 'width:'.$randomWidth.'%; ';
			$icStyle .= 'float:'.$randomFloat.'; ';
			$icStyle .= 'padding-top:'.$randomPadding.'px; ';
			$icStyle .= 'margin: 40px;'; 

			$images[$i] .= "<div ";
			$images[$i] .= "id='image".$i."' ";
			$images[$i] .= "style='".$icStyle."' ";
			$images[$i] .= ">";
		
			$images[$i].= "<a ";
			$images[$i].= "href='$u?id=".$myrow['objectsId']."'";
			$images[$i].= "class='img-container' ";
			$images[$i].= ">";
			$images[$i].= displayMedia($m_file, $m_caption, $m_style);
			$images[$i].= "</a>";
		
			$images[$i].= "<div class='caption'>";
			$images[$i].= $myrow['name1'];
			$images[$i].= "</div>";
			$images[$i].= "</div>";
			$id_last = $myrow['objectsId'];
		}
		$i++;
	}

	if(count($images) > 0)
	{
	?><div id="ajax"><?
	$html = "";
	for($i = 0; $i < count($images); $i++)
		$html.= $images[$i];
	echo $html;
	?></div>
	<div id="body"><? echo nl2br($obj['body']); ?></div><?
	}
}
require_once("GLOBAL/foot.php");
?>
