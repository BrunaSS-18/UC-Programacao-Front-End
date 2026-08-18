const balao = document.querySelector("p");

let tamanhoAtual = 30;
balao.style.fontSize = tamanhoAtual + "px";

function controlarBalao(event) {
  if (event.key === "ArrowUp") {
    event.preventDefault(); 
    tamanhoAtual = tamanhoAtual * 1.1;

    if (tamanhoAtual > 300) {
      balao.textContent = "💥";
      window.removeEventListener("keydown", controlarBalao);
      return;
    }

    balao.style.fontSize = tamanhoAtual + "px";
  } 
  
  else if (event.key === "ArrowDown") {
    event.preventDefault();
    tamanhoAtual = tamanhoAtual * 0.9;
    balao.style.fontSize = tamanhoAtual + "px";
  }
}

window.addEventListener("keydown", controlarBalao);