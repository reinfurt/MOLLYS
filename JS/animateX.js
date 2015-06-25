
 	//      animateX
	//
	//      adapted from animateEmoticon.js
	//      adapted from animateMessage.js
	//
	//   	display : {id}
	//	animate : {true, false}	
	//	delay : ## [50]

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
	

        function initX(displayId,animate,delay) {

		messages[0] = 	[		// M
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

		delays[0] = 200;
	
		var rnd = Math.floor((Math.random() * messages.length));

		var message = messages[rnd];
		var delay = delays[0];
		var canvas = document.getElementById(displayId);
		var context = canvas.getContext("2d");
		var live = {
			width: canvas.width, 
			height: canvas.height
			};

		canvas.width = live.width+2*pad;
		canvas.height = live.height+2*pad;
		u = live.height;
		pointer = 0;

		context.strokeStyle = linecolor;
		context.fillStyle = bgcolor;

		if (animate) {

			clearTimeout(timeout);
			timeout=null;
			if (!delay) delay = 50;
			animateX(canvas,live,context,message,delay);

		} else {

			// do something else
		}
	}


	function animateX(canvas,live,context,message,delay) {

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

		} else {

	                console.log("stop");
			startStopAnimateMessage();
		}
	}


        function startStopAnimateMessage() {

 		if (timeout == null) {
							
			initX("animateX","target",true,delay);
			return true;

		} else {

			clearTimeout(timeout);
			timeout=null;
			return false;
		}
	}


        function drawGrid(canvas,live,context) {
	
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
