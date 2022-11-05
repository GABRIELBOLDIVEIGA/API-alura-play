import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApi.buscaVideos(dadosDePesquisa);

  const lista = document.querySelector('[data-lista]')
  
  // este loop remove o primeiro filho da ul enquanto existir um filho detro dela
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild) ;
  }
  // lista.innerHTML = '';
  // apaga a ul inteira de uma so vez...

  busca.forEach(element => {lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem))});

  console.table(busca);
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", (evento) => buscarVideo(evento));
