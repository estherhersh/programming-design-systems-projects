// This sketch requires you to add Rune.Noise to your HTML page:
// https://github.com/runemadsen/rune.noise.js

var r = new Rune({
  container: "#canvas",
  width: 640,
  height: 360,
  debug: true
});


//opacity
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

  var randfill= (chooseColor[Math.floor(Math.random() * chooseColor.length)])

// draw background
r.rect(0, 0, r.width, r.height).fill(0);

var noise = new Rune.Noise();


for(var i = 0; i < 3; i++) {

  noise.noiseDetail(i + 1);

  var noisePath = r.path(0, r.height/2)
    //.stroke(randfill)
    .stroke(255)

    .fill(false)
    .strokeWidth(2);

  var noiseStep = 0;

  for(var x = 0; x < r.width; x += xStep) {
      var xStep = 15;

    var y = noise.get(noiseStep) * 70;
    noisePath.lineTo(x, y);

    noiseStep += 0.0;
  }
}

r.draw();
