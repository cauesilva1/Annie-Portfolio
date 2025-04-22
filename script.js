// Menu toggle functionality
const toggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');

  if (nav.classList.contains('show')) {
    nav.classList.remove('show');
    nav.classList.add('hide');

    // Espera o tempo da animação de saída antes de ocultar o menu
    setTimeout(() => {
      nav.classList.remove('hide');
      nav.style.display = 'none';
    }, 300);
  } else {
    nav.style.display = 'flex';
    nav.classList.add('show');
  }
});

// Modal functionality
const modal = document.getElementById('project-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');
const projectButtons = document.querySelectorAll('.project-btn');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const img = button.querySelector('img');
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalTitle.textContent = button.dataset.title;
    modalDescription.textContent = button.dataset.description;
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
