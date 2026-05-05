document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById('overlay');
    const fullImage = document.getElementById('fullImage');
    const galleryImages = document.querySelectorAll('.gallery-img');

    // Al hacer clic en una imagen de la galería
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            fullImage.src = img.src; // Cambia la fuente del modal por la de la imagen clicada
            overlay.style.display = 'flex'; // Muestra el centrado
        });
    });

    // Cerrar al hacer clic en cualquier parte del fondo oscuro
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});