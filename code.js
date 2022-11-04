'use strict';

const contenedor = document.querySelector('body');
const imagenesCards = document.querySelectorAll('.card__img');

imagenesCards.forEach( imagen => {
  
  imagen.addEventListener('click', () => {
    
    // Creamos el mostrador
    const mostrador = document.createElement('div');
    mostrador.setAttribute('class', 'mostrador-contenedor');
    
    // Creamos la imagen del mostrador
    const mostradorImagen = document.createElement('img');
    mostradorImagen.setAttribute('class', 'mostrador__img');
    mostradorImagen.setAttribute('src', imagen.src);
    
    // Creamos el icono del mostrador
    const mostradorIcon = document.createElement('div');
    mostradorIcon.setAttribute('class', 'mostrador__iconX');
    mostradorIcon.innerText = 'X';
    
    mostrador.append(mostradorImagen, mostradorIcon);
    contenedor.appendChild(mostrador);
    
    // Cuando le hagan click a la 'X'
    mostradorIcon.addEventListener('click', () => {
      mostrador.classList.add('close');
      
      setTimeout( () => {
        mostrador.classList.remove('close');
        contenedor.removeChild(mostrador);
      }, 1000 );      
    });
    
    // Cuando hagan click fuera de la imagen del mostrador

    mostrador.addEventListener('click', evento => {
      
      let posicionMouseX = evento.clientX;
      let posicionMouseY = evento.clientY;
      
      let posicionMinImagenX = mostradorImagen.getBoundingClientRect().x;
      let posicionMaxImagenX = mostradorImagen.getBoundingClientRect().x + mostradorImagen.getBoundingClientRect().width;
      let posicionMinImagenY = mostradorImagen.getBoundingClientRect().y;
      let posicionMaxImagenY = mostradorImagen.getBoundingClientRect().y + mostradorImagen.getBoundingClientRect().height;
      
      if (posicionMouseX <= posicionMinImagenX || posicionMouseX >= posicionMaxImagenX  || posicionMouseY <= posicionMinImagenY  || posicionMouseY >= posicionMaxImagenY ){
        mostrador.classList.add('close');


        
        setTimeout( () => {
          mostrador.classList.remove('close');
          contenedor.removeChild(mostrador);
        }, 1000 );
      }
      
    });
    
  });
  
} );