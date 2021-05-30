// Make a div
const myDiv = document.createElement("div");

// add a class of wrapper to it
myDiv.classList.add("wrapper");

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myUl = document.createElement("ul");
const listItem = document.createElement("li");
listItem.textContent = "one";
const listItem2 = listItem.cloneNode(true);
listItem2.textContent = "two";
const listItem3 = listItem.cloneNode(true);
listItem3.textContent = "three";
// add three list items with the words "one, two, three" in them

myUl.append(listItem);
myUl.append(listItem2);
myUl.append(listItem3);
// put that list into the above wrapper
myDiv.appendChild(myUl);
// create an image

const myImage = document.createElement("img");

// set the source to an image
myImage.src = "https://source.unsplash.com/random/300x300";

// set the width to 250
myImage.width = "250";

// add a class of cute
myImage.classList.add("cute");

// add an alt of Cute Puppy
myImage.alt = "Cute Puppy";

// Append that image to the wrapper
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div>
        <p></p>
        <p></p>
    </div>
`;

myDiv.insertAdjacentHTML("afterbegin", myHTML);

// put this div before the unordered list from above
// myDiv.insertAdjacentHTML("afterbegin", myHTML);

// add a class to the second paragraph called warning
const warningTag = myDiv.firstElementChild;
warningTag.lastElementChild.classList.add("warning");

// remove the first paragraph
warningTag.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const generatePlayerCard = (name, age, height) => {
    return `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>They are ${height} and ${age} years old. 
            In Dog years this person would be ${age * 15}. That would be a tall dog!</p>
            <button id="delete" >Delete</button>
        </div>
    `;
};
// have that function return html that looks like this:
{
    /* <div class="playerCard">
  <h2>NAME — AGE</h2>
  <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
</div> */
}

// make a new div with a class of cards
const card = document.createElement("div");
card.classList.add("cards");

// make 4 player cards using generatePlayerCard
const firstCard = generatePlayerCard("tanvesh", 12, 5);
const secondCard = generatePlayerCard("tanvesh", 13, 6);
const thirdCard = generatePlayerCard("tanvesh", 14, 7);
const fourthCard = generatePlayerCard("tanvesh", 15, 8);

card.insertAdjacentHTML("beforeend", firstCard);
card.insertAdjacentHTML("beforeend", secondCard);
card.insertAdjacentHTML("beforeend", thirdCard);
card.insertAdjacentHTML("beforeend", fourthCard);

// append those cards to the div
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement("beforebegin", card);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
console.log(card.children[0]);

const deleteCard = (index) => {
    console.log(index);
    card.children[index].remove();
};

const deleteArray = document.querySelectorAll("#delete");
for (let i = 0; i < deleteArray.length; i++) {
    const deleteButton = deleteArray[i];
    deleteButton.addEventListener("click", function() {
        deleteCard(i);
    });
}

// select all the buttons!
// make out delete function
// loop over them and attach a listener
