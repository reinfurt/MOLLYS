	// animateX

        var canvas, context, step, steps, frames, delay;
        var centerX, centerY, radius, direction;
        var counter;
 
        function initX() {
                canvas = document.getElementById("canvas1");
                context = canvas.getContext("2d");
                centerX = canvas.width / 2;
                centerY = canvas.height / 2;
                context.lineWidth = 3;

		context.strokeStyle = "#000";

		// debug

		console.log(canvas);
		console.log(context);
		
		// draw lines

		// context.strokeStyle = "#ff0000";
		context.beginPath();
		context.moveTo(0,0);
		context.lineTo(100,100);
		context.stroke();

		// context.strokeStyle = "#0000ff";
		context.beginPath();
		context.moveTo(100,0);
		context.lineTo(200,100);
		context.stroke();

		// context.strokeStyle = "#ffff00";
		context.beginPath();
		context.moveTo(200,0);
		context.lineTo(300,100);
		context.stroke();

		/*
		var grad = context.createLinearGradient(50, 50, 150, 150);
		grad.addColorStop(0, "#F0F");
		grad.addColorStop(1, "#0CF");
		context.strokeStyle = grad;
                counter = 0;
                radius = canvas.width/2.25;
                frames = 60;
                step = 2.0 * Math.PI / frames;
                delay = 25;
                direction = 1;
                animateNext();
		*/	
        }
 
        function animateNext() {
                counter++;
                context.clearRect(0, 0, canvas.width, canvas.height);
                var thisStep = (counter % frames) * step * direction;
                context.beginPath();
                context.arc(centerX, centerY, radius, 0, thisStep, false);
                context.stroke();
                var t = setTimeout('animateNext()', delay);
        }

