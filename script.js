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

    switchGrid();
    switchReset();

    let mouseIsDown = false;
    document.addEventListener('mousedown', () => {
        mouseIsDown = true;
    });
    document.addEventListener('mouseup', () => {
        mouseIsDown = false;
    });

    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if(mouseIsDown === true){
                div.classList.add(`${drawingMode}`);
            };    
        });
    });
    
    pixels.forEach((div) => {
        div.addEventListener('click', () => {
            div.classList.add(`${drawingMode}`);
        });
    });
};

function switchReset (){
    const pixels = document.querySelectorAll('.pixel');
    const resetButton = document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', () => {
        pixels.forEach((div) => {
            div.classList.remove(`${drawingMode}`);
        });
    });
};

function switchGrid (){
    const pixels = document.querySelectorAll('.pixel');
    const gridButton = document.querySelector('.gridBtn');
    gridBtn.addEventListener('click', () => {
        pixels.forEach((div) => {
            div.classList.toggle('toggleGrid');
        });
    });
};

let drawingMode = 'ink';

function switchFade (){
    const fadeButton = document.querySelector('.fadeBtn');
    fadeBtn.addEventListener('click', () => {
        let drawingMode = 'fade';
        console.log(drawingMode);
    })
    
};

window.onload = () => {
    drawGrid(size);
};


