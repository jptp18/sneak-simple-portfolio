/*_toggle.onclick = () =>{
    _items.classList.toggle("open");
    _toggle.classList.toggle("close");
}*/
// Obtén una referencia al botón de menú y al menú de navegación
const toggleButton = document.getElementById('_toggle');
const navItems = document.querySelectorAll('.nav-link');

// Función para cerrar el menú
function closeMenu() {
  const navBar = document.getElementById('_items');
  navBar.classList.remove('open');
  toggleButton.classList.remove('close');
}

// Agrega un evento de clic al botón de menú
toggleButton.addEventListener('click', () => {
  const navBar = document.getElementById('_items');
  navBar.classList.toggle('open');
  toggleButton.classList.toggle('close');
});

// Agrega un evento de clic a cada elemento de navegación para cerrar el menú al hacer clic
navItems.forEach(item => {
  item.addEventListener('click', closeMenu);
});