const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(600,300,7);
    rubber2 = new Rubber(607,300,7);
    rubber3 = new Rubber(614,300,7);
    rubber4 = new Rubber(628,300,7);
    rubber5 = new Rubber(635,300,7);
    rubber6 = new Rubber(642,300,7);
    rubber7 = new Rubber(649,300,7);
    stone1 = new Stone(600,300,70,70);
    stone2 = new Stone(550,300,140,70);
    iron = new Iron(500,300,70,140);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    iron.display();
    stone1.display();
    stone2.display();


    
 
}