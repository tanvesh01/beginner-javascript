console.log("it wro");

const canvas = document.querySelector("#etch-a-sketch");
const clear = document.querySelector(".shake");

const ctx = canvas.getContext("2d");

const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

// start drawing

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

const move = ({ key }) => {
    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x, y);

    switch (key) {
        case "ArrowDown":
            y = y + 10;
            break;
        case "ArrowUp":
            y = y - 10;
            break;
        case "ArrowRight":
            x = x + 10;
            break;
        case "ArrowLeft":
            x = x - 10;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
};

const handleKeyDown = (e) => {
    if (e.key.includes("Arrow")) {
        e.preventDefault();
        move({
            key: e.key,
        });
    }
};

const clearFunction = (e) => {
    ctx.clearRect(0, 0, width, height);
};

clear.addEventListener("click", clearFunction);
window.addEventListener("keydown", handleKeyDown);

console.log(ctx);
