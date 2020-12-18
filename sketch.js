
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 700, width, 60,{isStatic:true});
	World.add(world,ground);
	bobDiameter=40; 
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	roofObj = new Roof(width/2,height/4,width/7,20);
	

	
	c1 = new Chain(roofObj,bob1,0,0);
	c2 = new Chain(roofObj,bob2,0,0);
	c3 = new Chain(roofObj,bob3,0,0);
	c4 = new Chain(roofObj,bob4,0,0);
	c5 = new Chain(roofObj,bob5,0,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  /*
  sp1.x = ball1.position.x;
  sp1.y = ball1.position.y;
  sp2.x = ball2.position.x;
  sp2.y = ball2.position.y;
  sp3.x = ball3.position.x;
  sp3.y = ball3.position.y;
  sp4.x = ball4.position.x;
  sp4.y = ball4.position.y;
  sp5.x = ball5.position.x;
  sp5.y = ball5.position.y;
  
  //drawSprites();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();	*/
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roofObj.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.05,y:-0.05});

  }
}




