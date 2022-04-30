const cardTemplate = (imgClassName) => {
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";

    const card = document.createElement("div");
    card.className = "menu-card";
    const cardImage = document.createElement("div");
    cardImage.textContent = imgClassName.toUpperCase();

    const cardText = document.createElement("div");
    cardImage.className = `menu-card-img ${imgClassName}`;
    cardText.className = "menu-card-text hidden";

    card.append(cardImage, cardText);

    return card;
};

export { cardTemplate };