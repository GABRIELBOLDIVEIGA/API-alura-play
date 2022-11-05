async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  // console.log(conexao)
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  });

  if (!conexao.ok) {
    throw new Error("Não foi possive enviar o video");
  }

  const conexaoConvertida = conexao.json();

  return conexaoConvertida;
}

async function buscaVideos(termoDeBusca) {
  // ?q= busca por qlqr palavra/caractere similar | msm que esse caractere seja o id do elemento ou este caractere esteja presente na url
  // https://github.com/typicode/json-server
  const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
  const conexaoConvertida = conexao.json();

  return conexaoConvertida;
}

export const conectaApi = {
  listaVideos,
  criaVideo,
  buscaVideos,
};
