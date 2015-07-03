// animateX
//
// adapted from animateEmoticon.js
// adapted from animateMessage.js
//
// display : {id}
// animate : {true, false}	
// delay : ## [50]


// 	globals	
var u; // = unit
var bgcolor = "#fff";
var gridcolor = "#000";
var linecolor = "#00f";
var linewidth = 7;
var pad = linewidth;

var messages = new Array();
var timeout;
var pointer;

var canvas;
var live;
var context;
var delay = 200;

function loadMessages()
{
	// M
	// m
	messages[77] = 	[		
			"0,0,0,1",
			"0,0,0.5,0.5",
			"0.5,0.5,1,0",
			"1,0,1,1"
			];
	
	// MMM
	messages[1] = 	[		
			"0,0,0,1",
			"0,0,.5,.5",
			".5,.5,1,0",
			"1,0,1,1",
			"1,0,1,1",
			"1,0,1.5,0.5",
			"1.5,0.5,2,0",
			"2,0,2,1",
			"2,0,2,1",
			"2,0,2.5,0.5",
			"2.5,0.5,3,0",
			"3,0,3,1"
			];
	
	// X
	messages[2] = 	[		
			"0,0,1,1",
			"0,1,1,0"
			];
	// \\\
	messages[220] = [		
			"0,0,1,1",
			"1,0,2,1",
			"2,0,3,1"
			];

	// M (out of order)
	messages[4] = 	[		
			"1,0,1,1",
			"0,0,0.5,0.5",
			"0.5,0.5,1,0",
			"0,0,0,1"
			];
	
	// M-sideways M-M
	messages[5] = [			
			"0,0,0,1",
			"0,0,0.5,0.5",
			"0.5,0.5,1,0",
			"1,0,1,1",
			"1,1,2,1",
			"2,1,1.5,0.5",
			"1.5,0.5,2,0",
			"2,0,1,0",
			"2,0,2,1",
			"2,1,2.5,0.5",
			"2.5,0.5,3,1",
			"3,1,3,0"
			];
	
	// MMM rotated around one box
	messages[6] = [			
			"0,0,0,1",
			"0,0,0.5,0.5",
			"0.5,0.5,1,0",
			"1,0,1,1",
			"1,1,0.5,0.5",
			"0.5,0.5,0,1",
			"0,1,1,1",
			"0,0,1,0"
			];
	
	// done
	// d
	messages[68] = [			
			"0,0,1,0",
			"1,0,1,1",
			"1,1,0,1",
			"0,1,0,0"
			];
			
	// edit
	// e
	messages[69] = [
			"0,1,1,0",
			"1,0,1,1",
			"1,1,0,1"
			];
	
	// restart
	// r
	messages[82] = [
			"1,0,1,1",
			"1,1,0,1",
			"0,1,0,0",
			"0,0,1,0",
			"1,0,0,1"
			];
	
	// exit
	// esc
	messages[27] = [		
			"1,0,1,1",
			"1,1,0,1",
			"0,1,0,0",
			"0,0,1,0",
			"1,0,0,1",
			"0,0,1,1"
			];
	
	// ok
	messages[11] = [		
			"0.5,0.5,1,1",
			"1,1,1.5,0.5",
			"1.5,0.5,2,0"
			];
	
	// cancel
	messages[12] = [		
			"0,0,1,1",
			"0,1,1,0"
			];
	
	// forward
	// k, right arrow
	messages[75] = [	
			"1,0,1.5,0.5",
			"1.5,0.5,1,1",
			"0,0.5,1.5,0.5"
			];
			
	// back
	// j, left arrow
	messages[74] = [		
			"0.5,0,0,0.5",
			"0,0.5,0.5,1",
			"0,0.5,1.5,0.5"
			];
	
	// loading
	// l
	messages[76] = [
			"0,1,0.5,0.5",
			"0.5,0.5,1,0",
			"1,0,1.5,0.5",
			"1.5,0.5,2,1",
			"2,1,2.5,0.5",
			"2.5,0.5,3,0"
			];
	
}

function initX(canvasId)
{
	loadMessages();
	
	// get canvas
	canvas = document.getElementById(canvasId);

	// live = the part being drawn
	// (canvas is larger than what is drawn b/c padding)
	live = {
		width: canvas.width, 
		height: canvas.height
	};
	canvas.width = live.width+2*pad;
	canvas.height = live.height+2*pad;
	canvas.style.width = (canvas.width/2).toString().concat("px");
	canvas.style.height = (canvas.height/2).toString().concat("px");
	
	context = canvas.getContext("2d");
	u = live.height;
	pointer = 0;

	context.strokeStyle = linecolor;
	context.fillStyle = bgcolor;
	context.lineWidth = linewidth;
	
	keys = Object.keys(messages);
	k = keys[Math.floor(keys.length*Math.random())];
	drawGrid(canvas, live, context);
	animateX(messages[k]);
}

function animateX(message) 
{
	if (pointer < message.length) 
	{
		// draw lines
		var points = message[pointer].split(",");

		context.translate(pad,pad);
		context.strokeStyle = linecolor;
		context.beginPath();
		context.moveTo(points[0]*u, points[1]*u);
		context.lineTo(points[2]*u, points[3]*u);
		context.stroke();
		context.setTransform(1, 0, 0, 1, 0, 0);

		pointer++;
		timeout = setTimeout(function(){animateX(message);}, delay);

	} 
	else
		stopAnimateX();
}
	
function stopAnimateX() {
	if (timeout == null)
		return true;
	else
	{
		clearTimeout(timeout);
		timeout = null;
		return false;
	}
}

var loadv;
function startLoad() {
	loadv = setInterval(load, 1000);
}

function load() {
	pointer = 0;
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawGrid(canvas, live, context);
	animateX(messages[76]);
}

function stopLoad() {
	clearInterval(loadv);
}

function drawGrid(canvas,live,context) 
{
	// draw background
	context.fillStyle = bgcolor;
	// context.fillRect(0,0,canvas.width,canvas.height);

	// draw circles
	//xgrid = 3;
	//ygrid = 1;
	radius = linewidth;
	context.fillStyle = gridcolor;
	context.translate(pad,pad);

	for (x=0; x<=live.width; x+=u) {
		for (y=0; y<=live.height; y+=u) {
			// main points
			context.beginPath();
			context.arc(x,y,radius,0,2*Math.PI);
			context.fill();
			
			// centre points
			context.beginPath();
			context.arc(x+u/2,y+u/2,radius,0,2*Math.PI);
			context.fill();
		}
	}
	context.setTransform(1, 0, 0, 1, 0, 0);
}


document.onkeydown = function(e) {
	pointer = 0;
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawGrid(canvas, live, context);
	
	e = e || window.event;
	kc = e.which || e.keyCode;
	
	if(kc in messages)
		animateX(messages[kc]);
	else
	{
		keys = Object.keys(messages);
		k = keys[Math.floor(keys.length*Math.random())];
		animateX(messages[k]);
	}
}