!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=7)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(c=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var c,a,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<n.length;a++){var u=[].concat(n[a]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),t.push(u))}},t}},function(n,t,e){var r=e(2),o=e(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),c=[];function a(n){for(var t=-1,e=0;e<c.length;e++)if(c[e].identifier===n){t=e;break}return t}function u(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],u=t.base?i[0]+t.base:i[0],l=e[u]||0,f="".concat(u," ").concat(l);e[u]=l+1;var s=a(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(c[s].references++,c[s].updater(p)):c.push({identifier:f,updater:b(p,t),references:1}),r.push(f)}return r}function l(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var c=i(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var f,s=(f=[],function(n,t){return f[n]=t,f.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),c=n.childNodes;c[t]&&n.removeChild(c[t]),c.length?n.insertBefore(i,c[t]):n.appendChild(i)}}function d(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var h=null,y=0;function b(n,t){var e,r,o;if(t.singleton){var i=y++;e=h||(h=l(t)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=l(t),r=d.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=u(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=a(e[r]);c[o].references--}for(var i=u(n,t),l=0;l<e.length;l++){var f=a(e[l]);0===c[f].references&&(c[f].updater(),c.splice(f,1))}e=i}}}},function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r)()(!1);o.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),o.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Mukta&display=swap);"]),o.push([n.i,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    background-color: rgb(255, 229, 205);\r\n}\r\nmeal-list {\r\n    margin-top: 32px;\r\n    display: block;\r\n    width: 100%;\r\n    padding: 40px;\r\n    margin: 0% auto;\r\n    background-color: white;\r\n    overflow: auto;\r\n}\r\n\r\nmeal-list h1{\r\n    color: tomato;\r\n    text-align: center;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\njumbotron-page{\r\n    font-family:  'Mukta', sans-serif;\r\n}   \r\nfooter{\r\n    width: 100%;\r\n    text-align: center;\r\n    background-color: #fa8100;\r\n    padding: 25px;\r\n    font-size: 14px;\r\n    font-family: 'Roboto', sans-serif;\r\n    color: white;\r\n}\r\n \r\n",""]),t.default=o},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,n)})(n)}function c(n,t,e){return(c=a()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&u(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function u(n,t){return(u=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&u(n,t)}(p,n);var t,e,i,c,f,s=(t=p,e=a(),function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function p(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=s.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n        <style>\n            @import url(\'https://fonts.googleapis.com/css2?family=Roboto&display=swap\');\n            @import url(\'https://fonts.googleapis.com/css2?family=Mukta:wght@400&display=swap\');\n\n            * {\n                margin: 0;\n                padding: 20px;\n                box-sizing: border-box;\n            }\n            :host{\n                position: sticky;\n                top: 0;\n                width: 100%;\n                background-color: #fa8100;\n                font-family: \'Roboto\', sans-serif;\n                display: flex;\n                padding: 20px 8%;\n                justify-content: space-between;\n                align-items: center; \n            }\n            @media screen and (max-width: 615px) {\n                :host{\n                    flex-direction: column;\n                }  \n                ul{\n                    margin: 0% auto;\n                    flex-direction: column;\n                    width: 100%;\n                    text-align: center;\n                } \n                li a{\n                    display: block;\n                    padding: 10px 20px;\n                }\n                \n                \n            }\n            .logo a{\n                text-decoration: none;\n                font-weight: 900;\n                font-size: 20px;\n                color: white;\n            }\n\n            ul{\n                float: right;\n                display: flex;\n            }\n            li{\n                list-style: none;\n                display: inline;\n                padding: 0 20px;\n            }\n            li a{\n                color: white;\n                font-weight: 100;\n                text-decoration: none;\n                font-size: 14px;\n            }\n            li a:hover{\n                background-color: #ff9326;\n                transition: 500ms;\n            }\n            \n        </style>\n        <div class="logo">\n            <a href="#">YourMeals</a>\n        </div>\n        <ul>\n            <li><a href="#">Home</a></li>\n            <li><a href="#">About</a></li>\n            <li><a href="#">Contact</a></li>\n        </ul>\n        '}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("nav-bar",f)},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,n)})(n)}function c(n,t,e){return(c=a()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&u(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function u(n,t){return(u=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&u(n,t)}(p,n);var t,e,i,c,f,s=(t=p,e=a(),function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function p(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=s.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return i=p,(c=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n        <style>\n            @media screen and (max-width: 550px) {\n                #searchButtonElement{\n                    width: 20%;  \n                    font-size: 12px;\n                }\n            }\n            \n            .search-container{\n                margin: 2% auto;\n                width: 70%;  \n            }\n            .search-container input{\n                width: 70%;\n                margin-left: 1%;\n                height: 40px;\n                display: inline-block;\n                padding: 10px;\n                border-radius: 5px;\n                border: 2px solid #fa8100;\n                color: rgb(167, 108, 0);\n            }\n            .search-container button{\n                width: 15%;\n                height: 40px;\n                display: inline-block;\n                border-radius: 5px;\n                border: 2px solid #ffa647;\n                background-color: rgb(255, 183, 49);\n                color: white;\n                font-size: 14px;\n            }\n            .search-container input:focus{\n                outline-color: #fa8100;\n                box-shadow: 5px 5px 30px rgba(190, 76, 0, 0.473);\n            }\n            .search-container button:hover{\n                background-color: #fa8100;\n            }\n            .search-container button:focus{\n                outline-color: #ffa647;\n            }\n        </style>\n        <div id="search-container" class="search-container">\n            <input placeholder="Search your meal here..." id="searchElement" type="search">\n            <button id="searchButtonElement" type="submit">Search</button>\n        </div>\n        ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}},{key:"clickEvent",set:function(n){this._clickEvent=n,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("search-bar",f)},function(n,t){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function i(n){var t="function"==typeof Map?new Map:void 0;return(i=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return c(n,arguments,l(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,n)})(n)}function c(n,t,e){return(c=a()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&u(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function u(n,t){return(u=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var f=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&u(n,t)}(p,n);var t,e,i,c,f,s=(t=p,e=a(),function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return o(this,n)});function p(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(n=s.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return i=p,(c=[{key:"render",value:function(){this.shadowDOM.innerHTML='\n        <style>\n        \n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n        }\n        :host {\n            width: 23%;\n            display: block;\n            height: 300px;\n            margin-left: 7%;\n            margin-bottom: 4%;\n            border-radius: 5px;\n            float: left;\n            border: 1px solid rgb(255, 123, 0);\n        }\n        @media screen and (max-width: 1115px) {\n            :host{\n                width: 40%;\n            }   \n            \n        }\n        @media screen and (max-width: 720px) {\n            :host{\n                width: 80%;\n                margin-left: 9%;\n            }   \n            \n        }\n        \n        \n        .meal-image {\n            border-radius: 5px;\n            width: 100%;\n            height: 180px;\n            object-fit: cover;\n            object-position: center;\n        \n        }\n        \n        .meal-info {\n            overflow: hidden;\n            font-family: \'Mukta\';\n        }\n        \n        .meal-info > h2 {\n            padding: 6px;\n            font-weight: lighter;\n            text-align: center;\n            border-bottom: 1px solid rgb(255, 123, 0); \n            background-color: rgb(255, 145, 0, 0.8);  \n        }\n        \n        .meal-info > p {\n            margin-top: 5px;\n            padding: 0px 10px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 10; /* number of lines to show */\n        }\n        </style>\n        <img class="meal-image" src="  '.concat(this._meal.strMealThumb,'  " alt="meal-image"> \n        <div class="meal-info"> \n            <h2>  ').concat(this._meal.strMeal,"  </h2> \n            <p>Category : ").concat(this._meal.strCategory,"  </p>\n            <p>Origin   : ").concat(this._meal.strArea,"  </p> \n        </div>")}},{key:"meal",set:function(n){this._meal=n,this.render()}}])&&r(i.prototype,c),f&&r(i,f),p}(i(HTMLElement));customElements.define("meal-item",f)},function(n,t,e){"use strict";e.r(t);e(1),e(4);var r=e.p+"images/meal-ec217bef5fb8c607ed89414016fa4af0.jpg";function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function c(n,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function a(n){var t="function"==typeof Map?new Map:void 0;return(a=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return u(n,arguments,s(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,n)})(n)}function u(n,t,e){return(u=l()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function f(n,t){return(f=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var p=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&f(n,t)}(d,n);var t,e,o,a,u,p=(t=d,e=l(),function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)});function d(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(n=p.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return o=d,(a=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n        <style>\n            @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n            @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400&display=swap');\n\n\n            @media only screen and (max-width: 1000px) {\n                #slogan{\n                    font-size: 55px;\n                }\n            }\n            @media only screen and (max-width: 660px) {\n                #slogan{\n                    font-size: 35px;\n                    margin-top: 10%;\n                }\n            }\n            \n            .jumbotron {\n                background-color: white;\n                height: 400px;\n                margin-top: 1%;\n                background: url(".concat(r,');\n                background-position: center;\n                background-repeat: none;\n                background-size: cover;      \n            }\n            .jumbotron h1{\n                font-weight: 100;\n                margin-top: -50px;\n                font-size: 65px;\n            }\n            .jumbotron p{\n                font-weight: medium;\n                font-size: 35px;\n                margin-top: 20px;\n            }\n            .jumbotron-words{\n                \n                padding: 7%;\n                color: white;\n                text-align: center;\n                text-shadow: 2px 2px 5px rgb(190, 76, 0);\n            }\n        </style>\n        <div class="jumbotron">\n            <div class="jumbotron-words">\n                <h1 id="slogan">Jelajahi bermacam makanan dari berbagai belahan dunia</h1>\n                <p>Temukan disini!</p>\n            </div>\n        </div>   \n        ')}}])&&i(o.prototype,a),u&&i(o,u),d}(a(HTMLElement));function d(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}customElements.define("jumbotron-page",p);var h=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,e,r;return t=n,r=[{key:"searchMeal",value:function(n){return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(n)).then((function(n){return n.json()})).then((function(t){return t.meals?Promise.resolve(t.meals):Promise.reject("Tidak menemukan hasil dari ".concat(n))}))}}],(e=null)&&d(t.prototype,e),r&&d(t,r),n}();e(5),e(6);function y(n){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function b(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function m(n,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function v(n){var t="function"==typeof Map?new Map:void 0;return(v=function(n){if(null===n||(e=n,-1===Function.toString.call(e).indexOf("[native code]")))return n;var e;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return g(n,arguments,O(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),x(r,n)})(n)}function g(n,t,e){return(g=w()?Reflect.construct:function(n,t,e){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(n,r));return e&&x(o,e.prototype),o}).apply(null,arguments)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function x(n,t){return(x=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function O(n){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var j=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&x(n,t)}(a,n);var t,e,r,o,i,c=(t=a,e=w(),function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)});function a(){var n;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=c.call(this)).shadowDOM=n.attachShadow({mode:"open"}),n}return r=a,(o=[{key:"render",value:function(){var n=this;this.shadowDOM.innerHTML="",this._meals.forEach((function(t){var e=document.createElement("meal-item");e.meal=t,n.shadowDOM.appendChild(e)}))}},{key:"renderError",value:function(n){this.shadowDOM.innerHTML="",this.shadowDOM.innerHTML+='\n        <style>\n        .placeholder {\n            text-align: center;\n            font-family: sans-serif;\n            font-weight: lighter;\n            color: rgba(122, 0, 0, 0.541);\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n        }\n        </style>\n        <h2 class="placeholder">'.concat(n,"</h2>\n        ")}},{key:"meals",set:function(n){this._meals=n,this.render()}}])&&b(r.prototype,o),i&&b(r,i),a}(v(HTMLElement));customElements.define("meal-list",j);var S=function(){var n=document.querySelector("search-bar"),t=document.querySelector("meal-list"),e=function(n){t.meals=n},r=function(n){t.renderError(n)};n.clickEvent=function(){h.searchMeal(n.value).then(e).catch(r)}};document.addEventListener("DOMContentLoaded",S)}]);