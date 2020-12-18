class Bob {
    constructor(x,y,r){
        var options = {
            restitutuion:0.5, 
            isStatic:false,
            friction: 0,
            desity: 0.8
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        noStroke();
        fill(200);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}