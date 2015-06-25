// animateX
//
// adapted from animateEmoticon.js
// adapted from animateMessage.js
//
// display : {id}
// animate : {true, false}	
// delay : ## [50]


// 	globals	
var u;
var bgcolor = "#000";
var gridcolor = "#000";
var linecolor = "#000";
var pad = 10;
var messages = new Array();
var delays = new Array();
var timeout;
var pointer;

var canvas;
var delay;
var context;
var live; 

function initX(displayId,animate,delay)
{
	// M
	// m
	messages[77] = 	[		
			"0,0,0,1",
			"0,0,0.5,0.5",
			"0.5,0.5,1,0",
			"1,0,1,1"
			];

	messages[1] = 	[		// MMM
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

	messages[2] = 	[		// X
			"0,0,1,1",
			"0,1,1,0"
			];

	messages[3] = 	[		// ///
			"0,0,1,1",
			"1,0,2,1",
			"2,0,3,1"
			];

	messages[4] = 	[		// M (out of order)
			"1,0,1,1",
			"0,0,0.5,0.5",
			"0.5,0.5,1,0",
			"0,0,0,1"
			];
	
	messages[5] = [			// M-sideways M-M
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
	
	messages[6] = [			// MMM rotated around one box
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
	
	messages[11] = [		// ok
			"0.5,0.5,1,1",
			"1,1,1.5,0.5",
			"1.5,0.5,2,0"
			];
	
	messages[12] = [		// cancel
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
	messages[76] = [		// loading
			"0,1,0.5,0.5",
			"0.5,0.5,1,0",
			"1,0,1.5,0.5",
			"1.5,0.5,2,1",
			"2,1,2.5,0.5",
			"2.5,0.5,3,0"
			];
	

	delays[0] = 200;

	var rnd = Math.floor((Math.random() * messages.length));
	//var message = messages[rnd];
	//var message = messages[messages.length-1];
	if(!delay)
		delay = delays[0];
	canvas = document.getElementById(displayId);
	
	
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
// 
// 	if(animate) {
// 		clearTimeout(timeout);
// 		timeout=null;
// 		if(!delay)
// 			delay = 50;
// 
// 		animateX(canvas,live,context,message,delay);
// 	} 
// 	else {
// 		// do something else
// 	}
}


function animateX(canvas,live,context,message,delay) 
{
	if (pointer < message.length) {
		console.log(message.length);
		console.log(pointer);

		// draw bg, grid
		drawGrid(canvas,live,context);

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
		timeout = setTimeout(function(){animateX(canvas,live,context,message,delay);}, delay);

	} 
	else {
		console.log("stop");
		console.log(startStopAnimateMessage());
	}
}
	
function startStopAnimateMessage() {
	if (timeout == null) {
		// initX("animateX","target",true,delay);
		return true;

	}
	else {
		clearTimeout(timeout);
		timeout = null;
		return false;
	}
}


function drawGrid(canvas,live,context) 
{
	// draw background
	context.fillStyle = bgcolor;
	// context.fillRect(0,0,canvas.width,canvas.height);

	// draw circles
	xgrid = 3;
	ygrid = 1;
	radius = 2;
	context.fillStyle = gridcolor;
	context.translate(pad,pad);

	for (x=0; x<=live.width; x+=u) {
		for (y=0; y<=live.height; y+=u) {
			context.beginPath();
			context.arc(x,y,radius,0,2*Math.PI);
			context.fill();

			context.beginPath();
			context.arc(x+u/2,y+u/2,radius,0,2*Math.PI);
			context.fill();
		}
	}
	context.setTransform(1, 0, 0, 1, 0, 0);
}

document.onkeydown = function(e) {
	e = e || window.event;
	pointer = 0;
	delay = 200;
	context.clearRect(0, 0, canvas.width, canvas.height);

	switch(e.which || e.keyCode) {
		case 27: // m
			animateX(canvas, live, context, messages[27], delay);
		break;
		case 68: // d
			animateX(canvas, live, context, messages[68], delay);
		break;
		case 77: // m
			animateX(canvas, live, context, messages[77], delay);
		break;
		case 74: // j
			animateX(canvas, live, context, messages[74], delay);
		break;
		case 39: // right arrow
		case 75: // k
			animateX(canvas, live, context, messages[75], delay);
		break;
		case 76: // l
			animateX(canvas, live, context, messages[76], delay);
		break;
		case 69: // l
			animateX(canvas, live, context, messages[69], delay);
		break;
		case 82: // l
			animateX(canvas, live, context, messages[82], delay);
		break;
		default: return;
	}
}