// ============ BASE DE DATOS ============
const newsDatabase = [
    {
        id: 1,
        title: "Xbox anuncia nueva generación para 2027",
        category: "Noticias",
        excerpt: "Microsoft revela sus planes para la próxima consola con IA integrada y retrocompatibilidad total.",
        date: "2 de junio de 2026",
        reads: 8432,
        icon: "🎮"
    },
    {
        id: 2,
        title: "PlayStation Plus: juegos gratuitos de junio",
        category: "Actualizaciones",
        excerpt: "Sony confirma los títulos que llegarán al servicio de suscripción este mes.",
        date: "1 de junio de 2026",
        reads: 12453,
        icon: "🎯"
    },
    {
        id: 3,
        title: "Nintendo Switch 2: fecha de lanzamiento confirmada",
        category: "Rumores",
        excerpt: "Nintendo habría filtrado accidentalmente la nueva consola híbrida para finales de año.",
        date: "31 de mayo de 2026",
        reads: 28901,
        icon: "🎮"
    },
    {
        id: 4,
        title: "GTA VI: nuevo tráiler rompe récords",
        category: "Noticias",
        excerpt: "Rockstar Games publica el segundo tráiler que supera los 100 millones de visitas en 24 horas.",
        date: "30 de mayo de 2026",
        reads: 45678,
        icon: "🚗"
    },
    {
        id: 5,
        title: "Steam Summer Sale: fechas y descuentos filtrados",
        category: "Ofertas",
        excerpt: "Las rebajas de verano comenzarían a finales de junio con grandes descuentos.",
        date: "29 de mayo de 2026",
        reads: 15678,
        icon: "🔥"
    },
    {
        id: 6,
        title: "The Witcher 4: primer gameplay filtrado",
        category: "Filtraciones",
        excerpt: "CD Projekt Red estaría trabajando en un nuevo motor gráfico para la saga.",
        date: "28 de mayo de 2026",
        reads: 34215,
        icon: "🐺"
    }
];

const reviewsDatabase = [
    {
        id: 1,
        game: "Forza Horizon 6",
        score: 9.5,
        text: "Una obra maestra de la conducción. Los gráficos son impresionantes y el mapa es enorme. Mejor que su predecesor en todos los aspectos.",
        author: "CarlosGamer"
    },
    {
        id: 2,
        game: "MotoGP 26",
        score: 8.0,
        text: "La física mejoró mucho, pero aún tiene margen de mejora. El modo carrera es muy inmersivo.",
        author: "RacingPro"
    },
    {
        id: 3,
        game: "Lego Batman: Legacy",
        score: 7.5,
        text: "Divertido y con mucho humor, pero algo corto. Ideal para jugar en familia o con amigos.",
        author: "Alejandro_89"
    },
    {
        id: 4,
        game: "Monster Sanctuary",
        score: 8.5,
        text: "Una joya oculta. Mezcla de Pokémon con metroidvania. Muy recomendado para amantes de los RPG por turnos.",
        author: "NerdGamer"
    }
];

const upcomingDatabase = [
    { title: "Starfield 2", date: "15 de agosto 2026", platform: "PC, Xbox" },
    { title: "The Last of Us Part III", date: "Octubre 2026", platform: "PS5" },
    { title: "Zelda: Echoes of Time", date: "Diciembre 2026", platform: "Nintendo Switch" },
    { title: "Call of Duty 2026", date: "Noviembre 2026", platform: "PC, PS5, Xbox" }
];

const communityDatabase = [
    {
        id: 1,
        text: "La mejor página para estar al día con los lanzamientos. Llevo siguiéndolos desde 2024 y nunca fallan.",
        user: "MasterChief_117",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 2,
        text: "Sus reseñas son muy objetivas, me ayudaron a decidir qué juegos comprar este año.",
        user: "Luna_Gamer",
        rating: "⭐⭐⭐⭐"
    },
    {
        id: 3,
        text: "Rápidos con las noticias y siempre con fuentes confiables. Lo recomiendo 100%.",
        user: "DarkSoulsFan",
        rating: "⭐⭐⭐⭐⭐"
    }
];

// ============ RENDER FUNCTIONS ============

function renderNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    
    newsGrid.innerHTML = newsDatabase.map(news => `
        <div class="news-card" data-id="${news.id}">
            <div class="news-image">${news.icon}</div>
            <div class="news-content">
                <div class="news-category">${news.category}</div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
                <div class="news-meta">
                    <span>📅 ${news.date}</span>
                    <span>👁️ ${news.reads.toLocaleString()}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            const news = newsDatabase.find(n => n.id === id);
            if (news) {
                if (typeof M !== 'undefined' && M.toast) {
                    M.toast({ html: `📰 ${news.title}`, classes: 'rounded orange darken-3' });
                } else {
                    alert(`📰 ${news.title}\n\n${news.excerpt}\n\n📅 ${news.date}\n👁️ ${news.reads.toLocaleString()} lecturas`);
                }
            }
        });
    });
}

function renderReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    if (!reviewsGrid) return;
    
    reviewsGrid.innerHTML = reviewsDatabase.map(review => `
        <div class="review-card">
            <div class="review-header">
                <span class="review-game">🎮 ${review.game}</span>
                <span class="review-score">${review.score}/10</span>
            </div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-author">— ${review.author}</div>
        </div>
    `).join('');
}

function renderUpcoming() {
    const upcomingGrid = document.getElementById('upcomingGrid');
    if (!upcomingGrid) return;
    
    upcomingGrid.innerHTML = upcomingDatabase.map(game => `
        <div class="upcoming-card">
            <div class="upcoming-date">📅 ${game.date}</div>
            <div class="upcoming-title">${game.title}</div>
            <div class="upcoming-platform">🎮 ${game.platform}</div>
        </div>
    `).join('');
}

function renderCommunity() {
    const communityGrid = document.getElementById('communityGrid');
    if (!communityGrid) return;
    
    communityGrid.innerHTML = communityDatabase.map(opinion => `
        <div class="community-card">
            <div class="community-text">"${opinion.text}"</div>
            <div class="community-user">
                <span>👤 ${opinion.user}</span>
                <span class="community-rating">${opinion.rating}</span>
            </div>
        </div>
    `).join('');
}

// ============ NEWSLETTER ============
function setupNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        
        if (email) {
            let subscribers = JSON.parse(localStorage.getItem('ghostdragon_subscribers') || '[]');
            if (!subscribers.includes(email)) {
                subscribers.push(email);
                localStorage.setItem('ghostdragon_subscribers', JSON.stringify(subscribers));
                
                if (typeof M !== 'undefined' && M.toast) {
                    M.toast({ html: `✅ ¡Gracias por suscribirte! 📧 ${email}`, classes: 'green darken-2 rounded' });
                } else {
                    alert(`✅ ¡Gracias por suscribirte!\n📧 Recibirás las últimas noticias en: ${email}`);
                }
            } else {
                if (typeof M !== 'undefined' && M.toast) {
                    M.toast({ html: '📧 Este email ya está suscrito.', classes: 'orange darken-3 rounded' });
                } else {
                    alert('📧 Este email ya está suscrito a nuestro newsletter.');
                }
            }
            form.reset();
        }
    });
}

// ============ NAVEGACIÓN ============
function setupNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            const category = link.textContent;
            if (typeof M !== 'undefined' && M.toast) {
                M.toast({ html: `🔍 Navegando a: ${category}`, classes: 'rounded orange darken-3' });
            } else {
                alert(`🔍 Navegando a: ${category}\n\n(versión demo - 30% funcional)`);
            }
        });
    });
}

// ============ CONTADOR DE VISITAS ============
function setupVisitCounter() {
    let visits = localStorage.getItem('ghostdragon_visits');
    if (visits) {
        visits = parseInt(visits) + 1;
    } else {
        visits = 1;
    }
    localStorage.setItem('ghostdragon_visits', visits);
    console.log(`🐉 GhostDragon | Candle of Fire - Visitas totales: ${visits}`);
}

// ============ ACTUALIZAR AÑO EN FOOTER ============
function updateFooterYear() {
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
        const year = new Date().getFullYear();
        footerBottom.innerHTML = `&copy; ${year} <span class="brand-fire">GhostDragon | Candle of Fire</span> - Todos los derechos reservados`;
    }
}

// ============ MATERIALIZE INIT ============
function initMaterialize() {
    if (typeof M !== 'undefined') {
        if (M.AutoInit) {
            M.AutoInit();
        }
        console.log('✨ Materialize inicializado correctamente');
    }
}

// ============ INICIALIZACIÓN ============
document.addEventListener('DOMContentLoaded', () => {
    renderNews();
    renderReviews();
    renderUpcoming();
    renderCommunity();
    setupNewsletter();
    setupNavLinks();
    setupVisitCounter();
    updateFooterYear();
    initMaterialize();
    
    console.log('🐉 GhostDragon | Candle of Fire - Portal cargado correctamente');
    console.log('🔥 Diseño inspirado en GhostDragon | Candle of Fire');
});