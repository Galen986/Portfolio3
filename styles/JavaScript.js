window.onload = () => {
    history.replaceState({}, '', location.href);
};

window.onpopstate = () => {
    window.close(); // Fecha o site ao voltar
};