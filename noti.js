// ============================================================
//  DATOS DE EJEMPLO (cámbialos por tus propias noticias)
// ============================================================
const NEWS_DATA = [{
    id: 1,
    title: 'Lanzamiento del nuevo motor gráfico Hyperion',
    excerpt: 'Promete gráficos fotorrealistas y una optimización sin precedentes para PC y consolas.',
    category: 'tecnologia',
    date: '24 de junio, 2026',
    readTime: '4 min',
    author: 'María González',
    avatar: 'MG',
    icon: 'fa-microchip',
    tag: 'Tecnología'
}, {
    id: 2,
    title: 'El arte conceptual en los videojuegos modernos',
    excerpt: 'Cómo los artistas construyen mundos inmersivos desde el primer trazo hasta el render final.',
    category: 'diseno',
    date: '23 de junio, 2026',
    readTime: '5 min',
    author: 'Carlos Ruiz',
    avatar: 'CR',
    icon: 'fa-paintbrush',
    tag: 'Diseño'
}, {
    id: 3,
    title: 'Startups de esports que están levantando millones',
    excerpt: 'El negocio detrás de los torneos y cómo las marcas apuestan por los jugadores profesionales.',
    category: 'negocios',
    date: '22 de junio, 2026',
    readTime: '7 min',
    author: 'Laura Fernández',
    avatar: 'LF',
    icon: 'fa-trophy',
    tag: 'Negocios'
}, {
    id: 4,
    title: 'Realidad virtual: el próximo salto en inmersión',
    excerpt: 'Nuevos visores y tecnologías hápticas que harán que el metaverso sea indistinguible de la realidad.',
    category: 'innovacion',
    date: '21 de junio, 2026',
    readTime: '6 min',
    author: 'Andrés Navarro',
    avatar: 'AN',
    icon: 'fa-vr-cardboard',
    tag: 'Innovación'
}, {
    id: 5,
    title: 'Estrategias de monetización en juegos free-to-play',
    excerpt: 'Battle passes, skins y pases de temporada: el equilibrio entre rentabilidad y experiencia de usuario.',
    category: 'negocios',
    date: '20 de junio, 2026',
    readTime: '4 min',
    author: 'Sofía Méndez',
    avatar: 'SM',
    icon: 'fa-coins',
    tag: 'Negocios'
}, {
    id: 6,
    title: 'Herramientas de prototipado para game designers',
    excerpt: 'De Unity a Unreal, pasando por nuevas soluciones open source que aceleran el desarrollo.',
    category: 'diseno',
    date: '19 de junio, 2026',
    readTime: '3 min',
    author: 'Javier López',
    avatar: 'JL',
    icon: 'fa-cubes',
    tag: 'Diseño'
}, {
    id: 7,
    title: 'IA generativa aplicada a la creación de niveles',
    excerpt: 'Algoritmos que diseñan misiones y escenarios completos en segundos, revolucionando la producción.',
    category: 'innovacion',
    date: '18 de junio, 2026',
    readTime: '8 min',
    author: 'Dra. Elena Rivas',
    avatar: 'ER',
    icon: 'fa-brain',
    tag: 'Innovación'
}, {
    id: 8,
    title: 'Blockchain y propiedad digital en los juegos',
    excerpt: 'Cómo los NFT y la tecnología descentralizada están cambiando la propiedad de los objetos virtuales.',
    category: 'tecnologia',
    date: '17 de junio, 2026',
    readTime: '5 min',
    author: 'Pablo Torres',
    avatar: 'PT',
    icon: 'fa-link',
    tag: 'Tecnología'
}, {
    id: 9,
    title: 'Cultura gamer: de nicho a fenómeno global',
    excerpt: 'El impacto social y económico de una industria que mueve más que el cine y la música juntos.',
    category: 'negocios',
    date: '16 de junio, 2026',
    readTime: '6 min',
    author: 'Marta Salazar',
    avatar: 'MS',
    icon: 'fa-globe',
    tag: 'Negocios'
}];

// ============================================================
//  ESTADO DE LA APLICACIÓN
// ============================================================
let currentCategory = 'all';
let searchQuery = '';
let visibleCount = 6;

// ============================================================
//  REFERENCIAS DEL DOM
// ============================================================
const grid = document.getElementById('newsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchInput = document.getElementById('searchInput');
const categoryBtns = document.querySelectorAll('#categoryFilter button');

// ============================================================
//  FUNCIONES PRINCIPALES
// ============================================================

// Filtra los datos según categoría y búsqueda
function getFilteredData() {
    return NEWS_DATA.filter(item => {
        const matchCategory = currentCategory === 'all' || item.category === currentCategory;
        const query = searchQuery.trim().toLowerCase();
        const matchSearch = query === '' ||
            item.title.toLowerCase().includes(query) ||
            item.excerpt.toLowerCase().includes(query) ||
            item.author.toLowerCase().includes(query) ||
            item.tag.toLowerCase().includes(query);
        return matchCategory && matchSearch;
    });
}

// Renderiza las tarjetas en el grid
function renderNews() {
    const filtered = getFilteredData();
    const toShow = filtered.slice(0, visibleCount);
    const hasMore = filtered.length > visibleCount;

    // Mostrar u ocultar botón "Cargar más"
    loadMoreBtn.style.display = hasMore ? 'inline-flex' : 'none';

    // Si no hay resultados
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No se encontraron noticias</h3>
                <p>Prueba con otra categoría o búsqueda.</p>
            </div>
        `;
        return;
    }

    // Construir HTML de las tarjetas
    let html = '';
    toShow.forEach(item => {
        html += `
            <div class="news-card" data-id="${item.id}">
                <div class="card-image">
                    <span class="card-tag">${item.tag}</span>
                    <i class="fas ${item.icon}"></i>
                </div>
                <div class="card-body">
                    <div class="card-meta">
                        <span><i class="far fa-calendar-alt"></i> ${item.date}</span>
                        <span><i class="far fa-clock"></i> ${item.readTime}</span>
                    </div>
                    <h3>${item.title}</h3>
                    <p>${item.excerpt}</p>
                    <div class="card-footer">
                        <div class="author">
                            <span class="avatar">${item.avatar}</span>
                            ${item.author}
                        </div>
                        <span class="read-time"><i class="far fa-bookmark"></i> ${item.readTime}</span>
                    </div>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

// Actualiza la clase 'active' en los botones de categoría
function updateActiveCategory() {
    categoryBtns.forEach(btn => {
        const cat = btn.dataset.category;
        btn.classList.toggle('active', cat === currentCategory);
    });
}

// Refresca toda la vista
function refresh() {
    updateActiveCategory();
    renderNews();
}

// ============================================================
//  EVENTOS
// ============================================================

// Clic en categorías
categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        currentCategory = this.dataset.category;
        visibleCount = 6; // Reiniciar el contador al cambiar de categoría
        refresh();
    });
});

// Búsqueda con debounce
let searchTimer;
searchInput.addEventListener('input', function() {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        searchQuery = this.value;
        visibleCount = 6;
        refresh();
    }, 300);
});

// Botón "Cargar más"
loadMoreBtn.addEventListener('click', function() {
    const filtered = getFilteredData();
    if (visibleCount < filtered.length) {
        visibleCount = Math.min(visibleCount + 4, filtered.length);
        renderNews();
    }
    if (visibleCount >= filtered.length) {
        this.style.display = 'none';
    }
});

// ============================================================
//  INICIALIZAR
// ============================================================
refresh();