(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"025f":function(t,e,n){"use strict";var r=n("fdbc3"),i=n("a0be"),o=(n("d6de"),n("2877")),c=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},"0273":function(t,e,n){var r=n("c1b2"),i=n("4180"),o=n("2c6c");t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},"06fa":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),o=n("17c2"),c=n("9112");for(var a in i){var s=r[a],u=s&&s.prototype;if(u&&u.forEach!==o)try{c(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("b301");t.exports=i("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},1875:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"194a":function(t,e,n){var r=n("cc94");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},"2c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"3ac6":function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),o=n("7dd0"),c="String Iterator",a=i.set,s=i.getterFor(c);o(String,"String",(function(t){a(this,{type:c,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"3e47":function(t,e,n){var r=n("a5eb"),i=n("c1b2"),o=n("4180");r({target:"Object",stat:!0,forced:!i,sham:!i},{defineProperty:o.f})},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},4180:function(t,e,n){var r=n("c1b2"),i=n("77b2"),o=n("6f8d"),c=n("7168"),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(o(t),e=c(e,!0),o(n),i)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"44ba":function(t,e,n){var r=n("c1b2"),i=n("7043"),o=n("2c6c"),c=n("a421"),a=n("7168"),s=n("78e7"),u=n("77b2"),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=a(e,!0),u)try{return f(t,e)}catch(n){}if(s(t,e))return o(!i.f.call(t,e),t[e])}},"4df4":function(t,e,n){"use strict";var r=n("f8c2"),i=n("7b0b"),o=n("9bdd"),c=n("e95a"),a=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,f,l,h,d=i(t),p="function"==typeof this?this:Array,v=arguments.length,_=v>1?arguments[1]:void 0,g=void 0!==_,x=0,b=u(d);if(g&&(_=r(_,v>2?arguments[2]:void 0,2)),void 0==b||p==Array&&c(b))for(e=a(d.length),n=new p(e);e>x;x++)s(n,x,g?_(d[x],x):d[x]);else for(l=b.call(d),h=l.next,n=new p;!(f=h.call(l)).done;x++)s(n,x,g?o(l,_,[f.value,x],!0):f.value);return n.length=x,n}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),o=n("7b0b"),c=n("50c4"),a=n("a691"),s=n("1d80"),u=n("8aa5"),f=n("14c3"),l=Math.max,h=Math.min,d=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,_=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n){return[function(n,r){var i=s(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):e.call(String(i),n,r)},function(t,o){var s=n(e,t,this,o);if(s.done)return s.value;var d=i(t),p=String(this),v="function"===typeof o;v||(o=String(o));var g=d.global;if(g){var x=d.unicode;d.lastIndex=0}var b=[];while(1){var m=f(d,p);if(null===m)break;if(b.push(m),!g)break;var w=String(m[0]);""===w&&(d.lastIndex=u(p,c(d.lastIndex),x))}for(var y="",E=0,S=0;S<b.length;S++){m=b[S];for(var T=String(m[0]),L=l(h(a(m.index),p.length),0),A=[],I=1;I<m.length;I++)A.push(_(m[I]));var C=m.groups;if(v){var O=[T].concat(A,L,p);void 0!==C&&O.push(C);var k=String(o.apply(void 0,O))}else k=r(T,p,L,A,C,o);L>=E&&(y+=p.slice(E,L)+k,E=L+T.length)}return y+p.slice(E)}];function r(t,n,r,i,c,a){var s=r+t.length,u=i.length,f=v;return void 0!==c&&(c=o(c),f=p),e.call(a,f,(function(e,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":a=c[o.slice(1,-1)];break;default:var f=+o;if(0===f)return e;if(f>u){var l=d(f/10);return 0===l?e:l<=u?void 0===i[l-1]?o.charAt(1):i[l-1]+o.charAt(1):e}a=i[f-1]}return void 0===a?"":a}))}}))},5400:function(t,e){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),o="["+i+"]",c=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"638c":function(t,e,n){var r=n("06fa"),i=n("fc48"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),o=function(t){return function(e,n){var o,c,a=String(i(e)),s=r(n),u=a.length;return s<0||s>=u?t?"":void 0:(o=a.charCodeAt(s),o<55296||o>56319||s+1===u||(c=a.charCodeAt(s+1))<56320||c>57343?t?a.charAt(s):o:t?a.slice(s,s+2):c-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),o=n("b622"),c=o("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6f8d":function(t,e,n){var r=n("dfdb");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},7043:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var o,c;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(c=o.prototype)&&c!==n.prototype&&i(t,c),t}},7168:function(t,e,n){var r=n("dfdb");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"764b":function(t,e){t.exports={}},"77b2":function(t,e,n){var r=n("c1b2"),i=n("06fa"),o=n("7a37");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"78e7":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"7a37":function(t,e,n){var r=n("3ac6"),i=n("dfdb"),o=r.document,c=i(o)&&i(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?i.f(t,c,o(0,n)):t[c]=n}},"85d3":function(t,e,n){t.exports=n("9a13")},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"8b15":function(t,e,n){},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,a=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=void 0!==/()??/.exec("")[1],u=a||s;u&&(c=function(t){var e,n,c,u,f=this;return s&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),a&&(e=f.lastIndex),c=i.call(f,t),a&&c&&(f.lastIndex=f.global?c.index+c[0].length:e),s&&c&&c.length>1&&o.call(c[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(c[u]=void 0)})),c}),t.exports=c},"96f2":function(t,e,n){"use strict";var r=n("8b15"),i=n.n(r);i.a},"9a13":function(t,e,n){t.exports=n("a38c")},a0be:function(t,e,n){"use strict";var r=n("5400"),i=n.n(r);e["default"]=i.a},a0e5:function(t,e,n){var r=n("06fa"),i=/#|\.prototype\./,o=function(t,e){var n=a[c(t)];return n==u||n!=s&&("function"==typeof e?r(e):!!e)},c=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},s=o.NATIVE="N",u=o.POLYFILL="P";t.exports=o},a38c:function(t,e,n){n("3e47");var r=n("764b"),i=r.Object,o=t.exports=function(t,e,n){return i.defineProperty(t,e,n)};i.defineProperty.sham&&(o.sham=!0)},a421:function(t,e,n){var r=n("638c"),i=n("1875");t.exports=function(t){return r(i(t))}},a5eb:function(t,e,n){"use strict";var r=n("3ac6"),i=n("44ba").f,o=n("a0e5"),c=n("764b"),a=n("194a"),s=n("0273"),u=n("78e7"),f=function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e};t.exports=function(t,e){var n,l,h,d,p,v,_,g,x,b=t.target,m=t.global,w=t.stat,y=t.proto,E=m?r:w?r[b]:(r[b]||{}).prototype,S=m?c:c[b]||(c[b]={}),T=S.prototype;for(d in e)n=o(m?d:b+(w?".":"#")+d,t.forced),l=!n&&E&&u(E,d),v=S[d],l&&(t.noTargetGet?(x=i(E,d),_=x&&x.value):_=E[d]),p=l&&_?_:e[d],l&&typeof v===typeof p||(g=t.bind&&l?a(p,r):t.wrap&&l?f(p):y&&"function"==typeof p?a(Function.call,p):p,(t.sham||p&&p.sham||v&&v.sham)&&s(g,"sham",!0),S[d]=g,y&&(h=b+"Prototype",u(c,h)||s(c,h,{}),c[h][d]=p,t.real&&T&&!T[d]&&s(T,d,p)))}},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),o=n("1c7e"),c=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:i})},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),o=n("94ca"),c=n("6eeb"),a=n("5135"),s=n("c6b6"),u=n("7156"),f=n("c04e"),l=n("d039"),h=n("7c73"),d=n("241c").f,p=n("06cf").f,v=n("9bf2").f,_=n("58a8").trim,g="Number",x=i[g],b=x.prototype,m=s(h(b))==g,w=function(t){var e,n,r,i,o,c,a,s,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=_(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(o=u.slice(2),c=o.length,a=0;a<c;a++)if(s=o.charCodeAt(a),s<48||s>i)return NaN;return parseInt(o,r)}return+u};if(o(g,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var y,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(m?l((function(){b.valueOf.call(n)})):s(n)!=g)?u(new x(w(e)),n,E):w(e)},S=r?d(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;S.length>T;T++)a(x,y=S[T])&&!a(E,y)&&v(E,y,p(x,y));E.prototype=b,b.constructor=E,c(i,g,E)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b301:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},b727:function(t,e,n){var r=n("f8c2"),i=n("44ad"),o=n("7b0b"),c=n("50c4"),a=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,h=5==t||l;return function(d,p,v,_){for(var g,x,b=o(d),m=i(b),w=r(p,v,3),y=c(m.length),E=0,S=_||a,T=e?S(d,y):n?S(d,0):void 0;y>E;E++)if((h||E in m)&&(g=m[E],x=w(g,E,b),t))if(e)T[E]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:s.call(T,g)}else if(f)return!1;return l?-1:u||f?f:T}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c1b2:function(t,e,n){var r=n("06fa");t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},cc94:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},d6de:function(t,e,n){"use strict";var r=n("dbf4"),i=n.n(r);i.a},d784:function(t,e,n){"use strict";var r=n("9112"),i=n("6eeb"),o=n("d039"),c=n("b622"),a=n("9263"),s=c("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var h=c(t),d=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),p=d&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!d||!p||"replace"===t&&!u||"split"===t&&!f){var v=/./[h],_=n(h,""[t],(function(t,e,n,r,i){return e.exec===a?d&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),g=_[0],x=_[1];i(String.prototype,t,g),i(RegExp.prototype,h,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)}),l&&r(RegExp.prototype[h],"sham",!0)}}},dbf4:function(t,e,n){},dfdb:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f820:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("button",{on:{click:t.check}},[t._v("查看源代码")]),n("button",{on:{click:function(e){return t.goTo(-1)}}},[t._v("上一个")]),n("button",{on:{click:function(e){return t.goTo(1)}}},[t._v("下一个")]),n("Swiper",{ref:"whdxSwiper",attrs:{length:5}},[n("swiper-item",[t._v("slot1")]),n("swiper-item",[t._v("slot2")]),n("swiper-item",[t._v("slot3")]),n("swiper-item",[t._v("slot4")]),n("swiper-item",[t._v("slot5")])],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whdx-swiper-container"},[t.showTopDot&&t.swiper?n("div",{staticClass:"whdx-swiper-icon-top"},t._l(t.length,(function(e){return n("a",{class:["whdx-dot",e===t.swiper.current_index+1&&"whdx-dot-active"]},[t._v(" "+t._s(e)+" ")])})),0):t._e(),n("div",{staticClass:"whdx-swiper",style:{height:t.height}},[t._t("default")],2),t.showBottomDot?n("div",{staticClass:"whdx-swiper-icon-bottom"},t._l(t.length,(function(e){return n("a",{class:["whdx-dot",e===t.swiper.current_index+1&&"whdx-dot-active"]},[t._v(" "+t._s(e)+" ")])})),0):t._e()])},c=[];n("a9e3"),n("4160"),n("a630"),n("ac1f"),n("3ca3"),n("5319"),n("159b");function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=n("85d3"),u=n.n(s);function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),u()(t,r.key,r)}}function l(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}var h=function(){function t(e){a(this,t),this.defaultOptions={container:".whdx-swiper",item:".whdx-swiper-item",direction:"x",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,item_interval:100,height:"auto",width:"0",item_width:"800px",current_index:0,minMovingDistance:0},this._options=Object.assign({},this.defaultOptions,e),this._options.height=this._options.height.replace("px",""),this._options.width=this._options.width.replace("px",""),this._options.item_width=this._options.item_width.replace("px",""),this.timer=null,this.$box=this._options.container,this.$container=this._options.container.querySelector(".whdx-swiper"),this.$items=Array.from(this.$container.querySelectorAll(this._options.item)),this.itemCount=this.$items.length,this.current_index=this._options.current_index,this._positions=[],this._offset=[],this._start={},this._move={},this._end={},this._init(),this._bindTouchEvent(),this._onResize()}return l(t,[{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_init",value:function(){this._initWidth(),this._initPosition(),this._setOffset(),this._setTransform()}},{key:"_initWidth",value:function(){var t=this;this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._options.item_width>this._width?(this._item_width=this._width,this._item_interval=0):(this._item_width=this._options.item_width,this._item_interval=(this._width-this._item_width)/2/2),this.$items.forEach((function(e,n){e.style.width="".concat(t._item_width,"px")}))}},{key:"_initPosition",value:function(){for(var t=0;t<this.itemCount;t++)this._positions.push(t)}},{key:"_setOffset",value:function(){var t=this;this._offset=[],0===this.current_index?this.$items.forEach((function(e,n){var r;r=0===n?2*t._item_interval:+(t._offset[n-1]+t._item_interval+ +t._item_width),t._offset.push(r)})):this.$items.forEach((function(e,n){var r,i=n-t.current_index;r=0===n?i*+t._item_width+(i+1)*t._item_interval+t._item_interval:+t._offset[n-1]+t._item_interval+ +t._item_width,t._offset.push(r)}))}},{key:"_setActive",value:function(t){var e=this._options.activeClass;this.$items.forEach((function(n,r){n.classList.remove(e),t===r&&n.classList.add(e)}))}},{key:"_setTransition",value:function(t){t=t||this._options.duration||"none";var e="none"===t?"none":t+"ms";this.$items.forEach((function(t,n){t.style.webkitTransition=e,t.style.transition=e}))}},{key:"_setTransform",value:function(t){var e=this;t=t||0,this.$items.forEach((function(n,r){var i=e._offset[r]+t,o="translate3d(".concat(i,"px, 0, 0)");n.style.webkitTransform=o,n.style.transform=o}))}},{key:"go",value:function(t){this._setTransition(),t=t<0?0:t>this.itemCount-1?this.itemCount-1:t,this.current_index=t,this._setOffset(),this._setTransform()}},{key:"_bindTouchEvent",value:function(){var t=this,e=this;this.touchstartHandler=function(n){e.stop(),e._start.x=n.changedTouches[0].pageX,e._start.y=n.changedTouches[0].pageY,t._setTransition("none")},this.touchmoveHandler=function(n){if(!(t.itemCount<=1)){e._move.x=n.changedTouches[0].pageX;var r=e._move.x-e._start.x;e._setTransform(r),n.preventDefault()}},this.touchendHandler=function(n){if(!(e.itemCount<=1)){t._setTransition(),e._end.x=n.changedTouches[0].pageX;var r=e._end.x-e._start.x;r>50?e.go(e.current_index-1):r<-50?e.go(e.current_index+1):e.go(e.current_index)}},this.$container.addEventListener("touchstart",e.touchstartHandler,!1),this.$container.addEventListener("touchmove",e.touchmoveHandler,!1),this.$container.addEventListener("touchend",e.touchendHandler,!1)}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout((function(){t._init()}),100)},window.addEventListener("resize",t.resizeHandler,!1),window.addEventListener("orientationchange",t.resizeHandler,!1)}}]),t}(),d=h,p={props:{height:{type:[String,Number],default:"500px"},length:{type:Number,default:0},showTopDot:{type:Boolean,default:!0},showBottomDot:{type:Boolean,default:!1}},name:"",data:function(){return{swiper:null}},methods:{init:function(){this.swiper=new d({container:this.$el,height:"300"})}},mounted:function(){this.init()}},v=p,_=(n("96f2"),n("2877")),g=Object(_["a"])(v,o,c,!1,null,"040ce6e2",null),x=g.exports,b=n("025f"),m={name:"about",components:{Swiper:x,SwiperItem:b["default"]},computed:{whdxSwiper:function(){return this.$refs.whdxSwiper.swiper}},methods:{goTo:function(t){this.whdxSwiper.go(this.whdxSwiper.current_index+t)},check:function(){window.open("https://github.com/Heathennn/K_Swiper")}},mounted:function(){console.log("this.whdxSwiper ==>",this.whdxSwiper)}},w=m,y=Object(_["a"])(w,r,i,!1,null,null,null);e["default"]=y.exports},fc48:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbc3:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whdx-swiper-item"},[t._t("default")],2)},i=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}))}}]);
//# sourceMappingURL=about.860fb1a8.js.map