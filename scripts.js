const board = document.querySelector("#board");
let size = 16;

for (let i = 0; i < size; i ++) {
    const row1 = document.createElement("row1");
    row1.classList.add("row1");
    board.appendChild(row1);

    for (let j = 0; j < size; j++) {
        const pixel = document.createElement("pixel");
        pixel.classList.add("pixel");
        pixel.textContent = "__";
        pixel.style.color = "white";
        pixel.style.backgroundColor = "white";
        pixel.addEventListener("mouseover", function(){
            console.log("mouseover triggered at " + i + " " + j)
            pixel.style.backgroundColor = "black";
            pixel.style.color = "black";
        });
        row1.appendChild(pixel);
    }
}


