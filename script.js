//global consts.
const canvass2 = document.getElementById('canvass2');
const sizeSlider = document.getElementById('sizeSlider');
let size = 16;

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;    
};

function changeSize(value) {
    size = value;
    clearGrid();
    drawGrid(size);
}
// Create the container that will hold the pixels.
// Iterate over an index to get the right grid size.
// Add class and index to each created div and append to container.
const canvass = document.querySelector('.canvass');
let divNumber = 256;
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.id = i + 1;
    div.textContent = " ";
    document.getElementById("canvass").appendChild(div);    
}

// Select all pixels and create a nodeList to loop through to attach eventListeners.
const pixels = document.querySelectorAll(".pixel");
pixels.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
});

const resetButton = document.querySelector(".reset");
reset.addEventListener("click", () => {
    pixels.forEach((div) => {
        div.style.backgroundColor = "white";
    });
});

function drawGrid(size) {
    const canvass2 = document.querySelector('.canvass2');
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel2');
        div.id = i + 1; 
        document.getElementById("canvass2").appendChild(div); 
    }
    
    canvass2.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvass2.style.gridTemplateRows = `repeat(${size}, 1fr)`;
};

window.onload = () => {
    drawGrid(size);
};

function clearGrid() {
    canvass2.textContent = '';
};
