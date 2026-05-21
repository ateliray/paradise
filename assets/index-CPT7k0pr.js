(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function p_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Df={exports:{}},ha={},If={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function iM(){if(Hg)return ht;Hg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(F,ie,Ue){this.props=F,this.context=ie,this.refs=E,this.updater=Ue||S}x.prototype.isReactComponent={},x.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=x.prototype;function L(F,ie,Ue){this.props=F,this.context=ie,this.refs=E,this.updater=Ue||S}var P=L.prototype=new y;P.constructor=L,M(P,x.prototype),P.isPureReactComponent=!0;var A=Array.isArray,k=Object.prototype.hasOwnProperty,U={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function O(F,ie,Ue){var K,fe={},Ee=null,_e=null;if(ie!=null)for(K in ie.ref!==void 0&&(_e=ie.ref),ie.key!==void 0&&(Ee=""+ie.key),ie)k.call(ie,K)&&!N.hasOwnProperty(K)&&(fe[K]=ie[K]);var Ae=arguments.length-2;if(Ae===1)fe.children=Ue;else if(1<Ae){for(var Ne=Array(Ae),Qe=0;Qe<Ae;Qe++)Ne[Qe]=arguments[Qe+2];fe.children=Ne}if(F&&F.defaultProps)for(K in Ae=F.defaultProps,Ae)fe[K]===void 0&&(fe[K]=Ae[K]);return{$$typeof:n,type:F,key:Ee,ref:_e,props:fe,_owner:U.current}}function b(F,ie){return{$$typeof:n,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function V(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ue){return ie[Ue]})}var le=/\/+/g;function Z(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):ie.toString(36)}function te(F,ie,Ue,K,fe){var Ee=typeof F;(Ee==="undefined"||Ee==="boolean")&&(F=null);var _e=!1;if(F===null)_e=!0;else switch(Ee){case"string":case"number":_e=!0;break;case"object":switch(F.$$typeof){case n:case e:_e=!0}}if(_e)return _e=F,fe=fe(_e),F=K===""?"."+Z(_e,0):K,A(fe)?(Ue="",F!=null&&(Ue=F.replace(le,"$&/")+"/"),te(fe,ie,Ue,"",function(Qe){return Qe})):fe!=null&&(R(fe)&&(fe=b(fe,Ue+(!fe.key||_e&&_e.key===fe.key?"":(""+fe.key).replace(le,"$&/")+"/")+F)),ie.push(fe)),1;if(_e=0,K=K===""?".":K+":",A(F))for(var Ae=0;Ae<F.length;Ae++){Ee=F[Ae];var Ne=K+Z(Ee,Ae);_e+=te(Ee,ie,Ue,Ne,fe)}else if(Ne=v(F),typeof Ne=="function")for(F=Ne.call(F),Ae=0;!(Ee=F.next()).done;)Ee=Ee.value,Ne=K+Z(Ee,Ae++),_e+=te(Ee,ie,Ue,Ne,fe);else if(Ee==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return _e}function ce(F,ie,Ue){if(F==null)return F;var K=[],fe=0;return te(F,K,"","",function(Ee){return ie.call(Ue,Ee,fe++)}),K}function ae(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Ue){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ue)},function(Ue){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ue)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var re={current:null},z={transition:null},ue={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:z,ReactCurrentOwner:U};function se(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:ce,forEach:function(F,ie,Ue){ce(F,function(){ie.apply(this,arguments)},Ue)},count:function(F){var ie=0;return ce(F,function(){ie++}),ie},toArray:function(F){return ce(F,function(ie){return ie})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},ht.Component=x,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=L,ht.StrictMode=r,ht.Suspense=d,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ht.act=se,ht.cloneElement=function(F,ie,Ue){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var K=M({},F.props),fe=F.key,Ee=F.ref,_e=F._owner;if(ie!=null){if(ie.ref!==void 0&&(Ee=ie.ref,_e=U.current),ie.key!==void 0&&(fe=""+ie.key),F.type&&F.type.defaultProps)var Ae=F.type.defaultProps;for(Ne in ie)k.call(ie,Ne)&&!N.hasOwnProperty(Ne)&&(K[Ne]=ie[Ne]===void 0&&Ae!==void 0?Ae[Ne]:ie[Ne])}var Ne=arguments.length-2;if(Ne===1)K.children=Ue;else if(1<Ne){Ae=Array(Ne);for(var Qe=0;Qe<Ne;Qe++)Ae[Qe]=arguments[Qe+2];K.children=Ae}return{$$typeof:n,type:F.type,key:fe,ref:Ee,props:K,_owner:_e}},ht.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},ht.createElement=O,ht.createFactory=function(F){var ie=O.bind(null,F);return ie.type=F,ie},ht.createRef=function(){return{current:null}},ht.forwardRef=function(F){return{$$typeof:c,render:F}},ht.isValidElement=R,ht.lazy=function(F){return{$$typeof:p,_payload:{_status:-1,_result:F},_init:ae}},ht.memo=function(F,ie){return{$$typeof:h,type:F,compare:ie===void 0?null:ie}},ht.startTransition=function(F){var ie=z.transition;z.transition={};try{F()}finally{z.transition=ie}},ht.unstable_act=se,ht.useCallback=function(F,ie){return re.current.useCallback(F,ie)},ht.useContext=function(F){return re.current.useContext(F)},ht.useDebugValue=function(){},ht.useDeferredValue=function(F){return re.current.useDeferredValue(F)},ht.useEffect=function(F,ie){return re.current.useEffect(F,ie)},ht.useId=function(){return re.current.useId()},ht.useImperativeHandle=function(F,ie,Ue){return re.current.useImperativeHandle(F,ie,Ue)},ht.useInsertionEffect=function(F,ie){return re.current.useInsertionEffect(F,ie)},ht.useLayoutEffect=function(F,ie){return re.current.useLayoutEffect(F,ie)},ht.useMemo=function(F,ie){return re.current.useMemo(F,ie)},ht.useReducer=function(F,ie,Ue){return re.current.useReducer(F,ie,Ue)},ht.useRef=function(F){return re.current.useRef(F)},ht.useState=function(F){return re.current.useState(F)},ht.useSyncExternalStore=function(F,ie,Ue){return re.current.useSyncExternalStore(F,ie,Ue)},ht.useTransition=function(){return re.current.useTransition()},ht.version="18.3.1",ht}var Gg;function Ah(){return Gg||(Gg=1,If.exports=iM()),If.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function rM(){if(Wg)return ha;Wg=1;var n=Ah(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,g={},v=null,S=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)r.call(d,p)&&!l.hasOwnProperty(p)&&(g[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:c,key:v,ref:S,props:g,_owner:o.current}}return ha.Fragment=t,ha.jsx=u,ha.jsxs=u,ha}var Xg;function sM(){return Xg||(Xg=1,Df.exports=rM()),Df.exports}var xe=sM(),Le=Ah();const oM=p_(Le);var Ql={},Uf={exports:{}},kn={},Nf={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function aM(){return jg||(jg=1,(function(n){function e(z,ue){var se=z.length;z.push(ue);e:for(;0<se;){var F=se-1>>>1,ie=z[F];if(0<o(ie,ue))z[F]=ue,z[se]=ie,se=F;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ue=z[0],se=z.pop();if(se!==ue){z[0]=se;e:for(var F=0,ie=z.length,Ue=ie>>>1;F<Ue;){var K=2*(F+1)-1,fe=z[K],Ee=K+1,_e=z[Ee];if(0>o(fe,se))Ee<ie&&0>o(_e,fe)?(z[F]=_e,z[Ee]=se,F=Ee):(z[F]=fe,z[K]=se,F=K);else if(Ee<ie&&0>o(_e,se))z[F]=_e,z[Ee]=se,F=Ee;else break e}}return ue}function o(z,ue){var se=z.sortIndex-ue.sortIndex;return se!==0?se:z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,g=null,v=3,S=!1,M=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var ue=t(h);ue!==null;){if(ue.callback===null)r(h);else if(ue.startTime<=z)r(h),ue.sortIndex=ue.expirationTime,e(d,ue);else break;ue=t(h)}}function A(z){if(E=!1,P(z),!M)if(t(d)!==null)M=!0,ae(k);else{var ue=t(h);ue!==null&&re(A,ue.startTime-z)}}function k(z,ue){M=!1,E&&(E=!1,y(O),O=-1),S=!0;var se=v;try{for(P(ue),g=t(d);g!==null&&(!(g.expirationTime>ue)||z&&!V());){var F=g.callback;if(typeof F=="function"){g.callback=null,v=g.priorityLevel;var ie=F(g.expirationTime<=ue);ue=n.unstable_now(),typeof ie=="function"?g.callback=ie:g===t(d)&&r(d),P(ue)}else r(d);g=t(d)}if(g!==null)var Ue=!0;else{var K=t(h);K!==null&&re(A,K.startTime-ue),Ue=!1}return Ue}finally{g=null,v=se,S=!1}}var U=!1,N=null,O=-1,b=5,R=-1;function V(){return!(n.unstable_now()-R<b)}function le(){if(N!==null){var z=n.unstable_now();R=z;var ue=!0;try{ue=N(!0,z)}finally{ue?Z():(U=!1,N=null)}}else U=!1}var Z;if(typeof L=="function")Z=function(){L(le)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ce=te.port2;te.port1.onmessage=le,Z=function(){ce.postMessage(null)}}else Z=function(){x(le,0)};function ae(z){N=z,U||(U=!0,Z())}function re(z,ue){O=x(function(){z(n.unstable_now())},ue)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(z){z.callback=null},n.unstable_continueExecution=function(){M||S||(M=!0,ae(k))},n.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(z){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var se=v;v=ue;try{return z()}finally{v=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(z,ue){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var se=v;v=z;try{return ue()}finally{v=se}},n.unstable_scheduleCallback=function(z,ue,se){var F=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=se+ie,z={id:p++,callback:ue,priorityLevel:z,startTime:se,expirationTime:ie,sortIndex:-1},se>F?(z.sortIndex=se,e(h,z),t(d)===null&&z===t(h)&&(E?(y(O),O=-1):E=!0,re(A,se-F))):(z.sortIndex=ie,e(d,z),M||S||(M=!0,ae(k))),z},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(z){var ue=v;return function(){var se=v;v=ue;try{return z.apply(this,arguments)}finally{v=se}}}})(Ff)),Ff}var Yg;function lM(){return Yg||(Yg=1,Nf.exports=aM()),Nf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function uM(){if(qg)return kn;qg=1;var n=Ah(),e=lM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(i){return d.call(g,i)?!0:d.call(p,i)?!1:h.test(i)?g[i]=!0:(p[i]=!0,!1)}function S(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,f){if(s===null||typeof s>"u"||S(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,a,f,m,_,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,L);x[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,L);x[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,L);x[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,a,f){var m=x.hasOwnProperty(s)?x[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,m,f)&&(a=null),f||m===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):m.mustUseProperty?i[m.propertyName]=a===null?m.type===3?!1:"":a:(s=m.attributeName,f=m.attributeNamespace,a===null?i.removeAttribute(s):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var A=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),U=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),z=Symbol.iterator;function ue(i){return i===null||typeof i!="object"?null:(i=z&&i[z]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,F;function ie(i){if(F===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+i}var Ue=!1;function K(i,s){if(!i||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(Q){var f=Q}Reflect.construct(i,[],s)}else{try{s.call()}catch(Q){f=Q}i.call(s.prototype)}else{try{throw Error()}catch(Q){f=Q}i()}}catch(Q){if(Q&&f&&typeof Q.stack=="string"){for(var m=Q.stack.split(`
`),_=f.stack.split(`
`),T=m.length-1,I=_.length-1;1<=T&&0<=I&&m[T]!==_[I];)I--;for(;1<=T&&0<=I;T--,I--)if(m[T]!==_[I]){if(T!==1||I!==1)do if(T--,I--,0>I||m[T]!==_[I]){var B=`
`+m[T].replace(" at new "," at ");return i.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",i.displayName)),B}while(1<=T&&0<=I);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?ie(i):""}function fe(i){switch(i.tag){case 5:return ie(i.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return i=K(i.type,!1),i;case 11:return i=K(i.type.render,!1),i;case 1:return i=K(i.type,!0),i;default:return""}}function Ee(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case U:return"Portal";case b:return"Profiler";case O:return"StrictMode";case Z:return"Suspense";case te:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case le:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ce:return s=i.displayName||null,s!==null?s:Ee(i.type)||"Memo";case ae:s=i._payload,i=i._init;try{return Ee(i(s))}catch{}}return null}function _e(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(s);case 8:return s===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ae(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ne(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Qe(i){var s=Ne(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(T){f=""+T,_.call(this,T)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ct(i){i._valueTracker||(i._valueTracker=Qe(i))}function mt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Ne(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function Dt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function j(i,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Mn(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=Ae(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function pt(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function ft(i,s){pt(i,s);var a=Ae(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?wt(i,s.type,a):s.hasOwnProperty("defaultValue")&&wt(i,s.type,Ae(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function $e(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function wt(i,s,a){(s!=="number"||Dt(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var qe=Array.isArray;function D(i,s,a,f){if(i=i.options,s){s={};for(var m=0;m<a.length;m++)s["$"+a[m]]=!0;for(a=0;a<i.length;a++)m=s.hasOwnProperty("$"+i[a].value),i[a].selected!==m&&(i[a].selected=m),m&&f&&(i[a].defaultSelected=!0)}else{for(a=""+Ae(a),s=null,m=0;m<i.length;m++){if(i[m].value===a){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function w(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function $(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(qe(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Ae(a)}}function pe(i,s){var a=Ae(s.value),f=Ae(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function ge(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function de(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?de(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Ce,Fe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Ce.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ct(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(i){ke.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Se[s]=Se[i]})});function Je(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Se.hasOwnProperty(i)&&Se[i]?(""+s).trim():s+"px"}function tt(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,m=Je(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,m):i[a]=m}}var Be=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(i,s){if(s){if(Be[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function st(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function G(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Re=null,oe=null,he=null;function De(i){if(i=Qo(i)){if(typeof Re!="function")throw Error(t(280));var s=i.stateNode;s&&(s=hl(s),Re(i.stateNode,i.type,s))}}function be(i){oe?he?he.push(i):he=[i]:oe=i}function ot(){if(oe){var i=oe,s=he;if(he=oe=null,De(i),s)for(i=0;i<s.length;i++)De(s[i])}}function Nt(i,s){return i(s)}function Zt(){}var _t=!1;function Ln(i,s,a){if(_t)return i(s,a);_t=!0;try{return Nt(i,s,a)}finally{_t=!1,(oe!==null||he!==null)&&(Zt(),ot())}}function En(i,s){var a=i.stateNode;if(a===null)return null;var f=hl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var As=!1;if(c)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){As=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{As=!1}function Oi(i,s,a,f,m,_,T,I,B){var Q=Array.prototype.slice.call(arguments,3);try{s.apply(a,Q)}catch(ve){this.onError(ve)}}var ki=!1,jr=null,Yr=!1,cr=null,Ya={onError:function(i){ki=!0,jr=i}};function Cs(i,s,a,f,m,_,T,I,B){ki=!1,jr=null,Oi.apply(Ya,arguments)}function qa(i,s,a,f,m,_,T,I,B){if(Cs.apply(this,arguments),ki){if(ki){var Q=jr;ki=!1,jr=null}else throw Error(t(198));Yr||(Yr=!0,cr=Q)}}function Ti(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function $a(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Ka(i){if(Ti(i)!==i)throw Error(t(188))}function Ju(i){var s=i.alternate;if(!s){if(s=Ti(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var m=a.return;if(m===null)break;var _=m.alternate;if(_===null){if(f=m.return,f!==null){a=f;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===a)return Ka(m),i;if(_===f)return Ka(m),s;_=_.sibling}throw Error(t(188))}if(a.return!==f.return)a=m,f=_;else{for(var T=!1,I=m.child;I;){if(I===a){T=!0,a=m,f=_;break}if(I===f){T=!0,f=m,a=_;break}I=I.sibling}if(!T){for(I=_.child;I;){if(I===a){T=!0,a=_,f=m;break}if(I===f){T=!0,f=_,a=m;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function C(i){return i=Ju(i),i!==null?W(i):null}function W(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=W(i);if(s!==null)return s;i=i.sibling}return null}var J=e.unstable_scheduleCallback,ee=e.unstable_cancelCallback,X=e.unstable_shouldYield,we=e.unstable_requestPaint,Me=e.unstable_now,We=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,nt=e.unstable_UserBlockingPriority,rt=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,vt=e.unstable_IdlePriority,Et=null,gt=null;function fn(i){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:St,Ye=Math.log,ui=Math.LN2;function St(i){return i>>>=0,i===0?32:31-(Ye(i)/ui|0)|0}var dn=64,ci=4194304;function Qt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function wi(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,m=i.suspendedLanes,_=i.pingedLanes,T=a&268435455;if(T!==0){var I=T&~m;I!==0?f=Qt(I):(_&=T,_!==0&&(f=Qt(_)))}else T=a&~m,T!==0?f=Qt(T):_!==0&&(f=Qt(_));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,_=s&-s,m>=_||m===16&&(_&4194240)!==0))return s;if((f&4)!==0&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-at(s),m=1<<a,f|=i[a],s&=~m;return f}function bt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kn(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,_=i.pendingLanes;0<_;){var T=31-at(_),I=1<<T,B=m[T];B===-1?((I&a)===0||(I&f)!==0)&&(m[T]=bt(I,s)):B<=s&&(i.expiredLanes|=I),_&=~I}}function Bi(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Tn(){var i=dn;return dn<<=1,(dn&4194240)===0&&(dn=64),i}function Zn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function Dn(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-at(s),i[s]=a}function Za(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var m=31-at(a),_=1<<m;s[m]=0,f[m]=-1,i[m]=-1,a&=~_}}function ec(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-at(a),m=1<<f;m&s|i[f]&s&&(i[f]|=s),a&=~m}}var At=0;function xp(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Sp,tc,Mp,Ep,Tp,nc=!1,Qa=[],fr=null,dr=null,hr=null,Fo=new Map,Oo=new Map,pr=[],wx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wp(i,s){switch(i){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Fo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(s.pointerId)}}function ko(i,s,a,f,m,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:_,targetContainers:[m]},s!==null&&(s=Qo(s),s!==null&&tc(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function Ax(i,s,a,f,m){switch(s){case"focusin":return fr=ko(fr,i,s,a,f,m),!0;case"dragenter":return dr=ko(dr,i,s,a,f,m),!0;case"mouseover":return hr=ko(hr,i,s,a,f,m),!0;case"pointerover":var _=m.pointerId;return Fo.set(_,ko(Fo.get(_)||null,i,s,a,f,m)),!0;case"gotpointercapture":return _=m.pointerId,Oo.set(_,ko(Oo.get(_)||null,i,s,a,f,m)),!0}return!1}function Ap(i){var s=qr(i.target);if(s!==null){var a=Ti(s);if(a!==null){if(s=a.tag,s===13){if(s=$a(a),s!==null){i.blockedOn=s,Tp(i.priority,function(){Mp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Ja(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=rc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);Tt=f,a.target.dispatchEvent(f),Tt=null}else return s=Qo(a),s!==null&&tc(s),i.blockedOn=a,!1;s.shift()}return!0}function Cp(i,s,a){Ja(i)&&a.delete(s)}function Cx(){nc=!1,fr!==null&&Ja(fr)&&(fr=null),dr!==null&&Ja(dr)&&(dr=null),hr!==null&&Ja(hr)&&(hr=null),Fo.forEach(Cp),Oo.forEach(Cp)}function Bo(i,s){i.blockedOn===s&&(i.blockedOn=null,nc||(nc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cx)))}function zo(i){function s(m){return Bo(m,i)}if(0<Qa.length){Bo(Qa[0],i);for(var a=1;a<Qa.length;a++){var f=Qa[a];f.blockedOn===i&&(f.blockedOn=null)}}for(fr!==null&&Bo(fr,i),dr!==null&&Bo(dr,i),hr!==null&&Bo(hr,i),Fo.forEach(s),Oo.forEach(s),a=0;a<pr.length;a++)f=pr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)Ap(a),a.blockedOn===null&&pr.shift()}var Rs=A.ReactCurrentBatchConfig,el=!0;function Rx(i,s,a,f){var m=At,_=Rs.transition;Rs.transition=null;try{At=1,ic(i,s,a,f)}finally{At=m,Rs.transition=_}}function Px(i,s,a,f){var m=At,_=Rs.transition;Rs.transition=null;try{At=4,ic(i,s,a,f)}finally{At=m,Rs.transition=_}}function ic(i,s,a,f){if(el){var m=rc(i,s,a,f);if(m===null)Sc(i,s,f,tl,a),wp(i,f);else if(Ax(m,i,s,a,f))f.stopPropagation();else if(wp(i,f),s&4&&-1<wx.indexOf(i)){for(;m!==null;){var _=Qo(m);if(_!==null&&Sp(_),_=rc(i,s,a,f),_===null&&Sc(i,s,f,tl,a),_===m)break;m=_}m!==null&&f.stopPropagation()}else Sc(i,s,f,null,a)}}var tl=null;function rc(i,s,a,f){if(tl=null,i=G(f),i=qr(i),i!==null)if(s=Ti(i),s===null)i=null;else if(a=s.tag,a===13){if(i=$a(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return tl=i,null}function Rp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(We()){case Ve:return 1;case nt:return 4;case rt:case Xe:return 16;case vt:return 536870912;default:return 16}default:return 16}}var mr=null,sc=null,nl=null;function Pp(){if(nl)return nl;var i,s=sc,a=s.length,f,m="value"in mr?mr.value:mr.textContent,_=m.length;for(i=0;i<a&&s[i]===m[i];i++);var T=a-i;for(f=1;f<=T&&s[a-f]===m[_-f];f++);return nl=m.slice(i,1<f?1-f:void 0)}function il(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function rl(){return!0}function bp(){return!1}function zn(i){function s(a,f,m,_,T){this._reactName=a,this._targetInst=m,this.type=f,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(a=i[I],this[I]=a?a(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?rl:bp,this.isPropagationStopped=bp,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),s}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=zn(Ps),Vo=se({},Ps,{view:0,detail:0}),bx=zn(Vo),ac,lc,Ho,sl=se({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ho&&(Ho&&i.type==="mousemove"?(ac=i.screenX-Ho.screenX,lc=i.screenY-Ho.screenY):lc=ac=0,Ho=i),ac)},movementY:function(i){return"movementY"in i?i.movementY:lc}}),Lp=zn(sl),Lx=se({},sl,{dataTransfer:0}),Dx=zn(Lx),Ix=se({},Vo,{relatedTarget:0}),uc=zn(Ix),Ux=se({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Nx=zn(Ux),Fx=se({},Ps,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Ox=zn(Fx),kx=se({},Ps,{data:0}),Dp=zn(kx),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hx(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Vx[i])?!!s[i]:!1}function cc(){return Hx}var Gx=se({},Vo,{key:function(i){if(i.key){var s=Bx[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=il(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?zx[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(i){return i.type==="keypress"?il(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?il(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Wx=zn(Gx),Xx=se({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=zn(Xx),jx=se({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),Yx=zn(jx),qx=se({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),$x=zn(qx),Kx=se({},sl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Zx=zn(Kx),Qx=[9,13,27,32],fc=c&&"CompositionEvent"in window,Go=null;c&&"documentMode"in document&&(Go=document.documentMode);var Jx=c&&"TextEvent"in window&&!Go,Up=c&&(!fc||Go&&8<Go&&11>=Go),Np=" ",Fp=!1;function Op(i,s){switch(i){case"keyup":return Qx.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var bs=!1;function eS(i,s){switch(i){case"compositionend":return kp(s);case"keypress":return s.which!==32?null:(Fp=!0,Np);case"textInput":return i=s.data,i===Np&&Fp?null:i;default:return null}}function tS(i,s){if(bs)return i==="compositionend"||!fc&&Op(i,s)?(i=Pp(),nl=sc=mr=null,bs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Up&&s.locale!=="ko"?null:s.data;default:return null}}var nS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!nS[i.type]:s==="textarea"}function zp(i,s,a,f){be(f),s=cl(s,"onChange"),0<s.length&&(a=new oc("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var Wo=null,Xo=null;function iS(i){rm(i,0)}function ol(i){var s=Ns(i);if(mt(s))return i}function rS(i,s){if(i==="change")return s}var Vp=!1;if(c){var dc;if(c){var hc="oninput"in document;if(!hc){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),hc=typeof Hp.oninput=="function"}dc=hc}else dc=!1;Vp=dc&&(!document.documentMode||9<document.documentMode)}function Gp(){Wo&&(Wo.detachEvent("onpropertychange",Wp),Xo=Wo=null)}function Wp(i){if(i.propertyName==="value"&&ol(Xo)){var s=[];zp(s,Xo,i,G(i)),Ln(iS,s)}}function sS(i,s,a){i==="focusin"?(Gp(),Wo=s,Xo=a,Wo.attachEvent("onpropertychange",Wp)):i==="focusout"&&Gp()}function oS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ol(Xo)}function aS(i,s){if(i==="click")return ol(s)}function lS(i,s){if(i==="input"||i==="change")return ol(s)}function uS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var fi=typeof Object.is=="function"?Object.is:uS;function jo(i,s){if(fi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var m=a[f];if(!d.call(s,m)||!fi(i[m],s[m]))return!1}return!0}function Xp(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function jp(i,s){var a=Xp(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Xp(a)}}function Yp(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Yp(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function qp(){for(var i=window,s=Dt();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=Dt(i.document)}return s}function pc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function cS(i){var s=qp(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&Yp(a.ownerDocument.documentElement,a)){if(f!==null&&pc(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=a.textContent.length,_=Math.min(f.start,m);f=f.end===void 0?_:Math.min(f.end,m),!i.extend&&_>f&&(m=f,f=_,_=m),m=jp(a,_);var T=jp(a,f);m&&T&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),_>f?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var fS=c&&"documentMode"in document&&11>=document.documentMode,Ls=null,mc=null,Yo=null,gc=!1;function $p(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||Ls==null||Ls!==Dt(f)||(f=Ls,"selectionStart"in f&&pc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Yo&&jo(Yo,f)||(Yo=f,f=cl(mc,"onSelect"),0<f.length&&(s=new oc("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Ls)))}function al(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Ds={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},vc={},Kp={};c&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function ll(i){if(vc[i])return vc[i];if(!Ds[i])return i;var s=Ds[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in Kp)return vc[i]=s[a];return i}var Zp=ll("animationend"),Qp=ll("animationiteration"),Jp=ll("animationstart"),em=ll("transitionend"),tm=new Map,nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(i,s){tm.set(i,s),l(s,[i])}for(var _c=0;_c<nm.length;_c++){var yc=nm[_c],dS=yc.toLowerCase(),hS=yc[0].toUpperCase()+yc.slice(1);gr(dS,"on"+hS)}gr(Zp,"onAnimationEnd"),gr(Qp,"onAnimationIteration"),gr(Jp,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(em,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function im(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,qa(f,s,void 0,i),i.currentTarget=null}function rm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],m=f.event;f=f.listeners;e:{var _=void 0;if(s)for(var T=f.length-1;0<=T;T--){var I=f[T],B=I.instance,Q=I.currentTarget;if(I=I.listener,B!==_&&m.isPropagationStopped())break e;im(m,I,Q),_=B}else for(T=0;T<f.length;T++){if(I=f[T],B=I.instance,Q=I.currentTarget,I=I.listener,B!==_&&m.isPropagationStopped())break e;im(m,I,Q),_=B}}}if(Yr)throw i=cr,Yr=!1,cr=null,i}function Ft(i,s){var a=s[Cc];a===void 0&&(a=s[Cc]=new Set);var f=i+"__bubble";a.has(f)||(sm(s,i,2,!1),a.add(f))}function xc(i,s,a){var f=0;s&&(f|=4),sm(a,i,f,s)}var ul="_reactListening"+Math.random().toString(36).slice(2);function $o(i){if(!i[ul]){i[ul]=!0,r.forEach(function(a){a!=="selectionchange"&&(pS.has(a)||xc(a,!1,i),xc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[ul]||(s[ul]=!0,xc("selectionchange",!1,s))}}function sm(i,s,a,f){switch(Rp(s)){case 1:var m=Rx;break;case 4:m=Px;break;default:m=ic}a=m.bind(null,s,a,i),m=void 0,!As||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,a,{capture:!0,passive:m}):i.addEventListener(s,a,!0):m!==void 0?i.addEventListener(s,a,{passive:m}):i.addEventListener(s,a,!1)}function Sc(i,s,a,f,m){var _=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var I=f.stateNode.containerInfo;if(I===m||I.nodeType===8&&I.parentNode===m)break;if(T===4)for(T=f.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===m||B.nodeType===8&&B.parentNode===m))return;T=T.return}for(;I!==null;){if(T=qr(I),T===null)return;if(B=T.tag,B===5||B===6){f=_=T;continue e}I=I.parentNode}}f=f.return}Ln(function(){var Q=_,ve=G(a),ye=[];e:{var me=tm.get(i);if(me!==void 0){var Ie=oc,ze=i;switch(i){case"keypress":if(il(a)===0)break e;case"keydown":case"keyup":Ie=Wx;break;case"focusin":ze="focus",Ie=uc;break;case"focusout":ze="blur",Ie=uc;break;case"beforeblur":case"afterblur":Ie=uc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=Dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Yx;break;case Zp:case Qp:case Jp:Ie=Nx;break;case em:Ie=$x;break;case"scroll":Ie=bx;break;case"wheel":Ie=Zx;break;case"copy":case"cut":case"paste":Ie=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Ip}var He=(s&4)!==0,Xt=!He&&i==="scroll",Y=He?me!==null?me+"Capture":null:me;He=[];for(var H=Q,q;H!==null;){q=H;var Te=q.stateNode;if(q.tag===5&&Te!==null&&(q=Te,Y!==null&&(Te=En(H,Y),Te!=null&&He.push(Ko(H,Te,q)))),Xt)break;H=H.return}0<He.length&&(me=new Ie(me,ze,null,a,ve),ye.push({event:me,listeners:He}))}}if((s&7)===0){e:{if(me=i==="mouseover"||i==="pointerover",Ie=i==="mouseout"||i==="pointerout",me&&a!==Tt&&(ze=a.relatedTarget||a.fromElement)&&(qr(ze)||ze[zi]))break e;if((Ie||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(ze=a.relatedTarget||a.toElement,Ie=Q,ze=ze?qr(ze):null,ze!==null&&(Xt=Ti(ze),ze!==Xt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=Q),Ie!==ze)){if(He=Lp,Te="onMouseLeave",Y="onMouseEnter",H="mouse",(i==="pointerout"||i==="pointerover")&&(He=Ip,Te="onPointerLeave",Y="onPointerEnter",H="pointer"),Xt=Ie==null?me:Ns(Ie),q=ze==null?me:Ns(ze),me=new He(Te,H+"leave",Ie,a,ve),me.target=Xt,me.relatedTarget=q,Te=null,qr(ve)===Q&&(He=new He(Y,H+"enter",ze,a,ve),He.target=q,He.relatedTarget=Xt,Te=He),Xt=Te,Ie&&ze)t:{for(He=Ie,Y=ze,H=0,q=He;q;q=Is(q))H++;for(q=0,Te=Y;Te;Te=Is(Te))q++;for(;0<H-q;)He=Is(He),H--;for(;0<q-H;)Y=Is(Y),q--;for(;H--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=Is(He),Y=Is(Y)}He=null}else He=null;Ie!==null&&om(ye,me,Ie,He,!1),ze!==null&&Xt!==null&&om(ye,Xt,ze,He,!0)}}e:{if(me=Q?Ns(Q):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var je=rS;else if(Bp(me))if(Vp)je=lS;else{je=oS;var Ke=sS}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(je=aS);if(je&&(je=je(i,Q))){zp(ye,je,a,ve);break e}Ke&&Ke(i,me,Q),i==="focusout"&&(Ke=me._wrapperState)&&Ke.controlled&&me.type==="number"&&wt(me,"number",me.value)}switch(Ke=Q?Ns(Q):window,i){case"focusin":(Bp(Ke)||Ke.contentEditable==="true")&&(Ls=Ke,mc=Q,Yo=null);break;case"focusout":Yo=mc=Ls=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,$p(ye,a,ve);break;case"selectionchange":if(fS)break;case"keydown":case"keyup":$p(ye,a,ve)}var Ze;if(fc)e:{switch(i){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else bs?Op(i,a)&&(it="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(it="onCompositionStart");it&&(Up&&a.locale!=="ko"&&(bs||it!=="onCompositionStart"?it==="onCompositionEnd"&&bs&&(Ze=Pp()):(mr=ve,sc="value"in mr?mr.value:mr.textContent,bs=!0)),Ke=cl(Q,it),0<Ke.length&&(it=new Dp(it,i,null,a,ve),ye.push({event:it,listeners:Ke}),Ze?it.data=Ze:(Ze=kp(a),Ze!==null&&(it.data=Ze)))),(Ze=Jx?eS(i,a):tS(i,a))&&(Q=cl(Q,"onBeforeInput"),0<Q.length&&(ve=new Dp("onBeforeInput","beforeinput",null,a,ve),ye.push({event:ve,listeners:Q}),ve.data=Ze))}rm(ye,s)})}function Ko(i,s,a){return{instance:i,listener:s,currentTarget:a}}function cl(i,s){for(var a=s+"Capture",f=[];i!==null;){var m=i,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=En(i,a),_!=null&&f.unshift(Ko(i,_,m)),_=En(i,s),_!=null&&f.push(Ko(i,_,m))),i=i.return}return f}function Is(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function om(i,s,a,f,m){for(var _=s._reactName,T=[];a!==null&&a!==f;){var I=a,B=I.alternate,Q=I.stateNode;if(B!==null&&B===f)break;I.tag===5&&Q!==null&&(I=Q,m?(B=En(a,_),B!=null&&T.unshift(Ko(a,B,I))):m||(B=En(a,_),B!=null&&T.push(Ko(a,B,I)))),a=a.return}T.length!==0&&i.push({event:s,listeners:T})}var mS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function am(i){return(typeof i=="string"?i:""+i).replace(mS,`
`).replace(gS,"")}function fl(i,s,a){if(s=am(s),am(i)!==s&&a)throw Error(t(425))}function dl(){}var Mc=null,Ec=null;function Tc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(i){return lm.resolve(null).then(i).catch(yS)}:wc;function yS(i){setTimeout(function(){throw i})}function Ac(i,s){var a=s,f=0;do{var m=a.nextSibling;if(i.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(f===0){i.removeChild(m),zo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=m}while(a);zo(s)}function vr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function um(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Ai="__reactFiber$"+Us,Zo="__reactProps$"+Us,zi="__reactContainer$"+Us,Cc="__reactEvents$"+Us,xS="__reactListeners$"+Us,SS="__reactHandles$"+Us;function qr(i){var s=i[Ai];if(s)return s;for(var a=i.parentNode;a;){if(s=a[zi]||a[Ai]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=um(i);i!==null;){if(a=i[Ai])return a;i=um(i)}return s}i=a,a=i.parentNode}return null}function Qo(i){return i=i[Ai]||i[zi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ns(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function hl(i){return i[Zo]||null}var Rc=[],Fs=-1;function _r(i){return{current:i}}function Ot(i){0>Fs||(i.current=Rc[Fs],Rc[Fs]=null,Fs--)}function It(i,s){Fs++,Rc[Fs]=i.current,i.current=s}var yr={},hn=_r(yr),In=_r(!1),$r=yr;function Os(i,s){var a=i.type.contextTypes;if(!a)return yr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in a)m[_]=s[_];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Un(i){return i=i.childContextTypes,i!=null}function pl(){Ot(In),Ot(hn)}function cm(i,s,a){if(hn.current!==yr)throw Error(t(168));It(hn,s),It(In,a)}function fm(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,_e(i)||"Unknown",m));return se({},a,f)}function ml(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||yr,$r=hn.current,It(hn,i),It(In,In.current),!0}function dm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=fm(i,s,$r),f.__reactInternalMemoizedMergedChildContext=i,Ot(In),Ot(hn),It(hn,i)):Ot(In),It(In,a)}var Vi=null,gl=!1,Pc=!1;function hm(i){Vi===null?Vi=[i]:Vi.push(i)}function MS(i){gl=!0,hm(i)}function xr(){if(!Pc&&Vi!==null){Pc=!0;var i=0,s=At;try{var a=Vi;for(At=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}Vi=null,gl=!1}catch(m){throw Vi!==null&&(Vi=Vi.slice(i+1)),J(Ve,xr),m}finally{At=s,Pc=!1}}return null}var ks=[],Bs=0,vl=null,_l=0,Qn=[],Jn=0,Kr=null,Hi=1,Gi="";function Zr(i,s){ks[Bs++]=_l,ks[Bs++]=vl,vl=i,_l=s}function pm(i,s,a){Qn[Jn++]=Hi,Qn[Jn++]=Gi,Qn[Jn++]=Kr,Kr=i;var f=Hi;i=Gi;var m=32-at(f)-1;f&=~(1<<m),a+=1;var _=32-at(s)+m;if(30<_){var T=m-m%5;_=(f&(1<<T)-1).toString(32),f>>=T,m-=T,Hi=1<<32-at(s)+m|a<<m|f,Gi=_+i}else Hi=1<<_|a<<m|f,Gi=i}function bc(i){i.return!==null&&(Zr(i,1),pm(i,1,0))}function Lc(i){for(;i===vl;)vl=ks[--Bs],ks[Bs]=null,_l=ks[--Bs],ks[Bs]=null;for(;i===Kr;)Kr=Qn[--Jn],Qn[Jn]=null,Gi=Qn[--Jn],Qn[Jn]=null,Hi=Qn[--Jn],Qn[Jn]=null}var Vn=null,Hn=null,Bt=!1,di=null;function mm(i,s){var a=ii(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function gm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Vn=i,Hn=vr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Vn=i,Hn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Kr!==null?{id:Hi,overflow:Gi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ii(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Vn=i,Hn=null,!0):!1;default:return!1}}function Dc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ic(i){if(Bt){var s=Hn;if(s){var a=s;if(!gm(i,s)){if(Dc(i))throw Error(t(418));s=vr(a.nextSibling);var f=Vn;s&&gm(i,s)?mm(f,a):(i.flags=i.flags&-4097|2,Bt=!1,Vn=i)}}else{if(Dc(i))throw Error(t(418));i.flags=i.flags&-4097|2,Bt=!1,Vn=i}}}function vm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Vn=i}function yl(i){if(i!==Vn)return!1;if(!Bt)return vm(i),Bt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Tc(i.type,i.memoizedProps)),s&&(s=Hn)){if(Dc(i))throw _m(),Error(t(418));for(;s;)mm(i,s),s=vr(s.nextSibling)}if(vm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Hn=vr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Hn=null}}else Hn=Vn?vr(i.stateNode.nextSibling):null;return!0}function _m(){for(var i=Hn;i;)i=vr(i.nextSibling)}function zs(){Hn=Vn=null,Bt=!1}function Uc(i){di===null?di=[i]:di.push(i)}var ES=A.ReactCurrentBatchConfig;function Jo(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var m=f,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(T){var I=m.refs;T===null?delete I[_]:I[_]=T},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function xl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function ym(i){var s=i._init;return s(i._payload)}function xm(i){function s(Y,H){if(i){var q=Y.deletions;q===null?(Y.deletions=[H],Y.flags|=16):q.push(H)}}function a(Y,H){if(!i)return null;for(;H!==null;)s(Y,H),H=H.sibling;return null}function f(Y,H){for(Y=new Map;H!==null;)H.key!==null?Y.set(H.key,H):Y.set(H.index,H),H=H.sibling;return Y}function m(Y,H){return Y=Rr(Y,H),Y.index=0,Y.sibling=null,Y}function _(Y,H,q){return Y.index=q,i?(q=Y.alternate,q!==null?(q=q.index,q<H?(Y.flags|=2,H):q):(Y.flags|=2,H)):(Y.flags|=1048576,H)}function T(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,H,q,Te){return H===null||H.tag!==6?(H=Af(q,Y.mode,Te),H.return=Y,H):(H=m(H,q),H.return=Y,H)}function B(Y,H,q,Te){var je=q.type;return je===N?ve(Y,H,q.props.children,Te,q.key):H!==null&&(H.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&ym(je)===H.type)?(Te=m(H,q.props),Te.ref=Jo(Y,H,q),Te.return=Y,Te):(Te=Wl(q.type,q.key,q.props,null,Y.mode,Te),Te.ref=Jo(Y,H,q),Te.return=Y,Te)}function Q(Y,H,q,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==q.containerInfo||H.stateNode.implementation!==q.implementation?(H=Cf(q,Y.mode,Te),H.return=Y,H):(H=m(H,q.children||[]),H.return=Y,H)}function ve(Y,H,q,Te,je){return H===null||H.tag!==7?(H=ss(q,Y.mode,Te,je),H.return=Y,H):(H=m(H,q),H.return=Y,H)}function ye(Y,H,q){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Af(""+H,Y.mode,q),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case k:return q=Wl(H.type,H.key,H.props,null,Y.mode,q),q.ref=Jo(Y,null,H),q.return=Y,q;case U:return H=Cf(H,Y.mode,q),H.return=Y,H;case ae:var Te=H._init;return ye(Y,Te(H._payload),q)}if(qe(H)||ue(H))return H=ss(H,Y.mode,q,null),H.return=Y,H;xl(Y,H)}return null}function me(Y,H,q,Te){var je=H!==null?H.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return je!==null?null:I(Y,H,""+q,Te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case k:return q.key===je?B(Y,H,q,Te):null;case U:return q.key===je?Q(Y,H,q,Te):null;case ae:return je=q._init,me(Y,H,je(q._payload),Te)}if(qe(q)||ue(q))return je!==null?null:ve(Y,H,q,Te,null);xl(Y,q)}return null}function Ie(Y,H,q,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get(q)||null,I(H,Y,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case k:return Y=Y.get(Te.key===null?q:Te.key)||null,B(H,Y,Te,je);case U:return Y=Y.get(Te.key===null?q:Te.key)||null,Q(H,Y,Te,je);case ae:var Ke=Te._init;return Ie(Y,H,q,Ke(Te._payload),je)}if(qe(Te)||ue(Te))return Y=Y.get(q)||null,ve(H,Y,Te,je,null);xl(H,Te)}return null}function ze(Y,H,q,Te){for(var je=null,Ke=null,Ze=H,it=H=0,on=null;Ze!==null&&it<q.length;it++){Ze.index>it?(on=Ze,Ze=null):on=Ze.sibling;var Mt=me(Y,Ze,q[it],Te);if(Mt===null){Ze===null&&(Ze=on);break}i&&Ze&&Mt.alternate===null&&s(Y,Ze),H=_(Mt,H,it),Ke===null?je=Mt:Ke.sibling=Mt,Ke=Mt,Ze=on}if(it===q.length)return a(Y,Ze),Bt&&Zr(Y,it),je;if(Ze===null){for(;it<q.length;it++)Ze=ye(Y,q[it],Te),Ze!==null&&(H=_(Ze,H,it),Ke===null?je=Ze:Ke.sibling=Ze,Ke=Ze);return Bt&&Zr(Y,it),je}for(Ze=f(Y,Ze);it<q.length;it++)on=Ie(Ze,Y,it,q[it],Te),on!==null&&(i&&on.alternate!==null&&Ze.delete(on.key===null?it:on.key),H=_(on,H,it),Ke===null?je=on:Ke.sibling=on,Ke=on);return i&&Ze.forEach(function(Pr){return s(Y,Pr)}),Bt&&Zr(Y,it),je}function He(Y,H,q,Te){var je=ue(q);if(typeof je!="function")throw Error(t(150));if(q=je.call(q),q==null)throw Error(t(151));for(var Ke=je=null,Ze=H,it=H=0,on=null,Mt=q.next();Ze!==null&&!Mt.done;it++,Mt=q.next()){Ze.index>it?(on=Ze,Ze=null):on=Ze.sibling;var Pr=me(Y,Ze,Mt.value,Te);if(Pr===null){Ze===null&&(Ze=on);break}i&&Ze&&Pr.alternate===null&&s(Y,Ze),H=_(Pr,H,it),Ke===null?je=Pr:Ke.sibling=Pr,Ke=Pr,Ze=on}if(Mt.done)return a(Y,Ze),Bt&&Zr(Y,it),je;if(Ze===null){for(;!Mt.done;it++,Mt=q.next())Mt=ye(Y,Mt.value,Te),Mt!==null&&(H=_(Mt,H,it),Ke===null?je=Mt:Ke.sibling=Mt,Ke=Mt);return Bt&&Zr(Y,it),je}for(Ze=f(Y,Ze);!Mt.done;it++,Mt=q.next())Mt=Ie(Ze,Y,it,Mt.value,Te),Mt!==null&&(i&&Mt.alternate!==null&&Ze.delete(Mt.key===null?it:Mt.key),H=_(Mt,H,it),Ke===null?je=Mt:Ke.sibling=Mt,Ke=Mt);return i&&Ze.forEach(function(nM){return s(Y,nM)}),Bt&&Zr(Y,it),je}function Xt(Y,H,q,Te){if(typeof q=="object"&&q!==null&&q.type===N&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case k:e:{for(var je=q.key,Ke=H;Ke!==null;){if(Ke.key===je){if(je=q.type,je===N){if(Ke.tag===7){a(Y,Ke.sibling),H=m(Ke,q.props.children),H.return=Y,Y=H;break e}}else if(Ke.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&ym(je)===Ke.type){a(Y,Ke.sibling),H=m(Ke,q.props),H.ref=Jo(Y,Ke,q),H.return=Y,Y=H;break e}a(Y,Ke);break}else s(Y,Ke);Ke=Ke.sibling}q.type===N?(H=ss(q.props.children,Y.mode,Te,q.key),H.return=Y,Y=H):(Te=Wl(q.type,q.key,q.props,null,Y.mode,Te),Te.ref=Jo(Y,H,q),Te.return=Y,Y=Te)}return T(Y);case U:e:{for(Ke=q.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===q.containerInfo&&H.stateNode.implementation===q.implementation){a(Y,H.sibling),H=m(H,q.children||[]),H.return=Y,Y=H;break e}else{a(Y,H);break}else s(Y,H);H=H.sibling}H=Cf(q,Y.mode,Te),H.return=Y,Y=H}return T(Y);case ae:return Ke=q._init,Xt(Y,H,Ke(q._payload),Te)}if(qe(q))return ze(Y,H,q,Te);if(ue(q))return He(Y,H,q,Te);xl(Y,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,H!==null&&H.tag===6?(a(Y,H.sibling),H=m(H,q),H.return=Y,Y=H):(a(Y,H),H=Af(q,Y.mode,Te),H.return=Y,Y=H),T(Y)):a(Y,H)}return Xt}var Vs=xm(!0),Sm=xm(!1),Sl=_r(null),Ml=null,Hs=null,Nc=null;function Fc(){Nc=Hs=Ml=null}function Oc(i){var s=Sl.current;Ot(Sl),i._currentValue=s}function kc(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function Gs(i,s){Ml=i,Nc=Hs=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Nn=!0),i.firstContext=null)}function ei(i){var s=i._currentValue;if(Nc!==i)if(i={context:i,memoizedValue:s,next:null},Hs===null){if(Ml===null)throw Error(t(308));Hs=i,Ml.dependencies={lanes:0,firstContext:i}}else Hs=Hs.next=i;return s}var Qr=null;function Bc(i){Qr===null?Qr=[i]:Qr.push(i)}function Mm(i,s,a,f){var m=s.interleaved;return m===null?(a.next=a,Bc(s)):(a.next=m.next,m.next=a),s.interleaved=a,Wi(i,f)}function Wi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Sr=!1;function zc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Em(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Xi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Mr(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(yt&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,Wi(i,a)}return m=f.interleaved,m===null?(s.next=s,Bc(f)):(s.next=m.next,m.next=s),f.interleaved=s,Wi(i,a)}function El(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,ec(i,a)}}function Tm(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var m=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?m=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?m=_=s:_=_.next=s}else m=_=s;a={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Tl(i,s,a,f){var m=i.updateQueue;Sr=!1;var _=m.firstBaseUpdate,T=m.lastBaseUpdate,I=m.shared.pending;if(I!==null){m.shared.pending=null;var B=I,Q=B.next;B.next=null,T===null?_=Q:T.next=Q,T=B;var ve=i.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==T&&(I===null?ve.firstBaseUpdate=Q:I.next=Q,ve.lastBaseUpdate=B))}if(_!==null){var ye=m.baseState;T=0,ve=Q=B=null,I=_;do{var me=I.lane,Ie=I.eventTime;if((f&me)===me){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=i,He=I;switch(me=s,Ie=a,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){ye=ze.call(Ie,ye,me);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,me=typeof ze=="function"?ze.call(Ie,ye,me):ze,me==null)break e;ye=se({},ye,me);break e;case 2:Sr=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,me=m.effects,me===null?m.effects=[I]:me.push(I))}else Ie={eventTime:Ie,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(Q=ve=Ie,B=ye):ve=ve.next=Ie,T|=me;if(I=I.next,I===null){if(I=m.shared.pending,I===null)break;me=I,I=me.next,me.next=null,m.lastBaseUpdate=me,m.shared.pending=null}}while(!0);if(ve===null&&(B=ye),m.baseState=B,m.firstBaseUpdate=Q,m.lastBaseUpdate=ve,s=m.shared.interleaved,s!==null){m=s;do T|=m.lane,m=m.next;while(m!==s)}else _===null&&(m.shared.lanes=0);ts|=T,i.lanes=T,i.memoizedState=ye}}function wm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=a,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ea={},Ci=_r(ea),ta=_r(ea),na=_r(ea);function Jr(i){if(i===ea)throw Error(t(174));return i}function Vc(i,s){switch(It(na,s),It(ta,i),It(Ci,ea),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ge(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Ge(s,i)}Ot(Ci),It(Ci,s)}function Ws(){Ot(Ci),Ot(ta),Ot(na)}function Am(i){Jr(na.current);var s=Jr(Ci.current),a=Ge(s,i.type);s!==a&&(It(ta,i),It(Ci,a))}function Hc(i){ta.current===i&&(Ot(Ci),Ot(ta))}var zt=_r(0);function wl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Gc=[];function Wc(){for(var i=0;i<Gc.length;i++)Gc[i]._workInProgressVersionPrimary=null;Gc.length=0}var Al=A.ReactCurrentDispatcher,Xc=A.ReactCurrentBatchConfig,es=0,Vt=null,Jt=null,rn=null,Cl=!1,ia=!1,ra=0,TS=0;function pn(){throw Error(t(321))}function jc(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!fi(i[a],s[a]))return!1;return!0}function Yc(i,s,a,f,m,_){if(es=_,Vt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Al.current=i===null||i.memoizedState===null?RS:PS,i=a(f,m),ia){_=0;do{if(ia=!1,ra=0,25<=_)throw Error(t(301));_+=1,rn=Jt=null,s.updateQueue=null,Al.current=bS,i=a(f,m)}while(ia)}if(Al.current=bl,s=Jt!==null&&Jt.next!==null,es=0,rn=Jt=Vt=null,Cl=!1,s)throw Error(t(300));return i}function qc(){var i=ra!==0;return ra=0,i}function Ri(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Vt.memoizedState=rn=i:rn=rn.next=i,rn}function ti(){if(Jt===null){var i=Vt.alternate;i=i!==null?i.memoizedState:null}else i=Jt.next;var s=rn===null?Vt.memoizedState:rn.next;if(s!==null)rn=s,Jt=i;else{if(i===null)throw Error(t(310));Jt=i,i={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},rn===null?Vt.memoizedState=rn=i:rn=rn.next=i}return rn}function sa(i,s){return typeof s=="function"?s(i):s}function $c(i){var s=ti(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=Jt,m=f.baseQueue,_=a.pending;if(_!==null){if(m!==null){var T=m.next;m.next=_.next,_.next=T}f.baseQueue=m=_,a.pending=null}if(m!==null){_=m.next,f=f.baseState;var I=T=null,B=null,Q=_;do{var ve=Q.lane;if((es&ve)===ve)B!==null&&(B=B.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),f=Q.hasEagerState?Q.eagerState:i(f,Q.action);else{var ye={lane:ve,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};B===null?(I=B=ye,T=f):B=B.next=ye,Vt.lanes|=ve,ts|=ve}Q=Q.next}while(Q!==null&&Q!==_);B===null?T=f:B.next=I,fi(f,s.memoizedState)||(Nn=!0),s.memoizedState=f,s.baseState=T,s.baseQueue=B,a.lastRenderedState=f}if(i=a.interleaved,i!==null){m=i;do _=m.lane,Vt.lanes|=_,ts|=_,m=m.next;while(m!==i)}else m===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Kc(i){var s=ti(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,m=a.pending,_=s.memoizedState;if(m!==null){a.pending=null;var T=m=m.next;do _=i(_,T.action),T=T.next;while(T!==m);fi(_,s.memoizedState)||(Nn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,f]}function Cm(){}function Rm(i,s){var a=Vt,f=ti(),m=s(),_=!fi(f.memoizedState,m);if(_&&(f.memoizedState=m,Nn=!0),f=f.queue,Zc(Lm.bind(null,a,f,i),[i]),f.getSnapshot!==s||_||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,oa(9,bm.bind(null,a,f,m,s),void 0,null),sn===null)throw Error(t(349));(es&30)!==0||Pm(a,s,m)}return m}function Pm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Vt.updateQueue,s===null?(s={lastEffect:null,stores:null},Vt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function bm(i,s,a,f){s.value=a,s.getSnapshot=f,Dm(s)&&Im(i)}function Lm(i,s,a){return a(function(){Dm(s)&&Im(i)})}function Dm(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!fi(i,a)}catch{return!0}}function Im(i){var s=Wi(i,1);s!==null&&gi(s,i,1,-1)}function Um(i){var s=Ri();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:i},s.queue=i,i=i.dispatch=CS.bind(null,Vt,i),[s.memoizedState,i]}function oa(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Vt.updateQueue,s===null?(s={lastEffect:null,stores:null},Vt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function Nm(){return ti().memoizedState}function Rl(i,s,a,f){var m=Ri();Vt.flags|=i,m.memoizedState=oa(1|s,a,void 0,f===void 0?null:f)}function Pl(i,s,a,f){var m=ti();f=f===void 0?null:f;var _=void 0;if(Jt!==null){var T=Jt.memoizedState;if(_=T.destroy,f!==null&&jc(f,T.deps)){m.memoizedState=oa(s,a,_,f);return}}Vt.flags|=i,m.memoizedState=oa(1|s,a,_,f)}function Fm(i,s){return Rl(8390656,8,i,s)}function Zc(i,s){return Pl(2048,8,i,s)}function Om(i,s){return Pl(4,2,i,s)}function km(i,s){return Pl(4,4,i,s)}function Bm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function zm(i,s,a){return a=a!=null?a.concat([i]):null,Pl(4,4,Bm.bind(null,s,i),a)}function Qc(){}function Vm(i,s){var a=ti();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&jc(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function Hm(i,s){var a=ti();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&jc(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function Gm(i,s,a){return(es&21)===0?(i.baseState&&(i.baseState=!1,Nn=!0),i.memoizedState=a):(fi(a,s)||(a=Tn(),Vt.lanes|=a,ts|=a,i.baseState=!0),s)}function wS(i,s){var a=At;At=a!==0&&4>a?a:4,i(!0);var f=Xc.transition;Xc.transition={};try{i(!1),s()}finally{At=a,Xc.transition=f}}function Wm(){return ti().memoizedState}function AS(i,s,a){var f=Ar(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},Xm(i))jm(s,a);else if(a=Mm(i,s,a,f),a!==null){var m=An();gi(a,i,f,m),Ym(a,s,f)}}function CS(i,s,a){var f=Ar(i),m={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xm(i))jm(s,m);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var T=s.lastRenderedState,I=_(T,a);if(m.hasEagerState=!0,m.eagerState=I,fi(I,T)){var B=s.interleaved;B===null?(m.next=m,Bc(s)):(m.next=B.next,B.next=m),s.interleaved=m;return}}catch{}finally{}a=Mm(i,s,m,f),a!==null&&(m=An(),gi(a,i,f,m),Ym(a,s,f))}}function Xm(i){var s=i.alternate;return i===Vt||s!==null&&s===Vt}function jm(i,s){ia=Cl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function Ym(i,s,a){if((a&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,ec(i,a)}}var bl={readContext:ei,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},RS={readContext:ei,useCallback:function(i,s){return Ri().memoizedState=[i,s===void 0?null:s],i},useContext:ei,useEffect:Fm,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Rl(4194308,4,Bm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Rl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Rl(4,2,i,s)},useMemo:function(i,s){var a=Ri();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Ri();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=AS.bind(null,Vt,i),[f.memoizedState,i]},useRef:function(i){var s=Ri();return i={current:i},s.memoizedState=i},useState:Um,useDebugValue:Qc,useDeferredValue:function(i){return Ri().memoizedState=i},useTransition:function(){var i=Um(!1),s=i[0];return i=wS.bind(null,i[1]),Ri().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Vt,m=Ri();if(Bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),sn===null)throw Error(t(349));(es&30)!==0||Pm(f,s,a)}m.memoizedState=a;var _={value:a,getSnapshot:s};return m.queue=_,Fm(Lm.bind(null,f,_,i),[i]),f.flags|=2048,oa(9,bm.bind(null,f,_,a,s),void 0,null),a},useId:function(){var i=Ri(),s=sn.identifierPrefix;if(Bt){var a=Gi,f=Hi;a=(f&~(1<<32-at(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=ra++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=TS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},PS={readContext:ei,useCallback:Vm,useContext:ei,useEffect:Zc,useImperativeHandle:zm,useInsertionEffect:Om,useLayoutEffect:km,useMemo:Hm,useReducer:$c,useRef:Nm,useState:function(){return $c(sa)},useDebugValue:Qc,useDeferredValue:function(i){var s=ti();return Gm(s,Jt.memoizedState,i)},useTransition:function(){var i=$c(sa)[0],s=ti().memoizedState;return[i,s]},useMutableSource:Cm,useSyncExternalStore:Rm,useId:Wm,unstable_isNewReconciler:!1},bS={readContext:ei,useCallback:Vm,useContext:ei,useEffect:Zc,useImperativeHandle:zm,useInsertionEffect:Om,useLayoutEffect:km,useMemo:Hm,useReducer:Kc,useRef:Nm,useState:function(){return Kc(sa)},useDebugValue:Qc,useDeferredValue:function(i){var s=ti();return Jt===null?s.memoizedState=i:Gm(s,Jt.memoizedState,i)},useTransition:function(){var i=Kc(sa)[0],s=ti().memoizedState;return[i,s]},useMutableSource:Cm,useSyncExternalStore:Rm,useId:Wm,unstable_isNewReconciler:!1};function hi(i,s){if(i&&i.defaultProps){s=se({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function Jc(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:se({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Ll={isMounted:function(i){return(i=i._reactInternals)?Ti(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=An(),m=Ar(i),_=Xi(f,m);_.payload=s,a!=null&&(_.callback=a),s=Mr(i,_,m),s!==null&&(gi(s,i,m,f),El(s,i,m))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=An(),m=Ar(i),_=Xi(f,m);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=Mr(i,_,m),s!==null&&(gi(s,i,m,f),El(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=An(),f=Ar(i),m=Xi(a,f);m.tag=2,s!=null&&(m.callback=s),s=Mr(i,m,f),s!==null&&(gi(s,i,f,a),El(s,i,f))}};function qm(i,s,a,f,m,_,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,_,T):s.prototype&&s.prototype.isPureReactComponent?!jo(a,f)||!jo(m,_):!0}function $m(i,s,a){var f=!1,m=yr,_=s.contextType;return typeof _=="object"&&_!==null?_=ei(_):(m=Un(s)?$r:hn.current,f=s.contextTypes,_=(f=f!=null)?Os(i,m):yr),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ll,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=_),s}function Km(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Ll.enqueueReplaceState(s,s.state,null)}function ef(i,s,a,f){var m=i.stateNode;m.props=a,m.state=i.memoizedState,m.refs={},zc(i);var _=s.contextType;typeof _=="object"&&_!==null?m.context=ei(_):(_=Un(s)?$r:hn.current,m.context=Os(i,_)),m.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Jc(i,s,_,a),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Ll.enqueueReplaceState(m,m.state,null),Tl(i,a,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function Xs(i,s){try{var a="",f=s;do a+=fe(f),f=f.return;while(f);var m=a}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:m,digest:null}}function tf(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function nf(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var LS=typeof WeakMap=="function"?WeakMap:Map;function Zm(i,s,a){a=Xi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){kl||(kl=!0,_f=f),nf(i,s)},a}function Qm(i,s,a){a=Xi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;a.payload=function(){return f(m)},a.callback=function(){nf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){nf(i,s),typeof f!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),a}function Jm(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new LS;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(a)||(m.add(a),i=XS.bind(null,i,s,a),s.then(i,i))}function eg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function tg(i,s,a,f,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Xi(-1,1),s.tag=2,Mr(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var DS=A.ReactCurrentOwner,Nn=!1;function wn(i,s,a,f){s.child=i===null?Sm(s,null,a,f):Vs(s,i.child,a,f)}function ng(i,s,a,f,m){a=a.render;var _=s.ref;return Gs(s,m),f=Yc(i,s,a,f,_,m),a=qc(),i!==null&&!Nn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,ji(i,s,m)):(Bt&&a&&bc(s),s.flags|=1,wn(i,s,f,m),s.child)}function ig(i,s,a,f,m){if(i===null){var _=a.type;return typeof _=="function"&&!wf(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,rg(i,s,_,f,m)):(i=Wl(a.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&m)===0){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:jo,a(T,f)&&i.ref===s.ref)return ji(i,s,m)}return s.flags|=1,i=Rr(_,f),i.ref=s.ref,i.return=s,s.child=i}function rg(i,s,a,f,m){if(i!==null){var _=i.memoizedProps;if(jo(_,f)&&i.ref===s.ref)if(Nn=!1,s.pendingProps=f=_,(i.lanes&m)!==0)(i.flags&131072)!==0&&(Nn=!0);else return s.lanes=i.lanes,ji(i,s,m)}return rf(i,s,a,f,m)}function sg(i,s,a){var f=s.pendingProps,m=f.children,_=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ys,Gn),Gn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,It(Ys,Gn),Gn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=_!==null?_.baseLanes:a,It(Ys,Gn),Gn|=f}else _!==null?(f=_.baseLanes|a,s.memoizedState=null):f=a,It(Ys,Gn),Gn|=f;return wn(i,s,m,a),s.child}function og(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function rf(i,s,a,f,m){var _=Un(a)?$r:hn.current;return _=Os(s,_),Gs(s,m),a=Yc(i,s,a,f,_,m),f=qc(),i!==null&&!Nn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,ji(i,s,m)):(Bt&&f&&bc(s),s.flags|=1,wn(i,s,a,m),s.child)}function ag(i,s,a,f,m){if(Un(a)){var _=!0;ml(s)}else _=!1;if(Gs(s,m),s.stateNode===null)Il(i,s),$m(s,a,f),ef(s,a,f,m),f=!0;else if(i===null){var T=s.stateNode,I=s.memoizedProps;T.props=I;var B=T.context,Q=a.contextType;typeof Q=="object"&&Q!==null?Q=ei(Q):(Q=Un(a)?$r:hn.current,Q=Os(s,Q));var ve=a.getDerivedStateFromProps,ye=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==f||B!==Q)&&Km(s,T,f,Q),Sr=!1;var me=s.memoizedState;T.state=me,Tl(s,f,T,m),B=s.memoizedState,I!==f||me!==B||In.current||Sr?(typeof ve=="function"&&(Jc(s,a,ve,f),B=s.memoizedState),(I=Sr||qm(s,a,I,f,me,B,Q))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=B),T.props=f,T.state=B,T.context=Q,f=I):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{T=s.stateNode,Em(i,s),I=s.memoizedProps,Q=s.type===s.elementType?I:hi(s.type,I),T.props=Q,ye=s.pendingProps,me=T.context,B=a.contextType,typeof B=="object"&&B!==null?B=ei(B):(B=Un(a)?$r:hn.current,B=Os(s,B));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==ye||me!==B)&&Km(s,T,f,B),Sr=!1,me=s.memoizedState,T.state=me,Tl(s,f,T,m);var ze=s.memoizedState;I!==ye||me!==ze||In.current||Sr?(typeof Ie=="function"&&(Jc(s,a,Ie,f),ze=s.memoizedState),(Q=Sr||qm(s,a,Q,f,me,ze,B)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,ze,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,ze,B)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=ze),T.props=f,T.state=ze,T.context=B,f=Q):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),f=!1)}return sf(i,s,a,f,_,m)}function sf(i,s,a,f,m,_){og(i,s);var T=(s.flags&128)!==0;if(!f&&!T)return m&&dm(s,a,!1),ji(i,s,_);f=s.stateNode,DS.current=s;var I=T&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&T?(s.child=Vs(s,i.child,null,_),s.child=Vs(s,null,I,_)):wn(i,s,I,_),s.memoizedState=f.state,m&&dm(s,a,!0),s.child}function lg(i){var s=i.stateNode;s.pendingContext?cm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&cm(i,s.context,!1),Vc(i,s.containerInfo)}function ug(i,s,a,f,m){return zs(),Uc(m),s.flags|=256,wn(i,s,a,f),s.child}var of={dehydrated:null,treeContext:null,retryLane:0};function af(i){return{baseLanes:i,cachePool:null,transitions:null}}function cg(i,s,a){var f=s.pendingProps,m=zt.current,_=!1,T=(s.flags&128)!==0,I;if((I=T)||(I=i!==null&&i.memoizedState===null?!1:(m&2)!==0),I?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),It(zt,m&1),i===null)return Ic(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(T=f.children,i=f.fallback,_?(f=s.mode,_=s.child,T={mode:"hidden",children:T},(f&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=Xl(T,f,0,null),i=ss(i,f,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=af(a),s.memoizedState=of,i):lf(s,T));if(m=i.memoizedState,m!==null&&(I=m.dehydrated,I!==null))return IS(i,s,T,f,I,m,a);if(_){_=f.fallback,T=s.mode,m=i.child,I=m.sibling;var B={mode:"hidden",children:f.children};return(T&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=B,s.deletions=null):(f=Rr(m,B),f.subtreeFlags=m.subtreeFlags&14680064),I!==null?_=Rr(I,_):(_=ss(_,T,a,null),_.flags|=2),_.return=s,f.return=s,f.sibling=_,s.child=f,f=_,_=s.child,T=i.child.memoizedState,T=T===null?af(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=i.childLanes&~a,s.memoizedState=of,f}return _=i.child,i=_.sibling,f=Rr(_,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function lf(i,s){return s=Xl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Dl(i,s,a,f){return f!==null&&Uc(f),Vs(s,i.child,null,a),i=lf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function IS(i,s,a,f,m,_,T){if(a)return s.flags&256?(s.flags&=-257,f=tf(Error(t(422))),Dl(i,s,T,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=f.fallback,m=s.mode,f=Xl({mode:"visible",children:f.children},m,0,null),_=ss(_,m,T,null),_.flags|=2,f.return=s,_.return=s,f.sibling=_,s.child=f,(s.mode&1)!==0&&Vs(s,i.child,null,T),s.child.memoizedState=af(T),s.memoizedState=of,_);if((s.mode&1)===0)return Dl(i,s,T,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var I=f.dgst;return f=I,_=Error(t(419)),f=tf(_,f,void 0),Dl(i,s,T,f)}if(I=(T&i.childLanes)!==0,Nn||I){if(f=sn,f!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|T))!==0?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,Wi(i,m),gi(f,i,m,-1))}return Tf(),f=tf(Error(t(421))),Dl(i,s,T,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=jS.bind(null,i),m._reactRetry=s,null):(i=_.treeContext,Hn=vr(m.nextSibling),Vn=s,Bt=!0,di=null,i!==null&&(Qn[Jn++]=Hi,Qn[Jn++]=Gi,Qn[Jn++]=Kr,Hi=i.id,Gi=i.overflow,Kr=s),s=lf(s,f.children),s.flags|=4096,s)}function fg(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),kc(i.return,s,a)}function uf(i,s,a,f,m){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:m}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=f,_.tail=a,_.tailMode=m)}function dg(i,s,a){var f=s.pendingProps,m=f.revealOrder,_=f.tail;if(wn(i,s,f.children,a),f=zt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&fg(i,a,s);else if(i.tag===19)fg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(It(zt,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(a=s.child,m=null;a!==null;)i=a.alternate,i!==null&&wl(i)===null&&(m=a),a=a.sibling;a=m,a===null?(m=s.child,s.child=null):(m=a.sibling,a.sibling=null),uf(s,!1,m,a,_);break;case"backwards":for(a=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&wl(i)===null){s.child=m;break}i=m.sibling,m.sibling=a,a=m,m=i}uf(s,!0,a,null,_);break;case"together":uf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Il(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function ji(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),ts|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Rr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Rr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function US(i,s,a){switch(s.tag){case 3:lg(s),zs();break;case 5:Am(s);break;case 1:Un(s.type)&&ml(s);break;case 4:Vc(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;It(Sl,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(It(zt,zt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?cg(i,s,a):(It(zt,zt.current&1),i=ji(i,s,a),i!==null?i.sibling:null);It(zt,zt.current&1);break;case 19:if(f=(a&s.childLanes)!==0,(i.flags&128)!==0){if(f)return dg(i,s,a);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),It(zt,zt.current),f)break;return null;case 22:case 23:return s.lanes=0,sg(i,s,a)}return ji(i,s,a)}var hg,cf,pg,mg;hg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},cf=function(){},pg=function(i,s,a,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,Jr(Ci.current);var _=null;switch(a){case"input":m=j(i,m),f=j(i,f),_=[];break;case"select":m=se({},m,{value:void 0}),f=se({},f,{value:void 0}),_=[];break;case"textarea":m=w(i,m),f=w(i,f),_=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=dl)}dt(a,f);var T;a=null;for(Q in m)if(!f.hasOwnProperty(Q)&&m.hasOwnProperty(Q)&&m[Q]!=null)if(Q==="style"){var I=m[Q];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?_||(_=[]):(_=_||[]).push(Q,null));for(Q in f){var B=f[Q];if(I=m!=null?m[Q]:void 0,f.hasOwnProperty(Q)&&B!==I&&(B!=null||I!=null))if(Q==="style")if(I){for(T in I)!I.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in B)B.hasOwnProperty(T)&&I[T]!==B[T]&&(a||(a={}),a[T]=B[T])}else a||(_||(_=[]),_.push(Q,a)),a=B;else Q==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(_=_||[]).push(Q,B)):Q==="children"?typeof B!="string"&&typeof B!="number"||(_=_||[]).push(Q,""+B):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(B!=null&&Q==="onScroll"&&Ft("scroll",i),_||I===B||(_=[])):(_=_||[]).push(Q,B))}a&&(_=_||[]).push("style",a);var Q=_;(s.updateQueue=Q)&&(s.flags|=4)}},mg=function(i,s,a,f){a!==f&&(s.flags|=4)};function aa(i,s){if(!Bt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function mn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)a|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function NS(i,s,a){var f=s.pendingProps;switch(Lc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(s),null;case 1:return Un(s.type)&&pl(),mn(s),null;case 3:return f=s.stateNode,Ws(),Ot(In),Ot(hn),Wc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(yl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,di!==null&&(Sf(di),di=null))),cf(i,s),mn(s),null;case 5:Hc(s);var m=Jr(na.current);if(a=s.type,i!==null&&s.stateNode!=null)pg(i,s,a,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return mn(s),null}if(i=Jr(Ci.current),yl(s)){f=s.stateNode,a=s.type;var _=s.memoizedProps;switch(f[Ai]=s,f[Zo]=_,i=(s.mode&1)!==0,a){case"dialog":Ft("cancel",f),Ft("close",f);break;case"iframe":case"object":case"embed":Ft("load",f);break;case"video":case"audio":for(m=0;m<qo.length;m++)Ft(qo[m],f);break;case"source":Ft("error",f);break;case"img":case"image":case"link":Ft("error",f),Ft("load",f);break;case"details":Ft("toggle",f);break;case"input":Mn(f,_),Ft("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!_.multiple},Ft("invalid",f);break;case"textarea":$(f,_),Ft("invalid",f)}dt(a,_),m=null;for(var T in _)if(_.hasOwnProperty(T)){var I=_[T];T==="children"?typeof I=="string"?f.textContent!==I&&(_.suppressHydrationWarning!==!0&&fl(f.textContent,I,i),m=["children",I]):typeof I=="number"&&f.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&fl(f.textContent,I,i),m=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Ft("scroll",f)}switch(a){case"input":Ct(f),$e(f,_,!0);break;case"textarea":Ct(f),ge(f);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(f.onclick=dl)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=de(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=T.createElement(a,{is:f.is}):(i=T.createElement(a),a==="select"&&(T=i,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):i=T.createElementNS(i,a),i[Ai]=s,i[Zo]=f,hg(i,s,!1,!1),s.stateNode=i;e:{switch(T=st(a,f),a){case"dialog":Ft("cancel",i),Ft("close",i),m=f;break;case"iframe":case"object":case"embed":Ft("load",i),m=f;break;case"video":case"audio":for(m=0;m<qo.length;m++)Ft(qo[m],i);m=f;break;case"source":Ft("error",i),m=f;break;case"img":case"image":case"link":Ft("error",i),Ft("load",i),m=f;break;case"details":Ft("toggle",i),m=f;break;case"input":Mn(i,f),m=j(i,f),Ft("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=se({},f,{value:void 0}),Ft("invalid",i);break;case"textarea":$(i,f),m=w(i,f),Ft("invalid",i);break;default:m=f}dt(a,m),I=m;for(_ in I)if(I.hasOwnProperty(_)){var B=I[_];_==="style"?tt(i,B):_==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Fe(i,B)):_==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&ct(i,B):typeof B=="number"&&ct(i,""+B):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?B!=null&&_==="onScroll"&&Ft("scroll",i):B!=null&&P(i,_,B,T))}switch(a){case"input":Ct(i),$e(i,f,!1);break;case"textarea":Ct(i),ge(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Ae(f.value));break;case"select":i.multiple=!!f.multiple,_=f.value,_!=null?D(i,!!f.multiple,_,!1):f.defaultValue!=null&&D(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=dl)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return mn(s),null;case 6:if(i&&s.stateNode!=null)mg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=Jr(na.current),Jr(Ci.current),yl(s)){if(f=s.stateNode,a=s.memoizedProps,f[Ai]=s,(_=f.nodeValue!==a)&&(i=Vn,i!==null))switch(i.tag){case 3:fl(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&fl(f.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[Ai]=s,s.stateNode=f}return mn(s),null;case 13:if(Ot(zt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Bt&&Hn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)_m(),zs(),s.flags|=98560,_=!1;else if(_=yl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ai]=s}else zs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;mn(s),_=!1}else di!==null&&(Sf(di),di=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(zt.current&1)!==0?en===0&&(en=3):Tf())),s.updateQueue!==null&&(s.flags|=4),mn(s),null);case 4:return Ws(),cf(i,s),i===null&&$o(s.stateNode.containerInfo),mn(s),null;case 10:return Oc(s.type._context),mn(s),null;case 17:return Un(s.type)&&pl(),mn(s),null;case 19:if(Ot(zt),_=s.memoizedState,_===null)return mn(s),null;if(f=(s.flags&128)!==0,T=_.rendering,T===null)if(f)aa(_,!1);else{if(en!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(T=wl(i),T!==null){for(s.flags|=128,aa(_,!1),f=T.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)_=a,i=f,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,i=T.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return It(zt,zt.current&1|2),s.child}i=i.sibling}_.tail!==null&&Me()>qs&&(s.flags|=128,f=!0,aa(_,!1),s.lanes=4194304)}else{if(!f)if(i=wl(T),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),aa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Bt)return mn(s),null}else 2*Me()-_.renderingStartTime>qs&&a!==1073741824&&(s.flags|=128,f=!0,aa(_,!1),s.lanes=4194304);_.isBackwards?(T.sibling=s.child,s.child=T):(a=_.last,a!==null?a.sibling=T:s.child=T,_.last=T)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Me(),s.sibling=null,a=zt.current,It(zt,f?a&1|2:a&1),s):(mn(s),null);case 22:case 23:return Ef(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Gn&1073741824)!==0&&(mn(s),s.subtreeFlags&6&&(s.flags|=8192)):mn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function FS(i,s){switch(Lc(s),s.tag){case 1:return Un(s.type)&&pl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ws(),Ot(In),Ot(hn),Wc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Hc(s),null;case 13:if(Ot(zt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));zs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ot(zt),null;case 4:return Ws(),null;case 10:return Oc(s.type._context),null;case 22:case 23:return Ef(),null;case 24:return null;default:return null}}var Ul=!1,gn=!1,OS=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function js(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){Gt(i,s,f)}else a.current=null}function ff(i,s,a){try{a()}catch(f){Gt(i,s,f)}}var gg=!1;function kS(i,s){if(Mc=el,i=qp(),pc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var m=f.anchorOffset,_=f.focusNode;f=f.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var T=0,I=-1,B=-1,Q=0,ve=0,ye=i,me=null;t:for(;;){for(var Ie;ye!==a||m!==0&&ye.nodeType!==3||(I=T+m),ye!==_||f!==0&&ye.nodeType!==3||(B=T+f),ye.nodeType===3&&(T+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)me=ye,ye=Ie;for(;;){if(ye===i)break t;if(me===a&&++Q===m&&(I=T),me===_&&++ve===f&&(B=T),(Ie=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Ie}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ec={focusedElem:i,selectionRange:a},el=!1,Oe=s;Oe!==null;)if(s=Oe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Oe=i;else for(;Oe!==null;){s=Oe;try{var ze=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Xt=ze.memoizedState,Y=s.stateNode,H=Y.getSnapshotBeforeUpdate(s.elementType===s.type?He:hi(s.type,He),Xt);Y.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var q=s.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Gt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,Oe=i;break}Oe=s.return}return ze=gg,gg=!1,ze}function la(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var _=m.destroy;m.destroy=void 0,_!==void 0&&ff(s,a,_)}m=m.next}while(m!==f)}}function Nl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function df(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function vg(i){var s=i.alternate;s!==null&&(i.alternate=null,vg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ai],delete s[Zo],delete s[Cc],delete s[xS],delete s[SS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function _g(i){return i.tag===5||i.tag===3||i.tag===4}function yg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||_g(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function hf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=dl));else if(f!==4&&(i=i.child,i!==null))for(hf(i,s,a),i=i.sibling;i!==null;)hf(i,s,a),i=i.sibling}function pf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(pf(i,s,a),i=i.sibling;i!==null;)pf(i,s,a),i=i.sibling}var ln=null,pi=!1;function Er(i,s,a){for(a=a.child;a!==null;)xg(i,s,a),a=a.sibling}function xg(i,s,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 5:gn||js(a,s);case 6:var f=ln,m=pi;ln=null,Er(i,s,a),ln=f,pi=m,ln!==null&&(pi?(i=ln,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(pi?(i=ln,a=a.stateNode,i.nodeType===8?Ac(i.parentNode,a):i.nodeType===1&&Ac(i,a),zo(i)):Ac(ln,a.stateNode));break;case 4:f=ln,m=pi,ln=a.stateNode.containerInfo,pi=!0,Er(i,s,a),ln=f,pi=m;break;case 0:case 11:case 14:case 15:if(!gn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var _=m,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&ff(a,s,T),m=m.next}while(m!==f)}Er(i,s,a);break;case 1:if(!gn&&(js(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(I){Gt(a,s,I)}Er(i,s,a);break;case 21:Er(i,s,a);break;case 22:a.mode&1?(gn=(f=gn)||a.memoizedState!==null,Er(i,s,a),gn=f):Er(i,s,a);break;default:Er(i,s,a)}}function Sg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new OS),s.forEach(function(f){var m=YS.bind(null,i,f);a.has(f)||(a.add(f),f.then(m,m))})}}function mi(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var m=a[f];try{var _=i,T=s,I=T;e:for(;I!==null;){switch(I.tag){case 5:ln=I.stateNode,pi=!1;break e;case 3:ln=I.stateNode.containerInfo,pi=!0;break e;case 4:ln=I.stateNode.containerInfo,pi=!0;break e}I=I.return}if(ln===null)throw Error(t(160));xg(_,T,m),ln=null,pi=!1;var B=m.alternate;B!==null&&(B.return=null),m.return=null}catch(Q){Gt(m,s,Q)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Mg(s,i),s=s.sibling}function Mg(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(mi(s,i),Pi(i),f&4){try{la(3,i,i.return),Nl(3,i)}catch(He){Gt(i,i.return,He)}try{la(5,i,i.return)}catch(He){Gt(i,i.return,He)}}break;case 1:mi(s,i),Pi(i),f&512&&a!==null&&js(a,a.return);break;case 5:if(mi(s,i),Pi(i),f&512&&a!==null&&js(a,a.return),i.flags&32){var m=i.stateNode;try{ct(m,"")}catch(He){Gt(i,i.return,He)}}if(f&4&&(m=i.stateNode,m!=null)){var _=i.memoizedProps,T=a!==null?a.memoizedProps:_,I=i.type,B=i.updateQueue;if(i.updateQueue=null,B!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&pt(m,_),st(I,T);var Q=st(I,_);for(T=0;T<B.length;T+=2){var ve=B[T],ye=B[T+1];ve==="style"?tt(m,ye):ve==="dangerouslySetInnerHTML"?Fe(m,ye):ve==="children"?ct(m,ye):P(m,ve,ye,Q)}switch(I){case"input":ft(m,_);break;case"textarea":pe(m,_);break;case"select":var me=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var Ie=_.value;Ie!=null?D(m,!!_.multiple,Ie,!1):me!==!!_.multiple&&(_.defaultValue!=null?D(m,!!_.multiple,_.defaultValue,!0):D(m,!!_.multiple,_.multiple?[]:"",!1))}m[Zo]=_}catch(He){Gt(i,i.return,He)}}break;case 6:if(mi(s,i),Pi(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,_=i.memoizedProps;try{m.nodeValue=_}catch(He){Gt(i,i.return,He)}}break;case 3:if(mi(s,i),Pi(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{zo(s.containerInfo)}catch(He){Gt(i,i.return,He)}break;case 4:mi(s,i),Pi(i);break;case 13:mi(s,i),Pi(i),m=i.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(vf=Me())),f&4&&Sg(i);break;case 22:if(ve=a!==null&&a.memoizedState!==null,i.mode&1?(gn=(Q=gn)||ve,mi(s,i),gn=Q):mi(s,i),Pi(i),f&8192){if(Q=i.memoizedState!==null,(i.stateNode.isHidden=Q)&&!ve&&(i.mode&1)!==0)for(Oe=i,ve=i.child;ve!==null;){for(ye=Oe=ve;Oe!==null;){switch(me=Oe,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:la(4,me,me.return);break;case 1:js(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){f=me,a=me.return;try{s=f,ze.props=s.memoizedProps,ze.state=s.memoizedState,ze.componentWillUnmount()}catch(He){Gt(f,a,He)}}break;case 5:js(me,me.return);break;case 22:if(me.memoizedState!==null){wg(ye);continue}}Ie!==null?(Ie.return=me,Oe=Ie):wg(ye)}ve=ve.sibling}e:for(ve=null,ye=i;;){if(ye.tag===5){if(ve===null){ve=ye;try{m=ye.stateNode,Q?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=ye.stateNode,B=ye.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=Je("display",T))}catch(He){Gt(i,i.return,He)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=Q?"":ye.memoizedProps}catch(He){Gt(i,i.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===i)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===i)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===i)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:mi(s,i),Pi(i),f&4&&Sg(i);break;case 21:break;default:mi(s,i),Pi(i)}}function Pi(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(_g(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(ct(m,""),f.flags&=-33);var _=yg(i);pf(i,_,m);break;case 3:case 4:var T=f.stateNode.containerInfo,I=yg(i);hf(i,I,T);break;default:throw Error(t(161))}}catch(B){Gt(i,i.return,B)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function BS(i,s,a){Oe=i,Eg(i)}function Eg(i,s,a){for(var f=(i.mode&1)!==0;Oe!==null;){var m=Oe,_=m.child;if(m.tag===22&&f){var T=m.memoizedState!==null||Ul;if(!T){var I=m.alternate,B=I!==null&&I.memoizedState!==null||gn;I=Ul;var Q=gn;if(Ul=T,(gn=B)&&!Q)for(Oe=m;Oe!==null;)T=Oe,B=T.child,T.tag===22&&T.memoizedState!==null?Ag(m):B!==null?(B.return=T,Oe=B):Ag(m);for(;_!==null;)Oe=_,Eg(_),_=_.sibling;Oe=m,Ul=I,gn=Q}Tg(i)}else(m.subtreeFlags&8772)!==0&&_!==null?(_.return=m,Oe=_):Tg(i)}}function Tg(i){for(;Oe!==null;){var s=Oe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:gn||Nl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!gn)if(a===null)f.componentDidMount();else{var m=s.elementType===s.type?a.memoizedProps:hi(s.type,a.memoizedProps);f.componentDidUpdate(m,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&wm(s,_,f);break;case 3:var T=s.updateQueue;if(T!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}wm(s,T,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var B=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var Q=s.alternate;if(Q!==null){var ve=Q.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&zo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||s.flags&512&&df(s)}catch(me){Gt(s,s.return,me)}}if(s===i){Oe=null;break}if(a=s.sibling,a!==null){a.return=s.return,Oe=a;break}Oe=s.return}}function wg(i){for(;Oe!==null;){var s=Oe;if(s===i){Oe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Oe=a;break}Oe=s.return}}function Ag(i){for(;Oe!==null;){var s=Oe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Nl(4,s)}catch(B){Gt(s,a,B)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(B){Gt(s,m,B)}}var _=s.return;try{df(s)}catch(B){Gt(s,_,B)}break;case 5:var T=s.return;try{df(s)}catch(B){Gt(s,T,B)}}}catch(B){Gt(s,s.return,B)}if(s===i){Oe=null;break}var I=s.sibling;if(I!==null){I.return=s.return,Oe=I;break}Oe=s.return}}var zS=Math.ceil,Fl=A.ReactCurrentDispatcher,mf=A.ReactCurrentOwner,ni=A.ReactCurrentBatchConfig,yt=0,sn=null,qt=null,un=0,Gn=0,Ys=_r(0),en=0,ua=null,ts=0,Ol=0,gf=0,ca=null,Fn=null,vf=0,qs=1/0,Yi=null,kl=!1,_f=null,Tr=null,Bl=!1,wr=null,zl=0,fa=0,yf=null,Vl=-1,Hl=0;function An(){return(yt&6)!==0?Me():Vl!==-1?Vl:Vl=Me()}function Ar(i){return(i.mode&1)===0?1:(yt&2)!==0&&un!==0?un&-un:ES.transition!==null?(Hl===0&&(Hl=Tn()),Hl):(i=At,i!==0||(i=window.event,i=i===void 0?16:Rp(i.type)),i)}function gi(i,s,a,f){if(50<fa)throw fa=0,yf=null,Error(t(185));Dn(i,a,f),((yt&2)===0||i!==sn)&&(i===sn&&((yt&2)===0&&(Ol|=a),en===4&&Cr(i,un)),On(i,f),a===1&&yt===0&&(s.mode&1)===0&&(qs=Me()+500,gl&&xr()))}function On(i,s){var a=i.callbackNode;Kn(i,s);var f=wi(i,i===sn?un:0);if(f===0)a!==null&&ee(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&ee(a),s===1)i.tag===0?MS(Rg.bind(null,i)):hm(Rg.bind(null,i)),_S(function(){(yt&6)===0&&xr()}),a=null;else{switch(xp(f)){case 1:a=Ve;break;case 4:a=nt;break;case 16:a=rt;break;case 536870912:a=vt;break;default:a=rt}a=Fg(a,Cg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Cg(i,s){if(Vl=-1,Hl=0,(yt&6)!==0)throw Error(t(327));var a=i.callbackNode;if($s()&&i.callbackNode!==a)return null;var f=wi(i,i===sn?un:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=Gl(i,f);else{s=f;var m=yt;yt|=2;var _=bg();(sn!==i||un!==s)&&(Yi=null,qs=Me()+500,is(i,s));do try{GS();break}catch(I){Pg(i,I)}while(!0);Fc(),Fl.current=_,yt=m,qt!==null?s=0:(sn=null,un=0,s=en)}if(s!==0){if(s===2&&(m=Bi(i),m!==0&&(f=m,s=xf(i,m))),s===1)throw a=ua,is(i,0),Cr(i,f),On(i,Me()),a;if(s===6)Cr(i,f);else{if(m=i.current.alternate,(f&30)===0&&!VS(m)&&(s=Gl(i,f),s===2&&(_=Bi(i),_!==0&&(f=_,s=xf(i,_))),s===1))throw a=ua,is(i,0),Cr(i,f),On(i,Me()),a;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:rs(i,Fn,Yi);break;case 3:if(Cr(i,f),(f&130023424)===f&&(s=vf+500-Me(),10<s)){if(wi(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){An(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=wc(rs.bind(null,i,Fn,Yi),s);break}rs(i,Fn,Yi);break;case 4:if(Cr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var T=31-at(f);_=1<<T,T=s[T],T>m&&(m=T),f&=~_}if(f=m,f=Me()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*zS(f/1960))-f,10<f){i.timeoutHandle=wc(rs.bind(null,i,Fn,Yi),f);break}rs(i,Fn,Yi);break;case 5:rs(i,Fn,Yi);break;default:throw Error(t(329))}}}return On(i,Me()),i.callbackNode===a?Cg.bind(null,i):null}function xf(i,s){var a=ca;return i.current.memoizedState.isDehydrated&&(is(i,s).flags|=256),i=Gl(i,s),i!==2&&(s=Fn,Fn=a,s!==null&&Sf(s)),i}function Sf(i){Fn===null?Fn=i:Fn.push.apply(Fn,i)}function VS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var m=a[f],_=m.getSnapshot;m=m.value;try{if(!fi(_(),m))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Cr(i,s){for(s&=~gf,s&=~Ol,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-at(s),f=1<<a;i[a]=-1,s&=~f}}function Rg(i){if((yt&6)!==0)throw Error(t(327));$s();var s=wi(i,0);if((s&1)===0)return On(i,Me()),null;var a=Gl(i,s);if(i.tag!==0&&a===2){var f=Bi(i);f!==0&&(s=f,a=xf(i,f))}if(a===1)throw a=ua,is(i,0),Cr(i,s),On(i,Me()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,rs(i,Fn,Yi),On(i,Me()),null}function Mf(i,s){var a=yt;yt|=1;try{return i(s)}finally{yt=a,yt===0&&(qs=Me()+500,gl&&xr())}}function ns(i){wr!==null&&wr.tag===0&&(yt&6)===0&&$s();var s=yt;yt|=1;var a=ni.transition,f=At;try{if(ni.transition=null,At=1,i)return i()}finally{At=f,ni.transition=a,yt=s,(yt&6)===0&&xr()}}function Ef(){Gn=Ys.current,Ot(Ys)}function is(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,vS(a)),qt!==null)for(a=qt.return;a!==null;){var f=a;switch(Lc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&pl();break;case 3:Ws(),Ot(In),Ot(hn),Wc();break;case 5:Hc(f);break;case 4:Ws();break;case 13:Ot(zt);break;case 19:Ot(zt);break;case 10:Oc(f.type._context);break;case 22:case 23:Ef()}a=a.return}if(sn=i,qt=i=Rr(i.current,null),un=Gn=s,en=0,ua=null,gf=Ol=ts=0,Fn=ca=null,Qr!==null){for(s=0;s<Qr.length;s++)if(a=Qr[s],f=a.interleaved,f!==null){a.interleaved=null;var m=f.next,_=a.pending;if(_!==null){var T=_.next;_.next=m,f.next=T}a.pending=f}Qr=null}return i}function Pg(i,s){do{var a=qt;try{if(Fc(),Al.current=bl,Cl){for(var f=Vt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Cl=!1}if(es=0,rn=Jt=Vt=null,ia=!1,ra=0,mf.current=null,a===null||a.return===null){en=1,ua=s,qt=null;break}e:{var _=i,T=a.return,I=a,B=s;if(s=un,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var Q=B,ve=I,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=eg(T);if(Ie!==null){Ie.flags&=-257,tg(Ie,T,I,_,s),Ie.mode&1&&Jm(_,Q,s),s=Ie,B=Q;var ze=s.updateQueue;if(ze===null){var He=new Set;He.add(B),s.updateQueue=He}else ze.add(B);break e}else{if((s&1)===0){Jm(_,Q,s),Tf();break e}B=Error(t(426))}}else if(Bt&&I.mode&1){var Xt=eg(T);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),tg(Xt,T,I,_,s),Uc(Xs(B,I));break e}}_=B=Xs(B,I),en!==4&&(en=2),ca===null?ca=[_]:ca.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Y=Zm(_,B,s);Tm(_,Y);break e;case 1:I=B;var H=_.type,q=_.stateNode;if((_.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(Tr===null||!Tr.has(q)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=Qm(_,I,s);Tm(_,Te);break e}}_=_.return}while(_!==null)}Dg(a)}catch(je){s=je,qt===a&&a!==null&&(qt=a=a.return);continue}break}while(!0)}function bg(){var i=Fl.current;return Fl.current=bl,i===null?bl:i}function Tf(){(en===0||en===3||en===2)&&(en=4),sn===null||(ts&268435455)===0&&(Ol&268435455)===0||Cr(sn,un)}function Gl(i,s){var a=yt;yt|=2;var f=bg();(sn!==i||un!==s)&&(Yi=null,is(i,s));do try{HS();break}catch(m){Pg(i,m)}while(!0);if(Fc(),yt=a,Fl.current=f,qt!==null)throw Error(t(261));return sn=null,un=0,en}function HS(){for(;qt!==null;)Lg(qt)}function GS(){for(;qt!==null&&!X();)Lg(qt)}function Lg(i){var s=Ng(i.alternate,i,Gn);i.memoizedProps=i.pendingProps,s===null?Dg(i):qt=s,mf.current=null}function Dg(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=NS(a,s,Gn),a!==null){qt=a;return}}else{if(a=FS(a,s),a!==null){a.flags&=32767,qt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{en=6,qt=null;return}}if(s=s.sibling,s!==null){qt=s;return}qt=s=i}while(s!==null);en===0&&(en=5)}function rs(i,s,a){var f=At,m=ni.transition;try{ni.transition=null,At=1,WS(i,s,a,f)}finally{ni.transition=m,At=f}return null}function WS(i,s,a,f){do $s();while(wr!==null);if((yt&6)!==0)throw Error(t(327));a=i.finishedWork;var m=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(Za(i,_),i===sn&&(qt=sn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Bl||(Bl=!0,Fg(rt,function(){return $s(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=ni.transition,ni.transition=null;var T=At;At=1;var I=yt;yt|=4,mf.current=null,kS(i,a),Mg(a,i),cS(Ec),el=!!Mc,Ec=Mc=null,i.current=a,BS(a),we(),yt=I,At=T,ni.transition=_}else i.current=a;if(Bl&&(Bl=!1,wr=i,zl=m),_=i.pendingLanes,_===0&&(Tr=null),fn(a.stateNode),On(i,Me()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)m=s[a],f(m.value,{componentStack:m.stack,digest:m.digest});if(kl)throw kl=!1,i=_f,_f=null,i;return(zl&1)!==0&&i.tag!==0&&$s(),_=i.pendingLanes,(_&1)!==0?i===yf?fa++:(fa=0,yf=i):fa=0,xr(),null}function $s(){if(wr!==null){var i=xp(zl),s=ni.transition,a=At;try{if(ni.transition=null,At=16>i?16:i,wr===null)var f=!1;else{if(i=wr,wr=null,zl=0,(yt&6)!==0)throw Error(t(331));var m=yt;for(yt|=4,Oe=i.current;Oe!==null;){var _=Oe,T=_.child;if((Oe.flags&16)!==0){var I=_.deletions;if(I!==null){for(var B=0;B<I.length;B++){var Q=I[B];for(Oe=Q;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:la(8,ve,_)}var ye=ve.child;if(ye!==null)ye.return=ve,Oe=ye;else for(;Oe!==null;){ve=Oe;var me=ve.sibling,Ie=ve.return;if(vg(ve),ve===Q){Oe=null;break}if(me!==null){me.return=Ie,Oe=me;break}Oe=Ie}}}var ze=_.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Xt=He.sibling;He.sibling=null,He=Xt}while(He!==null)}}Oe=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,Oe=T;else e:for(;Oe!==null;){if(_=Oe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:la(9,_,_.return)}var Y=_.sibling;if(Y!==null){Y.return=_.return,Oe=Y;break e}Oe=_.return}}var H=i.current;for(Oe=H;Oe!==null;){T=Oe;var q=T.child;if((T.subtreeFlags&2064)!==0&&q!==null)q.return=T,Oe=q;else e:for(T=H;Oe!==null;){if(I=Oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Nl(9,I)}}catch(je){Gt(I,I.return,je)}if(I===T){Oe=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Oe=Te;break e}Oe=I.return}}if(yt=m,xr(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Et,i)}catch{}f=!0}return f}finally{At=a,ni.transition=s}}return!1}function Ig(i,s,a){s=Xs(a,s),s=Zm(i,s,1),i=Mr(i,s,1),s=An(),i!==null&&(Dn(i,1,s),On(i,s))}function Gt(i,s,a){if(i.tag===3)Ig(i,i,a);else for(;s!==null;){if(s.tag===3){Ig(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Tr===null||!Tr.has(f))){i=Xs(a,i),i=Qm(s,i,1),s=Mr(s,i,1),i=An(),s!==null&&(Dn(s,1,i),On(s,i));break}}s=s.return}}function XS(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=An(),i.pingedLanes|=i.suspendedLanes&a,sn===i&&(un&a)===a&&(en===4||en===3&&(un&130023424)===un&&500>Me()-vf?is(i,0):gf|=a),On(i,s)}function Ug(i,s){s===0&&((i.mode&1)===0?s=1:(s=ci,ci<<=1,(ci&130023424)===0&&(ci=4194304)));var a=An();i=Wi(i,s),i!==null&&(Dn(i,s,a),On(i,a))}function jS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Ug(i,a)}function YS(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(a=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Ug(i,a)}var Ng;Ng=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||In.current)Nn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Nn=!1,US(i,s,a);Nn=(i.flags&131072)!==0}else Nn=!1,Bt&&(s.flags&1048576)!==0&&pm(s,_l,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Il(i,s),i=s.pendingProps;var m=Os(s,hn.current);Gs(s,a),m=Yc(null,s,f,i,m,a);var _=qc();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Un(f)?(_=!0,ml(s)):_=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,zc(s),m.updater=Ll,s.stateNode=m,m._reactInternals=s,ef(s,f,i,a),s=sf(null,s,f,!0,_,a)):(s.tag=0,Bt&&_&&bc(s),wn(null,s,m,a),s=s.child),s;case 16:f=s.elementType;e:{switch(Il(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=$S(f),i=hi(f,i),m){case 0:s=rf(null,s,f,i,a);break e;case 1:s=ag(null,s,f,i,a);break e;case 11:s=ng(null,s,f,i,a);break e;case 14:s=ig(null,s,f,hi(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:hi(f,m),rf(i,s,f,m,a);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:hi(f,m),ag(i,s,f,m,a);case 3:e:{if(lg(s),i===null)throw Error(t(387));f=s.pendingProps,_=s.memoizedState,m=_.element,Em(i,s),Tl(s,f,null,a);var T=s.memoizedState;if(f=T.element,_.isDehydrated)if(_={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){m=Xs(Error(t(423)),s),s=ug(i,s,f,a,m);break e}else if(f!==m){m=Xs(Error(t(424)),s),s=ug(i,s,f,a,m);break e}else for(Hn=vr(s.stateNode.containerInfo.firstChild),Vn=s,Bt=!0,di=null,a=Sm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),f===m){s=ji(i,s,a);break e}wn(i,s,f,a)}s=s.child}return s;case 5:return Am(s),i===null&&Ic(s),f=s.type,m=s.pendingProps,_=i!==null?i.memoizedProps:null,T=m.children,Tc(f,m)?T=null:_!==null&&Tc(f,_)&&(s.flags|=32),og(i,s),wn(i,s,T,a),s.child;case 6:return i===null&&Ic(s),null;case 13:return cg(i,s,a);case 4:return Vc(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Vs(s,null,f,a):wn(i,s,f,a),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:hi(f,m),ng(i,s,f,m,a);case 7:return wn(i,s,s.pendingProps,a),s.child;case 8:return wn(i,s,s.pendingProps.children,a),s.child;case 12:return wn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,_=s.memoizedProps,T=m.value,It(Sl,f._currentValue),f._currentValue=T,_!==null)if(fi(_.value,T)){if(_.children===m.children&&!In.current){s=ji(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var I=_.dependencies;if(I!==null){T=_.child;for(var B=I.firstContext;B!==null;){if(B.context===f){if(_.tag===1){B=Xi(-1,a&-a),B.tag=2;var Q=_.updateQueue;if(Q!==null){Q=Q.shared;var ve=Q.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),Q.pending=B}}_.lanes|=a,B=_.alternate,B!==null&&(B.lanes|=a),kc(_.return,a,s),I.lanes|=a;break}B=B.next}}else if(_.tag===10)T=_.type===s.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),kc(T,a,s),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===s){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}wn(i,s,m.children,a),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,Gs(s,a),m=ei(m),f=f(m),s.flags|=1,wn(i,s,f,a),s.child;case 14:return f=s.type,m=hi(f,s.pendingProps),m=hi(f.type,m),ig(i,s,f,m,a);case 15:return rg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:hi(f,m),Il(i,s),s.tag=1,Un(f)?(i=!0,ml(s)):i=!1,Gs(s,a),$m(s,f,m),ef(s,f,m,a),sf(null,s,f,!0,i,a);case 19:return dg(i,s,a);case 22:return sg(i,s,a)}throw Error(t(156,s.tag))};function Fg(i,s){return J(i,s)}function qS(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(i,s,a,f){return new qS(i,s,a,f)}function wf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function $S(i){if(typeof i=="function")return wf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===le)return 11;if(i===ce)return 14}return 2}function Rr(i,s){var a=i.alternate;return a===null?(a=ii(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Wl(i,s,a,f,m,_){var T=2;if(f=i,typeof i=="function")wf(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case N:return ss(a.children,m,_,s);case O:T=8,m|=8;break;case b:return i=ii(12,a,s,m|2),i.elementType=b,i.lanes=_,i;case Z:return i=ii(13,a,s,m),i.elementType=Z,i.lanes=_,i;case te:return i=ii(19,a,s,m),i.elementType=te,i.lanes=_,i;case re:return Xl(a,m,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:T=10;break e;case V:T=9;break e;case le:T=11;break e;case ce:T=14;break e;case ae:T=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ii(T,a,s,m),s.elementType=i,s.type=f,s.lanes=_,s}function ss(i,s,a,f){return i=ii(7,i,f,s),i.lanes=a,i}function Xl(i,s,a,f){return i=ii(22,i,f,s),i.elementType=re,i.lanes=a,i.stateNode={isHidden:!1},i}function Af(i,s,a){return i=ii(6,i,null,s),i.lanes=a,i}function Cf(i,s,a){return s=ii(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function KS(i,s,a,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zn(0),this.expirationTimes=Zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Rf(i,s,a,f,m,_,T,I,B){return i=new KS(i,s,a,I,B),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ii(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(_),i}function ZS(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function Og(i){if(!i)return yr;i=i._reactInternals;e:{if(Ti(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Un(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Un(a))return fm(i,a,s)}return s}function kg(i,s,a,f,m,_,T,I,B){return i=Rf(a,f,!0,i,m,_,T,I,B),i.context=Og(null),a=i.current,f=An(),m=Ar(a),_=Xi(f,m),_.callback=s??null,Mr(a,_,m),i.current.lanes=m,Dn(i,m,f),On(i,f),i}function jl(i,s,a,f){var m=s.current,_=An(),T=Ar(m);return a=Og(a),s.context===null?s.context=a:s.pendingContext=a,s=Xi(_,T),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Mr(m,s,T),i!==null&&(gi(i,m,T,_),El(i,m,T)),T}function Yl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Bg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Pf(i,s){Bg(i,s),(i=i.alternate)&&Bg(i,s)}function QS(){return null}var zg=typeof reportError=="function"?reportError:function(i){console.error(i)};function bf(i){this._internalRoot=i}ql.prototype.render=bf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));jl(i,s,null,null)},ql.prototype.unmount=bf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ns(function(){jl(null,i,null,null)}),s[zi]=null}};function ql(i){this._internalRoot=i}ql.prototype.unstable_scheduleHydration=function(i){if(i){var s=Ep();i={blockedOn:null,target:i,priority:s};for(var a=0;a<pr.length&&s!==0&&s<pr[a].priority;a++);pr.splice(a,0,i),a===0&&Ap(i)}};function Lf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function $l(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function JS(i,s,a,f,m){if(m){if(typeof f=="function"){var _=f;f=function(){var Q=Yl(T);_.call(Q)}}var T=kg(s,f,i,0,null,!1,!1,"",Vg);return i._reactRootContainer=T,i[zi]=T.current,$o(i.nodeType===8?i.parentNode:i),ns(),T}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var I=f;f=function(){var Q=Yl(B);I.call(Q)}}var B=Rf(i,0,!1,null,null,!1,!1,"",Vg);return i._reactRootContainer=B,i[zi]=B.current,$o(i.nodeType===8?i.parentNode:i),ns(function(){jl(s,B,a,f)}),B}function Kl(i,s,a,f,m){var _=a._reactRootContainer;if(_){var T=_;if(typeof m=="function"){var I=m;m=function(){var B=Yl(T);I.call(B)}}jl(s,T,i,m)}else T=JS(a,s,i,m,f);return Yl(T)}Sp=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=Qt(s.pendingLanes);a!==0&&(ec(s,a|1),On(s,Me()),(yt&6)===0&&(qs=Me()+500,xr()))}break;case 13:ns(function(){var f=Wi(i,1);if(f!==null){var m=An();gi(f,i,1,m)}}),Pf(i,1)}},tc=function(i){if(i.tag===13){var s=Wi(i,134217728);if(s!==null){var a=An();gi(s,i,134217728,a)}Pf(i,134217728)}},Mp=function(i){if(i.tag===13){var s=Ar(i),a=Wi(i,s);if(a!==null){var f=An();gi(a,i,s,f)}Pf(i,s)}},Ep=function(){return At},Tp=function(i,s){var a=At;try{return At=i,s()}finally{At=a}},Re=function(i,s,a){switch(s){case"input":if(ft(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var m=hl(f);if(!m)throw Error(t(90));mt(f),ft(f,m)}}}break;case"textarea":pe(i,a);break;case"select":s=a.value,s!=null&&D(i,!!a.multiple,s,!1)}},Nt=Mf,Zt=ns;var eM={usingClientEntryPoint:!1,Events:[Qo,Ns,hl,be,ot,Mf]},da={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tM={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=C(i),i===null?null:i.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||QS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{Et=Zl.inject(tM),gt=Zl}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eM,kn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(s))throw Error(t(200));return ZS(i,s,null,a)},kn.createRoot=function(i,s){if(!Lf(i))throw Error(t(299));var a=!1,f="",m=zg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Rf(i,1,!1,null,null,a,!1,f,m),i[zi]=s.current,$o(i.nodeType===8?i.parentNode:i),new bf(s)},kn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=C(s),i=i===null?null:i.stateNode,i},kn.flushSync=function(i){return ns(i)},kn.hydrate=function(i,s,a){if(!$l(s))throw Error(t(200));return Kl(null,i,s,!0,a)},kn.hydrateRoot=function(i,s,a){if(!Lf(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,m=!1,_="",T=zg;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),s=kg(s,null,i,1,a??null,m,!1,_,T),i[zi]=s.current,$o(i),f)for(i=0;i<f.length;i++)a=f[i],m=a._getVersion,m=m(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,m]:s.mutableSourceEagerHydrationData.push(a,m);return new ql(s)},kn.render=function(i,s,a){if(!$l(s))throw Error(t(200));return Kl(null,i,s,!1,a)},kn.unmountComponentAtNode=function(i){if(!$l(i))throw Error(t(40));return i._reactRootContainer?(ns(function(){Kl(null,null,i,!1,function(){i._reactRootContainer=null,i[zi]=null})}),!0):!1},kn.unstable_batchedUpdates=Mf,kn.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!$l(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Kl(i,s,a,!1,f)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var $g;function cM(){if($g)return Uf.exports;$g=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Uf.exports=uM(),Uf.exports}var Kg;function fM(){if(Kg)return Ql;Kg=1;var n=cM();return Ql.createRoot=n.createRoot,Ql.hydrateRoot=n.hydrateRoot,Ql}var dM=fM();const hM=p_(dM),Ch=Le.createContext({});function Rh(n){const e=Le.useRef(null);return e.current===null&&(e.current=n()),e.current}const Hu=Le.createContext(null),Ph=Le.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class pM extends Le.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function mM({children:n,isPresent:e}){const t=Le.useId(),r=Le.useRef(null),o=Le.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=Le.useContext(Ph);return Le.useInsertionEffect(()=>{const{width:u,height:c,top:d,left:h}=o.current;if(e||!r.current||!u||!c)return;r.current.dataset.motionPopId=t;const p=document.createElement("style");return l&&(p.nonce=l),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),xe.jsx(pM,{isPresent:e,childRef:r,sizeRef:o,children:Le.cloneElement(n,{ref:r})})}const gM=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:u})=>{const c=Rh(vM),d=Le.useId(),h=Le.useCallback(g=>{c.set(g,!0);for(const v of c.values())if(!v)return;r&&r()},[c,r]),p=Le.useMemo(()=>({id:d,initial:e,isPresent:t,custom:o,onExitComplete:h,register:g=>(c.set(g,!1),()=>c.delete(g))}),l?[Math.random(),h]:[t,h]);return Le.useMemo(()=>{c.forEach((g,v)=>c.set(v,!1))},[t]),Le.useEffect(()=>{!t&&!c.size&&r&&r()},[t]),u==="popLayout"&&(n=xe.jsx(mM,{isPresent:t,children:n})),xe.jsx(Hu.Provider,{value:p,children:n})};function vM(){return new Map}function m_(n=!0){const e=Le.useContext(Hu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Le.useId();Le.useEffect(()=>{n&&o(l)},[n]);const u=Le.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const Jl=n=>n.key||"";function Zg(n){const e=[];return Le.Children.forEach(n,t=>{Le.isValidElement(t)&&e.push(t)}),e}const bh=typeof window<"u",g_=bh?Le.useLayoutEffect:Le.useEffect,_M=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:u=!1})=>{const[c,d]=m_(u),h=Le.useMemo(()=>Zg(n),[n]),p=u&&!c?[]:h.map(Jl),g=Le.useRef(!0),v=Le.useRef(h),S=Rh(()=>new Map),[M,E]=Le.useState(h),[x,y]=Le.useState(h);g_(()=>{g.current=!1,v.current=h;for(let A=0;A<x.length;A++){const k=Jl(x[A]);p.includes(k)?S.delete(k):S.get(k)!==!0&&S.set(k,!1)}},[x,p.length,p.join("-")]);const L=[];if(h!==M){let A=[...h];for(let k=0;k<x.length;k++){const U=x[k],N=Jl(U);p.includes(N)||(A.splice(k,0,U),L.push(U))}l==="wait"&&L.length&&(A=L),y(Zg(A)),E(h);return}const{forceRender:P}=Le.useContext(Ch);return xe.jsx(xe.Fragment,{children:x.map(A=>{const k=Jl(A),U=u&&!c?!1:h===x||p.includes(k),N=()=>{if(S.has(k))S.set(k,!0);else return;let O=!0;S.forEach(b=>{b||(O=!1)}),O&&(P==null||P(),y(v.current),u&&(d==null||d()),r&&r())};return xe.jsx(gM,{isPresent:U,initial:!g.current||t?void 0:!1,custom:U?void 0:e,presenceAffectsLayout:o,mode:l,onExitComplete:U?void 0:N,children:A},k)})})},Yn=n=>n;let v_=Yn;function Lh(n){let e;return()=>(e===void 0&&(e=n()),e)}const So=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},ir=n=>n*1e3,rr=n=>n/1e3,yM={useManualTiming:!1};function xM(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,p=!1,g=!1)=>{const S=g&&r?e:t;return p&&l.add(h),S.has(h)||S.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(c),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const eu=["read","resolveKeyframes","update","preRender","render","postRender"],SM=40;function __(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=eu.reduce((y,L)=>(y[L]=xM(l),y),{}),{read:c,resolveKeyframes:d,update:h,preRender:p,render:g,postRender:v}=u,S=()=>{const y=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(y-o.timestamp,SM),1),o.timestamp=y,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),p.process(o),g.process(o),v.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(S))},M=()=>{t=!0,r=!0,o.isProcessing||n(S)};return{schedule:eu.reduce((y,L)=>{const P=u[L];return y[L]=(A,k=!1,U=!1)=>(t||M(),P.schedule(A,k,U)),y},{}),cancel:y=>{for(let L=0;L<eu.length;L++)u[eu[L]].cancel(y)},state:o,steps:u}}const{schedule:kt,cancel:zr,state:cn,steps:Of}=__(typeof requestAnimationFrame<"u"?requestAnimationFrame:Yn,!0),y_=Le.createContext({strict:!1}),Qg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Mo={};for(const n in Qg)Mo[n]={isEnabled:e=>Qg[n].some(t=>!!e[t])};function MM(n){for(const e in n)Mo[e]={...Mo[e],...n[e]}}const EM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Uu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||EM.has(n)}let x_=n=>!Uu(n);function TM(n){n&&(x_=e=>e.startsWith("on")?!Uu(e):n(e))}try{TM(require("@emotion/is-prop-valid").default)}catch{}function wM(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(x_(o)||t===!0&&Uu(o)||!e&&!Uu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function AM(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Gu=Le.createContext({});function ba(n){return typeof n=="string"||Array.isArray(n)}function Wu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Dh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ih=["initial",...Dh];function Xu(n){return Wu(n.animate)||Ih.some(e=>ba(n[e]))}function S_(n){return!!(Xu(n)||n.variants)}function CM(n,e){if(Xu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||ba(t)?t:void 0,animate:ba(r)?r:void 0}}return n.inherit!==!1?e:{}}function RM(n){const{initial:e,animate:t}=CM(n,Le.useContext(Gu));return Le.useMemo(()=>({initial:e,animate:t}),[Jg(e),Jg(t)])}function Jg(n){return Array.isArray(n)?n.join(" "):n}const PM=Symbol.for("motionComponentSymbol");function fo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function bM(n,e,t){return Le.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):fo(t)&&(t.current=r))},[e])}const Uh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),LM="framerAppearId",M_="data-"+Uh(LM),{schedule:Nh}=__(queueMicrotask,!1),E_=Le.createContext({});function DM(n,e,t,r,o){var l,u;const{visualElement:c}=Le.useContext(Gu),d=Le.useContext(y_),h=Le.useContext(Hu),p=Le.useContext(Ph).reducedMotion,g=Le.useRef(null);r=r||d.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const v=g.current,S=Le.useContext(E_);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&IM(g.current,t,o,S);const M=Le.useRef(!1);Le.useInsertionEffect(()=>{v&&M.current&&v.update(t,h)});const E=t[M_],x=Le.useRef(!!E&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,E))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,E)));return g_(()=>{v&&(M.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),Nh.render(v.render),x.current&&v.animationState&&v.animationState.animateChanges())}),Le.useEffect(()=>{v&&(!x.current&&v.animationState&&v.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,E)}),x.current=!1))}),v}function IM(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:T_(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&fo(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function T_(n){if(n)return n.options.allowProjection!==!1?n.projection:T_(n.parent)}function UM({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,u;n&&MM(n);function c(h,p){let g;const v={...Le.useContext(Ph),...h,layoutId:NM(h)},{isStatic:S}=v,M=RM(h),E=r(h,S);if(!S&&bh){FM();const x=OM(v);g=x.MeasureLayout,M.visualElement=DM(o,E,v,e,x.ProjectionNode)}return xe.jsxs(Gu.Provider,{value:M,children:[g&&M.visualElement?xe.jsx(g,{visualElement:M.visualElement,...v}):null,t(o,h,bM(E,M.visualElement,p),E,S,M.visualElement)]})}c.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const d=Le.forwardRef(c);return d[PM]=o,d}function NM({layoutId:n}){const e=Le.useContext(Ch).id;return e&&n!==void 0?e+"-"+n:n}function FM(n,e){Le.useContext(y_).strict}function OM(n){const{drag:e,layout:t}=Mo;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const kM=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Fh(n){return typeof n!="string"||n.includes("-")?!1:!!(kM.indexOf(n)>-1||/[A-Z]/u.test(n))}function ev(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Oh(n,e,t,r){if(typeof e=="function"){const[o,l]=ev(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=ev(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const Td=n=>Array.isArray(n),BM=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),zM=n=>Td(n)?n[n.length-1]||0:n,Sn=n=>!!(n&&n.getVelocity);function wu(n){const e=Sn(n)?n.get():n;return BM(e)?e.toValue():e}function VM({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const u={latestValues:HM(r,o,l,n),renderState:e()};return t&&(u.onMount=c=>t({props:r,current:c,...u}),u.onUpdate=c=>t(c)),u}const w_=n=>(e,t)=>{const r=Le.useContext(Gu),o=Le.useContext(Hu),l=()=>VM(n,e,r,o);return t?l():Rh(l)};function HM(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=wu(l[v]);let{initial:u,animate:c}=n;const d=Xu(n),h=S_(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let p=t?t.initial===!1:!1;p=p||u===!1;const g=p?c:u;if(g&&typeof g!="boolean"&&!Wu(g)){const v=Array.isArray(g)?g:[g];for(let S=0;S<v.length;S++){const M=Oh(n,v[S]);if(M){const{transitionEnd:E,transition:x,...y}=M;for(const L in y){let P=y[L];if(Array.isArray(P)){const A=p?P.length-1:0;P=P[A]}P!==null&&(o[L]=P)}for(const L in E)o[L]=E[L]}}}return o}const bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ws=new Set(bo),A_=n=>e=>typeof e=="string"&&e.startsWith(n),C_=A_("--"),GM=A_("var(--"),kh=n=>GM(n)?WM.test(n.split("/*")[0].trim()):!1,WM=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,R_=(n,e)=>e&&typeof n=="number"?e.transform(n):n,or=(n,e,t)=>t>e?e:t<n?n:t,Lo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},La={...Lo,transform:n=>or(0,1,n)},tu={...Lo,default:1},ka=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Fr=ka("deg"),Ii=ka("%"),et=ka("px"),XM=ka("vh"),jM=ka("vw"),tv={...Ii,parse:n=>Ii.parse(n)/100,transform:n=>Ii.transform(n*100)},YM={borderWidth:et,borderTopWidth:et,borderRightWidth:et,borderBottomWidth:et,borderLeftWidth:et,borderRadius:et,radius:et,borderTopLeftRadius:et,borderTopRightRadius:et,borderBottomRightRadius:et,borderBottomLeftRadius:et,width:et,maxWidth:et,height:et,maxHeight:et,top:et,right:et,bottom:et,left:et,padding:et,paddingTop:et,paddingRight:et,paddingBottom:et,paddingLeft:et,margin:et,marginTop:et,marginRight:et,marginBottom:et,marginLeft:et,backgroundPositionX:et,backgroundPositionY:et},qM={rotate:Fr,rotateX:Fr,rotateY:Fr,rotateZ:Fr,scale:tu,scaleX:tu,scaleY:tu,scaleZ:tu,skew:Fr,skewX:Fr,skewY:Fr,distance:et,translateX:et,translateY:et,translateZ:et,x:et,y:et,z:et,perspective:et,transformPerspective:et,opacity:La,originX:tv,originY:tv,originZ:et},nv={...Lo,transform:Math.round},Bh={...YM,...qM,zIndex:nv,size:et,fillOpacity:La,strokeOpacity:La,numOctaves:nv},$M={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},KM=bo.length;function ZM(n,e,t){let r="",o=!0;for(let l=0;l<KM;l++){const u=bo[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=R_(c,Bh[u]);if(!d){o=!1;const p=$M[u]||u;r+=`${p}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function zh(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(ws.has(d)){u=!0;continue}else if(C_(d)){o[d]=h;continue}else{const p=R_(h,Bh[d]);d.startsWith("origin")?(c=!0,l[d]=p):r[d]=p}}if(e.transform||(u||t?r.transform=ZM(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:p=0}=l;r.transformOrigin=`${d} ${h} ${p}`}}const QM={offset:"stroke-dashoffset",array:"stroke-dasharray"},JM={offset:"strokeDashoffset",array:"strokeDasharray"};function eE(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?QM:JM;n[l.offset]=et.transform(-r);const u=et.transform(e),c=et.transform(t);n[l.array]=`${u} ${c}`}function iv(n,e,t){return typeof n=="string"?n:et.transform(e+t*n)}function tE(n,e,t){const r=iv(e,n.x,n.width),o=iv(t,n.y,n.height);return`${r} ${o}`}function Vh(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...h},p,g){if(zh(n,h,g),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:S,dimensions:M}=n;v.transform&&(M&&(S.transform=v.transform),delete v.transform),M&&(o!==void 0||l!==void 0||S.transform)&&(S.transformOrigin=tE(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),u!==void 0&&eE(v,u,c,d,!1)}const Hh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),P_=()=>({...Hh(),attrs:{}}),Gh=n=>typeof n=="string"&&n.toLowerCase()==="svg";function b_(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const L_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function D_(n,e,t,r){b_(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(L_.has(o)?o:Uh(o),e.attrs[o])}const Nu={};function nE(n){Object.assign(Nu,n)}function I_(n,{layout:e,layoutId:t}){return ws.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Nu[n]||n==="opacity")}function Wh(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(Sn(o[u])||e.style&&Sn(e.style[u])||I_(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function U_(n,e,t){const r=Wh(n,e,t);for(const o in n)if(Sn(n[o])||Sn(e[o])){const l=bo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function iE(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const rv=["x","y","width","height","cx","cy","r"],rE={useVisualState:w_({scrapeMotionValuesFromProps:U_,createRenderState:P_,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const c in o)if(ws.has(c)){l=!0;break}}if(!l)return;let u=!e;if(e)for(let c=0;c<rv.length;c++){const d=rv[c];n[d]!==e[d]&&(u=!0)}u&&kt.read(()=>{iE(t,r),kt.render(()=>{Vh(r,o,Gh(t.tagName),n.transformTemplate),D_(t,r)})})}})},sE={useVisualState:w_({scrapeMotionValuesFromProps:Wh,createRenderState:Hh})};function N_(n,e,t){for(const r in e)!Sn(e[r])&&!I_(r,t)&&(n[r]=e[r])}function oE({transformTemplate:n},e){return Le.useMemo(()=>{const t=Hh();return zh(t,e,n),Object.assign({},t.vars,t.style)},[e])}function aE(n,e){const t=n.style||{},r={};return N_(r,t,n),Object.assign(r,oE(n,e)),r}function lE(n,e){const t={},r=aE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function uE(n,e,t,r){const o=Le.useMemo(()=>{const l=P_();return Vh(l,e,Gh(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};N_(l,n.style,n),o.style={...l,...o.style}}return o}function cE(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(Fh(t)?uE:lE)(r,l,u,t),h=wM(r,typeof t=="string",n),p=t!==Le.Fragment?{...h,...d,ref:o}:{},{children:g}=r,v=Le.useMemo(()=>Sn(g)?g.get():g,[g]);return Le.createElement(t,{...p,children:v})}}function fE(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Fh(r)?rE:sE,preloadedFeatures:n,useRender:cE(o),createVisualElement:e,Component:r};return UM(u)}}function F_(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function ju(n,e,t){const r=n.getProps();return Oh(r,e,t!==void 0?t:r.custom,n)}const dE=Lh(()=>window.ScrollTimeline!==void 0);class hE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(dE()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class pE extends hE{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function Xh(n,e){return n?n[e]||n.default||n:void 0}const wd=2e4;function O_(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<wd;)e+=t,r=n.next(e);return e>=wd?1/0:e}function jh(n){return typeof n=="function"}function sv(n,e){n.timeline=e,n.onfinish=null}const Yh=n=>Array.isArray(n)&&typeof n[0]=="number",mE={linearEasing:void 0};function gE(n,e){const t=Lh(n);return()=>{var r;return(r=mE[e])!==null&&r!==void 0?r:t()}}const Fu=gE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),k_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(So(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function B_(n){return!!(typeof n=="function"&&Fu()||!n||typeof n=="string"&&(n in Ad||Fu())||Yh(n)||Array.isArray(n)&&n.every(B_))}const ya=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Ad={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ya([0,.65,.55,1]),circOut:ya([.55,0,1,.45]),backIn:ya([.31,.01,.66,-.59]),backOut:ya([.33,1.53,.69,.99])};function z_(n,e){if(n)return typeof n=="function"&&Fu()?k_(n,e):Yh(n)?ya(n):Array.isArray(n)?n.map(t=>z_(t,e)||Ad.easeOut):Ad[n]}const xi={x:!1,y:!1};function V_(){return xi.x||xi.y}function vE(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function H_(n,e){const t=vE(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function ov(n){return e=>{e.pointerType==="touch"||V_()||n(e)}}function _E(n,e,t={}){const[r,o,l]=H_(n,t),u=ov(c=>{const{target:d}=c,h=e(c);if(typeof h!="function"||!d)return;const p=ov(g=>{h(g),d.removeEventListener("pointerleave",p)});d.addEventListener("pointerleave",p,o)});return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const G_=(n,e)=>e?n===e?!0:G_(n,e.parentElement):!1,qh=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,yE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function xE(n){return yE.has(n.tagName)||n.tabIndex!==-1}const xa=new WeakSet;function av(n){return e=>{e.key==="Enter"&&n(e)}}function kf(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const SE=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=av(()=>{if(xa.has(t))return;kf(t,"down");const o=av(()=>{kf(t,"up")}),l=()=>kf(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function lv(n){return qh(n)&&!V_()}function ME(n,e,t={}){const[r,o,l]=H_(n,t),u=c=>{const d=c.currentTarget;if(!lv(c)||xa.has(d))return;xa.add(d);const h=e(c),p=(S,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),!(!lv(S)||!xa.has(d))&&(xa.delete(d),typeof h=="function"&&h(S,{success:M}))},g=S=>{p(S,t.useGlobalTarget||G_(d,S.target))},v=S=>{p(S,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(c=>{!xE(c)&&c.getAttribute("tabindex")===null&&(c.tabIndex=0),(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),c.addEventListener("focus",h=>SE(h,o),o)}),l}function EE(n){return n==="x"||n==="y"?xi[n]?null:(xi[n]=!0,()=>{xi[n]=!1}):xi.x||xi.y?null:(xi.x=xi.y=!0,()=>{xi.x=xi.y=!1})}const W_=new Set(["width","height","top","left","right","bottom",...bo]);let Au;function TE(){Au=void 0}const Ui={now:()=>(Au===void 0&&Ui.set(cn.isProcessing||yM.useManualTiming?cn.timestamp:performance.now()),Au),set:n=>{Au=n,queueMicrotask(TE)}};function $h(n,e){n.indexOf(e)===-1&&n.push(e)}function Kh(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Zh{constructor(){this.subscriptions=[]}add(e){return $h(this.subscriptions,e),()=>Kh(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function X_(n,e){return e?n*(1e3/e):0}const uv=30,wE=n=>!isNaN(parseFloat(n));class AE{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=Ui.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ui.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=wE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Zh);const r=this.events[e].add(t);return e==="change"?()=>{r(),kt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ui.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>uv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,uv);return X_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Da(n,e){return new AE(n,e)}function CE(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Da(t))}function RE(n,e){const t=ju(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const c=zM(l[u]);CE(n,u,c)}}function PE(n){return!!(Sn(n)&&n.add)}function Cd(n,e){const t=n.getValue("willChange");if(PE(t))return t.add(e)}function j_(n){return n.props[M_]}const Y_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,bE=1e-7,LE=12;function DE(n,e,t,r,o){let l,u,c=0;do u=e+(t-e)/2,l=Y_(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>bE&&++c<LE);return u}function Ba(n,e,t,r){if(n===e&&t===r)return Yn;const o=l=>DE(l,0,1,n,t);return l=>l===0||l===1?l:Y_(o(l),e,r)}const q_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,$_=n=>e=>1-n(1-e),K_=Ba(.33,1.53,.69,.99),Qh=$_(K_),Z_=q_(Qh),Q_=n=>(n*=2)<1?.5*Qh(n):.5*(2-Math.pow(2,-10*(n-1))),Jh=n=>1-Math.sin(Math.acos(n)),J_=$_(Jh),ey=q_(Jh),ty=n=>/^0[^.\s]+$/u.test(n);function IE(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||ty(n):!0}const Ta=n=>Math.round(n*1e5)/1e5,ep=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function UE(n){return n==null}const NE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,tp=(n,e)=>t=>!!(typeof t=="string"&&NE.test(t)&&t.startsWith(n)||e&&!UE(t)&&Object.prototype.hasOwnProperty.call(t,e)),ny=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,c]=r.match(ep);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},FE=n=>or(0,255,n),Bf={...Lo,transform:n=>Math.round(FE(n))},ys={test:tp("rgb","red"),parse:ny("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Bf.transform(n)+", "+Bf.transform(e)+", "+Bf.transform(t)+", "+Ta(La.transform(r))+")"};function OE(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Rd={test:tp("#"),parse:OE,transform:ys.transform},ho={test:tp("hsl","hue"),parse:ny("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Ii.transform(Ta(e))+", "+Ii.transform(Ta(t))+", "+Ta(La.transform(r))+")"},yn={test:n=>ys.test(n)||Rd.test(n)||ho.test(n),parse:n=>ys.test(n)?ys.parse(n):ho.test(n)?ho.parse(n):Rd.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ys.transform(n):ho.transform(n)},kE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function BE(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(ep))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(kE))===null||t===void 0?void 0:t.length)||0)>0}const iy="number",ry="color",zE="var",VE="var(",cv="${}",HE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ia(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(HE,d=>(yn.test(d)?(r.color.push(l),o.push(ry),t.push(yn.parse(d))):d.startsWith(VE)?(r.var.push(l),o.push(zE),t.push(d)):(r.number.push(l),o.push(iy),t.push(parseFloat(d))),++l,cv)).split(cv);return{values:t,split:c,indexes:r,types:o}}function sy(n){return Ia(n).values}function oy(n){const{split:e,types:t}=Ia(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===iy?l+=Ta(o[u]):c===ry?l+=yn.transform(o[u]):l+=o[u]}return l}}const GE=n=>typeof n=="number"?0:n;function WE(n){const e=sy(n);return oy(n)(e.map(GE))}const Vr={test:BE,parse:sy,createTransformer:oy,getAnimatableNone:WE},XE=new Set(["brightness","contrast","saturate","opacity"]);function jE(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(ep)||[];if(!r)return n;const o=t.replace(r,"");let l=XE.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const YE=/\b([a-z-]*)\(.*?\)/gu,Pd={...Vr,getAnimatableNone:n=>{const e=n.match(YE);return e?e.map(jE).join(" "):n}},qE={...Bh,color:yn,backgroundColor:yn,outlineColor:yn,fill:yn,stroke:yn,borderColor:yn,borderTopColor:yn,borderRightColor:yn,borderBottomColor:yn,borderLeftColor:yn,filter:Pd,WebkitFilter:Pd},np=n=>qE[n];function ay(n,e){let t=np(n);return t!==Pd&&(t=Vr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const $E=new Set(["auto","none","0"]);function KE(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!$E.has(l)&&Ia(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=ay(t,o)}const fv=n=>n===Lo||n===et,dv=(n,e)=>parseFloat(n.split(", ")[e]),hv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return dv(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?dv(l[1],n):0}},ZE=new Set(["x","y","z"]),QE=bo.filter(n=>!ZE.has(n));function JE(n){const e=[];return QE.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Eo={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:hv(4,13),y:hv(5,14)};Eo.translateX=Eo.x;Eo.translateY=Eo.y;const Ms=new Set;let bd=!1,Ld=!1;function ly(){if(Ld){const n=Array.from(Ms).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=JE(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var c;(c=r.getValue(l))===null||c===void 0||c.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ld=!1,bd=!1,Ms.forEach(n=>n.complete()),Ms.clear()}function uy(){Ms.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Ld=!0)})}function eT(){uy(),ly()}class ip{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ms.add(this),bd||(bd=!0,kt.read(uy),kt.resolveKeyframes(ly))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o==null?void 0:o.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ms.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ms.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const cy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),tT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function nT(n){const e=tT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function fy(n,e,t=1){const[r,o]=nT(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return cy(u)?parseFloat(u):u}return kh(o)?fy(o,e,t+1):o}const dy=n=>e=>e.test(n),iT={test:n=>n==="auto",parse:n=>n},hy=[Lo,et,Ii,Fr,jM,XM,iT],pv=n=>hy.find(dy(n));class py extends ip{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),kh(h))){const p=fy(h,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!W_.has(r)||e.length!==2)return;const[o,l]=e,u=pv(o),c=pv(l);if(u!==c)if(fv(u)&&fv(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)IE(e[o])&&r.push(o);r.length&&KE(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Eo[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=Eo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const mv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Vr.test(n)||n==="0")&&!n.startsWith("url("));function rT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function sT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=mv(o,e),c=mv(l,e);return!u||!c?!1:rT(n)||(t==="spring"||jh(t))&&r}const oT=n=>n!==null;function Yu(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(oT),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const aT=40;class my{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ui.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>aT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&eT(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ui.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:c,onUpdate:d,isGenerator:h}=this.options;if(!h&&!sT(e,r,o,l))if(u)this.options.duration=0;else{d&&d(Yu(e,this.options,t)),c&&c(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Ht=(n,e,t)=>n+(e-n)*t;function zf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function lT({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=zf(d,c,n+1/3),l=zf(d,c,n),u=zf(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Ou(n,e){return t=>t>0?e:n}const Vf=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},uT=[Rd,ys,ho],cT=n=>uT.find(e=>e.test(n));function gv(n){const e=cT(n);if(!e)return!1;let t=e.parse(n);return e===ho&&(t=lT(t)),t}const vv=(n,e)=>{const t=gv(n),r=gv(e);if(!t||!r)return Ou(n,e);const o={...t};return l=>(o.red=Vf(t.red,r.red,l),o.green=Vf(t.green,r.green,l),o.blue=Vf(t.blue,r.blue,l),o.alpha=Ht(t.alpha,r.alpha,l),ys.transform(o))},fT=(n,e)=>t=>e(n(t)),za=(...n)=>n.reduce(fT),Dd=new Set(["none","hidden"]);function dT(n,e){return Dd.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function hT(n,e){return t=>Ht(n,e,t)}function rp(n){return typeof n=="number"?hT:typeof n=="string"?kh(n)?Ou:yn.test(n)?vv:gT:Array.isArray(n)?gy:typeof n=="object"?yn.test(n)?vv:pT:Ou}function gy(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>rp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function pT(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=rp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function mT(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],c=n.indexes[u][o[u]],d=(t=n.values[c])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const gT=(n,e)=>{const t=Vr.createTransformer(e),r=Ia(n),o=Ia(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Dd.has(n)&&!o.values.length||Dd.has(e)&&!r.values.length?dT(n,e):za(gy(mT(r,o),o.values),t):Ou(n,e)};function vy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Ht(n,e,t):rp(n)(n,e)}const vT=5;function _y(n,e,t){const r=Math.max(e-vT,0);return X_(t-n(r),e-r)}const Wt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Hf=.001;function _T({duration:n=Wt.duration,bounce:e=Wt.bounce,velocity:t=Wt.velocity,mass:r=Wt.mass}){let o,l,u=1-e;u=or(Wt.minDamping,Wt.maxDamping,u),n=or(Wt.minDuration,Wt.maxDuration,rr(n)),u<1?(o=h=>{const p=h*u,g=p*n,v=p-t,S=Id(h,u),M=Math.exp(-g);return Hf-v/S*M},l=h=>{const g=h*u*n,v=g*t+t,S=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-g),E=Id(Math.pow(h,2),u);return(-o(h)+Hf>0?-1:1)*((v-S)*M)/E}):(o=h=>{const p=Math.exp(-h*n),g=(h-t)*n+1;return-Hf+p*g},l=h=>{const p=Math.exp(-h*n),g=(t-h)*(n*n);return p*g});const c=5/n,d=xT(o,l,c);if(n=ir(n),isNaN(d))return{stiffness:Wt.stiffness,damping:Wt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const yT=12;function xT(n,e,t){let r=t;for(let o=1;o<yT;o++)r=r-n(r)/e(r);return r}function Id(n,e){return n*Math.sqrt(1-e*e)}const ST=["duration","bounce"],MT=["stiffness","damping","mass"];function _v(n,e){return e.some(t=>n[t]!==void 0)}function ET(n){let e={velocity:Wt.velocity,stiffness:Wt.stiffness,damping:Wt.damping,mass:Wt.mass,isResolvedFromDuration:!1,...n};if(!_v(n,MT)&&_v(n,ST))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*or(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Wt.mass,stiffness:o,damping:l}}else{const t=_T(n);e={...e,...t,mass:Wt.mass},e.isResolvedFromDuration=!0}return e}function yy(n=Wt.visualDuration,e=Wt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:p,duration:g,velocity:v,isResolvedFromDuration:S}=ET({...t,velocity:-rr(t.velocity||0)}),M=v||0,E=h/(2*Math.sqrt(d*p)),x=u-l,y=rr(Math.sqrt(d/p)),L=Math.abs(x)<5;r||(r=L?Wt.restSpeed.granular:Wt.restSpeed.default),o||(o=L?Wt.restDelta.granular:Wt.restDelta.default);let P;if(E<1){const k=Id(y,E);P=U=>{const N=Math.exp(-E*y*U);return u-N*((M+E*y*x)/k*Math.sin(k*U)+x*Math.cos(k*U))}}else if(E===1)P=k=>u-Math.exp(-y*k)*(x+(M+y*x)*k);else{const k=y*Math.sqrt(E*E-1);P=U=>{const N=Math.exp(-E*y*U),O=Math.min(k*U,300);return u-N*((M+E*y*x)*Math.sinh(O)+k*x*Math.cosh(O))/k}}const A={calculatedDuration:S&&g||null,next:k=>{const U=P(k);if(S)c.done=k>=g;else{let N=0;E<1&&(N=k===0?ir(M):_y(P,k,U));const O=Math.abs(N)<=r,b=Math.abs(u-U)<=o;c.done=O&&b}return c.value=c.done?u:U,c},toString:()=>{const k=Math.min(O_(A),wd),U=k_(N=>A.next(k*N).value,k,30);return k+"ms "+U}};return A}function yv({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:p}){const g=n[0],v={done:!1,value:g},S=O=>c!==void 0&&O<c||d!==void 0&&O>d,M=O=>c===void 0?d:d===void 0||Math.abs(c-O)<Math.abs(d-O)?c:d;let E=t*e;const x=g+E,y=u===void 0?x:u(x);y!==x&&(E=y-g);const L=O=>-E*Math.exp(-O/r),P=O=>y+L(O),A=O=>{const b=L(O),R=P(O);v.done=Math.abs(b)<=h,v.value=v.done?y:R};let k,U;const N=O=>{S(v.value)&&(k=O,U=yy({keyframes:[v.value,M(v.value)],velocity:_y(P,O,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:p}))};return N(0),{calculatedDuration:null,next:O=>{let b=!1;return!U&&k===void 0&&(b=!0,A(O),N(O)),k!==void 0&&O>=k?U.next(O-k):(!b&&A(O),v)}}}const TT=Ba(.42,0,1,1),wT=Ba(0,0,.58,1),xy=Ba(.42,0,.58,1),AT=n=>Array.isArray(n)&&typeof n[0]!="number",CT={linear:Yn,easeIn:TT,easeInOut:xy,easeOut:wT,circIn:Jh,circInOut:ey,circOut:J_,backIn:Qh,backInOut:Z_,backOut:K_,anticipate:Q_},xv=n=>{if(Yh(n)){v_(n.length===4);const[e,t,r,o]=n;return Ba(e,t,r,o)}else if(typeof n=="string")return CT[n];return n};function RT(n,e,t){const r=[],o=t||vy,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||Yn:e;c=za(d,c)}r.push(c)}return r}function PT(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(v_(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=RT(e,r,o),d=c.length,h=p=>{if(u&&p<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(p<n[g+1]);g++);const v=So(n[g],n[g+1],p);return c[g](v)};return t?p=>h(or(n[0],n[l-1],p)):h}function bT(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=So(0,e,r);n.push(Ht(t,1,o))}}function LT(n){const e=[0];return bT(e,n.length-1),e}function DT(n,e){return n.map(t=>t*e)}function IT(n,e){return n.map(()=>e||xy).splice(0,n.length-1)}function ku({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=AT(r)?r.map(xv):xv(r),l={done:!1,value:e[0]},u=DT(t&&t.length===e.length?t:LT(e),n),c=PT(u,e,{ease:Array.isArray(o)?o:IT(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const UT=n=>{const e=({timestamp:t})=>n(t);return{start:()=>kt.update(e,!0),stop:()=>zr(e),now:()=>cn.isProcessing?cn.timestamp:Ui.now()}},NT={decay:yv,inertia:yv,tween:ku,keyframes:ku,spring:yy},FT=n=>n/100;class sp extends my{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=(o==null?void 0:o.KeyframeResolver)||ip,c=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,c,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,c=jh(t)?t:NT[t]||ku;let d,h;c!==ku&&typeof e[0]!="number"&&(d=za(FT,vy(e[0],e[1])),e=[0,100]);const p=c({...this.options,keyframes:e});l==="mirror"&&(h=c({...this.options,keyframes:[...e].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=O_(p));const{calculatedDuration:g}=p,v=g+o,S=v*(r+1)-o;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:g,resolvedDuration:v,totalDuration:S}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:O}=this.options;return{done:!0,value:O[O.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:c,keyframes:d,calculatedDuration:h,totalDuration:p,resolvedDuration:g}=r;if(this.startTime===null)return l.next(0);const{delay:v,repeat:S,repeatType:M,repeatDelay:E,onUpdate:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-v*(this.speed>=0?1:-1),L=this.speed>=0?y<0:y>p;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let P=this.currentTime,A=l;if(S){const O=Math.min(this.currentTime,p)/g;let b=Math.floor(O),R=O%1;!R&&O>=1&&(R=1),R===1&&b--,b=Math.min(b,S+1),!!(b%2)&&(M==="reverse"?(R=1-R,E&&(R-=E/g)):M==="mirror"&&(A=u)),P=or(0,1,R)*g}const k=L?{done:!1,value:d[0]}:A.next(P);c&&(k.value=c(k.value));let{done:U}=k;!L&&h!==null&&(U=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const N=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&U);return N&&o!==void 0&&(k.value=Yu(d,this.options,o)),x&&x(k.value),N&&this.finish(),k}get duration(){const{resolved:e}=this;return e?rr(e.calculatedDuration):0}get time(){return rr(this.currentTime)}set time(e){e=ir(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=rr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=UT,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const OT=new Set(["opacity","clipPath","filter","transform"]);function kT(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const p=z_(c,o);return Array.isArray(p)&&(h.easing=p),n.animate(h,{delay:r,duration:o,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const BT=Lh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Bu=10,zT=2e4;function VT(n){return jh(n.type)||n.type==="spring"||!B_(n.ease)}function HT(n,e){const t=new sp({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<zT;)r=t.sample(l),o.push(r.value),l+=Bu;return{times:void 0,keyframes:o,duration:l-Bu,ease:"linear"}}const Sy={anticipate:Q_,backInOut:Z_,circInOut:ey};function GT(n){return n in Sy}class Sv extends my{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new py(l,(u,c)=>this.onKeyframesResolved(u,c),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:u,motionValue:c,name:d,startTime:h}=this.options;if(!c.owner||!c.owner.current)return!1;if(typeof l=="string"&&Fu()&&GT(l)&&(l=Sy[l]),VT(this.options)){const{onComplete:g,onUpdate:v,motionValue:S,element:M,...E}=this.options,x=HT(e,E);e=x.keyframes,e.length===1&&(e[1]=e[0]),r=x.duration,o=x.times,l=x.ease,u="keyframes"}const p=kT(c.owner.current,d,e,{...this.options,duration:r,times:o,ease:l});return p.startTime=h??this.calcStartTime(),this.pendingTimeline?(sv(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:g}=this.options;c.set(Yu(e,this.options,t)),g&&g(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:r,times:o,type:u,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return rr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return rr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=ir(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Yn;const{animation:r}=t;sv(r,e)}return Yn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:c}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:g,element:v,...S}=this.options,M=new sp({...S,keyframes:r,duration:o,type:l,ease:u,times:c,isGenerator:!0}),E=ir(this.time);h.setWithVelocity(M.sample(E-Bu).value,M.sample(E).value,Bu)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:c}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return BT()&&r&&OT.has(r)&&!d&&!h&&!o&&l!=="mirror"&&u!==0&&c!=="inertia"}}const WT={type:"spring",stiffness:500,damping:25,restSpeed:10},XT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),jT={type:"keyframes",duration:.8},YT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},qT=(n,{keyframes:e})=>e.length>2?jT:ws.has(n)?n.startsWith("scale")?XT(e[1]):WT:YT;function $T({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const op=(n,e,t,r={},o,l)=>u=>{const c=Xh(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-ir(d);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:v=>{e.set(v),c.onUpdate&&c.onUpdate(v)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};$T(c)||(p={...p,...qT(n,p)}),p.duration&&(p.duration=ir(p.duration)),p.repeatDelay&&(p.repeatDelay=ir(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let g=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(g=!0)),g&&!l&&e.get()!==void 0){const v=Yu(p.keyframes,c);if(v!==void 0)return kt.update(()=>{p.onUpdate(v),p.onComplete()}),new pE([])}return!l&&Sv.supports(p)?new Sv(p):new sp(p)};function KT({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function My(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:c,...d}=e;r&&(u=r);const h=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const g in d){const v=n.getValue(g,(l=n.latestValues[g])!==null&&l!==void 0?l:null),S=d[g];if(S===void 0||p&&KT(p,g))continue;const M={delay:t,...Xh(u||{},g)};let E=!1;if(window.MotionHandoffAnimation){const y=j_(n);if(y){const L=window.MotionHandoffAnimation(y,g,kt);L!==null&&(M.startTime=L,E=!0)}}Cd(n,g),v.start(op(g,v,S,n.shouldReduceMotion&&W_.has(g)?{type:!1}:M,n,E));const x=v.animation;x&&h.push(x)}return c&&Promise.all(h).then(()=>{kt.update(()=>{c&&RE(n,c)})}),h}function Ud(n,e,t={}){var r;const o=ju(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(My(n,o,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:g,staggerDirection:v}=l;return ZT(n,e,p+h,g,v,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,p]=d==="beforeChildren"?[u,c]:[c,u];return h().then(()=>p())}else return Promise.all([u(),c(t.delay)])}function ZT(n,e,t=0,r=0,o=1,l){const u=[],c=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>c-h*r;return Array.from(n.variantChildren).sort(QT).forEach((h,p)=>{h.notify("AnimationStart",e),u.push(Ud(h,e,{...l,delay:t+d(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function QT(n,e){return n.sortNodePosition(e)}function JT(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Ud(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Ud(n,e,t);else{const o=typeof e=="function"?ju(n,e,t.custom):e;r=Promise.all(My(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const e1=Ih.length;function Ey(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Ey(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<e1;t++){const r=Ih[t],o=n.props[r];(ba(o)||o===!1)&&(e[r]=o)}return e}const t1=[...Dh].reverse(),n1=Dh.length;function i1(n){return e=>Promise.all(e.map(({animation:t,options:r})=>JT(n,t,r)))}function r1(n){let e=i1(n),t=Mv(),r=!0;const o=d=>(h,p)=>{var g;const v=ju(n,p,d==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(v){const{transition:S,transitionEnd:M,...E}=v;h={...h,...E,...M}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,p=Ey(n.parent)||{},g=[],v=new Set;let S={},M=1/0;for(let x=0;x<n1;x++){const y=t1[x],L=t[y],P=h[y]!==void 0?h[y]:p[y],A=ba(P),k=y===d?L.isActive:null;k===!1&&(M=x);let U=P===p[y]&&P!==h[y]&&A;if(U&&r&&n.manuallyAnimateOnMount&&(U=!1),L.protectedKeys={...S},!L.isActive&&k===null||!P&&!L.prevProp||Wu(P)||typeof P=="boolean")continue;const N=s1(L.prevProp,P);let O=N||y===d&&L.isActive&&!U&&A||x>M&&A,b=!1;const R=Array.isArray(P)?P:[P];let V=R.reduce(o(y),{});k===!1&&(V={});const{prevResolvedValues:le={}}=L,Z={...le,...V},te=re=>{O=!0,v.has(re)&&(b=!0,v.delete(re)),L.needsAnimating[re]=!0;const z=n.getValue(re);z&&(z.liveStyle=!1)};for(const re in Z){const z=V[re],ue=le[re];if(S.hasOwnProperty(re))continue;let se=!1;Td(z)&&Td(ue)?se=!F_(z,ue):se=z!==ue,se?z!=null?te(re):v.add(re):z!==void 0&&v.has(re)?te(re):L.protectedKeys[re]=!0}L.prevProp=P,L.prevResolvedValues=V,L.isActive&&(S={...S,...V}),r&&n.blockInitialAnimation&&(O=!1),O&&(!(U&&N)||b)&&g.push(...R.map(re=>({animation:re,options:{type:y}})))}if(v.size){const x={};v.forEach(y=>{const L=n.getBaseTarget(y),P=n.getValue(y);P&&(P.liveStyle=!0),x[y]=L??null}),g.push({animation:x})}let E=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(g):Promise.resolve()}function c(d,h){var p;if(t[d].isActive===h)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(v=>{var S;return(S=v.animationState)===null||S===void 0?void 0:S.setActive(d,h)}),t[d].isActive=h;const g=u(d);for(const v in t)t[v].protectedKeys={};return g}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=Mv(),r=!0}}}function s1(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!F_(e,n):!1}function os(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Mv(){return{animate:os(!0),whileInView:os(),whileHover:os(),whileTap:os(),whileDrag:os(),whileFocus:os(),exit:os()}}class Wr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class o1 extends Wr{constructor(e){super(e),e.animationState||(e.animationState=r1(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Wu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let a1=0;class l1 extends Wr{constructor(){super(...arguments),this.id=a1++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const u1={animation:{Feature:o1},exit:{Feature:l1}};function Ua(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Va(n){return{point:{x:n.pageX,y:n.pageY}}}const c1=n=>e=>qh(e)&&n(e,Va(e));function wa(n,e,t,r){return Ua(n,e,c1(t),r)}const Ev=(n,e)=>Math.abs(n-e);function f1(n,e){const t=Ev(n.x,e.x),r=Ev(n.y,e.y);return Math.sqrt(t**2+r**2)}class Ty{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Wf(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=f1(g.offset,{x:0,y:0})>=3;if(!v&&!S)return;const{point:M}=g,{timestamp:E}=cn;this.history.push({...M,timestamp:E});const{onStart:x,onMove:y}=this.handlers;v||(x&&x(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,g)},this.handlePointerMove=(g,v)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=Gf(v,this.transformPagePoint),kt.update(this.updatePoint,!0)},this.handlePointerUp=(g,v)=>{this.end();const{onEnd:S,onSessionEnd:M,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Wf(g.type==="pointercancel"?this.lastMoveEventInfo:Gf(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(g,x),M&&M(g,x)},!qh(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=Va(e),c=Gf(u,this.transformPagePoint),{point:d}=c,{timestamp:h}=cn;this.history=[{...d,timestamp:h}];const{onSessionStart:p}=t;p&&p(e,Wf(c,this.history)),this.removeListeners=za(wa(this.contextWindow,"pointermove",this.handlePointerMove),wa(this.contextWindow,"pointerup",this.handlePointerUp),wa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),zr(this.updatePoint)}}function Gf(n,e){return e?{point:e(n.point)}:n}function Tv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Wf({point:n},e){return{point:n,delta:Tv(n,wy(e)),offset:Tv(n,d1(e)),velocity:h1(e,.1)}}function d1(n){return n[0]}function wy(n){return n[n.length-1]}function h1(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=wy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>ir(e)));)t--;if(!r)return{x:0,y:0};const l=rr(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const Ay=1e-4,p1=1-Ay,m1=1+Ay,Cy=.01,g1=0-Cy,v1=0+Cy;function $n(n){return n.max-n.min}function _1(n,e,t){return Math.abs(n-e)<=t}function wv(n,e,t,r=.5){n.origin=r,n.originPoint=Ht(e.min,e.max,n.origin),n.scale=$n(t)/$n(e),n.translate=Ht(t.min,t.max,n.origin)-n.originPoint,(n.scale>=p1&&n.scale<=m1||isNaN(n.scale))&&(n.scale=1),(n.translate>=g1&&n.translate<=v1||isNaN(n.translate))&&(n.translate=0)}function Aa(n,e,t,r){wv(n.x,e.x,t.x,r?r.originX:void 0),wv(n.y,e.y,t.y,r?r.originY:void 0)}function Av(n,e,t){n.min=t.min+e.min,n.max=n.min+$n(e)}function y1(n,e,t){Av(n.x,e.x,t.x),Av(n.y,e.y,t.y)}function Cv(n,e,t){n.min=e.min-t.min,n.max=n.min+$n(e)}function Ca(n,e,t){Cv(n.x,e.x,t.x),Cv(n.y,e.y,t.y)}function x1(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Ht(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Ht(t,n,r.max):Math.min(n,t)),n}function Rv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function S1(n,{top:e,left:t,bottom:r,right:o}){return{x:Rv(n.x,t,o),y:Rv(n.y,e,r)}}function Pv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function M1(n,e){return{x:Pv(n.x,e.x),y:Pv(n.y,e.y)}}function E1(n,e){let t=.5;const r=$n(n),o=$n(e);return o>r?t=So(e.min,e.max-r,n.min):r>o&&(t=So(n.min,n.max-o,e.min)),or(0,1,t)}function T1(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Nd=.35;function w1(n=Nd){return n===!1?n=0:n===!0&&(n=Nd),{x:bv(n,"left","right"),y:bv(n,"top","bottom")}}function bv(n,e,t){return{min:Lv(n,e),max:Lv(n,t)}}function Lv(n,e){return typeof n=="number"?n:n[e]||0}const Dv=()=>({translate:0,scale:1,origin:0,originPoint:0}),po=()=>({x:Dv(),y:Dv()}),Iv=()=>({min:0,max:0}),jt=()=>({x:Iv(),y:Iv()});function oi(n){return[n("x"),n("y")]}function Ry({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function A1({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function C1(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Xf(n){return n===void 0||n===1}function Fd({scale:n,scaleX:e,scaleY:t}){return!Xf(n)||!Xf(e)||!Xf(t)}function hs(n){return Fd(n)||Py(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Py(n){return Uv(n.x)||Uv(n.y)}function Uv(n){return n&&n!=="0%"}function zu(n,e,t){const r=n-t,o=e*r;return t+o}function Nv(n,e,t,r,o){return o!==void 0&&(n=zu(n,o,r)),zu(n,t,r)+e}function Od(n,e=0,t=1,r,o){n.min=Nv(n.min,e,t,r,o),n.max=Nv(n.max,e,t,r,o)}function by(n,{x:e,y:t}){Od(n.x,e.translate,e.scale,e.originPoint),Od(n.y,t.translate,t.scale,t.originPoint)}const Fv=.999999999999,Ov=1.0000000000001;function R1(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&go(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,by(n,u)),r&&hs(l.latestValues)&&go(n,l.latestValues))}e.x<Ov&&e.x>Fv&&(e.x=1),e.y<Ov&&e.y>Fv&&(e.y=1)}function mo(n,e){n.min=n.min+e,n.max=n.max+e}function kv(n,e,t,r,o=.5){const l=Ht(n.min,n.max,o);Od(n,e,t,l,r)}function go(n,e){kv(n.x,e.x,e.scaleX,e.scale,e.originX),kv(n.y,e.y,e.scaleY,e.scale,e.originY)}function Ly(n,e){return Ry(C1(n.getBoundingClientRect(),e))}function P1(n,e,t){const r=Ly(n,t),{scroll:o}=e;return o&&(mo(r.x,o.offset.x),mo(r.y,o.offset.y)),r}const Dy=({current:n})=>n?n.ownerDocument.defaultView:null,b1=new WeakMap;class L1{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=jt(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=p=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Va(p).point)},l=(p,g)=>{const{drag:v,dragPropagation:S,onDragStart:M}=this.getProps();if(v&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=EE(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),oi(x=>{let y=this.getAxisMotionValue(x).get()||0;if(Ii.test(y)){const{projection:L}=this.visualElement;if(L&&L.layout){const P=L.layout.layoutBox[x];P&&(y=$n(P)*(parseFloat(y)/100))}}this.originPoint[x]=y}),M&&kt.postRender(()=>M(p,g)),Cd(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},u=(p,g)=>{const{dragPropagation:v,dragDirectionLock:S,onDirectionLock:M,onDrag:E}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:x}=g;if(S&&this.currentDirection===null){this.currentDirection=D1(x),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",g.point,x),this.updateAxis("y",g.point,x),this.visualElement.render(),E&&E(p,g)},c=(p,g)=>this.stop(p,g),d=()=>oi(p=>{var g;return this.getAnimationState(p)==="paused"&&((g=this.getAxisMotionValue(p).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new Ty(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:Dy(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&kt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!nu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=x1(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&fo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=S1(o.layoutBox,t):this.constraints=!1,this.elastic=w1(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&oi(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=T1(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!fo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=P1(r,o.root,this.visualElement.getTransformPagePoint());let u=M1(o.layout.layoutBox,l);if(t){const c=t(A1(u));this.hasMutatedConstraints=!!c,c&&(u=Ry(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=oi(p=>{if(!nu(p,t,this.currentDirection))return;let g=d&&d[p]||{};u&&(g={min:0,max:0});const v=o?200:1e6,S=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:v,bounceDamping:S,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Cd(this.visualElement,e),r.start(op(e,r,0,t,this.visualElement,!1))}stopAnimation(){oi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){oi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){oi(t=>{const{drag:r}=this.getProps();if(!nu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-Ht(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!fo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};oi(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=E1({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),oi(u=>{if(!nu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(Ht(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;b1.set(this.visualElement,this);const e=this.visualElement.current,t=wa(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();fo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),kt.read(r);const u=Ua(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(oi(p=>{const g=this.getAxisMotionValue(p);g&&(this.originPoint[p]+=d[p].translate,g.set(g.get()+d[p].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Nd,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function nu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function D1(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class I1 extends Wr{constructor(e){super(e),this.removeGroupControls=Yn,this.removeListeners=Yn,this.controls=new L1(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Yn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Bv=n=>(e,t)=>{n&&kt.postRender(()=>n(e,t))};class U1 extends Wr{constructor(){super(...arguments),this.removePointerDownListener=Yn}onPointerDown(e){this.session=new Ty(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Dy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Bv(e),onStart:Bv(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&kt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=wa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Cu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function zv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const pa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(et.test(n))n=parseFloat(n);else return n;const t=zv(n,e.target.x),r=zv(n,e.target.y);return`${t}% ${r}%`}},N1={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Vr.parse(n);if(o.length>5)return r;const l=Vr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=Ht(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class F1 extends Le.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;nE(O1),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Cu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||kt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Nh.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Iy(n){const[e,t]=m_(),r=Le.useContext(Ch);return xe.jsx(F1,{...n,layoutGroup:r,switchLayoutGroup:Le.useContext(E_),isPresent:e,safeToRemove:t})}const O1={borderRadius:{...pa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:pa,borderTopRightRadius:pa,borderBottomLeftRadius:pa,borderBottomRightRadius:pa,boxShadow:N1};function k1(n,e,t){const r=Sn(n)?n:Da(n);return r.start(op("",r,e,t)),r.animation}function B1(n){return n instanceof SVGElement&&n.tagName!=="svg"}const z1=(n,e)=>n.depth-e.depth;class V1{constructor(){this.children=[],this.isDirty=!1}add(e){$h(this.children,e),this.isDirty=!0}remove(e){Kh(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(z1),this.isDirty=!1,this.children.forEach(e)}}function H1(n,e){const t=Ui.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(zr(r),n(l-e))};return kt.read(r,!0),()=>zr(r)}const Uy=["TopLeft","TopRight","BottomLeft","BottomRight"],G1=Uy.length,Vv=n=>typeof n=="string"?parseFloat(n):n,Hv=n=>typeof n=="number"||et.test(n);function W1(n,e,t,r,o,l){o?(n.opacity=Ht(0,t.opacity!==void 0?t.opacity:1,X1(r)),n.opacityExit=Ht(e.opacity!==void 0?e.opacity:1,0,j1(r))):l&&(n.opacity=Ht(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<G1;u++){const c=`border${Uy[u]}Radius`;let d=Gv(e,c),h=Gv(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Hv(d)===Hv(h)?(n[c]=Math.max(Ht(Vv(d),Vv(h),r),0),(Ii.test(h)||Ii.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=Ht(e.rotate||0,t.rotate||0,r))}function Gv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const X1=Ny(0,.5,J_),j1=Ny(.5,.95,Yn);function Ny(n,e,t){return r=>r<n?0:r>e?1:t(So(n,e,r))}function Wv(n,e){n.min=e.min,n.max=e.max}function ri(n,e){Wv(n.x,e.x),Wv(n.y,e.y)}function Xv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function jv(n,e,t,r,o){return n-=e,n=zu(n,1/t,r),o!==void 0&&(n=zu(n,1/o,r)),n}function Y1(n,e=0,t=1,r=.5,o,l=n,u=n){if(Ii.test(e)&&(e=parseFloat(e),e=Ht(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Ht(l.min,l.max,r);n===l&&(c-=e),n.min=jv(n.min,e,t,c,o),n.max=jv(n.max,e,t,c,o)}function Yv(n,e,[t,r,o],l,u){Y1(n,e[t],e[r],e[o],e.scale,l,u)}const q1=["x","scaleX","originX"],$1=["y","scaleY","originY"];function qv(n,e,t,r){Yv(n.x,e,q1,t?t.x:void 0,r?r.x:void 0),Yv(n.y,e,$1,t?t.y:void 0,r?r.y:void 0)}function $v(n){return n.translate===0&&n.scale===1}function Fy(n){return $v(n.x)&&$v(n.y)}function Kv(n,e){return n.min===e.min&&n.max===e.max}function K1(n,e){return Kv(n.x,e.x)&&Kv(n.y,e.y)}function Zv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Oy(n,e){return Zv(n.x,e.x)&&Zv(n.y,e.y)}function Qv(n){return $n(n.x)/$n(n.y)}function Jv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class Z1{constructor(){this.members=[]}add(e){$h(this.members,e),e.scheduleRender()}remove(e){if(Kh(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Q1(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:g,rotateY:v,skewX:S,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),S&&(r+=`skewX(${S}deg) `),M&&(r+=`skewY(${M}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const ps={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Sa=typeof window<"u"&&window.MotionDebug!==void 0,jf=["","X","Y","Z"],J1={visibility:"hidden"},e0=1e3;let ew=0;function Yf(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function ky(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=j_(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",kt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&ky(r)}function By({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e==null?void 0:e()){this.id=ew++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Sa&&(ps.totalNodes=ps.resolvedTargetDeltas=ps.recalculatedProjection=0),this.nodes.forEach(iw),this.nodes.forEach(lw),this.nodes.forEach(uw),this.nodes.forEach(rw),Sa&&window.MotionDebug.record(ps)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new V1)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Zh),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=B1(u),this.instance=u;const{layoutId:d,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||d)&&(this.isLayoutDirty=!0),n){let g;const v=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=H1(v,250),Cu.hasAnimatedSinceResize&&(Cu.hasAnimatedSinceResize=!1,this.nodes.forEach(n0))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:v,hasRelativeTargetChanged:S,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||p.getDefaultTransition()||pw,{onLayoutAnimationStart:x,onLayoutAnimationComplete:y}=p.getProps(),L=!this.targetLayout||!Oy(this.targetLayout,M)||S,P=!v&&S;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||P||v&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,P);const A={...Xh(E,"layout"),onPlay:x,onComplete:y};(p.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A)}else v||n0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,zr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(cw),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ky(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const g=this.path[p];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(t0);return}this.isUpdating||this.nodes.forEach(ow),this.isUpdating=!1,this.nodes.forEach(aw),this.nodes.forEach(tw),this.nodes.forEach(nw),this.clearAllSnapshots();const c=Ui.now();cn.delta=or(0,1e3/60,c-cn.timestamp),cn.timestamp=c,cn.isProcessing=!0,Of.update.process(cn),Of.preRender.process(cn),Of.render.process(cn),cn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Nh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(sw),this.sharedNodes.forEach(fw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,kt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){kt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=jt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!Fy(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;u&&(c||hs(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),mw(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:c}=this.options;if(!c)return jt();const d=c.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(gw))){const{scroll:p}=this.root;p&&(mo(d.x,p.offset.x),mo(d.y,p.offset.y))}return d}removeElementScroll(u){var c;const d=jt();if(ri(d,u),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return d;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:g,options:v}=p;p!==this.root&&g&&v.layoutScroll&&(g.wasRoot&&ri(d,u),mo(d.x,g.offset.x),mo(d.y,g.offset.y))}return d}applyTransform(u,c=!1){const d=jt();ri(d,u);for(let h=0;h<this.path.length;h++){const p=this.path[h];!c&&p.options.layoutScroll&&p.scroll&&p!==p.root&&go(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),hs(p.latestValues)&&go(d,p.latestValues)}return hs(this.latestValues)&&go(d,this.latestValues),d}removeTransform(u){const c=jt();ri(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!hs(h.latestValues))continue;Fd(h.latestValues)&&h.updateSnapshot();const p=jt(),g=h.measurePageBox();ri(p,g),qv(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return hs(this.latestValues)&&qv(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==cn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:v}=this.options;if(!(!this.layout||!(g||v))){if(this.resolvedRelativeTargetAt=cn.timestamp,!this.targetDelta&&!this.relativeTarget){const S=this.getClosestProjectingParent();S&&S.layout&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=jt(),this.relativeTargetOrigin=jt(),Ca(this.relativeTargetOrigin,this.layout.layoutBox,S.layout.layoutBox),ri(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=jt(),this.targetWithTransforms=jt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),y1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ri(this.target,this.layout.layoutBox),by(this.target,this.targetDelta)):ri(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const S=this.getClosestProjectingParent();S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?(this.relativeParent=S,this.forceRelativeParentToResolveTarget(),this.relativeTarget=jt(),this.relativeTargetOrigin=jt(),Ca(this.relativeTargetOrigin,this.target,S.target),ri(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Sa&&ps.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Fd(this.parent.latestValues)||Py(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===cn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||g))return;ri(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,S=this.treeScale.y;R1(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=jt());const{target:M}=c;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Xv(this.prevProjectionDelta.x,this.projectionDelta.x),Xv(this.prevProjectionDelta.y,this.projectionDelta.y)),Aa(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==S||!Jv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Jv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Sa&&ps.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=po(),this.projectionDelta=po(),this.projectionDeltaWithTransform=po()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},g=po();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const v=jt(),S=d?d.source:void 0,M=this.layout?this.layout.source:void 0,E=S!==M,x=this.getStack(),y=!x||x.members.length<=1,L=!!(E&&!y&&this.options.crossfade===!0&&!this.path.some(hw));this.animationProgress=0;let P;this.mixTargetDelta=A=>{const k=A/1e3;i0(g.x,u.x,k),i0(g.y,u.y,k),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ca(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),dw(this.relativeTarget,this.relativeTargetOrigin,v,k),P&&K1(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=jt()),ri(P,this.relativeTarget)),E&&(this.animationValues=p,W1(p,h,this.latestValues,k,L,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(zr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=kt.update(()=>{Cu.hasAnimatedSinceResize=!0,this.currentAnimation=k1(0,e0,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(e0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:p}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&zy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||jt();const g=$n(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=$n(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}ri(c,d),go(c,p),Aa(this.projectionDeltaWithTransform,this.layoutCorrected,c,p)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new Z1),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&Yf("z",u,h,this.animationValues);for(let p=0;p<jf.length;p++)Yf(`rotate${jf[p]}`,u,h,this.animationValues),Yf(`skew${jf[p]}`,u,h,this.animationValues);u.render();for(const p in h)u.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);u.scheduleRender()}getProjectionStyles(u){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return J1;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=wu(u==null?void 0:u.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const E={};return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,E.pointerEvents=wu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!hs(this.latestValues)&&(E.transform=p?p({},""):"none",this.hasProjected=!1),E}const v=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=Q1(this.projectionDeltaWithTransform,this.treeScale,v),p&&(h.transform=p(v,h.transform));const{x:S,y:M}=this.projectionDelta;h.transformOrigin=`${S.origin*100}% ${M.origin*100}% 0`,g.animationValues?h.opacity=g===this?(d=(c=v.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=g===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const E in Nu){if(v[E]===void 0)continue;const{correct:x,applyTo:y}=Nu[E],L=h.transform==="none"?v[E]:x(v[E],g);if(y){const P=y.length;for(let A=0;A<P;A++)h[y[A]]=L}else h[E]=L}return this.options.layoutId&&(h.pointerEvents=g===this?wu(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(t0),this.root.sharedNodes.clear()}}}function tw(n){n.updateLayout()}function nw(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?oi(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],S=$n(v);v.min=r[g].min,v.max=v.min+S}):zy(l,t.layoutBox,r)&&oi(g=>{const v=u?t.measuredBox[g]:t.layoutBox[g],S=$n(r[g]);v.max=v.min+S,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+S)});const c=po();Aa(c,r,t.layoutBox);const d=po();u?Aa(d,n.applyTransform(o,!0),t.measuredBox):Aa(d,r,t.layoutBox);const h=!Fy(c);let p=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:v,layout:S}=g;if(v&&S){const M=jt();Ca(M,t.layoutBox,v.layoutBox);const E=jt();Ca(E,r,S.layoutBox),Oy(M,E)||(p=!0),g.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=M,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:c,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function iw(n){Sa&&ps.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function rw(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function sw(n){n.clearSnapshot()}function t0(n){n.clearMeasurements()}function ow(n){n.isLayoutDirty=!1}function aw(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function n0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function lw(n){n.resolveTargetDelta()}function uw(n){n.calcProjection()}function cw(n){n.resetSkewAndRotation()}function fw(n){n.removeLeadSnapshot()}function i0(n,e,t){n.translate=Ht(e.translate,0,t),n.scale=Ht(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function r0(n,e,t,r){n.min=Ht(e.min,t.min,r),n.max=Ht(e.max,t.max,r)}function dw(n,e,t,r){r0(n.x,e.x,t.x,r),r0(n.y,e.y,t.y,r)}function hw(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const pw={duration:.45,ease:[.4,0,.1,1]},s0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),o0=s0("applewebkit/")&&!s0("chrome/")?Math.round:Yn;function a0(n){n.min=o0(n.min),n.max=o0(n.max)}function mw(n){a0(n.x),a0(n.y)}function zy(n,e,t){return n==="position"||n==="preserve-aspect"&&!_1(Qv(e),Qv(t),.2)}function gw(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const vw=By({attachResizeListener:(n,e)=>Ua(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),qf={current:void 0},Vy=By({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!qf.current){const n=new vw({});n.mount(window),n.setOptions({layoutScroll:!0}),qf.current=n}return qf.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),_w={pan:{Feature:U1},drag:{Feature:I1,ProjectionNode:Vy,MeasureLayout:Iy}};function l0(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&kt.postRender(()=>l(e,Va(e)))}class yw extends Wr{mount(){const{current:e}=this.node;e&&(this.unmount=_E(e,t=>(l0(this.node,t,"Start"),r=>l0(this.node,r,"End"))))}unmount(){}}class xw extends Wr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=za(Ua(this.node.current,"focus",()=>this.onFocus()),Ua(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function u0(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&kt.postRender(()=>l(e,Va(e)))}class Sw extends Wr{mount(){const{current:e}=this.node;e&&(this.unmount=ME(e,t=>(u0(this.node,t,"Start"),(r,{success:o})=>u0(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const kd=new WeakMap,$f=new WeakMap,Mw=n=>{const e=kd.get(n.target);e&&e(n)},Ew=n=>{n.forEach(Mw)};function Tw({root:n,...e}){const t=n||document;$f.has(t)||$f.set(t,{});const r=$f.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(Ew,{root:n,...e})),r[o]}function ww(n,e,t){const r=Tw(e);return kd.set(n,t),r.observe(n),()=>{kd.delete(n),r.unobserve(n)}}const Aw={some:0,all:1};class Cw extends Wr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:Aw[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:g}=this.node.getProps(),v=h?p:g;v&&v(d)};return ww(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(Rw(e,t))&&this.startObserver()}unmount(){}}function Rw({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const Pw={inView:{Feature:Cw},tap:{Feature:Sw},focus:{Feature:xw},hover:{Feature:yw}},bw={layout:{ProjectionNode:Vy,MeasureLayout:Iy}},Bd={current:null},Hy={current:!1};function Lw(){if(Hy.current=!0,!!bh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Bd.current=n.matches;n.addListener(e),e()}else Bd.current=!1}const Dw=[...hy,yn,Vr],Iw=n=>Dw.find(dy(n)),c0=new WeakMap;function Uw(n,e,t){for(const r in e){const o=e[r],l=t[r];if(Sn(o))n.addValue(r,o);else if(Sn(l))n.addValue(r,Da(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Da(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const f0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Nw{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ip,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=Ui.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,kt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:p}=u;this.onUpdate=p,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=Xu(t),this.isVariantNode=S_(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,...v}=this.scrapeMotionValuesFromProps(t,{},this);for(const S in v){const M=v[S];d[S]!==void 0&&Sn(M)&&M.set(d[S],!1)}}mount(e){this.current=e,c0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Hy.current||Lw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Bd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){c0.delete(this.current),this.projection&&this.projection.unmount(),zr(this.notifyUpdate),zr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=ws.has(e),o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&kt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Mo){const t=Mo[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):jt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<f0.length;r++){const o=f0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=Uw(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Da(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(cy(o)||ty(o))?o=parseFloat(o):!Iw(o)&&Vr.test(t)&&(o=ay(e,t)),this.setBaseTarget(e,Sn(o)?o.get():o)),Sn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=Oh(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!Sn(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Zh),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class Gy extends Nw{constructor(){super(...arguments),this.KeyframeResolver=py}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Sn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function Fw(n){return window.getComputedStyle(n)}class Ow extends Gy{constructor(){super(...arguments),this.type="html",this.renderInstance=b_}readValueFromInstance(e,t){if(ws.has(t)){const r=np(t);return r&&r.default||0}else{const r=Fw(e),o=(C_(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Ly(e,t)}build(e,t,r){zh(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Wh(e,t,r)}}class kw extends Gy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=jt}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ws.has(t)){const r=np(t);return r&&r.default||0}return t=L_.has(t)?t:Uh(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return U_(e,t,r)}build(e,t,r){Vh(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){D_(e,t,r,o)}mount(e){this.isSVGTag=Gh(e.tagName),super.mount(e)}}const Bw=(n,e)=>Fh(n)?new kw(e):new Ow(e,{allowProjection:n!==Le.Fragment}),zw=fE({...u1,...Pw,..._w,...bw},Bw),Ut=AM(zw);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="170",Vw=0,d0=1,Hw=2,Wy=1,Gw=2,Ji=3,Hr=0,Bn=1,er=2,kr=0,_o=1,h0=2,p0=3,m0=4,Ww=5,vs=100,Xw=101,jw=102,Yw=103,qw=104,$w=200,Kw=201,Zw=202,Qw=203,zd=204,Vd=205,Jw=206,eA=207,tA=208,nA=209,iA=210,rA=211,sA=212,oA=213,aA=214,Hd=0,Gd=1,Wd=2,To=3,Xd=4,jd=5,Yd=6,qd=7,Xy=0,lA=1,uA=2,Br=0,cA=1,fA=2,dA=3,hA=4,pA=5,mA=6,gA=7,jy=300,wo=301,Ao=302,$d=303,Kd=304,qu=306,Zd=1e3,xs=1001,Qd=1002,Ei=1003,vA=1004,iu=1005,Li=1006,Kf=1007,Ss=1008,ar=1009,Yy=1010,qy=1011,Na=1012,lp=1013,Es=1014,tr=1015,Ha=1016,up=1017,cp=1018,Co=1020,$y=35902,Ky=1021,Zy=1022,Mi=1023,Qy=1024,Jy=1025,yo=1026,Ro=1027,ex=1028,fp=1029,tx=1030,dp=1031,hp=1033,Ru=33776,Pu=33777,bu=33778,Lu=33779,Jd=35840,eh=35841,th=35842,nh=35843,ih=36196,rh=37492,sh=37496,oh=37808,ah=37809,lh=37810,uh=37811,ch=37812,fh=37813,dh=37814,hh=37815,ph=37816,mh=37817,gh=37818,vh=37819,_h=37820,yh=37821,Du=36492,xh=36494,Sh=36495,nx=36283,Mh=36284,Eh=36285,Th=36286,_A=3200,yA=3201,xA=0,SA=1,Or="",jn="srgb",Do="srgb-linear",$u="linear",Rt="srgb",Ks=7680,g0=519,MA=512,EA=513,TA=514,ix=515,wA=516,AA=517,CA=518,RA=519,v0=35044,_0="300 es",nr=2e3,Vu=2001;class Io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let y0=1234567;const Ra=Math.PI/180,Fa=180/Math.PI;function Uo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function Pn(n,e,t){return Math.max(e,Math.min(t,n))}function pp(n,e){return(n%e+e)%e}function PA(n,e,t,r,o){return r+(n-e)*(o-r)/(t-e)}function bA(n,e,t){return n!==e?(t-n)/(e-n):0}function Pa(n,e,t){return(1-t)*n+t*e}function LA(n,e,t,r){return Pa(n,e,1-Math.exp(-t*r))}function DA(n,e=1){return e-Math.abs(pp(n,e*2)-e)}function IA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function UA(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function NA(n,e){return n+Math.floor(Math.random()*(e-n+1))}function FA(n,e){return n+Math.random()*(e-n)}function OA(n){return n*(.5-Math.random())}function kA(n){n!==void 0&&(y0=n);let e=y0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BA(n){return n*Ra}function zA(n){return n*Fa}function VA(n){return(n&n-1)===0&&n!==0}function HA(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function GA(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function WA(n,e,t,r,o){const l=Math.cos,u=Math.sin,c=l(t/2),d=u(t/2),h=l((e+r)/2),p=u((e+r)/2),g=l((e-r)/2),v=u((e-r)/2),S=l((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":n.set(c*p,d*g,d*v,c*h);break;case"YZY":n.set(d*v,c*p,d*g,c*h);break;case"ZXZ":n.set(d*g,d*v,c*p,c*h);break;case"XZX":n.set(c*p,d*M,d*S,c*h);break;case"YXY":n.set(d*S,c*p,d*M,c*h);break;case"ZYZ":n.set(d*M,d*S,c*p,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function co(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const x0={DEG2RAD:Ra,RAD2DEG:Fa,generateUUID:Uo,clamp:Pn,euclideanModulo:pp,mapLinear:PA,inverseLerp:bA,lerp:Pa,damp:LA,pingpong:DA,smoothstep:IA,smootherstep:UA,randInt:NA,randFloat:FA,randFloatSpread:OA,seededRandom:kA,degToRad:BA,radToDeg:zA,isPowerOfTwo:VA,ceilPowerOfTwo:HA,floorPowerOfTwo:GA,setQuaternionFromProperEuler:WA,normalize:Cn,denormalize:co};class Lt{constructor(e=0,t=0){Lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,o,l,u,c,d,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h)}set(e,t,r,o,l,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=c,p[3]=t,p[4]=l,p[5]=d,p[6]=r,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],p=r[4],g=r[7],v=r[2],S=r[5],M=r[8],E=o[0],x=o[3],y=o[6],L=o[1],P=o[4],A=o[7],k=o[2],U=o[5],N=o[8];return l[0]=u*E+c*L+d*k,l[3]=u*x+c*P+d*U,l[6]=u*y+c*A+d*N,l[1]=h*E+p*L+g*k,l[4]=h*x+p*P+g*U,l[7]=h*y+p*A+g*N,l[2]=v*E+S*L+M*k,l[5]=v*x+S*P+M*U,l[8]=v*y+S*A+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-r*l*p+r*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*u-c*h,v=c*d-p*l,S=h*l-u*d,M=t*g+r*v+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*h-p*r)*E,e[2]=(c*r-o*u)*E,e[3]=v*E,e[4]=(p*t-o*d)*E,e[5]=(o*l-c*t)*E,e[6]=S*E,e[7]=(r*d-h*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Zf.makeScale(e,t)),this}rotate(e){return this.premultiply(Zf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new lt;function rx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XA(){const n=Oa("canvas");return n.style.display="block",n}const S0={};function Ma(n){n in S0||(S0[n]=!0,console.warn(n))}function jA(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function YA(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qA(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xt={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Rt&&(n.r=sr(n.r),n.g=sr(n.g),n.b=sr(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Rt&&(n.r=xo(n.r),n.g=xo(n.g),n.b=xo(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Or?$u:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const M0=[.64,.33,.3,.6,.15,.06],E0=[.2126,.7152,.0722],T0=[.3127,.329],w0=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A0=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xt.define({[Do]:{primaries:M0,whitePoint:T0,transfer:$u,toXYZ:w0,fromXYZ:A0,luminanceCoefficients:E0,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:M0,whitePoint:T0,transfer:Rt,toXYZ:w0,fromXYZ:A0,luminanceCoefficients:E0,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}});let Zs;class $A{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=Oa("canvas")),Zs.width=e.width,Zs.height=e.height;const r=Zs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oa("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=sr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(sr(t[r]/255)*255):t[r]=sr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KA=0;class sx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KA++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(Qf(o[u].image)):l.push(Qf(o[u]))}else l=Qf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Qf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$A.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZA=0;class bn extends Io{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,r=xs,o=xs,l=Li,u=Ss,c=Mi,d=ar,h=bn.DEFAULT_ANISOTROPY,p=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZA++}),this.uuid=Uo(),this.name="",this.source=new sx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zd:e.x=e.x-Math.floor(e.x);break;case xs:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zd:e.y=e.y-Math.floor(e.y);break;case xs:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=jy;bn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,r=0,o=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],p=d[4],g=d[8],v=d[1],S=d[5],M=d[9],E=d[2],x=d[6],y=d[10];if(Math.abs(p-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+x)<.1&&Math.abs(h+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,A=(S+1)/2,k=(y+1)/2,U=(p+v)/4,N=(g+E)/4,O=(M+x)/4;return P>A&&P>k?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=U/r,l=N/r):A>k?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=U/o,l=O/o):k<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),r=N/l,o=O/l),this.set(r,o,l,t),this}let L=Math.sqrt((x-M)*(x-M)+(g-E)*(g-E)+(v-p)*(v-p));return Math.abs(L)<.001&&(L=1),this.x=(x-M)/L,this.y=(g-E)/L,this.z=(v-p)/L,this.w=Math.acos((h+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QA extends Io{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new bn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends QA{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ox extends bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JA extends bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ei,this.minFilter=Ei,this.wrapR=xs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let d=r[o+0],h=r[o+1],p=r[o+2],g=r[o+3];const v=l[u+0],S=l[u+1],M=l[u+2],E=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g;return}if(c===1){e[t+0]=v,e[t+1]=S,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==v||h!==S||p!==M){let x=1-c;const y=d*v+h*S+p*M+g*E,L=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const k=Math.sqrt(P),U=Math.atan2(k,y*L);x=Math.sin(x*U)/k,c=Math.sin(c*U)/k}const A=c*L;if(d=d*x+v*A,h=h*x+S*A,p=p*x+M*A,g=g*x+E*A,x===1-c){const k=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=k,h*=k,p*=k,g*=k}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],d=r[o+1],h=r[o+2],p=r[o+3],g=l[u],v=l[u+1],S=l[u+2],M=l[u+3];return e[t]=c*M+p*g+d*S-h*v,e[t+1]=d*M+p*v+h*g-c*S,e[t+2]=h*M+p*S+c*v-d*g,e[t+3]=p*M-c*g-d*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),p=c(o/2),g=c(l/2),v=d(r/2),S=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*p*g+h*S*M,this._y=h*S*g-v*p*M,this._z=h*p*M+v*S*g,this._w=h*p*g-v*S*M;break;case"YXZ":this._x=v*p*g+h*S*M,this._y=h*S*g-v*p*M,this._z=h*p*M-v*S*g,this._w=h*p*g+v*S*M;break;case"ZXY":this._x=v*p*g-h*S*M,this._y=h*S*g+v*p*M,this._z=h*p*M+v*S*g,this._w=h*p*g-v*S*M;break;case"ZYX":this._x=v*p*g-h*S*M,this._y=h*S*g+v*p*M,this._z=h*p*M-v*S*g,this._w=h*p*g+v*S*M;break;case"YZX":this._x=v*p*g+h*S*M,this._y=h*S*g+v*p*M,this._z=h*p*M-v*S*g,this._w=h*p*g-v*S*M;break;case"XZY":this._x=v*p*g-h*S*M,this._y=h*S*g-v*p*M,this._z=h*p*M+v*S*g,this._w=h*p*g+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],v=r+c+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(p-d)*S,this._y=(l-h)*S,this._z=(u-o)*S}else if(r>c&&r>g){const S=2*Math.sqrt(1+r-c-g);this._w=(p-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-r-g);this._w=(l-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+g-r-c);this._w=(u-o)/S,this._x=(l+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+u*c+o*h-l*d,this._y=o*p+u*d+l*c-r*h,this._z=l*p+u*h+r*d-o*c,this._w=u*p-r*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),g=Math.sin((1-t)*p)/h,v=Math.sin(t*p)/h;return this._w=u*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(C0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(C0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),p=2*(c*t-l*o),g=2*(l*r-u*t);return this.x=t+d*h+u*g-c*p,this.y=r+d*p+c*h-l*g,this.z=o+d*g+l*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jf.copy(this).projectOnVector(e),this.sub(Jf)}reflect(e){return this.sub(Jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new ne,C0=new Ga;class Wa{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,vi):vi.fromBufferAttribute(l,u),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ru.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ru.copy(r.boundingBox)),ru.applyMatrix4(e.matrixWorld),this.union(ru)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),su.subVectors(this.max,ma),Qs.subVectors(e.a,ma),Js.subVectors(e.b,ma),eo.subVectors(e.c,ma),br.subVectors(Js,Qs),Lr.subVectors(eo,Js),as.subVectors(Qs,eo);let t=[0,-br.z,br.y,0,-Lr.z,Lr.y,0,-as.z,as.y,br.z,0,-br.x,Lr.z,0,-Lr.x,as.z,0,-as.x,-br.y,br.x,0,-Lr.y,Lr.x,0,-as.y,as.x,0];return!ed(t,Qs,Js,eo,su)||(t=[1,0,0,0,1,0,0,0,1],!ed(t,Qs,Js,eo,su))?!1:(ou.crossVectors(br,Lr),t=[ou.x,ou.y,ou.z],ed(t,Qs,Js,eo,su))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],vi=new ne,ru=new Wa,Qs=new ne,Js=new ne,eo=new ne,br=new ne,Lr=new ne,as=new ne,ma=new ne,su=new ne,ou=new ne,ls=new ne;function ed(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){ls.fromArray(n,l);const c=o.x*Math.abs(ls.x)+o.y*Math.abs(ls.y)+o.z*Math.abs(ls.z),d=e.dot(ls),h=t.dot(ls),p=r.dot(ls);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const eC=new Wa,ga=new ne,td=new ne;class mp{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):eC.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ga,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(td)),this.expandByPoint(ga.copy(e.center).sub(td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new ne,nd=new ne,au=new ne,Dr=new ne,id=new ne,lu=new ne,rd=new ne;class tC{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){nd.copy(e).add(t).multiplyScalar(.5),au.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(nd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(au),c=Dr.dot(this.direction),d=-Dr.dot(au),h=Dr.lengthSq(),p=Math.abs(1-u*u);let g,v,S,M;if(p>0)if(g=u*d-c,v=u*c-d,M=l*p,g>=0)if(v>=-M)if(v<=M){const E=1/p;g*=E,v*=E,S=g*(g+u*v+2*c)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;else v<=-M?(g=Math.max(0,-(-u*l+c)),v=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+h):(g=Math.max(0,-(u*l+c)),v=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+c)),S=-g*g+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(nd).addScaledVector(au,v),S}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),p>=0?(l=(e.min.y-v.y)*p,u=(e.max.y-v.y)*p):(l=(e.max.y-v.y)*p,u=(e.min.y-v.y)*p),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(c=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,r,o,l){id.subVectors(t,e),lu.subVectors(r,e),rd.crossVectors(id,lu);let u=this.direction.dot(rd),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Dr.subVectors(this.origin,e);const d=c*this.direction.dot(lu.crossVectors(Dr,lu));if(d<0)return null;const h=c*this.direction.dot(id.cross(Dr));if(h<0||d+h>u)return null;const p=-c*Dr.dot(rd);return p<0?null:this.at(p/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,r,o,l,u,c,d,h,p,g,v,S,M,E,x){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h,p,g,v,S,M,E,x)}set(e,t,r,o,l,u,c,d,h,p,g,v,S,M,E,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=p,y[10]=g,y[14]=v,y[3]=S,y[7]=M,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/to.setFromMatrixColumn(e,0).length(),l=1/to.setFromMatrixColumn(e,1).length(),u=1/to.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),p=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*p,S=u*g,M=c*p,E=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=S+M*h,t[5]=v-E*h,t[9]=-c*d,t[2]=E-v*h,t[6]=M+S*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*p,S=d*g,M=h*p,E=h*g;t[0]=v+E*c,t[4]=M*c-S,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=S*c-M,t[6]=E+v*c,t[10]=u*d}else if(e.order==="ZXY"){const v=d*p,S=d*g,M=h*p,E=h*g;t[0]=v-E*c,t[4]=-u*g,t[8]=M+S*c,t[1]=S+M*c,t[5]=u*p,t[9]=E-v*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const v=u*p,S=u*g,M=c*p,E=c*g;t[0]=d*p,t[4]=M*h-S,t[8]=v*h+E,t[1]=d*g,t[5]=E*h+v,t[9]=S*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,S=u*h,M=c*d,E=c*h;t[0]=d*p,t[4]=E-v*g,t[8]=M*g+S,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=u*d,S=u*h,M=c*d,E=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=v*g+E,t[5]=u*p,t[9]=S*g-M,t[2]=M*g-S,t[6]=c*p,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nC,e,iC)}lookAt(e,t,r){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Ir.crossVectors(r,Wn),Ir.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Ir.crossVectors(r,Wn)),Ir.normalize(),uu.crossVectors(Wn,Ir),o[0]=Ir.x,o[4]=uu.x,o[8]=Wn.x,o[1]=Ir.y,o[5]=uu.y,o[9]=Wn.y,o[2]=Ir.z,o[6]=uu.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],p=r[1],g=r[5],v=r[9],S=r[13],M=r[2],E=r[6],x=r[10],y=r[14],L=r[3],P=r[7],A=r[11],k=r[15],U=o[0],N=o[4],O=o[8],b=o[12],R=o[1],V=o[5],le=o[9],Z=o[13],te=o[2],ce=o[6],ae=o[10],re=o[14],z=o[3],ue=o[7],se=o[11],F=o[15];return l[0]=u*U+c*R+d*te+h*z,l[4]=u*N+c*V+d*ce+h*ue,l[8]=u*O+c*le+d*ae+h*se,l[12]=u*b+c*Z+d*re+h*F,l[1]=p*U+g*R+v*te+S*z,l[5]=p*N+g*V+v*ce+S*ue,l[9]=p*O+g*le+v*ae+S*se,l[13]=p*b+g*Z+v*re+S*F,l[2]=M*U+E*R+x*te+y*z,l[6]=M*N+E*V+x*ce+y*ue,l[10]=M*O+E*le+x*ae+y*se,l[14]=M*b+E*Z+x*re+y*F,l[3]=L*U+P*R+A*te+k*z,l[7]=L*N+P*V+A*ce+k*ue,l[11]=L*O+P*le+A*ae+k*se,l[15]=L*b+P*Z+A*re+k*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],v=e[10],S=e[14],M=e[3],E=e[7],x=e[11],y=e[15];return M*(+l*d*g-o*h*g-l*c*v+r*h*v+o*c*S-r*d*S)+E*(+t*d*S-t*h*v+l*u*v-o*u*S+o*h*p-l*d*p)+x*(+t*h*g-t*c*S-l*u*g+r*u*S+l*c*p-r*h*p)+y*(-o*c*p-t*d*g+t*c*v+o*u*g-r*u*v+r*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],v=e[10],S=e[11],M=e[12],E=e[13],x=e[14],y=e[15],L=g*x*h-E*v*h+E*d*S-c*x*S-g*d*y+c*v*y,P=M*v*h-p*x*h-M*d*S+u*x*S+p*d*y-u*v*y,A=p*E*h-M*g*h+M*c*S-u*E*S-p*c*y+u*g*y,k=M*g*d-p*E*d-M*c*v+u*E*v+p*c*x-u*g*x,U=t*L+r*P+o*A+l*k;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/U;return e[0]=L*N,e[1]=(E*v*l-g*x*l-E*o*S+r*x*S+g*o*y-r*v*y)*N,e[2]=(c*x*l-E*d*l+E*o*h-r*x*h-c*o*y+r*d*y)*N,e[3]=(g*d*l-c*v*l-g*o*h+r*v*h+c*o*S-r*d*S)*N,e[4]=P*N,e[5]=(p*x*l-M*v*l+M*o*S-t*x*S-p*o*y+t*v*y)*N,e[6]=(M*d*l-u*x*l-M*o*h+t*x*h+u*o*y-t*d*y)*N,e[7]=(u*v*l-p*d*l+p*o*h-t*v*h-u*o*S+t*d*S)*N,e[8]=A*N,e[9]=(M*g*l-p*E*l-M*r*S+t*E*S+p*r*y-t*g*y)*N,e[10]=(u*E*l-M*c*l+M*r*h-t*E*h-u*r*y+t*c*y)*N,e[11]=(p*c*l-u*g*l-p*r*h+t*g*h+u*r*S-t*c*S)*N,e[12]=k*N,e[13]=(p*E*o-M*g*o+M*r*v-t*E*v-p*r*x+t*g*x)*N,e[14]=(M*c*o-u*E*o-M*r*d+t*E*d+u*r*x-t*c*x)*N,e[15]=(u*g*o-p*c*o+p*r*d-t*g*d-u*r*v+t*c*v)*N,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,d=e.z,h=l*u,p=l*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,p*c+r,p*d-o*u,0,h*d-o*c,p*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,p=u+u,g=c+c,v=l*h,S=l*p,M=l*g,E=u*p,x=u*g,y=c*g,L=d*h,P=d*p,A=d*g,k=r.x,U=r.y,N=r.z;return o[0]=(1-(E+y))*k,o[1]=(S+A)*k,o[2]=(M-P)*k,o[3]=0,o[4]=(S-A)*U,o[5]=(1-(v+y))*U,o[6]=(x+L)*U,o[7]=0,o[8]=(M+P)*N,o[9]=(x-L)*N,o[10]=(1-(v+E))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=to.set(o[0],o[1],o[2]).length();const u=to.set(o[4],o[5],o[6]).length(),c=to.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],_i.copy(this);const h=1/l,p=1/u,g=1/c;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=p,_i.elements[5]*=p,_i.elements[6]*=p,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,t.setFromRotationMatrix(_i),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=nr){const d=this.elements,h=2*l/(t-e),p=2*l/(r-o),g=(t+e)/(t-e),v=(r+o)/(r-o);let S,M;if(c===nr)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(c===Vu)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=nr){const d=this.elements,h=1/(t-e),p=1/(r-o),g=1/(u-l),v=(t+e)*h,S=(r+o)*p;let M,E;if(c===nr)M=(u+l)*g,E=-2*g;else if(c===Vu)M=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const to=new ne,_i=new Kt,nC=new ne(0,0,0),iC=new ne(1,1,1),Ir=new ne,uu=new ne,Wn=new ne,R0=new Kt,P0=new Ga;class lr{constructor(e=0,t=0,r=0,o=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],p=o[9],g=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Pn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return R0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return P0.setFromEuler(this),this.setFromQuaternion(P0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class ax{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rC=0;const b0=new ne,no=new Ga,Ki=new Kt,cu=new ne,va=new ne,sC=new ne,oC=new Ga,L0=new ne(1,0,0),D0=new ne(0,1,0),I0=new ne(0,0,1),U0={type:"added"},aC={type:"removed"},io={type:"childadded",child:null},sd={type:"childremoved",child:null};class qn extends Io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new ne,t=new lr,r=new Ga,o=new ne(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new lt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(L0,e)}rotateY(e){return this.rotateOnAxis(D0,e)}rotateZ(e){return this.rotateOnAxis(I0,e)}translateOnAxis(e,t){return b0.copy(e).applyQuaternion(this.quaternion),this.position.add(b0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(L0,e)}translateY(e){return this.translateOnAxis(D0,e)}translateZ(e){return this.translateOnAxis(I0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?cu.copy(e):cu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(va,cu,this.up):Ki.lookAt(cu,va,this.up),this.quaternion.setFromRotationMatrix(Ki),o&&(Ki.extractRotation(o.matrixWorld),no.setFromRotationMatrix(Ki),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(U0),io.child=e,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(aC),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(U0),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,sC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,oC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),v=u(e.skeletons),S=u(e.animations),M=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}qn.DEFAULT_UP=new ne(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new ne,Zi=new ne,od=new ne,Qi=new ne,ro=new ne,so=new ne,N0=new ne,ad=new ne,ld=new ne,ud=new ne,cd=new Yt,fd=new Yt,dd=new Yt;class Si{constructor(e=new ne,t=new ne,r=new ne){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),yi.subVectors(e,t),o.cross(yi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){yi.subVectors(o,t),Zi.subVectors(r,t),od.subVectors(e,t);const u=yi.dot(yi),c=yi.dot(Zi),d=yi.dot(od),h=Zi.dot(Zi),p=Zi.dot(od),g=u*h-c*c;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(h*d-c*p)*v,M=(u*p-c*d)*v;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,r,o,l,u,c,d){return this.getBarycoord(e,t,r,o,Qi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Qi.x),d.addScaledVector(u,Qi.y),d.addScaledVector(c,Qi.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return cd.setScalar(0),fd.setScalar(0),dd.setScalar(0),cd.fromBufferAttribute(e,t),fd.fromBufferAttribute(e,r),dd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(cd,l.x),u.addScaledVector(fd,l.y),u.addScaledVector(dd,l.z),u}static isFrontFacing(e,t,r,o){return yi.subVectors(r,t),Zi.subVectors(e,t),yi.cross(Zi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),yi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Si.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;ro.subVectors(o,r),so.subVectors(l,r),ad.subVectors(e,r);const d=ro.dot(ad),h=so.dot(ad);if(d<=0&&h<=0)return t.copy(r);ld.subVectors(e,o);const p=ro.dot(ld),g=so.dot(ld);if(p>=0&&g<=p)return t.copy(o);const v=d*g-p*h;if(v<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(r).addScaledVector(ro,u);ud.subVectors(e,l);const S=ro.dot(ud),M=so.dot(ud);if(M>=0&&S<=M)return t.copy(l);const E=S*h-d*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(r).addScaledVector(so,c);const x=p*M-S*g;if(x<=0&&g-p>=0&&S-M>=0)return N0.subVectors(l,o),c=(g-p)/(g-p+(S-M)),t.copy(o).addScaledVector(N0,c);const y=1/(x+E+v);return u=E*y,c=v*y,t.copy(r).addScaledVector(ro,u).addScaledVector(so,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},fu={h:0,s:0,l:0};function hd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Pt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=xt.workingColorSpace){return this.r=e,this.g=t,this.b=r,xt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=xt.workingColorSpace){if(e=pp(e,1),t=Pn(t,0,1),r=Pn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=hd(u,l,e+1/3),this.g=hd(u,l,e),this.b=hd(u,l,e-1/3)}return xt.toWorkingColorSpace(this,o),this}setStyle(e,t=jn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const r=lx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return xt.fromWorkingColorSpace(_n.copy(this),e),Math.round(Pn(_n.r*255,0,255))*65536+Math.round(Pn(_n.g*255,0,255))*256+Math.round(Pn(_n.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(_n.copy(this),t);const r=_n.r,o=_n.g,l=_n.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=jn){xt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,r=_n.g,o=_n.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(fu);const r=Pa(Ur.h,fu.h,t),o=Pa(Ur.s,fu.s,t),l=Pa(Ur.l,fu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Pt;Pt.NAMES=lx;let lC=0;class Ku extends Io{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lC++}),this.uuid=Uo(),this.name="",this.blending=_o,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Vd,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(r.blending=this.blending),this.side!==Hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zd&&(r.blendSrc=this.blendSrc),this.blendDst!==Vd&&(r.blendDst=this.blendDst),this.blendEquation!==vs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gp extends Ku{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=Xy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new ne,du=new Lt;class Ni{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=v0,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)du.fromBufferAttribute(this,t),du.applyMatrix3(e),this.setXY(t,du.x,du.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=co(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Cn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=co(t,this.array)),t}setX(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=co(t,this.array)),t}setY(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=co(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=co(t,this.array)),t}setW(e,t){return this.normalized&&(t=Cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),r=Cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),r=Cn(r,this.array),o=Cn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Cn(t,this.array),r=Cn(r,this.array),o=Cn(o,this.array),l=Cn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==v0&&(e.usage=this.usage),e}}class ux extends Ni{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class cx extends Ni{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Fi extends Ni{constructor(e,t,r){super(new Float32Array(e),t,r)}}let uC=0;const si=new Kt,pd=new qn,oo=new ne,Xn=new Wa,_a=new Wa,an=new ne;class Xr extends Io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uC++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?cx:ux)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,r){return si.makeTranslation(e,t,r),this.applyMatrix4(si),this}scale(e,t,r){return si.makeScale(e,t,r),this.applyMatrix4(si),this}lookAt(e){return pd.lookAt(e),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Fi(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];_a.setFromBufferAttribute(c),this.morphTargetsRelative?(an.addVectors(Xn.min,_a.min),Xn.expandByPoint(an),an.addVectors(Xn.max,_a.max),Xn.expandByPoint(an)):(Xn.expandByPoint(_a.min),Xn.expandByPoint(_a.max))}Xn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)an.fromBufferAttribute(c,h),d&&(oo.fromBufferAttribute(e,h),an.add(oo)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let O=0;O<r.count;O++)c[O]=new ne,d[O]=new ne;const h=new ne,p=new ne,g=new ne,v=new Lt,S=new Lt,M=new Lt,E=new ne,x=new ne;function y(O,b,R){h.fromBufferAttribute(r,O),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,R),v.fromBufferAttribute(l,O),S.fromBufferAttribute(l,b),M.fromBufferAttribute(l,R),p.sub(h),g.sub(h),S.sub(v),M.sub(v);const V=1/(S.x*M.y-M.x*S.y);isFinite(V)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(V),x.copy(g).multiplyScalar(S.x).addScaledVector(p,-M.x).multiplyScalar(V),c[O].add(E),c[b].add(E),c[R].add(E),d[O].add(x),d[b].add(x),d[R].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let O=0,b=L.length;O<b;++O){const R=L[O],V=R.start,le=R.count;for(let Z=V,te=V+le;Z<te;Z+=3)y(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const P=new ne,A=new ne,k=new ne,U=new ne;function N(O){k.fromBufferAttribute(o,O),U.copy(k);const b=c[O];P.copy(b),P.sub(k.multiplyScalar(k.dot(b))).normalize(),A.crossVectors(U,b);const V=A.dot(d[O])<0?-1:1;u.setXYZW(O,P.x,P.y,P.z,V)}for(let O=0,b=L.length;O<b;++O){const R=L[O],V=R.start,le=R.count;for(let Z=V,te=V+le;Z<te;Z+=3)N(e.getX(Z+0)),N(e.getX(Z+1)),N(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new ne,l=new ne,u=new ne,c=new ne,d=new ne,h=new ne,p=new ne,g=new ne;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),E=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,x),p.subVectors(u,l),g.subVectors(o,l),p.cross(g),c.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,x),c.add(p),d.add(p),h.add(p),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(x,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),p.subVectors(u,l),g.subVectors(o,l),p.cross(g),r.setXYZ(v+0,p.x,p.y,p.z),r.setXYZ(v+1,p.x,p.y,p.z),r.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,g=c.normalized,v=new h.constructor(d.length*p);let S=0,M=0;for(let E=0,x=d.length;E<x;E++){c.isInterleavedBufferAttribute?S=d[E]*c.data.stride+c.offset:S=d[E]*p;for(let y=0;y<p;y++)v[M++]=h[S++]}return new Ni(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xr,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let p=0,g=h.length;p<g;p++){const v=h[p],S=e(v,r);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];p.push(S.toJSON(e.data))}p.length>0&&(o[d]=p,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const l=e.morphAttributes;for(const h in l){const p=[],g=l[h];for(let v=0,S=g.length;v<S;v++)p.push(g[v].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const F0=new Kt,us=new tC,hu=new mp,O0=new ne,pu=new ne,mu=new ne,gu=new ne,md=new ne,vu=new ne,k0=new ne,_u=new ne;class Di extends qn{constructor(e=new Xr,t=new gp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){vu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const p=c[d],g=l[d];p!==0&&(md.fromBufferAttribute(g,e),u?vu.addScaledVector(md,p):vu.addScaledVector(md.sub(t),p))}t.add(vu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hu.copy(r.boundingSphere),hu.applyMatrix4(l),us.copy(e.ray).recast(e.near),!(hu.containsPoint(us.origin)===!1&&(us.intersectSphere(hu,O0)===null||us.origin.distanceToSquared(O0)>(e.far-e.near)**2))&&(F0.copy(l).invert(),us.copy(e.ray).applyMatrix4(F0),!(r.boundingBox!==null&&us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,p=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const x=v[M],y=u[x.materialIndex],L=Math.max(x.start,S.start),P=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let A=L,k=P;A<k;A+=3){const U=c.getX(A),N=c.getX(A+1),O=c.getX(A+2);o=yu(this,y,e,r,h,p,g,U,N,O),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(c.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const L=c.getX(x),P=c.getX(x+1),A=c.getX(x+2);o=yu(this,u,e,r,h,p,g,L,P,A),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=v.length;M<E;M++){const x=v[M],y=u[x.materialIndex],L=Math.max(x.start,S.start),P=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let A=L,k=P;A<k;A+=3){const U=A,N=A+1,O=A+2;o=yu(this,y,e,r,h,p,g,U,N,O),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const L=x,P=x+1,A=x+2;o=yu(this,u,e,r,h,p,g,L,P,A),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function cC(n,e,t,r,o,l,u,c){let d;if(e.side===Bn?d=r.intersectTriangle(u,l,o,!0,c):d=r.intersectTriangle(o,l,u,e.side===Hr,c),d===null)return null;_u.copy(c),_u.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(_u);return h<t.near||h>t.far?null:{distance:h,point:_u.clone(),object:n}}function yu(n,e,t,r,o,l,u,c,d,h){n.getVertexPosition(c,pu),n.getVertexPosition(d,mu),n.getVertexPosition(h,gu);const p=cC(n,e,t,r,pu,mu,gu,k0);if(p){const g=new ne;Si.getBarycoord(k0,pu,mu,gu,g),o&&(p.uv=Si.getInterpolatedAttribute(o,c,d,h,g,new Lt)),l&&(p.uv1=Si.getInterpolatedAttribute(l,c,d,h,g,new Lt)),u&&(p.normal=Si.getInterpolatedAttribute(u,c,d,h,g,new ne),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const v={a:c,b:d,c:h,normal:new ne,materialIndex:0};Si.getNormal(pu,mu,gu,v.normal),p.face=v,p.barycoord=g}return p}class Xa extends Xr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],p=[],g=[];let v=0,S=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Fi(h,3)),this.setAttribute("normal",new Fi(p,3)),this.setAttribute("uv",new Fi(g,2));function M(E,x,y,L,P,A,k,U,N,O,b){const R=A/N,V=k/O,le=A/2,Z=k/2,te=U/2,ce=N+1,ae=O+1;let re=0,z=0;const ue=new ne;for(let se=0;se<ae;se++){const F=se*V-Z;for(let ie=0;ie<ce;ie++){const Ue=ie*R-le;ue[E]=Ue*L,ue[x]=F*P,ue[y]=te,h.push(ue.x,ue.y,ue.z),ue[E]=0,ue[x]=0,ue[y]=U>0?1:-1,p.push(ue.x,ue.y,ue.z),g.push(ie/N),g.push(1-se/O),re+=1}}for(let se=0;se<O;se++)for(let F=0;F<N;F++){const ie=v+F+ce*se,Ue=v+F+ce*(se+1),K=v+(F+1)+ce*(se+1),fe=v+(F+1)+ce*se;d.push(ie,Ue,fe),d.push(Ue,K,fe),z+=6}c.addGroup(S,z,b),S+=z,v+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Po(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Rn(n){const e={};for(let t=0;t<n.length;t++){const r=Po(n[t]);for(const o in r)e[o]=r[o]}return e}function fC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const dC={clone:Po,merge:Rn};var hC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends Ku{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hC,this.fragmentShader=pC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=fC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class dx extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new ne,B0=new Lt,z0=new Lt;class ai extends dx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,B0,z0),t.subVectors(z0,B0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ra*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ao=-90,lo=1;class mC extends qn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ai(ao,lo,e,t);o.layers=this.layers,this.add(o);const l=new ai(ao,lo,e,t);l.layers=this.layers,this.add(l);const u=new ai(ao,lo,e,t);u.layers=this.layers,this.add(u);const c=new ai(ao,lo,e,t);c.layers=this.layers,this.add(c);const d=new ai(ao,lo,e,t);d.layers=this.layers,this.add(d);const h=new ai(ao,lo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Vu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,p),e.setRenderTarget(g,v,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class hx extends bn{constructor(e,t,r,o,l,u,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:wo,super(e,t,r,o,l,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gC extends Ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new hx(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Xa(5,5,5),l=new Gr({name:"CubemapFromEquirect",uniforms:Po(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:kr});l.uniforms.tEquirect.value=t;const u=new Di(o,l),c=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Li),new mC(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const gd=new ne,vC=new ne,_C=new lt;class ms{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=gd.subVectors(r,t).cross(vC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(gd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||_C.getNormalMatrix(e),o=this.coplanarPoint(gd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new mp,xu=new ne;class px{constructor(e=new ms,t=new ms,r=new ms,o=new ms,l=new ms,u=new ms){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr){const r=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],d=o[3],h=o[4],p=o[5],g=o[6],v=o[7],S=o[8],M=o[9],E=o[10],x=o[11],y=o[12],L=o[13],P=o[14],A=o[15];if(r[0].setComponents(d-l,v-h,x-S,A-y).normalize(),r[1].setComponents(d+l,v+h,x+S,A+y).normalize(),r[2].setComponents(d+u,v+p,x+M,A+L).normalize(),r[3].setComponents(d-u,v-p,x-M,A-L).normalize(),r[4].setComponents(d-c,v-g,x-E,A-P).normalize(),t===nr)r[5].setComponents(d+c,v+g,x+E,A+P).normalize();else if(t===Vu)r[5].setComponents(c,g,E,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(xu.x=o.normal.x>0?e.max.x:e.min.x,xu.y=o.normal.y>0?e.max.y:e.min.y,xu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(xu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mx(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function yC(n){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,p),c.onUploadCallback();let S;if(h instanceof Float32Array)S=n.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=n.HALF_FLOAT:S=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=n.SHORT;else if(h instanceof Uint32Array)S=n.UNSIGNED_INT;else if(h instanceof Int32Array)S=n.INT;else if(h instanceof Int8Array)S=n.BYTE;else if(h instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,d,h){const p=d.array,g=d.updateRanges;if(n.bindBuffer(h,c),g.length===0)n.bufferSubData(h,0,p);else{g.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<g.length;S++){const M=g[v],E=g[S];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let S=0,M=g.length;S<M;S++){const E=g[S];n.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:l,update:u}}class Zu extends Xr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,p=d+1,g=e/c,v=t/d,S=[],M=[],E=[],x=[];for(let y=0;y<p;y++){const L=y*v-u;for(let P=0;P<h;P++){const A=P*g-l;M.push(A,-L,0),E.push(0,0,1),x.push(P/c),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<c;L++){const P=L+h*y,A=L+h*(y+1),k=L+1+h*(y+1),U=L+1+h*y;S.push(P,A,U),S.push(A,k,U)}this.setIndex(S),this.setAttribute("position",new Fi(M,3)),this.setAttribute("normal",new Fi(E,3)),this.setAttribute("uv",new Fi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.width,e.height,e.widthSegments,e.heightSegments)}}var xC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SC=`#ifdef USE_ALPHAHASH
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
#endif`,MC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AC=`#ifdef USE_AOMAP
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
#endif`,CC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RC=`#ifdef USE_BATCHING
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
#endif`,PC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IC=`#ifdef USE_IRIDESCENCE
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
#endif`,UC=`#ifdef USE_BUMPMAP
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
#endif`,NC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HC=`#if defined( USE_COLOR_ALPHA )
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
#endif`,GC=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,WC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,XC=`vec3 transformedNormal = objectNormal;
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
#endif`,jC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$C=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KC="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QC=`#ifdef USE_ENVMAP
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
#endif`,JC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eR=`#ifdef USE_ENVMAP
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
#endif`,tR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nR=`#ifdef USE_ENVMAP
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
#endif`,iR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aR=`#ifdef USE_GRADIENTMAP
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
}`,lR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fR=`uniform bool receiveShadow;
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
#endif`,dR=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,hR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,_R=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yR=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,xR=`#if defined( RE_IndirectDiffuse )
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
#endif`,SR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ER=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PR=`#if defined( USE_POINTS_UV )
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
#endif`,bR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NR=`#ifdef USE_MORPHTARGETS
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
#endif`,FR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HR=`#ifdef USE_NORMALMAP
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
#endif`,GR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$R=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rP=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,sP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oP=`#ifdef USE_SKINNING
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
#endif`,aP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lP=`#ifdef USE_SKINNING
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
#endif`,uP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hP=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pP=`#ifdef USE_TRANSMISSION
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
#endif`,mP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_P=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xP=`uniform sampler2D t2D;
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
}`,SP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wP=`#include <common>
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
}`,AP=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CP=`#define DISTANCE
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
}`,RP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,PP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LP=`uniform float scale;
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
}`,DP=`uniform vec3 diffuse;
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
}`,IP=`#include <common>
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
}`,UP=`uniform vec3 diffuse;
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
}`,NP=`#define LAMBERT
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
}`,FP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,OP=`#define MATCAP
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
}`,kP=`#define MATCAP
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
}`,BP=`#define NORMAL
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
}`,zP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VP=`#define PHONG
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
}`,HP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,GP=`#define STANDARD
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
}`,WP=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,XP=`#define TOON
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
}`,jP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,YP=`uniform float size;
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
}`,qP=`uniform vec3 diffuse;
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
}`,$P=`#include <common>
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
}`,KP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ZP=`uniform float rotation;
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
}`,QP=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:xC,alphahash_pars_fragment:SC,alphamap_fragment:MC,alphamap_pars_fragment:EC,alphatest_fragment:TC,alphatest_pars_fragment:wC,aomap_fragment:AC,aomap_pars_fragment:CC,batching_pars_vertex:RC,batching_vertex:PC,begin_vertex:bC,beginnormal_vertex:LC,bsdfs:DC,iridescence_fragment:IC,bumpmap_pars_fragment:UC,clipping_planes_fragment:NC,clipping_planes_pars_fragment:FC,clipping_planes_pars_vertex:OC,clipping_planes_vertex:kC,color_fragment:BC,color_pars_fragment:zC,color_pars_vertex:VC,color_vertex:HC,common:GC,cube_uv_reflection_fragment:WC,defaultnormal_vertex:XC,displacementmap_pars_vertex:jC,displacementmap_vertex:YC,emissivemap_fragment:qC,emissivemap_pars_fragment:$C,colorspace_fragment:KC,colorspace_pars_fragment:ZC,envmap_fragment:QC,envmap_common_pars_fragment:JC,envmap_pars_fragment:eR,envmap_pars_vertex:tR,envmap_physical_pars_fragment:dR,envmap_vertex:nR,fog_vertex:iR,fog_pars_vertex:rR,fog_fragment:sR,fog_pars_fragment:oR,gradientmap_pars_fragment:aR,lightmap_pars_fragment:lR,lights_lambert_fragment:uR,lights_lambert_pars_fragment:cR,lights_pars_begin:fR,lights_toon_fragment:hR,lights_toon_pars_fragment:pR,lights_phong_fragment:mR,lights_phong_pars_fragment:gR,lights_physical_fragment:vR,lights_physical_pars_fragment:_R,lights_fragment_begin:yR,lights_fragment_maps:xR,lights_fragment_end:SR,logdepthbuf_fragment:MR,logdepthbuf_pars_fragment:ER,logdepthbuf_pars_vertex:TR,logdepthbuf_vertex:wR,map_fragment:AR,map_pars_fragment:CR,map_particle_fragment:RR,map_particle_pars_fragment:PR,metalnessmap_fragment:bR,metalnessmap_pars_fragment:LR,morphinstance_vertex:DR,morphcolor_vertex:IR,morphnormal_vertex:UR,morphtarget_pars_vertex:NR,morphtarget_vertex:FR,normal_fragment_begin:OR,normal_fragment_maps:kR,normal_pars_fragment:BR,normal_pars_vertex:zR,normal_vertex:VR,normalmap_pars_fragment:HR,clearcoat_normal_fragment_begin:GR,clearcoat_normal_fragment_maps:WR,clearcoat_pars_fragment:XR,iridescence_pars_fragment:jR,opaque_fragment:YR,packing:qR,premultiplied_alpha_fragment:$R,project_vertex:KR,dithering_fragment:ZR,dithering_pars_fragment:QR,roughnessmap_fragment:JR,roughnessmap_pars_fragment:eP,shadowmap_pars_fragment:tP,shadowmap_pars_vertex:nP,shadowmap_vertex:iP,shadowmask_pars_fragment:rP,skinbase_vertex:sP,skinning_pars_vertex:oP,skinning_vertex:aP,skinnormal_vertex:lP,specularmap_fragment:uP,specularmap_pars_fragment:cP,tonemapping_fragment:fP,tonemapping_pars_fragment:dP,transmission_fragment:hP,transmission_pars_fragment:pP,uv_pars_fragment:mP,uv_pars_vertex:gP,uv_vertex:vP,worldpos_vertex:_P,background_vert:yP,background_frag:xP,backgroundCube_vert:SP,backgroundCube_frag:MP,cube_vert:EP,cube_frag:TP,depth_vert:wP,depth_frag:AP,distanceRGBA_vert:CP,distanceRGBA_frag:RP,equirect_vert:PP,equirect_frag:bP,linedashed_vert:LP,linedashed_frag:DP,meshbasic_vert:IP,meshbasic_frag:UP,meshlambert_vert:NP,meshlambert_frag:FP,meshmatcap_vert:OP,meshmatcap_frag:kP,meshnormal_vert:BP,meshnormal_frag:zP,meshphong_vert:VP,meshphong_frag:HP,meshphysical_vert:GP,meshphysical_frag:WP,meshtoon_vert:XP,meshtoon_frag:jP,points_vert:YP,points_frag:qP,shadow_vert:$P,shadow_frag:KP,sprite_vert:ZP,sprite_frag:QP},Pe={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},bi={basic:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Rn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Rn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Rn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Rn([Pe.points,Pe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Rn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Rn([Pe.common,Pe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Rn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Rn([Pe.sprite,Pe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Rn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Rn([Pe.lights,Pe.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};bi.physical={uniforms:Rn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Su={r:0,b:0,g:0},fs=new lr,JP=new Kt;function eb(n,e,t,r,o,l,u){const c=new Pt(0);let d=l===!0?0:1,h,p,g=null,v=0,S=null;function M(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function E(L){let P=!1;const A=M(L);A===null?y(c,d):A&&A.isColor&&(y(A,1),P=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(L,P){const A=M(P);A&&(A.isCubeTexture||A.mapping===qu)?(p===void 0&&(p=new Di(new Xa(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:Po(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),fs.copy(P.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),p.material.uniforms.envMap.value=A,p.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(JP.makeRotationFromEuler(fs)),p.material.toneMapped=xt.getTransfer(A.colorSpace)!==Rt,(g!==A||v!==A.version||S!==n.toneMapping)&&(p.material.needsUpdate=!0,g=A,v=A.version,S=n.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new Di(new Zu(2,2),new Gr({name:"BackgroundMaterial",uniforms:Po(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=xt.getTransfer(A.colorSpace)!==Rt,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||v!==A.version||S!==n.toneMapping)&&(h.material.needsUpdate=!0,g=A,v=A.version,S=n.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function y(L,P){L.getRGB(Su,fx(n)),r.buffers.color.setClear(Su.r,Su.g,Su.b,P,u)}return{getClearColor:function(){return c},setClearColor:function(L,P=1){c.set(L),d=P,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,y(c,d)},render:E,addToRenderList:x}}function tb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function c(R,V,le,Z,te){let ce=!1;const ae=g(Z,le,V);l!==ae&&(l=ae,h(l.object)),ce=S(R,Z,le,te),ce&&M(R,Z,le,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,A(R,V,le,Z),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function d(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function p(R){return n.deleteVertexArray(R)}function g(R,V,le){const Z=le.wireframe===!0;let te=r[R.id];te===void 0&&(te={},r[R.id]=te);let ce=te[V.id];ce===void 0&&(ce={},te[V.id]=ce);let ae=ce[Z];return ae===void 0&&(ae=v(d()),ce[Z]=ae),ae}function v(R){const V=[],le=[],Z=[];for(let te=0;te<t;te++)V[te]=0,le[te]=0,Z[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:le,attributeDivisors:Z,object:R,attributes:{},index:null}}function S(R,V,le,Z){const te=l.attributes,ce=V.attributes;let ae=0;const re=le.getAttributes();for(const z in re)if(re[z].location>=0){const se=te[z];let F=ce[z];if(F===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;ae++}return l.attributesNum!==ae||l.index!==Z}function M(R,V,le,Z){const te={},ce=V.attributes;let ae=0;const re=le.getAttributes();for(const z in re)if(re[z].location>=0){let se=ce[z];se===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),te[z]=F,ae++}l.attributes=te,l.attributesNum=ae,l.index=Z}function E(){const R=l.newAttributes;for(let V=0,le=R.length;V<le;V++)R[V]=0}function x(R){y(R,0)}function y(R,V){const le=l.newAttributes,Z=l.enabledAttributes,te=l.attributeDivisors;le[R]=1,Z[R]===0&&(n.enableVertexAttribArray(R),Z[R]=1),te[R]!==V&&(n.vertexAttribDivisor(R,V),te[R]=V)}function L(){const R=l.newAttributes,V=l.enabledAttributes;for(let le=0,Z=V.length;le<Z;le++)V[le]!==R[le]&&(n.disableVertexAttribArray(le),V[le]=0)}function P(R,V,le,Z,te,ce,ae){ae===!0?n.vertexAttribIPointer(R,V,le,te,ce):n.vertexAttribPointer(R,V,le,Z,te,ce)}function A(R,V,le,Z){E();const te=Z.attributes,ce=le.getAttributes(),ae=V.defaultAttributeValues;for(const re in ce){const z=ce[re];if(z.location>=0){let ue=te[re];if(ue===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),ue!==void 0){const se=ue.normalized,F=ue.itemSize,ie=e.get(ue);if(ie===void 0)continue;const Ue=ie.buffer,K=ie.type,fe=ie.bytesPerElement,Ee=K===n.INT||K===n.UNSIGNED_INT||ue.gpuType===lp;if(ue.isInterleavedBufferAttribute){const _e=ue.data,Ae=_e.stride,Ne=ue.offset;if(_e.isInstancedInterleavedBuffer){for(let Qe=0;Qe<z.locationSize;Qe++)y(z.location+Qe,_e.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Qe=0;Qe<z.locationSize;Qe++)x(z.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Qe=0;Qe<z.locationSize;Qe++)P(z.location+Qe,F/z.locationSize,K,se,Ae*fe,(Ne+F/z.locationSize*Qe)*fe,Ee)}else{if(ue.isInstancedBufferAttribute){for(let _e=0;_e<z.locationSize;_e++)y(z.location+_e,ue.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let _e=0;_e<z.locationSize;_e++)x(z.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let _e=0;_e<z.locationSize;_e++)P(z.location+_e,F/z.locationSize,K,se,F*fe,F/z.locationSize*_e*fe,Ee)}}else if(ae!==void 0){const se=ae[re];if(se!==void 0)switch(se.length){case 2:n.vertexAttrib2fv(z.location,se);break;case 3:n.vertexAttrib3fv(z.location,se);break;case 4:n.vertexAttrib4fv(z.location,se);break;default:n.vertexAttrib1fv(z.location,se)}}}}L()}function k(){O();for(const R in r){const V=r[R];for(const le in V){const Z=V[le];for(const te in Z)p(Z[te].object),delete Z[te];delete V[le]}delete r[R]}}function U(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const le in V){const Z=V[le];for(const te in Z)p(Z[te].object),delete Z[te];delete V[le]}delete r[R.id]}function N(R){for(const V in r){const le=r[V];if(le[R.id]===void 0)continue;const Z=le[R.id];for(const te in Z)p(Z[te].object),delete Z[te];delete le[R.id]}}function O(){b(),u=!0,l!==o&&(l=o,h(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:O,resetDefaultState:b,dispose:k,releaseStatesOfGeometry:U,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:x,disableUnusedAttributes:L}}function nb(n,e,t){let r;function o(h){r=h}function l(h,p){n.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,g){g!==0&&(n.drawArraysInstanced(r,h,p,g),t.update(p,r,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,g);let S=0;for(let M=0;M<g;M++)S+=p[M];t.update(S,r,1)}function d(h,p,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)u(h[M],p[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,p,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=p[E]*v[E];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function ib(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(N){return!(N!==Mi&&r.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const O=N===Ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ar&&r.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==tr&&!O)}function d(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),L=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:k,maxSamples:U}}function rb(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new ms,c=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||r!==0||o;return o=v,r=g.length,S},this.beginShadows=function(){l=!0,p(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,S){const M=g.clippingPlanes,E=g.clipIntersection,x=g.clipShadows,y=n.get(g);if(!o||M===null||M.length===0||l&&!x)l?p(null):h();else{const L=l?0:r,P=L*4;let A=y.clippingState||null;d.value=A,A=p(M,v,P,S);for(let k=0;k!==P;++k)A[k]=t[k];y.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(g,v,S,M){const E=g!==null?g.length:0;let x=null;if(E!==0){if(x=d.value,M!==!0||x===null){const y=S+E*4,L=v.matrixWorldInverse;c.getNormalMatrix(L),(x===null||x.length<y)&&(x=new Float32Array(y));for(let P=0,A=S;P!==E;++P,A+=4)u.copy(g[P]).applyMatrix4(L,c),u.normal.toArray(x,A),x[A+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}function sb(n){let e=new WeakMap;function t(u,c){return c===$d?u.mapping=wo:c===Kd&&(u.mapping=Ao),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===$d||c===Kd)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new gC(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class ob extends dx{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vo=4,V0=[.125,.215,.35,.446,.526,.582],_s=20,vd=new ob,H0=new Pt;let _d=null,yd=0,xd=0,Sd=!1;const gs=(1+Math.sqrt(5))/2,uo=1/gs,G0=[new ne(-gs,uo,0),new ne(gs,uo,0),new ne(-uo,0,gs),new ne(uo,0,gs),new ne(0,gs,-uo),new ne(0,gs,uo),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class W0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=j0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,yd,xd),this._renderer.xr.enabled=Sd,e.scissorTest=!1,Mu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wo||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Ha,format:Mi,colorSpace:Do,depthBuffer:!1},o=X0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=X0(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ab(l)),this._blurMaterial=lb(l,e,t)}return o}_compileMaterial(e){const t=new Di(this._lodPlanes[0],e);this._renderer.compile(t,vd)}_sceneToCubeUV(e,t,r,o){const c=new ai(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(H0),p.toneMapping=Br,p.autoClear=!1;const S=new gp({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new Di(new Xa,S);let E=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,E=!0):(S.color.copy(H0),E=!0);for(let y=0;y<6;y++){const L=y%3;L===0?(c.up.set(0,d[y],0),c.lookAt(h[y],0,0)):L===1?(c.up.set(0,0,d[y]),c.lookAt(0,h[y],0)):(c.up.set(0,d[y],0),c.lookAt(0,0,h[y]));const P=this._cubeSize;Mu(o,L*P,y>2?P:0,P,P),p.setRenderTarget(o),E&&p.render(M,c),p.render(e,c)}M.geometry.dispose(),M.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===wo||e.mapping===Ao;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=j0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Di(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;Mu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,vd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=G0[(o-l-1)%G0.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Di(this._lodPlanes[o],h),v=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*_s-1),E=l/M,x=isFinite(l)?1+Math.floor(p*E):_s;x>_s&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${_s}`);const y=[];let L=0;for(let N=0;N<_s;++N){const O=N/E,b=Math.exp(-O*O/2);y.push(b),N===0?L+=b:N<x&&(L+=2*b)}for(let N=0;N<y.length;N++)y[N]=y[N]/L;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-r;const A=this._sizeLods[o],k=3*A*(o>P-vo?o-P+vo:0),U=4*(this._cubeSize-A);Mu(t,k,U,3*A,2*A),d.setRenderTarget(t),d.render(g,vd)}}function ab(n){const e=[],t=[],r=[];let o=n;const l=n-vo+1+V0.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-vo?d=V0[u-n+vo-1]:u===0&&(d=0),r.push(d);const h=1/(c-2),p=-h,g=1+h,v=[p,p,g,p,g,g,p,p,g,g,p,g],S=6,M=6,E=3,x=2,y=1,L=new Float32Array(E*M*S),P=new Float32Array(x*M*S),A=new Float32Array(y*M*S);for(let U=0;U<S;U++){const N=U%3*2/3-1,O=U>2?0:-1,b=[N,O,0,N+2/3,O,0,N+2/3,O+1,0,N,O,0,N+2/3,O+1,0,N,O+1,0];L.set(b,E*M*U),P.set(v,x*M*U);const R=[U,U,U,U,U,U];A.set(R,y*M*U)}const k=new Xr;k.setAttribute("position",new Ni(L,E)),k.setAttribute("uv",new Ni(P,x)),k.setAttribute("faceIndex",new Ni(A,y)),e.push(k),o>vo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function X0(n,e,t){const r=new Ts(n,e,t);return r.texture.mapping=qu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Mu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function lb(n,e,t){const r=new Float32Array(_s),o=new ne(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:vp(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function j0(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vp(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Y0(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function vp(){return`

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
	`}function ub(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===$d||d===Kd,p=d===wo||d===Ao;if(h||p){let g=e.get(c);const v=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==v)return t===null&&(t=new W0(n)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const S=c.image;return h&&S&&S.height>0||p&&S&&o(S)?(t===null&&(t=new W0(n)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",l),g.texture):null}}}return c}function o(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function cb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ma("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function fb(n,e,t,r){const o={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const E=v.morphAttributes[M];for(let x=0,y=E.length;x<y;x++)e.remove(E[x])}v.removeEventListener("dispose",u),delete o[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const M in v)e.update(v[M],n.ARRAY_BUFFER);const S=g.morphAttributes;for(const M in S){const E=S[M];for(let x=0,y=E.length;x<y;x++)e.update(E[x],n.ARRAY_BUFFER)}}function h(g){const v=[],S=g.index,M=g.attributes.position;let E=0;if(S!==null){const L=S.array;E=S.version;for(let P=0,A=L.length;P<A;P+=3){const k=L[P+0],U=L[P+1],N=L[P+2];v.push(k,U,U,N,N,k)}}else if(M!==void 0){const L=M.array;E=M.version;for(let P=0,A=L.length/3-1;P<A;P+=3){const k=P+0,U=P+1,N=P+2;v.push(k,U,U,N,N,k)}}else return;const x=new(rx(v)?cx:ux)(v,1);x.version=E;const y=l.get(g);y&&e.remove(y),l.set(g,x)}function p(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&h(g)}else h(g);return l.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function db(n,e,t){let r;function o(v){r=v}let l,u;function c(v){l=v.type,u=v.bytesPerElement}function d(v,S){n.drawElements(r,S,l,v*u),t.update(S,r,1)}function h(v,S,M){M!==0&&(n.drawElementsInstanced(r,S,l,v*u,M),t.update(S,r,M))}function p(v,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,v,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];t.update(x,r,1)}function g(v,S,M,E){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)h(v[y]/u,S[y],E[y]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,v,0,E,0,M);let y=0;for(let L=0;L<M;L++)y+=S[L]*E[L];t.update(y,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function hb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function pb(n,e,t){const r=new WeakMap,o=new Yt;function l(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let v=r.get(c);if(v===void 0||v.count!==g){let R=function(){O.dispose(),r.delete(c),c.removeEventListener("dispose",R)};var S=R;v!==void 0&&v.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let A=0;M===!0&&(A=1),E===!0&&(A=2),x===!0&&(A=3);let k=c.attributes.position.count*A,U=1;k>e.maxTextureSize&&(U=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const N=new Float32Array(k*U*4*g),O=new ox(N,k,U,g);O.type=tr,O.needsUpdate=!0;const b=A*4;for(let V=0;V<g;V++){const le=y[V],Z=L[V],te=P[V],ce=k*U*4*V;for(let ae=0;ae<le.count;ae++){const re=ae*b;M===!0&&(o.fromBufferAttribute(le,ae),N[ce+re+0]=o.x,N[ce+re+1]=o.y,N[ce+re+2]=o.z,N[ce+re+3]=0),E===!0&&(o.fromBufferAttribute(Z,ae),N[ce+re+4]=o.x,N[ce+re+5]=o.y,N[ce+re+6]=o.z,N[ce+re+7]=0),x===!0&&(o.fromBufferAttribute(te,ae),N[ce+re+8]=o.x,N[ce+re+9]=o.y,N[ce+re+10]=o.z,N[ce+re+11]=te.itemSize===4?o.w:1)}}v={count:g,texture:O,size:new Lt(k,U)},r.set(c,v),c.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const E=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function mb(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,p=d.geometry,g=e.get(d,p);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}class gx extends bn{constructor(e,t,r,o,l,u,c,d,h,p=yo){if(p!==yo&&p!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===yo&&(r=Es),r===void 0&&p===Ro&&(r=Co),super(null,o,l,u,c,d,p,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Ei,this.minFilter=d!==void 0?d:Ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vx=new bn,q0=new gx(1,1),_x=new ox,yx=new JA,xx=new hx,$0=[],K0=[],Z0=new Float32Array(16),Q0=new Float32Array(9),J0=new Float32Array(4);function No(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=$0[o];if(l===void 0&&(l=new Float32Array(o),$0[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Qu(n,e){let t=K0[e];t===void 0&&(t=new Int32Array(e),K0[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function gb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function _b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function xb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;J0.set(r),n.uniformMatrix2fv(this.addr,!1,J0),nn(t,r)}}function Sb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;Q0.set(r),n.uniformMatrix3fv(this.addr,!1,Q0),nn(t,r)}}function Mb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;Z0.set(r),n.uniformMatrix4fv(this.addr,!1,Z0),nn(t,r)}}function Eb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function wb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function Ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function Cb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function Pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function Lb(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(q0.compareFunction=ix,l=q0):l=vx,t.setTexture2D(e||l,o)}function Db(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||yx,o)}function Ib(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||xx,o)}function Ub(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||_x,o)}function Nb(n){switch(n){case 5126:return gb;case 35664:return vb;case 35665:return _b;case 35666:return yb;case 35674:return xb;case 35675:return Sb;case 35676:return Mb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return wb;case 35669:case 35673:return Ab;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Ub}}function Fb(n,e){n.uniform1fv(this.addr,e)}function Ob(n,e){const t=No(e,this.size,2);n.uniform2fv(this.addr,t)}function kb(n,e){const t=No(e,this.size,3);n.uniform3fv(this.addr,t)}function Bb(n,e){const t=No(e,this.size,4);n.uniform4fv(this.addr,t)}function zb(n,e){const t=No(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vb(n,e){const t=No(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hb(n,e){const t=No(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gb(n,e){n.uniform1iv(this.addr,e)}function Wb(n,e){n.uniform2iv(this.addr,e)}function Xb(n,e){n.uniform3iv(this.addr,e)}function jb(n,e){n.uniform4iv(this.addr,e)}function Yb(n,e){n.uniform1uiv(this.addr,e)}function qb(n,e){n.uniform2uiv(this.addr,e)}function $b(n,e){n.uniform3uiv(this.addr,e)}function Kb(n,e){n.uniform4uiv(this.addr,e)}function Zb(n,e,t){const r=this.cache,o=e.length,l=Qu(t,o);tn(r,l)||(n.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||vx,l[u])}function Qb(n,e,t){const r=this.cache,o=e.length,l=Qu(t,o);tn(r,l)||(n.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||yx,l[u])}function Jb(n,e,t){const r=this.cache,o=e.length,l=Qu(t,o);tn(r,l)||(n.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||xx,l[u])}function e2(n,e,t){const r=this.cache,o=e.length,l=Qu(t,o);tn(r,l)||(n.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||_x,l[u])}function t2(n){switch(n){case 5126:return Fb;case 35664:return Ob;case 35665:return kb;case 35666:return Bb;case 35674:return zb;case 35675:return Vb;case 35676:return Hb;case 5124:case 35670:return Gb;case 35667:case 35671:return Wb;case 35668:case 35672:return Xb;case 35669:case 35673:return jb;case 5125:return Yb;case 36294:return qb;case 36295:return $b;case 36296:return Kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return e2}}class n2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Nb(t.type)}}class i2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t2(t.type)}}class r2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function e_(n,e){n.seq.push(e),n.map[e.id]=e}function s2(n,e,t){const r=n.name,o=r.length;for(Md.lastIndex=0;;){const l=Md.exec(r),u=Md.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){e_(t,h===void 0?new n2(c,n,e):new i2(c,n,e));break}else{let g=t.map[c];g===void 0&&(g=new r2(c),e_(t,g)),t=g}}}class Iu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);s2(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function t_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const o2=37297;let a2=0;function l2(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const n_=new lt;function u2(n){xt._getMatrix(n_,xt.workingColorSpace,n);const e=`mat3( ${n_.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case $u:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function i_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+l2(n.getShaderSource(e),u)}else return o}function c2(n,e){const t=u2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function f2(n,e){let t;switch(e){case cA:t="Linear";break;case fA:t="Reinhard";break;case dA:t="Cineon";break;case hA:t="ACESFilmic";break;case mA:t="AgX";break;case gA:t="Neutral";break;case pA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Eu=new ne;function d2(){xt.getLuminanceCoefficients(Eu);const n=Eu.x.toFixed(4),e=Eu.y.toFixed(4),t=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function p2(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function m2(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function Ea(n){return n!==""}function r_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g2=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(n){return n.replace(g2,_2)}const v2=new Map;function _2(n,e){let t=ut[e];if(t===void 0){const r=v2.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return wh(t)}const y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o_(n){return n.replace(y2,x2)}function x2(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function a_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Gw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function M2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wo:case Ao:e="ENVMAP_TYPE_CUBE";break;case qu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ao:e="ENVMAP_MODE_REFRACTION";break}return e}function T2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xy:e="ENVMAP_BLENDING_MULTIPLY";break;case lA:e="ENVMAP_BLENDING_MIX";break;case uA:e="ENVMAP_BLENDING_ADD";break}return e}function w2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function A2(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=S2(t),h=M2(t),p=E2(t),g=T2(t),v=w2(t),S=h2(t),M=p2(l),E=o.createProgram();let x,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ea).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ea).join(`
`),y.length>0&&(y+=`
`)):(x=[a_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),y=[a_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Br?"#define TONE_MAPPING":"",t.toneMapping!==Br?ut.tonemapping_pars_fragment:"",t.toneMapping!==Br?f2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,c2("linearToOutputTexel",t.outputColorSpace),d2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),u=wh(u),u=r_(u,t),u=s_(u,t),c=wh(c),c=r_(c,t),c=s_(c,t),u=o_(u),c=o_(c),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===_0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=L+x+u,A=L+y+c,k=t_(o,o.VERTEX_SHADER,P),U=t_(o,o.FRAGMENT_SHADER,A);o.attachShader(E,k),o.attachShader(E,U),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function N(V){if(n.debug.checkShaderErrors){const le=o.getProgramInfoLog(E).trim(),Z=o.getShaderInfoLog(k).trim(),te=o.getShaderInfoLog(U).trim();let ce=!0,ae=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(ce=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,E,k,U);else{const re=i_(o,k,"vertex"),z=i_(o,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+le+`
`+re+`
`+z)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(Z===""||te==="")&&(ae=!1);ae&&(V.diagnostics={runnable:ce,programLog:le,vertexShader:{log:Z,prefix:x},fragmentShader:{log:te,prefix:y}})}o.deleteShader(k),o.deleteShader(U),O=new Iu(o,E),b=m2(o,E)}let O;this.getUniforms=function(){return O===void 0&&N(this),O};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(E,o2)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=k,this.fragmentShader=U,this}let C2=0;class R2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new P2(e),t.set(e,r)),r}}class P2{constructor(e){this.id=C2++,this.code=e,this.usedTimes=0}}function b2(n,e,t,r,o,l,u){const c=new ax,d=new R2,h=new Set,p=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return h.add(b),b===0?"uv":`uv${b}`}function x(b,R,V,le,Z){const te=le.fog,ce=Z.geometry,ae=b.isMeshStandardMaterial?le.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||ae),z=re&&re.mapping===qu?re.image.height:null,ue=M[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const se=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,F=se!==void 0?se.length:0;let ie=0;ce.morphAttributes.position!==void 0&&(ie=1),ce.morphAttributes.normal!==void 0&&(ie=2),ce.morphAttributes.color!==void 0&&(ie=3);let Ue,K,fe,Ee;if(ue){const _t=bi[ue];Ue=_t.vertexShader,K=_t.fragmentShader}else Ue=b.vertexShader,K=b.fragmentShader,d.update(b),fe=d.getVertexShaderID(b),Ee=d.getFragmentShaderID(b);const _e=n.getRenderTarget(),Ae=n.state.buffers.depth.getReversed(),Ne=Z.isInstancedMesh===!0,Qe=Z.isBatchedMesh===!0,Ct=!!b.map,mt=!!b.matcap,Dt=!!re,j=!!b.aoMap,Mn=!!b.lightMap,pt=!!b.bumpMap,ft=!!b.normalMap,$e=!!b.displacementMap,wt=!!b.emissiveMap,qe=!!b.metalnessMap,D=!!b.roughnessMap,w=b.anisotropy>0,$=b.clearcoat>0,pe=b.dispersion>0,ge=b.iridescence>0,de=b.sheen>0,Ge=b.transmission>0,Ce=w&&!!b.anisotropyMap,Fe=$&&!!b.clearcoatMap,ct=$&&!!b.clearcoatNormalMap,Se=$&&!!b.clearcoatRoughnessMap,ke=ge&&!!b.iridescenceMap,Je=ge&&!!b.iridescenceThicknessMap,tt=de&&!!b.sheenColorMap,Be=de&&!!b.sheenRoughnessMap,dt=!!b.specularMap,st=!!b.specularColorMap,Tt=!!b.specularIntensityMap,G=Ge&&!!b.transmissionMap,Re=Ge&&!!b.thicknessMap,oe=!!b.gradientMap,he=!!b.alphaMap,De=b.alphaTest>0,be=!!b.alphaHash,ot=!!b.extensions;let Nt=Br;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const Zt={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:Ue,fragmentShader:K,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Qe,batchingColor:Qe&&Z._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&Z.instanceColor!==null,instancingMorph:Ne&&Z.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Do,alphaToCoverage:!!b.alphaToCoverage,map:Ct,matcap:mt,envMap:Dt,envMapMode:Dt&&re.mapping,envMapCubeUVHeight:z,aoMap:j,lightMap:Mn,bumpMap:pt,normalMap:ft,displacementMap:v&&$e,emissiveMap:wt,normalMapObjectSpace:ft&&b.normalMapType===SA,normalMapTangentSpace:ft&&b.normalMapType===xA,metalnessMap:qe,roughnessMap:D,anisotropy:w,anisotropyMap:Ce,clearcoat:$,clearcoatMap:Fe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:ge,iridescenceMap:ke,iridescenceThicknessMap:Je,sheen:de,sheenColorMap:tt,sheenRoughnessMap:Be,specularMap:dt,specularColorMap:st,specularIntensityMap:Tt,transmission:Ge,transmissionMap:G,thicknessMap:Re,gradientMap:oe,opaque:b.transparent===!1&&b.blending===_o&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:De,alphaHash:be,combine:b.combine,mapUv:Ct&&E(b.map.channel),aoMapUv:j&&E(b.aoMap.channel),lightMapUv:Mn&&E(b.lightMap.channel),bumpMapUv:pt&&E(b.bumpMap.channel),normalMapUv:ft&&E(b.normalMap.channel),displacementMapUv:$e&&E(b.displacementMap.channel),emissiveMapUv:wt&&E(b.emissiveMap.channel),metalnessMapUv:qe&&E(b.metalnessMap.channel),roughnessMapUv:D&&E(b.roughnessMap.channel),anisotropyMapUv:Ce&&E(b.anisotropyMap.channel),clearcoatMapUv:Fe&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(b.sheenRoughnessMap.channel),specularMapUv:dt&&E(b.specularMap.channel),specularColorMapUv:st&&E(b.specularColorMap.channel),specularIntensityMapUv:Tt&&E(b.specularIntensityMap.channel),transmissionMapUv:G&&E(b.transmissionMap.channel),thicknessMapUv:Re&&E(b.thicknessMap.channel),alphaMapUv:he&&E(b.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(ft||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ce.attributes.uv&&(Ct||he),fog:!!te,useFog:b.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Ct&&b.map.isVideoTexture===!0&&xt.getTransfer(b.map.colorSpace)===Rt,decodeVideoTextureEmissive:wt&&b.emissiveMap.isVideoTexture===!0&&xt.getTransfer(b.emissiveMap.colorSpace)===Rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===er,flipSided:b.side===Bn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ot&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&b.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=h.has(1),Zt.vertexUv2s=h.has(2),Zt.vertexUv3s=h.has(3),h.clear(),Zt}function y(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)R.push(V),R.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(L(R,b),P(R,b),R.push(n.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function L(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function P(b,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),b.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reverseDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),b.push(c.mask)}function A(b){const R=M[b.type];let V;if(R){const le=bi[R];V=dC.clone(le.uniforms)}else V=b.uniforms;return V}function k(b,R){let V;for(let le=0,Z=p.length;le<Z;le++){const te=p[le];if(te.cacheKey===R){V=te,++V.usedTimes;break}}return V===void 0&&(V=new A2(n,R,b,l),p.push(V)),V}function U(b){if(--b.usedTimes===0){const R=p.indexOf(b);p[R]=p[p.length-1],p.pop(),b.destroy()}}function N(b){d.remove(b)}function O(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:A,acquireProgram:k,releaseProgram:U,releaseShaderCache:N,programs:p,dispose:O}}function L2(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function D2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function l_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function u_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,v,S,M,E,x){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:S,groupOrder:M,renderOrder:g.renderOrder,z:E,group:x},n[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=S,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=x),e++,y}function c(g,v,S,M,E,x){const y=u(g,v,S,M,E,x);S.transmission>0?r.push(y):S.transparent===!0?o.push(y):t.push(y)}function d(g,v,S,M,E,x){const y=u(g,v,S,M,E,x);S.transmission>0?r.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,v){t.length>1&&t.sort(g||D2),r.length>1&&r.sort(v||l_),o.length>1&&o.sort(v||l_)}function p(){for(let g=e,v=n.length;g<v;g++){const S=n[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:d,finish:p,sort:h}}function I2(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new u_,n.set(r,[u])):o>=l.length?(u=new u_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function U2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Pt};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return n[e.id]=t,t}}}function N2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let F2=0;function O2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function k2(n){const e=new U2,t=N2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ne);const o=new ne,l=new Kt,u=new Kt;function c(h){let p=0,g=0,v=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,M=0,E=0,x=0,y=0,L=0,P=0,A=0,k=0,U=0,N=0;h.sort(O2);for(let b=0,R=h.length;b<R;b++){const V=h[b],le=V.color,Z=V.intensity,te=V.distance,ce=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)p+=le.r*Z,g+=le.g*Z,v+=le.b*Z;else if(V.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(V.sh.coefficients[ae],Z);N++}else if(V.isDirectionalLight){const ae=e.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const re=V.shadow,z=t.get(V);z.shadowIntensity=re.intensity,z.shadowBias=re.bias,z.shadowNormalBias=re.normalBias,z.shadowRadius=re.radius,z.shadowMapSize=re.mapSize,r.directionalShadow[S]=z,r.directionalShadowMap[S]=ce,r.directionalShadowMatrix[S]=V.shadow.matrix,L++}r.directional[S]=ae,S++}else if(V.isSpotLight){const ae=e.get(V);ae.position.setFromMatrixPosition(V.matrixWorld),ae.color.copy(le).multiplyScalar(Z),ae.distance=te,ae.coneCos=Math.cos(V.angle),ae.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ae.decay=V.decay,r.spot[E]=ae;const re=V.shadow;if(V.map&&(r.spotLightMap[k]=V.map,k++,re.updateMatrices(V),V.castShadow&&U++),r.spotLightMatrix[E]=re.matrix,V.castShadow){const z=t.get(V);z.shadowIntensity=re.intensity,z.shadowBias=re.bias,z.shadowNormalBias=re.normalBias,z.shadowRadius=re.radius,z.shadowMapSize=re.mapSize,r.spotShadow[E]=z,r.spotShadowMap[E]=ce,A++}E++}else if(V.isRectAreaLight){const ae=e.get(V);ae.color.copy(le).multiplyScalar(Z),ae.halfWidth.set(V.width*.5,0,0),ae.halfHeight.set(0,V.height*.5,0),r.rectArea[x]=ae,x++}else if(V.isPointLight){const ae=e.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity),ae.distance=V.distance,ae.decay=V.decay,V.castShadow){const re=V.shadow,z=t.get(V);z.shadowIntensity=re.intensity,z.shadowBias=re.bias,z.shadowNormalBias=re.normalBias,z.shadowRadius=re.radius,z.shadowMapSize=re.mapSize,z.shadowCameraNear=re.camera.near,z.shadowCameraFar=re.camera.far,r.pointShadow[M]=z,r.pointShadowMap[M]=ce,r.pointShadowMatrix[M]=V.shadow.matrix,P++}r.point[M]=ae,M++}else if(V.isHemisphereLight){const ae=e.get(V);ae.skyColor.copy(V.color).multiplyScalar(Z),ae.groundColor.copy(V.groundColor).multiplyScalar(Z),r.hemi[y]=ae,y++}}x>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=v;const O=r.hash;(O.directionalLength!==S||O.pointLength!==M||O.spotLength!==E||O.rectAreaLength!==x||O.hemiLength!==y||O.numDirectionalShadows!==L||O.numPointShadows!==P||O.numSpotShadows!==A||O.numSpotMaps!==k||O.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=E,r.rectArea.length=x,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+k-U,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=N,O.directionalLength=S,O.pointLength=M,O.spotLength=E,O.rectAreaLength=x,O.hemiLength=y,O.numDirectionalShadows=L,O.numPointShadows=P,O.numSpotShadows=A,O.numSpotMaps=k,O.numLightProbes=N,r.version=F2++)}function d(h,p){let g=0,v=0,S=0,M=0,E=0;const x=p.matrixWorldInverse;for(let y=0,L=h.length;y<L;y++){const P=h[y];if(P.isDirectionalLight){const A=r.directional[g];A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(x),g++}else if(P.isSpotLight){const A=r.spot[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const A=r.rectArea[M];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),u.identity(),l.copy(P.matrixWorld),l.premultiply(x),u.extractRotation(l),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const A=r.point[v];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(x),v++}else if(P.isHemisphereLight){const A=r.hemi[E];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(x),E++}}}return{setup:c,setupView:d,state:r}}function c_(n){const e=new k2(n),t=[],r=[];function o(p){h.camera=p,t.length=0,r.length=0}function l(p){t.push(p)}function u(p){r.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:l,pushShadow:u}}function B2(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new c_(n),e.set(o,[c])):l>=u.length?(c=new c_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}class z2 extends Ku{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_A,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class V2 extends Ku{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W2(n,e,t){let r=new px;const o=new Lt,l=new Lt,u=new Yt,c=new z2({depthPacking:yA}),d=new V2,h={},p=t.maxTextureSize,g={[Hr]:Bn,[Bn]:Hr,[er]:er},v=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:H2,fragmentShader:G2}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new Xr;M.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Di(M,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wy;let y=this.type;this.render=function(U,N,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;const b=n.getRenderTarget(),R=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),le=n.state;le.setBlending(kr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const Z=y!==Ji&&this.type===Ji,te=y===Ji&&this.type!==Ji;for(let ce=0,ae=U.length;ce<ae;ce++){const re=U[ce],z=re.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const ue=z.getFrameExtents();if(o.multiply(ue),l.copy(z.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(l.x=Math.floor(p/ue.x),o.x=l.x*ue.x,z.mapSize.x=l.x),o.y>p&&(l.y=Math.floor(p/ue.y),o.y=l.y*ue.y,z.mapSize.y=l.y)),z.map===null||Z===!0||te===!0){const F=this.type!==Ji?{minFilter:Ei,magFilter:Ei}:{};z.map!==null&&z.map.dispose(),z.map=new Ts(o.x,o.y,F),z.map.texture.name=re.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const se=z.getViewportCount();for(let F=0;F<se;F++){const ie=z.getViewport(F);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),le.viewport(u),z.updateMatrices(re,F),r=z.getFrustum(),A(N,O,z.camera,re,this.type)}z.isPointLightShadow!==!0&&this.type===Ji&&L(z,O),z.needsUpdate=!1}y=this.type,x.needsUpdate=!1,n.setRenderTarget(b,R,V)};function L(U,N){const O=e.update(E);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ts(o.x,o.y)),v.uniforms.shadow_pass.value=U.map.texture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(N,null,O,v,E,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(N,null,O,S,E,null)}function P(U,N,O,b){let R=null;const V=O.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)R=V;else if(R=O.isPointLight===!0?d:c,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const le=R.uuid,Z=N.uuid;let te=h[le];te===void 0&&(te={},h[le]=te);let ce=te[Z];ce===void 0&&(ce=R.clone(),te[Z]=ce,N.addEventListener("dispose",k)),R=ce}if(R.visible=N.visible,R.wireframe=N.wireframe,b===Ji?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:g[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,O.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const le=n.properties.get(R);le.light=O}return R}function A(U,N,O,b,R){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&R===Ji)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,U.matrixWorld);const Z=e.update(U),te=U.material;if(Array.isArray(te)){const ce=Z.groups;for(let ae=0,re=ce.length;ae<re;ae++){const z=ce[ae],ue=te[z.materialIndex];if(ue&&ue.visible){const se=P(U,ue,b,R);U.onBeforeShadow(n,U,N,O,Z,se,z),n.renderBufferDirect(O,null,Z,se,U,z),U.onAfterShadow(n,U,N,O,Z,se,z)}}}else if(te.visible){const ce=P(U,te,b,R);U.onBeforeShadow(n,U,N,O,Z,ce,null),n.renderBufferDirect(O,null,Z,ce,U,null),U.onAfterShadow(n,U,N,O,Z,ce,null)}}const le=U.children;for(let Z=0,te=le.length;Z<te;Z++)A(le[Z],N,O,b,R)}function k(U){U.target.removeEventListener("dispose",k);for(const O in h){const b=h[O],R=U.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const X2={[Hd]:Gd,[Wd]:Yd,[Xd]:qd,[To]:jd,[Gd]:Hd,[Yd]:Wd,[qd]:Xd,[jd]:To};function j2(n,e){function t(){let G=!1;const Re=new Yt;let oe=null;const he=new Yt(0,0,0,0);return{setMask:function(De){oe!==De&&!G&&(n.colorMask(De,De,De,De),oe=De)},setLocked:function(De){G=De},setClear:function(De,be,ot,Nt,Zt){Zt===!0&&(De*=Nt,be*=Nt,ot*=Nt),Re.set(De,be,ot,Nt),he.equals(Re)===!1&&(n.clearColor(De,be,ot,Nt),he.copy(Re))},reset:function(){G=!1,oe=null,he.set(-1,0,0,0)}}}function r(){let G=!1,Re=!1,oe=null,he=null,De=null;return{setReversed:function(be){if(Re!==be){const ot=e.get("EXT_clip_control");Re?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Nt=De;De=null,this.setClear(Nt)}Re=be},getReversed:function(){return Re},setTest:function(be){be?_e(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(be){oe!==be&&!G&&(n.depthMask(be),oe=be)},setFunc:function(be){if(Re&&(be=X2[be]),he!==be){switch(be){case Hd:n.depthFunc(n.NEVER);break;case Gd:n.depthFunc(n.ALWAYS);break;case Wd:n.depthFunc(n.LESS);break;case To:n.depthFunc(n.LEQUAL);break;case Xd:n.depthFunc(n.EQUAL);break;case jd:n.depthFunc(n.GEQUAL);break;case Yd:n.depthFunc(n.GREATER);break;case qd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=be}},setLocked:function(be){G=be},setClear:function(be){De!==be&&(Re&&(be=1-be),n.clearDepth(be),De=be)},reset:function(){G=!1,oe=null,he=null,De=null,Re=!1}}}function o(){let G=!1,Re=null,oe=null,he=null,De=null,be=null,ot=null,Nt=null,Zt=null;return{setTest:function(_t){G||(_t?_e(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(_t){Re!==_t&&!G&&(n.stencilMask(_t),Re=_t)},setFunc:function(_t,Ln,En){(oe!==_t||he!==Ln||De!==En)&&(n.stencilFunc(_t,Ln,En),oe=_t,he=Ln,De=En)},setOp:function(_t,Ln,En){(be!==_t||ot!==Ln||Nt!==En)&&(n.stencilOp(_t,Ln,En),be=_t,ot=Ln,Nt=En)},setLocked:function(_t){G=_t},setClear:function(_t){Zt!==_t&&(n.clearStencil(_t),Zt=_t)},reset:function(){G=!1,Re=null,oe=null,he=null,De=null,be=null,ot=null,Nt=null,Zt=null}}}const l=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let p={},g={},v=new WeakMap,S=[],M=null,E=!1,x=null,y=null,L=null,P=null,A=null,k=null,U=null,N=new Pt(0,0,0),O=0,b=!1,R=null,V=null,le=null,Z=null,te=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,re=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(z)[1]),ae=re>=1):z.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),ae=re>=2);let ue=null,se={};const F=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Ue=new Yt().fromArray(F),K=new Yt().fromArray(ie);function fe(G,Re,oe,he){const De=new Uint8Array(4),be=n.createTexture();n.bindTexture(G,be),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<oe;ot++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Re+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return be}const Ee={};Ee[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),c.setClear(0),_e(n.DEPTH_TEST),u.setFunc(To),pt(!1),ft(d0),_e(n.CULL_FACE),j(kr);function _e(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function Ae(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function Ne(G,Re){return g[G]!==Re?(n.bindFramebuffer(G,Re),g[G]=Re,G===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Re),G===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Qe(G,Re){let oe=S,he=!1;if(G){oe=v.get(Re),oe===void 0&&(oe=[],v.set(Re,oe));const De=G.textures;if(oe.length!==De.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let be=0,ot=De.length;be<ot;be++)oe[be]=n.COLOR_ATTACHMENT0+be;oe.length=De.length,he=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,he=!0);he&&n.drawBuffers(oe)}function Ct(G){return M!==G?(n.useProgram(G),M=G,!0):!1}const mt={[vs]:n.FUNC_ADD,[Xw]:n.FUNC_SUBTRACT,[jw]:n.FUNC_REVERSE_SUBTRACT};mt[Yw]=n.MIN,mt[qw]=n.MAX;const Dt={[$w]:n.ZERO,[Kw]:n.ONE,[Zw]:n.SRC_COLOR,[zd]:n.SRC_ALPHA,[iA]:n.SRC_ALPHA_SATURATE,[tA]:n.DST_COLOR,[Jw]:n.DST_ALPHA,[Qw]:n.ONE_MINUS_SRC_COLOR,[Vd]:n.ONE_MINUS_SRC_ALPHA,[nA]:n.ONE_MINUS_DST_COLOR,[eA]:n.ONE_MINUS_DST_ALPHA,[rA]:n.CONSTANT_COLOR,[sA]:n.ONE_MINUS_CONSTANT_COLOR,[oA]:n.CONSTANT_ALPHA,[aA]:n.ONE_MINUS_CONSTANT_ALPHA};function j(G,Re,oe,he,De,be,ot,Nt,Zt,_t){if(G===kr){E===!0&&(Ae(n.BLEND),E=!1);return}if(E===!1&&(_e(n.BLEND),E=!0),G!==Ww){if(G!==x||_t!==b){if((y!==vs||A!==vs)&&(n.blendEquation(n.FUNC_ADD),y=vs,A=vs),_t)switch(G){case _o:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case h0:n.blendFunc(n.ONE,n.ONE);break;case p0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case m0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case _o:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case h0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case p0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case m0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,P=null,k=null,U=null,N.set(0,0,0),O=0,x=G,b=_t}return}De=De||Re,be=be||oe,ot=ot||he,(Re!==y||De!==A)&&(n.blendEquationSeparate(mt[Re],mt[De]),y=Re,A=De),(oe!==L||he!==P||be!==k||ot!==U)&&(n.blendFuncSeparate(Dt[oe],Dt[he],Dt[be],Dt[ot]),L=oe,P=he,k=be,U=ot),(Nt.equals(N)===!1||Zt!==O)&&(n.blendColor(Nt.r,Nt.g,Nt.b,Zt),N.copy(Nt),O=Zt),x=G,b=!1}function Mn(G,Re){G.side===er?Ae(n.CULL_FACE):_e(n.CULL_FACE);let oe=G.side===Bn;Re&&(oe=!oe),pt(oe),G.blending===_o&&G.transparent===!1?j(kr):j(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const he=G.stencilWrite;c.setTest(he),he&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),wt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(G){R!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),R=G)}function ft(G){G!==Vw?(_e(n.CULL_FACE),G!==V&&(G===d0?n.cullFace(n.BACK):G===Hw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),V=G}function $e(G){G!==le&&(ae&&n.lineWidth(G),le=G)}function wt(G,Re,oe){G?(_e(n.POLYGON_OFFSET_FILL),(Z!==Re||te!==oe)&&(n.polygonOffset(Re,oe),Z=Re,te=oe)):Ae(n.POLYGON_OFFSET_FILL)}function qe(G){G?_e(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function D(G){G===void 0&&(G=n.TEXTURE0+ce-1),ue!==G&&(n.activeTexture(G),ue=G)}function w(G,Re,oe){oe===void 0&&(ue===null?oe=n.TEXTURE0+ce-1:oe=ue);let he=se[oe];he===void 0&&(he={type:void 0,texture:void 0},se[oe]=he),(he.type!==G||he.texture!==Re)&&(ue!==oe&&(n.activeTexture(oe),ue=oe),n.bindTexture(G,Re||Ee[G]),he.type=G,he.texture=Re)}function $(){const G=se[ue];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ge(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(G){Ue.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function Be(G){K.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),K.copy(G))}function dt(G,Re){let oe=h.get(Re);oe===void 0&&(oe=new WeakMap,h.set(Re,oe));let he=oe.get(G);he===void 0&&(he=n.getUniformBlockIndex(Re,G.name),oe.set(G,he))}function st(G,Re){const he=h.get(Re).get(G);d.get(Re)!==he&&(n.uniformBlockBinding(Re,he,G.__bindingPointIndex),d.set(Re,he))}function Tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ue=null,se={},g={},v=new WeakMap,S=[],M=null,E=!1,x=null,y=null,L=null,P=null,A=null,k=null,U=null,N=new Pt(0,0,0),O=0,b=!1,R=null,V=null,le=null,Z=null,te=null,Ue.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),c.reset()}return{buffers:{color:l,depth:u,stencil:c},enable:_e,disable:Ae,bindFramebuffer:Ne,drawBuffers:Qe,useProgram:Ct,setBlending:j,setMaterial:Mn,setFlipSided:pt,setCullFace:ft,setLineWidth:$e,setPolygonOffset:wt,setScissorTest:qe,activeTexture:D,bindTexture:w,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ke,texImage3D:Je,updateUBOMapping:dt,uniformBlockBinding:st,texStorage2D:ct,texStorage3D:Se,texSubImage2D:de,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:tt,viewport:Be,reset:Tt}}function f_(n,e,t,r){const o=Y2(r);switch(t){case Ky:return n*e;case Qy:return n*e;case Jy:return n*e*2;case ex:return n*e/o.components*o.byteLength;case fp:return n*e/o.components*o.byteLength;case tx:return n*e*2/o.components*o.byteLength;case dp:return n*e*2/o.components*o.byteLength;case Zy:return n*e*3/o.components*o.byteLength;case Mi:return n*e*4/o.components*o.byteLength;case hp:return n*e*4/o.components*o.byteLength;case Ru:case Pu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bu:case Lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(n,16)*Math.max(e,8)/4;case Jd:case th:return Math.max(n,8)*Math.max(e,8)/2;case ih:case rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case uh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ch:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case dh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ph:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _h:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Du:case xh:case Sh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nx:case Mh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Eh:case Th:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y2(n){switch(n){case ar:case Yy:return{byteLength:1,components:1};case Na:case qy:case Ha:return{byteLength:2,components:1};case up:case cp:return{byteLength:2,components:4};case Es:case lp:case tr:return{byteLength:4,components:1};case $y:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function q2(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Lt,p=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,w){return S?new OffscreenCanvas(D,w):Oa("canvas")}function E(D,w,$){let pe=1;const ge=qe(D);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(pe*ge.width),Ge=Math.floor(pe*ge.height);g===void 0&&(g=M(de,Ge));const Ce=w?M(de,Ge):g;return Ce.width=de,Ce.height=Ge,Ce.getContext("2d").drawImage(D,0,0,de,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+de+"x"+Ge+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function x(D){return D.generateMipmaps}function y(D){n.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(D,w,$,pe,ge=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=w;if(w===n.RED&&($===n.FLOAT&&(de=n.R32F),$===n.HALF_FLOAT&&(de=n.R16F),$===n.UNSIGNED_BYTE&&(de=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.R8UI),$===n.UNSIGNED_SHORT&&(de=n.R16UI),$===n.UNSIGNED_INT&&(de=n.R32UI),$===n.BYTE&&(de=n.R8I),$===n.SHORT&&(de=n.R16I),$===n.INT&&(de=n.R32I)),w===n.RG&&($===n.FLOAT&&(de=n.RG32F),$===n.HALF_FLOAT&&(de=n.RG16F),$===n.UNSIGNED_BYTE&&(de=n.RG8)),w===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RG8UI),$===n.UNSIGNED_SHORT&&(de=n.RG16UI),$===n.UNSIGNED_INT&&(de=n.RG32UI),$===n.BYTE&&(de=n.RG8I),$===n.SHORT&&(de=n.RG16I),$===n.INT&&(de=n.RG32I)),w===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RGB8UI),$===n.UNSIGNED_SHORT&&(de=n.RGB16UI),$===n.UNSIGNED_INT&&(de=n.RGB32UI),$===n.BYTE&&(de=n.RGB8I),$===n.SHORT&&(de=n.RGB16I),$===n.INT&&(de=n.RGB32I)),w===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),$===n.UNSIGNED_INT&&(de=n.RGBA32UI),$===n.BYTE&&(de=n.RGBA8I),$===n.SHORT&&(de=n.RGBA16I),$===n.INT&&(de=n.RGBA32I)),w===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),w===n.RGBA){const Ge=ge?$u:xt.getTransfer(pe);$===n.FLOAT&&(de=n.RGBA32F),$===n.HALF_FLOAT&&(de=n.RGBA16F),$===n.UNSIGNED_BYTE&&(de=Ge===Rt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(D,w){let $;return D?w===null||w===Es||w===Co?$=n.DEPTH24_STENCIL8:w===tr?$=n.DEPTH32F_STENCIL8:w===Na&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Es||w===Co?$=n.DEPTH_COMPONENT24:w===tr?$=n.DEPTH_COMPONENT32F:w===Na&&($=n.DEPTH_COMPONENT16),$}function k(D,w){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ei&&D.minFilter!==Li?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function U(D){const w=D.target;w.removeEventListener("dispose",U),O(w),w.isVideoTexture&&p.delete(w)}function N(D){const w=D.target;w.removeEventListener("dispose",N),R(w)}function O(D){const w=r.get(D);if(w.__webglInit===void 0)return;const $=D.source,pe=v.get($);if(pe){const ge=pe[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(D),Object.keys(pe).length===0&&v.delete($)}r.remove(D)}function b(D){const w=r.get(D);n.deleteTexture(w.__webglTexture);const $=D.source,pe=v.get($);delete pe[w.__cacheKey],u.memory.textures--}function R(D){const w=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ge=0;ge<w.__webglFramebuffer[pe].length;ge++)n.deleteFramebuffer(w.__webglFramebuffer[pe][ge]);else n.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)n.deleteFramebuffer(w.__webglFramebuffer[pe]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=D.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const de=r.get($[pe]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove($[pe])}r.remove(D)}let V=0;function le(){V=0}function Z(){const D=V;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),V+=1,D}function te(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function ce(D,w){const $=r.get(D);if(D.isVideoTexture&&$e(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,D,w);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function ae(D,w){const $=r.get(D);if(D.version>0&&$.__version!==D.version){K($,D,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function re(D,w){const $=r.get(D);if(D.version>0&&$.__version!==D.version){K($,D,w);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function z(D,w){const $=r.get(D);if(D.version>0&&$.__version!==D.version){fe($,D,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}const ue={[Zd]:n.REPEAT,[xs]:n.CLAMP_TO_EDGE,[Qd]:n.MIRRORED_REPEAT},se={[Ei]:n.NEAREST,[vA]:n.NEAREST_MIPMAP_NEAREST,[iu]:n.NEAREST_MIPMAP_LINEAR,[Li]:n.LINEAR,[Kf]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},F={[MA]:n.NEVER,[RA]:n.ALWAYS,[EA]:n.LESS,[ix]:n.LEQUAL,[TA]:n.EQUAL,[CA]:n.GEQUAL,[wA]:n.GREATER,[AA]:n.NOTEQUAL};function ie(D,w){if(w.type===tr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Li||w.magFilter===Kf||w.magFilter===iu||w.magFilter===Ss||w.minFilter===Li||w.minFilter===Kf||w.minFilter===iu||w.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ue[w.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ue[w.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ue[w.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,se[w.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ei||w.minFilter!==iu&&w.minFilter!==Ss||w.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(D,w){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",U));const pe=w.source;let ge=v.get(pe);ge===void 0&&(ge={},v.set(pe,ge));const de=te(w);if(de!==D.__cacheKey){ge[de]===void 0&&(ge[de]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,$=!0),ge[de].usedTimes++;const Ge=ge[D.__cacheKey];Ge!==void 0&&(ge[D.__cacheKey].usedTimes--,Ge.usedTimes===0&&b(w)),D.__cacheKey=de,D.__webglTexture=ge[de].texture}return $}function K(D,w,$){let pe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=n.TEXTURE_3D);const ge=Ue(D,w),de=w.source;t.bindTexture(pe,D.__webglTexture,n.TEXTURE0+$);const Ge=r.get(de);if(de.version!==Ge.__version||ge===!0){t.activeTexture(n.TEXTURE0+$);const Ce=xt.getPrimaries(xt.workingColorSpace),Fe=w.colorSpace===Or?null:xt.getPrimaries(w.colorSpace),ct=w.colorSpace===Or||Ce===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Se=E(w.image,!1,o.maxTextureSize);Se=wt(w,Se);const ke=l.convert(w.format,w.colorSpace),Je=l.convert(w.type);let tt=P(w.internalFormat,ke,Je,w.colorSpace,w.isVideoTexture);ie(pe,w);let Be;const dt=w.mipmaps,st=w.isVideoTexture!==!0,Tt=Ge.__version===void 0||ge===!0,G=de.dataReady,Re=k(w,Se);if(w.isDepthTexture)tt=A(w.format===Ro,w.type),Tt&&(st?t.texStorage2D(n.TEXTURE_2D,1,tt,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,tt,Se.width,Se.height,0,ke,Je,null));else if(w.isDataTexture)if(dt.length>0){st&&Tt&&t.texStorage2D(n.TEXTURE_2D,Re,tt,dt[0].width,dt[0].height);for(let oe=0,he=dt.length;oe<he;oe++)Be=dt[oe],st?G&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(n.TEXTURE_2D,oe,tt,Be.width,Be.height,0,ke,Je,Be.data);w.generateMipmaps=!1}else st?(Tt&&t.texStorage2D(n.TEXTURE_2D,Re,tt,Se.width,Se.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,Je,Se.data)):t.texImage2D(n.TEXTURE_2D,0,tt,Se.width,Se.height,0,ke,Je,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,tt,dt[0].width,dt[0].height,Se.depth);for(let oe=0,he=dt.length;oe<he;oe++)if(Be=dt[oe],w.format!==Mi)if(ke!==null)if(st){if(G)if(w.layerUpdates.size>0){const De=f_(Be.width,Be.height,w.format,w.type);for(const be of w.layerUpdates){const ot=Be.data.subarray(be*De/Be.data.BYTES_PER_ELEMENT,(be+1)*De/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,be,Be.width,Be.height,1,ke,ot)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,Se.depth,ke,Be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,tt,Be.width,Be.height,Se.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,Se.depth,ke,Je,Be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,tt,Be.width,Be.height,Se.depth,0,ke,Je,Be.data)}else{st&&Tt&&t.texStorage2D(n.TEXTURE_2D,Re,tt,dt[0].width,dt[0].height);for(let oe=0,he=dt.length;oe<he;oe++)Be=dt[oe],w.format!==Mi?ke!==null?st?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,tt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?G&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(n.TEXTURE_2D,oe,tt,Be.width,Be.height,0,ke,Je,Be.data)}else if(w.isDataArrayTexture)if(st){if(Tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,tt,Se.width,Se.height,Se.depth),G)if(w.layerUpdates.size>0){const oe=f_(Se.width,Se.height,w.format,w.type);for(const he of w.layerUpdates){const De=Se.data.subarray(he*oe/Se.data.BYTES_PER_ELEMENT,(he+1)*oe/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,ke,Je,De)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,Je,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,tt,Se.width,Se.height,Se.depth,0,ke,Je,Se.data);else if(w.isData3DTexture)st?(Tt&&t.texStorage3D(n.TEXTURE_3D,Re,tt,Se.width,Se.height,Se.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,Je,Se.data)):t.texImage3D(n.TEXTURE_3D,0,tt,Se.width,Se.height,Se.depth,0,ke,Je,Se.data);else if(w.isFramebufferTexture){if(Tt)if(st)t.texStorage2D(n.TEXTURE_2D,Re,tt,Se.width,Se.height);else{let oe=Se.width,he=Se.height;for(let De=0;De<Re;De++)t.texImage2D(n.TEXTURE_2D,De,tt,oe,he,0,ke,Je,null),oe>>=1,he>>=1}}else if(dt.length>0){if(st&&Tt){const oe=qe(dt[0]);t.texStorage2D(n.TEXTURE_2D,Re,tt,oe.width,oe.height)}for(let oe=0,he=dt.length;oe<he;oe++)Be=dt[oe],st?G&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ke,Je,Be):t.texImage2D(n.TEXTURE_2D,oe,tt,ke,Je,Be);w.generateMipmaps=!1}else if(st){if(Tt){const oe=qe(Se);t.texStorage2D(n.TEXTURE_2D,Re,tt,oe.width,oe.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,Je,Se)}else t.texImage2D(n.TEXTURE_2D,0,tt,ke,Je,Se);x(w)&&y(pe),Ge.__version=de.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function fe(D,w,$){if(w.image.length!==6)return;const pe=Ue(D,w),ge=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+$);const de=r.get(ge);if(ge.version!==de.__version||pe===!0){t.activeTexture(n.TEXTURE0+$);const Ge=xt.getPrimaries(xt.workingColorSpace),Ce=w.colorSpace===Or?null:xt.getPrimaries(w.colorSpace),Fe=w.colorSpace===Or||Ge===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let he=0;he<6;he++)!ct&&!Se?ke[he]=E(w.image[he],!0,o.maxCubemapSize):ke[he]=Se?w.image[he].image:w.image[he],ke[he]=wt(w,ke[he]);const Je=ke[0],tt=l.convert(w.format,w.colorSpace),Be=l.convert(w.type),dt=P(w.internalFormat,tt,Be,w.colorSpace),st=w.isVideoTexture!==!0,Tt=de.__version===void 0||pe===!0,G=ge.dataReady;let Re=k(w,Je);ie(n.TEXTURE_CUBE_MAP,w);let oe;if(ct){st&&Tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,dt,Je.width,Je.height);for(let he=0;he<6;he++){oe=ke[he].mipmaps;for(let De=0;De<oe.length;De++){const be=oe[De];w.format!==Mi?tt!==null?st?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,be.width,be.height,tt,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,dt,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,be.width,be.height,tt,Be,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,dt,be.width,be.height,0,tt,Be,be.data)}}}else{if(oe=w.mipmaps,st&&Tt){oe.length>0&&Re++;const he=qe(ke[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,dt,he.width,he.height)}for(let he=0;he<6;he++)if(Se){st?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ke[he].width,ke[he].height,tt,Be,ke[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,ke[he].width,ke[he].height,0,tt,Be,ke[he].data);for(let De=0;De<oe.length;De++){const ot=oe[De].image[he].image;st?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,ot.width,ot.height,tt,Be,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,dt,ot.width,ot.height,0,tt,Be,ot.data)}}else{st?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,tt,Be,ke[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,tt,Be,ke[he]);for(let De=0;De<oe.length;De++){const be=oe[De];st?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,tt,Be,be.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,dt,tt,Be,be.image[he])}}}x(w)&&y(n.TEXTURE_CUBE_MAP),de.__version=ge.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Ee(D,w,$,pe,ge,de){const Ge=l.convert($.format,$.colorSpace),Ce=l.convert($.type),Fe=P($.internalFormat,Ge,Ce,$.colorSpace),ct=r.get(w),Se=r.get($);if(Se.__renderTarget=w,!ct.__hasExternalTextures){const ke=Math.max(1,w.width>>de),Je=Math.max(1,w.height>>de);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,de,Fe,ke,Je,w.depth,0,Ge,Ce,null):t.texImage2D(ge,de,Fe,ke,Je,0,Ge,Ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ge,Se.__webglTexture,0,pt(w)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ge,Se.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(D,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,D),w.depthBuffer){const pe=w.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,de=A(w.stencilBuffer,ge),Ge=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=pt(w);ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,de,w.width,w.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,de,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,de,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ge,n.RENDERBUFFER,D)}else{const pe=w.textures;for(let ge=0;ge<pe.length;ge++){const de=pe[ge],Ge=l.convert(de.format,de.colorSpace),Ce=l.convert(de.type),Fe=P(de.internalFormat,Ge,Ce,de.colorSpace),ct=pt(w);$&&ft(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Fe,w.width,w.height):ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ce(w.depthTexture,0);const ge=pe.__webglTexture,de=pt(w);if(w.depthTexture.format===yo)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Ro)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ne(D){const w=r.get(D),$=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=pe}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,D)}else if($){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=n.createRenderbuffer(),_e(w.__webglDepthbuffer[pe],D,!1);else{const ge=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,de)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),_e(w.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,ge)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(D,w,$){const pe=r.get(D);w!==void 0&&Ee(pe.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ne(D)}function Ct(D){const w=D.texture,$=r.get(D),pe=r.get(w);D.addEventListener("dispose",N);const ge=D.textures,de=D.isWebGLCubeRenderTarget===!0,Ge=ge.length>1;if(Ge||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=w.version,u.memory.textures++),de){$.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)$.__webglFramebuffer[Ce][Fe]=n.createFramebuffer()}else $.__webglFramebuffer[Ce]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)$.__webglFramebuffer[Ce]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Ge)for(let Ce=0,Fe=ge.length;Ce<Fe;Ce++){const ct=r.get(ge[Ce]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),u.memory.textures++)}if(D.samples>0&&ft(D)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ge.length;Ce++){const Fe=ge[Ce];$.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Ce]);const ct=l.convert(Fe.format,Fe.colorSpace),Se=l.convert(Fe.type),ke=P(Fe.internalFormat,ct,Se,Fe.colorSpace,D.isXRRenderTarget===!0),Je=pt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Je,ke,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,$.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),_e($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(n.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee($.__webglFramebuffer[Ce][Fe],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else Ee($.__webglFramebuffer[Ce],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);x(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ce=0,Fe=ge.length;Ce<Fe;Ce++){const ct=ge[Ce],Se=r.get(ct);t.bindTexture(n.TEXTURE_2D,Se.__webglTexture),ie(n.TEXTURE_2D,ct),Ee($.__webglFramebuffer,D,ct,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),x(ct)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let Ce=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,pe.__webglTexture),ie(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee($.__webglFramebuffer[Fe],D,w,n.COLOR_ATTACHMENT0,Ce,Fe);else Ee($.__webglFramebuffer,D,w,n.COLOR_ATTACHMENT0,Ce,0);x(w)&&y(Ce),t.unbindTexture()}D.depthBuffer&&Ne(D)}function mt(D){const w=D.textures;for(let $=0,pe=w.length;$<pe;$++){const ge=w[$];if(x(ge)){const de=L(D),Ge=r.get(ge).__webglTexture;t.bindTexture(de,Ge),y(de),t.unbindTexture()}}}const Dt=[],j=[];function Mn(D){if(D.samples>0){if(ft(D)===!1){const w=D.textures,$=D.width,pe=D.height;let ge=n.COLOR_BUFFER_BIT;const de=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ge=r.get(D),Ce=w.length>1;if(Ce)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ct=r.get(w[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ct,0)}n.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,n.NEAREST),d===!0&&(Dt.length=0,j.length=0,Dt.push(n.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Dt.push(de),j.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ct=r.get(w[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,ct,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const w=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function pt(D){return Math.min(o.maxSamples,D.samples)}function ft(D){const w=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $e(D){const w=u.render.frame;p.get(D)!==w&&(p.set(D,w),D.update())}function wt(D,w){const $=D.colorSpace,pe=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Do&&$!==Or&&(xt.getTransfer($)===Rt?(pe!==Mi||ge!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=le,this.setTexture2D=ce,this.setTexture2DArray=ae,this.setTexture3D=re,this.setTextureCube=z,this.rebindTextures=Qe,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ft}function $2(n,e){function t(r,o=Or){let l;const u=xt.getTransfer(o);if(r===ar)return n.UNSIGNED_BYTE;if(r===up)return n.UNSIGNED_SHORT_4_4_4_4;if(r===cp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===$y)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Yy)return n.BYTE;if(r===qy)return n.SHORT;if(r===Na)return n.UNSIGNED_SHORT;if(r===lp)return n.INT;if(r===Es)return n.UNSIGNED_INT;if(r===tr)return n.FLOAT;if(r===Ha)return n.HALF_FLOAT;if(r===Ky)return n.ALPHA;if(r===Zy)return n.RGB;if(r===Mi)return n.RGBA;if(r===Qy)return n.LUMINANCE;if(r===Jy)return n.LUMINANCE_ALPHA;if(r===yo)return n.DEPTH_COMPONENT;if(r===Ro)return n.DEPTH_STENCIL;if(r===ex)return n.RED;if(r===fp)return n.RED_INTEGER;if(r===tx)return n.RG;if(r===dp)return n.RG_INTEGER;if(r===hp)return n.RGBA_INTEGER;if(r===Ru||r===Pu||r===bu||r===Lu)if(u===Rt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ru)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ru)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jd||r===eh||r===th||r===nh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Jd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===eh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===th)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ih||r===rh||r===sh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ih||r===rh)return u===Rt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===sh)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===oh||r===ah||r===lh||r===uh||r===ch||r===fh||r===dh||r===hh||r===ph||r===mh||r===gh||r===vh||r===_h||r===yh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===oh)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ah)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lh)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===uh)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ch)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fh)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dh)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hh)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ph)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mh)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gh)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vh)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_h)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yh)return u===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Du||r===xh||r===Sh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Du)return u===Rt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nx||r===Mh||r===Eh||r===Th)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Du)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Mh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Eh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Th)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Co?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}class K2 extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tu extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z2={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,r),y=this._getHandJoint(h,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=p.position.distanceTo(g.position),S=.02,M=.005;h.inputState.pinching&&v>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Z2)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Tu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J2=`
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

}`;class eL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new bn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Gr({vertexShader:Q2,fragmentShader:J2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Di(new Zu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tL extends Io{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,p=null,g=null,v=null,S=null,M=null;const E=new eL,x=t.getContextAttributes();let y=null,L=null;const P=[],A=[],k=new Lt;let U=null;const N=new ai;N.viewport=new Yt;const O=new ai;O.viewport=new Yt;const b=[N,O],R=new K2;let V=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let fe=P[K];return fe===void 0&&(fe=new Ed,P[K]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(K){let fe=P[K];return fe===void 0&&(fe=new Ed,P[K]=fe),fe.getGripSpace()},this.getHand=function(K){let fe=P[K];return fe===void 0&&(fe=new Ed,P[K]=fe),fe.getHandSpace()};function Z(K){const fe=A.indexOf(K.inputSource);if(fe===-1)return;const Ee=P[fe];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,h||u),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function te(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",ce);for(let K=0;K<P.length;K++){const fe=A[K];fe!==null&&(A[K]=null,P[K].disconnect(fe))}V=null,le=null,E.reset(),e.setRenderTarget(y),S=null,v=null,g=null,o=null,L=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",te),o.addEventListener("inputsourceschange",ce),x.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(k),o.renderState.layers===void 0){const fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Ts(S.framebufferWidth,S.framebufferHeight,{format:Mi,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let fe=null,Ee=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?Ro:yo,Ee=x.stencil?Co:Es);const Ae={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Ae),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Ts(v.textureWidth,v.textureHeight,{format:Mi,type:ar,depthTexture:new gx(v.textureWidth,v.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ce(K){for(let fe=0;fe<K.removed.length;fe++){const Ee=K.removed[fe],_e=A.indexOf(Ee);_e>=0&&(A[_e]=null,P[_e].disconnect(Ee))}for(let fe=0;fe<K.added.length;fe++){const Ee=K.added[fe];let _e=A.indexOf(Ee);if(_e===-1){for(let Ne=0;Ne<P.length;Ne++)if(Ne>=A.length){A.push(Ee),_e=Ne;break}else if(A[Ne]===null){A[Ne]=Ee,_e=Ne;break}if(_e===-1)break}const Ae=P[_e];Ae&&Ae.connect(Ee)}}const ae=new ne,re=new ne;function z(K,fe,Ee){ae.setFromMatrixPosition(fe.matrixWorld),re.setFromMatrixPosition(Ee.matrixWorld);const _e=ae.distanceTo(re),Ae=fe.projectionMatrix.elements,Ne=Ee.projectionMatrix.elements,Qe=Ae[14]/(Ae[10]-1),Ct=Ae[14]/(Ae[10]+1),mt=(Ae[9]+1)/Ae[5],Dt=(Ae[9]-1)/Ae[5],j=(Ae[8]-1)/Ae[0],Mn=(Ne[8]+1)/Ne[0],pt=Qe*j,ft=Qe*Mn,$e=_e/(-j+Mn),wt=$e*-j;if(fe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(wt),K.translateZ($e),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ae[10]===-1)K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=Qe+$e,D=Ct+$e,w=pt-wt,$=ft+(_e-wt),pe=mt*Ct/D*qe,ge=Dt*Ct/D*qe;K.projectionMatrix.makePerspective(w,$,pe,ge,qe,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,fe){fe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(fe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let fe=K.near,Ee=K.far;E.texture!==null&&(E.depthNear>0&&(fe=E.depthNear),E.depthFar>0&&(Ee=E.depthFar)),R.near=O.near=N.near=fe,R.far=O.far=N.far=Ee,(V!==R.near||le!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,le=R.far),N.layers.mask=K.layers.mask|2,O.layers.mask=K.layers.mask|4,R.layers.mask=N.layers.mask|O.layers.mask;const _e=K.parent,Ae=R.cameras;ue(R,_e);for(let Ne=0;Ne<Ae.length;Ne++)ue(Ae[Ne],_e);Ae.length===2?z(R,N,O):R.projectionMatrix.copy(N.projectionMatrix),se(K,R,_e)};function se(K,fe,Ee){Ee===null?K.matrix.copy(fe.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(fe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(fe.projectionMatrix),K.projectionMatrixInverse.copy(fe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fa*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(K){d=K,v!==null&&(v.fixedFoveation=K),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=K)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let F=null;function ie(K,fe){if(p=fe.getViewerPose(h||u),M=fe,p!==null){const Ee=p.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let _e=!1;Ee.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let Ne=0;Ne<Ee.length;Ne++){const Qe=Ee[Ne];let Ct=null;if(S!==null)Ct=S.getViewport(Qe);else{const Dt=g.getViewSubImage(v,Qe);Ct=Dt.viewport,Ne===0&&(e.setRenderTargetTextures(L,Dt.colorTexture,v.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(L))}let mt=b[Ne];mt===void 0&&(mt=new ai,mt.layers.enable(Ne),mt.viewport=new Yt,b[Ne]=mt),mt.matrix.fromArray(Qe.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Qe.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ne===0&&(R.matrix.copy(mt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_e===!0&&R.cameras.push(mt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ne=g.getDepthInformation(Ee[0]);Ne&&Ne.isValid&&Ne.texture&&E.init(e,Ne,o.renderState)}}for(let Ee=0;Ee<P.length;Ee++){const _e=A[Ee],Ae=P[Ee];_e!==null&&Ae!==void 0&&Ae.update(_e,fe,h||u)}F&&F(K,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Ue=new mx;Ue.setAnimationLoop(ie),this.setAnimationLoop=function(K){F=K},this.dispose=function(){}}}const ds=new lr,nL=new Kt;function iL(n,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,fx(n)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,L,P,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),g(x,y)):y.isMeshPhongMaterial?(l(x,y),p(x,y)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,A)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),E(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?d(x,y,L,P):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Bn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Bn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const L=e.get(y),P=L.envMap,A=L.envMapRotation;P&&(x.envMap.value=P,ds.copy(A),ds.x*=-1,ds.y*=-1,ds.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),x.envMapRotation.value.setFromMatrix4(nL.makeRotationFromEuler(ds)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,L,P){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*L,x.scale.value=P*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function g(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,L){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Bn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const L=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function rL(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,P){const A=P.program;r.uniformBlockBinding(L,A)}function h(L,P){let A=o[L.id];A===void 0&&(M(L),A=p(L),o[L.id]=A,L.addEventListener("dispose",x));const k=P.program;r.updateUBOMapping(L,k);const U=e.render.frame;l[L.id]!==U&&(v(L),l[L.id]=U)}function p(L){const P=g();L.__bindingPointIndex=P;const A=n.createBuffer(),k=L.__size,U=L.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,k,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,A),A}function g(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const P=o[L.id],A=L.uniforms,k=L.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let U=0,N=A.length;U<N;U++){const O=Array.isArray(A[U])?A[U]:[A[U]];for(let b=0,R=O.length;b<R;b++){const V=O[b];if(S(V,U,b,k)===!0){const le=V.__offset,Z=Array.isArray(V.value)?V.value:[V.value];let te=0;for(let ce=0;ce<Z.length;ce++){const ae=Z[ce],re=E(ae);typeof ae=="number"||typeof ae=="boolean"?(V.__data[0]=ae,n.bufferSubData(n.UNIFORM_BUFFER,le+te,V.__data)):ae.isMatrix3?(V.__data[0]=ae.elements[0],V.__data[1]=ae.elements[1],V.__data[2]=ae.elements[2],V.__data[3]=0,V.__data[4]=ae.elements[3],V.__data[5]=ae.elements[4],V.__data[6]=ae.elements[5],V.__data[7]=0,V.__data[8]=ae.elements[6],V.__data[9]=ae.elements[7],V.__data[10]=ae.elements[8],V.__data[11]=0):(ae.toArray(V.__data,te),te+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,le,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function S(L,P,A,k){const U=L.value,N=P+"_"+A;if(k[N]===void 0)return typeof U=="number"||typeof U=="boolean"?k[N]=U:k[N]=U.clone(),!0;{const O=k[N];if(typeof U=="number"||typeof U=="boolean"){if(O!==U)return k[N]=U,!0}else if(O.equals(U)===!1)return O.copy(U),!0}return!1}function M(L){const P=L.uniforms;let A=0;const k=16;for(let N=0,O=P.length;N<O;N++){const b=Array.isArray(P[N])?P[N]:[P[N]];for(let R=0,V=b.length;R<V;R++){const le=b[R],Z=Array.isArray(le.value)?le.value:[le.value];for(let te=0,ce=Z.length;te<ce;te++){const ae=Z[te],re=E(ae),z=A%k,ue=z%re.boundary,se=z+ue;A+=ue,se!==0&&k-se<re.storage&&(A+=k-se),le.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=A,A+=re.storage}}}const U=A%k;return U>0&&(A+=k-U),L.__size=A,L.__cache={},this}function E(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function x(L){const P=L.target;P.removeEventListener("dispose",x);const A=u.indexOf(P.__bindingPointIndex);u.splice(A,1),n.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function y(){for(const L in o)n.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class sL{constructor(e={}){const{canvas:t=XA(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const M=new Uint32Array(4),E=new Int32Array(4);let x=null,y=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=Br,this.toneMappingExposure=1;const A=this;let k=!1,U=0,N=0,O=null,b=-1,R=null;const V=new Yt,le=new Yt;let Z=null;const te=new Pt(0);let ce=0,ae=t.width,re=t.height,z=1,ue=null,se=null;const F=new Yt(0,0,ae,re),ie=new Yt(0,0,ae,re);let Ue=!1;const K=new px;let fe=!1,Ee=!1;const _e=new Kt,Ae=new Kt,Ne=new ne,Qe=new Yt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Dt(){return O===null?z:1}let j=r;function Mn(C,W){return t.getContext(C,W)}try{const C={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ap}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",be,!1),j===null){const W="webgl2";if(j=Mn(W,C),j===null)throw Mn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pt,ft,$e,wt,qe,D,w,$,pe,ge,de,Ge,Ce,Fe,ct,Se,ke,Je,tt,Be,dt,st,Tt,G;function Re(){pt=new cb(j),pt.init(),st=new $2(j,pt),ft=new ib(j,pt,e,st),$e=new j2(j,pt),ft.reverseDepthBuffer&&v&&$e.buffers.depth.setReversed(!0),wt=new hb(j),qe=new L2,D=new q2(j,pt,$e,qe,ft,st,wt),w=new sb(A),$=new ub(A),pe=new yC(j),Tt=new tb(j,pe),ge=new fb(j,pe,wt,Tt),de=new mb(j,ge,pe,wt),tt=new pb(j,ft,D),Se=new rb(qe),Ge=new b2(A,w,$,pt,ft,Tt,Se),Ce=new iL(A,qe),Fe=new I2,ct=new B2(pt),Je=new eb(A,w,$,$e,de,S,d),ke=new W2(A,de,ft),G=new rL(j,wt,ft,$e),Be=new nb(j,pt,wt),dt=new db(j,pt,wt),wt.programs=Ge.programs,A.capabilities=ft,A.extensions=pt,A.properties=qe,A.renderLists=Fe,A.shadowMap=ke,A.state=$e,A.info=wt}Re();const oe=new tL(A,j);this.xr=oe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(ae,re,!1))},this.getSize=function(C){return C.set(ae,re)},this.setSize=function(C,W,J=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=C,re=W,t.width=Math.floor(C*z),t.height=Math.floor(W*z),J===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(ae*z,re*z).floor()},this.setDrawingBufferSize=function(C,W,J){ae=C,re=W,z=J,t.width=Math.floor(C*J),t.height=Math.floor(W*J),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,W,J,ee){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,W,J,ee),$e.viewport(V.copy(F).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(ie)},this.setScissor=function(C,W,J,ee){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,W,J,ee),$e.scissor(le.copy(ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(C){$e.setScissorTest(Ue=C)},this.setOpaqueSort=function(C){ue=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,W=!0,J=!0){let ee=0;if(C){let X=!1;if(O!==null){const we=O.texture.format;X=we===hp||we===dp||we===fp}if(X){const we=O.texture.type,Me=we===ar||we===Es||we===Na||we===Co||we===up||we===cp,We=Je.getClearColor(),Ve=Je.getClearAlpha(),nt=We.r,rt=We.g,Xe=We.b;Me?(M[0]=nt,M[1]=rt,M[2]=Xe,M[3]=Ve,j.clearBufferuiv(j.COLOR,0,M)):(E[0]=nt,E[1]=rt,E[2]=Xe,E[3]=Ve,j.clearBufferiv(j.COLOR,0,E))}else ee|=j.COLOR_BUFFER_BIT}W&&(ee|=j.DEPTH_BUFFER_BIT),J&&(ee|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Fe.dispose(),ct.dispose(),qe.dispose(),w.dispose(),$.dispose(),de.dispose(),Tt.dispose(),G.dispose(),Ge.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",As),oe.removeEventListener("sessionend",ur),Oi.stop()};function he(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const C=wt.autoReset,W=ke.enabled,J=ke.autoUpdate,ee=ke.needsUpdate,X=ke.type;Re(),wt.autoReset=C,ke.enabled=W,ke.autoUpdate=J,ke.needsUpdate=ee,ke.type=X}function be(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ot(C){const W=C.target;W.removeEventListener("dispose",ot),Nt(W)}function Nt(C){Zt(C),qe.remove(C)}function Zt(C){const W=qe.get(C).programs;W!==void 0&&(W.forEach(function(J){Ge.releaseProgram(J)}),C.isShaderMaterial&&Ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,J,ee,X,we){W===null&&(W=Ct);const Me=X.isMesh&&X.matrixWorld.determinant()<0,We=$a(C,W,J,ee,X);$e.setMaterial(ee,Me);let Ve=J.index,nt=1;if(ee.wireframe===!0){if(Ve=ge.getWireframeAttribute(J),Ve===void 0)return;nt=2}const rt=J.drawRange,Xe=J.attributes.position;let vt=rt.start*nt,Et=(rt.start+rt.count)*nt;we!==null&&(vt=Math.max(vt,we.start*nt),Et=Math.min(Et,(we.start+we.count)*nt)),Ve!==null?(vt=Math.max(vt,0),Et=Math.min(Et,Ve.count)):Xe!=null&&(vt=Math.max(vt,0),Et=Math.min(Et,Xe.count));const gt=Et-vt;if(gt<0||gt===1/0)return;Tt.setup(X,ee,We,J,Ve);let fn,at=Be;if(Ve!==null&&(fn=pe.get(Ve),at=dt,at.setIndex(fn)),X.isMesh)ee.wireframe===!0?($e.setLineWidth(ee.wireframeLinewidth*Dt()),at.setMode(j.LINES)):at.setMode(j.TRIANGLES);else if(X.isLine){let Ye=ee.linewidth;Ye===void 0&&(Ye=1),$e.setLineWidth(Ye*Dt()),X.isLineSegments?at.setMode(j.LINES):X.isLineLoop?at.setMode(j.LINE_LOOP):at.setMode(j.LINE_STRIP)}else X.isPoints?at.setMode(j.POINTS):X.isSprite&&at.setMode(j.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)at.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))at.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ye=X._multiDrawStarts,ui=X._multiDrawCounts,St=X._multiDrawCount,dn=Ve?pe.get(Ve).bytesPerElement:1,ci=qe.get(ee).currentProgram.getUniforms();for(let Qt=0;Qt<St;Qt++)ci.setValue(j,"_gl_DrawID",Qt),at.render(Ye[Qt]/dn,ui[Qt])}else if(X.isInstancedMesh)at.renderInstances(vt,gt,X.count);else if(J.isInstancedBufferGeometry){const Ye=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ui=Math.min(J.instanceCount,Ye);at.renderInstances(vt,gt,ui)}else at.render(vt,gt)};function _t(C,W,J){C.transparent===!0&&C.side===er&&C.forceSinglePass===!1?(C.side=Bn,C.needsUpdate=!0,Cs(C,W,J),C.side=Hr,C.needsUpdate=!0,Cs(C,W,J),C.side=er):Cs(C,W,J)}this.compile=function(C,W,J=null){J===null&&(J=C),y=ct.get(J),y.init(W),P.push(y),J.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),C!==J&&C.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const ee=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let Me=0;Me<we.length;Me++){const We=we[Me];_t(We,J,X),ee.add(We)}else _t(we,J,X),ee.add(we)}),P.pop(),y=null,ee},this.compileAsync=function(C,W,J=null){const ee=this.compile(C,W,J);return new Promise(X=>{function we(){if(ee.forEach(function(Me){qe.get(Me).currentProgram.isReady()&&ee.delete(Me)}),ee.size===0){X(C);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ln=null;function En(C){Ln&&Ln(C)}function As(){Oi.stop()}function ur(){Oi.start()}const Oi=new mx;Oi.setAnimationLoop(En),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(C){Ln=C,oe.setAnimationLoop(C),C===null?Oi.stop():Oi.start()},oe.addEventListener("sessionstart",As),oe.addEventListener("sessionend",ur),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(W),W=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,W,O),y=ct.get(C,P.length),y.init(W),P.push(y),Ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(Ae),Ee=this.localClippingEnabled,fe=Se.init(this.clippingPlanes,Ee),x=Fe.get(C,L.length),x.init(),L.push(x),oe.enabled===!0&&oe.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&ki(we,W,-1/0,A.sortObjects)}ki(C,W,0,A.sortObjects),x.finish(),A.sortObjects===!0&&x.sort(ue,se),mt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,mt&&Je.addToRenderList(x,C),this.info.render.frame++,fe===!0&&Se.beginShadows();const J=y.state.shadowsArray;ke.render(J,C,W),fe===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=x.opaque,X=x.transmissive;if(y.setupLights(),W.isArrayCamera){const we=W.cameras;if(X.length>0)for(let Me=0,We=we.length;Me<We;Me++){const Ve=we[Me];Yr(ee,X,C,Ve)}mt&&Je.render(C);for(let Me=0,We=we.length;Me<We;Me++){const Ve=we[Me];jr(x,C,Ve,Ve.viewport)}}else X.length>0&&Yr(ee,X,C,W),mt&&Je.render(C),jr(x,C,W);O!==null&&(D.updateMultisampleRenderTarget(O),D.updateRenderTargetMipmap(O)),C.isScene===!0&&C.onAfterRender(A,C,W),Tt.resetDefaultState(),b=-1,R=null,P.pop(),P.length>0?(y=P[P.length-1],fe===!0&&Se.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function ki(C,W,J,ee){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){ee&&Qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const Me=de.update(C),We=C.material;We.visible&&x.push(C,Me,We,J,Qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){const Me=de.update(C),We=C.material;if(ee&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Qe.copy(C.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Qe.copy(Me.boundingSphere.center)),Qe.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(We)){const Ve=Me.groups;for(let nt=0,rt=Ve.length;nt<rt;nt++){const Xe=Ve[nt],vt=We[Xe.materialIndex];vt&&vt.visible&&x.push(C,Me,vt,J,Qe.z,Xe)}}else We.visible&&x.push(C,Me,We,J,Qe.z,null)}}const we=C.children;for(let Me=0,We=we.length;Me<We;Me++)ki(we[Me],W,J,ee)}function jr(C,W,J,ee){const X=C.opaque,we=C.transmissive,Me=C.transparent;y.setupLightsView(J),fe===!0&&Se.setGlobalState(A.clippingPlanes,J),ee&&$e.viewport(V.copy(ee)),X.length>0&&cr(X,W,J),we.length>0&&cr(we,W,J),Me.length>0&&cr(Me,W,J),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Yr(C,W,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ee.id]===void 0&&(y.state.transmissionRenderTarget[ee.id]=new Ts(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Ha:ar,minFilter:Ss,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const we=y.state.transmissionRenderTarget[ee.id],Me=ee.viewport||V;we.setSize(Me.z,Me.w);const We=A.getRenderTarget();A.setRenderTarget(we),A.getClearColor(te),ce=A.getClearAlpha(),ce<1&&A.setClearColor(16777215,.5),A.clear(),mt&&Je.render(J);const Ve=A.toneMapping;A.toneMapping=Br;const nt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),y.setupLightsView(ee),fe===!0&&Se.setGlobalState(A.clippingPlanes,ee),cr(C,J,ee),D.updateMultisampleRenderTarget(we),D.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Xe=0,vt=W.length;Xe<vt;Xe++){const Et=W[Xe],gt=Et.object,fn=Et.geometry,at=Et.material,Ye=Et.group;if(at.side===er&&gt.layers.test(ee.layers)){const ui=at.side;at.side=Bn,at.needsUpdate=!0,Ya(gt,J,ee,fn,at,Ye),at.side=ui,at.needsUpdate=!0,rt=!0}}rt===!0&&(D.updateMultisampleRenderTarget(we),D.updateRenderTargetMipmap(we))}A.setRenderTarget(We),A.setClearColor(te,ce),nt!==void 0&&(ee.viewport=nt),A.toneMapping=Ve}function cr(C,W,J){const ee=W.isScene===!0?W.overrideMaterial:null;for(let X=0,we=C.length;X<we;X++){const Me=C[X],We=Me.object,Ve=Me.geometry,nt=ee===null?Me.material:ee,rt=Me.group;We.layers.test(J.layers)&&Ya(We,W,J,Ve,nt,rt)}}function Ya(C,W,J,ee,X,we){C.onBeforeRender(A,W,J,ee,X,we),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(A,W,J,ee,C,we),X.transparent===!0&&X.side===er&&X.forceSinglePass===!1?(X.side=Bn,X.needsUpdate=!0,A.renderBufferDirect(J,W,ee,X,C,we),X.side=Hr,X.needsUpdate=!0,A.renderBufferDirect(J,W,ee,X,C,we),X.side=er):A.renderBufferDirect(J,W,ee,X,C,we),C.onAfterRender(A,W,J,ee,X,we)}function Cs(C,W,J){W.isScene!==!0&&(W=Ct);const ee=qe.get(C),X=y.state.lights,we=y.state.shadowsArray,Me=X.state.version,We=Ge.getParameters(C,X.state,we,W,J),Ve=Ge.getProgramCacheKey(We);let nt=ee.programs;ee.environment=C.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(C.isMeshStandardMaterial?$:w).get(C.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",ot),nt=new Map,ee.programs=nt);let rt=nt.get(Ve);if(rt!==void 0){if(ee.currentProgram===rt&&ee.lightsStateVersion===Me)return Ti(C,We),rt}else We.uniforms=Ge.getUniforms(C),C.onBeforeCompile(We,A),rt=Ge.acquireProgram(We,Ve),nt.set(Ve,rt),ee.uniforms=We.uniforms;const Xe=ee.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=Se.uniform),Ti(C,We),ee.needsLights=Ju(C),ee.lightsStateVersion=Me,ee.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=rt,ee.uniformsList=null,rt}function qa(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Iu.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Ti(C,W){const J=qe.get(C);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function $a(C,W,J,ee,X){W.isScene!==!0&&(W=Ct),D.resetTextureUnits();const we=W.fog,Me=ee.isMeshStandardMaterial?W.environment:null,We=O===null?A.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Do,Ve=(ee.isMeshStandardMaterial?$:w).get(ee.envMap||Me),nt=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,rt=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!J.morphAttributes.position,vt=!!J.morphAttributes.normal,Et=!!J.morphAttributes.color;let gt=Br;ee.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(gt=A.toneMapping);const fn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,at=fn!==void 0?fn.length:0,Ye=qe.get(ee),ui=y.state.lights;if(fe===!0&&(Ee===!0||C!==R)){const Tn=C===R&&ee.id===b;Se.setState(ee,C,Tn)}let St=!1;ee.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ui.state.version||Ye.outputColorSpace!==We||X.isBatchedMesh&&Ye.batching===!1||!X.isBatchedMesh&&Ye.batching===!0||X.isBatchedMesh&&Ye.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ye.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ye.instancing===!1||!X.isInstancedMesh&&Ye.instancing===!0||X.isSkinnedMesh&&Ye.skinning===!1||!X.isSkinnedMesh&&Ye.skinning===!0||X.isInstancedMesh&&Ye.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ye.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ye.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ye.instancingMorph===!1&&X.morphTexture!==null||Ye.envMap!==Ve||ee.fog===!0&&Ye.fog!==we||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==nt||Ye.vertexTangents!==rt||Ye.morphTargets!==Xe||Ye.morphNormals!==vt||Ye.morphColors!==Et||Ye.toneMapping!==gt||Ye.morphTargetsCount!==at)&&(St=!0):(St=!0,Ye.__version=ee.version);let dn=Ye.currentProgram;St===!0&&(dn=Cs(ee,W,X));let ci=!1,Qt=!1,wi=!1;const bt=dn.getUniforms(),Kn=Ye.uniforms;if($e.useProgram(dn.program)&&(ci=!0,Qt=!0,wi=!0),ee.id!==b&&(b=ee.id,Qt=!0),ci||R!==C){$e.buffers.depth.getReversed()?(_e.copy(C.projectionMatrix),YA(_e),qA(_e),bt.setValue(j,"projectionMatrix",_e)):bt.setValue(j,"projectionMatrix",C.projectionMatrix),bt.setValue(j,"viewMatrix",C.matrixWorldInverse);const Zn=bt.map.cameraPosition;Zn!==void 0&&Zn.setValue(j,Ne.setFromMatrixPosition(C.matrixWorld)),ft.logarithmicDepthBuffer&&bt.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Qt=!0,wi=!0)}if(X.isSkinnedMesh){bt.setOptional(j,X,"bindMatrix"),bt.setOptional(j,X,"bindMatrixInverse");const Tn=X.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),bt.setValue(j,"boneTexture",Tn.boneTexture,D))}X.isBatchedMesh&&(bt.setOptional(j,X,"batchingTexture"),bt.setValue(j,"batchingTexture",X._matricesTexture,D),bt.setOptional(j,X,"batchingIdTexture"),bt.setValue(j,"batchingIdTexture",X._indirectTexture,D),bt.setOptional(j,X,"batchingColorTexture"),X._colorsTexture!==null&&bt.setValue(j,"batchingColorTexture",X._colorsTexture,D));const Bi=J.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&tt.update(X,J,dn),(Qt||Ye.receiveShadow!==X.receiveShadow)&&(Ye.receiveShadow=X.receiveShadow,bt.setValue(j,"receiveShadow",X.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Kn.envMap.value=Ve,Kn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(Kn.envMapIntensity.value=W.environmentIntensity),Qt&&(bt.setValue(j,"toneMappingExposure",A.toneMappingExposure),Ye.needsLights&&Ka(Kn,wi),we&&ee.fog===!0&&Ce.refreshFogUniforms(Kn,we),Ce.refreshMaterialUniforms(Kn,ee,z,re,y.state.transmissionRenderTarget[C.id]),Iu.upload(j,qa(Ye),Kn,D)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Iu.upload(j,qa(Ye),Kn,D),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(j,"center",X.center),bt.setValue(j,"modelViewMatrix",X.modelViewMatrix),bt.setValue(j,"normalMatrix",X.normalMatrix),bt.setValue(j,"modelMatrix",X.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Tn=ee.uniformsGroups;for(let Zn=0,Dn=Tn.length;Zn<Dn;Zn++){const Za=Tn[Zn];G.update(Za,dn),G.bind(Za,dn)}}return dn}function Ka(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Ju(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,W,J){qe.get(C.texture).__webglTexture=W,qe.get(C.depthTexture).__webglTexture=J;const ee=qe.get(C);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const J=qe.get(C);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,J=0){O=C,U=W,N=J;let ee=!0,X=null,we=!1,Me=!1;if(C){const Ve=qe.get(C);if(Ve.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(j.FRAMEBUFFER,null),ee=!1;else if(Ve.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Ve.__hasExternalTextures)D.rebindTextures(C,qe.get(C.texture).__webglTexture,qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Xe=C.depthTexture;if(Ve.__boundDepthTexture!==Xe){if(Xe!==null&&qe.has(Xe)&&(C.width!==Xe.image.width||C.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const nt=C.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Me=!0);const rt=qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(rt[W])?X=rt[W][J]:X=rt[W],we=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?X=qe.get(C).__webglMultisampledFramebuffer:Array.isArray(rt)?X=rt[J]:X=rt,V.copy(C.viewport),le.copy(C.scissor),Z=C.scissorTest}else V.copy(F).multiplyScalar(z).floor(),le.copy(ie).multiplyScalar(z).floor(),Z=Ue;if($e.bindFramebuffer(j.FRAMEBUFFER,X)&&ee&&$e.drawBuffers(C,X),$e.viewport(V),$e.scissor(le),$e.setScissorTest(Z),we){const Ve=qe.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ve.__webglTexture,J)}else if(Me){const Ve=qe.get(C.texture),nt=W||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ve.__webglTexture,J||0,nt)}b=-1},this.readRenderTargetPixels=function(C,W,J,ee,X,we,Me){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(We=We[Me]),We){$e.bindFramebuffer(j.FRAMEBUFFER,We);try{const Ve=C.texture,nt=Ve.format,rt=Ve.type;if(!ft.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-ee&&J>=0&&J<=C.height-X&&j.readPixels(W,J,ee,X,st.convert(nt),st.convert(rt),we)}finally{const Ve=O!==null?qe.get(O).__webglFramebuffer:null;$e.bindFramebuffer(j.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,W,J,ee,X,we,Me){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(We=We[Me]),We){const Ve=C.texture,nt=Ve.format,rt=Ve.type;if(!ft.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-ee&&J>=0&&J<=C.height-X){$e.bindFramebuffer(j.FRAMEBUFFER,We);const Xe=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Xe),j.bufferData(j.PIXEL_PACK_BUFFER,we.byteLength,j.STREAM_READ),j.readPixels(W,J,ee,X,st.convert(nt),st.convert(rt),0);const vt=O!==null?qe.get(O).__webglFramebuffer:null;$e.bindFramebuffer(j.FRAMEBUFFER,vt);const Et=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await jA(j,Et,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Xe),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,we),j.deleteBuffer(Xe),j.deleteSync(Et),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,J=0){C.isTexture!==!0&&(Ma("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const ee=Math.pow(2,-J),X=Math.floor(C.image.width*ee),we=Math.floor(C.image.height*ee),Me=W!==null?W.x:0,We=W!==null?W.y:0;D.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,J,0,0,Me,We,X,we),$e.unbindTexture()},this.copyTextureToTexture=function(C,W,J=null,ee=null,X=0){C.isTexture!==!0&&(Ma("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,C=arguments[1],W=arguments[2],X=arguments[3]||0,J=null);let we,Me,We,Ve,nt,rt,Xe,vt,Et;const gt=C.isCompressedTexture?C.mipmaps[X]:C.image;J!==null?(we=J.max.x-J.min.x,Me=J.max.y-J.min.y,We=J.isBox3?J.max.z-J.min.z:1,Ve=J.min.x,nt=J.min.y,rt=J.isBox3?J.min.z:0):(we=gt.width,Me=gt.height,We=gt.depth||1,Ve=0,nt=0,rt=0),ee!==null?(Xe=ee.x,vt=ee.y,Et=ee.z):(Xe=0,vt=0,Et=0);const fn=st.convert(W.format),at=st.convert(W.type);let Ye;W.isData3DTexture?(D.setTexture3D(W,0),Ye=j.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(D.setTexture2DArray(W,0),Ye=j.TEXTURE_2D_ARRAY):(D.setTexture2D(W,0),Ye=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,W.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,W.unpackAlignment);const ui=j.getParameter(j.UNPACK_ROW_LENGTH),St=j.getParameter(j.UNPACK_IMAGE_HEIGHT),dn=j.getParameter(j.UNPACK_SKIP_PIXELS),ci=j.getParameter(j.UNPACK_SKIP_ROWS),Qt=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,gt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,gt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ve),j.pixelStorei(j.UNPACK_SKIP_ROWS,nt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,rt);const wi=C.isDataArrayTexture||C.isData3DTexture,bt=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Kn=qe.get(C),Bi=qe.get(W),Tn=qe.get(Kn.__renderTarget),Zn=qe.get(Bi.__renderTarget);$e.bindFramebuffer(j.READ_FRAMEBUFFER,Tn.__webglFramebuffer),$e.bindFramebuffer(j.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Dn=0;Dn<We;Dn++)wi&&j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,qe.get(C).__webglTexture,X,rt+Dn),C.isDepthTexture?(bt&&j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,qe.get(W).__webglTexture,X,Et+Dn),j.blitFramebuffer(Ve,nt,we,Me,Xe,vt,we,Me,j.DEPTH_BUFFER_BIT,j.NEAREST)):bt?j.copyTexSubImage3D(Ye,X,Xe,vt,Et+Dn,Ve,nt,we,Me):j.copyTexSubImage2D(Ye,X,Xe,vt,Et+Dn,Ve,nt,we,Me);$e.bindFramebuffer(j.READ_FRAMEBUFFER,null),$e.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else bt?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(Ye,X,Xe,vt,Et,we,Me,We,fn,at,gt.data):W.isCompressedArrayTexture?j.compressedTexSubImage3D(Ye,X,Xe,vt,Et,we,Me,We,fn,gt.data):j.texSubImage3D(Ye,X,Xe,vt,Et,we,Me,We,fn,at,gt):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,X,Xe,vt,we,Me,fn,at,gt.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,X,Xe,vt,gt.width,gt.height,fn,gt.data):j.texSubImage2D(j.TEXTURE_2D,X,Xe,vt,we,Me,fn,at,gt);j.pixelStorei(j.UNPACK_ROW_LENGTH,ui),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,St),j.pixelStorei(j.UNPACK_SKIP_PIXELS,dn),j.pixelStorei(j.UNPACK_SKIP_ROWS,ci),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Qt),X===0&&W.generateMipmaps&&j.generateMipmap(Ye),$e.unbindTexture()},this.copyTextureToTexture3D=function(C,W,J=null,ee=null,X=0){return C.isTexture!==!0&&(Ma("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,C=arguments[2],W=arguments[3],X=arguments[4]||0),Ma('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,J,ee,X)},this.initRenderTarget=function(C){qe.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),$e.unbindTexture()},this.resetState=function(){U=0,N=0,O=null,$e.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}class oL extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _p extends Xr{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(u+c,Math.PI);let h=0;const p=[],g=new ne,v=new ne,S=[],M=[],E=[],x=[];for(let y=0;y<=r;y++){const L=[],P=y/r;let A=0;y===0&&u===0?A=.5/t:y===r&&d===Math.PI&&(A=-.5/t);for(let k=0;k<=t;k++){const U=k/t;g.x=-e*Math.cos(o+U*l)*Math.sin(u+P*c),g.y=e*Math.cos(u+P*c),g.z=e*Math.sin(o+U*l)*Math.sin(u+P*c),M.push(g.x,g.y,g.z),v.copy(g).normalize(),E.push(v.x,v.y,v.z),x.push(U+A,1-P),L.push(h++)}p.push(L)}for(let y=0;y<r;y++)for(let L=0;L<t;L++){const P=p[y][L+1],A=p[y][L],k=p[y+1][L],U=p[y+1][L+1];(y!==0||u>0)&&S.push(P,A,U),(y!==r-1||d<Math.PI)&&S.push(A,k,U)}this.setIndex(S),this.setAttribute("position",new Fi(M,3)),this.setAttribute("normal",new Fi(E,3)),this.setAttribute("uv",new Fi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _p(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const d_={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class aL{constructor(e,t,r){const o=this;let l=!1,u=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(p){c++,l===!1&&o.onStart!==void 0&&o.onStart(p,u,c),l=!0},this.itemEnd=function(p){u++,o.onProgress!==void 0&&o.onProgress(p,u,c),u===c&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return h.push(p,g),this},this.removeHandler=function(p){const g=h.indexOf(p);return g!==-1&&h.splice(g,2),this},this.getHandler=function(p){for(let g=0,v=h.length;g<v;g+=2){const S=h[g],M=h[g+1];if(S.global&&(S.lastIndex=0),S.test(p))return M}return null}}}const lL=new aL;class yp{constructor(e){this.manager=e!==void 0?e:lL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yp.DEFAULT_MATERIAL_NAME="__DEFAULT";class uL extends yp{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=d_.get(e);if(u!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u;const c=Oa("img");function d(){p(),d_.add(e,this),t&&t(this),l.manager.itemEnd(e)}function h(g){p(),o&&o(g),l.manager.itemError(e),l.manager.itemEnd(e)}function p(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),l.manager.itemStart(e),c.src=e,c}}class cL extends yp{constructor(e){super(e)}load(e,t,r,o){const l=new bn,u=new uL(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(c){l.image=c,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);const Sx="/paradise/assets/sketch-hero-p1psLTYl.jpg",Mx="/paradise/assets/render-CFq-SrBL.jpg",Ex="/paradise/assets/lobby-top-Df-0q-me.jpg",Tx="/paradise/assets/unit-top-0YMS742C.jpg",fL="/paradise/assets/pano-lobby-1-Bsw3HBIX.jpg",dL="/paradise/assets/pano-lobby-2-DDA7DyyD.jpg",h_="/paradise/assets/pano-unit-living-CQ5taCtp.jpg",hL="/paradise/assets/pano-unit-kitchen-j04st1-M.jpg",pL="/paradise/assets/pano-unit-lounge--1GYjiU_.jpg",mL="/paradise/assets/pano-unit-lounge2-B5ZZkAgK.jpg",li="#B89968",xn="#D4BD8E",ja="#F5F1E8";function gL({onBegin:n}){return xe.jsxs(Ut.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6},style:{position:"fixed",inset:0,background:"#0a0d14",overflow:"hidden"},children:[xe.jsx(Ut.img,{src:Sx,alt:"",animate:{scale:[1,1.05,1]},transition:{duration:20,repeat:1/0,ease:"easeInOut"},style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.55) contrast(1.05) saturate(0.85)"}}),xe.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:"linear-gradient(180deg, rgba(8,12,20,0.6) 0%, rgba(8,12,20,0.15) 30%, rgba(8,12,20,0.15) 55%, rgba(5,8,15,0.9) 100%)"}}),xe.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:"rgba(20, 30, 50, 0.18)",mixBlendMode:"multiply"}}),xe.jsxs(Ut.div,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},transition:{delay:.4,duration:.9},style:{position:"absolute",top:0,left:0,right:0,padding:"2rem 1rem 1rem",textAlign:"center",zIndex:10},children:[xe.jsx("div",{style:{color:xn,fontSize:"1.8rem",marginBottom:"0.4rem",textShadow:"0 2px 12px rgba(0,0,0,0.7)"},children:"✦"}),xe.jsx("div",{style:{color:xn,fontSize:"1.1rem",letterSpacing:"0.5em",fontWeight:500,paddingLeft:"0.5em",textShadow:"0 2px 12px rgba(0,0,0,0.7)"},children:"ARCHIVA"}),xe.jsx("div",{style:{width:50,height:1,background:li,margin:"0.7rem auto"}}),xe.jsx("div",{style:{color:"rgba(212,189,142,0.85)",fontSize:"0.65rem",letterSpacing:"0.4em",fontWeight:300,textShadow:"0 2px 12px rgba(0,0,0,0.7)"},children:"PROJECT  SHOWCASE"})]}),xe.jsxs(Ut.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{delay:.9,duration:1.1},style:{position:"absolute",top:"50%",left:0,right:0,transform:"translateY(-50%)",textAlign:"center",zIndex:10,padding:"0 1rem"},children:[xe.jsx("div",{style:{color:xn,fontSize:"0.7rem",letterSpacing:"0.4em",marginBottom:"1.5rem",paddingLeft:"0.4em",textShadow:"0 2px 12px rgba(0,0,0,0.8)"},children:"TEHRAN  ·  2019  ·  RESIDENTIAL"}),xe.jsx("div",{style:{color:ja,fontFamily:"Lora, Georgia, serif",fontStyle:"italic",fontSize:"clamp(3.5rem, 14vw, 5.5rem)",fontWeight:400,lineHeight:1,textShadow:"0 4px 30px rgba(0,0,0,0.9)"},children:"Paradise"}),xe.jsx("div",{style:{color:xn,fontSize:"1.3rem",marginTop:"1rem",fontFamily:"Vazirmatn, sans-serif",textShadow:"0 2px 12px rgba(0,0,0,0.8)"},children:"پارادایس"}),xe.jsx("div",{style:{width:35,height:1,background:li,margin:"1.5rem auto"}}),xe.jsx("div",{style:{color:"rgba(245,241,232,0.95)",fontFamily:"Lora, Georgia, serif",fontStyle:"italic",fontSize:"1rem",textShadow:"0 2px 12px rgba(0,0,0,0.8)"},children:"Where classic meets contemporary"})]}),xe.jsxs(Ut.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.4,duration:.9},style:{position:"absolute",bottom:0,left:0,right:0,padding:"0 1rem 3rem",zIndex:10,textAlign:"center"},children:[xe.jsx("button",{onClick:n,style:{background:li,color:"#1a1a1a",border:"none",padding:"1.1rem 3rem",fontSize:"0.95rem",fontWeight:500,letterSpacing:"0.2em",fontFamily:"inherit",cursor:"pointer",boxShadow:"0 8px 30px rgba(184,153,104,0.5), 0 0 0 1px rgba(212,189,142,0.3)",minWidth:280},children:"BEGIN  TOUR  →"}),xe.jsx("div",{style:{marginTop:"1.5rem",color:"rgba(245,241,232,0.6)",fontSize:"0.65rem",letterSpacing:"0.3em",textShadow:"0 1px 6px rgba(0,0,0,0.7)"},children:"DESIGNED  BY"}),xe.jsx("div",{style:{marginTop:"0.4rem",color:xn,fontSize:"0.85rem",letterSpacing:"0.35em",fontWeight:500,textShadow:"0 1px 6px rgba(0,0,0,0.7)"},children:"REZA  TAGHIZADEH"})]})]})}function vL({onComplete:n}){const[e,t]=Le.useState("sketch");return Le.useEffect(()=>{const r=setTimeout(()=>t("morphing"),800),o=setTimeout(()=>t("render"),2200),l=setTimeout(n,3200);return()=>{clearTimeout(r),clearTimeout(o),clearTimeout(l)}},[n]),xe.jsxs(Ut.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},style:{position:"fixed",inset:0,background:"#0a0d14",overflow:"hidden"},children:[xe.jsx(Ut.img,{src:Sx,animate:{opacity:e==="render"?0:1,scale:e==="sketch"?1:e==="morphing"?1.05:1.1,filter:e==="morphing"?"blur(6px) brightness(0.8)":"blur(0px) brightness(0.6)"},transition:{duration:1.4,ease:[.65,0,.35,1]},style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:1}}),xe.jsx(Ut.img,{src:Mx,animate:{opacity:e==="sketch"?0:e==="morphing"?.4:1,scale:e==="sketch"?1.1:1,filter:e==="render"?"blur(0px)":"blur(6px)"},transition:{duration:1.4,ease:[.65,0,.35,1]},style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",zIndex:2}}),xe.jsx("div",{style:{position:"absolute",inset:0,zIndex:3,pointerEvents:"none",background:"linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 40%, transparent 70%, rgba(0,0,0,0.4) 100%)"}}),xe.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:e==="render"?0:1},transition:{duration:.6},style:{position:"absolute",bottom:"10%",left:0,right:0,textAlign:"center",color:xn,fontSize:"0.7rem",letterSpacing:"0.4em",textShadow:"0 2px 10px rgba(0,0,0,0.8)",zIndex:10},children:"ENTERING  PARADISE"})]})}function _L({onSelectFloor:n}){const[e,t]=Le.useState(null),r=[{id:"roof",label:"روف‌گاردن",num:"R",units:1,top:"10%"},{id:"f6",label:"طبقه ۶",num:"6",units:2,top:"23%"},{id:"f5",label:"طبقه ۵",num:"5",units:2,top:"32%"},{id:"f4",label:"طبقه ۴",num:"4",units:2,top:"41%"},{id:"f3",label:"طبقه ۳",num:"3",units:2,top:"50%"},{id:"f2",label:"طبقه ۲",num:"2",units:2,top:"59%"},{id:"f1",label:"طبقه ۱",num:"1",units:2,top:"68%"},{id:"g",label:"همکف",num:"G",units:0,top:"82%"}];return xe.jsxs(Ut.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.7},style:{position:"fixed",inset:0,background:"#0a0a0a",overflow:"hidden"},children:[xe.jsx("img",{src:Mx,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}),xe.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)"}}),xe.jsxs(Ut.div,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},transition:{delay:.3},style:{position:"absolute",top:0,left:0,right:0,padding:"1.2rem 1rem 0.8rem",background:"linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)",textAlign:"center",zIndex:20},children:[xe.jsx("div",{style:{color:ja,fontSize:"1.4rem",fontFamily:"Lora, Georgia, serif",fontStyle:"italic",textShadow:"0 2px 10px rgba(0,0,0,0.7)"},children:"Paradise"}),xe.jsx("div",{style:{color:xn,fontSize:"0.6rem",letterSpacing:"0.4em",marginTop:"0.3rem",textShadow:"0 1px 6px rgba(0,0,0,0.7)"},children:"SELECT  A  FLOOR"})]}),xe.jsx("div",{style:{position:"absolute",inset:0,zIndex:10},children:r.map((o,l)=>xe.jsxs(Ut.button,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{delay:.5+l*.06},onMouseEnter:()=>t(o.id),onMouseLeave:()=>t(null),onClick:()=>n(o),style:{position:"absolute",top:o.top,right:"0.8rem",transform:"translateY(-50%)",background:e===o.id?li:"rgba(15,15,20,0.85)",color:e===o.id?"#0a0a0a":xn,padding:"0.5rem 0.9rem",borderRadius:"20px",border:"1px solid "+li,fontSize:"0.72rem",fontWeight:500,fontFamily:"Vazirmatn, sans-serif",cursor:"pointer",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",boxShadow:e===o.id?"0 6px 24px rgba(184,153,104,0.5)":"0 4px 12px rgba(0,0,0,0.4)",minWidth:120,transition:"background 0.2s, color 0.2s",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem"},children:[xe.jsx("span",{style:{fontFamily:"Lora, Georgia, serif",fontStyle:"italic",fontWeight:700,fontSize:"0.95rem"},children:o.num}),xe.jsx("span",{children:o.label}),o.units>0&&xe.jsxs("span",{style:{fontSize:"0.6rem",opacity:.7,fontFamily:"Lora, Georgia, serif"},children:[o.units,"u"]})]},o.id))}),xe.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.2},style:{position:"absolute",bottom:0,left:0,right:0,padding:"1rem",textAlign:"center",background:"linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)",zIndex:20},children:xe.jsx("div",{style:{color:"rgba(245,241,232,0.7)",fontSize:"0.75rem",letterSpacing:"0.15em",fontFamily:"Vazirmatn, sans-serif",textShadow:"0 1px 6px rgba(0,0,0,0.7)"},children:"روی هر طبقه ضربه بزنید"})})]})}function yL({floor:n,onBack:e,onSelectUnit:t}){const[r,o]=Le.useState(null),l=n.id==="g",u=l?Ex:Tx,c=l?[{id:"lobby",label:"لابی + سالن اجتماعات",num:"—",x:"50%",y:"50%"}]:[{id:"A",label:"واحد A",num:"A",area:"260m²",x:"30%",y:"50%"},{id:"B",label:"واحد B",num:"B",area:"260m²",x:"70%",y:"50%"}];return xe.jsxs(Ut.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6},style:{position:"fixed",inset:0,background:"#000",overflow:"hidden"},children:[xe.jsx(Ut.img,{initial:{scale:1.3,opacity:0},animate:{scale:1,opacity:1},transition:{duration:1,ease:[.65,0,.35,1]},src:u,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",background:"#000"}}),xe.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.7) 100%)"}}),xe.jsxs(Ut.div,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},transition:{delay:.4},style:{position:"absolute",top:0,left:0,right:0,padding:"1rem",zIndex:20,background:"linear-gradient(180deg, rgba(0,0,0,0.75) 0%, transparent 100%)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[xe.jsx("button",{onClick:e,style:{background:"rgba(15,15,20,0.7)",border:"1px solid "+li+"55",color:xn,padding:"0.4rem 0.8rem",borderRadius:"20px",fontSize:"0.7rem",cursor:"pointer",backdropFilter:"blur(10px)",fontFamily:"inherit"},children:"← نما"}),xe.jsxs("div",{style:{textAlign:"center"},children:[xe.jsx("div",{style:{color:ja,fontSize:"1.05rem",fontFamily:"Lora, Georgia, serif",fontStyle:"italic"},children:n.label}),xe.jsxs("div",{style:{color:xn,fontSize:"0.55rem",letterSpacing:"0.4em",marginTop:"0.2rem"},children:["FLOOR  ",n.num]})]}),xe.jsx("div",{style:{width:60}})]}),xe.jsx("div",{style:{position:"absolute",inset:0,zIndex:15},children:c.map((d,h)=>xe.jsxs(Ut.button,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.8+h*.15},onMouseEnter:()=>o(d.id),onMouseLeave:()=>o(null),onClick:()=>t(d),style:{position:"absolute",left:d.x,top:d.y,transform:"translate(-50%, -50%)",background:r===d.id?li:"rgba(15,15,20,0.85)",color:r===d.id?"#0a0a0a":xn,padding:"0.7rem 1.2rem",borderRadius:"16px",border:"1.5px solid "+li,fontSize:"0.75rem",fontWeight:500,fontFamily:"Vazirmatn, sans-serif",cursor:"pointer",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",boxShadow:r===d.id?"0 8px 30px rgba(184,153,104,0.6)":"0 6px 20px rgba(0,0,0,0.5)",minWidth:130,textAlign:"center",display:"flex",flexDirection:"column",gap:"0.15rem",transition:"background 0.2s, color 0.2s",animation:r!==d.id?"tagPulse 2.5s infinite":"none"},children:[xe.jsx("span",{style:{fontFamily:"Lora, Georgia, serif",fontStyle:"italic",fontWeight:700,fontSize:"1.4rem",lineHeight:1},children:d.num}),xe.jsx("span",{style:{fontSize:"0.7rem"},children:d.label}),d.area&&xe.jsx("span",{style:{fontSize:"0.6rem",opacity:.85,fontFamily:"Lora, Georgia, serif"},children:d.area})]},d.id))}),xe.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.4},style:{position:"absolute",bottom:0,left:0,right:0,padding:"1rem",textAlign:"center",background:"linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)",zIndex:20},children:xe.jsx("div",{style:{color:"rgba(245,241,232,0.75)",fontSize:"0.75rem",fontFamily:"Vazirmatn, sans-serif"},children:l?"ورود به فضای لابی":"یکی از واحدها رو انتخاب کن"})})]})}function xL({unit:n,floor:e,onBack:t,onSelectRoom:r}){const[o,l]=Le.useState(null),u=n.id==="lobby",c=u?Ex:Tx,d=u?[{id:"lobby1",label:"لابی اصلی",area:"—",x:"45%",y:"45%",pano:"lobby1"},{id:"lobby2",label:"سالن اجتماعات",area:"—",x:"70%",y:"55%",pano:"lobby2"}]:[{id:"kitchen",label:"آشپزخانه",area:"18m²",x:"25%",y:"55%",pano:"kitchen"},{id:"living",label:"نشیمن",area:"32m²",x:"45%",y:"40%",pano:"living"},{id:"lounge",label:"پذیرایی",area:"45m²",x:"55%",y:"55%",pano:"lounge"},{id:"master",label:"مستر",area:"28m²",x:"78%",y:"65%",pano:"lounge2"},{id:"bedroom1",label:"خواب ۱",area:"16m²",x:"55%",y:"78%",pano:"lounge2"},{id:"bedroom2",label:"خواب ۲",area:"18m²",x:"38%",y:"78%",pano:"lounge2"}];return xe.jsxs(Ut.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6},style:{position:"fixed",inset:0,background:"#000",overflow:"hidden"},children:[xe.jsx(Ut.img,{initial:{scale:1.4,opacity:0},animate:{scale:1,opacity:1},transition:{duration:1,ease:[.65,0,.35,1]},src:c,alt:"",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",background:"#000"}}),xe.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)"}}),xe.jsxs(Ut.div,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},transition:{delay:.4},style:{position:"absolute",top:0,left:0,right:0,padding:"1rem",zIndex:20,background:"linear-gradient(180deg, rgba(0,0,0,0.75) 0%, transparent 100%)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[xe.jsx("button",{onClick:t,style:{background:"rgba(15,15,20,0.7)",border:"1px solid "+li+"55",color:xn,padding:"0.4rem 0.8rem",borderRadius:"20px",fontSize:"0.7rem",cursor:"pointer",backdropFilter:"blur(10px)",fontFamily:"inherit"},children:"← طبقه"}),xe.jsxs("div",{style:{textAlign:"center"},children:[xe.jsx("div",{style:{color:ja,fontSize:"1.05rem",fontFamily:"Lora, Georgia, serif",fontStyle:"italic"},children:n.label}),xe.jsx("div",{style:{color:xn,fontSize:"0.55rem",letterSpacing:"0.4em",marginTop:"0.2rem"},children:e.label.toUpperCase()})]}),xe.jsx("div",{style:{width:60}})]}),xe.jsx("div",{style:{position:"absolute",inset:0,zIndex:15},children:d.map((h,p)=>xe.jsxs(Ut.button,{initial:{opacity:0,scale:.7},animate:{opacity:1,scale:1},transition:{delay:.7+p*.08},onMouseEnter:()=>l(h.id),onMouseLeave:()=>l(null),onClick:()=>r(h),style:{position:"absolute",left:h.x,top:h.y,transform:"translate(-50%, -50%)",background:o===h.id?li:"rgba(15,15,20,0.88)",color:o===h.id?"#0a0a0a":xn,padding:"0.4rem 0.8rem",borderRadius:"12px",border:"1px solid "+li,fontSize:"0.65rem",fontWeight:500,fontFamily:"Vazirmatn, sans-serif",cursor:"pointer",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",boxShadow:o===h.id?"0 6px 20px rgba(184,153,104,0.6)":"0 3px 12px rgba(0,0,0,0.5)",minWidth:90,textAlign:"center",display:"flex",flexDirection:"column",gap:"0.05rem",animation:o!==h.id?"tagPulse 3s infinite":"none",transition:"background 0.2s, color 0.2s"},children:[xe.jsx("span",{children:h.label}),h.area&&h.area!=="—"&&xe.jsx("span",{style:{fontSize:"0.55rem",opacity:.85,fontFamily:"Lora, Georgia, serif"},children:h.area})]},h.id))}),xe.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.3},style:{position:"absolute",bottom:0,left:0,right:0,padding:"0.8rem",textAlign:"center",background:"linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 100%)",zIndex:20},children:xe.jsx("div",{style:{color:"rgba(245,241,232,0.75)",fontSize:"0.7rem",fontFamily:"Vazirmatn, sans-serif"},children:"روی هر فضا کلیک کن"})})]})}function SL({room:n,unit:e,onBack:t}){const r=Le.useRef(null),l={lobby1:fL,lobby2:dL,living:h_,kitchen:hL,lounge:pL,lounge2:mL}[n.pano]||h_;return Le.useEffect(()=>{if(!r.current)return;const u=r.current,c=u.clientWidth,d=u.clientHeight,h=new oL,p=new ai(75,c/d,.1,1100),g=new sL({antialias:!0});g.setPixelRatio(window.devicePixelRatio),g.setSize(c,d),u.appendChild(g.domElement);const v=new _p(500,60,40);v.scale(-1,1,1);const S=new cL().load(l);S.colorSpace=jn;const M=new gp({map:S}),E=new Di(v,M);h.add(E);let x=0,y=0,L=!1,P=0,A=0,k=0,U=0;const N=te=>{L=!0;const ce=te.clientX||te.touches&&te.touches[0].clientX,ae=te.clientY||te.touches&&te.touches[0].clientY;P=ce,A=ae,k=x,U=y},O=te=>{if(!L)return;te.cancelable&&te.preventDefault();const ce=te.clientX||te.touches&&te.touches[0].clientX,ae=te.clientY||te.touches&&te.touches[0].clientY;x=k-(ce-P)*.2,y=U+(ae-A)*.2},b=()=>{L=!1},R=te=>{te.cancelable&&te.preventDefault(),N(te)};u.addEventListener("mousedown",N),u.addEventListener("mousemove",O),u.addEventListener("mouseup",b),u.addEventListener("mouseleave",b),u.addEventListener("touchstart",R,{passive:!1}),u.addEventListener("touchmove",O,{passive:!1}),u.addEventListener("touchend",b);let V;const le=()=>{y=Math.max(-85,Math.min(85,y));const te=x0.degToRad(90-y),ce=x0.degToRad(x),ae=new ne(500*Math.sin(te)*Math.cos(ce),500*Math.cos(te),500*Math.sin(te)*Math.sin(ce));p.lookAt(ae),g.render(h,p),V=requestAnimationFrame(le)};le();const Z=()=>{const te=u.clientWidth,ce=u.clientHeight;p.aspect=te/ce,p.updateProjectionMatrix(),g.setSize(te,ce)};return window.addEventListener("resize",Z),()=>{cancelAnimationFrame(V),window.removeEventListener("resize",Z),u.removeEventListener("mousedown",N),u.removeEventListener("mousemove",O),u.removeEventListener("mouseup",b),u.removeEventListener("mouseleave",b),u.removeEventListener("touchstart",R),u.removeEventListener("touchmove",O),u.removeEventListener("touchend",b),g.domElement.parentNode&&g.domElement.parentNode.removeChild(g.domElement),g.dispose(),v.dispose(),M.dispose(),S.dispose()}},[l]),xe.jsxs(Ut.div,{initial:{opacity:0,scale:1.3},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.7,ease:[.4,0,.2,1]},style:{position:"fixed",inset:0,background:"#000",overflow:"hidden",touchAction:"none"},children:[xe.jsx("div",{ref:r,style:{width:"100%",height:"100%",cursor:"grab",position:"absolute",inset:0,touchAction:"none"}}),xe.jsxs(Ut.div,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},transition:{delay:.4},style:{position:"absolute",top:0,left:0,right:0,padding:"1rem",zIndex:20,background:"linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[xe.jsx("button",{onClick:t,style:{background:"rgba(15,15,20,0.7)",border:"1px solid "+li+"55",color:xn,padding:"0.4rem 0.8rem",borderRadius:"20px",fontSize:"0.7rem",cursor:"pointer",backdropFilter:"blur(10px)",fontFamily:"inherit"},children:"← پلان"}),xe.jsxs("div",{style:{textAlign:"center"},children:[xe.jsx("div",{style:{color:ja,fontSize:"0.95rem",fontFamily:"Lora, Georgia, serif",fontStyle:"italic"},children:n.label}),xe.jsx("div",{style:{color:xn,fontSize:"0.55rem",letterSpacing:"0.4em",marginTop:"0.2rem"},children:e.label})]}),xe.jsx("div",{style:{width:60}})]}),xe.jsx(Ut.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},style:{position:"absolute",bottom:"5%",left:0,right:0,textAlign:"center",color:"rgba(245,241,232,0.7)",fontSize:"0.65rem",letterSpacing:"0.2em",fontFamily:"Vazirmatn, sans-serif",textShadow:"0 1px 6px rgba(0,0,0,0.7)",pointerEvents:"none",zIndex:10},children:"🖐️  بکش تا بچرخه"})]})}function ML(){const[n,e]=Le.useState("splash"),[t,r]=Le.useState(null),[o,l]=Le.useState(null),[u,c]=Le.useState(null);return xe.jsxs(_M,{mode:"wait",children:[n==="splash"&&xe.jsx(gL,{onBegin:()=>e("transition")},"splash"),n==="transition"&&xe.jsx(vL,{onComplete:()=>e("building")},"transition"),n==="building"&&xe.jsx(_L,{onSelectFloor:d=>{r(d),e("floor")}},"building"),n==="floor"&&t&&xe.jsx(yL,{floor:t,onBack:()=>{e("building"),r(null)},onSelectUnit:d=>{l(d),e("unit")}},"floor"),n==="unit"&&t&&o&&xe.jsx(xL,{unit:o,floor:t,onBack:()=>{e("floor"),l(null)},onSelectRoom:d=>{c(d),e("panorama")}},"unit"),n==="panorama"&&u&&o&&xe.jsx(SL,{room:u,unit:o,onBack:()=>{e("unit"),c(null)}},"panorama-"+u.id)]})}hM.createRoot(document.getElementById("root")).render(xe.jsx(oM.StrictMode,{children:xe.jsx(ML,{})}));
