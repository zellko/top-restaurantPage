const contentDiv = document.querySelector("#content");

const createHomePage = () => {
    const homeDiv = document.createElement("div");
    homeDiv.className = "home";
    const logo = document.createElement("img");
    logo.src = "../src/sprout.png";
    logo.alt = "Restaurant Logo";
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = "YGGDRASIL";
    const spacer = document.createElement("div");
    spacer.className = "spacer";
    const text = document.createElement("p");
    text.textContent = "LONDON'S PREMIER PLANTEHOUSE";
    const bookNowButton = document.createElement("button");
    bookNowButton.textContent = "BOOK NOW";

    homeDiv.append(logo, restaurantName, spacer, text, bookNowButton);
    // homeDiv.appendChild(restaurantName);
    return homeDiv;
};

export { createHomePage };