const link = document.querySelector(".wes");
const form = document.querySelector("[name=signup");

link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("click");
});

form.addEventListener("submit", function(event) {
    console.dir(event.currentTarget.name.value);
    event.preventDefault();
});
