var r = new Rune({
  container: "#canvas",
  width: 1000,
  height: 1000,
  debug: false

});


var width= 400
var height= 400 
var x= 100
var y= 100
var heigh= 150
var corner= 40;



//BASE
r.rect(x,y,width,height)
.fill(255)
.stroke(false);


  hardLuggage();
//tote();
 //zipsack();
 //hangaroo();

function hangaroo(){

r.rect(x,y,width,height)
.stroke(false)
//PINK
.fill(255,102,178,.3)
.round(40,40)

r.rect(x,y,width,height/2)
.stroke(false)
.fill(62,12,95,.5)

.round(40,40)

r.polygon(x,y)
  .lineTo(0,0)
  .lineTo(width,height-150)
  .lineTo(width,height)
  .lineTo(0,height)
.stroke(false)
.fill(204,0,0,.6)


r.triangle(x,y,x+width,y+height-150,x+250,y+height-100)
.stroke(false)
//navy
.fill(0,0,153,.7)
//.fill(76,0,153,.5)


}





function zipsack(){
r.rect(x,y,width,height/2)
.stroke(false)
.fill(62,12,95,.6)

// .fill(153,153,255,.4)
.round(40,40)

r.rect(x,y+height/2-20,width,height/2+20)
.stroke(false)
.fill(204,0,0,.6)
.round(40,40);


r.rect(x+15,y+height/2+10,(width)-30,(height/2)-40)
.stroke(false)
//navy
.fill(0,0,153,.7)
//.fill(76,0,153,.5)
.round(40,40)

r.rect(x+15,y+20,(width)-30,(height/2)-50)
.stroke(false)
//PINK
.fill(255,102,178,.6)
.round(40,40)


}




function tote(){
//TOTE
r.rect(x,y,width,height-100)
.stroke(false)
//PURPLE
.fill(62,12,95,.6)

  // .fill(54,35,175,.4)

r.rect(x+75,height-100,width-150,height/2)
.stroke(false)
//RED
.fill(246,53,53,.7);

r.triangle(x+75,height-100,x+75,height+y,x, height+y-100)
.stroke(false)
//NAVY
  .fill(0,0,153,.4)

// .fill(62,12,95,.6)


r.triangle(x+width-75,height-100,x+width-75,height+y,x+width, height+y-100)
.stroke(false)
//PINK
.fill(255,153,204,.7)
}

function hardLuggage(){
//upper rect
r.polygon(x,y)
.lineTo(width,0)
.lineTo(width-100,heigh)
.lineTo(100,heigh)
.lineTo(0,0)
.stroke(false)
//RED
.fill(246,53,53,.7);

//lower rect
r.polygon(x,y+height)
  .lineTo(100,-heigh)
  .lineTo(width-100,-heigh)
  .lineTo(width,0)
  .lineTo(0,0)
  .fill(54,35,175,.6)
  //NAVY
  .fill(0,0,153,.6)

  .stroke(false);

//left rect
r.polygon(x,y)
.lineTo(0,height)
.lineTo(heigh+10,height-100)
.lineTo(heigh+10,100)
.lineTo(0,0)
.stroke(false)
//LIGHT PINK
.fill(255,153,204,.6)

//right rect
r.polygon(x+width,y)
.lineTo(-heigh-10,100)
.lineTo(-heigh-10, height-100)
.lineTo(0,height)
.lineTo(0,0)
.stroke(false)
//PURPLE
.fill(62,12,95,.6)
}




///OUTLINE RECT
r.path(x+corner,y)
//upper right curve
.lineTo(width-(corner*2),0)
.curveTo(width-(corner*2),0,width-corner,0,width-corner,corner)
//lower right
.lineTo(width-corner,height-corner)
.curveTo(width-(corner),height,width-(corner*2),height,width-(corner*2),height)
//lower left
.lineTo(0,height)
.curveTo(0,height,0-corner,height,0-(corner),height-corner)
//upper right
.lineTo(0-corner,corner)
.curveTo(0-corner,0+corner,0-corner,0, 0,0)

.moveTo(-corner,0)
.lineTo(width-corner,0)
.lineTo(width-corner,height)
.lineTo(-corner,height)
.lineTo(-corner,0)
.fill(255)
.stroke(false)
.fillRule("evenodd");




r.draw();