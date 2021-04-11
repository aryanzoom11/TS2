class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.image=loadImage("block.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

fly(){
    console.log("helga")
this.sling.bodyA=null
}
attach(body){
this.sling.bodyA=body
}
    display(){
      
        if(this.sling.bodyA!=null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
          
                stroke("red")
                strokeWeight(3)
                line(pointA.x , pointA.y, pointB.x , pointB.y);   
        }
            
          
               
            
           
            
          
        }
    }
    
