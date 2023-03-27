const canvass = document.getElementById('canvass');
const sizeSlider = document.getElementById('sizeSlider');
const picker = document.getElementById('picker');
let size = 16;

sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);
picker.oninput = (e) => updateColor(e.target.value);

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`;    
};

function updateColor (newColor) {
    color = newColor;
    mode = 'pick';
};

function clearGrid() {
    canvass.textContent = '';
};

function changeSize(value) {
    size = value;
    clearGrid();
    drawGrid(size);
}
 // Re implement later
//let mouseIsDown = false;
//document.body.onmousedown = () => (mouseIsDown = true);
//document.body.onmouseup = () => (mouseIsDown = false);

function drawGrid(size) {
    const canvass = document.querySelector('.canvass');
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        document.getElementById('canvass').appendChild(div); 
    };

    canvass.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvass.style.gridTemplateRows = `repeat(${size}, 1fr)`;
 
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((div) => {
        div.addEventListener('mouseover', () => {
            //if(mouseIsDown === true) {
                //console.log(mouseIsDown);
                if(mode === 'rainbow') {
                    div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                }
                else if (mode === 'fade') {
                    let currentColor  = div.style.backgroundColor;
                    makeHsl(currentColor);
                    currentColor = `hsl(${H}, ${S}%, ${L}%)`;
                    newL = (L + 5);
                    newColor = `hsl(${H}, ${S}%, ${newL}%)`;
                    div.style.backgroundColor = newColor;  
                }
                else if (mode === 'pick') {
                    div.style.backgroundColor = color;
                }
                else {
                    color = 'hsl(0 0% 0%)';
                    div.style.backgroundColor = color;
                }

            //};    
        });
    });
    pixels.forEach((div) => {
        div.addEventListener('click', () => {
            //console.log(mouseIsDown);
            if(mode === 'rainbow') {
                div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
            else if (mode === 'fade') {
                let currentColor  = div.style.backgroundColor;
                makeHsl(currentColor);
                currentColor = `hsl(${H}, ${S}%, ${L}%)`;
                newL = (L + 5);
                newColor = `hsl(${H}, ${S}%, ${newL}%)`;
                div.style.backgroundColor = newColor;                
            }
            else if (mode === 'pick') {
                div.style.backgroundColor = color;
            }
            else {
                color = 'hsl(0 0% 0%)';
                div.style.backgroundColor = color;
            } 
        });
    });

    switchReset();
    switchGrid();
    switchFade();
    switchRainbow();
};

let red = 'rgb(191, 13, 13)';
let test = 'rgb(0, 0, 255)';

function makeHsl (rgb) {
    rgbExtractor(rgb);
    RGBToHSL(r, g, b);
};

let r;
let g;
let b;

function rgbExtractor (rgb) {
    let onlyBrackets = rgb.slice(3);
    let onlyNumber = onlyBrackets.slice(0, -1);
    let onlyNumbers = onlyNumber.slice(1);
    let newArr = onlyNumbers.split(",");
    r = Number(newArr[0]);
    g = Number(newArr[1]);
    b = Number(newArr[2]);
};

let H;
let S;
let L;

const RGBToHSL = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
      ? l === r
        ? (g - b) / s
        : l === g
        ? 2 + (b - r) / s   
        : 4 + (r - g) / s
      : 0;
    
    H =  60 * h < 0 ? 60 * h + 360 : 60 * h;
    S =  100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0);
    L =  (100 * (2 * l - s)) / 2  
};

let mode = 'default';
let color = 'hsl(0, 0%, 0%)';

function switchReset () {
    const pixels = document.querySelectorAll('.pixel');
    const resetButton = document.querySelector('.resetBtn');
    resetBtn.addEventListener('click', () => {
        pixels.forEach((div) => {
            div.style.backgroundColor = 'white';
        });
        mode = 'default';
        color = 'hsl(0, 0%, 0%)';
    });
};

function switchGrid () {
    const pixels = document.querySelectorAll('.pixel');
    const gridButton = document.querySelector('.gridBtn');
    gridBtn.addEventListener('click', () => {
        pixels.forEach((div) => {
            div.classList.toggle('toggleGrid');
        });
    });
};

function switchFade () {
    const fadeButton = document.querySelector('.fadeBtn');
    fadeBtn.addEventListener('click', () => {
        mode = 'fade';          
    });
};

function switchRainbow () {
    const rainbowButton = document.querySelector('.rainbowBtn');
    rainbowBtn.addEventListener('click', () => {
        mode = 'rainbow';
    });
};

window.onload = () => {
    drawGrid(size);
};


