const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, backgroundImg;
var bg, snowImg, snow;
var snowflakes = [];

function preload(){
  getBackgroundImg();
 // snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  if(frameCount%60===0){
    for(i = 0; i< 1000; i++)
    {
      snowflakes.push(new Snow(random(0,800),random(0,40),20,20));    
    }
  }
  
 // snow = addImage(snowImg);
}

function draw() {
  if(backgroundImg)
    background(backgroundImg);

  //background("black");  
  
  Engine.update(engine);
  ground.display();
  for(i = 0;i<100;i++)
  {
    snowflakes[i].display();
  }
}

async function getBackgroundImg(){

 var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
 var responseJson  = await response.json(); //java script object rotation
 var datetime = responseJson.datetime;
 var hour = datetime.slice(11,13);
 console.log(responseJson);
 console.log(hour);
 if(hour>=06 && hour<=19){
     bg = "snow2.jpg";
 }
 
 if(hour>=20 && hour<=05){
  bg = "snow3.jpg";
}
backgroundImg = loadImage(bg);
}