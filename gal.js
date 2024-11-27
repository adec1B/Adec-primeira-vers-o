// script.js

// Obter todos os elementos de imagem
const images = document.querySelectorAll('.gallery-img');

// Obter o modal e o elemento de imagem do modal
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const captionText = document.getElementById('caption');

// Adicionar evento de clique a cada imagem
images.forEach(image => {
  image.addEventListener('click', () => {
    // Exibir o modal
    modal.style.display = 'flex';
    modalImage.src = image.src;
    captionText.textContent = image.alt;
  });
});

// Função para fechar o modal
function closeModal() {
  modal.style.display = 'none';
}

// Fechar o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}
