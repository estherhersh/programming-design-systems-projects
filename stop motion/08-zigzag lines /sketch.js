// This sketch requires you to add Rune.Noise to your HTML page:
// https://github.com/runemadsen/rune.noise.js

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 400,
  debug: true
});

// draw background
r.rect(0, 0, r.width, r.height).fill(0);

var op= .50
//color array
var chooseColor= [
  new Rune.Color(217, 154, 242,op),
  new Rune.Color(63, 70, 152,op),
  new Rune.Color(119, 215, 250,op),
  new Rune.Color(245, 127, 69,op),
  new Rune.Color(246, 23, 160,op),
  new Rune.Color(145, 215, 140,op),
  new Rune.Color(253, 254, 27,op),
  new Rune.Color(110, 76, 93,op)

];

// var x=0;

// while(x<r.width){
//  x=x+(r.random(30,50))
//  var fillColor= (chooseColor[Math.floor(Math.random() * chooseColor.length)]);

//   r.line(x,0,x,r.height)
//   .stroke(fillColor)
//   .strokeWidth(r.random(2,6));
// }


var noise = new Rune.Noise();


for(var i = 0; i < 73; i++) {
   var fillColor= (chooseColor[Math.floor(Math.random() * chooseColor.length)]);


  noise.noiseDetail(i*1);

  var noisePath = r.path(x*i,0)
    .stroke(fillColor)
    .fill(false)
    .strokeWidth(2);

  var noiseStep = 0;

  for(var y = 0; y < r.height; y += yStep) {
      var yStep = 15;

    var x = noise.get(noiseStep) * r.random(1,100);
    noisePath.lineTo(x, y+100);

    noiseStep += 0.6;

  }
}

r.draw();
