(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PriceCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceCardHeader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceCardHeader.vue */ "./resources/js/components/PriceCardHeader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['price'],
  components: {
    PriceCardHeader: _PriceCardHeader_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    choosePrice: function choosePrice() {
      return this.price.disc ? "Diskon ".concat(this.price.disc, "%") : "Pilih Sekarang";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCardHeader.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PriceCardHeader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var format_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! format-number */ "./node_modules/format-number/index.js");
/* harmony import */ var format_number__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(format_number__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['price'],
  computed: {
    numberFormat: function numberFormat() {
      return function (value) {
        var formater = format_number__WEBPACK_IMPORTED_MODULE_0___default()({
          prefix: '',
          integerSeparator: '.'
        });
        return formater(value);
      };
    },
    firstBlockPrice: function firstBlockPrice() {
      return function (stringPriceInRupiah) {
        var items = stringPriceInRupiah.split('.');
        return items[0];
      };
    },
    restBlockPrice: function restBlockPrice() {
      return function (stringPriceInRupiah) {
        var items = stringPriceInRupiah.split('.');

        if (items.length) {
          delete items[0];
        }

        return items.join('.');
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PriceList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceCard.vue */ "./resources/js/components/PriceCard.vue");
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PriceCard: _PriceCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      prices: [{
        disc: null,
        isBestSeller: false,
        name: 'Bayi',
        value: {
          before: '19900',
          after: '14900'
        },
        totalUser: 938,
        resourcePower: 0.5,
        packages: [{
          value: '500MB',
          name: 'Disk Space'
        }, {
          value: 'Unlimited',
          name: 'Bandwith'
        }, {
          value: 'Unlimited',
          name: 'Databases'
        }, {
          value: '1',
          name: 'Domain'
        }, {
          value: 'Instant',
          name: 'Backup'
        }, {
          value: 'Unlimited',
          name: 'SSL Gratis Selamanya'
        }]
      }, {
        disc: null,
        isBestSeller: false,
        name: 'Pelajar',
        value: {
          before: '46900',
          after: '23450'
        },
        totalUser: 4168,
        resourcePower: 1,
        packages: [{
          value: 'Unlimited',
          name: 'Disk Space'
        }, {
          value: 'Unlimited',
          name: 'Bandwith'
        }, {
          value: 'Unlimited',
          name: 'POP3 Email'
        }, {
          value: 'Unlimited',
          name: 'Databases'
        }, {
          value: '10',
          name: 'Addon Domain'
        }, {
          value: 'Instant',
          name: 'Backup'
        }, {
          value: 'Domain Gratis',
          name: 'Selamanya'
        }, {
          value: 'Unlimited',
          name: 'SSL Gratis Selamanya'
        }]
      }, {
        disc: null,
        isBestSeller: true,
        name: 'Personal',
        value: {
          before: '58900',
          after: '38900'
        },
        totalUser: 10017,
        resourcePower: 2,
        packages: [{
          value: 'Unlimited',
          name: 'Disk Space'
        }, {
          value: 'Unlimited',
          name: 'Bandwith'
        }, {
          value: 'Unlimited',
          name: 'POP3 Email'
        }, {
          value: 'Unlimited',
          name: 'Databases'
        }, {
          value: 'Unlimited',
          name: 'Addon Domain'
        }, {
          value: 'Instant',
          name: 'Backup'
        }, {
          value: 'Domain Gratis',
          name: 'Selamanya'
        }, {
          value: 'Unlimited',
          name: 'SSL Gratis Selamanya'
        }, {
          value: 'Private',
          name: 'Name Server'
        }, {
          value: 'Spam Assasin',
          name: 'Mail Protection'
        }]
      }, {
        disc: 40,
        isBestSeller: false,
        name: 'Bisnis',
        value: {
          before: '109900',
          after: '65900'
        },
        totalUser: 3552,
        resourcePower: 3,
        packages: [{
          value: 'Unlimited',
          name: 'Disk Space'
        }, {
          value: 'Unlimited',
          name: 'Bandwith'
        }, {
          value: 'Unlimited',
          name: 'POP3 Email'
        }, {
          value: 'Unlimited',
          name: 'Databases'
        }, {
          value: 'Unlimited',
          name: 'Addon Domain'
        }, {
          value: 'Instant',
          name: 'Backup'
        }, {
          value: 'Domain Gratis',
          name: 'Selamanya'
        }, {
          value: 'Unlimited',
          name: 'SSL Gratis Selamanya'
        }, {
          value: 'Private',
          name: 'Name Server'
        }, {
          value: 'Spam Assasin',
          name: 'Mail Protection'
        }, {
          type: 'rating',
          value: 5
        }, {
          value: 'Spam Expert',
          name: 'Pro Mail Protection'
        }]
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_PriceList_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PriceList.vue */ "./resources/js/components/PriceList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    PriceList: _components_PriceList_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      phpModules: [['icePHP', 'apc', 'apcu', 'apm', 'ares', 'bcmath', 'bcompiler', 'big_int', 'bitset', 'bloomy', 'bz2_filter', 'clamav', 'coin_aceptor', 'crack', 'dba'], ['http', 'huffman', 'idn', 'igbinary', 'imagick', 'imap', 'inclued', 'inotify', 'interbase', 'intl', 'ioncube_loader', 'ioncube_loader_4', 'jsmin', 'json', 'ldap', 'nd_pdo_mysql'], ['oauth', 'oci8', 'odbc', 'opache', 'pdf', 'pdo', 'pdo_dblib', 'pdo_firebird', 'pdo_mysql', 'pdo_odbc', 'pdo_sqlite', 'pgsql', 'phalcon', 'stats', 'stem', 'stomp'], ['suhosin', 'sybase_ct', 'sysvmsg', 'sysvsem', 'sysvshm', 'tidy', 'timezonedb', 'trader', 'transit', 'uploadprogress', 'uri_template', 'uuid']]
    };
  },
  mounted: function mounted() {
    console.log(this.chunkedPhpModules);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stack-top[data-v-1122a56a] {\n  /* adjust the below to control the shape */\n  --d:8px;\n  --w:180px;\n  /**/\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(29.29%, -100%) rotate(45deg);\n  /* 29.29% = 100%*(1 - cos(45deg)) */\n  color: #fff;\n  text-align: center;\n  width: var(--w);\n  transform-origin: bottom left;\n  padding: 8px 0 calc(var(--d) + 8px);\n  --bg-opacity:1;\n  background-color:#52B35A;\n  background-color:rgba(82, 179, 90, var(--bg-opacity));\n  font-weight:700;\n  -webkit-clip-path: polygon(0 100%, 0 calc(100% - var(--d)), 50% calc(100% - var(--d) - var(--w)/2), 100% calc(100% - var(--d)), 100% 100%, calc(100% - var(--d)) calc(100% - var(--d)), var(--d) calc(100% - var(--d)));\n          clip-path: polygon(0 100%, 0 calc(100% - var(--d)), 50% calc(100% - var(--d) - var(--w)/2), 100% calc(100% - var(--d)), 100% 100%, calc(100% - var(--d)) calc(100% - var(--d)), var(--d) calc(100% - var(--d)));\n  left: 0;\n  right: auto;\n  transform: translate(-29.29%, -100%) rotate(-45deg);\n  transform-origin: bottom right;\n  box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceList.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PriceList.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".price-card {\n  width: 300px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".social-media-item a[data-v-bb7a9770]:hover {\n  text-decoration: none;\n}\n.social-media-item .counter[data-v-bb7a9770] {\n  margin-left: 8px;\n  position: relative;\n  --bg-opacity: 1;\n  background-color: #edf2f7;\n  background-color: rgba(237, 242, 247, var(--bg-opacity));\n  z-index: 2;\n}\n.social-media-item .counter[data-v-bb7a9770]:after {\n  z-index: 1;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  margin-left: -5px;\n  height: 8px;\n  width: 8px;\n  border-width: 2px;\n  --border-opacity: 1;\n  border-color: #cbd5e0;\n  border-color: rgba(203, 213, 224, var(--border-opacity));\n  --bg-opacity: 1;\n  background-color: #edf2f7;\n  background-color: rgba(237, 242, 247, var(--bg-opacity));\n  border-bottom: 0px;\n  border-right: 0px;\n  transform: rotate(-45deg);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/format-number/index.js":
/*!*********************************************!*\
  !*** ./node_modules/format-number/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = formatter;
module.exports.default = formatter;

function formatter(options) {
  options = options || {};


  // *********************************************************************************************
  // Set defaults for negatives
  // options.negative, options.negativeOut, options.separator retained for backward compatibility
  // *********************************************************************************************

  // type of negative; default left
  options.negativeType = options.negativeType || (options.negative === 'R' ? 'right' : 'left')

  // negative symbols '-' or '()'
  if (typeof options.negativeLeftSymbol !== 'string') {
    switch (options.negativeType) {
      case 'left':
        options.negativeLeftSymbol = '-';
        break;
      case 'brackets':
        options.negativeLeftSymbol = '(';
        break;
      default:
        options.negativeLeftSymbol = '';
    }
  }
  if (typeof options.negativeRightSymbol !== 'string') {
    switch (options.negativeType) {
      case 'right':
        options.negativeRightSymbol = '-';
        break;
      case 'brackets':
        options.negativeRightSymbol = ')';
        break;
      default:
        options.negativeRightSymbol = '';
    }
  }

  // whether negative symbol should be inside/outside prefix and suffix

  if (typeof options.negativeLeftOut !== "boolean") {
    options.negativeLeftOut = (options.negativeOut === false ? false : true);
  }
  if (typeof options.negativeRightOut !== "boolean") {
    options.negativeRightOut = (options.negativeOut === false ? false : true);
  }

  //prefix and suffix
  options.prefix = options.prefix || '';
  options.suffix = options.suffix || '';

  //separators
  if (typeof options.integerSeparator !== 'string') {
    options.integerSeparator = (typeof options.separator === 'string' ? options.separator : ',');
  }
  options.decimalsSeparator = typeof options.decimalsSeparator === 'string' ? options.decimalsSeparator : '';
  options.decimal = options.decimal || '.';

  //padders
  options.padLeft = options.padLeft || -1 //default no padding
  options.padRight = options.padRight || -1 //default no padding

  function format(number, overrideOptions) {
    overrideOptions = overrideOptions || {};

    if (number || number === 0) {
      number = '' + number;//convert number to string if it isn't already
    } else {
      return '';
    }

    //identify a negative number and make it absolute
    var output = [];
    var negative = number.charAt(0) === '-';
    number = number.replace(/^\-/g, '');

    //Prepare output with left hand negative and/or prefix
    if (!options.negativeLeftOut && !overrideOptions.noUnits) {
      output.push(options.prefix);
    }
    if (negative) {
      output.push(options.negativeLeftSymbol);
    }
    if (options.negativeLeftOut && !overrideOptions.noUnits) {
      output.push(options.prefix);
    }

    //Format core number
    number = number.split('.');
    if (options.round != null) round(number, options.round);
    if (options.truncate != null) number[1] = truncate(number[1], options.truncate);
    if (options.padLeft > 0) number[0] = padLeft(number[0], options.padLeft);
    if (options.padRight > 0) number[1] = padRight(number[1], options.padRight);
    if (!overrideOptions.noSeparator && number[1]) number[1] = addDecimalSeparators(number[1], options.decimalsSeparator);
    if (!overrideOptions.noSeparator && number[0]) number[0] = addIntegerSeparators(number[0], options.integerSeparator);
    output.push(number[0]);
    if (number[1]) {
      output.push(options.decimal);
      output.push(number[1]);
    }

    //Prepare output with right hand negative and/or prefix
    if (options.negativeRightOut && !overrideOptions.noUnits) {
      output.push(options.suffix);
    }
    if (negative) {
      output.push(options.negativeRightSymbol);
    }
    if (!options.negativeRightOut && !overrideOptions.noUnits) {
      output.push(options.suffix);
    }

    //join output and return
    return output.join('');
  }

  format.negative = options.negative;
  format.negativeOut = options.negativeOut;
  format.negativeType = options.negativeType;
  format.negativeLeftOut = options.negativeLeftOut;
  format.negativeLeftSymbol = options.negativeLeftSymbol;
  format.negativeRightOut = options.negativeRightOut;
  format.negativeRightSymbol = options.negativeRightSymbol;
  format.prefix = options.prefix;
  format.suffix = options.suffix;
  format.separate = options.separate;
  format.integerSeparator = options.integerSeparator;
  format.decimalsSeparator = options.decimalsSeparator;
  format.decimal = options.decimal;
  format.padLeft = options.padLeft;
  format.padRight = options.padRight;
  format.truncate = options.truncate;
  format.round = options.round;

  function unformat(number, allowedSeparators) {
    allowedSeparators = allowedSeparators || [];
    if (options.allowedSeparators) {
      options.allowedSeparators.forEach(function (s) { allowedSeparators.push (s); });
    }
    allowedSeparators.push(options.integerSeparator);
    allowedSeparators.push(options.decimalsSeparator);
    number = number.replace(options.prefix, '');
    number = number.replace(options.suffix, '');
    var newNumber = number;
    do {
      number = newNumber;
      for (var i = 0; i < allowedSeparators.length; i++) {
        newNumber = newNumber.replace(allowedSeparators[i], '');
      }
    } while (newNumber != number);
    return number;
  }
  format.unformat = unformat;

  function validate(number, allowedSeparators) {
    number = unformat(number, allowedSeparators);
    number = number.split(options.decimal);
    if (number.length > 2) {
      return false;
    } else if (options.truncate != null && number[1] && number[1].length > options.truncate) {
      return false;
    }  else if (options.round != null && number[1] && number[1].length > options.round) {
      return false;
    } else {
      return /^-?\d+\.?\d*$/.test(number);
    }
  }
  return format;
}

//where x is already the integer part of the number
function addIntegerSeparators(x, separator) {
  x += '';
  if (!separator) return x;
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x)) {
    x = x.replace(rgx, '$1' + separator + '$2');
  }
  return x;
}

//where x is already the decimal part of the number
function addDecimalSeparators(x, separator) {
  x += '';
  if (!separator) return x;
  var rgx = /(\d{3})(\d+)/;
  while (rgx.test(x)) {
    x = x.replace(rgx, '$1' + separator + '$2');
  }
  return x;
}

//where x is the integer part of the number
function padLeft(x, padding) {
  x = x + '';
  var buf = [];
  while (buf.length + x.length < padding) {
    buf.push('0');
  }
  return buf.join('') + x;
}

//where x is the decimals part of the number
function padRight(x, padding) {
  if (x) {
    x += '';
  } else {
    x = '';
  }
  var buf = [];
  while (buf.length + x.length < padding) {
    buf.push('0');
  }
  return x + buf.join('');
}
function truncate(x, length) {
  if (x) {
    x += '';
  }
  if (x && x.length > length) {
    return x.substr(0, length);
  } else {
    return x;
  }
}

//where number is an array with 0th item as integer string and 1st item as decimal string (no negatives)
function round(number, places) {
  if (number[1] && places >= 0 && number[1].length > places) {
    //truncate to correct number of decimal places
    var decim = number[1].slice(0, places);
    //if next digit was >= 5 we need to round up
    if (+(number[1].substr(places, 1)) >= 5) {
      //But first count leading zeros as converting to a number will loose them
      var leadingzeros = "";
      while (decim.charAt(0)==="0") {
        leadingzeros = leadingzeros + "0";
        decim = decim.substr(1);
      }
      //Then we can change decim to a number and add 1 before replacing leading zeros
      decim = (+decim + 1) + '';
      decim = leadingzeros + decim;
      if (decim.length > places) {
        //adding one has made it longer
        number[0] = (+number[0]+ +decim.charAt(0)) + ''; //add value of firstchar to the integer part
        decim = decim.substring(1);   //ignore the 1st char at the beginning which is the carry to the integer part
      }
    }
    number[1] = decim;
  }
  return number;
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceList.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PriceList.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./PriceList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceList.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCard.vue?vue&type=template&id=00b9d99e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PriceCard.vue?vue&type=template&id=00b9d99e& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "t-border t-border-gray-400 t-text-center price-card t-pb-5",
      class: {
        "t-border-blue-medium": _vm.price.isBestSeller
      }
    },
    [
      _c("PriceCardHeader", { attrs: { price: _vm.price } }),
      _vm._v(" "),
      _c("div", { staticClass: "t-py-5" }, [
        _c(
          "ul",
          _vm._l(_vm.price.packages, function(packageItem, index) {
            return _c("li", { key: index, staticClass: "t-mb-2" }, [
              packageItem.type
                ? _c("div", [
                    packageItem.type == "rating"
                      ? _c(
                          "div",
                          _vm._l(packageItem.value, function(n) {
                            return _c("i", {
                              key: n,
                              staticClass:
                                "fas fa-star t-text-md t-text-yellow-600"
                            })
                          }),
                          0
                        )
                      : _vm._e()
                  ])
                : _c("div", [
                    packageItem.value
                      ? _c("span", { staticClass: "t-font-bold" }, [
                          _vm._v(" " + _vm._s(packageItem.value) + " ")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        "\n                        " +
                          _vm._s(packageItem.name) +
                          "\n                    "
                      )
                    ])
                  ])
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("div", {}, [
        _c(
          "a",
          {
            staticClass: "button round",
            class: { primary: _vm.price.isBestSeller },
            attrs: { href: "#" }
          },
          [_vm._v("\n            " + _vm._s(_vm.choosePrice) + "\n        ")]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCardHeader.vue?vue&type=template&id=1122a56a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PriceCardHeader.vue?vue&type=template&id=1122a56a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.price.isBestSeller
      ? _c("div", { staticClass: "t-bg-blue-medium t-text-white t-relative" }, [
          _c("div", { staticClass: "stack-top" }, [
            _vm._v("\n            BEST SELLER!\n        ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("h2", { staticClass: "t-font-bold t-py-3" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.price.name) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("app-border-horizontal", {
                staticClass: "t-border-blue-medium"
              }),
              _vm._v(" "),
              _c("div", { staticClass: "t-py-4" }, [
                _c("div", [
                  _c("span", { staticClass: "t-line-through" }, [
                    _vm._v(
                      "Rp " + _vm._s(_vm.numberFormat(_vm.price.value.before))
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "t-flex t-justify-center" }, [
                  _c("span", { staticClass: "t-mr-2" }, [_vm._v(" Rp ")]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "t-text-5xl t-font-bold",
                      staticStyle: { "margin-top": "-14px" }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(
                            _vm.firstBlockPrice(
                              _vm.numberFormat(_vm.price.value.after)
                            )
                          ) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.restBlockPrice(
                            _vm.numberFormat(_vm.price.value.after)
                          )
                        ) +
                        "/ bln\n                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("app-border-horizontal", {
                staticClass: "t-border-blue-medium"
              }),
              _vm._v(" "),
              _c("div", { staticClass: "t-py-3 t-bg-blue-darken" }, [
                _c("span", { staticClass: "t-font-semibold" }, [
                  _vm._v(_vm._s(_vm.numberFormat(_vm.price.totalUser)))
                ]),
                _vm._v(" Pengguna Terdaftar\n            ")
              ]),
              _vm._v(" "),
              _c("app-border-horizontal", {
                staticClass: "t-border-blue-medium"
              })
            ],
            1
          )
        ])
      : _c(
          "div",
          [
            _c("h2", { staticClass: "t-font-bold t-py-3" }, [
              _vm._v("\n            " + _vm._s(_vm.price.name) + "\n        ")
            ]),
            _vm._v(" "),
            _c("app-border-horizontal"),
            _vm._v(" "),
            _c("div", { staticClass: "t-py-4" }, [
              _c("div", [
                _c("span", { staticClass: "t-line-through" }, [
                  _vm._v(
                    "Rp " + _vm._s(_vm.numberFormat(_vm.price.value.before))
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "t-flex t-justify-center" }, [
                _c("span", { staticClass: "t-mr-2" }, [_vm._v(" Rp ")]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    staticClass: "t-text-5xl t-font-bold",
                    staticStyle: { "margin-top": "-14px" }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.firstBlockPrice(
                            _vm.numberFormat(_vm.price.value.after)
                          )
                        ) +
                        "\n                "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("span", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(
                        _vm.restBlockPrice(
                          _vm.numberFormat(_vm.price.value.after)
                        )
                      ) +
                      "/ bln\n                "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("app-border-horizontal"),
            _vm._v(" "),
            _c("div", { staticClass: "t-py-3" }, [
              _c("span", { staticClass: "t-font-semibold" }, [
                _vm._v(_vm._s(_vm.numberFormat(_vm.price.totalUser)))
              ]),
              _vm._v(" Pengguna Terdaftar\n        ")
            ]),
            _vm._v(" "),
            _c("app-border-horizontal")
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceList.vue?vue&type=template&id=516c982c&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PriceList.vue?vue&type=template&id=516c982c& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "app-wrapper-section-content",
        [
          _c(
            "app-wrapper-container",
            { staticClass: "t-flex t-flex-wrap t-justify-center" },
            _vm._l(_vm.prices, function(price, index) {
              return _c("PriceCard", { key: index, attrs: { price: price } })
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "app-wrapper-section-content",
        [
          _c("app-wrapper-container", [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-md-8 col-lg-6 t-mb-4" }, [
                _c("div", [
                  _c(
                    "div",
                    { staticClass: "t-mb-4 t-pt-0 md:t-py-4 lg:t-pt-6" },
                    [
                      _c(
                        "h1",
                        { staticClass: "t-font-bold lg:t-text-4xl t-mb-2" },
                        [
                          _vm._v(
                            "\n                                PHP Hosting\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "h1",
                        { staticClass: "t-font-light lg:t-text-4xl t-mb-2" },
                        [
                          _vm._v(
                            "\n                                Cepat, handal, penuh dengan "
                          ),
                          _c("br"),
                          _vm._v(
                            " modul PHP yang Anda butuhkan\n                            "
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", [
                    _c("ul", [
                      _c(
                        "li",
                        { staticClass: "t-flex t-mb-4 t-items-center" },
                        [
                          _c("i", {
                            staticClass:
                              "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "\n                                        Solusi PHP untuk performa query yang lebih cepat.\n                                    "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "t-flex t-mb-4 t-items-center" },
                        [
                          _c("i", {
                            staticClass:
                              "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "\n                                        Konsumsi memory yang lebih rendah.\n                                    "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "t-flex t-mb-4 t-items-center" },
                        [
                          _c("i", {
                            staticClass:
                              "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "\n                                        Support PHP 5.3, 5.4, 5.5, 5.6, 7.\n                                    "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "t-flex t-mb-4 t-items-center" },
                        [
                          _c("i", {
                            staticClass:
                              "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "\n                                        Fitur enkripsi ionCube dan Zend Guard Loaders.\n                                    "
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-md-4 col-lg-6 t-flex t-items-center"
                },
                [
                  _c("div", { staticClass: "t-w-full" }, [
                    _c("img", {
                      staticClass: "t-w-full",
                      attrs: {
                        src:
                          "/assets/svg/illustration-banner-PHP-hosting-01.svg",
                        alt: ""
                      }
                    })
                  ])
                ]
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "t-border-b t-border-gray-400" }),
      _vm._v(" "),
      _c(
        "app-wrapper-section-content",
        [
          _c("app-wrapper-container", [
            _c(
              "div",
              {
                staticClass: "row t-justify-center t-max-w-screen-md t-mx-auto"
              },
              [
                _c("div", { staticClass: "col-6 col-md-4 t-text-center" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "t-h-48 t-flex t-justify-center t-items-center"
                    },
                    [
                      _c("img", {
                        staticClass: "t-w-32",
                        attrs: { src: "/assets/svg/icon-zenguard.svg" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      "\n                        PHP Zend Guard Loader\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-md-4 t-text-center" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "t-h-48 t-flex t-justify-center t-items-center"
                    },
                    [
                      _c("img", {
                        staticClass: "t-w-32",
                        attrs: { src: "/assets/svg/icon-composer.svg" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      "\n                        PHP Composer\n                    "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 col-md-4 t-text-center" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "t-h-48 t-flex t-justify-center t-items-center"
                    },
                    [
                      _c("img", {
                        staticClass: "t-w-32",
                        attrs: { src: "/assets/svg/icon-ioncube.svg" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      "\n                        PHP ionCube Loader\n                    "
                    )
                  ])
                ])
              ]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-wrapper-section-content",
        [
          _c("app-wrapper-container", [
            _c("h1", { staticClass: "t-text-center t-font-bold" }, [
              _vm._v(
                "\n                Paket Hosting Singapura yang Tepat\n            "
              )
            ]),
            _vm._v(" "),
            _c("h1", { staticClass: "t-text-center t-font-light" }, [
              _vm._v(
                "\n                Diskon 40% + Domain dan SSL Gratis untuk Anda\n            "
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-wrapper-section-content",
        [_c("app-wrapper-container", [_c("PriceList")], 1)],
        1
      ),
      _vm._v(" "),
      _c(
        "app-wrapper-section-content",
        [
          _c("app-wrapper-container", [
            _c("h1", { staticClass: "t-text-center t-mb-5" }, [
              _vm._v(
                "\n                Powerful dengan Limit PHP yang lebih besar\n            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row t-justify-center" }, [
              _c("div", { staticClass: "col-12 col-md-4 t-mb-3" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "t-border t-border-gray-400 t-p-2 t-flex t-items-center even:t-bg-gray-400"
                  },
                  [
                    _c("div", { staticClass: "col-1" }, [
                      _c("i", {
                        staticClass:
                          "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-10 t-text-center" }, [
                      _vm._v(
                        "\n                            max execution time 300s\n                        "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "t-border t-border-gray-400 t-p-2 t-flex t-items-center even:t-bg-gray-400"
                  },
                  [
                    _c("div", { staticClass: "col-1" }, [
                      _c("i", {
                        staticClass:
                          "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-10 t-text-center" }, [
                      _vm._v(
                        "\n                            max execution time 300s\n                        "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "t-border t-border-gray-400 t-p-2 t-flex t-items-center even:t-bg-gray-400"
                  },
                  [
                    _c("div", { staticClass: "col-1" }, [
                      _c("i", {
                        staticClass:
                          "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-10 t-text-center" }, [
                      _vm._v(
                        "\n                            max execution time 300s\n                        "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-4 t-mb-3" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "t-border t-border-gray-400 t-p-2 t-flex t-items-center even:t-bg-gray-400"
                  },
                  [
                    _c("div", { staticClass: "col-1" }, [
                      _c("i", {
                        staticClass:
                          "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-10 t-text-center" }, [
                      _vm._v(
                        "\n                            max execution time 300s\n                        "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "t-border t-border-gray-400 t-p-2 t-flex t-items-center even:t-bg-gray-400"
                  },
                  [
                    _c("div", { staticClass: "col-1" }, [
                      _c("i", {
                        staticClass:
                          "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-10 t-text-center" }, [
                      _vm._v(
                        "\n                            max execution time 300s\n                        "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "t-border t-border-gray-400 t-p-2 t-flex t-items-center even:t-bg-gray-400"
                  },
                  [
                    _c("div", { staticClass: "col-1" }, [
                      _c("i", {
                        staticClass:
                          "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-10 t-text-center" }, [
                      _vm._v(
                        "\n                            max execution time 300s\n                        "
                      )
                    ])
                  ]
                )
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-wrapper-section-content",
        [
          _c("app-wrapper-container", [
            _c("h1", { staticClass: "t-text-center t-mb-5" }, [
              _vm._v(
                "\n                Semua paket hosting sudah termasuk\n            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row t-justify-center" }, [
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-md-6 col-lg-4 t-mb-3 md:t-mb-5 lg:t-mb-8"
                },
                [
                  _c("div", { staticClass: "t-text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "t-h-32 t-flex t-items-center t-justify-center"
                      },
                      [
                        _c("img", {
                          staticClass: "t-h-20",
                          attrs: {
                            src:
                              "/assets/svg/icon-PHP-Hosting_PHP Semua Versi.svg",
                            alt: ""
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c("h3", { staticClass: "t-font-bold" }, [
                        _vm._v(
                          "\n                                PHP Semua Versi\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "t-max-w-xs t-mx-auto" }, [
                        _vm._v(
                          "\n                                Pilih mulai dari versi PHP 5.3 s/d PHP 7 \n                                Ubah sesuka Anda!\n                            "
                        )
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-md-6 col-lg-4 t-mb-3 md:t-mb-5 lg:t-mb-8"
                },
                [
                  _c("div", { staticClass: "t-text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "t-h-32 t-flex t-items-center t-justify-center"
                      },
                      [
                        _c("img", {
                          staticClass: "t-h-20",
                          attrs: {
                            src: "/assets/svg/icon-PHP-Hosting_My-SQL.svg",
                            alt: ""
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c("h3", { staticClass: "t-font-bold" }, [
                        _vm._v(
                          "\n                                MySQL Versi 5.8\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "t-max-w-xs t-mx-auto" }, [
                        _vm._v(
                          "\n                                Nikmati MySQL versi terbaru tercepat dan \n                                kaya akan fitur\n                            "
                        )
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-md-6 col-lg-4 t-mb-3 md:t-mb-5 lg:t-mb-8"
                },
                [
                  _c("div", { staticClass: "t-text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "t-h-32 t-flex t-items-center t-justify-center"
                      },
                      [
                        _c("img", {
                          staticClass: "t-h-20",
                          attrs: {
                            src: "/assets/svg/icon-PHP-Hosting_CPanel.svg",
                            alt: ""
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c("h3", { staticClass: "t-font-bold" }, [
                        _vm._v(
                          "\n                                Panel Hosting CPanel\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "t-max-w-xs t-mx-auto" }, [
                        _vm._v(
                          "\n                                Kelola website dengan panel canggih \n                                yang familiar dengan Anda\n                            "
                        )
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-md-6 col-lg-4 t-mb-3 md:t-mb-5 lg:t-mb-8"
                },
                [
                  _c("div", { staticClass: "t-text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "t-h-32 t-flex t-items-center t-justify-center"
                      },
                      [
                        _c("img", {
                          staticClass: "t-h-20",
                          attrs: {
                            src:
                              "/assets/svg/icon-PHP-Hosting_garansi-uptime.svg",
                            alt: ""
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c("h3", { staticClass: "t-font-bold" }, [
                        _vm._v(
                          "\n                                Garansi Uptime 99.0%\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "t-max-w-xs t-mx-auto" }, [
                        _vm._v(
                          "\n                                Data Center yang mendukung kelangsungan \n                                Website Anda\n                            "
                        )
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-md-6 col-lg-4 t-mb-3 md:t-mb-5 lg:t-mb-8"
                },
                [
                  _c("div", { staticClass: "t-text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "t-h-32 t-flex t-items-center t-justify-center"
                      },
                      [
                        _c("img", {
                          staticClass: "t-h-20",
                          attrs: {
                            src: "/assets/svg/icon-PHP-Hosting_InnoDB.svg",
                            alt: ""
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c("h3", { staticClass: "t-font-bold" }, [
                        _vm._v(
                          "\n                                Database InnoDB Unlimited\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "t-max-w-xs t-mx-auto" }, [
                        _vm._v(
                          "\n                                Jumlah dan ukuran database yang tumbuh sesuai dengan kebutuhan Anda\n                            "
                        )
                      ])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-md-6 col-lg-4 t-mb-3 md:t-mb-5 lg:t-mb-8"
                },
                [
                  _c("div", { staticClass: "t-text-center" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "t-h-32 t-flex t-items-center t-justify-center"
                      },
                      [
                        _c("img", {
                          staticClass: "t-h-20",
                          attrs: {
                            src:
                              "/assets/svg/icon-PHP-Hosting_My-SQL-remote.svg",
                            alt: ""
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", [
                      _c("h3", { staticClass: "t-font-bold" }, [
                        _vm._v(
                          "\n                                Wildcard Remote MySQL\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "t-max-w-xs t-mx-auto" }, [
                        _vm._v(
                          "\n                                Mendukung s/d 25 max_user_connections dan 100 max_connections\n                            "
                        )
                      ])
                    ])
                  ])
                ]
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-wrapper-section-content",
        [
          _c("app-wrapper-container", [
            _c("h1", { staticClass: "t-text-center t-mb-3" }, [
              _vm._v(
                "\n                Mendukung penuh Framework Laravel\n            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-md-8 col-lg-6 t-mb-4" }, [
                _c("div", [
                  _c(
                    "div",
                    { staticClass: "t-mb-4 t-pt-0 md:t-py-4 lg:t-pt-6" },
                    [
                      _c("h3", { staticClass: "t-mb-2" }, [
                        _vm._v(
                          "\n                                Tak perlu menggunakan dedicated server ataupun VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit Anda.\n                            "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "t-mb-3" }, [
                    _c("ul", [
                      _c(
                        "li",
                        { staticClass: "t-flex t-mb-4 t-items-center" },
                        [
                          _c("i", {
                            staticClass:
                              "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "\n                                        Install Laravel "
                            ),
                            _c("strong", [_vm._v("1 Klik")]),
                            _vm._v(
                              " dengan Softaculus Installer.\n                                    "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "t-flex t-mb-4 t-items-center" },
                        [
                          _c("i", {
                            staticClass:
                              "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "\n                                        Mendukung ekstensi "
                            ),
                            _c("strong", [
                              _vm._v(" PHP MCrypt, phar, mbstring, json ")
                            ]),
                            _vm._v(" dan "),
                            _c("strong", [_vm._v("fileinfo.")])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        { staticClass: "t-flex t-mb-4 t-items-center" },
                        [
                          _c("i", {
                            staticClass:
                              "fas fa-check-circle t-mr-2 t-text-xl t-text-green-600"
                          }),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              "\n                                        Tersedia "
                            ),
                            _c("strong", [_vm._v(" Composer  ")]),
                            _vm._v(" dan "),
                            _c("strong", [_vm._v("SSH")]),
                            _vm._v(
                              " untuk menginstal packages pilihan Anda.\n                                    "
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "t-text-xs" }, [
                      _vm._v(
                        "\n                                nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis\n                            "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "t-mb-3" }, [
                    _c(
                      "a",
                      {
                        staticClass: "button round primary",
                        attrs: { href: "#" }
                      },
                      [_vm._v("Pilih Hosting Anda")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-12 col-md-4 col-lg-6 t-flex t-items-center"
                },
                [
                  _c("div", { staticClass: "t-w-full" }, [
                    _c("img", {
                      staticClass: "t-w-full",
                      attrs: {
                        src:
                          "/assets/svg/illustration-banner-support-laravel-hosting.svg",
                        alt: ""
                      }
                    })
                  ])
                ]
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("app-border-horizontal"),
      _vm._v(" "),
      _c(
        "app-wrapper-section-content",
        [
          _c("app-wrapper-container", [
            _c("h1", { staticClass: "t-text-center t-mb-10" }, [
              _vm._v(
                "\n                Modul lengkap untuk menjalankan Aplikasi PHP Anda.\n            "
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "row t-justify-center t-max-w-screen-lg t-mx-auto t-mb-5"
              },
              _vm._l(_vm.phpModules, function(phpModuleItem, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-6 col-md-4 col-lg-3 t-mb-3" },
                  _vm._l(phpModuleItem, function(phpModule, index) {
                    return _c(
                      "div",
                      { key: index, staticClass: "t-ml-0 md:t-ml-8" },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(phpModule) +
                            "\n                    "
                        )
                      ]
                    )
                  }),
                  0
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "t-mb-4 t-text-center" }, [
              _c("a", { staticClass: "button round", attrs: { href: "#" } }, [
                _vm._v("Selengkapnya")
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-wrapper-section-content",
        { staticClass: "md:t-pb-0" },
        [
          _c("app-wrapper-container", [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-md-8 col-lg-6" }, [
                _c("div", [
                  _c(
                    "div",
                    { staticClass: "t-mb-4 t-pt-0 md:t-py-4 lg:t-pt-6" },
                    [
                      _c("h1", { staticClass: "t-mb-2 t-text-3xl" }, [
                        _vm._v(
                          "\n                                Linux Hosting yang Stabil "
                        ),
                        _c("br"),
                        _vm._v(
                          " dengan Teknologi LIVE \n                            "
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "t-mb-3" }, [
                    _c("p", { staticClass: "t-max-w-md t-text-justify" }, [
                      _vm._v("\n                                SuperMicro "),
                      _c("b", [_vm._v("Intel Xeon 24-Cores")]),
                      _vm._v(" server dengan RAM "),
                      _c("b", [_vm._v("128GB")]),
                      _vm._v(" dan teknologi "),
                      _c("b", [_vm._v("LIVE CloudLinux")]),
                      _vm._v(
                        " utuk stabilitas server Anda. Dilengkapi dengan "
                      ),
                      _c("b", [_vm._v("SSD")]),
                      _vm._v(" untuk kecepatan "),
                      _c("b", [_vm._v("MySQL")]),
                      _vm._v(
                        " dan caching, Apache load balancer berbasis LiteSpeed Technologies. "
                      ),
                      _c("b", [_vm._v("CageFS")]),
                      _vm._v(" security, "),
                      _c("b", [_vm._v("Raid-10")]),
                      _vm._v(
                        " protection dan auto backup untuk keamanan website Anda.\n                            "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "t-mb-5" }, [
                    _c(
                      "a",
                      {
                        staticClass: "button round primary",
                        attrs: { href: "#" }
                      },
                      [_vm._v("Pilih Hosting Anda")]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-md-4 col-lg-6 t-flex t-items-end t-pt-4"
                },
                [
                  _c("div", { staticClass: "t-w-full" }, [
                    _c("img", {
                      staticClass: "t-w-full",
                      attrs: { src: "/assets/images/support.png", alt: "" }
                    })
                  ])
                ]
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "app-wrapper-section-content",
        { staticClass: "t-bg-gray-300" },
        [
          _c("app-wrapper-container", [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-md-6 t-mb-3" }, [
                _c("h2", { staticClass: "t-text-center lg:t-text-left;" }, [
                  _vm._v(
                    "\n                        Bagikan jika Anda menyukai halaman ini.\n                    "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-6" }, [
                _c(
                  "ul",
                  {
                    staticClass:
                      "t-flex t-flex-wrap t-justify-center lg:t-justify-end"
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "t-flex t-mr-3 social-media-item" },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "t-bg-blue-darken t-h-8 t-w-8 t-flex t-justify-center t-items-center t-rounded-lg t-mr-1",
                            attrs: { href: "" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "fab fa-facebook-f t-text-white t-text-lg"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "t-h-full t-border-2 t-border-gray-400 t-rounded-md t-flex t-justify-center t-items-center t-px-2 counter"
                          },
                          [
                            _c("span", { staticClass: "t-text-xs" }, [
                              _vm._v(
                                "\n                                    80 K\n                                "
                              )
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "t-flex t-mr-3 social-media-item" },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "t-bg-blue-400 t-h-8 t-w-8 t-flex t-justify-center t-items-center t-rounded-lg t-mr-1",
                            attrs: { href: "" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "fab fa-twitter t-text-white t-text-lg"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "t-h-full t-border-2 t-border-gray-400 t-rounded-md t-flex t-justify-center t-items-center t-px-2 counter"
                          },
                          [
                            _c("span", { staticClass: "t-text-xs" }, [
                              _vm._v(
                                "\n                                    450\n                                "
                              )
                            ])
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "t-flex t-mr-3 social-media-item" },
                      [
                        _c(
                          "a",
                          {
                            staticClass:
                              "t-bg-red-600 t-h-8 t-w-8 t-flex t-justify-center t-items-center t-rounded-lg t-mr-1",
                            attrs: { href: "" }
                          },
                          [
                            _c("i", {
                              staticClass:
                                "fab fa-google t-text-white t-text-lg"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "t-h-full t-border-2 t-border-gray-400 t-rounded-md t-flex t-justify-center t-items-center t-px-2 counter"
                          },
                          [
                            _c("span", { staticClass: "t-text-xs" }, [
                              _vm._v(
                                "\n                                    1900\n                                "
                              )
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/PriceCard.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/PriceCard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceCard_vue_vue_type_template_id_00b9d99e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceCard.vue?vue&type=template&id=00b9d99e& */ "./resources/js/components/PriceCard.vue?vue&type=template&id=00b9d99e&");
/* harmony import */ var _PriceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceCard.vue?vue&type=script&lang=js& */ "./resources/js/components/PriceCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PriceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PriceCard_vue_vue_type_template_id_00b9d99e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PriceCard_vue_vue_type_template_id_00b9d99e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PriceCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PriceCard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/PriceCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PriceCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PriceCard.vue?vue&type=template&id=00b9d99e&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/PriceCard.vue?vue&type=template&id=00b9d99e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCard_vue_vue_type_template_id_00b9d99e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PriceCard.vue?vue&type=template&id=00b9d99e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCard.vue?vue&type=template&id=00b9d99e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCard_vue_vue_type_template_id_00b9d99e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCard_vue_vue_type_template_id_00b9d99e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/PriceCardHeader.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/PriceCardHeader.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceCardHeader_vue_vue_type_template_id_1122a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceCardHeader.vue?vue&type=template&id=1122a56a&scoped=true& */ "./resources/js/components/PriceCardHeader.vue?vue&type=template&id=1122a56a&scoped=true&");
/* harmony import */ var _PriceCardHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceCardHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/PriceCardHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PriceCardHeader_vue_vue_type_style_index_0_id_1122a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true& */ "./resources/js/components/PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PriceCardHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PriceCardHeader_vue_vue_type_template_id_1122a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PriceCardHeader_vue_vue_type_template_id_1122a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1122a56a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PriceCardHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PriceCardHeader.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/PriceCardHeader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCardHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PriceCardHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCardHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCardHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCardHeader_vue_vue_type_style_index_0_id_1122a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCardHeader.vue?vue&type=style&index=0&id=1122a56a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCardHeader_vue_vue_type_style_index_0_id_1122a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCardHeader_vue_vue_type_style_index_0_id_1122a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCardHeader_vue_vue_type_style_index_0_id_1122a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCardHeader_vue_vue_type_style_index_0_id_1122a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCardHeader_vue_vue_type_style_index_0_id_1122a56a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/PriceCardHeader.vue?vue&type=template&id=1122a56a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/PriceCardHeader.vue?vue&type=template&id=1122a56a&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCardHeader_vue_vue_type_template_id_1122a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PriceCardHeader.vue?vue&type=template&id=1122a56a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceCardHeader.vue?vue&type=template&id=1122a56a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCardHeader_vue_vue_type_template_id_1122a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceCardHeader_vue_vue_type_template_id_1122a56a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/PriceList.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/PriceList.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PriceList_vue_vue_type_template_id_516c982c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PriceList.vue?vue&type=template&id=516c982c& */ "./resources/js/components/PriceList.vue?vue&type=template&id=516c982c&");
/* harmony import */ var _PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PriceList.vue?vue&type=script&lang=js& */ "./resources/js/components/PriceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PriceList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PriceList.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/PriceList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PriceList_vue_vue_type_template_id_516c982c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PriceList_vue_vue_type_template_id_516c982c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PriceList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PriceList.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/PriceList.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PriceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PriceList.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/PriceList.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./PriceList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/PriceList.vue?vue&type=template&id=516c982c&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/PriceList.vue?vue&type=template&id=516c982c& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_template_id_516c982c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PriceList.vue?vue&type=template&id=516c982c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PriceList.vue?vue&type=template&id=516c982c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_template_id_516c982c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PriceList_vue_vue_type_template_id_516c982c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=bb7a9770&scoped=true& */ "./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/pages/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _home_vue_vue_type_style_index_0_id_bb7a9770_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true& */ "./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bb7a9770",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_bb7a9770_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=style&index=0&id=bb7a9770&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_bb7a9770_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_bb7a9770_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_bb7a9770_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_bb7a9770_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_id_bb7a9770_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=bb7a9770&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);