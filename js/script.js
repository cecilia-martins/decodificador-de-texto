//textarea
const decodificadorInput = document.querySelector(".main__decodificador-input");
//botão criptografar
const btnCriptografar = document.querySelector(".decodificador__botao--criptografar"
);
//botão descriptografar
const btnDescriptografar = document.querySelector(".decodificador__botao--descriptografar");

// container com img que vai aparecer quando NÃO houver texto/mensagem
const containerSemMensagem = document.querySelector(".texto-decodificado__sem-texto");

// container todo que vai aparecer quando houver texto/mensagem
const containerComMensagem = document.querySelector(".texto-decodificado__com-texto");
//parágrafo onde vai aparecer o texto
const paragrafoComMensagem = document.querySelector(".texto-decodificado__mensagem");
//botão de copiar
const btnCopiarMensagem = document.querySelector(".texto-decodificado__botao");

const codificarTexto = (textoEncriptado) => {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  textoEncriptado = textoEncriptado.toLowerCase();

  for (let index = 0; index < matrizCodigo.length; index++) {
    if (textoEncriptado.includes(matrizCodigo[index][0])) {
      textoEncriptado = textoEncriptado.replaceAll(
        matrizCodigo[index][0],
        matrizCodigo[index][1]
      );
    }
  }
  return textoEncriptado;
};

const descodificarTexto = (textoDescriptografado) => {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  textoDescriptografado = textoDescriptografado.toLowerCase();

  for (let index = 0; index < matrizCodigo.length; index++) {
    if (textoDescriptografado.includes(matrizCodigo[index][1])) {
      textoDescriptografado = textoDescriptografado.replaceAll(
        matrizCodigo[index][1],
        matrizCodigo[index][0]
      );
    }
  }
  return textoDescriptografado;
};

//ativar botão descriptografar
const ativarBtnDescriptografar = () => {
  if (paragrafoComMensagem.innerHTML != "") {
    btnDescriptografar.removeAttribute("disabled");
  }
}

// remover container com imagem 
const removerContainer = () => {
  if (paragrafoComMensagem.innerHTML.trim() !== "") {
    containerSemMensagem.style = "display: none";
    containerComMensagem.style = "display: flex";
  }
}

const exibirBtnCopiar = () => {
  if (paragrafoComMensagem.innerHTML.trim() !== "") {  // Se houver texto no parágrafo
    btnCopiarMensagem.style.display = "block";         // Exibe o botão
  } else {
    btnCopiarMensagem.style.display = "none";          // Esconde o botão
  }
};

// Botão encriptografar
const criptografarTexto = () => {
  paragrafoComMensagem.innerHTML = codificarTexto(decodificadorInput.value);
  ativarBtnDescriptografar();
  removerContainer();
  exibirBtnCopiar();
};
btnCriptografar.addEventListener("click", criptografarTexto);

// descriptografar
const descriptografarTexto = () => {
  paragrafoComMensagem.innerHTML = descodificarTexto(paragrafoComMensagem.innerHTML);
}
btnDescriptografar.addEventListener("click", descriptografarTexto);


