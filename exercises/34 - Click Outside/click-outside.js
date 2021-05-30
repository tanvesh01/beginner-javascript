console.log("asdasds");

const groupButtons = document.querySelectorAll(".card button");

const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

const handleButtonClick = (e) => {
    console.log("clicked");
    const button = e.currentTarget;
    const card = button.closest(".card");
    const imgSrc = card.querySelector("img").src;
    const desc = card.dataset.description;
    console.log(imgSrc, desc);

    const myHtml = `
    <div>
        <img  src="${imgSrc}" alt="${desc}" />
        <h2> ${desc} </h2>
    </div>
    `;
    modalInner.insertAdjacentHTML("afterbegin", myHtml);
    modalOuter.classList.add("open");
};

groupButtons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

const closeModal = (e) => {
    const isOutside = !e.target.closest(".modal-inner");
    if (isOutside) {
        modalInner.removeChild(modalInner.firstElementChild);
        modalOuter.classList.remove("open");
    }
};

modalOuter.addEventListener("click", closeModal);
