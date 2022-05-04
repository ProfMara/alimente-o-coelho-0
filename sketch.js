const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

//declarando as variáveis para fruta, corda, conexão e solo:
var solo, fruta, con, corda;

function setup() {
    createCanvas(500, 700);
    frameRate(80);
    engine = Engine.create();
    world = engine.world;

    solo = new Ground(200, 680, 600, 40);


    bola = Bodies.circle(50,200,20);
    World.add(world, bola);


    slingshot  = new Slingshot(this.bola, {x:100, y:100} )

    rectMode(CENTER);
    ellipseMode(RADIUS);
    textSize(50)
}

function draw() {
    background("cyan");

    //mostrar o solo
    solo.show();

    ellipse(bola.position.x, bola.position.y, 20);

    slingshot.display();


    Engine.update(engine);
}

function mouseDragged(){
    Body.setPosition(this.bola, {x: mouseX, y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}