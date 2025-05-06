// Função para navegar entre as páginas
function navigateTo(page) {
  // Esconde todas as seções
  document.querySelectorAll('div').forEach(div => div.style.display = 'none');

  // Mostra a página solicitada
  document.getElementById(page).style.display = 'block';

  // Adiciona a página ao histórico
  if (page !== 'home') {
    history.pushState({ page }, '', `#${page}`);
  } else {
    history.replaceState({ page }, '', `#${page}`);
  }
}

// Evento para lidar com o botão "voltar"
window.addEventListener('popstate', (event) => {
  if (event.state && event.state.page) {
    navigateTo(event.state.page);
  } else {
    // Quando não há mais históricos, volta para a página inicial
    navigateTo('home');
  }
});

// Configuração inicial ao carregar a página
window.onload = () => {
  navigateTo('home'); // Define a página inicial como padrão
};