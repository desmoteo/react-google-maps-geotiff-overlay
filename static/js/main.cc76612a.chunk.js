(this["webpackJsonpreact-google-maps-geotiff-overlay-example"]=this["webpackJsonpreact-google-maps-geotiff-overlay-example"]||[]).push([[0],{226:function(t,e,r){t.exports=r(470)},231:function(t,e,r){},324:function(t,e){},326:function(t,e){},350:function(t,e,r){},470:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(24),i=r.n(a),c=(r(231),r(33)),u=r.n(c),s=r(68),l=r(206),f=r(207),p=r(217),h=r(208),y=r(218),v=r(209),d=r.n(v),m=r(69),g=r.n(m),w=r(99),b=r.n(w),x=r(55);function E(t,e){return t(e={exports:{}},e.exports),e.exports}var L=E((function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?h:f,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",p="executing",h="completed",y={};function v(){}function d(){}function m(){}var g={};g[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(S([])));b&&b!==r&&n.call(b,a)&&(g=b);var x=m.prototype=v.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){var e;this._invoke=function(r,o){function a(){return new Promise((function(e,a){!function e(r,o,a,i){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}(r,o,e,a)}))}return e=e?e.then(a,a):a()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:e,done:!0}}return d.prototype=x.constructor=m,m.constructor=d,m[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var a=new L(u(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(r){Function("r","regeneratorRuntime = r")(e)}}));function k(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}var O=function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){k(a,n,o,i,c,"next",t)}function c(t){k(a,n,o,i,c,"throw",t)}i(void 0)}))}};var j=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function _(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var S=function(t,e,r){return e&&_(t.prototype,e),r&&_(t,r),t},C=E((function(t){function e(t){return(e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(n){return"function"===typeof Symbol&&"symbol"===e(Symbol.iterator)?t.exports=r=function(t){return e(t)}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},r(n)}t.exports=r}));var D=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};var P=function(t,e){return!e||"object"!==C(e)&&"function"!==typeof e?D(t):e},R=E((function(t){function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(r)}t.exports=e})),K=E((function(t){function e(r,n){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(r,n)}t.exports=e}));var A=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&K(t,e)};var G=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},I=r(243),T=function(t){function e(t){var r;return j(this,e),r=P(this,R(e).call(this,t)),G(D(r),"setCanvasRef",(function(t){r.canvasRef=t,r.setCanvas()})),r.canvasRef=null,r.raster=null,r.canvasWidth=0,r.canvasHeight=0,r.state={showOverlay:!0,bounds:new window.google.maps.LatLngBounds(new window.google.maps.LatLng(0,0),new window.google.maps.LatLng(0,0))},r.loadRaster(r.props).then(),r}return A(e,t),S(e,[{key:"loadRaster",value:function(){var t=O(L.mark((function t(e){var r,n,o,a;return L.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.overlayData){t.next=15;break}return t.next=3,I.fromArrayBuffer(e.overlayData);case 3:return r=t.sent,t.next=6,r.getImage();case 6:return n=t.sent,this.canvasWidth=n.getWidth(),this.canvasHeight=n.getHeight(),o=n.getBoundingBox(),a=new window.google.maps.LatLngBounds(new window.google.maps.LatLng(o[1],o[0]),new window.google.maps.LatLng(o[3],o[2])),t.next=13,n.readRGB({enableAlpha:!0});case 13:this.raster=t.sent,this.setState({bounds:a});case 15:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"setCanvas",value:function(){if(this.props.draw&&null!==this.props.overlayData){(a=this.canvasRef).width=this.canvasWidth,a.height=this.canvasHeight;for(var t=a.getContext("2d"),e=t.createImageData(a.width,a.height),r=e.data,n=0,o=0;o<this.raster.length;o+=4)r[n]=this.raster[o],r[n+1]=this.raster[o+1],r[n+2]=this.raster[o+2],r[n+3]=this.raster[o+3],n+=4;t.putImageData(e,0,0)}else{var a;(a=this.canvasRef).getContext("2d").clearRect(0,0,this.canvasWidth,this.canvasHeight)}}},{key:"shouldComponentUpdate",value:function(t,e){return t.overlayData===this.props.overlayData||(this.loadRaster(t),!1)}},{key:"componentDidUpdate",value:function(){var t=O(L.mark((function t(e){return L.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setCanvas();case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=O(L.mark((function t(){return L.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"drawCanvas",value:function(){return this.props.draw?g.a.createElement("canvas",{style:{position:"absolute",height:"100%",width:"100%",opacity:this.props.opacity},ref:this.setCanvasRef}):null}},{key:"render",value:function(){return g.a.createElement(x.c,{bounds:this.state.bounds,mapPaneName:x.c.OVERLAY_LAYER},g.a.createElement("div",{style:{position:"absolute",height:"100%",width:"100%"}},this.drawCanvas()))}}]),e}(m.Component);G(T,"propTypes",{draw:b.a.bool,overlayData:b.a.object,opacity:b.a.number}),G(T,"defaultprops",{draw:!0,opacity:.5});var B=T,N=r(482),F=r(479),H=r(480),M=r(471),W=(r(350),function(t){function e(t){var r;return Object(l.a)(this,e),(r=Object(p.a)(this,Object(h.a)(e).call(this,t))).fetcher=function(){var t=Object(s.a)(u.a.mark((function t(e){var n,o,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.blob();case 5:return o=t.sent,t.next=8,o.arrayBuffer();case 8:a=t.sent,r.setState({overlayData:a});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.timer1=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.fetcher("prova-render.tif");case 2:case"end":return t.stop()}}),t)}))),r.timer2=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.fetcher("welcome.tif");case 2:case"end":return t.stop()}}),t)}))),r.onChangeApiKey=function(t,e){r.setState({apiKeyInput:e.value})},r.onButtonClick=function(){r.props.setTimeout(r.timer1,1e4),r.props.setTimeout(r.timer2,2e4),r.setState({apiKey:r.state.apiKeyInput})},r.state={overlayData:null,apiKey:null,apiKeyInput:null},r}return Object(y.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){var t=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"shouldComponentUpdate",value:function(t,e){return t!==this.props||e.apiKey!==this.state.apiKey||e.overlayData!==this.state.overlayData}},{key:"drawMap",value:function(){var t=this;return null!==this.state.apiKey?o.a.createElement("div",null,o.a.createElement(N.a,{raised:!0},o.a.createElement(F.a,{textAlign:"center",style:{padding:"30px"}},o.a.createElement("p",null,"Example will load 1 GeoTiff after 10 seconds, and a second one after 20 seconds"))),o.a.createElement(x.b,{id:"script-loader",googleMapsApiKey:this.state.apiKey},o.a.createElement(x.a,{onLoad:function(e){t.mapRef=e},id:"circle-example",mapContainerStyle:{height:"768px",width:"100%"},zoom:4,center:{lat:30.397,lng:10.644}},o.a.createElement(B,{overlayData:this.state.overlayData,draw:!0,opacity:1})))):o.a.createElement(N.a,{raised:!0},o.a.createElement(F.a,{textAlign:"center",style:{padding:"30px"}},o.a.createElement(H.a,{placeholder:"Google API Key ...",onChange:this.onChangeApiKey}),o.a.createElement(M.a,{onClick:this.onButtonClick},"Go!")))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"map-wrapper"},this.drawMap()))}}]),e}(n.Component)),Y=d()(W);r(469);i.a.render(o.a.createElement(Y,null),document.getElementById("root"))}},[[226,1,2]]]);
//# sourceMappingURL=main.cc76612a.chunk.js.map