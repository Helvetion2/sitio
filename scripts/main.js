const myHeading = document.querySelector('h1');
myHeading.textContent = 'TE GUSTAN LAS ACEITUNAS??';

let miImage = document.querySelector('img');
miImage.onclick = function () {
let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/sipp.png') {
    alert('dios te bendiga, sos una buena preona');
}else {
      alert('zarpdado mogolico');
    }
}

{
let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/NO.jpg') {
    alert('zarpado mogolik');
}else {
      alert('zarpdado mogolico');
    }
}

