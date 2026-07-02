document.addEventListener('DOMContentLoaded', () => {
    
    /*=====Scrpit para el boton FILTRAR responsive=====*/
    const btnToggleFiltros = document.querySelector('#btn-toggle-filtros');
    const sidebarFiltros = document.querySelector('.sidebar-filters');
    const catalogLayout = document.querySelector('.catalog-layout');
    const tamanioMobile = window.matchMedia('(max-width: 767px)');
    const overlayFiltros = document.querySelector('#fondo-oscuro-filtros');

    function evaluarResponsivo(evento) {
        if (evento.matches) {
            sidebarFiltros.classList.remove('d-none');
            catalogLayout.classList.remove('filters-hidden');
            sidebarFiltros.classList.remove('mobile-abierto');
            if (overlayFiltros) overlayFiltros.classList.remove('activo');
        } else {
            sidebarFiltros.classList.remove('mobile-abierto');
            sidebarFiltros.classList.remove('d-none');
            catalogLayout.classList.remove('filters-hidden');
            if (overlayFiltros) overlayFiltros.classList.remove('activo');
        }
    }

    evaluarResponsivo(tamanioMobile);
    tamanioMobile.addEventListener('change', evaluarResponsivo);

    btnToggleFiltros.addEventListener('click', () => {
        if (tamanioMobile.matches) {
            sidebarFiltros.classList.toggle('mobile-abierto');
            if (overlayFiltros) overlayFiltros.classList.toggle('activo');
        } else {
            catalogLayout.classList.toggle('filters-hidden');
            sidebarFiltros.classList.toggle('d-none');
        }
    });

    if (overlayFiltros) {
        overlayFiltros.addEventListener('click', () => {
            sidebarFiltros.classList.remove('mobile-abierto');
            overlayFiltros.classList.remove('activo');
        });
    }


    /*=====Scrpit para filtrar=====*/
    const btnAplicarFiltros = document.querySelector('.sticky-filter-header button');
    const checkboxesPlataforma = document.querySelectorAll('.sidebar-filters input[type="checkbox"][value]');
    const tarjetasJuegos = document.querySelectorAll('.game-card');

    if (btnAplicarFiltros) {
        btnAplicarFiltros.addEventListener('click', () => {
            
            const filtrosSeleccionados = Array.from(checkboxesPlataforma)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);
            tarjetasJuegos.forEach(tarjeta => {
                if (filtrosSeleccionados.length === 0) {
                    tarjeta.classList.remove('oculto-por-filtro');
                    return; 
                }

                const plataformaTarjeta = tarjeta.getAttribute('data-plataforma');

                if (filtrosSeleccionados.includes(plataformaTarjeta)) {
                    tarjeta.classList.remove('oculto-por-filtro');
                } else {
                    tarjeta.classList.add('oculto-por-filtro');
                }
            });

            if (window.innerWidth < 768) {
                const sidebarFiltros = document.querySelector('.sidebar-filters');
                const overlayFiltros = document.querySelector('#fondo-oscuro-filtros');
                
                sidebarFiltros.classList.remove('mobile-abierto');
                if (overlayFiltros) overlayFiltros.classList.remove('activo');
            }
        });
    }
});