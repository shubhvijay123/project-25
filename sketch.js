const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);



	engine = Engine.create();
	world = engine.world;


 ground = new Ground(600,650,1200,10);
 paper1 = new Paper(500,600,10)
 dustbin1 = new Dustbin(1400,600);





	Engine.run(engine);
  


}

function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
 
 // drawSprites();
 
}
function keyPressed(){

  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position , {x:10,y:-20});
  
 }
}


