(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d482f62"],{1276:function(t,e,r){"use strict";var a=r("2ba4"),o=r("c65b"),l=r("e330"),c=r("d784"),i=r("44e7"),s=r("825a"),n=r("1d80"),u=r("4840"),d=r("8aa5"),f=r("50c4"),x=r("577e"),v=r("dc4a"),g=r("4dae"),p=r("14c3"),h=r("9263"),w=r("9f7f"),m=r("d039"),y=w.UNSUPPORTED_Y,b=4294967295,_=Math.min,k=[].push,C=l(/./.exec),R=l(k),A=l("".slice),O=!m((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));c("split",(function(t,e,r){var l;return l="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var l=x(n(this)),c=void 0===r?b:r>>>0;if(0===c)return[];if(void 0===t)return[l];if(!i(t))return o(e,l,t,c);var s,u,d,f=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,w=new RegExp(t.source,v+"g");while(s=o(h,w,l)){if(u=w.lastIndex,u>p&&(R(f,A(l,p,s.index)),s.length>1&&s.index<l.length&&a(k,f,g(s,1)),d=s[0].length,p=u,f.length>=c))break;w.lastIndex===s.index&&w.lastIndex++}return p===l.length?!d&&C(w,"")||R(f,""):R(f,A(l,p)),f.length>c?g(f,0,c):f}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:o(e,this,t,r)}:e,[function(e,r){var a=n(this),c=void 0==e?void 0:v(e,t);return c?o(c,e,a,r):o(l,x(a),e,r)},function(t,a){var o=s(this),c=x(t),i=r(l,o,c,a,l!==e);if(i.done)return i.value;var n=u(o,RegExp),v=o.unicode,g=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(y?"g":"y"),h=new n(y?"^(?:"+o.source+")":o,g),w=void 0===a?b:a>>>0;if(0===w)return[];if(0===c.length)return null===p(h,c)?[c]:[];var m=0,k=0,C=[];while(k<c.length){h.lastIndex=y?0:k;var O,$=p(h,y?A(c,k):c);if(null===$||(O=_(f(h.lastIndex+(y?k:0)),c.length))===m)k=d(c,k,v);else{if(R(C,A(c,m,k)),C.length===w)return C;for(var S=1;S<=$.length-1;S++)if(R(C,$[S]),C.length===w)return C;k=m=O}}return R(C,A(c,m)),C}]}),!O,y)},2532:function(t,e,r){"use strict";var a=r("23e7"),o=r("e330"),l=r("5a34"),c=r("1d80"),i=r("577e"),s=r("ab13"),n=o("".indexOf);a({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~n(i(c(this)),i(l(t)),arguments.length>1?arguments[1]:void 0)}})},3511:function(t,e){var r=TypeError,a=9007199254740991;t.exports=function(t){if(t>a)throw r("Maximum allowed index exceeded");return t}},8661:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("SearchBar"),r("div",{staticClass:"bg-white text-black w-11/12 text-left mx-5"},[r("h1",{staticClass:"p-2 mx-2 text-4xl my-1 text-left"},[t._v("Review of "+t._s(t.review.course)+" at "),r("a",{style:"color:"+t.color.school,attrs:{href:"/schools/view/"+t.review.school_id}},[t._v(t._s(t.review.school)+" ")])]),r("p",{staticClass:"px-2 mx-2"},[t._v("Written by a student on "),r("span",{staticClass:"text-blue-600"},[t._v(t._s(t.review.createdAt))]),t._v(".")]),r("p",{staticClass:"px-2 mx-2"},[t._v("Class finished on "),r("span",{staticClass:"text-blue-700"},[t._v(t._s(t.formatDate(t.review.year)))]),t._v(" through "+t._s(t.review.type.toLowerCase())+" instruction.")]),r("h1",{staticClass:"text-yellow-500 p-2 text-6xl"},[t._v(t._s(t.rating(t.review.overall)))]),r("span",{staticClass:"text-3xl p-2 m-2"},[t._v("Instructor: "),r("span",{staticClass:"text-gray-700 text-3xl"},[t._v(t._s(t.review.instructor)+" ")])]),r("div",{staticClass:"flex m-2 p-2 grid grid-cols-2 md:grid-cols-4"},[r("span",{staticClass:"text-3xl mt-2 mr-32"},[t._v("Difficulty"),r("br"),r("span",{staticClass:"text-8xl",class:t.color.difficulty},[t._v(t._s(t.review.difficulty))]),t._v("/10")]),r("span",{staticClass:"text-3xl mt-2 mr-32"},[t._v("Engagement"),r("br"),r("span",{staticClass:"text-8xl",class:t.color.curriculum},[t._v(" "+t._s(t.review.curriculum))]),t._v("/10")]),r("span",{staticClass:"text-3xl mt-2 mr-32 "},[t._v("Workload "),r("br"),r("span",{staticClass:"text-8xl",class:t.color.workload},[t._v(t._s(t.review.workload))]),t._v("/10")]),r("span",{staticClass:"text-3xl mt-2 mr-32"},[t._v("Instructor"),r("br"),r("span",{staticClass:"text-8xl",class:t.color.instructorRating},[t._v(" "+t._s(t.review.instructorRating))]),t._v("/10")])]),r("span",{staticClass:"text-3xl p-2 m-2"},[t._v("Grade Received"),r("br"),r("span",{staticClass:"text-8xl p-2 m-2",class:t.color.grade},[t._v(" "+t._s(t.review.grade))])]),r("div",{staticClass:"p-2 m-2 w-1/2 md:w-3/4"},[r("h1",{staticClass:"text-3xl mb-2"},[t._v(" Review ")]),r("p",{staticClass:"text-xl text-gray-600"},[t._v(t._s(t.review.desc))])]),r("button",{staticClass:"p-3 m-4 bg-sky-700 mr-auto rounded text-white shadow-lg text-2xl",class:t.color.upvote,on:{click:function(e){return t.upvote()}}},[t._v(t._s(this.upvotes.length)+" "),r("span",{attrs:{id:"eno"}},[t._v("⬆️")])]),r("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.message,expression:"message",arg:"copy"}],staticClass:"p-3 m-4 bg-green-500 mr-auto rounded text-white shadow-lg text-2xl",on:{click:function(e){return t.clicked()}}},[t._v("Share "),r("span",{attrs:{id:"eno"}},[t._v("👥")])])]),r("div",{staticClass:"w-11/12 text-left m-5 p-2 bg-white"},[r("h1",{staticClass:"text-left text-4xl text-black m-2 p-2"},[t._v("Other Reviews")]),r("div",{staticClass:"flex grid grid-cols-1 gap-2 md:grid-cols-5 text-black pb-4"},t._l(t.randomSet,(function(e){return r("div",{key:e._id},[r("a",{attrs:{href:"/reviews/"+e._id}},[r("div",{staticClass:"p-4 m-2 border-2 rounded bg-white h-full"},[r("h1",{staticClass:"text-xl"},[t._v(t._s(e.course)+" ")]),r("h1",{staticClass:"text-sm text-gray-600 mb-2"},[t._v(t._s(e.school)+" ")]),r("h1",{staticClass:"text-2xl text-yellow-500 mb-2"},[t._v(t._s(t.rating(e.overall))+" ")]),r("p",{staticStyle:{"font-family":""}},[t._v(" "+t._s(e.desc.slice(0,100))+"...")])])])])})),0)])],1)},o=[],l=r("c7eb"),c=r("1da1"),i=(r("fb6a"),r("b0c0"),r("99af"),r("caad"),r("2532"),r("ac1f"),r("1276"),r("7db0"),r("d3b7"),r("a434"),r("a630"),r("3ca3"),r("c1df")),s=r.n(i),n=r("86e1"),u={components:{SearchBar:n["a"]},data:function(){return{review:{},schoolName:"",color:{workload:"text-black",instructorRating:"text-black",difficulty:"text-black",grade:"text-black",school:""},data:"",all:"",search:"",message:"heloo",upvotes:0}},computed:{randomSet:function(){var t=this.all;function e(e){for(var r=t.length-1;r>0;r--){var a=Math.floor(Math.random()*(r+1)),o=[e[a],e[r]];e[r]=o[0],e[a]=o[1]}}return e(t),t.slice(1,6)}},mounted:function(){var t=this;return Object(c["a"])(Object(l["a"])().mark((function e(){var r,a,o,c;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/reviews/get/".concat(t.$route.params.id));case 2:return r=e.sent,a=r.data,e.next=6,t.$http.get("/reviews/all");case 6:return o=e.sent,a.createdAt=s()(a.createdAt).format("LLL"),t.upvotes=a.upvotes,t.review=a,t.all=o.data,e.next=13,t.$http.get("/schools/get/".concat(a.school_id));case 13:c=e.sent,t.schoolName=c.data.name,t.color.school=c.data.color,t.message="Check out this review of ".concat(t.review.course," at ").concat(c.data.name,". \n\n").concat(localStorage.getItem("baseUrl")).concat(t.$route.fullPath," "),t.data=a,10==t.data.difficulty?t.color.difficulty="text-red-500":9==t.data.difficulty?t.color.difficulty="text-red-400":8==t.data.difficulty?t.color.difficulty="text-yellow-700":7==t.data.difficulty?t.color.difficulty="text-yellow-600":6==t.data.difficulty?t.color.difficulty="text-yellow-500":5==t.data.difficulty?t.color.difficulty="text-green-400":4==t.data.difficulty?t.color.difficulty="text-green-500":3==t.data.difficulty?t.color.difficulty="text-green-600":2==t.data.difficulty?t.color.difficulty="text-green-700":t.color.difficulty="text-green-800",1==t.data.curriculum?t.color.curriculum="text-red-500":2==t.data.curriculum?t.color.curriculum="text-red-400":3==t.data.curriculum?t.color.curriculum="text-yellow-700":4==t.data.curriculum?t.color.curriculum="text-yellow-600":5==t.data.curriculum?t.color.curriculum="text-yellow-500":6==t.data.curriculum?t.color.curriculum="text-yellow-400":7==t.data.curriculum?t.color.curriculum="text-green-500":(8==t.data.curriculum||t.data.curriculum,t.color.curriculum="text-green-600"),1==t.data.instructorRating?t.color.instructorRating="text-red-500":2==t.data.instructorRating?t.color.instructorRating="text-red-400":3==t.data.instructorRating||4==t.data.instructorRating?t.color.instructorRating="text-yellow-600":5==t.data.instructorRating?t.color.instructorRating="text-yellow-500":6==t.data.instructorRating?t.color.instructorRating="text-yellow-400":7==t.data.instructorRating?t.color.instructorRating="text-green-500":(8==t.data.instructorRating||t.data.instructorRating,t.color.instructorRating="text-green-600"),"F"==t.data.grade?t.color.grade="text-red-500":"D"==t.data.grade?t.color.grade="text-red-400":"C-"==t.data.grade?t.color.grade="text-yellow-700":"C"==t.data.grade?t.color.grade="text-yellow-600":"C+"==t.data.grade?t.color.grade="text-yellow-500":"B-"==t.data.grade?t.color.instructorRating="text-green-300":"B"==t.data.grade?t.color.grade="text-green-500":"B+"==t.data.grade||"A-"==t.data.grade?t.color.grade="text-green-600":"N/A"==t.data.grade?t.color.grade="text-black":t.color.grade="text-green-700",10==t.data.workload?t.color.workload="text-red-500":9==t.data.workload?t.color.workload="text-red-400":8==t.data.workload?t.color.workload="text-yellow-700":7==t.data.workload?t.color.workload="text-yellow-600":6==t.data.workload?t.color.workload="text-yellow-500":5==t.data.workload?t.color.workload="text-yellow-400":4==t.data.workload?t.color.workload="text-green-500":3==t.data.workload?t.color.workload="text-green-600":2==t.data.workload?t.color.workload="text-green-700":t.color.workload="text-green-800",t.data.upvotes.includes(t.$store.state.userData.username)?t.color.upvote="bg-sky-700":t.color.upvote="bg-sky-600";case 24:case"end":return e.stop()}}),e)})))()},methods:{rating:function(t){for(var e="",r=0;r<t;r++)e+="★";for(var a=0;a<5-t;a++)e+="☆";return e},formatDate:function(t){var e=["January","February","March","April","May","June","July","August","September","October","November","December"],r=e[+t.split("-")[1]-1];return"".concat(r," ").concat(t.split("-")[0])},clicked:function(){alert("Information copied to clipboard!")},upvote:function(){var t=this;return Object(c["a"])(Object(l["a"])().mark((function e(){var r;return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.upvotes.find((function(e){return e===t.$store.state.userData.username})),r?(t.upvotes.splice(t.upvotes.indexOf(t.$store.state.userData.username),1),t.color.upvote="bg-sky-600"):(t.upvotes.push("".concat(t.$store.state.userData.username)),t.color.upvote="bg-sky-700"),e.next=4,t.$http.put("/reviews/update/".concat(t.$route.params.id),{upvotes:Array.from(t.upvotes)});case 4:case"end":return e.stop()}}),e)})))()}}},d=u,f=r("2877"),x=Object(f["a"])(d,a,o,!1,null,null,null);e["default"]=x.exports},"99af":function(t,e,r){"use strict";var a=r("23e7"),o=r("d039"),l=r("e8b5"),c=r("861d"),i=r("7b0b"),s=r("07fa"),n=r("3511"),u=r("8418"),d=r("65f0"),f=r("1dde"),x=r("b622"),v=r("2d00"),g=x("isConcatSpreadable"),p=v>=51||!o((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),h=f("concat"),w=function(t){if(!c(t))return!1;var e=t[g];return void 0!==e?!!e:l(t)},m=!p||!h;a({target:"Array",proto:!0,arity:1,forced:m},{concat:function(t){var e,r,a,o,l,c=i(this),f=d(c,0),x=0;for(e=-1,a=arguments.length;e<a;e++)if(l=-1===e?c:arguments[e],w(l))for(o=s(l),n(x+o),r=0;r<o;r++,x++)r in l&&u(f,x,l[r]);else n(x+1),u(f,x++,l);return f.length=x,f}})},a434:function(t,e,r){"use strict";var a=r("23e7"),o=r("7b0b"),l=r("23cb"),c=r("5926"),i=r("07fa"),s=r("3511"),n=r("65f0"),u=r("8418"),d=r("083a"),f=r("1dde"),x=f("splice"),v=Math.max,g=Math.min;a({target:"Array",proto:!0,forced:!x},{splice:function(t,e){var r,a,f,x,p,h,w=o(this),m=i(w),y=l(t,m),b=arguments.length;for(0===b?r=a=0:1===b?(r=0,a=m-y):(r=b-2,a=g(v(c(e),0),m-y)),s(m+r-a),f=n(w,a),x=0;x<a;x++)p=y+x,p in w&&u(f,x,w[p]);if(f.length=a,r<a){for(x=y;x<m-a;x++)p=x+a,h=x+r,p in w?w[h]=w[p]:d(w,h);for(x=m;x>m-a+r;x--)d(w,x-1)}else if(r>a)for(x=m-a;x>y;x--)p=x+a-1,h=x+r-1,p in w?w[h]=w[p]:d(w,h);for(x=0;x<r;x++)w[x+y]=arguments[x+2];return w.length=m-a+r,f}})},caad:function(t,e,r){"use strict";var a=r("23e7"),o=r("4d64").includes,l=r("d039"),c=r("44d2"),i=l((function(){return!Array(1).includes()}));a({target:"Array",proto:!0,forced:i},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")}}]);
//# sourceMappingURL=chunk-1d482f62.d440215a.js.map