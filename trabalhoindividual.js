let selecionar = document.querySelector('.select');
let chaveCifra = document.getElementById('chaveCont');
let radioBtn = document.querySelector('.radiobtn');
let codificar = document.getElementById('codificar');
let decodificar = document.getElementById('decodificar');
let resultBtn = document.getElementById('resultbtn');
let texto = document.getElementById('texto');
let resultado = document.getElementById('resultado');


// Somente se Cifra de César for escolhido, aparecerá a chave.
function selecao() {
    selecionar.addEventListener("click", function () {
        if (selecionar.value === "cifra") {
            chaveCifra.style.display = "block";
        } else {
            chaveCifra.style.display = "none";
        }
    });
}

// Radio Button e botão de resultado!
radioBtn.addEventListener("click", function () {
    if (codificar.checked) {
        resultBtn.innerHTML = "Codificar Mensagem!";
    } else if (decodificar.checked) {
        resultBtn.innerText = "Decodificar Mensagem!";
    }
});

// Base64 criptography
function base64() {
    let texto = document.getElementById('texto').value;

    if (codificar.checked) {
        let encodeBase64 = btoa(texto)
        return encodeBase64;
    } else if (decodificar.checked) {
        let decodeBase64 = atob(texto)
        return decodeBase64;
    }   
}

// Cifra de César criptography
function cifraDeCesar() {
    let texto = document.querySelector('#texto').value;
    let chave = parseInt(document.querySelector('#rangenumber').value);
    let saida = '';
  
    if (codificar.checked) {
      for (let i = 0; i < texto.length; i++) {
        if (texto[i] === texto[i].toUpperCase()) {
          saida += String.fromCharCode((texto.charCodeAt(i) + chave - 65) % 26 + 65); 
        } else {
          saida += String.fromCharCode((texto.charCodeAt(i) + chave - 97) % 26 + 97);
        }
      }
      return saida;
  
    } else if (decodificar.checked) {
      for (let i = 0; i < texto.length; i++) {
        if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) {
          saida += String.fromCharCode((texto.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
        } else if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
          saida += String.fromCharCode((texto.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
        } else {
          saida += String.fromCharCode(texto.charCodeAt(i));
        }
      }
      return saida;
    }
  }

// Mostrando o resultado
resultBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (selecionar.value == "cifra") {
        resultado.value = cifraDeCesar();
    } else if (selecionar.value == 'base64') {
        resultado.value = base64();
    }
});

// Modal Base64

function abreInfo(infoID) {
  const info = document.getElementById(infoID);
  if (info) {
    info.classList.add('popup');
    info.addEventListener('click', (e) => {
      if (e.target.id == infoID || e.target.className == 'fechar') {
        info.classList.remove('popup');
      }
    });
  }
}

const tagBase64 = document.querySelector('.tag64');
tagBase64.addEventListener('click', () => abreInfo('infoContainer'));

// Modal Cifra de Cesar

function abreCesar(cesarID) {
  const cesar = document.getElementById(cesarID);
  if (cesar) {
    cesar.classList.add('popup');
    cesar.addEventListener('click', (e) => {
      if (e.target.id == infoID || e.target.className == 'fechar') {
        info.classList.remove('popup');
      }
    });
  }
}

const tagCifra = document.querySelector('.tagcifra');
tagCifra.addEventListener('click', () => abreInfo('cesarContainer'));
