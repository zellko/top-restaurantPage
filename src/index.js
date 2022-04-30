import { createHomePage } from "./home.js"; // Get the ES6 Module to generate  Home page.
import { createMenuPage } from "./menu.js"; // Get the ES6 Module to generate  Menu page.
import { createContactPage } from "./contact.js"; // Get the ES6 Module to generate  Contact page.

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

    const loadContent = (content) => {
        contentDiv.appendChild(content);
    };

    return { removeContent, loadContent }

})();


modifyPageContent.loadContent(createHomePage());


headerLink.forEach(link => link.addEventListener("click", (e) => {
    // When a link or button is clicked...

    const linkValue = e.target.getAttribute("link-value"); // ...Get the link value, the link value define which content need to be loaded
    const loadedContent = contentDiv.lastChild.className; // ...Get the content now loaded on the page by getting is class name


    if (linkValue === loadedContent) return; // If the link clicked is already loaded, ignore the click
    if (loadedContent !== undefined) modifyPageContent.removeContent(); // Remove the loaded content.

    // Load the page content according to user click
    if (e.target.textContent === "Home") {
        console.log("Load Home");
        const homeContent = createHomePage();
        modifyPageContent.loadContent(homeContent);
    };

    if (linkValue === "menu") {
        console.log("Load Menu");
        const menuContent = createMenuPage();
        modifyPageContent.loadContent(menuContent);
    }

    if (e.target.textContent === "Contact Us") {
        console.log("Load Contact");
        const contactContent = createContactPage();
        modifyPageContent.loadContent(contactContent);
    };
}));

contentDiv.addEventListener("click", (e) => {
    console.log(e);
    const parentClass = e.target.parentNode.className;

    console.log(parentClass);
    if (parentClass === "menu-card") {
        const menuText = e.target.parentNode.lastChild;
        menuText.classList.toggle("visible");
        menuText.classList.toggle("hidden");
    };
});