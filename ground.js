


class Ground{

    constructor( x, y,width,height     ) {

       var box_options={

    
      isStatic:true


       }


        this.body = Bodies.rectangle(x, y, width, height,box_options);
        World.add(world, this.body);
        this.width=width;
        this.height=height;

    }

    //functions
;
    display() {
        fill("red")
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.width,this.height);

    }
}