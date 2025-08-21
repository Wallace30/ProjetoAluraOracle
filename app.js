let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  amigos.push(nome);
  atualizarLista();

  input.value = "";
  input.focus();
}

function atualizarLista() {
  const lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos 1 amigo para sorteio");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

 const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;

  amigos = [];
  document.querySelector("#listaAmigos").innerHTML = "";
}
