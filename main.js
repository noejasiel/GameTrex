var canvas = document.getElementById("canvas");
var cont_canvas = canvas.getContext("2d");

// mi pantalla de perder
var gameOver = document.getElementById("retry");

// mi btn de retry
var retry = document.getElementById("btn_retry");
retry.addEventListener("click", function () {
  location.reload();
});

var dino_src = "./assets/trex.png";
var cactus_src = "./assets/obstacle_alone.png";
var piso_src = "./assets/piso.png";
var cactus2_src = "./assets/obstacle-cactus-large.png";
var dino_down_src = "./assets/dino_down_good.png";
var cloud_src = "./assets/2cloud.png";
var sol_src = "./assets/solB.png";
var sol_src2 = "./assets/luna.png";
var pajaro_src = "./assets/pajaro.png";

// objetos

var pajaros = {
  movX: 790,
};

var nube_mov = {
  movX1: 400,
  movX2: 700,
  movX3: 100,
};
var cactus_mov = {
  y: 260,
  x: 270,
  movX: 2,
};

var cactus_mov2 = {
  y: 260,
  x: 691,
  movX: 2,
};
var trex = {
  x: 100,
  y: 239,
  saltando: false,
};

var pajaro = new Image();
pajaro.src = pajaro_src;
pajaro.addEventListener("load", dibujarPajaro);

function dibujarPajaro() {
  cont_canvas.drawImage(pajaro, pajaros.movX, 200);
}
function movPajaro() {
  if (pajaros.movX < -100) {
    pajaros.movX = 790;
  }
  pajaros.movX -= 4.5;
}

var sol2 = new Image();
sol2.src = sol_src2;
sol2.addEventListener("load", dibujarSol);

var sol_mov = 600;
var sol = new Image();
sol.src = sol_src;
sol.addEventListener("load", dibujarSol);

function dibujarSol() {
  if (sol_mov < 300) {
    canvas.style.background = "#020E30";
    cont_canvas.drawImage(sol2, sol_mov, 50);
  } else {
    // canvas.style.background = "#0000";
    canvas.style.background = "#020E30";
    cont_canvas.drawImage(sol, sol_mov, 50);
  }
}
function movSol() {
  if (sol_mov < -20) {
    sol_mov = 700;
  }
  sol_mov -= 0.5;
}

var nube = new Image();
nube.src = cloud_src;
nube.addEventListener("load", dibujarNube);

function dibujarNube() {
  cont_canvas.drawImage(nube, nube_mov.movX1, 107, 64, 23);
  cont_canvas.drawImage(nube, nube_mov.movX2, 105);
  cont_canvas.drawImage(nube, nube_mov.movX3, 110, 105, 33);
}
function movNube() {
  if (nube_mov.movX3 < -90) {
    nube_mov.movX3 = 730;
  }
  if (nube_mov.movX2 < -90) {
    nube_mov.movX2 = 730;
  }
  if (nube_mov.movX1 < -90) {
    nube_mov.movX1 = 730;
  }
  nube_mov.movX3 -= 1;
  nube_mov.movX2 -= 1.15;
  nube_mov.movX1 -= 1.24;
}

var cactus = new Image();
cactus.src = cactus_src;
cactus.style.margin = "4px 4px";
cactus.addEventListener("load", dibujarCactus);

var cactus2 = new Image();
cactus2.src = cactus2_src;
cactus2.addEventListener("load", dibujarCactus2);

var piso = new Image();
piso.src = piso_src;

var Dino = new Image();
Dino.src = dino_src;

var Dino_down = new Image();
Dino_down.src = dino_down_src;
Dino_down.addEventListener("load", dibujarDino);

function dibujarCactus2() {
  cont_canvas.drawImage(cactus2, cactus_mov2.x, cactus_mov2.y, 20, 25);
}

function dibujarCactus() {
  cont_canvas.drawImage(cactus, cactus_mov.x, cactus_mov.y, 20, 25);
}

