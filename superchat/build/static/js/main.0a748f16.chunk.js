(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(t,e,r){t.exports=r(49)},42:function(t,e,r){},44:function(t,e,r){t.exports=r.p+"static/media/logo.06e73328.svg"},45:function(t,e,r){},49:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r.n(n),a=r(31),i=r.n(a),c=(r(42),r(1)),u=r(13),l=(r(44),r(45),r(24)),s=(r(50),r(47),r(32)),f=r(33);function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new k(o||[]);return n(i,"_invoke",{value:L(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=l;var f={};function p(){}function d(){}function v(){}var m={};u(m,a,function(){return this});var g=Object.getPrototypeOf,y=g&&g(g(S([])));y&&y!==e&&r.call(y,a)&&(m=y);var b=v.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(E.prototype),u(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(b),u(b,c,"Generator"),u(b,a,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}l.a.initializeApp({apiKey:"AIzaSyDtICvw6agxzkH7Wfn409L1tblXQG5JvnU",authDomain:"chats-bc10f.firebaseapp.com",projectId:"chats-bc10f",storageBucket:"chats-bc10f.appspot.com",messagingSenderId:"908606029796",appId:"1:908606029796:web:bb40b4977195fdc68651f1"});var p=l.a.auth(),d=l.a.firestore();function v(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"sign-in",onClick:function(){var t=new l.a.auth.GoogleAuthProvider;p.signInWithPopup(t)}},"Sign in with Google"),o.a.createElement("p",null,"Do not violate the community guidelines or you will be banned for life!"))}function m(){return p.currentUser&&o.a.createElement("button",{className:"sign-out",onClick:function(){return p.signOut()}},"Sign Out")}function g(){var t=Object(n.useRef)(),e=d.collection("messages"),r=e.orderBy("createdAt").limit(25),a=Object(f.a)(r,{idField:"id"}),i=Object(u.a)(a,1)[0],s=Object(n.useState)(""),v=Object(u.a)(s,2),m=v[0],g=v[1],b=function(){var r=Object(c.a)(h().mark(function r(n){var o,a,i;return h().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),o=p.currentUser,a=o.uid,i=o.photoURL,r.next=4,e.add({text:m,createdAt:l.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:i});case 4:g(""),t.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return r.stop()}},r)}));return function(t){return r.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("main",null,i&&i.map(function(t){return o.a.createElement(y,{key:t.id,message:t})}),o.a.createElement("span",{ref:t})),o.a.createElement("form",{onSubmit:b},o.a.createElement("input",{value:m,onChange:function(t){return g(t.target.value)},placeholder:"say something nice"}),o.a.createElement("button",{type:"submit",disabled:!m},"\ud83d\udd4a\ufe0f")))}function y(t){var e=t.message,r=e.text,n=e.uid,a=e.photoURL,i=n===p.currentUser.uid?"sent":"received";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"message ".concat(i)},o.a.createElement("img",{src:a||"https://api.adorable.io/avatars/23/abott@adorable.png"}),o.a.createElement("p",null,r)))}var b=function(){var t=Object(s.a)(p),e=Object(u.a)(t,1)[0];return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"),o.a.createElement(m,null)),o.a.createElement("section",null,e?o.a.createElement(g,null):o.a.createElement(v,null)))},w=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,51)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null))),w()}},[[34,3,2]]]);
//# sourceMappingURL=main.0a748f16.chunk.js.map