const decodificadorInput = document.querySelector(".main__decodificador-input");
const btnCriptografar = document.querySelector(".decodificador__botao--criptografar");
const btnDescriptografar = document.querySelector(".decodificador__botao--descriptografar");
const containerSemMensagem = document.querySelector(".texto-decodificado__sem-texto");
const containerComMensagem = document.querySelector(".texto-decodificado__com-texto");
const paragrafoComMensagem = document.querySelector(".texto-decodificado__mensagem");
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

// remove container com imagem 
const removerContainer = () => {
  if (paragrafoComMensagem.innerHTML.trim() !== "") {
    containerSemMensagem.style = "display: none";
    containerComMensagem.style = "display: flex";
  }
}

// Exibe botão copiar
const exibirBtnCopiar = () => {
  if (paragrafoComMensagem.innerHTML.trim() !== "") {
    btnCopiarMensagem.style.display = "block";
  } else {
    btnCopiarMensagem.style.display = "none";
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

// Botão descriptografar
const descriptografarTexto = () => {
  paragrafoComMensagem.innerHTML = descodificarTexto(paragrafoComMensagem.innerHTML);
}
btnDescriptografar.addEventListener("click", descriptografarTexto);

// Função para copiar o texto
const copiarTexto = () => {
  const textoParaCopiar = paragrafoComMensagem.innerText; // Pega o texto do parágrafo

  // Usando a Clipboard API
  navigator.clipboard.writeText(textoParaCopiar).then(() => {
    alert("Texto copiado com sucesso!"); // Exibe um alerta de confirmação
  }).catch((err) => {
    console.error("Falha ao copiar o texto: ", err); // Mostra um erro no caso de falha
  });
};
btnCopiarMensagem.addEventListener("click", copiarTexto);
