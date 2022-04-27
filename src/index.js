import { createHomePage } from "./home.js"; // Get the ES6 Module to generate  Home page.

const contentDiv = document.querySelector("#content");
const headerLink = document.querySelectorAll(".header li");

const modifyPageContent = (() => {
    // Module to modify the DOM of the page...
    // ...remove the loaded content
    // ...load the new content

    const removeContent = () => {
        const contentToRemove = contentDiv.lastChild;
        contentDiv.removeChild(contentToRemove);
    };
    const loadHome = () => {
        contentDiv.appendChild(createHomePage());
    };
    const loadMenu = () => {};
    const loadContact = () => {};

    return { removeContent, loadHome, loadMenu, loadContact }

})();


modifyPageContent.loadHome();

headerLink.forEach(link => link.addEventListener("click", (e) => {
    // When a link or button is clicked...

    const linkValue = e.target.getAttribute("link-value"); // ...Get the link value, the link value define which content need to be loaded
    const loadedContent = contentDiv.lastChild.className; // ...Get the content now loaded on the page by getting is class name


    if (linkValue === loadedContent) return; // If the link clicked is already loaded, ignore the click
    if (loadedContent !== undefined) modifyPageContent.removeContent(); // Remove the loaded content.

    // Load the page content according to user click
    if (linkValue === "menu") {
        console.log("Load Menu - To be added has ES6 Module");
    }
    if (e.target.textContent === "Home") {
        modifyPageContent.loadHome();
    };
    if (e.target.textContent === "Contact Us") {
        console.log("Load Menu - To be added has ES6 Module");
    };
}));