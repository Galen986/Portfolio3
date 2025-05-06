// Função para navegar entre as páginas
function navigateTo(page) {
    document.querySelectorAll('main').forEach(main => main.style.display = 'none');
    document.getElementById(page).style.display = 'block';

    if (page !== 'home') {
        history.pushState({ page }, '', `#${page}`);
    } else {
        history.replaceState({ page }, '', `#${page}`);
    }
}

// Evento "voltar"
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        navigateTo(event.state.page);
    } else {
        window.close(); // Sai do site
    }
});

// Configuração inicial
window.onload = () => {
    navigateTo('home');
};