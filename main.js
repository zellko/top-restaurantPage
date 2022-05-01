/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactPage": () => (/* binding */ createContactPage)
/* harmony export */ });
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



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
const createHomePage = () => {
    const homeDiv = document.createElement("div");
    homeDiv.className = "home";
    const logo = document.createElement("img");
    logo.src = "../src/reshot-icon-bonsai-tree-45J7TSBRY8.svg";
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



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuPage": () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _menuCardTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuCardTemplate.js */ "./src/menuCardTemplate.js");
 // Get the ES6 Module to generate card template.

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

    const menuPizzaCard = (0,_menuCardTemplate_js__WEBPACK_IMPORTED_MODULE_0__.cardTemplate)("pizza");
    createDishCard(menuPizzaCard, menuData.pizza);

    const menuPastaCard = (0,_menuCardTemplate_js__WEBPACK_IMPORTED_MODULE_0__.cardTemplate)("pasta");
    createDishCard(menuPastaCard, menuData.pasta);

    const menudessertCard = (0,_menuCardTemplate_js__WEBPACK_IMPORTED_MODULE_0__.cardTemplate)("dessert");
    createDishCard(menudessertCard, menuData.dessert);

    menuDiv.append(menuPizzaCard, menuPastaCard, menudessertCard);

    return menuDiv;
};



/***/ }),

/***/ "./src/menuCardTemplate.js":
/*!*********************************!*\
  !*** ./src/menuCardTemplate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardTemplate": () => (/* binding */ cardTemplate)
