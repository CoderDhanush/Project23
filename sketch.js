var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-25, width,10);
	groundSprite.shapeColor=color(255)
	
    boxSprite=createSprite(width/2, height-35, 100,10);
	boxSprite.shapeColor=color("red")

	box2Sprite=createSprite(340, height-80, 10,100);
	box2Sprite.shapeColor=color("red")

	box3Sprite=createSprite(460, height-80, 10,100);
	box3Sprite.shapeColor=color("red")
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	World.add(world, packageBody);
	
	box = Bodies.rectangle(width/2 ,height-35 ,100 ,10, {isStatic:true});
	World.add(world, box);

	box2 = Bodies.rectangle(340 ,height-80 ,10 ,100, {isStatic:true});
	World.add(world, box2);

	box3 = Bodies.rectangle(460 ,height-80 ,10 ,100, {isStatic:true});
	World.add(world, box3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  boxSprite.x= box.position.x 
  boxSprite.y= box.position.y 

  box2Sprite.x= box2.position.x 
  box2Sprite.y= box2.position.y 

  box2Sprite.debug=false

  

  drawSprites();


}






