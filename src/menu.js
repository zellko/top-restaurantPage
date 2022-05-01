import { cardTemplate } from "./menuCardTemplate.js"; // Get the ES6 Module to generate card template.

const menuData = {
    pizza: {
        Margherita: ["tomato, mozzarella", "10£"],
        Romana: ["tomato, mozzarella, anchovies, oregano, oil)", "12£"],
        Bianca: ["olive oil, salt, rosemary", "14£"],
    },
    pasta: {
        Norma: ["tomatoes, fried eggplant, grated ricotta salata cheese, basil", "10£"],
        Arrabbiata: ["spicy sauce made from garlic, tomato, and red chili peppers cooked in olive oil ", "11£"],
        Nerano: ["fried zucchinis, and provolone del Monaco", "12£"],
    },
    dessert: {
        Biscotti: ["Italian almond biscuits ", "6£"],
        Tiramisu: ["Coffee-flavoured Italian dessert", "7£"],
        Ciambella: ["Italian ring-shaped cake", "8£"],
    },
};

function createDishCard(dishSection, data) {
    // Function to add the "dishes" to each "menu card" (pizza, pasta, dessert)...
    // ...the dished are retrived from "menuData" object
    for (let key in data) {
        const dishCard = document.createElement("div");
        dishCard.className = "dish-card";
        const dishName = document.createElement("p");
        dishName.className = "dish-name";
        const dishIngredients = document.createElement("p");
        dishIngredients.className = "dish-ingr";
        const dishPrice = document.createElement("p");
        dishPrice.className = "dish-price";
        dishName.textContent = key;
        dishIngredients.textContent = data[key][0];
        dishPrice.textContent = data[key][1];
        dishCard.append(dishName, dishIngredients, dishPrice);
        dishSection.lastChild.append(dishCard);
    };
};


const createMenuPage = () => {
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";

    const menuPizzaCard = cardTemplate("pizza");
    createDishCard(menuPizzaCard, menuData.pizza);

    const menuPastaCard = cardTemplate("pasta");
    createDishCard(menuPastaCard, menuData.pasta);

    const menudessertCard = cardTemplate("dessert");
    createDishCard(menudessertCard, menuData.dessert);

    menuDiv.append(menuPizzaCard, menuPastaCard, menudessertCard);

    return menuDiv;
};

export { createMenuPage };