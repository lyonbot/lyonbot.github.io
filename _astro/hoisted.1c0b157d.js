import"./hoisted.cad6f131.js";/*!
 * Viewer.js v1.11.3
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-03-05T07:01:17.741Z
 */function St(n,t){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),i.push.apply(i,e)}return i}function wt(n){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?St(Object(i),!0).forEach(function(e){se(n,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):St(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))})}return n}function vt(n){"@babel/helpers - typeof";return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vt(n)}function ae(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function Dt(n,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,Jt(e.key),e)}}function re(n,t,i){return t&&Dt(n.prototype,t),i&&Dt(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function se(n,t,i){return t=Jt(t),t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}function oe(n,t){if(typeof n!="object"||n===null)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var e=i.call(n,t||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function Jt(n){var t=oe(n,"string");return typeof t=="symbol"?t:String(t)}var It={backdrop:!0,button:!0,navbar:!0,title:!0,toolbar:!0,className:"",container:"body",filter:null,fullscreen:!0,inheritedAttributes:["crossOrigin","decoding","isMap","loading","referrerPolicy","sizes","srcset","useMap"],initialCoverage:.9,initialViewIndex:0,inline:!1,interval:5e3,keyboard:!0,focus:!0,loading:!0,loop:!0,minWidth:200,minHeight:100,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,slideOnTouch:!0,toggleOnDblclick:!0,tooltip:!0,transition:!0,zIndex:2015,zIndexInline:0,zoomRatio:.1,minZoomRatio:.01,maxZoomRatio:100,url:"src",ready:null,show:null,shown:null,hide:null,hidden:null,view:null,viewed:null,move:null,moved:null,rotate:null,rotated:null,scale:null,scaled:null,zoom:null,zoomed:null,play:null,stop:null},le='<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>',dt=typeof window<"u"&&typeof window.document<"u",F=dt?window:{},Z=dt&&F.document.documentElement?"ontouchstart"in F.document.documentElement:!1,yt=dt?"PointerEvent"in F:!1,m="viewer",ht="move",Qt="switch",tt="zoom",rt="".concat(m,"-active"),he="".concat(m,"-close"),ut="".concat(m,"-fade"),gt="".concat(m,"-fixed"),ue="".concat(m,"-fullscreen"),xt="".concat(m,"-fullscreen-exit"),W="".concat(m,"-hide"),ce="".concat(m,"-hide-md-down"),fe="".concat(m,"-hide-sm-down"),de="".concat(m,"-hide-xs-down"),_="".concat(m,"-in"),et="".concat(m,"-invisible"),G="".concat(m,"-loading"),me="".concat(m,"-move"),At="".concat(m,"-open"),H="".concat(m,"-show"),D="".concat(m,"-transition"),$="click",pt="dblclick",Nt="dragstart",Ot="focusin",Ct="keydown",z="load",X="error",ve=Z?"touchend touchcancel":"mouseup",ge=Z?"touchmove":"mousemove",pe=Z?"touchstart":"mousedown",_t=yt?"pointerdown":pe,zt=yt?"pointermove":ge,Lt=yt?"pointerup pointercancel":ve,kt="resize",L="transitionend",Rt="wheel",Vt="ready",Mt="show",Ft="shown",Pt="hide",Yt="hidden",Wt="view",it="viewed",Xt="move",qt="moved",Ht="rotate",Bt="rotated",Ut="scale",jt="scaled",Kt="zoom",Zt="zoomed",Gt="play",$t="stop",ft="".concat(m,"Action"),Et=/\s\s*/,st=["zoom-in","zoom-out","one-to-one","reset","prev","play","next","rotate-left","rotate-right","flip-horizontal","flip-vertical"];function nt(n){return typeof n=="string"}var be=Number.isNaN||F.isNaN;function T(n){return typeof n=="number"&&!be(n)}function U(n){return typeof n>"u"}function J(n){return vt(n)==="object"&&n!==null}var we=Object.prototype.hasOwnProperty;function j(n){if(!J(n))return!1;try{var t=n.constructor,i=t.prototype;return t&&i&&we.call(i,"isPrototypeOf")}catch{return!1}}function p(n){return typeof n=="function"}function w(n,t){if(n&&p(t))if(Array.isArray(n)||T(n.length)){var i=n.length,e;for(e=0;e<i&&t.call(n,n[e],e,n)!==!1;e+=1);}else J(n)&&Object.keys(n).forEach(function(a){t.call(n,n[a],a,n)});return n}var C=Object.assign||function(t){for(var i=arguments.length,e=new Array(i>1?i-1:0),a=1;a<i;a++)e[a-1]=arguments[a];return J(t)&&e.length>0&&e.forEach(function(r){J(r)&&Object.keys(r).forEach(function(s){t[s]=r[s]})}),t},ye=/^(?:width|height|left|top|marginLeft|marginTop)$/;function k(n,t){var i=n.style;w(t,function(e,a){ye.test(a)&&T(e)&&(e+="px"),i[a]=e})}function Ee(n){return nt(n)?n.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):n}function B(n,t){return!n||!t?!1:n.classList?n.classList.contains(t):n.className.indexOf(t)>-1}function f(n,t){if(!(!n||!t)){if(T(n.length)){w(n,function(e){f(e,t)});return}if(n.classList){n.classList.add(t);return}var i=n.className.trim();i?i.indexOf(t)<0&&(n.className="".concat(i," ").concat(t)):n.className=t}}function g(n,t){if(!(!n||!t)){if(T(n.length)){w(n,function(i){g(i,t)});return}if(n.classList){n.classList.remove(t);return}n.className.indexOf(t)>=0&&(n.className=n.className.replace(t,""))}}function at(n,t,i){if(t){if(T(n.length)){w(n,function(e){at(e,t,i)});return}i?f(n,t):g(n,t)}}var Te=/([a-z\d])([A-Z])/g;function Tt(n){return n.replace(Te,"$1-$2").toLowerCase()}function K(n,t){return J(n[t])?n[t]:n.dataset?n.dataset[t]:n.getAttribute("data-".concat(Tt(t)))}function bt(n,t,i){J(i)?n[t]=i:n.dataset?n.dataset[t]=i:n.setAttribute("data-".concat(Tt(t)),i)}var te=function(){var n=!1;if(dt){var t=!1,i=function(){},e=Object.defineProperty({},"once",{get:function(){return n=!0,t},set:function(r){t=r}});F.addEventListener("test",i,e),F.removeEventListener("test",i,e)}return n}();function b(n,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=i;t.trim().split(Et).forEach(function(r){if(!te){var s=n.listeners;s&&s[r]&&s[r][i]&&(a=s[r][i],delete s[r][i],Object.keys(s[r]).length===0&&delete s[r],Object.keys(s).length===0&&delete n.listeners)}n.removeEventListener(r,a,e)})}function d(n,t,i){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=i;t.trim().split(Et).forEach(function(r){if(e.once&&!te){var s=n.listeners,l=s===void 0?{}:s;a=function(){delete l[r][i],n.removeEventListener(r,a,e);for(var h=arguments.length,o=new Array(h),c=0;c<h;c++)o[c]=arguments[c];i.apply(n,o)},l[r]||(l[r]={}),l[r][i]&&n.removeEventListener(r,l[r][i],e),l[r][i]=a,n.listeners=l}n.addEventListener(r,a,e)})}function x(n,t,i,e){var a;return p(Event)&&p(CustomEvent)?a=new CustomEvent(t,wt({bubbles:!0,cancelable:!0,detail:i},e)):(a=document.createEvent("CustomEvent"),a.initCustomEvent(t,!0,!0,i)),n.dispatchEvent(a)}function Se(n){var t=n.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}function ct(n){var t=n.rotate,i=n.scaleX,e=n.scaleY,a=n.translateX,r=n.translateY,s=[];T(a)&&a!==0&&s.push("translateX(".concat(a,"px)")),T(r)&&r!==0&&s.push("translateY(".concat(r,"px)")),T(t)&&t!==0&&s.push("rotate(".concat(t,"deg)")),T(i)&&i!==1&&s.push("scaleX(".concat(i,")")),T(e)&&e!==1&&s.push("scaleY(".concat(e,")"));var l=s.length?s.join(" "):"none";return{WebkitTransform:l,msTransform:l,transform:l}}function De(n){return nt(n)?decodeURIComponent(n.replace(/^.*\//,"").replace(/[?&#].*$/,"")):""}var mt=F.navigator&&/(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(F.navigator.userAgent);function ee(n,t,i){var e=document.createElement("img");if(n.naturalWidth&&!mt)return i(n.naturalWidth,n.naturalHeight),e;var a=document.body||document.documentElement;return e.onload=function(){i(e.width,e.height),mt||a.removeChild(e)},w(t.inheritedAttributes,function(r){var s=n.getAttribute(r);s!==null&&e.setAttribute(r,s)}),e.src=n.src,mt||(e.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",a.appendChild(e)),e}function ot(n){switch(n){case 2:return de;case 3:return fe;case 4:return ce;default:return""}}function Ie(n){var t=wt({},n),i=[];return w(n,function(e,a){delete t[a],w(t,function(r){var s=Math.abs(e.startX-r.startX),l=Math.abs(e.startY-r.startY),u=Math.abs(e.endX-r.endX),h=Math.abs(e.endY-r.endY),o=Math.sqrt(s*s+l*l),c=Math.sqrt(u*u+h*h),v=(c-o)/o;i.push(v)})}),i.sort(function(e,a){return Math.abs(e)<Math.abs(a)}),i[0]}function lt(n,t){var i=n.pageX,e=n.pageY,a={endX:i,endY:e};return t?a:wt({timeStamp:Date.now(),startX:i,startY:e},a)}function xe(n){var t=0,i=0,e=0;return w(n,function(a){var r=a.startX,s=a.startY;t+=r,i+=s,e+=1}),t/=e,i/=e,{pageX:t,pageY:i}}var Ae={render:function(){this.initContainer(),this.initViewer(),this.initList(),this.renderViewer()},initBody:function(){var t=this.element.ownerDocument,i=t.body||t.documentElement;this.body=i,this.scrollbarWidth=window.innerWidth-t.documentElement.clientWidth,this.initialBodyPaddingRight=i.style.paddingRight,this.initialBodyComputedPaddingRight=window.getComputedStyle(i).paddingRight},initContainer:function(){this.containerData={width:window.innerWidth,height:window.innerHeight}},initViewer:function(){var t=this.options,i=this.parent,e;t.inline&&(e={width:Math.max(i.offsetWidth,t.minWidth),height:Math.max(i.offsetHeight,t.minHeight)},this.parentData=e),(this.fulled||!e)&&(e=this.containerData),this.viewerData=C({},e)},renderViewer:function(){this.options.inline&&!this.fulled&&k(this.viewer,this.viewerData)},initList:function(){var t=this,i=this.element,e=this.options,a=this.list,r=[];a.innerHTML="",w(this.images,function(s,l){var u=s.src,h=s.alt||De(u),o=t.getImageURL(s);if(u||o){var c=document.createElement("li"),v=document.createElement("img");w(e.inheritedAttributes,function(I){var S=s.getAttribute(I);S!==null&&v.setAttribute(I,S)}),e.navbar&&(v.src=u||o),v.alt=h,v.setAttribute("data-original-url",o||u),c.setAttribute("data-index",l),c.setAttribute("data-viewer-action","view"),c.setAttribute("role","button"),e.keyboard&&c.setAttribute("tabindex",0),c.appendChild(v),a.appendChild(c),r.push(c)}}),this.items=r,w(r,function(s){var l=s.firstElementChild,u,h;bt(l,"filled",!0),e.loading&&f(s,G),d(l,z,u=function(c){b(l,X,h),e.loading&&g(s,G),t.loadImage(c)},{once:!0}),d(l,X,h=function(){b(l,z,u),e.loading&&g(s,G)},{once:!0})}),e.transition&&d(i,it,function(){f(a,D)},{once:!0})},renderList:function(){var t=this.index,i=this.items[t];if(i){var e=i.nextElementSibling,a=parseInt(window.getComputedStyle(e||i).marginLeft,10),r=i.offsetWidth,s=r+a;k(this.list,C({width:s*this.length-a},ct({translateX:(this.viewerData.width-r)/2-s*t})))}},resetList:function(){var t=this.list;t.innerHTML="",g(t,D),k(t,ct({translateX:0}))},initImage:function(t){var i=this,e=this.options,a=this.image,r=this.viewerData,s=this.footer.offsetHeight,l=r.width,u=Math.max(r.height-s,s),h=this.imageData||{},o;this.imageInitializing={abort:function(){o.onload=null}},o=ee(a,e,function(c,v){var I=c/v,S=Math.max(0,Math.min(1,e.initialCoverage)),E=l,A=u;i.imageInitializing=!1,u*I>l?A=l/I:E=u*I,S=T(S)?S:.9,E=Math.min(E*S,c),A=Math.min(A*S,v);var N=(l-E)/2,O=(u-A)/2,y={left:N,top:O,x:N,y:O,width:E,height:A,oldRatio:1,ratio:E/c,aspectRatio:I,naturalWidth:c,naturalHeight:v},V=C({},y);e.rotatable&&(y.rotate=h.rotate||0,V.rotate=0),e.scalable&&(y.scaleX=h.scaleX||1,y.scaleY=h.scaleY||1,V.scaleX=1,V.scaleY=1),i.imageData=y,i.initialImageData=V,t&&t()})},renderImage:function(t){var i=this,e=this.image,a=this.imageData;if(k(e,C({width:a.width,height:a.height,marginLeft:a.x,marginTop:a.y},ct(a))),t)if((this.viewing||this.moving||this.rotating||this.scaling||this.zooming)&&this.options.transition&&B(e,D)){var r=function(){i.imageRendering=!1,t()};this.imageRendering={abort:function(){b(e,L,r)}},d(e,L,r,{once:!0})}else t()},resetImage:function(){if(this.viewing||this.viewed){var t=this.image;this.viewing&&this.viewing.abort(),t.parentNode.removeChild(t),this.image=null}}},Ne={bind:function(){var t=this.options,i=this.viewer,e=this.canvas,a=this.element.ownerDocument;d(i,$,this.onClick=this.click.bind(this)),d(i,Nt,this.onDragStart=this.dragstart.bind(this)),d(e,_t,this.onPointerDown=this.pointerdown.bind(this)),d(a,zt,this.onPointerMove=this.pointermove.bind(this)),d(a,Lt,this.onPointerUp=this.pointerup.bind(this)),d(a,Ct,this.onKeyDown=this.keydown.bind(this)),d(window,kt,this.onResize=this.resize.bind(this)),t.zoomable&&t.zoomOnWheel&&d(i,Rt,this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),t.toggleOnDblclick&&d(e,pt,this.onDblclick=this.dblclick.bind(this))},unbind:function(){var t=this.options,i=this.viewer,e=this.canvas,a=this.element.ownerDocument;b(i,$,this.onClick),b(i,Nt,this.onDragStart),b(e,_t,this.onPointerDown),b(a,zt,this.onPointerMove),b(a,Lt,this.onPointerUp),b(a,Ct,this.onKeyDown),b(window,kt,this.onResize),t.zoomable&&t.zoomOnWheel&&b(i,Rt,this.onWheel,{passive:!1,capture:!0}),t.toggleOnDblclick&&b(e,pt,this.onDblclick)}},Oe={click:function(t){var i=this.options,e=this.imageData,a=t.target,r=K(a,ft);switch(!r&&a.localName==="img"&&a.parentElement.localName==="li"&&(a=a.parentElement,r=K(a,ft)),Z&&t.isTrusted&&a===this.canvas&&clearTimeout(this.clickCanvasTimeout),r){case"mix":this.played?this.stop():i.inline?this.fulled?this.exit():this.full():this.hide();break;case"hide":this.pointerMoved||this.hide();break;case"view":this.view(K(a,"index"));break;case"zoom-in":this.zoom(.1,!0);break;case"zoom-out":this.zoom(-.1,!0);break;case"one-to-one":this.toggle();break;case"reset":this.reset();break;case"prev":this.prev(i.loop);break;case"play":this.play(i.fullscreen);break;case"next":this.next(i.loop);break;case"rotate-left":this.rotate(-90);break;case"rotate-right":this.rotate(90);break;case"flip-horizontal":this.scaleX(-e.scaleX||-1);break;case"flip-vertical":this.scaleY(-e.scaleY||-1);break;default:this.played&&this.stop()}},dblclick:function(t){t.preventDefault(),this.viewed&&t.target===this.image&&(Z&&t.isTrusted&&clearTimeout(this.doubleClickImageTimeout),this.toggle(t.isTrusted?t:t.detail&&t.detail.originalEvent))},load:function(){var t=this;this.timeout&&(clearTimeout(this.timeout),this.timeout=!1);var i=this.element,e=this.options,a=this.image,r=this.index,s=this.viewerData;g(a,et),e.loading&&g(this.canvas,G),a.style.cssText="height:0;"+"margin-left:".concat(s.width/2,"px;")+"margin-top:".concat(s.height/2,"px;")+"max-width:none!important;position:relative;width:0;",this.initImage(function(){at(a,me,e.movable),at(a,D,e.transition),t.renderImage(function(){t.viewed=!0,t.viewing=!1,p(e.viewed)&&d(i,it,e.viewed,{once:!0}),x(i,it,{originalImage:t.images[r],index:r,image:a},{cancelable:!1})})})},loadImage:function(t){var i=t.target,e=i.parentNode,a=e.offsetWidth||30,r=e.offsetHeight||50,s=!!K(i,"filled");ee(i,this.options,function(l,u){var h=l/u,o=a,c=r;r*h>a?s?o=r*h:c=a/h:s?c=a/h:o=r*h,k(i,C({width:o,height:c},ct({translateX:(a-o)/2,translateY:(r-c)/2})))})},keydown:function(t){var i=this.options;if(i.keyboard){var e=t.keyCode||t.which||t.charCode;switch(e){case 13:this.viewer.contains(t.target)&&this.click(t);break}if(this.fulled)switch(e){case 27:this.played?this.stop():i.inline?this.fulled&&this.exit():this.hide();break;case 32:this.played&&this.stop();break;case 37:this.played&&this.playing?this.playing.prev():this.prev(i.loop);break;case 38:t.preventDefault(),this.zoom(i.zoomRatio,!0);break;case 39:this.played&&this.playing?this.playing.next():this.next(i.loop);break;case 40:t.preventDefault(),this.zoom(-i.zoomRatio,!0);break;case 48:case 49:t.ctrlKey&&(t.preventDefault(),this.toggle());break}}},dragstart:function(t){t.target.localName==="img"&&t.preventDefault()},pointerdown:function(t){var i=this.options,e=this.pointers,a=t.buttons,r=t.button;if(this.pointerMoved=!1,!(!this.viewed||this.showing||this.viewing||this.hiding||(t.type==="mousedown"||t.type==="pointerdown"&&t.pointerType==="mouse")&&(T(a)&&a!==1||T(r)&&r!==0||t.ctrlKey))){t.preventDefault(),t.changedTouches?w(t.changedTouches,function(l){e[l.identifier]=lt(l)}):e[t.pointerId||0]=lt(t);var s=i.movable?ht:!1;i.zoomOnTouch&&i.zoomable&&Object.keys(e).length>1?s=tt:i.slideOnTouch&&(t.pointerType==="touch"||t.type==="touchstart")&&this.isSwitchable()&&(s=Qt),i.transition&&(s===ht||s===tt)&&g(this.image,D),this.action=s}},pointermove:function(t){var i=this.pointers,e=this.action;!this.viewed||!e||(t.preventDefault(),t.changedTouches?w(t.changedTouches,function(a){C(i[a.identifier]||{},lt(a,!0))}):C(i[t.pointerId||0]||{},lt(t,!0)),this.change(t))},pointerup:function(t){var i=this,e=this.options,a=this.action,r=this.pointers,s;t.changedTouches?w(t.changedTouches,function(l){s=r[l.identifier],delete r[l.identifier]}):(s=r[t.pointerId||0],delete r[t.pointerId||0]),a&&(t.preventDefault(),e.transition&&(a===ht||a===tt)&&f(this.image,D),this.action=!1,Z&&a!==tt&&s&&Date.now()-s.timeStamp<500&&(clearTimeout(this.clickCanvasTimeout),clearTimeout(this.doubleClickImageTimeout),e.toggleOnDblclick&&this.viewed&&t.target===this.image?this.imageClicked?(this.imageClicked=!1,this.doubleClickImageTimeout=setTimeout(function(){x(i.image,pt,{originalEvent:t})},50)):(this.imageClicked=!0,this.doubleClickImageTimeout=setTimeout(function(){i.imageClicked=!1},500)):(this.imageClicked=!1,e.backdrop&&e.backdrop!=="static"&&t.target===this.canvas&&(this.clickCanvasTimeout=setTimeout(function(){x(i.canvas,$,{originalEvent:t})},50)))))},resize:function(){var t=this;if(!(!this.isShown||this.hiding)&&(this.fulled&&(this.close(),this.initBody(),this.open()),this.initContainer(),this.initViewer(),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage()}),this.played)){if(this.options.fullscreen&&this.fulled&&!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)){this.stop();return}w(this.player.getElementsByTagName("img"),function(i){d(i,z,t.loadImage.bind(t),{once:!0}),x(i,z)})}},wheel:function(t){var i=this;if(this.viewed&&(t.preventDefault(),!this.wheeling)){this.wheeling=!0,setTimeout(function(){i.wheeling=!1},50);var e=Number(this.options.zoomRatio)||.1,a=1;t.deltaY?a=t.deltaY>0?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=t.detail>0?1:-1),this.zoom(-a*e,!0,null,t)}}},Ce={show:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=this.element,e=this.options;if(e.inline||this.showing||this.isShown||this.showing)return this;if(!this.ready)return this.build(),this.ready&&this.show(t),this;if(p(e.show)&&d(i,Mt,e.show,{once:!0}),x(i,Mt)===!1||!this.ready)return this;this.hiding&&this.transitioning.abort(),this.showing=!0,this.open();var a=this.viewer;if(g(a,W),a.setAttribute("role","dialog"),a.setAttribute("aria-labelledby",this.title.id),a.setAttribute("aria-modal",!0),a.removeAttribute("aria-hidden"),e.transition&&!t){var r=this.shown.bind(this);this.transitioning={abort:function(){b(a,L,r),g(a,_)}},f(a,D),a.initialOffsetWidth=a.offsetWidth,d(a,L,r,{once:!0}),f(a,_)}else f(a,_),this.shown();return this},hide:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=this.element,a=this.options;if(a.inline||this.hiding||!(this.isShown||this.showing))return this;if(p(a.hide)&&d(e,Pt,a.hide,{once:!0}),x(e,Pt)===!1)return this;this.showing&&this.transitioning.abort(),this.hiding=!0,this.played?this.stop():this.viewing&&this.viewing.abort();var r=this.viewer,s=this.image,l=function(){g(r,_),t.hidden()};if(a.transition&&!i){var u=function o(c){c&&c.target===r&&(b(r,L,o),t.hidden())},h=function(){B(r,D)?(d(r,L,u),g(r,_)):l()};this.transitioning={abort:function(){t.viewed&&B(s,D)?b(s,L,h):B(r,D)&&b(r,L,u)}},this.viewed&&B(s,D)?(d(s,L,h,{once:!0}),this.zoomTo(0,!1,null,null,!0)):h()}else l();return this},view:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.initialViewIndex;if(i=Number(i)||0,this.hiding||this.played||i<0||i>=this.length||this.viewed&&i===this.index)return this;if(!this.isShown)return this.index=i,this.show();this.viewing&&this.viewing.abort();var e=this.element,a=this.options,r=this.title,s=this.canvas,l=this.items[i],u=l.querySelector("img"),h=K(u,"originalUrl"),o=u.getAttribute("alt"),c=document.createElement("img");if(w(a.inheritedAttributes,function(A){var N=u.getAttribute(A);N!==null&&c.setAttribute(A,N)}),c.src=h,c.alt=o,p(a.view)&&d(e,Wt,a.view,{once:!0}),x(e,Wt,{originalImage:this.images[i],index:i,image:c})===!1||!this.isShown||this.hiding||this.played)return this;var v=this.items[this.index];v&&(g(v,rt),v.removeAttribute("aria-selected")),f(l,rt),l.setAttribute("aria-selected",!0),a.focus&&l.focus(),this.image=c,this.viewed=!1,this.index=i,this.imageData={},f(c,et),a.loading&&f(s,G),s.innerHTML="",s.appendChild(c),this.renderList(),r.innerHTML="";var I=function(){var N=t.imageData,O=Array.isArray(a.title)?a.title[1]:a.title;r.innerHTML=Ee(p(O)?O.call(t,c,N):"".concat(o," (").concat(N.naturalWidth," × ").concat(N.naturalHeight,")"))},S,E;return d(e,it,I,{once:!0}),this.viewing={abort:function(){b(e,it,I),c.complete?t.imageRendering?t.imageRendering.abort():t.imageInitializing&&t.imageInitializing.abort():(c.src="",b(c,z,S),t.timeout&&clearTimeout(t.timeout))}},c.complete?this.load():(d(c,z,S=function(){b(c,X,E),t.load()},{once:!0}),d(c,X,E=function(){b(c,z,S),t.timeout&&(clearTimeout(t.timeout),t.timeout=!1),g(c,et),a.loading&&g(t.canvas,G)},{once:!0}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){g(c,et),t.timeout=!1},1e3)),this},prev:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=this.index-1;return i<0&&(i=t?this.length-1:0),this.view(i),this},next:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=this.length-1,e=this.index+1;return e>i&&(e=t?0:i),this.view(e),this},move:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,e=this.imageData;return this.moveTo(U(t)?t:e.x+Number(t),U(i)?i:e.y+Number(i)),this},moveTo:function(t){var i=this,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=this.element,s=this.options,l=this.imageData;if(t=Number(t),e=Number(e),this.viewed&&!this.played&&s.movable){var u=l.x,h=l.y,o=!1;if(T(t)?o=!0:t=u,T(e)?o=!0:e=h,o){if(p(s.move)&&d(r,Xt,s.move,{once:!0}),x(r,Xt,{x:t,y:e,oldX:u,oldY:h,originalEvent:a})===!1)return this;l.x=t,l.y=e,l.left=t,l.top=e,this.moving=!0,this.renderImage(function(){i.moving=!1,p(s.moved)&&d(r,qt,s.moved,{once:!0}),x(r,qt,{x:t,y:e,oldX:u,oldY:h,originalEvent:a},{cancelable:!1})})}}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t)),this},rotateTo:function(t){var i=this,e=this.element,a=this.options,r=this.imageData;if(t=Number(t),T(t)&&this.viewed&&!this.played&&a.rotatable){var s=r.rotate;if(p(a.rotate)&&d(e,Ht,a.rotate,{once:!0}),x(e,Ht,{degree:t,oldDegree:s})===!1)return this;r.rotate=t,this.rotating=!0,this.renderImage(function(){i.rotating=!1,p(a.rotated)&&d(e,Bt,a.rotated,{once:!0}),x(e,Bt,{degree:t,oldDegree:s},{cancelable:!1})})}return this},scaleX:function(t){return this.scale(t,this.imageData.scaleY),this},scaleY:function(t){return this.scale(this.imageData.scaleX,t),this},scale:function(t){var i=this,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t,a=this.element,r=this.options,s=this.imageData;if(t=Number(t),e=Number(e),this.viewed&&!this.played&&r.scalable){var l=s.scaleX,u=s.scaleY,h=!1;if(T(t)?h=!0:t=l,T(e)?h=!0:e=u,h){if(p(r.scale)&&d(a,Ut,r.scale,{once:!0}),x(a,Ut,{scaleX:t,scaleY:e,oldScaleX:l,oldScaleY:u})===!1)return this;s.scaleX=t,s.scaleY=e,this.scaling=!0,this.renderImage(function(){i.scaling=!1,p(r.scaled)&&d(a,jt,r.scaled,{once:!0}),x(a,jt,{scaleX:t,scaleY:e,oldScaleX:l,oldScaleY:u},{cancelable:!1})})}}return this},zoom:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,r=this.imageData;return t=Number(t),t<0?t=1/(1-t):t=1+t,this.zoomTo(r.width*t/r.naturalWidth,i,e,a),this},zoomTo:function(t){var i=this,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,l=this.element,u=this.options,h=this.pointers,o=this.imageData,c=o.x,v=o.y,I=o.width,S=o.height,E=o.naturalWidth,A=o.naturalHeight;if(t=Math.max(0,t),T(t)&&this.viewed&&!this.played&&(s||u.zoomable)){if(!s){var N=Math.max(.01,u.minZoomRatio),O=Math.min(100,u.maxZoomRatio);t=Math.min(Math.max(t,N),O)}if(r)switch(r.type){case"wheel":u.zoomRatio>=.055&&t>.95&&t<1.05&&(t=1);break;case"pointermove":case"touchmove":case"mousemove":t>.99&&t<1.01&&(t=1);break}var y=E*t,V=A*t,P=y-I,R=V-S,Y=o.ratio;if(p(u.zoom)&&d(l,Kt,u.zoom,{once:!0}),x(l,Kt,{ratio:t,oldRatio:Y,originalEvent:r})===!1)return this;if(this.zooming=!0,r){var Q=Se(this.viewer),q=h&&Object.keys(h).length>0?xe(h):{pageX:r.pageX,pageY:r.pageY};o.x-=P*((q.pageX-Q.left-c)/I),o.y-=R*((q.pageY-Q.top-v)/S)}else j(a)&&T(a.x)&&T(a.y)?(o.x-=P*((a.x-c)/I),o.y-=R*((a.y-v)/S)):(o.x-=P/2,o.y-=R/2);o.left=o.x,o.top=o.y,o.width=y,o.height=V,o.oldRatio=Y,o.ratio=t,this.renderImage(function(){i.zooming=!1,p(u.zoomed)&&d(l,Zt,u.zoomed,{once:!0}),x(l,Zt,{ratio:t,oldRatio:Y,originalEvent:r},{cancelable:!1})}),e&&this.tooltip()}return this},play:function(){var t=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(!this.isShown||this.played)return this;var e=this.element,a=this.options;if(p(a.play)&&d(e,Gt,a.play,{once:!0}),x(e,Gt)===!1)return this;var r=this.player,s=this.loadImage.bind(this),l=[],u=0,h=0;if(this.played=!0,this.onLoadWhenPlay=s,i&&this.requestFullscreen(i),f(r,H),w(this.items,function(v,I){var S=v.querySelector("img"),E=document.createElement("img");E.src=K(S,"originalUrl"),E.alt=S.getAttribute("alt"),E.referrerPolicy=S.referrerPolicy,u+=1,f(E,ut),at(E,D,a.transition),B(v,rt)&&(f(E,_),h=I),l.push(E),d(E,z,s,{once:!0}),r.appendChild(E)}),T(a.interval)&&a.interval>0){var o=function v(){clearTimeout(t.playing.timeout),g(l[h],_),h-=1,h=h>=0?h:u-1,f(l[h],_),t.playing.timeout=setTimeout(v,a.interval)},c=function v(){clearTimeout(t.playing.timeout),g(l[h],_),h+=1,h=h<u?h:0,f(l[h],_),t.playing.timeout=setTimeout(v,a.interval)};u>1&&(this.playing={prev:o,next:c,timeout:setTimeout(c,a.interval)})}return this},stop:function(){var t=this;if(!this.played)return this;var i=this.element,e=this.options;if(p(e.stop)&&d(i,$t,e.stop,{once:!0}),x(i,$t)===!1)return this;var a=this.player;return clearTimeout(this.playing.timeout),this.playing=!1,this.played=!1,w(a.getElementsByTagName("img"),function(r){b(r,z,t.onLoadWhenPlay)}),g(a,H),a.innerHTML="",this.exitFullscreen(),this},full:function(){var t=this,i=this.options,e=this.viewer,a=this.image,r=this.list;return!this.isShown||this.played||this.fulled||!i.inline?this:(this.fulled=!0,this.open(),f(this.button,xt),i.transition&&(g(r,D),this.viewed&&g(a,D)),f(e,gt),e.setAttribute("role","dialog"),e.setAttribute("aria-labelledby",this.title.id),e.setAttribute("aria-modal",!0),e.removeAttribute("style"),k(e,{zIndex:i.zIndex}),i.focus&&this.enforceFocus(),this.initContainer(),this.viewerData=C({},this.containerData),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){f(a,D),f(r,D)},0)})}),this)},exit:function(){var t=this,i=this.options,e=this.viewer,a=this.image,r=this.list;return!this.isShown||this.played||!this.fulled||!i.inline?this:(this.fulled=!1,this.close(),g(this.button,xt),i.transition&&(g(r,D),this.viewed&&g(a,D)),i.focus&&this.clearEnforceFocus(),e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-modal"),g(e,gt),k(e,{zIndex:i.zIndexInline}),this.viewerData=C({},this.parentData),this.renderViewer(),this.renderList(),this.viewed&&this.initImage(function(){t.renderImage(function(){i.transition&&setTimeout(function(){f(a,D),f(r,D)},0)})}),this)},tooltip:function(){var t=this,i=this.options,e=this.tooltipBox,a=this.imageData;return!this.viewed||this.played||!i.tooltip?this:(e.textContent="".concat(Math.round(a.ratio*100),"%"),this.tooltipping?clearTimeout(this.tooltipping):i.transition?(this.fading&&x(e,L),f(e,H),f(e,ut),f(e,D),e.removeAttribute("aria-hidden"),e.initialOffsetWidth=e.offsetWidth,f(e,_)):(f(e,H),e.removeAttribute("aria-hidden")),this.tooltipping=setTimeout(function(){i.transition?(d(e,L,function(){g(e,H),g(e,ut),g(e,D),e.setAttribute("aria-hidden",!0),t.fading=!1},{once:!0}),g(e,_),t.fading=!0):(g(e,H),e.setAttribute("aria-hidden",!0)),t.tooltipping=!1},1e3),this)},toggle:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.imageData.ratio===1?this.zoomTo(this.imageData.oldRatio,!0,null,t):this.zoomTo(1,!0,null,t),this},reset:function(){return this.viewed&&!this.played&&(this.imageData=C({},this.initialImageData),this.renderImage()),this},update:function(){var t=this,i=this.element,e=this.options,a=this.isImg;if(a&&!i.parentNode)return this.destroy();var r=[];if(w(a?[i]:i.querySelectorAll("img"),function(h){p(e.filter)?e.filter.call(t,h)&&r.push(h):t.getImageURL(h)&&r.push(h)}),!r.length)return this;if(this.images=r,this.length=r.length,this.ready){var s=[];if(w(this.items,function(h,o){var c=h.querySelector("img"),v=r[o];v&&c?(v.src!==c.src||v.alt!==c.alt)&&s.push(o):s.push(o)}),k(this.list,{width:"auto"}),this.initList(),this.isShown)if(this.length){if(this.viewed){var l=s.indexOf(this.index);if(l>=0)this.viewed=!1,this.view(Math.max(Math.min(this.index-l,this.length-1),0));else{var u=this.items[this.index];f(u,rt),u.setAttribute("aria-selected",!0)}}}else this.image=null,this.viewed=!1,this.index=0,this.imageData={},this.canvas.innerHTML="",this.title.innerHTML=""}else this.build();return this},destroy:function(){var t=this.element,i=this.options;return t[m]?(this.destroyed=!0,this.ready?(this.played&&this.stop(),i.inline?(this.fulled&&this.exit(),this.unbind()):this.isShown?(this.viewing&&(this.imageRendering?this.imageRendering.abort():this.imageInitializing&&this.imageInitializing.abort()),this.hiding&&this.transitioning.abort(),this.hidden()):this.showing&&(this.transitioning.abort(),this.hidden()),this.ready=!1,this.viewer.parentNode.removeChild(this.viewer)):i.inline&&(this.delaying?this.delaying.abort():this.initializing&&this.initializing.abort()),i.inline||b(t,$,this.onStart),t[m]=void 0,this):this}},_e={getImageURL:function(t){var i=this.options.url;return nt(i)?i=t.getAttribute(i):p(i)?i=i.call(this,t):i="",i},enforceFocus:function(){var t=this;this.clearEnforceFocus(),d(document,Ot,this.onFocusin=function(i){var e=t.viewer,a=i.target;if(!(a===document||a===e||e.contains(a))){for(;a;){if(a.getAttribute("tabindex")!==null||a.getAttribute("aria-modal")==="true")return;a=a.parentElement}e.focus()}})},clearEnforceFocus:function(){this.onFocusin&&(b(document,Ot,this.onFocusin),this.onFocusin=null)},open:function(){var t=this.body;f(t,At),this.scrollbarWidth>0&&(t.style.paddingRight="".concat(this.scrollbarWidth+(parseFloat(this.initialBodyComputedPaddingRight)||0),"px"))},close:function(){var t=this.body;g(t,At),this.scrollbarWidth>0&&(t.style.paddingRight=this.initialBodyPaddingRight)},shown:function(){var t=this.element,i=this.options,e=this.viewer;this.fulled=!0,this.isShown=!0,this.render(),this.bind(),this.showing=!1,i.focus&&(e.focus(),this.enforceFocus()),p(i.shown)&&d(t,Ft,i.shown,{once:!0}),x(t,Ft)!==!1&&this.ready&&this.isShown&&!this.hiding&&this.view(this.index)},hidden:function(){var t=this.element,i=this.options,e=this.viewer;i.fucus&&this.clearEnforceFocus(),this.fulled=!1,this.viewed=!1,this.isShown=!1,this.close(),this.unbind(),f(e,W),e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.removeAttribute("aria-modal"),e.setAttribute("aria-hidden",!0),this.resetList(),this.resetImage(),this.hiding=!1,this.destroyed||(p(i.hidden)&&d(t,Yt,i.hidden,{once:!0}),x(t,Yt,null,{cancelable:!1}))},requestFullscreen:function(t){var i=this.element.ownerDocument;if(this.fulled&&!(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.msFullscreenElement)){var e=i.documentElement;e.requestFullscreen?j(t)?e.requestFullscreen(t):e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},exitFullscreen:function(){var t=this.element.ownerDocument;this.fulled&&(t.fullscreenElement||t.webkitFullscreenElement||t.mozFullScreenElement||t.msFullscreenElement)&&(t.exitFullscreen?t.exitFullscreen():t.webkitExitFullscreen?t.webkitExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.msExitFullscreen&&t.msExitFullscreen())},change:function(t){var i=this.options,e=this.pointers,a=e[Object.keys(e)[0]];if(a){var r=a.endX-a.startX,s=a.endY-a.startY;switch(this.action){case ht:(r!==0||s!==0)&&(this.pointerMoved=!0,this.move(r,s,t));break;case tt:this.zoom(Ie(e),!1,null,t);break;case Qt:{this.action="switched";var l=Math.abs(r);l>1&&l>Math.abs(s)&&(this.pointers={},r>1?this.prev(i.loop):r<-1&&this.next(i.loop));break}}w(e,function(u){u.startX=u.endX,u.startY=u.endY})}},isSwitchable:function(){var t=this.imageData,i=this.viewerData;return this.length>1&&t.x>=0&&t.y>=0&&t.width<=i.width&&t.height<=i.height}},ze=F.Viewer,Le=function(n){return function(){return n+=1,n}}(-1),ie=function(){function n(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(ae(this,n),!t||t.nodeType!==1)throw new Error("The first argument is required and must be an element.");this.element=t,this.options=C({},It,j(i)&&i),this.action=!1,this.fading=!1,this.fulled=!1,this.hiding=!1,this.imageClicked=!1,this.imageData={},this.index=this.options.initialViewIndex,this.isImg=!1,this.isShown=!1,this.length=0,this.moving=!1,this.played=!1,this.playing=!1,this.pointers={},this.ready=!1,this.rotating=!1,this.scaling=!1,this.showing=!1,this.timeout=!1,this.tooltipping=!1,this.viewed=!1,this.viewing=!1,this.wheeling=!1,this.zooming=!1,this.pointerMoved=!1,this.id=Le(),this.init()}return re(n,[{key:"init",value:function(){var i=this,e=this.element,a=this.options;if(!e[m]){e[m]=this,a.focus&&!a.keyboard&&(a.focus=!1);var r=e.localName==="img",s=[];if(w(r?[e]:e.querySelectorAll("img"),function(h){p(a.filter)?a.filter.call(i,h)&&s.push(h):i.getImageURL(h)&&s.push(h)}),this.isImg=r,this.length=s.length,this.images=s,this.initBody(),U(document.createElement(m).style.transition)&&(a.transition=!1),a.inline){var l=0,u=function(){if(l+=1,l===i.length){var o;i.initializing=!1,i.delaying={abort:function(){clearTimeout(o)}},o=setTimeout(function(){i.delaying=!1,i.build()},0)}};this.initializing={abort:function(){w(s,function(o){o.complete||(b(o,z,u),b(o,X,u))})}},w(s,function(h){if(h.complete)u();else{var o,c;d(h,z,o=function(){b(h,X,c),u()},{once:!0}),d(h,X,c=function(){b(h,z,o),u()},{once:!0})}})}else d(e,$,this.onStart=function(h){var o=h.target;o.localName==="img"&&(!p(a.filter)||a.filter.call(i,o))&&i.view(i.images.indexOf(o))})}}},{key:"build",value:function(){if(!this.ready){var i=this.element,e=this.options,a=i.parentNode,r=document.createElement("div");r.innerHTML=le;var s=r.querySelector(".".concat(m,"-container")),l=s.querySelector(".".concat(m,"-title")),u=s.querySelector(".".concat(m,"-toolbar")),h=s.querySelector(".".concat(m,"-navbar")),o=s.querySelector(".".concat(m,"-button")),c=s.querySelector(".".concat(m,"-canvas"));if(this.parent=a,this.viewer=s,this.title=l,this.toolbar=u,this.navbar=h,this.button=o,this.canvas=c,this.footer=s.querySelector(".".concat(m,"-footer")),this.tooltipBox=s.querySelector(".".concat(m,"-tooltip")),this.player=s.querySelector(".".concat(m,"-player")),this.list=s.querySelector(".".concat(m,"-list")),s.id="".concat(m).concat(this.id),l.id="".concat(m,"Title").concat(this.id),f(l,e.title?ot(Array.isArray(e.title)?e.title[0]:e.title):W),f(h,e.navbar?ot(e.navbar):W),at(o,W,!e.button),e.keyboard&&o.setAttribute("tabindex",0),e.backdrop&&(f(s,"".concat(m,"-backdrop")),!e.inline&&e.backdrop!=="static"&&bt(c,ft,"hide")),nt(e.className)&&e.className&&e.className.split(Et).forEach(function(y){f(s,y)}),e.toolbar){var v=document.createElement("ul"),I=j(e.toolbar),S=st.slice(0,3),E=st.slice(7,9),A=st.slice(9);I||f(u,ot(e.toolbar)),w(I?e.toolbar:st,function(y,V){var P=I&&j(y),R=I?Tt(V):y,Y=P&&!U(y.show)?y.show:y;if(!(!Y||!e.zoomable&&S.indexOf(R)!==-1||!e.rotatable&&E.indexOf(R)!==-1||!e.scalable&&A.indexOf(R)!==-1)){var Q=P&&!U(y.size)?y.size:y,q=P&&!U(y.click)?y.click:y,M=document.createElement("li");e.keyboard&&M.setAttribute("tabindex",0),M.setAttribute("role","button"),f(M,"".concat(m,"-").concat(R)),p(q)||bt(M,ft,R),T(Y)&&f(M,ot(Y)),["small","large"].indexOf(Q)!==-1?f(M,"".concat(m,"-").concat(Q)):R==="play"&&f(M,"".concat(m,"-large")),p(q)&&d(M,$,q),v.appendChild(M)}}),u.appendChild(v)}else f(u,W);if(!e.rotatable){var N=u.querySelectorAll('li[class*="rotate"]');f(N,et),w(N,function(y){u.appendChild(y)})}if(e.inline)f(o,ue),k(s,{zIndex:e.zIndexInline}),window.getComputedStyle(a).position==="static"&&k(a,{position:"relative"}),a.insertBefore(s,i.nextSibling);else{f(o,he),f(s,gt),f(s,ut),f(s,W),k(s,{zIndex:e.zIndex});var O=e.container;nt(O)&&(O=i.ownerDocument.querySelector(O)),O||(O=this.body),O.appendChild(s)}if(e.inline&&(this.render(),this.bind(),this.isShown=!0),this.ready=!0,p(e.ready)&&d(i,Vt,e.ready,{once:!0}),x(i,Vt)===!1){this.ready=!1;return}this.ready&&e.inline&&this.view(this.index)}}}],[{key:"noConflict",value:function(){return window.Viewer=ze,n}},{key:"setDefaults",value:function(i){C(It,j(i)&&i)}}]),n}();C(ie.prototype,Ae,Ne,Oe,Ce,_e);new ie(document.querySelector(".prose"));document.querySelectorAll("a[data-prose-heading-id]").forEach(function(n){var t=n.getAttribute("data-prose-heading-id"),i=document.getElementById(t);if(i){var e=document.createElement("a");e.setAttribute("href","#"+t),e.setAttribute("class","absolute bg-none no-underline ms-[-1.5ex] text-right text-accent"),e.textContent="#",i.insertBefore(e,i.firstChild)}});document.querySelectorAll(".prose aside").forEach(function(n){document.getElementById("aside-container").appendChild(n),n.classList.add("mb-4")});const ne=document.getElementById("to-top-btn"),ke=document.getElementById("blog-hero");function Re(n){n.forEach(t=>{ne.dataset.show=(!t.isIntersecting).toString()})}ne.addEventListener("click",()=>{document.documentElement.scrollTo({top:0,behavior:"smooth"})});const Ve=new IntersectionObserver(Re);Ve.observe(ke);
