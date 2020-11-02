
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var dustbin1, dustbinImg;
var dustbin2;
var dustbin3;

function preload()
{
	//dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new paper(80, 560);
	ground1 = new Ground(400, height, 800, 20);
	dustbin1 = new dustbin(460, 355);
	dustbin2 = new log(485, 638, 30, 100);
	dustbin3 = new log(710, 638, 30, 100);

	//image(dustbin1.dustbinImg, dustbin1.x, -dustbin1.height/2, dustbin1.width, dustbin1.height)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper1.display();
  ground1.display();
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85, y:-85});
	}
}



