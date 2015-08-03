// animateX
//
// adapted from animateEmoticon.js
// adapted from animateMessage.js
//
// display : {id}
// animate : {true, false}	
// delay : ## [50]

// globals

var u;
var bgcolor = "#fff";
var gridcolor = "#000";
var linecolor = "#000";
var linewidth = 7;
var pad = linewidth;
var messages = new Array();
var timeout;
var pointer;
var canvas;
var live;
var context;
var delay = 200;


function initX(canvasId) {

	loadMessages();

	canvas = document.getElementById(canvasId);
	live = {
		width: canvas.width, 
		height: canvas.height
	};
	
	u = live.height;
	
	canvas.width = live.width+2*pad;
	canvas.height = live.height+2*pad;
	canvas.style.width = (canvas.width/2).toString().concat("px");
	canvas.style.height = (canvas.height/2).toString().concat("px");
	
	context = canvas.getContext("2d");
	context.strokeStyle = linecolor;
	context.fillStyle = bgcolor;
	context.lineWidth = linewidth;
	
	keys = Object.keys(messages);
	k = keys[Math.floor(keys.length*Math.random())];
	animate(k);
}


function animateX(message) {

	if(pointer < message.length) {
 
                whichcolor = Math.floor(3*Math.random());

		switch (whichcolor) {
 
			case 0:
			linecolor="#FF0000";
			break;

			case 1:
			linecolor="#0000FF";
			break;

			case 2:
			linecolor="#FFFF00";
			break;
 
			default:
			linecolor="#000000";
			break;
		}

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
	else {

		stopAnimateX();
		isDrawing = false;
                keys = Object.keys(messages);
                k = keys[Math.floor(keys.length*Math.random())];
                animate(k);
	}
}
	

function stopAnimateX() {

	if (timeout == null)
		return true;
	else {

		clearTimeout(timeout);
		timeout = null;
		return false;
	}
}


// this "helper" is redundant, should remove and use setTimeout only
// can put all in the stopAnimateX function?
// make a new function for pausing, then another for starting again?

var isDrawing = false;

function animate(kc) {

	if(!isDrawing) {

		// isDrawing = true;
		pointer = 0;
		context.clearRect(0, 0, canvas.width, canvas.height);
		// drawGrid(canvas, live, context);
		animateX(messages[kc]);
	}
}

	
var loadv;
var isLoading = false;

function startLoad() {

	if(!isLoading) {

		loadv = setInterval(load, 100);
                timeout = setTimeout(function(){animateX(message);}, delay);
		isLoading = true;
		console.log("loading");
	}
}


function load() {

	animate(76);
}


function stopLoad() {

	if(isLoading) {

		clearInterval(loadv);
		isLoading = false;
		console.log("done loading");
	}
}


function drawGrid(canvas,live,context) {

	// draw background
	context.fillStyle = bgcolor;
	// context.fillRect(0,0,canvas.width,canvas.height);

	// draw circles
	// xgrid = 3;
	// ygrid = 1;
	radius = linewidth/2;
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
	
	e = e || window.event;
	kc = e.which || e.keyCode;

	if (kc in messages)
		animate(kc);
	else {

		keys = Object.keys(messages);
		k = keys[Math.floor(keys.length*Math.random())];
		animate(k);
	}
}


function loadMessages() {

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
			"0,0,0,0",
			"0,1,0.5,0.5",
			"0.5,0.5,1,0",
			"1,0,1.5,0.5",
			"1.5,0.5,2,1",
			"2,1,2.5,0.5",
			"2.5,0.5,3,0"
			];

	// usa
	// u
	messages[85] = [
			"0,0,0,1",
			"0,1,1,1",
			"1,1,1,0",
			"2,0,1,0",
			"1,0,1,0.5",
			"1,0.5,2,0.5",
			"2,0.5,2,1",
			"2,1,1,1",
			"2,1,2,0",
			"2,0,3,0",
			"3,0,3,1",
			"3,0.5,2,0.5"
			];
}
