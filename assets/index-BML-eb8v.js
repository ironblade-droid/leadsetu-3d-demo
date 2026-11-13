(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="170",Ts={ROTATE:0,DOLLY:1,PAN:2},Gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mf=0,Zl=1,wf=2,ul=1,cd=2,ri=3,fi=0,Xt=1,Tt=2,Ut=0,Es=1,ic=2,Kl=3,$l=4,ld=5,Dn=100,Sf=101,Tf=102,Ef=103,Af=104,hr=200,Rf=201,Cf=202,Pf=203,sc=204,rc=205,oc=206,Df=207,ac=208,Lf=209,If=210,kf=211,Nf=212,Uf=213,Ff=214,cc=0,lc=1,hc=2,Ls=3,uc=4,dc=5,fc=6,pc=7,hd=0,Of=1,zf=2,Ri=0,ud=1,dd=2,fd=3,dl=4,Bf=5,pd=6,md=7,Jl="attached",Hf="detached",gd=300,Is=301,ks=302,Xi=303,mc=304,Go=306,qt=1e3,Vn=1001,Uo=1002,Yt=1003,bd=1004,ur=1005,Lt=1006,Ro=1007,kn=1008,Wn=1009,vd=1010,xd=1011,Sr=1012,fl=1013,ji=1014,cn=1015,Ft=1016,pl=1017,ml=1018,qi=1020,_d=35902,yd=1021,Md=1022,ln=1023,wd=1024,Sd=1025,As=1026,Yi=1027,gl=1028,bl=1029,Td=1030,vl=1031,xl=1033,Co=33776,Po=33777,Do=33778,Lo=33779,gc=35840,bc=35841,vc=35842,xc=35843,_c=36196,yc=37492,Mc=37496,wc=37808,Sc=37809,Tc=37810,Ec=37811,Ac=37812,Rc=37813,Cc=37814,Pc=37815,Dc=37816,Lc=37817,Ic=37818,kc=37819,Nc=37820,Uc=37821,Io=36492,Fc=36494,Oc=36495,Ed=36283,zc=36284,Bc=36285,Hc=36286,Tr=2300,Er=2301,ta=2302,Ql=2400,eh=2401,th=2402,Gf=2500,Vf=0,Ad=1,Gc=2,Wf=3200,Rd=3201,_l=0,Xf=1,ai="",vt="srgb",zt="srgb-linear",Vo="linear",pt="srgb",rs=7680,nh=519,jf=512,qf=513,Yf=514,Cd=515,Zf=516,Kf=517,$f=518,Jf=519,Vc=35044,ih="300 es",ui=2e3,Fo=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sh=1234567;const vr=Math.PI/180,Ns=180/Math.PI;function _n(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[s&255]+Zt[s>>8&255]+Zt[s>>16&255]+Zt[s>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function yl(s,e){return(s%e+e)%e}function Qf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ep(s,e,t){return s!==e?(t-s)/(e-s):0}function xr(s,e,t){return(1-t)*s+t*e}function tp(s,e,t,n){return xr(s,e,1-Math.exp(-t*n))}function np(s,e=1){return e-Math.abs(yl(s,e*2)-e)}function ip(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function rp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function op(s,e){return s+Math.random()*(e-s)}function ap(s){return s*(.5-Math.random())}function cp(s){s!==void 0&&(sh=s);let e=sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lp(s){return s*vr}function hp(s){return s*Ns}function up(s){return(s&s-1)===0&&s!==0}function dp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pd={DEG2RAD:vr,RAD2DEG:Ns,generateUUID:_n,clamp:kt,euclideanModulo:yl,mapLinear:Qf,inverseLerp:ep,lerp:xr,damp:tp,pingpong:np,smoothstep:ip,smootherstep:sp,randInt:rp,randFloat:op,randFloatSpread:ap,seededRandom:cp,degToRad:lp,radToDeg:hp,isPowerOfTwo:up,ceilPowerOfTwo:dp,floorPowerOfTwo:fp,setQuaternionFromProperEuler:pp,normalize:mt,denormalize:Ln};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,i,r,o,a,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],_=i[1],v=i[4],x=i[7],E=i[2],T=i[5],S=i[8];return r[0]=o*b+a*_+c*E,r[3]=o*m+a*v+c*T,r[6]=o*p+a*x+c*S,r[1]=l*b+h*_+u*E,r[4]=l*m+h*v+u*T,r[7]=l*p+h*x+u*S,r[2]=d*b+f*_+g*E,r[5]=d*m+f*v+g*T,r[8]=d*p+f*x+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(a*n-i*o)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-a*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Je;function Dd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mp(){const s=Ar("canvas");return s.style.display="block",s}const rh={};function dr(s){s in rh||(rh[s]=!0,console.warn(s))}function gp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function bp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const it={enabled:!0,workingColorSpace:zt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?Vo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const oh=[.64,.33,.3,.6,.15,.06],ah=[.2126,.7152,.0722],ch=[.3127,.329],lh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[zt]:{primaries:oh,whitePoint:ch,transfer:Vo,toXYZ:lh,fromXYZ:hh,luminanceCoefficients:ah,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:oh,whitePoint:ch,transfer:pt,toXYZ:lh,fromXYZ:hh,luminanceCoefficients:ah,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}});let os;class xp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{os===void 0&&(os=Ar("canvas")),os.width=e.width,os.height=e.height;const n=os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _p=0;class Ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ia(i[o].image)):r.push(ia(i[o]))}else r=ia(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ia(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yp=0;class Ot extends Qi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Vn,i=Vn,r=Lt,o=kn,a=ln,c=Wn,l=Ot.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=_n(),this.name="",this.source=new Ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qt:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qt:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=gd;Ot.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,x=(f+1)/2,E=(p+1)/2,T=(h+d)/4,S=(u+b)/4,A=(g+m)/4;return v>x&&v>E?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=S/n):x>E?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=A/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=S/r,i=A/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mp extends Qi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ld(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wt extends Mp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Id extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wp extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],b=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*b,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),T=Math.atan2(E,p*_);m=Math.sin(m*T)/E,a=Math.sin(a*T)/E}const x=a*_;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+b*x,m===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sa=new I,uh=new Mn;class mn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($s),Xr.subVectors(this.max,$s),as.subVectors(e.a,$s),cs.subVectors(e.b,$s),ls.subVectors(e.c,$s),vi.subVectors(cs,as),xi.subVectors(ls,cs),Li.subVectors(as,ls);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Li.z,Li.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Li.z,0,-Li.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Li.y,Li.x,0];return!ra(t,as,cs,ls,Xr)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,as,cs,ls,Xr))?!1:(jr.crossVectors(vi,xi),t=[jr.x,jr.y,jr.z],ra(t,as,cs,ls,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new I,new I,new I,new I,new I,new I,new I,new I],En=new I,Wr=new mn,as=new I,cs=new I,ls=new I,vi=new I,xi=new I,Li=new I,$s=new I,Xr=new I,jr=new I,Ii=new I;function ra(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ii.fromArray(s,r);const a=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),c=e.dot(Ii),l=t.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Sp=new mn,Js=new I,oa=new I;class qn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(oa)),this.expandByPoint(Js.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new I,aa=new I,qr=new I,_i=new I,ca=new I,Yr=new I,la=new I;class Hs{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){aa.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(aa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(qr),a=_i.dot(this.direction),c=-_i.dot(qr),l=_i.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const b=1/h;u*=b,d*=b,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(aa).addScaledVector(qr,d),f}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,i,r){ca.subVectors(t,e),Yr.subVectors(n,e),la.crossVectors(ca,Yr);let o=this.direction.dot(la),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const c=a*this.direction.dot(Yr.crossVectors(_i,Yr));if(c<0)return null;const l=a*this.direction.dot(ca.cross(_i));if(l<0||c+l>o)return null;const h=-a*_i.dot(la);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,b,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,b,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,b=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-a*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=b+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=b-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,b=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,b=a*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,b=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tp,e,Ep)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),yi.crossVectors(n,dn),yi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),yi.crossVectors(n,dn)),yi.normalize(),Zr.crossVectors(dn,yi),i[0]=yi.x,i[4]=Zr.x,i[8]=dn.x,i[1]=yi.y,i[5]=Zr.y,i[9]=dn.y,i[2]=yi.z,i[6]=Zr.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],_=n[3],v=n[7],x=n[11],E=n[15],T=i[0],S=i[4],A=i[8],M=i[12],y=i[1],C=i[5],D=i[9],L=i[13],F=i[2],O=i[6],U=i[10],z=i[14],G=i[3],j=i[7],ne=i[11],ue=i[15];return r[0]=o*T+a*y+c*F+l*G,r[4]=o*S+a*C+c*O+l*j,r[8]=o*A+a*D+c*U+l*ne,r[12]=o*M+a*L+c*z+l*ue,r[1]=h*T+u*y+d*F+f*G,r[5]=h*S+u*C+d*O+f*j,r[9]=h*A+u*D+d*U+f*ne,r[13]=h*M+u*L+d*z+f*ue,r[2]=g*T+b*y+m*F+p*G,r[6]=g*S+b*C+m*O+p*j,r[10]=g*A+b*D+m*U+p*ne,r[14]=g*M+b*L+m*z+p*ue,r[3]=_*T+v*y+x*F+E*G,r[7]=_*S+v*C+x*O+E*j,r[11]=_*A+v*D+x*U+E*ne,r[15]=_*M+v*L+x*z+E*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+b*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],_=u*m*l-b*d*l+b*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*b*l-g*u*l+g*a*f-o*b*f-h*a*p+o*u*p,E=g*u*c-h*b*c-g*a*d+o*b*d+h*a*m-o*u*m,T=t*_+n*v+i*x+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return e[0]=_*S,e[1]=(b*d*r-u*m*r-b*i*f+n*m*f+u*i*p-n*d*p)*S,e[2]=(a*m*r-b*c*r+b*i*l-n*m*l-a*i*p+n*c*p)*S,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*S,e[4]=v*S,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*S,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*S,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*S,e[8]=x*S,e[9]=(g*u*r-h*b*r-g*n*f+t*b*f+h*n*p-t*u*p)*S,e[10]=(o*b*r-g*a*r+g*n*l-t*b*l-o*n*p+t*a*p)*S,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*S,e[12]=E*S,e[13]=(h*b*i-g*u*i+g*n*d-t*b*d-h*n*m+t*u*m)*S,e[14]=(g*a*i-o*b*i-g*n*c+t*b*c+o*n*m-t*a*m)*S,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,b=o*h,m=o*u,p=a*u,_=c*l,v=c*h,x=c*u,E=n.x,T=n.y,S=n.z;return i[0]=(1-(b+p))*E,i[1]=(f+x)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(d+p))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(g+v)*S,i[9]=(m-_)*S,i[10]=(1-(d+b))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=hs.set(i[0],i[1],i[2]).length();const o=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);const l=1/r,h=1/o,u=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ui){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===ui)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Fo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ui){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h;let g,b;if(a===ui)g=(o+r)*u,b=-2*u;else if(a===Fo)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hs=new I,An=new Xe,Tp=new I(0,0,0),Ep=new I(1,1,1),yi=new I,Zr=new I,dn=new I,dh=new Xe,fh=new Mn;class Fn{constructor(e=0,t=0,n=0,i=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ap=0;const ph=new I,us=new Mn,ei=new Xe,Kr=new I,Qs=new I,Rp=new I,Cp=new Mn,mh=new I(1,0,0),gh=new I(0,1,0),bh=new I(0,0,1),vh={type:"added"},Pp={type:"removed"},ds={type:"childadded",child:null},ha={type:"childremoved",child:null};class wt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new I,t=new Fn,n=new Mn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Je}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kr.copy(e):Kr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Qs,Kr,this.up):ei.lookAt(Kr,Qs,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),us.setFromRotationMatrix(ei),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vh),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pp),ha.child=e,this.dispatchEvent(ha),ha.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vh),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,Rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new I,ti=new I,ua=new I,ni=new I,fs=new I,ps=new I,xh=new I,da=new I,fa=new I,pa=new I,ma=new ht,ga=new ht,ba=new ht;class In{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rn.subVectors(e,t),i.cross(Rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Rn.subVectors(i,t),ti.subVectors(n,t),ua.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(ti),c=Rn.dot(ua),l=ti.dot(ti),h=ti.dot(ua),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return ma.setScalar(0),ga.setScalar(0),ba.setScalar(0),ma.fromBufferAttribute(e,t),ga.fromBufferAttribute(e,n),ba.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ma,r.x),o.addScaledVector(ga,r.y),o.addScaledVector(ba,r.z),o}static isFrontFacing(e,t,n,i){return Rn.subVectors(n,t),ti.subVectors(e,t),Rn.cross(ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Rn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return In.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;fs.subVectors(i,n),ps.subVectors(r,n),da.subVectors(e,n);const c=fs.dot(da),l=ps.dot(da);if(c<=0&&l<=0)return t.copy(n);fa.subVectors(e,i);const h=fs.dot(fa),u=ps.dot(fa);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(fs,o);pa.subVectors(e,r);const f=fs.dot(pa),g=ps.dot(pa);if(g>=0&&f<=g)return t.copy(r);const b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ps,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return xh.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(xh,a);const p=1/(m+b+d);return o=b*p,a=d*p,t.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function va(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=yl(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=va(o,r,e+1/3),this.g=va(o,r,e),this.b=va(o,r,e-1/3)}return it.toWorkingColorSpace(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=kd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return it.fromWorkingColorSpace(Kt.copy(this),e),Math.round(kt(Kt.r*255,0,255))*65536+Math.round(kt(Kt.g*255,0,255))*256+Math.round(kt(Kt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,i=Kt.g,r=Kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=vt){it.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,i=Kt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL($r);const n=xr(Mi.h,$r.h,t),i=xr(Mi.s,$r.s,t),r=xr(Mi.l,$r.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Ue;Ue.NAMES=kd;let Dp=0;class Nn extends Qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=_n(),this.name="",this.blending=Es,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sc&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ct extends Nn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ci=Lp();function Lp(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Ip(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=kt(s,-65504,65504),ci.floatView[0]=s;const e=ci.uint32View[0],t=e>>23&511;return ci.baseTable[t]+((e&8388607)>>ci.shiftTable[t])}function kp(s){const e=s>>10;return ci.uint32View[0]=ci.mantissaTable[ci.offsetTable[e]+(s&1023)]+ci.exponentTable[e],ci.floatView[0]}const Jr={toHalfFloat:Ip,fromHalfFloat:kp},It=new I,Qr=new se;class jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vc,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),e}}class Nd extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ud extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Np=0;const bn=new Xe,xa=new wt,ms=new I,fn=new mn,er=new mn,Vt=new I;class Gt extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dd(e)?Ud:Nd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(fn.min,er.min),fn.expandByPoint(Vt),Vt.addVectors(fn.max,er.max),fn.expandByPoint(Vt)):(fn.expandByPoint(er.min),fn.expandByPoint(er.max))}fn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Vt.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(e,l),Vt.add(ms)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new I,c[A]=new I;const l=new I,h=new I,u=new I,d=new se,f=new se,g=new se,b=new I,m=new I;function p(A,M,y){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[A].add(b),a[M].add(b),a[y].add(b),c[A].add(m),c[M].add(m),c[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,M=_.length;A<M;++A){const y=_[A],C=y.start,D=y.count;for(let L=C,F=C+D;L<F;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const v=new I,x=new I,E=new I,T=new I;function S(A){E.fromBufferAttribute(i,A),T.copy(E);const M=a[A];v.copy(M),v.sub(E.multiplyScalar(E.dot(M))).normalize(),x.crossVectors(T,M);const C=x.dot(c[A])<0?-1:1;o.setXYZW(A,v.x,v.y,v.z,C)}for(let A=0,M=_.length;A<M;++A){const y=_[A],C=y.start,D=y.count;for(let L=C,F=C+D;L<F;L+=3)S(e.getX(L+0)),S(e.getX(L+1)),S(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let b=0,m=c.length;b<m;b++){a.isInterleavedBufferAttribute?f=c[b]*a.data.stride+a.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _h=new Xe,ki=new Hs,eo=new qn,yh=new I,to=new I,no=new I,io=new I,_a=new I,so=new I,Mh=new I,ro=new I;class ae extends wt{constructor(e=new Gt,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){so.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(_a.fromBufferAttribute(u,e),o?so.addScaledVector(_a,h):so.addScaledVector(_a.sub(t),h))}t.add(so)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(eo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(eo,yh)===null||ki.origin.distanceToSquared(yh)>(e.far-e.near)**2))&&(_h.copy(r).invert(),ki.copy(e.ray).applyMatrix4(_h),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,E=v;x<E;x+=3){const T=a.getX(x),S=a.getX(x+1),A=a.getX(x+2);i=oo(this,p,e,n,l,h,u,T,S,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(a.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const _=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=oo(this,o,e,n,l,h,u,_,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,E=v;x<E;x+=3){const T=x,S=x+1,A=x+2;i=oo(this,p,e,n,l,h,u,T,S,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const _=m,v=m+1,x=m+2;i=oo(this,o,e,n,l,h,u,_,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Up(s,e,t,n,i,r,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===fi,a),c===null)return null;ro.copy(a),ro.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ro);return l<t.near||l>t.far?null:{distance:l,point:ro.clone(),object:s}}function oo(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,to),s.getVertexPosition(c,no),s.getVertexPosition(l,io);const h=Up(s,e,t,n,to,no,io,Mh);if(h){const u=new I;In.getBarycoord(Mh,to,no,io,u),i&&(h.uv=In.getInterpolatedAttribute(i,a,c,l,u,new se)),r&&(h.uv1=In.getInterpolatedAttribute(r,a,c,l,u,new se)),o&&(h.normal=In.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};In.getNormal(to,no,io,d.normal),h.face=d,h.barycoord=u}return h}class ve extends Gt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(b,m,p,_,v,x,E,T,S,A,M){const y=x/S,C=E/A,D=x/2,L=E/2,F=T/2,O=S+1,U=A+1;let z=0,G=0;const j=new I;for(let ne=0;ne<U;ne++){const ue=ne*C-L;for(let Ee=0;Ee<O;Ee++){const K=Ee*y-D;j[b]=K*_,j[m]=ue*v,j[p]=F,l.push(j.x,j.y,j.z),j[b]=0,j[m]=0,j[p]=T>0?1:-1,h.push(j.x,j.y,j.z),u.push(Ee/S),u.push(1-ne/A),z+=1}}for(let ne=0;ne<A;ne++)for(let ue=0;ue<S;ue++){const Ee=d+ue+O*ne,K=d+ue+O*(ne+1),N=d+(ue+1)+O*(ne+1),V=d+(ue+1)+O*ne;c.push(Ee,K,V),c.push(K,N,V),G+=6}a.addGroup(f,G,M),f+=G,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ve(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(s){const e={};for(let t=0;t<s.length;t++){const n=Us(s[t]);for(const i in n)e[i]=n[i]}return e}function Fp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const li={clone:Us,merge:tn};var Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends Nn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Od extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new I,wh=new se,Sh=new se;class sn extends Od{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,wh,Sh),t.subVectors(Sh,wh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gs=-90,bs=1;class Bp extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(gs,bs,e,t);i.layers=this.layers,this.add(i);const r=new sn(gs,bs,e,t);r.layers=this.layers,this.add(r);const o=new sn(gs,bs,e,t);o.layers=this.layers,this.add(o);const a=new sn(gs,bs,e,t);a.layers=this.layers,this.add(a);const c=new sn(gs,bs,e,t);c.layers=this.layers,this.add(c);const l=new sn(gs,bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zd extends Ot{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Is,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hp extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ve(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:Ut});r.uniforms.tEquirect.value=t;const o=new ae(i,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=Lt),new Bp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const ya=new I,Gp=new I,Vp=new Je;class Ti{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ya.subVectors(n,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vp.getNormalMatrix(e),i=this.coplanarPoint(ya).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new qn,ao=new I;class wl{constructor(e=new Ti,t=new Ti,n=new Ti,i=new Ti,r=new Ti,o=new Ti){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],b=i[10],m=i[11],p=i[12],_=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+_).normalize(),n[3].setComponents(c-o,d-h,m-g,x-_).normalize(),n[4].setComponents(c-a,d-u,m-b,x-v).normalize(),t===ui)n[5].setComponents(c+a,d+u,m+b,x+v).normalize();else if(t===Fo)n[5].setComponents(a,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ao.x=i.normal.x>0?e.max.x:e.min.x,ao.y=i.normal.y>0?e.max.y:e.min.y,ao.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Wp(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const b=u[f];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class es extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){const _=p*d-o;for(let v=0;v<l;v++){const x=v*u-r;g.push(x,-_,0),b.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const v=_+l*p,x=_+l*(p+1),E=_+1+l*(p+1),T=_+1+l*p;f.push(v,x,T),f.push(x,E,T)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(b,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
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
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sm=`#ifdef USE_IRIDESCENCE
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
#endif`,rm=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pm=`#define PI 3.141592653589793
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
} // validated`,mm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
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
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Vm=`struct PhysicalMaterial {
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
}`,Wm=`
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e0=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`#ifdef USE_MORPHTARGETS
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
#endif`,a0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f0=`#ifdef USE_NORMALMAP
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
#endif`,p0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,L0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
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
}`,$0=`#if DEPTH_PACKING == 3200
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
}`,J0=`#define DISTANCE
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
}`,Q0=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 diffuse;
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
}`,og=`#define LAMBERT
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
}`,ag=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,hg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,dg=`#define PHONG
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
}`,fg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,bg=`#define TOON
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
}`,vg=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,Mg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Xp,alphahash_pars_fragment:jp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:Zp,alphatest_pars_fragment:Kp,aomap_fragment:$p,aomap_pars_fragment:Jp,batching_pars_vertex:Qp,batching_vertex:em,begin_vertex:tm,beginnormal_vertex:nm,bsdfs:im,iridescence_fragment:sm,bumpmap_pars_fragment:rm,clipping_planes_fragment:om,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:cm,clipping_planes_vertex:lm,color_fragment:hm,color_pars_fragment:um,color_pars_vertex:dm,color_vertex:fm,common:pm,cube_uv_reflection_fragment:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:bm,displacementmap_vertex:vm,emissivemap_fragment:xm,emissivemap_pars_fragment:_m,colorspace_fragment:ym,colorspace_pars_fragment:Mm,envmap_fragment:wm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:Tm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Fm,envmap_vertex:Am,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Pm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Im,lights_lambert_fragment:km,lights_lambert_pars_fragment:Nm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:zm,lights_phong_fragment:Bm,lights_phong_pars_fragment:Hm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Vm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:jm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Km,map_fragment:$m,map_pars_fragment:Jm,map_particle_fragment:Qm,map_particle_pars_fragment:e0,metalnessmap_fragment:t0,metalnessmap_pars_fragment:n0,morphinstance_vertex:i0,morphcolor_vertex:s0,morphnormal_vertex:r0,morphtarget_pars_vertex:o0,morphtarget_vertex:a0,normal_fragment_begin:c0,normal_fragment_maps:l0,normal_pars_fragment:h0,normal_pars_vertex:u0,normal_vertex:d0,normalmap_pars_fragment:f0,clearcoat_normal_fragment_begin:p0,clearcoat_normal_fragment_maps:m0,clearcoat_pars_fragment:g0,iridescence_pars_fragment:b0,opaque_fragment:v0,packing:x0,premultiplied_alpha_fragment:_0,project_vertex:y0,dithering_fragment:M0,dithering_pars_fragment:w0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:A0,shadowmap_vertex:R0,shadowmask_pars_fragment:C0,skinbase_vertex:P0,skinning_pars_vertex:D0,skinning_vertex:L0,skinnormal_vertex:I0,specularmap_fragment:k0,specularmap_pars_fragment:N0,tonemapping_fragment:U0,tonemapping_pars_fragment:F0,transmission_fragment:O0,transmission_pars_fragment:z0,uv_pars_fragment:B0,uv_pars_vertex:H0,uv_vertex:G0,worldpos_vertex:V0,background_vert:W0,background_frag:X0,backgroundCube_vert:j0,backgroundCube_frag:q0,cube_vert:Y0,cube_frag:Z0,depth_vert:K0,depth_frag:$0,distanceRGBA_vert:J0,distanceRGBA_frag:Q0,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:og,meshlambert_frag:ag,meshmatcap_vert:cg,meshmatcap_frag:lg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:bg,points_vert:vg,points_frag:xg,shadow_vert:_g,shadow_frag:yg,sprite_vert:Mg,sprite_frag:wg},Re={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Hn={basic:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:tn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:tn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:tn([Re.points,Re.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:tn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:tn([Re.common,Re.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:tn([Re.sprite,Re.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:tn([Re.common,Re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:tn([Re.lights,Re.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Hn.physical={uniforms:tn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const co={r:0,b:0,g:0},Ui=new Fn,Sg=new Xe;function Tg(s,e,t,n,i,r,o){const a=new Ue(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function b(_){let v=!1;const x=g(_);x===null?p(a,c):x&&x.isColor&&(p(x,1),v=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===Go)?(h===void 0&&(h=new ae(new ve(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Us(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,T,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ui.copy(v.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(Ui)),h.material.toneMapped=it.getTransfer(x.colorSpace)!==pt,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ae(new es(2,2),new Dt({name:"BackgroundMaterial",uniforms:Us(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=it.getTransfer(x.colorSpace)!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(co,Fd(s)),n.buffers.color.setClear(co.r,co.g,co.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:b,addToRenderList:m}}function Eg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(y,C,D,L,F){let O=!1;const U=u(L,D,C);r!==U&&(r=U,l(r.object)),O=f(y,L,D,F),O&&g(y,L,D,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(y,C,D,L),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,C,D){const L=D.wireframe===!0;let F=n[y.id];F===void 0&&(F={},n[y.id]=F);let O=F[C.id];O===void 0&&(O={},F[C.id]=O);let U=O[L];return U===void 0&&(U=d(c()),O[L]=U),U}function d(y){const C=[],D=[],L=[];for(let F=0;F<t;F++)C[F]=0,D[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:L,object:y,attributes:{},index:null}}function f(y,C,D,L){const F=r.attributes,O=C.attributes;let U=0;const z=D.getAttributes();for(const G in z)if(z[G].location>=0){const ne=F[G];let ue=O[G];if(ue===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;U++}return r.attributesNum!==U||r.index!==L}function g(y,C,D,L){const F={},O=C.attributes;let U=0;const z=D.getAttributes();for(const G in z)if(z[G].location>=0){let ne=O[G];ne===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),F[G]=ue,U++}r.attributes=F,r.attributesNum=U,r.index=L}function b(){const y=r.newAttributes;for(let C=0,D=y.length;C<D;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const D=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;D[y]=1,L[y]===0&&(s.enableVertexAttribArray(y),L[y]=1),F[y]!==C&&(s.vertexAttribDivisor(y,C),F[y]=C)}function _(){const y=r.newAttributes,C=r.enabledAttributes;for(let D=0,L=C.length;D<L;D++)C[D]!==y[D]&&(s.disableVertexAttribArray(D),C[D]=0)}function v(y,C,D,L,F,O,U){U===!0?s.vertexAttribIPointer(y,C,D,F,O):s.vertexAttribPointer(y,C,D,L,F,O)}function x(y,C,D,L){b();const F=L.attributes,O=D.getAttributes(),U=C.defaultAttributeValues;for(const z in O){const G=O[z];if(G.location>=0){let j=F[z];if(j===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const ne=j.normalized,ue=j.itemSize,Ee=e.get(j);if(Ee===void 0)continue;const K=Ee.buffer,N=Ee.type,V=Ee.bytesPerElement,q=N===s.INT||N===s.UNSIGNED_INT||j.gpuType===fl;if(j.isInterleavedBufferAttribute){const Q=j.data,de=Q.stride,be=j.offset;if(Q.isInstancedInterleavedBuffer){for(let ge=0;ge<G.locationSize;ge++)p(G.location+ge,Q.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ge=0;ge<G.locationSize;ge++)m(G.location+ge);s.bindBuffer(s.ARRAY_BUFFER,K);for(let ge=0;ge<G.locationSize;ge++)v(G.location+ge,ue/G.locationSize,N,ne,de*V,(be+ue/G.locationSize*ge)*V,q)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<G.locationSize;Q++)p(G.location+Q,j.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<G.locationSize;Q++)m(G.location+Q);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Q=0;Q<G.locationSize;Q++)v(G.location+Q,ue/G.locationSize,N,ne,ue*V,ue/G.locationSize*Q*V,q)}}else if(U!==void 0){const ne=U[z];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(G.location,ne);break;case 3:s.vertexAttrib3fv(G.location,ne);break;case 4:s.vertexAttrib4fv(G.location,ne);break;default:s.vertexAttrib1fv(G.location,ne)}}}}_()}function E(){A();for(const y in n){const C=n[y];for(const D in C){const L=C[D];for(const F in L)h(L[F].object),delete L[F];delete C[D]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const D in C){const L=C[D];for(const F in L)h(L[F].object),delete L[F];delete C[D]}delete n[y.id]}function S(y){for(const C in n){const D=n[C];if(D[y.id]===void 0)continue;const L=D[y.id];for(const F in L)h(L[F].object),delete L[F];delete D[y.id]}}function A(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function Ag(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*d[b];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Rg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==ln&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const A=S===Ft&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Wn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==cn&&!A)}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:E,maxSamples:T}}function Cg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ti,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const _=r?0:n,v=_*4;let x=p.clippingState||null;c.value=x,x=h(g,d,v,f);for(let E=0;E!==v;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const b=u!==null?u.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const p=f+b*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==b;++v,x+=4)o.copy(u[v]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Pg(s){let e=new WeakMap;function t(o,a){return a===Xi?o.mapping=Is:a===mc&&(o.mapping=ks),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xi||a===mc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Hp(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Wo extends Od{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,Th=[.125,.215,.35,.446,.526,.582],Hi=20,Ma=new Wo,Eh=new Ue;let wa=null,Sa=0,Ta=0,Ea=!1;const Bi=(1+Math.sqrt(5))/2,vs=1/Bi,Ah=[new I(-Bi,vs,0),new I(Bi,vs,0),new I(-vs,0,Bi),new I(vs,0,Bi),new I(0,Bi,-vs),new I(0,Bi,vs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Zi{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){wa=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Sa,Ta),this._renderer.xr.enabled=Ea,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Ft,format:ln,colorSpace:zt,depthBuffer:!1},i=Rh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dg(r)),this._blurMaterial=Lg(r,e,t)}return i}_compileMaterial(e){const t=new ae(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,i){const a=new sn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Eh),h.toneMapping=Ri,h.autoClear=!1;const f=new Ct({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new ae(new ve,f);let b=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(Eh),b=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;lo(i,_*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Is||e.mapping===ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;lo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ah[(i-r-1)%Ah.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ae(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const p=[];let _=0;for(let S=0;S<Hi;++S){const A=S/b,M=Math.exp(-A*A/2);p.push(M),S===0?_+=M:S<m&&(_+=2*M)}for(let S=0;S<p.length;S++)p[S]=p[S]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[i],E=3*x*(i>v-ws?i-v+ws:0),T=4*(this._cubeSize-x);lo(t,E,T,3*x,2*x),c.setRenderTarget(t),c.render(u,Ma)}}function Dg(s){const e=[],t=[],n=[];let i=s;const r=s-ws+1+Th.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-ws?c=Th[o-s+ws-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,b=3,m=2,p=1,_=new Float32Array(b*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const S=T%3*2/3-1,A=T>2?0:-1,M=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];_.set(M,b*g*T),v.set(d,m*g*T);const y=[T,T,T,T,T,T];x.set(y,p*g*T)}const E=new Gt;E.setAttribute("position",new jt(_,b)),E.setAttribute("uv",new jt(v,m)),E.setAttribute("faceIndex",new jt(x,p)),e.push(E),i>ws&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rh(s,e,t){const n=new Wt(s,e,t);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Lg(s,e,t){const n=new Float32Array(Hi),i=new I(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Ch(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Ph(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function Ig(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Xi||c===mc,h=c===Is||c===ks;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Zi(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Zi(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&dr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ng(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let b=0;if(f!==null){const _=f.array;b=f.version;for(let v=0,x=_.length;v<x;v+=3){const E=_[v+0],T=_[v+1],S=_[v+2];d.push(E,T,T,S,S,E)}}else if(g!==void 0){const _=g.array;b=g.version;for(let v=0,x=_.length/3-1;v<x;v+=3){const E=v+0,T=v+1,S=v+2;d.push(E,T,T,S,S,E)}}else return;const m=new(Dd(d)?Ud:Nd)(d,1);m.version=b;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ug(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*b[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Og(s,e,t){const n=new WeakMap,i=new ht;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),b===!0&&(x=2),m===!0&&(x=3);let E=a.attributes.position.count*x,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const S=new Float32Array(E*T*4*u),A=new Id(S,E,T,u);A.type=cn,A.needsUpdate=!0;const M=x*4;for(let C=0;C<u;C++){const D=p[C],L=_[C],F=v[C],O=E*T*4*C;for(let U=0;U<D.count;U++){const z=U*M;g===!0&&(i.fromBufferAttribute(D,U),S[O+z+0]=i.x,S[O+z+1]=i.y,S[O+z+2]=i.z,S[O+z+3]=0),b===!0&&(i.fromBufferAttribute(L,U),S[O+z+4]=i.x,S[O+z+5]=i.y,S[O+z+6]=i.z,S[O+z+7]=0),m===!0&&(i.fromBufferAttribute(F,U),S[O+z+8]=i.x,S[O+z+9]=i.y,S[O+z+10]=i.z,S[O+z+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new se(E,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const b=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",b),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function zg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Tl extends Ot{constructor(e,t,n,i,r,o,a,c,l,h=As){if(h!==As&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===As&&(n=ji),n===void 0&&h===Yi&&(n=qi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=c!==void 0?c:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hd=new Ot,Dh=new Tl(1,1),Gd=new Id,Vd=new wp,Wd=new zd,Lh=[],Ih=[],kh=new Float32Array(16),Nh=new Float32Array(9),Uh=new Float32Array(4);function Gs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Lh[i];if(r===void 0&&(r=new Float32Array(i),Lh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Xo(s,e){let t=Ih[e];t===void 0&&(t=new Int32Array(e),Ih[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Bg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function Gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function Vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function Wg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,n))return;Uh.set(n),s.uniformMatrix2fv(this.addr,!1,Uh),Ht(t,n)}}function Xg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,n))return;Nh.set(n),s.uniformMatrix3fv(this.addr,!1,Nh),Ht(t,n)}}function jg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,n))return;kh.set(n),s.uniformMatrix4fv(this.addr,!1,kh),Ht(t,n)}}function qg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Yg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function Zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function Kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function $g(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function Qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function eb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function tb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Dh.compareFunction=Cd,r=Dh):r=Hd,t.setTexture2D(e||r,i)}function nb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vd,i)}function ib(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wd,i)}function sb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gd,i)}function rb(s){switch(s){case 5126:return Bg;case 35664:return Hg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return jg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return $g;case 36294:return Jg;case 36295:return Qg;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return sb}}function ob(s,e){s.uniform1fv(this.addr,e)}function ab(s,e){const t=Gs(e,this.size,2);s.uniform2fv(this.addr,t)}function cb(s,e){const t=Gs(e,this.size,3);s.uniform3fv(this.addr,t)}function lb(s,e){const t=Gs(e,this.size,4);s.uniform4fv(this.addr,t)}function hb(s,e){const t=Gs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ub(s,e){const t=Gs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function db(s,e){const t=Gs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function fb(s,e){s.uniform1iv(this.addr,e)}function pb(s,e){s.uniform2iv(this.addr,e)}function mb(s,e){s.uniform3iv(this.addr,e)}function gb(s,e){s.uniform4iv(this.addr,e)}function bb(s,e){s.uniform1uiv(this.addr,e)}function vb(s,e){s.uniform2uiv(this.addr,e)}function xb(s,e){s.uniform3uiv(this.addr,e)}function _b(s,e){s.uniform4uiv(this.addr,e)}function yb(s,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Hd,r[o])}function Mb(s,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Vd,r[o])}function wb(s,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Wd,r[o])}function Sb(s,e,t){const n=this.cache,i=e.length,r=Xo(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Gd,r[o])}function Tb(s){switch(s){case 5126:return ob;case 35664:return ab;case 35665:return cb;case 35666:return lb;case 35674:return hb;case 35675:return ub;case 35676:return db;case 5124:case 35670:return fb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return bb;case 36294:return vb;case 36295:return xb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Sb}}class Eb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=rb(t.type)}}class Ab{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tb(t.type)}}class Rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Aa=/(\w+)(\])?(\[|\.)?/g;function Fh(s,e){s.seq.push(e),s.map[e.id]=e}function Cb(s,e,t){const n=s.name,i=n.length;for(Aa.lastIndex=0;;){const r=Aa.exec(n),o=Aa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Fh(t,l===void 0?new Eb(a,s,e):new Ab(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Rb(a),Fh(t,u)),t=u}}}class ko{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Cb(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Oh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Pb=37297;let Db=0;function Lb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const zh=new Je;function Ib(s){it._getMatrix(zh,it.workingColorSpace,s);const e=`mat3( ${zh.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case Vo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Bh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Lb(s.getShaderSource(e),o)}else return i}function kb(s,e){const t=Ib(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nb(s,e){let t;switch(e){case ud:t="Linear";break;case dd:t="Reinhard";break;case fd:t="Cineon";break;case dl:t="ACESFilmic";break;case pd:t="AgX";break;case md:t="Neutral";break;case Bf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ho=new I;function Ub(){it.getLuminanceCoefficients(ho);const s=ho.x.toFixed(4),e=ho.y.toFixed(4),t=ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Ob(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function fr(s){return s!==""}function Hh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(s){return s.replace(Bb,Gb)}const Hb=new Map;function Gb(s,e){let t=et[e];if(t===void 0){const n=Hb.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wc(t)}const Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(s){return s.replace(Vb,Wb)}function Wb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function jb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case ks:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function Yb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case Of:e="ENVMAP_BLENDING_MIX";break;case zf:e="ENVMAP_BLENDING_ADD";break}return e}function Zb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Kb(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Xb(t),l=jb(t),h=qb(t),u=Yb(t),d=Zb(t),f=Fb(t),g=Ob(r),b=i.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(m=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?et.tonemapping_pars_fragment:"",t.toneMapping!==Ri?Nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,kb("linearToOutputTexel",t.outputColorSpace),Ub(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=Wc(o),o=Hh(o,t),o=Gh(o,t),a=Wc(a),a=Hh(a,t),a=Gh(a,t),o=Vh(o),a=Vh(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=_+m+o,x=_+p+a,E=Oh(i,i.VERTEX_SHADER,v),T=Oh(i,i.FRAGMENT_SHADER,x);i.attachShader(b,E),i.attachShader(b,T),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function S(C){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(b).trim(),L=i.getShaderInfoLog(E).trim(),F=i.getShaderInfoLog(T).trim();let O=!0,U=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,E,T);else{const z=Bh(i,E,"vertex"),G=Bh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+z+`
`+G)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(L===""||F==="")&&(U=!1);U&&(C.diagnostics={runnable:O,programLog:D,vertexShader:{log:L,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(E),i.deleteShader(T),A=new ko(i,b),M=zb(i,b)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let M;this.getAttributes=function(){return M===void 0&&S(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(b,Pb)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Db++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=T,this}let $b=0;class Jb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Qb(e),t.set(e,n)),n}}class Qb{constructor(e){this.id=$b++,this.code=e,this.usedTimes=0}}function ev(s,e,t,n,i,r,o){const a=new Ml,c=new Jb,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,C,D,L){const F=D.fog,O=L.geometry,U=M.isMeshStandardMaterial?D.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||U),G=z&&z.mapping===Go?z.image.height:null,j=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ue=ne!==void 0?ne.length:0;let Ee=0;O.morphAttributes.position!==void 0&&(Ee=1),O.morphAttributes.normal!==void 0&&(Ee=2),O.morphAttributes.color!==void 0&&(Ee=3);let K,N,V,q;if(j){const ie=Hn[j];K=ie.vertexShader,N=ie.fragmentShader}else K=M.vertexShader,N=M.fragmentShader,c.update(M),V=c.getVertexShaderID(M),q=c.getFragmentShaderID(M);const Q=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),be=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,ze=!!M.map,$=!!M.matcap,oe=!!z,k=!!M.aoMap,Ae=!!M.lightMap,le=!!M.bumpMap,ye=!!M.normalMap,pe=!!M.displacementMap,Fe=!!M.emissiveMap,Ce=!!M.metalnessMap,P=!!M.roughnessMap,w=M.anisotropy>0,H=M.clearcoat>0,ee=M.dispersion>0,ce=M.iridescence>0,te=M.sheen>0,Le=M.transmission>0,xe=w&&!!M.anisotropyMap,Se=H&&!!M.clearcoatMap,Ye=H&&!!M.clearcoatNormalMap,fe=H&&!!M.clearcoatRoughnessMap,Ne=ce&&!!M.iridescenceMap,We=ce&&!!M.iridescenceThicknessMap,je=te&&!!M.sheenColorMap,Ie=te&&!!M.sheenRoughnessMap,tt=!!M.specularMap,Ze=!!M.specularColorMap,at=!!M.specularIntensityMap,B=Le&&!!M.transmissionMap,Me=Le&&!!M.thicknessMap,J=!!M.gradientMap,he=!!M.alphaMap,De=M.alphaTest>0,Pe=!!M.alphaHash,me=!!M.extensions;let we=Ri;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(we=s.toneMapping);const Oe={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:K,fragmentShader:N,defines:M.defines,customVertexShaderID:V,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:be,instancingColor:be&&L.instanceColor!==null,instancingMorph:be&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:zt,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:$,envMap:oe,envMapMode:oe&&z.mapping,envMapCubeUVHeight:G,aoMap:k,lightMap:Ae,bumpMap:le,normalMap:ye,displacementMap:d&&pe,emissiveMap:Fe,normalMapObjectSpace:ye&&M.normalMapType===Xf,normalMapTangentSpace:ye&&M.normalMapType===_l,metalnessMap:Ce,roughnessMap:P,anisotropy:w,anisotropyMap:xe,clearcoat:H,clearcoatMap:Se,clearcoatNormalMap:Ye,clearcoatRoughnessMap:fe,dispersion:ee,iridescence:ce,iridescenceMap:Ne,iridescenceThicknessMap:We,sheen:te,sheenColorMap:je,sheenRoughnessMap:Ie,specularMap:tt,specularColorMap:Ze,specularIntensityMap:at,transmission:Le,transmissionMap:B,thicknessMap:Me,gradientMap:J,opaque:M.transparent===!1&&M.blending===Es&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:De,alphaHash:Pe,combine:M.combine,mapUv:ze&&b(M.map.channel),aoMapUv:k&&b(M.aoMap.channel),lightMapUv:Ae&&b(M.lightMap.channel),bumpMapUv:le&&b(M.bumpMap.channel),normalMapUv:ye&&b(M.normalMap.channel),displacementMapUv:pe&&b(M.displacementMap.channel),emissiveMapUv:Fe&&b(M.emissiveMap.channel),metalnessMapUv:Ce&&b(M.metalnessMap.channel),roughnessMapUv:P&&b(M.roughnessMap.channel),anisotropyMapUv:xe&&b(M.anisotropyMap.channel),clearcoatMapUv:Se&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:We&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:je&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&b(M.sheenRoughnessMap.channel),specularMapUv:tt&&b(M.specularMap.channel),specularColorMapUv:Ze&&b(M.specularColorMap.channel),specularIntensityMapUv:at&&b(M.specularIntensityMap.channel),transmissionMapUv:B&&b(M.transmissionMap.channel),thicknessMapUv:Me&&b(M.thicknessMap.channel),alphaMapUv:he&&b(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ye||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(ze||he),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:de,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===pt,decodeVideoTextureEmissive:Fe&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tt,flipSided:M.side===Xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:me&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&M.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(_(y,M),v(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function _(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const y=g[M.type];let C;if(y){const D=Hn[y];C=li.clone(D.uniforms)}else C=M.uniforms;return C}function E(M,y){let C;for(let D=0,L=h.length;D<L;D++){const F=h[D];if(F.cacheKey===y){C=F,++C.usedTimes;break}}return C===void 0&&(C=new Kb(s,y,M,r),h.push(C)),C}function T(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function S(M){c.remove(M)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:T,releaseShaderCache:S,programs:h,dispose:A}}function tv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function nv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function jh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,b,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function a(u,d,f,g,b,m){const p=o(u,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,b,m){const p=o(u,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||nv),n.length>1&&n.sort(d||Xh),i.length>1&&i.sort(d||Xh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function iv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new jh,s.set(n,[o])):i>=r.length?(o=new jh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function sv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ue};break;case"SpotLight":t={position:new I,direction:new I,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function rv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ov=0;function av(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cv(s){const e=new sv,t=rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,r=new Xe,o=new Xe;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,_=0,v=0,x=0,E=0,T=0,S=0;l.sort(av);for(let M=0,y=l.length;M<y;M++){const C=l[M],D=C.color,L=C.intensity,F=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=D.r*L,u+=D.g*L,d+=D.b*L;else if(C.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(C.sh.coefficients[U],L);S++}else if(C.isDirectionalLight){const U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,G=t.get(C);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=C.shadow.matrix,_++}n.directional[f]=U,f++}else if(C.isSpotLight){const U=e.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(D).multiplyScalar(L),U.distance=F,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,n.spot[b]=U;const z=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,z.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[b]=z.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,n.spotShadow[b]=G,n.spotShadowMap[b]=O,x++}b++}else if(C.isRectAreaLight){const U=e.get(C);U.color.copy(D).multiplyScalar(L),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=U,m++}else if(C.isPointLight){const U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){const z=C.shadow,G=t.get(C);G.shadowIntensity=z.intensity,G.shadowBias=z.bias,G.shadowNormalBias=z.normalBias,G.shadowRadius=z.radius,G.shadowMapSize=z.mapSize,G.shadowCameraNear=z.camera.near,G.shadowCameraFar=z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=U,g++}else if(C.isHemisphereLight){const U=e.get(C);U.skyColor.copy(C.color).multiplyScalar(L),U.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[p]=U,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==b||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==_||A.numPointShadows!==v||A.numSpotShadows!==x||A.numSpotMaps!==E||A.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,A.directionalLength=f,A.pointLength=g,A.spotLength=b,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=_,A.numPointShadows=v,A.numSpotShadows=x,A.numSpotMaps=E,A.numLightProbes=S,n.version=ov++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0;const m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const v=l[p];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[b];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:a,setupView:c,state:n}}function qh(s){const e=new cv(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function lv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new qh(s),e.set(i,[a])):r>=o.length?(a=new qh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Xd extends Nn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hv extends Nn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
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
}`;function fv(s,e,t){let n=new wl;const i=new se,r=new se,o=new ht,a=new Xd({depthPacking:Rd}),c=new hv,l={},h=t.maxTextureSize,u={[fi]:Xt,[Xt]:fi,[Tt]:Tt},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:uv,fragmentShader:dv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let p=this.type;this.render=function(T,S,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ut),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const L=p!==ri&&this.type===ri,F=p===ri&&this.type!==ri;for(let O=0,U=T.length;O<U;O++){const z=T[O],G=z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const j=G.getFrameExtents();if(i.multiply(j),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,G.mapSize.y=r.y)),G.map===null||L===!0||F===!0){const ue=this.type!==ri?{minFilter:Yt,magFilter:Yt}:{};G.map!==null&&G.map.dispose(),G.map=new Wt(i.x,i.y,ue),G.map.texture.name=z.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ne=G.getViewportCount();for(let ue=0;ue<ne;ue++){const Ee=G.getViewport(ue);o.set(r.x*Ee.x,r.y*Ee.y,r.x*Ee.z,r.y*Ee.w),D.viewport(o),G.updateMatrices(z,ue),n=G.getFrustum(),x(S,A,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===ri&&_(G,A),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,C)};function _(T,S){const A=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wt(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(S,null,A,d,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(S,null,A,f,b,null)}function v(T,S,A,M){let y=null;const C=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=A.isPointLight===!0?c:a,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const D=y.uuid,L=S.uuid;let F=l[D];F===void 0&&(F={},l[D]=F);let O=F[L];O===void 0&&(O=y.clone(),F[L]=O,S.addEventListener("dispose",E)),y=O}if(y.visible=S.visible,y.wireframe=S.wireframe,M===ri?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:u[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=s.properties.get(y);D.light=A}return y}function x(T,S,A,M,y){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ri)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const L=e.update(T),F=T.material;if(Array.isArray(F)){const O=L.groups;for(let U=0,z=O.length;U<z;U++){const G=O[U],j=F[G.materialIndex];if(j&&j.visible){const ne=v(T,j,M,y);T.onBeforeShadow(s,T,S,A,L,ne,G),s.renderBufferDirect(A,null,L,ne,T,G),T.onAfterShadow(s,T,S,A,L,ne,G)}}}else if(F.visible){const O=v(T,F,M,y);T.onBeforeShadow(s,T,S,A,L,O,null),s.renderBufferDirect(A,null,L,O,T,null),T.onAfterShadow(s,T,S,A,L,O,null)}}const D=T.children;for(let L=0,F=D.length;L<F;L++)x(D[L],S,A,M,y)}function E(T){T.target.removeEventListener("dispose",E);for(const A in l){const M=l[A],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const pv={[cc]:lc,[hc]:fc,[uc]:pc,[Ls]:dc,[lc]:cc,[fc]:hc,[pc]:uc,[dc]:Ls};function mv(s,e){function t(){let B=!1;const Me=new ht;let J=null;const he=new ht(0,0,0,0);return{setMask:function(De){J!==De&&!B&&(s.colorMask(De,De,De,De),J=De)},setLocked:function(De){B=De},setClear:function(De,Pe,me,we,Oe){Oe===!0&&(De*=we,Pe*=we,me*=we),Me.set(De,Pe,me,we),he.equals(Me)===!1&&(s.clearColor(De,Pe,me,we),he.copy(Me))},reset:function(){B=!1,J=null,he.set(-1,0,0,0)}}}function n(){let B=!1,Me=!1,J=null,he=null,De=null;return{setReversed:function(Pe){if(Me!==Pe){const me=e.get("EXT_clip_control");Me?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT);const we=De;De=null,this.setClear(we)}Me=Pe},getReversed:function(){return Me},setTest:function(Pe){Pe?Q(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(Pe){J!==Pe&&!B&&(s.depthMask(Pe),J=Pe)},setFunc:function(Pe){if(Me&&(Pe=pv[Pe]),he!==Pe){switch(Pe){case cc:s.depthFunc(s.NEVER);break;case lc:s.depthFunc(s.ALWAYS);break;case hc:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case uc:s.depthFunc(s.EQUAL);break;case dc:s.depthFunc(s.GEQUAL);break;case fc:s.depthFunc(s.GREATER);break;case pc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Pe}},setLocked:function(Pe){B=Pe},setClear:function(Pe){De!==Pe&&(Me&&(Pe=1-Pe),s.clearDepth(Pe),De=Pe)},reset:function(){B=!1,J=null,he=null,De=null,Me=!1}}}function i(){let B=!1,Me=null,J=null,he=null,De=null,Pe=null,me=null,we=null,Oe=null;return{setTest:function(ie){B||(ie?Q(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(ie){Me!==ie&&!B&&(s.stencilMask(ie),Me=ie)},setFunc:function(ie,Qe,Pt){(J!==ie||he!==Qe||De!==Pt)&&(s.stencilFunc(ie,Qe,Pt),J=ie,he=Qe,De=Pt)},setOp:function(ie,Qe,Pt){(Pe!==ie||me!==Qe||we!==Pt)&&(s.stencilOp(ie,Qe,Pt),Pe=ie,me=Qe,we=Pt)},setLocked:function(ie){B=ie},setClear:function(ie){Oe!==ie&&(s.clearStencil(ie),Oe=ie)},reset:function(){B=!1,Me=null,J=null,he=null,De=null,Pe=null,me=null,we=null,Oe=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,_=null,v=null,x=null,E=null,T=null,S=new Ue(0,0,0),A=0,M=!1,y=null,C=null,D=null,L=null,F=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=z>=1):G.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=z>=2);let j=null,ne={};const ue=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),K=new ht().fromArray(ue),N=new ht().fromArray(Ee);function V(B,Me,J,he){const De=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(B,Pe),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let me=0;me<J;me++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Me+me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Pe}const q={};q[s.TEXTURE_2D]=V(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=V(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=V(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=V(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(Ls),le(!1),ye(Zl),Q(s.CULL_FACE),k(Ut);function Q(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function de(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function be(B,Me){return u[B]!==Me?(s.bindFramebuffer(B,Me),u[B]=Me,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Me),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function ge(B,Me){let J=f,he=!1;if(B){J=d.get(Me),J===void 0&&(J=[],d.set(Me,J));const De=B.textures;if(J.length!==De.length||J[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,me=De.length;Pe<me;Pe++)J[Pe]=s.COLOR_ATTACHMENT0+Pe;J.length=De.length,he=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,he=!0);he&&s.drawBuffers(J)}function ze(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const $={[Dn]:s.FUNC_ADD,[Sf]:s.FUNC_SUBTRACT,[Tf]:s.FUNC_REVERSE_SUBTRACT};$[Ef]=s.MIN,$[Af]=s.MAX;const oe={[hr]:s.ZERO,[Rf]:s.ONE,[Cf]:s.SRC_COLOR,[sc]:s.SRC_ALPHA,[If]:s.SRC_ALPHA_SATURATE,[ac]:s.DST_COLOR,[oc]:s.DST_ALPHA,[Pf]:s.ONE_MINUS_SRC_COLOR,[rc]:s.ONE_MINUS_SRC_ALPHA,[Lf]:s.ONE_MINUS_DST_COLOR,[Df]:s.ONE_MINUS_DST_ALPHA,[kf]:s.CONSTANT_COLOR,[Nf]:s.ONE_MINUS_CONSTANT_COLOR,[Uf]:s.CONSTANT_ALPHA,[Ff]:s.ONE_MINUS_CONSTANT_ALPHA};function k(B,Me,J,he,De,Pe,me,we,Oe,ie){if(B===Ut){b===!0&&(de(s.BLEND),b=!1);return}if(b===!1&&(Q(s.BLEND),b=!0),B!==ld){if(B!==m||ie!==M){if((p!==Dn||x!==Dn)&&(s.blendEquation(s.FUNC_ADD),p=Dn,x=Dn),ie)switch(B){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ic:s.blendFunc(s.ONE,s.ONE);break;case Kl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $l:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ic:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Kl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $l:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,v=null,E=null,T=null,S.set(0,0,0),A=0,m=B,M=ie}return}De=De||Me,Pe=Pe||J,me=me||he,(Me!==p||De!==x)&&(s.blendEquationSeparate($[Me],$[De]),p=Me,x=De),(J!==_||he!==v||Pe!==E||me!==T)&&(s.blendFuncSeparate(oe[J],oe[he],oe[Pe],oe[me]),_=J,v=he,E=Pe,T=me),(we.equals(S)===!1||Oe!==A)&&(s.blendColor(we.r,we.g,we.b,Oe),S.copy(we),A=Oe),m=B,M=!1}function Ae(B,Me){B.side===Tt?de(s.CULL_FACE):Q(s.CULL_FACE);let J=B.side===Xt;Me&&(J=!J),le(J),B.blending===Es&&B.transparent===!1?k(Ut):k(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const he=B.stencilWrite;a.setTest(he),he&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(B){y!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),y=B)}function ye(B){B!==Mf?(Q(s.CULL_FACE),B!==C&&(B===Zl?s.cullFace(s.BACK):B===wf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),C=B}function pe(B){B!==D&&(U&&s.lineWidth(B),D=B)}function Fe(B,Me,J){B?(Q(s.POLYGON_OFFSET_FILL),(L!==Me||F!==J)&&(s.polygonOffset(Me,J),L=Me,F=J)):de(s.POLYGON_OFFSET_FILL)}function Ce(B){B?Q(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function P(B){B===void 0&&(B=s.TEXTURE0+O-1),j!==B&&(s.activeTexture(B),j=B)}function w(B,Me,J){J===void 0&&(j===null?J=s.TEXTURE0+O-1:J=j);let he=ne[J];he===void 0&&(he={type:void 0,texture:void 0},ne[J]=he),(he.type!==B||he.texture!==Me)&&(j!==J&&(s.activeTexture(J),j=J),s.bindTexture(B,Me||q[B]),he.type=B,he.texture=Me)}function H(){const B=ne[j];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function je(B){K.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),K.copy(B))}function Ie(B){N.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),N.copy(B))}function tt(B,Me){let J=l.get(Me);J===void 0&&(J=new WeakMap,l.set(Me,J));let he=J.get(B);he===void 0&&(he=s.getUniformBlockIndex(Me,B.name),J.set(B,he))}function Ze(B,Me){const he=l.get(Me).get(B);c.get(Me)!==he&&(s.uniformBlockBinding(Me,he,B.__bindingPointIndex),c.set(Me,he))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},j=null,ne={},u={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,_=null,v=null,x=null,E=null,T=null,S=new Ue(0,0,0),A=0,M=!1,y=null,C=null,D=null,L=null,F=null,K.set(0,0,s.canvas.width,s.canvas.height),N.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:de,bindFramebuffer:be,drawBuffers:ge,useProgram:ze,setBlending:k,setMaterial:Ae,setFlipSided:le,setCullFace:ye,setLineWidth:pe,setPolygonOffset:Fe,setScissorTest:Ce,activeTexture:P,bindTexture:w,unbindTexture:H,compressedTexImage2D:ee,compressedTexImage3D:ce,texImage2D:Ne,texImage3D:We,updateUBOMapping:tt,uniformBlockBinding:Ze,texStorage2D:Ye,texStorage3D:fe,texSubImage2D:te,texSubImage3D:Le,compressedTexSubImage2D:xe,compressedTexSubImage3D:Se,scissor:je,viewport:Ie,reset:at}}function Yh(s,e,t,n){const i=gv(n);switch(t){case yd:return s*e;case wd:return s*e;case Sd:return s*e*2;case gl:return s*e/i.components*i.byteLength;case bl:return s*e/i.components*i.byteLength;case Td:return s*e*2/i.components*i.byteLength;case vl:return s*e*2/i.components*i.byteLength;case Md:return s*e*3/i.components*i.byteLength;case ln:return s*e*4/i.components*i.byteLength;case xl:return s*e*4/i.components*i.byteLength;case Co:case Po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Do:case Lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bc:case xc:return Math.max(s,16)*Math.max(e,8)/4;case gc:case vc:return Math.max(s,8)*Math.max(e,8)/2;case _c:case yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Io:case Fc:case Oc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ed:case zc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Bc:case Hc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gv(s){switch(s){case Wn:case vd:return{byteLength:1,components:1};case Sr:case xd:case Ft:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case ji:case fl:case cn:return{byteLength:4,components:1};case _d:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function bv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new se,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return f?new OffscreenCanvas(P,w):Ar("canvas")}function b(P,w,H){let ee=1;const ce=Ce(P);if((ce.width>H||ce.height>H)&&(ee=H/Math.max(ce.width,ce.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(ee*ce.width),Le=Math.floor(ee*ce.height);u===void 0&&(u=g(te,Le));const xe=w?g(te,Le):u;return xe.width=te,xe.height=Le,xe.getContext("2d").drawImage(P,0,0,te,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+te+"x"+Le+")."),xe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(P,w,H,ee,ce=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=w;if(w===s.RED&&(H===s.FLOAT&&(te=s.R32F),H===s.HALF_FLOAT&&(te=s.R16F),H===s.UNSIGNED_BYTE&&(te=s.R8)),w===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(te=s.R8UI),H===s.UNSIGNED_SHORT&&(te=s.R16UI),H===s.UNSIGNED_INT&&(te=s.R32UI),H===s.BYTE&&(te=s.R8I),H===s.SHORT&&(te=s.R16I),H===s.INT&&(te=s.R32I)),w===s.RG&&(H===s.FLOAT&&(te=s.RG32F),H===s.HALF_FLOAT&&(te=s.RG16F),H===s.UNSIGNED_BYTE&&(te=s.RG8)),w===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(te=s.RG8UI),H===s.UNSIGNED_SHORT&&(te=s.RG16UI),H===s.UNSIGNED_INT&&(te=s.RG32UI),H===s.BYTE&&(te=s.RG8I),H===s.SHORT&&(te=s.RG16I),H===s.INT&&(te=s.RG32I)),w===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(te=s.RGB8UI),H===s.UNSIGNED_SHORT&&(te=s.RGB16UI),H===s.UNSIGNED_INT&&(te=s.RGB32UI),H===s.BYTE&&(te=s.RGB8I),H===s.SHORT&&(te=s.RGB16I),H===s.INT&&(te=s.RGB32I)),w===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),H===s.UNSIGNED_INT&&(te=s.RGBA32UI),H===s.BYTE&&(te=s.RGBA8I),H===s.SHORT&&(te=s.RGBA16I),H===s.INT&&(te=s.RGBA32I)),w===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),w===s.RGBA){const Le=ce?Vo:it.getTransfer(ee);H===s.FLOAT&&(te=s.RGBA32F),H===s.HALF_FLOAT&&(te=s.RGBA16F),H===s.UNSIGNED_BYTE&&(te=Le===pt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(P,w){let H;return P?w===null||w===ji||w===qi?H=s.DEPTH24_STENCIL8:w===cn?H=s.DEPTH32F_STENCIL8:w===Sr&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ji||w===qi?H=s.DEPTH_COMPONENT24:w===cn?H=s.DEPTH_COMPONENT32F:w===Sr&&(H=s.DEPTH_COMPONENT16),H}function E(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yt&&P.minFilter!==Lt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function T(P){const w=P.target;w.removeEventListener("dispose",T),A(w),w.isVideoTexture&&h.delete(w)}function S(P){const w=P.target;w.removeEventListener("dispose",S),y(w)}function A(P){const w=n.get(P);if(w.__webglInit===void 0)return;const H=P.source,ee=d.get(H);if(ee){const ce=ee[w.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&M(P),Object.keys(ee).length===0&&d.delete(H)}n.remove(P)}function M(P){const w=n.get(P);s.deleteTexture(w.__webglTexture);const H=P.source,ee=d.get(H);delete ee[w.__cacheKey],o.memory.textures--}function y(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let ce=0;ce<w.__webglFramebuffer[ee].length;ce++)s.deleteFramebuffer(w.__webglFramebuffer[ee][ce]);else s.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)s.deleteFramebuffer(w.__webglFramebuffer[ee]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=P.textures;for(let ee=0,ce=H.length;ee<ce;ee++){const te=n.get(H[ee]);te.__webglTexture&&(s.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(H[ee])}n.remove(P)}let C=0;function D(){C=0}function L(){const P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function F(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function O(P,w){const H=n.get(P);if(P.isVideoTexture&&pe(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(H,P,w);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+w)}function U(P,w){const H=n.get(P);if(P.version>0&&H.__version!==P.version){N(H,P,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+w)}function z(P,w){const H=n.get(P);if(P.version>0&&H.__version!==P.version){N(H,P,w);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+w)}function G(P,w){const H=n.get(P);if(P.version>0&&H.__version!==P.version){V(H,P,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+w)}const j={[qt]:s.REPEAT,[Vn]:s.CLAMP_TO_EDGE,[Uo]:s.MIRRORED_REPEAT},ne={[Yt]:s.NEAREST,[bd]:s.NEAREST_MIPMAP_NEAREST,[ur]:s.NEAREST_MIPMAP_LINEAR,[Lt]:s.LINEAR,[Ro]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},ue={[jf]:s.NEVER,[Jf]:s.ALWAYS,[qf]:s.LESS,[Cd]:s.LEQUAL,[Yf]:s.EQUAL,[$f]:s.GEQUAL,[Zf]:s.GREATER,[Kf]:s.NOTEQUAL};function Ee(P,w){if(w.type===cn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Lt||w.magFilter===Ro||w.magFilter===ur||w.magFilter===kn||w.minFilter===Lt||w.minFilter===Ro||w.minFilter===ur||w.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,j[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,j[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,j[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ne[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ne[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ue[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yt||w.minFilter!==ur&&w.minFilter!==kn||w.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function K(P,w){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",T));const ee=w.source;let ce=d.get(ee);ce===void 0&&(ce={},d.set(ee,ce));const te=F(w);if(te!==P.__cacheKey){ce[te]===void 0&&(ce[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ce[te].usedTimes++;const Le=ce[P.__cacheKey];Le!==void 0&&(ce[P.__cacheKey].usedTimes--,Le.usedTimes===0&&M(w)),P.__cacheKey=te,P.__webglTexture=ce[te].texture}return H}function N(P,w,H){let ee=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=s.TEXTURE_3D);const ce=K(P,w),te=w.source;t.bindTexture(ee,P.__webglTexture,s.TEXTURE0+H);const Le=n.get(te);if(te.version!==Le.__version||ce===!0){t.activeTexture(s.TEXTURE0+H);const xe=it.getPrimaries(it.workingColorSpace),Se=w.colorSpace===ai?null:it.getPrimaries(w.colorSpace),Ye=w.colorSpace===ai||xe===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let fe=b(w.image,!1,i.maxTextureSize);fe=Fe(w,fe);const Ne=r.convert(w.format,w.colorSpace),We=r.convert(w.type);let je=v(w.internalFormat,Ne,We,w.colorSpace,w.isVideoTexture);Ee(ee,w);let Ie;const tt=w.mipmaps,Ze=w.isVideoTexture!==!0,at=Le.__version===void 0||ce===!0,B=te.dataReady,Me=E(w,fe);if(w.isDepthTexture)je=x(w.format===Yi,w.type),at&&(Ze?t.texStorage2D(s.TEXTURE_2D,1,je,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,je,fe.width,fe.height,0,Ne,We,null));else if(w.isDataTexture)if(tt.length>0){Ze&&at&&t.texStorage2D(s.TEXTURE_2D,Me,je,tt[0].width,tt[0].height);for(let J=0,he=tt.length;J<he;J++)Ie=tt[J],Ze?B&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,Ie.width,Ie.height,Ne,We,Ie.data):t.texImage2D(s.TEXTURE_2D,J,je,Ie.width,Ie.height,0,Ne,We,Ie.data);w.generateMipmaps=!1}else Ze?(at&&t.texStorage2D(s.TEXTURE_2D,Me,je,fe.width,fe.height),B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe.width,fe.height,Ne,We,fe.data)):t.texImage2D(s.TEXTURE_2D,0,je,fe.width,fe.height,0,Ne,We,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ze&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,je,tt[0].width,tt[0].height,fe.depth);for(let J=0,he=tt.length;J<he;J++)if(Ie=tt[J],w.format!==ln)if(Ne!==null)if(Ze){if(B)if(w.layerUpdates.size>0){const De=Yh(Ie.width,Ie.height,w.format,w.type);for(const Pe of w.layerUpdates){const me=Ie.data.subarray(Pe*De/Ie.data.BYTES_PER_ELEMENT,(Pe+1)*De/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Pe,Ie.width,Ie.height,1,Ne,me)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Ie.width,Ie.height,fe.depth,Ne,Ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,je,Ie.width,Ie.height,fe.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?B&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,Ie.width,Ie.height,fe.depth,Ne,We,Ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,je,Ie.width,Ie.height,fe.depth,0,Ne,We,Ie.data)}else{Ze&&at&&t.texStorage2D(s.TEXTURE_2D,Me,je,tt[0].width,tt[0].height);for(let J=0,he=tt.length;J<he;J++)Ie=tt[J],w.format!==ln?Ne!==null?Ze?B&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,Ie.width,Ie.height,Ne,Ie.data):t.compressedTexImage2D(s.TEXTURE_2D,J,je,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?B&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,Ie.width,Ie.height,Ne,We,Ie.data):t.texImage2D(s.TEXTURE_2D,J,je,Ie.width,Ie.height,0,Ne,We,Ie.data)}else if(w.isDataArrayTexture)if(Ze){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,je,fe.width,fe.height,fe.depth),B)if(w.layerUpdates.size>0){const J=Yh(fe.width,fe.height,w.format,w.type);for(const he of w.layerUpdates){const De=fe.data.subarray(he*J/fe.data.BYTES_PER_ELEMENT,(he+1)*J/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,fe.width,fe.height,1,Ne,We,De)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ne,We,fe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,je,fe.width,fe.height,fe.depth,0,Ne,We,fe.data);else if(w.isData3DTexture)Ze?(at&&t.texStorage3D(s.TEXTURE_3D,Me,je,fe.width,fe.height,fe.depth),B&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ne,We,fe.data)):t.texImage3D(s.TEXTURE_3D,0,je,fe.width,fe.height,fe.depth,0,Ne,We,fe.data);else if(w.isFramebufferTexture){if(at)if(Ze)t.texStorage2D(s.TEXTURE_2D,Me,je,fe.width,fe.height);else{let J=fe.width,he=fe.height;for(let De=0;De<Me;De++)t.texImage2D(s.TEXTURE_2D,De,je,J,he,0,Ne,We,null),J>>=1,he>>=1}}else if(tt.length>0){if(Ze&&at){const J=Ce(tt[0]);t.texStorage2D(s.TEXTURE_2D,Me,je,J.width,J.height)}for(let J=0,he=tt.length;J<he;J++)Ie=tt[J],Ze?B&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,Ne,We,Ie):t.texImage2D(s.TEXTURE_2D,J,je,Ne,We,Ie);w.generateMipmaps=!1}else if(Ze){if(at){const J=Ce(fe);t.texStorage2D(s.TEXTURE_2D,Me,je,J.width,J.height)}B&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,We,fe)}else t.texImage2D(s.TEXTURE_2D,0,je,Ne,We,fe);m(w)&&p(ee),Le.__version=te.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function V(P,w,H){if(w.image.length!==6)return;const ee=K(P,w),ce=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+H);const te=n.get(ce);if(ce.version!==te.__version||ee===!0){t.activeTexture(s.TEXTURE0+H);const Le=it.getPrimaries(it.workingColorSpace),xe=w.colorSpace===ai?null:it.getPrimaries(w.colorSpace),Se=w.colorSpace===ai||Le===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,fe=w.image[0]&&w.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!Ye&&!fe?Ne[he]=b(w.image[he],!0,i.maxCubemapSize):Ne[he]=fe?w.image[he].image:w.image[he],Ne[he]=Fe(w,Ne[he]);const We=Ne[0],je=r.convert(w.format,w.colorSpace),Ie=r.convert(w.type),tt=v(w.internalFormat,je,Ie,w.colorSpace),Ze=w.isVideoTexture!==!0,at=te.__version===void 0||ee===!0,B=ce.dataReady;let Me=E(w,We);Ee(s.TEXTURE_CUBE_MAP,w);let J;if(Ye){Ze&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,tt,We.width,We.height);for(let he=0;he<6;he++){J=Ne[he].mipmaps;for(let De=0;De<J.length;De++){const Pe=J[De];w.format!==ln?je!==null?Ze?B&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Pe.width,Pe.height,je,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,tt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Pe.width,Pe.height,je,Ie,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,tt,Pe.width,Pe.height,0,je,Ie,Pe.data)}}}else{if(J=w.mipmaps,Ze&&at){J.length>0&&Me++;const he=Ce(Ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Me,tt,he.width,he.height)}for(let he=0;he<6;he++)if(fe){Ze?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne[he].width,Ne[he].height,je,Ie,Ne[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,Ne[he].width,Ne[he].height,0,je,Ie,Ne[he].data);for(let De=0;De<J.length;De++){const me=J[De].image[he].image;Ze?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,me.width,me.height,je,Ie,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,tt,me.width,me.height,0,je,Ie,me.data)}}else{Ze?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,je,Ie,Ne[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,tt,je,Ie,Ne[he]);for(let De=0;De<J.length;De++){const Pe=J[De];Ze?B&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,je,Ie,Pe.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,tt,je,Ie,Pe.image[he])}}}m(w)&&p(s.TEXTURE_CUBE_MAP),te.__version=ce.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function q(P,w,H,ee,ce,te){const Le=r.convert(H.format,H.colorSpace),xe=r.convert(H.type),Se=v(H.internalFormat,Le,xe,H.colorSpace),Ye=n.get(w),fe=n.get(H);if(fe.__renderTarget=w,!Ye.__hasExternalTextures){const Ne=Math.max(1,w.width>>te),We=Math.max(1,w.height>>te);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,te,Se,Ne,We,w.depth,0,Le,xe,null):t.texImage2D(ce,te,Se,Ne,We,0,Le,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ye(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,ce,fe.__webglTexture,0,le(w)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,ce,fe.__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(P,w,H){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const ee=w.depthTexture,ce=ee&&ee.isDepthTexture?ee.type:null,te=x(w.stencilBuffer,ce),Le=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=le(w);ye(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,te,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,te,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,te,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,P)}else{const ee=w.textures;for(let ce=0;ce<ee.length;ce++){const te=ee[ce],Le=r.convert(te.format,te.colorSpace),xe=r.convert(te.type),Se=v(te.internalFormat,Le,xe,te.colorSpace),Ye=le(w);H&&ye(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Se,w.width,w.height):ye(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,Se,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Se,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function de(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const ce=ee.__webglTexture,te=le(w);if(w.depthTexture.format===As)ye(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(w.depthTexture.format===Yi)ye(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function be(P){const w=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){const ce=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",ce)};ee.addEventListener("dispose",ce),w.__depthDisposeCallback=ce}w.__boundDepthTexture=ee}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");de(w.__webglFramebuffer,P)}else if(H){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=s.createRenderbuffer(),Q(w.__webglDepthbuffer[ee],P,!1);else{const ce=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,te)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Q(w.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,ce)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(P,w,H){const ee=n.get(P);w!==void 0&&q(ee.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&be(P)}function ze(P){const w=P.texture,H=n.get(P),ee=n.get(w);P.addEventListener("dispose",S);const ce=P.textures,te=P.isWebGLCubeRenderTarget===!0,Le=ce.length>1;if(Le||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=w.version,o.memory.textures++),te){H.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[xe]=[];for(let Se=0;Se<w.mipmaps.length;Se++)H.__webglFramebuffer[xe][Se]=s.createFramebuffer()}else H.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)H.__webglFramebuffer[xe]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Le)for(let xe=0,Se=ce.length;xe<Se;xe++){const Ye=n.get(ce[xe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ye(P)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xe=0;xe<ce.length;xe++){const Se=ce[xe];H.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[xe]);const Ye=r.convert(Se.format,Se.colorSpace),fe=r.convert(Se.type),Ne=v(Se.internalFormat,Ye,fe,Se.colorSpace,P.isXRRenderTarget===!0),We=le(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ne,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,H.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(te){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,w);for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)q(H.__webglFramebuffer[xe][Se],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else q(H.__webglFramebuffer[xe],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(w)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let xe=0,Se=ce.length;xe<Se;xe++){const Ye=ce[xe],fe=n.get(Ye);t.bindTexture(s.TEXTURE_2D,fe.__webglTexture),Ee(s.TEXTURE_2D,Ye),q(H.__webglFramebuffer,P,Ye,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,0),m(Ye)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,ee.__webglTexture),Ee(xe,w),w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)q(H.__webglFramebuffer[Se],P,w,s.COLOR_ATTACHMENT0,xe,Se);else q(H.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,xe,0);m(w)&&p(xe),t.unbindTexture()}P.depthBuffer&&be(P)}function $(P){const w=P.textures;for(let H=0,ee=w.length;H<ee;H++){const ce=w[H];if(m(ce)){const te=_(P),Le=n.get(ce).__webglTexture;t.bindTexture(te,Le),p(te),t.unbindTexture()}}}const oe=[],k=[];function Ae(P){if(P.samples>0){if(ye(P)===!1){const w=P.textures,H=P.width,ee=P.height;let ce=s.COLOR_BUFFER_BIT;const te=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=n.get(P),xe=w.length>1;if(xe)for(let Se=0;Se<w.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Se=0;Se<w.length;Se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Se]);const Ye=n.get(w[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,H,ee,0,0,H,ee,ce,s.NEAREST),c===!0&&(oe.length=0,k.length=0,oe.push(s.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.resolveDepthBuffer===!1&&(oe.push(te),k.push(te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Se=0;Se<w.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Se]);const Ye=n.get(w[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function le(P){return Math.min(i.maxSamples,P.samples)}function ye(P){const w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function pe(P){const w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Fe(P,w){const H=P.colorSpace,ee=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==zt&&H!==ai&&(it.getTransfer(H)===pt?(ee!==ln||ce!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Ce(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=G,this.rebindTextures=ge,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ye}function vv(s,e){function t(n,i=ai){let r;const o=it.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===pl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_d)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vd)return s.BYTE;if(n===xd)return s.SHORT;if(n===Sr)return s.UNSIGNED_SHORT;if(n===fl)return s.INT;if(n===ji)return s.UNSIGNED_INT;if(n===cn)return s.FLOAT;if(n===Ft)return s.HALF_FLOAT;if(n===yd)return s.ALPHA;if(n===Md)return s.RGB;if(n===ln)return s.RGBA;if(n===wd)return s.LUMINANCE;if(n===Sd)return s.LUMINANCE_ALPHA;if(n===As)return s.DEPTH_COMPONENT;if(n===Yi)return s.DEPTH_STENCIL;if(n===gl)return s.RED;if(n===bl)return s.RED_INTEGER;if(n===Td)return s.RG;if(n===vl)return s.RG_INTEGER;if(n===xl)return s.RGBA_INTEGER;if(n===Co||n===Po||n===Do||n===Lo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===bc||n===vc||n===xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_c||n===yc||n===Mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_c||n===yc)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wc||n===Sc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Pc||n===Dc||n===Lc||n===Ic||n===kc||n===Nc||n===Uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Fc||n===Oc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ed||n===zc||n===Bc||n===Hc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class xv extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _v={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mv=`
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

}`;class wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ot,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Dt({vertexShader:yv,fragmentShader:Mv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sv extends Qi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const b=new wv,m=t.getContextAttributes();let p=null,_=null;const v=[],x=[],E=new se;let T=null;const S=new sn;S.viewport=new ht;const A=new sn;A.viewport=new ht;const M=[S,A],y=new xv;let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=v[N];return V===void 0&&(V=new Ra,v[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=v[N];return V===void 0&&(V=new Ra,v[N]=V),V.getGripSpace()},this.getHand=function(N){let V=v[N];return V===void 0&&(V=new Ra,v[N]=V),V.getHandSpace()};function L(N){const V=x.indexOf(N.inputSource);if(V===-1)return;const q=v[V];q!==void 0&&(q.update(N.inputSource,N.frame,l||o),q.dispatchEvent({type:N.type,data:N.inputSource}))}function F(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",O);for(let N=0;N<v.length;N++){const V=x[N];V!==null&&(x[N]=null,v[N].disconnect(V))}C=null,D=null,b.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",F),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){const V={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Wt(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let V=null,q=null,Q=null;m.depth&&(Q=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=m.stencil?Yi:As,q=m.stencil?qi:ji);const de={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(de),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Wt(d.textureWidth,d.textureHeight,{format:ln,type:Wn,depthTexture:new Tl(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function O(N){for(let V=0;V<N.removed.length;V++){const q=N.removed[V],Q=x.indexOf(q);Q>=0&&(x[Q]=null,v[Q].disconnect(q))}for(let V=0;V<N.added.length;V++){const q=N.added[V];let Q=x.indexOf(q);if(Q===-1){for(let be=0;be<v.length;be++)if(be>=x.length){x.push(q),Q=be;break}else if(x[be]===null){x[be]=q,Q=be;break}if(Q===-1)break}const de=v[Q];de&&de.connect(q)}}const U=new I,z=new I;function G(N,V,q){U.setFromMatrixPosition(V.matrixWorld),z.setFromMatrixPosition(q.matrixWorld);const Q=U.distanceTo(z),de=V.projectionMatrix.elements,be=q.projectionMatrix.elements,ge=de[14]/(de[10]-1),ze=de[14]/(de[10]+1),$=(de[9]+1)/de[5],oe=(de[9]-1)/de[5],k=(de[8]-1)/de[0],Ae=(be[8]+1)/be[0],le=ge*k,ye=ge*Ae,pe=Q/(-k+Ae),Fe=pe*-k;if(V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Fe),N.translateZ(pe),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),de[10]===-1)N.projectionMatrix.copy(V.projectionMatrix),N.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Ce=ge+pe,P=ze+pe,w=le-Fe,H=ye+(Q-Fe),ee=$*ze/P*Ce,ce=oe*ze/P*Ce;N.projectionMatrix.makePerspective(w,H,ee,ce,Ce,P),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function j(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let V=N.near,q=N.far;b.texture!==null&&(b.depthNear>0&&(V=b.depthNear),b.depthFar>0&&(q=b.depthFar)),y.near=A.near=S.near=V,y.far=A.far=S.far=q,(C!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,D=y.far),S.layers.mask=N.layers.mask|2,A.layers.mask=N.layers.mask|4,y.layers.mask=S.layers.mask|A.layers.mask;const Q=N.parent,de=y.cameras;j(y,Q);for(let be=0;be<de.length;be++)j(de[be],Q);de.length===2?G(y,S,A):y.projectionMatrix.copy(S.projectionMatrix),ne(N,y,Q)};function ne(N,V,q){q===null?N.matrix.copy(V.matrixWorld):(N.matrix.copy(q.matrixWorld),N.matrix.invert(),N.matrix.multiply(V.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(V.projectionMatrix),N.projectionMatrixInverse.copy(V.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Ns*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(N){c=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let ue=null;function Ee(N,V){if(h=V.getViewerPose(l||o),g=V,h!==null){const q=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Q=!1;q.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let be=0;be<q.length;be++){const ge=q[be];let ze=null;if(f!==null)ze=f.getViewport(ge);else{const oe=u.getViewSubImage(d,ge);ze=oe.viewport,be===0&&(e.setRenderTargetTextures(_,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(_))}let $=M[be];$===void 0&&($=new sn,$.layers.enable(be),$.viewport=new ht,M[be]=$),$.matrix.fromArray(ge.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ge.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ze.x,ze.y,ze.width,ze.height),be===0&&(y.matrix.copy($.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Q===!0&&y.cameras.push($)}const de=i.enabledFeatures;if(de&&de.includes("depth-sensing")){const be=u.getDepthInformation(q[0]);be&&be.isValid&&be.texture&&b.init(e,be,i.renderState)}}for(let q=0;q<v.length;q++){const Q=x[q],de=v[q];Q!==null&&de!==void 0&&de.update(Q,V,l||o)}ue&&ue(N,V),V.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:V}),g=null}const K=new Bd;K.setAnimationLoop(Ee),this.setAnimationLoop=function(N){ue=N},this.dispose=function(){}}}const Fi=new Fn,Tv=new Xe;function Ev(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),v=_.envMap,x=_.envMapRotation;v&&(m.envMap.value=v,Fi.copy(x),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(Fi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Av(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){const x=v.program;n.uniformBlockBinding(_,x)}function l(_,v){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));const E=v.program;n.updateUBOMapping(_,E);const T=e.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){const v=u();_.__bindingPointIndex=v;const x=s.createBuffer(),E=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=i[_.id],x=_.uniforms,E=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,S=x.length;T<S;T++){const A=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,y=A.length;M<y;M++){const C=A[M];if(f(C,T,M,E)===!0){const D=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let O=0;O<L.length;O++){const U=L[O],z=b(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,D+F,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,F),F+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,v,x,E){const T=_.value,S=v+"_"+x;if(E[S]===void 0)return typeof T=="number"||typeof T=="boolean"?E[S]=T:E[S]=T.clone(),!0;{const A=E[S];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return E[S]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(_){const v=_.uniforms;let x=0;const E=16;for(let S=0,A=v.length;S<A;S++){const M=Array.isArray(v[S])?v[S]:[v[S]];for(let y=0,C=M.length;y<C;y++){const D=M[y],L=Array.isArray(D.value)?D.value:[D.value];for(let F=0,O=L.length;F<O;F++){const U=L[F],z=b(U),G=x%E,j=G%z.boundary,ne=G+j;x+=j,ne!==0&&E-ne<z.storage&&(x+=E-ne),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=z.storage}}}const T=x%E;return T>0&&(x+=E-T),_.__size=x,_.__cache={},this}function b(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Rv{constructor(e={}){const{canvas:t=mp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,p=null;const _=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this.toneMapping=Ri,this.toneMappingExposure=1;const x=this;let E=!1,T=0,S=0,A=null,M=-1,y=null;const C=new ht,D=new ht;let L=null;const F=new Ue(0);let O=0,U=t.width,z=t.height,G=1,j=null,ne=null;const ue=new ht(0,0,U,z),Ee=new ht(0,0,U,z);let K=!1;const N=new wl;let V=!1,q=!1;const Q=new Xe,de=new Xe,be=new I,ge=new ht,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function oe(){return A===null?G:1}let k=n;function Ae(R,W){return t.getContext(R,W)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hl}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),k===null){const W="webgl2";if(k=Ae(W,R),k===null)throw Ae(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let le,ye,pe,Fe,Ce,P,w,H,ee,ce,te,Le,xe,Se,Ye,fe,Ne,We,je,Ie,tt,Ze,at,B;function Me(){le=new kg(k),le.init(),Ze=new vv(k,le),ye=new Rg(k,le,e,Ze),pe=new mv(k,le),ye.reverseDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Fe=new Fg(k),Ce=new tv,P=new bv(k,le,pe,Ce,ye,Ze,Fe),w=new Pg(x),H=new Ig(x),ee=new Wp(k),at=new Eg(k,ee),ce=new Ng(k,ee,Fe,at),te=new zg(k,ce,ee,Fe),je=new Og(k,ye,P),fe=new Cg(Ce),Le=new ev(x,w,H,le,ye,at,fe),xe=new Ev(x,Ce),Se=new iv,Ye=new lv(le),We=new Tg(x,w,H,pe,te,f,c),Ne=new fv(x,te,ye),B=new Av(k,Fe,ye,pe),Ie=new Ag(k,le,Fe),tt=new Ug(k,le,Fe),Fe.programs=Le.programs,x.capabilities=ye,x.extensions=le,x.properties=Ce,x.renderLists=Se,x.shadowMap=Ne,x.state=pe,x.info=Fe}Me();const J=new Sv(x,k);this.xr=J,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(U,z,!1))},this.getSize=function(R){return R.set(U,z)},this.setSize=function(R,W,Y=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,z=W,t.width=Math.floor(R*G),t.height=Math.floor(W*G),Y===!0&&(t.style.width=R+"px",t.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(U*G,z*G).floor()},this.setDrawingBufferSize=function(R,W,Y){U=R,z=W,G=Y,t.width=Math.floor(R*Y),t.height=Math.floor(W*Y),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(ue)},this.setViewport=function(R,W,Y,Z){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,W,Y,Z),pe.viewport(C.copy(ue).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(Ee)},this.setScissor=function(R,W,Y,Z){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,W,Y,Z),pe.scissor(D.copy(Ee).multiplyScalar(G).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(R){pe.setScissorTest(K=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){ne=R},this.getClearColor=function(R){return R.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(R=!0,W=!0,Y=!0){let Z=0;if(R){let X=!1;if(A!==null){const _e=A.texture.format;X=_e===xl||_e===vl||_e===bl}if(X){const _e=A.texture.type,ke=_e===Wn||_e===ji||_e===Sr||_e===qi||_e===pl||_e===ml,Be=We.getClearColor(),He=We.getClearAlpha(),Ke=Be.r,$e=Be.g,Ge=Be.b;ke?(g[0]=Ke,g[1]=$e,g[2]=Ge,g[3]=He,k.clearBufferuiv(k.COLOR,0,g)):(b[0]=Ke,b[1]=$e,b[2]=Ge,b[3]=He,k.clearBufferiv(k.COLOR,0,b))}else Z|=k.COLOR_BUFFER_BIT}W&&(Z|=k.DEPTH_BUFFER_BIT),Y&&(Z|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Se.dispose(),Ye.dispose(),Ce.dispose(),w.dispose(),H.dispose(),te.dispose(),at.dispose(),B.dispose(),Le.dispose(),J.dispose(),J.removeEventListener("sessionstart",Di),J.removeEventListener("sessionend",Ys),$t.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=Fe.autoReset,W=Ne.enabled,Y=Ne.autoUpdate,Z=Ne.needsUpdate,X=Ne.type;Me(),Fe.autoReset=R,Ne.enabled=W,Ne.autoUpdate=Y,Ne.needsUpdate=Z,Ne.type=X}function Pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function me(R){const W=R.target;W.removeEventListener("dispose",me),we(W)}function we(R){Oe(R),Ce.remove(R)}function Oe(R){const W=Ce.get(R).programs;W!==void 0&&(W.forEach(function(Y){Le.releaseProgram(Y)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Y,Z,X,_e){W===null&&(W=ze);const ke=X.isMesh&&X.matrixWorld.determinant()<0,Be=xf(R,W,Y,Z,X);pe.setMaterial(Z,ke);let He=Y.index,Ke=1;if(Z.wireframe===!0){if(He=ce.getWireframeAttribute(Y),He===void 0)return;Ke=2}const $e=Y.drawRange,Ge=Y.attributes.position;let ct=$e.start*Ke,xt=($e.start+$e.count)*Ke;_e!==null&&(ct=Math.max(ct,_e.start*Ke),xt=Math.min(xt,(_e.start+_e.count)*Ke)),He!==null?(ct=Math.max(ct,0),xt=Math.min(xt,He.count)):Ge!=null&&(ct=Math.max(ct,0),xt=Math.min(xt,Ge.count));const _t=xt-ct;if(_t<0||_t===1/0)return;at.setup(X,Z,Be,Y,He);let on,dt=Ie;if(He!==null&&(on=ee.get(He),dt=tt,dt.setIndex(on)),X.isMesh)Z.wireframe===!0?(pe.setLineWidth(Z.wireframeLinewidth*oe()),dt.setMode(k.LINES)):dt.setMode(k.TRIANGLES);else if(X.isLine){let Ve=Z.linewidth;Ve===void 0&&(Ve=1),pe.setLineWidth(Ve*oe()),X.isLineSegments?dt.setMode(k.LINES):X.isLineLoop?dt.setMode(k.LINE_LOOP):dt.setMode(k.LINE_STRIP)}else X.isPoints?dt.setMode(k.POINTS):X.isSprite&&dt.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)dt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ve=X._multiDrawStarts,$n=X._multiDrawCounts,ft=X._multiDrawCount,Tn=He?ee.get(He).bytesPerElement:1,ss=Ce.get(Z).currentProgram.getUniforms();for(let un=0;un<ft;un++)ss.setValue(k,"_gl_DrawID",un),dt.render(Ve[un]/Tn,$n[un])}else if(X.isInstancedMesh)dt.renderInstances(ct,_t,X.count);else if(Y.isInstancedBufferGeometry){const Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,$n=Math.min(Y.instanceCount,Ve);dt.renderInstances(ct,_t,$n)}else dt.render(ct,_t)};function ie(R,W,Y){R.transparent===!0&&R.side===Tt&&R.forceSinglePass===!1?(R.side=Xt,R.needsUpdate=!0,Vr(R,W,Y),R.side=fi,R.needsUpdate=!0,Vr(R,W,Y),R.side=Tt):Vr(R,W,Y)}this.compile=function(R,W,Y=null){Y===null&&(Y=R),p=Ye.get(Y),p.init(W),v.push(p),Y.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==Y&&R.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Z=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const _e=X.material;if(_e)if(Array.isArray(_e))for(let ke=0;ke<_e.length;ke++){const Be=_e[ke];ie(Be,Y,X),Z.add(Be)}else ie(_e,Y,X),Z.add(_e)}),v.pop(),p=null,Z},this.compileAsync=function(R,W,Y=null){const Z=this.compile(R,W,Y);return new Promise(X=>{function _e(){if(Z.forEach(function(ke){Ce.get(ke).currentProgram.isReady()&&Z.delete(ke)}),Z.size===0){X(R);return}setTimeout(_e,10)}le.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Qe=null;function Pt(R){Qe&&Qe(R)}function Di(){$t.stop()}function Ys(){$t.start()}const $t=new Bd;$t.setAnimationLoop(Pt),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(R){Qe=R,J.setAnimationLoop(R),R===null?$t.stop():$t.start()},J.addEventListener("sessionstart",Di),J.addEventListener("sessionend",Ys),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(W),W=J.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,W,A),p=Ye.get(R,v.length),p.init(W),v.push(p),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),N.setFromProjectionMatrix(de),q=this.localClippingEnabled,V=fe.init(this.clippingPlanes,q),m=Se.get(R,_.length),m.init(),_.push(m),J.enabled===!0&&J.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&Kn(_e,W,-1/0,x.sortObjects)}Kn(R,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,ne),$=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,$&&We.addToRenderList(m,R),this.info.render.frame++,V===!0&&fe.beginShadows();const Y=p.state.shadowsArray;Ne.render(Y,R,W),V===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){const _e=W.cameras;if(X.length>0)for(let ke=0,Be=_e.length;ke<Be;ke++){const He=_e[ke];is(Z,X,R,He)}$&&We.render(R);for(let ke=0,Be=_e.length;ke<Be;ke++){const He=_e[ke];ns(m,R,He,He.viewport)}}else X.length>0&&is(Z,X,R,W),$&&We.render(R),ns(m,R,W);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(x,R,W),at.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],V===!0&&fe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Kn(R,W,Y,Z){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||N.intersectsSprite(R)){Z&&ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(de);const ke=te.update(R),Be=R.material;Be.visible&&m.push(R,ke,Be,Y,ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||N.intersectsObject(R))){const ke=te.update(R),Be=R.material;if(Z&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ge.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ge.copy(ke.boundingSphere.center)),ge.applyMatrix4(R.matrixWorld).applyMatrix4(de)),Array.isArray(Be)){const He=ke.groups;for(let Ke=0,$e=He.length;Ke<$e;Ke++){const Ge=He[Ke],ct=Be[Ge.materialIndex];ct&&ct.visible&&m.push(R,ke,ct,Y,ge.z,Ge)}}else Be.visible&&m.push(R,ke,Be,Y,ge.z,null)}}const _e=R.children;for(let ke=0,Be=_e.length;ke<Be;ke++)Kn(_e[ke],W,Y,Z)}function ns(R,W,Y,Z){const X=R.opaque,_e=R.transmissive,ke=R.transparent;p.setupLightsView(Y),V===!0&&fe.setGlobalState(x.clippingPlanes,Y),Z&&pe.viewport(C.copy(Z)),X.length>0&&Gr(X,W,Y),_e.length>0&&Gr(_e,W,Y),ke.length>0&&Gr(ke,W,Y),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function is(R,W,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Wt(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Ft:Wn,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const _e=p.state.transmissionRenderTarget[Z.id],ke=Z.viewport||C;_e.setSize(ke.z,ke.w);const Be=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(F),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),$&&We.render(Y);const He=x.toneMapping;x.toneMapping=Ri;const Ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),V===!0&&fe.setGlobalState(x.clippingPlanes,Z),Gr(R,Y,Z),P.updateMultisampleRenderTarget(_e),P.updateRenderTargetMipmap(_e),le.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ge=0,ct=W.length;Ge<ct;Ge++){const xt=W[Ge],_t=xt.object,on=xt.geometry,dt=xt.material,Ve=xt.group;if(dt.side===Tt&&_t.layers.test(Z.layers)){const $n=dt.side;dt.side=Xt,dt.needsUpdate=!0,Xl(_t,Y,Z,on,dt,Ve),dt.side=$n,dt.needsUpdate=!0,$e=!0}}$e===!0&&(P.updateMultisampleRenderTarget(_e),P.updateRenderTargetMipmap(_e))}x.setRenderTarget(Be),x.setClearColor(F,O),Ke!==void 0&&(Z.viewport=Ke),x.toneMapping=He}function Gr(R,W,Y){const Z=W.isScene===!0?W.overrideMaterial:null;for(let X=0,_e=R.length;X<_e;X++){const ke=R[X],Be=ke.object,He=ke.geometry,Ke=Z===null?ke.material:Z,$e=ke.group;Be.layers.test(Y.layers)&&Xl(Be,W,Y,He,Ke,$e)}}function Xl(R,W,Y,Z,X,_e){R.onBeforeRender(x,W,Y,Z,X,_e),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(x,W,Y,Z,R,_e),X.transparent===!0&&X.side===Tt&&X.forceSinglePass===!1?(X.side=Xt,X.needsUpdate=!0,x.renderBufferDirect(Y,W,Z,X,R,_e),X.side=fi,X.needsUpdate=!0,x.renderBufferDirect(Y,W,Z,X,R,_e),X.side=Tt):x.renderBufferDirect(Y,W,Z,X,R,_e),R.onAfterRender(x,W,Y,Z,X,_e)}function Vr(R,W,Y){W.isScene!==!0&&(W=ze);const Z=Ce.get(R),X=p.state.lights,_e=p.state.shadowsArray,ke=X.state.version,Be=Le.getParameters(R,X.state,_e,W,Y),He=Le.getProgramCacheKey(Be);let Ke=Z.programs;Z.environment=R.isMeshStandardMaterial?W.environment:null,Z.fog=W.fog,Z.envMap=(R.isMeshStandardMaterial?H:w).get(R.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",me),Ke=new Map,Z.programs=Ke);let $e=Ke.get(He);if($e!==void 0){if(Z.currentProgram===$e&&Z.lightsStateVersion===ke)return ql(R,Be),$e}else Be.uniforms=Le.getUniforms(R),R.onBeforeCompile(Be,x),$e=Le.acquireProgram(Be,He),Ke.set(He,$e),Z.uniforms=Be.uniforms;const Ge=Z.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=fe.uniform),ql(R,Be),Z.needsLights=yf(R),Z.lightsStateVersion=ke,Z.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=$e,Z.uniformsList=null,$e}function jl(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=ko.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function ql(R,W){const Y=Ce.get(R);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.batchingColor=W.batchingColor,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.instancingMorph=W.instancingMorph,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function xf(R,W,Y,Z,X){W.isScene!==!0&&(W=ze),P.resetTextureUnits();const _e=W.fog,ke=Z.isMeshStandardMaterial?W.environment:null,Be=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:zt,He=(Z.isMeshStandardMaterial?H:w).get(Z.envMap||ke),Ke=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$e=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ge=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,xt=!!Y.morphAttributes.color;let _t=Ri;Z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_t=x.toneMapping);const on=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dt=on!==void 0?on.length:0,Ve=Ce.get(Z),$n=p.state.lights;if(V===!0&&(q===!0||R!==y)){const gn=R===y&&Z.id===M;fe.setState(Z,R,gn)}let ft=!1;Z.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==$n.state.version||Ve.outputColorSpace!==Be||X.isBatchedMesh&&Ve.batching===!1||!X.isBatchedMesh&&Ve.batching===!0||X.isBatchedMesh&&Ve.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ve.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||X.isInstancedMesh&&Ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ve.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ve.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ve.instancingMorph===!1&&X.morphTexture!==null||Ve.envMap!==He||Z.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==fe.numPlanes||Ve.numIntersection!==fe.numIntersection)||Ve.vertexAlphas!==Ke||Ve.vertexTangents!==$e||Ve.morphTargets!==Ge||Ve.morphNormals!==ct||Ve.morphColors!==xt||Ve.toneMapping!==_t||Ve.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,Ve.__version=Z.version);let Tn=Ve.currentProgram;ft===!0&&(Tn=Vr(Z,W,X));let ss=!1,un=!1,Zs=!1;const yt=Tn.getUniforms(),On=Ve.uniforms;if(pe.useProgram(Tn.program)&&(ss=!0,un=!0,Zs=!0),Z.id!==M&&(M=Z.id,un=!0),ss||y!==R){pe.buffers.depth.getReversed()?(Q.copy(R.projectionMatrix),bp(Q),vp(Q),yt.setValue(k,"projectionMatrix",Q)):yt.setValue(k,"projectionMatrix",R.projectionMatrix),yt.setValue(k,"viewMatrix",R.matrixWorldInverse);const gi=yt.map.cameraPosition;gi!==void 0&&gi.setValue(k,be.setFromMatrixPosition(R.matrixWorld)),ye.logarithmicDepthBuffer&&yt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&yt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,un=!0,Zs=!0)}if(X.isSkinnedMesh){yt.setOptional(k,X,"bindMatrix"),yt.setOptional(k,X,"bindMatrixInverse");const gn=X.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),yt.setValue(k,"boneTexture",gn.boneTexture,P))}X.isBatchedMesh&&(yt.setOptional(k,X,"batchingTexture"),yt.setValue(k,"batchingTexture",X._matricesTexture,P),yt.setOptional(k,X,"batchingIdTexture"),yt.setValue(k,"batchingIdTexture",X._indirectTexture,P),yt.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&yt.setValue(k,"batchingColorTexture",X._colorsTexture,P));const Ks=Y.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&je.update(X,Y,Tn),(un||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,yt.setValue(k,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(On.envMap.value=He,On.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&W.environment!==null&&(On.envMapIntensity.value=W.environmentIntensity),un&&(yt.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&_f(On,Zs),_e&&Z.fog===!0&&xe.refreshFogUniforms(On,_e),xe.refreshMaterialUniforms(On,Z,G,z,p.state.transmissionRenderTarget[R.id]),ko.upload(k,jl(Ve),On,P)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ko.upload(k,jl(Ve),On,P),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&yt.setValue(k,"center",X.center),yt.setValue(k,"modelViewMatrix",X.modelViewMatrix),yt.setValue(k,"normalMatrix",X.normalMatrix),yt.setValue(k,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const gn=Z.uniformsGroups;for(let gi=0,bi=gn.length;gi<bi;gi++){const Yl=gn[gi];B.update(Yl,Tn),B.bind(Yl,Tn)}}return Tn}function _f(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function yf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,W,Y){Ce.get(R.texture).__webglTexture=W,Ce.get(R.depthTexture).__webglTexture=Y;const Z=Ce.get(R);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=Y===void 0,Z.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const Y=Ce.get(R);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,Y=0){A=R,T=W,S=Y;let Z=!0,X=null,_e=!1,ke=!1;if(R){const He=Ce.get(R);if(He.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(k.FRAMEBUFFER,null),Z=!1;else if(He.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(He.__hasExternalTextures)P.rebindTextures(R,Ce.get(R.texture).__webglTexture,Ce.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ge=R.depthTexture;if(He.__boundDepthTexture!==Ge){if(Ge!==null&&Ce.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ke=!0);const $e=Ce.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[W])?X=$e[W][Y]:X=$e[W],_e=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?X=Ce.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?X=$e[Y]:X=$e,C.copy(R.viewport),D.copy(R.scissor),L=R.scissorTest}else C.copy(ue).multiplyScalar(G).floor(),D.copy(Ee).multiplyScalar(G).floor(),L=K;if(pe.bindFramebuffer(k.FRAMEBUFFER,X)&&Z&&pe.drawBuffers(R,X),pe.viewport(C),pe.scissor(D),pe.setScissorTest(L),_e){const He=Ce.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,He.__webglTexture,Y)}else if(ke){const He=Ce.get(R.texture),Ke=W||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.__webglTexture,Y||0,Ke)}M=-1},this.readRenderTargetPixels=function(R,W,Y,Z,X,_e,ke){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Be=Be[ke]),Be){pe.bindFramebuffer(k.FRAMEBUFFER,Be);try{const He=R.texture,Ke=He.format,$e=He.type;if(!ye.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Z&&Y>=0&&Y<=R.height-X&&k.readPixels(W,Y,Z,X,Ze.convert(Ke),Ze.convert($e),_e)}finally{const He=A!==null?Ce.get(A).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,W,Y,Z,X,_e,ke){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Be=Be[ke]),Be){const He=R.texture,Ke=He.format,$e=He.type;if(!ye.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=R.width-Z&&Y>=0&&Y<=R.height-X){pe.bindFramebuffer(k.FRAMEBUFFER,Be);const Ge=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ge),k.bufferData(k.PIXEL_PACK_BUFFER,_e.byteLength,k.STREAM_READ),k.readPixels(W,Y,Z,X,Ze.convert(Ke),Ze.convert($e),0);const ct=A!==null?Ce.get(A).__webglFramebuffer:null;pe.bindFramebuffer(k.FRAMEBUFFER,ct);const xt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await gp(k,xt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ge),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,_e),k.deleteBuffer(Ge),k.deleteSync(xt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,W=null,Y=0){R.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1]);const Z=Math.pow(2,-Y),X=Math.floor(R.image.width*Z),_e=Math.floor(R.image.height*Z),ke=W!==null?W.x:0,Be=W!==null?W.y:0;P.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,ke,Be,X,_e),pe.unbindTexture()},this.copyTextureToTexture=function(R,W,Y=null,Z=null,X=0){R.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,R=arguments[1],W=arguments[2],X=arguments[3]||0,Y=null);let _e,ke,Be,He,Ke,$e,Ge,ct,xt;const _t=R.isCompressedTexture?R.mipmaps[X]:R.image;Y!==null?(_e=Y.max.x-Y.min.x,ke=Y.max.y-Y.min.y,Be=Y.isBox3?Y.max.z-Y.min.z:1,He=Y.min.x,Ke=Y.min.y,$e=Y.isBox3?Y.min.z:0):(_e=_t.width,ke=_t.height,Be=_t.depth||1,He=0,Ke=0,$e=0),Z!==null?(Ge=Z.x,ct=Z.y,xt=Z.z):(Ge=0,ct=0,xt=0);const on=Ze.convert(W.format),dt=Ze.convert(W.type);let Ve;W.isData3DTexture?(P.setTexture3D(W,0),Ve=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),Ve=k.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),Ve=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const $n=k.getParameter(k.UNPACK_ROW_LENGTH),ft=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Tn=k.getParameter(k.UNPACK_SKIP_PIXELS),ss=k.getParameter(k.UNPACK_SKIP_ROWS),un=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,He),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ke),k.pixelStorei(k.UNPACK_SKIP_IMAGES,$e);const Zs=R.isDataArrayTexture||R.isData3DTexture,yt=W.isDataArrayTexture||W.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const On=Ce.get(R),Ks=Ce.get(W),gn=Ce.get(On.__renderTarget),gi=Ce.get(Ks.__renderTarget);pe.bindFramebuffer(k.READ_FRAMEBUFFER,gn.__webglFramebuffer),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let bi=0;bi<Be;bi++)Zs&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.get(R).__webglTexture,X,$e+bi),R.isDepthTexture?(yt&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.get(W).__webglTexture,X,xt+bi),k.blitFramebuffer(He,Ke,_e,ke,Ge,ct,_e,ke,k.DEPTH_BUFFER_BIT,k.NEAREST)):yt?k.copyTexSubImage3D(Ve,X,Ge,ct,xt+bi,He,Ke,_e,ke):k.copyTexSubImage2D(Ve,X,Ge,ct,xt+bi,He,Ke,_e,ke);pe.bindFramebuffer(k.READ_FRAMEBUFFER,null),pe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else yt?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Ve,X,Ge,ct,xt,_e,ke,Be,on,dt,_t.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Ve,X,Ge,ct,xt,_e,ke,Be,on,_t.data):k.texSubImage3D(Ve,X,Ge,ct,xt,_e,ke,Be,on,dt,_t):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,Ge,ct,_e,ke,on,dt,_t.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,Ge,ct,_t.width,_t.height,on,_t.data):k.texSubImage2D(k.TEXTURE_2D,X,Ge,ct,_e,ke,on,dt,_t);k.pixelStorei(k.UNPACK_ROW_LENGTH,$n),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ft),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Tn),k.pixelStorei(k.UNPACK_SKIP_ROWS,ss),k.pixelStorei(k.UNPACK_SKIP_IMAGES,un),X===0&&W.generateMipmaps&&k.generateMipmap(Ve),pe.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Y=null,Z=null,X=0){return R.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,Z=arguments[1]||null,R=arguments[2],W=arguments[3],X=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,Y,Z,X)},this.initRenderTarget=function(R){Ce.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),pe.unbindTexture()},this.resetState=function(){T=0,S=0,A=null,pe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}class Cs{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new Cs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jd extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new I;class El{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new El(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Zh=new I,Kh=new ht,$h=new ht,Pv=new I,Jh=new Xe,uo=new I,Ca=new qn,Qh=new Xe,Pa=new Hs;class Dv extends ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jl,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingBox.expandByPoint(uo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,uo),this.boundingSphere.expandByPoint(uo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(i),e.ray.intersectsSphere(Ca)!==!1&&(Qh.copy(i).invert(),Pa.copy(e.ray).applyMatrix4(Qh),!(this.boundingBox!==null&&Pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Kh.fromBufferAttribute(i.attributes.skinIndex,e),$h.fromBufferAttribute(i.attributes.skinWeight,e),Zh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=$h.getComponent(r);if(o!==0){const a=Kh.getComponent(r);Jh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Pv.copy(Zh).applyMatrix4(Jh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class qd extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vs extends Ot{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Yt,h=Yt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eu=new Xe,Lv=new Xe;class Al{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Lv;eu.multiplyMatrices(a,t[r]),eu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Al(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vs(t,e,e,ln,cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new qd),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Xc extends jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xs=new Xe,tu=new Xe,fo=[],nu=new mn,Iv=new Xe,tr=new ae,nr=new qn;class Rl extends ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Iv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),nu.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(nu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),nr.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xs),tu.multiplyMatrices(n,xs),tr.matrixWorld=tu,tr.raycast(e,fo);for(let o=0,a=fo.length;o<a;o++){const c=fo[o];c.instanceId=r,c.object=this,t.push(c)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vs(new Float32Array(i*this.count),i,this.count,gl,cn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Yd extends Nn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oo=new I,zo=new I,iu=new Xe,ir=new Hs,po=new qn,Da=new I,su=new I;class Cl extends wt{constructor(e=new Gt,t=new Yd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Oo.fromBufferAttribute(t,i-1),zo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Oo.distanceTo(zo);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;iu.copy(i).invert(),ir.copy(e.ray).applyMatrix4(iu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=f,m=g-1;b<m;b+=l){const p=h.getX(b),_=h.getX(b+1),v=mo(this,e,ir,c,p,_);v&&t.push(v)}if(this.isLineLoop){const b=h.getX(g-1),m=h.getX(f),p=mo(this,e,ir,c,b,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let b=f,m=g-1;b<m;b+=l){const p=mo(this,e,ir,c,b,b+1);p&&t.push(p)}if(this.isLineLoop){const b=mo(this,e,ir,c,g-1,f);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mo(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Oo.fromBufferAttribute(o,i),zo.fromBufferAttribute(o,r),t.distanceSqToSegment(Oo,zo,Da,su)>n)return;Da.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Da);if(!(c<e.near||c>e.far))return{distance:c,point:su.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const ru=new I,ou=new I;class kv extends Cl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ru.fromBufferAttribute(t,i),ou.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ru.distanceTo(ou);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nv extends Cl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zd extends Nn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const au=new Xe,jc=new Hs,go=new qn,bo=new I;class Uv extends wt{constructor(e=new Gt,t=new Zd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;au.copy(i).invert(),jc.copy(e.ray).applyMatrix4(au);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,b=f;g<b;g++){const m=l.getX(g);bo.fromBufferAttribute(u,m),cu(bo,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,b=f;g<b;g++)bo.fromBufferAttribute(u,g),cu(bo,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function cu(s,e,t,n,i,r,o){const a=jc.distanceSqToPoint(s);if(a<t){const c=new I;jc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class jo extends Ot{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new se:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,i=[],r=[],o=[],a=new I,c=new Xe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(kt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(kt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pl extends Yn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new se){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fv extends Pl{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const vo=new I,La=new Dl,Ia=new Dl,ka=new Dl;class Ov extends Yn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(vo.subVectors(i[0],i[1]).add(i[0]),l=vo);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(vo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),La.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,m),Ia.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,m),ka.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(La.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ia.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ka.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(La.calc(c),Ia.calc(c),ka.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lu(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function zv(s,e){const t=1-s;return t*t*e}function Bv(s,e){return 2*(1-s)*s*e}function Hv(s,e){return s*s*e}function _r(s,e,t,n){return zv(s,e)+Bv(s,t)+Hv(s,n)}function Gv(s,e){const t=1-s;return t*t*t*e}function Vv(s,e){const t=1-s;return 3*t*t*s*e}function Wv(s,e){return 3*(1-s)*s*s*e}function Xv(s,e){return s*s*s*e}function yr(s,e,t,n,i){return Gv(s,e)+Vv(s,t)+Wv(s,n)+Xv(s,i)}class Kd extends Yn{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(e,i.x,r.x,o.x,a.x),yr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jv extends Yn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(yr(e,i.x,r.x,o.x,a.x),yr(e,i.y,r.y,o.y,a.y),yr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $d extends Yn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qv extends Yn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jd extends Yn{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(_r(e,i.x,r.x,o.x),_r(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yv extends Yn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(_r(e,i.x,r.x,o.x),_r(e,i.y,r.y,o.y),_r(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qd extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(lu(a,c.x,l.x,h.x,u.x),lu(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var qc=Object.freeze({__proto__:null,ArcCurve:Fv,CatmullRomCurve3:Ov,CubicBezierCurve:Kd,CubicBezierCurve3:jv,EllipseCurve:Pl,LineCurve:$d,LineCurve3:qv,QuadraticBezierCurve:Jd,QuadraticBezierCurve3:Yv,SplineCurve:Qd});class Zv extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new qc[i.type]().fromJSON(i))}return this}}class hu extends Zv{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new $d(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Jd(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Kd(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Qd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Pl(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qo extends Gt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new I,h=new se;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rn extends Gt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const b=[],m=n/2;let p=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function _(){const x=new I,E=new I;let T=0;const S=(t-e)/n;for(let A=0;A<=r;A++){const M=[],y=A/r,C=y*(t-e)+e;for(let D=0;D<=i;D++){const L=D/i,F=L*c+a,O=Math.sin(F),U=Math.cos(F);E.x=C*O,E.y=-y*n+m,E.z=C*U,u.push(E.x,E.y,E.z),x.set(O,S,U).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-y),M.push(g++)}b.push(M)}for(let A=0;A<i;A++)for(let M=0;M<r;M++){const y=b[M][A],C=b[M+1][A],D=b[M+1][A+1],L=b[M][A+1];(e>0||M!==0)&&(h.push(y,C,L),T+=3),(t>0||M!==r-1)&&(h.push(C,D,L),T+=3)}l.addGroup(p,T,0),p+=T}function v(x){const E=g,T=new se,S=new I;let A=0;const M=x===!0?e:t,y=x===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const C=g;for(let D=0;D<=i;D++){const F=D/i*c+a,O=Math.cos(F),U=Math.sin(F);S.x=M*U,S.y=m*y,S.z=M*O,u.push(S.x,S.y,S.z),d.push(0,y,0),T.x=O*.5+.5,T.y=U*.5*y+.5,f.push(T.x,T.y),g++}for(let D=0;D<i;D++){const L=E+D,F=C+D;x===!0?h.push(F,F+1,L):h.push(F+1,F,L),A+=3}l.addGroup(p,A,x===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ws extends hu{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new hu().fromJSON(i))}return this}}const Kv={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=ef(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=tx(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Rr(r,o,t,a,c,f,0),o}};function ef(s,e,t,n,i){let r,o;if(i===dx(s,e,t,n)>0)for(r=e;r<t;r+=n)o=uu(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=uu(r,s[r],s[r+1],o);return o&&Yo(o,o.next)&&(Pr(o),o=o.next),o}function Ki(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Yo(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Pr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Rr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&ox(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Jv(s,n,i,r):$v(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Pr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Qv(Ki(s),e,t),Rr(s,e,t,n,i,r,2)):o===2&&ex(s,e,t,n,i,r):Rr(Ki(s),e,t,n,i,r,1);break}}}function $v(s){const e=s.prev,t=s,n=s.next;if(Rt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ss(i,a,r,c,o,l,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jv(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Rt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,b=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Yc(f,g,e,t,n),_=Yc(b,m,e,t,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=p&&x&&x.z<=_;){if(v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ss(a,h,c,u,l,d,v.x,v.y)&&Rt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=b&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ss(a,h,c,u,l,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ss(a,h,c,u,l,d,v.x,v.y)&&Rt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=b&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ss(a,h,c,u,l,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Qv(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Yo(i,r)&&tf(i,n,n.next,r)&&Cr(i,r)&&Cr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Pr(n),Pr(n.next),n=s=r),n=n.next}while(n!==s);return Ki(n)}function ex(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lx(o,a)){let c=nf(o,a);o=Ki(o,o.next),c=Ki(c,c.next),Rr(o,e,t,n,i,r,0),Rr(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function tx(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=ef(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(cx(l));for(i.sort(nx),r=0;r<i.length;r++)t=ix(i[r],t);return t}function nx(s,e){return s.x-e.x}function ix(s,e){const t=sx(s,e);if(!t)return e;const n=nf(t,s);return Ki(n,n.next),Ki(t,t.next)}function sx(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ss(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Cr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&rx(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function rx(s,e){return Rt(s.prev,s,e.prev)<0&&Rt(e.next,s,s.next)<0}function ox(s,e,t,n){let i=s;do i.z===0&&(i.z=Yc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ax(i)}function ax(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Yc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function cx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ss(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function lx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!hx(s,e)&&(Cr(s,e)&&Cr(e,s)&&ux(s,e)&&(Rt(s.prev,s,e.prev)||Rt(s,e.prev,e))||Yo(s,e)&&Rt(s.prev,s,s.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Yo(s,e){return s.x===e.x&&s.y===e.y}function tf(s,e,t,n){const i=_o(Rt(s,e,t)),r=_o(Rt(s,e,n)),o=_o(Rt(t,n,s)),a=_o(Rt(t,n,e));return!!(i!==r&&o!==a||i===0&&xo(s,t,e)||r===0&&xo(s,n,e)||o===0&&xo(t,s,n)||a===0&&xo(t,e,n))}function xo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function _o(s){return s>0?1:s<0?-1:0}function hx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&tf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Cr(s,e){return Rt(s.prev,s,s.next)<0?Rt(s,e,s.next)>=0&&Rt(s,s.prev,e)>=0:Rt(s,e,s.prev)<0||Rt(s,s.next,e)<0}function ux(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function nf(s,e){const t=new Zc(s.i,s.x,s.y),n=new Zc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uu(s,e,t,n){const i=new Zc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Pr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Zc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Ci{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Ci.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];du(e),fu(n,e);let o=e.length;t.forEach(du);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,fu(n,t[c]);const a=Kv.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function du(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function fu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Zo extends Gt{constructor(e=new Ws([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ut(i,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:fx;let v,x=!1,E,T,S,A;p&&(v=p.getSpacedPoints(h),x=!0,d=!1,E=p.computeFrenetFrames(h,!1),T=new I,S=new I,A=new I),d||(m=0,f=0,g=0,b=0);const M=a.extractPoints(l);let y=M.shape;const C=M.holes;if(!Ci.isClockWise(y)){y=y.reverse();for(let $=0,oe=C.length;$<oe;$++){const k=C[$];Ci.isClockWise(k)&&(C[$]=k.reverse())}}const L=Ci.triangulateShape(y,C),F=y;for(let $=0,oe=C.length;$<oe;$++){const k=C[$];y=y.concat(k)}function O($,oe,k){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(oe,k)}const U=y.length,z=L.length;function G($,oe,k){let Ae,le,ye;const pe=$.x-oe.x,Fe=$.y-oe.y,Ce=k.x-$.x,P=k.y-$.y,w=pe*pe+Fe*Fe,H=pe*P-Fe*Ce;if(Math.abs(H)>Number.EPSILON){const ee=Math.sqrt(w),ce=Math.sqrt(Ce*Ce+P*P),te=oe.x-Fe/ee,Le=oe.y+pe/ee,xe=k.x-P/ce,Se=k.y+Ce/ce,Ye=((xe-te)*P-(Se-Le)*Ce)/(pe*P-Fe*Ce);Ae=te+pe*Ye-$.x,le=Le+Fe*Ye-$.y;const fe=Ae*Ae+le*le;if(fe<=2)return new se(Ae,le);ye=Math.sqrt(fe/2)}else{let ee=!1;pe>Number.EPSILON?Ce>Number.EPSILON&&(ee=!0):pe<-Number.EPSILON?Ce<-Number.EPSILON&&(ee=!0):Math.sign(Fe)===Math.sign(P)&&(ee=!0),ee?(Ae=-Fe,le=pe,ye=Math.sqrt(w)):(Ae=pe,le=Fe,ye=Math.sqrt(w/2))}return new se(Ae/ye,le/ye)}const j=[];for(let $=0,oe=F.length,k=oe-1,Ae=$+1;$<oe;$++,k++,Ae++)k===oe&&(k=0),Ae===oe&&(Ae=0),j[$]=G(F[$],F[k],F[Ae]);const ne=[];let ue,Ee=j.concat();for(let $=0,oe=C.length;$<oe;$++){const k=C[$];ue=[];for(let Ae=0,le=k.length,ye=le-1,pe=Ae+1;Ae<le;Ae++,ye++,pe++)ye===le&&(ye=0),pe===le&&(pe=0),ue[Ae]=G(k[Ae],k[ye],k[pe]);ne.push(ue),Ee=Ee.concat(ue)}for(let $=0;$<m;$++){const oe=$/m,k=f*Math.cos(oe*Math.PI/2),Ae=g*Math.sin(oe*Math.PI/2)+b;for(let le=0,ye=F.length;le<ye;le++){const pe=O(F[le],j[le],Ae);Q(pe.x,pe.y,-k)}for(let le=0,ye=C.length;le<ye;le++){const pe=C[le];ue=ne[le];for(let Fe=0,Ce=pe.length;Fe<Ce;Fe++){const P=O(pe[Fe],ue[Fe],Ae);Q(P.x,P.y,-k)}}}const K=g+b;for(let $=0;$<U;$++){const oe=d?O(y[$],Ee[$],K):y[$];x?(S.copy(E.normals[0]).multiplyScalar(oe.x),T.copy(E.binormals[0]).multiplyScalar(oe.y),A.copy(v[0]).add(S).add(T),Q(A.x,A.y,A.z)):Q(oe.x,oe.y,0)}for(let $=1;$<=h;$++)for(let oe=0;oe<U;oe++){const k=d?O(y[oe],Ee[oe],K):y[oe];x?(S.copy(E.normals[$]).multiplyScalar(k.x),T.copy(E.binormals[$]).multiplyScalar(k.y),A.copy(v[$]).add(S).add(T),Q(A.x,A.y,A.z)):Q(k.x,k.y,u/h*$)}for(let $=m-1;$>=0;$--){const oe=$/m,k=f*Math.cos(oe*Math.PI/2),Ae=g*Math.sin(oe*Math.PI/2)+b;for(let le=0,ye=F.length;le<ye;le++){const pe=O(F[le],j[le],Ae);Q(pe.x,pe.y,u+k)}for(let le=0,ye=C.length;le<ye;le++){const pe=C[le];ue=ne[le];for(let Fe=0,Ce=pe.length;Fe<Ce;Fe++){const P=O(pe[Fe],ue[Fe],Ae);x?Q(P.x,P.y+v[h-1].y,v[h-1].x+k):Q(P.x,P.y,u+k)}}}N(),V();function N(){const $=i.length/3;if(d){let oe=0,k=U*oe;for(let Ae=0;Ae<z;Ae++){const le=L[Ae];de(le[2]+k,le[1]+k,le[0]+k)}oe=h+m*2,k=U*oe;for(let Ae=0;Ae<z;Ae++){const le=L[Ae];de(le[0]+k,le[1]+k,le[2]+k)}}else{for(let oe=0;oe<z;oe++){const k=L[oe];de(k[2],k[1],k[0])}for(let oe=0;oe<z;oe++){const k=L[oe];de(k[0]+U*h,k[1]+U*h,k[2]+U*h)}}n.addGroup($,i.length/3-$,0)}function V(){const $=i.length/3;let oe=0;q(F,oe),oe+=F.length;for(let k=0,Ae=C.length;k<Ae;k++){const le=C[k];q(le,oe),oe+=le.length}n.addGroup($,i.length/3-$,1)}function q($,oe){let k=$.length;for(;--k>=0;){const Ae=k;let le=k-1;le<0&&(le=$.length-1);for(let ye=0,pe=h+m*2;ye<pe;ye++){const Fe=U*ye,Ce=U*(ye+1),P=oe+Ae+Fe,w=oe+le+Fe,H=oe+le+Ce,ee=oe+Ae+Ce;be(P,w,H,ee)}}}function Q($,oe,k){c.push($),c.push(oe),c.push(k)}function de($,oe,k){ge($),ge(oe),ge(k);const Ae=i.length/3,le=_.generateTopUV(n,i,Ae-3,Ae-2,Ae-1);ze(le[0]),ze(le[1]),ze(le[2])}function be($,oe,k,Ae){ge($),ge(oe),ge(Ae),ge(oe),ge(k),ge(Ae);const le=i.length/3,ye=_.generateSideWallUV(n,i,le-6,le-3,le-2,le-1);ze(ye[0]),ze(ye[1]),ze(ye[3]),ze(ye[1]),ze(ye[2]),ze(ye[3])}function ge($){i.push(c[$*3+0]),i.push(c[$*3+1]),i.push(c[$*3+2])}function ze($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return px(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new qc[i.type]().fromJSON(i)),new Zo(n,e.options)}}const fx={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new se(r,o),new se(a,c),new se(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],b=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new se(o,1-c),new se(l,1-u),new se(d,1-g),new se(b,1-p)]:[new se(a,1-c),new se(h,1-u),new se(f,1-g),new se(m,1-p)]}};function px(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Bo extends Gt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new I,g=new se;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let b=0;b<i;b++){const m=b*(n+1);for(let p=0;p<n;p++){const _=p+m,v=_,x=_+n+1,E=_+n+2,T=_+1;a.push(v,x,T),a.push(x,E,T)}}this.setIndex(a),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ho extends Gt{constructor(e=new Ws([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ut(i,3)),this.setAttribute("normal",new ut(r,3)),this.setAttribute("uv",new ut(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Ci.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];Ci.isClockWise(_)===!0&&(g[m]=_.reverse())}const b=Ci.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=b.length;m<p;m++){const _=b[m],v=_[0]+u,x=_[1]+u,E=_[2]+u;n.push(v,x,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return mx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new Ho(n,e.curveSegments)}}function mx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class pi extends Gt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){const _=[],v=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const T=E/t;u.x=-e*Math.cos(i+T*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(T+x,1-v),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){const v=h[p][_+1],x=h[p][_],E=h[p+1][_],T=h[p+1][_+1];(p!==0||o>0)&&f.push(v,x,T),(p!==n-1||c<Math.PI)&&f.push(x,E,T)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(b,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ko extends Gt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const b=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const b=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,_=(i+1)*f+g;o.push(b,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gx extends Dt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ot extends Nn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Et extends ot{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bx extends Nn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function yo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function vx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xx(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function pu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function sf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Or{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _x extends Or{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ql,endingEnd:Ql}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case eh:r=e,a=2*t-n;break;case th:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case eh:o=e,c=2*n-t;break;case th:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,_=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*b+.5*g,x=f*m-f*b;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+_*o[l+E]+v*o[c+E]+x*o[u+E];return r}}class yx extends Or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Mx extends Or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yo(t,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yo(e.times,Array),values:yo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _x(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Er:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&vx(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ta,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Er;class Xs extends Zn{constructor(e,t,n){super(e,t,n)}}Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Tr;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class rf extends Zn{}rf.prototype.ValueTypeName="color";class Fs extends Zn{}Fs.prototype.ValueTypeName="number";class wx extends Or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Mn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Os extends Zn{InterpolantFactoryMethodLinear(e){return new wx(this.times,this.values,this.getValueSize(),e)}}Os.prototype.ValueTypeName="quaternion";Os.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends Zn{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Tr;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends Zn{}zs.prototype.ValueTypeName="vector";class Sx{constructor(e="",t=-1,n=[],i=Gf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ex(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Zn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=xx(c);c=pu(c,1,h),l=pu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Fs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,b){if(f.length!==0){const m=[],p=[];sf(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(const b in f){const m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){const v=d[g];m.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new Fs(".morphTargetInfluence["+b+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(zs,f+".position",d,"pos",i),n(Os,f+".quaternion",d,"rot",i),n(zs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Tx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fs;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return rf;case"quaternion":return Os;case"bool":case"boolean":return Xs;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ex(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tx(s.type);if(s.times===void 0){const t=[],n=[];sf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ei={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class of{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Ax=new of;class Pi{constructor(e){this.manager=e!==void 0?e:Ax,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Pi.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii={};class Rx extends Error{constructor(e,t){super(e),this.response=t}}class Dr extends Pi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ei.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ii[e]!==void 0){ii[e].push({onLoad:t,onProgress:n,onError:i});return}ii[e]=[],ii[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ii[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let b=0;const m=new ReadableStream({start(p){_();function _(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{b+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let T=0,S=h.length;T<S;T++){const A=h[T];A.onProgress&&A.onProgress(E)}p.enqueue(x),_()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Rx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ei.add(e,l);const h=ii[e];delete ii[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ii[e];if(h===void 0)throw this.manager.itemError(e),l;delete ii[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cx extends Pi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ei.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ar("img");function c(){h(),Ei.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Px extends Pi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Vs,a=new Dr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Vn,o.wrapT=l.wrapT!==void 0?l.wrapT:Vn,o.magFilter=l.magFilter!==void 0?l.magFilter:Lt,o.minFilter=l.minFilter!==void 0?l.minFilter:Lt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=kn),l.mipmapCount===1&&(o.minFilter=Lt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class $o extends Pi{constructor(e){super(e)}load(e,t,n,i){const r=new Ot,o=new Cx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class zr extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Kc extends zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Na=new Xe,mu=new I,gu=new I;class Ll{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dx extends Ll{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Il extends zr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bu=new Xe,sr=new I,Ua=new I;class Lx extends Ll{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(sr),Ua.copy(n.position),Ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ua),n.updateMatrixWorld(),i.makeTranslation(-sr.x,-sr.y,-sr.z),bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu)}}class Un extends zr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ix extends Ll{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lr extends zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Ix}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kx extends zr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Nx extends Pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ei.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ei.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ei.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(e,c),r.manager.itemStart(e)}}class Ux{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vu(){return performance.now()}const kl="\\[\\]\\.:\\/",Fx=new RegExp("["+kl+"]","g"),Nl="[^"+kl+"]",Ox="[^"+kl.replace("\\.","")+"]",zx=/((?:WC+[\/:])*)/.source.replace("WC",Nl),Bx=/(WCOD+)?/.source.replace("WCOD",Ox),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nl),Gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nl),Vx=new RegExp("^"+zx+Bx+Hx+Gx+"$"),Wx=["material","materials","bones","map"];class Xx{constructor(e,t,n){const i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class gt{constructor(e,t,n){this.path=t,this.parsedPath=n||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,n):new gt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fx,"")}static parseTrackName(e){const t=Vx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=Xx;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const xu=new Xe;class _u{constructor(e,t,n=0,i=1/0){this.ray=new Hs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xu),this}intersectObject(e,t=!0,n=[]){return $c(e,this,n,t),n.sort(yu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)$c(e[i],this,n,t);return n.sort(yu),n}}function yu(s,e){return s.distance-e.distance}function $c(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)$c(r[o],e,t,!0)}}class Jc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jx extends Qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);class Bs extends wt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new se(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const _s=new I,Mu=new Xe,wu=new Xe,Su=new I,Tu=new I;class qx{constructor(e={}){const t=this;let n,i,r,o;const a={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:i}},this.render=function(g,b){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Mu.copy(b.matrixWorldInverse),wu.multiplyMatrices(b.projectionMatrix,Mu),h(g,g,b),f(g)},this.setSize=function(g,b){n=g,i=b,r=n/2,o=i/2,c.style.width=g+"px",c.style.height=b+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let b=0,m=g.children.length;b<m;b++)l(g.children[b])}function h(g,b,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){_s.setFromMatrixPosition(g.matrixWorld),_s.applyMatrix4(wu);const p=_s.z>=-1&&_s.z<=1&&g.layers.test(m.layers)===!0,_=g.element;_.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(t,b,m),_.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(_s.x*r+r)+"px,"+(-_s.y*o+o)+"px)",_.parentNode!==c&&c.appendChild(_),g.onAfterRender(t,b,m));const v={distanceToCameraSquared:u(m,g)};a.objects.set(g,v)}for(let p=0,_=g.children.length;p<_;p++)h(g.children[p],b,m)}function u(g,b){return Su.setFromMatrixPosition(g.matrixWorld),Tu.setFromMatrixPosition(b.matrixWorld),Su.distanceToSquared(Tu)}function d(g){const b=[];return g.traverseVisible(function(m){m.isCSS2DObject&&b.push(m)}),b}function f(g){const b=d(g).sort(function(p,_){if(p.renderOrder!==_.renderOrder)return _.renderOrder-p.renderOrder;const v=a.objects.get(p).distanceToCameraSquared,x=a.objects.get(_).distanceToCameraSquared;return v-x}),m=b.length;for(let p=0,_=b.length;p<_;p++)b[p].element.style.zIndex=m-p}}}const Eu={type:"change"},Ul={type:"start"},af={type:"end"},Mo=new Hs,Au=new Ti,Yx=Math.cos(70*Pd.DEG2RAD),Nt=new I,an=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fa=1e-6;class Zx extends jx{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:Gn.ROTATE,TWO:Gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Mn,this._lastTargetPosition=new I,this._quat=new Mn().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jc,this._sphericalDelta=new Jc,this._scale=1,this._panOffset=new I,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new I,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$x.bind(this),this._onPointerDown=Kx.bind(this),this._onPointerUp=Jx.bind(this),this._onContextMenu=r_.bind(this),this._onMouseWheel=t_.bind(this),this._onKeyDown=n_.bind(this),this._onTouchStart=i_.bind(this),this._onTouchMove=s_.bind(this),this._onMouseDown=Qx.bind(this),this._onMouseMove=e_.bind(this),this._interceptControlDown=o_.bind(this),this._interceptControlUp=a_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Eu),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),i<-Math.PI?i+=an:i>Math.PI&&(i-=an),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Nt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Mo.origin.copy(this.object.position),Mo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mo.direction))<Yx?this.object.lookAt(this.target):(Au.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mo.intersectPlane(Au,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Fa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fa||this._lastTargetPosition.distanceToSquared(this.target)>Fa?(this.dispatchEvent(Eu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Nt.copy(i).sub(this.target);let r=Nt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Kx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function $x(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Jx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(af),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Qx(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=bt.DOLLY;break;case Ts.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}break;case Ts.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Ul)}function e_(s){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function t_(s){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(s.preventDefault(),this.dispatchEvent(Ul),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(af))}function n_(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function i_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Gn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=bt.TOUCH_ROTATE;break;case Gn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Gn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=bt.TOUCH_DOLLY_PAN;break;case Gn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Ul)}function s_(s){switch(this._trackPointer(s),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=bt.NONE}}function r_(s){this.enabled!==!1&&s.preventDefault()}function o_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function a_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class c_ extends jd{constructor(){super();const e=new ve;e.deleteAttribute("uv");const t=new ot({side:Xt}),n=new ot,i=new Un(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new ae(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ae(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ae(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new ae(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new ae(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new ae(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new ae(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new ae(e,ys(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new ae(e,ys(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new ae(e,ys(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const b=new ae(e,ys(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const m=new ae(e,ys(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new ae(e,ys(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ys(s){const e=new Ct;return e.color.setScalar(s),e}class Jo extends Px{constructor(e){super(e),this.type=Ft}parse(e){const o=function(A,M){switch(A){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},h=`
`,u=function(A,M,y){M=M||1024;let D=A.pos,L=-1,F=0,O="",U=String.fromCharCode.apply(null,new Uint16Array(A.subarray(D,D+128)));for(;0>(L=U.indexOf(h))&&F<M&&D<A.byteLength;)O+=U,F+=U.length,D+=128,U+=String.fromCharCode.apply(null,new Uint16Array(A.subarray(D,D+128)));return-1<L?(A.pos+=F+L+1,O+U.slice(0,L)):!1},d=function(A){const M=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let O,U;for((A.pos>=A.byteLength||!(O=u(A)))&&o(1,"no header found"),(U=O.match(M))||o(3,"bad initial token"),F.valid|=1,F.programtype=U[1],F.string+=O+`
`;O=u(A),O!==!1;){if(F.string+=O+`
`,O.charAt(0)==="#"){F.comments+=O+`
`;continue}if((U=O.match(y))&&(F.gamma=parseFloat(U[1])),(U=O.match(C))&&(F.exposure=parseFloat(U[1])),(U=O.match(D))&&(F.valid|=2,F.format=U[1]),(U=O.match(L))&&(F.valid|=4,F.height=parseInt(U[1],10),F.width=parseInt(U[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},f=function(A,M,y){const C=M;if(C<8||C>32767||A[0]!==2||A[1]!==2||A[2]&128)return new Uint8Array(A);C!==(A[2]<<8|A[3])&&o(3,"wrong scanline width");const D=new Uint8Array(4*M*y);D.length||o(4,"unable to allocate buffer space");let L=0,F=0;const O=4*C,U=new Uint8Array(4),z=new Uint8Array(O);let G=y;for(;G>0&&F<A.byteLength;){F+4>A.byteLength&&o(1),U[0]=A[F++],U[1]=A[F++],U[2]=A[F++],U[3]=A[F++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=C)&&o(3,"bad rgbe scanline format");let j=0,ne;for(;j<O&&F<A.byteLength;){ne=A[F++];const Ee=ne>128;if(Ee&&(ne-=128),(ne===0||j+ne>O)&&o(3,"bad scanline data"),Ee){const K=A[F++];for(let N=0;N<ne;N++)z[j++]=K}else z.set(A.subarray(F,F+ne),j),j+=ne,F+=ne}const ue=C;for(let Ee=0;Ee<ue;Ee++){let K=0;D[L]=z[Ee+K],K+=C,D[L+1]=z[Ee+K],K+=C,D[L+2]=z[Ee+K],K+=C,D[L+3]=z[Ee+K],L+=4}G--}return D},g=function(A,M,y,C){const D=A[M+3],L=Math.pow(2,D-128)/255;y[C+0]=A[M+0]*L,y[C+1]=A[M+1]*L,y[C+2]=A[M+2]*L,y[C+3]=1},b=function(A,M,y,C){const D=A[M+3],L=Math.pow(2,D-128)/255;y[C+0]=Jr.toHalfFloat(Math.min(A[M+0]*L,65504)),y[C+1]=Jr.toHalfFloat(Math.min(A[M+1]*L,65504)),y[C+2]=Jr.toHalfFloat(Math.min(A[M+2]*L,65504)),y[C+3]=Jr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),_=p.width,v=p.height,x=f(m.subarray(m.pos),_,v);let E,T,S;switch(this.type){case cn:S=x.length/4;const A=new Float32Array(S*4);for(let y=0;y<S;y++)g(x,y*4,A,y*4);E=A,T=cn;break;case Ft:S=x.length/4;const M=new Uint16Array(S*4);for(let y=0;y<S;y++)b(x,y*4,M,y*4);E=M,T=Ft;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:_,height:v,data:E,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case cn:case Ft:o.colorSpace=zt,o.minFilter=Lt,o.magFilter=Lt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}const wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const l_=new Wo(-1,1,1,-1,0,1);class h_ extends Gt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}const u_=new h_;class Qo{constructor(e){this._mesh=new ae(u_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,l_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class d_ extends ts{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=li.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ru extends ts{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class f_ extends ts{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class p_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ft}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new d_(wr),this.copyPass.material.blending=Ut,this.clock=new Ux}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ru!==void 0&&(o instanceof Ru?n=!0:o instanceof f_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class m_ extends ts{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const wo={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new se},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Xe},cameraProjectionMatrixInverse:{value:new Xe},cameraWorldMatrix:{value:new Xe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},So={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Oa={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function g_(s=5){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=b_(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],c=2*Math.PI*a/n,l=new I(Math.cos(c),Math.sin(c),0).normalize();i[o*4]=(l.x*.5+.5)*255,i[o*4+1]=(l.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}const r=new Vs(i,e,e);return r.wrapS=qt,r.wrapT=qt,r.needsUpdate=!0,r}function b_(s){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0);let i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}const To={defines:{SAMPLES:16,SAMPLE_VECTORS:cf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new se},cameraProjectionMatrixInverse:{value:new Xe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function cf(s,e,t){const n=v_(s,e,t);let i="vec3[SAMPLES](";for(let r=0;r<s;r++){const o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function v_(s,e,t){const n=[];for(let i=0;i<s;i++){const r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new I(Math.cos(r),Math.sin(r),o))}return n}class x_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,g=e-d,b=t-f;let m,p;g>b?(m=1,p=0):(m=0,p=1);const _=g-m+h,v=b-p+h,x=g-1+2*h,E=b-1+2*h,T=c&255,S=l&255,A=this.perm[T+this.perm[S]]%12,M=this.perm[T+m+this.perm[S+p]]%12,y=this.perm[T+1+this.perm[S+1]]%12;let C=.5-g*g-b*b;C<0?n=0:(C*=C,n=C*C*this.dot(this.grad3[A],g,b));let D=.5-_*_-v*v;D<0?i=0:(D*=D,i=D*D*this.dot(this.grad3[M],_,v));let L=.5-x*x-E*E;return L<0?r=0:(L*=L,r=L*L*this.dot(this.grad3[y],x,E)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,g=(h+u+d)*f,b=h-g,m=u-g,p=d-g,_=e-b,v=t-m,x=n-p;let E,T,S,A,M,y;_>=v?v>=x?(E=1,T=0,S=0,A=1,M=1,y=0):_>=x?(E=1,T=0,S=0,A=1,M=0,y=1):(E=0,T=0,S=1,A=1,M=0,y=1):v<x?(E=0,T=0,S=1,A=0,M=1,y=1):_<x?(E=0,T=1,S=0,A=0,M=1,y=1):(E=0,T=1,S=0,A=1,M=1,y=0);const C=_-E+f,D=v-T+f,L=x-S+f,F=_-A+2*f,O=v-M+2*f,U=x-y+2*f,z=_-1+3*f,G=v-1+3*f,j=x-1+3*f,ne=h&255,ue=u&255,Ee=d&255,K=this.perm[ne+this.perm[ue+this.perm[Ee]]]%12,N=this.perm[ne+E+this.perm[ue+T+this.perm[Ee+S]]]%12,V=this.perm[ne+A+this.perm[ue+M+this.perm[Ee+y]]]%12,q=this.perm[ne+1+this.perm[ue+1+this.perm[Ee+1]]]%12;let Q=.6-_*_-v*v-x*x;Q<0?i=0:(Q*=Q,i=Q*Q*this.dot3(this.grad3[K],_,v,x));let de=.6-C*C-D*D-L*L;de<0?r=0:(de*=de,r=de*de*this.dot3(this.grad3[N],C,D,L));let be=.6-F*F-O*O-U*U;be<0?o=0:(be*=be,o=be*be*this.dot3(this.grad3[V],F,O,U));let ge=.6-z*z-G*G-j*j;return ge<0?a=0:(ge*=ge,a=ge*ge*this.dot3(this.grad3[q],z,G,j)),32*(i+r+o+a)}noise4d(e,t,n,i){const r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,f,g;const b=(e+t+n+i)*c,m=Math.floor(e+b),p=Math.floor(t+b),_=Math.floor(n+b),v=Math.floor(i+b),x=(m+p+_+v)*l,E=m-x,T=p-x,S=_-x,A=v-x,M=e-E,y=t-T,C=n-S,D=i-A,L=M>y?32:0,F=M>C?16:0,O=y>C?8:0,U=M>D?4:0,z=y>D?2:0,G=C>D?1:0,j=L+F+O+U+z+G,ne=o[j][0]>=3?1:0,ue=o[j][1]>=3?1:0,Ee=o[j][2]>=3?1:0,K=o[j][3]>=3?1:0,N=o[j][0]>=2?1:0,V=o[j][1]>=2?1:0,q=o[j][2]>=2?1:0,Q=o[j][3]>=2?1:0,de=o[j][0]>=1?1:0,be=o[j][1]>=1?1:0,ge=o[j][2]>=1?1:0,ze=o[j][3]>=1?1:0,$=M-ne+l,oe=y-ue+l,k=C-Ee+l,Ae=D-K+l,le=M-N+2*l,ye=y-V+2*l,pe=C-q+2*l,Fe=D-Q+2*l,Ce=M-de+3*l,P=y-be+3*l,w=C-ge+3*l,H=D-ze+3*l,ee=M-1+4*l,ce=y-1+4*l,te=C-1+4*l,Le=D-1+4*l,xe=m&255,Se=p&255,Ye=_&255,fe=v&255,Ne=a[xe+a[Se+a[Ye+a[fe]]]]%32,We=a[xe+ne+a[Se+ue+a[Ye+Ee+a[fe+K]]]]%32,je=a[xe+N+a[Se+V+a[Ye+q+a[fe+Q]]]]%32,Ie=a[xe+de+a[Se+be+a[Ye+ge+a[fe+ze]]]]%32,tt=a[xe+1+a[Se+1+a[Ye+1+a[fe+1]]]]%32;let Ze=.6-M*M-y*y-C*C-D*D;Ze<0?h=0:(Ze*=Ze,h=Ze*Ze*this.dot4(r[Ne],M,y,C,D));let at=.6-$*$-oe*oe-k*k-Ae*Ae;at<0?u=0:(at*=at,u=at*at*this.dot4(r[We],$,oe,k,Ae));let B=.6-le*le-ye*ye-pe*pe-Fe*Fe;B<0?d=0:(B*=B,d=B*B*this.dot4(r[je],le,ye,pe,Fe));let Me=.6-Ce*Ce-P*P-w*w-H*H;Me<0?f=0:(Me*=Me,f=Me*Me*this.dot4(r[Ie],Ce,P,w,H));let J=.6-ee*ee-ce*ce-te*te-Le*Le;return J<0?g=0:(J*=J,g=J*J*this.dot4(r[tt],ee,ce,te,Le)),27*(h+u+d+f+g)}}class Pn extends ts{constructor(e,t,n,i,r,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=g_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Wt(this.width,this.height,{type:Ft}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Dt({defines:Object.assign({},wo.defines),uniforms:li.clone(wo.uniforms),vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader,blending:Ut,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new bx,this.normalMaterial.blending=Ut,this.pdMaterial=new Dt({defines:Object.assign({},To.defines),uniforms:li.clone(To.uniforms),vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Dt({defines:Object.assign({},So.defines),uniforms:li.clone(So.uniforms),vertexShader:So.vertexShader,fragmentShader:So.fragmentShader,blending:Ut}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Dt({uniforms:li.clone(wr.uniforms),vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ac,blendDst:hr,blendEquation:Dn,blendSrcAlpha:oc,blendDstAlpha:hr,blendEquationAlpha:Dn}),this.blendMaterial=new Dt({uniforms:li.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ld,blendSrc:ac,blendDst:hr,blendEquation:Dn,blendSrcAlpha:oc,blendDstAlpha:hr,blendEquationAlpha:Dn}),this.fsQuad=new Qo(null),this.originalClearColor=new Ue,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Tl,this.depthTexture.format=Yi,this.depthTexture.type=qi,this.normalRenderTarget=new Wt(this.width,this.height,{minFilter:Yt,magFilter:Yt,type:Ft,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=cf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Pn.OUTPUT.Off:break;case Pn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Pn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Pn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ut,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){const t=new x_,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const c=o,l=a;i[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const r=new Vs(i,e,e,ln,Wn);return r.wrapS=qt,r.wrapT=qt,r.needsUpdate=!0,r}}Pn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const __={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class y_ extends ts{constructor(){super();const e=__;this.uniforms=li.clone(e.uniforms),this.material=new gx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Qo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ud?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===fd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===md&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ai extends ts{constructor(e,t,n,i){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=i!==void 0?i:[],this.visibleEdgeColor=new Ue(1,1,1),this.hiddenEdgeColor=new Ue(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new Wt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new Xd,this.depthMaterial.side=Tt,this.depthMaterial.depthPacking=Rd,this.depthMaterial.blending=Ut,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=Tt,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new Wt(this.resolution.x,this.resolution.y,{type:Ft}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new Wt(r,o,{type:Ft}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new Wt(r,o,{type:Ft}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new Wt(Math.round(r/2),Math.round(o/2),{type:Ft}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new Wt(r,o,{type:Ft}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new Wt(Math.round(r/2),Math.round(o/2),{type:Ft}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,c=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(c),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=c,this.overlayMaterial=this.getOverlayMaterial();const l=wr;this.copyUniforms=li.clone(l.uniforms),this.materialCopy=new Dt({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:Ut,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.fsQuad=new Qo(null),this.tempPulseColor1=new Ue,this.tempPulseColor2=new Ue,this.textureMatrix=new Xe;function h(u,d){const f=d.isPerspectiveCamera?"perspective":"orthographic";return u.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),i=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,i),this.renderTargetBlurBuffer1.setSize(n,i),this.renderTargetEdgeBuffer1.setSize(n,i),this.separableBlurMaterial1.uniforms.texSize.value.set(n,i),n=Math.round(n/2),i=Math.round(i/2),this.renderTargetBlurBuffer2.setSize(n,i),this.renderTargetEdgeBuffer2.setSize(n,i),this.separableBlurMaterial2.uniforms.texSize.value.set(n,i)}updateSelectionCache(){const e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=this._selectionCache;function i(r){if(r.isMesh||r.isSprite){if(!n.has(r)){const o=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,o)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}this.renderScene.traverse(i)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,i,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ai.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ai.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Ai.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Ai.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new Dt({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new se(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}getEdgeDetectionMaterial(){return new Dt({uniforms:{maskTexture:{value:null},texSize:{value:new se(.5,.5)},visibleEdgeColor:{value:new I(1,1,1)},hiddenEdgeColor:{value:new I(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}getSeperableBlurMaterial(e){return new Dt({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}getOverlayMaterial(){return new Dt({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:ic,depthTest:!1,depthWrite:!1,transparent:!0})}}Ai.BlurDirectionX=new se(1,0);Ai.BlurDirectionY=new se(0,1);function Cu(){return window.innerWidth<900||window.innerHeight<520||"ontouchstart"in window&&window.innerWidth<1200}function M_(s){try{const e=s.getContext(),t=e.getExtension("WEBGL_debug_renderer_info");if(!t)return!1;const n=String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)||"");return/swiftshader|llvmpipe|softpipe|microsoft basic render|cpu/i.test(n)}catch{return!1}}function w_(s,e){const t=Cu(),n=new Rv({canvas:s,antialias:!t,powerPreference:"high-performance",alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=t?ul:cd,n.toneMapping=dl,n.toneMappingExposure=1.08,n.outputColorSpace=vt;const i=M_(n),r=!t&&!i,o=new jd;o.background=new Ue("#b9cbe0"),o.fog=new Cs("#c5d4e3",160,480);const a=new Zi(n);o.environment=a.fromScene(new c_,.06).texture,o.environmentIntensity=.55;const c=t?58:50,l=new sn(c,window.innerWidth/window.innerHeight,.05,900);l.position.set(56,5.5,78);const h=new Zx(l,n.domElement);h.enableDamping=!0,h.dampingFactor=.08,h.maxPolarAngle=Math.PI*.495,h.minDistance=2,h.maxDistance=140,h.zoomToCursor=!0,h.target.set(13.7,6,10),h.update(),h.touches.ONE=Gn.ROTATE,h.touches.TWO=Gn.DOLLY_PAN;const u=new qx({element:e});u.setSize(window.innerWidth,window.innerHeight),Object.assign(e.style,{position:"absolute",inset:"0",pointerEvents:"none"});const d=new Kc("#efe8dc","#8a7a68",.62);o.add(d);const f=new Lr("#fff3d8",2.15);f.position.set(48,62,28),f.castShadow=!0;const g=t?1024:2048;f.shadow.mapSize.set(g,g),f.shadow.camera.near=4,f.shadow.camera.far=200,f.shadow.camera.left=-60,f.shadow.camera.right=60,f.shadow.camera.top=70,f.shadow.camera.bottom=-50,f.shadow.bias=-4e-4,f.shadow.normalBias=.035,f.shadow.radius=t?1:2.5,o.add(f),o.add(f.target),f.target.position.set(13.7,0,10);const b=new Lr("#f0e0c4",.42);b.position.set(-30,16,-20),o.add(b);const m=new kx("#fff6ea",.08);o.add(m);let p=null,_=null,v=r,x=null,E=null,T=null,S=null,A=null,M=null,y=null;if(r){const N=window.innerWidth,V=window.innerHeight,q=new Wt(N,V,{type:Ft,depthBuffer:!0});p=new p_(n,q),p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),p.addPass(new m_(o,l)),_=new Pn(o,l,N,V),_.output=Pn.OUTPUT.Default,_.blendIntensity=.8,_.updateGtaoMaterial({radius:.28,samples:12,thickness:1,distanceExponent:2,distanceFallOff:1,scale:1.15}),p.addPass(_),y=new Ai(new se(N,V),o,l),y.edgeStrength=3.4,y.edgeGlow=.4,y.edgeThickness=1.5,y.visibleEdgeColor.set("#f0d48a"),y.hiddenEdgeColor.set("#8a6a30"),y.pulsePeriod=2.4,y.downSampleRatio=1.5,p.addPass(y),p.addPass(new y_)}let C=performance.now(),D=!1,L=()=>{},F=()=>{},O=60,U=0;function z(N){if(!D)return;requestAnimationFrame(z);const V=Math.min(.05,(N-C)/1e3);C=N;const q=V>1e-4?1/V:60;O=O*.9+q*.1,v&&p&&q<26?(U+=1,U>45&&(v=!1,console.info("[engine] GTAO disabled — fps fallback",O.toFixed(1)))):U=0,L(V),h.enabled&&h.update(),p?(_&&(_.enabled=v),p.render()):n.render(o,l),u.render(o,l),F()}let G=0,j=null,ne=null;function ue(){const N=window.innerWidth,V=window.innerHeight,q=V>N*1.05;if(l.aspect=N/V,j!=null){const Q=j*Math.PI/180;if(q){const de=Math.round(V*1.24),be=N/de,ge=2*Math.atan(Math.tan(Q/2)/Math.max(be,.15));l.fov=Math.min(122,Math.max(78,ge*180/Math.PI));const ze=de-V;l.setViewOffset(N,de,0,ze,N,V)}else l.fov=j>=80?75:60,l.clearViewOffset()}else l.fov=Cu()?58:50,l.clearViewOffset();l.near=.05,l.updateProjectionMatrix()}function Ee(N,V){if(!_)return;const q=_;q.width=N,q.height=V,q.gtaoRenderTarget.setSize(N,V),q.pdRenderTarget.setSize(N,V),q.normalRenderTarget?.setSize(N,V),q.gtaoMaterial.uniforms.resolution.value.set(N,V)}function K(){const N=window.innerWidth,V=window.innerHeight;ue();const q=Math.min(window.devicePixelRatio||1,1.5);n.setPixelRatio(q),n.setSize(N,V),u.setSize(N,V),p&&(p.setPixelRatio(q),p.setSize(N,V),Ee(Math.round(N*q),Math.round(V*q)),y?.setSize(N,V))}return window.addEventListener("resize",K),{renderer:n,scene:o,camera:l,orbit:h,labels:u,sun:f,hemi:d,fill:b,mobile:t,highTier:r,softwareGpu:i,get cityBg(){return x},set cityBg(N){x=N},get cityBgNight(){return E},set cityBgNight(N){E=N},get cityBgGolden(){return T},set cityBgGolden(N){T=N},get cityEnv(){return S},set cityEnv(N){S=N},get cityEnvNight(){return A},set cityEnvNight(N){A=N},get cityEnvGolden(){return M},set cityEnvGolden(N){M=N},walkLit:!1,setOutlined(N){y&&(y.selectedObjects=N)},start(N,V){L=N,F=V??(()=>{}),D=!0,C=performance.now(),requestAnimationFrame(z)},resize:K,setHudLift(N){const V=Math.max(0,Math.min(.4,N));Math.abs(V-G)<.01||(G=V,ue())},setWalkFov(N){j=N,ue()},fps:()=>O,aoEnabled:()=>v,setAoEnabled(N){v=N&&r},aimWalkLighting(N,V,q){if(!N||!V){ne=null,this.walkLit=!1,f.position.set(48,62,28),f.target.position.set(13.7,0,10),f.target.updateMatrixWorld(),f.shadow.camera.left=-50,f.shadow.camera.right=50,f.shadow.camera.top=50,f.shadow.camera.bottom=-50,f.shadow.camera.near=4,f.shadow.camera.far=140,f.shadow.camera.updateProjectionMatrix();return}ne={center:N.clone(),incoming:V.clone().normalize(),radius:q},this.walkLit=!0;const Q=ne.incoming,de=.7,be=new I(-Q.x,de,-Q.z).normalize();f.position.copy(N).addScaledVector(be,Math.max(14,q*1.6)),f.target.position.copy(N),f.target.updateMatrixWorld(),f.castShadow=!0;const ge=Math.max(6,q);f.shadow.camera.left=-ge,f.shadow.camera.right=ge,f.shadow.camera.top=ge,f.shadow.camera.bottom=-ge,f.shadow.camera.near=2,f.shadow.camera.far=Math.max(40,q*4),f.shadow.camera.updateProjectionMatrix(),b.position.copy(N).add(new I(Q.x,.5,Q.z).normalize().multiplyScalar(10)),b.position.y=N.y+6},dispose(){D=!1,window.removeEventListener("resize",K),p?.dispose()}}}let Ir=0;function Eo(){Ir+=1}function rr(s,e,t,n,i=.5){const r=++Ir,o=s.position.clone(),a=e.target.clone(),c=performance.now(),l=e.enabled;return e.enabled=!1,new Promise(h=>{function u(d){if(r!==Ir){h();return}const f=Math.min(1,(d-c)/(i*1e3)),g=f<.5?4*f*f*f:1-Math.pow(-2*f+2,3)/2;s.position.lerpVectors(o,t,g),e.target.lerpVectors(a,n,g),s.lookAt(e.target),f<1?requestAnimationFrame(u):(e.enabled=l,h())}requestAnimationFrame(u)})}function S_(s,e,t,n,i,r,o=0,a=.5,c){const l=++Ir;let h=t,u=r;for(;u-h>Math.PI;)u-=Math.PI*2;for(;u-h<-Math.PI;)u+=Math.PI*2;const d=performance.now();return new Promise(f=>{function g(b){if(l!==Ir){f();return}const m=Math.min(1,(b-d)/(a*1e3)),p=m<.5?4*m*m*m:1-Math.pow(-2*m+2,3)/2,_=new I().lerpVectors(e,i,p),v=h+(u-h)*p,x=n+(o-n)*p;s.position.copy(_),s.rotation.set(x,v,0,"YXZ"),m<1?requestAnimationFrame(g):f()}requestAnimationFrame(g)})}function T_(s,e){const{scene:t,sun:n,hemi:i,fill:r,renderer:o}=s;if(e==="morning")s.walkLit||n.position.set(48,62,28),n.color.set("#fff6e8"),n.intensity=2.2,i.color.set("#efe8dc"),i.groundColor.set("#6a7a58"),i.intensity=.58,r.color.set("#f0e0c4"),r.intensity=.42,o.toneMappingExposure=1.08,t.fog=new Cs("#c8d6e4",220,560),s.cityBg?(t.background=s.cityBg,t.backgroundIntensity=1.05,t.backgroundBlurriness=0,t.backgroundRotation.set(0,.35,0)):t.background=new Ue("#8fb4d8");else if(e==="golden"){s.walkLit||n.position.set(62,16,22),n.color.set("#ffb060"),n.intensity=2.05,i.color.set("#ffd9a8"),i.groundColor.set("#8a5a38"),i.intensity=.48,r.color.set("#ffb07a"),r.intensity=.38,o.toneMappingExposure=1,t.fog=new Cs("#d8b090",220,540);const a=s.cityBgGolden??s.cityBg;a?(t.background=a,t.backgroundIntensity=1,t.backgroundBlurriness=0,t.backgroundRotation.set(0,.15,0)):t.background=new Ue("#eeb07a")}else{s.walkLit||n.position.set(-30,48,20),n.color.set("#c8d4f0"),n.intensity=.12,i.color.set("#1e2c50"),i.groundColor.set("#0a0c12"),i.intensity=.28,r.color.set("#ffb070"),r.intensity=.22,o.toneMappingExposure=.92,t.fog=new Cs("#081018",240,620);const a=s.cityBgNight??s.cityBg;a?(t.background=a,t.backgroundIntensity=.42,t.backgroundBlurriness=0,t.backgroundRotation.set(0,.55,0)):t.background=new Ue("#071018")}s.walkLit||(n.target.position.set(13.7,0,10),n.target.updateMatrixWorld())}async function E_(s,e){try{const n=await new Jo().loadAsync(e);n.mapping=Xi;const i=new Zi(s.renderer),r=i.fromEquirectangular(n).texture;n.dispose(),i.dispose(),s.scene.environment=r,s.scene.environmentIntensity=.58}catch(t){console.warn("[engine] HDRI failed, keeping RoomEnvironment",t)}}async function A_(s,e){try{const n=await new Jo().loadAsync(e);n.mapping=Xi,s.cityBg=n,s.scene.background=n,s.scene.backgroundIntensity=1.05,s.scene.backgroundBlurriness=0,s.scene.backgroundRotation.set(0,.35,0);const i=new Zi(s.renderer);s.cityEnv=i.fromEquirectangular(n).texture,i.dispose()}catch(t){console.warn("[engine] sky HDRI failed, keeping solid sky",t)}}async function R_(s,e){try{const n=await new Jo().loadAsync(e);n.mapping=Xi,s.cityBgGolden=n;const i=new Zi(s.renderer);s.cityEnvGolden=i.fromEquirectangular(n).texture,i.dispose()}catch(t){console.warn("[engine] golden sky HDRI failed",t)}}async function C_(s,e){try{const n=await new Jo().loadAsync(e);n.mapping=Xi,s.cityBgNight=n;const i=new Zi(s.renderer);s.cityEnvNight=i.fromEquirectangular(n).texture,i.dispose()}catch(t){console.warn("[engine] night sky HDRI failed",t)}}function za(){return window.innerHeight>window.innerWidth*1.05?-7*Math.PI/180:0}function pn(s,e=.32){const t=s.onBeforeCompile;s.userData.tripScale=e,s.onBeforeCompile=(i,r)=>{t?.(i,r),i.uniforms.uTripScale={value:s.userData.tripScale??e},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 vTripPos;
        varying vec3 vTripNormal;`).replace("#include <project_vertex>",`#include <project_vertex>
        {
          vec4 _tp = vec4(transformed, 1.0);
          vec3 _tn = objectNormal;
          #ifdef USE_INSTANCING
            _tp = instanceMatrix * _tp;
            _tn = mat3(instanceMatrix) * _tn;
          #endif
          vTripPos = (modelMatrix * _tp).xyz;
          vTripNormal = normalize(mat3(modelMatrix) * _tn);
        }`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vTripPos;
        varying vec3 vTripNormal;
        uniform float uTripScale;

        vec3 tripBlend(vec3 n) {
          vec3 b = pow(abs(n), vec3(4.0));
          return b / (b.x + b.y + b.z + 1e-5);
        }
        vec4 tripSample(sampler2D tex, vec3 p, vec3 b) {
          return texture2D(tex, p.zy) * b.x
               + texture2D(tex, p.xz) * b.y
               + texture2D(tex, p.xy) * b.z;
        }`).replace("#include <map_fragment>",`#ifdef USE_MAP
          vec3 _tN = normalize(vTripNormal);
          vec3 _tB = tripBlend(_tN);
          vec3 _tP = vTripPos * uTripScale;
          vec4 sampledDiffuseColor = tripSample(map, _tP, _tB);
          #ifdef DECODE_VIDEO_TEXTURE
            sampledDiffuseColor = vec4(mix(pow(sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(sampledDiffuseColor.rgb, vec3(0.04045)))), sampledDiffuseColor.w);
          #endif
          diffuseColor *= sampledDiffuseColor;
        #endif`).replace("#include <roughnessmap_fragment>",`float roughnessFactor = roughness;
        #ifdef USE_ROUGHNESSMAP
          vec3 _rN = normalize(vTripNormal);
          vec3 _rB = tripBlend(_rN);
          vec3 _rP = vTripPos * uTripScale;
          vec4 texelRoughness = tripSample(roughnessMap, _rP, _rB);
          roughnessFactor *= texelRoughness.g;
        #endif`).replace("#include <normal_fragment_maps>",`#if defined(USE_NORMALMAP) || defined(USE_NORMALMAP_TANGENTSPACE) || defined(USE_NORMALMAP_OBJECTSPACE)
          vec3 _nN = normalize(vTripNormal);
          vec3 _nB = tripBlend(_nN);
          vec3 _nP = vTripPos * uTripScale;
          vec3 nx = texture2D(normalMap, _nP.zy).xyz * 2.0 - 1.0;
          vec3 ny = texture2D(normalMap, _nP.xz).xyz * 2.0 - 1.0;
          vec3 nz = texture2D(normalMap, _nP.xy).xyz * 2.0 - 1.0;
          nx.xy *= normalScale;
          ny.xy *= normalScale;
          nz.xy *= normalScale;
          // Perturb the world normal along each projection axis and blend.
          vec3 wNorm = normalize(
            vec3(nx.y, nx.x, 0.0) * _nB.x +
            vec3(ny.x, 0.0, ny.y) * _nB.y +
            vec3(0.0, nz.y, nz.x) * _nB.z +
            _nN
          );
          normal = normalize((viewMatrix * vec4(wNorm, 0.0)).xyz);
        #elif defined(USE_BUMPMAP)
          normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
        #endif`)};const n=s.customProgramCacheKey.bind(s);return s.customProgramCacheKey=()=>`${n()}|triplanar|${s.userData.tripScale??e}`,s.needsUpdate=!0,s}const P_=()=>"./textures/",D_={wood:1.5,marble:3.4,tile:1.7,"tile-wet":1.7,terra:2};function Gi(s,e,t,n,i){return new Promise((r,o)=>{s.load(P_()+e,a=>{a.wrapS=a.wrapT=qt,a.repeat.set(n,n),a.anisotropy=i,a.colorSpace=t?vt:zt,a.needsUpdate=!0,r(a)},void 0,o)})}async function zn(s,e,t,n){const[i,r,o]=await Promise.all([Gi(s,`${e}_diff.jpg`,!0,n,t),Gi(s,`${e}_nor.jpg`,!1,n,t),Gi(s,`${e}_rough.jpg`,!1,n,t)]);return{map:i,normalMap:r,roughnessMap:o}}async function L_(s,e){const t=Math.min(8,s.capabilities.getMaxAnisotropy()),n=new $o,i=new of;n.manager=i,i.onProgress=(_,v,x)=>e(x?v/x:0);const[r,o,a,c,l,h,u,d,f,g,b,m]=await Promise.all([zn(n,"oakplank",t,1),zn(n,"marblevein",t,1),zn(n,"tile",t,1),zn(n,"terra",t,1),zn(n,"granite",t,1),zn(n,"concrete",t,1),zn(n,"concfloor",t,1),zn(n,"plaster",t,2),zn(n,"grass",t,1),zn(n,"pave",t,1),(async()=>{const[_,v]=await Promise.all([Gi(n,"fabric_nor.jpg",!1,5,t),Gi(n,"fabric_rough.jpg",!1,5,t)]);return{map:Pu(),normalMap:_,roughnessMap:v}})(),(async()=>{const[_,v]=await Promise.all([Gi(n,"brushed_nor.jpg",!1,4,t),Gi(n,"brushed_rough.jpg",!1,4,t)]);return{map:Pu(),normalMap:_,roughnessMap:v}})()]),p=(_,v={})=>new ot({color:_,roughness:.7,metalness:.05,...v});return{wood:r,marble:o,tile:a,terra:c,granite:l,concrete:h,concfloor:u,plaster:d,grass:f,pave:g,fabricTex:b,brushed:m,wall:pn(p("#f4f1ea",{roughness:.85,metalness:0,map:d.map,normalMap:d.normalMap,normalScale:new se(.35,.35),roughnessMap:d.roughnessMap}),.42),ceiling:p("#f7f4ee",{roughness:.92,metalness:0,envMapIntensity:.2}),glass:new Et({color:"#eef4f8",transparent:!0,opacity:.14,roughness:.04,metalness:.02,transmission:.86,thickness:.03,ior:1.45,envMapIntensity:.35}),glassRail:new Et({color:"#e8f0f5",transparent:!0,opacity:.16,roughness:.05,metalness:.08,transmission:.8,thickness:.02,envMapIntensity:.3}),frame:p("#2b2e2c",{roughness:.45,metalness:.35}),door:p("#6b4a2e",{roughness:.55,metalness:.05,map:r.map,roughnessMap:r.roughnessMap,normalMap:r.normalMap,normalScale:new se(.4,.4)}),metal:p("#8a8e92",{roughness:.35,metalness:.8}),gold:p("#c4a265",{roughness:.3,metalness:.7}),brass:p("#c9a15b",{roughness:.34,metalness:.92,normalMap:m.normalMap,roughnessMap:m.roughnessMap,normalScale:new se(.7,.25),envMapIntensity:.85}),blackMetal:p("#1c1e20",{roughness:.58,metalness:.72,normalMap:m.normalMap,roughnessMap:m.roughnessMap,normalScale:new se(.5,.2),envMapIntensity:.4}),fabric:p("#4a5560",{roughness:.86,metalness:0,normalMap:b.normalMap,roughnessMap:b.roughnessMap,normalScale:new se(.7,.7),envMapIntensity:.22}),mattress:p("#ece6da",{roughness:.9,normalMap:b.normalMap,normalScale:new se(.35,.35),roughnessMap:b.roughnessMap}),plant:p("#2d5a3d",{roughness:.8}),soil:p("#3a2a1c",{roughness:1}),counter:new Et({color:"#d8d4cc",roughness:.22,metalness:.04,clearcoat:.7,clearcoatRoughness:.12,envMapIntensity:1.05}),cabinet:p("#f3f1ec",{roughness:.55}),woodFur:p("#8b5a2b",{roughness:.62,metalness:.02,map:r.map,roughnessMap:r.roughnessMap,normalMap:r.normalMap,normalScale:new se(.55,.55),envMapIntensity:.35}),ceramic:new Et({color:"#f4f6f7",roughness:.2,metalness:.03,clearcoat:.8,clearcoatRoughness:.14,envMapIntensity:1}),water:new Et({color:"#6a9ab8",transparent:!0,opacity:.55,roughness:.15,metalness:.05,transmission:.4}),emissive:p("#fff4d8",{emissive:"#fff4d8",emissiveIntensity:.85,roughness:1})}}function Pu(){const s=new Uint8Array([255,255,255,255]),e=new Vs(s,1,1,ln);return e.colorSpace=vt,e.needsUpdate=!0,e}const Ps={modern:{flooring:"wood",wall:"#f4f1ea",kitchen:"white",fabric:"#4a5560",wood:"#7a5a38"},luxury:{flooring:"marble",wall:"#f3ebe0",kitchen:"walnut",fabric:"#5c1a1a",wood:"#3f2a1a"},minimal:{flooring:"tile",wall:"#f7f7f5",kitchen:"white",fabric:"#d0cbc2",wood:"#c4b7a0"},traditional:{flooring:"marble",wall:"#f3e6d0",kitchen:"granite",fabric:"#7a2e1f",wood:"#5c3310"}},I_=[{id:"white",color:"#f7f5f0",name:"White"},{id:"cream",color:"#f3ebe0",name:"Cream"},{id:"sage",color:"#d5ddd2",name:"Sage"},{id:"sand",color:"#e8d7bc",name:"Sand"},{id:"grey",color:"#d9d6d0",name:"Grey"},{id:"rose",color:"#ead7d3",name:"Rose"},{id:"terracotta",color:"#e2b89a",name:"Terracotta"},{id:"mint",color:"#d5e4dc",name:"Mint"}];function Du(s,e){return e==="marble"?s.marble:e==="tile"?s.tile:s.wood}function Lu(s,e){e==="white"?(s.cabinet.color.set("#f3f1ec"),s.cabinet.map=null,s.counter.color.set("#ece9e2"),s.counter.map=null,s.counter.roughness=.18,"clearcoat"in s.counter&&(s.counter.clearcoat=.85,s.counter.clearcoatRoughness=.1)):e==="walnut"?(s.cabinet.color.set("#6b4324"),s.cabinet.map=s.wood.map,s.counter.color.set("#1f1f1f"),s.counter.map=null,s.counter.roughness=.25):e==="black"?(s.cabinet.color.set("#1e1f21"),s.cabinet.map=null,s.counter.color.set("#d8d4cc"),s.counter.map=null,s.counter.roughness=.25):(s.cabinet.color.set("#6b4324"),s.cabinet.map=s.wood.map,s.counter.color.set("#ffffff"),s.counter.map=s.granite.map,s.counter.normalMap=s.granite.normalMap,s.counter.roughnessMap=s.granite.roughnessMap,s.counter.roughness=.4),s.cabinet.needsUpdate=!0,s.counter.needsUpdate=!0}function Iu(s,e){const t=Ps[e.style];s.fabric.color.set(t.fabric),s.fabric.needsUpdate=!0,s.woodFur.color.set(t.wood),s.woodFur.needsUpdate=!0,e.style==="luxury"?s.mattress.color.set("#efe2cc"):e.style==="traditional"?s.mattress.color.set("#f3e6d0"):e.style==="minimal"?s.mattress.color.set("#f4f2ec"):s.mattress.color.set("#ece6da"),s.mattress.needsUpdate=!0}function Ba(s,e=1){const t=s.attributes.position;if(!t)return;const n=new Float32Array(t.count*2);for(let r=0;r<t.count;r++)n[r*2]=t.getX(r)*e+40,n[r*2+1]=-t.getZ(r)*e+40;s.setAttribute("uv",new jt(n,2)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere();const i=s.attributes.normal;if(i&&i.getY(0)<0){for(let o=0;o<i.count;o++)i.setXYZ(o,-i.getX(o),-i.getY(o),-i.getZ(o));i.needsUpdate=!0;const r=s.index;if(r){for(let o=0;o<r.count;o+=3){const a=r.getX(o+1);r.setX(o+1,r.getX(o+2)),r.setX(o+2,a)}r.needsUpdate=!0}}}function Ha(s){return 1/(D_[s]??2)}function k_(s,e,t="#ffffff"){const n=e==="marble",i=e==="tile"||e==="tile-wet";return s.map.wrapS=s.map.wrapT=qt,s.normalMap.wrapS=s.normalMap.wrapT=qt,s.roughnessMap.wrapS=s.roughnessMap.wrapT=qt,new ot({color:t,map:s.map,normalMap:s.normalMap,roughnessMap:s.roughnessMap,roughness:n?.28:i?.42:.6,metalness:0,envMapIntensity:n?.28:i?.2:.1,normalScale:new se(n?.45:.7,n?.45:.7),side:Tt})}function N_(s,e){const t=e==="marble",n=e==="tile"||e==="tile-wet";s.roughness=t?.28:n?.42:.6,s.envMapIntensity=t?.28:n?.2:.12,s.metalness=0,s.normalScale&&s.normalScale.set(t?.45:.7,t?.45:.7),s.needsUpdate=!0}function U_(s,e,t){s.map=e.map,s.normalMap=e.normalMap,s.roughnessMap=e.roughnessMap,N_(s,t)}function kr(s,e){return e==="luxury"||e==="traditional"?s.brass:s.blackMetal}function ku(s,e){if(e===Vf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Gc||e===Ad){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Gc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Fl extends Pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new H_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new ty(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Mr.extractUrlBase(e);o=Mr.resolveURL(l,this.path)}else o=Mr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Dr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===lf){try{o[st.KHR_BINARY_GLTF]=new ny(e)}catch(u){i&&i(u);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new my(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:o[u]=new z_;break;case st.KHR_DRACO_MESH_COMPRESSION:o[u]=new iy(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[u]=new sy;break;case st.KHR_MESH_QUANTIZATION:o[u]=new ry;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function F_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class O_{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],zt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Lr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Un(h),l.distance=u;break;case"spot":l=new Il(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,oi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class z_{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){const i=[];e.color=new Ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}}class B_{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class H_{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(r)}}class G_{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class V_{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class W_{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class X_{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class j_{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],zt),Promise.all(r)}}class q_{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Y_{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vt)),Promise.all(r)}}class Z_{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class K_{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Et}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class $_{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class J_{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Q_{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ey{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class ty{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const b=new Xe,m=new I,p=new Mn,_=new I(1,1,1),v=new Rl(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&_.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,b.compose(m,p,_));for(const x in c)if(x==="_COLOR_0"){const E=c[x];v.instanceColor=new Xc(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);wt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const lf="glTF",or=12,Nu={JSON:1313821514,BIN:5130562};class ny{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,or),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==lf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-or,r=new DataView(e,or);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Nu.JSON){const l=new Uint8Array(e,or+o,a);this.content=n.decode(l)}else if(c===Nu.BIN){const l=or+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Qc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Qc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ds[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},a,l,zt,d)})})}}class sy{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ry{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class hf extends Or{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,_=1-m,v=p-d+u;for(let x=0;x!==a;x++){const E=o[b+x+a],T=o[b+x+c]*h,S=o[g+x+a],A=o[g+x]*h;r[x]=_*E+v*T+m*S+p*A}return r}}const oy=new Mn;class ay extends hf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return oy.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uu={9728:Yt,9729:Lt,9984:bd,9985:Ro,9986:ur,9987:kn},Fu={33071:Vn,33648:Uo,10497:qt},Ga={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cy={CUBICSPLINE:void 0,LINEAR:Er,STEP:Tr},Va={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ly(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fi})),s.DefaultMaterial}function Oi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function oi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hy(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function uy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dy(s){let e;const t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wa(t.attributes):e=s.indices+":"+Wa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Wa(s.targets[n]);return e}function Wa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function el(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const py=new Xe;class my{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new F_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new $o(this.options.manager):this.textureLoader=new Nx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Oi(r,a,i),oi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Mr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ga[i.type],a=Ds[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new jt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ga[i.type],l=Ds[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(f&&f!==u){const p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(_);v||(b=new l(a,p*f,i.count*f/h),v=new Cv(b,f/h),t.cache.add(_,v)),m=new El(v,c,d%f/h,g)}else a===null?b=new l(i.count*c):b=new l(a,d,i.count*c),m=new jt(b,c,g);if(i.sparse!==void 0){const p=Ga.SCALAR,_=Ds[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,E=new _(o[1],v,i.sparse.count*p),T=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,A=E.length;S<A;S++){const M=E[S];if(m.setX(M,T[S*c]),c>=2&&m.setY(M,T[S*c+1]),c>=3&&m.setZ(M,T[S*c+2]),c>=4&&m.setW(M,T[S*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Uu[d.magFilter]||Lt,h.minFilter=Uu[d.minFilter]||kn,h.wrapS=Fu[d.wrapS]||qt,h.wrapT=Fu[d.wrapT]||qt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Yt&&h.minFilter!==Lt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){const m=new Ot(b);m.needsUpdate=!0,d(m)}),t.load(Mr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),oi(u,o),u.userData.mimeType=o.mimeType||fy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Zd,Nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Yd,Nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ot}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[st.KHR_MATERIALS_UNLIT]){const u=i[st.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],zt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,vt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Tt);const h=r.alphaMode||Va.OPAQUE;if(h===Va.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Va.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ct&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new se(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ct&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ct){const u=r.emissiveFactor;a.emissive=new Ue().setRGB(u[0],u[1],u[2],zt)}return r.emissiveTexture!==void 0&&o!==Ct&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),oi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Oi(i,u,r),u})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ou(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=dy(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Ou(new Gt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?ly(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const b=h[f],m=o[f];let p;const _=l[f];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Dv(b,_):new ae(b,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?p.geometry=ku(p.geometry,Ad):m.mode===xn.TRIANGLE_FAN&&(p.geometry=ku(p.geometry,Gc));else if(m.mode===xn.LINES)p=new kv(b,_);else if(m.mode===xn.LINE_STRIP)p=new Cl(b,_);else if(m.mode===xn.LINE_LOOP)p=new Nv(b,_);else if(m.mode===xn.POINTS)p=new Uv(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&uy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),oi(p,r),m.extensions&&Oi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Oi(i,u[0],r),u[0];const d=new Mt;r.extensions&&Oi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(Pd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Xe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Al(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let _=0,v=d.length;_<v;_++){const x=d[_],E=f[_],T=g[_],S=b[_],A=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,E,T,S,A);if(M)for(let y=0;y<M.length;y++)p.push(M[y])}return new Sx(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,py)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new qd:l.length>1?h=new Mt:l.length===1?h=l[0]:h=new wt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),oi(h,r),r.extensions&&Oi(n,h,r),r.matrix!==void 0){const u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Mt;n.name&&(r.name=i.createUniqueName(n.name)),oi(r,n),n.extensions&&Oi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Nn||d instanceof Ot)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Si[r.path]===Si.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Si[r.path]){case Si.weights:l=Fs;break;case Si.rotation:l=Os;break;case Si.position:case Si.scale:l=zs;break;default:switch(n.itemSize){case 1:l=Fs;break;case 2:case 3:default:l=zs;break}break}const h=i.interpolation!==void 0?cy[i.interpolation]:Er,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Si[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=el(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Os?ay:hf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gy(s,e,t){const n=e.attributes,i=new mn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const h=el(Ds[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const b=el(Ds[d.componentType]);c.multiplyScalar(b)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new qn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ou(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Qc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return it.workingColorSpace!==zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),oi(s,e),gy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?hy(s,e.targets,t):s})}const nn=3.15,Ol=7,Wi=8,by=.45,pr=6.4,vy={ox:.2,oz:10,rotY:180,mirrorX:!1,mirrorZ:!1,width:11,depth:9},xy={ox:16.2,oz:10,rotY:0,mirrorX:!1,mirrorZ:!0,width:11,depth:9},_y={ox:8.45,oz:0,rotY:180,mirrorX:!1,mirrorZ:!1,width:10.5,depth:10},mr={ox:(27.4-12.192)/2,oz:2.6,rotY:0,mirrorX:!1,mirrorZ:!1,width:12.192,depth:15.24},Vi={x:11.2,z:10,w:5,d:6.2},hi=[[.2,10],[.2,19.2],[27.2,19.2],[27.2,10],[18.95,10],[18.95,0],[8.45,0],[8.45,10]];function No(s){return s===Wi?[{suffix:"PH",planId:"penthouse",typeLabel:"Penthouse",transform:mr}]:[{suffix:"A",planId:"2bhk",typeLabel:"2 BHK",transform:vy},{suffix:"B",planId:"2bhk",typeLabel:"2 BHK",transform:xy},{suffix:"C",planId:"3bhk",typeLabel:"3 BHK",transform:_y}]}function gr(s,e){return`${s}${e}`}function wn(s,e,t){let n=t.mirrorX?t.width-s:s,i=t.mirrorZ?t.depth-e:e;const r=t.rotY*Math.PI/180,o=t.width/2,a=t.depth/2,c=n-o,l=i-a,h=Math.cos(r),u=Math.sin(r),d=c*h-l*u+o,f=c*u+l*h+a;return[t.ox+d,t.oz+f]}function br(s,e){const t=[[s.x,s.z],[s.x+s.w,s.z],[s.x+s.w,s.z+s.d],[s.x,s.z+s.d]].map(([l,h])=>wn(l,h,e)),n=t.map(l=>l[0]),i=t.map(l=>l[1]),r=Math.min(...n),o=Math.max(...n),a=Math.min(...i),c=Math.max(...i);return{x:r,z:a,w:o-r,d:c-a}}function yy(s){return{minX:s.x,maxX:s.x+s.w,minZ:s.z,maxZ:s.z+s.d}}function Nr(s){return pr+(s-1)*nn}function Xa(){return[13.7,10.6]}function ja(s){return s===Wi?"Penthouse":`Floor ${s}`}function uf(s){return s.type==="Penthouse"&&s.terraceArea_sqft?`${s.area_sqft.toLocaleString("en-IN")} sq ft + ${s.terraceArea_sqft.toLocaleString("en-IN")} sq ft terrace`:`${s.area_sqft.toLocaleString("en-IN")} sq ft`}const zu=new I,Bu=new Mn,Hu=new I,My=new I(0,1,0);function qe(s,e,t,n=0,i=1,r=1,o=1){return zu.set(s,e,t),Bu.setFromAxisAngle(My,n),Hu.set(i,r,o),new Xe().compose(zu,Bu,Hu)}function nt(s,e,t,n={}){const i=new Rl(s,e,Math.max(1,t.length));i.count=t.length;for(let r=0;r<t.length;r++)i.setMatrixAt(r,t[r]);if(i.instanceMatrix.needsUpdate=!0,n.colors&&n.colors.length){for(let r=0;r<n.colors.length;r++)i.setColorAt(r,n.colors[r]);i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return n.shadows!==!1&&(i.castShadow=!0,i.receiveShadow=!0),i}function wy(){const s=new Ws;s.moveTo(hi[0][0],hi[0][1]);for(let e=1;e<hi.length;e++)s.lineTo(hi[e][0],hi[e][1]);return s.closePath(),s}function zl(s,e){const t=new Zo(e??wy(),{depth:s,bevelEnabled:!1});return t.rotateX(Math.PI/2),t.translate(0,s,0),t.computeVertexNormals(),t}function qa(){const s=new Ws;return s.moveTo(.2,10),s.lineTo(.2,19.2),s.lineTo(27.2,19.2),s.lineTo(27.2,10),s.closePath(),s}function Ya(s,e,t,n){const i=new ae(zl(e,n),s);return i.position.y=t,i.castShadow=!0,i.receiveShadow=!0,i}function Bl(){return[{x:.2,z:19.2,len:27,alongX:!0,inward:-1},{x:.2,z:10,len:8.25,alongX:!0,inward:1},{x:18.95,z:10,len:8.25,alongX:!0,inward:1},{x:8.45,z:0,len:10.5,alongX:!0,inward:1},{x:.2,z:10,len:9.2,alongX:!1,inward:1},{x:27.2,z:10,len:9.2,alongX:!1,inward:-1},{x:8.45,z:0,len:10,alongX:!1,inward:-1},{x:18.95,z:0,len:10,alongX:!1,inward:1}]}function si(s,e,t=.74){return new ot({color:e,map:s.map,normalMap:s.normalMap,roughnessMap:s.roughnessMap,roughness:t,metalness:.04,envMapIntensity:.55,normalScale:new se(.55,.55)})}function Gu(s){const e=document.createElement("canvas");e.width=256,e.height=512;const t=e.getContext("2d");t.fillStyle=s?"#0c0f14":"#4a5360",t.fillRect(0,0,256,512);const n=18,i=36,r=256/n,o=512/i;for(let c=0;c<i;c++)for(let l=0;l<n;l++){if(s){if(Math.random()>.38)continue;t.fillStyle=Math.random()>.22?"#ffd090":"#c8d8ff"}else{if(Math.random()>.08)continue;t.fillStyle="rgba(200,214,224,0.28)"}const h=l*r+r*.28,u=c*o+o*.28;t.fillRect(h,u,r*.38,o*.42)}const a=new jo(e);return a.wrapS=a.wrapT=qt,a.colorSpace=vt,a.anisotropy=4,a.minFilter=Lt,a.magFilter=Lt,a.generateMipmaps=!1,a.needsUpdate=!0,a}function Sy(s,e={}){const t=!!e.mobile,n=new Mt;n.name="tower";const i=[],r=[],o=[],a=[],c=[],l=[],h=[],u=[],d=new Map,f=pn(si(s.plaster,"#e6d9c4",.86),.32),g=pn(si(s.plaster,"#efe6d8",.86),.42);pn(si(s.plaster,"#e4d9c8",.88),.4);const b=pn(si(s.concfloor,"#f0ebe1",.62),.18),m=pn(si(s.wood,"#8d6a48",.7),.5),p=pn(new ot({color:"#3f7a36",map:s.grass.map,normalMap:s.grass.normalMap,roughnessMap:s.grass.roughnessMap,roughness:.95,envMapIntensity:.22}),.22),_=pn(si(s.pave,"#d8d0c4",.86),.11),v=pn(si(s.concfloor,"#8a8680",.9),.12),x=pn(si(s.concfloor,"#2c2d30",.95),.16),E=pn(new ot({color:"#1c4a26",map:s.grass.map,normalMap:s.grass.normalMap,roughness:.95,envMapIntensity:.18}),.35),T=pn(si(s.wood,"#9a7a55",.72),.45),S=new ot({color:"#c4ab82",roughness:.42,metalness:.62,envMapIntensity:1}),A=new ot({color:"#1c1e20",roughness:.42,metalness:.55,envMapIntensity:.7}),M=new ot({color:"#c9cdd1",roughness:.28,metalness:.85,envMapIntensity:1.1}),y=new Et({color:"#8aa4b4",metalness:.38,roughness:.055,transparent:!0,opacity:.46,envMapIntensity:1.9,clearcoat:.6,clearcoatRoughness:.08});h.push(y);const C=new Et({color:"#6a8290",metalness:.08,roughness:.04,transparent:!0,opacity:.18,envMapIntensity:1.4,clearcoat:.5,clearcoatRoughness:.06,depthWrite:!1});h.push(C);const D=s.glassRail.clone();D.opacity=.18,D.roughness=.04,D.envMapIntensity=1.4,D.transmission=.72;const L=s.water.clone();L.color.set("#3d7a88"),L.roughness=.06,L.transmission=.55,L.thickness=.5,L.ior=1.33,L.opacity=.72,L.envMapIntensity=1.4,L.transparent=!0,l.push(L);const F=new ot({color:"#fff4d8",emissive:"#ffd9a0",emissiveIntensity:0,roughness:.35,metalness:.05});l.push(F);const O=new ot({color:"#f0d4a8",emissive:"#ffc888",emissiveIntensity:.7,roughness:1,metalness:0,side:Tt});l.push(O);const U=y.clone();U.userData.windowGlow=!0,h.push(U);const z=(me,we=!0)=>(we&&(me.userData.structure=!0,a.push(me)),n.add(me),me),G=new ae(new qo(520,64),new ot({color:"#3a3c3a",roughness:1,envMapIntensity:.08}));G.rotation.x=-Math.PI/2,G.position.set(13.7,-.16,8),G.receiveShadow=!0,z(G);const j=new ae(new ve(68,.04,82),p);j.position.set(14,-.02,5),j.receiveShadow=!0,z(j);const ne=new ae(new ve(42,.05,36),_);ne.position.set(13.7,.01,6),ne.receiveShadow=!0,z(ne);const ue=new Ws;ue.moveTo(-5.2,-36),ue.lineTo(5.2,-36),ue.lineTo(5.6,-9),ue.lineTo(12,-9),ue.lineTo(12,-1.8),ue.lineTo(-12,-1.8),ue.lineTo(-12,-9),ue.lineTo(-5.6,-9),ue.closePath();const Ee=new Zo(ue,{depth:.07,bevelEnabled:!1});Ee.rotateX(Math.PI/2),Ee.translate(0,.07,0);const K=new ae(Ee,v);K.position.set(13.7,.03,0),K.receiveShadow=!0,z(K);const N=new ae(new ve(220,.06,11),x);N.position.set(13.7,-.04,-48),N.receiveShadow=!0,z(N);const V=new ae(new ve(220,.07,2.6),_);V.position.set(13.7,0,-41.2),V.receiveShadow=!0,z(V);const q=new ae(new ve(220,.16,.28),b);q.position.set(13.7,.05,-42.5),z(q);const Q=[];for(let me=-20;me<=20;me++)Q.push(qe(13.7+me*6.5,.005,-48,0,3.2,.02,.16));const de=new ot({color:"#e8e4d8",roughness:.7,envMapIntensity:.1});z(nt(new ve(1,1,1),de,Q,{shadows:!1}),!1);const be=new ae(new ve(12.4,.28,6.4),f);be.position.set(13.7,.08,29.5),be.receiveShadow=!0,z(be);const ge=new ae(new ve(14.2,.08,8.2),T);ge.position.set(13.7,.02,29.5),ge.receiveShadow=!0,z(ge);const ze=new ae(new ve(11.6,.22,5.6),L);ze.position.set(13.7,.12,29.5),z(ze);const $=new Un("#7ec8d8",0,10,2);$.position.set(13.7,.3,29.5),$.userData.nightI=1.6,$.userData.goldenI=.25,c.push($),z($);const oe=[];for(const[me,we,Oe,ie,Qe]of[[6.4,-22,.5,18,.85],[21,-22,.5,18,.85],[6.4,-8,.5,8,.85],[21,-8,.5,8,.85],[-14,5,.55,68,.95],[42,5,.55,68,.95],[14,41.4,52,.55,.95],[-4,-32.4,22,.55,.95],[32,-32.4,22,.55,.95],[2,16,8,.45,.7],[25.4,16,8,.45,.7]])oe.push(qe(me,Qe/2,we,0,Oe,Qe,ie));z(nt(new ve(1,1,1),E,oe));const k=2.15,Ae=[[-18,-34,27.5,.32],[18.5,-34,27.5,.32],[-18,44,64,.32],[-18,-34,.32,78.32],[46,-34,.32,78.32]],le=[],ye=[],pe=[];for(const[me,we,Oe,ie]of Ae){le.push(qe(me+Oe/2,k/2,we+ie/2,0,Oe,k,ie));const Qe=Oe>ie,Pt=Qe?Oe:ie,Di=Math.max(2,Math.floor(Pt/7));for(let $t=0;$t<=Di;$t++){const Kn=$t/Di,ns=Qe?me+Kn*Oe:me+Oe/2,is=Qe?we+ie/2:we+Kn*ie;ye.push(qe(ns,k/2+.15,is,0,.55,k+.3,.55))}const Ys=Math.floor(Pt/.16);for(let $t=0;$t<Ys;$t++){const Kn=($t+.5)/Ys,ns=Qe?me+Kn*Oe:me+Oe/2,is=Qe?we+ie/2:we+Kn*ie;pe.push(qe(ns,k+.45,is,Qe?0:Math.PI/2,.03,.9,.03))}}z(nt(new ve(1,1,1),f,le)),z(nt(new ve(1,1,1),b,ye)),z(nt(new ve(1,1,1),A,pe,{shadows:!1}));const Fe=new ae(new ve(9,.3,.5),f);Fe.position.set(13.7,k+.55,-34),z(Fe);const Ce=nt(new ve(.7,3.1,.7),f,[qe(13.7-4.6,1.55,-34),qe(13.7+4.6,1.55,-34)]);z(Ce);const P=new ae(new ve(7.2,1.8,.32),f);P.position.set(5,.95,-18),P.castShadow=!0,z(P);const w=document.createElement("div");w.className="unit-card",w.innerHTML='<div class="u-id">Sample Tower</div><div class="u-meta">Lead Setu demo · not a real project</div>',w.style.pointerEvents="none";const H=new Bs(w);H.position.set(5,2.3,-18),z(H);const ee=[[-20,-45],[-6,-45],[8,-45],[20,-45],[34,-45],[48,-45],[7.2,-28],[20.2,-28],[7.2,-16],[20.2,-16],[1.2,-6],[26.2,-6],[1,8],[26.4,8]],ce=[],te=[],Le=[];for(const[me,we]of ee)ce.push(qe(me,2.15,we,0,1,1,1)),te.push(qe(me+.45,4.15,we,0,1,1,1)),Le.push(qe(me+.75,4.05,we));const xe=new rn(.06,.09,4.3,8);z(nt(xe,A,ce)),z(nt(new ve(.9,.05,.06),M,te,{shadows:!1})),z(nt(new pi(.14,10,8),F,Le,{shadows:!1}));const Se=t?8:ee.length;for(let me=0;me<Se;me++){const[we,Oe]=ee[me],ie=new Un("#ffd4a0",0,14,2);ie.position.set(we+.75,4.05,Oe),ie.userData.nightI=1.55,ie.userData.goldenI=.28,c.push(ie),z(ie)}Uy(n,a,t),ky(n,a,c,l,f,g,b,m,C,A,O,s,t),Iy(n,a,S);const Ye=[[.2,.15,14.6],[27.2,.15,14.6],[6,.15,19.2],[21.4,.15,19.2],[13.7,.15,0],[8.45,.15,5],[18.95,.15,5]];for(const[me,we,Oe]of Ye){const ie=new Il("#ffe4c0",0,22,.42,.55,1.4);ie.position.set(me,we,Oe),ie.target.position.set(me,we+14,Oe),ie.target.updateMatrixWorld(),ie.userData.nightI=3.2,ie.userData.goldenI=.7,c.push(ie),z(ie),z(ie.target)}const fe=Ty();for(let me=1;me<=Ol;me++){const we=Ay(me,s,{facade:g,slabMat:b,soffit:m,glass:U,mullion:A,capRail:M,railGlass:D},fe);n.add(we),o.push(we);const Oe=we.getObjectByName("hit");Oe&&i.push(Oe)}const Ne=Py(s,{facade:g,slabMat:b,soffit:m,glass:U,mullion:A,capRail:M,railGlass:D,stone:f,finMat:S},fe);n.add(Ne),o.push(Ne);const We=Ne.getObjectByName("hit");We&&i.push(We);for(const me of o){const we=me.userData.practicals;we&&c.push(...we)}let je=null,Ie=0;function tt(me){u.length=0;for(const we of o){const Oe=we.userData.floor,ie=me===Oe;we.traverse(Pt=>{(Pt.name==="highlight"||Pt.name==="outline"||Pt.name==="outline-edge")&&(Pt.visible=ie)});const Qe=we.getObjectByName("floor-label");Qe&&(Qe.visible=je===null&&ie),ie&&u.push(we)}}function Ze(me){for(const[we,Oe]of d)Oe.visible=we===me}function at(me){je=me;for(const we of o){const Oe=we.userData.floor;me===null?(we.visible=!0,we.traverse(ie=>{(ie.userData.facade||ie.userData.hideInCutaway)&&(ie.visible=!0),ie.name==="floor-label"&&(ie.visible=!1),(ie.name==="highlight"||ie.name==="outline"||ie.name==="outline-edge")&&(ie.visible=!1)})):(we.visible=Oe===me,we.traverse(ie=>{(ie.userData.facade||ie.userData.hideInCutaway)&&(ie.visible=!1),ie.name==="floor-label"&&(ie.visible=!1)}))}for(const we of a)we.visible=me===null}function B(me){const we=me==="night",Oe=me==="golden";for(const ie of c){const Qe=ie.userData.nightI??1.2,Pt=ie.userData.goldenI??0,Di=ie.userData.morningI??0;ie.intensity=we?Qe:Oe?Pt:Di,ie.visible=ie.intensity>.01}for(const ie of l){if(ie===L){ie.emissive?.set?.(we?"#163848":"#000000"),"emissiveIntensity"in ie&&(ie.emissiveIntensity=we?.55:0);continue}ie.emissiveIntensity=we?ie===O?2.6:2.8:Oe?.85:ie===O?.7:0}n.traverse(ie=>{const Qe=ie.userData.setCityNight;Qe&&Qe(we,Oe)});for(const ie of h){const Qe=we?ie.userData.envNight:ie.userData.envDay;if(Qe&&(ie.envMap=Qe,ie.needsUpdate=!0),ie===C){ie.emissive.set(we?"#ffc888":Oe?"#ffd8b0":"#f0e0c8"),ie.emissiveIntensity=we?.65:Oe?.18:.08,ie.opacity=we?.42:.18,ie.color.set(we?"#e8c898":"#6a8290"),ie.transparent=!0;continue}we?(ie.emissive.set("#ffc078"),ie.emissiveIntensity=1.85,ie.opacity=.88,ie.color.set("#f3d2a0"),ie.transparent=!0):Oe?(ie.emissive.set("#ffb070"),ie.emissiveIntensity=.45,ie.opacity=.55,ie.color.set("#9eb8c6")):(ie.emissive.set("#000000"),ie.emissiveIntensity=0,ie.opacity=.46,ie.color.set("#8aa4b4"))}}function Me(me,we){for(const Oe of h)Oe.userData.envDay=me,Oe.userData.envNight=we,me&&(Oe.envMap=me,Oe.needsUpdate=!0)}function J(me){Ie+=me;const we=.24+.16*(.5+.5*Math.sin(Ie*2.6));for(const Oe of o){const ie=Oe.getObjectByName("highlight");if(ie&&ie.visible){const Qe=ie.material;Qe.opacity=we}Oe.traverse(Qe=>{if(Qe instanceof ae&&(Qe.name==="outline"||Qe.name==="outline-edge")){if(!Qe.visible)return;const Pt=Qe.material;Pt.opacity=.65+.3*(.5+.5*Math.sin(Ie*2.6))}})}for(const[,Oe]of d)if(Oe.visible){const ie=Oe.material;ie.opacity=.5+.35*(.5+.5*Math.sin(Ie*2.8))}}function he(){return u.slice()}function De(){n.removeFromParent()}n._unitOutlines=d;async function Pe(){await Ny(n,a)}return{group:n,floorHits:i,unitHits:r,highlight:tt,highlightUnit:Ze,setIsolated:at,setTime:B,setEnv:Me,outlined:he,tick:J,loadTrees:Pe,dispose:De}}function Ty(){return{win:new ve(1.55,1.55,.05),mullV:new ve(.045,1.55+.06,.06),mullH:new ve(1.55+.06,.045,.06),clad:new ve(3-.04,nn-.42,.24),fin:new ve(.1,nn-.42,.38),slab:zl(.32),balSlab:new ve(5.15,.28,1.8),balRail:new ve(4.85,1.1,.024),balRailS:new ve(.024,1.1,1.62),cap:new ve(4.9,.028,.05),capS:new ve(.05,.028,1.66)}}function Ey(s,e,t){return!!(s.alongX&&Math.abs(t-19.2)<.2&&(e>5.3&&e<10.7||e>16.5&&e<21.9))}function Ay(s,e,t,n){const i=new Mt;i.userData.floor=s;const r=Nr(s),o=new ae(n.slab,t.slabMat);o.position.y=r,o.castShadow=!0,o.receiveShadow=!0,o.userData.ghostable=!0,i.add(o);const a=new ae(n.slab,t.slabMat);a.position.y=r+.02,a.scale.set(1,.55,1),a.castShadow=!0,a.userData.facade=!0,i.add(a);const c=new ae(n.slab,t.slabMat);c.position.y=r+nn-.12,c.scale.set(1,.35,1),c.userData.ghostable=!0,c.userData.hideInCutaway=!0,c.castShadow=!0,i.add(c),Ry(i,r+.32,t,n),Cy(i,r,t,n);const l=new ae(n.slab,new Ct({visible:!1}));l.position.y=r,l.scale.set(1,(nn+.01)/.32,1),l.name="hit",l.userData.floor=s,i.add(l);const h=new Ct({color:"#f2d078",transparent:!0,opacity:.38,depthWrite:!1,side:Tt,depthTest:!1}),u=new ae(n.slab,h);u.position.y=r,u.scale.set(1.06,(nn+.08)/.32,1.06),u.name="highlight",u.renderOrder=8,u.visible=!1,i.add(u);const d=new Ct({color:"#ffe29a",side:Xt,transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1}),f=new ae(n.slab,d);f.position.y=r-.06,f.scale.set(1.09,(nn+.28)/.32,1.09),f.name="outline",f.renderOrder=9,f.visible=!1,i.add(f);const g=new Mt;g.name="highlight";const b=new Ct({color:"#ffd878",transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}),m=[...hi,hi[0]];for(let v=0;v<m.length-1;v++){const x=m[v],E=m[v+1],T=E[0]-x[0],S=E[1]-x[1],A=Math.hypot(T,S),M=(x[0]+E[0])/2,y=(x[1]+E[1])/2,C=Math.atan2(T,S),D=new ae(new ve(.22,nn*.92,A+.22),b);D.position.set(M,r+nn/2,y),D.rotation.y=C,D.name="outline-edge",D.visible=!1,i.add(D)}const p=document.createElement("div");p.className="unit-card",p.style.padding="4px 8px",p.style.pointerEvents="none",p.innerHTML=`<div class="u-id">${s}</div>`;const _=new Bs(p);return _.position.set(-.8,r+nn/2,14.6),_.name="floor-label",_.visible=!1,i.add(_),i}function Ry(s,e,t,n){const i=[],r=[],o=[],a=[],c=[],l=[],h=nn-.42,u=3,d=1.55,f=1.55,g=.95;for(const v of Bl()){const x=Math.max(1,Math.round(v.len/u)),T=v.len/x/(u-.04);for(let S=0;S<x;S++){const A=(S+.5)/x,M=v.alongX?v.x+A*v.len:v.x,y=v.alongX?v.z:v.z+A*v.len,C=v.alongX?0:Math.PI/2,D=v.alongX?0:v.inward*.13,L=v.alongX?v.inward*.13:0,F=Ey(v,M,y);i.push(qe(M,e+h/2,y,C,T,1,1));const O=F?2.25:f,U=e+(F?.15+O/2:g+f/2);o.push(qe(M+D,U,y+L,C,F?1.2:1,O/f,1));const z=M+D,G=y+L,j=(F?d*1.2:d)/2;a.push(qe(z+(v.alongX?-j:0),U,G+(v.alongX?0:-j),C,1,O/f,1)),a.push(qe(z+(v.alongX?j:0),U,G+(v.alongX?0:j),C,1,O/f,1)),a.push(qe(z,U,G,C,.65,O/f,1)),c.push(qe(z,U-O/2,G,C,F?1.2:1,1,1)),c.push(qe(z,U+O/2,G,C,F?1.2:1,1,1)),F||(c.push(qe(z,U,G,C)),l.push(qe(z,e+g-.04,G+(v.alongX?L*1.4:0)+(v.alongX?0:D*1.4),C,1.15,.7,1.6)),r.push(qe(M+D*.4,e+g/2-.02,y+L*.4,C,.98,(g-.08)/h,1.05)))}}const b=nt(n.clad,t.facade,i);if(b.userData.facade=!0,b.userData.ghostable=!0,s.add(b),r.length){const v=nt(n.clad,t.facade,r);v.userData.facade=!0,v.userData.ghostable=!0,s.add(v)}const m=nt(n.win,t.glass,o,{shadows:!1});m.userData.facade=!0,m.userData.windowGlow=!0,s.add(m);const p=nt(n.mullV,t.mullion,a,{shadows:!1});p.userData.facade=!0,s.add(p);const _=nt(n.mullH,t.mullion,c,{shadows:!1});if(_.userData.facade=!0,s.add(_),l.length){const v=nt(n.mullH,t.facade,l,{shadows:!1});v.userData.facade=!0,s.add(v)}}function Cy(s,e,t,n){const i=[5.35,16.55],r=19.05,o=5.15,a=1.8,c=[],l=[],h=[],u=[],d=[],f=[],g=[];for(const T of i){const S=T+o/2,A=r+a/2+.08,M=e+.16;c.push(qe(S,M,A)),l.push(qe(S,M-.16,A,0,.96,.35,.96));const y=M+.16+1.1/2;h.push(qe(S,y,r+a-.12)),u.push(qe(T+.12,y,A-.04)),d.push(qe(T+o-.12,y,A-.04)),f.push(qe(S,M+.16+1.1,r+a-.12)),g.push(qe(T+.12,M+.16+1.1,A-.04)),g.push(qe(T+o-.12,M+.16+1.1,A-.04))}const b=nt(n.balSlab,t.slabMat,c);b.userData.facade=!0,s.add(b);const m=nt(n.balSlab,t.soffit,l);m.userData.facade=!0,s.add(m);const p=nt(n.balRail,t.railGlass,h,{shadows:!1}),_=nt(n.balRailS,t.railGlass,u,{shadows:!1}),v=nt(n.balRailS,t.railGlass,d,{shadows:!1});for(const T of[p,_,v])T.userData.facade=!0,s.add(T);const x=nt(n.cap,t.capRail,f,{shadows:!1}),E=nt(n.capS,t.capRail,g,{shadows:!1});x.userData.facade=!0,E.userData.facade=!0,s.add(x,E);for(const T of i){const S=new ae(new rn(.05,.05,.03,10),new ot({color:"#fff4d8",emissive:"#ffd090",emissiveIntensity:.4,roughness:1}));S.position.set(T+o/2,e+nn-.28,r+a*.45),S.userData.facade=!0,s.add(S);const A=new Un("#ffd0a0",0,4.5,2);A.position.copy(S.position),A.userData.nightI=1.85,A.userData.goldenI=.2,A.userData.practical=!0,s.add(A),s.userData.practicals||(s.userData.practicals=[]),s.userData.practicals.push(A),s.userData.practicals}}function Py(s,e,t){const n=new Mt;n.userData.floor=Wi;const i=Nr(Wi),r=new ae(t.slab,e.slabMat);r.position.y=i,r.castShadow=!0,r.receiveShadow=!0,r.userData.ghostable=!0,n.add(r);const o=new ae(t.slab,e.soffit);o.position.y=i+.2,o.scale.set(.995,.2,.995),n.add(o),Ly(n,i+.22,1.05,e.stone,e.capRail,e.railGlass);const a=mr.width,c=mr.depth,l=mr.ox+a/2,h=mr.oz+c/2,u=3.35,d=new ae(new ve(a,u,c),e.facade);d.position.set(l,i+.22+u/2,h),d.castShadow=!0,d.userData.ghostable=!0,d.userData.hideInCutaway=!0,n.add(d);const f=[[0,c/2+.03,a*.78,.05,0],[0,-c/2-.03,a*.62,.05,0],[a/2+.03,0,.05,c*.58,Math.PI/2],[-a/2-.03,0,.05,c*.52,Math.PI/2]];for(const[E,T,S,A,M]of f){const y=new ae(new ve(S,u*.7,A),e.glass);y.position.set(l+E,i+.22+u*.5,h+T),y.rotation.y=M,y.userData.windowGlow=!0,n.add(y);const C=5;for(let D=0;D<C;D++){const L=(D+.5)/C,F=new ae(new ve(.045,u*.72,.06),e.mullion),O=Math.abs(S)>Math.abs(A);F.position.set(l+E+(O?(L-.5)*S:0),i+.22+u*.5,h+T+(O?0:(L-.5)*A)),n.add(F)}}const g=new ae(new ve(a+.9,.28,c+.9),e.slabMat);g.position.set(l,i+.22+u+.14,h),g.castShadow=!0,g.userData.hideInCutaway=!0,n.add(g);const b=new ae(new ve(a+1.15,.38,c+1.15),e.finMat);b.position.set(l,i+.22+u+.05,h),b.userData.hideInCutaway=!0,n.add(b),Dy(n,l,i+.22+u+.28,h-c*.15,8.4,6.2,2.45,e.soffit);const m=new ae(new ve(28,4.6,22),new Ct({visible:!1}));m.position.set(13.7,i+2.2,10),m.name="hit",m.userData.floor=Wi,n.add(m);const p=new ae(new ve(28,4.6,22),new Ct({color:"#e8c878",transparent:!0,opacity:.28,depthWrite:!1}));p.position.set(13.7,i+2.2,10),p.name="highlight",p.visible=!1,n.add(p);const _=new ae(new ve(28.6,4.9,22.5),new Ct({color:"#f0d48a",side:Xt,transparent:!0,opacity:.85,depthWrite:!1}));_.position.set(13.7,i+2.2,10),_.name="outline",_.visible=!1,n.add(_);const v=document.createElement("div");v.className="unit-card",v.innerHTML='<div class="u-id">PH</div><div class="u-meta">Penthouse</div>',v.style.pointerEvents="none";const x=new Bs(v);return x.position.set(l,i+4.4,h),x.name="floor-label",x.visible=!1,n.add(x),n}function Dy(s,e,t,n,i,r,o,a,c){const l=[],h=[[-i/2,-r/2],[i/2,-r/2],[-i/2,r/2],[i/2,r/2]];for(const[b,m]of h)l.push(qe(e+b,t+o/2,n+m,0,.18,o,.18));s.add(nt(new ve(1,1,1),a,l));const u=[];u.push(qe(e,t+o,n-r/2,0,i+.3,.16,.18)),u.push(qe(e,t+o,n+r/2,0,i+.3,.16,.18)),u.push(qe(e-i/2,t+o,n,0,.18,.16,r+.3)),u.push(qe(e+i/2,t+o,n,0,.18,.16,r+.3)),s.add(nt(new ve(1,1,1),a,u));const d=[],f=14;for(let b=0;b<f;b++){const m=(b+.5)/f;d.push(qe(e+(m-.5)*i,t+o+.1,n,0,.07,.06,r+.1))}const g=nt(new ve(1,1,1),a,d,{shadows:!1});g.userData.hideInCutaway=!0,s.add(g)}function Ly(s,e,t,n,i,r){const o=[...hi,hi[0]],a=[],c=[],l=[];for(let h=0;h<o.length-1;h++){const u=o[h],d=o[h+1],f=d[0]-u[0],g=d[1]-u[1],b=Math.hypot(f,g),m=(u[0]+d[0])/2,p=(u[1]+d[1])/2,_=Math.atan2(f,g);a.push(qe(m,e+.18,p,_,.16,.36,b)),l.push(qe(m,e+.36+(t-.36)/2,p,_,.03,t-.36,b)),c.push(qe(m,e+t,p,_,.05,.025,b))}s.add(nt(new ve(1,1,1),n,a)),s.add(nt(new ve(1,1,1),r,l,{shadows:!1})),s.add(nt(new ve(1,1,1),i,c,{shadows:!1}))}function Iy(s,e,t){const n=Nr(1),i=Nr(Ol)+nn,r=i-n,o=(n+i)/2,a=[];for(const l of Bl()){if(l.alongX&&Math.abs(l.z-0)<.2)continue;const h=Math.max(1,Math.round(l.len/9));for(let u=0;u<=h;u++){const d=u/h,f=l.alongX?l.x+d*l.len:l.x,g=l.alongX?l.z:l.z+d*l.len,b=l.alongX?0:l.inward*.32,m=l.alongX?l.inward*.32:0,p=l.alongX?0:Math.PI/2;a.push(qe(f+b,o,g+m,p,1.15,r/(nn-.42),1.15))}}const c=nt(new ve(.1,nn-.42,.42),t,a);c.userData.structure=!0,s.add(c),e.push(c)}function ky(s,e,t,n,i,r,o,a,c,l,h,u,d){const f=w=>(w.userData.structure=!0,e.push(w),s.add(w),w),g=Ya(i,by,0,qa());f(g);const b=zl(pr-.35,qa()),m=new ae(b,i);m.position.y=.02,m.castShadow=!0,m.receiveShadow=!0,f(m);const p=Ya(o,.5,pr-.5);p.scale.set(1.04,1,1.04),p.position.x=13.7*(1-1.04),p.position.z=10.6*(1-1.04),f(p);const _=Ya(i,.85,0,qa());_.scale.set(1.04,1,1.04),_.position.x=13.7*(1-1.04),_.position.z=10.6*(1-1.04),f(_);const v=[],x=[],E=pr-.55;for(const w of Bl()){const H=w.alongX&&Math.abs(w.z-0)<.25,ee=Math.max(1,Math.floor(w.len/1.5));for(let ce=0;ce<ee;ce++){const te=(ce+.5)/ee,Le=w.alongX?w.x+te*w.len:w.x,xe=w.alongX?w.z:w.z+te*w.len,Se=w.alongX?0:Math.PI/2,Ye=w.alongX?0:w.inward*.14,fe=w.alongX?w.inward*.14:0;H||(v.push(qe(Le+Ye,E/2,xe+fe,Se,1.46,E,.28)),x.push(qe(Le+Ye*1.6,2.15,xe+fe*1.6,Se,1.05,.85,.06)),x.push(qe(Le+Ye*1.6,4.35,xe+fe*1.6,Se,1.05,.85,.06)))}}f(nt(new ve(1,1,1),i,v)),f(nt(new ve(1,1,.08),c,x,{shadows:!1}));const T=13.7,S=5.1,A=10.3,M=9.8,y=pr-.15,C=new ae(new ve(.35,y,M),i);C.position.set(T-A/2,y/2,S),C.castShadow=!0,f(C);const D=C.clone();D.position.x=T+A/2,f(D);const L=new ae(new ve(A,y,.35),i);L.position.set(T,y/2,S+M/2),L.castShadow=!0,f(L);const F=new ae(new ve(A-.4,.08,M-.2),i);F.position.set(T,.08,S),F.receiveShadow=!0,f(F);const O=new ae(new ve(A-.2,.14,M),a);O.position.set(T,y-.1,S),f(O);const U=new ae(new es(A-.8,y-.8),h);U.position.set(T,y*.48,S+M/2-.25),U.rotation.y=Math.PI,f(U);const z=new Un("#ffd4a0",0,16,2);if(z.position.set(T,3.6,S),z.userData.nightI=3.4,z.userData.goldenI=1.1,z.userData.morningI=1.6,t.push(z),f(z),!d){const w=new Un("#ffe0b0",0,12,2);w.position.set(T,2.4,S-2),w.userData.nightI=2.2,w.userData.goldenI=.6,w.userData.morningI=1,t.push(w),f(w)}const G=6,j=2,ne=(A-.5)/G,ue=(y-.4)/j,Ee=[],K=[],N=[],V=S-M/2-.04;for(let w=0;w<G;w++){for(let H=0;H<j;H++){const ee=T-A/2+.25+(w+.5)*ne,ce=.2+(H+.5)*ue;Ee.push(qe(ee,ce,V,0,ne-.08,ue-.08,1))}K.push(qe(T-A/2+.25+w*ne,y/2,V-.01,0,.06,y-.15,.08))}K.push(qe(T+A/2-.25,y/2,V-.01,0,.06,y-.15,.08));for(let w=0;w<=j;w++)N.push(qe(T,.2+w*ue,V-.01,0,A-.3,.07,.08));f(nt(new ve(1,1,.05),c,Ee,{shadows:!1})),f(nt(new ve(1,1,1),l,K)),f(nt(new ve(1,1,1),l,N));const q=new ae(new ve(.65,y+.2,.8),i);q.position.set(T-A/2-.05,y/2,V+.15),q.castShadow=!0,f(q);const Q=q.clone();Q.position.x=T+A/2+.05,f(Q);const de=new ae(new ve(A+1.4,.65,.95),o);de.position.set(T,y+.15,V+.12),de.castShadow=!0,f(de);const be=new ae(new ve(A+.8,.18,.7),i);be.position.set(T,.12,V+.05),f(be);const ge=new ae(new ve(3.2,1.05,.7),i);ge.position.set(T,.55,S+1.4),ge.castShadow=!0,f(ge);const ze=new ae(new ve(3.4,.06,.85),u.gold??o);ze.position.set(T,1.08,S+1.4),f(ze);for(const w of[-1.15,1.15]){const H=new ae(new ve(1.35,2.2,.08),l);H.position.set(Vi.x+Vi.w/2+w,1.15,Vi.z+.15),f(H)}const $=16.5,oe=11,k=4.5,Ae=V-oe/2-.2,le=new ae(new ve($,.28,oe),o);le.position.set(T,k,Ae),le.castShadow=!0,f(le);const ye=new ae(new ve($-.2,.08,oe-.2),a);ye.position.set(T,k-.16,Ae),f(ye);const pe=[];for(let w=0;w<5;w++)for(let H=0;H<3;H++)pe.push(qe(T+(w-2)*($/5.4),k-.22,Ae+(H-1)*(oe/3.6),0,$/6.2,.08,oe/4.2));f(nt(new ve(1,1,1),a,pe,{shadows:!1}));const Fe=[];for(const w of[-5.8,0,5.8])for(const H of[-oe/2+.5,oe/2-.8])Fe.push(qe(T+w,k/2,Ae+H,0,.7,k,.7));const Ce=nt(new rn(.5,.56,1,16),i,Fe);f(Ce);const P=[];for(const w of[-5.8,0,5.8])for(const H of[-oe/2+.5,oe/2-.8])P.push(qe(T+w,k-.08,Ae+H,0,.75,.14,.75));f(nt(new ve(1,1,1),o,P));for(let w=0;w<3;w++){const H=new ae(new ve(8.5-w*.15,.14,.9),i);H.position.set(T,.08+w*.14,V-.5-w*.28),H.receiveShadow=!0,f(H)}for(const w of[-4,0,4]){const H=new Un("#ffe2b8",0,9,2);H.position.set(T+w,k-.35,Ae),H.userData.nightI=1.7,H.userData.goldenI=.4,t.push(H),f(H)}}async function Ny(s,e){const t=new Fl,n=["CommonTree_1.glb","CommonTree_2.glb","CommonTree_3.glb","PalmTree_1.glb","PalmTree_2.glb","Bush_1.glb","Bush_2.glb","BushBerries_1.glb"],i=[],r=[],o=[];if(await Promise.all(n.map(async d=>{try{const g=(await t.loadAsync(`./models/trees/${d}`)).scene;g.updateMatrixWorld(!0);const b=new mn().setFromObject(g),p=b.getSize(new I).y||1,_=new Mt;_.add(g),g.position.y=-b.min.y;const v=d.startsWith("Bush")?1.05:d.startsWith("Palm")?7.2:7.8;_.scale.setScalar(v/p),_.traverse(x=>{const E=x;if(!E.isMesh)return;E.castShadow=!0,E.receiveShadow=!0;const T=Array.isArray(E.material)?E.material:[E.material];for(const S of T){if(!(S instanceof ot))continue;S.metalness=.02,S.roughness=.86,S.envMapIntensity=.35;const A=(S.name||"").toLowerCase();A.includes("green")?(S.color.set("#2d6a34"),S.roughness=.9):A.includes("wood")&&(S.color.set("#4a2e1c"),S.roughness=.82)}}),d.startsWith("Bush")?r.push(_):d.startsWith("Palm")?o.push(_):i.push(_)}catch(f){console.warn("[tower] tree failed",d,f)}})),!i.length&&!o.length)return;const a=(d,f,g,b,m=1)=>{const p=d.clone(!0);p.position.set(f,0,g),p.rotation.y=b,p.scale.multiplyScalar(m),p.userData.structure=!0,s.add(p),e.push(p)};[[-22,-52.5,.95],[-8,-52.5,1.05],[6,-52.5,1],[22,-52.5,1.08],[36,-52.5,.98],[50,-52.5,1.05]].forEach(([d,f,g],b)=>{const m=i[b%Math.max(1,i.length)];m&&a(m,d,f,b*.7,g)}),[[4.6,-24],[22.8,-24],[4.6,-12],[22.8,-12],[3.2,-4],[24.2,-4]].forEach(([d,f],g)=>{const b=o[g%Math.max(1,o.length)]??i[0];b&&a(b,d,f,g*.5,.95+g%3*.06)}),[[-12,36,1.15],[-11,28,.95],[-13,18,1.05],[-11,8,1],[40,36,1.12],[39,26,.98],[41,16,1.08],[39,6,.95],[2,40,1.05],[13.7,42,1.2],[26,40,1],[-10,-18,.95],[38,-18,1],[-8,32,.85],[36,32,.9]].forEach(([d,f,g],b)=>{const m=i[b%Math.max(1,i.length)];m&&a(m,d,f,b*1.15,g)}),[[6.4,-31],[21,-31],[6.4,-13],[21,-13],[6,26],[21.4,26],[8,33],[19,33],[-14,-28],[42,-28],[-14,40],[42,40]].forEach(([d,f],g)=>{const b=r[g%Math.max(1,r.length)];b&&a(b,d,f,g*.9,1.05)})}function Uy(s,e,t){const n=Gu(!1),i=Gu(!0);n.repeat.set(2,3),i.repeat.set(2,3);const r=new ot({color:"#4a5360",map:n,roughness:.9,metalness:.05,envMapIntensity:.22,emissiveMap:i,emissive:"#000000",emissiveIntensity:0});r.userData.cityDay=n,r.userData.cityNight=i,r.userData.isCity=!0;const o=[],a=h=>{const u=Math.sin(h*127.1+311.7)*43758.5453;return u-Math.floor(u)},c=t?36:64;for(let h=0;h<c;h++){const d=h<c*.55?-Math.PI*.15+a(h)*Math.PI*1.3:h/c*Math.PI*2+a(h)*.25,f=290+a(h+3)*150+h%7*8,g=13.7+Math.cos(d)*f,b=8+Math.sin(d)*f,m=14+a(h+7)*22,p=12+a(h+11)*18,_=22+a(h+17)*(a(h)>.72?70:38);o.push(qe(g,_/2,b,d+Math.PI/2,m,_,p))}const l=nt(new ve(1,1,1),r,o,{shadows:!1});l.userData.structure=!0,l.userData.cityMat=r,l.frustumCulled=!1,s.add(l),e.push(l),l.userData.setCityNight=(h,u)=>{r.map=h?i:n,r.emissiveMap=i,r.emissive.set(h?"#ffd8a0":u?"#1a1008":"#000000"),r.emissiveIntensity=h?1.15:u?.1:0,r.color.set(h?"#10141a":u?"#5a554c":"#4a5360"),r.needsUpdate=!0}}const ar=new I;function vn(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;ar.copy(e),ar[n]=0,ar.normalize();const l=.5*o/(o+a),h=1-ar.angleTo(s)/c;return Math.sign(ar[t])===1?h*l:a/(o+a)+l+l*(1-h)}class Fy extends ve{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new I,c=new I,l=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new I,b=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=vn(g,c,"z","y",r,n),d[p+1]=1-vn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-vn(g,c,"z","y",r,n),d[p+1]=1-vn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-vn(g,c,"x","z",r,e),d[p+1]=vn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-vn(g,c,"x","z",r,e),d[p+1]=1-vn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-vn(g,c,"x","y",r,e),d[p+1]=1-vn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=vn(g,c,"x","y",r,e),d[p+1]=1-vn(g,c,"y","x",r,t);break}}}const Za=new WeakMap;class Oy extends Pi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Dr(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,vt,n).catch(n)}decodeDracoFile(e,t,n,i,r=zt,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Za.has(e)){const c=Za.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[r]={resolve:l,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Za.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Gt;e.index&&t.setIndex(new jt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,c=new jt(o,a);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==vt)return;const n=new Ue;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),it.toWorkingColorSpace(n,vt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Dr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=zy.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function zy(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(c),l),g=f.attributes.map(b=>b.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const b={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let _,v;if(l.useUniqueIDs)v=h[m],_=a.GetAttributeByUniqueId(d,v);else{if(v=a.GetAttributeId(d,o[h[m]]),v===-1)continue;_=a.GetAttribute(d,v)}const x=i(o,a,d,m,p,_);m==="color"&&(x.vertexColorSpace=l.vertexColorSpace),b.attributes.push(x)}return g===o.TRIANGULAR_MESH&&(b.index=n(o,a,d)),o.destroy(d),b}function n(o,a,c){const h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,c,l,h,u){const d=u.num_components(),g=c.num_points()*d,b=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(b);a.GetAttributeDataArrayForAllPoints(c,u,m,b,p);const _=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:_,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var df=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,o=WebAssembly.instantiate(a(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function a(p){for(var _=new Uint8Array(p.length),v=0;v<p.length;++v){var x=p.charCodeAt(v);_[v]=x>96?x-97:x>64?x-39:x+4}for(var E=0,v=0;v<p.length;++v)_[E++]=_[v]<60?n[_[v]]:(_[v]-60)*64+_[++v];return _.buffer.slice(0,E)}function c(p,_,v,x,E,T){var S=r.exports.sbrk,A=v+3&-4,M=S(A*x),y=S(E.length),C=new Uint8Array(r.exports.memory.buffer);C.set(E,y);var D=p(M,v,x,y,E.length);if(D==0&&T&&T(M,A,x),_.set(C.subarray(M,M+v*x)),S(M-S(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(v){var x=v.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function g(p){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(v),E=0;E<p;++E)u[E]=f(x);URL.revokeObjectURL(x)}function b(p,_,v,x,E){for(var T=u[0],S=1;S<u.length;++S)u[S].pending<T.pending&&(T=u[S]);return new Promise(function(A,M){var y=new Uint8Array(v),C=d++;T.pending+=p,T.requests[C]={resolve:A,reject:M},T.object.postMessage({id:C,count:p,size:_,source:y,mode:x,filter:E},[y.buffer])})}function m(p){o.then(function(){var _=p.data;try{var v=new Uint8Array(_.count*_.size);c(r.exports[_.mode],v,_.count,_.size,_.source,r.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(x){self.postMessage({id:_.id,count:_.count,action:"reject",value:x})}})}return{ready:o,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,v,x,E){c(r.exports.meshopt_decodeVertexBuffer,p,_,v,x,r.exports[l[E]])},decodeIndexBuffer:function(p,_,v,x){c(r.exports.meshopt_decodeIndexBuffer,p,_,v,x)},decodeIndexSequence:function(p,_,v,x){c(r.exports.meshopt_decodeIndexSequence,p,_,v,x)},decodeGltfBuffer:function(p,_,v,x,E,T){c(r.exports[h[E]],p,_,v,x,r.exports[l[T]])},decodeGltfBufferAsync:function(p,_,v,x,E){return u.length>0?b(p,_,v,h[x],l[E]):o.then(function(){var T=new Uint8Array(p*_);return c(r.exports[h[x]],T,p,_,v,r.exports[l[E]]),T})}}}();const Ka={sofaModern:{file:"v5/sofa_3seat.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},sofaClassic:{file:"v5/sofa_3seat.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},sofaAlt:{file:"v5/sofa_2seat.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},sofaChaise:{file:"v5/chaise.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},coffeeModern:{file:"v5/coffee_rect.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},coffeeClassic:{file:"v5/coffee_rect.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},armchair:{file:"v5/armchair_lounge.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},ottoman:{file:"v5/cushions.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},diningChair:{file:"v5/dining_chair_uphol.glb",role:"mixed",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},woodChair:{file:"v5/dining_chair_timber.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},diningTable:{file:"v5/dining_table6.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},woodTable:{file:"v5/dining_table6.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},bed:{file:"v5/bed_double.glb",role:"mixed",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},nightstand:{file:"v5/nightstand.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},console:{file:"v5/console.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},sideTable:{file:"v5/console.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},cabinet:{file:"v5/chest_drawers.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},wardrobe:{file:"v5/wardrobe_sliding.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},chest:{file:"v5/chest_drawers.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},tv:{file:"v5/console.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},lamp:{file:"v5/lamp_floor.glb",role:"metal",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},plant:{file:"potted_plant_04.glb",role:"plant",yawOffset:0,author:"James Ray Cock",source:"https://polyhaven.com/a/potted_plant_04"},rug:{file:"v5/rug_wool.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},toilet:{file:"v5/wc_close.glb",role:"ceramic",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},basin:{file:"v5/basin_round.glb",role:"ceramic",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},vanity:{file:"v5/vanity_800.glb",role:"mixed",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},shower:{file:"v5/shower_enclosure.glb",role:"mixed",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},fridge:{file:"v5/kit_fridge_housing.glb",role:"metal",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},stool:{file:"v5/dining_chair_timber.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"}};let Ao=null,tl=null;function By(s,e){return tl?.ready?Promise.resolve(tl):Ao||(Ao=Hy(s,e),Ao)}async function Hy(s,e){const t="./models/",n="./draco/",i=new Oy;i.setDecoderPath(n),i.preload();const r=new Fl;r.setDRACOLoader(i),r.setMeshoptDecoder(df);const o=new Map,a=Object.keys(Ka);let c=0;await Promise.all(a.map(async h=>{const u=Ka[h];try{const f=(await r.loadAsync(t+u.file)).scene;f.updateMatrixWorld(!0);const g=new mn().setFromObject(f),b=g.getSize(new I),m=g.min.clone();f.traverse(p=>{const _=p;if(_.isMesh&&(_.castShadow=!0,_.receiveShadow=!0,_.material)){const v=Array.isArray(_.material)?_.material:[_.material];for(const x of v)"envMapIntensity"in x&&(x.envMapIntensity=u.role==="wood"||u.role==="fabric"?.55:.85)}}),o.set(h,{root:f,size:b,min:m})}catch(d){console.warn(`[catalog] failed to load ${h}:`,d)}finally{c+=1,e?.(c/a.length)}}));const l={ready:!0,has(h){return o.has(h)},instantiate(h,u){const d=o.get(h);if(!d)return null;const f=Ka[h],g=d.root.clone(!0);u.shareMaterials||g.traverse(x=>{const E=x;E.isMesh&&(Array.isArray(E.material)?E.material=E.material.map(T=>T.clone()):E.material&&(E.material=E.material.clone()))});const b=new Mt;b.name=`model:${h}`,b.userData.role=f.role,b.userData.modelId=h,b.add(g);const m=d.size.x||1,p=d.size.y||1,_=d.size.z||1;let v=1;if(u.width&&u.width>0&&u.depth&&u.depth>0)v=Math.min(u.width/m,u.depth/_);else if(u.width&&u.width>0){const x=Math.max(m,_);v=u.width/x}else u.height&&u.height>0&&(v=u.height/p);return g.scale.setScalar(v),g.position.set(-((d.min.x+d.size.x/2)*v),-d.min.y*v,-((d.min.z+d.size.z/2)*v)),b.position.set(u.x,u.y??0,u.z),b.rotation.y=u.rotY+f.yawOffset,ff(b,f.role,u.prefs,u.mats),b},proto(h,u){return o.get(h)??null}};return tl=l,l}function Gy(s){return s==="traditional"?"sofaClassic":s==="luxury"?"sofaAlt":"sofaModern"}function ff(s,e,t,n){const i=Ps[t.style],r=new Ue(i.fabric),o=new Ue(i.wood),a=new Ue("#c4a265");s.traverse(c=>{const l=c;if(!l.isMesh)return;const h=Array.isArray(l.material)?l.material:[l.material];for(const u of h){if(!(u instanceof ot)&&!(u instanceof Et))continue;const d=u;d.userData.baseColor||(d.userData.baseColor=d.color.clone());const f=d.userData.baseColor;d.color.copy(f);const g=d.metalness,b=d.roughness,m=`${d.name||""} ${l.name||""}`.toLowerCase(),p=/fabric|linen|mustard|velvet|cushion|uphol|grey|gray|blue/.test(m),_=/walnut|oak|wood|carcass|front/.test(m),v=/metal|chrome|steel|black/.test(m);/ceramic/.test(m)||(p||e==="fabric"&&!_&&!v?(d.color.lerp(r,t.style==="minimal"?.45:.7),n.fabric.normalMap&&!d.normalMap&&(d.normalMap=n.fabric.normalMap,d.roughnessMap=n.fabric.roughnessMap,d.normalScale=new se(.55,.55)),d.roughness=Math.max(.82,b),d.metalness=0):(_||e==="wood"||e==="mixed"&&g<.25&&!v&&!p)&&(d.color.lerp(o,t.style==="traditional"?.65:.5),n.wood.map&&!d.map&&(d.map=n.wood.map,d.normalMap=n.wood.normalMap,d.roughnessMap=n.wood.roughnessMap,d.normalScale=new se(.45,.45)),t.style==="traditional"&&d.color.lerp(new Ue("#5c3310"),.25))),t.style==="luxury"&&(v||g>.45)&&(d.color.lerp(a,.5),d.metalness=Math.min(1,g+.15),d.roughness=Math.max(.15,b-.12)),d.needsUpdate=!0}})}function Vy(s,e,t){s.traverse(n=>{n.userData&&n.userData.role&&n.userData.modelId&&ff(n,n.userData.role,e,t)})}function Hl(s){const e=s.map(a=>a[0]),t=s.map(a=>a[1]),n=Math.min(...e),i=Math.max(...e),r=Math.min(...t),o=Math.max(...t);return{minX:n,maxX:i,minZ:r,maxZ:o,cx:(n+i)/2,cz:(r+o)/2,w:i-n,d:o-r}}function Gl(s,e,t){let n=!1;const i=s.length;for(let r=0,o=i-1;r<i;o=r++){const[a,c]=s[r],[l,h]=s[o];c>t!=h>t&&e<(l-a)*(t-c)/(h-c+1e-12)+a&&(n=!n)}return n}function Xn(s){return{fx:Math.sin(s),fz:Math.cos(s)}}function $i(s,e,t,n,i){const r=Math.cos(i),o=Math.sin(i);let a=1/0,c=-1/0,l=1/0,h=-1/0;for(const[u,d]of[[-t/2,-n/2],[t/2,-n/2],[t/2,n/2],[-t/2,n/2]]){const f=s+u*r+d*o,g=e-u*o+d*r;f<a&&(a=f),f>c&&(c=f),g<l&&(l=g),g>h&&(h=g)}return{minX:a,maxX:c,minZ:l,maxZ:h}}function yn(s,e){const t=Math.max(0,Math.min(s.maxX,e.maxX)-Math.max(s.minX,e.minX)),n=Math.max(0,Math.min(s.maxZ,e.maxZ)-Math.max(s.minZ,e.minZ));return t*n}function Br(s,e){const t=(s.ax+s.bx)/2,n=(s.az+s.bz)/2,i=s.bx-s.ax,r=s.bz-s.az,o=Math.hypot(i,r)||1,a=-r/o,c=i/o,l=(h,u)=>Gl(e,t+h*.25,n+u*.25);return l(a,c)?{mx:t,mz:n,ix:a,iz:c,width:s.width||o}:l(-a,-c)?{mx:t,mz:n,ix:-a,iz:-c,width:s.width||o}:null}function Vl(s,e=.6){const t=-s.iz,n=s.ix,i=Math.max(s.width,.7)/2,r=[];for(const o of[-i,i])for(const a of[.04,e])r.push([s.mx+t*o+s.ix*a,s.mz+n*o+s.iz*a]);return{minX:Math.min(...r.map(o=>o[0])),maxX:Math.max(...r.map(o=>o[0])),minZ:Math.min(...r.map(o=>o[1])),maxZ:Math.max(...r.map(o=>o[1]))}}function Wy(s,e,t,n){const i=[],r=s.filter(o=>!o.ghost);for(let o=0;o<r.length;o++)for(let a=o+1;a<r.length;a++){const c=r[o],l=r[a];if(c.group&&c.group===l.group)continue;const h=yn(c,l);h>.008&&i.push({severity:"error",a:`${c.roomId}/${c.id}`,b:`${l.roomId}/${l.id}`,kind:"overlap",message:`${c.kind} overlaps ${l.kind} by ${h.toFixed(3)} m²`})}for(const o of r)if(!o.wallHug)for(const a of e){const c=yn(o,a);c>.01&&i.push({severity:"error",a:`${o.roomId}/${o.id}`,b:"wall",kind:"wall",message:`${o.kind} intersects a wall by ${c.toFixed(3)} m²`})}for(const{poly:o,door:a}of t){const c=Br(a,o);if(!c)continue;const l=Vl(c,.6);for(const h of r){if(h.tight&&!["shower","wardrobe","kitchen","fridge","sofa","bed"].includes(h.kind))continue;const u=yn(h,l);u>.02&&i.push({severity:"error",a:`${h.roomId}/${h.id}`,b:"doorway",kind:"doorway",message:`${h.kind} blocks a 60 cm doorway clearance (${u.toFixed(3)} m²)`})}}for(const{sofa:o,coffee:a,gap:c}of n)(c<.38||c>.52)&&i.push({severity:"error",a:`${o.roomId}/${o.id}`,b:`${a.roomId}/${a.id}`,kind:"coffee-gap",message:`coffee table is ${c.toFixed(2)} m from the sofa front (need 0.40–0.45 m)`});return i}function Xy(s,e,t,n){const i=[],r=n.map(o=>({minX:o.x,maxX:o.x+o.w,minZ:o.z,maxZ:o.z+o.d}));for(const o of s){if(o.type!=="bedroom")continue;const a=Hl(o.polygon),c=e.filter(u=>u.roomId===o.id&&u.kind==="bed"),l=e.filter(u=>u.roomId===o.id&&u.kind==="nightstand"),h=e.filter(u=>u.roomId===o.id&&u.kind==="bench");if(!c.length){i.push({severity:"warn",a:`${o.id}`,b:"bed",kind:"bed",message:`${o.id} has no bed`});continue}for(const u of c){const{fx:d,fz:f}=Xn(u.rot),g={x:u.x-d*u.d/2,z:u.z-f*u.d/2},b={x:u.x+d*u.d/2,z:u.z+f*u.d/2},m=Math.min(Math.abs(g.z-a.minZ),Math.abs(g.z-a.maxZ),Math.abs(g.x-a.minX),Math.abs(g.x-a.maxX));m>.18&&i.push({severity:"error",a:`${o.id}/${u.id}`,b:"wall",kind:"bed",message:`headboard is ${m.toFixed(2)} m from the nearest wall (should hug a solid wall)`});const p=$i(g.x,g.z,u.w,.4,u.rot),_={minX:p.minX-.15,maxX:p.maxX+.15,minZ:p.minZ-.15,maxZ:p.maxZ+.15};let v=0;for(const E of r)v+=yn(_,E);v>.08&&i.push({severity:"error",a:`${o.id}/${u.id}`,b:"window",kind:"bed",message:`headboard sits under a window (${v.toFixed(2)} m² overlap)`});const x=t.map(E=>Br(E,o.polygon)).filter(E=>E!==null);for(const E of x){const T=Vl(E,.5);yn(_,T)>.05&&i.push({severity:"error",a:`${o.id}/${u.id}`,b:"doorway",kind:"bed",message:"headboard sits in a doorway"})}for(const E of h){const T=Math.hypot(E.x-g.x,E.z-g.z),S=Math.hypot(E.x-b.x,E.z-b.z);T<S-.05&&i.push({severity:"error",a:`${o.id}/${E.id}`,b:`${u.id}`,kind:"bed",message:`bench is at the headboard (${T.toFixed(2)} m) instead of the foot (${S.toFixed(2)} m)`})}for(const E of l){const T=Math.hypot(E.x-g.x,E.z-g.z),S=Math.hypot(E.x-b.x,E.z-b.z);S<T-.05&&i.push({severity:"error",a:`${o.id}/${E.id}`,b:`${u.id}`,kind:"bed",message:`nightstand is at the foot (${S.toFixed(2)} m) instead of the head (${T.toFixed(2)} m)`})}l.length<2&&a.w*a.d>9&&i.push({severity:"warn",a:`${o.id}`,b:"nightstand",kind:"bed",message:`${o.id} has ${l.length} nightstand(s); expected one on each side of the headboard`})}}return i}function jy(s){return s.map(e=>`[${e.severity}] ${e.kind}: ${e.message} (${e.a} × ${e.b})`).join(`
`)}function qy(s,e){const t=s.filter(n=>n.severity==="error");if(t.length)throw new Error(`Layout failed for ${e}:
${jy(t)}`)}const re={sofaD:.9,sofaLen:2.2,sofaLenLarge:2.45,coffeeD:.55,coffeeGap:.43,coffeeH:.38,tvD:.4,tvW:1.7,tvH:.44,armchairW:.78,armchairD:.82,table4w:1.4,table4d:.85,table6w:1.8,table6d:.9,chairW:.44,chairD:.48,chairClear:.14,bedMasterW:1.9,bedMasterD:2.1,bedW:1.5,bedD:2,nightW:.44,nightD:.4,nightGap:.08,wardD:.55,wardH:2.2,kitD:.6,fridgeW:.6,fridgeD:.64,fridgeH:1.85,basinW:.7,basinD:.46,toiletW:.4,toiletD:.68,shower:.85,loungeW:.68,loungeD:.82,plantR:.26,lampR:.16};function nl(s){const e=$i(s.x,s.z,s.w,s.d,s.rot);return{id:s.id,roomId:s.roomId,kind:s.kind,...e,group:s.group,wallHug:s.wallHug,tight:s.tight,ghost:s.ghost}}function Yy(s,e){const t=[];for(const n of e){const i=Br(n,s.polygon);i&&t.push(Vl(i,.6))}return t}function Zy(s,e,t){for(const n of s)if(Gl(n,e,t))return!0;return!1}function il(s,e,t,n,i,r,o={}){if(o.ghost)return!0;const a=$i(e,t,n,i,r),c=[[a.minX,a.minZ],[a.maxX,a.minZ],[a.maxX,a.maxZ],[a.minX,a.maxZ],[e,t]],l=o.wallHug?-.04:.02,{a:h}=s;if((a.minX<h.minX+l||a.maxX>h.maxX-l||a.minZ<h.minZ+l||a.maxZ>h.maxZ-l)&&(!Gl(s.room.polygon,e,t)||!o.wallHug&&(a.minX<h.minX-.02||a.maxX>h.maxX+.02||a.minZ<h.minZ-.02||a.maxZ>h.maxZ+.02)))return!1;for(const[u,d]of c)if(Zy(s.avoid,u,d))return!1;if(o.tight){for(const u of s.doorBoxes)if(yn(a,u)>.04)return!1}else for(const u of s.doorBoxes)if(yn(a,u)>.015)return!1;for(const u of s.out){if(u.ghost||o.group&&u.group===o.group)continue;const d=$i(u.x,u.z,u.w,u.d,u.rot);if(yn(a,d)>.008)return!1}return!0}function lt(s,e){if(!il(s,e.x,e.z,e.w,e.d,e.rot,e))return null;const t={...e,roomId:s.room.id};return s.out.push(t),t}function Ky(s,e,t=[],n=[],i=[]){const r=Hl(s.polygon);if(r.w<.8||r.d<.8)return[];const o={room:s,a:r,prefs:e,avoid:t,doorBoxes:Yy(s,n),windowBoxes:i.map(a=>({minX:a.x,maxX:a.x+a.w,minZ:a.z,maxZ:a.z+a.d})),out:[]};switch(s.type){case"living":$y(o);break;case"kitchen":eM(o);break;case"bedroom":rM(o,/master|1/i.test(s.name)||s.id==="master"||s.id==="bedroom1");break;case"bathroom":oM(o);break;case"utility":break;case"lobby":case"hall":aM(o);break;case"dressing":case"linen":cM(o);break;case"terrace":case"balcony":lM(o);break}if(e.style==="traditional"&&s.type==="living"&&r.w*r.d>16){for(const[a,c]of ea(r,.38))if(lt(o,{id:"mandir",kind:"mandir",x:a,z:c,rot:0,w:.5,d:.28,h:1.1,wallHug:!0,tight:!0,variant:"traditional"}))break}return o.out}function ea(s,e){return[[s.maxX-e,s.maxZ-e],[s.minX+e,s.maxZ-e],[s.maxX-e,s.minZ+e],[s.minX+e,s.minZ+e]]}function $y(s){const{a:e,prefs:t,room:n}=s,i=e.w>=e.d,r=/kitchen/i.test(n.name)||n.id==="lounge",o=n.id==="lounge"?"south":"north",a=i&&e.w>=6.2,c=Math.min(i?e.w*.4:e.d*.46,a?re.sofaLenLarge:re.sofaLen),l=re.sofaD,h=a&&!r;let u,d,f,g,b,m;i&&r&&o==="south"?(u=e.cx,d=e.maxZ-.08-l/2,f=Math.PI,g=e.maxX-.08-re.tvD/2,b=e.cz,m=-Math.PI/2):i?(u=e.cx,d=e.minZ+.08+l/2,f=0,g=e.cx,b=e.maxZ-.08-re.tvD/2,m=Math.PI):(u=e.minX+.08+l/2,d=e.cz,f=Math.PI/2,g=e.maxX-.08-re.tvD/2,b=e.cz,m=-Math.PI/2),il(s,u,d,c,l,f,{wallHug:!0,group:"sofa"})||(u=i?e.cx:e.maxX-.08-l/2,d=i?e.maxZ-.08-l/2:e.cz,f=i?Math.PI:-Math.PI/2,g=i?e.cx:e.minX+.08+re.tvD/2,b=i?e.minZ+.08+re.tvD/2:e.cz,m=i?0:Math.PI/2);const{fx:p,fz:_}=Xn(f);lt(s,{id:"sofa",kind:"sofa",x:u,z:d,rot:f,w:c,d:l,h:.82,wallHug:!0,group:"sofa",variant:h?"l-shape":t.style});let v=null;if(h){const O=Xn(f-Math.PI/2),U=1.45,z=u+p*((U-l)/2)+O.fx*(c/2-.42),G=d+_*((U-l)/2)+O.fz*(c/2-.42);lt(s,{id:"sofa-chaise",kind:"sofa-chaise",x:z,z:G,rot:f,w:.84,d:U,h:.82,wallHug:!0,group:"sofa",variant:t.style})&&(v=O)}const x=l/2+re.coffeeGap+re.coffeeD/2,E=Math.min(.95,c*.48),T=v?{fx:-v.fx,fz:-v.fz}:{fx:0,fz:0},S=v?.32:0,A=u+p*x+T.fx*S,M=d+_*x+T.fz*S;lt(s,{id:"coffee",kind:"coffee",x:A,z:M,rot:f,w:E,d:re.coffeeD,h:re.coffeeH,variant:t.style==="luxury"?"marble":"wood"});const y=Math.min(re.tvW,(i?e.w:e.d)*.4);lt(s,{id:"tv",kind:"tv",x:g,z:b,rot:m,w:y,d:re.tvD,h:re.tvH,wallHug:!0,variant:t.style});const C=Math.min(e.w*.48,2.4),D=Math.min(e.d*.4,1.8);if(lt(s,{id:"rug",kind:"rug",x:u+p*1.15,z:d+_*1.15,rot:f,w:C,d:D,h:.02,ghost:!0,tight:!0}),/dining/i.test(n.name)||e.w>5.4||e.d>5.4){const O=e.w*e.d>28?6:4,U=O===6?re.table6w:re.table4w,z=O===6?re.table6d:re.table4d,G=Math.max(1.65,Math.min((i?e.w:e.d)*.26,2.2)),ne=(i?[[e.minX+G,e.cz],[e.maxX-G,e.cz]]:[[e.cx,e.minZ+G],[e.cx,e.maxZ-G]]).find(([ue,Ee])=>il(s,ue,Ee,U,z,0,{group:"dining"})&&Math.hypot(ue-u,Ee-d)>=2.4);ne&&Jy(s,ne[0],ne[1],O,U,z)}if(a){const O=i?[{x:e.minX+.08+re.armchairD/2,z:d+_*1.85,rot:Math.PI/2},{x:e.maxX-.08-re.armchairD/2,z:d+_*1.85,rot:-Math.PI/2}]:[{x:u+p*2.2,z:e.minZ+.08+re.armchairD/2,rot:0},{x:u+p*2.2,z:e.maxZ-.08-re.armchairD/2,rot:Math.PI}];for(const U of O)if(!(Math.hypot(U.x-u,U.z-d)<1.6)&&lt(s,{id:"armchair",kind:"armchair",x:U.x,z:U.z,rot:U.rot,w:re.armchairW,d:re.armchairD,h:.8,variant:t.style}))break}r&&Qy(s,o);let F=0;for(const[O,U]of ea(e,.36))if(!(Math.hypot(O-u,U-d)<1.15)){if(F===0)lt(s,{id:"plant",kind:"plant",x:O,z:U,rot:0,w:re.plantR*2,d:re.plantR*2,h:1.15,tight:!0,wallHug:!0})&&F++;else if(F===1&&n.id==="lounge")lt(s,{id:"plant2",kind:"plant",x:O,z:U,rot:0,w:re.plantR*2,d:re.plantR*2,h:1,tight:!0,wallHug:!0})&&F++;else if(lt(s,{id:"lamp",kind:"lamp",x:O,z:U,rot:0,w:re.lampR*2,d:re.lampR*2,h:1.5,tight:!0,wallHug:!0,variant:t.style}))break}lt(s,{id:"art",kind:"art",x:i?e.minX+.04:e.cx,z:i?e.cz:e.minZ+.04,rot:i?Math.PI/2:0,w:.9,d:.04,h:.65,wallHug:!0,tight:!0,ghost:!0,variant:t.style})}function Jy(s,e,t,n,i,r){const{prefs:o}=s;lt(s,{id:"dining",kind:"diningTable",x:e,z:t,rot:0,w:i,d:r,h:.75,group:"dining",variant:o.style}),(n===6?[[-i*.28,r/2+re.chairClear+re.chairD/2,Math.PI],[i*.28,r/2+re.chairClear+re.chairD/2,Math.PI],[-i*.28,-(r/2+re.chairClear+re.chairD/2),0],[i*.28,-(r/2+re.chairClear+re.chairD/2),0],[-(i/2+re.chairClear+re.chairD/2),0,Math.PI/2],[i/2+re.chairClear+re.chairD/2,0,-Math.PI/2]]:[[-i*.22,r/2+re.chairClear+re.chairD/2,Math.PI],[i*.22,r/2+re.chairClear+re.chairD/2,Math.PI],[-i*.22,-(r/2+re.chairClear+re.chairD/2),0],[i*.22,-(r/2+re.chairClear+re.chairD/2),0]]).forEach(([c,l,h],u)=>{lt(s,{id:`chair-${u}`,kind:"diningChair",x:e+c,z:t+l,rot:h,w:re.chairW,d:re.chairD,h:.85,tight:!0,group:"dining",variant:o.style})})}function pf(s,e,t,n,i,r){const{fx:o,fz:a}=Xn(t),c=-a,l=o;let h=-n/2,u=n/2;const d=$i(s,e,n,i,t);for(const b of r){if(yn(d,b)<.01)continue;const m=(b.minX+b.maxX)/2,p=(b.minZ+b.maxZ)/2,_=(m-s)*c+(p-e)*l,v=Math.max(b.maxX-b.minX,b.maxZ-b.minZ)/2+.12,x=_-v,E=_+v,T=Math.min(u,x)-h,S=u-Math.max(h,E);if(T>=S&&T>.9)u=Math.min(u,x);else if(S>.9)h=Math.max(h,E);else return null}const f=u-h;if(f<.9)return null;const g=(h+u)/2;return{x:s+c*g,z:e+l*g,len:f}}function Qy(s,e){const{a:t,prefs:n}=s,i=re.kitD;let r=Math.min(e==="north"||e==="south"?t.w-.5:t.d-.5,3.4),o=t.cx,a=t.cz,c=0;e==="south"&&(a=t.minZ+i/2+.06,c=0,o=t.cx),e==="north"&&(a=t.maxZ-i/2-.06,c=Math.PI,o=t.cx),e==="east"&&(o=t.maxX-i/2-.06,c=-Math.PI/2,a=t.cz),e==="west"&&(o=t.minX+i/2+.06,c=Math.PI/2,a=t.cz);const l=pf(o,a,c,r,i,s.doorBoxes);if(!l)return;o=l.x,a=l.z,r=l.len,lt(s,{id:"kitchen",kind:"kitchen",x:o,z:a,rot:c,w:r,d:i,h:2.2,wallHug:!0,group:"kitchen",variant:n.kitchen+"-"+n.style+"-hob"});const{fx:h,fz:u}=Xn(c),d=-u,f=h;for(const g of[1,-1]){const b=o+d*g*(r/2-.32)+h*.02,m=a+f*g*(r/2-.32)+u*.02;if(lt(s,{id:"fridge",kind:"fridge",x:b,z:m,rot:c,w:re.fridgeW,d:re.fridgeD,h:re.fridgeH,wallHug:!0,group:"kitchen"}))break}}function eM(s){const{a:e,prefs:t}=s,n=re.kitD,i=[{wall:"south",primary:!0},{wall:"east",primary:!1},{wall:"north",primary:!0},{wall:"west",primary:!1}];let r=0;const o=new Set;for(const c of i){if(r>=2)break;if(o.has(c.wall))continue;let l=c.wall==="north"||c.wall==="south"?Math.max(1.8,e.w-.25):Math.max(1.15,e.d-n-.5),h=e.cx,u=e.cz,d=0;c.wall==="south"&&(u=e.minZ+n/2+.05,d=0),c.wall==="north"&&(u=e.maxZ-n/2-.05,d=Math.PI),c.wall==="east"&&(h=e.maxX-n/2-.05,d=-Math.PI/2,u=e.minZ+n+l/2),c.wall==="west"&&(h=e.minX+n/2+.05,d=Math.PI/2,u=e.minZ+n+l/2);const f=pf(h,u,d,l,n,s.doorBoxes);!f||!lt(s,{id:r===0?"kitchen-south":"kitchen-east",kind:"kitchen",x:f.x,z:f.z,rot:d,w:f.len,d:n,h:2.2,wallHug:!0,group:"kitchen",variant:t.kitchen+(r===0?"-hob":"")})||(o.add(c.wall),r++)}const a=[{x:e.maxX-re.fridgeD/2-.06,z:e.maxZ-re.fridgeW/2-.08,rot:-Math.PI/2},{x:e.minX+re.fridgeD/2+.06,z:e.maxZ-re.fridgeW/2-.08,rot:Math.PI/2},{x:e.maxX-re.fridgeD/2-.06,z:e.minZ+re.fridgeW/2+.08,rot:-Math.PI/2}];for(const c of a)if(lt(s,{id:"fridge",kind:"fridge",x:c.x,z:c.z,rot:c.rot,w:re.fridgeW,d:re.fridgeD,h:re.fridgeH,wallHug:!0,group:"kitchen"}))break}function $a(s,e,t=.55){switch(e){case"south":return{minX:s.minX,maxX:s.maxX,minZ:s.minZ-.2,maxZ:s.minZ+t};case"north":return{minX:s.minX,maxX:s.maxX,minZ:s.maxZ-t,maxZ:s.maxZ+.2};case"west":return{minX:s.minX-.2,maxX:s.minX+t,minZ:s.minZ,maxZ:s.maxZ};case"east":return{minX:s.maxX-t,maxX:s.maxX+.2,minZ:s.minZ,maxZ:s.maxZ}}}function Ja(s,e){let t=0;for(const n of e)t+=yn(s,n);return t}function Vu(s,e,t,n,i){const r=[];for(const o of e)yn(s,o)<.02||(t==="x"?r.push([Math.max(n,o.minX),Math.min(i,o.maxX)]):r.push([Math.max(n,o.minZ),Math.min(i,o.maxZ)]));return r.filter(([o,a])=>a-o>.04)}function tM(s,e,t){const n=t.slice().sort((a,c)=>a[0]-c[0]),i=[];for(const a of n)!i.length||a[0]>i[i.length-1][1]+.02?i.push([a[0],a[1]]):i[i.length-1][1]=Math.max(i[i.length-1][1],a[1]);const r=[];let o=s;for(const[a,c]of i)a>o+.04&&r.push([o,a]),o=Math.max(o,c);return e>o+.04&&r.push([o,e]),r}const nM={north:"south",south:"north",east:"west",west:"east"},iM={north:["east","west"],south:["east","west"],east:["north","south"],west:["north","south"]};function sM(s,e,t){const{a:n}=s,i=["north","south","east","west"],r={north:0,south:0,east:0,west:0},o=[];for(const a of i){const c=$a(n,a);Ja(c,s.doorBoxes),r[a]=Ja(c,s.windowBoxes)}for(const a of i){const c=a==="north"||a==="south",l=c?n.minX:n.minZ,h=c?n.maxX:n.maxZ,u=c?n.d:n.w,d=Math.min(t,Math.max(1.7,u-.7));if(u<d+.35)continue;const f=Math.min(e,h-l-.3);if(f<1.15)continue;const g=$a(n,a),b=[...Vu(g,s.doorBoxes,c?"x":"z",l,h),...Vu(g,s.windowBoxes,c?"x":"z",l,h)],m=tM(l,h,b),p=f+2*(re.nightW+re.nightGap),_=f+.06,v=m.filter(z=>z[1]-z[0]>=_);if(!v.length)continue;v.sort((z,G)=>G[1]-G[0]-(z[1]-z[0]));const E=v.filter(z=>z[1]-z[0]>=p)[0]??v[0],T=Ja($a(n,a,.95),s.doorBoxes),S=r[a],A=S<.05&&T<.05;let M=E[1]-E[0];M-=S*200,M-=T*80,A?M+=100:S<.05&&(M+=8),r[nM[a]]>.12&&(M+=20),iM[a].some(z=>r[z]>.12)&&(M+=10);const y=c?n.cx:n.cz,D=(E[1]-E[0]>=p+.06?p:f)/2;let L=y;(L-D<E[0]+.04||L+D>E[1]-.04)&&(L=(E[0]+E[1])/2),L=Math.max(E[0]+D+.03,Math.min(E[1]-D-.03,L));let F,O,U;switch(a){case"south":F=L,O=n.minZ+.06+d/2,U=0;break;case"north":F=L,O=n.maxZ-.06-d/2,U=Math.PI;break;case"west":F=n.minX+.06+d/2,O=L,U=Math.PI/2;break;case"east":F=n.maxX-.06-d/2,O=L,U=-Math.PI/2;break}o.push({wall:a,rot:U,x:F,z:O,usedD:d,realW:f,score:M,gap:E})}return o.sort((a,c)=>c.score-a.score),o}function rM(s,e){const{a:t,prefs:n}=s,i=e?re.bedMasterW:re.bedW,r=e?re.bedMasterD:re.bedD,o=sM(s,i,r);let a=null;for(const D of o)if(lt(s,{id:"bed",kind:"bed",x:D.x,z:D.z,rot:D.rot,w:D.realW,d:D.usedD,h:.95,wallHug:!0,group:"bed",variant:n.style+(e?"-master":"")})){a=D;break}if(!a)return;const{fx:c,fz:l}=Xn(a.rot),h=a.x,u=a.z,d=a.realW,f=a.usedD,g=h-c*f/2,b=u-l*f/2,m=.35,p=-l,_=c,v=d/2+re.nightGap+re.nightW/2;for(const[D,L]of[["night-l",1],["night-r",-1]]){const F=g+c*m+p*L*v,O=b+l*m+_*L*v,U=[{x:F,z:O},{x:g+c*.22+p*L*(d/2+re.nightW/2+.02),z:b+l*.22+_*L*(d/2+re.nightW/2+.02)},{x:g+c*.35+p*L*(d/2+re.nightGap*.4+re.nightW/2),z:b+l*.35+_*L*(d/2+re.nightGap*.4+re.nightW/2)}];for(const z of U)if(lt(s,{id:D,kind:"nightstand",x:z.x,z:z.z,rot:a.rot,w:re.nightW,d:re.nightD,h:.5,tight:!0,wallHug:!0,group:"bed",variant:n.style}))break}const x=Math.min(1.8,Math.max(1,Math.min(t.w,t.d)*.45)),E=h+c*f/2,T=u+l*f/2,S=h+c*.15,A=u+l*.15,M=[],y=a.wall==="north"||a.wall==="south"?[{x:t.minX+.05+re.wardD/2,z:0,rot:Math.PI/2},{x:t.maxX-.05-re.wardD/2,z:0,rot:-Math.PI/2}]:[{x:0,z:t.minZ+.05+re.wardD/2,rot:0},{x:0,z:t.maxZ-.05-re.wardD/2,rot:Math.PI}];for(const D of y)a.wall==="north"||a.wall==="south"?(M.push({x:D.x,z:T,rot:D.rot}),M.push({x:D.x,z:A,rot:D.rot})):(M.push({x:E,z:D.z,rot:D.rot}),M.push({x:S,z:D.z,rot:D.rot}));for(const D of M){const L=$i(D.x,D.z,x,re.wardD,D.rot),F=$i(h,u,d,f,a.rot),O=.06,U={minX:F.minX-O,maxX:F.maxX+O,minZ:F.minZ-O,maxZ:F.maxZ+O};if(!(yn(L,U)>.008)&&lt(s,{id:"wardrobe",kind:"wardrobe",x:D.x,z:D.z,rot:D.rot,w:x,d:re.wardD,h:re.wardH,wallHug:!0,variant:n.style}))break}const C=a.wall==="north"||a.wall==="south"?t.d:t.w;if(e&&f+.55<C){const D=h+c*(f/2+.28),L=u+l*(f/2+.28);lt(s,{id:"bench",kind:"bench",x:D,z:L,rot:a.rot,w:d*.65,d:.38,h:.42,tight:!0,group:"bed",variant:n.style})}lt(s,{id:"rug",kind:"rug",x:h,z:u,rot:a.rot,w:d+.45,d:f+.35,h:.02,ghost:!0,tight:!0})}function oM(s){const{a:e,prefs:t}=s,n=Math.min(re.shower,Math.min(e.w,e.d)*.48),i=[[e.minX+.08+n/2,e.minZ+.08+n/2],[e.maxX-.08-n/2,e.minZ+.08+n/2],[e.minX+.08+n/2,e.maxZ-.08-n/2],[e.maxX-.08-n/2,e.maxZ-.08-n/2]],r=s.doorBoxes.map(h=>({x:(h.minX+h.maxX)/2,z:(h.minZ+h.maxZ)/2})),o=(h,u)=>r.length?Math.min(...r.map(d=>Math.hypot(h-d.x,u-d.z))):10;if(i.sort((h,u)=>o(u[0],u[1])-o(h[0],h[1])),e.w*e.d>=3.2){for(const[h,u]of i)if(lt(s,{id:"shower",kind:"shower",x:h,z:u,rot:0,w:n,d:n,h:2.1,wallHug:!0,tight:!0,group:"bath"}))break}const a=[{x:e.cx,z:e.maxZ-.08-re.basinD/2,rot:Math.PI},{x:e.cx,z:e.minZ+.08+re.basinD/2,rot:0},{x:e.maxX-.08-re.basinD/2,z:e.cz,rot:-Math.PI/2},{x:e.minX+.08+re.basinD/2,z:e.cz,rot:Math.PI/2}];a.sort((h,u)=>o(u.x,u.z)-o(h.x,h.z));const c=Math.min(re.basinW,Math.min(e.w,e.d)*.55);for(const h of a)if(lt(s,{id:"basin",kind:"basin",x:h.x,z:h.z,rot:h.rot,w:c,d:re.basinD,h:1.15,wallHug:!0,tight:!0,group:"bath",variant:t.style}))break;const l=[{x:e.minX+.12+re.toiletD/2,z:e.cz,rot:Math.PI/2},{x:e.maxX-.12-re.toiletD/2,z:e.cz,rot:-Math.PI/2},{x:e.cx,z:e.minZ+.12+re.toiletD/2,rot:0},{x:e.cx,z:e.maxZ-.12-re.toiletD/2,rot:Math.PI}];l.sort((h,u)=>o(u.x,u.z)-o(h.x,h.z));for(const h of l)if(lt(s,{id:"toilet",kind:"toilet",x:h.x,z:h.z,rot:h.rot,w:re.toiletW,d:re.toiletD,h:.8,wallHug:!0,tight:!0,group:"bath"}))break}function aM(s){const{a:e}=s,t=[{x:e.minX+.08+.2,z:e.cz,rot:Math.PI/2},{x:e.maxX-.08-.2,z:e.cz,rot:-Math.PI/2},{x:e.cx,z:e.minZ+.08+.2,rot:0}];for(const n of t)if(lt(s,{id:"console",kind:"console",x:n.x,z:n.z,rot:n.rot,w:Math.min(1.1,(n.rot===0?e.w:e.d)*.6),d:.38,h:.85,wallHug:!0,tight:!0}))break;for(const[n,i]of ea(e,.34))if(lt(s,{id:"plant",kind:"plant",x:n,z:i,rot:0,w:re.plantR*2,d:re.plantR*2,h:1.1,tight:!0,wallHug:!0}))break}function cM(s){const{a:e}=s,t=e.w>=e.d,n=Math.min(t?e.w-.25:e.d-.25,1.6),i=t?[{x:e.cx,z:e.minZ+.06+re.wardD/2,rot:0},{x:e.cx,z:e.maxZ-.06-re.wardD/2,rot:Math.PI}]:[{x:e.minX+.06+re.wardD/2,z:e.cz,rot:Math.PI/2},{x:e.maxX-.06-re.wardD/2,z:e.cz,rot:-Math.PI/2}];for(const r of i)if(lt(s,{id:"wardrobe",kind:"wardrobe",x:r.x,z:r.z,rot:r.rot,w:n,d:re.wardD,h:re.wardH,wallHug:!0,variant:"modern"}))break}function lM(s){const{a:e}=s,t=e.w>=e.d,n=t?0:Math.PI/2,{fx:i,fz:r}=Xn(n),o=e.cx,a=t?e.minZ+Math.min(e.d*.42,1.15):e.cz,c=.25,l=t?.5:0,h=t?0:.5;lt(s,{id:"lounge-l",kind:"loungeChair",x:o-l,z:a-h,rot:n,w:re.loungeW,d:re.loungeD,h:.75,group:"outdoor"}),lt(s,{id:"lounge-r",kind:"loungeChair",x:o+l,z:a+h,rot:n,w:re.loungeW,d:re.loungeD,h:.75,group:"outdoor"}),lt(s,{id:"outdoor-table",kind:"outdoorTable",x:o+i*(re.loungeD/2+c+.28),z:a+r*(re.loungeD/2+c+.28),rot:n,w:.7,d:.5,h:.38,group:"outdoor"});for(const[u,d]of ea(e,.36))if(lt(s,{id:"plant",kind:"plant",x:u,z:d,rot:0,w:re.plantR*2,d:re.plantR*2,h:1.05,tight:!0,wallHug:!0}))break}function Wu(s){return s.map(nl)}function hM(s){const e=[],t=s.filter(i=>i.kind==="sofa"),n=s.filter(i=>i.kind==="coffee");for(const i of t){const r=n.find(u=>u.roomId===i.roomId);if(!r)continue;const{fx:o,fz:a}=Xn(i.rot),c=i.x*o+i.z*a+i.d/2,h=r.x*o+r.z*a-r.d/2-c;e.push({sofa:nl(i),coffee:nl(r),gap:h})}return e}function uM(s,e){const[t,n]=wn(s.x,s.z,e),{fx:i,fz:r}=Xn(s.rot),[o,a]=wn(s.x+i,s.z+r,e),c=Math.atan2(o-t,a-n);return{...s,x:t,z:n,rot:c}}function dM(s,e){return e?s.doors.map(t=>{const[n,i]=wn(t.ax,t.az,e),[r,o]=wn(t.bx,t.bz,e);return{ax:n,az:i,bx:r,bz:o,width:t.width}}):s.doors}function fM(s,e){return e?s.map(([t,n])=>wn(t,n,e)):s}function pM(s,e,t){const n=[];for(const l of s.rooms){const h=l.type==="living"?s.rooms.filter(u=>u.id!==l.id).map(u=>u.polygon):[];n.push(...Ky(l,e,h,s.doors,s.windows))}const i=s.walls.map(l=>({minX:l.x,maxX:l.x+l.w,minZ:l.z,maxZ:l.z+l.d})),r=s.doors.flatMap(l=>s.rooms.filter(h=>Br(l,h.polygon)).map(h=>({poly:h.polygon,door:l}))),o=[...Wy(Wu(n),i,r,hM(n)),...Xy(s.rooms,n,s.doors,s.windows??[])],a=t?n.map(l=>uM(l,t)):n,c=s.rooms.map(l=>({...l,polygon:fM(l.polygon,t)}));return{placements:a,footprints:Wu(a),issues:o,rooms:c}}function mi(s){return Hl(s)}function jn(s,e,t,n,i,r,o=0,a=0,c=0){const l=new ae(s,e);return l.position.set(t,n,i),l.rotation.set(o,a,c),l.castShadow=!0,l.receiveShadow=!0,r.add(l),l}function Te(s,e,t,n,i,r,o,a,c=0){return jn(new ve(s,e,t),n,i,r,o,a,0,c,0)}function St(s,e,t,n,i,r,o,a=0,c=0){return jn(new rn(s,s,e,20),t,n,i,r,o,a,0,c)}function rt(s,e,t,n,i,r,o,a,c,l=0){const h=Math.max(.004,Math.min(n,s/2-.002,e/2-.002,t/2-.002));return jn(new Fy(s,e,t,3,h),i,r,o,a,c,0,l,0)}let cr=null;function mM(){if(cr)return cr;const s=document.createElement("canvas");s.width=s.height=128;const e=s.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,62);return t.addColorStop(0,"rgba(0,0,0,0.62)"),t.addColorStop(.28,"rgba(0,0,0,0.34)"),t.addColorStop(.62,"rgba(0,0,0,0.12)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),cr=new jo(s),cr.colorSpace=ai,cr}function hn(s,e,t,n,i,r=0){const o=new es(1,1),a=new Ct({map:mM(),color:"#000000",transparent:!0,opacity:.85,depthWrite:!1,depthTest:!0}),c=new ae(o,a);c.rotation.x=-Math.PI/2,c.rotation.z=r,c.position.set(s,.012,e),c.scale.set(t*1.18,n*1.18,1),c.renderOrder=1,c.castShadow=c.receiveShadow=!1,c.name="contact-ao",i.add(c)}function At(s,e,t,n){const i=new Mt;return i.position.set(s,0,e),i.rotation.y=t,n.add(i),i}function sl(s,e){return new Et({color:s,roughness:.58,metalness:0,sheen:1,sheenRoughness:.32,sheenColor:new Ue(s).lerp(new Ue("#ffffff"),.18),clearcoat:.05,clearcoatRoughness:.7,normalMap:e.fabric.normalMap,roughnessMap:e.fabric.roughnessMap,normalScale:new se(.55,.55),envMapIntensity:.28})}function qs(s,e,t=!1){if(e==="luxury"||t){const n=s.fabric.color.getStyle();return sl(n||"#5c1a1a",s)}return s.fabric}function Hr(s){return new Et({map:s.marble.map,normalMap:s.marble.normalMap,roughnessMap:s.marble.roughnessMap,roughness:.1,metalness:.03,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.25})}function Sn(s,e){return kr(s,e)}let zi=null;function gM(){if(!zi){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#c5c9ce",t.fillRect(0,0,256,256);const n=5,i=5,r=(256-i*(n+1))/n;for(let o=0;o<n;o++)for(let a=0;a<n;a++)t.fillStyle=(o+a)%2===0?"#f4f6f8":"#e8eef2",t.fillRect(i+o*(r+i),i+a*(r+i),r,r),t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(i+o*(r+i),i+a*(r+i),r,3);zi=new jo(e),zi.colorSpace=vt,zi.wrapS=zi.wrapT=qt,zi.anisotropy=8}return new ot({map:zi,roughness:.42,metalness:.04,color:"#ffffff"})}function bM(s,e,t){const n=s.material.map;n&&(n.repeat.set(e/5,t/5),n.needsUpdate=!0)}function vM(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=qs(t,n),c=Sn(t,n),l=n==="traditional",h=l?.16:.12;for(const b of[-(r/2-.1),r/2-.1])for(const m of[-(o/2-.1),o/2-.1])l?(St(.035,h,t.woodFur,b,h/2,m,i),St(.045,.03,t.woodFur,b,.02,m,i)):St(n==="luxury"?.018:.022,h,c,b,h/2,m,i);rt(r,.1,o,.02,t.woodFur,0,h+.05,0,i);const u=Math.max(2,Math.round(r/.75)),d=o-.22;for(let b=0;b<u;b++){const p=(r-.16)/u,_=-r/2+.08+p*b+p/2;rt(p-.04,.14,d,.04,a,_,h+.16,.04,i)}for(let b=0;b<u;b++){const m=(r-.16)/u,p=-r/2+.08+m*b+m/2;rt(m-.05,.42,.16,.045,a,p,h+.44,-o/2+.12,i)}l&&(Te(r,.08,.06,t.woodFur,0,.92,-o/2+.04,i),Te(.05,.7,.05,t.woodFur,-r/2+.04,.55,-o/2+.04,i),Te(.05,.7,.05,t.woodFur,r/2-.04,.55,-o/2+.04,i));const f=l?.12:.11,g=.28;rt(f,g,o-.08,.04,l?t.woodFur:a,-r/2+f/2,h+.28,.02,i),rt(f,g,o-.08,.04,l?t.woodFur:a,r/2-f/2,h+.28,.02,i),n==="luxury"&&Te(r-.04,.012,.012,t.brass,0,.72,-o/2+.2,i),hn(s.x,s.z,r+.15,o+.1,e,s.rot)}function xM(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=qs(t,n),c=.12;for(const l of[-(r/2-.08),r/2-.08])for(const h of[-(o/2-.08),o/2-.08])St(n==="luxury"?.018:.022,c,Sn(t,n),l,c/2,h,i);rt(r,.1,o,.02,t.woodFur,0,c+.05,0,i),rt(r-.06,.14,o-.08,.04,a,0,c+.16,.02,i),rt(.14,.36,o-.08,.04,a,-r/2+.08,c+.38,0,i),hn(s.x,s.z,r+.1,o+.1,e,s.rot)}function _M(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=qs(t,n),o=s.w,a=s.d;for(const c of[-(o/2-.08),o/2-.08])for(const l of[-(a/2-.08),a/2-.08])St(.02,.12,Sn(t,n),c,.06,l,i);rt(o,.1,a,.02,t.woodFur,0,.17,0,i),rt(o-.08,.14,a-.16,.04,r,0,.28,.02,i),rt(o-.08,.4,.14,.04,r,0,.52,-a/2+.1,i),rt(.1,.26,a-.1,.035,r,-o/2+.06,.4,0,i),rt(.1,.26,a-.1,.035,r,o/2-.06,.4,0,i),hn(s.x,s.z,o,a,e,s.rot)}function yM(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=s.h,c=s.variant==="marble"||n==="luxury"?Hr(t):t.woodFur,l=Sn(t,n);if(rt(r,.04,o,.012,c,0,a-.02,0,i),n==="luxury"){Te(r-.04,.012,o-.04,t.brass,0,.14,0,i);for(const h of[-(r/2-.05),r/2-.05])for(const u of[-(o/2-.05),o/2-.05])Te(.018,a-.04,.018,t.brass,h,(a-.04)/2,u,i)}else for(const h of[-(r/2-.07),r/2-.07])for(const u of[-(o/2-.07),o/2-.07])St(.022,a-.04,n==="traditional"?t.woodFur:l,h,(a-.04)/2,u,i);Te(.22,.015,.16,t.fabric,-.16,a+.01,.04,i),Te(.22,.012,.16,t.woodFur,-.15,a+.025,.05,i),St(.07,.04,n==="luxury"?t.brass:t.ceramic,.22,a+.03,-.06,i),hn(s.x,s.z,r,o,e,s.rot)}function MM(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=s.w,o=s.d;rt(r,.38,o,.015,t.woodFur,0,.22,0,i),Te(.006,.28,.01,t.frame,0,.22,o/2-.005,i),n==="luxury"&&Te(r+.02,.012,o+.02,Hr(t),0,.42,0,i);const a=Math.min(r*.85,1.55),c=t.frame.clone();c.color.set("#111"),c.roughness=.28,Te(a,.72,.04,c,0,.88,-o/2+.06,i);const l=t.emissive.clone();l.color.set("#151b24"),l.emissive.set("#1a2430"),l.emissiveIntensity=.18,Te(a-.05,.64,.015,l,0,.88,-o/2+.085,i);for(const h of[-(r/2-.08),r/2-.08])for(const u of[-(o/2-.06),o/2-.06])St(.018,.06,Sn(t,n),h,.03,u,i);hn(s.x,s.z,r,o,e,s.rot)}function wM(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=s.h,c=n==="luxury"?Hr(t):t.woodFur;if(rt(r,.05,o,.015,c,0,a-.02,0,i),n==="luxury")St(.14,a-.08,t.woodFur,0,(a-.08)/2,0,i),St(.28,.03,t.brass,0,.04,0,i);else for(const l of[-(r/2-.1),r/2-.1])for(const h of[-(o/2-.08),o/2-.08])Te(.07,a-.06,.07,t.woodFur,l,(a-.06)/2,h,i);hn(s.x,s.z,r,o,e,s.rot)}function SM(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=qs(t,n),o=s.w,a=s.d;for(const c of[-(o/2-.05),o/2-.05])for(const l of[-(a/2-.05),a/2-.05])Te(.035,.42,.035,t.woodFur,c,.21,l,i);rt(o-.04,.05,a-.04,.015,r,0,.44,0,i),rt(o-.06,.32,.04,.015,r,0,.72,-a/2+.03,i),Te(.03,.32,.03,t.woodFur,-o/2+.05,.62,-a/2+.03,i),Te(.03,.32,.03,t.woodFur,o/2-.05,.62,-a/2+.03,i)}function TM(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=(s.variant??"").includes("hob"),c=n==="modern"||n==="minimal";Te(r,.86,o-.02,t.cabinet,0,.43,.01,i);const l=Math.max(2,Math.round(r/.55));for(let _=1;_<l;_++){const v=-r/2+r/l*_;Te(.008,.72,.01,t.frame,v,.42,o/2-.005,i)}if(!c)for(let _=0;_<l;_++){const v=-r/2+r/l*(_+.5);Te(.08,.012,.012,Sn(t,n),v,.5,o/2+.01,i)}const h=n==="luxury"?Hr(t):n==="traditional"?new ot({map:t.granite?.map??t.counter.map,normalMap:t.granite?.normalMap,roughnessMap:t.granite?.roughnessMap,roughness:.35,metalness:.08}):t.counter,u=new ot({color:"#e8e6e1",roughness:.28,metalness:.06}),d=n==="luxury"||n==="traditional"?h:u;Te(r+.02,.05,o+.03,d,0,.885,.01,i);const f=gM(),g=.58,b=Te(r,g,.02,f,0,.91+g/2,-o/2+.02,i);bM(b,Math.max(4,r*3.2),3.2);const m=.62,p=2.05;if(a){const v=(r-.85)/2;v>.35&&(Te(v-.02,m,o-.12,t.cabinet,-r/2+v/2,p,-.02,i),Te(v-.02,m,o-.12,t.cabinet,r/2-v/2,p,-.02,i)),EM(i,t,0,o,.91)}else Te(r-.04,m,o-.12,t.cabinet,0,p,-.02,i),AM(i,t,0,o,.91)}function EM(s,e,t,n,i){const r=new Et({color:"#1a1a1c",roughness:.12,metalness:.35,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:1.1});Te(.68,.03,.5,r,t,i+.03,.02,s);const o=new ot({color:"#3a3a3e",roughness:.4,metalness:.7});for(const[l,h]of[[-.16,-.1],[.16,-.1],[-.16,.12],[.16,.12]]){const u=new Ko(.07,.008,8,24),d=new ae(u,o);d.rotation.x=Math.PI/2,d.position.set(t+l,i+.05,h),d.castShadow=!0,s.add(d)}const a=new ot({color:"#c5c8cc",roughness:.28,metalness:.85,envMapIntensity:1}),c=new ot({color:"#2a2c30",roughness:.35,metalness:.7});jn(new ve(.78,.1,.48),a,t,1.58,-.02,s),jn(new ve(.7,.08,.42),c,t,1.5,-.02,s),Te(.26,1.05,.22,a,t,2.15,-n/2+.16,s),Te(.18,.03,.01,e.brass,t,1.58,.23,s)}function AM(s,e,t,n,i){const r=new ot({color:"#c8ccd0",roughness:.25,metalness:.8});Te(.48,.12,.36,r,t,i-.04,.04,s),Te(.4,.02,.28,e.water,t,i+.02,.04,s);const o=e.blackMetal;St(.016,.2,o,t,i+.16,-n/2+.16,s),Te(.03,.03,.16,o,t,i+.26,-n/2+.22,s),St(.01,.08,o,t,i+.22,0,s)}function RM(s,e,t){const n=At(s.x,s.z,s.rot,e),i=s.w,r=s.d,o=s.h,a=new ot({color:"#dfe3e8",roughness:.28,metalness:.55,envMapIntensity:.7});rt(i,o,r,.015,a,0,o/2,0,n),Te(i-.04,.008,.01,t.frame,0,o*.72,r/2-.005,n),Te(.018,.55,.02,t.blackMetal,i/2-.08,o*.42,r/2+.01,n),Te(.12,.16,.02,t.frame,0,o*.5,r/2+.008,n),hn(s.x,s.z,i,r,e,s.rot)}function CM(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=(s.variant??"").includes("master");qs(t,n),rt(r+.08,.16,o+.06,.02,t.woodFur,0,.16,0,i);for(const g of[-(r/2-.08),r/2-.08])for(const b of[-(o/2-.08),o/2-.08])St(.03,.1,t.woodFur,g,.05,b,i);const c=t.mattress.clone();rt(r,.24,o-.08,.04,c,0,.38,.02,i);const l=n==="luxury"?sl("#5c1a1a",t):t.fabric.clone();l instanceof ot&&n!=="luxury"&&(l.color.set(n==="traditional"?"#7a2e1f":n==="minimal"?"#e8e4db":"#3d4f63"),l.roughness=.9),rt(r+.04,.09,o*.7,.04,l,0,.54,o*.08,i);const h=t.fabric.clone();h.color.set(n==="luxury"?"#c4a265":"#d9c7a3"),rt(r+.05,.05,o*.2,.025,h,0,.6,o*.32,i);const u=t.mattress.clone();u.color.set("#f4efe6"),rt(r*.38,.14,.3,.04,u,-r*.22,.62,-o/2+.28,i),rt(r*.38,.14,.3,.04,u,r*.22,.62,-o/2+.28,i),a&&rt(r*.3,.1,.2,.03,l,0,.68,-o/2+.42,i);const d=a?1.15:.95,f=n==="luxury"?sl("#3a1010",t):t.fabric.clone();if(f instanceof ot&&f.color.set(n==="minimal"?"#d0cbc2":n==="traditional"?"#5c2218":"#2c3540"),rt(r+.14,d,.1,.03,f,0,d/2+.1,-o/2-.04,i),n==="luxury")for(let b=0;b<4;b++){const m=-r/2+r/4*(b+.5);Te(.01,d-.16,.02,t.brass,m,d/2+.1,-o/2+.02,i)}n==="traditional"&&Te(r+.16,.05,.12,t.woodFur,0,d+.1,-o/2-.04,i),hn(s.x,s.z,r+.3,o+.2,e,s.rot)}function PM(s,e,t,n){const i=At(s.x,s.z,s.rot,e);rt(s.w,.42,s.d,.015,t.woodFur,0,.27,0,i),Te(s.w-.08,.008,.01,t.frame,0,.3,s.d/2-.002,i),n==="luxury"&&Te(.06,.01,.01,t.brass,0,.3,s.d/2+.01,i);const r=t.fabric.clone();r.color.set("#f0e6d4"),r.emissive=new Ue("#f0e6d4"),r.emissiveIntensity=.12,St(.04,.02,Sn(t,n),0,.5,0,i),St(.01,.2,Sn(t,n),0,.61,0,i),jn(new rn(.09,.13,.14,16),r,0,.8,0,i),hn(s.x,s.z,s.w,s.d,e,s.rot)}function DM(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=s.h,c=n==="luxury"?new ot({color:"#3a2a22",roughness:.45,metalness:.08,map:t.wood.map,roughnessMap:t.wood.roughnessMap}):t.cabinet;Te(r,a,o,c,0,a/2,0,i),Te(.012,a-.12,.012,t.frame,0,a/2,o/2+.004,i),Te(r+.01,.03,o+.01,t.woodFur,0,a-.01,0,i),Te(r,.06,o,t.woodFur,0,.03,0,i),n!=="modern"&&n!=="minimal"&&(Te(.012,.42,.018,Sn(t,n),-.06,a*.5,o/2+.012,i),Te(.012,.42,.018,Sn(t,n),.06,a*.5,o/2+.012,i)),hn(s.x,s.z,r,o,e,s.rot)}function LM(s,e,t,n){const i=At(s.x,s.z,s.rot,e);rt(s.w,.08,s.d,.02,qs(t,n),0,.38,0,i),Te(s.w-.08,.28,s.d-.08,t.woodFur,0,.18,0,i)}function Wl(s){return new Et({color:"#f4f6f7",roughness:.16,metalness:.04,clearcoat:.55,clearcoatRoughness:.2,envMapIntensity:.8})}function IM(s,e,t){const n=At(s.x,s.z,s.rot,e),i=Wl();rt(.36,.4,.5,.06,i,0,.32,.05,n),rt(.34,.08,.08,.02,i,0,.54,-.18,n),Te(.36,.42,.16,i,0,.72,-.26,n),St(.028,.04,t.blackMetal,.12,.9,-.26,n),hn(s.x,s.z,.4,.6,e,s.rot)}function kM(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=Wl(),o=s.w,a=s.d;rt(o,.06,a,.01,n==="luxury"?Hr(t):t.woodFur,0,.82,0,i),Te(o-.04,.7,a-.04,t.cabinet,0,.4,0,i),jn(new rn(.18,.15,.1,24),r,0,.92,.02,i),St(.014,.16,kr(t,n),0,1.04,-a/2+.12,i),Te(.03,.025,.14,kr(t,n),0,1.12,-a/2+.18,i);const c=new Et({color:"#cfe0ea",roughness:.04,metalness:.35,envMapIntensity:1.3});Te(o*.85,.7,.02,n==="luxury"?t.brass:t.frame,0,1.55,-a/2+.02,i),Te(o*.85-.04,.64,.015,c,0,1.55,-a/2+.035,i),hn(s.x,s.z,o,a,e,s.rot)}function NM(s,e,t){const n=At(s.x,s.z,s.rot,e),i=s.w,r=Wl();Te(i,.05,i,r,0,.03,0,n);const o=t.glassRail;Te(i,1.95,.02,o,0,1.02,-i/2+.01,n),Te(.02,1.95,i,o,-i/2+.01,1.02,0,n),Te(i,.02,.02,t.blackMetal,0,2,-i/2+.01,n),Te(.02,.02,i,t.blackMetal,-i/2+.01,2,0,n),Te(.02,2,.02,t.blackMetal,i/2-.01,1.02,-i/2+.01,n),Te(.02,2,.02,t.blackMetal,-i/2+.01,1.02,i/2-.01,n),Te(.02,2,.02,t.blackMetal,-i/2+.01,1.02,-i/2+.01,n);const a=-i/2+.12,c=-i/2+.12;St(.012,.22,t.blackMetal,a,2.08,c,n),Te(.012,.012,i*.28,t.blackMetal,a,2.18,c+i*.14,n),Te(.22,.02,.22,t.blackMetal,a,2.17,c+i*.28,n),St(.045,.01,t.blackMetal,0,.06,0,n)}function UM(s,e,t){const n=At(s.x,s.z,s.rot,e),i=t.woodFur,r=s.w,o=s.d;for(const c of[-(r/2-.04),r/2-.04])Te(.05,.32,o,i,c,.2,0,n),Te(.05,.45,.05,i,c,.55,-o/2+.04,n);for(let c=0;c<6;c++){const l=-o/2+.08+c*((o-.12)/5);Te(r-.06,.025,.06,i,0,.36,l,n)}for(let c=0;c<4;c++)Te(r-.06,.06,.025,i,0,.48+c*.1,-o/2+.05,n);const a=t.fabric.clone();a.color.set("#d9c7a3"),rt(r-.12,.07,o-.16,.03,a,0,.42,.04,n),hn(s.x,s.z,r,o,e,s.rot)}function FM(s,e,t){const n=At(s.x,s.z,s.rot,e);rt(s.w,.04,s.d,.015,t.woodFur,0,s.h,0,n);for(const i of[-(s.w/2-.06),s.w/2-.06])for(const r of[-(s.d/2-.06),s.d/2-.06])St(.02,s.h,t.blackMetal,i,s.h/2,r,n)}function OM(s,e,t){const n=At(s.x,s.z,s.rot,e);rt(s.w,.05,s.d,.015,t.woodFur,0,.8,0,n),Te(s.w-.1,.7,.04,t.woodFur,0,.4,-s.d/2+.04,n),Te(.05,.78,s.d,t.woodFur,-s.w/2+.04,.4,0,n),Te(.05,.78,s.d,t.woodFur,s.w/2-.04,.4,0,n)}function zM(s,e,t,n,i){if(n?.has("plant")){const o={x:s.x,z:s.z,y:0,rotY:s.rot,width:.55,prefs:i,mats:t},a=n.instantiate("plant",o);if(a){e.add(a),hn(s.x,s.z,.45,.45,e);return}}const r=At(s.x,s.z,s.rot,e);St(.13,.22,t.ceramic,0,.11,0,r),St(.11,.06,t.soil,0,.22,0,r);for(let o=0;o<5;o++){const a=o/5*Math.PI*2;jn(new pi(.15+o%2*.05,10,8),t.plant,Math.cos(a)*.08,.45+o*.08,Math.sin(a)*.08,r)}jn(new pi(.2,10,8),t.plant,0,.55+s.h*.2,0,r)}function BM(s,e,t,n){const i=At(s.x,s.z,s.rot,e);St(.13,.03,Sn(t,n),0,.02,0,i),St(.014,1.42,Sn(t,n),0,.73,0,i);const r=t.fabric.clone();r.color.set("#f0e6d4"),r.emissive=new Ue("#f0e6d4"),r.emissiveIntensity=.2,r.side=Tt,jn(new rn(.16,.22,.28,16,1,!1),r,0,1.52,0,i)}function HM(s,e,t){const n=At(s.x,s.z,s.rot,e);Te(s.w,.7,s.d,t.woodFur,0,1.15,0,n),Te(s.w+.04,.06,s.d+.02,t.brass,0,1.52,0,n),Te(s.w+.02,.04,s.d,t.woodFur,0,.78,0,n),Te(.04,.7,.04,t.woodFur,-s.w/2+.04,1.15,s.d/2,n),Te(.04,.7,.04,t.woodFur,s.w/2-.04,1.15,s.d/2,n);const i=t.emissive.clone();i.emissive.set("#ffd27a"),i.emissiveIntensity=.85,St(.04,.06,i,0,1.05,s.d/2-.02,n)}function GM(s,e){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),i=a=>{const c=Math.sin(s*12.9898+a*78.233)*43758.5453;return c-Math.floor(c)},r=e==="luxury"?["#5c1a1a","#8a3a2a","#c4a265","#efe2cc","#2a1810"]:e==="minimal"?["#d8d2c8","#b8b2a8","#8a8680","#efece6","#5a5854"]:e==="traditional"?["#7a2e1f","#c4a265","#e8d5b0","#3a2010","#a05a30"]:["#3d5a6c","#d8c2a8","#6a8a7a","#f0ebe3","#2c3a44"];n.fillStyle=r[0],n.fillRect(0,0,512,512);for(let a=0;a<5;a++){n.fillStyle=r[Math.floor(i(a+1)*r.length)],n.globalAlpha=.45+i(a+9)*.4;const c=i(a+2)*512-40,l=i(a+3)*512-40,h=80+i(a+4)*320,u=60+i(a+5)*280;i(a+6)>.45?n.fillRect(c,l,h,u):(n.beginPath(),n.ellipse(c+h/2,l+u/2,h/2,u/2,i(a+7)*.8,0,Math.PI*2),n.fill())}n.globalAlpha=.7,n.strokeStyle=r[Math.floor(i(20)*r.length)],n.lineWidth=6+i(21)*14,n.beginPath(),n.moveTo(0,180+i(22)*200),n.quadraticCurveTo(256,80+i(23)*300,512,200+i(24)*180),n.stroke(),n.globalAlpha=1,n.strokeStyle="rgba(255,255,255,0.18)",n.lineWidth=10,n.strokeRect(16,16,480,480);const o=new jo(t);return o.colorSpace=vt,o.anisotropy=4,o}function VM(s,e,t,n){const i=At(s.x,s.z,s.rot,e),r=n==="luxury"||n==="traditional"?t.brass:t.frame;Te(s.w,s.h,.04,r,0,1.45,0,i);const o=new ot({map:GM(s.x*17+s.z*31+s.w*9,n),roughness:.82,metalness:0,envMapIntensity:.15});Te(s.w-.08,s.h-.08,.02,o,0,1.45,.015,i)}function WM(s,e,t,n){const i=n==="luxury"?"#6b1d1d":n==="traditional"?"#7a3a1a":n==="minimal"?"#d8d2c8":"#3d4a58",r=t.fabric.clone();r.color.set(i),r.roughness=.95;const o=At(s.x,s.z,s.rot,e);Te(s.w,.015,s.d,r,0,.012,0,o)}function Bn(s,e){const{fx:t,fz:n}=Xn(e.rot);return{kind:s,x:e.x,z:e.z,fx:t,fz:n,width:e.w,depth:e.d,height:e.h,roomId:e.roomId}}function en(s,e,t,n,i,r){if(!s?.has(e))return!1;const o=s.instantiate(e,{x:t.x,z:t.z,y:0,rotY:t.rot,width:t.w,depth:t.d,prefs:r,mats:i});return o?(n.add(o),!0):!1}function Xu(s,e,t,n,i,r,o){if(!t.length)return;if(!s?.has(e)||t.length<2){for(const g of t)en(s,e,g,n,i,r)||o(g);return}const a=s.instantiate(e,{x:0,z:0,y:0,rotY:0,width:t[0].w,depth:t[0].d,prefs:r,mats:i,shareMaterials:!0});if(!a){for(const g of t)o(g);return}a.updateMatrixWorld(!0);const c=[];a.traverse(g=>{const b=g;b.isMesh&&c.push(b)});const l=new Mn,h=new I,u=new I(1,1,1),d=new I(0,1,0),f=new Xe;for(const g of c){const b=new Rl(g.geometry,g.material,t.length);b.castShadow=!0,b.receiveShadow=!0,b.name=`instance:${e}:${g.name}`,b.userData.role=a.userData.role,b.userData.modelId=e;const m=g.matrixWorld.clone();for(let p=0;p<t.length;p++){const _=t[p];h.set(_.x,0,_.z),l.setFromAxisAngle(d,_.rot),f.compose(h,l,u),f.multiply(m),b.setMatrixAt(p,f)}b.instanceMatrix.needsUpdate=!0,n.add(b)}}function XM(s,e,t,n,i=null){const r=[],o=n.style,a=[],c=[],l=o==="traditional"?"woodChair":"diningChair";for(const h of s)switch(h.kind){case"sofa":en(i,Gy(o),h,e,t,n)||vM(h,e,t,o),r.push(Bn("sofa",h));break;case"sofa-chaise":en(i,"sofaChaise",h,e,t,n)||xM(h,e,t,o);break;case"armchair":en(i,"armchair",h,e,t,n)||_M(h,e,t,o);break;case"coffee":en(i,o==="traditional"?"coffeeClassic":"coffeeModern",h,e,t,n)||yM(h,e,t,o);break;case"tv":en(i,"tv",h,e,t,n)||MM(h,e,t,o),r.push(Bn("tv",h));break;case"diningTable":en(i,o==="traditional"||o==="minimal"?"woodTable":"diningTable",h,e,t,n)||wM(h,e,t,o),r.push(Bn("dining",h));break;case"diningChair":a.push(h);break;case"kitchen":TM(h,e,t,o),r.push(Bn("kitchen",h));break;case"fridge":en(i,"fridge",h,e,t,n)||RM(h,e,t);break;case"bed":en(i,"bed",h,e,t,n)||CM(h,e,t,o),r.push(Bn("bed",h));break;case"nightstand":c.push(h);break;case"wardrobe":en(i,"wardrobe",h,e,t,n)||DM(h,e,t,o),r.push(Bn("wardrobe",h));break;case"bench":LM(h,e,t,o);break;case"toilet":en(i,"toilet",h,e,t,n)||IM(h,e,t),r.push(Bn("bath",h));break;case"basin":en(i,"vanity",h,e,t,n)||kM(h,e,t,o),r.push(Bn("basin",h));break;case"shower":NM(h,e,t);break;case"loungeChair":UM(h,e,t),r.push(Bn("outdoor",h));break;case"outdoorTable":FM(h,e,t);break;case"console":en(i,"console",h,e,t,n)||OM(h,e,t),r.push(Bn("foyer",h));break;case"plant":zM(h,e,t,i,n);break;case"lamp":en(i,"lamp",h,e,t,n)||BM(h,e,t,o);break;case"mandir":HM(h,e,t);break;case"art":VM(h,e,t,o);break;case"rug":en(i,"rug",h,e,t,n)||WM(h,e,t,o);break}return Xu(i,l,a,e,t,n,h=>SM(h,e,t,o)),Xu(i,"nightstand",c,e,t,n,h=>PM(h,e,t,o)),r}function jM(s,e,t,n,i,r,o,a){const c=t>=n,l=o.fabric.clone();l.color.set(a==="luxury"?"#5c1a1a":a==="traditional"?"#7a3a1a":a==="minimal"?"#efeae2":"#3d4a58"),l.side=Tt,l.roughness=.9,l.transparent=!1,l.normalScale=new se(.85,.85);const h=Math.min(2.15,i-.35),u=.25+h/2,d=kr(o,a),f=6,g=(b,m,p,_)=>{for(let v=0;v<f;v++){const x=(v+.5)/f,E=Math.sin(v*1.35)*.018;if(c){const T=p/f*1.2;Te(T,h,.03,l,b-p/2+x*p,u,m+E,r)}else{const T=_/f*1.2;Te(.03,h,T,l,b+E,u,m-_/2+x*_,r)}}};if(c){const b=Math.max(.2,t*.18),m=e+(n>0?.09:-.09);g(s-t/2+b/2,m,b,.04),g(s+t/2-b/2,m,b,.04),Te(t+.14,.025,.025,d,s,.25+h+.03,m,r);const p=new ae(new pi(.03,10,8),d);p.position.set(s-t/2-.05,.25+h+.03,m),r.add(p);const _=p.clone();_.position.x=s+t/2+.05,r.add(_)}else{const b=Math.max(.2,n*.18),m=s+(t>0?.09:-.09);g(m,e-n/2+b/2,.04,b),g(m,e+n/2-b/2,.04,b),Te(.025,.025,n+.14,d,m,.25+h+.03,e,r);const p=new ae(new pi(.03,10,8),d);p.position.set(m,.25+h+.03,e-n/2-.05),r.add(p);const _=p.clone();_.position.z=e+n/2+.05,r.add(_)}}function mf(s){let e=0;for(let t=0,n=s.length-1;t<s.length;n=t++)e+=s[n][0]*s[t][1]-s[t][0]*s[n][1];return e}function rl(s,e,t){const n=e[0]-s[0],i=e[1]-s[1],r=Math.hypot(n,i)||1;return[-i/r*t,n/r*t]}function qM(s,e,t){if(!t.length)return!0;const n=.18,i=5;let r=0;for(let o=0;o<=i;o++){const a=o/i,c=s[0]+(e[0]-s[0])*a,l=s[1]+(e[1]-s[1])*a;for(const h of t)if(c>=h.x-n&&c<=h.x+h.w+n&&l>=h.z-n&&l<=h.z+h.d+n){r+=1;break}}return r>=3}function YM(s,e,t,n,i=[]){if(s.length<3)return;const r=mf(s)>=0?1:-1,o=.11,a=.026;for(let c=0;c<s.length;c++){const l=s[c],h=s[(c+1)%s.length],u=h[0]-l[0],d=h[1]-l[1],f=Math.hypot(u,d);if(f<.18||!qM(l,h,i))continue;const[g,b]=rl(l,h,r),m=(l[0]+h[0])/2+g*(a/2+.005),p=(l[1]+h[1])/2+b*(a/2+.005),_=new ve(a,o,f-.02);n.push(_);const v=new ae(_,t);v.position.set(m,o/2,p),v.rotation.y=Math.atan2(u,d),v.castShadow=!1,v.receiveShadow=!0,v.name="skirting",e.add(v)}}function ZM(s,e,t,n,i){if(s.length<3)return;const r=mf(s)>=0?1:-1,o=.42,a=.16,c=.04,l=n.ceiling.clone();l.color.set("#f3f0ea"),l.roughness=.9,i.extraMats.push(l);const h=e-a/2;for(let _=0;_<s.length;_++){const v=s[_],x=s[(_+1)%s.length],E=x[0]-v[0],T=x[1]-v[1],S=Math.hypot(E,T);if(S<.4)continue;const[A,M]=rl(v,x,r),y=(v[0]+x[0])/2+A*(o/2),C=(v[1]+x[1])/2+M*(o/2),D=new ve(o,a,S-.04);i.geos.push(D);const L=new ae(D,l);L.position.set(y,h,C),L.rotation.y=Math.atan2(E,T),L.castShadow=!1,L.receiveShadow=!0,L.name="cove-soffit",t.add(L);const F=(v[0]+x[0])/2+A*(o-c/2),O=(v[1]+x[1])/2+M*(o-c/2),U=new ve(c,c,S-.08);i.geos.push(U);const z=new ae(U,l);z.position.set(F,e-a-c/2,O),z.rotation.y=Math.atan2(E,T),z.name="cove-lip",t.add(z)}const u=n.emissive.clone();u.emissive.set("#fff1d0"),u.emissiveIntensity=1.4,u.color.set("#fff6e4"),i.extraMats.push(u);const d=mi(s),f=[];for(let _=0;_<s.length;_++){const v=s[_],x=s[(_+1)%s.length],E=x[0]-v[0],T=x[1]-v[1],S=Math.hypot(E,T);if(S<1.2)continue;const[A,M]=rl(v,x,r),y=Math.max(1,Math.floor(S/1.7));for(let C=1;C<=y;C++){const D=C/(y+1),L=v[0]+E*D+A*(o-.08),F=v[1]+T*D+M*(o-.08);f.push({x:L,z:F})}}const g=i.mobile?6:10,b=Math.max(1,Math.ceil(f.length/g));let m=0;const p=i.mobile?0:4;for(let _=0;_<f.length;_+=b){const{x:v,z:x}=f[_],E=new ae(new rn(.07,.075,.04,16),u);E.position.set(v,e-a+.01,x),E.name="downlight",t.add(E);const T=new ae(new Ko(.075,.008,6,16),n.blackMetal);if(T.rotation.x=Math.PI/2,T.position.set(v,e-a-.005,x),t.add(T),m<p){const S=new Il("#fff3d6",1.35,6.5,.42,.45,1.4);S.position.set(v,e-a-.05,x),S.target.position.set(v,0,x),S.castShadow=!1,t.add(S),t.add(S.target),i.lights.push(S),m+=1}}if(d.w*d.d>16){const _=new ae(new rn(.08,.085,.04,16),u);_.position.set(d.cx,e-.04,d.cz),_.name="downlight-centre",t.add(_)}}const Ur=1.6,ju={foyer:0,lobby:1,hall:2,living:3,dining:4,kitchen:5,bedroom:6,dressing:7,bathroom:8,utility:9,linen:10,balcony:11,terrace:12};function Ji(s,e,t){let n=!1;const i=s.length;for(let r=0,o=i-1;r<i;o=r++){const[a,c]=s[r],[l,h]=s[o];c>t!=h>t&&e<(l-a)*(t-c)/(h-c+1e-12)+a&&(n=!n)}return n}function ol(s,e,t,n=.4){for(const i of s)if(Ji(i.polygon,e,t)||n>0&&al(i.polygon,e,t)<=n)return!0;return!1}function al(s,e,t){let n=1/0;for(let i=0;i<s.length;i++){const r=s[i],o=s[(i+1)%s.length],a=KM(e,t,r[0],r[1],o[0],o[1]);a<n&&(n=a)}return n}function KM(s,e,t,n,i,r){const o=i-t,a=r-n,c=o*o+a*a||1;let l=((s-t)*o+(e-n)*a)/c;return l=Math.max(0,Math.min(1,l)),Math.hypot(s-(t+l*o),e-(n+l*a))}function Fr(s,e,t,n=.3){for(const i of s)if(e+n>i.minX&&e-n<i.maxX&&t+n>i.minZ&&t-n<i.maxZ)return!0;return!1}function $M(s,e,t,n=.32){const i=(a,c)=>!Fr(e,a,c,n)&&ol(t,a,c,.25);if(i(s.x,s.z))return s;const r=[.25,.45,.7,1,1.35,1.75,2.2,2.8],o=16;for(const a of r)for(let c=0;c<o;c++){const l=c/o*Math.PI*2,h=s.x+Math.cos(l)*a,u=s.z+Math.sin(l)*a;if(i(h,u))return{x:h,z:u}}for(const a of t){const c=mi(a.polygon);if(i(c.cx,c.cz))return{x:c.cx,z:c.cz}}return s}function JM(s,e){return e?s.map(([t,n])=>wn(t,n,e)):s}function QM(s,e,t,n){return Math.atan2(-(t-s),-(n-e))}function qu(s,e){const t=`${s} ${e}`.toLowerCase();if(/master/.test(t))return 0;const n=t.match(/(\d+)/);return n?Number(n[1]):9}function ew(s){const e=s.name.replace(/\s+area$/i,"").trim();return s.type==="lobby"||s.id==="lobby"?{name:e.toLowerCase().includes("entrance")?"Foyer":e||"Foyer",short:"Foyer",type:"foyer"}:s.type==="hall"?{name:e||"Hall",short:"Hall",type:"foyer"}:s.type==="living"?{name:"Living",short:"Living",type:"living"}:s.type==="kitchen"?{name:"Kitchen",short:"Kitchen",type:"kitchen"}:s.type==="bathroom"?{name:e||"Bathroom",short:tw(e),type:"bathroom"}:s.type==="bedroom"?{name:e||"Bedroom",short:nw(e),type:"bedroom"}:s.type==="balcony"?{name:"Balcony",short:"Balcony",type:"balcony"}:s.type==="terrace"?{name:"Terrace",short:"Terrace",type:"terrace"}:s.type==="dressing"?{name:"Dressing",short:"Dressing",type:"dressing"}:s.type==="utility"?{name:"Utility",short:"Utility",type:"utility"}:s.type==="linen"?{name:"Linen",short:"Linen",type:"linen"}:{name:e||s.id,short:e||s.id,type:s.type}}function tw(s){return/master/i.test(s)?"Master bath":/en-?suite/i.test(s)?"En-suite":/toilet\s*2/i.test(s)?"Toilet 2":/utility/i.test(s)?"Bath":s.length>14?"Bathroom":s||"Bathroom"}function nw(s){return/master/i.test(s)?"Master bed":s||"Bedroom"}const cl=-8*Math.PI/180;function gf(s,e){return s==="bathroom"||s==="dressing"||s==="linen"||s==="utility"||e<6}function bf(s,e){return gf(s,e)?85:70}function Qa(s,e,t,n,i,r,o){const a=mi(e),c=s.area_m2||a.w*a.d,l=gf(t,c),h=l?Math.min(.42,Math.max(.28,Math.min(a.w,a.d)*.2)):Math.max(.5,Math.min(.75,Math.min(a.w,a.d)*.16)),u=l?.22:.28,d=t==="balcony"||t==="terrace",f=d&&Math.min(a.w,a.d)<2.3;let g=a.cx,b=a.cz;t==="kitchen"&&o&&(g=a.cx*.7+o.x*.3,b=a.cz*.7+o.z*.3),t==="foyer"&&r&&(g=a.cx*.3+r.x*.7,b=a.cz*.3+r.z*.7),d&&(g=a.cx,b=a.cz);const m=t==="bedroom"&&o&&o.fx!==void 0&&o.fz!==void 0&&o.depth?o:null;if(m){const D=m.x-m.fx*(m.depth/2),L=m.z-m.fz*(m.depth/2);g=D*.6+m.x*.4,b=L*.6+m.z*.4}const p=[],_=(D,L,F)=>{const O=ll(e,D,L,l?.36:.32);if(!Ji(e,O.x,O.z))return;let U=O.x,z=O.z;if(Fr(n,U,z,u)){const j=U+(a.cx-U)*.3,ne=z+(a.cz-z)*.3,ue=ll(e,j,ne,.3);if(Fr(n,ue.x,ue.z,u*.85))return;U=ue.x,z=ue.z}const G=Math.hypot(g-U,b-z);p.push({x:U,z,score:F+G})};for(const D of i){const L=Br(D,e);if(!L)continue;const F=l?Math.min(.5,Math.min(a.w,a.d)*.26):.65,O=L.mx+L.ix*F,U=L.mz+L.iz*F;let z=16;t==="kitchen"&&o&&Math.hypot(O-o.x,U-o.z)<2.2&&(z=-10),_(O,U,z),_(L.mx+L.ix*(F+.4),L.mz+L.iz*(F+.4),z-4)}if(_(a.minX+h,a.minZ+h,10),_(a.maxX-h,a.minZ+h,10),_(a.minX+h,a.maxZ-h,10),_(a.maxX-h,a.maxZ-h,10),_(a.cx,a.minZ+h,8),_(a.cx,a.maxZ-h,8),_(a.minX+h,a.cz,8),_(a.maxX-h,a.cz,8),d&&(a.w>=a.d?(_(a.minX+h,a.cz,28),_(a.maxX-h,a.cz,28),_(a.minX+h,a.maxZ-h*.6,22),_(a.maxX-h,a.maxZ-h*.6,22)):(_(a.cx,a.minZ+h,28),_(a.cx,a.maxZ-h,28))),t==="kitchen"){const D=o?.x??a.cx,L=o?.z??a.minZ+.4,F=D>a.cx?a.minX+h:a.maxX-h,O=L>a.cz?a.minZ+h:a.maxZ-h;_(F,O,48),_(F,a.cz,28),_((F+a.cx)/2,O,26);for(const U of p){const z=Math.hypot(U.x-D,U.z-L),G=Math.abs(U.x-D)+Math.abs(U.z-L);U.score+=z*5+G*3,z<2.2&&(U.score-=50)}g=a.cx,b=a.cz}if(t==="bedroom")if(m){const D=-m.fz,L=m.fx,F=m.x+m.fx*(m.depth/2),O=m.z+m.fz*(m.depth/2),U=[[a.minX+h,a.minZ+h],[a.maxX-h,a.minZ+h],[a.minX+h,a.maxZ-h],[a.maxX-h,a.maxZ-h]];for(const[z,G]of U){const j=(z-m.x)*m.fx+(G-m.z)*m.fz;j>.15&&_(z,G,56+j*6)}for(const z of[1,-1])_(F+m.fx*.85+D*z*1.25,O+m.fz*.85+L*z*1.25,44),_(F+m.fx*.4+D*z*1.45,O+m.fz*.4+L*z*1.45,38);for(const z of p){const G=z.x-m.x,j=z.z-m.z,ne=Math.hypot(G,j),ue=G*m.fx+j*m.fz;ne<1.2&&(z.score-=90),ue<.1&&(z.score-=50),z.score+=Math.min(ne,2.6)*8;const Ee=g-z.x,K=b-z.z,N=Math.hypot(Ee,K)||1,V=Ee/N*-m.fx+K/N*-m.fz;z.score+=V*16}}else for(const D of p){const L=Math.hypot(D.x-a.cx,D.z-a.cz);D.score+=L*1.6}p.sort((D,L)=>L.score-D.score);const v=p[0]??{x:a.cx,z:a.cz},x=g-v.x,E=b-v.z,T=Math.hypot(x,E)||1;if(t==="bedroom"){let D=T;for(let F=T;F<T+3;F+=.2){const O=v.x+x/T*F,U=v.z+E/T*F;if(!Ji(e,O,U))break;D=F}const L=Math.min(D*.72,T+1.2);g=v.x+x/T*L,b=v.z+E/T*L}const S=f?-20*Math.PI/180:d||t==="bathroom"?-14*Math.PI/180:t==="bedroom"?-10*Math.PI/180:cl,A=Math.hypot(g-v.x,b-v.z)||1,M=Ur+Math.tan(S)*A;let y=bf(t,c);return t==="kitchen"&&c<18&&(y=80),d&&f&&(y=80),t==="bedroom"&&(/master/i.test(s.name||"")||c>=14)?y=Math.max(y,82):t==="bedroom"&&(y=Math.max(y,76)),t==="bathroom"&&(y=Math.max(y,90)),{camX:v.x,camZ:v.z,lookX:g,lookZ:b,lookY:M,fov:y,pitch:S}}function ll(s,e,t,n=.34){if(Ji(s,e,t)&&al(s,e,t)>=n)return{x:e,z:t};const i=mi(s);for(let r=.08;r<=1.01;r+=.08){const o=e+(i.cx-e)*r,a=t+(i.cz-t)*r;if(Ji(s,o,a)&&al(s,o,a)>=Math.min(n,.22))return{x:o,z:a}}return{x:i.cx,z:i.cz}}function ec(s,e,t,n,i,r,o,a,c){let l=$M({x:r.camX,z:r.camZ},o,a,n==="bathroom"?.22:.28);const h=a.find(m=>Ji(m.polygon,r.camX,r.camZ))??a.find(m=>Ji(m.polygon,r.lookX,r.lookZ))??a[0];h&&(l=ll(h.polygon,l.x,l.z,n==="bathroom"||n==="utility"||n==="dressing"?.36:.32));const u={x:r.lookX,z:r.lookZ},d=Math.hypot(u.x-l.x,u.z-l.z)||1,f=r.lookY??Ur+Math.tan(cl)*d,g=QM(l.x,l.z,u.x,u.z),b=r.pitch??cl;return{id:s,name:e,short:t,type:n,area_m2:i,note:c,position:new I(l.x,Ur,l.z),lookAt:new I(u.x,f,u.z),yaw:g,pitch:b,walkX:l.x,walkZ:l.z,fov:r.fov??bf(n,i)}}function vf(s,e,t,n=new Map){const i=[],r=s.rooms.map(d=>({...d,polygon:JM(d.polygon,e)})),o=dM(s,e),a=r.flatMap(d=>d.polygon.map(f=>f[0])),c=r.flatMap(d=>d.polygon.map(f=>f[1])),l={x:(Math.min(...a)+Math.max(...a))/2,z:(Math.min(...c)+Math.max(...c))/2},h=r.filter(d=>d.type!=="utility"||(d.area_m2??0)>2),u=d=>{const g=(n.get(d)??[]).find(b=>b.kind==="kitchen");return g?{x:g.x,z:g.z}:void 0};for(const d of r){if(d.type==="utility"&&(d.area_m2??0)<2)continue;const f=ew(d),g=f.type==="kitchen"?u(d.id):f.type==="bedroom"?(()=>{const p=(n.get(d.id)??[]).find(_=>_.kind==="bed");return p?{x:p.x,z:p.z,fx:p.fx,fz:p.fz,depth:p.depth}:void 0})():void 0,b=Qa(d,d.polygon,f.type,t,o,l,g);i.push(ec(d.id,f.name,f.short,f.type,d.area_m2,b,t,h,d.notes));const m=d.type==="living"&&/dining|kitchen/i.test(d.name);if(m&&/dining/i.test(d.name)){const p=Qa(d,d.polygon,"dining",t,o,l);i.push(ec(d.id+"-dining","Dining","Dining","dining",d.area_m2,p,t,h))}if(m&&/kitchen/i.test(d.name)||d.type==="living"&&d.id==="lounge"){const p=u(d.id),_=Qa(d,d.polygon,"kitchen",t,o,l,p);i.push(ec(d.id+"-kitchen","Kitchen","Kitchen","kitchen",d.area_m2,_,t,h))}}return i.sort((d,f)=>{const g=ju[d.type]??50,b=ju[f.type]??50;return g!==b?g-b:d.type==="bedroom"?qu(d.name,d.id)-qu(f.name,f.id):d.name.localeCompare(f.name)}),i}function Yu(s,e){const t={modern:"Modern",luxury:"Luxury",minimal:"Minimal",traditional:"Traditional Indian"},n={marble:"Marble",wood:"Wood",tile:"Tile"},i={white:"White",walnut:"Walnut",black:"Matte black",granite:"Granite"},r=[];return r.push({label:"Style",value:t[e.style]}),s.type==="kitchen"?(r.push({label:"Cabinets & counter",value:i[e.kitchen]}),r.push({label:"Floor",value:"Tile"})):s.type==="bathroom"||s.type==="utility"?(r.push({label:"Floor",value:"Tile"}),r.push({label:"Walls",value:"Follow your wall colour"})):s.type==="balcony"||s.type==="terrace"?r.push({label:"Deck",value:"Terracotta pavers"}):s.type==="bedroom"?(r.push({label:"Floor",value:n[e.flooring]}),r.push({label:"Headboard",value:t[e.style]})):(r.push({label:"Floor",value:n[e.flooring]}),r.push({label:"Walls",value:"Your chosen wall colour"})),r}function iw(s,e,t,n=new Map){const i=vf(s,e,t,n),r=i.find(o=>o.type==="living")??i.find(o=>o.type==="foyer")??i[0];return r?{x:r.walkX,y:Ur,z:r.walkZ,yaw:r.yaw,pitch:r.pitch}:{x:0,y:Ur,z:0,yaw:0}}const Zu=2.1,Ku=.9,$u=1.4;function Ms(s,e="wood",t="#ffffff"){return k_(s,e,t)}function sw(s){let e=0;for(let t=0,n=s.length-1;t<s.length;n=t++)e+=s[n][0]*s[t][1]-s[t][0]*s[n][1];return e}function Ju(s){const e=sw(s)<0?[...s].reverse():s,t=new Ws;t.moveTo(e[0][0],e[0][1]);for(let n=1;n<e.length;n++)t.lineTo(e[n][0],e[n][1]);return t.closePath(),t}function Cn(s,e){return e?s.map(([t,n])=>wn(t,n,e)):s}function Qu(s,e,t,n={showCeiling:!1,y:0,cutaway:!1}){const i=n.transform,r=new Mt;r.position.y=n.y;const o=[],a=[],c=[],l=[],h=pn(t.wall.clone(),.42);h.color.set(e.wallColor),l.push(h),Lu(t,e.kitchen),Iu(t,e);const u=Ms(Du(t,e.flooring),e.flooring),d=Ms(t.tile,"tile-wet","#e8eef0"),f=Ms(t.tile,"tile","#efeae2"),g=Ms(t.terra,"terra"),b=Ms(t.wood,"wood");l.push(u,d,f,g,b);const m=n.cutaway?Math.min(1.15,s.wallHeight):s.wallHeight,p=s.walls.map(K=>i?br(K,i):K);for(const K of s.rooms){const N=Cn(K.polygon,i);if(N.length<3)continue;const V=Ju(N),q=new Ho(V);q.rotateX(Math.PI/2),c.push(q);let Q=u,de=e.flooring;K.type==="bathroom"||K.type==="utility"?(Q=d,de="tile-wet"):K.type==="kitchen"?(Q=f,de="tile"):K.type==="terrace"||K.type==="balcony"?(Q=g,de="terra"):K.type==="bedroom"&&e.flooring==="marble"?(Q=u,de="marble"):(K.type==="lobby"||K.type==="hall")&&(Q=f,de="tile"),Ba(q,Ha(de));const be=new ae(q,Q);be.position.y=.008,be.receiveShadow=!0,be.castShadow=!1,be.frustumCulled=!1,be.name=`floor-${K.id}`,r.add(be),a.push(be),n.cutaway||YM(N,r,t.woodFur,c,p)}const _=s.bounds,v=[[_.min[0],_.min[1]],[_.max[0],_.min[1]],[_.max[0],_.max[1]],[_.min[0],_.max[1]]],x=Cn(v,i),E=new Ho(Ju(x));E.rotateX(Math.PI/2),Ba(E,Ha("tile")),c.push(E);const T=new ae(E,t.concfloor?Ms(t.concfloor,"wood","#d0cdc6"):u);T.position.y=-.04,T.receiveShadow=!0,r.add(T),l.push(T.material);for(const K of s.walls){const N=i?br(K,i):K;if(N.w<.02||N.d<.02)continue;const V=new ve(N.w,m,N.d);c.push(V);const q=new ae(V,h);q.position.set(N.x+N.w/2,m/2,N.z+N.d/2),q.castShadow=!0,q.receiveShadow=!0,r.add(q),o.push(yy(N))}for(const K of s.windows){const N=i?br(K,i):K,V=N.w>=N.d,q=V?N.w:N.d,Q=Math.max(V?N.d:N.w,.06),de=N.x+N.w/2,be=N.z+N.d/2,ge=n.cutaway?Math.min(.4,Ku):Ku,ze=n.cutaway?Math.min(.6,$u):$u,$=V?q:.06,oe=V?.06:q,k=t.frame,Ae=new ae(new ve($,.05,oe),k);Ae.position.set(de,ge+ze,be),r.add(Ae);const le=new ae(new ve($,.05,oe),k);le.position.set(de,ge,be),r.add(le);const ye=new ae(new ve(V?q-.04:.03,ze-.04,V?.03:q-.04),t.glass);ye.position.set(de,ge+ze/2,be),r.add(ye);const pe=new ae(new ve(V?q:Q+.08,.04,V?Q+.08:q),t.woodFur);pe.position.set(de,ge-.02,be),r.add(pe)}if(e.furniture&&!n.cutaway)for(const K of s.windows){const N=i?br(K,i):K;jM(N.x+N.w/2,N.z+N.d/2,N.w,N.d,s.wallHeight,r,t,e.style)}for(const K of s.doors){const N=i?wn(K.ax,K.az,i):[K.ax,K.az],V=i?wn(K.bx,K.bz,i):[K.bx,K.bz],q=(N[0]+V[0])/2,Q=(N[1]+V[1])/2,de=V[0]-N[0],be=V[1]-N[1],ge=Math.hypot(de,be)||K.width,ze=Math.atan2(de,be),$=N[0],oe=N[1],k=new Mt;k.position.set($,0,oe),k.rotation.y=ze+Math.PI/2.6;const Ae=n.cutaway?Math.min(m,1.05):Zu,le=new ae(new ve(.04,Ae,ge*.95),t.door);le.position.set(0,Ae/2,ge*.45),le.castShadow=!0,k.add(le);const ye=new ae(new rn(.015,.015,.1,8),kr(t,e.style));if(ye.rotation.z=Math.PI/2,ye.position.set(.03,1,ge*.8),k.add(ye),r.add(k),!n.cutaway){new ae(new ve(ed(de,be,.12),.08,ed(be,de,.12)||.12),h);const pe=Math.abs(de)>Math.abs(be),Fe=new ae(new ve(pe?ge:.15,.1,pe?.15:ge),h);Fe.position.set(q,Zu+.05,Q),r.add(Fe)}}for(const K of s.rooms)K.type!=="balcony"&&K.type!=="terrace"||rw(Cn(K.polygon,i),r,t,o,n.cutaway);const S=new Mt;S.name="furniture",S.visible=e.furniture;const A=new Map;if(e.furniture){const K=pM(s,e,i);qy(K.issues,`${s.id}/${e.style}`);const N=new Mt,V=XM(K.placements,N,t,e,n.catalog??null);for(const q of V){const Q=q.roomId??"";A.has(Q)||A.set(Q,[]),A.get(Q).push(q)}S.add(N);for(const q of K.footprints)q.ghost||o.push({minX:q.minX,maxX:q.maxX,minZ:q.minZ,maxZ:q.maxZ})}r.add(S);const M=new ae(E,t.ceiling);if(M.position.y=s.wallHeight-.02,M.rotation.x=0,M.scale.y=-1,M.visible=n.showCeiling&&!n.cutaway,M.receiveShadow=!0,M.name="ceiling",r.add(M),n.showCeiling&&!n.cutaway){const K=s.rooms.filter(N=>N.type!=="terrace"&&N.type!=="balcony");if(K.length){let N=1/0,V=-1/0,q=1/0,Q=-1/0;for(const ze of K)for(const[$,oe]of Cn(ze.polygon,i))$<N&&(N=$),$>V&&(V=$),oe<q&&(q=oe),oe>Q&&(Q=oe);const de=Math.max(1,V-N)+.7,be=Math.max(1,Q-q)+.7,ge=new ae(new es(de,be),t.ceiling);ge.rotation.x=Math.PI/2,ge.position.set((N+V)/2,s.wallHeight-.015,(q+Q)/2),ge.name="ceiling-cover",r.add(ge)}}const y=[],C=[],D=[];for(const K of s.rooms){if(K.type==="terrace"||K.type==="balcony"){const de=mi(Cn(K.polygon,i)),be=t.emissive.clone();be.emissive.set("#ffc078"),be.emissiveIntensity=.3,C.push(be);const ge=new ae(new rn(.1,.1,.03,16),be);ge.position.set(de.cx,s.wallHeight-.08,de.cz),ge.visible=n.showCeiling&&!n.cutaway,r.add(ge);const ze=new Un("#ffc078",0,6.5,2);ze.position.set(de.cx,s.wallHeight-.35,de.cz),ze.visible=!1,ze.userData.balcony=!0,r.add(ze),D.push(ze);const $=t.emissive.clone();$.emissive.set("#ffd0a0"),$.emissiveIntensity=.35,C.push($);const oe=new ae(new ve(.12,.18,.08),$);oe.position.set(de.cx,1.75,de.cz),r.add(oe);const k=new Un("#ffd0a0",0,4.5,2);k.position.set(de.cx,1.7,de.cz),k.visible=!1,k.userData.balcony=!0,r.add(k),D.push(k);continue}const N=mi(Cn(K.polygon,i)),V=t.emissive.clone();V.emissive.set("#ffd9a0"),V.emissiveIntensity=.35,C.push(V);const q=new ae(new rn(.12,.12,.03,16),V);q.position.set(N.cx,s.wallHeight-.05,N.cz),q.visible=n.showCeiling&&!n.cutaway,r.add(q);const Q=new Un("#ffd7a3",0,Math.max(4.5,Math.min(N.w,N.d)*1.6+2),2);Q.position.set(N.cx,s.wallHeight-.28,N.cz),Q.visible=!1,r.add(Q),y.push(Q)}const L=[];if(n.showCeiling&&!n.cutaway)for(const K of s.rooms)K.type!=="living"&&K.type!=="bedroom"||K.area_m2<10||ZM(Cn(K.polygon,i),s.wallHeight,r,t,{mobile:!!n.mobile,geos:c,extraMats:l,lights:L});const F=aw(s,i),O=n.hotspots?ow(s,i,n.cutaway,r):[];function U(K){const N=K==="night",V=K==="golden";for(const q of y)q.intensity=N?n.cutaway?1.15:1.7:V?.22:0,q.visible=N||V,q.color.set(N?"#ffd7a3":"#ffc888");for(const q of D)q.intensity=N?2.15:V?.4:0,q.visible=N||V,q.color.set("#ffc078");for(const q of C)q.emissiveIntensity=N?2.4:V?.75:.3,q.emissive.set(N?"#ffcc88":"#ffe8c0")}const z=s.rooms.map(K=>({...K,polygon:Cn(K.polygon,i)})),G=vf(s,i,o,A),ne={...iw(s,i,o,A),y:n.y+1.6};function ue(K){h.color.set(K.wallColor),Lu(t,K.kitchen),Iu(t,K),U_(u,Du(t,K.flooring),K.flooring);const N=Ha(K.flooring);for(const V of a)V.material===u&&Ba(V.geometry,N);S.visible=K.furniture,Vy(S,K,t)}function Ee(){r.traverse(K=>{const N=K.element;N&&N.parentElement&&N.remove()}),r.removeFromParent(),r.traverse(K=>{});for(const K of c)K.dispose();for(const K of l)K.dispose()}return{group:r,collisions:o,spawn:ne,floorMeshes:a,wallMat:h,hotspots:O,rooms:G,worldRooms:z,applyPrefs:ue,setTime:U,dispose:Ee,lighting:F}}function ed(s,e,t){return Math.abs(s)>.01?Math.abs(s):t}function rw(s,e,t,n,i){if(s.length<3)return;const r=i?.6:1.05,o=s.length;for(let a=0;a<o;a++){const c=s[a],l=s[(a+1)%o],h=l[0]-c[0],u=l[1]-c[1],d=Math.hypot(h,u);if(d<.3)continue;const f=(c[0]+l[0])/2,g=(c[1]+l[1])/2,b=Math.atan2(h,u),m=new ae(new ve(.03,r,d),t.glassRail);m.position.set(f,r/2,g),m.rotation.y=b,e.add(m);const p=new ae(new ve(.04,.03,d),t.metal);p.position.set(f,r,g),p.rotation.y=b,e.add(p);const _=Math.max(2,Math.floor(d/1.4)+1);for(let v=0;v<_;v++){const x=_===1?.5:v/(_-1),E=c[0]+h*x,T=c[1]+u*x,S=new ae(new ve(.04,r,.04),t.metal);S.position.set(E,r/2,T),e.add(S)}n.push({minX:Math.min(c[0],l[0])-.06,maxX:Math.max(c[0],l[0])+.06,minZ:Math.min(c[1],l[1])-.06,maxZ:Math.max(c[1],l[1])+.06})}}function ow(s,e,t,n){const i=s.rooms,r=i.find(b=>b.type==="kitchen")??i.find(b=>/kitchen/i.test(b.name))??(s.id==="penthouse"?i.find(b=>b.id==="lounge"):void 0),o=i.filter(b=>b.type==="bathroom"),a=o.find(b=>/master|ensuite|en-suite|en suite/i.test(`${b.name} ${b.id}`))??o[0],c=i.find(b=>b.type==="terrace")??i.find(b=>b.type==="balcony"),l=[];if(r){let b;s.id==="penthouse"?b="The first-floor plan used for this penthouse has no kitchen; an open kitchen is shown in the family lounge as an approximation.":r.type==="living"&&(b="The 3BHK drawing combines the living room and kitchen in one space. The kitchen finish applies to the open-kitchen run."),l.push({kind:"kitchen",room:r,title:r.type==="living"?"Kitchen (open to living)":"Kitchen",note:b})}if(a&&l.push({kind:"bath",room:a,title:a.name.replace(/\s+area$/,"")||"Bathroom"}),c){const b=c.type==="terrace";l.push({kind:"view",room:c,title:b?"Terrace view":"Balcony view"})}const h=new ot({color:"#c4a265",emissive:"#c4a265",emissiveIntensity:.45,metalness:.55,roughness:.28}),u=[],d=s.bounds;let f=(d.min[0]+d.max[0])/2,g=(d.min[1]+d.max[1])/2;if(e){const b=wn(d.min[0],d.min[1],e),m=wn(d.max[0],d.max[1],e);f=(b[0]+m[0])/2,g=(b[1]+m[1])/2}for(const b of l){const m=Cn(b.room.polygon,e),p=mi(m),_=t?.5:1.2;let v,x;if(b.kind==="view"){const D=p.cx-f,L=p.cz-g,F=Math.hypot(D,L)||1,O=D/F,U=L/F;v=new I(p.cx-O*.2,1.55,p.cz-U*.2),x=new I(p.cx+O*5,1.35,p.cz+U*5),t&&(v=new I(p.cx-O*2.4,3.2,p.cz-U*2.4),x=new I(p.cx+O*1.5,.8,p.cz+U*1.5))}else if(t)v=new I(p.cx,3.6,p.cz+Math.max(p.d,2)*.65),x=new I(p.cx,.45,p.cz);else{const D=Math.min(Math.max(Math.min(p.w,p.d)*.42,1.35),2.8),L=p.w>=p.d;v=new I(p.cx+(L?D:Math.min(p.w,1.1)*.25),1.55,p.cz+(L?Math.min(p.d,1.1)*.25:D)),x=new I(p.cx,_,p.cz)}const E=new Mt,T=new ae(new rn(.028,.028,.55,10),h);T.position.y=.28;const S=new ae(new pi(.12,16,16),h);S.position.y=.62;const A=new ae(new pi(.38,10,10),new Ct({visible:!1}));A.position.y=.5,E.add(T,S,A),E.position.set(p.cx,.02,p.cz),E.name="hotspot",n.add(E);const M=document.createElement("button");M.type="button",M.className="hotspot-lab",M.textContent=b.title;const y=new Bs(M);y.position.set(0,.95,0),E.add(y);const C={id:`${b.kind}-${b.room.id}`,kind:b.kind,title:b.title,roomName:b.room.name,area_m2:b.room.area_m2,note:b.note,position:new I(p.cx,1.2,p.cz),cameraPos:v,lookAt:x,mesh:E,labelEl:M};E.userData.hotspot=C,u.push(C)}return u}function aw(s,e){const n=s.rooms.filter(c=>c.type!=="terrace"&&c.type!=="balcony").map(c=>mi(Cn(c.polygon,e))),i=s.rooms.flatMap(c=>Cn(c.polygon,e)),r=mi(i.length?i:[[0,0],[1,1]]),o=new I;let a=0;for(const c of s.windows){const l=e?br(c,e):c,h=l.x+l.w/2,u=l.z+l.d/2;let d=n[0],f=1/0;for(const p of n){const _=(p.cx-h)**2+(p.cz-u)**2;_<f&&(f=_,d=p)}if(!d)continue;const g=d.cx-h,b=d.cz-u,m=Math.hypot(g,b)||1;o.x+=g/m,o.z+=b/m,a+=1}return a?o.multiplyScalar(1/a):o.set(.55,0,.45),o.y=0,o.normalize(),{center:new I(r.cx,1.45,r.cz),incoming:o,radius:Math.max(r.w,r.d)*.62+3}}const tc=new Map;function cw(s,e){return`${s}-${e}`}const lw="#f4f1ea";function hw(s,e){return s?s.trim().toLowerCase()===e.trim().toLowerCase():!0}function uw(s,e,t){return s==="2bhk"&&e==="modern"&&hw(t,lw)}function dw(s,e,t,n=0){const i=cw(s,e);return tc.has(i)||tc.set(i,fw(s,e)),tc.get(i).then(r=>{if(!r)return null;const o=r.group.clone(!0);vw(o,t,n);const a=[],c=[];o.traverse(h=>{const u=h;if(!u.isMesh)return;const d=Array.isArray(u.material)?u.material:[u.material];for(const f of d){const g=f;g.userData?.lsWall&&a.push(g),g.userData?.lsRid&&c.push({mat:g,rid:g.userData.lsRid})}});const l=!!r.manifest.combinedColor;return{group:o,manifest:r.manifest,setWallColor:h=>{if(!l)for(const u of a)u.color.set(h)},setTime:h=>{const u=d=>{if(!(!d||d.size===0))for(const f of c){const g=d.get(f.rid);g&&(f.mat.map=g,f.mat.needsUpdate=!0)}};if(h){if(r.nightMaps.size>0){u(r.nightMaps);return}return r.ensureNight().then(u)}u(r.dayMaps)},dispose:()=>{}}})}async function td(s,e,t){const n=new Map;if(!e)return n;const i=new $o;return await Promise.all(Object.entries(e).map(async([r,o])=>{const a=await i.loadAsync(`${s}${o.file}`);a.colorSpace=t?vt:zt,a.channel=2,a.flipY=!1,a.minFilter=kn,a.magFilter=Lt,a.generateMipmaps=!0,a.needsUpdate=!0,n.set(r,a)})),n}async function fw(s,e){const t="./baked/",n=`${s}-${e}`;let i;try{const T=await fetch(`${t}${n}-manifest.json`);if(!T.ok)return null;i=await T.json()}catch{return null}if(!i.glb)return null;const r=new Fl;r.setMeshoptDecoder(df);const a=(await r.loadAsync(`${t}${i.glb}`)).scene;a.name=`baked-${n}`;const c=i.zFlip!==!1;a.updateMatrixWorld(!0);const l=!!i.combinedColor,h=i.toneMapped??!l,u=await td(t,i.lightmaps,l),d=new Map;let f=null;const g=()=>d.size>0?Promise.resolve(d):(f||(f=td(t,i.nightLightmaps,l).then(T=>{for(const[S,A]of T)d.set(S,A);return d})),f);let b=null;if(!l)try{b=await new $o().loadAsync("./textures/oakplank_diff.jpg"),b.colorSpace=vt,b.wrapS=b.wrapT=qt,b.repeat.set(1,1),b.anisotropy=8}catch{}const m=i.lightMapIntensity??(l?1:1.15),p=i.rooms??[],_=new Set(["living","bedroom1","bedroom2"]),v=[],x=[];a.traverse(T=>{const S=T;if(!S.isMesh)return;const A=S.geometry;A.getAttribute("uv1")&&!A.getAttribute("uv2")&&A.setAttribute("uv2",A.getAttribute("uv1"));const M=bw(S,p,c),y=pw(S),C=M?u.get(M):void 0,D=/^floor-/.test(S.name)||/^OakFloor$/i.test(S.material.name??"");/^ceil-/.test(S.name);const L=Array.isArray(S.material)?S.material:[S.material],F=L.some(G=>/^wall/i.test(G.name))||/^wall-/i.test(S.name),O=/^glass-/i.test(S.name)||L.some(G=>/^glass/i.test(G.name)),U=[];for(const G of L){if(O){const j=new Et({name:G.name,color:9086128,transparent:!0,opacity:.18,roughness:.05,metalness:.08,transmission:.7,thickness:.02,side:Tt,depthWrite:!1});U.push(j);continue}if(y==="furn"){const j=G.clone();j.isMeshStandardMaterial&&(j.lightMap=null,j.side=Tt,j.envMapIntensity=.55,j.toneMapped=!0,j.needsUpdate=!0),U.push(j);continue}if(C){const j=G;if(l){const ne=new Ct({name:j.name,color:16777215,map:C,side:Tt,toneMapped:h});C.channel=2,F&&(ne.userData.lsWall=!0,v.push(ne)),M&&(ne.userData.lsRid=M,x.push({mat:ne,rid:M})),ne.needsUpdate=!0,U.push(ne)}else{const ne=new Ct({name:j.name,color:j.color?j.color.clone():new Ue(16777215),map:j.map??null,lightMap:C,lightMapIntensity:m,side:Tt,toneMapped:!0});D&&_.has(M??"")&&b&&(ne.map=b,ne.color.set(16777215)),F&&(ne.userData.lsWall=!0,v.push(ne)),ne.needsUpdate=!0,U.push(ne)}}else{const j=G.clone();j.isMeshStandardMaterial&&(j.lightMap=null,j.side=Tt,j.envMapIntensity=.55,j.needsUpdate=!0),U.push(j)}}S.material=U.length===1?U[0]:U;const z=y==="furn"||O;S.castShadow=z,S.receiveShadow=z,S.frustumCulled=!1});const E=T=>{const S=T?d:u;if(!(!S||S.size===0))for(const A of x){const M=S.get(A.rid);M&&(A.mat.map=M,A.mat.needsUpdate=!0)}};return{group:a,manifest:i,dayMaps:u,nightMaps:d,ensureNight:g,setWallColor:T=>{if(!l)for(const S of v)S.color.set(T)},setTime:T=>{if(T&&d.size===0)return g().then(()=>E(!0));E(T)},dispose:()=>{}}}function pw(s){const e=s.userData??{},n=(e.extras??e).ls_shell??e.ls_shell;if(typeof n=="string")return n;const i=s.name||"",r=/^(floor|ceil|wall|furn|glass|frame|shell|curtain|rail|cabinet|rod|krun|splash|counter|hob)-/.exec(i);return r?r[1]:null}function mw(s,e,t){let n=!1;for(let i=0,r=s.length-1;i<s.length;r=i++){const[o,a]=s[i],[c,l]=s[r];a>t!=l>t&&e<(c-o)*(t-a)/(l-a+1e-12)+o&&(n=!n)}return n}function gw(s){const t=new mn().setFromObject(s).getCenter(new I);return[t.x,t.z]}function bw(s,e,t=!1){const n=s.name||"",i=/^(?:floor|ceil|wall|furn|glass|frame|shell|curtain|rail|cabinet|rod|krun)-([A-Za-z0-9_]+)/.exec(n);if(i&&e.some(d=>d.id===i[1]))return i[1];const r=s.userData??{},o=r.extras??r;if(typeof r.ls_room=="string")return r.ls_room;if(typeof o.ls_room=="string")return o.ls_room;if(!e.length)return null;const[a,c]=gw(s),l=t?-c:c;for(const d of e)if(mw(d.polygon,a,l))return d.id;let h=null,u=1e9;for(const d of e){const f=d.polygon.reduce((m,p)=>m+p[0],0)/d.polygon.length,g=d.polygon.reduce((m,p)=>m+p[1],0)/d.polygon.length,b=(f-a)**2+(g-l)**2;b<u&&(u=b,h=d.id)}return h}function vw(s,e,t,n=!0){const i=new Mt;for(i.name="baked-content",n&&(i.scale.z=-1);s.children.length;)i.add(s.children[0]);const r=new Mt;if(r.name="baked-inner",e.mirrorX||e.mirrorZ){const o=new Mt;o.name="baked-mirror",o.scale.x=e.mirrorX?-1:1,o.scale.z=e.mirrorZ?-1:1,r.position.set(-e.width/2,0,-e.depth/2),o.add(r),r.add(i),s.add(o)}else r.position.set(-e.width/2,0,-e.depth/2),r.add(i),s.add(r);s.scale.set(1,1,1),s.rotation.y=e.rotY*Math.PI/180,s.position.set(e.ox+e.width/2,t,e.oz+e.depth/2)}function xw(s){s.traverse(e=>{const t=e;t.isMesh&&(t.name==="unit-outline"||t.userData.hotspot||(t.visible=!1))})}const nc=1.6,nd=.3,id=3.4,_w=5.4;class yw{position=new I;yaw=0;pitch=0;enabled=!1;locked=!1;tv=!1;keys=new Set;joy={x:0,y:0};collisions=[];rooms=[];minY=nc;walkTarget=null;canvas;onLockChange;skipLockOnce=!1;constructor(e){this.canvas=e,window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKeyUp),e.addEventListener("click",this.requestLock),document.addEventListener("pointerlockchange",this.lockChange),e.addEventListener("mousemove",this.onMouse)}setCollisions(e,t){this.collisions=e,this.rooms=t??[]}spawn(e,t,n,i,r=-.18){const o=this.nearestClear(e,n);this.position.set(o.x,t||nc,o.z),this.minY=t||nc,this.yaw=i,this.pitch=r,this.walkTarget=null}nearestClear(e,t){if(this.isWalkable(e,t))return{x:e,z:t};const n=[.3,.55,.85,1.2,1.7,2.3,3];for(const i of n)for(let r=0;r<16;r++){const o=r/16*Math.PI*2,a=e+Math.cos(o)*i,c=t+Math.sin(o)*i;if(this.isWalkable(a,c))return{x:a,z:c}}return{x:e,z:t}}isWalkable(e,t){return!(Fr(this.collisions,e,t,nd)||this.rooms.length&&!ol(this.rooms,e,t,.35))}walkTo(e,t){const n=this.nearestClear(e,t);return this.isWalkable(n.x,n.z)?(this.walkTarget=new I(n.x,this.minY,n.z),!0):!1}cancelWalkTo(){this.walkTarget=null}getWalkTarget(){return this.walkTarget}requestLock=()=>{if(this.skipLockOnce){this.skipLockOnce=!1;return}!this.enabled||this.tv||document.pointerLockElement!==this.canvas&&this.canvas.requestPointerLock().catch(()=>{})};lockChange=()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange?.(this.locked)};setOnLock(e){this.onLockChange=e}onKey=e=>{this.keys.add(e.code),this.enabled&&["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&(e.preventDefault(),this.walkTarget=null)};onKeyUp=e=>{this.keys.delete(e.code)};onMouse=e=>{!this.enabled||!this.locked||(this.yaw-=e.movementX*.0022,this.pitch-=e.movementY*.0022,this.pitch=Math.max(-1.15,Math.min(1.15,this.pitch)))};look(e,t){this.enabled&&(this.yaw-=e*.005,this.pitch-=t*.005,this.pitch=Math.max(-1.15,Math.min(1.15,this.pitch)))}update(e){if(!this.enabled)return;if(this.walkTarget){const h=this.walkTarget.x-this.position.x,u=this.walkTarget.z-this.position.z,d=Math.hypot(h,u);if(d<.1)this.walkTarget=null;else{const f=id*1.15*e,g=h/d,b=u/d;let p=Math.atan2(-g,-b)-this.yaw;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;this.yaw+=p*Math.min(1,6*e);const _=Math.min(f,d);this.tryMove(g*_,0),this.tryMove(0,b*_),this.position.y=this.minY}return}let t=0,n=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),this.keys.has("KeyA")&&(n-=1),this.keys.has("KeyD")&&(n+=1),this.tv||(this.keys.has("ArrowLeft")&&(n-=1),this.keys.has("ArrowRight")&&(n+=1)),t+=-this.joy.y,n+=this.joy.x;const i=Math.hypot(t,n);i>1&&(t/=i,n/=i);const r=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?_w:id,o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=(-t*o+n*a)*r*e,l=(-t*a-n*o)*r*e;this.tryMove(c,0),this.tryMove(0,l),this.position.y=this.minY}tryMove(e,t){const n=this.position.x+e,i=this.position.z+t;Fr(this.collisions,n,i,nd)||this.rooms.length&&!ol(this.rooms,n,i,.35)||(this.position.x=n,this.position.z=i)}apply(e){e.position.copy(this.position),e.rotation.set(this.pitch,this.yaw,0,"YXZ")}dispose(){window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKeyUp),this.canvas.removeEventListener("click",this.requestLock),document.removeEventListener("pointerlockchange",this.lockChange),this.canvas.removeEventListener("mousemove",this.onMouse),document.pointerLockElement===this.canvas&&document.exitPointerLock()}}function Mw(s,e,t){const n=s;let i=null;const r=(a,c,l,h)=>{const u=Math.max(36,n.getBoundingClientRect().width*.375);let d=l-a,f=h-c;const g=Math.hypot(d,f)||1;g>u&&(d=d/g*u,f=f/g*u),e.style.transform=`translate(${d}px, ${f}px)`,t.joy.x=d/u,t.joy.y=f/u,t.cancelWalkTo()},o=()=>{e.style.transform="",t.joy.x=0,t.joy.y=0,i=null};n.addEventListener("pointerdown",a=>{a.stopPropagation(),i=a.pointerId,n.setPointerCapture(a.pointerId);const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,a.clientX,a.clientY)}),n.addEventListener("pointermove",a=>{if(i!==a.pointerId)return;a.stopPropagation();const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,a.clientX,a.clientY)}),n.addEventListener("pointerup",a=>{a.stopPropagation(),o()}),n.addEventListener("pointercancel",o)}class ww{root;prefs;view={kind:"tower",hoverFloor:null};tv;plans;handlers;time="morning";spec=null;rooms=[];currentRoom=null;tour=null;sheetOpen=!1;revealRoomCard=!1;formOpen=!1;currentUnit="";menuOpen=!1;constructor(e,t,n,i,r){this.root=e,this.prefs={...t},this.plans=n,this.tv=i,this.handlers=r,i&&document.body.classList.add("tv"),this.watchViewport()}watchViewport(){const e=()=>{const t=window.innerWidth<900||window.innerHeight<520;document.body.classList.toggle("compact",t),document.body.classList.toggle("landscape-short",window.innerHeight<520&&window.innerWidth>window.innerHeight),this.syncLayoutVars()};e(),window.addEventListener("resize",e)}setView(e){this.view.kind==="flat"&&(e.kind!=="flat"||e.kind==="flat"&&e.unitId!==this.view.unitId)&&(this.sheetOpen=!1,this.tour=null,this.currentRoom=null,this.rooms=[],e.kind!=="flat"&&(this.spec=null)),this.menuOpen=!1,this.view=e,document.body.classList.toggle("walking",e.kind==="flat"&&e.cam==="walk"),document.body.classList.toggle("in-flat",e.kind==="flat"),document.body.classList.toggle("sheet-open",this.sheetOpen&&e.kind==="flat"),this.render()}setHoverFloor(e){this.view.kind==="tower"&&(this.view={...this.view,hoverFloor:e},this.root.querySelectorAll(".chip-row [data-floor]").forEach(t=>{t.classList.toggle("hov",Number(t.dataset.floor)===e)}))}setTime(e){this.time=e,this.render()}setRooms(e,t){this.rooms=e,t!==void 0&&(this.currentRoom=t),this.render()}setCurrentRoom(e,t=!0){this.currentRoom=e,this.revealRoomCard=!!e&&t,this.render()}setTour(e){this.tour=e,this.render()}setPrefs(e){this.prefs=e}setSheet(e){this.sheetOpen=e,this.render()}showSpec(e){this.spec=e,this.currentRoom=null,this.revealRoomCard=!1,this.render()}closeSpec(){this.spec=null,this.render(),this.handlers.onCloseSpec?.()}toast(e){let t=this.root.querySelector(".toast");t||(t=document.createElement("div"),t.className="toast",this.root.appendChild(t)),t.textContent=e,t.classList.add("show"),this.syncLayoutVars(),setTimeout(()=>t&&t.classList.remove("show"),3200)}render(){const e=this.view;this.root.innerHTML="",this.root.appendChild(this.topbar()),this.menuOpen&&this.root.appendChild(this.overflowMenu()),e.kind==="tower"?this.root.appendChild(this.floorsDock()):e.kind==="floor"?this.root.appendChild(this.unitsDock()):this.root.appendChild(this.flatSheet()),this.root.appendChild(this.zoomStack());const t=document.createElement("div");t.className="joy-wrap",t.innerHTML='<div class="joy-base" id="joy-base"><div class="joy-knob" id="joy-knob"></div></div>',this.root.appendChild(t);const n=document.createElement("div");n.className="crosshair",n.setAttribute("aria-hidden","true"),this.root.appendChild(n),this.formOpen&&this.root.appendChild(this.form());const i=document.createElement("div");i.className="toast",this.root.appendChild(i),document.body.classList.toggle("sheet-open",this.sheetOpen&&e.kind==="flat"),document.body.classList.toggle("form-open",this.formOpen),this.syncLayoutVars()}syncLayoutVars(){requestAnimationFrame(()=>{const e=this.root.querySelector(".topbar"),t=this.root.querySelector(".dock, .sheet"),n=e?Math.ceil(e.getBoundingClientRect().height):52;let i=0;const r=window.innerHeight<520&&window.innerWidth>window.innerHeight;document.body.classList.toggle("landscape-short",r);const o=window.matchMedia("(min-width: 900px) and (min-height: 560px)").matches,a=r&&this.sheetOpen||o&&this.view.kind==="flat",c=o&&this.view.kind==="tower";if(t&&getComputedStyle(t).display!=="none"&&!a&&!c){i=Math.ceil(t.getBoundingClientRect().height);const h=Math.round(window.innerHeight*.38);r&&i>h&&(i=16)}else(a||c)&&(i=16);const l=document.documentElement;l.style.setProperty("--topbar-h",`${n}px`),l.style.setProperty("--dock-h",`${i}px`)})}topbar(){const e=document.createElement("header");e.className="topbar";const n=this.view.kind==="tower",i=this.hereLabel();return e.innerHTML=`
      <button type="button" class="icon-btn back" data-tv="back" aria-label="Back" ${n?"hidden":""}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 5 L8 12 L15 19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="crumb-block">
        <span class="mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
            <path d="M6 22 L18 8 L30 22" stroke="currentColor" stroke-width="2.2"/>
            <path d="M10 22 L18 13.5 L26 22" stroke="currentColor" stroke-width="2.2"/>
            <circle cx="18" cy="25.5" r="2.2" fill="currentColor"/>
          </svg>
        </span>
        <div class="crumb-text">
          <div class="crumb-k">Lead Setu</div>
          <div class="crumb-now" title="${Qt(i)}">${Qt(i)}</div>
        </div>
        <nav class="crumbs-full" aria-label="Breadcrumb"></nav>
      </div>
      <button type="button" class="icon-btn menu-btn ${this.menuOpen?"on":""}" data-tv="menu"
        aria-label="Time of day and menu" aria-expanded="${this.menuOpen}" aria-haspopup="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="2"/>
          <path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <button type="button" class="icon-btn cta-icon" data-action="book" data-tv="cta" aria-label="Book a site visit">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="5" width="16" height="15" rx="2.5" stroke="currentColor" stroke-width="2"/>
          <path d="M8 3.5v4M16 3.5v4M4 10h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <button type="button" class="cta cta-full" data-action="book-full" data-tv="cta-full">Book site visit</button>
    `,e.querySelector(".crumbs-full").appendChild(this.crumbsFull()),e.querySelector(".back").addEventListener("click",()=>this.goBack()),e.querySelector(".menu-btn").addEventListener("click",()=>{this.menuOpen=!this.menuOpen,this.render()}),e.querySelectorAll("[data-action=book], [data-action=book-full]").forEach(o=>o.addEventListener("click",()=>this.openForm())),e}hereLabel(){const e=this.view;if(e.kind==="tower")return"Sample Tower";if(e.kind==="floor")return ja(e.floor);const t=this.planForUnit(e.unitId);return`${e.unitId} ${t?.name??""}`.trim()}crumbsFull(){const e=document.createElement("div");e.className="crumbs-inner";const t=this.view,n=(r,o,a=!1)=>{if(a){const c=document.createElement("span");c.className="crumb-here",c.textContent=r,e.appendChild(c)}else{const c=document.createElement("button");c.type="button",c.textContent=r,c.addEventListener("click",o),e.appendChild(c)}},i=()=>{const r=document.createElement("span");r.className="crumb-sep",r.textContent="›",e.appendChild(r)};if(n("Tower",()=>this.handlers.onGotoTower(),t.kind==="tower"),(t.kind==="floor"||t.kind==="flat")&&(i(),n(ja(t.floor),()=>this.handlers.onGotoFloor(t.floor),t.kind==="floor")),t.kind==="flat"){i();const r=this.planForUnit(t.unitId);n(`${t.unitId} ${r?.name??""}`.trim(),()=>{},!0)}return e}goBack(){const e=this.view;if(this.formOpen){this.closeForm();return}if(this.menuOpen){this.menuOpen=!1,this.render();return}if(this.tour?.active){this.handlers.onTour?.("stop");return}if(this.sheetOpen){this.sheetOpen=!1,this.spec=null,this.currentRoom=null,this.render(),this.handlers.onCloseSpec?.();return}if(this.spec||this.currentRoom){this.spec=null,this.currentRoom=null,this.render(),this.handlers.onCloseSpec?.();return}if(e.kind==="flat"&&e.cam==="walk"){this.handlers.onCam("dollhouse");return}if(e.kind==="flat"){this.handlers.onGotoFloor(e.floor);return}e.kind==="floor"&&this.handlers.onGotoTower()}overflowMenu(){const e=document.createElement("div");e.className="menu-pop",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Time of day");const t=document.createElement("div");t.className="menu-k",t.textContent="Time of day",e.appendChild(t);const n=[{id:"morning",label:"Morning"},{id:"golden",label:"Golden hour"},{id:"night",label:"Night"}];for(const r of n){const o=document.createElement("button");o.type="button",o.dataset.time=r.id,o.dataset.tv=`time-${r.id}`,o.className=this.time===r.id?"on":"",o.setAttribute("aria-pressed",String(this.time===r.id)),o.textContent=r.label,o.addEventListener("click",()=>{this.menuOpen=!1,this.handlers.onTime(r.id)}),e.appendChild(o)}if(this.tv){const r=document.createElement("div");r.className="tv-badge",r.textContent="TV / kiosk mode",e.appendChild(r)}const i=document.createElement("p");return i.className="menu-hint",i.innerHTML=this.hintText(),e.appendChild(i),e}floorsDock(){const e=document.createElement("div");e.className="dock floors-dock";const t=document.createElement("div");t.className="chip-row",t.setAttribute("role","listbox"),t.setAttribute("aria-label","Floors");const n=this.view.kind==="tower"?this.view.hoverFloor:null;for(let i=1;i<=Ol+1;i++){const r=document.createElement("button");r.type="button",r.dataset.floor=String(i),r.dataset.tv=`floor-${i}`,r.setAttribute("role","option"),i===Wi?(r.innerHTML='<span class="ph">PH</span>',r.title="Penthouse"):(r.innerHTML=`<span class="chip-lg">${i}</span>`,r.title=`Floor ${i}`),n===i&&r.classList.add("hov"),r.addEventListener("mouseenter",()=>this.setHoverFloor(i)),r.addEventListener("click",()=>this.handlers.onGotoFloor(i)),t.appendChild(r)}return e.appendChild(t),e.appendChild(this.dockHint(this.hintText())),e.appendChild(this.disclaimerEl()),e}unitsDock(){const e=document.createElement("div");e.className="dock units-dock";const t=this.view;if(t.kind!=="floor")return e;const n=document.createElement("div");n.className="chip-row unit-row",n.setAttribute("role","listbox"),n.setAttribute("aria-label","Flats on this floor");const i=No(t.floor);for(const r of i){const o=gr(t.floor,r.suffix),a=this.plans[r.planId],c=document.createElement("button");c.type="button",c.className="unit-chip",c.dataset.unit=o,c.dataset.tv=`unit-${o}`,t.hoverUnit===o&&c.classList.add("hov"),c.innerHTML=`<span class="chip-lg">${o}</span>
        <span class="chip-sub">${r.typeLabel}<br>${uf(a)}</span>`,c.addEventListener("click",()=>this.handlers.onGotoUnit(t.floor,o)),n.appendChild(c)}return e.appendChild(n),e.appendChild(this.dockHint(this.hintText())),e.appendChild(this.disclaimerEl()),e}roomDock(){const e=document.createElement("div");e.className="room-dock";const t=document.createElement("div");t.className="chip-row room-row",t.setAttribute("role","listbox"),t.setAttribute("aria-label","Rooms");const n=document.createElement("button");n.type="button",n.className="room-chip tour-btn"+(this.tour?.active?" on":""),n.dataset.tv="tour",n.dataset.action="tour",n.textContent=this.tour?.active?"End tour":"Tour",n.addEventListener("click",()=>{this.handlers.onTour?.(this.tour?.active?"stop":"start")}),t.appendChild(n);for(const i of this.rooms){const r=document.createElement("button");r.type="button",r.className="room-chip"+(this.currentRoom===i.id?" on":""),r.dataset.room=i.id,r.dataset.tv=`room-${i.id}`,r.textContent=i.short,r.title=i.name,r.addEventListener("click",()=>this.handlers.onRoom?.(i.id)),t.appendChild(r)}return e.appendChild(t),e}tourCard(e){const t=document.createElement("aside");t.className="tour-card";const n=this.rooms.length,i=this.tour?.index??0,r=this.tour?.playing??!1,o=Math.round(e.area_m2*10.7639),a=Yu(e,this.prefs).map(c=>`<p class="spec-fin"><span>${Qt(c.label)}</span><b>${Qt(c.value)}</b></p>`).join("");return t.innerHTML=`
      <div class="tour-k">Guided tour · ${i+1} of ${n}</div>
      <h2>${Qt(e.name)}</h2>
      <p class="spec-area">${e.area_m2.toFixed(1)} m² · ${o.toLocaleString("en-IN")} sq ft</p>
      ${a}
      ${e.note?`<p class="spec-note">${Qt(e.note)}</p>`:""}
      <div class="tour-nav">
        <button type="button" data-act="prev" data-tv="tour-prev" ${i<=0?"disabled":""}>Back</button>
        <button type="button" data-act="toggle" data-tv="tour-play">${r?"Pause":"Play"}</button>
        <button type="button" class="cta" data-act="next" data-tv="tour-next">${i>=n-1?"Done":"Next"}</button>
      </div>
    `,t.querySelector("[data-act=prev]").addEventListener("click",()=>this.handlers.onTour?.("prev")),t.querySelector("[data-act=toggle]").addEventListener("click",()=>this.handlers.onTour?.("toggle")),t.querySelector("[data-act=next]").addEventListener("click",()=>this.handlers.onTour?.("next")),t}roomCard(e,t){const n=document.createElement("aside");n.className="tour-card room-info";const i=Math.round(e.area_m2*10.7639),r=Yu(e,this.prefs).map(o=>`<p class="spec-fin"><span>${Qt(o.label)}</span><b>${Qt(o.value)}</b></p>`).join("");return n.innerHTML=`
      ${t?'<button type="button" class="spec-close" aria-label="Close" data-tv="spec-close">×</button>':""}
      <div class="tour-k">${Qt(e.short)}</div>
      <h2>${Qt(e.name)}</h2>
      <p class="spec-area">${e.area_m2.toFixed(1)} m² · ${i.toLocaleString("en-IN")} sq ft</p>
      ${r}
      ${e.note?`<p class="spec-note">${Qt(e.note)}</p>`:""}
    `,n.querySelector(".spec-close")?.addEventListener("click",()=>{this.revealRoomCard=!1,this.render()}),n}specCard(e){const t=document.createElement("aside");t.className="tour-card room-info";const n=Math.round(e.area_m2*10.7639);return t.innerHTML=`
      <button type="button" class="spec-close" aria-label="Close" data-tv="spec-close">×</button>
      <div class="tour-k">${e.kind==="kitchen"?"Kitchen":e.kind==="bath"?"Bathroom":"Outlook"}</div>
      <h2>${Qt(e.title)}</h2>
      <p class="spec-area">${e.area_m2.toFixed(1)} m² · ${n.toLocaleString("en-IN")} sq ft · as labelled on the drawing</p>
      ${this.specFinish(e)}
      ${e.note?`<p class="spec-note">${Qt(e.note)}</p>`:""}
    `,t.querySelector(".spec-close").addEventListener("click",()=>this.closeSpec()),t}specFinish(e){const t={white:"White",walnut:"Walnut",black:"Matte black",granite:"Granite"},n={marble:"Marble",wood:"Wood",tile:"Tile"};return e.kind==="kitchen"?`<p class="spec-fin"><span>Cabinets &amp; counter</span><b>${t[this.prefs.kitchen]}</b></p>`:e.kind==="bath"?`<p class="spec-fin"><span>Floor</span><b>${n[this.prefs.flooring]}</b></p>`:`<p class="spec-fin"><span>From the plan</span><b>${Qt(e.roomName)}</b></p>`}flatSheet(){const e=document.createElement("aside");e.className="sheet"+(this.sheetOpen?" open":""),e.setAttribute("aria-label","Your preferences");const t=document.createElement("button");t.type="button",t.className="sheet-handle",t.setAttribute("aria-label",this.sheetOpen?"Collapse preferences":"Expand preferences"),t.addEventListener("click",()=>this.toggleSheet()),e.appendChild(t);const n=document.createElement("div");n.className="sheet-peek";const i=document.createElement("div");i.className="seg cam-seg";const r=this.view.kind==="flat"&&this.view.cam==="walk";i.innerHTML=`
      <button type="button" data-cam="dollhouse" data-tv="cam-dollhouse" class="${r?"":"on"}" aria-pressed="${!r}">Dollhouse</button>
      <button type="button" data-cam="walk" data-tv="cam-walk" class="${r?"on":""}" aria-pressed="${r}">Walk</button>
    `,i.querySelectorAll("[data-cam]").forEach(l=>l.addEventListener("click",()=>this.handlers.onCam(l.dataset.cam))),n.appendChild(i);const o=document.createElement("button");o.type="button",o.className="sheet-toggle"+(this.sheetOpen?" on":""),o.dataset.tv="finishes",o.setAttribute("aria-expanded",String(this.sheetOpen)),o.textContent=this.sheetOpen?"Close":"Your preferences",o.addEventListener("click",()=>this.toggleSheet()),n.appendChild(o),e.appendChild(n),this.rooms.length&&e.appendChild(this.roomDock());const a=document.createElement("div");if(a.className="sheet-info",this.tour?.active&&this.rooms[this.tour.index])a.appendChild(this.tourCard(this.rooms[this.tour.index]));else if(this.revealRoomCard&&this.currentRoom){const l=this.rooms.find(h=>h.id===this.currentRoom);l&&a.appendChild(this.roomCard(l,!0))}else this.spec&&a.appendChild(this.specCard(this.spec));a.childNodes.length&&e.appendChild(a);const c=document.createElement("div");return c.className="sheet-body",c.appendChild(this.prefsForm()),e.appendChild(c),e.appendChild(this.disclaimerEl()),e}toggleSheet(){this.sheetOpen=!this.sheetOpen,this.render()}prefsForm(){const e=document.createElement("div");e.className="prefs",e.innerHTML=`
      <h2>Your preferences</h2>
      <p class="lede">Changes apply live. These finishes are illustrative.</p>
      <section>
        <h3>Style preset</h3>
        <div class="seg" data-seg="style">
          ${this.segBtn("style","modern","Modern")}
          ${this.segBtn("style","luxury","Luxury")}
          ${this.segBtn("style","minimal","Minimal")}
          ${this.segBtn("style","traditional","Traditional Indian")}
        </div>
      </section>
      <section>
        <h3>Flooring</h3>
        <div class="seg" data-seg="flooring">
          ${this.segBtn("flooring","marble","Marble")}
          ${this.segBtn("flooring","wood","Wood")}
          ${this.segBtn("flooring","tile","Tile")}
        </div>
      </section>
      <section>
        <h3>Wall colour</h3>
        <div class="swatches"></div>
      </section>
      <section>
        <h3>Kitchen finish</h3>
        <div class="seg" data-seg="kitchen">
          ${this.segBtn("kitchen","white","White")}
          ${this.segBtn("kitchen","walnut","Walnut")}
          ${this.segBtn("kitchen","black","Matte black")}
          ${this.segBtn("kitchen","granite","Granite")}
        </div>
      </section>
      <section class="toggle">
        <label for="fur">Furniture</label>
        <input id="fur" type="checkbox" ${this.prefs.furniture?"checked":""} data-tv="fur"/>
      </section>
    `,e.querySelectorAll("[data-style]").forEach(n=>n.addEventListener("click",()=>{const i=n.dataset.style,r=Ps[i];this.prefs={...this.prefs,style:i,flooring:r.flooring,wallColor:r.wall,kitchen:r.kitchen},this.handlers.onPrefs(this.prefs),this.render()})),e.querySelectorAll("[data-flooring]").forEach(n=>n.addEventListener("click",()=>{this.prefs={...this.prefs,flooring:n.dataset.flooring},this.handlers.onPrefs(this.prefs),this.render()})),e.querySelectorAll("[data-kitchen]").forEach(n=>n.addEventListener("click",()=>{this.prefs={...this.prefs,kitchen:n.dataset.kitchen},this.handlers.onPrefs(this.prefs),this.render()}));const t=e.querySelector(".swatches");for(const n of I_){const i=document.createElement("button");i.className="swatch"+(this.prefs.wallColor.toLowerCase()===n.color.toLowerCase()?" on":""),i.style.background=n.color,i.title=n.name,i.type="button",i.dataset.tv=`wall-${n.id}`,i.addEventListener("click",()=>{this.prefs={...this.prefs,wallColor:n.color},this.handlers.onPrefs(this.prefs),this.render()}),t.appendChild(i)}return e.querySelector("#fur").addEventListener("change",n=>{this.prefs={...this.prefs,furniture:n.target.checked},this.handlers.onPrefs(this.prefs)}),e}segBtn(e,t,n){const i=e==="style"&&this.prefs.style===t||e==="flooring"&&this.prefs.flooring===t||e==="kitchen"&&this.prefs.kitchen===t;return`<button type="button" data-${e}="${t}" data-tv="${e}-${t}" class="${i?"on":""}" aria-pressed="${i}">${n}</button>`}zoomStack(){const e=document.createElement("div");return e.className="zoom-stack",e.innerHTML=`
      <button type="button" class="icon-btn" data-z="in" aria-label="Zoom in" data-tv="zoom-in">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M12 5v14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
        </svg>
      </button>
      <button type="button" class="icon-btn" data-z="out" aria-label="Zoom out" data-tv="zoom-out">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
        </svg>
      </button>
    `,e.querySelector("[data-z=in]").addEventListener("click",()=>this.handlers.onZoom?.(-1)),e.querySelector("[data-z=out]").addEventListener("click",()=>this.handlers.onZoom?.(1)),this.view.kind==="flat"&&this.view.cam==="walk"&&(e.hidden=!0),e}hintText(){return this.tv?this.view.kind==="tower"?"<b>TV remote</b> · ↑ ↓ a floor · <kbd>Enter</kbd> open · <kbd>Esc</kbd> back":this.view.kind==="floor"?"<b>TV remote</b> · ← → a flat · <kbd>Enter</kbd> open · <kbd>Esc</kbd> back":this.view.kind==="flat"&&this.view.cam==="walk"?"<b>TV remote</b> · ↑ walk · ↓ back · ← → rooms · <kbd>Enter</kbd> dollhouse · <kbd>Esc</kbd> back":"<b>TV remote</b> · ← → rooms · <kbd>Enter</kbd> walk through · <kbd>Esc</kbd> back":this.view.kind==="tower"?"Drag to orbit. Tap a floor to go in.":this.view.kind==="floor"?"Tap a flat to open it. Drag to orbit.":this.view.kind==="flat"&&this.view.cam==="walk"?"Tap a room to fly there. Use the joystick to walk, drag to look.":"Drag to orbit. Tap a room to walk in, or Guided tour to play through each one."}dockHint(e){const t=document.createElement("p");return t.className="dock-hint",t.innerHTML=e,t}disclaimerEl(){const e=document.createElement("p");return e.className="disclaimer",e.textContent="Illustrative visualisation, not the finished unit. Sample tower for Lead Setu — not a real project.",e}planForUnit(e){return e.endsWith("PH")?this.plans.penthouse:e.endsWith("C")?this.plans["3bhk"]:this.plans["2bhk"]}openForm(){this.currentUnit=this.unitOfInterest(),this.formOpen=!0,this.menuOpen=!1,this.render(),this.root.querySelector("#lead-name")?.focus()}closeForm(){this.formOpen=!1,this.render()}unitOfInterest(){const e=this.view;if(e.kind==="flat"){const t=this.planForUnit(e.unitId);return`${e.unitId} ${t?.name??""}`.trim()}return e.kind==="floor"?ja(e.floor):"Sample Tower (floor not chosen)"}form(){const e=document.createElement("div");return e.className="modal-bg",e.innerHTML=`
      <form class="modal" data-tv-root="form">
        <h2>Book a site visit</h2>
        <p>Leave your name and phone. In the product, this creates a lead in Lead Setu. This demo stores it only in your browser.</p>
        <label for="lead-name">Name</label>
        <input id="lead-name" name="name" required autocomplete="name" data-tv="name"/>
        <label for="lead-phone">Phone</label>
        <input id="lead-phone" name="phone" required inputmode="tel" autocomplete="tel" data-tv="phone"/>
        <label for="lead-unit">Unit of interest</label>
        <input id="lead-unit" name="unit" value="${Qt(this.currentUnit)}" data-tv="unit"/>
        <div class="row">
          <button type="button" class="ghost" data-action="cancel">Cancel</button>
          <button type="submit" class="cta" data-tv="submit">Send request</button>
        </div>
        <p class="hint-api">TODO: POST this payload to the Lead Setu API (name, phone, project, unit, session id) and hand the lead to the existing follow-up pipeline.</p>
      </form>
    `,e.addEventListener("click",t=>{t.target===e&&this.closeForm()}),e.querySelector("[data-action=cancel]").addEventListener("click",()=>this.closeForm()),e.querySelector("form").addEventListener("submit",t=>{t.preventDefault();const n=new FormData(t.target),i=String(n.get("name")||"").trim(),r=String(n.get("phone")||"").trim(),o=String(n.get("unit")||"").trim();!i||!r||(this.closeForm(),this.handlers.onBook({name:i,phone:r,unit:o}))}),e}}function Qt(s){return s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function sd(s){const e="leadsetu-3d-demo-leads",t=JSON.parse(localStorage.getItem(e)||"[]"),n={...s,project:"Lead Setu Sample Tower",at:new Date().toISOString()};return t.push(n),localStorage.setItem(e,JSON.stringify(t)),console.info("[Lead Setu demo] site-visit request (local only)",n),n}const rd=5,od=10;function Sw(s,e,t,n){e.touches.ONE=Gn.ROTATE,e.touches.TWO=Gn.DOLLY_PAN;let i="none";const r=new Map;let o={x:0,y:0,dist:0,midX:0,midY:0},a={x:0,y:0,dist:0,midX:0,midY:0};const c=new Jc,l=new I;function h(){l.copy(t.position).sub(e.target),c.setFromVector3(l)}function u(){c.makeSafe(),c.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,c.phi)),c.radius=Math.max(e.minDistance,Math.min(e.maxDistance,c.radius)),l.setFromSpherical(c),t.position.copy(e.target).add(l),t.lookAt(e.target),e.update()}const d=new I;function f(v,x,E){const T=s.getBoundingClientRect(),S=(v-T.left)/Math.max(1,T.width)*2-1,A=-((x-T.top)/Math.max(1,T.height))*2+1;d.set(S,A,1).unproject(t).sub(t.position).normalize();const M=t.position.distanceTo(e.target),y=Math.max(e.minDistance,Math.min(e.maxDistance,M*E)),C=M-y;t.position.addScaledVector(d,C),t.updateMatrixWorld();const D=new I(0,0,-1).transformDirection(t.matrix);e.target.copy(t.position).addScaledVector(D,y),t.lookAt(e.target),e.update()}function g(v){n.isWalk()||f(window.innerWidth/2,window.innerHeight/2,v<0?.82:1.22)}function b(){const v=[...r.values()];if(v.length<2)return{dist:0,midX:0,midY:0};const x=v[1].x-v[0].x,E=v[1].y-v[0].y;return{dist:Math.hypot(x,E),midX:(v[0].x+v[1].x)/2,midY:(v[0].y+v[1].y)/2}}const m=v=>{if(n.isUiTarget(v.target)){r.size===0&&(i="blocked");return}if(v.pointerType!=="mouse"){if(r.set(v.pointerId,{x:v.clientX,y:v.clientY}),r.size===1)i="pending",o={x:v.clientX,y:v.clientY,dist:0,midX:v.clientX,midY:v.clientY},a={...o},e.enabled=!1;else if(r.size===2){const x=b();o={x:x.midX,y:x.midY,dist:x.dist,midX:x.midX,midY:x.midY},a={...o},i="pending",e.enabled=!1}}},p=v=>{if(!r.has(v.pointerId)||i==="blocked")return;if(r.set(v.pointerId,{x:v.clientX,y:v.clientY}),n.isWalk()){if(r.size===1){const S=v.clientX-a.x,A=v.clientY-a.y,M=Math.hypot(v.clientX-o.x,v.clientY-o.y);i==="pending"&&M>rd&&(i="look",n.walker.cancelWalkTo()),i==="look"&&n.walker.look(S,A),a={...a,x:v.clientX,y:v.clientY}}return}if(r.size>=2){const S=b(),A=Math.abs(S.dist-o.dist),M=Math.hypot(S.midX-o.midX,S.midY-o.midY);if(i==="pending"&&(A>od||M>od)&&(i=A>=M*.85?"pinch":"pan",h()),i==="pinch"){if(a.dist>1&&S.dist>1){const y=a.dist/S.dist;f(S.midX,S.midY,y)}}else if(i==="pan"){const y=S.midX-a.midX,C=S.midY-a.midY,L=t.position.distanceTo(e.target)*.0022,F=new I,O=new I,U=new I;t.matrix.extractBasis(F,O,U),e.target.addScaledVector(F,-y*L),e.target.addScaledVector(O,C*L),u()}a={x:S.midX,y:S.midY,dist:S.dist,midX:S.midX,midY:S.midY};return}const x=v.clientX-a.x,E=v.clientY-a.y,T=Math.hypot(v.clientX-o.x,v.clientY-o.y);i==="pending"&&T>rd&&(i="orbit",h()),i==="orbit"&&(c.theta-=x*.0055,c.phi-=E*.0055,u()),a={...a,x:v.clientX,y:v.clientY}},_=v=>{if(!(v.pointerType==="mouse"&&i!=="blocked")){if(r.delete(v.pointerId),r.size===0)i="none",n.isWalk()||(e.enabled=!0);else if(r.size===1){const x=[...r.values()][0];o={x:x.x,y:x.y,dist:0,midX:x.x,midY:x.y},a={...o},i="pending"}}};return s.addEventListener("pointerdown",m,{capture:!0}),window.addEventListener("pointermove",p),window.addEventListener("pointerup",_),window.addEventListener("pointercancel",_),{zoom:g,dispose(){s.removeEventListener("pointerdown",m,{capture:!0}),window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",_)}}}function ad(s){return s instanceof Element?!!s.closest("#ui, .hotspot-lab, .unit-card, .unit-chip, button, input, a, .sheet, .dock, .topbar, .modal-bg, .menu-pop, .tour-card, .spec-card, .joy-wrap, .zoom-stack"):!1}const Tw={style:"modern",flooring:Ps.modern.flooring,wallColor:Ps.modern.wall,kitchen:Ps.modern.kitchen,furniture:!0},Ew=4200;async function Aw(){const s="./",[e,t,n]=await Promise.all([fetch(`${s}data/2bhk.json`).then(i=>i.json()),fetch(`${s}data/3bhk.json`).then(i=>i.json()),fetch(`${s}data/penthouse.json`).then(i=>i.json())]);return{"2bhk":e,"3bhk":t,penthouse:n}}class Rw{engine;mats;catalog=null;plans;tower;walker;hud;gestures;tv;prefs={...Tw};view={kind:"tower",hoverFloor:null};interiors=[];bakedUnits=[];unitLabels=[];world=new Mt;interiorRoot=new Mt;ray=new _u;pointer=new se;dragging=!1;downXY={x:0,y:0};roomLights=[];time="morning";flying=!1;roomStops=[];currentRoom=null;tour=null;tourTimer=null;introPlayed=!1;walkMarker=null;unitOutlines=new Map;constructor(){const e=new URLSearchParams(location.search);this.tv=e.get("tv")==="1"||e.get("tv")==="true"}async start(){const e=document.getElementById("scene"),t=document.getElementById("labels"),n=document.getElementById("ui");lr(.05),this.engine=w_(e,t),this.mats=await L_(this.engine.renderer,u=>lr(.05+u*.55));const i=By(this.engine.renderer,u=>lr(.6+u*.2)),r=E_(this.engine,"./hdris/studio_small_08_1k.hdr"),o=A_(this.engine,"./hdris/kloofendal_43d_clear_puresky_1k.hdr"),a=R_(this.engine,"./hdris/qwantani_sunset_puresky_1k.hdr"),c=C_(this.engine,"./hdris/kloppenheim_02_puresky_1k.hdr");this.plans=await Aw(),this.catalog=await i,await Promise.all([r,o,a,c]),lr(.88),this.engine.scene.add(this.world),this.engine.scene.add(this.interiorRoot),this.tower=Sy(this.mats,{mobile:this.engine.mobile}),this.tower.setEnv(this.engine.cityEnv,this.engine.cityEnvNight),await this.tower.loadTrees(),this.world.add(this.tower.group),this.walkMarker=Iw(),this.engine.scene.add(this.walkMarker),this.walker=new yw(e),this.walker.tv=this.tv,this.gestures=Sw(e,this.engine.orbit,this.engine.camera,{isWalk:()=>this.view.kind==="flat"&&this.view.cam==="walk"&&!this.flying,walker:this.walker,isUiTarget:ad}),this.hud=new ww(n,this.prefs,this.plans,this.tv,{onGotoTower:()=>this.showTower(),onGotoFloor:u=>this.showFloor(u),onGotoUnit:(u,d)=>this.showFlat(u,d,"dollhouse"),onCam:u=>{this.view.kind==="flat"&&this.showFlat(this.view.floor,this.view.unitId,u)},onPrefs:u=>this.setPrefs(u),onBook:u=>{sd(u),this.hud.toast("Request saved on this device. A sales executive would follow up in Lead Setu.")},onTime:u=>this.setTime(u),onRoom:u=>{this.stopTour(!1),this.goRoom(u)},onTour:u=>this.handleTour(u),onZoom:u=>this.gestures.zoom(u)}),this.bindPointer(e),this.bindKeys(),n.addEventListener("pointerdown",u=>{u.target?.closest("input, select, textarea, .sheet, .dock, .prefs, .joy-wrap, .zoom-stack, button, a, .unit-card, .hotspot-lab")&&u.stopPropagation()},!0),this.showTower(!1),this.hud.setView(this.view);const l=()=>{const u=document.getElementById("joy-base"),d=document.getElementById("joy-knob");u&&d&&!u.dataset.ready&&(u.dataset.ready="1",Mw(u,d,this.walker))};new MutationObserver(l).observe(n,{childList:!0,subtree:!0}),l(),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch"),Dw(),lr(1),Lw(),this.engine.start(u=>this.tick(u),()=>this.afterRender()),this.exposeApi(),this.introPlayed||(this.introPlayed=!0,this.playTowerIntro())}setTime(e){this.time=e,this.hud.setTime(e),this.applySceneTime()}applySceneTime(){T_(this.engine,this.time),this.tower.setTime(this.time);for(const i of this.interiors)i.setTime(this.time);for(const i of this.bakedUnits)i.setTime(this.time==="night");const e=this.time==="night",t=this.time==="golden",n=this.view.kind==="flat"&&this.view.cam==="walk";for(const i of this.roomLights)i instanceof Kc?e?(i.color.set("#3a4c78"),i.groundColor.set("#1a1520"),i.intensity=.4):t?(i.color.set("#ffd9a8"),i.groundColor.set("#8a5a38"),i.intensity=n?.5:.35):(i.color.set("#f4efe6"),i.groundColor.set("#8a7a68"),i.intensity=n?.28:.4):i instanceof Lr&&(i.intensity=e?.18:t?n?.28:.55:n?.2:.75,i.color.set(e?"#a0b4e0":t?"#ffb060":"#fff4df"))}tick(e){this.tower.tick(e),this.updateWalkMarker(),!this.flying&&(this.view.kind==="flat"&&this.view.cam==="walk"?(this.engine.orbit.enabled=!1,this.walker.update(e),this.walker.apply(this.engine.camera)):this.flying||(this.engine.orbit.enabled=!0))}afterRender(){this.syncHotspotLabels()}updateWalkMarker(){const e=this.walkMarker;if(!e)return;const t=this.walker.getWalkTarget(),n=this.view.kind==="flat"&&this.view.cam==="walk"&&!!t;if(e.visible=n,!n||!t)return;e.position.set(t.x,.04,t.z);const i=1+.12*Math.sin(performance.now()/180);e.scale.setScalar(i)}async playTowerIntro(){const[e]=Xa();await rr(this.engine.camera,this.engine.orbit,new I(44,11,-30),new I(e,8,6),2.4)}syncHotspotLabels(){const e=this.interiors;if(!e.length)return;const t=document.body.classList.contains("compact"),n=this.view.kind==="flat"&&this.view.cam==="walk",i=this.engine.camera,r=window.innerWidth,o=window.innerHeight,a=this.chromeRects();for(const c of e)for(const l of c.hotspots){l.mesh&&(l.mesh.visible=!n);const h=l.labelEl;if(!h)continue;if(t||n){h.classList.add("is-hidden");continue}const u=l.position;if(u.clone().applyMatrix4(i.matrixWorldInverse).z>-.15){h.classList.add("is-hidden");continue}const f=u.clone().project(i);if(f.z<-1||f.z>1){h.classList.add("is-hidden");continue}let g=(f.x*.5+.5)*r,b=(-f.y*.5+.5)*o;const m=10;if(g<-30||b<-20||g>r+30||b>o+20){h.classList.add("is-hidden");continue}const _=u.clone().sub(i.position),v=_.length();_.multiplyScalar(1/(v||1)),this.ray.set(i.position,_);const x=[];if(c.group.traverse(y=>{y instanceof ae&&y.name!=="hotspot"&&!y.name.startsWith("studio")&&x.push(y)}),this.ray.intersectObjects(x,!0).some(y=>y.distance<v-.45&&!Cw(y.object))){h.classList.add("is-hidden");continue}const S=h.offsetWidth||80,A=h.offsetHeight||22;g=Math.max(m+S/2,Math.min(r-m-S/2,g)),b=Math.max(m+A/2,Math.min(o-m-A/2,b));const M={x:g-S/2,y:b-A/2,w:S,h:A};if(a.some(y=>Pw(M,y))){h.classList.add("is-hidden");continue}h.classList.remove("is-hidden")}}chromeRects(){return[...this.hud.root.querySelectorAll(".topbar, .sheet, .room-dock, .dock, .tour-card, .menu-pop, .modal-bg, .zoom-stack, .joy-wrap")].flatMap(t=>{const n=getComputedStyle(t);if(n.display==="none"||n.visibility==="hidden")return[];const i=t.getBoundingClientRect();return i.width<4||i.height<4?[]:[{x:i.x,y:i.y,w:i.width,h:i.height}]})}clearInteriors(){for(const e of this.interiors)e.dispose();this.interiors=[];for(const e of this.bakedUnits)e.dispose();this.bakedUnits=[];for(const e of this.unitLabels)e.element?.remove(),e.removeFromParent();this.unitLabels=[];for(const e of this.roomLights)e.removeFromParent();this.roomLights=[],this.interiorRoot.clear()}setPrefs(e){this.prefs=e,this.hud.setPrefs(e);for(const t of this.interiors)t.applyPrefs(e);if(this.view.kind==="flat"){const{floor:t,unitId:n,cam:i}=this.view,r=this.currentRoom;return this.showFlat(t,n,i,!0).then(()=>{r&&this.hud.setCurrentRoom(r)})}else this.view.kind==="floor"&&this.showFloor(this.view.floor,!0)}async showTower(e=!0){this.stopTour(!0),this.walker.enabled=!1,Eo(),document.pointerLockElement&&document.exitPointerLock(),this.clearInteriors(),this.roomStops=[],this.currentRoom=null,this.world.visible=!0,this.tower.setIsolated(null),this.tower.highlight(null),this.hud.spec=null,this.view={kind:"tower",hoverFloor:null},this.engine.setHudLift(0),this.engine.setWalkFov(null),this.engine.aimWalkLighting(null,null,0),this.hud.setView(this.view),this.applySceneTime(),this.engine.setOutlined([]);const[t]=Xa(),n=new I(44,11,-30),i=new I(t,8,6);e?await rr(this.engine.camera,this.engine.orbit,n,i,.55):(this.engine.camera.position.set(62,5,-52),this.engine.orbit.target.set(t,5,4),this.engine.orbit.update())}async showFloor(e,t=!1){this.stopTour(!0),this.walker.enabled=!1,Eo(),document.pointerLockElement&&document.exitPointerLock(),this.clearInteriors(),this.roomStops=[],this.currentRoom=null,this.world.visible=!0,this.tower.setIsolated(e),this.tower.highlight(e),this.hud.spec=null,this.view={kind:"floor",floor:e,hoverUnit:null},this.hud.setView(this.view),this.engine.setHudLift(0),this.engine.setWalkFov(null),this.engine.aimWalkLighting(null,null,0),this.applySceneTime();const n=Nr(e),i=No(e);for(const a of i){const c=this.plans[a.planId],l=Qu(c,this.prefs,this.mats,{transform:a.transform,showCeiling:!1,y:n,cutaway:!0,catalog:this.catalog,mobile:this.engine.mobile});l.group.userData.unitId=gr(e,a.suffix),l.group.userData.slot=a,this.interiorRoot.add(l.group),this.interiors.push(l);const h=document.createElement("button");h.type="button",h.className="unit-card",h.innerHTML=`<div class="u-id">${gr(e,a.suffix)}</div>
        <div class="u-meta">${a.typeLabel}<br>${uf(c)}</div>`,h.addEventListener("click",b=>{b.stopPropagation(),this.showFlat(e,gr(e,a.suffix),"dollhouse")});const u=new Bs(h),d=a.transform,[f,g]=[d.ox+d.width/2,d.oz+d.depth/2];u.position.set(f,n+2.2,g),this.interiorRoot.add(u),this.unitLabels.push(u)}const r=document.createElement("div");r.className="unit-card",r.style.pointerEvents="none",r.innerHTML='<div class="u-meta">Lifts &amp; stairs</div>';const o=new Bs(r);if(o.position.set(Vi.x+Vi.w/2,n+1.6,Vi.z+Vi.d/2),this.interiorRoot.add(o),this.unitLabels.push(o),this.installUnitOutlines(n),!t){const[a,c]=Xa();await rr(this.engine.camera,this.engine.orbit,new I(a+2.2,n+18,c+6),new I(a,n+1.2,c),.5)}}installUnitOutlines(e){this.unitOutlines.clear();for(const t of this.interiors){const n=t.group.userData.unitId;if(!n)continue;const i=new mn().setFromObject(t.group),r=i.getSize(new I),o=i.getCenter(new I),a=new Ct({color:"#f0d48a",side:Xt,transparent:!0,opacity:.8,depthWrite:!1}),c=new ae(new ve(Math.max(.4,r.x)*1.05,Math.max(.8,r.y)*1.08,Math.max(.4,r.z)*1.05),a);c.position.copy(o),c.name="unit-outline",c.visible=!1,c.userData.unitId=n,t.group.add(c),this.unitOutlines.set(n,c)}}async showFlat(e,t,n,i=!1,r,o={}){document.pointerLockElement&&n!=="walk"&&document.exitPointerLock();const a=this.walker.position.clone(),c=this.walker.yaw,l=this.hud.spec?.id??null,h=this.currentRoom;this.clearInteriors(),this.world.visible=!1,this.tower.setIsolated(null),this.tower.highlight(null),this.view={kind:"flat",floor:e,unitId:t,cam:n},this.hud.setView(this.view);const u=t.replace(/^\d+/,""),d=No(e),f=d.find(x=>x.suffix===u)??d[0],g=this.plans[f.planId],b=Qu(g,this.prefs,this.mats,{transform:f.transform,showCeiling:n==="walk",y:0,cutaway:n==="dollhouse",hotspots:!0,catalog:this.catalog,mobile:this.engine.mobile});if(this.interiorRoot.add(b.group),this.interiors.push(b),this.roomStops=b.rooms,n==="dollhouse"){const x=new ae(new qo(48,48),new ot({color:this.time==="night"?"#1a1e28":this.time==="golden"?"#c9a078":"#d8d2c6",roughness:.95,metalness:0}));x.rotation.x=-Math.PI/2,x.position.y=-.04,x.receiveShadow=!0,x.name="studio-ground",this.interiorRoot.add(x)}const m=new Kc("#f4efe6","#8a7a68",n==="walk"?.28:.4);if(this.interiorRoot.add(m),this.roomLights.push(m),n==="walk"&&uw(g.id??"2bhk",this.prefs.style,this.prefs.wallColor))try{const x=await dw("2bhk",this.prefs.style,f.transform,0);x&&(xw(b.group),this.interiorRoot.add(x.group),x.setWallColor(this.prefs.wallColor),await Promise.resolve(x.setTime(this.time==="night")),this.bakedUnits.push(x))}catch(x){console.warn("baked unit failed, falling back to procedural",x)}if(n==="dollhouse"){const x=new Lr("#fff4df",.75);x.position.set(8,12,6),x.castShadow=!this.engine.mobile,this.interiorRoot.add(x),this.roomLights.push(x)}if(this.applySceneTime(),n==="walk"){const x=b.lighting;this.engine.aimWalkLighting(x.center,x.incoming,x.radius)}else this.engine.aimWalkLighting(null,null,0);for(const x of b.hotspots)x.labelEl?.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),this.openHotspot(x)});if(l){const x=b.hotspots.find(E=>E.id===l);x?this.hud.showSpec(x):this.hud.spec=null}this.hud.setRooms(this.roomStops,h);const p=f.transform,_=p.ox+p.width/2,v=p.oz+p.depth/2;if(n==="walk"){if(this.walker.setCollisions(b.collisions,b.worldRooms),o.skipSpawn)this.walker.enabled=!1;else{let x=r?.x??b.spawn.x,E=r?.z??b.spawn.z,T=r?.yaw??b.spawn.yaw,S=r?.yaw!==void 0?-.18+za():(b.spawn.pitch??-.18)+za();i&&!r&&a.y>.5&&this.walker.isWalkable(a.x,a.z)&&(x=a.x,E=a.z,T=c,S=this.walker.pitch),this.walker.spawn(x,1.6,E,T,S),this.walker.apply(this.engine.camera),this.walker.enabled=!0}if(this.engine.orbit.enabled=!1,!this.currentRoom&&!o.skipSpawn){const x=this.roomStops.find(E=>E.type==="living")??this.roomStops.find(E=>E.type==="foyer")??this.roomStops[0];x&&(this.currentRoom=x.id,this.hud.setCurrentRoom(x.id,!1))}}else this.walker.enabled=!1,this.engine.orbit.enabled=!0,i||await rr(this.engine.camera,this.engine.orbit,new I(_+8,g.wallHeight+7,v+9),new I(_,1,v),.5);if(this.engine.setHudLift(n==="walk"?.08:0),n==="walk"){const x=this.roomStops.find(E=>E.id===this.currentRoom)??this.roomStops.find(E=>E.type==="living")??this.roomStops[0];this.engine.setWalkFov(x?.fov??70)}else this.engine.setWalkFov(null)}cameraYaw(){const e=new I;return this.engine.camera.getWorldDirection(e),Math.atan2(-e.x,-e.z)}cameraPitch(){return new Fn().setFromQuaternion(this.engine.camera.quaternion,"YXZ").x}async goRoom(e){const t=this.roomStops.find(n=>n.id===e);if(!(!t||this.view.kind!=="flat")){if(this.hud.spec=null,this.currentRoom=e,this.walker.skipLockOnce=!0,document.pointerLockElement&&document.exitPointerLock(),this.view.cam!=="walk"){const{floor:n,unitId:i}=this.view;await this.showFlat(n,i,"walk",!0,void 0,{skipSpawn:!0})}await this.flyToStop(t),this.hud.setCurrentRoom(e)}}async flyToStop(e){if(this.view.kind!=="flat")return;this.engine.setWalkFov(e.fov??70),this.engine.setHudLift(.08),Eo(),this.flying=!0,this.walker.enabled=!1,this.engine.orbit.enabled=!1;const t=this.engine.camera.position.clone(),n=this.cameraYaw(),i=this.cameraPitch();try{const r=e.pitch+za();await S_(this.engine.camera,t,n,i,e.position,e.yaw,r,.5),this.walker.spawn(e.walkX,1.6,e.walkZ,e.yaw,r),this.walker.apply(this.engine.camera),this.walker.enabled=!0}finally{this.flying=!1,this.engine.orbit.enabled=!1}}handleTour(e){e==="start"?this.startTour():e==="stop"?this.stopTour(!1):e==="next"?this.tourStep(1):e==="prev"?this.tourStep(-1):e==="toggle"&&this.toggleTourPlay()}async startTour(){!this.roomStops.length||this.view.kind!=="flat"||(this.tour={active:!0,playing:!0,index:0},this.hud.setTour(this.tour),await this.goRoom(this.roomStops[0].id),this.scheduleTour())}stopTour(e=!1){this.clearTourTimer();const t=this.tour;this.tour=null,t&&!e&&this.hud.setTour(null)}toggleTourPlay(){this.tour&&(this.tour={...this.tour,playing:!this.tour.playing},this.hud.setTour(this.tour),this.tour.playing?this.scheduleTour():this.clearTourTimer())}async tourStep(e){if(!this.roomStops.length)return;this.tour||(this.tour={active:!0,playing:!1,index:0});const t=this.tour.index+e;if(!(t<0)){if(t>=this.roomStops.length){this.stopTour(!1);return}this.tour={...this.tour,index:t},this.hud.setTour(this.tour),await this.goRoom(this.roomStops[t].id),this.tour?.playing&&this.scheduleTour()}}scheduleTour(){this.clearTourTimer(),this.tour?.playing&&(this.tourTimer=window.setTimeout(()=>{this.tourStep(1)},Ew))}clearTourTimer(){this.tourTimer!==null&&(clearTimeout(this.tourTimer),this.tourTimer=null)}async openHotspot(e){this.walker.skipLockOnce=!0,document.pointerLockElement&&document.exitPointerLock(),this.hud.showSpec(e);const t=this.roomStops.find(r=>r.name===e.title||r.id===e.id.replace(/^(kitchen|bath|view)-/,"")||e.kind==="kitchen"&&r.type==="kitchen"||e.kind==="bath"&&r.type==="bathroom"||e.kind==="view"&&(r.type==="balcony"||r.type==="terrace"));if(t){this.stopTour(!1),await this.goRoom(t.id);return}if(this.flying)return;this.flying=!0;const n=e.cameraPos.clone(),i=e.lookAt.clone();try{const r=this.view.kind==="flat"&&this.view.cam==="walk";if(r&&(this.walker.enabled=!1),await rr(this.engine.camera,this.engine.orbit,n,i,.5),r){this.engine.orbit.enabled=!1;const o=Math.atan2(-(i.x-n.x),-(i.z-n.z)),a=this.walker.isWalkable(n.x,n.z);this.walker.spawn(a?n.x:e.position.x,1.6,a?n.z:e.position.z,o),this.walker.apply(this.engine.camera),this.walker.enabled=!0}}finally{this.flying=!1}}bindPointer(e){const t=r=>{this.dragging=!1,this.downXY={x:r.clientX,y:r.clientY}},n=r=>{(r.buttons||r.pressure)&&Math.hypot(r.clientX-this.downXY.x,r.clientY-this.downXY.y)>5&&(this.dragging=!0),this.pointer.x=r.clientX/window.innerWidth*2-1,this.pointer.y=-(r.clientY/window.innerHeight)*2+1,this.view.kind==="tower"&&this.hoverTower(),this.view.kind==="floor"&&this.hoverFloorUnits()},i=r=>{this.dragging||ad(r.target)||(this.pointer.x=r.clientX/window.innerWidth*2-1,this.pointer.y=-(r.clientY/window.innerHeight)*2+1,this.clickScene())};e.addEventListener("pointerdown",t),window.addEventListener("pointermove",n),e.addEventListener("pointerup",i)}hoverTower(){if(this.view.kind!=="tower")return;this.ray.setFromCamera(this.pointer,this.engine.camera);const e=this.ray.intersectObjects(this.tower.floorHits,!1),t=e.length?e[0].object.userData.floor:null;t!==this.view.hoverFloor&&(this.tower.highlight(t),this.hud.setHoverFloor(t),this.engine.setOutlined(this.tower.outlined()))}hoverFloorUnits(){if(this.view.kind!=="floor")return;this.ray.setFromCamera(this.pointer,this.engine.camera);const e=[];for(const i of this.interiors)i.group.traverse(r=>{r instanceof ae&&r.name!=="unit-outline"&&e.push(r)});const t=this.ray.intersectObjects(e,!1);let n=null;if(t.length){let i=t[0].object;for(;i;){if(i.userData.unitId){n=i.userData.unitId;break}i=i.parent}}if(this.view.kind==="floor"&&n!==this.view.hoverUnit){this.view={...this.view,hoverUnit:n},this.tower.highlightUnit(n);const i=[];for(const[r,o]of this.unitOutlines)o.visible=r===n,r===n&&i.push(o.parent??o);this.engine.setOutlined(i)}}clickScene(){if(this.ray.setFromCamera(this.pointer,this.engine.camera),this.view.kind==="tower"){const e=this.ray.intersectObjects(this.tower.floorHits,!1);e.length&&this.showFloor(e[0].object.userData.floor);return}if(this.view.kind==="floor"){const e=this.interiors.flatMap(n=>{const i=[];return n.group.traverse(r=>{r instanceof ae&&i.push(r)}),i}),t=this.ray.intersectObjects(e,!1);if(t.length){let n=t[0].object;for(;n;){if(n.userData.unitId){this.showFlat(this.view.floor,n.userData.unitId,"dollhouse");return}n=n.parent}}return}if(this.view.kind==="flat"){if(document.pointerLockElement)return;const e=this.interiors.flatMap(o=>o.hotspots.map(a=>a.mesh)),t=this.ray.intersectObjects(e,!0);if(t.length){let o=t[0].object;for(;o;){const a=o.userData.hotspot;if(a){this.walker.skipLockOnce=!0,this.openHotspot(a);return}o=o.parent}}const n=this.interiors.flatMap(o=>o.floorMeshes),i=this.ray.intersectObjects(n,!1);if(!i.length)return;const r=i[0].point;if(this.walker.skipLockOnce=!0,this.view.cam!=="walk"){this.showFlat(this.view.floor,this.view.unitId,"walk",!1,{x:r.x,z:r.z});return}if(!this.walker.walkTo(r.x,r.z)){const o=this.engine.camera.position;this.walker.walkTo(r.x+(o.x-r.x)*.1,r.z+(o.z-r.z)*.1)}}}bindKeys(){window.addEventListener("keydown",e=>{if(e.code==="Escape"){if(document.pointerLockElement){document.exitPointerLock();return}this.hud.goBack();return}if(!this.tv)return;const t=this.view;if(t.kind==="flat"){if(e.code==="ArrowLeft"||e.code==="ArrowRight"){if(!this.roomStops.length)return;let n=this.roomStops.findIndex(i=>i.id===this.currentRoom);n<0&&(n=0),n+=e.code==="ArrowRight"?1:-1,n=Math.max(0,Math.min(this.roomStops.length-1,n)),this.stopTour(!1),this.goRoom(this.roomStops[n].id),e.preventDefault();return}if(t.cam==="walk"&&(e.code==="Enter"||e.code==="NumpadEnter")){this.showFlat(t.floor,t.unitId,"dollhouse"),e.preventDefault();return}t.cam==="dollhouse"&&(e.code==="Enter"||e.code==="NumpadEnter")&&(this.showFlat(t.floor,t.unitId,"walk"),e.preventDefault());return}if(t.kind==="tower"){const n=t.hoverFloor??1;if(e.code==="ArrowUp"){const i=Math.min(Wi,n+1);this.tower.highlight(i),this.hud.setHoverFloor(i),e.preventDefault()}if(e.code==="ArrowDown"){const i=Math.max(1,n-1);this.tower.highlight(i),this.hud.setHoverFloor(i),e.preventDefault()}(e.code==="Enter"||e.code==="NumpadEnter")&&(this.showFloor(t.hoverFloor??1),e.preventDefault())}else if(t.kind==="floor"){const i=No(t.floor).map(o=>gr(t.floor,o.suffix));let r=Math.max(0,i.indexOf(t.hoverUnit??i[0]));(e.code==="ArrowRight"||e.code==="ArrowLeft")&&(r=(r+(e.code==="ArrowRight"?1:i.length-1))%i.length,this.view={...t,hoverUnit:i[r]},this.hud.setView(this.view),document.querySelectorAll(".unit-card, .unit-chip").forEach(o=>{o.classList.toggle("hov",o.textContent?.includes(i[r])??!1)}),e.preventDefault()),(e.code==="Enter"||e.code==="NumpadEnter")&&(this.showFlat(t.floor,t.hoverUnit??i[0],"dollhouse"),e.preventDefault())}})}exposeApi(){const e={ready:!0,view:()=>this.view,gotoTower:()=>this.showTower(),highlightFloor:t=>{this.tower.highlight(t),this.engine.setOutlined(this.tower.outlined()),this.hud.setHoverFloor(t)},setCamPose:(t,n)=>{Eo(),this.engine.camera.position.set(t[0],t[1],t[2]),this.engine.orbit.target.set(n[0],n[1],n[2]),this.engine.orbit.update()},gotoFloor:t=>this.showFloor(t),gotoFlat:(t,n,i="dollhouse")=>this.showFlat(t,n,i),setCam:t=>{if(this.view.kind==="flat")return this.showFlat(this.view.floor,this.view.unitId,t)},setTime:t=>this.setTime(t),setPrefs:t=>this.setPrefs({...this.prefs,...t}),setSheet:t=>this.hud.setSheet(t),rooms:()=>this.roomStops,goRoom:t=>this.goRoom(t),startTour:()=>this.startTour(),stopTour:()=>this.stopTour(!1),tourStep:t=>this.tourStep(t),setTourPlaying:t=>{this.tour&&(this.tour={...this.tour,playing:t},this.hud.setTour(this.tour),t?this.scheduleTour():this.clearTourTimer())},openForm:()=>this.hud.openForm(),closeForm:()=>this.hud.closeForm(),submitLead:(t,n)=>{const i=this.hud.unitOfInterest();sd({name:t,phone:n,unit:i}),this.hud.closeForm(),this.hud.toast("Request saved on this device. A sales executive would follow up in Lead Setu.")},toast:t=>this.hud.toast(t),currentRoom:()=>this.currentRoom,tour:()=>this.tour,prefs:()=>this.prefs,fps:()=>this.engine.fps(),ao:()=>({enabled:this.engine.aoEnabled(),highTier:this.engine.highTier,software:this.engine.softwareGpu}),lighting:()=>this.interiors[0]?.lighting??null,camInfo:()=>({pos:this.engine.camera.position.toArray(),rot:[this.engine.camera.rotation.x,this.engine.camera.rotation.y,this.engine.camera.rotation.z],fov:this.engine.camera.fov,near:this.engine.camera.near,far:this.engine.camera.far,aspect:this.engine.camera.aspect,view:this.engine.camera.view}),rayFloor:()=>{const t=new _u,n=[[0,-.2],[0,-.45],[.2,-.3],[-.2,-.3],[0,0]],i=[];for(const[r,o]of n){t.setFromCamera(new se(r,o),this.engine.camera);const a=t.intersectObject(this.engine.scene,!0);i.push({ndc:[r,o],hits:a.slice(0,6).map(c=>{const l=c.object instanceof ae?c.object.material:null,h=l?.map?.image;return{name:c.object.name,type:c.object.type,y:c.object.position.y,dist:Math.round(c.distance*1e3)/1e3,point:c.point.toArray().map(u=>Math.round(u*1e3)/1e3),visible:c.object.visible,mat:l?.type,color:l?.color?.getHexString?.(),map:h?.src?.slice(-40)??null,parent:c.object.parent?.name??c.object.parent?.type??null}})})}return i},paintFloors:(t,n=!1)=>{for(const i of this.interiors)for(const r of i.floorMeshes){const o=r.material;n&&o.map?r.material=new Ct({map:o.map,color:"#ffffff"}):(o.map=null,o.normalMap=null,o.roughnessMap=null,o.color.set(t),o.needsUpdate=!0)}},floorDebug:()=>{const t=[];for(const n of this.interiors)for(const i of n.floorMeshes){const r=i.material,o=r.map?.image,a=i.geometry.getAttribute("uv"),c=i.geometry.getAttribute("position"),l=i.geometry.getAttribute("normal");t.push({name:i.name,visible:i.visible,y:i.position.y,color:r.color.getHexString(),type:r.type,side:r.side,rough:r.roughness,env:r.envMapIntensity,map:r.map?{w:o?.width??0,src:String(o?.src??"").slice(-50),repeat:r.map.repeat.toArray(),wrap:r.map.wrapS,colorSpace:r.map.colorSpace}:null,uv0:a?[a.getX(0),a.getY(0),a.getX(1),a.getY(1),a.getX(2),a.getY(2)]:null,pos0:c?[c.getX(0),c.getY(0),c.getZ(0),c.getX(1),c.getY(1),c.getZ(1)]:null,n0:l?[l.getX(0),l.getY(0),l.getZ(0)]:null,verts:c?.count})}return t}};window.__leadsetu=e}}function Cw(s){let e=s;for(;e;){if(e.name==="hotspot"||e.userData.hotspot)return!0;e=e.parent}return!1}function Pw(s,e){const t=Math.max(0,Math.min(s.x+s.w,e.x+e.w)-Math.max(s.x,e.x)),n=Math.max(0,Math.min(s.y+s.h,e.y+e.h)-Math.max(s.y,e.y));return t>6&&n>6}function lr(s){const e=document.getElementById("load-bar"),t=document.getElementById("load-pct"),n=Math.round(Math.max(0,Math.min(1,s))*100);e&&(e.style.width=n+"%"),t&&(t.textContent=n+"%")}function Dw(){const s=[...document.querySelectorAll("#tips .tip")],e=[...document.querySelectorAll("#tips [data-dot]")];if(!s.length)return;let t=0;const n=o=>{t=(o+s.length)%s.length,s.forEach((a,c)=>a.classList.toggle("on",c===t)),e.forEach((a,c)=>a.classList.toggle("on",c===t))};n(0),e.forEach((o,a)=>o.addEventListener("click",()=>n(a)));const i=window.setInterval(()=>n(t+1),3200),r=document.getElementById("loading");if(r){const o=new MutationObserver(()=>{r.classList.contains("done")&&(clearInterval(i),o.disconnect())});o.observe(r,{attributes:!0,attributeFilter:["class"]})}}function Lw(){const s=document.getElementById("loading"),e=document.getElementById("start-explore");e&&(e.hidden=!1);const t=new URLSearchParams(location.search).get("hold")==="1";let n=!1;const i=()=>{n||(n=!0,s?.classList.add("done"),document.body.classList.remove("booting"))};e?.addEventListener("click",i),t||window.setTimeout(i,7e3)}new Rw().start().catch(s=>{console.error(s);const e=document.querySelector(".load-sub");e&&(e.textContent="Could not load the walkthrough. Check the console.")});function Iw(){const s=new Mt;s.name="walk-marker",s.visible=!1,s.renderOrder=10;const e=new ae(new Bo(.22,.34,48),new Ct({color:"#e8c878",transparent:!0,opacity:.95,side:Tt,depthWrite:!1}));e.rotation.x=-Math.PI/2;const t=new ae(new Bo(.04,.09,28),new Ct({color:"#fff6d8",transparent:!0,opacity:.9,side:Tt,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.012,s.add(e,t),s}
//# sourceMappingURL=index-BML-eb8v.js.map
