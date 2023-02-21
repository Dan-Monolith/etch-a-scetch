const defaultSize = 16;

let currentSize = defaultSize;

function setCurrentSize(newSize) {
    currentSize = newSize;
}

const sizeValue = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');
const grid = document.getElementById('grid');

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
};

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;    
};

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

function clearGrid() {
    grid.innerHTML = '';
};



function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        //gridElement.addEventListener('mouseover', changeColor);
        //gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement); 
    };
};

window.onload = () => {
    setupGrid(defaultSize);
};


