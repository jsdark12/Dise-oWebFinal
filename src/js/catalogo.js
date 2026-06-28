document.addEventListener('DOMContentLoaded', () => {
    
    const btnToggleFiltros = document.querySelector('#btn-toggle-filtros');
    const sidebarFiltros = document.querySelector('.sidebar-filters');
    const catalogLayout = document.querySelector('.catalog-layout');

    btnToggleFiltros.addEventListener('click', () => {
        sidebarFiltros.classList.toggle('d-none');
        catalogLayout.classList.toggle('filters-hidden');
    });
});