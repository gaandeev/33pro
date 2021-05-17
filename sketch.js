  var Engine = Matter.Engine,
     World = Matter.World,
     Events = Matter.Events,
     Bodies = Matter.Bodies;
  

  var particles = [];
  var bgImg;
  var snowImg1;

  function preload() {
  bgImg = loadImage("snow1.jpg");
  snowImg1 = loadImage("snow4.webp");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snow1 = new Particle(200,200,20,20);


  
 
}


function draw() {
  background(bgImg);  
  Engine.update(engine);
  

  if (frameCount %10 === 0) {
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  
  

}

