window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       // test();
       console.log("bottom");
       // add loading graphic
    }
};

function test()
{
	if(window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} 
	else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 2 || xmlhttp.readyState == 3) {
			// start loading animation
			startLoad();
		}
		else if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			// stop loading animation
			stopLoad();
			document.getElementById("ajax").innerHTML += xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", "ajax.php", true);
	xmlhttp.send();
}