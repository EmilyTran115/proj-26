const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  paperObject,groundObject, Bdus,Rdus,Ldus
var world;

function preload(){
dustbining=loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	Bdus = new Dustbin(1200,650,200,20)
	Rdus = new Dustbin(1309,610,20,100)
Ldus= new Dustbin (1100,610,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 
 
  
  paperObject.display();
  groundObject.display();
  //Bdus.display();
 //Rdus.display();
  //Ldus.display ();
  image(dustbining,1100,460,200,200)
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paperObject.body,paperObject.body.posistion,{x:85,y:-85});
		  
	   
	   
	 }
   }