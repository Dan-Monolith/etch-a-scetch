// Create the container that will hold the pixels.
// Iterate over an index to get the right grid size.
// Add class and index to each created div and append to container.
const square = document.querySelector('.square');
let divNumber = 256;
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    div.id = i + 1;
    div.textContent = " ";
    document.getElementById("square").appendChild(div);    
}

//const pixels = document.querySelectorAll(".pixel");
//pixels.forEach((div) => {
//    div.addEventListener("mouseover", () => {
//        console.log(div.id);
//    });
//});

// Select all pixels and create a nodeList to loop through to attach eventListeners to.
const pixels = document.querySelectorAll(".pixel");
pixels.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
});

// Add button that sends popup asking for the no. of squares per side. Limit 100.
// New grid must generate in the same total space as before. 
let sizeInput;
const resizeButton = document.querySelector(".resize");
resize.addEventListener("click", () => {
    sizeInput = prompt("How many squares per side?")
});


const resetButton = document.querySelector(".reset");
reset.addEventListener("click", () => {
    pixels.forEach((div) => {
        div.style.backgroundColor = "white";
    });
});