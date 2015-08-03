var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || 
					isMobile.BlackBerry() || 
					isMobile.iOS() || 
					isMobile.Opera() || 
					isMobile.Windows());
		}
	};

var menu = document.getElementById("menu");
var mb = document.getElementById("menu-base");
var mh = document.getElementById("menu-hover");
menu.onmouseover=function(){
	if(!isMobile.any())
	{
		mb.style.visibility = "hidden";
		mh.style.visibility = "visible";
	}
	else
	{
		mb.style.display = "none";
		mh.style.display = "block";
	}
}
menu.onmouseout=function(){
	if(!isMobile.any())
	{
		mh.style.visibility = "hidden";
		mb.style.visibility = "visible";
	}
	else
	{
		mh.style.display = "none";
		mb.style.display = "block";
	}
}