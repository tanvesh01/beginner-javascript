console.log("it works?");
// const myPTag = document.createElement("p");
// myPTag.appendChild(document.createTextNode("Tanvesh"));
// console.log(myPTag); // <p></p>

// document.body.appendChild(myPTag);

const ulTag = document.createElement("ul");
const liTag = document.createElement("li");

for (let i = 1; i < 6; i++) {
    let newLiTag = liTag.cloneNode(true);
    newLiTag.style.color = "white";
    newLiTag.style.fontWeight = "700";
    newLiTag.textContent = i.toString();
    ulTag.append(newLiTag);
    console.log(i);
}
liTag.style.color = "white";
console.log(liTag);
console.log(ulTag);

document.body.insertAdjacentElement("afterbegin", ulTag);
