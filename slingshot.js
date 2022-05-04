class Slingshot{
    constructor(bodyA, pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:100
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling)
    }
    display(){

        if(this.sling.bodyA){


            var pontoA = this.sling.bodyA.position;
            var pontoB = this.pointB;

            stroke("red");
            strokeWeight(4)
            line(pontoA.x, pontoA.y, pontoB.x, pontoB.y);
        }

    }

    fly(){
        this.sling.bodyA = null;
    }
}