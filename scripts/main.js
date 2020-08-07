const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/giphy.gif') {
      miImage.setAttribute('src','images/firefox2.png');
    } else {
      miImage.setAttribute('src', 'images/giphy.gif');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
