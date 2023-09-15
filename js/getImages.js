const imageContainer = document.querySelector('.portafolio');
const loadMoreButton = document.querySelector('.load-more');
const seccionLinks = document.querySelectorAll('.grid-options-items .grid-options-item');

let page = 1;
const perPage = 12;
let totalImages = 0;
let currentQuery = 'all'; // Inicialmente se muestra la sección 'All'
let activeLink = null;


// Función para cargar imágenes desde la API con un query específico
function loadImages(query) {
  if (totalImages >= 36) {
    loadMoreButton.disabled = true;
    return;
  }

  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&page=${page}&client_id=nm7Nb4xVw-_QZZYEgt8N_T8Egm_K_uouyRhXitmc00w`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then(data => {
      data.results.forEach(element => {
        const imgElement = document.createElement('img');
        imgElement.src = element.urls.regular;
        imgElement.className = 'grid-image';

        const divElement = document.createElement('div');
        divElement.className = 'overlay';
        const titleElement = document.createElement('p');
        titleElement.textContent = 'Creative Logo';
        titleElement.className = 'image-title';
        const subtitleElement = document.createElement('p');
        subtitleElement.textContent = 'Branding';
        subtitleElement.className = 'image-sub_title';
        const container = document.createElement('div');
        container.className = 'image-container';
        const separador = document.createElement('hr');
        separador.className = 'line';

        divElement.appendChild(titleElement);
        divElement.appendChild(separador);
        divElement.appendChild(subtitleElement);
        
        container.appendChild(imgElement);
        container.appendChild(divElement);

        imageContainer.appendChild(container);

        totalImages++;
      });

      page++;

      if (data.results.length < perPage || totalImages >= 27) {
        loadMoreButton.remove();
      }
    })
    .catch(error => {
      console.error('Hubo un error: ', error.message);
    });
}

// Manejar el click en los elementos de sección
seccionLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Obtener el valor del data-query
    const query = link.getAttribute('data-query');
    
    // Limpiar el contenedor de imágenes antes de cargar nuevas
    imageContainer.innerHTML = '';
    
    // Reiniciar variables
    page = 1;
    totalImages = 0;
    
    // Actualizar el valor de la consulta actual
    currentQuery = query;

    if (activeLink) {
      activeLink.classList.remove('active-item');
    }
    
    // Cargar imágenes con la nueva consulta
    loadImages(currentQuery);
    link.classList.add('active-item');
    activeLink = link;
  });
});

// Manejar el clic en el botón "Load More"
loadMoreButton.addEventListener('click', () => {
  loadImages(currentQuery);
});

// Cargar las primeras imágenes al cargar la página
loadImages(currentQuery);