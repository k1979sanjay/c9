var box;
function setup() {
  createCanvas(400,400);
box=createSprite(200,200)
}

function draw() 
{
  background("pink");
  if(keyDown("right"))
  {
box.x+=1
  }
  drawSprites()


}




