const windowHandle = (e) => {
    console.log("window");
};

const clickHandler = (e) => {
    console.log("button");
    e.stopPropagation();
};

const button = document.querySelector(".buy");

button.addEventListener("click", clickHandler);

window.addEventListener("click", windowHandle);
