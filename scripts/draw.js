var canvas = document.getElementById("myCanvas"); //sets canvas as an object of canvas from the html

var context = canvas.getContext("2d");//sets context as a something we can manipulate

// The pencil tool instance
tool = new tool_pencil();

// Attach the mousedown, mousemove and mouseup event listeners
canvas.addEventListener('mousedown', ev_canvas, false);
canvas.addEventListener('mousemove', ev_canvas, false);
canvas.addEventListener('mouseup',	 ev_canvas, false);
canvas.setAttribute('width','800');
canvas.setAttribute('height', '600');
console.log(canvas.width);
console.log(canvas.height);
// The mousemove event handler
var started = false;

function tool_pencil () {
	var tool = this;
	this.started = false;

	// This is called when you start holding down the mouse button
	// This starts the pencil drawing
	this.mousedown = function (ev) {
			context.beginPath();
			context.moveTo(ev._x, ev._y);
			tool.started = true;
	};

	// This function is called every time you move the mouse. Obviously, it only
	// draws if the tool.started state is set to true (when you are holding down
	// the mouse button)
	this.mousemove = function (ev) {
		if (tool.started) {
			context.lineTo(ev._x, ev._y);
			context.stroke();
		}
	};

	// This is called when you release the mouse button
	this.mouseup = function (ev) {
		if (tool.started) {
			tool.mousemove(ev);
			tool.started = false;
		}
	};
}

function ev_canvas (ev) {
	// Firefox
	if (ev.layerX || ev.layerX == 0) {
		ev._x = ev.layerX;
		ev._y = ev.layerY;
	// Opera
	} else if (ev.offsetX || ev.offsetX == 0) {
		ev._x = ev.offsetX;
		ev._y = ev.offsetY;
	}

	// Call the event handler of the tool
	var func = tool[ev.type];
	if (func) {
		func(ev);
	}
}



  


