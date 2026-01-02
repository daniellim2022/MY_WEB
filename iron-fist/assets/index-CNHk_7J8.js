(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function Pv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zh={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function ES(){if(g_)return el;g_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:a,key:f,ref:l!==void 0?l:null,props:c}}return el.Fragment=t,el.jsx=n,el.jsxs=n,el}var __;function TS(){return __||(__=1,zh.exports=ES()),zh.exports}var _t=TS(),Fh={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function AS(){if(v_)return ce;v_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function v(N,tt,gt){this.props=N,this.context=tt,this.refs=M,this.updater=gt||b}v.prototype.isReactComponent={},v.prototype.setState=function(N,tt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,tt,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function D(){}D.prototype=v.prototype;function U(N,tt,gt){this.props=N,this.context=tt,this.refs=M,this.updater=gt||b}var L=U.prototype=new D;L.constructor=U,A(L,v.prototype),L.isPureReactComponent=!0;var I=Array.isArray;function z(){}var O={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function T(N,tt,gt){var Rt=gt.ref;return{$$typeof:r,type:N,key:tt,ref:Rt!==void 0?Rt:null,props:gt}}function C(N,tt){return T(N.type,tt,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function K(N){var tt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(gt){return tt[gt]})}var j=/\/+/g;function lt(N,tt){return typeof N=="object"&&N!==null&&N.key!=null?K(""+N.key):tt.toString(36)}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(z,z):(N.status="pending",N.then(function(tt){N.status==="pending"&&(N.status="fulfilled",N.value=tt)},function(tt){N.status==="pending"&&(N.status="rejected",N.reason=tt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,tt,gt,Rt,Gt){var nt=typeof N;(nt==="undefined"||nt==="boolean")&&(N=null);var ht=!1;if(N===null)ht=!0;else switch(nt){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(N.$$typeof){case r:case t:ht=!0;break;case _:return ht=N._init,B(ht(N._payload),tt,gt,Rt,Gt)}}if(ht)return Gt=Gt(N),ht=Rt===""?"."+lt(N,0):Rt,I(Gt)?(gt="",ht!=null&&(gt=ht.replace(j,"$&/")+"/"),B(Gt,tt,gt,"",function(Ft){return Ft})):Gt!=null&&(H(Gt)&&(Gt=C(Gt,gt+(Gt.key==null||N&&N.key===Gt.key?"":(""+Gt.key).replace(j,"$&/")+"/")+ht)),tt.push(Gt)),1;ht=0;var Ct=Rt===""?".":Rt+":";if(I(N))for(var It=0;It<N.length;It++)Rt=N[It],nt=Ct+lt(Rt,It),ht+=B(Rt,tt,gt,nt,Gt);else if(It=S(N),typeof It=="function")for(N=It.call(N),It=0;!(Rt=N.next()).done;)Rt=Rt.value,nt=Ct+lt(Rt,It++),ht+=B(Rt,tt,gt,nt,Gt);else if(nt==="object"){if(typeof N.then=="function")return B(ut(N),tt,gt,Rt,Gt);throw tt=String(N),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return ht}function V(N,tt,gt){if(N==null)return N;var Rt=[],Gt=0;return B(N,Rt,"","",function(nt){return tt.call(gt,nt,Gt++)}),Rt}function at(N){if(N._status===-1){var tt=N._result;tt=tt(),tt.then(function(gt){(N._status===0||N._status===-1)&&(N._status=1,N._result=gt)},function(gt){(N._status===0||N._status===-1)&&(N._status=2,N._result=gt)}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var Mt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},St={map:V,forEach:function(N,tt,gt){V(N,function(){tt.apply(this,arguments)},gt)},count:function(N){var tt=0;return V(N,function(){tt++}),tt},toArray:function(N){return V(N,function(tt){return tt})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ce.Activity=g,ce.Children=St,ce.Component=v,ce.Fragment=n,ce.Profiler=l,ce.PureComponent=U,ce.StrictMode=a,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ce.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},ce.cache=function(N){return function(){return N.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(N,tt,gt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Rt=A({},N.props),Gt=N.key;if(tt!=null)for(nt in tt.key!==void 0&&(Gt=""+tt.key),tt)!Y.call(tt,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&tt.ref===void 0||(Rt[nt]=tt[nt]);var nt=arguments.length-2;if(nt===1)Rt.children=gt;else if(1<nt){for(var ht=Array(nt),Ct=0;Ct<nt;Ct++)ht[Ct]=arguments[Ct+2];Rt.children=ht}return T(N.type,Gt,Rt)},ce.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ce.createElement=function(N,tt,gt){var Rt,Gt={},nt=null;if(tt!=null)for(Rt in tt.key!==void 0&&(nt=""+tt.key),tt)Y.call(tt,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Gt[Rt]=tt[Rt]);var ht=arguments.length-2;if(ht===1)Gt.children=gt;else if(1<ht){for(var Ct=Array(ht),It=0;It<ht;It++)Ct[It]=arguments[It+2];Gt.children=Ct}if(N&&N.defaultProps)for(Rt in ht=N.defaultProps,ht)Gt[Rt]===void 0&&(Gt[Rt]=ht[Rt]);return T(N,nt,Gt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(N){return{$$typeof:d,render:N}},ce.isValidElement=H,ce.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:at}},ce.memo=function(N,tt){return{$$typeof:p,type:N,compare:tt===void 0?null:tt}},ce.startTransition=function(N){var tt=O.T,gt={};O.T=gt;try{var Rt=N(),Gt=O.S;Gt!==null&&Gt(gt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(z,Mt)}catch(nt){Mt(nt)}finally{tt!==null&&gt.types!==null&&(tt.types=gt.types),O.T=tt}},ce.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ce.use=function(N){return O.H.use(N)},ce.useActionState=function(N,tt,gt){return O.H.useActionState(N,tt,gt)},ce.useCallback=function(N,tt){return O.H.useCallback(N,tt)},ce.useContext=function(N){return O.H.useContext(N)},ce.useDebugValue=function(){},ce.useDeferredValue=function(N,tt){return O.H.useDeferredValue(N,tt)},ce.useEffect=function(N,tt){return O.H.useEffect(N,tt)},ce.useEffectEvent=function(N){return O.H.useEffectEvent(N)},ce.useId=function(){return O.H.useId()},ce.useImperativeHandle=function(N,tt,gt){return O.H.useImperativeHandle(N,tt,gt)},ce.useInsertionEffect=function(N,tt){return O.H.useInsertionEffect(N,tt)},ce.useLayoutEffect=function(N,tt){return O.H.useLayoutEffect(N,tt)},ce.useMemo=function(N,tt){return O.H.useMemo(N,tt)},ce.useOptimistic=function(N,tt){return O.H.useOptimistic(N,tt)},ce.useReducer=function(N,tt,gt){return O.H.useReducer(N,tt,gt)},ce.useRef=function(N){return O.H.useRef(N)},ce.useState=function(N){return O.H.useState(N)},ce.useSyncExternalStore=function(N,tt,gt){return O.H.useSyncExternalStore(N,tt,gt)},ce.useTransition=function(){return O.H.useTransition()},ce.version="19.2.3",ce}var x_;function xp(){return x_||(x_=1,Fh.exports=AS()),Fh.exports}var ai=xp();const RS=Pv(ai);var Hh={exports:{}},nl={},Gh={exports:{}},Vh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function wS(){return y_||(y_=1,(function(r){function t(B,V){var at=B.length;B.push(V);t:for(;0<at;){var Mt=at-1>>>1,St=B[Mt];if(0<l(St,V))B[Mt]=V,B[at]=St,at=Mt;else break t}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var V=B[0],at=B.pop();if(at!==V){B[0]=at;t:for(var Mt=0,St=B.length,N=St>>>1;Mt<N;){var tt=2*(Mt+1)-1,gt=B[tt],Rt=tt+1,Gt=B[Rt];if(0>l(gt,at))Rt<St&&0>l(Gt,gt)?(B[Mt]=Gt,B[Rt]=at,Mt=Rt):(B[Mt]=gt,B[tt]=at,Mt=tt);else if(Rt<St&&0>l(Gt,at))B[Mt]=Gt,B[Rt]=at,Mt=Rt;else break t}}return V}function l(B,V){var at=B.sortIndex-V.sortIndex;return at!==0?at:B.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,g=null,x=3,S=!1,b=!1,A=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function L(B){for(var V=n(p);V!==null;){if(V.callback===null)a(p);else if(V.startTime<=B)a(p),V.sortIndex=V.expirationTime,t(m,V);else break;V=n(p)}}function I(B){if(A=!1,L(B),!b)if(n(m)!==null)b=!0,z||(z=!0,K());else{var V=n(p);V!==null&&ut(I,V.startTime-B)}}var z=!1,O=-1,Y=5,T=-1;function C(){return M?!0:!(r.unstable_now()-T<Y)}function H(){if(M=!1,z){var B=r.unstable_now();T=B;var V=!0;try{t:{b=!1,A&&(A=!1,D(O),O=-1),S=!0;var at=x;try{e:{for(L(B),g=n(m);g!==null&&!(g.expirationTime>B&&C());){var Mt=g.callback;if(typeof Mt=="function"){g.callback=null,x=g.priorityLevel;var St=Mt(g.expirationTime<=B);if(B=r.unstable_now(),typeof St=="function"){g.callback=St,L(B),V=!0;break e}g===n(m)&&a(m),L(B)}else a(m);g=n(m)}if(g!==null)V=!0;else{var N=n(p);N!==null&&ut(I,N.startTime-B),V=!1}}break t}finally{g=null,x=at,S=!1}V=void 0}}finally{V?K():z=!1}}}var K;if(typeof U=="function")K=function(){U(H)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,lt=j.port2;j.port1.onmessage=H,K=function(){lt.postMessage(null)}}else K=function(){v(H,0)};function ut(B,V){O=v(function(){B(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(B){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var at=x;x=V;try{return B()}finally{x=at}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var at=x;x=B;try{return V()}finally{x=at}},r.unstable_scheduleCallback=function(B,V,at){var Mt=r.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?Mt+at:Mt):at=Mt,B){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=at+St,B={id:_++,callback:V,priorityLevel:B,startTime:at,expirationTime:St,sortIndex:-1},at>Mt?(B.sortIndex=at,t(p,B),n(m)===null&&B===n(p)&&(A?(D(O),O=-1):A=!0,ut(I,at-Mt))):(B.sortIndex=St,t(m,B),b||S||(b=!0,z||(z=!0,K()))),B},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(B){var V=x;return function(){var at=x;x=V;try{return B.apply(this,arguments)}finally{x=at}}}})(Vh)),Vh}var S_;function CS(){return S_||(S_=1,Gh.exports=wS()),Gh.exports}var kh={exports:{}},kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function DS(){if(M_)return kn;M_=1;var r=xp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,kn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},kn.flushSync=function(m){var p=f.T,_=a.p;try{if(f.T=null,a.p=2,m)return m()}finally{f.T=p,a.p=_,a.d.f()}},kn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},kn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},kn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:S}):_==="script"&&a.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},kn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},kn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);a.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},kn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},kn.requestFormReset=function(m){a.d.r(m)},kn.unstable_batchedUpdates=function(m,p){return m(p)},kn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},kn.useFormStatus=function(){return f.H.useHostTransitionStatus()},kn.version="19.2.3",kn}var b_;function LS(){if(b_)return kh.exports;b_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),kh.exports=DS(),kh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function US(){if(E_)return nl;E_=1;var r=CS(),t=xp(),n=LS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var u=s.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===s)return m(u),e;if(h===o)return m(u),i;h=h.sibling}throw Error(a(188))}if(s.return!==o.return)s=u,o=h;else{for(var y=!1,R=u.child;R;){if(R===s){y=!0,s=u,o=h;break}if(R===o){y=!0,o=u,s=h;break}R=R.sibling}if(!y){for(R=h.child;R;){if(R===s){y=!0,s=h,o=u;break}if(R===o){y=!0,o=h,s=u;break}R=R.sibling}if(!y)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),U=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var j=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case z:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case L:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:lt(e.type)||"Memo";case Y:i=e._payload,e=e._init;try{return lt(e(i))}catch{}}return null}var ut=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},Mt=[],St=-1;function N(e){return{current:e}}function tt(e){0>St||(e.current=Mt[St],Mt[St]=null,St--)}function gt(e,i){St++,Mt[St]=e.current,e.current=i}var Rt=N(null),Gt=N(null),nt=N(null),ht=N(null);function Ct(e,i){switch(gt(nt,i),gt(Gt,e),gt(Rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Fg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Fg(i),e=Hg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Rt),gt(Rt,e)}function It(){tt(Rt),tt(Gt),tt(nt)}function Ft(e){e.memoizedState!==null&&gt(ht,e);var i=Rt.current,s=Hg(i,e.type);i!==s&&(gt(Gt,e),gt(Rt,s))}function le(e){Gt.current===e&&(tt(Rt),tt(Gt)),ht.current===e&&(tt(ht),Qo._currentValue=at)}var $e,he;function ge(e){if($e===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);$e=i&&i[1]||"",he=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+he}var Le=!1;function ue(e,i){if(!e||Le)return"";Le=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var rt=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){rt=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){rt=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&rt&&typeof ct.stack=="string")return[ct.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],R=h[1];if(y&&R){var G=y.split(`
`),it=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===it.length)for(o=G.length-1,u=it.length-1;1<=o&&0<=u&&G[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==it[u]){var dt=`
`+G[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{Le=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?ge(s):""}function an(e,i){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return e.child!==i&&i!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return ue(e.type,!1);case 11:return ue(e.type.render,!1);case 1:return ue(e.type,!0);case 31:return ge("Activity");default:return""}}function W(e){try{var i="",s=null;do i+=an(e,s),s=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var tn=Object.prototype.hasOwnProperty,Te=r.unstable_scheduleCallback,Ie=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,P=r.unstable_requestPaint,E=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,yt=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,Dt=r.unstable_IdlePriority,Xt=r.log,ie=r.unstable_setDisableYieldValue,Et=null,Tt=null;function Ht(e){if(typeof Xt=="function"&&ie(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(Et,e)}catch{}}var Bt=Math.clz32?Math.clz32:q,Lt=Math.log,de=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Lt(e)/de|0)|0}var Nt=256,At=262144,zt=4194304;function bt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=bt(o):(y&=R,y!==0?u=bt(y):s||(s=R&~e,s!==0&&(u=bt(s))))):(R=o&~h,R!==0?u=bt(R):y!==0?u=bt(y):s||(s=o&~e,s!==0&&(u=bt(s)))),u===0?0:i!==0&&i!==u&&(i&h)===0&&(h=u&-u,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:u}function wt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ae(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Ae(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Vn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oi(e,i,s,o,u,h){var y=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var R=e.entanglements,G=e.expirationTimes,it=e.hiddenUpdates;for(s=y&~s;0<s;){var dt=31-Bt(s),vt=1<<dt;R[dt]=0,G[dt]=-1;var rt=it[dt];if(rt!==null)for(it[dt]=null,dt=0;dt<rt.length;dt++){var ct=rt[dt];ct!==null&&(ct.lane&=-536870913)}s&=~vt}o!==0&&Al(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(y&~i))}function Al(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Bt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function lo(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-Bt(s),u=1<<o;u&i|e[o]&i&&(e[o]|=i),s&=~u}}function Qs(e,i){var s=i&-i;return s=(s&42)!==0?1:co(s),(s&(e.suspendedLanes|i))!==0?0:s}function co(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Js(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function uo(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:c_(e.type))}function Yi(e,i){var s=V.p;try{return V.p=e,i()}finally{V.p=s}}var vi=Math.random().toString(36).slice(2),pn="__reactFiber$"+vi,Cn="__reactProps$"+vi,Ii="__reactContainer$"+vi,$s="__reactEvents$"+vi,tr="__reactListeners$"+vi,Rl="__reactHandles$"+vi,fo="__reactResources$"+vi,ms="__reactMarker$"+vi;function ho(e){delete e[pn],delete e[Cn],delete e[$s],delete e[tr],delete e[Rl]}function Pa(e){var i=e[pn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Ii]||s[pn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=qg(e);e!==null;){if(s=e[pn])return s;e=qg(e)}return i}e=s,s=e.parentNode}return null}function Oa(e){if(e=e[pn]||e[Ii]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function gs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ia(e){var i=e[fo];return i||(i=e[fo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function w(e){e[ms]=!0}var Q=new Set,ot={};function st(e,i){$(e,i),$(e+"Capture",i)}function $(e,i){for(ot[e]=i,e=0;e<i.length;e++)Q.add(i[e])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vt={},Pt={};function kt(e){return tn.call(Pt,e)?!0:tn.call(Vt,e)?!1:Ut.test(e)?Pt[e]=!0:(Vt[e]=!0,!1)}function Kt(e,i,s){if(kt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function $t(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function qt(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ue(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function en(e,i,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(y){s=""+y,h.call(this,y)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function je(e){if(!e._valueTracker){var i=Ue(e)?"checked":"value";e._valueTracker=en(e,i,""+e[i])}}function Be(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Ue(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ne=/[\n"\\]/g;function re(e){return e.replace(Ne,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Dn(e,i,s,o,u,h,y,R){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),i!=null?y==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+te(i)):e.value!==""+te(i)&&(e.value=""+te(i)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),i!=null?Ln(e,y,te(i)):s!=null?Ln(e,y,te(s)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+te(R):e.removeAttribute("name")}function ra(e,i,s,o,u,h,y,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){je(e);return}s=s!=null?""+te(s):"",i=i!=null?""+te(i):s,R||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),je(e)}function Ln(e,i,s){i==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function xi(e,i,s,o){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&o&&(e[s].defaultSelected=!0)}else{for(s=""+te(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Fe(e,i,s){if(i!=null&&(i=""+te(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+te(s):""}function Un(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(ut(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=te(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),je(e)}function Sn(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Nn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pn(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||Nn.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function er(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&Pn(e,u,o)}else for(var h in i)i.hasOwnProperty(h)&&Pn(e,h,i[h])}function Bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(e){return Sx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var Pu=null;function Ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nr=null,ir=null;function zp(e){var i=Oa(e);if(i&&(e=i.stateNode)){var s=e[Cn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Dn(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+re(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var u=o[Cn]||null;if(!u)throw Error(a(90));Dn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&Be(o)}break t;case"textarea":Fe(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&xi(e,!!s.multiple,i,!1)}}}var Iu=!1;function Fp(e,i,s){if(Iu)return e(i,s);Iu=!0;try{var o=e(i);return o}finally{if(Iu=!1,(nr!==null||ir!==null)&&(mc(),nr&&(i=nr,e=ir,ir=nr=null,zp(i),e)))for(i=0;i<e.length;i++)zp(e[i])}}function po(e,i){var s=e.stateNode;if(s===null)return null;var o=s[Cn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(la)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Bu=!1}var Ba=null,zu=null,Cl=null;function Hp(){if(Cl)return Cl;var e,i=zu,s=i.length,o,u="value"in Ba?Ba.value:Ba.textContent,h=u.length;for(e=0;e<s&&i[e]===u[e];e++);var y=s-e;for(o=1;o<=y&&i[s-o]===u[h-o];o++);return Cl=u.slice(e,1<o?1-o:void 0)}function Dl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ll(){return!0}function Gp(){return!1}function Qn(e){function i(s,o,u,h,y){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(s=e[R],this[R]=s?s(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ll:Gp,this.isPropagationStopped=Gp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),i}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Qn(_s),go=g({},_s,{view:0,detail:0}),Mx=Qn(go),Fu,Hu,_o,Nl=g({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_o&&(_o&&e.type==="mousemove"?(Fu=e.screenX-_o.screenX,Hu=e.screenY-_o.screenY):Hu=Fu=0,_o=e),Fu)},movementY:function(e){return"movementY"in e?e.movementY:Hu}}),Vp=Qn(Nl),bx=g({},Nl,{dataTransfer:0}),Ex=Qn(bx),Tx=g({},go,{relatedTarget:0}),Gu=Qn(Tx),Ax=g({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),Rx=Qn(Ax),wx=g({},_s,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cx=Qn(wx),Dx=g({},_s,{data:0}),kp=Qn(Dx),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Px(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Nx[e])?!!i[e]:!1}function Vu(){return Px}var Ox=g({},go,{key:function(e){if(e.key){var i=Lx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ux[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?Dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ix=Qn(Ox),Bx=g({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=Qn(Bx),zx=g({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),Fx=Qn(zx),Hx=g({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=Qn(Hx),Vx=g({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kx=Qn(Vx),Wx=g({},_s,{newState:0,oldState:0}),Xx=Qn(Wx),Kx=[9,13,27,32],ku=la&&"CompositionEvent"in window,vo=null;la&&"documentMode"in document&&(vo=document.documentMode);var qx=la&&"TextEvent"in window&&!vo,Xp=la&&(!ku||vo&&8<vo&&11>=vo),Kp=" ",qp=!1;function Yp(e,i){switch(e){case"keyup":return Kx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ar=!1;function Yx(e,i){switch(e){case"compositionend":return jp(i);case"keypress":return i.which!==32?null:(qp=!0,Kp);case"textInput":return e=i.data,e===Kp&&qp?null:e;default:return null}}function jx(e,i){if(ar)return e==="compositionend"||!ku&&Yp(e,i)?(e=Hp(),Cl=zu=Ba=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xp&&i.locale!=="ko"?null:i.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Zx[e.type]:i==="textarea"}function Qp(e,i,s,o){nr?ir?ir.push(o):ir=[o]:nr=o,i=Mc(i,"onChange"),0<i.length&&(s=new Ul("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var xo=null,yo=null;function Qx(e){Ng(e,0)}function Pl(e){var i=gs(e);if(Be(i))return e}function Jp(e,i){if(e==="change")return i}var $p=!1;if(la){var Wu;if(la){var Xu="oninput"in document;if(!Xu){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),Xu=typeof tm.oninput=="function"}Wu=Xu}else Wu=!1;$p=Wu&&(!document.documentMode||9<document.documentMode)}function em(){xo&&(xo.detachEvent("onpropertychange",nm),yo=xo=null)}function nm(e){if(e.propertyName==="value"&&Pl(yo)){var i=[];Qp(i,yo,e,Ou(e)),Fp(Qx,i)}}function Jx(e,i,s){e==="focusin"?(em(),xo=i,yo=s,xo.attachEvent("onpropertychange",nm)):e==="focusout"&&em()}function $x(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(yo)}function ty(e,i){if(e==="click")return Pl(i)}function ey(e,i){if(e==="input"||e==="change")return Pl(i)}function ny(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var oi=typeof Object.is=="function"?Object.is:ny;function So(e,i){if(oi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!tn.call(i,u)||!oi(e[u],i[u]))return!1}return!0}function im(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function am(e,i){var s=im(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=im(s)}}function sm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?sm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function rm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Qt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Qt(e.document)}return i}function Ku(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var iy=la&&"documentMode"in document&&11>=document.documentMode,sr=null,qu=null,Mo=null,Yu=!1;function om(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Yu||sr==null||sr!==Qt(o)||(o=sr,"selectionStart"in o&&Ku(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Mo&&So(Mo,o)||(Mo=o,o=Mc(qu,"onSelect"),0<o.length&&(i=new Ul("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=sr)))}function vs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var rr={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},ju={},lm={};la&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function xs(e){if(ju[e])return ju[e];if(!rr[e])return e;var i=rr[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in lm)return ju[e]=i[s];return e}var cm=xs("animationend"),um=xs("animationiteration"),fm=xs("animationstart"),ay=xs("transitionrun"),sy=xs("transitionstart"),ry=xs("transitioncancel"),hm=xs("transitionend"),dm=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function zi(e,i){dm.set(e,i),st(i,[e])}var Ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yi=[],or=0,Qu=0;function Il(){for(var e=or,i=Qu=or=0;i<e;){var s=yi[i];yi[i++]=null;var o=yi[i];yi[i++]=null;var u=yi[i];yi[i++]=null;var h=yi[i];if(yi[i++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&pm(s,u,h)}}function Bl(e,i,s,o){yi[or++]=e,yi[or++]=i,yi[or++]=s,yi[or++]=o,Qu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ju(e,i,s,o){return Bl(e,i,s,o),zl(e)}function ys(e,i){return Bl(e,null,null,i),zl(e)}function pm(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var u=!1,h=e.return;h!==null;)h.childLanes|=s,o=h.alternate,o!==null&&(o.childLanes|=s),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&i!==null&&(u=31-Bt(s),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=s|536870912),h):null}function zl(e){if(50<Wo)throw Wo=0,lh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var lr={};function oy(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,i,s,o){return new oy(e,i,s,o)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,i){var s=e.alternate;return s===null?(s=li(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function mm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Fl(e,i,s,o,u,h){var y=0;if(o=e,typeof e=="function")$u(e)&&(y=1);else if(typeof e=="string")y=hS(e,s,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=li(31,s,i,u),e.elementType=T,e.lanes=h,e;case A:return Ss(s.children,u,h,i);case M:y=8,u|=24;break;case v:return e=li(12,s,i,u|2),e.elementType=v,e.lanes=h,e;case I:return e=li(13,s,i,u),e.elementType=I,e.lanes=h,e;case z:return e=li(19,s,i,u),e.elementType=z,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case D:y=9;break t;case L:y=11;break t;case O:y=14;break t;case Y:y=16,o=null;break t}y=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=li(y,s,i,u),i.elementType=e,i.type=o,i.lanes=h,i}function Ss(e,i,s,o){return e=li(7,e,o,i),e.lanes=s,e}function tf(e,i,s){return e=li(6,e,null,i),e.lanes=s,e}function gm(e){var i=li(18,null,null,0);return i.stateNode=e,i}function ef(e,i,s){return i=li(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var _m=new WeakMap;function Si(e,i){if(typeof e=="object"&&e!==null){var s=_m.get(e);return s!==void 0?s:(i={value:e,source:i,stack:W(i)},_m.set(e,i),i)}return{value:e,source:i,stack:W(i)}}var cr=[],ur=0,Hl=null,bo=0,Mi=[],bi=0,za=null,ji=1,Zi="";function ua(e,i){cr[ur++]=bo,cr[ur++]=Hl,Hl=e,bo=i}function vm(e,i,s){Mi[bi++]=ji,Mi[bi++]=Zi,Mi[bi++]=za,za=e;var o=ji;e=Zi;var u=32-Bt(o)-1;o&=~(1<<u),s+=1;var h=32-Bt(i)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,ji=1<<32-Bt(i)+u|s<<u|o,Zi=h+e}else ji=1<<h|s<<u|o,Zi=e}function nf(e){e.return!==null&&(ua(e,1),vm(e,1,0))}function af(e){for(;e===Hl;)Hl=cr[--ur],cr[ur]=null,bo=cr[--ur],cr[ur]=null;for(;e===za;)za=Mi[--bi],Mi[bi]=null,Zi=Mi[--bi],Mi[bi]=null,ji=Mi[--bi],Mi[bi]=null}function xm(e,i){Mi[bi++]=ji,Mi[bi++]=Zi,Mi[bi++]=za,ji=i.id,Zi=i.overflow,za=e}var On=null,Qe=null,Ee=!1,Fa=null,Ei=!1,sf=Error(a(519));function Ha(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(Si(i,e)),sf}function ym(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[pn]=e,i[Cn]=o,s){case"dialog":ye("cancel",i),ye("close",i);break;case"iframe":case"object":case"embed":ye("load",i);break;case"video":case"audio":for(s=0;s<Ko.length;s++)ye(Ko[s],i);break;case"source":ye("error",i);break;case"img":case"image":case"link":ye("error",i),ye("load",i);break;case"details":ye("toggle",i);break;case"input":ye("invalid",i),ra(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",i);break;case"textarea":ye("invalid",i),Un(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||Bg(i.textContent,s)?(o.popover!=null&&(ye("beforetoggle",i),ye("toggle",i)),o.onScroll!=null&&ye("scroll",i),o.onScrollEnd!=null&&ye("scrollend",i),o.onClick!=null&&(i.onclick=oa),i=!0):i=!1,i||Ha(e,!0)}function Sm(e){for(On=e.return;On;)switch(On.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:On=On.return}}function fr(e){if(e!==On)return!1;if(!Ee)return Sm(e),Ee=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||bh(e.type,e.memoizedProps)),s=!s),s&&Qe&&Ha(e),Sm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Qe=Kg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Qe=Kg(e)}else i===27?(i=Qe,ts(e.type)?(e=wh,wh=null,Qe=e):Qe=i):Qe=On?Ai(e.stateNode.nextSibling):null;return!0}function Ms(){Qe=On=null,Ee=!1}function rf(){var e=Fa;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),Fa=null),e}function Eo(e){Fa===null?Fa=[e]:Fa.push(e)}var of=N(null),bs=null,fa=null;function Ga(e,i,s){gt(of,i._currentValue),i._currentValue=s}function ha(e){e._currentValue=of.current,tt(of)}function lf(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function cf(e,i,s,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var G=0;G<i.length;G++)if(R.context===i[G]){h.lanes|=s,R=h.alternate,R!==null&&(R.lanes|=s),lf(h.return,s,e),o||(y=null);break t}h=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(a(341));y.lanes|=s,h=y.alternate,h!==null&&(h.lanes|=s),lf(y,s,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function hr(e,i,s,o){e=null;for(var u=i,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(a(387));if(y=y.memoizedProps,y!==null){var R=u.type;oi(u.pendingProps.value,y.value)||(e!==null?e.push(R):e=[R])}}else if(u===ht.current){if(y=u.alternate,y===null)throw Error(a(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Qo):e=[Qo])}u=u.return}e!==null&&cf(i,e,s,o),i.flags|=262144}function Gl(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){bs=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function In(e){return Mm(bs,e)}function Vl(e,i){return bs===null&&Es(e),Mm(e,i)}function Mm(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},fa===null){if(e===null)throw Error(a(308));fa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else fa=fa.next=i;return s}var ly=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},cy=r.unstable_scheduleCallback,uy=r.unstable_NormalPriority,mn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new ly,data:new Map,refCount:0}}function To(e){e.refCount--,e.refCount===0&&cy(uy,function(){e.controller.abort()})}var Ao=null,ff=0,dr=0,pr=null;function fy(e,i){if(Ao===null){var s=Ao=[];ff=0,dr=ph(),pr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return ff++,i.then(bm,bm),i}function bm(){if(--ff===0&&Ao!==null){pr!==null&&(pr.status="fulfilled");var e=Ao;Ao=null,dr=0,pr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function hy(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var Em=B.S;B.S=function(e,i){og=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&fy(e,i),Em!==null&&Em(e,i)};var Ts=N(null);function hf(){var e=Ts.current;return e!==null?e:qe.pooledCache}function kl(e,i){i===null?gt(Ts,Ts.current):gt(Ts,i.pool)}function Tm(){var e=hf();return e===null?null:{parent:mn._currentValue,pool:e}}var mr=Error(a(460)),df=Error(a(474)),Wl=Error(a(542)),Xl={then:function(){}};function Am(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(oa,oa),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Cm(e),e;default:if(typeof i.status=="string")i.then(oa,oa);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Cm(e),e}throw Rs=i,mr}}function As(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Rs=s,mr):s}}var Rs=null;function wm(){if(Rs===null)throw Error(a(459));var e=Rs;return Rs=null,e}function Cm(e){if(e===mr||e===Wl)throw Error(a(483))}var gr=null,Ro=0;function Kl(e){var i=Ro;return Ro+=1,gr===null&&(gr=[]),Rm(gr,e,i)}function wo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ql(e,i){throw i.$$typeof===x?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Dm(e){function i(J,X){if(e){var et=J.deletions;et===null?(J.deletions=[X],J.flags|=16):et.push(X)}}function s(J,X){if(!e)return null;for(;X!==null;)i(J,X),X=X.sibling;return null}function o(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function u(J,X){return J=ca(J,X),J.index=0,J.sibling=null,J}function h(J,X,et){return J.index=et,e?(et=J.alternate,et!==null?(et=et.index,et<X?(J.flags|=67108866,X):et):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function y(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function R(J,X,et,mt){return X===null||X.tag!==6?(X=tf(et,J.mode,mt),X.return=J,X):(X=u(X,et),X.return=J,X)}function G(J,X,et,mt){var Jt=et.type;return Jt===A?dt(J,X,et.props.children,mt,et.key):X!==null&&(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Y&&As(Jt)===X.type)?(X=u(X,et.props),wo(X,et),X.return=J,X):(X=Fl(et.type,et.key,et.props,null,J.mode,mt),wo(X,et),X.return=J,X)}function it(J,X,et,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=ef(et,J.mode,mt),X.return=J,X):(X=u(X,et.children||[]),X.return=J,X)}function dt(J,X,et,mt,Jt){return X===null||X.tag!==7?(X=Ss(et,J.mode,mt,Jt),X.return=J,X):(X=u(X,et),X.return=J,X)}function vt(J,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=tf(""+X,J.mode,et),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return et=Fl(X.type,X.key,X.props,null,J.mode,et),wo(et,X),et.return=J,et;case b:return X=ef(X,J.mode,et),X.return=J,X;case Y:return X=As(X),vt(J,X,et)}if(ut(X)||K(X))return X=Ss(X,J.mode,et,null),X.return=J,X;if(typeof X.then=="function")return vt(J,Kl(X),et);if(X.$$typeof===U)return vt(J,Vl(J,X),et);ql(J,X)}return null}function rt(J,X,et,mt){var Jt=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Jt!==null?null:R(J,X,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case S:return et.key===Jt?G(J,X,et,mt):null;case b:return et.key===Jt?it(J,X,et,mt):null;case Y:return et=As(et),rt(J,X,et,mt)}if(ut(et)||K(et))return Jt!==null?null:dt(J,X,et,mt,null);if(typeof et.then=="function")return rt(J,X,Kl(et),mt);if(et.$$typeof===U)return rt(J,X,Vl(J,et),mt);ql(J,et)}return null}function ct(J,X,et,mt,Jt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return J=J.get(et)||null,R(X,J,""+mt,Jt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:return J=J.get(mt.key===null?et:mt.key)||null,G(X,J,mt,Jt);case b:return J=J.get(mt.key===null?et:mt.key)||null,it(X,J,mt,Jt);case Y:return mt=As(mt),ct(J,X,et,mt,Jt)}if(ut(mt)||K(mt))return J=J.get(et)||null,dt(X,J,mt,Jt,null);if(typeof mt.then=="function")return ct(J,X,et,Kl(mt),Jt);if(mt.$$typeof===U)return ct(J,X,et,Vl(X,mt),Jt);ql(X,mt)}return null}function Wt(J,X,et,mt){for(var Jt=null,Ce=null,jt=X,pe=X=0,be=null;jt!==null&&pe<et.length;pe++){jt.index>pe?(be=jt,jt=null):be=jt.sibling;var De=rt(J,jt,et[pe],mt);if(De===null){jt===null&&(jt=be);break}e&&jt&&De.alternate===null&&i(J,jt),X=h(De,X,pe),Ce===null?Jt=De:Ce.sibling=De,Ce=De,jt=be}if(pe===et.length)return s(J,jt),Ee&&ua(J,pe),Jt;if(jt===null){for(;pe<et.length;pe++)jt=vt(J,et[pe],mt),jt!==null&&(X=h(jt,X,pe),Ce===null?Jt=jt:Ce.sibling=jt,Ce=jt);return Ee&&ua(J,pe),Jt}for(jt=o(jt);pe<et.length;pe++)be=ct(jt,J,pe,et[pe],mt),be!==null&&(e&&be.alternate!==null&&jt.delete(be.key===null?pe:be.key),X=h(be,X,pe),Ce===null?Jt=be:Ce.sibling=be,Ce=be);return e&&jt.forEach(function(ss){return i(J,ss)}),Ee&&ua(J,pe),Jt}function ee(J,X,et,mt){if(et==null)throw Error(a(151));for(var Jt=null,Ce=null,jt=X,pe=X=0,be=null,De=et.next();jt!==null&&!De.done;pe++,De=et.next()){jt.index>pe?(be=jt,jt=null):be=jt.sibling;var ss=rt(J,jt,De.value,mt);if(ss===null){jt===null&&(jt=be);break}e&&jt&&ss.alternate===null&&i(J,jt),X=h(ss,X,pe),Ce===null?Jt=ss:Ce.sibling=ss,Ce=ss,jt=be}if(De.done)return s(J,jt),Ee&&ua(J,pe),Jt;if(jt===null){for(;!De.done;pe++,De=et.next())De=vt(J,De.value,mt),De!==null&&(X=h(De,X,pe),Ce===null?Jt=De:Ce.sibling=De,Ce=De);return Ee&&ua(J,pe),Jt}for(jt=o(jt);!De.done;pe++,De=et.next())De=ct(jt,J,pe,De.value,mt),De!==null&&(e&&De.alternate!==null&&jt.delete(De.key===null?pe:De.key),X=h(De,X,pe),Ce===null?Jt=De:Ce.sibling=De,Ce=De);return e&&jt.forEach(function(bS){return i(J,bS)}),Ee&&ua(J,pe),Jt}function Ke(J,X,et,mt){if(typeof et=="object"&&et!==null&&et.type===A&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case S:t:{for(var Jt=et.key;X!==null;){if(X.key===Jt){if(Jt=et.type,Jt===A){if(X.tag===7){s(J,X.sibling),mt=u(X,et.props.children),mt.return=J,J=mt;break t}}else if(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Y&&As(Jt)===X.type){s(J,X.sibling),mt=u(X,et.props),wo(mt,et),mt.return=J,J=mt;break t}s(J,X);break}else i(J,X);X=X.sibling}et.type===A?(mt=Ss(et.props.children,J.mode,mt,et.key),mt.return=J,J=mt):(mt=Fl(et.type,et.key,et.props,null,J.mode,mt),wo(mt,et),mt.return=J,J=mt)}return y(J);case b:t:{for(Jt=et.key;X!==null;){if(X.key===Jt)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){s(J,X.sibling),mt=u(X,et.children||[]),mt.return=J,J=mt;break t}else{s(J,X);break}else i(J,X);X=X.sibling}mt=ef(et,J.mode,mt),mt.return=J,J=mt}return y(J);case Y:return et=As(et),Ke(J,X,et,mt)}if(ut(et))return Wt(J,X,et,mt);if(K(et)){if(Jt=K(et),typeof Jt!="function")throw Error(a(150));return et=Jt.call(et),ee(J,X,et,mt)}if(typeof et.then=="function")return Ke(J,X,Kl(et),mt);if(et.$$typeof===U)return Ke(J,X,Vl(J,et),mt);ql(J,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(s(J,X.sibling),mt=u(X,et),mt.return=J,J=mt):(s(J,X),mt=tf(et,J.mode,mt),mt.return=J,J=mt),y(J)):s(J,X)}return function(J,X,et,mt){try{Ro=0;var Jt=Ke(J,X,et,mt);return gr=null,Jt}catch(jt){if(jt===mr||jt===Wl)throw jt;var Ce=li(29,jt,null,J.mode);return Ce.lanes=mt,Ce.return=J,Ce}finally{}}}var ws=Dm(!0),Lm=Dm(!1),Va=!1;function pf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=zl(e),pm(e,null,s),i}return Bl(e,o,i,s),zl(e)}function Co(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,lo(e,s)}}function gf(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var y={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,s=s.next}while(s!==null);h===null?u=h=i:h=h.next=i}else u=h=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var _f=!1;function Do(){if(_f){var e=pr;if(e!==null)throw e}}function Lo(e,i,s,o){_f=!1;var u=e.updateQueue;Va=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,it=G.next;G.next=null,y===null?h=it:y.next=it,y=G;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,R=dt.lastBaseUpdate,R!==y&&(R===null?dt.firstBaseUpdate=it:R.next=it,dt.lastBaseUpdate=G))}if(h!==null){var vt=u.baseState;y=0,dt=it=G=null,R=h;do{var rt=R.lane&-536870913,ct=rt!==R.lane;if(ct?(Me&rt)===rt:(o&rt)===rt){rt!==0&&rt===dr&&(_f=!0),dt!==null&&(dt=dt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=e,ee=R;rt=i;var Ke=s;switch(ee.tag){case 1:if(Wt=ee.payload,typeof Wt=="function"){vt=Wt.call(Ke,vt,rt);break t}vt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ee.payload,rt=typeof Wt=="function"?Wt.call(Ke,vt,rt):Wt,rt==null)break t;vt=g({},vt,rt);break t;case 2:Va=!0}}rt=R.callback,rt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[rt]:ct.push(rt))}else ct={lane:rt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},dt===null?(it=dt=ct,G=vt):dt=dt.next=ct,y|=rt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);dt===null&&(G=vt),u.baseState=G,u.firstBaseUpdate=it,u.lastBaseUpdate=dt,h===null&&(u.shared.lanes=0),ja|=y,e.lanes=y,e.memoizedState=vt}}function Um(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Nm(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Um(s[e],i)}var _r=N(null),Yl=N(0);function Pm(e,i){e=Sa,gt(Yl,e),gt(_r,i),Sa=e|i.baseLanes}function vf(){gt(Yl,Sa),gt(_r,_r.current)}function xf(){Sa=Yl.current,tt(_r),tt(Yl)}var ci=N(null),Ti=null;function Xa(e){var i=e.alternate;gt(fn,fn.current&1),gt(ci,e),Ti===null&&(i===null||_r.current!==null||i.memoizedState!==null)&&(Ti=e)}function yf(e){gt(fn,fn.current),gt(ci,e),Ti===null&&(Ti=e)}function Om(e){e.tag===22?(gt(fn,fn.current),gt(ci,e),Ti===null&&(Ti=e)):Ka()}function Ka(){gt(fn,fn.current),gt(ci,ci.current)}function ui(e){tt(ci),Ti===e&&(Ti=null),tt(fn)}var fn=N(0);function jl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Ah(s)||Rh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var da=0,fe=null,We=null,gn=null,Zl=!1,vr=!1,Cs=!1,Ql=0,Uo=0,xr=null,dy=0;function sn(){throw Error(a(321))}function Sf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!oi(e[s],i[s]))return!1;return!0}function Mf(e,i,s,o,u,h){return da=h,fe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?v0:Bf,Cs=!1,h=s(o,u),Cs=!1,vr&&(h=Bm(i,s,o,u)),Im(e),h}function Im(e){B.H=Oo;var i=We!==null&&We.next!==null;if(da=0,gn=We=fe=null,Zl=!1,Uo=0,xr=null,i)throw Error(a(300));e===null||_n||(e=e.dependencies,e!==null&&Gl(e)&&(_n=!0))}function Bm(e,i,s,o){fe=e;var u=0;do{if(vr&&(xr=null),Uo=0,vr=!1,25<=u)throw Error(a(301));if(u+=1,gn=We=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=x0,h=i(s,o)}while(vr);return h}function py(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?No(i):i,e=e.useState()[0],(We!==null?We.memoizedState:null)!==e&&(fe.flags|=1024),i}function bf(){var e=Ql!==0;return Ql=0,e}function Ef(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Tf(e){if(Zl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Zl=!1}da=0,gn=We=fe=null,vr=!1,Uo=Ql=0,xr=null}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?fe.memoizedState=gn=e:gn=gn.next=e,gn}function hn(){if(We===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var i=gn===null?fe.memoizedState:gn.next;if(i!==null)gn=i,We=e;else{if(e===null)throw fe.alternate===null?Error(a(467)):Error(a(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},gn===null?fe.memoizedState=gn=e:gn=gn.next=e}return gn}function Jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var i=Uo;return Uo+=1,xr===null&&(xr=[]),e=Rm(xr,e,i),i=fe,(gn===null?i.memoizedState:gn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?v0:Bf),e}function $l(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return No(e);if(e.$$typeof===U)return In(e)}throw Error(a(438,String(e)))}function Af(e){var i=null,s=fe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Jl(),fe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=C;return i.index++,s}function pa(e,i){return typeof i=="function"?i(e):i}function tc(e){var i=hn();return Rf(i,We,e)}function Rf(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}i.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{i=u.next;var R=y=null,G=null,it=i,dt=!1;do{var vt=it.lane&-536870913;if(vt!==it.lane?(Me&vt)===vt:(da&vt)===vt){var rt=it.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),vt===dr&&(dt=!0);else if((da&rt)===rt){it=it.next,rt===dr&&(dt=!0);continue}else vt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(R=G=vt,y=h):G=G.next=vt,fe.lanes|=rt,ja|=rt;vt=it.action,Cs&&s(h,vt),h=it.hasEagerState?it.eagerState:s(h,vt)}else rt={lane:vt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},G===null?(R=G=rt,y=h):G=G.next=rt,fe.lanes|=vt,ja|=vt;it=it.next}while(it!==null&&it!==i);if(G===null?y=h:G.next=R,!oi(h,e.memoizedState)&&(_n=!0,dt&&(s=pr,s!==null)))throw s;e.memoizedState=h,e.baseState=y,e.baseQueue=G,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function wf(e){var i=hn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,u=s.pending,h=i.memoizedState;if(u!==null){s.pending=null;var y=u=u.next;do h=e(h,y.action),y=y.next;while(y!==u);oi(h,i.memoizedState)||(_n=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,o]}function zm(e,i,s){var o=fe,u=hn(),h=Ee;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var y=!oi((We||u).memoizedState,s);if(y&&(u.memoizedState=s,_n=!0),u=u.queue,Lf(Gm.bind(null,o,u,e),[e]),u.getSnapshot!==i||y||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,yr(9,{destroy:void 0},Hm.bind(null,o,u,s,i),null),qe===null)throw Error(a(349));h||(da&127)!==0||Fm(o,i,s)}return s}function Fm(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=fe.updateQueue,i===null?(i=Jl(),fe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Hm(e,i,s,o){i.value=s,i.getSnapshot=o,Vm(i)&&km(e)}function Gm(e,i,s){return s(function(){Vm(i)&&km(e)})}function Vm(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!oi(e,s)}catch{return!0}}function km(e){var i=ys(e,2);i!==null&&ni(i,e,2)}function Cf(e){var i=Yn();if(typeof e=="function"){var s=e;if(e=s(),Cs){Ht(!0);try{s()}finally{Ht(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},i}function Wm(e,i,s,o){return e.baseState=s,Rf(e,We,typeof o=="function"?o:pa)}function my(e,i,s,o,u){if(ic(e))throw Error(a(485));if(e=i.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};B.T!==null?s(!0):h.isTransition=!1,o(h),s=i.pending,s===null?(h.next=i.pending=h,Xm(i,h)):(h.next=s.next,i.pending=s.next=h)}}function Xm(e,i){var s=i.action,o=i.payload,u=e.state;if(i.isTransition){var h=B.T,y={};B.T=y;try{var R=s(u,o),G=B.S;G!==null&&G(y,R),Km(e,i,R)}catch(it){Df(e,i,it)}finally{h!==null&&y.types!==null&&(h.types=y.types),B.T=h}}else try{h=s(u,o),Km(e,i,h)}catch(it){Df(e,i,it)}}function Km(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){qm(e,i,o)},function(o){return Df(e,i,o)}):qm(e,i,s)}function qm(e,i,s){i.status="fulfilled",i.value=s,Ym(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,Xm(e,s)))}function Df(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Ym(i),i=i.next;while(i!==o)}e.action=null}function Ym(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function jm(e,i){return i}function Zm(e,i){if(Ee){var s=qe.formState;if(s!==null){t:{var o=fe;if(Ee){if(Qe){e:{for(var u=Qe,h=Ei;u.nodeType!==8;){if(!h){u=null;break e}if(u=Ai(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Qe=Ai(u.nextSibling),o=u.data==="F!";break t}}Ha(o)}o=!1}o&&(i=s[0])}}return s=Yn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jm,lastRenderedState:i},s.queue=o,s=m0.bind(null,fe,o),o.dispatch=s,o=Cf(!1),h=If.bind(null,fe,!1,o.queue),o=Yn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,s=my.bind(null,fe,u,h,s),u.dispatch=s,o.memoizedState=e,[i,s,!1]}function Qm(e){var i=hn();return Jm(i,We,e)}function Jm(e,i,s){if(i=Rf(e,i,jm)[0],e=tc(pa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=No(i)}catch(y){throw y===mr?Wl:y}else o=i;i=hn();var u=i.queue,h=u.dispatch;return s!==i.memoizedState&&(fe.flags|=2048,yr(9,{destroy:void 0},gy.bind(null,u,s),null)),[o,h,e]}function gy(e,i){e.action=i}function $m(e){var i=hn(),s=We;if(s!==null)return Jm(i,s,e);hn(),i=i.memoizedState,s=hn();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function yr(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=fe.updateQueue,i===null&&(i=Jl(),fe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function t0(){return hn().memoizedState}function ec(e,i,s,o){var u=Yn();fe.flags|=e,u.memoizedState=yr(1|i,{destroy:void 0},s,o===void 0?null:o)}function nc(e,i,s,o){var u=hn();o=o===void 0?null:o;var h=u.memoizedState.inst;We!==null&&o!==null&&Sf(o,We.memoizedState.deps)?u.memoizedState=yr(i,h,s,o):(fe.flags|=e,u.memoizedState=yr(1|i,h,s,o))}function e0(e,i){ec(8390656,8,e,i)}function Lf(e,i){nc(2048,8,e,i)}function _y(e){fe.flags|=4;var i=fe.updateQueue;if(i===null)i=Jl(),fe.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function n0(e){var i=hn().memoizedState;return _y({ref:i,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function i0(e,i){return nc(4,2,e,i)}function a0(e,i){return nc(4,4,e,i)}function s0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function r0(e,i,s){s=s!=null?s.concat([e]):null,nc(4,4,s0.bind(null,i,e),s)}function Uf(){}function o0(e,i){var s=hn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&Sf(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function l0(e,i){var s=hn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&Sf(i,o[1]))return o[0];if(o=e(),Cs){Ht(!0);try{e()}finally{Ht(!1)}}return s.memoizedState=[o,i],o}function Nf(e,i,s){return s===void 0||(da&1073741824)!==0&&(Me&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=cg(),fe.lanes|=e,ja|=e,s)}function c0(e,i,s,o){return oi(s,i)?s:_r.current!==null?(e=Nf(e,s,o),oi(e,i)||(_n=!0),e):(da&42)===0||(da&1073741824)!==0&&(Me&261930)===0?(_n=!0,e.memoizedState=s):(e=cg(),fe.lanes|=e,ja|=e,i)}function u0(e,i,s,o,u){var h=V.p;V.p=h!==0&&8>h?h:8;var y=B.T,R={};B.T=R,If(e,!1,i,s);try{var G=u(),it=B.S;if(it!==null&&it(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var dt=hy(G,o);Po(e,i,dt,di(e))}else Po(e,i,o,di(e))}catch(vt){Po(e,i,{then:function(){},status:"rejected",reason:vt},di())}finally{V.p=h,y!==null&&R.types!==null&&(y.types=R.types),B.T=y}}function vy(){}function Pf(e,i,s,o){if(e.tag!==5)throw Error(a(476));var u=f0(e).queue;u0(e,u,i,at,s===null?vy:function(){return h0(e),s(o)})}function f0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:at},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function h0(e){var i=f0(e);i.next===null&&(i=e.alternate.memoizedState),Po(e,i.next.queue,{},di())}function Of(){return In(Qo)}function d0(){return hn().memoizedState}function p0(){return hn().memoizedState}function xy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=di();e=ka(s);var o=Wa(i,e,s);o!==null&&(ni(o,i,s),Co(o,i,s)),i={cache:uf()},e.payload=i;return}i=i.return}}function yy(e,i,s){var o=di();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},ic(e)?g0(i,s):(s=Ju(e,i,s,o),s!==null&&(ni(s,e,o),_0(s,i,o)))}function m0(e,i,s){var o=di();Po(e,i,s,o)}function Po(e,i,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(ic(e))g0(i,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var y=i.lastRenderedState,R=h(y,s);if(u.hasEagerState=!0,u.eagerState=R,oi(R,y))return Bl(e,i,u,0),qe===null&&Il(),!1}catch{}finally{}if(s=Ju(e,i,u,o),s!==null)return ni(s,e,o),_0(s,i,o),!0}return!1}function If(e,i,s,o){if(o={lane:2,revertLane:ph(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ic(e)){if(i)throw Error(a(479))}else i=Ju(e,s,o,2),i!==null&&ni(i,e,2)}function ic(e){var i=e.alternate;return e===fe||i!==null&&i===fe}function g0(e,i){vr=Zl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function _0(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,lo(e,s)}}var Oo={readContext:In,use:$l,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};Oo.useEffectEvent=sn;var v0={readContext:In,use:$l,useCallback:function(e,i){return Yn().memoizedState=[e,i===void 0?null:i],e},useContext:In,useEffect:e0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,ec(4194308,4,s0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return ec(4194308,4,e,i)},useInsertionEffect:function(e,i){ec(4,2,e,i)},useMemo:function(e,i){var s=Yn();i=i===void 0?null:i;var o=e();if(Cs){Ht(!0);try{e()}finally{Ht(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=Yn();if(s!==void 0){var u=s(i);if(Cs){Ht(!0);try{s(i)}finally{Ht(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=yy.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var i=Yn();return e={current:e},i.memoizedState=e},useState:function(e){e=Cf(e);var i=e.queue,s=m0.bind(null,fe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Uf,useDeferredValue:function(e,i){var s=Yn();return Nf(s,e,i)},useTransition:function(){var e=Cf(!1);return e=u0.bind(null,fe,e.queue,!0,!1),Yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=fe,u=Yn();if(Ee){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),qe===null)throw Error(a(349));(Me&127)!==0||Fm(o,i,s)}u.memoizedState=s;var h={value:s,getSnapshot:i};return u.queue=h,e0(Gm.bind(null,o,h,e),[e]),o.flags|=2048,yr(9,{destroy:void 0},Hm.bind(null,o,h,s,i),null),s},useId:function(){var e=Yn(),i=qe.identifierPrefix;if(Ee){var s=Zi,o=ji;s=(o&~(1<<32-Bt(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Ql++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=dy++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Of,useFormState:Zm,useActionState:Zm,useOptimistic:function(e){var i=Yn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=If.bind(null,fe,!0,s),s.dispatch=i,[e,i]},useMemoCache:Af,useCacheRefresh:function(){return Yn().memoizedState=xy.bind(null,fe)},useEffectEvent:function(e){var i=Yn(),s={impl:e};return i.memoizedState=s,function(){if((Pe&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Bf={readContext:In,use:$l,useCallback:o0,useContext:In,useEffect:Lf,useImperativeHandle:r0,useInsertionEffect:i0,useLayoutEffect:a0,useMemo:l0,useReducer:tc,useRef:t0,useState:function(){return tc(pa)},useDebugValue:Uf,useDeferredValue:function(e,i){var s=hn();return c0(s,We.memoizedState,e,i)},useTransition:function(){var e=tc(pa)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:No(e),i]},useSyncExternalStore:zm,useId:d0,useHostTransitionStatus:Of,useFormState:Qm,useActionState:Qm,useOptimistic:function(e,i){var s=hn();return Wm(s,We,e,i)},useMemoCache:Af,useCacheRefresh:p0};Bf.useEffectEvent=n0;var x0={readContext:In,use:$l,useCallback:o0,useContext:In,useEffect:Lf,useImperativeHandle:r0,useInsertionEffect:i0,useLayoutEffect:a0,useMemo:l0,useReducer:wf,useRef:t0,useState:function(){return wf(pa)},useDebugValue:Uf,useDeferredValue:function(e,i){var s=hn();return We===null?Nf(s,e,i):c0(s,We.memoizedState,e,i)},useTransition:function(){var e=wf(pa)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:No(e),i]},useSyncExternalStore:zm,useId:d0,useHostTransitionStatus:Of,useFormState:$m,useActionState:$m,useOptimistic:function(e,i){var s=hn();return We!==null?Wm(s,We,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Af,useCacheRefresh:p0};x0.useEffectEvent=n0;function zf(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Ff={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=di(),u=ka(o);u.payload=i,s!=null&&(u.callback=s),i=Wa(e,u,o),i!==null&&(ni(i,e,o),Co(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=di(),u=ka(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Wa(e,u,o),i!==null&&(ni(i,e,o),Co(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=di(),o=ka(s);o.tag=2,i!=null&&(o.callback=i),i=Wa(e,o,s),i!==null&&(ni(i,e,s),Co(i,e,s))}};function y0(e,i,s,o,u,h,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,y):i.prototype&&i.prototype.isPureReactComponent?!So(s,o)||!So(u,h):!0}function S0(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&Ff.enqueueReplaceState(i,i.state,null)}function Ds(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}function M0(e){Ol(e)}function b0(e){console.error(e)}function E0(e){Ol(e)}function ac(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function T0(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Hf(e,i,s){return s=ka(s),s.tag=3,s.payload={element:null},s.callback=function(){ac(e,i)},s}function A0(e){return e=ka(e),e.tag=3,e}function R0(e,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){T0(i,s,o)}}var y=s.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){T0(i,s,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Sy(e,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&hr(i,s,u,!0),s=ci.current,s!==null){switch(s.tag){case 31:case 13:return Ti===null?gc():s.alternate===null&&rn===0&&(rn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===Xl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),fh(e,o,u)),!1;case 22:return s.flags|=65536,o===Xl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),fh(e,o,u)),!1}throw Error(a(435,s.tag))}return fh(e,o,u),gc(),!1}if(Ee)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==sf&&(e=Error(a(422),{cause:o}),Eo(Si(e,s)))):(o!==sf&&(i=Error(a(423),{cause:o}),Eo(Si(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Si(o,s),u=Hf(e.stateNode,o,u),gf(e,u),rn!==4&&(rn=2)),!1;var h=Error(a(520),{cause:o});if(h=Si(h,s),ko===null?ko=[h]:ko.push(h),rn!==4&&(rn=2),i===null)return!0;o=Si(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=Hf(s.stateNode,o,e),gf(s,e),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Za===null||!Za.has(h))))return s.flags|=65536,u&=-u,s.lanes|=u,u=A0(u),R0(u,e,s,o),gf(s,u),!1}s=s.return}while(s!==null);return!1}var Gf=Error(a(461)),_n=!1;function Bn(e,i,s,o){i.child=e===null?Lm(i,null,s,o):ws(i,e.child,s,o)}function w0(e,i,s,o,u){s=s.render;var h=i.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Es(i),o=Mf(e,i,s,y,h,u),R=bf(),e!==null&&!_n?(Ef(e,i,u),ma(e,i,u)):(Ee&&R&&nf(i),i.flags|=1,Bn(e,i,o,u),i.child)}function C0(e,i,s,o,u){if(e===null){var h=s.type;return typeof h=="function"&&!$u(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,D0(e,i,h,o,u)):(e=Fl(s.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(h=e.child,!jf(e,u)){var y=h.memoizedProps;if(s=s.compare,s=s!==null?s:So,s(y,o)&&e.ref===i.ref)return ma(e,i,u)}return i.flags|=1,e=ca(h,o),e.ref=i.ref,e.return=i,i.child=e}function D0(e,i,s,o,u){if(e!==null){var h=e.memoizedProps;if(So(h,o)&&e.ref===i.ref)if(_n=!1,i.pendingProps=o=h,jf(e,u))(e.flags&131072)!==0&&(_n=!0);else return i.lanes=e.lanes,ma(e,i,u)}return Vf(e,i,s,o,u)}function L0(e,i,s,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,i.child=null;return U0(e,i,h,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&kl(i,h!==null?h.cachePool:null),h!==null?Pm(i,h):vf(),Om(i);else return o=i.lanes=536870912,U0(e,i,h!==null?h.baseLanes|s:s,s,o)}else h!==null?(kl(i,h.cachePool),Pm(i,h),Ka(),i.memoizedState=null):(e!==null&&kl(i,null),vf(),Ka());return Bn(e,i,u,s),i.child}function Io(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function U0(e,i,s,o,u){var h=hf();return h=h===null?null:{parent:mn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},e!==null&&kl(i,null),vf(),Om(i),e!==null&&hr(e,i,o,!0),i.childLanes=u,null}function sc(e,i){return i=oc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function N0(e,i,s){return ws(i,e.child,null,s),e=sc(i,i.pendingProps),e.flags|=2,ui(i),i.memoizedState=null,e}function My(e,i,s){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ee){if(o.mode==="hidden")return e=sc(i,o),i.lanes=536870912,Io(null,e);if(yf(i),(e=Qe)?(e=Xg(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:za!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=gm(e),s.return=i,i.child=s,On=i,Qe=null)):e=null,e===null)throw Ha(i);return i.lanes=536870912,null}return sc(i,o)}var h=e.memoizedState;if(h!==null){var y=h.dehydrated;if(yf(i),u)if(i.flags&256)i.flags&=-257,i=N0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(_n||hr(e,i,s,!1),u=(s&e.childLanes)!==0,_n||u){if(o=qe,o!==null&&(y=Qs(o,s),y!==0&&y!==h.retryLane))throw h.retryLane=y,ys(e,y),ni(o,e,y),Gf;gc(),i=N0(e,i,s)}else e=h.treeContext,Qe=Ai(y.nextSibling),On=i,Ee=!0,Fa=null,Ei=!1,e!==null&&xm(i,e),i=sc(i,o),i.flags|=4096;return i}return e=ca(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function rc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Vf(e,i,s,o,u){return Es(i),s=Mf(e,i,s,o,void 0,u),o=bf(),e!==null&&!_n?(Ef(e,i,u),ma(e,i,u)):(Ee&&o&&nf(i),i.flags|=1,Bn(e,i,s,u),i.child)}function P0(e,i,s,o,u,h){return Es(i),i.updateQueue=null,s=Bm(i,o,s,u),Im(e),o=bf(),e!==null&&!_n?(Ef(e,i,h),ma(e,i,h)):(Ee&&o&&nf(i),i.flags|=1,Bn(e,i,s,h),i.child)}function O0(e,i,s,o,u){if(Es(i),i.stateNode===null){var h=lr,y=s.contextType;typeof y=="object"&&y!==null&&(h=In(y)),h=new s(o,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Ff,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=o,h.state=i.memoizedState,h.refs={},pf(i),y=s.contextType,h.context=typeof y=="object"&&y!==null?In(y):lr,h.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(zf(i,s,y,o),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&Ff.enqueueReplaceState(h,h.state,null),Lo(i,o,h,u),Do(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){h=i.stateNode;var R=i.memoizedProps,G=Ds(s,R);h.props=G;var it=h.context,dt=s.contextType;y=lr,typeof dt=="object"&&dt!==null&&(y=In(dt));var vt=s.getDerivedStateFromProps;dt=typeof vt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,dt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||it!==y)&&S0(i,h,o,y),Va=!1;var rt=i.memoizedState;h.state=rt,Lo(i,o,h,u),Do(),it=i.memoizedState,R||rt!==it||Va?(typeof vt=="function"&&(zf(i,s,vt,o),it=i.memoizedState),(G=Va||y0(i,s,G,o,rt,it,y))?(dt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=it),h.props=o,h.state=it,h.context=y,o=G):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{h=i.stateNode,mf(e,i),y=i.memoizedProps,dt=Ds(s,y),h.props=dt,vt=i.pendingProps,rt=h.context,it=s.contextType,G=lr,typeof it=="object"&&it!==null&&(G=In(it)),R=s.getDerivedStateFromProps,(it=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==vt||rt!==G)&&S0(i,h,o,G),Va=!1,rt=i.memoizedState,h.state=rt,Lo(i,o,h,u),Do();var ct=i.memoizedState;y!==vt||rt!==ct||Va||e!==null&&e.dependencies!==null&&Gl(e.dependencies)?(typeof R=="function"&&(zf(i,s,R,o),ct=i.memoizedState),(dt=Va||y0(i,s,dt,o,rt,ct,G)||e!==null&&e.dependencies!==null&&Gl(e.dependencies))?(it||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ct,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ct,G)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ct),h.props=o,h.state=ct,h.context=G,o=dt):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),o=!1)}return h=o,rc(e,i),o=(i.flags&128)!==0,h||o?(h=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,e!==null&&o?(i.child=ws(i,e.child,null,u),i.child=ws(i,null,s,u)):Bn(e,i,s,u),i.memoizedState=h.state,e=i.child):e=ma(e,i,u),e}function I0(e,i,s,o){return Ms(),i.flags|=256,Bn(e,i,s,o),i.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(e){return{baseLanes:e,cachePool:Tm()}}function Xf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=hi),e}function B0(e,i,s){var o=i.pendingProps,u=!1,h=(i.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),y&&(u=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ee){if(u?Xa(i):Ka(),(e=Qe)?(e=Xg(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:za!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},s=gm(e),s.return=i,i.child=s,On=i,Qe=null)):e=null,e===null)throw Ha(i);return Rh(e)?i.lanes=32:i.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ka(),u=i.mode,R=oc({mode:"hidden",children:R},u),o=Ss(o,u,s,null),R.return=i,o.return=i,R.sibling=o,i.child=R,o=i.child,o.memoizedState=Wf(s),o.childLanes=Xf(e,y,s),i.memoizedState=kf,Io(null,o)):(Xa(i),Kf(i,R))}var G=e.memoizedState;if(G!==null&&(R=G.dehydrated,R!==null)){if(h)i.flags&256?(Xa(i),i.flags&=-257,i=qf(e,i,s)):i.memoizedState!==null?(Ka(),i.child=e.child,i.flags|=128,i=null):(Ka(),R=o.fallback,u=i.mode,o=oc({mode:"visible",children:o.children},u),R=Ss(R,u,s,null),R.flags|=2,o.return=i,R.return=i,o.sibling=R,i.child=o,ws(i,e.child,null,s),o=i.child,o.memoizedState=Wf(s),o.childLanes=Xf(e,y,s),i.memoizedState=kf,i=Io(null,o));else if(Xa(i),Rh(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var it=y.dgst;y=it,o=Error(a(419)),o.stack="",o.digest=y,Eo({value:o,source:null,stack:null}),i=qf(e,i,s)}else if(_n||hr(e,i,s,!1),y=(s&e.childLanes)!==0,_n||y){if(y=qe,y!==null&&(o=Qs(y,s),o!==0&&o!==G.retryLane))throw G.retryLane=o,ys(e,o),ni(y,e,o),Gf;Ah(R)||gc(),i=qf(e,i,s)}else Ah(R)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,Qe=Ai(R.nextSibling),On=i,Ee=!0,Fa=null,Ei=!1,e!==null&&xm(i,e),i=Kf(i,o.children),i.flags|=4096);return i}return u?(Ka(),R=o.fallback,u=i.mode,G=e.child,it=G.sibling,o=ca(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,it!==null?R=ca(it,R):(R=Ss(R,u,s,null),R.flags|=2),R.return=i,o.return=i,o.sibling=R,i.child=o,Io(null,o),o=i.child,R=e.child.memoizedState,R===null?R=Wf(s):(u=R.cachePool,u!==null?(G=mn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Tm(),R={baseLanes:R.baseLanes|s,cachePool:u}),o.memoizedState=R,o.childLanes=Xf(e,y,s),i.memoizedState=kf,Io(e.child,o)):(Xa(i),s=e.child,e=s.sibling,s=ca(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(y=i.deletions,y===null?(i.deletions=[e],i.flags|=16):y.push(e)),i.child=s,i.memoizedState=null,s)}function Kf(e,i){return i=oc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function oc(e,i){return e=li(22,e,null,i),e.lanes=0,e}function qf(e,i,s){return ws(i,e.child,null,s),e=Kf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function z0(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),lf(e.return,i,s)}function Yf(e,i,s,o,u,h){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:h}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=s,y.tailMode=u,y.treeForkCount=h)}function F0(e,i,s){var o=i.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=fn.current,R=(y&2)!==0;if(R?(y=y&1|2,i.flags|=128):y&=1,gt(fn,y),Bn(e,i,o,s),o=Ee?bo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&z0(e,s,i);else if(e.tag===19)z0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&jl(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),Yf(i,!1,u,s,h,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&jl(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}Yf(i,!0,s,null,h,o);break;case"together":Yf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function ma(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),ja|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(hr(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=ca(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=ca(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function jf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Gl(e)))}function by(e,i,s){switch(i.tag){case 3:Ct(i,i.stateNode.containerInfo),Ga(i,mn,e.memoizedState.cache),Ms();break;case 27:case 5:Ft(i);break;case 4:Ct(i,i.stateNode.containerInfo);break;case 10:Ga(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,yf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Xa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?B0(e,i,s):(Xa(i),e=ma(e,i,s),e!==null?e.sibling:null);Xa(i);break;case 19:var u=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(hr(e,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return F0(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(fn,fn.current),o)break;return null;case 22:return i.lanes=0,L0(e,i,s,i.pendingProps);case 24:Ga(i,mn,e.memoizedState.cache)}return ma(e,i,s)}function H0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)_n=!0;else{if(!jf(e,s)&&(i.flags&128)===0)return _n=!1,by(e,i,s);_n=(e.flags&131072)!==0}else _n=!1,Ee&&(i.flags&1048576)!==0&&vm(i,bo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=As(i.elementType),i.type=e,typeof e=="function")$u(e)?(o=Ds(e,o),i.tag=1,i=O0(null,i,e,o,s)):(i.tag=0,i=Vf(null,i,e,o,s));else{if(e!=null){var u=e.$$typeof;if(u===L){i.tag=11,i=w0(null,i,e,o,s);break t}else if(u===O){i.tag=14,i=C0(null,i,e,o,s);break t}}throw i=lt(e)||e,Error(a(306,i,""))}}return i;case 0:return Vf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=Ds(o,i.pendingProps),O0(e,i,o,u,s);case 3:t:{if(Ct(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var h=i.memoizedState;u=h.element,mf(e,i),Lo(i,o,null,s);var y=i.memoizedState;if(o=y.cache,Ga(i,mn,o),o!==h.cache&&cf(i,[mn],s,!0),Do(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=I0(e,i,o,s);break t}else if(o!==u){u=Si(Error(a(424)),i),Eo(u),i=I0(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=Ai(e.firstChild),On=i,Ee=!0,Fa=null,Ei=!0,s=Lm(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ms(),o===u){i=ma(e,i,s);break t}Bn(e,i,o,s)}i=i.child}return i;case 26:return rc(e,i),e===null?(s=Qg(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ee||(s=i.type,e=i.pendingProps,o=bc(nt.current).createElement(s),o[pn]=i,o[Cn]=e,zn(o,s,e),w(o),i.stateNode=o):i.memoizedState=Qg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ft(i),e===null&&Ee&&(o=i.stateNode=Yg(i.type,i.pendingProps,nt.current),On=i,Ei=!0,u=Qe,ts(i.type)?(wh=u,Qe=Ai(o.firstChild)):Qe=u),Bn(e,i,i.pendingProps.children,s),rc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ee&&((u=o=Qe)&&(o=$y(o,i.type,i.pendingProps,Ei),o!==null?(i.stateNode=o,On=i,Qe=Ai(o.firstChild),Ei=!1,u=!0):u=!1),u||Ha(i)),Ft(i),u=i.type,h=i.pendingProps,y=e!==null?e.memoizedProps:null,o=h.children,bh(u,h)?o=null:y!==null&&bh(u,y)&&(i.flags|=32),i.memoizedState!==null&&(u=Mf(e,i,py,null,null,s),Qo._currentValue=u),rc(e,i),Bn(e,i,o,s),i.child;case 6:return e===null&&Ee&&((e=s=Qe)&&(s=tS(s,i.pendingProps,Ei),s!==null?(i.stateNode=s,On=i,Qe=null,e=!0):e=!1),e||Ha(i)),null;case 13:return B0(e,i,s);case 4:return Ct(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=ws(i,null,o,s):Bn(e,i,o,s),i.child;case 11:return w0(e,i,i.type,i.pendingProps,s);case 7:return Bn(e,i,i.pendingProps,s),i.child;case 8:return Bn(e,i,i.pendingProps.children,s),i.child;case 12:return Bn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Ga(i,i.type,o.value),Bn(e,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,Es(i),u=In(u),o=o(u),i.flags|=1,Bn(e,i,o,s),i.child;case 14:return C0(e,i,i.type,i.pendingProps,s);case 15:return D0(e,i,i.type,i.pendingProps,s);case 19:return F0(e,i,s);case 31:return My(e,i,s);case 22:return L0(e,i,s,i.pendingProps);case 24:return Es(i),o=In(mn),e===null?(u=hf(),u===null&&(u=qe,h=uf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=s),u=h),i.memoizedState={parent:o,cache:u},pf(i),Ga(i,mn,u)):((e.lanes&s)!==0&&(mf(e,i),Lo(i,null,null,s),Do()),u=e.memoizedState,h=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ga(i,mn,o)):(o=h.cache,Ga(i,mn,o),o!==u.cache&&cf(i,[mn],s,!0))),Bn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ga(e){e.flags|=4}function Zf(e,i,s,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(dg())e.flags|=8192;else throw Rs=Xl,df}else e.flags&=-16777217}function G0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!n_(i))if(dg())e.flags|=8192;else throw Rs=Xl,df}function lc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ze():536870912,e.lanes|=i,Er|=i)}function Bo(e,i){if(!Ee)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function Ey(e,i,s){var o=i.pendingProps;switch(af(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ha(mn),It(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(fr(i)?ga(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rf())),Je(i),null;case 26:var u=i.type,h=i.memoizedState;return e===null?(ga(i),h!==null?(Je(i),G0(i,h)):(Je(i),Zf(i,u,null,o,s))):h?h!==e.memoizedState?(ga(i),Je(i),G0(i,h)):(Je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&ga(i),Je(i),Zf(i,u,e,o,s)),null;case 27:if(le(i),s=nt.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ga(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Je(i),null}e=Rt.current,fr(i)?ym(i):(e=Yg(u,o,s),i.stateNode=e,ga(i))}return Je(i),null;case 5:if(le(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ga(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return Je(i),null}if(h=Rt.current,fr(i))ym(i);else{var y=bc(nt.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[pn]=i,h[Cn]=o;t:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break t;for(;y.sibling===null;){if(y.return===null||y.return===i)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=h;t:switch(zn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ga(i)}}return Je(i),Zf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ga(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=nt.current,fr(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,u=On,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[pn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Bg(e.nodeValue,s)),e||Ha(i,!0)}else e=bc(e).createTextNode(o),e[pn]=i,i.stateNode=e}return Je(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(o=fr(i),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[pn]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),e=!1}else s=rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=fr(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[pn]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),u=!1}else u=rf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),lc(i,i.updateQueue),Je(i),null);case 4:return It(),e===null&&vh(i.stateNode.containerInfo),Je(i),null;case 10:return ha(i.type),Je(i),null;case 19:if(tt(fn),o=i.memoizedState,o===null)return Je(i),null;if(u=(i.flags&128)!==0,h=o.rendering,h===null)if(u)Bo(o,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(h=jl(e),h!==null){for(i.flags|=128,Bo(o,!1),e=h.updateQueue,i.updateQueue=e,lc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)mm(s,e),s=s.sibling;return gt(fn,fn.current&1|2),Ee&&ua(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&E()>dc&&(i.flags|=128,u=!0,Bo(o,!1),i.lanes=4194304)}else{if(!u)if(e=jl(h),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,lc(i,e),Bo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ee)return Je(i),null}else 2*E()-o.renderingStartTime>dc&&s!==536870912&&(i.flags|=128,u=!0,Bo(o,!1),i.lanes=4194304);o.isBackwards?(h.sibling=i.child,i.child=h):(e=o.last,e!==null?e.sibling=h:i.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,s=fn.current,gt(fn,u?s&1|2:s&1),Ee&&ua(i,o.treeForkCount),e):(Je(i),null);case 22:case 23:return ui(i),xf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),s=i.updateQueue,s!==null&&lc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&tt(Ts),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ha(mn),Je(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Ty(e,i){switch(af(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ha(mn),It(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return le(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(a(340));Ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ui(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return tt(fn),null;case 4:return It(),null;case 10:return ha(i.type),null;case 22:case 23:return ui(i),xf(),e!==null&&tt(Ts),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ha(mn),null;case 25:return null;default:return null}}function V0(e,i){switch(af(i),i.tag){case 3:ha(mn),It();break;case 26:case 27:case 5:le(i);break;case 4:It();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:tt(fn);break;case 10:ha(i.type);break;case 22:case 23:ui(i),xf(),e!==null&&tt(Ts);break;case 24:ha(mn)}}function zo(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){o=void 0;var h=s.create,y=s.inst;o=h(),y.destroy=o}s=s.next}while(s!==u)}}catch(R){Ge(i,i.return,R)}}function qa(e,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=i;var G=s,it=R;try{it()}catch(dt){Ge(u,G,dt)}}}o=o.next}while(o!==h)}}catch(dt){Ge(i,i.return,dt)}}function k0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Nm(i,s)}catch(o){Ge(e,e.return,o)}}}function W0(e,i,s){s.props=Ds(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Ge(e,i,o)}}function Fo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(u){Ge(e,i,u)}}function Qi(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){Ge(e,i,u)}else s.current=null}function X0(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){Ge(e,e.return,u)}}function Qf(e,i,s){try{var o=e.stateNode;qy(o,e.type,s,i),o[Cn]=i}catch(u){Ge(e,e.return,u)}}function K0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ts(e.type)||e.tag===4}function Jf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||K0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ts(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $f(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=oa));else if(o!==4&&(o===27&&ts(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for($f(e,i,s),e=e.sibling;e!==null;)$f(e,i,s),e=e.sibling}function cc(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&ts(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(cc(e,i,s),e=e.sibling;e!==null;)cc(e,i,s),e=e.sibling}function q0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);zn(i,o,s),i[pn]=e,i[Cn]=s}catch(h){Ge(e,e.return,h)}}var _a=!1,vn=!1,th=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,An=null;function Ay(e,i){if(e=e.containerInfo,Sh=Dc,e=rm(e),Ku(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break t}var y=0,R=-1,G=-1,it=0,dt=0,vt=e,rt=null;e:for(;;){for(var ct;vt!==s||u!==0&&vt.nodeType!==3||(R=y+u),vt!==h||o!==0&&vt.nodeType!==3||(G=y+o),vt.nodeType===3&&(y+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)rt=vt,vt=ct;for(;;){if(vt===e)break e;if(rt===s&&++it===u&&(R=y),rt===h&&++dt===o&&(G=y),(ct=vt.nextSibling)!==null)break;vt=rt,rt=vt.parentNode}vt=ct}s=R===-1||G===-1?null:{start:R,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Mh={focusedElem:e,selectionRange:s},Dc=!1,An=i;An!==null;)if(i=An,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,An=e;else for(;An!==null;){switch(i=An,h=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)u=e[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,s=i,u=h.memoizedProps,h=h.memoizedState,o=s.stateNode;try{var Wt=Ds(s.type,u);e=o.getSnapshotBeforeUpdate(Wt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Ge(s,s.return,ee)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Th(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Th(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,An=e;break}An=i.return}}function j0(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:xa(e,s),o&4&&zo(5,s);break;case 1:if(xa(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(y){Ge(s,s.return,y)}else{var u=Ds(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(s,s.return,y)}}o&64&&k0(s),o&512&&Fo(s,s.return);break;case 3:if(xa(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Nm(e,i)}catch(y){Ge(s,s.return,y)}}break;case 27:i===null&&o&4&&q0(s);case 26:case 5:xa(e,s),i===null&&o&4&&X0(s),o&512&&Fo(s,s.return);break;case 12:xa(e,s);break;case 31:xa(e,s),o&4&&J0(e,s);break;case 13:xa(e,s),o&4&&$0(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Oy.bind(null,s),eS(e,s))));break;case 22:if(o=s.memoizedState!==null||_a,!o){i=i!==null&&i.memoizedState!==null||vn,u=_a;var h=vn;_a=o,(vn=i)&&!h?ya(e,s,(s.subtreeFlags&8772)!==0):xa(e,s),_a=u,vn=h}break;case 30:break;default:xa(e,s)}}function Z0(e){var i=e.alternate;i!==null&&(e.alternate=null,Z0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ho(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,Jn=!1;function va(e,i,s){for(s=s.child;s!==null;)Q0(e,i,s),s=s.sibling}function Q0(e,i,s){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(Et,s)}catch{}switch(s.tag){case 26:vn||Qi(s,i),va(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:vn||Qi(s,i);var o=nn,u=Jn;ts(s.type)&&(nn=s.stateNode,Jn=!1),va(e,i,s),Yo(s.stateNode),nn=o,Jn=u;break;case 5:vn||Qi(s,i);case 6:if(o=nn,u=Jn,nn=null,va(e,i,s),nn=o,Jn=u,nn!==null)if(Jn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(s.stateNode)}catch(h){Ge(s,i,h)}else try{nn.removeChild(s.stateNode)}catch(h){Ge(s,i,h)}break;case 18:nn!==null&&(Jn?(e=nn,kg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ur(e)):kg(nn,s.stateNode));break;case 4:o=nn,u=Jn,nn=s.stateNode.containerInfo,Jn=!0,va(e,i,s),nn=o,Jn=u;break;case 0:case 11:case 14:case 15:qa(2,s,i),vn||qa(4,s,i),va(e,i,s);break;case 1:vn||(Qi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&W0(s,i,o)),va(e,i,s);break;case 21:va(e,i,s);break;case 22:vn=(o=vn)||s.memoizedState!==null,va(e,i,s),vn=o;break;default:va(e,i,s)}}function J0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ur(e)}catch(s){Ge(i,i.return,s)}}}function $0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ur(e)}catch(s){Ge(i,i.return,s)}}function Ry(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Y0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Y0),i;default:throw Error(a(435,e.tag))}}function uc(e,i){var s=Ry(e);i.forEach(function(o){if(!s.has(o)){s.add(o);var u=Iy.bind(null,e,o);o.then(u,u)}})}function $n(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],h=e,y=i,R=y;t:for(;R!==null;){switch(R.tag){case 27:if(ts(R.type)){nn=R.stateNode,Jn=!1;break t}break;case 5:nn=R.stateNode,Jn=!1;break t;case 3:case 4:nn=R.stateNode.containerInfo,Jn=!0;break t}R=R.return}if(nn===null)throw Error(a(160));Q0(h,y,u),nn=null,Jn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)tg(i,e),i=i.sibling}var Fi=null;function tg(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$n(i,e),ti(e),o&4&&(qa(3,e,e.return),zo(3,e),qa(5,e,e.return));break;case 1:$n(i,e),ti(e),o&512&&(vn||s===null||Qi(s,s.return)),o&64&&_a&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=Fi;if($n(i,e),ti(e),o&512&&(vn||s===null||Qi(s,s.return)),o&4){var h=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ms]||h[pn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),zn(h,o,s),h[pn]=e,w(h),o=h;break t;case"link":var y=t_("link","href",u).get(o+(s.href||""));if(y){for(var R=0;R<y.length;R++)if(h=y[R],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){y.splice(R,1);break e}}h=u.createElement(o),zn(h,o,s),u.head.appendChild(h);break;case"meta":if(y=t_("meta","content",u).get(o+(s.content||""))){for(R=0;R<y.length;R++)if(h=y[R],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){y.splice(R,1);break e}}h=u.createElement(o),zn(h,o,s),u.head.appendChild(h);break;default:throw Error(a(468,o))}h[pn]=e,w(h),o=h}e.stateNode=o}else e_(u,e.type,e.stateNode);else e.stateNode=$g(u,o,e.memoizedProps);else h!==o?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,o===null?e_(u,e.type,e.stateNode):$g(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Qf(e,e.memoizedProps,s.memoizedProps)}break;case 27:$n(i,e),ti(e),o&512&&(vn||s===null||Qi(s,s.return)),s!==null&&o&4&&Qf(e,e.memoizedProps,s.memoizedProps);break;case 5:if($n(i,e),ti(e),o&512&&(vn||s===null||Qi(s,s.return)),e.flags&32){u=e.stateNode;try{Sn(u,"")}catch(Wt){Ge(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Qf(e,u,s!==null?s.memoizedProps:u)),o&1024&&(th=!0);break;case 6:if($n(i,e),ti(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(Wt){Ge(e,e.return,Wt)}}break;case 3:if(Ac=null,u=Fi,Fi=Ec(i.containerInfo),$n(i,e),Fi=u,ti(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Ur(i.containerInfo)}catch(Wt){Ge(e,e.return,Wt)}th&&(th=!1,eg(e));break;case 4:o=Fi,Fi=Ec(e.stateNode.containerInfo),$n(i,e),ti(e),Fi=o;break;case 12:$n(i,e),ti(e);break;case 31:$n(i,e),ti(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uc(e,o)));break;case 13:$n(i,e),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(hc=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uc(e,o)));break;case 22:u=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,it=_a,dt=vn;if(_a=it||u,vn=dt||G,$n(i,e),vn=dt,_a=it,ti(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||G||_a||vn||Ls(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(h=G.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=G.stateNode;var vt=G.memoizedProps.style,rt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Wt){Ge(G,G.return,Wt)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Wt){Ge(G,G.return,Wt)}}}else if(i.tag===18){if(s===null){G=i;try{var ct=G.stateNode;u?Wg(ct,!0):Wg(G.stateNode,!1)}catch(Wt){Ge(G,G.return,Wt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,uc(e,s))));break;case 19:$n(i,e),ti(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,uc(e,o)));break;case 30:break;case 21:break;default:$n(i,e),ti(e)}}function ti(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(K0(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var u=s.stateNode,h=Jf(e);cc(e,h,u);break;case 5:var y=s.stateNode;s.flags&32&&(Sn(y,""),s.flags&=-33);var R=Jf(e);cc(e,R,y);break;case 3:case 4:var G=s.stateNode.containerInfo,it=Jf(e);$f(e,it,G);break;default:throw Error(a(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;eg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function xa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)j0(e,i.alternate,i),i=i.sibling}function Ls(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:qa(4,i,i.return),Ls(i);break;case 1:Qi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&W0(i,i.return,s),Ls(i);break;case 27:Yo(i.stateNode);case 26:case 5:Qi(i,i.return),Ls(i);break;case 22:i.memoizedState===null&&Ls(i);break;case 30:Ls(i);break;default:Ls(i)}e=e.sibling}}function ya(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,h=i,y=h.flags;switch(h.tag){case 0:case 11:case 15:ya(u,h,s),zo(4,h);break;case 1:if(ya(u,h,s),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Ge(o,o.return,it)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Um(G[u],R)}catch(it){Ge(o,o.return,it)}}s&&y&64&&k0(h),Fo(h,h.return);break;case 27:q0(h);case 26:case 5:ya(u,h,s),s&&o===null&&y&4&&X0(h),Fo(h,h.return);break;case 12:ya(u,h,s);break;case 31:ya(u,h,s),s&&y&4&&J0(u,h);break;case 13:ya(u,h,s),s&&y&4&&$0(u,h);break;case 22:h.memoizedState===null&&ya(u,h,s),Fo(h,h.return);break;case 30:break;default:ya(u,h,s)}i=i.sibling}}function eh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&To(s))}function nh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&To(e))}function Hi(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ng(e,i,s,o),i=i.sibling}function ng(e,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Hi(e,i,s,o),u&2048&&zo(9,i);break;case 1:Hi(e,i,s,o);break;case 3:Hi(e,i,s,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&To(e)));break;case 12:if(u&2048){Hi(e,i,s,o),e=i.stateNode;try{var h=i.memoizedProps,y=h.id,R=h.onPostCommit;typeof R=="function"&&R(y,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ge(i,i.return,G)}}else Hi(e,i,s,o);break;case 31:Hi(e,i,s,o);break;case 13:Hi(e,i,s,o);break;case 23:break;case 22:h=i.stateNode,y=i.alternate,i.memoizedState!==null?h._visibility&2?Hi(e,i,s,o):Ho(e,i):h._visibility&2?Hi(e,i,s,o):(h._visibility|=2,Sr(e,i,s,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&eh(y,i);break;case 24:Hi(e,i,s,o),u&2048&&nh(i.alternate,i);break;default:Hi(e,i,s,o)}}function Sr(e,i,s,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=e,y=i,R=s,G=o,it=y.flags;switch(y.tag){case 0:case 11:case 15:Sr(h,y,R,G,u),zo(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&2?Sr(h,y,R,G,u):Ho(h,y):(dt._visibility|=2,Sr(h,y,R,G,u)),u&&it&2048&&eh(y.alternate,y);break;case 24:Sr(h,y,R,G,u),u&&it&2048&&nh(y.alternate,y);break;default:Sr(h,y,R,G,u)}i=i.sibling}}function Ho(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,u=o.flags;switch(o.tag){case 22:Ho(s,o),u&2048&&eh(o.alternate,o);break;case 24:Ho(s,o),u&2048&&nh(o.alternate,o);break;default:Ho(s,o)}i=i.sibling}}var Go=8192;function Mr(e,i,s){if(e.subtreeFlags&Go)for(e=e.child;e!==null;)ig(e,i,s),e=e.sibling}function ig(e,i,s){switch(e.tag){case 26:Mr(e,i,s),e.flags&Go&&e.memoizedState!==null&&dS(s,Fi,e.memoizedState,e.memoizedProps);break;case 5:Mr(e,i,s);break;case 3:case 4:var o=Fi;Fi=Ec(e.stateNode.containerInfo),Mr(e,i,s),Fi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Go,Go=16777216,Mr(e,i,s),Go=o):Mr(e,i,s));break;default:Mr(e,i,s)}}function ag(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Vo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];An=o,rg(o,e)}ag(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sg(e),e=e.sibling}function sg(e){switch(e.tag){case 0:case 11:case 15:Vo(e),e.flags&2048&&qa(9,e,e.return);break;case 3:Vo(e);break;case 12:Vo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,fc(e)):Vo(e);break;default:Vo(e)}}function fc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];An=o,rg(o,e)}ag(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:qa(8,i,i.return),fc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,fc(i));break;default:fc(i)}e=e.sibling}}function rg(e,i){for(;An!==null;){var s=An;switch(s.tag){case 0:case 11:case 15:qa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:To(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,An=o;else t:for(s=e;An!==null;){o=An;var u=o.sibling,h=o.return;if(Z0(o),o===s){An=null;break t}if(u!==null){u.return=h,An=u;break t}An=h}}}var wy={getCacheForType:function(e){var i=In(mn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return In(mn).controller.signal}},Cy=typeof WeakMap=="function"?WeakMap:Map,Pe=0,qe=null,xe=null,Me=0,He=0,fi=null,Ya=!1,br=!1,ih=!1,Sa=0,rn=0,ja=0,Us=0,ah=0,hi=0,Er=0,ko=null,ei=null,sh=!1,hc=0,og=0,dc=1/0,pc=null,Za=null,Mn=0,Qa=null,Tr=null,Ma=0,rh=0,oh=null,lg=null,Wo=0,lh=null;function di(){return(Pe&2)!==0&&Me!==0?Me&-Me:B.T!==null?ph():uo()}function cg(){if(hi===0)if((Me&536870912)===0||Ee){var e=At;At<<=1,(At&3932160)===0&&(At=262144),hi=e}else hi=536870912;return e=ci.current,e!==null&&(e.flags|=32),hi}function ni(e,i,s){(e===qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(Ar(e,0),Ja(e,Me,hi,!1)),Vn(e,s),((Pe&2)===0||e!==qe)&&(e===qe&&((Pe&2)===0&&(Us|=s),rn===4&&Ja(e,Me,hi,!1)),Ji(e))}function ug(e,i,s){if((Pe&6)!==0)throw Error(a(327));var o=!s&&(i&127)===0&&(i&e.expiredLanes)===0||wt(e,i),u=o?Uy(e,i):uh(e,i,!0),h=o;do{if(u===0){br&&!o&&Ja(e,i,0,!1);break}else{if(s=e.current.alternate,h&&!Dy(s)){u=uh(e,i,!1),h=!1;continue}if(u===2){if(h=i,e.errorRecoveryDisabledLanes&h)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;t:{var R=e;u=ko;var G=R.current.memoizedState.isDehydrated;if(G&&(Ar(R,y).flags|=256),y=uh(R,y,!1),y!==2){if(ih&&!G){R.errorRecoveryDisabledLanes|=h,Us|=h,u=4;break t}h=ei,ei=u,h!==null&&(ei===null?ei=h:ei.push.apply(ei,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){Ar(e,0),Ja(e,i,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ja(o,i,hi,!Ya);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(u=hc+300-E(),10<u)){if(Ja(o,i,hi,!Ya),xt(o,0,!0)!==0)break t;Ma=i,o.timeoutHandle=Gg(fg.bind(null,o,s,ei,pc,sh,i,hi,Us,Er,Ya,h,"Throttled",-0,0),u);break t}fg(o,s,ei,pc,sh,i,hi,Us,Er,Ya,h,null,-0,0)}}break}while(!0);Ji(e)}function fg(e,i,s,o,u,h,y,R,G,it,dt,vt,rt,ct){if(e.timeoutHandle=-1,vt=i.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},ig(i,h,vt);var Wt=(h&62914560)===h?hc-E():(h&4194048)===h?og-E():0;if(Wt=pS(vt,Wt),Wt!==null){Ma=h,e.cancelPendingCommit=Wt(xg.bind(null,e,i,h,s,o,u,y,R,G,dt,vt,null,rt,ct)),Ja(e,h,y,!it);return}}xg(e,i,h,s,o,u,y,R,G)}function Dy(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],h=u.getSnapshot;u=u.value;try{if(!oi(h(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ja(e,i,s,o){i&=~ah,i&=~Us,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var h=31-Bt(u),y=1<<h;o[h]=-1,u&=~y}s!==0&&Al(e,s,i)}function mc(){return(Pe&6)===0?(Xo(0),!1):!0}function ch(){if(xe!==null){if(He===0)var e=xe.return;else e=xe,fa=bs=null,Tf(e),gr=null,Ro=0,e=xe;for(;e!==null;)V0(e.alternate,e),e=e.return;xe=null}}function Ar(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Zy(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ma=0,ch(),qe=e,xe=s=ca(e.current,null),Me=i,He=0,fi=null,Ya=!1,br=wt(e,i),ih=!1,Er=hi=ah=Us=ja=rn=0,ei=ko=null,sh=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Bt(o),h=1<<u;i|=e[u],o&=~h}return Sa=i,Il(),s}function hg(e,i){fe=null,B.H=Oo,i===mr||i===Wl?(i=wm(),He=3):i===df?(i=wm(),He=4):He=i===Gf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,xe===null&&(rn=1,ac(e,Si(i,e.current)))}function dg(){var e=ci.current;return e===null?!0:(Me&4194048)===Me?Ti===null:(Me&62914560)===Me||(Me&536870912)!==0?e===Ti:!1}function pg(){var e=B.H;return B.H=Oo,e===null?Oo:e}function mg(){var e=B.A;return B.A=wy,e}function gc(){rn=4,Ya||(Me&4194048)!==Me&&ci.current!==null||(br=!0),(ja&134217727)===0&&(Us&134217727)===0||qe===null||Ja(qe,Me,hi,!1)}function uh(e,i,s){var o=Pe;Pe|=2;var u=pg(),h=mg();(qe!==e||Me!==i)&&(pc=null,Ar(e,i)),i=!1;var y=rn;t:do try{if(He!==0&&xe!==null){var R=xe,G=fi;switch(He){case 8:ch(),y=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var it=He;if(He=0,fi=null,Rr(e,R,G,it),s&&br){y=0;break t}break;default:it=He,He=0,fi=null,Rr(e,R,G,it)}}Ly(),y=rn;break}catch(dt){hg(e,dt)}while(!0);return i&&e.shellSuspendCounter++,fa=bs=null,Pe=o,B.H=u,B.A=h,xe===null&&(qe=null,Me=0,Il()),y}function Ly(){for(;xe!==null;)gg(xe)}function Uy(e,i){var s=Pe;Pe|=2;var o=pg(),u=mg();qe!==e||Me!==i?(pc=null,dc=E()+500,Ar(e,i)):br=wt(e,i);t:do try{if(He!==0&&xe!==null){i=xe;var h=fi;e:switch(He){case 1:He=0,fi=null,Rr(e,i,h,1);break;case 2:case 9:if(Am(h)){He=0,fi=null,_g(i);break}i=function(){He!==2&&He!==9||qe!==e||(He=7),Ji(e)},h.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Am(h)?(He=0,fi=null,_g(i)):(He=0,fi=null,Rr(e,i,h,7));break;case 5:var y=null;switch(xe.tag){case 26:y=xe.memoizedState;case 5:case 27:var R=xe;if(y?n_(y):R.stateNode.complete){He=0,fi=null;var G=R.sibling;if(G!==null)xe=G;else{var it=R.return;it!==null?(xe=it,_c(it)):xe=null}break e}}He=0,fi=null,Rr(e,i,h,5);break;case 6:He=0,fi=null,Rr(e,i,h,6);break;case 8:ch(),rn=6;break t;default:throw Error(a(462))}}Ny();break}catch(dt){hg(e,dt)}while(!0);return fa=bs=null,B.H=o,B.A=u,Pe=s,xe!==null?0:(qe=null,Me=0,Il(),rn)}function Ny(){for(;xe!==null&&!Yt();)gg(xe)}function gg(e){var i=H0(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,i===null?_c(e):xe=i}function _g(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=P0(s,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=P0(s,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:Tf(i);default:V0(s,i),i=xe=mm(i,Sa),i=H0(s,i,Sa)}e.memoizedProps=e.pendingProps,i===null?_c(e):xe=i}function Rr(e,i,s,o){fa=bs=null,Tf(i),gr=null,Ro=0;var u=i.return;try{if(Sy(e,u,i,s,Me)){rn=1,ac(e,Si(s,e.current)),xe=null;return}}catch(h){if(u!==null)throw xe=u,h;rn=1,ac(e,Si(s,e.current)),xe=null;return}i.flags&32768?(Ee||o===1?e=!0:br||(Me&536870912)!==0?e=!1:(Ya=e=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),vg(i,e)):_c(i)}function _c(e){var i=e;do{if((i.flags&32768)!==0){vg(i,Ya);return}e=i.return;var s=Ey(i.alternate,i,Sa);if(s!==null){xe=s;return}if(i=i.sibling,i!==null){xe=i;return}xe=i=e}while(i!==null);rn===0&&(rn=5)}function vg(e,i){do{var s=Ty(e.alternate,e);if(s!==null){s.flags&=32767,xe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){xe=e;return}xe=e=s}while(e!==null);rn=6,xe=null}function xg(e,i,s,o,u,h,y,R,G){e.cancelPendingCommit=null;do vc();while(Mn!==0);if((Pe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=Qu,Oi(e,s,h,y,R,G),e===qe&&(xe=qe=null,Me=0),Tr=i,Qa=e,Ma=s,rh=h,oh=u,lg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,By(ft,function(){return Eg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=V.p,V.p=2,y=Pe,Pe|=4;try{Ay(e,i,s)}finally{Pe=y,V.p=u,B.T=o}}Mn=1,yg(),Sg(),Mg()}}function yg(){if(Mn===1){Mn=0;var e=Qa,i=Tr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var o=V.p;V.p=2;var u=Pe;Pe|=4;try{tg(i,e);var h=Mh,y=rm(e.containerInfo),R=h.focusedElem,G=h.selectionRange;if(y!==R&&R&&R.ownerDocument&&sm(R.ownerDocument.documentElement,R)){if(G!==null&&Ku(R)){var it=G.start,dt=G.end;if(dt===void 0&&(dt=it),"selectionStart"in R)R.selectionStart=it,R.selectionEnd=Math.min(dt,R.value.length);else{var vt=R.ownerDocument||document,rt=vt&&vt.defaultView||window;if(rt.getSelection){var ct=rt.getSelection(),Wt=R.textContent.length,ee=Math.min(G.start,Wt),Ke=G.end===void 0?ee:Math.min(G.end,Wt);!ct.extend&&ee>Ke&&(y=Ke,Ke=ee,ee=y);var J=am(R,ee),X=am(R,Ke);if(J&&X&&(ct.rangeCount!==1||ct.anchorNode!==J.node||ct.anchorOffset!==J.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var et=vt.createRange();et.setStart(J.node,J.offset),ct.removeAllRanges(),ee>Ke?(ct.addRange(et),ct.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ct.addRange(et))}}}}for(vt=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var mt=vt[R];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Dc=!!Sh,Mh=Sh=null}finally{Pe=u,V.p=o,B.T=s}}e.current=i,Mn=2}}function Sg(){if(Mn===2){Mn=0;var e=Qa,i=Tr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var o=V.p;V.p=2;var u=Pe;Pe|=4;try{j0(e,i.alternate,i)}finally{Pe=u,V.p=o,B.T=s}}Mn=3}}function Mg(){if(Mn===4||Mn===3){Mn=0,P();var e=Qa,i=Tr,s=Ma,o=lg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Mn=5:(Mn=0,Tr=Qa=null,bg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Za=null),Js(s),i=i.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=B.T,u=V.p,V.p=2,B.T=null;try{for(var h=e.onRecoverableError,y=0;y<o.length;y++){var R=o[y];h(R.value,{componentStack:R.stack})}}finally{B.T=i,V.p=u}}(Ma&3)!==0&&vc(),Ji(e),u=e.pendingLanes,(s&261930)!==0&&(u&42)!==0?e===lh?Wo++:(Wo=0,lh=e):Wo=0,Xo(0)}}function bg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,To(i)))}function vc(){return yg(),Sg(),Mg(),Eg()}function Eg(){if(Mn!==5)return!1;var e=Qa,i=rh;rh=0;var s=Js(Ma),o=B.T,u=V.p;try{V.p=32>s?32:s,B.T=null,s=oh,oh=null;var h=Qa,y=Ma;if(Mn=0,Tr=Qa=null,Ma=0,(Pe&6)!==0)throw Error(a(331));var R=Pe;if(Pe|=4,sg(h.current),ng(h,h.current,y,s),Pe=R,Xo(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(Et,h)}catch{}return!0}finally{V.p=u,B.T=o,bg(e,i)}}function Tg(e,i,s){i=Si(s,i),i=Hf(e.stateNode,i,2),e=Wa(e,i,2),e!==null&&(Vn(e,2),Ji(e))}function Ge(e,i,s){if(e.tag===3)Tg(e,e,s);else for(;i!==null;){if(i.tag===3){Tg(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){e=Si(s,e),s=A0(2),o=Wa(i,s,2),o!==null&&(R0(s,o,i,e),Vn(o,2),Ji(o));break}}i=i.return}}function fh(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new Cy;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(ih=!0,u.add(s),e=Py.bind(null,e,i,s),i.then(e,e))}function Py(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,qe===e&&(Me&s)===s&&(rn===4||rn===3&&(Me&62914560)===Me&&300>E()-hc?(Pe&2)===0&&Ar(e,0):ah|=s,Er===Me&&(Er=0)),Ji(e)}function Ag(e,i){i===0&&(i=ze()),e=ys(e,i),e!==null&&(Vn(e,i),Ji(e))}function Oy(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Ag(e,s)}function Iy(e,i){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),Ag(e,s)}function By(e,i){return Te(e,i)}var xc=null,wr=null,hh=!1,yc=!1,dh=!1,$a=0;function Ji(e){e!==wr&&e.next===null&&(wr===null?xc=wr=e:wr=wr.next=e),yc=!0,hh||(hh=!0,Fy())}function Xo(e,i){if(!dh&&yc){dh=!0;do for(var s=!1,o=xc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Bt(42|e)+1)-1,h&=u&~(y&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,Dg(o,h))}else h=Me,h=xt(o,o===qe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||wt(o,h)||(s=!0,Dg(o,h));o=o.next}while(s);dh=!1}}function zy(){Rg()}function Rg(){yc=hh=!1;var e=0;$a!==0&&jy()&&(e=$a);for(var i=E(),s=null,o=xc;o!==null;){var u=o.next,h=wg(o,i);h===0?(o.next=null,s===null?xc=u:s.next=u,u===null&&(wr=s)):(s=o,(e!==0||(h&3)!==0)&&(yc=!0)),o=u}Mn!==0&&Mn!==5||Xo(e),$a!==0&&($a=0)}function wg(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var y=31-Bt(h),R=1<<y,G=u[y];G===-1?((R&s)===0||(R&o)!==0)&&(u[y]=ae(R,i)):G<=i&&(e.expiredLanes|=R),h&=~R}if(i=qe,s=Me,s=xt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ie(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||wt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&Ie(o),Js(s)){case 2:case 8:s=yt;break;case 32:s=ft;break;case 268435456:s=Dt;break;default:s=ft}return o=Cg.bind(null,e),s=Te(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&Ie(o),e.callbackPriority=2,e.callbackNode=null,2}function Cg(e,i){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(vc()&&e.callbackNode!==s)return null;var o=Me;return o=xt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ug(e,o,i),wg(e,E()),e.callbackNode!=null&&e.callbackNode===s?Cg.bind(null,e):null)}function Dg(e,i){if(vc())return null;ug(e,i,!0)}function Fy(){Qy(function(){(Pe&6)!==0?Te(pt,zy):Rg()})}function ph(){if($a===0){var e=dr;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),$a=e}return $a}function Lg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wl(""+e)}function Ug(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Hy(e,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var h=Lg((u[Cn]||null).action),y=o.submitter;y&&(i=(i=y[Cn]||null)?Lg(i.formAction):y.getAttribute("formAction"),i!==null&&(h=i,y=null));var R=new Ul("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var G=y?Ug(u,y):new FormData(u);Pf(s,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(R.preventDefault(),G=y?Ug(u,y):new FormData(u),Pf(s,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var mh=0;mh<Zu.length;mh++){var gh=Zu[mh],Gy=gh.toLowerCase(),Vy=gh[0].toUpperCase()+gh.slice(1);zi(Gy,"on"+Vy)}zi(cm,"onAnimationEnd"),zi(um,"onAnimationIteration"),zi(fm,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(ay,"onTransitionRun"),zi(sy,"onTransitionStart"),zi(ry,"onTransitionCancel"),zi(hm,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function Ng(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],u=o.event;o=o.listeners;t:{var h=void 0;if(i)for(var y=o.length-1;0<=y;y--){var R=o[y],G=R.instance,it=R.currentTarget;if(R=R.listener,G!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=it;try{h(u)}catch(dt){Ol(dt)}u.currentTarget=null,h=G}else for(y=0;y<o.length;y++){if(R=o[y],G=R.instance,it=R.currentTarget,R=R.listener,G!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=it;try{h(u)}catch(dt){Ol(dt)}u.currentTarget=null,h=G}}}}function ye(e,i){var s=i[$s];s===void 0&&(s=i[$s]=new Set);var o=e+"__bubble";s.has(o)||(Pg(i,e,2,!1),s.add(o))}function _h(e,i,s){var o=0;i&&(o|=4),Pg(s,e,o,i)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function vh(e){if(!e[Sc]){e[Sc]=!0,Q.forEach(function(s){s!=="selectionchange"&&(ky.has(s)||_h(s,!1,e),_h(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Sc]||(i[Sc]=!0,_h("selectionchange",!1,i))}}function Pg(e,i,s,o){switch(c_(i)){case 2:var u=_S;break;case 8:u=vS;break;default:u=Nh}s=u.bind(null,i,s,e),u=void 0,!Bu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function xh(e,i,s,o,u){var h=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=Pa(R),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){o=h=y;continue t}R=R.parentNode}}o=o.return}Fp(function(){var it=h,dt=Ou(s),vt=[];t:{var rt=dm.get(e);if(rt!==void 0){var ct=Ul,Wt=e;switch(e){case"keypress":if(Dl(s)===0)break t;case"keydown":case"keyup":ct=Ix;break;case"focusin":Wt="focus",ct=Gu;break;case"focusout":Wt="blur",ct=Gu;break;case"beforeblur":case"afterblur":ct=Gu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Fx;break;case cm:case um:case fm:ct=Rx;break;case hm:ct=Gx;break;case"scroll":case"scrollend":ct=Mx;break;case"wheel":ct=kx;break;case"copy":case"cut":case"paste":ct=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Wp;break;case"toggle":case"beforetoggle":ct=Xx}var ee=(i&4)!==0,Ke=!ee&&(e==="scroll"||e==="scrollend"),J=ee?rt!==null?rt+"Capture":null:rt;ee=[];for(var X=it,et;X!==null;){var mt=X;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||J===null||(mt=po(X,J),mt!=null&&ee.push(qo(X,mt,et))),Ke)break;X=X.return}0<ee.length&&(rt=new ct(rt,Wt,null,s,dt),vt.push({event:rt,listeners:ee}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",rt&&s!==Pu&&(Wt=s.relatedTarget||s.fromElement)&&(Pa(Wt)||Wt[Ii]))break t;if((ct||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ct?(Wt=s.relatedTarget||s.toElement,ct=it,Wt=Wt?Pa(Wt):null,Wt!==null&&(Ke=c(Wt),ee=Wt.tag,Wt!==Ke||ee!==5&&ee!==27&&ee!==6)&&(Wt=null)):(ct=null,Wt=it),ct!==Wt)){if(ee=Vp,mt="onMouseLeave",J="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Wp,mt="onPointerLeave",J="onPointerEnter",X="pointer"),Ke=ct==null?rt:gs(ct),et=Wt==null?rt:gs(Wt),rt=new ee(mt,X+"leave",ct,s,dt),rt.target=Ke,rt.relatedTarget=et,mt=null,Pa(dt)===it&&(ee=new ee(J,X+"enter",Wt,s,dt),ee.target=et,ee.relatedTarget=Ke,mt=ee),Ke=mt,ct&&Wt)e:{for(ee=Wy,J=ct,X=Wt,et=0,mt=J;mt;mt=ee(mt))et++;mt=0;for(var Jt=X;Jt;Jt=ee(Jt))mt++;for(;0<et-mt;)J=ee(J),et--;for(;0<mt-et;)X=ee(X),mt--;for(;et--;){if(J===X||X!==null&&J===X.alternate){ee=J;break e}J=ee(J),X=ee(X)}ee=null}else ee=null;ct!==null&&Og(vt,rt,ct,ee,!1),Wt!==null&&Ke!==null&&Og(vt,Ke,Wt,ee,!0)}}t:{if(rt=it?gs(it):window,ct=rt.nodeName&&rt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&rt.type==="file")var Ce=Jp;else if(Zp(rt))if($p)Ce=ey;else{Ce=$x;var jt=Jx}else ct=rt.nodeName,!ct||ct.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&Bi(it.elementType)&&(Ce=Jp):Ce=ty;if(Ce&&(Ce=Ce(e,it))){Qp(vt,Ce,s,dt);break t}jt&&jt(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&Ln(rt,"number",rt.value)}switch(jt=it?gs(it):window,e){case"focusin":(Zp(jt)||jt.contentEditable==="true")&&(sr=jt,qu=it,Mo=null);break;case"focusout":Mo=qu=sr=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,om(vt,s,dt);break;case"selectionchange":if(iy)break;case"keydown":case"keyup":om(vt,s,dt)}var pe;if(ku)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else ar?Yp(e,s)&&(be="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(be="onCompositionStart");be&&(Xp&&s.locale!=="ko"&&(ar||be!=="onCompositionStart"?be==="onCompositionEnd"&&ar&&(pe=Hp()):(Ba=dt,zu="value"in Ba?Ba.value:Ba.textContent,ar=!0)),jt=Mc(it,be),0<jt.length&&(be=new kp(be,e,null,s,dt),vt.push({event:be,listeners:jt}),pe?be.data=pe:(pe=jp(s),pe!==null&&(be.data=pe)))),(pe=qx?Yx(e,s):jx(e,s))&&(be=Mc(it,"onBeforeInput"),0<be.length&&(jt=new kp("onBeforeInput","beforeinput",null,s,dt),vt.push({event:jt,listeners:be}),jt.data=pe)),Hy(vt,e,it,s,dt)}Ng(vt,i)})}function qo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Mc(e,i){for(var s=i+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=po(e,s),u!=null&&o.unshift(qo(e,u,h)),u=po(e,i),u!=null&&o.push(qo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Wy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Og(e,i,s,o,u){for(var h=i._reactName,y=[];s!==null&&s!==o;){var R=s,G=R.alternate,it=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||it===null||(G=it,u?(it=po(s,h),it!=null&&y.unshift(qo(s,it,G))):u||(it=po(s,h),it!=null&&y.push(qo(s,it,G)))),s=s.return}y.length!==0&&e.push({event:i,listeners:y})}var Xy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function Ig(e){return(typeof e=="string"?e:""+e).replace(Xy,`
`).replace(Ky,"")}function Bg(e,i){return i=Ig(i),Ig(e)===i}function Xe(e,i,s,o,u,h){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Sn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Sn(e,""+o);break;case"className":$t(e,"class",o);break;case"tabIndex":$t(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$t(e,s,o);break;case"style":er(e,o,h);break;case"data":if(i!=="object"){$t(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=wl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Xe(e,i,"name",u.name,u,null),Xe(e,i,"formEncType",u.formEncType,u,null),Xe(e,i,"formMethod",u.formMethod,u,null),Xe(e,i,"formTarget",u.formTarget,u,null)):(Xe(e,i,"encType",u.encType,u,null),Xe(e,i,"method",u.method,u,null),Xe(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=wl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=oa);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=wl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Kt(e,"popover",o);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Kt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=yx.get(s)||s,Kt(e,s,o))}}function yh(e,i,s,o,u,h){switch(s){case"style":er(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Sn(e,o):(typeof o=="number"||typeof o=="bigint")&&Sn(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),h=e[Cn]||null,h=h!=null?h[s]:null,typeof h=="function"&&e.removeEventListener(i,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,u);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Kt(e,s,o)}}}function zn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,h;for(h in s)if(s.hasOwnProperty(h)){var y=s[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xe(e,i,h,y,s,null)}}u&&Xe(e,i,"srcSet",s.srcSet,s,null),o&&Xe(e,i,"src",s.src,s,null);return;case"input":ye("invalid",e);var R=h=y=u=null,G=null,it=null;for(o in s)if(s.hasOwnProperty(o)){var dt=s[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":y=dt;break;case"checked":G=dt;break;case"defaultChecked":it=dt;break;case"value":h=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:Xe(e,i,o,dt,s,null)}}ra(e,h,R,G,it,y,u,!1);return;case"select":ye("invalid",e),o=y=h=null;for(u in s)if(s.hasOwnProperty(u)&&(R=s[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:Xe(e,i,u,R,s,null)}i=h,s=y,e.multiple=!!o,i!=null?xi(e,!!o,i,!1):s!=null&&xi(e,!!o,s,!0);return;case"textarea":ye("invalid",e),h=u=o=null;for(y in s)if(s.hasOwnProperty(y)&&(R=s[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Xe(e,i,y,R,s,null)}Un(e,o,u,h);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(o=s[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,i,G,o,s,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Ko.length;o++)ye(Ko[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in s)if(s.hasOwnProperty(it)&&(o=s[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Xe(e,i,it,o,s,null)}return;default:if(Bi(i)){for(dt in s)s.hasOwnProperty(dt)&&(o=s[dt],o!==void 0&&yh(e,i,dt,o,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(o=s[R],o!=null&&Xe(e,i,R,o,s,null))}function qy(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,R=null,G=null,it=null,dt=null;for(ct in s){var vt=s[ct];if(s.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=vt;default:o.hasOwnProperty(ct)||Xe(e,i,ct,null,o,vt)}}for(var rt in o){var ct=o[rt];if(vt=s[rt],o.hasOwnProperty(rt)&&(ct!=null||vt!=null))switch(rt){case"type":h=ct;break;case"name":u=ct;break;case"checked":it=ct;break;case"defaultChecked":dt=ct;break;case"value":y=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==vt&&Xe(e,i,rt,ct,o,vt)}}Dn(e,y,R,G,it,dt,h,u);return;case"select":ct=y=R=rt=null;for(h in s)if(G=s[h],s.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":ct=G;default:o.hasOwnProperty(h)||Xe(e,i,h,null,o,G)}for(u in o)if(h=o[u],G=s[u],o.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":rt=h;break;case"defaultValue":R=h;break;case"multiple":y=h;default:h!==G&&Xe(e,i,u,h,o,G)}i=R,s=y,o=ct,rt!=null?xi(e,!!s,rt,!1):!!o!=!!s&&(i!=null?xi(e,!!s,i,!0):xi(e,!!s,s?[]:"",!1));return;case"textarea":ct=rt=null;for(R in s)if(u=s[R],s.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xe(e,i,R,null,o,u)}for(y in o)if(u=o[y],h=s[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":rt=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&Xe(e,i,y,u,o,h)}Fe(e,rt,ct);return;case"option":for(var Wt in s)if(rt=s[Wt],s.hasOwnProperty(Wt)&&rt!=null&&!o.hasOwnProperty(Wt))switch(Wt){case"selected":e.selected=!1;break;default:Xe(e,i,Wt,null,o,rt)}for(G in o)if(rt=o[G],ct=s[G],o.hasOwnProperty(G)&&rt!==ct&&(rt!=null||ct!=null))switch(G){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Xe(e,i,G,rt,o,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in s)rt=s[ee],s.hasOwnProperty(ee)&&rt!=null&&!o.hasOwnProperty(ee)&&Xe(e,i,ee,null,o,rt);for(it in o)if(rt=o[it],ct=s[it],o.hasOwnProperty(it)&&rt!==ct&&(rt!=null||ct!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:Xe(e,i,it,rt,o,ct)}return;default:if(Bi(i)){for(var Ke in s)rt=s[Ke],s.hasOwnProperty(Ke)&&rt!==void 0&&!o.hasOwnProperty(Ke)&&yh(e,i,Ke,void 0,o,rt);for(dt in o)rt=o[dt],ct=s[dt],!o.hasOwnProperty(dt)||rt===ct||rt===void 0&&ct===void 0||yh(e,i,dt,rt,o,ct);return}}for(var J in s)rt=s[J],s.hasOwnProperty(J)&&rt!=null&&!o.hasOwnProperty(J)&&Xe(e,i,J,null,o,rt);for(vt in o)rt=o[vt],ct=s[vt],!o.hasOwnProperty(vt)||rt===ct||rt==null&&ct==null||Xe(e,i,vt,rt,o,ct)}function zg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Yy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],h=u.transferSize,y=u.initiatorType,R=u.duration;if(h&&R&&zg(y)){for(y=0,R=u.responseEnd,o+=1;o<s.length;o++){var G=s[o],it=G.startTime;if(it>R)break;var dt=G.transferSize,vt=G.initiatorType;dt&&zg(vt)&&(G=G.responseEnd,y+=dt*(G<R?1:(R-it)/(G-it)))}if(--o,i+=8*(h+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Sh=null,Mh=null;function bc(e){return e.nodeType===9?e:e.ownerDocument}function Fg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function bh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Eh=null;function jy(){var e=window.event;return e&&e.type==="popstate"?e===Eh?!1:(Eh=e,!0):(Eh=null,!1)}var Gg=typeof setTimeout=="function"?setTimeout:void 0,Zy=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,Qy=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(e){return Vg.resolve(null).then(e).catch(Jy)}:Gg;function Jy(e){setTimeout(function(){throw e})}function ts(e){return e==="head"}function kg(e,i){var s=i,o=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(u),Ur(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")Yo(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Yo(s);for(var h=s.firstChild;h;){var y=h.nextSibling,R=h.nodeName;h[ms]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=y}}else s==="body"&&Yo(e.ownerDocument.body);s=u}while(s);Ur(i)}function Wg(e,i){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function Th(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Th(s),ho(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function $y(e,i,s,o){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ms])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ai(e.nextSibling),e===null)break}return null}function tS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Ai(e.nextSibling),e===null))return null;return e}function Xg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ai(e.nextSibling),e===null))return null;return e}function Ah(e){return e.data==="$?"||e.data==="$~"}function Rh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function eS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ai(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var wh=null;function Kg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return Ai(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function qg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function Yg(e,i,s){switch(i=bc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Yo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ho(e)}var Ri=new Map,jg=new Set;function Ec(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ba=V.d;V.d={f:nS,r:iS,D:aS,C:sS,L:rS,m:oS,X:cS,S:lS,M:uS};function nS(){var e=ba.f(),i=mc();return e||i}function iS(e){var i=Oa(e);i!==null&&i.tag===5&&i.type==="form"?h0(i):ba.r(e)}var Cr=typeof document>"u"?null:document;function Zg(e,i,s){var o=Cr;if(o&&typeof i=="string"&&i){var u=re(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),jg.has(u)||(jg.add(u),e={rel:e,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),zn(i,"link",e),w(i),o.head.appendChild(i)))}}function aS(e){ba.D(e),Zg("dns-prefetch",e,null)}function sS(e,i){ba.C(e,i),Zg("preconnect",e,i)}function rS(e,i,s){ba.L(e,i,s);var o=Cr;if(o&&e&&i){var u='link[rel="preload"][as="'+re(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+re(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+re(s.imageSizes)+'"]')):u+='[href="'+re(e)+'"]';var h=u;switch(i){case"style":h=Dr(e);break;case"script":h=Lr(e)}Ri.has(h)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ri.set(h,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(jo(h))||i==="script"&&o.querySelector(Zo(h))||(i=o.createElement("link"),zn(i,"link",e),w(i),o.head.appendChild(i)))}}function oS(e,i){ba.m(e,i);var s=Cr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+re(o)+'"][href="'+re(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Lr(e)}if(!Ri.has(h)&&(e=g({rel:"modulepreload",href:e},i),Ri.set(h,e),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Zo(h)))return}o=s.createElement("link"),zn(o,"link",e),w(o),s.head.appendChild(o)}}}function lS(e,i,s){ba.S(e,i,s);var o=Cr;if(o&&e){var u=Ia(o).hoistableStyles,h=Dr(e);i=i||"default";var y=u.get(h);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(jo(h)))R.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ri.get(h))&&Ch(e,s);var G=y=o.createElement("link");w(G),zn(G,"link",e),G._p=new Promise(function(it,dt){G.onload=it,G.onerror=dt}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Tc(y,i,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(h,y)}}}function cS(e,i){ba.X(e,i);var s=Cr;if(s&&e){var o=Ia(s).hoistableScripts,u=Lr(e),h=o.get(u);h||(h=s.querySelector(Zo(u)),h||(e=g({src:e,async:!0},i),(i=Ri.get(u))&&Dh(e,i),h=s.createElement("script"),w(h),zn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function uS(e,i){ba.M(e,i);var s=Cr;if(s&&e){var o=Ia(s).hoistableScripts,u=Lr(e),h=o.get(u);h||(h=s.querySelector(Zo(u)),h||(e=g({src:e,async:!0,type:"module"},i),(i=Ri.get(u))&&Dh(e,i),h=s.createElement("script"),w(h),zn(h,"link",e),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Qg(e,i,s,o){var u=(u=nt.current)?Ec(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Dr(s.href),s=Ia(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Dr(s.href);var h=Ia(u).hoistableStyles,y=h.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,y),(h=u.querySelector(jo(e)))&&!h._p&&(y.instance=h,y.state.loading=5),Ri.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ri.set(e,s),h||fS(u,e,s,y.state))),i&&o===null)throw Error(a(528,""));return y}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Lr(s),s=Ia(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Dr(e){return'href="'+re(e)+'"'}function jo(e){return'link[rel="stylesheet"]['+e+"]"}function Jg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function fS(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),zn(i,"link",s),w(i),e.head.appendChild(i))}function Lr(e){return'[src="'+re(e)+'"]'}function Zo(e){return"script[async]"+e}function $g(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+re(s.href)+'"]');if(o)return i.instance=o,w(o),o;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),w(o),zn(o,"style",u),Tc(o,s.precedence,e),i.instance=o;case"stylesheet":u=Dr(s.href);var h=e.querySelector(jo(u));if(h)return i.state.loading|=4,i.instance=h,w(h),h;o=Jg(s),(u=Ri.get(u))&&Ch(o,u),h=(e.ownerDocument||e).createElement("link"),w(h);var y=h;return y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),zn(h,"link",o),i.state.loading|=4,Tc(h,s.precedence,e),i.instance=h;case"script":return h=Lr(s.src),(u=e.querySelector(Zo(h)))?(i.instance=u,w(u),u):(o=s,(u=Ri.get(h))&&(o=g({},s),Dh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),w(u),zn(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Tc(o,s.precedence,e));return i.instance}function Tc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===i)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Ch(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Dh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Ac=null;function t_(e,i,s){if(Ac===null){var o=new Map,u=Ac=new Map;u.set(s,o)}else u=Ac,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var h=s[u];if(!(h[ms]||h[pn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(i)||"";y=e+y;var R=o.get(y);R?R.push(h):o.set(y,[h])}}return o}function e_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function hS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function n_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dS(e,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Dr(o.href),h=i.querySelector(jo(u));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Rc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=h,w(h);return}h=i.ownerDocument||i,o=Jg(o),(u=Ri.get(u))&&Ch(o,u),h=h.createElement("link"),w(h);var y=h;y._p=new Promise(function(R,G){y.onload=R,y.onerror=G}),zn(h,"link",o),s.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Rc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Lh=0;function pS(e,i){return e.stylesheets&&e.count===0&&Cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&Cc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+i);0<e.imgBytes&&Lh===0&&(Lh=62500*Yy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Cc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Lh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wc=null;function Cc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wc=new Map,i.forEach(mS,e),wc=null,Rc.call(e))}function mS(e,i){if(!(i.state.loading&4)){var s=wc.get(e);if(s)var o=s.get(null);else{s=new Map,wc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(s.set(y.dataset.precedence,y),o=y)}o&&s.set(null,o)}u=i.instance,y=u.getAttribute("data-precedence"),h=s.get(y)||o,h===o&&s.set(null,u),s.set(y,u),this.count++,o=Rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Qo={$$typeof:U,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function gS(e,i,s,o,u,h,y,R,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function i_(e,i,s,o,u,h,y,R,G,it,dt,vt){return e=new gS(e,i,s,y,G,it,dt,vt,R),i=1,h===!0&&(i|=24),h=li(3,null,null,i),e.current=h,h.stateNode=e,i=uf(),i.refCount++,e.pooledCache=i,i.refCount++,h.memoizedState={element:o,isDehydrated:s,cache:i},pf(h),e}function a_(e){return e?(e=lr,e):lr}function s_(e,i,s,o,u,h){u=a_(u),o.context===null?o.context=u:o.pendingContext=u,o=ka(i),o.payload={element:s},h=h===void 0?null:h,h!==null&&(o.callback=h),s=Wa(e,o,i),s!==null&&(ni(s,e,i),Co(s,e,i))}function r_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Uh(e,i){r_(e,i),(e=e.alternate)&&r_(e,i)}function o_(e){if(e.tag===13||e.tag===31){var i=ys(e,67108864);i!==null&&ni(i,e,67108864),Uh(e,67108864)}}function l_(e){if(e.tag===13||e.tag===31){var i=di();i=co(i);var s=ys(e,i);s!==null&&ni(s,e,i),Uh(e,i)}}var Dc=!0;function _S(e,i,s,o){var u=B.T;B.T=null;var h=V.p;try{V.p=2,Nh(e,i,s,o)}finally{V.p=h,B.T=u}}function vS(e,i,s,o){var u=B.T;B.T=null;var h=V.p;try{V.p=8,Nh(e,i,s,o)}finally{V.p=h,B.T=u}}function Nh(e,i,s,o){if(Dc){var u=Ph(o);if(u===null)xh(e,i,o,Lc,s),u_(e,o);else if(yS(u,e,i,s,o))o.stopPropagation();else if(u_(e,o),i&4&&-1<xS.indexOf(e)){for(;u!==null;){var h=Oa(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=bt(h.pendingLanes);if(y!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var G=1<<31-Bt(y);R.entanglements[1]|=G,y&=~G}Ji(h),(Pe&6)===0&&(dc=E()+500,Xo(0))}}break;case 31:case 13:R=ys(h,2),R!==null&&ni(R,h,2),mc(),Uh(h,2)}if(h=Ph(o),h===null&&xh(e,i,o,Lc,s),h===u)break;u=h}u!==null&&o.stopPropagation()}else xh(e,i,o,null,s)}}function Ph(e){return e=Ou(e),Oh(e)}var Lc=null;function Oh(e){if(Lc=null,e=Pa(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===31){if(e=d(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Lc=e,null}function c_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case pt:return 2;case yt:return 8;case ft:case Zt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var Ih=!1,es=null,ns=null,is=null,Jo=new Map,$o=new Map,as=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u_(e,i){switch(e){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":Jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(i.pointerId)}}function tl(e,i,s,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},i!==null&&(i=Oa(i),i!==null&&o_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function yS(e,i,s,o,u){switch(i){case"focusin":return es=tl(es,e,i,s,o,u),!0;case"dragenter":return ns=tl(ns,e,i,s,o,u),!0;case"mouseover":return is=tl(is,e,i,s,o,u),!0;case"pointerover":var h=u.pointerId;return Jo.set(h,tl(Jo.get(h)||null,e,i,s,o,u)),!0;case"gotpointercapture":return h=u.pointerId,$o.set(h,tl($o.get(h)||null,e,i,s,o,u)),!0}return!1}function f_(e){var i=Pa(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,Yi(e.priority,function(){l_(s)});return}}else if(i===31){if(i=d(s),i!==null){e.blockedOn=i,Yi(e.priority,function(){l_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Ph(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Pu=o,s.target.dispatchEvent(o),Pu=null}else return i=Oa(s),i!==null&&o_(i),e.blockedOn=s,!1;i.shift()}return!0}function h_(e,i,s){Uc(e)&&s.delete(i)}function SS(){Ih=!1,es!==null&&Uc(es)&&(es=null),ns!==null&&Uc(ns)&&(ns=null),is!==null&&Uc(is)&&(is=null),Jo.forEach(h_),$o.forEach(h_)}function Nc(e,i){e.blockedOn===i&&(e.blockedOn=null,Ih||(Ih=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,SS)))}var Pc=null;function d_(e){Pc!==e&&(Pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pc===e&&(Pc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(Oh(o||s)===null)continue;break}var h=Oa(s);h!==null&&(e.splice(i,3),i-=3,Pf(h,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function Ur(e){function i(G){return Nc(G,e)}es!==null&&Nc(es,e),ns!==null&&Nc(ns,e),is!==null&&Nc(is,e),Jo.forEach(i),$o.forEach(i);for(var s=0;s<as.length;s++){var o=as[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<as.length&&(s=as[0],s.blockedOn===null);)f_(s),s.blockedOn===null&&as.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],h=s[o+1],y=u[Cn]||null;if(typeof h=="function")y||d_(s);else if(y){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[Cn]||null)R=y.formAction;else if(Oh(u)!==null)continue}else R=y.action;typeof R=="function"?s[o+1]=R:(s.splice(o,3),o-=3),d_(s)}}}function p_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Bh(e){this._internalRoot=e}Oc.prototype.render=Bh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=di();s_(s,o,e,i,null,null)},Oc.prototype.unmount=Bh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;s_(e.current,2,null,e,null,null),mc(),i[Ii]=null}};function Oc(e){this._internalRoot=e}Oc.prototype.unstable_scheduleHydration=function(e){if(e){var i=uo();e={blockedOn:null,target:e,priority:i};for(var s=0;s<as.length&&i!==0&&i<as[s].priority;s++);as.splice(s,0,e),s===0&&f_(e)}};var m_=t.version;if(m_!=="19.2.3")throw Error(a(527,m_,"19.2.3"));V.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var MS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{Et=Ic.inject(MS),Tt=Ic}catch{}}return nl.createRoot=function(e,i){if(!l(e))throw Error(a(299));var s=!1,o="",u=M0,h=b0,y=E0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=i_(e,1,!1,null,null,s,o,null,u,h,y,p_),e[Ii]=i.current,vh(e),new Bh(i)},nl.hydrateRoot=function(e,i,s){if(!l(e))throw Error(a(299));var o=!1,u="",h=M0,y=b0,R=E0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(y=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=i_(e,1,!0,i,s??null,o,u,G,h,y,R,p_),i.context=a_(null),s=i.current,o=di(),o=co(o),u=ka(o),u.callback=null,Wa(s,u,o),s=o,i.current.lanes=s,Vn(i,s),Ji(i),e[Ii]=i.current,vh(e),new Oc(i)},nl.version="19.2.3",nl}var T_;function NS(){if(T_)return Hh.exports;T_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Hh.exports=US(),Hh.exports}var PS=NS();const OS=Pv(PS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yp="182",IS=0,A_=1,BS=2,hu=1,Ov=2,pl=3,ps=0,Kn=1,si=2,na=0,Jr=1,yn=2,R_=3,w_=4,zS=5,Gs=100,FS=101,HS=102,GS=103,VS=104,kS=200,WS=201,XS=202,KS=203,bd=204,Ed=205,qS=206,YS=207,jS=208,ZS=209,QS=210,JS=211,$S=212,tM=213,eM=214,Td=0,Ad=1,Rd=2,to=3,wd=4,Cd=5,Dd=6,Ld=7,Iv=0,nM=1,iM=2,ia=0,Bv=1,zv=2,Fv=3,Sp=4,Hv=5,Gv=6,Vv=7,kv=300,Ys=301,eo=302,Ud=303,Nd=304,wu=306,Pd=1e3,Ca=1001,Od=1002,Hn=1003,aM=1004,Bc=1005,wn=1006,Wh=1007,ks=1008,_i=1009,Wv=1010,Xv=1011,xl=1012,Mp=1013,aa=1014,qi=1015,Pi=1016,bp=1017,Ep=1018,yl=1020,Kv=35902,qv=35899,Yv=1021,jv=1022,Ni=1023,Na=1026,Ws=1027,Tp=1028,Ap=1029,no=1030,Rp=1031,wp=1033,du=33776,pu=33777,mu=33778,gu=33779,Id=35840,Bd=35841,zd=35842,Fd=35843,Hd=36196,Gd=37492,Vd=37496,kd=37488,Wd=37489,Xd=37490,Kd=37491,qd=37808,Yd=37809,jd=37810,Zd=37811,Qd=37812,Jd=37813,$d=37814,tp=37815,ep=37816,np=37817,ip=37818,ap=37819,sp=37820,rp=37821,op=36492,lp=36494,cp=36495,up=36283,fp=36284,hp=36285,dp=36286,sM=3200,Zv=0,rM=1,hs="",Di="srgb",io="srgb-linear",xu="linear",Ve="srgb",Nr=7680,C_=519,oM=512,lM=513,cM=514,Cp=515,uM=516,fM=517,Dp=518,hM=519,pp=35044,dM=35048,D_="300 es",ea=2e3,yu=2001;function Qv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pM(){const r=Su("canvas");return r.style.display="block",r}const L_={};function Mu(...r){const t="THREE."+r.shift();console.log(t,...r)}function oe(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Re(...r){const t="THREE."+r.shift();console.error(t,...r)}function Sl(...r){const t=r.join(" ");t in L_||(L_[t]=!0,oe(...r))}function mM(r,t,n){return new Promise(function(a,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class so{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const l=a[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let U_=1234567;const _l=Math.PI/180,Ml=180/Math.PI;function La(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[a&255]+Wn[a>>8&255]+Wn[a>>16&255]+Wn[a>>24&255]).toLowerCase()}function Se(r,t,n){return Math.max(t,Math.min(n,r))}function Lp(r,t){return(r%t+t)%t}function gM(r,t,n,a,l){return a+(r-t)*(l-a)/(n-t)}function _M(r,t,n){return r!==t?(n-r)/(t-r):0}function vl(r,t,n){return(1-n)*r+n*t}function vM(r,t,n,a){return vl(r,t,1-Math.exp(-n*a))}function xM(r,t=1){return t-Math.abs(Lp(r,t*2)-t)}function yM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*(3-2*r))}function SM(r,t,n){return r<=t?0:r>=n?1:(r=(r-t)/(n-t),r*r*r*(r*(r*6-15)+10))}function MM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function bM(r,t){return r+Math.random()*(t-r)}function EM(r){return r*(.5-Math.random())}function TM(r){r!==void 0&&(U_=r);let t=U_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function AM(r){return r*_l}function RM(r){return r*Ml}function wM(r){return(r&r-1)===0&&r!==0}function CM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function DM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function LM(r,t,n,a,l){const c=Math.cos,f=Math.sin,d=c(n/2),m=f(n/2),p=c((t+a)/2),_=f((t+a)/2),g=c((t-a)/2),x=f((t-a)/2),S=c((a-t)/2),b=f((a-t)/2);switch(l){case"XYX":r.set(d*_,m*g,m*x,d*p);break;case"YZY":r.set(m*x,d*_,m*g,d*p);break;case"ZXZ":r.set(m*g,m*x,d*_,d*p);break;case"XZX":r.set(d*_,m*b,m*S,d*p);break;case"YXY":r.set(m*S,d*_,m*b,d*p);break;case"ZYZ":r.set(m*b,m*S,d*_,d*p);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ki(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ke(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const N_={DEG2RAD:_l,RAD2DEG:Ml,generateUUID:La,clamp:Se,euclideanModulo:Lp,mapLinear:gM,inverseLerp:_M,lerp:vl,damp:vM,pingpong:xM,smoothstep:yM,smootherstep:SM,randInt:MM,randFloat:bM,randFloatSpread:EM,seededRandom:TM,degToRad:AM,radToDeg:RM,isPowerOfTwo:wM,ceilPowerOfTwo:CM,floorPowerOfTwo:DM,setQuaternionFromProperEuler:LM,normalize:ke,denormalize:Ki};class ne{constructor(t=0,n=0){ne.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6],this.y=l[1]*n+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*a-f*l+t.x,this.y=c*l+f*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class El{constructor(t=0,n=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=l}static slerpFlat(t,n,a,l,c,f,d){let m=a[l+0],p=a[l+1],_=a[l+2],g=a[l+3],x=c[f+0],S=c[f+1],b=c[f+2],A=c[f+3];if(d<=0){t[n+0]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g;return}if(d>=1){t[n+0]=x,t[n+1]=S,t[n+2]=b,t[n+3]=A;return}if(g!==A||m!==x||p!==S||_!==b){let M=m*x+p*S+_*b+g*A;M<0&&(x=-x,S=-S,b=-b,A=-A,M=-M);let v=1-d;if(M<.9995){const D=Math.acos(M),U=Math.sin(D);v=Math.sin(v*D)/U,d=Math.sin(d*D)/U,m=m*v+x*d,p=p*v+S*d,_=_*v+b*d,g=g*v+A*d}else{m=m*v+x*d,p=p*v+S*d,_=_*v+b*d,g=g*v+A*d;const D=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=D,p*=D,_*=D,g*=D}}t[n]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,l,c,f){const d=a[l],m=a[l+1],p=a[l+2],_=a[l+3],g=c[f],x=c[f+1],S=c[f+2],b=c[f+3];return t[n]=d*b+_*g+m*S-p*x,t[n+1]=m*b+_*x+p*g-d*S,t[n+2]=p*b+_*S+d*x-m*g,t[n+3]=_*b-d*g-m*x-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,l){return this._x=t,this._y=n,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(a/2),_=d(l/2),g=d(c/2),x=m(a/2),S=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=x*_*g+p*S*b,this._y=p*S*g-x*_*b,this._z=p*_*b+x*S*g,this._w=p*_*g-x*S*b;break;case"YXZ":this._x=x*_*g+p*S*b,this._y=p*S*g-x*_*b,this._z=p*_*b-x*S*g,this._w=p*_*g+x*S*b;break;case"ZXY":this._x=x*_*g-p*S*b,this._y=p*S*g+x*_*b,this._z=p*_*b+x*S*g,this._w=p*_*g-x*S*b;break;case"ZYX":this._x=x*_*g-p*S*b,this._y=p*S*g+x*_*b,this._z=p*_*b-x*S*g,this._w=p*_*g+x*S*b;break;case"YZX":this._x=x*_*g+p*S*b,this._y=p*S*g+x*_*b,this._z=p*_*b-x*S*g,this._w=p*_*g-x*S*b;break;case"XZY":this._x=x*_*g-p*S*b,this._y=p*S*g-x*_*b,this._z=p*_*b+x*S*g,this._w=p*_*g+x*S*b;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],l=n[4],c=n[8],f=n[1],d=n[5],m=n[9],p=n[2],_=n[6],g=n[10],x=a+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(a>d&&a>g){const S=2*Math.sqrt(1+a-d-g);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-a-g);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-a-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,n/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,l=t._y,c=t._z,f=t._w,d=n._x,m=n._y,p=n._z,_=n._w;return this._x=a*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-a*p,this._z=c*_+f*p+a*m-l*d,this._w=f*_-a*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,l=t._y,c=t._z,f=t._w,d=this.dot(t);d<0&&(a=-a,l=-l,c=-c,f=-f,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,n=Math.sin(n*p)/_,this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+l*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,n=0,a=0){F.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(P_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(P_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*l,this.y=c[1]*n+c[4]*a+c[7]*l,this.z=c[2]*n+c[5]*a+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,a=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*a),_=2*(d*n-c*l),g=2*(c*a-f*n);return this.x=n+m*p+f*g-d*_,this.y=a+m*_+d*p-c*g,this.z=l+m*g+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*l,this.y=c[1]*n+c[5]*a+c[9]*l,this.z=c[2]*n+c[6]*a+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,l=t.y,c=t.z,f=n.x,d=n.y,m=n.z;return this.x=l*m-c*d,this.y=c*f-a*m,this.z=a*d-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Xh.copy(this).projectOnVector(t),this.sub(Xh)}reflect(t){return this.sub(Xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Se(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return n*n+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const l=Math.sin(n)*t;return this.x=l*Math.sin(a),this.y=Math.cos(n)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xh=new F,P_=new El;class me{constructor(t,n,a,l,c,f,d,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,f,d,m,p)}set(t,n,a,l,c,f,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=n,_[4]=c,_[5]=m,_[6]=a,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,f=a[0],d=a[3],m=a[6],p=a[1],_=a[4],g=a[7],x=a[2],S=a[5],b=a[8],A=l[0],M=l[3],v=l[6],D=l[1],U=l[4],L=l[7],I=l[2],z=l[5],O=l[8];return c[0]=f*A+d*D+m*I,c[3]=f*M+d*U+m*z,c[6]=f*v+d*L+m*O,c[1]=p*A+_*D+g*I,c[4]=p*M+_*U+g*z,c[7]=p*v+_*L+g*O,c[2]=x*A+S*D+b*I,c[5]=x*M+S*U+b*z,c[8]=x*v+S*L+b*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return n*f*_-n*d*p-a*c*_+a*d*m+l*c*p-l*f*m}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*f-d*p,x=d*m-_*c,S=p*c-f*m,b=n*g+a*x+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=g*A,t[1]=(l*p-_*a)*A,t[2]=(d*a-l*f)*A,t[3]=x*A,t[4]=(_*n-l*m)*A,t[5]=(l*c-d*n)*A,t[6]=S*A,t[7]=(a*m-p*n)*A,t[8]=(f*n-a*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+n,0,0,1),this}scale(t,n){return this.premultiply(Kh.makeScale(t,n)),this}rotate(t){return this.premultiply(Kh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Kh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<9;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kh=new me,O_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UM(){const r={enabled:!0,workingColorSpace:io,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=$r(l.r),l.g=$r(l.g),l.b=$r(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===hs?xu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[io]:{primaries:t,whitePoint:a,transfer:xu,toXYZ:O_,fromXYZ:I_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Di},outputColorSpaceConfig:{drawingBufferColorSpace:Di}},[Di]:{primaries:t,whitePoint:a,transfer:Ve,toXYZ:O_,fromXYZ:I_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Di}}}),r}const we=UM();function Ua(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $r(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Pr;class NM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Pr===void 0&&(Pr=Su("canvas")),Pr.width=t.width,Pr.height=t.height;const l=Pr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),a=Pr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Su("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ua(c[f]/255)*255;return a.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ua(n[a]/255)*255):n[a]=Ua(n[a]);return{data:n,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let PM=0;class Up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=La(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(qh(l[f].image)):c.push(qh(l[f]))}else c=qh(l);a.url=c}return n||(t.images[this.uuid]=a),a}}function qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?NM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let OM=0;const Yh=new F;class qn extends so{constructor(t=qn.DEFAULT_IMAGE,n=qn.DEFAULT_MAPPING,a=Ca,l=Ca,c=wn,f=ks,d=Ni,m=_i,p=qn.DEFAULT_ANISOTROPY,_=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=La(),this.name="",this.source=new Up(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yh).x}get height(){return this.source.getSize(Yh).y}get depth(){return this.source.getSize(Yh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){oe(`Texture.setValues(): property '${n}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pd:t.x=t.x-Math.floor(t.x);break;case Ca:t.x=t.x<0?0:1;break;case Od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pd:t.y=t.y-Math.floor(t.y);break;case Ca:t.y=t.y<0?0:1;break;case Od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=kv;qn.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,n=0,a=0,l=1){ln.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,l){return this.x=t,this.y=n,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*a+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],S=m[5],b=m[9],A=m[2],M=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+A)<.1&&Math.abs(b+M)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,L=(S+1)/2,I=(v+1)/2,z=(_+x)/4,O=(g+A)/4,Y=(b+M)/4;return U>L&&U>I?U<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(U),l=z/a,c=O/a):L>I?L<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),a=z/l,c=Y/l):I<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),a=O/c,l=Y/c),this.set(a,l,c,n),this}let D=Math.sqrt((M-b)*(M-b)+(g-A)*(g-A)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(g-A)/D,this.z=(x-_)/D,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Se(this.x,t.x,n.x),this.y=Se(this.y,t.y,n.y),this.z=Se(this.z,t.z,n.z),this.w=Se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Se(this.x,t,n),this.y=Se(this.y,t,n),this.z=Se(this.z,t,n),this.w=Se(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Se(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IM extends so{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new ln(0,0,t,n),this.scissorTest=!1,this.viewport=new ln(0,0,t,n);const l={width:t,height:n,depth:a.depth},c=new qn(l);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=a,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Up(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends IM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Jv extends qn{constructor(t=null,n=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class BM extends qn{constructor(t=null,n=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(t=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Gi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Gi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Gi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Gi):Gi.fromBufferAttribute(c,f),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),zc.copy(a.boundingBox)),zc.applyMatrix4(t.matrixWorld),this.union(zc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(il),Fc.subVectors(this.max,il),Or.subVectors(t.a,il),Ir.subVectors(t.b,il),Br.subVectors(t.c,il),rs.subVectors(Ir,Or),os.subVectors(Br,Ir),Ns.subVectors(Or,Br);let n=[0,-rs.z,rs.y,0,-os.z,os.y,0,-Ns.z,Ns.y,rs.z,0,-rs.x,os.z,0,-os.x,Ns.z,0,-Ns.x,-rs.y,rs.x,0,-os.y,os.x,0,-Ns.y,Ns.x,0];return!jh(n,Or,Ir,Br,Fc)||(n=[1,0,0,0,1,0,0,0,1],!jh(n,Or,Ir,Br,Fc))?!1:(Hc.crossVectors(rs,os),n=[Hc.x,Hc.y,Hc.z],jh(n,Or,Ir,Br,Fc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ea=[new F,new F,new F,new F,new F,new F,new F,new F],Gi=new F,zc=new js,Or=new F,Ir=new F,Br=new F,rs=new F,os=new F,Ns=new F,il=new F,Fc=new F,Hc=new F,Ps=new F;function jh(r,t,n,a,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ps.fromArray(r,c);const d=l.x*Math.abs(Ps.x)+l.y*Math.abs(Ps.y)+l.z*Math.abs(Ps.z),m=t.dot(Ps),p=n.dot(Ps),_=a.dot(Ps);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const zM=new js,al=new F,Zh=new F;class ro{constructor(t=new F,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):zM.setFromPoints(t).getCenter(a);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;al.subVectors(t,this.center);const n=al.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),l=(a-this.radius)*.5;this.center.addScaledVector(al,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(al.copy(t.center).add(Zh)),this.expandByPoint(al.copy(t.center).sub(Zh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ta=new F,Qh=new F,Gc=new F,ls=new F,Jh=new F,Vc=new F,$h=new F;class $v{constructor(t=new F,n=new F(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ta)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ta.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ta.copy(this.origin).addScaledVector(this.direction,n),Ta.distanceToSquared(t))}distanceSqToSegment(t,n,a,l){Qh.copy(t).add(n).multiplyScalar(.5),Gc.copy(n).sub(t).normalize(),ls.copy(this.origin).sub(Qh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Gc),d=ls.dot(this.direction),m=-ls.dot(Gc),p=ls.lengthSq(),_=Math.abs(1-f*f);let g,x,S,b;if(_>0)if(g=f*m-d,x=f*d-m,b=c*_,g>=0)if(x>=-b)if(x<=b){const A=1/_;g*=A,x*=A,S=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+d)),S=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+d)),S=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(g=Math.max(0,-(f*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+d)),S=-g*g+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Qh).addScaledVector(Gc,x),S}intersectSphere(t,n){Ta.subVectors(t.center,this.origin);const a=Ta.dot(this.direction),l=Ta.dot(Ta)-a*a,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=a-f,m=a+f;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(a=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(a=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,f=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,f=(t.min.y-x.y)*_),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),a>m||d>l)||((d>a||a!==a)&&(a=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(a>=0?a:l,n)}intersectsBox(t){return this.intersectBox(t,Ta)!==null}intersectTriangle(t,n,a,l,c){Jh.subVectors(n,t),Vc.subVectors(a,t),$h.crossVectors(Jh,Vc);let f=this.direction.dot($h),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ls.subVectors(this.origin,t);const m=d*this.direction.dot(Vc.crossVectors(ls,Vc));if(m<0)return null;const p=d*this.direction.dot(Jh.cross(ls));if(p<0||m+p>f)return null;const _=-d*ls.dot($h);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,n,a,l,c,f,d,m,p,_,g,x,S,b,A,M){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,l,c,f,d,m,p,_,g,x,S,b,A,M)}set(t,n,a,l,c,f,d,m,p,_,g,x,S,b,A,M){const v=this.elements;return v[0]=t,v[4]=n,v[8]=a,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=S,v[7]=b,v[11]=A,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,l=1/zr.setFromMatrixColumn(t,0).length(),c=1/zr.setFromMatrixColumn(t,1).length(),f=1/zr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*l,n[1]=a[1]*l,n[2]=a[2]*l,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*f,n[9]=a[9]*f,n[10]=a[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,l=t.y,c=t.z,f=Math.cos(a),d=Math.sin(a),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=f*_,S=f*g,b=d*_,A=d*g;n[0]=m*_,n[4]=-m*g,n[8]=p,n[1]=S+b*p,n[5]=x-A*p,n[9]=-d*m,n[2]=A-x*p,n[6]=b+S*p,n[10]=f*m}else if(t.order==="YXZ"){const x=m*_,S=m*g,b=p*_,A=p*g;n[0]=x+A*d,n[4]=b*d-S,n[8]=f*p,n[1]=f*g,n[5]=f*_,n[9]=-d,n[2]=S*d-b,n[6]=A+x*d,n[10]=f*m}else if(t.order==="ZXY"){const x=m*_,S=m*g,b=p*_,A=p*g;n[0]=x-A*d,n[4]=-f*g,n[8]=b+S*d,n[1]=S+b*d,n[5]=f*_,n[9]=A-x*d,n[2]=-f*p,n[6]=d,n[10]=f*m}else if(t.order==="ZYX"){const x=f*_,S=f*g,b=d*_,A=d*g;n[0]=m*_,n[4]=b*p-S,n[8]=x*p+A,n[1]=m*g,n[5]=A*p+x,n[9]=S*p-b,n[2]=-p,n[6]=d*m,n[10]=f*m}else if(t.order==="YZX"){const x=f*m,S=f*p,b=d*m,A=d*p;n[0]=m*_,n[4]=A-x*g,n[8]=b*g+S,n[1]=g,n[5]=f*_,n[9]=-d*_,n[2]=-p*_,n[6]=S*g+b,n[10]=x-A*g}else if(t.order==="XZY"){const x=f*m,S=f*p,b=d*m,A=d*p;n[0]=m*_,n[4]=-g,n[8]=p*_,n[1]=x*g+A,n[5]=f*_,n[9]=S*g-b,n[2]=b*g-S,n[6]=d*_,n[10]=A*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(FM,t,HM)}lookAt(t,n,a){const l=this.elements;return pi.subVectors(t,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),cs.crossVectors(a,pi),cs.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),cs.crossVectors(a,pi)),cs.normalize(),kc.crossVectors(pi,cs),l[0]=cs.x,l[4]=kc.x,l[8]=pi.x,l[1]=cs.y,l[5]=kc.y,l[9]=pi.y,l[2]=cs.z,l[6]=kc.z,l[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,l=n.elements,c=this.elements,f=a[0],d=a[4],m=a[8],p=a[12],_=a[1],g=a[5],x=a[9],S=a[13],b=a[2],A=a[6],M=a[10],v=a[14],D=a[3],U=a[7],L=a[11],I=a[15],z=l[0],O=l[4],Y=l[8],T=l[12],C=l[1],H=l[5],K=l[9],j=l[13],lt=l[2],ut=l[6],B=l[10],V=l[14],at=l[3],Mt=l[7],St=l[11],N=l[15];return c[0]=f*z+d*C+m*lt+p*at,c[4]=f*O+d*H+m*ut+p*Mt,c[8]=f*Y+d*K+m*B+p*St,c[12]=f*T+d*j+m*V+p*N,c[1]=_*z+g*C+x*lt+S*at,c[5]=_*O+g*H+x*ut+S*Mt,c[9]=_*Y+g*K+x*B+S*St,c[13]=_*T+g*j+x*V+S*N,c[2]=b*z+A*C+M*lt+v*at,c[6]=b*O+A*H+M*ut+v*Mt,c[10]=b*Y+A*K+M*B+v*St,c[14]=b*T+A*j+M*V+v*N,c[3]=D*z+U*C+L*lt+I*at,c[7]=D*O+U*H+L*ut+I*Mt,c[11]=D*Y+U*K+L*B+I*St,c[15]=D*T+U*j+L*V+I*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],S=t[14],b=t[3],A=t[7],M=t[11],v=t[15],D=m*S-p*x,U=d*S-p*g,L=d*x-m*g,I=f*S-p*_,z=f*x-m*_,O=f*g-d*_;return n*(A*D-M*U+v*L)-a*(b*D-M*I+v*z)+l*(b*U-A*I+v*O)-c*(b*L-A*z+M*O)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],S=t[11],b=t[12],A=t[13],M=t[14],v=t[15],D=g*M*p-A*x*p+A*m*S-d*M*S-g*m*v+d*x*v,U=b*x*p-_*M*p-b*m*S+f*M*S+_*m*v-f*x*v,L=_*A*p-b*g*p+b*d*S-f*A*S-_*d*v+f*g*v,I=b*g*m-_*A*m-b*d*x+f*A*x+_*d*M-f*g*M,z=n*D+a*U+l*L+c*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return t[0]=D*O,t[1]=(A*x*c-g*M*c-A*l*S+a*M*S+g*l*v-a*x*v)*O,t[2]=(d*M*c-A*m*c+A*l*p-a*M*p-d*l*v+a*m*v)*O,t[3]=(g*m*c-d*x*c-g*l*p+a*x*p+d*l*S-a*m*S)*O,t[4]=U*O,t[5]=(_*M*c-b*x*c+b*l*S-n*M*S-_*l*v+n*x*v)*O,t[6]=(b*m*c-f*M*c-b*l*p+n*M*p+f*l*v-n*m*v)*O,t[7]=(f*x*c-_*m*c+_*l*p-n*x*p-f*l*S+n*m*S)*O,t[8]=L*O,t[9]=(b*g*c-_*A*c-b*a*S+n*A*S+_*a*v-n*g*v)*O,t[10]=(f*A*c-b*d*c+b*a*p-n*A*p-f*a*v+n*d*v)*O,t[11]=(_*d*c-f*g*c-_*a*p+n*g*p+f*a*S-n*d*S)*O,t[12]=I*O,t[13]=(_*A*l-b*g*l+b*a*x-n*A*x-_*a*M+n*g*M)*O,t[14]=(b*d*l-f*A*l-b*a*m+n*A*m+f*a*M-n*d*M)*O,t[15]=(f*g*l-_*d*l+_*a*m-n*g*m-f*a*x+n*d*x)*O,this}scale(t){const n=this.elements,a=t.x,l=t.y,c=t.z;return n[0]*=a,n[4]*=l,n[8]*=c,n[1]*=a,n[5]*=l,n[9]*=c,n[2]*=a,n[6]*=l,n[10]*=c,n[3]*=a,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,l))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),l=Math.sin(n),c=1-a,f=t.x,d=t.y,m=t.z,p=c*f,_=c*d;return this.set(p*f+a,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+a,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,l,c,f){return this.set(1,a,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,a){const l=this.elements,c=n._x,f=n._y,d=n._z,m=n._w,p=c+c,_=f+f,g=d+d,x=c*p,S=c*_,b=c*g,A=f*_,M=f*g,v=d*g,D=m*p,U=m*_,L=m*g,I=a.x,z=a.y,O=a.z;return l[0]=(1-(A+v))*I,l[1]=(S+L)*I,l[2]=(b-U)*I,l[3]=0,l[4]=(S-L)*z,l[5]=(1-(x+v))*z,l[6]=(M+D)*z,l[7]=0,l[8]=(b+U)*O,l[9]=(M-D)*O,l[10]=(1-(x+A))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,a){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let c=zr.set(l[0],l[1],l[2]).length();const f=zr.set(l[4],l[5],l[6]).length(),d=zr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Vi.copy(this);const p=1/c,_=1/f,g=1/d;return Vi.elements[0]*=p,Vi.elements[1]*=p,Vi.elements[2]*=p,Vi.elements[4]*=_,Vi.elements[5]*=_,Vi.elements[6]*=_,Vi.elements[8]*=g,Vi.elements[9]*=g,Vi.elements[10]*=g,n.setFromRotationMatrix(Vi),a.x=c,a.y=f,a.z=d,this}makePerspective(t,n,a,l,c,f,d=ea,m=!1){const p=this.elements,_=2*c/(n-t),g=2*c/(a-l),x=(n+t)/(n-t),S=(a+l)/(a-l);let b,A;if(m)b=c/(f-c),A=f*c/(f-c);else if(d===ea)b=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===yu)b=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,l,c,f,d=ea,m=!1){const p=this.elements,_=2/(n-t),g=2/(a-l),x=-(n+t)/(n-t),S=-(a+l)/(a-l);let b,A;if(m)b=1/(f-c),A=f/(f-c);else if(d===ea)b=-2/(f-c),A=-(f+c)/(f-c);else if(d===yu)b=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let l=0;l<16;l++)if(n[l]!==a[l])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const zr=new F,Vi=new Ye,FM=new F(0,0,0),HM=new F(1,1,1),cs=new F,kc=new F,pi=new F,B_=new Ye,z_=new El;class sa{constructor(t=0,n=0,a=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,l=this._order){return this._x=t,this._y=n,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return B_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(B_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return z_.setFromEuler(this),this.setFromQuaternion(z_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class tx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let GM=0;const F_=new F,Fr=new El,Aa=new Ye,Wc=new F,sl=new F,VM=new F,kM=new El,H_=new F(1,0,0),G_=new F(0,1,0),V_=new F(0,0,1),k_={type:"added"},WM={type:"removed"},Hr={type:"childadded",child:null},td={type:"childremoved",child:null};class cn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const t=new F,n=new sa,a=new El,l=new F(1,1,1);function c(){a.setFromEuler(n,!1)}function f(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new me}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Fr.setFromAxisAngle(t,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(t,n){return Fr.setFromAxisAngle(t,n),this.quaternion.premultiply(Fr),this}rotateX(t){return this.rotateOnAxis(H_,t)}rotateY(t){return this.rotateOnAxis(G_,t)}rotateZ(t){return this.rotateOnAxis(V_,t)}translateOnAxis(t,n){return F_.copy(t).applyQuaternion(this.quaternion),this.position.add(F_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(H_,t)}translateY(t){return this.translateOnAxis(G_,t)}translateZ(t){return this.translateOnAxis(V_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Aa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Wc.copy(t):Wc.set(t,n,a);const l=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Aa.lookAt(sl,Wc,this.up):Aa.lookAt(Wc,sl,this.up),this.quaternion.setFromRotationMatrix(Aa),l&&(Aa.extractRotation(l.matrixWorld),Fr.setFromRotationMatrix(Aa),this.quaternion.premultiply(Fr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(k_),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(WM),td.child=t,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(k_),Hr.child=t,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,t,VM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,kM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,l=n.length;a<l;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(n){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),g=f(t.shapes),x=f(t.skeletons),S=f(t.animations),b=f(t.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),x.length>0&&(a.skeletons=x),S.length>0&&(a.animations=S),b.length>0&&(a.nodes=b)}return a.object=l,a;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}cn.DEFAULT_UP=new F(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ki=new F,Ra=new F,ed=new F,wa=new F,Gr=new F,Vr=new F,W_=new F,nd=new F,id=new F,ad=new F,sd=new ln,rd=new ln,od=new ln;class Ui{constructor(t=new F,n=new F,a=new F){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,l){l.subVectors(a,n),ki.subVectors(t,n),l.cross(ki);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,a,l,c){ki.subVectors(l,n),Ra.subVectors(a,n),ed.subVectors(t,n);const f=ki.dot(ki),d=ki.dot(Ra),m=ki.dot(ed),p=Ra.dot(Ra),_=Ra.dot(ed),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,S=(p*m-d*_)*x,b=(f*_-d*m)*x;return c.set(1-S-b,b,S)}static containsPoint(t,n,a,l){return this.getBarycoord(t,n,a,l,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(t,n,a,l,c,f,d,m){return this.getBarycoord(t,n,a,l,wa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,wa.x),m.addScaledVector(f,wa.y),m.addScaledVector(d,wa.z),m)}static getInterpolatedAttribute(t,n,a,l,c,f){return sd.setScalar(0),rd.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(t,n),rd.fromBufferAttribute(t,a),od.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(sd,c.x),f.addScaledVector(rd,c.y),f.addScaledVector(od,c.z),f}static isFrontFacing(t,n,a,l){return ki.subVectors(a,n),Ra.subVectors(t,n),ki.cross(Ra).dot(l)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,l){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,a,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),ki.cross(Ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ui.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,l,c){return Ui.getInterpolation(t,this.a,this.b,this.c,n,a,l,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,l=this.b,c=this.c;let f,d;Gr.subVectors(l,a),Vr.subVectors(c,a),nd.subVectors(t,a);const m=Gr.dot(nd),p=Vr.dot(nd);if(m<=0&&p<=0)return n.copy(a);id.subVectors(t,l);const _=Gr.dot(id),g=Vr.dot(id);if(_>=0&&g<=_)return n.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return f=m/(m-_),n.copy(a).addScaledVector(Gr,f);ad.subVectors(t,c);const S=Gr.dot(ad),b=Vr.dot(ad);if(b>=0&&S<=b)return n.copy(c);const A=S*p-m*b;if(A<=0&&p>=0&&b<=0)return d=p/(p-b),n.copy(a).addScaledVector(Vr,d);const M=_*b-S*g;if(M<=0&&g-_>=0&&S-b>=0)return W_.subVectors(c,l),d=(g-_)/(g-_+(S-b)),n.copy(l).addScaledVector(W_,d);const v=1/(M+A+x);return f=A*v,d=x*v,n.copy(a).addScaledVector(Gr,f).addScaledVector(Vr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function ld(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class se{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,n),this}setRGB(t,n,a,l=we.workingColorSpace){return this.r=t,this.g=n,this.b=a,we.colorSpaceToWorking(this,l),this}setHSL(t,n,a,l=we.workingColorSpace){if(t=Lp(t,1),n=Se(n,0,1),a=Se(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,f=2*a-c;this.r=ld(f,c,t+1/3),this.g=ld(f,c,t),this.b=ld(f,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,n=Di){function a(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:oe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Di){const a=ex[t.toLowerCase()];return a!==void 0?this.setHex(a,n):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ua(t.r),this.g=Ua(t.g),this.b=Ua(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Di){return we.workingToColorSpace(Xn.copy(this),t),Math.round(Se(Xn.r*255,0,255))*65536+Math.round(Se(Xn.g*255,0,255))*256+Math.round(Se(Xn.b*255,0,255))}getHexString(t=Di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=we.workingColorSpace){we.workingToColorSpace(Xn.copy(this),n);const a=Xn.r,l=Xn.g,c=Xn.b,f=Math.max(a,l,c),d=Math.min(a,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=_<=.5?g/(f+d):g/(2-f-d),f){case a:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-a)/g+2;break;case c:m=(a-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,n=we.workingColorSpace){return we.workingToColorSpace(Xn.copy(this),n),t.r=Xn.r,t.g=Xn.g,t.b=Xn.b,t}getStyle(t=Di){we.workingToColorSpace(Xn.copy(this),t);const n=Xn.r,a=Xn.g,l=Xn.b;return t!==Di?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(t,n,a){return this.getHSL(us),this.setHSL(us.h+t,us.s+n,us.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(us),t.getHSL(Xc);const a=vl(us.h,Xc.h,n),l=vl(us.s,Xc.s,n),c=vl(us.l,Xc.l,n);return this.setHSL(a,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*l,this.g=c[1]*n+c[4]*a+c[7]*l,this.b=c[2]*n+c[5]*a+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new se;se.NAMES=ex;let XM=0;class Zs extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=La(),this.name="",this.type="Material",this.blending=Jr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Ed,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){oe(`Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(a.blending=this.blending),this.side!==ps&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==bd&&(a.blendSrc=this.blendSrc),this.blendDst!==Ed&&(a.blendDst=this.blendDst),this.blendEquation!==Gs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const l=n.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class on extends Zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=Iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new F,Kc=new ne;let KM=0;class Fn{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=pp,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Kc.fromBufferAttribute(this,n),Kc.applyMatrix3(t),this.setXY(n,Kc.x,Kc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Ki(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ke(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ki(n,this.array)),n}setX(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ki(n,this.array)),n}setY(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ki(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ki(n,this.array)),n}setW(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,l){return t*=this.itemSize,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array),l=ke(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t*=this.itemSize,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pp&&(t.usage=this.usage),t}}class nx extends Fn{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class ix extends Fn{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class un extends Fn{constructor(t,n,a){super(new Float32Array(t),n,a)}}let qM=0;const wi=new Ye,cd=new cn,kr=new F,mi=new js,rl=new js,Rn=new F;class bn extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qv(t)?ix:nx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new me().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,n,a){return wi.makeTranslation(t,n,a),this.applyMatrix4(wi),this}scale(t,n,a){return wi.makeScale(t,n,a),this.applyMatrix4(wi),this}lookAt(t){return cd.lookAt(t),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new un(a,3))}else{const a=Math.min(t.length,n.count);for(let l=0;l<a;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,l=n.length;a<l;a++){const c=n[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ro);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];rl.setFromBufferAttribute(d),this.morphTargetsRelative?(Rn.addVectors(mi.min,rl.min),mi.expandByPoint(Rn),Rn.addVectors(mi.max,rl.max),mi.expandByPoint(Rn)):(mi.expandByPoint(rl.min),mi.expandByPoint(rl.max))}mi.getCenter(a);let l=0;for(let c=0,f=t.count;c<f;c++)Rn.fromBufferAttribute(t,c),l=Math.max(l,a.distanceToSquared(Rn));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Rn.fromBufferAttribute(d,p),m&&(kr.fromBufferAttribute(t,p),Rn.add(kr)),l=Math.max(l,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Y=0;Y<a.count;Y++)d[Y]=new F,m[Y]=new F;const p=new F,_=new F,g=new F,x=new ne,S=new ne,b=new ne,A=new F,M=new F;function v(Y,T,C){p.fromBufferAttribute(a,Y),_.fromBufferAttribute(a,T),g.fromBufferAttribute(a,C),x.fromBufferAttribute(c,Y),S.fromBufferAttribute(c,T),b.fromBufferAttribute(c,C),_.sub(p),g.sub(p),S.sub(x),b.sub(x);const H=1/(S.x*b.y-b.x*S.y);isFinite(H)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(g,-S.y).multiplyScalar(H),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(H),d[Y].add(A),d[T].add(A),d[C].add(A),m[Y].add(M),m[T].add(M),m[C].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let Y=0,T=D.length;Y<T;++Y){const C=D[Y],H=C.start,K=C.count;for(let j=H,lt=H+K;j<lt;j+=3)v(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const U=new F,L=new F,I=new F,z=new F;function O(Y){I.fromBufferAttribute(l,Y),z.copy(I);const T=d[Y];U.copy(T),U.sub(I.multiplyScalar(I.dot(T))).normalize(),L.crossVectors(z,T);const H=L.dot(m[Y])<0?-1:1;f.setXYZW(Y,U.x,U.y,U.z,H)}for(let Y=0,T=D.length;Y<T;++Y){const C=D[Y],H=C.start,K=C.count;for(let j=H,lt=H+K;j<lt;j+=3)O(t.getX(j+0)),O(t.getX(j+1)),O(t.getX(j+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,S=a.count;x<S;x++)a.setXYZ(x,0,0,0);const l=new F,c=new F,f=new F,d=new F,m=new F,p=new F,_=new F,g=new F;if(t)for(let x=0,S=t.count;x<S;x+=3){const b=t.getX(x+0),A=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,M),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(a,b),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,M),d.add(_),m.add(_),p.add(_),a.setXYZ(b,d.x,d.y,d.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,S=n.count;x<S;x+=3)l.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),a.setXYZ(x+0,_.x,_.y,_.z),a.setXYZ(x+1,_.x,_.y,_.z),a.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Rn.fromBufferAttribute(t,n),Rn.normalize(),t.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let S=0,b=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?S=m[A]*d.data.stride+d.offset:S=m[A]*_;for(let v=0;v<_;v++)x[b++]=p[S++]}return new Fn(x,_,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bn,a=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],S=t(x,a);m.push(S)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const S=p[g];_.push(S.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(n))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const X_=new Ye,Os=new $v,qc=new ro,K_=new F,Yc=new F,jc=new F,Zc=new F,ud=new F,Qc=new F,q_=new F,Jc=new F;class ve extends cn{constructor(t=new bn,n=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,n){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;n.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Qc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(ud.fromBufferAttribute(g,t),f?Qc.addScaledVector(ud,_):Qc.addScaledVector(ud.sub(n),_))}n.add(Qc)}return n}raycast(t,n){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),qc.copy(a.boundingSphere),qc.applyMatrix4(c),Os.copy(t.ray).recast(t.near),!(qc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(qc,K_)===null||Os.origin.distanceToSquared(K_)>(t.far-t.near)**2))&&(X_.copy(c).invert(),Os.copy(t.ray).applyMatrix4(X_),!(a.boundingBox!==null&&Os.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Os)))}_computeIntersections(t,n,a){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,A=x.length;b<A;b++){const M=x[b],v=f[M.materialIndex],D=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let L=D,I=U;L<I;L+=3){const z=d.getX(L),O=d.getX(L+1),Y=d.getX(L+2);l=$c(this,v,t,a,p,_,g,z,O,Y),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=b,v=A;M<v;M+=3){const D=d.getX(M),U=d.getX(M+1),L=d.getX(M+2);l=$c(this,f,t,a,p,_,g,D,U,L),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,A=x.length;b<A;b++){const M=x[b],v=f[M.materialIndex],D=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let L=D,I=U;L<I;L+=3){const z=L,O=L+1,Y=L+2;l=$c(this,v,t,a,p,_,g,z,O,Y),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let M=b,v=A;M<v;M+=3){const D=M,U=M+1,L=M+2;l=$c(this,f,t,a,p,_,g,D,U,L),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function YM(r,t,n,a,l,c,f,d){let m;if(t.side===Kn?m=a.intersectTriangle(f,c,l,!0,d):m=a.intersectTriangle(l,c,f,t.side===ps,d),m===null)return null;Jc.copy(d),Jc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Jc);return p<n.near||p>n.far?null:{distance:p,point:Jc.clone(),object:r}}function $c(r,t,n,a,l,c,f,d,m,p){r.getVertexPosition(d,Yc),r.getVertexPosition(m,jc),r.getVertexPosition(p,Zc);const _=YM(r,t,n,a,Yc,jc,Zc,q_);if(_){const g=new F;Ui.getBarycoord(q_,Yc,jc,Zc,g),l&&(_.uv=Ui.getInterpolatedAttribute(l,d,m,p,g,new ne)),c&&(_.uv1=Ui.getInterpolatedAttribute(c,d,m,p,g,new ne)),f&&(_.normal=Ui.getInterpolatedAttribute(f,d,m,p,g,new F),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new F,materialIndex:0};Ui.getNormal(Yc,jc,Zc,x.normal),_.face=x,_.barycoord=g}return _}class Ze extends bn{constructor(t=1,n=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let x=0,S=0;b("z","y","x",-1,-1,a,n,t,f,c,0),b("z","y","x",1,-1,a,n,-t,f,c,1),b("x","z","y",1,1,t,a,n,l,f,2),b("x","z","y",1,-1,t,a,-n,l,f,3),b("x","y","z",1,-1,t,n,a,l,c,4),b("x","y","z",-1,-1,t,n,-a,l,c,5),this.setIndex(m),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(g,2));function b(A,M,v,D,U,L,I,z,O,Y,T){const C=L/O,H=I/Y,K=L/2,j=I/2,lt=z/2,ut=O+1,B=Y+1;let V=0,at=0;const Mt=new F;for(let St=0;St<B;St++){const N=St*H-j;for(let tt=0;tt<ut;tt++){const gt=tt*C-K;Mt[A]=gt*D,Mt[M]=N*U,Mt[v]=lt,p.push(Mt.x,Mt.y,Mt.z),Mt[A]=0,Mt[M]=0,Mt[v]=z>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),g.push(tt/O),g.push(1-St/Y),V+=1}}for(let St=0;St<Y;St++)for(let N=0;N<O;N++){const tt=x+N+ut*St,gt=x+N+ut*(St+1),Rt=x+(N+1)+ut*(St+1),Gt=x+(N+1)+ut*St;m.push(tt,gt,Gt),m.push(gt,Rt,Gt),at+=6}d.addGroup(S,at,T),S+=at,x+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ao(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const l=r[n][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=l.clone():Array.isArray(l)?t[n][a]=l.slice():t[n][a]=l}}return t}function Zn(r){const t={};for(let n=0;n<r.length;n++){const a=ao(r[n]);for(const l in a)t[l]=a[l]}return t}function jM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function ax(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const bu={clone:ao,merge:Zn};var ZM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZM,this.fragmentShader=QM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ao(t.uniforms),this.uniformsGroups=jM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class sx extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new F,Y_=new ne,j_=new ne;class gi extends sx{constructor(t=50,n=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ml*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_l*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(_l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,n){return this.getViewBounds(t,Y_,j_),n.subVectors(j_,Y_)}setViewOffset(t,n,a,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(_l*.5*this.fov)/this.zoom,a=2*n,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*a/p,l*=f.width/m,a*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class JM extends cn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Wr,Xr,t,n);l.layers=this.layers,this.add(l);const c=new gi(Wr,Xr,t,n);c.layers=this.layers,this.add(c);const f=new gi(Wr,Xr,t,n);f.layers=this.layers,this.add(f);const d=new gi(Wr,Xr,t,n);d.layers=this.layers,this.add(d);const m=new gi(Wr,Xr,t,n);m.layers=this.layers,this.add(m);const p=new gi(Wr,Xr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,l,c,f,d,m]=n;for(const p of n)this.remove(p);if(t===ea)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===yu)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,l),t.render(n,c),t.setRenderTarget(a,1,l),t.render(n,f),t.setRenderTarget(a,2,l),t.render(n,d),t.setRenderTarget(a,3,l),t.render(n,m),t.setRenderTarget(a,4,l),t.render(n,p),a.texture.generateMipmaps=A,t.setRenderTarget(a,5,l),t.render(n,_),t.setRenderTarget(g,x,S),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class rx extends qn{constructor(t=[],n=Ys,a,l,c,f,d,m,p,_){super(t,n,a,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ox extends ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new rx(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ze(5,5,5),c=new Gn({name:"CubemapFromEquirect",uniforms:ao(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Kn,blending:na});c.uniforms.tEquirect.value=n;const f=new ve(l,c),d=n.minFilter;return n.minFilter===ks&&(n.minFilter=wn),new JM(1,10,this).update(t,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,a=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,a,l);t.setRenderTarget(c)}}class Xi extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $M={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const A of t.hand.values()){const M=n.getJointPose(A,a),v=this._getHandJoint(p,A);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,b=.005;p.inputState.pinching&&x>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=n.getPose(t.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($M)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Xi;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Np{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(t),this.density=n}clone(){return new Np(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class t1 extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class e1{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=pp,this.updateRanges=[],this.version=0,this.uuid=La()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=n.array[a+l];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=La()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jn=new F;class Eu{constructor(t,n,a,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)jn.fromBufferAttribute(this,n),jn.applyMatrix4(t),this.setXYZ(n,jn.x,jn.y,jn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)jn.fromBufferAttribute(this,n),jn.applyNormalMatrix(t),this.setXYZ(n,jn.x,jn.y,jn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)jn.fromBufferAttribute(this,n),jn.transformDirection(t),this.setXYZ(n,jn.x,jn.y,jn.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=Ki(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ke(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=ke(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ke(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ke(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ke(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ki(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ki(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ki(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ki(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,l){return t=t*this.data.stride+this.offset,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array),l=ke(l,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=l,this}setXYZW(t,n,a,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=ke(n,this.array),a=ke(a,this.array),l=ke(l,this.array),c=ke(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Mu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return new Fn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Eu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Mu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class lx extends Zs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Kr;const ol=new F,qr=new F,Yr=new F,jr=new ne,ll=new ne,cx=new Ye,tu=new F,cl=new F,eu=new F,Z_=new ne,hd=new ne,Q_=new ne;class n1 extends cn{constructor(t=new lx){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new bn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new e1(n,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new Eu(a,3,0,!1)),Kr.setAttribute("uv",new Eu(a,2,3,!1))}this.geometry=Kr,this.material=t,this.center=new ne(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),cx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Yr.z);const a=this.material.rotation;let l,c;a!==0&&(c=Math.cos(a),l=Math.sin(a));const f=this.center;nu(tu.set(-.5,-.5,0),Yr,f,qr,l,c),nu(cl.set(.5,-.5,0),Yr,f,qr,l,c),nu(eu.set(.5,.5,0),Yr,f,qr,l,c),Z_.set(0,0),hd.set(1,0),Q_.set(1,1);let d=t.ray.intersectTriangle(tu,cl,eu,!1,ol);if(d===null&&(nu(cl.set(-.5,.5,0),Yr,f,qr,l,c),hd.set(0,1),d=t.ray.intersectTriangle(tu,eu,cl,!1,ol),d===null))return;const m=t.ray.origin.distanceTo(ol);m<t.near||m>t.far||n.push({distance:m,point:ol.clone(),uv:Ui.getInterpolation(ol,tu,cl,eu,Z_,hd,Q_,new ne),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nu(r,t,n,a,l,c){jr.subVectors(r,n).addScalar(.5).multiply(a),l!==void 0?(ll.x=c*jr.x-l*jr.y,ll.y=l*jr.x+c*jr.y):ll.copy(jr),r.copy(t),r.x+=ll.x,r.y+=ll.y,r.applyMatrix4(cx)}class ux extends qn{constructor(t=null,n=1,a=1,l,c,f,d,m,p=Hn,_=Hn,g,x){super(null,f,d,m,p,_,l,c,g,x),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class J_ extends Fn{constructor(t,n,a,l=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zr=new Ye,$_=new Ye,iu=[],tv=new js,i1=new Ye,ul=new ve,fl=new ro;class au extends ve{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new J_(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<a;l++)this.setMatrixAt(l,i1)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new js),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Zr),tv.copy(t.boundingBox).applyMatrix4(Zr),this.boundingBox.union(tv)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ro),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,Zr),fl.copy(t.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(fl)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,l=this.morphTexture.source.data.data,c=a.length+1,f=t*c+1;for(let d=0;d<a.length;d++)a[d]=l[f+d]}raycast(t,n){const a=this.matrixWorld,l=this.count;if(ul.geometry=this.geometry,ul.material=this.material,ul.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(a),t.ray.intersectsSphere(fl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Zr),$_.multiplyMatrices(a,Zr),ul.matrixWorld=$_,ul.raycast(t,iu);for(let f=0,d=iu.length;f<d;f++){const m=iu[f];m.instanceId=c,m.object=this,n.push(m)}iu.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new J_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const a=n.morphTargetInfluences,l=a.length+1;this.morphTexture===null&&(this.morphTexture=new ux(new Float32Array(l*this.count),l,this.count,Tp,qi));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<a.length;p++)f+=a[p];const d=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=d,c.set(a,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const dd=new F,a1=new F,s1=new me;class Hs{constructor(t=new F(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,l){return this.normal.set(t,n,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const l=dd.subVectors(a,n).cross(a1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(dd),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||s1.getNormalMatrix(t),l=this.coplanarPoint(dd).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new ro,r1=new ne(.5,.5),su=new F;class Pp{constructor(t=new Hs,n=new Hs,a=new Hs,l=new Hs,c=new Hs,f=new Hs){this.planes=[t,n,a,l,c,f]}set(t,n,a,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(n),d[2].copy(a),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ea,a=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],x=c[6],S=c[7],b=c[8],A=c[9],M=c[10],v=c[11],D=c[12],U=c[13],L=c[14],I=c[15];if(l[0].setComponents(p-f,S-_,v-b,I-D).normalize(),l[1].setComponents(p+f,S+_,v+b,I+D).normalize(),l[2].setComponents(p+d,S+g,v+A,I+U).normalize(),l[3].setComponents(p-d,S-g,v-A,I-U).normalize(),a)l[4].setComponents(m,x,M,L).normalize(),l[5].setComponents(p-m,S-x,v-M,I-L).normalize();else if(l[4].setComponents(p-m,S-x,v-M,I-L).normalize(),n===ea)l[5].setComponents(p+m,S+x,v+M,I+L).normalize();else if(n===yu)l[5].setComponents(m,x,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(t){Is.center.set(0,0,0);const n=r1.distanceTo(t.center);return Is.radius=.7071067811865476+n,Is.applyMatrix4(t.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(t){const n=this.planes,a=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const l=n[a];if(su.x=l.normal.x>0?t.max.x:t.min.x,su.y=l.normal.y>0?t.max.y:t.min.y,su.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(su)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ml extends Zs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ev=new Ye,mp=new $v,ru=new ro,ou=new F;class lu extends cn{constructor(t=new bn,n=new ml){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ru.copy(a.boundingSphere),ru.applyMatrix4(l),ru.radius+=c,t.ray.intersectsSphere(ru)===!1)return;ev.copy(l).invert(),mp.copy(t.ray).applyMatrix4(ev);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=a.index,g=a.attributes.position;if(p!==null){const x=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let b=x,A=S;b<A;b++){const M=p.getX(b);ou.fromBufferAttribute(g,M),nv(ou,M,m,l,t,n,this)}}else{const x=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let b=x,A=S;b<A;b++)ou.fromBufferAttribute(g,b),nv(ou,b,m,l,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const l=n[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function nv(r,t,n,a,l,c,f){const d=mp.distanceSqToPoint(r);if(d<n){const m=new F;mp.closestPointToPoint(r,m),m.applyMatrix4(a);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class pd extends qn{constructor(t,n,a,l,c,f,d,m,p){super(t,n,a,l,c,f,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bl extends qn{constructor(t,n,a=aa,l,c,f,d=Hn,m=Hn,p,_=Na,g=1){if(_!==Na&&_!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:g};super(x,l,c,f,d,m,_,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Up(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class o1 extends bl{constructor(t,n=aa,a=Ys,l,c,f=Hn,d=Hn,m,p=Na){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,n,a,l,c,f,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class fx extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Tu extends bn{constructor(t=1,n=1,a=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:n,capSegments:a,radialSegments:l,heightSegments:c},n=Math.max(0,n),a=Math.max(1,Math.floor(a)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const f=[],d=[],m=[],p=[],_=n/2,g=Math.PI/2*t,x=n,S=2*g+x,b=a*2+c,A=l+1,M=new F,v=new F;for(let D=0;D<=b;D++){let U=0,L=0,I=0,z=0;if(D<=a){const T=D/a,C=T*Math.PI/2;L=-_-t*Math.cos(C),I=t*Math.sin(C),z=-t*Math.cos(C),U=T*g}else if(D<=a+c){const T=(D-a)/c;L=-_+T*n,I=t,z=0,U=g+T*x}else{const T=(D-a-c)/a,C=T*Math.PI/2;L=_+t*Math.sin(C),I=t*Math.cos(C),z=t*Math.sin(C),U=g+x+T*g}const O=Math.max(0,Math.min(1,U/S));let Y=0;D===0?Y=.5/l:D===b&&(Y=-.5/l);for(let T=0;T<=l;T++){const C=T/l,H=C*Math.PI*2,K=Math.sin(H),j=Math.cos(H);v.x=-I*j,v.y=L,v.z=I*K,d.push(v.x,v.y,v.z),M.set(-I*j,z,I*K),M.normalize(),m.push(M.x,M.y,M.z),p.push(C+Y,O)}if(D>0){const T=(D-1)*A;for(let C=0;C<l;C++){const H=T+C,K=T+C+1,j=D*A+C,lt=D*A+C+1;f.push(H,K,j),f.push(K,lt,j)}}}this.setIndex(f),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(m,3)),this.setAttribute("uv",new un(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Da extends bn{constructor(t=1,n=1,a=1,l=32,c=1,f=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],x=[],S=[];let b=0;const A=[],M=a/2;let v=0;D(),f===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(_),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(S,2));function D(){const L=new F,I=new F;let z=0;const O=(n-t)/a;for(let Y=0;Y<=c;Y++){const T=[],C=Y/c,H=C*(n-t)+t;for(let K=0;K<=l;K++){const j=K/l,lt=j*m+d,ut=Math.sin(lt),B=Math.cos(lt);I.x=H*ut,I.y=-C*a+M,I.z=H*B,g.push(I.x,I.y,I.z),L.set(ut,O,B).normalize(),x.push(L.x,L.y,L.z),S.push(j,1-C),T.push(b++)}A.push(T)}for(let Y=0;Y<l;Y++)for(let T=0;T<c;T++){const C=A[T][Y],H=A[T+1][Y],K=A[T+1][Y+1],j=A[T][Y+1];(t>0||T!==0)&&(_.push(C,H,j),z+=3),(n>0||T!==c-1)&&(_.push(H,K,j),z+=3)}p.addGroup(v,z,0),v+=z}function U(L){const I=b,z=new ne,O=new F;let Y=0;const T=L===!0?t:n,C=L===!0?1:-1;for(let K=1;K<=l;K++)g.push(0,M*C,0),x.push(0,C,0),S.push(.5,.5),b++;const H=b;for(let K=0;K<=l;K++){const lt=K/l*m+d,ut=Math.cos(lt),B=Math.sin(lt);O.x=T*B,O.y=M*C,O.z=T*ut,g.push(O.x,O.y,O.z),x.push(0,C,0),z.x=ut*.5+.5,z.y=B*.5*C+.5,S.push(z.x,z.y),b++}for(let K=0;K<l;K++){const j=I+K,lt=H+K;L===!0?_.push(lt,lt+1,j):_.push(lt+1,lt,j),Y+=3}p.addGroup(v,Y,L===!0?1:2),v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qs extends Da{constructor(t=1,n=1,a=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,t,n,a,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(t){return new qs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Li extends bn{constructor(t=1,n=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:l};const c=t/2,f=n/2,d=Math.floor(a),m=Math.floor(l),p=d+1,_=m+1,g=t/d,x=n/m,S=[],b=[],A=[],M=[];for(let v=0;v<_;v++){const D=v*x-f;for(let U=0;U<p;U++){const L=U*g-c;b.push(L,-D,0),A.push(0,0,1),M.push(U/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<d;D++){const U=D+p*v,L=D+p*(v+1),I=D+1+p*(v+1),z=D+1+p*v;S.push(U,L,z),S.push(L,I,z)}this.setIndex(S),this.setAttribute("position",new un(b,3)),this.setAttribute("normal",new un(A,3)),this.setAttribute("uv",new un(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cu extends bn{constructor(t=1,n=32,a=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const m=Math.min(f+d,Math.PI);let p=0;const _=[],g=new F,x=new F,S=[],b=[],A=[],M=[];for(let v=0;v<=a;v++){const D=[],U=v/a;let L=0;v===0&&f===0?L=.5/n:v===a&&m===Math.PI&&(L=-.5/n);for(let I=0;I<=n;I++){const z=I/n;g.x=-t*Math.cos(l+z*c)*Math.sin(f+U*d),g.y=t*Math.cos(f+U*d),g.z=t*Math.sin(l+z*c)*Math.sin(f+U*d),b.push(g.x,g.y,g.z),x.copy(g).normalize(),A.push(x.x,x.y,x.z),M.push(z+L,1-U),D.push(p++)}_.push(D)}for(let v=0;v<a;v++)for(let D=0;D<n;D++){const U=_[v][D+1],L=_[v][D],I=_[v+1][D],z=_[v+1][D+1];(v!==0||f>0)&&S.push(U,L,z),(v!==a-1||m<Math.PI)&&S.push(L,I,z)}this.setIndex(S),this.setAttribute("position",new un(b,3)),this.setAttribute("normal",new un(A,3)),this.setAttribute("uv",new un(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xs extends bn{constructor(t=1,n=.4,a=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:l,arc:c},a=Math.floor(a),l=Math.floor(l);const f=[],d=[],m=[],p=[],_=new F,g=new F,x=new F;for(let S=0;S<=a;S++)for(let b=0;b<=l;b++){const A=b/l*c,M=S/a*Math.PI*2;g.x=(t+n*Math.cos(M))*Math.cos(A),g.y=(t+n*Math.cos(M))*Math.sin(A),g.z=n*Math.sin(M),d.push(g.x,g.y,g.z),_.x=t*Math.cos(A),_.y=t*Math.sin(A),x.subVectors(g,_).normalize(),m.push(x.x,x.y,x.z),p.push(b/l),p.push(S/a)}for(let S=1;S<=a;S++)for(let b=1;b<=l;b++){const A=(l+1)*S+b-1,M=(l+1)*(S-1)+b-1,v=(l+1)*(S-1)+b,D=(l+1)*S+b;f.push(A,M,D),f.push(M,v,D)}this.setIndex(f),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(m,3)),this.setAttribute("uv",new un(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class l1 extends Gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ii extends Zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zv,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wi extends ii{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class c1 extends Zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class u1 extends Zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Op extends cn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class f1 extends Op{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const md=new Ye,iv=new F,av=new F;class hx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pp,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;iv.setFromMatrixPosition(t.matrixWorld),n.position.copy(iv),av.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(av),n.updateMatrixWorld(),md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(md)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class h1 extends hx{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0}}class d1 extends Op{constructor(t,n,a=0,l=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new h1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Du extends sx{constructor(t=-1,n=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-t,f=a+t,d=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class p1 extends hx{constructor(){super(new Du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sv extends Op{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new p1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class m1 extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class g1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function rv(r,t,n,a){const l=_1(a);switch(n){case Yv:return r*t;case Tp:return r*t/l.components*l.byteLength;case Ap:return r*t/l.components*l.byteLength;case no:return r*t*2/l.components*l.byteLength;case Rp:return r*t*2/l.components*l.byteLength;case jv:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case wp:return r*t*4/l.components*l.byteLength;case du:case pu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case mu:case gu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Bd:case Fd:return Math.max(r,16)*Math.max(t,8)/4;case Id:case zd:return Math.max(r,8)*Math.max(t,8)/2;case Hd:case Gd:case kd:case Wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vd:case Xd:case Kd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case jd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case $d:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case tp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ep:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case np:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ip:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case sp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case rp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case op:case lp:case cp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case up:case fp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case hp:case dp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _1(r){switch(r){case _i:case Wv:return{byteLength:1,components:1};case xl:case Xv:case Pi:return{byteLength:2,components:1};case bp:case Ep:return{byteLength:2,components:4};case aa:case Mp:case qi:return{byteLength:4,components:1};case Kv:case qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yp}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dx(){let r=null,t=!1,n=null,a=null;function l(c,f){n(c,f),a=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function v1(r){const t=new WeakMap;function n(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function a(d,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,_);else{g.sort((S,b)=>S.start-b.start);let x=0;for(let S=1;S<g.length;S++){const b=g[x],A=g[S];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++x,g[x]=A)}g.length=x+1;for(let S=0,b=g.length;S<b;S++){const A=g[S];r.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var x1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,S1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,M1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,w1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,N1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,V1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,k1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ob=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ub=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,db=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_b=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Db=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ub=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,FE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_e={alphahash_fragment:x1,alphahash_pars_fragment:y1,alphamap_fragment:S1,alphamap_pars_fragment:M1,alphatest_fragment:b1,alphatest_pars_fragment:E1,aomap_fragment:T1,aomap_pars_fragment:A1,batching_pars_vertex:R1,batching_vertex:w1,begin_vertex:C1,beginnormal_vertex:D1,bsdfs:L1,iridescence_fragment:U1,bumpmap_pars_fragment:N1,clipping_planes_fragment:P1,clipping_planes_pars_fragment:O1,clipping_planes_pars_vertex:I1,clipping_planes_vertex:B1,color_fragment:z1,color_pars_fragment:F1,color_pars_vertex:H1,color_vertex:G1,common:V1,cube_uv_reflection_fragment:k1,defaultnormal_vertex:W1,displacementmap_pars_vertex:X1,displacementmap_vertex:K1,emissivemap_fragment:q1,emissivemap_pars_fragment:Y1,colorspace_fragment:j1,colorspace_pars_fragment:Z1,envmap_fragment:Q1,envmap_common_pars_fragment:J1,envmap_pars_fragment:$1,envmap_pars_vertex:tb,envmap_physical_pars_fragment:fb,envmap_vertex:eb,fog_vertex:nb,fog_pars_vertex:ib,fog_fragment:ab,fog_pars_fragment:sb,gradientmap_pars_fragment:rb,lightmap_pars_fragment:ob,lights_lambert_fragment:lb,lights_lambert_pars_fragment:cb,lights_pars_begin:ub,lights_toon_fragment:hb,lights_toon_pars_fragment:db,lights_phong_fragment:pb,lights_phong_pars_fragment:mb,lights_physical_fragment:gb,lights_physical_pars_fragment:_b,lights_fragment_begin:vb,lights_fragment_maps:xb,lights_fragment_end:yb,logdepthbuf_fragment:Sb,logdepthbuf_pars_fragment:Mb,logdepthbuf_pars_vertex:bb,logdepthbuf_vertex:Eb,map_fragment:Tb,map_pars_fragment:Ab,map_particle_fragment:Rb,map_particle_pars_fragment:wb,metalnessmap_fragment:Cb,metalnessmap_pars_fragment:Db,morphinstance_vertex:Lb,morphcolor_vertex:Ub,morphnormal_vertex:Nb,morphtarget_pars_vertex:Pb,morphtarget_vertex:Ob,normal_fragment_begin:Ib,normal_fragment_maps:Bb,normal_pars_fragment:zb,normal_pars_vertex:Fb,normal_vertex:Hb,normalmap_pars_fragment:Gb,clearcoat_normal_fragment_begin:Vb,clearcoat_normal_fragment_maps:kb,clearcoat_pars_fragment:Wb,iridescence_pars_fragment:Xb,opaque_fragment:Kb,packing:qb,premultiplied_alpha_fragment:Yb,project_vertex:jb,dithering_fragment:Zb,dithering_pars_fragment:Qb,roughnessmap_fragment:Jb,roughnessmap_pars_fragment:$b,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:eE,shadowmap_vertex:nE,shadowmask_pars_fragment:iE,skinbase_vertex:aE,skinning_pars_vertex:sE,skinning_vertex:rE,skinnormal_vertex:oE,specularmap_fragment:lE,specularmap_pars_fragment:cE,tonemapping_fragment:uE,tonemapping_pars_fragment:fE,transmission_fragment:hE,transmission_pars_fragment:dE,uv_pars_fragment:pE,uv_pars_vertex:mE,uv_vertex:gE,worldpos_vertex:_E,background_vert:vE,background_frag:xE,backgroundCube_vert:yE,backgroundCube_frag:SE,cube_vert:ME,cube_frag:bE,depth_vert:EE,depth_frag:TE,distance_vert:AE,distance_frag:RE,equirect_vert:wE,equirect_frag:CE,linedashed_vert:DE,linedashed_frag:LE,meshbasic_vert:UE,meshbasic_frag:NE,meshlambert_vert:PE,meshlambert_frag:OE,meshmatcap_vert:IE,meshmatcap_frag:BE,meshnormal_vert:zE,meshnormal_frag:FE,meshphong_vert:HE,meshphong_frag:GE,meshphysical_vert:VE,meshphysical_frag:kE,meshtoon_vert:WE,meshtoon_frag:XE,points_vert:KE,points_frag:qE,shadow_vert:YE,shadow_frag:jE,sprite_vert:ZE,sprite_frag:QE},Ot={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},ta={basic:{uniforms:Zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new se(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Zn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Zn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new se(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Zn([Ot.points,Ot.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Zn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Zn([Ot.common,Ot.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Zn([Ot.sprite,Ot.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Zn([Ot.common,Ot.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Zn([Ot.lights,Ot.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};ta.physical={uniforms:Zn([ta.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const cu={r:0,b:0,g:0},Bs=new sa,JE=new Ye;function $E(r,t,n,a,l,c,f){const d=new se(0);let m=c===!0?0:1,p,_,g=null,x=0,S=null;function b(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?n:t).get(L)),L}function A(U){let L=!1;const I=b(U);I===null?v(d,m):I&&I.isColor&&(v(I,1),L=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?a.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(r.autoClear||L)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,L){const I=b(L);I&&(I.isCubeTexture||I.mapping===wu)?(_===void 0&&(_=new ve(new Ze(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:ao(ta.backgroundCube.uniforms),vertexShader:ta.backgroundCube.vertexShader,fragmentShader:ta.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,O,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Bs.copy(L.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(JE.makeRotationFromEuler(Bs)),_.material.toneMapped=we.getTransfer(I.colorSpace)!==Ve,(g!==I||x!==I.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,g=I,x=I.version,S=r.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new ve(new Li(2,2),new Gn({name:"BackgroundMaterial",uniforms:ao(ta.background.uniforms),vertexShader:ta.background.vertexShader,fragmentShader:ta.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=we.getTransfer(I.colorSpace)!==Ve,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||x!==I.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=I,x=I.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,L){U.getRGB(cu,ax(r)),a.buffers.color.setClear(cu.r,cu.g,cu.b,L,f)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,L=1){d.set(U),m=L,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:A,addToRenderList:M,dispose:D}}function tT(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},l=x(null);let c=l,f=!1;function d(C,H,K,j,lt){let ut=!1;const B=g(j,K,H);c!==B&&(c=B,p(c.object)),ut=S(C,j,K,lt),ut&&b(C,j,K,lt),lt!==null&&t.update(lt,r.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,L(C,H,K,j),lt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function _(C){return r.deleteVertexArray(C)}function g(C,H,K){const j=K.wireframe===!0;let lt=a[C.id];lt===void 0&&(lt={},a[C.id]=lt);let ut=lt[H.id];ut===void 0&&(ut={},lt[H.id]=ut);let B=ut[j];return B===void 0&&(B=x(m()),ut[j]=B),B}function x(C){const H=[],K=[],j=[];for(let lt=0;lt<n;lt++)H[lt]=0,K[lt]=0,j[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:j,object:C,attributes:{},index:null}}function S(C,H,K,j){const lt=c.attributes,ut=H.attributes;let B=0;const V=K.getAttributes();for(const at in V)if(V[at].location>=0){const St=lt[at];let N=ut[at];if(N===void 0&&(at==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),at==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),St===void 0||St.attribute!==N||N&&St.data!==N.data)return!0;B++}return c.attributesNum!==B||c.index!==j}function b(C,H,K,j){const lt={},ut=H.attributes;let B=0;const V=K.getAttributes();for(const at in V)if(V[at].location>=0){let St=ut[at];St===void 0&&(at==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),at==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const N={};N.attribute=St,St&&St.data&&(N.data=St.data),lt[at]=N,B++}c.attributes=lt,c.attributesNum=B,c.index=j}function A(){const C=c.newAttributes;for(let H=0,K=C.length;H<K;H++)C[H]=0}function M(C){v(C,0)}function v(C,H){const K=c.newAttributes,j=c.enabledAttributes,lt=c.attributeDivisors;K[C]=1,j[C]===0&&(r.enableVertexAttribArray(C),j[C]=1),lt[C]!==H&&(r.vertexAttribDivisor(C,H),lt[C]=H)}function D(){const C=c.newAttributes,H=c.enabledAttributes;for(let K=0,j=H.length;K<j;K++)H[K]!==C[K]&&(r.disableVertexAttribArray(K),H[K]=0)}function U(C,H,K,j,lt,ut,B){B===!0?r.vertexAttribIPointer(C,H,K,lt,ut):r.vertexAttribPointer(C,H,K,j,lt,ut)}function L(C,H,K,j){A();const lt=j.attributes,ut=K.getAttributes(),B=H.defaultAttributeValues;for(const V in ut){const at=ut[V];if(at.location>=0){let Mt=lt[V];if(Mt===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const St=Mt.normalized,N=Mt.itemSize,tt=t.get(Mt);if(tt===void 0)continue;const gt=tt.buffer,Rt=tt.type,Gt=tt.bytesPerElement,nt=Rt===r.INT||Rt===r.UNSIGNED_INT||Mt.gpuType===Mp;if(Mt.isInterleavedBufferAttribute){const ht=Mt.data,Ct=ht.stride,It=Mt.offset;if(ht.isInstancedInterleavedBuffer){for(let Ft=0;Ft<at.locationSize;Ft++)v(at.location+Ft,ht.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ft=0;Ft<at.locationSize;Ft++)M(at.location+Ft);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Ft=0;Ft<at.locationSize;Ft++)U(at.location+Ft,N/at.locationSize,Rt,St,Ct*Gt,(It+N/at.locationSize*Ft)*Gt,nt)}else{if(Mt.isInstancedBufferAttribute){for(let ht=0;ht<at.locationSize;ht++)v(at.location+ht,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let ht=0;ht<at.locationSize;ht++)M(at.location+ht);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let ht=0;ht<at.locationSize;ht++)U(at.location+ht,N/at.locationSize,Rt,St,N*Gt,N/at.locationSize*ht*Gt,nt)}}else if(B!==void 0){const St=B[V];if(St!==void 0)switch(St.length){case 2:r.vertexAttrib2fv(at.location,St);break;case 3:r.vertexAttrib3fv(at.location,St);break;case 4:r.vertexAttrib4fv(at.location,St);break;default:r.vertexAttrib1fv(at.location,St)}}}}D()}function I(){Y();for(const C in a){const H=a[C];for(const K in H){const j=H[K];for(const lt in j)_(j[lt].object),delete j[lt];delete H[K]}delete a[C]}}function z(C){if(a[C.id]===void 0)return;const H=a[C.id];for(const K in H){const j=H[K];for(const lt in j)_(j[lt].object),delete j[lt];delete H[K]}delete a[C.id]}function O(C){for(const H in a){const K=a[H];if(K[C.id]===void 0)continue;const j=K[C.id];for(const lt in j)_(j[lt].object),delete j[lt];delete K[C.id]}}function Y(){T(),f=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:M,disableUnusedAttributes:D}}function eT(r,t,n){let a;function l(p){a=p}function c(p,_){r.drawArrays(a,p,_),n.update(_,a,1)}function f(p,_,g){g!==0&&(r.drawArraysInstanced(a,p,_,g),n.update(_,a,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,_,0,g);let S=0;for(let b=0;b<g;b++)S+=_[b];n.update(S,a,1)}function m(p,_,g,x){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<p.length;b++)f(p[b],_[b],x[b]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,_,0,x,0,g);let b=0;for(let A=0;A<g;A++)b+=_[A]*x[A];n.update(b,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function nT(r,t,n,a){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Ni&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const Y=O===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==_i&&a.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==qi&&!Y)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(oe("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:L,maxSamples:I,samples:z}}function iT(r){const t=this;let n=null,a=0,l=!1,c=!1;const f=new Hs,d=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||a!==0||l;return l=x,a=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){n=_(g,x,0)},this.setState=function(g,x,S){const b=g.clippingPlanes,A=g.clipIntersection,M=g.clipShadows,v=r.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const D=c?0:a,U=D*4;let L=v.clippingState||null;m.value=L,L=_(b,x,U,S);for(let I=0;I!==U;++I)L[I]=n[I];v.clippingState=L,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,x,S,b){const A=g!==null?g.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const v=S+A*4,D=x.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<v)&&(M=new Float32Array(v));for(let U=0,L=S;U!==A;++U,L+=4)f.copy(g[U]).applyMatrix4(D,d),f.normal.toArray(M,L),M[L+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function aT(r){let t=new WeakMap;function n(f,d){return d===Ud?f.mapping=Ys:d===Nd&&(f.mapping=eo),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ud||d===Nd)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new ox(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const ds=4,ov=[.125,.215,.35,.446,.526,.582],Vs=20,sT=256,hl=new Du,lv=new se;let gd=null,_d=0,vd=0,xd=!1;const rT=new F;class cv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,l=100,c={}){const{size:f=256,position:d=rT}=c;gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,l,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gd,_d,vd),this._renderer.xr.enabled=xd,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ys||t.mapping===eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Pi,format:Ni,colorSpace:io,depthBuffer:!1},l=uv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oT(c)),this._blurMaterial=cT(c,t,n),this._ggxMaterial=lT(c,t,n)}return l}_compileMaterial(t){const n=new ve(new bn,t);this._renderer.compile(n,hl)}_sceneToCubeUV(t,n,a,l,c){const m=new gi(90,1,n,a),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(lv),g.toneMapping=ia,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new Ze,new on({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let v=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,v=!0):(M.color.copy(lv),v=!0);for(let U=0;U<6;U++){const L=U%3;L===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):L===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const I=this._cubeSize;Qr(l,L*I,U>2?I:0,I,I),g.setRenderTarget(l),v&&g.render(A,m),g.render(t,m)}g.toneMapping=S,g.autoClear=x,t.background=D}_textureToCubeUV(t,n){const a=this._renderer,l=t.mapping===Ys||t.mapping===eo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Qr(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(f,hl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[a];d.material=f;const m=f.uniforms,p=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),x=0+p*1.25,S=g*x,{_lodMax:b}=this,A=this._sizeLods[a],M=3*A*(a>b-ds?a-b+ds:0),v=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=b-n,Qr(c,M,v,3*A,2*A),l.setRenderTarget(c),l.render(d,hl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-a,Qr(t,M,v,3*A,2*A),l.setRenderTarget(t),l.render(d,hl)}_blur(t,n,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,a,l,"latitudinal",c),this._halfBlur(f,t,a,a,l,"longitudinal",c)}_halfBlur(t,n,a,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,S=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Vs-1),A=c/b,M=isFinite(c)?1+Math.floor(_*A):Vs;M>Vs&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Vs}`);const v=[];let D=0;for(let O=0;O<Vs;++O){const Y=O/A,T=Math.exp(-Y*Y/2);v.push(T),O===0?D+=T:O<M&&(D+=2*T)}for(let O=0;O<v.length;O++)v[O]=v[O]/D;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-a;const L=this._sizeLods[l],I=3*L*(l>U-ds?l-U+ds:0),z=4*(this._cubeSize-L);Qr(n,I,z,3*L,2*L),m.setRenderTarget(n),m.render(g,hl)}}function oT(r){const t=[],n=[],a=[];let l=r;const c=r-ds+1+ov.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-ds?m=ov[f-r+ds-1]:f===0&&(m=0),n.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,b=6,A=3,M=2,v=1,D=new Float32Array(A*b*S),U=new Float32Array(M*b*S),L=new Float32Array(v*b*S);for(let z=0;z<S;z++){const O=z%3*2/3-1,Y=z>2?0:-1,T=[O,Y,0,O+2/3,Y,0,O+2/3,Y+1,0,O,Y,0,O+2/3,Y+1,0,O,Y+1,0];D.set(T,A*b*z),U.set(x,M*b*z);const C=[z,z,z,z,z,z];L.set(C,v*b*z)}const I=new bn;I.setAttribute("position",new Fn(D,A)),I.setAttribute("uv",new Fn(U,M)),I.setAttribute("faceIndex",new Fn(L,v)),a.push(new ve(I,null)),l>ds&&l--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function uv(r,t,n){const a=new ri(r,t,n);return a.texture.mapping=wu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Qr(r,t,n,a,l){r.viewport.set(t,n,a,l),r.scissor.set(t,n,a,l)}function lT(r,t,n){return new Gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function cT(r,t,n){const a=new Float32Array(Vs),l=new F(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function fv(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function hv(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function Lu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uT(r){let t=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ud||m===Nd,_=m===Ys||m===eo;if(p||_){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new cv(r)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new cv(r)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:f}}function fT(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const l=r.getExtension(a);return t[a]=l,l}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const l=n(a);return l===null&&Sl("WebGLRenderer: "+a+" extension not supported."),l}}}function hT(r,t,n,a){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function m(g){const x=g.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function p(g){const x=[],S=g.index,b=g.attributes.position;let A=0;if(S!==null){const D=S.array;A=S.version;for(let U=0,L=D.length;U<L;U+=3){const I=D[U+0],z=D[U+1],O=D[U+2];x.push(I,z,z,O,O,I)}}else if(b!==void 0){const D=b.array;A=b.version;for(let U=0,L=D.length/3-1;U<L;U+=3){const I=U+0,z=U+1,O=U+2;x.push(I,z,z,O,O,I)}}else return;const M=new(Qv(x)?ix:nx)(x,1);M.version=A;const v=c.get(g);v&&t.remove(v),c.set(g,M)}function _(g){const x=c.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function dT(r,t,n){let a;function l(x){a=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function m(x,S){r.drawElements(a,S,c,x*f),n.update(S,a,1)}function p(x,S,b){b!==0&&(r.drawElementsInstanced(a,S,c,x*f,b),n.update(S,a,b))}function _(x,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,x,0,b);let M=0;for(let v=0;v<b;v++)M+=S[v];n.update(M,a,1)}function g(x,S,b,A){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/f,S[v],A[v]);else{M.multiDrawElementsInstancedWEBGL(a,S,0,c,x,0,A,0,b);let v=0;for(let D=0;D<b;D++)v+=S[D]*A[D];n.update(v,a,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function pT(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,d){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:Re("WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:a}}function mT(r,t,n){const a=new WeakMap,l=new ln;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=a.get(d);if(x===void 0||x.count!==g){let C=function(){Y.dispose(),a.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let L=0;b===!0&&(L=1),A===!0&&(L=2),M===!0&&(L=3);let I=d.attributes.position.count*L,z=1;I>t.maxTextureSize&&(z=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const O=new Float32Array(I*z*4*g),Y=new Jv(O,I,z,g);Y.type=qi,Y.needsUpdate=!0;const T=L*4;for(let H=0;H<g;H++){const K=v[H],j=D[H],lt=U[H],ut=I*z*4*H;for(let B=0;B<K.count;B++){const V=B*T;b===!0&&(l.fromBufferAttribute(K,B),O[ut+V+0]=l.x,O[ut+V+1]=l.y,O[ut+V+2]=l.z,O[ut+V+3]=0),A===!0&&(l.fromBufferAttribute(j,B),O[ut+V+4]=l.x,O[ut+V+5]=l.y,O[ut+V+6]=l.z,O[ut+V+7]=0),M===!0&&(l.fromBufferAttribute(lt,B),O[ut+V+8]=l.x,O[ut+V+9]=l.y,O[ut+V+10]=l.z,O[ut+V+11]=lt.itemSize===4?l.w:1)}}x={count:g,texture:Y,size:new ne(I,z)},a.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function gT(r,t,n,a){let l=new WeakMap;function c(m){const p=a.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const _T={[Bv]:"LINEAR_TONE_MAPPING",[zv]:"REINHARD_TONE_MAPPING",[Fv]:"CINEON_TONE_MAPPING",[Sp]:"ACES_FILMIC_TONE_MAPPING",[Gv]:"AGX_TONE_MAPPING",[Vv]:"NEUTRAL_TONE_MAPPING",[Hv]:"CUSTOM_TONE_MAPPING"};function vT(r,t,n,a,l){const c=new ri(t,n,{type:r,depthBuffer:a,stencilBuffer:l}),f=new ri(t,n,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),d=new bn;d.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new un([0,2,0,0,2,0],2));const m=new l1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ve(d,m),_=new Du(-1,1,1,-1,0,1);let g=null,x=null,S=!1,b,A=null,M=[],v=!1;this.setSize=function(D,U){c.setSize(D,U),f.setSize(D,U);for(let L=0;L<M.length;L++){const I=M[L];I.setSize&&I.setSize(D,U)}},this.setEffects=function(D){M=D,v=M.length>0&&M[0].isRenderPass===!0;const U=c.width,L=c.height;for(let I=0;I<M.length;I++){const z=M[I];z.setSize&&z.setSize(U,L)}},this.begin=function(D,U){if(S||D.toneMapping===ia&&M.length===0)return!1;if(A=U,U!==null){const L=U.width,I=U.height;(c.width!==L||c.height!==I)&&this.setSize(L,I)}return v===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=ia,!0},this.hasRenderPass=function(){return v},this.end=function(D,U){D.toneMapping=b,S=!0;let L=c,I=f;for(let z=0;z<M.length;z++){const O=M[z];if(O.enabled!==!1&&(O.render(D,I,L,U),O.needsSwap!==!1)){const Y=L;L=I,I=Y}}if(g!==D.outputColorSpace||x!==D.toneMapping){g=D.outputColorSpace,x=D.toneMapping,m.defines={},we.getTransfer(g)===Ve&&(m.defines.SRGB_TRANSFER="");const z=_T[x];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(A),D.render(p,_),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const px=new qn,gp=new bl(1,1),mx=new Jv,gx=new BM,_x=new rx,dv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),_v=new Float32Array(4);function oo(r,t,n){const a=r[0];if(a<=0||a>0)return r;const l=t*n;let c=dv[l];if(c===void 0&&(c=new Float32Array(l),dv[l]=c),t!==0){a.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=n,r[f].toArray(c,d)}return c}function En(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function Tn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function Uu(r,t){let n=pv[t];n===void 0&&(n=new Int32Array(t),pv[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function xT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function yT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2fv(this.addr,t),Tn(n,t)}}function ST(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(En(n,t))return;r.uniform3fv(this.addr,t),Tn(n,t)}}function MT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4fv(this.addr,t),Tn(n,t)}}function bT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),Tn(n,t)}else{if(En(n,a))return;_v.set(a),r.uniformMatrix2fv(this.addr,!1,_v),Tn(n,a)}}function ET(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),Tn(n,t)}else{if(En(n,a))return;gv.set(a),r.uniformMatrix3fv(this.addr,!1,gv),Tn(n,a)}}function TT(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),Tn(n,t)}else{if(En(n,a))return;mv.set(a),r.uniformMatrix4fv(this.addr,!1,mv),Tn(n,a)}}function AT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function RT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2iv(this.addr,t),Tn(n,t)}}function wT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;r.uniform3iv(this.addr,t),Tn(n,t)}}function CT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4iv(this.addr,t),Tn(n,t)}}function DT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function LT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;r.uniform2uiv(this.addr,t),Tn(n,t)}}function UT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;r.uniform3uiv(this.addr,t),Tn(n,t)}}function NT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;r.uniform4uiv(this.addr,t),Tn(n,t)}}function PT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(gp.compareFunction=n.isReversedDepthBuffer()?Dp:Cp,c=gp):c=px,n.setTexture2D(t||c,l)}function OT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture3D(t||gx,l)}function IT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTextureCube(t||_x,l)}function BT(r,t,n){const a=this.cache,l=n.allocateTextureUnit();a[0]!==l&&(r.uniform1i(this.addr,l),a[0]=l),n.setTexture2DArray(t||mx,l)}function zT(r){switch(r){case 5126:return xT;case 35664:return yT;case 35665:return ST;case 35666:return MT;case 35674:return bT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return AT;case 35667:case 35671:return RT;case 35668:case 35672:return wT;case 35669:case 35673:return CT;case 5125:return DT;case 36294:return LT;case 36295:return UT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return IT;case 36289:case 36303:case 36311:case 36292:return BT}}function FT(r,t){r.uniform1fv(this.addr,t)}function HT(r,t){const n=oo(t,this.size,2);r.uniform2fv(this.addr,n)}function GT(r,t){const n=oo(t,this.size,3);r.uniform3fv(this.addr,n)}function VT(r,t){const n=oo(t,this.size,4);r.uniform4fv(this.addr,n)}function kT(r,t){const n=oo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function WT(r,t){const n=oo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function XT(r,t){const n=oo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function KT(r,t){r.uniform1iv(this.addr,t)}function qT(r,t){r.uniform2iv(this.addr,t)}function YT(r,t){r.uniform3iv(this.addr,t)}function jT(r,t){r.uniform4iv(this.addr,t)}function ZT(r,t){r.uniform1uiv(this.addr,t)}function QT(r,t){r.uniform2uiv(this.addr,t)}function JT(r,t){r.uniform3uiv(this.addr,t)}function $T(r,t){r.uniform4uiv(this.addr,t)}function tA(r,t,n){const a=this.cache,l=t.length,c=Uu(n,l);En(a,c)||(r.uniform1iv(this.addr,c),Tn(a,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=gp:f=px;for(let d=0;d!==l;++d)n.setTexture2D(t[d]||f,c[d])}function eA(r,t,n){const a=this.cache,l=t.length,c=Uu(n,l);En(a,c)||(r.uniform1iv(this.addr,c),Tn(a,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||gx,c[f])}function nA(r,t,n){const a=this.cache,l=t.length,c=Uu(n,l);En(a,c)||(r.uniform1iv(this.addr,c),Tn(a,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||_x,c[f])}function iA(r,t,n){const a=this.cache,l=t.length,c=Uu(n,l);En(a,c)||(r.uniform1iv(this.addr,c),Tn(a,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||mx,c[f])}function aA(r){switch(r){case 5126:return FT;case 35664:return HT;case 35665:return GT;case 35666:return VT;case 35674:return kT;case 35675:return WT;case 35676:return XT;case 5124:case 35670:return KT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return jT;case 5125:return ZT;case 36294:return QT;case 36295:return JT;case 36296:return $T;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return eA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}class sA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=zT(n.type)}}class rA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=aA(n.type)}}class oA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,n[d.id],a)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function vv(r,t){r.seq.push(t),r.map[t.id]=t}function lA(r,t,n){const a=r.name,l=a.length;for(yd.lastIndex=0;;){const c=yd.exec(a),f=yd.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){vv(n,p===void 0?new sA(d,r,t):new rA(d,r,t));break}else{let g=n.map[d];g===void 0&&(g=new oA(d),vv(n,g)),n=g}}}class _u{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let f=0;f<a;++f){const d=t.getActiveUniform(n,f),m=t.getUniformLocation(n,d.name);lA(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,n,a,l){const c=this.map[n];c!==void 0&&c.setValue(t,a,l)}setOptional(t,n,a){const l=n[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,n,a,l){for(let c=0,f=n.length;c!==f;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,n){const a=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&a.push(f)}return a}}function xv(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const cA=37297;let uA=0;function fA(r,t){const n=r.split(`
`),a=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const d=f+1;a.push(`${d===t?">":" "} ${d}: ${n[f]}`)}return a.join(`
`)}const yv=new me;function hA(r){we._getMatrix(yv,we.workingColorSpace,r);const t=`mat3( ${yv.elements.map(n=>n.toFixed(4))} )`;switch(we.getTransfer(r)){case xu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Sv(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+fA(r.getShaderSource(t),d)}else return c}function dA(r,t){const n=hA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const pA={[Bv]:"Linear",[zv]:"Reinhard",[Fv]:"Cineon",[Sp]:"ACESFilmic",[Gv]:"AgX",[Vv]:"Neutral",[Hv]:"Custom"};function mA(r,t){const n=pA[t];return n===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const uu=new F;function gA(){we.getLuminanceCoefficients(uu);const r=uu.x.toFixed(4),t=uu.y.toFixed(4),n=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _A(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function vA(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function xA(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return n}function gl(r){return r!==""}function Mv(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(r){return r.replace(yA,MA)}const SA=new Map;function MA(r,t){let n=_e[t];if(n===void 0){const a=SA.get(t);if(a!==void 0)n=_e[a],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return _p(n)}const bA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(r){return r.replace(bA,EA)}function EA(r,t,n,a){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Tv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const TA={[hu]:"SHADOWMAP_TYPE_PCF",[pl]:"SHADOWMAP_TYPE_VSM"};function AA(r){return TA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RA={[Ys]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE",[wu]:"ENVMAP_TYPE_CUBE_UV"};function wA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":RA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const CA={[eo]:"ENVMAP_MODE_REFRACTION"};function DA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":CA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LA={[Iv]:"ENVMAP_BLENDING_MULTIPLY",[nM]:"ENVMAP_BLENDING_MIX",[iM]:"ENVMAP_BLENDING_ADD"};function UA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":LA[r.combine]||"ENVMAP_BLENDING_NONE"}function NA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function PA(r,t,n,a){const l=r.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const m=AA(n),p=wA(n),_=DA(n),g=UA(n),x=NA(n),S=_A(n),b=vA(c),A=l.createProgram();let M,v,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(gl).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(gl).join(`
`),v.length>0&&(v+=`
`)):(M=[Tv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),v=[Tv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ia?"#define TONE_MAPPING":"",n.toneMapping!==ia?_e.tonemapping_pars_fragment:"",n.toneMapping!==ia?mA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,dA("linearToOutputTexel",n.outputColorSpace),gA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gl).join(`
`)),f=_p(f),f=Mv(f,n),f=bv(f,n),d=_p(d),d=Mv(d,n),d=bv(d,n),f=Ev(f),d=Ev(d),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",n.glslVersion===D_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===D_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=D+M+f,L=D+v+d,I=xv(l,l.VERTEX_SHADER,U),z=xv(l,l.FRAGMENT_SHADER,L);l.attachShader(A,I),l.attachShader(A,z),n.index0AttributeName!==void 0?l.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(H){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(A)||"",j=l.getShaderInfoLog(I)||"",lt=l.getShaderInfoLog(z)||"",ut=K.trim(),B=j.trim(),V=lt.trim();let at=!0,Mt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(at=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,I,z);else{const St=Sv(l,I,"vertex"),N=Sv(l,z,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ut+`
`+St+`
`+N)}else ut!==""?oe("WebGLProgram: Program Info Log:",ut):(B===""||V==="")&&(Mt=!1);Mt&&(H.diagnostics={runnable:at,programLog:ut,vertexShader:{log:B,prefix:M},fragmentShader:{log:V,prefix:v}})}l.deleteShader(I),l.deleteShader(z),Y=new _u(l,A),T=xA(l,A)}let Y;this.getUniforms=function(){return Y===void 0&&O(this),Y};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,cA)),C},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=z,this}let OA=0;class IA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new BA(t),n.set(t,a)),a}}class BA{constructor(t){this.id=OA++,this.code=t,this.usedTimes=0}}function zA(r,t,n,a,l,c,f){const d=new tx,m=new IA,p=new Set,_=[],g=new Map,x=l.logarithmicDepthBuffer;let S=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function M(T,C,H,K,j){const lt=K.fog,ut=j.geometry,B=T.isMeshStandardMaterial?K.environment:null,V=(T.isMeshStandardMaterial?n:t).get(T.envMap||B),at=V&&V.mapping===wu?V.image.height:null,Mt=b[T.type];T.precision!==null&&(S=l.getMaxPrecision(T.precision),S!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const St=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,N=St!==void 0?St.length:0;let tt=0;ut.morphAttributes.position!==void 0&&(tt=1),ut.morphAttributes.normal!==void 0&&(tt=2),ut.morphAttributes.color!==void 0&&(tt=3);let gt,Rt,Gt,nt;if(Mt){const Ae=ta[Mt];gt=Ae.vertexShader,Rt=Ae.fragmentShader}else gt=T.vertexShader,Rt=T.fragmentShader,m.update(T),Gt=m.getVertexShaderID(T),nt=m.getFragmentShaderID(T);const ht=r.getRenderTarget(),Ct=r.state.buffers.depth.getReversed(),It=j.isInstancedMesh===!0,Ft=j.isBatchedMesh===!0,le=!!T.map,$e=!!T.matcap,he=!!V,ge=!!T.aoMap,Le=!!T.lightMap,ue=!!T.bumpMap,an=!!T.normalMap,W=!!T.displacementMap,tn=!!T.emissiveMap,Te=!!T.metalnessMap,Ie=!!T.roughnessMap,Yt=T.anisotropy>0,P=T.clearcoat>0,E=T.dispersion>0,Z=T.iridescence>0,pt=T.sheen>0,yt=T.transmission>0,ft=Yt&&!!T.anisotropyMap,Zt=P&&!!T.clearcoatMap,Dt=P&&!!T.clearcoatNormalMap,Xt=P&&!!T.clearcoatRoughnessMap,ie=Z&&!!T.iridescenceMap,Et=Z&&!!T.iridescenceThicknessMap,Tt=pt&&!!T.sheenColorMap,Ht=pt&&!!T.sheenRoughnessMap,Bt=!!T.specularMap,Lt=!!T.specularColorMap,de=!!T.specularIntensityMap,q=yt&&!!T.transmissionMap,Nt=yt&&!!T.thicknessMap,At=!!T.gradientMap,zt=!!T.alphaMap,bt=T.alphaTest>0,xt=!!T.alphaHash,wt=!!T.extensions;let ae=ia;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ae=r.toneMapping);const ze={shaderID:Mt,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:Rt,defines:T.defines,customVertexShaderID:Gt,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:Ft,batchingColor:Ft&&j._colorsTexture!==null,instancing:It,instancingColor:It&&j.instanceColor!==null,instancingMorph:It&&j.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:io,alphaToCoverage:!!T.alphaToCoverage,map:le,matcap:$e,envMap:he,envMapMode:he&&V.mapping,envMapCubeUVHeight:at,aoMap:ge,lightMap:Le,bumpMap:ue,normalMap:an,displacementMap:W,emissiveMap:tn,normalMapObjectSpace:an&&T.normalMapType===rM,normalMapTangentSpace:an&&T.normalMapType===Zv,metalnessMap:Te,roughnessMap:Ie,anisotropy:Yt,anisotropyMap:ft,clearcoat:P,clearcoatMap:Zt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:Z,iridescenceMap:ie,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:Tt,sheenRoughnessMap:Ht,specularMap:Bt,specularColorMap:Lt,specularIntensityMap:de,transmission:yt,transmissionMap:q,thicknessMap:Nt,gradientMap:At,opaque:T.transparent===!1&&T.blending===Jr&&T.alphaToCoverage===!1,alphaMap:zt,alphaTest:bt,alphaHash:xt,combine:T.combine,mapUv:le&&A(T.map.channel),aoMapUv:ge&&A(T.aoMap.channel),lightMapUv:Le&&A(T.lightMap.channel),bumpMapUv:ue&&A(T.bumpMap.channel),normalMapUv:an&&A(T.normalMap.channel),displacementMapUv:W&&A(T.displacementMap.channel),emissiveMapUv:tn&&A(T.emissiveMap.channel),metalnessMapUv:Te&&A(T.metalnessMap.channel),roughnessMapUv:Ie&&A(T.roughnessMap.channel),anisotropyMapUv:ft&&A(T.anisotropyMap.channel),clearcoatMapUv:Zt&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&A(T.sheenRoughnessMap.channel),specularMapUv:Bt&&A(T.specularMap.channel),specularColorMapUv:Lt&&A(T.specularColorMap.channel),specularIntensityMapUv:de&&A(T.specularIntensityMap.channel),transmissionMapUv:q&&A(T.transmissionMap.channel),thicknessMapUv:Nt&&A(T.thicknessMap.channel),alphaMapUv:zt&&A(T.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(an||Yt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ut.attributes.uv&&(le||zt),fog:!!lt,useFog:T.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ct,skinning:j.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:tt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:le&&T.map.isVideoTexture===!0&&we.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:tn&&T.emissiveMap.isVideoTexture===!0&&we.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===si,flipSided:T.side===Kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:wt&&T.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&T.extensions.multiDraw===!0||Ft)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function v(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)C.push(H),C.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(D(C,T),U(C,T),C.push(r.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function D(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function U(T,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),T.push(d.mask)}function L(T){const C=b[T.type];let H;if(C){const K=ta[C];H=bu.clone(K.uniforms)}else H=T.uniforms;return H}function I(T,C){let H=g.get(C);return H!==void 0?++H.usedTimes:(H=new PA(r,C,T,c),_.push(H),g.set(C,H)),H}function z(T){if(--T.usedTimes===0){const C=_.indexOf(T);_[C]=_[_.length-1],_.pop(),g.delete(T.cacheKey),T.destroy()}}function O(T){m.remove(T)}function Y(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:L,acquireProgram:I,releaseProgram:z,releaseShaderCache:O,programs:_,dispose:Y}}function FA(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function a(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:a,update:l,dispose:c}}function HA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Av(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Rv(){const r=[];let t=0;const n=[],a=[],l=[];function c(){t=0,n.length=0,a.length=0,l.length=0}function f(g,x,S,b,A,M){let v=r[t];return v===void 0?(v={id:g.id,object:g,geometry:x,material:S,groupOrder:b,renderOrder:g.renderOrder,z:A,group:M},r[t]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=S,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=A,v.group=M),t++,v}function d(g,x,S,b,A,M){const v=f(g,x,S,b,A,M);S.transmission>0?a.push(v):S.transparent===!0?l.push(v):n.push(v)}function m(g,x,S,b,A,M){const v=f(g,x,S,b,A,M);S.transmission>0?a.unshift(v):S.transparent===!0?l.unshift(v):n.unshift(v)}function p(g,x){n.length>1&&n.sort(g||HA),a.length>1&&a.sort(x||Av),l.length>1&&l.sort(x||Av)}function _(){for(let g=t,x=r.length;g<x;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function GA(){let r=new WeakMap;function t(a,l){const c=r.get(a);let f;return c===void 0?(f=new Rv,r.set(a,[f])):l>=c.length?(f=new Rv,c.push(f)):f=c[l],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function VA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new F,color:new se};break;case"SpotLight":n={position:new F,direction:new F,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=n,n}}}function kA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let WA=0;function XA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function KA(r){const t=new VA,n=kA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new F);const l=new F,c=new Ye,f=new Ye;function d(p){let _=0,g=0,x=0;for(let T=0;T<9;T++)a.probe[T].set(0,0,0);let S=0,b=0,A=0,M=0,v=0,D=0,U=0,L=0,I=0,z=0,O=0;p.sort(XA);for(let T=0,C=p.length;T<C;T++){const H=p[T],K=H.color,j=H.intensity,lt=H.distance;let ut=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===no?ut=H.shadow.map.texture:ut=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)_+=K.r*j,g+=K.g*j,x+=K.b*j;else if(H.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(H.sh.coefficients[B],j);O++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,at=n.get(H);at.shadowIntensity=V.intensity,at.shadowBias=V.bias,at.shadowNormalBias=V.normalBias,at.shadowRadius=V.radius,at.shadowMapSize=V.mapSize,a.directionalShadow[S]=at,a.directionalShadowMap[S]=ut,a.directionalShadowMatrix[S]=H.shadow.matrix,D++}a.directional[S]=B,S++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(K).multiplyScalar(j),B.distance=lt,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,a.spot[A]=B;const V=H.shadow;if(H.map&&(a.spotLightMap[I]=H.map,I++,V.updateMatrices(H),H.castShadow&&z++),a.spotLightMatrix[A]=V.matrix,H.castShadow){const at=n.get(H);at.shadowIntensity=V.intensity,at.shadowBias=V.bias,at.shadowNormalBias=V.normalBias,at.shadowRadius=V.radius,at.shadowMapSize=V.mapSize,a.spotShadow[A]=at,a.spotShadowMap[A]=ut,L++}A++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(K).multiplyScalar(j),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),a.rectArea[M]=B,M++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const V=H.shadow,at=n.get(H);at.shadowIntensity=V.intensity,at.shadowBias=V.bias,at.shadowNormalBias=V.normalBias,at.shadowRadius=V.radius,at.shadowMapSize=V.mapSize,at.shadowCameraNear=V.camera.near,at.shadowCameraFar=V.camera.far,a.pointShadow[b]=at,a.pointShadowMap[b]=ut,a.pointShadowMatrix[b]=H.shadow.matrix,U++}a.point[b]=B,b++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(j),B.groundColor.copy(H.groundColor).multiplyScalar(j),a.hemi[v]=B,v++}}M>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=x;const Y=a.hash;(Y.directionalLength!==S||Y.pointLength!==b||Y.spotLength!==A||Y.rectAreaLength!==M||Y.hemiLength!==v||Y.numDirectionalShadows!==D||Y.numPointShadows!==U||Y.numSpotShadows!==L||Y.numSpotMaps!==I||Y.numLightProbes!==O)&&(a.directional.length=S,a.spot.length=A,a.rectArea.length=M,a.point.length=b,a.hemi.length=v,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=L+I-z,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=O,Y.directionalLength=S,Y.pointLength=b,Y.spotLength=A,Y.rectAreaLength=M,Y.hemiLength=v,Y.numDirectionalShadows=D,Y.numPointShadows=U,Y.numSpotShadows=L,Y.numSpotMaps=I,Y.numLightProbes=O,a.version=WA++)}function m(p,_){let g=0,x=0,S=0,b=0,A=0;const M=_.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const U=p[v];if(U.isDirectionalLight){const L=a.directional[g];L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),g++}else if(U.isSpotLight){const L=a.spot[S];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const L=a.rectArea[b];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),b++}else if(U.isPointLight){const L=a.point[x];L.position.setFromMatrixPosition(U.matrixWorld),L.position.applyMatrix4(M),x++}else if(U.isHemisphereLight){const L=a.hemi[A];L.direction.setFromMatrixPosition(U.matrixWorld),L.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:a}}function wv(r){const t=new KA(r),n=[],a=[];function l(_){p.camera=_,n.length=0,a.length=0}function c(_){n.push(_)}function f(_){a.push(_)}function d(){t.setup(n)}function m(_){t.setupView(n,_)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function qA(r){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new wv(r),t.set(l,[d])):c>=f.length?(d=new wv(r),f.push(d)):d=f[c],d}function a(){t=new WeakMap}return{get:n,dispose:a}}const YA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZA=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],QA=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Cv=new Ye,dl=new F,Sd=new F;function JA(r,t,n){let a=new Pp;const l=new ne,c=new ne,f=new ln,d=new c1,m=new u1,p={},_=n.maxTextureSize,g={[ps]:Kn,[Kn]:ps,[si]:si},x=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:YA,fragmentShader:jA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const b=new bn;b.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ve(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let v=this.type;this.render=function(z,O,Y){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;z.type===Ov&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=hu);const T=r.getRenderTarget(),C=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),K=r.state;K.setBlending(na),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const j=v!==this.type;j&&O.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(ut=>ut.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,ut=z.length;lt<ut;lt++){const B=z[lt],V=B.shadow;if(V===void 0){oe("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const at=V.getFrameExtents();if(l.multiply(at),c.copy(V.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/at.x),l.x=c.x*at.x,V.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/at.y),l.y=c.y*at.y,V.mapSize.y=c.y)),V.map===null||j===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===pl){if(B.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ri(l.x,l.y,{format:no,type:Pi,minFilter:wn,magFilter:wn,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new bl(l.x,l.y,qi),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=Na,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Hn,V.map.depthTexture.magFilter=Hn}else{B.isPointLight?(V.map=new ox(l.x),V.map.depthTexture=new o1(l.x,aa)):(V.map=new ri(l.x,l.y),V.map.depthTexture=new bl(l.x,l.y,aa)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=Na;const St=r.state.buffers.depth.getReversed();this.type===hu?(V.map.depthTexture.compareFunction=St?Dp:Cp,V.map.depthTexture.minFilter=wn,V.map.depthTexture.magFilter=wn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Hn,V.map.depthTexture.magFilter=Hn)}V.camera.updateProjectionMatrix()}const Mt=V.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<Mt;St++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,St),r.clear();else{St===0&&(r.setRenderTarget(V.map),r.clear());const N=V.getViewport(St);f.set(c.x*N.x,c.y*N.y,c.x*N.z,c.y*N.w),K.viewport(f)}if(B.isPointLight){const N=V.camera,tt=V.matrix,gt=B.distance||N.far;gt!==N.far&&(N.far=gt,N.updateProjectionMatrix()),dl.setFromMatrixPosition(B.matrixWorld),N.position.copy(dl),Sd.copy(N.position),Sd.add(ZA[St]),N.up.copy(QA[St]),N.lookAt(Sd),N.updateMatrixWorld(),tt.makeTranslation(-dl.x,-dl.y,-dl.z),Cv.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Cv,N.coordinateSystem,N.reversedDepth)}else V.updateMatrices(B);a=V.getFrustum(),L(O,Y,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===pl&&D(V,Y),V.needsUpdate=!1}v=this.type,M.needsUpdate=!1,r.setRenderTarget(T,C,H)};function D(z,O){const Y=t.update(A);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ri(l.x,l.y,{format:no,type:Pi})),x.uniforms.shadow_pass.value=z.map.depthTexture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(O,null,Y,x,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(O,null,Y,S,A,null)}function U(z,O,Y,T){let C=null;const H=Y.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)C=H;else if(C=Y.isPointLight===!0?m:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=C.uuid,j=O.uuid;let lt=p[K];lt===void 0&&(lt={},p[K]=lt);let ut=lt[j];ut===void 0&&(ut=C.clone(),lt[j]=ut,O.addEventListener("dispose",I)),C=ut}if(C.visible=O.visible,C.wireframe=O.wireframe,T===pl?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:g[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=r.properties.get(C);K.light=Y}return C}function L(z,O,Y,T,C){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===pl)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,z.matrixWorld);const j=t.update(z),lt=z.material;if(Array.isArray(lt)){const ut=j.groups;for(let B=0,V=ut.length;B<V;B++){const at=ut[B],Mt=lt[at.materialIndex];if(Mt&&Mt.visible){const St=U(z,Mt,T,C);z.onBeforeShadow(r,z,O,Y,j,St,at),r.renderBufferDirect(Y,null,j,St,z,at),z.onAfterShadow(r,z,O,Y,j,St,at)}}}else if(lt.visible){const ut=U(z,lt,T,C);z.onBeforeShadow(r,z,O,Y,j,ut,null),r.renderBufferDirect(Y,null,j,ut,z,null),z.onAfterShadow(r,z,O,Y,j,ut,null)}}const K=z.children;for(let j=0,lt=K.length;j<lt;j++)L(K[j],O,Y,T,C)}function I(z){z.target.removeEventListener("dispose",I);for(const Y in p){const T=p[Y],C=z.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}const $A={[Td]:Ad,[Rd]:Dd,[wd]:Ld,[to]:Cd,[Ad]:Td,[Dd]:Rd,[Ld]:wd,[Cd]:to};function tR(r,t){function n(){let q=!1;const Nt=new ln;let At=null;const zt=new ln(0,0,0,0);return{setMask:function(bt){At!==bt&&!q&&(r.colorMask(bt,bt,bt,bt),At=bt)},setLocked:function(bt){q=bt},setClear:function(bt,xt,wt,ae,ze){ze===!0&&(bt*=ae,xt*=ae,wt*=ae),Nt.set(bt,xt,wt,ae),zt.equals(Nt)===!1&&(r.clearColor(bt,xt,wt,ae),zt.copy(Nt))},reset:function(){q=!1,At=null,zt.set(-1,0,0,0)}}}function a(){let q=!1,Nt=!1,At=null,zt=null,bt=null;return{setReversed:function(xt){if(Nt!==xt){const wt=t.get("EXT_clip_control");xt?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),Nt=xt;const ae=bt;bt=null,this.setClear(ae)}},getReversed:function(){return Nt},setTest:function(xt){xt?ht(r.DEPTH_TEST):Ct(r.DEPTH_TEST)},setMask:function(xt){At!==xt&&!q&&(r.depthMask(xt),At=xt)},setFunc:function(xt){if(Nt&&(xt=$A[xt]),zt!==xt){switch(xt){case Td:r.depthFunc(r.NEVER);break;case Ad:r.depthFunc(r.ALWAYS);break;case Rd:r.depthFunc(r.LESS);break;case to:r.depthFunc(r.LEQUAL);break;case wd:r.depthFunc(r.EQUAL);break;case Cd:r.depthFunc(r.GEQUAL);break;case Dd:r.depthFunc(r.GREATER);break;case Ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}zt=xt}},setLocked:function(xt){q=xt},setClear:function(xt){bt!==xt&&(Nt&&(xt=1-xt),r.clearDepth(xt),bt=xt)},reset:function(){q=!1,At=null,zt=null,bt=null,Nt=!1}}}function l(){let q=!1,Nt=null,At=null,zt=null,bt=null,xt=null,wt=null,ae=null,ze=null;return{setTest:function(Ae){q||(Ae?ht(r.STENCIL_TEST):Ct(r.STENCIL_TEST))},setMask:function(Ae){Nt!==Ae&&!q&&(r.stencilMask(Ae),Nt=Ae)},setFunc:function(Ae,Vn,Oi){(At!==Ae||zt!==Vn||bt!==Oi)&&(r.stencilFunc(Ae,Vn,Oi),At=Ae,zt=Vn,bt=Oi)},setOp:function(Ae,Vn,Oi){(xt!==Ae||wt!==Vn||ae!==Oi)&&(r.stencilOp(Ae,Vn,Oi),xt=Ae,wt=Vn,ae=Oi)},setLocked:function(Ae){q=Ae},setClear:function(Ae){ze!==Ae&&(r.clearStencil(Ae),ze=Ae)},reset:function(){q=!1,Nt=null,At=null,zt=null,bt=null,xt=null,wt=null,ae=null,ze=null}}}const c=new n,f=new a,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,S=[],b=null,A=!1,M=null,v=null,D=null,U=null,L=null,I=null,z=null,O=new se(0,0,0),Y=0,T=!1,C=null,H=null,K=null,j=null,lt=null;const ut=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const at=r.getParameter(r.VERSION);at.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(at)[1]),B=V>=1):at.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),B=V>=2);let Mt=null,St={};const N=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),gt=new ln().fromArray(N),Rt=new ln().fromArray(tt);function Gt(q,Nt,At,zt){const bt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(q,xt),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<At;wt++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Nt,0,r.RGBA,1,1,zt,0,r.RGBA,r.UNSIGNED_BYTE,bt):r.texImage2D(Nt+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,bt);return xt}const nt={};nt[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ht(r.DEPTH_TEST),f.setFunc(to),ue(!1),an(A_),ht(r.CULL_FACE),ge(na);function ht(q){_[q]!==!0&&(r.enable(q),_[q]=!0)}function Ct(q){_[q]!==!1&&(r.disable(q),_[q]=!1)}function It(q,Nt){return g[q]!==Nt?(r.bindFramebuffer(q,Nt),g[q]=Nt,q===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Nt),q===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Ft(q,Nt){let At=S,zt=!1;if(q){At=x.get(Nt),At===void 0&&(At=[],x.set(Nt,At));const bt=q.textures;if(At.length!==bt.length||At[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,wt=bt.length;xt<wt;xt++)At[xt]=r.COLOR_ATTACHMENT0+xt;At.length=bt.length,zt=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,zt=!0);zt&&r.drawBuffers(At)}function le(q){return b!==q?(r.useProgram(q),b=q,!0):!1}const $e={[Gs]:r.FUNC_ADD,[FS]:r.FUNC_SUBTRACT,[HS]:r.FUNC_REVERSE_SUBTRACT};$e[GS]=r.MIN,$e[VS]=r.MAX;const he={[kS]:r.ZERO,[WS]:r.ONE,[XS]:r.SRC_COLOR,[bd]:r.SRC_ALPHA,[QS]:r.SRC_ALPHA_SATURATE,[jS]:r.DST_COLOR,[qS]:r.DST_ALPHA,[KS]:r.ONE_MINUS_SRC_COLOR,[Ed]:r.ONE_MINUS_SRC_ALPHA,[ZS]:r.ONE_MINUS_DST_COLOR,[YS]:r.ONE_MINUS_DST_ALPHA,[JS]:r.CONSTANT_COLOR,[$S]:r.ONE_MINUS_CONSTANT_COLOR,[tM]:r.CONSTANT_ALPHA,[eM]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(q,Nt,At,zt,bt,xt,wt,ae,ze,Ae){if(q===na){A===!0&&(Ct(r.BLEND),A=!1);return}if(A===!1&&(ht(r.BLEND),A=!0),q!==zS){if(q!==M||Ae!==T){if((v!==Gs||L!==Gs)&&(r.blendEquation(r.FUNC_ADD),v=Gs,L=Gs),Ae)switch(q){case Jr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yn:r.blendFunc(r.ONE,r.ONE);break;case R_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case w_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Re("WebGLState: Invalid blending: ",q);break}else switch(q){case Jr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case yn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case R_:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w_:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",q);break}D=null,U=null,I=null,z=null,O.set(0,0,0),Y=0,M=q,T=Ae}return}bt=bt||Nt,xt=xt||At,wt=wt||zt,(Nt!==v||bt!==L)&&(r.blendEquationSeparate($e[Nt],$e[bt]),v=Nt,L=bt),(At!==D||zt!==U||xt!==I||wt!==z)&&(r.blendFuncSeparate(he[At],he[zt],he[xt],he[wt]),D=At,U=zt,I=xt,z=wt),(ae.equals(O)===!1||ze!==Y)&&(r.blendColor(ae.r,ae.g,ae.b,ze),O.copy(ae),Y=ze),M=q,T=!1}function Le(q,Nt){q.side===si?Ct(r.CULL_FACE):ht(r.CULL_FACE);let At=q.side===Kn;Nt&&(At=!At),ue(At),q.blending===Jr&&q.transparent===!1?ge(na):ge(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),f.setFunc(q.depthFunc),f.setTest(q.depthTest),f.setMask(q.depthWrite),c.setMask(q.colorWrite);const zt=q.stencilWrite;d.setTest(zt),zt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),tn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Ct(r.SAMPLE_ALPHA_TO_COVERAGE)}function ue(q){C!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),C=q)}function an(q){q!==IS?(ht(r.CULL_FACE),q!==H&&(q===A_?r.cullFace(r.BACK):q===BS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ct(r.CULL_FACE),H=q}function W(q){q!==K&&(B&&r.lineWidth(q),K=q)}function tn(q,Nt,At){q?(ht(r.POLYGON_OFFSET_FILL),(j!==Nt||lt!==At)&&(r.polygonOffset(Nt,At),j=Nt,lt=At)):Ct(r.POLYGON_OFFSET_FILL)}function Te(q){q?ht(r.SCISSOR_TEST):Ct(r.SCISSOR_TEST)}function Ie(q){q===void 0&&(q=r.TEXTURE0+ut-1),Mt!==q&&(r.activeTexture(q),Mt=q)}function Yt(q,Nt,At){At===void 0&&(Mt===null?At=r.TEXTURE0+ut-1:At=Mt);let zt=St[At];zt===void 0&&(zt={type:void 0,texture:void 0},St[At]=zt),(zt.type!==q||zt.texture!==Nt)&&(Mt!==At&&(r.activeTexture(At),Mt=At),r.bindTexture(q,Nt||nt[q]),zt.type=q,zt.texture=Nt)}function P(){const q=St[Mt];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function pt(){try{r.texSubImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function yt(){try{r.texSubImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function Dt(){try{r.texStorage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function Xt(){try{r.texStorage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function ie(){try{r.texImage2D(...arguments)}catch(q){Re("WebGLState:",q)}}function Et(){try{r.texImage3D(...arguments)}catch(q){Re("WebGLState:",q)}}function Tt(q){gt.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),gt.copy(q))}function Ht(q){Rt.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Rt.copy(q))}function Bt(q,Nt){let At=p.get(Nt);At===void 0&&(At=new WeakMap,p.set(Nt,At));let zt=At.get(q);zt===void 0&&(zt=r.getUniformBlockIndex(Nt,q.name),At.set(q,zt))}function Lt(q,Nt){const zt=p.get(Nt).get(q);m.get(Nt)!==zt&&(r.uniformBlockBinding(Nt,zt,q.__bindingPointIndex),m.set(Nt,zt))}function de(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},Mt=null,St={},g={},x=new WeakMap,S=[],b=null,A=!1,M=null,v=null,D=null,U=null,L=null,I=null,z=null,O=new se(0,0,0),Y=0,T=!1,C=null,H=null,K=null,j=null,lt=null,gt.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:ht,disable:Ct,bindFramebuffer:It,drawBuffers:Ft,useProgram:le,setBlending:ge,setMaterial:Le,setFlipSided:ue,setCullFace:an,setLineWidth:W,setPolygonOffset:tn,setScissorTest:Te,activeTexture:Ie,bindTexture:Yt,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:ie,texImage3D:Et,updateUBOMapping:Bt,uniformBlockBinding:Lt,texStorage2D:Dt,texStorage3D:Xt,texSubImage2D:pt,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Zt,scissor:Tt,viewport:Ht,reset:de}}function eR(r,t,n,a,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ne,_=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,E){return S?new OffscreenCanvas(P,E):Su("canvas")}function A(P,E,Z){let pt=1;const yt=Yt(P);if((yt.width>Z||yt.height>Z)&&(pt=Z/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ft=Math.floor(pt*yt.width),Zt=Math.floor(pt*yt.height);g===void 0&&(g=b(ft,Zt));const Dt=E?b(ft,Zt):g;return Dt.width=ft,Dt.height=Zt,Dt.getContext("2d").drawImage(P,0,0,ft,Zt),oe("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+Zt+")."),Dt}else return"data"in P&&oe("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),P;return P}function M(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(P,E,Z,pt,yt=!1){if(P!==null){if(r[P]!==void 0)return r[P];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ft=E;if(E===r.RED&&(Z===r.FLOAT&&(ft=r.R32F),Z===r.HALF_FLOAT&&(ft=r.R16F),Z===r.UNSIGNED_BYTE&&(ft=r.R8)),E===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ft=r.R8UI),Z===r.UNSIGNED_SHORT&&(ft=r.R16UI),Z===r.UNSIGNED_INT&&(ft=r.R32UI),Z===r.BYTE&&(ft=r.R8I),Z===r.SHORT&&(ft=r.R16I),Z===r.INT&&(ft=r.R32I)),E===r.RG&&(Z===r.FLOAT&&(ft=r.RG32F),Z===r.HALF_FLOAT&&(ft=r.RG16F),Z===r.UNSIGNED_BYTE&&(ft=r.RG8)),E===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ft=r.RG8UI),Z===r.UNSIGNED_SHORT&&(ft=r.RG16UI),Z===r.UNSIGNED_INT&&(ft=r.RG32UI),Z===r.BYTE&&(ft=r.RG8I),Z===r.SHORT&&(ft=r.RG16I),Z===r.INT&&(ft=r.RG32I)),E===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),Z===r.UNSIGNED_INT&&(ft=r.RGB32UI),Z===r.BYTE&&(ft=r.RGB8I),Z===r.SHORT&&(ft=r.RGB16I),Z===r.INT&&(ft=r.RGB32I)),E===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),Z===r.UNSIGNED_INT&&(ft=r.RGBA32UI),Z===r.BYTE&&(ft=r.RGBA8I),Z===r.SHORT&&(ft=r.RGBA16I),Z===r.INT&&(ft=r.RGBA32I)),E===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),E===r.RGBA){const Zt=yt?xu:we.getTransfer(pt);Z===r.FLOAT&&(ft=r.RGBA32F),Z===r.HALF_FLOAT&&(ft=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(ft=Zt===Ve?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function L(P,E){let Z;return P?E===null||E===aa||E===yl?Z=r.DEPTH24_STENCIL8:E===qi?Z=r.DEPTH32F_STENCIL8:E===xl&&(Z=r.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===aa||E===yl?Z=r.DEPTH_COMPONENT24:E===qi?Z=r.DEPTH_COMPONENT32F:E===xl&&(Z=r.DEPTH_COMPONENT16),Z}function I(P,E){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Hn&&P.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function z(P){const E=P.target;E.removeEventListener("dispose",z),Y(E),E.isVideoTexture&&_.delete(E)}function O(P){const E=P.target;E.removeEventListener("dispose",O),C(E)}function Y(P){const E=a.get(P);if(E.__webglInit===void 0)return;const Z=P.source,pt=x.get(Z);if(pt){const yt=pt[E.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&T(P),Object.keys(pt).length===0&&x.delete(Z)}a.remove(P)}function T(P){const E=a.get(P);r.deleteTexture(E.__webglTexture);const Z=P.source,pt=x.get(Z);delete pt[E.__cacheKey],f.memory.textures--}function C(P){const E=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let yt=0;yt<E.__webglFramebuffer[pt].length;yt++)r.deleteFramebuffer(E.__webglFramebuffer[pt][yt]);else r.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)r.deleteFramebuffer(E.__webglFramebuffer[pt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=P.textures;for(let pt=0,yt=Z.length;pt<yt;pt++){const ft=a.get(Z[pt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),f.memory.textures--),a.remove(Z[pt])}a.remove(P)}let H=0;function K(){H=0}function j(){const P=H;return P>=l.maxTextures&&oe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),H+=1,P}function lt(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ut(P,E){const Z=a.get(P);if(P.isVideoTexture&&Te(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Z.__version!==P.version){const pt=P.image;if(pt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Z,P,E);return}}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+E)}function B(P,E){const Z=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){nt(Z,P,E);return}else P.isExternalTexture&&(Z.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+E)}function V(P,E){const Z=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){nt(Z,P,E);return}n.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+E)}function at(P,E){const Z=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Z.__version!==P.version){ht(Z,P,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+E)}const Mt={[Pd]:r.REPEAT,[Ca]:r.CLAMP_TO_EDGE,[Od]:r.MIRRORED_REPEAT},St={[Hn]:r.NEAREST,[aM]:r.NEAREST_MIPMAP_NEAREST,[Bc]:r.NEAREST_MIPMAP_LINEAR,[wn]:r.LINEAR,[Wh]:r.LINEAR_MIPMAP_NEAREST,[ks]:r.LINEAR_MIPMAP_LINEAR},N={[oM]:r.NEVER,[hM]:r.ALWAYS,[lM]:r.LESS,[Cp]:r.LEQUAL,[cM]:r.EQUAL,[Dp]:r.GEQUAL,[uM]:r.GREATER,[fM]:r.NOTEQUAL};function tt(P,E){if(E.type===qi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===Wh||E.magFilter===Bc||E.magFilter===ks||E.minFilter===wn||E.minFilter===Wh||E.minFilter===Bc||E.minFilter===ks)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Mt[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Mt[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Mt[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,St[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Hn||E.minFilter!==Bc&&E.minFilter!==ks||E.type===qi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function gt(P,E){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const pt=E.source;let yt=x.get(pt);yt===void 0&&(yt={},x.set(pt,yt));const ft=lt(E);if(ft!==P.__cacheKey){yt[ft]===void 0&&(yt[ft]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),yt[ft].usedTimes++;const Zt=yt[P.__cacheKey];Zt!==void 0&&(yt[P.__cacheKey].usedTimes--,Zt.usedTimes===0&&T(E)),P.__cacheKey=ft,P.__webglTexture=yt[ft].texture}return Z}function Rt(P,E,Z){return Math.floor(Math.floor(P/Z)/E)}function Gt(P,E,Z,pt){const ft=P.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Z,pt,E.data);else{ft.sort((Et,Tt)=>Et.start-Tt.start);let Zt=0;for(let Et=1;Et<ft.length;Et++){const Tt=ft[Zt],Ht=ft[Et],Bt=Tt.start+Tt.count,Lt=Rt(Ht.start,E.width,4),de=Rt(Tt.start,E.width,4);Ht.start<=Bt+1&&Lt===de&&Rt(Ht.start+Ht.count-1,E.width,4)===Lt?Tt.count=Math.max(Tt.count,Ht.start+Ht.count-Tt.start):(++Zt,ft[Zt]=Ht)}ft.length=Zt+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),Xt=r.getParameter(r.UNPACK_SKIP_PIXELS),ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Tt=ft.length;Et<Tt;Et++){const Ht=ft[Et],Bt=Math.floor(Ht.start/4),Lt=Math.ceil(Ht.count/4),de=Bt%E.width,q=Math.floor(Bt/E.width),Nt=Lt,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,de),r.pixelStorei(r.UNPACK_SKIP_ROWS,q),n.texSubImage2D(r.TEXTURE_2D,0,de,q,Nt,At,Z,pt,E.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ie)}}function nt(P,E,Z){let pt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=r.TEXTURE_3D);const yt=gt(P,E),ft=E.source;n.bindTexture(pt,P.__webglTexture,r.TEXTURE0+Z);const Zt=a.get(ft);if(ft.version!==Zt.__version||yt===!0){n.activeTexture(r.TEXTURE0+Z);const Dt=we.getPrimaries(we.workingColorSpace),Xt=E.colorSpace===hs?null:we.getPrimaries(E.colorSpace),ie=E.colorSpace===hs||Dt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Et=A(E.image,!1,l.maxTextureSize);Et=Ie(E,Et);const Tt=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type);let Bt=U(E.internalFormat,Tt,Ht,E.colorSpace,E.isVideoTexture);tt(pt,E);let Lt;const de=E.mipmaps,q=E.isVideoTexture!==!0,Nt=Zt.__version===void 0||yt===!0,At=ft.dataReady,zt=I(E,Et);if(E.isDepthTexture)Bt=L(E.format===Ws,E.type),Nt&&(q?n.texStorage2D(r.TEXTURE_2D,1,Bt,Et.width,Et.height):n.texImage2D(r.TEXTURE_2D,0,Bt,Et.width,Et.height,0,Tt,Ht,null));else if(E.isDataTexture)if(de.length>0){q&&Nt&&n.texStorage2D(r.TEXTURE_2D,zt,Bt,de[0].width,de[0].height);for(let bt=0,xt=de.length;bt<xt;bt++)Lt=de[bt],q?At&&n.texSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Tt,Ht,Lt.data):n.texImage2D(r.TEXTURE_2D,bt,Bt,Lt.width,Lt.height,0,Tt,Ht,Lt.data);E.generateMipmaps=!1}else q?(Nt&&n.texStorage2D(r.TEXTURE_2D,zt,Bt,Et.width,Et.height),At&&Gt(E,Et,Tt,Ht)):n.texImage2D(r.TEXTURE_2D,0,Bt,Et.width,Et.height,0,Tt,Ht,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){q&&Nt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Bt,de[0].width,de[0].height,Et.depth);for(let bt=0,xt=de.length;bt<xt;bt++)if(Lt=de[bt],E.format!==Ni)if(Tt!==null)if(q){if(At)if(E.layerUpdates.size>0){const wt=rv(Lt.width,Lt.height,E.format,E.type);for(const ae of E.layerUpdates){const ze=Lt.data.subarray(ae*wt/Lt.data.BYTES_PER_ELEMENT,(ae+1)*wt/Lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,ae,Lt.width,Lt.height,1,Tt,ze)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Lt.width,Lt.height,Et.depth,Tt,Lt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,bt,Bt,Lt.width,Lt.height,Et.depth,0,Lt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?At&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,bt,0,0,0,Lt.width,Lt.height,Et.depth,Tt,Ht,Lt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,bt,Bt,Lt.width,Lt.height,Et.depth,0,Tt,Ht,Lt.data)}else{q&&Nt&&n.texStorage2D(r.TEXTURE_2D,zt,Bt,de[0].width,de[0].height);for(let bt=0,xt=de.length;bt<xt;bt++)Lt=de[bt],E.format!==Ni?Tt!==null?q?At&&n.compressedTexSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Tt,Lt.data):n.compressedTexImage2D(r.TEXTURE_2D,bt,Bt,Lt.width,Lt.height,0,Lt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?At&&n.texSubImage2D(r.TEXTURE_2D,bt,0,0,Lt.width,Lt.height,Tt,Ht,Lt.data):n.texImage2D(r.TEXTURE_2D,bt,Bt,Lt.width,Lt.height,0,Tt,Ht,Lt.data)}else if(E.isDataArrayTexture)if(q){if(Nt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Bt,Et.width,Et.height,Et.depth),At)if(E.layerUpdates.size>0){const bt=rv(Et.width,Et.height,E.format,E.type);for(const xt of E.layerUpdates){const wt=Et.data.subarray(xt*bt/Et.data.BYTES_PER_ELEMENT,(xt+1)*bt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Et.width,Et.height,1,Tt,Ht,wt)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Tt,Ht,Et.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Bt,Et.width,Et.height,Et.depth,0,Tt,Ht,Et.data);else if(E.isData3DTexture)q?(Nt&&n.texStorage3D(r.TEXTURE_3D,zt,Bt,Et.width,Et.height,Et.depth),At&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Tt,Ht,Et.data)):n.texImage3D(r.TEXTURE_3D,0,Bt,Et.width,Et.height,Et.depth,0,Tt,Ht,Et.data);else if(E.isFramebufferTexture){if(Nt)if(q)n.texStorage2D(r.TEXTURE_2D,zt,Bt,Et.width,Et.height);else{let bt=Et.width,xt=Et.height;for(let wt=0;wt<zt;wt++)n.texImage2D(r.TEXTURE_2D,wt,Bt,bt,xt,0,Tt,Ht,null),bt>>=1,xt>>=1}}else if(de.length>0){if(q&&Nt){const bt=Yt(de[0]);n.texStorage2D(r.TEXTURE_2D,zt,Bt,bt.width,bt.height)}for(let bt=0,xt=de.length;bt<xt;bt++)Lt=de[bt],q?At&&n.texSubImage2D(r.TEXTURE_2D,bt,0,0,Tt,Ht,Lt):n.texImage2D(r.TEXTURE_2D,bt,Bt,Tt,Ht,Lt);E.generateMipmaps=!1}else if(q){if(Nt){const bt=Yt(Et);n.texStorage2D(r.TEXTURE_2D,zt,Bt,bt.width,bt.height)}At&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt,Ht,Et)}else n.texImage2D(r.TEXTURE_2D,0,Bt,Tt,Ht,Et);M(E)&&v(pt),Zt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ht(P,E,Z){if(E.image.length!==6)return;const pt=gt(P,E),yt=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Z);const ft=a.get(yt);if(yt.version!==ft.__version||pt===!0){n.activeTexture(r.TEXTURE0+Z);const Zt=we.getPrimaries(we.workingColorSpace),Dt=E.colorSpace===hs?null:we.getPrimaries(E.colorSpace),Xt=E.colorSpace===hs||Zt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ie=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let xt=0;xt<6;xt++)!ie&&!Et?Tt[xt]=A(E.image[xt],!0,l.maxCubemapSize):Tt[xt]=Et?E.image[xt].image:E.image[xt],Tt[xt]=Ie(E,Tt[xt]);const Ht=Tt[0],Bt=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type),de=U(E.internalFormat,Bt,Lt,E.colorSpace),q=E.isVideoTexture!==!0,Nt=ft.__version===void 0||pt===!0,At=yt.dataReady;let zt=I(E,Ht);tt(r.TEXTURE_CUBE_MAP,E);let bt;if(ie){q&&Nt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,zt,de,Ht.width,Ht.height);for(let xt=0;xt<6;xt++){bt=Tt[xt].mipmaps;for(let wt=0;wt<bt.length;wt++){const ae=bt[wt];E.format!==Ni?Bt!==null?q?At&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,ae.width,ae.height,Bt,ae.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,de,ae.width,ae.height,0,ae.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,0,0,ae.width,ae.height,Bt,Lt,ae.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt,de,ae.width,ae.height,0,Bt,Lt,ae.data)}}}else{if(bt=E.mipmaps,q&&Nt){bt.length>0&&zt++;const xt=Yt(Tt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,zt,de,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Et){q?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Tt[xt].width,Tt[xt].height,Bt,Lt,Tt[xt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Tt[xt].width,Tt[xt].height,0,Bt,Lt,Tt[xt].data);for(let wt=0;wt<bt.length;wt++){const ze=bt[wt].image[xt].image;q?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,ze.width,ze.height,Bt,Lt,ze.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,de,ze.width,ze.height,0,Bt,Lt,ze.data)}}else{q?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Bt,Lt,Tt[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,de,Bt,Lt,Tt[xt]);for(let wt=0;wt<bt.length;wt++){const ae=bt[wt];q?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,0,0,Bt,Lt,ae.image[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,wt+1,de,Bt,Lt,ae.image[xt])}}}M(E)&&v(r.TEXTURE_CUBE_MAP),ft.__version=yt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ct(P,E,Z,pt,yt,ft){const Zt=c.convert(Z.format,Z.colorSpace),Dt=c.convert(Z.type),Xt=U(Z.internalFormat,Zt,Dt,Z.colorSpace),ie=a.get(E),Et=a.get(Z);if(Et.__renderTarget=E,!ie.__hasExternalTextures){const Tt=Math.max(1,E.width>>ft),Ht=Math.max(1,E.height>>ft);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?n.texImage3D(yt,ft,Xt,Tt,Ht,E.depth,0,Zt,Dt,null):n.texImage2D(yt,ft,Xt,Tt,Ht,0,Zt,Dt,null)}n.bindFramebuffer(r.FRAMEBUFFER,P),tn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,yt,Et.__webglTexture,0,W(E)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,yt,Et.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function It(P,E,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const pt=E.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ft=L(E.stencilBuffer,yt),Zt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;tn(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(E),ft,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(E),ft,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ft,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,P)}else{const pt=E.textures;for(let yt=0;yt<pt.length;yt++){const ft=pt[yt],Zt=c.convert(ft.format,ft.colorSpace),Dt=c.convert(ft.type),Xt=U(ft.internalFormat,Zt,Dt,ft.colorSpace);tn(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,W(E),Xt,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,W(E),Xt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Xt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ft(P,E,Z){const pt=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=a.get(E.depthTexture);if(yt.__renderTarget=E,(!yt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),yt.__webglTexture===void 0){yt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),tt(r.TEXTURE_CUBE_MAP,E.depthTexture);const ie=c.convert(E.depthTexture.format),Et=c.convert(E.depthTexture.type);let Tt;E.depthTexture.format===Na?Tt=r.DEPTH_COMPONENT24:E.depthTexture.format===Ws&&(Tt=r.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Tt,E.width,E.height,0,ie,Et,null)}}else ut(E.depthTexture,0);const ft=yt.__webglTexture,Zt=W(E),Dt=pt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Z:r.TEXTURE_2D,Xt=E.depthTexture.format===Ws?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Na)tn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,Dt,ft,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,Dt,ft,0);else if(E.depthTexture.format===Ws)tn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,Dt,ft,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,Dt,ft,0);else throw new Error("Unknown depthTexture format")}function le(P){const E=a.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const pt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const yt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),E.__depthDisposeCallback=yt}E.__boundDepthTexture=pt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let pt=0;pt<6;pt++)Ft(E.__webglFramebuffer[pt],P,pt);else{const pt=P.texture.mipmaps;pt&&pt.length>0?Ft(E.__webglFramebuffer[0],P,0):Ft(E.__webglFramebuffer,P,0)}else if(Z){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=r.createRenderbuffer(),It(E.__webglDepthbuffer[pt],P,!1);else{const yt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ft)}}else{const pt=P.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),It(E.__webglDepthbuffer,P,!1);else{const yt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function $e(P,E,Z){const pt=a.get(P);E!==void 0&&Ct(pt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&le(P)}function he(P){const E=P.texture,Z=a.get(P),pt=a.get(E);P.addEventListener("dispose",O);const yt=P.textures,ft=P.isWebGLCubeRenderTarget===!0,Zt=yt.length>1;if(Zt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=E.version,f.memory.textures++),ft){Z.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Dt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)Z.__webglFramebuffer[Dt][Xt]=r.createFramebuffer()}else Z.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)Z.__webglFramebuffer[Dt]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let Dt=0,Xt=yt.length;Dt<Xt;Dt++){const ie=a.get(yt[Dt]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&tn(P)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const Xt=yt[Dt];Z.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Dt]);const ie=c.convert(Xt.format,Xt.colorSpace),Et=c.convert(Xt.type),Tt=U(Xt.internalFormat,ie,Et,Xt.colorSpace,P.isXRRenderTarget===!0),Ht=W(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Tt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),It(Z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),tt(r.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Ct(Z.__webglFramebuffer[Dt][Xt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Xt);else Ct(Z.__webglFramebuffer[Dt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(E)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let Dt=0,Xt=yt.length;Dt<Xt;Dt++){const ie=yt[Dt],Et=a.get(ie);let Tt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Tt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Tt,Et.__webglTexture),tt(Tt,ie),Ct(Z.__webglFramebuffer,P,ie,r.COLOR_ATTACHMENT0+Dt,Tt,0),M(ie)&&v(Tt)}n.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Dt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Dt,pt.__webglTexture),tt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)Ct(Z.__webglFramebuffer[Xt],P,E,r.COLOR_ATTACHMENT0,Dt,Xt);else Ct(Z.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,Dt,0);M(E)&&v(Dt),n.unbindTexture()}P.depthBuffer&&le(P)}function ge(P){const E=P.textures;for(let Z=0,pt=E.length;Z<pt;Z++){const yt=E[Z];if(M(yt)){const ft=D(P),Zt=a.get(yt).__webglTexture;n.bindTexture(ft,Zt),v(ft),n.unbindTexture()}}}const Le=[],ue=[];function an(P){if(P.samples>0){if(tn(P)===!1){const E=P.textures,Z=P.width,pt=P.height;let yt=r.COLOR_BUFFER_BIT;const ft=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=a.get(P),Dt=E.length>1;if(Dt)for(let ie=0;ie<E.length;ie++)n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=P.texture.mipmaps;Xt&&Xt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const Et=a.get(E[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,Z,pt,0,0,Z,pt,yt,r.NEAREST),m===!0&&(Le.length=0,ue.length=0,Le.push(r.COLOR_ATTACHMENT0+ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Le.push(ft),ue.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ue)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Le))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let ie=0;ie<E.length;ie++){n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ie]);const Et=a.get(E[ie]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,Et,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function W(P){return Math.min(l.maxSamples,P.samples)}function tn(P){const E=a.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(P){const E=f.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function Ie(P,E){const Z=P.colorSpace,pt=P.format,yt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==io&&Z!==hs&&(we.getTransfer(Z)===Ve?(pt!==Ni||yt!==_i)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",Z)),E}function Yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=j,this.resetTextureUnits=K,this.setTexture2D=ut,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=at,this.rebindTextures=$e,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function nR(r,t){function n(a,l=hs){let c;const f=we.getTransfer(l);if(a===_i)return r.UNSIGNED_BYTE;if(a===bp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Ep)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Kv)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===qv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Wv)return r.BYTE;if(a===Xv)return r.SHORT;if(a===xl)return r.UNSIGNED_SHORT;if(a===Mp)return r.INT;if(a===aa)return r.UNSIGNED_INT;if(a===qi)return r.FLOAT;if(a===Pi)return r.HALF_FLOAT;if(a===Yv)return r.ALPHA;if(a===jv)return r.RGB;if(a===Ni)return r.RGBA;if(a===Na)return r.DEPTH_COMPONENT;if(a===Ws)return r.DEPTH_STENCIL;if(a===Tp)return r.RED;if(a===Ap)return r.RED_INTEGER;if(a===no)return r.RG;if(a===Rp)return r.RG_INTEGER;if(a===wp)return r.RGBA_INTEGER;if(a===du||a===pu||a===mu||a===gu)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===du)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===du)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===pu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===gu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Id||a===Bd||a===zd||a===Fd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===zd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Hd||a===Gd||a===Vd||a===kd||a===Wd||a===Xd||a===Kd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Hd||a===Gd)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Vd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===kd)return c.COMPRESSED_R11_EAC;if(a===Wd)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Xd)return c.COMPRESSED_RG11_EAC;if(a===Kd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===qd||a===Yd||a===jd||a===Zd||a===Qd||a===Jd||a===$d||a===tp||a===ep||a===np||a===ip||a===ap||a===sp||a===rp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===qd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Yd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===jd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Zd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Qd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Jd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===$d)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===tp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ep)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===np)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ip)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ap)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===sp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===rp)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===op||a===lp||a===cp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===op)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===lp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===cp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===up||a===fp||a===hp||a===dp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===up)return c.COMPRESSED_RED_RGTC1_EXT;if(a===fp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===hp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===dp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===yl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const iR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new fx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Gn({vertexShader:iR,fragmentShader:aR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ve(new Li(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rR extends so{constructor(t,n){super();const a=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,S=null,b=null;const A=typeof XRWebGLBinding<"u",M=new sR,v={},D=n.getContextAttributes();let U=null,L=null;const I=[],z=[],O=new ne;let Y=null;const T=new gi;T.viewport=new ln;const C=new gi;C.viewport=new ln;const H=[T,C],K=new m1;let j=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ht=I[nt];return ht===void 0&&(ht=new fd,I[nt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(nt){let ht=I[nt];return ht===void 0&&(ht=new fd,I[nt]=ht),ht.getGripSpace()},this.getHand=function(nt){let ht=I[nt];return ht===void 0&&(ht=new fd,I[nt]=ht),ht.getHandSpace()};function ut(nt){const ht=z.indexOf(nt.inputSource);if(ht===-1)return;const Ct=I[ht];Ct!==void 0&&(Ct.update(nt.inputSource,nt.frame,p||f),Ct.dispatchEvent({type:nt.type,data:nt.inputSource}))}function B(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",V);for(let nt=0;nt<I.length;nt++){const ht=z[nt];ht!==null&&(z[nt]=null,I[nt].disconnect(ht))}j=null,lt=null,M.reset();for(const nt in v)delete v[nt];t.setRenderTarget(U),S=null,x=null,g=null,l=null,L=null,Gt.stop(),a.isPresenting=!1,t.setPixelRatio(Y),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,a.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,a.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,n)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",B),l.addEventListener("inputsourceschange",V),D.xrCompatible!==!0&&await n.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,It=null,Ft=null;D.depth&&(Ft=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ct=D.stencil?Ws:Na,It=D.stencil?yl:aa);const le={colorFormat:n.RGBA8,depthFormat:Ft,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(le),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),L=new ri(x.textureWidth,x.textureHeight,{format:Ni,type:_i,depthTexture:new bl(x.textureWidth,x.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ct={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,n,Ct),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new ri(S.framebufferWidth,S.framebufferHeight,{format:Ni,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Gt.setContext(l),Gt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(nt){for(let ht=0;ht<nt.removed.length;ht++){const Ct=nt.removed[ht],It=z.indexOf(Ct);It>=0&&(z[It]=null,I[It].disconnect(Ct))}for(let ht=0;ht<nt.added.length;ht++){const Ct=nt.added[ht];let It=z.indexOf(Ct);if(It===-1){for(let le=0;le<I.length;le++)if(le>=z.length){z.push(Ct),It=le;break}else if(z[le]===null){z[le]=Ct,It=le;break}if(It===-1)break}const Ft=I[It];Ft&&Ft.connect(Ct)}}const at=new F,Mt=new F;function St(nt,ht,Ct){at.setFromMatrixPosition(ht.matrixWorld),Mt.setFromMatrixPosition(Ct.matrixWorld);const It=at.distanceTo(Mt),Ft=ht.projectionMatrix.elements,le=Ct.projectionMatrix.elements,$e=Ft[14]/(Ft[10]-1),he=Ft[14]/(Ft[10]+1),ge=(Ft[9]+1)/Ft[5],Le=(Ft[9]-1)/Ft[5],ue=(Ft[8]-1)/Ft[0],an=(le[8]+1)/le[0],W=$e*ue,tn=$e*an,Te=It/(-ue+an),Ie=Te*-ue;if(ht.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ie),nt.translateZ(Te),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ft[10]===-1)nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Yt=$e+Te,P=he+Te,E=W-Ie,Z=tn+(It-Ie),pt=ge*he/P*Yt,yt=Le*he/P*Yt;nt.projectionMatrix.makePerspective(E,Z,pt,yt,Yt,P),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function N(nt,ht){ht===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ht.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ht=nt.near,Ct=nt.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Ct=M.depthFar)),K.near=C.near=T.near=ht,K.far=C.far=T.far=Ct,(j!==K.near||lt!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),j=K.near,lt=K.far),K.layers.mask=nt.layers.mask|6,T.layers.mask=K.layers.mask&3,C.layers.mask=K.layers.mask&5;const It=nt.parent,Ft=K.cameras;N(K,It);for(let le=0;le<Ft.length;le++)N(Ft[le],It);Ft.length===2?St(K,T,C):K.projectionMatrix.copy(T.projectionMatrix),tt(nt,K,It)};function tt(nt,ht,Ct){Ct===null?nt.matrix.copy(ht.matrixWorld):(nt.matrix.copy(Ct.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ht.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ml*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=nt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(nt){return v[nt]};let gt=null;function Rt(nt,ht){if(_=ht.getViewerPose(p||f),b=ht,_!==null){const Ct=_.views;S!==null&&(t.setRenderTargetFramebuffer(L,S.framebuffer),t.setRenderTarget(L));let It=!1;Ct.length!==K.cameras.length&&(K.cameras.length=0,It=!0);for(let he=0;he<Ct.length;he++){const ge=Ct[he];let Le=null;if(S!==null)Le=S.getViewport(ge);else{const an=g.getViewSubImage(x,ge);Le=an.viewport,he===0&&(t.setRenderTargetTextures(L,an.colorTexture,an.depthStencilTexture),t.setRenderTarget(L))}let ue=H[he];ue===void 0&&(ue=new gi,ue.layers.enable(he),ue.viewport=new ln,H[he]=ue),ue.matrix.fromArray(ge.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ge.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Le.x,Le.y,Le.width,Le.height),he===0&&(K.matrix.copy(ue.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),It===!0&&K.cameras.push(ue)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=a.getBinding();const he=g.getDepthInformation(Ct[0]);he&&he.isValid&&he.texture&&M.init(he,l.renderState)}if(Ft&&Ft.includes("camera-access")&&A){t.state.unbindTexture(),g=a.getBinding();for(let he=0;he<Ct.length;he++){const ge=Ct[he].camera;if(ge){let Le=v[ge];Le||(Le=new fx,v[ge]=Le);const ue=g.getCameraImage(ge);Le.sourceTexture=ue}}}}for(let Ct=0;Ct<I.length;Ct++){const It=z[Ct],Ft=I[Ct];It!==null&&Ft!==void 0&&Ft.update(It,ht,p||f)}gt&&gt(nt,ht),ht.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ht}),b=null}const Gt=new dx;Gt.setAnimationLoop(Rt),this.setAnimationLoop=function(nt){gt=nt},this.dispose=function(){}}}const zs=new sa,oR=new Ye;function lR(r,t){function n(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function a(M,v){v.color.getRGB(M.fogColor.value,ax(r)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,D,U,L){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),g(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&S(M,v,L)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),A(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,D,U):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,n(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,n(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Kn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,n(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Kn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,n(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,n(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const D=t.get(v),U=D.envMap,L=D.envMapRotation;U&&(M.envMap.value=U,zs.copy(L),zs.x*=-1,zs.y*=-1,zs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),M.envMapRotation.value.setFromMatrix4(oR.makeRotationFromEuler(zs)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,n(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,D,U){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*D,M.scale.value=U*.5,v.map&&(M.map.value=v.map,n(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,n(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,D){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Kn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function A(M,v){const D=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function cR(r,t,n,a){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,U){const L=U.program;a.uniformBlockBinding(D,L)}function p(D,U){let L=l[D.id];L===void 0&&(b(D),L=_(D),l[D.id]=L,D.addEventListener("dispose",M));const I=U.program;a.updateUBOMapping(D,I);const z=t.render.frame;c[D.id]!==z&&(x(D),c[D.id]=z)}function _(D){const U=g();D.__bindingPointIndex=U;const L=r.createBuffer(),I=D.__size,z=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,I,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,L),L}function g(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const U=l[D.id],L=D.uniforms,I=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let z=0,O=L.length;z<O;z++){const Y=Array.isArray(L[z])?L[z]:[L[z]];for(let T=0,C=Y.length;T<C;T++){const H=Y[T];if(S(H,z,T,I)===!0){const K=H.__offset,j=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let ut=0;ut<j.length;ut++){const B=j[ut],V=A(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,K+lt,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,lt),lt+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,U,L,I){const z=D.value,O=U+"_"+L;if(I[O]===void 0)return typeof z=="number"||typeof z=="boolean"?I[O]=z:I[O]=z.clone(),!0;{const Y=I[O];if(typeof z=="number"||typeof z=="boolean"){if(Y!==z)return I[O]=z,!0}else if(Y.equals(z)===!1)return Y.copy(z),!0}return!1}function b(D){const U=D.uniforms;let L=0;const I=16;for(let O=0,Y=U.length;O<Y;O++){const T=Array.isArray(U[O])?U[O]:[U[O]];for(let C=0,H=T.length;C<H;C++){const K=T[C],j=Array.isArray(K.value)?K.value:[K.value];for(let lt=0,ut=j.length;lt<ut;lt++){const B=j[lt],V=A(B),at=L%I,Mt=at%V.boundary,St=at+Mt;L+=Mt,St!==0&&I-St<V.storage&&(L+=I-St),K.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=L,L+=V.storage}}}const z=L%I;return z>0&&(L+=I-z),D.__size=L,D.__cache={},this}function A(D){const U={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(U.boundary=4,U.storage=4):D.isVector2?(U.boundary=8,U.storage=8):D.isVector3||D.isColor?(U.boundary=16,U.storage=12):D.isVector4?(U.boundary=16,U.storage=16):D.isMatrix3?(U.boundary=48,U.storage=48):D.isMatrix4?(U.boundary=64,U.storage=64):D.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",D),U}function M(D){const U=D.target;U.removeEventListener("dispose",M);const L=f.indexOf(U.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const D in l)r.deleteBuffer(l[D]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const uR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function fR(){return $i===null&&($i=new ux(uR,16,16,no,Pi),$i.name="DFG_LUT",$i.minFilter=wn,$i.magFilter=wn,$i.wrapS=Ca,$i.wrapT=Ca,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class hR{constructor(t={}){const{canvas:n=pM(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:S=_i}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=f;const A=S,M=new Set([wp,Rp,Ap]),v=new Set([_i,aa,xl,yl,bp,Ep]),D=new Uint32Array(4),U=new Int32Array(4);let L=null,I=null;const z=[],O=[];let Y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ia,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1;this._outputColorSpace=Di;let H=0,K=0,j=null,lt=-1,ut=null;const B=new ln,V=new ln;let at=null;const Mt=new se(0);let St=0,N=n.width,tt=n.height,gt=1,Rt=null,Gt=null;const nt=new ln(0,0,N,tt),ht=new ln(0,0,N,tt);let Ct=!1;const It=new Pp;let Ft=!1,le=!1;const $e=new Ye,he=new F,ge=new ln,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function an(){return j===null?gt:1}let W=a;function tn(w,Q){return n.getContext(w,Q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yp}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),W===null){const Q="webgl2";if(W=tn(Q,w),W===null)throw tn(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Re("WebGLRenderer: "+w.message),w}let Te,Ie,Yt,P,E,Z,pt,yt,ft,Zt,Dt,Xt,ie,Et,Tt,Ht,Bt,Lt,de,q,Nt,At,zt,bt;function xt(){Te=new fT(W),Te.init(),At=new nR(W,Te),Ie=new nT(W,Te,t,At),Yt=new tR(W,Te),Ie.reversedDepthBuffer&&x&&Yt.buffers.depth.setReversed(!0),P=new pT(W),E=new FA,Z=new eR(W,Te,Yt,E,Ie,At,P),pt=new aT(T),yt=new uT(T),ft=new v1(W),zt=new tT(W,ft),Zt=new hT(W,ft,P,zt),Dt=new gT(W,Zt,ft,P),de=new mT(W,Ie,Z),Ht=new iT(E),Xt=new zA(T,pt,yt,Te,Ie,zt,Ht),ie=new lR(T,E),Et=new GA,Tt=new qA(Te),Lt=new $E(T,pt,yt,Yt,Dt,b,m),Bt=new JA(T,Dt,Ie),bt=new cR(W,P,Ie,Yt),q=new eT(W,Te,P),Nt=new dT(W,Te,P),P.programs=Xt.programs,T.capabilities=Ie,T.extensions=Te,T.properties=E,T.renderLists=Et,T.shadowMap=Bt,T.state=Yt,T.info=P}xt(),A!==_i&&(Y=new vT(A,n.width,n.height,l,c));const wt=new rR(T,W);this.xr=wt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(w){w!==void 0&&(gt=w,this.setSize(N,tt,!1))},this.getSize=function(w){return w.set(N,tt)},this.setSize=function(w,Q,ot=!0){if(wt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,tt=Q,n.width=Math.floor(w*gt),n.height=Math.floor(Q*gt),ot===!0&&(n.style.width=w+"px",n.style.height=Q+"px"),Y!==null&&Y.setSize(n.width,n.height),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(N*gt,tt*gt).floor()},this.setDrawingBufferSize=function(w,Q,ot){N=w,tt=Q,gt=ot,n.width=Math.floor(w*ot),n.height=Math.floor(Q*ot),this.setViewport(0,0,w,Q)},this.setEffects=function(w){if(A===_i){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Q=0;Q<w.length;Q++)if(w[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Y.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,Q,ot,st){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,Q,ot,st),Yt.viewport(B.copy(nt).multiplyScalar(gt).round())},this.getScissor=function(w){return w.copy(ht)},this.setScissor=function(w,Q,ot,st){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,Q,ot,st),Yt.scissor(V.copy(ht).multiplyScalar(gt).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(w){Yt.setScissorTest(Ct=w)},this.setOpaqueSort=function(w){Rt=w},this.setTransparentSort=function(w){Gt=w},this.getClearColor=function(w){return w.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,ot=!0){let st=0;if(w){let $=!1;if(j!==null){const Ut=j.texture.format;$=M.has(Ut)}if($){const Ut=j.texture.type,Vt=v.has(Ut),Pt=Lt.getClearColor(),kt=Lt.getClearAlpha(),Kt=Pt.r,$t=Pt.g,qt=Pt.b;Vt?(D[0]=Kt,D[1]=$t,D[2]=qt,D[3]=kt,W.clearBufferuiv(W.COLOR,0,D)):(U[0]=Kt,U[1]=$t,U[2]=qt,U[3]=kt,W.clearBufferiv(W.COLOR,0,U))}else st|=W.COLOR_BUFFER_BIT}Q&&(st|=W.DEPTH_BUFFER_BIT),ot&&(st|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),Lt.dispose(),Et.dispose(),Tt.dispose(),E.dispose(),pt.dispose(),yt.dispose(),Dt.dispose(),zt.dispose(),bt.dispose(),Xt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Js),wt.removeEventListener("sessionend",uo),Yi.stop()};function ae(w){w.preventDefault(),Mu("WebGLRenderer: Context Lost."),C=!0}function ze(){Mu("WebGLRenderer: Context Restored."),C=!1;const w=P.autoReset,Q=Bt.enabled,ot=Bt.autoUpdate,st=Bt.needsUpdate,$=Bt.type;xt(),P.autoReset=w,Bt.enabled=Q,Bt.autoUpdate=ot,Bt.needsUpdate=st,Bt.type=$}function Ae(w){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Vn(w){const Q=w.target;Q.removeEventListener("dispose",Vn),Oi(Q)}function Oi(w){Al(w),E.remove(w)}function Al(w){const Q=E.get(w).programs;Q!==void 0&&(Q.forEach(function(ot){Xt.releaseProgram(ot)}),w.isShaderMaterial&&Xt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,ot,st,$,Ut){Q===null&&(Q=Le);const Vt=$.isMesh&&$.matrixWorld.determinant()<0,Pt=ms(w,Q,ot,st,$);Yt.setMaterial(st,Vt);let kt=ot.index,Kt=1;if(st.wireframe===!0){if(kt=Zt.getWireframeAttribute(ot),kt===void 0)return;Kt=2}const $t=ot.drawRange,qt=ot.attributes.position;let te=$t.start*Kt,Ue=($t.start+$t.count)*Kt;Ut!==null&&(te=Math.max(te,Ut.start*Kt),Ue=Math.min(Ue,(Ut.start+Ut.count)*Kt)),kt!==null?(te=Math.max(te,0),Ue=Math.min(Ue,kt.count)):qt!=null&&(te=Math.max(te,0),Ue=Math.min(Ue,qt.count));const en=Ue-te;if(en<0||en===1/0)return;zt.setup($,st,Pt,ot,kt);let je,Be=q;if(kt!==null&&(je=ft.get(kt),Be=Nt,Be.setIndex(je)),$.isMesh)st.wireframe===!0?(Yt.setLineWidth(st.wireframeLinewidth*an()),Be.setMode(W.LINES)):Be.setMode(W.TRIANGLES);else if($.isLine){let Qt=st.linewidth;Qt===void 0&&(Qt=1),Yt.setLineWidth(Qt*an()),$.isLineSegments?Be.setMode(W.LINES):$.isLineLoop?Be.setMode(W.LINE_LOOP):Be.setMode(W.LINE_STRIP)}else $.isPoints?Be.setMode(W.POINTS):$.isSprite&&Be.setMode(W.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Be.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Be.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qt=$._multiDrawStarts,Ne=$._multiDrawCounts,re=$._multiDrawCount,Dn=kt?ft.get(kt).bytesPerElement:1,ra=E.get(st).currentProgram.getUniforms();for(let Ln=0;Ln<re;Ln++)ra.setValue(W,"_gl_DrawID",Ln),Be.render(Qt[Ln]/Dn,Ne[Ln])}else if($.isInstancedMesh)Be.renderInstances(te,en,$.count);else if(ot.isInstancedBufferGeometry){const Qt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ne=Math.min(ot.instanceCount,Qt);Be.renderInstances(te,en,Ne)}else Be.render(te,en)};function lo(w,Q,ot){w.transparent===!0&&w.side===si&&w.forceSinglePass===!1?(w.side=Kn,w.needsUpdate=!0,tr(w,Q,ot),w.side=ps,w.needsUpdate=!0,tr(w,Q,ot),w.side=si):tr(w,Q,ot)}this.compile=function(w,Q,ot=null){ot===null&&(ot=w),I=Tt.get(ot),I.init(Q),O.push(I),ot.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),w!==ot&&w.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(I.pushLight($),$.castShadow&&I.pushShadow($))}),I.setupLights();const st=new Set;return w.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ut=$.material;if(Ut)if(Array.isArray(Ut))for(let Vt=0;Vt<Ut.length;Vt++){const Pt=Ut[Vt];lo(Pt,ot,$),st.add(Pt)}else lo(Ut,ot,$),st.add(Ut)}),I=O.pop(),st},this.compileAsync=function(w,Q,ot=null){const st=this.compile(w,Q,ot);return new Promise($=>{function Ut(){if(st.forEach(function(Vt){E.get(Vt).currentProgram.isReady()&&st.delete(Vt)}),st.size===0){$(w);return}setTimeout(Ut,10)}Te.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Qs=null;function co(w){Qs&&Qs(w)}function Js(){Yi.stop()}function uo(){Yi.start()}const Yi=new dx;Yi.setAnimationLoop(co),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(w){Qs=w,wt.setAnimationLoop(w),w===null?Yi.stop():Yi.start()},wt.addEventListener("sessionstart",Js),wt.addEventListener("sessionend",uo),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const ot=wt.enabled===!0&&wt.isPresenting===!0,st=Y!==null&&(j===null||ot)&&Y.begin(T,j);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(Y===null||Y.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(Q),Q=wt.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,Q,j),I=Tt.get(w,O.length),I.init(Q),O.push(I),$e.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),It.setFromProjectionMatrix($e,ea,Q.reversedDepth),le=this.localClippingEnabled,Ft=Ht.init(this.clippingPlanes,le),L=Et.get(w,z.length),L.init(),z.push(L),wt.enabled===!0&&wt.isPresenting===!0){const Vt=T.xr.getDepthSensingMesh();Vt!==null&&vi(Vt,Q,-1/0,T.sortObjects)}vi(w,Q,0,T.sortObjects),L.finish(),T.sortObjects===!0&&L.sort(Rt,Gt),ue=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,ue&&Lt.addToRenderList(L,w),this.info.render.frame++,Ft===!0&&Ht.beginShadows();const $=I.state.shadowsArray;if(Bt.render($,w,Q),Ft===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&Y.hasRenderPass())===!1){const Vt=L.opaque,Pt=L.transmissive;if(I.setupLights(),Q.isArrayCamera){const kt=Q.cameras;if(Pt.length>0)for(let Kt=0,$t=kt.length;Kt<$t;Kt++){const qt=kt[Kt];Cn(Vt,Pt,w,qt)}ue&&Lt.render(w);for(let Kt=0,$t=kt.length;Kt<$t;Kt++){const qt=kt[Kt];pn(L,w,qt,qt.viewport)}}else Pt.length>0&&Cn(Vt,Pt,w,Q),ue&&Lt.render(w),pn(L,w,Q)}j!==null&&K===0&&(Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j)),st&&Y.end(T),w.isScene===!0&&w.onAfterRender(T,w,Q),zt.resetDefaultState(),lt=-1,ut=null,O.pop(),O.length>0?(I=O[O.length-1],Ft===!0&&Ht.setGlobalState(T.clippingPlanes,I.state.camera)):I=null,z.pop(),z.length>0?L=z[z.length-1]:L=null};function vi(w,Q,ot,st){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)I.pushLight(w),w.castShadow&&I.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||It.intersectsSprite(w)){st&&ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4($e);const Vt=Dt.update(w),Pt=w.material;Pt.visible&&L.push(w,Vt,Pt,ot,ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||It.intersectsObject(w))){const Vt=Dt.update(w),Pt=w.material;if(st&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ge.copy(Vt.boundingSphere.center)),ge.applyMatrix4(w.matrixWorld).applyMatrix4($e)),Array.isArray(Pt)){const kt=Vt.groups;for(let Kt=0,$t=kt.length;Kt<$t;Kt++){const qt=kt[Kt],te=Pt[qt.materialIndex];te&&te.visible&&L.push(w,Vt,te,ot,ge.z,qt)}}else Pt.visible&&L.push(w,Vt,Pt,ot,ge.z,null)}}const Ut=w.children;for(let Vt=0,Pt=Ut.length;Vt<Pt;Vt++)vi(Ut[Vt],Q,ot,st)}function pn(w,Q,ot,st){const{opaque:$,transmissive:Ut,transparent:Vt}=w;I.setupLightsView(ot),Ft===!0&&Ht.setGlobalState(T.clippingPlanes,ot),st&&Yt.viewport(B.copy(st)),$.length>0&&Ii($,Q,ot),Ut.length>0&&Ii(Ut,Q,ot),Vt.length>0&&Ii(Vt,Q,ot),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Cn(w,Q,ot,st){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[st.id]===void 0){const te=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[st.id]=new ri(1,1,{generateMipmaps:!0,type:te?Pi:_i,minFilter:ks,samples:Ie.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace})}const Ut=I.state.transmissionRenderTarget[st.id],Vt=st.viewport||B;Ut.setSize(Vt.z*T.transmissionResolutionScale,Vt.w*T.transmissionResolutionScale);const Pt=T.getRenderTarget(),kt=T.getActiveCubeFace(),Kt=T.getActiveMipmapLevel();T.setRenderTarget(Ut),T.getClearColor(Mt),St=T.getClearAlpha(),St<1&&T.setClearColor(16777215,.5),T.clear(),ue&&Lt.render(ot);const $t=T.toneMapping;T.toneMapping=ia;const qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),I.setupLightsView(st),Ft===!0&&Ht.setGlobalState(T.clippingPlanes,st),Ii(w,ot,st),Z.updateMultisampleRenderTarget(Ut),Z.updateRenderTargetMipmap(Ut),Te.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Ue=0,en=Q.length;Ue<en;Ue++){const je=Q[Ue],{object:Be,geometry:Qt,material:Ne,group:re}=je;if(Ne.side===si&&Be.layers.test(st.layers)){const Dn=Ne.side;Ne.side=Kn,Ne.needsUpdate=!0,$s(Be,ot,st,Qt,Ne,re),Ne.side=Dn,Ne.needsUpdate=!0,te=!0}}te===!0&&(Z.updateMultisampleRenderTarget(Ut),Z.updateRenderTargetMipmap(Ut))}T.setRenderTarget(Pt,kt,Kt),T.setClearColor(Mt,St),qt!==void 0&&(st.viewport=qt),T.toneMapping=$t}function Ii(w,Q,ot){const st=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Ut=w.length;$<Ut;$++){const Vt=w[$],{object:Pt,geometry:kt,group:Kt}=Vt;let $t=Vt.material;$t.allowOverride===!0&&st!==null&&($t=st),Pt.layers.test(ot.layers)&&$s(Pt,Q,ot,kt,$t,Kt)}}function $s(w,Q,ot,st,$,Ut){w.onBeforeRender(T,Q,ot,st,$,Ut),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(T,Q,ot,st,w,Ut),$.transparent===!0&&$.side===si&&$.forceSinglePass===!1?($.side=Kn,$.needsUpdate=!0,T.renderBufferDirect(ot,Q,st,$,w,Ut),$.side=ps,$.needsUpdate=!0,T.renderBufferDirect(ot,Q,st,$,w,Ut),$.side=si):T.renderBufferDirect(ot,Q,st,$,w,Ut),w.onAfterRender(T,Q,ot,st,$,Ut)}function tr(w,Q,ot){Q.isScene!==!0&&(Q=Le);const st=E.get(w),$=I.state.lights,Ut=I.state.shadowsArray,Vt=$.state.version,Pt=Xt.getParameters(w,$.state,Ut,Q,ot),kt=Xt.getProgramCacheKey(Pt);let Kt=st.programs;st.environment=w.isMeshStandardMaterial?Q.environment:null,st.fog=Q.fog,st.envMap=(w.isMeshStandardMaterial?yt:pt).get(w.envMap||st.environment),st.envMapRotation=st.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",Vn),Kt=new Map,st.programs=Kt);let $t=Kt.get(kt);if($t!==void 0){if(st.currentProgram===$t&&st.lightsStateVersion===Vt)return fo(w,Pt),$t}else Pt.uniforms=Xt.getUniforms(w),w.onBeforeCompile(Pt,T),$t=Xt.acquireProgram(Pt,kt),Kt.set(kt,$t),st.uniforms=Pt.uniforms;const qt=st.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=Ht.uniform),fo(w,Pt),st.needsLights=Pa(w),st.lightsStateVersion=Vt,st.needsLights&&(qt.ambientLightColor.value=$.state.ambient,qt.lightProbe.value=$.state.probe,qt.directionalLights.value=$.state.directional,qt.directionalLightShadows.value=$.state.directionalShadow,qt.spotLights.value=$.state.spot,qt.spotLightShadows.value=$.state.spotShadow,qt.rectAreaLights.value=$.state.rectArea,qt.ltc_1.value=$.state.rectAreaLTC1,qt.ltc_2.value=$.state.rectAreaLTC2,qt.pointLights.value=$.state.point,qt.pointLightShadows.value=$.state.pointShadow,qt.hemisphereLights.value=$.state.hemi,qt.directionalShadowMap.value=$.state.directionalShadowMap,qt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qt.spotShadowMap.value=$.state.spotShadowMap,qt.spotLightMatrix.value=$.state.spotLightMatrix,qt.spotLightMap.value=$.state.spotLightMap,qt.pointShadowMap.value=$.state.pointShadowMap,qt.pointShadowMatrix.value=$.state.pointShadowMatrix),st.currentProgram=$t,st.uniformsList=null,$t}function Rl(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=_u.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function fo(w,Q){const ot=E.get(w);ot.outputColorSpace=Q.outputColorSpace,ot.batching=Q.batching,ot.batchingColor=Q.batchingColor,ot.instancing=Q.instancing,ot.instancingColor=Q.instancingColor,ot.instancingMorph=Q.instancingMorph,ot.skinning=Q.skinning,ot.morphTargets=Q.morphTargets,ot.morphNormals=Q.morphNormals,ot.morphColors=Q.morphColors,ot.morphTargetsCount=Q.morphTargetsCount,ot.numClippingPlanes=Q.numClippingPlanes,ot.numIntersection=Q.numClipIntersection,ot.vertexAlphas=Q.vertexAlphas,ot.vertexTangents=Q.vertexTangents,ot.toneMapping=Q.toneMapping}function ms(w,Q,ot,st,$){Q.isScene!==!0&&(Q=Le),Z.resetTextureUnits();const Ut=Q.fog,Vt=st.isMeshStandardMaterial?Q.environment:null,Pt=j===null?T.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:io,kt=(st.isMeshStandardMaterial?yt:pt).get(st.envMap||Vt),Kt=st.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,$t=!!ot.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!ot.morphAttributes.position,te=!!ot.morphAttributes.normal,Ue=!!ot.morphAttributes.color;let en=ia;st.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(en=T.toneMapping);const je=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Be=je!==void 0?je.length:0,Qt=E.get(st),Ne=I.state.lights;if(Ft===!0&&(le===!0||w!==ut)){const Nn=w===ut&&st.id===lt;Ht.setState(st,w,Nn)}let re=!1;st.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ne.state.version||Qt.outputColorSpace!==Pt||$.isBatchedMesh&&Qt.batching===!1||!$.isBatchedMesh&&Qt.batching===!0||$.isBatchedMesh&&Qt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Qt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Qt.instancing===!1||!$.isInstancedMesh&&Qt.instancing===!0||$.isSkinnedMesh&&Qt.skinning===!1||!$.isSkinnedMesh&&Qt.skinning===!0||$.isInstancedMesh&&Qt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Qt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Qt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Qt.instancingMorph===!1&&$.morphTexture!==null||Qt.envMap!==kt||st.fog===!0&&Qt.fog!==Ut||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Ht.numPlanes||Qt.numIntersection!==Ht.numIntersection)||Qt.vertexAlphas!==Kt||Qt.vertexTangents!==$t||Qt.morphTargets!==qt||Qt.morphNormals!==te||Qt.morphColors!==Ue||Qt.toneMapping!==en||Qt.morphTargetsCount!==Be)&&(re=!0):(re=!0,Qt.__version=st.version);let Dn=Qt.currentProgram;re===!0&&(Dn=tr(st,Q,$));let ra=!1,Ln=!1,xi=!1;const Fe=Dn.getUniforms(),Un=Qt.uniforms;if(Yt.useProgram(Dn.program)&&(ra=!0,Ln=!0,xi=!0),st.id!==lt&&(lt=st.id,Ln=!0),ra||ut!==w){Yt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Fe.setValue(W,"projectionMatrix",w.projectionMatrix),Fe.setValue(W,"viewMatrix",w.matrixWorldInverse);const Pn=Fe.map.cameraPosition;Pn!==void 0&&Pn.setValue(W,he.setFromMatrixPosition(w.matrixWorld)),Ie.logarithmicDepthBuffer&&Fe.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Fe.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),ut!==w&&(ut=w,Ln=!0,xi=!0)}if(Qt.needsLights&&(Ne.state.directionalShadowMap.length>0&&Fe.setValue(W,"directionalShadowMap",Ne.state.directionalShadowMap,Z),Ne.state.spotShadowMap.length>0&&Fe.setValue(W,"spotShadowMap",Ne.state.spotShadowMap,Z),Ne.state.pointShadowMap.length>0&&Fe.setValue(W,"pointShadowMap",Ne.state.pointShadowMap,Z)),$.isSkinnedMesh){Fe.setOptional(W,$,"bindMatrix"),Fe.setOptional(W,$,"bindMatrixInverse");const Nn=$.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Fe.setValue(W,"boneTexture",Nn.boneTexture,Z))}$.isBatchedMesh&&(Fe.setOptional(W,$,"batchingTexture"),Fe.setValue(W,"batchingTexture",$._matricesTexture,Z),Fe.setOptional(W,$,"batchingIdTexture"),Fe.setValue(W,"batchingIdTexture",$._indirectTexture,Z),Fe.setOptional(W,$,"batchingColorTexture"),$._colorsTexture!==null&&Fe.setValue(W,"batchingColorTexture",$._colorsTexture,Z));const Sn=ot.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&de.update($,ot,Dn),(Ln||Qt.receiveShadow!==$.receiveShadow)&&(Qt.receiveShadow=$.receiveShadow,Fe.setValue(W,"receiveShadow",$.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Un.envMap.value=kt,Un.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Q.environment!==null&&(Un.envMapIntensity.value=Q.environmentIntensity),Un.dfgLUT!==void 0&&(Un.dfgLUT.value=fR()),Ln&&(Fe.setValue(W,"toneMappingExposure",T.toneMappingExposure),Qt.needsLights&&ho(Un,xi),Ut&&st.fog===!0&&ie.refreshFogUniforms(Un,Ut),ie.refreshMaterialUniforms(Un,st,gt,tt,I.state.transmissionRenderTarget[w.id]),_u.upload(W,Rl(Qt),Un,Z)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(_u.upload(W,Rl(Qt),Un,Z),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Fe.setValue(W,"center",$.center),Fe.setValue(W,"modelViewMatrix",$.modelViewMatrix),Fe.setValue(W,"normalMatrix",$.normalMatrix),Fe.setValue(W,"modelMatrix",$.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Nn=st.uniformsGroups;for(let Pn=0,er=Nn.length;Pn<er;Pn++){const Bi=Nn[Pn];bt.update(Bi,Dn),bt.bind(Bi,Dn)}}return Dn}function ho(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function Pa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,Q,ot){const st=E.get(w);st.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=Q,E.get(w.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ot,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const ot=E.get(w);ot.__webglFramebuffer=Q,ot.__useDefaultFramebuffer=Q===void 0};const Oa=W.createFramebuffer();this.setRenderTarget=function(w,Q=0,ot=0){j=w,H=Q,K=ot;let st=null,$=!1,Ut=!1;if(w){const Pt=E.get(w);if(Pt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(W.FRAMEBUFFER,Pt.__webglFramebuffer),B.copy(w.viewport),V.copy(w.scissor),at=w.scissorTest,Yt.viewport(B),Yt.scissor(V),Yt.setScissorTest(at),lt=-1;return}else if(Pt.__webglFramebuffer===void 0)Z.setupRenderTarget(w);else if(Pt.__hasExternalTextures)Z.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $t=w.depthTexture;if(Pt.__boundDepthTexture!==$t){if($t!==null&&E.has($t)&&(w.width!==$t.image.width||w.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(w)}}const kt=w.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ut=!0);const Kt=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[Q])?st=Kt[Q][ot]:st=Kt[Q],$=!0):w.samples>0&&Z.useMultisampledRTT(w)===!1?st=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?st=Kt[ot]:st=Kt,B.copy(w.viewport),V.copy(w.scissor),at=w.scissorTest}else B.copy(nt).multiplyScalar(gt).floor(),V.copy(ht).multiplyScalar(gt).floor(),at=Ct;if(ot!==0&&(st=Oa),Yt.bindFramebuffer(W.FRAMEBUFFER,st)&&Yt.drawBuffers(w,st),Yt.viewport(B),Yt.scissor(V),Yt.setScissorTest(at),$){const Pt=E.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pt.__webglTexture,ot)}else if(Ut){const Pt=Q;for(let kt=0;kt<w.textures.length;kt++){const Kt=E.get(w.textures[kt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+kt,Kt.__webglTexture,ot,Pt)}}else if(w!==null&&ot!==0){const Pt=E.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Pt.__webglTexture,ot)}lt=-1},this.readRenderTargetPixels=function(w,Q,ot,st,$,Ut,Vt,Pt=0){if(!(w&&w.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt){Yt.bindFramebuffer(W.FRAMEBUFFER,kt);try{const Kt=w.textures[Pt],$t=Kt.format,qt=Kt.type;if(!Ie.textureFormatReadable($t)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(qt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-st&&ot>=0&&ot<=w.height-$&&(w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Pt),W.readPixels(Q,ot,st,$,At.convert($t),At.convert(qt),Ut))}finally{const Kt=j!==null?E.get(j).__webglFramebuffer:null;Yt.bindFramebuffer(W.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(w,Q,ot,st,$,Ut,Vt,Pt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(kt=kt[Vt]),kt)if(Q>=0&&Q<=w.width-st&&ot>=0&&ot<=w.height-$){Yt.bindFramebuffer(W.FRAMEBUFFER,kt);const Kt=w.textures[Pt],$t=Kt.format,qt=Kt.type;if(!Ie.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,te),W.bufferData(W.PIXEL_PACK_BUFFER,Ut.byteLength,W.STREAM_READ),w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Pt),W.readPixels(Q,ot,st,$,At.convert($t),At.convert(qt),0);const Ue=j!==null?E.get(j).__webglFramebuffer:null;Yt.bindFramebuffer(W.FRAMEBUFFER,Ue);const en=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await mM(W,en,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,te),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ut),W.deleteBuffer(te),W.deleteSync(en),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,ot=0){const st=Math.pow(2,-ot),$=Math.floor(w.image.width*st),Ut=Math.floor(w.image.height*st),Vt=Q!==null?Q.x:0,Pt=Q!==null?Q.y:0;Z.setTexture2D(w,0),W.copyTexSubImage2D(W.TEXTURE_2D,ot,0,0,Vt,Pt,$,Ut),Yt.unbindTexture()};const gs=W.createFramebuffer(),Ia=W.createFramebuffer();this.copyTextureToTexture=function(w,Q,ot=null,st=null,$=0,Ut=null){Ut===null&&($!==0?(Sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=$,$=0):Ut=0);let Vt,Pt,kt,Kt,$t,qt,te,Ue,en;const je=w.isCompressedTexture?w.mipmaps[Ut]:w.image;if(ot!==null)Vt=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,kt=ot.isBox3?ot.max.z-ot.min.z:1,Kt=ot.min.x,$t=ot.min.y,qt=ot.isBox3?ot.min.z:0;else{const Sn=Math.pow(2,-$);Vt=Math.floor(je.width*Sn),Pt=Math.floor(je.height*Sn),w.isDataArrayTexture?kt=je.depth:w.isData3DTexture?kt=Math.floor(je.depth*Sn):kt=1,Kt=0,$t=0,qt=0}st!==null?(te=st.x,Ue=st.y,en=st.z):(te=0,Ue=0,en=0);const Be=At.convert(Q.format),Qt=At.convert(Q.type);let Ne;Q.isData3DTexture?(Z.setTexture3D(Q,0),Ne=W.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Z.setTexture2DArray(Q,0),Ne=W.TEXTURE_2D_ARRAY):(Z.setTexture2D(Q,0),Ne=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Q.unpackAlignment);const re=W.getParameter(W.UNPACK_ROW_LENGTH),Dn=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ra=W.getParameter(W.UNPACK_SKIP_PIXELS),Ln=W.getParameter(W.UNPACK_SKIP_ROWS),xi=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,je.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,je.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Kt),W.pixelStorei(W.UNPACK_SKIP_ROWS,$t),W.pixelStorei(W.UNPACK_SKIP_IMAGES,qt);const Fe=w.isDataArrayTexture||w.isData3DTexture,Un=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const Sn=E.get(w),Nn=E.get(Q),Pn=E.get(Sn.__renderTarget),er=E.get(Nn.__renderTarget);Yt.bindFramebuffer(W.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Yt.bindFramebuffer(W.DRAW_FRAMEBUFFER,er.__webglFramebuffer);for(let Bi=0;Bi<kt;Bi++)Fe&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,E.get(w).__webglTexture,$,qt+Bi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,E.get(Q).__webglTexture,Ut,en+Bi)),W.blitFramebuffer(Kt,$t,Vt,Pt,te,Ue,Vt,Pt,W.DEPTH_BUFFER_BIT,W.NEAREST);Yt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if($!==0||w.isRenderTargetTexture||E.has(w)){const Sn=E.get(w),Nn=E.get(Q);Yt.bindFramebuffer(W.READ_FRAMEBUFFER,gs),Yt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ia);for(let Pn=0;Pn<kt;Pn++)Fe?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Sn.__webglTexture,$,qt+Pn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Sn.__webglTexture,$),Un?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Nn.__webglTexture,Ut,en+Pn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Nn.__webglTexture,Ut),$!==0?W.blitFramebuffer(Kt,$t,Vt,Pt,te,Ue,Vt,Pt,W.COLOR_BUFFER_BIT,W.NEAREST):Un?W.copyTexSubImage3D(Ne,Ut,te,Ue,en+Pn,Kt,$t,Vt,Pt):W.copyTexSubImage2D(Ne,Ut,te,Ue,Kt,$t,Vt,Pt);Yt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Un?w.isDataTexture||w.isData3DTexture?W.texSubImage3D(Ne,Ut,te,Ue,en,Vt,Pt,kt,Be,Qt,je.data):Q.isCompressedArrayTexture?W.compressedTexSubImage3D(Ne,Ut,te,Ue,en,Vt,Pt,kt,Be,je.data):W.texSubImage3D(Ne,Ut,te,Ue,en,Vt,Pt,kt,Be,Qt,je):w.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ut,te,Ue,Vt,Pt,Be,Qt,je.data):w.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ut,te,Ue,je.width,je.height,Be,je.data):W.texSubImage2D(W.TEXTURE_2D,Ut,te,Ue,Vt,Pt,Be,Qt,je);W.pixelStorei(W.UNPACK_ROW_LENGTH,re),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Dn),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ra),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ln),W.pixelStorei(W.UNPACK_SKIP_IMAGES,xi),Ut===0&&Q.generateMipmaps&&W.generateMipmap(Ne),Yt.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&Z.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Z.setTextureCube(w,0):w.isData3DTexture?Z.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Z.setTexture2DArray(w,0):Z.setTexture2D(w,0),Yt.unbindTexture()},this.resetState=function(){H=0,K=0,j=null,Yt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),n.unpackColorSpace=we._getUnpackColorSpace()}}var dR=Object.defineProperty,pR=(r,t,n)=>t in r?dR(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,Ks=(r,t,n)=>(pR(r,typeof t!="symbol"?t+"":t,n),n);class Tl{constructor(){Ks(this,"enabled",!0),Ks(this,"needsSwap",!0),Ks(this,"clear",!1),Ks(this,"renderToScreen",!1)}setSize(t,n){}render(t,n,a,l,c){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}class vx{constructor(t){Ks(this,"camera",new Du(-1,1,1,-1,0,1)),Ks(this,"geometry",new Li(2,2)),Ks(this,"mesh"),this.mesh=new ve(this.geometry,t)}get material(){return this.mesh.material}set material(t){this.mesh.material=t}dispose(){this.mesh.geometry.dispose()}render(t){t.render(this.mesh,this.camera)}}var mR=Object.defineProperty,gR=(r,t,n)=>t in r?mR(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,fu=(r,t,n)=>(gR(r,typeof t!="symbol"?t+"":t,n),n);class Dv extends Tl{constructor(t,n="tDiffuse"){super(),fu(this,"textureID"),fu(this,"uniforms"),fu(this,"material"),fu(this,"fsQuad"),this.textureID=n,t instanceof Gn?(this.uniforms=t.uniforms,this.material=t):(this.uniforms=bu.clone(t.uniforms),this.material=new Gn({defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new vx(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.fsQuad.dispose(),this.material.dispose()}}const vp={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`
    varying vec2 vUv;

    void main() {

    	vUv = uv;
    	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`
    uniform float opacity;

    uniform sampler2D tDiffuse;

    varying vec2 vUv;

    void main() {

    	vec4 texel = texture2D( tDiffuse, vUv );
    	gl_FragColor = opacity * texel;

    }
  `},_R={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`
    varying vec2 vUv;

    void main() {

    	vUv = uv;

    	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec3 defaultColor;
    uniform float defaultOpacity;
    uniform float luminosityThreshold;
    uniform float smoothWidth;

    varying vec2 vUv;

    void main() {

    	vec4 texel = texture2D( tDiffuse, vUv );

    	vec3 luma = vec3( 0.299, 0.587, 0.114 );

    	float v = dot( texel.xyz, luma );

    	vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

    	float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

    	gl_FragColor = mix( outputColor, texel, alpha );

    }
  `};var vR=Object.defineProperty,xR=(r,t,n)=>t in r?vR(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,Lv=(r,t,n)=>(xR(r,typeof t!="symbol"?t+"":t,n),n);const yR=(()=>{const r=class extends Tl{constructor(n,a,l,c){super(),this.strength=a!==void 0?a:1,this.radius=l,this.threshold=c,this.resolution=n!==void 0?new ne(n.x,n.y):new ne(256,256),this.clearColor=new se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let f=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);this.renderTargetBright=new ri(f,d,{type:Pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let x=0;x<this.nMips;x++){const S=new ri(f,d,{type:Pi});S.texture.name="UnrealBloomPass.h"+x,S.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(S);const b=new ri(f,d,{type:Pi});b.texture.name="UnrealBloomPass.v"+x,b.texture.generateMipmaps=!1,this.renderTargetsVertical.push(b),f=Math.round(f/2),d=Math.round(d/2)}const m=_R;this.highPassUniforms=bu.clone(m.uniforms),this.highPassUniforms.luminosityThreshold.value=c,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gn({uniforms:this.highPassUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];f=Math.round(this.resolution.x/2),d=Math.round(this.resolution.y/2);for(let x=0;x<this.nMips;x++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(p[x])),this.separableBlurMaterials[x].uniforms.texSize.value=new ne(f,d),f=Math.round(f/2),d=Math.round(d/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=a,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const _=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=_,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const g=vp;this.copyUniforms=bu.clone(g.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Gn({uniforms:this.copyUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,blending:yn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new on,this.fsQuad=new vx(null)}dispose(){for(let n=0;n<this.renderTargetsHorizontal.length;n++)this.renderTargetsHorizontal[n].dispose();for(let n=0;n<this.renderTargetsVertical.length;n++)this.renderTargetsVertical[n].dispose();this.renderTargetBright.dispose();for(let n=0;n<this.separableBlurMaterials.length;n++)this.separableBlurMaterials[n].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(n,a){let l=Math.round(n/2),c=Math.round(a/2);this.renderTargetBright.setSize(l,c);for(let f=0;f<this.nMips;f++)this.renderTargetsHorizontal[f].setSize(l,c),this.renderTargetsVertical[f].setSize(l,c),this.separableBlurMaterials[f].uniforms.texSize.value=new ne(l,c),l=Math.round(l/2),c=Math.round(c/2)}render(n,a,l,c,f){n.getClearColor(this._oldClearColor),this.oldClearAlpha=n.getClearAlpha();const d=n.autoClear;n.autoClear=!1,n.setClearColor(this.clearColor,0),f&&n.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=l.texture,n.setRenderTarget(null),n.clear(),this.fsQuad.render(n)),this.highPassUniforms.tDiffuse.value=l.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,n.setRenderTarget(this.renderTargetBright),n.clear(),this.fsQuad.render(n);let m=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this.fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=m.texture,this.separableBlurMaterials[p].uniforms.direction.value=r.BlurDirectionX,n.setRenderTarget(this.renderTargetsHorizontal[p]),n.clear(),this.fsQuad.render(n),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=r.BlurDirectionY,n.setRenderTarget(this.renderTargetsVertical[p]),n.clear(),this.fsQuad.render(n),m=this.renderTargetsVertical[p];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,n.setRenderTarget(this.renderTargetsHorizontal[0]),n.clear(),this.fsQuad.render(n),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,f&&n.state.buffers.stencil.setTest(!0),this.renderToScreen?(n.setRenderTarget(null),this.fsQuad.render(n)):(n.setRenderTarget(l),this.fsQuad.render(n)),n.setClearColor(this._oldClearColor,this.oldClearAlpha),n.autoClear=d}getSeperableBlurMaterial(n){return new Gn({defines:{KERNEL_RADIUS:n,SIGMA:n},uniforms:{colorTexture:{value:null},texSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(n){return new Gn({defines:{NUM_MIPS:n},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};let t=r;return Lv(t,"BlurDirectionX",new ne(1,0)),Lv(t,"BlurDirectionY",new ne(0,1)),t})();var SR=Object.defineProperty,MR=(r,t,n)=>t in r?SR(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,Md=(r,t,n)=>(MR(r,typeof t!="symbol"?t+"":t,n),n);class Uv extends Tl{constructor(t,n){super(),Md(this,"scene"),Md(this,"camera"),Md(this,"inverse"),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class bR extends Tl{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}var ER=Object.defineProperty,TR=(r,t,n)=>t in r?ER(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,Ci=(r,t,n)=>(TR(r,typeof t!="symbol"?t+"":t,n),n);class AR{constructor(t,n){if(Ci(this,"renderer"),Ci(this,"_pixelRatio"),Ci(this,"_width"),Ci(this,"_height"),Ci(this,"renderTarget1"),Ci(this,"renderTarget2"),Ci(this,"writeBuffer"),Ci(this,"readBuffer"),Ci(this,"renderToScreen"),Ci(this,"passes",[]),Ci(this,"copyPass"),Ci(this,"clock"),this.renderer=t,n===void 0){const a={minFilter:wn,magFilter:wn,format:Ni},l=t.getSize(new ne);this._pixelRatio=t.getPixelRatio(),this._width=l.width,this._height=l.height,n=new ri(this._width*this._pixelRatio,this._height*this._pixelRatio,a),n.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,vp===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Dv===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Dv(vp),this.copyPass.material.blending=na,this.clock=new g1}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;const l=this.passes.length;for(let c=0;c<l;c++){const f=this.passes[c];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(c),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),f.needsSwap){if(a){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Uv!==void 0&&(f instanceof Uv?a=!0:f instanceof bR&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(a,l),this.renderTarget2.setSize(a,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}var RR=Object.defineProperty,wR=(r,t,n)=>t in r?RR(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,Fs=(r,t,n)=>(wR(r,typeof t!="symbol"?t+"":t,n),n);class CR extends Tl{constructor(t,n,a,l,c=0){super(),Fs(this,"scene"),Fs(this,"camera"),Fs(this,"overrideMaterial"),Fs(this,"clearColor"),Fs(this,"clearAlpha"),Fs(this,"clearDepth",!1),Fs(this,"_oldClearColor",new se),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.needsSwap=!1}render(t,n,a){let l=t.autoClear;t.autoClear=!1;let c,f=null;this.overrideMaterial!==void 0&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(t.getClearColor(this._oldClearColor),c=t.getClearAlpha(),t.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor&&t.setClearColor(this._oldClearColor,c),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=f),t.autoClear=l}}var k=(r=>(r.IDLE="IDLE",r.WALK="WALK",r.WALK_FORWARD="WALK_FORWARD",r.WALK_BACK="WALK_BACK",r.DUCK="DUCK",r.BLOCK="BLOCK",r.BLOCK_LOW="BLOCK_LOW",r.DASH_FORWARD="DASH_FORWARD",r.DASH_BACK="DASH_BACK",r.SIDESTEP_LEFT="SIDESTEP_LEFT",r.SIDESTEP_RIGHT="SIDESTEP_RIGHT",r.ATTACK_LP="ATTACK_LP",r.ATTACK_RP="ATTACK_RP",r.ATTACK_LK="ATTACK_LK",r.ATTACK_RK="ATTACK_RK",r.FORWARD_LP="FORWARD_LP",r.FORWARD_RP="FORWARD_RP",r.FORWARD_LK="FORWARD_LK",r.FORWARD_RK="FORWARD_RK",r.DOWN_LP="DOWN_LP",r.DOWN_RP="DOWN_RP",r.DOWN_LK="DOWN_LK",r.DOWN_RK="DOWN_RK",r.BACK_LP="BACK_LP",r.BACK_RP="BACK_RP",r.BACK_LK="BACK_LK",r.BACK_RK="BACK_RK",r.GOB_STANCE="GOB_STANCE",r.GOB_FIRE="GOB_FIRE",r.GOB_FINISH="GOB_FINISH",r.UBW_TRACE="UBW_TRACE",r.UBW_RUSH_1="UBW_RUSH_1",r.UBW_RUSH_2="UBW_RUSH_2",r.UBW_RUSH_3="UBW_RUSH_3",r.UBW_THROW="UBW_THROW",r.ATTACK_SPECIAL="ATTACK_SPECIAL",r.ATTACK_SPECIAL_2="ATTACK_SPECIAL_2",r.ATTACK_SPECIAL_3="ATTACK_SPECIAL_3",r.ATTACK_THROW="ATTACK_THROW",r.THROWN="THROWN",r.HIT="HIT",r.STUNNED="STUNNED",r.WALL_SPLAT="WALL_SPLAT",r.GROUNDED="GROUNDED",r.WAKE_UP="WAKE_UP",r.TORNADO="TORNADO",r.RAGE_ART="RAGE_ART",r.HEAT_SMASH="HEAT_SMASH",r.GRABBED="GRABBED",r.AIRBORNE="AIRBORNE",r.STANCE_HEAVEN="STANCE_HEAVEN",r.DEAD="DEAD",r.VICTORY="VICTORY",r))(k||{});const dn={MAX_HEALTH:100,ROUND_TIME:60,GROUND_Y:0,MOVE_SPEED:4.5,ACCELERATION:60};class Oe{constructor(){this.audioContext=null,this.soundBuffers={},this.bgmSource=null,this.bgmGain=null,this.sfxGain=null,this.isMuted=!1,this.initialized=!1,this.soundPaths={bgm_battle:"/sounds/bgm_battle.mp3",hit_light:"/sounds/hit_light.mp3",hit_heavy:"/sounds/hit_heavy.mp3",block:"/sounds/block.mp3",dash:"/sounds/dash.mp3",jump:"/sounds/jump.mp3",land:"/sounds/land.mp3",clash:"/sounds/clash.mp3",charge:"/sounds/charge.mp3",beam:"/sounds/beam.mp3",slash:"/sounds/slash.mp3",explosion:"/sounds/explosion.mp3",win:"/sounds/win.mp3"}}static getInstance(){return Oe.instance||(Oe.instance=new Oe),Oe.instance}async init(){if(!this.initialized)try{const t=window.AudioContext||window.webkitAudioContext;this.audioContext=new t,this.bgmGain=this.audioContext.createGain(),this.sfxGain=this.audioContext.createGain(),this.bgmGain.connect(this.audioContext.destination),this.sfxGain.connect(this.audioContext.destination),this.bgmGain.gain.value=.4,this.sfxGain.gain.value=.6,this.initialized=!0,console.log("Audio System Initialized"),this.loadAllSounds()}catch(t){console.error("Web Audio API not supported:",t)}}async loadAllSounds(){if(this.audioContext)for(const[t,n]of Object.entries(this.soundPaths))try{const l=await(await fetch(n)).arrayBuffer(),c=await this.audioContext.decodeAudioData(l);this.soundBuffers[t]=c}catch{}}playSFX(t,n=1,a=0){if(!this.initialized||this.isMuted||!this.audioContext||!this.soundBuffers[t])return;const l=this.audioContext.createBufferSource();l.buffer=this.soundBuffers[t],a>0&&(l.playbackRate.value=1+(Math.random()*a-a/2));const c=this.audioContext.createGain();c.gain.value=n,l.connect(c),this.sfxGain&&c.connect(this.sfxGain),l.start(0)}playBGM(t){if(!this.initialized||!this.audioContext||!this.soundBuffers[t])return;this.bgmSource&&this.bgmSource.stop();const n=this.audioContext.createBufferSource();n.buffer=this.soundBuffers[t],n.loop=!0,this.bgmGain&&n.connect(this.bgmGain),n.start(0),this.bgmSource=n}stopBGM(){this.bgmSource&&(this.bgmSource.stop(),this.bgmSource=null)}toggleMute(){this.isMuted=!this.isMuted,this.audioContext&&(this.isMuted?this.audioContext.suspend():this.audioContext.resume())}}const vu={[k.ATTACK_LP]:{startup:8,active:4,recovery:10,damage:5,stun:10,knockback:.5,blockStun:8,hitLevel:"high",nextMoves:{KeyI:k.ATTACK_RP}},[k.ATTACK_RP]:{startup:10,active:5,recovery:12,damage:10,stun:15,knockback:1,blockStun:8,hitLevel:"high"},[k.ATTACK_LK]:{startup:12,active:6,recovery:16,damage:12,stun:15,knockback:1.5,blockStun:10,hitLevel:"mid"},[k.ATTACK_RK]:{startup:15,active:6,recovery:20,damage:18,stun:25,knockback:3.5,blockStun:12,hitLevel:"mid"},[k.FORWARD_LP]:{startup:12,active:4,recovery:14,damage:8,stun:12,knockback:1,blockStun:5,hitLevel:"high"},[k.FORWARD_RP]:{startup:15,active:5,recovery:20,damage:15,stun:20,knockback:2,blockStun:10,hitLevel:"mid"},[k.FORWARD_LK]:{startup:14,active:5,recovery:18,damage:12,stun:15,knockback:1.5,blockStun:8,hitLevel:"mid"},[k.FORWARD_RK]:{startup:16,active:6,recovery:22,damage:18,stun:25,knockback:3,blockStun:12,hitLevel:"mid"},[k.DOWN_LP]:{startup:10,active:5,recovery:12,damage:5,stun:10,knockback:.5,blockStun:5,hitLevel:"low"},[k.DOWN_RP]:{startup:12,active:5,recovery:15,damage:8,stun:12,knockback:.8,blockStun:6,hitLevel:"low"},[k.DOWN_LK]:{startup:14,active:6,recovery:18,damage:10,stun:15,knockback:1,blockStun:8,hitLevel:"low"},[k.DOWN_RK]:{startup:12,active:6,recovery:18,damage:10,stun:15,knockback:.5,blockStun:10,hitLevel:"low"},[k.ATTACK_SPECIAL]:{startup:30,active:20,recovery:40,damage:15,stun:30,knockback:1.5,blockStun:5,hitLevel:"mid",isScrew:!0,isArmor:!0},[k.ATTACK_SPECIAL_2]:{startup:20,active:20,recovery:50,damage:0,stun:0,knockback:0,blockStun:0,hitLevel:"mid",isElectric:!0},[k.ATTACK_SPECIAL_3]:{startup:60,active:30,recovery:80,damage:0,stun:0,knockback:0,blockStun:0,hitLevel:"mid",launch:15},[k.ATTACK_THROW]:{startup:10,active:2,recovery:40,damage:25,stun:60,knockback:.5,blockStun:0,hitLevel:"high",launch:0},[k.RAGE_ART]:{startup:20,active:5,recovery:100,damage:55,stun:120,knockback:10,blockStun:20,hitLevel:"mid",isArmor:!0,isCinematic:!0},[k.GOB_STANCE]:{startup:20,active:999,recovery:20,damage:0,stun:0,knockback:0,blockStun:0,hitLevel:"mid"},[k.GOB_FIRE]:{startup:5,active:10,recovery:15,damage:15,hitLevel:"mid",stun:20,knockback:.5,blockStun:10,nextMoves:{KeyE:k.GOB_FINISH}},[k.GOB_FINISH]:{startup:30,active:60,recovery:100,damage:40,hitLevel:"mid",stun:60,knockback:5,blockStun:30,isCinematic:!0},[k.UBW_TRACE]:{startup:15,active:5,recovery:10,damage:0,stun:0,knockback:0,blockStun:0,hitLevel:"mid",nextMoves:{KeyE:k.UBW_RUSH_1}},[k.UBW_RUSH_1]:{startup:8,active:6,recovery:18,damage:10,hitLevel:"high",stun:15,knockback:.5,blockStun:10,nextMoves:{KeyE:k.UBW_RUSH_2}},[k.UBW_RUSH_2]:{startup:10,active:8,recovery:20,damage:12,hitLevel:"mid",launch:12,stun:20,knockback:1,blockStun:10,nextMoves:{KeyE:k.UBW_RUSH_3}},[k.UBW_RUSH_3]:{startup:20,active:10,recovery:40,damage:25,hitLevel:"mid",knockback:4,stun:40,blockStun:20},[k.UBW_THROW]:{startup:15,active:10,recovery:30,damage:15,hitLevel:"mid",isScrew:!0,stun:30,knockback:.5,blockStun:5}};class DR{constructor(){this.currentState=null}changeState(t){this.currentState&&this.currentState.exit(),this.currentState=t,this.currentState.enter()}update(t){this.currentState&&this.currentState.update(t)}handleInput(t){this.currentState&&this.currentState.handleInput(t)}}class LR{constructor(t=20,n=12){this.buffer=[],this.capacity=t,this.maxAge=n}add(t,n){if(this.buffer.length>0){const a=this.buffer[this.buffer.length-1];if(a.command===t&&a.frame===n)return}this.buffer.push({command:t,frame:n}),this.buffer.length>this.capacity&&this.buffer.shift()}update(t){this.buffer=this.buffer.filter(n=>t-n.frame<=this.maxAge)}consume(t=null){if(this.buffer.length===0)return null;if(t){const n=this.buffer.findIndex(a=>a.command===t);if(n!==-1){const a=this.buffer[n].command;return this.buffer.splice(n,1),a}}else{const n=this.buffer.shift();return n?n.command:null}return null}peek(){return this.buffer.length===0?null:this.buffer[0].command}clear(){this.buffer=[]}}class UR{constructor(){this.inputQueue=[],this.BUFFER_WINDOW=12}update(t){this.inputQueue=this.inputQueue.filter(n=>t-n.frame<=this.BUFFER_WINDOW)}queueInput(t,n){if(this.inputQueue.length>0){const a=this.inputQueue[this.inputQueue.length-1];if(a.key===t&&a.frame===n)return}this.inputQueue.push({key:t,frame:n})}consume(){return this.inputQueue.length>0?this.inputQueue.shift().key:null}peek(){return this.inputQueue.length>0?this.inputQueue[0].key:null}clear(){this.inputQueue=[]}}class Ip{constructor(t){this.fighter=t}}class Nu extends Ip{constructor(t,n){super(t),this.frame=0,this.hasHit=!1,this.moveName=n,this.moveData=vu[n],this.moveData||(console.error(`Missing FrameData for ${n}`),this.moveData={startup:1,active:1,recovery:1,damage:0,stun:0,knockback:0,blockStun:0,hitLevel:"mid"})}enter(){this.frame=0,this.hasHit=!1,this.fighter.state=this.moveName,console.log(`[Enter Attack] ${this.moveName}`),this.fighter.velocity.set(0,0,0)}update(t){this.frame++;const{startup:n,active:a,recovery:l}=this.moveData,c=n+a+l;this.frame<n||(this.frame<n+a?!this.hasHit&&this.frame===n&&(this.checkHit(),this.hasHit=!0):this.frame<c?this.checkBuffer():this.fighter.stateMachine.changeState(new Au(this.fighter)))}checkHit(){this.fighter.attemptHit(this.moveData)}checkBuffer(){const t=this.fighter.inputManager.peek();if(t&&this.moveData.nextMoves&&this.moveData.nextMoves[t]){const n=this.moveData.nextMoves[t];this.fighter.inputManager.consume(),n&&this.fighter.stateMachine.changeState(new Nu(this.fighter,n))}}handleInput(t){const n=t.getJustPressed();n&&this.fighter.inputManager.queueInput(n,this.frame)}exit(){}}class NR extends Ip{enter(){}update(t){}handleInput(t){const n=t.keys,a=this.fighter.currentOpponent;if(!a){this.defaultMovement(n);return}let l=dn.MOVE_SPEED,c=0,f=0;if(n.KeyD&&(c=1),n.KeyA&&(c=-1),n.KeyW&&(f=-1),n.KeyS&&(f=1),c===0&&f===0){this.fighter.stateMachine.changeState(new Au(this.fighter));return}const d=new F().subVectors(a.mesh.position,this.fighter.mesh.position);d.y=0,d.normalize();const m=new F(0,1,0),p=new F().crossVectors(m,d).normalize(),_=Math.sign(a.mesh.position.x-this.fighter.mesh.position.x)||1;this.fighter.facing=_;const g=d.clone().multiplyScalar(c*this.fighter.facing*l),x=p.clone().multiplyScalar(f*-this.fighter.facing*l);this.fighter.velocity.x=g.x+x.x,this.fighter.velocity.z=g.z+x.z;const S=g.dot(d);Math.abs(S)>.1?S>0?this.fighter.state=k.WALK_FORWARD:this.fighter.state=k.WALK_BACK:f<0?this.fighter.state=k.SIDESTEP_LEFT:this.fighter.state=k.SIDESTEP_RIGHT;const b=this.fighter.getCommand(t);b&&this.fighter.stateMachine.changeState(new Nu(this.fighter,b))}defaultMovement(t){!t.KeyA&&!t.KeyD&&!t.KeyW&&!t.KeyS&&this.fighter.stateMachine.changeState(new Au(this.fighter))}exit(){this.fighter.velocity.set(0,0,0)}}class Au extends Ip{enter(){this.fighter.mesh.position.y=0,this.fighter.velocity.set(0,0,0)}update(t){this.fighter.velocity.x*=.8,this.fighter.velocity.z*=.8}handleInput(t){if(!t||!t.keys)return;const n=t.keys;n.KeyW&&this.fighter.prevKeys.KeyW;const a=this.fighter.getCommand(t);if(a){this.fighter.stateMachine.changeState(new Nu(this.fighter,a));return}if(n.KeyA||n.KeyD||n.KeyW||n.KeyS){this.fighter.stateMachine.changeState(new NR(this.fighter));return}}exit(){}}const Bp=class Bp{constructor(t,n,a){this.projectiles=[],this.state=k.IDLE,this.velocity=new F,this.isGrounded=!0,this.facing=1,this.gravity=35,this.WALK_SPEED=6,this.RUN_SPEED=10,this.DASH_SPEED=18,this.BACK_DASH_SPEED=14,this.JUMP_FORCE=12,this.hp=100,this.maxHp=100,this.stateTimer=0,this.attackCooldown=0,this.specialCooldown=0,this.flashTimer=0,this.stunDuration=0,this.hitStopTimer=0,this.lastTapTime=0,this.lastKey="",this.dashTimer=0,this.dashVariant=0,this.sidestepTimer=0,this.comboWindow=!1,this.aiTimer=0,this.aiAction="IDLE",this.prevKeys={},this.isElectric=!1,this.isLowParrying=!1,this.legacyInputState=null,this.inputBufferTimer=0,this.onHit=null,this.elasticScale=new F(1,1,1),this.elasticVelocity=new F(0,0,0),this.gravityScale=1,this.currentOpponent=null,this.isPlayer1=t,this.characterType=n,this.mesh=new Xi,this.bodyParts={};const l=this.characterType==="GILGAMESH",c=new Wi({color:16766720,roughness:.15,metalness:1,emissive:16755200,emissiveIntensity:.4,clearcoat:1,clearcoatRoughness:.1,sheen:16768256,sheenRoughness:.3,iridescence:.3,iridescenceIOR:1.5}),f=new Wi({color:11141120,roughness:.7,metalness:.1,side:si,clearcoat:.1,sheen:16711680,sheenRoughness:.5}),d=new Wi({color:328965,roughness:.4,metalness:.6,clearcoat:1,clearcoatRoughness:.4,sheen:2236996}),m=new Wi({color:16768443,roughness:.4,metalness:0,transmission:.15,thickness:.5}),p=new ii({color:16768256,roughness:.2,metalness:.4,emissive:3351040}),_=new ii({color:14540253,roughness:.3,metalness:.1,emissive:1118481}),g=new Wi({color:1118481,roughness:.3,metalness:1,emissive:3342336,clearcoat:1,iridescence:.5}),x=new Wi({color:16777215,roughness:.3,metalness:1,emissive:51,clearcoat:1,iridescence:.5}),S=1.3;this.mesh.scale.set(S,S,S);const b=(C,H)=>{const K=new ve(C,H);K.castShadow=!0,K.receiveShadow=!0;const j=C.clone(),lt=new on({color:0,side:Kn}),ut=new ve(j,lt);return ut.scale.multiplyScalar(1.05),K.add(ut),K};this.bodyParts.hips=new Xi,this.bodyParts.hips.position.y=.9,this.mesh.add(this.bodyParts.hips);const A=new Ze(.32,.22,.24);let M=m;if(l?M=c:M=new Wi({color:1118481,roughness:.9,metalness:.5,clearcoat:.2}),this.bodyParts.meshHips=b(A,M),this.bodyParts.hips.add(this.bodyParts.meshHips),l){const C=b(new Ze(.3,.5,.05),f);C.position.set(0,-.2,-.15),C.rotation.x=.2,this.bodyParts.hips.add(C);const H=new Ze(.1,.3,.2),K=b(H,c);K.position.set(.2,-.1,0),K.rotation.z=-.2,this.bodyParts.hips.add(K);const j=b(H,c);j.position.set(-.2,-.1,0),j.rotation.z=.2,this.bodyParts.hips.add(j)}else{const C=new Ze(.5,.8,.05),H=b(C,f);H.position.set(0,-.3,-.15),H.rotation.x=.15,this.bodyParts.hips.add(H);const K=b(new Ze(.25,.8,.05),f);K.position.set(.25,-.3,0),K.rotation.z=-.1,K.rotation.y=-1.57,this.bodyParts.hips.add(K);const j=b(new Ze(.25,.8,.05),f);j.position.set(-.25,-.3,0),j.rotation.z=.1,j.rotation.y=1.57,this.bodyParts.hips.add(j)}this.bodyParts.torso=new Xi,this.bodyParts.torso.position.set(0,.15,0),this.bodyParts.hips.add(this.bodyParts.torso);const v=new Da(.38,.24,.55,8);let D=l?c:d;if(this.bodyParts.meshTorso=b(v,D),this.bodyParts.meshTorso.position.y=.28,this.bodyParts.torso.add(this.bodyParts.meshTorso),l){const C=b(new Xs(.18,.04,8,16),c);C.rotation.x=Math.PI/2,C.position.set(0,.5,0),this.bodyParts.torso.add(C)}else{const C=b(new Ze(.4,.4,.27),d);C.position.y=.3,this.bodyParts.torso.add(C)}this.bodyParts.head=new Xi,this.bodyParts.head.position.set(0,.6,0),this.bodyParts.torso.add(this.bodyParts.head);const U=new Ze(.24,.28,.26);this.bodyParts.meshHead=b(U,m),this.bodyParts.head.add(this.bodyParts.meshHead);const L=new Li(.06,.025),I=new on({color:l?16711680:11184810}),z=new ve(L,I);z.position.set(.06,.05,.135),this.bodyParts.head.add(z);const O=new ve(L,I);O.position.set(-.06,.05,.135),this.bodyParts.head.add(O);const Y=new Xi;if(Y.position.set(0,.15,0),this.bodyParts.head.add(Y),l){const C=p,H=new qs(.06,.35,4);for(let K=0;K<7;K++){const j=b(H,C),lt=(K-3)*.3;j.position.x=Math.sin(lt)*.1,j.position.y=Math.cos(lt)*.05,j.rotation.z=-lt,j.rotation.x=-.2,Y.add(j)}}else{const C=_,H=new qs(.05,.3,4);for(let K=0;K<9;K++){const j=b(H,C);j.position.x=(K-4)*.05,j.position.z=-.05-Math.abs(K-4)*.02,j.rotation.x=-.6,Y.add(j)}}const T=(C,H)=>{const K=C==="L"?-1:1,j=.085,lt=H?this.bodyParts.hips:this.bodyParts.torso;let ut=H?new F(K*.18,-.1,0):new F(K*.42,.45,0);const B=new Xi;B.position.copy(ut),lt.add(B);let V=m,at=m;l?(V=c,at=c):H?(V=new Wi({color:1118481,roughness:.8,metalness:.5,clearcoat:.2}),at=V):(V=f,at=f);const Mt=H?.5:.4,St=new Tu(j,Mt,4,8),N=b(St,V);if(N.position.y=-Mt/2,B.add(N),!H&&l){const Ft=new Cu(.18,8,8,0,Math.PI),le=b(Ft,c);le.rotation.x=-Math.PI/2,le.scale.set(1,1,.6),le.position.y=.05,B.add(le)}const tt=new Xi;tt.position.y=-Mt,B.add(tt);const gt=H?.5:.4,Rt=H&&!l?new Wi({color:6710886,metalness:.8,roughness:.4}):at,Gt=new Tu(j*.85,gt,4,8),nt=b(Gt,Rt);nt.position.y=-gt/2,tt.add(nt);const ht=l?c:H?new Wi({color:2236962,roughness:.9}):new Wi({color:2236962,roughness:.9}),Ct=H?new Ze(.15,.12,.26):new Ze(.12,.12,.12),It=b(Ct,ht);if(It.position.y=-gt,H&&(It.position.z=.05),tt.add(It),!l&&!H){const Ft=C==="L",le=Ft?g:x,$e=new Ze(.12,.6,.04),he=b($e,le);he.position.set(0,-.25,.25),he.rotation.x=Math.PI/2,he.rotation.z=Ft?.3:-.3,It.add(he);const ge=b(new Da(.02,.02,.2),new ii({color:3355443}));ge.rotation.x=Math.PI/2,It.add(ge)}H?C==="L"?(this.bodyParts.legL=B,this.bodyParts.kneeL=tt,this.bodyParts.meshThighL=N,this.bodyParts.meshShinL=nt,this.bodyParts.bootL=It):(this.bodyParts.legR=B,this.bodyParts.kneeR=tt,this.bodyParts.meshThighR=N,this.bodyParts.meshShinR=nt,this.bodyParts.bootR=It):C==="L"?(this.bodyParts.armL=B,this.bodyParts.elbowL=tt,this.bodyParts.meshArmL=N,this.bodyParts.meshForearmL=nt,this.bodyParts.fistL=It):(this.bodyParts.armR=B,this.bodyParts.elbowR=tt,this.bodyParts.meshArmR=N,this.bodyParts.meshForearmR=nt,this.bodyParts.fistR=It)};T("L",!1),T("R",!1),T("L",!0),T("R",!0),this.mesh.position.set(t?-6:6,dn.GROUND_Y,0),this.stateMachine=new DR,this.inputManager=new UR,this.inputBuffer=new LR,this.stateMachine.changeState(new Au(this))}getCommand(t){const n=this.facing===1&&t.keys.KeyD||this.facing===-1&&t.keys.KeyA;this.facing===1&&t.keys.KeyA||this.facing===-1&&t.keys.KeyD;const a=t.keys.KeyS;t.keys.KeyW;const l=t.keys.KeyU&&!this.prevKeys.KeyU,c=t.keys.KeyI&&!this.prevKeys.KeyI,f=t.keys.KeyJ&&!this.prevKeys.KeyJ,d=t.keys.KeyK&&!this.prevKeys.KeyK;return l?n?k.FORWARD_LP:a?k.DOWN_LP:k.ATTACK_LP:c?n?k.FORWARD_RP:a?k.DOWN_RP:k.ATTACK_RP:f?n?k.FORWARD_LK:a?k.DOWN_LK:k.ATTACK_LK:d?n?k.FORWARD_RK:a?k.DOWN_RK:k.ATTACK_RK:t.keys.KeyE&&!this.prevKeys.KeyE?k.ATTACK_SPECIAL:t.keys.KeyQ&&!this.prevKeys.KeyQ?k.ATTACK_SPECIAL_2:t.keys.KeyO&&!this.prevKeys.KeyO?k.ATTACK_SPECIAL_3:null}update(t,n,a,l){if(this.stateTimer++,this.handlePhysics(a,t),this.updateProjectiles(t,a),this.currentOpponent=a,this.isPlayer1){const c=n.getJustPressed();n.keys.KeyW||n.keys.KeyA||n.keys.KeyS||n.keys.KeyD;const f=this.getCommand(n);f&&this.inputBuffer&&this.inputBuffer.add(f,this.stateTimer),c&&this.inputManager&&this.inputManager.queueInput(c,this.stateTimer),this.inputManager&&this.inputManager.update(this.stateTimer),this.inputBuffer&&this.inputBuffer.update(this.stateTimer),this.stateMachine.handleInput(this.inputBuffer),this.stateMachine.handleInput(n),this.stateMachine.update(t)}else this.handleAI(a,t),this.stateMachine.update(t);this.updateAnimations(t),this.updateRotation(),this.handleVisuals(),this.isPlayer1&&(this.prevKeys={...n.keys})}handleInputEvent(t){this.inputManager&&this.inputManager.queueInput(t,this.stateTimer)}handleAI(t,n){if(this.state===k.HIT||this.state===k.STUNNED||this.state===k.VICTORY||this.state===k.DEAD)return;if(this.state===k.GRABBED){Math.random()<.05&&(this.state=k.IDLE,this.stunDuration=0,this.velocity.add(new F(0,0,-10).applyQuaternion(this.mesh.quaternion)),Oe.getInstance().playSFX("block"));return}if(this.isAttacking())return;this.attackCooldown>0&&(this.attackCooldown-=n*60),this.aiTimer++;const a=this.mesh.position.distanceTo(t.mesh.position),l=(t.mesh.position.x-this.mesh.position.x)*this.facing>0;if(this.aiTimer>20){if(this.aiTimer=0,this.hp<30&&Math.random()>.7&&a<4){this.attack(k.RAGE_ART);return}if((t.state===k.ATTACK_SPECIAL_3||t.state===k.ATTACK_THROW)&&t.attackCooldown>10){this.attack(k.ATTACK_SPECIAL_3);return}if(!t.isGrounded&&a<4){this.attack(k.ATTACK_SPECIAL);return}Math.random()>.5?this.attack(k.ATTACK_LP):this.attack(k.ATTACK_RK),Math.random()>.8?this.attack(k.ATTACK_THROW):Math.random()>.9&&(this.state=k.BLOCK_LOW)}else l?this.state=k.WALK_FORWARD:this.state=k.WALK_BACK,this.velocity.x+=this.facing*dn.ACCELERATION*n*5}updateRotation(){if(!this.currentOpponent)return;const t=this.currentOpponent.mesh.position.clone();t.y=this.mesh.position.y,this.mesh.lookAt(t)}attack(t){this.state=t,this.stateTimer=0,this.velocity.set(0,0,0),(t===k.ATTACK_SPECIAL||t===k.ATTACK_SPECIAL_2||t===k.ATTACK_SPECIAL_3)&&(this.specialCooldown=300)}attemptHit(t){this.currentOpponent&&this.checkHit(this.currentOpponent,t)}checkHit(t,n){const a=this.state===k.ATTACK_RK?2.8:2.2,l=a*a,c=this.mesh.position.distanceToSquared(t.mesh.position);if(c<l){let f=!1,d=!1;const m=t.state===k.BLOCK||t.state===k.WALK_BACK,p=t.state===k.BLOCK_LOW,_=t.state===k.DUCK||t.state===k.BLOCK_LOW,g=t.state===k.WALL_SPLAT||t.state===k.GROUNDED||t.state===k.STUNNED;if(t.isLowParrying&&n.hitLevel==="low"&&!g&&this.state!==k.ATTACK_THROW){this.state=k.THROWN,this.velocity.set(0,5,0),this.stunDuration=45,Oe.getInstance().playSFX("block"),t.state=k.ATTACK_SPECIAL;return}if(t.isAttacking()&&!g){let v=n.hitLevel==="low"||this.state===k.DOWN_LP||this.state===k.DOWN_RP||this.state===k.DOWN_LK||this.state===k.DOWN_RK;const D=vu[t.state];if(D&&D.isArmor&&!v&&this.state!==k.ATTACK_THROW){t.takeDamage(n.damage,this.mesh.position,!1,!1,!1,n),Oe.getInstance().playSFX("block"),this.onHit&&this.onHit(t.mesh.position.add(new F(0,1,0)),"block");return}}if(this.state===k.ATTACK_THROW){if(t.isGrounded&&t.state!==k.THROWN&&t.state!==k.GRABBED&&c<4){t.state=k.GRABBED,t.stunDuration=15,t.velocity.set(0,0,0),this.stunDuration=40;return}d=!0}if(!g&&this.state!==k.ATTACK_THROW)n.hitLevel==="high"?_?d=!0:m&&(f=!0):n.hitLevel==="mid"?(m&&(f=!0),p&&(f=!1)):n.hitLevel==="low"&&(p?f=!0:f=!1);else{if(t.state===k.THROWN)return;f=!1}if(d)return;if(this.hitStopTimer=6,t.hitStopTimer=6,f){t.takeDamage(n.damage*.1,this.mesh.position,!0,!1,!1,n),this.onHit&&this.onHit(this.mesh.position.clone().add(t.mesh.position).multiplyScalar(.5).add(new F(0,1.5,0)),"block");return}const x=t.isAttacking();let S=n.launch||0;S||(this.state===k.ATTACK_RK?S=12:x&&n.hitLevel==="mid"&&(S=10)),x&&t.hp<20,t.takeDamage(n.damage,this.mesh.position,!1,S>0,x,n),t.takeDamage(n.damage,this.mesh.position,!1,S>0,x,n);const b=n.isElectric||!1,A=n.isCinematic||!1;let M=S>0||n.damage>12?"heavy":"light";b&&(M="electric"),A&&(M="cinematic"),this.onHit&&this.onHit(this.mesh.position.clone().add(t.mesh.position).multiplyScalar(.5).add(new F(0,1.5,0)),M)}}takeDamage(t,n,a,l,c,f){let d=t;if(!this.isGrounded&&(f!=null&&f.isScrew)&&this.state!==k.TORNADO){this.state=k.TORNADO,this.velocity.y=5,this.stunDuration=60,Oe.getInstance().playSFX("hit_heavy");return}this.hp<30&&(d*=.9),c&&(d*=1.25);const m=this.state===k.GROUNDED,p=this.state===k.WALL_SPLAT;if(m&&(d*=.6),p&&(d*=.8),this.hp=Math.max(0,this.hp-d),this.hp<=0){this.state=k.DEAD;return}a?this.state=(f==null?void 0:f.hitLevel)==="low"?k.BLOCK_LOW:k.BLOCK:m?(l&&(this.state=k.HIT,this.velocity.y=8,this.isGrounded=!1),this.state=k.HIT,this.velocity.y=4,this.isGrounded=!1):p?this.state=k.HIT:this.state=k.HIT;let _=f?a?f.blockStun:f.stun:20;c&&!a&&(_+=10),this.stunDuration=_,this.flashTimer=8;const g=new F().subVectors(this.mesh.position,n).normalize();g.y=0,g.normalize();let x=(f==null?void 0:f.knockback)||1;a&&(x*=.5),l&&(x*=1.2);const S=g.multiplyScalar(x*8);if(this.velocity.add(S),!a&&l){const b=(f==null?void 0:f.launch)||12;this.velocity.y=b,this.isGrounded=!1}}handlePhysics(t,n){this.mesh.position.add(this.velocity.clone().multiplyScalar(n)),this.mesh.position.y>dn.GROUND_Y?(this.velocity.y-=this.gravity*n,this.isGrounded=!1):(this.velocity.y<0&&(this.velocity.y=0),this.mesh.position.y=dn.GROUND_Y,!this.isGrounded&&(this.state===k.HIT||this.state===k.STUNNED)&&(this.state=k.GROUNDED,this.stunDuration=60,Oe.getInstance().playSFX("land"),this.velocity.set(0,0,0),this.onHit&&this.onHit(this.mesh.position,"heavy")),this.isGrounded=!0),this.isGrounded&&(this.state===k.WALK||this.state===k.WALK_FORWARD||this.state===k.WALK_BACK||this.state===k.DASH_FORWARD||this.state===k.DASH_BACK||this.state===k.SIDESTEP_LEFT||this.state===k.SIDESTEP_RIGHT||(this.velocity.x=N_.damp(this.velocity.x,0,10,n),this.velocity.z=N_.damp(this.velocity.z,0,10,n)));const a=15,l=8;this.state===k.TORNADO&&(this.mesh.rotation.x+=.5,this.mesh.rotation.y+=.5),this.mesh.position.x=Math.max(-a,Math.min(a,this.mesh.position.x)),this.mesh.position.z=Math.max(-l,Math.min(l,this.mesh.position.z)),(Math.abs(this.mesh.position.x)>=a||Math.abs(this.mesh.position.z)>=l)&&(this.state===k.HIT||this.state===k.STUNNED)&&this.stunDuration>10&&!this.isGrounded&&(this.state=k.WALL_SPLAT,this.stunDuration=45,this.velocity.set(0,0,0),Oe.getInstance().playSFX("hit_heavy"));const c=new F().subVectors(this.mesh.position,t.mesh.position);c.y=0;const f=c.length(),d=1;if(f<d&&f>.001){const m=d-f,p=c.normalize();this.mesh.position.add(p.multiplyScalar(m*.5))}}isAttacking(){return this.state===k.ATTACK_LP||this.state===k.ATTACK_RP||this.state===k.ATTACK_LK||this.state===k.ATTACK_RK||this.state===k.FORWARD_LP||this.state===k.FORWARD_RP||this.state===k.FORWARD_LK||this.state===k.FORWARD_RK||this.state===k.DOWN_LP||this.state===k.DOWN_RP||this.state===k.DOWN_LK||this.state===k.DOWN_RK||this.state===k.BACK_LP||this.state===k.BACK_RP||this.state===k.BACK_LK||this.state===k.BACK_RK||this.state===k.ATTACK_SPECIAL||this.state===k.ATTACK_SPECIAL_2||this.state===k.ATTACK_SPECIAL_3||this.state===k.ATTACK_THROW||this.state===k.RAGE_ART||this.state===k.GOB_FIRE||this.state===k.GOB_FINISH||this.state===k.UBW_TRACE||this.state===k.UBW_RUSH_1||this.state===k.UBW_RUSH_2||this.state===k.UBW_RUSH_3||this.state===k.UBW_THROW}handleVisuals(){const t=this.state===k.HIT,n=this.hp<30;if(this.bodyParts.meshTorso){const a=this.bodyParts.meshTorso.material;a.emissive&&(t&&this.flashTimer>0?a.emissive.setHex(16711680):this.state===k.GOB_STANCE?a.emissive.setHex(16766720).multiplyScalar(.5):this.state===k.UBW_TRACE||this.state===k.UBW_RUSH_3?a.emissive.setHex(65535).multiplyScalar(.5):n?a.emissive.setHex(16711680).multiplyScalar(.5):a.emissive.setHex(this.characterType==="GILGAMESH"?3351040:0))}this.flashTimer>0&&this.flashTimer--}spawnProjectile(t,n){const a=this.mesh.position.clone().add(new F(0,3,0)),l=t.mesh.position.clone().add(new F(0,2,0)),c=new F().subVectors(l,a).normalize();let f,d;n==="GOB_SWORD"?(f=new qs(.2,2,8),f.rotateX(-Math.PI/2),d=new ii({color:16766720,emissive:16755200,metalness:1,roughness:.2})):(f=new Ze(.2,.1,2),d=new ii({color:65535,emissive:35071,metalness:.8,roughness:.2}));const m=new ve(f,d);m.position.copy(a),m.lookAt(l),this.mesh.parent&&this.mesh.parent.add(m);const p=c.multiplyScalar(40);this.projectiles.push({mesh:m,velocity:p,owner:this,active:!0,damage:15,lifetime:3}),Oe.getInstance().playSFX("woosh")}updateProjectiles(t,n){for(let a=this.projectiles.length-1;a>=0;a--){const l=this.projectiles[a];if(!l.active)continue;if(l.mesh.position.add(l.velocity.clone().multiplyScalar(t)),l.lifetime-=t,l.mesh.position.distanceToSquared(n.mesh.position)<4){const f={damage:l.damage,stun:20,knockback:1,blockStun:10};if(n.state===k.BLOCK||n.state===k.WALK_BACK)n.state=k.BLOCK,n.stunDuration=f.blockStun,Oe.getInstance().playSFX("block"),n.hp-=l.damage*.2;else{n.state=k.HIT,n.stunDuration=f.stun,n.hp-=l.damage,Oe.getInstance().playSFX("hit_light");const m=l.velocity.clone().normalize().multiplyScalar(f.knockback);m.y=0,n.velocity.add(m)}this.destroyProjectile(a);continue}(l.lifetime<=0||l.mesh.position.y<0)&&this.destroyProjectile(a)}}destroyProjectile(t){const n=this.projectiles[t];n.mesh.parent&&n.mesh.parent.remove(n.mesh),this.projectiles.splice(t,1)}handleSkills(t){if(this.specialCooldown>0)return!1;if(this.characterType==="GILGAMESH"){if(t.keys.KeyE&&!this.prevKeys.KeyE)return this.state===k.GOB_STANCE?this.attack(k.GOB_FINISH):this.attack(k.GOB_STANCE),!0;if(this.state===k.GOB_STANCE&&(t.keys.KeyF&&!this.prevKeys.KeyF||t.keys.KeyJ&&!this.prevKeys.KeyJ||t.mouseLeft))return this.attack(k.GOB_FIRE),!0}if(this.characterType==="ARCHER"){if(t.keys.KeyE&&!this.prevKeys.KeyE)return this.attack(k.UBW_TRACE),!0;if(this.isAttacking()){const n=vu[this.state];if(n&&n.nextMoves&&t.keys.KeyE&&!this.prevKeys.KeyE&&n.nextMoves.KeyE)return this.attack(n.nextMoves.KeyE),!0}}return t.keys.KeyQ&&!this.prevKeys.KeyQ?(this.attack(k.ATTACK_SPECIAL_2),!0):t.keys.KeyU&&!this.prevKeys.KeyU?(this.attack(k.ATTACK_SPECIAL_3),!0):!1}updateAnimations(t){let n=10*t;const a={hipsPos:{y:.85},torsoRot:{x:0,y:0,z:0},headRot:{x:0,y:0},armL:{x:0,z:.3},armR:{x:0,z:-.3},elbowL:{x:0},elbowR:{x:0},legL:{x:0,z:0},legR:{x:0,z:0},kneeL:{x:0},kneeR:{x:0}};if(this.state===k.IDLE||this.state===k.WALK){n=8*t;const c=Math.sin(Date.now()/300)*.015,f=Math.sin(Date.now()/600)*.015;a.torsoRot.x=c,a.hipsPos.y+=f,this.characterType==="GILGAMESH"?(a.torsoRot.y=-.6*this.facing,a.headRot.y=.6*this.facing,a.headRot.x=-.3+c,a.armL.x=-.9,a.armL.z=.8,a.elbowL.x=-1.9,a.armR.x=-.9,a.armR.z=-.8,a.elbowR.x=-1.9,a.hipsPos.y=.92+Math.sin(Date.now()/800)*.02):(a.hipsPos.y=.8+f,a.torsoRot.y=.5*this.facing,a.headRot.y=-.5*this.facing,a.legL.z=-.3,a.legL.x=-.2,a.legR.z=.3,a.legR.x=.2,a.armL.x=-.6,a.armL.z=.6,a.elbowL.x=-1.5,a.armR.x=-.3,a.armR.z=-.4,a.elbowR.x=-1.8)}else if(this.state===k.GOB_STANCE)n=15*t,a.armR.z=-2.5,a.armR.x=.5,a.torsoRot.y=-.5*this.facing,a.headRot.x=-.2;else if(this.state===k.STANCE_HEAVEN)n=10*t,this.characterType==="GILGAMESH"?(a.hipsPos.y=.9,a.torsoRot.x=-.5,a.headRot.x=.8,a.armL.x=-.5,a.armL.z=1.5,a.elbowL.x=-.5,a.armR.x=-.5,a.armR.z=-1.5,a.elbowR.x=-.5):(a.hipsPos.y=.8,a.torsoRot.x=.2,a.headRot.x=-.2,a.armL.x=-1,a.armL.z=.8,a.elbowL.x=-1,a.armR.x=-1,a.armR.z=-.8,a.elbowR.x=-1);else if(this.state===k.WALK_FORWARD)if(n=12*t,this.characterType==="GILGAMESH"){const c=Date.now()/200;a.torsoRot.y=-.5*this.facing,a.headRot.y=.5*this.facing,a.headRot.x=-.15,a.armL.x=-.9,a.armL.z=.8,a.elbowL.x=-1.9,a.armR.x=-.9,a.armR.z=-.8,a.elbowR.x=-1.9,a.legL.x=Math.sin(c)*.3,a.legR.x=Math.sin(c+Math.PI)*.3,a.kneeL.x=Math.sin(c)>0?-.3:0,a.kneeR.x=Math.sin(c+Math.PI)>0?-.3:0,a.hipsPos.y=.9+Math.abs(Math.cos(c))*.02}else{const c=Date.now()/120;a.torsoRot.x=.4,a.headRot.x=-.4,a.legL.x=Math.sin(c)*.8,a.legR.x=Math.sin(c+Math.PI)*.8,a.kneeL.x=Math.abs(Math.sin(c))*-1.2,a.kneeR.x=Math.abs(Math.sin(c+Math.PI))*-1.2,a.armL.x=-.5,a.armL.z=.5,a.elbowL.x=-1.5,a.armR.x=-1,a.armR.z=-.5,a.elbowR.x=-1.5}else if(this.state===k.WALK_BACK)if(this.characterType==="GILGAMESH"){a.torsoRot.y=-.6*this.facing,a.headRot.y=.6*this.facing,a.armL.x=-.9,a.armL.z=.8,a.elbowL.x=-1.9,a.armR.x=-.9,a.armR.z=-.8,a.elbowR.x=-1.9;const c=Date.now()/250;a.legL.x=Math.sin(c)*.2,a.legR.x=Math.sin(c+Math.PI)*.2,a.hipsPos.y=.9}else{a.torsoRot.y=.5*this.facing;const c=Date.now()/200;a.legL.x=Math.sin(c)*.3,a.legR.x=Math.sin(c+Math.PI)*.3,a.armL.x=-.6,a.armL.z=.6,a.elbowL.x=-1.5,a.armR.x=-.3,a.armR.z=-.4,a.elbowR.x=-1.8}else if(this.state===k.SIDESTEP_LEFT)n=15*t,a.torsoRot.z=.3,a.legL.z=-.5,a.legL.x=.3,a.legR.z=.2,a.hipsPos.y=.8,a.armL.x=-.8,a.armR.x=-.8;else if(this.state===k.SIDESTEP_RIGHT)n=15*t,a.torsoRot.z=-.3,a.legR.z=.5,a.legR.x=.3,a.legL.z=-.2,a.hipsPos.y=.8,a.armL.x=-.8,a.armR.x=-.8;else if(this.isAttacking()){const c=vu[this.state];if(c){const f=c.startup,d=c.active,m=this.stateTimer;let p="recovery";m<f?p="windup":m<f+d&&(p="active"),p==="windup"?n=12*t:p==="active"?n=35*t:n=6*t,this.state===k.ATTACK_LP||this.state===k.ATTACK_RP?p==="windup"?(a.torsoRot.y=.5*this.facing,this.characterType==="GILGAMESH"?a.armR.x=-.5:(a.armL.x=-.5,a.armL.z=1,a.elbowL.x=-2)):this.characterType==="GILGAMESH"?(a.torsoRot.y=-.3*this.facing,a.armR.x=-1.6,a.armR.z=0,a.elbowR.x=0,a.armL.x=-.9,a.armL.z=.8,a.elbowL.x=-1.9):(a.torsoRot.y=-.8*this.facing,a.armL.x=-1.5,a.armL.z=.8,a.elbowL.x=-.5,a.armR.x=-.5,a.armR.z=-.5):this.state===k.ATTACK_LK||this.state===k.ATTACK_RK?p==="windup"?(a.torsoRot.y=-.2*this.facing,a.legR.x=-1,a.kneeR.x=-2):(a.torsoRot.y=-.8*this.facing,a.legR.x=-1.6,a.legR.z=0,a.kneeR.x=-.1,a.armL.x=-.8,a.armR.x=-.8):this.state===k.ATTACK_SPECIAL?this.characterType==="GILGAMESH"?p==="windup"?(a.torsoRot.y=0,a.armR.x=-.8,a.armR.z=.5):(a.torsoRot.y=-.3*this.facing,a.armR.x=-1.6,a.armR.z=0,a.elbowR.x=-.1):p==="windup"?(a.torsoRot.y=-.5*this.facing,a.armL.x=-1,a.armR.x=-1):(a.torsoRot.y=1.5*this.facing,a.armL.x=-1.8,a.armL.z=1,a.armR.x=-1.8,a.armR.z=-1):this.state===k.ATTACK_SPECIAL_2?this.characterType==="GILGAMESH"?(a.torsoRot.y=-.5*this.facing,a.armR.x=-1.7,a.armR.z=.2,a.elbowR.x=0,a.armL.x=-.5,a.armL.z=.5):(a.torsoRot.y=-1*this.facing,a.armL.x=-1.8,a.armL.z=0,a.armR.x=-1,a.armR.z=.5,a.elbowR.x=-2.5,a.headRot.y=1):this.state===k.ATTACK_SPECIAL_3?p==="windup"?(a.hipsPos.y=.8,a.torsoRot.x=.2):(a.hipsPos.y=.95,a.torsoRot.y=0,this.characterType==="GILGAMESH"?(a.armR.x=-3,a.armR.z=0,a.headRot.x=-.5):(a.armR.x=-2.8,a.headRot.x=-.3)):this.state===k.ATTACK_THROW?p==="windup"?(a.armL.x=-.5,a.armR.x=-.5):(a.armL.x=-1.5,a.armR.x=-1.5,a.torsoRot.x=.3):this.state===k.RAGE_ART?(a.hipsPos.y=.5,a.torsoRot.x=.5,a.armL.x=-2,a.armR.x=-2,a.headRot.x=.5):(this.state===k.DOWN_RK||this.state===k.DOWN_LP||this.state===k.DOWN_LK||this.state===k.DOWN_RP)&&(a.hipsPos.y=.55,a.torsoRot.x=.5,a.torsoRot.y=.5*this.facing,a.armL.x=-.6,a.armL.z=.8,a.elbowL.x=-2.2,a.armR.x=-.6,a.armR.z=-.5,a.elbowR.x=-2,a.legL.x=1,a.legR.x=1,a.kneeL.x=-2,a.kneeR.x=-2,a.legR.x=1.5,a.legR.z=.5)}}else this.state===k.HIT?(n=20*t,a.torsoRot.x=.5,a.headRot.x=-.5,a.armL.x=-1.5,a.armR.x=-1.5):this.state===k.BLOCK?(a.torsoRot.y=.5*this.facing,a.armL.x=-.8,a.armL.z=.8,a.elbowL.x=-2.2,a.armR.x=-.9,a.armR.z=-.5,a.elbowR.x=-1.5):this.state===k.BLOCK_LOW||this.state===k.DUCK?(a.hipsPos.y=.55,a.torsoRot.x=.5,a.torsoRot.y=.5*this.facing,a.armL.x=-.6,a.armL.z=.8,a.elbowL.x=-2.2,a.armR.x=-.6,a.armR.z=-.5,a.elbowR.x=-2,a.legL.x=1,a.legR.x=1,a.kneeL.x=-2,a.kneeR.x=-2):this.state===k.DEAD&&(a.armL.x=-2.5,a.armR.x=-2.5);const l=(c,f,d,m)=>{c.rotation.x+=(f-c.rotation.x)*n,c.rotation.y+=(d-c.rotation.y)*n,c.rotation.z+=(m-c.rotation.z)*n};l(this.bodyParts.torso,a.torsoRot.x,a.torsoRot.y,a.torsoRot.z),l(this.bodyParts.head,a.headRot.x,a.headRot.y,0),l(this.bodyParts.armL,a.armL.x,0,a.armL.z),l(this.bodyParts.armR,a.armR.x,0,a.armR.z),l(this.bodyParts.elbowL,a.elbowL.x,0,0),l(this.bodyParts.elbowR,a.elbowR.x,0,0),l(this.bodyParts.legL,a.legL.x,0,a.legL.z),l(this.bodyParts.legR,a.legR.x,0,a.legR.z),l(this.bodyParts.kneeL,a.kneeL.x,0,0),l(this.bodyParts.kneeR,a.kneeR.x,0,0),this.bodyParts.hips.position.y+=(a.hipsPos.y-this.bodyParts.hips.position.y)*n}animateDead(){this.mesh.rotation.z=Math.PI/2,this.mesh.position.y=.5}setBuffer(t){this.inputBuffer=t,this.inputBufferTimer=12}};Bp.HIT_STOP_FRAMES=8;let Ru=Bp;class Nv{constructor(){this.keys={},this.justPressed=null,this.mouseLeft=!1,this.mouseRight=!1,this.onKeyDownCallback=null,window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t)),window.addEventListener("mousedown",t=>this.onMouseDown(t)),window.addEventListener("mouseup",t=>this.onMouseUp(t)),window.addEventListener("contextmenu",t=>t.preventDefault())}onMouseDown(t){t.button===0&&(this.mouseLeft=!0),t.button===2&&(this.mouseRight=!0)}onMouseUp(t){t.button===0&&(this.mouseLeft=!1),t.button===2&&(this.mouseRight=!1)}onKeyDown(t){this.keys[t.code]||(this.justPressed=t.code,this.onKeyDownCallback&&this.onKeyDownCallback(t.code)),this.keys[t.code]=!0}onKeyUp(t){this.keys[t.code]=!1}isPressed(t){return!!this.keys[t]}getJustPressed(){const t=this.justPressed;return this.justPressed=null,t}cleanup(){window.removeEventListener("keydown",t=>this.onKeyDown(t)),window.removeEventListener("keyup",t=>this.onKeyUp(t))}}class PR{constructor(t,n,a,l){this.animationId=0,this.timerInterval=0,this.lastTime=0,this.timeLeft=dn.ROUND_TIME,this.introTimer=240,this.projectiles=[],this.particles=[],this.damageNumbers=[],this.gears=[],this.gameOverTriggered=!1,this.hitStopFrames=0,this.trauma=0,this.comboP1=0,this.comboP2=0,this.comboTimerP1=0,this.comboTimerP2=0,this.gameSpeed=1,this.currentRound=1,this.maxRounds=3,this.p1Wins=0,this.p2Wins=0,this.p1PrevState="",this.p2PrevState="",this.p1PrevGrounded=!0,this.p2PrevGrounded=!0,this.animate=S=>{this.animationId=requestAnimationFrame(this.animate);let b=1/60*this.gameSpeed;if(this.hitStopFrames>0){this.hitStopFrames--;const A=(Math.random()-.5)*.5;this.camera.position.add(new F(A,A,0)),this.renderer.render(this.scene,this.camera);return}if(this.isCinematicMode){this.renderer.render(this.scene,this.camera);return}if((this.p1.hp<=0||this.p2.hp<=0||this.timeLeft<=0)&&(this.gameOverTriggered||this.handleGameOver()),this.updateCamera(),this.trauma=Math.max(0,this.trauma-b*1.5),this.comboTimerP1>0&&(this.comboTimerP1--,this.comboTimerP1<=0&&this.resetCombo(!0)),this.comboTimerP2>0&&(this.comboTimerP2--,this.comboTimerP2<=0&&this.resetCombo(!1)),this.introTimer>0){this.introTimer--;const A=new Nv;this.p1.update(b,A,this.p2,S),this.p2.update(b,A,this.p1,S)}else this.updateFighters(b,S);this.updateProjectiles(b),this.updateParticles(b),this.updateCherryBlossoms(),this.updateDamageNumbers(b),this.updateEnvironmentAnim(b),this.composer.render(),this.broadcastState()},this.isCinematicMode=!1,this.cameraShake=new F,this.cameraZoom=0,this.notificationState=null,this.handleResize=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)},this.cherryBlossoms=null,this.onStateChange=l,this.input=new Nv,this.input.onKeyDownCallback=S=>{this.p1.hp<=0||this.p2.hp<=0||this.timeLeft<=0||this.p1&&this.p1.handleInputEvent(S)},Oe.getInstance().init().then(()=>{Oe.getInstance().playBGM("bgm_battle")}),this.scene=new t1,this.scene.background=new se(15790335),this.scene.fog=new Np(16777215,.008),this.camera=new gi(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,5,12),this.renderer=new hR({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ov,this.cameraTargetPos=new F(0,5,12),this.cameraLookAt=new F(0,2,0),this.baseCameraPos=new F(0,5,12),this.renderer.toneMapping=Sp,this.renderer.toneMappingExposure=1.2,this.composer=new AR(this.renderer);const c=new CR(this.scene,this.camera);this.composer.addPass(c);const f=new yR(new ne(window.innerWidth,window.innerHeight),.3,.4,.9);this.composer.addPass(f);const d=new f1(16777215,12303359,3.5);this.scene.add(d);const m=new sv(16777215,4);m.position.set(-15,30,20),m.castShadow=!0,m.shadow.mapSize.width=4096,m.shadow.mapSize.height=4096,m.shadow.bias=-1e-4,this.scene.add(m);const p=new sv(16772812,2);p.position.set(20,10,10),this.scene.add(p),this.createLushEnvironment();const _=new Li(20,20),g=new on({color:16777215,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1});this.impactPlane=new ve(_,g),this.impactPlane.position.set(0,0,-10),this.impactPlane.visible=!1,this.camera.add(this.impactPlane),this.scene.add(this.camera),this.p1=new Ru(!0,n,16711680),this.p2=new Ru(!1,a,255);const x=(S,b)=>{if(b==="block")this.createHitParticles(S,!1,!0),Oe.getInstance().playSFX("block");else if(b==="electric")this.createHitParticles(S,!1,!1,!0),this.createBurst(S,65535,20),Oe.getInstance().playSFX("hit_heavy"),this.triggerCameraShake(.8),this.triggerImpactFrame(!0);else if(b==="cinematic"){const A=this.p1.state===k.RAGE_ART?this.p1:this.p2;this.triggerCinematicSequence(A)}else this.createBurst(S,b==="heavy"?16729088:16755200,b==="heavy"?15:8),this.createHitParticles(S,b==="heavy",!1),Oe.getInstance().playSFX(b==="heavy"?"hit_heavy":"hit_light"),this.triggerCameraShake(b==="heavy"?.6:.2),b==="heavy"&&this.triggerImpactFrame(!0)};this.p1.onHit=x,this.p2.onHit=x,this.scene.add(this.p1.mesh),this.scene.add(this.p2.mesh),this.timerInterval=setInterval(()=>{this.p1.hp>0&&this.p2.hp>0&&this.timeLeft>0&&(this.timeLeft--,this.broadcastState())},1e3),this.animate(0),window.addEventListener("resize",this.handleResize)}createLushEnvironment(){const t=new Li(300,300),n=new ii({color:15658751,roughness:.1,metalness:.1,envMapIntensity:.8}),a=new ve(t,n);a.rotation.x=-Math.PI/2,a.receiveShadow=!0,this.scene.add(a);const l=40,c=new Da(.8,.8,12,16),f=new ii({color:15658734,roughness:.1,metalness:.2}),d=new au(c,f,l),m=new cn;for(let O=0;O<l;O++){const Y=O/l*Math.PI*2,T=35+Math.random()*5,C=Math.cos(Y)*T,H=Math.sin(Y)*T;m.position.set(C,6,H),m.rotation.set(0,0,0),m.scale.set(1,1,1),m.updateMatrix(),d.setMatrixAt(O,m.matrix)}d.castShadow=!0,d.receiveShadow=!0,this.scene.add(d);const p=2e3,_=new bn,g=new Float32Array(p*3),x=[];for(let O=0;O<p;O++)g[O*3]=(Math.random()-.5)*100,g[O*3+1]=Math.random()*40,g[O*3+2]=(Math.random()-.5)*60,x.push({x:(Math.random()-.5)*.1,y:-Math.random()*.1-.05,z:(Math.random()-.5)*.1});_.setAttribute("position",new Fn(g,3));const S=new ml({color:16755404,size:.4,transparent:!0,opacity:.8,map:this.createStarTexture(),depthWrite:!1,blending:yn}),b=new lu(_,S);this.scene.add(b),this.envParticles={mesh:b,vels:x};const A=50,M=new Ze(1,1,1),v=new ii({color:13434879,emissive:1122867,transparent:!0,opacity:.6}),D=new au(M,v,A);for(let O=0;O<A;O++){const Y=(Math.random()-.5)*80,T=10+Math.random()*20,C=(Math.random()-.5)*50;m.position.set(Y,T,C),m.rotation.set(Math.random(),Math.random(),Math.random()),m.scale.setScalar(Math.random()*2+.5),m.updateMatrix(),D.setMatrixAt(O,m.matrix)}this.scene.add(D);const U=20,L=new qs(2,6,8),I=new ii({color:8965256,roughness:.8}),z=new au(L,I,U);for(let O=0;O<U;O++){const Y=20+Math.random()*40,T=Math.random()*Math.PI*2;m.position.set(Math.cos(T)*Y,3,Math.sin(T)*Y),m.scale.setScalar(1+Math.random()),m.updateMatrix(),z.setMatrixAt(O,m.matrix)}this.scene.add(z)}createSkybox(){const t=new bn,n=3e3,a=new Float32Array(n*3),l=new Float32Array(n*3);for(let _=0;_<n;_++){const g=(Math.random()-.5)*400,x=Math.random()*200+10,S=(Math.random()-.5)*400;a[_*3]=g,a[_*3+1]=x,a[_*3+2]=S;const b=Math.random();let A=new se(16777215);b>.9?A.setHex(11184895):b>.8&&A.setHex(16755336),l[_*3]=A.r,l[_*3+1]=A.g,l[_*3+2]=A.b}t.setAttribute("position",new Fn(a,3)),t.setAttribute("color",new Fn(l,3));const c=new ml({size:.3,vertexColors:!0,transparent:!0,opacity:.8,map:this.createStarTexture(),blending:yn,depthWrite:!1}),f=new lu(t,c);this.scene.add(f);const d=new Da(100,100,40,32,1,!0);d.translate(0,10,0);const m=new Gn({uniforms:{color:{value:new se(2232644)},topColor:{value:new se(0)}},vertexShader:`
                varying vec3 vWorldPosition;
                void main() {
                    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
                    vWorldPosition = worldPosition.xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
                }
            `,fragmentShader:`
                uniform vec3 color;
                uniform vec3 topColor;
                varying vec3 vWorldPosition;
                void main() {
                    float h = normalize( vWorldPosition + vec3(0, 10.0, 0) ).y;
                    gl_FragColor = vec4( mix( color, topColor, max( h, 0.0 ) ), 0.5 );
                }
            `,side:Kn,blending:yn,transparent:!0}),p=new ve(d,m);this.scene.add(p)}createStarTexture(){const t=document.createElement("canvas");t.width=32,t.height=32;const n=t.getContext("2d");if(!n)return null;const a=n.createRadialGradient(16,16,0,16,16,16);return a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.2,"rgba(255,255,255,0.8)"),a.addColorStop(.5,"rgba(255,255,255,0.2)"),a.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=a,n.fillRect(0,0,32,32),new pd(t)}createElectricParticle(t){}spawnProjectile(t,n){const l=t.isPlayer1?this.p2:this.p1,c=l.mesh.position.clone().add(new F(0,1,0));let f=t.mesh.position.clone(),d=new F,m,p=25,_=100;if(n==="SWORD_RAIN"){f=l.mesh.position.clone(),f.x+=(Math.random()-.5)*6,f.z+=(Math.random()-.5)*4,f.y=12,d=new F(0,-25,0);const D=new Ze(.1,.5,.1),U=new on({color:16766720});m=new ve(D,U),m.position.copy(f),_=60}else{f.y+=1.5,t.characterType==="GILGAMESH"?f.add(new F((Math.random()-.5)*4,1+Math.random()*2,-1.5)):f.add(new F(0,0,.5));let D,U;if(n==="CHAIN")D=new Da(.1,.1,2,8),D.rotateX(Math.PI/2),U=new ii({color:11184810}),p=35;else if(n==="ARROW")D=new Da(.05,.2,3,8),D.rotateX(Math.PI/2),U=new on({color:65535,blending:yn}),p=50,_=60;else if(t.characterType==="ARCHER"){const L=Math.random()>.5;D=new Ze(.6,.05,.15),U=new ii({color:L?2236962:15658734}),p=30}else D=new Ze(.08,.08,1.2),U=new ii({color:16766720,emissive:16755200,emissiveIntensity:.4}),p=30;m=new ve(D,U),m.position.copy(f),m.lookAt(c),t.characterType==="ARCHER"&&n!=="ARROW"&&m.rotateX(Math.PI/2),d=new F(0,0,1).applyQuaternion(m.quaternion).multiplyScalar(p)}let g=10,x=20,S=!1,b=!1,A=!1;n==="SWORD_HEAVY"?(g=50,x=60,S=!0):n==="ARROW"?(g=40,x=40,S=!0,A=!0):n==="CHAIN"?(g=15,x=120,b=!0):n==="SWORD"?g=12:n==="SWORD_RAIN"&&(g=5,x=10),this.scene.add(m);const M=n==="ARROW"||n==="SWORD_RAIN"?65535:n==="SWORD_HEAVY"?16711680:16755200,v=new d1(M,2,5);m.add(v),this.projectiles.push({mesh:m,velocity:d,owner:t,active:!0,life:_,damage:g,stun:x,isHeavy:S,isBind:b,isExplosive:A})}updateProjectiles(t){for(let n=this.projectiles.length-1;n>=0;n--){const a=this.projectiles[n];if(a.mesh.position.add(a.velocity.clone().multiplyScalar(t)),a.life--,a.life%2===0){const f=a.mesh;if(f.geometry&&f.material){const d=f.geometry.clone(),m=f.material.clone();m.transparent=!0,m.opacity=.4;const p=new ve(d,m);p.position.copy(a.mesh.position),p.quaternion.copy(a.mesh.quaternion),p.scale.copy(a.mesh.scale).multiplyScalar(.9),this.scene.add(p),this.particles.push({mesh:p,life:10,velocity:new F(0,0,0)})}}if(a.owner.characterType==="ARCHER"&&(a.mesh.rotation.y+=15*t),a.active&&a.life<=0){a.active=!1,this.scene.remove(a.mesh);const f=a.mesh;f.geometry&&f.geometry.dispose(),f.material&&f.material.dispose()}const l=a.owner.isPlayer1?this.p2:this.p1;if(a.mesh.position.distanceTo(l.mesh.position)<1.5&&a.active&&l.state!==k.DEAD){a.active=!1,this.scene.remove(a.mesh);const f=a.mesh;f.geometry&&f.geometry.dispose(),f.material&&f.material.dispose(),this.projectiles.splice(n,1),l.state===k.BLOCK||l.state===k.BLOCK_LOW?(Oe.getInstance().playSFX("block"),l.takeDamage(a.damage*.2,a.mesh.position,!0,!1,!1,void 0),this.createBurst(a.mesh.position,35071,5),this.createDamageNumber(a.mesh.position,a.damage*.2,!1,!0)):(this.createBurst(a.mesh.position,16729088,15),this.hitStopFrames=a.isHeavy?6:3,this.triggerCameraShake(a.isHeavy?.6:.2),a.isHeavy||a.isExplosive,a.isExplosive?(Oe.getInstance().playSFX("explosion"),this.createHitParticles(a.mesh.position,!0,!1),this.createHitParticles(a.mesh.position,!0,!1),this.createHitParticles(a.mesh.position,!0,!1)):a.isHeavy?Oe.getInstance().playSFX("hit_heavy"):Oe.getInstance().playSFX("hit_light"),l.takeDamage(a.damage,a.mesh.position,!1,a.isHeavy,!1,{damage:a.damage,stun:a.stun,blockStun:15,knockback:a.isHeavy?8:4,startup:0,active:0,recovery:0,hitLevel:"mid"}),this.createDamageNumber(a.mesh.position,a.damage,a.isHeavy,!1),this.addCombo(a.owner.isPlayer1),a.isHeavy&&(this.triggerImpactFrame(!0),this.triggerCameraShake(1)),a.isBind)}if(a.mesh.position.y<0){this.scene.remove(a.mesh);const f=a.mesh;f.geometry&&f.geometry.dispose(),f.material&&f.material.dispose(),this.projectiles.splice(n,1);continue}}}createHitParticles(t,n=!1,a=!1,l=!1){const c=a?8:15;if(l){for(let D=0;D<25;D++){const U=new Ze(.05,.05,1+Math.random()),L=new on({color:65535,blending:yn}),I=new ve(U,L);I.position.copy(t),I.lookAt(new F(t.x+(Math.random()-.5),t.y+(Math.random()-.5),t.z+(Math.random()-.5)));const z=new F((Math.random()-.5)*15,Math.random()*12,(Math.random()-.5)*15);this.scene.add(I),this.particles.push({mesh:I,life:40,velocity:z})}const A=new Xs(1.5,.2,6,20),M=new on({color:35071,transparent:!0,opacity:1,blending:yn}),v=new ve(A,M);v.position.copy(t),v.lookAt(this.camera.position),this.scene.add(v),v.isShockwave=!0,this.particles.push({mesh:v,life:15,velocity:new F(0,0,0)});return}if(a){const A=new Xs(.5,.05,8,16),M=new on({color:65535,transparent:!0,opacity:.8,blending:yn}),v=new ve(A,M);v.position.copy(t),v.lookAt(this.camera.position),this.scene.add(v),v.isShockwave=!0,this.particles.push({mesh:v,life:15,velocity:new F});for(let D=0;D<5;D++){const U=new Ze(.1,.1,.2),L=new on({color:35071,blending:yn}),I=new ve(U,L);I.position.copy(t);const z=new F((Math.random()-.5)*5,Math.random()*5,(Math.random()-.5)*5);this.scene.add(I),this.particles.push({mesh:I,life:20,velocity:z})}return}for(let A=0;A<c;A++){const M=new Ze(.1,.1,.6+Math.random()*.4),v=Math.random(),D=v>.6?16766720:v>.3?16729088:16777215,U=new on({color:D,blending:yn}),L=new ve(M,U);L.position.copy(t),L.lookAt(new F(t.x+(Math.random()-.5),t.y+(Math.random()-.5),t.z+(Math.random()-.5)));const I=new F((Math.random()-.5)*12,Math.random()*10,(Math.random()-.5)*12);this.scene.add(L),this.particles.push({mesh:L,life:30,velocity:I})}const f=new Xs(1,.1,6,20),d=new on({color:16777215,transparent:!0,opacity:1,blending:yn}),m=new ve(f,d);m.position.copy(t),m.rotation.x=Math.PI/2,m.lookAt(this.camera.position),this.scene.add(m),m.isShockwave=!0,this.particles.push({mesh:m,life:10,velocity:new F(0,0,0)});const p=new Li(100,100),_=new ii({color:1118481,roughness:.1,metalness:.8,envMapIntensity:1}),g=new ve(p,_);g.rotation.x=-Math.PI/2,g.receiveShadow=!0,this.scene.add(g);const x=new Cu(1,8,8),S=new on({color:16755200,transparent:!0,opacity:.5,blending:yn}),b=new ve(x,S);b.position.copy(t),this.scene.add(b),b.isExplosion=!0,this.particles.push({mesh:b,life:5,velocity:new F})}updateParticles(t){for(let n=this.particles.length-1;n>=0;n--){const a=this.particles[n];if(a.life--,a.mesh.userData&&a.mesh.userData.isPortal){const l=60-a.life,c=a.mesh.material;l<10?c.opacity=l/10:a.life<10?c.opacity=a.life/10:c.opacity=1,a.mesh.rotation.z+=.1;const f=1+Math.sin(l*.2)*.1;a.mesh.scale.set(f,f,f)}else if(a.mesh.isExplosion){if(a.mesh.scale.multiplyScalar(1.1),a.life<10){const l=a.mesh;l.material&&(l.material.opacity=a.life/10)}}else if(a.mesh.isShockwave){a.mesh.scale.multiplyScalar(1.15);const l=a.mesh.material;l.opacity=a.life/20}else a.mesh.position.add(a.velocity.clone().multiplyScalar(t)),a.velocity.length()>.5&&(a.velocity.y-=15*t),a.mesh.rotation.x+=.4,a.mesh.rotation.y+=.4;a.life<=0&&(this.scene.remove(a.mesh),this.particles.splice(n,1))}}handleSkillTrigger(t,n){const a=Math.floor(t.stateTimer),l=Math.floor(t.stateTimer-n*60);switch(t.characterType){case"GILGAMESH":if(t.state===k.ATTACK_SPECIAL){a===10&&this.createPortal(t.mesh.position.clone().add(new F(0,2,-1))),a===15&&this.createPortal(t.mesh.position.clone().add(new F(0,3,0))),a===20&&this.createPortal(t.mesh.position.clone().add(new F(0,2,1))),a===25&&this.createPortal(t.mesh.position.clone().add(new F(1,2.5,-.5))),a===30&&this.createPortal(t.mesh.position.clone().add(new F(-1,2.5,.5)));const c=[20,25,30,35,40];c.includes(a)&&!c.includes(l)&&(this.spawnProjectile(t,"SWORD"),a===40&&this.triggerImpactFrame(!1),this.triggerCameraShake(.2))}t.state===k.ATTACK_SPECIAL_2&&a>=25&&l<25&&(this.createPortal(t.mesh.position.clone().add(new F(1,1,0)),13421772),this.spawnProjectile(t,"CHAIN")),t.state===k.ATTACK_SPECIAL_3&&(a===20&&this.triggerCameraShake(1),a>=40&&l<40&&(this.createPortal(t.mesh.position.clone().add(new F(0,5,0)),16711680,3),this.spawnProjectile(t,"SWORD_HEAVY"),this.triggerImpactFrame(!0),this.triggerCameraShake(2)));break;case"ARCHER":if(t.state===k.ATTACK_SPECIAL&&a>=25&&l<25&&(this.spawnProjectile(t,"SWORD"),this.spawnProjectile(t,"SWORD"),this.spawnProjectile(t,"SWORD")),t.state===k.ATTACK_SPECIAL_2){a===10&&this.createChargeEffect(t.mesh.position);const c=30;a>=c&&l<c&&(this.spawnProjectile(t,"ARROW"),this.triggerCameraShake(.8),this.triggerImpactFrame(!0))}t.state===k.ATTACK_SPECIAL_3&&a>30&&a<90&&a%2===0&&this.spawnProjectile(t,"SWORD_RAIN");break}}createPortal(t,n=16766720,a=1){const l=new Xs(.5*a,.05*a,8,16),c=new on({color:n,transparent:!0,opacity:0,blending:yn}),f=new ve(l,c);f.position.copy(t),f.lookAt(this.p2.mesh.position),this.scene.add(f),f.userData={isPortal:!0,age:0},this.particles.push({mesh:f,life:60,velocity:new F})}createChargeEffect(t){for(let n=0;n<10;n++){const a=new ve(new Ze(.1,.1,.1),new on({color:65535}));a.position.copy(t).add(new F((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2)),this.scene.add(a);const l=t.clone().sub(a.position).normalize().multiplyScalar(.2);this.particles.push({mesh:a,life:20,velocity:l})}}createDashDust(t){for(let n=0;n<6;n++){const a=.3+Math.random()*.4,l=new Ze(a,a,a),c=new on({color:9127187,transparent:!0,opacity:.6}),f=new ve(l,c);f.position.copy(t).add(new F((Math.random()-.5)*1.5,.5+Math.random()*.5,(Math.random()-.5)*1.5)),this.scene.add(f);const d=new F((Math.random()-.5)*.1,.05+Math.random()*.1,(Math.random()-.5)*.1);f.userData={isDust:!0},this.particles.push({mesh:f,life:30,velocity:d})}}handleMovementFX(){(this.p1.state===k.DASH_FORWARD||this.p1.state===k.DASH_BACK)&&this.p1.stateTimer===1&&(Oe.getInstance().playSFX("dash"),this.createDashDust(this.p1.mesh.position)),this.p1.isGrounded&&!this.p1PrevGrounded&&(Oe.getInstance().playSFX("land"),this.createDashDust(this.p1.mesh.position)),this.p1PrevGrounded=this.p1.isGrounded,(this.p2.state===k.DASH_FORWARD||this.p2.state===k.DASH_BACK)&&this.p2.stateTimer===1&&(Oe.getInstance().playSFX("dash"),this.createDashDust(this.p2.mesh.position)),this.p2.isGrounded&&!this.p2PrevGrounded&&(Oe.getInstance().playSFX("land"),this.createDashDust(this.p2.mesh.position)),this.p2PrevGrounded=this.p2.isGrounded}createBurst(t,n=16777215,a=10){const l=new Li(.1,.1);for(let c=0;c<a;c++){const f=new on({color:n,side:si,blending:yn,transparent:!0}),d=new ve(l,f);d.position.copy(t),d.position.add(new F(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.5));const m=new F(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(5+Math.random()*5);this.scene.add(d),this.particles.push({mesh:d,life:30+Math.random()*20,velocity:m})}}addCombo(t){t?(this.comboP1++,this.comboTimerP1=120):(this.comboP2++,this.comboTimerP2=120)}resetCombo(t){t?this.comboP1=0:this.comboP2=0}triggerImpactFrame(t){this.impactPlane.material.color.setHex(t?16777215:0),this.impactPlane.visible=!0,setTimeout(()=>{this.impactPlane.visible=!1},50)}handleGameOver(){if(this.gameOverTriggered)return;this.gameOverTriggered=!0;let t="Draw";this.p1.hp<=0&&this.p2.hp>0?t="Player 2":this.p2.hp<=0&&this.p1.hp>0&&(t="Player 1"),this.timeLeft<=0&&(this.p1.hp>this.p2.hp?t="Player 1":this.p2.hp>this.p1.hp&&(t="Player 2")),t==="Player 1"&&this.p1Wins++,t==="Player 2"&&this.p2Wins++,Oe.getInstance().playSFX("hit_heavy"),this.triggerSlowMo(2e3);const n=Math.ceil(this.maxRounds/2);this.p1Wins>=n||this.p2Wins>=n?(Oe.getInstance().playSFX("win"),this.broadcastState()):setTimeout(()=>{this.nextRound()},3e3)}nextRound(){this.currentRound++,this.gameOverTriggered=!1,this.gameSpeed=1,this.timeLeft=dn.ROUND_TIME,this.introTimer=180,this.resetPositions(),this.p1.hp=this.p1.maxHp,this.p2.hp=this.p2.maxHp,this.p1.state=k.IDLE,this.p2.state=k.IDLE,this.p1.velocity.set(0,0,0),this.p2.velocity.set(0,0,0),this.broadcastState()}resetPositions(){this.p1.mesh.position.set(-2,dn.GROUND_Y,0),this.p2.mesh.position.set(2,dn.GROUND_Y,0),this.p1.facing=1,this.p2.facing=-1,this.camera.position.set(0,5,12)}triggerSlowMo(t){this.gameSpeed=.1,setTimeout(()=>{this.gameSpeed=1},t)}updateFighters(t,n){this.p1.update(t,this.input,this.p2,n),this.p2.update(t,this.input,this.p1,n)}triggerCinematicSequence(t){if(this.isCinematicMode)return;this.isCinematicMode=!0;const n=t===this.p1?this.p2:this.p1,a=t.mesh.position.clone().add(new F(0,1.7,0)),l=new F(0,0,1.5).applyAxisAngle(new F(0,1,0),t.mesh.rotation.y),c=a.clone().add(l).add(new F(0,0,0));this.camera.position.copy(c),this.camera.lookAt(a),this.createBurst(a,16711680,50),Oe.getInstance().playSFX("hit_heavy"),setTimeout(()=>{const f=n.mesh.position.clone().add(new F(0,1.5,0)),d=f.clone().add(new F(3,2,3));this.camera.position.copy(d),this.camera.lookAt(f),this.createHitParticles(f,!1,!1,!0),this.createBurst(f,16711680,100),Oe.getInstance().playSFX("hit_heavy"),this.triggerCameraShake(1),this.triggerImpactFrame(!0),n.mesh.position.add(new F(0,0,-5))},1200),setTimeout(()=>{this.isCinematicMode=!1,t.state=k.IDLE,n.state=k.GROUNDED,n.velocity.set(0,0,0),n.velocity.y=5},2500)}triggerCameraShake(t){this.trauma=Math.min(this.trauma+t,1)}createDamageNumber(t,n,a,l){const c=document.createElement("canvas");c.width=256,c.height=128;const f=c.getContext("2d");if(!f)return;f.font=a?"Bold 80px Arial":"Bold 60px Arial",f.textAlign="center",f.shadowColor="black",f.shadowBlur=4,f.fillStyle=a?"#FF0000":l?"#0088FF":"#FFFFFF",f.fillText(Math.floor(n).toString(),128,100);const d=new pd(c),m=new lx({map:d,transparent:!0}),p=new n1(m);p.position.copy(t).add(new F(0,1.5,0));const _=a?2.5:1.5;p.scale.set(_,_*.5,1),this.scene.add(p);const g=(Math.random()-.5)*5,x=5+Math.random()*5;this.damageNumbers.push({sprite:p,life:40,velocity:new F(g,x,0)})}updateDamageNumbers(t){for(let n=this.damageNumbers.length-1;n>=0;n--){const a=this.damageNumbers[n];a.life-=t*60,a.sprite.position.addScaledVector(a.velocity,t),a.velocity.y-=15*t,a.velocity.x*=.95,a.life<10&&(a.sprite.material.opacity=a.life/10),a.life<=0&&(this.scene.remove(a.sprite),this.damageNumbers.splice(n,1))}}updateEnvironmentAnim(t){this.particles.forEach(n=>{n.isGear&&n.rotSpeed&&(n.mesh.rotation.z+=n.rotSpeed)})}updateCamera(){this.trauma>0&&(this.trauma-=.05*(16/1e3)*60,this.trauma<0&&(this.trauma=0));const t=this.trauma*this.trauma,n=1,a=n*t*(Math.random()*2-1),l=n*t*(Math.random()*2-1),c=n*t*(Math.random()*2-1);if(this.camera.rotation.z=a*.1,this.cameraShake.set(l,c,0),this.p1.hp<=0||this.p2.hp<=0){const v=this.p1.hp>0?this.p1:this.p2.hp>0?this.p2:null;if(v){const D=v.mesh.position.clone().add(new F(0,1.2,3.5));this.camera.position.lerp(D,.02);const U=v.mesh.position.clone().add(new F(0,1.5,0));this.camera.lookAt(U);return}}const f=new F().addVectors(this.p1.mesh.position,this.p2.mesh.position).multiplyScalar(.5);if(this.introTimer>0){const v=this.introTimer/240,D=12,U=v*Math.PI*.5,L=Math.cos(U)*D,I=Math.sin(U)*D+5,z=new F(f.x+L,4,I);this.camera.position.lerp(z,.05),this.camera.lookAt(f.x,2,0);return}this.cameraShake.multiplyScalar(.85);const d=this.p1.state===k.ATTACK_SPECIAL_3?this.p1:this.p2.state===k.ATTACK_SPECIAL_3?this.p2:null;if(d&&d.stateTimer<50){const v=d.mesh.position.clone().add(new F(0,2,4)),D=d.mesh.position.clone().add(new F(0,1.5,0));this.camera.position.lerp(v,.1),this.camera.lookAt(D),this.camera.position.add(this.cameraShake);return}const m=this.p1.mesh.position.distanceTo(this.p2.mesh.position),p=5.5,_=Math.min(10,Math.max(0,m-1.5)*.6),g=p+_,x=2.5+_*.1;let S=0;this.hitStopFrames>0&&(S=-2.5);const b=new F(f.x,x,g+S),A=S!==0?.2:.08;this.camera.position.lerp(b,A),this.camera.position.add(this.cameraShake);const M=new F(f.x,1.8,f.z);this.camera.lookAt(M)}createDust(){const n=new bn,a=[];for(let f=0;f<200;f++)a.push((Math.random()-.5)*50),a.push(Math.random()*20),a.push((Math.random()-.5)*30);n.setAttribute("position",new un(a,3));const l=new ml({color:16777215,size:.1,transparent:!0,opacity:.4,blending:yn}),c=new lu(n,l);this.scene.add(c),c.userData={isDust:!0},this.particles.push({mesh:c,life:99999,velocity:new F(0,.02,0)})}broadcastState(){let t=null;this.p1.hp<=0?t="Player 2":this.p2.hp<=0?t="Player 1":this.timeLeft===0&&(t=this.p1.hp>this.p2.hp?"Player 1":this.p2.hp>this.p1.hp?"Player 2":"Draw"),this.introTimer>180?this.notificationState="ROUND "+this.currentRound:this.introTimer>60&&this.introTimer<120?this.notificationState="FIGHT":t?this.notificationState="K.O.":this.notificationState=null,this.onStateChange({p1Health:this.p1.hp,p2Health:this.p2.hp,timeLeft:this.timeLeft,gameOver:t!==null,winner:t,isIntro:this.introTimer>0,comboP1:this.comboP1,comboP2:this.comboP2,notification:this.notificationState,p1Wins:this.p1Wins,p2Wins:this.p2Wins,currentRound:this.currentRound})}cleanup(){this.input.cleanup(),window.removeEventListener("resize",this.handleResize),cancelAnimationFrame(this.animationId),clearInterval(this.timerInterval)}createCherryBlossoms(){const n=new Li(.08,.08),a=new on({color:16756166,side:si,transparent:!0,opacity:.8}),l=new au(n,a,1e3);l.instanceMatrix.setUsage(dM);const c=[],f=new cn;for(let d=0;d<1e3;d++){const m=(Math.random()-.5)*80,p=Math.random()*25,_=(Math.random()-.5)*80;f.position.set(m,p,_),f.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),f.updateMatrix(),l.setMatrixAt(d,f.matrix),c.push({velocity:new F((Math.random()-.5)*.05,-.01-Math.random()*.04,(Math.random()-.5)*.05),life:Math.random()*100})}this.scene.add(l),this.cherryBlossoms={mesh:l,data:c}}updateCherryBlossoms(){if(!this.cherryBlossoms)return;const{mesh:t,data:n}=this.cherryBlossoms,a=new cn;for(let l=0;l<n.length;l++){t.getMatrixAt(l,a.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.position.add(n[l].velocity);const c=Math.sin(Date.now()*.001+a.position.y)*.01;a.position.x+=.02+c,a.position.y<0&&(a.position.y=25),a.position.x>40&&(a.position.x=-40),a.rotation.x+=.02,a.rotation.z+=.01,a.rotation.y+=.01,a.updateMatrix(),t.setMatrixAt(l,a.matrix)}t.instanceMatrix.needsUpdate=!0}createGodRays(){const t=new qs(8,60,32,1,!0);t.translate(0,30,0);const n=new on({color:11184895,transparent:!0,opacity:.03,side:si,depthWrite:!1,blending:yn}),a=new ve(t,n);a.position.set(-15,0,-20),a.lookAt(-10,0,0),a.rotation.x=Math.PI/6,this.scene.add(a);const l=new ve(t,n);l.position.set(-5,0,-25),l.scale.set(.7,1.2,.7),l.rotation.z=-.2,this.scene.add(l)}createGroundFog(){const t=this.createCloudTexture(),n=new Li(60,60),a=new on({map:t,transparent:!0,opacity:.15,color:4482730,blending:yn,depthWrite:!1,side:si});for(let l=0;l<8;l++){const c=new ve(n,a);c.rotation.x=-Math.PI/2,c.position.set((Math.random()-.5)*80,.2+l*.1,(Math.random()-.5)*60),c.rotation.z=Math.random()*Math.PI,c.userData={rotSpeed:(Math.random()-.5)*.001},this.scene.add(c),this.particles.push({mesh:c,life:999,velocity:new F,rotSpeed:c.userData.rotSpeed})}}createCloudTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d");if(!n)return null;const a=n.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,255,255,0.8)"),a.addColorStop(.4,"rgba(255,255,255,0.2)"),a.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=a,n.fillRect(0,0,128,128);const l=new pd(t);return l.needsUpdate=!0,l}createFireflies(){const t=new bn,n=300,a=new Float32Array(n*3),l=new Float32Array(n);for(let d=0;d<n;d++)a[d*3]=(Math.random()-.5)*80,a[d*3+1]=Math.random()*15+2,a[d*3+2]=(Math.random()-.5)*60,l[d]=Math.random()*2;t.setAttribute("position",new Fn(a,3)),t.setAttribute("size",new Fn(l,1));const c=new ml({color:16777096,size:.15,transparent:!0,opacity:.8,depthWrite:!1,blending:yn}),f=new lu(t,c);this.scene.add(f),this.particles.push({mesh:f,life:99999,velocity:new F(.01,.01,0)})}}const OR=({gameState:r,p1Name:t="GILGAMESH",p2Name:n="ARCHER",onRematch:a,onMenu:l})=>{const[c,f]=ai.useState(r.p1Health),[d,m]=ai.useState(r.p2Health);ai.useEffect(()=>{const S=setInterval(()=>{f(b=>b>r.p1Health?Math.max(r.p1Health,b-1):r.p1Health),m(b=>b>r.p2Health?Math.max(r.p2Health,b-1):r.p2Health)},16);return()=>clearInterval(S)},[r.p1Health,r.p2Health]);const p=r.p1Health/dn.MAX_HEALTH*100,_=c/dn.MAX_HEALTH*100,g=r.p2Health/dn.MAX_HEALTH*100,x=d/dn.MAX_HEALTH*100;return _t.jsxs("div",{className:"absolute inset-0 pointer-events-none select-none overflow-hidden text-shadow-md",style:{fontFamily:'"Russo One", sans-serif'},children:[r.notification&&_t.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-40 animate-in zoom-in spin-in-3 duration-300",children:_t.jsx("h1",{className:"text-9xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-red-600 tracking-tighter drop-shadow-[0_5px_5px_rgba(0,0,0,1)] scale-150 animate-pulse",children:r.notification})}),r.comboP1>1&&_t.jsx("div",{className:"absolute top-40 left-10 z-30 animate-in slide-in-from-left-10 fade-in duration-200",children:_t.jsxs("div",{className:"flex flex-col items-center transform -rotate-6",children:[_t.jsx("span",{className:"text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-orange-600 filter drop-shadow-[0_4px_0_rgba(0,0,0,1)]",style:{WebkitTextStroke:"2px white"},children:r.comboP1}),_t.jsx("span",{className:"text-3xl font-black italic text-white tracking-widest uppercase drop-shadow-lg scale-x-110",children:"COMBO!"})]})}),r.comboP2>1&&_t.jsx("div",{className:"absolute top-40 right-10 z-30 animate-in slide-in-from-right-10 fade-in duration-200",children:_t.jsxs("div",{className:"flex flex-col items-center transform rotate-6",children:[_t.jsx("span",{className:"text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-purple-600 filter drop-shadow-[0_4px_0_rgba(0,0,0,1)]",style:{WebkitTextStroke:"2px white"},children:r.comboP2}),_t.jsx("span",{className:"text-3xl font-black italic text-white tracking-widest uppercase drop-shadow-lg scale-x-110",children:"COMBO!"})]})}),_t.jsxs("div",{className:"absolute top-0 w-full p-4 flex justify-between items-start",children:[_t.jsxs("div",{className:"w-2/5 max-w-lg relative group",children:[_t.jsxs("div",{className:"flex justify-between items-end mb-1 px-2",children:[_t.jsxs("div",{className:"text-cyan-400 font-bold text-2xl italic tracking-wider drop-shadow-md flex items-center",children:[_t.jsx("span",{className:"w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse shadow-[0_0_10px_cyan]"}),"P1 ",t]}),_t.jsxs("div",{className:"text-white font-mono text-sm opacity-60",children:[Math.ceil(r.p1Health)," / ",dn.MAX_HEALTH]})]}),_t.jsxs("div",{className:"h-6 w-full bg-black/80 backdrop-blur border-2 border-cyan-500/30 transform -skew-x-12 overflow-hidden relative shadow-[0_0_15px_rgba(0,255,255,0.1)]",children:[_t.jsx("div",{className:"absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"}),_t.jsx("div",{className:"absolute h-full bg-white transition-all duration-300 ease-out",style:{width:`${_}%`}}),_t.jsxs("div",{className:`absolute h-full transition-all duration-75 ease-linear ${r.p1Health<20?"bg-red-500 animate-pulse":"bg-gradient-to-r from-cyan-600 via-cyan-400 to-white"}`,style:{width:`${p}%`},children:[_t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"})," "]})]})]}),_t.jsxs("div",{className:"w-24 h-20 bg-black/40 backdrop-blur-md border border-white/20 border-b-4 border-b-yellow-500 flex items-center justify-center relative top-[-5px] shadow-lg z-10 clip-path-polygon group",children:[_t.jsx("div",{className:"absolute right-[110%] top-1/2 -translate-y-1/2 flex gap-2",children:[...Array(2)].map((S,b)=>_t.jsx("div",{className:`w-4 h-4 rounded-full border-2 border-cyan-400 shadow-[0_0_5px_cyan] transition-all ${b<(r.p1Wins||0)?"bg-cyan-400 scale-110":"bg-transparent opacity-50"}`},b))}),_t.jsx("span",{className:`text-5xl ${r.timeLeft<10?"text-red-500 animate-pulse":"text-white"} drop-shadow-md`,children:r.timeLeft}),_t.jsxs("div",{className:"absolute -bottom-6 text-xs text-yellow-500 font-bold tracking-widest uppercase opacity-80",children:["Round ",r.currentRound||1]}),_t.jsx("div",{className:"absolute left-[110%] top-1/2 -translate-y-1/2 flex gap-2 flex-row-reverse",children:[...Array(2)].map((S,b)=>_t.jsx("div",{className:`w-4 h-4 rounded-full border-2 border-pink-500 shadow-[0_0_5px_magenta] transition-all ${b<(r.p2Wins||0)?"bg-pink-500 scale-110":"bg-transparent opacity-50"}`},b))})]}),_t.jsxs("div",{className:"w-2/5 max-w-lg relative group text-right",children:[_t.jsxs("div",{className:"flex justify-between items-end mb-1 px-2 flex-row-reverse",children:[_t.jsxs("div",{className:"text-pink-500 font-bold text-2xl italic tracking-wider drop-shadow-md flex items-center flex-row-reverse",children:[_t.jsx("span",{className:"w-3 h-3 bg-pink-500 rounded-full ml-2 animate-pulse shadow-[0_0_10px_magenta]"}),"P2 ",n]}),_t.jsxs("div",{className:"text-white font-mono text-sm opacity-60",children:[Math.ceil(r.p2Health)," / ",dn.MAX_HEALTH]})]}),_t.jsxs("div",{className:"h-6 w-full bg-black/80 backdrop-blur border-2 border-pink-500/30 transform skew-x-12 overflow-hidden relative shadow-[0_0_15px_rgba(255,0,255,0.1)]",children:[_t.jsx("div",{className:"absolute right-0 h-full bg-white transition-all duration-300 ease-out",style:{width:`${x}%`}}),_t.jsxs("div",{className:`absolute right-0 h-full transition-all duration-75 ease-linear ${r.p2Health<20?"bg-red-500 animate-pulse":"bg-gradient-to-l from-pink-600 via-pink-400 to-white"}`,style:{width:`${g}%`},children:[_t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"})," "]})]})]})]}),_t.jsxs("div",{className:"absolute bottom-4 left-4 text-white text-xs opacity-50 bg-black/50 p-2 rounded",children:[_t.jsxs("p",{className:"font-bold mb-1",children:["P1 ",t," (Red)"]}),_t.jsx("p",{children:"WASD - Move (D/A: Walk, W/S: Sidestep)"}),_t.jsx("p",{children:"U - Left Punch (LP)"}),_t.jsx("p",{children:"I - Right Punch (RP)"}),_t.jsx("p",{children:"J - Left Kick (LK)"}),_t.jsx("p",{children:"K - Right Kick (RK)"}),(t==null?void 0:t.toUpperCase())==="GILGAMESH"?_t.jsx(_t.Fragment,{children:_t.jsx("p",{className:"text-yellow-400",children:"Combos: U,I,U..."})}):_t.jsx(_t.Fragment,{children:_t.jsx("p",{className:"text-gray-400",children:"Combos: U,I,U..."})})]}),_t.jsxs("div",{className:"absolute bottom-4 right-4 text-white text-xs opacity-50 bg-black/50 p-2 rounded text-right",children:[_t.jsx("p",{className:"font-bold mb-1",children:"P2 (Blue)"}),_t.jsx("p",{children:"Arrows - Move"}),_t.jsx("p",{children:"Num 1 - Left Punch (LP)"}),_t.jsx("p",{children:"Num 2 - Right Punch (RP)"}),_t.jsx("p",{children:"Num 4 - Left Kick (LK)"}),_t.jsx("p",{children:"Num 5 - Right Kick (RK)"})]}),r.gameOver&&_t.jsxs("div",{className:"absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-50 animate-in fade-in duration-1000 backdrop-blur-sm",children:[_t.jsxs("div",{className:"relative",children:[_t.jsx("h1",{className:"text-9xl font-black italic text-transparent bg-clip-text bg-gradient-to-tr from-yellow-300 via-orange-500 to-red-600 tracking-tighter scale-110 drop-shadow-[0_0_30px_rgba(255,165,0,0.6)] animate-pulse",children:"VICTORY"}),_t.jsxs("div",{className:"absolute -bottom-4 right-0 text-4xl text-white font-bold tracking-[0.5em] uppercase opacity-80",children:[r.winner," WINS"]})]}),_t.jsxs("div",{className:"mt-16 flex gap-8",children:[_t.jsx("button",{className:"pointer-events-auto px-10 py-4 bg-white text-black font-black text-2xl tracking-widest hover:bg-yellow-400 hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)] clip-path-polygon",onClick:()=>a?a():window.location.reload(),children:"REMATCH"}),_t.jsx("button",{className:"pointer-events-auto px-10 py-4 bg-transparent border-4 border-white text-white font-black text-2xl tracking-widest hover:bg-white hover:text-black hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] clip-path-polygon",onClick:()=>l?l():window.location.reload(),children:"MENU"})]})]}),r.isIntro&&!r.notification&&_t.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center z-50",children:_t.jsxs("div",{className:"animate-pulse flex flex-col items-center",children:[_t.jsx("h1",{className:"text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-red-600 mb-4 italic tracking-tighter scale-150",style:{filter:"drop-shadow(0 0 10px rgba(255,165,0,0.8))"},children:"GET READY"}),_t.jsx("h2",{className:"text-4xl text-white font-bold tracking-[1em] uppercase",children:"For The Next Battle"})]})})]})},IR=({onStart:r})=>{const[t,n]=ai.useState(!0);return ai.useEffect(()=>{const a=setInterval(()=>{n(c=>!c)},800),l=c=>{(c.code==="Space"||c.code==="Enter")&&r()};return window.addEventListener("keydown",l),()=>{clearInterval(a),window.removeEventListener("keydown",l)}},[r]),_t.jsxs("div",{className:"absolute inset-0 bg-black flex flex-col items-center justify-center overflow-hidden z-[100]",children:[_t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#1a0b00] to-black opacity-90 z-0"}),_t.jsxs("div",{className:"absolute inset-0 overflow-hidden z-0 pointer-events-none",children:[_t.jsx("div",{className:"absolute bottom-[-10%] left-[20%] w-2 h-2 bg-yellow-500 rounded-full blur-[2px] animate-[ping_3s_linear_infinite_0s] opacity-0",style:{animationDuration:"4s"}}),_t.jsx("div",{className:"absolute bottom-[-10%] left-[50%] w-3 h-3 bg-red-500 rounded-full blur-[2px] animate-[ping_5s_linear_infinite_1s] opacity-0"}),_t.jsx("div",{className:"absolute bottom-[-10%] left-[80%] w-1 h-1 bg-orange-400 rounded-full blur-sm animate-[bounce_6s_infinite] opacity-50"}),_t.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] z-10 opacity-50"}),_t.jsx("div",{className:"absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[repeating-conic-gradient(from_0deg,_transparent_0deg,_transparent_10deg,_rgba(255,165,0,0.05)_10deg,_rgba(255,165,0,0.05)_20deg)] animate-[spin_20s_linear_infinite] opacity-30"})]}),_t.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[_t.jsxs("div",{className:"mb-12 relative group cursor-default",children:[_t.jsx("h1",{className:"text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-yellow-600 to-yellow-300 scale-y-110 transform",style:{filter:"drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))"},children:"IRON FIST"}),_t.jsx("div",{className:"absolute -inset-1 blur-xl bg-yellow-500/20 -z-10 animate-pulse"}),_t.jsx("div",{className:"absolute -bottom-6 right-0 text-red-500 font-bold tracking-[0.5em] text-sm uppercase",children:"Unlimited Blade Works"})]}),_t.jsx("div",{className:`mt-12 text-2xl font-bold text-white tracking-widest cursor-pointer transition-opacity duration-100 ${t?"opacity-100":"opacity-0"}`,onClick:r,style:{textShadow:"0 0 10px white"},children:"PRESS START"}),_t.jsx("div",{className:"absolute bottom-[-30vh] text-gray-600 text-xs tracking-wider",children:"© 2025 IRON FIST PROJECT"})]})]})},BR=({onConfirm:r})=>{const[t,n]=ai.useState("GILGAMESH");return _t.jsxs("div",{className:"absolute inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden",style:{fontFamily:'"Russo One", sans-serif'},children:[_t.jsx("div",{className:"absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-150"}),_t.jsx("h1",{className:"text-5xl font-black text-white italic tracking-tighter mb-12 z-10",style:{textShadow:"0 0 20px rgba(255,255,255,0.5)"},children:"SELECT YOUR SERVANT"}),_t.jsxs("div",{className:"flex gap-16 z-10",children:[_t.jsxs("div",{className:`relative w-80 h-[500px] border-4 transition-all duration-300 cursor-pointer overflow-hidden group backdrop-blur-sm ${t==="GILGAMESH"?"border-yellow-500 scale-105 shadow-[0_0_50px_rgba(255,215,0,0.6)] bg-yellow-900/20":"border-gray-800 grayscale hover:grayscale-0 hover:border-yellow-700 bg-black/40"}`,onClick:()=>n("GILGAMESH"),children:[_t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-yellow-900/50 to-black"}),_t.jsxs("div",{className:"absolute bottom-32 left-0 right-0 text-center",children:[_t.jsx("h2",{className:"text-4xl font-black text-yellow-500 tracking-widest uppercase mb-2",children:"GILGAMESH"}),_t.jsx("p",{className:"text-yellow-200 text-xs tracking-[0.2em] font-bold",children:"KING OF HEROES"})]}),_t.jsx("div",{className:"absolute bottom-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent",children:_t.jsxs("div",{className:"text-yellow-500/80 text-sm space-y-1 font-mono",children:[_t.jsx("p",{children:"TYPE: ZONER / BURST"}),_t.jsx("p",{children:"NP: GATE OF BABYLON"})]})})]}),_t.jsxs("div",{className:`relative w-80 h-[500px] border-4 transition-all duration-300 cursor-pointer overflow-hidden group backdrop-blur-sm ${t==="ARCHER"?"border-red-600 scale-105 shadow-[0_0_50px_rgba(255,0,0,0.6)] bg-red-900/20":"border-gray-800 grayscale hover:grayscale-0 hover:border-red-900 bg-black/40"}`,onClick:()=>n("ARCHER"),children:[_t.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-red-900/50 to-black"}),_t.jsxs("div",{className:"absolute bottom-32 left-0 right-0 text-center",children:[_t.jsx("h2",{className:"text-4xl font-black text-red-500 tracking-widest uppercase mb-2",children:"EMIYA"}),_t.jsx("p",{className:"text-red-200 text-xs tracking-[0.2em] font-bold",children:"WROUGHT IRON HERO"})]}),_t.jsx("div",{className:"absolute bottom-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent",children:_t.jsxs("div",{className:"text-red-500/80 text-sm space-y-1 font-mono",children:[_t.jsx("p",{children:"TYPE: ALL-ROUNDER"}),_t.jsx("p",{children:"NP: UNLIMITED BLADE WORKS"})]})})]})]}),_t.jsx("button",{className:"mt-16 px-16 py-4 bg-white text-black font-black text-2xl hover:bg-yellow-400 hover:scale-105 transition-all z-10 tracking-widest",onClick:()=>{r(t,t==="GILGAMESH"?"ARCHER":"GILGAMESH")},children:"CONFIRM"})]})},zR=()=>{const r=ai.useRef(null),t=ai.useRef(null),[n,a]=ai.useState({p1Health:dn.MAX_HEALTH,p2Health:dn.MAX_HEALTH,timeLeft:dn.ROUND_TIME,gameOver:!1,winner:null,isIntro:!0,comboP1:0,comboP2:0,notification:null,p1Wins:0,p2Wins:0,currentRound:1}),[l,c]=ai.useState("MENU"),[f,d]=ai.useState("GILGAMESH"),[m,p]=ai.useState("ARCHER");return ai.useEffect(()=>(l==="GAME"&&r.current&&!t.current&&(t.current=new PR(r.current,f,m,_=>{a(g=>g.timeLeft!==_.timeLeft||g.p1Health!==_.p1Health||g.p2Health!==_.p2Health||g.gameOver!==_.gameOver||g.isIntro!==_.isIntro||g.comboP1!==_.comboP1||g.comboP2!==_.comboP2||g.notification!==_.notification?_:g)})),()=>{t.current&&(t.current.cleanup(),t.current=null)}),[l]),_t.jsxs("div",{className:"relative w-screen h-screen bg-black overflow-hidden",children:[l==="MENU"&&_t.jsx(IR,{onStart:()=>c("CHAR_SELECT")}),l==="CHAR_SELECT"&&_t.jsx(BR,{onConfirm:(_,g)=>{d(_),p(g),c("GAME")}}),l==="GAME"&&_t.jsxs(_t.Fragment,{children:[_t.jsx("canvas",{ref:r,className:"block w-full h-full"}),_t.jsx(OR,{gameState:n,p1Name:f,p2Name:m,onRematch:()=>{t.current&&(t.current.cleanup(),t.current=null),a({p1Health:dn.MAX_HEALTH,p2Health:dn.MAX_HEALTH,timeLeft:dn.ROUND_TIME,gameOver:!1,winner:null,isIntro:!0,comboP1:0,comboP2:0,notification:null,p1Wins:0,p2Wins:0,currentRound:1}),c("CHAR_SELECT"),setTimeout(()=>c("GAME"),0)},onMenu:()=>c("MENU")})]})]})},xx=document.getElementById("root");if(!xx)throw new Error("Could not find root element to mount to");const FR=OS.createRoot(xx);FR.render(_t.jsx(RS.StrictMode,{children:_t.jsx(zR,{})}));
