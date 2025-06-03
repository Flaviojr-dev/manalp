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

const slider = document.querySelector('.cards-clinico');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Velocidade do arrasto
    slider.scrollLeft = scrollLeft - walk;
});