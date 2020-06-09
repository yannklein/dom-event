// console.log("Hello from src/index.js!");



// ////////
// Select DOM elements
// ////////

// with its ID (shinya)
const shinya = document.querySelector("#shinya");
console.log(shinya);
// with its type (h2)
const h2 = document.querySelector("h2");
console.log(h2);
// with its class (group)
const group = document.querySelector(".group");
console.log(group);
// by nest selection (ul of the group)
const ul = group.querySelector("ul");
// const ul = document.querySelector(".group ul");
console.log(ul);
// select multiple elements (all the card)
const cardArray = document.querySelectorAll(".card");
console.log(cardArray);


// ////////
// Modify the DOM
// ////////

// add an HTML element (Simplicruit in list)
ul.insertAdjacentHTML("beforeend", "<li>Simplicruit</li>");

// same but more complex (add Aya!!)
const mediList = document.querySelector("#medi-safe ul");
mediList.insertAdjacentHTML(
  "beforeend",
  `<li>
    <img id="aya" src="https://avatars1.githubusercontent.com/u/60478784?v=4" alt="">
    <p>Ayako</p>
  </li>`
);
// change the element style (group background to green)

// add a class to the element (add text-white)

// remove it

// add it when not exist, remove when exist

// Read/Write for inputs (add a value in the emai input)

// Read/Write element content (on digital-concierge)


// ////////
// Add event listeners
// ////////

// 1. Select aya's picture
const aya = document.getElementById("aya");
const davide = document.getElementById("davide");
// 2. Listen to a click
aya.addEventListener("click", (event) => {
  // 3. Modify the DOM
  // console.log(event);
  davide.classList.toggle("selected");
});

// 1. Select all pictures

// 2. Listen to a click

// 3. Modify the DOM

