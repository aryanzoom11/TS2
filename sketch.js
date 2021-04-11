const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
var engine, world;


function setup(){  
    var canvas = createCanvas(800,600);
    engine = Engine.create();  
    world = engine.world;
    ground1=new Ground(350,400,300,20)

    box1= new Box(250,340,50,50)
    box2= new Box(300,340,50,50)
    box3= new Box(350,340,50,50)
    box4= new Box(400,340,50,50)
    box5= new Box(270,280,50,50)
    box6= new Box(320,280,50,50)
    box7= new Box(370,280,50,50)
    box8= new Box(320,250,50,50)
    box9= new Box(340,250,50,50)
    box10= new Box(310,200,50,50)
    

    ball=Bodies.circle(50,200,20)
    //box1= new Box(100,100,50,50)
    //box1= new Box(100,100,50,50)
    sling1= new SlingShot(this.ball,{x:200,y:200})
}

function draw(){
    
    background(0)
    Engine.update(engine);
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
  sling1.display();
   ground1.display();
   ellipseMode(CENTER)
    ellipse(ball.position.x,ball.position.y,20,20)
}
    function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
    }
    
function mouseReleased(){
    console.log("aryan")
    sling1.fly();
    
}
function keyPressed(){
if(keyCode===32){
sling1.attach(ball.body)
}
}