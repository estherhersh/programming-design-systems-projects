var r = new Rune({
  container: "#canvas",
  width: 600,
  height: 900,
  debug: false
});

var mods = [];

r.rect(0,0,r.width,r.height).fill(200).stroke(false);



var grids = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  gutter: 0,
  columns: 15,
  rows: 15
});


var modules = grids.modules.slice();

for(var i = 1; i < 226; i++) {
  var module = modules.shift();
  mods.push(module);
  // console.log(module);
  // module.add(r.text(i,0,0).fontSize(7).rotate(180))
}

size = 50

for(var i = 1; i < 100; i++) {
  var inc= .45
  var myShapes = r.rect((r.random(0,20)), 0, size-i*inc,size-i*inc)
  .fill(70,.4)
  .stroke(false)
  .rotate(r.random(-30,30));

  var show= Rune.random(1)>0.4;
  if(show){
  mods[i].add(myShapes);
}
}


for(var i = 0; i < 50; i++) {
  var myShapes = r.rect((r.random(0,20)), 0, size-i*.32,size-i*.32)
   .fill(60,122,153,.4)
  .stroke(false)
  .rotate(r.random(-60,60));

  var show= Rune.random(1)>0.4;
  if(show){
  mods[i].add(myShapes);

}
}
for(var i = 0; i < 150; i++) {
  var myShapes = r.rect((r.random(0,20)), 0, size-10-i*.3,size-10-i*.3)
   .fill(70,.4)
  .stroke(false)
  .rotate(r.random(-60,60));

  var show= Rune.random(1)>0.5;
  if(show){
  mods[i].add(myShapes);
}
}


for(var i = 0; i < 100; i++) {
  var myShapes = r.rect((r.random(0,20)), 0, size-i*.4,size-i*.4)
   .fill(60,122,153,.4)
  .stroke(false)
  .rotate(r.random(-60,60));

  var show= Rune.random(1)>0.6;
  if(show){
  mods[i].add(myShapes);
}
}


var down= 70
var fsize = 50

var The= r.text('The',0,0+down)
  .fontFamily("helvetica")
  .fontSize(fsize)
  .fill(0,.2)
  .stroke(false)
  .rotate(180);

var Unbearable= r.text('Unbearable',-30,20+down)
  .fontFamily("helvetica")
  .fontSize(fsize)
 .fill(0,.3 )
  .stroke(false)
    .rotate(180)
var Lightness= r.text('Lightness',-10,40+down)
  .fontFamily("helvetica")
  .fontSize(fsize)
   .fill(0,.4)
  .stroke(false)
  .rotate(180)
var Of= r.text('of',20,50+down)
  .fontFamily("helvetica")
  .fontSize(fsize)
   .fill(0,.5)
  .stroke(false)
  .rotate(180)
var Being= r.text('Being',-20,50+down)
  .fontFamily("helvetica")
  .fontSize(fsize)
   .fill(0,.55)
  .stroke(false)
  .rotate(180)
var Milan= r.text('Milan',0,20)
  .fontFamily("helvetica")
  .fontSize(fsize)
   .fill(0,.1)
   .stroke(false)
  .rotate(180)
var Kundera= r.text('Kundera',0,20)
  .fontFamily("helvetica")
  .fontSize(fsize)
   .fill(0,.1)
   .stroke(false)

  .rotate(180)

mods[174].add(The);
mods[160].add(Unbearable);
mods[145].add(Lightness);
mods[129].add(Of);
mods[114].add(Being);
mods[222].add(Milan);
mods[218].add(Kundera);




grids.rotate(180,r.width/2,r.height/2);

// r.rect(0,0,100,100).fill(200).stroke(false);

r.draw();


