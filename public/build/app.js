(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);

  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);



/***/ }),

/***/ "./assets/annonce.js":
/*!***************************!*\
  !*** ./assets/annonce.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_annonce_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/annonce.css */ "./assets/styles/annonce.css");




var toggleList = document.getElementById("toggle-list");
var listAnnonce = document.getElementById("list-annonce");
var gray = document.getElementById("gray");
toggleList.addEventListener("click", function () {
  if (listAnnonce.className === "col list-annonce active") {
    listAnnonce.className = "col list-annonce inactive";
    gray.className = "bg-gray-inactive row";
  } else {
    listAnnonce.className = "col list-annonce active";
    gray.className = "bg-gray-active row";
  }
});
var images = document.querySelectorAll('image');
var contenu = document.querySelectorAll('contenu');
var index = 0;
images.forEach(function (image) {
  image.addEventListener('click', function () {
    if (image.classList.contains('active')) {
      return;
    } else {
      image.classList.add('active');
    } //OK


    index = image.getAttribute('data-anim');
    console.log("index :", index);

    for (i = 0; i < image.length; i++) {
      if (image[i].getAttribute('data-anim') != index) {
        image[i].classList.remove('active');
      }
    }

    for (j = 0; j < contenu.length; j++) {
      if (contenu[j].getAttribute('data-anim') == index) {
        contenu[j].classList.add('activeContenu');
      } else {
        contenu[j].classList.remove('activeContenu');
      }
    }
  });
});
/* gestion des images annonces */

var miniImage = document.getElementsByClassName("mini-image");
var grandImage = document.getElementById("grand-image");
var confirmPopup = document.getElementsByClassName("confirm-popup")[0];
var deleteBtn = document.getElementsByClassName("delete-btn")[0];
var cancelBtn = document.getElementsByClassName("cancel-btn")[0];
var confirmBtn = document.getElementsByClassName("confirm-btn")[0];

var _loop = function _loop(_i) {
  miniImage[_i].addEventListener("click", function () {
    console.log(grandImage.src);
    console.log(miniImage[_i].src);
    grandImage.src = miniImage[_i].src;
    console.log(grandImage.src);
  });
};

for (var _i = 0; _i < miniImage.length; _i++) {
  _loop(_i);
}

deleteBtn.addEventListener("click", function () {
  confirmPopup.style.visibility = "visible";
  cancelBtn.style.pointerEvents = "auto";
  cancelBtn.style.cursor = "pointer";
  confirmBtn.style.pointerEvents = "auto";
  confirmBtn.style.cursor = "pointer";
});
cancelBtn.addEventListener("click", function () {
  confirmPopup.style.visibility = "hidden";
  cancelBtn.style.pointerEvents = "none";
  cancelBtn.style.cursor = "default";
  confirmBtn.style.pointerEvents = "none";
  confirmBtn.style.cursor = "default";
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger */ "./assets/burger.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ "./assets/slider.js");
/* harmony import */ var _annonce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./annonce */ "./assets/annonce.js");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment */ "./assets/payment.js");
/* harmony import */ var _slidePrix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slidePrix */ "./assets/slidePrix.js");
/* harmony import */ var bs_custom_file_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bs-custom-file-input */ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js");
/* harmony import */ var bs_custom_file_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bs_custom_file_input__WEBPACK_IMPORTED_MODULE_7__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)








var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); //create global $ and jQuery variables


__webpack_require__.g.$ = __webpack_require__.g.jQuery = $;
 // start the Stimulus application
//import "./bootstrap";

bs_custom_file_input__WEBPACK_IMPORTED_MODULE_7___default().init(); //SELECT * FROM `annonce` ORDER BY created_at DESC LIMIT 7

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/burger.js":
/*!**************************!*\
  !*** ./assets/burger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./assets/payment.js":
/*!***************************!*\
  !*** ./assets/payment.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_payment_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/payment.css */ "./assets/styles/payment.css");












/*{# Script Première question #}
 * Quand l'utilisateur clique sur "myBtn", execution de myFunction*/

document.getElementById("myImageId").src = "/img/chevron-down.png";

document.getElementById("myBtn").onclick = function () {
  myFunction();
}; // se charge d'afficher le contenu de myDropdown //


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

  if (document.getElementById("myDropdown").className == "dropdown-content show") {
    document.getElementById("myImageId").src = "/img/chevron-up.png";
    document.getElementById("myImageId").className = "chevron-up";
  } else if (document.getElementById("myDropdown").className == "dropdown-content") {
    document.getElementById("myImageId").src = "/img/chevron-down.png";
    document.getElementById("myImageId").className = "chevron-down";
  }
}

var onglets = Array.from(document.querySelectorAll(".input"));
var contenu = Array.from(document.querySelectorAll(".contenu-widget"));
var indexContent = 1;
var indexBar = 0;

function tabsAnimation(e) {
  var el = e.target;
  contenu[indexContent].classList.remove("active-contenu");
  onglets[indexBar].classList.remove("active");
  indexBar = onglets.indexOf(el);

  if (indexBar === 0) {
    indexContent = 1;
  } else if (indexBar === 1) {
    indexContent = 0;
  }

  contenu[indexContent].classList.add("active-contenu");
  onglets[indexBar].classList.add("active");
}

