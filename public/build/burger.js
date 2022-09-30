"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["burger"],{

/***/ "./assets/burger.js":
/*!**************************!*\
  !*** ./assets/burger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");

/* burger */

$("#toggle-button").on("click", function () {
  if ($(".list-item1:visible").length != 0) {
    $(".list-item1").slideUp("normal");
  } else {
    $(".list-item2").slideUp("normal");
    $(".list-item1").slideDown("normal");
  }
});
$("#toggle-button-profil").on("click", function () {
  if ($(".list-item2:visible").length != 0) {
    $(".list-item2").slideUp("normal");
  } else {
    $(".list-item1").slideUp("normal");
    $(".list-item2").slideDown("normal");
  }
});

function largeur() {
  if ($(window).width() > 768) {
    $(".list-item1").show();
    $(".list-item2").show();
  } else if ($(window).width() > 425) {
    $(".list-item1").hide();
    $(".list-item2").hide();
  } else {
    $(".list-item1").hide();
    $(".list-item2").hide();
  }
}

$(window).on("resize", function () {
  largeur();
});
largeur();

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["assets_styles_app_css"], () => (__webpack_exec__("./assets/burger.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVyZ2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFDQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JDLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFlBQVk7RUFDeEMsSUFBSUQsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJFLE1BQXpCLElBQW1DLENBQXZDLEVBQTBDO0lBQ3RDRixDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCRyxPQUFqQixDQUF5QixRQUF6QjtFQUNILENBRkQsTUFFTztJQUNMSCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCRyxPQUFqQixDQUF5QixRQUF6QjtJQUNBSCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCSSxTQUFqQixDQUEyQixRQUEzQjtFQUNEO0FBQ0osQ0FQRDtBQVFBSixDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkMsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBWTtFQUNqRCxJQUFJRCxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QkUsTUFBekIsSUFBbUMsQ0FBdkMsRUFBMEM7SUFDdENGLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJHLE9BQWpCLENBQXlCLFFBQXpCO0VBQ0gsQ0FGRCxNQUVPO0lBQ0RILENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJHLE9BQWpCLENBQXlCLFFBQXpCO0lBQ0FILENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJJLFNBQWpCLENBQTJCLFFBQTNCO0VBQ0w7QUFDRixDQVBEOztBQVFBLFNBQVNDLE9BQVQsR0FBbUI7RUFDZixJQUFJTCxDQUFDLENBQUNNLE1BQUQsQ0FBRCxDQUFVQyxLQUFWLEtBQW9CLEdBQXhCLEVBQTZCO0lBQ3pCUCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCUSxJQUFqQjtJQUNBUixDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCUSxJQUFqQjtFQUNILENBSEQsTUFHTyxJQUFJUixDQUFDLENBQUNNLE1BQUQsQ0FBRCxDQUFVQyxLQUFWLEtBQW9CLEdBQXhCLEVBQTZCO0lBQ2xDUCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCUyxJQUFqQjtJQUNBVCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCUyxJQUFqQjtFQUNELENBSE0sTUFHQTtJQUNMVCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCUyxJQUFqQjtJQUNBVCxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCUyxJQUFqQjtFQUNEO0FBQ0Y7O0FBQ0hULENBQUMsQ0FBQ00sTUFBRCxDQUFELENBQVVMLEVBQVYsQ0FBYSxRQUFiLEVBQXNCLFlBQVk7RUFDaENJLE9BQU87QUFDUixDQUZEO0FBR0FBLE9BQU87Ozs7Ozs7Ozs7O0FDbENQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2J1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3M/NmJlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG4gICAgICBcclxuLyogYnVyZ2VyICovXHJcbiQoXCIjdG9nZ2xlLWJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKFwiLmxpc3QtaXRlbTE6dmlzaWJsZVwiKS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICQoXCIubGlzdC1pdGVtMVwiKS5zbGlkZVVwKFwibm9ybWFsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5saXN0LWl0ZW0yXCIpLnNsaWRlVXAoXCJub3JtYWxcIik7XHJcbiAgICAgICQoXCIubGlzdC1pdGVtMVwiKS5zbGlkZURvd24oXCJub3JtYWxcIik7XHJcbiAgICB9ICAgIFxyXG59KTtcclxuJChcIiN0b2dnbGUtYnV0dG9uLXByb2ZpbFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICBpZiAoJChcIi5saXN0LWl0ZW0yOnZpc2libGVcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgJChcIi5saXN0LWl0ZW0yXCIpLnNsaWRlVXAoXCJub3JtYWxcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiLmxpc3QtaXRlbTFcIikuc2xpZGVVcChcIm5vcm1hbFwiKTtcclxuICAgICAgICAkKFwiLmxpc3QtaXRlbTJcIikuc2xpZGVEb3duKFwibm9ybWFsXCIpO1xyXG4gIH0gICAgXHJcbn0pOyAgXHJcbmZ1bmN0aW9uIGxhcmdldXIoKSB7XHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcclxuICAgICAgICAkKFwiLmxpc3QtaXRlbTFcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIubGlzdC1pdGVtMlwiKS5zaG93KCk7XHJcbiAgICB9IGVsc2UgaWYgKCQod2luZG93KS53aWR0aCgpID4gNDI1KSB7XHJcbiAgICAgICQoXCIubGlzdC1pdGVtMVwiKS5oaWRlKCk7XHJcbiAgICAgICQoXCIubGlzdC1pdGVtMlwiKS5oaWRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLmxpc3QtaXRlbTFcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLmxpc3QtaXRlbTJcIikuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsZnVuY3Rpb24gKCkge1xyXG4gIGxhcmdldXIoKVxyXG59KTtcclxubGFyZ2V1cigpIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIiQiLCJvbiIsImxlbmd0aCIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJsYXJnZXVyIiwid2luZG93Iiwid2lkdGgiLCJzaG93IiwiaGlkZSJdLCJzb3VyY2VSb290IjoiIn0=