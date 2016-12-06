
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


r.rect(0,0,r.width,r.height)
  .fill(0);

  var strokeColor= colors[Math.floor(Rune.random(colors.length))]

  drawLine();
  drawLine();


function drawLine(){
var spacing = 20;

for(i=0;i<15;i++){
    var strokeColor= colors[Math.floor(Rune.random(colors.length))]

  r.line(0,i * spacing,r.width,i * spacing)
  .stroke(strokeColor)
  // .strokeWidth(i/4);
  .strokeWidth(i/10)
  .rotate(0,r.width/2,r.height/2)
  .copy()
  .rotate(180);

  spacing -= .6;

}
}

// var spacing2 = 20;

// for(i=0;i<30;i++){
//     var strokeColor= colors[Math.floor(Rune.random(colors.length))]

//   r.line(0,r.height/2+10+(i * spacing),r.width,r.height/2+10+(i * spacing))
//   .stroke(strokeColor)
//   // .strokeWidth(i/4);
//   .strokeWidth(2-i/8);

//   spacing += 0.01;

// }

// r.triangle(0,0,r.width/2-200,r.height/2,0,r.height).fill(0);
// r.triangle(r.width,0, r.width/2+200,r.height/2,r.width,r.height).fill(0);






r.draw();