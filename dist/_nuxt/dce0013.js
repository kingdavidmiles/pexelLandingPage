(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{236:function(t,e,n){var content=n(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(61).default)("f4fea9d0",content,!0,{sourceMap:!1})},237:function(t,e,n){"use strict";n.r(e);var l={},r=n(42),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-nav-bar__logo__img"},[n("div",{staticClass:"grid grid-cols-2"},[n("div",[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",viewBox:"0 0 32 32"}},[n("path",{attrs:{d:"M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z",fill:"#05A081"}}),t._v(" "),n("path",{attrs:{d:"M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z",fill:"#fff"}})])]),t._v(" "),n("div",{staticClass:"\n        hide-when-mid-size-and-smaller\n        main-nav-bar__logo__text\n        text-black\n        mt-1\n      ",attrs:{href:"/"}},[t._v("\n      Pexels\n    ")])])])}),[],!1,null,"17eb1a9c",null);e.default=component.exports},238:function(t,e,n){"use strict";n(236)},239:function(t,e,n){var l=n(60)((function(i){return i[1]}));l.push([t.i,"#back[data-v-3ea895cc]{\n  background-image:url(https://images.pexels.com/photos/4596807/pexels-photo-4596807.jpeg?auto=compress&crop=focalpoint&cs=tinysrgb&fit=crop&h=500&sharp=15&w=1000);\n  background-repeat:no-repeat;\n  background-size:cover;\n  width:100%\n}",""]),l.locals={},t.exports=l},245:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{isOpen:!1}},methods:{drawer:function(){this.isOpen=!this.isOpen}},watch:{isOpen:{immediate:!0,handler:function(t){t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){27==e.keyCode&&t.isOpen&&(t.isOpen=!1)}))}},r=(n(238),n(42)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"w-full p-6",attrs:{id:"back"}},[n("div",{staticClass:"flex items-center justify-between"},[n("div",[n("Tailwind")],1),t._v(" "),n("div",{staticClass:"md:hidden"},[n("button",{on:{click:t.drawer}},[n("svg",{staticClass:"h-8 w-8 fill-current text-black",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),t._m(0),t._v(" "),n("transition",{attrs:{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"z-10 fixed inset-0 transition-opacity",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.isOpen=!1}}},[n("div",{staticClass:"absolute inset-0 bg-black opacity-50",attrs:{tabindex:"0"},on:{click:function(e){t.isOpen=!1}}})])]),t._v(" "),n("aside",{staticClass:"\n        p-5\n        transform\n        top-0\n        left-0\n        w-full\n        text-white\n        fixed\n        h-full\n        overflow-auto\n        ease-in-out\n        transition-all\n        duration-300\n        z-30\n      ",class:t.isOpen?"translate-x-0":"-translate-x-full",staticStyle:{"background-color":"#232a34"}},[n("div",{staticClass:"close"},[n("button",{staticClass:"absolute top-0 right-0 mt-4 mr-4",on:{click:function(e){t.isOpen=!1}}},[n("svg",{staticClass:"w-6 h-6",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),n("span",{staticClass:"flex w-full items-center p-4",on:{click:function(e){t.isOpen=!1}}},[n("div",{staticClass:"flex flex-wrap overflow-hidden"},[n("div",{staticClass:"my-3 w-1/5 overflow-hidden"},[n("Tailwind")],1),t._v(" "),t._m(1)])]),t._v(" "),n("ul",{staticClass:"font-sans leading-relaxed"},[n("li",[n("a",{staticClass:"my-4 capitalize text-2xl font-light",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("Home")])]),t._v(" "),n("hr",{staticClass:"w-full"}),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("discover photos")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("popular search")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("free videos")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("challenges")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("leaderboard")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("pexels blog")])]),t._v(" "),n("hr",{staticClass:"py-3 mt-5"}),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("login")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("join")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("change language")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("License")])]),t._v(" "),n("hr",{staticClass:"py-3 mt-5"}),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("app and ps plugins")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("FAQ")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("about us")])]),t._v(" "),n("li",[n("a",{staticClass:"my-4 text-xl font-medium capitalize",attrs:{href:"#"},on:{click:function(e){t.isOpen=!1}}},[t._v("imprint & terms\n          ")])])]),t._v(" "),n("hr",{staticClass:"py-3 mt-5"}),t._v(" "),n("div",{staticClass:"follow"},[n("div",{staticClass:"social flex space-x-5 mt-4"},[n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-gray-600",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}})])]),t._v(" "),n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-gray-600",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-f",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[n("path",{attrs:{fill:"currentColor",d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}})])]),t._v(" "),n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-gray-600",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}})])]),t._v(" "),n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-gray-600",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"youtube",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[n("path",{attrs:{fill:"currentColor",d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}})])]),t._v(" "),n("a",{attrs:{href:"#"}},[n("svg",{staticClass:"h-5 w-5 fill-current text-gray-600",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"youtube",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[n("path",{attrs:{fill:"currentColor",d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}})])])])])])],1),t._v(" "),n("br"),t._v(" "),t._m(2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hidden md:block"},[n("ul",{staticClass:"flex space-x-8 text-sm font-sans text-white font-bold"},[n("li",[n("a",{staticClass:"pb-1",attrs:{href:"#"}},[t._v("Explore")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("License")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("Upload")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#"}},[t._v("...")])]),t._v(" "),n("li",[n("a",{staticClass:"\n              cta\n              bg-green-500\n              px-10\n              py-3\n              rounded\n              text-white\n              font-semibold\n            ",attrs:{href:"#"}},[t._v("join")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-3 w-4/5 overflow-hidden"},[n("input",{staticClass:"\n                w-full\n                pl-3\n                pr-10\n                py-1\n                border-2 border-gray-200\n                rounded-md\n                hover:border-gray-300\n                focus:outline-none focus:border-blue-500\n                transition-colors\n              ",attrs:{type:"text",id:"text",placeholder:"Search for free photos and videos"}}),t._v(" "),n("button",{staticClass:"\n                block\n                w-7\n                h-7\n                text-center text-xl\n                leading-0\n                absolute\n                top-2\n                right-2\n                text-gray-400\n                focus:outline-none\n                hover:text-gray-900\n                transition-colors\n              "},[n("i",{staticClass:"mdi mdi-magnify"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap md:mx-2 overflow-hidden"},[n("div",{staticClass:"\n        my-2\n        px-2\n        w-full\n        lg:w-1/5\n        md:w-1/5\n        overflow-hidden\n        invisible\n        md:visible\n        lg:visible\n        xl:visible\n      "}),t._v(" "),n("div",{staticClass:"md:my-2 md:px-2 w-full md:w-2/4 overflow-hidden md:py-20"},[n("div",{staticClass:"text-3xl md:text-4xl font-semibold pb-3 mb-4 text-white"},[t._v("\n        The best free stock photos & videos shared by talented creators.\n      ")]),t._v(" "),n("div",[n("input",{staticClass:"\n            w-full\n            pl-3\n            pr-10\n            py-3\n            border-2 border-gray-200\n            rounded-md\n            hover:border-gray-300\n            focus:outline-none focus:border-blue-500\n            transition-colors\n          ",attrs:{type:"text",id:"password",placeholder:"Search for free photos and videos"}}),t._v(" "),n("button",{staticClass:"\n            block\n            w-7\n            h-7\n            text-center text-xl\n            leading-0\n            absolute\n            top-2\n            right-2\n            text-gray-400\n            focus:outline-none\n            hover:text-gray-900\n            transition-colors\n          "},[n("i",{staticClass:"mdi mdi-magnify"})]),t._v(" "),n("p",{staticClass:"text-white text-md"},[t._v("\n          Suggested: background image office city blur landscape free\n          background beautiful more\n        ")])])]),t._v(" "),n("div",{staticClass:"\n        my-2\n        px-2w-full\n        lg:w-1/5\n        md:w-1/5\n        overflow-hidden\n        invisible\n        md:visible\n        lg:visible\n        xl:visible\n      "})])}],!1,null,"3ea895cc",null);e.default=component.exports;installComponents(component,{Tailwind:n(237).default})}}]);