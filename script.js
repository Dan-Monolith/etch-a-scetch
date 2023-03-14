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

    let mouseIsDown = false;
    document.body.onmousedown = () => (mouseIsDown = true);
    document.body.onmouseup = () => (mouseIsDown = false);
 
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) => {
        div.addEventListener('mousemove', () => {
            if(mouseIsDown === true){
                div.addEventListener('mouseover', drawingMode)
            };    
        });
    });
    pixels.forEach((div) => {
        div.addEventListener('click', () => {
            div.addEventListener('mouseover', drawingMode)
        });
    });
};

function drawingMode () {
    switch (color) {
        case 'ink':
            pixels.forEach((div) => {
                div.addEventListener('mousemove', () => {
                    if(mouseIsDown === true){
                        div.style.backgroundColor = 'black';
                    };    
                });
            });
            pixels.forEach((div) => {
                div.addEventListener('click', () => {
                    div.style.backgroundColor = 'black';
                });
            });
            break;
        case 'rainbow':
            pixels.forEach((div) => {
                div.addEventListener('mousemove', () => {
                    if(mouseIsDown === true){
                        div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    };    
                });
            });
            pixels.forEach((div) => {
                div.addEventListener('click', () => {
                    div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                });
            });
            break;
        default:
            pixels.forEach((div) => {
                div.addEventListener('mousemove', () => {
                    if(mouseIsDown === true){
                        div.style.backgroundColor = 'red';
                    };    
                });
            });
            pixels.forEach((div) => {
                div.addEventListener('click', () => {
                    div.style.backgroundColor = 'red';
                });
            });
            break;
    }
};

function switchReset (){
    const pixels = document.querySelectorAll('.pixel');
    const resetButton = document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', () => {
        pixels.forEach((div) => {
            div.style.backgroundColor = 'white';
        });
        drawingMode = ink;
        console.log(drawingMode);
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

function switchRainbow (){
    const rainbowButton = document.querySelector('.rainbowBtn');
    rainbowBtn.addEventListener('click', () => {

    });
}

window.onload = () => {
    drawGrid(size);
};


