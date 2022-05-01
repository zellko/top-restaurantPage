// Import images
import logo from './reshot-icon-bonsai-tree-45J7TSBRY8.svg';

const createHomePage = () => {
    const homeDiv = document.createElement("div");
    homeDiv.className = "home";
    const logo = document.createElement("img");
    logo.src = logo
    logo.alt = "Restaurant Logo";
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "YGGDRASIL";
    const restaurantStyle = document.createElement("h2");
    restaurantStyle.textContent = "PLANTEHOUSE";
    const spacer = document.createElement("div");
    spacer.className = "spacer";
    const text = document.createElement("h4");
    text.textContent = "LONDON'S PREMIER VEGETARIAN RESTAURANT";
    const bookNowButton = document.createElement("button");
    bookNowButton.textContent = "BOOK NOW";

    homeDiv.append(logo, restaurantName, restaurantStyle, spacer, text, bookNowButton);
    return homeDiv;
};

export { createHomePage };