const textArea = document.querySelector(".textoColocado");
const mensaje = document.querySelector(".textoResultado");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado;

    for(let i = 0 ; i < matrizCodigo.length; i ++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        };
    };
    return stringEncriptado;
};

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
};

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["enter", "e"], ["ines", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptado = stringDesencriptado;

    for(let i = 0 ; i < matrizCodigo.length; i ++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    };
    return stringDesencriptado;
};

//esta funcion copia el texto encriptado o desencriptado
const textoAcopiar = mensaje
function copiarTexto() {
    textoAcopiar.select(); 
    document.execCommand("copy");
 };

 if ('webkitSpeechRecognition' in window) {
    const reconocimiento = new webkitSpeechRecognition();
    reconocimiento.continuous = true;
    reconocimiento.interimResults = true;
    reconocimiento.lang = 'es-ES';
  
    let frasesReconocidas = [];
  
    reconocimiento.onresult = function(event) {
        let texto = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          texto += event.results[i][0].transcript;
        }
        const textoNormalizado = texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      
        if (!frasesReconocidas.includes(textoNormalizado)) {
          textArea.value = '';
          textArea.value = textoNormalizado;
          frasesReconocidas.push(textoNormalizado);
        }
      };
      
  
    document.getElementById('btn-escuchar').addEventListener('click', function() {
      reconocimiento.start();
    });
    
    document.getElementById('btn-stopEscuchar').addEventListener('click', function(){
      reconocimiento.stop();
    });
  };

    