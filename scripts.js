const board = document.querySelector("#board");
drawBoard();

function drawBoard(size = 16) {

    for (let i = 0; i < size; i ++) {
        const row1 = document.createElement("row1");
        row1.classList.add("row1");
        board.appendChild(row1);

        for (let j = 0; j < size; j++) {
            const pixel = document.createElement("pixel");
            pixel.classList.add("pixel");
            pixel.textContent = "__";
            pixel.style.color = "grey";
            pixel.style.backgroundColor = "grey";
            pixel.addEventListener("mouseover", function(){
                console.log("mouseover triggered at " + i + " " + j)
                pixel.style.backgroundColor = "black";
                pixel.style.color = "black";
            });
            row1.appendChild(pixel);
        }
    }
}
const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "reset") {
            const pixels = document.querySelectorAll("pixel")
            pixels.forEach((pixel) => {
                pixel.style.color = "grey";
                pixel.style.backgroundColor = "grey";
            });
        }
        else {
            size = prompt("Set size");
            document.querySelector("#board").innerHTML = "";
            if (size > 100) {
                alert("Size too large. Generating 16x16 board.")
                drawBoard();
            }
            else {
                drawBoard(size);
            }
            
        }
    })
})

