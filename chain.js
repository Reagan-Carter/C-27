class chain{

constructor(BodyA,BodyB){
    var options={
        bodyA:BodyA,
        bodyB:BodyB,
        length:15,
        stiffness:0.04
        }

    this.chain=Constraint.create(options)
World.add(MyWorld,this.chain);
}

display(){
    strokeWeight(3)
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y, this.chain.bodyB.position.x,this.chain.bodyB.position.y); 
}

}