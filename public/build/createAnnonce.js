(self["webpackChunk"] = self["webpackChunk"] || []).push([["createAnnonce"],{

/***/ "./assets/createAnnonce.js":
/*!*********************************!*\
  !*** ./assets/createAnnonce.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_createAnnonce_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/createAnnonce.css */ "./assets/styles/createAnnonce.css");

 // Script permettant de calculer le prix définitif de façon dynamique

var first = document.getElementById("first");
var result = document.getElementById("result");
var message = document.getElementById("message");
var submit = document.getElementById("submit");
first.addEventListener("input", sum);

function sum() {
  var tempPrice = parseFloat(first.value) + +parseFloat(first.value) * 0.12 + 0.7;
  console.log("Prix avant arrondi   " + tempPrice);
  var modPrice = tempPrice % 1;
  var preFinal;

  if (modPrice > 0 && modPrice < 0.5) {
    preFinal = Math.round(tempPrice) + 0.5;
  } else if (modPrice >= 0.5 && modPrice < 1) {
    preFinal = Math.round(tempPrice);
  }

  var finalPrice = preFinal;
  console.log("Prix après arrondi   " + finalPrice);
  console.log("Reste   " + modPrice);

  if (first.value > 0) {
    result.innerHTML = finalPrice + "€";
    message.innerHTML = "";
    submit.removeAttribute("disabled");
  } else {
    result.innerHTML = "0 €";
  }

  if (first.value >= 100) {
    result.innerHTML = "0 €";
    message.innerHTML = "Nous ne prenons pas en compte votre annonce au-delà de 100€, veuillez nous excuser";
    submit.setAttribute("disabled", true);
  }
}
/* Widget + variables */


$(document).ready(function () {
  var checked = $('#remise')[0];
  var widget = $('#mode')[0];
  $('.villeExpedition').css('display', 'block');
  $(widget).change(function () {
    if (this.checked) {
      $('#remise').removeClass('active');
      $('#mode').addClass('active');
      $('.contenu-widget').addClass('active-contenu');
      $('.villeExpedition').css('display', 'none');
      $('.contenu-widget').css('display', 'block');
    } else if (checked.checked) {
      $('#remise').addClass('active');
      $('#mode').removeClass('active');
      $('.contenu-widget').removeClass('active-contenu');
      $('.villeExpedition').css('display', 'block');
      $('.contenu-widget').css('display', 'none');
    }
  });
  $(checked).change(function () {
    if (this.checked) {
      $('#remise').addClass('active');
      $('#mode').removeClass('active');
      $('.contenu-widget').removeClass('active-contenu');
      $('.villeExpedition').css('display', 'block');
      $('.contenu-widget').css('display', 'none');
    } else if (checked.checked) {
      $('#remise').removeClass('active');
      $('#mode').addClass('active');
      $('.contenu-widget').addClass('active-contenu');
      $('.villeExpedition').css('display', 'none');
      $('.contenu-widget').css('display', 'block');
    }
  });
  /* Charge le widget dans la DIV d'id "Zone_Widget" avec les paramètres indiqués
   * et renverra le Point Relais sélectionné par l'utilisateur dans le champs d'ID "Retour_Widget"  */

  $("#Zone_Widget").MR_ParcelShopPicker({
    Target: "#Retour_Widget",
    // Selecteur JQuery de l'élément dans lequel sera renvoyé l'ID du Point Relais sélectionné (généralement un champ input hidden)   #}
    Brand: "BDTEST13",
    // Votre code client Mondial Relay
    Country: "FR",
    OnParcelShopSelected: function OnParcelShopSelected(data) {
      document.getElementById("create_annonce_expAddress").value = data.Adresse1;
      document.getElementById("create_annonce_ville").value = data.Ville;
      document.getElementById("create_annonce_expZipCode").value = data.CP;
      document.getElementById("create_annonce_expRelId").value = data.ID;
    },
    // Code ISO 2 lettres du pays utilisé pour la recherche
    NbResults: 8,
    ShowResultsOnMap: false,
    Responsive: true,
    CSS: true
  });
}); // page createAnnonce

/**
* @params {File[]} files Array of files to add to the FileList
* @return {FileList}
*/

function FileListItems(files) {
  var b = new ClipboardEvent("").clipboardData || new DataTransfer();

  for (var i = 0, len = files.length; i < len; i++) {
    b.items.add(files[i]);
  }

  return b.files;
}

var inpFile = document.getElementById("get-file");
var previews = document.getElementsByClassName("previmage");
var imagesSetCount = 0;
var imagesSet = [];
inpFile.addEventListener("change", function () {
  if (imagesSetCount >= 3) {
    for (var i = 0; i < previews.length; i++) {
      previews[i].src = "";
      previews[i].style.display = "none";
      imagesSet = [];
      imagesSetCount = 0;
      inpFile.files = null;
    }
  }

  var images = this.files;
  var imageUrls = [];

  var _loop = function _loop(_i) {
    if (images[_i] && imagesSetCount < 3) {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        previews[imagesSetCount].setAttribute('src', this.result);
        imageUrls.push(this.result);
        previews[imagesSetCount].style.display = "flex";
        imagesSetCount++;
        imagesSet.push(images[_i]);
        inpFile.files = new FileListItems(imagesSet);
      });
      reader.readAsDataURL(images[_i]);
    }
  };

  for (var _i = 0; _i < images.length; _i++) {
    _loop(_i);
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var charAt = uncurryThis(''.charAt);
var $parseFloat = global.parseFloat;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ ((module) => {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $parseFloat = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != $parseFloat }, {
  parseFloat: $parseFloat
});


/***/ }),

/***/ "./assets/styles/createAnnonce.css":
/*!*****************************************!*\
  !*** ./assets/styles/createAnnonce.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js"], () => (__webpack_exec__("./assets/createAnnonce.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQW5ub25jZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztDQUVDOztBQUVBLElBQUlBLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxJQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBQ0EsSUFBSUUsT0FBTyxHQUFHSCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZDtBQUNBLElBQUlHLE1BQU0sR0FBR0osUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQUYsS0FBSyxDQUFDTSxnQkFBTixDQUF1QixPQUF2QixFQUFnQ0MsR0FBaEM7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0VBQ2QsSUFBSUMsU0FBUyxHQUFHQyxVQUFVLENBQUNULEtBQUssQ0FBQ1UsS0FBUCxDQUFWLEdBQTBCLENBQUVELFVBQVUsQ0FBQ1QsS0FBSyxDQUFDVSxLQUFQLENBQVosR0FBMEIsSUFBcEQsR0FBMEQsR0FBMUU7RUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQXdCSixTQUFwQztFQUNBLElBQUlLLFFBQVEsR0FBR0wsU0FBUyxHQUFDLENBQXpCO0VBQ0EsSUFBSU0sUUFBSjs7RUFDQSxJQUFHRCxRQUFRLEdBQUcsQ0FBWCxJQUFnQkEsUUFBUSxHQUFFLEdBQTdCLEVBQWlDO0lBQy9CQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixTQUFYLElBQXdCLEdBQW5DO0VBRUQsQ0FIRCxNQUdNLElBQUdLLFFBQVEsSUFBSSxHQUFaLElBQW1CQSxRQUFRLEdBQUUsQ0FBaEMsRUFBbUM7SUFDdkNDLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLFNBQVgsQ0FBWDtFQUNEOztFQUVELElBQUlTLFVBQVUsR0FBR0gsUUFBakI7RUFDQUgsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQXlCSyxVQUFyQztFQUNBTixPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFhQyxRQUF6Qjs7RUFFQSxJQUFJYixLQUFLLENBQUNVLEtBQU4sR0FBYyxDQUFsQixFQUFxQjtJQUNuQlAsTUFBTSxDQUFDZSxTQUFQLEdBQW1CRCxVQUFVLEdBQUcsR0FBaEM7SUFDQ2IsT0FBTyxDQUFDYyxTQUFSLEdBQW9CLEVBQXBCO0lBQ0FiLE1BQU0sQ0FBQ2MsZUFBUCxDQUF1QixVQUF2QjtFQUNELENBSkYsTUFJUTtJQUNMaEIsTUFBTSxDQUFDZSxTQUFQLEdBQW1CLEtBQW5CO0VBQ0Q7O0VBRUQsSUFBSWxCLEtBQUssQ0FBQ1UsS0FBTixJQUFlLEdBQW5CLEVBQXdCO0lBQ3RCUCxNQUFNLENBQUNlLFNBQVAsR0FBbUIsS0FBbkI7SUFDQWQsT0FBTyxDQUFDYyxTQUFSLEdBQW9CLG9GQUFwQjtJQUNBYixNQUFNLENBQUNlLFlBQVAsQ0FBb0IsVUFBcEIsRUFBZ0MsSUFBaEM7RUFDRDtBQUNGO0FBQ0Q7OztBQUdBQyxDQUFDLENBQUNwQixRQUFELENBQUQsQ0FBWXFCLEtBQVosQ0FBa0IsWUFBWTtFQUM1QixJQUFJQyxPQUFPLEdBQUdGLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYSxDQUFiLENBQWQ7RUFDQSxJQUFJRyxNQUFNLEdBQUdILENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVyxDQUFYLENBQWI7RUFDQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JJLEdBQXRCLENBQTBCLFNBQTFCLEVBQXFDLE9BQXJDO0VBQ0FKLENBQUMsQ0FBQ0csTUFBRCxDQUFELENBQVVFLE1BQVYsQ0FBaUIsWUFBWTtJQUMzQixJQUFJLEtBQUtILE9BQVQsRUFBa0I7TUFDaEJGLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYU0sV0FBYixDQUF5QixRQUF6QjtNQUNBTixDQUFDLENBQUMsT0FBRCxDQUFELENBQVdPLFFBQVgsQ0FBb0IsUUFBcEI7TUFDQVAsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJPLFFBQXJCLENBQThCLGdCQUE5QjtNQUNBUCxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkksR0FBdEIsQ0FBMEIsU0FBMUIsRUFBcUMsTUFBckM7TUFDQUosQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJJLEdBQXJCLENBQXlCLFNBQXpCLEVBQW9DLE9BQXBDO0lBQ0QsQ0FORCxNQU1PLElBQUlGLE9BQU8sQ0FBQ0EsT0FBWixFQUFxQjtNQUMxQkYsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhTyxRQUFiLENBQXNCLFFBQXRCO01BQ0FQLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV00sV0FBWCxDQUF1QixRQUF2QjtNQUNBTixDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQk0sV0FBckIsQ0FBaUMsZ0JBQWpDO01BQ0FOLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCSSxHQUF0QixDQUEwQixTQUExQixFQUFxQyxPQUFyQztNQUNBSixDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkksR0FBckIsQ0FBeUIsU0FBekIsRUFBb0MsTUFBcEM7SUFDRDtFQUNGLENBZEQ7RUFlQUosQ0FBQyxDQUFDRSxPQUFELENBQUQsQ0FBV0csTUFBWCxDQUFrQixZQUFZO0lBQzVCLElBQUksS0FBS0gsT0FBVCxFQUFrQjtNQUNoQkYsQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhTyxRQUFiLENBQXNCLFFBQXRCO01BQ0FQLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV00sV0FBWCxDQUF1QixRQUF2QjtNQUNBTixDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQk0sV0FBckIsQ0FBaUMsZ0JBQWpDO01BQ0FOLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCSSxHQUF0QixDQUEwQixTQUExQixFQUFxQyxPQUFyQztNQUNBSixDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkksR0FBckIsQ0FBeUIsU0FBekIsRUFBb0MsTUFBcEM7SUFDRCxDQU5ELE1BTU8sSUFBSUYsT0FBTyxDQUFDQSxPQUFaLEVBQXFCO01BQzFCRixDQUFDLENBQUMsU0FBRCxDQUFELENBQWFNLFdBQWIsQ0FBeUIsUUFBekI7TUFDQU4sQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXTyxRQUFYLENBQW9CLFFBQXBCO01BQ0FQLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTyxRQUFyQixDQUE4QixnQkFBOUI7TUFDQVAsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JJLEdBQXRCLENBQTBCLFNBQTFCLEVBQXFDLE1BQXJDO01BQ0FKLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSSxHQUFyQixDQUF5QixTQUF6QixFQUFvQyxPQUFwQztJQUNEO0VBQ0YsQ0FkRDtFQWVBO0FBQ0g7O0VBRUdKLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JRLG1CQUFsQixDQUFzQztJQUNwQ0MsTUFBTSxFQUFFLGdCQUQ0QjtJQUVwQztJQUNBQyxLQUFLLEVBQUUsVUFINkI7SUFJcEM7SUFDQUMsT0FBTyxFQUFFLElBTDJCO0lBTXBDQyxvQkFBb0IsRUFBRSxTQUFTQSxvQkFBVCxDQUE4QkMsSUFBOUIsRUFBb0M7TUFDeERqQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsMkJBQXhCLEVBQXFEUSxLQUFyRCxHQUE2RHdCLElBQUksQ0FBQ0MsUUFBbEU7TUFDQWxDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0RRLEtBQWhELEdBQXdEd0IsSUFBSSxDQUFDRSxLQUE3RDtNQUNBbkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLDJCQUF4QixFQUFxRFEsS0FBckQsR0FBNkR3QixJQUFJLENBQUNHLEVBQWxFO01BQ0FwQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IseUJBQXhCLEVBQW1EUSxLQUFuRCxHQUEyRHdCLElBQUksQ0FBQ0ksRUFBaEU7SUFDRCxDQVhtQztJQVlwQztJQUNBQyxTQUFTLEVBQUUsQ0FieUI7SUFjcENDLGdCQUFnQixFQUFFLEtBZGtCO0lBZXBDQyxVQUFVLEVBQUUsSUFmd0I7SUFnQnBDQyxHQUFHLEVBQUU7RUFoQitCLENBQXRDO0FBa0JELENBdkRELEdBdURJOztBQUVKO0FBQ0Q7QUFDQTtBQUNBOztBQUVDLFNBQVNDLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0VBQzVCLElBQUlDLENBQUMsR0FBRyxJQUFJQyxjQUFKLENBQW1CLEVBQW5CLEVBQXVCQyxhQUF2QixJQUF3QyxJQUFJQyxZQUFKLEVBQWhEOztFQUVBLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsR0FBRyxHQUFHTixLQUFLLENBQUNPLE1BQTVCLEVBQW9DRixDQUFDLEdBQUdDLEdBQXhDLEVBQTZDRCxDQUFDLEVBQTlDLEVBQWtEO0lBQ2hESixDQUFDLENBQUNPLEtBQUYsQ0FBUUMsR0FBUixDQUFZVCxLQUFLLENBQUNLLENBQUQsQ0FBakI7RUFDRDs7RUFFRCxPQUFPSixDQUFDLENBQUNELEtBQVQ7QUFDRDs7QUFFRCxJQUFJVSxPQUFPLEdBQUdyRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZDtBQUNBLElBQUlxRCxRQUFRLEdBQUd0RCxRQUFRLENBQUN1RCxzQkFBVCxDQUFnQyxXQUFoQyxDQUFmO0FBQ0EsSUFBSUMsY0FBYyxHQUFHLENBQXJCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0FKLE9BQU8sQ0FBQ2hELGdCQUFSLENBQXlCLFFBQXpCLEVBQW1DLFlBQVk7RUFDN0MsSUFBSW1ELGNBQWMsSUFBSSxDQUF0QixFQUF5QjtJQUN2QixLQUFLLElBQUlSLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdNLFFBQVEsQ0FBQ0osTUFBN0IsRUFBcUNGLENBQUMsRUFBdEMsRUFBMEM7TUFDeENNLFFBQVEsQ0FBQ04sQ0FBRCxDQUFSLENBQVlVLEdBQVosR0FBa0IsRUFBbEI7TUFDQUosUUFBUSxDQUFDTixDQUFELENBQVIsQ0FBWVcsS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsTUFBNUI7TUFDQUgsU0FBUyxHQUFHLEVBQVo7TUFDQUQsY0FBYyxHQUFHLENBQWpCO01BQ0FILE9BQU8sQ0FBQ1YsS0FBUixHQUFnQixJQUFoQjtJQUNEO0VBQ0Y7O0VBRUQsSUFBSWtCLE1BQU0sR0FBRyxLQUFLbEIsS0FBbEI7RUFDQSxJQUFJbUIsU0FBUyxHQUFHLEVBQWhCOztFQUVBLElBQUlDLEtBQUssR0FBRyxTQUFTQSxLQUFULENBQWVDLEVBQWYsRUFBbUI7SUFDN0IsSUFBSUgsTUFBTSxDQUFDRyxFQUFELENBQU4sSUFBY1IsY0FBYyxHQUFHLENBQW5DLEVBQXNDO01BQ3BDLElBQUlTLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7TUFDQUQsTUFBTSxDQUFDNUQsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBWTtRQUMxQ2lELFFBQVEsQ0FBQ0UsY0FBRCxDQUFSLENBQXlCckMsWUFBekIsQ0FBc0MsS0FBdEMsRUFBNkMsS0FBS2pCLE1BQWxEO1FBQ0E0RCxTQUFTLENBQUNLLElBQVYsQ0FBZSxLQUFLakUsTUFBcEI7UUFDQW9ELFFBQVEsQ0FBQ0UsY0FBRCxDQUFSLENBQXlCRyxLQUF6QixDQUErQkMsT0FBL0IsR0FBeUMsTUFBekM7UUFDQUosY0FBYztRQUNkQyxTQUFTLENBQUNVLElBQVYsQ0FBZU4sTUFBTSxDQUFDRyxFQUFELENBQXJCO1FBQ0FYLE9BQU8sQ0FBQ1YsS0FBUixHQUFnQixJQUFJRCxhQUFKLENBQWtCZSxTQUFsQixDQUFoQjtNQUNELENBUEQ7TUFRQVEsTUFBTSxDQUFDRyxhQUFQLENBQXFCUCxNQUFNLENBQUNHLEVBQUQsQ0FBM0I7SUFDRDtFQUNGLENBYkQ7O0VBZUEsS0FBSyxJQUFJQSxFQUFFLEdBQUcsQ0FBZCxFQUFpQkEsRUFBRSxHQUFHSCxNQUFNLENBQUNYLE1BQTdCLEVBQXFDYyxFQUFFLEVBQXZDLEVBQTJDO0lBQ3pDRCxLQUFLLENBQUNDLEVBQUQsQ0FBTDtFQUNEO0FBQ0YsQ0FoQ0Q7Ozs7Ozs7Ozs7QUN2SEQsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMscUVBQW9CO0FBQ3hDLGtCQUFrQixtQkFBTyxDQUFDLHFHQUFvQztBQUM5RCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLFdBQVcsNkdBQXdDO0FBQ25ELGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGdDQUFnQzs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7Ozs7Ozs7Ozs7QUNyQkYsa0JBQWtCLG1CQUFPLENBQUMscUdBQW9DO0FBQzlELDZCQUE2QixtQkFBTyxDQUFDLDJHQUF1QztBQUM1RSxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLCtDQUErQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHFCQUFxQjtBQUM5QztBQUNBO0FBQ0EseUJBQXlCLG9CQUFvQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOUJBLGNBQWMsbUJBQU8sQ0FBQyx5RUFBc0I7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNGQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFM0Q7QUFDQTtBQUNBLElBQUksaURBQWlEO0FBQ3JEO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1BEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NyZWF0ZUFubm9uY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2NyZWF0ZUFubm9uY2UuY3NzPzg1MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXMvY3JlYXRlQW5ub25jZS5jc3NcIjtcclxuXHJcbiAvLyBTY3JpcHQgcGVybWV0dGFudCBkZSBjYWxjdWxlciBsZSBwcml4IGTDqWZpbml0aWYgZGUgZmHDp29uIGR5bmFtaXF1ZVxyXG5cclxuIHZhciBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlyc3RcIik7XHJcbiB2YXIgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIik7XHJcbiB2YXIgbWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKTtcclxuIHZhciBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcclxuIGZpcnN0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBzdW0pO1xyXG4gXHJcbiBmdW5jdGlvbiBzdW0oKSB7XHJcbiAgdmFyIHRlbXBQcmljZSA9IHBhcnNlRmxvYXQoZmlyc3QudmFsdWUpICsgKyBwYXJzZUZsb2F0KGZpcnN0LnZhbHVlKSowLjEyICswLjc7XHJcbiAgY29uc29sZS5sb2coXCJQcml4IGF2YW50IGFycm9uZGkgICBcIit0ZW1wUHJpY2UpO1xyXG4gIHZhciBtb2RQcmljZSA9IHRlbXBQcmljZSUxO1xyXG4gIHZhciBwcmVGaW5hbDtcclxuICBpZihtb2RQcmljZSA+IDAgJiYgbW9kUHJpY2UgPDAuNSl7XHJcbiAgICBwcmVGaW5hbCA9IE1hdGgucm91bmQodGVtcFByaWNlKSArIDAuNTtcclxuICAgIFxyXG4gIH1lbHNlIGlmKG1vZFByaWNlID49IDAuNSAmJiBtb2RQcmljZSA8MSApe1xyXG4gICAgcHJlRmluYWwgPSBNYXRoLnJvdW5kKHRlbXBQcmljZSk7XHJcbiAgfVxyXG4gIFxyXG4gIHZhciBmaW5hbFByaWNlID0gcHJlRmluYWw7XHJcbiAgY29uc29sZS5sb2coXCJQcml4IGFwcsOocyBhcnJvbmRpICAgXCIrIGZpbmFsUHJpY2UpO1xyXG4gIGNvbnNvbGUubG9nKFwiUmVzdGUgICBcIiArIG1vZFByaWNlKTtcclxuXHJcbiAgaWYgKGZpcnN0LnZhbHVlID4gMCkge1xyXG4gICAgcmVzdWx0LmlubmVySFRNTCA9IGZpbmFsUHJpY2UgKyBcIuKCrFwiO1xyXG4gICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICBzdWJtaXQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgcmVzdWx0LmlubmVySFRNTCA9IFwiMCDigqxcIjtcclxuICAgfVxyXG4gXHJcbiAgIGlmIChmaXJzdC52YWx1ZSA+PSAxMDApIHtcclxuICAgICByZXN1bHQuaW5uZXJIVE1MID0gXCIwIOKCrFwiO1xyXG4gICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gXCJOb3VzIG5lIHByZW5vbnMgcGFzIGVuIGNvbXB0ZSB2b3RyZSBhbm5vbmNlIGF1LWRlbMOgIGRlIDEwMOKCrCwgdmV1aWxsZXogbm91cyBleGN1c2VyXCI7XHJcbiAgICAgc3VibWl0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICB9XHJcbiB9XHJcbiAvKiBXaWRnZXQgKyB2YXJpYWJsZXMgKi9cclxuIFxyXG4gXHJcbiAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgIHZhciBjaGVja2VkID0gJCgnI3JlbWlzZScpWzBdO1xyXG4gICB2YXIgd2lkZ2V0ID0gJCgnI21vZGUnKVswXTtcclxuICAgJCgnLnZpbGxlRXhwZWRpdGlvbicpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAkKHdpZGdldCkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAkKCcjcmVtaXNlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgJCgnI21vZGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAkKCcuY29udGVudS13aWRnZXQnKS5hZGRDbGFzcygnYWN0aXZlLWNvbnRlbnUnKTtcclxuICAgICAgICQoJy52aWxsZUV4cGVkaXRpb24nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgJCgnLmNvbnRlbnUtd2lkZ2V0JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgfSBlbHNlIGlmIChjaGVja2VkLmNoZWNrZWQpIHtcclxuICAgICAgICQoJyNyZW1pc2UnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAkKCcjbW9kZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICQoJy5jb250ZW51LXdpZGdldCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY29udGVudScpO1xyXG4gICAgICAgJCgnLnZpbGxlRXhwZWRpdGlvbicpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgJCgnLmNvbnRlbnUtd2lkZ2V0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICB9XHJcbiAgIH0pO1xyXG4gICAkKGNoZWNrZWQpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgJCgnI3JlbWlzZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICQoJyNtb2RlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgJCgnLmNvbnRlbnUtd2lkZ2V0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jb250ZW51Jyk7XHJcbiAgICAgICAkKCcudmlsbGVFeHBlZGl0aW9uJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICAkKCcuY29udGVudS13aWRnZXQnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgIH0gZWxzZSBpZiAoY2hlY2tlZC5jaGVja2VkKSB7XHJcbiAgICAgICAkKCcjcmVtaXNlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgJCgnI21vZGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAkKCcuY29udGVudS13aWRnZXQnKS5hZGRDbGFzcygnYWN0aXZlLWNvbnRlbnUnKTtcclxuICAgICAgICQoJy52aWxsZUV4cGVkaXRpb24nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgJCgnLmNvbnRlbnUtd2lkZ2V0JykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgfVxyXG4gICB9KTtcclxuICAgLyogQ2hhcmdlIGxlIHdpZGdldCBkYW5zIGxhIERJViBkJ2lkIFwiWm9uZV9XaWRnZXRcIiBhdmVjIGxlcyBwYXJhbcOodHJlcyBpbmRpcXXDqXNcclxuICAgICogZXQgcmVudmVycmEgbGUgUG9pbnQgUmVsYWlzIHPDqWxlY3Rpb25uw6kgcGFyIGwndXRpbGlzYXRldXIgZGFucyBsZSBjaGFtcHMgZCdJRCBcIlJldG91cl9XaWRnZXRcIiAgKi9cclxuIFxyXG4gICAkKFwiI1pvbmVfV2lkZ2V0XCIpLk1SX1BhcmNlbFNob3BQaWNrZXIoe1xyXG4gICAgIFRhcmdldDogXCIjUmV0b3VyX1dpZGdldFwiLFxyXG4gICAgIC8vIFNlbGVjdGV1ciBKUXVlcnkgZGUgbCfDqWzDqW1lbnQgZGFucyBsZXF1ZWwgc2VyYSByZW52b3nDqSBsJ0lEIGR1IFBvaW50IFJlbGFpcyBzw6lsZWN0aW9ubsOpIChnw6luw6lyYWxlbWVudCB1biBjaGFtcCBpbnB1dCBoaWRkZW4pICAgI31cclxuICAgICBCcmFuZDogXCJCRFRFU1QxM1wiLFxyXG4gICAgIC8vIFZvdHJlIGNvZGUgY2xpZW50IE1vbmRpYWwgUmVsYXlcclxuICAgICBDb3VudHJ5OiBcIkZSXCIsXHJcbiAgICAgT25QYXJjZWxTaG9wU2VsZWN0ZWQ6IGZ1bmN0aW9uIE9uUGFyY2VsU2hvcFNlbGVjdGVkKGRhdGEpIHtcclxuICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlX2Fubm9uY2VfZXhwQWRkcmVzc1wiKS52YWx1ZSA9IGRhdGEuQWRyZXNzZTE7XHJcbiAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9hbm5vbmNlX3ZpbGxlXCIpLnZhbHVlID0gZGF0YS5WaWxsZTtcclxuICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlX2Fubm9uY2VfZXhwWmlwQ29kZVwiKS52YWx1ZSA9IGRhdGEuQ1A7XHJcbiAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZV9hbm5vbmNlX2V4cFJlbElkXCIpLnZhbHVlID0gZGF0YS5JRDtcclxuICAgICB9LFxyXG4gICAgIC8vIENvZGUgSVNPIDIgbGV0dHJlcyBkdSBwYXlzIHV0aWxpc8OpIHBvdXIgbGEgcmVjaGVyY2hlXHJcbiAgICAgTmJSZXN1bHRzOiA4LFxyXG4gICAgIFNob3dSZXN1bHRzT25NYXA6IGZhbHNlLFxyXG4gICAgIFJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgQ1NTOiB0cnVlXHJcbiAgIH0pO1xyXG4gfSk7IC8vIHBhZ2UgY3JlYXRlQW5ub25jZVxyXG4gXHJcbiAvKipcclxuICogQHBhcmFtcyB7RmlsZVtdfSBmaWxlcyBBcnJheSBvZiBmaWxlcyB0byBhZGQgdG8gdGhlIEZpbGVMaXN0XHJcbiAqIEByZXR1cm4ge0ZpbGVMaXN0fVxyXG4gKi9cclxuIFxyXG4gZnVuY3Rpb24gRmlsZUxpc3RJdGVtcyhmaWxlcykge1xyXG4gICB2YXIgYiA9IG5ldyBDbGlwYm9hcmRFdmVudChcIlwiKS5jbGlwYm9hcmREYXRhIHx8IG5ldyBEYXRhVHJhbnNmZXIoKTtcclxuIFxyXG4gICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICBiLml0ZW1zLmFkZChmaWxlc1tpXSk7XHJcbiAgIH1cclxuIFxyXG4gICByZXR1cm4gYi5maWxlcztcclxuIH1cclxuIFxyXG4gdmFyIGlucEZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldC1maWxlXCIpO1xyXG4gdmFyIHByZXZpZXdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByZXZpbWFnZVwiKTtcclxuIHZhciBpbWFnZXNTZXRDb3VudCA9IDA7XHJcbiB2YXIgaW1hZ2VzU2V0ID0gW107XHJcbiBpbnBGaWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICBpZiAoaW1hZ2VzU2V0Q291bnQgPj0gMykge1xyXG4gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJldmlld3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgIHByZXZpZXdzW2ldLnNyYyA9IFwiXCI7XHJcbiAgICAgICBwcmV2aWV3c1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICBpbWFnZXNTZXQgPSBbXTtcclxuICAgICAgIGltYWdlc1NldENvdW50ID0gMDtcclxuICAgICAgIGlucEZpbGUuZmlsZXMgPSBudWxsO1xyXG4gICAgIH1cclxuICAgfVxyXG4gXHJcbiAgIHZhciBpbWFnZXMgPSB0aGlzLmZpbGVzO1xyXG4gICB2YXIgaW1hZ2VVcmxzID0gW107XHJcbiBcclxuICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcclxuICAgICBpZiAoaW1hZ2VzW19pXSAmJiBpbWFnZXNTZXRDb3VudCA8IDMpIHtcclxuICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgcHJldmlld3NbaW1hZ2VzU2V0Q291bnRdLnNldEF0dHJpYnV0ZSgnc3JjJywgdGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICBpbWFnZVVybHMucHVzaCh0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgIHByZXZpZXdzW2ltYWdlc1NldENvdW50XS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgIGltYWdlc1NldENvdW50Kys7XHJcbiAgICAgICAgIGltYWdlc1NldC5wdXNoKGltYWdlc1tfaV0pO1xyXG4gICAgICAgICBpbnBGaWxlLmZpbGVzID0gbmV3IEZpbGVMaXN0SXRlbXMoaW1hZ2VzU2V0KTtcclxuICAgICAgIH0pO1xyXG4gICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1hZ2VzW19pXSk7XHJcbiAgICAgfVxyXG4gICB9O1xyXG4gXHJcbiAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBpbWFnZXMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgX2xvb3AoX2kpO1xyXG4gICB9XHJcbiB9KTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIGNoYXJBdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgJHBhcnNlRmxvYXQgPSBnbG9iYWwucGFyc2VGbG9hdDtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIElURVJBVE9SID0gU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGT1JDRUQgPSAxIC8gJHBhcnNlRmxvYXQod2hpdGVzcGFjZXMgKyAnLTAnKSAhPT0gLUluZmluaXR5XG4gIC8vIE1TIEVkZ2UgMTgtIGJyb2tlbiB3aXRoIGJveGVkIHN5bWJvbHNcbiAgfHwgKElURVJBVE9SICYmICFmYWlscyhmdW5jdGlvbiAoKSB7ICRwYXJzZUZsb2F0KE9iamVjdChJVEVSQVRPUikpOyB9KSk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcGFyc2VmbG9hdC1zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VGbG9hdChzdHJpbmcpIHtcbiAgdmFyIHRyaW1tZWRTdHJpbmcgPSB0cmltKHRvU3RyaW5nKHN0cmluZykpO1xuICB2YXIgcmVzdWx0ID0gJHBhcnNlRmxvYXQodHJpbW1lZFN0cmluZyk7XG4gIHJldHVybiByZXN1bHQgPT09IDAgJiYgY2hhckF0KHRyaW1tZWRTdHJpbmcsIDApID09ICctJyA/IC0wIDogcmVzdWx0O1xufSA6ICRwYXJzZUZsb2F0O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IHRvU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHJlcGxhY2Uoc3RyaW5nLCBsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gcmVwbGFjZShzdHJpbmcsIHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG4gIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDInICtcbiAgJ1xcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRwYXJzZUZsb2F0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlRmxvYXQgIT0gJHBhcnNlRmxvYXQgfSwge1xuICBwYXJzZUZsb2F0OiAkcGFyc2VGbG9hdFxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZmlyc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzdWx0IiwibWVzc2FnZSIsInN1Ym1pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdW0iLCJ0ZW1wUHJpY2UiLCJwYXJzZUZsb2F0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibW9kUHJpY2UiLCJwcmVGaW5hbCIsIk1hdGgiLCJyb3VuZCIsImZpbmFsUHJpY2UiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCIkIiwicmVhZHkiLCJjaGVja2VkIiwid2lkZ2V0IiwiY3NzIiwiY2hhbmdlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIk1SX1BhcmNlbFNob3BQaWNrZXIiLCJUYXJnZXQiLCJCcmFuZCIsIkNvdW50cnkiLCJPblBhcmNlbFNob3BTZWxlY3RlZCIsImRhdGEiLCJBZHJlc3NlMSIsIlZpbGxlIiwiQ1AiLCJJRCIsIk5iUmVzdWx0cyIsIlNob3dSZXN1bHRzT25NYXAiLCJSZXNwb25zaXZlIiwiQ1NTIiwiRmlsZUxpc3RJdGVtcyIsImZpbGVzIiwiYiIsIkNsaXBib2FyZEV2ZW50IiwiY2xpcGJvYXJkRGF0YSIsIkRhdGFUcmFuc2ZlciIsImkiLCJsZW4iLCJsZW5ndGgiLCJpdGVtcyIsImFkZCIsImlucEZpbGUiLCJwcmV2aWV3cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbWFnZXNTZXRDb3VudCIsImltYWdlc1NldCIsInNyYyIsInN0eWxlIiwiZGlzcGxheSIsImltYWdlcyIsImltYWdlVXJscyIsIl9sb29wIiwiX2kiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicHVzaCIsInJlYWRBc0RhdGFVUkwiXSwic291cmNlUm9vdCI6IiJ9