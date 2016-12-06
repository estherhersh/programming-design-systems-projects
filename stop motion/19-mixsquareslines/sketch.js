
var r = new Rune({
  container: "#canvas",
  width: 640,
  height: 360,
  debug: false
});

r.rect(0,0,r.width,r.height).fill(0);
//purple
var color1 = new Rune.Color(217, 154, 242);
//darkblue
var color2 = new Rune.Color(63, 70, 152);
//lightblue 
var color3 = new Rune.Color(119, 215, 250);
//orange
var color4 = new Rune.Color(245, 127, 69);
//pink
var color5 = new Rune.Color(246, 23, 160);
//green
var color6 = new Rune.Color(145, 215, 140);
//yellow
var color7 = new Rune.Color(253, 254, 27);
//dark purple
var color7 = new Rune.Color(110, 76, 93);

var colors = [color1,color2,color3,color4,color6,color7];


var numRects = r.random(50,60);

var group = r.group(r.width / 2, r.height / 2);

for(var i = 0; i < numRects; i++)
{
var angle = 360 / numRects;
var strokeColor= colors[Math.floor(Rune.random(colors.length))]
 var radius = r.random(180,200);

 var x = Math.cos(Rune.radians(i * angle)) * radius;
 var y = Math.sin(Rune.radians(i * angle)) * radius;


  r.rect(x, y, 50, 10, group)
   .rotate(i * angle, 0, 0, true)
   .stroke(false)
   .fill(strokeColor);
}

for(var i = 0; i < numRects; i++)
{
var angle = 360 / numRects;
var strokeColor= colors[Math.floor(Rune.random(colors.length))]
 var radius = r.random(250,300);

 var x = Math.cos(Rune.radians(i * angle)) * radius;
 var y = Math.sin(Rune.radians(i * angle)) * radius;


  r.rect(x, y, 50, 10, group)
   .rotate(i * angle, 0, 0, true)
   .stroke(false)
   .fill(strokeColor);

 }

var rad = 50

// draw a circle
// r.circle(midx,midy, 10).fill(0);

// now find the x,y of the new point that is 300px and 45 degrees away from the center point
// notice how we need to convert our degrees to radians with the radians() function
for(j=0;j<3;j++){
for(i=0;i<80;i++){
var midx=r.width/2+(r.random(5,15))
var midy= r.height/2+(r.random(5,15))
var distx= r.random(0,250)
var disty= r.random(0,250)
var strokeColor= colors[Math.floor(Rune.random(colors.length))]

var low=6
var high=10
var square= r.random(low,high)
var x = Math.cos(Rune.radians(rad)) * distx + midx;
var y = Math.sin(Rune.radians(rad)) * disty +midy;
// draw a circle at that x and y
r.line(r.width/2,r.height/2,x,y)
.rotate(r.random(40,60),r.width/2+10,(r.height/2)-10)
.stroke(strokeColor)
.strokeWidth(r.random(0,4));
// r.line(r.width/2,r.height/2,x,y)
// .rotate(r.random(40,60),r.width/2+10,(r.height/2)-10)
// .stroke(0)
// .strokeWidth(r.random(4,6));
rad= rad+r.random(90,100)
}
distx=distx-3
disty=disty-3
low=low-2
high=high-2
}

var noise = new Rune.Noise().noiseDetail(0.2);
var numPoints = 60;
var pointDegree = 360 / numPoints;
var radius = 10;
var noiseStep = 0;

var noiseCircle = r.polygon(r.width/2-5, r.height/2-5)
  .stroke(0)
  .fill(0)
  .strokeWidth(2);

for(var i = 0; i < numPoints; i++) {

  var noiseRadius = (noise.get(noiseStep) * 30) + radius;
  var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
  var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

  noiseCircle.lineTo(x, y);
  noiseStep += 0.02;
}

r.draw();