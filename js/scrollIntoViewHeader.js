// Obtén una referencia a los enlaces del encabezado y a las secciones de imágenes
const headerLinks = document.querySelectorAll('.nav-link');
const portfolioSections = document.querySelectorAll('.portafolio');

// Almacena el enlace activo actual
let activeItem = null;

// Agrega un evento de clic a los elementos del encabezado
headerLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Obtén el valor del atributo "data-target"
    const target = link.getAttribute('data-target');
    
    // Encuentra la sección correspondiente por su ID
    const targetSection = document.getElementById(target);
    
    // Verifica si se encontró la sección objetivo
    if (targetSection) {
      // Hace scroll hasta la sección objetivo
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Para un desplazamiento suave
      
      // Quita la clase "active-item" del enlace activo actual
      if (activeItem) {
        activeItem.classList.remove('active-item');
      }
      
      // Agrega la clase "active-item" al enlace actual
      link.classList.add('active-item');
      targetSection.click();
      
      // Establece el enlace activo actual como el enlace actual
      activeItem = link;
    }
  });
});