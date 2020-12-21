const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundObject, stand1, stand2;
var ablock1, ablock2, ablock3, ablock4;
var ablock5, ablock6, ablock7, ablock8;
var ablock9, ablock10, ablock11, ablock12;
var ablock13, ablock14, ablock15, ablock16;
var bblock1, bblock2, bblock3, bblock4;
var bblock5, bblock6, bblock7, bblock8;
var bblock9;
var polygon,slingShotObject, polygonImage;
var gameState;
var score = 0;

function preload(){
  polygonImage = loadImage("polygon.png");
}

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  groundObject = new ground(500, 600, 1000, 20);
  stand1 = new ground(395, 450, 200, 15);
  stand2 = new ground(700, 250, 150, 15);

  //level 4
  ablock1 = new Box(320, 430, 25, 25);
  ablock2 = new Box(345, 430, 25, 25);
  ablock3 = new Box(370, 430, 25, 25);
  ablock4 = new Box(395, 430, 25, 25);
  ablock5 = new Box(420, 430, 25, 25);
  ablock6 = new Box(445, 430, 25, 25);
  ablock7 = new Box(470, 430, 25, 25);
  //level 3
  ablock8 = new Box(345, 405, 25, 25);
  ablock9 = new Box(370, 405, 25, 25);
  ablock10 = new Box(395, 405, 25, 25);
  ablock11 = new Box(420, 405, 25, 25);
  ablock12 = new Box(445, 405, 25, 25);
  //level 2
  ablock13 = new Box(370, 380, 25, 25);
  ablock14 = new Box(395, 380, 25, 25);
  ablock15 = new Box(420, 380, 25, 25);
  //level 1
  ablock16 = new Box(395, 355, 25, 25);

  //second stack
  //level 3
  bblock1 = new Box(650, 230, 25, 25);
  bblock2 = new Box(675, 230, 25, 25);
  bblock3 = new Box(700, 230, 25, 25);
  bblock4 = new Box(725, 230, 25, 25);
  bblock5 = new Box(750, 230, 25, 25);
  //level 2
  bblock6 = new Box(675, 205, 25, 25);
  bblock7 = new Box(700, 205, 25, 25);
  bblock8 = new Box(725, 205, 25, 25);
  //level 1
  bblock9 = new Box(700, 180, 25, 25);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  slingShotObject = new slingShot(this.polygon, {x:100, y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text("SCORE : "+score,750,40);
  //noStroke();

  ablock1.score();
  ablock2.score();
  ablock3.score();
  ablock4.score();
  ablock5.score();
  ablock6.score();
  ablock7.score();
  ablock8.score();
  ablock9.score();
  ablock10.score();
  ablock11.score();
  ablock12.score();
  ablock13.score();
  ablock14.score();
  ablock15.score();
  ablock16.score();

  bblock1.score();
  bblock2.score();
  bblock3.score();
  bblock4.score();
  bblock5.score();
  bblock6.score();
  bblock7.score();
  bblock8.score();

  groundObject.display();
  stand1.display();
  stand2.display();

  fill(135,206,250);
  ablock1.display();
  ablock2.display();
  ablock3.display();
  ablock4.display();
  ablock5.display();
  ablock6.display();
  ablock7.display();

  fill("pink");
  ablock8.display();
  ablock9.display();
  ablock10.display();
  ablock11.display();
  ablock12.display();

  fill(135,206,250);
  ablock13.display();
  ablock14.display();
  ablock15.display();

  fill("pink");
  ablock16.display();

  fill(135,206,250);
  bblock1.display();
  bblock2.display();
  bblock3.display();
  bblock4.display();
  bblock5.display();

  fill("pink");
  bblock6.display();
  bblock7.display();
  bblock8.display();

  fill(135,206,250);
  bblock9.display();
  
  imageMode(CENTER);
  image(polygonImage, polygon.position.x, polygon.position.y, 25, 25);
  
  stroke(0, 255, 0);
  slingShotObject.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShotObject.fly();
}

function keyPressed(){
  if (keyCode === 32){
      Matter.Body.setPosition(polygon.body,{x: 235, y: 420});
      slingShotObject.attach(polygon.body);
  }
}

/*
async function giveTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();
  //var datetime = referenceJSON.datetime;
  //var hour = datetime.slice(11,13);
  console.log(responseJSON);
}

var a;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
  //camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a = height;
  circles.push(width/2);
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a = a-1;
 //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
}
*/ 