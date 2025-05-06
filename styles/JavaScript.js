// Evento para navegação
window.addEventListener('popstate', (event) => {
    if (!event.state) {
        window.close(); // Sai do site
    }
});

// Configuração inicial
window.onload = () => {
    history.replaceState({}, '', location.href);
};