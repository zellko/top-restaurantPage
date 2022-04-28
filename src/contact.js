const createContactPage = () => {
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";

    const contactCard = document.createElement("div");
    contactCard.className = "contact-card";

    const contactImage = document.createElement("div");
    contactImage.className = "contact-card";

    // Contact Card content
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
    const scheduleA = document.createElement("p");
    schedule.textContent = "Monday - Thursday: 11am - 11pm";
    const scheduleB = document.createElement("p");
    schedule.textContent = "Friday - Saturday: 10am - 12am";

    contactCard.append(restaurantName, location, spacer, address, phone, schedule);

    // Image Card content

    // Append contact-card and contact-img
    contactDiv.append(contactCard, contactImage);
    return contactDiv;
};

export { createContactPage };