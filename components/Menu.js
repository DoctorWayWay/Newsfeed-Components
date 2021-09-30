// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

// HEADER SELECTOR
const header = document.querySelector("div.header");

// MENU COMPONENT
function menuMaker(arrayOfMenuItems) {
  // Adding component elements
  const menuContainer = document.createElement("div");
  const menuList = document.createElement("ul");
  // Nesting component elements
  menuContainer.appendChild(menuList);
  // Adding classes to the component's elements
  menuContainer.classList.add("menu", "menu--open");
  menuContainer.classList.toggle("menu--open");
  // Adding a click event to the menu button
  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    menuContainer.classList.toggle("menu--open");
  });
  // Toggling off menu--open to prevent menu from starting open
  // Looping append arrayMenuItems' items to menuList
  arrayOfMenuItems.forEach((item) => {
    const menuListItem = document.createElement("li");
    menuListItem.textContent = item;
    menuList.appendChild(menuListItem);
  });
  return menuContainer;
}
// Storing menu navigation into menu variable
const menu = menuMaker(menuItems);

function addMenu(arrayMenu) {
  header.appendChild(arrayMenu);
}
// Adding the menu to the site
addMenu(menu);
