const cardTemplate = (imgClassName) => {
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";

    const card = document.createElement("div");
    card.className = "menu-card";
    const cardImage = document.createElement("div");
    const cardTitle = document.createElement("h1");
    cardTitle.textContent = imgClassName.toUpperCase();

    const cardText = document.createElement("div");
    cardImage.className = `menu-card-img ${imgClassName}`;
    cardText.className = "menu-card-text hidden";
    // pizzaImage.src = "../src/nik-owens-40OJLYVWeeM-unsplash.jpg";
    // pizzaImage.alt = "Image Pizza";

    cardImage.appendChild(cardTitle);
    card.append(cardImage, cardText);


    // homeDiv.appendChild(restaurantName);
    return card;
};

export { cardTemplate };