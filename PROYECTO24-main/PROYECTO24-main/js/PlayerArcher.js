class PlayerArcher {
  constructor(x, y, width, height) {
    const options = {
      isStatic: true
    };

    //creacion de cuerpos
    this.body = Matter.Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.collapse = false;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);

    Matter.Body.setAngle(this.body, -90);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    console.log(angle)

    // hacer que el arquero pueda apuntar flecha hacia arriba y hacia abajo
    if (keyIsDown(DOWN_ARROW) && angle < -73 ) {
      angle += 1;
      Matter.Body.setAngle(this.body, angle);
    }

// QUITA EL COMENTARIO  (//) DE LA OPCION CORRECTA PARA MOVER EL ARQUERO HACIA ARRIBA

  if (keyIsDown(UP_ARROW) && angle > -103) {
    angle -=1;
     Matter.Body.setAngle(this.body, angle);
     }

    // if (keyIsDown(UPARROW) && angle > -103) {
    //   angle -=1;
    //   Matter.Body.setAngle(this.body, angle);
    // }

    // if (keyIsDown(ARROW) && angle > -103) {
    //   angle -=1;
    //   Matter.Body.setAngle(this.body, angle);
    // }

    // if (keyIsDown(UP_ARROW) && angle > -103) {
    //   angle -=1;
    //   Matter.Body.set(this.body, angle);
    // }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}



