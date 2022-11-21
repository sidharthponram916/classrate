(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00cd7031"],{"034a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"p-2 m-2 bg-blue-600 w-11/12 mt-8 mx-auto h-11/12 relative text-white"},[t.page1?s("div",[t._m(0),s("h1",{staticClass:"text-3xl mb-5 mt-20"},[t._v("Select your School")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.data.school,expression:"data.school"}],staticClass:"p-4 m-2 text-2xl rounded w-5/6 text-black mb-20",attrs:{type:"text",placeholder:"Select your school.."},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"school",e.target.multiple?s:s[0])}}},[s("option",[t._v("Select an Option")]),t._l(t.data.schools,(function(e){return s("option",{key:e._id,staticClass:"text-white",style:"color:"+e.color,domProps:{value:e}},[s("div",{staticClass:"flex p-3 cursor-pointer border"},[s("h1",{staticClass:"text-left mr-2 p-3"},[s("span",[t._v(" "+t._s(e.name)+" ")]),t._v(" - "),s("br"),t._v(" "),s("h1",{staticClass:"mr-2 text-gray-400"},[t._v(t._s(e.city)+", "+t._s(e.state))])])])])}))],2),s("br"),s("button",{staticClass:"p-2 m-2 bg-blue-500 text-white rounded text-2xl mb-2",attrs:{disabled:t.disable1},on:{click:function(e){return t.goPage2()}}},[t._v("Continue")])]):t._e(),t.page2&&t.data.courses.length>=5?s("div",{staticClass:"flex"},[s("div",{staticClass:"bg-blue-800 text-white w-1/2 p-5 mb-2"},[t._m(1),t._l(this.repeat,(function(e){return s("select",{directives:[{name:"model",rawName:"v-model",value:t.selected[e-1],expression:"selected[index - 1]"}],key:e,staticClass:"p-5 w-11/12 text-white border-4 m-2 bg-blue-600 border-white text-2xl focus:outline-none",on:{change:[function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.selected,e-1,s.target.multiple?a:a[0])},t.generateInfo]}},t._l(t.data.courses,(function(e){return s("option",{key:e._id,staticClass:"text-white",domProps:{value:e._id}},[t._v(t._s(e.name))])})),0)})),s("input",{staticClass:"p-5 w-11/12 text-white border-4 border-dashed m-2 border-white text-2xl focus:outline-none cursor-pointer",attrs:{value:"Add a class",type:"button"},on:{click:t.addClass}}),s("input",{staticClass:"p-5 w-11/12 text-white border-4 border-dashed m-2 border-white text-2xl focus:outline-none cursor-pointer",attrs:{value:"Remove a class",type:"button"},on:{click:t.removeClass}})],2),s("div",{staticClass:"w-1/2 bg-blue-600 p-5"},[s("div",{staticClass:"bg-white text-black flex flex-wrap"},[s("div",{staticClass:"p-2 m-2 w-auto"},[s("h1",{staticClass:"text-3xl text-left p-2"},[t._v("4.0 GPA")]),s("h1",{staticClass:"text-xl",class:t.color.gpa},[s("span",{staticClass:"text-8xl"},[t._v(t._s(this.stats.gpa.toFixed(2)))])])]),s("div",{staticClass:"p-2 m-2 w-auto"},[s("h1",{staticClass:"text-3xl text-left p-2"},[t._v("Difficulty")]),s("h1",{staticClass:"text-xl",class:t.color.difficulty},[s("span",{staticClass:"text-8xl"},[t._v(t._s(this.stats.difficulty.toFixed(1)))]),t._v("/10")])]),s("div",{staticClass:"p-2 m-2 w-auto"},[s("h1",{staticClass:"text-3xl text-left p-2"},[t._v("Engagement")]),s("h1",{staticClass:"text-xl",class:t.color.engagement},[s("span",{staticClass:"text-8xl"},[t._v(" "+t._s(this.stats.engagement.toFixed(1))+" ")]),t._v("/10")])]),s("div",{staticClass:"p-2 m-2 w-auto"},[s("h1",{staticClass:"text-3xl text-left p-2"},[t._v("Workload")]),s("h1",{staticClass:"text-xl",class:t.color.workload},[s("span",{staticClass:"text-8xl"},[t._v(t._s(this.stats.workload.toFixed(1)))]),t._v("/10")])])]),s("br"),s("div",{staticClass:"bg-white text-black text-left p-4"},[s("h1",{staticClass:"p-2 mx-2 text-3xl"},[t._v("General Comments")]),s("p",{staticClass:"p-2 mx-2 text-blue-600 text-2xl"},[t._v(t._s(t.comments.difficulty)+" "+t._s(t.comments.engagement)+" "+t._s(t.comments.workload))]),s("h1",{staticClass:"p-2 mx-2 text-3xl"},[t._v("Overall Recommendation")]),s("p",{staticClass:"p-2 mx-2  text-2xl text-green-600"},[t._v(t._s(t.comments.overall))])])])]):s("div",[t._v(" This feature is only available for schools with over 5 classes registered onto the site. Promote this website today so you can access this feature! ")])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"p-2 text-2xl mb-5"},[s("span",{staticClass:"text-6xl mb-2"},[t._v("Class"),s("span",{staticClass:"text-yellow-300"},[t._v("Builder")])]),s("br"),t._v(" Trying to pick your classes for next semester? We got you.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"text-3xl mb-2"},[t._v("Schedule "),s("br"),t._v(" "),s("span",{staticClass:"text-sm"},[t._v("Click on the boxes below to add a class. ")])])}],r=s("c7eb"),i=s("1da1"),n=(s("4e82"),s("b0c0"),s("4de4"),s("d3b7"),s("38cf"),s("7db0"),{data:function(){return{course:{},school:{},data:{schools:[],courses:[],school:""},stats:{difficulty:0,workload:0,gpa:0,engagement:0},comments:{difficulty:"See your comments here.",workload:"",engagement:"",overall:"Overall summary here."},zero:0,duration:3e3,page1:!0,page2:!1,selected:[],repeat:5,color:{engagement:"text-gray-700",difficulty:"text-gray-700",workload:"text-gray-700",gpa:"text-gray-700"}}},mounted:function(){var t=this;return Object(i["a"])(Object(r["a"])().mark((function e(){var s,a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/schools/all");case 2:return s=e.sent,s.data.sort((function(t,e){return t.name.localeCompare(e.name)})),t.data.schools=s.data,e.next=7,t.$http.get("/courses/all");case 7:a=e.sent,a.data.sort((function(t,e){return t.name.localeCompare(e.name)})),t.data.courses=a.data;case 10:case"end":return e.stop()}}),e)})))()},methods:{goPage2:function(){var t=this;this.page1=!1,this.page2=!0;var e=this.data.courses;e=e.filter((function(e){return t.data.school._id===e.school_id})),this.data.courses=e},addClass:function(){this.repeat++,this.generateInfo()},removeClass:function(){0!=this.repeat&&(this.selected.pop(),this.repeat--,this.generateInfo())},generateInfo:function(){for(var t=this,e=this.selected,s=new Array,a=function(a){var o=e[a],r=t.data.courses.find((function(t){return t._id===o}));s.push(r)},o=0;o<e.length;o++)a(o);e=s,console.log(e);var r=0;this.stats.difficulty=0;for(var i=0;i<e.length;i++){for(var n=e[i],l=0,c=0;c<n.ratings.length;c++){var h=n.ratings[c].data;l+=h.difficulty,c===n.ratings.length-1&&(l/=n.ratings.length)}r+=l,i===e.length-1&&(r/=e.length)}this.stats.difficulty=r;var d=0;this.stats.workload=0;for(var u=0;u<e.length;u++){for(var g=e[u],f=0,m=0;m<g.ratings.length;m++){var v=g.ratings[m].data;f+=v.workload,m===g.ratings.length-1&&(f/=g.ratings.length)}d+=f,u===e.length-1&&(d/=e.length)}this.stats.workload=d;var p=0;this.stats.engagement=0;for(var x=0;x<e.length;x++){for(var w=e[x],b=0,y=0;y<w.ratings.length;y++){var k=w.ratings[y].data;b+=k.curriculum,y===w.ratings.length-1&&(b/=w.ratings.length)}p+=b,x===e.length-1&&(p/=e.length)}this.stats.engagement=p;var _=0;this.stats.gpa=0;for(var C=0;C<e.length;C++){for(var A=e[C],T=0,E=0;E<A.ratings.length;E++){var S=A.ratings[E].data;switch(S.grade){case"A+":T+=4;break;case"A":T+=4;break;case"A-":T+=3.67;break;case"B+":T+=3.33;break;case"B":T+=3;break;case"B-":T+=2.67;break;case"C+":T+=2.33;break;case"C":T+=2;break;case"C-":T+=1.67;break;case"D":T+=1.33;break;case"F":T+=1;break;case"N/A":A.ratings--;break}E===A.ratings.length-1&&(T/=A.ratings.length)}_+=T,C===e.length-1&&(_/=e.length)}this.stats.gpa=_,this.stats.engagement<=5?this.comments.engagement="You will likely be bored with this courseload, so try not to fall asleep. We believe in you!":this.stats.engagement>=7?this.comments.engagement="You will definitely be engaged with this courseload, so don't worry about falling asleep in class! ":this.stats.engagement>5&&(this.comments.engagement="You will be fairly engaged with this courseload, with some interesting topics in store for you."),this.stats.workload<=5?this.comments.workload="The work in these classes are extremely light, so you will likely not be busy all year.":this.stats.workload>=7?this.comments.workload="There is an extreme amount of work with this courseload, so try to balance your other activities with work, because you might have a lot more schoolwork than other people.":this.stats.workload>5&&(this.comments.workload="There is a decent amount of work in this courseload, so this is a perfect medium of work so you have room for other activities."),this.stats.difficulty<=5?this.comments.difficulty="These classes are likely really easy, so you will have an good time understanding concepts and topics!":this.stats.difficulty>=7?this.comments.difficulty="This courseload seems to be extremely difficult. You will likely spend more time trying to understand subjects, as the course content in this class seems to be challenging.":this.stats.difficulty>5&&(this.comments.difficulty="This courseload has moderate difficulty, so you might have some difficulty understanding concepts in some classes, but not all.");var O=this.stats.difficulty+this.stats.engagement+this.stats.workload;O<=15?this.comments.overall="Light":O>24?this.comments.overall="Extremely Challenging":O>15&&(this.comments.overall="Moderately Challenging"),this.stats.engagement<=2?this.color.engagement="text-red-600":this.stats.engagement<=4?this.color.engagement="text-red-400":this.stats.engagement<=6?this.color.engagement="text-yellow-500":this.stats.engagement<=8?this.color.engagement="text-green-700":this.color.engagement="text-green-800",this.stats.workload>=9||this.stats.workload>=7?this.color.workload="text-red-600":this.stats.workload>=5?this.color.workload="text-yellow-500":this.stats.workload>=3?this.color.workload="text-green-500":this.color.workload="text-green-700",this.stats.difficulty>=9||this.stats.difficulty>=7?this.color.difficulty="text-red-600":this.stats.workload>=5?this.color.workload="text-yellow-500":this.stats.workload>=3?this.color.workload="text-green-500":this.color.workload="text-green-700"}},computed:{disable1:function(){return!this.data.school}}}),l=n,c=(s("e431"),s("2877")),h=Object(c["a"])(l,a,o,!1,null,null,null);e["default"]=h.exports},"04d1":function(t,e,s){var a=s("342f"),o=a.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},"083a":function(t,e,s){"use strict";var a=s("0d51"),o=TypeError;t.exports=function(t,e){if(!delete t[e])throw o("Cannot delete property "+a(e)+" of "+a(t))}},1148:function(t,e,s){"use strict";var a=s("5926"),o=s("577e"),r=s("1d80"),i=RangeError;t.exports=function(t){var e=o(r(this)),s="",n=a(t);if(n<0||n==1/0)throw i("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(s+=e);return s}},"38cf":function(t,e,s){var a=s("23e7"),o=s("1148");a({target:"String",proto:!0},{repeat:o})},"4de4":function(t,e,s){"use strict";var a=s("23e7"),o=s("b727").filter,r=s("1dde"),i=r("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(t,e,s){"use strict";var a=s("23e7"),o=s("e330"),r=s("59ed"),i=s("7b0b"),n=s("07fa"),l=s("083a"),c=s("577e"),h=s("d039"),d=s("addb"),u=s("a640"),g=s("04d1"),f=s("d998"),m=s("2d00"),v=s("512c"),p=[],x=o(p.sort),w=o(p.push),b=h((function(){p.sort(void 0)})),y=h((function(){p.sort(null)})),k=u("sort"),_=!h((function(){if(m)return m<70;if(!(g&&g>3)){if(f)return!0;if(v)return v<603;var t,e,s,a,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:s=3;break;case 68:case 71:s=4;break;default:s=2}for(a=0;a<47;a++)p.push({k:e+a,v:s})}for(p.sort((function(t,e){return e.v-t.v})),a=0;a<p.length;a++)e=p[a].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}})),C=b||!y||!k||!_,A=function(t){return function(e,s){return void 0===s?-1:void 0===e?1:void 0!==t?+t(e,s)||0:c(e)>c(s)?1:-1}};a({target:"Array",proto:!0,forced:C},{sort:function(t){void 0!==t&&r(t);var e=i(this);if(_)return void 0===t?x(e):x(e,t);var s,a,o=[],c=n(e);for(a=0;a<c;a++)a in e&&w(o,e[a]);d(o,A(t)),s=o.length,a=0;while(a<s)e[a]=o[a++];while(a<c)l(e,a++);return e}})},"512c":function(t,e,s){var a=s("342f"),o=a.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},addb:function(t,e,s){var a=s("4dae"),o=Math.floor,r=function(t,e){var s=t.length,l=o(s/2);return s<8?i(t,e):n(t,r(a(t,0,l),e),r(a(t,l),e),e)},i=function(t,e){var s,a,o=t.length,r=1;while(r<o){a=r,s=t[r];while(a&&e(t[a-1],s)>0)t[a]=t[--a];a!==r++&&(t[a]=s)}return t},n=function(t,e,s,a){var o=e.length,r=s.length,i=0,n=0;while(i<o||n<r)t[i+n]=i<o&&n<r?a(e[i],s[n])<=0?e[i++]:s[n++]:i<o?e[i++]:s[n++];return t};t.exports=r},d998:function(t,e,s){var a=s("342f");t.exports=/MSIE|Trident/.test(a)},e200:function(t,e,s){},e431:function(t,e,s){"use strict";s("e200")}}]);
//# sourceMappingURL=chunk-00cd7031.5190e220.js.map