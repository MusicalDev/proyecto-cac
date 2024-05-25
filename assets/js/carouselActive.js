document.addEventListener('DOMContentLoaded', (event) => {
  const slider = document.querySelector('.slider');

  function activate(e) {
    const items = document.querySelectorAll('.item');
    
    // Comprueba si el clic es en el botón siguiente o anterior
    if (e.target.matches('.next')) {
      e.preventDefault();
      slider.append(items[0]);
    } else if (e.target.matches('.prev')) {
      e.preventDefault();
      slider.prepend(items[items.length - 1]);
    } 
    // Comprueba si el clic está en un elemento y no en un enlace
    else if (e.target.closest('.item') && !e.target.closest('a')) {
      e.preventDefault();
      const clickedItem = e.target.closest('.item');
      const clickedIndex = Array.from(items).indexOf(clickedItem);
      if (clickedIndex >= 0) {
        for (let i = 0; i < clickedIndex; i++) {
          slider.append(items[0]);
        }
      }
    }
  }

  function handleKeydown(e) {
    const items = document.querySelectorAll('.item');
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      slider.append(items[0]);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      slider.prepend(items[items.length - 1]);
    }
  }

  document.addEventListener('click', activate, false);
  document.addEventListener('keydown', handleKeydown, false);
});
