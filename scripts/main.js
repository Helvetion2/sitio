const myHeading = document.querySelector('h1');
myHeading.textContent = 'TE GUSTAN LAS ACEITUNAS??';

document.querySelector('img').onclick = function() {

let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/sipp.png') {
    alert('Sos un tipazo');
}else {
      alert('zarpdado mogolico');
    }
}


