var r = new Rune({
  container: "#canvas",
  width: 1600,
  height: 1600
});

r.rect(0,0,r.width,r.height).fill(0,60,0);

// Create a new Rune.Font object
var f = new Rune.Font("../ostrich-regular.ttf");
var letterheight= 10

// load() will actually load the font file and call the function
// when the loading is done.
f.load(function(err) {

  // a x,y 200,200 and font size 120.
  var path = f.toPath("GRASS", 0, 0, 400)
    .fill(false)  

  // We need to specifically add the new path to the stage,
  // as is wasn't created via the r.path() function.
  // r.stage.add(path);

  // Just for fun, convert the path to polygons.
  var polys = path.toPolygons({spacing:1}, path);

  // loop through the points and change them a little bit
  for(var i = 0; i < polys.length; i++) {

    var poly = polys[i];
    for(var j = 0; j < poly.state.vectors.length; j++) {
      var vec = poly.state.vectors[j];
      // var circ= r.circle(poly.state.x + vec.x, poly.state.y + vec.y, 3, 3);

      // var line= r.line(poly.state.x + vec.x, poly.state.y + vec.y, r.random(r.width/2+300,r.width/2-300),0);
       var lines= r.line(vec.x+50, vec.y+r.height/2+10+letterheight, vec.x+20+ (r.random(-15,15)), vec.y+r.height/2+letterheight+10+(r.random(-15,15)))
       .stroke(0,30,0); 
      var lines= r.line(vec.x+50, vec.y+r.height/2+letterheight, vec.x+20+ (r.random(-15,15)), vec.y+r.height/2+(r.random(-15,15)))
        .stroke(0,70,0);

      var lines= r.line(vec.x+50, vec.y+r.height/2+letterheight, vec.x+20+ (r.random(-15,15)), vec.y+r.height/2+(r.random(-15,15)))
       .stroke(0,102,0);  
}
    } 

  r.draw();
});

