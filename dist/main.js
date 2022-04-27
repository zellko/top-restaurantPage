/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
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
 // Get the ES6 Module to generate  Home page.

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
    const loadHome = () => {
        contentDiv.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)());
    };
    const loadMenu = () => {};
    const loadContact = () => {};

    return { removeContent, loadHome, loadMenu, loadContact }

})();


modifyPageContent.loadHome();

headerLink.forEach(link => link.addEventListener("click", (e) => {
    // When a link or button is clicked...

    const linkValue = e.target.getAttribute("link-value"); // ...Get the link value, the link value define which content need to be loaded
    const loadedContent = contentDiv.lastChild.className; // ...Get the content now loaded on the page by getting is class name


    if (linkValue === loadedContent) return; // If the link clicked is already loaded, ignore the click
    if (loadedContent !== undefined) modifyPageContent.removeContent(); // Remove the loaded content.

    // Load the page content according to user click
    if (linkValue === "menu") {
        console.log("Load Menu - To be added has ES6 Module");
    }
    if (e.target.textContent === "Home") {
        modifyPageContent.loadHome();
    };
    if (e.target.textContent === "Contact Us") {
        console.log("Load Menu - To be added has ES6 Module");
    };
}));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkMsQ0FBQzs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdEQUFjO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQSxhQUFhOztBQUViLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7O0FBRUEsMkRBQTJEO0FBQzNELDBEQUEwRDs7O0FBRzFELDZDQUE2QztBQUM3Qyx3RUFBd0U7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnN0IGNyZWF0ZUhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVEaXYuY2xhc3NOYW1lID0gXCJob21lXCI7XG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbG9nby5zcmMgPSBcIi4uL3NyYy9zcHJvdXQucG5nXCI7XG4gICAgbG9nby5hbHQgPSBcIlJlc3RhdXJhbnQgTG9nb1wiO1xuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJZR0dEUkFTSUxcIjtcbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNwYWNlci5jbGFzc05hbWUgPSBcInNwYWNlclwiO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJMT05ET04nUyBQUkVNSUVSIFBMQU5URUhPVVNFXCI7XG4gICAgY29uc3QgYm9va05vd0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYm9va05vd0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQk9PSyBOT1dcIjtcblxuICAgIGhvbWVEaXYuYXBwZW5kKGxvZ28sIHJlc3RhdXJhbnROYW1lLCBzcGFjZXIsIHRleHQsIGJvb2tOb3dCdXR0b24pO1xuICAgIC8vIGhvbWVEaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIHJldHVybiBob21lRGl2O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZS5qc1wiOyAvLyBHZXQgdGhlIEVTNiBNb2R1bGUgdG8gZ2VuZXJhdGUgIEhvbWUgcGFnZS5cblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IGhlYWRlckxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlciBsaVwiKTtcblxuY29uc3QgbW9kaWZ5UGFnZUNvbnRlbnQgPSAoKCkgPT4ge1xuICAgIC8vIE1vZHVsZSB0byBtb2RpZnkgdGhlIERPTSBvZiB0aGUgcGFnZS4uLlxuICAgIC8vIC4uLnJlbW92ZSB0aGUgbG9hZGVkIGNvbnRlbnRcbiAgICAvLyAuLi5sb2FkIHRoZSBuZXcgY29udGVudFxuXG4gICAgY29uc3QgcmVtb3ZlQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudFRvUmVtb3ZlID0gY29udGVudERpdi5sYXN0Q2hpbGQ7XG4gICAgICAgIGNvbnRlbnREaXYucmVtb3ZlQ2hpbGQoY29udGVudFRvUmVtb3ZlKTtcbiAgICB9O1xuICAgIGNvbnN0IGxvYWRIb21lID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVQYWdlKCkpO1xuICAgIH07XG4gICAgY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7fTtcbiAgICBjb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHt9O1xuXG4gICAgcmV0dXJuIHsgcmVtb3ZlQ29udGVudCwgbG9hZEhvbWUsIGxvYWRNZW51LCBsb2FkQ29udGFjdCB9XG5cbn0pKCk7XG5cblxubW9kaWZ5UGFnZUNvbnRlbnQubG9hZEhvbWUoKTtcblxuaGVhZGVyTGluay5mb3JFYWNoKGxpbmsgPT4gbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAvLyBXaGVuIGEgbGluayBvciBidXR0b24gaXMgY2xpY2tlZC4uLlxuXG4gICAgY29uc3QgbGlua1ZhbHVlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwibGluay12YWx1ZVwiKTsgLy8gLi4uR2V0IHRoZSBsaW5rIHZhbHVlLCB0aGUgbGluayB2YWx1ZSBkZWZpbmUgd2hpY2ggY29udGVudCBuZWVkIHRvIGJlIGxvYWRlZFxuICAgIGNvbnN0IGxvYWRlZENvbnRlbnQgPSBjb250ZW50RGl2Lmxhc3RDaGlsZC5jbGFzc05hbWU7IC8vIC4uLkdldCB0aGUgY29udGVudCBub3cgbG9hZGVkIG9uIHRoZSBwYWdlIGJ5IGdldHRpbmcgaXMgY2xhc3MgbmFtZVxuXG5cbiAgICBpZiAobGlua1ZhbHVlID09PSBsb2FkZWRDb250ZW50KSByZXR1cm47IC8vIElmIHRoZSBsaW5rIGNsaWNrZWQgaXMgYWxyZWFkeSBsb2FkZWQsIGlnbm9yZSB0aGUgY2xpY2tcbiAgICBpZiAobG9hZGVkQ29udGVudCAhPT0gdW5kZWZpbmVkKSBtb2RpZnlQYWdlQ29udGVudC5yZW1vdmVDb250ZW50KCk7IC8vIFJlbW92ZSB0aGUgbG9hZGVkIGNvbnRlbnQuXG5cbiAgICAvLyBMb2FkIHRoZSBwYWdlIGNvbnRlbnQgYWNjb3JkaW5nIHRvIHVzZXIgY2xpY2tcbiAgICBpZiAobGlua1ZhbHVlID09PSBcIm1lbnVcIikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWQgTWVudSAtIFRvIGJlIGFkZGVkIGhhcyBFUzYgTW9kdWxlXCIpO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiSG9tZVwiKSB7XG4gICAgICAgIG1vZGlmeVBhZ2VDb250ZW50LmxvYWRIb21lKCk7XG4gICAgfTtcbiAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiQ29udGFjdCBVc1wiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTG9hZCBNZW51IC0gVG8gYmUgYWRkZWQgaGFzIEVTNiBNb2R1bGVcIik7XG4gICAgfTtcbn0pKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=