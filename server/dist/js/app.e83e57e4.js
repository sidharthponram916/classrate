(function(t){function e(e){for(var s,n,o=e[0],i=e[1],l=e[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);h&&h(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==r[o]&&(s=!1)}s&&(c.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r={app:0},c=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-00cd7031":"e7f175d8","chunk-21f9aa82":"61185226","chunk-283c9ba5":"1aa774f5","chunk-2d0d5fb3":"88c57168","chunk-2d2223a5":"356571f1","chunk-6f10f498":"37a1d227","chunk-b3798792":"eacbe703","chunk-b89435f2":"4fd19e66","chunk-edc8fe9a":"fa08ba1a","chunk-1d482f62":"d440215a","chunk-826a0ffa":"29cf10a2","chunk-f75798aa":"47e02c12"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-00cd7031":1,"chunk-21f9aa82":1,"chunk-283c9ba5":1,"chunk-6f10f498":1,"chunk-b3798792":1,"chunk-b89435f2":1,"chunk-826a0ffa":1,"chunk-f75798aa":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-00cd7031":"dc2e80fe","chunk-21f9aa82":"ff958f04","chunk-283c9ba5":"bd1a3516","chunk-2d0d5fb3":"31d6cfe0","chunk-2d2223a5":"31d6cfe0","chunk-6f10f498":"0d05e2ed","chunk-b3798792":"0d05e2ed","chunk-b89435f2":"9428af43","chunk-edc8fe9a":"31d6cfe0","chunk-1d482f62":"31d6cfe0","chunk-826a0ffa":"d61161f2","chunk-f75798aa":"9ae2d2dd"}[t]+".css",r=i.p+s,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===s||u===r)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var s=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=s,delete n[t],h.parentNode.removeChild(h),a(c)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){n[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var c=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}r[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1a12":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("ac1f"),a("5319");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-col min-h-screen",attrs:{id:"app"}},[a("Navbar"),a("router-view"),a("div",{staticClass:"mt-auto text-center p-4 text-black"},[t._v(" ⓒ Classrate 9/5/22, An Educational Organization")])],1)},r=[],c=a("c7eb"),o=a("1da1"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"flex relative items-center bg-blue-900 justify-between text-white p-3 w-full"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),!1===t.$store.state.loggedIn?a("li",{staticClass:"ml-auto"},[a("a",{staticClass:"block align-middle bg-blue-600 hover:bg-blue-500 p-2 rounded",attrs:{href:"/signup"}},[t._v("Sign Up")])]):a("li",{staticClass:"hidden md:block ml-auto"},[a("a",{staticClass:"block align-middle bg-blue-900 hover:bg-blue-800 text-white p-2 rounded",attrs:{href:"/view/profile"}},[t._v("My Page")])]),!1===t.$store.state.loggedIn?a("li",{staticClass:"ml-5"},[a("a",{staticClass:"block align-middle bg-blue-900 hover:bg-blue-800 text-white p-2 rounded",attrs:{href:"/login"}},[t._v("Log In")])]):a("li",{staticClass:"ml-5"},[a("a",{staticClass:"block align-middle text-white bg-blue-900 hover:bg-blue-800 p-2 rounded",attrs:{href:"/login"},on:{click:function(e){return t.logOut()}}},[t._v("Log Out")])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:" mr-6"},[a("a",{staticClass:"block align-middle text-2xl p-2",attrs:{href:"/home"}},[a("span",{staticClass:"flex"},[t._v("🎓 "),a("span",{staticClass:"ml-2"},[t._v("Class"),a("span",{staticClass:"text-yellow-200"},[t._v("Rate")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"hidden md:block mr-6"},[a("a",{staticClass:"align-middle p-2",attrs:{href:"/write"}},[t._v("Write a Review")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"block md:hidden mr-6"},[a("a",{staticClass:"align-middle p-2 text-2xl",attrs:{href:"/write"}},[t._v("📋")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"block md:hidden mr-6"},[a("a",{staticClass:"align-middle p-2 text-2xl",attrs:{href:"/tools/builder"}},[t._v("📈")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"hidden md:block mr-6"},[a("a",{staticClass:"block align-middle p-2",attrs:{href:"/tools/builder"}},[t._v("Build Schedule")])])}],u={components:{},methods:{logOut:function(){var t=this;return Object(o["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:localStorage.removeItem("token"),delete t.$http.defaults.headers.common["Authorization"],t.$store.commit("logOut");case 3:case"end":return e.stop()}}),e)})))()}}},d=u,h=(a("5dfc"),a("2877")),f=Object(h["a"])(d,i,l,!1,null,null,null),m=f.exports,p={components:{Navbar:m},mounted:function(){var t=this;return Object(o["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t.$store.state.loggedIn);case 1:case"end":return e.stop()}}),e)})))()}},g=p,v=(a("034f"),Object(h["a"])(g,n,r,!1,null,null,null)),b=v.exports,w=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("8c4f")),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"p-16 text-white bg-blue-600",staticStyle:{background:"url('https://frsinc.co/wp-content/uploads/students-background.jpg')","background-size":"cover"}},[s("img",{staticClass:"m-auto w-72 h-56",attrs:{src:a("cf05")}}),s("h1",{staticClass:"text-7xl text-center text-white"},[t._v("Your Base for Student Insight")]),s("h1",{staticClass:" text-xl mb-16 text-center text-white"},[t._v("Write or learn more about your classes. ")]),s("SearchBar",{attrs:{styling:"mx-auto flex grid grid-cols-1 w-full mb-10 pl-10"}})],1),t._m(0),t._m(1),t._m(2),t._m(3)])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex grid md:grid-cols-2"},[a("div",{staticClass:"bg-indigo-900 text-white p-20"},[a("h1",{staticClass:"text-6xl m-2 p-2"},[t._v("What is "),a("span",{staticClass:"ml-2"},[t._v("Class"),a("span",{staticClass:"text-yellow-200"},[t._v("Rate")])]),t._v("?")]),a("p",{staticClass:"text-2xl m-2 p-2"},[t._v("ClassRate.org is a platform that use student reviews in order to gather and quantify useful information, such as course and teacher data, and school leaderboards.")]),a("h1",{staticClass:" text-9xl m-2 p-2"},[t._v("🤝")])]),a("div",{staticClass:"bg-blue-900 text-white p-20"},[a("h1",{staticClass:"text-6xl m-2 p-2"},[t._v("Our Mission Statement")]),a("p",{staticClass:" text-2xl m-2 p-2"},[t._v("We want to make sure that ClassRate helps people make their decisions when choosing school classes, and creating a tightly-knit community. ")]),a("h1",{staticClass:"text-9xl m-2 p-2"},[t._v("🗣️")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex grid md:grid-cols-2 "},[s("div",{staticClass:"bg-blue-900 text-white p-20 text-left"},[s("h1",{staticClass:"text-6xl m-2 p-2"},[t._v("Post Reviews")]),s("p",{staticClass:"text-2xl m-2 p-2"},[t._v("ClassRate is powered by student reviews, so write a review about your classes to help the website grow and help your peers. ")])]),s("div",{staticClass:"bg-indigo-600 text-white p-20"},[s("img",{staticClass:"border-4 border-white rounded",staticStyle:{width:"800px",height:"350px"},attrs:{src:a("cb01")}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex grid md:grid-cols-2 "},[s("div",{staticClass:"bg-indigo-900 text-white p-20"},[s("img",{staticClass:"border-4 border-white rounded",staticStyle:{width:"800px",height:"350px"},attrs:{src:a("c94f")}})]),s("div",{staticClass:"bg-blue-900 text-white p-20 text-left"},[s("h1",{staticClass:"text-6xl m-2 p-2"},[t._v("View and Interact with Data")]),s("p",{staticClass:"text-2xl m-2 p-2"},[t._v("From student reviews, ClassRate generates data and compiles them by school, course, and individual reviews and puts them on thier respective pages. The reviews also power the course builder, helping students choose their classes with live data.")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-blue-600 text-white p-20 text-center"},[a("h1",{staticClass:"text-6xl m-2 p-2"},[t._v("Questions?")]),a("p",{staticClass:"text-2xl m-2 p-2"},[t._v("Contact Us at "),a("a",{staticClass:"text-blue-100",attrs:{href:"mailto:contact@classrate.org"}},[t._v("contact@classrate.org")])])])}],C=(a("fb6a"),a("86e1")),k={name:"Home",components:{SearchBar:C["a"]},data:function(){return{schools:[]}},mounted:function(){var t=this;return Object(o["a"])(Object(c["a"])().mark((function e(){var a,s;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/schools/all");case 2:a=e.sent,s=a.data,t.schools=s.slice(0,8);case 5:case"end":return e.stop()}}),e)})))()}},y=k,O=Object(h["a"])(y,x,_,!1,null,null,null),j=O.exports;s["a"].use(w["a"]);var S=[{path:"/",name:"Intro",component:j},{path:"/login",name:"Log In",component:function(){return a.e("chunk-283c9ba5").then(a.bind(null,"db47"))}},{path:"/signup",name:"Sign Up",component:function(){return a.e("chunk-21f9aa82").then(a.bind(null,"4b77"))}},{path:"/home",name:"Home",component:function(){return Promise.all([a.e("chunk-edc8fe9a"),a.e("chunk-826a0ffa")]).then(a.bind(null,"bb51"))},meta:{authProtected:!0}},{path:"/write",name:"Write",component:function(){return a.e("chunk-f75798aa").then(a.bind(null,"ed6a"))},meta:{authProtected:!0}},{path:"/view/profile",name:"Profile",component:function(){return a.e("chunk-b89435f2").then(a.bind(null,"59ce"))},meta:{authProtected:!0}},{path:"/reviews/:id",name:"ReviewView",component:function(){return Promise.all([a.e("chunk-edc8fe9a"),a.e("chunk-1d482f62")]).then(a.bind(null,"8661"))}},{path:"/schools/add",name:"AddSchool",component:function(){return a.e("chunk-2d2223a5").then(a.bind(null,"ce5b"))},meta:{authProtected:!0}},{path:"/schools/view/:id",name:"SchoolView",component:function(){return a.e("chunk-b3798792").then(a.bind(null,"4986"))}},{path:"/schools/edit/:id",name:"SchoolView",component:function(){return a.e("chunk-2d0d5fb3").then(a.bind(null,"7136"))},meta:{authProtected:!0}},{path:"/courses/view/:id",name:"CourseView",component:function(){return a.e("chunk-6f10f498").then(a.bind(null,"8c7f"))}},{path:"/tools/builder",name:"ClassBuilder",component:function(){return a.e("chunk-00cd7031").then(a.bind(null,"034a"))},meta:{authProtected:!0}}],E=new w["a"]({mode:"history",base:"/",routes:S});E.beforeEach((function(t,e,a){"Log In"===t.name&&null!=localStorage.getItem("token")?a({name:"Home"}):a()})),E.beforeEach((function(t,e,a){t.meta.authProtected&&!localStorage.getItem("token")?a({name:"Log In"}):a()}));var $=E,I=a("9f9e"),P=a.n(I),L=a("4eb5"),R=a.n(L),A=a("044d"),D=a.n(A),T=a("2f62");s["a"].use(T["a"]);var B=new T["a"].Store({state:{loggedIn:!1,userData:{}},mutations:{logIn:function(t){t.loggedIn=!0},logOut:function(t){t.loggedIn=!1,t.userData={}},setUserData:function(t,e){t.userData=e}}}),N=B,U=a("8206"),W=a.n(U),M=W.a.create({baseURL:"/api"}),z=M,V=a("119b");s["a"].use(a("395c")),s["a"].use(V["a"].Adsense),s["a"].use(P.a),s["a"].use(D.a),s["a"].use(R.a),s["a"].config.productionTip=!1,s["a"].prototype.$http=z,localStorage.setItem("baseUrl","https://www.classrate.ml"),localStorage.getItem("token")&&(N.commit("logIn"),z.defaults.headers.common["Authorization"]=localStorage.getItem("token"),z.get("/users/current").then((function(t){N.commit("setUserData",t.data)})).catch((function(t){console.log(t.message),delete z.defaults.headers.common["Authorization"],localStorage.removeItem("token"),N.commit("logOut"),location.replace("/login")}))),new s["a"]({router:$,store:N,render:function(t){return t(b)}}).$mount("#app")},"5dfc":function(t,e,a){"use strict";a("1a12")},"85ec":function(t,e,a){},"86e1":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.styling},[a("div",{staticClass:"bg-white text-black w-11/12 m-5 rounded"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"mr-auto w-full p-3 text-xl focus:outline-none",attrs:{type:"text",placeholder:"Enter a course, school, review, etc ✏️..."},domProps:{value:t.search},on:{keyup:function(e){return t.filterData()},input:function(e){e.target.composing||(t.search=e.target.value)}}}),""!=t.search.trim("")?a("div",{staticClass:"max-h-72 overflow-y-auto"},[t._l(t.courseResults,(function(e){return a("div",{key:e._id,staticClass:"w-full"},[a("a",{attrs:{href:"/courses/view/"+e._id}},[a("div",{staticClass:"flex bg-gray-100 p-3 cursor-pointer border"},[a("img",{staticClass:"w-12 h-12 rounded-full mr-3",attrs:{src:t.schoolData(e.school_id).url}}),a("h1",{staticClass:"text-left mr-2"},[t._v(t._s(e.name)+" "),a("br"),t._v(" "),a("h1",{staticClass:"mr-2 text-gray-600"},[t._v(t._s(t.schoolData(e.school_id).name))])])])])])})),t._l(t.schoolResults,(function(e){return a("div",{key:e._id,staticClass:"w-full"},[a("a",{attrs:{href:"/schools/view/"+e._id}},[a("div",{staticClass:"flex bg-gray-100 p-3 cursor-pointer border"},[a("img",{staticClass:"w-12 h-12 rounded-full mr-3",attrs:{src:e.url}}),a("h1",{staticClass:"text-left mr-2"},[t._v(t._s(e.name)+" "),a("br"),t._v(" "),a("h1",{staticClass:"mr-2 text-gray-600"},[t._v(t._s(e.city)+", "+t._s(e.state))])])])])])})),t._m(0)],2):t._e()])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-gray-300 p-2 text-left"},[t._v(" Can't find your school? Add it "),a("a",{staticClass:"underline",attrs:{href:"/schools/add"}},[t._v("here")])])}],r=a("c7eb"),c=a("1da1"),o=(a("2ca0"),a("498a"),a("ac1f"),a("841c"),a("b0c0"),a("7db0"),a("d3b7"),{props:{styling:String},data:function(){return{reviews:[],schools:[],courses:[],search:"",results:[],schoolResults:[],courseResults:[]}},mounted:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function e(){var a,s,n,c;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/reviews/all");case 2:return a=e.sent,s=a.data,t.reviews=s.reverse(),e.next=7,t.$http.get("/schools/all");case 7:return n=e.sent,t.schools=n.data,e.next=11,t.$http.get("/courses/all");case 11:c=e.sent,t.courses=c.data;case 13:case"end":return e.stop()}}),e)})))()},methods:{filterData:function(){for(var t=this.reviews,e=this.schools,a=this.courses,s=[],n=[],r=[],c=0;c<t.length;c++){var o=t[c];o.course.toLowerCase().startsWith("".concat(this.search.toLowerCase().trim("")))&&s.push(o)}this.results=s;for(var i=0;i<e.length;i++){var l=e[i];l.name.toLowerCase().startsWith("".concat(this.search.toLowerCase().trim("")))&&n.push(l)}this.schoolResults=n;for(var u=0;u<a.length;u++){var d=a[u];d.name.toLowerCase().startsWith("".concat(this.search.toLowerCase().trim("")))&&r.push(d)}this.courseResults=r},schoolData:function(t){var e=this.schools.find((function(e){return e._id===t}));return e}}}),i=o,l=(a("c2e0"),a("2877")),u=Object(l["a"])(i,s,n,!1,null,null,null);e["a"]=u.exports},c2e0:function(t,e,a){"use strict";a("df66")},c94f:function(t,e,a){t.exports=a.p+"img/demosite.393eefe9.jpeg"},cb01:function(t,e,a){t.exports=a.p+"img/demosit2.3308772a.jpeg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.440545d7.png"},df66:function(t,e,a){}});
//# sourceMappingURL=app.e83e57e4.js.map