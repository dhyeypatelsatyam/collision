var ms,fs


function setup() {
  createCanvas(800,400);
  ms=createSprite(400, 200, 50, 50);
  fs=createSprite(400,300,50,50);
}

function draw() {
  background(0,255,255);
  
 

  ms.x=mouseX
  ms.y=mouseY

  


if( ms.x-fs.x < ms.width/ 2 + fs.width/2 && fs.x -ms.x < ms.width/ 2 + fs.width/2 &&  ms.y-fs.y < ms.height/ 2 + fs.height/2 && fs.y -ms.y < ms.height/ 2 + fs.height/2){
  ms.shapeColor="yellow";
  fs.shapeColor="yellow";


}
else{

  ms.shapeColor="green";
  fs.shapeColor="blue";

}



  drawSprites();        
}                                  