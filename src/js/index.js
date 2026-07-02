// Buscador de juegos
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (query === '') return;
    
    const gameCards = document.querySelectorAll('.card');
    let found = false;
    
    gameCards.forEach(card => {
        const title = card.querySelector('.card-title');
        if (title) {
            const gameName = title.textContent.toLowerCase();
            if (gameName.includes(query)) {
                card.closest('.col').scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.borderColor = '#c0392b';
                card.style.boxShadow = '0 0 30px rgba(192, 57, 43, 0.5)';
                setTimeout(() => {
                    card.style.borderColor = '';
                    card.style.boxShadow = '';
                }, 3000);
                found = true;
            }
        }
    });
    
    if (!found) {
        alert(` No se encontraron juegos con "${query}"`);
    }
});

// Newsletter
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert(` ¡Gracias por suscribirte!\n Recibirás las últimas noticias en: ${email}`);
        this.reset();
    }
});

// Scroll suave para los enlaces del navbar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

console.log(' GhostDragon | Game Insight - Portal cargado correctamente');
console.log(' Todos los juegos enlazados y funcionando');