onglets.forEach(function (onglet) {
  onglet.addEventListener("click", tabsAnimation);
}); //calcul total

var poids = document.getElementById("poids");
var mondial = document.getElementById("mode");
var annoncePrice = document.getElementById("annoncePrice");
var result = document.getElementById("result");
var remiseMainPropre = document.getElementById("remise");
var buy = document.getElementById("buy");
var input = document.querySelector(".input");
mondial.addEventListener("click", total);
remiseMainPropre.addEventListener("click", checked);

function total() {
  var fees;

  var _final;

  if (poids.innerHTML === "0g - 500g") {
    fees = 4.4;
  } else if (poids.innerHTML === "500g - 1kg") {
    fees = 4.9;
  } else if (poids.innerHTML === "1kg - 2kg") {
    fees = 6.4;
  } else if (poids.innerHTML === "2kg - 3kg") {
    fees = 6.6;
  }

  var total = 0.12 * fees + fees + parseFloat(annoncePrice.innerHTML);
  var modPrice = total % 1;
  var preFinal;

  if (modPrice > 0 && modPrice < 0.5) {
    preFinal = Math.round(total) + 0.5;
  } else if (modPrice >= 0.5 && modPrice < 1) {
    preFinal = Math.round(total);
  }

  var finalPrice = preFinal;
  result.innerHTML = "Total " + finalPrice.toString().replace(".", ",") + "€";
  remiseMainPropre.removeAttribute("checked");
  mondial.setAttribute("checked", true);
  buy.innerHTML = "Payer " + finalPrice.toString().replace(".", ",") + "€";
}

function checked() {
  result.innerHTML = "Total " + annoncePrice.innerHTML.toString().replace(".", ",");
  buy.innerHTML = "Payer " + annoncePrice.innerHTML.toString().replace(".", ",");
  remiseMainPropre.setAttribute("checked", true);
  mondial.removeAttribute("checked");
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
      document.getElementById("parcelshopAddress").value = data.Adresse1;
      console.log(document.getElementById("parcelshopAddress").value);
      document.getElementById("parcelshopId").value = data.ID;
      console.log(document.getElementById("parcelshopId").value);
    },
    // Code ISO 2 lettres du pays utilisé pour la recherche
    NbResults: 8,
    ShowResultsOnMap: false,
    Responsive: true,
    CSS: true
  });
});

/***/ }),

/***/ "./assets/slidePrix.js":
/*!*****************************!*\
  !*** ./assets/slidePrix.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nouislider_dist_nouislider_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider/dist/nouislider.css */ "./node_modules/nouislider/dist/nouislider.css");




var sliderPrix = document.getElementById('slidePrix');

if (sliderPrix) {
  var min = document.getElementById('min');
  var max = document.getElementById('max');
  var minValue = Math.floor(parseInt(sliderPrix.dataset.min, 10) / 10) * 10;
  var maxValue = Math.ceil(parseInt(sliderPrix.dataset.max, 10) / 10) * 10;
  var range = nouislider__WEBPACK_IMPORTED_MODULE_2___default().create(sliderPrix, {
    start: [min.value || minValue, max.value || maxValue],
    connect: true,
    step: 10,
    range: {
      'min': minValue,
      'max': maxValue
    }
  });
  range.on('slide', function (values, handle) {
    if (handle === 0) {
      min.value = Math.round(values[0]);
    }

    if (handle === 1) {
      max.value = Math.round(values[1]);
    }
  });
  range.on('end', function (values, handle) {
    if (handle === 0) {
      min.dispatchEvent(new Event('change'));
    } else {
      max.dispatchEvent(new Event('change'));
    }
  });
}

/***/ }),

/***/ "./assets/slider.js":
/*!**************************!*\
  !*** ./assets/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");


$(document).ready(function () {
  var count = $('.item').length;
  var largeurItem = $(".image-annonce").width();
  var lgSlides = largeurItem * count;

  function animSlide() {
    if (count >= 2) {
      $("#slides").animate({
        "margin-left": -largeurItem
      }, 5000, function () {
        var items = $("#slides .item");
        var itemAjoute = items.slice(0, 1);
        $("#slides").append(itemAjoute);
        $("#slides").css("margin-left", "0");
      });
      animSlide();
    }
  }

  function hover() {
    $(".item").on("mouseover", function () {
      $("#slides").clearQueue().stop();
    }).on("mouseleave", function () {
      animSlide();
    });
  }

  function largeur() {
    if (count > 3) {
      if ($(window).width() > 768) {
        var longSl = largeurItem * 6;
      } else if ($(window).width() > 425) {
        var longSl = largeurItem * 3;
      } else {
        var longSl = largeurItem * 2;
      }
    } else {
      var longSl = largeurItem * 2;
    }

    $("#slideshow").css("max-width", longSl + "px");
    $("#slideshow").css("max-height", 400 + "px");
    $("#slides").css("width", lgSlides + "px");
    var item = $("#slideshow .item");
    item.css("max-width", largeurItem);
  }

  $(window).on("resize", function () {
    largeur();
  });
  hover();
  largeur();
  animSlide();
});

/***/ }),

