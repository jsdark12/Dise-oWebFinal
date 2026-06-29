/*=====Scrpit para el boton FILTRAR=====*/
document.addEventListener('DOMContentLoaded', () => {
    
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
});