/* harmony export */ });
const cardTemplate = (imgClassName) => {
    // Function to create the 3 "menu card" (Pizza, Pasta, Dessert)
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
 // Get the ES6 Module to generate  Home page.
 // Get the ES6 Module to generate  Menu page.
 // Get the ES6 Module to generate  Contact page.

const contentDiv = document.querySelector("#content");
const headerLink = document.querySelectorAll(".header li");
const bodyDiv = document.querySelector("body");

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

modifyPageContent.loadContent((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)()); // Load the 'home' page at first. 

headerLink.forEach(link => link.addEventListener("click", (e) => {
    // When a link or button is clicked...

    const linkValue = e.target.getAttribute("link-value"); // ...Get the link value, the link value define which content need to be loaded
    const loadedContent = contentDiv.lastChild.className; // ...Get the content now loaded on the page by getting is class name


    if (linkValue === loadedContent) return; // If the link clicked is already loaded, ignore the click
    if (loadedContent !== undefined) modifyPageContent.removeContent(); // Remove the loaded content.

    // Load the page content according to user click
    if (e.target.textContent === "Home") {
        const homeContent = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();
        modifyPageContent.loadContent(homeContent);
    };

    if (linkValue === "menu") {
        const menuContent = (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)();
        modifyPageContent.loadContent(menuContent);
    }

    if (e.target.textContent === "Contact Us") {
        const contactContent = (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactPage)();
        modifyPageContent.loadContent(contactContent);
    };
}));

bodyDiv.addEventListener("click", (e) => {
    // Check when one of then buttons "Book Now" is clicked...

    const loadedContent = contentDiv.lastChild.className; // ...Get the content now loaded on the page by getting is class name

    if ("contact" === loadedContent) return; // If 'contact' page is already loaded, ignore the click

    if (e.target.localName === "button") {
        if (loadedContent !== undefined) modifyPageContent.removeContent(); // Remove the loaded content.
        // Load the 'contact' page content
        const contactContent = (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactPage)();
        modifyPageContent.loadContent(contactContent);
    };

});

contentDiv.addEventListener("click", (e) => {
    // Check if one of the "menu card" (Pizza / Pasta / Dessert) is clicked...
    const parentClass = e.target.parentNode.className;

    if (parentClass === "menu-card") {
        const menuText = e.target.parentNode.lastChild;
        // ...Extend the menu card to show the dishes.
        menuText.classList.toggle("visible");
        menuText.classList.toggle("hidden");
    };
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnFELENBQUM7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsa0VBQVk7QUFDdEM7O0FBRUEsMEJBQTBCLGtFQUFZO0FBQ3RDOztBQUVBLDRCQUE0QixrRUFBWTtBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjJDLENBQUM7QUFDRCxDQUFDO0FBQ0ssQ0FBQzs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhOztBQUViLENBQUM7O0FBRUQsOEJBQThCLHdEQUFjLEtBQUs7O0FBRWpEO0FBQ0E7O0FBRUEsMkRBQTJEO0FBQzNELDBEQUEwRDs7O0FBRzFELDZDQUE2QztBQUM3Qyx3RUFBd0U7O0FBRXhFO0FBQ0E7QUFDQSw0QkFBNEIsd0RBQWM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix3REFBYztBQUMxQztBQUNBOztBQUVBO0FBQ0EsK0JBQStCLDhEQUFpQjtBQUNoRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBLDBEQUEwRDs7QUFFMUQsNkNBQTZDOztBQUU3QztBQUNBLDRFQUE0RTtBQUM1RTtBQUNBLCtCQUErQiw4REFBaUI7QUFDaEQ7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudUNhcmRUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdERpdi5jbGFzc05hbWUgPSBcImNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0Q2FyZC5jbGFzc05hbWUgPSBcImNvbnRhY3QtY2FyZFwiO1xuXG4gICAgY29uc3QgY29udGFjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0SW1hZ2UuY2xhc3NOYW1lID0gXCJjb250YWN0LWltZ1wiO1xuXG4gICAgLy8gQ29udGFjdCBjYXJkIHRleHQgY29udGVudFxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJZR0dEUkFTSUxcIjtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiUElDQ0FESUxMWSBDSVJDVVNcIjtcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNwYWNlci5jbGFzc05hbWUgPSBcInNwYWNlclwiO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIyMSBDb3ZlbnRyeSBTdHJlZXQsIExvbmRvbiwgVW5pdGVkIEtpbmdkb20sIFcxRCA3QUVcIjtcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGhvbmUuY2xhc3NOYW1lID0gXCJjb250YWN0LXBob25lXCI7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSBcIis0NCAxMjMgNDU2IDc4OTBcIjtcblxuICAgIGNvbnN0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgIHNjaGVkdWxlLnRleHRDb250ZW50ID0gXCJPUEVOSU5HIFRJTUVTXCI7XG4gICAgY29uc3Qgc2NoZWR1bGVEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzY2hlZHVsZURheS5jbGFzc05hbWUgPSBcImNvbnRhY3Qtc2NoZWR1bGVcIjtcbiAgICBzY2hlZHVsZURheS50ZXh0Q29udGVudCA9IFwiTW9uZGF5IC0gU2F0dXJkYXk6IFwiO1xuXG4gICAgY29uc3Qgc2NoZWR1bGVIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc2NoZWR1bGVIb3VyLnRleHRDb250ZW50ID0gXCIxMWFtIC0gMTFwbVwiO1xuICAgIHNjaGVkdWxlRGF5LmFwcGVuZENoaWxkKHNjaGVkdWxlSG91cik7XG5cbiAgICBjb250YWN0Q2FyZC5hcHBlbmQocmVzdGF1cmFudE5hbWUsIGxvY2F0aW9uLCBzcGFjZXIsIGFkZHJlc3MsIHBob25lLCBzY2hlZHVsZSwgc2NoZWR1bGVEYXkpO1xuXG4gICAgLy8gQ29udGFjdCBjYXJkIGltYWdlIGNvbnRlbnRcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvZGVyeW4tbWFjZXkta1BMY2NJTXRTOEUtdW5zcGxhc2guanBnXCI7XG4gICAgaW1hZ2UuYWx0ID0gXCJSZXN0YXVyYW50IGZyb250IGltYWdlXCI7XG4gICAgY29udGFjdEltYWdlLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgIC8vIEFwcGVuZCBjb250YWN0LWNhcmQgYW5kIGNvbnRhY3QtaW1nXG4gICAgY29udGFjdERpdi5hcHBlbmQoY29udGFjdENhcmQsIGNvbnRhY3RJbWFnZSk7XG4gICAgcmV0dXJuIGNvbnRhY3REaXY7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVDb250YWN0UGFnZSB9OyIsImNvbnN0IGNyZWF0ZUhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVEaXYuY2xhc3NOYW1lID0gXCJob21lXCI7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbG9nby5zcmMgPSBcIi4uL3NyYy9yZXNob3QtaWNvbi1ib25zYWktdHJlZS00NUo3VFNCUlk4LnN2Z1wiO1xuICAgIGxvZ28uYWx0ID0gXCJSZXN0YXVyYW50IExvZ29cIjtcbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiWUdHRFJBU0lMXCI7XG4gICAgY29uc3QgcmVzdGF1cmFudFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHJlc3RhdXJhbnRTdHlsZS50ZXh0Q29udGVudCA9IFwiUExBTlRFSE9VU0VcIjtcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNwYWNlci5jbGFzc05hbWUgPSBcInNwYWNlclwiO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiTE9ORE9OJ1MgUFJFTUlFUiBWRUdFVEFSSUFOIFJFU1RBVVJBTlRcIjtcbiAgICBjb25zdCBib29rTm93QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBib29rTm93QnV0dG9uLnRleHRDb250ZW50ID0gXCJCT09LIE5PV1wiO1xuXG4gICAgaG9tZURpdi5hcHBlbmQobG9nbywgcmVzdGF1cmFudE5hbWUsIHJlc3RhdXJhbnRTdHlsZSwgc3BhY2VyLCB0ZXh0LCBib29rTm93QnV0dG9uKTtcbiAgICByZXR1cm4gaG9tZURpdjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH07IiwiaW1wb3J0IHsgY2FyZFRlbXBsYXRlIH0gZnJvbSBcIi4vbWVudUNhcmRUZW1wbGF0ZS5qc1wiOyAvLyBHZXQgdGhlIEVTNiBNb2R1bGUgdG8gZ2VuZXJhdGUgY2FyZCB0ZW1wbGF0ZS5cblxuY29uc3QgbWVudURhdGEgPSB7XG4gICAgcGl6emE6IHtcbiAgICAgICAgTWFyZ2hlcml0YTogW1widG9tYXRvLCBtb3p6YXJlbGxhXCIsIFwiMTDCo1wiXSxcbiAgICAgICAgUm9tYW5hOiBbXCJ0b21hdG8sIG1venphcmVsbGEsIGFuY2hvdmllcywgb3JlZ2Fubywgb2lsKVwiLCBcIjEywqNcIl0sXG4gICAgICAgIEJpYW5jYTogW1wib2xpdmUgb2lsLCBzYWx0LCByb3NlbWFyeVwiLCBcIjE0wqNcIl0sXG4gICAgfSxcbiAgICBwYXN0YToge1xuICAgICAgICBOb3JtYTogW1widG9tYXRvZXMsIGZyaWVkIGVnZ3BsYW50LCBncmF0ZWQgcmljb3R0YSBzYWxhdGEgY2hlZXNlLCBiYXNpbFwiLCBcIjEwwqNcIl0sXG4gICAgICAgIEFycmFiYmlhdGE6IFtcInNwaWN5IHNhdWNlIG1hZGUgZnJvbSBnYXJsaWMsIHRvbWF0bywgYW5kIHJlZCBjaGlsaSBwZXBwZXJzIGNvb2tlZCBpbiBvbGl2ZSBvaWwgXCIsIFwiMTHCo1wiXSxcbiAgICAgICAgTmVyYW5vOiBbXCJmcmllZCB6dWNjaGluaXMsIGFuZCBwcm92b2xvbmUgZGVsIE1vbmFjb1wiLCBcIjEywqNcIl0sXG4gICAgfSxcbiAgICBkZXNzZXJ0OiB7XG4gICAgICAgIEJpc2NvdHRpOiBbXCJJdGFsaWFuIGFsbW9uZCBiaXNjdWl0cyBcIiwgXCI2wqNcIl0sXG4gICAgICAgIFRpcmFtaXN1OiBbXCJDb2ZmZWUtZmxhdm91cmVkIEl0YWxpYW4gZGVzc2VydFwiLCBcIjfCo1wiXSxcbiAgICAgICAgQ2lhbWJlbGxhOiBbXCJJdGFsaWFuIHJpbmctc2hhcGVkIGNha2VcIiwgXCI4wqNcIl0sXG4gICAgfSxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc2hDYXJkKGRpc2hTZWN0aW9uLCBkYXRhKSB7XG4gICAgLy8gRnVuY3Rpb24gdG8gYWRkIHRoZSBcImRpc2hlc1wiIHRvIGVhY2ggXCJtZW51IGNhcmRcIiAocGl6emEsIHBhc3RhLCBkZXNzZXJ0KS4uLlxuICAgIC8vIC4uLnRoZSBkaXNoZWQgYXJlIHJldHJpdmVkIGZyb20gXCJtZW51RGF0YVwiIG9iamVjdFxuICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGRpc2hDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGlzaENhcmQuY2xhc3NOYW1lID0gXCJkaXNoLWNhcmRcIjtcbiAgICAgICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGlzaE5hbWUuY2xhc3NOYW1lID0gXCJkaXNoLW5hbWVcIjtcbiAgICAgICAgY29uc3QgZGlzaEluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRpc2hJbmdyZWRpZW50cy5jbGFzc05hbWUgPSBcImRpc2gtaW5nclwiO1xuICAgICAgICBjb25zdCBkaXNoUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGlzaFByaWNlLmNsYXNzTmFtZSA9IFwiZGlzaC1wcmljZVwiO1xuICAgICAgICBkaXNoTmFtZS50ZXh0Q29udGVudCA9IGtleTtcbiAgICAgICAgZGlzaEluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gZGF0YVtrZXldWzBdO1xuICAgICAgICBkaXNoUHJpY2UudGV4dENvbnRlbnQgPSBkYXRhW2tleV1bMV07XG4gICAgICAgIGRpc2hDYXJkLmFwcGVuZChkaXNoTmFtZSwgZGlzaEluZ3JlZGllbnRzLCBkaXNoUHJpY2UpO1xuICAgICAgICBkaXNoU2VjdGlvbi5sYXN0Q2hpbGQuYXBwZW5kKGRpc2hDYXJkKTtcbiAgICB9O1xufTtcblxuXG5jb25zdCBjcmVhdGVNZW51UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RGl2LmNsYXNzTmFtZSA9IFwibWVudVwiO1xuXG4gICAgY29uc3QgbWVudVBpenphQ2FyZCA9IGNhcmRUZW1wbGF0ZShcInBpenphXCIpO1xuICAgIGNyZWF0ZURpc2hDYXJkKG1lbnVQaXp6YUNhcmQsIG1lbnVEYXRhLnBpenphKTtcblxuICAgIGNvbnN0IG1lbnVQYXN0YUNhcmQgPSBjYXJkVGVtcGxhdGUoXCJwYXN0YVwiKTtcbiAgICBjcmVhdGVEaXNoQ2FyZChtZW51UGFzdGFDYXJkLCBtZW51RGF0YS5wYXN0YSk7XG5cbiAgICBjb25zdCBtZW51ZGVzc2VydENhcmQgPSBjYXJkVGVtcGxhdGUoXCJkZXNzZXJ0XCIpO1xuICAgIGNyZWF0ZURpc2hDYXJkKG1lbnVkZXNzZXJ0Q2FyZCwgbWVudURhdGEuZGVzc2VydCk7XG5cbiAgICBtZW51RGl2LmFwcGVuZChtZW51UGl6emFDYXJkLCBtZW51UGFzdGFDYXJkLCBtZW51ZGVzc2VydENhcmQpO1xuXG4gICAgcmV0dXJuIG1lbnVEaXY7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVNZW51UGFnZSB9OyIsImNvbnN0IGNhcmRUZW1wbGF0ZSA9IChpbWdDbGFzc05hbWUpID0+IHtcbiAgICAvLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIDMgXCJtZW51IGNhcmRcIiAoUGl6emEsIFBhc3RhLCBEZXNzZXJ0KVxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVEaXYuY2xhc3NOYW1lID0gXCJtZW51XCI7XG5cbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTmFtZSA9IFwibWVudS1jYXJkXCI7XG4gICAgY29uc3QgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkSW1hZ2UudGV4dENvbnRlbnQgPSBpbWdDbGFzc05hbWUudG9VcHBlckNhc2UoKTtcblxuICAgIGNvbnN0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkSW1hZ2UuY2xhc3NOYW1lID0gYG1lbnUtY2FyZC1pbWcgJHtpbWdDbGFzc05hbWV9YDtcbiAgICBjYXJkVGV4dC5jbGFzc05hbWUgPSBcIm1lbnUtY2FyZC10ZXh0IGhpZGRlblwiO1xuXG4gICAgY2FyZC5hcHBlbmQoY2FyZEltYWdlLCBjYXJkVGV4dCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbn07XG5cbmV4cG9ydCB7IGNhcmRUZW1wbGF0ZSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7IC8vIEdldCB0aGUgRVM2IE1vZHVsZSB0byBnZW5lcmF0ZSAgSG9tZSBwYWdlLlxuaW1wb3J0IHsgY3JlYXRlTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51LmpzXCI7IC8vIEdldCB0aGUgRVM2IE1vZHVsZSB0byBnZW5lcmF0ZSAgTWVudSBwYWdlLlxuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7IC8vIEdldCB0aGUgRVM2IE1vZHVsZSB0byBnZW5lcmF0ZSAgQ29udGFjdCBwYWdlLlxuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29uc3QgaGVhZGVyTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyIGxpXCIpO1xuY29uc3QgYm9keURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5jb25zdCBtb2RpZnlQYWdlQ29udGVudCA9ICgoKSA9PiB7XG4gICAgLy8gTW9kdWxlIHRvIG1vZGlmeSB0aGUgRE9NIG9mIHRoZSBwYWdlLi4uXG4gICAgLy8gLi4ucmVtb3ZlIHRoZSBsb2FkZWQgY29udGVudFxuICAgIC8vIC4uLmxvYWQgdGhlIG5ldyBjb250ZW50XG5cbiAgICBjb25zdCByZW1vdmVDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50VG9SZW1vdmUgPSBjb250ZW50RGl2Lmxhc3RDaGlsZDtcbiAgICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50VG9SZW1vdmUpO1xuICAgIH07XG5cbiAgICBjb25zdCBsb2FkQ29udGVudCA9IChjb250ZW50KSA9PiB7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHJlbW92ZUNvbnRlbnQsIGxvYWRDb250ZW50IH1cblxufSkoKTtcblxubW9kaWZ5UGFnZUNvbnRlbnQubG9hZENvbnRlbnQoY3JlYXRlSG9tZVBhZ2UoKSk7IC8vIExvYWQgdGhlICdob21lJyBwYWdlIGF0IGZpcnN0LiBcblxuaGVhZGVyTGluay5mb3JFYWNoKGxpbmsgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAvLyBXaGVuIGEgbGluayBvciBidXR0b24gaXMgY2xpY2tlZC4uLlxuXG4gICAgY29uc3QgbGlua1ZhbHVlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibGluay12YWx1ZVwiKTsgLy8gLi4uR2V0IHRoZSBsaW5rIHZhbHVlLCB0aGUgbGluayB2YWx1ZSBkZWZpbmUgd2hpY2ggY29udGVudCBuZWVkIHRvIGJlIGxvYWRlZFxuICAgIGNvbnN0IGxvYWRlZENvbnRlbnQgPSBjb250ZW50RGl2Lmxhc3RDaGlsZC5jbGFzc05hbWU7IC8vIC4uLkdldCB0aGUgY29udGVudCBub3cgbG9hZGVkIG9uIHRoZSBwYWdlIGJ5IGdldHRpbmcgaXMgY2xhc3MgbmFtZVxuXG5cbiAgICBpZiAobGlua1ZhbHVlID09PSBsb2FkZWRDb250ZW50KSByZXR1cm47IC8vIElmIHRoZSBsaW5rIGNsaWNrZWQgaXMgYWxyZWFkeSBsb2FkZWQsIGlnbm9yZSB0aGUgY2xpY2tcbiAgICBpZiAobG9hZGVkQ29udGVudCAhPT0gdW5kZWZpbmVkKSBtb2RpZnlQYWdlQ29udGVudC5yZW1vdmVDb250ZW50KCk7IC8vIFJlbW92ZSB0aGUgbG9hZGVkIGNvbnRlbnQuXG5cbiAgICAvLyBMb2FkIHRoZSBwYWdlIGNvbnRlbnQgYWNjb3JkaW5nIHRvIHVzZXIgY2xpY2tcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIGNvbnN0IGhvbWVDb250ZW50ID0gY3JlYXRlSG9tZVBhZ2UoKTtcbiAgICAgICAgbW9kaWZ5UGFnZUNvbnRlbnQubG9hZENvbnRlbnQoaG9tZUNvbnRlbnQpO1xuICAgIH07XG5cbiAgICBpZiAobGlua1ZhbHVlID09PSBcIm1lbnVcIikge1xuICAgICAgICBjb25zdCBtZW51Q29udGVudCA9IGNyZWF0ZU1lbnVQYWdlKCk7XG4gICAgICAgIG1vZGlmeVBhZ2VDb250ZW50LmxvYWRDb250ZW50KG1lbnVDb250ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiQ29udGFjdCBVc1wiKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgICAgICAgbW9kaWZ5UGFnZUNvbnRlbnQubG9hZENvbnRlbnQoY29udGFjdENvbnRlbnQpO1xuICAgIH07XG59KSk7XG5cbmJvZHlEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgLy8gQ2hlY2sgd2hlbiBvbmUgb2YgdGhlbiBidXR0b25zIFwiQm9vayBOb3dcIiBpcyBjbGlja2VkLi4uXG5cbiAgICBjb25zdCBsb2FkZWRDb250ZW50ID0gY29udGVudERpdi5sYXN0Q2hpbGQuY2xhc3NOYW1lOyAvLyAuLi5HZXQgdGhlIGNvbnRlbnQgbm93IGxvYWRlZCBvbiB0aGUgcGFnZSBieSBnZXR0aW5nIGlzIGNsYXNzIG5hbWVcblxuICAgIGlmIChcImNvbnRhY3RcIiA9PT0gbG9hZGVkQ29udGVudCkgcmV0dXJuOyAvLyBJZiAnY29udGFjdCcgcGFnZSBpcyBhbHJlYWR5IGxvYWRlZCwgaWdub3JlIHRoZSBjbGlja1xuXG4gICAgaWYgKGUudGFyZ2V0LmxvY2FsTmFtZSA9PT0gXCJidXR0b25cIikge1xuICAgICAgICBpZiAobG9hZGVkQ29udGVudCAhPT0gdW5kZWZpbmVkKSBtb2RpZnlQYWdlQ29udGVudC5yZW1vdmVDb250ZW50KCk7IC8vIFJlbW92ZSB0aGUgbG9hZGVkIGNvbnRlbnQuXG4gICAgICAgIC8vIExvYWQgdGhlICdjb250YWN0JyBwYWdlIGNvbnRlbnRcbiAgICAgICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBjcmVhdGVDb250YWN0UGFnZSgpO1xuICAgICAgICBtb2RpZnlQYWdlQ29udGVudC5sb2FkQ29udGVudChjb250YWN0Q29udGVudCk7XG4gICAgfTtcblxufSk7XG5cbmNvbnRlbnREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgb25lIG9mIHRoZSBcIm1lbnUgY2FyZFwiIChQaXp6YSAvIFBhc3RhIC8gRGVzc2VydCkgaXMgY2xpY2tlZC4uLlxuICAgIGNvbnN0IHBhcmVudENsYXNzID0gZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWU7XG5cbiAgICBpZiAocGFyZW50Q2xhc3MgPT09IFwibWVudS1jYXJkXCIpIHtcbiAgICAgICAgY29uc3QgbWVudVRleHQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmxhc3RDaGlsZDtcbiAgICAgICAgLy8gLi4uRXh0ZW5kIHRoZSBtZW51IGNhcmQgdG8gc2hvdyB0aGUgZGlzaGVzLlxuICAgICAgICBtZW51VGV4dC5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgbWVudVRleHQuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICB9O1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9