function movCactus() {
  cactus_mov.x -= cactus_mov.movX;
  if (cactus_mov.x <= -128) {
    cactus_mov.x = 721;
  }
  cont_canvas.fillStyle = "#ff2626"; // Color rojo

  cont_canvas.beginPath(); // Iniciar trazo
  cont_canvas.arc(trex.x + 50, trex.y + 30, 1, 0, Math.PI * 2, true); // Dibujar un punto usando la funcion arc
  cont_canvas.arc(cactus_mov.x, cactus_mov.y + 10, 1, 0, Math.PI * 2, true);
  cont_canvas.fill();
}
function Colision() {
  if (cactus_mov.x < 160 && cactus_mov.x > 140) {
    console.log(
      trex.x + 50,
      // trex.y + 31,
      cactus_mov.x,
      // cactus_mov.y + 10,
      "velocidad" + cactus_mov.movX
    );
  }

  // es la parte donde hace colion el dino con el cactus
  // vel 2  y 6
  if (
    cactus_mov.y + 10 == trex.y + 31 &&
    cactus_mov.x < 153 &&
    cactus_mov.x > 150
  ) {
    colision_canvas = true;
    console.log("colision");
  }
  // vel 4
  else if (
    cactus_mov.y + 10 == trex.y + 31 &&
    cactus_mov.x < 155 &&
    cactus_mov.x > 150 &&
    cactus_mov.movX === 4
  ) {
    colision_canvas = true;
    console.log("colision 4");
  }

  // vel 8
  else if (
    cactus_mov.y + 10 == trex.y + 31 &&
    cactus_mov.x < 154 &&
    cactus_mov.x > 152 &&
    cactus_mov.movX === 8
  ) {
    colision_canvas = true;
    console.log("colison 8");
  }
}

function movCactus2() {
  cactus_mov2.x -= cactus_mov2.movX;
  if (cactus_mov2.x <= -128) {
    cactus_mov2.x = 720;
  }
}

function dibujarDino() {
  if (dino_Abajo === true) {
    cont_canvas.drawImage(Dino_down, trex.x, trex.y, 45, 45);
  } else {
    cont_canvas.drawImage(Dino, trex.x, trex.y, 45, 45);
  }
}
function dibujarPiso() {
  cont_canvas.drawImage(piso, 0, 280, width + 15, 10);
}
document.addEventListener("keyup", function (event) {
  if (event.keyCode == 32 || event.keyCode == 38) {
    saltar();
  }
});
var width = 700;
var heigth = 300;

var score = 0;

var colision_canvas = false;
function borrarCanvas() {
  if (colision_canvas == true) {
    canvas.width = 0;
    canvas.heigth = 0;
    //fin del game
    document.getElementById("canvas").style.display = "none";
    gameOver.style.display = "inherit";
  } else {
    canvas.width = width;
    canvas.heigth = heigth;
    var conten = document.getElementById("conteiner-score");
    conten.innerHTML = `
        <p>score</p>
        <p > ${score}</p>
    `;

    score += 1;
    // console.log(score, "score");
  }
}

function saltar() {
  if (trex.y > 180) {
    trex.saltando = true;
    trex.aux = trex.y;
  }
}
var dino_Abajo = false;

// KeyboardEvent === event
function dinoAbajo(KeyboardEvent) {
  if (event.keyCode && event.keyCode === 40) {
    dino_Abajo = true;
  } else {
    dino_Abajo = false;
  }
}

document.addEventListener("keydown", function (KeyboardEvent) {
  dinoAbajo(KeyboardEvent);
});

function gravedad() {
  if (trex.saltando == true) {
    // console.log(trex.y);
    trex.y -= 5;
    if (trex.y < 180) {
      trex.saltando = false;
    }
  } else {
    trex.y += 5;
    if (trex.y > 239) {
      trex.y = 239;
    }
  }
}
function scoreFun() {
  if (score == 500) {
    // for (let i = 0.0000001; i < 3; i++) {
    //   cactus_mov.movX += i;
    //   cactus_mov2.movX += i;
    // }
    cactus_mov.movX += 2;
    cactus_mov2.movX += 2;
  }
  if (score == 1000) {
    // for (let i = 0.0000001; i < 3; i++) {
    //   cactus_mov.movX += i;
    //   cactus_mov2.movX += i;
    // }
    cactus_mov.movX += 2;
    cactus_mov2.movX += 2;
  }
  if (score == 1800) {
    // para que el cambio de velocidad no sea tan brusco
    // for (let i = 0.0000001; i < 3; i++) {
    //   cactus_mov.movX += i;
    //   cactus_mov2.movX += i;
    // }
    cactus_mov.movX += 2;
    cactus_mov2.movX += 2;
  }
}

//bucle principal
var FPS = 50;

setInterval(function () {
  principal();
  // dibujarDinoDown();
}, 1000 / FPS);

function principal() {
  borrarCanvas();
  dibujarPiso();
  dibujarDino();
  gravedad();
  dibujarCactus();
  dibujarCactus2();
  dibujarNube();
  dibujarSol();
  dibujarPajaro();
  scoreFun();
  movNube();
  movCactus();
  movCactus2();
  movSol();
  movPajaro();
  Colision();
}
