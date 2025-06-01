const cardsContainer = document.querySelector('.cards');
let scrollAmount = 0;
const scrollStep = 620; // Largura do card + gap
const interval = 3000; // Tempo entre os slides (3 segundos)

function autoScrollCards() {
  const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
  if (scrollAmount >= maxScroll) {
    scrollAmount = 0; // Volta para o início
  } else {
    scrollAmount += scrollStep;
  }

  cardsContainer.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

setInterval(autoScrollCards, interval);

// Exemplo simples de rolagem suave
document.querySelector('.botao').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
});

function trocarImagem(botao, nomeImagem) {
  const imagem = document.getElementById('imagemEspaco');
  imagem.style.backgroundImage = `url("/assets/img/${nomeImagem}")`;

  // Remove classe "ativo" de todos os botões
  const botoes = document.querySelectorAll('.botoes button');
  botoes.forEach(b => b.classList.remove('ativo'));

  // Adiciona classe "ativo" ao botão clicado
  botao.classList.add('ativo');
}