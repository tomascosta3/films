const lista = document.querySelector('.lista');
let isDown = false;
let startX;
let scrollLeft;

lista.addEventListener('mousedown', (e) => {
  isDown = true;
  lista.classList.add('active');
  startX = e.pageX - lista.offsetLeft;
  scrollLeft = lista.scrollLeft;
});

lista.addEventListener('mouseleave', () => {
  isDown = false;
  lista.classList.remove('active');
});

lista.addEventListener('mouseup', () => {
  isDown = false;
  lista.classList.remove('active');
});

lista.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - lista.offsetLeft;
  const walk = (x - startX) * 3; // Multiplica por un factor para hacer el desplazamiento más suave
  lista.scrollLeft = scrollLeft - walk;
});
