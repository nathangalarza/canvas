var canvas = document.getElementById("myCanvas"); //sets canvas as an object of canvas from the html

var context = canvas.getContext("2d");//sets context as a something we can manipulate

context.fillStyle = "red";

//context.fillRect(50,50,140,75);

var Point = (function () { //Point podemos hacerlo a que sea igual a context y si eventhandler es true pues pinta
    function Point(x, y, time) {
        this.x = x;
        this.y = y;
        this.time = time || Date.now();
    }
    Point.prototype.distanceTo = function (start) {
        return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
    };
    Point.prototype.equals = function (other) {
        return this.x === other.x && this.y === other.y && this.time === other.time;
    };
    Point.prototype.velocityFrom = function (start) {
        return this.time !== start.time
            ? this.distanceTo(start) / (this.time - start.time)
            : 0;
    };
    return Point;
}());
  


