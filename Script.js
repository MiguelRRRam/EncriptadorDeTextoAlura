const textArea = document.querySelector(".textoColocado");
const mensaje = document.querySelector(".textoResultado");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e,", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
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
    let matrizCodigo = [["enter,", ""], ["ines", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
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