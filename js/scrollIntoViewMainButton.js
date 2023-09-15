// Obtén una referencia a la lista del encabezado y a las secciones de imágenes
const button = document.querySelector('#main-button');
const portfolioSection = document.querySelector('.grid-options');

// Agrega un evento de clic a los elementos del encabezado

button.addEventListener('click', () => {
    
    // Verifica si se encontró la sección objetivo
    if (portfolioSection) {
      // Hace scroll hasta la sección objetivo
      portfolioSection.scrollIntoView({ behavior: 'smooth' }); // Para un desplazamiento suave
    }

});
