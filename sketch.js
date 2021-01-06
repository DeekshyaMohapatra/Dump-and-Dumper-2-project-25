
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var catcher1,catcher2,catcher3,dustbinImg;
var bg;

function preload()
{
 dustbinImg=loadImage("dustbingreen.png");	
 bg=loadImage("rfgrgvfdc.PNG");
}

function setup() {
	createCanvas(1400, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 paper = new Paper(200,100,this.radius);
 ground = new Ground(800,490,1600,23);
 catcher1 = new Catcher(971,375,20,185);
 catcher2 = new Catcher(1129,375,20,185);
 catcher3 = new Catcher(1050,467,150,20);

 
	Engine.run(engine);

}


function draw() {
  //rectMode(CENTER);
  background("white");
  
  image(bg,-5,-10,1430,500)
  
  paper.display();
  ground.display();
  catcher1.display();
  catcher2.display();
  catcher3.display();
  imageMode(CENTER);
  image(dustbinImg,1050,375,200,210)
  
 

  drawSprites();
} 

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:73,y:-95})
	}
}



