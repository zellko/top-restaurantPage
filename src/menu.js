import { cardTemplate } from "./menuCardTemplate.js"; // Get the ES6 Module to generate  Contact page.

const createMenuPage = () => {
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";

    const menuPizzaCard = cardTemplate("pizza");

    for (let i = 0; i < 5; ++i) {
        const text = document.createElement("p");
        text.textContent = "Margherita:  10£";
        menuPizzaCard.lastChild.append(text);
    };


    const menuPastaCard = cardTemplate("pasta");
    for (let i = 0; i < 5; ++i) {
        const text = document.createElement("p");
        text.textContent = "Pesto:  10£";
        menuPastaCard.lastChild.append(text);
    };


    const menuDesertCard = cardTemplate("desert");
    for (let i = 0; i < 5; ++i) {
        const text = document.createElement("p");
        text.textContent = "Pesto:  10£";
        menuDesertCard.lastChild.append(text);
    };

    menuDiv.append(menuPizzaCard, menuPastaCard, menuDesertCard);

    // homeDiv.appendChild(restaurantName);
    return menuDiv;
};

export { createMenuPage };