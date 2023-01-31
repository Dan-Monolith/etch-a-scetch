
const square = document.querySelector('.square');
const divNumber = 256;
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.id = i + 1;
    div.textContent = " ";
    document.getElementById("square").appendChild(div);    
}


const pixels = document.querySelectorAll(".pixel");
pixels.forEach((div) => {
    div.addEventListener('click', () => {
        console.log(div.id);
    });
});

