// Seleciona o botão e o corpo da página
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Alterna entre os temas claro e escuro
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Altera o texto do botão com base no tema
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Modo Claro';
    } else {
        themeToggle.textContent = 'Modo Escuro';
    }
});