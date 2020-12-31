
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,ball1,bar1,bar2,bar3;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bar1 =new dustbin(690,650,200,20);
	bar2 =new dustbin(590,610,20,100);
	bar3 =new dustbin(790,610,20,100);

	ball1=new ball(85,630,10);
	ground1=new ground(400,666,800,20)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  bar1.display();
  bar2.display();
  bar3.display();
  ball1.display();
  ground1.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
	}
}

