import { createHomePage } from "./home.js"; // Get the ES6 Module to generate  Home page.
import { createMenuPage } from "./menu.js"; // Get the ES6 Module to generate  Menu page.
import { createContactPage } from "./contact.js"; // Get the ES6 Module to generate  Contact page.
import './style.css'; // Import CSS

const contentDiv = document.querySelector("#content");
const headerLink = document.querySelectorAll(".header li");
const bodyDiv = document.querySelector("body");

const modifyPageContent = (() => {
    // Module to modify the DOM of the page...
    // ...remove the loaded content
    // ...load the new content

    const removeContent = () => {
        const contentToRemove = contentDiv.lastChild;
        contentDiv.removeChild(contentToRemove);
    };

    const loadContent = (content) => {
        contentDiv.appendChild(content);
    };

    return { removeContent, loadContent }

})();

modifyPageContent.loadContent(createHomePage()); // Load the 'home' page at first. 

headerLink.forEach(link => link.addEventListener("click", (e) => {
    // When a link or button is clicked...

    const linkValue = e.target.getAttribute("link-value"); // ...Get the link value, the link value define which content need to be loaded
    const loadedContent = contentDiv.lastChild.className; // ...Get the content now loaded on the page by getting is class name


    if (linkValue === loadedContent) return; // If the link clicked is already loaded, ignore the click
    if (loadedContent !== undefined) modifyPageContent.removeContent(); // Remove the loaded content.

    // Load the page content according to user click
    if (e.target.textContent === "Home") {
        const homeContent = createHomePage();
        modifyPageContent.loadContent(homeContent);
    };

    if (linkValue === "menu") {
        const menuContent = createMenuPage();
        modifyPageContent.loadContent(menuContent);
    }

    if (e.target.textContent === "Contact Us") {
        const contactContent = createContactPage();
        modifyPageContent.loadContent(contactContent);
    };
}));

bodyDiv.addEventListener("click", (e) => {
    // Check when one of then buttons "Book Now" is clicked...

    const loadedContent = contentDiv.lastChild.className; // ...Get the content now loaded on the page by getting is class name

    if ("contact" === loadedContent) return; // If 'contact' page is already loaded, ignore the click

    if (e.target.localName === "button") {
        if (loadedContent !== undefined) modifyPageContent.removeContent(); // Remove the loaded content.
        // Load the 'contact' page content
        const contactContent = createContactPage();
        modifyPageContent.loadContent(contactContent);
    };

});

contentDiv.addEventListener("click", (e) => {
    // Check if one of the "menu card" (Pizza / Pasta / Dessert) is clicked...
    const parentClass = e.target.parentNode.className;

    if (parentClass === "menu-card") {
        const menuText = e.target.parentNode.lastChild;
        // ...Extend the menu card to show the dishes.
        menuText.classList.toggle("visible");
        menuText.classList.toggle("hidden");
    };
});