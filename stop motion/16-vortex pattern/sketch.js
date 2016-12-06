
var r = new Rune({
  container: "#canvas",
  width: 640,
  height: 360,
  debug: false
});

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


r.polygon(0,0)
  .lineTo(0,0)
  .lineTo(r.width,0)
  .lineTo(r.width,r.height)
  .lineTo(0,r.height)
  .fill(0);

var midx=r.width/2
var midy= r.height/2
var distx= 30
var disty= 30
var rad = 50
var rot=r.random(0,90)
// draw a circle
r.circle(midx,midy, 10).fill(0);

// now find the x,y of the new point that is 300px and 45 degrees away from the center point
// notice how we need to convert our degrees to radians with the radians() function
for(j=0;j<24;j++){
for(i=0;i<275;i++){
var strokeColor= colors[Math.floor(Rune.random(colors.length))]

var low=6
var high=10
var square= r.random(low,high)
// var x = Math.cos(Rune.radians(rad)) * distx + midx;
// var y = Math.sin(Rune.radians(rad)) * disty +midy;
var x = Math.cos(Rune.radians(rad)) +midx;
var y = Math.sin(Rune.radians(rad)) +midy;
// draw a circle at that x and y
var drawLine= r.ellipse(x+i, y+i, square,square)

drawLine.rotate(rot,r.width/2+30,r.height/2)
// .rotate(r.random(40,60),r.width/2+10,(r.height/2)-10)
.stroke(false)
.fill(strokeColor);

rad= rad+30

}
distx=distx-20
disty=disty-20
rot=rot+15

}



r.draw();