
var r = new Rune({
  container: "#canvas",
  width: 640,
  height: 360,
  debug: false
});

var op = 0.5
//purple
var color1 = new Rune.Color(217, 154, 242,op);
//darkblue
var color2 = new Rune.Color(63, 70, 152,op);
//lightblue 
var color3 = new Rune.Color(119, 215, 250,op);
//orange
var color4 = new Rune.Color(245, 127, 69,op);
//pink
var color5 = new Rune.Color(246, 23, 160,op);
//green
var color6 = new Rune.Color(145, 215, 140,op);
//yellow
var color7 = new Rune.Color(253, 254, 27,op);
//dark purple
var color7 = new Rune.Color(110, 76, 93,op);

var colors = [color1,color2,color3,color4,color6,color7];



r.polygon(0,0)
  .lineTo(0,0)
  .lineTo(r.width,0)
  .lineTo(r.width,r.height)
  .lineTo(0,r.height)
  .fill(0);



//SHARP EDGES

  //blue
  // var strokeColor= color3


  //drawShape(r.random(0,50),280,color3);
  for(i=0;i<4;i++){
  var strokeColor= colors[Math.floor(Rune.random(colors.length))]

  drawShape(r.random(0,50),280,strokeColor);
}



// for(i=0;i<18;i++){
//   drawShape(i*5,(i*18)+ (r.random(0,10)));
// }

// var knotsize = 1

// for(i=0;i<70;i++){
//   var strokeColor= colors[Math.floor(Rune.random(colors.length))]

//  drawWet(i*knotsize);
//  }


function drawShape(rotation,wide,color){

var noise = new Rune.Noise().noiseDetail(2.0);
var noiseStep = 0;


var numPoints = 30;
var pointDegree = 360 / numPoints;
var wide = wide

var myPolygon = r.polygon(r.width/2, r.height/2);

  for(var i = 0; i < numPoints; i++) {
    var radius = (r.width/1.5) - wide;
    
    if(i % 2 == 0) {
    radius = r.width/1.5- (wide+(r.random(30,80)))
  }
      var noiseRadius = (noise.get(noiseStep) * 80) + radius;

    var x = Math.cos(Rune.radians(i * pointDegree)) * radius;
    var y = Math.sin(Rune.radians(i * pointDegree)) * radius;

     noiseStep += 0.4;

  myPolygon.lineTo(x, y);
  myPolygon.fill(color);
  myPolygon.strokeWidth(2);
  myPolygon.rotate(rotation,r.width/2,r.height/2);
  myPolygon.stroke(color);


}
}


// function drawWet(radius){
// var noise = new Rune.Noise().noiseDetail(1.0);
// var numPoints = 60;
// var pointDegree = 360 / numPoints;
// var radius = radius;
// var noiseStep = 0;

// var noiseCircle = r.polygon(r.width/2, r.height/2)
//   .stroke(strokeColor)
//   .fill(false)
//   .strokeWidth(1);

// for(var i = 0; i < numPoints; i++) {

//   var noiseRadius = (noise.get(noiseStep) * 60) + radius;
//   var x = Math.cos(Rune.radians(pointDegree * i)) * noiseRadius;
//   var y = Math.sin(Rune.radians(pointDegree * i)) * noiseRadius;

//   noiseCircle.lineTo(x, y);
//   noiseStep += 0.3;
// }}
r.draw();