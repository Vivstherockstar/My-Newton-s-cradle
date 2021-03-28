
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new ROOFY_BOY(800,height/4,width/7,20)
var bobRadius = 20 
var bobPositionX = width/2 
var bobPositionY = height/4 + 500
bob1 = new BOBBY_BOY(bobPositionX-80,bobPositionY,bobRadius)
bob2 = new BOBBY_BOY(bobPositionX-40,bobPositionY,bobRadius)
bob3 = new BOBBY_BOY(bobPositionX,bobPositionY,bobRadius)
bob4 = new BOBBY_BOY(bobPositionX+40,bobPositionY,bobRadius)
bob5 = new BOBBY_BOY(bobPositionX+80,bobPositionY,bobRadius)
rope1 = new ROPEY_BOY(bob1.body,roof.body,-80,0)
rope2 = new ROPEY_BOY(bob2.body,roof.body,-40,0)
rope3 = new ROPEY_BOY(bob3.body,roof.body,0,0)
rope4 = new ROPEY_BOY(bob4.body,roof.body,40,0)
rope5 = new ROPEY_BOY(bob5.body,roof.body,80,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}


