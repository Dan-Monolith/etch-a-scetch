
const square = document.querySelector('.square');
const divNumber = 256;
for (let i = 0; i < 256; i++) {
    const blocks = document.createElement('blocks');
    blocks.classList.add('pixel');
    blocks.id = i + 1;
    blocks.textContent = "1";
    document.getElementById("square").appendChild(blocks);    
}

