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
                if(mode === 'rainbow'){
                    div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                }
                else if (mode === 'fade'){
                     
                }
                else if (mode === 'pick'){
                    div.style.backgroundColor = 'purple';
                }
                else {
                    div.style.backgroundColor = color;
                }

            };    
        });
    });
    pixels.forEach((div) => {
        div.addEventListener('click', () => {
            if(mode === 'rainbow'){
                div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
            else if (mode === 'fade'){
                div.style.backgroundColor = color;
                console.log(color);
                let currentDarkness  = div.style.backgroundColor;
                let currentColor = div.style.backgroundColor;
                console.log(currentDarkness);
                console.log(currentColor);
                darker = (Number(currentDarkness) - 10);
                div.style.backgroundColor = `hsl()`
                
            }
            else if (mode === 'pick'){
                div.style.backgroundColor = color;
            }
            else {
                div.style.backgroundColor = color;
            } 
        });
    });

    switchReset();
    switchGrid();
    switchFade();
    switchRainbow();
};


let mode = 'default';
let color = 'hsl(0, 0%, 0%)';

function switchReset (){
    const pixels = document.querySelectorAll('.pixel');
    const resetButton = document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', () => {
        pixels.forEach((div) => {
            div.style.backgroundColor = 'white';
        });
        mode = 'default';
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

function switchFade (){
    const fadeButton = document.querySelector('.fadeBtn');
    fadeBtn.addEventListener('click', () => {
        mode = 'fade';
        console.log(mode);            
    });
};

function switchRainbow (){
    const rainbowButton = document.querySelector('.rainbowBtn');
    rainbowBtn.addEventListener('click', () => {
        mode = 'rainbow';
        console.log(mode);
    });
};

window.onload = () => {
    drawGrid(size);
};


