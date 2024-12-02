// BOTAO DARK/WHITE

document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeButton = document.getElementById('toggleTheme');

    // Recupera o tema salvo no localStorage e aplica
    const savedTheme = localStorage.getItem('theme'); // Verifica o tema salvo
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode'); // Aplica o tema claro
        toggleThemeButton.textContent = 'Modo Escuro'; // Ajusta o texto do botão
    } else {
        toggleThemeButton.textContent = 'Modo Claro'; // Ajusta o texto do botão
    }

    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            // Alterna a classe "light-mode" no corpo
            document.body.classList.toggle('light-mode');

            // Atualiza o texto do botão
            const isLightMode = document.body.classList.contains('light-mode');
            toggleThemeButton.textContent = isLightMode ? 'Modo Escuro' : 'Modo Claro';

            // Salva o estado do tema no localStorage
            localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        });
    }
});


function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Captura o campo de busca e os elementos dropdown
const searchInput = document.getElementById('searchInput');
const dropdowns = document.querySelectorAll('.dropdown');

// Adiciona o evento de busca
searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();

    // Filtra os itens com base no texto do atributo alt das imagens
    dropdowns.forEach(dropdown => {
        const img = dropdown.querySelector('img');
        const altText = img.alt.toLowerCase();

        if (altText.includes(query)) {
            dropdown.classList.remove('hidden');
        } else {
            dropdown.classList.add('hidden');
        }
    });
});


