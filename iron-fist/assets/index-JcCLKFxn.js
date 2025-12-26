(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function F_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Jf={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function RS(){if(Rg)return Lo;Rg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var Cg;function CS(){return Cg||(Cg=1,Jf.exports=RS()),Jf.exports}var Ne=CS(),$f={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function wS(){if(wg)return se;wg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function M(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(O,it,gt){this.props=O,this.context=it,this.refs=y,this.updater=gt||R}x.prototype.isReactComponent={},x.prototype.setState=function(O,it){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,it,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function U(){}U.prototype=x.prototype;function D(O,it,gt){this.props=O,this.context=it,this.refs=y,this.updater=gt||R}var L=D.prototype=new U;L.constructor=D,C(L,x.prototype),L.isPureReactComponent=!0;var z=Array.isArray;function I(){}var P={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function T(O,it,gt){var bt=gt.ref;return{$$typeof:o,type:O,key:it,ref:bt!==void 0?bt:null,props:gt}}function w(O,it){return T(O.type,it,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function et(O){var it={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(gt){return it[gt]})}var st=/\/+/g;function dt(O,it){return typeof O=="object"&&O!==null&&O.key!=null?et(""+O.key):it.toString(36)}function ut(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(it){O.status==="pending"&&(O.status="fulfilled",O.value=it)},function(it){O.status==="pending"&&(O.status="rejected",O.reason=it)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function B(O,it,gt,bt,Bt){var nt=typeof O;(nt==="undefined"||nt==="boolean")&&(O=null);var ct=!1;if(O===null)ct=!0;else switch(nt){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(O.$$typeof){case o:case e:ct=!0;break;case _:return ct=O._init,B(ct(O._payload),it,gt,bt,Bt)}}if(ct)return Bt=Bt(O),ct=bt===""?"."+dt(O,0):bt,z(Bt)?(gt="",ct!=null&&(gt=ct.replace(st,"$&/")+"/"),B(Bt,it,gt,"",function(Ht){return Ht})):Bt!=null&&(V(Bt)&&(Bt=w(Bt,gt+(Bt.key==null||O&&O.key===Bt.key?"":(""+Bt.key).replace(st,"$&/")+"/")+ct)),it.push(Bt)),1;ct=0;var wt=bt===""?".":bt+":";if(z(O))for(var kt=0;kt<O.length;kt++)bt=O[kt],nt=wt+dt(bt,kt),ct+=B(bt,it,gt,nt,Bt);else if(kt=M(O),typeof kt=="function")for(O=kt.call(O),kt=0;!(bt=O.next()).done;)bt=bt.value,nt=wt+dt(bt,kt++),ct+=B(bt,it,gt,nt,Bt);else if(nt==="object"){if(typeof O.then=="function")return B(ut(O),it,gt,bt,Bt);throw it=String(O),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ct}function H(O,it,gt){if(O==null)return O;var bt=[],Bt=0;return B(O,bt,"","",function(nt){return it.call(gt,nt,Bt++)}),bt}function at(O){if(O._status===-1){var it=O._result;it=it(),it.then(function(gt){(O._status===0||O._status===-1)&&(O._status=1,O._result=gt)},function(gt){(O._status===0||O._status===-1)&&(O._status=2,O._result=gt)}),O._status===-1&&(O._status=0,O._result=it)}if(O._status===1)return O._result.default;throw O._result}var yt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},xt={map:H,forEach:function(O,it,gt){H(O,function(){it.apply(this,arguments)},gt)},count:function(O){var it=0;return H(O,function(){it++}),it},toArray:function(O){return H(O,function(it){return it})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return se.Activity=v,se.Children=xt,se.Component=x,se.Fragment=i,se.Profiler=l,se.PureComponent=D,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(O,it,gt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var bt=C({},O.props),Bt=O.key;if(it!=null)for(nt in it.key!==void 0&&(Bt=""+it.key),it)!W.call(it,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&it.ref===void 0||(bt[nt]=it[nt]);var nt=arguments.length-2;if(nt===1)bt.children=gt;else if(1<nt){for(var ct=Array(nt),wt=0;wt<nt;wt++)ct[wt]=arguments[wt+2];bt.children=ct}return T(O.type,Bt,bt)},se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},se.createElement=function(O,it,gt){var bt,Bt={},nt=null;if(it!=null)for(bt in it.key!==void 0&&(nt=""+it.key),it)W.call(it,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Bt[bt]=it[bt]);var ct=arguments.length-2;if(ct===1)Bt.children=gt;else if(1<ct){for(var wt=Array(ct),kt=0;kt<ct;kt++)wt[kt]=arguments[kt+2];Bt.children=wt}if(O&&O.defaultProps)for(bt in ct=O.defaultProps,ct)Bt[bt]===void 0&&(Bt[bt]=ct[bt]);return T(O,nt,Bt)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:d,render:O}},se.isValidElement=V,se.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:at}},se.memo=function(O,it){return{$$typeof:p,type:O,compare:it===void 0?null:it}},se.startTransition=function(O){var it=P.T,gt={};P.T=gt;try{var bt=O(),Bt=P.S;Bt!==null&&Bt(gt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(I,yt)}catch(nt){yt(nt)}finally{it!==null&&gt.types!==null&&(it.types=gt.types),P.T=it}},se.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},se.use=function(O){return P.H.use(O)},se.useActionState=function(O,it,gt){return P.H.useActionState(O,it,gt)},se.useCallback=function(O,it){return P.H.useCallback(O,it)},se.useContext=function(O){return P.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,it){return P.H.useDeferredValue(O,it)},se.useEffect=function(O,it){return P.H.useEffect(O,it)},se.useEffectEvent=function(O){return P.H.useEffectEvent(O)},se.useId=function(){return P.H.useId()},se.useImperativeHandle=function(O,it,gt){return P.H.useImperativeHandle(O,it,gt)},se.useInsertionEffect=function(O,it){return P.H.useInsertionEffect(O,it)},se.useLayoutEffect=function(O,it){return P.H.useLayoutEffect(O,it)},se.useMemo=function(O,it){return P.H.useMemo(O,it)},se.useOptimistic=function(O,it){return P.H.useOptimistic(O,it)},se.useReducer=function(O,it,gt){return P.H.useReducer(O,it,gt)},se.useRef=function(O){return P.H.useRef(O)},se.useState=function(O){return P.H.useState(O)},se.useSyncExternalStore=function(O,it,gt){return P.H.useSyncExternalStore(O,it,gt)},se.useTransition=function(){return P.H.useTransition()},se.version="19.2.3",se}var Dg;function Ld(){return Dg||(Dg=1,$f.exports=wS()),$f.exports}var Vo=Ld();const DS=F_(Vo);var th={exports:{}},No={},eh={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function US(){return Ug||(Ug=1,(function(o){function e(B,H){var at=B.length;B.push(H);t:for(;0<at;){var yt=at-1>>>1,xt=B[yt];if(0<l(xt,H))B[yt]=H,B[at]=xt,at=yt;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var H=B[0],at=B.pop();if(at!==H){B[0]=at;t:for(var yt=0,xt=B.length,O=xt>>>1;yt<O;){var it=2*(yt+1)-1,gt=B[it],bt=it+1,Bt=B[bt];if(0>l(gt,at))bt<xt&&0>l(Bt,gt)?(B[yt]=Bt,B[bt]=at,yt=bt):(B[yt]=gt,B[it]=at,yt=it);else if(bt<xt&&0>l(Bt,at))B[yt]=Bt,B[bt]=at,yt=bt;else break t}}return H}function l(B,H){var at=B.sortIndex-H.sortIndex;return at!==0?at:B.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,v=null,S=3,M=!1,R=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function L(B){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=B)s(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function z(B){if(C=!1,L(B),!R)if(i(m)!==null)R=!0,I||(I=!0,et());else{var H=i(p);H!==null&&ut(z,H.startTime-B)}}var I=!1,P=-1,W=5,T=-1;function w(){return y?!0:!(o.unstable_now()-T<W)}function V(){if(y=!1,I){var B=o.unstable_now();T=B;var H=!0;try{t:{R=!1,C&&(C=!1,U(P),P=-1),M=!0;var at=S;try{e:{for(L(B),v=i(m);v!==null&&!(v.expirationTime>B&&w());){var yt=v.callback;if(typeof yt=="function"){v.callback=null,S=v.priorityLevel;var xt=yt(v.expirationTime<=B);if(B=o.unstable_now(),typeof xt=="function"){v.callback=xt,L(B),H=!0;break e}v===i(m)&&s(m),L(B)}else s(m);v=i(m)}if(v!==null)H=!0;else{var O=i(p);O!==null&&ut(z,O.startTime-B),H=!1}}break t}finally{v=null,S=at,M=!1}H=void 0}}finally{H?et():I=!1}}}var et;if(typeof D=="function")et=function(){D(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,dt=st.port2;st.port1.onmessage=V,et=function(){dt.postMessage(null)}}else et=function(){x(V,0)};function ut(B,H){P=x(function(){B(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(B){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var at=S;S=H;try{return B()}finally{S=at}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var at=S;S=B;try{return H()}finally{S=at}},o.unstable_scheduleCallback=function(B,H,at){var yt=o.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?yt+at:yt):at=yt,B){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=at+xt,B={id:_++,callback:H,priorityLevel:B,startTime:at,expirationTime:xt,sortIndex:-1},at>yt?(B.sortIndex=at,e(p,B),i(m)===null&&B===i(p)&&(C?(U(P),P=-1):C=!0,ut(z,at-yt))):(B.sortIndex=xt,e(m,B),R||M||(R=!0,I||(I=!0,et()))),B},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(B){var H=S;return function(){var at=S;S=H;try{return B.apply(this,arguments)}finally{S=at}}}})(nh)),nh}var Lg;function LS(){return Lg||(Lg=1,eh.exports=US()),eh.exports}var ih={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function NS(){if(Ng)return On;Ng=1;var o=Ld();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},On.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,v=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.3",On}var Og;function OS(){if(Og)return ih.exports;Og=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ih.exports=NS(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function PS(){if(Pg)return No;Pg=1;var o=LS(),e=Ld(),i=OS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var g=!1,b=u.child;b;){if(b===a){g=!0,a=u,r=f;break}if(b===r){g=!0,r=u,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,r=u;break}if(b===r){g=!0,r=f,a=u;break}b=b.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case I:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case D:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var ut=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function O(t){return{current:t}}function it(t){0>xt||(t.current=yt[xt],yt[xt]=null,xt--)}function gt(t,n){xt++,yt[xt]=t.current,t.current=n}var bt=O(null),Bt=O(null),nt=O(null),ct=O(null);function wt(t,n){switch(gt(nt,n),gt(Bt,t),gt(bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Z0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Z0(n),t=Q0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it(bt),gt(bt,t)}function kt(){it(bt),it(Bt),it(nt)}function Ht(t){t.memoizedState!==null&&gt(ct,t);var n=bt.current,a=Q0(n,t.type);n!==a&&(gt(Bt,t),gt(bt,a))}function he(t){Bt.current===t&&(it(bt),it(Bt)),ct.current===t&&(it(ct),Co._currentValue=at)}var tn,ge;function de(t){if(tn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);tn=n&&n[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+t+ge}var we=!1;function re(t,n){if(!t||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(ot){tt=ot}t.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var F=g.split(`
`),J=b.split(`
`);for(u=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(r===F.length||u===J.length)for(r=F.length-1,u=J.length-1;1<=r&&0<=u&&F[r]!==J[u];)u--;for(;1<=r&&0<=u;r--,u--)if(F[r]!==J[u]){if(r!==1||u!==1)do if(r--,u--,0>u||F[r]!==J[u]){var ft=`
`+F[r].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=r&&0<=u);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?de(a):""}function en(t,n){switch(t.tag){case 26:case 27:case 5:return de(t.type);case 16:return de("Lazy");case 13:return t.child!==n&&n!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return re(t.type,!1);case 11:return re(t.type.render,!1);case 1:return re(t.type,!0);case 31:return de("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=en(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ze=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,Oe=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,N=o.unstable_requestPaint,E=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,jt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Xt=o.log,ee=o.unstable_setDisableYieldValue,Mt=null,Et=null;function zt(t){if(typeof Xt=="function"&&ee(t),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,t)}catch{}}var Ot=Math.clz32?Math.clz32:X,Ct=Math.log,le=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Ct(t)/le|0)|0}var Ut=256,Tt=262144,Pt=4194304;function St(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _t(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?u=St(r):(g&=b,g!==0?u=St(g):a||(a=b&~t,a!==0&&(u=St(a))))):(b=r&~f,b!==0?u=St(b):g!==0?u=St(g):a||(a=r&~t,a!==0&&(u=St(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function At(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ne(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var t=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Si(t,n,a,r,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,F=t.expirationTimes,J=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Ot(a),mt=1<<ft;b[ft]=0,F[ft]=-1;var tt=J[ft];if(tt!==null)for(J[ft]=null,ft=0;ft<tt.length;ft++){var ot=tt[ft];ot!==null&&(ot.lane&=-536870913)}a&=~mt}r!==0&&$o(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function $o(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Ot(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Fr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Ot(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Ns(t,n){var a=n&-n;return a=(a&42)!==0?1:Hr(a),(a&(t.suspendedLanes|n))!==0?0:a}function Hr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Os(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gr(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Sg(t.type))}function Li(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ri=Math.random().toString(36).slice(2),ln="__reactFiber$"+ri,yn="__reactProps$"+ri,yi="__reactContainer$"+ri,Ps="__reactEvents$"+ri,zs="__reactListeners$"+ri,tl="__reactHandles$"+ri,Vr="__reactResources$"+ri,is="__reactMarker$"+ri;function kr(t){delete t[ln],delete t[yn],delete t[Ps],delete t[zs],delete t[tl]}function Ma(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=ag(t);t!==null;){if(a=t[ln])return a;t=ag(t)}return n}t=a,a=t.parentNode}return null}function Ea(t){if(t=t[ln]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function as(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ta(t){var n=t[Vr];return n||(n=t[Vr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(t){t[is]=!0}var Y=new Set,rt={};function $(t,n){Z(t,n),Z(t+"Capture",n)}function Z(t,n){for(rt[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Lt={};function Gt(t){return Ze.call(Lt,t)?!0:Ze.call(It,t)?!1:Dt.test(t)?Lt[t]=!0:(It[t]=!0,!1)}function Wt(t,n,a){if(Gt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function qe(t){if(!t._valueTracker){var n=De(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function Pe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=De(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function Zt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ue=/[\n"\\]/g;function ae(t){return t.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(t,n,a,r,u,f,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$t(n)):t.value!==""+$t(n)&&(t.value=""+$t(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?En(t,g,$t(n)):a!=null?En(t,g,$t(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+$t(b):t.removeAttribute("name")}function Yi(t,n,a,r,u,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(t);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=b?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),qe(t)}function En(t,n,a){n==="number"&&Zt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function oi(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ie(t,n,a){if(n!=null&&(n=""+$t(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$t(a):""}function Tn(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ut(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$t(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),qe(t)}function mn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var bn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||bn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Is(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&An(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&An(t,f,n[f])}function Mi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ev=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(t){return Tv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var Kc=null;function jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bs=null,Fs=null;function jd(t){var n=Ea(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Mn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[yn]||null;if(!u)throw Error(s(90));Mn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Pe(r)}break t;case"textarea":Ie(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&oi(t,!!a.multiple,n,!1)}}}var Zc=!1;function Zd(t,n,a){if(Zc)return t(n,a);Zc=!0;try{var r=t(n);return r}finally{if(Zc=!1,(Bs!==null||Fs!==null)&&(Vl(),Bs&&(n=Bs,t=Fs,Fs=Bs=null,jd(n),t)))for(n=0;n<t.length;n++)jd(t[n])}}function Xr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[yn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(ji)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{Qc=!1}var ba=null,Jc=null,nl=null;function Qd(){if(nl)return nl;var t,n=Jc,a=n.length,r,u="value"in ba?ba.value:ba.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===u[f-r];r++);return nl=u.slice(t,1<r?1-r:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function Jd(){return!1}function Vn(t){function n(a,r,u,f,g){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:Jd,this.isPropagationStopped=Jd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Vn(ss),qr=v({},ss,{view:0,detail:0}),bv=Vn(qr),$c,tu,Yr,rl=v({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yr&&(Yr&&t.type==="mousemove"?($c=t.screenX-Yr.screenX,tu=t.screenY-Yr.screenY):tu=$c=0,Yr=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),$d=Vn(rl),Av=v({},rl,{dataTransfer:0}),Rv=Vn(Av),Cv=v({},qr,{relatedTarget:0}),eu=Vn(Cv),wv=v({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Dv=Vn(wv),Uv=v({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Lv=Vn(Uv),Nv=v({},ss,{data:0}),tp=Vn(Nv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=zv[t])?!!n[t]:!1}function nu(){return Iv}var Bv=v({},qr,{key:function(t){if(t.key){var n=Ov[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fv=Vn(Bv),Hv=v({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=Vn(Hv),Gv=v({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),Vv=Vn(Gv),kv=v({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=Vn(kv),Wv=v({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qv=Vn(Wv),Yv=v({},ss,{newState:0,oldState:0}),Kv=Vn(Yv),jv=[9,13,27,32],iu=ji&&"CompositionEvent"in window,Kr=null;ji&&"documentMode"in document&&(Kr=document.documentMode);var Zv=ji&&"TextEvent"in window&&!Kr,np=ji&&(!iu||Kr&&8<Kr&&11>=Kr),ip=" ",ap=!1;function sp(t,n){switch(t){case"keyup":return jv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function Qv(t,n){switch(t){case"compositionend":return rp(n);case"keypress":return n.which!==32?null:(ap=!0,ip);case"textInput":return t=n.data,t===ip&&ap?null:t;default:return null}}function Jv(t,n){if(Hs)return t==="compositionend"||!iu&&sp(t,n)?(t=Qd(),nl=Jc=ba=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return np&&n.locale!=="ko"?null:n.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function op(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!$v[t.type]:n==="textarea"}function lp(t,n,a,r){Bs?Fs?Fs.push(r):Fs=[r]:Bs=r,n=jl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var jr=null,Zr=null;function tx(t){X0(t,0)}function ol(t){var n=as(t);if(Pe(n))return t}function cp(t,n){if(t==="change")return n}var up=!1;if(ji){var au;if(ji){var su="oninput"in document;if(!su){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),su=typeof fp.oninput=="function"}au=su}else au=!1;up=au&&(!document.documentMode||9<document.documentMode)}function hp(){jr&&(jr.detachEvent("onpropertychange",dp),Zr=jr=null)}function dp(t){if(t.propertyName==="value"&&ol(Zr)){var n=[];lp(n,Zr,t,jc(t)),Zd(tx,n)}}function ex(t,n,a){t==="focusin"?(hp(),jr=n,Zr=a,jr.attachEvent("onpropertychange",dp)):t==="focusout"&&hp()}function nx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Zr)}function ix(t,n){if(t==="click")return ol(n)}function ax(t,n){if(t==="input"||t==="change")return ol(n)}function sx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:sx;function Qr(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ze.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mp(t,n){var a=pp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=pp(a)}}function gp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?gp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function _p(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Zt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Zt(t.document)}return n}function ru(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var rx=ji&&"documentMode"in document&&11>=document.documentMode,Gs=null,ou=null,Jr=null,lu=!1;function vp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||Gs==null||Gs!==Zt(r)||(r=Gs,"selectionStart"in r&&ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Qr(Jr,r)||(Jr=r,r=jl(ou,"onSelect"),0<r.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Gs)))}function rs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vs={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},cu={},xp={};ji&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function os(t){if(cu[t])return cu[t];if(!Vs[t])return t;var n=Vs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in xp)return cu[t]=n[a];return t}var Sp=os("animationend"),yp=os("animationiteration"),Mp=os("animationstart"),ox=os("transitionrun"),lx=os("transitionstart"),cx=os("transitioncancel"),Ep=os("transitionend"),Tp=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function Ei(t,n){Tp.set(t,n),$(n,[t])}var ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},li=[],ks=0,fu=0;function cl(){for(var t=ks,n=fu=ks=0;n<t;){var a=li[n];li[n++]=null;var r=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,r!==null&&u!==null){var g=r.pending;g===null?u.next=u:(u.next=g.next,g.next=u),r.pending=u}f!==0&&bp(a,u,f)}}function ul(t,n,a,r){li[ks++]=t,li[ks++]=n,li[ks++]=a,li[ks++]=r,fu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function hu(t,n,a,r){return ul(t,n,a,r),fl(t)}function ls(t,n){return ul(t,null,null,n),fl(t)}function bp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ot(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function fl(t){if(50<yo)throw yo=0,Mf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xs={};function ux(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,r){return new ux(t,n,a,r)}function du(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Ap(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function hl(t,n,a,r,u,f){var g=0;if(r=t,typeof t=="function")du(t)&&(g=1);else if(typeof t=="string")g=mS(t,a,bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case T:return t=Qn(31,a,n,u),t.elementType=T,t.lanes=f,t;case C:return cs(a.children,u,f,n);case y:g=8,u|=24;break;case x:return t=Qn(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case z:return t=Qn(13,a,n,u),t.elementType=z,t.lanes=f,t;case I:return t=Qn(19,a,n,u),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:g=10;break t;case U:g=9;break t;case L:g=11;break t;case P:g=14;break t;case W:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Qn(g,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function cs(t,n,a,r){return t=Qn(7,t,r,n),t.lanes=a,t}function pu(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function Rp(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function mu(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Cp=new WeakMap;function ci(t,n){if(typeof t=="object"&&t!==null){var a=Cp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},Cp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Ws=[],qs=0,dl=null,$r=0,ui=[],fi=0,Aa=null,Ni=1,Oi="";function Qi(t,n){Ws[qs++]=$r,Ws[qs++]=dl,dl=t,$r=n}function wp(t,n,a){ui[fi++]=Ni,ui[fi++]=Oi,ui[fi++]=Aa,Aa=t;var r=Ni;t=Oi;var u=32-Ot(r)-1;r&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var g=u-u%5;f=(r&(1<<g)-1).toString(32),r>>=g,u-=g,Ni=1<<32-Ot(n)+u|a<<u|r,Oi=f+t}else Ni=1<<f|a<<u|r,Oi=t}function gu(t){t.return!==null&&(Qi(t,1),wp(t,1,0))}function _u(t){for(;t===dl;)dl=Ws[--qs],Ws[qs]=null,$r=Ws[--qs],Ws[qs]=null;for(;t===Aa;)Aa=ui[--fi],ui[fi]=null,Oi=ui[--fi],ui[fi]=null,Ni=ui[--fi],ui[fi]=null}function Dp(t,n){ui[fi++]=Ni,ui[fi++]=Oi,ui[fi++]=Aa,Ni=n.id,Oi=n.overflow,Aa=t}var Rn=null,Ke=null,Se=!1,Ra=null,hi=!1,vu=Error(s(519));function Ca(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(ci(n,t)),vu}function Up(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[ln]=t,n[yn]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)me(Eo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Yi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Tn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||K0(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Ca(t,!0)}function Lp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Rn=Rn.return}}function Ys(t){if(t!==Rn)return!1;if(!Se)return Lp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||If(t.type,t.memoizedProps)),a=!a),a&&Ke&&Ca(t),Lp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=ig(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=ig(t)}else n===27?(n=Ke,Va(t.type)?(t=Vf,Vf=null,Ke=t):Ke=n):Ke=Rn?pi(t.stateNode.nextSibling):null;return!0}function us(){Ke=Rn=null,Se=!1}function xu(){var t=Ra;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Ra=null),t}function to(t){Ra===null?Ra=[t]:Ra.push(t)}var Su=O(null),fs=null,Ji=null;function wa(t,n,a){gt(Su,n._currentValue),n._currentValue=a}function $i(t){t._currentValue=Su.current,it(Su)}function yu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Mu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var F=0;F<n.length;F++)if(b.context===n[F]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),yu(f.return,a,t),r||(g=null);break t}f=b.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),yu(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Ks(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var b=u.type;Zn(u.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(u===ct.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}u=u.return}t!==null&&Mu(n,t,a,r),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hs(t){fs=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Np(fs,t)}function ml(t,n){return fs===null&&hs(t),Np(t,n)}function Np(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(s(308));Ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ji=Ji.next=n;return a}var fx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},hx=o.unstable_scheduleCallback,dx=o.unstable_NormalPriority,cn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new fx,data:new Map,refCount:0}}function eo(t){t.refCount--,t.refCount===0&&hx(dx,function(){t.controller.abort()})}var no=null,Tu=0,js=0,Zs=null;function px(t,n){if(no===null){var a=no=[];Tu=0,js=Cf(),Zs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Tu++,n.then(Op,Op),n}function Op(){if(--Tu===0&&no!==null){Zs!==null&&(Zs.status="fulfilled");var t=no;no=null,js=0,Zs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function mx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Pp=B.S;B.S=function(t,n){v0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&px(t,n),Pp!==null&&Pp(t,n)};var ds=O(null);function bu(){var t=ds.current;return t!==null?t:Xe.pooledCache}function gl(t,n){n===null?gt(ds,ds.current):gt(ds,n.pool)}function zp(){var t=bu();return t===null?null:{parent:cn._currentValue,pool:t}}var Qs=Error(s(460)),Au=Error(s(474)),_l=Error(s(542)),vl={then:function(){}};function Ip(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Bp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hp(t),t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Hp(t),t}throw ms=n,Qs}}function ps(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ms=a,Qs):a}}var ms=null;function Fp(){if(ms===null)throw Error(s(459));var t=ms;return ms=null,t}function Hp(t){if(t===Qs||t===_l)throw Error(s(483))}var Js=null,io=0;function xl(t){var n=io;return io+=1,Js===null&&(Js=[]),Bp(Js,t,n)}function ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Gp(t){function n(K,k){if(t){var Q=K.deletions;Q===null?(K.deletions=[k],K.flags|=16):Q.push(k)}}function a(K,k){if(!t)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function r(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=Zi(K,k),K.index=0,K.sibling=null,K}function f(K,k,Q){return K.index=Q,t?(Q=K.alternate,Q!==null?(Q=Q.index,Q<k?(K.flags|=67108866,k):Q):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function g(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function b(K,k,Q,pt){return k===null||k.tag!==6?(k=pu(Q,K.mode,pt),k.return=K,k):(k=u(k,Q),k.return=K,k)}function F(K,k,Q,pt){var Qt=Q.type;return Qt===C?ft(K,k,Q.props.children,pt,Q.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===W&&ps(Qt)===k.type)?(k=u(k,Q.props),ao(k,Q),k.return=K,k):(k=hl(Q.type,Q.key,Q.props,null,K.mode,pt),ao(k,Q),k.return=K,k)}function J(K,k,Q,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=mu(Q,K.mode,pt),k.return=K,k):(k=u(k,Q.children||[]),k.return=K,k)}function ft(K,k,Q,pt,Qt){return k===null||k.tag!==7?(k=cs(Q,K.mode,pt,Qt),k.return=K,k):(k=u(k,Q),k.return=K,k)}function mt(K,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=pu(""+k,K.mode,Q),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return Q=hl(k.type,k.key,k.props,null,K.mode,Q),ao(Q,k),Q.return=K,Q;case R:return k=mu(k,K.mode,Q),k.return=K,k;case W:return k=ps(k),mt(K,k,Q)}if(ut(k)||et(k))return k=cs(k,K.mode,Q,null),k.return=K,k;if(typeof k.then=="function")return mt(K,xl(k),Q);if(k.$$typeof===D)return mt(K,ml(K,k),Q);Sl(K,k)}return null}function tt(K,k,Q,pt){var Qt=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qt!==null?null:b(K,k,""+Q,pt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Qt?F(K,k,Q,pt):null;case R:return Q.key===Qt?J(K,k,Q,pt):null;case W:return Q=ps(Q),tt(K,k,Q,pt)}if(ut(Q)||et(Q))return Qt!==null?null:ft(K,k,Q,pt,null);if(typeof Q.then=="function")return tt(K,k,xl(Q),pt);if(Q.$$typeof===D)return tt(K,k,ml(K,Q),pt);Sl(K,Q)}return null}function ot(K,k,Q,pt,Qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(Q)||null,b(k,K,""+pt,Qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return K=K.get(pt.key===null?Q:pt.key)||null,F(k,K,pt,Qt);case R:return K=K.get(pt.key===null?Q:pt.key)||null,J(k,K,pt,Qt);case W:return pt=ps(pt),ot(K,k,Q,pt,Qt)}if(ut(pt)||et(pt))return K=K.get(Q)||null,ft(k,K,pt,Qt,null);if(typeof pt.then=="function")return ot(K,k,Q,xl(pt),Qt);if(pt.$$typeof===D)return ot(K,k,Q,ml(k,pt),Qt);Sl(k,pt)}return null}function Vt(K,k,Q,pt){for(var Qt=null,Ae=null,Kt=k,ce=k=0,ve=null;Kt!==null&&ce<Q.length;ce++){Kt.index>ce?(ve=Kt,Kt=null):ve=Kt.sibling;var Re=tt(K,Kt,Q[ce],pt);if(Re===null){Kt===null&&(Kt=ve);break}t&&Kt&&Re.alternate===null&&n(K,Kt),k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,Kt=ve}if(ce===Q.length)return a(K,Kt),Se&&Qi(K,ce),Qt;if(Kt===null){for(;ce<Q.length;ce++)Kt=mt(K,Q[ce],pt),Kt!==null&&(k=f(Kt,k,ce),Ae===null?Qt=Kt:Ae.sibling=Kt,Ae=Kt);return Se&&Qi(K,ce),Qt}for(Kt=r(Kt);ce<Q.length;ce++)ve=ot(Kt,K,ce,Q[ce],pt),ve!==null&&(t&&ve.alternate!==null&&Kt.delete(ve.key===null?ce:ve.key),k=f(ve,k,ce),Ae===null?Qt=ve:Ae.sibling=ve,Ae=ve);return t&&Kt.forEach(function(Ya){return n(K,Ya)}),Se&&Qi(K,ce),Qt}function te(K,k,Q,pt){if(Q==null)throw Error(s(151));for(var Qt=null,Ae=null,Kt=k,ce=k=0,ve=null,Re=Q.next();Kt!==null&&!Re.done;ce++,Re=Q.next()){Kt.index>ce?(ve=Kt,Kt=null):ve=Kt.sibling;var Ya=tt(K,Kt,Re.value,pt);if(Ya===null){Kt===null&&(Kt=ve);break}t&&Kt&&Ya.alternate===null&&n(K,Kt),k=f(Ya,k,ce),Ae===null?Qt=Ya:Ae.sibling=Ya,Ae=Ya,Kt=ve}if(Re.done)return a(K,Kt),Se&&Qi(K,ce),Qt;if(Kt===null){for(;!Re.done;ce++,Re=Q.next())Re=mt(K,Re.value,pt),Re!==null&&(k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return Se&&Qi(K,ce),Qt}for(Kt=r(Kt);!Re.done;ce++,Re=Q.next())Re=ot(Kt,K,ce,Re.value,pt),Re!==null&&(t&&Re.alternate!==null&&Kt.delete(Re.key===null?ce:Re.key),k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return t&&Kt.forEach(function(AS){return n(K,AS)}),Se&&Qi(K,ce),Qt}function ke(K,k,Q,pt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var Qt=Q.key;k!==null;){if(k.key===Qt){if(Qt=Q.type,Qt===C){if(k.tag===7){a(K,k.sibling),pt=u(k,Q.props.children),pt.return=K,K=pt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===W&&ps(Qt)===k.type){a(K,k.sibling),pt=u(k,Q.props),ao(pt,Q),pt.return=K,K=pt;break t}a(K,k);break}else n(K,k);k=k.sibling}Q.type===C?(pt=cs(Q.props.children,K.mode,pt,Q.key),pt.return=K,K=pt):(pt=hl(Q.type,Q.key,Q.props,null,K.mode,pt),ao(pt,Q),pt.return=K,K=pt)}return g(K);case R:t:{for(Qt=Q.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(K,k.sibling),pt=u(k,Q.children||[]),pt.return=K,K=pt;break t}else{a(K,k);break}else n(K,k);k=k.sibling}pt=mu(Q,K.mode,pt),pt.return=K,K=pt}return g(K);case W:return Q=ps(Q),ke(K,k,Q,pt)}if(ut(Q))return Vt(K,k,Q,pt);if(et(Q)){if(Qt=et(Q),typeof Qt!="function")throw Error(s(150));return Q=Qt.call(Q),te(K,k,Q,pt)}if(typeof Q.then=="function")return ke(K,k,xl(Q),pt);if(Q.$$typeof===D)return ke(K,k,ml(K,Q),pt);Sl(K,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(K,k.sibling),pt=u(k,Q),pt.return=K,K=pt):(a(K,k),pt=pu(Q,K.mode,pt),pt.return=K,K=pt),g(K)):a(K,k)}return function(K,k,Q,pt){try{io=0;var Qt=ke(K,k,Q,pt);return Js=null,Qt}catch(Kt){if(Kt===Qs||Kt===_l)throw Kt;var Ae=Qn(29,Kt,null,K.mode);return Ae.lanes=pt,Ae.return=K,Ae}finally{}}}var gs=Gp(!0),Vp=Gp(!1),Da=!1;function Ru(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=fl(t),bp(t,null,a),n}return ul(t,r,n,a),fl(t)}function so(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Fr(t,a)}}function wu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Du=!1;function ro(){if(Du){var t=Zs;if(t!==null)throw t}}function oo(t,n,a,r){Du=!1;var u=t.updateQueue;Da=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var F=b,J=F.next;F.next=null,g===null?f=J:g.next=J,g=F;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==g&&(b===null?ft.firstBaseUpdate=J:b.next=J,ft.lastBaseUpdate=F))}if(f!==null){var mt=u.baseState;g=0,ft=J=F=null,b=f;do{var tt=b.lane&-536870913,ot=tt!==b.lane;if(ot?(_e&tt)===tt:(r&tt)===tt){tt!==0&&tt===js&&(Du=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Vt=t,te=b;tt=n;var ke=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){mt=Vt.call(ke,mt,tt);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,tt=typeof Vt=="function"?Vt.call(ke,mt,tt):Vt,tt==null)break t;mt=v({},mt,tt);break t;case 2:Da=!0}}tt=b.callback,tt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(J=ft=ot,F=mt):ft=ft.next=ot,g|=tt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(F=mt),u.baseState=F,u.firstBaseUpdate=J,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ia|=g,t.lanes=g,t.memoizedState=mt}}function kp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Xp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)kp(a[t],n)}var $s=O(null),yl=O(0);function Wp(t,n){t=la,gt(yl,t),gt($s,n),la=t|n.baseLanes}function Uu(){gt(yl,la),gt($s,$s.current)}function Lu(){la=yl.current,it($s),it(yl)}var Jn=O(null),di=null;function Na(t){var n=t.alternate;gt(rn,rn.current&1),gt(Jn,t),di===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(di=t)}function Nu(t){gt(rn,rn.current),gt(Jn,t),di===null&&(di=t)}function qp(t){t.tag===22?(gt(rn,rn.current),gt(Jn,t),di===null&&(di=t)):Oa()}function Oa(){gt(rn,rn.current),gt(Jn,Jn.current)}function $n(t){it(Jn),di===t&&(di=null),it(rn)}var rn=O(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Hf(a)||Gf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,oe=null,Ge=null,un=null,El=!1,tr=!1,_s=!1,Tl=0,lo=0,er=null,gx=0;function nn(){throw Error(s(321))}function Ou(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function Pu(t,n,a,r,u,f){return ta=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?wm:Zu,_s=!1,f=a(r,u),_s=!1,tr&&(f=Kp(n,a,r,u)),Yp(t),f}function Yp(t){B.H=fo;var n=Ge!==null&&Ge.next!==null;if(ta=0,un=Ge=oe=null,El=!1,lo=0,er=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&pl(t)&&(fn=!0))}function Kp(t,n,a,r){oe=t;var u=0;do{if(tr&&(er=null),lo=0,tr=!1,25<=u)throw Error(s(301));if(u+=1,un=Ge=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Dm,f=n(a,r)}while(tr);return f}function _x(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(oe.flags|=1024),n}function zu(){var t=Tl!==0;return Tl=0,t}function Iu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Bu(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}ta=0,un=Ge=oe=null,tr=!1,lo=Tl=0,er=null}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?oe.memoizedState=un=t:un=un.next=t,un}function on(){if(Ge===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var n=un===null?oe.memoizedState:un.next;if(n!==null)un=n,Ge=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?oe.memoizedState=un=t:un=un.next=t}return un}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,er===null&&(er=[]),t=Bp(er,t,n),n=oe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?wm:Zu),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===D)return Cn(t)}throw Error(s(438,String(t)))}function Fu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=w;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=on();return Hu(n,Ge,t)}function Hu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var b=g=null,F=null,J=n,ft=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(_e&mt)===mt:(ta&mt)===mt){var tt=J.revertLane;if(tt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===js&&(ft=!0);else if((ta&tt)===tt){J=J.next,tt===js&&(ft=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(b=F=mt,g=f):F=F.next=mt,oe.lanes|=tt,Ia|=tt;mt=J.action,_s&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else tt={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(b=F=tt,g=f):F=F.next=tt,oe.lanes|=mt,Ia|=mt;J=J.next}while(J!==null&&J!==n);if(F===null?g=f:F.next=b,!Zn(f,t.memoizedState)&&(fn=!0,ft&&(a=Zs,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=F,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Gu(t){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Zn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function jp(t,n,a){var r=oe,u=on(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Zn((Ge||u).memoizedState,a);if(g&&(u.memoizedState=a,fn=!0),u=u.queue,Xu(Jp.bind(null,r,u,t),[t]),u.getSnapshot!==n||g||un!==null&&un.memoizedState.tag&1){if(r.flags|=2048,nr(9,{destroy:void 0},Qp.bind(null,r,u,a,n),null),Xe===null)throw Error(s(349));f||(ta&127)!==0||Zp(r,n,a)}return a}function Zp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=bl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Qp(t,n,a,r){n.value=a,n.getSnapshot=r,$p(n)&&tm(t)}function Jp(t,n,a){return a(function(){$p(n)&&tm(t)})}function $p(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function tm(t){var n=ls(t,2);n!==null&&Yn(n,t,2)}function Vu(t){var n=Fn();if(typeof t=="function"){var a=t;if(t=a(),_s){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function em(t,n,a,r){return t.baseState=a,Hu(t,Ge,typeof r=="function"?r:ea)}function vx(t,n,a,r,u){if(Dl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};B.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,nm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function nm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=B.T,g={};B.T=g;try{var b=a(u,r),F=B.S;F!==null&&F(g,b),im(t,n,b)}catch(J){ku(t,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),B.T=f}}else try{f=a(u,r),im(t,n,f)}catch(J){ku(t,n,J)}}function im(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){am(t,n,r)},function(r){return ku(t,n,r)}):am(t,n,a)}function am(t,n,a){n.status="fulfilled",n.value=a,sm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,nm(t,a)))}function ku(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,sm(n),n=n.next;while(n!==r)}t.action=null}function sm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function rm(t,n){return n}function om(t,n){if(Se){var a=Xe.formState;if(a!==null){t:{var r=oe;if(Se){if(Ke){e:{for(var u=Ke,f=hi;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=pi(u.nextSibling),r=u.data==="F!";break t}}Ca(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rm,lastRenderedState:n},a.queue=r,a=Am.bind(null,oe,r),r.dispatch=a,r=Vu(!1),f=ju.bind(null,oe,!1,r.queue),r=Fn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=vx.bind(null,oe,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function lm(t){var n=on();return cm(n,Ge,t)}function cm(t,n,a){if(n=Hu(t,n,rm)[0],t=Rl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=co(n)}catch(g){throw g===Qs?_l:g}else r=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,nr(9,{destroy:void 0},xx.bind(null,u,a),null)),[r,f,t]}function xx(t,n){t.action=n}function um(t){var n=on(),a=Ge;if(a!==null)return cm(n,a,t);on(),n=n.memoizedState,a=on();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function nr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=bl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function fm(){return on().memoizedState}function Cl(t,n,a,r){var u=Fn();oe.flags|=t,u.memoizedState=nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function wl(t,n,a,r){var u=on();r=r===void 0?null:r;var f=u.memoizedState.inst;Ge!==null&&r!==null&&Ou(r,Ge.memoizedState.deps)?u.memoizedState=nr(n,f,a,r):(oe.flags|=t,u.memoizedState=nr(1|n,f,a,r))}function hm(t,n){Cl(8390656,8,t,n)}function Xu(t,n){wl(2048,8,t,n)}function Sx(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=bl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function dm(t){var n=on().memoizedState;return Sx({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function pm(t,n){return wl(4,2,t,n)}function mm(t,n){return wl(4,4,t,n)}function gm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function _m(t,n,a){a=a!=null?a.concat([t]):null,wl(4,4,gm.bind(null,n,t),a)}function Wu(){}function vm(t,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ou(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function xm(t,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ou(n,r[1]))return r[0];if(r=t(),_s){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[r,n],r}function qu(t,n,a){return a===void 0||(ta&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=S0(),oe.lanes|=t,Ia|=t,a)}function Sm(t,n,a,r){return Zn(a,n)?a:$s.current!==null?(t=qu(t,a,r),Zn(t,n)||(fn=!0),t):(ta&42)===0||(ta&1073741824)!==0&&(_e&261930)===0?(fn=!0,t.memoizedState=a):(t=S0(),oe.lanes|=t,Ia|=t,n)}function ym(t,n,a,r,u){var f=H.p;H.p=f!==0&&8>f?f:8;var g=B.T,b={};B.T=b,ju(t,!1,n,a);try{var F=u(),J=B.S;if(J!==null&&J(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=mx(F,r);uo(t,n,ft,ni(t))}else uo(t,n,r,ni(t))}catch(mt){uo(t,n,{then:function(){},status:"rejected",reason:mt},ni())}finally{H.p=f,g!==null&&b.types!==null&&(g.types=b.types),B.T=g}}function yx(){}function Yu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Mm(t).queue;ym(t,u,n,at,a===null?yx:function(){return Em(t),a(r)})}function Mm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:at},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Em(t){var n=Mm(t);n.next===null&&(n=t.alternate.memoizedState),uo(t,n.next.queue,{},ni())}function Ku(){return Cn(Co)}function Tm(){return on().memoizedState}function bm(){return on().memoizedState}function Mx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();t=Ua(a);var r=La(n,t,a);r!==null&&(Yn(r,n,a),so(r,n,a)),n={cache:Eu()},t.payload=n;return}n=n.return}}function Ex(t,n,a){var r=ni();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?Rm(n,a):(a=hu(t,n,a,r),a!==null&&(Yn(a,t,r),Cm(a,n,r)))}function Am(t,n,a){var r=ni();uo(t,n,a,r)}function uo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))Rm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(u.hasEagerState=!0,u.eagerState=b,Zn(b,g))return ul(t,n,u,0),Xe===null&&cl(),!1}catch{}finally{}if(a=hu(t,n,u,r),a!==null)return Yn(a,t,r),Cm(a,n,r),!0}return!1}function ju(t,n,a,r){if(r={lane:2,revertLane:Cf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(s(479))}else n=hu(t,a,r,2),n!==null&&Yn(n,t,2)}function Dl(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function Rm(t,n){tr=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Cm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Fr(t,a)}}var fo={readContext:Cn,use:Al,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};fo.useEffectEvent=nn;var wm={readContext:Cn,use:Al,useCallback:function(t,n){return Fn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:hm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,gm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Fn();n=n===void 0?null:n;var r=t();if(_s){zt(!0);try{t()}finally{zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Fn();if(a!==void 0){var u=a(n);if(_s){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Ex.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=Fn();return t={current:t},n.memoizedState=t},useState:function(t){t=Vu(t);var n=t.queue,a=Am.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(t,n){var a=Fn();return qu(a,t,n)},useTransition:function(){var t=Vu(!1);return t=ym.bind(null,oe,t.queue,!0,!1),Fn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,u=Fn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(_e&127)!==0||Zp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,hm(Jp.bind(null,r,f,t),[t]),r.flags|=2048,nr(9,{destroy:void 0},Qp.bind(null,r,f,a,n),null),a},useId:function(){var t=Fn(),n=Xe.identifierPrefix;if(Se){var a=Oi,r=Ni;a=(r&~(1<<32-Ot(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=gx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ku,useFormState:om,useActionState:om,useOptimistic:function(t){var n=Fn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Fu,useCacheRefresh:function(){return Fn().memoizedState=Mx.bind(null,oe)},useEffectEvent:function(t){var n=Fn(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:Cn,use:Al,useCallback:vm,useContext:Cn,useEffect:Xu,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Rl,useRef:fm,useState:function(){return Rl(ea)},useDebugValue:Wu,useDeferredValue:function(t,n){var a=on();return Sm(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Rl(ea)[0],n=on().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:jp,useId:Tm,useHostTransitionStatus:Ku,useFormState:lm,useActionState:lm,useOptimistic:function(t,n){var a=on();return em(a,Ge,t,n)},useMemoCache:Fu,useCacheRefresh:bm};Zu.useEffectEvent=dm;var Dm={readContext:Cn,use:Al,useCallback:vm,useContext:Cn,useEffect:Xu,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Gu,useRef:fm,useState:function(){return Gu(ea)},useDebugValue:Wu,useDeferredValue:function(t,n){var a=on();return Ge===null?qu(a,t,n):Sm(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Gu(ea)[0],n=on().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:jp,useId:Tm,useHostTransitionStatus:Ku,useFormState:um,useActionState:um,useOptimistic:function(t,n){var a=on();return Ge!==null?em(a,Ge,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:bm};Dm.useEffectEvent=dm;function Qu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ju={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ni(),u=Ua(r);u.payload=n,a!=null&&(u.callback=a),n=La(t,u,r),n!==null&&(Yn(n,t,r),so(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ni(),u=Ua(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(t,u,r),n!==null&&(Yn(n,t,r),so(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ni(),r=Ua(a);r.tag=2,n!=null&&(r.callback=n),n=La(t,r,a),n!==null&&(Yn(n,t,a),so(n,t,a))}};function Um(t,n,a,r,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,r)||!Qr(u,f):!0}function Lm(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Ju.enqueueReplaceState(n,n.state,null)}function vs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Nm(t){ll(t)}function Om(t){console.error(t)}function Pm(t){ll(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function zm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $u(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function Im(t){return t=Ua(t),t.tag=3,t}function Bm(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){zm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){zm(n,a,r),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Tx(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?kl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),bf(t,r,u)),!1;case 22:return a.flags|=65536,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),bf(t,r,u)),!1}throw Error(s(435,a.tag))}return bf(t,r,u),kl(),!1}if(Se)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==vu&&(t=Error(s(422),{cause:r}),to(ci(t,a)))):(r!==vu&&(n=Error(s(423),{cause:r}),to(ci(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=ci(r,a),u=$u(t.stateNode,r,u),wu(t,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:r});if(f=ci(f,a),So===null?So=[f]:So.push(f),an!==4&&(an=2),n===null)return!0;r=ci(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=$u(a.stateNode,r,t),wu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Im(u),Bm(u,t,a,r),wu(a,u),!1}a=a.return}while(a!==null);return!1}var tf=Error(s(461)),fn=!1;function wn(t,n,a,r){n.child=t===null?Vp(n,null,a,r):gs(n,t.child,a,r)}function Fm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var b in r)b!=="ref"&&(g[b]=r[b])}else g=r;return hs(n),r=Pu(t,n,a,g,f,u),b=zu(),t!==null&&!fn?(Iu(t,n,u),na(t,n,u)):(Se&&b&&gu(n),n.flags|=1,wn(t,n,r,u),n.child)}function Hm(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Gm(t,n,f,r,u)):(t=hl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!cf(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(g,r)&&t.ref===n.ref)return na(t,n,u)}return n.flags|=1,t=Zi(f,r),t.ref=n.ref,t.return=n,n.child=t}function Gm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(Qr(f,r)&&t.ref===n.ref)if(fn=!1,n.pendingProps=r=f,cf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,na(t,n,u)}return ef(t,n,a,r,u)}function Vm(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return km(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,f!==null?f.cachePool:null),f!==null?Wp(n,f):Uu(),qp(n);else return r=n.lanes=536870912,km(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(gl(n,f.cachePool),Wp(n,f),Oa(),n.memoizedState=null):(t!==null&&gl(n,null),Uu(),Oa());return wn(t,n,u,a),n.child}function ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function km(t,n,a,r,u){var f=bu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gl(n,null),Uu(),qp(n),t!==null&&Ks(t,n,r,!0),n.childLanes=u,null}function Ll(t,n){return n=Ol({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Xm(t,n,a){return gs(n,t.child,null,a),t=Ll(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function bx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=Ll(n,r),n.lanes=536870912,ho(null,t);if(Nu(n),(t=Ke)?(t=ng(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Rp(t),a.return=n,n.child=a,Rn=n,Ke=null)):t=null,t===null)throw Ca(n);return n.lanes=536870912,null}return Ll(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Nu(n),u)if(n.flags&256)n.flags&=-257,n=Xm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Ks(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(r=Xe,r!==null&&(g=Ns(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ls(t,g),Yn(r,t,g),tf;kl(),n=Xm(t,n,a)}else t=f.treeContext,Ke=pi(g.nextSibling),Rn=n,Se=!0,Ra=null,hi=!1,t!==null&&Dp(n,t),n=Ll(n,r),n.flags|=4096;return n}return t=Zi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Nl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ef(t,n,a,r,u){return hs(n),a=Pu(t,n,a,r,void 0,u),r=zu(),t!==null&&!fn?(Iu(t,n,u),na(t,n,u)):(Se&&r&&gu(n),n.flags|=1,wn(t,n,a,u),n.child)}function Wm(t,n,a,r,u,f){return hs(n),n.updateQueue=null,a=Kp(n,r,a,u),Yp(t),r=zu(),t!==null&&!fn?(Iu(t,n,f),na(t,n,f)):(Se&&r&&gu(n),n.flags|=1,wn(t,n,a,f),n.child)}function qm(t,n,a,r,u){if(hs(n),n.stateNode===null){var f=Xs,g=a.contextType;typeof g=="object"&&g!==null&&(f=Cn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ru(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Cn(g):Xs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Qu(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Ju.enqueueReplaceState(f,f.state,null),oo(n,r,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,F=vs(a,b);f.props=F;var J=f.context,ft=a.contextType;g=Xs,typeof ft=="object"&&ft!==null&&(g=Cn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==g)&&Lm(n,f,r,g),Da=!1;var tt=n.memoizedState;f.state=tt,oo(n,r,f,u),ro(),J=n.memoizedState,b||tt!==J||Da?(typeof mt=="function"&&(Qu(n,a,mt,r),J=n.memoizedState),(F=Da||Um(n,a,F,r,tt,J,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=g,r=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Cu(t,n),g=n.memoizedProps,ft=vs(a,g),f.props=ft,mt=n.pendingProps,tt=f.context,J=a.contextType,F=Xs,typeof J=="object"&&J!==null&&(F=Cn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||tt!==F)&&Lm(n,f,r,F),Da=!1,tt=n.memoizedState,f.state=tt,oo(n,r,f,u),ro();var ot=n.memoizedState;g!==mt||tt!==ot||Da||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof b=="function"&&(Qu(n,a,b,r),ot=n.memoizedState),(ft=Da||Um(n,a,ft,r,tt,ot,F)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=F,r=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Nl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=gs(n,t.child,null,u),n.child=gs(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=na(t,n,u),t}function Ym(t,n,a,r){return us(),n.flags|=256,wn(t,n,a,r),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(t){return{baseLanes:t,cachePool:zp()}}function sf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function Km(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(u?Na(n):Oa(),(t=Ke)?(t=ng(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Rp(t),a.return=n,n.child=a,Rn=n,Ke=null)):t=null,t===null)throw Ca(n);return Gf(t)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,u?(Oa(),u=n.mode,b=Ol({mode:"hidden",children:b},u),r=cs(r,u,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=af(a),r.childLanes=sf(t,g,a),n.memoizedState=nf,ho(null,r)):(Na(n),rf(n,b))}var F=t.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=of(t,n,a)):n.memoizedState!==null?(Oa(),n.child=t.child,n.flags|=128,n=null):(Oa(),b=r.fallback,u=n.mode,r=Ol({mode:"visible",children:r.children},u),b=cs(b,u,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,gs(n,t.child,null,a),r=n.child,r.memoizedState=af(a),r.childLanes=sf(t,g,a),n.memoizedState=nf,n=ho(null,r));else if(Na(n),Gf(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var J=g.dgst;g=J,r=Error(s(419)),r.stack="",r.digest=g,to({value:r,source:null,stack:null}),n=of(t,n,a)}else if(fn||Ks(t,n,a,!1),g=(a&t.childLanes)!==0,fn||g){if(g=Xe,g!==null&&(r=Ns(g,a),r!==0&&r!==F.retryLane))throw F.retryLane=r,ls(t,r),Yn(g,t,r),tf;Hf(b)||kl(),n=of(t,n,a)}else Hf(b)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Ke=pi(b.nextSibling),Rn=n,Se=!0,Ra=null,hi=!1,t!==null&&Dp(n,t),n=rf(n,r.children),n.flags|=4096);return n}return u?(Oa(),b=r.fallback,u=n.mode,F=t.child,J=F.sibling,r=Zi(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,J!==null?b=Zi(J,b):(b=cs(b,u,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,ho(null,r),r=n.child,b=t.child.memoizedState,b===null?b=af(a):(u=b.cachePool,u!==null?(F=cn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=zp(),b={baseLanes:b.baseLanes|a,cachePool:u}),r.memoizedState=b,r.childLanes=sf(t,g,a),n.memoizedState=nf,ho(t.child,r)):(Na(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function rf(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function of(t,n,a){return gs(n,t.child,null,a),t=rf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jm(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),yu(t.return,n,a)}function lf(t,n,a,r,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Zm(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var g=rn.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,gt(rn,g),wn(t,n,r,a),r=Se?$r:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jm(t,a,n);else if(t.tag===19)jm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),lf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ml(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}lf(n,!0,a,null,f,r);break;case"together":lf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function na(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ks(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function Ax(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),wa(n,cn,t.memoizedState.cache),us();break;case 27:case 5:Ht(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(t,n,a):(Na(n),t=na(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Zm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(rn,rn.current),r)break;return null;case 22:return n.lanes=0,Vm(t,n,a,n.pendingProps);case 24:wa(n,cn,t.memoizedState.cache)}return na(t,n,a)}function Qm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!cf(t,a)&&(n.flags&128)===0)return fn=!1,Ax(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,Se&&(n.flags&1048576)!==0&&wp(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ps(n.elementType),n.type=t,typeof t=="function")du(t)?(r=vs(t,r),n.tag=1,n=qm(null,n,t,r,a)):(n.tag=0,n=ef(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=Fm(null,n,t,r,a);break t}else if(u===P){n.tag=14,n=Hm(null,n,t,r,a);break t}}throw n=dt(t)||t,Error(s(306,n,""))}}return n;case 0:return ef(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=vs(r,n.pendingProps),qm(t,n,r,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Cu(t,n),oo(n,r,null,a);var g=n.memoizedState;if(r=g.cache,wa(n,cn,r),r!==f.cache&&Mu(n,[cn],a,!0),ro(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ym(t,n,r,a);break t}else if(r!==u){u=ci(Error(s(424)),n),to(u),n=Ym(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=pi(t.firstChild),Rn=n,Se=!0,Ra=null,hi=!0,a=Vp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(us(),r===u){n=na(t,n,a);break t}wn(t,n,r,a)}n=n.child}return n;case 26:return Nl(t,n),t===null?(a=lg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=Zl(nt.current).createElement(a),r[ln]=n,r[yn]=t,Dn(r,a,t),A(r),n.stateNode=r):n.memoizedState=lg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ht(n),t===null&&Se&&(r=n.stateNode=sg(n.type,n.pendingProps,nt.current),Rn=n,hi=!0,u=Ke,Va(n.type)?(Vf=u,Ke=pi(r.firstChild)):Ke=u),wn(t,n,n.pendingProps.children,a),Nl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((u=r=Ke)&&(r=nS(r,n.type,n.pendingProps,hi),r!==null?(n.stateNode=r,Rn=n,Ke=pi(r.firstChild),hi=!1,u=!0):u=!1),u||Ca(n)),Ht(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,If(u,f)?r=null:g!==null&&If(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Pu(t,n,_x,null,null,a),Co._currentValue=u),Nl(t,n),wn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=Ke)&&(a=iS(a,n.pendingProps,hi),a!==null?(n.stateNode=a,Rn=n,Ke=null,t=!0):t=!1),t||Ca(n)),null;case 13:return Km(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=gs(n,null,r,a):wn(t,n,r,a),n.child;case 11:return Fm(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,wa(n,n.type,r.value),wn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,hs(n),u=Cn(u),r=r(u),n.flags|=1,wn(t,n,r,a),n.child;case 14:return Hm(t,n,n.type,n.pendingProps,a);case 15:return Gm(t,n,n.type,n.pendingProps,a);case 19:return Zm(t,n,a);case 31:return bx(t,n,a);case 22:return Vm(t,n,a,n.pendingProps);case 24:return hs(n),r=Cn(cn),t===null?(u=bu(),u===null&&(u=Xe,f=Eu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Ru(n),wa(n,cn,u)):((t.lanes&a)!==0&&(Cu(t,n),oo(n,null,null,a),ro()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,cn,r)):(r=f.cache,wa(n,cn,r),r!==u.cache&&Mu(n,[cn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(t){t.flags|=4}function uf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(T0())t.flags|=8192;else throw ms=vl,Au}else t.flags&=-16777217}function Jm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!dg(n))if(T0())t.flags|=8192;else throw ms=vl,Au}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ze():536870912,t.lanes|=n,rr|=n)}function po(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Rx(t,n,a){var r=n.pendingProps;switch(_u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),$i(cn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ys(n)?ia(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xu())),je(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ia(n),f!==null?(je(n),Jm(n,f)):(je(n),uf(n,u,null,r,a))):f?f!==t.memoizedState?(ia(n),je(n),Jm(n,f)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ia(n),je(n),uf(n,u,t,r,a)),null;case 27:if(he(n),a=nt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}t=bt.current,Ys(n)?Up(n):(t=sg(u,r,a),n.stateNode=t,ia(n))}return je(n),null;case 5:if(he(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(f=bt.current,Ys(n))Up(n);else{var g=Zl(nt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(u,{is:r.is}):g.createElement(u)}}f[ln]=n,f[yn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Dn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ia(n)}}return je(n),uf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ia(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=nt.current,Ys(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||K0(t.nodeValue,a)),t||Ca(n,!0)}else t=Zl(t).createTextNode(r),t[ln]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ys(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ys(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=xu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),je(n),null);case 4:return kt(),t===null&&Lf(n.stateNode.containerInfo),je(n),null;case 10:return $i(n.type),je(n),null;case 19:if(it(rn),r=n.memoizedState,r===null)return je(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)po(r,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ml(t),f!==null){for(n.flags|=128,po(r,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Ap(a,t),a=a.sibling;return gt(rn,rn.current&1|2),Se&&Qi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&E()>Hl&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304)}else{if(!u)if(t=Ml(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),po(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return je(n),null}else 2*E()-r.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=E(),t.sibling=null,a=rn.current,gt(rn,u?a&1|2:a&1),Se&&Qi(n,r.treeForkCount),t):(je(n),null);case 22:case 23:return $n(n),Lu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&it(ds),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(cn),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Cx(t,n){switch(_u(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return $i(cn),kt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));us()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(rn),null;case 4:return kt(),null;case 10:return $i(n.type),null;case 22:case 23:return $n(n),Lu(),t!==null&&it(ds),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return $i(cn),null;case 25:return null;default:return null}}function $m(t,n){switch(_u(n),n.tag){case 3:$i(cn),kt();break;case 26:case 27:case 5:he(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:it(rn);break;case 10:$i(n.type);break;case 22:case 23:$n(n),Lu(),t!==null&&it(ds);break;case 24:$i(cn)}}function mo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==u)}}catch(b){Fe(n,n.return,b)}}function Pa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var g=r.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,u=n;var F=a,J=b;try{J()}catch(ft){Fe(u,F,ft)}}}r=r.next}while(r!==f)}}catch(ft){Fe(n,n.return,ft)}}function t0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Xp(n,a)}catch(r){Fe(t,t.return,r)}}}function e0(t,n,a){a.props=vs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(t,n,r)}}function go(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){Fe(t,n,u)}}function Pi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Fe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(t,n,u)}else a.current=null}function n0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Fe(t,t.return,u)}}function ff(t,n,a){try{var r=t.stateNode;Zx(r,t.type,a,n),r[yn]=n}catch(u){Fe(t,t.return,u)}}function i0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function hf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||i0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function df(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(r!==4&&(r===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(df(t,n,a),t=t.sibling;t!==null;)df(t,n,a),t=t.sibling}function zl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(zl(t,n,a),t=t.sibling;t!==null;)zl(t,n,a),t=t.sibling}function a0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,r,a),n[ln]=t,n[yn]=a}catch(f){Fe(t,t.return,f)}}var aa=!1,hn=!1,pf=!1,s0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function wx(t,n){if(t=t.containerInfo,Pf=ic,t=_p(t),ru(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,b=-1,F=-1,J=0,ft=0,mt=t,tt=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(b=g+u),mt!==f||r!==0&&mt.nodeType!==3||(F=g+r),mt.nodeType===3&&(g+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===t)break e;if(tt===a&&++J===u&&(b=g),tt===f&&++ft===r&&(F=g),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:t,selectionRange:a},ic=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=vs(a.type,u);t=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){Fe(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ff(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ff(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function r0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),r&4&&mo(5,a);break;case 1:if(ra(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Fe(a,a.return,g)}else{var u=vs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(a,a.return,g)}}r&64&&t0(a),r&512&&go(a,a.return);break;case 3:if(ra(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xp(t,n)}catch(g){Fe(a,a.return,g)}}break;case 27:n===null&&r&4&&a0(a);case 26:case 5:ra(t,a),n===null&&r&4&&n0(a),r&512&&go(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),r&4&&c0(t,a);break;case 13:ra(t,a),r&4&&u0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Bx.bind(null,a),aS(t,a))));break;case 22:if(r=a.memoizedState!==null||aa,!r){n=n!==null&&n.memoizedState!==null||hn,u=aa;var f=hn;aa=r,(hn=n)&&!f?oa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),aa=u,hn=f}break;case 30:break;default:ra(t,a)}}function o0(t){var n=t.alternate;n!==null&&(t.alternate=null,o0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&kr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,kn=!1;function sa(t,n,a){for(a=a.child;a!==null;)l0(t,n,a),a=a.sibling}function l0(t,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:hn||Pi(a,n),sa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Pi(a,n);var r=Je,u=kn;Va(a.type)&&(Je=a.stateNode,kn=!1),sa(t,n,a),bo(a.stateNode),Je=r,kn=u;break;case 5:hn||Pi(a,n);case 6:if(r=Je,u=kn,Je=null,sa(t,n,a),Je=r,kn=u,Je!==null)if(kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Je!==null&&(kn?(t=Je,tg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),pr(t)):tg(Je,a.stateNode));break;case 4:r=Je,u=kn,Je=a.stateNode.containerInfo,kn=!0,sa(t,n,a),Je=r,kn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),hn||Pa(4,a,n),sa(t,n,a);break;case 1:hn||(Pi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&e0(a,n,r)),sa(t,n,a);break;case 21:sa(t,n,a);break;case 22:hn=(r=hn)||a.memoizedState!==null,sa(t,n,a),hn=r;break;default:sa(t,n,a)}}function c0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{pr(t)}catch(a){Fe(n,n.return,a)}}}function u0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{pr(t)}catch(a){Fe(n,n.return,a)}}function Dx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new s0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new s0),n;default:throw Error(s(435,t.tag))}}function Il(t,n){var a=Dx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Fx.bind(null,t,r);r.then(u,u)}})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,g=n,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(Va(b.type)){Je=b.stateNode,kn=!1;break t}break;case 5:Je=b.stateNode,kn=!1;break t;case 3:case 4:Je=b.stateNode.containerInfo,kn=!0;break t}b=b.return}if(Je===null)throw Error(s(160));l0(f,g,u),Je=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)f0(n,t),n=n.sibling}var Ti=null;function f0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),r&4&&(Pa(3,t,t.return),mo(3,t),Pa(5,t,t.return));break;case 1:Xn(n,t),Wn(t),r&512&&(hn||a===null||Pi(a,a.return)),r&64&&aa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ti;if(Xn(n,t),Wn(t),r&512&&(hn||a===null||Pi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[is]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,r,a),f[ln]=t,A(f),r=f;break t;case"link":var g=fg("link","href",u).get(r+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;case"meta":if(g=fg("meta","content",u).get(r+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}f=u.createElement(r),Dn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=t,A(f),r=f}t.stateNode=r}else hg(u,t.type,t.stateNode);else t.stateNode=ug(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?hg(u,t.type,t.stateNode):ug(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&ff(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),r&512&&(hn||a===null||Pi(a,a.return)),a!==null&&r&4&&ff(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),r&512&&(hn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{mn(u,"")}catch(Vt){Fe(t,t.return,Vt)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,ff(t,u,a!==null?a.memoizedProps:u)),r&1024&&(pf=!0);break;case 6:if(Xn(n,t),Wn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Vt){Fe(t,t.return,Vt)}}break;case 3:if($l=null,u=Ti,Ti=Ql(n.containerInfo),Xn(n,t),Ti=u,Wn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(Vt){Fe(t,t.return,Vt)}pf&&(pf=!1,h0(t));break;case 4:r=Ti,Ti=Ql(t.stateNode.containerInfo),Xn(n,t),Wn(t),Ti=r;break;case 12:Xn(n,t),Wn(t);break;case 31:Xn(n,t),Wn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=E()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,J=aa,ft=hn;if(aa=J||u,hn=ft||F,Xn(n,t),hn=ft,aa=J,Wn(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||aa||hn||xs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=F.stateNode;var mt=F.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Vt){Fe(F,F.return,Vt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Vt){Fe(F,F.return,Vt)}}}else if(n.tag===18){if(a===null){F=n;try{var ot=F.stateNode;u?eg(ot,!0):eg(F.stateNode,!1)}catch(Vt){Fe(F,F.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Il(t,a))));break;case 19:Xn(n,t),Wn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Il(t,r)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(i0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=hf(t);zl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(mn(g,""),a.flags&=-33);var b=hf(t);zl(t,b,g);break;case 3:case 4:var F=a.stateNode.containerInfo,J=hf(t);df(t,J,F);break;default:throw Error(s(161))}}catch(ft){Fe(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function h0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;h0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)r0(t,n.alternate,n),n=n.sibling}function xs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),xs(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&e0(n,n.return,a),xs(n);break;case 27:bo(n.stateNode);case 26:case 5:Pi(n,n.return),xs(n);break;case 22:n.memoizedState===null&&xs(n);break;case 30:xs(n);break;default:xs(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),mo(4,f);break;case 1:if(oa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Fe(r,r.return,J)}if(r=f,u=r.updateQueue,u!==null){var b=r.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)kp(F[u],b)}catch(J){Fe(r,r.return,J)}}a&&g&64&&t0(f),go(f,f.return);break;case 27:a0(f);case 26:case 5:oa(u,f,a),a&&r===null&&g&4&&n0(f),go(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&g&4&&c0(u,f);break;case 13:oa(u,f,a),a&&g&4&&u0(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),go(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function mf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&eo(a))}function gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t))}function bi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)d0(t,n,a,r),n=n.sibling}function d0(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,r),u&2048&&mo(9,n);break;case 1:bi(t,n,a,r);break;case 3:bi(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&eo(t)));break;case 12:if(u&2048){bi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Fe(n,n.return,F)}}else bi(t,n,a,r);break;case 31:bi(t,n,a,r);break;case 13:bi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?bi(t,n,a,r):_o(t,n):f._visibility&2?bi(t,n,a,r):(f._visibility|=2,ir(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&mf(g,n);break;case 24:bi(t,n,a,r),u&2048&&gf(n.alternate,n);break;default:bi(t,n,a,r)}}function ir(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,b=a,F=r,J=g.flags;switch(g.tag){case 0:case 11:case 15:ir(f,g,b,F,u),mo(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?ir(f,g,b,F,u):_o(f,g):(ft._visibility|=2,ir(f,g,b,F,u)),u&&J&2048&&mf(g.alternate,g);break;case 24:ir(f,g,b,F,u),u&&J&2048&&gf(g.alternate,g);break;default:ir(f,g,b,F,u)}n=n.sibling}}function _o(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:_o(a,r),u&2048&&mf(r.alternate,r);break;case 24:_o(a,r),u&2048&&gf(r.alternate,r);break;default:_o(a,r)}n=n.sibling}}var vo=8192;function ar(t,n,a){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)p0(t,n,a),t=t.sibling}function p0(t,n,a){switch(t.tag){case 26:ar(t,n,a),t.flags&vo&&t.memoizedState!==null&&gS(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:ar(t,n,a);break;case 3:case 4:var r=Ti;Ti=Ql(t.stateNode.containerInfo),ar(t,n,a),Ti=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=vo,vo=16777216,ar(t,n,a),vo=r):ar(t,n,a));break;default:ar(t,n,a)}}function m0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,_0(r,t)}m0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)g0(t),t=t.sibling}function g0(t){switch(t.tag){case 0:case 11:case 15:xo(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:xo(t);break;case 12:xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Bl(t)):xo(t);break;default:xo(t)}}function Bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,_0(r,t)}m0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}t=t.sibling}}function _0(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:eo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=t;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(o0(r),r===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var Ux={getCacheForType:function(t){var n=Cn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(cn).controller.signal}},Lx=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,pe=null,_e=0,Be=0,ti=null,za=!1,sr=!1,_f=!1,la=0,an=0,Ia=0,Ss=0,vf=0,ei=0,rr=0,So=null,qn=null,xf=!1,Fl=0,v0=0,Hl=1/0,Gl=null,Ba=null,gn=0,Fa=null,or=null,ca=0,Sf=0,yf=null,x0=null,yo=0,Mf=null;function ni(){return(Le&2)!==0&&_e!==0?_e&-_e:B.T!==null?Cf():Gr()}function S0(){if(ei===0)if((_e&536870912)===0||Se){var t=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ei=t}else ei=536870912;return t=Jn.current,t!==null&&(t.flags|=32),ei}function Yn(t,n,a){(t===Xe&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(lr(t,0),Ha(t,_e,ei,!1)),Nn(t,a),((Le&2)===0||t!==Xe)&&(t===Xe&&((Le&2)===0&&(Ss|=a),an===4&&Ha(t,_e,ei,!1)),zi(t))}function y0(t,n,a){if((Le&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||At(t,n),u=r?Px(t,n):Tf(t,n,!0),f=r;do{if(u===0){sr&&!r&&Ha(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Nx(a)){u=Tf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var b=t;u=So;var F=b.current.memoizedState.isDehydrated;if(F&&(lr(b,g).flags|=256),g=Tf(b,g,!1),g!==2){if(_f&&!F){b.errorRecoveryDisabledLanes|=f,Ss|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){lr(t,0),Ha(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ha(r,n,ei,!za);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Fl+300-E(),10<u)){if(Ha(r,n,ei,!za),_t(r,0,!0)!==0)break t;ca=n,r.timeoutHandle=J0(M0.bind(null,r,a,qn,Gl,xf,n,ei,Ss,rr,za,f,"Throttled",-0,0),u);break t}M0(r,a,qn,Gl,xf,n,ei,Ss,rr,za,f,null,-0,0)}}break}while(!0);zi(t)}function M0(t,n,a,r,u,f,g,b,F,J,ft,mt,tt,ot){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},p0(n,f,mt);var Vt=(f&62914560)===f?Fl-E():(f&4194048)===f?v0-E():0;if(Vt=_S(mt,Vt),Vt!==null){ca=f,t.cancelPendingCommit=Vt(D0.bind(null,t,n,f,a,r,u,g,b,F,ft,mt,null,tt,ot)),Ha(t,f,g,!J);return}}D0(t,n,f,a,r,u,g,b,F)}function Nx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(t,n,a,r){n&=~vf,n&=~Ss,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),g=1<<f;r[f]=-1,u&=~g}a!==0&&$o(t,a,n)}function Vl(){return(Le&6)===0?(Mo(0),!1):!0}function Ef(){if(pe!==null){if(Be===0)var t=pe.return;else t=pe,Ji=fs=null,Bu(t),Js=null,io=0,t=pe;for(;t!==null;)$m(t.alternate,t),t=t.return;pe=null}}function lr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$x(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ca=0,Ef(),Xe=t,pe=a=Zi(t.current,null),_e=n,Be=0,ti=null,za=!1,sr=At(t,n),_f=!1,rr=ei=vf=Ss=Ia=an=0,qn=So=null,xf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Ot(r),f=1<<u;n|=t[u],r&=~f}return la=n,cl(),a}function E0(t,n){oe=null,B.H=fo,n===Qs||n===_l?(n=Fp(),Be=3):n===Au?(n=Fp(),Be=4):Be=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,pe===null&&(an=1,Ul(t,ci(n,t.current)))}function T0(){var t=Jn.current;return t===null?!0:(_e&4194048)===_e?di===null:(_e&62914560)===_e||(_e&536870912)!==0?t===di:!1}function b0(){var t=B.H;return B.H=fo,t===null?fo:t}function A0(){var t=B.A;return B.A=Ux,t}function kl(){an=4,za||(_e&4194048)!==_e&&Jn.current!==null||(sr=!0),(Ia&134217727)===0&&(Ss&134217727)===0||Xe===null||Ha(Xe,_e,ei,!1)}function Tf(t,n,a){var r=Le;Le|=2;var u=b0(),f=A0();(Xe!==t||_e!==n)&&(Gl=null,lr(t,n)),n=!1;var g=an;t:do try{if(Be!==0&&pe!==null){var b=pe,F=ti;switch(Be){case 8:Ef(),g=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var J=Be;if(Be=0,ti=null,cr(t,b,F,J),a&&sr){g=0;break t}break;default:J=Be,Be=0,ti=null,cr(t,b,F,J)}}Ox(),g=an;break}catch(ft){E0(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Ji=fs=null,Le=r,B.H=u,B.A=f,pe===null&&(Xe=null,_e=0,cl()),g}function Ox(){for(;pe!==null;)R0(pe)}function Px(t,n){var a=Le;Le|=2;var r=b0(),u=A0();Xe!==t||_e!==n?(Gl=null,Hl=E()+500,lr(t,n)):sr=At(t,n);t:do try{if(Be!==0&&pe!==null){n=pe;var f=ti;e:switch(Be){case 1:Be=0,ti=null,cr(t,n,f,1);break;case 2:case 9:if(Ip(f)){Be=0,ti=null,C0(n);break}n=function(){Be!==2&&Be!==9||Xe!==t||(Be=7),zi(t)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Ip(f)?(Be=0,ti=null,C0(n)):(Be=0,ti=null,cr(t,n,f,7));break;case 5:var g=null;switch(pe.tag){case 26:g=pe.memoizedState;case 5:case 27:var b=pe;if(g?dg(g):b.stateNode.complete){Be=0,ti=null;var F=b.sibling;if(F!==null)pe=F;else{var J=b.return;J!==null?(pe=J,Xl(J)):pe=null}break e}}Be=0,ti=null,cr(t,n,f,5);break;case 6:Be=0,ti=null,cr(t,n,f,6);break;case 8:Ef(),an=6;break t;default:throw Error(s(462))}}zx();break}catch(ft){E0(t,ft)}while(!0);return Ji=fs=null,B.H=r,B.A=u,Le=a,pe!==null?0:(Xe=null,_e=0,cl(),an)}function zx(){for(;pe!==null&&!Yt();)R0(pe)}function R0(t){var n=Qm(t.alternate,t,la);t.memoizedProps=t.pendingProps,n===null?Xl(t):pe=n}function C0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Wm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Wm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Bu(n);default:$m(a,n),n=pe=Ap(n,la),n=Qm(a,n,la)}t.memoizedProps=t.pendingProps,n===null?Xl(t):pe=n}function cr(t,n,a,r){Ji=fs=null,Bu(n),Js=null,io=0;var u=n.return;try{if(Tx(t,u,n,a,_e)){an=1,Ul(t,ci(a,t.current)),pe=null;return}}catch(f){if(u!==null)throw pe=u,f;an=1,Ul(t,ci(a,t.current)),pe=null;return}n.flags&32768?(Se||r===1?t=!0:sr||(_e&536870912)!==0?t=!1:(za=t=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),w0(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){w0(n,za);return}t=n.return;var a=Rx(n.alternate,n,la);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);an===0&&(an=5)}function w0(t,n){do{var a=Cx(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);an=6,pe=null}function D0(t,n,a,r,u,f,g,b,F){t.cancelPendingCommit=null;do Wl();while(gn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=fu,Si(t,a,f,g,b,F),t===Xe&&(pe=Xe=null,_e=0),or=n,Fa=t,ca=a,Sf=f,yf=u,x0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Hx(lt,function(){return P0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,u=H.p,H.p=2,g=Le,Le|=4;try{wx(t,n,a)}finally{Le=g,H.p=u,B.T=r}}gn=1,U0(),L0(),N0()}}function U0(){if(gn===1){gn=0;var t=Fa,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var r=H.p;H.p=2;var u=Le;Le|=4;try{f0(n,t);var f=zf,g=_p(t.containerInfo),b=f.focusedElem,F=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&gp(b.ownerDocument.documentElement,b)){if(F!==null&&ru(b)){var J=F.start,ft=F.end;if(ft===void 0&&(ft=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ft,b.value.length);else{var mt=b.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Vt=b.textContent.length,te=Math.min(F.start,Vt),ke=F.end===void 0?te:Math.min(F.end,Vt);!ot.extend&&te>ke&&(g=ke,ke=te,te=g);var K=mp(b,te),k=mp(b,ke);if(K&&k&&(ot.rangeCount!==1||ot.anchorNode!==K.node||ot.anchorOffset!==K.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var Q=mt.createRange();Q.setStart(K.node,K.offset),ot.removeAllRanges(),te>ke?(ot.addRange(Q),ot.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),ot.addRange(Q))}}}}for(mt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var pt=mt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}ic=!!Pf,zf=Pf=null}finally{Le=u,H.p=r,B.T=a}}t.current=n,gn=2}}function L0(){if(gn===2){gn=0;var t=Fa,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var r=H.p;H.p=2;var u=Le;Le|=4;try{r0(t,n.alternate,n)}finally{Le=u,H.p=r,B.T=a}}gn=3}}function N0(){if(gn===4||gn===3){gn=0,N();var t=Fa,n=or,a=ca,r=x0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,or=Fa=null,O0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ba=null),Os(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,u=H.p,H.p=2,B.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var b=r[g];f(b.value,{componentStack:b.stack})}}finally{B.T=n,H.p=u}}(ca&3)!==0&&Wl(),zi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Mf?yo++:(yo=0,Mf=t):yo=0,Mo(0)}}function O0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,eo(n)))}function Wl(){return U0(),L0(),N0(),P0()}function P0(){if(gn!==5)return!1;var t=Fa,n=Sf;Sf=0;var a=Os(ca),r=B.T,u=H.p;try{H.p=32>a?32:a,B.T=null,a=yf,yf=null;var f=Fa,g=ca;if(gn=0,or=Fa=null,ca=0,(Le&6)!==0)throw Error(s(331));var b=Le;if(Le|=4,g0(f.current),d0(f,f.current,g,a),Le=b,Mo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{H.p=u,B.T=r,O0(t,n)}}function z0(t,n,a){n=ci(a,n),n=$u(t.stateNode,n,2),t=La(t,n,2),t!==null&&(Nn(t,2),zi(t))}function Fe(t,n,a){if(t.tag===3)z0(t,t,a);else for(;n!==null;){if(n.tag===3){z0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ba===null||!Ba.has(r))){t=ci(a,t),a=Im(2),r=La(n,a,2),r!==null&&(Bm(a,r,n,t),Nn(r,2),zi(r));break}}n=n.return}}function bf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Lx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(_f=!0,u.add(a),t=Ix.bind(null,t,n,a),n.then(t,t))}function Ix(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(_e&a)===a&&(an===4||an===3&&(_e&62914560)===_e&&300>E()-Fl?(Le&2)===0&&lr(t,0):vf|=a,rr===_e&&(rr=0)),zi(t)}function I0(t,n){n===0&&(n=ze()),t=ls(t,n),t!==null&&(Nn(t,n),zi(t))}function Bx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),I0(t,a)}function Fx(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),I0(t,a)}function Hx(t,n){return Me(t,n)}var ql=null,ur=null,Af=!1,Yl=!1,Rf=!1,Ga=0;function zi(t){t!==ur&&t.next===null&&(ur===null?ql=ur=t:ur=ur.next=t),Yl=!0,Af||(Af=!0,Vx())}function Mo(t,n){if(!Rf&&Yl){Rf=!0;do for(var a=!1,r=ql;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var g=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Ot(42|t)+1)-1,f&=u&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,G0(r,f))}else f=_e,f=_t(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||At(r,f)||(a=!0,G0(r,f));r=r.next}while(a);Rf=!1}}function Gx(){B0()}function B0(){Yl=Af=!1;var t=0;Ga!==0&&Jx()&&(t=Ga);for(var n=E(),a=null,r=ql;r!==null;){var u=r.next,f=F0(r,n);f===0?(r.next=null,a===null?ql=u:a.next=u,u===null&&(ur=a)):(a=r,(t!==0||(f&3)!==0)&&(Yl=!0)),r=u}gn!==0&&gn!==5||Mo(t),Ga!==0&&(Ga=0)}function F0(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Ot(f),b=1<<g,F=u[g];F===-1?((b&a)===0||(b&r)!==0)&&(u[g]=ne(b,n)):F<=n&&(t.expiredLanes|=b),f&=~b}if(n=Xe,a=_e,a=_t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||At(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Oe(r),Os(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Rt;break;default:a=lt}return r=H0.bind(null,t),a=Me(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Oe(r),t.callbackPriority=2,t.callbackNode=null,2}function H0(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var r=_e;return r=_t(t,t===Xe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(y0(t,r,n),F0(t,E()),t.callbackNode!=null&&t.callbackNode===a?H0.bind(null,t):null)}function G0(t,n){if(Wl())return null;y0(t,n,!0)}function Vx(){tS(function(){(Le&6)!==0?Me(ht,Gx):B0()})}function Cf(){if(Ga===0){var t=js;t===0&&(t=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Ga=t}return Ga}function V0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:el(""+t)}function k0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function kx(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=V0((u[yn]||null).action),g=r.submitter;g&&(n=(n=g[yn]||null)?V0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new sl("action","action",null,r,u);t.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ga!==0){var F=g?k0(u,g):new FormData(u);Yu(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(b.preventDefault(),F=g?k0(u,g):new FormData(u),Yu(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var wf=0;wf<uu.length;wf++){var Df=uu[wf],Xx=Df.toLowerCase(),Wx=Df[0].toUpperCase()+Df.slice(1);Ei(Xx,"on"+Wx)}Ei(Sp,"onAnimationEnd"),Ei(yp,"onAnimationIteration"),Ei(Mp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(ox,"onTransitionRun"),Ei(lx,"onTransitionStart"),Ei(cx,"onTransitionCancel"),Ei(Ep,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function X0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var b=r[g],F=b.instance,J=b.currentTarget;if(b=b.listener,F!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=J;try{f(u)}catch(ft){ll(ft)}u.currentTarget=null,f=F}else for(g=0;g<r.length;g++){if(b=r[g],F=b.instance,J=b.currentTarget,b=b.listener,F!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=J;try{f(u)}catch(ft){ll(ft)}u.currentTarget=null,f=F}}}}function me(t,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var r=t+"__bubble";a.has(r)||(W0(n,t,2,!1),a.add(r))}function Uf(t,n,a){var r=0;n&&(r|=4),W0(a,t,r,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Lf(t){if(!t[Kl]){t[Kl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(qx.has(a)||Uf(a,!1,t),Uf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Uf("selectionchange",!1,n))}}function W0(t,n,a,r){switch(Sg(n)){case 2:var u=SS;break;case 8:u=yS;break;default:u=Yf}a=u.bind(null,n,a,t),u=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Nf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var b=r.stateNode.containerInfo;if(b===u)break;if(g===4)for(g=r.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;b!==null;){if(g=Ma(b),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){r=f=g;continue t}b=b.parentNode}}r=r.return}Zd(function(){var J=f,ft=jc(a),mt=[];t:{var tt=Tp.get(t);if(tt!==void 0){var ot=sl,Vt=t;switch(t){case"keypress":if(il(a)===0)break t;case"keydown":case"keyup":ot=Fv;break;case"focusin":Vt="focus",ot=eu;break;case"focusout":Vt="blur",ot=eu;break;case"beforeblur":case"afterblur":ot=eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Vv;break;case Sp:case yp:case Mp:ot=Dv;break;case Ep:ot=Xv;break;case"scroll":case"scrollend":ot=bv;break;case"wheel":ot=qv;break;case"copy":case"cut":case"paste":ot=Lv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=ep;break;case"toggle":case"beforetoggle":ot=Kv}var te=(n&4)!==0,ke=!te&&(t==="scroll"||t==="scrollend"),K=te?tt!==null?tt+"Capture":null:tt;te=[];for(var k=J,Q;k!==null;){var pt=k;if(Q=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||Q===null||K===null||(pt=Xr(k,K),pt!=null&&te.push(To(k,pt,Q))),ke)break;k=k.return}0<te.length&&(tt=new ot(tt,Vt,null,a,ft),mt.push({event:tt,listeners:te}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",tt&&a!==Kc&&(Vt=a.relatedTarget||a.fromElement)&&(Ma(Vt)||Vt[yi]))break t;if((ot||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=J,Vt=Vt?Ma(Vt):null,Vt!==null&&(ke=c(Vt),te=Vt.tag,Vt!==ke||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ot=null,Vt=J),ot!==Vt)){if(te=$d,pt="onMouseLeave",K="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(te=ep,pt="onPointerLeave",K="onPointerEnter",k="pointer"),ke=ot==null?tt:as(ot),Q=Vt==null?tt:as(Vt),tt=new te(pt,k+"leave",ot,a,ft),tt.target=ke,tt.relatedTarget=Q,pt=null,Ma(ft)===J&&(te=new te(K,k+"enter",Vt,a,ft),te.target=Q,te.relatedTarget=ke,pt=te),ke=pt,ot&&Vt)e:{for(te=Yx,K=ot,k=Vt,Q=0,pt=K;pt;pt=te(pt))Q++;pt=0;for(var Qt=k;Qt;Qt=te(Qt))pt++;for(;0<Q-pt;)K=te(K),Q--;for(;0<pt-Q;)k=te(k),pt--;for(;Q--;){if(K===k||k!==null&&K===k.alternate){te=K;break e}K=te(K),k=te(k)}te=null}else te=null;ot!==null&&q0(mt,tt,ot,te,!1),Vt!==null&&ke!==null&&q0(mt,ke,Vt,te,!0)}}t:{if(tt=J?as(J):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var Ae=cp;else if(op(tt))if(up)Ae=ax;else{Ae=nx;var Kt=ex}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&Mi(J.elementType)&&(Ae=cp):Ae=ix;if(Ae&&(Ae=Ae(t,J))){lp(mt,Ae,a,ft);break t}Kt&&Kt(t,tt,J),t==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&En(tt,"number",tt.value)}switch(Kt=J?as(J):window,t){case"focusin":(op(Kt)||Kt.contentEditable==="true")&&(Gs=Kt,ou=J,Jr=null);break;case"focusout":Jr=ou=Gs=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,vp(mt,a,ft);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":vp(mt,a,ft)}var ce;if(iu)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Hs?sp(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(np&&a.locale!=="ko"&&(Hs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Hs&&(ce=Qd()):(ba=ft,Jc="value"in ba?ba.value:ba.textContent,Hs=!0)),Kt=jl(J,ve),0<Kt.length&&(ve=new tp(ve,t,null,a,ft),mt.push({event:ve,listeners:Kt}),ce?ve.data=ce:(ce=rp(a),ce!==null&&(ve.data=ce)))),(ce=Zv?Qv(t,a):Jv(t,a))&&(ve=jl(J,"onBeforeInput"),0<ve.length&&(Kt=new tp("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Kt,listeners:ve}),Kt.data=ce)),kx(mt,t,J,a,ft)}X0(mt,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function jl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xr(t,a),u!=null&&r.unshift(To(t,u,f)),u=Xr(t,n),u!=null&&r.push(To(t,u,f))),t.tag===3)return r;t=t.return}return[]}function Yx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function q0(t,n,a,r,u){for(var f=n._reactName,g=[];a!==null&&a!==r;){var b=a,F=b.alternate,J=b.stateNode;if(b=b.tag,F!==null&&F===r)break;b!==5&&b!==26&&b!==27||J===null||(F=J,u?(J=Xr(a,f),J!=null&&g.unshift(To(a,J,F))):u||(J=Xr(a,f),J!=null&&g.push(To(a,J,F)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Kx=/\r\n?/g,jx=/\u0000|\uFFFD/g;function Y0(t){return(typeof t=="string"?t:""+t).replace(Kx,`
`).replace(jx,"")}function K0(t,n){return n=Y0(n),Y0(t)===n}function Ve(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||mn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&mn(t,""+r);break;case"className":Jt(t,"class",r);break;case"tabIndex":Jt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(t,a,r);break;case"style":Is(t,r,f);break;case"data":if(n!=="object"){Jt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=el(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",u.name,u,null),Ve(t,n,"formEncType",u.formEncType,u,null),Ve(t,n,"formMethod",u.formMethod,u,null),Ve(t,n,"formTarget",u.formTarget,u,null)):(Ve(t,n,"encType",u.encType,u,null),Ve(t,n,"method",u.method,u,null),Ve(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=el(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Ki);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=el(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":me("beforetoggle",t),me("toggle",t),Wt(t,"popover",r);break;case"xlinkActuate":qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Wt(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ev.get(a)||a,Wt(t,a,r))}}function Of(t,n,a,r,u,f){switch(a){case"style":Is(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?mn(t,r):(typeof r=="number"||typeof r=="bigint")&&mn(t,""+r);break;case"onScroll":r!=null&&me("scroll",t);break;case"onScrollEnd":r!=null&&me("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Wt(t,a,r)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,f,g,a,null)}}u&&Ve(t,n,"srcSet",a.srcSet,a,null),r&&Ve(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var b=f=g=u=null,F=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":u=ft;break;case"type":g=ft;break;case"checked":F=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Ve(t,n,r,ft,a,null)}}Yi(t,f,b,F,J,g,u,!1);return;case"select":me("invalid",t),r=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":r=b;default:Ve(t,n,u,b,a,null)}n=f,a=g,t.multiple=!!r,n!=null?oi(t,!!r,n,!1):a!=null&&oi(t,!!r,a,!0);return;case"textarea":me("invalid",t),f=u=r=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":r=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ve(t,n,g,b,a,null)}Tn(t,r,u,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(r=a[F],r!=null))switch(F){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ve(t,n,F,r,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(r=0;r<Eo.length;r++)me(Eo[r],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,J,r,a,null)}return;default:if(Mi(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Of(t,n,ft,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Ve(t,n,b,r,a,null))}function Zx(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,b=null,F=null,J=null,ft=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=mt;default:r.hasOwnProperty(ot)||Ve(t,n,ot,null,r,mt)}}for(var tt in r){var ot=r[tt];if(mt=a[tt],r.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":f=ot;break;case"name":u=ot;break;case"checked":J=ot;break;case"defaultChecked":ft=ot;break;case"value":g=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&Ve(t,n,tt,ot,r,mt)}}Mn(t,g,b,F,J,ft,f,u);return;case"select":ot=g=b=tt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ot=F;default:r.hasOwnProperty(f)||Ve(t,n,f,null,r,F)}for(u in r)if(f=r[u],F=a[u],r.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":tt=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==F&&Ve(t,n,u,f,r,F)}n=b,a=g,r=ot,tt!=null?oi(t,!!a,tt,!1):!!r!=!!a&&(n!=null?oi(t,!!a,n,!0):oi(t,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ve(t,n,b,null,r,u)}for(g in r)if(u=r[g],f=a[g],r.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":tt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(t,n,g,u,r,f)}Ie(t,tt,ot);return;case"option":for(var Vt in a)if(tt=a[Vt],a.hasOwnProperty(Vt)&&tt!=null&&!r.hasOwnProperty(Vt))switch(Vt){case"selected":t.selected=!1;break;default:Ve(t,n,Vt,null,r,tt)}for(F in r)if(tt=r[F],ot=a[F],r.hasOwnProperty(F)&&tt!==ot&&(tt!=null||ot!=null))switch(F){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Ve(t,n,F,tt,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)tt=a[te],a.hasOwnProperty(te)&&tt!=null&&!r.hasOwnProperty(te)&&Ve(t,n,te,null,r,tt);for(J in r)if(tt=r[J],ot=a[J],r.hasOwnProperty(J)&&tt!==ot&&(tt!=null||ot!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Ve(t,n,J,tt,r,ot)}return;default:if(Mi(n)){for(var ke in a)tt=a[ke],a.hasOwnProperty(ke)&&tt!==void 0&&!r.hasOwnProperty(ke)&&Of(t,n,ke,void 0,r,tt);for(ft in r)tt=r[ft],ot=a[ft],!r.hasOwnProperty(ft)||tt===ot||tt===void 0&&ot===void 0||Of(t,n,ft,tt,r,ot);return}}for(var K in a)tt=a[K],a.hasOwnProperty(K)&&tt!=null&&!r.hasOwnProperty(K)&&Ve(t,n,K,null,r,tt);for(mt in r)tt=r[mt],ot=a[mt],!r.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||Ve(t,n,mt,tt,r,ot)}function j0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,g=u.initiatorType,b=u.duration;if(f&&b&&j0(g)){for(g=0,b=u.responseEnd,r+=1;r<a.length;r++){var F=a[r],J=F.startTime;if(J>b)break;var ft=F.transferSize,mt=F.initiatorType;ft&&j0(mt)&&(F=F.responseEnd,g+=ft*(F<b?1:(b-J)/(F-J)))}if(--r,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Pf=null,zf=null;function Zl(t){return t.nodeType===9?t:t.ownerDocument}function Z0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function If(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function Jx(){var t=window.event;return t&&t.type==="popstate"?t===Bf?!1:(Bf=t,!0):(Bf=null,!1)}var J0=typeof setTimeout=="function"?setTimeout:void 0,$x=typeof clearTimeout=="function"?clearTimeout:void 0,$0=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof $0<"u"?function(t){return $0.resolve(null).then(t).catch(eS)}:J0;function eS(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function tg(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),pr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[is]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&bo(t.ownerDocument.body);a=u}while(a);pr(n)}function eg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Ff(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nS(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[is])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=pi(t.nextSibling),t===null)break}return null}function iS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=pi(t.nextSibling),t===null))return null;return t}function ng(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=pi(t.nextSibling),t===null))return null;return t}function Hf(t){return t.data==="$?"||t.data==="$~"}function Gf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function aS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function pi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Vf=null;function ig(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return pi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function ag(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function sg(t,n,a){switch(n=Zl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);kr(t)}var mi=new Map,rg=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ua=H.d;H.d={f:sS,r:rS,D:oS,C:lS,L:cS,m:uS,X:hS,S:fS,M:dS};function sS(){var t=ua.f(),n=Vl();return t||n}function rS(t){var n=Ea(t);n!==null&&n.tag===5&&n.type==="form"?Em(n):ua.r(t)}var fr=typeof document>"u"?null:document;function og(t,n,a){var r=fr;if(r&&typeof n=="string"&&n){var u=ae(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),rg.has(u)||(rg.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Dn(n,"link",t),A(n),r.head.appendChild(n)))}}function oS(t){ua.D(t),og("dns-prefetch",t,null)}function lS(t,n){ua.C(t,n),og("preconnect",t,n)}function cS(t,n,a){ua.L(t,n,a);var r=fr;if(r&&t&&n){var u='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ae(a.imageSizes)+'"]')):u+='[href="'+ae(t)+'"]';var f=u;switch(n){case"style":f=hr(t);break;case"script":f=dr(t)}mi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),mi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Ao(f))||n==="script"&&r.querySelector(Ro(f))||(n=r.createElement("link"),Dn(n,"link",t),A(n),r.head.appendChild(n)))}}function uS(t,n){ua.m(t,n);var a=fr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ae(r)+'"][href="'+ae(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=dr(t)}if(!mi.has(f)&&(t=v({rel:"modulepreload",href:t},n),mi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}r=a.createElement("link"),Dn(r,"link",t),A(r),a.head.appendChild(r)}}}function fS(t,n,a){ua.S(t,n,a);var r=fr;if(r&&t){var u=Ta(r).hoistableStyles,f=hr(t);n=n||"default";var g=u.get(f);if(!g){var b={loading:0,preload:null};if(g=r.querySelector(Ao(f)))b.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=mi.get(f))&&kf(t,a);var F=g=r.createElement("link");A(F),Dn(F,"link",t),F._p=new Promise(function(J,ft){F.onload=J,F.onerror=ft}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Jl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:b},u.set(f,g)}}}function hS(t,n){ua.X(t,n);var a=fr;if(a&&t){var r=Ta(a).hoistableScripts,u=dr(t),f=r.get(u);f||(f=a.querySelector(Ro(u)),f||(t=v({src:t,async:!0},n),(n=mi.get(u))&&Xf(t,n),f=a.createElement("script"),A(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function dS(t,n){ua.M(t,n);var a=fr;if(a&&t){var r=Ta(a).hoistableScripts,u=dr(t),f=r.get(u);f||(f=a.querySelector(Ro(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=mi.get(u))&&Xf(t,n),f=a.createElement("script"),A(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function lg(t,n,a,r){var u=(u=nt.current)?Ql(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hr(a.href),a=Ta(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hr(a.href);var f=Ta(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(Ao(t)))&&!f._p&&(g.instance=f,g.state.loading=5),mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(t,a),f||pS(u,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=Ta(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function hr(t){return'href="'+ae(t)+'"'}function Ao(t){return'link[rel="stylesheet"]['+t+"]"}function cg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function pS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Dn(n,"link",a),A(n),t.head.appendChild(n))}function dr(t){return'[src="'+ae(t)+'"]'}function Ro(t){return"script[async]"+t}function ug(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ae(a.href)+'"]');if(r)return n.instance=r,A(r),r;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),A(r),Dn(r,"style",u),Jl(r,a.precedence,t),n.instance=r;case"stylesheet":u=hr(a.href);var f=t.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,A(f),f;r=cg(a),(u=mi.get(u))&&kf(r,u),f=(t.ownerDocument||t).createElement("link"),A(f);var g=f;return g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),Dn(f,"link",r),n.state.loading|=4,Jl(f,a.precedence,t),n.instance=f;case"script":return f=dr(a.src),(u=t.querySelector(Ro(f)))?(n.instance=u,A(u),u):(r=a,(u=mi.get(f))&&(r=v({},a),Xf(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),A(u),Dn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Jl(r,a.precedence,t));return n.instance}function Jl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,g=0;g<r.length;g++){var b=r[g];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function fg(t,n,a){if($l===null){var r=new Map,u=$l=new Map;u.set(a,r)}else u=$l,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[is]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var b=r.get(g);b?b.push(f):r.set(g,[f])}}return r}function hg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function mS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function dg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function gS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hr(r.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,r=cg(r),(u=mi.get(u))&&kf(r,u),f=f.createElement("link"),A(f);var g=f;g._p=new Promise(function(b,F){g.onload=b,g.onerror=F}),Dn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wf=0;function _S(t,n){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Wf===0&&(Wf=62500*Qx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Wf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ec=null;function nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ec=new Map,n.forEach(vS,t),ec=null,tc.call(t))}function vS(t,n){if(!(n.state.loading&4)){var a=ec.get(t);if(a)var r=a.get(null);else{a=new Map,ec.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,u),a.set(g,u),this.count++,r=tc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:D,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function xS(t,n,a,r,u,f,g,b,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function pg(t,n,a,r,u,f,g,b,F,J,ft,mt){return t=new xS(t,n,a,g,F,J,ft,mt,b),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),t.current=f,f.stateNode=t,n=Eu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ru(f),t}function mg(t){return t?(t=Xs,t):Xs}function gg(t,n,a,r,u,f){u=mg(u),r.context===null?r.context=u:r.pendingContext=u,r=Ua(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=La(t,r,n),a!==null&&(Yn(a,t,n),so(a,t,n))}function _g(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function qf(t,n){_g(t,n),(t=t.alternate)&&_g(t,n)}function vg(t){if(t.tag===13||t.tag===31){var n=ls(t,67108864);n!==null&&Yn(n,t,67108864),qf(t,67108864)}}function xg(t){if(t.tag===13||t.tag===31){var n=ni();n=Hr(n);var a=ls(t,n);a!==null&&Yn(a,t,n),qf(t,n)}}var ic=!0;function SS(t,n,a,r){var u=B.T;B.T=null;var f=H.p;try{H.p=2,Yf(t,n,a,r)}finally{H.p=f,B.T=u}}function yS(t,n,a,r){var u=B.T;B.T=null;var f=H.p;try{H.p=8,Yf(t,n,a,r)}finally{H.p=f,B.T=u}}function Yf(t,n,a,r){if(ic){var u=Kf(r);if(u===null)Nf(t,n,r,ac,a),yg(t,r);else if(ES(u,t,n,a,r))r.stopPropagation();else if(yg(t,r),n&4&&-1<MS.indexOf(t)){for(;u!==null;){var f=Ea(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=St(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var F=1<<31-Ot(g);b.entanglements[1]|=F,g&=~F}zi(f),(Le&6)===0&&(Hl=E()+500,Mo(0))}}break;case 31:case 13:b=ls(f,2),b!==null&&Yn(b,f,2),Vl(),qf(f,2)}if(f=Kf(r),f===null&&Nf(t,n,r,ac,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Nf(t,n,r,null,a)}}function Kf(t){return t=jc(t),jf(t)}var ac=null;function jf(t){if(ac=null,t=Ma(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function Sg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ht:return 2;case vt:return 8;case lt:case jt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Zf=!1,ka=null,Xa=null,Wa=null,wo=new Map,Do=new Map,qa=[],MS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yg(t,n){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ea(n),n!==null&&vg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function ES(t,n,a,r,u){switch(n){case"focusin":return ka=Uo(ka,t,n,a,r,u),!0;case"dragenter":return Xa=Uo(Xa,t,n,a,r,u),!0;case"mouseover":return Wa=Uo(Wa,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,Uo(wo.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,t,n,a,r,u)),!0}return!1}function Mg(t){var n=Ma(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Li(t.priority,function(){xg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Li(t.priority,function(){xg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Kf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Kc=r,a.target.dispatchEvent(r),Kc=null}else return n=Ea(a),n!==null&&vg(n),t.blockedOn=a,!1;n.shift()}return!0}function Eg(t,n,a){sc(t)&&a.delete(n)}function TS(){Zf=!1,ka!==null&&sc(ka)&&(ka=null),Xa!==null&&sc(Xa)&&(Xa=null),Wa!==null&&sc(Wa)&&(Wa=null),wo.forEach(Eg),Do.forEach(Eg)}function rc(t,n){t.blockedOn===n&&(t.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,TS)))}var oc=null;function Tg(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(jf(r||a)===null)continue;break}var f=Ea(a);f!==null&&(t.splice(n,3),n-=3,Yu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function pr(t){function n(F){return rc(F,t)}ka!==null&&rc(ka,t),Xa!==null&&rc(Xa,t),Wa!==null&&rc(Wa,t),wo.forEach(n),Do.forEach(n);for(var a=0;a<qa.length;a++){var r=qa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)Mg(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],g=u[yn]||null;if(typeof f=="function")g||Tg(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[yn]||null)b=g.formAction;else if(jf(u)!==null)continue}else b=g.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),Tg(a)}}}function bg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Qf(t){this._internalRoot=t}lc.prototype.render=Qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ni();gg(a,r,t,n,null,null)},lc.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;gg(t.current,2,null,t,null,null),Vl(),n[yi]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Gr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&Mg(t)}};var Ag=e.version;if(Ag!=="19.2.3")throw Error(s(527,Ag,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var bS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{Mt=cc.inject(bS),Et=cc}catch{}}return No.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=Nm,f=Om,g=Pm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=pg(t,1,!1,null,null,a,r,null,u,f,g,bg),t[yi]=n.current,Lf(t),new Qf(n)},No.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=Nm,g=Om,b=Pm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=pg(t,1,!0,n,a??null,r,u,F,f,g,b,bg),n.context=mg(null),a=n.current,r=ni(),r=Hr(r),u=Ua(r),u.callback=null,La(a,u,r),a=r,n.current.lanes=a,Nn(n,a),zi(n),t[yi]=n.current,Lf(t),new lc(n)},No.version="19.2.3",No}var zg;function zS(){if(zg)return th.exports;zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),th.exports=PS(),th.exports}var IS=zS();const BS=F_(IS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="182",FS=0,Ig=1,HS=2,Lc=1,GS=2,ko=3,ns=0,jn=1,ga=2,va=0,wr=1,Bg=2,Fg=3,Hg=4,VS=5,Cs=100,kS=101,XS=102,WS=103,qS=104,YS=200,KS=201,jS=202,ZS=203,Bh=204,Fh=205,QS=206,JS=207,$S=208,ty=209,ey=210,ny=211,iy=212,ay=213,sy=214,Hh=0,Gh=1,Vh=2,Ur=3,kh=4,Xh=5,Wh=6,qh=7,H_=0,ry=1,oy=2,Gi=0,G_=1,V_=2,k_=3,X_=4,W_=5,q_=6,Y_=7,K_=300,Ls=301,Lr=302,Yh=303,Kh=304,Xc=306,jh=1e3,_a=1001,Zh=1002,Un=1003,ly=1004,uc=1005,In=1006,ah=1007,Ds=1008,si=1009,j_=1010,Z_=1011,Wo=1012,Od=1013,Xi=1014,Fi=1015,Sa=1016,Pd=1017,zd=1018,qo=1020,Q_=35902,J_=35899,$_=1021,tv=1022,Ui=1023,ya=1026,Us=1027,ev=1028,Id=1029,Nr=1030,Bd=1031,Fd=1033,Nc=33776,Oc=33777,Pc=33778,zc=33779,Qh=35840,Jh=35841,$h=35842,td=35843,ed=36196,nd=37492,id=37496,ad=37488,sd=37489,rd=37490,od=37491,ld=37808,cd=37809,ud=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,xd=37819,Sd=37820,yd=37821,Md=36492,Ed=36494,Td=36495,bd=36283,Ad=36284,Rd=36285,Cd=36286,cy=3200,nv=0,uy=1,ts="",_i="srgb",Or="srgb-linear",Fc="linear",He="srgb",mr=7680,Gg=519,fy=512,hy=513,dy=514,Hd=515,py=516,my=517,Gd=518,gy=519,Vg=35044,kg="300 es",Hi=2e3,Hc=2001;function iv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Gc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function _y(){const o=Gc("canvas");return o.style.display="block",o}const Xg={};function Wg(...o){const e="THREE."+o.shift();console.log(e,...o)}function ie(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Ce(...o){const e="THREE."+o.shift();console.error(e,...o)}function Yo(...o){const e=o.join(" ");e in Xg||(Xg[e]=!0,ie(...o))}function vy(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class zr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,wd=180/Math.PI;function jo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function xy(o,e){return(o%e+e)%e}function rh(o,e,i){return(1-i)*o+i*e}function Oo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(e=0,i=0){Ee.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],v=s[l+3],S=c[h+0],M=c[h+1],R=c[h+2],C=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v;return}if(d>=1){e[i+0]=S,e[i+1]=M,e[i+2]=R,e[i+3]=C;return}if(v!==C||m!==S||p!==M||_!==R){let y=m*S+p*M+_*R+v*C;y<0&&(S=-S,M=-M,R=-R,C=-C,y=-y);let x=1-d;if(y<.9995){const U=Math.acos(y),D=Math.sin(U);x=Math.sin(x*U)/D,d=Math.sin(d*U)/D,m=m*x+S*d,p=p*x+M*d,_=_*x+R*d,v=v*x+C*d}else{m=m*x+S*d,p=p*x+M*d,_=_*x+R*d,v=v*x+C*d;const U=1/Math.sqrt(m*m+p*p+_*_+v*v);m*=U,p*=U,_*=U,v*=U}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],v=c[h],S=c[h+1],M=c[h+2],R=c[h+3];return e[i]=d*R+_*v+m*M-p*S,e[i+1]=m*R+_*S+p*v-d*M,e[i+2]=p*R+_*M+d*S-m*v,e[i+3]=_*R-d*v-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),v=d(c/2),S=m(s/2),M=m(l/2),R=m(c/2);switch(h){case"XYZ":this._x=S*_*v+p*M*R,this._y=p*M*v-S*_*R,this._z=p*_*R+S*M*v,this._w=p*_*v-S*M*R;break;case"YXZ":this._x=S*_*v+p*M*R,this._y=p*M*v-S*_*R,this._z=p*_*R-S*M*v,this._w=p*_*v+S*M*R;break;case"ZXY":this._x=S*_*v-p*M*R,this._y=p*M*v+S*_*R,this._z=p*_*R+S*M*v,this._w=p*_*v-S*M*R;break;case"ZYX":this._x=S*_*v-p*M*R,this._y=p*M*v+S*_*R,this._z=p*_*R-S*M*v,this._w=p*_*v+S*M*R;break;case"YZX":this._x=S*_*v+p*M*R,this._y=p*M*v+S*_*R,this._z=p*_*R-S*M*v,this._w=p*_*v-S*M*R;break;case"XZY":this._x=S*_*v-p*M*R,this._y=p*M*v-S*_*R,this._z=p*_*R+S*M*v,this._w=p*_*v+S*M*R;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],v=i[10],S=s+d+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,i=0,s=0){j.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(qg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(qg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),_=2*(d*i-c*l),v=2*(c*s-h*i);return this.x=i+m*p+h*v-d*_,this.y=s+m*_+d*p-c*v,this.z=l+m*v+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return oh.copy(this).projectOnVector(e),this.sub(oh)}reflect(e){return this.sub(oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new j,qg=new Zo;class ue{constructor(e,i,s,l,c,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p)}set(e,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],v=s[7],S=s[2],M=s[5],R=s[8],C=l[0],y=l[3],x=l[6],U=l[1],D=l[4],L=l[7],z=l[2],I=l[5],P=l[8];return c[0]=h*C+d*U+m*z,c[3]=h*y+d*D+m*I,c[6]=h*x+d*L+m*P,c[1]=p*C+_*U+v*z,c[4]=p*y+_*D+v*I,c[7]=p*x+_*L+v*P,c[2]=S*C+M*U+R*z,c[5]=S*y+M*D+R*I,c[8]=S*x+M*L+R*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=_*h-d*p,S=d*m-_*c,M=p*c-h*m,R=i*v+s*S+l*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=v*C,e[1]=(l*p-_*s)*C,e[2]=(d*s-l*h)*C,e[3]=S*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=M*C,e[7]=(s*m-p*i)*C,e[8]=(h*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(lh.makeScale(e,i)),this}rotate(e){return this.premultiply(lh.makeRotation(-e)),this}translate(e,i){return this.premultiply(lh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new ue,Yg=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kg=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sy(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ts?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:e,whitePoint:s,transfer:Fc,toXYZ:Yg,fromXYZ:Kg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:s,transfer:He,toXYZ:Yg,fromXYZ:Kg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),o}const be=Sy();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Dr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gr;class yy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{gr===void 0&&(gr=Gc("canvas")),gr.width=e.width,gr.height=e.height;const l=gr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Gc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=xa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:e.width,height:e.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let My=0;class Vd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=jo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(ch(l[h].image)):c.push(ch(l[h]))}else c=ch(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?yy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let Ey=0;const uh=new j;class Gn extends zr{constructor(e=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=_a,l=_a,c=In,h=Ds,d=Ui,m=si,p=Gn.DEFAULT_ANISOTROPY,_=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=jo(),this.name="",this.source=new Vd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jh:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jh:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=K_;Gn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],_=m[4],v=m[8],S=m[1],M=m[5],R=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(_-S)<.01&&Math.abs(v-C)<.01&&Math.abs(R-y)<.01){if(Math.abs(_+S)<.1&&Math.abs(v+C)<.1&&Math.abs(R+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,L=(M+1)/2,z=(x+1)/2,I=(_+S)/4,P=(v+C)/4,W=(R+y)/4;return D>L&&D>z?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=I/s,c=P/s):L>z?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=I/l,c=W/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=P/c,l=W/c),this.set(s,l,c,i),this}let U=Math.sqrt((y-R)*(y-R)+(v-C)*(v-C)+(S-_)*(S-_));return Math.abs(U)<.001&&(U=1),this.x=(y-R)/U,this.y=(v-C)/U,this.z=(S-_)/U,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ty extends zr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Vd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Ty{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class av extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class by extends Gn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qo{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),hc.subVectors(this.max,Po),_r.subVectors(e.a,Po),vr.subVectors(e.b,Po),xr.subVectors(e.c,Po),Ka.subVectors(vr,_r),ja.subVectors(xr,vr),ys.subVectors(_r,xr);let i=[0,-Ka.z,Ka.y,0,-ja.z,ja.y,0,-ys.z,ys.y,Ka.z,0,-Ka.x,ja.z,0,-ja.x,ys.z,0,-ys.x,-Ka.y,Ka.x,0,-ja.y,ja.x,0,-ys.y,ys.x,0];return!fh(i,_r,vr,xr,hc)||(i=[1,0,0,0,1,0,0,0,1],!fh(i,_r,vr,xr,hc))?!1:(dc.crossVectors(Ka,ja),i=[dc.x,dc.y,dc.z],fh(i,_r,vr,xr,hc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fa=[new j,new j,new j,new j,new j,new j,new j,new j],Ai=new j,fc=new Qo,_r=new j,vr=new j,xr=new j,Ka=new j,ja=new j,ys=new j,Po=new j,hc=new j,dc=new j,Ms=new j;function fh(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Ms.fromArray(o,c);const d=l.x*Math.abs(Ms.x)+l.y*Math.abs(Ms.y)+l.z*Math.abs(Ms.z),m=e.dot(Ms),p=i.dot(Ms),_=s.dot(Ms);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const Ay=new Qo,zo=new j,hh=new j;class Wc{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Ay.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(hh)),this.expandByPoint(zo.copy(e.center).sub(hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ha=new j,dh=new j,pc=new j,Za=new j,ph=new j,mc=new j,mh=new j;class sv{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ha)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ha.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){dh.copy(e).add(i).multiplyScalar(.5),pc.copy(i).sub(e).normalize(),Za.copy(this.origin).sub(dh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(pc),d=Za.dot(this.direction),m=-Za.dot(pc),p=Za.lengthSq(),_=Math.abs(1-h*h);let v,S,M,R;if(_>0)if(v=h*m-d,S=h*d-m,R=c*_,v>=0)if(S>=-R)if(S<=R){const C=1/_;v*=C,S*=C,M=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=c,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S=-c,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;else S<=-R?(v=Math.max(0,-(-h*c+d)),S=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+S*(S+2*m)+p):S<=R?(v=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(v=Math.max(0,-(h*c+d)),S=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+S*(S+2*m)+p);else S=h>0?-c:c,v=Math.max(0,-(h*S+d)),M=-v*v+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(dh).addScaledVector(pc,S),M}intersectSphere(e,i){ha.subVectors(e.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(c=(e.min.y-S.y)*_,h=(e.max.y-S.y)*_):(c=(e.max.y-S.y)*_,h=(e.min.y-S.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,m=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,m=(e.min.z-S.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ha)!==null}intersectTriangle(e,i,s,l,c){ph.subVectors(i,e),mc.subVectors(s,e),mh.crossVectors(ph,mc);let h=this.direction.dot(mh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Za.subVectors(this.origin,e);const m=d*this.direction.dot(mc.crossVectors(Za,mc));if(m<0)return null;const p=d*this.direction.dot(ph.cross(Za));if(p<0||m+p>h)return null;const _=-d*Za.dot(mh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,i,s,l,c,h,d,m,p,_,v,S,M,R,C,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,m,p,_,v,S,M,R,C,y)}set(e,i,s,l,c,h,d,m,p,_,v,S,M,R,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=v,x[14]=S,x[3]=M,x[7]=R,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Sr.setFromMatrixColumn(e,0).length(),c=1/Sr.setFromMatrixColumn(e,1).length(),h=1/Sr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const S=h*_,M=h*v,R=d*_,C=d*v;i[0]=m*_,i[4]=-m*v,i[8]=p,i[1]=M+R*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=R+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*_,M=m*v,R=p*_,C=p*v;i[0]=S+C*d,i[4]=R*d-M,i[8]=h*p,i[1]=h*v,i[5]=h*_,i[9]=-d,i[2]=M*d-R,i[6]=C+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*_,M=m*v,R=p*_,C=p*v;i[0]=S-C*d,i[4]=-h*v,i[8]=R+M*d,i[1]=M+R*d,i[5]=h*_,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*_,M=h*v,R=d*_,C=d*v;i[0]=m*_,i[4]=R*p-M,i[8]=S*p+C,i[1]=m*v,i[5]=C*p+S,i[9]=M*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,R=d*m,C=d*p;i[0]=m*_,i[4]=C-S*v,i[8]=R*v+M,i[1]=v,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*v+R,i[10]=S-C*v}else if(e.order==="XZY"){const S=h*m,M=h*p,R=d*m,C=d*p;i[0]=m*_,i[4]=-v,i[8]=p*_,i[1]=S*v+C,i[5]=h*_,i[9]=M*v-R,i[2]=R*v-M,i[6]=d*_,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ry,e,Cy)}lookAt(e,i,s){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Qa.crossVectors(s,ii),Qa.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Qa.crossVectors(s,ii)),Qa.normalize(),gc.crossVectors(ii,Qa),l[0]=Qa.x,l[4]=gc.x,l[8]=ii.x,l[1]=Qa.y,l[5]=gc.y,l[9]=ii.y,l[2]=Qa.z,l[6]=gc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],v=s[5],S=s[9],M=s[13],R=s[2],C=s[6],y=s[10],x=s[14],U=s[3],D=s[7],L=s[11],z=s[15],I=l[0],P=l[4],W=l[8],T=l[12],w=l[1],V=l[5],et=l[9],st=l[13],dt=l[2],ut=l[6],B=l[10],H=l[14],at=l[3],yt=l[7],xt=l[11],O=l[15];return c[0]=h*I+d*w+m*dt+p*at,c[4]=h*P+d*V+m*ut+p*yt,c[8]=h*W+d*et+m*B+p*xt,c[12]=h*T+d*st+m*H+p*O,c[1]=_*I+v*w+S*dt+M*at,c[5]=_*P+v*V+S*ut+M*yt,c[9]=_*W+v*et+S*B+M*xt,c[13]=_*T+v*st+S*H+M*O,c[2]=R*I+C*w+y*dt+x*at,c[6]=R*P+C*V+y*ut+x*yt,c[10]=R*W+C*et+y*B+x*xt,c[14]=R*T+C*st+y*H+x*O,c[3]=U*I+D*w+L*dt+z*at,c[7]=U*P+D*V+L*ut+z*yt,c[11]=U*W+D*et+L*B+z*xt,c[15]=U*T+D*st+L*H+z*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],v=e[6],S=e[10],M=e[14],R=e[3],C=e[7],y=e[11],x=e[15],U=m*M-p*S,D=d*M-p*v,L=d*S-m*v,z=h*M-p*_,I=h*S-m*_,P=h*v-d*_;return i*(C*U-y*D+x*L)-s*(R*U-y*z+x*I)+l*(R*D-C*z+x*P)-c*(R*L-C*I+y*P)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],v=e[9],S=e[10],M=e[11],R=e[12],C=e[13],y=e[14],x=e[15],U=v*y*p-C*S*p+C*m*M-d*y*M-v*m*x+d*S*x,D=R*S*p-_*y*p-R*m*M+h*y*M+_*m*x-h*S*x,L=_*C*p-R*v*p+R*d*M-h*C*M-_*d*x+h*v*x,z=R*v*m-_*C*m-R*d*S+h*C*S+_*d*y-h*v*y,I=i*U+s*D+l*L+c*z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=U*P,e[1]=(C*S*c-v*y*c-C*l*M+s*y*M+v*l*x-s*S*x)*P,e[2]=(d*y*c-C*m*c+C*l*p-s*y*p-d*l*x+s*m*x)*P,e[3]=(v*m*c-d*S*c-v*l*p+s*S*p+d*l*M-s*m*M)*P,e[4]=D*P,e[5]=(_*y*c-R*S*c+R*l*M-i*y*M-_*l*x+i*S*x)*P,e[6]=(R*m*c-h*y*c-R*l*p+i*y*p+h*l*x-i*m*x)*P,e[7]=(h*S*c-_*m*c+_*l*p-i*S*p-h*l*M+i*m*M)*P,e[8]=L*P,e[9]=(R*v*c-_*C*c-R*s*M+i*C*M+_*s*x-i*v*x)*P,e[10]=(h*C*c-R*d*c+R*s*p-i*C*p-h*s*x+i*d*x)*P,e[11]=(_*d*c-h*v*c-_*s*p+i*v*p+h*s*M-i*d*M)*P,e[12]=z*P,e[13]=(_*C*l-R*v*l+R*s*S-i*C*S-_*s*y+i*v*y)*P,e[14]=(R*d*l-h*C*l-R*s*m+i*C*m+h*s*y-i*d*y)*P,e[15]=(h*v*l-_*d*l+_*s*m-i*v*m-h*s*S+i*d*S)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,v=d+d,S=c*p,M=c*_,R=c*v,C=h*_,y=h*v,x=d*v,U=m*p,D=m*_,L=m*v,z=s.x,I=s.y,P=s.z;return l[0]=(1-(C+x))*z,l[1]=(M+L)*z,l[2]=(R-D)*z,l[3]=0,l[4]=(M-L)*I,l[5]=(1-(S+x))*I,l[6]=(y+U)*I,l[7]=0,l[8]=(R+D)*P,l[9]=(y-U)*P,l[10]=(1-(S+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Sr.set(l[0],l[1],l[2]).length();const h=Sr.set(l[4],l[5],l[6]).length(),d=Sr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ri.copy(this);const p=1/c,_=1/h,v=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=_,Ri.elements[5]*=_,Ri.elements[6]*=_,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=Hi,m=!1){const p=this.elements,_=2*c/(i-e),v=2*c/(s-l),S=(i+e)/(i-e),M=(s+l)/(s-l);let R,C;if(m)R=c/(h-c),C=h*c/(h-c);else if(d===Hi)R=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Hc)R=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=Hi,m=!1){const p=this.elements,_=2/(i-e),v=2/(s-l),S=-(i+e)/(i-e),M=-(s+l)/(s-l);let R,C;if(m)R=1/(h-c),C=h/(h-c);else if(d===Hi)R=-2/(h-c),C=-(h+c)/(h-c);else if(d===Hc)R=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=R,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Sr=new j,Ri=new $e,Ry=new j(0,0,0),Cy=new j(1,1,1),Qa=new j,gc=new j,ii=new j,jg=new $e,Zg=new Zo;class Wi{constructor(e=0,i=0,s=0,l=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],v=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return jg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jg,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Zg.setFromEuler(this),this.setFromQuaternion(Zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wy=0;const Qg=new j,yr=new Zo,da=new $e,_c=new j,Io=new j,Dy=new j,Uy=new Zo,Jg=new j(1,0,0),$g=new j(0,1,0),t_=new j(0,0,1),e_={type:"added"},Ly={type:"removed"},Mr={type:"childadded",child:null},gh={type:"childremoved",child:null};class Ln extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const e=new j,i=new Wi,s=new Zo,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new ue}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,i){return yr.setFromAxisAngle(e,i),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Jg,e)}rotateY(e){return this.rotateOnAxis($g,e)}rotateZ(e){return this.rotateOnAxis(t_,e)}translateOnAxis(e,i){return Qg.copy(e).applyQuaternion(this.quaternion),this.position.add(Qg.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Jg,e)}translateY(e){return this.translateOnAxis($g,e)}translateZ(e){return this.translateOnAxis(t_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?_c.copy(e):_c.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Io,_c,this.up):da.lookAt(_c,Io,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(da),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(e_),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ly),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(e_),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,Dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),v=h(e.shapes),S=h(e.skeletons),M=h(e.animations),R=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),R.length>0&&(s.nodes=R)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new j(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new j,pa=new j,_h=new j,ma=new j,Er=new j,Tr=new j,n_=new j,vh=new j,xh=new j,Sh=new j,yh=new sn,Mh=new sn,Eh=new sn;class Di{constructor(e=new j,i=new j,s=new j){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ci.subVectors(l,i),pa.subVectors(s,i),_h.subVectors(e,i);const h=Ci.dot(Ci),d=Ci.dot(pa),m=Ci.dot(_h),p=pa.dot(pa),_=pa.dot(_h),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const S=1/v,M=(p*m-d*_)*S,R=(h*_-d*m)*S;return c.set(1-M-R,R,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(e,i,s,l,c,h,d,m){return this.getBarycoord(e,i,s,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(h,ma.y),m.addScaledVector(d,ma.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return yh.setScalar(0),Mh.setScalar(0),Eh.setScalar(0),yh.fromBufferAttribute(e,i),Mh.fromBufferAttribute(e,s),Eh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(yh,c.x),h.addScaledVector(Mh,c.y),h.addScaledVector(Eh,c.z),h}static isFrontFacing(e,i,s,l){return Ci.subVectors(s,i),pa.subVectors(e,i),Ci.cross(pa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ci.cross(pa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Di.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Er.subVectors(l,s),Tr.subVectors(c,s),vh.subVectors(e,s);const m=Er.dot(vh),p=Tr.dot(vh);if(m<=0&&p<=0)return i.copy(s);xh.subVectors(e,l);const _=Er.dot(xh),v=Tr.dot(xh);if(_>=0&&v<=_)return i.copy(l);const S=m*v-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(Er,h);Sh.subVectors(e,c);const M=Er.dot(Sh),R=Tr.dot(Sh);if(R>=0&&M<=R)return i.copy(c);const C=M*p-m*R;if(C<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(s).addScaledVector(Tr,d);const y=_*R-M*v;if(y<=0&&v-_>=0&&M-R>=0)return n_.subVectors(c,l),d=(v-_)/(v-_+(M-R)),i.copy(l).addScaledVector(n_,d);const x=1/(y+C+S);return h=C*x,d=S*x,i.copy(s).addScaledVector(Er,h).addScaledVector(Tr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Th(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class xe{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=be.workingColorSpace){if(e=xy(e,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Th(h,c,e+1/3),this.g=Th(h,c,e),this.b=Th(h,c,e-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(e,i=_i){function s(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ie("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=_i){const s=ov[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return be.workingToColorSpace(zn.copy(this),e),Math.round(ye(zn.r*255,0,255))*65536+Math.round(ye(zn.g*255,0,255))*256+Math.round(ye(zn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=_<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=_i){be.workingToColorSpace(zn.copy(this),e);const i=zn.r,s=zn.g,l=zn.b;return e!==_i?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(vc);const s=rh(Ja.h,vc.h,i),l=rh(Ja.s,vc.s,i),c=rh(Ja.l,vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new xe;xe.NAMES=ov;let Ny=0;class Ir extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=wr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Fh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==ns&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Bh&&(s.blendSrc=this.blendSrc),this.blendDst!==Fh&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kd extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new j,xc=new Ee;let Oy=0;class ki{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=Vg,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(e),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Oo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vg&&(e.usage=this.usage),e}}class lv extends ki{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class cv extends ki{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Bn extends ki{constructor(e,i,s){super(new Float32Array(e),i,s)}}let Py=0;const gi=new $e,bh=new Ln,br=new j,ai=new Qo,Bo=new Qo,Sn=new j;class xi extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iv(e)?cv:lv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,i,s){return gi.makeTranslation(e,i,s),this.applyMatrix4(gi),this}scale(e,i,s){return gi.makeScale(e,i,s),this.applyMatrix4(gi),this}lookAt(e){return bh.lookAt(e),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Bn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ai.min,Bo.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,Bo.max),ai.expandByPoint(Sn)):(ai.expandByPoint(Bo.min),ai.expandByPoint(Bo.max))}ai.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Sn.fromBufferAttribute(d,p),m&&(br.fromBufferAttribute(e,p),Sn.add(br)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<s.count;W++)d[W]=new j,m[W]=new j;const p=new j,_=new j,v=new j,S=new Ee,M=new Ee,R=new Ee,C=new j,y=new j;function x(W,T,w){p.fromBufferAttribute(s,W),_.fromBufferAttribute(s,T),v.fromBufferAttribute(s,w),S.fromBufferAttribute(c,W),M.fromBufferAttribute(c,T),R.fromBufferAttribute(c,w),_.sub(p),v.sub(p),M.sub(S),R.sub(S);const V=1/(M.x*R.y-R.x*M.y);isFinite(V)&&(C.copy(_).multiplyScalar(R.y).addScaledVector(v,-M.y).multiplyScalar(V),y.copy(v).multiplyScalar(M.x).addScaledVector(_,-R.x).multiplyScalar(V),d[W].add(C),d[T].add(C),d[w].add(C),m[W].add(y),m[T].add(y),m[w].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let W=0,T=U.length;W<T;++W){const w=U[W],V=w.start,et=w.count;for(let st=V,dt=V+et;st<dt;st+=3)x(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const D=new j,L=new j,z=new j,I=new j;function P(W){z.fromBufferAttribute(l,W),I.copy(z);const T=d[W];D.copy(T),D.sub(z.multiplyScalar(z.dot(T))).normalize(),L.crossVectors(I,T);const V=L.dot(m[W])<0?-1:1;h.setXYZW(W,D.x,D.y,D.z,V)}for(let W=0,T=U.length;W<T;++W){const w=U[W],V=w.start,et=w.count;for(let st=V,dt=V+et;st<dt;st+=3)P(e.getX(st+0)),P(e.getX(st+1)),P(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ki(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new j,c=new j,h=new j,d=new j,m=new j,p=new j,_=new j,v=new j;if(e)for(let S=0,M=e.count;S<M;S+=3){const R=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,y),d.add(_),m.add(_),p.add(_),s.setXYZ(R,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),v.subVectors(l,c),_.cross(v),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,v=d.normalized,S=new p.constructor(m.length*_);let M=0,R=0;for(let C=0,y=m.length;C<y;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*_;for(let x=0;x<_;x++)S[R++]=p[M++]}return new ki(S,_,v)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,v=p.length;_<v;_++){const S=p[_],M=e(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],v=c[p];for(let S=0,M=v.length;S<M;S++)_.push(v[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const i_=new $e,Es=new sv,Sc=new Wc,a_=new j,yc=new j,Mc=new j,Ec=new j,Ah=new j,Tc=new j,s_=new j,bc=new j;class Ye extends Ln{constructor(e=new xi,i=new kd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Tc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],v=c[m];_!==0&&(Ah.fromBufferAttribute(v,e),h?Tc.addScaledVector(Ah,_):Tc.addScaledVector(Ah.sub(i),_))}i.add(Tc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(c),Es.copy(e.ray).recast(e.near),!(Sc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Sc,a_)===null||Es.origin.distanceToSquared(a_)>(e.far-e.near)**2))&&(i_.copy(c).invert(),Es.copy(e.ray).applyMatrix4(i_),!(s.boundingBox!==null&&Es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Es)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=h[y.materialIndex],U=Math.max(y.start,M.start),D=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let L=U,z=D;L<z;L+=3){const I=d.getX(L),P=d.getX(L+1),W=d.getX(L+2);l=Ac(this,x,e,s,p,_,v,I,P,W),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=R,x=C;y<x;y+=3){const U=d.getX(y),D=d.getX(y+1),L=d.getX(y+2);l=Ac(this,h,e,s,p,_,v,U,D,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,C=S.length;R<C;R++){const y=S[R],x=h[y.materialIndex],U=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let L=U,z=D;L<z;L+=3){const I=L,P=L+1,W=L+2;l=Ac(this,x,e,s,p,_,v,I,P,W),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=R,x=C;y<x;y+=3){const U=y,D=y+1,L=y+2;l=Ac(this,h,e,s,p,_,v,U,D,L),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function zy(o,e,i,s,l,c,h,d){let m;if(e.side===jn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,e.side===ns,d),m===null)return null;bc.copy(d),bc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(bc);return p<i.near||p>i.far?null:{distance:p,point:bc.clone(),object:o}}function Ac(o,e,i,s,l,c,h,d,m,p){o.getVertexPosition(d,yc),o.getVertexPosition(m,Mc),o.getVertexPosition(p,Ec);const _=zy(o,e,i,s,yc,Mc,Ec,s_);if(_){const v=new j;Di.getBarycoord(s_,yc,Mc,Ec,v),l&&(_.uv=Di.getInterpolatedAttribute(l,d,m,p,v,new Ee)),c&&(_.uv1=Di.getInterpolatedAttribute(c,d,m,p,v,new Ee)),h&&(_.normal=Di.getInterpolatedAttribute(h,d,m,p,v,new j),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new j,materialIndex:0};Di.getNormal(yc,Mc,Ec,S.normal),_.face=S,_.barycoord=v}return _}class pn extends xi{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],v=[];let S=0,M=0;R("z","y","x",-1,-1,s,i,e,h,c,0),R("z","y","x",1,-1,s,i,-e,h,c,1),R("x","z","y",1,1,e,s,i,l,h,2),R("x","z","y",1,-1,e,s,-i,l,h,3),R("x","y","z",1,-1,e,i,s,l,c,4),R("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Bn(p,3)),this.setAttribute("normal",new Bn(_,3)),this.setAttribute("uv",new Bn(v,2));function R(C,y,x,U,D,L,z,I,P,W,T){const w=L/P,V=z/W,et=L/2,st=z/2,dt=I/2,ut=P+1,B=W+1;let H=0,at=0;const yt=new j;for(let xt=0;xt<B;xt++){const O=xt*V-st;for(let it=0;it<ut;it++){const gt=it*w-et;yt[C]=gt*U,yt[y]=O*D,yt[x]=dt,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[y]=0,yt[x]=I>0?1:-1,_.push(yt.x,yt.y,yt.z),v.push(it/P),v.push(1-xt/W),H+=1}}for(let xt=0;xt<W;xt++)for(let O=0;O<P;O++){const it=S+O+ut*xt,gt=S+O+ut*(xt+1),bt=S+(O+1)+ut*(xt+1),Bt=S+(O+1)+ut*xt;m.push(it,gt,Bt),m.push(gt,bt,Bt),at+=6}d.addGroup(M,at,T),M+=at,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Hn(o){const e={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)e[l]=s[l]}return e}function Iy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function uv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const By={clone:Pr,merge:Hn};var Fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fy,this.fragmentShader=Hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class fv extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new j,r_=new Ee,o_=new Ee;class vi extends fv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=wd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wd*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,r_,o_),i.subVectors(o_,r_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(sh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ar=-90,Rr=1;class Gy extends Ln{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(Ar,Rr,e,i);l.layers=this.layers,this.add(l);const c=new vi(Ar,Rr,e,i);c.layers=this.layers,this.add(c);const h=new vi(Ar,Rr,e,i);h.layers=this.layers,this.add(h);const d=new vi(Ar,Rr,e,i);d.layers=this.layers,this.add(d);const m=new vi(Ar,Rr,e,i);m.layers=this.layers,this.add(m);const p=new vi(Ar,Rr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(v,S,M),e.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class hv extends Gn{constructor(e=[],i=Ls,s,l,c,h,d,m,p,_){super(e,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dv extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new hv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new pn(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:va});c.uniforms.tEquirect.value=i;const h=new Ye(l,c),d=i.minFilter;return i.minFilter===Ds&&(i.minFilter=In),new Gy(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class wi extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vy={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(p,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=_.position.distanceTo(v.position),M=.02,R=.005;p.inputState.pinching&&S>M+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Vy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new wi;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Xd{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=i,this.far=s}clone(){return new Xd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ky extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Xy extends Gn{constructor(e=null,i=1,s=1,l,c,h,d,m,p=Un,_=Un,v,S){super(null,h,d,m,p,_,l,c,v,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ch=new j,Wy=new j,qy=new ue;class Rs{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Ch.subVectors(s,i).cross(Wy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Ch),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||qy.getNormalMatrix(e),l=this.coplanarPoint(Ch).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new Wc,Yy=new Ee(.5,.5),Rc=new j;class Wd{constructor(e=new Rs,i=new Rs,s=new Rs,l=new Rs,c=new Rs,h=new Rs){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Hi,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],v=c[5],S=c[6],M=c[7],R=c[8],C=c[9],y=c[10],x=c[11],U=c[12],D=c[13],L=c[14],z=c[15];if(l[0].setComponents(p-h,M-_,x-R,z-U).normalize(),l[1].setComponents(p+h,M+_,x+R,z+U).normalize(),l[2].setComponents(p+d,M+v,x+C,z+D).normalize(),l[3].setComponents(p-d,M-v,x-C,z-D).normalize(),s)l[4].setComponents(m,S,y,L).normalize(),l[5].setComponents(p-m,M-S,x-y,z-L).normalize();else if(l[4].setComponents(p-m,M-S,x-y,z-L).normalize(),i===Hi)l[5].setComponents(p+m,M+S,x+y,z+L).normalize();else if(i===Hc)l[5].setComponents(m,S,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);const i=Yy.distanceTo(e.center);return Ts.radius=.7071067811865476+i,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Rc.x=l.normal.x>0?e.max.x:e.min.x,Rc.y=l.normal.y>0?e.max.y:e.min.y,Rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pv extends Ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vc=new j,kc=new j,l_=new $e,Fo=new sv,Cc=new Wc,wh=new j,c_=new j;class Ky extends Ln{constructor(e=new xi,i=new pv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Vc.fromBufferAttribute(i,l-1),kc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Vc.distanceTo(kc);e.setAttribute("lineDistance",new Bn(s,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,e.ray.intersectsSphere(Cc)===!1)return;l_.copy(l).invert(),Fo.copy(e.ray).applyMatrix4(l_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,S=s.attributes.position;if(_!==null){const M=Math.max(0,h.start),R=Math.min(_.count,h.start+h.count);for(let C=M,y=R-1;C<y;C+=p){const x=_.getX(C),U=_.getX(C+1),D=wc(this,e,Fo,m,x,U,C);D&&i.push(D)}if(this.isLineLoop){const C=_.getX(R-1),y=_.getX(M),x=wc(this,e,Fo,m,C,y,R-1);x&&i.push(x)}}else{const M=Math.max(0,h.start),R=Math.min(S.count,h.start+h.count);for(let C=M,y=R-1;C<y;C+=p){const x=wc(this,e,Fo,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=wc(this,e,Fo,m,R-1,M,R-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function wc(o,e,i,s,l,c,h){const d=o.geometry.attributes.position;if(Vc.fromBufferAttribute(d,l),kc.fromBufferAttribute(d,c),i.distanceSqToSegment(Vc,kc,wh,c_)>s)return;wh.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(wh);if(!(p<e.near||p>e.far))return{distance:p,point:c_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const u_=new j,f_=new j;class jy extends Ky{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)u_.fromBufferAttribute(i,l),f_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+u_.distanceTo(f_);e.setAttribute("lineDistance",new Bn(s,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ko extends Gn{constructor(e,i,s=Xi,l,c,h,d=Un,m=Un,p,_=ya,v=1){if(_!==ya&&_!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Zy extends Ko{constructor(e,i=Xi,s=Ls,l,c,h=Un,d=Un,m,p=ya){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,i,s,l,c,h,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mv extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qd extends xi{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),_(),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(c.slice(),3)),this.setAttribute("uv",new Bn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(U){const D=new j,L=new j,z=new j;for(let I=0;I<i.length;I+=3)M(i[I+0],D),M(i[I+1],L),M(i[I+2],z),m(D,L,z,U)}function m(U,D,L,z){const I=z+1,P=[];for(let W=0;W<=I;W++){P[W]=[];const T=U.clone().lerp(L,W/I),w=D.clone().lerp(L,W/I),V=I-W;for(let et=0;et<=V;et++)et===0&&W===I?P[W][et]=T:P[W][et]=T.clone().lerp(w,et/V)}for(let W=0;W<I;W++)for(let T=0;T<2*(I-W)-1;T++){const w=Math.floor(T/2);T%2===0?(S(P[W][w+1]),S(P[W+1][w]),S(P[W][w])):(S(P[W][w+1]),S(P[W+1][w+1]),S(P[W+1][w]))}}function p(U){const D=new j;for(let L=0;L<c.length;L+=3)D.x=c[L+0],D.y=c[L+1],D.z=c[L+2],D.normalize().multiplyScalar(U),c[L+0]=D.x,c[L+1]=D.y,c[L+2]=D.z}function _(){const U=new j;for(let D=0;D<c.length;D+=3){U.x=c[D+0],U.y=c[D+1],U.z=c[D+2];const L=y(U)/2/Math.PI+.5,z=x(U)/Math.PI+.5;h.push(L,1-z)}R(),v()}function v(){for(let U=0;U<h.length;U+=6){const D=h[U+0],L=h[U+2],z=h[U+4],I=Math.max(D,L,z),P=Math.min(D,L,z);I>.9&&P<.1&&(D<.2&&(h[U+0]+=1),L<.2&&(h[U+2]+=1),z<.2&&(h[U+4]+=1))}}function S(U){c.push(U.x,U.y,U.z)}function M(U,D){const L=U*3;D.x=e[L+0],D.y=e[L+1],D.z=e[L+2]}function R(){const U=new j,D=new j,L=new j,z=new j,I=new Ee,P=new Ee,W=new Ee;for(let T=0,w=0;T<c.length;T+=9,w+=6){U.set(c[T+0],c[T+1],c[T+2]),D.set(c[T+3],c[T+4],c[T+5]),L.set(c[T+6],c[T+7],c[T+8]),I.set(h[w+0],h[w+1]),P.set(h[w+2],h[w+3]),W.set(h[w+4],h[w+5]),z.copy(U).add(D).add(L).divideScalar(3);const V=y(z);C(I,w+0,U,V),C(P,w+2,D,V),C(W,w+4,L,V)}}function C(U,D,L,z){z<0&&U.x===1&&(h[D]=U.x-1),L.x===0&&L.z===0&&(h[D]=z/2/Math.PI+.5)}function y(U){return Math.atan2(U.z,-U.x)}function x(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.vertices,e.indices,e.radius,e.detail)}}class Yd extends qd{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Yd(e.radius,e.detail)}}class Jo extends xi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,v=e/d,S=i/m,M=[],R=[],C=[],y=[];for(let x=0;x<_;x++){const U=x*S-h;for(let D=0;D<p;D++){const L=D*v-c;R.push(L,-U,0),C.push(0,0,1),y.push(D/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let U=0;U<d;U++){const D=U+p*x,L=U+p*(x+1),z=U+1+p*(x+1),I=U+1+p*x;M.push(D,L,I),M.push(L,z,I)}this.setIndex(M),this.setAttribute("position",new Bn(R,3)),this.setAttribute("normal",new Bn(C,3)),this.setAttribute("uv",new Bn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qy extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ic extends Ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nv,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jy extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $y extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gv extends Ln{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Dh=new $e,h_=new j,d_=new j;class tM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wd,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;h_.setFromMatrixPosition(e.matrixWorld),i.position.copy(h_),d_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(d_),i.updateMatrixWorld(),Dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kd extends fv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class eM extends tM{constructor(){super(new Kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nM extends gv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new eM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class iM extends gv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class aM extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sM extends jy{constructor(e=10,i=10,s=4473924,l=8947848){s=new xe(s),l=new xe(l);const c=i/2,h=e/i,d=e/2,m=[],p=[];for(let S=0,M=0,R=-d;S<=i;S++,R+=h){m.push(-d,0,R,d,0,R),m.push(R,0,-d,R,0,d);const C=S===c?s:l;C.toArray(p,M),M+=3,C.toArray(p,M),M+=3,C.toArray(p,M),M+=3,C.toArray(p,M),M+=3}const _=new xi;_.setAttribute("position",new Bn(m,3)),_.setAttribute("color",new Bn(p,3));const v=new pv({vertexColors:!0,toneMapped:!1});super(_,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function p_(o,e,i,s){const l=rM(s);switch(i){case $_:return o*e;case ev:return o*e/l.components*l.byteLength;case Id:return o*e/l.components*l.byteLength;case Nr:return o*e*2/l.components*l.byteLength;case Bd:return o*e*2/l.components*l.byteLength;case tv:return o*e*3/l.components*l.byteLength;case Ui:return o*e*4/l.components*l.byteLength;case Fd:return o*e*4/l.components*l.byteLength;case Nc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Jh:case td:return Math.max(o,16)*Math.max(e,8)/4;case Qh:case $h:return Math.max(o,8)*Math.max(e,8)/2;case ed:case nd:case ad:case sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case id:case rd:case od:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ld:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ud:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case dd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case pd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case md:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case gd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case _d:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case vd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case yd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Md:case Ed:case Td:return Math.ceil(o/4)*Math.ceil(e/4)*16;case bd:case Ad:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Rd:case Cd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rM(o){switch(o){case si:case j_:return{byteLength:1,components:1};case Wo:case Z_:case Sa:return{byteLength:2,components:1};case Pd:case zd:return{byteLength:2,components:4};case Xi:case Od:case Fi:return{byteLength:4,components:1};case Q_:case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _v(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function oM(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const _=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,_);else{v.sort((M,R)=>M.start-R.start);let S=0;for(let M=1;M<v.length;M++){const R=v[S],C=v[M];C.start<=R.start+R.count+1?R.count=Math.max(R.count,C.start+C.count-R.start):(++S,v[S]=C)}v.length=S+1;for(let M=0,R=v.length;M<R;M++){const C=v[M];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
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
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
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
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
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
#endif`,_M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yM=`#ifdef USE_IRIDESCENCE
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
#endif`,MM=`#ifdef USE_BUMPMAP
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UM=`#define PI 3.141592653589793
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
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NM=`vec3 transformedNormal = objectNormal;
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
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",FM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,kM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jM=`#ifdef USE_GRADIENTMAP
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
}`,ZM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$M=`uniform bool receiveShadow;
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
#endif`,tE=`#ifdef USE_ENVMAP
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
#endif`,eE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sE=`PhysicalMaterial material;
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
#endif`,rE=`uniform sampler2D dfgLUT;
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
}`,oE=`
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
#endif`,lE=`#if defined( RE_IndirectDiffuse )
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
#endif`,cE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_E=`#if defined( USE_POINTS_UV )
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
#endif`,vE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ME=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`#ifdef USE_MORPHTARGETS
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
#endif`,TE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DE=`#ifdef USE_NORMALMAP
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
#endif`,UE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qE=`float getShadowMask() {
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
}`,YE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KE=`#ifdef USE_SKINNING
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
#endif`,jE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZE=`#ifdef USE_SKINNING
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
#endif`,QE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eT=`#ifdef USE_TRANSMISSION
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
#endif`,nT=`#ifdef USE_TRANSMISSION
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lT=`uniform sampler2D t2D;
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
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`#include <common>
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
}`,pT=`#if DEPTH_PACKING == 3200
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
}`,mT=`#define DISTANCE
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
}`,gT=`#define DISTANCE
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
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`uniform float scale;
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
}`,ST=`uniform vec3 diffuse;
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
}`,yT=`#include <common>
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
}`,MT=`uniform vec3 diffuse;
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
}`,ET=`#define LAMBERT
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
}`,TT=`#define LAMBERT
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
}`,bT=`#define MATCAP
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
}`,AT=`#define MATCAP
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
}`,RT=`#define NORMAL
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
}`,CT=`#define NORMAL
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
}`,wT=`#define PHONG
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
}`,DT=`#define PHONG
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
}`,UT=`#define STANDARD
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
}`,LT=`#define STANDARD
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
}`,NT=`#define TOON
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
}`,OT=`#define TOON
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
}`,PT=`uniform float size;
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
}`,zT=`uniform vec3 diffuse;
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
}`,IT=`#include <common>
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
}`,BT=`uniform vec3 color;
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
}`,FT=`uniform float rotation;
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
}`,HT=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:fM,alphatest_fragment:hM,alphatest_pars_fragment:dM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:_M,begin_vertex:vM,beginnormal_vertex:xM,bsdfs:SM,iridescence_fragment:yM,bumpmap_pars_fragment:MM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:bM,clipping_planes_vertex:AM,color_fragment:RM,color_pars_fragment:CM,color_pars_vertex:wM,color_vertex:DM,common:UM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:NM,displacementmap_pars_vertex:OM,displacementmap_vertex:PM,emissivemap_fragment:zM,emissivemap_pars_fragment:IM,colorspace_fragment:BM,colorspace_pars_fragment:FM,envmap_fragment:HM,envmap_common_pars_fragment:GM,envmap_pars_fragment:VM,envmap_pars_vertex:kM,envmap_physical_pars_fragment:tE,envmap_vertex:XM,fog_vertex:WM,fog_pars_vertex:qM,fog_fragment:YM,fog_pars_fragment:KM,gradientmap_pars_fragment:jM,lightmap_pars_fragment:ZM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:JM,lights_pars_begin:$M,lights_toon_fragment:eE,lights_toon_pars_fragment:nE,lights_phong_fragment:iE,lights_phong_pars_fragment:aE,lights_physical_fragment:sE,lights_physical_pars_fragment:rE,lights_fragment_begin:oE,lights_fragment_maps:lE,lights_fragment_end:cE,logdepthbuf_fragment:uE,logdepthbuf_pars_fragment:fE,logdepthbuf_pars_vertex:hE,logdepthbuf_vertex:dE,map_fragment:pE,map_pars_fragment:mE,map_particle_fragment:gE,map_particle_pars_fragment:_E,metalnessmap_fragment:vE,metalnessmap_pars_fragment:xE,morphinstance_vertex:SE,morphcolor_vertex:yE,morphnormal_vertex:ME,morphtarget_pars_vertex:EE,morphtarget_vertex:TE,normal_fragment_begin:bE,normal_fragment_maps:AE,normal_pars_fragment:RE,normal_pars_vertex:CE,normal_vertex:wE,normalmap_pars_fragment:DE,clearcoat_normal_fragment_begin:UE,clearcoat_normal_fragment_maps:LE,clearcoat_pars_fragment:NE,iridescence_pars_fragment:OE,opaque_fragment:PE,packing:zE,premultiplied_alpha_fragment:IE,project_vertex:BE,dithering_fragment:FE,dithering_pars_fragment:HE,roughnessmap_fragment:GE,roughnessmap_pars_fragment:VE,shadowmap_pars_fragment:kE,shadowmap_pars_vertex:XE,shadowmap_vertex:WE,shadowmask_pars_fragment:qE,skinbase_vertex:YE,skinning_pars_vertex:KE,skinning_vertex:jE,skinnormal_vertex:ZE,specularmap_fragment:QE,specularmap_pars_fragment:JE,tonemapping_fragment:$E,tonemapping_pars_fragment:tT,transmission_fragment:eT,transmission_pars_fragment:nT,uv_pars_fragment:iT,uv_pars_vertex:aT,uv_vertex:sT,worldpos_vertex:rT,background_vert:oT,background_frag:lT,backgroundCube_vert:cT,backgroundCube_frag:uT,cube_vert:fT,cube_frag:hT,depth_vert:dT,depth_frag:pT,distance_vert:mT,distance_frag:gT,equirect_vert:_T,equirect_frag:vT,linedashed_vert:xT,linedashed_frag:ST,meshbasic_vert:yT,meshbasic_frag:MT,meshlambert_vert:ET,meshlambert_frag:TT,meshmatcap_vert:bT,meshmatcap_frag:AT,meshnormal_vert:RT,meshnormal_frag:CT,meshphong_vert:wT,meshphong_frag:DT,meshphysical_vert:UT,meshphysical_frag:LT,meshtoon_vert:NT,meshtoon_frag:OT,points_vert:PT,points_frag:zT,shadow_vert:IT,shadow_frag:BT,sprite_vert:FT,sprite_frag:HT},Nt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Hn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Hn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Hn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new xe(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Hn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Hn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Hn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Hn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Hn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Hn([Nt.common,Nt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Hn([Nt.lights,Nt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Dc={r:0,b:0,g:0},bs=new Wi,GT=new $e;function VT(o,e,i,s,l,c,h){const d=new xe(0);let m=c===!0?0:1,p,_,v=null,S=0,M=null;function R(D){let L=D.isScene===!0?D.background:null;return L&&L.isTexture&&(L=(D.backgroundBlurriness>0?i:e).get(L)),L}function C(D){let L=!1;const z=R(D);z===null?x(d,m):z&&z.isColor&&(x(z,1),L=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(D,L){const z=R(L);z&&(z.isCubeTexture||z.mapping===Xc)?(_===void 0&&(_=new Ye(new pn(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Pr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,P,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),bs.copy(L.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(GT.makeRotationFromEuler(bs)),_.material.toneMapped=be.getTransfer(z.colorSpace)!==He,(v!==z||S!==z.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,v=z,S=z.version,M=o.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Ye(new Jo(2,2),new qi({name:"BackgroundMaterial",uniforms:Pr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=be.getTransfer(z.colorSpace)!==He,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||S!==z.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,v=z,S=z.version,M=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function x(D,L){D.getRGB(Dc,uv(o)),s.buffers.color.setClear(Dc.r,Dc.g,Dc.b,L,h)}function U(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,L=1){d.set(D),m=L,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,x(d,m)},render:C,addToRenderList:y,dispose:U}}function kT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(w,V,et,st,dt){let ut=!1;const B=v(st,et,V);c!==B&&(c=B,p(c.object)),ut=M(w,st,et,dt),ut&&R(w,st,et,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,L(w,V,et,st),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function v(w,V,et){const st=et.wireframe===!0;let dt=s[w.id];dt===void 0&&(dt={},s[w.id]=dt);let ut=dt[V.id];ut===void 0&&(ut={},dt[V.id]=ut);let B=ut[st];return B===void 0&&(B=S(m()),ut[st]=B),B}function S(w){const V=[],et=[],st=[];for(let dt=0;dt<i;dt++)V[dt]=0,et[dt]=0,st[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:et,attributeDivisors:st,object:w,attributes:{},index:null}}function M(w,V,et,st){const dt=c.attributes,ut=V.attributes;let B=0;const H=et.getAttributes();for(const at in H)if(H[at].location>=0){const xt=dt[at];let O=ut[at];if(O===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),xt===void 0||xt.attribute!==O||O&&xt.data!==O.data)return!0;B++}return c.attributesNum!==B||c.index!==st}function R(w,V,et,st){const dt={},ut=V.attributes;let B=0;const H=et.getAttributes();for(const at in H)if(H[at].location>=0){let xt=ut[at];xt===void 0&&(at==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),at==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const O={};O.attribute=xt,xt&&xt.data&&(O.data=xt.data),dt[at]=O,B++}c.attributes=dt,c.attributesNum=B,c.index=st}function C(){const w=c.newAttributes;for(let V=0,et=w.length;V<et;V++)w[V]=0}function y(w){x(w,0)}function x(w,V){const et=c.newAttributes,st=c.enabledAttributes,dt=c.attributeDivisors;et[w]=1,st[w]===0&&(o.enableVertexAttribArray(w),st[w]=1),dt[w]!==V&&(o.vertexAttribDivisor(w,V),dt[w]=V)}function U(){const w=c.newAttributes,V=c.enabledAttributes;for(let et=0,st=V.length;et<st;et++)V[et]!==w[et]&&(o.disableVertexAttribArray(et),V[et]=0)}function D(w,V,et,st,dt,ut,B){B===!0?o.vertexAttribIPointer(w,V,et,dt,ut):o.vertexAttribPointer(w,V,et,st,dt,ut)}function L(w,V,et,st){C();const dt=st.attributes,ut=et.getAttributes(),B=V.defaultAttributeValues;for(const H in ut){const at=ut[H];if(at.location>=0){let yt=dt[H];if(yt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const xt=yt.normalized,O=yt.itemSize,it=e.get(yt);if(it===void 0)continue;const gt=it.buffer,bt=it.type,Bt=it.bytesPerElement,nt=bt===o.INT||bt===o.UNSIGNED_INT||yt.gpuType===Od;if(yt.isInterleavedBufferAttribute){const ct=yt.data,wt=ct.stride,kt=yt.offset;if(ct.isInstancedInterleavedBuffer){for(let Ht=0;Ht<at.locationSize;Ht++)x(at.location+Ht,ct.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Ht=0;Ht<at.locationSize;Ht++)y(at.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Ht=0;Ht<at.locationSize;Ht++)D(at.location+Ht,O/at.locationSize,bt,xt,wt*Bt,(kt+O/at.locationSize*Ht)*Bt,nt)}else{if(yt.isInstancedBufferAttribute){for(let ct=0;ct<at.locationSize;ct++)x(at.location+ct,yt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ct=0;ct<at.locationSize;ct++)y(at.location+ct);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ct=0;ct<at.locationSize;ct++)D(at.location+ct,O/at.locationSize,bt,xt,O*Bt,O/at.locationSize*ct*Bt,nt)}}else if(B!==void 0){const xt=B[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(at.location,xt);break;case 3:o.vertexAttrib3fv(at.location,xt);break;case 4:o.vertexAttrib4fv(at.location,xt);break;default:o.vertexAttrib1fv(at.location,xt)}}}}U()}function z(){W();for(const w in s){const V=s[w];for(const et in V){const st=V[et];for(const dt in st)_(st[dt].object),delete st[dt];delete V[et]}delete s[w]}}function I(w){if(s[w.id]===void 0)return;const V=s[w.id];for(const et in V){const st=V[et];for(const dt in st)_(st[dt].object),delete st[dt];delete V[et]}delete s[w.id]}function P(w){for(const V in s){const et=s[V];if(et[w.id]===void 0)continue;const st=et[w.id];for(const dt in st)_(st[dt].object),delete st[dt];delete et[w.id]}}function W(){T(),h=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:T,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:U}}function XT(o,e,i){let s;function l(p){s=p}function c(p,_){o.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,v){v!==0&&(o.drawArraysInstanced(s,p,_,v),i.update(_,s,v))}function d(p,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,v);let M=0;for(let R=0;R<v;R++)M+=_[R];i.update(M,s,1)}function m(p,_,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let R=0;R<p.length;R++)h(p[R],_[R],S[R]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,v);let R=0;for(let C=0;C<v;C++)R+=_[C]*S[C];i.update(R,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function WT(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Ui&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const W=P===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==si&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Fi&&!W)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ie("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:R,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:U,maxVaryings:D,maxFragmentUniforms:L,maxSamples:z,samples:I}}function qT(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Rs,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||s!==0||l;return l=S,s=v.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){i=_(v,S,0)},this.setState=function(v,S,M){const R=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,x=o.get(v);if(!l||R===null||R.length===0||c&&!y)c?_(null):p();else{const U=c?0:s,D=U*4;let L=x.clippingState||null;m.value=L,L=_(R,S,D,M);for(let z=0;z!==D;++z)L[z]=i[z];x.clippingState=L,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(v,S,M,R){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=m.value,R!==!0||y===null){const x=M+C*4,U=S.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,L=M;D!==C;++D,L+=4)h.copy(v[D]).applyMatrix4(U,d),h.normal.toArray(y,L),y[L+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function YT(o){let e=new WeakMap;function i(h,d){return d===Yh?h.mapping=Ls:d===Kh&&(h.mapping=Lr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Yh||d===Kh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new dv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const es=4,m_=[.125,.215,.35,.446,.526,.582],ws=20,KT=256,Ho=new Kd,g_=new xe;let Uh=null,Lh=0,Nh=0,Oh=!1;const jT=new j;class __{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=jT}=c;Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=x_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Lh,Nh),this._renderer.xr.enabled=Oh,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ls||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Sa,format:Ui,colorSpace:Or,depthBuffer:!1},l=v_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=v_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZT(c)),this._blurMaterial=JT(c,e,i),this._ggxMaterial=QT(c,e,i)}return l}_compileMaterial(e){const i=new Ye(new xi,e);this._renderer.compile(i,Ho)}_sceneToCubeUV(e,i,s,l,c){const m=new vi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(g_),v.toneMapping=Gi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ye(new pn,new kd({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,x=!0):(y.color.copy(g_),x=!0);for(let D=0;D<6;D++){const L=D%3;L===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[D],c.y,c.z)):L===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[D]));const z=this._cubeSize;Cr(l,L*z,D>2?z:0,z,z),v.setRenderTarget(l),x&&v.render(C,m),v.render(e,m)}v.toneMapping=M,v.autoClear=S,e.background=U}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ls||e.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=S_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=x_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Cr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ho)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-_*_),S=0+p*1.25,M=v*S,{_lodMax:R}=this,C=this._sizeLods[s],y=3*C*(s>R-es?s-R+es:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=R-i,Cr(c,y,x,3*C,2*C),l.setRenderTarget(c),l.render(d,Ho),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=R-s,Cr(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(d,Ho)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[l];v.material=p;const S=p.uniforms,M=this._sizeLods[s]-1,R=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ws-1),C=c/R,y=isFinite(c)?1+Math.floor(_*C):ws;y>ws&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ws}`);const x=[];let U=0;for(let P=0;P<ws;++P){const W=P/C,T=Math.exp(-W*W/2);x.push(T),P===0?U+=T:P<y&&(U+=2*T)}for(let P=0;P<x.length;P++)x[P]=x[P]/U;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=R,S.mipInt.value=D-s;const L=this._sizeLods[l],z=3*L*(l>D-es?l-D+es:0),I=4*(this._cubeSize-L);Cr(i,z,I,3*L,2*L),m.setRenderTarget(i),m.render(v,Ho)}}function ZT(o){const e=[],i=[],s=[];let l=o;const c=o-es+1+m_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-es?m=m_[h-o+es-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,v=1+p,S=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,R=6,C=3,y=2,x=1,U=new Float32Array(C*R*M),D=new Float32Array(y*R*M),L=new Float32Array(x*R*M);for(let I=0;I<M;I++){const P=I%3*2/3-1,W=I>2?0:-1,T=[P,W,0,P+2/3,W,0,P+2/3,W+1,0,P,W,0,P+2/3,W+1,0,P,W+1,0];U.set(T,C*R*I),D.set(S,y*R*I);const w=[I,I,I,I,I,I];L.set(w,x*R*I)}const z=new xi;z.setAttribute("position",new ki(U,C)),z.setAttribute("uv",new ki(D,y)),z.setAttribute("faceIndex",new ki(L,x)),s.push(new Ye(z,null)),l>es&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function v_(o,e,i){const s=new Vi(o,e,i);return s.texture.mapping=Xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function QT(o,e,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function JT(o,e,i){const s=new Float32Array(ws),l=new j(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qc(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function x_(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function S_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function $T(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Yh||m===Kh,_=m===Ls||m===Lr;if(p||_){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new __(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new __(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function tb(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Yo("WebGLRenderer: "+s+" extension not supported."),l}}}function eb(o,e,i,s){const l={},c=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const R in S.attributes)e.remove(S.attributes[R]);S.removeEventListener("dispose",h),delete l[S.id];const M=c.get(S);M&&(e.remove(M),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(v){const S=[],M=v.index,R=v.attributes.position;let C=0;if(M!==null){const U=M.array;C=M.version;for(let D=0,L=U.length;D<L;D+=3){const z=U[D+0],I=U[D+1],P=U[D+2];S.push(z,I,I,P,P,z)}}else if(R!==void 0){const U=R.array;C=R.version;for(let D=0,L=U.length/3-1;D<L;D+=3){const z=D+0,I=D+1,P=D+2;S.push(z,I,I,P,P,z)}}else return;const y=new(iv(S)?cv:lv)(S,1);y.version=C;const x=c.get(v);x&&e.remove(x),c.set(v,y)}function _(v){const S=c.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:_}}function nb(o,e,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,c,S*h),i.update(M,s,1)}function p(S,M,R){R!==0&&(o.drawElementsInstanced(s,M,c,S*h,R),i.update(M,s,R))}function _(S,M,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,S,0,R);let y=0;for(let x=0;x<R;x++)y+=M[x];i.update(y,s,1)}function v(S,M,R,C){if(R===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,M[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,S,0,C,0,R);let x=0;for(let U=0;U<R;U++)x+=M[U]*C[U];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function ib(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ab(o,e,i){const s=new WeakMap,l=new sn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==v){let w=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const R=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let L=0;R===!0&&(L=1),C===!0&&(L=2),y===!0&&(L=3);let z=d.attributes.position.count*L,I=1;z>e.maxTextureSize&&(I=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const P=new Float32Array(z*I*4*v),W=new av(P,z,I,v);W.type=Fi,W.needsUpdate=!0;const T=L*4;for(let V=0;V<v;V++){const et=x[V],st=U[V],dt=D[V],ut=z*I*4*V;for(let B=0;B<et.count;B++){const H=B*T;R===!0&&(l.fromBufferAttribute(et,B),P[ut+H+0]=l.x,P[ut+H+1]=l.y,P[ut+H+2]=l.z,P[ut+H+3]=0),C===!0&&(l.fromBufferAttribute(st,B),P[ut+H+4]=l.x,P[ut+H+5]=l.y,P[ut+H+6]=l.z,P[ut+H+7]=0),y===!0&&(l.fromBufferAttribute(dt,B),P[ut+H+8]=l.x,P[ut+H+9]=l.y,P[ut+H+10]=l.z,P[ut+H+11]=dt.itemSize===4?l.w:1)}}S={count:v,texture:W,size:new Ee(z,I)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const C=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function sb(o,e,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,v=e.get(m,_);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const rb={[G_]:"LINEAR_TONE_MAPPING",[V_]:"REINHARD_TONE_MAPPING",[k_]:"CINEON_TONE_MAPPING",[X_]:"ACES_FILMIC_TONE_MAPPING",[q_]:"AGX_TONE_MAPPING",[Y_]:"NEUTRAL_TONE_MAPPING",[W_]:"CUSTOM_TONE_MAPPING"};function ob(o,e,i,s,l){const c=new Vi(e,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Vi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),d=new xi;d.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Bn([0,2,0,0,2,0],2));const m=new Qy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ye(d,m),_=new Kd(-1,1,1,-1,0,1);let v=null,S=null,M=!1,R,C=null,y=[],x=!1;this.setSize=function(U,D){c.setSize(U,D),h.setSize(U,D);for(let L=0;L<y.length;L++){const z=y[L];z.setSize&&z.setSize(U,D)}},this.setEffects=function(U){y=U,x=y.length>0&&y[0].isRenderPass===!0;const D=c.width,L=c.height;for(let z=0;z<y.length;z++){const I=y[z];I.setSize&&I.setSize(D,L)}},this.begin=function(U,D){if(M||U.toneMapping===Gi&&y.length===0)return!1;if(C=D,D!==null){const L=D.width,z=D.height;(c.width!==L||c.height!==z)&&this.setSize(L,z)}return x===!1&&U.setRenderTarget(c),R=U.toneMapping,U.toneMapping=Gi,!0},this.hasRenderPass=function(){return x},this.end=function(U,D){U.toneMapping=R,M=!0;let L=c,z=h;for(let I=0;I<y.length;I++){const P=y[I];if(P.enabled!==!1&&(P.render(U,z,L,D),P.needsSwap!==!1)){const W=L;L=z,z=W}}if(v!==U.outputColorSpace||S!==U.toneMapping){v=U.outputColorSpace,S=U.toneMapping,m.defines={},be.getTransfer(v)===He&&(m.defines.SRGB_TRANSFER="");const I=rb[S];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,U.setRenderTarget(C),U.render(p,_),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const vv=new Gn,Dd=new Ko(1,1),xv=new av,Sv=new by,yv=new hv,y_=[],M_=[],E_=new Float32Array(16),T_=new Float32Array(9),b_=new Float32Array(4);function Br(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=y_[l];if(c===void 0&&(c=new Float32Array(l),y_[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function _n(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function vn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Yc(o,e){let i=M_[e];i===void 0&&(i=new Int32Array(e),M_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function lb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function cb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2fv(this.addr,e),vn(i,e)}}function ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;o.uniform3fv(this.addr,e),vn(i,e)}}function fb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4fv(this.addr,e),vn(i,e)}}function hb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;b_.set(s),o.uniformMatrix2fv(this.addr,!1,b_),vn(i,s)}}function db(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;T_.set(s),o.uniformMatrix3fv(this.addr,!1,T_),vn(i,s)}}function pb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;E_.set(s),o.uniformMatrix4fv(this.addr,!1,E_),vn(i,s)}}function mb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function gb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2iv(this.addr,e),vn(i,e)}}function _b(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3iv(this.addr,e),vn(i,e)}}function vb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4iv(this.addr,e),vn(i,e)}}function xb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2uiv(this.addr,e),vn(i,e)}}function yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3uiv(this.addr,e),vn(i,e)}}function Mb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4uiv(this.addr,e),vn(i,e)}}function Eb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Dd.compareFunction=i.isReversedDepthBuffer()?Gd:Hd,c=Dd):c=vv,i.setTexture2D(e||c,l)}function Tb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Sv,l)}function bb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||yv,l)}function Ab(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||xv,l)}function Rb(o){switch(o){case 5126:return lb;case 35664:return cb;case 35665:return ub;case 35666:return fb;case 35674:return hb;case 35675:return db;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return _b;case 35669:case 35673:return vb;case 5125:return xb;case 36294:return Sb;case 36295:return yb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return Ab}}function Cb(o,e){o.uniform1fv(this.addr,e)}function wb(o,e){const i=Br(e,this.size,2);o.uniform2fv(this.addr,i)}function Db(o,e){const i=Br(e,this.size,3);o.uniform3fv(this.addr,i)}function Ub(o,e){const i=Br(e,this.size,4);o.uniform4fv(this.addr,i)}function Lb(o,e){const i=Br(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Nb(o,e){const i=Br(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Ob(o,e){const i=Br(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Pb(o,e){o.uniform1iv(this.addr,e)}function zb(o,e){o.uniform2iv(this.addr,e)}function Ib(o,e){o.uniform3iv(this.addr,e)}function Bb(o,e){o.uniform4iv(this.addr,e)}function Fb(o,e){o.uniform1uiv(this.addr,e)}function Hb(o,e){o.uniform2uiv(this.addr,e)}function Gb(o,e){o.uniform3uiv(this.addr,e)}function Vb(o,e){o.uniform4uiv(this.addr,e)}function kb(o,e,i){const s=this.cache,l=e.length,c=Yc(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Dd:h=vv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function Xb(o,e,i){const s=this.cache,l=e.length,c=Yc(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Sv,c[h])}function Wb(o,e,i){const s=this.cache,l=e.length,c=Yc(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||yv,c[h])}function qb(o,e,i){const s=this.cache,l=e.length,c=Yc(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||xv,c[h])}function Yb(o){switch(o){case 5126:return Cb;case 35664:return wb;case 35665:return Db;case 35666:return Ub;case 35674:return Lb;case 35675:return Nb;case 35676:return Ob;case 5124:case 35670:return Pb;case 35667:case 35671:return zb;case 35668:case 35672:return Ib;case 35669:case 35673:return Bb;case 5125:return Fb;case 36294:return Hb;case 36295:return Gb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return qb}}class Kb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Rb(i.type)}}class jb{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Yb(i.type)}}class Zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const Ph=/(\w+)(\])?(\[|\.)?/g;function A_(o,e){o.seq.push(e),o.map[e.id]=e}function Qb(o,e,i){const s=o.name,l=s.length;for(Ph.lastIndex=0;;){const c=Ph.exec(s),h=Ph.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){A_(i,p===void 0?new Kb(d,o,e):new jb(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new Zb(d),A_(i,v)),i=v}}}class Bc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);Qb(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function R_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const Jb=37297;let $b=0;function t1(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const C_=new ue;function e1(o){be._getMatrix(C_,be.workingColorSpace,o);const e=`mat3( ${C_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Fc:return[e,"LinearTransferOETF"];case He:return[e,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function w_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+t1(o.getShaderSource(e),d)}else return c}function n1(o,e){const i=e1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const i1={[G_]:"Linear",[V_]:"Reinhard",[k_]:"Cineon",[X_]:"ACESFilmic",[q_]:"AgX",[Y_]:"Neutral",[W_]:"Custom"};function a1(o,e){const i=i1[e];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new j;function s1(){be.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function o1(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function l1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Xo(o){return o!==""}function D_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(o){return o.replace(c1,f1)}const u1=new Map;function f1(o,e){let i=fe[e];if(i===void 0){const s=u1.get(e);if(s!==void 0)i=fe[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ud(i)}const h1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(o){return o.replace(h1,d1)}function d1(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function N_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const p1={[Lc]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function m1(o){return p1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g1={[Ls]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[Xc]:"ENVMAP_TYPE_CUBE_UV"};function _1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":g1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const v1={[Lr]:"ENVMAP_MODE_REFRACTION"};function x1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":v1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S1={[H_]:"ENVMAP_BLENDING_MULTIPLY",[ry]:"ENVMAP_BLENDING_MIX",[oy]:"ENVMAP_BLENDING_ADD"};function y1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":S1[o.combine]||"ENVMAP_BLENDING_NONE"}function M1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function E1(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=m1(i),p=_1(i),_=x1(i),v=y1(i),S=M1(i),M=r1(i),R=o1(c),C=l.createProgram();let y,x,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Xo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Xo).join(`
`),x.length>0&&(x+=`
`)):(y=[N_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),x=[N_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Gi?a1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,n1("linearToOutputTexel",i.outputColorSpace),s1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),h=Ud(h),h=D_(h,i),h=U_(h,i),d=Ud(d),d=D_(d,i),d=U_(d,i),h=L_(h),d=L_(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=U+y+h,L=U+x+d,z=R_(l,l.VERTEX_SHADER,D),I=R_(l,l.FRAGMENT_SHADER,L);l.attachShader(C,z),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(V){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(C)||"",st=l.getShaderInfoLog(z)||"",dt=l.getShaderInfoLog(I)||"",ut=et.trim(),B=st.trim(),H=dt.trim();let at=!0,yt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(at=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,z,I);else{const xt=w_(l,z,"vertex"),O=w_(l,I,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ut+`
`+xt+`
`+O)}else ut!==""?ie("WebGLProgram: Program Info Log:",ut):(B===""||H==="")&&(yt=!1);yt&&(V.diagnostics={runnable:at,programLog:ut,vertexShader:{log:B,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(z),l.deleteShader(I),W=new Bc(l,C),T=l1(l,C)}let W;this.getUniforms=function(){return W===void 0&&P(this),W};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,Jb)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$b++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=z,this.fragmentShader=I,this}let T1=0;class b1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new A1(e),i.set(e,s)),s}}class A1{constructor(e){this.id=T1++,this.code=e,this.usedTimes=0}}function R1(o,e,i,s,l,c,h){const d=new rv,m=new b1,p=new Set,_=[],v=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return p.add(T),T===0?"uv":`uv${T}`}function y(T,w,V,et,st){const dt=et.fog,ut=st.geometry,B=T.isMeshStandardMaterial?et.environment:null,H=(T.isMeshStandardMaterial?i:e).get(T.envMap||B),at=H&&H.mapping===Xc?H.image.height:null,yt=R[T.type];T.precision!==null&&(M=l.getMaxPrecision(T.precision),M!==T.precision&&ie("WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const xt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,O=xt!==void 0?xt.length:0;let it=0;ut.morphAttributes.position!==void 0&&(it=1),ut.morphAttributes.normal!==void 0&&(it=2),ut.morphAttributes.color!==void 0&&(it=3);let gt,bt,Bt,nt;if(yt){const Te=Bi[yt];gt=Te.vertexShader,bt=Te.fragmentShader}else gt=T.vertexShader,bt=T.fragmentShader,m.update(T),Bt=m.getVertexShaderID(T),nt=m.getFragmentShaderID(T);const ct=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),kt=st.isInstancedMesh===!0,Ht=st.isBatchedMesh===!0,he=!!T.map,tn=!!T.matcap,ge=!!H,de=!!T.aoMap,we=!!T.lightMap,re=!!T.bumpMap,en=!!T.normalMap,G=!!T.displacementMap,Ze=!!T.emissiveMap,Me=!!T.metalnessMap,Oe=!!T.roughnessMap,Yt=T.anisotropy>0,N=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,ht=T.sheen>0,vt=T.transmission>0,lt=Yt&&!!T.anisotropyMap,jt=N&&!!T.clearcoatMap,Rt=N&&!!T.clearcoatNormalMap,Xt=N&&!!T.clearcoatRoughnessMap,ee=q&&!!T.iridescenceMap,Mt=q&&!!T.iridescenceThicknessMap,Et=ht&&!!T.sheenColorMap,zt=ht&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Ct=!!T.specularColorMap,le=!!T.specularIntensityMap,X=vt&&!!T.transmissionMap,Ut=vt&&!!T.thicknessMap,Tt=!!T.gradientMap,Pt=!!T.alphaMap,St=T.alphaTest>0,_t=!!T.alphaHash,At=!!T.extensions;let ne=Gi;T.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ne=o.toneMapping);const ze={shaderID:yt,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:bt,defines:T.defines,customVertexShaderID:Bt,customFragmentShaderID:nt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:Ht,batchingColor:Ht&&st._colorsTexture!==null,instancing:kt,instancingColor:kt&&st.instanceColor!==null,instancingMorph:kt&&st.morphTexture!==null,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Or,alphaToCoverage:!!T.alphaToCoverage,map:he,matcap:tn,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:at,aoMap:de,lightMap:we,bumpMap:re,normalMap:en,displacementMap:G,emissiveMap:Ze,normalMapObjectSpace:en&&T.normalMapType===uy,normalMapTangentSpace:en&&T.normalMapType===nv,metalnessMap:Me,roughnessMap:Oe,anisotropy:Yt,anisotropyMap:lt,clearcoat:N,clearcoatMap:jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:q,iridescenceMap:ee,iridescenceThicknessMap:Mt,sheen:ht,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:le,transmission:vt,transmissionMap:X,thicknessMap:Ut,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===wr&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:_t,combine:T.combine,mapUv:he&&C(T.map.channel),aoMapUv:de&&C(T.aoMap.channel),lightMapUv:we&&C(T.lightMap.channel),bumpMapUv:re&&C(T.bumpMap.channel),normalMapUv:en&&C(T.normalMap.channel),displacementMapUv:G&&C(T.displacementMap.channel),emissiveMapUv:Ze&&C(T.emissiveMap.channel),metalnessMapUv:Me&&C(T.metalnessMap.channel),roughnessMapUv:Oe&&C(T.roughnessMap.channel),anisotropyMapUv:lt&&C(T.anisotropyMap.channel),clearcoatMapUv:jt&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:zt&&C(T.sheenRoughnessMap.channel),specularMapUv:Ot&&C(T.specularMap.channel),specularColorMapUv:Ct&&C(T.specularColorMap.channel),specularIntensityMapUv:le&&C(T.specularIntensityMap.channel),transmissionMapUv:X&&C(T.transmissionMap.channel),thicknessMapUv:Ut&&C(T.thicknessMap.channel),alphaMapUv:Pt&&C(T.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(en||Yt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ut.attributes.uv&&(he||Pt),fog:!!dt,useFog:T.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:wt,skinning:st.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:it,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:he&&T.map.isVideoTexture===!0&&be.getTransfer(T.map.colorSpace)===He,decodeVideoTextureEmissive:Ze&&T.emissiveMap.isVideoTexture===!0&&be.getTransfer(T.emissiveMap.colorSpace)===He,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ga,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:At&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&T.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function x(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)w.push(V),w.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(U(w,T),D(w,T),w.push(o.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function U(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function D(T,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),T.push(d.mask)}function L(T){const w=R[T.type];let V;if(w){const et=Bi[w];V=By.clone(et.uniforms)}else V=T.uniforms;return V}function z(T,w){let V=v.get(w);return V!==void 0?++V.usedTimes:(V=new E1(o,w,T,c),_.push(V),v.set(w,V)),V}function I(T){if(--T.usedTimes===0){const w=_.indexOf(T);_[w]=_[_.length-1],_.pop(),v.delete(T.cacheKey),T.destroy()}}function P(T){m.remove(T)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:L,acquireProgram:z,releaseProgram:I,releaseShaderCache:P,programs:_,dispose:W}}function C1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function w1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function O_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function P_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(v,S,M,R,C,y){let x=o[e];return x===void 0?(x={id:v.id,object:v,geometry:S,material:M,groupOrder:R,renderOrder:v.renderOrder,z:C,group:y},o[e]=x):(x.id=v.id,x.object=v,x.geometry=S,x.material=M,x.groupOrder=R,x.renderOrder=v.renderOrder,x.z=C,x.group=y),e++,x}function d(v,S,M,R,C,y){const x=h(v,S,M,R,C,y);M.transmission>0?s.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(v,S,M,R,C,y){const x=h(v,S,M,R,C,y);M.transmission>0?s.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(v,S){i.length>1&&i.sort(v||w1),s.length>1&&s.sort(S||O_),l.length>1&&l.sort(S||O_)}function _(){for(let v=e,S=o.length;v<S;v++){const M=o[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function D1(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new P_,o.set(s,[h])):l>=c.length?(h=new P_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function U1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new xe};break;case"SpotLight":i={position:new j,direction:new j,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=i,i}}}function L1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let N1=0;function O1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function P1(o){const e=new U1,i=L1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new $e,h=new $e;function d(p){let _=0,v=0,S=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let M=0,R=0,C=0,y=0,x=0,U=0,D=0,L=0,z=0,I=0,P=0;p.sort(O1);for(let T=0,w=p.length;T<w;T++){const V=p[T],et=V.color,st=V.intensity,dt=V.distance;let ut=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Nr?ut=V.shadow.map.texture:ut=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=et.r*st,v+=et.g*st,S+=et.b*st;else if(V.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(V.sh.coefficients[B],st);P++}else if(V.isDirectionalLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,at=i.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,s.directionalShadow[M]=at,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=V.shadow.matrix,U++}s.directional[M]=B,M++}else if(V.isSpotLight){const B=e.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(et).multiplyScalar(st),B.distance=dt,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,s.spot[C]=B;const H=V.shadow;if(V.map&&(s.spotLightMap[z]=V.map,z++,H.updateMatrices(V),V.castShadow&&I++),s.spotLightMatrix[C]=H.matrix,V.castShadow){const at=i.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,s.spotShadow[C]=at,s.spotShadowMap[C]=ut,L++}C++}else if(V.isRectAreaLight){const B=e.get(V);B.color.copy(et).multiplyScalar(st),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=B,y++}else if(V.isPointLight){const B=e.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const H=V.shadow,at=i.get(V);at.shadowIntensity=H.intensity,at.shadowBias=H.bias,at.shadowNormalBias=H.normalBias,at.shadowRadius=H.radius,at.shadowMapSize=H.mapSize,at.shadowCameraNear=H.camera.near,at.shadowCameraFar=H.camera.far,s.pointShadow[R]=at,s.pointShadowMap[R]=ut,s.pointShadowMatrix[R]=V.shadow.matrix,D++}s.point[R]=B,R++}else if(V.isHemisphereLight){const B=e.get(V);B.skyColor.copy(V.color).multiplyScalar(st),B.groundColor.copy(V.groundColor).multiplyScalar(st),s.hemi[x]=B,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=S;const W=s.hash;(W.directionalLength!==M||W.pointLength!==R||W.spotLength!==C||W.rectAreaLength!==y||W.hemiLength!==x||W.numDirectionalShadows!==U||W.numPointShadows!==D||W.numSpotShadows!==L||W.numSpotMaps!==z||W.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=R,s.hemi.length=x,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=L+z-I,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=P,W.directionalLength=M,W.pointLength=R,W.spotLength=C,W.rectAreaLength=y,W.hemiLength=x,W.numDirectionalShadows=U,W.numPointShadows=D,W.numSpotShadows=L,W.numSpotMaps=z,W.numLightProbes=P,s.version=N1++)}function m(p,_){let v=0,S=0,M=0,R=0,C=0;const y=_.matrixWorldInverse;for(let x=0,U=p.length;x<U;x++){const D=p[x];if(D.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),v++}else if(D.isSpotLight){const L=s.spot[M];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const L=s.rectArea[R];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),h.identity(),c.copy(D.matrixWorld),c.premultiply(y),h.extractRotation(c),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),R++}else if(D.isPointLight){const L=s.point[S];L.position.setFromMatrixPosition(D.matrixWorld),L.position.applyMatrix4(y),S++}else if(D.isHemisphereLight){const L=s.hemi[C];L.direction.setFromMatrixPosition(D.matrixWorld),L.direction.transformDirection(y),C++}}}return{setup:d,setupView:m,state:s}}function z_(o){const e=new P1(o),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function z1(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new z_(o),e.set(l,[d])):c>=h.length?(d=new z_(o),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const I1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B1=`uniform sampler2D shadow_pass;
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
}`,F1=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],H1=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],I_=new $e,Go=new j,zh=new j;function G1(o,e,i){let s=new Wd;const l=new Ee,c=new Ee,h=new sn,d=new Jy,m=new $y,p={},_=i.maxTextureSize,v={[ns]:jn,[jn]:ns,[ga]:ga},S=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:I1,fragmentShader:B1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const R=new xi;R.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ye(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let x=this.type;this.render=function(I,P,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===GS&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Lc);const T=o.getRenderTarget(),w=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),et=o.state;et.setBlending(va),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const st=x!==this.type;st&&P.traverse(function(dt){dt.material&&(Array.isArray(dt.material)?dt.material.forEach(ut=>ut.needsUpdate=!0):dt.material.needsUpdate=!0)});for(let dt=0,ut=I.length;dt<ut;dt++){const B=I[dt],H=B.shadow;if(H===void 0){ie("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const at=H.getFrameExtents();if(l.multiply(at),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/at.x),l.x=c.x*at.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/at.y),l.y=c.y*at.y,H.mapSize.y=c.y)),H.map===null||st===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ko){if(B.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vi(l.x,l.y,{format:Nr,type:Sa,minFilter:In,magFilter:In,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Ko(l.x,l.y,Fi),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=ya,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else{B.isPointLight?(H.map=new dv(l.x),H.map.depthTexture=new Zy(l.x,Xi)):(H.map=new Vi(l.x,l.y),H.map.depthTexture=new Ko(l.x,l.y,Xi)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=ya;const xt=o.state.buffers.depth.getReversed();this.type===Lc?(H.map.depthTexture.compareFunction=xt?Gd:Hd,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un)}H.camera.updateProjectionMatrix()}const yt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const O=H.getViewport(xt);h.set(c.x*O.x,c.y*O.y,c.x*O.z,c.y*O.w),et.viewport(h)}if(B.isPointLight){const O=H.camera,it=H.matrix,gt=B.distance||O.far;gt!==O.far&&(O.far=gt,O.updateProjectionMatrix()),Go.setFromMatrixPosition(B.matrixWorld),O.position.copy(Go),zh.copy(O.position),zh.add(F1[xt]),O.up.copy(H1[xt]),O.lookAt(zh),O.updateMatrixWorld(),it.makeTranslation(-Go.x,-Go.y,-Go.z),I_.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H._frustum.setFromProjectionMatrix(I_,O.coordinateSystem,O.reversedDepth)}else H.updateMatrices(B);s=H.getFrustum(),L(P,W,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===ko&&U(H,W),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(T,w,V)};function U(I,P){const W=e.update(C);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Vi(l.x,l.y,{format:Nr,type:Sa})),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(P,null,W,S,C,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(P,null,W,M,C,null)}function D(I,P,W,T){let w=null;const V=W.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)w=V;else if(w=W.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const et=w.uuid,st=P.uuid;let dt=p[et];dt===void 0&&(dt={},p[et]=dt);let ut=dt[st];ut===void 0&&(ut=w.clone(),dt[st]=ut,P.addEventListener("dispose",z)),w=ut}if(w.visible=P.visible,w.wireframe=P.wireframe,T===ko?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:v[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,W.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const et=o.properties.get(w);et.light=W}return w}function L(I,P,W,T,w){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&w===ko)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,I.matrixWorld);const st=e.update(I),dt=I.material;if(Array.isArray(dt)){const ut=st.groups;for(let B=0,H=ut.length;B<H;B++){const at=ut[B],yt=dt[at.materialIndex];if(yt&&yt.visible){const xt=D(I,yt,T,w);I.onBeforeShadow(o,I,P,W,st,xt,at),o.renderBufferDirect(W,null,st,xt,I,at),I.onAfterShadow(o,I,P,W,st,xt,at)}}}else if(dt.visible){const ut=D(I,dt,T,w);I.onBeforeShadow(o,I,P,W,st,ut,null),o.renderBufferDirect(W,null,st,ut,I,null),I.onAfterShadow(o,I,P,W,st,ut,null)}}const et=I.children;for(let st=0,dt=et.length;st<dt;st++)L(et[st],P,W,T,w)}function z(I){I.target.removeEventListener("dispose",z);for(const W in p){const T=p[W],w=I.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const V1={[Hh]:Gh,[Vh]:Wh,[kh]:qh,[Ur]:Xh,[Gh]:Hh,[Wh]:Vh,[qh]:kh,[Xh]:Ur};function k1(o,e){function i(){let X=!1;const Ut=new sn;let Tt=null;const Pt=new sn(0,0,0,0);return{setMask:function(St){Tt!==St&&!X&&(o.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){X=St},setClear:function(St,_t,At,ne,ze){ze===!0&&(St*=ne,_t*=ne,At*=ne),Ut.set(St,_t,At,ne),Pt.equals(Ut)===!1&&(o.clearColor(St,_t,At,ne),Pt.copy(Ut))},reset:function(){X=!1,Tt=null,Pt.set(-1,0,0,0)}}}function s(){let X=!1,Ut=!1,Tt=null,Pt=null,St=null;return{setReversed:function(_t){if(Ut!==_t){const At=e.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ne=St;St=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(_t){_t?ct(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!X&&(o.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Ut&&(_t=V1[_t]),Pt!==_t){switch(_t){case Hh:o.depthFunc(o.NEVER);break;case Gh:o.depthFunc(o.ALWAYS);break;case Vh:o.depthFunc(o.LESS);break;case Ur:o.depthFunc(o.LEQUAL);break;case kh:o.depthFunc(o.EQUAL);break;case Xh:o.depthFunc(o.GEQUAL);break;case Wh:o.depthFunc(o.GREATER);break;case qh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){St!==_t&&(Ut&&(_t=1-_t),o.clearDepth(_t),St=_t)},reset:function(){X=!1,Tt=null,Pt=null,St=null,Ut=!1}}}function l(){let X=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ne=null,ze=null;return{setTest:function(Te){X||(Te?ct(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Te){Ut!==Te&&!X&&(o.stencilMask(Te),Ut=Te)},setFunc:function(Te,Nn,Si){(Tt!==Te||Pt!==Nn||St!==Si)&&(o.stencilFunc(Te,Nn,Si),Tt=Te,Pt=Nn,St=Si)},setOp:function(Te,Nn,Si){(_t!==Te||At!==Nn||ne!==Si)&&(o.stencilOp(Te,Nn,Si),_t=Te,At=Nn,ne=Si)},setLocked:function(Te){X=Te},setClear:function(Te){ze!==Te&&(o.clearStencil(Te),ze=Te)},reset:function(){X=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ne=null,ze=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},v={},S=new WeakMap,M=[],R=null,C=!1,y=null,x=null,U=null,D=null,L=null,z=null,I=null,P=new xe(0,0,0),W=0,T=!1,w=null,V=null,et=null,st=null,dt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,H=0;const at=o.getParameter(o.VERSION);at.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(at)[1]),B=H>=1):at.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),B=H>=2);let yt=null,xt={};const O=o.getParameter(o.SCISSOR_BOX),it=o.getParameter(o.VIEWPORT),gt=new sn().fromArray(O),bt=new sn().fromArray(it);function Bt(X,Ut,Tt,Pt){const St=new Uint8Array(4),_t=o.createTexture();o.bindTexture(X,_t),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let At=0;At<Tt;At++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,St):o.texImage2D(Ut+At,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,St);return _t}const nt={};nt[o.TEXTURE_2D]=Bt(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Ur),re(!1),en(Ig),ct(o.CULL_FACE),de(va);function ct(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function wt(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function kt(X,Ut){return v[X]!==Ut?(o.bindFramebuffer(X,Ut),v[X]=Ut,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ut),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Ht(X,Ut){let Tt=M,Pt=!1;if(X){Tt=S.get(Ut),Tt===void 0&&(Tt=[],S.set(Ut,Tt));const St=X.textures;if(Tt.length!==St.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)Tt[_t]=o.COLOR_ATTACHMENT0+_t;Tt.length=St.length,Pt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Tt)}function he(X){return R!==X?(o.useProgram(X),R=X,!0):!1}const tn={[Cs]:o.FUNC_ADD,[kS]:o.FUNC_SUBTRACT,[XS]:o.FUNC_REVERSE_SUBTRACT};tn[WS]=o.MIN,tn[qS]=o.MAX;const ge={[YS]:o.ZERO,[KS]:o.ONE,[jS]:o.SRC_COLOR,[Bh]:o.SRC_ALPHA,[ey]:o.SRC_ALPHA_SATURATE,[$S]:o.DST_COLOR,[QS]:o.DST_ALPHA,[ZS]:o.ONE_MINUS_SRC_COLOR,[Fh]:o.ONE_MINUS_SRC_ALPHA,[ty]:o.ONE_MINUS_DST_COLOR,[JS]:o.ONE_MINUS_DST_ALPHA,[ny]:o.CONSTANT_COLOR,[iy]:o.ONE_MINUS_CONSTANT_COLOR,[ay]:o.CONSTANT_ALPHA,[sy]:o.ONE_MINUS_CONSTANT_ALPHA};function de(X,Ut,Tt,Pt,St,_t,At,ne,ze,Te){if(X===va){C===!0&&(wt(o.BLEND),C=!1);return}if(C===!1&&(ct(o.BLEND),C=!0),X!==VS){if(X!==y||Te!==T){if((x!==Cs||L!==Cs)&&(o.blendEquation(o.FUNC_ADD),x=Cs,L=Cs),Te)switch(X){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bg:o.blendFunc(o.ONE,o.ONE);break;case Fg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",X);break}else switch(X){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Fg:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hg:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",X);break}U=null,D=null,z=null,I=null,P.set(0,0,0),W=0,y=X,T=Te}return}St=St||Ut,_t=_t||Tt,At=At||Pt,(Ut!==x||St!==L)&&(o.blendEquationSeparate(tn[Ut],tn[St]),x=Ut,L=St),(Tt!==U||Pt!==D||_t!==z||At!==I)&&(o.blendFuncSeparate(ge[Tt],ge[Pt],ge[_t],ge[At]),U=Tt,D=Pt,z=_t,I=At),(ne.equals(P)===!1||ze!==W)&&(o.blendColor(ne.r,ne.g,ne.b,ze),P.copy(ne),W=ze),y=X,T=!1}function we(X,Ut){X.side===ga?wt(o.CULL_FACE):ct(o.CULL_FACE);let Tt=X.side===jn;Ut&&(Tt=!Tt),re(Tt),X.blending===wr&&X.transparent===!1?de(va):de(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Pt=X.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ze(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function en(X){X!==FS?(ct(o.CULL_FACE),X!==V&&(X===Ig?o.cullFace(o.BACK):X===HS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),V=X}function G(X){X!==et&&(B&&o.lineWidth(X),et=X)}function Ze(X,Ut,Tt){X?(ct(o.POLYGON_OFFSET_FILL),(st!==Ut||dt!==Tt)&&(o.polygonOffset(Ut,Tt),st=Ut,dt=Tt)):wt(o.POLYGON_OFFSET_FILL)}function Me(X){X?ct(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function Oe(X){X===void 0&&(X=o.TEXTURE0+ut-1),yt!==X&&(o.activeTexture(X),yt=X)}function Yt(X,Ut,Tt){Tt===void 0&&(yt===null?Tt=o.TEXTURE0+ut-1:Tt=yt);let Pt=xt[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[Tt]=Pt),(Pt.type!==X||Pt.texture!==Ut)&&(yt!==Tt&&(o.activeTexture(Tt),yt=Tt),o.bindTexture(X,Ut||nt[X]),Pt.type=X,Pt.texture=Ut)}function N(){const X=xt[yt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function ht(){try{o.texSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function vt(){try{o.texSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function lt(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Rt(){try{o.texStorage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Xt(){try{o.texStorage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function ee(){try{o.texImage2D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Mt(){try{o.texImage3D(...arguments)}catch(X){Ce("WebGLState:",X)}}function Et(X){gt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),gt.copy(X))}function zt(X){bt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),bt.copy(X))}function Ot(X,Ut){let Tt=p.get(Ut);Tt===void 0&&(Tt=new WeakMap,p.set(Ut,Tt));let Pt=Tt.get(X);Pt===void 0&&(Pt=o.getUniformBlockIndex(Ut,X.name),Tt.set(X,Pt))}function Ct(X,Ut){const Pt=p.get(Ut).get(X);m.get(Ut)!==Pt&&(o.uniformBlockBinding(Ut,Pt,X.__bindingPointIndex),m.set(Ut,Pt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},yt=null,xt={},v={},S=new WeakMap,M=[],R=null,C=!1,y=null,x=null,U=null,D=null,L=null,z=null,I=null,P=new xe(0,0,0),W=0,T=!1,w=null,V=null,et=null,st=null,dt=null,gt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ct,disable:wt,bindFramebuffer:kt,drawBuffers:Ht,useProgram:he,setBlending:de,setMaterial:we,setFlipSided:re,setCullFace:en,setLineWidth:G,setPolygonOffset:Ze,setScissorTest:Me,activeTexture:Oe,bindTexture:Yt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ee,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:jt,scissor:Et,viewport:zt,reset:le}}function X1(o,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ee,_=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(N,E){return M?new OffscreenCanvas(N,E):Gc("canvas")}function C(N,E,q){let ht=1;const vt=Yt(N);if((vt.width>q||vt.height>q)&&(ht=q/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const lt=Math.floor(ht*vt.width),jt=Math.floor(ht*vt.height);v===void 0&&(v=R(lt,jt));const Rt=E?R(lt,jt):v;return Rt.width=lt,Rt.height=jt,Rt.getContext("2d").drawImage(N,0,0,lt,jt),ie("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+jt+")."),Rt}else return"data"in N&&ie("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(N,E,q,ht,vt=!1){if(N!==null){if(o[N]!==void 0)return o[N];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt=E;if(E===o.RED&&(q===o.FLOAT&&(lt=o.R32F),q===o.HALF_FLOAT&&(lt=o.R16F),q===o.UNSIGNED_BYTE&&(lt=o.R8)),E===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(lt=o.R8UI),q===o.UNSIGNED_SHORT&&(lt=o.R16UI),q===o.UNSIGNED_INT&&(lt=o.R32UI),q===o.BYTE&&(lt=o.R8I),q===o.SHORT&&(lt=o.R16I),q===o.INT&&(lt=o.R32I)),E===o.RG&&(q===o.FLOAT&&(lt=o.RG32F),q===o.HALF_FLOAT&&(lt=o.RG16F),q===o.UNSIGNED_BYTE&&(lt=o.RG8)),E===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(lt=o.RG8UI),q===o.UNSIGNED_SHORT&&(lt=o.RG16UI),q===o.UNSIGNED_INT&&(lt=o.RG32UI),q===o.BYTE&&(lt=o.RG8I),q===o.SHORT&&(lt=o.RG16I),q===o.INT&&(lt=o.RG32I)),E===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(lt=o.RGB8UI),q===o.UNSIGNED_SHORT&&(lt=o.RGB16UI),q===o.UNSIGNED_INT&&(lt=o.RGB32UI),q===o.BYTE&&(lt=o.RGB8I),q===o.SHORT&&(lt=o.RGB16I),q===o.INT&&(lt=o.RGB32I)),E===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(lt=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(lt=o.RGBA16UI),q===o.UNSIGNED_INT&&(lt=o.RGBA32UI),q===o.BYTE&&(lt=o.RGBA8I),q===o.SHORT&&(lt=o.RGBA16I),q===o.INT&&(lt=o.RGBA32I)),E===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(lt=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(lt=o.R11F_G11F_B10F)),E===o.RGBA){const jt=vt?Fc:be.getTransfer(ht);q===o.FLOAT&&(lt=o.RGBA32F),q===o.HALF_FLOAT&&(lt=o.RGBA16F),q===o.UNSIGNED_BYTE&&(lt=jt===He?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(lt=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(lt=o.RGB5_A1)}return(lt===o.R16F||lt===o.R32F||lt===o.RG16F||lt===o.RG32F||lt===o.RGBA16F||lt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function L(N,E){let q;return N?E===null||E===Xi||E===qo?q=o.DEPTH24_STENCIL8:E===Fi?q=o.DEPTH32F_STENCIL8:E===Wo&&(q=o.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===qo?q=o.DEPTH_COMPONENT24:E===Fi?q=o.DEPTH_COMPONENT32F:E===Wo&&(q=o.DEPTH_COMPONENT16),q}function z(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Un&&N.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function I(N){const E=N.target;E.removeEventListener("dispose",I),W(E),E.isVideoTexture&&_.delete(E)}function P(N){const E=N.target;E.removeEventListener("dispose",P),w(E)}function W(N){const E=s.get(N);if(E.__webglInit===void 0)return;const q=N.source,ht=S.get(q);if(ht){const vt=ht[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&T(N),Object.keys(ht).length===0&&S.delete(q)}s.remove(N)}function T(N){const E=s.get(N);o.deleteTexture(E.__webglTexture);const q=N.source,ht=S.get(q);delete ht[E.__cacheKey],h.memory.textures--}function w(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let vt=0;vt<E.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=N.textures;for(let ht=0,vt=q.length;ht<vt;ht++){const lt=s.get(q[ht]);lt.__webglTexture&&(o.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove(q[ht])}s.remove(N)}let V=0;function et(){V=0}function st(){const N=V;return N>=l.maxTextures&&ie("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),V+=1,N}function dt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ut(N,E){const q=s.get(N);if(N.isVideoTexture&&Me(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const ht=N.image;if(ht===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(q,N,E);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+E)}function B(N,E){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){nt(q,N,E);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+E)}function H(N,E){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){nt(q,N,E);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+E)}function at(N,E){const q=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){ct(q,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+E)}const yt={[jh]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[Zh]:o.MIRRORED_REPEAT},xt={[Un]:o.NEAREST,[ly]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[ah]:o.LINEAR_MIPMAP_NEAREST,[Ds]:o.LINEAR_MIPMAP_LINEAR},O={[fy]:o.NEVER,[gy]:o.ALWAYS,[hy]:o.LESS,[Hd]:o.LEQUAL,[dy]:o.EQUAL,[Gd]:o.GEQUAL,[py]:o.GREATER,[my]:o.NOTEQUAL};function it(N,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===ah||E.magFilter===uc||E.magFilter===Ds||E.minFilter===In||E.minFilter===ah||E.minFilter===uc||E.minFilter===Ds)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,yt[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,yt[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,yt[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,xt[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==uc&&E.minFilter!==Ds||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function gt(N,E){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I));const ht=E.source;let vt=S.get(ht);vt===void 0&&(vt={},S.set(ht,vt));const lt=dt(E);if(lt!==N.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,q=!0),vt[lt].usedTimes++;const jt=vt[N.__cacheKey];jt!==void 0&&(vt[N.__cacheKey].usedTimes--,jt.usedTimes===0&&T(E)),N.__cacheKey=lt,N.__webglTexture=vt[lt].texture}return q}function bt(N,E,q){return Math.floor(Math.floor(N/q)/E)}function Bt(N,E,q,ht){const lt=N.updateRanges;if(lt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,q,ht,E.data);else{lt.sort((Mt,Et)=>Mt.start-Et.start);let jt=0;for(let Mt=1;Mt<lt.length;Mt++){const Et=lt[jt],zt=lt[Mt],Ot=Et.start+Et.count,Ct=bt(zt.start,E.width,4),le=bt(Et.start,E.width,4);zt.start<=Ot+1&&Ct===le&&bt(zt.start+zt.count-1,E.width,4)===Ct?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++jt,lt[jt]=zt)}lt.length=jt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Et=lt.length;Mt<Et;Mt++){const zt=lt[Mt],Ot=Math.floor(zt.start/4),Ct=Math.ceil(zt.count/4),le=Ot%E.width,X=Math.floor(Ot/E.width),Ut=Ct,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,le,X,Ut,Tt,q,ht,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function nt(N,E,q){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=gt(N,E),lt=E.source;i.bindTexture(ht,N.__webglTexture,o.TEXTURE0+q);const jt=s.get(lt);if(lt.version!==jt.__version||vt===!0){i.activeTexture(o.TEXTURE0+q);const Rt=be.getPrimaries(be.workingColorSpace),Xt=E.colorSpace===ts?null:be.getPrimaries(E.colorSpace),ee=E.colorSpace===ts||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Mt=C(E.image,!1,l.maxTextureSize);Mt=Oe(E,Mt);const Et=c.convert(E.format,E.colorSpace),zt=c.convert(E.type);let Ot=D(E.internalFormat,Et,zt,E.colorSpace,E.isVideoTexture);it(ht,E);let Ct;const le=E.mipmaps,X=E.isVideoTexture!==!0,Ut=jt.__version===void 0||vt===!0,Tt=lt.dataReady,Pt=z(E,Mt);if(E.isDepthTexture)Ot=L(E.format===Us,E.type),Ut&&(X?i.texStorage2D(o.TEXTURE_2D,1,Ot,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,null));else if(E.isDataTexture)if(le.length>0){X&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],X?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data);E.generateMipmaps=!1}else X?(Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height),Tt&&Bt(E,Mt,Et,zt)):i.texImage2D(o.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,le[0].width,le[0].height,Mt.depth);for(let St=0,_t=le.length;St<_t;St++)if(Ct=le[St],E.format!==Ui)if(Et!==null)if(X){if(Tt)if(E.layerUpdates.size>0){const At=p_(Ct.width,Ct.height,E.format,E.type);for(const ne of E.layerUpdates){const ze=Ct.data.subarray(ne*At/Ct.data.BYTES_PER_ELEMENT,(ne+1)*At/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,ne,Ct.width,Ct.height,1,Et,ze)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,zt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Et,zt,Ct.data)}else{X&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],E.format!==Ui?Et!==null?X?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data)}else if(E.isDataArrayTexture)if(X){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,Mt.width,Mt.height,Mt.depth),Tt)if(E.layerUpdates.size>0){const St=p_(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const At=Mt.data.subarray(_t*St/Mt.data.BYTES_PER_ELEMENT,(_t+1)*St/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,zt,At)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isData3DTexture)X?(Ut&&i.texStorage3D(o.TEXTURE_3D,Pt,Ot,Mt.width,Mt.height,Mt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isFramebufferTexture){if(Ut)if(X)i.texStorage2D(o.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height);else{let St=Mt.width,_t=Mt.height;for(let At=0;At<Pt;At++)i.texImage2D(o.TEXTURE_2D,At,Ot,St,_t,0,Et,zt,null),St>>=1,_t>>=1}}else if(le.length>0){if(X&&Ut){const St=Yt(le[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],X?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Et,zt,Ct):i.texImage2D(o.TEXTURE_2D,St,Ot,Et,zt,Ct);E.generateMipmaps=!1}else if(X){if(Ut){const St=Yt(Mt);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,zt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Ot,Et,zt,Mt);y(E)&&x(ht),jt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ct(N,E,q){if(E.image.length!==6)return;const ht=gt(N,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+q);const lt=s.get(vt);if(vt.version!==lt.__version||ht===!0){i.activeTexture(o.TEXTURE0+q);const jt=be.getPrimaries(be.workingColorSpace),Rt=E.colorSpace===ts?null:be.getPrimaries(E.colorSpace),Xt=E.colorSpace===ts||jt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!ee&&!Mt?Et[_t]=C(E.image[_t],!0,l.maxCubemapSize):Et[_t]=Mt?E.image[_t].image:E.image[_t],Et[_t]=Oe(E,Et[_t]);const zt=Et[0],Ot=c.convert(E.format,E.colorSpace),Ct=c.convert(E.type),le=D(E.internalFormat,Ot,Ct,E.colorSpace),X=E.isVideoTexture!==!0,Ut=lt.__version===void 0||ht===!0,Tt=vt.dataReady;let Pt=z(E,zt);it(o.TEXTURE_CUBE_MAP,E);let St;if(ee){X&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,le,zt.width,zt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ne=St[At];E.format!==Ui?Ot!==null?X?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Ot,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,ne.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Ot,Ct,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,Ot,Ct,ne.data)}}}else{if(St=E.mipmaps,X&&Ut){St.length>0&&Pt++;const _t=Yt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Ct,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Et[_t].width,Et[_t].height,0,Ot,Ct,Et[_t].data);for(let At=0;At<St.length;At++){const ze=St[At].image[_t].image;X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,ze.width,ze.height,Ot,Ct,ze.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,ze.width,ze.height,0,Ot,Ct,ze.data)}}else{X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Ct,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Ot,Ct,Et[_t]);for(let At=0;At<St.length;At++){const ne=St[At];X?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Ct,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Ot,Ct,ne.image[_t])}}}y(E)&&x(o.TEXTURE_CUBE_MAP),lt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function wt(N,E,q,ht,vt,lt){const jt=c.convert(q.format,q.colorSpace),Rt=c.convert(q.type),Xt=D(q.internalFormat,jt,Rt,q.colorSpace),ee=s.get(E),Mt=s.get(q);if(Mt.__renderTarget=E,!ee.__hasExternalTextures){const Et=Math.max(1,E.width>>lt),zt=Math.max(1,E.height>>lt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,Xt,Et,zt,E.depth,0,jt,Rt,null):i.texImage2D(vt,lt,Xt,Et,zt,0,jt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Ze(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,Mt.__webglTexture,0,G(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,Mt.__webglTexture,lt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(N,E,q){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const ht=E.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,lt=L(E.stencilBuffer,vt),jt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ze(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),lt,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),lt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,lt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,N)}else{const ht=E.textures;for(let vt=0;vt<ht.length;vt++){const lt=ht[vt],jt=c.convert(lt.format,lt.colorSpace),Rt=c.convert(lt.type),Xt=D(lt.internalFormat,jt,Rt,lt.colorSpace);Ze(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(E),Xt,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(E),Xt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(N,E,q){const ht=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),it(o.TEXTURE_CUBE_MAP,E.depthTexture);const ee=c.convert(E.depthTexture.format),Mt=c.convert(E.depthTexture.type);let Et;E.depthTexture.format===ya?Et=o.DEPTH_COMPONENT24:E.depthTexture.format===Us&&(Et=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,E.width,E.height,0,ee,Mt,null)}}else ut(E.depthTexture,0);const lt=vt.__webglTexture,jt=G(E),Rt=ht?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Xt=E.depthTexture.format===Us?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)Ze(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else if(E.depthTexture.format===Us)Ze(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,lt,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,lt,0);else throw new Error("Unknown depthTexture format")}function he(N){const E=s.get(N),q=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ht}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ht=0;ht<6;ht++)Ht(E.__webglFramebuffer[ht],N,ht);else{const ht=N.texture.mipmaps;ht&&ht.length>0?Ht(E.__webglFramebuffer[0],N,0):Ht(E.__webglFramebuffer,N,0)}else if(q){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),kt(E.__webglDepthbuffer[ht],N,!1);else{const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}else{const ht=N.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),kt(E.__webglDepthbuffer,N,!1);else{const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,lt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,lt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(N,E,q){const ht=s.get(N);E!==void 0&&wt(ht.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&he(N)}function ge(N){const E=N.texture,q=s.get(N),ht=s.get(E);N.addEventListener("dispose",P);const vt=N.textures,lt=N.isWebGLCubeRenderTarget===!0,jt=vt.length>1;if(jt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),lt){q.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)q.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else q.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)q.__webglFramebuffer[Rt]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=s.get(vt[Rt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Ze(N)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];q.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Rt]);const ee=c.convert(Xt.format,Xt.colorSpace),Mt=c.convert(Xt.type),Et=D(Xt.internalFormat,ee,Mt,Xt.colorSpace,N.isXRRenderTarget===!0),zt=G(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Et,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,q.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(lt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),it(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(q.__webglFramebuffer[Rt][Xt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else wt(q.__webglFramebuffer[Rt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(E)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=vt[Rt],Mt=s.get(ee);let Et=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Et=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),it(Et,ee),wt(q.__webglFramebuffer,N,ee,o.COLOR_ATTACHMENT0+Rt,Et,0),y(ee)&&x(Et)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),it(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(q.__webglFramebuffer[Xt],N,E,o.COLOR_ATTACHMENT0,Rt,Xt);else wt(q.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Rt,0);y(E)&&x(Rt),i.unbindTexture()}N.depthBuffer&&he(N)}function de(N){const E=N.textures;for(let q=0,ht=E.length;q<ht;q++){const vt=E[q];if(y(vt)){const lt=U(N),jt=s.get(vt).__webglTexture;i.bindTexture(lt,jt),x(lt),i.unbindTexture()}}}const we=[],re=[];function en(N){if(N.samples>0){if(Ze(N)===!1){const E=N.textures,q=N.width,ht=N.height;let vt=o.COLOR_BUFFER_BIT;const lt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=s.get(N),Rt=E.length>1;if(Rt)for(let ee=0;ee<E.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Xt=N.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const Mt=s.get(E[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,q,ht,0,0,q,ht,vt,o.NEAREST),m===!0&&(we.length=0,re.length=0,we.push(o.COLOR_ATTACHMENT0+ee),N.depthBuffer&&N.resolveDepthBuffer===!1&&(we.push(lt),re.push(lt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,re)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let ee=0;ee<E.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const Mt=s.get(E[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function G(N){return Math.min(l.maxSamples,N.samples)}function Ze(N){const E=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(N){const E=h.render.frame;_.get(N)!==E&&(_.set(N,E),N.update())}function Oe(N,E){const q=N.colorSpace,ht=N.format,vt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Or&&q!==ts&&(be.getTransfer(q)===He?(ht!==Ui||vt!==si)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),E}function Yt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=et,this.setTexture2D=ut,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=at,this.rebindTextures=tn,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function W1(o,e){function i(s,l=ts){let c;const h=be.getTransfer(l);if(s===si)return o.UNSIGNED_BYTE;if(s===Pd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===zd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Q_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===J_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===j_)return o.BYTE;if(s===Z_)return o.SHORT;if(s===Wo)return o.UNSIGNED_SHORT;if(s===Od)return o.INT;if(s===Xi)return o.UNSIGNED_INT;if(s===Fi)return o.FLOAT;if(s===Sa)return o.HALF_FLOAT;if(s===$_)return o.ALPHA;if(s===tv)return o.RGB;if(s===Ui)return o.RGBA;if(s===ya)return o.DEPTH_COMPONENT;if(s===Us)return o.DEPTH_STENCIL;if(s===ev)return o.RED;if(s===Id)return o.RED_INTEGER;if(s===Nr)return o.RG;if(s===Bd)return o.RG_INTEGER;if(s===Fd)return o.RGBA_INTEGER;if(s===Nc||s===Oc||s===Pc||s===zc)if(h===He)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Nc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Nc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qh||s===Jh||s===$h||s===td)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Qh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$h)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===td)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ed||s===nd)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===id)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===ad)return c.COMPRESSED_R11_EAC;if(s===sd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===rd)return c.COMPRESSED_RG11_EAC;if(s===od)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===Sd||s===yd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ld)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ud)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===md)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===gd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_d)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Md||s===Ed||s===Td)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Md)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ed)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Td)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===bd||s===Ad||s===Rd||s===Cd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===bd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ad)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y1=`
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

}`;class K1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new mv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new qi({vertexShader:q1,fragmentShader:Y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ye(new Jo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j1 extends zr{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,v=null,S=null,M=null,R=null;const C=typeof XRWebGLBinding<"u",y=new K1,x={},U=i.getContextAttributes();let D=null,L=null;const z=[],I=[],P=new Ee;let W=null;const T=new vi;T.viewport=new sn;const w=new vi;w.viewport=new sn;const V=[T,w],et=new aM;let st=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ct=z[nt];return ct===void 0&&(ct=new Rh,z[nt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(nt){let ct=z[nt];return ct===void 0&&(ct=new Rh,z[nt]=ct),ct.getGripSpace()},this.getHand=function(nt){let ct=z[nt];return ct===void 0&&(ct=new Rh,z[nt]=ct),ct.getHandSpace()};function ut(nt){const ct=I.indexOf(nt.inputSource);if(ct===-1)return;const wt=z[ct];wt!==void 0&&(wt.update(nt.inputSource,nt.frame,p||h),wt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function B(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",H);for(let nt=0;nt<z.length;nt++){const ct=I[nt];ct!==null&&(I[nt]=null,z[nt].disconnect(ct))}st=null,dt=null,y.reset();for(const nt in x)delete x[nt];e.setRenderTarget(D),M=null,S=null,v=null,l=null,L=null,Bt.stop(),s.isPresenting=!1,e.setPixelRatio(W),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",B),l.addEventListener("inputsourceschange",H),U.xrCompatible!==!0&&await i.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,kt=null,Ht=null;U.depth&&(Ht=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=U.stencil?Us:ya,kt=U.stencil?qo:Xi);const he={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};v=this.getBinding(),S=v.createProjectionLayer(he),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new Vi(S.textureWidth,S.textureHeight,{format:Ui,type:si,depthTexture:new Ko(S.textureWidth,S.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const wt={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:si,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Bt.setContext(l),Bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(nt){for(let ct=0;ct<nt.removed.length;ct++){const wt=nt.removed[ct],kt=I.indexOf(wt);kt>=0&&(I[kt]=null,z[kt].disconnect(wt))}for(let ct=0;ct<nt.added.length;ct++){const wt=nt.added[ct];let kt=I.indexOf(wt);if(kt===-1){for(let he=0;he<z.length;he++)if(he>=I.length){I.push(wt),kt=he;break}else if(I[he]===null){I[he]=wt,kt=he;break}if(kt===-1)break}const Ht=z[kt];Ht&&Ht.connect(wt)}}const at=new j,yt=new j;function xt(nt,ct,wt){at.setFromMatrixPosition(ct.matrixWorld),yt.setFromMatrixPosition(wt.matrixWorld);const kt=at.distanceTo(yt),Ht=ct.projectionMatrix.elements,he=wt.projectionMatrix.elements,tn=Ht[14]/(Ht[10]-1),ge=Ht[14]/(Ht[10]+1),de=(Ht[9]+1)/Ht[5],we=(Ht[9]-1)/Ht[5],re=(Ht[8]-1)/Ht[0],en=(he[8]+1)/he[0],G=tn*re,Ze=tn*en,Me=kt/(-re+en),Oe=Me*-re;if(ct.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Oe),nt.translateZ(Me),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Ht[10]===-1)nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Yt=tn+Me,N=ge+Me,E=G-Oe,q=Ze+(kt-Oe),ht=de*ge/N*Yt,vt=we*ge/N*Yt;nt.projectionMatrix.makePerspective(E,q,ht,vt,Yt,N),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function O(nt,ct){ct===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ct.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ct=nt.near,wt=nt.far;y.texture!==null&&(y.depthNear>0&&(ct=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),et.near=w.near=T.near=ct,et.far=w.far=T.far=wt,(st!==et.near||dt!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),st=et.near,dt=et.far),et.layers.mask=nt.layers.mask|6,T.layers.mask=et.layers.mask&3,w.layers.mask=et.layers.mask&5;const kt=nt.parent,Ht=et.cameras;O(et,kt);for(let he=0;he<Ht.length;he++)O(Ht[he],kt);Ht.length===2?xt(et,T,w):et.projectionMatrix.copy(T.projectionMatrix),it(nt,et,kt)};function it(nt,ct,wt){wt===null?nt.matrix.copy(ct.matrixWorld):(nt.matrix.copy(wt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ct.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=wd*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(nt){m=nt,S!==null&&(S.fixedFoveation=nt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=nt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(et)},this.getCameraTexture=function(nt){return x[nt]};let gt=null;function bt(nt,ct){if(_=ct.getViewerPose(p||h),R=ct,_!==null){const wt=_.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let kt=!1;wt.length!==et.cameras.length&&(et.cameras.length=0,kt=!0);for(let ge=0;ge<wt.length;ge++){const de=wt[ge];let we=null;if(M!==null)we=M.getViewport(de);else{const en=v.getViewSubImage(S,de);we=en.viewport,ge===0&&(e.setRenderTargetTextures(L,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(L))}let re=V[ge];re===void 0&&(re=new vi,re.layers.enable(ge),re.viewport=new sn,V[ge]=re),re.matrix.fromArray(de.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(de.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(we.x,we.y,we.width,we.height),ge===0&&(et.matrix.copy(re.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),kt===!0&&et.cameras.push(re)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const ge=v.getDepthInformation(wt[0]);ge&&ge.isValid&&ge.texture&&y.init(ge,l.renderState)}if(Ht&&Ht.includes("camera-access")&&C){e.state.unbindTexture(),v=s.getBinding();for(let ge=0;ge<wt.length;ge++){const de=wt[ge].camera;if(de){let we=x[de];we||(we=new mv,x[de]=we);const re=v.getCameraImage(de);we.sourceTexture=re}}}}for(let wt=0;wt<z.length;wt++){const kt=I[wt],Ht=z[wt];kt!==null&&Ht!==void 0&&Ht.update(kt,ct,p||h)}gt&&gt(nt,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),R=null}const Bt=new _v;Bt.setAnimationLoop(bt),this.setAnimationLoop=function(nt){gt=nt},this.dispose=function(){}}}const As=new Wi,Z1=new $e;function Q1(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,uv(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,U,D,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),_(y,x)):x.isMeshStandardMaterial?(c(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,L)):x.isMeshMatcapMaterial?(c(y,x),R(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),C(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,U,D):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const U=e.get(x),D=U.envMap,L=U.envMapRotation;D&&(y.envMap.value=D,As.copy(L),As.x*=-1,As.y*=-1,As.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),y.envMapRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(As)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,U,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*U,y.scale.value=D*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,U){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const U=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function J1(o,e,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,D){const L=D.program;s.uniformBlockBinding(U,L)}function p(U,D){let L=l[U.id];L===void 0&&(R(U),L=_(U),l[U.id]=L,U.addEventListener("dispose",y));const z=D.program;s.updateUBOMapping(U,z);const I=e.render.frame;c[U.id]!==I&&(S(U),c[U.id]=I)}function _(U){const D=v();U.__bindingPointIndex=D;const L=o.createBuffer(),z=U.__size,I=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,z,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,L),L}function v(){for(let U=0;U<d;U++)if(h.indexOf(U)===-1)return h.push(U),U;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const D=l[U.id],L=U.uniforms,z=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let I=0,P=L.length;I<P;I++){const W=Array.isArray(L[I])?L[I]:[L[I]];for(let T=0,w=W.length;T<w;T++){const V=W[T];if(M(V,I,T,z)===!0){const et=V.__offset,st=Array.isArray(V.value)?V.value:[V.value];let dt=0;for(let ut=0;ut<st.length;ut++){const B=st[ut],H=C(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,et+dt,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,dt),dt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(U,D,L,z){const I=U.value,P=D+"_"+L;if(z[P]===void 0)return typeof I=="number"||typeof I=="boolean"?z[P]=I:z[P]=I.clone(),!0;{const W=z[P];if(typeof I=="number"||typeof I=="boolean"){if(W!==I)return z[P]=I,!0}else if(W.equals(I)===!1)return W.copy(I),!0}return!1}function R(U){const D=U.uniforms;let L=0;const z=16;for(let P=0,W=D.length;P<W;P++){const T=Array.isArray(D[P])?D[P]:[D[P]];for(let w=0,V=T.length;w<V;w++){const et=T[w],st=Array.isArray(et.value)?et.value:[et.value];for(let dt=0,ut=st.length;dt<ut;dt++){const B=st[dt],H=C(B),at=L%z,yt=at%H.boundary,xt=at+yt;L+=yt,xt!==0&&z-xt<H.storage&&(L+=z-xt),et.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=L,L+=H.storage}}}const I=L%z;return I>0&&(L+=z-I),U.__size=L,U.__cache={},this}function C(U){const D={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(D.boundary=4,D.storage=4):U.isVector2?(D.boundary=8,D.storage=8):U.isVector3||U.isColor?(D.boundary=16,D.storage=12):U.isVector4?(D.boundary=16,D.storage=16):U.isMatrix3?(D.boundary=48,D.storage=48):U.isMatrix4?(D.boundary=64,D.storage=64):U.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",U),D}function y(U){const D=U.target;D.removeEventListener("dispose",y);const L=h.indexOf(D.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function x(){for(const U in l)o.deleteBuffer(l[U]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const $1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function tA(){return Ii===null&&(Ii=new Xy($1,16,16,Nr,Sa),Ii.name="DFG_LUT",Ii.minFilter=In,Ii.magFilter=In,Ii.wrapS=_a,Ii.wrapT=_a,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class eA{constructor(e={}){const{canvas:i=_y(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:M=si}=e;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=h;const C=M,y=new Set([Fd,Bd,Id]),x=new Set([si,Xi,Wo,qo,Pd,zd]),U=new Uint32Array(4),D=new Int32Array(4);let L=null,z=null;const I=[],P=[];let W=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=_i;let V=0,et=0,st=null,dt=-1,ut=null;const B=new sn,H=new sn;let at=null;const yt=new xe(0);let xt=0,O=i.width,it=i.height,gt=1,bt=null,Bt=null;const nt=new sn(0,0,O,it),ct=new sn(0,0,O,it);let wt=!1;const kt=new Wd;let Ht=!1,he=!1;const tn=new $e,ge=new j,de=new sn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function en(){return st===null?gt:1}let G=s;function Ze(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nd}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Te,!1),G===null){const Y="webgl2";if(G=Ze(Y,A),G===null)throw Ze(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ce("WebGLRenderer: "+A.message),A}let Me,Oe,Yt,N,E,q,ht,vt,lt,jt,Rt,Xt,ee,Mt,Et,zt,Ot,Ct,le,X,Ut,Tt,Pt,St;function _t(){Me=new tb(G),Me.init(),Tt=new W1(G,Me),Oe=new WT(G,Me,e,Tt),Yt=new k1(G,Me),Oe.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),N=new ib(G),E=new C1,q=new X1(G,Me,Yt,E,Oe,Tt,N),ht=new YT(T),vt=new $T(T),lt=new oM(G),Pt=new kT(G,lt),jt=new eb(G,lt,N,Pt),Rt=new sb(G,jt,lt,N),le=new ab(G,Oe,q),zt=new qT(E),Xt=new R1(T,ht,vt,Me,Oe,Pt,zt),ee=new Q1(T,E),Mt=new D1,Et=new z1(Me),Ct=new VT(T,ht,vt,Yt,Rt,R,m),Ot=new G1(T,Rt,Oe),St=new J1(G,N,Oe,Yt),X=new XT(G,Me,N),Ut=new nb(G,Me,N),N.programs=Xt.programs,T.capabilities=Oe,T.extensions=Me,T.properties=E,T.renderLists=Mt,T.shadowMap=Ot,T.state=Yt,T.info=N}_t(),C!==si&&(W=new ob(C,i.width,i.height,l,c));const At=new j1(T,G);this.xr=At,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(A){A!==void 0&&(gt=A,this.setSize(O,it,!1))},this.getSize=function(A){return A.set(O,it)},this.setSize=function(A,Y,rt=!0){if(At.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,it=Y,i.width=Math.floor(A*gt),i.height=Math.floor(Y*gt),rt===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),W!==null&&W.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(O*gt,it*gt).floor()},this.setDrawingBufferSize=function(A,Y,rt){O=A,it=Y,gt=rt,i.width=Math.floor(A*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(C===si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(nt)},this.setViewport=function(A,Y,rt,$){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,Y,rt,$),Yt.viewport(B.copy(nt).multiplyScalar(gt).round())},this.getScissor=function(A){return A.copy(ct)},this.setScissor=function(A,Y,rt,$){A.isVector4?ct.set(A.x,A.y,A.z,A.w):ct.set(A,Y,rt,$),Yt.scissor(H.copy(ct).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(A){Yt.setScissorTest(wt=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){Bt=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,rt=!0){let $=0;if(A){let Z=!1;if(st!==null){const Dt=st.texture.format;Z=y.has(Dt)}if(Z){const Dt=st.texture.type,It=x.has(Dt),Lt=Ct.getClearColor(),Gt=Ct.getClearAlpha(),Wt=Lt.r,Jt=Lt.g,qt=Lt.b;It?(U[0]=Wt,U[1]=Jt,U[2]=qt,U[3]=Gt,G.clearBufferuiv(G.COLOR,0,U)):(D[0]=Wt,D[1]=Jt,D[2]=qt,D[3]=Gt,G.clearBufferiv(G.COLOR,0,D))}else $|=G.COLOR_BUFFER_BIT}Y&&($|=G.DEPTH_BUFFER_BIT),rt&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Ct.dispose(),Mt.dispose(),Et.dispose(),E.dispose(),ht.dispose(),vt.dispose(),Rt.dispose(),Pt.dispose(),St.dispose(),Xt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Os),At.removeEventListener("sessionend",Gr),Li.stop()};function ne(A){A.preventDefault(),Wg("WebGLRenderer: Context Lost."),w=!0}function ze(){Wg("WebGLRenderer: Context Restored."),w=!1;const A=N.autoReset,Y=Ot.enabled,rt=Ot.autoUpdate,$=Ot.needsUpdate,Z=Ot.type;_t(),N.autoReset=A,Ot.enabled=Y,Ot.autoUpdate=rt,Ot.needsUpdate=$,Ot.type=Z}function Te(A){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Nn(A){const Y=A.target;Y.removeEventListener("dispose",Nn),Si(Y)}function Si(A){$o(A),E.remove(A)}function $o(A){const Y=E.get(A).programs;Y!==void 0&&(Y.forEach(function(rt){Xt.releaseProgram(rt)}),A.isShaderMaterial&&Xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,rt,$,Z,Dt){Y===null&&(Y=we);const It=Z.isMesh&&Z.matrixWorld.determinant()<0,Lt=is(A,Y,rt,$,Z);Yt.setMaterial($,It);let Gt=rt.index,Wt=1;if($.wireframe===!0){if(Gt=jt.getWireframeAttribute(rt),Gt===void 0)return;Wt=2}const Jt=rt.drawRange,qt=rt.attributes.position;let $t=Jt.start*Wt,De=(Jt.start+Jt.count)*Wt;Dt!==null&&($t=Math.max($t,Dt.start*Wt),De=Math.min(De,(Dt.start+Dt.count)*Wt)),Gt!==null?($t=Math.max($t,0),De=Math.min(De,Gt.count)):qt!=null&&($t=Math.max($t,0),De=Math.min(De,qt.count));const Qe=De-$t;if(Qe<0||Qe===1/0)return;Pt.setup(Z,$,Lt,rt,Gt);let qe,Pe=X;if(Gt!==null&&(qe=lt.get(Gt),Pe=Ut,Pe.setIndex(qe)),Z.isMesh)$.wireframe===!0?(Yt.setLineWidth($.wireframeLinewidth*en()),Pe.setMode(G.LINES)):Pe.setMode(G.TRIANGLES);else if(Z.isLine){let Zt=$.linewidth;Zt===void 0&&(Zt=1),Yt.setLineWidth(Zt*en()),Z.isLineSegments?Pe.setMode(G.LINES):Z.isLineLoop?Pe.setMode(G.LINE_LOOP):Pe.setMode(G.LINE_STRIP)}else Z.isPoints?Pe.setMode(G.POINTS):Z.isSprite&&Pe.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Yo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Zt=Z._multiDrawStarts,Ue=Z._multiDrawCounts,ae=Z._multiDrawCount,Mn=Gt?lt.get(Gt).bytesPerElement:1,Yi=E.get($).currentProgram.getUniforms();for(let En=0;En<ae;En++)Yi.setValue(G,"_gl_DrawID",En),Pe.render(Zt[En]/Mn,Ue[En])}else if(Z.isInstancedMesh)Pe.renderInstances($t,Qe,Z.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ue=Math.min(rt.instanceCount,Zt);Pe.renderInstances($t,Qe,Ue)}else Pe.render($t,Qe)};function Fr(A,Y,rt){A.transparent===!0&&A.side===ga&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,zs(A,Y,rt),A.side=ns,A.needsUpdate=!0,zs(A,Y,rt),A.side=ga):zs(A,Y,rt)}this.compile=function(A,Y,rt=null){rt===null&&(rt=A),z=Et.get(rt),z.init(Y),P.push(z),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),A!==rt&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(z.pushLight(Z),Z.castShadow&&z.pushShadow(Z))}),z.setupLights();const $=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Dt=Z.material;if(Dt)if(Array.isArray(Dt))for(let It=0;It<Dt.length;It++){const Lt=Dt[It];Fr(Lt,rt,Z),$.add(Lt)}else Fr(Dt,rt,Z),$.add(Dt)}),z=P.pop(),$},this.compileAsync=function(A,Y,rt=null){const $=this.compile(A,Y,rt);return new Promise(Z=>{function Dt(){if($.forEach(function(It){E.get(It).currentProgram.isReady()&&$.delete(It)}),$.size===0){Z(A);return}setTimeout(Dt,10)}Me.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ns=null;function Hr(A){Ns&&Ns(A)}function Os(){Li.stop()}function Gr(){Li.start()}const Li=new _v;Li.setAnimationLoop(Hr),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(A){Ns=A,At.setAnimationLoop(A),A===null?Li.stop():Li.start()},At.addEventListener("sessionstart",Os),At.addEventListener("sessionend",Gr),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const rt=At.enabled===!0&&At.isPresenting===!0,$=W!==null&&(st===null||rt)&&W.begin(T,st);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,Y,st),z=Et.get(A,P.length),z.init(Y),P.push(z),tn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),kt.setFromProjectionMatrix(tn,Hi,Y.reversedDepth),he=this.localClippingEnabled,Ht=zt.init(this.clippingPlanes,he),L=Mt.get(A,I.length),L.init(),I.push(L),At.enabled===!0&&At.isPresenting===!0){const It=T.xr.getDepthSensingMesh();It!==null&&ri(It,Y,-1/0,T.sortObjects)}ri(A,Y,0,T.sortObjects),L.finish(),T.sortObjects===!0&&L.sort(bt,Bt),re=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,re&&Ct.addToRenderList(L,A),this.info.render.frame++,Ht===!0&&zt.beginShadows();const Z=z.state.shadowsArray;if(Ot.render(Z,A,Y),Ht===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&W.hasRenderPass())===!1){const It=L.opaque,Lt=L.transmissive;if(z.setupLights(),Y.isArrayCamera){const Gt=Y.cameras;if(Lt.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];yn(It,Lt,A,qt)}re&&Ct.render(A);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];ln(L,A,qt,qt.viewport)}}else Lt.length>0&&yn(It,Lt,A,Y),re&&Ct.render(A),ln(L,A,Y)}st!==null&&et===0&&(q.updateMultisampleRenderTarget(st),q.updateRenderTargetMipmap(st)),$&&W.end(T),A.isScene===!0&&A.onAfterRender(T,A,Y),Pt.resetDefaultState(),dt=-1,ut=null,P.pop(),P.length>0?(z=P[P.length-1],Ht===!0&&zt.setGlobalState(T.clippingPlanes,z.state.camera)):z=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function ri(A,Y,rt,$){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)z.pushLight(A),A.castShadow&&z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||kt.intersectsSprite(A)){$&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(tn);const It=Rt.update(A),Lt=A.material;Lt.visible&&L.push(A,It,Lt,rt,de.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||kt.intersectsObject(A))){const It=Rt.update(A),Lt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),de.copy(It.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(tn)),Array.isArray(Lt)){const Gt=It.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],$t=Lt[qt.materialIndex];$t&&$t.visible&&L.push(A,It,$t,rt,de.z,qt)}}else Lt.visible&&L.push(A,It,Lt,rt,de.z,null)}}const Dt=A.children;for(let It=0,Lt=Dt.length;It<Lt;It++)ri(Dt[It],Y,rt,$)}function ln(A,Y,rt,$){const{opaque:Z,transmissive:Dt,transparent:It}=A;z.setupLightsView(rt),Ht===!0&&zt.setGlobalState(T.clippingPlanes,rt),$&&Yt.viewport(B.copy($)),Z.length>0&&yi(Z,Y,rt),Dt.length>0&&yi(Dt,Y,rt),It.length>0&&yi(It,Y,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function yn(A,Y,rt,$){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[$.id]===void 0){const $t=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[$.id]=new Vi(1,1,{generateMipmaps:!0,type:$t?Sa:si,minFilter:Ds,samples:Oe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Dt=z.state.transmissionRenderTarget[$.id],It=$.viewport||B;Dt.setSize(It.z*T.transmissionResolutionScale,It.w*T.transmissionResolutionScale);const Lt=T.getRenderTarget(),Gt=T.getActiveCubeFace(),Wt=T.getActiveMipmapLevel();T.setRenderTarget(Dt),T.getClearColor(yt),xt=T.getClearAlpha(),xt<1&&T.setClearColor(16777215,.5),T.clear(),re&&Ct.render(rt);const Jt=T.toneMapping;T.toneMapping=Gi;const qt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),z.setupLightsView($),Ht===!0&&zt.setGlobalState(T.clippingPlanes,$),yi(A,rt,$),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Qe=Y.length;De<Qe;De++){const qe=Y[De],{object:Pe,geometry:Zt,material:Ue,group:ae}=qe;if(Ue.side===ga&&Pe.layers.test($.layers)){const Mn=Ue.side;Ue.side=jn,Ue.needsUpdate=!0,Ps(Pe,rt,$,Zt,Ue,ae),Ue.side=Mn,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}T.setRenderTarget(Lt,Gt,Wt),T.setClearColor(yt,xt),qt!==void 0&&($.viewport=qt),T.toneMapping=Jt}function yi(A,Y,rt){const $=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Dt=A.length;Z<Dt;Z++){const It=A[Z],{object:Lt,geometry:Gt,group:Wt}=It;let Jt=It.material;Jt.allowOverride===!0&&$!==null&&(Jt=$),Lt.layers.test(rt.layers)&&Ps(Lt,Y,rt,Gt,Jt,Wt)}}function Ps(A,Y,rt,$,Z,Dt){A.onBeforeRender(T,Y,rt,$,Z,Dt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(T,Y,rt,$,A,Dt),Z.transparent===!0&&Z.side===ga&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,T.renderBufferDirect(rt,Y,$,Z,A,Dt),Z.side=ns,Z.needsUpdate=!0,T.renderBufferDirect(rt,Y,$,Z,A,Dt),Z.side=ga):T.renderBufferDirect(rt,Y,$,Z,A,Dt),A.onAfterRender(T,Y,rt,$,Z,Dt)}function zs(A,Y,rt){Y.isScene!==!0&&(Y=we);const $=E.get(A),Z=z.state.lights,Dt=z.state.shadowsArray,It=Z.state.version,Lt=Xt.getParameters(A,Z.state,Dt,Y,rt),Gt=Xt.getProgramCacheKey(Lt);let Wt=$.programs;$.environment=A.isMeshStandardMaterial?Y.environment:null,$.fog=Y.fog,$.envMap=(A.isMeshStandardMaterial?vt:ht).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",Nn),Wt=new Map,$.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if($.currentProgram===Jt&&$.lightsStateVersion===It)return Vr(A,Lt),Jt}else Lt.uniforms=Xt.getUniforms(A),A.onBeforeCompile(Lt,T),Jt=Xt.acquireProgram(Lt,Gt),Wt.set(Gt,Jt),$.uniforms=Lt.uniforms;const qt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=zt.uniform),Vr(A,Lt),$.needsLights=Ma(A),$.lightsStateVersion=It,$.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMap.value=Z.state.directionalShadowMap,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotShadowMap.value=Z.state.spotShadowMap,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMap.value=Z.state.pointShadowMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),$.currentProgram=Jt,$.uniformsList=null,Jt}function tl(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Bc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Vr(A,Y){const rt=E.get(A);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function is(A,Y,rt,$,Z){Y.isScene!==!0&&(Y=we),q.resetTextureUnits();const Dt=Y.fog,It=$.isMeshStandardMaterial?Y.environment:null,Lt=st===null?T.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Or,Gt=($.isMeshStandardMaterial?vt:ht).get($.envMap||It),Wt=$.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Jt=!!rt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),qt=!!rt.morphAttributes.position,$t=!!rt.morphAttributes.normal,De=!!rt.morphAttributes.color;let Qe=Gi;$.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Qe=T.toneMapping);const qe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=qe!==void 0?qe.length:0,Zt=E.get($),Ue=z.state.lights;if(Ht===!0&&(he===!0||A!==ut)){const bn=A===ut&&$.id===dt;zt.setState($,A,bn)}let ae=!1;$.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ue.state.version||Zt.outputColorSpace!==Lt||Z.isBatchedMesh&&Zt.batching===!1||!Z.isBatchedMesh&&Zt.batching===!0||Z.isBatchedMesh&&Zt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Zt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Zt.instancing===!1||!Z.isInstancedMesh&&Zt.instancing===!0||Z.isSkinnedMesh&&Zt.skinning===!1||!Z.isSkinnedMesh&&Zt.skinning===!0||Z.isInstancedMesh&&Zt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Zt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Zt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Zt.instancingMorph===!1&&Z.morphTexture!==null||Zt.envMap!==Gt||$.fog===!0&&Zt.fog!==Dt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==zt.numPlanes||Zt.numIntersection!==zt.numIntersection)||Zt.vertexAlphas!==Wt||Zt.vertexTangents!==Jt||Zt.morphTargets!==qt||Zt.morphNormals!==$t||Zt.morphColors!==De||Zt.toneMapping!==Qe||Zt.morphTargetsCount!==Pe)&&(ae=!0):(ae=!0,Zt.__version=$.version);let Mn=Zt.currentProgram;ae===!0&&(Mn=zs($,Y,Z));let Yi=!1,En=!1,oi=!1;const Ie=Mn.getUniforms(),Tn=Zt.uniforms;if(Yt.useProgram(Mn.program)&&(Yi=!0,En=!0,oi=!0),$.id!==dt&&(dt=$.id,En=!0),Yi||ut!==A){Yt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ie.setValue(G,"projectionMatrix",A.projectionMatrix),Ie.setValue(G,"viewMatrix",A.matrixWorldInverse);const An=Ie.map.cameraPosition;An!==void 0&&An.setValue(G,ge.setFromMatrixPosition(A.matrixWorld)),Oe.logarithmicDepthBuffer&&Ie.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ie.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),ut!==A&&(ut=A,En=!0,oi=!0)}if(Zt.needsLights&&(Ue.state.directionalShadowMap.length>0&&Ie.setValue(G,"directionalShadowMap",Ue.state.directionalShadowMap,q),Ue.state.spotShadowMap.length>0&&Ie.setValue(G,"spotShadowMap",Ue.state.spotShadowMap,q),Ue.state.pointShadowMap.length>0&&Ie.setValue(G,"pointShadowMap",Ue.state.pointShadowMap,q)),Z.isSkinnedMesh){Ie.setOptional(G,Z,"bindMatrix"),Ie.setOptional(G,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ie.setValue(G,"boneTexture",bn.boneTexture,q))}Z.isBatchedMesh&&(Ie.setOptional(G,Z,"batchingTexture"),Ie.setValue(G,"batchingTexture",Z._matricesTexture,q),Ie.setOptional(G,Z,"batchingIdTexture"),Ie.setValue(G,"batchingIdTexture",Z._indirectTexture,q),Ie.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ie.setValue(G,"batchingColorTexture",Z._colorsTexture,q));const mn=rt.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&le.update(Z,rt,Mn),(En||Zt.receiveShadow!==Z.receiveShadow)&&(Zt.receiveShadow=Z.receiveShadow,Ie.setValue(G,"receiveShadow",Z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Tn.envMap.value=Gt,Tn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=tA()),En&&(Ie.setValue(G,"toneMappingExposure",T.toneMappingExposure),Zt.needsLights&&kr(Tn,oi),Dt&&$.fog===!0&&ee.refreshFogUniforms(Tn,Dt),ee.refreshMaterialUniforms(Tn,$,gt,it,z.state.transmissionRenderTarget[A.id]),Bc.upload(G,tl(Zt),Tn,q)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Bc.upload(G,tl(Zt),Tn,q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ie.setValue(G,"center",Z.center),Ie.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Ie.setValue(G,"normalMatrix",Z.normalMatrix),Ie.setValue(G,"modelMatrix",Z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const bn=$.uniformsGroups;for(let An=0,Is=bn.length;An<Is;An++){const Mi=bn[An];St.update(Mi,Mn),St.bind(Mi,Mn)}}return Mn}function kr(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Ma(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(A,Y,rt){const $=E.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=Y,E.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:rt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const rt=E.get(A);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Ea=G.createFramebuffer();this.setRenderTarget=function(A,Y=0,rt=0){st=A,V=Y,et=rt;let $=null,Z=!1,Dt=!1;if(A){const Lt=E.get(A);if(Lt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,Lt.__webglFramebuffer),B.copy(A.viewport),H.copy(A.scissor),at=A.scissorTest,Yt.viewport(B),Yt.scissor(H),Yt.setScissorTest(at),dt=-1;return}else if(Lt.__webglFramebuffer===void 0)q.setupRenderTarget(A);else if(Lt.__hasExternalTextures)q.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&E.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(A)}}const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Dt=!0);const Wt=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?$=Wt[Y][rt]:$=Wt[Y],Z=!0):A.samples>0&&q.useMultisampledRTT(A)===!1?$=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?$=Wt[rt]:$=Wt,B.copy(A.viewport),H.copy(A.scissor),at=A.scissorTest}else B.copy(nt).multiplyScalar(gt).floor(),H.copy(ct).multiplyScalar(gt).floor(),at=wt;if(rt!==0&&($=Ea),Yt.bindFramebuffer(G.FRAMEBUFFER,$)&&Yt.drawBuffers(A,$),Yt.viewport(B),Yt.scissor(H),Yt.setScissorTest(at),Z){const Lt=E.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,rt)}else if(Dt){const Lt=Y;for(let Gt=0;Gt<A.textures.length;Gt++){const Wt=E.get(A.textures[Gt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,rt,Lt)}}else if(A!==null&&rt!==0){const Lt=E.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Lt.__webglTexture,rt)}dt=-1},this.readRenderTargetPixels=function(A,Y,rt,$,Z,Dt,It,Lt=0){if(!(A&&A.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);try{const Wt=A.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Oe.textureFormatReadable(Jt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(qt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-$&&rt>=0&&rt<=A.height-Z&&(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(Y,rt,$,Z,Tt.convert(Jt),Tt.convert(qt),Dt))}finally{const Wt=st!==null?E.get(st).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,rt,$,Z,Dt,It,Lt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt)if(Y>=0&&Y<=A.width-$&&rt>=0&&rt<=A.height-Z){Yt.bindFramebuffer(G.FRAMEBUFFER,Gt);const Wt=A.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Oe.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Lt),G.readPixels(Y,rt,$,Z,Tt.convert(Jt),Tt.convert(qt),0);const De=st!==null?E.get(st).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,De);const Qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await vy(G,Qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$t),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer($t),G.deleteSync(Qe),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,rt=0){const $=Math.pow(2,-rt),Z=Math.floor(A.image.width*$),Dt=Math.floor(A.image.height*$),It=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;q.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,It,Lt,Z,Dt),Yt.unbindTexture()};const as=G.createFramebuffer(),Ta=G.createFramebuffer();this.copyTextureToTexture=function(A,Y,rt=null,$=null,Z=0,Dt=null){Dt===null&&(Z!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=Z,Z=0):Dt=0);let It,Lt,Gt,Wt,Jt,qt,$t,De,Qe;const qe=A.isCompressedTexture?A.mipmaps[Dt]:A.image;if(rt!==null)It=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Gt=rt.isBox3?rt.max.z-rt.min.z:1,Wt=rt.min.x,Jt=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const mn=Math.pow(2,-Z);It=Math.floor(qe.width*mn),Lt=Math.floor(qe.height*mn),A.isDataArrayTexture?Gt=qe.depth:A.isData3DTexture?Gt=Math.floor(qe.depth*mn):Gt=1,Wt=0,Jt=0,qt=0}$!==null?($t=$.x,De=$.y,Qe=$.z):($t=0,De=0,Qe=0);const Pe=Tt.convert(Y.format),Zt=Tt.convert(Y.type);let Ue;Y.isData3DTexture?(q.setTexture3D(Y,0),Ue=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Ue=G.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Ue=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);const ae=G.getParameter(G.UNPACK_ROW_LENGTH),Mn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Yi=G.getParameter(G.UNPACK_SKIP_PIXELS),En=G.getParameter(G.UNPACK_SKIP_ROWS),oi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,qe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,qe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const Ie=A.isDataArrayTexture||A.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const mn=E.get(A),bn=E.get(Y),An=E.get(mn.__renderTarget),Is=E.get(bn.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let Mi=0;Mi<Gt;Mi++)Ie&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(A).__webglTexture,Z,qt+Mi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Dt,Qe+Mi)),G.blitFramebuffer(Wt,Jt,It,Lt,$t,De,It,Lt,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||E.has(A)){const mn=E.get(A),bn=E.get(Y);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,as),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ta);for(let An=0;An<Gt;An++)Ie?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mn.__webglTexture,Z,qt+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mn.__webglTexture,Z),Tn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,bn.__webglTexture,Dt,Qe+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,bn.__webglTexture,Dt),Z!==0?G.blitFramebuffer(Wt,Jt,It,Lt,$t,De,It,Lt,G.COLOR_BUFFER_BIT,G.NEAREST):Tn?G.copyTexSubImage3D(Ue,Dt,$t,De,Qe+An,Wt,Jt,It,Lt):G.copyTexSubImage2D(Ue,Dt,$t,De,Wt,Jt,It,Lt);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Tn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ue,Dt,$t,De,Qe,It,Lt,Gt,Pe,Zt,qe.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ue,Dt,$t,De,Qe,It,Lt,Gt,Pe,qe.data):G.texSubImage3D(Ue,Dt,$t,De,Qe,It,Lt,Gt,Pe,Zt,qe):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,$t,De,It,Lt,Pe,Zt,qe.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,$t,De,qe.width,qe.height,Pe,qe.data):G.texSubImage2D(G.TEXTURE_2D,Dt,$t,De,It,Lt,Pe,Zt,qe);G.pixelStorei(G.UNPACK_ROW_LENGTH,ae),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Yi),G.pixelStorei(G.UNPACK_SKIP_ROWS,En),G.pixelStorei(G.UNPACK_SKIP_IMAGES,oi),Dt===0&&Y.generateMipmaps&&G.generateMipmap(Ue),Yt.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?q.setTextureCube(A,0):A.isData3DTexture?q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?q.setTexture2DArray(A,0):q.setTexture2D(A,0),Yt.unbindTexture()},this.resetState=function(){V=0,et=0,st=null,Yt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}var Ft=(o=>(o[o.IDLE=0]="IDLE",o[o.WALK=1]="WALK",o[o.WALK_FORWARD=2]="WALK_FORWARD",o[o.WALK_BACK=3]="WALK_BACK",o[o.DUCK=4]="DUCK",o[o.BLOCK=5]="BLOCK",o[o.BLOCK_LOW=6]="BLOCK_LOW",o[o.DASH_FORWARD=7]="DASH_FORWARD",o[o.DASH_BACK=8]="DASH_BACK",o[o.ATTACK_PUNCH=9]="ATTACK_PUNCH",o[o.ATTACK_KICK=10]="ATTACK_KICK",o[o.ATTACK_LOW=11]="ATTACK_LOW",o[o.HIT=12]="HIT",o[o.STUNNED=13]="STUNNED",o[o.DEAD=14]="DEAD",o[o.VICTORY=15]="VICTORY",o))(Ft||{});const We={MAX_HEALTH:100,ROUND_TIME:60,GRAVITY:80,GROUND_Y:0,JUMP_FORCE:22,MOVE_SPEED:4.5,DASH_SPEED:18,ACCELERATION:60,DRAG:40,HIT_STUN_FRAMES:30},Ih={[Ft.ATTACK_PUNCH]:{startup:6,active:4,recovery:10,damage:8,stun:15,knockback:1,blockStun:8,hitLevel:"high"},[Ft.ATTACK_KICK]:{startup:12,active:6,recovery:18,damage:14,stun:25,knockback:3.5,blockStun:15,hitLevel:"mid"},[Ft.ATTACK_LOW]:{startup:10,active:6,recovery:14,damage:10,stun:18,knockback:2,blockStun:10,hitLevel:"low"}};class B_{constructor(e,i){this.hp=We.MAX_HEALTH,this.state=Ft.IDLE,this.velocity=new j,this.facing=1,this.stateTimer=0,this.attackCooldown=0,this.flashTimer=0,this.stunDuration=0,this.hitStopTimer=0,this.elasticScale=new j(1,1,1),this.lastTapTime=0,this.lastKey="",this.dashTimer=0,this.dashVariant=0,this.aiTimer=0,this.aiAction="IDLE",this.isPlayer1=e,this.mesh=new wi,this.bodyParts={};const s=!this.isPlayer1,l=2236962,c=4473924,h=s?16711765:65535,d=new Ic({color:l,roughness:.3,metalness:.8}),m=new Ic({color:c,roughness:.7,metalness:.5}),p=new Ic({color:h,emissive:h,emissiveIntensity:2,roughness:.1});this.bodyParts.torso=new wi,this.bodyParts.torso.position.y=1.05,this.mesh.add(this.bodyParts.torso);const _=new Ye(new pn(.6,.4,.35),d);_.position.y=.2,_.castShadow=!0,this.bodyParts.torso.add(_);const v=new Ye(new pn(.45,.4,.3),m);v.position.y=-.2,this.bodyParts.torso.add(v);const S=new Ye(new pn(.15,.15,.2),p);S.position.set(0,.2,.15),this.bodyParts.torso.add(S),this.bodyParts.head=new wi,this.bodyParts.head.position.set(0,.5,0),this.bodyParts.torso.add(this.bodyParts.head);const M=new Ye(new pn(.35,.4,.4),d);this.bodyParts.head.add(M);const R=new Ye(new pn(.36,.1,.3),p);R.position.set(0,.05,.1),this.bodyParts.head.add(R);const C=x=>{const U=x==="L"?-1:1,D=new wi;D.position.set(U*.4,.3,0),this.bodyParts.torso.add(D);const L=new Ye(new pn(.3,.3,.3),d);L.position.y=0,D.add(L);const z=new Ye(new pn(.12,.4,.12),m);z.position.y=-.25,D.add(z);const I=new wi;I.position.set(0,-.45,0),D.add(I);const P=new Ye(new pn(.15,.4,.15),d);P.position.y=-.2,I.add(P);const W=new Ye(new pn(.16,.3,.05),p);W.position.set(0,-.2,.06),I.add(W);const T=new Ye(new pn(.18,.18,.18),m);T.position.y=-.5,T.castShadow=!0,T.visible=!0,I.add(T),x==="L"?(this.bodyParts.armL=D,this.bodyParts.elbowL=I,this.bodyParts.upperArmL=z,this.bodyParts.lowerArmL=P,this.bodyParts.fistL=T):(this.bodyParts.armR=D,this.bodyParts.elbowR=I,this.bodyParts.upperArmR=z,this.bodyParts.lowerArmR=P,this.bodyParts.fistR=T)};C("L"),C("R");const y=x=>{const U=x==="L"?-1:1,D=new wi;D.position.set(U*.15,-.4,0),this.bodyParts.torso.add(D);const L=new Ye(new pn(.18,.5,.18),m);L.position.y=-.25,D.add(L);const z=new wi;z.position.set(0,-.5,0),D.add(z);const I=new Ye(new pn(.2,.2,.2),d);I.position.z=.1,z.add(I);const P=new Ye(new pn(.15,.5,.15),d);P.position.y=-.25,z.add(P);const W=new Ye(new pn(.2,.15,.35),d);W.position.set(0,-.55,.1);const T=new Ye(new pn(.2,.05,.35),p);T.position.y=-.1,W.add(T),z.add(W),x==="L"?(this.bodyParts.legL=D,this.bodyParts.kneeL=z,this.bodyParts.thighL=L,this.bodyParts.shinL=P,this.bodyParts.bootL=W):(this.bodyParts.legR=D,this.bodyParts.kneeR=z,this.bodyParts.thighR=L,this.bodyParts.shinR=P,this.bodyParts.bootR=W)};y("L"),y("R"),this.mesh.position.set(e?-6:6,We.GROUND_Y,0)}handleInputEvent(e){const i=Date.now();e===this.lastKey&&i-this.lastTapTime<250?(this.triggerDash(e),this.lastKey=""):(this.lastKey=e,this.lastTapTime=i)}triggerDash(e){this.dashVariant=Math.floor(Math.random()*3),e==="KeyD"?(this.state=Ft.DASH_FORWARD,this.velocity.x=We.DASH_SPEED,this.dashTimer=30):e==="KeyA"&&(this.state=Ft.DASH_BACK,this.velocity.x=-18,this.dashTimer=30)}update(e,i,s,l){if(this.state===Ft.DEAD){this.animateDead();return}if(this.hitStopTimer>0){this.hitStopTimer-=e*60,this.handleVisuals();return}(this.state===Ft.STUNNED||this.state===Ft.HIT)&&(this.stunDuration-=e*60,this.stunDuration<=0&&(this.state=Ft.IDLE)),this.handlePhysics(s,e),this.isPlayer1?this.handleInput(i,e,s):this.handleAI(s,e),this.handleState(s,e),this.updateAnimations(e),this.handleVisuals()}handleInput(e,i,s){if(this.state===Ft.HIT||this.state===Ft.STUNNED||this.state===Ft.VICTORY||this.state===Ft.DEAD)return;if(this.isAttacking()){this.velocity.x-=this.velocity.x*We.DRAG*i,this.velocity.z-=this.velocity.z*We.DRAG*i;return}if(this.attackCooldown>0&&(this.attackCooldown-=i*60),this.attackCooldown<=0){if(e.keys.Space&&this.mesh.position.y<=We.GROUND_Y+.1&&(this.velocity.y=We.JUMP_FORCE),e.keys.KeyC||e.keys.ControlLeft){if(e.keys.KeyF||e.keys.KeyJ||e.mouseLeft||e.keys.KeyG||e.keys.KeyK||e.mouseRight){this.attack(Ft.ATTACK_LOW);return}let d=0;e.isPressed("KeyA")&&(d=-1),e.isPressed("KeyD")&&(d=1);const m=Math.sign(s.mesh.position.x-this.mesh.position.x)||1;d===-m?this.state=Ft.BLOCK_LOW:this.state=Ft.DUCK,this.velocity.x=0,this.velocity.z=0;return}if(e.keys.KeyF||e.keys.KeyJ||e.mouseLeft){this.attack(Ft.ATTACK_PUNCH);return}if(e.keys.KeyG||e.keys.KeyK||e.mouseRight){this.attack(Ft.ATTACK_KICK);return}}let c=0,h=0;if(e.isPressed("KeyA")&&(c=-1),e.isPressed("KeyD")&&(c=1),e.isPressed("KeyW")&&(h=-1),e.isPressed("KeyS")&&(h=1),this.state===Ft.DASH_FORWARD||this.state===Ft.DASH_BACK){this.dashTimer-=i*60,this.dashTimer<=0&&(this.state=Ft.IDLE);return}if(c!==0||h!==0){const d=Math.sign(s.mesh.position.x-this.mesh.position.x)||1;c===d?this.state=Ft.WALK_FORWARD:c===-d?this.state=Ft.WALK_BACK:this.state=Ft.WALK;const m=c*We.MOVE_SPEED,p=h*We.MOVE_SPEED*.6;this.velocity.x<m?(this.velocity.x+=We.ACCELERATION*i,this.velocity.x>m&&(this.velocity.x=m)):this.velocity.x>m&&(this.velocity.x-=We.ACCELERATION*i,this.velocity.x<m&&(this.velocity.x=m)),this.velocity.z<p?(this.velocity.z+=We.ACCELERATION*i,this.velocity.z>p&&(this.velocity.z=p)):this.velocity.z>p&&(this.velocity.z-=We.ACCELERATION*i,this.velocity.z<p&&(this.velocity.z=p))}else{this.state!==Ft.IDLE&&!this.isAttacking()&&(this.state=Ft.IDLE);const d=We.DRAG*i;this.velocity.x>0?this.velocity.x=Math.max(0,this.velocity.x-d):this.velocity.x<0&&(this.velocity.x=Math.min(0,this.velocity.x+d)),this.velocity.z>0?this.velocity.z=Math.max(0,this.velocity.z-d):this.velocity.z<0&&(this.velocity.z=Math.min(0,this.velocity.z+d))}}handleAI(e,i){if(this.state===Ft.HIT||this.state===Ft.STUNNED||this.state===Ft.VICTORY||this.state===Ft.DEAD||this.isAttacking())return;if(this.attackCooldown>0&&(this.attackCooldown-=i*60),this.aiTimer++,this.aiTimer>45)if(this.aiTimer=0,this.mesh.position.distanceTo(e.mesh.position)<2.5){const h=Math.random();h<.3?this.aiAction="ATTACK":h<.6?this.aiAction="BLOCK":this.aiAction="MOVE_BACK"}else this.aiAction="MOVE_FORWARD";if(this.aiAction==="ATTACK"&&this.attackCooldown<=0){const c=Math.random();c<.33?this.attack(Ft.ATTACK_PUNCH):c<.66?this.attack(Ft.ATTACK_KICK):this.attack(Ft.ATTACK_LOW),this.aiAction="IDLE";return}if(this.aiAction==="BLOCK"){this.state=Ft.BLOCK,this.velocity.set(0,0,0);return}let l=0;if(this.aiAction==="MOVE_FORWARD"&&(l=Math.sign(e.mesh.position.x-this.mesh.position.x)),this.aiAction==="MOVE_BACK"&&(l=-Math.sign(e.mesh.position.x-this.mesh.position.x)),l!==0){this.state=Ft.WALK;const c=l*We.MOVE_SPEED;this.velocity.x+=(c-this.velocity.x)*5*i}else this.state=Ft.IDLE,this.velocity.x*=.8}attack(e){this.state=e,this.stateTimer=0,this.velocity.set(0,0,0)}handleState(e,i){if(this.stateTimer+=i*60,this.isAttacking()){const l=Ih[this.state];if(l){const c=l.startup,h=l.active,d=l.recovery,m=c+h+d;this.stateTimer>c&&this.stateTimer<=c+h&&e.hitStopTimer<=0&&e.state!==Ft.DEAD&&this.checkHit(e,l),this.stateTimer>=m&&(this.state=Ft.IDLE)}else this.state=Ft.IDLE}const s=new j(e.mesh.position.x,this.mesh.position.y,e.mesh.position.z);this.mesh.lookAt(s)}checkHit(e,i){const s=new j,l=this.state===Ft.ATTACK_PUNCH?1.5:2,c=new j().subVectors(e.mesh.position,this.mesh.position).normalize();s.copy(this.mesh.position).add(c.multiplyScalar(1));const h=l*l;if(this.mesh.position.distanceToSquared(e.mesh.position)<h*1.5){let m=!1,p=!1;const _=e.state===Ft.BLOCK||e.state===Ft.WALK_BACK,v=e.state===Ft.BLOCK_LOW,S=e.state===Ft.DUCK||e.state===Ft.BLOCK_LOW;if(i.hitLevel==="high"?S?p=!0:_&&(m=!0):i.hitLevel==="mid"?(_&&(m=!0),v&&(m=!1)):i.hitLevel==="low"&&v&&(m=!0),p)return;if(this.hitStopTimer=8,e.hitStopTimer=8,m){e.takeDamage(i.damage*.1,this.mesh.position,!0,!1,!1,i);return}const M=e.isAttacking(),R=this.state===Ft.ATTACK_KICK||M&&i.hitLevel==="mid";e.takeDamage(i.damage,this.mesh.position,!1,R,M,i)}}takeDamage(e,i,s,l,c,h){let d=s?0:e;if(c&&(d*=1.25),this.hp=Math.max(0,this.hp-d),this.hp<=0){this.state=Ft.DEAD;return}this.state=s?(h==null?void 0:h.hitLevel)==="low"?Ft.BLOCK_LOW:Ft.BLOCK:Ft.HIT;let m=h?s?h.blockStun:h.stun:We.HIT_STUN_FRAMES;c&&!s&&(m+=10),this.stunDuration=m,this.flashTimer=10;const p=new j().subVectors(this.mesh.position,i).normalize();p.y=0,p.normalize();let _=(h==null?void 0:h.knockback)||1;s&&(_*=.5),c&&!s&&(_*=1.2),this.velocity.add(p.multiplyScalar(_*5))}handlePhysics(e,i){this.mesh.position.add(this.velocity.clone().multiplyScalar(i)),this.mesh.position.y>We.GROUND_Y?this.velocity.y-=We.GRAVITY*i:(this.velocity.y<-10&&this.elasticScale.set(1.4,.6,1.4),this.velocity.y=0,this.mesh.position.y=We.GROUND_Y),this.mesh.position.x=Math.max(-15,Math.min(15,this.mesh.position.x)),this.mesh.position.z=Math.max(-8,Math.min(8,this.mesh.position.z));const s=new j().subVectors(this.mesh.position,e.mesh.position);s.y=0;const l=s.length(),c=1,h=c+c;if(l<h&&l>.001){const d=h-l,m=s.normalize();this.mesh.position.add(m.multiplyScalar(d*.5))}}isAttacking(){return this.state===Ft.ATTACK_PUNCH||this.state===Ft.ATTACK_KICK||this.state===Ft.ATTACK_LOW}handleVisuals(){const e=this.state===Ft.HIT;this.bodyParts.torso.children[0].material.emissive.setHex(e&&this.flashTimer>0?11141120:0),this.flashTimer>0&&(this.flashTimer-=1)}updateAnimations(e){const i=Date.now()/1e3;if(this.elasticScale.lerp(new j(1,1,1),10*e),this.mesh.scale.copy(this.elasticScale),this.state===Ft.IDLE){const s=Math.sin(i*8)*.1;this.bodyParts.torso.rotation.z=s,this.bodyParts.head.rotation.z=-s*1.5;const l=Math.sin(i*4)*.05;this.elasticScale.set(1+l,1-l,1+l)}if((this.state===Ft.WALK||this.state===Ft.WALK_FORWARD||this.state===Ft.WALK_BACK)&&(this.bodyParts.legL.rotation.x=Math.sin(i*20)*1.5,this.bodyParts.kneeL.rotation.x=-2,this.bodyParts.legR.rotation.x=Math.sin(i*20+Math.PI)*1.5,this.bodyParts.kneeR.rotation.x=-2,this.bodyParts.armL.rotation.z=.5+Math.sin(i*20)*.5,this.bodyParts.armR.rotation.z=-.5-Math.sin(i*20)*.5),(this.state===Ft.DASH_FORWARD||this.state===Ft.DASH_BACK)&&(this.bodyParts.legL.rotation.x-=30*e,this.bodyParts.legR.rotation.x+=30*e,this.bodyParts.torso.rotation.x=.5,this.elasticScale.set(1.5,.7,1)),this.state===Ft.ATTACK_PUNCH){this.bodyParts.fistR.scale.set(1,1,1);const s=Ih[this.state];if(s){const l=Math.min(1,this.stateTimer/(s.startup+s.active+s.recovery));l>.3&&l<.6?(this.bodyParts.fistR.scale.set(3.5,3.5,3.5),this.bodyParts.armR.rotation.x=-1.57,this.bodyParts.lowerArmR.scale.y=2):this.bodyParts.lowerArmR.scale.y=1}}if(this.state===Ft.ATTACK_KICK){this.bodyParts.bootR.scale.set(1,1,1);const s=Ih[this.state];if(s){const l=Math.min(1,this.stateTimer/(s.startup+s.active+s.recovery));l>.3&&l<.6&&(this.bodyParts.bootR.scale.set(3,3,3),this.bodyParts.legR.rotation.x=-1.8)}}if(this.mesh.position.y>We.GROUND_Y+.5&&this.elasticScale.set(.7,1.5,.7),this.mesh.position.y<=We.GROUND_Y&&this.velocity.y<-5&&this.elasticScale.set(1.5,.5,1.5),this.state===Ft.DEAD){this.elasticScale.set(2,.1,2),this.mesh.position.y=.1;return}this.state===Ft.HIT||this.state===Ft.STUNNED?(this.elasticScale.set(1+Math.random()*.4,1-Math.random()*.2,1+Math.random()*.4),this.bodyParts.head.scale.set(1.5,1.5,1.5)):this.bodyParts.head.scale.set(1,1,1)}animateDead(){this.mesh.rotation.x=-1.5,this.mesh.position.y=.2}}class nA{constructor(){this.keys={},this.mouseLeft=!1,this.mouseRight=!1,this.onKeyDownCallback=null,window.addEventListener("keydown",e=>this.onKeyDown(e)),window.addEventListener("keyup",e=>this.onKeyUp(e)),window.addEventListener("mousedown",e=>this.onMouseDown(e)),window.addEventListener("mouseup",e=>this.onMouseUp(e)),window.addEventListener("contextmenu",e=>e.preventDefault())}onMouseDown(e){e.button===0&&(this.mouseLeft=!0),e.button===2&&(this.mouseRight=!0)}onMouseUp(e){e.button===0&&(this.mouseLeft=!1),e.button===2&&(this.mouseRight=!1)}onKeyDown(e){this.keys[e.code]||this.onKeyDownCallback&&this.onKeyDownCallback(e.code),this.keys[e.code]=!0}onKeyUp(e){this.keys[e.code]=!1}isPressed(e){return!!this.keys[e]}cleanup(){window.removeEventListener("keydown",e=>this.onKeyDown(e)),window.removeEventListener("keyup",e=>this.onKeyUp(e))}}class iA{constructor(e,i){this.animationId=0,this.lastTime=0,this.timeLeft=We.ROUND_TIME,this.particles=[],this.animate=c=>{this.animationId=requestAnimationFrame(this.animate);const h=(c-this.lastTime)/1e3;if(this.lastTime=c,this.p1.hp<=0||this.p2.hp<=0||this.timeLeft<=0){this.updateFighters(h,c),this.updateCamera(),this.renderer.render(this.scene,this.camera),this.broadcastState();return}const d=this.p1.hp,m=this.p2.hp;this.updateFighters(h,c),this.updateParticles(),this.updateCamera(),this.p1.hp<d&&this.createHitParticles(this.p1.mesh.position),this.p2.hp<m&&this.createHitParticles(this.p2.mesh.position),this.renderer.render(this.scene,this.camera),this.broadcastState()},this.handleResize=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},this.onStateChange=i,this.input=new nA,this.input.onKeyDownCallback=c=>{this.p1&&this.p1.handleInputEvent(c)},this.scene=new ky,this.scene.background=new xe(15790320),this.scene.fog=new Xd(15790320,20,80),this.camera=new vi(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,5,10),this.renderer=new eA({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0;const s=new iM(16777215,.6);this.scene.add(s);const l=new nM(16777198,1.2);l.position.set(10,20,10),l.castShadow=!0,l.shadow.mapSize.width=2048,l.shadow.mapSize.height=2048,this.scene.add(l),this.createEnvironment(),this.p1=new B_(!0,16724787),this.p2=new B_(!1,3355647),this.scene.add(this.p1.mesh),this.scene.add(this.p2.mesh),this.p2.mesh.rotation.y=-Math.PI,setInterval(()=>{this.p1.hp>0&&this.p2.hp>0&&this.timeLeft>0&&(this.timeLeft--,this.broadcastState())},1e3),this.lastTime=performance.now(),this.animate(this.lastTime),window.addEventListener("resize",this.handleResize)}createEnvironment(){const e=new Jo(100,100),i=new Ic({color:15658734,roughness:1,metalness:0}),s=new Ye(e,i);s.rotation.x=-Math.PI/2,s.position.y=-.01,s.receiveShadow=!0,this.scene.add(s);const l=new sM(100,50,13421772,15658734);this.scene.add(l)}createHitParticles(e){for(let i=0;i<12;i++){const s=new Yd(.2,0),l=Math.random()>.5?16776960:16711935,c=new kd({color:l}),h=new Ye(s,c);h.position.copy(e);const d=new j((Math.random()-.5)*4,Math.random()*4,(Math.random()-.5)*4);this.scene.add(h),this.particles.push({mesh:h,life:40,velocity:d})}}updateParticles(){for(let e=this.particles.length-1;e>=0;e--){const i=this.particles[e];i.life--,i.mesh.position.add(i.velocity),i.velocity.y-=.05,i.mesh.rotation.x+=.4,i.mesh.rotation.y+=.4,i.life<=0&&(this.scene.remove(i.mesh),this.particles.splice(e,1))}}updateFighters(e,i){this.p1.update(e,this.input,this.p2,i),this.p2.update(e,this.input,this.p1,i)}updateCamera(){const e=new j().addVectors(this.p1.mesh.position,this.p2.mesh.position).multiplyScalar(.5),i=this.p1.mesh.position.distanceTo(this.p2.mesh.position),s=10,l=Math.min(20,Math.max(0,i-3)*.8),c=s+l,h=3.5+l*.1,d=new j(e.x,h,c);this.camera.position.lerp(d,.1);const m=new j(e.x,2.5,0);this.camera.lookAt(m)}broadcastState(){let e=null;this.p1.hp<=0?e="Player 2":this.p2.hp<=0?e="Player 1":this.timeLeft===0&&(e=this.p1.hp>this.p2.hp?"Player 1":this.p2.hp>this.p1.hp?"Player 2":"Draw"),this.onStateChange({p1Health:this.p1.hp,p2Health:this.p2.hp,timeLeft:this.timeLeft,gameOver:e!==null,winner:e})}cleanup(){this.input.cleanup(),window.removeEventListener("resize",this.handleResize),cancelAnimationFrame(this.animationId)}}const aA=({gameState:o})=>{const e=o.p1Health/We.MAX_HEALTH*100,i=o.p2Health/We.MAX_HEALTH*100;return Ne.jsxs("div",{className:"absolute inset-0 pointer-events-none select-none overflow-hidden",children:[Ne.jsxs("div",{className:"absolute top-0 w-full p-4 flex justify-between items-start",children:[Ne.jsxs("div",{className:"w-2/5 max-w-md relative",children:[Ne.jsx("div",{className:"text-cyan-400 font-bold text-xl mb-1 ml-1 tracking-widest italic",style:{textShadow:"0px 0px 5px cyan"},children:"P1 // IRON"}),Ne.jsx("div",{className:"h-8 w-full bg-gray-900 border-2 border-cyan-800 skew-x-[-15deg] overflow-hidden relative shadow-[0_0_15px_rgba(0,255,255,0.3)]",children:Ne.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-600 to-white transition-all duration-200",style:{width:`${e}%`}})})]}),Ne.jsx("div",{className:"w-24 h-20 bg-black/80 border-b-4 border-yellow-500 flex items-center justify-center relative top-[-5px] shadow-lg z-10 clip-path-polygon",children:Ne.jsx("span",{className:`text-5xl font-black tracking-tighter ${o.timeLeft<10?"text-red-500 animate-pulse":"text-yellow-400"}`,style:{textShadow:"0 2px 0 black"},children:o.timeLeft})}),Ne.jsxs("div",{className:"w-2/5 max-w-md relative",children:[Ne.jsx("div",{className:"text-pink-500 font-bold text-xl mb-1 mr-1 text-right tracking-widest italic",style:{textShadow:"0px 0px 5px magenta"},children:"P2 // FIST"}),Ne.jsx("div",{className:"h-8 w-full bg-gray-900 border-2 border-pink-800 skew-x-[15deg] overflow-hidden relative shadow-[0_0_15px_rgba(255,0,128,0.3)]",children:Ne.jsx("div",{className:"h-full bg-gradient-to-l from-pink-600 to-white transition-all duration-200 float-right",style:{width:`${i}%`}})})]})]}),Ne.jsxs("div",{className:"absolute bottom-4 left-4 text-white text-xs opacity-50 bg-black/50 p-2 rounded",children:[Ne.jsx("p",{className:"font-bold mb-1",children:"P1 (Red)"}),Ne.jsx("p",{children:"WASD - Move"}),Ne.jsx("p",{children:"F - Punch"}),Ne.jsx("p",{children:"G - Kick"})]}),Ne.jsxs("div",{className:"absolute bottom-4 right-4 text-white text-xs opacity-50 bg-black/50 p-2 rounded text-right",children:[Ne.jsx("p",{className:"font-bold mb-1",children:"P2 (Blue)"}),Ne.jsx("p",{children:"Arrows - Move"}),Ne.jsx("p",{children:"K - Punch"}),Ne.jsx("p",{children:"L - Kick"})]}),o.gameOver&&Ne.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-50 animate-in fade-in duration-500",children:[Ne.jsx("h1",{className:"text-8xl font-black text-yellow-500 mb-4 tracking-tighter",style:{textShadow:"0 0 20px orange"},children:"K.O."}),Ne.jsxs("h2",{className:"text-4xl text-white font-bold uppercase tracking-widest mb-8",children:[o.winner," WINS"]}),Ne.jsx("button",{className:"pointer-events-auto px-8 py-3 bg-white text-black font-bold text-xl hover:bg-gray-200 hover:scale-105 transition-transform",onClick:()=>window.location.reload(),children:"REMATCH"})]})]})},sA=()=>{const o=Vo.useRef(null),e=Vo.useRef(null),[i,s]=Vo.useState({p1Health:We.MAX_HEALTH,p2Health:We.MAX_HEALTH,timeLeft:We.ROUND_TIME,gameOver:!1,winner:null});return Vo.useEffect(()=>(o.current&&!e.current&&(e.current=new iA(o.current,l=>{s(c=>c.timeLeft!==l.timeLeft||c.p1Health!==l.p1Health||c.p2Health!==l.p2Health||c.gameOver!==l.gameOver?l:c)})),()=>{e.current&&(e.current.cleanup(),e.current=null)}),[]),Ne.jsxs("div",{className:"relative w-screen h-screen bg-black overflow-hidden",children:[Ne.jsx("canvas",{ref:o,className:"block w-full h-full"}),Ne.jsx(aA,{gameState:i})]})},Mv=document.getElementById("root");if(!Mv)throw new Error("Could not find root element to mount to");const rA=BS.createRoot(Mv);rA.render(Ne.jsx(DS.StrictMode,{children:Ne.jsx(sA,{})}));
