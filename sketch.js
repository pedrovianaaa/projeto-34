const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1;
var block2;
var block3;


function setup() {
  createCanvas(1500, 700);

  engine = Engine.create();
  world = engine.world;
  
  //O plano
  var plane_options = {
    isStatic: true,
  };

  plane = Bodies.rectangle(600, 580, 1200, 2, plane_options);
  World.add(world, plane);

  //Os corpos
  var block1_options = {
    restitution: 0.5,
    friction: 0.02,
    frictionAir: 0,
  };

  block1 = Bodies.circle(250, 10, 10, block1_options);
  World.add(world, block1);

  var block2_options = {
    restitution: 0.7,
    friction: 0.01,
    frictionAir: 0.1,
  };


  block2 = Bodies.rectangle(450, 50, 10, 10, block2_options);
  World.add(world, block2);

  var block3_options = {
    restitution: 0.01,
    friction: 1,
    frictionAir: 0.3,
  };


  block3 = Bodies.rectangle(800, 50, 10, 10, block3_options);
  World.add(world, block3);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  rect(plane.position.x, plane.position.y, 1200);

  ellipse(block1.position.x, block1.position.y, 300);
  rect(block2.position.x, block2.position.y, 210, 210);
  rect(block3.position.x, block3.position.y, 350, 175);
}

