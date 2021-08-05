const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var polygonImg
var score=0;


function preload(){

    polygonImg=loadImage("polygon.png")
    
	
}

function setup() {
	createCanvas(800, 700);
engine=Engine.create()
world=engine.world

	//Create the Bodies Here.
    ground = new Ground(400,680,800,20);
    //Level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
//Level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
//Top
    block16 = new Block(390,155,30,40);

    ball=Bodies.circle(200,50,40)
    World.add(world,ball)

    rope = new Rope(this.ball,{x:200,y:100})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  //ellipse(ball.position.x,ball.position.y,40,40)
imageMode(CENTER);
image(polygonImg,ball.position.x,ball.position.y,40,40);
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 ground.display();
 rope.display();
 block8.score()
 block9.score()
 block10.score()
 block11.score()
 block12.score()
 block13.score()
 block14.score()
 block15.score()
 block16.score()
 text("score"+score,750,40);
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    rope.fly();
  }

  function keyPressed(){
    if(keyCode===32){
      
      rope.attach(this.ball)

    }

  }