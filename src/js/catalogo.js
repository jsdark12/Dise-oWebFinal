/*=====Scrpit para el boton FILTRAR=====*/
document.addEventListener('DOMContentLoaded', () => {
    
    const btnToggleFiltros = document.querySelector('#btn-toggle-filtros');
    const sidebarFiltros = document.querySelector('.sidebar-filters');
    const catalogLayout = document.querySelector('.catalog-layout');
    const tamanioMovil = window.matchMedia('(max-width: 767px)');

    function evaluarResponsivo(evento) {
        if (evento.matches) {
            sidebarFiltros.classList.add('d-none');
            catalogLayout.classList.remove('filters-hidden');
        } else {
            sidebarFiltros.classList.remove('d-none');
            catalogLayout.classList.remove('filters-hidden');
        }
    }

    evaluarResponsivo(tamanioMovil);
    tamanioMovil.addEventListener('change', evaluarResponsivo);
    btnToggleFiltros.addEventListener('click', () => {
        if (tamanioMovil.matches) {
            sidebarFiltros.classList.toggle('d-none');
        } else {
            catalogLayout.classList.toggle('filters-hidden');
            sidebarFiltros.classList.toggle('d-none');
        }
    });
});