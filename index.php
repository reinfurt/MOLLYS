<?
$pageName = basename(__FILE__, ".php");
require_once("GLOBAL/head.php");

$rootid = $ids[0];

if(!$id)
{
	$sql = "SELECT 
				o.id AS objectsId,
				o.name1,
				o.deck,
				o.body,
				o.notes,
				o.active,
				o.end,
				m.id AS mediaId,
				m.type,
				m.caption
			FROM
				(SELECT *
				FROM objects
				WHERE objects.active = 1
				ORDER BY modified DESC
				LIMIT 5) AS o
			LEFT JOIN media AS m
			ON o.id = m.object";
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
}

$result = MYSQL_QUERY($sql);
// //$myrow = MYSQL_FETCH_ARRAY($result);
// //$vars = array('rootname', 'name1', 'body', 'notes', 'begin', 'end');
// foreach($vars as $v)
// 	$$v = nl2br($myrow[$v]);

while($myrow = MYSQL_FETCH_ARRAY($result))
{
	echo "<br>+++++++++++++++++++++++++<br>";
	foreach($myrow as $key => $value)
		if($value)
			echo $key.": ".$myrow[$key]."<br>";
}
require_once("GLOBAL/foot.php");
?>
