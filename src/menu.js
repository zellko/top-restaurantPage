const createMenuPage = () => {
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "Menu";

    menuDiv.append(restaurantName);
    // homeDiv.appendChild(restaurantName);
    return menuDiv;
};

export { createMenuPage };