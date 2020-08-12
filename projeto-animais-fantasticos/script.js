const imagens = document.getElementsByTagName('img');
console.log(imagens);

const imagens2 = document.querySelectorAll('img');

console.log(imagens2);

const imagem = document.querySelectorAll('[src^="imagem"]');
console.log(imagem);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[24]);
