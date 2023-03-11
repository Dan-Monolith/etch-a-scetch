const canvass = document.getElementById('canvass');
const sizeSlider = document.getElementById('sizeSlider');
let size = 16;

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;    
};

function clearGrid() {
    canvass.textContent = '';
};

function changeSize(value) {
    size = value;
    clearGrid();
    drawGrid(size);
}

function drawGrid(size) {
    const canvass = document.querySelector('.canvass');
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        document.getElementById('canvass').appendChild(div); 
    };

    canvass.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvass.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Select all pixels and create a nodeList to loop through to attach eventListeners.
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
    });

    const resetButton = document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', () => {
        pixels.forEach((div) => {
            div.style.backgroundColor = 'white';
        });
    });

    const gridButton = document.querySelector('.gridBtn');
    gridBtn.addEventListener('click', () => {
        pixels.forEach((div) => {
            div.classList.toggle('toggleGrid');
        });
    });
};
//instead of just div.style.border = none, use toggle to activate/deactivate

window.onload = () => {
    drawGrid(size);
};


