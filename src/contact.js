const createContactPage = () => {
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";

    const contactCard = document.createElement("div");
    contactCard.className = "contact-card";

    const contactImage = document.createElement("div");
    contactImage.className = "contact-img";

    // Contact card text content
    const restaurantName = document.createElement("h4");
    restaurantName.textContent = "YGGDRASIL";
    const location = document.createElement("h3");
    location.textContent = "PICCADILLY CIRCUS";
    const spacer = document.createElement("div");
    spacer.className = "spacer";
    const address = document.createElement("p");
    address.textContent = "21 Coventry Street, London, United Kingdom, W1D 7AE";

    const phone = document.createElement("p");
    phone.className = "contact-phone";
    phone.textContent = "+44 123 456 7890";

    const schedule = document.createElement("h5");
    schedule.textContent = "OPENING TIMES";
    const scheduleDay = document.createElement("p");
    scheduleDay.className = "contact-schedule";
    scheduleDay.textContent = "Monday - Saturday: ";

    const scheduleHour = document.createElement("span");
    scheduleHour.textContent = "11am - 11pm";
    scheduleDay.appendChild(scheduleHour);

    contactCard.append(restaurantName, location, spacer, address, phone, schedule, scheduleDay);

    // Contact card image content
    const image = document.createElement("img");
    image.src = "../src/deryn-macey-kPLccIMtS8E-unsplash.jpg";
    image.alt = "Restaurant front image";
    contactImage.appendChild(image);

    // Append contact-card and contact-img
    contactDiv.append(contactCard, contactImage);
    return contactDiv;
};

export { createContactPage };