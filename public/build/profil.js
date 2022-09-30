(self["webpackChunk"] = self["webpackChunk"] || []).push([["profil"],{

/***/ "./assets/profil.js":
/*!**************************!*\
  !*** ./assets/profil.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_profil_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/profil.css */ "./assets/styles/profil.css");







var onglets = document.querySelectorAll(".onglets");
var contenu = document.querySelectorAll(".contenus");
var index = 0;
onglets.forEach(function (onglet) {
  onglet.addEventListener("click", function () {
    if (onglet.classList.contains('active')) {
      return;
    } else {
      onglet.classList.add('active');
    }

    index = onglet.getAttribute('data-anim');

    for (var i = 0; i < onglets.length; i++) {
      if (onglets[i].getAttribute('data-anim') != index) {
        onglets[i].classList.remove('active');
      }
    }

    for (var j = 0; j < contenu.length; j++) {
      if (contenu[j].getAttribute('data-anim') == index) {
        contenu[j].classList.add('active-contenu');
        contenu[j].classList.remove('no-active');
      } else {
        contenu[j].classList.remove('active-contenu');
        contenu[j].classList.add('no-active');
      }
    }
  });
});
var texte = document.getElementById("texte");
var result = document.getElementById("result");
texte.addEventListener("click", function (e) {
  e.preventDefault();
  result.innerHTML = "Pour pouvoir créer une annonce vous devez vérifiez votre adresse mail envoyée lors de votre incription";
});
var confirmPopup = document.getElementsByClassName("confirm-popup")[0];
var deleteBtn = document.getElementsByClassName("delete-btn");
var cancelBtn = document.getElementsByClassName("cancel-btn")[0];
var confirmBtn = document.getElementsByClassName("confirm-btn")[0];

var _loop = function _loop(i) {
  deleteBtn[i].addEventListener("click", function () {
    annonceId = parseInt(deleteBtn[i].classList[deleteBtn[i].classList.length - 1]);
    var url = "{{ path('delete_annonce' , {'id': 'annonce.id'})}}";
    url = url.replace("annonce.id", annonceId);
    confirmPopup.style.visibility = "visible";
    confirmBtn.href = url;
    cancelBtn.style.pointerEvents = "auto";
    cancelBtn.style.cursor = "pointer";
    confirmBtn.style.pointerEvents = "auto";
    confirmBtn.style.cursor = "pointer";
  });
};

for (var i = 0; i < deleteBtn.length; i++) {
  _loop(i);
}

cancelBtn.addEventListener("click", function () {
  console.log(confirmBtn.href);
  confirmPopup.style.visibility = "hidden";
  cancelBtn.style.pointerEvents = "none";
  cancelBtn.style.cursor = "default";
  confirmBtn.style.pointerEvents = "none";
  confirmBtn.style.cursor = "default";
});

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),

/***/ "./assets/styles/profil.css":
/*!**********************************!*\
  !*** ./assets/styles/profil.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bd7335","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_str-cc3808"], () => (__webpack_exec__("./assets/profil.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ssS0FBWCxDQUFpQkksTUFBakIsR0FBMEIsU0FBMUI7QUFDRCxDQVBEOzs7Ozs7Ozs7O0FDL0RBLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjtBQUN4QyxrQkFBa0IsbUJBQU8sQ0FBQyxxR0FBb0M7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxXQUFXLDZHQUF3QztBQUNuRCxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDhCQUE4Qjs7QUFFckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7Ozs7Ozs7Ozs7O0FDckJGLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsZ0JBQWdCLG1CQUFPLENBQUMsMkZBQStCOztBQUV2RDtBQUNBO0FBQ0EsSUFBSSw2Q0FBNkM7QUFDakQ7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvcHJvZmlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvcHJvZmlsLmNzcz8xYjIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc3R5bGVzL3Byb2ZpbC5jc3NcIjtcclxuXHJcbnZhciBvbmdsZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vbmdsZXRzXCIpO1xyXG52YXIgY29udGVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudXNcIik7XHJcbnZhciBpbmRleCA9IDA7XHJcblxyXG5vbmdsZXRzLmZvckVhY2goZnVuY3Rpb24gKG9uZ2xldCkge1xyXG4gIG9uZ2xldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICBpZiAob25nbGV0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb25nbGV0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZGV4ID0gb25nbGV0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmltJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbmdsZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChvbmdsZXRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmltJykgIT0gaW5kZXgpIHtcclxuICAgICAgICBvbmdsZXRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb250ZW51Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGlmIChjb250ZW51W2pdLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmltJykgPT0gaW5kZXgpIHtcclxuICAgICAgICBjb250ZW51W2pdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1jb250ZW51Jyk7XHJcbiAgICAgICAgY29udGVudVtqXS5jbGFzc0xpc3QucmVtb3ZlKCduby1hY3RpdmUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb250ZW51W2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1jb250ZW51Jyk7XHJcbiAgICAgICAgY29udGVudVtqXS5jbGFzc0xpc3QuYWRkKCduby1hY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59KTsgXHJcblxyXG52YXIgdGV4dGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRlXCIpO1xyXG52YXIgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIik7XHJcblxyXG50ZXh0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcmVzdWx0LmlubmVySFRNTCA9XHJcbiAgICBcIlBvdXIgcG91dm9pciBjcsOpZXIgdW5lIGFubm9uY2Ugdm91cyBkZXZleiB2w6lyaWZpZXogdm90cmUgYWRyZXNzZSBtYWlsIGVudm95w6llIGxvcnMgZGUgdm90cmUgaW5jcmlwdGlvblwiO1xyXG59KTtcclxuXHJcbmxldCBjb25maXJtUG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29uZmlybS1wb3B1cFwiKVswXTtcclxubGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtYnRuXCIpO1xyXG5sZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhbmNlbC1idG5cIilbMF07XHJcbmxldCBjb25maXJtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbmZpcm0tYnRuXCIpWzBdO1xyXG5mb3IobGV0IGkgPSAwOyBpIDwgZGVsZXRlQnRuLmxlbmd0aDsgaSsrKVxyXG57XHJcbiAgZGVsZXRlQnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBhbm5vbmNlSWQgPSBwYXJzZUludChkZWxldGVCdG5baV0uY2xhc3NMaXN0W2RlbGV0ZUJ0bltpXS5jbGFzc0xpc3QubGVuZ3RoIC0gMV0pO1xyXG4gICAgbGV0IHVybCA9IFwie3sgcGF0aCgnZGVsZXRlX2Fubm9uY2UnICwgeydpZCc6ICdhbm5vbmNlLmlkJ30pfX1cIjtcclxuICAgIHVybCA9IHVybC5yZXBsYWNlKFwiYW5ub25jZS5pZFwiLCBhbm5vbmNlSWQpO1xyXG4gICAgY29uZmlybVBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIGNvbmZpcm1CdG4uaHJlZiA9IHVybDtcclxuICAgIGNhbmNlbEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XHJcbiAgICBjYW5jZWxCdG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICBjb25maXJtQnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcclxuICAgIGNvbmZpcm1CdG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbmZpcm1CdG4uaHJlZik7XHJcbiAgY29uZmlybVBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1x0XHJcbiAgY2FuY2VsQnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICBjYW5jZWxCdG4uc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XHJcbiAgY29uZmlybUJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XHJcbiAgY29uZmlybUJ0bi5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxufSk7IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBJVEVSQVRPUiA9IFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgaGV4ID0gL15bKy1dPzB4L2k7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKGhleC5leGVjKTtcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMlxuICAvLyBNUyBFZGdlIDE4LSBicm9rZW4gd2l0aCBib3hlZCBzeW1ib2xzXG4gIHx8IChJVEVSQVRPUiAmJiAhZmFpbHMoZnVuY3Rpb24gKCkgeyAkcGFyc2VJbnQoT2JqZWN0KElURVJBVE9SKSk7IH0pKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKHRvU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGV4ZWMoaGV4LCBTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkcGFyc2VJbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gJHBhcnNlSW50IH0sIHtcbiAgcGFyc2VJbnQ6ICRwYXJzZUludFxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsib25nbGV0cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRlbnUiLCJpbmRleCIsImZvckVhY2giLCJvbmdsZXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJnZXRBdHRyaWJ1dGUiLCJpIiwibGVuZ3RoIiwicmVtb3ZlIiwiaiIsInRleHRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXN1bHQiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbm5lckhUTUwiLCJjb25maXJtUG9wdXAiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZGVsZXRlQnRuIiwiY2FuY2VsQnRuIiwiY29uZmlybUJ0biIsImFubm9uY2VJZCIsInBhcnNlSW50IiwidXJsIiwicmVwbGFjZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImhyZWYiLCJwb2ludGVyRXZlbnRzIiwiY3Vyc29yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=