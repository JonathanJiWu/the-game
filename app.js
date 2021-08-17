var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.font = "10px Georgia";
ctx.strokeText("Hello World!", 10, 50);

ctx.moveTo(100, 300)
ctx.lineTo(200, 300)
ctx.stroke()

ctx.fillStyle = '#e23435'
ctx.fillRect(300, 400, 20, 45)
