const gridView = document.querySelector('#grid-icon');
const rowView = document.querySelector('#row-icon');
const gridContainer = document.querySelector('.portafolio');


gridView.addEventListener('click', ()=>{
    if(gridContainer.classList.contains('row-view')){
        gridContainer.classList.remove('row-view');
        rowView.classList.remove('active');
    };
    if(!gridContainer.classList.contains('grid-view')){
        gridContainer.classList.add('grid-view');
        gridView.classList.add('active');
    };
});

rowView.addEventListener('click', ()=>{
    if(gridContainer.classList.contains('grid-view')){
        gridContainer.classList.remove('grid-view');
        gridView.classList.remove('active')
    };
    
    if(!gridContainer.classList.contains('row-view')){
        gridContainer.classList.add('row-view');
        rowView.classList.add('active');
    };
});