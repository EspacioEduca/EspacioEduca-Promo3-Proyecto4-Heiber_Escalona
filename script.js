/* Problema 1:Cuando se presione el botón "Saltar", Mario debe subir 
hasta donde esta la moneda, y esta debe desaparecer */

function saltar() {
  
  const mario = document.getElementById('miGif');
  
  const moneda = document.querySelector('.moneda');

  
  mario.style.transform = 'translateY(-107px)';
  mario.style.transition = 'transform 0.5s';


  setTimeout(() => {
    moneda.style.display = 'none';
  }, 1000);

  var audioElement = document.getElementById("salto");
  audioElement.play();
}


/*Problema 2 : Cuando se presione de nuevo el boton "Bajar" Mario baja al nivel del suelo de nuevo */

const botonBajar = document.getElementById('botonBajar');
const mario = document.getElementById('miGif'); 


botonBajar.addEventListener('click', function() {

  
  mario.style.transform = 'translateY(1px)'; 
  mario.style.transition = 'transform 0.5s'; 

});



// 3: Cuando el botón "Cambiar el color" es presionado, el color de fondo cambia

function changeColor(){

document.body.style.backgroundColor=
'rgb('+ Math.round(Math.random() * 255) +
',' +  Math.round(Math.random() * 255) +
',' + Math.round(Math.random() * 255) + ')';

}


// 4: Cuando el botón "Finalizar juego" es presionado, el título de la página dice "Game over"

function xd() {
  
  document.getElementById("miH1").innerHTML = "game over";


var audioElement = document.getElementById("miAudio");
audioElement.play();
}

// 5: Cuando el botón "Actualizar Puntaje" es presionado, el contador de puntuación se establece en "1" en lugar de 0

function changeText(){

document.getElementById("myId").innerHTML = "Puntaje: 1";

var audioElement = document.getElementById("monedita");
audioElement.play();

}

// 6: Cuando el botón "Crecer" es presionado, la imagen de Mario se debe hacer más grande.

const gif = document.getElementById('miGif');
        const boton = document.getElementById('miBoton');

        
        function cambiarTamaño() {
            const nuevaAltura = gif.height * 1.5; 
            gif.style.height = nuevaAltura + 'px';
        
            var audioElement = document.getElementById("crecidito");
            audioElement.play();
          }


        boton.addEventListener('click', cambiarTamaño);


//7: Ya el boton de mover a la derecha esta hecho. Haz ahora uno para que se mueva a la izquierda.
let botonDerecha = document.querySelector(".derecha");

botonDerecha.onclick = function () {
  let posicionActual = parseInt(mario.style.left) || 75; 
  const cantidadPixelesPorPaso = 10; 
  const limiteDerecha = 700; 

  
  let nuevaPosicion = posicionActual + cantidadPixelesPorPaso;
  if (nuevaPosicion <= limiteDerecha) {
    console.log("hola")
    mario.style.left = nuevaPosicion + "px"; 
  }
};

// Haz aqui el boton de mover a la izquierda
let botonIzquierda = document.querySelector(".izquierda");
botonIzquierda.onclick = function () {
  let posicionActual = parseInt(mario.style.left) || 75; 
  const cantidadPixelesPorPaso = 10; 
  const limiteIzquierda = 0; 

  // Lógica para mover a la izquierda
  if (posicionActual > limiteIzquierda) {
    const nuevaPosicion = posicionActual - cantidadPixelesPorPaso;
    mario.style.left = `${nuevaPosicion}px`;
  }
};

