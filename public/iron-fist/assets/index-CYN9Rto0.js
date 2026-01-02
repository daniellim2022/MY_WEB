(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function k_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var eh={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function US(){if(Ug)return No;Ug=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var Lg;function LS(){return Lg||(Lg=1,eh.exports=US()),eh.exports}var Ne=LS(),nh={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function NS(){if(Ng)return se;Ng=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=S&&P[S]||P["@@iterator"],typeof P=="function"?P:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function x(P,at,gt){this.props=P,this.context=at,this.refs=y,this.updater=gt||A}x.prototype.isReactComponent={},x.prototype.setState=function(P,at){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,at,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function L(){}L.prototype=x.prototype;function U(P,at,gt){this.props=P,this.context=at,this.refs=y,this.updater=gt||A}var D=U.prototype=new L;D.constructor=U,b(D,x.prototype),D.isPureReactComponent=!0;var z=Array.isArray;function B(){}var O={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function T(P,at,gt){var bt=gt.ref;return{$$typeof:o,type:P,key:at,ref:bt!==void 0?bt:null,props:gt}}function w(P,at){return T(P.type,at,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function Z(P){var at={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(gt){return at[gt]})}var tt=/\/+/g;function ut(P,at){return typeof P=="object"&&P!==null&&P.key!=null?Z(""+P.key):at.toString(36)}function lt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(B,B):(P.status="pending",P.then(function(at){P.status==="pending"&&(P.status="fulfilled",P.value=at)},function(at){P.status==="pending"&&(P.status="rejected",P.reason=at)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function I(P,at,gt,bt,Bt){var it=typeof P;(it==="undefined"||it==="boolean")&&(P=null);var ft=!1;if(P===null)ft=!0;else switch(it){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(P.$$typeof){case o:case t:ft=!0;break;case v:return ft=P._init,I(ft(P._payload),at,gt,bt,Bt)}}if(ft)return Bt=Bt(P),ft=bt===""?"."+ut(P,0):bt,z(Bt)?(gt="",ft!=null&&(gt=ft.replace(tt,"$&/")+"/"),I(Bt,at,gt,"",function(Ht){return Ht})):Bt!=null&&(G(Bt)&&(Bt=w(Bt,gt+(Bt.key==null||P&&P.key===Bt.key?"":(""+Bt.key).replace(tt,"$&/")+"/")+ft)),at.push(Bt)),1;ft=0;var wt=bt===""?".":bt+":";if(z(P))for(var kt=0;kt<P.length;kt++)bt=P[kt],it=wt+ut(bt,kt),ft+=I(bt,at,gt,it,Bt);else if(kt=M(P),typeof kt=="function")for(P=kt.call(P),kt=0;!(bt=P.next()).done;)bt=bt.value,it=wt+ut(bt,kt++),ft+=I(bt,at,gt,it,Bt);else if(it==="object"){if(typeof P.then=="function")return I(lt(P),at,gt,bt,Bt);throw at=String(P),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ft}function H(P,at,gt){if(P==null)return P;var bt=[],Bt=0;return I(P,bt,"","",function(it){return at.call(gt,it,Bt++)}),bt}function st(P){if(P._status===-1){var at=P._result;at=at(),at.then(function(gt){(P._status===0||P._status===-1)&&(P._status=1,P._result=gt)},function(gt){(P._status===0||P._status===-1)&&(P._status=2,P._result=gt)}),P._status===-1&&(P._status=0,P._result=at)}if(P._status===1)return P._result.default;throw P._result}var yt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},xt={map:H,forEach:function(P,at,gt){H(P,function(){at.apply(this,arguments)},gt)},count:function(P){var at=0;return H(P,function(){at++}),at},toArray:function(P){return H(P,function(at){return at})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return se.Activity=_,se.Children=xt,se.Component=x,se.Fragment=i,se.Profiler=l,se.PureComponent=U,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,se.__COMPILER_RUNTIME={__proto__:null,c:function(P){return O.H.useMemoCache(P)}},se.cache=function(P){return function(){return P.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(P,at,gt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var bt=b({},P.props),Bt=P.key;if(at!=null)for(it in at.key!==void 0&&(Bt=""+at.key),at)!X.call(at,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&at.ref===void 0||(bt[it]=at[it]);var it=arguments.length-2;if(it===1)bt.children=gt;else if(1<it){for(var ft=Array(it),wt=0;wt<it;wt++)ft[wt]=arguments[wt+2];bt.children=ft}return T(P.type,Bt,bt)},se.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},se.createElement=function(P,at,gt){var bt,Bt={},it=null;if(at!=null)for(bt in at.key!==void 0&&(it=""+at.key),at)X.call(at,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Bt[bt]=at[bt]);var ft=arguments.length-2;if(ft===1)Bt.children=gt;else if(1<ft){for(var wt=Array(ft),kt=0;kt<ft;kt++)wt[kt]=arguments[kt+2];Bt.children=wt}if(P&&P.defaultProps)for(bt in ft=P.defaultProps,ft)Bt[bt]===void 0&&(Bt[bt]=ft[bt]);return T(P,it,Bt)},se.createRef=function(){return{current:null}},se.forwardRef=function(P){return{$$typeof:d,render:P}},se.isValidElement=G,se.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:st}},se.memo=function(P,at){return{$$typeof:p,type:P,compare:at===void 0?null:at}},se.startTransition=function(P){var at=O.T,gt={};O.T=gt;try{var bt=P(),Bt=O.S;Bt!==null&&Bt(gt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(B,yt)}catch(it){yt(it)}finally{at!==null&&gt.types!==null&&(at.types=gt.types),O.T=at}},se.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},se.use=function(P){return O.H.use(P)},se.useActionState=function(P,at,gt){return O.H.useActionState(P,at,gt)},se.useCallback=function(P,at){return O.H.useCallback(P,at)},se.useContext=function(P){return O.H.useContext(P)},se.useDebugValue=function(){},se.useDeferredValue=function(P,at){return O.H.useDeferredValue(P,at)},se.useEffect=function(P,at){return O.H.useEffect(P,at)},se.useEffectEvent=function(P){return O.H.useEffectEvent(P)},se.useId=function(){return O.H.useId()},se.useImperativeHandle=function(P,at,gt){return O.H.useImperativeHandle(P,at,gt)},se.useInsertionEffect=function(P,at){return O.H.useInsertionEffect(P,at)},se.useLayoutEffect=function(P,at){return O.H.useLayoutEffect(P,at)},se.useMemo=function(P,at){return O.H.useMemo(P,at)},se.useOptimistic=function(P,at){return O.H.useOptimistic(P,at)},se.useReducer=function(P,at,gt){return O.H.useReducer(P,at,gt)},se.useRef=function(P){return O.H.useRef(P)},se.useState=function(P){return O.H.useState(P)},se.useSyncExternalStore=function(P,at,gt){return O.H.useSyncExternalStore(P,at,gt)},se.useTransition=function(){return O.H.useTransition()},se.version="19.2.3",se}var Og;function Pd(){return Og||(Og=1,nh.exports=NS()),nh.exports}var ko=Pd();const OS=k_(ko);var ih={exports:{}},Oo={},ah={exports:{}},sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function PS(){return Pg||(Pg=1,(function(o){function t(I,H){var st=I.length;I.push(H);t:for(;0<st;){var yt=st-1>>>1,xt=I[yt];if(0<l(xt,H))I[yt]=H,I[st]=xt,st=yt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var H=I[0],st=I.pop();if(st!==H){I[0]=st;t:for(var yt=0,xt=I.length,P=xt>>>1;yt<P;){var at=2*(yt+1)-1,gt=I[at],bt=at+1,Bt=I[bt];if(0>l(gt,st))bt<xt&&0>l(Bt,gt)?(I[yt]=Bt,I[bt]=st,yt=bt):(I[yt]=gt,I[at]=st,yt=at);else if(bt<xt&&0>l(Bt,st))I[yt]=Bt,I[bt]=st,yt=bt;else break t}}return H}function l(I,H){var st=I.sortIndex-H.sortIndex;return st!==0?st:I.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,_=null,S=3,M=!1,A=!1,b=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=I)s(p),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(p)}}function z(I){if(b=!1,D(I),!A)if(i(m)!==null)A=!0,B||(B=!0,Z());else{var H=i(p);H!==null&&lt(z,H.startTime-I)}}var B=!1,O=-1,X=5,T=-1;function w(){return y?!0:!(o.unstable_now()-T<X)}function G(){if(y=!1,B){var I=o.unstable_now();T=I;var H=!0;try{t:{A=!1,b&&(b=!1,L(O),O=-1),M=!0;var st=S;try{e:{for(D(I),_=i(m);_!==null&&!(_.expirationTime>I&&w());){var yt=_.callback;if(typeof yt=="function"){_.callback=null,S=_.priorityLevel;var xt=yt(_.expirationTime<=I);if(I=o.unstable_now(),typeof xt=="function"){_.callback=xt,D(I),H=!0;break e}_===i(m)&&s(m),D(I)}else s(m);_=i(m)}if(_!==null)H=!0;else{var P=i(p);P!==null&&lt(z,P.startTime-I),H=!1}}break t}finally{_=null,S=st,M=!1}H=void 0}}finally{H?Z():B=!1}}}var Z;if(typeof U=="function")Z=function(){U(G)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ut=tt.port2;tt.port1.onmessage=G,Z=function(){ut.postMessage(null)}}else Z=function(){x(G,0)};function lt(I,H){O=x(function(){I(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(I){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var st=S;S=H;try{return I()}finally{S=st}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var st=S;S=I;try{return H()}finally{S=st}},o.unstable_scheduleCallback=function(I,H,st){var yt=o.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?yt+st:yt):st=yt,I){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=st+xt,I={id:v++,callback:H,priorityLevel:I,startTime:st,expirationTime:xt,sortIndex:-1},st>yt?(I.sortIndex=st,t(p,I),i(m)===null&&I===i(p)&&(b?(L(O),O=-1):b=!0,lt(z,st-yt))):(I.sortIndex=xt,t(m,I),A||M||(A=!0,B||(B=!0,Z()))),I},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(I){var H=S;return function(){var st=S;S=H;try{return I.apply(this,arguments)}finally{S=st}}}})(sh)),sh}var zg;function zS(){return zg||(zg=1,ah.exports=PS()),ah.exports}var rh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function IS(){if(Ig)return On;Ig=1;var o=Pd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},On.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.3",On}var Bg;function BS(){if(Bg)return rh.exports;Bg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),rh.exports=IS(),rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function FS(){if(Fg)return Oo;Fg=1;var o=zS(),t=Pd(),i=BS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var g=!1,R=u.child;R;){if(R===a){g=!0,a=u,r=f;break}if(R===r){g=!0,r=u,a=f;break}R=R.sibling}if(!g){for(R=f.child;R;){if(R===a){g=!0,a=f,r=u;break}if(R===r){g=!0,r=f,a=u;break}R=R.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case z:return"Suspense";case B:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case U:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var lt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function P(e){return{current:e}}function at(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function gt(e,n){xt++,yt[xt]=e.current,e.current=n}var bt=P(null),Bt=P(null),it=P(null),ft=P(null);function wt(e,n){switch(gt(it,n),gt(Bt,e),gt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?tg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=tg(n),e=eg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(bt),gt(bt,e)}function kt(){at(bt),at(Bt),at(it)}function Ht(e){e.memoizedState!==null&&gt(ft,e);var n=bt.current,a=eg(n,e.type);n!==a&&(gt(Bt,e),gt(bt,a))}function he(e){Bt.current===e&&(at(bt),at(Bt)),ft.current===e&&(at(ft),wo._currentValue=st)}var tn,_e;function de(e){if(tn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);tn=n&&n[1]||"",_e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+tn+e+_e}var we=!1;function re(e,n){if(!e||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var nt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){nt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],R=f[1];if(g&&R){var F=g.split(`
`),$=R.split(`
`);for(u=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(r===F.length||u===$.length)for(r=F.length-1,u=$.length-1;1<=r&&0<=u&&F[r]!==$[u];)u--;for(;1<=r&&0<=u;r--,u--)if(F[r]!==$[u]){if(r!==1||u!==1)do if(r--,u--,0>u||F[r]!==$[u]){var ht=`
`+F[r].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=r&&0<=u);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?de(a):""}function en(e,n){switch(e.tag){case 26:case 27:case 5:return de(e.type);case 16:return de("Lazy");case 13:return e.child!==n&&n!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return de("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=en(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ze=Object.prototype.hasOwnProperty,Ee=o.unstable_scheduleCallback,Oe=o.unstable_cancelCallback,Yt=o.unstable_shouldYield,N=o.unstable_requestPaint,E=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,jt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Xt=o.log,ee=o.unstable_setDisableYieldValue,Mt=null,Et=null;function zt(e){if(typeof Xt=="function"&&ee(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:W,Ct=Math.log,le=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ct(e)/le|0)|0}var Ut=256,Tt=262144,Pt=4194304;function St(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=St(r):(g&=R,g!==0?u=St(g):a||(a=R&~e,a!==0&&(u=St(a))))):(R=r&~f,R!==0?u=St(R):g!==0?u=St(g):a||(a=r&~e,a!==0&&(u=St(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function At(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,n,a,r,u,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,F=e.expirationTimes,$=e.hiddenUpdates;for(a=g&~a;0<a;){var ht=31-Ot(a),mt=1<<ht;R[ht]=0,F[ht]=-1;var nt=$[ht];if(nt!==null)for($[ht]=null,ht=0;ht<nt.length;ht++){var ot=nt[ht];ot!==null&&(ot.lane&=-536870913)}a&=~mt}r!==0&&$o(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function $o(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ot(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Hr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ot(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Ns(e,n){var a=n&-n;return a=(a&42)!==0?1:Gr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Gr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Os(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vr(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Tg(e.type))}function Li(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var li=Math.random().toString(36).slice(2),ln="__reactFiber$"+li,Mn="__reactProps$"+li,yi="__reactContainer$"+li,Ps="__reactEvents$"+li,zs="__reactListeners$"+li,tl="__reactHandles$"+li,kr="__reactResources$"+li,is="__reactMarker$"+li;function Xr(e){delete e[ln],delete e[Mn],delete e[Ps],delete e[zs],delete e[tl]}function Ma(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[yi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=lg(e);e!==null;){if(a=e[ln])return a;e=lg(e)}return n}e=a,a=e.parentNode}return null}function Ea(e){if(e=e[ln]||e[yi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function as(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ta(e){var n=e[kr];return n||(n=e[kr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function C(e){e[is]=!0}var Y=new Set,rt={};function et(e,n){Q(e,n),Q(e+"Capture",n)}function Q(e,n){for(rt[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Lt={};function Gt(e){return Ze.call(Lt,e)?!0:Ze.call(It,e)?!1:Dt.test(e)?Lt[e]=!0:(It[e]=!0,!1)}function Wt(e,n,a){if(Gt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){if(!e._valueTracker){var n=De(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function Pe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=De(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Zt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function ae(e){return e.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(e,n,a,r,u,f,g,R){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+$t(n)):e.value!==""+$t(n)&&(e.value=""+$t(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?Tn(e,g,$t(n)):a!=null?Tn(e,g,$t(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+$t(R):e.removeAttribute("name")}function Yi(e,n,a,r,u,f,g,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(e);return}a=a!=null?""+$t(a):"",n=n!=null?""+$t(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Ye(e)}function Tn(e,n,a){n==="number"&&Zt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ci(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+$t(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ie(e,n,a){if(n!=null&&(n=""+$t(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+$t(a):""}function bn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(lt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$t(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ye(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Is(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Rn(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Rn(e,f,n[f])}function Mi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(e){return Cv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bs=null,Fs=null;function $d(e){var n=Ea(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Mn]||null;if(!u)throw Error(s(90));En(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Pe(r)}break t;case"textarea":Ie(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ci(e,!!a.multiple,n,!1)}}}var $c=!1;function tp(e,n,a){if($c)return e(n,a);$c=!0;try{var r=e(n);return r}finally{if($c=!1,(Bs!==null||Fs!==null)&&(Vl(),Bs&&(n=Bs,e=Fs,Fs=Bs=null,$d(n),e)))for(n=0;n<e.length;n++)$d(e[n])}}function Wr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Mn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(ji)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){tu=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{tu=!1}var ba=null,eu=null,nl=null;function ep(){if(nl)return nl;var e,n=eu,a=n.length,r,u="value"in ba?ba.value:ba.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var g=a-e;for(r=1;r<=g&&n[a-r]===u[f-r];r++);return nl=u.slice(e,1<r?1-r:void 0)}function il(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function al(){return!0}function np(){return!1}function Vn(e){function n(a,r,u,f,g){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:np,this.isPropagationStopped=np,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Vn(ss),Yr=_({},ss,{view:0,detail:0}),wv=Vn(Yr),nu,iu,Kr,rl=_({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(nu=e.screenX-Kr.screenX,iu=e.screenY-Kr.screenY):iu=nu=0,Kr=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),ip=Vn(rl),Dv=_({},rl,{dataTransfer:0}),Uv=Vn(Dv),Lv=_({},Yr,{relatedTarget:0}),au=Vn(Lv),Nv=_({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Ov=Vn(Nv),Pv=_({},ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zv=Vn(Pv),Iv=_({},ss,{data:0}),ap=Vn(Iv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hv[e])?!!n[e]:!1}function su(){return Gv}var Vv=_({},Yr,{key:function(e){if(e.key){var n=Bv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=il(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?il(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?il(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kv=Vn(Vv),Xv=_({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=Vn(Xv),Wv=_({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),qv=Vn(Wv),Yv=_({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Vn(Yv),jv=_({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=Vn(jv),Qv=_({},ss,{newState:0,oldState:0}),Jv=Vn(Qv),$v=[9,13,27,32],ru=ji&&"CompositionEvent"in window,jr=null;ji&&"documentMode"in document&&(jr=document.documentMode);var tx=ji&&"TextEvent"in window&&!jr,rp=ji&&(!ru||jr&&8<jr&&11>=jr),op=" ",lp=!1;function cp(e,n){switch(e){case"keyup":return $v.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function ex(e,n){switch(e){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return e=n.data,e===op&&lp?null:e;default:return null}}function nx(e,n){if(Hs)return e==="compositionend"||!ru&&cp(e,n)?(e=ep(),nl=eu=ba=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ix[e.type]:n==="textarea"}function hp(e,n,a,r){Bs?Fs?Fs.push(r):Fs=[r]:Bs=r,n=jl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Zr=null,Qr=null;function ax(e){K0(e,0)}function ol(e){var n=as(e);if(Pe(n))return e}function dp(e,n){if(e==="change")return n}var pp=!1;if(ji){var ou;if(ji){var lu="oninput"in document;if(!lu){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),lu=typeof mp.oninput=="function"}ou=lu}else ou=!1;pp=ou&&(!document.documentMode||9<document.documentMode)}function gp(){Zr&&(Zr.detachEvent("onpropertychange",_p),Qr=Zr=null)}function _p(e){if(e.propertyName==="value"&&ol(Qr)){var n=[];hp(n,Qr,e,Jc(e)),tp(ax,n)}}function sx(e,n,a){e==="focusin"?(gp(),Zr=n,Qr=a,Zr.attachEvent("onpropertychange",_p)):e==="focusout"&&gp()}function rx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ol(Qr)}function ox(e,n){if(e==="click")return ol(n)}function lx(e,n){if(e==="input"||e==="change")return ol(n)}function cx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:cx;function Jr(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ze.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xp(e,n){var a=vp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vp(a)}}function Sp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zt(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ux=ji&&"documentMode"in document&&11>=document.documentMode,Gs=null,uu=null,$r=null,fu=!1;function Mp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Gs==null||Gs!==Zt(r)||(r=Gs,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Jr($r,r)||($r=r,r=jl(uu,"onSelect"),0<r.length&&(n=new sl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Gs)))}function rs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Vs={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},hu={},Ep={};ji&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function os(e){if(hu[e])return hu[e];if(!Vs[e])return e;var n=Vs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return hu[e]=n[a];return e}var Tp=os("animationend"),bp=os("animationiteration"),Ap=os("animationstart"),fx=os("transitionrun"),hx=os("transitionstart"),dx=os("transitioncancel"),Rp=os("transitionend"),Cp=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function Ei(e,n){Cp.set(e,n),et(n,[e])}var ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],ks=0,pu=0;function cl(){for(var e=ks,n=pu=ks=0;n<e;){var a=ui[n];ui[n++]=null;var r=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,r!==null&&u!==null){var g=r.pending;g===null?u.next=u:(u.next=g.next,g.next=u),r.pending=u}f!==0&&wp(a,u,f)}}function ul(e,n,a,r){ui[ks++]=e,ui[ks++]=n,ui[ks++]=a,ui[ks++]=r,pu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function mu(e,n,a,r){return ul(e,n,a,r),fl(e)}function ls(e,n){return ul(e,null,null,n),fl(e)}function wp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function fl(e){if(50<Mo)throw Mo=0,bf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xs={};function px(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,r){return new px(e,n,a,r)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,r,u,f){var g=0;if(r=e,typeof e=="function")gu(e)&&(g=1);else if(typeof e=="string")g=xS(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=Qn(31,a,n,u),e.elementType=T,e.lanes=f,e;case b:return cs(a.children,u,f,n);case y:g=8,u|=24;break;case x:return e=Qn(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case z:return e=Qn(13,a,n,u),e.elementType=z,e.lanes=f,e;case B:return e=Qn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:g=10;break t;case L:g=9;break t;case D:g=11;break t;case O:g=14;break t;case X:g=16,r=null;break t}g=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Qn(g,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function cs(e,n,a,r){return e=Qn(7,e,r,n),e.lanes=a,e}function _u(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Up(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function vu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Lp=new WeakMap;function fi(e,n){if(typeof e=="object"&&e!==null){var a=Lp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Lp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Ws=[],qs=0,dl=null,to=0,hi=[],di=0,Aa=null,Ni=1,Oi="";function Qi(e,n){Ws[qs++]=to,Ws[qs++]=dl,dl=e,to=n}function Np(e,n,a){hi[di++]=Ni,hi[di++]=Oi,hi[di++]=Aa,Aa=e;var r=Ni;e=Oi;var u=32-Ot(r)-1;r&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var g=u-u%5;f=(r&(1<<g)-1).toString(32),r>>=g,u-=g,Ni=1<<32-Ot(n)+u|a<<u|r,Oi=f+e}else Ni=1<<f|a<<u|r,Oi=e}function xu(e){e.return!==null&&(Qi(e,1),Np(e,1,0))}function Su(e){for(;e===dl;)dl=Ws[--qs],Ws[qs]=null,to=Ws[--qs],Ws[qs]=null;for(;e===Aa;)Aa=hi[--di],hi[di]=null,Oi=hi[--di],hi[di]=null,Ni=hi[--di],hi[di]=null}function Op(e,n){hi[di++]=Ni,hi[di++]=Oi,hi[di++]=Aa,Ni=n.id,Oi=n.overflow,Aa=e}var Cn=null,Ke=null,Se=!1,Ra=null,pi=!1,yu=Error(s(519));function Ca(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(fi(n,e)),yu}function Pp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[ln]=e,n[Mn]=r,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)me(To[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Yi(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),bn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||J0(n.textContent,a)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Ca(e,!0)}function zp(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Cn=Cn.return}}function Ys(e){if(e!==Cn)return!1;if(!Se)return zp(e),Se=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&Ke&&Ca(e),zp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=og(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=og(e)}else n===27?(n=Ke,Va(e.type)?(e=Wf,Wf=null,Ke=e):Ke=n):Ke=Cn?gi(e.stateNode.nextSibling):null;return!0}function us(){Ke=Cn=null,Se=!1}function Mu(){var e=Ra;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Ra=null),e}function eo(e){Ra===null?Ra=[e]:Ra.push(e)}var Eu=P(null),fs=null,Ji=null;function wa(e,n,a){gt(Eu,n._currentValue),n._currentValue=a}function $i(e){e._currentValue=Eu.current,at(Eu)}function Tu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function bu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var F=0;F<n.length;F++)if(R.context===n[F]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Tu(f.return,a,e),r||(g=null);break t}f=R.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),Tu(g,a,e),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===e){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Ks(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var R=u.type;Zn(u.pendingProps.value,g.value)||(e!==null?e.push(R):e=[R])}}else if(u===ft.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}u=u.return}e!==null&&bu(n,e,a,r),n.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hs(e){fs=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Ip(fs,e)}function ml(e,n){return fs===null&&hs(e),Ip(e,n)}function Ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(s(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var mx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},gx=o.unstable_scheduleCallback,_x=o.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new mx,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&gx(_x,function(){e.controller.abort()})}var io=null,Ru=0,js=0,Zs=null;function vx(e,n){if(io===null){var a=io=[];Ru=0,js=Uf(),Zs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ru++,n.then(Bp,Bp),n}function Bp(){if(--Ru===0&&io!==null){Zs!==null&&(Zs.status="fulfilled");var e=io;io=null,js=0,Zs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Fp=I.S;I.S=function(e,n){M0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vx(e,n),Fp!==null&&Fp(e,n)};var ds=P(null);function Cu(){var e=ds.current;return e!==null?e:Xe.pooledCache}function gl(e,n){n===null?gt(ds,ds.current):gt(ds,n.pool)}function Hp(){var e=Cu();return e===null?null:{parent:cn._currentValue,pool:e}}var Qs=Error(s(460)),wu=Error(s(474)),_l=Error(s(542)),vl={then:function(){}};function Gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xp(e),e;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xp(e),e}throw ms=n,Qs}}function ps(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ms=a,Qs):a}}var ms=null;function kp(){if(ms===null)throw Error(s(459));var e=ms;return ms=null,e}function Xp(e){if(e===Qs||e===_l)throw Error(s(483))}var Js=null,ao=0;function xl(e){var n=ao;return ao+=1,Js===null&&(Js=[]),Vp(Js,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Sl(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Wp(e){function n(K,k){if(e){var J=K.deletions;J===null?(K.deletions=[k],K.flags|=16):J.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function r(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=Zi(K,k),K.index=0,K.sibling=null,K}function f(K,k,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<k?(K.flags|=67108866,k):J):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function g(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function R(K,k,J,pt){return k===null||k.tag!==6?(k=_u(J,K.mode,pt),k.return=K,k):(k=u(k,J),k.return=K,k)}function F(K,k,J,pt){var Qt=J.type;return Qt===b?ht(K,k,J.props.children,pt,J.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&ps(Qt)===k.type)?(k=u(k,J.props),so(k,J),k.return=K,k):(k=hl(J.type,J.key,J.props,null,K.mode,pt),so(k,J),k.return=K,k)}function $(K,k,J,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=vu(J,K.mode,pt),k.return=K,k):(k=u(k,J.children||[]),k.return=K,k)}function ht(K,k,J,pt,Qt){return k===null||k.tag!==7?(k=cs(J,K.mode,pt,Qt),k.return=K,k):(k=u(k,J),k.return=K,k)}function mt(K,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=_u(""+k,K.mode,J),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return J=hl(k.type,k.key,k.props,null,K.mode,J),so(J,k),J.return=K,J;case A:return k=vu(k,K.mode,J),k.return=K,k;case X:return k=ps(k),mt(K,k,J)}if(lt(k)||Z(k))return k=cs(k,K.mode,J,null),k.return=K,k;if(typeof k.then=="function")return mt(K,xl(k),J);if(k.$$typeof===U)return mt(K,ml(K,k),J);Sl(K,k)}return null}function nt(K,k,J,pt){var Qt=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Qt!==null?null:R(K,k,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Qt?F(K,k,J,pt):null;case A:return J.key===Qt?$(K,k,J,pt):null;case X:return J=ps(J),nt(K,k,J,pt)}if(lt(J)||Z(J))return Qt!==null?null:ht(K,k,J,pt,null);if(typeof J.then=="function")return nt(K,k,xl(J),pt);if(J.$$typeof===U)return nt(K,k,ml(K,J),pt);Sl(K,J)}return null}function ot(K,k,J,pt,Qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(J)||null,R(k,K,""+pt,Qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return K=K.get(pt.key===null?J:pt.key)||null,F(k,K,pt,Qt);case A:return K=K.get(pt.key===null?J:pt.key)||null,$(k,K,pt,Qt);case X:return pt=ps(pt),ot(K,k,J,pt,Qt)}if(lt(pt)||Z(pt))return K=K.get(J)||null,ht(k,K,pt,Qt,null);if(typeof pt.then=="function")return ot(K,k,J,xl(pt),Qt);if(pt.$$typeof===U)return ot(K,k,J,ml(k,pt),Qt);Sl(k,pt)}return null}function Vt(K,k,J,pt){for(var Qt=null,Ae=null,Kt=k,ce=k=0,xe=null;Kt!==null&&ce<J.length;ce++){Kt.index>ce?(xe=Kt,Kt=null):xe=Kt.sibling;var Re=nt(K,Kt,J[ce],pt);if(Re===null){Kt===null&&(Kt=xe);break}e&&Kt&&Re.alternate===null&&n(K,Kt),k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,Kt=xe}if(ce===J.length)return a(K,Kt),Se&&Qi(K,ce),Qt;if(Kt===null){for(;ce<J.length;ce++)Kt=mt(K,J[ce],pt),Kt!==null&&(k=f(Kt,k,ce),Ae===null?Qt=Kt:Ae.sibling=Kt,Ae=Kt);return Se&&Qi(K,ce),Qt}for(Kt=r(Kt);ce<J.length;ce++)xe=ot(Kt,K,ce,J[ce],pt),xe!==null&&(e&&xe.alternate!==null&&Kt.delete(xe.key===null?ce:xe.key),k=f(xe,k,ce),Ae===null?Qt=xe:Ae.sibling=xe,Ae=xe);return e&&Kt.forEach(function(Ya){return n(K,Ya)}),Se&&Qi(K,ce),Qt}function te(K,k,J,pt){if(J==null)throw Error(s(151));for(var Qt=null,Ae=null,Kt=k,ce=k=0,xe=null,Re=J.next();Kt!==null&&!Re.done;ce++,Re=J.next()){Kt.index>ce?(xe=Kt,Kt=null):xe=Kt.sibling;var Ya=nt(K,Kt,Re.value,pt);if(Ya===null){Kt===null&&(Kt=xe);break}e&&Kt&&Ya.alternate===null&&n(K,Kt),k=f(Ya,k,ce),Ae===null?Qt=Ya:Ae.sibling=Ya,Ae=Ya,Kt=xe}if(Re.done)return a(K,Kt),Se&&Qi(K,ce),Qt;if(Kt===null){for(;!Re.done;ce++,Re=J.next())Re=mt(K,Re.value,pt),Re!==null&&(k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return Se&&Qi(K,ce),Qt}for(Kt=r(Kt);!Re.done;ce++,Re=J.next())Re=ot(Kt,K,ce,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&Kt.delete(Re.key===null?ce:Re.key),k=f(Re,k,ce),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return e&&Kt.forEach(function(DS){return n(K,DS)}),Se&&Qi(K,ce),Qt}function ke(K,k,J,pt){if(typeof J=="object"&&J!==null&&J.type===b&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Qt=J.key;k!==null;){if(k.key===Qt){if(Qt=J.type,Qt===b){if(k.tag===7){a(K,k.sibling),pt=u(k,J.props.children),pt.return=K,K=pt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===X&&ps(Qt)===k.type){a(K,k.sibling),pt=u(k,J.props),so(pt,J),pt.return=K,K=pt;break t}a(K,k);break}else n(K,k);k=k.sibling}J.type===b?(pt=cs(J.props.children,K.mode,pt,J.key),pt.return=K,K=pt):(pt=hl(J.type,J.key,J.props,null,K.mode,pt),so(pt,J),pt.return=K,K=pt)}return g(K);case A:t:{for(Qt=J.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(K,k.sibling),pt=u(k,J.children||[]),pt.return=K,K=pt;break t}else{a(K,k);break}else n(K,k);k=k.sibling}pt=vu(J,K.mode,pt),pt.return=K,K=pt}return g(K);case X:return J=ps(J),ke(K,k,J,pt)}if(lt(J))return Vt(K,k,J,pt);if(Z(J)){if(Qt=Z(J),typeof Qt!="function")throw Error(s(150));return J=Qt.call(J),te(K,k,J,pt)}if(typeof J.then=="function")return ke(K,k,xl(J),pt);if(J.$$typeof===U)return ke(K,k,ml(K,J),pt);Sl(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(K,k.sibling),pt=u(k,J),pt.return=K,K=pt):(a(K,k),pt=_u(J,K.mode,pt),pt.return=K,K=pt),g(K)):a(K,k)}return function(K,k,J,pt){try{ao=0;var Qt=ke(K,k,J,pt);return Js=null,Qt}catch(Kt){if(Kt===Qs||Kt===_l)throw Kt;var Ae=Qn(29,Kt,null,K.mode);return Ae.lanes=pt,Ae.return=K,Ae}finally{}}}var gs=Wp(!0),qp=Wp(!1),Da=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ua(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=fl(e),wp(e,null,a),n}return ul(e,r,n,a),fl(e)}function ro(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Hr(e,a)}}function Lu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function oo(){if(Nu){var e=Zs;if(e!==null)throw e}}function lo(e,n,a,r){Nu=!1;var u=e.updateQueue;Da=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var F=R,$=F.next;F.next=null,g===null?f=$:g.next=$,g=F;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,R=ht.lastBaseUpdate,R!==g&&(R===null?ht.firstBaseUpdate=$:R.next=$,ht.lastBaseUpdate=F))}if(f!==null){var mt=u.baseState;g=0,ht=$=F=null,R=f;do{var nt=R.lane&-536870913,ot=nt!==R.lane;if(ot?(ve&nt)===nt:(r&nt)===nt){nt!==0&&nt===js&&(Nu=!0),ht!==null&&(ht=ht.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Vt=e,te=R;nt=n;var ke=a;switch(te.tag){case 1:if(Vt=te.payload,typeof Vt=="function"){mt=Vt.call(ke,mt,nt);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=te.payload,nt=typeof Vt=="function"?Vt.call(ke,mt,nt):Vt,nt==null)break t;mt=_({},mt,nt);break t;case 2:Da=!0}}nt=R.callback,nt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ht===null?($=ht=ot,F=mt):ht=ht.next=ot,g|=nt;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ot=R,R=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ht===null&&(F=mt),u.baseState=F,u.firstBaseUpdate=$,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Ia|=g,e.lanes=g,e.memoizedState=mt}}function Yp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Yp(a[e],n)}var $s=P(null),yl=P(0);function jp(e,n){e=la,gt(yl,e),gt($s,n),la=e|n.baseLanes}function Ou(){gt(yl,la),gt($s,$s.current)}function Pu(){la=yl.current,at($s),at(yl)}var Jn=P(null),mi=null;function Na(e){var n=e.alternate;gt(rn,rn.current&1),gt(Jn,e),mi===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(mi=e)}function zu(e){gt(rn,rn.current),gt(Jn,e),mi===null&&(mi=e)}function Zp(e){e.tag===22?(gt(rn,rn.current),gt(Jn,e),mi===null&&(mi=e)):Oa()}function Oa(){gt(rn,rn.current),gt(Jn,Jn.current)}function $n(e){at(Jn),mi===e&&(mi=null),at(rn)}var rn=P(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ta=0,oe=null,Ge=null,un=null,El=!1,tr=!1,_s=!1,Tl=0,co=0,er=null,Sx=0;function nn(){throw Error(s(321))}function Iu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,r,u,f){return ta=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Nm:$u,_s=!1,f=a(r,u),_s=!1,tr&&(f=Jp(n,a,r,u)),Qp(e),f}function Qp(e){I.H=ho;var n=Ge!==null&&Ge.next!==null;if(ta=0,un=Ge=oe=null,El=!1,co=0,er=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&pl(e)&&(fn=!0))}function Jp(e,n,a,r){oe=e;var u=0;do{if(tr&&(er=null),co=0,tr=!1,25<=u)throw Error(s(301));if(u+=1,un=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Om,f=n(a,r)}while(tr);return f}function yx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(oe.flags|=1024),n}function Fu(){var e=Tl!==0;return Tl=0,e}function Hu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gu(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}ta=0,un=Ge=oe=null,tr=!1,co=Tl=0,er=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?oe.memoizedState=un=e:un=un.next=e,un}function on(){if(Ge===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=un===null?oe.memoizedState:un.next;if(n!==null)un=n,Ge=e;else{if(e===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},un===null?oe.memoizedState=un=e:un=un.next=e}return un}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var n=co;return co+=1,er===null&&(er=[]),e=Vp(er,e,n),n=oe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Nm:$u),e}function Al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===U)return wn(e)}throw Error(s(438,String(e)))}function Vu(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=bl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=w;return n.index++,a}function ea(e,n){return typeof n=="function"?n(e):n}function Rl(e){var n=on();return ku(n,Ge,e)}function ku(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=g=null,F=null,$=n,ht=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(ve&mt)===mt:(ta&mt)===mt){var nt=$.revertLane;if(nt===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===js&&(ht=!0);else if((ta&nt)===nt){$=$.next,nt===js&&(ht=!0);continue}else mt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(R=F=mt,g=f):F=F.next=mt,oe.lanes|=nt,Ia|=nt;mt=$.action,_s&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else nt={lane:mt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},F===null?(R=F=nt,g=f):F=F.next=nt,oe.lanes|=mt,Ia|=mt;$=$.next}while($!==null&&$!==n);if(F===null?g=f:F.next=R,!Zn(f,e.memoizedState)&&(fn=!0,ht&&(a=Zs,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=F,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xu(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=e(f,g.action),g=g.next;while(g!==u);Zn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function $p(e,n,a){var r=oe,u=on(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Zn((Ge||u).memoizedState,a);if(g&&(u.memoizedState=a,fn=!0),u=u.queue,Yu(nm.bind(null,r,u,e),[e]),u.getSnapshot!==n||g||un!==null&&un.memoizedState.tag&1){if(r.flags|=2048,nr(9,{destroy:void 0},em.bind(null,r,u,a,n),null),Xe===null)throw Error(s(349));f||(ta&127)!==0||tm(r,n,a)}return a}function tm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=bl(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function em(e,n,a,r){n.value=a,n.getSnapshot=r,im(n)&&am(e)}function nm(e,n,a){return a(function(){im(n)&&am(e)})}function im(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function am(e){var n=ls(e,2);n!==null&&Yn(n,e,2)}function Wu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),_s){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},n}function sm(e,n,a,r){return e.baseState=a,ku(e,Ge,typeof r=="function"?r:ea)}function Mx(e,n,a,r,u){if(Dl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};I.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,rm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function rm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=I.T,g={};I.T=g;try{var R=a(u,r),F=I.S;F!==null&&F(g,R),om(e,n,R)}catch($){qu(e,n,$)}finally{f!==null&&g.types!==null&&(f.types=g.types),I.T=f}}else try{f=a(u,r),om(e,n,f)}catch($){qu(e,n,$)}}function om(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){lm(e,n,r)},function(r){return qu(e,n,r)}):lm(e,n,a)}function lm(e,n,a){n.status="fulfilled",n.value=a,cm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,rm(e,a)))}function qu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,cm(n),n=n.next;while(n!==r)}e.action=null}function cm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function um(e,n){return n}function fm(e,n){if(Se){var a=Xe.formState;if(a!==null){t:{var r=oe;if(Se){if(Ke){e:{for(var u=Ke,f=pi;u.nodeType!==8;){if(!f){u=null;break e}if(u=gi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=gi(u.nextSibling),r=u.data==="F!";break t}}Ca(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:n},a.queue=r,a=Dm.bind(null,oe,r),r.dispatch=a,r=Wu(!1),f=Ju.bind(null,oe,!1,r.queue),r=Bn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Mx.bind(null,oe,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function hm(e){var n=on();return dm(n,Ge,e)}function dm(e,n,a){if(n=ku(e,n,um)[0],e=Rl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=uo(n)}catch(g){throw g===Qs?_l:g}else r=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,nr(9,{destroy:void 0},Ex.bind(null,u,a),null)),[r,f,e]}function Ex(e,n){e.action=n}function pm(e){var n=on(),a=Ge;if(a!==null)return dm(n,a,e);on(),n=n.memoizedState,a=on();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function nr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=bl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function mm(){return on().memoizedState}function Cl(e,n,a,r){var u=Bn();oe.flags|=e,u.memoizedState=nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function wl(e,n,a,r){var u=on();r=r===void 0?null:r;var f=u.memoizedState.inst;Ge!==null&&r!==null&&Iu(r,Ge.memoizedState.deps)?u.memoizedState=nr(n,f,a,r):(oe.flags|=e,u.memoizedState=nr(1|n,f,a,r))}function gm(e,n){Cl(8390656,8,e,n)}function Yu(e,n){wl(2048,8,e,n)}function Tx(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=bl(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function _m(e){var n=on().memoizedState;return Tx({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function vm(e,n){return wl(4,2,e,n)}function xm(e,n){return wl(4,4,e,n)}function Sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ym(e,n,a){a=a!=null?a.concat([e]):null,wl(4,4,Sm.bind(null,n,e),a)}function Ku(){}function Mm(e,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Iu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Em(e,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Iu(n,r[1]))return r[0];if(r=e(),_s){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r}function ju(e,n,a){return a===void 0||(ta&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=T0(),oe.lanes|=e,Ia|=e,a)}function Tm(e,n,a,r){return Zn(a,n)?a:$s.current!==null?(e=ju(e,a,r),Zn(e,n)||(fn=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(ve&261930)===0?(fn=!0,e.memoizedState=a):(e=T0(),oe.lanes|=e,Ia|=e,n)}function bm(e,n,a,r,u){var f=H.p;H.p=f!==0&&8>f?f:8;var g=I.T,R={};I.T=R,Ju(e,!1,n,a);try{var F=u(),$=I.S;if($!==null&&$(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ht=xx(F,r);fo(e,n,ht,ni(e))}else fo(e,n,r,ni(e))}catch(mt){fo(e,n,{then:function(){},status:"rejected",reason:mt},ni())}finally{H.p=f,g!==null&&R.types!==null&&(g.types=R.types),I.T=g}}function bx(){}function Zu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Am(e).queue;bm(e,u,n,st,a===null?bx:function(){return Rm(e),a(r)})}function Am(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rm(e){var n=Am(e);n.next===null&&(n=e.alternate.memoizedState),fo(e,n.next.queue,{},ni())}function Qu(){return wn(wo)}function Cm(){return on().memoizedState}function wm(){return on().memoizedState}function Ax(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Ua(a);var r=La(n,e,a);r!==null&&(Yn(r,n,a),ro(r,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function Rx(e,n,a){var r=ni();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(e)?Um(n,a):(a=mu(e,n,a,r),a!==null&&(Yn(a,e,r),Lm(a,n,r)))}function Dm(e,n,a){var r=ni();fo(e,n,a,r)}function fo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))Um(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,R=f(g,a);if(u.hasEagerState=!0,u.eagerState=R,Zn(R,g))return ul(e,n,u,0),Xe===null&&cl(),!1}catch{}finally{}if(a=mu(e,n,u,r),a!==null)return Yn(a,e,r),Lm(a,n,r),!0}return!1}function Ju(e,n,a,r){if(r={lane:2,revertLane:Uf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(n)throw Error(s(479))}else n=mu(e,a,r,2),n!==null&&Yn(n,e,2)}function Dl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function Um(e,n){tr=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Lm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Hr(e,a)}}var ho={readContext:wn,use:Al,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};ho.useEffectEvent=nn;var Nm={readContext:wn,use:Al,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:gm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cl(4194308,4,Sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cl(4194308,4,e,n)},useInsertionEffect:function(e,n){Cl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var r=e();if(_s){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Bn();if(a!==void 0){var u=a(n);if(_s){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Rx.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wu(e);var n=e.queue,a=Dm.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ku,useDeferredValue:function(e,n){var a=Bn();return ju(a,e,n)},useTransition:function(){var e=Wu(!1);return e=bm.bind(null,oe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=oe,u=Bn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(ve&127)!==0||tm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,gm(nm.bind(null,r,f,e),[e]),r.flags|=2048,nr(9,{destroy:void 0},em.bind(null,r,f,a,n),null),a},useId:function(){var e=Bn(),n=Xe.identifierPrefix;if(Se){var a=Oi,r=Ni;a=(r&~(1<<32-Ot(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Sx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qu,useFormState:fm,useActionState:fm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return Bn().memoizedState=Ax.bind(null,oe)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:wn,use:Al,useCallback:Mm,useContext:wn,useEffect:Yu,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Rl,useRef:mm,useState:function(){return Rl(ea)},useDebugValue:Ku,useDeferredValue:function(e,n){var a=on();return Tm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Rl(ea)[0],n=on().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:Qu,useFormState:hm,useActionState:hm,useOptimistic:function(e,n){var a=on();return sm(a,Ge,e,n)},useMemoCache:Vu,useCacheRefresh:wm};$u.useEffectEvent=_m;var Om={readContext:wn,use:Al,useCallback:Mm,useContext:wn,useEffect:Yu,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Xu,useRef:mm,useState:function(){return Xu(ea)},useDebugValue:Ku,useDeferredValue:function(e,n){var a=on();return Ge===null?ju(a,e,n):Tm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Xu(ea)[0],n=on().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:Qu,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var a=on();return Ge!==null?sm(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:wm};Om.useEffectEvent=_m;function tf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ni(),u=Ua(r);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(Yn(n,e,r),ro(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ni(),u=Ua(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(Yn(n,e,r),ro(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),r=Ua(a);r.tag=2,n!=null&&(r.callback=n),n=La(e,r,a),n!==null&&(Yn(n,e,a),ro(n,e,a))}};function Pm(e,n,a,r,u,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Jr(a,r)||!Jr(u,f):!0}function zm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&ef.enqueueReplaceState(n,n.state,null)}function vs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Im(e){ll(e)}function Bm(e){console.error(e)}function Fm(e){ll(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Hm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(e,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function Gm(e){return e=Ua(e),e.tag=3,e}function Vm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Hm(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Hm(n,a,r),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Cx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?kl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Cf(e,r,u)),!1;case 22:return a.flags|=65536,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Cf(e,r,u)),!1}throw Error(s(435,a.tag))}return Cf(e,r,u),kl(),!1}if(Se)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==yu&&(e=Error(s(422),{cause:r}),eo(fi(e,a)))):(r!==yu&&(n=Error(s(423),{cause:r}),eo(fi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=fi(r,a),u=nf(e.stateNode,r,u),Lu(e,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:r});if(f=fi(f,a),yo===null?yo=[f]:yo.push(f),an!==4&&(an=2),n===null)return!0;r=fi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=nf(a.stateNode,r,e),Lu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Vm(u,e,a,r),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var af=Error(s(461)),fn=!1;function Dn(e,n,a,r){n.child=e===null?qp(n,null,a,r):gs(n,e.child,a,r)}function km(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var R in r)R!=="ref"&&(g[R]=r[R])}else g=r;return hs(n),r=Bu(e,n,a,g,f,u),R=Fu(),e!==null&&!fn?(Hu(e,n,u),na(e,n,u)):(Se&&R&&xu(n),n.flags|=1,Dn(e,n,r,u),n.child)}function Xm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wm(e,n,f,r,u)):(e=hl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!hf(e,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Jr,a(g,r)&&e.ref===n.ref)return na(e,n,u)}return n.flags|=1,e=Zi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Wm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Jr(f,r)&&e.ref===n.ref)if(fn=!1,n.pendingProps=r=f,hf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,na(e,n,u)}return sf(e,n,a,r,u)}function qm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Ym(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,f!==null?f.cachePool:null),f!==null?jp(n,f):Ou(),Zp(n);else return r=n.lanes=536870912,Ym(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(gl(n,f.cachePool),jp(n,f),Oa(),n.memoizedState=null):(e!==null&&gl(n,null),Ou(),Oa());return Dn(e,n,u,a),n.child}function po(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ym(e,n,a,r,u){var f=Cu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&gl(n,null),Ou(),Zp(n),e!==null&&Ks(e,n,r,!0),n.childLanes=u,null}function Ll(e,n){return n=Ol({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Km(e,n,a){return gs(n,e.child,null,a),e=Ll(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function wx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(r.mode==="hidden")return e=Ll(n,r),n.lanes=536870912,po(null,e);if(zu(n),(e=Ke)?(e=rg(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Up(e),a.return=n,n.child=a,Cn=n,Ke=null)):e=null,e===null)throw Ca(n);return n.lanes=536870912,null}return Ll(n,r)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(zu(n),u)if(n.flags&256)n.flags&=-257,n=Km(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Ks(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(r=Xe,r!==null&&(g=Ns(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ls(e,g),Yn(r,e,g),af;kl(),n=Km(e,n,a)}else e=f.treeContext,Ke=gi(g.nextSibling),Cn=n,Se=!0,Ra=null,pi=!1,e!==null&&Op(n,e),n=Ll(n,r),n.flags|=4096;return n}return e=Zi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Nl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sf(e,n,a,r,u){return hs(n),a=Bu(e,n,a,r,void 0,u),r=Fu(),e!==null&&!fn?(Hu(e,n,u),na(e,n,u)):(Se&&r&&xu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function jm(e,n,a,r,u,f){return hs(n),n.updateQueue=null,a=Jp(n,r,a,u),Qp(e),r=Fu(),e!==null&&!fn?(Hu(e,n,f),na(e,n,f)):(Se&&r&&xu(n),n.flags|=1,Dn(e,n,a,f),n.child)}function Zm(e,n,a,r,u){if(hs(n),n.stateNode===null){var f=Xs,g=a.contextType;typeof g=="object"&&g!==null&&(f=wn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Du(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?wn(g):Xs,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(tf(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&ef.enqueueReplaceState(f,f.state,null),lo(n,r,f,u),oo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,F=vs(a,R);f.props=F;var $=f.context,ht=a.contextType;g=Xs,typeof ht=="object"&&ht!==null&&(g=wn(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||$!==g)&&zm(n,f,r,g),Da=!1;var nt=n.memoizedState;f.state=nt,lo(n,r,f,u),oo(),$=n.memoizedState,R||nt!==$||Da?(typeof mt=="function"&&(tf(n,a,mt,r),$=n.memoizedState),(F=Da||Pm(n,a,F,r,nt,$,g))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=g,r=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Uu(e,n),g=n.memoizedProps,ht=vs(a,g),f.props=ht,mt=n.pendingProps,nt=f.context,$=a.contextType,F=Xs,typeof $=="object"&&$!==null&&(F=wn($)),R=a.getDerivedStateFromProps,($=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||nt!==F)&&zm(n,f,r,F),Da=!1,nt=n.memoizedState,f.state=nt,lo(n,r,f,u),oo();var ot=n.memoizedState;g!==mt||nt!==ot||Da||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof R=="function"&&(tf(n,a,R,r),ot=n.memoizedState),(ht=Da||Pm(n,a,ht,r,nt,ot,F)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=F,r=ht):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Nl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=gs(n,e.child,null,u),n.child=gs(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=na(e,n,u),e}function Qm(e,n,a,r){return us(),n.flags|=256,Dn(e,n,a,r),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:Hp()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function Jm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(u?Na(n):Oa(),(e=Ke)?(e=rg(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Up(e),a.return=n,n.child=a,Cn=n,Ke=null)):e=null,e===null)throw Ca(n);return Xf(e)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(Oa(),u=n.mode,R=Ol({mode:"hidden",children:R},u),r=cs(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=of(a),r.childLanes=lf(e,g,a),n.memoizedState=rf,po(null,r)):(Na(n),cf(n,R))}var F=e.memoizedState;if(F!==null&&(R=F.dehydrated,R!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=uf(e,n,a)):n.memoizedState!==null?(Oa(),n.child=e.child,n.flags|=128,n=null):(Oa(),R=r.fallback,u=n.mode,r=Ol({mode:"visible",children:r.children},u),R=cs(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,gs(n,e.child,null,a),r=n.child,r.memoizedState=of(a),r.childLanes=lf(e,g,a),n.memoizedState=rf,n=po(null,r));else if(Na(n),Xf(R)){if(g=R.nextSibling&&R.nextSibling.dataset,g)var $=g.dgst;g=$,r=Error(s(419)),r.stack="",r.digest=g,eo({value:r,source:null,stack:null}),n=uf(e,n,a)}else if(fn||Ks(e,n,a,!1),g=(a&e.childLanes)!==0,fn||g){if(g=Xe,g!==null&&(r=Ns(g,a),r!==0&&r!==F.retryLane))throw F.retryLane=r,ls(e,r),Yn(g,e,r),af;kf(R)||kl(),n=uf(e,n,a)}else kf(R)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Ke=gi(R.nextSibling),Cn=n,Se=!0,Ra=null,pi=!1,e!==null&&Op(n,e),n=cf(n,r.children),n.flags|=4096);return n}return u?(Oa(),R=r.fallback,u=n.mode,F=e.child,$=F.sibling,r=Zi(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,$!==null?R=Zi($,R):(R=cs(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,po(null,r),r=n.child,R=e.child.memoizedState,R===null?R=of(a):(u=R.cachePool,u!==null?(F=cn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Hp(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=lf(e,g,a),n.memoizedState=rf,po(e.child,r)):(Na(n),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function cf(e,n){return n=Ol({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ol(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function uf(e,n,a){return gs(n,e.child,null,a),e=cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $m(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Tu(e.return,n,a)}function ff(e,n,a,r,u,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function t0(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var g=rn.current,R=(g&2)!==0;if(R?(g=g&1|2,n.flags|=128):g&=1,gt(rn,g),Dn(e,n,r,a),r=Se?to:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,n);else if(e.tag===19)$m(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ff(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ff(n,!0,a,null,f,r);break;case"together":ff(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function na(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function Dx(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),wa(n,cn,e.memoizedState.cache),us();break;case 27:case 5:Ht(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jm(e,n,a):(Na(n),e=na(e,n,a),e!==null?e.sibling:null);Na(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return t0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(rn,rn.current),r)break;return null;case 22:return n.lanes=0,qm(e,n,a,n.pendingProps);case 24:wa(n,cn,e.memoizedState.cache)}return na(e,n,a)}function e0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!hf(e,a)&&(n.flags&128)===0)return fn=!1,Dx(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Se&&(n.flags&1048576)!==0&&Np(n,to,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=ps(n.elementType),n.type=e,typeof e=="function")gu(e)?(r=vs(e,r),n.tag=1,n=Zm(null,n,e,r,a)):(n.tag=0,n=sf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=km(null,n,e,r,a);break t}else if(u===O){n.tag=14,n=Xm(null,n,e,r,a);break t}}throw n=ut(e)||e,Error(s(306,n,""))}}return n;case 0:return sf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=vs(r,n.pendingProps),Zm(e,n,r,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Uu(e,n),lo(n,r,null,a);var g=n.memoizedState;if(r=g.cache,wa(n,cn,r),r!==f.cache&&bu(n,[cn],a,!0),oo(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Qm(e,n,r,a);break t}else if(r!==u){u=fi(Error(s(424)),n),eo(u),n=Qm(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=gi(e.firstChild),Cn=n,Se=!0,Ra=null,pi=!0,a=qp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(us(),r===u){n=na(e,n,a);break t}Dn(e,n,r,a)}n=n.child}return n;case 26:return Nl(e,n),e===null?(a=hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,e=n.pendingProps,r=Zl(it.current).createElement(a),r[ln]=n,r[Mn]=e,Un(r,a,e),C(r),n.stateNode=r):n.memoizedState=hg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ht(n),e===null&&Se&&(r=n.stateNode=cg(n.type,n.pendingProps,it.current),Cn=n,pi=!0,u=Ke,Va(n.type)?(Wf=u,Ke=gi(r.firstChild)):Ke=u),Dn(e,n,n.pendingProps.children,a),Nl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((u=r=Ke)&&(r=rS(r,n.type,n.pendingProps,pi),r!==null?(n.stateNode=r,Cn=n,Ke=gi(r.firstChild),pi=!1,u=!0):u=!1),u||Ca(n)),Ht(n),u=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,r=f.children,Hf(u,f)?r=null:g!==null&&Hf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(e,n,yx,null,null,a),wo._currentValue=u),Nl(e,n),Dn(e,n,r,a),n.child;case 6:return e===null&&Se&&((e=a=Ke)&&(a=oS(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Cn=n,Ke=null,e=!0):e=!1),e||Ca(n)),null;case 13:return Jm(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=gs(n,null,r,a):Dn(e,n,r,a),n.child;case 11:return km(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,wa(n,n.type,r.value),Dn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,hs(n),u=wn(u),r=r(u),n.flags|=1,Dn(e,n,r,a),n.child;case 14:return Xm(e,n,n.type,n.pendingProps,a);case 15:return Wm(e,n,n.type,n.pendingProps,a);case 19:return t0(e,n,a);case 31:return wx(e,n,a);case 22:return qm(e,n,a,n.pendingProps);case 24:return hs(n),r=wn(cn),e===null?(u=Cu(),u===null&&(u=Xe,f=Au(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Du(n),wa(n,cn,u)):((e.lanes&a)!==0&&(Uu(e,n),lo(n,null,null,a),oo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),wa(n,cn,r)):(r=f.cache,wa(n,cn,r),r!==u.cache&&bu(n,[cn],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ia(e){e.flags|=4}function df(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(C0())e.flags|=8192;else throw ms=vl,wu}else e.flags&=-16777217}function n0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_g(n))if(C0())e.flags|=8192;else throw ms=vl,wu}function Pl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,rr|=n)}function mo(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Ux(e,n,a){var r=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),$i(cn),kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ys(n)?ia(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mu())),je(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ia(n),f!==null?(je(n),n0(n,f)):(je(n),df(n,u,null,r,a))):f?f!==e.memoizedState?(ia(n),je(n),n0(n,f)):(je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ia(n),je(n),df(n,u,e,r,a)),null;case 27:if(he(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}e=bt.current,Ys(n)?Pp(n):(e=cg(u,r,a),n.stateNode=e,ia(n))}return je(n),null;case 5:if(he(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ia(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(f=bt.current,Ys(n))Pp(n);else{var g=Zl(it.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(u,{is:r.is}):g.createElement(u)}}f[ln]=n,f[Mn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Un(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ia(n)}}return je(n),df(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ia(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,Ys(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||J0(e.nodeValue,a)),e||Ca(n,!0)}else e=Zl(e).createTextNode(r),e[ln]=n,n.stateNode=e}return je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ys(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),e=!1}else a=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ys(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),je(n),null);case 4:return kt(),e===null&&Pf(n.stateNode.containerInfo),je(n),null;case 10:return $i(n.type),je(n),null;case 19:if(at(rn),r=n.memoizedState,r===null)return je(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)mo(r,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ml(e),f!==null){for(n.flags|=128,mo(r,!1),e=f.updateQueue,n.updateQueue=e,Pl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Dp(a,e),a=a.sibling;return gt(rn,rn.current&1|2),Se&&Qi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>Hl&&(n.flags|=128,u=!0,mo(r,!1),n.lanes=4194304)}else{if(!u)if(e=Ml(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Pl(n,e),mo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return je(n),null}else 2*E()-r.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,u=!0,mo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=rn.current,gt(rn,u?a&1|2:a&1),Se&&Qi(n,r.treeForkCount),e):(je(n),null);case 22:case 23:return $n(n),Pu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&at(ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),$i(cn),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Lx(e,n){switch(Su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return $i(cn),kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return he(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return at(rn),null;case 4:return kt(),null;case 10:return $i(n.type),null;case 22:case 23:return $n(n),Pu(),e!==null&&at(ds),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return $i(cn),null;case 25:return null;default:return null}}function i0(e,n){switch(Su(n),n.tag){case 3:$i(cn),kt();break;case 26:case 27:case 5:he(n);break;case 4:kt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:at(rn);break;case 10:$i(n.type);break;case 22:case 23:$n(n),Pu(),e!==null&&at(ds);break;case 24:$i(cn)}}function go(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==u)}}catch(R){Fe(n,n.return,R)}}function Pa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var g=r.inst,R=g.destroy;if(R!==void 0){g.destroy=void 0,u=n;var F=a,$=R;try{$()}catch(ht){Fe(u,F,ht)}}}r=r.next}while(r!==f)}}catch(ht){Fe(n,n.return,ht)}}function a0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Kp(n,a)}catch(r){Fe(e,e.return,r)}}}function s0(e,n,a){a.props=vs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(e,n,r)}}function _o(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Fe(e,n,u)}}function Pi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function r0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function pf(e,n,a){try{var r=e.stateNode;tS(r,e.type,a,n),r[Mn]=n}catch(u){Fe(e,e.return,u)}}function o0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||o0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(r!==4&&(r===27&&Va(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(gf(e,n,a),e=e.sibling;e!==null;)gf(e,n,a),e=e.sibling}function zl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}function l0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,r,a),n[ln]=e,n[Mn]=a}catch(f){Fe(e,e.return,f)}}var aa=!1,hn=!1,_f=!1,c0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Nx(e,n){if(e=e.containerInfo,Bf=ic,e=yp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,R=-1,F=-1,$=0,ht=0,mt=e,nt=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(R=g+u),mt!==f||r!==0&&mt.nodeType!==3||(F=g+r),mt.nodeType===3&&(g+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)nt=mt,mt=ot;for(;;){if(mt===e)break e;if(nt===a&&++$===u&&(R=g),nt===f&&++ht===r&&(F=g),(ot=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=ot}a=R===-1||F===-1?null:{start:R,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:e,selectionRange:a},ic=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=vs(a.type,u);e=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(te){Fe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function u0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),r&4&&go(5,a);break;case 1:if(ra(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Fe(a,a.return,g)}else{var u=vs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(a,a.return,g)}}r&64&&a0(a),r&512&&_o(a,a.return);break;case 3:if(ra(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Kp(e,n)}catch(g){Fe(a,a.return,g)}}break;case 27:n===null&&r&4&&l0(a);case 26:case 5:ra(e,a),n===null&&r&4&&r0(a),r&512&&_o(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),r&4&&d0(e,a);break;case 13:ra(e,a),r&4&&p0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vx.bind(null,a),lS(e,a))));break;case 22:if(r=a.memoizedState!==null||aa,!r){n=n!==null&&n.memoizedState!==null||hn,u=aa;var f=hn;aa=r,(hn=n)&&!f?oa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),aa=u,hn=f}break;case 30:break;default:ra(e,a)}}function f0(e){var n=e.alternate;n!==null&&(e.alternate=null,f0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,kn=!1;function sa(e,n,a){for(a=a.child;a!==null;)h0(e,n,a),a=a.sibling}function h0(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:hn||Pi(a,n),sa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Pi(a,n);var r=Je,u=kn;Va(a.type)&&(Je=a.stateNode,kn=!1),sa(e,n,a),Ao(a.stateNode),Je=r,kn=u;break;case 5:hn||Pi(a,n);case 6:if(r=Je,u=kn,Je=null,sa(e,n,a),Je=r,kn=u,Je!==null)if(kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Je!==null&&(kn?(e=Je,ag(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pr(e)):ag(Je,a.stateNode));break;case 4:r=Je,u=kn,Je=a.stateNode.containerInfo,kn=!0,sa(e,n,a),Je=r,kn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),hn||Pa(4,a,n),sa(e,n,a);break;case 1:hn||(Pi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&s0(a,n,r)),sa(e,n,a);break;case 21:sa(e,n,a);break;case 22:hn=(r=hn)||a.memoizedState!==null,sa(e,n,a),hn=r;break;default:sa(e,n,a)}}function d0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pr(e)}catch(a){Fe(n,n.return,a)}}}function p0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pr(e)}catch(a){Fe(n,n.return,a)}}function Ox(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new c0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new c0),n;default:throw Error(s(435,e.tag))}}function Il(e,n){var a=Ox(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=kx.bind(null,e,r);r.then(u,u)}})}function Xn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,g=n,R=g;t:for(;R!==null;){switch(R.tag){case 27:if(Va(R.type)){Je=R.stateNode,kn=!1;break t}break;case 5:Je=R.stateNode,kn=!1;break t;case 3:case 4:Je=R.stateNode.containerInfo,kn=!0;break t}R=R.return}if(Je===null)throw Error(s(160));h0(f,g,u),Je=null,kn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)m0(n,e),n=n.sibling}var Ti=null;function m0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(n,e),Wn(e),r&4&&(Pa(3,e,e.return),go(3,e),Pa(5,e,e.return));break;case 1:Xn(n,e),Wn(e),r&512&&(hn||a===null||Pi(a,a.return)),r&64&&aa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ti;if(Xn(n,e),Wn(e),r&512&&(hn||a===null||Pi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[is]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,r,a),f[ln]=e,C(f),r=f;break t;case"link":var g=mg("link","href",u).get(r+(a.href||""));if(g){for(var R=0;R<g.length;R++)if(f=g[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(R,1);break e}}f=u.createElement(r),Un(f,r,a),u.head.appendChild(f);break;case"meta":if(g=mg("meta","content",u).get(r+(a.content||""))){for(R=0;R<g.length;R++)if(f=g[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(R,1);break e}}f=u.createElement(r),Un(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=e,C(f),r=f}e.stateNode=r}else gg(u,e.type,e.stateNode);else e.stateNode=pg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?gg(u,e.type,e.stateNode):pg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,e),Wn(e),r&512&&(hn||a===null||Pi(a,a.return)),a!==null&&r&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,e),Wn(e),r&512&&(hn||a===null||Pi(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(Vt){Fe(e,e.return,Vt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,pf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(_f=!0);break;case 6:if(Xn(n,e),Wn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Vt){Fe(e,e.return,Vt)}}break;case 3:if($l=null,u=Ti,Ti=Ql(n.containerInfo),Xn(n,e),Ti=u,Wn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(Vt){Fe(e,e.return,Vt)}_f&&(_f=!1,g0(e));break;case 4:r=Ti,Ti=Ql(e.stateNode.containerInfo),Xn(n,e),Wn(e),Ti=r;break;case 12:Xn(n,e),Wn(e);break;case 31:Xn(n,e),Wn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Il(e,r)));break;case 13:Xn(n,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Il(e,r)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,$=aa,ht=hn;if(aa=$||u,hn=ht||F,Xn(n,e),hn=ht,aa=$,Wn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||aa||hn||xs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{R=F.stateNode;var mt=F.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;R.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Vt){Fe(F,F.return,Vt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Vt){Fe(F,F.return,Vt)}}}else if(n.tag===18){if(a===null){F=n;try{var ot=F.stateNode;u?sg(ot,!0):sg(F.stateNode,!1)}catch(Vt){Fe(F,F.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Il(e,a))));break;case 19:Xn(n,e),Wn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Il(e,r)));break;case 30:break;case 21:break;default:Xn(n,e),Wn(e)}}function Wn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(o0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(e);zl(e,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(pn(g,""),a.flags&=-33);var R=mf(e);zl(e,R,g);break;case 3:case 4:var F=a.stateNode.containerInfo,$=mf(e);gf(e,$,F);break;default:throw Error(s(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function g0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;g0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)u0(e,n.alternate,n),n=n.sibling}function xs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),xs(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&s0(n,n.return,a),xs(n);break;case 27:Ao(n.stateNode);case 26:case 5:Pi(n,n.return),xs(n);break;case 22:n.memoizedState===null&&xs(n);break;case 30:xs(n);break;default:xs(n)}e=e.sibling}}function oa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:oa(u,f,a),go(4,f);break;case 1:if(oa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Fe(r,r.return,$)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Yp(F[u],R)}catch($){Fe(r,r.return,$)}}a&&g&64&&a0(f),_o(f,f.return);break;case 27:l0(f);case 26:case 5:oa(u,f,a),a&&r===null&&g&4&&r0(f),_o(f,f.return);break;case 12:oa(u,f,a);break;case 31:oa(u,f,a),a&&g&4&&d0(u,f);break;case 13:oa(u,f,a),a&&g&4&&p0(u,f);break;case 22:f.memoizedState===null&&oa(u,f,a),_o(f,f.return);break;case 30:break;default:oa(u,f,a)}n=n.sibling}}function vf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&no(a))}function xf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e))}function bi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_0(e,n,a,r),n=n.sibling}function _0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,r),u&2048&&go(9,n);break;case 1:bi(e,n,a,r);break;case 3:bi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e)));break;case 12:if(u&2048){bi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,R=f.onPostCommit;typeof R=="function"&&R(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Fe(n,n.return,F)}}else bi(e,n,a,r);break;case 31:bi(e,n,a,r);break;case 13:bi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,r):vo(e,n):f._visibility&2?bi(e,n,a,r):(f._visibility|=2,ir(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&vf(g,n);break;case 24:bi(e,n,a,r),u&2048&&xf(n.alternate,n);break;default:bi(e,n,a,r)}}function ir(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,R=a,F=r,$=g.flags;switch(g.tag){case 0:case 11:case 15:ir(f,g,R,F,u),go(8,g);break;case 23:break;case 22:var ht=g.stateNode;g.memoizedState!==null?ht._visibility&2?ir(f,g,R,F,u):vo(f,g):(ht._visibility|=2,ir(f,g,R,F,u)),u&&$&2048&&vf(g.alternate,g);break;case 24:ir(f,g,R,F,u),u&&$&2048&&xf(g.alternate,g);break;default:ir(f,g,R,F,u)}n=n.sibling}}function vo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:vo(a,r),u&2048&&vf(r.alternate,r);break;case 24:vo(a,r),u&2048&&xf(r.alternate,r);break;default:vo(a,r)}n=n.sibling}}var xo=8192;function ar(e,n,a){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)v0(e,n,a),e=e.sibling}function v0(e,n,a){switch(e.tag){case 26:ar(e,n,a),e.flags&xo&&e.memoizedState!==null&&SS(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:ar(e,n,a);break;case 3:case 4:var r=Ti;Ti=Ql(e.stateNode.containerInfo),ar(e,n,a),Ti=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=xo,xo=16777216,ar(e,n,a),xo=r):ar(e,n,a));break;default:ar(e,n,a)}}function x0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,y0(r,e)}x0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S0(e),e=e.sibling}function S0(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Bl(e)):So(e);break;default:So(e)}}function Bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,y0(r,e)}x0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Bl(n));break;default:Bl(n)}e=e.sibling}}function y0(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:no(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Sn=r;else t:for(a=e;Sn!==null;){r=Sn;var u=r.sibling,f=r.return;if(f0(r),r===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var Px={getCacheForType:function(e){var n=wn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(cn).controller.signal}},zx=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,pe=null,ve=0,Be=0,ti=null,za=!1,sr=!1,Sf=!1,la=0,an=0,Ia=0,Ss=0,yf=0,ei=0,rr=0,yo=null,qn=null,Mf=!1,Fl=0,M0=0,Hl=1/0,Gl=null,Ba=null,mn=0,Fa=null,or=null,ca=0,Ef=0,Tf=null,E0=null,Mo=0,bf=null;function ni(){return(Le&2)!==0&&ve!==0?ve&-ve:I.T!==null?Uf():Vr()}function T0(){if(ei===0)if((ve&536870912)===0||Se){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function Yn(e,n,a){(e===Xe&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(lr(e,0),Ha(e,ve,ei,!1)),Nn(e,a),((Le&2)===0||e!==Xe)&&(e===Xe&&((Le&2)===0&&(Ss|=a),an===4&&Ha(e,ve,ei,!1)),zi(e))}function b0(e,n,a){if((Le&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||At(e,n),u=r?Fx(e,n):Rf(e,n,!0),f=r;do{if(u===0){sr&&!r&&Ha(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ix(a)){u=Rf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var R=e;u=yo;var F=R.current.memoizedState.isDehydrated;if(F&&(lr(R,g).flags|=256),g=Rf(R,g,!1),g!==2){if(Sf&&!F){R.errorRecoveryDisabledLanes|=f,Ss|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){lr(e,0),Ha(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ha(r,n,ei,!za);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Fl+300-E(),10<u)){if(Ha(r,n,ei,!za),_t(r,0,!0)!==0)break t;ca=n,r.timeoutHandle=ng(A0.bind(null,r,a,qn,Gl,Mf,n,ei,Ss,rr,za,f,"Throttled",-0,0),u);break t}A0(r,a,qn,Gl,Mf,n,ei,Ss,rr,za,f,null,-0,0)}}break}while(!0);zi(e)}function A0(e,n,a,r,u,f,g,R,F,$,ht,mt,nt,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},v0(n,f,mt);var Vt=(f&62914560)===f?Fl-E():(f&4194048)===f?M0-E():0;if(Vt=yS(mt,Vt),Vt!==null){ca=f,e.cancelPendingCommit=Vt(O0.bind(null,e,n,f,a,r,u,g,R,F,ht,mt,null,nt,ot)),Ha(e,f,g,!$);return}}O0(e,n,f,a,r,u,g,R,F)}function Ix(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(e,n,a,r){n&=~yf,n&=~Ss,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),g=1<<f;r[f]=-1,u&=~g}a!==0&&$o(e,a,n)}function Vl(){return(Le&6)===0?(Eo(0),!1):!0}function Af(){if(pe!==null){if(Be===0)var e=pe.return;else e=pe,Ji=fs=null,Gu(e),Js=null,ao=0,e=pe;for(;e!==null;)i0(e.alternate,e),e=e.return;pe=null}}function lr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,iS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ca=0,Af(),Xe=e,pe=a=Zi(e.current,null),ve=n,Be=0,ti=null,za=!1,sr=At(e,n),Sf=!1,rr=ei=yf=Ss=Ia=an=0,qn=yo=null,Mf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ot(r),f=1<<u;n|=e[u],r&=~f}return la=n,cl(),a}function R0(e,n){oe=null,I.H=ho,n===Qs||n===_l?(n=kp(),Be=3):n===wu?(n=kp(),Be=4):Be=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,pe===null&&(an=1,Ul(e,fi(n,e.current)))}function C0(){var e=Jn.current;return e===null?!0:(ve&4194048)===ve?mi===null:(ve&62914560)===ve||(ve&536870912)!==0?e===mi:!1}function w0(){var e=I.H;return I.H=ho,e===null?ho:e}function D0(){var e=I.A;return I.A=Px,e}function kl(){an=4,za||(ve&4194048)!==ve&&Jn.current!==null||(sr=!0),(Ia&134217727)===0&&(Ss&134217727)===0||Xe===null||Ha(Xe,ve,ei,!1)}function Rf(e,n,a){var r=Le;Le|=2;var u=w0(),f=D0();(Xe!==e||ve!==n)&&(Gl=null,lr(e,n)),n=!1;var g=an;t:do try{if(Be!==0&&pe!==null){var R=pe,F=ti;switch(Be){case 8:Af(),g=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var $=Be;if(Be=0,ti=null,cr(e,R,F,$),a&&sr){g=0;break t}break;default:$=Be,Be=0,ti=null,cr(e,R,F,$)}}Bx(),g=an;break}catch(ht){R0(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Ji=fs=null,Le=r,I.H=u,I.A=f,pe===null&&(Xe=null,ve=0,cl()),g}function Bx(){for(;pe!==null;)U0(pe)}function Fx(e,n){var a=Le;Le|=2;var r=w0(),u=D0();Xe!==e||ve!==n?(Gl=null,Hl=E()+500,lr(e,n)):sr=At(e,n);t:do try{if(Be!==0&&pe!==null){n=pe;var f=ti;e:switch(Be){case 1:Be=0,ti=null,cr(e,n,f,1);break;case 2:case 9:if(Gp(f)){Be=0,ti=null,L0(n);break}n=function(){Be!==2&&Be!==9||Xe!==e||(Be=7),zi(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Gp(f)?(Be=0,ti=null,L0(n)):(Be=0,ti=null,cr(e,n,f,7));break;case 5:var g=null;switch(pe.tag){case 26:g=pe.memoizedState;case 5:case 27:var R=pe;if(g?_g(g):R.stateNode.complete){Be=0,ti=null;var F=R.sibling;if(F!==null)pe=F;else{var $=R.return;$!==null?(pe=$,Xl($)):pe=null}break e}}Be=0,ti=null,cr(e,n,f,5);break;case 6:Be=0,ti=null,cr(e,n,f,6);break;case 8:Af(),an=6;break t;default:throw Error(s(462))}}Hx();break}catch(ht){R0(e,ht)}while(!0);return Ji=fs=null,I.H=r,I.A=u,Le=a,pe!==null?0:(Xe=null,ve=0,cl(),an)}function Hx(){for(;pe!==null&&!Yt();)U0(pe)}function U0(e){var n=e0(e.alternate,e,la);e.memoizedProps=e.pendingProps,n===null?Xl(e):pe=n}function L0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=jm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=jm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Gu(n);default:i0(a,n),n=pe=Dp(n,la),n=e0(a,n,la)}e.memoizedProps=e.pendingProps,n===null?Xl(e):pe=n}function cr(e,n,a,r){Ji=fs=null,Gu(n),Js=null,ao=0;var u=n.return;try{if(Cx(e,u,n,a,ve)){an=1,Ul(e,fi(a,e.current)),pe=null;return}}catch(f){if(u!==null)throw pe=u,f;an=1,Ul(e,fi(a,e.current)),pe=null;return}n.flags&32768?(Se||r===1?e=!0:sr||(ve&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),N0(n,e)):Xl(n)}function Xl(e){var n=e;do{if((n.flags&32768)!==0){N0(n,za);return}e=n.return;var a=Ux(n.alternate,n,la);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);an===0&&(an=5)}function N0(e,n){do{var a=Lx(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);an=6,pe=null}function O0(e,n,a,r,u,f,g,R,F){e.cancelPendingCommit=null;do Wl();while(mn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=pu,Si(e,a,f,g,R,F),e===Xe&&(pe=Xe=null,ve=0),or=n,Fa=e,ca=a,Ef=f,Tf=u,E0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xx(ct,function(){return F0(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=I.T,I.T=null,u=H.p,H.p=2,g=Le,Le|=4;try{Nx(e,n,a)}finally{Le=g,H.p=u,I.T=r}}mn=1,P0(),z0(),I0()}}function P0(){if(mn===1){mn=0;var e=Fa,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var r=H.p;H.p=2;var u=Le;Le|=4;try{m0(n,e);var f=Ff,g=yp(e.containerInfo),R=f.focusedElem,F=f.selectionRange;if(g!==R&&R&&R.ownerDocument&&Sp(R.ownerDocument.documentElement,R)){if(F!==null&&cu(R)){var $=F.start,ht=F.end;if(ht===void 0&&(ht=$),"selectionStart"in R)R.selectionStart=$,R.selectionEnd=Math.min(ht,R.value.length);else{var mt=R.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Vt=R.textContent.length,te=Math.min(F.start,Vt),ke=F.end===void 0?te:Math.min(F.end,Vt);!ot.extend&&te>ke&&(g=ke,ke=te,te=g);var K=xp(R,te),k=xp(R,ke);if(K&&k&&(ot.rangeCount!==1||ot.anchorNode!==K.node||ot.anchorOffset!==K.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var J=mt.createRange();J.setStart(K.node,K.offset),ot.removeAllRanges(),te>ke?(ot.addRange(J),ot.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ot.addRange(J))}}}}for(mt=[],ot=R;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<mt.length;R++){var pt=mt[R];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}ic=!!Bf,Ff=Bf=null}finally{Le=u,H.p=r,I.T=a}}e.current=n,mn=2}}function z0(){if(mn===2){mn=0;var e=Fa,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var r=H.p;H.p=2;var u=Le;Le|=4;try{u0(e,n.alternate,n)}finally{Le=u,H.p=r,I.T=a}}mn=3}}function I0(){if(mn===4||mn===3){mn=0,N();var e=Fa,n=or,a=ca,r=E0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,or=Fa=null,B0(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ba=null),Os(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=I.T,u=H.p,H.p=2,I.T=null;try{for(var f=e.onRecoverableError,g=0;g<r.length;g++){var R=r[g];f(R.value,{componentStack:R.stack})}}finally{I.T=n,H.p=u}}(ca&3)!==0&&Wl(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===bf?Mo++:(Mo=0,bf=e):Mo=0,Eo(0)}}function B0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,no(n)))}function Wl(){return P0(),z0(),I0(),F0()}function F0(){if(mn!==5)return!1;var e=Fa,n=Ef;Ef=0;var a=Os(ca),r=I.T,u=H.p;try{H.p=32>a?32:a,I.T=null,a=Tf,Tf=null;var f=Fa,g=ca;if(mn=0,or=Fa=null,ca=0,(Le&6)!==0)throw Error(s(331));var R=Le;if(Le|=4,S0(f.current),_0(f,f.current,g,a),Le=R,Eo(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{H.p=u,I.T=r,B0(e,n)}}function H0(e,n,a){n=fi(a,n),n=nf(e.stateNode,n,2),e=La(e,n,2),e!==null&&(Nn(e,2),zi(e))}function Fe(e,n,a){if(e.tag===3)H0(e,e,a);else for(;n!==null;){if(n.tag===3){H0(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ba===null||!Ba.has(r))){e=fi(a,e),a=Gm(2),r=La(n,a,2),r!==null&&(Vm(a,r,n,e),Nn(r,2),zi(r));break}}n=n.return}}function Cf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new zx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Sf=!0,u.add(a),e=Gx.bind(null,e,n,a),n.then(e,e))}function Gx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ve&a)===a&&(an===4||an===3&&(ve&62914560)===ve&&300>E()-Fl?(Le&2)===0&&lr(e,0):yf|=a,rr===ve&&(rr=0)),zi(e)}function G0(e,n){n===0&&(n=ze()),e=ls(e,n),e!==null&&(Nn(e,n),zi(e))}function Vx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),G0(e,a)}function kx(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),G0(e,a)}function Xx(e,n){return Ee(e,n)}var ql=null,ur=null,wf=!1,Yl=!1,Df=!1,Ga=0;function zi(e){e!==ur&&e.next===null&&(ur===null?ql=ur=e:ur=ur.next=e),Yl=!0,wf||(wf=!0,qx())}function Eo(e,n){if(!Df&&Yl){Df=!0;do for(var a=!1,r=ql;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var g=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(g&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,W0(r,f))}else f=ve,f=_t(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||At(r,f)||(a=!0,W0(r,f));r=r.next}while(a);Df=!1}}function Wx(){V0()}function V0(){Yl=wf=!1;var e=0;Ga!==0&&nS()&&(e=Ga);for(var n=E(),a=null,r=ql;r!==null;){var u=r.next,f=k0(r,n);f===0?(r.next=null,a===null?ql=u:a.next=u,u===null&&(ur=a)):(a=r,(e!==0||(f&3)!==0)&&(Yl=!0)),r=u}mn!==0&&mn!==5||Eo(e),Ga!==0&&(Ga=0)}function k0(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Ot(f),R=1<<g,F=u[g];F===-1?((R&a)===0||(R&r)!==0)&&(u[g]=ne(R,n)):F<=n&&(e.expiredLanes|=R),f&=~R}if(n=Xe,a=ve,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||At(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Oe(r),Os(a)){case 2:case 8:a=vt;break;case 32:a=ct;break;case 268435456:a=Rt;break;default:a=ct}return r=X0.bind(null,e),a=Ee(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function X0(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wl()&&e.callbackNode!==a)return null;var r=ve;return r=_t(e,e===Xe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(b0(e,r,n),k0(e,E()),e.callbackNode!=null&&e.callbackNode===a?X0.bind(null,e):null)}function W0(e,n){if(Wl())return null;b0(e,n,!0)}function qx(){aS(function(){(Le&6)!==0?Ee(dt,Wx):V0()})}function Uf(){if(Ga===0){var e=js;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Ga=e}return Ga}function q0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:el(""+e)}function Y0(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Yx(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=q0((u[Mn]||null).action),g=r.submitter;g&&(n=(n=g[Mn]||null)?q0(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var R=new sl("action","action",null,r,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ga!==0){var F=g?Y0(u,g):new FormData(u);Zu(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(R.preventDefault(),F=g?Y0(u,g):new FormData(u),Zu(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Lf=0;Lf<du.length;Lf++){var Nf=du[Lf],Kx=Nf.toLowerCase(),jx=Nf[0].toUpperCase()+Nf.slice(1);Ei(Kx,"on"+jx)}Ei(Tp,"onAnimationEnd"),Ei(bp,"onAnimationIteration"),Ei(Ap,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(fx,"onTransitionRun"),Ei(hx,"onTransitionStart"),Ei(dx,"onTransitionCancel"),Ei(Rp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function K0(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var R=r[g],F=R.instance,$=R.currentTarget;if(R=R.listener,F!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=$;try{f(u)}catch(ht){ll(ht)}u.currentTarget=null,f=F}else for(g=0;g<r.length;g++){if(R=r[g],F=R.instance,$=R.currentTarget,R=R.listener,F!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=$;try{f(u)}catch(ht){ll(ht)}u.currentTarget=null,f=F}}}}function me(e,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var r=e+"__bubble";a.has(r)||(j0(n,e,2,!1),a.add(r))}function Of(e,n,a){var r=0;n&&(r|=4),j0(a,e,r,n)}var Kl="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[Kl]){e[Kl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(Zx.has(a)||Of(a,!1,e),Of(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Kl]||(n[Kl]=!0,Of("selectionchange",!1,n))}}function j0(e,n,a,r){switch(Tg(n)){case 2:var u=TS;break;case 8:u=bS;break;default:u=Zf}a=u.bind(null,n,a,e),u=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function zf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var R=r.stateNode.containerInfo;if(R===u)break;if(g===4)for(g=r.return;g!==null;){var F=g.tag;if((F===3||F===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;R!==null;){if(g=Ma(R),g===null)return;if(F=g.tag,F===5||F===6||F===26||F===27){r=f=g;continue t}R=R.parentNode}}r=r.return}tp(function(){var $=f,ht=Jc(a),mt=[];t:{var nt=Cp.get(e);if(nt!==void 0){var ot=sl,Vt=e;switch(e){case"keypress":if(il(a)===0)break t;case"keydown":case"keyup":ot=kv;break;case"focusin":Vt="focus",ot=au;break;case"focusout":Vt="blur",ot=au;break;case"beforeblur":case"afterblur":ot=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=qv;break;case Tp:case bp:case Ap:ot=Ov;break;case Rp:ot=Kv;break;case"scroll":case"scrollend":ot=wv;break;case"wheel":ot=Zv;break;case"copy":case"cut":case"paste":ot=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=sp;break;case"toggle":case"beforetoggle":ot=Jv}var te=(n&4)!==0,ke=!te&&(e==="scroll"||e==="scrollend"),K=te?nt!==null?nt+"Capture":null:nt;te=[];for(var k=$,J;k!==null;){var pt=k;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||K===null||(pt=Wr(k,K),pt!=null&&te.push(bo(k,pt,J))),ke)break;k=k.return}0<te.length&&(nt=new ot(nt,Vt,null,a,ht),mt.push({event:nt,listeners:te}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",nt&&a!==Qc&&(Vt=a.relatedTarget||a.fromElement)&&(Ma(Vt)||Vt[yi]))break t;if((ot||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=$,Vt=Vt?Ma(Vt):null,Vt!==null&&(ke=c(Vt),te=Vt.tag,Vt!==ke||te!==5&&te!==27&&te!==6)&&(Vt=null)):(ot=null,Vt=$),ot!==Vt)){if(te=ip,pt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=sp,pt="onPointerLeave",K="onPointerEnter",k="pointer"),ke=ot==null?nt:as(ot),J=Vt==null?nt:as(Vt),nt=new te(pt,k+"leave",ot,a,ht),nt.target=ke,nt.relatedTarget=J,pt=null,Ma(ht)===$&&(te=new te(K,k+"enter",Vt,a,ht),te.target=J,te.relatedTarget=ke,pt=te),ke=pt,ot&&Vt)e:{for(te=Qx,K=ot,k=Vt,J=0,pt=K;pt;pt=te(pt))J++;pt=0;for(var Qt=k;Qt;Qt=te(Qt))pt++;for(;0<J-pt;)K=te(K),J--;for(;0<pt-J;)k=te(k),pt--;for(;J--;){if(K===k||k!==null&&K===k.alternate){te=K;break e}K=te(K),k=te(k)}te=null}else te=null;ot!==null&&Z0(mt,nt,ot,te,!1),Vt!==null&&ke!==null&&Z0(mt,ke,Vt,te,!0)}}t:{if(nt=$?as($):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var Ae=dp;else if(fp(nt))if(pp)Ae=lx;else{Ae=rx;var Kt=sx}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Mi($.elementType)&&(Ae=dp):Ae=ox;if(Ae&&(Ae=Ae(e,$))){hp(mt,Ae,a,ht);break t}Kt&&Kt(e,nt,$),e==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&Tn(nt,"number",nt.value)}switch(Kt=$?as($):window,e){case"focusin":(fp(Kt)||Kt.contentEditable==="true")&&(Gs=Kt,uu=$,$r=null);break;case"focusout":$r=uu=Gs=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Mp(mt,a,ht);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":Mp(mt,a,ht)}var ce;if(ru)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Hs?cp(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(rp&&a.locale!=="ko"&&(Hs||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Hs&&(ce=ep()):(ba=ht,eu="value"in ba?ba.value:ba.textContent,Hs=!0)),Kt=jl($,xe),0<Kt.length&&(xe=new ap(xe,e,null,a,ht),mt.push({event:xe,listeners:Kt}),ce?xe.data=ce:(ce=up(a),ce!==null&&(xe.data=ce)))),(ce=tx?ex(e,a):nx(e,a))&&(xe=jl($,"onBeforeInput"),0<xe.length&&(Kt=new ap("onBeforeInput","beforeinput",null,a,ht),mt.push({event:Kt,listeners:xe}),Kt.data=ce)),Yx(mt,e,$,a,ht)}K0(mt,n)})}function bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Wr(e,a),u!=null&&r.unshift(bo(e,u,f)),u=Wr(e,n),u!=null&&r.push(bo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function Qx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Z0(e,n,a,r,u){for(var f=n._reactName,g=[];a!==null&&a!==r;){var R=a,F=R.alternate,$=R.stateNode;if(R=R.tag,F!==null&&F===r)break;R!==5&&R!==26&&R!==27||$===null||(F=$,u?($=Wr(a,f),$!=null&&g.unshift(bo(a,$,F))):u||($=Wr(a,f),$!=null&&g.push(bo(a,$,F)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function Q0(e){return(typeof e=="string"?e:""+e).replace(Jx,`
`).replace($x,"")}function J0(e,n){return n=Q0(n),Q0(e)===n}function Ve(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||pn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&pn(e,""+r);break;case"className":Jt(e,"class",r);break;case"tabIndex":Jt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,a,r);break;case"style":Is(e,r,f);break;case"data":if(n!=="object"){Jt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=el(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=el(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ki);break;case"onScroll":r!=null&&me("scroll",e);break;case"onScrollEnd":r!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=el(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":me("beforetoggle",e),me("toggle",e),Wt(e,"popover",r);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Wt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rv.get(a)||a,Wt(e,a,r))}}function If(e,n,a,r,u,f){switch(a){case"style":Is(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?pn(e,r):(typeof r=="number"||typeof r=="bigint")&&pn(e,""+r);break;case"onScroll":r!=null&&me("scroll",e);break;case"onScrollEnd":r!=null&&me("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Wt(e,a,r)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,g,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),r&&Ve(e,n,"src",a.src,a,null);return;case"input":me("invalid",e);var R=f=g=u=null,F=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":u=ht;break;case"type":g=ht;break;case"checked":F=ht;break;case"defaultChecked":$=ht;break;case"value":f=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ve(e,n,r,ht,a,null)}}Yi(e,f,R,F,$,g,u,!1);return;case"select":me("invalid",e),r=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":g=R;break;case"multiple":r=R;default:Ve(e,n,u,R,a,null)}n=f,a=g,e.multiple=!!r,n!=null?ci(e,!!r,n,!1):a!=null&&ci(e,!!r,a,!0);return;case"textarea":me("invalid",e),f=u=r=null;for(g in a)if(a.hasOwnProperty(g)&&(R=a[g],R!=null))switch(g){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ve(e,n,g,R,a,null)}bn(e,r,u,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(r=a[F],r!=null))switch(F){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ve(e,n,F,r,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(r=0;r<To.length;r++)me(To[r],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,$,r,a,null)}return;default:if(Mi(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&If(e,n,ht,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Ve(e,n,R,r,a,null))}function tS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,R=null,F=null,$=null,ht=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":F=mt;default:r.hasOwnProperty(ot)||Ve(e,n,ot,null,r,mt)}}for(var nt in r){var ot=r[nt];if(mt=a[nt],r.hasOwnProperty(nt)&&(ot!=null||mt!=null))switch(nt){case"type":f=ot;break;case"name":u=ot;break;case"checked":$=ot;break;case"defaultChecked":ht=ot;break;case"value":g=ot;break;case"defaultValue":R=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&Ve(e,n,nt,ot,r,mt)}}En(e,g,R,F,$,ht,f,u);return;case"select":ot=g=R=nt=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ot=F;default:r.hasOwnProperty(f)||Ve(e,n,f,null,r,F)}for(u in r)if(f=r[u],F=a[u],r.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":nt=f;break;case"defaultValue":R=f;break;case"multiple":g=f;default:f!==F&&Ve(e,n,u,f,r,F)}n=R,a=g,r=ot,nt!=null?ci(e,!!a,nt,!1):!!r!=!!a&&(n!=null?ci(e,!!a,n,!0):ci(e,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ve(e,n,R,null,r,u)}for(g in r)if(u=r[g],f=a[g],r.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":nt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(e,n,g,u,r,f)}Ie(e,nt,ot);return;case"option":for(var Vt in a)if(nt=a[Vt],a.hasOwnProperty(Vt)&&nt!=null&&!r.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Ve(e,n,Vt,null,r,nt)}for(F in r)if(nt=r[F],ot=a[F],r.hasOwnProperty(F)&&nt!==ot&&(nt!=null||ot!=null))switch(F){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ve(e,n,F,nt,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!r.hasOwnProperty(te)&&Ve(e,n,te,null,r,nt);for($ in r)if(nt=r[$],ot=a[$],r.hasOwnProperty($)&&nt!==ot&&(nt!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Ve(e,n,$,nt,r,ot)}return;default:if(Mi(n)){for(var ke in a)nt=a[ke],a.hasOwnProperty(ke)&&nt!==void 0&&!r.hasOwnProperty(ke)&&If(e,n,ke,void 0,r,nt);for(ht in r)nt=r[ht],ot=a[ht],!r.hasOwnProperty(ht)||nt===ot||nt===void 0&&ot===void 0||If(e,n,ht,nt,r,ot);return}}for(var K in a)nt=a[K],a.hasOwnProperty(K)&&nt!=null&&!r.hasOwnProperty(K)&&Ve(e,n,K,null,r,nt);for(mt in r)nt=r[mt],ot=a[mt],!r.hasOwnProperty(mt)||nt===ot||nt==null&&ot==null||Ve(e,n,mt,nt,r,ot)}function $0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,g=u.initiatorType,R=u.duration;if(f&&R&&$0(g)){for(g=0,R=u.responseEnd,r+=1;r<a.length;r++){var F=a[r],$=F.startTime;if($>R)break;var ht=F.transferSize,mt=F.initiatorType;ht&&$0(mt)&&(F=F.responseEnd,g+=ht*(F<R?1:(R-$)/(F-$)))}if(--r,n+=8*(f+g)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bf=null,Ff=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function tg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function eg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function nS(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var ng=typeof setTimeout=="function"?setTimeout:void 0,iS=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,aS=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(e){return ig.resolve(null).then(e).catch(sS)}:ng;function sS(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function ag(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),pr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Ao(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ao(a);for(var f=a.firstChild;f;){var g=f.nextSibling,R=f.nodeName;f[is]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Ao(e.ownerDocument.body);a=u}while(a);pr(n)}function sg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Xr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function rS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[is])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=gi(e.nextSibling),e===null)break}return null}function oS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=gi(e.nextSibling),e===null))return null;return e}function rg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=gi(e.nextSibling),e===null))return null;return e}function kf(e){return e.data==="$?"||e.data==="$~"}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function gi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Wf=null;function og(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return gi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function lg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function cg(e,n,a){switch(n=Zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ao(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Xr(e)}var _i=new Map,ug=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=H.d;H.d={f:cS,r:uS,D:fS,C:hS,L:dS,m:pS,X:gS,S:mS,M:_S};function cS(){var e=ua.f(),n=Vl();return e||n}function uS(e){var n=Ea(e);n!==null&&n.tag===5&&n.type==="form"?Rm(n):ua.r(e)}var fr=typeof document>"u"?null:document;function fg(e,n,a){var r=fr;if(r&&typeof n=="string"&&n){var u=ae(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ug.has(u)||(ug.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Un(n,"link",e),C(n),r.head.appendChild(n)))}}function fS(e){ua.D(e),fg("dns-prefetch",e,null)}function hS(e,n){ua.C(e,n),fg("preconnect",e,n)}function dS(e,n,a){ua.L(e,n,a);var r=fr;if(r&&e&&n){var u='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ae(a.imageSizes)+'"]')):u+='[href="'+ae(e)+'"]';var f=u;switch(n){case"style":f=hr(e);break;case"script":f=dr(e)}_i.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),_i.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Ro(f))||n==="script"&&r.querySelector(Co(f))||(n=r.createElement("link"),Un(n,"link",e),C(n),r.head.appendChild(n)))}}function pS(e,n){ua.m(e,n);var a=fr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ae(r)+'"][href="'+ae(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=dr(e)}if(!_i.has(f)&&(e=_({rel:"modulepreload",href:e},n),_i.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(f)))return}r=a.createElement("link"),Un(r,"link",e),C(r),a.head.appendChild(r)}}}function mS(e,n,a){ua.S(e,n,a);var r=fr;if(r&&e){var u=Ta(r).hoistableStyles,f=hr(e);n=n||"default";var g=u.get(f);if(!g){var R={loading:0,preload:null};if(g=r.querySelector(Ro(f)))R.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=_i.get(f))&&qf(e,a);var F=g=r.createElement("link");C(F),Un(F,"link",e),F._p=new Promise(function($,ht){F.onload=$,F.onerror=ht}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Jl(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:R},u.set(f,g)}}}function gS(e,n){ua.X(e,n);var a=fr;if(a&&e){var r=Ta(a).hoistableScripts,u=dr(e),f=r.get(u);f||(f=a.querySelector(Co(u)),f||(e=_({src:e,async:!0},n),(n=_i.get(u))&&Yf(e,n),f=a.createElement("script"),C(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function _S(e,n){ua.M(e,n);var a=fr;if(a&&e){var r=Ta(a).hoistableScripts,u=dr(e),f=r.get(u);f||(f=a.querySelector(Co(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=_i.get(u))&&Yf(e,n),f=a.createElement("script"),C(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function hg(e,n,a,r){var u=(u=it.current)?Ql(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hr(a.href),a=Ta(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=hr(a.href);var f=Ta(u).hoistableStyles,g=f.get(e);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=u.querySelector(Ro(e)))&&!f._p&&(g.instance=f,g.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),f||vS(u,e,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=Ta(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function hr(e){return'href="'+ae(e)+'"'}function Ro(e){return'link[rel="stylesheet"]['+e+"]"}function dg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function vS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Un(n,"link",a),C(n),e.head.appendChild(n))}function dr(e){return'[src="'+ae(e)+'"]'}function Co(e){return"script[async]"+e}function pg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ae(a.href)+'"]');if(r)return n.instance=r,C(r),r;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),C(r),Un(r,"style",u),Jl(r,a.precedence,e),n.instance=r;case"stylesheet":u=hr(a.href);var f=e.querySelector(Ro(u));if(f)return n.state.loading|=4,n.instance=f,C(f),f;r=dg(a),(u=_i.get(u))&&qf(r,u),f=(e.ownerDocument||e).createElement("link"),C(f);var g=f;return g._p=new Promise(function(R,F){g.onload=R,g.onerror=F}),Un(f,"link",r),n.state.loading|=4,Jl(f,a.precedence,e),n.instance=f;case"script":return f=dr(a.src),(u=e.querySelector(Co(f)))?(n.instance=u,C(u),u):(r=a,(u=_i.get(f))&&(r=_({},a),Yf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),C(u),Un(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Jl(r,a.precedence,e));return n.instance}function Jl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,g=0;g<r.length;g++){var R=r[g];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function mg(e,n,a){if($l===null){var r=new Map,u=$l=new Map;u.set(a,r)}else u=$l,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[is]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var R=r.get(g);R?R.push(f):r.set(g,[f])}}return r}function gg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function xS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _g(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function SS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hr(r.href),f=n.querySelector(Ro(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=tc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,C(f);return}f=n.ownerDocument||n,r=dg(r),(u=_i.get(u))&&qf(r,u),f=f.createElement("link"),C(f);var g=f;g._p=new Promise(function(R,F){g.onload=R,g.onerror=F}),Un(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=tc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Kf=0;function yS(e,n){return e.stylesheets&&e.count===0&&nc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Kf===0&&(Kf=62500*eS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&nc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Kf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function nc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(MS,e),ec=null,tc.call(e))}function MS(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var r=a.get(null);else{a=new Map,ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,u),a.set(g,u),this.count++,r=tc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:U,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function ES(e,n,a,r,u,f,g,R,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function vg(e,n,a,r,u,f,g,R,F,$,ht,mt){return e=new ES(e,n,a,g,F,$,ht,mt,R),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Du(f),e}function xg(e){return e?(e=Xs,e):Xs}function Sg(e,n,a,r,u,f){u=xg(u),r.context===null?r.context=u:r.pendingContext=u,r=Ua(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=La(e,r,n),a!==null&&(Yn(a,e,n),ro(a,e,n))}function yg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jf(e,n){yg(e,n),(e=e.alternate)&&yg(e,n)}function Mg(e){if(e.tag===13||e.tag===31){var n=ls(e,67108864);n!==null&&Yn(n,e,67108864),jf(e,67108864)}}function Eg(e){if(e.tag===13||e.tag===31){var n=ni();n=Gr(n);var a=ls(e,n);a!==null&&Yn(a,e,n),jf(e,n)}}var ic=!0;function TS(e,n,a,r){var u=I.T;I.T=null;var f=H.p;try{H.p=2,Zf(e,n,a,r)}finally{H.p=f,I.T=u}}function bS(e,n,a,r){var u=I.T;I.T=null;var f=H.p;try{H.p=8,Zf(e,n,a,r)}finally{H.p=f,I.T=u}}function Zf(e,n,a,r){if(ic){var u=Qf(r);if(u===null)zf(e,n,r,ac,a),bg(e,r);else if(RS(u,e,n,a,r))r.stopPropagation();else if(bg(e,r),n&4&&-1<AS.indexOf(e)){for(;u!==null;){var f=Ea(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=St(f.pendingLanes);if(g!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;g;){var F=1<<31-Ot(g);R.entanglements[1]|=F,g&=~F}zi(f),(Le&6)===0&&(Hl=E()+500,Eo(0))}}break;case 31:case 13:R=ls(f,2),R!==null&&Yn(R,f,2),Vl(),jf(f,2)}if(f=Qf(r),f===null&&zf(e,n,r,ac,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else zf(e,n,r,null,a)}}function Qf(e){return e=Jc(e),Jf(e)}var ac=null;function Jf(e){if(ac=null,e=Ma(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ac=e,null}function Tg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case dt:return 2;case vt:return 8;case ct:case jt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var $f=!1,ka=null,Xa=null,Wa=null,Do=new Map,Uo=new Map,qa=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bg(e,n){switch(e){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ea(n),n!==null&&Mg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function RS(e,n,a,r,u){switch(n){case"focusin":return ka=Lo(ka,e,n,a,r,u),!0;case"dragenter":return Xa=Lo(Xa,e,n,a,r,u),!0;case"mouseover":return Wa=Lo(Wa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Do.set(f,Lo(Do.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Uo.set(f,Lo(Uo.get(f)||null,e,n,a,r,u)),!0}return!1}function Ag(e){var n=Ma(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Li(e.priority,function(){Eg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Li(e.priority,function(){Eg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Qc=r,a.target.dispatchEvent(r),Qc=null}else return n=Ea(a),n!==null&&Mg(n),e.blockedOn=a,!1;n.shift()}return!0}function Rg(e,n,a){sc(e)&&a.delete(n)}function CS(){$f=!1,ka!==null&&sc(ka)&&(ka=null),Xa!==null&&sc(Xa)&&(Xa=null),Wa!==null&&sc(Wa)&&(Wa=null),Do.forEach(Rg),Uo.forEach(Rg)}function rc(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,CS)))}var oc=null;function Cg(e){oc!==e&&(oc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Jf(r||a)===null)continue;break}var f=Ea(a);f!==null&&(e.splice(n,3),n-=3,Zu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function pr(e){function n(F){return rc(F,e)}ka!==null&&rc(ka,e),Xa!==null&&rc(Xa,e),Wa!==null&&rc(Wa,e),Do.forEach(n),Uo.forEach(n);for(var a=0;a<qa.length;a++){var r=qa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)Ag(a),a.blockedOn===null&&qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],g=u[Mn]||null;if(typeof f=="function")g||Cg(a);else if(g){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[Mn]||null)R=g.formAction;else if(Jf(u)!==null)continue}else R=g.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Cg(a)}}}function wg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function th(e){this._internalRoot=e}lc.prototype.render=th.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ni();Sg(a,r,e,n,null,null)},lc.prototype.unmount=th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Sg(e.current,2,null,e,null,null),Vl(),n[yi]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,e),a===0&&Ag(e)}};var Dg=t.version;if(Dg!=="19.2.3")throw Error(s(527,Dg,"19.2.3"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var wS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{Mt=cc.inject(wS),Et=cc}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Im,f=Bm,g=Fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=vg(e,1,!1,null,null,a,r,null,u,f,g,wg),e[yi]=n.current,Pf(e),new th(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Im,g=Bm,R=Fm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=vg(e,1,!0,n,a??null,r,u,F,f,g,R,wg),n.context=xg(null),a=n.current,r=ni(),r=Gr(r),u=Ua(r),u.callback=null,La(a,u,r),a=r,n.current.lanes=a,Nn(n,a),zi(n),e[yi]=n.current,Pf(e),new lc(n)},Oo.version="19.2.3",Oo}var Hg;function HS(){if(Hg)return ih.exports;Hg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ih.exports=FS(),ih.exports}var GS=HS();const VS=k_(GS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zd="182",kS=0,Gg=1,XS=2,Lc=1,WS=2,Xo=3,ns=0,jn=1,ga=2,va=0,wr=1,Vg=2,kg=3,Xg=4,qS=5,Cs=100,YS=101,KS=102,jS=103,ZS=104,QS=200,JS=201,$S=202,ty=203,Gh=204,Vh=205,ey=206,ny=207,iy=208,ay=209,sy=210,ry=211,oy=212,ly=213,cy=214,kh=0,Xh=1,Wh=2,Ur=3,qh=4,Yh=5,Kh=6,jh=7,X_=0,uy=1,fy=2,Gi=0,W_=1,q_=2,Y_=3,K_=4,j_=5,Z_=6,Q_=7,J_=300,Ls=301,Lr=302,Zh=303,Qh=304,Wc=306,Jh=1e3,_a=1001,$h=1002,Ln=1003,hy=1004,uc=1005,In=1006,oh=1007,Ds=1008,ri=1009,$_=1010,tv=1011,qo=1012,Id=1013,Xi=1014,Fi=1015,Sa=1016,Bd=1017,Fd=1018,Yo=1020,ev=35902,nv=35899,iv=1021,av=1022,Ui=1023,ya=1026,Us=1027,sv=1028,Hd=1029,Nr=1030,Gd=1031,Vd=1033,Nc=33776,Oc=33777,Pc=33778,zc=33779,td=35840,ed=35841,nd=35842,id=35843,ad=36196,sd=37492,rd=37496,od=37488,ld=37489,cd=37490,ud=37491,fd=37808,hd=37809,dd=37810,pd=37811,md=37812,gd=37813,_d=37814,vd=37815,xd=37816,Sd=37817,yd=37818,Md=37819,Ed=37820,Td=37821,bd=36492,Ad=36494,Rd=36495,Cd=36283,wd=36284,Dd=36285,Ud=36286,dy=3200,rv=0,py=1,ts="",xi="srgb",Or="srgb-linear",Bc="linear",He="srgb",mr=7680,Wg=519,my=512,gy=513,_y=514,kd=515,vy=516,xy=517,Xd=518,Sy=519,qg=35044,Yg="300 es",Hi=2e3,Fc=2001;function ov(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Hc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yy(){const o=Hc("canvas");return o.style.display="block",o}const Kg={};function jg(...o){const t="THREE."+o.shift();console.log(t,...o)}function ie(...o){const t="THREE."+o.shift();console.warn(t,...o)}function Ce(...o){const t="THREE."+o.shift();console.error(t,...o)}function Ko(...o){const t=o.join(" ");t in Kg||(Kg[t]=!0,ie(...o))}function My(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class zr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lh=Math.PI/180,Gc=180/Math.PI;function Zo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function ye(o,t,i){return Math.max(t,Math.min(i,o))}function Ey(o,t){return(o%t+t)%t}function ch(o,t,i){return(1-i)*o+i*t}function Po(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Me{constructor(t=0,i=0){Me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],_=s[l+3],S=c[h+0],M=c[h+1],A=c[h+2],b=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_;return}if(d>=1){t[i+0]=S,t[i+1]=M,t[i+2]=A,t[i+3]=b;return}if(_!==b||m!==S||p!==M||v!==A){let y=m*S+p*M+v*A+_*b;y<0&&(S=-S,M=-M,A=-A,b=-b,y=-y);let x=1-d;if(y<.9995){const L=Math.acos(y),U=Math.sin(L);x=Math.sin(x*L)/U,d=Math.sin(d*L)/U,m=m*x+S*d,p=p*x+M*d,v=v*x+A*d,_=_*x+b*d}else{m=m*x+S*d,p=p*x+M*d,v=v*x+A*d,_=_*x+b*d;const L=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=L,p*=L,v*=L,_*=L}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],_=c[h],S=c[h+1],M=c[h+2],A=c[h+3];return t[i]=d*A+v*_+m*M-p*S,t[i+1]=m*A+v*S+p*_-d*M,t[i+2]=p*A+v*M+d*S-m*_,t[i+3]=v*A-d*_-m*S-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),_=d(c/2),S=m(s/2),M=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=S*v*_+p*M*A,this._y=p*M*_-S*v*A,this._z=p*v*A+S*M*_,this._w=p*v*_-S*M*A;break;case"YXZ":this._x=S*v*_+p*M*A,this._y=p*M*_-S*v*A,this._z=p*v*A-S*M*_,this._w=p*v*_+S*M*A;break;case"ZXY":this._x=S*v*_-p*M*A,this._y=p*M*_+S*v*A,this._z=p*v*A+S*M*_,this._w=p*v*_-S*M*A;break;case"ZYX":this._x=S*v*_-p*M*A,this._y=p*M*_+S*v*A,this._z=p*v*A-S*M*_,this._w=p*v*_+S*M*A;break;case"YZX":this._x=S*v*_+p*M*A,this._y=p*M*_+S*v*A,this._z=p*v*A-S*M*_,this._w=p*v*_-S*M*A;break;case"XZY":this._x=S*v*_-p*M*A,this._y=p*M*_-S*v*A,this._z=p*v*A+S*M*_,this._w=p*v*_+S*M*A;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],_=i[10],S=s+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,i=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Zg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Zg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*v,this.y=s+m*v+d*p-c*_,this.z=l+m*_+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return uh.copy(this).projectOnVector(t),this.sub(uh)}reflect(t){return this.sub(uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ye(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uh=new j,Zg=new Qo;class ue{constructor(t,i,s,l,c,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],_=s[7],S=s[2],M=s[5],A=s[8],b=l[0],y=l[3],x=l[6],L=l[1],U=l[4],D=l[7],z=l[2],B=l[5],O=l[8];return c[0]=h*b+d*L+m*z,c[3]=h*y+d*U+m*B,c[6]=h*x+d*D+m*O,c[1]=p*b+v*L+_*z,c[4]=p*y+v*U+_*B,c[7]=p*x+v*D+_*O,c[2]=S*b+M*L+A*z,c[5]=S*y+M*U+A*B,c[8]=S*x+M*D+A*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=v*h-d*p,S=d*m-v*c,M=p*c-h*m,A=i*_+s*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=_*b,t[1]=(l*p-v*s)*b,t[2]=(d*s-l*h)*b,t[3]=S*b,t[4]=(v*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=M*b,t[7]=(s*m-p*i)*b,t[8]=(h*i-s*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(fh.makeScale(t,i)),this}rotate(t){return this.premultiply(fh.makeRotation(-t)),this}translate(t,i){return this.premultiply(fh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fh=new ue,Qg=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jg=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ty(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ts?Bc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:t,whitePoint:s,transfer:Bc,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:s,transfer:He,toXYZ:Qg,fromXYZ:Jg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),o}const be=Ty();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Dr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gr;class by{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{gr===void 0&&(gr=Hc("canvas")),gr.width=t.width,gr.height=t.height;const l=gr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=xa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ay=0;class Wd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Zo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(hh(l[h].image)):c.push(hh(l[h]))}else c=hh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function hh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?by.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}let Ry=0;const dh=new j;class Gn extends zr{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=_a,l=_a,c=In,h=Ds,d=Ui,m=ri,p=Gn.DEFAULT_ANISOTROPY,v=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Zo(),this.name="",this.source=new Wd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ie(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==J_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jh:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case $h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jh:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case $h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=J_;Gn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],_=m[8],S=m[1],M=m[5],A=m[9],b=m[2],y=m[6],x=m[10];if(Math.abs(v-S)<.01&&Math.abs(_-b)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+b)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,D=(M+1)/2,z=(x+1)/2,B=(v+S)/4,O=(_+b)/4,X=(A+y)/4;return U>D&&U>z?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=B/s,c=O/s):D>z?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=X/l):z<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),s=O/c,l=X/c),this.set(s,l,c,i),this}let L=Math.sqrt((y-A)*(y-A)+(_-b)*(_-b)+(S-v)*(S-v));return Math.abs(L)<.001&&(L=1),this.x=(y-A)/L,this.y=(_-b)/L,this.z=(S-v)/L,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cy extends zr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Cy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class lv extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wy extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(t.matrixWorld),this.union(fc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),hc.subVectors(this.max,zo),_r.subVectors(t.a,zo),vr.subVectors(t.b,zo),xr.subVectors(t.c,zo),Ka.subVectors(vr,_r),ja.subVectors(xr,vr),ys.subVectors(_r,xr);let i=[0,-Ka.z,Ka.y,0,-ja.z,ja.y,0,-ys.z,ys.y,Ka.z,0,-Ka.x,ja.z,0,-ja.x,ys.z,0,-ys.x,-Ka.y,Ka.x,0,-ja.y,ja.x,0,-ys.y,ys.x,0];return!ph(i,_r,vr,xr,hc)||(i=[1,0,0,0,1,0,0,0,1],!ph(i,_r,vr,xr,hc))?!1:(dc.crossVectors(Ka,ja),i=[dc.x,dc.y,dc.z],ph(i,_r,vr,xr,hc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fa=[new j,new j,new j,new j,new j,new j,new j,new j],Ai=new j,fc=new Jo,_r=new j,vr=new j,xr=new j,Ka=new j,ja=new j,ys=new j,zo=new j,hc=new j,dc=new j,Ms=new j;function ph(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Ms.fromArray(o,c);const d=l.x*Math.abs(Ms.x)+l.y*Math.abs(Ms.y)+l.z*Math.abs(Ms.z),m=t.dot(Ms),p=i.dot(Ms),v=s.dot(Ms);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Dy=new Jo,Io=new j,mh=new j;class qc{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Dy.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(mh)),this.expandByPoint(Io.copy(t.center).sub(mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ha=new j,gh=new j,pc=new j,Za=new j,_h=new j,mc=new j,vh=new j;class cv{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ha)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ha.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ha.copy(this.origin).addScaledVector(this.direction,i),ha.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){gh.copy(t).add(i).multiplyScalar(.5),pc.copy(i).sub(t).normalize(),Za.copy(this.origin).sub(gh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(pc),d=Za.dot(this.direction),m=-Za.dot(pc),p=Za.lengthSq(),v=Math.abs(1-h*h);let _,S,M,A;if(v>0)if(_=h*m-d,S=h*d-m,A=c*v,_>=0)if(S>=-A)if(S<=A){const b=1/v;_*=b,S*=b,M=_*(_+h*S+2*d)+S*(h*_+S+2*m)+p}else S=c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S=-c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;else S<=-A?(_=Math.max(0,-(-h*c+d)),S=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p):S<=A?(_=0,S=Math.min(Math.max(-c,-m),c),M=S*(S+2*m)+p):(_=Math.max(0,-(h*c+d)),S=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+S*(S+2*m)+p);else S=h>0?-c:c,_=Math.max(0,-(h*S+d)),M=-_*_+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(gh).addScaledVector(pc,S),M}intersectSphere(t,i){ha.subVectors(t.center,this.origin);const s=ha.dot(this.direction),l=ha.dot(ha)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),v>=0?(c=(t.min.y-S.y)*v,h=(t.max.y-S.y)*v):(c=(t.max.y-S.y)*v,h=(t.min.y-S.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(d=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ha)!==null}intersectTriangle(t,i,s,l,c){_h.subVectors(i,t),mc.subVectors(s,t),vh.crossVectors(_h,mc);let h=this.direction.dot(vh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Za.subVectors(this.origin,t);const m=d*this.direction.dot(mc.crossVectors(Za,mc));if(m<0)return null;const p=d*this.direction.dot(_h.cross(Za));if(p<0||m+p>h)return null;const v=-d*Za.dot(vh);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,i,s,l,c,h,d,m,p,v,_,S,M,A,b,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,v,_,S,M,A,b,y)}set(t,i,s,l,c,h,d,m,p,v,_,S,M,A,b,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=v,x[10]=_,x[14]=S,x[3]=M,x[7]=A,x[11]=b,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Sr.setFromMatrixColumn(t,0).length(),c=1/Sr.setFromMatrixColumn(t,1).length(),h=1/Sr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const S=h*v,M=h*_,A=d*v,b=d*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=M+A*p,i[5]=S-b*p,i[9]=-d*m,i[2]=b-S*p,i[6]=A+M*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*v,M=m*_,A=p*v,b=p*_;i[0]=S+b*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*v,i[9]=-d,i[2]=M*d-A,i[6]=b+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*v,M=m*_,A=p*v,b=p*_;i[0]=S-b*d,i[4]=-h*_,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*v,i[9]=b-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*v,M=h*_,A=d*v,b=d*_;i[0]=m*v,i[4]=A*p-M,i[8]=S*p+b,i[1]=m*_,i[5]=b*p+S,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,M=h*p,A=d*m,b=d*p;i[0]=m*v,i[4]=b-S*_,i[8]=A*_+M,i[1]=_,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*_+A,i[10]=S-b*_}else if(t.order==="XZY"){const S=h*m,M=h*p,A=d*m,b=d*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=S*_+b,i[5]=h*v,i[9]=M*_-A,i[2]=A*_-M,i[6]=d*v,i[10]=b*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uy,t,Ly)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Qa.crossVectors(s,ii),Qa.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Qa.crossVectors(s,ii)),Qa.normalize(),gc.crossVectors(ii,Qa),l[0]=Qa.x,l[4]=gc.x,l[8]=ii.x,l[1]=Qa.y,l[5]=gc.y,l[9]=ii.y,l[2]=Qa.z,l[6]=gc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],_=s[5],S=s[9],M=s[13],A=s[2],b=s[6],y=s[10],x=s[14],L=s[3],U=s[7],D=s[11],z=s[15],B=l[0],O=l[4],X=l[8],T=l[12],w=l[1],G=l[5],Z=l[9],tt=l[13],ut=l[2],lt=l[6],I=l[10],H=l[14],st=l[3],yt=l[7],xt=l[11],P=l[15];return c[0]=h*B+d*w+m*ut+p*st,c[4]=h*O+d*G+m*lt+p*yt,c[8]=h*X+d*Z+m*I+p*xt,c[12]=h*T+d*tt+m*H+p*P,c[1]=v*B+_*w+S*ut+M*st,c[5]=v*O+_*G+S*lt+M*yt,c[9]=v*X+_*Z+S*I+M*xt,c[13]=v*T+_*tt+S*H+M*P,c[2]=A*B+b*w+y*ut+x*st,c[6]=A*O+b*G+y*lt+x*yt,c[10]=A*X+b*Z+y*I+x*xt,c[14]=A*T+b*tt+y*H+x*P,c[3]=L*B+U*w+D*ut+z*st,c[7]=L*O+U*G+D*lt+z*yt,c[11]=L*X+U*Z+D*I+z*xt,c[15]=L*T+U*tt+D*H+z*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],_=t[6],S=t[10],M=t[14],A=t[3],b=t[7],y=t[11],x=t[15],L=m*M-p*S,U=d*M-p*_,D=d*S-m*_,z=h*M-p*v,B=h*S-m*v,O=h*_-d*v;return i*(b*L-y*U+x*D)-s*(A*L-y*z+x*B)+l*(A*U-b*z+x*O)-c*(A*D-b*B+y*O)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],_=t[9],S=t[10],M=t[11],A=t[12],b=t[13],y=t[14],x=t[15],L=_*y*p-b*S*p+b*m*M-d*y*M-_*m*x+d*S*x,U=A*S*p-v*y*p-A*m*M+h*y*M+v*m*x-h*S*x,D=v*b*p-A*_*p+A*d*M-h*b*M-v*d*x+h*_*x,z=A*_*m-v*b*m-A*d*S+h*b*S+v*d*y-h*_*y,B=i*L+s*U+l*D+c*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return t[0]=L*O,t[1]=(b*S*c-_*y*c-b*l*M+s*y*M+_*l*x-s*S*x)*O,t[2]=(d*y*c-b*m*c+b*l*p-s*y*p-d*l*x+s*m*x)*O,t[3]=(_*m*c-d*S*c-_*l*p+s*S*p+d*l*M-s*m*M)*O,t[4]=U*O,t[5]=(v*y*c-A*S*c+A*l*M-i*y*M-v*l*x+i*S*x)*O,t[6]=(A*m*c-h*y*c-A*l*p+i*y*p+h*l*x-i*m*x)*O,t[7]=(h*S*c-v*m*c+v*l*p-i*S*p-h*l*M+i*m*M)*O,t[8]=D*O,t[9]=(A*_*c-v*b*c-A*s*M+i*b*M+v*s*x-i*_*x)*O,t[10]=(h*b*c-A*d*c+A*s*p-i*b*p-h*s*x+i*d*x)*O,t[11]=(v*d*c-h*_*c-v*s*p+i*_*p+h*s*M-i*d*M)*O,t[12]=z*O,t[13]=(v*b*l-A*_*l+A*s*S-i*b*S-v*s*y+i*_*y)*O,t[14]=(A*d*l-h*b*l-A*s*m+i*b*m+h*s*y-i*d*y)*O,t[15]=(h*_*l-v*d*l+v*s*m-i*_*m-h*s*S+i*d*S)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,_=d+d,S=c*p,M=c*v,A=c*_,b=h*v,y=h*_,x=d*_,L=m*p,U=m*v,D=m*_,z=s.x,B=s.y,O=s.z;return l[0]=(1-(b+x))*z,l[1]=(M+D)*z,l[2]=(A-U)*z,l[3]=0,l[4]=(M-D)*B,l[5]=(1-(S+x))*B,l[6]=(y+L)*B,l[7]=0,l[8]=(A+U)*O,l[9]=(y-L)*O,l[10]=(1-(S+b))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Sr.set(l[0],l[1],l[2]).length();const h=Sr.set(l[4],l[5],l[6]).length(),d=Sr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ri.copy(this);const p=1/c,v=1/h,_=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=_,Ri.elements[9]*=_,Ri.elements[10]*=_,i.setFromRotationMatrix(Ri),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Hi,m=!1){const p=this.elements,v=2*c/(i-t),_=2*c/(s-l),S=(i+t)/(i-t),M=(s+l)/(s-l);let A,b;if(m)A=c/(h-c),b=h*c/(h-c);else if(d===Hi)A=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===Fc)A=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Hi,m=!1){const p=this.elements,v=2/(i-t),_=2/(s-l),S=-(i+t)/(i-t),M=-(s+l)/(s-l);let A,b;if(m)A=1/(h-c),b=h/(h-c);else if(d===Hi)A=-2/(h-c),b=-(h+c)/(h-c);else if(d===Fc)A=-1/(h-c),b=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=A,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Sr=new j,Ri=new $e,Uy=new j(0,0,0),Ly=new j(1,1,1),Qa=new j,gc=new j,ii=new j,$g=new $e,t_=new Qo;class Wi{constructor(t=0,i=0,s=0,l=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],_=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return $g.makeRotationFromQuaternion(t),this.setFromRotationMatrix($g,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return t_.setFromEuler(this),this.setFromQuaternion(t_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class uv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ny=0;const e_=new j,yr=new Qo,da=new $e,_c=new j,Bo=new j,Oy=new j,Py=new Qo,n_=new j(1,0,0),i_=new j(0,1,0),a_=new j(0,0,1),s_={type:"added"},zy={type:"removed"},Mr={type:"childadded",child:null},xh={type:"childremoved",child:null};class gn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const t=new j,i=new Wi,s=new Qo,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new ue}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(n_,t)}rotateY(t){return this.rotateOnAxis(i_,t)}rotateZ(t){return this.rotateOnAxis(a_,t)}translateOnAxis(t,i){return e_.copy(t).applyQuaternion(this.quaternion),this.position.add(e_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(n_,t)}translateY(t){return this.translateOnAxis(i_,t)}translateZ(t){return this.translateOnAxis(a_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?_c.copy(t):_c.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Bo,_c,this.up):da.lookAt(_c,Bo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(da),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s_),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(zy),xh.child=t,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s_),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,Oy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,Py,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),_=h(t.shapes),S=h(t.skeletons),M=h(t.animations),A=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}gn.DEFAULT_UP=new j(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new j,pa=new j,Sh=new j,ma=new j,Er=new j,Tr=new j,r_=new j,yh=new j,Mh=new j,Eh=new j,Th=new sn,bh=new sn,Ah=new sn;class Di{constructor(t=new j,i=new j,s=new j){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ci.subVectors(l,i),pa.subVectors(s,i),Sh.subVectors(t,i);const h=Ci.dot(Ci),d=Ci.dot(pa),m=Ci.dot(Sh),p=pa.dot(pa),v=pa.dot(Sh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(p*m-d*v)*S,A=(h*v-d*m)*S;return c.set(1-M-A,A,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(h,ma.y),m.addScaledVector(d,ma.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Th.setScalar(0),bh.setScalar(0),Ah.setScalar(0),Th.fromBufferAttribute(t,i),bh.fromBufferAttribute(t,s),Ah.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Th,c.x),h.addScaledVector(bh,c.y),h.addScaledVector(Ah,c.z),h}static isFrontFacing(t,i,s,l){return Ci.subVectors(s,i),pa.subVectors(t,i),Ci.cross(pa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ci.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Di.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Di.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Er.subVectors(l,s),Tr.subVectors(c,s),yh.subVectors(t,s);const m=Er.dot(yh),p=Tr.dot(yh);if(m<=0&&p<=0)return i.copy(s);Mh.subVectors(t,l);const v=Er.dot(Mh),_=Tr.dot(Mh);if(v>=0&&_<=v)return i.copy(l);const S=m*_-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Er,h);Eh.subVectors(t,c);const M=Er.dot(Eh),A=Tr.dot(Eh);if(A>=0&&M<=A)return i.copy(c);const b=M*p-m*A;if(b<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(s).addScaledVector(Tr,d);const y=v*A-M*_;if(y<=0&&_-v>=0&&M-A>=0)return r_.subVectors(c,l),d=(_-v)/(_-v+(M-A)),i.copy(l).addScaledVector(r_,d);const x=1/(y+b+S);return h=b*x,d=S*x,i.copy(s).addScaledVector(Er,h).addScaledVector(Tr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Rh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ge{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=be.workingColorSpace){if(t=Ey(t,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Rh(h,c,t+1/3),this.g=Rh(h,c,t),this.b=Rh(h,c,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=xi){function s(c){c!==void 0&&parseFloat(c)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ie("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=xi){const s=fv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return be.workingToColorSpace(zn.copy(this),t),Math.round(ye(zn.r*255,0,255))*65536+Math.round(ye(zn.g*255,0,255))*256+Math.round(ye(zn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=v<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=xi){be.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,l=zn.b;return t!==xi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+t,Ja.s+i,Ja.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ja),t.getHSL(vc);const s=ch(Ja.h,vc.h,i),l=ch(Ja.s,vc.s,i),c=ch(Ja.l,vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new ge;ge.NAMES=fv;let Iy=0;class Ir extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=wr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Vh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ie(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ie(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==ns&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Gh&&(s.blendSrc=this.blendSrc),this.blendDst!==Vh&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vc extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=X_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new j,xc=new Me;let By=0;class ki{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:By++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=qg,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(t),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Po(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),c=Kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qg&&(t.usage=this.usage),t}}class hv extends ki{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class dv extends ki{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class _n extends ki{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Fy=0;const vi=new $e,Ch=new gn,br=new j,ai=new Jo,Fo=new Jo,yn=new j;class oi extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ov(t)?dv:hv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,i,s){return vi.makeTranslation(t,i,s),this.applyMatrix4(vi),this}scale(t,i,s){return vi.makeScale(t,i,s),this.applyMatrix4(vi),this}lookAt(t){return Ch.lookAt(t),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new _n(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Fo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ai.min,Fo.min),ai.expandByPoint(yn),yn.addVectors(ai.max,Fo.max),ai.expandByPoint(yn)):(ai.expandByPoint(Fo.min),ai.expandByPoint(Fo.max))}ai.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)yn.fromBufferAttribute(d,p),m&&(br.fromBufferAttribute(t,p),yn.add(br)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new j,m[X]=new j;const p=new j,v=new j,_=new j,S=new Me,M=new Me,A=new Me,b=new j,y=new j;function x(X,T,w){p.fromBufferAttribute(s,X),v.fromBufferAttribute(s,T),_.fromBufferAttribute(s,w),S.fromBufferAttribute(c,X),M.fromBufferAttribute(c,T),A.fromBufferAttribute(c,w),v.sub(p),_.sub(p),M.sub(S),A.sub(S);const G=1/(M.x*A.y-A.x*M.y);isFinite(G)&&(b.copy(v).multiplyScalar(A.y).addScaledVector(_,-M.y).multiplyScalar(G),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(G),d[X].add(b),d[T].add(b),d[w].add(b),m[X].add(y),m[T].add(y),m[w].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let X=0,T=L.length;X<T;++X){const w=L[X],G=w.start,Z=w.count;for(let tt=G,ut=G+Z;tt<ut;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const U=new j,D=new j,z=new j,B=new j;function O(X){z.fromBufferAttribute(l,X),B.copy(z);const T=d[X];U.copy(T),U.sub(z.multiplyScalar(z.dot(T))).normalize(),D.crossVectors(B,T);const G=D.dot(m[X])<0?-1:1;h.setXYZW(X,U.x,U.y,U.z,G)}for(let X=0,T=L.length;X<T;++X){const w=L[X],G=w.start,Z=w.count;for(let tt=G,ut=G+Z;tt<ut;tt+=3)O(t.getX(tt+0)),O(t.getX(tt+1)),O(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ki(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const l=new j,c=new j,h=new j,d=new j,m=new j,p=new j,v=new j,_=new j;if(t)for(let S=0,M=t.count;S<M;S+=3){const A=t.getX(S+0),b=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),d.fromBufferAttribute(s,A),m.fromBufferAttribute(s,b),p.fromBufferAttribute(s,y),d.add(v),m.add(v),p.add(v),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(b,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,c),_.subVectors(l,c),v.cross(_),s.setXYZ(S+0,v.x,v.y,v.z),s.setXYZ(S+1,v.x,v.y,v.z),s.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,_=d.normalized,S=new p.constructor(m.length*v);let M=0,A=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*v;for(let x=0;x<v;x++)S[A++]=p[M++]}return new ki(S,v,_)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,_=p.length;v<_;v++){const S=p[v],M=t(S,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,S=p.length;_<S;_++){const M=p[_];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],_=c[p];for(let S=0,M=_.length;S<M;S++)v.push(_[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o_=new $e,Es=new cv,Sc=new qc,l_=new j,yc=new j,Mc=new j,Ec=new j,wh=new j,Tc=new j,c_=new j,bc=new j;class qe extends gn{constructor(t=new oi,i=new Vc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Tc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],_=c[m];v!==0&&(wh.fromBufferAttribute(_,t),h?Tc.addScaledVector(wh,v):Tc.addScaledVector(wh.sub(i),v))}i.add(Tc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(c),Es.copy(t.ray).recast(t.near),!(Sc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Sc,l_)===null||Es.origin.distanceToSquared(l_)>(t.far-t.near)**2))&&(o_.copy(c).invert(),Es.copy(t.ray).applyMatrix4(o_),!(s.boundingBox!==null&&Es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Es)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,b=S.length;A<b;A++){const y=S[A],x=h[y.materialIndex],L=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=L,z=U;D<z;D+=3){const B=d.getX(D),O=d.getX(D+1),X=d.getX(D+2);l=Ac(this,x,t,s,p,v,_,B,O,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let y=A,x=b;y<x;y+=3){const L=d.getX(y),U=d.getX(y+1),D=d.getX(y+2);l=Ac(this,h,t,s,p,v,_,L,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,b=S.length;A<b;A++){const y=S[A],x=h[y.materialIndex],L=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=L,z=U;D<z;D+=3){const B=D,O=D+1,X=D+2;l=Ac(this,x,t,s,p,v,_,B,O,X),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let y=A,x=b;y<x;y+=3){const L=y,U=y+1,D=y+2;l=Ac(this,h,t,s,p,v,_,L,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Hy(o,t,i,s,l,c,h,d){let m;if(t.side===jn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ns,d),m===null)return null;bc.copy(d),bc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(bc);return p<i.near||p>i.far?null:{distance:p,point:bc.clone(),object:o}}function Ac(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,yc),o.getVertexPosition(m,Mc),o.getVertexPosition(p,Ec);const v=Hy(o,t,i,s,yc,Mc,Ec,c_);if(v){const _=new j;Di.getBarycoord(c_,yc,Mc,Ec,_),l&&(v.uv=Di.getInterpolatedAttribute(l,d,m,p,_,new Me)),c&&(v.uv1=Di.getInterpolatedAttribute(c,d,m,p,_,new Me)),h&&(v.normal=Di.getInterpolatedAttribute(h,d,m,p,_,new j),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new j,materialIndex:0};Di.getNormal(yc,Mc,Ec,S.normal),v.face=S,v.barycoord=_}return v}class Hn extends oi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],_=[];let S=0,M=0;A("z","y","x",-1,-1,s,i,t,h,c,0),A("z","y","x",1,-1,s,i,-t,h,c,1),A("x","z","y",1,1,t,s,i,l,h,2),A("x","z","y",1,-1,t,s,-i,l,h,3),A("x","y","z",1,-1,t,i,s,l,c,4),A("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new _n(p,3)),this.setAttribute("normal",new _n(v,3)),this.setAttribute("uv",new _n(_,2));function A(b,y,x,L,U,D,z,B,O,X,T){const w=D/O,G=z/X,Z=D/2,tt=z/2,ut=B/2,lt=O+1,I=X+1;let H=0,st=0;const yt=new j;for(let xt=0;xt<I;xt++){const P=xt*G-tt;for(let at=0;at<lt;at++){const gt=at*w-Z;yt[b]=gt*L,yt[y]=P*U,yt[x]=ut,p.push(yt.x,yt.y,yt.z),yt[b]=0,yt[y]=0,yt[x]=B>0?1:-1,v.push(yt.x,yt.y,yt.z),_.push(at/O),_.push(1-xt/X),H+=1}}for(let xt=0;xt<X;xt++)for(let P=0;P<O;P++){const at=S+P+lt*xt,gt=S+P+lt*(xt+1),bt=S+(P+1)+lt*(xt+1),Bt=S+(P+1)+lt*xt;m.push(at,gt,Bt),m.push(gt,bt,Bt),st+=6}d.addGroup(M,st,T),M+=st,S+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)t[l]=s[l]}return t}function Gy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function pv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const Vy={clone:Pr,merge:Fn};var ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ky,this.fragmentShader=Xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=Gy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class mv extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new j,u_=new Me,f_=new Me;class si extends mv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gc*2*Math.atan(Math.tan(lh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-t/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($a.x,$a.y).multiplyScalar(-t/$a.z)}getViewSize(t,i){return this.getViewBounds(t,u_,f_),i.subVectors(f_,u_)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(lh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ar=-90,Rr=1;class Wy extends gn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Ar,Rr,t,i);l.layers=this.layers,this.add(l);const c=new si(Ar,Rr,t,i);c.layers=this.layers,this.add(c);const h=new si(Ar,Rr,t,i);h.layers=this.layers,this.add(h);const d=new si(Ar,Rr,t,i);d.layers=this.layers,this.add(d);const m=new si(Ar,Rr,t,i);m.layers=this.layers,this.add(m);const p=new si(Ar,Rr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(_,S,M),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class gv extends Gn{constructor(t=[],i=Ls,s,l,c,h,d,m,p,v){super(t,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _v extends Vi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new gv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Hn(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:va});c.uniforms.tEquirect.value=i;const h=new qe(l,c),d=i.minFilter;return i.minFilter===Ds&&(i.minFilter=In),new Wy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class wi extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qy={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const b of t.hand.values()){const y=i.getJointPose(b,s),x=this._getHandJoint(p,b);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=v.position.distanceTo(_.position),M=.02,A=.005;p.inputState.pinching&&S>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(qy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new wi;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class qd{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new ge(t),this.near=i,this.far=s}clone(){return new qd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yy extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Ky extends Gn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Ln,v=Ln,_,S){super(null,h,d,m,p,v,l,c,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uh=new j,jy=new j,Zy=new ue;class Rs{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Uh.subVectors(s,i).cross(jy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Uh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Zy.getNormalMatrix(t),l=this.coplanarPoint(Uh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new qc,Qy=new Me(.5,.5),Rc=new j;class Yd{constructor(t=new Rs,i=new Rs,s=new Rs,l=new Rs,c=new Rs,h=new Rs){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Hi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],_=c[5],S=c[6],M=c[7],A=c[8],b=c[9],y=c[10],x=c[11],L=c[12],U=c[13],D=c[14],z=c[15];if(l[0].setComponents(p-h,M-v,x-A,z-L).normalize(),l[1].setComponents(p+h,M+v,x+A,z+L).normalize(),l[2].setComponents(p+d,M+_,x+b,z+U).normalize(),l[3].setComponents(p-d,M-_,x-b,z-U).normalize(),s)l[4].setComponents(m,S,y,D).normalize(),l[5].setComponents(p-m,M-S,x-y,z-D).normalize();else if(l[4].setComponents(p-m,M-S,x-y,z-D).normalize(),i===Hi)l[5].setComponents(p+m,M+S,x+y,z+D).normalize();else if(i===Fc)l[5].setComponents(m,S,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);const i=Qy.distanceTo(t.center);return Ts.radius=.7071067811865476+i,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Rc.x=l.normal.x>0?t.max.x:t.min.x,Rc.y=l.normal.y>0?t.max.y:t.min.y,Rc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vv extends Ir{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const kc=new j,Xc=new j,h_=new $e,Ho=new cv,Cc=new qc,Lh=new j,d_=new j;class Jy extends gn{constructor(t=new oi,i=new vv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)kc.fromBufferAttribute(i,l-1),Xc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=kc.distanceTo(Xc);t.setAttribute("lineDistance",new _n(s,1))}else ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,t.ray.intersectsSphere(Cc)===!1)return;h_.copy(l).invert(),Ho.copy(t.ray).applyMatrix4(h_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,S=s.attributes.position;if(v!==null){const M=Math.max(0,h.start),A=Math.min(v.count,h.start+h.count);for(let b=M,y=A-1;b<y;b+=p){const x=v.getX(b),L=v.getX(b+1),U=wc(this,t,Ho,m,x,L,b);U&&i.push(U)}if(this.isLineLoop){const b=v.getX(A-1),y=v.getX(M),x=wc(this,t,Ho,m,b,y,A-1);x&&i.push(x)}}else{const M=Math.max(0,h.start),A=Math.min(S.count,h.start+h.count);for(let b=M,y=A-1;b<y;b+=p){const x=wc(this,t,Ho,m,b,b+1,b);x&&i.push(x)}if(this.isLineLoop){const b=wc(this,t,Ho,m,A-1,M,A-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function wc(o,t,i,s,l,c,h){const d=o.geometry.attributes.position;if(kc.fromBufferAttribute(d,l),Xc.fromBufferAttribute(d,c),i.distanceSqToSegment(kc,Xc,Lh,d_)>s)return;Lh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Lh);if(!(p<t.near||p>t.far))return{distance:p,point:d_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const p_=new j,m_=new j;class $y extends Jy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)p_.fromBufferAttribute(i,l),m_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+p_.distanceTo(m_);t.setAttribute("lineDistance",new _n(s,1))}else ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jo extends Gn{constructor(t,i,s=Xi,l,c,h,d=Ln,m=Ln,p,v=ya,_=1){if(v!==ya&&v!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tM extends jo{constructor(t,i=Xi,s=Ls,l,c,h=Ln,d=Ln,m,p=ya){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,i,s,l,c,h,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xv extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yc extends oi{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const v=[],_=[],S=[],M=[];let A=0;const b=[],y=s/2;let x=0;L(),h===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new _n(_,3)),this.setAttribute("normal",new _n(S,3)),this.setAttribute("uv",new _n(M,2));function L(){const D=new j,z=new j;let B=0;const O=(i-t)/s;for(let X=0;X<=c;X++){const T=[],w=X/c,G=w*(i-t)+t;for(let Z=0;Z<=l;Z++){const tt=Z/l,ut=tt*m+d,lt=Math.sin(ut),I=Math.cos(ut);z.x=G*lt,z.y=-w*s+y,z.z=G*I,_.push(z.x,z.y,z.z),D.set(lt,O,I).normalize(),S.push(D.x,D.y,D.z),M.push(tt,1-w),T.push(A++)}b.push(T)}for(let X=0;X<l;X++)for(let T=0;T<c;T++){const w=b[T][X],G=b[T+1][X],Z=b[T+1][X+1],tt=b[T][X+1];(t>0||T!==0)&&(v.push(w,G,tt),B+=3),(i>0||T!==c-1)&&(v.push(G,Z,tt),B+=3)}p.addGroup(x,B,0),x+=B}function U(D){const z=A,B=new Me,O=new j;let X=0;const T=D===!0?t:i,w=D===!0?1:-1;for(let Z=1;Z<=l;Z++)_.push(0,y*w,0),S.push(0,w,0),M.push(.5,.5),A++;const G=A;for(let Z=0;Z<=l;Z++){const ut=Z/l*m+d,lt=Math.cos(ut),I=Math.sin(ut);O.x=T*I,O.y=y*w,O.z=T*lt,_.push(O.x,O.y,O.z),S.push(0,w,0),B.x=lt*.5+.5,B.y=I*.5*w+.5,M.push(B.x,B.y),A++}for(let Z=0;Z<l;Z++){const tt=z+Z,ut=G+Z;D===!0?v.push(ut,ut+1,tt):v.push(ut+1,ut,tt),X+=3}p.addGroup(x,X,D===!0?1:2),x+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kd extends Yc{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(t){return new Kd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kc extends oi{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),v(),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(c.slice(),3)),this.setAttribute("uv",new _n(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const U=new j,D=new j,z=new j;for(let B=0;B<i.length;B+=3)M(i[B+0],U),M(i[B+1],D),M(i[B+2],z),m(U,D,z,L)}function m(L,U,D,z){const B=z+1,O=[];for(let X=0;X<=B;X++){O[X]=[];const T=L.clone().lerp(D,X/B),w=U.clone().lerp(D,X/B),G=B-X;for(let Z=0;Z<=G;Z++)Z===0&&X===B?O[X][Z]=T:O[X][Z]=T.clone().lerp(w,Z/G)}for(let X=0;X<B;X++)for(let T=0;T<2*(B-X)-1;T++){const w=Math.floor(T/2);T%2===0?(S(O[X][w+1]),S(O[X+1][w]),S(O[X][w])):(S(O[X][w+1]),S(O[X+1][w+1]),S(O[X+1][w]))}}function p(L){const U=new j;for(let D=0;D<c.length;D+=3)U.x=c[D+0],U.y=c[D+1],U.z=c[D+2],U.normalize().multiplyScalar(L),c[D+0]=U.x,c[D+1]=U.y,c[D+2]=U.z}function v(){const L=new j;for(let U=0;U<c.length;U+=3){L.x=c[U+0],L.y=c[U+1],L.z=c[U+2];const D=y(L)/2/Math.PI+.5,z=x(L)/Math.PI+.5;h.push(D,1-z)}A(),_()}function _(){for(let L=0;L<h.length;L+=6){const U=h[L+0],D=h[L+2],z=h[L+4],B=Math.max(U,D,z),O=Math.min(U,D,z);B>.9&&O<.1&&(U<.2&&(h[L+0]+=1),D<.2&&(h[L+2]+=1),z<.2&&(h[L+4]+=1))}}function S(L){c.push(L.x,L.y,L.z)}function M(L,U){const D=L*3;U.x=t[D+0],U.y=t[D+1],U.z=t[D+2]}function A(){const L=new j,U=new j,D=new j,z=new j,B=new Me,O=new Me,X=new Me;for(let T=0,w=0;T<c.length;T+=9,w+=6){L.set(c[T+0],c[T+1],c[T+2]),U.set(c[T+3],c[T+4],c[T+5]),D.set(c[T+6],c[T+7],c[T+8]),B.set(h[w+0],h[w+1]),O.set(h[w+2],h[w+3]),X.set(h[w+4],h[w+5]),z.copy(L).add(U).add(D).divideScalar(3);const G=y(z);b(B,w+0,L,G),b(O,w+2,U,G),b(X,w+4,D,G)}}function b(L,U,D,z){z<0&&L.x===1&&(h[U]=L.x-1),D.x===0&&D.z===0&&(h[U]=z/2/Math.PI+.5)}function y(L){return Math.atan2(L.z,-L.x)}function x(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.vertices,t.indices,t.radius,t.detail)}}class jd extends Kc{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new jd(t.radius,t.detail)}}class Br extends oi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,_=t/d,S=i/m,M=[],A=[],b=[],y=[];for(let x=0;x<v;x++){const L=x*S-h;for(let U=0;U<p;U++){const D=U*_-c;A.push(D,-L,0),b.push(0,0,1),y.push(U/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let L=0;L<d;L++){const U=L+p*x,D=L+p*(x+1),z=L+1+p*(x+1),B=L+1+p*x;M.push(U,D,B),M.push(D,z,B)}this.setIndex(M),this.setAttribute("position",new _n(A,3)),this.setAttribute("normal",new _n(b,3)),this.setAttribute("uv",new _n(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zd extends Kc{constructor(t=1,i=0){const s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,l,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Zd(t.radius,t.detail)}}class eM extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ld extends Ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rv,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class nM extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iM extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Qd extends gn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Nh=new $e,g_=new j,__=new j;class Sv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yd,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;g_.setFromMatrixPosition(t.matrixWorld),i.position.copy(g_),__.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(__),i.updateMatrixWorld(),Nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class aM extends Sv{constructor(){super(new si(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const i=this.camera,s=Gc*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=t.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class sM extends Qd{constructor(t,i,s=0,l=Math.PI/3,c=0,h=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.distance=s,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new aM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(t).uuid),i.object.shadow=this.shadow.toJSON(),i}}class Jd extends mv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class rM extends Sv{constructor(){super(new Jd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oM extends Qd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new rM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class lM extends Qd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class cM extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class uM extends $y{constructor(t=10,i=10,s=4473924,l=8947848){s=new ge(s),l=new ge(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let S=0,M=0,A=-d;S<=i;S++,A+=h){m.push(-d,0,A,d,0,A),m.push(A,0,-d,A,0,d);const b=S===c?s:l;b.toArray(p,M),M+=3,b.toArray(p,M),M+=3,b.toArray(p,M),M+=3,b.toArray(p,M),M+=3}const v=new oi;v.setAttribute("position",new _n(m,3)),v.setAttribute("color",new _n(p,3));const _=new vv({vertexColors:!0,toneMapped:!1});super(v,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function v_(o,t,i,s){const l=fM(s);switch(i){case iv:return o*t;case sv:return o*t/l.components*l.byteLength;case Hd:return o*t/l.components*l.byteLength;case Nr:return o*t*2/l.components*l.byteLength;case Gd:return o*t*2/l.components*l.byteLength;case av:return o*t*3/l.components*l.byteLength;case Ui:return o*t*4/l.components*l.byteLength;case Vd:return o*t*4/l.components*l.byteLength;case Nc:case Oc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ed:case id:return Math.max(o,16)*Math.max(t,8)/4;case td:case nd:return Math.max(o,8)*Math.max(t,8)/2;case ad:case sd:case od:case ld:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case rd:case cd:case ud:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case hd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case dd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case pd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case md:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case gd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case _d:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case vd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case xd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case yd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Md:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Td:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bd:case Ad:case Rd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Cd:case wd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Dd:case Ud:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fM(o){switch(o){case ri:case $_:return{byteLength:1,components:1};case qo:case tv:case Sa:return{byteLength:2,components:1};case Bd:case Fd:return{byteLength:2,components:4};case Xi:case Id:case Fi:return{byteLength:4,components:1};case ev:case nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function hM(o){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const v=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,v);else{_.sort((M,A)=>M.start-A.start);let S=0;for(let M=1;M<_.length;M++){const A=_[S],b=_[M];b.start<=A.start+A.count+1?A.count=Math.max(A.count,b.start+b.count-A.start):(++S,_[S]=b)}_.length=S+1;for(let M=0,A=_.length;M<A;M++){const b=_[M];o.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var dM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
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
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xM=`#ifdef USE_AOMAP
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
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yM=`#ifdef USE_BATCHING
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
#endif`,MM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AM=`#ifdef USE_IRIDESCENCE
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
#endif`,RM=`#ifdef USE_BUMPMAP
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zM=`#define PI 3.141592653589793
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
} // validated`,IM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BM=`vec3 transformedNormal = objectNormal;
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
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",XM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tE=`#ifdef USE_GRADIENTMAP
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
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aE=`uniform bool receiveShadow;
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
#endif`,sE=`#ifdef USE_ENVMAP
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
#endif`,rE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uE=`PhysicalMaterial material;
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
#endif`,fE=`uniform sampler2D dfgLUT;
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
}`,hE=`
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
#endif`,dE=`#if defined( RE_IndirectDiffuse )
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
#endif`,pE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ME=`#if defined( USE_POINTS_UV )
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
#endif`,EE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
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
#endif`,wE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PE=`#ifdef USE_NORMALMAP
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
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QE=`float getShadowMask() {
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
}`,JE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eT=`#ifdef USE_SKINNING
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
#endif`,nT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rT=`#ifdef USE_TRANSMISSION
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
#endif`,oT=`#ifdef USE_TRANSMISSION
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
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dT=`uniform sampler2D t2D;
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`#include <common>
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
}`,xT=`#if DEPTH_PACKING == 3200
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
}`,ST=`#define DISTANCE
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
}`,yT=`#define DISTANCE
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ET=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`uniform float scale;
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
}`,bT=`uniform vec3 diffuse;
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
}`,AT=`#include <common>
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
}`,RT=`uniform vec3 diffuse;
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
}`,CT=`#define LAMBERT
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
}`,wT=`#define LAMBERT
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
}`,DT=`#define MATCAP
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
}`,UT=`#define MATCAP
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
}`,LT=`#define NORMAL
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
}`,NT=`#define NORMAL
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
}`,OT=`#define PHONG
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
}`,PT=`#define PHONG
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
}`,zT=`#define STANDARD
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
}`,IT=`#define STANDARD
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
}`,BT=`#define TOON
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
}`,FT=`#define TOON
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
}`,HT=`uniform float size;
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
}`,GT=`uniform vec3 diffuse;
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
}`,VT=`#include <common>
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
}`,kT=`uniform vec3 color;
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
}`,XT=`uniform float rotation;
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
}`,WT=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:dM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:_M,alphatest_pars_fragment:vM,aomap_fragment:xM,aomap_pars_fragment:SM,batching_pars_vertex:yM,batching_vertex:MM,begin_vertex:EM,beginnormal_vertex:TM,bsdfs:bM,iridescence_fragment:AM,bumpmap_pars_fragment:RM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:DM,clipping_planes_vertex:UM,color_fragment:LM,color_pars_fragment:NM,color_pars_vertex:OM,color_vertex:PM,common:zM,cube_uv_reflection_fragment:IM,defaultnormal_vertex:BM,displacementmap_pars_vertex:FM,displacementmap_vertex:HM,emissivemap_fragment:GM,emissivemap_pars_fragment:VM,colorspace_fragment:kM,colorspace_pars_fragment:XM,envmap_fragment:WM,envmap_common_pars_fragment:qM,envmap_pars_fragment:YM,envmap_pars_vertex:KM,envmap_physical_pars_fragment:sE,envmap_vertex:jM,fog_vertex:ZM,fog_pars_vertex:QM,fog_fragment:JM,fog_pars_fragment:$M,gradientmap_pars_fragment:tE,lightmap_pars_fragment:eE,lights_lambert_fragment:nE,lights_lambert_pars_fragment:iE,lights_pars_begin:aE,lights_toon_fragment:rE,lights_toon_pars_fragment:oE,lights_phong_fragment:lE,lights_phong_pars_fragment:cE,lights_physical_fragment:uE,lights_physical_pars_fragment:fE,lights_fragment_begin:hE,lights_fragment_maps:dE,lights_fragment_end:pE,logdepthbuf_fragment:mE,logdepthbuf_pars_fragment:gE,logdepthbuf_pars_vertex:_E,logdepthbuf_vertex:vE,map_fragment:xE,map_pars_fragment:SE,map_particle_fragment:yE,map_particle_pars_fragment:ME,metalnessmap_fragment:EE,metalnessmap_pars_fragment:TE,morphinstance_vertex:bE,morphcolor_vertex:AE,morphnormal_vertex:RE,morphtarget_pars_vertex:CE,morphtarget_vertex:wE,normal_fragment_begin:DE,normal_fragment_maps:UE,normal_pars_fragment:LE,normal_pars_vertex:NE,normal_vertex:OE,normalmap_pars_fragment:PE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:IE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:FE,opaque_fragment:HE,packing:GE,premultiplied_alpha_fragment:VE,project_vertex:kE,dithering_fragment:XE,dithering_pars_fragment:WE,roughnessmap_fragment:qE,roughnessmap_pars_fragment:YE,shadowmap_pars_fragment:KE,shadowmap_pars_vertex:jE,shadowmap_vertex:ZE,shadowmask_pars_fragment:QE,skinbase_vertex:JE,skinning_pars_vertex:$E,skinning_vertex:tT,skinnormal_vertex:eT,specularmap_fragment:nT,specularmap_pars_fragment:iT,tonemapping_fragment:aT,tonemapping_pars_fragment:sT,transmission_fragment:rT,transmission_pars_fragment:oT,uv_pars_fragment:lT,uv_pars_vertex:cT,uv_vertex:uT,worldpos_vertex:fT,background_vert:hT,background_frag:dT,backgroundCube_vert:pT,backgroundCube_frag:mT,cube_vert:gT,cube_frag:_T,depth_vert:vT,depth_frag:xT,distance_vert:ST,distance_frag:yT,equirect_vert:MT,equirect_frag:ET,linedashed_vert:TT,linedashed_frag:bT,meshbasic_vert:AT,meshbasic_frag:RT,meshlambert_vert:CT,meshlambert_frag:wT,meshmatcap_vert:DT,meshmatcap_frag:UT,meshnormal_vert:LT,meshnormal_frag:NT,meshphong_vert:OT,meshphong_frag:PT,meshphysical_vert:zT,meshphysical_frag:IT,meshtoon_vert:BT,meshtoon_frag:FT,points_vert:HT,points_frag:GT,shadow_vert:VT,shadow_frag:kT,sprite_vert:XT,sprite_frag:WT},Nt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Fn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ge(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Fn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Fn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Fn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ge(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Fn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Fn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Fn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Fn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Fn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Fn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Fn([Nt.common,Nt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Fn([Nt.lights,Nt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Dc={r:0,b:0,g:0},bs=new Wi,qT=new $e;function YT(o,t,i,s,l,c,h){const d=new ge(0);let m=c===!0?0:1,p,v,_=null,S=0,M=null;function A(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:t).get(D)),D}function b(U){let D=!1;const z=A(U);z===null?x(d,m):z&&z.isColor&&(x(z,1),D=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,D){const z=A(D);z&&(z.isCubeTexture||z.mapping===Wc)?(v===void 0&&(v=new qe(new Hn(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Pr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),bs.copy(D.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),v.material.uniforms.envMap.value=z,v.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(qT.makeRotationFromEuler(bs)),v.material.toneMapped=be.getTransfer(z.colorSpace)!==He,(_!==z||S!==z.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,_=z,S=z.version,M=o.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new qe(new Br(2,2),new qi({name:"BackgroundMaterial",uniforms:Pr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=be.getTransfer(z.colorSpace)!==He,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||S!==z.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=z,S=z.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,D){U.getRGB(Dc,pv(o)),s.buffers.color.setClear(Dc.r,Dc.g,Dc.b,D,h)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),m=D,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,x(d,m)},render:b,addToRenderList:y,dispose:L}}function KT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(w,G,Z,tt,ut){let lt=!1;const I=_(tt,Z,G);c!==I&&(c=I,p(c.object)),lt=M(w,tt,Z,ut),lt&&A(w,tt,Z,ut),ut!==null&&t.update(ut,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,D(w,G,Z,tt),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function _(w,G,Z){const tt=Z.wireframe===!0;let ut=s[w.id];ut===void 0&&(ut={},s[w.id]=ut);let lt=ut[G.id];lt===void 0&&(lt={},ut[G.id]=lt);let I=lt[tt];return I===void 0&&(I=S(m()),lt[tt]=I),I}function S(w){const G=[],Z=[],tt=[];for(let ut=0;ut<i;ut++)G[ut]=0,Z[ut]=0,tt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:tt,object:w,attributes:{},index:null}}function M(w,G,Z,tt){const ut=c.attributes,lt=G.attributes;let I=0;const H=Z.getAttributes();for(const st in H)if(H[st].location>=0){const xt=ut[st];let P=lt[st];if(P===void 0&&(st==="instanceMatrix"&&w.instanceMatrix&&(P=w.instanceMatrix),st==="instanceColor"&&w.instanceColor&&(P=w.instanceColor)),xt===void 0||xt.attribute!==P||P&&xt.data!==P.data)return!0;I++}return c.attributesNum!==I||c.index!==tt}function A(w,G,Z,tt){const ut={},lt=G.attributes;let I=0;const H=Z.getAttributes();for(const st in H)if(H[st].location>=0){let xt=lt[st];xt===void 0&&(st==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),st==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor));const P={};P.attribute=xt,xt&&xt.data&&(P.data=xt.data),ut[st]=P,I++}c.attributes=ut,c.attributesNum=I,c.index=tt}function b(){const w=c.newAttributes;for(let G=0,Z=w.length;G<Z;G++)w[G]=0}function y(w){x(w,0)}function x(w,G){const Z=c.newAttributes,tt=c.enabledAttributes,ut=c.attributeDivisors;Z[w]=1,tt[w]===0&&(o.enableVertexAttribArray(w),tt[w]=1),ut[w]!==G&&(o.vertexAttribDivisor(w,G),ut[w]=G)}function L(){const w=c.newAttributes,G=c.enabledAttributes;for(let Z=0,tt=G.length;Z<tt;Z++)G[Z]!==w[Z]&&(o.disableVertexAttribArray(Z),G[Z]=0)}function U(w,G,Z,tt,ut,lt,I){I===!0?o.vertexAttribIPointer(w,G,Z,ut,lt):o.vertexAttribPointer(w,G,Z,tt,ut,lt)}function D(w,G,Z,tt){b();const ut=tt.attributes,lt=Z.getAttributes(),I=G.defaultAttributeValues;for(const H in lt){const st=lt[H];if(st.location>=0){let yt=ut[H];if(yt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const xt=yt.normalized,P=yt.itemSize,at=t.get(yt);if(at===void 0)continue;const gt=at.buffer,bt=at.type,Bt=at.bytesPerElement,it=bt===o.INT||bt===o.UNSIGNED_INT||yt.gpuType===Id;if(yt.isInterleavedBufferAttribute){const ft=yt.data,wt=ft.stride,kt=yt.offset;if(ft.isInstancedInterleavedBuffer){for(let Ht=0;Ht<st.locationSize;Ht++)x(st.location+Ht,ft.meshPerAttribute);w.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ht=0;Ht<st.locationSize;Ht++)y(st.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Ht=0;Ht<st.locationSize;Ht++)U(st.location+Ht,P/st.locationSize,bt,xt,wt*Bt,(kt+P/st.locationSize*Ht)*Bt,it)}else{if(yt.isInstancedBufferAttribute){for(let ft=0;ft<st.locationSize;ft++)x(st.location+ft,yt.meshPerAttribute);w.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ft=0;ft<st.locationSize;ft++)y(st.location+ft);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let ft=0;ft<st.locationSize;ft++)U(st.location+ft,P/st.locationSize,bt,xt,P*Bt,P/st.locationSize*ft*Bt,it)}}else if(I!==void 0){const xt=I[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(st.location,xt);break;case 3:o.vertexAttrib3fv(st.location,xt);break;case 4:o.vertexAttrib4fv(st.location,xt);break;default:o.vertexAttrib1fv(st.location,xt)}}}}L()}function z(){X();for(const w in s){const G=s[w];for(const Z in G){const tt=G[Z];for(const ut in tt)v(tt[ut].object),delete tt[ut];delete G[Z]}delete s[w]}}function B(w){if(s[w.id]===void 0)return;const G=s[w.id];for(const Z in G){const tt=G[Z];for(const ut in tt)v(tt[ut].object),delete tt[ut];delete G[Z]}delete s[w.id]}function O(w){for(const G in s){const Z=s[G];if(Z[w.id]===void 0)continue;const tt=Z[w.id];for(const ut in tt)v(tt[ut].object),delete tt[ut];delete Z[w.id]}}function X(){T(),h=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:T,dispose:z,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:y,disableUnusedAttributes:L}}function jT(o,t,i){let s;function l(p){s=p}function c(p,v){o.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,_){_!==0&&(o.drawArraysInstanced(s,p,v,_),i.update(v,s,_))}function d(p,v,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,_);let M=0;for(let A=0;A<_;A++)M+=v[A];i.update(M,s,1)}function m(p,v,_,S){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],v[A],S[A]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,S,0,_);let A=0;for(let b=0;b<_;b++)A+=v[b]*S[b];i.update(A,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ZT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Ui&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const X=O===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==ri&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Fi&&!X)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ie("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:A,maxTextureSize:b,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:D,maxSamples:z,samples:B}}function QT(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Rs,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||s!==0||l;return l=S,s=_.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){i=v(_,S,0)},this.setState=function(_,S,M){const A=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,x=o.get(_);if(!l||A===null||A.length===0||c&&!y)c?v(null):p();else{const L=c?0:s,U=L*4;let D=x.clippingState||null;m.value=D,D=v(A,S,U,M);for(let z=0;z!==U;++z)D[z]=i[z];x.clippingState=D,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(_,S,M,A){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=m.value,A!==!0||y===null){const x=M+b*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<x)&&(y=new Float32Array(x));for(let U=0,D=M;U!==b;++U,D+=4)h.copy(_[U]).applyMatrix4(L,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}function JT(o){let t=new WeakMap;function i(h,d){return d===Zh?h.mapping=Ls:d===Qh&&(h.mapping=Lr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Zh||d===Qh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new _v(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const es=4,x_=[.125,.215,.35,.446,.526,.582],ws=20,$T=256,Go=new Jd,S_=new ge;let Oh=null,Ph=0,zh=0,Ih=!1;const tb=new j;class y_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=tb}=c;Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Oh,Ph,zh),this._renderer.xr.enabled=Ih,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ls||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Sa,format:Ui,colorSpace:Or,depthBuffer:!1},l=M_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eb(c)),this._blurMaterial=ib(c,t,i),this._ggxMaterial=nb(c,t,i)}return l}_compileMaterial(t){const i=new qe(new oi,t);this._renderer.compile(i,Go)}_sceneToCubeUV(t,i,s,l,c){const m=new si(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(S_),_.toneMapping=Gi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new Hn,new Vc({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let x=!1;const L=t.background;L?L.isColor&&(y.color.copy(L),t.background=null,x=!0):(y.color.copy(S_),x=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const z=this._cubeSize;Cr(l,D*z,U>2?z:0,z,z),_.setRenderTarget(l),x&&_.render(b,m),_.render(t,m)}_.toneMapping=M,_.autoClear=S,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ls||t.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=T_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Cr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Go)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),S=0+p*1.25,M=_*S,{_lodMax:A}=this,b=this._sizeLods[s],y=3*b*(s>A-es?s-A+es:0),x=4*(this._cubeSize-b);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=A-i,Cr(c,y,x,3*b,2*b),l.setRenderTarget(c),l.render(d,Go),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,Cr(t,y,x,3*b,2*b),l.setRenderTarget(t),l.render(d,Go)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ws-1),b=c/A,y=isFinite(c)?1+Math.floor(v*b):ws;y>ws&&ie(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ws}`);const x=[];let L=0;for(let O=0;O<ws;++O){const X=O/b,T=Math.exp(-X*X/2);x.push(T),O===0?L+=T:O<y&&(L+=2*T)}for(let O=0;O<x.length;O++)x[O]=x[O]/L;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:U}=this;S.dTheta.value=A,S.mipInt.value=U-s;const D=this._sizeLods[l],z=3*D*(l>U-es?l-U+es:0),B=4*(this._cubeSize-D);Cr(i,z,B,3*D,2*D),m.setRenderTarget(i),m.render(_,Go)}}function eb(o){const t=[],i=[],s=[];let l=o;const c=o-es+1+x_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>o-es?m=x_[h-o+es-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,_=1+p,S=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,A=6,b=3,y=2,x=1,L=new Float32Array(b*A*M),U=new Float32Array(y*A*M),D=new Float32Array(x*A*M);for(let B=0;B<M;B++){const O=B%3*2/3-1,X=B>2?0:-1,T=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];L.set(T,b*A*B),U.set(S,y*A*B);const w=[B,B,B,B,B,B];D.set(w,x*A*B)}const z=new oi;z.setAttribute("position",new ki(L,b)),z.setAttribute("uv",new ki(U,y)),z.setAttribute("faceIndex",new ki(D,x)),s.push(new qe(z,null)),l>es&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function M_(o,t,i){const s=new Vi(o,t,i);return s.texture.mapping=Wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function nb(o,t,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$T,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function ib(o,t,i){const s=new Float32Array(ws),l=new j(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jc(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function E_(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function T_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function ab(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Zh||m===Qh,v=m===Ls||m===Lr;if(p||v){let _=t.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new y_(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new y_(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function sb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ko("WebGLRenderer: "+s+" extension not supported."),l}}}function rb(o,t,i,s){const l={},c=new WeakMap;function h(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const M=c.get(S);M&&(t.remove(M),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(_,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const M in S)t.update(S[M],o.ARRAY_BUFFER)}function p(_){const S=[],M=_.index,A=_.attributes.position;let b=0;if(M!==null){const L=M.array;b=M.version;for(let U=0,D=L.length;U<D;U+=3){const z=L[U+0],B=L[U+1],O=L[U+2];S.push(z,B,B,O,O,z)}}else if(A!==void 0){const L=A.array;b=A.version;for(let U=0,D=L.length/3-1;U<D;U+=3){const z=U+0,B=U+1,O=U+2;S.push(z,B,B,O,O,z)}}else return;const y=new(ov(S)?dv:hv)(S,1);y.version=b;const x=c.get(_);x&&t.remove(x),c.set(_,y)}function v(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:v}}function ob(o,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(s,M,c,S*h),i.update(M,s,1)}function p(S,M,A){A!==0&&(o.drawElementsInstanced(s,M,c,S*h,A),i.update(M,s,A))}function v(S,M,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,S,0,A);let y=0;for(let x=0;x<A;x++)y+=M[x];i.update(y,s,1)}function _(S,M,A,b){if(A===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)p(S[x]/h,M[x],b[x]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,S,0,b,0,A);let x=0;for(let L=0;L<A;L++)x+=M[L]*b[L];i.update(x,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function lb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function cb(o,t,i){const s=new WeakMap,l=new sn;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let w=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;A===!0&&(D=1),b===!0&&(D=2),y===!0&&(D=3);let z=d.attributes.position.count*D,B=1;z>t.maxTextureSize&&(B=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const O=new Float32Array(z*B*4*_),X=new lv(O,z,B,_);X.type=Fi,X.needsUpdate=!0;const T=D*4;for(let G=0;G<_;G++){const Z=x[G],tt=L[G],ut=U[G],lt=z*B*4*G;for(let I=0;I<Z.count;I++){const H=I*T;A===!0&&(l.fromBufferAttribute(Z,I),O[lt+H+0]=l.x,O[lt+H+1]=l.y,O[lt+H+2]=l.z,O[lt+H+3]=0),b===!0&&(l.fromBufferAttribute(tt,I),O[lt+H+4]=l.x,O[lt+H+5]=l.y,O[lt+H+6]=l.z,O[lt+H+7]=0),y===!0&&(l.fromBufferAttribute(ut,I),O[lt+H+8]=l.x,O[lt+H+9]=l.y,O[lt+H+10]=l.z,O[lt+H+11]=ut.itemSize===4?l.w:1)}}S={count:_,texture:X,size:new Me(z,B)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const b=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",b),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function ub(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,_=t.get(m,v);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const fb={[W_]:"LINEAR_TONE_MAPPING",[q_]:"REINHARD_TONE_MAPPING",[Y_]:"CINEON_TONE_MAPPING",[K_]:"ACES_FILMIC_TONE_MAPPING",[Z_]:"AGX_TONE_MAPPING",[Q_]:"NEUTRAL_TONE_MAPPING",[j_]:"CUSTOM_TONE_MAPPING"};function hb(o,t,i,s,l){const c=new Vi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),h=new Vi(t,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),d=new oi;d.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new _n([0,2,0,0,2,0],2));const m=new eM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new qe(d,m),v=new Jd(-1,1,1,-1,0,1);let _=null,S=null,M=!1,A,b=null,y=[],x=!1;this.setSize=function(L,U){c.setSize(L,U),h.setSize(L,U);for(let D=0;D<y.length;D++){const z=y[D];z.setSize&&z.setSize(L,U)}},this.setEffects=function(L){y=L,x=y.length>0&&y[0].isRenderPass===!0;const U=c.width,D=c.height;for(let z=0;z<y.length;z++){const B=y[z];B.setSize&&B.setSize(U,D)}},this.begin=function(L,U){if(M||L.toneMapping===Gi&&y.length===0)return!1;if(b=U,U!==null){const D=U.width,z=U.height;(c.width!==D||c.height!==z)&&this.setSize(D,z)}return x===!1&&L.setRenderTarget(c),A=L.toneMapping,L.toneMapping=Gi,!0},this.hasRenderPass=function(){return x},this.end=function(L,U){L.toneMapping=A,M=!0;let D=c,z=h;for(let B=0;B<y.length;B++){const O=y[B];if(O.enabled!==!1&&(O.render(L,z,D,U),O.needsSwap!==!1)){const X=D;D=z,z=X}}if(_!==L.outputColorSpace||S!==L.toneMapping){_=L.outputColorSpace,S=L.toneMapping,m.defines={},be.getTransfer(_)===He&&(m.defines.SRGB_TRANSFER="");const B=fb[S];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(b),L.render(p,v),b=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Mv=new Gn,Nd=new jo(1,1),Ev=new lv,Tv=new wy,bv=new gv,b_=[],A_=[],R_=new Float32Array(16),C_=new Float32Array(9),w_=new Float32Array(4);function Fr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=b_[l];if(c===void 0&&(c=new Float32Array(l),b_[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function vn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function xn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Zc(o,t){let i=A_[t];i===void 0&&(i=new Int32Array(t),A_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function db(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function pb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2fv(this.addr,t),xn(i,t)}}function mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;o.uniform3fv(this.addr,t),xn(i,t)}}function gb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4fv(this.addr,t),xn(i,t)}}function _b(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;w_.set(s),o.uniformMatrix2fv(this.addr,!1,w_),xn(i,s)}}function vb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;C_.set(s),o.uniformMatrix3fv(this.addr,!1,C_),xn(i,s)}}function xb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(vn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(vn(i,s))return;R_.set(s),o.uniformMatrix4fv(this.addr,!1,R_),xn(i,s)}}function Sb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function yb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2iv(this.addr,t),xn(i,t)}}function Mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3iv(this.addr,t),xn(i,t)}}function Eb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4iv(this.addr,t),xn(i,t)}}function Tb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function bb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;o.uniform2uiv(this.addr,t),xn(i,t)}}function Ab(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;o.uniform3uiv(this.addr,t),xn(i,t)}}function Rb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;o.uniform4uiv(this.addr,t),xn(i,t)}}function Cb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Nd.compareFunction=i.isReversedDepthBuffer()?Xd:kd,c=Nd):c=Mv,i.setTexture2D(t||c,l)}function wb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Tv,l)}function Db(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||bv,l)}function Ub(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Ev,l)}function Lb(o){switch(o){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return vb;case 35676:return xb;case 5124:case 35670:return Sb;case 35667:case 35671:return yb;case 35668:case 35672:return Mb;case 35669:case 35673:return Eb;case 5125:return Tb;case 36294:return bb;case 36295:return Ab;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Ub}}function Nb(o,t){o.uniform1fv(this.addr,t)}function Ob(o,t){const i=Fr(t,this.size,2);o.uniform2fv(this.addr,i)}function Pb(o,t){const i=Fr(t,this.size,3);o.uniform3fv(this.addr,i)}function zb(o,t){const i=Fr(t,this.size,4);o.uniform4fv(this.addr,i)}function Ib(o,t){const i=Fr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Bb(o,t){const i=Fr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Fb(o,t){const i=Fr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Hb(o,t){o.uniform1iv(this.addr,t)}function Gb(o,t){o.uniform2iv(this.addr,t)}function Vb(o,t){o.uniform3iv(this.addr,t)}function kb(o,t){o.uniform4iv(this.addr,t)}function Xb(o,t){o.uniform1uiv(this.addr,t)}function Wb(o,t){o.uniform2uiv(this.addr,t)}function qb(o,t){o.uniform3uiv(this.addr,t)}function Yb(o,t){o.uniform4uiv(this.addr,t)}function Kb(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Nd:h=Mv;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function jb(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Tv,c[h])}function Zb(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||bv,c[h])}function Qb(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);vn(s,c)||(o.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Ev,c[h])}function Jb(o){switch(o){case 5126:return Nb;case 35664:return Ob;case 35665:return Pb;case 35666:return zb;case 35674:return Ib;case 35675:return Bb;case 35676:return Fb;case 5124:case 35670:return Hb;case 35667:case 35671:return Gb;case 35668:case 35672:return Vb;case 35669:case 35673:return kb;case 5125:return Xb;case 36294:return Wb;case 36295:return qb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return jb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Qb}}class $b{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Lb(i.type)}}class t1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Jb(i.type)}}class e1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Bh=/(\w+)(\])?(\[|\.)?/g;function D_(o,t){o.seq.push(t),o.map[t.id]=t}function n1(o,t,i){const s=o.name,l=s.length;for(Bh.lastIndex=0;;){const c=Bh.exec(s),h=Bh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){D_(i,p===void 0?new $b(d,o,t):new t1(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new e1(d),D_(i,_)),i=_}}}class Ic{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);n1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function U_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const i1=37297;let a1=0;function s1(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const L_=new ue;function r1(o){be._getMatrix(L_,be.workingColorSpace,o);const t=`mat3( ${L_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Bc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function N_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+s1(o.getShaderSource(t),d)}else return c}function o1(o,t){const i=r1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const l1={[W_]:"Linear",[q_]:"Reinhard",[Y_]:"Cineon",[K_]:"ACESFilmic",[Z_]:"AgX",[Q_]:"Neutral",[j_]:"Custom"};function c1(o,t){const i=l1[t];return i===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new j;function u1(){be.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),t=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function h1(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function d1(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Wo(o){return o!==""}function O_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function P_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const p1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(o){return o.replace(p1,g1)}const m1=new Map;function g1(o,t){let i=fe[t];if(i===void 0){const s=m1.get(t);if(s!==void 0)i=fe[s],ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Od(i)}const _1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z_(o){return o.replace(_1,v1)}function v1(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function I_(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const x1={[Lc]:"SHADOWMAP_TYPE_PCF",[Xo]:"SHADOWMAP_TYPE_VSM"};function S1(o){return x1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const y1={[Ls]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[Wc]:"ENVMAP_TYPE_CUBE_UV"};function M1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":y1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const E1={[Lr]:"ENVMAP_MODE_REFRACTION"};function T1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":E1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const b1={[X_]:"ENVMAP_BLENDING_MULTIPLY",[uy]:"ENVMAP_BLENDING_MIX",[fy]:"ENVMAP_BLENDING_ADD"};function A1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":b1[o.combine]||"ENVMAP_BLENDING_NONE"}function R1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function C1(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=S1(i),p=M1(i),v=T1(i),_=A1(i),S=R1(i),M=f1(i),A=h1(c),b=l.createProgram();let y,x,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Wo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Wo).join(`
`),x.length>0&&(x+=`
`)):(y=[I_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),x=[I_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Gi?c1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,o1("linearToOutputTexel",i.outputColorSpace),u1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),h=Od(h),h=O_(h,i),h=P_(h,i),d=Od(d),d=O_(d,i),d=P_(d,i),h=z_(h),d=z_(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=L+y+h,D=L+x+d,z=U_(l,l.VERTEX_SHADER,U),B=U_(l,l.FRAGMENT_SHADER,D);l.attachShader(b,z),l.attachShader(b,B),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function O(G){if(o.debug.checkShaderErrors){const Z=l.getProgramInfoLog(b)||"",tt=l.getShaderInfoLog(z)||"",ut=l.getShaderInfoLog(B)||"",lt=Z.trim(),I=tt.trim(),H=ut.trim();let st=!0,yt=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(st=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,z,B);else{const xt=N_(l,z,"vertex"),P=N_(l,B,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+xt+`
`+P)}else lt!==""?ie("WebGLProgram: Program Info Log:",lt):(I===""||H==="")&&(yt=!1);yt&&(G.diagnostics={runnable:st,programLog:lt,vertexShader:{log:I,prefix:y},fragmentShader:{log:H,prefix:x}})}l.deleteShader(z),l.deleteShader(B),X=new Ic(l,b),T=d1(l,b)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(b,i1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=a1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=B,this}let w1=0;class D1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new U1(t),i.set(t,s)),s}}class U1{constructor(t){this.id=w1++,this.code=t,this.usedTimes=0}}function L1(o,t,i,s,l,c,h){const d=new uv,m=new D1,p=new Set,v=[],_=new Map,S=l.logarithmicDepthBuffer;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return p.add(T),T===0?"uv":`uv${T}`}function y(T,w,G,Z,tt){const ut=Z.fog,lt=tt.geometry,I=T.isMeshStandardMaterial?Z.environment:null,H=(T.isMeshStandardMaterial?i:t).get(T.envMap||I),st=H&&H.mapping===Wc?H.image.height:null,yt=A[T.type];T.precision!==null&&(M=l.getMaxPrecision(T.precision),M!==T.precision&&ie("WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const xt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,P=xt!==void 0?xt.length:0;let at=0;lt.morphAttributes.position!==void 0&&(at=1),lt.morphAttributes.normal!==void 0&&(at=2),lt.morphAttributes.color!==void 0&&(at=3);let gt,bt,Bt,it;if(yt){const Te=Bi[yt];gt=Te.vertexShader,bt=Te.fragmentShader}else gt=T.vertexShader,bt=T.fragmentShader,m.update(T),Bt=m.getVertexShaderID(T),it=m.getFragmentShaderID(T);const ft=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),kt=tt.isInstancedMesh===!0,Ht=tt.isBatchedMesh===!0,he=!!T.map,tn=!!T.matcap,_e=!!H,de=!!T.aoMap,we=!!T.lightMap,re=!!T.bumpMap,en=!!T.normalMap,V=!!T.displacementMap,Ze=!!T.emissiveMap,Ee=!!T.metalnessMap,Oe=!!T.roughnessMap,Yt=T.anisotropy>0,N=T.clearcoat>0,E=T.dispersion>0,q=T.iridescence>0,dt=T.sheen>0,vt=T.transmission>0,ct=Yt&&!!T.anisotropyMap,jt=N&&!!T.clearcoatMap,Rt=N&&!!T.clearcoatNormalMap,Xt=N&&!!T.clearcoatRoughnessMap,ee=q&&!!T.iridescenceMap,Mt=q&&!!T.iridescenceThicknessMap,Et=dt&&!!T.sheenColorMap,zt=dt&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Ct=!!T.specularColorMap,le=!!T.specularIntensityMap,W=vt&&!!T.transmissionMap,Ut=vt&&!!T.thicknessMap,Tt=!!T.gradientMap,Pt=!!T.alphaMap,St=T.alphaTest>0,_t=!!T.alphaHash,At=!!T.extensions;let ne=Gi;T.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ne=o.toneMapping);const ze={shaderID:yt,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:bt,defines:T.defines,customVertexShaderID:Bt,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:Ht,batchingColor:Ht&&tt._colorsTexture!==null,instancing:kt,instancingColor:kt&&tt.instanceColor!==null,instancingMorph:kt&&tt.morphTexture!==null,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Or,alphaToCoverage:!!T.alphaToCoverage,map:he,matcap:tn,envMap:_e,envMapMode:_e&&H.mapping,envMapCubeUVHeight:st,aoMap:de,lightMap:we,bumpMap:re,normalMap:en,displacementMap:V,emissiveMap:Ze,normalMapObjectSpace:en&&T.normalMapType===py,normalMapTangentSpace:en&&T.normalMapType===rv,metalnessMap:Ee,roughnessMap:Oe,anisotropy:Yt,anisotropyMap:ct,clearcoat:N,clearcoatMap:jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:q,iridescenceMap:ee,iridescenceThicknessMap:Mt,sheen:dt,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:le,transmission:vt,transmissionMap:W,thicknessMap:Ut,gradientMap:Tt,opaque:T.transparent===!1&&T.blending===wr&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:_t,combine:T.combine,mapUv:he&&b(T.map.channel),aoMapUv:de&&b(T.aoMap.channel),lightMapUv:we&&b(T.lightMap.channel),bumpMapUv:re&&b(T.bumpMap.channel),normalMapUv:en&&b(T.normalMap.channel),displacementMapUv:V&&b(T.displacementMap.channel),emissiveMapUv:Ze&&b(T.emissiveMap.channel),metalnessMapUv:Ee&&b(T.metalnessMap.channel),roughnessMapUv:Oe&&b(T.roughnessMap.channel),anisotropyMapUv:ct&&b(T.anisotropyMap.channel),clearcoatMapUv:jt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:zt&&b(T.sheenRoughnessMap.channel),specularMapUv:Ot&&b(T.specularMap.channel),specularColorMapUv:Ct&&b(T.specularColorMap.channel),specularIntensityMapUv:le&&b(T.specularIntensityMap.channel),transmissionMapUv:W&&b(T.transmissionMap.channel),thicknessMapUv:Ut&&b(T.thicknessMap.channel),alphaMapUv:Pt&&b(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(en||Yt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!lt.attributes.uv&&(he||Pt),fog:!!ut,useFog:T.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:wt,skinning:tt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:at,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ne,decodeVideoTexture:he&&T.map.isVideoTexture===!0&&be.getTransfer(T.map.colorSpace)===He,decodeVideoTextureEmissive:Ze&&T.emissiveMap.isVideoTexture===!0&&be.getTransfer(T.emissiveMap.colorSpace)===He,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ga,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:At&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&T.extensions.multiDraw===!0||Ht)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function x(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const G in T.defines)w.push(G),w.push(T.defines[G]);return T.isRawShaderMaterial===!1&&(L(w,T),U(w,T),w.push(o.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function L(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function U(T,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),T.push(d.mask)}function D(T){const w=A[T.type];let G;if(w){const Z=Bi[w];G=Vy.clone(Z.uniforms)}else G=T.uniforms;return G}function z(T,w){let G=_.get(w);return G!==void 0?++G.usedTimes:(G=new C1(o,w,T,c),v.push(G),_.set(w,G)),G}function B(T){if(--T.usedTimes===0){const w=v.indexOf(T);v[w]=v[v.length-1],v.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){m.remove(T)}function X(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:D,acquireProgram:z,releaseProgram:B,releaseShaderCache:O,programs:v,dispose:X}}function N1(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function O1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function B_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function F_(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,S,M,A,b,y){let x=o[t];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:A,renderOrder:_.renderOrder,z:b,group:y},o[t]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=A,x.renderOrder=_.renderOrder,x.z=b,x.group=y),t++,x}function d(_,S,M,A,b,y){const x=h(_,S,M,A,b,y);M.transmission>0?s.push(x):M.transparent===!0?l.push(x):i.push(x)}function m(_,S,M,A,b,y){const x=h(_,S,M,A,b,y);M.transmission>0?s.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,S){i.length>1&&i.sort(_||O1),s.length>1&&s.sort(S||B_),l.length>1&&l.sort(S||B_)}function v(){for(let _=t,S=o.length;_<S;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function P1(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new F_,o.set(s,[h])):l>=c.length?(h=new F_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function z1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new j,color:new ge};break;case"SpotLight":i={position:new j,direction:new j,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":i={color:new ge,position:new j,halfWidth:new j,halfHeight:new j};break}return o[t.id]=i,i}}}function I1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let B1=0;function F1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function H1(o){const t=new z1,i=I1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,c=new $e,h=new $e;function d(p){let v=0,_=0,S=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let M=0,A=0,b=0,y=0,x=0,L=0,U=0,D=0,z=0,B=0,O=0;p.sort(F1);for(let T=0,w=p.length;T<w;T++){const G=p[T],Z=G.color,tt=G.intensity,ut=G.distance;let lt=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Nr?lt=G.shadow.map.texture:lt=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=Z.r*tt,_+=Z.g*tt,S+=Z.b*tt;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],tt);O++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,st=i.get(G);st.shadowIntensity=H.intensity,st.shadowBias=H.bias,st.shadowNormalBias=H.normalBias,st.shadowRadius=H.radius,st.shadowMapSize=H.mapSize,s.directionalShadow[M]=st,s.directionalShadowMap[M]=lt,s.directionalShadowMatrix[M]=G.shadow.matrix,L++}s.directional[M]=I,M++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(Z).multiplyScalar(tt),I.distance=ut,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[b]=I;const H=G.shadow;if(G.map&&(s.spotLightMap[z]=G.map,z++,H.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[b]=H.matrix,G.castShadow){const st=i.get(G);st.shadowIntensity=H.intensity,st.shadowBias=H.bias,st.shadowNormalBias=H.normalBias,st.shadowRadius=H.radius,st.shadowMapSize=H.mapSize,s.spotShadow[b]=st,s.spotShadowMap[b]=lt,D++}b++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(Z).multiplyScalar(tt),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=I,y++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const H=G.shadow,st=i.get(G);st.shadowIntensity=H.intensity,st.shadowBias=H.bias,st.shadowNormalBias=H.normalBias,st.shadowRadius=H.radius,st.shadowMapSize=H.mapSize,st.shadowCameraNear=H.camera.near,st.shadowCameraFar=H.camera.far,s.pointShadow[A]=st,s.pointShadowMap[A]=lt,s.pointShadowMatrix[A]=G.shadow.matrix,U++}s.point[A]=I,A++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(tt),I.groundColor.copy(G.groundColor).multiplyScalar(tt),s.hemi[x]=I,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=_,s.ambient[2]=S;const X=s.hash;(X.directionalLength!==M||X.pointLength!==A||X.spotLength!==b||X.rectAreaLength!==y||X.hemiLength!==x||X.numDirectionalShadows!==L||X.numPointShadows!==U||X.numSpotShadows!==D||X.numSpotMaps!==z||X.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=y,s.point.length=A,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+z-B,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=O,X.directionalLength=M,X.pointLength=A,X.spotLength=b,X.rectAreaLength=y,X.hemiLength=x,X.numDirectionalShadows=L,X.numPointShadows=U,X.numSpotShadows=D,X.numSpotMaps=z,X.numLightProbes=O,s.version=B1++)}function m(p,v){let _=0,S=0,M=0,A=0,b=0;const y=v.matrixWorldInverse;for(let x=0,L=p.length;x<L;x++){const U=p[x];if(U.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),_++}else if(U.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const D=s.rectArea[A];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),h.identity(),c.copy(U.matrixWorld),c.premultiply(y),h.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),A++}else if(U.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const D=s.hemi[b];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(y),b++}}}return{setup:d,setupView:m,state:s}}function H_(o){const t=new H1(o),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function G1(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new H_(o),t.set(l,[d])):c>=h.length?(d=new H_(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k1=`uniform sampler2D shadow_pass;
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
}`,X1=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],W1=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],G_=new $e,Vo=new j,Fh=new j;function q1(o,t,i){let s=new Yd;const l=new Me,c=new Me,h=new sn,d=new nM,m=new iM,p={},v=i.maxTextureSize,_={[ns]:jn,[jn]:ns,[ga]:ga},S=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:V1,fragmentShader:k1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new oi;A.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new qe(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let x=this.type;this.render=function(B,O,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;B.type===WS&&(ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Lc);const T=o.getRenderTarget(),w=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(va),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const tt=x!==this.type;tt&&O.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(lt=>lt.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,lt=B.length;ut<lt;ut++){const I=B[ut],H=I.shadow;if(H===void 0){ie("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const st=H.getFrameExtents();if(l.multiply(st),c.copy(H.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/st.x),l.x=c.x*st.x,H.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/st.y),l.y=c.y*st.y,H.mapSize.y=c.y)),H.map===null||tt===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Xo){if(I.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vi(l.x,l.y,{format:Nr,type:Sa,minFilter:In,magFilter:In,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new jo(l.x,l.y,Fi),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=ya,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln}else{I.isPointLight?(H.map=new _v(l.x),H.map.depthTexture=new tM(l.x,Xi)):(H.map=new Vi(l.x,l.y),H.map.depthTexture=new jo(l.x,l.y,Xi)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=ya;const xt=o.state.buffers.depth.getReversed();this.type===Lc?(H.map.depthTexture.compareFunction=xt?Xd:kd,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln)}H.camera.updateProjectionMatrix()}const yt=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const P=H.getViewport(xt);h.set(c.x*P.x,c.y*P.y,c.x*P.z,c.y*P.w),Z.viewport(h)}if(I.isPointLight){const P=H.camera,at=H.matrix,gt=I.distance||P.far;gt!==P.far&&(P.far=gt,P.updateProjectionMatrix()),Vo.setFromMatrixPosition(I.matrixWorld),P.position.copy(Vo),Fh.copy(P.position),Fh.add(X1[xt]),P.up.copy(W1[xt]),P.lookAt(Fh),P.updateMatrixWorld(),at.makeTranslation(-Vo.x,-Vo.y,-Vo.z),G_.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),H._frustum.setFromProjectionMatrix(G_,P.coordinateSystem,P.reversedDepth)}else H.updateMatrices(I);s=H.getFrustum(),D(O,X,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===Xo&&L(H,X),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(T,w,G)};function L(B,O){const X=t.update(b);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Vi(l.x,l.y,{format:Nr,type:Sa})),S.uniforms.shadow_pass.value=B.map.depthTexture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(O,null,X,S,b,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(O,null,X,M,b,null)}function U(B,O,X,T){let w=null;const G=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)w=G;else if(w=X.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=w.uuid,tt=O.uuid;let ut=p[Z];ut===void 0&&(ut={},p[Z]=ut);let lt=ut[tt];lt===void 0&&(lt=w.clone(),ut[tt]=lt,O.addEventListener("dispose",z)),w=lt}if(w.visible=O.visible,w.wireframe=O.wireframe,T===Xo?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:_[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Z=o.properties.get(w);Z.light=X}return w}function D(B,O,X,T,w){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===Xo)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const tt=t.update(B),ut=B.material;if(Array.isArray(ut)){const lt=tt.groups;for(let I=0,H=lt.length;I<H;I++){const st=lt[I],yt=ut[st.materialIndex];if(yt&&yt.visible){const xt=U(B,yt,T,w);B.onBeforeShadow(o,B,O,X,tt,xt,st),o.renderBufferDirect(X,null,tt,xt,B,st),B.onAfterShadow(o,B,O,X,tt,xt,st)}}}else if(ut.visible){const lt=U(B,ut,T,w);B.onBeforeShadow(o,B,O,X,tt,lt,null),o.renderBufferDirect(X,null,tt,lt,B,null),B.onAfterShadow(o,B,O,X,tt,lt,null)}}const Z=B.children;for(let tt=0,ut=Z.length;tt<ut;tt++)D(Z[tt],O,X,T,w)}function z(B){B.target.removeEventListener("dispose",z);for(const X in p){const T=p[X],w=B.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}const Y1={[kh]:Xh,[Wh]:Kh,[qh]:jh,[Ur]:Yh,[Xh]:kh,[Kh]:Wh,[jh]:qh,[Yh]:Ur};function K1(o,t){function i(){let W=!1;const Ut=new sn;let Tt=null;const Pt=new sn(0,0,0,0);return{setMask:function(St){Tt!==St&&!W&&(o.colorMask(St,St,St,St),Tt=St)},setLocked:function(St){W=St},setClear:function(St,_t,At,ne,ze){ze===!0&&(St*=ne,_t*=ne,At*=ne),Ut.set(St,_t,At,ne),Pt.equals(Ut)===!1&&(o.clearColor(St,_t,At,ne),Pt.copy(Ut))},reset:function(){W=!1,Tt=null,Pt.set(-1,0,0,0)}}}function s(){let W=!1,Ut=!1,Tt=null,Pt=null,St=null;return{setReversed:function(_t){if(Ut!==_t){const At=t.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ne=St;St=null,this.setClear(ne)}},getReversed:function(){return Ut},setTest:function(_t){_t?ft(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(_t){Tt!==_t&&!W&&(o.depthMask(_t),Tt=_t)},setFunc:function(_t){if(Ut&&(_t=Y1[_t]),Pt!==_t){switch(_t){case kh:o.depthFunc(o.NEVER);break;case Xh:o.depthFunc(o.ALWAYS);break;case Wh:o.depthFunc(o.LESS);break;case Ur:o.depthFunc(o.LEQUAL);break;case qh:o.depthFunc(o.EQUAL);break;case Yh:o.depthFunc(o.GEQUAL);break;case Kh:o.depthFunc(o.GREATER);break;case jh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pt=_t}},setLocked:function(_t){W=_t},setClear:function(_t){St!==_t&&(Ut&&(_t=1-_t),o.clearDepth(_t),St=_t)},reset:function(){W=!1,Tt=null,Pt=null,St=null,Ut=!1}}}function l(){let W=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ne=null,ze=null;return{setTest:function(Te){W||(Te?ft(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Te){Ut!==Te&&!W&&(o.stencilMask(Te),Ut=Te)},setFunc:function(Te,Nn,Si){(Tt!==Te||Pt!==Nn||St!==Si)&&(o.stencilFunc(Te,Nn,Si),Tt=Te,Pt=Nn,St=Si)},setOp:function(Te,Nn,Si){(_t!==Te||At!==Nn||ne!==Si)&&(o.stencilOp(Te,Nn,Si),_t=Te,At=Nn,ne=Si)},setLocked:function(Te){W=Te},setClear:function(Te){ze!==Te&&(o.clearStencil(Te),ze=Te)},reset:function(){W=!1,Ut=null,Tt=null,Pt=null,St=null,_t=null,At=null,ne=null,ze=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},_={},S=new WeakMap,M=[],A=null,b=!1,y=null,x=null,L=null,U=null,D=null,z=null,B=null,O=new ge(0,0,0),X=0,T=!1,w=null,G=null,Z=null,tt=null,ut=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const st=o.getParameter(o.VERSION);st.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(st)[1]),I=H>=1):st.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),I=H>=2);let yt=null,xt={};const P=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),gt=new sn().fromArray(P),bt=new sn().fromArray(at);function Bt(W,Ut,Tt,Pt){const St=new Uint8Array(4),_t=o.createTexture();o.bindTexture(W,_t),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let At=0;At<Tt;At++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,Pt,0,o.RGBA,o.UNSIGNED_BYTE,St):o.texImage2D(Ut+At,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,St);return _t}const it={};it[o.TEXTURE_2D]=Bt(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Bt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Bt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Bt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(Ur),re(!1),en(Gg),ft(o.CULL_FACE),de(va);function ft(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function wt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function kt(W,Ut){return _[W]!==Ut?(o.bindFramebuffer(W,Ut),_[W]=Ut,W===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ut),W===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Ht(W,Ut){let Tt=M,Pt=!1;if(W){Tt=S.get(Ut),Tt===void 0&&(Tt=[],S.set(Ut,Tt));const St=W.textures;if(Tt.length!==St.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)Tt[_t]=o.COLOR_ATTACHMENT0+_t;Tt.length=St.length,Pt=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Pt=!0);Pt&&o.drawBuffers(Tt)}function he(W){return A!==W?(o.useProgram(W),A=W,!0):!1}const tn={[Cs]:o.FUNC_ADD,[YS]:o.FUNC_SUBTRACT,[KS]:o.FUNC_REVERSE_SUBTRACT};tn[jS]=o.MIN,tn[ZS]=o.MAX;const _e={[QS]:o.ZERO,[JS]:o.ONE,[$S]:o.SRC_COLOR,[Gh]:o.SRC_ALPHA,[sy]:o.SRC_ALPHA_SATURATE,[iy]:o.DST_COLOR,[ey]:o.DST_ALPHA,[ty]:o.ONE_MINUS_SRC_COLOR,[Vh]:o.ONE_MINUS_SRC_ALPHA,[ay]:o.ONE_MINUS_DST_COLOR,[ny]:o.ONE_MINUS_DST_ALPHA,[ry]:o.CONSTANT_COLOR,[oy]:o.ONE_MINUS_CONSTANT_COLOR,[ly]:o.CONSTANT_ALPHA,[cy]:o.ONE_MINUS_CONSTANT_ALPHA};function de(W,Ut,Tt,Pt,St,_t,At,ne,ze,Te){if(W===va){b===!0&&(wt(o.BLEND),b=!1);return}if(b===!1&&(ft(o.BLEND),b=!0),W!==qS){if(W!==y||Te!==T){if((x!==Cs||D!==Cs)&&(o.blendEquation(o.FUNC_ADD),x=Cs,D=Cs),Te)switch(W){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vg:o.blendFunc(o.ONE,o.ONE);break;case kg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Xg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case kg:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xg:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}L=null,U=null,z=null,B=null,O.set(0,0,0),X=0,y=W,T=Te}return}St=St||Ut,_t=_t||Tt,At=At||Pt,(Ut!==x||St!==D)&&(o.blendEquationSeparate(tn[Ut],tn[St]),x=Ut,D=St),(Tt!==L||Pt!==U||_t!==z||At!==B)&&(o.blendFuncSeparate(_e[Tt],_e[Pt],_e[_t],_e[At]),L=Tt,U=Pt,z=_t,B=At),(ne.equals(O)===!1||ze!==X)&&(o.blendColor(ne.r,ne.g,ne.b,ze),O.copy(ne),X=ze),y=W,T=!1}function we(W,Ut){W.side===ga?wt(o.CULL_FACE):ft(o.CULL_FACE);let Tt=W.side===jn;Ut&&(Tt=!Tt),re(Tt),W.blending===wr&&W.transparent===!1?de(va):de(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Pt=W.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ze(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){w!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),w=W)}function en(W){W!==kS?(ft(o.CULL_FACE),W!==G&&(W===Gg?o.cullFace(o.BACK):W===XS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),G=W}function V(W){W!==Z&&(I&&o.lineWidth(W),Z=W)}function Ze(W,Ut,Tt){W?(ft(o.POLYGON_OFFSET_FILL),(tt!==Ut||ut!==Tt)&&(o.polygonOffset(Ut,Tt),tt=Ut,ut=Tt)):wt(o.POLYGON_OFFSET_FILL)}function Ee(W){W?ft(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function Oe(W){W===void 0&&(W=o.TEXTURE0+lt-1),yt!==W&&(o.activeTexture(W),yt=W)}function Yt(W,Ut,Tt){Tt===void 0&&(yt===null?Tt=o.TEXTURE0+lt-1:Tt=yt);let Pt=xt[Tt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[Tt]=Pt),(Pt.type!==W||Pt.texture!==Ut)&&(yt!==Tt&&(o.activeTexture(Tt),yt=Tt),o.bindTexture(W,Ut||it[W]),Pt.type=W,Pt.texture=Ut)}function N(){const W=xt[yt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function dt(){try{o.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function vt(){try{o.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Rt(){try{o.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Xt(){try{o.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ee(){try{o.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Mt(){try{o.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Et(W){gt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function zt(W){bt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),bt.copy(W))}function Ot(W,Ut){let Tt=p.get(Ut);Tt===void 0&&(Tt=new WeakMap,p.set(Ut,Tt));let Pt=Tt.get(W);Pt===void 0&&(Pt=o.getUniformBlockIndex(Ut,W.name),Tt.set(W,Pt))}function Ct(W,Ut){const Pt=p.get(Ut).get(W);m.get(Ut)!==Pt&&(o.uniformBlockBinding(Ut,Pt,W.__bindingPointIndex),m.set(Ut,Pt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},yt=null,xt={},_={},S=new WeakMap,M=[],A=null,b=!1,y=null,x=null,L=null,U=null,D=null,z=null,B=null,O=new ge(0,0,0),X=0,T=!1,w=null,G=null,Z=null,tt=null,ut=null,gt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ft,disable:wt,bindFramebuffer:kt,drawBuffers:Ht,useProgram:he,setBlending:de,setMaterial:we,setFlipSided:re,setCullFace:en,setLineWidth:V,setPolygonOffset:Ze,setScissorTest:Ee,activeTexture:Oe,bindTexture:Yt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:ee,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Xt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:jt,scissor:Et,viewport:zt,reset:le}}function j1(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Me,v=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,E){return M?new OffscreenCanvas(N,E):Hc("canvas")}function b(N,E,q){let dt=1;const vt=Yt(N);if((vt.width>q||vt.height>q)&&(dt=q/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ct=Math.floor(dt*vt.width),jt=Math.floor(dt*vt.height);_===void 0&&(_=A(ct,jt));const Rt=E?A(ct,jt):_;return Rt.width=ct,Rt.height=jt,Rt.getContext("2d").drawImage(N,0,0,ct,jt),ie("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ct+"x"+jt+")."),Rt}else return"data"in N&&ie("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){o.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(N,E,q,dt,vt=!1){if(N!==null){if(o[N]!==void 0)return o[N];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct=E;if(E===o.RED&&(q===o.FLOAT&&(ct=o.R32F),q===o.HALF_FLOAT&&(ct=o.R16F),q===o.UNSIGNED_BYTE&&(ct=o.R8)),E===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.R8UI),q===o.UNSIGNED_SHORT&&(ct=o.R16UI),q===o.UNSIGNED_INT&&(ct=o.R32UI),q===o.BYTE&&(ct=o.R8I),q===o.SHORT&&(ct=o.R16I),q===o.INT&&(ct=o.R32I)),E===o.RG&&(q===o.FLOAT&&(ct=o.RG32F),q===o.HALF_FLOAT&&(ct=o.RG16F),q===o.UNSIGNED_BYTE&&(ct=o.RG8)),E===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.RG8UI),q===o.UNSIGNED_SHORT&&(ct=o.RG16UI),q===o.UNSIGNED_INT&&(ct=o.RG32UI),q===o.BYTE&&(ct=o.RG8I),q===o.SHORT&&(ct=o.RG16I),q===o.INT&&(ct=o.RG32I)),E===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),q===o.UNSIGNED_INT&&(ct=o.RGB32UI),q===o.BYTE&&(ct=o.RGB8I),q===o.SHORT&&(ct=o.RGB16I),q===o.INT&&(ct=o.RGB32I)),E===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),q===o.UNSIGNED_INT&&(ct=o.RGBA32UI),q===o.BYTE&&(ct=o.RGBA8I),q===o.SHORT&&(ct=o.RGBA16I),q===o.INT&&(ct=o.RGBA32I)),E===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),E===o.RGBA){const jt=vt?Bc:be.getTransfer(dt);q===o.FLOAT&&(ct=o.RGBA32F),q===o.HALF_FLOAT&&(ct=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ct=jt===He?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function D(N,E){let q;return N?E===null||E===Xi||E===Yo?q=o.DEPTH24_STENCIL8:E===Fi?q=o.DEPTH32F_STENCIL8:E===qo&&(q=o.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===Yo?q=o.DEPTH_COMPONENT24:E===Fi?q=o.DEPTH_COMPONENT32F:E===qo&&(q=o.DEPTH_COMPONENT16),q}function z(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ln&&N.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function B(N){const E=N.target;E.removeEventListener("dispose",B),X(E),E.isVideoTexture&&v.delete(E)}function O(N){const E=N.target;E.removeEventListener("dispose",O),w(E)}function X(N){const E=s.get(N);if(E.__webglInit===void 0)return;const q=N.source,dt=S.get(q);if(dt){const vt=dt[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&T(N),Object.keys(dt).length===0&&S.delete(q)}s.remove(N)}function T(N){const E=s.get(N);o.deleteTexture(E.__webglTexture);const q=N.source,dt=S.get(q);delete dt[E.__cacheKey],h.memory.textures--}function w(N){const E=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let vt=0;vt<E.__webglFramebuffer[dt].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[dt][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[dt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=N.textures;for(let dt=0,vt=q.length;dt<vt;dt++){const ct=s.get(q[dt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(q[dt])}s.remove(N)}let G=0;function Z(){G=0}function tt(){const N=G;return N>=l.maxTextures&&ie("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function ut(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function lt(N,E){const q=s.get(N);if(N.isVideoTexture&&Ee(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&q.__version!==N.version){const dt=N.image;if(dt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{it(q,N,E);return}}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+E)}function I(N,E){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){it(q,N,E);return}else N.isExternalTexture&&(q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+E)}function H(N,E){const q=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){it(q,N,E);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+E)}function st(N,E){const q=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&q.__version!==N.version){ft(q,N,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+E)}const yt={[Jh]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[$h]:o.MIRRORED_REPEAT},xt={[Ln]:o.NEAREST,[hy]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[oh]:o.LINEAR_MIPMAP_NEAREST,[Ds]:o.LINEAR_MIPMAP_LINEAR},P={[my]:o.NEVER,[Sy]:o.ALWAYS,[gy]:o.LESS,[kd]:o.LEQUAL,[_y]:o.EQUAL,[Xd]:o.GEQUAL,[vy]:o.GREATER,[xy]:o.NOTEQUAL};function at(N,E){if(E.type===Fi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===oh||E.magFilter===uc||E.magFilter===Ds||E.minFilter===In||E.minFilter===oh||E.minFilter===uc||E.minFilter===Ds)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,yt[E.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,yt[E.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,yt[E.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,xt[E.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==uc&&E.minFilter!==Ds||E.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function gt(N,E){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",B));const dt=E.source;let vt=S.get(dt);vt===void 0&&(vt={},S.set(dt,vt));const ct=ut(E);if(ct!==N.__cacheKey){vt[ct]===void 0&&(vt[ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,q=!0),vt[ct].usedTimes++;const jt=vt[N.__cacheKey];jt!==void 0&&(vt[N.__cacheKey].usedTimes--,jt.usedTimes===0&&T(E)),N.__cacheKey=ct,N.__webglTexture=vt[ct].texture}return q}function bt(N,E,q){return Math.floor(Math.floor(N/q)/E)}function Bt(N,E,q,dt){const ct=N.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,q,dt,E.data);else{ct.sort((Mt,Et)=>Mt.start-Et.start);let jt=0;for(let Mt=1;Mt<ct.length;Mt++){const Et=ct[jt],zt=ct[Mt],Ot=Et.start+Et.count,Ct=bt(zt.start,E.width,4),le=bt(Et.start,E.width,4);zt.start<=Ot+1&&Ct===le&&bt(zt.start+zt.count-1,E.width,4)===Ct?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++jt,ct[jt]=zt)}ct.length=jt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Xt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Et=ct.length;Mt<Et;Mt++){const zt=ct[Mt],Ot=Math.floor(zt.start/4),Ct=Math.ceil(zt.count/4),le=Ot%E.width,W=Math.floor(Ot/E.width),Ut=Ct,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,le,W,Ut,Tt,q,dt,E.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Xt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function it(N,E,q){let dt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=o.TEXTURE_3D);const vt=gt(N,E),ct=E.source;i.bindTexture(dt,N.__webglTexture,o.TEXTURE0+q);const jt=s.get(ct);if(ct.version!==jt.__version||vt===!0){i.activeTexture(o.TEXTURE0+q);const Rt=be.getPrimaries(be.workingColorSpace),Xt=E.colorSpace===ts?null:be.getPrimaries(E.colorSpace),ee=E.colorSpace===ts||Rt===Xt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Mt=b(E.image,!1,l.maxTextureSize);Mt=Oe(E,Mt);const Et=c.convert(E.format,E.colorSpace),zt=c.convert(E.type);let Ot=U(E.internalFormat,Et,zt,E.colorSpace,E.isVideoTexture);at(dt,E);let Ct;const le=E.mipmaps,W=E.isVideoTexture!==!0,Ut=jt.__version===void 0||vt===!0,Tt=ct.dataReady,Pt=z(E,Mt);if(E.isDepthTexture)Ot=D(E.format===Us,E.type),Ut&&(W?i.texStorage2D(o.TEXTURE_2D,1,Ot,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,null));else if(E.isDataTexture)if(le.length>0){W&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data);E.generateMipmaps=!1}else W?(Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height),Tt&&Bt(E,Mt,Et,zt)):i.texImage2D(o.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,le[0].width,le[0].height,Mt.depth);for(let St=0,_t=le.length;St<_t;St++)if(Ct=le[St],E.format!==Ui)if(Et!==null)if(W){if(Tt)if(E.layerUpdates.size>0){const At=v_(Ct.width,Ct.height,E.format,E.type);for(const ne of E.layerUpdates){const ze=Ct.data.subarray(ne*At/Ct.data.BYTES_PER_ELEMENT,(ne+1)*At/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,ne,Ct.width,Ct.height,1,Et,ze)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Tt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,zt,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Et,zt,Ct.data)}else{W&&Ut&&i.texStorage2D(o.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],E.format!==Ui?Et!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(o.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data)}else if(E.isDataArrayTexture)if(W){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pt,Ot,Mt.width,Mt.height,Mt.depth),Tt)if(E.layerUpdates.size>0){const St=v_(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const At=Mt.data.subarray(_t*St/Mt.data.BYTES_PER_ELEMENT,(_t+1)*St/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,zt,At)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isData3DTexture)W?(Ut&&i.texStorage3D(o.TEXTURE_3D,Pt,Ot,Mt.width,Mt.height,Mt.depth),Tt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isFramebufferTexture){if(Ut)if(W)i.texStorage2D(o.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height);else{let St=Mt.width,_t=Mt.height;for(let At=0;At<Pt;At++)i.texImage2D(o.TEXTURE_2D,At,Ot,St,_t,0,Et,zt,null),St>>=1,_t>>=1}}else if(le.length>0){if(W&&Ut){const St=Yt(le[0]);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],W?Tt&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,Et,zt,Ct):i.texImage2D(o.TEXTURE_2D,St,Ot,Et,zt,Ct);E.generateMipmaps=!1}else if(W){if(Ut){const St=Yt(Mt);i.texStorage2D(o.TEXTURE_2D,Pt,Ot,St.width,St.height)}Tt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et,zt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Ot,Et,zt,Mt);y(E)&&x(dt),jt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ft(N,E,q){if(E.image.length!==6)return;const dt=gt(N,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+q);const ct=s.get(vt);if(vt.version!==ct.__version||dt===!0){i.activeTexture(o.TEXTURE0+q);const jt=be.getPrimaries(be.workingColorSpace),Rt=E.colorSpace===ts?null:be.getPrimaries(E.colorSpace),Xt=E.colorSpace===ts||jt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!ee&&!Mt?Et[_t]=b(E.image[_t],!0,l.maxCubemapSize):Et[_t]=Mt?E.image[_t].image:E.image[_t],Et[_t]=Oe(E,Et[_t]);const zt=Et[0],Ot=c.convert(E.format,E.colorSpace),Ct=c.convert(E.type),le=U(E.internalFormat,Ot,Ct,E.colorSpace),W=E.isVideoTexture!==!0,Ut=ct.__version===void 0||dt===!0,Tt=vt.dataReady;let Pt=z(E,zt);at(o.TEXTURE_CUBE_MAP,E);let St;if(ee){W&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,le,zt.width,zt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ne=St[At];E.format!==Ui?Ot!==null?W?Tt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Ot,ne.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,ne.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ne.width,ne.height,Ot,Ct,ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ne.width,ne.height,0,Ot,Ct,ne.data)}}}else{if(St=E.mipmaps,W&&Ut){St.length>0&&Pt++;const _t=Yt(Et[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Ct,Et[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Et[_t].width,Et[_t].height,0,Ot,Ct,Et[_t].data);for(let At=0;At<St.length;At++){const ze=St[At].image[_t].image;W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,ze.width,ze.height,Ot,Ct,ze.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,ze.width,ze.height,0,Ot,Ct,ze.data)}}else{W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Ct,Et[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Ot,Ct,Et[_t]);for(let At=0;At<St.length;At++){const ne=St[At];W?Tt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Ct,ne.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Ot,Ct,ne.image[_t])}}}y(E)&&x(o.TEXTURE_CUBE_MAP),ct.__version=vt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function wt(N,E,q,dt,vt,ct){const jt=c.convert(q.format,q.colorSpace),Rt=c.convert(q.type),Xt=U(q.internalFormat,jt,Rt,q.colorSpace),ee=s.get(E),Mt=s.get(q);if(Mt.__renderTarget=E,!ee.__hasExternalTextures){const Et=Math.max(1,E.width>>ct),zt=Math.max(1,E.height>>ct);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ct,Xt,Et,zt,E.depth,0,jt,Rt,null):i.texImage2D(vt,ct,Xt,Et,zt,0,jt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Ze(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,vt,Mt.__webglTexture,0,V(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,vt,Mt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(N,E,q){if(o.bindRenderbuffer(o.RENDERBUFFER,N),E.depthBuffer){const dt=E.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ct=D(E.stencilBuffer,vt),jt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ze(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),ct,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,N)}else{const dt=E.textures;for(let vt=0;vt<dt.length;vt++){const ct=dt[vt],jt=c.convert(ct.format,ct.colorSpace),Rt=c.convert(ct.type),Xt=U(ct.internalFormat,jt,Rt,ct.colorSpace);Ze(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(E),Xt,E.width,E.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(E),Xt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Xt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(N,E,q){const dt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),vt.__webglTexture===void 0){vt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),at(o.TEXTURE_CUBE_MAP,E.depthTexture);const ee=c.convert(E.depthTexture.format),Mt=c.convert(E.depthTexture.type);let Et;E.depthTexture.format===ya?Et=o.DEPTH_COMPONENT24:E.depthTexture.format===Us&&(Et=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,E.width,E.height,0,ee,Mt,null)}}else lt(E.depthTexture,0);const ct=vt.__webglTexture,jt=V(E),Rt=dt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Xt=E.depthTexture.format===Us?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)Ze(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,ct,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,ct,0);else if(E.depthTexture.format===Us)Ze(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Xt,Rt,ct,0,jt):o.framebufferTexture2D(o.FRAMEBUFFER,Xt,Rt,ct,0);else throw new Error("Unknown depthTexture format")}function he(N){const E=s.get(N),q=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const dt=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=dt}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let dt=0;dt<6;dt++)Ht(E.__webglFramebuffer[dt],N,dt);else{const dt=N.texture.mipmaps;dt&&dt.length>0?Ht(E.__webglFramebuffer[0],N,0):Ht(E.__webglFramebuffer,N,0)}else if(q){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=o.createRenderbuffer(),kt(E.__webglDepthbuffer[dt],N,!1);else{const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}else{const dt=N.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),kt(E.__webglDepthbuffer,N,!1);else{const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function tn(N,E,q){const dt=s.get(N);E!==void 0&&wt(dt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&he(N)}function _e(N){const E=N.texture,q=s.get(N),dt=s.get(E);N.addEventListener("dispose",O);const vt=N.textures,ct=N.isWebGLCubeRenderTarget===!0,jt=vt.length>1;if(jt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=E.version,h.memory.textures++),ct){q.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Rt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)q.__webglFramebuffer[Rt][Xt]=o.createFramebuffer()}else q.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)q.__webglFramebuffer[Rt]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=s.get(vt[Rt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Ze(N)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const Xt=vt[Rt];q.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Rt]);const ee=c.convert(Xt.format,Xt.colorSpace),Mt=c.convert(Xt.type),Et=U(Xt.internalFormat,ee,Mt,Xt.colorSpace,N.isXRRenderTarget===!0),zt=V(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Et,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,q.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),at(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(q.__webglFramebuffer[Rt][Xt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Xt);else wt(q.__webglFramebuffer[Rt],N,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(E)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Rt=0,Xt=vt.length;Rt<Xt;Rt++){const ee=vt[Rt],Mt=s.get(ee);let Et=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Et=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),at(Et,ee),wt(q.__webglFramebuffer,N,ee,o.COLOR_ATTACHMENT0+Rt,Et,0),y(ee)&&x(Et)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),at(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(q.__webglFramebuffer[Xt],N,E,o.COLOR_ATTACHMENT0,Rt,Xt);else wt(q.__webglFramebuffer,N,E,o.COLOR_ATTACHMENT0,Rt,0);y(E)&&x(Rt),i.unbindTexture()}N.depthBuffer&&he(N)}function de(N){const E=N.textures;for(let q=0,dt=E.length;q<dt;q++){const vt=E[q];if(y(vt)){const ct=L(N),jt=s.get(vt).__webglTexture;i.bindTexture(ct,jt),x(ct),i.unbindTexture()}}}const we=[],re=[];function en(N){if(N.samples>0){if(Ze(N)===!1){const E=N.textures,q=N.width,dt=N.height;let vt=o.COLOR_BUFFER_BIT;const ct=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=s.get(N),Rt=E.length>1;if(Rt)for(let ee=0;ee<E.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Xt=N.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const Mt=s.get(E[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Mt,0)}o.blitFramebuffer(0,0,q,dt,0,0,q,dt,vt,o.NEAREST),m===!0&&(we.length=0,re.length=0,we.push(o.COLOR_ATTACHMENT0+ee),N.depthBuffer&&N.resolveDepthBuffer===!1&&(we.push(ct),re.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,re)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let ee=0;ee<E.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const Mt=s.get(E[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Mt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function V(N){return Math.min(l.maxSamples,N.samples)}function Ze(N){const E=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(N){const E=h.render.frame;v.get(N)!==E&&(v.set(N,E),N.update())}function Oe(N,E){const q=N.colorSpace,dt=N.format,vt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==Or&&q!==ts&&(be.getTransfer(q)===He?(dt!==Ui||vt!==ri)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),E}function Yt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=Z,this.setTexture2D=lt,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=st,this.rebindTextures=tn,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Z1(o,t){function i(s,l=ts){let c;const h=be.getTransfer(l);if(s===ri)return o.UNSIGNED_BYTE;if(s===Bd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Fd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===ev)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===nv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===$_)return o.BYTE;if(s===tv)return o.SHORT;if(s===qo)return o.UNSIGNED_SHORT;if(s===Id)return o.INT;if(s===Xi)return o.UNSIGNED_INT;if(s===Fi)return o.FLOAT;if(s===Sa)return o.HALF_FLOAT;if(s===iv)return o.ALPHA;if(s===av)return o.RGB;if(s===Ui)return o.RGBA;if(s===ya)return o.DEPTH_COMPONENT;if(s===Us)return o.DEPTH_STENCIL;if(s===sv)return o.RED;if(s===Hd)return o.RED_INTEGER;if(s===Nr)return o.RG;if(s===Gd)return o.RG_INTEGER;if(s===Vd)return o.RGBA_INTEGER;if(s===Nc||s===Oc||s===Pc||s===zc)if(h===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Nc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Nc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===td||s===ed||s===nd||s===id)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===td)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ed)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===id)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ad||s===sd)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===rd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===od)return c.COMPRESSED_R11_EAC;if(s===ld)return c.COMPRESSED_SIGNED_R11_EAC;if(s===cd)return c.COMPRESSED_RG11_EAC;if(s===ud)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===Sd||s===yd||s===Md||s===Ed||s===Td)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===fd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===md)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_d)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Md)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ed)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Td)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bd||s===Ad||s===Rd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===bd)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ad)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cd||s===wd||s===Dd||s===Ud)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Cd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ud)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J1=`
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

}`;class $1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new xv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qi({vertexShader:Q1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new qe(new Br(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tA extends zr{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,_=null,S=null,M=null,A=null;const b=typeof XRWebGLBinding<"u",y=new $1,x={},L=i.getContextAttributes();let U=null,D=null;const z=[],B=[],O=new Me;let X=null;const T=new si;T.viewport=new sn;const w=new si;w.viewport=new sn;const G=[T,w],Z=new cM;let tt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ft=z[it];return ft===void 0&&(ft=new Dh,z[it]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(it){let ft=z[it];return ft===void 0&&(ft=new Dh,z[it]=ft),ft.getGripSpace()},this.getHand=function(it){let ft=z[it];return ft===void 0&&(ft=new Dh,z[it]=ft),ft.getHandSpace()};function lt(it){const ft=B.indexOf(it.inputSource);if(ft===-1)return;const wt=z[ft];wt!==void 0&&(wt.update(it.inputSource,it.frame,p||h),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function I(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",H);for(let it=0;it<z.length;it++){const ft=B[it];ft!==null&&(B[it]=null,z[it].disconnect(ft))}tt=null,ut=null,y.reset();for(const it in x)delete x[it];t.setRenderTarget(U),M=null,S=null,_=null,l=null,D=null,Bt.stop(),s.isPresenting=!1,t.setPixelRatio(X),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",I),l.addEventListener("inputsourceschange",H),L.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,kt=null,Ht=null;L.depth&&(Ht=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=L.stencil?Us:ya,kt=L.stencil?Yo:Xi);const he={colorFormat:i.RGBA8,depthFormat:Ht,scaleFactor:c};_=this.getBinding(),S=_.createProjectionLayer(he),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),D=new Vi(S.textureWidth,S.textureHeight,{format:Ui,type:ri,depthTexture:new jo(S.textureWidth,S.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const wt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Bt.setContext(l),Bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(it){for(let ft=0;ft<it.removed.length;ft++){const wt=it.removed[ft],kt=B.indexOf(wt);kt>=0&&(B[kt]=null,z[kt].disconnect(wt))}for(let ft=0;ft<it.added.length;ft++){const wt=it.added[ft];let kt=B.indexOf(wt);if(kt===-1){for(let he=0;he<z.length;he++)if(he>=B.length){B.push(wt),kt=he;break}else if(B[he]===null){B[he]=wt,kt=he;break}if(kt===-1)break}const Ht=z[kt];Ht&&Ht.connect(wt)}}const st=new j,yt=new j;function xt(it,ft,wt){st.setFromMatrixPosition(ft.matrixWorld),yt.setFromMatrixPosition(wt.matrixWorld);const kt=st.distanceTo(yt),Ht=ft.projectionMatrix.elements,he=wt.projectionMatrix.elements,tn=Ht[14]/(Ht[10]-1),_e=Ht[14]/(Ht[10]+1),de=(Ht[9]+1)/Ht[5],we=(Ht[9]-1)/Ht[5],re=(Ht[8]-1)/Ht[0],en=(he[8]+1)/he[0],V=tn*re,Ze=tn*en,Ee=kt/(-re+en),Oe=Ee*-re;if(ft.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Oe),it.translateZ(Ee),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ht[10]===-1)it.projectionMatrix.copy(ft.projectionMatrix),it.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Yt=tn+Ee,N=_e+Ee,E=V-Oe,q=Ze+(kt-Oe),dt=de*_e/N*Yt,vt=we*_e/N*Yt;it.projectionMatrix.makePerspective(E,q,dt,vt,Yt,N),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function P(it,ft){ft===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ft.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ft=it.near,wt=it.far;y.texture!==null&&(y.depthNear>0&&(ft=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),Z.near=w.near=T.near=ft,Z.far=w.far=T.far=wt,(tt!==Z.near||ut!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),tt=Z.near,ut=Z.far),Z.layers.mask=it.layers.mask|6,T.layers.mask=Z.layers.mask&3,w.layers.mask=Z.layers.mask&5;const kt=it.parent,Ht=Z.cameras;P(Z,kt);for(let he=0;he<Ht.length;he++)P(Ht[he],kt);Ht.length===2?xt(Z,T,w):Z.projectionMatrix.copy(T.projectionMatrix),at(it,Z,kt)};function at(it,ft,wt){wt===null?it.matrix.copy(ft.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ft.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ft.projectionMatrix),it.projectionMatrixInverse.copy(ft.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Gc*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(it){m=it,S!==null&&(S.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(it){return x[it]};let gt=null;function bt(it,ft){if(v=ft.getViewerPose(p||h),A=ft,v!==null){const wt=v.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let kt=!1;wt.length!==Z.cameras.length&&(Z.cameras.length=0,kt=!0);for(let _e=0;_e<wt.length;_e++){const de=wt[_e];let we=null;if(M!==null)we=M.getViewport(de);else{const en=_.getViewSubImage(S,de);we=en.viewport,_e===0&&(t.setRenderTargetTextures(D,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(D))}let re=G[_e];re===void 0&&(re=new si,re.layers.enable(_e),re.viewport=new sn,G[_e]=re),re.matrix.fromArray(de.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(de.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(we.x,we.y,we.width,we.height),_e===0&&(Z.matrix.copy(re.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),kt===!0&&Z.cameras.push(re)}const Ht=l.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){_=s.getBinding();const _e=_.getDepthInformation(wt[0]);_e&&_e.isValid&&_e.texture&&y.init(_e,l.renderState)}if(Ht&&Ht.includes("camera-access")&&b){t.state.unbindTexture(),_=s.getBinding();for(let _e=0;_e<wt.length;_e++){const de=wt[_e].camera;if(de){let we=x[de];we||(we=new xv,x[de]=we);const re=_.getCameraImage(de);we.sourceTexture=re}}}}for(let wt=0;wt<z.length;wt++){const kt=B[wt],Ht=z[wt];kt!==null&&Ht!==void 0&&Ht.update(kt,ft,p||h)}gt&&gt(it,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),A=null}const Bt=new yv;Bt.setAnimationLoop(bt),this.setAnimationLoop=function(it){gt=it},this.dispose=function(){}}}const As=new Wi,eA=new $e;function nA(o,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,pv(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,L,U,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),_(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x)):x.isMeshStandardMaterial?(c(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,D)):x.isMeshMatcapMaterial?(c(y,x),A(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),b(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,L,U):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const L=t.get(x),U=L.envMap,D=L.envMapRotation;U&&(y.envMap.value=U,As.copy(D),As.x*=-1,As.y*=-1,As.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),y.envMapRotation.value.setFromMatrix4(eA.makeRotationFromEuler(As)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,L,U){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*L,y.scale.value=U*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,L){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,x){x.matcap&&(y.matcap.value=x.matcap)}function b(y,x){const L=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function iA(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const D=U.program;s.uniformBlockBinding(L,D)}function p(L,U){let D=l[L.id];D===void 0&&(A(L),D=v(L),l[L.id]=D,L.addEventListener("dispose",y));const z=U.program;s.updateUBOMapping(L,z);const B=t.render.frame;c[L.id]!==B&&(S(L),c[L.id]=B)}function v(L){const U=_();L.__bindingPointIndex=U;const D=o.createBuffer(),z=L.__size,B=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,z,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function _(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const U=l[L.id],D=L.uniforms,z=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let B=0,O=D.length;B<O;B++){const X=Array.isArray(D[B])?D[B]:[D[B]];for(let T=0,w=X.length;T<w;T++){const G=X[T];if(M(G,B,T,z)===!0){const Z=G.__offset,tt=Array.isArray(G.value)?G.value:[G.value];let ut=0;for(let lt=0;lt<tt.length;lt++){const I=tt[lt],H=b(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,Z+ut,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,ut),ut+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,U,D,z){const B=L.value,O=U+"_"+D;if(z[O]===void 0)return typeof B=="number"||typeof B=="boolean"?z[O]=B:z[O]=B.clone(),!0;{const X=z[O];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return z[O]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function A(L){const U=L.uniforms;let D=0;const z=16;for(let O=0,X=U.length;O<X;O++){const T=Array.isArray(U[O])?U[O]:[U[O]];for(let w=0,G=T.length;w<G;w++){const Z=T[w],tt=Array.isArray(Z.value)?Z.value:[Z.value];for(let ut=0,lt=tt.length;ut<lt;ut++){const I=tt[ut],H=b(I),st=D%z,yt=st%H.boundary,xt=st+yt;D+=yt,xt!==0&&z-xt<H.storage&&(D+=z-xt),Z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=D,D+=H.storage}}}const B=D%z;return B>0&&(D+=z-B),L.__size=D,L.__cache={},this}function b(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ie("WebGLRenderer: Unsupported uniform value type.",L),U}function y(L){const U=L.target;U.removeEventListener("dispose",y);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const aA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function sA(){return Ii===null&&(Ii=new Ky(aA,16,16,Nr,Sa),Ii.name="DFG_LUT",Ii.minFilter=In,Ii.magFilter=In,Ii.wrapS=_a,Ii.wrapT=_a,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class rA{constructor(t={}){const{canvas:i=yy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:M=ri}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=h;const b=M,y=new Set([Vd,Gd,Hd]),x=new Set([ri,Xi,qo,Yo,Bd,Fd]),L=new Uint32Array(4),U=new Int32Array(4);let D=null,z=null;const B=[],O=[];let X=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let w=!1;this._outputColorSpace=xi;let G=0,Z=0,tt=null,ut=-1,lt=null;const I=new sn,H=new sn;let st=null;const yt=new ge(0);let xt=0,P=i.width,at=i.height,gt=1,bt=null,Bt=null;const it=new sn(0,0,P,at),ft=new sn(0,0,P,at);let wt=!1;const kt=new Yd;let Ht=!1,he=!1;const tn=new $e,_e=new j,de=new sn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function en(){return tt===null?gt:1}let V=s;function Ze(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zd}`),i.addEventListener("webglcontextlost",ne,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",Te,!1),V===null){const Y="webgl2";if(V=Ze(Y,C),V===null)throw Ze(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ce("WebGLRenderer: "+C.message),C}let Ee,Oe,Yt,N,E,q,dt,vt,ct,jt,Rt,Xt,ee,Mt,Et,zt,Ot,Ct,le,W,Ut,Tt,Pt,St;function _t(){Ee=new sb(V),Ee.init(),Tt=new Z1(V,Ee),Oe=new ZT(V,Ee,t,Tt),Yt=new K1(V,Ee),Oe.reversedDepthBuffer&&S&&Yt.buffers.depth.setReversed(!0),N=new lb(V),E=new N1,q=new j1(V,Ee,Yt,E,Oe,Tt,N),dt=new JT(T),vt=new ab(T),ct=new hM(V),Pt=new KT(V,ct),jt=new rb(V,ct,N,Pt),Rt=new ub(V,jt,ct,N),le=new cb(V,Oe,q),zt=new QT(E),Xt=new L1(T,dt,vt,Ee,Oe,Pt,zt),ee=new nA(T,E),Mt=new P1,Et=new G1(Ee),Ct=new YT(T,dt,vt,Yt,Rt,A,m),Ot=new q1(T,Rt,Oe),St=new iA(V,N,Oe,Yt),W=new jT(V,Ee,N),Ut=new ob(V,Ee,N),N.programs=Xt.programs,T.capabilities=Oe,T.extensions=Ee,T.properties=E,T.renderLists=Mt,T.shadowMap=Ot,T.state=Yt,T.info=N}_t(),b!==ri&&(X=new hb(b,i.width,i.height,l,c));const At=new tA(T,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(C){C!==void 0&&(gt=C,this.setSize(P,at,!1))},this.getSize=function(C){return C.set(P,at)},this.setSize=function(C,Y,rt=!0){if(At.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,at=Y,i.width=Math.floor(C*gt),i.height=Math.floor(Y*gt),rt===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),X!==null&&X.setSize(i.width,i.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(P*gt,at*gt).floor()},this.setDrawingBufferSize=function(C,Y,rt){P=C,at=Y,gt=rt,i.width=Math.floor(C*rt),i.height=Math.floor(Y*rt),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(b===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(it)},this.setViewport=function(C,Y,rt,et){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,Y,rt,et),Yt.viewport(I.copy(it).multiplyScalar(gt).round())},this.getScissor=function(C){return C.copy(ft)},this.setScissor=function(C,Y,rt,et){C.isVector4?ft.set(C.x,C.y,C.z,C.w):ft.set(C,Y,rt,et),Yt.scissor(H.copy(ft).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(C){Yt.setScissorTest(wt=C)},this.setOpaqueSort=function(C){bt=C},this.setTransparentSort=function(C){Bt=C},this.getClearColor=function(C){return C.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,rt=!0){let et=0;if(C){let Q=!1;if(tt!==null){const Dt=tt.texture.format;Q=y.has(Dt)}if(Q){const Dt=tt.texture.type,It=x.has(Dt),Lt=Ct.getClearColor(),Gt=Ct.getClearAlpha(),Wt=Lt.r,Jt=Lt.g,qt=Lt.b;It?(L[0]=Wt,L[1]=Jt,L[2]=qt,L[3]=Gt,V.clearBufferuiv(V.COLOR,0,L)):(U[0]=Wt,U[1]=Jt,U[2]=qt,U[3]=Gt,V.clearBufferiv(V.COLOR,0,U))}else et|=V.COLOR_BUFFER_BIT}Y&&(et|=V.DEPTH_BUFFER_BIT),rt&&(et|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ne,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",Te,!1),Ct.dispose(),Mt.dispose(),Et.dispose(),E.dispose(),dt.dispose(),vt.dispose(),Rt.dispose(),Pt.dispose(),St.dispose(),Xt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Os),At.removeEventListener("sessionend",Vr),Li.stop()};function ne(C){C.preventDefault(),jg("WebGLRenderer: Context Lost."),w=!0}function ze(){jg("WebGLRenderer: Context Restored."),w=!1;const C=N.autoReset,Y=Ot.enabled,rt=Ot.autoUpdate,et=Ot.needsUpdate,Q=Ot.type;_t(),N.autoReset=C,Ot.enabled=Y,Ot.autoUpdate=rt,Ot.needsUpdate=et,Ot.type=Q}function Te(C){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Nn(C){const Y=C.target;Y.removeEventListener("dispose",Nn),Si(Y)}function Si(C){$o(C),E.remove(C)}function $o(C){const Y=E.get(C).programs;Y!==void 0&&(Y.forEach(function(rt){Xt.releaseProgram(rt)}),C.isShaderMaterial&&Xt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,rt,et,Q,Dt){Y===null&&(Y=we);const It=Q.isMesh&&Q.matrixWorld.determinant()<0,Lt=is(C,Y,rt,et,Q);Yt.setMaterial(et,It);let Gt=rt.index,Wt=1;if(et.wireframe===!0){if(Gt=jt.getWireframeAttribute(rt),Gt===void 0)return;Wt=2}const Jt=rt.drawRange,qt=rt.attributes.position;let $t=Jt.start*Wt,De=(Jt.start+Jt.count)*Wt;Dt!==null&&($t=Math.max($t,Dt.start*Wt),De=Math.min(De,(Dt.start+Dt.count)*Wt)),Gt!==null?($t=Math.max($t,0),De=Math.min(De,Gt.count)):qt!=null&&($t=Math.max($t,0),De=Math.min(De,qt.count));const Qe=De-$t;if(Qe<0||Qe===1/0)return;Pt.setup(Q,et,Lt,rt,Gt);let Ye,Pe=W;if(Gt!==null&&(Ye=ct.get(Gt),Pe=Ut,Pe.setIndex(Ye)),Q.isMesh)et.wireframe===!0?(Yt.setLineWidth(et.wireframeLinewidth*en()),Pe.setMode(V.LINES)):Pe.setMode(V.TRIANGLES);else if(Q.isLine){let Zt=et.linewidth;Zt===void 0&&(Zt=1),Yt.setLineWidth(Zt*en()),Q.isLineSegments?Pe.setMode(V.LINES):Q.isLineLoop?Pe.setMode(V.LINE_LOOP):Pe.setMode(V.LINE_STRIP)}else Q.isPoints?Pe.setMode(V.POINTS):Q.isSprite&&Pe.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Pe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Zt=Q._multiDrawStarts,Ue=Q._multiDrawCounts,ae=Q._multiDrawCount,En=Gt?ct.get(Gt).bytesPerElement:1,Yi=E.get(et).currentProgram.getUniforms();for(let Tn=0;Tn<ae;Tn++)Yi.setValue(V,"_gl_DrawID",Tn),Pe.render(Zt[Tn]/En,Ue[Tn])}else if(Q.isInstancedMesh)Pe.renderInstances($t,Qe,Q.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ue=Math.min(rt.instanceCount,Zt);Pe.renderInstances($t,Qe,Ue)}else Pe.render($t,Qe)};function Hr(C,Y,rt){C.transparent===!0&&C.side===ga&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,zs(C,Y,rt),C.side=ns,C.needsUpdate=!0,zs(C,Y,rt),C.side=ga):zs(C,Y,rt)}this.compile=function(C,Y,rt=null){rt===null&&(rt=C),z=Et.get(rt),z.init(Y),O.push(z),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),C!==rt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),z.setupLights();const et=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Dt=Q.material;if(Dt)if(Array.isArray(Dt))for(let It=0;It<Dt.length;It++){const Lt=Dt[It];Hr(Lt,rt,Q),et.add(Lt)}else Hr(Dt,rt,Q),et.add(Dt)}),z=O.pop(),et},this.compileAsync=function(C,Y,rt=null){const et=this.compile(C,Y,rt);return new Promise(Q=>{function Dt(){if(et.forEach(function(It){E.get(It).currentProgram.isReady()&&et.delete(It)}),et.size===0){Q(C);return}setTimeout(Dt,10)}Ee.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ns=null;function Gr(C){Ns&&Ns(C)}function Os(){Li.stop()}function Vr(){Li.start()}const Li=new yv;Li.setAnimationLoop(Gr),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(C){Ns=C,At.setAnimationLoop(C),C===null?Li.stop():Li.start()},At.addEventListener("sessionstart",Os),At.addEventListener("sessionend",Vr),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const rt=At.enabled===!0&&At.isPresenting===!0,et=X!==null&&(tt===null||rt)&&X.begin(T,tt);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(Y),Y=At.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,Y,tt),z=Et.get(C,O.length),z.init(Y),O.push(z),tn.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),kt.setFromProjectionMatrix(tn,Hi,Y.reversedDepth),he=this.localClippingEnabled,Ht=zt.init(this.clippingPlanes,he),D=Mt.get(C,B.length),D.init(),B.push(D),At.enabled===!0&&At.isPresenting===!0){const It=T.xr.getDepthSensingMesh();It!==null&&li(It,Y,-1/0,T.sortObjects)}li(C,Y,0,T.sortObjects),D.finish(),T.sortObjects===!0&&D.sort(bt,Bt),re=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,re&&Ct.addToRenderList(D,C),this.info.render.frame++,Ht===!0&&zt.beginShadows();const Q=z.state.shadowsArray;if(Ot.render(Q,C,Y),Ht===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&X.hasRenderPass())===!1){const It=D.opaque,Lt=D.transmissive;if(z.setupLights(),Y.isArrayCamera){const Gt=Y.cameras;if(Lt.length>0)for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];Mn(It,Lt,C,qt)}re&&Ct.render(C);for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt];ln(D,C,qt,qt.viewport)}}else Lt.length>0&&Mn(It,Lt,C,Y),re&&Ct.render(C),ln(D,C,Y)}tt!==null&&Z===0&&(q.updateMultisampleRenderTarget(tt),q.updateRenderTargetMipmap(tt)),et&&X.end(T),C.isScene===!0&&C.onAfterRender(T,C,Y),Pt.resetDefaultState(),ut=-1,lt=null,O.pop(),O.length>0?(z=O[O.length-1],Ht===!0&&zt.setGlobalState(T.clippingPlanes,z.state.camera)):z=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function li(C,Y,rt,et){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)z.pushLight(C),C.castShadow&&z.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||kt.intersectsSprite(C)){et&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(tn);const It=Rt.update(C),Lt=C.material;Lt.visible&&D.push(C,It,Lt,rt,de.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||kt.intersectsObject(C))){const It=Rt.update(C),Lt=C.material;if(et&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),de.copy(It.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(tn)),Array.isArray(Lt)){const Gt=It.groups;for(let Wt=0,Jt=Gt.length;Wt<Jt;Wt++){const qt=Gt[Wt],$t=Lt[qt.materialIndex];$t&&$t.visible&&D.push(C,It,$t,rt,de.z,qt)}}else Lt.visible&&D.push(C,It,Lt,rt,de.z,null)}}const Dt=C.children;for(let It=0,Lt=Dt.length;It<Lt;It++)li(Dt[It],Y,rt,et)}function ln(C,Y,rt,et){const{opaque:Q,transmissive:Dt,transparent:It}=C;z.setupLightsView(rt),Ht===!0&&zt.setGlobalState(T.clippingPlanes,rt),et&&Yt.viewport(I.copy(et)),Q.length>0&&yi(Q,Y,rt),Dt.length>0&&yi(Dt,Y,rt),It.length>0&&yi(It,Y,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Mn(C,Y,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[et.id]===void 0){const $t=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[et.id]=new Vi(1,1,{generateMipmaps:!0,type:$t?Sa:ri,minFilter:Ds,samples:Oe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Dt=z.state.transmissionRenderTarget[et.id],It=et.viewport||I;Dt.setSize(It.z*T.transmissionResolutionScale,It.w*T.transmissionResolutionScale);const Lt=T.getRenderTarget(),Gt=T.getActiveCubeFace(),Wt=T.getActiveMipmapLevel();T.setRenderTarget(Dt),T.getClearColor(yt),xt=T.getClearAlpha(),xt<1&&T.setClearColor(16777215,.5),T.clear(),re&&Ct.render(rt);const Jt=T.toneMapping;T.toneMapping=Gi;const qt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),z.setupLightsView(et),Ht===!0&&zt.setGlobalState(T.clippingPlanes,et),yi(C,rt,et),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Qe=Y.length;De<Qe;De++){const Ye=Y[De],{object:Pe,geometry:Zt,material:Ue,group:ae}=Ye;if(Ue.side===ga&&Pe.layers.test(et.layers)){const En=Ue.side;Ue.side=jn,Ue.needsUpdate=!0,Ps(Pe,rt,et,Zt,Ue,ae),Ue.side=En,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}T.setRenderTarget(Lt,Gt,Wt),T.setClearColor(yt,xt),qt!==void 0&&(et.viewport=qt),T.toneMapping=Jt}function yi(C,Y,rt){const et=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Dt=C.length;Q<Dt;Q++){const It=C[Q],{object:Lt,geometry:Gt,group:Wt}=It;let Jt=It.material;Jt.allowOverride===!0&&et!==null&&(Jt=et),Lt.layers.test(rt.layers)&&Ps(Lt,Y,rt,Gt,Jt,Wt)}}function Ps(C,Y,rt,et,Q,Dt){C.onBeforeRender(T,Y,rt,et,Q,Dt),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(T,Y,rt,et,C,Dt),Q.transparent===!0&&Q.side===ga&&Q.forceSinglePass===!1?(Q.side=jn,Q.needsUpdate=!0,T.renderBufferDirect(rt,Y,et,Q,C,Dt),Q.side=ns,Q.needsUpdate=!0,T.renderBufferDirect(rt,Y,et,Q,C,Dt),Q.side=ga):T.renderBufferDirect(rt,Y,et,Q,C,Dt),C.onAfterRender(T,Y,rt,et,Q,Dt)}function zs(C,Y,rt){Y.isScene!==!0&&(Y=we);const et=E.get(C),Q=z.state.lights,Dt=z.state.shadowsArray,It=Q.state.version,Lt=Xt.getParameters(C,Q.state,Dt,Y,rt),Gt=Xt.getProgramCacheKey(Lt);let Wt=et.programs;et.environment=C.isMeshStandardMaterial?Y.environment:null,et.fog=Y.fog,et.envMap=(C.isMeshStandardMaterial?vt:dt).get(C.envMap||et.environment),et.envMapRotation=et.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,Wt===void 0&&(C.addEventListener("dispose",Nn),Wt=new Map,et.programs=Wt);let Jt=Wt.get(Gt);if(Jt!==void 0){if(et.currentProgram===Jt&&et.lightsStateVersion===It)return kr(C,Lt),Jt}else Lt.uniforms=Xt.getUniforms(C),C.onBeforeCompile(Lt,T),Jt=Xt.acquireProgram(Lt,Gt),Wt.set(Gt,Jt),et.uniforms=Lt.uniforms;const qt=et.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qt.clippingPlanes=zt.uniform),kr(C,Lt),et.needsLights=Ma(C),et.lightsStateVersion=It,et.needsLights&&(qt.ambientLightColor.value=Q.state.ambient,qt.lightProbe.value=Q.state.probe,qt.directionalLights.value=Q.state.directional,qt.directionalLightShadows.value=Q.state.directionalShadow,qt.spotLights.value=Q.state.spot,qt.spotLightShadows.value=Q.state.spotShadow,qt.rectAreaLights.value=Q.state.rectArea,qt.ltc_1.value=Q.state.rectAreaLTC1,qt.ltc_2.value=Q.state.rectAreaLTC2,qt.pointLights.value=Q.state.point,qt.pointLightShadows.value=Q.state.pointShadow,qt.hemisphereLights.value=Q.state.hemi,qt.directionalShadowMap.value=Q.state.directionalShadowMap,qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qt.spotShadowMap.value=Q.state.spotShadowMap,qt.spotLightMatrix.value=Q.state.spotLightMatrix,qt.spotLightMap.value=Q.state.spotLightMap,qt.pointShadowMap.value=Q.state.pointShadowMap,qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),et.currentProgram=Jt,et.uniformsList=null,Jt}function tl(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Ic.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function kr(C,Y){const rt=E.get(C);rt.outputColorSpace=Y.outputColorSpace,rt.batching=Y.batching,rt.batchingColor=Y.batchingColor,rt.instancing=Y.instancing,rt.instancingColor=Y.instancingColor,rt.instancingMorph=Y.instancingMorph,rt.skinning=Y.skinning,rt.morphTargets=Y.morphTargets,rt.morphNormals=Y.morphNormals,rt.morphColors=Y.morphColors,rt.morphTargetsCount=Y.morphTargetsCount,rt.numClippingPlanes=Y.numClippingPlanes,rt.numIntersection=Y.numClipIntersection,rt.vertexAlphas=Y.vertexAlphas,rt.vertexTangents=Y.vertexTangents,rt.toneMapping=Y.toneMapping}function is(C,Y,rt,et,Q){Y.isScene!==!0&&(Y=we),q.resetTextureUnits();const Dt=Y.fog,It=et.isMeshStandardMaterial?Y.environment:null,Lt=tt===null?T.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Or,Gt=(et.isMeshStandardMaterial?vt:dt).get(et.envMap||It),Wt=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Jt=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),qt=!!rt.morphAttributes.position,$t=!!rt.morphAttributes.normal,De=!!rt.morphAttributes.color;let Qe=Gi;et.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Qe=T.toneMapping);const Ye=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=Ye!==void 0?Ye.length:0,Zt=E.get(et),Ue=z.state.lights;if(Ht===!0&&(he===!0||C!==lt)){const An=C===lt&&et.id===ut;zt.setState(et,C,An)}let ae=!1;et.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ue.state.version||Zt.outputColorSpace!==Lt||Q.isBatchedMesh&&Zt.batching===!1||!Q.isBatchedMesh&&Zt.batching===!0||Q.isBatchedMesh&&Zt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Zt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Zt.instancing===!1||!Q.isInstancedMesh&&Zt.instancing===!0||Q.isSkinnedMesh&&Zt.skinning===!1||!Q.isSkinnedMesh&&Zt.skinning===!0||Q.isInstancedMesh&&Zt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Zt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Zt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Zt.instancingMorph===!1&&Q.morphTexture!==null||Zt.envMap!==Gt||et.fog===!0&&Zt.fog!==Dt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==zt.numPlanes||Zt.numIntersection!==zt.numIntersection)||Zt.vertexAlphas!==Wt||Zt.vertexTangents!==Jt||Zt.morphTargets!==qt||Zt.morphNormals!==$t||Zt.morphColors!==De||Zt.toneMapping!==Qe||Zt.morphTargetsCount!==Pe)&&(ae=!0):(ae=!0,Zt.__version=et.version);let En=Zt.currentProgram;ae===!0&&(En=zs(et,Y,Q));let Yi=!1,Tn=!1,ci=!1;const Ie=En.getUniforms(),bn=Zt.uniforms;if(Yt.useProgram(En.program)&&(Yi=!0,Tn=!0,ci=!0),et.id!==ut&&(ut=et.id,Tn=!0),Yi||lt!==C){Yt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ie.setValue(V,"projectionMatrix",C.projectionMatrix),Ie.setValue(V,"viewMatrix",C.matrixWorldInverse);const Rn=Ie.map.cameraPosition;Rn!==void 0&&Rn.setValue(V,_e.setFromMatrixPosition(C.matrixWorld)),Oe.logarithmicDepthBuffer&&Ie.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ie.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),lt!==C&&(lt=C,Tn=!0,ci=!0)}if(Zt.needsLights&&(Ue.state.directionalShadowMap.length>0&&Ie.setValue(V,"directionalShadowMap",Ue.state.directionalShadowMap,q),Ue.state.spotShadowMap.length>0&&Ie.setValue(V,"spotShadowMap",Ue.state.spotShadowMap,q),Ue.state.pointShadowMap.length>0&&Ie.setValue(V,"pointShadowMap",Ue.state.pointShadowMap,q)),Q.isSkinnedMesh){Ie.setOptional(V,Q,"bindMatrix"),Ie.setOptional(V,Q,"bindMatrixInverse");const An=Q.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Ie.setValue(V,"boneTexture",An.boneTexture,q))}Q.isBatchedMesh&&(Ie.setOptional(V,Q,"batchingTexture"),Ie.setValue(V,"batchingTexture",Q._matricesTexture,q),Ie.setOptional(V,Q,"batchingIdTexture"),Ie.setValue(V,"batchingIdTexture",Q._indirectTexture,q),Ie.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ie.setValue(V,"batchingColorTexture",Q._colorsTexture,q));const pn=rt.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&le.update(Q,rt,En),(Tn||Zt.receiveShadow!==Q.receiveShadow)&&(Zt.receiveShadow=Q.receiveShadow,Ie.setValue(V,"receiveShadow",Q.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(bn.envMap.value=Gt,bn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&Y.environment!==null&&(bn.envMapIntensity.value=Y.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=sA()),Tn&&(Ie.setValue(V,"toneMappingExposure",T.toneMappingExposure),Zt.needsLights&&Xr(bn,ci),Dt&&et.fog===!0&&ee.refreshFogUniforms(bn,Dt),ee.refreshMaterialUniforms(bn,et,gt,at,z.state.transmissionRenderTarget[C.id]),Ic.upload(V,tl(Zt),bn,q)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ic.upload(V,tl(Zt),bn,q),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ie.setValue(V,"center",Q.center),Ie.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ie.setValue(V,"normalMatrix",Q.normalMatrix),Ie.setValue(V,"modelMatrix",Q.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const An=et.uniformsGroups;for(let Rn=0,Is=An.length;Rn<Is;Rn++){const Mi=An[Rn];St.update(Mi,En),St.bind(Mi,En)}}return En}function Xr(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Ma(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(C,Y,rt){const et=E.get(C);et.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=Y,E.get(C.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const rt=E.get(C);rt.__webglFramebuffer=Y,rt.__useDefaultFramebuffer=Y===void 0};const Ea=V.createFramebuffer();this.setRenderTarget=function(C,Y=0,rt=0){tt=C,G=Y,Z=rt;let et=null,Q=!1,Dt=!1;if(C){const Lt=E.get(C);if(Lt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),I.copy(C.viewport),H.copy(C.scissor),st=C.scissorTest,Yt.viewport(I),Yt.scissor(H),Yt.setScissorTest(st),ut=-1;return}else if(Lt.__webglFramebuffer===void 0)q.setupRenderTarget(C);else if(Lt.__hasExternalTextures)q.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Jt=C.depthTexture;if(Lt.__boundDepthTexture!==Jt){if(Jt!==null&&E.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(C)}}const Gt=C.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Dt=!0);const Wt=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[Y])?et=Wt[Y][rt]:et=Wt[Y],Q=!0):C.samples>0&&q.useMultisampledRTT(C)===!1?et=E.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?et=Wt[rt]:et=Wt,I.copy(C.viewport),H.copy(C.scissor),st=C.scissorTest}else I.copy(it).multiplyScalar(gt).floor(),H.copy(ft).multiplyScalar(gt).floor(),st=wt;if(rt!==0&&(et=Ea),Yt.bindFramebuffer(V.FRAMEBUFFER,et)&&Yt.drawBuffers(C,et),Yt.viewport(I),Yt.scissor(H),Yt.setScissorTest(st),Q){const Lt=E.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Lt.__webglTexture,rt)}else if(Dt){const Lt=Y;for(let Gt=0;Gt<C.textures.length;Gt++){const Wt=E.get(C.textures[Gt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Gt,Wt.__webglTexture,rt,Lt)}}else if(C!==null&&rt!==0){const Lt=E.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,rt)}ut=-1},this.readRenderTargetPixels=function(C,Y,rt,et,Q,Dt,It,Lt=0){if(!(C&&C.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){Yt.bindFramebuffer(V.FRAMEBUFFER,Gt);try{const Wt=C.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Oe.textureFormatReadable(Jt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(qt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-et&&rt>=0&&rt<=C.height-Q&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(Y,rt,et,Q,Tt.convert(Jt),Tt.convert(qt),Dt))}finally{const Wt=tt!==null?E.get(tt).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(C,Y,rt,et,Q,Dt,It,Lt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt)if(Y>=0&&Y<=C.width-et&&rt>=0&&rt<=C.height-Q){Yt.bindFramebuffer(V.FRAMEBUFFER,Gt);const Wt=C.textures[Lt],Jt=Wt.format,qt=Wt.type;if(!Oe.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(Y,rt,et,Q,Tt.convert(Jt),Tt.convert(qt),0);const De=tt!==null?E.get(tt).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,De);const Qe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await My(V,Qe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer($t),V.deleteSync(Qe),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,rt=0){const et=Math.pow(2,-rt),Q=Math.floor(C.image.width*et),Dt=Math.floor(C.image.height*et),It=Y!==null?Y.x:0,Lt=Y!==null?Y.y:0;q.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,It,Lt,Q,Dt),Yt.unbindTexture()};const as=V.createFramebuffer(),Ta=V.createFramebuffer();this.copyTextureToTexture=function(C,Y,rt=null,et=null,Q=0,Dt=null){Dt===null&&(Q!==0?(Ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=Q,Q=0):Dt=0);let It,Lt,Gt,Wt,Jt,qt,$t,De,Qe;const Ye=C.isCompressedTexture?C.mipmaps[Dt]:C.image;if(rt!==null)It=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Gt=rt.isBox3?rt.max.z-rt.min.z:1,Wt=rt.min.x,Jt=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const pn=Math.pow(2,-Q);It=Math.floor(Ye.width*pn),Lt=Math.floor(Ye.height*pn),C.isDataArrayTexture?Gt=Ye.depth:C.isData3DTexture?Gt=Math.floor(Ye.depth*pn):Gt=1,Wt=0,Jt=0,qt=0}et!==null?($t=et.x,De=et.y,Qe=et.z):($t=0,De=0,Qe=0);const Pe=Tt.convert(Y.format),Zt=Tt.convert(Y.type);let Ue;Y.isData3DTexture?(q.setTexture3D(Y,0),Ue=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Ue=V.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Ue=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const ae=V.getParameter(V.UNPACK_ROW_LENGTH),En=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Yi=V.getParameter(V.UNPACK_SKIP_PIXELS),Tn=V.getParameter(V.UNPACK_SKIP_ROWS),ci=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ye.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ye.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Jt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qt);const Ie=C.isDataArrayTexture||C.isData3DTexture,bn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const pn=E.get(C),An=E.get(Y),Rn=E.get(pn.__renderTarget),Is=E.get(An.__renderTarget);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let Mi=0;Mi<Gt;Mi++)Ie&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(C).__webglTexture,Q,qt+Mi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Dt,Qe+Mi)),V.blitFramebuffer(Wt,Jt,It,Lt,$t,De,It,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||E.has(C)){const pn=E.get(C),An=E.get(Y);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,as),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ta);for(let Rn=0;Rn<Gt;Rn++)Ie?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,Q,qt+Rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,Q),bn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,Dt,Qe+Rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,Dt),Q!==0?V.blitFramebuffer(Wt,Jt,It,Lt,$t,De,It,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):bn?V.copyTexSubImage3D(Ue,Dt,$t,De,Qe+Rn,Wt,Jt,It,Lt):V.copyTexSubImage2D(Ue,Dt,$t,De,Wt,Jt,It,Lt);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Ue,Dt,$t,De,Qe,It,Lt,Gt,Pe,Zt,Ye.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Ue,Dt,$t,De,Qe,It,Lt,Gt,Pe,Ye.data):V.texSubImage3D(Ue,Dt,$t,De,Qe,It,Lt,Gt,Pe,Zt,Ye):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,$t,De,It,Lt,Pe,Zt,Ye.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,$t,De,Ye.width,Ye.height,Pe,Ye.data):V.texSubImage2D(V.TEXTURE_2D,Dt,$t,De,It,Lt,Pe,Zt,Ye);V.pixelStorei(V.UNPACK_ROW_LENGTH,ae),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,En),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Tn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ci),Dt===0&&Y.generateMipmaps&&V.generateMipmap(Ue),Yt.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?q.setTextureCube(C,0):C.isData3DTexture?q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?q.setTexture2DArray(C,0):q.setTexture2D(C,0),Yt.unbindTexture()},this.resetState=function(){G=0,Z=0,tt=null,Yt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}var Ft=(o=>(o[o.IDLE=0]="IDLE",o[o.WALK=1]="WALK",o[o.WALK_FORWARD=2]="WALK_FORWARD",o[o.WALK_BACK=3]="WALK_BACK",o[o.DUCK=4]="DUCK",o[o.BLOCK=5]="BLOCK",o[o.BLOCK_LOW=6]="BLOCK_LOW",o[o.DASH_FORWARD=7]="DASH_FORWARD",o[o.DASH_BACK=8]="DASH_BACK",o[o.ATTACK_PUNCH=9]="ATTACK_PUNCH",o[o.ATTACK_KICK=10]="ATTACK_KICK",o[o.ATTACK_LOW=11]="ATTACK_LOW",o[o.HIT=12]="HIT",o[o.STUNNED=13]="STUNNED",o[o.DEAD=14]="DEAD",o[o.VICTORY=15]="VICTORY",o))(Ft||{});const We={MAX_HEALTH:100,ROUND_TIME:60,GRAVITY:80,GROUND_Y:0,JUMP_FORCE:22,MOVE_SPEED:4.5,DASH_SPEED:18,ACCELERATION:60,DRAG:40,HIT_STUN_FRAMES:30},Hh={[Ft.ATTACK_PUNCH]:{startup:6,active:4,recovery:10,damage:8,stun:15,knockback:1,blockStun:8,hitLevel:"high"},[Ft.ATTACK_KICK]:{startup:12,active:6,recovery:18,damage:14,stun:25,knockback:3.5,blockStun:15,hitLevel:"mid"},[Ft.ATTACK_LOW]:{startup:10,active:6,recovery:14,damage:10,stun:18,knockback:2,blockStun:10,hitLevel:"low"}};class V_{constructor(t,i){this.hp=We.MAX_HEALTH,this.state=Ft.IDLE,this.velocity=new j,this.facing=1,this.stateTimer=0,this.attackCooldown=0,this.flashTimer=0,this.stunDuration=0,this.hitStopTimer=0,this.elasticScale=new j(1,1,1),this.lastTapTime=0,this.lastKey="",this.dashTimer=0,this.dashVariant=0,this.aiTimer=0,this.aiAction="IDLE",this.isElectric=!1,this.isPlayer1=t,this.mesh=new wi,this.bodyParts={};const s=!this.isPlayer1,l=s?.6:1.3,c=s?9127187:7829367,h=s?13808780:16777215,d=new Ld({color:c,roughness:.9}),m=new Ld({color:h,roughness:.9});if(this.mesh.scale.set(l,l,l),this.bodyParts.torso=new wi,this.bodyParts.torso.position.y=1.05,this.mesh.add(this.bodyParts.torso),s){const b=new qe(new Hn(.5,.6,.3),d);b.castShadow=!0,this.bodyParts.torso.add(b);const y=new qe(new Br(.3,.4),m);y.position.set(0,0,.16),this.bodyParts.torso.add(y)}else{const b=new qe(new Hn(.7,.5,.4),d);b.position.y=.25,b.castShadow=!0,this.bodyParts.torso.add(b);const y=new qe(new Hn(.5,.4,.3),m);y.position.set(0,-.1,.05),this.bodyParts.torso.add(y)}this.bodyParts.head=new wi,this.bodyParts.head.position.set(0,s?.4:.6,0),this.bodyParts.torso.add(this.bodyParts.head);const p=new Hn(.4,.35,.35),v=new qe(p,d);this.bodyParts.head.add(v);let _,S;if(s){const b=new Yc(.1,.1,.05);_=new qe(b,d),_.rotation.x=1.57,S=new qe(b,d),S.rotation.x=1.57}else{const b=new Kd(.08,.15,4);_=new qe(b,d),_.rotation.z=-.2,S=new qe(b,d),S.rotation.z=.2}_.position.set(.15,.25,0),S.position.set(-.15,.25,0),this.bodyParts.head.add(_),this.bodyParts.head.add(S);const M=b=>{const y=b==="L"?-1:1,x=new wi;x.position.set(y*(s?.3:.5),s?.2:.4,0),this.bodyParts.torso.add(x);const L=new Hn(s?.1:.18,.4,s?.1:.18),U=new qe(L,d);U.position.y=-.2,x.add(U);const D=new wi;D.position.set(0,-.4,0),x.add(D);const z=new Hn(s?.09:.16,.35,s?.09:.16),B=s?d:m,O=new qe(z,B);O.position.y=-.15,D.add(O);const X=s?.12:.22,T=new qe(new Hn(X,X,X),m);T.position.y=-.4,T.castShadow=!0,D.add(T),b==="L"?(this.bodyParts.armL=x,this.bodyParts.elbowL=D,this.bodyParts.upperArmL=U,this.bodyParts.lowerArmL=O,this.bodyParts.fistL=T):(this.bodyParts.armR=x,this.bodyParts.elbowR=D,this.bodyParts.upperArmR=U,this.bodyParts.lowerArmR=O,this.bodyParts.fistR=T)};M("L"),M("R");const A=b=>{const y=b==="L"?-1:1,x=new wi;x.position.set(y*(s?.15:.25),-.1,0),this.bodyParts.torso.add(x);const L=new qe(new Hn(s?.15:.22,.5,s?.15:.22),d);L.position.y=-.25,x.add(L);const U=new wi;U.position.set(0,-.5,0),x.add(U);const D=new qe(new Hn(s?.12:.18,.5,s?.12:.18),d);D.position.y=-.25,U.add(D);const z=new qe(new Hn(s?.15:.22,.1,s?.25:.35),m);z.position.set(0,-.55,.05),U.add(z),b==="L"?(this.bodyParts.legL=x,this.bodyParts.kneeL=U,this.bodyParts.thighL=L,this.bodyParts.shinL=D,this.bodyParts.bootL=z):(this.bodyParts.legR=x,this.bodyParts.kneeR=U,this.bodyParts.thighR=L,this.bodyParts.shinR=D,this.bodyParts.bootR=z)};A("L"),A("R"),this.mesh.position.set(t?-6:6,We.GROUND_Y,0)}handleInputEvent(t){const i=Date.now();t===this.lastKey&&i-this.lastTapTime<250?(this.triggerDash(t),this.lastKey=""):(this.lastKey=t,this.lastTapTime=i)}triggerDash(t){this.dashVariant=Math.floor(Math.random()*3),t==="KeyD"?(this.state=Ft.DASH_FORWARD,this.velocity.x=We.DASH_SPEED,this.dashTimer=30):t==="KeyA"&&(this.state=Ft.DASH_BACK,this.velocity.x=-18,this.dashTimer=30)}update(t,i,s,l){if(this.state===Ft.DEAD){this.animateDead();return}if(this.hitStopTimer>0){this.hitStopTimer-=t*60,this.handleVisuals();return}(this.state===Ft.STUNNED||this.state===Ft.HIT)&&(this.stunDuration-=t*60,this.stunDuration<=0&&(this.state=Ft.IDLE)),this.handlePhysics(s,t),this.isPlayer1?this.handleInput(i,t,s):this.handleAI(s,t),this.handleState(s,t),this.updateAnimations(t),this.handleVisuals()}handleInput(t,i,s){if(this.state===Ft.HIT||this.state===Ft.STUNNED||this.state===Ft.VICTORY||this.state===Ft.DEAD)return;if(this.isAttacking()){this.velocity.x-=this.velocity.x*We.DRAG*i,this.velocity.z-=this.velocity.z*We.DRAG*i;return}if(this.attackCooldown>0&&(this.attackCooldown-=i*60),this.attackCooldown<=0){if(t.keys.Space&&this.mesh.position.y<=We.GROUND_Y+.1&&(this.velocity.y=We.JUMP_FORCE),t.keys.KeyC||t.keys.ControlLeft){if(t.keys.KeyF||t.keys.KeyJ||t.mouseLeft||t.keys.KeyG||t.keys.KeyK||t.mouseRight){this.attack(Ft.ATTACK_LOW);return}let d=0;t.isPressed("KeyA")&&(d=-1),t.isPressed("KeyD")&&(d=1);const m=Math.sign(s.mesh.position.x-this.mesh.position.x)||1;d===-m?this.state=Ft.BLOCK_LOW:this.state=Ft.DUCK,this.velocity.x=0,this.velocity.z=0;return}if(t.keys.KeyF||t.keys.KeyJ||t.mouseLeft){this.attack(Ft.ATTACK_PUNCH);return}if(t.keys.KeyG||t.keys.KeyK||t.mouseRight){this.attack(Ft.ATTACK_KICK);return}}let c=0,h=0;if(t.isPressed("KeyA")&&(c=-1),t.isPressed("KeyD")&&(c=1),t.isPressed("KeyW")&&(h=-1),t.isPressed("KeyS")&&(h=1),this.state===Ft.DASH_FORWARD||this.state===Ft.DASH_BACK){this.dashTimer-=i*60,this.dashTimer<=0&&(this.state=Ft.IDLE);return}if(c!==0||h!==0){const d=Math.sign(s.mesh.position.x-this.mesh.position.x)||1;c===d?this.state=Ft.WALK_FORWARD:c===-d?this.state=Ft.WALK_BACK:this.state=Ft.WALK;const m=c*We.MOVE_SPEED,p=h*We.MOVE_SPEED*.6;this.velocity.x<m?(this.velocity.x+=We.ACCELERATION*i,this.velocity.x>m&&(this.velocity.x=m)):this.velocity.x>m&&(this.velocity.x-=We.ACCELERATION*i,this.velocity.x<m&&(this.velocity.x=m)),this.velocity.z<p?(this.velocity.z+=We.ACCELERATION*i,this.velocity.z>p&&(this.velocity.z=p)):this.velocity.z>p&&(this.velocity.z-=We.ACCELERATION*i,this.velocity.z<p&&(this.velocity.z=p))}else{this.state!==Ft.IDLE&&!this.isAttacking()&&(this.state=Ft.IDLE);const d=We.DRAG*i;this.velocity.x>0?this.velocity.x=Math.max(0,this.velocity.x-d):this.velocity.x<0&&(this.velocity.x=Math.min(0,this.velocity.x+d)),this.velocity.z>0?this.velocity.z=Math.max(0,this.velocity.z-d):this.velocity.z<0&&(this.velocity.z=Math.min(0,this.velocity.z+d))}}handleAI(t,i){if(this.state===Ft.HIT||this.state===Ft.STUNNED||this.state===Ft.VICTORY||this.state===Ft.DEAD||this.isAttacking())return;if(this.attackCooldown>0&&(this.attackCooldown-=i*60),this.aiTimer++,this.aiTimer>45)if(this.aiTimer=0,this.mesh.position.distanceTo(t.mesh.position)<2.5){const h=Math.random();h<.3?this.aiAction="ATTACK":h<.6?this.aiAction="BLOCK":this.aiAction="MOVE_BACK"}else this.aiAction="MOVE_FORWARD";if(this.aiAction==="ATTACK"&&this.attackCooldown<=0){const c=Math.random();c<.33?this.attack(Ft.ATTACK_PUNCH):c<.66?this.attack(Ft.ATTACK_KICK):this.attack(Ft.ATTACK_LOW),this.aiAction="IDLE";return}if(this.aiAction==="BLOCK"){this.state=Ft.BLOCK,this.velocity.set(0,0,0);return}let l=0;if(this.aiAction==="MOVE_FORWARD"&&(l=Math.sign(t.mesh.position.x-this.mesh.position.x)),this.aiAction==="MOVE_BACK"&&(l=-Math.sign(t.mesh.position.x-this.mesh.position.x)),l!==0){this.state=Ft.WALK;const c=l*We.MOVE_SPEED;this.velocity.x+=(c-this.velocity.x)*5*i}else this.state=Ft.IDLE,this.velocity.x*=.8}attack(t){this.state=t,this.stateTimer=0,this.velocity.set(0,0,0)}handleState(t,i){if(this.stateTimer+=i*60,this.isAttacking()){const l=Hh[this.state];if(l){const c=l.startup,h=l.active,d=l.recovery,m=c+h+d;this.stateTimer>c&&this.stateTimer<=c+h&&t.hitStopTimer<=0&&t.state!==Ft.DEAD&&this.checkHit(t,l),this.stateTimer>=m&&(this.state=Ft.IDLE)}else this.state=Ft.IDLE}const s=new j(t.mesh.position.x,this.mesh.position.y,t.mesh.position.z);this.mesh.lookAt(s)}checkHit(t,i){const s=new j,l=this.state===Ft.ATTACK_PUNCH?1.5:2,c=new j().subVectors(t.mesh.position,this.mesh.position).normalize();s.copy(this.mesh.position).add(c.multiplyScalar(1));const h=l*l;if(this.mesh.position.distanceToSquared(t.mesh.position)<h*1.5){let m=!1,p=!1;const v=t.state===Ft.BLOCK||t.state===Ft.WALK_BACK,_=t.state===Ft.BLOCK_LOW,S=t.state===Ft.DUCK||t.state===Ft.BLOCK_LOW;if(i.hitLevel==="high"?S?p=!0:v&&(m=!0):i.hitLevel==="mid"?(v&&(m=!0),_&&(m=!1)):i.hitLevel==="low"&&_&&(m=!0),p)return;if(this.hitStopTimer=8,t.hitStopTimer=8,m){t.takeDamage(i.damage*.1,this.mesh.position,!0,!1,!1,i);return}const M=t.isAttacking(),A=this.state===Ft.ATTACK_KICK||M&&i.hitLevel==="mid";t.takeDamage(i.damage,this.mesh.position,!1,A,M,i)}}takeDamage(t,i,s,l,c,h){let d=s?0:t;if(c&&(d*=1.25),this.hp=Math.max(0,this.hp-d),this.hp<=0){this.state=Ft.DEAD;return}this.state=s?(h==null?void 0:h.hitLevel)==="low"?Ft.BLOCK_LOW:Ft.BLOCK:Ft.HIT;let m=h?s?h.blockStun:h.stun:We.HIT_STUN_FRAMES;c&&!s&&(m+=10),this.stunDuration=m,this.flashTimer=10;const p=new j().subVectors(this.mesh.position,i).normalize();p.y=0,p.normalize();let v=(h==null?void 0:h.knockback)||1;s&&(v*=.5),c&&!s&&(v*=1.2),this.velocity.add(p.multiplyScalar(v*5))}handlePhysics(t,i){this.mesh.position.add(this.velocity.clone().multiplyScalar(i)),this.mesh.position.y>We.GROUND_Y?this.velocity.y-=We.GRAVITY*i:(this.velocity.y<-10&&this.elasticScale.set(1.4,.6,1.4),this.velocity.y=0,this.mesh.position.y=We.GROUND_Y),this.mesh.position.x=Math.max(-15,Math.min(15,this.mesh.position.x)),this.mesh.position.z=Math.max(-8,Math.min(8,this.mesh.position.z));const s=new j().subVectors(this.mesh.position,t.mesh.position);s.y=0;const l=s.length(),c=1,h=c+c;if(l<h&&l>.001){const d=h-l,m=s.normalize();this.mesh.position.add(m.multiplyScalar(d*.5))}}isAttacking(){return this.state===Ft.ATTACK_PUNCH||this.state===Ft.ATTACK_KICK||this.state===Ft.ATTACK_LOW}handleVisuals(){const t=this.state===Ft.HIT;this.bodyParts.torso.children[0].material.emissive.setHex(t&&this.flashTimer>0?11141120:0),this.flashTimer>0&&(this.flashTimer-=1)}updateAnimations(t){const i=Date.now()/1e3;if(this.elasticScale.lerp(new j(1,1,1),10*t),this.mesh.scale.copy(this.elasticScale),this.state===Ft.IDLE){const s=Math.sin(i*8)*.1;this.bodyParts.torso.rotation.z=s,this.bodyParts.head.rotation.z=-s*1.5;const l=Math.sin(i*4)*.05;this.elasticScale.set(1+l,1-l,1+l)}if((this.state===Ft.WALK||this.state===Ft.WALK_FORWARD||this.state===Ft.WALK_BACK)&&(this.bodyParts.legL.rotation.x=Math.sin(i*20)*1.5,this.bodyParts.kneeL.rotation.x=-2,this.bodyParts.legR.rotation.x=Math.sin(i*20+Math.PI)*1.5,this.bodyParts.kneeR.rotation.x=-2,this.bodyParts.armL.rotation.z=.5+Math.sin(i*20)*.5,this.bodyParts.armR.rotation.z=-.5-Math.sin(i*20)*.5),(this.state===Ft.DASH_FORWARD||this.state===Ft.DASH_BACK)&&(this.bodyParts.legL.rotation.x-=30*t,this.bodyParts.legR.rotation.x+=30*t,this.bodyParts.torso.rotation.x=.5,this.elasticScale.set(1.5,.7,1)),this.state===Ft.ATTACK_PUNCH){this.bodyParts.fistR.scale.set(1,1,1);const s=Hh[this.state];if(s){const l=Math.min(1,this.stateTimer/(s.startup+s.active+s.recovery));l>.3&&l<.6?(this.bodyParts.fistR.scale.set(3.5,3.5,3.5),this.bodyParts.armR.rotation.x=-1.57,this.bodyParts.lowerArmR.scale.y=2):this.bodyParts.lowerArmR.scale.y=1}}if(this.state===Ft.ATTACK_KICK){this.bodyParts.bootR.scale.set(1,1,1);const s=Hh[this.state];if(s){const l=Math.min(1,this.stateTimer/(s.startup+s.active+s.recovery));l>.3&&l<.6&&(this.bodyParts.bootR.scale.set(3,3,3),this.bodyParts.legR.rotation.x=-1.8)}}if(this.mesh.position.y>We.GROUND_Y+.5&&this.elasticScale.set(.7,1.5,.7),this.mesh.position.y<=We.GROUND_Y&&this.velocity.y<-5&&this.elasticScale.set(1.5,.5,1.5),this.state===Ft.DEAD){this.elasticScale.set(2,.1,2),this.mesh.position.y=.1;return}this.state===Ft.HIT||this.state===Ft.STUNNED?(this.elasticScale.set(1+Math.random()*.4,1-Math.random()*.2,1+Math.random()*.4),this.bodyParts.head.scale.set(1.5,1.5,1.5)):this.bodyParts.head.scale.set(1,1,1)}animateDead(){this.mesh.rotation.x=-1.5,this.mesh.position.y=.2}}class oA{constructor(){this.keys={},this.mouseLeft=!1,this.mouseRight=!1,this.onKeyDownCallback=null,window.addEventListener("keydown",t=>this.onKeyDown(t)),window.addEventListener("keyup",t=>this.onKeyUp(t)),window.addEventListener("mousedown",t=>this.onMouseDown(t)),window.addEventListener("mouseup",t=>this.onMouseUp(t)),window.addEventListener("contextmenu",t=>t.preventDefault())}onMouseDown(t){t.button===0&&(this.mouseLeft=!0),t.button===2&&(this.mouseRight=!0)}onMouseUp(t){t.button===0&&(this.mouseLeft=!1),t.button===2&&(this.mouseRight=!1)}onKeyDown(t){this.keys[t.code]||this.onKeyDownCallback&&this.onKeyDownCallback(t.code),this.keys[t.code]=!0}onKeyUp(t){this.keys[t.code]=!1}isPressed(t){return!!this.keys[t]}cleanup(){window.removeEventListener("keydown",t=>this.onKeyDown(t)),window.removeEventListener("keyup",t=>this.onKeyUp(t))}}class lA{constructor(t,i){this.animationId=0,this.lastTime=0,this.timeLeft=We.ROUND_TIME,this.particles=[],this.animate=c=>{this.animationId=requestAnimationFrame(this.animate);const h=(c-this.lastTime)/1e3;if(this.lastTime=c,this.p1.hp<=0||this.p2.hp<=0||this.timeLeft<=0){this.updateFighters(h,c),this.updateCamera(),this.renderer.render(this.scene,this.camera),this.broadcastState();return}const d=this.p1.hp,m=this.p2.hp;this.updateFighters(h,c),this.updateElectricFX(this.p1),this.updateElectricFX(this.p2),this.updateParticles(),this.updateCamera(),this.p1.hp<d&&this.createHitParticles(this.p1.mesh.position),this.p2.hp<m&&this.createHitParticles(this.p2.mesh.position),this.renderer.render(this.scene,this.camera),this.broadcastState()},this.handleResize=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},this.onStateChange=i,this.input=new oA,this.input.onKeyDownCallback=c=>{this.p1&&this.p1.handleInputEvent(c)},this.scene=new Yy,this.scene.background=new ge(15790320),this.scene.fog=new qd(15790320,20,80),this.camera=new si(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,5,10),this.renderer=new rA({canvas:t,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0;const s=new lM(16777215,.6);this.scene.add(s);const l=new oM(16777198,1.2);l.position.set(10,20,10),l.castShadow=!0,l.shadow.mapSize.width=2048,l.shadow.mapSize.height=2048,this.scene.add(l),this.createEnvironment(),this.p1=new V_(!0,16724787),this.p2=new V_(!1,3355647),this.scene.add(this.p1.mesh),this.scene.add(this.p2.mesh),this.p2.mesh.rotation.y=-Math.PI,setInterval(()=>{this.p1.hp>0&&this.p2.hp>0&&this.timeLeft>0&&(this.timeLeft--,this.broadcastState())},1e3),this.lastTime=performance.now(),this.animate(this.lastTime),window.addEventListener("resize",this.handleResize)}createEnvironment(){this.scene.background=new ge(1118481);const t=new Br(100,100),i=new Ld({color:2236962,roughness:.6,metalness:.5}),s=new qe(t,i);s.rotation.x=-Math.PI/2,s.position.y=-.01,s.receiveShadow=!0,this.scene.add(s);const l=new sM(16777215,200);l.position.set(0,20,0),l.angle=.6,l.penumbra=.5,l.castShadow=!0,this.scene.add(l);const c=new uM(100,50,4473924,2236962);this.scene.add(c)}updateElectricFX(t){if(t.isElectric&&Math.random()<.3){const i=t.mesh.position.clone();i.y+=1,i.x+=t.facing*.5,this.createElectricParticle(i)}}createElectricParticle(t){const i=new Zd(.1+Math.random()*.2),s=new Vc({color:65535}),l=new qe(i,s);l.position.copy(t),l.position.addScalar((Math.random()-.5)*.5);const c=new j(0,.1,0);this.scene.add(l),this.particles.push({mesh:l,life:5,velocity:c})}createHitParticles(t,i=!1){const s=i?20:12;for(let l=0;l<s;l++){const c=new jd(i?.3:.2,0),h=i?65535:Math.random()>.5?16776960:16711935,d=new Vc({color:h}),m=new qe(c,d);m.position.copy(t);const p=new j((Math.random()-.5)*(i?8:4),Math.random()*(i?8:4),(Math.random()-.5)*(i?8:4));this.scene.add(m),this.particles.push({mesh:m,life:i?60:40,velocity:p})}}updateParticles(){for(let t=this.particles.length-1;t>=0;t--){const i=this.particles[t];i.life--,i.mesh.position.add(i.velocity),i.velocity.y-=.05,i.mesh.rotation.x+=.4,i.mesh.rotation.y+=.4,i.life<=0&&(this.scene.remove(i.mesh),this.particles.splice(t,1))}}updateFighters(t,i){this.p1.update(t,this.input,this.p2,i),this.p2.update(t,this.input,this.p1,i)}updateCamera(){const t=new j().addVectors(this.p1.mesh.position,this.p2.mesh.position).multiplyScalar(.5),i=this.p1.mesh.position.distanceTo(this.p2.mesh.position),s=10,l=Math.min(20,Math.max(0,i-3)*.8),c=s+l,h=3.5+l*.1,d=new j(t.x,h,c);this.camera.position.lerp(d,.1);const m=new j(t.x,2.5,0);this.camera.lookAt(m)}broadcastState(){let t=null;this.p1.hp<=0?t="Player 2":this.p2.hp<=0?t="Player 1":this.timeLeft===0&&(t=this.p1.hp>this.p2.hp?"Player 1":this.p2.hp>this.p1.hp?"Player 2":"Draw"),this.onStateChange({p1Health:this.p1.hp,p2Health:this.p2.hp,timeLeft:this.timeLeft,gameOver:t!==null,winner:t})}cleanup(){this.input.cleanup(),window.removeEventListener("resize",this.handleResize),cancelAnimationFrame(this.animationId)}}const cA=({gameState:o})=>{const t=o.p1Health/We.MAX_HEALTH*100,i=o.p2Health/We.MAX_HEALTH*100;return Ne.jsxs("div",{className:"absolute inset-0 pointer-events-none select-none overflow-hidden",children:[Ne.jsxs("div",{className:"absolute top-0 w-full p-4 flex justify-between items-start",children:[Ne.jsxs("div",{className:"w-2/5 max-w-md relative",children:[Ne.jsx("div",{className:"text-gray-400 font-bold text-xl mb-1 ml-1 tracking-widest italic",style:{textShadow:"0px 0px 5px grey"},children:"TOM (MISHIMA)"}),Ne.jsx("div",{className:"h-8 w-full bg-gray-900 border-2 border-gray-500 skew-x-[-15deg] overflow-hidden relative shadow-[0_0_15px_rgba(255,255,255,0.3)]",children:Ne.jsx("div",{className:"h-full bg-gradient-to-r from-gray-500 to-white transition-all duration-200",style:{width:`${t}%`}})})]}),Ne.jsx("div",{className:"w-24 h-20 bg-black/80 border-b-4 border-yellow-500 flex items-center justify-center relative top-[-5px] shadow-lg z-10 clip-path-polygon",children:Ne.jsx("span",{className:`text-5xl font-black tracking-tighter ${o.timeLeft<10?"text-red-500 animate-pulse":"text-yellow-400"}`,style:{textShadow:"0 2px 0 black"},children:o.timeLeft})}),Ne.jsxs("div",{className:"w-2/5 max-w-md relative",children:[Ne.jsx("div",{className:"text-yellow-600 font-bold text-xl mb-1 mr-1 text-right tracking-widest italic",style:{textShadow:"0px 0px 5px orange"},children:"JERRY (KAZAMA)"}),Ne.jsx("div",{className:"h-8 w-full bg-gray-900 border-2 border-yellow-700 skew-x-[15deg] overflow-hidden relative shadow-[0_0_15px_rgba(255,165,0,0.3)]",children:Ne.jsx("div",{className:"h-full bg-gradient-to-l from-yellow-600 to-white transition-all duration-200 float-right",style:{width:`${i}%`}})})]})]}),Ne.jsxs("div",{className:"absolute bottom-4 left-4 text-white text-xs opacity-50 bg-black/50 p-2 rounded",children:[Ne.jsx("p",{className:"font-bold mb-1",children:"P1 (Red)"}),Ne.jsx("p",{children:"WASD - Move"}),Ne.jsx("p",{children:"F - Punch"}),Ne.jsx("p",{children:"G - Kick"})]}),Ne.jsxs("div",{className:"absolute bottom-4 right-4 text-white text-xs opacity-50 bg-black/50 p-2 rounded text-right",children:[Ne.jsx("p",{className:"font-bold mb-1",children:"P2 (Blue)"}),Ne.jsx("p",{children:"Arrows - Move"}),Ne.jsx("p",{children:"K - Punch"}),Ne.jsx("p",{children:"L - Kick"})]}),o.gameOver&&Ne.jsxs("div",{className:"absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-50 animate-in fade-in duration-500",children:[Ne.jsx("h1",{className:"text-8xl font-black text-yellow-500 mb-4 tracking-tighter",style:{textShadow:"0 0 20px orange"},children:"K.O."}),Ne.jsxs("h2",{className:"text-4xl text-white font-bold uppercase tracking-widest mb-8",children:[o.winner," WINS"]}),Ne.jsx("button",{className:"pointer-events-auto px-8 py-3 bg-white text-black font-bold text-xl hover:bg-gray-200 hover:scale-105 transition-transform",onClick:()=>window.location.reload(),children:"REMATCH"})]})]})},uA=()=>{const o=ko.useRef(null),t=ko.useRef(null),[i,s]=ko.useState({p1Health:We.MAX_HEALTH,p2Health:We.MAX_HEALTH,timeLeft:We.ROUND_TIME,gameOver:!1,winner:null});return ko.useEffect(()=>(o.current&&!t.current&&(t.current=new lA(o.current,l=>{s(c=>c.timeLeft!==l.timeLeft||c.p1Health!==l.p1Health||c.p2Health!==l.p2Health||c.gameOver!==l.gameOver?l:c)})),()=>{t.current&&(t.current.cleanup(),t.current=null)}),[]),Ne.jsxs("div",{className:"relative w-screen h-screen bg-black overflow-hidden",children:[Ne.jsx("canvas",{ref:o,className:"block w-full h-full"}),Ne.jsx(cA,{gameState:i})]})},Av=document.getElementById("root");if(!Av)throw new Error("Could not find root element to mount to");const fA=VS.createRoot(Av);fA.render(Ne.jsx(OS.StrictMode,{children:Ne.jsx(uA,{})}));
