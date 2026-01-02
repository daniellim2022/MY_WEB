(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function H_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Jf={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function CS(){if(wg)return Lo;wg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var Dg;function wS(){return Dg||(Dg=1,Jf.exports=CS()),Jf.exports}var Ne=wS(),$f={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function DS(){if(Ug)return ae;Ug=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function E(P){return P===null||typeof P!="object"?null:(P=S&&P[S]||P["@@iterator"],typeof P=="function"?P:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function _(P,at,gt){this.props=P,this.context=at,this.refs=y,this.updater=gt||R}_.prototype.isReactComponent={},_.prototype.setState=function(P,at){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,at,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function D(){}D.prototype=_.prototype;function L(P,at,gt){this.props=P,this.context=at,this.refs=y,this.updater=gt||R}var U=L.prototype=new D;U.constructor=L,w(U,_.prototype),U.isPureReactComponent=!0;var z=Array.isArray;function I(){}var N={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function T(P,at,gt){var bt=gt.ref;return{$$typeof:o,type:P,key:at,ref:bt!==void 0?bt:null,props:gt}}function C(P,at){return T(P.type,at,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function Y(P){var at={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(gt){return at[gt]})}var J=/\/+/g;function ct(P,at){return typeof P=="object"&&P!==null&&P.key!=null?Y(""+P.key):at.toString(36)}function lt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(I,I):(P.status="pending",P.then(function(at){P.status==="pending"&&(P.status="fulfilled",P.value=at)},function(at){P.status==="pending"&&(P.status="rejected",P.reason=at)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function B(P,at,gt,bt,Bt){var it=typeof P;(it==="undefined"||it==="boolean")&&(P=null);var ft=!1;if(P===null)ft=!0;else switch(it){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(P.$$typeof){case o:case t:ft=!0;break;case x:return ft=P._init,B(ft(P._payload),at,gt,bt,Bt)}}if(ft)return Bt=Bt(P),ft=bt===""?"."+ct(P,0):bt,z(Bt)?(gt="",ft!=null&&(gt=ft.replace(J,"$&/")+"/"),B(Bt,at,gt,"",function(Ft){return Ft})):Bt!=null&&(H(Bt)&&(Bt=C(Bt,gt+(Bt.key==null||P&&P.key===Bt.key?"":(""+Bt.key).replace(J,"$&/")+"/")+ft)),at.push(Bt)),1;ft=0;var wt=bt===""?".":bt+":";if(z(P))for(var kt=0;kt<P.length;kt++)bt=P[kt],it=wt+ct(bt,kt),ft+=B(bt,at,gt,it,Bt);else if(kt=E(P),typeof kt=="function")for(P=kt.call(P),kt=0;!(bt=P.next()).done;)bt=bt.value,it=wt+ct(bt,kt++),ft+=B(bt,at,gt,it,Bt);else if(it==="object"){if(typeof P.then=="function")return B(lt(P),at,gt,bt,Bt);throw at=String(P),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ft}function G(P,at,gt){if(P==null)return P;var bt=[],Bt=0;return B(P,bt,"","",function(it){return at.call(gt,it,Bt++)}),bt}function st(P){if(P._status===-1){var at=P._result;at=at(),at.then(function(gt){(P._status===0||P._status===-1)&&(P._status=1,P._result=gt)},function(gt){(P._status===0||P._status===-1)&&(P._status=2,P._result=gt)}),P._status===-1&&(P._status=0,P._result=at)}if(P._status===1)return P._result.default;throw P._result}var yt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},xt={map:G,forEach:function(P,at,gt){G(P,function(){at.apply(this,arguments)},gt)},count:function(P){var at=0;return G(P,function(){at++}),at},toArray:function(P){return G(P,function(at){return at})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ae.Activity=g,ae.Children=xt,ae.Component=_,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=L,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ae.__COMPILER_RUNTIME={__proto__:null,c:function(P){return N.H.useMemoCache(P)}},ae.cache=function(P){return function(){return P.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(P,at,gt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var bt=w({},P.props),Bt=P.key;if(at!=null)for(it in at.key!==void 0&&(Bt=""+at.key),at)!X.call(at,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&at.ref===void 0||(bt[it]=at[it]);var it=arguments.length-2;if(it===1)bt.children=gt;else if(1<it){for(var ft=Array(it),wt=0;wt<it;wt++)ft[wt]=arguments[wt+2];bt.children=ft}return T(P.type,Bt,bt)},ae.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ae.createElement=function(P,at,gt){var bt,Bt={},it=null;if(at!=null)for(bt in at.key!==void 0&&(it=""+at.key),at)X.call(at,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Bt[bt]=at[bt]);var ft=arguments.length-2;if(ft===1)Bt.children=gt;else if(1<ft){for(var wt=Array(ft),kt=0;kt<ft;kt++)wt[kt]=arguments[kt+2];Bt.children=wt}if(P&&P.defaultProps)for(bt in ft=P.defaultProps,ft)Bt[bt]===void 0&&(Bt[bt]=ft[bt]);return T(P,it,Bt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(P){return{$$typeof:d,render:P}},ae.isValidElement=H,ae.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:st}},ae.memo=function(P,at){return{$$typeof:p,type:P,compare:at===void 0?null:at}},ae.startTransition=function(P){var at=N.T,gt={};N.T=gt;try{var bt=P(),Bt=N.S;Bt!==null&&Bt(gt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(I,yt)}catch(it){yt(it)}finally{at!==null&&gt.types!==null&&(at.types=gt.types),N.T=at}},ae.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ae.use=function(P){return N.H.use(P)},ae.useActionState=function(P,at,gt){return N.H.useActionState(P,at,gt)},ae.useCallback=function(P,at){return N.H.useCallback(P,at)},ae.useContext=function(P){return N.H.useContext(P)},ae.useDebugValue=function(){},ae.useDeferredValue=function(P,at){return N.H.useDeferredValue(P,at)},ae.useEffect=function(P,at){return N.H.useEffect(P,at)},ae.useEffectEvent=function(P){return N.H.useEffectEvent(P)},ae.useId=function(){return N.H.useId()},ae.useImperativeHandle=function(P,at,gt){return N.H.useImperativeHandle(P,at,gt)},ae.useInsertionEffect=function(P,at){return N.H.useInsertionEffect(P,at)},ae.useLayoutEffect=function(P,at){return N.H.useLayoutEffect(P,at)},ae.useMemo=function(P,at){return N.H.useMemo(P,at)},ae.useOptimistic=function(P,at){return N.H.useOptimistic(P,at)},ae.useReducer=function(P,at,gt){return N.H.useReducer(P,at,gt)},ae.useRef=function(P){return N.H.useRef(P)},ae.useState=function(P){return N.H.useState(P)},ae.useSyncExternalStore=function(P,at,gt){return N.H.useSyncExternalStore(P,at,gt)},ae.useTransition=function(){return N.H.useTransition()},ae.version="19.2.3",ae}var Lg;function Nd(){return Lg||(Lg=1,$f.exports=DS()),$f.exports}var Go=Nd();const US=H_(Go);var th={exports:{}},No={},eh={exports:{}},nh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function LS(){return Ng||(Ng=1,(function(o){function t(B,G){var st=B.length;B.push(G);t:for(;0<st;){var yt=st-1>>>1,xt=B[yt];if(0<l(xt,G))B[yt]=G,B[st]=xt,st=yt;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var G=B[0],st=B.pop();if(st!==G){B[0]=st;t:for(var yt=0,xt=B.length,P=xt>>>1;yt<P;){var at=2*(yt+1)-1,gt=B[at],bt=at+1,Bt=B[bt];if(0>l(gt,st))bt<xt&&0>l(Bt,gt)?(B[yt]=Bt,B[bt]=st,yt=bt):(B[yt]=gt,B[at]=st,yt=at);else if(bt<xt&&0>l(Bt,st))B[yt]=Bt,B[bt]=st,yt=bt;else break t}}return G}function l(B,G){var st=B.sortIndex-G.sortIndex;return st!==0?st:B.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,g=null,S=3,E=!1,R=!1,w=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(B){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=B)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function z(B){if(w=!1,U(B),!R)if(i(m)!==null)R=!0,I||(I=!0,Y());else{var G=i(p);G!==null&&lt(z,G.startTime-B)}}var I=!1,N=-1,X=5,T=-1;function C(){return y?!0:!(o.unstable_now()-T<X)}function H(){if(y=!1,I){var B=o.unstable_now();T=B;var G=!0;try{t:{R=!1,w&&(w=!1,D(N),N=-1),E=!0;var st=S;try{e:{for(U(B),g=i(m);g!==null&&!(g.expirationTime>B&&C());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,S=g.priorityLevel;var xt=yt(g.expirationTime<=B);if(B=o.unstable_now(),typeof xt=="function"){g.callback=xt,U(B),G=!0;break e}g===i(m)&&s(m),U(B)}else s(m);g=i(m)}if(g!==null)G=!0;else{var P=i(p);P!==null&&lt(z,P.startTime-B),G=!1}}break t}finally{g=null,S=st,E=!1}G=void 0}}finally{G?Y():I=!1}}}var Y;if(typeof L=="function")Y=function(){L(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ct=J.port2;J.port1.onmessage=H,Y=function(){ct.postMessage(null)}}else Y=function(){_(H,0)};function lt(B,G){N=_(function(){B(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(B){switch(S){case 1:case 2:case 3:var G=3;break;default:G=S}var st=S;S=G;try{return B()}finally{S=st}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var st=S;S=B;try{return G()}finally{S=st}},o.unstable_scheduleCallback=function(B,G,st){var yt=o.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?yt+st:yt):st=yt,B){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=st+xt,B={id:x++,callback:G,priorityLevel:B,startTime:st,expirationTime:xt,sortIndex:-1},st>yt?(B.sortIndex=st,t(p,B),i(m)===null&&B===i(p)&&(w?(D(N),N=-1):w=!0,lt(z,st-yt))):(B.sortIndex=xt,t(m,B),R||E||(R=!0,I||(I=!0,Y()))),B},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(B){var G=S;return function(){var st=S;S=G;try{return B.apply(this,arguments)}finally{S=st}}}})(nh)),nh}var Og;function NS(){return Og||(Og=1,eh.exports=LS()),eh.exports}var ih={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function OS(){if(Pg)return On;Pg=1;var o=Nd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},On.flushSync=function(m){var p=h.T,x=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=x,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:E}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=d(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,x){return h.H.useFormState(m,p,x)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.3",On}var zg;function PS(){if(zg)return ih.exports;zg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ih.exports=OS(),ih.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function zS(){if(Ig)return No;Ig=1;var o=NS(),t=Nd(),i=PS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,b=u.child;b;){if(b===a){v=!0,a=u,r=f;break}if(b===r){v=!0,r=u,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,r=u;break}if(b===r){v=!0,r=f,a=u;break}b=b.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case I:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case L:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var lt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function P(e){return{current:e}}function at(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function gt(e,n){xt++,yt[xt]=e.current,e.current=n}var bt=P(null),Bt=P(null),it=P(null),ft=P(null);function wt(e,n){switch(gt(it,n),gt(Bt,e),gt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?J0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=J0(n),e=$0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(bt),gt(bt,e)}function kt(){at(bt),at(Bt),at(it)}function Ft(e){e.memoizedState!==null&&gt(ft,e);var n=bt.current,a=$0(n,e.type);n!==a&&(gt(Bt,e),gt(bt,a))}function he(e){Bt.current===e&&(at(bt),at(Bt)),ft.current===e&&(at(ft),Co._currentValue=st)}var $e,_e;function de(e){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+_e}var we=!1;function re(e,n){if(!e||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var nt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){nt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var F=v.split(`
`),tt=b.split(`
`);for(u=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(r===F.length||u===tt.length)for(r=F.length-1,u=tt.length-1;1<=r&&0<=u&&F[r]!==tt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(F[r]!==tt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||F[r]!==tt[u]){var ht=`
`+F[r].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=r&&0<=u);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?de(a):""}function tn(e,n){switch(e.tag){case 26:case 27:case 5:return de(e.type);case 16:return de("Lazy");case 13:return e.child!==n&&n!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return de("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=tn(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var je=Object.prototype.hasOwnProperty,Ee=o.unstable_scheduleCallback,Oe=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,O=o.unstable_requestPaint,M=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,jt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Xt=o.log,ee=o.unstable_setDisableYieldValue,Mt=null,Et=null;function zt(e){if(typeof Xt=="function"&&ee(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:W,Ct=Math.log,le=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ct(e)/le|0)|0}var Ut=256,Tt=262144,Pt=4194304;function St(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?u=St(r):(v&=b,v!==0?u=St(v):a||(a=b&~e,a!==0&&(u=St(a))))):(b=r&~f,b!==0?u=St(b):v!==0?u=St(v):a||(a=r&~e,a!==0&&(u=St(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function At(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,n,a,r,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,F=e.expirationTimes,tt=e.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-Ot(a),mt=1<<ht;b[ht]=0,F[ht]=-1;var nt=tt[ht];if(nt!==null)for(tt[ht]=null,ht=0;ht<nt.length;ht++){var ot=nt[ht];ot!==null&&(ot.lane&=-536870913)}a&=~mt}r!==0&&Jo(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Jo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ot(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Fr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ot(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Ns(e,n){var a=n&-n;return a=(a&42)!==0?1:Hr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Hr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Os(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Mg(e.type))}function Ui(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var oi=Math.random().toString(36).slice(2),on="__reactFiber$"+oi,Sn="__reactProps$"+oi,yi="__reactContainer$"+oi,Ps="__reactEvents$"+oi,zs="__reactListeners$"+oi,$o="__reactHandles$"+oi,Vr="__reactResources$"+oi,ns="__reactMarker$"+oi;function kr(e){delete e[on],delete e[Sn],delete e[Ps],delete e[zs],delete e[$o]}function ya(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[yi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=rg(e);e!==null;){if(a=e[on])return a;e=rg(e)}return n}e=a,a=e.parentNode}return null}function Ma(e){if(e=e[on]||e[yi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function is(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ea(e){var n=e[Vr];return n||(n=e[Vr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(e){e[ns]=!0}var K=new Set,rt={};function et(e,n){Q(e,n),Q(e+"Capture",n)}function Q(e,n){for(rt[e]=n,e=0;e<n.length;e++)K.add(n[e])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Lt={};function Gt(e){return je.call(Lt,e)?!0:je.call(It,e)?!1:Dt.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function Wt(e,n,a){if(Gt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){if(!e._valueTracker){var n=De(e)?"checked":"value";e._valueTracker=Ze(e,n,""+e[n])}}function Pe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=De(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Zt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function ie(e){return e.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(e,n,a,r,u,f,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$t(n)):e.value!==""+$t(n)&&(e.value=""+$t(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,v,$t(n)):a!=null?Mn(e,v,$t(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+$t(b):e.removeAttribute("name")}function qi(e,n,a,r,u,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(e);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),qe(e)}function Mn(e,n,a){n==="number"&&Zt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function li(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+$t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$t(a):""}function En(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(lt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$t(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),qe(e)}function dn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Is(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&bn(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&bn(e,f,n[f])}function Mi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return bv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var Kc=null;function jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bs=null,Fs=null;function Qd(e){var n=Ma(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(yn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Sn]||null;if(!u)throw Error(s(90));yn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Pe(r)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&li(e,!!a.multiple,n,!1)}}}var Zc=!1;function Jd(e,n,a){if(Zc)return e(n,a);Zc=!0;try{var r=e(n);return r}finally{if(Zc=!1,(Bs!==null||Fs!==null)&&(Gl(),Bs&&(n=Bs,e=Fs,Fs=Bs=null,Qd(n),e)))for(n=0;n<e.length;n++)Qd(e[n])}}function Xr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Sn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=!1;if(Ki)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){Qc=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{Qc=!1}var Ta=null,Jc=null,el=null;function $d(){if(el)return el;var e,n=Jc,a=n.length,r,u="value"in Ta?Ta.value:Ta.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return el=u.slice(e,1<r?1-r:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function tp(){return!1}function Gn(e){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:tp,this.isPropagationStopped=tp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=Gn(as),qr=g({},as,{view:0,detail:0}),Av=Gn(qr),$c,tu,Yr,sl=g({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?($c=e.screenX-Yr.screenX,tu=e.screenY-Yr.screenY):tu=$c=0,Yr=e),$c)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),ep=Gn(sl),Rv=g({},sl,{dataTransfer:0}),Cv=Gn(Rv),wv=g({},qr,{relatedTarget:0}),eu=Gn(wv),Dv=g({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=Gn(Dv),Lv=g({},as,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nv=Gn(Lv),Ov=g({},as,{data:0}),np=Gn(Ov),Pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Iv[e])?!!n[e]:!1}function nu(){return Bv}var Fv=g({},qr,{key:function(e){if(e.key){var n=Pv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hv=Gn(Fv),Gv=g({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=Gn(Gv),Vv=g({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),kv=Gn(Vv),Xv=g({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=Gn(Xv),qv=g({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=Gn(qv),Kv=g({},as,{newState:0,oldState:0}),jv=Gn(Kv),Zv=[9,13,27,32],iu=Ki&&"CompositionEvent"in window,Kr=null;Ki&&"documentMode"in document&&(Kr=document.documentMode);var Qv=Ki&&"TextEvent"in window&&!Kr,ap=Ki&&(!iu||Kr&&8<Kr&&11>=Kr),sp=" ",rp=!1;function op(e,n){switch(e){case"keyup":return Zv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function Jv(e,n){switch(e){case"compositionend":return lp(n);case"keypress":return n.which!==32?null:(rp=!0,sp);case"textInput":return e=n.data,e===sp&&rp?null:e;default:return null}}function $v(e,n){if(Hs)return e==="compositionend"||!iu&&op(e,n)?(e=$d(),el=Jc=Ta=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!tx[e.type]:n==="textarea"}function up(e,n,a,r){Bs?Fs?Fs.push(r):Fs=[r]:Bs=r,n=Kl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var jr=null,Zr=null;function ex(e){q0(e,0)}function rl(e){var n=is(e);if(Pe(n))return e}function fp(e,n){if(e==="change")return n}var hp=!1;if(Ki){var au;if(Ki){var su="oninput"in document;if(!su){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),su=typeof dp.oninput=="function"}au=su}else au=!1;hp=au&&(!document.documentMode||9<document.documentMode)}function pp(){jr&&(jr.detachEvent("onpropertychange",mp),Zr=jr=null)}function mp(e){if(e.propertyName==="value"&&rl(Zr)){var n=[];up(n,Zr,e,jc(e)),Jd(ex,n)}}function nx(e,n,a){e==="focusin"?(pp(),jr=n,Zr=a,jr.attachEvent("onpropertychange",mp)):e==="focusout"&&pp()}function ix(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(Zr)}function ax(e,n){if(e==="click")return rl(n)}function sx(e,n){if(e==="input"||e==="change")return rl(n)}function rx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:rx;function Qr(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!je.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _p(e,n){var a=gp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=gp(a)}}function vp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zt(e.document)}return n}function ru(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ox=Ki&&"documentMode"in document&&11>=document.documentMode,Gs=null,ou=null,Jr=null,lu=!1;function Sp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lu||Gs==null||Gs!==Zt(r)||(r=Gs,"selectionStart"in r&&ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Qr(Jr,r)||(Jr=r,r=Kl(ou,"onSelect"),0<r.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Gs)))}function ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Vs={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},cu={},yp={};Ki&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function rs(e){if(cu[e])return cu[e];if(!Vs[e])return e;var n=Vs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in yp)return cu[e]=n[a];return e}var Mp=rs("animationend"),Ep=rs("animationiteration"),Tp=rs("animationstart"),lx=rs("transitionrun"),cx=rs("transitionstart"),ux=rs("transitioncancel"),bp=rs("transitionend"),Ap=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function Ei(e,n){Ap.set(e,n),et(n,[e])}var ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ci=[],ks=0,fu=0;function ll(){for(var e=ks,n=fu=ks=0;n<e;){var a=ci[n];ci[n++]=null;var r=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&Rp(a,u,f)}}function cl(e,n,a,r){ci[ks++]=e,ci[ks++]=n,ci[ks++]=a,ci[ks++]=r,fu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function hu(e,n,a,r){return cl(e,n,a,r),ul(e)}function os(e,n){return cl(e,null,null,n),ul(e)}function Rp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ul(e){if(50<yo)throw yo=0,Mf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xs={};function fx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,r){return new fx(e,n,a,r)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function fl(e,n,a,r,u,f){var v=0;if(r=e,typeof e=="function")du(e)&&(v=1);else if(typeof e=="string")v=gS(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=Qn(31,a,n,u),e.elementType=T,e.lanes=f,e;case w:return ls(a.children,u,f,n);case y:v=8,u|=24;break;case _:return e=Qn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case z:return e=Qn(13,a,n,u),e.elementType=z,e.lanes=f,e;case I:return e=Qn(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break t;case D:v=9;break t;case U:v=11;break t;case N:v=14;break t;case X:v=16,r=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Qn(v,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function ls(e,n,a,r){return e=Qn(7,e,r,n),e.lanes=a,e}function pu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function wp(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function mu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Dp=new WeakMap;function ui(e,n){if(typeof e=="object"&&e!==null){var a=Dp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Dp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Ws=[],qs=0,hl=null,$r=0,fi=[],hi=0,ba=null,Li=1,Ni="";function Zi(e,n){Ws[qs++]=$r,Ws[qs++]=hl,hl=e,$r=n}function Up(e,n,a){fi[hi++]=Li,fi[hi++]=Ni,fi[hi++]=ba,ba=e;var r=Li;e=Ni;var u=32-Ot(r)-1;r&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Li=1<<32-Ot(n)+u|a<<u|r,Ni=f+e}else Li=1<<f|a<<u|r,Ni=e}function gu(e){e.return!==null&&(Zi(e,1),Up(e,1,0))}function _u(e){for(;e===hl;)hl=Ws[--qs],Ws[qs]=null,$r=Ws[--qs],Ws[qs]=null;for(;e===ba;)ba=fi[--hi],fi[hi]=null,Ni=fi[--hi],fi[hi]=null,Li=fi[--hi],fi[hi]=null}function Lp(e,n){fi[hi++]=Li,fi[hi++]=Ni,fi[hi++]=ba,Li=n.id,Ni=n.overflow,ba=e}var An=null,Ye=null,Se=!1,Aa=null,di=!1,vu=Error(s(519));function Ra(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(ui(n,e)),vu}function Np(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[on]=e,n[Sn]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)me(Eo[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),qi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),En(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Z0(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ra(e,!0)}function Op(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:An=An.return}}function Ys(e){if(e!==An)return!1;if(!Se)return Op(e),Se=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||If(e.type,e.memoizedProps)),a=!a),a&&Ye&&Ra(e),Op(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=sg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=sg(e)}else n===27?(n=Ye,Ga(e.type)?(e=Vf,Vf=null,Ye=e):Ye=n):Ye=An?mi(e.stateNode.nextSibling):null;return!0}function cs(){Ye=An=null,Se=!1}function xu(){var e=Aa;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Aa=null),e}function to(e){Aa===null?Aa=[e]:Aa.push(e)}var Su=P(null),us=null,Qi=null;function Ca(e,n,a){gt(Su,n._currentValue),n._currentValue=a}function Ji(e){e._currentValue=Su.current,at(Su)}function yu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Mu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var F=0;F<n.length;F++)if(b.context===n[F]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),yu(f.return,a,e),r||(v=null);break t}f=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),yu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Ks(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var b=u.type;Zn(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===ft.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}u=u.return}e!==null&&Mu(n,e,a,r),n.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fs(e){us=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return Pp(us,e)}function pl(e,n){return us===null&&fs(e),Pp(e,n)}function Pp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(e===null)throw Error(s(308));Qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qi=Qi.next=n;return a}var hx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},dx=o.unstable_scheduleCallback,px=o.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Eu(){return{controller:new hx,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&dx(px,function(){e.controller.abort()})}var no=null,Tu=0,js=0,Zs=null;function mx(e,n){if(no===null){var a=no=[];Tu=0,js=Cf(),Zs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Tu++,n.then(zp,zp),n}function zp(){if(--Tu===0&&no!==null){Zs!==null&&(Zs.status="fulfilled");var e=no;no=null,js=0,Zs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function gx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Ip=B.S;B.S=function(e,n){S0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&mx(e,n),Ip!==null&&Ip(e,n)};var hs=P(null);function bu(){var e=hs.current;return e!==null?e:Xe.pooledCache}function ml(e,n){n===null?gt(hs,hs.current):gt(hs,n.pool)}function Bp(){var e=bu();return e===null?null:{parent:ln._currentValue,pool:e}}var Qs=Error(s(460)),Au=Error(s(474)),gl=Error(s(542)),_l={then:function(){}};function Fp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e}throw ps=n,Qs}}function ds(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ps=a,Qs):a}}var ps=null;function Gp(){if(ps===null)throw Error(s(459));var e=ps;return ps=null,e}function Vp(e){if(e===Qs||e===gl)throw Error(s(483))}var Js=null,io=0;function vl(e){var n=io;return io+=1,Js===null&&(Js=[]),Hp(Js,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function kp(e){function n(j,k){if(e){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function r(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=ji(j,k),j.index=0,j.sibling=null,j}function f(j,k,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function v(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,k,$,pt){return k===null||k.tag!==6?(k=pu($,j.mode,pt),k.return=j,k):(k=u(k,$),k.return=j,k)}function F(j,k,$,pt){var Qt=$.type;return Qt===w?ht(j,k,$.props.children,pt,$.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&ds(Qt)===k.type)?(k=u(k,$.props),ao(k,$),k.return=j,k):(k=fl($.type,$.key,$.props,null,j.mode,pt),ao(k,$),k.return=j,k)}function tt(j,k,$,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=mu($,j.mode,pt),k.return=j,k):(k=u(k,$.children||[]),k.return=j,k)}function ht(j,k,$,pt,Qt){return k===null||k.tag!==7?(k=ls($,j.mode,pt,Qt),k.return=j,k):(k=u(k,$),k.return=j,k)}function mt(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=pu(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return $=fl(k.type,k.key,k.props,null,j.mode,$),ao($,k),$.return=j,$;case R:return k=mu(k,j.mode,$),k.return=j,k;case X:return k=ds(k),mt(j,k,$)}if(lt(k)||Y(k))return k=ls(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return mt(j,vl(k),$);if(k.$$typeof===L)return mt(j,pl(j,k),$);xl(j,k)}return null}function nt(j,k,$,pt){var Qt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qt!==null?null:b(j,k,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===Qt?F(j,k,$,pt):null;case R:return $.key===Qt?tt(j,k,$,pt):null;case X:return $=ds($),nt(j,k,$,pt)}if(lt($)||Y($))return Qt!==null?null:ht(j,k,$,pt,null);if(typeof $.then=="function")return nt(j,k,vl($),pt);if($.$$typeof===L)return nt(j,k,pl(j,$),pt);xl(j,$)}return null}function ot(j,k,$,pt,Qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get($)||null,b(k,j,""+pt,Qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return j=j.get(pt.key===null?$:pt.key)||null,F(k,j,pt,Qt);case R:return j=j.get(pt.key===null?$:pt.key)||null,tt(k,j,pt,Qt);case X:return pt=ds(pt),ot(j,k,$,pt,Qt)}if(lt(pt)||Y(pt))return j=j.get($)||null,ht(k,j,pt,Qt,null);if(typeof pt.then=="function")return ot(j,k,$,vl(pt),Qt);if(pt.$$typeof===L)return ot(j,k,$,pl(k,pt),Qt);xl(k,pt)}return null}function Vt(j,k,$,pt){for(var Qt=null,Ae=null,Kt=k,ce=k=0,xe=null;Kt!==null&&ce<$.length;ce++){Kt.index>ce?(xe=Kt,Kt=null):xe=Kt.sibling;var Re=nt(j,Kt,$[ce],pt);if(Re===null){Kt===null&&(Kt=xe);break}e&&Kt&&Re.alternate===null&&n(j,Kt),k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,Kt=xe}if(ce===$.length)return a(j,Kt),Se&&Zi(j,ce),Qt;if(Kt===null){for(;ce<$.length;ce++)Kt=mt(j,$[ce],pt),Kt!==null&&(k=f(Kt,k,ce),Ae===null?Qt=Kt:Ae.sibling=Kt,Ae=Kt);return Se&&Zi(j,ce),Qt}for(Kt=r(Kt);ce<$.length;ce++)xe=ot(Kt,j,ce,$[ce],pt),xe!==null&&(e&&xe.alternate!==null&&Kt.delete(xe.key===null?ce:xe.key),k=f(xe,k,ce),Ae===null?Qt=xe:Ae.sibling=xe,Ae=xe);return e&&Kt.forEach(function(qa){return n(j,qa)}),Se&&Zi(j,ce),Qt}function te(j,k,$,pt){if($==null)throw Error(s(151));for(var Qt=null,Ae=null,Kt=k,ce=k=0,xe=null,Re=$.next();Kt!==null&&!Re.done;ce++,Re=$.next()){Kt.index>ce?(xe=Kt,Kt=null):xe=Kt.sibling;var qa=nt(j,Kt,Re.value,pt);if(qa===null){Kt===null&&(Kt=xe);break}e&&Kt&&qa.alternate===null&&n(j,Kt),k=f(qa,k,ce),Ae===null?Qt=qa:Ae.sibling=qa,Ae=qa,Kt=xe}if(Re.done)return a(j,Kt),Se&&Zi(j,ce),Qt;if(Kt===null){for(;!Re.done;ce++,Re=$.next())Re=mt(j,Re.value,pt),Re!==null&&(k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return Se&&Zi(j,ce),Qt}for(Kt=r(Kt);!Re.done;ce++,Re=$.next())Re=ot(Kt,j,ce,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&Kt.delete(Re.key===null?ce:Re.key),k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return e&&Kt.forEach(function(RS){return n(j,RS)}),Se&&Zi(j,ce),Qt}function ke(j,k,$,pt){if(typeof $=="object"&&$!==null&&$.type===w&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:t:{for(var Qt=$.key;k!==null;){if(k.key===Qt){if(Qt=$.type,Qt===w){if(k.tag===7){a(j,k.sibling),pt=u(k,$.props.children),pt.return=j,j=pt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&ds(Qt)===k.type){a(j,k.sibling),pt=u(k,$.props),ao(pt,$),pt.return=j,j=pt;break t}a(j,k);break}else n(j,k);k=k.sibling}$.type===w?(pt=ls($.props.children,j.mode,pt,$.key),pt.return=j,j=pt):(pt=fl($.type,$.key,$.props,null,j.mode,pt),ao(pt,$),pt.return=j,j=pt)}return v(j);case R:t:{for(Qt=$.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(j,k.sibling),pt=u(k,$.children||[]),pt.return=j,j=pt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}pt=mu($,j.mode,pt),pt.return=j,j=pt}return v(j);case X:return $=ds($),ke(j,k,$,pt)}if(lt($))return Vt(j,k,$,pt);if(Y($)){if(Qt=Y($),typeof Qt!="function")throw Error(s(150));return $=Qt.call($),te(j,k,$,pt)}if(typeof $.then=="function")return ke(j,k,vl($),pt);if($.$$typeof===L)return ke(j,k,pl(j,$),pt);xl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(j,k.sibling),pt=u(k,$),pt.return=j,j=pt):(a(j,k),pt=pu($,j.mode,pt),pt.return=j,j=pt),v(j)):a(j,k)}return function(j,k,$,pt){try{io=0;var Qt=ke(j,k,$,pt);return Js=null,Qt}catch(Kt){if(Kt===Qs||Kt===gl)throw Kt;var Ae=Qn(29,Kt,null,j.mode);return Ae.lanes=pt,Ae.return=j,Ae}finally{}}}var ms=kp(!0),Xp=kp(!1),wa=!1;function Ru(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ul(e),Rp(e,null,a),n}return cl(e,r,n,a),ul(e)}function so(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Fr(e,a)}}function wu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Du=!1;function ro(){if(Du){var e=Zs;if(e!==null)throw e}}function oo(e,n,a,r){Du=!1;var u=e.updateQueue;wa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var F=b,tt=F.next;F.next=null,v===null?f=tt:v.next=tt,v=F;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==v&&(b===null?ht.firstBaseUpdate=tt:b.next=tt,ht.lastBaseUpdate=F))}if(f!==null){var mt=u.baseState;v=0,ht=tt=F=null,b=f;do{var nt=b.lane&-536870913,ot=nt!==b.lane;if(ot?(ve&nt)===nt:(r&nt)===nt){nt!==0&&nt===js&&(Du=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Vt=e,te=b;nt=n;var ke=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){mt=Vt.call(ke,mt,nt);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,nt=typeof Vt=="function"?Vt.call(ke,mt,nt):Vt,nt==null)break t;mt=g({},mt,nt);break t;case 2:wa=!0}}nt=b.callback,nt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(tt=ht=ot,F=mt):ht=ht.next=ot,v|=nt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ot=b,b=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ht===null&&(F=mt),u.baseState=F,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),za|=v,e.lanes=v,e.memoizedState=mt}}function Wp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function qp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wp(a[e],n)}var $s=P(null),Sl=P(0);function Yp(e,n){e=oa,gt(Sl,e),gt($s,n),oa=e|n.baseLanes}function Uu(){gt(Sl,oa),gt($s,$s.current)}function Lu(){oa=Sl.current,at($s),at(Sl)}var Jn=P(null),pi=null;function La(e){var n=e.alternate;gt(sn,sn.current&1),gt(Jn,e),pi===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(pi=e)}function Nu(e){gt(sn,sn.current),gt(Jn,e),pi===null&&(pi=e)}function Kp(e){e.tag===22?(gt(sn,sn.current),gt(Jn,e),pi===null&&(pi=e)):Na()}function Na(){gt(sn,sn.current),gt(Jn,Jn.current)}function $n(e){at(Jn),pi===e&&(pi=null),at(sn)}var sn=P(0);function yl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Hf(a)||Gf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,oe=null,Ge=null,cn=null,Ml=!1,tr=!1,gs=!1,El=0,lo=0,er=null,_x=0;function en(){throw Error(s(321))}function Ou(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Pu(e,n,a,r,u,f){return $i=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Um:Zu,gs=!1,f=a(r,u),gs=!1,tr&&(f=Zp(n,a,r,u)),jp(e),f}function jp(e){B.H=fo;var n=Ge!==null&&Ge.next!==null;if($i=0,cn=Ge=oe=null,Ml=!1,lo=0,er=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&dl(e)&&(un=!0))}function Zp(e,n,a,r){oe=e;var u=0;do{if(tr&&(er=null),lo=0,tr=!1,25<=u)throw Error(s(301));if(u+=1,cn=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Lm,f=n(a,r)}while(tr);return f}function vx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(oe.flags|=1024),n}function zu(){var e=El!==0;return El=0,e}function Iu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Bu(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}$i=0,cn=Ge=oe=null,tr=!1,lo=El=0,er=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?oe.memoizedState=cn=e:cn=cn.next=e,cn}function rn(){if(Ge===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=cn===null?oe.memoizedState:cn.next;if(n!==null)cn=n,Ge=e;else{if(e===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},cn===null?oe.memoizedState=cn=e:cn=cn.next=e}return cn}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var n=lo;return lo+=1,er===null&&(er=[]),e=Hp(er,e,n),n=oe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Um:Zu),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===L)return Rn(e)}throw Error(s(438,String(e)))}function Fu(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=rn();return Hu(n,Ge,e)}function Hu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=v=null,F=null,tt=n,ht=!1;do{var mt=tt.lane&-536870913;if(mt!==tt.lane?(ve&mt)===mt:($i&mt)===mt){var nt=tt.revertLane;if(nt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),mt===js&&(ht=!0);else if(($i&nt)===nt){tt=tt.next,nt===js&&(ht=!0);continue}else mt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(b=F=mt,v=f):F=F.next=mt,oe.lanes|=nt,za|=nt;mt=tt.action,gs&&a(f,mt),f=tt.hasEagerState?tt.eagerState:a(f,mt)}else nt={lane:mt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},F===null?(b=F=nt,v=f):F=F.next=nt,oe.lanes|=mt,za|=mt;tt=tt.next}while(tt!==null&&tt!==n);if(F===null?v=f:F.next=b,!Zn(f,e.memoizedState)&&(un=!0,ht&&(a=Zs,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=F,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Gu(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Zn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Qp(e,n,a){var r=oe,u=rn(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Zn((Ge||u).memoizedState,a);if(v&&(u.memoizedState=a,un=!0),u=u.queue,Xu(tm.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,nr(9,{destroy:void 0},$p.bind(null,r,u,a,n),null),Xe===null)throw Error(s(349));f||($i&127)!==0||Jp(r,n,a)}return a}function Jp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Tl(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function $p(e,n,a,r){n.value=a,n.getSnapshot=r,em(n)&&nm(e)}function tm(e,n,a){return a(function(){em(n)&&nm(e)})}function em(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function nm(e){var n=os(e,2);n!==null&&qn(n,e,2)}function Vu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),gs){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function im(e,n,a,r){return e.baseState=a,Hu(e,Ge,typeof r=="function"?r:ta)}function xx(e,n,a,r,u){if(wl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};B.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function am(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=B.T,v={};B.T=v;try{var b=a(u,r),F=B.S;F!==null&&F(v,b),sm(e,n,b)}catch(tt){ku(e,n,tt)}finally{f!==null&&v.types!==null&&(f.types=v.types),B.T=f}}else try{f=a(u,r),sm(e,n,f)}catch(tt){ku(e,n,tt)}}function sm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){rm(e,n,r)},function(r){return ku(e,n,r)}):rm(e,n,a)}function rm(e,n,a){n.status="fulfilled",n.value=a,om(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,am(e,a)))}function ku(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==r)}e.action=null}function om(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function lm(e,n){return n}function cm(e,n){if(Se){var a=Xe.formState;if(a!==null){t:{var r=oe;if(Se){if(Ye){e:{for(var u=Ye,f=di;u.nodeType!==8;){if(!f){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=mi(u.nextSibling),r=u.data==="F!";break t}}Ra(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},a.queue=r,a=Cm.bind(null,oe,r),r.dispatch=a,r=Vu(!1),f=ju.bind(null,oe,!1,r.queue),r=Bn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=xx.bind(null,oe,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function um(e){var n=rn();return fm(n,Ge,e)}function fm(e,n,a){if(n=Hu(e,n,lm)[0],e=Al(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=co(n)}catch(v){throw v===Qs?gl:v}else r=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,nr(9,{destroy:void 0},Sx.bind(null,u,a),null)),[r,f,e]}function Sx(e,n){e.action=n}function hm(e){var n=rn(),a=Ge;if(a!==null)return fm(n,a,e);rn(),n=n.memoizedState,a=rn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function nr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Tl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function dm(){return rn().memoizedState}function Rl(e,n,a,r){var u=Bn();oe.flags|=e,u.memoizedState=nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Cl(e,n,a,r){var u=rn();r=r===void 0?null:r;var f=u.memoizedState.inst;Ge!==null&&r!==null&&Ou(r,Ge.memoizedState.deps)?u.memoizedState=nr(n,f,a,r):(oe.flags|=e,u.memoizedState=nr(1|n,f,a,r))}function pm(e,n){Rl(8390656,8,e,n)}function Xu(e,n){Cl(2048,8,e,n)}function yx(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Tl(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function mm(e){var n=rn().memoizedState;return yx({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function gm(e,n){return Cl(4,2,e,n)}function _m(e,n){return Cl(4,4,e,n)}function vm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xm(e,n,a){a=a!=null?a.concat([e]):null,Cl(4,4,vm.bind(null,n,e),a)}function Wu(){}function Sm(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ou(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function ym(e,n){var a=rn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ou(n,r[1]))return r[0];if(r=e(),gs){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r}function qu(e,n,a){return a===void 0||($i&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=M0(),oe.lanes|=e,za|=e,a)}function Mm(e,n,a,r){return Zn(a,n)?a:$s.current!==null?(e=qu(e,a,r),Zn(e,n)||(un=!0),e):($i&42)===0||($i&1073741824)!==0&&(ve&261930)===0?(un=!0,e.memoizedState=a):(e=M0(),oe.lanes|=e,za|=e,n)}function Em(e,n,a,r,u){var f=G.p;G.p=f!==0&&8>f?f:8;var v=B.T,b={};B.T=b,ju(e,!1,n,a);try{var F=u(),tt=B.S;if(tt!==null&&tt(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ht=gx(F,r);uo(e,n,ht,ni(e))}else uo(e,n,r,ni(e))}catch(mt){uo(e,n,{then:function(){},status:"rejected",reason:mt},ni())}finally{G.p=f,v!==null&&b.types!==null&&(v.types=b.types),B.T=v}}function Mx(){}function Yu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Tm(e).queue;Em(e,u,n,st,a===null?Mx:function(){return bm(e),a(r)})}function Tm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function bm(e){var n=Tm(e);n.next===null&&(n=e.alternate.memoizedState),uo(e,n.next.queue,{},ni())}function Ku(){return Rn(Co)}function Am(){return rn().memoizedState}function Rm(){return rn().memoizedState}function Ex(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Da(a);var r=Ua(n,e,a);r!==null&&(qn(r,n,a),so(r,n,a)),n={cache:Eu()},e.payload=n;return}n=n.return}}function Tx(e,n,a){var r=ni();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},wl(e)?wm(n,a):(a=hu(e,n,a,r),a!==null&&(qn(a,e,r),Dm(a,n,r)))}function Cm(e,n,a){var r=ni();uo(e,n,a,r)}function uo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(e))wm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(u.hasEagerState=!0,u.eagerState=b,Zn(b,v))return cl(e,n,u,0),Xe===null&&ll(),!1}catch{}finally{}if(a=hu(e,n,u,r),a!==null)return qn(a,e,r),Dm(a,n,r),!0}return!1}function ju(e,n,a,r){if(r={lane:2,revertLane:Cf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},wl(e)){if(n)throw Error(s(479))}else n=hu(e,a,r,2),n!==null&&qn(n,e,2)}function wl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function wm(e,n){tr=Ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Dm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Fr(e,a)}}var fo={readContext:Rn,use:bl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};fo.useEffectEvent=en;var Um={readContext:Rn,use:bl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Rn,useEffect:pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Rl(4194308,4,vm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Rl(4194308,4,e,n)},useInsertionEffect:function(e,n){Rl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var r=e();if(gs){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Bn();if(a!==void 0){var u=a(n);if(gs){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Tx.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Vu(e);var n=e.queue,a=Cm.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Wu,useDeferredValue:function(e,n){var a=Bn();return qu(a,e,n)},useTransition:function(){var e=Vu(!1);return e=Em.bind(null,oe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=oe,u=Bn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(ve&127)!==0||Jp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,pm(tm.bind(null,r,f,e),[e]),r.flags|=2048,nr(9,{destroy:void 0},$p.bind(null,r,f,a,n),null),a},useId:function(){var e=Bn(),n=Xe.identifierPrefix;if(Se){var a=Ni,r=Li;a=(r&~(1<<32-Ot(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=_x++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ku,useFormState:cm,useActionState:cm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ju.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Fu,useCacheRefresh:function(){return Bn().memoizedState=Ex.bind(null,oe)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zu={readContext:Rn,use:bl,useCallback:Sm,useContext:Rn,useEffect:Xu,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:ym,useReducer:Al,useRef:dm,useState:function(){return Al(ta)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=rn();return Mm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Al(ta)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:Ku,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=rn();return im(a,Ge,e,n)},useMemoCache:Fu,useCacheRefresh:Rm};Zu.useEffectEvent=mm;var Lm={readContext:Rn,use:bl,useCallback:Sm,useContext:Rn,useEffect:Xu,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:ym,useReducer:Gu,useRef:dm,useState:function(){return Gu(ta)},useDebugValue:Wu,useDeferredValue:function(e,n){var a=rn();return Ge===null?qu(a,e,n):Mm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Gu(ta)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:Ku,useFormState:hm,useActionState:hm,useOptimistic:function(e,n){var a=rn();return Ge!==null?im(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fu,useCacheRefresh:Rm};Lm.useEffectEvent=mm;function Qu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ju={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ni(),u=Da(r);u.payload=n,a!=null&&(u.callback=a),n=Ua(e,u,r),n!==null&&(qn(n,e,r),so(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ni(),u=Da(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(e,u,r),n!==null&&(qn(n,e,r),so(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),r=Da(a);r.tag=2,n!=null&&(r.callback=n),n=Ua(e,r,a),n!==null&&(qn(n,e,a),so(n,e,a))}};function Nm(e,n,a,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,r)||!Qr(u,f):!0}function Om(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Ju.enqueueReplaceState(n,n.state,null)}function _s(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Pm(e){ol(e)}function zm(e){console.error(e)}function Im(e){ol(e)}function Dl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Bm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function $u(e,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Dl(e,n)},a}function Fm(e){return e=Da(e),e.tag=3,e}function Hm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Bm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Bm(n,a,r),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function bx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return pi===null?Vl():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),bf(e,r,u)),!1;case 22:return a.flags|=65536,r===_l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),bf(e,r,u)),!1}throw Error(s(435,a.tag))}return bf(e,r,u),Vl(),!1}if(Se)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==vu&&(e=Error(s(422),{cause:r}),to(ui(e,a)))):(r!==vu&&(n=Error(s(423),{cause:r}),to(ui(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ui(r,a),u=$u(e.stateNode,r,u),wu(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:r});if(f=ui(f,a),So===null?So=[f]:So.push(f),nn!==4&&(nn=2),n===null)return!0;r=ui(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=$u(a.stateNode,r,e),wu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Fm(u),Hm(u,e,a,r),wu(a,u),!1}a=a.return}while(a!==null);return!1}var tf=Error(s(461)),un=!1;function Cn(e,n,a,r){n.child=e===null?Xp(n,null,a,r):ms(n,e.child,a,r)}function Gm(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var b in r)b!=="ref"&&(v[b]=r[b])}else v=r;return fs(n),r=Pu(e,n,a,v,f,u),b=zu(),e!==null&&!un?(Iu(e,n,u),ea(e,n,u)):(Se&&b&&gu(n),n.flags|=1,Cn(e,n,r,u),n.child)}function Vm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!du(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,km(e,n,f,r,u)):(e=fl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!cf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(v,r)&&e.ref===n.ref)return ea(e,n,u)}return n.flags|=1,e=ji(f,r),e.ref=n.ref,e.return=n,n.child=e}function km(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Qr(f,r)&&e.ref===n.ref)if(un=!1,n.pendingProps=r=f,cf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ea(e,n,u)}return ef(e,n,a,r,u)}function Xm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Wm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,f!==null?f.cachePool:null),f!==null?Yp(n,f):Uu(),Kp(n);else return r=n.lanes=536870912,Wm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ml(n,f.cachePool),Yp(n,f),Na(),n.memoizedState=null):(e!==null&&ml(n,null),Uu(),Na());return Cn(e,n,u,a),n.child}function ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wm(e,n,a,r,u){var f=bu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ml(n,null),Uu(),Kp(n),e!==null&&Ks(e,n,r,!0),n.childLanes=u,null}function Ul(e,n){return n=Nl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function qm(e,n,a){return ms(n,e.child,null,a),e=Ul(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function Ax(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(r.mode==="hidden")return e=Ul(n,r),n.lanes=536870912,ho(null,e);if(Nu(n),(e=Ye)?(e=ag(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=wp(e),a.return=n,n.child=a,An=n,Ye=null)):e=null,e===null)throw Ra(n);return n.lanes=536870912,null}return Ul(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Nu(n),u)if(n.flags&256)n.flags&=-257,n=qm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Ks(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(r=Xe,r!==null&&(v=Ns(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,os(e,v),qn(r,e,v),tf;Vl(),n=qm(e,n,a)}else e=f.treeContext,Ye=mi(v.nextSibling),An=n,Se=!0,Aa=null,di=!1,e!==null&&Lp(n,e),n=Ul(n,r),n.flags|=4096;return n}return e=ji(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ll(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ef(e,n,a,r,u){return fs(n),a=Pu(e,n,a,r,void 0,u),r=zu(),e!==null&&!un?(Iu(e,n,u),ea(e,n,u)):(Se&&r&&gu(n),n.flags|=1,Cn(e,n,a,u),n.child)}function Ym(e,n,a,r,u,f){return fs(n),n.updateQueue=null,a=Zp(n,r,a,u),jp(e),r=zu(),e!==null&&!un?(Iu(e,n,f),ea(e,n,f)):(Se&&r&&gu(n),n.flags|=1,Cn(e,n,a,f),n.child)}function Km(e,n,a,r,u){if(fs(n),n.stateNode===null){var f=Xs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Rn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ju,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ru(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Rn(v):Xs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Qu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Ju.enqueueReplaceState(f,f.state,null),oo(n,r,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,F=_s(a,b);f.props=F;var tt=f.context,ht=a.contextType;v=Xs,typeof ht=="object"&&ht!==null&&(v=Rn(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||tt!==v)&&Om(n,f,r,v),wa=!1;var nt=n.memoizedState;f.state=nt,oo(n,r,f,u),ro(),tt=n.memoizedState,b||nt!==tt||wa?(typeof mt=="function"&&(Qu(n,a,mt,r),tt=n.memoizedState),(F=wa||Nm(n,a,F,r,nt,tt,v))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=v,r=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Cu(e,n),v=n.memoizedProps,ht=_s(a,v),f.props=ht,mt=n.pendingProps,nt=f.context,tt=a.contextType,F=Xs,typeof tt=="object"&&tt!==null&&(F=Rn(tt)),b=a.getDerivedStateFromProps,(tt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==mt||nt!==F)&&Om(n,f,r,F),wa=!1,nt=n.memoizedState,f.state=nt,oo(n,r,f,u),ro();var ot=n.memoizedState;v!==mt||nt!==ot||wa||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof b=="function"&&(Qu(n,a,b,r),ot=n.memoizedState),(ht=wa||Nm(n,a,ht,r,nt,ot,F)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=F,r=ht):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ll(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ms(n,e.child,null,u),n.child=ms(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ea(e,n,u),e}function jm(e,n,a,r){return cs(),n.flags|=256,Cn(e,n,a,r),n.child}var nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function af(e){return{baseLanes:e,cachePool:Bp()}}function sf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function Zm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(u?La(n):Na(),(e=Ye)?(e=ag(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Li,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=wp(e),a.return=n,n.child=a,An=n,Ye=null)):e=null,e===null)throw Ra(n);return Gf(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,u?(Na(),u=n.mode,b=Nl({mode:"hidden",children:b},u),r=ls(r,u,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=af(a),r.childLanes=sf(e,v,a),n.memoizedState=nf,ho(null,r)):(La(n),rf(n,b))}var F=e.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=of(e,n,a)):n.memoizedState!==null?(Na(),n.child=e.child,n.flags|=128,n=null):(Na(),b=r.fallback,u=n.mode,r=Nl({mode:"visible",children:r.children},u),b=ls(b,u,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,ms(n,e.child,null,a),r=n.child,r.memoizedState=af(a),r.childLanes=sf(e,v,a),n.memoizedState=nf,n=ho(null,r));else if(La(n),Gf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var tt=v.dgst;v=tt,r=Error(s(419)),r.stack="",r.digest=v,to({value:r,source:null,stack:null}),n=of(e,n,a)}else if(un||Ks(e,n,a,!1),v=(a&e.childLanes)!==0,un||v){if(v=Xe,v!==null&&(r=Ns(v,a),r!==0&&r!==F.retryLane))throw F.retryLane=r,os(e,r),qn(v,e,r),tf;Hf(b)||Vl(),n=of(e,n,a)}else Hf(b)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Ye=mi(b.nextSibling),An=n,Se=!0,Aa=null,di=!1,e!==null&&Lp(n,e),n=rf(n,r.children),n.flags|=4096);return n}return u?(Na(),b=r.fallback,u=n.mode,F=e.child,tt=F.sibling,r=ji(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,tt!==null?b=ji(tt,b):(b=ls(b,u,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,ho(null,r),r=n.child,b=e.child.memoizedState,b===null?b=af(a):(u=b.cachePool,u!==null?(F=ln._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Bp(),b={baseLanes:b.baseLanes|a,cachePool:u}),r.memoizedState=b,r.childLanes=sf(e,v,a),n.memoizedState=nf,ho(e.child,r)):(La(n),a=e.child,e=a.sibling,a=ji(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function rf(e,n){return n=Nl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Nl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function of(e,n,a){return ms(n,e.child,null,a),e=rf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),yu(e.return,n,a)}function lf(e,n,a,r,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Jm(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=sn.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,gt(sn,v),Cn(e,n,r,a),r=Se?$r:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qm(e,a,n);else if(e.tag===19)Qm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&yl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),lf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&yl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}lf(n,!0,a,null,f,r);break;case"together":lf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function Rx(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Ca(n,ln,e.memoizedState.cache),cs();break;case 27:case 5:Ft(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Zm(e,n,a):(La(n),e=ea(e,n,a),e!==null?e.sibling:null);La(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Jm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(sn,sn.current),r)break;return null;case 22:return n.lanes=0,Xm(e,n,a,n.pendingProps);case 24:Ca(n,ln,e.memoizedState.cache)}return ea(e,n,a)}function $m(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!cf(e,a)&&(n.flags&128)===0)return un=!1,Rx(e,n,a);un=(e.flags&131072)!==0}else un=!1,Se&&(n.flags&1048576)!==0&&Up(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=ds(n.elementType),n.type=e,typeof e=="function")du(e)?(r=_s(e,r),n.tag=1,n=Km(null,n,e,r,a)):(n.tag=0,n=ef(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Gm(null,n,e,r,a);break t}else if(u===N){n.tag=14,n=Vm(null,n,e,r,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return ef(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=_s(r,n.pendingProps),Km(e,n,r,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Cu(e,n),oo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Ca(n,ln,r),r!==f.cache&&Mu(n,[ln],a,!0),ro(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=jm(e,n,r,a);break t}else if(r!==u){u=ui(Error(s(424)),n),to(u),n=jm(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=mi(e.firstChild),An=n,Se=!0,Aa=null,di=!0,a=Xp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cs(),r===u){n=ea(e,n,a);break t}Cn(e,n,r,a)}n=n.child}return n;case 26:return Ll(e,n),e===null?(a=ug(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,e=n.pendingProps,r=jl(it.current).createElement(a),r[on]=n,r[Sn]=e,wn(r,a,e),A(r),n.stateNode=r):n.memoizedState=ug(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ft(n),e===null&&Se&&(r=n.stateNode=og(n.type,n.pendingProps,it.current),An=n,di=!0,u=Ye,Ga(n.type)?(Vf=u,Ye=mi(r.firstChild)):Ye=u),Cn(e,n,n.pendingProps.children,a),Ll(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((u=r=Ye)&&(r=iS(r,n.type,n.pendingProps,di),r!==null?(n.stateNode=r,An=n,Ye=mi(r.firstChild),di=!1,u=!0):u=!1),u||Ra(n)),Ft(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,If(u,f)?r=null:v!==null&&If(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Pu(e,n,vx,null,null,a),Co._currentValue=u),Ll(e,n),Cn(e,n,r,a),n.child;case 6:return e===null&&Se&&((e=a=Ye)&&(a=aS(a,n.pendingProps,di),a!==null?(n.stateNode=a,An=n,Ye=null,e=!0):e=!1),e||Ra(n)),null;case 13:return Zm(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ms(n,null,r,a):Cn(e,n,r,a),n.child;case 11:return Gm(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ca(n,n.type,r.value),Cn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,fs(n),u=Rn(u),r=r(u),n.flags|=1,Cn(e,n,r,a),n.child;case 14:return Vm(e,n,n.type,n.pendingProps,a);case 15:return km(e,n,n.type,n.pendingProps,a);case 19:return Jm(e,n,a);case 31:return Ax(e,n,a);case 22:return Xm(e,n,a,n.pendingProps);case 24:return fs(n),r=Rn(ln),e===null?(u=bu(),u===null&&(u=Xe,f=Eu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Ru(n),Ca(n,ln,u)):((e.lanes&a)!==0&&(Cu(e,n),oo(n,null,null,a),ro()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,ln,r)):(r=f.cache,Ca(n,ln,r),r!==u.cache&&Mu(n,[ln],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(e){e.flags|=4}function uf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(A0())e.flags|=8192;else throw ps=_l,Au}else e.flags&=-16777217}function t0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mg(n))if(A0())e.flags|=8192;else throw ps=_l,Au}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,rr|=n)}function po(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Cx(e,n,a){var r=n.pendingProps;switch(_u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ji(ln),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ys(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xu())),Ke(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(na(n),f!==null?(Ke(n),t0(n,f)):(Ke(n),uf(n,u,null,r,a))):f?f!==e.memoizedState?(na(n),Ke(n),t0(n,f)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&na(n),Ke(n),uf(n,u,e,r,a)),null;case 27:if(he(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=bt.current,Ys(n)?Np(n):(e=og(u,r,a),n.stateNode=e,na(n))}return Ke(n),null;case 5:if(he(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(f=bt.current,Ys(n))Np(n);else{var v=jl(it.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[on]=n,f[Sn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(wn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&na(n)}}return Ke(n),uf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,Ys(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=An,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Z0(e.nodeValue,a)),e||Ra(n,!0)}else e=jl(e).createTextNode(r),e[on]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ys(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ys(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),Ke(n),null);case 4:return kt(),e===null&&Lf(n.stateNode.containerInfo),Ke(n),null;case 10:return Ji(n.type),Ke(n),null;case 19:if(at(sn),r=n.memoizedState,r===null)return Ke(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)po(r,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=yl(e),f!==null){for(n.flags|=128,po(r,!1),e=f.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Cp(a,e),a=a.sibling;return gt(sn,sn.current&1|2),Se&&Zi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&M()>Fl&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304)}else{if(!u)if(e=yl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),po(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return Ke(n),null}else 2*M()-r.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=M(),e.sibling=null,a=sn.current,gt(sn,u?a&1|2:a&1),Se&&Zi(n,r.treeForkCount),e):(Ke(n),null);case 22:case 23:return $n(n),Lu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&at(hs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(ln),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function wx(e,n){switch(_u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(ln),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return at(sn),null;case 4:return kt(),null;case 10:return Ji(n.type),null;case 22:case 23:return $n(n),Lu(),e!==null&&at(hs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(ln),null;case 25:return null;default:return null}}function e0(e,n){switch(_u(n),n.tag){case 3:Ji(ln),kt();break;case 26:case 27:case 5:he(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:at(sn);break;case 10:Ji(n.type);break;case 22:case 23:$n(n),Lu(),e!==null&&at(hs);break;case 24:Ji(ln)}}function mo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(b){Fe(n,n.return,b)}}function Oa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=n;var F=a,tt=b;try{tt()}catch(ht){Fe(u,F,ht)}}}r=r.next}while(r!==f)}}catch(ht){Fe(n,n.return,ht)}}function n0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{qp(n,a)}catch(r){Fe(e,e.return,r)}}}function i0(e,n,a){a.props=_s(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(e,n,r)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Fe(e,n,u)}}function Oi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function a0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function ff(e,n,a){try{var r=e.stateNode;Qx(r,e.type,a,n),r[Sn]=n}catch(u){Fe(e,e.return,u)}}function s0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function hf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||s0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function df(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(r!==4&&(r===27&&Ga(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(df(e,n,a),e=e.sibling;e!==null;)df(e,n,a),e=e.sibling}function Pl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function r0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,r,a),n[on]=e,n[Sn]=a}catch(f){Fe(e,e.return,f)}}var ia=!1,fn=!1,pf=!1,o0=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Dx(e,n){if(e=e.containerInfo,Pf=nc,e=xp(e),ru(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,F=-1,tt=0,ht=0,mt=e,nt=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(b=v+u),mt!==f||r!==0&&mt.nodeType!==3||(F=v+r),mt.nodeType===3&&(v+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)nt=mt,mt=ot;for(;;){if(mt===e)break e;if(nt===a&&++tt===u&&(b=v),nt===f&&++ht===r&&(F=v),(ot=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=ot}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(zf={focusedElem:e,selectionRange:a},nc=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=_s(a.type,u);e=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(te){Fe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ff(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function l0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),r&4&&mo(5,a);break;case 1:if(sa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Fe(a,a.return,v)}else{var u=_s(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Fe(a,a.return,v)}}r&64&&n0(a),r&512&&go(a,a.return);break;case 3:if(sa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qp(e,n)}catch(v){Fe(a,a.return,v)}}break;case 27:n===null&&r&4&&r0(a);case 26:case 5:sa(e,a),n===null&&r&4&&a0(a),r&512&&go(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),r&4&&f0(e,a);break;case 13:sa(e,a),r&4&&h0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Fx.bind(null,a),sS(e,a))));break;case 22:if(r=a.memoizedState!==null||ia,!r){n=n!==null&&n.memoizedState!==null||fn,u=ia;var f=fn;ia=r,(fn=n)&&!f?ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=u,fn=f}break;case 30:break;default:sa(e,a)}}function c0(e){var n=e.alternate;n!==null&&(e.alternate=null,c0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&kr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Vn=!1;function aa(e,n,a){for(a=a.child;a!==null;)u0(e,n,a),a=a.sibling}function u0(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:fn||Oi(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Oi(a,n);var r=Qe,u=Vn;Ga(a.type)&&(Qe=a.stateNode,Vn=!1),aa(e,n,a),bo(a.stateNode),Qe=r,Vn=u;break;case 5:fn||Oi(a,n);case 6:if(r=Qe,u=Vn,Qe=null,aa(e,n,a),Qe=r,Vn=u,Qe!==null)if(Vn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Qe!==null&&(Vn?(e=Qe,ng(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pr(e)):ng(Qe,a.stateNode));break;case 4:r=Qe,u=Vn,Qe=a.stateNode.containerInfo,Vn=!0,aa(e,n,a),Qe=r,Vn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),fn||Oa(4,a,n),aa(e,n,a);break;case 1:fn||(Oi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&i0(a,n,r)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,aa(e,n,a),fn=r;break;default:aa(e,n,a)}}function f0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pr(e)}catch(a){Fe(n,n.return,a)}}}function h0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pr(e)}catch(a){Fe(n,n.return,a)}}function Ux(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new o0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new o0),n;default:throw Error(s(435,e.tag))}}function zl(e,n){var a=Ux(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Hx.bind(null,e,r);r.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(Ga(b.type)){Qe=b.stateNode,Vn=!1;break t}break;case 5:Qe=b.stateNode,Vn=!1;break t;case 3:case 4:Qe=b.stateNode.containerInfo,Vn=!0;break t}b=b.return}if(Qe===null)throw Error(s(160));u0(f,v,u),Qe=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)d0(n,e),n=n.sibling}var Ti=null;function d0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),r&4&&(Oa(3,e,e.return),mo(3,e),Oa(5,e,e.return));break;case 1:kn(n,e),Xn(e),r&512&&(fn||a===null||Oi(a,a.return)),r&64&&ia&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ti;if(kn(n,e),Xn(e),r&512&&(fn||a===null||Oi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ns]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),wn(f,r,a),f[on]=e,A(f),r=f;break t;case"link":var v=dg("link","href",u).get(r+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=u.createElement(r),wn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=dg("meta","content",u).get(r+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=u.createElement(r),wn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=e,A(f),r=f}e.stateNode=r}else pg(u,e.type,e.stateNode);else e.stateNode=hg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?pg(u,e.type,e.stateNode):hg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&ff(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),r&512&&(fn||a===null||Oi(a,a.return)),a!==null&&r&4&&ff(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),r&512&&(fn||a===null||Oi(a,a.return)),e.flags&32){u=e.stateNode;try{dn(u,"")}catch(Vt){Fe(e,e.return,Vt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,ff(e,u,a!==null?a.memoizedProps:u)),r&1024&&(pf=!0);break;case 6:if(kn(n,e),Xn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Vt){Fe(e,e.return,Vt)}}break;case 3:if(Jl=null,u=Ti,Ti=Zl(n.containerInfo),kn(n,e),Ti=u,Xn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(Vt){Fe(e,e.return,Vt)}pf&&(pf=!1,p0(e));break;case 4:r=Ti,Ti=Zl(e.stateNode.containerInfo),kn(n,e),Xn(e),Ti=r;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zl(e,r)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=M()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zl(e,r)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,tt=ia,ht=fn;if(ia=tt||u,fn=ht||F,kn(n,e),fn=ht,ia=tt,Xn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||ia||fn||vs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=F.stateNode;var mt=F.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Vt){Fe(F,F.return,Vt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Vt){Fe(F,F.return,Vt)}}}else if(n.tag===18){if(a===null){F=n;try{var ot=F.stateNode;u?ig(ot,!0):ig(F.stateNode,!1)}catch(Vt){Fe(F,F.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,zl(e,a))));break;case 19:kn(n,e),Xn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,zl(e,r)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(s0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=hf(e);Pl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(dn(v,""),a.flags&=-33);var b=hf(e);Pl(e,b,v);break;case 3:case 4:var F=a.stateNode.containerInfo,tt=hf(e);df(e,tt,F);break;default:throw Error(s(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function p0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;p0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)l0(e,n.alternate,n),n=n.sibling}function vs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),vs(n);break;case 1:Oi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&i0(n,n.return,a),vs(n);break;case 27:bo(n.stateNode);case 26:case 5:Oi(n,n.return),vs(n);break;case 22:n.memoizedState===null&&vs(n);break;case 30:vs(n);break;default:vs(n)}e=e.sibling}}function ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ra(u,f,a),mo(4,f);break;case 1:if(ra(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Fe(r,r.return,tt)}if(r=f,u=r.updateQueue,u!==null){var b=r.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Wp(F[u],b)}catch(tt){Fe(r,r.return,tt)}}a&&v&64&&n0(f),go(f,f.return);break;case 27:r0(f);case 26:case 5:ra(u,f,a),a&&r===null&&v&4&&a0(f),go(f,f.return);break;case 12:ra(u,f,a);break;case 31:ra(u,f,a),a&&v&4&&f0(u,f);break;case 13:ra(u,f,a),a&&v&4&&h0(u,f);break;case 22:f.memoizedState===null&&ra(u,f,a),go(f,f.return);break;case 30:break;default:ra(u,f,a)}n=n.sibling}}function mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function bi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)m0(e,n,a,r),n=n.sibling}function m0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,r),u&2048&&mo(9,n);break;case 1:bi(e,n,a,r);break;case 3:bi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(u&2048){bi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Fe(n,n.return,F)}}else bi(e,n,a,r);break;case 31:bi(e,n,a,r);break;case 13:bi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,r):_o(e,n):f._visibility&2?bi(e,n,a,r):(f._visibility|=2,ir(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&mf(v,n);break;case 24:bi(e,n,a,r),u&2048&&gf(n.alternate,n);break;default:bi(e,n,a,r)}}function ir(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,b=a,F=r,tt=v.flags;switch(v.tag){case 0:case 11:case 15:ir(f,v,b,F,u),mo(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?ir(f,v,b,F,u):_o(f,v):(ht._visibility|=2,ir(f,v,b,F,u)),u&&tt&2048&&mf(v.alternate,v);break;case 24:ir(f,v,b,F,u),u&&tt&2048&&gf(v.alternate,v);break;default:ir(f,v,b,F,u)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:_o(a,r),u&2048&&mf(r.alternate,r);break;case 24:_o(a,r),u&2048&&gf(r.alternate,r);break;default:_o(a,r)}n=n.sibling}}var vo=8192;function ar(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)g0(e,n,a),e=e.sibling}function g0(e,n,a){switch(e.tag){case 26:ar(e,n,a),e.flags&vo&&e.memoizedState!==null&&_S(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:ar(e,n,a);break;case 3:case 4:var r=Ti;Ti=Zl(e.stateNode.containerInfo),ar(e,n,a),Ti=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=vo,vo=16777216,ar(e,n,a),vo=r):ar(e,n,a));break;default:ar(e,n,a)}}function _0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,x0(r,e)}_0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)v0(e),e=e.sibling}function v0(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Il(e)):xo(e);break;default:xo(e)}}function Il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,x0(r,e)}_0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}e=e.sibling}}function x0(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:eo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=e;vn!==null;){r=vn;var u=r.sibling,f=r.return;if(c0(r),r===a){vn=null;break t}if(u!==null){u.return=f,vn=u;break t}vn=f}}}var Lx={getCacheForType:function(e){var n=Rn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Rn(ln).controller.signal}},Nx=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,pe=null,ve=0,Be=0,ti=null,Pa=!1,sr=!1,_f=!1,oa=0,nn=0,za=0,xs=0,vf=0,ei=0,rr=0,So=null,Wn=null,xf=!1,Bl=0,S0=0,Fl=1/0,Hl=null,Ia=null,pn=0,Ba=null,or=null,la=0,Sf=0,yf=null,y0=null,yo=0,Mf=null;function ni(){return(Le&2)!==0&&ve!==0?ve&-ve:B.T!==null?Cf():Gr()}function M0(){if(ei===0)if((ve&536870912)===0||Se){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function qn(e,n,a){(e===Xe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(lr(e,0),Fa(e,ve,ei,!1)),Nn(e,a),((Le&2)===0||e!==Xe)&&(e===Xe&&((Le&2)===0&&(xs|=a),nn===4&&Fa(e,ve,ei,!1)),Pi(e))}function E0(e,n,a){if((Le&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||At(e,n),u=r?zx(e,n):Tf(e,n,!0),f=r;do{if(u===0){sr&&!r&&Fa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ox(a)){u=Tf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=e;u=So;var F=b.current.memoizedState.isDehydrated;if(F&&(lr(b,v).flags|=256),v=Tf(b,v,!1),v!==2){if(_f&&!F){b.errorRecoveryDisabledLanes|=f,xs|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){lr(e,0),Fa(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Fa(r,n,ei,!Pa);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Bl+300-M(),10<u)){if(Fa(r,n,ei,!Pa),_t(r,0,!0)!==0)break t;la=n,r.timeoutHandle=tg(T0.bind(null,r,a,Wn,Hl,xf,n,ei,xs,rr,Pa,f,"Throttled",-0,0),u);break t}T0(r,a,Wn,Hl,xf,n,ei,xs,rr,Pa,f,null,-0,0)}}break}while(!0);Pi(e)}function T0(e,n,a,r,u,f,v,b,F,tt,ht,mt,nt,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},g0(n,f,mt);var Vt=(f&62914560)===f?Bl-M():(f&4194048)===f?S0-M():0;if(Vt=vS(mt,Vt),Vt!==null){la=f,e.cancelPendingCommit=Vt(L0.bind(null,e,n,f,a,r,u,v,b,F,ht,mt,null,nt,ot)),Fa(e,f,v,!tt);return}}L0(e,n,f,a,r,u,v,b,F)}function Ox(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(e,n,a,r){n&=~vf,n&=~xs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Jo(e,a,n)}function Gl(){return(Le&6)===0?(Mo(0),!1):!0}function Ef(){if(pe!==null){if(Be===0)var e=pe.return;else e=pe,Qi=us=null,Bu(e),Js=null,io=0,e=pe;for(;e!==null;)e0(e.alternate,e),e=e.return;pe=null}}function lr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,tS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,Ef(),Xe=e,pe=a=ji(e.current,null),ve=n,Be=0,ti=null,Pa=!1,sr=At(e,n),_f=!1,rr=ei=vf=xs=za=nn=0,Wn=So=null,xf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ot(r),f=1<<u;n|=e[u],r&=~f}return oa=n,ll(),a}function b0(e,n){oe=null,B.H=fo,n===Qs||n===gl?(n=Gp(),Be=3):n===Au?(n=Gp(),Be=4):Be=n===tf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,pe===null&&(nn=1,Dl(e,ui(n,e.current)))}function A0(){var e=Jn.current;return e===null?!0:(ve&4194048)===ve?pi===null:(ve&62914560)===ve||(ve&536870912)!==0?e===pi:!1}function R0(){var e=B.H;return B.H=fo,e===null?fo:e}function C0(){var e=B.A;return B.A=Lx,e}function Vl(){nn=4,Pa||(ve&4194048)!==ve&&Jn.current!==null||(sr=!0),(za&134217727)===0&&(xs&134217727)===0||Xe===null||Fa(Xe,ve,ei,!1)}function Tf(e,n,a){var r=Le;Le|=2;var u=R0(),f=C0();(Xe!==e||ve!==n)&&(Hl=null,lr(e,n)),n=!1;var v=nn;t:do try{if(Be!==0&&pe!==null){var b=pe,F=ti;switch(Be){case 8:Ef(),v=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var tt=Be;if(Be=0,ti=null,cr(e,b,F,tt),a&&sr){v=0;break t}break;default:tt=Be,Be=0,ti=null,cr(e,b,F,tt)}}Px(),v=nn;break}catch(ht){b0(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Qi=us=null,Le=r,B.H=u,B.A=f,pe===null&&(Xe=null,ve=0,ll()),v}function Px(){for(;pe!==null;)w0(pe)}function zx(e,n){var a=Le;Le|=2;var r=R0(),u=C0();Xe!==e||ve!==n?(Hl=null,Fl=M()+500,lr(e,n)):sr=At(e,n);t:do try{if(Be!==0&&pe!==null){n=pe;var f=ti;e:switch(Be){case 1:Be=0,ti=null,cr(e,n,f,1);break;case 2:case 9:if(Fp(f)){Be=0,ti=null,D0(n);break}n=function(){Be!==2&&Be!==9||Xe!==e||(Be=7),Pi(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Fp(f)?(Be=0,ti=null,D0(n)):(Be=0,ti=null,cr(e,n,f,7));break;case 5:var v=null;switch(pe.tag){case 26:v=pe.memoizedState;case 5:case 27:var b=pe;if(v?mg(v):b.stateNode.complete){Be=0,ti=null;var F=b.sibling;if(F!==null)pe=F;else{var tt=b.return;tt!==null?(pe=tt,kl(tt)):pe=null}break e}}Be=0,ti=null,cr(e,n,f,5);break;case 6:Be=0,ti=null,cr(e,n,f,6);break;case 8:Ef(),nn=6;break t;default:throw Error(s(462))}}Ix();break}catch(ht){b0(e,ht)}while(!0);return Qi=us=null,B.H=r,B.A=u,Le=a,pe!==null?0:(Xe=null,ve=0,ll(),nn)}function Ix(){for(;pe!==null&&!Yt();)w0(pe)}function w0(e){var n=$m(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?kl(e):pe=n}function D0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ym(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Ym(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Bu(n);default:e0(a,n),n=pe=Cp(n,oa),n=$m(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?kl(e):pe=n}function cr(e,n,a,r){Qi=us=null,Bu(n),Js=null,io=0;var u=n.return;try{if(bx(e,u,n,a,ve)){nn=1,Dl(e,ui(a,e.current)),pe=null;return}}catch(f){if(u!==null)throw pe=u,f;nn=1,Dl(e,ui(a,e.current)),pe=null;return}n.flags&32768?(Se||r===1?e=!0:sr||(ve&536870912)!==0?e=!1:(Pa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),U0(n,e)):kl(n)}function kl(e){var n=e;do{if((n.flags&32768)!==0){U0(n,Pa);return}e=n.return;var a=Cx(n.alternate,n,oa);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);nn===0&&(nn=5)}function U0(e,n){do{var a=wx(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);nn=6,pe=null}function L0(e,n,a,r,u,f,v,b,F){e.cancelPendingCommit=null;do Xl();while(pn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=fu,Si(e,a,f,v,b,F),e===Xe&&(pe=Xe=null,ve=0),or=n,Ba=e,la=a,Sf=f,yf=u,y0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gx(ut,function(){return I0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null,u=G.p,G.p=2,v=Le,Le|=4;try{Dx(e,n,a)}finally{Le=v,G.p=u,B.T=r}}pn=1,N0(),O0(),P0()}}function N0(){if(pn===1){pn=0;var e=Ba,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var r=G.p;G.p=2;var u=Le;Le|=4;try{d0(n,e);var f=zf,v=xp(e.containerInfo),b=f.focusedElem,F=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&vp(b.ownerDocument.documentElement,b)){if(F!==null&&ru(b)){var tt=F.start,ht=F.end;if(ht===void 0&&(ht=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(ht,b.value.length);else{var mt=b.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Vt=b.textContent.length,te=Math.min(F.start,Vt),ke=F.end===void 0?te:Math.min(F.end,Vt);!ot.extend&&te>ke&&(v=ke,ke=te,te=v);var j=_p(b,te),k=_p(b,ke);if(j&&k&&(ot.rangeCount!==1||ot.anchorNode!==j.node||ot.anchorOffset!==j.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var $=mt.createRange();$.setStart(j.node,j.offset),ot.removeAllRanges(),te>ke?(ot.addRange($),ot.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ot.addRange($))}}}}for(mt=[],ot=b;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var pt=mt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}nc=!!Pf,zf=Pf=null}finally{Le=u,G.p=r,B.T=a}}e.current=n,pn=2}}function O0(){if(pn===2){pn=0;var e=Ba,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var r=G.p;G.p=2;var u=Le;Le|=4;try{l0(e,n.alternate,n)}finally{Le=u,G.p=r,B.T=a}}pn=3}}function P0(){if(pn===4||pn===3){pn=0,O();var e=Ba,n=or,a=la,r=y0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,or=Ba=null,z0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ia=null),Os(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=B.T,u=G.p,G.p=2,B.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var b=r[v];f(b.value,{componentStack:b.stack})}}finally{B.T=n,G.p=u}}(la&3)!==0&&Xl(),Pi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Mf?yo++:(yo=0,Mf=e):yo=0,Mo(0)}}function z0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function Xl(){return N0(),O0(),P0(),I0()}function I0(){if(pn!==5)return!1;var e=Ba,n=Sf;Sf=0;var a=Os(la),r=B.T,u=G.p;try{G.p=32>a?32:a,B.T=null,a=yf,yf=null;var f=Ba,v=la;if(pn=0,or=Ba=null,la=0,(Le&6)!==0)throw Error(s(331));var b=Le;if(Le|=4,v0(f.current),m0(f,f.current,v,a),Le=b,Mo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{G.p=u,B.T=r,z0(e,n)}}function B0(e,n,a){n=ui(a,n),n=$u(e.stateNode,n,2),e=Ua(e,n,2),e!==null&&(Nn(e,2),Pi(e))}function Fe(e,n,a){if(e.tag===3)B0(e,e,a);else for(;n!==null;){if(n.tag===3){B0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){e=ui(a,e),a=Fm(2),r=Ua(n,a,2),r!==null&&(Hm(a,r,n,e),Nn(r,2),Pi(r));break}}n=n.return}}function bf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Nx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(_f=!0,u.add(a),e=Bx.bind(null,e,n,a),n.then(e,e))}function Bx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ve&a)===a&&(nn===4||nn===3&&(ve&62914560)===ve&&300>M()-Bl?(Le&2)===0&&lr(e,0):vf|=a,rr===ve&&(rr=0)),Pi(e)}function F0(e,n){n===0&&(n=ze()),e=os(e,n),e!==null&&(Nn(e,n),Pi(e))}function Fx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),F0(e,a)}function Hx(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),F0(e,a)}function Gx(e,n){return Ee(e,n)}var Wl=null,ur=null,Af=!1,ql=!1,Rf=!1,Ha=0;function Pi(e){e!==ur&&e.next===null&&(ur===null?Wl=ur=e:ur=ur.next=e),ql=!0,Af||(Af=!0,kx())}function Mo(e,n){if(!Rf&&ql){Rf=!0;do for(var a=!1,r=Wl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,k0(r,f))}else f=ve,f=_t(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||At(r,f)||(a=!0,k0(r,f));r=r.next}while(a);Rf=!1}}function Vx(){H0()}function H0(){ql=Af=!1;var e=0;Ha!==0&&$x()&&(e=Ha);for(var n=M(),a=null,r=Wl;r!==null;){var u=r.next,f=G0(r,n);f===0?(r.next=null,a===null?Wl=u:a.next=u,u===null&&(ur=a)):(a=r,(e!==0||(f&3)!==0)&&(ql=!0)),r=u}pn!==0&&pn!==5||Mo(e),Ha!==0&&(Ha=0)}function G0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ot(f),b=1<<v,F=u[v];F===-1?((b&a)===0||(b&r)!==0)&&(u[v]=ne(b,n)):F<=n&&(e.expiredLanes|=b),f&=~b}if(n=Xe,a=ve,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||At(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Oe(r),Os(a)){case 2:case 8:a=vt;break;case 32:a=ut;break;case 268435456:a=Rt;break;default:a=ut}return r=V0.bind(null,e),a=Ee(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function V0(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Xl()&&e.callbackNode!==a)return null;var r=ve;return r=_t(e,e===Xe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(E0(e,r,n),G0(e,M()),e.callbackNode!=null&&e.callbackNode===a?V0.bind(null,e):null)}function k0(e,n){if(Xl())return null;E0(e,n,!0)}function kx(){eS(function(){(Le&6)!==0?Ee(dt,Vx):H0()})}function Cf(){if(Ha===0){var e=js;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Ha=e}return Ha}function X0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function W0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Xx(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=X0((u[Sn]||null).action),v=r.submitter;v&&(n=(n=v[Sn]||null)?X0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new al("action","action",null,r,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ha!==0){var F=v?W0(u,v):new FormData(u);Yu(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(b.preventDefault(),F=v?W0(u,v):new FormData(u),Yu(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var wf=0;wf<uu.length;wf++){var Df=uu[wf],Wx=Df.toLowerCase(),qx=Df[0].toUpperCase()+Df.slice(1);Ei(Wx,"on"+qx)}Ei(Mp,"onAnimationEnd"),Ei(Ep,"onAnimationIteration"),Ei(Tp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(lx,"onTransitionRun"),Ei(cx,"onTransitionStart"),Ei(ux,"onTransitionCancel"),Ei(bp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function q0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var b=r[v],F=b.instance,tt=b.currentTarget;if(b=b.listener,F!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=tt;try{f(u)}catch(ht){ol(ht)}u.currentTarget=null,f=F}else for(v=0;v<r.length;v++){if(b=r[v],F=b.instance,tt=b.currentTarget,b=b.listener,F!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=tt;try{f(u)}catch(ht){ol(ht)}u.currentTarget=null,f=F}}}}function me(e,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var r=e+"__bubble";a.has(r)||(Y0(n,e,2,!1),a.add(r))}function Uf(e,n,a){var r=0;n&&(r|=4),Y0(a,e,r,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[Yl]){e[Yl]=!0,K.forEach(function(a){a!=="selectionchange"&&(Yx.has(a)||Uf(a,!1,e),Uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Uf("selectionchange",!1,n))}}function Y0(e,n,a,r){switch(Mg(n)){case 2:var u=yS;break;case 8:u=MS;break;default:u=Yf}a=u.bind(null,n,a,e),u=void 0,!Qc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Nf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var b=r.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=r.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=ya(b),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){r=f=v;continue t}b=b.parentNode}}r=r.return}Jd(function(){var tt=f,ht=jc(a),mt=[];t:{var nt=Ap.get(e);if(nt!==void 0){var ot=al,Vt=e;switch(e){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":ot=Hv;break;case"focusin":Vt="focus",ot=eu;break;case"focusout":Vt="blur",ot=eu;break;case"beforeblur":case"afterblur":ot=eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=kv;break;case Mp:case Ep:case Tp:ot=Uv;break;case bp:ot=Wv;break;case"scroll":case"scrollend":ot=Av;break;case"wheel":ot=Yv;break;case"copy":case"cut":case"paste":ot=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=ip;break;case"toggle":case"beforetoggle":ot=jv}var te=(n&4)!==0,ke=!te&&(e==="scroll"||e==="scrollend"),j=te?nt!==null?nt+"Capture":null:nt;te=[];for(var k=tt,$;k!==null;){var pt=k;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||j===null||(pt=Xr(k,j),pt!=null&&te.push(To(k,pt,$))),ke)break;k=k.return}0<te.length&&(nt=new ot(nt,Vt,null,a,ht),mt.push({event:nt,listeners:te}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",nt&&a!==Kc&&(Vt=a.relatedTarget||a.fromElement)&&(ya(Vt)||Vt[yi]))break t;if((ot||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=tt,Vt=Vt?ya(Vt):null,Vt!==null&&(ke=c(Vt),te=Vt.tag,Vt!==ke||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ot=null,Vt=tt),ot!==Vt)){if(te=ep,pt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=ip,pt="onPointerLeave",j="onPointerEnter",k="pointer"),ke=ot==null?nt:is(ot),$=Vt==null?nt:is(Vt),nt=new te(pt,k+"leave",ot,a,ht),nt.target=ke,nt.relatedTarget=$,pt=null,ya(ht)===tt&&(te=new te(j,k+"enter",Vt,a,ht),te.target=$,te.relatedTarget=ke,pt=te),ke=pt,ot&&Vt)e:{for(te=Kx,j=ot,k=Vt,$=0,pt=j;pt;pt=te(pt))$++;pt=0;for(var Qt=k;Qt;Qt=te(Qt))pt++;for(;0<$-pt;)j=te(j),$--;for(;0<pt-$;)k=te(k),pt--;for(;$--;){if(j===k||k!==null&&j===k.alternate){te=j;break e}j=te(j),k=te(k)}te=null}else te=null;ot!==null&&K0(mt,nt,ot,te,!1),Vt!==null&&ke!==null&&K0(mt,ke,Vt,te,!0)}}t:{if(nt=tt?is(tt):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var Ae=fp;else if(cp(nt))if(hp)Ae=sx;else{Ae=ix;var Kt=nx}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&Mi(tt.elementType)&&(Ae=fp):Ae=ax;if(Ae&&(Ae=Ae(e,tt))){up(mt,Ae,a,ht);break t}Kt&&Kt(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&Mn(nt,"number",nt.value)}switch(Kt=tt?is(tt):window,e){case"focusin":(cp(Kt)||Kt.contentEditable==="true")&&(Gs=Kt,ou=tt,Jr=null);break;case"focusout":Jr=ou=Gs=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,Sp(mt,a,ht);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":Sp(mt,a,ht)}var ce;if(iu)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Hs?op(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(ap&&a.locale!=="ko"&&(Hs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Hs&&(ce=$d()):(Ta=ht,Jc="value"in Ta?Ta.value:Ta.textContent,Hs=!0)),Kt=Kl(tt,xe),0<Kt.length&&(xe=new np(xe,e,null,a,ht),mt.push({event:xe,listeners:Kt}),ce?xe.data=ce:(ce=lp(a),ce!==null&&(xe.data=ce)))),(ce=Qv?Jv(e,a):$v(e,a))&&(xe=Kl(tt,"onBeforeInput"),0<xe.length&&(Kt=new np("onBeforeInput","beforeinput",null,a,ht),mt.push({event:Kt,listeners:xe}),Kt.data=ce)),Xx(mt,e,tt,a,ht)}q0(mt,n)})}function To(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xr(e,a),u!=null&&r.unshift(To(e,u,f)),u=Xr(e,n),u!=null&&r.push(To(e,u,f))),e.tag===3)return r;e=e.return}return[]}function Kx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function K0(e,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var b=a,F=b.alternate,tt=b.stateNode;if(b=b.tag,F!==null&&F===r)break;b!==5&&b!==26&&b!==27||tt===null||(F=tt,u?(tt=Xr(a,f),tt!=null&&v.unshift(To(a,tt,F))):u||(tt=Xr(a,f),tt!=null&&v.push(To(a,tt,F)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var jx=/\r\n?/g,Zx=/\u0000|\uFFFD/g;function j0(e){return(typeof e=="string"?e:""+e).replace(jx,`
`).replace(Zx,"")}function Z0(e,n){return n=j0(n),j0(e)===n}function Ve(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||dn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&dn(e,""+r);break;case"className":Jt(e,"class",r);break;case"tabIndex":Jt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,a,r);break;case"style":Is(e,r,f);break;case"data":if(n!=="object"){Jt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=tl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=tl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Yi);break;case"onScroll":r!=null&&me("scroll",e);break;case"onScrollEnd":r!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":me("beforetoggle",e),me("toggle",e),Wt(e,"popover",r);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Wt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Tv.get(a)||a,Wt(e,a,r))}}function Of(e,n,a,r,u,f){switch(a){case"style":Is(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?dn(e,r):(typeof r=="number"||typeof r=="bigint")&&dn(e,""+r);break;case"onScroll":r!=null&&me("scroll",e);break;case"onScrollEnd":r!=null&&me("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Wt(e,a,r)}}}function wn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,v,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),r&&Ve(e,n,"src",a.src,a,null);return;case"input":me("invalid",e);var b=f=v=u=null,F=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":u=ht;break;case"type":v=ht;break;case"checked":F=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ve(e,n,r,ht,a,null)}}qi(e,f,b,F,tt,v,u,!1);return;case"select":me("invalid",e),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":r=b;default:Ve(e,n,u,b,a,null)}n=f,a=v,e.multiple=!!r,n!=null?li(e,!!r,n,!1):a!=null&&li(e,!!r,a,!0);return;case"textarea":me("invalid",e),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":r=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ve(e,n,v,b,a,null)}En(e,r,u,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(r=a[F],r!=null))switch(F){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ve(e,n,F,r,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(r=0;r<Eo.length;r++)me(Eo[r],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,tt,r,a,null)}return;default:if(Mi(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&Of(e,n,ht,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Ve(e,n,b,r,a,null))}function Qx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,b=null,F=null,tt=null,ht=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=mt;default:r.hasOwnProperty(ot)||Ve(e,n,ot,null,r,mt)}}for(var nt in r){var ot=r[nt];if(mt=a[nt],r.hasOwnProperty(nt)&&(ot!=null||mt!=null))switch(nt){case"type":f=ot;break;case"name":u=ot;break;case"checked":tt=ot;break;case"defaultChecked":ht=ot;break;case"value":v=ot;break;case"defaultValue":b=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&Ve(e,n,nt,ot,r,mt)}}yn(e,v,b,F,tt,ht,f,u);return;case"select":ot=v=b=nt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ot=F;default:r.hasOwnProperty(f)||Ve(e,n,f,null,r,F)}for(u in r)if(f=r[u],F=a[u],r.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":nt=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==F&&Ve(e,n,u,f,r,F)}n=b,a=v,r=ot,nt!=null?li(e,!!a,nt,!1):!!r!=!!a&&(n!=null?li(e,!!a,n,!0):li(e,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ve(e,n,b,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":nt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(e,n,v,u,r,f)}Ie(e,nt,ot);return;case"option":for(var Vt in a)if(nt=a[Vt],a.hasOwnProperty(Vt)&&nt!=null&&!r.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Ve(e,n,Vt,null,r,nt)}for(F in r)if(nt=r[F],ot=a[F],r.hasOwnProperty(F)&&nt!==ot&&(nt!=null||ot!=null))switch(F){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ve(e,n,F,nt,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!r.hasOwnProperty(te)&&Ve(e,n,te,null,r,nt);for(tt in r)if(nt=r[tt],ot=a[tt],r.hasOwnProperty(tt)&&nt!==ot&&(nt!=null||ot!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Ve(e,n,tt,nt,r,ot)}return;default:if(Mi(n)){for(var ke in a)nt=a[ke],a.hasOwnProperty(ke)&&nt!==void 0&&!r.hasOwnProperty(ke)&&Of(e,n,ke,void 0,r,nt);for(ht in r)nt=r[ht],ot=a[ht],!r.hasOwnProperty(ht)||nt===ot||nt===void 0&&ot===void 0||Of(e,n,ht,nt,r,ot);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!r.hasOwnProperty(j)&&Ve(e,n,j,null,r,nt);for(mt in r)nt=r[mt],ot=a[mt],!r.hasOwnProperty(mt)||nt===ot||nt==null&&ot==null||Ve(e,n,mt,nt,r,ot)}function Q0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,b=u.duration;if(f&&b&&Q0(v)){for(v=0,b=u.responseEnd,r+=1;r<a.length;r++){var F=a[r],tt=F.startTime;if(tt>b)break;var ht=F.transferSize,mt=F.initiatorType;ht&&Q0(mt)&&(F=F.responseEnd,v+=ht*(F<b?1:(b-tt)/(F-tt)))}if(--r,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pf=null,zf=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function J0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Bf=null;function $x(){var e=window.event;return e&&e.type==="popstate"?e===Bf?!1:(Bf=e,!0):(Bf=null,!1)}var tg=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,eg=typeof Promise=="function"?Promise:void 0,eS=typeof queueMicrotask=="function"?queueMicrotask:typeof eg<"u"?function(e){return eg.resolve(null).then(e).catch(nS)}:tg;function nS(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function ng(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),pr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,bo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,b=f.nodeName;f[ns]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&bo(e.ownerDocument.body);a=u}while(a);pr(n)}function ig(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),kr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function iS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ns])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function aS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function ag(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$?"||e.data==="$~"}function Gf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function sS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Vf=null;function sg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return mi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function rg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function og(e,n,a){switch(n=jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);kr(e)}var gi=new Map,lg=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=G.d;G.d={f:rS,r:oS,D:lS,C:cS,L:uS,m:fS,X:dS,S:hS,M:pS};function rS(){var e=ca.f(),n=Gl();return e||n}function oS(e){var n=Ma(e);n!==null&&n.tag===5&&n.type==="form"?bm(n):ca.r(e)}var fr=typeof document>"u"?null:document;function cg(e,n,a){var r=fr;if(r&&typeof n=="string"&&n){var u=ie(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),lg.has(u)||(lg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),wn(n,"link",e),A(n),r.head.appendChild(n)))}}function lS(e){ca.D(e),cg("dns-prefetch",e,null)}function cS(e,n){ca.C(e,n),cg("preconnect",e,n)}function uS(e,n,a){ca.L(e,n,a);var r=fr;if(r&&e&&n){var u='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ie(a.imageSizes)+'"]')):u+='[href="'+ie(e)+'"]';var f=u;switch(n){case"style":f=hr(e);break;case"script":f=dr(e)}gi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),gi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Ao(f))||n==="script"&&r.querySelector(Ro(f))||(n=r.createElement("link"),wn(n,"link",e),A(n),r.head.appendChild(n)))}}function fS(e,n){ca.m(e,n);var a=fr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ie(r)+'"][href="'+ie(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=dr(e)}if(!gi.has(f)&&(e=g({rel:"modulepreload",href:e},n),gi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}r=a.createElement("link"),wn(r,"link",e),A(r),a.head.appendChild(r)}}}function hS(e,n,a){ca.S(e,n,a);var r=fr;if(r&&e){var u=Ea(r).hoistableStyles,f=hr(e);n=n||"default";var v=u.get(f);if(!v){var b={loading:0,preload:null};if(v=r.querySelector(Ao(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=gi.get(f))&&kf(e,a);var F=v=r.createElement("link");A(F),wn(F,"link",e),F._p=new Promise(function(tt,ht){F.onload=tt,F.onerror=ht}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ql(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(f,v)}}}function dS(e,n){ca.X(e,n);var a=fr;if(a&&e){var r=Ea(a).hoistableScripts,u=dr(e),f=r.get(u);f||(f=a.querySelector(Ro(u)),f||(e=g({src:e,async:!0},n),(n=gi.get(u))&&Xf(e,n),f=a.createElement("script"),A(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function pS(e,n){ca.M(e,n);var a=fr;if(a&&e){var r=Ea(a).hoistableScripts,u=dr(e),f=r.get(u);f||(f=a.querySelector(Ro(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=gi.get(u))&&Xf(e,n),f=a.createElement("script"),A(f),wn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function ug(e,n,a,r){var u=(u=it.current)?Zl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hr(a.href),a=Ea(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=hr(a.href);var f=Ea(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Ao(e)))&&!f._p&&(v.instance=f,v.state.loading=5),gi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gi.set(e,a),f||mS(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=Ea(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function hr(e){return'href="'+ie(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function fg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function mS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),wn(n,"link",a),A(n),e.head.appendChild(n))}function dr(e){return'[src="'+ie(e)+'"]'}function Ro(e){return"script[async]"+e}function hg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ie(a.href)+'"]');if(r)return n.instance=r,A(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),A(r),wn(r,"style",u),Ql(r,a.precedence,e),n.instance=r;case"stylesheet":u=hr(a.href);var f=e.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,A(f),f;r=fg(a),(u=gi.get(u))&&kf(r,u),f=(e.ownerDocument||e).createElement("link"),A(f);var v=f;return v._p=new Promise(function(b,F){v.onload=b,v.onerror=F}),wn(f,"link",r),n.state.loading|=4,Ql(f,a.precedence,e),n.instance=f;case"script":return f=dr(a.src),(u=e.querySelector(Ro(f)))?(n.instance=u,A(u),u):(r=a,(u=gi.get(f))&&(r=g({},a),Xf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),A(u),wn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ql(r,a.precedence,e));return n.instance}function Ql(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var b=r[v];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jl=null;function dg(e,n,a){if(Jl===null){var r=new Map,u=Jl=new Map;u.set(a,r)}else u=Jl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ns]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var b=r.get(v);b?b.push(f):r.set(v,[f])}}return r}function pg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function gS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _S(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hr(r.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=$l.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,r=fg(r),(u=gi.get(u))&&kf(r,u),f=f.createElement("link"),A(f);var v=f;v._p=new Promise(function(b,F){v.onload=b,v.onerror=F}),wn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=$l.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wf=0;function vS(e,n){return e.stylesheets&&e.count===0&&ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Wf===0&&(Wf=62500*Jx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Wf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function $l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tc=null;function ec(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tc=new Map,n.forEach(xS,e),tc=null,$l.call(e))}function xS(e,n){if(!(n.state.loading&4)){var a=tc.get(e);if(a)var r=a.get(null);else{a=new Map,tc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=$l.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Co={$$typeof:L,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function SS(e,n,a,r,u,f,v,b,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function gg(e,n,a,r,u,f,v,b,F,tt,ht,mt){return e=new SS(e,n,a,v,F,tt,ht,mt,b),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Eu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ru(f),e}function _g(e){return e?(e=Xs,e):Xs}function vg(e,n,a,r,u,f){u=_g(u),r.context===null?r.context=u:r.pendingContext=u,r=Da(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ua(e,r,n),a!==null&&(qn(a,e,n),so(a,e,n))}function xg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function qf(e,n){xg(e,n),(e=e.alternate)&&xg(e,n)}function Sg(e){if(e.tag===13||e.tag===31){var n=os(e,67108864);n!==null&&qn(n,e,67108864),qf(e,67108864)}}function yg(e){if(e.tag===13||e.tag===31){var n=ni();n=Hr(n);var a=os(e,n);a!==null&&qn(a,e,n),qf(e,n)}}var nc=!0;function yS(e,n,a,r){var u=B.T;B.T=null;var f=G.p;try{G.p=2,Yf(e,n,a,r)}finally{G.p=f,B.T=u}}function MS(e,n,a,r){var u=B.T;B.T=null;var f=G.p;try{G.p=8,Yf(e,n,a,r)}finally{G.p=f,B.T=u}}function Yf(e,n,a,r){if(nc){var u=Kf(r);if(u===null)Nf(e,n,r,ic,a),Eg(e,r);else if(TS(u,e,n,a,r))r.stopPropagation();else if(Eg(e,r),n&4&&-1<ES.indexOf(e)){for(;u!==null;){var f=Ma(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=St(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var F=1<<31-Ot(v);b.entanglements[1]|=F,v&=~F}Pi(f),(Le&6)===0&&(Fl=M()+500,Mo(0))}}break;case 31:case 13:b=os(f,2),b!==null&&qn(b,f,2),Gl(),qf(f,2)}if(f=Kf(r),f===null&&Nf(e,n,r,ic,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Nf(e,n,r,null,a)}}function Kf(e){return e=jc(e),jf(e)}var ic=null;function jf(e){if(ic=null,e=ya(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function Mg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case dt:return 2;case vt:return 8;case ut:case jt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Zf=!1,Va=null,ka=null,Xa=null,wo=new Map,Do=new Map,Wa=[],ES="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Eg(e,n){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ma(n),n!==null&&Sg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function TS(e,n,a,r,u){switch(n){case"focusin":return Va=Uo(Va,e,n,a,r,u),!0;case"dragenter":return ka=Uo(ka,e,n,a,r,u),!0;case"mouseover":return Xa=Uo(Xa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,Uo(wo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,e,n,a,r,u)),!0}return!1}function Tg(e){var n=ya(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ui(e.priority,function(){yg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ui(e.priority,function(){yg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Kf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Kc=r,a.target.dispatchEvent(r),Kc=null}else return n=Ma(a),n!==null&&Sg(n),e.blockedOn=a,!1;n.shift()}return!0}function bg(e,n,a){ac(e)&&a.delete(n)}function bS(){Zf=!1,Va!==null&&ac(Va)&&(Va=null),ka!==null&&ac(ka)&&(ka=null),Xa!==null&&ac(Xa)&&(Xa=null),wo.forEach(bg),Do.forEach(bg)}function sc(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,bS)))}var rc=null;function Ag(e){rc!==e&&(rc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){rc===e&&(rc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(jf(r||a)===null)continue;break}var f=Ma(a);f!==null&&(e.splice(n,3),n-=3,Yu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function pr(e){function n(F){return sc(F,e)}Va!==null&&sc(Va,e),ka!==null&&sc(ka,e),Xa!==null&&sc(Xa,e),wo.forEach(n),Do.forEach(n);for(var a=0;a<Wa.length;a++){var r=Wa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Tg(a),a.blockedOn===null&&Wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[Sn]||null;if(typeof f=="function")v||Ag(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Sn]||null)b=v.formAction;else if(jf(u)!==null)continue}else b=v.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),Ag(a)}}}function Rg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Qf(e){this._internalRoot=e}oc.prototype.render=Qf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ni();vg(a,r,e,n,null,null)},oc.prototype.unmount=Qf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vg(e.current,2,null,e,null,null),Gl(),n[yi]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,e),a===0&&Tg(e)}};var Cg=t.version;if(Cg!=="19.2.3")throw Error(s(527,Cg,"19.2.3"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var AS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Mt=lc.inject(AS),Et=lc}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Pm,f=zm,v=Im;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=gg(e,1,!1,null,null,a,r,null,u,f,v,Rg),e[yi]=n.current,Lf(e),new Qf(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Pm,v=zm,b=Im,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=gg(e,1,!0,n,a??null,r,u,F,f,v,b,Rg),n.context=_g(null),a=n.current,r=ni(),r=Hr(r),u=Da(r),u.callback=null,Ua(a,u,r),a=r,n.current.lanes=a,Nn(n,a),Pi(n),e[yi]=n.current,Lf(e),new oc(n)},No.version="19.2.3",No}var Bg;function IS(){if(Bg)return th.exports;Bg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),th.exports=zS(),th.exports}var BS=IS();const FS=H_(BS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="182",HS=0,Fg=1,GS=2,Uc=1,VS=2,Vo=3,es=0,Kn=1,ma=2,_a=0,wr=1,Hg=2,Gg=3,Vg=4,kS=5,Rs=100,XS=101,WS=102,qS=103,YS=104,KS=200,jS=201,ZS=202,QS=203,Ih=204,Bh=205,JS=206,$S=207,ty=208,ey=209,ny=210,iy=211,ay=212,sy=213,ry=214,Fh=0,Hh=1,Gh=2,Ur=3,Vh=4,kh=5,Xh=6,Wh=7,G_=0,oy=1,ly=2,Hi=0,V_=1,k_=2,X_=3,W_=4,q_=5,Y_=6,K_=7,j_=300,Us=301,Lr=302,qh=303,Yh=304,Vc=306,Kh=1e3,ga=1001,jh=1002,Un=1003,cy=1004,cc=1005,In=1006,ah=1007,ws=1008,ri=1009,Z_=1010,Q_=1011,Xo=1012,Pd=1013,ki=1014,Bi=1015,xa=1016,zd=1017,Id=1018,Wo=1020,J_=35902,$_=35899,tv=1021,ev=1022,Di=1023,Sa=1026,Ds=1027,nv=1028,Bd=1029,Nr=1030,Fd=1031,Hd=1033,Lc=33776,Nc=33777,Oc=33778,Pc=33779,Zh=35840,Qh=35841,Jh=35842,$h=35843,td=36196,ed=37492,nd=37496,id=37488,ad=37489,sd=37490,rd=37491,od=37808,ld=37809,cd=37810,ud=37811,fd=37812,hd=37813,dd=37814,pd=37815,md=37816,gd=37817,_d=37818,vd=37819,xd=37820,Sd=37821,yd=36492,Md=36494,Ed=36495,Td=36283,bd=36284,Ad=36285,Rd=36286,uy=3200,iv=0,fy=1,$a="",xi="srgb",Or="srgb-linear",Ic="linear",He="srgb",mr=7680,kg=519,hy=512,dy=513,py=514,Gd=515,my=516,gy=517,Vd=518,_y=519,Xg=35044,Wg="300 es",Fi=2e3,Bc=2001;function av(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Fc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function vy(){const o=Fc("canvas");return o.style.display="block",o}const qg={};function Yg(...o){const t="THREE."+o.shift();console.log(t,...o)}function se(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Ce(...o){const t="THREE."+o.shift();console.error(t,...o)}function qo(...o){const t=o.join(" ");t in qg||(qg[t]=!0,se(...o))}function xy(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class zr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,Cd=180/Math.PI;function Ko(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function ye(o,t,i){return Math.max(t,Math.min(i,o))}function Sy(o,t){return(o%t+t)%t}function rh(o,t,i){return(1-i)*o+i*t}function Oo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Yn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Me{constructor(t=0,i=0){Me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3],S=c[h+0],E=c[h+1],R=c[h+2],w=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g;return}if(d>=1){t[i+0]=S,t[i+1]=E,t[i+2]=R,t[i+3]=w;return}if(g!==w||m!==S||p!==E||x!==R){let y=m*S+p*E+x*R+g*w;y<0&&(S=-S,E=-E,R=-R,w=-w,y=-y);let _=1-d;if(y<.9995){const D=Math.acos(y),L=Math.sin(D);_=Math.sin(_*D)/L,d=Math.sin(d*D)/L,m=m*_+S*d,p=p*_+E*d,x=x*_+R*d,g=g*_+w*d}else{m=m*_+S*d,p=p*_+E*d,x=x*_+R*d,g=g*_+w*d;const D=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=D,p*=D,x*=D,g*=D}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[h],S=c[h+1],E=c[h+2],R=c[h+3];return t[i]=d*R+x*g+m*E-p*S,t[i+1]=m*R+x*S+p*g-d*E,t[i+2]=p*R+x*E+d*S-m*g,t[i+3]=x*R-d*g-m*S-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),g=d(c/2),S=m(s/2),E=m(l/2),R=m(c/2);switch(h){case"XYZ":this._x=S*x*g+p*E*R,this._y=p*E*g-S*x*R,this._z=p*x*R+S*E*g,this._w=p*x*g-S*E*R;break;case"YXZ":this._x=S*x*g+p*E*R,this._y=p*E*g-S*x*R,this._z=p*x*R-S*E*g,this._w=p*x*g+S*E*R;break;case"ZXY":this._x=S*x*g-p*E*R,this._y=p*E*g+S*x*R,this._z=p*x*R+S*E*g,this._w=p*x*g-S*E*R;break;case"ZYX":this._x=S*x*g-p*E*R,this._y=p*E*g+S*x*R,this._z=p*x*R-S*E*g,this._w=p*x*g+S*E*R;break;case"YZX":this._x=S*x*g+p*E*R,this._y=p*E*g+S*x*R,this._z=p*x*R-S*E*g,this._w=p*x*g-S*E*R;break;case"XZY":this._x=S*x*g-p*E*R,this._y=p*E*g-S*x*R,this._z=p*x*R+S*E*g,this._w=p*x*g+S*E*R;break;default:se("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],g=i[10],S=s+d+g;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>d&&s>g){const E=2*Math.sqrt(1+s-d-g);this._w=(x-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>g){const E=2*Math.sqrt(1+d-s-g);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+g-s-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-c*m,this._y=l*x+h*m+c*d-s*p,this._z=c*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Kg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Kg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),x=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*x,this.y=s+m*x+d*p-c*g,this.z=l+m*g+c*x-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return oh.copy(this).projectOnVector(t),this.sub(oh)}reflect(t){return this.sub(oh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new Z,Kg=new jo;class ue{constructor(t,i,s,l,c,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],g=s[7],S=s[2],E=s[5],R=s[8],w=l[0],y=l[3],_=l[6],D=l[1],L=l[4],U=l[7],z=l[2],I=l[5],N=l[8];return c[0]=h*w+d*D+m*z,c[3]=h*y+d*L+m*I,c[6]=h*_+d*U+m*N,c[1]=p*w+x*D+g*z,c[4]=p*y+x*L+g*I,c[7]=p*_+x*U+g*N,c[2]=S*w+E*D+R*z,c[5]=S*y+E*L+R*I,c[8]=S*_+E*U+R*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8];return i*h*x-i*d*p-s*c*x+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],g=x*h-d*p,S=d*m-x*c,E=p*c-h*m,R=i*g+s*S+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=g*w,t[1]=(l*p-x*s)*w,t[2]=(d*s-l*h)*w,t[3]=S*w,t[4]=(x*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=E*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(lh.makeScale(t,i)),this}rotate(t){return this.premultiply(lh.makeRotation(-t)),this}translate(t,i){return this.premultiply(lh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new ue,jg=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zg=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yy(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Ic:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:t,whitePoint:s,transfer:Ic,toXYZ:jg,fromXYZ:Zg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:s,transfer:He,toXYZ:jg,fromXYZ:Zg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),o}const be=yy();function va(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Dr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gr;class My{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{gr===void 0&&(gr=Fc("canvas")),gr.width=t.width,gr.height=t.height;const l=gr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=va(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(va(i[s]/255)*255):i[s]=va(i[s]);return{data:i,width:t.width,height:t.height}}else return se("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ey=0;class kd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Ko(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(ch(l[h].image)):c.push(ch(l[h]))}else c=ch(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?My.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(se("Texture: Unable to serialize Texture."),{})}let Ty=0;const uh=new Z;class Hn extends zr{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=ga,l=ga,c=In,h=ws,d=Di,m=ri,p=Hn.DEFAULT_ANISOTROPY,x=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Ko(),this.name="",this.source=new kd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){se(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==j_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kh:t.x=t.x-Math.floor(t.x);break;case ga:t.x=t.x<0?0:1;break;case jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kh:t.y=t.y-Math.floor(t.y);break;case ga:t.y=t.y<0?0:1;break;case jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=j_;Hn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],x=m[4],g=m[8],S=m[1],E=m[5],R=m[9],w=m[2],y=m[6],_=m[10];if(Math.abs(x-S)<.01&&Math.abs(g-w)<.01&&Math.abs(R-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(g+w)<.1&&Math.abs(R+y)<.1&&Math.abs(p+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(E+1)/2,z=(_+1)/2,I=(x+S)/4,N=(g+w)/4,X=(R+y)/4;return L>U&&L>z?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=I/s,c=N/s):U>z?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=I/l,c=X/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=N/c,l=X/c),this.set(s,l,c,i),this}let D=Math.sqrt((y-R)*(y-R)+(g-w)*(g-w)+(S-x)*(S-x));return Math.abs(D)<.001&&(D=1),this.x=(y-R)/D,this.y=(g-w)/D,this.z=(S-x)/D,this.w=Math.acos((p+E+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class by extends zr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Hn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new kd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends by{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class sv extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ay extends Hn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),uc.copy(s.boundingBox)),uc.applyMatrix4(t.matrixWorld),this.union(uc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),fc.subVectors(this.max,Po),_r.subVectors(t.a,Po),vr.subVectors(t.b,Po),xr.subVectors(t.c,Po),Ya.subVectors(vr,_r),Ka.subVectors(xr,vr),Ss.subVectors(_r,xr);let i=[0,-Ya.z,Ya.y,0,-Ka.z,Ka.y,0,-Ss.z,Ss.y,Ya.z,0,-Ya.x,Ka.z,0,-Ka.x,Ss.z,0,-Ss.x,-Ya.y,Ya.x,0,-Ka.y,Ka.x,0,-Ss.y,Ss.x,0];return!fh(i,_r,vr,xr,fc)||(i=[1,0,0,0,1,0,0,0,1],!fh(i,_r,vr,xr,fc))?!1:(hc.crossVectors(Ya,Ka),i=[hc.x,hc.y,hc.z],fh(i,_r,vr,xr,fc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ua=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ai=new Z,uc=new Zo,_r=new Z,vr=new Z,xr=new Z,Ya=new Z,Ka=new Z,Ss=new Z,Po=new Z,fc=new Z,hc=new Z,ys=new Z;function fh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){ys.fromArray(o,c);const d=l.x*Math.abs(ys.x)+l.y*Math.abs(ys.y)+l.z*Math.abs(ys.z),m=t.dot(ys),p=i.dot(ys),x=s.dot(ys);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const Ry=new Zo,zo=new Z,hh=new Z;class kc{constructor(t=new Z,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ry.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(hh)),this.expandByPoint(zo.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fa=new Z,dh=new Z,dc=new Z,ja=new Z,ph=new Z,pc=new Z,mh=new Z;class rv{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){dh.copy(t).add(i).multiplyScalar(.5),dc.copy(i).sub(t).normalize(),ja.copy(this.origin).sub(dh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(dc),d=ja.dot(this.direction),m=-ja.dot(dc),p=ja.lengthSq(),x=Math.abs(1-h*h);let g,S,E,R;if(x>0)if(g=h*m-d,S=h*d-m,R=c*x,g>=0)if(S>=-R)if(S<=R){const w=1/x;g*=w,S*=w,E=g*(g+h*S+2*d)+S*(h*g+S+2*m)+p}else S=c,g=Math.max(0,-(h*S+d)),E=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(h*S+d)),E=-g*g+S*(S+2*m)+p;else S<=-R?(g=Math.max(0,-(-h*c+d)),S=g>0?-c:Math.min(Math.max(-c,-m),c),E=-g*g+S*(S+2*m)+p):S<=R?(g=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+p):(g=Math.max(0,-(h*c+d)),S=g>0?c:Math.min(Math.max(-c,-m),c),E=-g*g+S*(S+2*m)+p);else S=h>0?-c:c,g=Math.max(0,-(h*S+d)),E=-g*g+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(dh).addScaledVector(dc,S),E}intersectSphere(t,i){fa.subVectors(t.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),x>=0?(c=(t.min.y-S.y)*x,h=(t.max.y-S.y)*x):(c=(t.max.y-S.y)*x,h=(t.min.y-S.y)*x),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(d=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,i,s,l,c){ph.subVectors(i,t),pc.subVectors(s,t),mh.crossVectors(ph,pc);let h=this.direction.dot(mh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ja.subVectors(this.origin,t);const m=d*this.direction.dot(pc.crossVectors(ja,pc));if(m<0)return null;const p=d*this.direction.dot(ph.cross(ja));if(p<0||m+p>h)return null;const x=-d*ja.dot(mh);return x<0?null:this.at(x/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,c,h,d,m,p,x,g,S,E,R,w,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,x,g,S,E,R,w,y)}set(t,i,s,l,c,h,d,m,p,x,g,S,E,R,w,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=S,_[3]=E,_[7]=R,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Sr.setFromMatrixColumn(t,0).length(),c=1/Sr.setFromMatrixColumn(t,1).length(),h=1/Sr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const S=h*x,E=h*g,R=d*x,w=d*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=E+R*p,i[5]=S-w*p,i[9]=-d*m,i[2]=w-S*p,i[6]=R+E*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*x,E=m*g,R=p*x,w=p*g;i[0]=S+w*d,i[4]=R*d-E,i[8]=h*p,i[1]=h*g,i[5]=h*x,i[9]=-d,i[2]=E*d-R,i[6]=w+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*x,E=m*g,R=p*x,w=p*g;i[0]=S-w*d,i[4]=-h*g,i[8]=R+E*d,i[1]=E+R*d,i[5]=h*x,i[9]=w-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*x,E=h*g,R=d*x,w=d*g;i[0]=m*x,i[4]=R*p-E,i[8]=S*p+w,i[1]=m*g,i[5]=w*p+S,i[9]=E*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,E=h*p,R=d*m,w=d*p;i[0]=m*x,i[4]=w-S*g,i[8]=R*g+E,i[1]=g,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=E*g+R,i[10]=S-w*g}else if(t.order==="XZY"){const S=h*m,E=h*p,R=d*m,w=d*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=S*g+w,i[5]=h*x,i[9]=E*g-R,i[2]=R*g-E,i[6]=d*x,i[10]=w*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cy,t,wy)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Za.crossVectors(s,ii),Za.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Za.crossVectors(s,ii)),Za.normalize(),mc.crossVectors(ii,Za),l[0]=Za.x,l[4]=mc.x,l[8]=ii.x,l[1]=Za.y,l[5]=mc.y,l[9]=ii.y,l[2]=Za.z,l[6]=mc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],g=s[5],S=s[9],E=s[13],R=s[2],w=s[6],y=s[10],_=s[14],D=s[3],L=s[7],U=s[11],z=s[15],I=l[0],N=l[4],X=l[8],T=l[12],C=l[1],H=l[5],Y=l[9],J=l[13],ct=l[2],lt=l[6],B=l[10],G=l[14],st=l[3],yt=l[7],xt=l[11],P=l[15];return c[0]=h*I+d*C+m*ct+p*st,c[4]=h*N+d*H+m*lt+p*yt,c[8]=h*X+d*Y+m*B+p*xt,c[12]=h*T+d*J+m*G+p*P,c[1]=x*I+g*C+S*ct+E*st,c[5]=x*N+g*H+S*lt+E*yt,c[9]=x*X+g*Y+S*B+E*xt,c[13]=x*T+g*J+S*G+E*P,c[2]=R*I+w*C+y*ct+_*st,c[6]=R*N+w*H+y*lt+_*yt,c[10]=R*X+w*Y+y*B+_*xt,c[14]=R*T+w*J+y*G+_*P,c[3]=D*I+L*C+U*ct+z*st,c[7]=D*N+L*H+U*lt+z*yt,c[11]=D*X+L*Y+U*B+z*xt,c[15]=D*T+L*J+U*G+z*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],x=t[2],g=t[6],S=t[10],E=t[14],R=t[3],w=t[7],y=t[11],_=t[15],D=m*E-p*S,L=d*E-p*g,U=d*S-m*g,z=h*E-p*x,I=h*S-m*x,N=h*g-d*x;return i*(w*D-y*L+_*U)-s*(R*D-y*z+_*I)+l*(R*L-w*z+_*N)-c*(R*U-w*I+y*N)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],g=t[9],S=t[10],E=t[11],R=t[12],w=t[13],y=t[14],_=t[15],D=g*y*p-w*S*p+w*m*E-d*y*E-g*m*_+d*S*_,L=R*S*p-x*y*p-R*m*E+h*y*E+x*m*_-h*S*_,U=x*w*p-R*g*p+R*d*E-h*w*E-x*d*_+h*g*_,z=R*g*m-x*w*m-R*d*S+h*w*S+x*d*y-h*g*y,I=i*D+s*L+l*U+c*z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return t[0]=D*N,t[1]=(w*S*c-g*y*c-w*l*E+s*y*E+g*l*_-s*S*_)*N,t[2]=(d*y*c-w*m*c+w*l*p-s*y*p-d*l*_+s*m*_)*N,t[3]=(g*m*c-d*S*c-g*l*p+s*S*p+d*l*E-s*m*E)*N,t[4]=L*N,t[5]=(x*y*c-R*S*c+R*l*E-i*y*E-x*l*_+i*S*_)*N,t[6]=(R*m*c-h*y*c-R*l*p+i*y*p+h*l*_-i*m*_)*N,t[7]=(h*S*c-x*m*c+x*l*p-i*S*p-h*l*E+i*m*E)*N,t[8]=U*N,t[9]=(R*g*c-x*w*c-R*s*E+i*w*E+x*s*_-i*g*_)*N,t[10]=(h*w*c-R*d*c+R*s*p-i*w*p-h*s*_+i*d*_)*N,t[11]=(x*d*c-h*g*c-x*s*p+i*g*p+h*s*E-i*d*E)*N,t[12]=z*N,t[13]=(x*w*l-R*g*l+R*s*S-i*w*S-x*s*y+i*g*y)*N,t[14]=(R*d*l-h*w*l-R*s*m+i*w*m+h*s*y-i*d*y)*N,t[15]=(h*g*l-x*d*l+x*s*m-i*g*m-h*s*S+i*d*S)*N,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,x=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,x=h+h,g=d+d,S=c*p,E=c*x,R=c*g,w=h*x,y=h*g,_=d*g,D=m*p,L=m*x,U=m*g,z=s.x,I=s.y,N=s.z;return l[0]=(1-(w+_))*z,l[1]=(E+U)*z,l[2]=(R-L)*z,l[3]=0,l[4]=(E-U)*I,l[5]=(1-(S+_))*I,l[6]=(y+D)*I,l[7]=0,l[8]=(R+L)*N,l[9]=(y-D)*N,l[10]=(1-(S+w))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Sr.set(l[0],l[1],l[2]).length();const h=Sr.set(l[4],l[5],l[6]).length(),d=Sr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ri.copy(this);const p=1/c,x=1/h,g=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=x,Ri.elements[5]*=x,Ri.elements[6]*=x,Ri.elements[8]*=g,Ri.elements[9]*=g,Ri.elements[10]*=g,i.setFromRotationMatrix(Ri),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Fi,m=!1){const p=this.elements,x=2*c/(i-t),g=2*c/(s-l),S=(i+t)/(i-t),E=(s+l)/(s-l);let R,w;if(m)R=c/(h-c),w=h*c/(h-c);else if(d===Fi)R=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Bc)R=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Fi,m=!1){const p=this.elements,x=2/(i-t),g=2/(s-l),S=-(i+t)/(i-t),E=-(s+l)/(s-l);let R,w;if(m)R=1/(h-c),w=h/(h-c);else if(d===Fi)R=-2/(h-c),w=-(h+c)/(h-c);else if(d===Bc)R=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Sr=new Z,Ri=new Je,Cy=new Z(0,0,0),wy=new Z(1,1,1),Za=new Z,mc=new Z,ii=new Z,Qg=new Je,Jg=new jo;class Xi{constructor(t=0,i=0,s=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],g=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:se("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Qg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class ov{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dy=0;const $g=new Z,yr=new jo,ha=new Je,gc=new Z,Io=new Z,Uy=new Z,Ly=new jo,t_=new Z(1,0,0),e_=new Z(0,1,0),n_=new Z(0,0,1),i_={type:"added"},Ny={type:"removed"},Mr={type:"childadded",child:null},gh={type:"childremoved",child:null};class Ln extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new Z,i=new Xi,s=new jo,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new ue}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(t_,t)}rotateY(t){return this.rotateOnAxis(e_,t)}rotateZ(t){return this.rotateOnAxis(n_,t)}translateOnAxis(t,i){return $g.copy(t).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(t_,t)}translateY(t){return this.translateOnAxis(e_,t)}translateZ(t){return this.translateOnAxis(n_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gc.copy(t):gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Io,gc,this.up):ha.lookAt(gc,Io,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(ha),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(i_),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ny),gh.child=t,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(i_),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,t,Uy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,Ly,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),x=h(t.images),g=h(t.shapes),S=h(t.skeletons),E=h(t.animations),R=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),R.length>0&&(s.nodes=R)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new Z(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new Z,da=new Z,_h=new Z,pa=new Z,Er=new Z,Tr=new Z,a_=new Z,vh=new Z,xh=new Z,Sh=new Z,yh=new an,Mh=new an,Eh=new an;class wi{constructor(t=new Z,i=new Z,s=new Z){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ci.subVectors(l,i),da.subVectors(s,i),_h.subVectors(t,i);const h=Ci.dot(Ci),d=Ci.dot(da),m=Ci.dot(_h),p=da.dot(da),x=da.dot(_h),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const S=1/g,E=(p*m-d*x)*S,R=(h*x-d*m)*S;return c.set(1-E-R,R,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return yh.setScalar(0),Mh.setScalar(0),Eh.setScalar(0),yh.fromBufferAttribute(t,i),Mh.fromBufferAttribute(t,s),Eh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(yh,c.x),h.addScaledVector(Mh,c.y),h.addScaledVector(Eh,c.z),h}static isFrontFacing(t,i,s,l){return Ci.subVectors(s,i),da.subVectors(t,i),Ci.cross(da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ci.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return wi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Er.subVectors(l,s),Tr.subVectors(c,s),vh.subVectors(t,s);const m=Er.dot(vh),p=Tr.dot(vh);if(m<=0&&p<=0)return i.copy(s);xh.subVectors(t,l);const x=Er.dot(xh),g=Tr.dot(xh);if(x>=0&&g<=x)return i.copy(l);const S=m*g-x*p;if(S<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(Er,h);Sh.subVectors(t,c);const E=Er.dot(Sh),R=Tr.dot(Sh);if(R>=0&&E<=R)return i.copy(c);const w=E*p-m*R;if(w<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(s).addScaledVector(Tr,d);const y=x*R-E*g;if(y<=0&&g-x>=0&&E-R>=0)return a_.subVectors(c,l),d=(g-x)/(g-x+(E-R)),i.copy(l).addScaledVector(a_,d);const _=1/(y+w+S);return h=w*_,d=S*_,i.copy(s).addScaledVector(Er,h).addScaledVector(Tr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Th(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ge{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=be.workingColorSpace){if(t=Sy(t,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Th(h,c,t+1/3),this.g=Th(h,c,t),this.b=Th(h,c,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&se("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:se("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);se("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const s=lv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):se("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return be.workingToColorSpace(zn.copy(this),t),Math.round(ye(zn.r*255,0,255))*65536+Math.round(ye(zn.g*255,0,255))*256+Math.round(ye(zn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=x<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=xi){be.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,l=zn.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Qa),this.setHSL(Qa.h+t,Qa.s+i,Qa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Qa),t.getHSL(_c);const s=rh(Qa.h,_c.h,i),l=rh(Qa.s,_c.s,i),c=rh(Qa.l,_c.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new ge;ge.NAMES=lv;let Oy=0;class Ir extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=wr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Bh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){se(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){se(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ih&&(s.blendSrc=this.blendSrc),this.blendDst!==Bh&&(s.blendDst=this.blendDst),this.blendEquation!==Rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hc extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=G_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new Z,vc=new Me;let Py=0;class Vi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Py++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Xg,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)vc.fromBufferAttribute(this,i),vc.applyMatrix3(t),this.setXY(i,vc.x,vc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Oo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xg&&(t.usage=this.usage),t}}class cv extends Vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class uv extends Vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class mn extends Vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let zy=0;const _i=new Je,bh=new Ln,br=new Z,ai=new Zo,Bo=new Zo,xn=new Z;class jn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(av(t)?uv:cv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,i,s){return _i.makeTranslation(t,i,s),this.applyMatrix4(_i),this}scale(t,i,s){return _i.makeScale(t,i,s),this.applyMatrix4(_i),this}lookAt(t){return bh.lookAt(t),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new mn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&se("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ai.min,Bo.min),ai.expandByPoint(xn),xn.addVectors(ai.max,Bo.max),ai.expandByPoint(xn)):(ai.expandByPoint(Bo.min),ai.expandByPoint(Bo.max))}ai.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)xn.fromBufferAttribute(d,p),m&&(br.fromBufferAttribute(t,p),xn.add(br)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new Z,m[X]=new Z;const p=new Z,x=new Z,g=new Z,S=new Me,E=new Me,R=new Me,w=new Z,y=new Z;function _(X,T,C){p.fromBufferAttribute(s,X),x.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),S.fromBufferAttribute(c,X),E.fromBufferAttribute(c,T),R.fromBufferAttribute(c,C),x.sub(p),g.sub(p),E.sub(S),R.sub(S);const H=1/(E.x*R.y-R.x*E.y);isFinite(H)&&(w.copy(x).multiplyScalar(R.y).addScaledVector(g,-E.y).multiplyScalar(H),y.copy(g).multiplyScalar(E.x).addScaledVector(x,-R.x).multiplyScalar(H),d[X].add(w),d[T].add(w),d[C].add(w),m[X].add(y),m[T].add(y),m[C].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let X=0,T=D.length;X<T;++X){const C=D[X],H=C.start,Y=C.count;for(let J=H,ct=H+Y;J<ct;J+=3)_(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const L=new Z,U=new Z,z=new Z,I=new Z;function N(X){z.fromBufferAttribute(l,X),I.copy(z);const T=d[X];L.copy(T),L.sub(z.multiplyScalar(z.dot(T))).normalize(),U.crossVectors(I,T);const H=U.dot(m[X])<0?-1:1;h.setXYZW(X,L.x,L.y,L.z,H)}for(let X=0,T=D.length;X<T;++X){const C=D[X],H=C.start,Y=C.count;for(let J=H,ct=H+Y;J<ct;J+=3)N(t.getX(J+0)),N(t.getX(J+1)),N(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new Z,c=new Z,h=new Z,d=new Z,m=new Z,p=new Z,x=new Z,g=new Z;if(t)for(let S=0,E=t.count;S<E;S+=3){const R=t.getX(S+0),w=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),d.add(x),m.add(x),p.add(x),s.setXYZ(R,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),x.subVectors(h,c),g.subVectors(l,c),x.cross(g),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(d,m){const p=d.array,x=d.itemSize,g=d.normalized,S=new p.constructor(m.length*x);let E=0,R=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?E=m[w]*d.data.stride+d.offset:E=m[w]*x;for(let _=0;_<x;_++)S[R++]=p[E++]}return new Vi(S,x,g)}if(this.index===null)return se("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new jn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,g=p.length;x<g;x++){const S=p[x],E=t(S,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,S=p.length;g<S;g++){const E=p[g];x.push(E.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],g=c[p];for(let S=0,E=g.length;S<E;S++)x.push(g[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,x=h.length;p<x;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s_=new Je,Ms=new rv,xc=new kc,r_=new Z,Sc=new Z,yc=new Z,Mc=new Z,Ah=new Z,Ec=new Z,o_=new Z,Tc=new Z;class Dn extends Ln{constructor(t=new jn,i=new Hc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ec.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],g=c[m];x!==0&&(Ah.fromBufferAttribute(g,t),h?Ec.addScaledVector(Ah,x):Ec.addScaledVector(Ah.sub(i),x))}i.add(Ec)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(c),Ms.copy(t.ray).recast(t.near),!(xc.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(xc,r_)===null||Ms.origin.distanceToSquared(r_)>(t.far-t.near)**2))&&(s_.copy(c).invert(),Ms.copy(t.ray).applyMatrix4(s_),!(s.boundingBox!==null&&Ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ms)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,S=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,w=S.length;R<w;R++){const y=S[R],_=h[y.materialIndex],D=Math.max(y.start,E.start),L=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let U=D,z=L;U<z;U+=3){const I=d.getX(U),N=d.getX(U+1),X=d.getX(U+2);l=bc(this,_,t,s,p,x,g,I,N,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),w=Math.min(d.count,E.start+E.count);for(let y=R,_=w;y<_;y+=3){const D=d.getX(y),L=d.getX(y+1),U=d.getX(y+2);l=bc(this,h,t,s,p,x,g,D,L,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,w=S.length;R<w;R++){const y=S[R],_=h[y.materialIndex],D=Math.max(y.start,E.start),L=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let U=D,z=L;U<z;U+=3){const I=U,N=U+1,X=U+2;l=bc(this,_,t,s,p,x,g,I,N,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let y=R,_=w;y<_;y+=3){const D=y,L=y+1,U=y+2;l=bc(this,h,t,s,p,x,g,D,L,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Iy(o,t,i,s,l,c,h,d){let m;if(t.side===Kn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===es,d),m===null)return null;Tc.copy(d),Tc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Tc);return p<i.near||p>i.far?null:{distance:p,point:Tc.clone(),object:o}}function bc(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Sc),o.getVertexPosition(m,yc),o.getVertexPosition(p,Mc);const x=Iy(o,t,i,s,Sc,yc,Mc,o_);if(x){const g=new Z;wi.getBarycoord(o_,Sc,yc,Mc,g),l&&(x.uv=wi.getInterpolatedAttribute(l,d,m,p,g,new Me)),c&&(x.uv1=wi.getInterpolatedAttribute(c,d,m,p,g,new Me)),h&&(x.normal=wi.getInterpolatedAttribute(h,d,m,p,g,new Z),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new Z,materialIndex:0};wi.getNormal(Sc,yc,Mc,S.normal),x.face=S,x.barycoord=g}return x}class Ls extends jn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],x=[],g=[];let S=0,E=0;R("z","y","x",-1,-1,s,i,t,h,c,0),R("z","y","x",1,-1,s,i,-t,h,c,1),R("x","z","y",1,1,t,s,i,l,h,2),R("x","z","y",1,-1,t,s,-i,l,h,3),R("x","y","z",1,-1,t,i,s,l,c,4),R("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(g,2));function R(w,y,_,D,L,U,z,I,N,X,T){const C=U/N,H=z/X,Y=U/2,J=z/2,ct=I/2,lt=N+1,B=X+1;let G=0,st=0;const yt=new Z;for(let xt=0;xt<B;xt++){const P=xt*H-J;for(let at=0;at<lt;at++){const gt=at*C-Y;yt[w]=gt*D,yt[y]=P*L,yt[_]=ct,p.push(yt.x,yt.y,yt.z),yt[w]=0,yt[y]=0,yt[_]=I>0?1:-1,x.push(yt.x,yt.y,yt.z),g.push(at/N),g.push(1-xt/X),G+=1}}for(let xt=0;xt<X;xt++)for(let P=0;P<N;P++){const at=S+P+lt*xt,gt=S+P+lt*(xt+1),bt=S+(P+1)+lt*(xt+1),Bt=S+(P+1)+lt*xt;m.push(at,gt,Bt),m.push(gt,bt,Bt),st+=6}d.addGroup(E,st,T),E+=st,S+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(se("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)t[l]=s[l]}return t}function By(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function fv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const Fy={clone:Pr,merge:Fn};var Hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hy,this.fragmentShader=Gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=By(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class hv extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new Z,l_=new Me,c_=new Me;class si extends hv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Cd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cd*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z)}getViewSize(t,i){return this.getViewBounds(t,l_,c_),i.subVectors(c_,l_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ar=-90,Rr=1;class Vy extends Ln{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Ar,Rr,t,i);l.layers=this.layers,this.add(l);const c=new si(Ar,Rr,t,i);c.layers=this.layers,this.add(c);const h=new si(Ar,Rr,t,i);h.layers=this.layers,this.add(h);const d=new si(Ar,Rr,t,i);d.layers=this.layers,this.add(d);const m=new si(Ar,Rr,t,i);m.layers=this.layers,this.add(m);const p=new si(Ar,Rr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Fi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Bc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,x]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,x),t.setRenderTarget(g,S,E),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class dv extends Hn{constructor(t=[],i=Us,s,l,c,h,d,m,p,x){super(t,i,s,l,c,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pv extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new dv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ls(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:_a});c.uniforms.tEquirect.value=i;const h=new Dn(l,c),d=i.minFilter;return i.minFilter===ws&&(i.minFilter=In),new Vy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class vi extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ky={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=x.position.distanceTo(g.position),E=.02,R=.005;p.inputState.pinching&&S>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ky)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new vi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Gc{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ge(t),this.near=i,this.far=s}clone(){return new Gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xy extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Wy extends Hn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Un,x=Un,g,S){super(null,h,d,m,p,x,l,c,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ch=new Z,qy=new Z,Yy=new ue;class As{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ch.subVectors(s,i).cross(qy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ch),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Yy.getNormalMatrix(t),l=this.coplanarPoint(Ch).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new kc,Ky=new Me(.5,.5),Ac=new Z;class Xd{constructor(t=new As,i=new As,s=new As,l=new As,c=new As,h=new As){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Fi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],x=c[4],g=c[5],S=c[6],E=c[7],R=c[8],w=c[9],y=c[10],_=c[11],D=c[12],L=c[13],U=c[14],z=c[15];if(l[0].setComponents(p-h,E-x,_-R,z-D).normalize(),l[1].setComponents(p+h,E+x,_+R,z+D).normalize(),l[2].setComponents(p+d,E+g,_+w,z+L).normalize(),l[3].setComponents(p-d,E-g,_-w,z-L).normalize(),s)l[4].setComponents(m,S,y,U).normalize(),l[5].setComponents(p-m,E-S,_-y,z-U).normalize();else if(l[4].setComponents(p-m,E-S,_-y,z-U).normalize(),i===Fi)l[5].setComponents(p+m,E+S,_+y,z+U).normalize();else if(i===Bc)l[5].setComponents(m,S,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);const i=Ky.distanceTo(t.center);return Es.radius=.7071067811865476+i,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ac.x=l.normal.x>0?t.max.x:t.min.x,Ac.y=l.normal.y>0?t.max.y:t.min.y,Ac.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mv extends Ir{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const u_=new Je,wd=new rv,Rc=new kc,Cc=new Z;class jy extends Ln{constructor(t=new jn,i=new mv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=c,t.ray.intersectsSphere(Rc)===!1)return;u_.copy(l).invert(),wd.copy(t.ray).applyMatrix4(u_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),E=Math.min(p.count,h.start+h.count);for(let R=S,w=E;R<w;R++){const y=p.getX(R);Cc.fromBufferAttribute(g,y),f_(Cc,y,m,l,t,i,this)}}else{const S=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let R=S,w=E;R<w;R++)Cc.fromBufferAttribute(g,R),f_(Cc,R,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function f_(o,t,i,s,l,c,h){const d=wd.distanceSqToPoint(o);if(d<i){const m=new Z;wd.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Yo extends Hn{constructor(t,i,s=ki,l,c,h,d=Un,m=Un,p,x=Sa,g=1){if(x!==Sa&&x!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,c,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Zy extends Yo{constructor(t,i=ki,s=Us,l,c,h=Un,d=Un,m,p=Sa){const x={width:t,height:t,depth:1},g=[x,x,x,x,x,x];super(t,t,i,s,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gv extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wd extends jn{constructor(t=1,i=1,s=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:s,radialSegments:l,heightSegments:c},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const h=[],d=[],m=[],p=[],x=i/2,g=Math.PI/2*t,S=i,E=2*g+S,R=s*2+c,w=l+1,y=new Z,_=new Z;for(let D=0;D<=R;D++){let L=0,U=0,z=0,I=0;if(D<=s){const T=D/s,C=T*Math.PI/2;U=-x-t*Math.cos(C),z=t*Math.sin(C),I=-t*Math.cos(C),L=T*g}else if(D<=s+c){const T=(D-s)/c;U=-x+T*i,z=t,I=0,L=g+T*S}else{const T=(D-s-c)/s,C=T*Math.PI/2;U=x+t*Math.sin(C),z=t*Math.cos(C),I=t*Math.sin(C),L=g+S+T*g}const N=Math.max(0,Math.min(1,L/E));let X=0;D===0?X=.5/l:D===R&&(X=-.5/l);for(let T=0;T<=l;T++){const C=T/l,H=C*Math.PI*2,Y=Math.sin(H),J=Math.cos(H);_.x=-z*J,_.y=U,_.z=z*Y,d.push(_.x,_.y,_.z),y.set(-z*J,I,z*Y),y.normalize(),m.push(y.x,y.y,y.z),p.push(C+X,N)}if(D>0){const T=(D-1)*w;for(let C=0;C<l;C++){const H=T+C,Y=T+C+1,J=D*w+C,ct=D*w+C+1;h.push(H,Y,J),h.push(Y,ct,J)}}}this.setIndex(h),this.setAttribute("position",new mn(d,3)),this.setAttribute("normal",new mn(m,3)),this.setAttribute("uv",new mn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wd(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Xc extends jn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const x=[],g=[],S=[],E=[];let R=0;const w=[],y=s/2;let _=0;D(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(S,3)),this.setAttribute("uv",new mn(E,2));function D(){const U=new Z,z=new Z;let I=0;const N=(i-t)/s;for(let X=0;X<=c;X++){const T=[],C=X/c,H=C*(i-t)+t;for(let Y=0;Y<=l;Y++){const J=Y/l,ct=J*m+d,lt=Math.sin(ct),B=Math.cos(ct);z.x=H*lt,z.y=-C*s+y,z.z=H*B,g.push(z.x,z.y,z.z),U.set(lt,N,B).normalize(),S.push(U.x,U.y,U.z),E.push(J,1-C),T.push(R++)}w.push(T)}for(let X=0;X<l;X++)for(let T=0;T<c;T++){const C=w[T][X],H=w[T+1][X],Y=w[T+1][X+1],J=w[T][X+1];(t>0||T!==0)&&(x.push(C,H,J),I+=3),(i>0||T!==c-1)&&(x.push(H,Y,J),I+=3)}p.addGroup(_,I,0),_+=I}function L(U){const z=R,I=new Me,N=new Z;let X=0;const T=U===!0?t:i,C=U===!0?1:-1;for(let Y=1;Y<=l;Y++)g.push(0,y*C,0),S.push(0,C,0),E.push(.5,.5),R++;const H=R;for(let Y=0;Y<=l;Y++){const ct=Y/l*m+d,lt=Math.cos(ct),B=Math.sin(ct);N.x=T*B,N.y=y*C,N.z=T*lt,g.push(N.x,N.y,N.z),S.push(0,C,0),I.x=lt*.5+.5,I.y=B*.5*C+.5,E.push(I.x,I.y),R++}for(let Y=0;Y<l;Y++){const J=z+Y,ct=H+Y;U===!0?x.push(ct,ct+1,J):x.push(ct+1,ct,J),X+=3}p.addGroup(_,X,U===!0?1:2),_+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qd extends Xc{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(t){return new qd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wc extends jn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),x(),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(c.slice(),3)),this.setAttribute("uv",new mn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const L=new Z,U=new Z,z=new Z;for(let I=0;I<i.length;I+=3)E(i[I+0],L),E(i[I+1],U),E(i[I+2],z),m(L,U,z,D)}function m(D,L,U,z){const I=z+1,N=[];for(let X=0;X<=I;X++){N[X]=[];const T=D.clone().lerp(U,X/I),C=L.clone().lerp(U,X/I),H=I-X;for(let Y=0;Y<=H;Y++)Y===0&&X===I?N[X][Y]=T:N[X][Y]=T.clone().lerp(C,Y/H)}for(let X=0;X<I;X++)for(let T=0;T<2*(I-X)-1;T++){const C=Math.floor(T/2);T%2===0?(S(N[X][C+1]),S(N[X+1][C]),S(N[X][C])):(S(N[X][C+1]),S(N[X+1][C+1]),S(N[X+1][C]))}}function p(D){const L=new Z;for(let U=0;U<c.length;U+=3)L.x=c[U+0],L.y=c[U+1],L.z=c[U+2],L.normalize().multiplyScalar(D),c[U+0]=L.x,c[U+1]=L.y,c[U+2]=L.z}function x(){const D=new Z;for(let L=0;L<c.length;L+=3){D.x=c[L+0],D.y=c[L+1],D.z=c[L+2];const U=y(D)/2/Math.PI+.5,z=_(D)/Math.PI+.5;h.push(U,1-z)}R(),g()}function g(){for(let D=0;D<h.length;D+=6){const L=h[D+0],U=h[D+2],z=h[D+4],I=Math.max(L,U,z),N=Math.min(L,U,z);I>.9&&N<.1&&(L<.2&&(h[D+0]+=1),U<.2&&(h[D+2]+=1),z<.2&&(h[D+4]+=1))}}function S(D){c.push(D.x,D.y,D.z)}function E(D,L){const U=D*3;L.x=t[U+0],L.y=t[U+1],L.z=t[U+2]}function R(){const D=new Z,L=new Z,U=new Z,z=new Z,I=new Me,N=new Me,X=new Me;for(let T=0,C=0;T<c.length;T+=9,C+=6){D.set(c[T+0],c[T+1],c[T+2]),L.set(c[T+3],c[T+4],c[T+5]),U.set(c[T+6],c[T+7],c[T+8]),I.set(h[C+0],h[C+1]),N.set(h[C+2],h[C+3]),X.set(h[C+4],h[C+5]),z.copy(D).add(L).add(U).divideScalar(3);const H=y(z);w(I,C+0,D,H),w(N,C+2,L,H),w(X,C+4,U,H)}}function w(D,L,U,z){z<0&&D.x===1&&(h[L]=D.x-1),U.x===0&&U.z===0&&(h[L]=z/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function _(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.vertices,t.indices,t.radius,t.detail)}}class Yd extends Wc{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Yd(t.radius,t.detail)}}class Qo extends jn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,g=t/d,S=i/m,E=[],R=[],w=[],y=[];for(let _=0;_<x;_++){const D=_*S-h;for(let L=0;L<p;L++){const U=L*g-c;R.push(U,-D,0),w.push(0,0,1),y.push(L/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let D=0;D<d;D++){const L=D+p*_,U=D+p*(_+1),z=D+1+p*(_+1),I=D+1+p*_;E.push(L,U,I),E.push(U,z,I)}this.setIndex(E),this.setAttribute("position",new mn(R,3)),this.setAttribute("normal",new mn(w,3)),this.setAttribute("uv",new mn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Kd extends Wc{constructor(t=1,i=0){const s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,l,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Kd(t.radius,t.detail)}}class Qy extends Wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dd extends Ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iv,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jy extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $y extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class jd extends Ln{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const wh=new Je,h_=new Z,d_=new Z;class _v{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;h_.setFromMatrixPosition(t.matrixWorld),i.position.copy(h_),d_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(d_),i.updateMatrixWorld(),wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class tM extends _v{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class eM extends jd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new tM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Zd extends hv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nM extends _v{constructor(){super(new Zd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p_ extends jd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new nM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class iM extends jd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class aM extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function m_(o,t,i,s){const l=sM(s);switch(i){case tv:return o*t;case nv:return o*t/l.components*l.byteLength;case Bd:return o*t/l.components*l.byteLength;case Nr:return o*t*2/l.components*l.byteLength;case Fd:return o*t*2/l.components*l.byteLength;case ev:return o*t*3/l.components*l.byteLength;case Di:return o*t*4/l.components*l.byteLength;case Hd:return o*t*4/l.components*l.byteLength;case Lc:case Nc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qh:case $h:return Math.max(o,16)*Math.max(t,8)/4;case Zh:case Jh:return Math.max(o,8)*Math.max(t,8)/2;case td:case ed:case id:case ad:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nd:case sd:case rd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case od:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case cd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ud:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case fd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case hd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case dd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case pd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case md:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case gd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case _d:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case vd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case xd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case yd:case Md:case Ed:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Td:case bd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Ad:case Rd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sM(o){switch(o){case ri:case Z_:return{byteLength:1,components:1};case Xo:case Q_:case xa:return{byteLength:2,components:1};case zd:case Id:return{byteLength:2,components:4};case ki:case Pd:case Bi:return{byteLength:4,components:1};case J_:case $_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?se("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function rM(o){const t=new WeakMap;function i(d,m){const p=d.array,x=d.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),d.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,x);else{g.sort((E,R)=>E.start-R.start);let S=0;for(let E=1;E<g.length;E++){const R=g[S],w=g[E];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++S,g[S]=w)}g.length=S+1;for(let E=0,R=g.length;E<R;E++){const w=g[E];o.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=t.get(d);(!x||x.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lM=`#ifdef USE_ALPHAHASH
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
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dM=`#ifdef USE_AOMAP
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
#endif`,pM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mM=`#ifdef USE_BATCHING
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
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SM=`#ifdef USE_IRIDESCENCE
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
#endif`,yM=`#ifdef USE_BUMPMAP
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,DM=`#define PI 3.141592653589793
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
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LM=`vec3 transformedNormal = objectNormal;
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
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IM="gl_FragColor = linearToOutputTexel( gl_FragColor );",BM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KM=`#ifdef USE_GRADIENTMAP
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
}`,jM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JM=`uniform bool receiveShadow;
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
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,tE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aE=`PhysicalMaterial material;
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
#endif`,sE=`uniform sampler2D dfgLUT;
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
}`,rE=`
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
#endif`,oE=`#if defined( RE_IndirectDiffuse )
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
#endif`,lE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gE=`#if defined( USE_POINTS_UV )
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
#endif`,_E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ME=`#ifdef USE_MORPHTARGETS
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
#endif`,EE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wE=`#ifdef USE_NORMALMAP
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
#endif`,DE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WE=`float getShadowMask() {
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
}`,qE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YE=`#ifdef USE_SKINNING
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
#endif`,KE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jE=`#ifdef USE_SKINNING
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
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$E=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tT=`#ifdef USE_TRANSMISSION
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
#endif`,eT=`#ifdef USE_TRANSMISSION
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
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oT=`uniform sampler2D t2D;
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
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`#include <common>
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
}`,dT=`#if DEPTH_PACKING == 3200
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
}`,pT=`#define DISTANCE
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
}`,mT=`#define DISTANCE
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`uniform float scale;
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
}`,xT=`uniform vec3 diffuse;
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
}`,ST=`#include <common>
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
}`,yT=`uniform vec3 diffuse;
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
}`,MT=`#define LAMBERT
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
}`,ET=`#define LAMBERT
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
}`,TT=`#define MATCAP
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
}`,bT=`#define MATCAP
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
}`,AT=`#define NORMAL
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
}`,RT=`#define NORMAL
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
}`,CT=`#define PHONG
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
}`,wT=`#define PHONG
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
}`,DT=`#define STANDARD
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
}`,UT=`#define STANDARD
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
}`,LT=`#define TOON
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
}`,NT=`#define TOON
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
}`,OT=`uniform float size;
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
}`,PT=`uniform vec3 diffuse;
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
}`,zT=`#include <common>
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
}`,IT=`uniform vec3 color;
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
}`,BT=`uniform float rotation;
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
}`,FT=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:oM,alphahash_pars_fragment:lM,alphamap_fragment:cM,alphamap_pars_fragment:uM,alphatest_fragment:fM,alphatest_pars_fragment:hM,aomap_fragment:dM,aomap_pars_fragment:pM,batching_pars_vertex:mM,batching_vertex:gM,begin_vertex:_M,beginnormal_vertex:vM,bsdfs:xM,iridescence_fragment:SM,bumpmap_pars_fragment:yM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:TM,clipping_planes_vertex:bM,color_fragment:AM,color_pars_fragment:RM,color_pars_vertex:CM,color_vertex:wM,common:DM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:LM,displacementmap_pars_vertex:NM,displacementmap_vertex:OM,emissivemap_fragment:PM,emissivemap_pars_fragment:zM,colorspace_fragment:IM,colorspace_pars_fragment:BM,envmap_fragment:FM,envmap_common_pars_fragment:HM,envmap_pars_fragment:GM,envmap_pars_vertex:VM,envmap_physical_pars_fragment:$M,envmap_vertex:kM,fog_vertex:XM,fog_pars_vertex:WM,fog_fragment:qM,fog_pars_fragment:YM,gradientmap_pars_fragment:KM,lightmap_pars_fragment:jM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:QM,lights_pars_begin:JM,lights_toon_fragment:tE,lights_toon_pars_fragment:eE,lights_phong_fragment:nE,lights_phong_pars_fragment:iE,lights_physical_fragment:aE,lights_physical_pars_fragment:sE,lights_fragment_begin:rE,lights_fragment_maps:oE,lights_fragment_end:lE,logdepthbuf_fragment:cE,logdepthbuf_pars_fragment:uE,logdepthbuf_pars_vertex:fE,logdepthbuf_vertex:hE,map_fragment:dE,map_pars_fragment:pE,map_particle_fragment:mE,map_particle_pars_fragment:gE,metalnessmap_fragment:_E,metalnessmap_pars_fragment:vE,morphinstance_vertex:xE,morphcolor_vertex:SE,morphnormal_vertex:yE,morphtarget_pars_vertex:ME,morphtarget_vertex:EE,normal_fragment_begin:TE,normal_fragment_maps:bE,normal_pars_fragment:AE,normal_pars_vertex:RE,normal_vertex:CE,normalmap_pars_fragment:wE,clearcoat_normal_fragment_begin:DE,clearcoat_normal_fragment_maps:UE,clearcoat_pars_fragment:LE,iridescence_pars_fragment:NE,opaque_fragment:OE,packing:PE,premultiplied_alpha_fragment:zE,project_vertex:IE,dithering_fragment:BE,dithering_pars_fragment:FE,roughnessmap_fragment:HE,roughnessmap_pars_fragment:GE,shadowmap_pars_fragment:VE,shadowmap_pars_vertex:kE,shadowmap_vertex:XE,shadowmask_pars_fragment:WE,skinbase_vertex:qE,skinning_pars_vertex:YE,skinning_vertex:KE,skinnormal_vertex:jE,specularmap_fragment:ZE,specularmap_pars_fragment:QE,tonemapping_fragment:JE,tonemapping_pars_fragment:$E,transmission_fragment:tT,transmission_pars_fragment:eT,uv_pars_fragment:nT,uv_pars_vertex:iT,uv_vertex:aT,worldpos_vertex:sT,background_vert:rT,background_frag:oT,backgroundCube_vert:lT,backgroundCube_frag:cT,cube_vert:uT,cube_frag:fT,depth_vert:hT,depth_frag:dT,distance_vert:pT,distance_frag:mT,equirect_vert:gT,equirect_frag:_T,linedashed_vert:vT,linedashed_frag:xT,meshbasic_vert:ST,meshbasic_frag:yT,meshlambert_vert:MT,meshlambert_frag:ET,meshmatcap_vert:TT,meshmatcap_frag:bT,meshnormal_vert:AT,meshnormal_frag:RT,meshphong_vert:CT,meshphong_frag:wT,meshphysical_vert:DT,meshphysical_frag:UT,meshtoon_vert:LT,meshtoon_frag:NT,points_vert:OT,points_frag:PT,shadow_vert:zT,shadow_frag:IT,sprite_vert:BT,sprite_frag:FT},Nt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ii={basic:{uniforms:Fn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Fn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ge(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Fn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Fn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Fn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ge(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Fn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Fn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Fn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Fn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Fn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Fn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Fn([Nt.common,Nt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Fn([Nt.lights,Nt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ii.physical={uniforms:Fn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const wc={r:0,b:0,g:0},Ts=new Xi,HT=new Je;function GT(o,t,i,s,l,c,h){const d=new ge(0);let m=c===!0?0:1,p,x,g=null,S=0,E=null;function R(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?i:t).get(U)),U}function w(L){let U=!1;const z=R(L);z===null?_(d,m):z&&z.isColor&&(_(z,1),U=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,U){const z=R(U);z&&(z.isCubeTexture||z.mapping===Vc)?(x===void 0&&(x=new Dn(new Ls(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Pr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(I,N,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Ts.copy(U.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),x.material.uniforms.envMap.value=z,x.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(HT.makeRotationFromEuler(Ts)),x.material.toneMapped=be.getTransfer(z.colorSpace)!==He,(g!==z||S!==z.version||E!==o.toneMapping)&&(x.material.needsUpdate=!0,g=z,S=z.version,E=o.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Dn(new Qo(2,2),new Wi({name:"BackgroundMaterial",uniforms:Pr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=be.getTransfer(z.colorSpace)!==He,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||S!==z.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,g=z,S=z.version,E=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,U){L.getRGB(wc,fv(o)),s.buffers.color.setClear(wc.r,wc.g,wc.b,U,h)}function D(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,U=1){d.set(L),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:w,addToRenderList:y,dispose:D}}function VT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(C,H,Y,J,ct){let lt=!1;const B=g(J,Y,H);c!==B&&(c=B,p(c.object)),lt=E(C,J,Y,ct),lt&&R(C,J,Y,ct),ct!==null&&t.update(ct,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,U(C,H,Y,J),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function g(C,H,Y){const J=Y.wireframe===!0;let ct=s[C.id];ct===void 0&&(ct={},s[C.id]=ct);let lt=ct[H.id];lt===void 0&&(lt={},ct[H.id]=lt);let B=lt[J];return B===void 0&&(B=S(m()),lt[J]=B),B}function S(C){const H=[],Y=[],J=[];for(let ct=0;ct<i;ct++)H[ct]=0,Y[ct]=0,J[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:J,object:C,attributes:{},index:null}}function E(C,H,Y,J){const ct=c.attributes,lt=H.attributes;let B=0;const G=Y.getAttributes();for(const st in G)if(G[st].location>=0){const xt=ct[st];let P=lt[st];if(P===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(P=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(P=C.instanceColor)),xt===void 0||xt.attribute!==P||P&&xt.data!==P.data)return!0;B++}return c.attributesNum!==B||c.index!==J}function R(C,H,Y,J){const ct={},lt=H.attributes;let B=0;const G=Y.getAttributes();for(const st in G)if(G[st].location>=0){let xt=lt[st];xt===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor));const P={};P.attribute=xt,xt&&xt.data&&(P.data=xt.data),ct[st]=P,B++}c.attributes=ct,c.attributesNum=B,c.index=J}function w(){const C=c.newAttributes;for(let H=0,Y=C.length;H<Y;H++)C[H]=0}function y(C){_(C,0)}function _(C,H){const Y=c.newAttributes,J=c.enabledAttributes,ct=c.attributeDivisors;Y[C]=1,J[C]===0&&(o.enableVertexAttribArray(C),J[C]=1),ct[C]!==H&&(o.vertexAttribDivisor(C,H),ct[C]=H)}function D(){const C=c.newAttributes,H=c.enabledAttributes;for(let Y=0,J=H.length;Y<J;Y++)H[Y]!==C[Y]&&(o.disableVertexAttribArray(Y),H[Y]=0)}function L(C,H,Y,J,ct,lt,B){B===!0?o.vertexAttribIPointer(C,H,Y,ct,lt):o.vertexAttribPointer(C,H,Y,J,ct,lt)}function U(C,H,Y,J){w();const ct=J.attributes,lt=Y.getAttributes(),B=H.defaultAttributeValues;for(const G in lt){const st=lt[G];if(st.location>=0){let yt=ct[G];if(yt===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),yt!==void 0){const xt=yt.normalized,P=yt.itemSize,at=t.get(yt);if(at===void 0)continue;const gt=at.buffer,bt=at.type,Bt=at.bytesPerElement,it=bt===o.INT||bt===o.UNSIGNED_INT||yt.gpuType===Pd;if(yt.isInterleavedBufferAttribute){const ft=yt.data,wt=ft.stride,kt=yt.offset;if(ft.isInstancedInterleavedBuffer){for(let Ft=0;Ft<st.locationSize;Ft++)_(st.location+Ft,ft.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ft=0;Ft<st.locationSize;Ft++)y(st.location+Ft);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Ft=0;Ft<st.locationSize;Ft++)L(st.location+Ft,P/st.locationSize,bt,xt,wt*Bt,(kt+P/st.locationSize*Ft)*Bt,it)}else{if(yt.isInstancedBufferAttribute){for(let ft=0;ft<st.locationSize;ft++)_(st.location+ft,yt.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ft=0;ft<st.locationSize;ft++)y(st.location+ft);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ft=0;ft<st.locationSize;ft++)L(st.location+ft,P/st.locationSize,bt,xt,P*Bt,P/st.locationSize*ft*Bt,it)}}else if(B!==void 0){const xt=B[G];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(st.location,xt);break;case 3:o.vertexAttrib3fv(st.location,xt);break;case 4:o.vertexAttrib4fv(st.location,xt);break;default:o.vertexAttrib1fv(st.location,xt)}}}}D()}function z(){X();for(const C in s){const H=s[C];for(const Y in H){const J=H[Y];for(const ct in J)x(J[ct].object),delete J[ct];delete H[Y]}delete s[C]}}function I(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const Y in H){const J=H[Y];for(const ct in J)x(J[ct].object),delete J[ct];delete H[Y]}delete s[C.id]}function N(C){for(const H in s){const Y=s[H];if(Y[C.id]===void 0)continue;const J=Y[C.id];for(const ct in J)x(J[ct].object),delete J[ct];delete Y[C.id]}}function X(){T(),h=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:T,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:y,disableUnusedAttributes:D}}function kT(o,t,i){let s;function l(p){s=p}function c(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function h(p,x,g){g!==0&&(o.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function d(p,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let E=0;for(let R=0;R<g;R++)E+=x[R];i.update(E,s,1)}function m(p,x,g,S){if(g===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<p.length;R++)h(p[R],x[R],S[R]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,x,0,S,0,g);let R=0;for(let w=0;w<g;w++)R+=x[w]*S[w];i.update(R,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function XT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==Di&&s.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const X=N===xa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==ri&&s.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Bi&&!X)}function m(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(se("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:U,maxSamples:z,samples:I}}function WT(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new As,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const E=g.length!==0||S||s!==0||l;return l=S,s=g.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=x(g,S,0)},this.setState=function(g,S,E){const R=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,_=o.get(g);if(!l||R===null||R.length===0||c&&!y)c?x(null):p();else{const D=c?0:s,L=D*4;let U=_.clippingState||null;m.value=U,U=x(R,S,L,E);for(let z=0;z!==L;++z)U[z]=i[z];_.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(g,S,E,R){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=m.value,R!==!0||y===null){const _=E+w*4,D=S.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,U=E;L!==w;++L,U+=4)h.copy(g[L]).applyMatrix4(D,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function qT(o){let t=new WeakMap;function i(h,d){return d===qh?h.mapping=Us:d===Yh&&(h.mapping=Lr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===qh||d===Yh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new pv(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const ts=4,g_=[.125,.215,.35,.446,.526,.582],Cs=20,YT=256,Fo=new Zd,__=new ge;let Dh=null,Uh=0,Lh=0,Nh=!1;const KT=new Z;class v_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=KT}=c;Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dh,Uh,Lh),this._renderer.xr.enabled=Nh,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Us||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:xa,format:Di,colorSpace:Or,depthBuffer:!1},l=x_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jT(c)),this._blurMaterial=QT(c,t,i),this._ggxMaterial=ZT(c,t,i)}return l}_compileMaterial(t){const i=new Dn(new jn,t);this._renderer.compile(i,Fo)}_sceneToCubeUV(t,i,s,l,c){const m=new si(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,E=g.toneMapping;g.getClearColor(__),g.toneMapping=Hi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new Ls,new Hc({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let _=!1;const D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,_=!0):(y.color.copy(__),_=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[L],c.y,c.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[L]));const z=this._cubeSize;Cr(l,U*z,L>2?z:0,z,z),g.setRenderTarget(l),_&&g.render(w,m),g.render(t,m)}g.toneMapping=E,g.autoClear=S,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Us||t.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Cr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Fo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),S=0+p*1.25,E=g*S,{_lodMax:R}=this,w=this._sizeLods[s],y=3*w*(s>R-ts?s-R+ts:0),_=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=R-i,Cr(c,y,_,3*w,2*w),l.setRenderTarget(c),l.render(d,Fo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=R-s,Cr(t,y,_,3*w,2*w),l.setRenderTarget(t),l.render(d,Fo)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,E=this._sizeLods[s]-1,R=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Cs-1),w=c/R,y=isFinite(c)?1+Math.floor(x*w):Cs;y>Cs&&se(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Cs}`);const _=[];let D=0;for(let N=0;N<Cs;++N){const X=N/w,T=Math.exp(-X*X/2);_.push(T),N===0?D+=T:N<y&&(D+=2*T)}for(let N=0;N<_.length;N++)_[N]=_[N]/D;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=R,S.mipInt.value=L-s;const U=this._sizeLods[l],z=3*U*(l>L-ts?l-L+ts:0),I=4*(this._cubeSize-U);Cr(i,z,I,3*U,2*U),m.setRenderTarget(i),m.render(g,Fo)}}function jT(o){const t=[],i=[],s=[];let l=o;const c=o-ts+1+g_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-ts?m=g_[h-o+ts-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),x=-p,g=1+p,S=[x,x,g,x,g,g,x,x,g,g,x,g],E=6,R=6,w=3,y=2,_=1,D=new Float32Array(w*R*E),L=new Float32Array(y*R*E),U=new Float32Array(_*R*E);for(let I=0;I<E;I++){const N=I%3*2/3-1,X=I>2?0:-1,T=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];D.set(T,w*R*I),L.set(S,y*R*I);const C=[I,I,I,I,I,I];U.set(C,_*R*I)}const z=new jn;z.setAttribute("position",new Vi(D,w)),z.setAttribute("uv",new Vi(L,y)),z.setAttribute("faceIndex",new Vi(U,_)),s.push(new Dn(z,null)),l>ts&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function x_(o,t,i){const s=new Gi(o,t,i);return s.texture.mapping=Vc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function ZT(o,t,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function QT(o,t,i){const s=new Float32Array(Cs),l=new Z(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function S_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function y_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function JT(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===qh||m===Yh,x=m===Us||m===Lr;if(p||x){let g=t.get(d);const S=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new v_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const E=d.image;return p&&E&&E.height>0||x&&E&&l(E)?(i===null&&(i=new v_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function $T(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&qo("WebGLRenderer: "+s+" extension not supported."),l}}}function tb(o,t,i,s){const l={},c=new WeakMap;function h(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const R in S.attributes)t.remove(S.attributes[R]);S.removeEventListener("dispose",h),delete l[S.id];const E=c.get(S);E&&(t.remove(E),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(g,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const E in S)t.update(S[E],o.ARRAY_BUFFER)}function p(g){const S=[],E=g.index,R=g.attributes.position;let w=0;if(E!==null){const D=E.array;w=E.version;for(let L=0,U=D.length;L<U;L+=3){const z=D[L+0],I=D[L+1],N=D[L+2];S.push(z,I,I,N,N,z)}}else if(R!==void 0){const D=R.array;w=R.version;for(let L=0,U=D.length/3-1;L<U;L+=3){const z=L+0,I=L+1,N=L+2;S.push(z,I,I,N,N,z)}}else return;const y=new(av(S)?uv:cv)(S,1);y.version=w;const _=c.get(g);_&&t.remove(_),c.set(g,y)}function x(g){const S=c.get(g);if(S){const E=g.index;E!==null&&S.version<E.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:x}}function eb(o,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,E){o.drawElements(s,E,c,S*h),i.update(E,s,1)}function p(S,E,R){R!==0&&(o.drawElementsInstanced(s,E,c,S*h,R),i.update(E,s,R))}function x(S,E,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,S,0,R);let y=0;for(let _=0;_<R;_++)y+=E[_];i.update(y,s,1)}function g(S,E,R,w){if(R===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,E[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(s,E,0,c,S,0,w,0,R);let _=0;for(let D=0;D<R;D++)_+=E[D]*w[D];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function nb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ib(o,t,i){const s=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=x!==void 0?x.length:0;let S=s.get(d);if(S===void 0||S.count!==g){let C=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var E=C;S!==void 0&&S.texture.dispose();const R=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;R===!0&&(U=1),w===!0&&(U=2),y===!0&&(U=3);let z=d.attributes.position.count*U,I=1;z>t.maxTextureSize&&(I=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const N=new Float32Array(z*I*4*g),X=new sv(N,z,I,g);X.type=Bi,X.needsUpdate=!0;const T=U*4;for(let H=0;H<g;H++){const Y=_[H],J=D[H],ct=L[H],lt=z*I*4*H;for(let B=0;B<Y.count;B++){const G=B*T;R===!0&&(l.fromBufferAttribute(Y,B),N[lt+G+0]=l.x,N[lt+G+1]=l.y,N[lt+G+2]=l.z,N[lt+G+3]=0),w===!0&&(l.fromBufferAttribute(J,B),N[lt+G+4]=l.x,N[lt+G+5]=l.y,N[lt+G+6]=l.z,N[lt+G+7]=0),y===!0&&(l.fromBufferAttribute(ct,B),N[lt+G+8]=l.x,N[lt+G+9]=l.y,N[lt+G+10]=l.z,N[lt+G+11]=ct.itemSize===4?l.w:1)}}S={count:g,texture:X,size:new Me(z,I)},s.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const w=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function ab(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,g=t.get(m,x);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const sb={[V_]:"LINEAR_TONE_MAPPING",[k_]:"REINHARD_TONE_MAPPING",[X_]:"CINEON_TONE_MAPPING",[W_]:"ACES_FILMIC_TONE_MAPPING",[Y_]:"AGX_TONE_MAPPING",[K_]:"NEUTRAL_TONE_MAPPING",[q_]:"CUSTOM_TONE_MAPPING"};function rb(o,t,i,s,l){const c=new Gi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Gi(t,i,{type:xa,depthBuffer:!1,stencilBuffer:!1}),d=new jn;d.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new mn([0,2,0,0,2,0],2));const m=new Qy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Dn(d,m),x=new Zd(-1,1,1,-1,0,1);let g=null,S=null,E=!1,R,w=null,y=[],_=!1;this.setSize=function(D,L){c.setSize(D,L),h.setSize(D,L);for(let U=0;U<y.length;U++){const z=y[U];z.setSize&&z.setSize(D,L)}},this.setEffects=function(D){y=D,_=y.length>0&&y[0].isRenderPass===!0;const L=c.width,U=c.height;for(let z=0;z<y.length;z++){const I=y[z];I.setSize&&I.setSize(L,U)}},this.begin=function(D,L){if(E||D.toneMapping===Hi&&y.length===0)return!1;if(w=L,L!==null){const U=L.width,z=L.height;(c.width!==U||c.height!==z)&&this.setSize(U,z)}return _===!1&&D.setRenderTarget(c),R=D.toneMapping,D.toneMapping=Hi,!0},this.hasRenderPass=function(){return _},this.end=function(D,L){D.toneMapping=R,E=!0;let U=c,z=h;for(let I=0;I<y.length;I++){const N=y[I];if(N.enabled!==!1&&(N.render(D,z,U,L),N.needsSwap!==!1)){const X=U;U=z,z=X}}if(g!==D.outputColorSpace||S!==D.toneMapping){g=D.outputColorSpace,S=D.toneMapping,m.defines={},be.getTransfer(g)===He&&(m.defines.SRGB_TRANSFER="");const I=sb[S];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(w),D.render(p,x),w=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const xv=new Hn,Ud=new Yo(1,1),Sv=new sv,yv=new Ay,Mv=new dv,M_=[],E_=[],T_=new Float32Array(16),b_=new Float32Array(9),A_=new Float32Array(4);function Br(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=M_[l];if(c===void 0&&(c=new Float32Array(l),M_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function _n(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Yc(o,t){let i=E_[t];i===void 0&&(i=new Int32Array(t),E_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function ob(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),_n(i,t)}}function cb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),_n(i,t)}}function ub(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),_n(i,t)}}function fb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;A_.set(s),o.uniformMatrix2fv(this.addr,!1,A_),_n(i,s)}}function hb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;b_.set(s),o.uniformMatrix3fv(this.addr,!1,b_),_n(i,s)}}function db(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;T_.set(s),o.uniformMatrix4fv(this.addr,!1,T_),_n(i,s)}}function pb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),_n(i,t)}}function gb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),_n(i,t)}}function _b(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),_n(i,t)}}function vb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function xb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),_n(i,t)}}function Sb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),_n(i,t)}}function yb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),_n(i,t)}}function Mb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Ud.compareFunction=i.isReversedDepthBuffer()?Vd:Gd,c=Ud):c=xv,i.setTexture2D(t||c,l)}function Eb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||yv,l)}function Tb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Mv,l)}function bb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Sv,l)}function Ab(o){switch(o){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return fb;case 35675:return hb;case 35676:return db;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return _b;case 5125:return vb;case 36294:return xb;case 36295:return Sb;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return bb}}function Rb(o,t){o.uniform1fv(this.addr,t)}function Cb(o,t){const i=Br(t,this.size,2);o.uniform2fv(this.addr,i)}function wb(o,t){const i=Br(t,this.size,3);o.uniform3fv(this.addr,i)}function Db(o,t){const i=Br(t,this.size,4);o.uniform4fv(this.addr,i)}function Ub(o,t){const i=Br(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Lb(o,t){const i=Br(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Nb(o,t){const i=Br(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Ob(o,t){o.uniform1iv(this.addr,t)}function Pb(o,t){o.uniform2iv(this.addr,t)}function zb(o,t){o.uniform3iv(this.addr,t)}function Ib(o,t){o.uniform4iv(this.addr,t)}function Bb(o,t){o.uniform1uiv(this.addr,t)}function Fb(o,t){o.uniform2uiv(this.addr,t)}function Hb(o,t){o.uniform3uiv(this.addr,t)}function Gb(o,t){o.uniform4uiv(this.addr,t)}function Vb(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Ud:h=xv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function kb(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||yv,c[h])}function Xb(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Mv,c[h])}function Wb(o,t,i){const s=this.cache,l=t.length,c=Yc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Sv,c[h])}function qb(o){switch(o){case 5126:return Rb;case 35664:return Cb;case 35665:return wb;case 35666:return Db;case 35674:return Ub;case 35675:return Lb;case 35676:return Nb;case 5124:case 35670:return Ob;case 35667:case 35671:return Pb;case 35668:case 35672:return zb;case 35669:case 35673:return Ib;case 5125:return Bb;case 36294:return Fb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return Wb}}class Yb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Ab(i.type)}}class Kb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qb(i.type)}}class jb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Oh=/(\w+)(\])?(\[|\.)?/g;function R_(o,t){o.seq.push(t),o.map[t.id]=t}function Zb(o,t,i){const s=o.name,l=s.length;for(Oh.lastIndex=0;;){const c=Oh.exec(s),h=Oh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){R_(i,p===void 0?new Yb(d,o,t):new Kb(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new jb(d),R_(i,g)),i=g}}}class zc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);Zb(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function C_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const Qb=37297;let Jb=0;function $b(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const w_=new ue;function t1(o){be._getMatrix(w_,be.workingColorSpace,o);const t=`mat3( ${w_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Ic:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return se("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function D_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+$b(o.getShaderSource(t),d)}else return c}function e1(o,t){const i=t1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const n1={[V_]:"Linear",[k_]:"Reinhard",[X_]:"Cineon",[W_]:"ACESFilmic",[Y_]:"AgX",[K_]:"Neutral",[q_]:"Custom"};function i1(o,t){const i=n1[t];return i===void 0?(se("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new Z;function a1(){be.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function r1(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function o1(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function ko(o){return o!==""}function U_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function L_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(o){return o.replace(l1,u1)}const c1=new Map;function u1(o,t){let i=fe[t];if(i===void 0){const s=c1.get(t);if(s!==void 0)i=fe[s],se('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ld(i)}const f1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(o){return o.replace(f1,h1)}function h1(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function O_(o){let t=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const d1={[Uc]:"SHADOWMAP_TYPE_PCF",[Vo]:"SHADOWMAP_TYPE_VSM"};function p1(o){return d1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const m1={[Us]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function g1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":m1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const _1={[Lr]:"ENVMAP_MODE_REFRACTION"};function v1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":_1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const x1={[G_]:"ENVMAP_BLENDING_MULTIPLY",[oy]:"ENVMAP_BLENDING_MIX",[ly]:"ENVMAP_BLENDING_ADD"};function S1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":x1[o.combine]||"ENVMAP_BLENDING_NONE"}function y1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function M1(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=p1(i),p=g1(i),x=v1(i),g=S1(i),S=y1(i),E=s1(i),R=r1(c),w=l.createProgram();let y,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(ko).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(y=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Hi?i1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,e1("linearToOutputTexel",i.outputColorSpace),a1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),h=Ld(h),h=U_(h,i),h=L_(h,i),d=Ld(d),d=U_(d,i),d=L_(d,i),h=N_(h),d=N_(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===Wg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Wg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=D+y+h,U=D+_+d,z=C_(l,l.VERTEX_SHADER,L),I=C_(l,l.FRAGMENT_SHADER,U);l.attachShader(w,z),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function N(H){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(w)||"",J=l.getShaderInfoLog(z)||"",ct=l.getShaderInfoLog(I)||"",lt=Y.trim(),B=J.trim(),G=ct.trim();let st=!0,yt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(st=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,z,I);else{const xt=D_(l,z,"vertex"),P=D_(l,I,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+lt+`
`+xt+`
`+P)}else lt!==""?se("WebGLProgram: Program Info Log:",lt):(B===""||G==="")&&(yt=!1);yt&&(H.diagnostics={runnable:st,programLog:lt,vertexShader:{log:B,prefix:y},fragmentShader:{log:G,prefix:_}})}l.deleteShader(z),l.deleteShader(I),X=new zc(l,w),T=o1(l,w)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(w,Qb)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Jb++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=I,this}let E1=0;class T1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new b1(t),i.set(t,s)),s}}class b1{constructor(t){this.id=E1++,this.code=t,this.usedTimes=0}}function A1(o,t,i,s,l,c,h){const d=new ov,m=new T1,p=new Set,x=[],g=new Map,S=l.logarithmicDepthBuffer;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return p.add(T),T===0?"uv":`uv${T}`}function y(T,C,H,Y,J){const ct=Y.fog,lt=J.geometry,B=T.isMeshStandardMaterial?Y.environment:null,G=(T.isMeshStandardMaterial?i:t).get(T.envMap||B),st=G&&G.mapping===Vc?G.image.height:null,yt=R[T.type];T.precision!==null&&(E=l.getMaxPrecision(T.precision),E!==T.precision&&se("WebGLProgram.getParameters:",T.precision,"not supported, using",E,"instead."));const xt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,P=xt!==void 0?xt.length:0;let at=0;lt.morphAttributes.position!==void 0&&(at=1),lt.morphAttributes.normal!==void 0&&(at=2),lt.morphAttributes.color!==void 0&&(at=3);let gt,bt,Bt,it;if(yt){const Te=Ii[yt];gt=Te.vertexShader,bt=Te.fragmentShader}else gt=T.vertexShader,bt=T.fragmentShader,m.update(T),Bt=m.getVertexShaderID(T),it=m.getFragmentShaderID(T);const ft=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),kt=J.isInstancedMesh===!0,Ft=J.isBatchedMesh===!0,he=!!T.map,$e=!!T.matcap,_e=!!G,de=!!T.aoMap,we=!!T.lightMap,re=!!T.bumpMap,tn=!!T.normalMap,V=!!T.displacementMap,je=!!T.emissiveMap,Ee=!!T.metalnessMap,Oe=!!T.roughnessMap,Yt=T.anisotropy>0,O=T.clearcoat>0,M=T.dispersion>0,q=T.iridescence>0,dt=T.sheen>0,vt=T.transmission>0,ut=Yt&&!!T.anisotropyMap,jt=O&&!!T.clearcoatMap,Rt=O&&!!T.clearcoatNormalMap,Xt=O&&!!T.clearcoatRoughnessMap,ee=q&&!!T.iridescenceMap,Mt=q&&!!T.iridescenceThicknessMap,Et=dt&&!!T.sheenColorMap,zt=dt&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Ct=!!T.specularColorMap,le=!!T.specularIntensityMap,W=vt&&!!T.transmissionMap,Ut=vt&&!!T.thicknessMap,Tt=!!T.gradientMap,Pt=!!T.alphaMap,St=T.alphaTest>0,_t=!!T.alphaHash,At=!!T.extensions;let ne=Hi;T.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ne=o.toneMapping);const ze={shaderID:yt,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:bt,defines:T.defines,customVertexShaderID:Bt,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:E,batching:Ft,batchingColor:Ft&&J._colorsTexture!==null,instancing:kt,instancingColor:kt&&J.instanceColor!==null,instancingMorph:kt&&J.morphTexture!==null,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Or,alphaToCoverage:!!T.alphaToCoverage,map:he,matcap:$e,envMap:_e,envMapMode:_e&&G.mapping,envMapCubeUVHeight:st,aoMap:de,lightMap:we,bumpMap:re,normalMap:tn,displacementMap:V,emissiveMap:je,normalMapObjectSpace:tn&&T.normalMapType===fy,normalMapTangentSpace:tn&&T.normalMapType===iv,metalnessMap:Ee,roughnessMap:Oe,anisotropy:Yt,anisotropyMap:ut,clearcoat:O,clearcoatMap:jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:M,iridescence:q,iridescenceMap:ee,iridescenceThicknessMap:Mt,sheen:dt,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:le,transmission:vt,transmissionMap:W,thicknessMap:Ut,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===wr&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:_t,combine:T.combine,mapUv:he&&w(T.map.channel),aoMapUv:de&&w(T.aoMap.channel),lightMapUv:we&&w(T.lightMap.channel),bumpMapUv:re&&w(T.bumpMap.channel),normalMapUv:tn&&w(T.normalMap.channel),displacementMapUv:V&&w(T.displacementMap.channel),emissiveMapUv:je&&w(T.emissiveMap.channel),metalnessMapUv:Ee&&w(T.metalnessMap.channel),roughnessMapUv:Oe&&w(T.roughnessMap.channel),anisotropyMapUv:ut&&w(T.anisotropyMap.channel),clearcoatMapUv:jt&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:zt&&w(T.sheenRoughnessMap.channel),specularMapUv:Ot&&w(T.specularMap.channel),specularColorMapUv:Ct&&w(T.specularColorMap.channel),specularIntensityMapUv:le&&w(T.specularIntensityMap.channel),transmissionMapUv:W&&w(T.transmissionMap.channel),thicknessMapUv:Ut&&w(T.thicknessMap.channel),alphaMapUv:Pt&&w(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(tn||Yt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!lt.attributes.uv&&(he||Pt),fog:!!ct,useFog:T.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:wt,skinning:J.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:he&&T.map.isVideoTexture===!0&&be.getTransfer(T.map.colorSpace)===He,decodeVideoTextureEmissive:je&&T.emissiveMap.isVideoTexture===!0&&be.getTransfer(T.emissiveMap.colorSpace)===He,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ma,flipSided:T.side===Kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:At&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&T.extensions.multiDraw===!0||Ft)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function _(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)C.push(H),C.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(D(C,T),L(C,T),C.push(o.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function D(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function L(T,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),T.push(d.mask)}function U(T){const C=R[T.type];let H;if(C){const Y=Ii[C];H=Fy.clone(Y.uniforms)}else H=T.uniforms;return H}function z(T,C){let H=g.get(C);return H!==void 0?++H.usedTimes:(H=new M1(o,C,T,c),x.push(H),g.set(C,H)),H}function I(T){if(--T.usedTimes===0){const C=x.indexOf(T);x[C]=x[x.length-1],x.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){m.remove(T)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:z,releaseProgram:I,releaseShaderCache:N,programs:x,dispose:X}}function R1(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function C1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function P_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function z_(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,S,E,R,w,y){let _=o[t];return _===void 0?(_={id:g.id,object:g,geometry:S,material:E,groupOrder:R,renderOrder:g.renderOrder,z:w,group:y},o[t]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=E,_.groupOrder=R,_.renderOrder=g.renderOrder,_.z=w,_.group=y),t++,_}function d(g,S,E,R,w,y){const _=h(g,S,E,R,w,y);E.transmission>0?s.push(_):E.transparent===!0?l.push(_):i.push(_)}function m(g,S,E,R,w,y){const _=h(g,S,E,R,w,y);E.transmission>0?s.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||C1),s.length>1&&s.sort(S||P_),l.length>1&&l.sort(S||P_)}function x(){for(let g=t,S=o.length;g<S;g++){const E=o[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:x,sort:p}}function w1(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new z_,o.set(s,[h])):l>=c.length?(h=new z_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function D1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new ge};break;case"SpotLight":i={position:new Z,direction:new Z,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[t.id]=i,i}}}function U1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let L1=0;function N1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function O1(o){const t=new D1,i=U1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Z);const l=new Z,c=new Je,h=new Je;function d(p){let x=0,g=0,S=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let E=0,R=0,w=0,y=0,_=0,D=0,L=0,U=0,z=0,I=0,N=0;p.sort(N1);for(let T=0,C=p.length;T<C;T++){const H=p[T],Y=H.color,J=H.intensity,ct=H.distance;let lt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Nr?lt=H.shadow.map.texture:lt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=Y.r*J,g+=Y.g*J,S+=Y.b*J;else if(H.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(H.sh.coefficients[B],J);N++}else if(H.isDirectionalLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,st=i.get(H);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,s.directionalShadow[E]=st,s.directionalShadowMap[E]=lt,s.directionalShadowMatrix[E]=H.shadow.matrix,D++}s.directional[E]=B,E++}else if(H.isSpotLight){const B=t.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(Y).multiplyScalar(J),B.distance=ct,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,s.spot[w]=B;const G=H.shadow;if(H.map&&(s.spotLightMap[z]=H.map,z++,G.updateMatrices(H),H.castShadow&&I++),s.spotLightMatrix[w]=G.matrix,H.castShadow){const st=i.get(H);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,s.spotShadow[w]=st,s.spotShadowMap[w]=lt,U++}w++}else if(H.isRectAreaLight){const B=t.get(H);B.color.copy(Y).multiplyScalar(J),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=B,y++}else if(H.isPointLight){const B=t.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const G=H.shadow,st=i.get(H);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,st.shadowCameraNear=G.camera.near,st.shadowCameraFar=G.camera.far,s.pointShadow[R]=st,s.pointShadowMap[R]=lt,s.pointShadowMatrix[R]=H.shadow.matrix,L++}s.point[R]=B,R++}else if(H.isHemisphereLight){const B=t.get(H);B.skyColor.copy(H.color).multiplyScalar(J),B.groundColor.copy(H.groundColor).multiplyScalar(J),s.hemi[_]=B,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=S;const X=s.hash;(X.directionalLength!==E||X.pointLength!==R||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==_||X.numDirectionalShadows!==D||X.numPointShadows!==L||X.numSpotShadows!==U||X.numSpotMaps!==z||X.numLightProbes!==N)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=y,s.point.length=R,s.hemi.length=_,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=U+z-I,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=N,X.directionalLength=E,X.pointLength=R,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=_,X.numDirectionalShadows=D,X.numPointShadows=L,X.numSpotShadows=U,X.numSpotMaps=z,X.numLightProbes=N,s.version=L1++)}function m(p,x){let g=0,S=0,E=0,R=0,w=0;const y=x.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const L=p[_];if(L.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),g++}else if(L.isSpotLight){const U=s.spot[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),E++}else if(L.isRectAreaLight){const U=s.rectArea[R];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),h.identity(),c.copy(L.matrixWorld),c.premultiply(y),h.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),R++}else if(L.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:s}}function I_(o){const t=new O1(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function h(x){s.push(x)}function d(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function P1(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new I_(o),t.set(l,[d])):c>=h.length?(d=new I_(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I1=`uniform sampler2D shadow_pass;
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
}`,B1=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],F1=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],B_=new Je,Ho=new Z,Ph=new Z;function H1(o,t,i){let s=new Xd;const l=new Me,c=new Me,h=new an,d=new Jy,m=new $y,p={},x=i.maxTextureSize,g={[es]:Kn,[Kn]:es,[ma]:ma},S=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:z1,fragmentShader:I1}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const R=new jn;R.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Dn(R,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let _=this.type;this.render=function(I,N,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;I.type===VS&&(se("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Uc);const T=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(_a),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const J=_!==this.type;J&&N.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(lt=>lt.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,lt=I.length;ct<lt;ct++){const B=I[ct],G=B.shadow;if(G===void 0){se("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const st=G.getFrameExtents();if(l.multiply(st),c.copy(G.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/st.x),l.x=c.x*st.x,G.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/st.y),l.y=c.y*st.y,G.mapSize.y=c.y)),G.map===null||J===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Vo){if(B.isPointLight){se("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Gi(l.x,l.y,{format:Nr,type:xa,minFilter:In,magFilter:In,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new Yo(l.x,l.y,Bi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Sa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un}else{B.isPointLight?(G.map=new pv(l.x),G.map.depthTexture=new Zy(l.x,ki)):(G.map=new Gi(l.x,l.y),G.map.depthTexture=new Yo(l.x,l.y,ki)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Sa;const xt=o.state.buffers.depth.getReversed();this.type===Uc?(G.map.depthTexture.compareFunction=xt?Vd:Gd,G.map.depthTexture.minFilter=In,G.map.depthTexture.magFilter=In):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Un,G.map.depthTexture.magFilter=Un)}G.camera.updateProjectionMatrix()}const yt=G.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(G.map),o.clear());const P=G.getViewport(xt);h.set(c.x*P.x,c.y*P.y,c.x*P.z,c.y*P.w),Y.viewport(h)}if(B.isPointLight){const P=G.camera,at=G.matrix,gt=B.distance||P.far;gt!==P.far&&(P.far=gt,P.updateProjectionMatrix()),Ho.setFromMatrixPosition(B.matrixWorld),P.position.copy(Ho),Ph.copy(P.position),Ph.add(B1[xt]),P.up.copy(F1[xt]),P.lookAt(Ph),P.updateMatrixWorld(),at.makeTranslation(-Ho.x,-Ho.y,-Ho.z),B_.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),G._frustum.setFromProjectionMatrix(B_,P.coordinateSystem,P.reversedDepth)}else G.updateMatrices(B);s=G.getFrustum(),U(N,X,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===Vo&&D(G,X),G.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(T,C,H)};function D(I,N){const X=t.update(w);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Gi(l.x,l.y,{format:Nr,type:xa})),S.uniforms.shadow_pass.value=I.map.depthTexture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(N,null,X,S,w,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(N,null,X,E,w,null)}function L(I,N,X,T){let C=null;const H=X.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)C=H;else if(C=X.isPointLight===!0?m:d,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Y=C.uuid,J=N.uuid;let ct=p[Y];ct===void 0&&(ct={},p[Y]=ct);let lt=ct[J];lt===void 0&&(lt=C.clone(),ct[J]=lt,N.addEventListener("dispose",z)),C=lt}if(C.visible=N.visible,C.wireframe=N.wireframe,T===Vo?C.side=N.shadowSide!==null?N.shadowSide:N.side:C.side=N.shadowSide!==null?N.shadowSide:g[N.side],C.alphaMap=N.alphaMap,C.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,C.map=N.map,C.clipShadows=N.clipShadows,C.clippingPlanes=N.clippingPlanes,C.clipIntersection=N.clipIntersection,C.displacementMap=N.displacementMap,C.displacementScale=N.displacementScale,C.displacementBias=N.displacementBias,C.wireframeLinewidth=N.wireframeLinewidth,C.linewidth=N.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Y=o.properties.get(C);Y.light=X}return C}function U(I,N,X,T,C){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===Vo)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,I.matrixWorld);const J=t.update(I),ct=I.material;if(Array.isArray(ct)){const lt=J.groups;for(let B=0,G=lt.length;B<G;B++){const st=lt[B],yt=ct[st.materialIndex];if(yt&&yt.visible){const xt=L(I,yt,T,C);I.onBeforeShadow(o,I,N,X,J,xt,st),o.renderBufferDirect(X,null,J,xt,I,st),I.onAfterShadow(o,I,N,X,J,xt,st)}}}else if(ct.visible){const lt=L(I,ct,T,C);I.onBeforeShadow(o,I,N,X,J,lt,null),o.renderBufferDirect(X,null,J,lt,I,null),I.onAfterShadow(o,I,N,X,J,lt,null)}}const Y=I.children;for(let J=0,ct=Y.length;J<ct;J++)U(Y[J],N,X,T,C)}function z(I){I.target.removeEventListener("dispose",z);for(const X in p){const T=p[X],C=I.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}const G1={[Fh]:Hh,[Gh]:Xh,[Vh]:Wh,[Ur]:kh,[Hh]:Fh,[Xh]:Gh,[Wh]:Vh,[kh]:Ur};function V1(o,t){function i(){let W=!1;const Ut=new an;let Tt=null;const Pt=new an(0,0,0,0);return{setMask:function(St){Tt!==St&&!W&&(o.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){W=St},setClear:function(St,_t,At,ne,ze){ze===!0&&(St*=ne,_t*=ne,At*=ne),Ut.set(St,_t,At,ne),Pt.equals(Ut)===!1&&(o.clearColor(St,_t,At,ne),Pt.copy(Ut))},reset:function(){W=!1,Tt=null,Pt.set(-1,0,0,0)}}}function s(){let W=!1,Ut=!1,Tt=null,Pt=null,St=null;return{setReversed:function(_t){if(Ut!==_t){const At=t.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ne=St;St=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(_t){_t?ft(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!W&&(o.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Ut&&(_t=G1[_t]),Pt!==_t){switch(_t){case Fh:o.depthFunc(o.NEVER);break;case Hh:o.depthFunc(o.ALWAYS);break;case Gh:o.depthFunc(o.LESS);break;case Ur:o.depthFunc(o.LEQUAL);break;case Vh:o.depthFunc(o.EQUAL);break;case kh:o.depthFunc(o.GEQUAL);break;case Xh:o.depthFunc(o.GREATER);break;case Wh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=_t}},setLocked:function(_t){W=_t},setClear:function(_t){St!==_t&&(Ut&&(_t=1-_t),o.clearDepth(_t),St=_t)},reset:function(){W=!1,Tt=null,Pt=null,St=null,Ut=!1}}}function l(){let W=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ne=null,ze=null;return{setTest:function(Te){W||(Te?ft(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Te){Ut!==Te&&!W&&(o.stencilMask(Te),Ut=Te)},setFunc:function(Te,Nn,Si){(Tt!==Te||Pt!==Nn||St!==Si)&&(o.stencilFunc(Te,Nn,Si),Tt=Te,Pt=Nn,St=Si)},setOp:function(Te,Nn,Si){(_t!==Te||At!==Nn||ne!==Si)&&(o.stencilOp(Te,Nn,Si),_t=Te,At=Nn,ne=Si)},setLocked:function(Te){W=Te},setClear:function(Te){ze!==Te&&(o.clearStencil(Te),ze=Te)},reset:function(){W=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ne=null,ze=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},g={},S=new WeakMap,E=[],R=null,w=!1,y=null,_=null,D=null,L=null,U=null,z=null,I=null,N=new ge(0,0,0),X=0,T=!1,C=null,H=null,Y=null,J=null,ct=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const st=o.getParameter(o.VERSION);st.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(st)[1]),B=G>=1):st.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),B=G>=2);let yt=null,xt={};const P=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),gt=new an().fromArray(P),bt=new an().fromArray(at);function Bt(W,Ut,Tt,Pt){const St=new Uint8Array(4),_t=o.createTexture();o.bindTexture(W,_t),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let At=0;At<Tt;At++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,St):o.texImage2D(Ut+At,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,St);return _t}const it={};it[o.TEXTURE_2D]=Bt(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(Ur),re(!1),tn(Fg),ft(o.CULL_FACE),de(_a);function ft(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function wt(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function kt(W,Ut){return g[W]!==Ut?(o.bindFramebuffer(W,Ut),g[W]=Ut,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ut),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Ft(W,Ut){let Tt=E,Pt=!1;if(W){Tt=S.get(Ut),Tt===void 0&&(Tt=[],S.set(Ut,Tt));const St=W.textures;if(Tt.length!==St.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)Tt[_t]=o.COLOR_ATTACHMENT0+_t;Tt.length=St.length,Pt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Tt)}function he(W){return R!==W?(o.useProgram(W),R=W,!0):!1}const $e={[Rs]:o.FUNC_ADD,[XS]:o.FUNC_SUBTRACT,[WS]:o.FUNC_REVERSE_SUBTRACT};$e[qS]=o.MIN,$e[YS]=o.MAX;const _e={[KS]:o.ZERO,[jS]:o.ONE,[ZS]:o.SRC_COLOR,[Ih]:o.SRC_ALPHA,[ny]:o.SRC_ALPHA_SATURATE,[ty]:o.DST_COLOR,[JS]:o.DST_ALPHA,[QS]:o.ONE_MINUS_SRC_COLOR,[Bh]:o.ONE_MINUS_SRC_ALPHA,[ey]:o.ONE_MINUS_DST_COLOR,[$S]:o.ONE_MINUS_DST_ALPHA,[iy]:o.CONSTANT_COLOR,[ay]:o.ONE_MINUS_CONSTANT_COLOR,[sy]:o.CONSTANT_ALPHA,[ry]:o.ONE_MINUS_CONSTANT_ALPHA};function de(W,Ut,Tt,Pt,St,_t,At,ne,ze,Te){if(W===_a){w===!0&&(wt(o.BLEND),w=!1);return}if(w===!1&&(ft(o.BLEND),w=!0),W!==kS){if(W!==y||Te!==T){if((_!==Rs||U!==Rs)&&(o.blendEquation(o.FUNC_ADD),_=Rs,U=Rs),Te)switch(W){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hg:o.blendFunc(o.ONE,o.ONE);break;case Gg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Vg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Hg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Gg:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vg:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}D=null,L=null,z=null,I=null,N.set(0,0,0),X=0,y=W,T=Te}return}St=St||Ut,_t=_t||Tt,At=At||Pt,(Ut!==_||St!==U)&&(o.blendEquationSeparate($e[Ut],$e[St]),_=Ut,U=St),(Tt!==D||Pt!==L||_t!==z||At!==I)&&(o.blendFuncSeparate(_e[Tt],_e[Pt],_e[_t],_e[At]),D=Tt,L=Pt,z=_t,I=At),(ne.equals(N)===!1||ze!==X)&&(o.blendColor(ne.r,ne.g,ne.b,ze),N.copy(ne),X=ze),y=W,T=!1}function we(W,Ut){W.side===ma?wt(o.CULL_FACE):ft(o.CULL_FACE);let Tt=W.side===Kn;Ut&&(Tt=!Tt),re(Tt),W.blending===wr&&W.transparent===!1?de(_a):de(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Pt=W.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),je(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){C!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),C=W)}function tn(W){W!==HS?(ft(o.CULL_FACE),W!==H&&(W===Fg?o.cullFace(o.BACK):W===GS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),H=W}function V(W){W!==Y&&(B&&o.lineWidth(W),Y=W)}function je(W,Ut,Tt){W?(ft(o.POLYGON_OFFSET_FILL),(J!==Ut||ct!==Tt)&&(o.polygonOffset(Ut,Tt),J=Ut,ct=Tt)):wt(o.POLYGON_OFFSET_FILL)}function Ee(W){W?ft(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function Oe(W){W===void 0&&(W=o.TEXTURE0+lt-1),yt!==W&&(o.activeTexture(W),yt=W)}function Yt(W,Ut,Tt){Tt===void 0&&(yt===null?Tt=o.TEXTURE0+lt-1:Tt=yt);let Pt=xt[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[Tt]=Pt),(Pt.type!==W||Pt.texture!==Ut)&&(yt!==Tt&&(o.activeTexture(Tt),yt=Tt),o.bindTexture(W,Ut||it[W]),Pt.type=W,Pt.texture=Ut)}function O(){const W=xt[yt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function dt(){try{o.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function vt(){try{o.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Rt(){try{o.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Xt(){try{o.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ee(){try{o.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Mt(){try{o.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Et(W){gt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function zt(W){bt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),bt.copy(W))}function Ot(W,Ut){let Tt=p.get(Ut);Tt===void 0&&(Tt=new WeakMap,p.set(Ut,Tt));let Pt=Tt.get(W);Pt===void 0&&(Pt=o.getUniformBlockIndex(Ut,W.name),Tt.set(W,Pt))}function Ct(W,Ut){const Pt=p.get(Ut).get(W);m.get(Ut)!==Pt&&(o.uniformBlockBinding(Ut,Pt,W.__bindingPointIndex),m.set(Ut,Pt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},yt=null,xt={},g={},S=new WeakMap,E=[],R=null,w=!1,y=null,_=null,D=null,L=null,U=null,z=null,I=null,N=new ge(0,0,0),X=0,T=!1,C=null,H=null,Y=null,J=null,ct=null,gt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ft,disable:wt,bindFramebuffer:kt,drawBuffers:Ft,useProgram:he,setBlending:de,setMaterial:we,setFlipSided:re,setCullFace:tn,setLineWidth:V,setPolygonOffset:je,setScissorTest:Ee,activeTexture:Oe,bindTexture:Yt,unbindTexture:O,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:ee,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:ut,compressedTexSubImage3D:jt,scissor:Et,viewport:zt,reset:le}}function k1(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Me,x=new WeakMap;let g;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(O,M){return E?new OffscreenCanvas(O,M):Fc("canvas")}function w(O,M,q){let dt=1;const vt=Yt(O);if((vt.width>q||vt.height>q)&&(dt=q/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ut=Math.floor(dt*vt.width),jt=Math.floor(dt*vt.height);g===void 0&&(g=R(ut,jt));const Rt=M?R(ut,jt):g;return Rt.width=ut,Rt.height=jt,Rt.getContext("2d").drawImage(O,0,0,ut,jt),se("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ut+"x"+jt+")."),Rt}else return"data"in O&&se("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),O;return O}function y(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,M,q,dt,vt=!1){if(O!==null){if(o[O]!==void 0)return o[O];se("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ut=M;if(M===o.RED&&(q===o.FLOAT&&(ut=o.R32F),q===o.HALF_FLOAT&&(ut=o.R16F),q===o.UNSIGNED_BYTE&&(ut=o.R8)),M===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.R8UI),q===o.UNSIGNED_SHORT&&(ut=o.R16UI),q===o.UNSIGNED_INT&&(ut=o.R32UI),q===o.BYTE&&(ut=o.R8I),q===o.SHORT&&(ut=o.R16I),q===o.INT&&(ut=o.R32I)),M===o.RG&&(q===o.FLOAT&&(ut=o.RG32F),q===o.HALF_FLOAT&&(ut=o.RG16F),q===o.UNSIGNED_BYTE&&(ut=o.RG8)),M===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RG8UI),q===o.UNSIGNED_SHORT&&(ut=o.RG16UI),q===o.UNSIGNED_INT&&(ut=o.RG32UI),q===o.BYTE&&(ut=o.RG8I),q===o.SHORT&&(ut=o.RG16I),q===o.INT&&(ut=o.RG32I)),M===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),q===o.UNSIGNED_INT&&(ut=o.RGB32UI),q===o.BYTE&&(ut=o.RGB8I),q===o.SHORT&&(ut=o.RGB16I),q===o.INT&&(ut=o.RGB32I)),M===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),q===o.UNSIGNED_INT&&(ut=o.RGBA32UI),q===o.BYTE&&(ut=o.RGBA8I),q===o.SHORT&&(ut=o.RGBA16I),q===o.INT&&(ut=o.RGBA32I)),M===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),M===o.RGBA){const jt=vt?Ic:be.getTransfer(dt);q===o.FLOAT&&(ut=o.RGBA32F),q===o.HALF_FLOAT&&(ut=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ut=jt===He?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function U(O,M){let q;return O?M===null||M===ki||M===Wo?q=o.DEPTH24_STENCIL8:M===Bi?q=o.DEPTH32F_STENCIL8:M===Xo&&(q=o.DEPTH24_STENCIL8,se("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ki||M===Wo?q=o.DEPTH_COMPONENT24:M===Bi?q=o.DEPTH_COMPONENT32F:M===Xo&&(q=o.DEPTH_COMPONENT16),q}function z(O,M){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Un&&O.minFilter!==In?Math.log2(Math.max(M.width,M.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?M.mipmaps.length:1}function I(O){const M=O.target;M.removeEventListener("dispose",I),X(M),M.isVideoTexture&&x.delete(M)}function N(O){const M=O.target;M.removeEventListener("dispose",N),C(M)}function X(O){const M=s.get(O);if(M.__webglInit===void 0)return;const q=O.source,dt=S.get(q);if(dt){const vt=dt[M.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&T(O),Object.keys(dt).length===0&&S.delete(q)}s.remove(O)}function T(O){const M=s.get(O);o.deleteTexture(M.__webglTexture);const q=O.source,dt=S.get(q);delete dt[M.__cacheKey],h.memory.textures--}function C(O){const M=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(M.__webglFramebuffer[dt]))for(let vt=0;vt<M.__webglFramebuffer[dt].length;vt++)o.deleteFramebuffer(M.__webglFramebuffer[dt][vt]);else o.deleteFramebuffer(M.__webglFramebuffer[dt]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[dt])}else{if(Array.isArray(M.__webglFramebuffer))for(let dt=0;dt<M.__webglFramebuffer.length;dt++)o.deleteFramebuffer(M.__webglFramebuffer[dt]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let dt=0;dt<M.__webglColorRenderbuffer.length;dt++)M.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[dt]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=O.textures;for(let dt=0,vt=q.length;dt<vt;dt++){const ut=s.get(q[dt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(q[dt])}s.remove(O)}let H=0;function Y(){H=0}function J(){const O=H;return O>=l.maxTextures&&se("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function ct(O){const M=[];return M.push(O.wrapS),M.push(O.wrapT),M.push(O.wrapR||0),M.push(O.magFilter),M.push(O.minFilter),M.push(O.anisotropy),M.push(O.internalFormat),M.push(O.format),M.push(O.type),M.push(O.generateMipmaps),M.push(O.premultiplyAlpha),M.push(O.flipY),M.push(O.unpackAlignment),M.push(O.colorSpace),M.join()}function lt(O,M){const q=s.get(O);if(O.isVideoTexture&&Ee(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&q.__version!==O.version){const dt=O.image;if(dt===null)se("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)se("WebGLRenderer: Texture marked for update but image is incomplete");else{it(q,O,M);return}}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+M)}function B(O,M){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){it(q,O,M);return}else O.isExternalTexture&&(q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+M)}function G(O,M){const q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&q.__version!==O.version){it(q,O,M);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+M)}function st(O,M){const q=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&q.__version!==O.version){ft(q,O,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+M)}const yt={[Kh]:o.REPEAT,[ga]:o.CLAMP_TO_EDGE,[jh]:o.MIRRORED_REPEAT},xt={[Un]:o.NEAREST,[cy]:o.NEAREST_MIPMAP_NEAREST,[cc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[ah]:o.LINEAR_MIPMAP_NEAREST,[ws]:o.LINEAR_MIPMAP_LINEAR},P={[hy]:o.NEVER,[_y]:o.ALWAYS,[dy]:o.LESS,[Gd]:o.LEQUAL,[py]:o.EQUAL,[Vd]:o.GEQUAL,[my]:o.GREATER,[gy]:o.NOTEQUAL};function at(O,M){if(M.type===Bi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===In||M.magFilter===ah||M.magFilter===cc||M.magFilter===ws||M.minFilter===In||M.minFilter===ah||M.minFilter===cc||M.minFilter===ws)&&se("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,yt[M.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,yt[M.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,yt[M.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,xt[M.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,xt[M.minFilter]),M.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,P[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Un||M.minFilter!==cc&&M.minFilter!==ws||M.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function gt(O,M){let q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,M.addEventListener("dispose",I));const dt=M.source;let vt=S.get(dt);vt===void 0&&(vt={},S.set(dt,vt));const ut=ct(M);if(ut!==O.__cacheKey){vt[ut]===void 0&&(vt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,q=!0),vt[ut].usedTimes++;const jt=vt[O.__cacheKey];jt!==void 0&&(vt[O.__cacheKey].usedTimes--,jt.usedTimes===0&&T(M)),O.__cacheKey=ut,O.__webglTexture=vt[ut].texture}return q}function bt(O,M,q){return Math.floor(Math.floor(O/q)/M)}function Bt(O,M,q,dt){const ut=O.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,q,dt,M.data);else{ut.sort((Mt,Et)=>Mt.start-Et.start);let jt=0;for(let Mt=1;Mt<ut.length;Mt++){const Et=ut[jt],zt=ut[Mt],Ot=Et.start+Et.count,Ct=bt(zt.start,M.width,4),le=bt(Et.start,M.width,4);zt.start<=Ot+1&&Ct===le&&bt(zt.start+zt.count-1,M.width,4)===Ct?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++jt,ut[jt]=zt)}ut.length=jt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Mt=0,Et=ut.length;Mt<Et;Mt++){const zt=ut[Mt],Ot=Math.floor(zt.start/4),Ct=Math.ceil(zt.count/4),le=Ot%M.width,W=Math.floor(Ot/M.width),Ut=Ct,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,le,W,Ut,Tt,q,dt,M.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function it(O,M,q){let dt=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(dt=o.TEXTURE_3D);const vt=gt(O,M),ut=M.source;i.bindTexture(dt,O.__webglTexture,o.TEXTURE0+q);const jt=s.get(ut);if(ut.version!==jt.__version||vt===!0){i.activeTexture(o.TEXTURE0+q);const Rt=be.getPrimaries(be.workingColorSpace),Xt=M.colorSpace===$a?null:be.getPrimaries(M.colorSpace),ee=M.colorSpace===$a||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Mt=w(M.image,!1,l.maxTextureSize);Mt=Oe(M,Mt);const Et=c.convert(M.format,M.colorSpace),zt=c.convert(M.type);let Ot=L(M.internalFormat,Et,zt,M.colorSpace,M.isVideoTexture);at(dt,M);let Ct;const le=M.mipmaps,W=M.isVideoTexture!==!0,Ut=jt.__version===void 0||vt===!0,Tt=ut.dataReady,Pt=z(M,Mt);if(M.isDepthTexture)Ot=U(M.format===Ds,M.type),Ut&&(W?i.texStorage2D(o.TEXTURE_2D,1,Ot,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,null));else if(M.isDataTexture)if(le.length>0){W&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data);M.generateMipmaps=!1}else W?(Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height),Tt&&Bt(M,Mt,Et,zt)):i.texImage2D(o.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,Mt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){W&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,le[0].width,le[0].height,Mt.depth);for(let St=0,_t=le.length;St<_t;St++)if(Ct=le[St],M.format!==Di)if(Et!==null)if(W){if(Tt)if(M.layerUpdates.size>0){const At=m_(Ct.width,Ct.height,M.format,M.type);for(const ne of M.layerUpdates){const ze=Ct.data.subarray(ne*At/Ct.data.BYTES_PER_ELEMENT,(ne+1)*At/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,ne,Ct.width,Ct.height,1,Et,ze)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,zt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Et,zt,Ct.data)}else{W&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],M.format!==Di?Et!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data)}else if(M.isDataArrayTexture)if(W){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,Mt.width,Mt.height,Mt.depth),Tt)if(M.layerUpdates.size>0){const St=m_(Mt.width,Mt.height,M.format,M.type);for(const _t of M.layerUpdates){const At=Mt.data.subarray(_t*St/Mt.data.BYTES_PER_ELEMENT,(_t+1)*St/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,zt,At)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(M.isData3DTexture)W?(Ut&&i.texStorage3D(o.TEXTURE_3D,Pt,Ot,Mt.width,Mt.height,Mt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(M.isFramebufferTexture){if(Ut)if(W)i.texStorage2D(o.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height);else{let St=Mt.width,_t=Mt.height;for(let At=0;At<Pt;At++)i.texImage2D(o.TEXTURE_2D,At,Ot,St,_t,0,Et,zt,null),St>>=1,_t>>=1}}else if(le.length>0){if(W&&Ut){const St=Yt(le[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Et,zt,Ct):i.texImage2D(o.TEXTURE_2D,St,Ot,Et,zt,Ct);M.generateMipmaps=!1}else if(W){if(Ut){const St=Yt(Mt);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,zt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Ot,Et,zt,Mt);y(M)&&_(dt),jt.__version=ut.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function ft(O,M,q){if(M.image.length!==6)return;const dt=gt(O,M),vt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+q);const ut=s.get(vt);if(vt.version!==ut.__version||dt===!0){i.activeTexture(o.TEXTURE0+q);const jt=be.getPrimaries(be.workingColorSpace),Rt=M.colorSpace===$a?null:be.getPrimaries(M.colorSpace),Xt=M.colorSpace===$a||jt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=M.isCompressedTexture||M.image[0].isCompressedTexture,Mt=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!ee&&!Mt?Et[_t]=w(M.image[_t],!0,l.maxCubemapSize):Et[_t]=Mt?M.image[_t].image:M.image[_t],Et[_t]=Oe(M,Et[_t]);const zt=Et[0],Ot=c.convert(M.format,M.colorSpace),Ct=c.convert(M.type),le=L(M.internalFormat,Ot,Ct,M.colorSpace),W=M.isVideoTexture!==!0,Ut=ut.__version===void 0||dt===!0,Tt=vt.dataReady;let Pt=z(M,zt);at(o.TEXTURE_CUBE_MAP,M);let St;if(ee){W&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,le,zt.width,zt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ne=St[At];M.format!==Di?Ot!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Ot,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,ne.data):se("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Ot,Ct,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,Ot,Ct,ne.data)}}}else{if(St=M.mipmaps,W&&Ut){St.length>0&&Pt++;const _t=Yt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Ct,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Et[_t].width,Et[_t].height,0,Ot,Ct,Et[_t].data);for(let At=0;At<St.length;At++){const ze=St[At].image[_t].image;W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,ze.width,ze.height,Ot,Ct,ze.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,ze.width,ze.height,0,Ot,Ct,ze.data)}}else{W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Ct,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Ot,Ct,Et[_t]);for(let At=0;At<St.length;At++){const ne=St[At];W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Ct,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Ot,Ct,ne.image[_t])}}}y(M)&&_(o.TEXTURE_CUBE_MAP),ut.__version=vt.version,M.onUpdate&&M.onUpdate(M)}O.__version=M.version}function wt(O,M,q,dt,vt,ut){const jt=c.convert(q.format,q.colorSpace),Rt=c.convert(q.type),Xt=L(q.internalFormat,jt,Rt,q.colorSpace),ee=s.get(M),Mt=s.get(q);if(Mt.__renderTarget=M,!ee.__hasExternalTextures){const Et=Math.max(1,M.width>>ut),zt=Math.max(1,M.height>>ut);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ut,Xt,Et,zt,M.depth,0,jt,Rt,null):i.texImage2D(vt,ut,Xt,Et,zt,0,jt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),je(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,vt,Mt.__webglTexture,0,V(M)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,vt,Mt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(O,M,q){if(o.bindRenderbuffer(o.RENDERBUFFER,O),M.depthBuffer){const dt=M.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ut=U(M.stencilBuffer,vt),jt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;je(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(M),ut,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(M),ut,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ut,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,O)}else{const dt=M.textures;for(let vt=0;vt<dt.length;vt++){const ut=dt[vt],jt=c.convert(ut.format,ut.colorSpace),Rt=c.convert(ut.type),Xt=L(ut.internalFormat,jt,Rt,ut.colorSpace);je(M)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(M),Xt,M.width,M.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(M),Xt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ft(O,M,q){const dt=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(M.depthTexture);if(vt.__renderTarget=M,(!vt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),dt){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,M.depthTexture.addEventListener("dispose",I)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),at(o.TEXTURE_CUBE_MAP,M.depthTexture);const ee=c.convert(M.depthTexture.format),Mt=c.convert(M.depthTexture.type);let Et;M.depthTexture.format===Sa?Et=o.DEPTH_COMPONENT24:M.depthTexture.format===Ds&&(Et=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,M.width,M.height,0,ee,Mt,null)}}else lt(M.depthTexture,0);const ut=vt.__webglTexture,jt=V(M),Rt=dt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Xt=M.depthTexture.format===Ds?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===Sa)je(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,ut,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,ut,0);else if(M.depthTexture.format===Ds)je(M)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,ut,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,ut,0);else throw new Error("Unknown depthTexture format")}function he(O){const M=s.get(O),q=O.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==O.depthTexture){const dt=O.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),dt){const vt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),M.__depthDisposeCallback=vt}M.__boundDepthTexture=dt}if(O.depthTexture&&!M.__autoAllocateDepthBuffer)if(q)for(let dt=0;dt<6;dt++)Ft(M.__webglFramebuffer[dt],O,dt);else{const dt=O.texture.mipmaps;dt&&dt.length>0?Ft(M.__webglFramebuffer[0],O,0):Ft(M.__webglFramebuffer,O,0)}else if(q){M.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[dt]),M.__webglDepthbuffer[dt]===void 0)M.__webglDepthbuffer[dt]=o.createRenderbuffer(),kt(M.__webglDepthbuffer[dt],O,!1);else{const vt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ut)}}else{const dt=O.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),kt(M.__webglDepthbuffer,O,!1);else{const vt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(O,M,q){const dt=s.get(O);M!==void 0&&wt(dt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&he(O)}function _e(O){const M=O.texture,q=s.get(O),dt=s.get(M);O.addEventListener("dispose",N);const vt=O.textures,ut=O.isWebGLCubeRenderTarget===!0,jt=vt.length>1;if(jt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=M.version,h.memory.textures++),ut){q.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<M.mipmaps.length;Xt++)q.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else q.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let Rt=0;Rt<M.mipmaps.length;Rt++)q.__webglFramebuffer[Rt]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=s.get(vt[Rt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&je(O)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];q.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Rt]);const ee=c.convert(Xt.format,Xt.colorSpace),Mt=c.convert(Xt.type),Et=L(Xt.internalFormat,ee,Mt,Xt.colorSpace,O.isXRRenderTarget===!0),zt=V(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Et,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,q.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),at(o.TEXTURE_CUBE_MAP,M);for(let Rt=0;Rt<6;Rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)wt(q.__webglFramebuffer[Rt][Xt],O,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else wt(q.__webglFramebuffer[Rt],O,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(M)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=vt[Rt],Mt=s.get(ee);let Et=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Et=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),at(Et,ee),wt(q.__webglFramebuffer,O,ee,o.COLOR_ATTACHMENT0+Rt,Et,0),y(ee)&&_(Et)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Rt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),at(Rt,M),M.mipmaps&&M.mipmaps.length>0)for(let Xt=0;Xt<M.mipmaps.length;Xt++)wt(q.__webglFramebuffer[Xt],O,M,o.COLOR_ATTACHMENT0,Rt,Xt);else wt(q.__webglFramebuffer,O,M,o.COLOR_ATTACHMENT0,Rt,0);y(M)&&_(Rt),i.unbindTexture()}O.depthBuffer&&he(O)}function de(O){const M=O.textures;for(let q=0,dt=M.length;q<dt;q++){const vt=M[q];if(y(vt)){const ut=D(O),jt=s.get(vt).__webglTexture;i.bindTexture(ut,jt),_(ut),i.unbindTexture()}}}const we=[],re=[];function tn(O){if(O.samples>0){if(je(O)===!1){const M=O.textures,q=O.width,dt=O.height;let vt=o.COLOR_BUFFER_BIT;const ut=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=s.get(O),Rt=M.length>1;if(Rt)for(let ee=0;ee<M.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Xt=O.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ee=0;ee<M.length;ee++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const Mt=s.get(M[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,q,dt,0,0,q,dt,vt,o.NEAREST),m===!0&&(we.length=0,re.length=0,we.push(o.COLOR_ATTACHMENT0+ee),O.depthBuffer&&O.resolveDepthBuffer===!1&&(we.push(ut),re.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,re)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let ee=0;ee<M.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const Mt=s.get(M[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const M=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function V(O){return Math.min(l.maxSamples,O.samples)}function je(O){const M=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ee(O){const M=h.render.frame;x.get(O)!==M&&(x.set(O,M),O.update())}function Oe(O,M){const q=O.colorSpace,dt=O.format,vt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||q!==Or&&q!==$a&&(be.getTransfer(q)===He?(dt!==Di||vt!==ri)&&se("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),M}function Yt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=Y,this.setTexture2D=lt,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=st,this.rebindTextures=$e,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function X1(o,t){function i(s,l=$a){let c;const h=be.getTransfer(l);if(s===ri)return o.UNSIGNED_BYTE;if(s===zd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Id)return o.UNSIGNED_SHORT_5_5_5_1;if(s===J_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===$_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Z_)return o.BYTE;if(s===Q_)return o.SHORT;if(s===Xo)return o.UNSIGNED_SHORT;if(s===Pd)return o.INT;if(s===ki)return o.UNSIGNED_INT;if(s===Bi)return o.FLOAT;if(s===xa)return o.HALF_FLOAT;if(s===tv)return o.ALPHA;if(s===ev)return o.RGB;if(s===Di)return o.RGBA;if(s===Sa)return o.DEPTH_COMPONENT;if(s===Ds)return o.DEPTH_STENCIL;if(s===nv)return o.RED;if(s===Bd)return o.RED_INTEGER;if(s===Nr)return o.RG;if(s===Fd)return o.RG_INTEGER;if(s===Hd)return o.RGBA_INTEGER;if(s===Lc||s===Nc||s===Oc||s===Pc)if(h===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zh||s===Qh||s===Jh||s===$h)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$h)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===td||s===ed)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===nd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===id)return c.COMPRESSED_R11_EAC;if(s===ad)return c.COMPRESSED_SIGNED_R11_EAC;if(s===sd)return c.COMPRESSED_RG11_EAC;if(s===rd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===Sd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===od)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ld)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ud)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===md)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_d)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yd||s===Md||s===Ed)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===yd)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ed)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Td||s===bd||s===Ad||s===Rd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Td)return c.COMPRESSED_RED_RGTC1_EXT;if(s===bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ad)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const W1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q1=`
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

}`;class Y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new gv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Wi({vertexShader:W1,fragmentShader:q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Dn(new Qo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K1 extends zr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,x=null,g=null,S=null,E=null,R=null;const w=typeof XRWebGLBinding<"u",y=new Y1,_={},D=i.getContextAttributes();let L=null,U=null;const z=[],I=[],N=new Me;let X=null;const T=new si;T.viewport=new an;const C=new si;C.viewport=new an;const H=[T,C],Y=new aM;let J=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ft=z[it];return ft===void 0&&(ft=new Rh,z[it]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(it){let ft=z[it];return ft===void 0&&(ft=new Rh,z[it]=ft),ft.getGripSpace()},this.getHand=function(it){let ft=z[it];return ft===void 0&&(ft=new Rh,z[it]=ft),ft.getHandSpace()};function lt(it){const ft=I.indexOf(it.inputSource);if(ft===-1)return;const wt=z[ft];wt!==void 0&&(wt.update(it.inputSource,it.frame,p||h),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",G);for(let it=0;it<z.length;it++){const ft=I[it];ft!==null&&(I[it]=null,z[it].disconnect(ft))}J=null,ct=null,y.reset();for(const it in _)delete _[it];t.setRenderTarget(L),E=null,S=null,g=null,l=null,U=null,Bt.stop(),s.isPresenting=!1,t.setPixelRatio(X),t.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&se("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&se("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",B),l.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(N),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,kt=null,Ft=null;D.depth&&(Ft=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=D.stencil?Ds:Sa,kt=D.stencil?Wo:ki);const he={colorFormat:i.RGBA8,depthFormat:Ft,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(he),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),U=new Gi(S.textureWidth,S.textureHeight,{format:Di,type:ri,depthTexture:new Yo(S.textureWidth,S.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const wt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new Gi(E.framebufferWidth,E.framebufferHeight,{format:Di,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Bt.setContext(l),Bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(it){for(let ft=0;ft<it.removed.length;ft++){const wt=it.removed[ft],kt=I.indexOf(wt);kt>=0&&(I[kt]=null,z[kt].disconnect(wt))}for(let ft=0;ft<it.added.length;ft++){const wt=it.added[ft];let kt=I.indexOf(wt);if(kt===-1){for(let he=0;he<z.length;he++)if(he>=I.length){I.push(wt),kt=he;break}else if(I[he]===null){I[he]=wt,kt=he;break}if(kt===-1)break}const Ft=z[kt];Ft&&Ft.connect(wt)}}const st=new Z,yt=new Z;function xt(it,ft,wt){st.setFromMatrixPosition(ft.matrixWorld),yt.setFromMatrixPosition(wt.matrixWorld);const kt=st.distanceTo(yt),Ft=ft.projectionMatrix.elements,he=wt.projectionMatrix.elements,$e=Ft[14]/(Ft[10]-1),_e=Ft[14]/(Ft[10]+1),de=(Ft[9]+1)/Ft[5],we=(Ft[9]-1)/Ft[5],re=(Ft[8]-1)/Ft[0],tn=(he[8]+1)/he[0],V=$e*re,je=$e*tn,Ee=kt/(-re+tn),Oe=Ee*-re;if(ft.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Oe),it.translateZ(Ee),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ft[10]===-1)it.projectionMatrix.copy(ft.projectionMatrix),it.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Yt=$e+Ee,O=_e+Ee,M=V-Oe,q=je+(kt-Oe),dt=de*_e/O*Yt,vt=we*_e/O*Yt;it.projectionMatrix.makePerspective(M,q,dt,vt,Yt,O),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function P(it,ft){ft===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ft.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ft=it.near,wt=it.far;y.texture!==null&&(y.depthNear>0&&(ft=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),Y.near=C.near=T.near=ft,Y.far=C.far=T.far=wt,(J!==Y.near||ct!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),J=Y.near,ct=Y.far),Y.layers.mask=it.layers.mask|6,T.layers.mask=Y.layers.mask&3,C.layers.mask=Y.layers.mask&5;const kt=it.parent,Ft=Y.cameras;P(Y,kt);for(let he=0;he<Ft.length;he++)P(Ft[he],kt);Ft.length===2?xt(Y,T,C):Y.projectionMatrix.copy(T.projectionMatrix),at(it,Y,kt)};function at(it,ft,wt){wt===null?it.matrix.copy(ft.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ft.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ft.projectionMatrix),it.projectionMatrixInverse.copy(ft.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Cd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(it){m=it,S!==null&&(S.fixedFoveation=it),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(it){return _[it]};let gt=null;function bt(it,ft){if(x=ft.getViewerPose(p||h),R=ft,x!==null){const wt=x.views;E!==null&&(t.setRenderTargetFramebuffer(U,E.framebuffer),t.setRenderTarget(U));let kt=!1;wt.length!==Y.cameras.length&&(Y.cameras.length=0,kt=!0);for(let _e=0;_e<wt.length;_e++){const de=wt[_e];let we=null;if(E!==null)we=E.getViewport(de);else{const tn=g.getViewSubImage(S,de);we=tn.viewport,_e===0&&(t.setRenderTargetTextures(U,tn.colorTexture,tn.depthStencilTexture),t.setRenderTarget(U))}let re=H[_e];re===void 0&&(re=new si,re.layers.enable(_e),re.viewport=new an,H[_e]=re),re.matrix.fromArray(de.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(de.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(we.x,we.y,we.width,we.height),_e===0&&(Y.matrix.copy(re.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),kt===!0&&Y.cameras.push(re)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=s.getBinding();const _e=g.getDepthInformation(wt[0]);_e&&_e.isValid&&_e.texture&&y.init(_e,l.renderState)}if(Ft&&Ft.includes("camera-access")&&w){t.state.unbindTexture(),g=s.getBinding();for(let _e=0;_e<wt.length;_e++){const de=wt[_e].camera;if(de){let we=_[de];we||(we=new gv,_[de]=we);const re=g.getCameraImage(de);we.sourceTexture=re}}}}for(let wt=0;wt<z.length;wt++){const kt=I[wt],Ft=z[wt];kt!==null&&Ft!==void 0&&Ft.update(kt,ft,p||h)}gt&&gt(it,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),R=null}const Bt=new vv;Bt.setAnimationLoop(bt),this.setAnimationLoop=function(it){gt=it},this.dispose=function(){}}}const bs=new Xi,j1=new Je;function Z1(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,fv(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,D,L,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),g(y,_)):_.isMeshPhongMaterial?(c(y,_),x(y,_)):_.isMeshStandardMaterial?(c(y,_),S(y,_),_.isMeshPhysicalMaterial&&E(y,_,U)):_.isMeshMatcapMaterial?(c(y,_),R(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),w(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,D,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Kn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Kn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const D=t.get(_),L=D.envMap,U=D.envMapRotation;L&&(y.envMap.value=L,bs.copy(U),bs.x*=-1,bs.y*=-1,bs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),y.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(bs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,D,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*D,y.scale.value=L*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function E(y,_,D){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Kn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const D=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Q1(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,L){const U=L.program;s.uniformBlockBinding(D,U)}function p(D,L){let U=l[D.id];U===void 0&&(R(D),U=x(D),l[D.id]=U,D.addEventListener("dispose",y));const z=L.program;s.updateUBOMapping(D,z);const I=t.render.frame;c[D.id]!==I&&(S(D),c[D.id]=I)}function x(D){const L=g();D.__bindingPointIndex=L;const U=o.createBuffer(),z=D.__size,I=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,z,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,U),U}function g(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const L=l[D.id],U=D.uniforms,z=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let I=0,N=U.length;I<N;I++){const X=Array.isArray(U[I])?U[I]:[U[I]];for(let T=0,C=X.length;T<C;T++){const H=X[T];if(E(H,I,T,z)===!0){const Y=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let lt=0;lt<J.length;lt++){const B=J[lt],G=w(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,Y+ct,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,ct),ct+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,L,U,z){const I=D.value,N=L+"_"+U;if(z[N]===void 0)return typeof I=="number"||typeof I=="boolean"?z[N]=I:z[N]=I.clone(),!0;{const X=z[N];if(typeof I=="number"||typeof I=="boolean"){if(X!==I)return z[N]=I,!0}else if(X.equals(I)===!1)return X.copy(I),!0}return!1}function R(D){const L=D.uniforms;let U=0;const z=16;for(let N=0,X=L.length;N<X;N++){const T=Array.isArray(L[N])?L[N]:[L[N]];for(let C=0,H=T.length;C<H;C++){const Y=T[C],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let ct=0,lt=J.length;ct<lt;ct++){const B=J[ct],G=w(B),st=U%z,yt=st%G.boundary,xt=st+yt;U+=yt,xt!==0&&z-xt<G.storage&&(U+=z-xt),Y.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=U,U+=G.storage}}}const I=U%z;return I>0&&(U+=z-I),D.__size=U,D.__cache={},this}function w(D){const L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?se("WebGLRenderer: Texture samplers can not be part of an uniforms group."):se("WebGLRenderer: Unsupported uniform value type.",D),L}function y(D){const L=D.target;L.removeEventListener("dispose",y);const U=h.indexOf(L.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const D in l)o.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}const J1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function $1(){return zi===null&&(zi=new Wy(J1,16,16,Nr,xa),zi.name="DFG_LUT",zi.minFilter=In,zi.magFilter=In,zi.wrapS=ga,zi.wrapT=ga,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class tA{constructor(t={}){const{canvas:i=vy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1,outputBufferType:E=ri}=t;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=h;const w=E,y=new Set([Hd,Fd,Bd]),_=new Set([ri,ki,Xo,Wo,zd,Id]),D=new Uint32Array(4),L=new Int32Array(4);let U=null,z=null;const I=[],N=[];let X=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let C=!1;this._outputColorSpace=xi;let H=0,Y=0,J=null,ct=-1,lt=null;const B=new an,G=new an;let st=null;const yt=new ge(0);let xt=0,P=i.width,at=i.height,gt=1,bt=null,Bt=null;const it=new an(0,0,P,at),ft=new an(0,0,P,at);let wt=!1;const kt=new Xd;let Ft=!1,he=!1;const $e=new Je,_e=new Z,de=new an,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function tn(){return J===null?gt:1}let V=s;function je(A,K){return i.getContext(A,K)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Od}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Te,!1),V===null){const K="webgl2";if(V=je(K,A),V===null)throw je(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ce("WebGLRenderer: "+A.message),A}let Ee,Oe,Yt,O,M,q,dt,vt,ut,jt,Rt,Xt,ee,Mt,Et,zt,Ot,Ct,le,W,Ut,Tt,Pt,St;function _t(){Ee=new $T(V),Ee.init(),Tt=new X1(V,Ee),Oe=new XT(V,Ee,t,Tt),Yt=new V1(V,Ee),Oe.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),O=new nb(V),M=new R1,q=new k1(V,Ee,Yt,M,Oe,Tt,O),dt=new qT(T),vt=new JT(T),ut=new rM(V),Pt=new VT(V,ut),jt=new tb(V,ut,O,Pt),Rt=new ab(V,jt,ut,O),le=new ib(V,Oe,q),zt=new WT(M),Xt=new A1(T,dt,vt,Ee,Oe,Pt,zt),ee=new Z1(T,M),Mt=new w1,Et=new P1(Ee),Ct=new GT(T,dt,vt,Yt,Rt,R,m),Ot=new H1(T,Rt,Oe),St=new Q1(V,O,Oe,Yt),W=new kT(V,Ee,O),Ut=new eb(V,Ee,O),O.programs=Xt.programs,T.capabilities=Oe,T.extensions=Ee,T.properties=M,T.renderLists=Mt,T.shadowMap=Ot,T.state=Yt,T.info=O}_t(),w!==ri&&(X=new rb(w,i.width,i.height,l,c));const At=new K1(T,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(A){A!==void 0&&(gt=A,this.setSize(P,at,!1))},this.getSize=function(A){return A.set(P,at)},this.setSize=function(A,K,rt=!0){if(At.isPresenting){se("WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,at=K,i.width=Math.floor(A*gt),i.height=Math.floor(K*gt),rt===!0&&(i.style.width=A+"px",i.style.height=K+"px"),X!==null&&X.setSize(i.width,i.height),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(P*gt,at*gt).floor()},this.setDrawingBufferSize=function(A,K,rt){P=A,at=K,gt=rt,i.width=Math.floor(A*rt),i.height=Math.floor(K*rt),this.setViewport(0,0,A,K)},this.setEffects=function(A){if(w===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let K=0;K<A.length;K++)if(A[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(it)},this.setViewport=function(A,K,rt,et){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,K,rt,et),Yt.viewport(B.copy(it).multiplyScalar(gt).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,K,rt,et){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,K,rt,et),Yt.scissor(G.copy(ft).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(A){Yt.setScissorTest(wt=A)},this.setOpaqueSort=function(A){bt=A},this.setTransparentSort=function(A){Bt=A},this.getClearColor=function(A){return A.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,rt=!0){let et=0;if(A){let Q=!1;if(J!==null){const Dt=J.texture.format;Q=y.has(Dt)}if(Q){const Dt=J.texture.type,It=_.has(Dt),Lt=Ct.getClearColor(),Gt=Ct.getClearAlpha(),Wt=Lt.r,Jt=Lt.g,qt=Lt.b;It?(D[0]=Wt,D[1]=Jt,D[2]=qt,D[3]=Gt,V.clearBufferuiv(V.COLOR,0,D)):(L[0]=Wt,L[1]=Jt,L[2]=qt,L[3]=Gt,V.clearBufferiv(V.COLOR,0,L))}else et|=V.COLOR_BUFFER_BIT}K&&(et|=V.DEPTH_BUFFER_BIT),rt&&(et|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Ct.dispose(),Mt.dispose(),Et.dispose(),M.dispose(),dt.dispose(),vt.dispose(),Rt.dispose(),Pt.dispose(),St.dispose(),Xt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Os),At.removeEventListener("sessionend",Gr),Ui.stop()};function ne(A){A.preventDefault(),Yg("WebGLRenderer: Context Lost."),C=!0}function ze(){Yg("WebGLRenderer: Context Restored."),C=!1;const A=O.autoReset,K=Ot.enabled,rt=Ot.autoUpdate,et=Ot.needsUpdate,Q=Ot.type;_t(),O.autoReset=A,Ot.enabled=K,Ot.autoUpdate=rt,Ot.needsUpdate=et,Ot.type=Q}function Te(A){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Nn(A){const K=A.target;K.removeEventListener("dispose",Nn),Si(K)}function Si(A){Jo(A),M.remove(A)}function Jo(A){const K=M.get(A).programs;K!==void 0&&(K.forEach(function(rt){Xt.releaseProgram(rt)}),A.isShaderMaterial&&Xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,rt,et,Q,Dt){K===null&&(K=we);const It=Q.isMesh&&Q.matrixWorld.determinant()<0,Lt=ns(A,K,rt,et,Q);Yt.setMaterial(et,It);let Gt=rt.index,Wt=1;if(et.wireframe===!0){if(Gt=jt.getWireframeAttribute(rt),Gt===void 0)return;Wt=2}const Jt=rt.drawRange,qt=rt.attributes.position;let $t=Jt.start*Wt,De=(Jt.start+Jt.count)*Wt;Dt!==null&&($t=Math.max($t,Dt.start*Wt),De=Math.min(De,(Dt.start+Dt.count)*Wt)),Gt!==null?($t=Math.max($t,0),De=Math.min(De,Gt.count)):qt!=null&&($t=Math.max($t,0),De=Math.min(De,qt.count));const Ze=De-$t;if(Ze<0||Ze===1/0)return;Pt.setup(Q,et,Lt,rt,Gt);let qe,Pe=W;if(Gt!==null&&(qe=ut.get(Gt),Pe=Ut,Pe.setIndex(qe)),Q.isMesh)et.wireframe===!0?(Yt.setLineWidth(et.wireframeLinewidth*tn()),Pe.setMode(V.LINES)):Pe.setMode(V.TRIANGLES);else if(Q.isLine){let Zt=et.linewidth;Zt===void 0&&(Zt=1),Yt.setLineWidth(Zt*tn()),Q.isLineSegments?Pe.setMode(V.LINES):Q.isLineLoop?Pe.setMode(V.LINE_LOOP):Pe.setMode(V.LINE_STRIP)}else Q.isPoints?Pe.setMode(V.POINTS):Q.isSprite&&Pe.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Zt=Q._multiDrawStarts,Ue=Q._multiDrawCounts,ie=Q._multiDrawCount,yn=Gt?ut.get(Gt).bytesPerElement:1,qi=M.get(et).currentProgram.getUniforms();for(let Mn=0;Mn<ie;Mn++)qi.setValue(V,"_gl_DrawID",Mn),Pe.render(Zt[Mn]/yn,Ue[Mn])}else if(Q.isInstancedMesh)Pe.renderInstances($t,Ze,Q.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ue=Math.min(rt.instanceCount,Zt);Pe.renderInstances($t,Ze,Ue)}else Pe.render($t,Ze)};function Fr(A,K,rt){A.transparent===!0&&A.side===ma&&A.forceSinglePass===!1?(A.side=Kn,A.needsUpdate=!0,zs(A,K,rt),A.side=es,A.needsUpdate=!0,zs(A,K,rt),A.side=ma):zs(A,K,rt)}this.compile=function(A,K,rt=null){rt===null&&(rt=A),z=Et.get(rt),z.init(K),N.push(z),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),A!==rt&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),z.setupLights();const et=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Dt=Q.material;if(Dt)if(Array.isArray(Dt))for(let It=0;It<Dt.length;It++){const Lt=Dt[It];Fr(Lt,rt,Q),et.add(Lt)}else Fr(Dt,rt,Q),et.add(Dt)}),z=N.pop(),et},this.compileAsync=function(A,K,rt=null){const et=this.compile(A,K,rt);return new Promise(Q=>{function Dt(){if(et.forEach(function(It){M.get(It).currentProgram.isReady()&&et.delete(It)}),et.size===0){Q(A);return}setTimeout(Dt,10)}Ee.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ns=null;function Hr(A){Ns&&Ns(A)}function Os(){Ui.stop()}function Gr(){Ui.start()}const Ui=new vv;Ui.setAnimationLoop(Hr),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(A){Ns=A,At.setAnimationLoop(A),A===null?Ui.stop():Ui.start()},At.addEventListener("sessionstart",Os),At.addEventListener("sessionend",Gr),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const rt=At.enabled===!0&&At.isPresenting===!0,et=X!==null&&(J===null||rt)&&X.begin(T,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(K),K=At.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,K,J),z=Et.get(A,N.length),z.init(K),N.push(z),$e.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),kt.setFromProjectionMatrix($e,Fi,K.reversedDepth),he=this.localClippingEnabled,Ft=zt.init(this.clippingPlanes,he),U=Mt.get(A,I.length),U.init(),I.push(U),At.enabled===!0&&At.isPresenting===!0){const It=T.xr.getDepthSensingMesh();It!==null&&oi(It,K,-1/0,T.sortObjects)}oi(A,K,0,T.sortObjects),U.finish(),T.sortObjects===!0&&U.sort(bt,Bt),re=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,re&&Ct.addToRenderList(U,A),this.info.render.frame++,Ft===!0&&zt.beginShadows();const Q=z.state.shadowsArray;if(Ot.render(Q,A,K),Ft===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&X.hasRenderPass())===!1){const It=U.opaque,Lt=U.transmissive;if(z.setupLights(),K.isArrayCamera){const Gt=K.cameras;if(Lt.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];Sn(It,Lt,A,qt)}re&&Ct.render(A);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];on(U,A,qt,qt.viewport)}}else Lt.length>0&&Sn(It,Lt,A,K),re&&Ct.render(A),on(U,A,K)}J!==null&&Y===0&&(q.updateMultisampleRenderTarget(J),q.updateRenderTargetMipmap(J)),et&&X.end(T),A.isScene===!0&&A.onAfterRender(T,A,K),Pt.resetDefaultState(),ct=-1,lt=null,N.pop(),N.length>0?(z=N[N.length-1],Ft===!0&&zt.setGlobalState(T.clippingPlanes,z.state.camera)):z=null,I.pop(),I.length>0?U=I[I.length-1]:U=null};function oi(A,K,rt,et){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)z.pushLight(A),A.castShadow&&z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||kt.intersectsSprite(A)){et&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4($e);const It=Rt.update(A),Lt=A.material;Lt.visible&&U.push(A,It,Lt,rt,de.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||kt.intersectsObject(A))){const It=Rt.update(A),Lt=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),de.copy(It.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4($e)),Array.isArray(Lt)){const Gt=It.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],$t=Lt[qt.materialIndex];$t&&$t.visible&&U.push(A,It,$t,rt,de.z,qt)}}else Lt.visible&&U.push(A,It,Lt,rt,de.z,null)}}const Dt=A.children;for(let It=0,Lt=Dt.length;It<Lt;It++)oi(Dt[It],K,rt,et)}function on(A,K,rt,et){const{opaque:Q,transmissive:Dt,transparent:It}=A;z.setupLightsView(rt),Ft===!0&&zt.setGlobalState(T.clippingPlanes,rt),et&&Yt.viewport(B.copy(et)),Q.length>0&&yi(Q,K,rt),Dt.length>0&&yi(Dt,K,rt),It.length>0&&yi(It,K,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Sn(A,K,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[et.id]===void 0){const $t=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[et.id]=new Gi(1,1,{generateMipmaps:!0,type:$t?xa:ri,minFilter:ws,samples:Oe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Dt=z.state.transmissionRenderTarget[et.id],It=et.viewport||B;Dt.setSize(It.z*T.transmissionResolutionScale,It.w*T.transmissionResolutionScale);const Lt=T.getRenderTarget(),Gt=T.getActiveCubeFace(),Wt=T.getActiveMipmapLevel();T.setRenderTarget(Dt),T.getClearColor(yt),xt=T.getClearAlpha(),xt<1&&T.setClearColor(16777215,.5),T.clear(),re&&Ct.render(rt);const Jt=T.toneMapping;T.toneMapping=Hi;const qt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),z.setupLightsView(et),Ft===!0&&zt.setGlobalState(T.clippingPlanes,et),yi(A,rt,et),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Ze=K.length;De<Ze;De++){const qe=K[De],{object:Pe,geometry:Zt,material:Ue,group:ie}=qe;if(Ue.side===ma&&Pe.layers.test(et.layers)){const yn=Ue.side;Ue.side=Kn,Ue.needsUpdate=!0,Ps(Pe,rt,et,Zt,Ue,ie),Ue.side=yn,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}T.setRenderTarget(Lt,Gt,Wt),T.setClearColor(yt,xt),qt!==void 0&&(et.viewport=qt),T.toneMapping=Jt}function yi(A,K,rt){const et=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Dt=A.length;Q<Dt;Q++){const It=A[Q],{object:Lt,geometry:Gt,group:Wt}=It;let Jt=It.material;Jt.allowOverride===!0&&et!==null&&(Jt=et),Lt.layers.test(rt.layers)&&Ps(Lt,K,rt,Gt,Jt,Wt)}}function Ps(A,K,rt,et,Q,Dt){A.onBeforeRender(T,K,rt,et,Q,Dt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(T,K,rt,et,A,Dt),Q.transparent===!0&&Q.side===ma&&Q.forceSinglePass===!1?(Q.side=Kn,Q.needsUpdate=!0,T.renderBufferDirect(rt,K,et,Q,A,Dt),Q.side=es,Q.needsUpdate=!0,T.renderBufferDirect(rt,K,et,Q,A,Dt),Q.side=ma):T.renderBufferDirect(rt,K,et,Q,A,Dt),A.onAfterRender(T,K,rt,et,Q,Dt)}function zs(A,K,rt){K.isScene!==!0&&(K=we);const et=M.get(A),Q=z.state.lights,Dt=z.state.shadowsArray,It=Q.state.version,Lt=Xt.getParameters(A,Q.state,Dt,K,rt),Gt=Xt.getProgramCacheKey(Lt);let Wt=et.programs;et.environment=A.isMeshStandardMaterial?K.environment:null,et.fog=K.fog,et.envMap=(A.isMeshStandardMaterial?vt:dt).get(A.envMap||et.environment),et.envMapRotation=et.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",Nn),Wt=new Map,et.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if(et.currentProgram===Jt&&et.lightsStateVersion===It)return Vr(A,Lt),Jt}else Lt.uniforms=Xt.getUniforms(A),A.onBeforeCompile(Lt,T),Jt=Xt.acquireProgram(Lt,Gt),Wt.set(Gt,Jt),et.uniforms=Lt.uniforms;const qt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=zt.uniform),Vr(A,Lt),et.needsLights=ya(A),et.lightsStateVersion=It,et.needsLights&&(qt.ambientLightColor.value=Q.state.ambient,qt.lightProbe.value=Q.state.probe,qt.directionalLights.value=Q.state.directional,qt.directionalLightShadows.value=Q.state.directionalShadow,qt.spotLights.value=Q.state.spot,qt.spotLightShadows.value=Q.state.spotShadow,qt.rectAreaLights.value=Q.state.rectArea,qt.ltc_1.value=Q.state.rectAreaLTC1,qt.ltc_2.value=Q.state.rectAreaLTC2,qt.pointLights.value=Q.state.point,qt.pointLightShadows.value=Q.state.pointShadow,qt.hemisphereLights.value=Q.state.hemi,qt.directionalShadowMap.value=Q.state.directionalShadowMap,qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qt.spotShadowMap.value=Q.state.spotShadowMap,qt.spotLightMatrix.value=Q.state.spotLightMatrix,qt.spotLightMap.value=Q.state.spotLightMap,qt.pointShadowMap.value=Q.state.pointShadowMap,qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),et.currentProgram=Jt,et.uniformsList=null,Jt}function $o(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=zc.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function Vr(A,K){const rt=M.get(A);rt.outputColorSpace=K.outputColorSpace,rt.batching=K.batching,rt.batchingColor=K.batchingColor,rt.instancing=K.instancing,rt.instancingColor=K.instancingColor,rt.instancingMorph=K.instancingMorph,rt.skinning=K.skinning,rt.morphTargets=K.morphTargets,rt.morphNormals=K.morphNormals,rt.morphColors=K.morphColors,rt.morphTargetsCount=K.morphTargetsCount,rt.numClippingPlanes=K.numClippingPlanes,rt.numIntersection=K.numClipIntersection,rt.vertexAlphas=K.vertexAlphas,rt.vertexTangents=K.vertexTangents,rt.toneMapping=K.toneMapping}function ns(A,K,rt,et,Q){K.isScene!==!0&&(K=we),q.resetTextureUnits();const Dt=K.fog,It=et.isMeshStandardMaterial?K.environment:null,Lt=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Or,Gt=(et.isMeshStandardMaterial?vt:dt).get(et.envMap||It),Wt=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Jt=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),qt=!!rt.morphAttributes.position,$t=!!rt.morphAttributes.normal,De=!!rt.morphAttributes.color;let Ze=Hi;et.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ze=T.toneMapping);const qe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=qe!==void 0?qe.length:0,Zt=M.get(et),Ue=z.state.lights;if(Ft===!0&&(he===!0||A!==lt)){const Tn=A===lt&&et.id===ct;zt.setState(et,A,Tn)}let ie=!1;et.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ue.state.version||Zt.outputColorSpace!==Lt||Q.isBatchedMesh&&Zt.batching===!1||!Q.isBatchedMesh&&Zt.batching===!0||Q.isBatchedMesh&&Zt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Zt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Zt.instancing===!1||!Q.isInstancedMesh&&Zt.instancing===!0||Q.isSkinnedMesh&&Zt.skinning===!1||!Q.isSkinnedMesh&&Zt.skinning===!0||Q.isInstancedMesh&&Zt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Zt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Zt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Zt.instancingMorph===!1&&Q.morphTexture!==null||Zt.envMap!==Gt||et.fog===!0&&Zt.fog!==Dt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==zt.numPlanes||Zt.numIntersection!==zt.numIntersection)||Zt.vertexAlphas!==Wt||Zt.vertexTangents!==Jt||Zt.morphTargets!==qt||Zt.morphNormals!==$t||Zt.morphColors!==De||Zt.toneMapping!==Ze||Zt.morphTargetsCount!==Pe)&&(ie=!0):(ie=!0,Zt.__version=et.version);let yn=Zt.currentProgram;ie===!0&&(yn=zs(et,K,Q));let qi=!1,Mn=!1,li=!1;const Ie=yn.getUniforms(),En=Zt.uniforms;if(Yt.useProgram(yn.program)&&(qi=!0,Mn=!0,li=!0),et.id!==ct&&(ct=et.id,Mn=!0),qi||lt!==A){Yt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ie.setValue(V,"projectionMatrix",A.projectionMatrix),Ie.setValue(V,"viewMatrix",A.matrixWorldInverse);const bn=Ie.map.cameraPosition;bn!==void 0&&bn.setValue(V,_e.setFromMatrixPosition(A.matrixWorld)),Oe.logarithmicDepthBuffer&&Ie.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ie.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),lt!==A&&(lt=A,Mn=!0,li=!0)}if(Zt.needsLights&&(Ue.state.directionalShadowMap.length>0&&Ie.setValue(V,"directionalShadowMap",Ue.state.directionalShadowMap,q),Ue.state.spotShadowMap.length>0&&Ie.setValue(V,"spotShadowMap",Ue.state.spotShadowMap,q),Ue.state.pointShadowMap.length>0&&Ie.setValue(V,"pointShadowMap",Ue.state.pointShadowMap,q)),Q.isSkinnedMesh){Ie.setOptional(V,Q,"bindMatrix"),Ie.setOptional(V,Q,"bindMatrixInverse");const Tn=Q.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ie.setValue(V,"boneTexture",Tn.boneTexture,q))}Q.isBatchedMesh&&(Ie.setOptional(V,Q,"batchingTexture"),Ie.setValue(V,"batchingTexture",Q._matricesTexture,q),Ie.setOptional(V,Q,"batchingIdTexture"),Ie.setValue(V,"batchingIdTexture",Q._indirectTexture,q),Ie.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ie.setValue(V,"batchingColorTexture",Q._colorsTexture,q));const dn=rt.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&le.update(Q,rt,yn),(Mn||Zt.receiveShadow!==Q.receiveShadow)&&(Zt.receiveShadow=Q.receiveShadow,Ie.setValue(V,"receiveShadow",Q.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(En.envMap.value=Gt,En.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&K.environment!==null&&(En.envMapIntensity.value=K.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=$1()),Mn&&(Ie.setValue(V,"toneMappingExposure",T.toneMappingExposure),Zt.needsLights&&kr(En,li),Dt&&et.fog===!0&&ee.refreshFogUniforms(En,Dt),ee.refreshMaterialUniforms(En,et,gt,at,z.state.transmissionRenderTarget[A.id]),zc.upload(V,$o(Zt),En,q)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(zc.upload(V,$o(Zt),En,q),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ie.setValue(V,"center",Q.center),Ie.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ie.setValue(V,"normalMatrix",Q.normalMatrix),Ie.setValue(V,"modelMatrix",Q.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Tn=et.uniformsGroups;for(let bn=0,Is=Tn.length;bn<Is;bn++){const Mi=Tn[bn];St.update(Mi,yn),St.bind(Mi,yn)}}return yn}function kr(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function ya(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,K,rt){const et=M.get(A);et.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=K,M.get(A.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const rt=M.get(A);rt.__webglFramebuffer=K,rt.__useDefaultFramebuffer=K===void 0};const Ma=V.createFramebuffer();this.setRenderTarget=function(A,K=0,rt=0){J=A,H=K,Y=rt;let et=null,Q=!1,Dt=!1;if(A){const Lt=M.get(A);if(Lt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),B.copy(A.viewport),G.copy(A.scissor),st=A.scissorTest,Yt.viewport(B),Yt.scissor(G),Yt.setScissorTest(st),ct=-1;return}else if(Lt.__webglFramebuffer===void 0)q.setupRenderTarget(A);else if(Lt.__hasExternalTextures)q.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Jt=A.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&M.has(Jt)&&(A.width!==Jt.image.width||A.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(A)}}const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Dt=!0);const Wt=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[K])?et=Wt[K][rt]:et=Wt[K],Q=!0):A.samples>0&&q.useMultisampledRTT(A)===!1?et=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?et=Wt[rt]:et=Wt,B.copy(A.viewport),G.copy(A.scissor),st=A.scissorTest}else B.copy(it).multiplyScalar(gt).floor(),G.copy(ft).multiplyScalar(gt).floor(),st=wt;if(rt!==0&&(et=Ma),Yt.bindFramebuffer(V.FRAMEBUFFER,et)&&Yt.drawBuffers(A,et),Yt.viewport(B),Yt.scissor(G),Yt.setScissorTest(st),Q){const Lt=M.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Lt.__webglTexture,rt)}else if(Dt){const Lt=K;for(let Gt=0;Gt<A.textures.length;Gt++){const Wt=M.get(A.textures[Gt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,rt,Lt)}}else if(A!==null&&rt!==0){const Lt=M.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,rt)}ct=-1},this.readRenderTargetPixels=function(A,K,rt,et,Q,Dt,It,Lt=0){if(!(A&&A.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){Yt.bindFramebuffer(V.FRAMEBUFFER,Gt);try{const Wt=A.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Oe.textureFormatReadable(Jt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(qt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-et&&rt>=0&&rt<=A.height-Q&&(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(K,rt,et,Q,Tt.convert(Jt),Tt.convert(qt),Dt))}finally{const Wt=J!==null?M.get(J).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,K,rt,et,Q,Dt,It,Lt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt)if(K>=0&&K<=A.width-et&&rt>=0&&rt<=A.height-Q){Yt.bindFramebuffer(V.FRAMEBUFFER,Gt);const Wt=A.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Oe.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(K,rt,et,Q,Tt.convert(Jt),Tt.convert(qt),0);const De=J!==null?M.get(J).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,De);const Ze=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await xy(V,Ze,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer($t),V.deleteSync(Ze),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,rt=0){const et=Math.pow(2,-rt),Q=Math.floor(A.image.width*et),Dt=Math.floor(A.image.height*et),It=K!==null?K.x:0,Lt=K!==null?K.y:0;q.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,It,Lt,Q,Dt),Yt.unbindTexture()};const is=V.createFramebuffer(),Ea=V.createFramebuffer();this.copyTextureToTexture=function(A,K,rt=null,et=null,Q=0,Dt=null){Dt===null&&(Q!==0?(qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=Q,Q=0):Dt=0);let It,Lt,Gt,Wt,Jt,qt,$t,De,Ze;const qe=A.isCompressedTexture?A.mipmaps[Dt]:A.image;if(rt!==null)It=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Gt=rt.isBox3?rt.max.z-rt.min.z:1,Wt=rt.min.x,Jt=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const dn=Math.pow(2,-Q);It=Math.floor(qe.width*dn),Lt=Math.floor(qe.height*dn),A.isDataArrayTexture?Gt=qe.depth:A.isData3DTexture?Gt=Math.floor(qe.depth*dn):Gt=1,Wt=0,Jt=0,qt=0}et!==null?($t=et.x,De=et.y,Ze=et.z):($t=0,De=0,Ze=0);const Pe=Tt.convert(K.format),Zt=Tt.convert(K.type);let Ue;K.isData3DTexture?(q.setTexture3D(K,0),Ue=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(q.setTexture2DArray(K,0),Ue=V.TEXTURE_2D_ARRAY):(q.setTexture2D(K,0),Ue=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const ie=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),qi=V.getParameter(V.UNPACK_SKIP_PIXELS),Mn=V.getParameter(V.UNPACK_SKIP_ROWS),li=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,qe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,qe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Jt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qt);const Ie=A.isDataArrayTexture||A.isData3DTexture,En=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const dn=M.get(A),Tn=M.get(K),bn=M.get(dn.__renderTarget),Is=M.get(Tn.__renderTarget);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,bn.__webglFramebuffer),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let Mi=0;Mi<Gt;Mi++)Ie&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(A).__webglTexture,Q,qt+Mi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,M.get(K).__webglTexture,Dt,Ze+Mi)),V.blitFramebuffer(Wt,Jt,It,Lt,$t,De,It,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||M.has(A)){const dn=M.get(A),Tn=M.get(K);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,is),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ea);for(let bn=0;bn<Gt;bn++)Ie?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,dn.__webglTexture,Q,qt+bn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,dn.__webglTexture,Q),En?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Tn.__webglTexture,Dt,Ze+bn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Tn.__webglTexture,Dt),Q!==0?V.blitFramebuffer(Wt,Jt,It,Lt,$t,De,It,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):En?V.copyTexSubImage3D(Ue,Dt,$t,De,Ze+bn,Wt,Jt,It,Lt):V.copyTexSubImage2D(Ue,Dt,$t,De,Wt,Jt,It,Lt);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else En?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ue,Dt,$t,De,Ze,It,Lt,Gt,Pe,Zt,qe.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(Ue,Dt,$t,De,Ze,It,Lt,Gt,Pe,qe.data):V.texSubImage3D(Ue,Dt,$t,De,Ze,It,Lt,Gt,Pe,Zt,qe):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,$t,De,It,Lt,Pe,Zt,qe.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,$t,De,qe.width,qe.height,Pe,qe.data):V.texSubImage2D(V.TEXTURE_2D,Dt,$t,De,It,Lt,Pe,Zt,qe);V.pixelStorei(V.UNPACK_ROW_LENGTH,ie),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Mn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,li),Dt===0&&K.generateMipmaps&&V.generateMipmap(Ue),Yt.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?q.setTextureCube(A,0):A.isData3DTexture?q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?q.setTexture2DArray(A,0):q.setTexture2D(A,0),Yt.unbindTexture()},this.resetState=function(){H=0,Y=0,J=null,Yt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}var Ht=(o=>(o[o.IDLE=0]="IDLE",o[o.WALK=1]="WALK",o[o.WALK_FORWARD=2]="WALK_FORWARD",o[o.WALK_BACK=3]="WALK_BACK",o[o.DUCK=4]="DUCK",o[o.BLOCK=5]="BLOCK",o[o.BLOCK_LOW=6]="BLOCK_LOW",o[o.DASH_FORWARD=7]="DASH_FORWARD",o[o.DASH_BACK=8]="DASH_BACK",o[o.ATTACK_PUNCH=9]="ATTACK_PUNCH",o[o.ATTACK_KICK=10]="ATTACK_KICK",o[o.ATTACK_LOW=11]="ATTACK_LOW",o[o.HIT=12]="HIT",o[o.STUNNED=13]="STUNNED",o[o.DEAD=14]="DEAD",o[o.VICTORY=15]="VICTORY",o))(Ht||{});const We={MAX_HEALTH:100,ROUND_TIME:60,GRAVITY:80,GROUND_Y:0,JUMP_FORCE:22,MOVE_SPEED:4.5,DASH_SPEED:18,ACCELERATION:60,DRAG:40,HIT_STUN_FRAMES:30},zh={[Ht.ATTACK_PUNCH]:{startup:6,active:4,recovery:10,damage:8,stun:15,knockback:1,blockStun:8,hitLevel:"high"},[Ht.ATTACK_KICK]:{startup:12,active:6,recovery:18,damage:14,stun:25,knockback:3.5,blockStun:15,hitLevel:"mid"},[Ht.ATTACK_LOW]:{startup:10,active:6,recovery:14,damage:10,stun:18,knockback:2,blockStun:10,hitLevel:"low"}};class F_{constructor(t,i){this.hp=We.MAX_HEALTH,this.state=Ht.IDLE,this.velocity=new Z,this.facing=1,this.stateTimer=0,this.attackCooldown=0,this.flashTimer=0,this.stunDuration=0,this.hitStopTimer=0,this.lastTapTime=0,this.lastKey="",this.dashTimer=0,this.dashVariant=0,this.aiTimer=0,this.aiAction="IDLE",this.isElectric=!1,this.isPlayer1=t,this.mesh=new vi,this.bodyParts={};const s=!this.isPlayer1,l=new Dd({color:s?9127187:4473924,roughness:.8,metalness:.1}),c=new Dd({color:s?13808780:15658734,roughness:.8,metalness:0}),h=s?.9:1.25;this.mesh.scale.set(h,h,h);const d=(w,y,_)=>{const D=new Wd(w,y,4,8),L=new Dn(D,_);return L.castShadow=!0,L};if(this.bodyParts.torso=new vi,this.bodyParts.torso.position.y=1.05,this.mesh.add(this.bodyParts.torso),s){const w=d(.18,.55,l);this.bodyParts.torso.add(w);const y=d(.14,.2,c);y.position.set(.1,.15,.12),y.rotation.z=-.1,this.bodyParts.torso.add(y);const _=d(.14,.2,c);_.position.set(-.1,.15,.12),_.rotation.z=.1,this.bodyParts.torso.add(_);const D=d(.12,.3,c);D.position.set(0,-.15,.1),this.bodyParts.torso.add(D)}else{const w=d(.25,.6,l);this.bodyParts.torso.add(w);const y=d(.22,.25,c);y.position.set(.15,.15,.15),y.rotation.z=-.2,y.rotation.y=.2,this.bodyParts.torso.add(y);const _=d(.22,.25,c);_.position.set(-.15,.15,.15),_.rotation.z=.2,_.rotation.y=-.2,this.bodyParts.torso.add(_);const D=d(.18,.35,c);D.position.set(0,-.2,.12),this.bodyParts.torso.add(D);const L=d(.25,.5,l);L.position.set(0,0,-.1),L.scale.x=1.8,this.bodyParts.torso.add(L)}this.bodyParts.head=new vi,this.bodyParts.head.position.set(0,s?.45:.55,0),this.bodyParts.torso.add(this.bodyParts.head);const m=s?.2:.25,p=d(m,m*.5,l);this.bodyParts.head.add(p);const x=new qd(.08,.15,4),g=new Dn(x,l);g.position.set(.15,.25,0),g.rotation.z=-.2;const S=new Dn(x,l);if(S.position.set(-.15,.25,0),S.rotation.z=.2,s){const w=new Xc(.12,.12,.05);g.geometry=w,g.rotation.x=1.57,S.geometry=w,S.rotation.x=1.57}this.bodyParts.head.add(g),this.bodyParts.head.add(S);const E=w=>{const y=w==="L"?-1:1,_=new vi;_.position.set(y*(s?.25:.4),s?.35:.4,0),this.bodyParts.torso.add(_);const L=d(s?.13:.22,.1,l);_.add(L);const U=new vi;U.position.y=-.2,_.add(U);const I=d(s?.09:.16,.25,l);U.add(I);const N=new vi;N.position.set(0,-.25,0),_.add(N);const C=d(s?.08:.14,.25,s?l:c);C.position.y=-.15,N.add(C);const H=s?.1:.16,Y=new Dn(new Ls(H,H,H),c);Y.position.y=-.35,Y.castShadow=!0,N.add(Y),w==="L"?(this.bodyParts.armL=_,this.bodyParts.elbowL=N,this.bodyParts.upperArmL=I,this.bodyParts.lowerArmL=C,this.bodyParts.fistL=Y):(this.bodyParts.armR=_,this.bodyParts.elbowR=N,this.bodyParts.upperArmR=I,this.bodyParts.lowerArmR=C,this.bodyParts.fistR=Y)};E("L"),E("R");const R=w=>{const y=w==="L"?-1:1,_=new vi;_.position.set(y*(s?.12:.18),-.3,0),this.bodyParts.torso.add(_);const L=d(s?.14:.23,.4,l);L.position.y=-.25,_.add(L);const U=new vi;U.position.set(0,-.45,0),_.add(U);const I=d(s?.11:.17,.4,l);I.position.y=-.2,U.add(I);const N=new Dn(new Ls(s?.15:.22,.1,s?.25:.35),c);N.position.set(0,-.45,.05),U.add(N),w==="L"?(this.bodyParts.legL=_,this.bodyParts.kneeL=U,this.bodyParts.thighL=L,this.bodyParts.shinL=I,this.bodyParts.bootL=N):(this.bodyParts.legR=_,this.bodyParts.kneeR=U,this.bodyParts.thighR=L,this.bodyParts.shinR=I,this.bodyParts.bootR=N)};R("L"),R("R"),this.mesh.position.set(t?-6:6,We.GROUND_Y,0)}handleInputEvent(t){const i=Date.now();t===this.lastKey&&i-this.lastTapTime<250?(this.triggerDash(t),this.lastKey=""):(this.lastKey=t,this.lastTapTime=i)}triggerDash(t){this.dashVariant=Math.floor(Math.random()*3),t==="KeyD"?(this.state=Ht.DASH_FORWARD,this.velocity.x=We.DASH_SPEED,this.dashTimer=30):t==="KeyA"&&(this.state=Ht.DASH_BACK,this.velocity.x=-18,this.dashTimer=30)}update(t,i,s,l){if(this.state===Ht.DEAD){this.animateDead();return}if(this.hitStopTimer>0){this.hitStopTimer-=t*60,this.handleVisuals();return}(this.state===Ht.STUNNED||this.state===Ht.HIT)&&(this.stunDuration-=t*60,this.stunDuration<=0&&(this.state=Ht.IDLE)),this.handlePhysics(s,t),this.isPlayer1?this.handleInput(i,t,s):this.handleAI(s,t),this.handleState(s,t),this.updateAnimations(t),this.handleVisuals()}handleInput(t,i,s){if(this.state===Ht.HIT||this.state===Ht.STUNNED||this.state===Ht.VICTORY||this.state===Ht.DEAD)return;if(this.isAttacking()){this.velocity.x-=this.velocity.x*We.DRAG*i,this.velocity.z-=this.velocity.z*We.DRAG*i;return}if(this.attackCooldown>0&&(this.attackCooldown-=i*60),this.attackCooldown<=0){if(t.keys.Space&&this.mesh.position.y<=We.GROUND_Y+.1&&(this.velocity.y=We.JUMP_FORCE),t.keys.KeyC||t.keys.ControlLeft){if(t.keys.KeyF||t.keys.KeyJ||t.mouseLeft||t.keys.KeyG||t.keys.KeyK||t.mouseRight){this.attack(Ht.ATTACK_LOW);return}let d=0;t.isPressed("KeyA")&&(d=-1),t.isPressed("KeyD")&&(d=1);const m=Math.sign(s.mesh.position.x-this.mesh.position.x)||1;d===-m?this.state=Ht.BLOCK_LOW:this.state=Ht.DUCK,this.velocity.x=0,this.velocity.z=0;return}if(t.keys.KeyF||t.keys.KeyJ||t.mouseLeft){this.attack(Ht.ATTACK_PUNCH);return}if(t.keys.KeyG||t.keys.KeyK||t.mouseRight){this.attack(Ht.ATTACK_KICK);return}}let c=0,h=0;if(t.isPressed("KeyA")&&(c=-1),t.isPressed("KeyD")&&(c=1),t.isPressed("KeyW")&&(h=-1),t.isPressed("KeyS")&&(h=1),this.state===Ht.DASH_FORWARD||this.state===Ht.DASH_BACK){this.dashTimer-=i*60,this.dashTimer<=0&&(this.state=Ht.IDLE);return}if(c!==0||h!==0){const d=Math.sign(s.mesh.position.x-this.mesh.position.x)||1;c===d?this.state=Ht.WALK_FORWARD:c===-d?this.state=Ht.WALK_BACK:this.state=Ht.WALK;const m=c*We.MOVE_SPEED,p=h*We.MOVE_SPEED*.6;this.velocity.x<m?(this.velocity.x+=We.ACCELERATION*i,this.velocity.x>m&&(this.velocity.x=m)):this.velocity.x>m&&(this.velocity.x-=We.ACCELERATION*i,this.velocity.x<m&&(this.velocity.x=m)),this.velocity.z<p?(this.velocity.z+=We.ACCELERATION*i,this.velocity.z>p&&(this.velocity.z=p)):this.velocity.z>p&&(this.velocity.z-=We.ACCELERATION*i,this.velocity.z<p&&(this.velocity.z=p))}else{this.state!==Ht.IDLE&&!this.isAttacking()&&(this.state=Ht.IDLE);const d=We.DRAG*i;this.velocity.x>0?this.velocity.x=Math.max(0,this.velocity.x-d):this.velocity.x<0&&(this.velocity.x=Math.min(0,this.velocity.x+d)),this.velocity.z>0?this.velocity.z=Math.max(0,this.velocity.z-d):this.velocity.z<0&&(this.velocity.z=Math.min(0,this.velocity.z+d))}}handleAI(t,i){if(this.state===Ht.HIT||this.state===Ht.STUNNED||this.state===Ht.VICTORY||this.state===Ht.DEAD||this.isAttacking())return;if(this.attackCooldown>0&&(this.attackCooldown-=i*60),this.aiTimer++,this.aiTimer>45)if(this.aiTimer=0,this.mesh.position.distanceTo(t.mesh.position)<2.5){const h=Math.random();h<.3?this.aiAction="ATTACK":h<.6?this.aiAction="BLOCK":this.aiAction="MOVE_BACK"}else this.aiAction="MOVE_FORWARD";if(this.aiAction==="ATTACK"&&this.attackCooldown<=0){const c=Math.random();c<.33?this.attack(Ht.ATTACK_PUNCH):c<.66?this.attack(Ht.ATTACK_KICK):this.attack(Ht.ATTACK_LOW),this.aiAction="IDLE";return}if(this.aiAction==="BLOCK"){this.state=Ht.BLOCK,this.velocity.set(0,0,0);return}let l=0;if(this.aiAction==="MOVE_FORWARD"&&(l=Math.sign(t.mesh.position.x-this.mesh.position.x)),this.aiAction==="MOVE_BACK"&&(l=-Math.sign(t.mesh.position.x-this.mesh.position.x)),l!==0){this.state=Ht.WALK;const c=l*We.MOVE_SPEED;this.velocity.x+=(c-this.velocity.x)*5*i}else this.state=Ht.IDLE,this.velocity.x*=.8}attack(t){this.state=t,this.stateTimer=0,this.velocity.set(0,0,0)}handleState(t,i){if(this.stateTimer+=i*60,this.isAttacking()){const l=zh[this.state];if(l){const c=l.startup,h=l.active,d=l.recovery,m=c+h+d;this.stateTimer>c&&this.stateTimer<=c+h&&t.hitStopTimer<=0&&t.state!==Ht.DEAD&&this.checkHit(t,l),this.stateTimer>=m&&(this.state=Ht.IDLE)}else this.state=Ht.IDLE}const s=new Z(t.mesh.position.x,this.mesh.position.y,t.mesh.position.z);this.mesh.lookAt(s)}checkHit(t,i){const s=new Z,l=this.state===Ht.ATTACK_PUNCH?1.5:2,c=new Z().subVectors(t.mesh.position,this.mesh.position).normalize();s.copy(this.mesh.position).add(c.multiplyScalar(1));const h=l*l;if(this.mesh.position.distanceToSquared(t.mesh.position)<h*1.5){let m=!1,p=!1;const x=t.state===Ht.BLOCK||t.state===Ht.WALK_BACK,g=t.state===Ht.BLOCK_LOW,S=t.state===Ht.DUCK||t.state===Ht.BLOCK_LOW;if(i.hitLevel==="high"?S?p=!0:x&&(m=!0):i.hitLevel==="mid"?(x&&(m=!0),g&&(m=!1)):i.hitLevel==="low"&&g&&(m=!0),p)return;if(this.hitStopTimer=8,t.hitStopTimer=8,m){t.takeDamage(i.damage*.1,this.mesh.position,!0,!1,!1,i);return}const E=t.isAttacking(),R=this.state===Ht.ATTACK_KICK||E&&i.hitLevel==="mid";t.takeDamage(i.damage,this.mesh.position,!1,R,E,i)}}takeDamage(t,i,s,l,c,h){let d=s?0:t;if(c&&(d*=1.25),this.hp=Math.max(0,this.hp-d),this.hp<=0){this.state=Ht.DEAD;return}this.state=s?(h==null?void 0:h.hitLevel)==="low"?Ht.BLOCK_LOW:Ht.BLOCK:Ht.HIT;let m=h?s?h.blockStun:h.stun:We.HIT_STUN_FRAMES;c&&!s&&(m+=10),this.stunDuration=m,this.flashTimer=10;const p=new Z().subVectors(this.mesh.position,i).normalize();p.y=0,p.normalize();let x=(h==null?void 0:h.knockback)||1;s&&(x*=.5),c&&!s&&(x*=1.2),this.velocity.add(p.multiplyScalar(x*5))}handlePhysics(t,i){this.mesh.position.add(this.velocity.clone().multiplyScalar(i)),this.mesh.position.y>We.GROUND_Y?this.velocity.y-=We.GRAVITY*i:(this.velocity.y<-10,this.velocity.y=0,this.mesh.position.y=We.GROUND_Y),this.mesh.position.x=Math.max(-15,Math.min(15,this.mesh.position.x)),this.mesh.position.z=Math.max(-8,Math.min(8,this.mesh.position.z));const s=new Z().subVectors(this.mesh.position,t.mesh.position);s.y=0;const l=s.length(),c=1,h=c+c;if(l<h&&l>.001){const d=h-l,m=s.normalize();this.mesh.position.add(m.multiplyScalar(d*.5))}}isAttacking(){return this.state===Ht.ATTACK_PUNCH||this.state===Ht.ATTACK_KICK||this.state===Ht.ATTACK_LOW}handleVisuals(){const t=this.state===Ht.HIT;this.bodyParts.torso.children[0].material.emissive.setHex(t&&this.flashTimer>0?11141120:0),this.flashTimer>0&&(this.flashTimer-=1)}updateAnimations(t){const i=Date.now()/1e3,s=!this.isPlayer1;if(this.state===Ht.IDLE){const l=Math.sin(i*3)*.05,c=s?-.2:.2;this.bodyParts.torso.rotation.y=c,this.bodyParts.torso.rotation.z=Math.sin(i*2)*.02,this.bodyParts.armL.rotation.z=.5,this.bodyParts.armL.rotation.x=.5+l,this.bodyParts.elbowL.rotation.x=-1.5,this.bodyParts.armR.rotation.z=-.5,this.bodyParts.armR.rotation.x=.5+l,this.bodyParts.elbowR.rotation.x=-1.5}if(this.state===Ht.WALK_FORWARD){const c=Math.sin(i*10)*.5,h=Math.sin(i*10+Math.PI)*.5;this.bodyParts.legL.rotation.x=c,this.bodyParts.legR.rotation.x=h,this.bodyParts.armL.rotation.x=-c*.5,this.bodyParts.armR.rotation.x=-h*.5}else this.state===Ht.WALK_BACK&&(this.bodyParts.legL.rotation.x=Math.sin(i*8)*.3,this.bodyParts.legR.rotation.x=Math.sin(i*8+Math.PI)*.3);if(this.state===Ht.DASH_FORWARD?(this.bodyParts.torso.rotation.x=.3,this.bodyParts.legL.rotation.x=-.5,this.bodyParts.legR.rotation.x=-.8):this.state===Ht.DASH_BACK&&(this.bodyParts.torso.rotation.x=-.2),this.state===Ht.ATTACK_PUNCH){const l=zh[this.state];if(l){const c=this.stateTimer/(l.startup+l.active+l.recovery);c<.2?(this.bodyParts.torso.rotation.y=-.5*this.facing,this.bodyParts.armR.rotation.x=-.5):c>=.2&&c<.5?(this.bodyParts.torso.rotation.y=.8*this.facing,this.bodyParts.armR.rotation.x=-1.57,this.bodyParts.armR.rotation.z=-.2*this.facing,this.bodyParts.elbowR.rotation.x=0):(this.bodyParts.armR.rotation.x=0,this.bodyParts.elbowR.rotation.x=-1.5)}}if(this.state===Ht.ATTACK_KICK){const l=zh[this.state];if(l){const c=this.stateTimer/(l.startup+l.active+l.recovery);c>=.3&&c<.6&&(this.bodyParts.torso.rotation.z=-.5*this.facing,this.bodyParts.legR.rotation.x=-1.8,this.bodyParts.legR.rotation.z=.5*this.facing,this.bodyParts.kneeR.rotation.x=0)}}if(this.mesh.position.y>We.GROUND_Y+.5&&this.elasticScale.set(.7,1.5,.7),this.mesh.position.y<=We.GROUND_Y&&this.velocity.y<-5&&this.elasticScale.set(1.5,.5,1.5),this.state===Ht.DEAD){this.elasticScale.set(2,.1,2),this.mesh.position.y=.1;return}this.state===Ht.HIT||this.state===Ht.STUNNED?(this.elasticScale.set(1+Math.random()*.4,1-Math.random()*.2,1+Math.random()*.4),this.bodyParts.head.scale.set(1.5,1.5,1.5)):this.bodyParts.head.scale.set(1,1,1)}animateDead(){this.mesh.rotation.x=-1.5,this.mesh.position.y=.2}}class eA{constructor(){this.keys={},this.mouseLeft=!1,this.mouseRight=!1,this.onKeyDownCallback=null,window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t)),window.addEventListener("mousedown",t=>this.onMouseDown(t)),window.addEventListener("mouseup",t=>this.onMouseUp(t)),window.addEventListener("contextmenu",t=>t.preventDefault())}onMouseDown(t){t.button===0&&(this.mouseLeft=!0),t.button===2&&(this.mouseRight=!0)}onMouseUp(t){t.button===0&&(this.mouseLeft=!1),t.button===2&&(this.mouseRight=!1)}onKeyDown(t){this.keys[t.code]||this.onKeyDownCallback&&this.onKeyDownCallback(t.code),this.keys[t.code]=!0}onKeyUp(t){this.keys[t.code]=!1}isPressed(t){return!!this.keys[t]}cleanup(){window.removeEventListener("keydown",t=>this.onKeyDown(t)),window.removeEventListener("keyup",t=>this.onKeyUp(t))}}class nA{constructor(t,i){this.animationId=0,this.lastTime=0,this.timeLeft=We.ROUND_TIME,this.particles=[],this.animate=c=>{this.animationId=requestAnimationFrame(this.animate);const h=(c-this.lastTime)/1e3;if(this.lastTime=c,this.p1.hp<=0||this.p2.hp<=0||this.timeLeft<=0){this.updateFighters(h,c),this.updateCamera(),this.renderer.render(this.scene,this.camera),this.broadcastState();return}const d=this.p1.hp,m=this.p2.hp;this.updateFighters(h,c),this.updateElectricFX(this.p1),this.updateElectricFX(this.p2),this.updateRain(),this.updateParticles(),this.updateCamera(),this.p1.hp<d&&this.createHitParticles(this.p1.mesh.position),this.p2.hp<m&&this.createHitParticles(this.p2.mesh.position),this.renderer.render(this.scene,this.camera),this.broadcastState()},this.handleResize=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},this.onStateChange=i,this.input=new eA,this.input.onKeyDownCallback=c=>{this.p1&&this.p1.handleInputEvent(c)},this.scene=new Xy,this.scene.background=new ge(15790320),this.scene.fog=new Gc(15790320,20,80),this.camera=new si(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,5,10),this.renderer=new tA({canvas:t,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0;const s=new iM(16777215,.6);this.scene.add(s);const l=new p_(16777198,1.2);l.position.set(10,20,10),l.castShadow=!0,l.shadow.mapSize.width=2048,l.shadow.mapSize.height=2048,this.scene.add(l),this.createEnvironment(),this.p1=new F_(!0,16724787),this.p2=new F_(!1,3355647),this.scene.add(this.p1.mesh),this.scene.add(this.p2.mesh),this.p2.mesh.rotation.y=-Math.PI,setInterval(()=>{this.p1.hp>0&&this.p2.hp>0&&this.timeLeft>0&&(this.timeLeft--,this.broadcastState())},1e3),this.lastTime=performance.now(),this.animate(this.lastTime),window.addEventListener("resize",this.handleResize)}createEnvironment(){this.scene.background=new ge(328976),this.scene.fog=new Gc(328976,10,40);const t=new Qo(100,100),i=new Dd({color:1118481,roughness:.1,metalness:.8}),s=new Dn(t,i);s.rotation.x=-Math.PI/2,s.position.y=-.01,s.receiveShadow=!0,this.scene.add(s);const l=new p_(4474077,.5);l.position.set(-5,10,-5),l.castShadow=!0,this.scene.add(l);const c=new eM(11197951,0,100);c.position.set(0,20,0),this.scene.add(c),this.thunderLight=c,this.createRain()}createRain(){const i=new jn,s=[];for(let h=0;h<1500;h++)s.push((Math.random()-.5)*40,Math.random()*20,(Math.random()-.5)*20);i.setAttribute("position",new mn(s,3));const l=new mv({color:11184810,size:.1,transparent:!0,opacity:.6}),c=new jy(i,l);this.scene.add(c),this.rainSystem=c}updateRain(){if(!this.rainSystem)return;const t=this.rainSystem.geometry.attributes.position.array;for(let i=1;i<t.length;i+=3)t[i]-=.5,t[i]<0&&(t[i]=20);this.rainSystem.geometry.attributes.position.needsUpdate=!0,Math.random()<.005?(this.thunderLight.intensity=20,this.scene.background=new ge(2236996)):(this.thunderLight.intensity*=.8,this.scene.background=new ge(328976))}updateElectricFX(t){if(t.isElectric&&Math.random()<.3){const i=t.mesh.position.clone();i.y+=1,i.x+=t.facing*.5,this.createElectricParticle(i)}}createElectricParticle(t){const i=new Kd(.1+Math.random()*.2),s=new Hc({color:65535}),l=new Dn(i,s);l.position.copy(t),l.position.addScalar((Math.random()-.5)*.5);const c=new Z(0,.1,0);this.scene.add(l),this.particles.push({mesh:l,life:5,velocity:c})}createHitParticles(t,i=!1){const s=i?20:12;for(let l=0;l<s;l++){const c=new Yd(i?.3:.2,0),h=i?65535:Math.random()>.5?16776960:16711935,d=new Hc({color:h}),m=new Dn(c,d);m.position.copy(t);const p=new Z((Math.random()-.5)*(i?8:4),Math.random()*(i?8:4),(Math.random()-.5)*(i?8:4));this.scene.add(m),this.particles.push({mesh:m,life:i?60:40,velocity:p})}}updateParticles(){for(let t=this.particles.length-1;t>=0;t--){const i=this.particles[t];i.life--,i.mesh.position.add(i.velocity),i.velocity.y-=.05,i.mesh.rotation.x+=.4,i.mesh.rotation.y+=.4,i.life<=0&&(this.scene.remove(i.mesh),this.particles.splice(t,1))}}updateFighters(t,i){this.p1.update(t,this.input,this.p2,i),this.p2.update(t,this.input,this.p1,i)}updateCamera(){const t=new Z().addVectors(this.p1.mesh.position,this.p2.mesh.position).multiplyScalar(.5),i=this.p1.mesh.position.distanceTo(this.p2.mesh.position),s=10,l=Math.min(20,Math.max(0,i-3)*.8),c=s+l,h=3.5+l*.1,d=new Z(t.x,h,c);this.camera.position.lerp(d,.1);const m=new Z(t.x,2.5,0);this.camera.lookAt(m)}broadcastState(){let t=null;this.p1.hp<=0?t="Player 2":this.p2.hp<=0?t="Player 1":this.timeLeft===0&&(t=this.p1.hp>this.p2.hp?"Player 1":this.p2.hp>this.p1.hp?"Player 2":"Draw"),this.onStateChange({p1Health:this.p1.hp,p2Health:this.p2.hp,timeLeft:this.timeLeft,gameOver:t!==null,winner:t})}cleanup(){this.input.cleanup(),window.removeEventListener("resize",this.handleResize),cancelAnimationFrame(this.animationId)}}const iA=({gameState:o})=>{const t=o.p1Health/We.MAX_HEALTH*100,i=o.p2Health/We.MAX_HEALTH*100;return Ne.jsxs("div",{className:"absolute inset-0 pointer-events-none select-none overflow-hidden",children:[Ne.jsxs("div",{className:"absolute top-0 w-full p-4 flex justify-between items-start",children:[Ne.jsxs("div",{className:"w-2/5 max-w-md relative",children:[Ne.jsx("div",{className:"text-gray-400 font-bold text-xl mb-1 ml-1 tracking-widest italic",style:{textShadow:"0px 0px 5px grey"},children:"TOM (MISHIMA)"}),Ne.jsx("div",{className:"h-8 w-full bg-gray-900 border-2 border-gray-500 skew-x-[-15deg] overflow-hidden relative shadow-[0_0_15px_rgba(255,255,255,0.3)]",children:Ne.jsx("div",{className:"h-full bg-gradient-to-r from-gray-500 to-white transition-all duration-200",style:{width:`${t}%`}})})]}),Ne.jsx("div",{className:"w-24 h-20 bg-black/80 border-b-4 border-yellow-500 flex items-center justify-center relative top-[-5px] shadow-lg z-10 clip-path-polygon",children:Ne.jsx("span",{className:`text-5xl font-black tracking-tighter ${o.timeLeft<10?"text-red-500 animate-pulse":"text-yellow-400"}`,style:{textShadow:"0 2px 0 black"},children:o.timeLeft})}),Ne.jsxs("div",{className:"w-2/5 max-w-md relative",children:[Ne.jsx("div",{className:"text-yellow-600 font-bold text-xl mb-1 mr-1 text-right tracking-widest italic",style:{textShadow:"0px 0px 5px orange"},children:"JERRY (KAZAMA)"}),Ne.jsx("div",{className:"h-8 w-full bg-gray-900 border-2 border-yellow-700 skew-x-[15deg] overflow-hidden relative shadow-[0_0_15px_rgba(255,165,0,0.3)]",children:Ne.jsx("div",{className:"h-full bg-gradient-to-l from-yellow-600 to-white transition-all duration-200 float-right",style:{width:`${i}%`}})})]})]}),Ne.jsxs("div",{className:"absolute bottom-4 left-4 text-white text-xs opacity-50 bg-black/50 p-2 rounded",children:[Ne.jsx("p",{className:"font-bold mb-1",children:"P1 (Red)"}),Ne.jsx("p",{children:"WASD - Move"}),Ne.jsx("p",{children:"F - Punch"}),Ne.jsx("p",{children:"G - Kick"})]}),Ne.jsxs("div",{className:"absolute bottom-4 right-4 text-white text-xs opacity-50 bg-black/50 p-2 rounded text-right",children:[Ne.jsx("p",{className:"font-bold mb-1",children:"P2 (Blue)"}),Ne.jsx("p",{children:"Arrows - Move"}),Ne.jsx("p",{children:"K - Punch"}),Ne.jsx("p",{children:"L - Kick"})]}),o.gameOver&&Ne.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-50 animate-in fade-in duration-500",children:[Ne.jsx("h1",{className:"text-8xl font-black text-yellow-500 mb-4 tracking-tighter",style:{textShadow:"0 0 20px orange"},children:"K.O."}),Ne.jsxs("h2",{className:"text-4xl text-white font-bold uppercase tracking-widest mb-8",children:[o.winner," WINS"]}),Ne.jsx("button",{className:"pointer-events-auto px-8 py-3 bg-white text-black font-bold text-xl hover:bg-gray-200 hover:scale-105 transition-transform",onClick:()=>window.location.reload(),children:"REMATCH"})]})]})},aA=()=>{const o=Go.useRef(null),t=Go.useRef(null),[i,s]=Go.useState({p1Health:We.MAX_HEALTH,p2Health:We.MAX_HEALTH,timeLeft:We.ROUND_TIME,gameOver:!1,winner:null});return Go.useEffect(()=>(o.current&&!t.current&&(t.current=new nA(o.current,l=>{s(c=>c.timeLeft!==l.timeLeft||c.p1Health!==l.p1Health||c.p2Health!==l.p2Health||c.gameOver!==l.gameOver?l:c)})),()=>{t.current&&(t.current.cleanup(),t.current=null)}),[]),Ne.jsxs("div",{className:"relative w-screen h-screen bg-black overflow-hidden",children:[Ne.jsx("canvas",{ref:o,className:"block w-full h-full"}),Ne.jsx(iA,{gameState:i})]})},Ev=document.getElementById("root");if(!Ev)throw new Error("Could not find root element to mount to");const sA=FS.createRoot(Ev);sA.render(Ne.jsx(US.StrictMode,{children:Ne.jsx(aA,{})}));
