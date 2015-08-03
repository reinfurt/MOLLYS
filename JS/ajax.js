// implement infinite scrolling via ajax
var page = 1;
var isWaiting = false;
window.onscroll = function(ev) 
{
	var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	// make this so that it is *before* scrolled 
	// all the way to the bottom of the page
	var scrolledToBottom = (scrollTop + window.innerHeight) >= document.body.scrollHeight;
	if(!isWaiting && scrolledToBottom)
	{
	   	test();
	   	console.log("bottom");
    }
};

function test()
{
	isWaiting = true;
	if(window.XMLHttpRequest)
	{
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function() 
	{
		if(xmlhttp.readyState < 4) 
		{
			// start loading animation
			startLoad();
		}
		else if(xmlhttp.readyState == 4 && xmlhttp.status == 200) 
		{
			// stop loading animation
			stopLoad();
			if(xmlhttp.responseText)
			{
				// load older posts
				document.getElementById("posts").innerHTML += xmlhttp.responseText;
				isWaiting = false;
			}
			else
			{
				// no more posts to load
				// 'done' animation
				animate(68);
			}
		}
	}
	xmlhttp.open("GET", "posts.php?page="+(page++), true);
	xmlhttp.send();
}