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