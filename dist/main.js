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
    const scheduleDay = document.createElement("p");
    scheduleDay.className = "contact-schedule";
    scheduleDay.textContent = "Monday - Saturday: ";

    const scheduleHour = document.createElement("span");
    scheduleHour.textContent = "11am - 11pm";
    scheduleDay.appendChild(scheduleHour);

    contactCard.append(restaurantName, location, spacer, address, phone, schedule, scheduleDay);

    // Image Card content
    const image = document.createElement("img");
    image.src = "../src/deryn-macey-kPLccIMtS8E-unsplash.jpg";
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
    // homeDiv.appendChild(restaurantName);
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
 // Get the ES6 Module to generate  Contact page.

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


modifyPageContent.loadContent((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)());


headerLink.forEach(link => link.addEventListener("click", (e) => {
    // When a link or button is clicked...

    const linkValue = e.target.getAttribute("link-value"); // ...Get the link value, the link value define which content need to be loaded
    const loadedContent = contentDiv.lastChild.className; // ...Get the content now loaded on the page by getting is class name


    if (linkValue === loadedContent) return; // If the link clicked is already loaded, ignore the click
    if (loadedContent !== undefined) modifyPageContent.removeContent(); // Remove the loaded content.

    // Load the page content according to user click
    if (e.target.textContent === "Home") {
        console.log("Load Home");
        const homeContent = (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();
        modifyPageContent.loadContent(homeContent);
    };

    if (linkValue === "menu") {
        console.log("Load Menu");
        const menuContent = (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)();
        modifyPageContent.loadContent(menuContent);
    }

    if (e.target.textContent === "Contact Us") {
        console.log("Load Contact");
        const contactContent = (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.createContactPage)();
        modifyPageContent.loadContent(contactContent);
    };
}));

contentDiv.addEventListener("click", (e) => {
    console.log(e);
    const parentClass = e.target.parentNode.className;

    console.log(parentClass);
    if (parentClass === "menu-card") {
        const menuText = e.target.parentNode.lastChild;
        menuText.classList.toggle("visible");
        menuText.classList.toggle("hidden");
    };
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJxRCxDQUFDOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsa0VBQVk7QUFDdEM7O0FBRUEsMEJBQTBCLGtFQUFZO0FBQ3RDOztBQUVBLDRCQUE0QixrRUFBWTtBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxhQUFhO0FBQ3hEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yQyxDQUFDO0FBQ0QsQ0FBQztBQUNLLENBQUM7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWIsQ0FBQzs7O0FBR0QsOEJBQThCLHdEQUFjOzs7QUFHNUM7QUFDQTs7QUFFQSwyREFBMkQ7QUFDM0QsMERBQTBEOzs7QUFHMUQsNkNBQTZDO0FBQzdDLHdFQUF3RTs7QUFFeEU7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdEQUFjO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qix3REFBYztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsOERBQWlCO0FBQ2hEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudUNhcmRUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFjdERpdi5jbGFzc05hbWUgPSBcImNvbnRhY3RcIjtcblxuICAgIGNvbnN0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0Q2FyZC5jbGFzc05hbWUgPSBcImNvbnRhY3QtY2FyZFwiO1xuXG4gICAgY29uc3QgY29udGFjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0SW1hZ2UuY2xhc3NOYW1lID0gXCJjb250YWN0LWltZ1wiO1xuXG4gICAgLy8gQ29udGFjdCBDYXJkIGNvbnRlbnRcbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiWUdHRFJBU0lMXCI7XG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBcIlBJQ0NBRElMTFkgQ0lSQ1VTXCI7XG4gICAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcGFjZXIuY2xhc3NOYW1lID0gXCJzcGFjZXJcIjtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMjEgQ292ZW50cnkgU3RyZWV0LCBMb25kb24sIFVuaXRlZCBLaW5nZG9tLCBXMUQgN0FFXCI7XG5cbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBob25lLmNsYXNzTmFtZSA9IFwiY29udGFjdC1waG9uZVwiO1xuICAgIHBob25lLnRleHRDb250ZW50ID0gXCIrNDQgMTIzIDQ1NiA3ODkwXCI7XG5cblxuICAgIGNvbnN0IHNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICAgIHNjaGVkdWxlLnRleHRDb250ZW50ID0gXCJPUEVOSU5HIFRJTUVTXCI7XG4gICAgY29uc3Qgc2NoZWR1bGVEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzY2hlZHVsZURheS5jbGFzc05hbWUgPSBcImNvbnRhY3Qtc2NoZWR1bGVcIjtcbiAgICBzY2hlZHVsZURheS50ZXh0Q29udGVudCA9IFwiTW9uZGF5IC0gU2F0dXJkYXk6IFwiO1xuXG4gICAgY29uc3Qgc2NoZWR1bGVIb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc2NoZWR1bGVIb3VyLnRleHRDb250ZW50ID0gXCIxMWFtIC0gMTFwbVwiO1xuICAgIHNjaGVkdWxlRGF5LmFwcGVuZENoaWxkKHNjaGVkdWxlSG91cik7XG5cbiAgICBjb250YWN0Q2FyZC5hcHBlbmQocmVzdGF1cmFudE5hbWUsIGxvY2F0aW9uLCBzcGFjZXIsIGFkZHJlc3MsIHBob25lLCBzY2hlZHVsZSwgc2NoZWR1bGVEYXkpO1xuXG4gICAgLy8gSW1hZ2UgQ2FyZCBjb250ZW50XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltYWdlLnNyYyA9IFwiLi4vc3JjL2RlcnluLW1hY2V5LWtQTGNjSU10UzhFLXVuc3BsYXNoLmpwZ1wiO1xuICAgIGNvbnRhY3RJbWFnZS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAvLyBBcHBlbmQgY29udGFjdC1jYXJkIGFuZCBjb250YWN0LWltZ1xuICAgIGNvbnRhY3REaXYuYXBwZW5kKGNvbnRhY3RDYXJkLCBjb250YWN0SW1hZ2UpO1xuICAgIHJldHVybiBjb250YWN0RGl2O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfTsiLCJjb25zdCBjcmVhdGVIb21lUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lRGl2LmNsYXNzTmFtZSA9IFwiaG9tZVwiO1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGxvZ28uc3JjID0gXCIuLi9zcmMvcmVzaG90LWljb24tYm9uc2FpLXRyZWUtNDVKN1RTQlJZOC5zdmdcIjtcbiAgICBsb2dvLmFsdCA9IFwiUmVzdGF1cmFudCBMb2dvXCI7XG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIllHR0RSQVNJTFwiO1xuICAgIGNvbnN0IHJlc3RhdXJhbnRTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICByZXN0YXVyYW50U3R5bGUudGV4dENvbnRlbnQgPSBcIlBMQU5URUhPVVNFXCI7XG4gICAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcGFjZXIuY2xhc3NOYW1lID0gXCJzcGFjZXJcIjtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIkxPTkRPTidTIFBSRU1JRVIgVkVHRVRBUklBTiBSRVNUQVVSQU5UXCI7XG4gICAgY29uc3QgYm9va05vd0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYm9va05vd0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQk9PSyBOT1dcIjtcblxuICAgIGhvbWVEaXYuYXBwZW5kKGxvZ28sIHJlc3RhdXJhbnROYW1lLCByZXN0YXVyYW50U3R5bGUsIHNwYWNlciwgdGV4dCwgYm9va05vd0J1dHRvbik7XG4gICAgLy8gaG9tZURpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgcmV0dXJuIGhvbWVEaXY7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVIb21lUGFnZSB9OyIsImltcG9ydCB7IGNhcmRUZW1wbGF0ZSB9IGZyb20gXCIuL21lbnVDYXJkVGVtcGxhdGUuanNcIjsgLy8gR2V0IHRoZSBFUzYgTW9kdWxlIHRvIGdlbmVyYXRlICBDb250YWN0IHBhZ2UuXG5cbmNvbnN0IG1lbnVEYXRhID0ge1xuICAgIHBpenphOiB7XG4gICAgICAgIE1hcmdoZXJpdGE6IFtcInRvbWF0bywgbW96emFyZWxsYVwiLCBcIjEwwqNcIl0sXG4gICAgICAgIFJvbWFuYTogW1widG9tYXRvLCBtb3p6YXJlbGxhLCBhbmNob3ZpZXMsIG9yZWdhbm8sIG9pbClcIiwgXCIxMsKjXCJdLFxuICAgICAgICBCaWFuY2E6IFtcIm9saXZlIG9pbCwgc2FsdCwgcm9zZW1hcnlcIiwgXCIxNMKjXCJdLFxuICAgIH0sXG4gICAgcGFzdGE6IHtcbiAgICAgICAgTm9ybWE6IFtcInRvbWF0b2VzLCBmcmllZCBlZ2dwbGFudCwgZ3JhdGVkIHJpY290dGEgc2FsYXRhIGNoZWVzZSwgYmFzaWxcIiwgXCIxMMKjXCJdLFxuICAgICAgICBBcnJhYmJpYXRhOiBbXCJzcGljeSBzYXVjZSBtYWRlIGZyb20gZ2FybGljLCB0b21hdG8sIGFuZCByZWQgY2hpbGkgcGVwcGVycyBjb29rZWQgaW4gb2xpdmUgb2lsIFwiLCBcIjExwqNcIl0sXG4gICAgICAgIE5lcmFubzogW1wiZnJpZWQgenVjY2hpbmlzLCBhbmQgcHJvdm9sb25lIGRlbCBNb25hY29cIiwgXCIxMsKjXCJdLFxuICAgIH0sXG4gICAgZGVzc2VydDoge1xuICAgICAgICBCaXNjb3R0aTogW1wiSXRhbGlhbiBhbG1vbmQgYmlzY3VpdHMgXCIsIFwiNsKjXCJdLFxuICAgICAgICBUaXJhbWlzdTogW1wiQ29mZmVlLWZsYXZvdXJlZCBJdGFsaWFuIGRlc3NlcnRcIiwgXCI3wqNcIl0sXG4gICAgICAgIENpYW1iZWxsYTogW1wiSXRhbGlhbiByaW5nLXNoYXBlZCBjYWtlXCIsIFwiOMKjXCJdLFxuICAgIH0sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVEaXNoQ2FyZChkaXNoU2VjdGlvbiwgZGF0YSkge1xuICAgIGZvciAobGV0IGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGRpc2hDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGlzaENhcmQuY2xhc3NOYW1lID0gXCJkaXNoLWNhcmRcIjtcbiAgICAgICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGlzaE5hbWUuY2xhc3NOYW1lID0gXCJkaXNoLW5hbWVcIjtcbiAgICAgICAgY29uc3QgZGlzaEluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRpc2hJbmdyZWRpZW50cy5jbGFzc05hbWUgPSBcImRpc2gtaW5nclwiO1xuICAgICAgICBjb25zdCBkaXNoUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGlzaFByaWNlLmNsYXNzTmFtZSA9IFwiZGlzaC1wcmljZVwiO1xuICAgICAgICBkaXNoTmFtZS50ZXh0Q29udGVudCA9IGtleTtcbiAgICAgICAgZGlzaEluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gZGF0YVtrZXldWzBdO1xuICAgICAgICBkaXNoUHJpY2UudGV4dENvbnRlbnQgPSBkYXRhW2tleV1bMV07XG4gICAgICAgIGRpc2hDYXJkLmFwcGVuZChkaXNoTmFtZSwgZGlzaEluZ3JlZGllbnRzLCBkaXNoUHJpY2UpO1xuICAgICAgICBkaXNoU2VjdGlvbi5sYXN0Q2hpbGQuYXBwZW5kKGRpc2hDYXJkKTtcbiAgICB9O1xufTtcblxuXG5jb25zdCBjcmVhdGVNZW51UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RGl2LmNsYXNzTmFtZSA9IFwibWVudVwiO1xuXG4gICAgY29uc3QgbWVudVBpenphQ2FyZCA9IGNhcmRUZW1wbGF0ZShcInBpenphXCIpO1xuICAgIGNyZWF0ZURpc2hDYXJkKG1lbnVQaXp6YUNhcmQsIG1lbnVEYXRhLnBpenphKTtcblxuICAgIGNvbnN0IG1lbnVQYXN0YUNhcmQgPSBjYXJkVGVtcGxhdGUoXCJwYXN0YVwiKTtcbiAgICBjcmVhdGVEaXNoQ2FyZChtZW51UGFzdGFDYXJkLCBtZW51RGF0YS5wYXN0YSk7XG5cbiAgICBjb25zdCBtZW51ZGVzc2VydENhcmQgPSBjYXJkVGVtcGxhdGUoXCJkZXNzZXJ0XCIpO1xuICAgIGNyZWF0ZURpc2hDYXJkKG1lbnVkZXNzZXJ0Q2FyZCwgbWVudURhdGEuZGVzc2VydCk7XG5cbiAgICBtZW51RGl2LmFwcGVuZChtZW51UGl6emFDYXJkLCBtZW51UGFzdGFDYXJkLCBtZW51ZGVzc2VydENhcmQpO1xuXG4gICAgcmV0dXJuIG1lbnVEaXY7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVNZW51UGFnZSB9OyIsImNvbnN0IGNhcmRUZW1wbGF0ZSA9IChpbWdDbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RGl2LmNsYXNzTmFtZSA9IFwibWVudVwiO1xuXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZC5jbGFzc05hbWUgPSBcIm1lbnUtY2FyZFwiO1xuICAgIGNvbnN0IGNhcmRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZEltYWdlLnRleHRDb250ZW50ID0gaW1nQ2xhc3NOYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICBjb25zdCBjYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZEltYWdlLmNsYXNzTmFtZSA9IGBtZW51LWNhcmQtaW1nICR7aW1nQ2xhc3NOYW1lfWA7XG4gICAgY2FyZFRleHQuY2xhc3NOYW1lID0gXCJtZW51LWNhcmQtdGV4dCBoaWRkZW5cIjtcblxuICAgIGNhcmQuYXBwZW5kKGNhcmRJbWFnZSwgY2FyZFRleHQpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59O1xuXG5leHBvcnQgeyBjYXJkVGVtcGxhdGUgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZS5qc1wiOyAvLyBHZXQgdGhlIEVTNiBNb2R1bGUgdG8gZ2VuZXJhdGUgIEhvbWUgcGFnZS5cbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS5qc1wiOyAvLyBHZXQgdGhlIEVTNiBNb2R1bGUgdG8gZ2VuZXJhdGUgIE1lbnUgcGFnZS5cbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdC5qc1wiOyAvLyBHZXQgdGhlIEVTNiBNb2R1bGUgdG8gZ2VuZXJhdGUgIENvbnRhY3QgcGFnZS5cblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IGhlYWRlckxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlciBsaVwiKTtcblxuY29uc3QgbW9kaWZ5UGFnZUNvbnRlbnQgPSAoKCkgPT4ge1xuICAgIC8vIE1vZHVsZSB0byBtb2RpZnkgdGhlIERPTSBvZiB0aGUgcGFnZS4uLlxuICAgIC8vIC4uLnJlbW92ZSB0aGUgbG9hZGVkIGNvbnRlbnRcbiAgICAvLyAuLi5sb2FkIHRoZSBuZXcgY29udGVudFxuXG4gICAgY29uc3QgcmVtb3ZlQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudFRvUmVtb3ZlID0gY29udGVudERpdi5sYXN0Q2hpbGQ7XG4gICAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudFRvUmVtb3ZlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9hZENvbnRlbnQgPSAoY29udGVudCkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyByZW1vdmVDb250ZW50LCBsb2FkQ29udGVudCB9XG5cbn0pKCk7XG5cblxubW9kaWZ5UGFnZUNvbnRlbnQubG9hZENvbnRlbnQoY3JlYXRlSG9tZVBhZ2UoKSk7XG5cblxuaGVhZGVyTGluay5mb3JFYWNoKGxpbmsgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAvLyBXaGVuIGEgbGluayBvciBidXR0b24gaXMgY2xpY2tlZC4uLlxuXG4gICAgY29uc3QgbGlua1ZhbHVlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibGluay12YWx1ZVwiKTsgLy8gLi4uR2V0IHRoZSBsaW5rIHZhbHVlLCB0aGUgbGluayB2YWx1ZSBkZWZpbmUgd2hpY2ggY29udGVudCBuZWVkIHRvIGJlIGxvYWRlZFxuICAgIGNvbnN0IGxvYWRlZENvbnRlbnQgPSBjb250ZW50RGl2Lmxhc3RDaGlsZC5jbGFzc05hbWU7IC8vIC4uLkdldCB0aGUgY29udGVudCBub3cgbG9hZGVkIG9uIHRoZSBwYWdlIGJ5IGdldHRpbmcgaXMgY2xhc3MgbmFtZVxuXG5cbiAgICBpZiAobGlua1ZhbHVlID09PSBsb2FkZWRDb250ZW50KSByZXR1cm47IC8vIElmIHRoZSBsaW5rIGNsaWNrZWQgaXMgYWxyZWFkeSBsb2FkZWQsIGlnbm9yZSB0aGUgY2xpY2tcbiAgICBpZiAobG9hZGVkQ29udGVudCAhPT0gdW5kZWZpbmVkKSBtb2RpZnlQYWdlQ29udGVudC5yZW1vdmVDb250ZW50KCk7IC8vIFJlbW92ZSB0aGUgbG9hZGVkIGNvbnRlbnQuXG5cbiAgICAvLyBMb2FkIHRoZSBwYWdlIGNvbnRlbnQgYWNjb3JkaW5nIHRvIHVzZXIgY2xpY2tcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZCBIb21lXCIpO1xuICAgICAgICBjb25zdCBob21lQ29udGVudCA9IGNyZWF0ZUhvbWVQYWdlKCk7XG4gICAgICAgIG1vZGlmeVBhZ2VDb250ZW50LmxvYWRDb250ZW50KGhvbWVDb250ZW50KTtcbiAgICB9O1xuXG4gICAgaWYgKGxpbmtWYWx1ZSA9PT0gXCJtZW51XCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkIE1lbnVcIik7XG4gICAgICAgIGNvbnN0IG1lbnVDb250ZW50ID0gY3JlYXRlTWVudVBhZ2UoKTtcbiAgICAgICAgbW9kaWZ5UGFnZUNvbnRlbnQubG9hZENvbnRlbnQobWVudUNvbnRlbnQpO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJDb250YWN0IFVzXCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2FkIENvbnRhY3RcIik7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gY3JlYXRlQ29udGFjdFBhZ2UoKTtcbiAgICAgICAgbW9kaWZ5UGFnZUNvbnRlbnQubG9hZENvbnRlbnQoY29udGFjdENvbnRlbnQpO1xuICAgIH07XG59KSk7XG5cbmNvbnRlbnREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgY29uc3QgcGFyZW50Q2xhc3MgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTmFtZTtcblxuICAgIGNvbnNvbGUubG9nKHBhcmVudENsYXNzKTtcbiAgICBpZiAocGFyZW50Q2xhc3MgPT09IFwibWVudS1jYXJkXCIpIHtcbiAgICAgICAgY29uc3QgbWVudVRleHQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmxhc3RDaGlsZDtcbiAgICAgICAgbWVudVRleHQuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gICAgICAgIG1lbnVUZXh0LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==