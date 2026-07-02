//  DATOS DE NOTICIAS CON IMÁGENES (usando picsum.photos)
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
    tag: 'Tecnología',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XWcAm2KsGtGVH4unqmUvgaF_mqVo76N-JSKE5_Mymg&s=10'
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
    tag: 'Diseño',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWTO3MlYyt9LxMeKQPcwJZnpB9qWN224K2oW7PlH6zg&s=10'
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
    tag: 'Negocios',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNireMFxx3iedXmUkxe1X-zxMlFalKzBvds49W7IPow&s=10'
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
    tag: 'Innovación',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGBwR1HG8S792c8Y39u8oUCjUjqObxgrtaRgev5IYwQ&s=10'
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
    tag: 'Negocios',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjgyGLwdVk-_1FT6zArIajtkGb9ieuQhHWCfwy20fIg&s=10'
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
    tag: 'Diseño',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXvIRmBJiFyZOxO_vm6NTLbYlypzuLIvrF7JeVa7cqg&s=10'
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
    tag: 'Innovación',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhB6ow3BHhWcHmpsroy0sD5ozd1Rg2Vp2OiuoVXDlDJg&s=10'
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
    tag: 'Tecnología',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHARCMIpqs-x7TMSzs03ZYJm9xs7KAQBDFuuEvt1k7u4ezogPSyxBN-Gl&s=10'
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
    tag: 'Negocios',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Y5RexVO-XFvclNnmqnElVzjv3wwAmbL7sVkdJvm-Hw&s=10s'
}];

// ============================================================
//  ESTADO DE LA APLICACIÓN
// ============================================================
let currentCategory = 'all';
let searchQuery = '';
let visibleCount = 6;
let isLoading = false;


//  REFERENCIAS DEL DOM
const grid = document.getElementById('newsGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchInput = document.getElementById('searchInput');
const categoryBtns = document.querySelectorAll('#categoryFilter button');
const resultCount = document.getElementById('resultCount');

//  FUNCIONES PRINCIPALES

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

function renderNews() {
    const filtered = getFilteredData();
    const toShow = filtered.slice(0, visibleCount);
    const hasMore = filtered.length > visibleCount;

    // Mostrar/ocultar botón
    loadMoreBtn.style.display = hasMore ? 'inline-flex' : 'none';
    // Actualizar contador
    resultCount.textContent = filtered.length > 0 ? `${toShow.length}/${filtered.length}` : '0';

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

    let html = '';
    toShow.forEach(item => {
        html += `
            <div class="news-card" data-id="${item.id}">
                <div class="card-image">
                    <img src="${item.image}" alt="${item.title}" loading="lazy" />
                    <span class="card-tag">${item.tag}</span>
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

function updateActiveCategory() {
    categoryBtns.forEach(btn => {
        const cat = btn.dataset.category;
        btn.classList.toggle('active', cat === currentCategory);
    });
}

function refresh() {
    updateActiveCategory();
    renderNews();
}

//  EVENTOS
categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        currentCategory = this.dataset.category;
        visibleCount = 6;
        refresh();
    });
});

let searchTimer;
searchInput.addEventListener('input', function() {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        searchQuery = this.value;
        visibleCount = 6;
        refresh();
    }, 300);
});

loadMoreBtn.addEventListener('click', function() {
    if (isLoading) return;
    const filtered = getFilteredData();
    if (visibleCount >= filtered.length) return;

    // Simular carga
    isLoading = true;
    const spinner = this.querySelector('.spinner-border');
    const icon = this.querySelector('.fa-plus-circle');
    spinner.classList.remove('d-none');
    icon.classList.add('d-none');
    this.disabled = true;

    setTimeout(() => {
        visibleCount = Math.min(visibleCount + 4, filtered.length);
        renderNews();
        spinner.classList.add('d-none');
        icon.classList.remove('d-none');
        this.disabled = false;
        isLoading = false;
        if (visibleCount >= filtered.length) {
            this.style.display = 'none';
        }
    }, 400); // Simula carga de red
});
//  INICIALIZAR
refresh();