/***/ "./assets/styles/annonce.css":
/*!***********************************!*\
  !*** ./assets/styles/annonce.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/payment.css":
/*!***********************************!*\
  !*** ./assets/styles/payment.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_classof_js-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_internals_advance-string-index_js-node_modules_core-js_internals-bd7335","vendors-node_modules_core-js_internals_check-correctness-of-iteration_js-node_modules_core-js-d3d21d","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_str-cc3808","vendors-node_modules_core-js_modules_es_parse-int_js-node_modules_nouislider_dist_nouislider_-97f145","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bs-custom-file-input_-3829dc","assets_styles_app_css","assets_styles_payment_css","assets_styles_annonce_css"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekYsT0FBTztFQUNQbUYsU0FBUztBQUVWLENBekREOzs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYW5ub25jZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2J1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2xpZGVQcml4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hbm5vbmNlLmNzcz9jYjJkIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz82YmU2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvcGF5bWVudC5jc3M/ZmNlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9zdHlsZXMvYW5ub25jZS5jc3NcIjtcclxuXHJcbmNvbnN0IHRvZ2dsZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1saXN0XCIpO1xyXG5jb25zdCBsaXN0QW5ub25jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1hbm5vbmNlXCIpO1xyXG5jb25zdCBncmF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmF5XCIpO1xyXG50b2dnbGVMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKGxpc3RBbm5vbmNlLmNsYXNzTmFtZSA9PT0gXCJjb2wgbGlzdC1hbm5vbmNlIGFjdGl2ZVwiKSB7XHJcbiAgICBsaXN0QW5ub25jZS5jbGFzc05hbWUgPSBcImNvbCBsaXN0LWFubm9uY2UgaW5hY3RpdmVcIjtcclxuICAgIGdyYXkuY2xhc3NOYW1lID0gXCJiZy1ncmF5LWluYWN0aXZlIHJvd1wiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaXN0QW5ub25jZS5jbGFzc05hbWUgPSBcImNvbCBsaXN0LWFubm9uY2UgYWN0aXZlXCI7XHJcbiAgICBncmF5LmNsYXNzTmFtZSA9IFwiYmctZ3JheS1hY3RpdmUgcm93XCI7XHJcbiAgfVxyXG59KTtcclxuY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1hZ2UnKTtcclxuY29uc3QgY29udGVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NvbnRlbnUnKTtcclxubGV0IGluZGV4ID0gMDtcclxuaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xyXG4gIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuLy9PS1xyXG4gICAgaW5kZXggPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbScpO1xyXG4gICAgY29uc29sZS5sb2coXCJpbmRleCA6XCIsIGluZGV4KTtcclxuICAgIGZvcihpID0gMDsgaSA8IGltYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKGltYWdlW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmltJykgIT0gaW5kZXgpIHtcclxuICAgICAgICBpbWFnZVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yKGogPSAwOyBqIDwgY29udGVudS5sZW5ndGg7IGorKykge1xyXG4gICAgICBpZihjb250ZW51W2pdLmdldEF0dHJpYnV0ZSgnZGF0YS1hbmltJykgPT0gaW5kZXgpIHtcclxuICAgICAgICBjb250ZW51W2pdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUNvbnRlbnUnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb250ZW51W2pdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUNvbnRlbnUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgXHJcbn0pO1xyXG5cclxuICAgICAgICAvKiBnZXN0aW9uIGRlcyBpbWFnZXMgYW5ub25jZXMgKi9cclxuICAgICAgICBcclxuICBsZXQgbWluaUltYWdlID0gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtaW5pLWltYWdlXCIpO1xyXG4gIGxldCBncmFuZEltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmFuZC1pbWFnZVwiKTtcclxuICBsZXQgY29uZmlybVBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbmZpcm0tcG9wdXBcIilbMF07XHJcbiAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtYnRuXCIpWzBdO1xyXG4gIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FuY2VsLWJ0blwiKVswXTtcclxuICBsZXQgY29uZmlybUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb25maXJtLWJ0blwiKVswXTtcclxuXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IG1pbmlJbWFnZS5sZW5ndGg7IGkrKylcclxuICB7XHJcbiAgICBtaW5pSW1hZ2VbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZ3JhbmRJbWFnZS5zcmMpO1xyXG4gICAgICBjb25zb2xlLmxvZyhtaW5pSW1hZ2VbaV0uc3JjKTtcclxuICAgICAgZ3JhbmRJbWFnZS5zcmMgPSBtaW5pSW1hZ2VbaV0uc3JjO1xyXG4gICAgICBjb25zb2xlLmxvZyhncmFuZEltYWdlLnNyYyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uZmlybVBvcHVwLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIGNhbmNlbEJ0bi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XHJcbiAgICBjYW5jZWxCdG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICBjb25maXJtQnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcclxuICAgIGNvbmZpcm1CdG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgfSk7XHJcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHRcclxuICAgIGNvbmZpcm1Qb3B1cC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcdFxyXG4gICAgY2FuY2VsQnRuLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgIGNhbmNlbEJ0bi5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgIGNvbmZpcm1CdG4uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgY29uZmlybUJ0bi5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICB9KTtcclxuIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbmltcG9ydCBcIi4vc3R5bGVzL2FwcC5jc3NcIjtcclxuaW1wb3J0IFwiLi9ib290c3RyYXBcIjtcclxuaW1wb3J0IFwiLi9idXJnZXJcIjtcclxuaW1wb3J0IFwiLi9zbGlkZXJcIjtcclxuaW1wb3J0IFwiLi9hbm5vbmNlXCI7XHJcbmltcG9ydCBcIi4vcGF5bWVudFwiO1xyXG5pbXBvcnQgXCIuL3NsaWRlUHJpeFwiO1xyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vY3JlYXRlIGdsb2JhbCAkIGFuZCBqUXVlcnkgdmFyaWFibGVzXHJcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XHJcblxyXG5pbXBvcnQgYnNDdXN0b21GaWxlSW5wdXQgZnJvbSAnYnMtY3VzdG9tLWZpbGUtaW5wdXQnO1xyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuLy9pbXBvcnQgXCIuL2Jvb3RzdHJhcFwiO1xyXG5ic0N1c3RvbUZpbGVJbnB1dC5pbml0KCk7XHJcbi8vU0VMRUNUICogRlJPTSBgYW5ub25jZWAgT1JERVIgQlkgY3JlYXRlZF9hdCBERVNDIExJTUlUIDdcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuICAgICAgXHJcbi8qIGJ1cmdlciAqL1xyXG4kKFwiI3RvZ2dsZS1idXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJChcIi5saXN0LWl0ZW0xOnZpc2libGVcIikubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAkKFwiLmxpc3QtaXRlbTFcIikuc2xpZGVVcChcIm5vcm1hbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIubGlzdC1pdGVtMlwiKS5zbGlkZVVwKFwibm9ybWFsXCIpO1xyXG4gICAgICAkKFwiLmxpc3QtaXRlbTFcIikuc2xpZGVEb3duKFwibm9ybWFsXCIpO1xyXG4gICAgfSAgICBcclxufSk7XHJcbiQoXCIjdG9nZ2xlLWJ1dHRvbi1wcm9maWxcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKCQoXCIubGlzdC1pdGVtMjp2aXNpYmxlXCIpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICQoXCIubGlzdC1pdGVtMlwiKS5zbGlkZVVwKFwibm9ybWFsXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAgICAgJChcIi5saXN0LWl0ZW0xXCIpLnNsaWRlVXAoXCJub3JtYWxcIik7XHJcbiAgICAgICAgJChcIi5saXN0LWl0ZW0yXCIpLnNsaWRlRG93bihcIm5vcm1hbFwiKTtcclxuICB9ICAgIFxyXG59KTsgIFxyXG5mdW5jdGlvbiBsYXJnZXVyKCkge1xyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XHJcbiAgICAgICAgJChcIi5saXN0LWl0ZW0xXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiLmxpc3QtaXRlbTJcIikuc2hvdygpO1xyXG4gICAgfSBlbHNlIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDQyNSkge1xyXG4gICAgICAkKFwiLmxpc3QtaXRlbTFcIikuaGlkZSgpO1xyXG4gICAgICAkKFwiLmxpc3QtaXRlbTJcIikuaGlkZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5saXN0LWl0ZW0xXCIpLmhpZGUoKTtcclxuICAgICAgJChcIi5saXN0LWl0ZW0yXCIpLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcbiQod2luZG93KS5vbihcInJlc2l6ZVwiLGZ1bmN0aW9uICgpIHtcclxuICBsYXJnZXVyKClcclxufSk7XHJcbmxhcmdldXIoKSIsImltcG9ydCBcIi4vc3R5bGVzL3BheW1lbnQuY3NzXCI7XHJcblxyXG5cclxuLyp7IyBTY3JpcHQgUHJlbWnDqHJlIHF1ZXN0aW9uICN9XHJcbiAqIFF1YW5kIGwndXRpbGlzYXRldXIgY2xpcXVlIHN1ciBcIm15QnRuXCIsIGV4ZWN1dGlvbiBkZSBteUZ1bmN0aW9uKi9cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlJbWFnZUlkXCIpLnNyYyA9IFwiL2ltZy9jaGV2cm9uLWRvd24ucG5nXCI7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15QnRuXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgbXlGdW5jdGlvbigpO1xyXG59OyAvLyBzZSBjaGFyZ2UgZCdhZmZpY2hlciBsZSBjb250ZW51IGRlIG15RHJvcGRvd24gLy9cclxuXHJcblxyXG5mdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEcm9wZG93blwiKS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcclxuXHJcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEcm9wZG93blwiKS5jbGFzc05hbWUgPT0gXCJkcm9wZG93bi1jb250ZW50IHNob3dcIikge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUltYWdlSWRcIikuc3JjID0gXCIvaW1nL2NoZXZyb24tdXAucG5nXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15SW1hZ2VJZFwiKS5jbGFzc05hbWUgPSBcImNoZXZyb24tdXBcIjtcclxuICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlEcm9wZG93blwiKS5jbGFzc05hbWUgPT0gXCJkcm9wZG93bi1jb250ZW50XCIpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlJbWFnZUlkXCIpLnNyYyA9IFwiL2ltZy9jaGV2cm9uLWRvd24ucG5nXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15SW1hZ2VJZFwiKS5jbGFzc05hbWUgPSBcImNoZXZyb24tZG93blwiO1xyXG4gIH1cclxufVxyXG5cclxudmFyIG9uZ2xldHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXRcIikpO1xyXG52YXIgY29udGVudSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250ZW51LXdpZGdldFwiKSk7XHJcbnZhciBpbmRleENvbnRlbnQgPSAxO1xyXG52YXIgaW5kZXhCYXIgPSAwO1xyXG5cclxuZnVuY3Rpb24gdGFic0FuaW1hdGlvbihlKSB7XHJcbiAgdmFyIGVsID0gZS50YXJnZXQ7XHJcbiAgY29udGVudVtpbmRleENvbnRlbnRdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtY29udGVudVwiKTtcclxuICBvbmdsZXRzW2luZGV4QmFyXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGluZGV4QmFyID0gb25nbGV0cy5pbmRleE9mKGVsKTtcclxuXHJcbiAgaWYgKGluZGV4QmFyID09PSAwKSB7XHJcbiAgICBpbmRleENvbnRlbnQgPSAxO1xyXG4gIH0gZWxzZSBpZiAoaW5kZXhCYXIgPT09IDEpIHtcclxuICAgIGluZGV4Q29udGVudCA9IDA7XHJcbiAgfVxyXG5cclxuICBjb250ZW51W2luZGV4Q29udGVudF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1jb250ZW51XCIpO1xyXG4gIG9uZ2xldHNbaW5kZXhCYXJdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbm9uZ2xldHMuZm9yRWFjaChmdW5jdGlvbiAob25nbGV0KSB7XHJcbiAgb25nbGV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YWJzQW5pbWF0aW9uKTtcclxufSk7IC8vY2FsY3VsIHRvdGFsXHJcblxyXG52YXIgcG9pZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvaWRzXCIpO1xyXG52YXIgbW9uZGlhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kZVwiKTtcclxudmFyIGFubm9uY2VQcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5ub25jZVByaWNlXCIpO1xyXG52YXIgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN1bHRcIik7XHJcbnZhciByZW1pc2VNYWluUHJvcHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW1pc2VcIik7XHJcbnZhciBidXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1eVwiKTtcclxudmFyIGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dFwiKTtcclxubW9uZGlhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG90YWwpO1xyXG5yZW1pc2VNYWluUHJvcHJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja2VkKTtcclxuXHJcbmZ1bmN0aW9uIHRvdGFsKCkge1xyXG4gIHZhciBmZWVzO1xyXG5cclxuICB2YXIgX2ZpbmFsO1xyXG5cclxuICBpZiAocG9pZHMuaW5uZXJIVE1MID09PSBcIjBnIC0gNTAwZ1wiKSB7XHJcbiAgICBmZWVzID0gNC40O1xyXG4gIH0gZWxzZSBpZiAocG9pZHMuaW5uZXJIVE1MID09PSBcIjUwMGcgLSAxa2dcIikge1xyXG4gICAgZmVlcyA9IDQuOTtcclxuICB9IGVsc2UgaWYgKHBvaWRzLmlubmVySFRNTCA9PT0gXCIxa2cgLSAya2dcIikge1xyXG4gICAgZmVlcyA9IDYuNDtcclxuICB9IGVsc2UgaWYgKHBvaWRzLmlubmVySFRNTCA9PT0gXCIya2cgLSAza2dcIikge1xyXG4gICAgZmVlcyA9IDYuNjtcclxuICB9XHJcblxyXG4gIHZhciB0b3RhbCA9IDAuMTIqZmVlcyArIGZlZXMgKyBwYXJzZUZsb2F0KGFubm9uY2VQcmljZS5pbm5lckhUTUwpO1xyXG4gIHZhciBtb2RQcmljZSA9IHRvdGFsJTE7XHJcbiAgdmFyIHByZUZpbmFsO1xyXG4gIGlmKG1vZFByaWNlID4gMCAmJiBtb2RQcmljZSA8MC41KXtcclxuICAgIHByZUZpbmFsID0gTWF0aC5yb3VuZCh0b3RhbCkgKyAwLjU7XHJcbiAgICBcclxuICB9ZWxzZSBpZihtb2RQcmljZSA+PSAwLjUgJiYgbW9kUHJpY2UgPDEgKXtcclxuICAgIHByZUZpbmFsID0gTWF0aC5yb3VuZCh0b3RhbCk7XHJcbiAgfVxyXG4gIHZhciBmaW5hbFByaWNlID0gcHJlRmluYWw7XHJcbiAgcmVzdWx0LmlubmVySFRNTCA9IFwiVG90YWwgXCIgKyBmaW5hbFByaWNlLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCIsXCIpICsgXCLigqxcIjtcclxuICByZW1pc2VNYWluUHJvcHJlLnJlbW92ZUF0dHJpYnV0ZShcImNoZWNrZWRcIik7XHJcbiAgbW9uZGlhbC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gIGJ1eS5pbm5lckhUTUwgPSBcIlBheWVyIFwiICsgZmluYWxQcmljZS50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiLFwiKSArIFwi4oKsXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrZWQoKSB7XHJcbiAgcmVzdWx0LmlubmVySFRNTCA9IFwiVG90YWwgXCIgKyBhbm5vbmNlUHJpY2UuaW5uZXJIVE1MLnRvU3RyaW5nKCkucmVwbGFjZShcIi5cIiwgXCIsXCIpO1xyXG4gIGJ1eS5pbm5lckhUTUwgPSBcIlBheWVyIFwiICsgYW5ub25jZVByaWNlLmlubmVySFRNTC50b1N0cmluZygpLnJlcGxhY2UoXCIuXCIsIFwiLFwiKTtcclxuICByZW1pc2VNYWluUHJvcHJlLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgbW9uZGlhbC5yZW1vdmVBdHRyaWJ1dGUoXCJjaGVja2VkXCIpO1xyXG59XHJcbi8qIFdpZGdldCArIHZhcmlhYmxlcyAqL1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICB2YXIgY2hlY2tlZCA9ICQoJyNyZW1pc2UnKVswXTtcclxuICB2YXIgd2lkZ2V0ID0gJCgnI21vZGUnKVswXTtcclxuICAkKCcudmlsbGVFeHBlZGl0aW9uJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgJCh3aWRnZXQpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICQoJyNyZW1pc2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJyNtb2RlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcuY29udGVudS13aWRnZXQnKS5hZGRDbGFzcygnYWN0aXZlLWNvbnRlbnUnKTtcclxuICAgICAgJCgnLnZpbGxlRXhwZWRpdGlvbicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICQoJy5jb250ZW51LXdpZGdldCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfSBlbHNlIGlmIChjaGVja2VkLmNoZWNrZWQpIHtcclxuICAgICAgJCgnI3JlbWlzZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnI21vZGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5jb250ZW51LXdpZGdldCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY29udGVudScpO1xyXG4gICAgICAkKCcudmlsbGVFeHBlZGl0aW9uJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICAgICQoJy5jb250ZW51LXdpZGdldCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJChjaGVja2VkKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAkKCcjcmVtaXNlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcjbW9kZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLmNvbnRlbnUtd2lkZ2V0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jb250ZW51Jyk7XHJcbiAgICAgICQoJy52aWxsZUV4cGVkaXRpb24nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgICAgJCgnLmNvbnRlbnUtd2lkZ2V0JykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0gZWxzZSBpZiAoY2hlY2tlZC5jaGVja2VkKSB7XHJcbiAgICAgICQoJyNyZW1pc2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJyNtb2RlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcuY29udGVudS13aWRnZXQnKS5hZGRDbGFzcygnYWN0aXZlLWNvbnRlbnUnKTtcclxuICAgICAgJCgnLnZpbGxlRXhwZWRpdGlvbicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICQoJy5jb250ZW51LXdpZGdldCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8qIENoYXJnZSBsZSB3aWRnZXQgZGFucyBsYSBESVYgZCdpZCBcIlpvbmVfV2lkZ2V0XCIgYXZlYyBsZXMgcGFyYW3DqHRyZXMgaW5kaXF1w6lzXHJcbiAgICogZXQgcmVudmVycmEgbGUgUG9pbnQgUmVsYWlzIHPDqWxlY3Rpb25uw6kgcGFyIGwndXRpbGlzYXRldXIgZGFucyBsZSBjaGFtcHMgZCdJRCBcIlJldG91cl9XaWRnZXRcIiAgKi9cclxuXHJcbiAgJChcIiNab25lX1dpZGdldFwiKS5NUl9QYXJjZWxTaG9wUGlja2VyKHtcclxuICAgIFRhcmdldDogXCIjUmV0b3VyX1dpZGdldFwiLFxyXG4gICAgLy8gU2VsZWN0ZXVyIEpRdWVyeSBkZSBsJ8OpbMOpbWVudCBkYW5zIGxlcXVlbCBzZXJhIHJlbnZvecOpIGwnSUQgZHUgUG9pbnQgUmVsYWlzIHPDqWxlY3Rpb25uw6kgKGfDqW7DqXJhbGVtZW50IHVuIGNoYW1wIGlucHV0IGhpZGRlbikgICAjfVxyXG4gICAgQnJhbmQ6IFwiQkRURVNUMTNcIixcclxuICAgIC8vIFZvdHJlIGNvZGUgY2xpZW50IE1vbmRpYWwgUmVsYXlcclxuICAgIENvdW50cnk6IFwiRlJcIixcclxuICAgIE9uUGFyY2VsU2hvcFNlbGVjdGVkOiBmdW5jdGlvbiBPblBhcmNlbFNob3BTZWxlY3RlZChkYXRhKSB7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFyY2Vsc2hvcEFkZHJlc3NcIikudmFsdWUgPSBkYXRhLkFkcmVzc2UxO1xyXG4gICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcmNlbHNob3BBZGRyZXNzXCIpLnZhbHVlKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXJjZWxzaG9wSWRcIikudmFsdWUgPSBkYXRhLklEO1xyXG4gICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhcmNlbHNob3BJZFwiKS52YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgLy8gQ29kZSBJU08gMiBsZXR0cmVzIGR1IHBheXMgdXRpbGlzw6kgcG91ciBsYSByZWNoZXJjaGVcclxuICAgIE5iUmVzdWx0czogOCxcclxuICAgIFNob3dSZXN1bHRzT25NYXA6IGZhbHNlLFxyXG4gICAgUmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgIENTUzogdHJ1ZVxyXG4gIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xyXG5cclxuaW1wb3J0IG5vVWlTbGlkZXIgZnJvbSAnbm91aXNsaWRlcic7XHJcbmltcG9ydCAnbm91aXNsaWRlci9kaXN0L25vdWlzbGlkZXIuY3NzJztcclxuXHJcbmNvbnN0IHNsaWRlclByaXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVQcml4JylcclxuXHJcbmlmIChzbGlkZXJQcml4KSB7XHJcbiAgICBjb25zdCBtaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluJylcclxuICAgIGNvbnN0IG1heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXgnKVxyXG4gICAgY29uc3QgbWluVmFsdWUgPSBNYXRoLmZsb29yKHBhcnNlSW50KHNsaWRlclByaXguZGF0YXNldC5taW4sIDEwKSAvIDEwKSAqIDEwXHJcbiAgICBjb25zdCBtYXhWYWx1ZSA9IE1hdGguY2VpbChwYXJzZUludChzbGlkZXJQcml4LmRhdGFzZXQubWF4LCAxMCkgLyAxMCkgKiAxMFxyXG4gICAgY29uc3QgcmFuZ2UgPSBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXJQcml4LCB7XHJcbiAgICAgICAgc3RhcnQ6IFttaW4udmFsdWUgfHwgbWluVmFsdWUsIG1heC52YWx1ZSB8fCBtYXhWYWx1ZV0sXHJcbiAgICAgICAgY29ubmVjdDogdHJ1ZSxcclxuICAgICAgICBzdGVwOiAxMCxcclxuICAgICAgICByYW5nZToge1xyXG4gICAgICAgICAgICAnbWluJzogbWluVmFsdWUsXHJcbiAgICAgICAgICAgICdtYXgnOiBtYXhWYWx1ZVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByYW5nZS5vbignc2xpZGUnLCBmdW5jdGlvbiAodmFsdWVzLCBoYW5kbGUpIHtcclxuICAgICAgICBpZiAoaGFuZGxlID09PSAwKSB7XHJcbiAgICAgICAgICAgIG1pbi52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzWzBdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaGFuZGxlID09PSAxKSB7XHJcbiAgICAgICAgICAgIG1heC52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzWzFdKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByYW5nZS5vbignZW5kJywgZnVuY3Rpb24gKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgICAgICAgaWYgKGhhbmRsZT09PTApIHtcclxuICAgICAgICAgICAgbWluLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYXguZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbiIsImltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeSggZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgY291bnQgPSAkKCcuaXRlbScpLmxlbmd0aDtcclxuICB2YXIgbGFyZ2V1ckl0ZW0gPSAkKFwiLmltYWdlLWFubm9uY2VcIikud2lkdGgoKVxyXG4gIHZhciBsZ1NsaWRlcyA9IGxhcmdldXJJdGVtKmNvdW50O1xyXG5cclxuICBmdW5jdGlvbiBhbmltU2xpZGUoKSB7XHJcbiAgICBpZiAoY291bnQgPj0gMikge1xyXG4gICAgICAgICQoXCIjc2xpZGVzXCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgXCJtYXJnaW4tbGVmdFwiIDogLWxhcmdldXJJdGVtfSxcclxuICAgICAgICAgIDUwMDAsXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtcyA9ICQoXCIjc2xpZGVzIC5pdGVtXCIpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbUFqb3V0ZSA9IGl0ZW1zLnNsaWNlKDAsMSk7XHJcbiAgICAgICAgICAgICQoXCIjc2xpZGVzXCIpLmFwcGVuZChpdGVtQWpvdXRlKTtcclxuICAgICAgICAgICAgJChcIiNzbGlkZXNcIikuY3NzKFwibWFyZ2luLWxlZnRcIixcIjBcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYW5pbVNsaWRlKClcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgICBmdW5jdGlvbiBob3ZlcigpIHtcclxuICAgICAgJChcIi5pdGVtXCIpLm9uKFwibW91c2VvdmVyXCIsZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIiNzbGlkZXNcIikuY2xlYXJRdWV1ZSgpLnN0b3AoKTtcclxuICAgICAgICB9KS5vbihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFuaW1TbGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxhcmdldXIoKSB7XHJcbiAgICAgIGlmIChjb3VudCA+IDMpIHtcclxuICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xyXG4gICAgICAgICAgICB2YXIgbG9uZ1NsID0gbGFyZ2V1ckl0ZW0qKDYpXHJcbiAgICAgICAgfSBlbHNlIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDQyNSkge1xyXG4gICAgICAgICAgdmFyIGxvbmdTbCA9IGxhcmdldXJJdGVtKjNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIGxvbmdTbCA9IGxhcmdldXJJdGVtKjJcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGxvbmdTbCA9IGxhcmdldXJJdGVtKjJcclxuICAgICAgfVxyXG5cclxuICAgICAgJChcIiNzbGlkZXNob3dcIikuY3NzKFwibWF4LXdpZHRoXCIsbG9uZ1NsICsgXCJweFwiKTtcclxuICAgICAgJChcIiNzbGlkZXNob3dcIikuY3NzKFwibWF4LWhlaWdodFwiLDQwMCArIFwicHhcIik7XHJcbiAgICAgICQoXCIjc2xpZGVzXCIpLmNzcyhcIndpZHRoXCIsbGdTbGlkZXMgKyBcInB4XCIpO1xyXG4gICAgICB2YXIgaXRlbSA9ICQoXCIjc2xpZGVzaG93IC5pdGVtXCIpO1xyXG4gICAgICBpdGVtLmNzcyhcIm1heC13aWR0aFwiLCBsYXJnZXVySXRlbSk7XHJcbiAgICB9XHJcbiAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsZnVuY3Rpb24gKCkge1xyXG4gICAgbGFyZ2V1cigpXHJcbiAgfSk7XHJcblxyXG4gIGhvdmVyKClcclxuICBsYXJnZXVyKClcclxuICBhbmltU2xpZGUoKVxyXG5cclxufSk7XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInRvZ2dsZUxpc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGlzdEFubm9uY2UiLCJncmF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZSIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250ZW51IiwiaW5kZXgiLCJmb3JFYWNoIiwiaW1hZ2UiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsImdldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwicmVtb3ZlIiwiaiIsIm1pbmlJbWFnZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJncmFuZEltYWdlIiwiY29uZmlybVBvcHVwIiwiZGVsZXRlQnRuIiwiY2FuY2VsQnRuIiwiY29uZmlybUJ0biIsInNyYyIsInN0eWxlIiwidmlzaWJpbGl0eSIsInBvaW50ZXJFdmVudHMiLCJjdXJzb3IiLCIkIiwicmVxdWlyZSIsImdsb2JhbCIsImpRdWVyeSIsImJzQ3VzdG9tRmlsZUlucHV0IiwiaW5pdCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJjb250ZXh0Iiwib24iLCJzbGlkZVVwIiwic2xpZGVEb3duIiwibGFyZ2V1ciIsIndpbmRvdyIsIndpZHRoIiwic2hvdyIsImhpZGUiLCJvbmNsaWNrIiwibXlGdW5jdGlvbiIsInRvZ2dsZSIsIm9uZ2xldHMiLCJBcnJheSIsImZyb20iLCJpbmRleENvbnRlbnQiLCJpbmRleEJhciIsInRhYnNBbmltYXRpb24iLCJlIiwiZWwiLCJ0YXJnZXQiLCJpbmRleE9mIiwib25nbGV0IiwicG9pZHMiLCJtb25kaWFsIiwiYW5ub25jZVByaWNlIiwicmVzdWx0IiwicmVtaXNlTWFpblByb3ByZSIsImJ1eSIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsInRvdGFsIiwiY2hlY2tlZCIsImZlZXMiLCJfZmluYWwiLCJpbm5lckhUTUwiLCJwYXJzZUZsb2F0IiwibW9kUHJpY2UiLCJwcmVGaW5hbCIsIk1hdGgiLCJyb3VuZCIsImZpbmFsUHJpY2UiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZWFkeSIsIndpZGdldCIsImNzcyIsImNoYW5nZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJNUl9QYXJjZWxTaG9wUGlja2VyIiwiVGFyZ2V0IiwiQnJhbmQiLCJDb3VudHJ5IiwiT25QYXJjZWxTaG9wU2VsZWN0ZWQiLCJkYXRhIiwidmFsdWUiLCJBZHJlc3NlMSIsIklEIiwiTmJSZXN1bHRzIiwiU2hvd1Jlc3VsdHNPbk1hcCIsIlJlc3BvbnNpdmUiLCJDU1MiLCJub1VpU2xpZGVyIiwic2xpZGVyUHJpeCIsIm1pbiIsIm1heCIsIm1pblZhbHVlIiwiZmxvb3IiLCJwYXJzZUludCIsImRhdGFzZXQiLCJtYXhWYWx1ZSIsImNlaWwiLCJyYW5nZSIsImNyZWF0ZSIsInN0YXJ0IiwiY29ubmVjdCIsInN0ZXAiLCJ2YWx1ZXMiLCJoYW5kbGUiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJjb3VudCIsImxhcmdldXJJdGVtIiwibGdTbGlkZXMiLCJhbmltU2xpZGUiLCJhbmltYXRlIiwiaXRlbXMiLCJpdGVtQWpvdXRlIiwic2xpY2UiLCJhcHBlbmQiLCJob3ZlciIsImNsZWFyUXVldWUiLCJzdG9wIiwibG9uZ1NsIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=