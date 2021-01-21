class Dustbin {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.DustbinWidth=200;
      this.DustbinHeight=230;
      this.thickness=20;
      this.leftWall = Bodies.rectangle(this.x-this.DustbinWidth/2, this.y, this.thickness,this.DustbinHeight );
      this.rightWall = Bodies.rectangle(this.x+this.DustbinWidth/2, this.y, this.thickness,this.DustbinHeight);
      this.bottomWall = Bodies.rectangle(x, y, width, height,);
      
      
      World.add(world, this.leftWall);
      World.add(world, this.rightWall);
      World.add(world, this.bottomWall);
    }
    display(){
      var posLeft =this.leftWall.position;
      var posRight =this.rightWall.position;
      var posBottom =this.bottomWall.position;
    
      push();
      translate(posLeft.x, posLeft.y);
      //rotate(angle);
      rectMode(CENTER);
     // strokeWeight(8)
      //stroke("yellow")
      fill("red");
      rect(0,0,this.thickness,this.DustbinHeight)
     
      pop();

      push();
      translate(posRight.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
     // strokeWeight(8)
      //stroke("yellow")
      fill("red");
      rect(0,0,this.thickness,this.DustbinHeight)

      pop();

      push();
      translate(posBottom.x, posBottom.y);
      //rotate(angle);
      rectMode(CENTER);
     // strokeWeight(8)
      //stroke("yellow")
      fill("red");
      rect(0,0,this.DustbinWidth,this.thickness)
      pop();
    }
  };
  