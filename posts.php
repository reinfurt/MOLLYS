<?
// generate html of posts given. . . something
// for use in index.php, and also ajax.php
// requires:
// + connection to sql database (systemDatabase.php)
// + displayMedia.php
//
require_once("lib/systemDatabase.php");
require_once("lib/displayMedia.php");

$page = $_GET['page'];
$posts_per_page = 5;

if($page)
	$offset = $posts_per_page*$page;
else
	$offset = 0;

$sql = "SELECT 
			o.id AS objectsId,
			o.name1,
			o.deck,
			o.body,
			o.notes,
			o.active,
			o.end,
			o.modified,
			m.id AS mediaId,
			m.type,
			m.caption,
			m.active as mediaActive,
			m.rank
		FROM
			(SELECT objects.*
			FROM objects, wires
			WHERE 
				objects.active = 1
				AND wires.active = 1
				AND wires.toid = objects.id
				AND wires.fromid = '1'
			ORDER BY modified DESC
			LIMIT 5 OFFSET $offset) AS o
		LEFT JOIN media AS m
		ON o.id = m.object
		WHERE m.active = 1 
		ORDER BY o.modified DESC";

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
		$images[$i] .= "id='image".($i+$offset)."' ";
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
	$html = "";
	for($i = 0; $i < count($images); $i++)
		$html.= $images[$i];
	echo $html;
} 
?>
