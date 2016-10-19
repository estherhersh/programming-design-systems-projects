var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: false
});

r.polygon(0,0)
	.lineTo(r.width,0)
	.lineTo(r.width,r.height)
	.lineTo(0,r.height)
	.lineTo(0,0)
	.fill(0);

r.triangle(r.width/2-100, r.height/4, r.width/2+100, r.height/4, r.width/2, r.height/2+200)
.fill(255)
.strokeWidth(6);

var grid = r.grid({
  x: 20,
  y: 20,
  width: r.width - 50,
  height: r.height - 100,
  columns: 30,
  rows: 30
});


for(var x = 0; x< 31 ; x++){
	for(y=0;y<31;y++){
 		drawSquare(x,y);
 	}
}

function drawSquare(x,y)
{
	var square = r.rect(5, 5, 15, 15)
		.fill(0)
		.stroke(0)
	grid.add(square, x, y);
}

grid.rotate(45, r.width/2, r.height/2);

r.path(r.width/2+100,r.height/4 - 5)
 . curveTo(0, -120, -200, -120, -200, 0)
 .fill(255);

 r.circle(r.width/2, r.height/8,20,20)
 	.fill(0)
 	.strokeWidth(4)
 	.stroke(255);

r.draw();