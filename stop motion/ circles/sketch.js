
var r = new Rune({
  container: "#canvas",
  width: 640,
  height: 360,
  debug: false
});

var chooseColor= [
  new Rune.Color(255, 102, 102),
  new Rune.Color(0, 255, 128),
  new Rune.Color(0, 204, 204)
];
// draw background
r.rect(0, 0, r.width, r.height).fill(0);

// r.circle(r.random(10,r.width-10), r.random(10,r.height-10),20).fill(255);

var size= 2
var i=size


while(i< r.width){
  var j=size 
while(j<r.height){
  r.circle(i ,j,size,size)
  //all random colors from array
  .fill(chooseColor[Math.floor(Math.random() * chooseColor.length)]);

  //only one changes color

  j=j+((size*2)+(size/2))
}
  i=i+((size*2)+(size/2))

}

r.draw();