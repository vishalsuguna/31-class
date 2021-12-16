class Boat {

  constructor(x, y, width, height,boatPos) {
    var options = {
     restitution:0.8
    };
    this.width = width;
    this.height = height;
    this.Boatposition=boatPos;
    this.image =loadImage("assets/boat.png")
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
  imageMode(CENTER)
    image(this.image,0,this.Boatposition)
    pop();
  }
}
