const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

function setup(){
    var canvas = createCanvas(1200,900);
    engine=Engine.create();
    world=engine.world;

    

    ground=new Ground(600,700,1200,10);
}

function display(){
    background("blue");
    Engine.update(engine);

    ground.display();
}
