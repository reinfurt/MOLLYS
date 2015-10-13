var lsvg;
var hsvg;

var parts;

var lparts;
var hparts;

var ltimer;
var htimer;

// initialise necessary variables
function init()
{
	var low = document.getElementById('low-svg');
	var high = document.getElementById('high-svg');	
	parts = new Array();
	parts.push('laces');
	parts.push('body');
	parts.push('sole');
	
	// must wait for svg to load
	if(low)
	{
		low.addEventListener("load", function() {
		
			// make svg dom accessible
			lsvg = low.contentDocument;
		
			// store all the relevant parts of the shoe svg
			lparts = {};
			for(p in parts)
				lparts[p] = lsvg.getElementsByClassName(parts[p]);
		
			low.onmouseover = function() {
				// start rotating colour animation 
				ltimer = setInterval(lanimate, 500);
			};
		
			low.onmouseout = function() {
				// end rotation colour animation
				// store recorded colours somehwere
				clearInterval(ltimer);
			};
		}, false);
	}
	if(high)
	{	
		high.addEventListener("load", function() {
		
			// make svg dom accessible
			hsvg = high.contentDocument;
		
			// store all the relevant parts of the shoe svg		
			hparts = {};
			for(p in parts)
				hparts[p] = hsvg.getElementsByClassName(parts[p]);
		
			high.onmouseover = function() {
				// start rotating colour animation 
				htimer = setInterval(hanimate, 500);
			};
		
			high.onmouseout = function() {
				// end rotation colour animation
				// store recorded colours somehwere
				clearInterval(htimer);
			};
		}, false);
	}
}

function hanimate()
{
	for(var key in hparts)
	{
		if(hparts.hasOwnProperty(key))
		{
			var rgb = getRandomColour();
			for(var i = 0; i < hparts[key].length; i++)
				hparts[key][i].setAttribute('fill', rgb);
		}
	}
}

function lanimate()
{
	for(var key in lparts)
	{
		if(lparts.hasOwnProperty(key))
		{
			var rgb = getRandomColour();
			for(var i = 0; i < lparts[key].length; i++)
				lparts[key][i].setAttribute('fill', rgb);
		}
	}
}

// return a string representing a random hex colour, 
// between #000000 and #FFFFFF
function getRandomColour() 
{
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}