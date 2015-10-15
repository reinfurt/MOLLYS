var low;
var high;

var lsvg;
var hsvg;

var parts;

var lparts;
var hparts;

// var ltimer;
// var htimer;

// initialise necessary variables
function init()
{
	low = document.getElementById('low-svg');
	high = document.getElementById('high-svg');	
	
	parts = new Array();
	parts.push('laces');
	parts.push('sole');
	parts.push('body');
	
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
			
			for(key in lparts)
			{
				if(lparts.hasOwnProperty(key))
				{
					var rgb = getRandomColour();
					for(var i = 0; i < lparts[key].length; i++)
					{
						lparts[key][i].addEventListener("click", function() { setFill("l"); });
						lparts[key][i].style.cursor = "pointer";
					}
				}
			}
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
		
			for(key in hparts)
			{
				if(hparts.hasOwnProperty(key))
				{
					var rgb = getRandomColour();
					for(var i = 0; i < hparts[key].length; i++)
					{
						hparts[key][i].addEventListener("click", function() { setFill("h"); });
						hparts[key][i].style.cursor = "pointer";
					}
				}
			}
		}, false);
	}
}

function init2(sole, laces, body)
{
	low = document.getElementById('low-svg');
	high = document.getElementById('high-svg');	
	parts = new Array();
	parts.push('sole');
	parts.push('laces');
	parts.push('body');
	
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
			
			for(key in lparts)
			{
				if(lparts.hasOwnProperty(key))
				{
					for(var i = 0; i < lparts[key].length; i++)
					{
						if(parts[key] == 'body')
							lparts[key][i].setAttribute('fill', body);
						else if(parts[key] == 'sole')
							lparts[key][i].setAttribute('fill', sole);
						else
							lparts[key][i].setAttribute('fill', laces);
					}	
				}
			}
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
		
			for(key in hparts)
			{
				if(hparts.hasOwnProperty(key))
				{
					for(var i = 0; i < hparts[key].length; i++)
					{
						if(parts[key] == 'body')
							hparts[key][i].setAttribute('fill', body);
						else if(parts[key] == 'sole')
							hparts[key][i].setAttribute('fill', sole);
						else
							hparts[key][i].setAttribute('fill', laces);
					}	
				}
			}
		}, false);
	}
}

// function hanimate()
// {
// 	for(var key in hparts)
// 	{
// 		if(hparts.hasOwnProperty(key))
// 		{
// 			var rgb = getRandomColour();
// 			for(var i = 0; i < hparts[key].length; i++)
// 				hparts[key][i].setAttribute('fill', rgb);
// 		}
// 	}
// }
// 
// function lanimate()
// {
// 	for(var key in lparts)
// 	{
// 		if(lparts.hasOwnProperty(key))
// 		{
// 			var rgb = getRandomColour();
// 			for(var i = 0; i < lparts[key].length; i++)
// 				lparts[key][i].setAttribute('fill', rgb);
// 		}
// 	}
// }

function setFill(hl)
{
	// var rgb = getRandomColour();
	if(hl == "l")
		p = lparts;
	else
		p = hparts;
	for(var key in parts)
	{
		if(parts.hasOwnProperty(key))
		{
			var rgb = getRandomColour();
			document.getElementById(parts[key] + "-colour").value = rgb.toString();
			for(var i = 0; i < p[key].length; i++)
			{
				p[key][i].setAttribute('fill', rgb);
			}
			
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