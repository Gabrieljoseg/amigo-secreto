
let amigos = [];

// Adiciona um novo amigo à lista
function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  // Validação: campo vazio
  if (nome === "") {
    alert("Por favor, insira um nome válido!");
    return;
  }

  // Impede nomes duplicados
  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado!");
    return;
  }

  amigos.push(nome);
  input.value = "";
  mostrarLista();
}

// Atualiza a lista de amigos exibida na tela
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

// Sorteia aleatoriamente um amigo da lista
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia. Adicione pelo menos um nome.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let sorteado = amigos[indice];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "🎉 O amigo secreto é: " + sorteado;
}