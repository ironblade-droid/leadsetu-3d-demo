(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dl="170",As={ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ef=0,$l=1,Af=2,fl=1,hd=2,ai=3,pi=0,Xt=1,wt=2,zt=0,Rs=1,Bo=2,Jl=3,Ql=4,ud=5,Ln=100,Rf=101,Cf=102,Pf=103,Df=104,gr=200,Lf=201,If=202,kf=203,cc=204,lc=205,hc=206,Nf=207,uc=208,Uf=209,Ff=210,Of=211,zf=212,Bf=213,Hf=214,dc=0,fc=1,pc=2,Us=3,mc=4,gc=5,bc=6,vc=7,dd=0,Gf=1,Vf=2,Pi=0,fd=1,pd=2,md=3,gd=4,Wf=5,pl=6,bd=7,eh="attached",Xf="detached",vd=300,Fs=301,Os=302,Zi=303,xc=304,Yo=306,jt=1e3,Wn=1001,Ho=1002,Yt=1003,xd=1004,br=1005,kt=1006,Lo=1007,Un=1008,jn=1009,_d=1010,yd=1011,Cr=1012,ml=1013,Ki=1014,ln=1015,Dt=1016,gl=1017,bl=1018,$i=1020,Md=35902,wd=1021,Sd=1022,hn=1023,Td=1024,Ed=1025,Cs=1026,Ji=1027,vl=1028,xl=1029,Ad=1030,_l=1031,yl=1033,Io=33776,ko=33777,No=33778,Uo=33779,_c=35840,yc=35841,Mc=35842,wc=35843,Sc=36196,Tc=37492,Ec=37496,Ac=37808,Rc=37809,Cc=37810,Pc=37811,Dc=37812,Lc=37813,Ic=37814,kc=37815,Nc=37816,Uc=37817,Fc=37818,Oc=37819,zc=37820,Bc=37821,Fo=36492,Hc=36494,Gc=36495,Rd=36283,Vc=36284,Wc=36285,Xc=36286,Pr=2300,Dr=2301,oa=2302,th=2400,nh=2401,ih=2402,jf=2500,qf=0,Cd=1,jc=2,Yf=3200,Pd=3201,Ml=0,Zf=1,li="",vt="srgb",Ft="srgb-linear",Zo="linear",pt="srgb",as=7680,sh=519,Kf=512,$f=513,Jf=514,Dd=515,Qf=516,ep=517,tp=518,np=519,qc=35044,rh="300 es",di=2e3,Go=2001;class ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let oh=1234567;const Sr=Math.PI/180,zs=180/Math.PI;function _n(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[s&255]+Zt[s>>8&255]+Zt[s>>16&255]+Zt[s>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Ut(s,e,t){return Math.max(e,Math.min(t,s))}function wl(s,e){return(s%e+e)%e}function ip(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function sp(s,e,t){return s!==e?(t-s)/(e-s):0}function Tr(s,e,t){return(1-t)*s+t*e}function rp(s,e,t,n){return Tr(s,e,1-Math.exp(-t*n))}function op(s,e=1){return e-Math.abs(wl(s,e*2)-e)}function ap(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function cp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function lp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function hp(s,e){return s+Math.random()*(e-s)}function up(s){return s*(.5-Math.random())}function dp(s){s!==void 0&&(oh=s);let e=oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fp(s){return s*Sr}function pp(s){return s*zs}function mp(s){return(s&s-1)===0&&s!==0}function gp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ld={DEG2RAD:Sr,RAD2DEG:zs,generateUUID:_n,clamp:Ut,euclideanModulo:wl,mapLinear:ip,inverseLerp:sp,lerp:Tr,damp:rp,pingpong:op,smoothstep:ap,smootherstep:cp,randInt:lp,randFloat:hp,randFloatSpread:up,seededRandom:dp,degToRad:fp,radToDeg:pp,isPowerOfTwo:mp,ceilPowerOfTwo:gp,floorPowerOfTwo:bp,setQuaternionFromProperEuler:vp,normalize:mt,denormalize:In};class ne{constructor(e=0,t=0){ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,i,r,o,a,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],x=i[1],v=i[4],_=i[7],S=i[2],E=i[5],w=i[8];return r[0]=o*b+a*x+c*S,r[3]=o*m+a*v+c*E,r[6]=o*p+a*_+c*w,r[1]=l*b+h*x+u*S,r[4]=l*m+h*v+u*E,r[7]=l*p+h*_+u*w,r[2]=d*b+f*x+g*S,r[5]=d*m+f*v+g*E,r[8]=d*p+f*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(a*n-i*o)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-a*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new Qe;function Id(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xp(){const s=Lr("canvas");return s.style.display="block",s}const ah={};function vr(s){s in ah||(ah[s]=!0,console.warn(s))}function _p(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function yp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rt={enabled:!0,workingColorSpace:Ft,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?Zo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ch=[.64,.33,.3,.6,.15,.06],lh=[.2126,.7152,.0722],hh=[.3127,.329],uh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);rt.define({[Ft]:{primaries:ch,whitePoint:hh,transfer:Zo,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:lh,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:ch,whitePoint:hh,transfer:pt,toXYZ:uh,fromXYZ:dh,luminanceCoefficients:lh,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}});let cs;class wp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Lr("canvas")),cs.width=e.width,cs.height=e.height;const n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sp=0;class kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ca(i[o].image)):r.push(ca(i[o]))}else r=ca(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ca(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tp=0;class Bt extends ns{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Wn,i=Wn,r=kt,o=Un,a=hn,c=jn,l=Bt.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=_n(),this.name="",this.source=new kd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jt:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jt:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=vd;Bt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,_=(f+1)/2,S=(p+1)/2,E=(h+d)/4,w=(u+b)/4,A=(g+m)/4;return v>_&&v>S?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=w/n):_>S?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=E/i,r=A/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=w/r,i=A/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ep extends ns{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class It extends Ep{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nd extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ap extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],b=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*b,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const S=Math.sqrt(v),E=Math.atan2(S,p*x);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const _=a*x;if(c=c*m+d*_,l=l*m+f*_,h=h*m+g*_,u=u*m+b*_,m===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new D,fh=new Mn;class mn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Yr.subVectors(this.max,ir),ls.subVectors(e.a,ir),hs.subVectors(e.b,ir),us.subVectors(e.c,ir),xi.subVectors(hs,ls),_i.subVectors(us,hs),Ui.subVectors(ls,us);let t=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Ui.z,Ui.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Ui.z,0,-Ui.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Ui.y,Ui.x,0];return!ha(t,ls,hs,us,Yr)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,ls,hs,us,Yr))?!1:(Zr.crossVectors(xi,_i),t=[Zr.x,Zr.y,Zr.z],ha(t,ls,hs,us,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new D,new D,new D,new D,new D,new D,new D,new D],En=new D,qr=new mn,ls=new D,hs=new D,us=new D,xi=new D,_i=new D,Ui=new D,ir=new D,Yr=new D,Zr=new D,Fi=new D;function ha(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Fi.fromArray(s,r);const a=i.x*Math.abs(Fi.x)+i.y*Math.abs(Fi.y)+i.z*Math.abs(Fi.z),c=e.dot(Fi),l=t.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Rp=new mn,sr=new D,ua=new D;class Zn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(ua)),this.expandByPoint(sr.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new D,da=new D,Kr=new D,yi=new D,fa=new D,$r=new D,pa=new D;class qs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){da.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Kr),a=yi.dot(this.direction),c=-yi.dot(Kr),l=yi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const b=1/h;u*=b,d*=b,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(da).addScaledVector(Kr,d),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,i,r){fa.subVectors(t,e),$r.subVectors(n,e),pa.crossVectors(fa,$r);let o=this.direction.dot(pa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const c=a*this.direction.dot($r.crossVectors(yi,$r));if(c<0)return null;const l=a*this.direction.dot(fa.cross(yi));if(l<0||c+l>o)return null;const h=-a*yi.dot(pa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,r,o,a,c,l,h,u,d,f,g,b,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,b,m)}set(e,t,n,i,r,o,a,c,l,h,u,d,f,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,b=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-a*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=b+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=b-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,b=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,b=a*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,b=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cp,e,Pp)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Mi.crossVectors(n,dn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Mi.crossVectors(n,dn)),Mi.normalize(),Jr.crossVectors(dn,Mi),i[0]=Mi.x,i[4]=Jr.x,i[8]=dn.x,i[1]=Mi.y,i[5]=Jr.y,i[9]=dn.y,i[2]=Mi.z,i[6]=Jr.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],x=n[3],v=n[7],_=n[11],S=n[15],E=i[0],w=i[4],A=i[8],M=i[12],y=i[1],R=i[5],k=i[9],N=i[13],I=i[2],O=i[6],U=i[10],z=i[14],H=i[3],q=i[7],W=i[11],Z=i[15];return r[0]=o*E+a*y+c*I+l*H,r[4]=o*w+a*R+c*O+l*q,r[8]=o*A+a*k+c*U+l*W,r[12]=o*M+a*N+c*z+l*Z,r[1]=h*E+u*y+d*I+f*H,r[5]=h*w+u*R+d*O+f*q,r[9]=h*A+u*k+d*U+f*W,r[13]=h*M+u*N+d*z+f*Z,r[2]=g*E+b*y+m*I+p*H,r[6]=g*w+b*R+m*O+p*q,r[10]=g*A+b*k+m*U+p*W,r[14]=g*M+b*N+m*z+p*Z,r[3]=x*E+v*y+_*I+S*H,r[7]=x*w+v*R+_*O+S*q,r[11]=x*A+v*k+_*U+S*W,r[15]=x*M+v*N+_*z+S*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+b*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],x=u*m*l-b*d*l+b*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,_=h*b*l-g*u*l+g*a*f-o*b*f-h*a*p+o*u*p,S=g*u*c-h*b*c-g*a*d+o*b*d+h*a*m-o*u*m,E=t*x+n*v+i*_+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=x*w,e[1]=(b*d*r-u*m*r-b*i*f+n*m*f+u*i*p-n*d*p)*w,e[2]=(a*m*r-b*c*r+b*i*l-n*m*l-a*i*p+n*c*p)*w,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*w,e[4]=v*w,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*w,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*w,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*w,e[8]=_*w,e[9]=(g*u*r-h*b*r-g*n*f+t*b*f+h*n*p-t*u*p)*w,e[10]=(o*b*r-g*a*r+g*n*l-t*b*l-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*w,e[12]=S*w,e[13]=(h*b*i-g*u*i+g*n*d-t*b*d-h*n*m+t*u*m)*w,e[14]=(g*a*i-o*b*i-g*n*c+t*b*c+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,b=o*h,m=o*u,p=a*u,x=c*l,v=c*h,_=c*u,S=n.x,E=n.y,w=n.z;return i[0]=(1-(b+p))*S,i[1]=(f+_)*S,i[2]=(g-v)*S,i[3]=0,i[4]=(f-_)*E,i[5]=(1-(d+p))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(g+v)*w,i[9]=(m-x)*w,i[10]=(1-(d+b))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ds.set(i[0],i[1],i[2]).length();const o=ds.set(i[4],i[5],i[6]).length(),a=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],An.copy(this);const l=1/r,h=1/o,u=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=di){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===di)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Go)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=di){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*l,f=(n+i)*h;let g,b;if(a===di)g=(o+r)*u,b=-2*u;else if(a===Go)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new D,An=new Xe,Cp=new D(0,0,0),Pp=new D(1,1,1),Mi=new D,Jr=new D,dn=new D,ph=new Xe,mh=new Mn;class zn{constructor(e=0,t=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ph,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mh.setFromEuler(this),this.setFromQuaternion(mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dp=0;const gh=new D,fs=new Mn,ni=new Xe,Qr=new D,rr=new D,Lp=new D,Ip=new Mn,bh=new D(1,0,0),vh=new D(0,1,0),xh=new D(0,0,1),_h={type:"added"},kp={type:"removed"},ps={type:"childadded",child:null},ma={type:"childremoved",child:null};class At extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new D,t=new zn,n=new Mn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Qe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(vh,e)}rotateZ(e){return this.rotateOnAxis(xh,e)}translateOnAxis(e,t){return gh.copy(e).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(vh,e)}translateZ(e){return this.translateOnAxis(xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qr.copy(e):Qr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(rr,Qr,this.up):ni.lookAt(Qr,rr,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(ni),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kp),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Ip,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}At.DEFAULT_UP=new D(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new D,ii=new D,ga=new D,si=new D,ms=new D,gs=new D,yh=new D,ba=new D,va=new D,xa=new D,_a=new ht,ya=new ht,Ma=new ht;class kn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rn.subVectors(e,t),i.cross(Rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Rn.subVectors(i,t),ii.subVectors(n,t),ga.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(ii),c=Rn.dot(ga),l=ii.dot(ii),h=ii.dot(ga),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return _a.setScalar(0),ya.setScalar(0),Ma.setScalar(0),_a.fromBufferAttribute(e,t),ya.fromBufferAttribute(e,n),Ma.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(_a,r.x),o.addScaledVector(ya,r.y),o.addScaledVector(Ma,r.z),o}static isFrontFacing(e,t,n,i){return Rn.subVectors(n,t),ii.subVectors(e,t),Rn.cross(ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Rn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return kn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ms.subVectors(i,n),gs.subVectors(r,n),ba.subVectors(e,n);const c=ms.dot(ba),l=gs.dot(ba);if(c<=0&&l<=0)return t.copy(n);va.subVectors(e,i);const h=ms.dot(va),u=gs.dot(va);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ms,o);xa.subVectors(e,r);const f=ms.dot(xa),g=gs.dot(xa);if(g>=0&&f<=g)return t.copy(r);const b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(gs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return yh.subVectors(r,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(yh,a);const p=1/(m+b+d);return o=b*p,a=d*p,t.copy(n).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function wa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=wl(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=wa(o,r,e+1/3),this.g=wa(o,r,e),this.b=wa(o,r,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=Ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return rt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Ut(Kt.r*255,0,255))*65536+Math.round(Ut(Kt.g*255,0,255))*256+Math.round(Ut(Kt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Kt.copy(this),t);const n=Kt.r,i=Kt.g,r=Kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=vt){rt.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,i=Kt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(eo);const n=Tr(wi.h,eo.h,t),i=Tr(wi.s,eo.s,t),r=Tr(wi.l,eo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Le;Le.NAMES=Ud;let Np=0;class Fn extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=_n(),this.name="",this.blending=Rs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(n.stencilFail=this.stencilFail),this.stencilZFail!==as&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ct extends Fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hi=Up();function Up(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Fp(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ut(s,-65504,65504),hi.floatView[0]=s;const e=hi.uint32View[0],t=e>>23&511;return hi.baseTable[t]+((e&8388607)>>hi.shiftTable[t])}function Op(s){const e=s>>10;return hi.uint32View[0]=hi.mantissaTable[hi.offsetTable[e]+(s&1023)]+hi.exponentTable[e],hi.floatView[0]}const to={toHalfFloat:Fp,fromHalfFloat:Op},Nt=new D,no=new ne;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}}class Fd extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Od extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zp=0;const bn=new Xe,Sa=new At,bs=new D,fn=new mn,or=new mn,Wt=new D;class Vt extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Id(e)?Od:Fd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(fn.min,or.min),fn.expandByPoint(Wt),Wt.addVectors(fn.max,or.max),fn.expandByPoint(Wt)):(fn.expandByPoint(or.min),fn.expandByPoint(or.max))}fn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Wt.fromBufferAttribute(a,l),c&&(bs.fromBufferAttribute(e,l),Wt.add(bs)),i=Math.max(i,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new D,c[A]=new D;const l=new D,h=new D,u=new D,d=new ne,f=new ne,g=new ne,b=new D,m=new D;function p(A,M,y){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[A].add(b),a[M].add(b),a[y].add(b),c[A].add(m),c[M].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,M=x.length;A<M;++A){const y=x[A],R=y.start,k=y.count;for(let N=R,I=R+k;N<I;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const v=new D,_=new D,S=new D,E=new D;function w(A){S.fromBufferAttribute(i,A),E.copy(S);const M=a[A];v.copy(M),v.sub(S.multiplyScalar(S.dot(M))).normalize(),_.crossVectors(E,M);const R=_.dot(c[A])<0?-1:1;o.setXYZW(A,v.x,v.y,v.z,R)}for(let A=0,M=x.length;A<M;++A){const y=x[A],R=y.start,k=y.count;for(let N=R,I=R+k;N<I;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let b=0,m=c.length;b<m;b++){a.isInterleavedBufferAttribute?f=c[b]*a.data.stride+a.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new qt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mh=new Xe,Oi=new qs,io=new Zn,wh=new D,so=new D,ro=new D,oo=new D,Ta=new D,ao=new D,Sh=new D,co=new D;class le extends At{constructor(e=new Vt,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ta.fromBufferAttribute(u,e),o?ao.addScaledVector(Ta,h):ao.addScaledVector(Ta.sub(t),h))}t.add(ao)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(io.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(io,wh)===null||Oi.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Mh.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Mh),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,S=v;_<S;_+=3){const E=a.getX(_),w=a.getX(_+1),A=a.getX(_+2);i=lo(this,p,e,n,l,h,u,E,w,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(a.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);i=lo(this,o,e,n,l,h,u,x,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,S=v;_<S;_+=3){const E=_,w=_+1,A=_+2;i=lo(this,p,e,n,l,h,u,E,w,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const x=m,v=m+1,_=m+2;i=lo(this,o,e,n,l,h,u,x,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Bp(s,e,t,n,i,r,o,a){let c;if(e.side===Xt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===pi,a),c===null)return null;co.copy(a),co.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(co);return l<t.near||l>t.far?null:{distance:l,point:co.clone(),object:s}}function lo(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,so),s.getVertexPosition(c,ro),s.getVertexPosition(l,oo);const h=Bp(s,e,t,n,so,ro,oo,Sh);if(h){const u=new D;kn.getBarycoord(Sh,so,ro,oo,u),i&&(h.uv=kn.getInterpolatedAttribute(i,a,c,l,u,new ne)),r&&(h.uv1=kn.getInterpolatedAttribute(r,a,c,l,u,new ne)),o&&(h.normal=kn.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};kn.getNormal(so,ro,oo,d.normal),h.face=d,h.barycoord=u}return h}class ve extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function g(b,m,p,x,v,_,S,E,w,A,M){const y=_/w,R=S/A,k=_/2,N=S/2,I=E/2,O=w+1,U=A+1;let z=0,H=0;const q=new D;for(let W=0;W<U;W++){const Z=W*R-N;for(let he=0;he<O;he++){const ge=he*y-k;q[b]=ge*x,q[m]=Z*v,q[p]=I,l.push(q.x,q.y,q.z),q[b]=0,q[m]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(he/w),u.push(1-W/A),z+=1}}for(let W=0;W<A;W++)for(let Z=0;Z<w;Z++){const he=d+Z+O*W,ge=d+Z+O*(W+1),K=d+(Z+1)+O*(W+1),F=d+(Z+1)+O*W;c.push(he,ge,F),c.push(ge,K,F),H+=6}a.addGroup(f,H,M),f+=H,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ve(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(s){const e={};for(let t=0;t<s.length;t++){const n=Bs(s[t]);for(const i in n)e[i]=n[i]}return e}function Hp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Nn={clone:Bs,merge:tn};var Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends Fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bd extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new D,Th=new ne,Eh=new ne;class sn extends Bd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,Th,Eh),t.subVectors(Eh,Th)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,xs=1;class Wp extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new sn(vs,xs,e,t);i.layers=this.layers,this.add(i);const r=new sn(vs,xs,e,t);r.layers=this.layers,this.add(r);const o=new sn(vs,xs,e,t);o.layers=this.layers,this.add(o);const a=new sn(vs,xs,e,t);a.layers=this.layers,this.add(a);const c=new sn(vs,xs,e,t);c.layers=this.layers,this.add(c);const l=new sn(vs,xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hd extends Bt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xp extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Hd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ve(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:zt});r.uniforms.tEquirect.value=t;const o=new le(i,r),a=t.minFilter;return t.minFilter===Un&&(t.minFilter=kt),new Wp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ea=new D,jp=new D,qp=new Qe;class Ei{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ea.subVectors(n,t).cross(jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qp.getNormalMatrix(e),i=this.coplanarPoint(Ea).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Zn,ho=new D;class Tl{constructor(e=new Ei,t=new Ei,n=new Ei,i=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],b=i[10],m=i[11],p=i[12],x=i[13],v=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-f,_-p).normalize(),n[1].setComponents(c+r,d+l,m+f,_+p).normalize(),n[2].setComponents(c+o,d+h,m+g,_+x).normalize(),n[3].setComponents(c-o,d-h,m-g,_-x).normalize(),n[4].setComponents(c-a,d-u,m-b,_-v).normalize(),t===di)n[5].setComponents(c+a,d+u,m+b,_+v).normalize();else if(t===Go)n[5].setComponents(a,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ho.x=i.normal.x>0?e.max.x:e.min.x,ho.y=i.normal.y>0?e.max.y:e.min.y,ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Yp(s){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const b=u[f];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class is extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let v=0;v<l;v++){const _=v*u-r;g.push(_,-x,0),b.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const v=x+l*p,_=x+l*(p+1),S=x+1+l*(p+1),E=x+1+l*p;f.push(v,_,E),f.push(_,S,E)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(b,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
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
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
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
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cm=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vm=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
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
#endif`,qm=`struct PhysicalMaterial {
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
}`,Ym=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s0=`#if defined( USE_POINTS_UV )
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
#endif`,r0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
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
#endif`,u0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
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
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I0=`float getShadowMask() {
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
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,U0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,O0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z0=`uniform sampler2D t2D;
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
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
}`,tg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,lg=`uniform vec3 diffuse;
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define MATCAP
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
}`,fg=`#define MATCAP
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
}`,pg=`#define NORMAL
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
}`,mg=`#define NORMAL
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
}`,gg=`#define PHONG
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
}`,bg=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,xg=`#define STANDARD
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
}`,_g=`#define TOON
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
}`,yg=`#define TOON
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
}`,Mg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Tg=`uniform vec3 color;
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
}`,Eg=`uniform float rotation;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Zp,alphahash_pars_fragment:Kp,alphamap_fragment:$p,alphamap_pars_fragment:Jp,alphatest_fragment:Qp,alphatest_pars_fragment:em,aomap_fragment:tm,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:sm,begin_vertex:rm,beginnormal_vertex:om,bsdfs:am,iridescence_fragment:cm,bumpmap_pars_fragment:lm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:dm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:bm,common:vm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:_m,displacementmap_pars_vertex:ym,displacementmap_vertex:Mm,emissivemap_fragment:wm,emissivemap_pars_fragment:Sm,colorspace_fragment:Tm,colorspace_pars_fragment:Em,envmap_fragment:Am,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Cm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Hm,envmap_vertex:Dm,fog_vertex:Lm,fog_pars_vertex:Im,fog_fragment:km,fog_pars_fragment:Nm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Fm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:zm,lights_pars_begin:Bm,lights_toon_fragment:Gm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:jm,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:Zm,lights_fragment_end:Km,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:e0,map_fragment:t0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:s0,metalnessmap_fragment:r0,metalnessmap_pars_fragment:o0,morphinstance_vertex:a0,morphcolor_vertex:c0,morphnormal_vertex:l0,morphtarget_pars_vertex:h0,morphtarget_vertex:u0,normal_fragment_begin:d0,normal_fragment_maps:f0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:y0,opaque_fragment:M0,packing:w0,premultiplied_alpha_fragment:S0,project_vertex:T0,dithering_fragment:E0,dithering_pars_fragment:A0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:D0,shadowmap_vertex:L0,shadowmask_pars_fragment:I0,skinbase_vertex:k0,skinning_pars_vertex:N0,skinning_vertex:U0,skinnormal_vertex:F0,specularmap_fragment:O0,specularmap_pars_fragment:z0,tonemapping_fragment:B0,tonemapping_pars_fragment:H0,transmission_fragment:G0,transmission_pars_fragment:V0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:j0,worldpos_vertex:q0,background_vert:Y0,background_frag:Z0,backgroundCube_vert:K0,backgroundCube_frag:$0,cube_vert:J0,cube_frag:Q0,depth_vert:eg,depth_frag:tg,distanceRGBA_vert:ng,distanceRGBA_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:og,linedashed_frag:ag,meshbasic_vert:cg,meshbasic_frag:lg,meshlambert_vert:hg,meshlambert_frag:ug,meshmatcap_vert:dg,meshmatcap_frag:fg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:bg,meshphysical_vert:vg,meshphysical_frag:xg,meshtoon_vert:_g,meshtoon_frag:yg,points_vert:Mg,points_frag:wg,shadow_vert:Sg,shadow_frag:Tg,sprite_vert:Eg,sprite_frag:Ag},Pe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Gn={basic:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Le(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Le(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:tn([Pe.points,Pe.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:tn([Pe.common,Pe.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:tn([Pe.sprite,Pe.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:tn([Pe.lights,Pe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Gn.physical={uniforms:tn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const uo={r:0,b:0,g:0},Bi=new zn,Rg=new Xe;function Cg(s,e,t,n,i,r,o){const a=new Le(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function b(x){let v=!1;const _=g(x);_===null?p(a,c):_&&_.isColor&&(p(_,1),v=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,v){const _=g(v);_&&(_.isCubeTexture||_.mapping===Yo)?(h===void 0&&(h=new le(new ve(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:Bs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Bi.copy(v.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(Bi)),h.material.toneMapped=rt.getTransfer(_.colorSpace)!==pt,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new le(new is(2,2),new St({name:"BackgroundMaterial",uniforms:Bs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=rt.getTransfer(_.colorSpace)!==pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(uo,zd(s)),n.buffers.color.setClear(uo.r,uo.g,uo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:b,addToRenderList:m}}function Pg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(y,R,k,N,I){let O=!1;const U=u(N,k,R);r!==U&&(r=U,l(r.object)),O=f(y,N,k,I),O&&g(y,N,k,I),I!==null&&e.update(I,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,_(y,R,k,N),I!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,R,k){const N=k.wireframe===!0;let I=n[y.id];I===void 0&&(I={},n[y.id]=I);let O=I[R.id];O===void 0&&(O={},I[R.id]=O);let U=O[N];return U===void 0&&(U=d(c()),O[N]=U),U}function d(y){const R=[],k=[],N=[];for(let I=0;I<t;I++)R[I]=0,k[I]=0,N[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:N,object:y,attributes:{},index:null}}function f(y,R,k,N){const I=r.attributes,O=R.attributes;let U=0;const z=k.getAttributes();for(const H in z)if(z[H].location>=0){const W=I[H];let Z=O[H];if(Z===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),W===void 0||W.attribute!==Z||Z&&W.data!==Z.data)return!0;U++}return r.attributesNum!==U||r.index!==N}function g(y,R,k,N){const I={},O=R.attributes;let U=0;const z=k.getAttributes();for(const H in z)if(z[H].location>=0){let W=O[H];W===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(W=y.instanceColor));const Z={};Z.attribute=W,W&&W.data&&(Z.data=W.data),I[H]=Z,U++}r.attributes=I,r.attributesNum=U,r.index=N}function b(){const y=r.newAttributes;for(let R=0,k=y.length;R<k;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const k=r.newAttributes,N=r.enabledAttributes,I=r.attributeDivisors;k[y]=1,N[y]===0&&(s.enableVertexAttribArray(y),N[y]=1),I[y]!==R&&(s.vertexAttribDivisor(y,R),I[y]=R)}function x(){const y=r.newAttributes,R=r.enabledAttributes;for(let k=0,N=R.length;k<N;k++)R[k]!==y[k]&&(s.disableVertexAttribArray(k),R[k]=0)}function v(y,R,k,N,I,O,U){U===!0?s.vertexAttribIPointer(y,R,k,I,O):s.vertexAttribPointer(y,R,k,N,I,O)}function _(y,R,k,N){b();const I=N.attributes,O=k.getAttributes(),U=R.defaultAttributeValues;for(const z in O){const H=O[z];if(H.location>=0){let q=I[z];if(q===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const W=q.normalized,Z=q.itemSize,he=e.get(q);if(he===void 0)continue;const ge=he.buffer,K=he.type,F=he.bytesPerElement,B=K===s.INT||K===s.UNSIGNED_INT||q.gpuType===ml;if(q.isInterleavedBufferAttribute){const Y=q.data,ee=Y.stride,fe=q.offset;if(Y.isInstancedInterleavedBuffer){for(let pe=0;pe<H.locationSize;pe++)p(H.location+pe,Y.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let pe=0;pe<H.locationSize;pe++)v(H.location+pe,Z/H.locationSize,K,W,ee*F,(fe+Z/H.locationSize*pe)*F,B)}else{if(q.isInstancedBufferAttribute){for(let Y=0;Y<H.locationSize;Y++)p(H.location+Y,q.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Y=0;Y<H.locationSize;Y++)m(H.location+Y);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Y=0;Y<H.locationSize;Y++)v(H.location+Y,Z/H.locationSize,K,W,Z*F,Z/H.locationSize*Y*F,B)}}else if(U!==void 0){const W=U[z];if(W!==void 0)switch(W.length){case 2:s.vertexAttrib2fv(H.location,W);break;case 3:s.vertexAttrib3fv(H.location,W);break;case 4:s.vertexAttrib4fv(H.location,W);break;default:s.vertexAttrib1fv(H.location,W)}}}}x()}function S(){A();for(const y in n){const R=n[y];for(const k in R){const N=R[k];for(const I in N)h(N[I].object),delete N[I];delete R[k]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const k in R){const N=R[k];for(const I in N)h(N[I].object),delete N[I];delete R[k]}delete n[y.id]}function w(y){for(const R in n){const k=n[R];if(k[y.id]===void 0)continue;const N=k[y.id];for(const I in N)h(N[I].object),delete N[I];delete k[y.id]}}function A(){M(),o=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function Dg(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*d[b];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Lg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==hn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===Dt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==jn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ln&&!A)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:S,maxSamples:E}}function Ig(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ei,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,v=x*4;let _=p.clippingState||null;c.value=_,_=h(g,d,v,f);for(let S=0;S!==v;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const b=u!==null?u.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const p=f+b*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==b;++v,_+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function kg(s){let e=new WeakMap;function t(o,a){return a===Zi?o.mapping=Fs:a===xc&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zi||a===xc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xp(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ko extends Bd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ts=4,Ah=[.125,.215,.35,.446,.526,.582],Xi=20,Aa=new Ko,Rh=new Le;let Ra=null,Ca=0,Pa=0,Da=!1;const Wi=(1+Math.sqrt(5))/2,_s=1/Wi,Ch=[new D(-Wi,_s,0),new D(Wi,_s,0),new D(-_s,0,Wi),new D(_s,0,Wi),new D(0,Wi,-_s),new D(0,Wi,_s),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Qi{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=Da,e.scissorTest=!1,fo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Dt,format:hn,colorSpace:Ft,depthBuffer:!1},i=Ph(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ng(r)),this._blurMaterial=Ug(r,e,t)}return i}_compileMaterial(e){const t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,i){const a=new sn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Rh),h.toneMapping=Pi,h.autoClear=!1;const f=new Ct({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new le(new ve,f);let b=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(Rh),b=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;fo(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fs||e.mapping===Os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;fo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ch[(i-r-1)%Ch.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new le(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const p=[];let x=0;for(let w=0;w<Xi;++w){const A=w/b,M=Math.exp(-A*A/2);p.push(M),w===0?x+=M:w<m&&(x+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const _=this._sizeLods[i],S=3*_*(i>v-Ts?i-v+Ts:0),E=4*(this._cubeSize-_);fo(t,S,E,3*_,2*_),c.setRenderTarget(t),c.render(u,Aa)}}function Ng(s){const e=[],t=[],n=[];let i=s;const r=s-Ts+1+Ah.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ts?c=Ah[o-s+Ts-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,b=3,m=2,p=1,x=new Float32Array(b*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let E=0;E<f;E++){const w=E%3*2/3-1,A=E>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];x.set(M,b*g*E),v.set(d,m*g*E);const y=[E,E,E,E,E,E];_.set(y,p*g*E)}const S=new Vt;S.setAttribute("position",new qt(x,b)),S.setAttribute("uv",new qt(v,m)),S.setAttribute("faceIndex",new qt(_,p)),e.push(S),i>Ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ph(s,e,t){const n=new It(s,e,t);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ug(s,e,t){const n=new Float32Array(Xi),i=new D(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:El(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Dh(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:zt,depthTest:!1,depthWrite:!1})}function Lh(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}function Fg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zi||c===xc,h=c===Fs||c===Os;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Qi(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Qi(s)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Og(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zg(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let b=0;if(f!==null){const x=f.array;b=f.version;for(let v=0,_=x.length;v<_;v+=3){const S=x[v+0],E=x[v+1],w=x[v+2];d.push(S,E,E,w,w,S)}}else if(g!==void 0){const x=g.array;b=g.version;for(let v=0,_=x.length/3-1;v<_;v+=3){const S=v+0,E=v+1,w=v+2;d.push(S,E,E,w,w,S)}}else return;const m=new(Id(d)?Od:Fd)(d,1);m.version=b;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Bg(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*b[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Hg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gg(s,e,t){const n=new WeakMap,i=new ht;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),b===!0&&(_=2),m===!0&&(_=3);let S=a.attributes.position.count*_,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*E*4*u),A=new Nd(w,S,E,u);A.type=ln,A.needsUpdate=!0;const M=_*4;for(let R=0;R<u;R++){const k=p[R],N=x[R],I=v[R],O=S*E*4*R;for(let U=0;U<k.count;U++){const z=U*M;g===!0&&(i.fromBufferAttribute(k,U),w[O+z+0]=i.x,w[O+z+1]=i.y,w[O+z+2]=i.z,w[O+z+3]=0),b===!0&&(i.fromBufferAttribute(N,U),w[O+z+4]=i.x,w[O+z+5]=i.y,w[O+z+6]=i.z,w[O+z+7]=0),m===!0&&(i.fromBufferAttribute(I,U),w[O+z+8]=i.x,w[O+z+9]=i.y,w[O+z+10]=i.z,w[O+z+11]=I.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new ne(S,E)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const b=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",b),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Vg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Al extends Bt{constructor(e,t,n,i,r,o,a,c,l,h=Cs){if(h!==Cs&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=Ki),n===void 0&&h===Ji&&(n=$i),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=c!==void 0?c:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vd=new Bt,Ih=new Al(1,1),Wd=new Nd,Xd=new Ap,jd=new Hd,kh=[],Nh=[],Uh=new Float32Array(16),Fh=new Float32Array(9),Oh=new Float32Array(4);function Ys(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=kh[i];if(r===void 0&&(r=new Float32Array(i),kh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function $o(s,e){let t=Nh[e];t===void 0&&(t=new Int32Array(e),Nh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2fv(this.addr,e),Gt(t,e)}}function jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;s.uniform3fv(this.addr,e),Gt(t,e)}}function qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4fv(this.addr,e),Gt(t,e)}}function Yg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Oh.set(n),s.uniformMatrix2fv(this.addr,!1,Oh),Gt(t,n)}}function Zg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Fh.set(n),s.uniformMatrix3fv(this.addr,!1,Fh),Gt(t,n)}}function Kg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Uh.set(n),s.uniformMatrix4fv(this.addr,!1,Uh),Gt(t,n)}}function $g(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2iv(this.addr,e),Gt(t,e)}}function Qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3iv(this.addr,e),Gt(t,e)}}function eb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4iv(this.addr,e),Gt(t,e)}}function tb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2uiv(this.addr,e),Gt(t,e)}}function ib(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3uiv(this.addr,e),Gt(t,e)}}function sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4uiv(this.addr,e),Gt(t,e)}}function rb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ih.compareFunction=Dd,r=Ih):r=Vd,t.setTexture2D(e||r,i)}function ob(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xd,i)}function ab(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jd,i)}function cb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wd,i)}function lb(s){switch(s){case 5126:return Wg;case 35664:return Xg;case 35665:return jg;case 35666:return qg;case 35674:return Yg;case 35675:return Zg;case 35676:return Kg;case 5124:case 35670:return $g;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return rb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return cb}}function hb(s,e){s.uniform1fv(this.addr,e)}function ub(s,e){const t=Ys(e,this.size,2);s.uniform2fv(this.addr,t)}function db(s,e){const t=Ys(e,this.size,3);s.uniform3fv(this.addr,t)}function fb(s,e){const t=Ys(e,this.size,4);s.uniform4fv(this.addr,t)}function pb(s,e){const t=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mb(s,e){const t=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gb(s,e){const t=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bb(s,e){s.uniform1iv(this.addr,e)}function vb(s,e){s.uniform2iv(this.addr,e)}function xb(s,e){s.uniform3iv(this.addr,e)}function _b(s,e){s.uniform4iv(this.addr,e)}function yb(s,e){s.uniform1uiv(this.addr,e)}function Mb(s,e){s.uniform2uiv(this.addr,e)}function wb(s,e){s.uniform3uiv(this.addr,e)}function Sb(s,e){s.uniform4uiv(this.addr,e)}function Tb(s,e,t){const n=this.cache,i=e.length,r=$o(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Vd,r[o])}function Eb(s,e,t){const n=this.cache,i=e.length,r=$o(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xd,r[o])}function Ab(s,e,t){const n=this.cache,i=e.length,r=$o(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||jd,r[o])}function Rb(s,e,t){const n=this.cache,i=e.length,r=$o(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wd,r[o])}function Cb(s){switch(s){case 5126:return hb;case 35664:return ub;case 35665:return db;case 35666:return fb;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return bb;case 35667:case 35671:return vb;case 35668:case 35672:return xb;case 35669:case 35673:return _b;case 5125:return yb;case 36294:return Mb;case 36295:return wb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Rb}}class Pb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lb(t.type)}}class Db{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cb(t.type)}}class Lb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function zh(s,e){s.seq.push(e),s.map[e.id]=e}function Ib(s,e,t){const n=s.name,i=n.length;for(La.lastIndex=0;;){const r=La.exec(n),o=La.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){zh(t,l===void 0?new Pb(a,s,e):new Db(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Lb(a),zh(t,u)),t=u}}}class Oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Ib(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Bh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const kb=37297;let Nb=0;function Ub(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Hh=new Qe;function Fb(s){rt._getMatrix(Hh,rt.workingColorSpace,s);const e=`mat3( ${Hh.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(s)){case Zo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Gh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ub(s.getShaderSource(e),o)}else return i}function Ob(s,e){const t=Fb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zb(s,e){let t;switch(e){case fd:t="Linear";break;case pd:t="Reinhard";break;case md:t="Cineon";break;case gd:t="ACESFilmic";break;case pl:t="AgX";break;case bd:t="Neutral";break;case Wf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const po=new D;function Bb(){rt.getLuminanceCoefficients(po);const s=po.x.toFixed(4),e=po.y.toFixed(4),t=po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function Gb(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function xr(s){return s!==""}function Vh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(s){return s.replace(Wb,jb)}const Xb=new Map;function jb(s,e){let t=tt[e];if(t===void 0){const n=Xb.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yc(t)}const qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(s){return s.replace(qb,Yb)}function Yb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jh(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Zb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Kb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $b(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function Jb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dd:e="ENVMAP_BLENDING_MULTIPLY";break;case Gf:e="ENVMAP_BLENDING_MIX";break;case Vf:e="ENVMAP_BLENDING_ADD";break}return e}function Qb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ev(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Zb(t),l=Kb(t),h=$b(t),u=Jb(t),d=Qb(t),f=Hb(t),g=Gb(r),b=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[jh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?zb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Ob("linearToOutputTexel",t.outputColorSpace),Bb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),o=Yc(o),o=Vh(o,t),o=Wh(o,t),a=Yc(a),a=Vh(a,t),a=Wh(a,t),o=Xh(o),a=Xh(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+m+o,_=x+p+a,S=Bh(i,i.VERTEX_SHADER,v),E=Bh(i,i.FRAGMENT_SHADER,_);i.attachShader(b,S),i.attachShader(b,E),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function w(R){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(b).trim(),N=i.getShaderInfoLog(S).trim(),I=i.getShaderInfoLog(E).trim();let O=!0,U=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,S,E);else{const z=Gh(i,S,"vertex"),H=Gh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+k+`
`+z+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||I==="")&&(U=!1);U&&(R.diagnostics={runnable:O,programLog:k,vertexShader:{log:N,prefix:m},fragmentShader:{log:I,prefix:p}})}i.deleteShader(S),i.deleteShader(E),A=new Oo(i,b),M=Vb(i,b)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(b,kb)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=S,this.fragmentShader=E,this}let tv=0;class nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iv(e),t.set(e,n)),n}}class iv{constructor(e){this.id=tv++,this.code=e,this.usedTimes=0}}function sv(s,e,t,n,i,r,o){const a=new Sl,c=new nv,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,R,k,N){const I=k.fog,O=N.geometry,U=M.isMeshStandardMaterial?k.environment:null,z=(M.isMeshStandardMaterial?t:e).get(M.envMap||U),H=z&&z.mapping===Yo?z.image.height:null,q=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const W=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=W!==void 0?W.length:0;let he=0;O.morphAttributes.position!==void 0&&(he=1),O.morphAttributes.normal!==void 0&&(he=2),O.morphAttributes.color!==void 0&&(he=3);let ge,K,F,B;if(q){const re=Gn[q];ge=re.vertexShader,K=re.fragmentShader}else ge=M.vertexShader,K=M.fragmentShader,c.update(M),F=c.getVertexShaderID(M),B=c.getFragmentShaderID(M);const Y=s.getRenderTarget(),ee=s.state.buffers.depth.getReversed(),fe=N.isInstancedMesh===!0,pe=N.isBatchedMesh===!0,Re=!!M.map,$=!!M.matcap,oe=!!z,L=!!M.aoMap,_e=!!M.lightMap,ae=!!M.bumpMap,we=!!M.normalMap,xe=!!M.displacementMap,Oe=!!M.emissiveMap,Ce=!!M.metalnessMap,P=!!M.roughnessMap,T=M.anisotropy>0,V=M.clearcoat>0,ie=M.dispersion>0,ue=M.iridescence>0,se=M.sheen>0,ke=M.transmission>0,ye=T&&!!M.anisotropyMap,Ae=V&&!!M.clearcoatMap,Ye=V&&!!M.clearcoatNormalMap,me=V&&!!M.clearcoatRoughnessMap,Fe=ue&&!!M.iridescenceMap,We=ue&&!!M.iridescenceThicknessMap,je=se&&!!M.sheenColorMap,Ne=se&&!!M.sheenRoughnessMap,nt=!!M.specularMap,Ze=!!M.specularColorMap,at=!!M.specularIntensityMap,G=ke&&!!M.transmissionMap,Se=ke&&!!M.thicknessMap,te=!!M.gradientMap,de=!!M.alphaMap,Ie=M.alphaTest>0,De=!!M.alphaHash,be=!!M.extensions;let Te=Pi;M.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Te=s.toneMapping);const ze={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:ge,fragmentShader:K,defines:M.defines,customVertexShaderID:F,customFragmentShaderID:B,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:pe,batchingColor:pe&&N._colorsTexture!==null,instancing:fe,instancingColor:fe&&N.instanceColor!==null,instancingMorph:fe&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ft,alphaToCoverage:!!M.alphaToCoverage,map:Re,matcap:$,envMap:oe,envMapMode:oe&&z.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:_e,bumpMap:ae,normalMap:we,displacementMap:d&&xe,emissiveMap:Oe,normalMapObjectSpace:we&&M.normalMapType===Zf,normalMapTangentSpace:we&&M.normalMapType===Ml,metalnessMap:Ce,roughnessMap:P,anisotropy:T,anisotropyMap:ye,clearcoat:V,clearcoatMap:Ae,clearcoatNormalMap:Ye,clearcoatRoughnessMap:me,dispersion:ie,iridescence:ue,iridescenceMap:Fe,iridescenceThicknessMap:We,sheen:se,sheenColorMap:je,sheenRoughnessMap:Ne,specularMap:nt,specularColorMap:Ze,specularIntensityMap:at,transmission:ke,transmissionMap:G,thicknessMap:Se,gradientMap:te,opaque:M.transparent===!1&&M.blending===Rs&&M.alphaToCoverage===!1,alphaMap:de,alphaTest:Ie,alphaHash:De,combine:M.combine,mapUv:Re&&b(M.map.channel),aoMapUv:L&&b(M.aoMap.channel),lightMapUv:_e&&b(M.lightMap.channel),bumpMapUv:ae&&b(M.bumpMap.channel),normalMapUv:we&&b(M.normalMap.channel),displacementMapUv:xe&&b(M.displacementMap.channel),emissiveMapUv:Oe&&b(M.emissiveMap.channel),metalnessMapUv:Ce&&b(M.metalnessMap.channel),roughnessMapUv:P&&b(M.roughnessMap.channel),anisotropyMapUv:ye&&b(M.anisotropyMap.channel),clearcoatMapUv:Ae&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:We&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:je&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&b(M.sheenRoughnessMap.channel),specularMapUv:nt&&b(M.specularMap.channel),specularColorMapUv:Ze&&b(M.specularColorMap.channel),specularIntensityMapUv:at&&b(M.specularIntensityMap.channel),transmissionMapUv:G&&b(M.transmissionMap.channel),thicknessMapUv:Se&&b(M.thicknessMap.channel),alphaMapUv:de&&b(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(we||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Re||de),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ee,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:he,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:Re&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===pt,decodeVideoTextureEmissive:Oe&&M.emissiveMap.isVideoTexture===!0&&rt.getTransfer(M.emissiveMap.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wt,flipSided:M.side===Xt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:be&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&M.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)y.push(R),y.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(x(y,M),v(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function x(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const y=g[M.type];let R;if(y){const k=Gn[y];R=Nn.clone(k.uniforms)}else R=M.uniforms;return R}function S(M,y){let R;for(let k=0,N=h.length;k<N;k++){const I=h[k];if(I.cacheKey===y){R=I,++R.usedTimes;break}}return R===void 0&&(R=new ev(s,y,M,r),h.push(R)),R}function E(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:A}}function rv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function ov(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function qh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Yh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,b,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function a(u,d,f,g,b,m){const p=o(u,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,b,m){const p=o(u,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||ov),n.length>1&&n.sort(d||qh),i.length>1&&i.sort(d||qh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function av(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Yh,s.set(n,[o])):i>=r.length?(o=new Yh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function cv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Le};break;case"SpotLight":t={position:new D,direction:new D,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function lv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hv=0;function uv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dv(s){const e=new cv,t=lv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,r=new Xe,o=new Xe;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,x=0,v=0,_=0,S=0,E=0,w=0;l.sort(uv);for(let M=0,y=l.length;M<y;M++){const R=l[M],k=R.color,N=R.intensity,I=R.distance,O=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=k.r*N,u+=k.g*N,d+=k.b*N;else if(R.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(R.sh.coefficients[U],N);w++}else if(R.isDirectionalLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,H=t.get(R);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=O,n.directionalShadowMatrix[f]=R.shadow.matrix,x++}n.directional[f]=U,f++}else if(R.isSpotLight){const U=e.get(R);U.position.setFromMatrixPosition(R.matrixWorld),U.color.copy(k).multiplyScalar(N),U.distance=I,U.coneCos=Math.cos(R.angle),U.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),U.decay=R.decay,n.spot[b]=U;const z=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,z.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[b]=z.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,n.spotShadow[b]=H,n.spotShadowMap[b]=O,_++}b++}else if(R.isRectAreaLight){const U=e.get(R);U.color.copy(k).multiplyScalar(N),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=U,m++}else if(R.isPointLight){const U=e.get(R);if(U.color.copy(R.color).multiplyScalar(R.intensity),U.distance=R.distance,U.decay=R.decay,R.castShadow){const z=R.shadow,H=t.get(R);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=U,g++}else if(R.isHemisphereLight){const U=e.get(R);U.skyColor.copy(R.color).multiplyScalar(N),U.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=U,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==b||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==v||A.numSpotShadows!==_||A.numSpotMaps!==S||A.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,A.directionalLength=f,A.pointLength=g,A.spotLength=b,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=v,A.numSpotShadows=_,A.numSpotMaps=S,A.numLightProbes=w,n.version=hv++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const v=l[p];if(v.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(v.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:a,setupView:c,state:n}}function Zh(s){const e=new dv(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function fv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Zh(s),e.set(i,[a])):r>=o.length?(a=new Zh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class qd extends Fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pv extends Fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gv=`uniform sampler2D shadow_pass;
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
}`;function bv(s,e,t){let n=new Tl;const i=new ne,r=new ne,o=new ht,a=new qd({depthPacking:Pd}),c=new pv,l={},h=t.maxTextureSize,u={[pi]:Xt,[Xt]:pi,[wt]:wt},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:mv,fragmentShader:gv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new le(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let p=this.type;this.render=function(E,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),k=s.state;k.setBlending(zt),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=p!==ai&&this.type===ai,I=p===ai&&this.type!==ai;for(let O=0,U=E.length;O<U;O++){const z=E[O],H=z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const q=H.getFrameExtents();if(i.multiply(q),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,H.mapSize.y=r.y)),H.map===null||N===!0||I===!0){const Z=this.type!==ai?{minFilter:Yt,magFilter:Yt}:{};H.map!==null&&H.map.dispose(),H.map=new It(i.x,i.y,Z),H.map.texture.name=z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const W=H.getViewportCount();for(let Z=0;Z<W;Z++){const he=H.getViewport(Z);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),k.viewport(o),H.updateMatrices(z,Z),n=H.getFrustum(),_(w,A,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===ai&&x(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,R)};function x(E,w){const A=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new It(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,A,d,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,A,f,b,null)}function v(E,w,A,M){let y=null;const R=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)y=R;else if(y=A.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=y.uuid,N=w.uuid;let I=l[k];I===void 0&&(I={},l[k]=I);let O=I[N];O===void 0&&(O=y.clone(),I[N]=O,w.addEventListener("dispose",S)),y=O}if(y.visible=w.visible,y.wireframe=w.wireframe,M===ai?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=s.properties.get(y);k.light=A}return y}function _(E,w,A,M,y){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===ai)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const N=e.update(E),I=E.material;if(Array.isArray(I)){const O=N.groups;for(let U=0,z=O.length;U<z;U++){const H=O[U],q=I[H.materialIndex];if(q&&q.visible){const W=v(E,q,M,y);E.onBeforeShadow(s,E,w,A,N,W,H),s.renderBufferDirect(A,null,N,W,E,H),E.onAfterShadow(s,E,w,A,N,W,H)}}}else if(I.visible){const O=v(E,I,M,y);E.onBeforeShadow(s,E,w,A,N,O,null),s.renderBufferDirect(A,null,N,O,E,null),E.onAfterShadow(s,E,w,A,N,O,null)}}const k=E.children;for(let N=0,I=k.length;N<I;N++)_(k[N],w,A,M,y)}function S(E){E.target.removeEventListener("dispose",S);for(const A in l){const M=l[A],y=E.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const vv={[dc]:fc,[pc]:bc,[mc]:vc,[Us]:gc,[fc]:dc,[bc]:pc,[vc]:mc,[gc]:Us};function xv(s,e){function t(){let G=!1;const Se=new ht;let te=null;const de=new ht(0,0,0,0);return{setMask:function(Ie){te!==Ie&&!G&&(s.colorMask(Ie,Ie,Ie,Ie),te=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,De,be,Te,ze){ze===!0&&(Ie*=Te,De*=Te,be*=Te),Se.set(Ie,De,be,Te),de.equals(Se)===!1&&(s.clearColor(Ie,De,be,Te),de.copy(Se))},reset:function(){G=!1,te=null,de.set(-1,0,0,0)}}}function n(){let G=!1,Se=!1,te=null,de=null,Ie=null;return{setReversed:function(De){if(Se!==De){const be=e.get("EXT_clip_control");Se?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT);const Te=Ie;Ie=null,this.setClear(Te)}Se=De},getReversed:function(){return Se},setTest:function(De){De?Y(s.DEPTH_TEST):ee(s.DEPTH_TEST)},setMask:function(De){te!==De&&!G&&(s.depthMask(De),te=De)},setFunc:function(De){if(Se&&(De=vv[De]),de!==De){switch(De){case dc:s.depthFunc(s.NEVER);break;case fc:s.depthFunc(s.ALWAYS);break;case pc:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case mc:s.depthFunc(s.EQUAL);break;case gc:s.depthFunc(s.GEQUAL);break;case bc:s.depthFunc(s.GREATER);break;case vc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=De}},setLocked:function(De){G=De},setClear:function(De){Ie!==De&&(Se&&(De=1-De),s.clearDepth(De),Ie=De)},reset:function(){G=!1,te=null,de=null,Ie=null,Se=!1}}}function i(){let G=!1,Se=null,te=null,de=null,Ie=null,De=null,be=null,Te=null,ze=null;return{setTest:function(re){G||(re?Y(s.STENCIL_TEST):ee(s.STENCIL_TEST))},setMask:function(re){Se!==re&&!G&&(s.stencilMask(re),Se=re)},setFunc:function(re,et,Lt){(te!==re||de!==et||Ie!==Lt)&&(s.stencilFunc(re,et,Lt),te=re,de=et,Ie=Lt)},setOp:function(re,et,Lt){(De!==re||be!==et||Te!==Lt)&&(s.stencilOp(re,et,Lt),De=re,be=et,Te=Lt)},setLocked:function(re){G=re},setClear:function(re){ze!==re&&(s.clearStencil(re),ze=re)},reset:function(){G=!1,Se=null,te=null,de=null,Ie=null,De=null,be=null,Te=null,ze=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,x=null,v=null,_=null,S=null,E=null,w=new Le(0,0,0),A=0,M=!1,y=null,R=null,k=null,N=null,I=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=z>=1):H.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=z>=2);let q=null,W={};const Z=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),ge=new ht().fromArray(Z),K=new ht().fromArray(he);function F(G,Se,te,de){const Ie=new Uint8Array(4),De=s.createTexture();s.bindTexture(G,De),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<te;be++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Se,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Se+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return De}const B={};B[s.TEXTURE_2D]=F(s.TEXTURE_2D,s.TEXTURE_2D,1),B[s.TEXTURE_CUBE_MAP]=F(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[s.TEXTURE_2D_ARRAY]=F(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),B[s.TEXTURE_3D]=F(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(s.DEPTH_TEST),o.setFunc(Us),ae(!1),we($l),Y(s.CULL_FACE),L(zt);function Y(G){h[G]!==!0&&(s.enable(G),h[G]=!0)}function ee(G){h[G]!==!1&&(s.disable(G),h[G]=!1)}function fe(G,Se){return u[G]!==Se?(s.bindFramebuffer(G,Se),u[G]=Se,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Se),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Se),!0):!1}function pe(G,Se){let te=f,de=!1;if(G){te=d.get(Se),te===void 0&&(te=[],d.set(Se,te));const Ie=G.textures;if(te.length!==Ie.length||te[0]!==s.COLOR_ATTACHMENT0){for(let De=0,be=Ie.length;De<be;De++)te[De]=s.COLOR_ATTACHMENT0+De;te.length=Ie.length,de=!0}}else te[0]!==s.BACK&&(te[0]=s.BACK,de=!0);de&&s.drawBuffers(te)}function Re(G){return g!==G?(s.useProgram(G),g=G,!0):!1}const $={[Ln]:s.FUNC_ADD,[Rf]:s.FUNC_SUBTRACT,[Cf]:s.FUNC_REVERSE_SUBTRACT};$[Pf]=s.MIN,$[Df]=s.MAX;const oe={[gr]:s.ZERO,[Lf]:s.ONE,[If]:s.SRC_COLOR,[cc]:s.SRC_ALPHA,[Ff]:s.SRC_ALPHA_SATURATE,[uc]:s.DST_COLOR,[hc]:s.DST_ALPHA,[kf]:s.ONE_MINUS_SRC_COLOR,[lc]:s.ONE_MINUS_SRC_ALPHA,[Uf]:s.ONE_MINUS_DST_COLOR,[Nf]:s.ONE_MINUS_DST_ALPHA,[Of]:s.CONSTANT_COLOR,[zf]:s.ONE_MINUS_CONSTANT_COLOR,[Bf]:s.CONSTANT_ALPHA,[Hf]:s.ONE_MINUS_CONSTANT_ALPHA};function L(G,Se,te,de,Ie,De,be,Te,ze,re){if(G===zt){b===!0&&(ee(s.BLEND),b=!1);return}if(b===!1&&(Y(s.BLEND),b=!0),G!==ud){if(G!==m||re!==M){if((p!==Ln||_!==Ln)&&(s.blendEquation(s.FUNC_ADD),p=Ln,_=Ln),re)switch(G){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bo:s.blendFunc(s.ONE,s.ONE);break;case Jl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ql:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Jl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ql:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}x=null,v=null,S=null,E=null,w.set(0,0,0),A=0,m=G,M=re}return}Ie=Ie||Se,De=De||te,be=be||de,(Se!==p||Ie!==_)&&(s.blendEquationSeparate($[Se],$[Ie]),p=Se,_=Ie),(te!==x||de!==v||De!==S||be!==E)&&(s.blendFuncSeparate(oe[te],oe[de],oe[De],oe[be]),x=te,v=de,S=De,E=be),(Te.equals(w)===!1||ze!==A)&&(s.blendColor(Te.r,Te.g,Te.b,ze),w.copy(Te),A=ze),m=G,M=!1}function _e(G,Se){G.side===wt?ee(s.CULL_FACE):Y(s.CULL_FACE);let te=G.side===Xt;Se&&(te=!te),ae(te),G.blending===Rs&&G.transparent===!1?L(zt):L(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const de=G.stencilWrite;a.setTest(de),de&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Oe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function ae(G){y!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),y=G)}function we(G){G!==Ef?(Y(s.CULL_FACE),G!==R&&(G===$l?s.cullFace(s.BACK):G===Af?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ee(s.CULL_FACE),R=G}function xe(G){G!==k&&(U&&s.lineWidth(G),k=G)}function Oe(G,Se,te){G?(Y(s.POLYGON_OFFSET_FILL),(N!==Se||I!==te)&&(s.polygonOffset(Se,te),N=Se,I=te)):ee(s.POLYGON_OFFSET_FILL)}function Ce(G){G?Y(s.SCISSOR_TEST):ee(s.SCISSOR_TEST)}function P(G){G===void 0&&(G=s.TEXTURE0+O-1),q!==G&&(s.activeTexture(G),q=G)}function T(G,Se,te){te===void 0&&(q===null?te=s.TEXTURE0+O-1:te=q);let de=W[te];de===void 0&&(de={type:void 0,texture:void 0},W[te]=de),(de.type!==G||de.texture!==Se)&&(q!==te&&(s.activeTexture(te),q=te),s.bindTexture(G,Se||B[G]),de.type=G,de.texture=Se)}function V(){const G=W[q];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(G){ge.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ge.copy(G))}function Ne(G){K.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),K.copy(G))}function nt(G,Se){let te=l.get(Se);te===void 0&&(te=new WeakMap,l.set(Se,te));let de=te.get(G);de===void 0&&(de=s.getUniformBlockIndex(Se,G.name),te.set(G,de))}function Ze(G,Se){const de=l.get(Se).get(G);c.get(Se)!==de&&(s.uniformBlockBinding(Se,de,G.__bindingPointIndex),c.set(Se,de))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},q=null,W={},u={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,x=null,v=null,_=null,S=null,E=null,w=new Le(0,0,0),A=0,M=!1,y=null,R=null,k=null,N=null,I=null,ge.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:ee,bindFramebuffer:fe,drawBuffers:pe,useProgram:Re,setBlending:L,setMaterial:_e,setFlipSided:ae,setCullFace:we,setLineWidth:xe,setPolygonOffset:Oe,setScissorTest:Ce,activeTexture:P,bindTexture:T,unbindTexture:V,compressedTexImage2D:ie,compressedTexImage3D:ue,texImage2D:Fe,texImage3D:We,updateUBOMapping:nt,uniformBlockBinding:Ze,texStorage2D:Ye,texStorage3D:me,texSubImage2D:se,texSubImage3D:ke,compressedTexSubImage2D:ye,compressedTexSubImage3D:Ae,scissor:je,viewport:Ne,reset:at}}function Kh(s,e,t,n){const i=_v(n);switch(t){case wd:return s*e;case Td:return s*e;case Ed:return s*e*2;case vl:return s*e/i.components*i.byteLength;case xl:return s*e/i.components*i.byteLength;case Ad:return s*e*2/i.components*i.byteLength;case _l:return s*e*2/i.components*i.byteLength;case Sd:return s*e*3/i.components*i.byteLength;case hn:return s*e*4/i.components*i.byteLength;case yl:return s*e*4/i.components*i.byteLength;case Io:case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case No:case Uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yc:case wc:return Math.max(s,16)*Math.max(e,8)/4;case _c:case Mc:return Math.max(s,8)*Math.max(e,8)/2;case Sc:case Tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fo:case Hc:case Gc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rd:case Vc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wc:case Xc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _v(s){switch(s){case jn:case _d:return{byteLength:1,components:1};case Cr:case yd:case Dt:return{byteLength:2,components:1};case gl:case bl:return{byteLength:2,components:4};case Ki:case ml:case ln:return{byteLength:4,components:1};case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function yv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return f?new OffscreenCanvas(P,T):Lr("canvas")}function b(P,T,V){let ie=1;const ue=Ce(P);if((ue.width>V||ue.height>V)&&(ie=V/Math.max(ue.width,ue.height)),ie<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const se=Math.floor(ie*ue.width),ke=Math.floor(ie*ue.height);u===void 0&&(u=g(se,ke));const ye=T?g(se,ke):u;return ye.width=se,ye.height=ke,ye.getContext("2d").drawImage(P,0,0,se,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+se+"x"+ke+")."),ye}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(P,T,V,ie,ue=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=T;if(T===s.RED&&(V===s.FLOAT&&(se=s.R32F),V===s.HALF_FLOAT&&(se=s.R16F),V===s.UNSIGNED_BYTE&&(se=s.R8)),T===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(se=s.R8UI),V===s.UNSIGNED_SHORT&&(se=s.R16UI),V===s.UNSIGNED_INT&&(se=s.R32UI),V===s.BYTE&&(se=s.R8I),V===s.SHORT&&(se=s.R16I),V===s.INT&&(se=s.R32I)),T===s.RG&&(V===s.FLOAT&&(se=s.RG32F),V===s.HALF_FLOAT&&(se=s.RG16F),V===s.UNSIGNED_BYTE&&(se=s.RG8)),T===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(se=s.RG8UI),V===s.UNSIGNED_SHORT&&(se=s.RG16UI),V===s.UNSIGNED_INT&&(se=s.RG32UI),V===s.BYTE&&(se=s.RG8I),V===s.SHORT&&(se=s.RG16I),V===s.INT&&(se=s.RG32I)),T===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(se=s.RGB8UI),V===s.UNSIGNED_SHORT&&(se=s.RGB16UI),V===s.UNSIGNED_INT&&(se=s.RGB32UI),V===s.BYTE&&(se=s.RGB8I),V===s.SHORT&&(se=s.RGB16I),V===s.INT&&(se=s.RGB32I)),T===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(se=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(se=s.RGBA16UI),V===s.UNSIGNED_INT&&(se=s.RGBA32UI),V===s.BYTE&&(se=s.RGBA8I),V===s.SHORT&&(se=s.RGBA16I),V===s.INT&&(se=s.RGBA32I)),T===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(se=s.RGB9_E5),T===s.RGBA){const ke=ue?Zo:rt.getTransfer(ie);V===s.FLOAT&&(se=s.RGBA32F),V===s.HALF_FLOAT&&(se=s.RGBA16F),V===s.UNSIGNED_BYTE&&(se=ke===pt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(se=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(se=s.RGB5_A1)}return(se===s.R16F||se===s.R32F||se===s.RG16F||se===s.RG32F||se===s.RGBA16F||se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function _(P,T){let V;return P?T===null||T===Ki||T===$i?V=s.DEPTH24_STENCIL8:T===ln?V=s.DEPTH32F_STENCIL8:T===Cr&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ki||T===$i?V=s.DEPTH_COMPONENT24:T===ln?V=s.DEPTH_COMPONENT32F:T===Cr&&(V=s.DEPTH_COMPONENT16),V}function S(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yt&&P.minFilter!==kt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function E(P){const T=P.target;T.removeEventListener("dispose",E),A(T),T.isVideoTexture&&h.delete(T)}function w(P){const T=P.target;T.removeEventListener("dispose",w),y(T)}function A(P){const T=n.get(P);if(T.__webglInit===void 0)return;const V=P.source,ie=d.get(V);if(ie){const ue=ie[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&M(P),Object.keys(ie).length===0&&d.delete(V)}n.remove(P)}function M(P){const T=n.get(P);s.deleteTexture(T.__webglTexture);const V=P.source,ie=d.get(V);delete ie[T.__cacheKey],o.memory.textures--}function y(P){const T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let ue=0;ue<T.__webglFramebuffer[ie].length;ue++)s.deleteFramebuffer(T.__webglFramebuffer[ie][ue]);else s.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)s.deleteFramebuffer(T.__webglFramebuffer[ie]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=P.textures;for(let ie=0,ue=V.length;ie<ue;ie++){const se=n.get(V[ie]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(V[ie])}n.remove(P)}let R=0;function k(){R=0}function N(){const P=R;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),R+=1,P}function I(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function O(P,T){const V=n.get(P);if(P.isVideoTexture&&xe(P),P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,P,T);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+T)}function U(P,T){const V=n.get(P);if(P.version>0&&V.__version!==P.version){K(V,P,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+T)}function z(P,T){const V=n.get(P);if(P.version>0&&V.__version!==P.version){K(V,P,T);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+T)}function H(P,T){const V=n.get(P);if(P.version>0&&V.__version!==P.version){F(V,P,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+T)}const q={[jt]:s.REPEAT,[Wn]:s.CLAMP_TO_EDGE,[Ho]:s.MIRRORED_REPEAT},W={[Yt]:s.NEAREST,[xd]:s.NEAREST_MIPMAP_NEAREST,[br]:s.NEAREST_MIPMAP_LINEAR,[kt]:s.LINEAR,[Lo]:s.LINEAR_MIPMAP_NEAREST,[Un]:s.LINEAR_MIPMAP_LINEAR},Z={[Kf]:s.NEVER,[np]:s.ALWAYS,[$f]:s.LESS,[Dd]:s.LEQUAL,[Jf]:s.EQUAL,[tp]:s.GEQUAL,[Qf]:s.GREATER,[ep]:s.NOTEQUAL};function he(P,T){if(T.type===ln&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===kt||T.magFilter===Lo||T.magFilter===br||T.magFilter===Un||T.minFilter===kt||T.minFilter===Lo||T.minFilter===br||T.minFilter===Un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,q[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,q[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,q[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,W[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,W[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Yt||T.minFilter!==br&&T.minFilter!==Un||T.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ge(P,T){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",E));const ie=T.source;let ue=d.get(ie);ue===void 0&&(ue={},d.set(ie,ue));const se=I(T);if(se!==P.__cacheKey){ue[se]===void 0&&(ue[se]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ue[se].usedTimes++;const ke=ue[P.__cacheKey];ke!==void 0&&(ue[P.__cacheKey].usedTimes--,ke.usedTimes===0&&M(T)),P.__cacheKey=se,P.__webglTexture=ue[se].texture}return V}function K(P,T,V){let ie=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=s.TEXTURE_3D);const ue=ge(P,T),se=T.source;t.bindTexture(ie,P.__webglTexture,s.TEXTURE0+V);const ke=n.get(se);if(se.version!==ke.__version||ue===!0){t.activeTexture(s.TEXTURE0+V);const ye=rt.getPrimaries(rt.workingColorSpace),Ae=T.colorSpace===li?null:rt.getPrimaries(T.colorSpace),Ye=T.colorSpace===li||ye===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let me=b(T.image,!1,i.maxTextureSize);me=Oe(T,me);const Fe=r.convert(T.format,T.colorSpace),We=r.convert(T.type);let je=v(T.internalFormat,Fe,We,T.colorSpace,T.isVideoTexture);he(ie,T);let Ne;const nt=T.mipmaps,Ze=T.isVideoTexture!==!0,at=ke.__version===void 0||ue===!0,G=se.dataReady,Se=S(T,me);if(T.isDepthTexture)je=_(T.format===Ji,T.type),at&&(Ze?t.texStorage2D(s.TEXTURE_2D,1,je,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,je,me.width,me.height,0,Fe,We,null));else if(T.isDataTexture)if(nt.length>0){Ze&&at&&t.texStorage2D(s.TEXTURE_2D,Se,je,nt[0].width,nt[0].height);for(let te=0,de=nt.length;te<de;te++)Ne=nt[te],Ze?G&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Ne.width,Ne.height,Fe,We,Ne.data):t.texImage2D(s.TEXTURE_2D,te,je,Ne.width,Ne.height,0,Fe,We,Ne.data);T.generateMipmaps=!1}else Ze?(at&&t.texStorage2D(s.TEXTURE_2D,Se,je,me.width,me.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,Fe,We,me.data)):t.texImage2D(s.TEXTURE_2D,0,je,me.width,me.height,0,Fe,We,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,je,nt[0].width,nt[0].height,me.depth);for(let te=0,de=nt.length;te<de;te++)if(Ne=nt[te],T.format!==hn)if(Fe!==null)if(Ze){if(G)if(T.layerUpdates.size>0){const Ie=Kh(Ne.width,Ne.height,T.format,T.type);for(const De of T.layerUpdates){const be=Ne.data.subarray(De*Ie/Ne.data.BYTES_PER_ELEMENT,(De+1)*Ie/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,De,Ne.width,Ne.height,1,Fe,be)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Ne.width,Ne.height,me.depth,Fe,Ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,je,Ne.width,Ne.height,me.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,Ne.width,Ne.height,me.depth,Fe,We,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,je,Ne.width,Ne.height,me.depth,0,Fe,We,Ne.data)}else{Ze&&at&&t.texStorage2D(s.TEXTURE_2D,Se,je,nt[0].width,nt[0].height);for(let te=0,de=nt.length;te<de;te++)Ne=nt[te],T.format!==hn?Fe!==null?Ze?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,Ne.width,Ne.height,Fe,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,te,je,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?G&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Ne.width,Ne.height,Fe,We,Ne.data):t.texImage2D(s.TEXTURE_2D,te,je,Ne.width,Ne.height,0,Fe,We,Ne.data)}else if(T.isDataArrayTexture)if(Ze){if(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,je,me.width,me.height,me.depth),G)if(T.layerUpdates.size>0){const te=Kh(me.width,me.height,T.format,T.type);for(const de of T.layerUpdates){const Ie=me.data.subarray(de*te/me.data.BYTES_PER_ELEMENT,(de+1)*te/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,me.width,me.height,1,Fe,We,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Fe,We,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,je,me.width,me.height,me.depth,0,Fe,We,me.data);else if(T.isData3DTexture)Ze?(at&&t.texStorage3D(s.TEXTURE_3D,Se,je,me.width,me.height,me.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Fe,We,me.data)):t.texImage3D(s.TEXTURE_3D,0,je,me.width,me.height,me.depth,0,Fe,We,me.data);else if(T.isFramebufferTexture){if(at)if(Ze)t.texStorage2D(s.TEXTURE_2D,Se,je,me.width,me.height);else{let te=me.width,de=me.height;for(let Ie=0;Ie<Se;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,je,te,de,0,Fe,We,null),te>>=1,de>>=1}}else if(nt.length>0){if(Ze&&at){const te=Ce(nt[0]);t.texStorage2D(s.TEXTURE_2D,Se,je,te.width,te.height)}for(let te=0,de=nt.length;te<de;te++)Ne=nt[te],Ze?G&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,Fe,We,Ne):t.texImage2D(s.TEXTURE_2D,te,je,Fe,We,Ne);T.generateMipmaps=!1}else if(Ze){if(at){const te=Ce(me);t.texStorage2D(s.TEXTURE_2D,Se,je,te.width,te.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,We,me)}else t.texImage2D(s.TEXTURE_2D,0,je,Fe,We,me);m(T)&&p(ie),ke.__version=se.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function F(P,T,V){if(T.image.length!==6)return;const ie=ge(P,T),ue=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+V);const se=n.get(ue);if(ue.version!==se.__version||ie===!0){t.activeTexture(s.TEXTURE0+V);const ke=rt.getPrimaries(rt.workingColorSpace),ye=T.colorSpace===li?null:rt.getPrimaries(T.colorSpace),Ae=T.colorSpace===li||ke===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ye=T.isCompressedTexture||T.image[0].isCompressedTexture,me=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let de=0;de<6;de++)!Ye&&!me?Fe[de]=b(T.image[de],!0,i.maxCubemapSize):Fe[de]=me?T.image[de].image:T.image[de],Fe[de]=Oe(T,Fe[de]);const We=Fe[0],je=r.convert(T.format,T.colorSpace),Ne=r.convert(T.type),nt=v(T.internalFormat,je,Ne,T.colorSpace),Ze=T.isVideoTexture!==!0,at=se.__version===void 0||ie===!0,G=ue.dataReady;let Se=S(T,We);he(s.TEXTURE_CUBE_MAP,T);let te;if(Ye){Ze&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,nt,We.width,We.height);for(let de=0;de<6;de++){te=Fe[de].mipmaps;for(let Ie=0;Ie<te.length;Ie++){const De=te[Ie];T.format!==hn?je!==null?Ze?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,De.width,De.height,je,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,nt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,0,0,De.width,De.height,je,Ne,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie,nt,De.width,De.height,0,je,Ne,De.data)}}}else{if(te=T.mipmaps,Ze&&at){te.length>0&&Se++;const de=Ce(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,nt,de.width,de.height)}for(let de=0;de<6;de++)if(me){Ze?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe[de].width,Fe[de].height,je,Ne,Fe[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,nt,Fe[de].width,Fe[de].height,0,je,Ne,Fe[de].data);for(let Ie=0;Ie<te.length;Ie++){const be=te[Ie].image[de].image;Ze?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,be.width,be.height,je,Ne,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,nt,be.width,be.height,0,je,Ne,be.data)}}else{Ze?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,je,Ne,Fe[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,nt,je,Ne,Fe[de]);for(let Ie=0;Ie<te.length;Ie++){const De=te[Ie];Ze?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,0,0,je,Ne,De.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ie+1,nt,je,Ne,De.image[de])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),se.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function B(P,T,V,ie,ue,se){const ke=r.convert(V.format,V.colorSpace),ye=r.convert(V.type),Ae=v(V.internalFormat,ke,ye,V.colorSpace),Ye=n.get(T),me=n.get(V);if(me.__renderTarget=T,!Ye.__hasExternalTextures){const Fe=Math.max(1,T.width>>se),We=Math.max(1,T.height>>se);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?t.texImage3D(ue,se,Ae,Fe,We,T.depth,0,ke,ye,null):t.texImage2D(ue,se,Ae,Fe,We,0,ke,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),we(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,ue,me.__webglTexture,0,ae(T)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,ue,me.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(P,T,V){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){const ie=T.depthTexture,ue=ie&&ie.isDepthTexture?ie.type:null,se=_(T.stencilBuffer,ue),ke=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=ae(T);we(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,se,T.width,T.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,se,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,se,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,P)}else{const ie=T.textures;for(let ue=0;ue<ie.length;ue++){const se=ie[ue],ke=r.convert(se.format,se.colorSpace),ye=r.convert(se.type),Ae=v(se.internalFormat,ke,ye,se.colorSpace),Ye=ae(T);V&&we(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Ae,T.width,T.height):we(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,Ae,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(T.depthTexture);ie.__renderTarget=T,(!ie.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),O(T.depthTexture,0);const ue=ie.__webglTexture,se=ae(T);if(T.depthTexture.format===Cs)we(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ue,0);else if(T.depthTexture.format===Ji)we(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function fe(P){const T=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const ie=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ie){const ue=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ie.removeEventListener("dispose",ue)};ie.addEventListener("dispose",ue),T.__depthDisposeCallback=ue}T.__boundDepthTexture=ie}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ee(T.__webglFramebuffer,P)}else if(V){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]===void 0)T.__webglDepthbuffer[ie]=s.createRenderbuffer(),Y(T.__webglDepthbuffer[ie],P,!1);else{const ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,se)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Y(T.__webglDepthbuffer,P,!1);else{const ie=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,ue)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(P,T,V){const ie=n.get(P);T!==void 0&&B(ie.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&fe(P)}function Re(P){const T=P.texture,V=n.get(P),ie=n.get(T);P.addEventListener("dispose",w);const ue=P.textures,se=P.isWebGLCubeRenderTarget===!0,ke=ue.length>1;if(ke||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=T.version,o.memory.textures++),se){V.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[ye]=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)V.__webglFramebuffer[ye][Ae]=s.createFramebuffer()}else V.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)V.__webglFramebuffer[ye]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(ke)for(let ye=0,Ae=ue.length;ye<Ae;ye++){const Ye=n.get(ue[ye]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&we(P)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ye=0;ye<ue.length;ye++){const Ae=ue[ye];V.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[ye]);const Ye=r.convert(Ae.format,Ae.colorSpace),me=r.convert(Ae.type),Fe=v(Ae.internalFormat,Ye,me,Ae.colorSpace,P.isXRRenderTarget===!0),We=ae(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Fe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,V.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Y(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),he(s.TEXTURE_CUBE_MAP,T);for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)B(V.__webglFramebuffer[ye][Ae],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ae);else B(V.__webglFramebuffer[ye],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(T)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let ye=0,Ae=ue.length;ye<Ae;ye++){const Ye=ue[ye],me=n.get(Ye);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),he(s.TEXTURE_2D,Ye),B(V.__webglFramebuffer,P,Ye,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),m(Ye)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,ie.__webglTexture),he(ye,T),T.mipmaps&&T.mipmaps.length>0)for(let Ae=0;Ae<T.mipmaps.length;Ae++)B(V.__webglFramebuffer[Ae],P,T,s.COLOR_ATTACHMENT0,ye,Ae);else B(V.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,ye,0);m(T)&&p(ye),t.unbindTexture()}P.depthBuffer&&fe(P)}function $(P){const T=P.textures;for(let V=0,ie=T.length;V<ie;V++){const ue=T[V];if(m(ue)){const se=x(P),ke=n.get(ue).__webglTexture;t.bindTexture(se,ke),p(se),t.unbindTexture()}}}const oe=[],L=[];function _e(P){if(P.samples>0){if(we(P)===!1){const T=P.textures,V=P.width,ie=P.height;let ue=s.COLOR_BUFFER_BIT;const se=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=n.get(P),ye=T.length>1;if(ye)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[Ae]);const Ye=n.get(T[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,V,ie,0,0,V,ie,ue,s.NEAREST),c===!0&&(oe.length=0,L.length=0,oe.push(s.COLOR_ATTACHMENT0+Ae),P.depthBuffer&&P.resolveDepthBuffer===!1&&(oe.push(se),L.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,ke.__webglColorRenderbuffer[Ae]);const Ye=n.get(T[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ae(P){return Math.min(i.maxSamples,P.samples)}function we(P){const T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xe(P){const T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Oe(P,T){const V=P.colorSpace,ie=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==Ft&&V!==li&&(rt.getTransfer(V)===pt?(ie!==hn||ue!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function Ce(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=H,this.rebindTextures=pe,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=B,this.useMultisampledRTT=we}function Mv(s,e){function t(n,i=li){let r;const o=rt.getTransfer(i);if(n===jn)return s.UNSIGNED_BYTE;if(n===gl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Md)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_d)return s.BYTE;if(n===yd)return s.SHORT;if(n===Cr)return s.UNSIGNED_SHORT;if(n===ml)return s.INT;if(n===Ki)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===Dt)return s.HALF_FLOAT;if(n===wd)return s.ALPHA;if(n===Sd)return s.RGB;if(n===hn)return s.RGBA;if(n===Td)return s.LUMINANCE;if(n===Ed)return s.LUMINANCE_ALPHA;if(n===Cs)return s.DEPTH_COMPONENT;if(n===Ji)return s.DEPTH_STENCIL;if(n===vl)return s.RED;if(n===xl)return s.RED_INTEGER;if(n===Ad)return s.RG;if(n===_l)return s.RG_INTEGER;if(n===yl)return s.RGBA_INTEGER;if(n===Io||n===ko||n===No||n===Uo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_c||n===yc||n===Mc||n===wc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sc||n===Tc||n===Ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sc||n===Tc)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc||n===Dc||n===Lc||n===Ic||n===kc||n===Nc||n===Uc||n===Fc||n===Oc||n===zc||n===Bc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Hc||n===Gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rd||n===Vc||n===Wc||n===Xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class wv extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Et extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
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

}`;class Av{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Bt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new St({vertexShader:Tv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rv extends ns{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const b=new Av,m=t.getContextAttributes();let p=null,x=null;const v=[],_=[],S=new ne;let E=null;const w=new sn;w.viewport=new ht;const A=new sn;A.viewport=new ht;const M=[w,A],y=new wv;let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let F=v[K];return F===void 0&&(F=new Ia,v[K]=F),F.getTargetRaySpace()},this.getControllerGrip=function(K){let F=v[K];return F===void 0&&(F=new Ia,v[K]=F),F.getGripSpace()},this.getHand=function(K){let F=v[K];return F===void 0&&(F=new Ia,v[K]=F),F.getHandSpace()};function N(K){const F=_.indexOf(K.inputSource);if(F===-1)return;const B=v[F];B!==void 0&&(B.update(K.inputSource,K.frame,l||o),B.dispatchEvent({type:K.type,data:K.inputSource}))}function I(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",O);for(let K=0;K<v.length;K++){const F=_[K];F!==null&&(_[K]=null,v[K].disconnect(F))}R=null,k=null,b.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,x=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",I),i.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0){const F={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,F),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new It(f.framebufferWidth,f.framebufferHeight,{format:hn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let F=null,B=null,Y=null;m.depth&&(Y=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=m.stencil?Ji:Cs,B=m.stencil?$i:Ki);const ee={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new It(d.textureWidth,d.textureHeight,{format:hn,type:jn,depthTexture:new Al(d.textureWidth,d.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ge.setContext(i),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function O(K){for(let F=0;F<K.removed.length;F++){const B=K.removed[F],Y=_.indexOf(B);Y>=0&&(_[Y]=null,v[Y].disconnect(B))}for(let F=0;F<K.added.length;F++){const B=K.added[F];let Y=_.indexOf(B);if(Y===-1){for(let fe=0;fe<v.length;fe++)if(fe>=_.length){_.push(B),Y=fe;break}else if(_[fe]===null){_[fe]=B,Y=fe;break}if(Y===-1)break}const ee=v[Y];ee&&ee.connect(B)}}const U=new D,z=new D;function H(K,F,B){U.setFromMatrixPosition(F.matrixWorld),z.setFromMatrixPosition(B.matrixWorld);const Y=U.distanceTo(z),ee=F.projectionMatrix.elements,fe=B.projectionMatrix.elements,pe=ee[14]/(ee[10]-1),Re=ee[14]/(ee[10]+1),$=(ee[9]+1)/ee[5],oe=(ee[9]-1)/ee[5],L=(ee[8]-1)/ee[0],_e=(fe[8]+1)/fe[0],ae=pe*L,we=pe*_e,xe=Y/(-L+_e),Oe=xe*-L;if(F.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Oe),K.translateZ(xe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ee[10]===-1)K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const Ce=pe+xe,P=Re+xe,T=ae-Oe,V=we+(Y-Oe),ie=$*Re/P*Ce,ue=oe*Re/P*Ce;K.projectionMatrix.makePerspective(T,V,ie,ue,Ce,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function q(K,F){F===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(F.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let F=K.near,B=K.far;b.texture!==null&&(b.depthNear>0&&(F=b.depthNear),b.depthFar>0&&(B=b.depthFar)),y.near=A.near=w.near=F,y.far=A.far=w.far=B,(R!==y.near||k!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,k=y.far),w.layers.mask=K.layers.mask|2,A.layers.mask=K.layers.mask|4,y.layers.mask=w.layers.mask|A.layers.mask;const Y=K.parent,ee=y.cameras;q(y,Y);for(let fe=0;fe<ee.length;fe++)q(ee[fe],Y);ee.length===2?H(y,w,A):y.projectionMatrix.copy(w.projectionMatrix),W(K,y,Y)};function W(K,F,B){B===null?K.matrix.copy(F.matrixWorld):(K.matrix.copy(B.matrixWorld),K.matrix.invert(),K.matrix.multiply(F.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let Z=null;function he(K,F){if(h=F.getViewerPose(l||o),g=F,h!==null){const B=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Y=!1;B.length!==y.cameras.length&&(y.cameras.length=0,Y=!0);for(let fe=0;fe<B.length;fe++){const pe=B[fe];let Re=null;if(f!==null)Re=f.getViewport(pe);else{const oe=u.getViewSubImage(d,pe);Re=oe.viewport,fe===0&&(e.setRenderTargetTextures(x,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(x))}let $=M[fe];$===void 0&&($=new sn,$.layers.enable(fe),$.viewport=new ht,M[fe]=$),$.matrix.fromArray(pe.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(pe.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Re.x,Re.y,Re.width,Re.height),fe===0&&(y.matrix.copy($.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Y===!0&&y.cameras.push($)}const ee=i.enabledFeatures;if(ee&&ee.includes("depth-sensing")){const fe=u.getDepthInformation(B[0]);fe&&fe.isValid&&fe.texture&&b.init(e,fe,i.renderState)}}for(let B=0;B<v.length;B++){const Y=_[B],ee=v[B];Y!==null&&ee!==void 0&&ee.update(Y,F,l||o)}Z&&Z(K,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),g=null}const ge=new Gd;ge.setAnimationLoop(he),this.setAnimationLoop=function(K){Z=K},this.dispose=function(){}}}const Hi=new zn,Cv=new Xe;function Pv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,_=x.envMapRotation;v&&(m.envMap.value=v,Hi.copy(_),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(Cv.makeRotationFromEuler(Hi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const _=v.program;n.uniformBlockBinding(x,_)}function l(x,v){let _=i[x.id];_===void 0&&(g(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(x,S);const E=e.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){const v=u();x.__bindingPointIndex=v;const _=s.createBuffer(),S=x.__size,E=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,S,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],_=x.uniforms,S=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,w=_.length;E<w;E++){const A=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,y=A.length;M<y;M++){const R=A[M];if(f(R,E,M,S)===!0){const k=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let I=0;for(let O=0;O<N.length;O++){const U=N[O],z=b(U);typeof U=="number"||typeof U=="boolean"?(R.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,k+I,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=0,R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=0,R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=0):(U.toArray(R.__data,I),I+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,v,_,S){const E=x.value,w=v+"_"+_;if(S[w]===void 0)return typeof E=="number"||typeof E=="boolean"?S[w]=E:S[w]=E.clone(),!0;{const A=S[w];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return S[w]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(x){const v=x.uniforms;let _=0;const S=16;for(let w=0,A=v.length;w<A;w++){const M=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,R=M.length;y<R;y++){const k=M[y],N=Array.isArray(k.value)?k.value:[k.value];for(let I=0,O=N.length;I<O;I++){const U=N[I],z=b(U),H=_%S,q=H%z.boundary,W=H+q;_+=q,W!==0&&S-W<z.storage&&(_+=S-W),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=z.storage}}}const E=_%S;return E>0&&(_+=S-E),x.__size=_,x.__cache={},this}function b(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Lv{constructor(e={}){const{canvas:t=xp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,p=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this.toneMapping=Pi,this.toneMappingExposure=1;const _=this;let S=!1,E=0,w=0,A=null,M=-1,y=null;const R=new ht,k=new ht;let N=null;const I=new Le(0);let O=0,U=t.width,z=t.height,H=1,q=null,W=null;const Z=new ht(0,0,U,z),he=new ht(0,0,U,z);let ge=!1;const K=new Tl;let F=!1,B=!1;const Y=new Xe,ee=new Xe,fe=new D,pe=new ht,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function oe(){return A===null?H:1}let L=n;function _e(C,X){return t.getContext(C,X)}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dl}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",De,!1),L===null){const X="webgl2";if(L=_e(X,C),L===null)throw _e(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ae,we,xe,Oe,Ce,P,T,V,ie,ue,se,ke,ye,Ae,Ye,me,Fe,We,je,Ne,nt,Ze,at,G;function Se(){ae=new Og(L),ae.init(),Ze=new Mv(L,ae),we=new Lg(L,ae,e,Ze),xe=new xv(L,ae),we.reverseDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),Oe=new Hg(L),Ce=new rv,P=new yv(L,ae,xe,Ce,we,Ze,Oe),T=new kg(_),V=new Fg(_),ie=new Yp(L),at=new Pg(L,ie),ue=new zg(L,ie,Oe,at),se=new Vg(L,ue,ie,Oe),je=new Gg(L,we,P),me=new Ig(Ce),ke=new sv(_,T,V,ae,we,at,me),ye=new Pv(_,Ce),Ae=new av,Ye=new fv(ae),We=new Cg(_,T,V,xe,se,f,c),Fe=new bv(_,se,we),G=new Dv(L,Oe,we,xe),Ne=new Dg(L,ae,Oe),nt=new Bg(L,ae,Oe),Oe.programs=ke.programs,_.capabilities=we,_.extensions=ae,_.properties=Ce,_.renderLists=Ae,_.shadowMap=Fe,_.state=xe,_.info=Oe}Se();const te=new Rv(_,L);this.xr=te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(U,z,!1))},this.getSize=function(C){return C.set(U,z)},this.setSize=function(C,X,J=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,z=X,t.width=Math.floor(C*H),t.height=Math.floor(X*H),J===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(U*H,z*H).floor()},this.setDrawingBufferSize=function(C,X,J){U=C,z=X,H=J,t.width=Math.floor(C*J),t.height=Math.floor(X*J),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(Z)},this.setViewport=function(C,X,J,Q){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,X,J,Q),xe.viewport(R.copy(Z).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(he)},this.setScissor=function(C,X,J,Q){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,X,J,Q),xe.scissor(k.copy(he).multiplyScalar(H).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(C){xe.setScissorTest(ge=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){W=C},this.getClearColor=function(C){return C.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(C=!0,X=!0,J=!0){let Q=0;if(C){let j=!1;if(A!==null){const Me=A.texture.format;j=Me===yl||Me===_l||Me===xl}if(j){const Me=A.texture.type,Ue=Me===jn||Me===Ki||Me===Cr||Me===$i||Me===gl||Me===bl,Be=We.getClearColor(),He=We.getClearAlpha(),Ke=Be.r,Je=Be.g,Ge=Be.b;Ue?(g[0]=Ke,g[1]=Je,g[2]=Ge,g[3]=He,L.clearBufferuiv(L.COLOR,0,g)):(b[0]=Ke,b[1]=Je,b[2]=Ge,b[3]=He,L.clearBufferiv(L.COLOR,0,b))}else Q|=L.COLOR_BUFFER_BIT}X&&(Q|=L.DEPTH_BUFFER_BIT),J&&(Q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ae.dispose(),Ye.dispose(),Ce.dispose(),T.dispose(),V.dispose(),se.dispose(),at.dispose(),G.dispose(),ke.dispose(),te.dispose(),te.removeEventListener("sessionstart",Ni),te.removeEventListener("sessionend",er),Jt.stop()};function de(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Oe.autoReset,X=Fe.enabled,J=Fe.autoUpdate,Q=Fe.needsUpdate,j=Fe.type;Se(),Oe.autoReset=C,Fe.enabled=X,Fe.autoUpdate=J,Fe.needsUpdate=Q,Fe.type=j}function De(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function be(C){const X=C.target;X.removeEventListener("dispose",be),Te(X)}function Te(C){ze(C),Ce.remove(C)}function ze(C){const X=Ce.get(C).programs;X!==void 0&&(X.forEach(function(J){ke.releaseProgram(J)}),C.isShaderMaterial&&ke.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,J,Q,j,Me){X===null&&(X=Re);const Ue=j.isMesh&&j.matrixWorld.determinant()<0,Be=wf(C,X,J,Q,j);xe.setMaterial(Q,Ue);let He=J.index,Ke=1;if(Q.wireframe===!0){if(He=ue.getWireframeAttribute(J),He===void 0)return;Ke=2}const Je=J.drawRange,Ge=J.attributes.position;let ct=Je.start*Ke,_t=(Je.start+Je.count)*Ke;Me!==null&&(ct=Math.max(ct,Me.start*Ke),_t=Math.min(_t,(Me.start+Me.count)*Ke)),He!==null?(ct=Math.max(ct,0),_t=Math.min(_t,He.count)):Ge!=null&&(ct=Math.max(ct,0),_t=Math.min(_t,Ge.count));const yt=_t-ct;if(yt<0||yt===1/0)return;at.setup(j,Q,Be,J,He);let on,dt=Ne;if(He!==null&&(on=ie.get(He),dt=nt,dt.setIndex(on)),j.isMesh)Q.wireframe===!0?(xe.setLineWidth(Q.wireframeLinewidth*oe()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(j.isLine){let Ve=Q.linewidth;Ve===void 0&&(Ve=1),xe.setLineWidth(Ve*oe()),j.isLineSegments?dt.setMode(L.LINES):j.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else j.isPoints?dt.setMode(L.POINTS):j.isSprite&&dt.setMode(L.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)dt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))dt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ve=j._multiDrawStarts,Qn=j._multiDrawCounts,ft=j._multiDrawCount,Tn=He?ie.get(He).bytesPerElement:1,os=Ce.get(Q).currentProgram.getUniforms();for(let un=0;un<ft;un++)os.setValue(L,"_gl_DrawID",un),dt.render(Ve[un]/Tn,Qn[un])}else if(j.isInstancedMesh)dt.renderInstances(ct,yt,j.count);else if(J.isInstancedBufferGeometry){const Ve=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Qn=Math.min(J.instanceCount,Ve);dt.renderInstances(ct,yt,Qn)}else dt.render(ct,yt)};function re(C,X,J){C.transparent===!0&&C.side===wt&&C.forceSinglePass===!1?(C.side=Xt,C.needsUpdate=!0,jr(C,X,J),C.side=pi,C.needsUpdate=!0,jr(C,X,J),C.side=wt):jr(C,X,J)}this.compile=function(C,X,J=null){J===null&&(J=C),p=Ye.get(J),p.init(X),v.push(p),J.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),C!==J&&C.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights();const Q=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Me=j.material;if(Me)if(Array.isArray(Me))for(let Ue=0;Ue<Me.length;Ue++){const Be=Me[Ue];re(Be,J,j),Q.add(Be)}else re(Me,J,j),Q.add(Me)}),v.pop(),p=null,Q},this.compileAsync=function(C,X,J=null){const Q=this.compile(C,X,J);return new Promise(j=>{function Me(){if(Q.forEach(function(Ue){Ce.get(Ue).currentProgram.isReady()&&Q.delete(Ue)}),Q.size===0){j(C);return}setTimeout(Me,10)}ae.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let et=null;function Lt(C){et&&et(C)}function Ni(){Jt.stop()}function er(){Jt.start()}const Jt=new Gd;Jt.setAnimationLoop(Lt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(C){et=C,te.setAnimationLoop(C),C===null?Jt.stop():Jt.start()},te.addEventListener("sessionstart",Ni),te.addEventListener("sessionend",er),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(X),X=te.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,X,A),p=Ye.get(C,v.length),p.init(X),v.push(p),ee.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K.setFromProjectionMatrix(ee),B=this.localClippingEnabled,F=me.init(this.clippingPlanes,B),m=Ae.get(C,x.length),m.init(),x.push(m),te.enabled===!0&&te.isPresenting===!0){const Me=_.xr.getDepthSensingMesh();Me!==null&&Jn(Me,X,-1/0,_.sortObjects)}Jn(C,X,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(q,W),$=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,$&&We.addToRenderList(m,C),this.info.render.frame++,F===!0&&me.beginShadows();const J=p.state.shadowsArray;Fe.render(J,C,X),F===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,j=m.transmissive;if(p.setupLights(),X.isArrayCamera){const Me=X.cameras;if(j.length>0)for(let Ue=0,Be=Me.length;Ue<Be;Ue++){const He=Me[Ue];rs(Q,j,C,He)}$&&We.render(C);for(let Ue=0,Be=Me.length;Ue<Be;Ue++){const He=Me[Ue];ss(m,C,He,He.viewport)}}else j.length>0&&rs(Q,j,C,X),$&&We.render(C),ss(m,C,X);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,X),at.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],F===!0&&me.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Jn(C,X,J,Q){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||K.intersectsSprite(C)){Q&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ee);const Ue=se.update(C),Be=C.material;Be.visible&&m.push(C,Ue,Be,J,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||K.intersectsObject(C))){const Ue=se.update(C),Be=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pe.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),pe.copy(Ue.boundingSphere.center)),pe.applyMatrix4(C.matrixWorld).applyMatrix4(ee)),Array.isArray(Be)){const He=Ue.groups;for(let Ke=0,Je=He.length;Ke<Je;Ke++){const Ge=He[Ke],ct=Be[Ge.materialIndex];ct&&ct.visible&&m.push(C,Ue,ct,J,pe.z,Ge)}}else Be.visible&&m.push(C,Ue,Be,J,pe.z,null)}}const Me=C.children;for(let Ue=0,Be=Me.length;Ue<Be;Ue++)Jn(Me[Ue],X,J,Q)}function ss(C,X,J,Q){const j=C.opaque,Me=C.transmissive,Ue=C.transparent;p.setupLightsView(J),F===!0&&me.setGlobalState(_.clippingPlanes,J),Q&&xe.viewport(R.copy(Q)),j.length>0&&Xr(j,X,J),Me.length>0&&Xr(Me,X,J),Ue.length>0&&Xr(Ue,X,J),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function rs(C,X,J,Q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new It(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Dt:jn,minFilter:Un,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Me=p.state.transmissionRenderTarget[Q.id],Ue=Q.viewport||R;Me.setSize(Ue.z,Ue.w);const Be=_.getRenderTarget();_.setRenderTarget(Me),_.getClearColor(I),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear(),$&&We.render(J);const He=_.toneMapping;_.toneMapping=Pi;const Ke=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),F===!0&&me.setGlobalState(_.clippingPlanes,Q),Xr(C,J,Q),P.updateMultisampleRenderTarget(Me),P.updateRenderTargetMipmap(Me),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ge=0,ct=X.length;Ge<ct;Ge++){const _t=X[Ge],yt=_t.object,on=_t.geometry,dt=_t.material,Ve=_t.group;if(dt.side===wt&&yt.layers.test(Q.layers)){const Qn=dt.side;dt.side=Xt,dt.needsUpdate=!0,ql(yt,J,Q,on,dt,Ve),dt.side=Qn,dt.needsUpdate=!0,Je=!0}}Je===!0&&(P.updateMultisampleRenderTarget(Me),P.updateRenderTargetMipmap(Me))}_.setRenderTarget(Be),_.setClearColor(I,O),Ke!==void 0&&(Q.viewport=Ke),_.toneMapping=He}function Xr(C,X,J){const Q=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Me=C.length;j<Me;j++){const Ue=C[j],Be=Ue.object,He=Ue.geometry,Ke=Q===null?Ue.material:Q,Je=Ue.group;Be.layers.test(J.layers)&&ql(Be,X,J,He,Ke,Je)}}function ql(C,X,J,Q,j,Me){C.onBeforeRender(_,X,J,Q,j,Me),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(_,X,J,Q,C,Me),j.transparent===!0&&j.side===wt&&j.forceSinglePass===!1?(j.side=Xt,j.needsUpdate=!0,_.renderBufferDirect(J,X,Q,j,C,Me),j.side=pi,j.needsUpdate=!0,_.renderBufferDirect(J,X,Q,j,C,Me),j.side=wt):_.renderBufferDirect(J,X,Q,j,C,Me),C.onAfterRender(_,X,J,Q,j,Me)}function jr(C,X,J){X.isScene!==!0&&(X=Re);const Q=Ce.get(C),j=p.state.lights,Me=p.state.shadowsArray,Ue=j.state.version,Be=ke.getParameters(C,j.state,Me,X,J),He=ke.getProgramCacheKey(Be);let Ke=Q.programs;Q.environment=C.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(C.isMeshStandardMaterial?V:T).get(C.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",be),Ke=new Map,Q.programs=Ke);let Je=Ke.get(He);if(Je!==void 0){if(Q.currentProgram===Je&&Q.lightsStateVersion===Ue)return Zl(C,Be),Je}else Be.uniforms=ke.getUniforms(C),C.onBeforeCompile(Be,_),Je=ke.acquireProgram(Be,He),Ke.set(He,Je),Q.uniforms=Be.uniforms;const Ge=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=me.uniform),Zl(C,Be),Q.needsLights=Tf(C),Q.lightsStateVersion=Ue,Q.needsLights&&(Ge.ambientLightColor.value=j.state.ambient,Ge.lightProbe.value=j.state.probe,Ge.directionalLights.value=j.state.directional,Ge.directionalLightShadows.value=j.state.directionalShadow,Ge.spotLights.value=j.state.spot,Ge.spotLightShadows.value=j.state.spotShadow,Ge.rectAreaLights.value=j.state.rectArea,Ge.ltc_1.value=j.state.rectAreaLTC1,Ge.ltc_2.value=j.state.rectAreaLTC2,Ge.pointLights.value=j.state.point,Ge.pointLightShadows.value=j.state.pointShadow,Ge.hemisphereLights.value=j.state.hemi,Ge.directionalShadowMap.value=j.state.directionalShadowMap,Ge.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ge.spotShadowMap.value=j.state.spotShadowMap,Ge.spotLightMatrix.value=j.state.spotLightMatrix,Ge.spotLightMap.value=j.state.spotLightMap,Ge.pointShadowMap.value=j.state.pointShadowMap,Ge.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=Je,Q.uniformsList=null,Je}function Yl(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Oo.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Zl(C,X){const J=Ce.get(C);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function wf(C,X,J,Q,j){X.isScene!==!0&&(X=Re),P.resetTextureUnits();const Me=X.fog,Ue=Q.isMeshStandardMaterial?X.environment:null,Be=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ft,He=(Q.isMeshStandardMaterial?V:T).get(Q.envMap||Ue),Ke=Q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ge=!!J.morphAttributes.position,ct=!!J.morphAttributes.normal,_t=!!J.morphAttributes.color;let yt=Pi;Q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yt=_.toneMapping);const on=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dt=on!==void 0?on.length:0,Ve=Ce.get(Q),Qn=p.state.lights;if(F===!0&&(B===!0||C!==y)){const gn=C===y&&Q.id===M;me.setState(Q,C,gn)}let ft=!1;Q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Qn.state.version||Ve.outputColorSpace!==Be||j.isBatchedMesh&&Ve.batching===!1||!j.isBatchedMesh&&Ve.batching===!0||j.isBatchedMesh&&Ve.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ve.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ve.instancing===!1||!j.isInstancedMesh&&Ve.instancing===!0||j.isSkinnedMesh&&Ve.skinning===!1||!j.isSkinnedMesh&&Ve.skinning===!0||j.isInstancedMesh&&Ve.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ve.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ve.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ve.instancingMorph===!1&&j.morphTexture!==null||Ve.envMap!==He||Q.fog===!0&&Ve.fog!==Me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==me.numPlanes||Ve.numIntersection!==me.numIntersection)||Ve.vertexAlphas!==Ke||Ve.vertexTangents!==Je||Ve.morphTargets!==Ge||Ve.morphNormals!==ct||Ve.morphColors!==_t||Ve.toneMapping!==yt||Ve.morphTargetsCount!==dt)&&(ft=!0):(ft=!0,Ve.__version=Q.version);let Tn=Ve.currentProgram;ft===!0&&(Tn=jr(Q,X,j));let os=!1,un=!1,tr=!1;const Mt=Tn.getUniforms(),Bn=Ve.uniforms;if(xe.useProgram(Tn.program)&&(os=!0,un=!0,tr=!0),Q.id!==M&&(M=Q.id,un=!0),os||y!==C){xe.buffers.depth.getReversed()?(Y.copy(C.projectionMatrix),yp(Y),Mp(Y),Mt.setValue(L,"projectionMatrix",Y)):Mt.setValue(L,"projectionMatrix",C.projectionMatrix),Mt.setValue(L,"viewMatrix",C.matrixWorldInverse);const bi=Mt.map.cameraPosition;bi!==void 0&&bi.setValue(L,fe.setFromMatrixPosition(C.matrixWorld)),we.logarithmicDepthBuffer&&Mt.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Mt.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,un=!0,tr=!0)}if(j.isSkinnedMesh){Mt.setOptional(L,j,"bindMatrix"),Mt.setOptional(L,j,"bindMatrixInverse");const gn=j.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Mt.setValue(L,"boneTexture",gn.boneTexture,P))}j.isBatchedMesh&&(Mt.setOptional(L,j,"batchingTexture"),Mt.setValue(L,"batchingTexture",j._matricesTexture,P),Mt.setOptional(L,j,"batchingIdTexture"),Mt.setValue(L,"batchingIdTexture",j._indirectTexture,P),Mt.setOptional(L,j,"batchingColorTexture"),j._colorsTexture!==null&&Mt.setValue(L,"batchingColorTexture",j._colorsTexture,P));const nr=J.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&je.update(j,J,Tn),(un||Ve.receiveShadow!==j.receiveShadow)&&(Ve.receiveShadow=j.receiveShadow,Mt.setValue(L,"receiveShadow",j.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Bn.envMap.value=He,Bn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Bn.envMapIntensity.value=X.environmentIntensity),un&&(Mt.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&Sf(Bn,tr),Me&&Q.fog===!0&&ye.refreshFogUniforms(Bn,Me),ye.refreshMaterialUniforms(Bn,Q,H,z,p.state.transmissionRenderTarget[C.id]),Oo.upload(L,Yl(Ve),Bn,P)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Oo.upload(L,Yl(Ve),Bn,P),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Mt.setValue(L,"center",j.center),Mt.setValue(L,"modelViewMatrix",j.modelViewMatrix),Mt.setValue(L,"normalMatrix",j.normalMatrix),Mt.setValue(L,"modelMatrix",j.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const gn=Q.uniformsGroups;for(let bi=0,vi=gn.length;bi<vi;bi++){const Kl=gn[bi];G.update(Kl,Tn),G.bind(Kl,Tn)}}return Tn}function Sf(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Tf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,X,J){Ce.get(C.texture).__webglTexture=X,Ce.get(C.depthTexture).__webglTexture=J;const Q=Ce.get(C);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=J===void 0,Q.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,X){const J=Ce.get(C);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,J=0){A=C,E=X,w=J;let Q=!0,j=null,Me=!1,Ue=!1;if(C){const He=Ce.get(C);if(He.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(L.FRAMEBUFFER,null),Q=!1;else if(He.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(He.__hasExternalTextures)P.rebindTextures(C,Ce.get(C.texture).__webglTexture,Ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ge=C.depthTexture;if(He.__boundDepthTexture!==Ge){if(Ge!==null&&Ce.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const Ke=C.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ue=!0);const Je=Ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?j=Je[X][J]:j=Je[X],Me=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?j=Ce.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?j=Je[J]:j=Je,R.copy(C.viewport),k.copy(C.scissor),N=C.scissorTest}else R.copy(Z).multiplyScalar(H).floor(),k.copy(he).multiplyScalar(H).floor(),N=ge;if(xe.bindFramebuffer(L.FRAMEBUFFER,j)&&Q&&xe.drawBuffers(C,j),xe.viewport(R),xe.scissor(k),xe.setScissorTest(N),Me){const He=Ce.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,J)}else if(Ue){const He=Ce.get(C.texture),Ke=X||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,He.__webglTexture,J||0,Ke)}M=-1},this.readRenderTargetPixels=function(C,X,J,Q,j,Me,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){xe.bindFramebuffer(L.FRAMEBUFFER,Be);try{const He=C.texture,Ke=He.format,Je=He.type;if(!we.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-Q&&J>=0&&J<=C.height-j&&L.readPixels(X,J,Q,j,Ze.convert(Ke),Ze.convert(Je),Me)}finally{const He=A!==null?Ce.get(A).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(C,X,J,Q,j,Me,Ue){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){const He=C.texture,Ke=He.format,Je=He.type;if(!we.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=C.width-Q&&J>=0&&J<=C.height-j){xe.bindFramebuffer(L.FRAMEBUFFER,Be);const Ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.bufferData(L.PIXEL_PACK_BUFFER,Me.byteLength,L.STREAM_READ),L.readPixels(X,J,Q,j,Ze.convert(Ke),Ze.convert(Je),0);const ct=A!==null?Ce.get(A).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,ct);const _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await _p(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Me),L.deleteBuffer(Ge),L.deleteSync(_t),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,X=null,J=0){C.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,C=arguments[1]);const Q=Math.pow(2,-J),j=Math.floor(C.image.width*Q),Me=Math.floor(C.image.height*Q),Ue=X!==null?X.x:0,Be=X!==null?X.y:0;P.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,Ue,Be,j,Me),xe.unbindTexture()},this.copyTextureToTexture=function(C,X,J=null,Q=null,j=0){C.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,C=arguments[1],X=arguments[2],j=arguments[3]||0,J=null);let Me,Ue,Be,He,Ke,Je,Ge,ct,_t;const yt=C.isCompressedTexture?C.mipmaps[j]:C.image;J!==null?(Me=J.max.x-J.min.x,Ue=J.max.y-J.min.y,Be=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,Ke=J.min.y,Je=J.isBox3?J.min.z:0):(Me=yt.width,Ue=yt.height,Be=yt.depth||1,He=0,Ke=0,Je=0),Q!==null?(Ge=Q.x,ct=Q.y,_t=Q.z):(Ge=0,ct=0,_t=0);const on=Ze.convert(X.format),dt=Ze.convert(X.type);let Ve;X.isData3DTexture?(P.setTexture3D(X,0),Ve=L.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),Ve=L.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),Ve=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,X.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,X.unpackAlignment);const Qn=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Tn=L.getParameter(L.UNPACK_SKIP_PIXELS),os=L.getParameter(L.UNPACK_SKIP_ROWS),un=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,He),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Je);const tr=C.isDataArrayTexture||C.isData3DTexture,Mt=X.isDataArrayTexture||X.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Bn=Ce.get(C),nr=Ce.get(X),gn=Ce.get(Bn.__renderTarget),bi=Ce.get(nr.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,gn.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let vi=0;vi<Be;vi++)tr&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(C).__webglTexture,j,Je+vi),C.isDepthTexture?(Mt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(X).__webglTexture,j,_t+vi),L.blitFramebuffer(He,Ke,Me,Ue,Ge,ct,Me,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST)):Mt?L.copyTexSubImage3D(Ve,j,Ge,ct,_t+vi,He,Ke,Me,Ue):L.copyTexSubImage2D(Ve,j,Ge,ct,_t+vi,He,Ke,Me,Ue);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Mt?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Ve,j,Ge,ct,_t,Me,Ue,Be,on,dt,yt.data):X.isCompressedArrayTexture?L.compressedTexSubImage3D(Ve,j,Ge,ct,_t,Me,Ue,Be,on,yt.data):L.texSubImage3D(Ve,j,Ge,ct,_t,Me,Ue,Be,on,dt,yt):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,j,Ge,ct,Me,Ue,on,dt,yt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,j,Ge,ct,yt.width,yt.height,on,yt.data):L.texSubImage2D(L.TEXTURE_2D,j,Ge,ct,Me,Ue,on,dt,yt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tn),L.pixelStorei(L.UNPACK_SKIP_ROWS,os),L.pixelStorei(L.UNPACK_SKIP_IMAGES,un),j===0&&X.generateMipmaps&&L.generateMipmap(Ve),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,X,J=null,Q=null,j=0){return C.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,Q=arguments[1]||null,C=arguments[2],X=arguments[3],j=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,J,Q,j)},this.initRenderTarget=function(C){Ce.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){E=0,w=0,A=null,xe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}class Ds{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new Ds(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yd extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Iv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new D;class Rl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $h=new D,Jh=new ht,Qh=new ht,kv=new D,eu=new Xe,mo=new D,ka=new Zn,tu=new Xe,Na=new qs;class Nv extends le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=eh,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingBox.expandByPoint(mo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Zn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,mo),this.boundingSphere.expandByPoint(mo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(i),e.ray.intersectsSphere(ka)!==!1&&(tu.copy(i).invert(),Na.copy(e.ray).applyMatrix4(tu),!(this.boundingBox!==null&&Na.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Na)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Jh.fromBufferAttribute(i.attributes.skinIndex,e),Qh.fromBufferAttribute(i.attributes.skinWeight,e),$h.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Qh.getComponent(r);if(o!==0){const a=Jh.getComponent(r);eu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(kv.copy($h).applyMatrix4(eu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zd extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zs extends Bt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Yt,h=Yt,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nu=new Xe,Uv=new Xe;class Cl{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Uv;nu.multiplyMatrices(a,t[r]),nu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Cl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Zs(t,e,e,hn,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Zd),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Zc extends qt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new Xe,iu=new Xe,go=[],su=new mn,Fv=new Xe,ar=new le,cr=new Zn;class Pl extends le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),su.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(su)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),cr.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),e.ray.intersectsSphere(cr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ys),iu.multiplyMatrices(n,ys),ar.matrixWorld=iu,ar.raycast(e,go);for(let o=0,a=go.length;o<a;o++){const c=go[o];c.instanceId=r,c.object=this,t.push(c)}go.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zs(new Float32Array(i*this.count),i,this.count,vl,ln));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Kd extends Fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vo=new D,Wo=new D,ru=new Xe,lr=new qs,bo=new Zn,Ua=new D,ou=new D;class Dl extends At{constructor(e=new Vt,t=new Kd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Vo.fromBufferAttribute(t,i-1),Wo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vo.distanceTo(Wo);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(i),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;ru.copy(i).invert(),lr.copy(e.ray).applyMatrix4(ru);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=f,m=g-1;b<m;b+=l){const p=h.getX(b),x=h.getX(b+1),v=vo(this,e,lr,c,p,x);v&&t.push(v)}if(this.isLineLoop){const b=h.getX(g-1),m=h.getX(f),p=vo(this,e,lr,c,b,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let b=f,m=g-1;b<m;b+=l){const p=vo(this,e,lr,c,b,b+1);p&&t.push(p)}if(this.isLineLoop){const b=vo(this,e,lr,c,g-1,f);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vo(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Vo.fromBufferAttribute(o,i),Wo.fromBufferAttribute(o,r),t.distanceSqToSegment(Vo,Wo,Ua,ou)>n)return;Ua.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ua);if(!(c<e.near||c>e.far))return{distance:c,point:ou.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const au=new D,cu=new D;class Ov extends Dl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)au.fromBufferAttribute(t,i),cu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+au.distanceTo(cu);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zv extends Dl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $d extends Fn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lu=new Xe,Kc=new qs,xo=new Zn,_o=new D;class Bv extends At{constructor(e=new Vt,t=new $d){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;lu.copy(i).invert(),Kc.copy(e.ray).applyMatrix4(lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,b=f;g<b;g++){const m=l.getX(g);_o.fromBufferAttribute(u,m),hu(_o,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,b=f;g<b;g++)_o.fromBufferAttribute(u,g),hu(_o,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function hu(s,e,t,n,i,r,o){const a=Kc.distanceSqToPoint(s);if(a<t){const c=new D;Kc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Jo extends Bt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Kn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ne:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,i=[],r=[],o=[],a=new D,c=new Xe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ut(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ut(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ll extends Kn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ne){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hv extends Ll{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Il(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const yo=new D,Fa=new Il,Oa=new Il,za=new Il;class Gv extends Kn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(yo.subVectors(i[0],i[1]).add(i[0]),l=yo);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(yo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=yo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Fa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,m),Oa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,m),za.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Oa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),za.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Fa.calc(c),Oa.calc(c),za.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uu(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Vv(s,e){const t=1-s;return t*t*e}function Wv(s,e){return 2*(1-s)*s*e}function Xv(s,e){return s*s*e}function Er(s,e,t,n){return Vv(s,e)+Wv(s,t)+Xv(s,n)}function jv(s,e){const t=1-s;return t*t*t*e}function qv(s,e){const t=1-s;return 3*t*t*s*e}function Yv(s,e){return 3*(1-s)*s*s*e}function Zv(s,e){return s*s*s*e}function Ar(s,e,t,n,i){return jv(s,e)+qv(s,t)+Yv(s,n)+Zv(s,i)}class Jd extends Kn{constructor(e=new ne,t=new ne,n=new ne,i=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ne){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(e,i.x,r.x,o.x,a.x),Ar(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kv extends Kn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(e,i.x,r.x,o.x,a.x),Ar(e,i.y,r.y,o.y,a.y),Ar(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qd extends Kn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $v extends Kn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ef extends Kn{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,i.x,r.x,o.x),Er(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jv extends Kn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,i.x,r.x,o.x),Er(e,i.y,r.y,o.y),Er(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tf extends Kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(uu(a,c.x,l.x,h.x,u.x),uu(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ne().fromArray(i))}return this}}var $c=Object.freeze({__proto__:null,ArcCurve:Hv,CatmullRomCurve3:Gv,CubicBezierCurve:Jd,CubicBezierCurve3:Kv,EllipseCurve:Ll,LineCurve:Qd,LineCurve3:$v,QuadraticBezierCurve:ef,QuadraticBezierCurve3:Jv,SplineCurve:tf});class Qv extends Kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $c[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new $c[i.type]().fromJSON(i))}return this}}class du extends Qv{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Qd(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ef(this.currentPoint.clone(),new ne(e,t),new ne(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Jd(this.currentPoint.clone(),new ne(e,t),new ne(n,i),new ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new tf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Ll(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qo extends Vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new D,h=new ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(a,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class rn extends Vt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const b=[],m=n/2;let p=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function x(){const _=new D,S=new D;let E=0;const w=(t-e)/n;for(let A=0;A<=r;A++){const M=[],y=A/r,R=y*(t-e)+e;for(let k=0;k<=i;k++){const N=k/i,I=N*c+a,O=Math.sin(I),U=Math.cos(I);S.x=R*O,S.y=-y*n+m,S.z=R*U,u.push(S.x,S.y,S.z),_.set(O,w,U).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-y),M.push(g++)}b.push(M)}for(let A=0;A<i;A++)for(let M=0;M<r;M++){const y=b[M][A],R=b[M+1][A],k=b[M+1][A+1],N=b[M][A+1];(e>0||M!==0)&&(h.push(y,R,N),E+=3),(t>0||M!==r-1)&&(h.push(R,k,N),E+=3)}l.addGroup(p,E,0),p+=E}function v(_){const S=g,E=new ne,w=new D;let A=0;const M=_===!0?e:t,y=_===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const R=g;for(let k=0;k<=i;k++){const I=k/i*c+a,O=Math.cos(I),U=Math.sin(I);w.x=M*U,w.y=m*y,w.z=M*O,u.push(w.x,w.y,w.z),d.push(0,y,0),E.x=O*.5+.5,E.y=U*.5*y+.5,f.push(E.x,E.y),g++}for(let k=0;k<i;k++){const N=S+k,I=R+k;_===!0?h.push(I,I+1,N):h.push(I+1,I,N),A+=3}l.addGroup(p,A,_===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ks extends du{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new du().fromJSON(i))}return this}}const ex={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=nf(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=rx(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ir(r,o,t,a,c,f,0),o}};function nf(s,e,t,n,i){let r,o;if(i===gx(s,e,t,n)>0)for(r=e;r<t;r+=n)o=fu(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=fu(r,s[r],s[r+1],o);return o&&ea(o,o.next)&&(Nr(o),o=o.next),o}function es(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ea(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Nr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ir(s,e,t,n,i,r,o){if(!s)return;!o&&r&&hx(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?nx(s,n,i,r):tx(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Nr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=ix(es(s),e,t),Ir(s,e,t,n,i,r,2)):o===2&&sx(s,e,t,n,i,r):Ir(es(s),e,t,n,i,r,1);break}}}function tx(s){const e=s.prev,t=s,n=s.next;if(Pt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=i>r?i>o?i:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Es(i,a,r,c,o,l,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function nx(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Pt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,b=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Jc(f,g,e,t,n),x=Jc(b,m,e,t,n);let v=s.prevZ,_=s.nextZ;for(;v&&v.z>=p&&_&&_.z<=x;){if(v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Es(a,h,c,u,l,d,v.x,v.y)&&Pt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=b&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Es(a,h,c,u,l,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=b&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Es(a,h,c,u,l,d,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=b&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&Es(a,h,c,u,l,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ix(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!ea(i,r)&&sf(i,n,n.next,r)&&kr(i,r)&&kr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Nr(n),Nr(n.next),n=s=r),n=n.next}while(n!==s);return es(n)}function sx(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fx(o,a)){let c=rf(o,a);o=es(o,o.next),c=es(c,c.next),Ir(o,e,t,n,i,r,0),Ir(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function rx(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=nf(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(dx(l));for(i.sort(ox),r=0;r<i.length;r++)t=ax(i[r],t);return t}function ox(s,e){return s.x-e.x}function ax(s,e){const t=cx(s,e);if(!t)return e;const n=rf(t,s);return es(n,n.next),es(t,t.next)}function cx(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Es(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),kr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&lx(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function lx(s,e){return Pt(s.prev,s,e.prev)<0&&Pt(e.next,s,s.next)<0}function hx(s,e,t,n){let i=s;do i.z===0&&(i.z=Jc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ux(i)}function ux(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Jc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function dx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Es(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function fx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!px(s,e)&&(kr(s,e)&&kr(e,s)&&mx(s,e)&&(Pt(s.prev,s,e.prev)||Pt(s,e.prev,e))||ea(s,e)&&Pt(s.prev,s,s.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ea(s,e){return s.x===e.x&&s.y===e.y}function sf(s,e,t,n){const i=wo(Pt(s,e,t)),r=wo(Pt(s,e,n)),o=wo(Pt(t,n,s)),a=wo(Pt(t,n,e));return!!(i!==r&&o!==a||i===0&&Mo(s,t,e)||r===0&&Mo(s,n,e)||o===0&&Mo(t,s,n)||a===0&&Mo(t,e,n))}function Mo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function wo(s){return s>0?1:s<0?-1:0}function px(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&sf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function kr(s,e){return Pt(s.prev,s,s.next)<0?Pt(s,e,s.next)>=0&&Pt(s,s.prev,e)>=0:Pt(s,e,s.prev)<0||Pt(s,s.next,e)<0}function mx(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function rf(s,e){const t=new Qc(s.i,s.x,s.y),n=new Qc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fu(s,e,t,n){const i=new Qc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Nr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Qc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Di{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Di.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];pu(e),mu(n,e);let o=e.length;t.forEach(pu);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,mu(n,t[c]);const a=ex.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function pu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function mu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ta extends Vt{constructor(e=new Ks([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ut(i,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:bx;let v,_=!1,S,E,w,A;p&&(v=p.getSpacedPoints(h),_=!0,d=!1,S=p.computeFrenetFrames(h,!1),E=new D,w=new D,A=new D),d||(m=0,f=0,g=0,b=0);const M=a.extractPoints(l);let y=M.shape;const R=M.holes;if(!Di.isClockWise(y)){y=y.reverse();for(let $=0,oe=R.length;$<oe;$++){const L=R[$];Di.isClockWise(L)&&(R[$]=L.reverse())}}const N=Di.triangulateShape(y,R),I=y;for(let $=0,oe=R.length;$<oe;$++){const L=R[$];y=y.concat(L)}function O($,oe,L){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(oe,L)}const U=y.length,z=N.length;function H($,oe,L){let _e,ae,we;const xe=$.x-oe.x,Oe=$.y-oe.y,Ce=L.x-$.x,P=L.y-$.y,T=xe*xe+Oe*Oe,V=xe*P-Oe*Ce;if(Math.abs(V)>Number.EPSILON){const ie=Math.sqrt(T),ue=Math.sqrt(Ce*Ce+P*P),se=oe.x-Oe/ie,ke=oe.y+xe/ie,ye=L.x-P/ue,Ae=L.y+Ce/ue,Ye=((ye-se)*P-(Ae-ke)*Ce)/(xe*P-Oe*Ce);_e=se+xe*Ye-$.x,ae=ke+Oe*Ye-$.y;const me=_e*_e+ae*ae;if(me<=2)return new ne(_e,ae);we=Math.sqrt(me/2)}else{let ie=!1;xe>Number.EPSILON?Ce>Number.EPSILON&&(ie=!0):xe<-Number.EPSILON?Ce<-Number.EPSILON&&(ie=!0):Math.sign(Oe)===Math.sign(P)&&(ie=!0),ie?(_e=-Oe,ae=xe,we=Math.sqrt(T)):(_e=xe,ae=Oe,we=Math.sqrt(T/2))}return new ne(_e/we,ae/we)}const q=[];for(let $=0,oe=I.length,L=oe-1,_e=$+1;$<oe;$++,L++,_e++)L===oe&&(L=0),_e===oe&&(_e=0),q[$]=H(I[$],I[L],I[_e]);const W=[];let Z,he=q.concat();for(let $=0,oe=R.length;$<oe;$++){const L=R[$];Z=[];for(let _e=0,ae=L.length,we=ae-1,xe=_e+1;_e<ae;_e++,we++,xe++)we===ae&&(we=0),xe===ae&&(xe=0),Z[_e]=H(L[_e],L[we],L[xe]);W.push(Z),he=he.concat(Z)}for(let $=0;$<m;$++){const oe=$/m,L=f*Math.cos(oe*Math.PI/2),_e=g*Math.sin(oe*Math.PI/2)+b;for(let ae=0,we=I.length;ae<we;ae++){const xe=O(I[ae],q[ae],_e);Y(xe.x,xe.y,-L)}for(let ae=0,we=R.length;ae<we;ae++){const xe=R[ae];Z=W[ae];for(let Oe=0,Ce=xe.length;Oe<Ce;Oe++){const P=O(xe[Oe],Z[Oe],_e);Y(P.x,P.y,-L)}}}const ge=g+b;for(let $=0;$<U;$++){const oe=d?O(y[$],he[$],ge):y[$];_?(w.copy(S.normals[0]).multiplyScalar(oe.x),E.copy(S.binormals[0]).multiplyScalar(oe.y),A.copy(v[0]).add(w).add(E),Y(A.x,A.y,A.z)):Y(oe.x,oe.y,0)}for(let $=1;$<=h;$++)for(let oe=0;oe<U;oe++){const L=d?O(y[oe],he[oe],ge):y[oe];_?(w.copy(S.normals[$]).multiplyScalar(L.x),E.copy(S.binormals[$]).multiplyScalar(L.y),A.copy(v[$]).add(w).add(E),Y(A.x,A.y,A.z)):Y(L.x,L.y,u/h*$)}for(let $=m-1;$>=0;$--){const oe=$/m,L=f*Math.cos(oe*Math.PI/2),_e=g*Math.sin(oe*Math.PI/2)+b;for(let ae=0,we=I.length;ae<we;ae++){const xe=O(I[ae],q[ae],_e);Y(xe.x,xe.y,u+L)}for(let ae=0,we=R.length;ae<we;ae++){const xe=R[ae];Z=W[ae];for(let Oe=0,Ce=xe.length;Oe<Ce;Oe++){const P=O(xe[Oe],Z[Oe],_e);_?Y(P.x,P.y+v[h-1].y,v[h-1].x+L):Y(P.x,P.y,u+L)}}}K(),F();function K(){const $=i.length/3;if(d){let oe=0,L=U*oe;for(let _e=0;_e<z;_e++){const ae=N[_e];ee(ae[2]+L,ae[1]+L,ae[0]+L)}oe=h+m*2,L=U*oe;for(let _e=0;_e<z;_e++){const ae=N[_e];ee(ae[0]+L,ae[1]+L,ae[2]+L)}}else{for(let oe=0;oe<z;oe++){const L=N[oe];ee(L[2],L[1],L[0])}for(let oe=0;oe<z;oe++){const L=N[oe];ee(L[0]+U*h,L[1]+U*h,L[2]+U*h)}}n.addGroup($,i.length/3-$,0)}function F(){const $=i.length/3;let oe=0;B(I,oe),oe+=I.length;for(let L=0,_e=R.length;L<_e;L++){const ae=R[L];B(ae,oe),oe+=ae.length}n.addGroup($,i.length/3-$,1)}function B($,oe){let L=$.length;for(;--L>=0;){const _e=L;let ae=L-1;ae<0&&(ae=$.length-1);for(let we=0,xe=h+m*2;we<xe;we++){const Oe=U*we,Ce=U*(we+1),P=oe+_e+Oe,T=oe+ae+Oe,V=oe+ae+Ce,ie=oe+_e+Ce;fe(P,T,V,ie)}}}function Y($,oe,L){c.push($),c.push(oe),c.push(L)}function ee($,oe,L){pe($),pe(oe),pe(L);const _e=i.length/3,ae=x.generateTopUV(n,i,_e-3,_e-2,_e-1);Re(ae[0]),Re(ae[1]),Re(ae[2])}function fe($,oe,L,_e){pe($),pe(oe),pe(_e),pe(oe),pe(L),pe(_e);const ae=i.length/3,we=x.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);Re(we[0]),Re(we[1]),Re(we[3]),Re(we[1]),Re(we[2]),Re(we[3])}function pe($){i.push(c[$*3+0]),i.push(c[$*3+1]),i.push(c[$*3+2])}function Re($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new $c[i.type]().fromJSON(i)),new ta(n,e.options)}}const bx={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ne(r,o),new ne(a,c),new ne(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],b=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ne(o,1-c),new ne(l,1-u),new ne(d,1-g),new ne(b,1-p)]:[new ne(a,1-c),new ne(h,1-u),new ne(f,1-g),new ne(m,1-p)]}};function vx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xo extends Vt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new D,g=new ne;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let b=0;b<i;b++){const m=b*(n+1);for(let p=0;p<n;p++){const x=p+m,v=x,_=x+n+1,S=x+n+2,E=x+1;a.push(v,_,E),a.push(_,S,E)}}this.setIndex(a),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class jo extends Vt{constructor(e=new Ks([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ut(i,3)),this.setAttribute("normal",new ut(r,3)),this.setAttribute("uv",new ut(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Di.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];Di.isClockWise(x)===!0&&(g[m]=x.reverse())}const b=Di.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,p=b.length;m<p;m++){const x=b[m],v=x[0]+u,_=x[1]+u,S=x[2]+u;n.push(v,_,S),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return xx(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new jo(n,e.curveSegments)}}function xx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class mi extends Vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new D,d=new D,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const E=S/t;u.x=-e*Math.cos(i+E*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+E*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(E+_,1-v),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=h[p][x+1],_=h[p][x],S=h[p+1][x],E=h[p+1][x+1];(p!==0||o>0)&&f.push(v,_,E),(p!==n-1||c<Math.PI)&&f.push(_,S,E)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(b,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class na extends Vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const b=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const b=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;o.push(b,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _x extends St{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class it extends Fn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tt extends it{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yx extends Fn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ml,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function So(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Mx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function wx(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function gu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function of(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Hr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Sx extends Hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case nh:r=e,a=2*t-n;break;case ih:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nh:o=e,c=2*n-t;break;case ih:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,x=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*b+.5*g,_=f*m-f*b;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+x*o[l+S]+v*o[c+S]+_*o[u+S];return r}}class Tx extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Ex extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class $n{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=So(t,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ex(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Dr:t=this.InterpolantFactoryMethodLinear;break;case oa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Dr;case this.InterpolantFactoryMethodSmooth:return oa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Mx(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Dr;class $s extends $n{constructor(e,t,n){super(e,t,n)}}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Pr;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class af extends $n{}af.prototype.ValueTypeName="color";class Hs extends $n{}Hs.prototype.ValueTypeName="number";class Ax extends Hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Mn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Gs extends $n{InterpolantFactoryMethodLinear(e){return new Ax(this.times,this.values,this.getValueSize(),e)}}Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Js extends $n{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Pr;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Vs extends $n{}Vs.prototype.ValueTypeName="vector";class Rx{constructor(e="",t=-1,n=[],i=jf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Px(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push($n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=wx(c);c=gu(c,1,h),l=gu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Hs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,b){if(f.length!==0){const m=[],p=[];of(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(const b in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const v=d[g];m.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new Hs(".morphTargetInfluence["+b+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Vs,f+".position",d,"pos",i),n(Gs,f+".quaternion",d,"rot",i),n(Vs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hs;case"vector":case"vector2":case"vector3":case"vector4":return Vs;case"color":return af;case"quaternion":return Gs;case"bool":case"boolean":return $s;case"string":return Js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Px(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cx(s.type);if(s.times===void 0){const t=[],n=[];of(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ri={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class cf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Dx=new cf;class Ii{constructor(e){this.manager=e!==void 0?e:Dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class Lx extends Error{constructor(e,t){super(e),this.response=t}}class Ur extends Ii{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ri.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:i});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ri[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let b=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{b+=_.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let E=0,w=h.length;E<w;E++){const A=h[E];A.onProgress&&A.onProgress(S)}p.enqueue(_),x()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Lx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ri.add(e,l);const h=ri[e];delete ri[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ri[e];if(h===void 0)throw this.manager.itemError(e),l;delete ri[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ix extends Ii{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ri.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Lr("img");function c(){h(),Ri.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class kx extends Ii{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Zs,a=new Ur(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Wn,o.wrapT=l.wrapT!==void 0?l.wrapT:Wn,o.magFilter=l.magFilter!==void 0?l.magFilter:kt,o.minFilter=l.minFilter!==void 0?l.minFilter:kt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Un),l.mipmapCount===1&&(o.minFilter=kt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class ia extends Ii{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,o=new Ix(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Gr extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class el extends Gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ba=new Xe,bu=new D,vu=new D;class kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tl,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),Ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nx extends kl{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Nl extends Gr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Nx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const xu=new Xe,hr=new D,Ha=new D;class Ux extends kl{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(hr),Ha.copy(n.position),Ha.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ha),n.updateMatrixWorld(),i.makeTranslation(-hr.x,-hr.y,-hr.z),xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu)}}class On extends Gr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ux}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fx extends kl{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fr extends Gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Fx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ox extends Gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zx extends Ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ri.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ri.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ri.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ri.add(e,c),r.manager.itemStart(e)}}class Bx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_u(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_u();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _u(){return performance.now()}const Ul="\\[\\]\\.:\\/",Hx=new RegExp("["+Ul+"]","g"),Fl="[^"+Ul+"]",Gx="[^"+Ul.replace("\\.","")+"]",Vx=/((?:WC+[\/:])*)/.source.replace("WC",Fl),Wx=/(WCOD+)?/.source.replace("WCOD",Gx),Xx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),qx=new RegExp("^"+Vx+Wx+Xx+jx+"$"),Yx=["material","materials","bones","map"];class Zx{constructor(e,t,n){const i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class gt{constructor(e,t,n){this.path=t,this.parsedPath=n||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,n):new gt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hx,"")}static parseTrackName(e){const t=qx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Yx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=Zx;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const yu=new Xe;class Mu{constructor(e,t,n=0,i=1/0){this.ray=new qs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yu),this}intersectObject(e,t=!0,n=[]){return tl(e,this,n,t),n.sort(wu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)tl(e[i],this,n,t);return n.sort(wu),n}}function wu(s,e){return s.distance-e.distance}function tl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)tl(r[o],e,t,!0)}}class nl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Kx extends ns{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dl);class Ws extends At{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ne(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Ms=new D,Su=new Xe,Tu=new Xe,Eu=new D,Au=new D;class $x{constructor(e={}){const t=this;let n,i,r,o;const a={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:i}},this.render=function(g,b){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Su.copy(b.matrixWorldInverse),Tu.multiplyMatrices(b.projectionMatrix,Su),h(g,g,b),f(g)},this.setSize=function(g,b){n=g,i=b,r=n/2,o=i/2,c.style.width=g+"px",c.style.height=b+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let b=0,m=g.children.length;b<m;b++)l(g.children[b])}function h(g,b,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){Ms.setFromMatrixPosition(g.matrixWorld),Ms.applyMatrix4(Tu);const p=Ms.z>=-1&&Ms.z<=1&&g.layers.test(m.layers)===!0,x=g.element;x.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(t,b,m),x.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Ms.x*r+r)+"px,"+(-Ms.y*o+o)+"px)",x.parentNode!==c&&c.appendChild(x),g.onAfterRender(t,b,m));const v={distanceToCameraSquared:u(m,g)};a.objects.set(g,v)}for(let p=0,x=g.children.length;p<x;p++)h(g.children[p],b,m)}function u(g,b){return Eu.setFromMatrixPosition(g.matrixWorld),Au.setFromMatrixPosition(b.matrixWorld),Eu.distanceToSquared(Au)}function d(g){const b=[];return g.traverseVisible(function(m){m.isCSS2DObject&&b.push(m)}),b}function f(g){const b=d(g).sort(function(p,x){if(p.renderOrder!==x.renderOrder)return x.renderOrder-p.renderOrder;const v=a.objects.get(p).distanceToCameraSquared,_=a.objects.get(x).distanceToCameraSquared;return v-_}),m=b.length;for(let p=0,x=b.length;p<x;p++)b[p].element.style.zIndex=m-p}}}const Ru={type:"change"},Ol={type:"start"},lf={type:"end"},To=new qs,Cu=new Ei,Jx=Math.cos(70*Ld.DEG2RAD),Ot=new D,an=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ga=1e-6;class Qx extends Kx{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Mn,this._lastTargetPosition=new D,this._quat=new Mn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nl,this._sphericalDelta=new nl,this._scale=1,this._panOffset=new D,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new D,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t_.bind(this),this._onPointerDown=e_.bind(this),this._onPointerUp=n_.bind(this),this._onContextMenu=l_.bind(this),this._onMouseWheel=r_.bind(this),this._onKeyDown=o_.bind(this),this._onTouchStart=a_.bind(this),this._onTouchMove=c_.bind(this),this._onMouseDown=i_.bind(this),this._onMouseMove=s_.bind(this),this._interceptControlDown=h_.bind(this),this._interceptControlUp=u_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ru),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),i<-Math.PI?i+=an:i>Math.PI&&(i-=an),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ot.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(To.origin.copy(this.object.position),To.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(To.direction))<Jx?this.object.lookAt(this.target):(Cu.setFromNormalAndCoplanarPoint(this.object.up,this.target),To.intersectPlane(Cu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ga||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ga||this._lastTargetPosition.distanceToSquared(this.target)>Ga?(this.dispatchEvent(Ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ot.copy(i).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function e_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function t_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function n_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lf),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function i_(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case As.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=bt.DOLLY;break;case As.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}break;case As.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Ol)}function s_(s){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function r_(s){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(s.preventDefault(),this.dispatchEvent(Ol),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(lf))}function o_(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function a_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Vn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=bt.TOUCH_ROTATE;break;case Vn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Vn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=bt.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Ol)}function c_(s){switch(this._trackPointer(s),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=bt.NONE}}function l_(s){this.enabled!==!1&&s.preventDefault()}function h_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function u_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class d_ extends Yd{constructor(){super();const e=new ve;e.deleteAttribute("uv");const t=new it({side:Xt}),n=new it,i=new On(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new le(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new le(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new le(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new le(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new le(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new le(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new le(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new le(e,ws(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new le(e,ws(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new le(e,ws(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const b=new le(e,ws(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const m=new le(e,ws(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new le(e,ws(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ws(s){const e=new Ct;return e.color.setScalar(s),e}class sa extends kx{constructor(e){super(e),this.type=Dt}parse(e){const o=function(A,M){switch(A){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},h=`
`,u=function(A,M,y){M=M||1024;let k=A.pos,N=-1,I=0,O="",U=String.fromCharCode.apply(null,new Uint16Array(A.subarray(k,k+128)));for(;0>(N=U.indexOf(h))&&I<M&&k<A.byteLength;)O+=U,I+=U.length,k+=128,U+=String.fromCharCode.apply(null,new Uint16Array(A.subarray(k,k+128)));return-1<N?(A.pos+=I+N+1,O+U.slice(0,N)):!1},d=function(A){const M=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,k=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,I={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let O,U;for((A.pos>=A.byteLength||!(O=u(A)))&&o(1,"no header found"),(U=O.match(M))||o(3,"bad initial token"),I.valid|=1,I.programtype=U[1],I.string+=O+`
`;O=u(A),O!==!1;){if(I.string+=O+`
`,O.charAt(0)==="#"){I.comments+=O+`
`;continue}if((U=O.match(y))&&(I.gamma=parseFloat(U[1])),(U=O.match(R))&&(I.exposure=parseFloat(U[1])),(U=O.match(k))&&(I.valid|=2,I.format=U[1]),(U=O.match(N))&&(I.valid|=4,I.height=parseInt(U[1],10),I.width=parseInt(U[2],10)),I.valid&2&&I.valid&4)break}return I.valid&2||o(3,"missing format specifier"),I.valid&4||o(3,"missing image size specifier"),I},f=function(A,M,y){const R=M;if(R<8||R>32767||A[0]!==2||A[1]!==2||A[2]&128)return new Uint8Array(A);R!==(A[2]<<8|A[3])&&o(3,"wrong scanline width");const k=new Uint8Array(4*M*y);k.length||o(4,"unable to allocate buffer space");let N=0,I=0;const O=4*R,U=new Uint8Array(4),z=new Uint8Array(O);let H=y;for(;H>0&&I<A.byteLength;){I+4>A.byteLength&&o(1),U[0]=A[I++],U[1]=A[I++],U[2]=A[I++],U[3]=A[I++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=R)&&o(3,"bad rgbe scanline format");let q=0,W;for(;q<O&&I<A.byteLength;){W=A[I++];const he=W>128;if(he&&(W-=128),(W===0||q+W>O)&&o(3,"bad scanline data"),he){const ge=A[I++];for(let K=0;K<W;K++)z[q++]=ge}else z.set(A.subarray(I,I+W),q),q+=W,I+=W}const Z=R;for(let he=0;he<Z;he++){let ge=0;k[N]=z[he+ge],ge+=R,k[N+1]=z[he+ge],ge+=R,k[N+2]=z[he+ge],ge+=R,k[N+3]=z[he+ge],N+=4}H--}return k},g=function(A,M,y,R){const k=A[M+3],N=Math.pow(2,k-128)/255;y[R+0]=A[M+0]*N,y[R+1]=A[M+1]*N,y[R+2]=A[M+2]*N,y[R+3]=1},b=function(A,M,y,R){const k=A[M+3],N=Math.pow(2,k-128)/255;y[R+0]=to.toHalfFloat(Math.min(A[M+0]*N,65504)),y[R+1]=to.toHalfFloat(Math.min(A[M+1]*N,65504)),y[R+2]=to.toHalfFloat(Math.min(A[M+2]*N,65504)),y[R+3]=to.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),x=p.width,v=p.height,_=f(m.subarray(m.pos),x,v);let S,E,w;switch(this.type){case ln:w=_.length/4;const A=new Float32Array(w*4);for(let y=0;y<w;y++)g(_,y*4,A,y*4);S=A,E=ln;break;case Dt:w=_.length/4;const M=new Uint16Array(w*4);for(let y=0;y<w;y++)b(_,y*4,M,y*4);S=M,E=Dt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:x,height:v,data:S,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case ln:case Dt:o.colorSpace=Ft,o.minFilter=kt,o.magFilter=kt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}const Ls={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ki{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const f_=new Ko(-1,1,1,-1,0,1);class p_ extends Vt{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}const m_=new p_;class Vr{constructor(e){this._mesh=new le(m_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,f_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class g_ extends ki{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Nn.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Pu extends ki{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class b_ extends ki{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class v_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new It(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Dt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new g_(Ls),this.copyPass.material.blending=zt,this.clock=new Bx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Pu!==void 0&&(o instanceof Pu?n=!0:o instanceof b_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class x_ extends ki{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Eo={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Xe},cameraProjectionMatrixInverse:{value:new Xe},cameraWorldMatrix:{value:new Xe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},Ao={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Va={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function __(s=5){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=y_(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],c=2*Math.PI*a/n,l=new D(Math.cos(c),Math.sin(c),0).normalize();i[o*4]=(l.x*.5+.5)*255,i[o*4+1]=(l.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}const r=new Zs(i,e,e);return r.wrapS=jt,r.wrapT=jt,r.needsUpdate=!0,r}function y_(s){const e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0);let i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}const Ro={defines:{SAMPLES:16,SAMPLE_VECTORS:hf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraProjectionMatrixInverse:{value:new Xe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function hf(s,e,t){const n=M_(s,e,t);let i="vec3[SAMPLES](";for(let r=0;r<s;r++){const o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function M_(s,e,t){const n=[];for(let i=0;i<s;i++){const r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new D(Math.cos(r),Math.sin(r),o))}return n}class w_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,g=e-d,b=t-f;let m,p;g>b?(m=1,p=0):(m=0,p=1);const x=g-m+h,v=b-p+h,_=g-1+2*h,S=b-1+2*h,E=c&255,w=l&255,A=this.perm[E+this.perm[w]]%12,M=this.perm[E+m+this.perm[w+p]]%12,y=this.perm[E+1+this.perm[w+1]]%12;let R=.5-g*g-b*b;R<0?n=0:(R*=R,n=R*R*this.dot(this.grad3[A],g,b));let k=.5-x*x-v*v;k<0?i=0:(k*=k,i=k*k*this.dot(this.grad3[M],x,v));let N=.5-_*_-S*S;return N<0?r=0:(N*=N,r=N*N*this.dot(this.grad3[y],_,S)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,g=(h+u+d)*f,b=h-g,m=u-g,p=d-g,x=e-b,v=t-m,_=n-p;let S,E,w,A,M,y;x>=v?v>=_?(S=1,E=0,w=0,A=1,M=1,y=0):x>=_?(S=1,E=0,w=0,A=1,M=0,y=1):(S=0,E=0,w=1,A=1,M=0,y=1):v<_?(S=0,E=0,w=1,A=0,M=1,y=1):x<_?(S=0,E=1,w=0,A=0,M=1,y=1):(S=0,E=1,w=0,A=1,M=1,y=0);const R=x-S+f,k=v-E+f,N=_-w+f,I=x-A+2*f,O=v-M+2*f,U=_-y+2*f,z=x-1+3*f,H=v-1+3*f,q=_-1+3*f,W=h&255,Z=u&255,he=d&255,ge=this.perm[W+this.perm[Z+this.perm[he]]]%12,K=this.perm[W+S+this.perm[Z+E+this.perm[he+w]]]%12,F=this.perm[W+A+this.perm[Z+M+this.perm[he+y]]]%12,B=this.perm[W+1+this.perm[Z+1+this.perm[he+1]]]%12;let Y=.6-x*x-v*v-_*_;Y<0?i=0:(Y*=Y,i=Y*Y*this.dot3(this.grad3[ge],x,v,_));let ee=.6-R*R-k*k-N*N;ee<0?r=0:(ee*=ee,r=ee*ee*this.dot3(this.grad3[K],R,k,N));let fe=.6-I*I-O*O-U*U;fe<0?o=0:(fe*=fe,o=fe*fe*this.dot3(this.grad3[F],I,O,U));let pe=.6-z*z-H*H-q*q;return pe<0?a=0:(pe*=pe,a=pe*pe*this.dot3(this.grad3[B],z,H,q)),32*(i+r+o+a)}noise4d(e,t,n,i){const r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,f,g;const b=(e+t+n+i)*c,m=Math.floor(e+b),p=Math.floor(t+b),x=Math.floor(n+b),v=Math.floor(i+b),_=(m+p+x+v)*l,S=m-_,E=p-_,w=x-_,A=v-_,M=e-S,y=t-E,R=n-w,k=i-A,N=M>y?32:0,I=M>R?16:0,O=y>R?8:0,U=M>k?4:0,z=y>k?2:0,H=R>k?1:0,q=N+I+O+U+z+H,W=o[q][0]>=3?1:0,Z=o[q][1]>=3?1:0,he=o[q][2]>=3?1:0,ge=o[q][3]>=3?1:0,K=o[q][0]>=2?1:0,F=o[q][1]>=2?1:0,B=o[q][2]>=2?1:0,Y=o[q][3]>=2?1:0,ee=o[q][0]>=1?1:0,fe=o[q][1]>=1?1:0,pe=o[q][2]>=1?1:0,Re=o[q][3]>=1?1:0,$=M-W+l,oe=y-Z+l,L=R-he+l,_e=k-ge+l,ae=M-K+2*l,we=y-F+2*l,xe=R-B+2*l,Oe=k-Y+2*l,Ce=M-ee+3*l,P=y-fe+3*l,T=R-pe+3*l,V=k-Re+3*l,ie=M-1+4*l,ue=y-1+4*l,se=R-1+4*l,ke=k-1+4*l,ye=m&255,Ae=p&255,Ye=x&255,me=v&255,Fe=a[ye+a[Ae+a[Ye+a[me]]]]%32,We=a[ye+W+a[Ae+Z+a[Ye+he+a[me+ge]]]]%32,je=a[ye+K+a[Ae+F+a[Ye+B+a[me+Y]]]]%32,Ne=a[ye+ee+a[Ae+fe+a[Ye+pe+a[me+Re]]]]%32,nt=a[ye+1+a[Ae+1+a[Ye+1+a[me+1]]]]%32;let Ze=.6-M*M-y*y-R*R-k*k;Ze<0?h=0:(Ze*=Ze,h=Ze*Ze*this.dot4(r[Fe],M,y,R,k));let at=.6-$*$-oe*oe-L*L-_e*_e;at<0?u=0:(at*=at,u=at*at*this.dot4(r[We],$,oe,L,_e));let G=.6-ae*ae-we*we-xe*xe-Oe*Oe;G<0?d=0:(G*=G,d=G*G*this.dot4(r[je],ae,we,xe,Oe));let Se=.6-Ce*Ce-P*P-T*T-V*V;Se<0?f=0:(Se*=Se,f=Se*Se*this.dot4(r[Ne],Ce,P,T,V));let te=.6-ie*ie-ue*ue-se*se-ke*ke;return te<0?g=0:(te*=te,g=te*te*this.dot4(r[nt],ie,ue,se,ke)),27*(h+u+d+f+g)}}class Dn extends ki{constructor(e,t,n,i,r,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=__(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new It(this.width,this.height,{type:Dt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new St({defines:Object.assign({},Eo.defines),uniforms:Nn.clone(Eo.uniforms),vertexShader:Eo.vertexShader,fragmentShader:Eo.fragmentShader,blending:zt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new yx,this.normalMaterial.blending=zt,this.pdMaterial=new St({defines:Object.assign({},Ro.defines),uniforms:Nn.clone(Ro.uniforms),vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new St({defines:Object.assign({},Ao.defines),uniforms:Nn.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,blending:zt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new St({uniforms:Nn.clone(Ls.uniforms),vertexShader:Ls.vertexShader,fragmentShader:Ls.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:uc,blendDst:gr,blendEquation:Ln,blendSrcAlpha:hc,blendDstAlpha:gr,blendEquationAlpha:Ln}),this.blendMaterial=new St({uniforms:Nn.clone(Va.uniforms),vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ud,blendSrc:uc,blendDst:gr,blendEquation:Ln,blendSrcAlpha:hc,blendDstAlpha:gr,blendEquationAlpha:Ln}),this.fsQuad=new Vr(null),this.originalClearColor=new Le,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Al,this.depthTexture.format=Ji,this.depthTexture.type=$i,this.normalRenderTarget=new It(this.width,this.height,{minFilter:Yt,magFilter:Yt,type:Dt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=hf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Dn.OUTPUT.Off:break;case Dn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Dn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Dn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Dn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Dn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Dn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){const t=new w_,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const c=o,l=a;i[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const r=new Zs(i,e,e,hn,jn);return r.wrapS=jt,r.wrapT=jt,r.needsUpdate=!0,r}}Dn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const S_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class T_ extends ki{constructor(){super();const e=S_;this.uniforms=Nn.clone(e.uniforms),this.material=new _x({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===md?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gd?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ci extends ki{constructor(e,t,n,i){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=i!==void 0?i:[],this.visibleEdgeColor=new Le(1,1,1),this.hiddenEdgeColor=new Le(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new It(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new qd,this.depthMaterial.side=wt,this.depthMaterial.depthPacking=Pd,this.depthMaterial.blending=zt,this.prepareMaskMaterial=this.getPrepareMaskMaterial(),this.prepareMaskMaterial.side=wt,this.prepareMaskMaterial.fragmentShader=h(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new It(this.resolution.x,this.resolution.y,{type:Dt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new It(r,o,{type:Dt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new It(r,o,{type:Dt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new It(Math.round(r/2),Math.round(o/2),{type:Dt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this.getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new It(r,o,{type:Dt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new It(Math.round(r/2),Math.round(o/2),{type:Dt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,c=4;this.separableBlurMaterial1=this.getSeperableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this.getSeperableBlurMaterial(c),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=c,this.overlayMaterial=this.getOverlayMaterial();const l=Ls;this.copyUniforms=Nn.clone(l.uniforms),this.materialCopy=new St({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:zt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Le,this.oldClearAlpha=1,this.fsQuad=new Vr(null),this.tempPulseColor1=new Le,this.tempPulseColor2=new Le,this.textureMatrix=new Xe;function h(u,d){const f=d.isPerspectiveCamera?"perspective":"orthographic";return u.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this.fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),i=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,i),this.renderTargetBlurBuffer1.setSize(n,i),this.renderTargetEdgeBuffer1.setSize(n,i),this.separableBlurMaterial1.uniforms.texSize.value.set(n,i),n=Math.round(n/2),i=Math.round(i/2),this.renderTargetBlurBuffer2.setSize(n,i),this.renderTargetEdgeBuffer2.setSize(n,i),this.separableBlurMaterial2.uniforms.texSize.value.set(n,i)}updateSelectionCache(){const e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,n=this._selectionCache;function i(r){if(r.isMesh||r.isSprite){if(!n.has(r)){const o=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,o)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}this.renderScene.traverse(i)}updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}render(e,t,n,i,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this.updateSelectionCache(),this.changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this.updateTextureMatrix(),this.changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this.renderScene.overrideMaterial=null,this.changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this.fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this.fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ci.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=Ci.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=Ci.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this.fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=Ci.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this.fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this.fsQuad.render(e))}getPrepareMaskMaterial(){return new St({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new ne(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <morphtarget_pars_vertex>
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

				}`})}getEdgeDetectionMaterial(){return new St({uniforms:{maskTexture:{value:null},texSize:{value:new ne(.5,.5)},visibleEdgeColor:{value:new D(1,1,1)},hiddenEdgeColor:{value:new D(1,1,1)}},vertexShader:`varying vec2 vUv;

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
				}`})}getSeperableBlurMaterial(e){return new St({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

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
				}`})}getOverlayMaterial(){return new St({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

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
				}`,blending:Bo,depthTest:!1,depthWrite:!1,transparent:!0})}}Ci.BlurDirectionX=new ne(1,0);Ci.BlurDirectionY=new ne(0,1);const E_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xs extends ki{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new Le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new It(r,o,{type:Dt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new It(r,o,{type:Dt});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new It(r,o,{type:Dt});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=E_;this.highPassUniforms=Nn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ls;this.copyUniforms=Nn.clone(h.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Le,this.oldClearAlpha=1,this.basic=new Ct,this.fsQuad=new Vr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Xs.BlurDirectionX=new ne(1,0);Xs.BlurDirectionY=new ne(0,1);function Du(){return window.innerWidth<900||window.innerHeight<520||"ontouchstart"in window&&window.innerWidth<1200}function A_(s){try{const e=s.getContext(),t=e.getExtension("WEBGL_debug_renderer_info");if(!t)return!1;const n=String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)||"");return/swiftshader|llvmpipe|softpipe|microsoft basic render|cpu/i.test(n)}catch{return!1}}function R_(s,e){const t=Du(),n=new Lv({canvas:s,antialias:!t,powerPreference:"high-performance",alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=t?fl:hd,n.toneMapping=pl,n.toneMappingExposure=1.15,n.outputColorSpace=vt;const i=A_(n),r=!t&&!i,o=new Yd;o.background=new Le("#b9cbe0"),o.fog=new Ds("#c5d4e3",160,480);const a=new Qi(n);o.environment=a.fromScene(new d_,.06).texture,o.environmentIntensity=.55;const c=t?58:50,l=new sn(c,window.innerWidth/window.innerHeight,.05,900);l.position.set(56,5.5,78);const h=new Qx(l,n.domElement);h.enableDamping=!0,h.dampingFactor=.08,h.maxPolarAngle=Math.PI*.495,h.minDistance=2,h.maxDistance=140,h.zoomToCursor=!0,h.target.set(13.7,6,10),h.update(),h.touches.ONE=Vn.ROTATE,h.touches.TWO=Vn.DOLLY_PAN;const u=new $x({element:e});u.setSize(window.innerWidth,window.innerHeight),Object.assign(e.style,{position:"absolute",inset:"0",pointerEvents:"none"});const d=new el("#efe8dc","#8a7a68",.62);o.add(d);const f=new Fr("#fff3d8",2.15);f.position.set(48,62,28),f.castShadow=!0;const g=t?1024:2048;f.shadow.mapSize.set(g,g),f.shadow.camera.near=4,f.shadow.camera.far=200,f.shadow.camera.left=-60,f.shadow.camera.right=60,f.shadow.camera.top=70,f.shadow.camera.bottom=-50,f.shadow.bias=-4e-4,f.shadow.normalBias=.035,f.shadow.radius=t?1:2.5,o.add(f),o.add(f.target),f.target.position.set(13.7,0,10);const b=new Fr("#f0e0c4",.42);b.position.set(-30,16,-20),o.add(b);const m=new Ox("#fff6ea",.08);o.add(m);let p=null,x=null,v=r,_=null,S=null,E=null,w=null,A=null,M=null,y=null;if(r){const F=window.innerWidth,B=window.innerHeight,Y=new It(F,B,{type:Dt,depthBuffer:!0});p=new v_(n,Y),p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),p.addPass(new x_(o,l)),x=new Dn(o,l,F,B),x.output=Dn.OUTPUT.Default,x.blendIntensity=.8,x.updateGtaoMaterial({radius:.28,samples:12,thickness:1,distanceExponent:2,distanceFallOff:1,scale:1.15}),p.addPass(x),y=new Ci(new ne(F,B),o,l),y.edgeStrength=3.4,y.edgeGlow=.4,y.edgeThickness=1.5,y.visibleEdgeColor.set("#f0d48a"),y.hiddenEdgeColor.set("#8a6a30"),y.pulsePeriod=2.4,y.downSampleRatio=1.5,p.addPass(y);const ee=new Xs(new ne(F,B),.16,.42,.84);p.addPass(ee),p.addPass(new T_)}const R=s.parentElement;if(R&&!R.querySelector("#vignette")){const F=document.createElement("div");F.id="vignette",R.appendChild(F)}let k=performance.now(),N=!1,I=()=>{},O=()=>{},U=60,z=0;function H(F){if(!N)return;requestAnimationFrame(H);const B=Math.min(.05,(F-k)/1e3);k=F;const Y=B>1e-4?1/B:60;U=U*.9+Y*.1,v&&p&&Y<26?(z+=1,z>45&&(v=!1,console.info("[engine] GTAO disabled — fps fallback",U.toFixed(1)))):z=0,I(B),h.enabled&&h.update(),p?(x&&(x.enabled=v),p.render()):n.render(o,l),u.render(o,l),O()}let q=0,W=null,Z=null;function he(){const F=window.innerWidth,B=window.innerHeight,Y=B>F*1.05;if(l.aspect=F/B,W!=null){const ee=W*Math.PI/180;if(Y){const fe=Math.round(B*1.24),pe=F/fe,Re=2*Math.atan(Math.tan(ee/2)/Math.max(pe,.15));l.fov=Math.min(122,Math.max(78,Re*180/Math.PI));const $=fe-B;l.setViewOffset(F,fe,0,$,F,B)}else l.fov=W>=80?78:63,l.clearViewOffset()}else l.fov=Du()?60:53,l.clearViewOffset();l.near=.05,l.updateProjectionMatrix()}function ge(F,B){if(!x)return;const Y=x;Y.width=F,Y.height=B,Y.gtaoRenderTarget.setSize(F,B),Y.pdRenderTarget.setSize(F,B),Y.normalRenderTarget?.setSize(F,B),Y.gtaoMaterial.uniforms.resolution.value.set(F,B)}function K(){const F=window.innerWidth,B=window.innerHeight;he();const Y=Math.min(window.devicePixelRatio||1,1.5);n.setPixelRatio(Y),n.setSize(F,B),u.setSize(F,B),p&&(p.setPixelRatio(Y),p.setSize(F,B),ge(Math.round(F*Y),Math.round(B*Y)),y?.setSize(F,B))}return window.addEventListener("resize",K),{renderer:n,scene:o,camera:l,orbit:h,labels:u,sun:f,hemi:d,fill:b,mobile:t,highTier:r,softwareGpu:i,get cityBg(){return _},set cityBg(F){_=F},get cityBgNight(){return S},set cityBgNight(F){S=F},get cityBgGolden(){return E},set cityBgGolden(F){E=F},get cityEnv(){return w},set cityEnv(F){w=F},get cityEnvNight(){return A},set cityEnvNight(F){A=F},get cityEnvGolden(){return M},set cityEnvGolden(F){M=F},walkLit:!1,setOutlined(F){y&&(y.selectedObjects=F)},start(F,B){I=F,O=B??(()=>{}),N=!0,k=performance.now(),requestAnimationFrame(H)},resize:K,setHudLift(F){const B=Math.max(0,Math.min(.4,F));Math.abs(B-q)<.01||(q=B,he())},setWalkFov(F){W=F,he()},fps:()=>U,aoEnabled:()=>v,setAoEnabled(F){v=F&&r},aimWalkLighting(F,B,Y){if(!F||!B){Z=null,this.walkLit=!1,f.position.set(48,62,28),f.target.position.set(13.7,0,10),f.target.updateMatrixWorld(),f.shadow.camera.left=-50,f.shadow.camera.right=50,f.shadow.camera.top=50,f.shadow.camera.bottom=-50,f.shadow.camera.near=4,f.shadow.camera.far=140,f.shadow.camera.updateProjectionMatrix();return}Z={center:F.clone(),incoming:B.clone().normalize(),radius:Y},this.walkLit=!0;const ee=Z.incoming,fe=.7,pe=new D(-ee.x,fe,-ee.z).normalize();f.position.copy(F).addScaledVector(pe,Math.max(14,Y*1.6)),f.target.position.copy(F),f.target.updateMatrixWorld(),f.castShadow=!0;const Re=Math.max(6,Y);f.shadow.camera.left=-Re,f.shadow.camera.right=Re,f.shadow.camera.top=Re,f.shadow.camera.bottom=-Re,f.shadow.camera.near=2,f.shadow.camera.far=Math.max(40,Y*4),f.shadow.camera.updateProjectionMatrix(),b.position.copy(F).add(new D(ee.x,.5,ee.z).normalize().multiplyScalar(10)),b.position.y=F.y+6},dispose(){N=!1,window.removeEventListener("resize",K),p?.dispose()}}}let Or=0;function Co(){Or+=1}function ur(s,e,t,n,i=.5){const r=++Or,o=s.position.clone(),a=e.target.clone(),c=performance.now(),l=e.enabled;return e.enabled=!1,new Promise(h=>{function u(d){if(r!==Or){h();return}const f=Math.min(1,(d-c)/(i*1e3)),g=f<.5?4*f*f*f:1-Math.pow(-2*f+2,3)/2;s.position.lerpVectors(o,t,g),e.target.lerpVectors(a,n,g),s.lookAt(e.target),f<1?requestAnimationFrame(u):(e.enabled=l,h())}requestAnimationFrame(u)})}function C_(s,e,t,n,i,r,o=0,a=.5,c){const l=++Or;let h=t,u=r;for(;u-h>Math.PI;)u-=Math.PI*2;for(;u-h<-Math.PI;)u+=Math.PI*2;const d=performance.now();return new Promise(f=>{function g(b){if(l!==Or){f();return}const m=Math.min(1,(b-d)/(a*1e3)),p=m<.5?4*m*m*m:1-Math.pow(-2*m+2,3)/2,x=new D().lerpVectors(e,i,p),v=h+(u-h)*p,_=n+(o-n)*p;s.position.copy(x),s.rotation.set(_,v,0,"YXZ"),m<1?requestAnimationFrame(g):f()}requestAnimationFrame(g)})}function P_(s,e){const{scene:t,sun:n,hemi:i,fill:r,renderer:o}=s;if(e==="morning")s.walkLit||n.position.set(48,62,28),n.color.set("#fff6e8"),n.intensity=2.2,i.color.set("#efe8dc"),i.groundColor.set("#6a7a58"),i.intensity=.58,r.color.set("#f0e0c4"),r.intensity=.42,o.toneMappingExposure=1.08,t.fog=new Ds("#c8d6e4",220,560),s.cityBg?(t.background=s.cityBg,t.backgroundIntensity=1.05,t.backgroundBlurriness=0,t.backgroundRotation.set(0,.35,0)):t.background=new Le("#8fb4d8");else if(e==="golden"){s.walkLit||n.position.set(62,16,22),n.color.set("#ffb060"),n.intensity=2.05,i.color.set("#ffd9a8"),i.groundColor.set("#8a5a38"),i.intensity=.48,r.color.set("#ffb07a"),r.intensity=.38,o.toneMappingExposure=1,t.fog=new Ds("#d8b090",220,540);const a=s.cityBgGolden??s.cityBg;a?(t.background=a,t.backgroundIntensity=1,t.backgroundBlurriness=0,t.backgroundRotation.set(0,.15,0)):t.background=new Le("#eeb07a")}else{s.walkLit||n.position.set(-30,48,20),n.color.set("#c8d4f0"),n.intensity=.12,i.color.set("#1e2c50"),i.groundColor.set("#0a0c12"),i.intensity=.28,r.color.set("#ffb070"),r.intensity=.22,o.toneMappingExposure=.92,t.fog=new Ds("#081018",240,620);const a=s.cityBgNight??s.cityBg;a?(t.background=a,t.backgroundIntensity=.42,t.backgroundBlurriness=0,t.backgroundRotation.set(0,.55,0)):t.background=new Le("#071018")}s.walkLit||(n.target.position.set(13.7,0,10),n.target.updateMatrixWorld())}async function D_(s,e){try{const n=await new sa().loadAsync(e);n.mapping=Zi;const i=new Qi(s.renderer),r=i.fromEquirectangular(n).texture;n.dispose(),i.dispose(),s.scene.environment=r,s.scene.environmentIntensity=.58}catch(t){console.warn("[engine] HDRI failed, keeping RoomEnvironment",t)}}async function L_(s,e){try{const n=await new sa().loadAsync(e);n.mapping=Zi,s.cityBg=n,s.scene.background=n,s.scene.backgroundIntensity=1.05,s.scene.backgroundBlurriness=0,s.scene.backgroundRotation.set(0,.35,0);const i=new Qi(s.renderer);s.cityEnv=i.fromEquirectangular(n).texture,i.dispose()}catch(t){console.warn("[engine] sky HDRI failed, keeping solid sky",t)}}async function I_(s,e){try{const n=await new sa().loadAsync(e);n.mapping=Zi,s.cityBgGolden=n;const i=new Qi(s.renderer);s.cityEnvGolden=i.fromEquirectangular(n).texture,i.dispose()}catch(t){console.warn("[engine] golden sky HDRI failed",t)}}async function k_(s,e){try{const n=await new sa().loadAsync(e);n.mapping=Zi,s.cityBgNight=n;const i=new Qi(s.renderer);s.cityEnvNight=i.fromEquirectangular(n).texture,i.dispose()}catch(t){console.warn("[engine] night sky HDRI failed",t)}}function Wa(){return window.innerHeight>window.innerWidth*1.05?-7*Math.PI/180:0}function pn(s,e=.32){const t=s.onBeforeCompile;s.userData.tripScale=e,s.onBeforeCompile=(i,r)=>{t?.(i,r),i.uniforms.uTripScale={value:s.userData.tripScale??e},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
        #endif`)};const n=s.customProgramCacheKey.bind(s);return s.customProgramCacheKey=()=>`${n()}|triplanar|${s.userData.tripScale??e}`,s.needsUpdate=!0,s}const N_=()=>"./textures/",U_={wood:1.5,marble:3.4,tile:1.7,"tile-wet":1.7,terra:2};function Xn(s,e,t,n,i){return new Promise((r,o)=>{s.load(N_()+e,a=>{a.wrapS=a.wrapT=jt,a.repeat.set(n,n),a.anisotropy=i,a.colorSpace=t?vt:Ft,a.needsUpdate=!0,r(a)},void 0,o)})}async function Hn(s,e,t,n){const[i,r,o]=await Promise.all([Xn(s,`${e}_diff.jpg`,!0,n,t),Xn(s,`${e}_nor.jpg`,!1,n,t),Xn(s,`${e}_rough.jpg`,!1,n,t)]);return{map:i,normalMap:r,roughnessMap:o}}async function Po(s,e,t,n){const[i,r,o]=await Promise.all([Xn(s,`ph/${e}_diff.webp`,!0,n,t),Xn(s,`ph/${e}_nor.webp`,!1,n,t),Xn(s,`ph/${e}_rough.webp`,!1,n,t)]);return{map:i,normalMap:r,roughnessMap:o}}async function F_(s,e){const t=Math.min(8,s.capabilities.getMaxAnisotropy()),n=new ia,i=new cf;n.manager=i,i.onProgress=(E,w,A)=>e(A?w/A:0);const[r,o,a,c,l,h,u,d,f,g,b,m,p,x,v,_]=await Promise.all([Hn(n,"oakplank",t,1),Hn(n,"marblevein",t,1),Hn(n,"tile",t,1),Hn(n,"terra",t,1),Hn(n,"granite",t,1),Hn(n,"concrete",t,1),Hn(n,"concfloor",t,1),Hn(n,"plaster",t,2),Hn(n,"grass",t,1),Hn(n,"pave",t,1),(async()=>{const[E,w]=await Promise.all([Xn(n,"fabric_nor.jpg",!1,5,t),Xn(n,"fabric_rough.jpg",!1,5,t)]);return{map:Lu(),normalMap:E,roughnessMap:w}})(),(async()=>{const[E,w]=await Promise.all([Xn(n,"brushed_nor.jpg",!1,4,t),Xn(n,"brushed_rough.jpg",!1,4,t)]);return{map:Lu(),normalMap:E,roughnessMap:w}})(),Po(n,"poly_wool_herringbone",t,4),Po(n,"polar_fleece",t,3),Po(n,"wool_boucle",t,3),Po(n,"beige_wall_001",t,2)]),S=(E,w={})=>new it({color:E,roughness:.7,metalness:.05,...w});return{wood:r,marble:o,tile:a,terra:c,granite:l,concrete:h,concfloor:u,plaster:d,grass:f,pave:g,fabricTex:b,brushed:m,wool:p,linen:x,boucle:v,wallPaint:_,wall:pn(S("#f4f1ea",{roughness:.88,metalness:0,map:_.map,normalMap:_.normalMap,normalScale:new ne(.28,.28),roughnessMap:_.roughnessMap,envMapIntensity:.12}),.55),ceiling:S("#f7f4ee",{roughness:.92,metalness:0,envMapIntensity:.2}),glass:new Tt({color:"#eef4f8",transparent:!0,opacity:.14,roughness:.04,metalness:.02,transmission:.86,thickness:.03,ior:1.45,envMapIntensity:.35}),glassRail:new Tt({color:"#e8f0f5",transparent:!0,opacity:.16,roughness:.05,metalness:.08,transmission:.8,thickness:.02,envMapIntensity:.3}),frame:S("#2b2e2c",{roughness:.45,metalness:.35}),door:S("#6b4a2e",{roughness:.55,metalness:.05,map:r.map,roughnessMap:r.roughnessMap,normalMap:r.normalMap,normalScale:new ne(.4,.4)}),metal:S("#8a8e92",{roughness:.35,metalness:.8}),gold:S("#c4a265",{roughness:.3,metalness:.7}),brass:S("#c9a15b",{roughness:.34,metalness:.92,normalMap:m.normalMap,roughnessMap:m.roughnessMap,normalScale:new ne(.7,.25),envMapIntensity:.85}),blackMetal:S("#1c1e20",{roughness:.58,metalness:.72,normalMap:m.normalMap,roughnessMap:m.roughnessMap,normalScale:new ne(.5,.2),envMapIntensity:.4}),fabric:S("#8e8578",{roughness:.84,metalness:0,map:p.map,normalMap:p.normalMap,roughnessMap:p.roughnessMap,normalScale:new ne(.85,.85),envMapIntensity:.28}),mattress:S("#d8d0c4",{roughness:.94,map:x.map,normalMap:x.normalMap,normalScale:new ne(.7,.7),roughnessMap:x.roughnessMap,envMapIntensity:.12}),plant:S("#2d5a3d",{roughness:.8}),soil:S("#3a2a1c",{roughness:1}),counter:new Tt({color:"#d8d4cc",roughness:.22,metalness:.04,clearcoat:.7,clearcoatRoughness:.12,envMapIntensity:1.05}),cabinet:S("#f3f1ec",{roughness:.55}),woodFur:S("#8b5a2b",{roughness:.62,metalness:.02,map:r.map,roughnessMap:r.roughnessMap,normalMap:r.normalMap,normalScale:new ne(.55,.55),envMapIntensity:.55}),ceramic:new Tt({color:"#f4f6f7",roughness:.2,metalness:.03,clearcoat:.8,clearcoatRoughness:.14,envMapIntensity:1}),water:new Tt({color:"#6a9ab8",transparent:!0,opacity:.55,roughness:.15,metalness:.05,transmission:.4}),emissive:S("#fff4d8",{emissive:"#fff4d8",emissiveIntensity:.85,roughness:1})}}function Lu(){const s=new Uint8Array([255,255,255,255]),e=new Zs(s,1,1,hn);return e.colorSpace=vt,e.needsUpdate=!0,e}const Is={modern:{flooring:"wood",wall:"#f4f1ea",kitchen:"white",fabric:"#8e8578",wood:"#7a5a38"},luxury:{flooring:"marble",wall:"#f3ebe0",kitchen:"walnut",fabric:"#5c1a1a",wood:"#3f2a1a"},minimal:{flooring:"tile",wall:"#f7f7f5",kitchen:"white",fabric:"#d0cbc2",wood:"#c4b7a0"},traditional:{flooring:"marble",wall:"#f3e6d0",kitchen:"granite",fabric:"#7a2e1f",wood:"#5c3310"}},O_=[{id:"white",color:"#f7f5f0",name:"White"},{id:"cream",color:"#f3ebe0",name:"Cream"},{id:"sage",color:"#d5ddd2",name:"Sage"},{id:"sand",color:"#e8d7bc",name:"Sand"},{id:"grey",color:"#d9d6d0",name:"Grey"},{id:"rose",color:"#ead7d3",name:"Rose"},{id:"terracotta",color:"#e2b89a",name:"Terracotta"},{id:"mint",color:"#d5e4dc",name:"Mint"}];function Iu(s,e){return e==="marble"?s.marble:e==="tile"?s.tile:s.wood}function ku(s,e){e==="white"?(s.cabinet.color.set("#f3f1ec"),s.cabinet.map=null,s.counter.color.set("#ece9e2"),s.counter.map=null,s.counter.roughness=.18,"clearcoat"in s.counter&&(s.counter.clearcoat=.85,s.counter.clearcoatRoughness=.1)):e==="walnut"?(s.cabinet.color.set("#6b4324"),s.cabinet.map=s.wood.map,s.counter.color.set("#1f1f1f"),s.counter.map=null,s.counter.roughness=.25):e==="black"?(s.cabinet.color.set("#1e1f21"),s.cabinet.map=null,s.counter.color.set("#d8d4cc"),s.counter.map=null,s.counter.roughness=.25):(s.cabinet.color.set("#6b4324"),s.cabinet.map=s.wood.map,s.counter.color.set("#ffffff"),s.counter.map=s.granite.map,s.counter.normalMap=s.granite.normalMap,s.counter.roughnessMap=s.granite.roughnessMap,s.counter.roughness=.4),s.cabinet.needsUpdate=!0,s.counter.needsUpdate=!0}function Nu(s,e){const t=Is[e.style];s.fabric.color.set(t.fabric),s.fabric.needsUpdate=!0,s.woodFur.color.set(t.wood),s.woodFur.needsUpdate=!0,e.style==="luxury"?s.mattress.color.set("#efe2cc"):e.style==="traditional"?s.mattress.color.set("#f3e6d0"):e.style==="minimal"?s.mattress.color.set("#f4f2ec"):s.mattress.color.set("#ece6da"),s.mattress.needsUpdate=!0}function Xa(s,e=1){const t=s.attributes.position;if(!t)return;const n=new Float32Array(t.count*2);for(let r=0;r<t.count;r++)n[r*2]=t.getX(r)*e+40,n[r*2+1]=-t.getZ(r)*e+40;s.setAttribute("uv",new qt(n,2)),s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere();const i=s.attributes.normal;if(i&&i.getY(0)<0){for(let o=0;o<i.count;o++)i.setXYZ(o,-i.getX(o),-i.getY(o),-i.getZ(o));i.needsUpdate=!0;const r=s.index;if(r){for(let o=0;o<r.count;o+=3){const a=r.getX(o+1);r.setX(o+1,r.getX(o+2)),r.setX(o+2,a)}r.needsUpdate=!0}}}function ja(s){return 1/(U_[s]??2)}function z_(s,e,t="#ffffff"){const n=e==="marble",i=e==="tile"||e==="tile-wet";return s.map.wrapS=s.map.wrapT=jt,s.normalMap.wrapS=s.normalMap.wrapT=jt,s.roughnessMap.wrapS=s.roughnessMap.wrapT=jt,new it({color:t,map:s.map,normalMap:s.normalMap,roughnessMap:s.roughnessMap,roughness:n?.28:i?.42:.6,metalness:0,envMapIntensity:n?.28:i?.2:.1,normalScale:new ne(n?.45:.7,n?.45:.7),side:wt})}function B_(s,e){const t=e==="marble",n=e==="tile"||e==="tile-wet";s.roughness=t?.28:n?.42:.6,s.envMapIntensity=t?.28:n?.2:.12,s.metalness=0,s.normalScale&&s.normalScale.set(t?.45:.7,t?.45:.7),s.needsUpdate=!0}function H_(s,e,t){s.map=e.map,s.normalMap=e.normalMap,s.roughnessMap=e.roughnessMap,B_(s,t)}function zr(s,e){return e==="luxury"||e==="traditional"?s.brass:s.blackMetal}function Uu(s,e){if(e===qf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===jc||e===Cd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===jc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class zl extends Ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new j_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new oy(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Rr.extractUrlBase(e);o=Rr.resolveURL(l,this.path)}else o=Rr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ur(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===uf){try{o[ot.KHR_BINARY_GLTF]=new ay(e)}catch(u){i&&i(u);return}r=JSON.parse(o[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new _y(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:o[u]=new W_;break;case ot.KHR_DRACO_MESH_COMPRESSION:o[u]=new cy(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:o[u]=new ly;break;case ot.KHR_MESH_QUANTIZATION:o[u]=new hy;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function G_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class V_{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ft);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Fr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new On(h),l.distance=u;break;case"spot":l=new Nl(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class W_{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ft),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}}class X_{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class j_{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(a,a)}return Promise.all(r)}}class q_{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Y_{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Z_{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ft)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class K_{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class $_{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],Ft),Promise.all(r)}}class J_{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Q_{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],Ft),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vt)),Promise.all(r)}}class ey{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class ty{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class ny{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class iy{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sy{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ry{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class oy{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const b=new Xe,m=new D,p=new Mn,x=new D(1,1,1),v=new Pl(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,b.compose(m,p,x));for(const _ in c)if(_==="_COLOR_0"){const S=c[_];v.instanceColor=new Zc(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);At.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const uf="glTF",dr=12,Fu={JSON:1313821514,BIN:5130562};class ay{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,dr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==uf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-dr,r=new DataView(e,dr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Fu.JSON){const l=new Uint8Array(e,dr+o,a);this.content=n.decode(l)}else if(c===Fu.BIN){const l=dr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=il[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=il[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=ks[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},a,l,Ft,d)})})}}class ly{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hy{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}}class df extends Hr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,x=1-m,v=p-d+u;for(let _=0;_!==a;_++){const S=o[b+_+a],E=o[b+_+c]*h,w=o[g+_+a],A=o[g+_]*h;r[_]=x*S+v*E+m*w+p*A}return r}}const uy=new Mn;class dy extends df{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return uy.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ou={9728:Yt,9729:kt,9984:xd,9985:Lo,9986:br,9987:Un},zu={33071:Wn,33648:Ho,10497:jt},qa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},il={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fy={CUBICSPLINE:void 0,LINEAR:Dr,STEP:Pr},Ya={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function py(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new it({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pi})),s.DefaultMaterial}function Gi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function my(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function gy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function by(s){let e;const t=s.extensions&&s.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Za(t.attributes):e=s.indices+":"+Za(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Za(s.targets[n]);return e}function Za(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function sl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const xy=new Xe;class _y{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new G_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ia(this.options.manager):this.textureLoader=new zx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ur(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Gi(r,a,i),ci(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Rr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=qa[i.type],a=ks[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new qt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=qa[i.type],l=ks[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(x);v||(b=new l(a,p*f,i.count*f/h),v=new Iv(b,f/h),t.cache.add(x,v)),m=new Rl(v,c,d%f/h,g)}else a===null?b=new l(i.count*c):b=new l(a,d,i.count*c),m=new qt(b,c,g);if(i.sparse!==void 0){const p=qa.SCALAR,x=ks[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,S=new x(o[1],v,i.sparse.count*p),E=new l(o[2],_,i.sparse.count*c);a!==null&&(m=new qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,A=S.length;w<A;w++){const M=S[w];if(m.setX(M,E[w*c]),c>=2&&m.setY(M,E[w*c+1]),c>=3&&m.setZ(M,E[w*c+2]),c>=4&&m.setW(M,E[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ou[d.magFilter]||kt,h.minFilter=Ou[d.minFilter]||Un,h.wrapS=zu[d.wrapS]||jt,h.wrapT=zu[d.wrapT]||jt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Yt&&h.minFilter!==kt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){const m=new Bt(b);m.needsUpdate=!0,d(m)}),t.load(Rr.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ci(u,o),u.userData.mimeType=o.mimeType||vy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new $d,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Kd,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return it}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){const u=i[ot.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ft),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,vt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=wt);const h=r.alphaMode||Ya.OPAQUE;if(h===Ya.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ya.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ct&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ne(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ct&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ct){const u=r.emissiveFactor;a.emissive=new Le().setRGB(u[0],u[1],u[2],Ft)}return r.emissiveTexture!==void 0&&o!==Ct&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&Gi(i,u,r),u})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Bu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=by(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Bu(new Vt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?py(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const b=h[f],m=o[f];let p;const x=l[f];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Nv(b,x):new le(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?p.geometry=Uu(p.geometry,Cd):m.mode===xn.TRIANGLE_FAN&&(p.geometry=Uu(p.geometry,jc));else if(m.mode===xn.LINES)p=new Ov(b,x);else if(m.mode===xn.LINE_STRIP)p=new Dl(b,x);else if(m.mode===xn.LINE_LOOP)p=new zv(b,x);else if(m.mode===xn.POINTS)p=new Bv(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&gy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ci(p,r),m.extensions&&Gi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Gi(i,u[0],r),u[0];const d=new Et;r.extensions&&Gi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(Ld.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ko(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Xe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Cl(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let x=0,v=d.length;x<v;x++){const _=d[x],S=f[x],E=g[x],w=b[x],A=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const M=n._createAnimationTracks(_,S,E,w,A);if(M)for(let y=0;y<M.length;y++)p.push(M[y])}return new Rx(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,xy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Zd:l.length>1?h=new Et:l.length===1?h=l[0]:h=new At,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ci(h,r),r.extensions&&Gi(n,h,r),r.matrix!==void 0){const u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Et;n.name&&(r.name=i.createUniqueName(n.name)),ci(r,n),n.extensions&&Gi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Fn||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Ti[r.path]===Ti.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ti[r.path]){case Ti.weights:l=Hs;break;case Ti.rotation:l=Gs;break;case Ti.position:case Ti.scale:l=Vs;break;default:switch(n.itemSize){case 1:l=Hs;break;case 2:case 3:default:l=Vs;break}break}const h=i.interpolation!==void 0?fy[i.interpolation]:Dr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Ti[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=sl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Gs?dy:df;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function yy(s,e,t){const n=e.attributes,i=new mn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){const h=sl(ks[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const b=sl(ks[d.componentType]);c.multiplyScalar(b)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Zn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Bu(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=il[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return rt.workingColorSpace!==Ft&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),ci(s,e),yy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?my(s,e.targets,t):s})}const nn=3.15,Bl=7,qi=8,My=.45,_r=6.4,wy={ox:.2,oz:10,rotY:180,mirrorX:!1,mirrorZ:!1,width:11,depth:9},Sy={ox:16.2,oz:10,rotY:0,mirrorX:!1,mirrorZ:!0,width:11,depth:9},Ty={ox:8.45,oz:0,rotY:180,mirrorX:!1,mirrorZ:!1,width:10.5,depth:10},yr={ox:(27.4-12.192)/2,oz:2.6,rotY:0,mirrorX:!1,mirrorZ:!1,width:12.192,depth:15.24},ji={x:11.2,z:10,w:5,d:6.2},ui=[[.2,10],[.2,19.2],[27.2,19.2],[27.2,10],[18.95,10],[18.95,0],[8.45,0],[8.45,10]];function zo(s){return s===qi?[{suffix:"PH",planId:"penthouse",typeLabel:"Penthouse",transform:yr}]:[{suffix:"A",planId:"2bhk",typeLabel:"2 BHK",transform:wy},{suffix:"B",planId:"2bhk",typeLabel:"2 BHK",transform:Sy},{suffix:"C",planId:"3bhk",typeLabel:"3 BHK",transform:Ty}]}function Mr(s,e){return`${s}${e}`}function wn(s,e,t){let n=t.mirrorX?t.width-s:s,i=t.mirrorZ?t.depth-e:e;const r=t.rotY*Math.PI/180,o=t.width/2,a=t.depth/2,c=n-o,l=i-a,h=Math.cos(r),u=Math.sin(r),d=c*h-l*u+o,f=c*u+l*h+a;return[t.ox+d,t.oz+f]}function wr(s,e){const t=[[s.x,s.z],[s.x+s.w,s.z],[s.x+s.w,s.z+s.d],[s.x,s.z+s.d]].map(([l,h])=>wn(l,h,e)),n=t.map(l=>l[0]),i=t.map(l=>l[1]),r=Math.min(...n),o=Math.max(...n),a=Math.min(...i),c=Math.max(...i);return{x:r,z:a,w:o-r,d:c-a}}function Ey(s){return{minX:s.x,maxX:s.x+s.w,minZ:s.z,maxZ:s.z+s.d}}function Br(s){return _r+(s-1)*nn}function Ka(){return[13.7,10.6]}function $a(s){return s===qi?"Penthouse":`Floor ${s}`}function ff(s){return s.type==="Penthouse"&&s.terraceArea_sqft?`${s.area_sqft.toLocaleString("en-IN")} sq ft + ${s.terraceArea_sqft.toLocaleString("en-IN")} sq ft terrace`:`${s.area_sqft.toLocaleString("en-IN")} sq ft`}const Hu=new D,Gu=new Mn,Vu=new D,Ay=new D(0,1,0);function qe(s,e,t,n=0,i=1,r=1,o=1){return Hu.set(s,e,t),Gu.setFromAxisAngle(Ay,n),Vu.set(i,r,o),new Xe().compose(Hu,Gu,Vu)}function st(s,e,t,n={}){const i=new Pl(s,e,Math.max(1,t.length));i.count=t.length;for(let r=0;r<t.length;r++)i.setMatrixAt(r,t[r]);if(i.instanceMatrix.needsUpdate=!0,n.colors&&n.colors.length){for(let r=0;r<n.colors.length;r++)i.setColorAt(r,n.colors[r]);i.instanceColor&&(i.instanceColor.needsUpdate=!0)}return n.shadows!==!1&&(i.castShadow=!0,i.receiveShadow=!0),i}function Ry(){const s=new Ks;s.moveTo(ui[0][0],ui[0][1]);for(let e=1;e<ui.length;e++)s.lineTo(ui[e][0],ui[e][1]);return s.closePath(),s}function Hl(s,e){const t=new ta(e??Ry(),{depth:s,bevelEnabled:!1});return t.rotateX(Math.PI/2),t.translate(0,s,0),t.computeVertexNormals(),t}function Ja(){const s=new Ks;return s.moveTo(.2,10),s.lineTo(.2,19.2),s.lineTo(27.2,19.2),s.lineTo(27.2,10),s.closePath(),s}function Qa(s,e,t,n){const i=new le(Hl(e,n),s);return i.position.y=t,i.castShadow=!0,i.receiveShadow=!0,i}function Gl(){return[{x:.2,z:19.2,len:27,alongX:!0,inward:-1},{x:.2,z:10,len:8.25,alongX:!0,inward:1},{x:18.95,z:10,len:8.25,alongX:!0,inward:1},{x:8.45,z:0,len:10.5,alongX:!0,inward:1},{x:.2,z:10,len:9.2,alongX:!1,inward:1},{x:27.2,z:10,len:9.2,alongX:!1,inward:-1},{x:8.45,z:0,len:10,alongX:!1,inward:-1},{x:18.95,z:0,len:10,alongX:!1,inward:1}]}function oi(s,e,t=.74){return new it({color:e,map:s.map,normalMap:s.normalMap,roughnessMap:s.roughnessMap,roughness:t,metalness:.04,envMapIntensity:.55,normalScale:new ne(.55,.55)})}function Wu(s){const e=document.createElement("canvas");e.width=256,e.height=512;const t=e.getContext("2d");t.fillStyle=s?"#0c0f14":"#4a5360",t.fillRect(0,0,256,512);const n=18,i=36,r=256/n,o=512/i;for(let c=0;c<i;c++)for(let l=0;l<n;l++){if(s){if(Math.random()>.38)continue;t.fillStyle=Math.random()>.22?"#ffd090":"#c8d8ff"}else{if(Math.random()>.08)continue;t.fillStyle="rgba(200,214,224,0.28)"}const h=l*r+r*.28,u=c*o+o*.28;t.fillRect(h,u,r*.38,o*.42)}const a=new Jo(e);return a.wrapS=a.wrapT=jt,a.colorSpace=vt,a.anisotropy=4,a.minFilter=kt,a.magFilter=kt,a.generateMipmaps=!1,a.needsUpdate=!0,a}function Cy(s,e={}){const t=!!e.mobile,n=new Et;n.name="tower";const i=[],r=[],o=[],a=[],c=[],l=[],h=[],u=[],d=new Map,f=pn(oi(s.plaster,"#e6d9c4",.86),.32),g=pn(oi(s.plaster,"#efe6d8",.86),.42);pn(oi(s.plaster,"#e4d9c8",.88),.4);const b=pn(oi(s.concfloor,"#f0ebe1",.62),.18),m=pn(oi(s.wood,"#8d6a48",.7),.5),p=pn(new it({color:"#3f7a36",map:s.grass.map,normalMap:s.grass.normalMap,roughnessMap:s.grass.roughnessMap,roughness:.95,envMapIntensity:.22}),.22),x=pn(oi(s.pave,"#d8d0c4",.86),.11),v=pn(oi(s.concfloor,"#8a8680",.9),.12),_=pn(oi(s.concfloor,"#2c2d30",.95),.16),S=pn(new it({color:"#1c4a26",map:s.grass.map,normalMap:s.grass.normalMap,roughness:.95,envMapIntensity:.18}),.35),E=pn(oi(s.wood,"#9a7a55",.72),.45),w=new it({color:"#c4ab82",roughness:.42,metalness:.62,envMapIntensity:1}),A=new it({color:"#1c1e20",roughness:.42,metalness:.55,envMapIntensity:.7}),M=new it({color:"#c9cdd1",roughness:.28,metalness:.85,envMapIntensity:1.1}),y=new Tt({color:"#8aa4b4",metalness:.38,roughness:.055,transparent:!0,opacity:.46,envMapIntensity:1.9,clearcoat:.6,clearcoatRoughness:.08});h.push(y);const R=new Tt({color:"#6a8290",metalness:.08,roughness:.04,transparent:!0,opacity:.18,envMapIntensity:1.4,clearcoat:.5,clearcoatRoughness:.06,depthWrite:!1});h.push(R);const k=s.glassRail.clone();k.opacity=.18,k.roughness=.04,k.envMapIntensity=1.4,k.transmission=.72;const N=s.water.clone();N.color.set("#3d7a88"),N.roughness=.06,N.transmission=.55,N.thickness=.5,N.ior=1.33,N.opacity=.72,N.envMapIntensity=1.4,N.transparent=!0,l.push(N);const I=new it({color:"#fff4d8",emissive:"#ffd9a0",emissiveIntensity:0,roughness:.35,metalness:.05});l.push(I);const O=new it({color:"#f0d4a8",emissive:"#ffc888",emissiveIntensity:.7,roughness:1,metalness:0,side:wt});l.push(O);const U=y.clone();U.userData.windowGlow=!0,h.push(U);const z=(be,Te=!0)=>(Te&&(be.userData.structure=!0,a.push(be)),n.add(be),be),H=new le(new Qo(520,64),new it({color:"#3a3c3a",roughness:1,envMapIntensity:.08}));H.rotation.x=-Math.PI/2,H.position.set(13.7,-.16,8),H.receiveShadow=!0,z(H);const q=new le(new ve(68,.04,82),p);q.position.set(14,-.02,5),q.receiveShadow=!0,z(q);const W=new le(new ve(42,.05,36),x);W.position.set(13.7,.01,6),W.receiveShadow=!0,z(W);const Z=new Ks;Z.moveTo(-5.2,-36),Z.lineTo(5.2,-36),Z.lineTo(5.6,-9),Z.lineTo(12,-9),Z.lineTo(12,-1.8),Z.lineTo(-12,-1.8),Z.lineTo(-12,-9),Z.lineTo(-5.6,-9),Z.closePath();const he=new ta(Z,{depth:.07,bevelEnabled:!1});he.rotateX(Math.PI/2),he.translate(0,.07,0);const ge=new le(he,v);ge.position.set(13.7,.03,0),ge.receiveShadow=!0,z(ge);const K=new le(new ve(220,.06,11),_);K.position.set(13.7,-.04,-48),K.receiveShadow=!0,z(K);const F=new le(new ve(220,.07,2.6),x);F.position.set(13.7,0,-41.2),F.receiveShadow=!0,z(F);const B=new le(new ve(220,.16,.28),b);B.position.set(13.7,.05,-42.5),z(B);const Y=[];for(let be=-20;be<=20;be++)Y.push(qe(13.7+be*6.5,.005,-48,0,3.2,.02,.16));const ee=new it({color:"#e8e4d8",roughness:.7,envMapIntensity:.1});z(st(new ve(1,1,1),ee,Y,{shadows:!1}),!1);const fe=new le(new ve(12.4,.28,6.4),f);fe.position.set(13.7,.08,29.5),fe.receiveShadow=!0,z(fe);const pe=new le(new ve(14.2,.08,8.2),E);pe.position.set(13.7,.02,29.5),pe.receiveShadow=!0,z(pe);const Re=new le(new ve(11.6,.22,5.6),N);Re.position.set(13.7,.12,29.5),z(Re);const $=new On("#7ec8d8",0,10,2);$.position.set(13.7,.3,29.5),$.userData.nightI=1.6,$.userData.goldenI=.25,c.push($),z($);const oe=[];for(const[be,Te,ze,re,et]of[[6.4,-22,.5,18,.85],[21,-22,.5,18,.85],[6.4,-8,.5,8,.85],[21,-8,.5,8,.85],[-14,5,.55,68,.95],[42,5,.55,68,.95],[14,41.4,52,.55,.95],[-4,-32.4,22,.55,.95],[32,-32.4,22,.55,.95],[2,16,8,.45,.7],[25.4,16,8,.45,.7]])oe.push(qe(be,et/2,Te,0,ze,et,re));z(st(new ve(1,1,1),S,oe));const L=2.15,_e=[[-18,-34,27.5,.32],[18.5,-34,27.5,.32],[-18,44,64,.32],[-18,-34,.32,78.32],[46,-34,.32,78.32]],ae=[],we=[],xe=[];for(const[be,Te,ze,re]of _e){ae.push(qe(be+ze/2,L/2,Te+re/2,0,ze,L,re));const et=ze>re,Lt=et?ze:re,Ni=Math.max(2,Math.floor(Lt/7));for(let Jt=0;Jt<=Ni;Jt++){const Jn=Jt/Ni,ss=et?be+Jn*ze:be+ze/2,rs=et?Te+re/2:Te+Jn*re;we.push(qe(ss,L/2+.15,rs,0,.55,L+.3,.55))}const er=Math.floor(Lt/.16);for(let Jt=0;Jt<er;Jt++){const Jn=(Jt+.5)/er,ss=et?be+Jn*ze:be+ze/2,rs=et?Te+re/2:Te+Jn*re;xe.push(qe(ss,L+.45,rs,et?0:Math.PI/2,.03,.9,.03))}}z(st(new ve(1,1,1),f,ae)),z(st(new ve(1,1,1),b,we)),z(st(new ve(1,1,1),A,xe,{shadows:!1}));const Oe=new le(new ve(9,.3,.5),f);Oe.position.set(13.7,L+.55,-34),z(Oe);const Ce=st(new ve(.7,3.1,.7),f,[qe(13.7-4.6,1.55,-34),qe(13.7+4.6,1.55,-34)]);z(Ce);const P=new le(new ve(7.2,1.8,.32),f);P.position.set(5,.95,-18),P.castShadow=!0,z(P);const T=document.createElement("div");T.className="unit-card",T.innerHTML='<div class="u-id">Sample Tower</div><div class="u-meta">Lead Setu demo · not a real project</div>',T.style.pointerEvents="none";const V=new Ws(T);V.position.set(5,2.3,-18),z(V);const ie=[[-20,-45],[-6,-45],[8,-45],[20,-45],[34,-45],[48,-45],[7.2,-28],[20.2,-28],[7.2,-16],[20.2,-16],[1.2,-6],[26.2,-6],[1,8],[26.4,8]],ue=[],se=[],ke=[];for(const[be,Te]of ie)ue.push(qe(be,2.15,Te,0,1,1,1)),se.push(qe(be+.45,4.15,Te,0,1,1,1)),ke.push(qe(be+.75,4.05,Te));const ye=new rn(.06,.09,4.3,8);z(st(ye,A,ue)),z(st(new ve(.9,.05,.06),M,se,{shadows:!1})),z(st(new mi(.14,10,8),I,ke,{shadows:!1}));const Ae=t?8:ie.length;for(let be=0;be<Ae;be++){const[Te,ze]=ie[be],re=new On("#ffd4a0",0,14,2);re.position.set(Te+.75,4.05,ze),re.userData.nightI=1.55,re.userData.goldenI=.28,c.push(re),z(re)}Hy(n,a,t),zy(n,a,c,l,f,g,b,m,R,A,O,s,t),Oy(n,a,w);const Ye=[[.2,.15,14.6],[27.2,.15,14.6],[6,.15,19.2],[21.4,.15,19.2],[13.7,.15,0],[8.45,.15,5],[18.95,.15,5]];for(const[be,Te,ze]of Ye){const re=new Nl("#ffe4c0",0,22,.42,.55,1.4);re.position.set(be,Te,ze),re.target.position.set(be,Te+14,ze),re.target.updateMatrixWorld(),re.userData.nightI=3.2,re.userData.goldenI=.7,c.push(re),z(re),z(re.target)}const me=Py();for(let be=1;be<=Bl;be++){const Te=Ly(be,s,{facade:g,slabMat:b,soffit:m,glass:U,mullion:A,capRail:M,railGlass:k},me);n.add(Te),o.push(Te);const ze=Te.getObjectByName("hit");ze&&i.push(ze)}const Fe=Ny(s,{facade:g,slabMat:b,soffit:m,glass:U,mullion:A,capRail:M,railGlass:k,stone:f,finMat:w},me);n.add(Fe),o.push(Fe);const We=Fe.getObjectByName("hit");We&&i.push(We);for(const be of o){const Te=be.userData.practicals;Te&&c.push(...Te)}let je=null,Ne=0;function nt(be){u.length=0;for(const Te of o){const ze=Te.userData.floor,re=be===ze;Te.traverse(Lt=>{(Lt.name==="highlight"||Lt.name==="outline"||Lt.name==="outline-edge")&&(Lt.visible=re)});const et=Te.getObjectByName("floor-label");et&&(et.visible=je===null&&re),re&&u.push(Te)}}function Ze(be){for(const[Te,ze]of d)ze.visible=Te===be}function at(be){je=be;for(const Te of o){const ze=Te.userData.floor;be===null?(Te.visible=!0,Te.traverse(re=>{(re.userData.facade||re.userData.hideInCutaway)&&(re.visible=!0),re.name==="floor-label"&&(re.visible=!1),(re.name==="highlight"||re.name==="outline"||re.name==="outline-edge")&&(re.visible=!1)})):(Te.visible=ze===be,Te.traverse(re=>{(re.userData.facade||re.userData.hideInCutaway)&&(re.visible=!1),re.name==="floor-label"&&(re.visible=!1)}))}for(const Te of a)Te.visible=be===null}function G(be){const Te=be==="night",ze=be==="golden";for(const re of c){const et=re.userData.nightI??1.2,Lt=re.userData.goldenI??0,Ni=re.userData.morningI??0;re.intensity=Te?et:ze?Lt:Ni,re.visible=re.intensity>.01}for(const re of l){if(re===N){re.emissive?.set?.(Te?"#163848":"#000000"),"emissiveIntensity"in re&&(re.emissiveIntensity=Te?.55:0);continue}re.emissiveIntensity=Te?re===O?2.6:2.8:ze?.85:re===O?.7:0}n.traverse(re=>{const et=re.userData.setCityNight;et&&et(Te,ze)});for(const re of h){const et=Te?re.userData.envNight:re.userData.envDay;if(et&&(re.envMap=et,re.needsUpdate=!0),re===R){re.emissive.set(Te?"#ffc888":ze?"#ffd8b0":"#f0e0c8"),re.emissiveIntensity=Te?.65:ze?.18:.08,re.opacity=Te?.42:.18,re.color.set(Te?"#e8c898":"#6a8290"),re.transparent=!0;continue}Te?(re.emissive.set("#ffc078"),re.emissiveIntensity=1.85,re.opacity=.88,re.color.set("#f3d2a0"),re.transparent=!0):ze?(re.emissive.set("#ffb070"),re.emissiveIntensity=.45,re.opacity=.55,re.color.set("#9eb8c6")):(re.emissive.set("#000000"),re.emissiveIntensity=0,re.opacity=.46,re.color.set("#8aa4b4"))}}function Se(be,Te){for(const ze of h)ze.userData.envDay=be,ze.userData.envNight=Te,be&&(ze.envMap=be,ze.needsUpdate=!0)}function te(be){Ne+=be;const Te=.24+.16*(.5+.5*Math.sin(Ne*2.6));for(const ze of o){const re=ze.getObjectByName("highlight");if(re&&re.visible){const et=re.material;et.opacity=Te}ze.traverse(et=>{if(et instanceof le&&(et.name==="outline"||et.name==="outline-edge")){if(!et.visible)return;const Lt=et.material;Lt.opacity=.65+.3*(.5+.5*Math.sin(Ne*2.6))}})}for(const[,ze]of d)if(ze.visible){const re=ze.material;re.opacity=.5+.35*(.5+.5*Math.sin(Ne*2.8))}}function de(){return u.slice()}function Ie(){n.removeFromParent()}n._unitOutlines=d;async function De(){await By(n,a)}return{group:n,floorHits:i,unitHits:r,highlight:nt,highlightUnit:Ze,setIsolated:at,setTime:G,setEnv:Se,outlined:de,tick:te,loadTrees:De,dispose:Ie}}function Py(){return{win:new ve(1.55,1.55,.05),mullV:new ve(.045,1.55+.06,.06),mullH:new ve(1.55+.06,.045,.06),clad:new ve(3-.04,nn-.42,.24),fin:new ve(.1,nn-.42,.38),slab:Hl(.32),balSlab:new ve(5.15,.28,1.8),balRail:new ve(4.85,1.1,.024),balRailS:new ve(.024,1.1,1.62),cap:new ve(4.9,.028,.05),capS:new ve(.05,.028,1.66)}}function Dy(s,e,t){return!!(s.alongX&&Math.abs(t-19.2)<.2&&(e>5.3&&e<10.7||e>16.5&&e<21.9))}function Ly(s,e,t,n){const i=new Et;i.userData.floor=s;const r=Br(s),o=new le(n.slab,t.slabMat);o.position.y=r,o.castShadow=!0,o.receiveShadow=!0,o.userData.ghostable=!0,i.add(o);const a=new le(n.slab,t.slabMat);a.position.y=r+.02,a.scale.set(1,.55,1),a.castShadow=!0,a.userData.facade=!0,i.add(a);const c=new le(n.slab,t.slabMat);c.position.y=r+nn-.12,c.scale.set(1,.35,1),c.userData.ghostable=!0,c.userData.hideInCutaway=!0,c.castShadow=!0,i.add(c),Iy(i,r+.32,t,n),ky(i,r,t,n);const l=new le(n.slab,new Ct({visible:!1}));l.position.y=r,l.scale.set(1,(nn+.01)/.32,1),l.name="hit",l.userData.floor=s,i.add(l);const h=new Ct({color:"#f2d078",transparent:!0,opacity:.38,depthWrite:!1,side:wt,depthTest:!1}),u=new le(n.slab,h);u.position.y=r,u.scale.set(1.06,(nn+.08)/.32,1.06),u.name="highlight",u.renderOrder=8,u.visible=!1,i.add(u);const d=new Ct({color:"#ffe29a",side:Xt,transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1}),f=new le(n.slab,d);f.position.y=r-.06,f.scale.set(1.09,(nn+.28)/.32,1.09),f.name="outline",f.renderOrder=9,f.visible=!1,i.add(f);const g=new Et;g.name="highlight";const b=new Ct({color:"#ffd878",transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}),m=[...ui,ui[0]];for(let v=0;v<m.length-1;v++){const _=m[v],S=m[v+1],E=S[0]-_[0],w=S[1]-_[1],A=Math.hypot(E,w),M=(_[0]+S[0])/2,y=(_[1]+S[1])/2,R=Math.atan2(E,w),k=new le(new ve(.22,nn*.92,A+.22),b);k.position.set(M,r+nn/2,y),k.rotation.y=R,k.name="outline-edge",k.visible=!1,i.add(k)}const p=document.createElement("div");p.className="unit-card",p.style.padding="4px 8px",p.style.pointerEvents="none",p.innerHTML=`<div class="u-id">${s}</div>`;const x=new Ws(p);return x.position.set(-.8,r+nn/2,14.6),x.name="floor-label",x.visible=!1,i.add(x),i}function Iy(s,e,t,n){const i=[],r=[],o=[],a=[],c=[],l=[],h=nn-.42,u=3,d=1.55,f=1.55,g=.95;for(const v of Gl()){const _=Math.max(1,Math.round(v.len/u)),E=v.len/_/(u-.04);for(let w=0;w<_;w++){const A=(w+.5)/_,M=v.alongX?v.x+A*v.len:v.x,y=v.alongX?v.z:v.z+A*v.len,R=v.alongX?0:Math.PI/2,k=v.alongX?0:v.inward*.13,N=v.alongX?v.inward*.13:0,I=Dy(v,M,y);i.push(qe(M,e+h/2,y,R,E,1,1));const O=I?2.25:f,U=e+(I?.15+O/2:g+f/2);o.push(qe(M+k,U,y+N,R,I?1.2:1,O/f,1));const z=M+k,H=y+N,q=(I?d*1.2:d)/2;a.push(qe(z+(v.alongX?-q:0),U,H+(v.alongX?0:-q),R,1,O/f,1)),a.push(qe(z+(v.alongX?q:0),U,H+(v.alongX?0:q),R,1,O/f,1)),a.push(qe(z,U,H,R,.65,O/f,1)),c.push(qe(z,U-O/2,H,R,I?1.2:1,1,1)),c.push(qe(z,U+O/2,H,R,I?1.2:1,1,1)),I||(c.push(qe(z,U,H,R)),l.push(qe(z,e+g-.04,H+(v.alongX?N*1.4:0)+(v.alongX?0:k*1.4),R,1.15,.7,1.6)),r.push(qe(M+k*.4,e+g/2-.02,y+N*.4,R,.98,(g-.08)/h,1.05)))}}const b=st(n.clad,t.facade,i);if(b.userData.facade=!0,b.userData.ghostable=!0,s.add(b),r.length){const v=st(n.clad,t.facade,r);v.userData.facade=!0,v.userData.ghostable=!0,s.add(v)}const m=st(n.win,t.glass,o,{shadows:!1});m.userData.facade=!0,m.userData.windowGlow=!0,s.add(m);const p=st(n.mullV,t.mullion,a,{shadows:!1});p.userData.facade=!0,s.add(p);const x=st(n.mullH,t.mullion,c,{shadows:!1});if(x.userData.facade=!0,s.add(x),l.length){const v=st(n.mullH,t.facade,l,{shadows:!1});v.userData.facade=!0,s.add(v)}}function ky(s,e,t,n){const i=[5.35,16.55],r=19.05,o=5.15,a=1.8,c=[],l=[],h=[],u=[],d=[],f=[],g=[];for(const E of i){const w=E+o/2,A=r+a/2+.08,M=e+.16;c.push(qe(w,M,A)),l.push(qe(w,M-.16,A,0,.96,.35,.96));const y=M+.16+1.1/2;h.push(qe(w,y,r+a-.12)),u.push(qe(E+.12,y,A-.04)),d.push(qe(E+o-.12,y,A-.04)),f.push(qe(w,M+.16+1.1,r+a-.12)),g.push(qe(E+.12,M+.16+1.1,A-.04)),g.push(qe(E+o-.12,M+.16+1.1,A-.04))}const b=st(n.balSlab,t.slabMat,c);b.userData.facade=!0,s.add(b);const m=st(n.balSlab,t.soffit,l);m.userData.facade=!0,s.add(m);const p=st(n.balRail,t.railGlass,h,{shadows:!1}),x=st(n.balRailS,t.railGlass,u,{shadows:!1}),v=st(n.balRailS,t.railGlass,d,{shadows:!1});for(const E of[p,x,v])E.userData.facade=!0,s.add(E);const _=st(n.cap,t.capRail,f,{shadows:!1}),S=st(n.capS,t.capRail,g,{shadows:!1});_.userData.facade=!0,S.userData.facade=!0,s.add(_,S);for(const E of i){const w=new le(new rn(.05,.05,.03,10),new it({color:"#fff4d8",emissive:"#ffd090",emissiveIntensity:.4,roughness:1}));w.position.set(E+o/2,e+nn-.28,r+a*.45),w.userData.facade=!0,s.add(w);const A=new On("#ffd0a0",0,4.5,2);A.position.copy(w.position),A.userData.nightI=1.85,A.userData.goldenI=.2,A.userData.practical=!0,s.add(A),s.userData.practicals||(s.userData.practicals=[]),s.userData.practicals.push(A),s.userData.practicals}}function Ny(s,e,t){const n=new Et;n.userData.floor=qi;const i=Br(qi),r=new le(t.slab,e.slabMat);r.position.y=i,r.castShadow=!0,r.receiveShadow=!0,r.userData.ghostable=!0,n.add(r);const o=new le(t.slab,e.soffit);o.position.y=i+.2,o.scale.set(.995,.2,.995),n.add(o),Fy(n,i+.22,1.05,e.stone,e.capRail,e.railGlass);const a=yr.width,c=yr.depth,l=yr.ox+a/2,h=yr.oz+c/2,u=3.35,d=new le(new ve(a,u,c),e.facade);d.position.set(l,i+.22+u/2,h),d.castShadow=!0,d.userData.ghostable=!0,d.userData.hideInCutaway=!0,n.add(d);const f=[[0,c/2+.03,a*.78,.05,0],[0,-c/2-.03,a*.62,.05,0],[a/2+.03,0,.05,c*.58,Math.PI/2],[-a/2-.03,0,.05,c*.52,Math.PI/2]];for(const[S,E,w,A,M]of f){const y=new le(new ve(w,u*.7,A),e.glass);y.position.set(l+S,i+.22+u*.5,h+E),y.rotation.y=M,y.userData.windowGlow=!0,n.add(y);const R=5;for(let k=0;k<R;k++){const N=(k+.5)/R,I=new le(new ve(.045,u*.72,.06),e.mullion),O=Math.abs(w)>Math.abs(A);I.position.set(l+S+(O?(N-.5)*w:0),i+.22+u*.5,h+E+(O?0:(N-.5)*A)),n.add(I)}}const g=new le(new ve(a+.9,.28,c+.9),e.slabMat);g.position.set(l,i+.22+u+.14,h),g.castShadow=!0,g.userData.hideInCutaway=!0,n.add(g);const b=new le(new ve(a+1.15,.38,c+1.15),e.finMat);b.position.set(l,i+.22+u+.05,h),b.userData.hideInCutaway=!0,n.add(b),Uy(n,l,i+.22+u+.28,h-c*.15,8.4,6.2,2.45,e.soffit);const m=new le(new ve(28,4.6,22),new Ct({visible:!1}));m.position.set(13.7,i+2.2,10),m.name="hit",m.userData.floor=qi,n.add(m);const p=new le(new ve(28,4.6,22),new Ct({color:"#e8c878",transparent:!0,opacity:.28,depthWrite:!1}));p.position.set(13.7,i+2.2,10),p.name="highlight",p.visible=!1,n.add(p);const x=new le(new ve(28.6,4.9,22.5),new Ct({color:"#f0d48a",side:Xt,transparent:!0,opacity:.85,depthWrite:!1}));x.position.set(13.7,i+2.2,10),x.name="outline",x.visible=!1,n.add(x);const v=document.createElement("div");v.className="unit-card",v.innerHTML='<div class="u-id">PH</div><div class="u-meta">Penthouse</div>',v.style.pointerEvents="none";const _=new Ws(v);return _.position.set(l,i+4.4,h),_.name="floor-label",_.visible=!1,n.add(_),n}function Uy(s,e,t,n,i,r,o,a,c){const l=[],h=[[-i/2,-r/2],[i/2,-r/2],[-i/2,r/2],[i/2,r/2]];for(const[b,m]of h)l.push(qe(e+b,t+o/2,n+m,0,.18,o,.18));s.add(st(new ve(1,1,1),a,l));const u=[];u.push(qe(e,t+o,n-r/2,0,i+.3,.16,.18)),u.push(qe(e,t+o,n+r/2,0,i+.3,.16,.18)),u.push(qe(e-i/2,t+o,n,0,.18,.16,r+.3)),u.push(qe(e+i/2,t+o,n,0,.18,.16,r+.3)),s.add(st(new ve(1,1,1),a,u));const d=[],f=14;for(let b=0;b<f;b++){const m=(b+.5)/f;d.push(qe(e+(m-.5)*i,t+o+.1,n,0,.07,.06,r+.1))}const g=st(new ve(1,1,1),a,d,{shadows:!1});g.userData.hideInCutaway=!0,s.add(g)}function Fy(s,e,t,n,i,r){const o=[...ui,ui[0]],a=[],c=[],l=[];for(let h=0;h<o.length-1;h++){const u=o[h],d=o[h+1],f=d[0]-u[0],g=d[1]-u[1],b=Math.hypot(f,g),m=(u[0]+d[0])/2,p=(u[1]+d[1])/2,x=Math.atan2(f,g);a.push(qe(m,e+.18,p,x,.16,.36,b)),l.push(qe(m,e+.36+(t-.36)/2,p,x,.03,t-.36,b)),c.push(qe(m,e+t,p,x,.05,.025,b))}s.add(st(new ve(1,1,1),n,a)),s.add(st(new ve(1,1,1),r,l,{shadows:!1})),s.add(st(new ve(1,1,1),i,c,{shadows:!1}))}function Oy(s,e,t){const n=Br(1),i=Br(Bl)+nn,r=i-n,o=(n+i)/2,a=[];for(const l of Gl()){if(l.alongX&&Math.abs(l.z-0)<.2)continue;const h=Math.max(1,Math.round(l.len/9));for(let u=0;u<=h;u++){const d=u/h,f=l.alongX?l.x+d*l.len:l.x,g=l.alongX?l.z:l.z+d*l.len,b=l.alongX?0:l.inward*.32,m=l.alongX?l.inward*.32:0,p=l.alongX?0:Math.PI/2;a.push(qe(f+b,o,g+m,p,1.15,r/(nn-.42),1.15))}}const c=st(new ve(.1,nn-.42,.42),t,a);c.userData.structure=!0,s.add(c),e.push(c)}function zy(s,e,t,n,i,r,o,a,c,l,h,u,d){const f=T=>(T.userData.structure=!0,e.push(T),s.add(T),T),g=Qa(i,My,0,Ja());f(g);const b=Hl(_r-.35,Ja()),m=new le(b,i);m.position.y=.02,m.castShadow=!0,m.receiveShadow=!0,f(m);const p=Qa(o,.5,_r-.5);p.scale.set(1.04,1,1.04),p.position.x=13.7*(1-1.04),p.position.z=10.6*(1-1.04),f(p);const x=Qa(i,.85,0,Ja());x.scale.set(1.04,1,1.04),x.position.x=13.7*(1-1.04),x.position.z=10.6*(1-1.04),f(x);const v=[],_=[],S=_r-.55;for(const T of Gl()){const V=T.alongX&&Math.abs(T.z-0)<.25,ie=Math.max(1,Math.floor(T.len/1.5));for(let ue=0;ue<ie;ue++){const se=(ue+.5)/ie,ke=T.alongX?T.x+se*T.len:T.x,ye=T.alongX?T.z:T.z+se*T.len,Ae=T.alongX?0:Math.PI/2,Ye=T.alongX?0:T.inward*.14,me=T.alongX?T.inward*.14:0;V||(v.push(qe(ke+Ye,S/2,ye+me,Ae,1.46,S,.28)),_.push(qe(ke+Ye*1.6,2.15,ye+me*1.6,Ae,1.05,.85,.06)),_.push(qe(ke+Ye*1.6,4.35,ye+me*1.6,Ae,1.05,.85,.06)))}}f(st(new ve(1,1,1),i,v)),f(st(new ve(1,1,.08),c,_,{shadows:!1}));const E=13.7,w=5.1,A=10.3,M=9.8,y=_r-.15,R=new le(new ve(.35,y,M),i);R.position.set(E-A/2,y/2,w),R.castShadow=!0,f(R);const k=R.clone();k.position.x=E+A/2,f(k);const N=new le(new ve(A,y,.35),i);N.position.set(E,y/2,w+M/2),N.castShadow=!0,f(N);const I=new le(new ve(A-.4,.08,M-.2),i);I.position.set(E,.08,w),I.receiveShadow=!0,f(I);const O=new le(new ve(A-.2,.14,M),a);O.position.set(E,y-.1,w),f(O);const U=new le(new is(A-.8,y-.8),h);U.position.set(E,y*.48,w+M/2-.25),U.rotation.y=Math.PI,f(U);const z=new On("#ffd4a0",0,16,2);if(z.position.set(E,3.6,w),z.userData.nightI=3.4,z.userData.goldenI=1.1,z.userData.morningI=1.6,t.push(z),f(z),!d){const T=new On("#ffe0b0",0,12,2);T.position.set(E,2.4,w-2),T.userData.nightI=2.2,T.userData.goldenI=.6,T.userData.morningI=1,t.push(T),f(T)}const H=6,q=2,W=(A-.5)/H,Z=(y-.4)/q,he=[],ge=[],K=[],F=w-M/2-.04;for(let T=0;T<H;T++){for(let V=0;V<q;V++){const ie=E-A/2+.25+(T+.5)*W,ue=.2+(V+.5)*Z;he.push(qe(ie,ue,F,0,W-.08,Z-.08,1))}ge.push(qe(E-A/2+.25+T*W,y/2,F-.01,0,.06,y-.15,.08))}ge.push(qe(E+A/2-.25,y/2,F-.01,0,.06,y-.15,.08));for(let T=0;T<=q;T++)K.push(qe(E,.2+T*Z,F-.01,0,A-.3,.07,.08));f(st(new ve(1,1,.05),c,he,{shadows:!1})),f(st(new ve(1,1,1),l,ge)),f(st(new ve(1,1,1),l,K));const B=new le(new ve(.65,y+.2,.8),i);B.position.set(E-A/2-.05,y/2,F+.15),B.castShadow=!0,f(B);const Y=B.clone();Y.position.x=E+A/2+.05,f(Y);const ee=new le(new ve(A+1.4,.65,.95),o);ee.position.set(E,y+.15,F+.12),ee.castShadow=!0,f(ee);const fe=new le(new ve(A+.8,.18,.7),i);fe.position.set(E,.12,F+.05),f(fe);const pe=new le(new ve(3.2,1.05,.7),i);pe.position.set(E,.55,w+1.4),pe.castShadow=!0,f(pe);const Re=new le(new ve(3.4,.06,.85),u.gold??o);Re.position.set(E,1.08,w+1.4),f(Re);for(const T of[-1.15,1.15]){const V=new le(new ve(1.35,2.2,.08),l);V.position.set(ji.x+ji.w/2+T,1.15,ji.z+.15),f(V)}const $=16.5,oe=11,L=4.5,_e=F-oe/2-.2,ae=new le(new ve($,.28,oe),o);ae.position.set(E,L,_e),ae.castShadow=!0,f(ae);const we=new le(new ve($-.2,.08,oe-.2),a);we.position.set(E,L-.16,_e),f(we);const xe=[];for(let T=0;T<5;T++)for(let V=0;V<3;V++)xe.push(qe(E+(T-2)*($/5.4),L-.22,_e+(V-1)*(oe/3.6),0,$/6.2,.08,oe/4.2));f(st(new ve(1,1,1),a,xe,{shadows:!1}));const Oe=[];for(const T of[-5.8,0,5.8])for(const V of[-oe/2+.5,oe/2-.8])Oe.push(qe(E+T,L/2,_e+V,0,.7,L,.7));const Ce=st(new rn(.5,.56,1,16),i,Oe);f(Ce);const P=[];for(const T of[-5.8,0,5.8])for(const V of[-oe/2+.5,oe/2-.8])P.push(qe(E+T,L-.08,_e+V,0,.75,.14,.75));f(st(new ve(1,1,1),o,P));for(let T=0;T<3;T++){const V=new le(new ve(8.5-T*.15,.14,.9),i);V.position.set(E,.08+T*.14,F-.5-T*.28),V.receiveShadow=!0,f(V)}for(const T of[-4,0,4]){const V=new On("#ffe2b8",0,9,2);V.position.set(E+T,L-.35,_e),V.userData.nightI=1.7,V.userData.goldenI=.4,t.push(V),f(V)}}async function By(s,e){const t=new zl,n=["CommonTree_1.glb","CommonTree_2.glb","CommonTree_3.glb","PalmTree_1.glb","PalmTree_2.glb","Bush_1.glb","Bush_2.glb","BushBerries_1.glb"],i=[],r=[],o=[];if(await Promise.all(n.map(async d=>{try{const g=(await t.loadAsync(`./models/trees/${d}`)).scene;g.updateMatrixWorld(!0);const b=new mn().setFromObject(g),p=b.getSize(new D).y||1,x=new Et;x.add(g),g.position.y=-b.min.y;const v=d.startsWith("Bush")?1.05:d.startsWith("Palm")?7.2:7.8;x.scale.setScalar(v/p),x.traverse(_=>{const S=_;if(!S.isMesh)return;S.castShadow=!0,S.receiveShadow=!0;const E=Array.isArray(S.material)?S.material:[S.material];for(const w of E){if(!(w instanceof it))continue;w.metalness=.02,w.roughness=.86,w.envMapIntensity=.35;const A=(w.name||"").toLowerCase();A.includes("green")?(w.color.set("#2d6a34"),w.roughness=.9):A.includes("wood")&&(w.color.set("#4a2e1c"),w.roughness=.82)}}),d.startsWith("Bush")?r.push(x):d.startsWith("Palm")?o.push(x):i.push(x)}catch(f){console.warn("[tower] tree failed",d,f)}})),!i.length&&!o.length)return;const a=(d,f,g,b,m=1)=>{const p=d.clone(!0);p.position.set(f,0,g),p.rotation.y=b,p.scale.multiplyScalar(m),p.userData.structure=!0,s.add(p),e.push(p)};[[-22,-52.5,.95],[-8,-52.5,1.05],[6,-52.5,1],[22,-52.5,1.08],[36,-52.5,.98],[50,-52.5,1.05]].forEach(([d,f,g],b)=>{const m=i[b%Math.max(1,i.length)];m&&a(m,d,f,b*.7,g)}),[[4.6,-24],[22.8,-24],[4.6,-12],[22.8,-12],[3.2,-4],[24.2,-4]].forEach(([d,f],g)=>{const b=o[g%Math.max(1,o.length)]??i[0];b&&a(b,d,f,g*.5,.95+g%3*.06)}),[[-12,36,1.15],[-11,28,.95],[-13,18,1.05],[-11,8,1],[40,36,1.12],[39,26,.98],[41,16,1.08],[39,6,.95],[2,40,1.05],[13.7,42,1.2],[26,40,1],[-10,-18,.95],[38,-18,1],[-8,32,.85],[36,32,.9]].forEach(([d,f,g],b)=>{const m=i[b%Math.max(1,i.length)];m&&a(m,d,f,b*1.15,g)}),[[6.4,-31],[21,-31],[6.4,-13],[21,-13],[6,26],[21.4,26],[8,33],[19,33],[-14,-28],[42,-28],[-14,40],[42,40]].forEach(([d,f],g)=>{const b=r[g%Math.max(1,r.length)];b&&a(b,d,f,g*.9,1.05)})}function Hy(s,e,t){const n=Wu(!1),i=Wu(!0);n.repeat.set(2,3),i.repeat.set(2,3);const r=new it({color:"#4a5360",map:n,roughness:.9,metalness:.05,envMapIntensity:.22,emissiveMap:i,emissive:"#000000",emissiveIntensity:0});r.userData.cityDay=n,r.userData.cityNight=i,r.userData.isCity=!0;const o=[],a=h=>{const u=Math.sin(h*127.1+311.7)*43758.5453;return u-Math.floor(u)},c=t?36:64;for(let h=0;h<c;h++){const d=h<c*.55?-Math.PI*.15+a(h)*Math.PI*1.3:h/c*Math.PI*2+a(h)*.25,f=290+a(h+3)*150+h%7*8,g=13.7+Math.cos(d)*f,b=8+Math.sin(d)*f,m=14+a(h+7)*22,p=12+a(h+11)*18,x=22+a(h+17)*(a(h)>.72?70:38);o.push(qe(g,x/2,b,d+Math.PI/2,m,x,p))}const l=st(new ve(1,1,1),r,o,{shadows:!1});l.userData.structure=!0,l.userData.cityMat=r,l.frustumCulled=!1,s.add(l),e.push(l),l.userData.setCityNight=(h,u)=>{r.map=h?i:n,r.emissiveMap=i,r.emissive.set(h?"#ffd8a0":u?"#1a1008":"#000000"),r.emissiveIntensity=h?1.15:u?.1:0,r.color.set(h?"#10141a":u?"#5a554c":"#4a5360"),r.needsUpdate=!0}}const fr=new D;function vn(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;fr.copy(e),fr[n]=0,fr.normalize();const l=.5*o/(o+a),h=1-fr.angleTo(s)/c;return Math.sign(fr[t])===1?h*l:a/(o+a)+l+l*(1-h)}class Gy extends ve{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new D,c=new D,l=new D(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new D,b=.5/i;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=vn(g,c,"z","y",r,n),d[p+1]=1-vn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-vn(g,c,"z","y",r,n),d[p+1]=1-vn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-vn(g,c,"x","z",r,e),d[p+1]=vn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-vn(g,c,"x","z",r,e),d[p+1]=1-vn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-vn(g,c,"x","y",r,e),d[p+1]=1-vn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=vn(g,c,"x","y",r,e),d[p+1]=1-vn(g,c,"y","x",r,t);break}}}const ec=new WeakMap;class Vy extends Ii{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Ur(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,vt,n).catch(n)}decodeDracoFile(e,t,n,i,r=Ft,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ec.has(e)){const c=ec.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[r]={resolve:l,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),ec.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Vt;e.index&&t.setIndex(new qt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,c=new qt(o,a);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==vt)return;const n=new Le;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),rt.toWorkingColorSpace(n,vt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Ur(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Wy.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Wy(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(c),l),g=f.attributes.map(b=>b.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const b={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let x,v;if(l.useUniqueIDs)v=h[m],x=a.GetAttributeByUniqueId(d,v);else{if(v=a.GetAttributeId(d,o[h[m]]),v===-1)continue;x=a.GetAttribute(d,v)}const _=i(o,a,d,m,p,x);m==="color"&&(_.vertexColorSpace=l.vertexColorSpace),b.attributes.push(_)}return g===o.TRIANGULAR_MESH&&(b.index=n(o,a,d)),o.destroy(d),b}function n(o,a,c){const h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,c,l,h,u){const d=u.num_components(),g=c.num_points()*d,b=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(b);a.GetAttributeDataArrayForAllPoints(c,u,m,b,p);const x=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:x,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var pf=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,o=WebAssembly.instantiate(a(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function a(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var _=p.charCodeAt(v);x[v]=_>96?_-97:_>64?_-39:_+4}for(var S=0,v=0;v<p.length;++v)x[S++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,S)}function c(p,x,v,_,S,E){var w=r.exports.sbrk,A=v+3&-4,M=w(A*_),y=w(S.length),R=new Uint8Array(r.exports.memory.buffer);R.set(S,y);var k=p(M,v,_,y,S.length);if(k==0&&E&&E(M,A,_),x.set(R.subarray(M,M+v*_)),w(M-w(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var _=v.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function g(p){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(v),S=0;S<p;++S)u[S]=f(_);URL.revokeObjectURL(_)}function b(p,x,v,_,S){for(var E=u[0],w=1;w<u.length;++w)u[w].pending<E.pending&&(E=u[w]);return new Promise(function(A,M){var y=new Uint8Array(v),R=d++;E.pending+=p,E.requests[R]={resolve:A,reject:M},E.object.postMessage({id:R,count:p,size:x,source:y,mode:_,filter:S},[y.buffer])})}function m(p){o.then(function(){var x=p.data;try{var v=new Uint8Array(x.count*x.size);c(r.exports[x.mode],v,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(_){self.postMessage({id:x.id,count:x.count,action:"reject",value:_})}})}return{ready:o,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,v,_,S){c(r.exports.meshopt_decodeVertexBuffer,p,x,v,_,r.exports[l[S]])},decodeIndexBuffer:function(p,x,v,_){c(r.exports.meshopt_decodeIndexBuffer,p,x,v,_)},decodeIndexSequence:function(p,x,v,_){c(r.exports.meshopt_decodeIndexSequence,p,x,v,_)},decodeGltfBuffer:function(p,x,v,_,S,E){c(r.exports[h[S]],p,x,v,_,r.exports[l[E]])},decodeGltfBufferAsync:function(p,x,v,_,S){return u.length>0?b(p,x,v,h[_],l[S]):o.then(function(){var E=new Uint8Array(p*x);return c(r.exports[h[_]],E,p,x,v,r.exports[l[S]]),E})}}}();const tc={sofaModern:{file:"v5/sofa_3seat.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},sofaClassic:{file:"v5/sofa_3seat.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},sofaAlt:{file:"v5/sofa_2seat.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},sofaChaise:{file:"v5/chaise.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},coffeeModern:{file:"ph/coffee_table_round_01.glb",role:"mixed",yawOffset:0,author:"Poly Haven",source:"https://polyhaven.com/a/coffee_table_round_01",keepPbr:!0},coffeeClassic:{file:"v5/coffee_rect.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},armchair:{file:"ph/modern_arm_chair_01.glb",role:"mixed",yawOffset:0,author:"Poly Haven",source:"https://polyhaven.com/a/modern_arm_chair_01",keepPbr:!0},ottoman:{file:"ph/Ottoman_01.glb",role:"fabric",yawOffset:0,author:"Poly Haven",source:"https://polyhaven.com/a/Ottoman_01",keepPbr:!0},diningChair:{file:"v5/dining_chair_uphol.glb",role:"mixed",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},woodChair:{file:"v5/dining_chair_timber.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},diningTable:{file:"v5/dining_table6.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},woodTable:{file:"v5/dining_table6.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},bed:{file:"v5/bed_double.glb",role:"mixed",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},nightstand:{file:"ph/side_table_01.glb",role:"wood",yawOffset:0,author:"Poly Haven",source:"https://polyhaven.com/a/side_table_01",keepPbr:!0},console:{file:"v5/console.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},sideTable:{file:"ph/side_table_01.glb",role:"wood",yawOffset:0,author:"Poly Haven",source:"https://polyhaven.com/a/side_table_01",keepPbr:!0},cabinet:{file:"v5/chest_drawers.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},wardrobe:{file:"v5/wardrobe_sliding.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},chest:{file:"v5/chest_drawers.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},tv:{file:"ph/modern_wooden_cabinet.glb",role:"wood",yawOffset:0,author:"Poly Haven",source:"https://polyhaven.com/a/modern_wooden_cabinet",keepPbr:!0},lamp:{file:"v5/lamp_floor.glb",role:"metal",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},plant:{file:"potted_plant_04.glb",role:"plant",yawOffset:0,author:"James Ray Cock",source:"https://polyhaven.com/a/potted_plant_04",keepPbr:!0},plantAlt:{file:"ph/potted_plant_02.glb",role:"plant",yawOffset:0,author:"Poly Haven",source:"https://polyhaven.com/a/potted_plant_02",keepPbr:!0},vase:{file:"ph/ceramic_vase_01.glb",role:"ceramic",yawOffset:0,author:"Poly Haven",source:"https://polyhaven.com/a/ceramic_vase_01",keepPbr:!0},rug:{file:"v5/rug_wool.glb",role:"fabric",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},toilet:{file:"v5/wc_close.glb",role:"ceramic",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},basin:{file:"v5/basin_round.glb",role:"ceramic",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},vanity:{file:"v5/vanity_800.glb",role:"mixed",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},shower:{file:"v5/shower_enclosure.glb",role:"mixed",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},fridge:{file:"v5/kit_fridge_housing.glb",role:"metal",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"},stool:{file:"v5/dining_chair_timber.glb",role:"wood",yawOffset:0,author:"3dassets.dev",source:"https://3dassets.dev"}};let Do=null,rl=null;function Xy(s,e){return rl?.ready?Promise.resolve(rl):Do||(Do=jy(s,e),Do)}async function jy(s,e){const t="./models/",n="./draco/",i=new Vy;i.setDecoderPath(n),i.preload();const r=new zl;r.setDRACOLoader(i),r.setMeshoptDecoder(pf);const o=new Map,a=Object.keys(tc);let c=0;await Promise.all(a.map(async h=>{const u=tc[h];try{const f=(await r.loadAsync(t+u.file)).scene;f.updateMatrixWorld(!0);const g=new mn().setFromObject(f),b=g.getSize(new D),m=g.min.clone();f.traverse(p=>{const x=p;if(x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,x.material)){const v=Array.isArray(x.material)?x.material:[x.material];for(const _ of v)"envMapIntensity"in _&&(_.envMapIntensity=u.role==="wood"||u.role==="fabric"?.55:.85)}}),o.set(h,{root:f,size:b,min:m})}catch(d){console.warn(`[catalog] failed to load ${h}:`,d)}finally{c+=1,e?.(c/a.length)}}));const l={ready:!0,has(h){return o.has(h)},instantiate(h,u){const d=o.get(h);if(!d)return null;const f=tc[h],g=d.root.clone(!0);u.shareMaterials||g.traverse(_=>{const S=_;S.isMesh&&(Array.isArray(S.material)?S.material=S.material.map(E=>E.clone()):S.material&&(S.material=S.material.clone()))});const b=new Et;b.name=`model:${h}`,b.userData.role=f.role,b.userData.modelId=h,b.userData.keepPbr=!!f.keepPbr,b.add(g);const m=d.size.x||1,p=d.size.y||1,x=d.size.z||1;let v=1;if(u.width&&u.width>0&&u.depth&&u.depth>0)v=Math.min(u.width/m,u.depth/x);else if(u.width&&u.width>0){const _=Math.max(m,x);v=u.width/_}else u.height&&u.height>0&&(v=u.height/p);return g.scale.setScalar(v),g.position.set(-((d.min.x+d.size.x/2)*v),-d.min.y*v,-((d.min.z+d.size.z/2)*v)),b.position.set(u.x,u.y??0,u.z),b.rotation.y=u.rotY+f.yawOffset,mf(b,f.role,u.prefs,u.mats),b},proto(h,u){return o.get(h)??null}};return rl=l,l}function qy(s){return s==="traditional"?"sofaClassic":s==="luxury"?"sofaAlt":"sofaModern"}function mf(s,e,t,n){const i=Is[t.style],r=new Le(i.fabric),o=new Le(i.wood),a=new Le("#c4a265"),c=new Le("#d6cfc4"),l=!!s.userData.keepPbr,h=n.wool??n.fabricTex,u=n.linen??n.fabricTex;s.traverse(d=>{const f=d;if(!f.isMesh)return;const g=Array.isArray(f.material)?f.material:[f.material];for(const b of g){if(!(b instanceof it)&&!(b instanceof Tt))continue;const m=b;m.userData.baseColor||(m.userData.baseColor=m.color.clone());const p=m.userData.baseColor,x=m.metalness,v=m.roughness,_=`${m.name||""} ${f.name||""} ${s.userData.modelId||""}`.toLowerCase(),S=/fabric|linen|mustard|velvet|cushion|uphol|grey|gray|blue|duvet|mattress|pillow|sheet|headboard/.test(_),E=/walnut|oak|wood|carcass|front|timber|leg/.test(_),w=/metal|chrome|steel|black/.test(_),A=/ceramic/.test(_)||e==="ceramic",M=/bed|duvet|mattress|pillow|sheet|headboard/.test(_);if(l||e==="plant"){m.envMapIntensity=Math.max(m.envMapIntensity??.7,.85),m.needsUpdate=!0;continue}if(m.color.copy(p),!A)if(S||e==="fabric"&&!E&&!w||e==="mixed"&&M&&!E&&!w||e==="mixed"&&!E&&!w&&x<.25&&Yy(p)){const y=M&&!/headboard/.test(_),R=y?u:h;m.color.copy(y?c:r),m.map=R.map,m.normalMap=R.normalMap,m.roughnessMap=R.roughnessMap,m.normalScale=new ne(y?.55:.85,y?.55:.85),m.roughness=y?.94:.86,m.metalness=0,m.envMapIntensity=y?.12:.28}else(E||e==="wood"||e==="mixed"&&x<.25&&!w&&!S)&&(m.color.copy(p).lerp(o,t.style==="traditional"?.65:.45),n.wood.map&&(m.map=n.wood.map,m.normalMap=n.wood.normalMap,m.roughnessMap=n.wood.roughnessMap,m.normalScale=new ne(.55,.55)),t.style==="traditional"&&m.color.lerp(new Le("#5c3310"),.25),m.envMapIntensity=.5);t.style==="luxury"&&(w||x>.45)&&(m.color.lerp(a,.5),m.metalness=Math.min(1,x+.15),m.roughness=Math.max(.15,v-.12)),m.needsUpdate=!0}})}function Yy(s){const e=s.r,t=s.g,n=s.b,i=Math.max(e,t,n),r=Math.min(e,t,n),o=n>e*1.05&&n>.35,a=i>.45&&i-r<.18;return o||a}function Zy(s,e,t){s.traverse(n=>{n.userData&&n.userData.role&&n.userData.modelId&&mf(n,n.userData.role,e,t)})}function Vl(s){const e=s.map(a=>a[0]),t=s.map(a=>a[1]),n=Math.min(...e),i=Math.max(...e),r=Math.min(...t),o=Math.max(...t);return{minX:n,maxX:i,minZ:r,maxZ:o,cx:(n+i)/2,cz:(r+o)/2,w:i-n,d:o-r}}function Wl(s,e,t){let n=!1;const i=s.length;for(let r=0,o=i-1;r<i;o=r++){const[a,c]=s[r],[l,h]=s[o];c>t!=h>t&&e<(l-a)*(t-c)/(h-c+1e-12)+a&&(n=!n)}return n}function qn(s){return{fx:Math.sin(s),fz:Math.cos(s)}}function ts(s,e,t,n,i){const r=Math.cos(i),o=Math.sin(i);let a=1/0,c=-1/0,l=1/0,h=-1/0;for(const[u,d]of[[-t/2,-n/2],[t/2,-n/2],[t/2,n/2],[-t/2,n/2]]){const f=s+u*r+d*o,g=e-u*o+d*r;f<a&&(a=f),f>c&&(c=f),g<l&&(l=g),g>h&&(h=g)}return{minX:a,maxX:c,minZ:l,maxZ:h}}function yn(s,e){const t=Math.max(0,Math.min(s.maxX,e.maxX)-Math.max(s.minX,e.minX)),n=Math.max(0,Math.min(s.maxZ,e.maxZ)-Math.max(s.minZ,e.minZ));return t*n}function Yi(s,e){const t=(s.ax+s.bx)/2,n=(s.az+s.bz)/2,i=s.bx-s.ax,r=s.bz-s.az,o=Math.hypot(i,r)||1,a=-r/o,c=i/o,l=(h,u)=>Wl(e,t+h*.25,n+u*.25);return l(a,c)?{mx:t,mz:n,ix:a,iz:c,width:s.width||o}:l(-a,-c)?{mx:t,mz:n,ix:-a,iz:-c,width:s.width||o}:null}function Xl(s,e=.6){const t=-s.iz,n=s.ix,i=Math.max(s.width,.7)/2,r=[];for(const o of[-i,i])for(const a of[.04,e])r.push([s.mx+t*o+s.ix*a,s.mz+n*o+s.iz*a]);return{minX:Math.min(...r.map(o=>o[0])),maxX:Math.max(...r.map(o=>o[0])),minZ:Math.min(...r.map(o=>o[1])),maxZ:Math.max(...r.map(o=>o[1]))}}function Ky(s,e,t,n){const i=[],r=s.filter(o=>!o.ghost);for(let o=0;o<r.length;o++)for(let a=o+1;a<r.length;a++){const c=r[o],l=r[a];if(c.group&&c.group===l.group)continue;const h=yn(c,l);h>.008&&i.push({severity:"error",a:`${c.roomId}/${c.id}`,b:`${l.roomId}/${l.id}`,kind:"overlap",message:`${c.kind} overlaps ${l.kind} by ${h.toFixed(3)} m²`})}for(const o of r)if(!o.wallHug)for(const a of e){const c=yn(o,a);c>.01&&i.push({severity:"error",a:`${o.roomId}/${o.id}`,b:"wall",kind:"wall",message:`${o.kind} intersects a wall by ${c.toFixed(3)} m²`})}for(const{poly:o,door:a}of t){const c=Yi(a,o);if(!c)continue;const l=Xl(c,.6);for(const h of r){if(h.tight&&!["shower","wardrobe","kitchen","fridge","sofa","bed"].includes(h.kind))continue;const u=yn(h,l);u>.02&&i.push({severity:"error",a:`${h.roomId}/${h.id}`,b:"doorway",kind:"doorway",message:`${h.kind} blocks a 60 cm doorway clearance (${u.toFixed(3)} m²)`})}}for(const{sofa:o,coffee:a,gap:c}of n)(c<.38||c>.52)&&i.push({severity:"error",a:`${o.roomId}/${o.id}`,b:`${a.roomId}/${a.id}`,kind:"coffee-gap",message:`coffee table is ${c.toFixed(2)} m from the sofa front (need 0.40–0.45 m)`});return i}function $y(s,e,t,n){const i=[],r=n.map(o=>({minX:o.x,maxX:o.x+o.w,minZ:o.z,maxZ:o.z+o.d}));for(const o of s){if(o.type!=="bedroom")continue;const a=Vl(o.polygon),c=e.filter(u=>u.roomId===o.id&&u.kind==="bed"),l=e.filter(u=>u.roomId===o.id&&u.kind==="nightstand"),h=e.filter(u=>u.roomId===o.id&&u.kind==="bench");if(!c.length){i.push({severity:"warn",a:`${o.id}`,b:"bed",kind:"bed",message:`${o.id} has no bed`});continue}for(const u of c){const{fx:d,fz:f}=qn(u.rot),g={x:u.x-d*u.d/2,z:u.z-f*u.d/2},b={x:u.x+d*u.d/2,z:u.z+f*u.d/2},m=Math.min(Math.abs(g.z-a.minZ),Math.abs(g.z-a.maxZ),Math.abs(g.x-a.minX),Math.abs(g.x-a.maxX));m>.18&&i.push({severity:"error",a:`${o.id}/${u.id}`,b:"wall",kind:"bed",message:`headboard is ${m.toFixed(2)} m from the nearest wall (should hug a solid wall)`});const p=ts(g.x,g.z,u.w,.4,u.rot),x={minX:p.minX-.15,maxX:p.maxX+.15,minZ:p.minZ-.15,maxZ:p.maxZ+.15};let v=0;for(const S of r)v+=yn(x,S);v>.08&&i.push({severity:"error",a:`${o.id}/${u.id}`,b:"window",kind:"bed",message:`headboard sits under a window (${v.toFixed(2)} m² overlap)`});const _=t.map(S=>Yi(S,o.polygon)).filter(S=>S!==null);for(const S of _){const E=Xl(S,.5);yn(x,E)>.05&&i.push({severity:"error",a:`${o.id}/${u.id}`,b:"doorway",kind:"bed",message:"headboard sits in a doorway"})}for(const S of h){const E=Math.hypot(S.x-g.x,S.z-g.z),w=Math.hypot(S.x-b.x,S.z-b.z);E<w-.05&&i.push({severity:"error",a:`${o.id}/${S.id}`,b:`${u.id}`,kind:"bed",message:`bench is at the headboard (${E.toFixed(2)} m) instead of the foot (${w.toFixed(2)} m)`})}for(const S of l){const E=Math.hypot(S.x-g.x,S.z-g.z),w=Math.hypot(S.x-b.x,S.z-b.z);w<E-.05&&i.push({severity:"error",a:`${o.id}/${S.id}`,b:`${u.id}`,kind:"bed",message:`nightstand is at the foot (${w.toFixed(2)} m) instead of the head (${E.toFixed(2)} m)`})}l.length<2&&a.w*a.d>9&&i.push({severity:"warn",a:`${o.id}`,b:"nightstand",kind:"bed",message:`${o.id} has ${l.length} nightstand(s); expected one on each side of the headboard`})}}return i}function Jy(s){return s.map(e=>`[${e.severity}] ${e.kind}: ${e.message} (${e.a} × ${e.b})`).join(`
`)}function Qy(s,e){const t=s.filter(n=>n.severity==="error");if(t.length)throw new Error(`Layout failed for ${e}:
${Jy(t)}`)}const ce={sofaD:.9,sofaLen:2.2,sofaLenLarge:2.45,coffeeD:.55,coffeeGap:.43,coffeeH:.38,tvD:.4,tvW:1.7,tvH:.44,armchairW:.78,armchairD:.82,table4w:1.4,table4d:.85,table6w:1.8,table6d:.9,chairW:.44,chairD:.48,chairClear:.14,bedMasterW:1.9,bedMasterD:2.1,bedW:1.5,bedD:2,nightW:.44,nightD:.4,nightGap:.08,wardD:.55,wardH:2.2,kitD:.6,fridgeW:.6,fridgeD:.64,fridgeH:1.85,basinW:.7,basinD:.46,toiletW:.4,toiletD:.68,shower:.85,loungeW:.68,loungeD:.82,plantR:.26,lampR:.16};function ol(s){const e=ts(s.x,s.z,s.w,s.d,s.rot);return{id:s.id,roomId:s.roomId,kind:s.kind,...e,group:s.group,wallHug:s.wallHug,tight:s.tight,ghost:s.ghost}}function eM(s,e){const t=[];for(const n of e){const i=Yi(n,s.polygon);i&&t.push(Xl(i,.6))}return t}function tM(s,e,t){for(const n of s)if(Wl(n,e,t))return!0;return!1}function al(s,e,t,n,i,r,o={}){if(o.ghost)return!0;const a=ts(e,t,n,i,r),c=[[a.minX,a.minZ],[a.maxX,a.minZ],[a.maxX,a.maxZ],[a.minX,a.maxZ],[e,t]],l=o.wallHug?-.04:.02,{a:h}=s;if((a.minX<h.minX+l||a.maxX>h.maxX-l||a.minZ<h.minZ+l||a.maxZ>h.maxZ-l)&&(!Wl(s.room.polygon,e,t)||!o.wallHug&&(a.minX<h.minX-.02||a.maxX>h.maxX+.02||a.minZ<h.minZ-.02||a.maxZ>h.maxZ+.02)))return!1;for(const[u,d]of c)if(tM(s.avoid,u,d))return!1;if(o.tight){for(const u of s.doorBoxes)if(yn(a,u)>.04)return!1}else for(const u of s.doorBoxes)if(yn(a,u)>.015)return!1;for(const u of s.out){if(u.ghost||o.group&&u.group===o.group)continue;const d=ts(u.x,u.z,u.w,u.d,u.rot);if(yn(a,d)>.008)return!1}return!0}function lt(s,e){if(!al(s,e.x,e.z,e.w,e.d,e.rot,e))return null;const t={...e,roomId:s.room.id};return s.out.push(t),t}function nM(s,e,t=[],n=[],i=[]){const r=Vl(s.polygon);if(r.w<.8||r.d<.8)return[];const o={room:s,a:r,prefs:e,avoid:t,doorBoxes:eM(s,n),windowBoxes:i.map(a=>({minX:a.x,maxX:a.x+a.w,minZ:a.z,maxZ:a.z+a.d})),out:[]};switch(s.type){case"living":iM(o);break;case"kitchen":oM(o);break;case"bedroom":uM(o,/master|1/i.test(s.name)||s.id==="master"||s.id==="bedroom1");break;case"bathroom":dM(o);break;case"utility":break;case"lobby":case"hall":fM(o);break;case"dressing":case"linen":pM(o);break;case"terrace":case"balcony":mM(o);break}if(e.style==="traditional"&&s.type==="living"&&r.w*r.d>16){for(const[a,c]of ra(r,.38))if(lt(o,{id:"mandir",kind:"mandir",x:a,z:c,rot:0,w:.5,d:.28,h:1.1,wallHug:!0,tight:!0,variant:"traditional"}))break}return o.out}function ra(s,e){return[[s.maxX-e,s.maxZ-e],[s.minX+e,s.maxZ-e],[s.maxX-e,s.minZ+e],[s.minX+e,s.minZ+e]]}function iM(s){const{a:e,prefs:t,room:n}=s,i=e.w>=e.d,r=/kitchen/i.test(n.name)||n.id==="lounge",o=n.id==="lounge"?"south":"north",a=i&&e.w>=6.2,c=Math.min(i?e.w*.4:e.d*.46,a?ce.sofaLenLarge:ce.sofaLen),l=ce.sofaD,h=a&&!r;let u,d,f,g,b,m;i&&r&&o==="south"?(u=e.cx,d=e.maxZ-.08-l/2,f=Math.PI,g=e.maxX-.08-ce.tvD/2,b=e.cz,m=-Math.PI/2):i?(u=e.cx,d=e.minZ+.08+l/2,f=0,g=e.cx,b=e.maxZ-.08-ce.tvD/2,m=Math.PI):(u=e.minX+.08+l/2,d=e.cz,f=Math.PI/2,g=e.maxX-.08-ce.tvD/2,b=e.cz,m=-Math.PI/2),al(s,u,d,c,l,f,{wallHug:!0,group:"sofa"})||(u=i?e.cx:e.maxX-.08-l/2,d=i?e.maxZ-.08-l/2:e.cz,f=i?Math.PI:-Math.PI/2,g=i?e.cx:e.minX+.08+ce.tvD/2,b=i?e.minZ+.08+ce.tvD/2:e.cz,m=i?0:Math.PI/2);const{fx:p,fz:x}=qn(f);lt(s,{id:"sofa",kind:"sofa",x:u,z:d,rot:f,w:c,d:l,h:.82,wallHug:!0,group:"sofa",variant:h?"l-shape":t.style});let v=null;if(h){const O=qn(f-Math.PI/2),U=1.45,z=u+p*((U-l)/2)+O.fx*(c/2-.42),H=d+x*((U-l)/2)+O.fz*(c/2-.42);lt(s,{id:"sofa-chaise",kind:"sofa-chaise",x:z,z:H,rot:f,w:.84,d:U,h:.82,wallHug:!0,group:"sofa",variant:t.style})&&(v=O)}const _=l/2+ce.coffeeGap+ce.coffeeD/2,S=Math.min(.95,c*.48),E=v?{fx:-v.fx,fz:-v.fz}:{fx:0,fz:0},w=v?.32:0,A=u+p*_+E.fx*w,M=d+x*_+E.fz*w;lt(s,{id:"coffee",kind:"coffee",x:A,z:M,rot:f,w:S,d:ce.coffeeD,h:ce.coffeeH,variant:t.style==="luxury"?"marble":"wood"});const y=Math.min(ce.tvW,(i?e.w:e.d)*.4);lt(s,{id:"tv",kind:"tv",x:g,z:b,rot:m,w:y,d:ce.tvD,h:ce.tvH,wallHug:!0,variant:t.style});const R=Math.min(e.w*.48,2.4),k=Math.min(e.d*.4,1.8);if(lt(s,{id:"rug",kind:"rug",x:u+p*1.15,z:d+x*1.15,rot:f,w:R,d:k,h:.02,ghost:!0,tight:!0}),/dining/i.test(n.name)||e.w>5.4||e.d>5.4){const O=e.w*e.d>28?6:4,U=O===6?ce.table6w:ce.table4w,z=O===6?ce.table6d:ce.table4d,H=Math.max(1.65,Math.min((i?e.w:e.d)*.26,2.2)),W=(i?[[e.minX+H,e.cz],[e.maxX-H,e.cz]]:[[e.cx,e.minZ+H],[e.cx,e.maxZ-H]]).find(([Z,he])=>al(s,Z,he,U,z,0,{group:"dining"})&&Math.hypot(Z-u,he-d)>=2.4);W&&sM(s,W[0],W[1],O,U,z)}if(a){const O=i?[{x:e.minX+.08+ce.armchairD/2,z:d+x*1.85,rot:Math.PI/2},{x:e.maxX-.08-ce.armchairD/2,z:d+x*1.85,rot:-Math.PI/2}]:[{x:u+p*2.2,z:e.minZ+.08+ce.armchairD/2,rot:0},{x:u+p*2.2,z:e.maxZ-.08-ce.armchairD/2,rot:Math.PI}];for(const U of O)if(!(Math.hypot(U.x-u,U.z-d)<1.6)&&lt(s,{id:"armchair",kind:"armchair",x:U.x,z:U.z,rot:U.rot,w:ce.armchairW,d:ce.armchairD,h:.8,variant:t.style}))break}r&&rM(s,o);let I=0;for(const[O,U]of ra(e,.36))if(!(Math.hypot(O-u,U-d)<1.15)){if(I===0)lt(s,{id:"plant",kind:"plant",x:O,z:U,rot:0,w:ce.plantR*2,d:ce.plantR*2,h:1.15,tight:!0,wallHug:!0})&&I++;else if(I===1&&n.id==="lounge")lt(s,{id:"plant2",kind:"plant",x:O,z:U,rot:0,w:ce.plantR*2,d:ce.plantR*2,h:1,tight:!0,wallHug:!0})&&I++;else if(lt(s,{id:"lamp",kind:"lamp",x:O,z:U,rot:0,w:ce.lampR*2,d:ce.lampR*2,h:1.5,tight:!0,wallHug:!0,variant:t.style}))break}lt(s,{id:"art",kind:"art",x:i?e.minX+.04:e.cx,z:i?e.cz:e.minZ+.04,rot:i?Math.PI/2:0,w:.9,d:.04,h:.65,wallHug:!0,tight:!0,ghost:!0,variant:t.style})}function sM(s,e,t,n,i,r){const{prefs:o}=s;lt(s,{id:"dining",kind:"diningTable",x:e,z:t,rot:0,w:i,d:r,h:.75,group:"dining",variant:o.style}),(n===6?[[-i*.28,r/2+ce.chairClear+ce.chairD/2,Math.PI],[i*.28,r/2+ce.chairClear+ce.chairD/2,Math.PI],[-i*.28,-(r/2+ce.chairClear+ce.chairD/2),0],[i*.28,-(r/2+ce.chairClear+ce.chairD/2),0],[-(i/2+ce.chairClear+ce.chairD/2),0,Math.PI/2],[i/2+ce.chairClear+ce.chairD/2,0,-Math.PI/2]]:[[-i*.22,r/2+ce.chairClear+ce.chairD/2,Math.PI],[i*.22,r/2+ce.chairClear+ce.chairD/2,Math.PI],[-i*.22,-(r/2+ce.chairClear+ce.chairD/2),0],[i*.22,-(r/2+ce.chairClear+ce.chairD/2),0]]).forEach(([c,l,h],u)=>{lt(s,{id:`chair-${u}`,kind:"diningChair",x:e+c,z:t+l,rot:h,w:ce.chairW,d:ce.chairD,h:.85,tight:!0,group:"dining",variant:o.style})})}function gf(s,e,t,n,i,r){const{fx:o,fz:a}=qn(t),c=-a,l=o;let h=-n/2,u=n/2;const d=ts(s,e,n,i,t);for(const b of r){if(yn(d,b)<.01)continue;const m=(b.minX+b.maxX)/2,p=(b.minZ+b.maxZ)/2,x=(m-s)*c+(p-e)*l,v=Math.max(b.maxX-b.minX,b.maxZ-b.minZ)/2+.12,_=x-v,S=x+v,E=Math.min(u,_)-h,w=u-Math.max(h,S);if(E>=w&&E>.9)u=Math.min(u,_);else if(w>.9)h=Math.max(h,S);else return null}const f=u-h;if(f<.9)return null;const g=(h+u)/2;return{x:s+c*g,z:e+l*g,len:f}}function rM(s,e){const{a:t,prefs:n}=s,i=ce.kitD;let r=Math.min(e==="north"||e==="south"?t.w-.5:t.d-.5,3.4),o=t.cx,a=t.cz,c=0;e==="south"&&(a=t.minZ+i/2+.06,c=0,o=t.cx),e==="north"&&(a=t.maxZ-i/2-.06,c=Math.PI,o=t.cx),e==="east"&&(o=t.maxX-i/2-.06,c=-Math.PI/2,a=t.cz),e==="west"&&(o=t.minX+i/2+.06,c=Math.PI/2,a=t.cz);const l=gf(o,a,c,r,i,s.doorBoxes);if(!l)return;o=l.x,a=l.z,r=l.len,lt(s,{id:"kitchen",kind:"kitchen",x:o,z:a,rot:c,w:r,d:i,h:2.2,wallHug:!0,group:"kitchen",variant:n.kitchen+"-"+n.style+"-hob"});const{fx:h,fz:u}=qn(c),d=-u,f=h;for(const g of[1,-1]){const b=o+d*g*(r/2-.32)+h*.02,m=a+f*g*(r/2-.32)+u*.02;if(lt(s,{id:"fridge",kind:"fridge",x:b,z:m,rot:c,w:ce.fridgeW,d:ce.fridgeD,h:ce.fridgeH,wallHug:!0,group:"kitchen"}))break}}function oM(s){const{a:e,prefs:t}=s,n=ce.kitD,i=[{wall:"south",primary:!0},{wall:"east",primary:!1},{wall:"north",primary:!0},{wall:"west",primary:!1}];let r=0;const o=new Set;for(const c of i){if(r>=2)break;if(o.has(c.wall))continue;let l=c.wall==="north"||c.wall==="south"?Math.max(1.8,e.w-.25):Math.max(1.15,e.d-n-.5),h=e.cx,u=e.cz,d=0;c.wall==="south"&&(u=e.minZ+n/2+.05,d=0),c.wall==="north"&&(u=e.maxZ-n/2-.05,d=Math.PI),c.wall==="east"&&(h=e.maxX-n/2-.05,d=-Math.PI/2,u=e.minZ+n+l/2),c.wall==="west"&&(h=e.minX+n/2+.05,d=Math.PI/2,u=e.minZ+n+l/2);const f=gf(h,u,d,l,n,s.doorBoxes);!f||!lt(s,{id:r===0?"kitchen-south":"kitchen-east",kind:"kitchen",x:f.x,z:f.z,rot:d,w:f.len,d:n,h:2.2,wallHug:!0,group:"kitchen",variant:t.kitchen+(r===0?"-hob":"")})||(o.add(c.wall),r++)}const a=[{x:e.maxX-ce.fridgeD/2-.06,z:e.maxZ-ce.fridgeW/2-.08,rot:-Math.PI/2},{x:e.minX+ce.fridgeD/2+.06,z:e.maxZ-ce.fridgeW/2-.08,rot:Math.PI/2},{x:e.maxX-ce.fridgeD/2-.06,z:e.minZ+ce.fridgeW/2+.08,rot:-Math.PI/2}];for(const c of a)if(lt(s,{id:"fridge",kind:"fridge",x:c.x,z:c.z,rot:c.rot,w:ce.fridgeW,d:ce.fridgeD,h:ce.fridgeH,wallHug:!0,group:"kitchen"}))break}function nc(s,e,t=.55){switch(e){case"south":return{minX:s.minX,maxX:s.maxX,minZ:s.minZ-.2,maxZ:s.minZ+t};case"north":return{minX:s.minX,maxX:s.maxX,minZ:s.maxZ-t,maxZ:s.maxZ+.2};case"west":return{minX:s.minX-.2,maxX:s.minX+t,minZ:s.minZ,maxZ:s.maxZ};case"east":return{minX:s.maxX-t,maxX:s.maxX+.2,minZ:s.minZ,maxZ:s.maxZ}}}function ic(s,e){let t=0;for(const n of e)t+=yn(s,n);return t}function Xu(s,e,t,n,i){const r=[];for(const o of e)yn(s,o)<.02||(t==="x"?r.push([Math.max(n,o.minX),Math.min(i,o.maxX)]):r.push([Math.max(n,o.minZ),Math.min(i,o.maxZ)]));return r.filter(([o,a])=>a-o>.04)}function aM(s,e,t){const n=t.slice().sort((a,c)=>a[0]-c[0]),i=[];for(const a of n)!i.length||a[0]>i[i.length-1][1]+.02?i.push([a[0],a[1]]):i[i.length-1][1]=Math.max(i[i.length-1][1],a[1]);const r=[];let o=s;for(const[a,c]of i)a>o+.04&&r.push([o,a]),o=Math.max(o,c);return e>o+.04&&r.push([o,e]),r}const cM={north:"south",south:"north",east:"west",west:"east"},lM={north:["east","west"],south:["east","west"],east:["north","south"],west:["north","south"]};function hM(s,e,t){const{a:n}=s,i=["north","south","east","west"],r={north:0,south:0,east:0,west:0},o=[];for(const a of i){const c=nc(n,a);ic(c,s.doorBoxes),r[a]=ic(c,s.windowBoxes)}for(const a of i){const c=a==="north"||a==="south",l=c?n.minX:n.minZ,h=c?n.maxX:n.maxZ,u=c?n.d:n.w,d=Math.min(t,Math.max(1.7,u-.7));if(u<d+.35)continue;const f=Math.min(e,h-l-.3);if(f<1.15)continue;const g=nc(n,a),b=[...Xu(g,s.doorBoxes,c?"x":"z",l,h),...Xu(g,s.windowBoxes,c?"x":"z",l,h)],m=aM(l,h,b),p=f+2*(ce.nightW+ce.nightGap),x=f+.06,v=m.filter(z=>z[1]-z[0]>=x);if(!v.length)continue;v.sort((z,H)=>H[1]-H[0]-(z[1]-z[0]));const S=v.filter(z=>z[1]-z[0]>=p)[0]??v[0],E=ic(nc(n,a,.95),s.doorBoxes),w=r[a],A=w<.05&&E<.05;let M=S[1]-S[0];M-=w*200,M-=E*80,A?M+=100:w<.05&&(M+=8),r[cM[a]]>.12&&(M+=20),lM[a].some(z=>r[z]>.12)&&(M+=10);const y=c?n.cx:n.cz,k=(S[1]-S[0]>=p+.06?p:f)/2;let N=y;(N-k<S[0]+.04||N+k>S[1]-.04)&&(N=(S[0]+S[1])/2),N=Math.max(S[0]+k+.03,Math.min(S[1]-k-.03,N));let I,O,U;switch(a){case"south":I=N,O=n.minZ+.06+d/2,U=0;break;case"north":I=N,O=n.maxZ-.06-d/2,U=Math.PI;break;case"west":I=n.minX+.06+d/2,O=N,U=Math.PI/2;break;case"east":I=n.maxX-.06-d/2,O=N,U=-Math.PI/2;break}o.push({wall:a,rot:U,x:I,z:O,usedD:d,realW:f,score:M,gap:S})}return o.sort((a,c)=>c.score-a.score),o}function uM(s,e){const{a:t,prefs:n}=s,i=e?ce.bedMasterW:ce.bedW,r=e?ce.bedMasterD:ce.bedD,o=hM(s,i,r);let a=null;for(const k of o)if(lt(s,{id:"bed",kind:"bed",x:k.x,z:k.z,rot:k.rot,w:k.realW,d:k.usedD,h:.95,wallHug:!0,group:"bed",variant:n.style+(e?"-master":"")})){a=k;break}if(!a)return;const{fx:c,fz:l}=qn(a.rot),h=a.x,u=a.z,d=a.realW,f=a.usedD,g=h-c*f/2,b=u-l*f/2,m=.35,p=-l,x=c,v=d/2+ce.nightGap+ce.nightW/2;for(const[k,N]of[["night-l",1],["night-r",-1]]){const I=g+c*m+p*N*v,O=b+l*m+x*N*v,U=[{x:I,z:O},{x:g+c*.22+p*N*(d/2+ce.nightW/2+.02),z:b+l*.22+x*N*(d/2+ce.nightW/2+.02)},{x:g+c*.35+p*N*(d/2+ce.nightGap*.4+ce.nightW/2),z:b+l*.35+x*N*(d/2+ce.nightGap*.4+ce.nightW/2)}];for(const z of U)if(lt(s,{id:k,kind:"nightstand",x:z.x,z:z.z,rot:a.rot,w:ce.nightW,d:ce.nightD,h:.5,tight:!0,wallHug:!0,group:"bed",variant:n.style}))break}const _=Math.min(1.8,Math.max(1,Math.min(t.w,t.d)*.45)),S=h+c*f/2,E=u+l*f/2,w=h+c*.15,A=u+l*.15,M=[],y=a.wall==="north"||a.wall==="south"?[{x:t.minX+.05+ce.wardD/2,z:0,rot:Math.PI/2},{x:t.maxX-.05-ce.wardD/2,z:0,rot:-Math.PI/2}]:[{x:0,z:t.minZ+.05+ce.wardD/2,rot:0},{x:0,z:t.maxZ-.05-ce.wardD/2,rot:Math.PI}];for(const k of y)a.wall==="north"||a.wall==="south"?(M.push({x:k.x,z:E,rot:k.rot}),M.push({x:k.x,z:A,rot:k.rot})):(M.push({x:S,z:k.z,rot:k.rot}),M.push({x:w,z:k.z,rot:k.rot}));for(const k of M){const N=ts(k.x,k.z,_,ce.wardD,k.rot),I=ts(h,u,d,f,a.rot),O=.06,U={minX:I.minX-O,maxX:I.maxX+O,minZ:I.minZ-O,maxZ:I.maxZ+O};if(!(yn(N,U)>.008)&&lt(s,{id:"wardrobe",kind:"wardrobe",x:k.x,z:k.z,rot:k.rot,w:_,d:ce.wardD,h:ce.wardH,wallHug:!0,variant:n.style}))break}const R=a.wall==="north"||a.wall==="south"?t.d:t.w;if(e&&f+.55<R){const k=h+c*(f/2+.28),N=u+l*(f/2+.28);lt(s,{id:"bench",kind:"bench",x:k,z:N,rot:a.rot,w:d*.65,d:.38,h:.42,tight:!0,group:"bed",variant:n.style})}lt(s,{id:"rug",kind:"rug",x:h,z:u,rot:a.rot,w:d+.45,d:f+.35,h:.02,ghost:!0,tight:!0})}function dM(s){const{a:e,prefs:t}=s,n=Math.min(ce.shower,Math.min(e.w,e.d)*.48),i=[[e.minX+.08+n/2,e.minZ+.08+n/2],[e.maxX-.08-n/2,e.minZ+.08+n/2],[e.minX+.08+n/2,e.maxZ-.08-n/2],[e.maxX-.08-n/2,e.maxZ-.08-n/2]],r=s.doorBoxes.map(u=>({x:(u.minX+u.maxX)/2,z:(u.minZ+u.maxZ)/2})),o=(u,d)=>r.length?Math.min(...r.map(f=>Math.hypot(u-f.x,d-f.z))):10;i.sort((u,d)=>o(d[0],d[1])-o(u[0],u[1]));const a=(u,d)=>{const f=u>e.cx,g=d>e.cz;return f&&g?Math.PI:f&&!g?-Math.PI/2:!f&&g?Math.PI/2:0};if(e.w*e.d>=3.2){for(const[u,d]of i)if(lt(s,{id:"shower",kind:"shower",x:u,z:d,rot:a(u,d),w:n,d:n,h:2.1,wallHug:!0,tight:!0,group:"bath"}))break}const c=[{x:e.cx,z:e.maxZ-.08-ce.basinD/2,rot:Math.PI},{x:e.cx,z:e.minZ+.08+ce.basinD/2,rot:0},{x:e.maxX-.08-ce.basinD/2,z:e.cz,rot:-Math.PI/2},{x:e.minX+.08+ce.basinD/2,z:e.cz,rot:Math.PI/2}];c.sort((u,d)=>o(d.x,d.z)-o(u.x,u.z));const l=Math.min(ce.basinW,Math.min(e.w,e.d)*.55);for(const u of c)if(lt(s,{id:"basin",kind:"basin",x:u.x,z:u.z,rot:u.rot,w:l,d:ce.basinD,h:1.15,wallHug:!0,tight:!0,group:"bath",variant:t.style}))break;const h=[{x:e.minX+.12+ce.toiletD/2,z:e.cz,rot:Math.PI/2},{x:e.maxX-.12-ce.toiletD/2,z:e.cz,rot:-Math.PI/2},{x:e.cx,z:e.minZ+.12+ce.toiletD/2,rot:0},{x:e.cx,z:e.maxZ-.12-ce.toiletD/2,rot:Math.PI}];h.sort((u,d)=>o(d.x,d.z)-o(u.x,u.z));for(const u of h)if(lt(s,{id:"toilet",kind:"toilet",x:u.x,z:u.z,rot:u.rot,w:ce.toiletW,d:ce.toiletD,h:.8,wallHug:!0,tight:!0,group:"bath"}))break}function fM(s){const{a:e}=s,t=[{x:e.minX+.08+.2,z:e.cz,rot:Math.PI/2},{x:e.maxX-.08-.2,z:e.cz,rot:-Math.PI/2},{x:e.cx,z:e.minZ+.08+.2,rot:0}];for(const n of t)if(lt(s,{id:"console",kind:"console",x:n.x,z:n.z,rot:n.rot,w:Math.min(1.1,(n.rot===0?e.w:e.d)*.6),d:.38,h:.85,wallHug:!0,tight:!0}))break;for(const[n,i]of ra(e,.34))if(lt(s,{id:"plant",kind:"plant",x:n,z:i,rot:0,w:ce.plantR*2,d:ce.plantR*2,h:1.1,tight:!0,wallHug:!0}))break}function pM(s){const{a:e}=s,t=e.w>=e.d,n=Math.min(t?e.w-.25:e.d-.25,1.6),i=t?[{x:e.cx,z:e.minZ+.06+ce.wardD/2,rot:0},{x:e.cx,z:e.maxZ-.06-ce.wardD/2,rot:Math.PI}]:[{x:e.minX+.06+ce.wardD/2,z:e.cz,rot:Math.PI/2},{x:e.maxX-.06-ce.wardD/2,z:e.cz,rot:-Math.PI/2}];for(const r of i)if(lt(s,{id:"wardrobe",kind:"wardrobe",x:r.x,z:r.z,rot:r.rot,w:n,d:ce.wardD,h:ce.wardH,wallHug:!0,variant:"modern"}))break}function mM(s){const{a:e}=s,t=e.w>=e.d,n=t?0:Math.PI/2,{fx:i,fz:r}=qn(n),o=e.cx,a=t?e.minZ+Math.min(e.d*.42,1.15):e.cz,c=.25,l=t?.5:0,h=t?0:.5;lt(s,{id:"lounge-l",kind:"loungeChair",x:o-l,z:a-h,rot:n,w:ce.loungeW,d:ce.loungeD,h:.75,group:"outdoor"}),lt(s,{id:"lounge-r",kind:"loungeChair",x:o+l,z:a+h,rot:n,w:ce.loungeW,d:ce.loungeD,h:.75,group:"outdoor"}),lt(s,{id:"outdoor-table",kind:"outdoorTable",x:o+i*(ce.loungeD/2+c+.28),z:a+r*(ce.loungeD/2+c+.28),rot:n,w:.7,d:.5,h:.38,group:"outdoor"});for(const[u,d]of ra(e,.36))if(lt(s,{id:"plant",kind:"plant",x:u,z:d,rot:0,w:ce.plantR*2,d:ce.plantR*2,h:1.05,tight:!0,wallHug:!0}))break}function ju(s){return s.map(ol)}function gM(s){const e=[],t=s.filter(i=>i.kind==="sofa"),n=s.filter(i=>i.kind==="coffee");for(const i of t){const r=n.find(u=>u.roomId===i.roomId);if(!r)continue;const{fx:o,fz:a}=qn(i.rot),c=i.x*o+i.z*a+i.d/2,h=r.x*o+r.z*a-r.d/2-c;e.push({sofa:ol(i),coffee:ol(r),gap:h})}return e}function bM(s,e){const[t,n]=wn(s.x,s.z,e),{fx:i,fz:r}=qn(s.rot),[o,a]=wn(s.x+i,s.z+r,e),c=Math.atan2(o-t,a-n);return{...s,x:t,z:n,rot:c}}function vM(s,e){return e?s.doors.map(t=>{const[n,i]=wn(t.ax,t.az,e),[r,o]=wn(t.bx,t.bz,e);return{ax:n,az:i,bx:r,bz:o,width:t.width}}):s.doors}function xM(s,e){return e?s.map(([t,n])=>wn(t,n,e)):s}function _M(s,e,t){const n=[];for(const l of s.rooms){const h=l.type==="living"?s.rooms.filter(u=>u.id!==l.id).map(u=>u.polygon):[];n.push(...nM(l,e,h,s.doors,s.windows))}const i=s.walls.map(l=>({minX:l.x,maxX:l.x+l.w,minZ:l.z,maxZ:l.z+l.d})),r=s.doors.flatMap(l=>s.rooms.filter(h=>Yi(l,h.polygon)).map(h=>({poly:h.polygon,door:l}))),o=[...Ky(ju(n),i,r,gM(n)),...$y(s.rooms,n,s.doors,s.windows??[])],a=t?n.map(l=>bM(l,t)):n,c=s.rooms.map(l=>({...l,polygon:xM(l.polygon,t)}));return{placements:a,footprints:ju(a),issues:o,rooms:c}}function gi(s){return Vl(s)}function Yn(s,e,t,n,i,r,o=0,a=0,c=0){const l=new le(s,e);return l.position.set(t,n,i),l.rotation.set(o,a,c),l.castShadow=!0,l.receiveShadow=!0,r.add(l),l}function Ee(s,e,t,n,i,r,o,a,c=0){return Yn(new ve(s,e,t),n,i,r,o,a,0,c,0)}function Rt(s,e,t,n,i,r,o,a=0,c=0){return Yn(new rn(s,s,e,20),t,n,i,r,o,a,0,c)}function $e(s,e,t,n,i,r,o,a,c,l=0){const h=Math.max(.004,Math.min(n,s/2-.002,e/2-.002,t/2-.002));return Yn(new Gy(s,e,t,3,h),i,r,o,a,c,0,l,0)}let pr=null;function yM(){if(pr)return pr;const s=document.createElement("canvas");s.width=s.height=128;const e=s.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,62);return t.addColorStop(0,"rgba(0,0,0,0.62)"),t.addColorStop(.28,"rgba(0,0,0,0.34)"),t.addColorStop(.62,"rgba(0,0,0,0.12)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),pr=new Jo(s),pr.colorSpace=li,pr}function $t(s,e,t,n,i,r=0){const o=new is(1,1),a=new Ct({map:yM(),color:"#000000",transparent:!0,opacity:.85,depthWrite:!1,depthTest:!0}),c=new le(o,a);c.rotation.x=-Math.PI/2,c.rotation.z=r,c.position.set(s,.012,e),c.scale.set(t*1.18,n*1.18,1),c.renderOrder=1,c.castShadow=c.receiveShadow=!1,c.name="contact-ao",i.add(c)}function xt(s,e,t,n){const i=new Et;return i.position.set(s,0,e),i.rotation.y=t,n.add(i),i}function cl(s,e){return new Tt({color:s,roughness:.58,metalness:0,sheen:1,sheenRoughness:.32,sheenColor:new Le(s).lerp(new Le("#ffffff"),.18),clearcoat:.05,clearcoatRoughness:.7,normalMap:e.fabric.normalMap,roughnessMap:e.fabric.roughnessMap,normalScale:new ne(.55,.55),envMapIntensity:.28})}function Qs(s,e,t=!1){if(e==="luxury"||t){const n=s.fabric.color.getStyle();return cl(n||"#5c1a1a",s)}return s.fabric}function Wr(s){return new Tt({map:s.marble.map,normalMap:s.marble.normalMap,roughnessMap:s.marble.roughnessMap,roughness:.1,metalness:.03,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.25})}function Sn(s,e){return zr(s,e)}let Vi=null;function MM(){if(!Vi){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#c5c9ce",t.fillRect(0,0,256,256);const n=5,i=5,r=(256-i*(n+1))/n;for(let o=0;o<n;o++)for(let a=0;a<n;a++)t.fillStyle=(o+a)%2===0?"#f4f6f8":"#e8eef2",t.fillRect(i+o*(r+i),i+a*(r+i),r,r),t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(i+o*(r+i),i+a*(r+i),r,3);Vi=new Jo(e),Vi.colorSpace=vt,Vi.wrapS=Vi.wrapT=jt,Vi.anisotropy=8}return new it({map:Vi,roughness:.42,metalness:.04,color:"#ffffff"})}function wM(s,e,t){const n=s.material.map;n&&(n.repeat.set(e/5,t/5),n.needsUpdate=!0)}function SM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=Qs(t,n),c=Sn(t,n),l=n==="traditional",h=l?.16:.12;for(const b of[-(r/2-.1),r/2-.1])for(const m of[-(o/2-.1),o/2-.1])l?(Rt(.035,h,t.woodFur,b,h/2,m,i),Rt(.045,.03,t.woodFur,b,.02,m,i)):Rt(n==="luxury"?.018:.022,h,c,b,h/2,m,i);$e(r,.1,o,.02,t.woodFur,0,h+.05,0,i);const u=Math.max(2,Math.round(r/.75)),d=o-.22;for(let b=0;b<u;b++){const p=(r-.16)/u,x=-r/2+.08+p*b+p/2;$e(p-.04,.14,d,.04,a,x,h+.16,.04,i)}for(let b=0;b<u;b++){const m=(r-.16)/u,p=-r/2+.08+m*b+m/2;$e(m-.05,.42,.16,.045,a,p,h+.44,-o/2+.12,i)}l&&(Ee(r,.08,.06,t.woodFur,0,.92,-o/2+.04,i),Ee(.05,.7,.05,t.woodFur,-r/2+.04,.55,-o/2+.04,i),Ee(.05,.7,.05,t.woodFur,r/2-.04,.55,-o/2+.04,i));const f=l?.12:.11,g=.28;$e(f,g,o-.08,.04,l?t.woodFur:a,-r/2+f/2,h+.28,.02,i),$e(f,g,o-.08,.04,l?t.woodFur:a,r/2-f/2,h+.28,.02,i),n==="luxury"&&Ee(r-.04,.012,.012,t.brass,0,.72,-o/2+.2,i),$t(s.x,s.z,r+.15,o+.1,e,s.rot)}function TM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=Qs(t,n),c=.12;for(const l of[-(r/2-.08),r/2-.08])for(const h of[-(o/2-.08),o/2-.08])Rt(n==="luxury"?.018:.022,c,Sn(t,n),l,c/2,h,i);$e(r,.1,o,.02,t.woodFur,0,c+.05,0,i),$e(r-.06,.14,o-.08,.04,a,0,c+.16,.02,i),$e(.14,.36,o-.08,.04,a,-r/2+.08,c+.38,0,i),$t(s.x,s.z,r+.1,o+.1,e,s.rot)}function EM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=Qs(t,n),o=s.w,a=s.d;for(const c of[-(o/2-.08),o/2-.08])for(const l of[-(a/2-.08),a/2-.08])Rt(.02,.12,Sn(t,n),c,.06,l,i);$e(o,.1,a,.02,t.woodFur,0,.17,0,i),$e(o-.08,.14,a-.16,.04,r,0,.28,.02,i),$e(o-.08,.4,.14,.04,r,0,.52,-a/2+.1,i),$e(.1,.26,a-.1,.035,r,-o/2+.06,.4,0,i),$e(.1,.26,a-.1,.035,r,o/2-.06,.4,0,i),$t(s.x,s.z,o,a,e,s.rot)}function AM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=s.h,c=s.variant==="marble"||n==="luxury"?Wr(t):t.woodFur,l=Sn(t,n);if($e(r,.04,o,.012,c,0,a-.02,0,i),n==="luxury"){Ee(r-.04,.012,o-.04,t.brass,0,.14,0,i);for(const h of[-(r/2-.05),r/2-.05])for(const u of[-(o/2-.05),o/2-.05])Ee(.018,a-.04,.018,t.brass,h,(a-.04)/2,u,i)}else for(const h of[-(r/2-.07),r/2-.07])for(const u of[-(o/2-.07),o/2-.07])Rt(.022,a-.04,n==="traditional"?t.woodFur:l,h,(a-.04)/2,u,i);Ee(.22,.015,.16,t.fabric,-.16,a+.01,.04,i),Ee(.22,.012,.16,t.woodFur,-.15,a+.025,.05,i),Rt(.07,.04,n==="luxury"?t.brass:t.ceramic,.22,a+.03,-.06,i),$t(s.x,s.z,r,o,e,s.rot)}function RM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=s.w,o=s.d;$e(r,.38,o,.015,t.woodFur,0,.22,0,i),Ee(.006,.28,.01,t.frame,0,.22,o/2-.005,i),n==="luxury"&&Ee(r+.02,.012,o+.02,Wr(t),0,.42,0,i);const a=Math.min(r*.85,1.55),c=t.frame.clone();c.color.set("#111"),c.roughness=.28,Ee(a,.72,.04,c,0,.88,-o/2+.06,i);const l=t.emissive.clone();l.color.set("#151b24"),l.emissive.set("#1a2430"),l.emissiveIntensity=.18,Ee(a-.05,.64,.015,l,0,.88,-o/2+.085,i);for(const h of[-(r/2-.08),r/2-.08])for(const u of[-(o/2-.06),o/2-.06])Rt(.018,.06,Sn(t,n),h,.03,u,i);$t(s.x,s.z,r,o,e,s.rot)}function CM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=s.h,c=n==="luxury"?Wr(t):t.woodFur;if($e(r,.05,o,.015,c,0,a-.02,0,i),n==="luxury")Rt(.14,a-.08,t.woodFur,0,(a-.08)/2,0,i),Rt(.28,.03,t.brass,0,.04,0,i);else for(const l of[-(r/2-.1),r/2-.1])for(const h of[-(o/2-.08),o/2-.08])Ee(.07,a-.06,.07,t.woodFur,l,(a-.06)/2,h,i);$t(s.x,s.z,r,o,e,s.rot)}function PM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=Qs(t,n),o=s.w,a=s.d;for(const c of[-(o/2-.05),o/2-.05])for(const l of[-(a/2-.05),a/2-.05])Ee(.035,.42,.035,t.woodFur,c,.21,l,i);$e(o-.04,.05,a-.04,.015,r,0,.44,0,i),$e(o-.06,.32,.04,.015,r,0,.72,-a/2+.03,i),Ee(.03,.32,.03,t.woodFur,-o/2+.05,.62,-a/2+.03,i),Ee(.03,.32,.03,t.woodFur,o/2-.05,.62,-a/2+.03,i)}function DM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e);i.name="kitchen-run",i.userData.bakeHide=!0;const r=s.w,o=s.d,a=(s.variant??"").includes("hob"),c=n==="modern"||n==="minimal";Ee(r,.86,o-.04,t.cabinet,0,.43,0,i);const l=Math.max(2,Math.round(r/.55)),h=.005,u=(r-h*(l+1))/l,d=.018,f=o/2-d/2-.002;for(let E=0;E<l;E++){const w=-r/2+h+u/2+E*(u+h);Ee(u,.78,d,t.cabinet,w,.44,f,i)}if(!c)for(let E=0;E<l;E++){const w=-r/2+r/l*(E+.5);Ee(.08,.012,.012,Sn(t,n),w,.5,o/2+.01,i)}const g=n==="luxury"?Wr(t):n==="traditional"?new it({map:t.granite?.map??t.counter.map,normalMap:t.granite?.normalMap,roughnessMap:t.granite?.roughnessMap,roughness:.35,metalness:.08}):t.counter,b=new it({color:"#e8e6e1",roughness:.28,metalness:.06}),m=n==="luxury"||n==="traditional"?g:b;Ee(r+.02,.05,o+.03,m,0,.885,.01,i);const p=MM(),x=.58,v=Ee(r,x,.02,p,0,.91+x/2,-o/2+.02,i);wM(v,Math.max(4,r*3.2),3.2);const _=.62,S=2.05;if(a){const w=(r-.85)/2;w>.35&&(Ee(w-.02,_,o-.12,t.cabinet,-r/2+w/2,S,-.02,i),Ee(w-.02,_,o-.12,t.cabinet,r/2-w/2,S,-.02,i)),LM(i,t,0,o,.91)}else Ee(r-.04,_,o-.12,t.cabinet,0,S,-.02,i),IM(i,t,0,o,.91)}function LM(s,e,t,n,i){const r=new Tt({color:"#1a1a1c",roughness:.12,metalness:.35,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:1.1});Ee(.68,.03,.5,r,t,i+.03,.02,s);const o=new it({color:"#3a3a3e",roughness:.4,metalness:.7});for(const[l,h]of[[-.16,-.1],[.16,-.1],[-.16,.12],[.16,.12]]){const u=new na(.07,.008,8,24),d=new le(u,o);d.rotation.x=Math.PI/2,d.position.set(t+l,i+.05,h),d.castShadow=!0,s.add(d)}const a=new it({color:"#c5c8cc",roughness:.28,metalness:.85,envMapIntensity:1}),c=new it({color:"#2a2c30",roughness:.35,metalness:.7});Yn(new ve(.78,.1,.48),a,t,1.58,-.02,s),Yn(new ve(.7,.08,.42),c,t,1.5,-.02,s),Ee(.26,1.05,.22,a,t,2.15,-n/2+.16,s),Ee(.18,.03,.01,e.brass,t,1.58,.23,s)}function IM(s,e,t,n,i){const r=new it({color:"#c8ccd0",roughness:.25,metalness:.8});Ee(.48,.12,.36,r,t,i-.04,.04,s),Ee(.4,.02,.28,e.water,t,i+.02,.04,s);const o=e.blackMetal;Rt(.016,.2,o,t,i+.16,-n/2+.16,s),Ee(.03,.03,.16,o,t,i+.26,-n/2+.22,s),Rt(.01,.08,o,t,i+.22,0,s)}function kM(s,e,t){const n=xt(s.x,s.z,s.rot,e),i=s.w,r=s.d,o=s.h,a=new it({color:"#dfe3e8",roughness:.28,metalness:.55,envMapIntensity:.7});$e(i,o,r,.015,a,0,o/2,0,n),Ee(i-.04,.008,.01,t.frame,0,o*.72,r/2-.005,n),Ee(.018,.55,.02,t.blackMetal,i/2-.08,o*.42,r/2+.01,n),Ee(.12,.16,.02,t.frame,0,o*.5,r/2+.008,n),$t(s.x,s.z,i,r,e,s.rot)}function NM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=(s.variant??"").includes("master");Qs(t,n),$e(r+.08,.16,o+.06,.02,t.woodFur,0,.16,0,i);for(const g of[-(r/2-.08),r/2-.08])for(const b of[-(o/2-.08),o/2-.08])Rt(.03,.1,t.woodFur,g,.05,b,i);const c=t.mattress.clone();$e(r,.24,o-.08,.04,c,0,.38,.02,i);const l=n==="luxury"?cl("#5c1a1a",t):t.fabric.clone();l instanceof it&&n!=="luxury"&&(l.color.set(n==="traditional"?"#7a2e1f":n==="minimal"?"#e8e4db":"#d6cfc4"),l.roughness=.9),$e(r+.04,.09,o*.7,.04,l,0,.54,o*.08,i);const h=t.fabric.clone();h.color.set(n==="luxury"?"#c4a265":"#d9c7a3"),$e(r+.05,.05,o*.2,.025,h,0,.6,o*.32,i);const u=t.mattress.clone();u.color.set("#f4efe6"),$e(r*.38,.14,.3,.04,u,-r*.22,.62,-o/2+.28,i),$e(r*.38,.14,.3,.04,u,r*.22,.62,-o/2+.28,i),a&&$e(r*.3,.1,.2,.03,l,0,.68,-o/2+.42,i);const d=a?1.15:.95,f=n==="luxury"?cl("#3a1010",t):t.fabric.clone();if(f instanceof it&&f.color.set(n==="minimal"?"#d0cbc2":n==="traditional"?"#5c2218":"#2c3540"),$e(r+.14,d,.1,.03,f,0,d/2+.1,-o/2-.04,i),n==="luxury")for(let b=0;b<4;b++){const m=-r/2+r/4*(b+.5);Ee(.01,d-.16,.02,t.brass,m,d/2+.1,-o/2+.02,i)}n==="traditional"&&Ee(r+.16,.05,.12,t.woodFur,0,d+.1,-o/2-.04,i),$t(s.x,s.z,r+.3,o+.2,e,s.rot)}function UM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e);$e(s.w,.42,s.d,.015,t.woodFur,0,.27,0,i),Ee(s.w-.08,.008,.01,t.frame,0,.3,s.d/2-.002,i),n==="luxury"&&Ee(.06,.01,.01,t.brass,0,.3,s.d/2+.01,i);const r=t.fabric.clone();r.color.set("#f0e6d4"),r.emissive=new Le("#f0e6d4"),r.emissiveIntensity=.12,Rt(.04,.02,Sn(t,n),0,.5,0,i),Rt(.01,.2,Sn(t,n),0,.61,0,i),Yn(new rn(.09,.13,.14,16),r,0,.8,0,i),$t(s.x,s.z,s.w,s.d,e,s.rot)}function FM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=s.w,o=s.d,a=s.h,c=n==="luxury"?new it({color:"#3a2a22",roughness:.45,metalness:.08,map:t.wood.map,roughnessMap:t.wood.roughnessMap}):t.cabinet;Ee(r,a,o,c,0,a/2,0,i),Ee(.012,a-.12,.012,t.frame,0,a/2,o/2+.004,i),Ee(r+.01,.03,o+.01,t.woodFur,0,a-.01,0,i),Ee(r,.06,o,t.woodFur,0,.03,0,i),n!=="modern"&&n!=="minimal"&&(Ee(.012,.42,.018,Sn(t,n),-.06,a*.5,o/2+.012,i),Ee(.012,.42,.018,Sn(t,n),.06,a*.5,o/2+.012,i)),$t(s.x,s.z,r,o,e,s.rot)}function OM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e);$e(s.w,.08,s.d,.02,Qs(t,n),0,.38,0,i),Ee(s.w-.08,.28,s.d-.08,t.woodFur,0,.18,0,i)}function jl(s){return new Tt({color:"#f4f6f7",roughness:.16,metalness:.04,clearcoat:.55,clearcoatRoughness:.2,envMapIntensity:.8})}function zM(s,e,t){const n=xt(s.x,s.z,s.rot,e),i=jl();$e(.36,.4,.5,.06,i,0,.32,.05,n),$e(.34,.08,.08,.02,i,0,.54,-.18,n),Ee(.36,.42,.16,i,0,.72,-.26,n),Rt(.028,.04,t.blackMetal,.12,.9,-.26,n),$t(s.x,s.z,.4,.6,e,s.rot)}function BM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=jl(),o=s.w,a=s.d;$e(o,.06,a,.01,n==="luxury"?Wr(t):t.woodFur,0,.82,0,i),Ee(o-.04,.7,a-.04,t.cabinet,0,.4,0,i),Yn(new rn(.18,.15,.1,24),r,0,.92,.02,i),Rt(.014,.16,zr(t,n),0,1.04,-a/2+.12,i),Ee(.03,.025,.14,zr(t,n),0,1.12,-a/2+.18,i);const c=new Tt({color:"#cfe0ea",roughness:.04,metalness:.35,envMapIntensity:1.3});Ee(o*.85,.7,.02,n==="luxury"?t.brass:t.frame,0,1.55,-a/2+.02,i),Ee(o*.85-.04,.64,.015,c,0,1.55,-a/2+.035,i),$t(s.x,s.z,o,a,e,s.rot)}function HM(s,e,t){const n=xt(s.x,s.z,s.rot,e),i=s.w,r=jl();Ee(i,.05,i,r,0,.03,0,n);const o=t.glassRail;Ee(i,1.95,.02,o,0,1.02,-i/2+.01,n),Ee(.02,1.95,i,o,-i/2+.01,1.02,0,n),Ee(i,.02,.02,t.blackMetal,0,2,-i/2+.01,n),Ee(.02,.02,i,t.blackMetal,-i/2+.01,2,0,n),Ee(.02,2,.02,t.blackMetal,i/2-.01,1.02,-i/2+.01,n),Ee(.02,2,.02,t.blackMetal,-i/2+.01,1.02,i/2-.01,n),Ee(.02,2,.02,t.blackMetal,-i/2+.01,1.02,-i/2+.01,n);const a=-i/2+.12,c=-i/2+.12;Rt(.012,.22,t.blackMetal,a,2.08,c,n),Ee(.012,.012,i*.28,t.blackMetal,a,2.18,c+i*.14,n),Ee(.22,.02,.22,t.blackMetal,a,2.17,c+i*.28,n),Rt(.045,.01,t.blackMetal,0,.06,0,n)}function GM(s,e,t){const n=xt(s.x,s.z,s.rot,e),i=t.woodFur,r=s.w,o=s.d;for(const c of[-(r/2-.04),r/2-.04])Ee(.05,.32,o,i,c,.2,0,n),Ee(.05,.45,.05,i,c,.55,-o/2+.04,n);for(let c=0;c<6;c++){const l=-o/2+.08+c*((o-.12)/5);Ee(r-.06,.025,.06,i,0,.36,l,n)}for(let c=0;c<4;c++)Ee(r-.06,.06,.025,i,0,.48+c*.1,-o/2+.05,n);const a=t.fabric.clone();a.color.set("#d9c7a3"),$e(r-.12,.07,o-.16,.03,a,0,.42,.04,n),$t(s.x,s.z,r,o,e,s.rot)}function VM(s,e,t){const n=xt(s.x,s.z,s.rot,e);$e(s.w,.04,s.d,.015,t.woodFur,0,s.h,0,n);for(const i of[-(s.w/2-.06),s.w/2-.06])for(const r of[-(s.d/2-.06),s.d/2-.06])Rt(.02,s.h,t.blackMetal,i,s.h/2,r,n)}function WM(s,e,t){const n=xt(s.x,s.z,s.rot,e);$e(s.w,.05,s.d,.015,t.woodFur,0,.8,0,n),Ee(s.w-.1,.7,.04,t.woodFur,0,.4,-s.d/2+.04,n),Ee(.05,.78,s.d,t.woodFur,-s.w/2+.04,.4,0,n),Ee(.05,.78,s.d,t.woodFur,s.w/2-.04,.4,0,n)}function XM(s,e,t,n,i){{const o=!!(n?.has("plantAlt")&&Math.abs(Math.round(s.x*10+s.z*7))%2===1),a=o?"plantAlt":"plant";if(n?.has(a)){const c={x:s.x,z:s.z,y:0,rotY:s.rot,width:o?.7:.55,prefs:i,mats:t},l=n.instantiate(a,c);if(l){e.add(l),$t(s.x,s.z,.45,.45,e);return}}}const r=xt(s.x,s.z,s.rot,e);Rt(.13,.22,t.ceramic,0,.11,0,r),Rt(.11,.06,t.soil,0,.22,0,r);for(let o=0;o<5;o++){const a=o/5*Math.PI*2;Yn(new mi(.15+o%2*.05,10,8),t.plant,Math.cos(a)*.08,.45+o*.08,Math.sin(a)*.08,r)}Yn(new mi(.2,10,8),t.plant,0,.55+s.h*.2,0,r)}function jM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e);Rt(.13,.03,Sn(t,n),0,.02,0,i),Rt(.014,1.42,Sn(t,n),0,.73,0,i);const r=t.fabric.clone();r.color.set("#f0e6d4"),r.emissive=new Le("#f0e6d4"),r.emissiveIntensity=.2,r.side=wt,Yn(new rn(.16,.22,.28,16,1,!1),r,0,1.52,0,i)}function qM(s,e,t){const n=xt(s.x,s.z,s.rot,e);Ee(s.w,.7,s.d,t.woodFur,0,1.15,0,n),Ee(s.w+.04,.06,s.d+.02,t.brass,0,1.52,0,n),Ee(s.w+.02,.04,s.d,t.woodFur,0,.78,0,n),Ee(.04,.7,.04,t.woodFur,-s.w/2+.04,1.15,s.d/2,n),Ee(.04,.7,.04,t.woodFur,s.w/2-.04,1.15,s.d/2,n);const i=t.emissive.clone();i.emissive.set("#ffd27a"),i.emissiveIntensity=.85,Rt(.04,.06,i,0,1.05,s.d/2-.02,n)}function YM(s,e){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),i=a=>{const c=Math.sin(s*12.9898+a*78.233)*43758.5453;return c-Math.floor(c)},r=e==="luxury"?["#5c1a1a","#8a3a2a","#c4a265","#efe2cc","#2a1810"]:e==="minimal"?["#d8d2c8","#b8b2a8","#8a8680","#efece6","#5a5854"]:e==="traditional"?["#7a2e1f","#c4a265","#e8d5b0","#3a2010","#a05a30"]:["#3d5a6c","#d8c2a8","#6a8a7a","#f0ebe3","#2c3a44"];n.fillStyle=r[0],n.fillRect(0,0,512,512);for(let a=0;a<5;a++){n.fillStyle=r[Math.floor(i(a+1)*r.length)],n.globalAlpha=.45+i(a+9)*.4;const c=i(a+2)*512-40,l=i(a+3)*512-40,h=80+i(a+4)*320,u=60+i(a+5)*280;i(a+6)>.45?n.fillRect(c,l,h,u):(n.beginPath(),n.ellipse(c+h/2,l+u/2,h/2,u/2,i(a+7)*.8,0,Math.PI*2),n.fill())}n.globalAlpha=.7,n.strokeStyle=r[Math.floor(i(20)*r.length)],n.lineWidth=6+i(21)*14,n.beginPath(),n.moveTo(0,180+i(22)*200),n.quadraticCurveTo(256,80+i(23)*300,512,200+i(24)*180),n.stroke(),n.globalAlpha=1,n.strokeStyle="rgba(255,255,255,0.18)",n.lineWidth=10,n.strokeRect(16,16,480,480);const o=new Jo(t);return o.colorSpace=vt,o.anisotropy=4,o}function ZM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=n==="luxury"||n==="traditional"?t.brass:t.frame;Ee(s.w,s.h,.04,r,0,1.45,0,i);const o=new it({map:YM(s.x*17+s.z*31+s.w*9,n),roughness:.82,metalness:0,envMapIntensity:.15});Ee(s.w-.08,s.h-.08,.02,o,0,1.45,.015,i)}function KM(s,e,t,n){const i=n==="luxury"?"#6b1d1d":n==="traditional"?"#7a3a1a":n==="minimal"?"#d8d2c8":"#7d7468",r=t.fabric.clone(),o=t.boucle??t.wool??t.fabricTex;o?.map&&(r.map=o.map,r.normalMap=o.normalMap,r.roughnessMap=o.roughnessMap,r.normalScale=new ne(.7,.7)),r.color.set(i),r.roughness=.92,r.envMapIntensity=.18;const a=xt(s.x,s.z,s.rot,e);Ee(s.w,.015,s.d,r,0,.012,0,a)}function Cn(s,e){const{fx:t,fz:n}=qn(e.rot);return{kind:s,x:e.x,z:e.z,fx:t,fz:n,width:e.w,depth:e.d,height:e.h,roomId:e.roomId}}function cn(s,e,t,n,i,r){if(!s?.has(e))return!1;const o=s.instantiate(e,{x:t.x,z:t.z,y:0,rotY:t.rot,width:t.w,depth:t.d,prefs:r,mats:i});return o?(n.add(o),$t(t.x,t.z,(t.w||.6)+.08,(t.d||.6)+.08,n,t.rot),!0):!1}function qu(s,e,t,n,i,r,o){if(!t.length)return;if(!s?.has(e)||t.length<2){for(const g of t)cn(s,e,g,n,i,r)||o(g);return}const a=s.instantiate(e,{x:0,z:0,y:0,rotY:0,width:t[0].w,depth:t[0].d,prefs:r,mats:i,shareMaterials:!0});if(!a){for(const g of t)o(g);return}a.updateMatrixWorld(!0);const c=[];a.traverse(g=>{const b=g;b.isMesh&&c.push(b)});const l=new Mn,h=new D,u=new D(1,1,1),d=new D(0,1,0),f=new Xe;for(const g of c){const b=new Pl(g.geometry,g.material,t.length);b.castShadow=!0,b.receiveShadow=!0,b.name=`instance:${e}:${g.name}`,b.userData.role=a.userData.role,b.userData.modelId=e;const m=g.matrixWorld.clone();for(let p=0;p<t.length;p++){const x=t[p];h.set(x.x,0,x.z),l.setFromAxisAngle(d,x.rot),f.compose(h,l,u),f.multiply(m),b.setMatrixAt(p,f)}b.instanceMatrix.needsUpdate=!0,n.add(b)}for(const g of t)$t(g.x,g.z,(g.w||.5)+.06,(g.d||.5)+.06,n,g.rot)}function $M(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=t.boucle??t.wool??t.fabricTex,o=t.fabric.clone();r?.map&&(o.map=r.map,o.normalMap=r.normalMap,o.roughnessMap=r.roughnessMap);const a=o.clone();a.color=new Le(n==="luxury"?"#6a3030":n==="traditional"?"#8a5a3a":"#c9c2b6");const c=o.clone();c.color=new Le(n==="luxury"?"#3d2018":"#9a9186");const l=t.fabric.clone();t.wool?.map&&(l.map=t.wool.map,l.normalMap=t.wool.normalMap,l.roughnessMap=t.wool.roughnessMap),l.color.set(n==="luxury"?"#4a1c1c":n==="traditional"?"#7a3a1a":"#b7a894");const h=s.w,u=s.d,d=.46;$e(.32,.16,.32,.06,a,-h*.22,d+.1,-u*.12,i),$e(.3,.15,.3,.06,c,h*.18,d+.1,-u*.1,i,.25),$e(.28,.14,.26,.05,a,.02,d+.12,-u*.18,i,-.2),$e(.18,.05,u*.62,.02,l,-h/2+.08,d+.16,.02,i,.08),$e(.22,.04,.36,.02,l,-h/2+.2,d+.04,u*.18,i,.4)}function JM(s,e,t,n){const i=xt(s.x,s.z,s.rot,e),r=t.mattress.clone(),o=t.fabric.clone();t.wool?.map&&(o.map=t.wool.map,o.normalMap=t.wool.normalMap,o.roughnessMap=t.wool.roughnessMap),o.color.set(n==="luxury"?"#5c1a1a":n==="traditional"?"#7a3a1a":"#8a8176");const a=s.w,c=s.d;$e(a*.32,.12,.28,.05,r,-a*.18,.68,-c/2+.38,i,.15),$e(a*.32,.12,.28,.05,r,a*.18,.68,-c/2+.38,i,-.12),$e(a*.92,.05,c*.28,.03,o,0,.56,c/2-c*.16,i)}function Yu(s,e,t,n,i,r=.42){const o=xt(s.x,s.z,s.rot,e),a=["#5c4033","#6b5344","#3f4a3c","#8a6a4a","#4a3a32"];let c=r;for(let l=0;l<3;l++){const h=new it({color:a[l%a.length],roughness:.82,metalness:0}),u=.15+l%2*.03,d=.22-l*.015,f=.025;Ee(u,f,d,h,-s.w*.12,c+f/2,.02,o,(l-1)*.12),c+=f}if(n?.has("vase")){const l=n.instantiate("vase",{x:0,z:0,y:0,rotY:.4,height:.26,prefs:i,mats:t});l&&(l.position.set(s.w*.16,r,-.02),o.add(l))}}function QM(s,e,t,n,i=null){const r=[],o=n.style,a=[],c=[],l=o==="traditional"?"woodChair":"diningChair";for(const h of s)switch(h.kind){case"sofa":cn(i,qy(o),h,e,t,n)||SM(h,e,t,o),$M(h,e,t,o),r.push(Cn("sofa",h));break;case"sofa-chaise":cn(i,"sofaChaise",h,e,t,n)||TM(h,e,t,o);break;case"armchair":cn(i,"armchair",h,e,t,n)||EM(h,e,t,o);break;case"coffee":cn(i,o==="traditional"?"coffeeClassic":"coffeeModern",h,e,t,n)||AM(h,e,t,o),Yu(h,e,t,i,n);break;case"tv":cn(i,"tv",h,e,t,n)||RM(h,e,t,o),r.push(Cn("tv",h));break;case"diningTable":cn(i,o==="traditional"||o==="minimal"?"woodTable":"diningTable",h,e,t,n)||CM(h,e,t,o),r.push(Cn("dining",h));break;case"diningChair":a.push(h);break;case"kitchen":DM(h,e,t,o),r.push(Cn("kitchen",h));break;case"fridge":cn(i,"fridge",h,e,t,n)||kM(h,e,t);break;case"bed":cn(i,"bed",h,e,t,n)||NM(h,e,t,o),JM(h,e,t,o),r.push(Cn("bed",h));break;case"nightstand":c.push(h);break;case"wardrobe":cn(i,"wardrobe",h,e,t,n)||FM(h,e,t,o),r.push(Cn("wardrobe",h));break;case"bench":OM(h,e,t,o);break;case"toilet":cn(i,"toilet",h,e,t,n)||zM(h,e,t),r.push(Cn("bath",h));break;case"basin":cn(i,"vanity",h,e,t,n)||BM(h,e,t,o),r.push(Cn("basin",h));break;case"shower":HM(h,e,t),r.push(Cn("shower",h));break;case"loungeChair":GM(h,e,t),r.push(Cn("outdoor",h));break;case"outdoorTable":VM(h,e,t);break;case"console":cn(i,"console",h,e,t,n)||WM(h,e,t),Yu(h,e,t,i,n,.82),r.push(Cn("foyer",h));break;case"plant":XM(h,e,t,i,n);break;case"lamp":cn(i,"lamp",h,e,t,n)||jM(h,e,t,o);break;case"mandir":qM(h,e,t);break;case"art":ZM(h,e,t,o);break;case"rug":KM(h,e,t,o);break}return qu(i,l,a,e,t,n,h=>PM(h,e,t,o)),qu(i,"nightstand",c,e,t,n,h=>UM(h,e,t,o)),r}function ew(s,e,t,n,i,r,o,a){const c=t>=n,l=o.fabric.clone();l.color.set(a==="luxury"?"#5c1a1a":a==="traditional"?"#7a3a1a":a==="minimal"?"#efeae2":"#c4bbb0");const h=o.wool??o.fabricTex;h?.map&&(l.map=h.map,l.normalMap=h.normalMap,l.roughnessMap=h.roughnessMap),l.side=wt,l.roughness=.88,l.transparent=!1,l.normalScale=new ne(1.1,1.1);const u=Math.min(2.15,i-.35),d=.25+u/2,f=zr(o,a),g=6,b=(m,p,x,v)=>{for(let _=0;_<g;_++){const S=(_+.5)/g,E=Math.sin(_*1.35)*.018;let w;if(c){const A=x/g*1.2;w=Ee(A,u,.03,l,m-x/2+S*x,d,p+E,r)}else{const A=v/g*1.2;w=Ee(.03,u,A,l,m+E,d,p-v/2+S*v,r)}w.name="curtain"}};if(c){const m=Math.max(.2,t*.18),p=e+(n>0?.09:-.09);b(s-t/2+m/2,p,m,.04),b(s+t/2-m/2,p,m,.04),Ee(t+.14,.025,.025,f,s,.25+u+.03,p,r);const x=new le(new mi(.03,10,8),f);x.position.set(s-t/2-.05,.25+u+.03,p),r.add(x);const v=x.clone();v.position.x=s+t/2+.05,r.add(v)}else{const m=Math.max(.2,n*.18),p=s+(t>0?.09:-.09);b(p,e-n/2+m/2,.04,m),b(p,e+n/2-m/2,.04,m),Ee(.025,.025,n+.14,f,p,.25+u+.03,e,r);const x=new le(new mi(.03,10,8),f);x.position.set(p,.25+u+.03,e-n/2-.05),r.add(x);const v=x.clone();v.position.z=e+n/2+.05,r.add(v)}}function bf(s){let e=0;for(let t=0,n=s.length-1;t<s.length;n=t++)e+=s[n][0]*s[t][1]-s[t][0]*s[n][1];return e}function ll(s,e,t){const n=e[0]-s[0],i=e[1]-s[1],r=Math.hypot(n,i)||1;return[-i/r*t,n/r*t]}function tw(s,e,t){if(!t.length)return!0;const n=.18,i=5;let r=0;for(let o=0;o<=i;o++){const a=o/i,c=s[0]+(e[0]-s[0])*a,l=s[1]+(e[1]-s[1])*a;for(const h of t)if(c>=h.x-n&&c<=h.x+h.w+n&&l>=h.z-n&&l<=h.z+h.d+n){r+=1;break}}return r>=3}function nw(s,e,t,n,i=[]){if(s.length<3)return;const r=bf(s)>=0?1:-1,o=.11,a=.026;for(let c=0;c<s.length;c++){const l=s[c],h=s[(c+1)%s.length],u=h[0]-l[0],d=h[1]-l[1],f=Math.hypot(u,d);if(f<.18||!tw(l,h,i))continue;const[g,b]=ll(l,h,r),m=(l[0]+h[0])/2+g*(a/2+.005),p=(l[1]+h[1])/2+b*(a/2+.005),x=new ve(a,o,f-.02);n.push(x);const v=new le(x,t);v.position.set(m,o/2,p),v.rotation.y=Math.atan2(u,d),v.castShadow=!1,v.receiveShadow=!0,v.name="skirting",e.add(v)}}function iw(s,e,t,n,i){if(s.length<3)return;const r=bf(s)>=0?1:-1,o=.42,a=.16,c=.04,l=n.ceiling.clone();l.color.set("#f3f0ea"),l.roughness=.9,i.extraMats.push(l);const h=e-a/2;for(let x=0;x<s.length;x++){const v=s[x],_=s[(x+1)%s.length],S=_[0]-v[0],E=_[1]-v[1],w=Math.hypot(S,E);if(w<.4)continue;const[A,M]=ll(v,_,r),y=(v[0]+_[0])/2+A*(o/2),R=(v[1]+_[1])/2+M*(o/2),k=new ve(o,a,w-.04);i.geos.push(k);const N=new le(k,l);N.position.set(y,h,R),N.rotation.y=Math.atan2(S,E),N.castShadow=!1,N.receiveShadow=!0,N.name="cove-soffit",t.add(N);const I=(v[0]+_[0])/2+A*(o-c/2),O=(v[1]+_[1])/2+M*(o-c/2),U=new ve(c,c,w-.08);i.geos.push(U);const z=new le(U,l);z.position.set(I,e-a-c/2,O),z.rotation.y=Math.atan2(S,E),z.name="cove-lip",t.add(z)}const u=n.emissive.clone();u.emissive.set("#fff1d0"),u.emissiveIntensity=1.4,u.color.set("#fff6e4"),i.extraMats.push(u);const d=gi(s),f=[];for(let x=0;x<s.length;x++){const v=s[x],_=s[(x+1)%s.length],S=_[0]-v[0],E=_[1]-v[1],w=Math.hypot(S,E);if(w<1.2)continue;const[A,M]=ll(v,_,r),y=Math.max(1,Math.floor(w/1.7));for(let R=1;R<=y;R++){const k=R/(y+1),N=v[0]+S*k+A*(o-.08),I=v[1]+E*k+M*(o-.08);f.push({x:N,z:I})}}const g=i.mobile?6:10,b=Math.max(1,Math.ceil(f.length/g));let m=0;const p=i.mobile?0:4;for(let x=0;x<f.length;x+=b){const{x:v,z:_}=f[x],S=new le(new rn(.07,.075,.04,16),u);S.position.set(v,e-a+.01,_),S.name="downlight",t.add(S);const E=new le(new na(.075,.008,6,16),n.blackMetal);if(E.rotation.x=Math.PI/2,E.position.set(v,e-a-.005,_),t.add(E),m<p){const w=new Nl("#fff3d6",1.35,6.5,.42,.45,1.4);w.position.set(v,e-a-.05,_),w.target.position.set(v,0,_),w.castShadow=!1,t.add(w),t.add(w.target),i.lights.push(w),m+=1}}if(d.w*d.d>16){const x=new le(new rn(.08,.085,.04,16),u);x.position.set(d.cx,e-.04,d.cz),x.name="downlight-centre",t.add(x)}}function sw(s,e,t,n,i,r,o,a){const c=t-s,l=n-e,h=Math.hypot(c,l)||.9,u=Math.abs(c)>Math.abs(l),d=(s+t)/2,f=(e+n)/2,g=.07,b=.11,m=(S,E)=>{const w=new ve(u?g:b,i,u?b:g);a.push(w);const A=new le(w,o);A.position.set(S,i/2,E),A.castShadow=!1,A.receiveShadow=!0,A.name="door-frame",r.add(A)};m(s,e),m(t,n);const p=new ve(u?h+g:b,g,u?b:h+g);a.push(p);const x=new le(p,o);x.position.set(d,i+g/2,f),x.name="door-lintel",x.receiveShadow=!0,r.add(x);const v=new ve(u?h+g:b,.018,u?b:h+g);a.push(v);const _=new le(v,o);_.position.set(d,.009,f),_.name="door-threshold",r.add(_)}function rw(s,e,t,n,i,r,o,a){const c=t-s,l=n-e,h=Math.hypot(c,l)||1,u=-l/h,d=c/h,f=s+c*.18+u*.05,g=e+l*.18+d*.05,b=Math.atan2(u,d),m=1.15,p=new le(new ve(.086,.126,.01),r);a.push(p.geometry),p.position.set(f,m,g),p.rotation.y=b,p.name="switch-plate",i.add(p);for(const x of[.022,-.022]){const v=new le(new ve(.048,.032,.012),o);a.push(v.geometry),v.position.set(f+u*.008,m+x,g+d*.008),v.rotation.y=b,v.name="switch-rocker",i.add(v)}}const js=1.55,Zu={foyer:0,lobby:1,hall:2,living:3,dining:4,kitchen:5,bedroom:6,dressing:7,bathroom:8,utility:9,linen:10,balcony:11,terrace:12};function Li(s,e,t){let n=!1;const i=s.length;for(let r=0,o=i-1;r<i;o=r++){const[a,c]=s[r],[l,h]=s[o];c>t!=h>t&&e<(l-a)*(t-c)/(h-c+1e-12)+a&&(n=!n)}return n}function hl(s,e,t,n=.4){for(const i of s)if(Li(i.polygon,e,t)||n>0&&qo(i.polygon,e,t)<=n)return!0;return!1}function qo(s,e,t){let n=1/0;for(let i=0;i<s.length;i++){const r=s[i],o=s[(i+1)%s.length],a=ow(e,t,r[0],r[1],o[0],o[1]);a<n&&(n=a)}return n}function ow(s,e,t,n,i,r){const o=i-t,a=r-n,c=o*o+a*a||1;let l=((s-t)*o+(e-n)*a)/c;return l=Math.max(0,Math.min(1,l)),Math.hypot(s-(t+l*o),e-(n+l*a))}function Ns(s,e,t,n=.3){for(const i of s)if(e+n>i.minX&&e-n<i.maxX&&t+n>i.minZ&&t-n<i.maxZ)return!0;return!1}function aw(s,e,t,n=.32){const i=(a,c)=>!Ns(e,a,c,n)&&hl(t,a,c,.25);if(i(s.x,s.z))return s;const r=[.25,.45,.7,1,1.35,1.75,2.2,2.8],o=16;for(const a of r)for(let c=0;c<o;c++){const l=c/o*Math.PI*2,h=s.x+Math.cos(l)*a,u=s.z+Math.sin(l)*a;if(i(h,u))return{x:h,z:u}}for(const a of t){const c=gi(a.polygon);if(i(c.cx,c.cz))return{x:c.cx,z:c.cz}}return s}function cw(s,e){return e?s.map(([t,n])=>wn(t,n,e)):s}function lw(s,e,t,n){return Math.atan2(-(t-s),-(n-e))}function Ku(s,e){const t=`${s} ${e}`.toLowerCase();if(/master/.test(t))return 0;const n=t.match(/(\d+)/);return n?Number(n[1]):9}function hw(s){const e=s.name.replace(/\s+area$/i,"").trim();return s.type==="lobby"||s.id==="lobby"?{name:e.toLowerCase().includes("entrance")?"Foyer":e||"Foyer",short:"Foyer",type:"foyer"}:s.type==="hall"?{name:e||"Hall",short:"Hall",type:"foyer"}:s.type==="living"?{name:"Living",short:"Living",type:"living"}:s.type==="kitchen"?{name:"Kitchen",short:"Kitchen",type:"kitchen"}:s.type==="bathroom"?{name:e||"Bathroom",short:uw(e),type:"bathroom"}:s.type==="bedroom"?{name:e||"Bedroom",short:dw(e),type:"bedroom"}:s.type==="balcony"?{name:"Balcony",short:"Balcony",type:"balcony"}:s.type==="terrace"?{name:"Terrace",short:"Terrace",type:"terrace"}:s.type==="dressing"?{name:"Dressing",short:"Dressing",type:"dressing"}:s.type==="utility"?{name:"Utility",short:"Utility",type:"utility"}:s.type==="linen"?{name:"Linen",short:"Linen",type:"linen"}:{name:e||s.id,short:e||s.id,type:s.type}}function uw(s){return/master/i.test(s)?"Master bath":/en-?suite/i.test(s)?"En-suite":/toilet\s*2/i.test(s)?"Toilet 2":/utility/i.test(s)?"Bath":s.length>14?"Bathroom":s||"Bathroom"}function dw(s){return/master/i.test(s)?"Master bed":s||"Bedroom"}const ul=-8*Math.PI/180;function vf(s,e){return s==="bathroom"||s==="dressing"||s==="linen"||s==="utility"||e<6}function xf(s,e){return vf(s,e)?88:73}function sc(s,e,t,n,i,r,o){const a=gi(e),c=s.area_m2||a.w*a.d,l=vf(t,c),h=l?Math.min(.42,Math.max(.28,Math.min(a.w,a.d)*.2)):Math.max(.5,Math.min(.75,Math.min(a.w,a.d)*.16)),u=l?.22:.28,d=t==="balcony"||t==="terrace",f=d&&Math.min(a.w,a.d)<2.3;let g=a.cx,b=a.cz;t==="kitchen"&&o&&(g=a.cx*.7+o.x*.3,b=a.cz*.7+o.z*.3),t==="foyer"&&r&&(g=a.cx*.3+r.x*.7,b=a.cz*.3+r.z*.7),d&&(g=a.cx,b=a.cz);const m=t==="bedroom"&&o&&o.fx!==void 0&&o.fz!==void 0&&o.depth?o:null;if(m){const I=m.x-m.fx*(m.depth/2),O=m.z-m.fz*(m.depth/2);g=I*.6+m.x*.4,b=O*.6+m.z*.4}const p=[],x=(I,O,U,z)=>{const H=Ai(e,I,O,z??(t==="bathroom"?.18:l?.36:.32));if(!Li(e,H.x,H.z))return;let q=H.x,W=H.z;if(Ns(n,q,W,u)){const he=q+(a.cx-q)*.3,ge=W+(a.cz-W)*.3,K=Ai(e,he,ge,.3);if(Ns(n,K.x,K.z,u*.85))return;q=K.x,W=K.z}const Z=Math.hypot(g-q,b-W);p.push({x:q,z:W,score:U+Z})};for(const I of i){const O=Yi(I,e);if(!O)continue;const U=l?Math.min(.5,Math.min(a.w,a.d)*.26):.65,z=O.mx+O.ix*U,H=O.mz+O.iz*U;let q=16;t==="kitchen"&&o&&Math.hypot(z-o.x,H-o.z)<2.2&&(q=-10),x(z,H,q),x(O.mx+O.ix*(U+.4),O.mz+O.iz*(U+.4),q-4)}if(x(a.minX+h,a.minZ+h,10),x(a.maxX-h,a.minZ+h,10),x(a.minX+h,a.maxZ-h,10),x(a.maxX-h,a.maxZ-h,10),x(a.cx,a.minZ+h,8),x(a.cx,a.maxZ-h,8),x(a.minX+h,a.cz,8),x(a.maxX-h,a.cz,8),d&&(a.w>=a.d?(x(a.minX+h,a.cz,28),x(a.maxX-h,a.cz,28),x(a.minX+h,a.maxZ-h*.6,22),x(a.maxX-h,a.maxZ-h*.6,22)):(x(a.cx,a.minZ+h,28),x(a.cx,a.maxZ-h,28))),t==="kitchen"){const I=o?.x??a.cx,O=o?.z??a.minZ+.4,U=I>a.cx?a.minX+h:a.maxX-h,z=O>a.cz?a.minZ+h:a.maxZ-h;x(U,z,48),x(U,a.cz,28),x((U+a.cx)/2,z,26);for(const H of p){const q=Math.hypot(H.x-I,H.z-O),W=Math.abs(H.x-I)+Math.abs(H.z-O);H.score+=q*5+W*3,q<2.2&&(H.score-=50)}g=a.cx,b=a.cz}if(t==="bathroom"){const I=o?.showerX!==void 0&&o?.showerZ!==void 0?{x:o.showerX,z:o.showerZ}:null;g=a.cx,b=a.cz;let O={x:a.cx,z:a.cz,score:-1};for(const q of i){const W=Yi(q,e);if(!W)continue;const Z=[[a.cx,a.minZ+.4],[a.cx,a.maxZ-.4],[a.minX+.4,a.cz],[a.maxX-.4,a.cz]];for(let[he,ge]of Z){if(I){const ee=Math.hypot(he-I.x,ge-I.z);if(ee<.9){const fe=he-I.x,pe=ge-I.z,Re=Math.hypot(fe,pe)||1;he+=fe/Re*(1.05-ee),ge+=pe/Re*(1.05-ee);const $=Ai(e,he,ge,.28);he=$.x,ge=$.z}}const K=Math.hypot(he-W.mx,ge-W.mz),F=(he-W.mx)*W.ix+(ge-W.mz)*W.iz,B=a.d>=a.w?Math.abs(ge-W.mz):Math.abs(he-W.mx),Y=K+B*1.2+F*.2;Y>O.score&&(O={x:he,z:ge,score:Y})}}O.score>0?(g=O.x,b=O.z):o&&(g=o.x*.25+a.cx*.75,b=o.z*.25+a.cz*.75);for(const q of i){const W=Yi(q,e);if(!W)continue;const Z=-W.iz,he=W.ix;let ge=0,K=0;if(I){const B=(W.mx-I.x)*Z+(W.mz-I.z)*he>=0?1:-1;ge=Z*B*.2,K=he*B*.2}x(W.mx+W.ix*.55+ge,W.mz+W.iz*.55+K,150,.22),x(W.mx+W.ix*.75+ge,W.mz+W.iz*.75+K,156,.22),x(W.mx+W.ix*.45,W.mz+W.iz*.45,120,.2)}const U=[[a.minX+.28,a.minZ+.28],[a.maxX-.28,a.minZ+.28],[a.minX+.28,a.maxZ-.28],[a.maxX-.28,a.maxZ-.28]];I&&(U.sort((q,W)=>Math.hypot(W[0]-I.x,W[1]-I.z)-Math.hypot(q[0]-I.x,q[1]-I.z)),x(U[0][0],U[0][1],36,.2));const z=(q,W,Z,he)=>{for(let ge=.06;ge<5;ge+=.06)if(!Li(e,q+Z*ge,W+he*ge))return ge;return 5},H=(q,W,Z,he)=>{for(let ge=.12;ge<4;ge+=.08)if(Ns(n,q+Z*ge,W+he*ge,.12))return ge;return 4};for(const q of p){const W=g-q.x,Z=b-q.z,he=Math.hypot(W,Z)||.01,ge=W/he,K=Z/he,F=z(q.x,q.z,ge,K),B=H(q.x,q.z,ge,K);if(B<.9?q.score-=130:B<1.35&&(q.score-=45),q.score+=Math.min(B,2.4)*22,F<.7&&(q.score-=80),q.score+=Math.min(F,2.4)*18,q.score+=Math.min(he,2.2)*16,he<.85&&(q.score-=60),I){const Y=I.x-q.x,ee=I.z-q.z,fe=Math.hypot(Y,ee)||1;Y/fe*ge+ee/fe*K>.55&&fe<2&&(q.score-=120),fe<1.15&&(q.score-=80),q.score+=Math.min(fe,2.2)*14}}}if(t==="bedroom")if(m){const I=-m.fz,O=m.fx,U=m.x+m.fx*(m.depth/2),z=m.z+m.fz*(m.depth/2);for(const Z of[.42,.58,.75,.95,1.2]){const he=Ai(e,U+m.fx*Z,z+m.fz*Z,.26);x(he.x,he.z,120-Z*12,.22)}for(const Z of[1,-1])for(const he of[.55,.8]){const ge=Ai(e,U+m.fx*he+I*Z*.5,z+m.fz*he+O*Z*.5,.24);x(ge.x,ge.z,64,.22)}const H=[[a.minX+h,a.minZ+h],[a.maxX-h,a.minZ+h],[a.minX+h,a.maxZ-h],[a.maxX-h,a.maxZ-h]];for(const[Z,he]of H){const ge=(Z-m.x)*m.fx+(he-m.z)*m.fz;ge>.35&&x(Z,he,36+ge*4)}const q=(m.width??1.6)/2,W=(Z,he)=>{const ge=(Z-m.x)*m.fx+(he-m.z)*m.fz,K=(Z-m.x)*I+(he-m.z)*O;return Math.abs(ge)<m.depth/2+.3&&Math.abs(K)<q+.22};for(const Z of p){const he=Z.x-m.x,ge=Z.z-m.z,K=Math.hypot(he,ge),F=he*m.fx+ge*m.fz;W(Z.x,Z.z)&&(Z.score-=160),K<1.35&&(Z.score-=90),F<.35&&(Z.score-=70),Z.score+=Math.min(K,2.8)*10;const B=g-Z.x,Y=b-Z.z,ee=Math.hypot(B,Y)||1,fe=B/ee*-m.fx+Y/ee*-m.fz;Z.score+=fe*44,fe<.5&&(Z.score-=95);let pe=1.4;for(const $ of n){const oe=Math.max($.minX-Z.x,0,Z.x-$.maxX),L=Math.max($.minZ-Z.z,0,Z.z-$.maxZ),ae=Z.x>=$.minX&&Z.x<=$.maxX&&Z.z>=$.minZ&&Z.z<=$.maxZ?0:Math.hypot(oe,L);ae<pe&&(pe=ae)}Z.score+=Math.min(pe,.85)*28;const Re=qo(e,Z.x,Z.z);Re<.28&&(Z.score-=28),Z.score+=Math.min(Re,.7)*12}}else for(const I of p){const O=Math.hypot(I.x-a.cx,I.z-a.cz);I.score+=O*1.6}p.sort((I,O)=>O.score-I.score);const v=p[0]??{x:a.cx,z:a.cz},_=g-v.x,S=b-v.z,E=Math.hypot(_,S)||1;if(t==="bedroom"){let I=E;for(let U=E;U<E+3;U+=.2){const z=v.x+_/E*U,H=v.z+S/E*U;if(!Li(e,z,H))break;I=U}const O=Math.min(I*.72,E+1.2);g=v.x+_/E*O,b=v.z+S/E*O}const w=Math.hypot(g-v.x,b-v.z)||1;let A=f?-20*Math.PI/180:d?-14*Math.PI/180:t==="bathroom"?-16*Math.PI/180:t==="bedroom"?-10*Math.PI/180:ul;if(t==="bathroom"&&w<1.2){const I=(g-v.x)/w,O=(b-v.z)/w,U=Ai(e,v.x+I*1.25,v.z+O*1.25,.22);g=U.x,b=U.z}const M=Math.hypot(g-v.x,b-v.z)||1;let y=t==="bathroom"?1.2:js+Math.tan(A)*M;if(t==="bathroom"){const I=Math.atan((y-js)/M),O=-20*Math.PI/180,U=-8*Math.PI/180;A=Math.max(O,Math.min(U,I))}let R=xf(t,c);t==="kitchen"&&c<18&&(R=80),d&&f&&(R=80),t==="bedroom"&&(/master/i.test(s.name||"")||c>=14)?R=Math.max(R,82):t==="bedroom"&&(R=Math.max(R,76)),t==="bathroom"&&(R=Math.max(R,c<4?96:92)),t==="bedroom"&&w<2.4&&(R=Math.max(R,88)),t==="bedroom"&&w<1.85&&(R=Math.max(R,95));const N=p.slice(0,6).map(I=>({x:I.x,z:I.z}));return{camX:v.x,camZ:v.z,lookX:g,lookZ:b,lookY:y,fov:R,pitch:A,alts:N}}function Ai(s,e,t,n=.34){if(Li(s,e,t)&&qo(s,e,t)>=n)return{x:e,z:t};const i=gi(s);for(let r=.08;r<=1.01;r+=.08){const o=e+(i.cx-e)*r,a=t+(i.cz-t)*r;if(Li(s,o,a)&&qo(s,o,a)>=Math.min(n,.22))return{x:o,z:a}}return{x:i.cx,z:i.cz}}function rc(s,e,t,n,i,r,o,a,c){const l={x:r.camX,z:r.camZ},h=n==="bathroom"||n==="bedroom",u=n==="bathroom"?.14:n==="bedroom"?.22:.28,d=v=>{let _=aw(v,o,a,u);const S=a.find(M=>Li(M.polygon,v.x,v.z))??a.find(M=>Li(M.polygon,r.lookX,r.lookZ))??a[0];if(!S)return _;const E=n==="bathroom"?.16:n==="utility"||n==="dressing"?.36:n==="bedroom"?.22:.32,w=Ai(S.polygon,_.x,_.z,E),A=Math.hypot(w.x-v.x,w.z-v.z);return h&&A>.55?Ai(S.polygon,v.x,v.z,n==="bathroom"?.14:.2):w};let f=d(l);if(h&&r.alts&&Math.hypot(f.x-l.x,f.z-l.z)>.45)for(const _ of r.alts){const S=d(_);if(Math.hypot(S.x-_.x,S.z-_.z)<=.45){f=S;break}}const g={x:r.lookX,z:r.lookZ},b=Math.hypot(g.x-f.x,g.z-f.z)||1,m=r.lookY??js+Math.tan(ul)*b,p=lw(f.x,f.z,g.x,g.z),x=r.pitch??ul;return{id:s,name:e,short:t,type:n,area_m2:i,note:c,position:new D(f.x,js,f.z),lookAt:new D(g.x,m,g.z),yaw:p,pitch:x,walkX:f.x,walkZ:f.z,fov:r.fov??xf(n,i)}}function _f(s,e,t,n=new Map){const i=[],r=s.rooms.map(d=>({...d,polygon:cw(d.polygon,e)})),o=vM(s,e),a=r.flatMap(d=>d.polygon.map(f=>f[0])),c=r.flatMap(d=>d.polygon.map(f=>f[1])),l={x:(Math.min(...a)+Math.max(...a))/2,z:(Math.min(...c)+Math.max(...c))/2},h=r.filter(d=>d.type!=="utility"||(d.area_m2??0)>2),u=d=>{const g=(n.get(d)??[]).find(b=>b.kind==="kitchen");return g?{x:g.x,z:g.z}:void 0};for(const d of r){if(d.type==="utility"&&(d.area_m2??0)<2)continue;const f=hw(d),g=f.type==="kitchen"?u(d.id):f.type==="bedroom"?(()=>{const p=(n.get(d.id)??[]).find(x=>x.kind==="bed");return p?{x:p.x,z:p.z,fx:p.fx,fz:p.fz,depth:p.depth,width:p.width}:void 0})():f.type==="bathroom"?(()=>{const p=n.get(d.id)??[],x=p.filter(S=>S.kind==="basin"||S.kind==="bath"),v=p.find(S=>S.kind==="shower");if(!x.length&&!v)return;const _=x.length?x:[v];return{x:_.reduce((S,E)=>S+E.x,0)/_.length,z:_.reduce((S,E)=>S+E.z,0)/_.length,showerX:v?.x,showerZ:v?.z}})():void 0,b=sc(d,d.polygon,f.type,t,o,l,g);i.push(rc(d.id,f.name,f.short,f.type,d.area_m2,b,t,h,d.notes));const m=d.type==="living"&&/dining|kitchen/i.test(d.name);if(m&&/dining/i.test(d.name)){const p=sc(d,d.polygon,"dining",t,o,l);i.push(rc(d.id+"-dining","Dining","Dining","dining",d.area_m2,p,t,h))}if(m&&/kitchen/i.test(d.name)||d.type==="living"&&d.id==="lounge"){const p=u(d.id),x=sc(d,d.polygon,"kitchen",t,o,l,p);i.push(rc(d.id+"-kitchen","Kitchen","Kitchen","kitchen",d.area_m2,x,t,h))}}return i.sort((d,f)=>{const g=Zu[d.type]??50,b=Zu[f.type]??50;return g!==b?g-b:d.type==="bedroom"?Ku(d.name,d.id)-Ku(f.name,f.id):d.name.localeCompare(f.name)}),i}function $u(s,e){const t={modern:"Modern",luxury:"Luxury",minimal:"Minimal",traditional:"Traditional Indian"},n={marble:"Marble",wood:"Wood",tile:"Tile"},i={white:"White",walnut:"Walnut",black:"Matte black",granite:"Granite"},r=[];return r.push({label:"Style",value:t[e.style]}),s.type==="kitchen"?(r.push({label:"Cabinets & counter",value:i[e.kitchen]}),r.push({label:"Floor",value:"Tile"})):s.type==="bathroom"||s.type==="utility"?(r.push({label:"Floor",value:"Tile"}),r.push({label:"Walls",value:"Follow your wall colour"})):s.type==="balcony"||s.type==="terrace"?r.push({label:"Deck",value:"Terracotta pavers"}):s.type==="bedroom"?(r.push({label:"Floor",value:n[e.flooring]}),r.push({label:"Headboard",value:t[e.style]})):(r.push({label:"Floor",value:n[e.flooring]}),r.push({label:"Walls",value:"Your chosen wall colour"})),r}function fw(s,e,t,n=new Map){const i=_f(s,e,t,n),r=i.find(o=>o.type==="living")??i.find(o=>o.type==="foyer")??i[0];return r?{x:r.walkX,y:js,z:r.walkZ,yaw:r.yaw,pitch:r.pitch}:{x:0,y:js,z:0,yaw:0}}const Ju=2.1,Qu=.9,ed=1.4;function Ss(s,e="wood",t="#ffffff"){return z_(s,e,t)}function pw(s){let e=0;for(let t=0,n=s.length-1;t<s.length;n=t++)e+=s[n][0]*s[t][1]-s[t][0]*s[n][1];return e}function td(s){const e=pw(s)<0?[...s].reverse():s,t=new Ks;t.moveTo(e[0][0],e[0][1]);for(let n=1;n<e.length;n++)t.lineTo(e[n][0],e[n][1]);return t.closePath(),t}function Pn(s,e){return e?s.map(([t,n])=>wn(t,n,e)):s}function nd(s,e,t,n={showCeiling:!1,y:0,cutaway:!1}){const i=n.transform,r=new Et;r.position.y=n.y;const o=[],a=[],c=[],l=[],h=pn(t.wall.clone(),.42);h.color.set(e.wallColor),l.push(h),ku(t,e.kitchen),Nu(t,e);const u=Ss(Iu(t,e.flooring),e.flooring),d=Ss(t.tile,"tile-wet","#e8eef0"),f=Ss(t.tile,"tile","#efeae2"),g=Ss(t.terra,"terra"),b=Ss(t.wood,"wood");l.push(u,d,f,g,b);const m=n.cutaway?Math.min(1.15,s.wallHeight):s.wallHeight,p=s.walls.map(F=>i?wr(F,i):F);for(const F of s.rooms){const B=Pn(F.polygon,i);if(B.length<3)continue;const Y=td(B),ee=new jo(Y);ee.rotateX(Math.PI/2),c.push(ee);let fe=u,pe=e.flooring;F.type==="bathroom"||F.type==="utility"?(fe=d,pe="tile-wet"):F.type==="kitchen"?(fe=f,pe="tile"):F.type==="terrace"||F.type==="balcony"?(fe=g,pe="terra"):F.type==="bedroom"&&e.flooring==="marble"?(fe=u,pe="marble"):(F.type==="lobby"||F.type==="hall")&&(fe=f,pe="tile"),Xa(ee,ja(pe));const Re=new le(ee,fe);Re.position.y=.008,Re.receiveShadow=!0,Re.castShadow=!1,Re.frustumCulled=!1,Re.name=`floor-${F.id}`,r.add(Re),a.push(Re),n.cutaway||nw(B,r,t.woodFur,c,p)}const x=s.bounds,v=[[x.min[0],x.min[1]],[x.max[0],x.min[1]],[x.max[0],x.max[1]],[x.min[0],x.max[1]]],_=Pn(v,i),S=new jo(td(_));S.rotateX(Math.PI/2),Xa(S,ja("tile")),c.push(S);const E=new le(S,t.concfloor?Ss(t.concfloor,"wood","#d0cdc6"):u);E.position.y=-.04,E.receiveShadow=!0,r.add(E),l.push(E.material);for(const F of s.walls){const B=i?wr(F,i):F;if(B.w<.02||B.d<.02)continue;const Y=new ve(B.w,m,B.d);c.push(Y);const ee=new le(Y,h);ee.position.set(B.x+B.w/2,m/2,B.z+B.d/2),ee.castShadow=!0,ee.receiveShadow=!0,r.add(ee),o.push(Ey(B))}for(const F of s.windows){const B=i?wr(F,i):F,Y=B.w>=B.d,ee=Y?B.w:B.d,fe=Math.max(Y?B.d:B.w,.06),pe=B.x+B.w/2,Re=B.z+B.d/2,$=n.cutaway?Math.min(.4,Qu):Qu,oe=n.cutaway?Math.min(.6,ed):ed,L=Y?ee:.06,_e=Y?.06:ee,ae=t.frame,we=new le(new ve(L,.05,_e),ae);we.position.set(pe,$+oe,Re),r.add(we);const xe=new le(new ve(L,.05,_e),ae);xe.position.set(pe,$,Re),r.add(xe);const Oe=new le(new ve(Y?ee-.04:.03,oe-.04,Y?.03:ee-.04),t.glass);Oe.position.set(pe,$+oe/2,Re),r.add(Oe);const Ce=new le(new ve(Y?ee:fe+.08,.04,Y?fe+.08:ee),t.woodFur);Ce.position.set(pe,$-.02,Re),r.add(Ce)}if(e.furniture&&!n.cutaway)for(const F of s.windows){const B=i?wr(F,i):F;ew(B.x+B.w/2,B.z+B.d/2,B.w,B.d,s.wallHeight,r,t,e.style)}const w=new it({color:"#ece8e1",roughness:.42,metalness:.18,envMapIntensity:.4}),A=new it({color:"#f7f4ef",roughness:.5,metalness:.08});for(const F of s.doors){const B=i?wn(F.ax,F.az,i):[F.ax,F.az],Y=i?wn(F.bx,F.bz,i):[F.bx,F.bz];(B[0]+Y[0])/2,(B[1]+Y[1])/2;const ee=Y[0]-B[0],fe=Y[1]-B[1],pe=Math.hypot(ee,fe)||F.width,Re=Math.atan2(ee,fe),$=B[0],oe=B[1],L=new Et;L.position.set($,0,oe),L.rotation.y=Re+Math.PI/2.6;const _e=n.cutaway?Math.min(m,1.05):Ju,ae=new le(new ve(.04,_e,pe*.95),t.door);ae.position.set(0,_e/2,pe*.45),ae.castShadow=!0,L.add(ae);const we=new le(new rn(.015,.015,.1,8),zr(t,e.style));we.rotation.z=Math.PI/2,we.position.set(.03,1,pe*.8),L.add(we),r.add(L),n.cutaway||(sw(B[0],B[1],Y[0],Y[1],Ju,r,t.woodFur,c),rw(B[0],B[1],Y[0],Y[1],r,w,A,c))}for(const F of s.rooms)F.type!=="balcony"&&F.type!=="terrace"||mw(Pn(F.polygon,i),r,t,o,n.cutaway);const M=new Et;M.name="furniture",M.visible=e.furniture;const y=new Map;if(e.furniture){const F=_M(s,e,i);Qy(F.issues,`${s.id}/${e.style}`);const B=new Et,Y=QM(F.placements,B,t,e,n.catalog??null);for(const ee of Y){const fe=ee.roomId??"";y.has(fe)||y.set(fe,[]),y.get(fe).push(ee)}M.add(B);for(const ee of F.footprints)ee.ghost||o.push({minX:ee.minX,maxX:ee.maxX,minZ:ee.minZ,maxZ:ee.maxZ})}r.add(M);const R=new le(S,t.ceiling);if(R.position.y=s.wallHeight-.02,R.rotation.x=0,R.scale.y=-1,R.visible=n.showCeiling&&!n.cutaway,R.receiveShadow=!0,R.name="ceiling",r.add(R),n.showCeiling&&!n.cutaway){const F=s.rooms.filter(B=>B.type!=="terrace"&&B.type!=="balcony");if(F.length){let B=1/0,Y=-1/0,ee=1/0,fe=-1/0;for(const oe of F)for(const[L,_e]of Pn(oe.polygon,i))L<B&&(B=L),L>Y&&(Y=L),_e<ee&&(ee=_e),_e>fe&&(fe=_e);const pe=Math.max(1,Y-B)+.7,Re=Math.max(1,fe-ee)+.7,$=new le(new is(pe,Re),t.ceiling);$.rotation.x=Math.PI/2,$.position.set((B+Y)/2,s.wallHeight-.015,(ee+fe)/2),$.name="ceiling-cover",r.add($)}}const k=[],N=[],I=[];for(const F of s.rooms){if(F.type==="terrace"||F.type==="balcony"){const pe=gi(Pn(F.polygon,i)),Re=t.emissive.clone();Re.emissive.set("#ffc078"),Re.emissiveIntensity=.3,N.push(Re);const $=new le(new rn(.1,.1,.03,16),Re);$.position.set(pe.cx,s.wallHeight-.08,pe.cz),$.visible=n.showCeiling&&!n.cutaway,r.add($);const oe=new On("#ffc078",0,6.5,2);oe.position.set(pe.cx,s.wallHeight-.35,pe.cz),oe.visible=!1,oe.userData.balcony=!0,r.add(oe),I.push(oe);const L=t.emissive.clone();L.emissive.set("#ffd0a0"),L.emissiveIntensity=.35,N.push(L);const _e=new le(new ve(.12,.18,.08),L);_e.position.set(pe.cx,1.75,pe.cz),r.add(_e);const ae=new On("#ffd0a0",0,4.5,2);ae.position.set(pe.cx,1.7,pe.cz),ae.visible=!1,ae.userData.balcony=!0,r.add(ae),I.push(ae);continue}const B=gi(Pn(F.polygon,i)),Y=t.emissive.clone();Y.emissive.set("#ffd9a0"),Y.emissiveIntensity=.35,N.push(Y);const ee=new le(new rn(.12,.12,.03,16),Y);ee.position.set(B.cx,s.wallHeight-.05,B.cz),ee.visible=n.showCeiling&&!n.cutaway,r.add(ee);const fe=new On("#ffd7a3",0,Math.max(4.5,Math.min(B.w,B.d)*1.6+2),2);fe.position.set(B.cx,s.wallHeight-.28,B.cz),fe.visible=!1,r.add(fe),k.push(fe)}const O=[];if(n.showCeiling&&!n.cutaway)for(const F of s.rooms)F.type!=="living"&&F.type!=="bedroom"||F.area_m2<10||iw(Pn(F.polygon,i),s.wallHeight,r,t,{mobile:!!n.mobile,geos:c,extraMats:l,lights:O});const U=bw(s,i),z=n.hotspots?gw(s,i,n.cutaway,r):[];function H(F){const B=F==="night",Y=F==="golden";for(const ee of k)ee.intensity=B?n.cutaway?1.15:1.7:Y?.22:0,ee.visible=B||Y,ee.color.set(B?"#ffd7a3":"#ffc888");for(const ee of I)ee.intensity=B?2.15:Y?.4:0,ee.visible=B||Y,ee.color.set("#ffc078");for(const ee of N)ee.emissiveIntensity=B?2.4:Y?.75:.3,ee.emissive.set(B?"#ffcc88":"#ffe8c0")}const q=s.rooms.map(F=>({...F,polygon:Pn(F.polygon,i)})),W=_f(s,i,o,y),he={...fw(s,i,o,y),y:n.y+1.6};function ge(F){h.color.set(F.wallColor),ku(t,F.kitchen),Nu(t,F),H_(u,Iu(t,F.flooring),F.flooring);const B=ja(F.flooring);for(const Y of a)Y.material===u&&Xa(Y.geometry,B);M.visible=F.furniture,Zy(M,F,t)}function K(){r.traverse(F=>{const B=F.element;B&&B.parentElement&&B.remove()}),r.removeFromParent(),r.traverse(F=>{});for(const F of c)F.dispose();for(const F of l)F.dispose()}return{group:r,collisions:o,spawn:he,floorMeshes:a,wallMat:h,hotspots:z,rooms:W,worldRooms:q,applyPrefs:ge,setTime:H,dispose:K,lighting:U}}function mw(s,e,t,n,i){if(s.length<3)return;const r=i?.6:1.05,o=s.length;for(let a=0;a<o;a++){const c=s[a],l=s[(a+1)%o],h=l[0]-c[0],u=l[1]-c[1],d=Math.hypot(h,u);if(d<.3)continue;const f=(c[0]+l[0])/2,g=(c[1]+l[1])/2;if(n.some(_=>_.maxX-_.minX>.14||_.maxZ-_.minZ>.14?f>=_.minX-.16&&f<=_.maxX+.16&&g>=_.minZ-.16&&g<=_.maxZ+.16:!1))continue;const m=Math.atan2(h,u),p=new le(new ve(.03,r,d),t.glassRail);p.position.set(f,r/2,g),p.rotation.y=m,e.add(p);const x=new le(new ve(.04,.03,d),t.metal);x.position.set(f,r,g),x.rotation.y=m,e.add(x);const v=Math.max(2,Math.floor(d/1.4)+1);for(let _=0;_<v;_++){const S=v===1?.5:_/(v-1),E=c[0]+h*S,w=c[1]+u*S,A=new le(new ve(.04,r,.04),t.metal);A.position.set(E,r/2,w),e.add(A)}n.push({minX:Math.min(c[0],l[0])-.06,maxX:Math.max(c[0],l[0])+.06,minZ:Math.min(c[1],l[1])-.06,maxZ:Math.max(c[1],l[1])+.06})}}function gw(s,e,t,n){const i=s.rooms,r=i.find(b=>b.type==="kitchen")??i.find(b=>/kitchen/i.test(b.name))??(s.id==="penthouse"?i.find(b=>b.id==="lounge"):void 0),o=i.filter(b=>b.type==="bathroom"),a=o.find(b=>/master|ensuite|en-suite|en suite/i.test(`${b.name} ${b.id}`))??o[0],c=i.find(b=>b.type==="terrace")??i.find(b=>b.type==="balcony"),l=[];if(r){let b;s.id==="penthouse"?b="The first-floor plan used for this penthouse has no kitchen; an open kitchen is shown in the family lounge as an approximation.":r.type==="living"&&(b="The 3BHK drawing combines the living room and kitchen in one space. The kitchen finish applies to the open-kitchen run."),l.push({kind:"kitchen",room:r,title:r.type==="living"?"Kitchen (open to living)":"Kitchen",note:b})}if(a&&l.push({kind:"bath",room:a,title:a.name.replace(/\s+area$/,"")||"Bathroom"}),c){const b=c.type==="terrace";l.push({kind:"view",room:c,title:b?"Terrace view":"Balcony view"})}const h=new it({color:"#c4a265",emissive:"#c4a265",emissiveIntensity:.45,metalness:.55,roughness:.28}),u=[],d=s.bounds;let f=(d.min[0]+d.max[0])/2,g=(d.min[1]+d.max[1])/2;if(e){const b=wn(d.min[0],d.min[1],e),m=wn(d.max[0],d.max[1],e);f=(b[0]+m[0])/2,g=(b[1]+m[1])/2}for(const b of l){const m=Pn(b.room.polygon,e),p=gi(m),x=t?.5:1.2;let v,_;if(b.kind==="view"){const k=p.cx-f,N=p.cz-g,I=Math.hypot(k,N)||1,O=k/I,U=N/I;v=new D(p.cx-O*.2,1.55,p.cz-U*.2),_=new D(p.cx+O*5,1.35,p.cz+U*5),t&&(v=new D(p.cx-O*2.4,3.2,p.cz-U*2.4),_=new D(p.cx+O*1.5,.8,p.cz+U*1.5))}else if(t)v=new D(p.cx,3.6,p.cz+Math.max(p.d,2)*.65),_=new D(p.cx,.45,p.cz);else{const k=Math.min(Math.max(Math.min(p.w,p.d)*.42,1.35),2.8),N=p.w>=p.d;v=new D(p.cx+(N?k:Math.min(p.w,1.1)*.25),1.55,p.cz+(N?Math.min(p.d,1.1)*.25:k)),_=new D(p.cx,x,p.cz)}const S=new Et,E=new le(new rn(.028,.028,.55,10),h);E.position.y=.28;const w=new le(new mi(.12,16,16),h);w.position.y=.62;const A=new le(new mi(.38,10,10),new Ct({visible:!1}));A.position.y=.5,S.add(E,w,A),S.position.set(p.cx,.02,p.cz),S.name="hotspot",n.add(S);const M=document.createElement("button");M.type="button",M.className="hotspot-lab",M.textContent=b.title;const y=new Ws(M);y.position.set(0,.95,0),S.add(y);const R={id:`${b.kind}-${b.room.id}`,kind:b.kind,title:b.title,roomName:b.room.name,area_m2:b.room.area_m2,note:b.note,position:new D(p.cx,1.2,p.cz),cameraPos:v,lookAt:_,mesh:S,labelEl:M};S.userData.hotspot=R,u.push(R)}return u}function bw(s,e){const n=s.rooms.filter(c=>c.type!=="terrace"&&c.type!=="balcony").map(c=>gi(Pn(c.polygon,e))),i=s.rooms.flatMap(c=>Pn(c.polygon,e)),r=gi(i.length?i:[[0,0],[1,1]]),o=new D;let a=0;for(const c of s.windows){const l=e?wr(c,e):c,h=l.x+l.w/2,u=l.z+l.d/2;let d=n[0],f=1/0;for(const p of n){const x=(p.cx-h)**2+(p.cz-u)**2;x<f&&(f=x,d=p)}if(!d)continue;const g=d.cx-h,b=d.cz-u,m=Math.hypot(g,b)||1;o.x+=g/m,o.z+=b/m,a+=1}return a?o.multiplyScalar(1/a):o.set(.55,0,.45),o.y=0,o.normalize(),{center:new D(r.cx,1.45,r.cz),incoming:o,radius:Math.max(r.w,r.d)*.62+3}}const oc=new Map;function yf(s,e){return`${s}-${e}`}const vw={"2bhk-modern":"#f4f1ea"};function xw(s,e){return s?s.trim().toLowerCase()===e.trim().toLowerCase():!0}function _w(s,e,t){const n=vw[yf(s,e)];return n?xw(t,n):!1}function yw(s,e,t,n=0){const i=yf(s,e);return oc.has(i)||oc.set(i,Mw(s,e)),oc.get(i).then(r=>{if(!r)return null;const o=r.group.clone(!0);Ew(o,t,n);const a=[],c=[];o.traverse(h=>{const u=h;if(!u.isMesh)return;const d=Array.isArray(u.material)?u.material:[u.material];for(const f of d){const g=f;g.userData?.lsWall&&a.push(g),g.userData?.lsRid&&c.push({mat:g,rid:g.userData.lsRid})}});const l=!!r.manifest.combinedColor;return{group:o,manifest:r.manifest,setWallColor:h=>{if(!l)for(const u of a)u.color.set(h)},setTime:h=>{const u=d=>{if(!(!d||d.size===0))for(const f of c){const g=d.get(f.rid);g&&(f.mat.map=g,f.mat.needsUpdate=!0)}};if(h){if(r.nightMaps.size>0){u(r.nightMaps);return}return r.ensureNight().then(u)}u(r.dayMaps)},dispose:()=>{}}})}async function id(s,e,t){const n=new Map;if(!e)return n;const i=new ia;return await Promise.all(Object.entries(e).map(async([r,o])=>{const a=await i.loadAsync(`${s}${o.file}`);a.colorSpace=t?vt:Ft,a.channel=2,a.flipY=!1,a.minFilter=Un,a.magFilter=kt,a.generateMipmaps=!0,a.needsUpdate=!0,n.set(r,a)})),n}async function Mw(s,e){const t="./baked/",n=`${s}-${e}`;let i;try{const w=await fetch(`${t}${n}-manifest.json`);if(!w.ok)return null;i=await w.json()}catch{return null}if(!i.glb)return null;const r=new zl;r.setMeshoptDecoder(pf);const a=(await r.loadAsync(`${t}${i.glb}`)).scene;a.name=`baked-${n}`;const c=i.zFlip!==!1;a.updateMatrixWorld(!0);const l=!!i.combinedColor,h=i.toneMapped??!l,u=await id(t,i.lightmaps,l),d=new Map;let f=null;const g=()=>d.size>0?Promise.resolve(d):(f||(f=id(t,i.nightLightmaps,l).then(w=>{for(const[A,M]of w)d.set(A,M);return d})),f);let b=null,m=null;try{const w=new ia;l||(b=await w.loadAsync("./textures/oakplank_diff.jpg"),b.colorSpace=vt,b.wrapS=b.wrapT=jt,b.repeat.set(2,2),b.anisotropy=8),m=await w.loadAsync("./textures/oakplank_rough.jpg"),m.colorSpace=Ft,m.wrapS=m.wrapT=jt,m.repeat.set(3,3),m.anisotropy=8}catch{}const p=i.lightMapIntensity??(l?1:1.15),x=i.rooms??[],v=new Set(["living","bedroom1","bedroom2"]),_=[],S=[];a.traverse(w=>{const A=w;if(!A.isMesh)return;const M=A.geometry;M.getAttribute("uv1")&&!M.getAttribute("uv2")&&M.setAttribute("uv2",M.getAttribute("uv1"));const y=Tw(A,x,c),R=Mf(A),k=y?u.get(y):void 0,N=/^floor-/.test(A.name)||/^OakFloor$/i.test(A.material.name??"");/^ceil-/.test(A.name);const I=Array.isArray(A.material)?A.material:[A.material],O=I.some(q=>/^wall/i.test(q.name))||/^wall-/i.test(A.name),U=/^glass-/i.test(A.name)||I.some(q=>/^glass/i.test(q.name)),z=[];for(const q of I){if(U){const W=new Tt({name:q.name,color:9086128,transparent:!0,opacity:.18,roughness:.05,metalness:.08,transmission:.7,thickness:.02,envMapIntensity:1.1,side:wt,depthWrite:!1});z.push(W);continue}if(R==="furn"){const W=q.clone();W.isMeshStandardMaterial&&(W.lightMap=null,W.side=wt,W.envMapIntensity=.55,W.toneMapped=!0,W.needsUpdate=!0),z.push(W);continue}if(k){const W=q;if(l)if(N){const Z=new Tt({name:W.name,color:16777215,map:k,roughness:.32,roughnessMap:m,metalness:.02,envMapIntensity:.55,clearcoat:.18,clearcoatRoughness:.45,side:wt,toneMapped:!1});k.channel=2,y&&(Z.userData.lsRid=y,S.push({mat:Z,rid:y})),Z.needsUpdate=!0,z.push(Z)}else{const Z=new Ct({name:W.name,color:16777215,map:k,side:wt,toneMapped:h});k.channel=2,O&&(Z.userData.lsWall=!0,_.push(Z)),y&&(Z.userData.lsRid=y,S.push({mat:Z,rid:y})),Z.needsUpdate=!0,z.push(Z)}else{const Z=new Ct({name:W.name,color:W.color?W.color.clone():new Le(16777215),map:W.map??null,lightMap:k,lightMapIntensity:p,side:wt,toneMapped:!0});N&&v.has(y??"")&&b&&(Z.map=b,Z.color.set(16777215)),O&&(Z.userData.lsWall=!0,_.push(Z)),Z.needsUpdate=!0,z.push(Z)}}else{const W=q.clone();W.isMeshStandardMaterial&&(W.lightMap=null,W.side=wt,W.envMapIntensity=.55,W.needsUpdate=!0),z.push(W)}}A.material=z.length===1?z[0]:z;const H=R==="furn"||U;A.castShadow=H,A.receiveShadow=H||N,A.frustumCulled=!1});const E=w=>{const A=w?d:u;if(!(!A||A.size===0))for(const M of S){const y=A.get(M.rid);y&&(M.mat.map=y,M.mat.needsUpdate=!0)}};return{group:a,manifest:i,dayMaps:u,nightMaps:d,ensureNight:g,setWallColor:w=>{if(!l)for(const A of _)A.color.set(w)},setTime:w=>{if(w&&d.size===0)return g().then(()=>E(!0));E(w)},dispose:()=>{}}}function Mf(s){const e=s.userData??{},n=(e.extras??e).ls_shell??e.ls_shell;if(typeof n=="string")return n;const i=s.name||"",r=/^(floor|ceil|wall|furn|glass|frame|shell|curtain|rail|cabinet|rod|krun|splash|counter|hob)-/.exec(i);return r?r[1]:null}function ww(s,e,t){let n=!1;for(let i=0,r=s.length-1;i<s.length;r=i++){const[o,a]=s[i],[c,l]=s[r];a>t!=l>t&&e<(c-o)*(t-a)/(l-a+1e-12)+o&&(n=!n)}return n}function Sw(s){const t=new mn().setFromObject(s).getCenter(new D);return[t.x,t.z]}function Tw(s,e,t=!1){const n=s.name||"",i=/^(?:floor|ceil|wall|furn|glass|frame|shell|curtain|rail|cabinet|rod|krun)-([A-Za-z0-9_]+)/.exec(n);if(i&&e.some(d=>d.id===i[1]))return i[1];const r=s.userData??{},o=r.extras??r;if(typeof r.ls_room=="string")return r.ls_room;if(typeof o.ls_room=="string")return o.ls_room;if(!e.length)return null;const[a,c]=Sw(s),l=t?-c:c;for(const d of e)if(ww(d.polygon,a,l))return d.id;let h=null,u=1e9;for(const d of e){const f=d.polygon.reduce((m,p)=>m+p[0],0)/d.polygon.length,g=d.polygon.reduce((m,p)=>m+p[1],0)/d.polygon.length,b=(f-a)**2+(g-l)**2;b<u&&(u=b,h=d.id)}return h}function Ew(s,e,t,n=!0){const i=new Et;for(i.name="baked-content",n&&(i.scale.z=-1);s.children.length;)i.add(s.children[0]);const r=new Et;if(r.name="baked-inner",e.mirrorX||e.mirrorZ){const o=new Et;o.name="baked-mirror",o.scale.x=e.mirrorX?-1:1,o.scale.z=e.mirrorZ?-1:1,r.position.set(-e.width/2,0,-e.depth/2),o.add(r),r.add(i),s.add(o)}else r.position.set(-e.width/2,0,-e.depth/2),r.add(i),s.add(r);s.scale.set(1,1,1),s.rotation.y=e.rotY*Math.PI/180,s.position.set(e.ox+e.width/2,t,e.oz+e.depth/2)}const Aw=/^(furniture|skirting|door-frame|door-lintel|door-threshold|switch-plate|switch-rocker|cove-soffit|cove-lip|downlight|downlight-centre|contact-ao|curtain|unit-outline)$/i;function Rw(s){s.traverse(e=>{const t=e;if(!t.isMesh||t.userData.hotspot)return;let n=e,i=!1,r=!1,o=!1;for(;n;)n.name==="furniture"&&(i=!0),n.userData?.bakeHide&&(r=!0),Aw.test(n.name||"")&&(o=!0),n=n.parent;(i||o)&&!r||(t.visible=!1)})}function Cw(s){s.traverse(e=>{const t=e;if(!t.isMesh)return;const n=t.userData?.ls_shell||Mf(t);(n==="furn"||n==="curtain")&&(t.visible=!1)})}const ac=1.55,sd=.3,rd=3.4,Pw=5.4;class Dw{position=new D;yaw=0;pitch=0;enabled=!1;locked=!1;tv=!1;keys=new Set;joy={x:0,y:0};collisions=[];rooms=[];minY=ac;walkTarget=null;canvas;onLockChange;skipLockOnce=!1;constructor(e){this.canvas=e,window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKeyUp),e.addEventListener("click",this.requestLock),document.addEventListener("pointerlockchange",this.lockChange),e.addEventListener("mousemove",this.onMouse)}setCollisions(e,t){this.collisions=e,this.rooms=t??[]}spawn(e,t,n,i,r=-.18,o=!1){const a=o?{x:e,z:n}:this.nearestClear(e,n);this.position.set(a.x,t||ac,a.z),this.minY=t||ac,this.yaw=i,this.pitch=r,this.walkTarget=null}nearestClear(e,t){if(this.isWalkable(e,t))return{x:e,z:t};const n=[.3,.55,.85,1.2,1.7,2.3,3];for(const i of n)for(let r=0;r<16;r++){const o=r/16*Math.PI*2,a=e+Math.cos(o)*i,c=t+Math.sin(o)*i;if(this.isWalkable(a,c))return{x:a,z:c}}return{x:e,z:t}}isWalkable(e,t){return!(Ns(this.collisions,e,t,sd)||this.rooms.length&&!hl(this.rooms,e,t,.35))}walkTo(e,t){const n=this.nearestClear(e,t);return this.isWalkable(n.x,n.z)?(this.walkTarget=new D(n.x,this.minY,n.z),!0):!1}cancelWalkTo(){this.walkTarget=null}getWalkTarget(){return this.walkTarget}requestLock=()=>{if(this.skipLockOnce){this.skipLockOnce=!1;return}!this.enabled||this.tv||document.pointerLockElement!==this.canvas&&this.canvas.requestPointerLock().catch(()=>{})};lockChange=()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange?.(this.locked)};setOnLock(e){this.onLockChange=e}onKey=e=>{this.keys.add(e.code),this.enabled&&["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&(e.preventDefault(),this.walkTarget=null)};onKeyUp=e=>{this.keys.delete(e.code)};onMouse=e=>{!this.enabled||!this.locked||(this.yaw-=e.movementX*.0022,this.pitch-=e.movementY*.0022,this.pitch=Math.max(-1.15,Math.min(1.15,this.pitch)))};look(e,t){this.enabled&&(this.yaw-=e*.005,this.pitch-=t*.005,this.pitch=Math.max(-1.15,Math.min(1.15,this.pitch)))}update(e){if(!this.enabled)return;if(this.walkTarget){const h=this.walkTarget.x-this.position.x,u=this.walkTarget.z-this.position.z,d=Math.hypot(h,u);if(d<.1)this.walkTarget=null;else{const f=rd*1.15*e,g=h/d,b=u/d;let p=Math.atan2(-g,-b)-this.yaw;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;this.yaw+=p*Math.min(1,6*e);const x=Math.min(f,d);this.tryMove(g*x,0),this.tryMove(0,b*x),this.position.y=this.minY}return}let t=0,n=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),this.keys.has("KeyA")&&(n-=1),this.keys.has("KeyD")&&(n+=1),this.tv||(this.keys.has("ArrowLeft")&&(n-=1),this.keys.has("ArrowRight")&&(n+=1)),t+=-this.joy.y,n+=this.joy.x;const i=Math.hypot(t,n);i>1&&(t/=i,n/=i);const r=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?Pw:rd,o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=(-t*o+n*a)*r*e,l=(-t*a-n*o)*r*e;this.tryMove(c,0),this.tryMove(0,l),this.position.y=this.minY}tryMove(e,t){const n=this.position.x+e,i=this.position.z+t;Ns(this.collisions,n,i,sd)||this.rooms.length&&!hl(this.rooms,n,i,.35)||(this.position.x=n,this.position.z=i)}apply(e){e.position.copy(this.position),e.rotation.set(this.pitch,this.yaw,0,"YXZ")}dispose(){window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKeyUp),this.canvas.removeEventListener("click",this.requestLock),document.removeEventListener("pointerlockchange",this.lockChange),this.canvas.removeEventListener("mousemove",this.onMouse),document.pointerLockElement===this.canvas&&document.exitPointerLock()}}function Lw(s,e,t){const n=s;let i=null;const r=(a,c,l,h)=>{const u=Math.max(36,n.getBoundingClientRect().width*.375);let d=l-a,f=h-c;const g=Math.hypot(d,f)||1;g>u&&(d=d/g*u,f=f/g*u),e.style.transform=`translate(${d}px, ${f}px)`,t.joy.x=d/u,t.joy.y=f/u,t.cancelWalkTo()},o=()=>{e.style.transform="",t.joy.x=0,t.joy.y=0,i=null};n.addEventListener("pointerdown",a=>{a.stopPropagation(),i=a.pointerId,n.setPointerCapture(a.pointerId);const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,a.clientX,a.clientY)}),n.addEventListener("pointermove",a=>{if(i!==a.pointerId)return;a.stopPropagation();const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,a.clientX,a.clientY)}),n.addEventListener("pointerup",a=>{a.stopPropagation(),o()}),n.addEventListener("pointercancel",o)}class Iw{root;prefs;view={kind:"tower",hoverFloor:null};tv;plans;handlers;time="morning";spec=null;rooms=[];currentRoom=null;tour=null;sheetOpen=!1;revealRoomCard=!1;formOpen=!1;currentUnit="";menuOpen=!1;constructor(e,t,n,i,r){this.root=e,this.prefs={...t},this.plans=n,this.tv=i,this.handlers=r,i&&document.body.classList.add("tv"),this.watchViewport()}watchViewport(){const e=()=>{const t=window.innerWidth<900||window.innerHeight<520;document.body.classList.toggle("compact",t),document.body.classList.toggle("landscape-short",window.innerHeight<520&&window.innerWidth>window.innerHeight),this.syncLayoutVars()};e(),window.addEventListener("resize",e)}setView(e){this.view.kind==="flat"&&(e.kind!=="flat"||e.kind==="flat"&&e.unitId!==this.view.unitId)&&(this.sheetOpen=!1,this.tour=null,this.currentRoom=null,this.rooms=[],e.kind!=="flat"&&(this.spec=null)),this.menuOpen=!1,this.view=e,document.body.classList.toggle("walking",e.kind==="flat"&&e.cam==="walk"),document.body.classList.toggle("in-flat",e.kind==="flat"),document.body.classList.toggle("sheet-open",this.sheetOpen&&e.kind==="flat"),this.render()}setHoverFloor(e){this.view.kind==="tower"&&(this.view={...this.view,hoverFloor:e},this.root.querySelectorAll(".chip-row [data-floor]").forEach(t=>{t.classList.toggle("hov",Number(t.dataset.floor)===e)}))}setTime(e){this.time=e,this.render()}setRooms(e,t){this.rooms=e,t!==void 0&&(this.currentRoom=t),this.render()}setCurrentRoom(e,t=!0){this.currentRoom=e,this.revealRoomCard=!!e&&t,this.render()}setTour(e){this.tour=e,this.render()}setPrefs(e){this.prefs=e}setSheet(e){this.sheetOpen=e,this.render()}showSpec(e){this.spec=e,this.currentRoom=null,this.revealRoomCard=!1,this.render()}closeSpec(){this.spec=null,this.render(),this.handlers.onCloseSpec?.()}toast(e){let t=this.root.querySelector(".toast");t||(t=document.createElement("div"),t.className="toast",this.root.appendChild(t)),t.textContent=e,t.classList.add("show"),this.syncLayoutVars(),setTimeout(()=>t&&t.classList.remove("show"),3200)}render(){const e=this.view;this.root.innerHTML="",this.root.appendChild(this.topbar()),this.menuOpen&&this.root.appendChild(this.overflowMenu()),e.kind==="tower"?this.root.appendChild(this.floorsDock()):e.kind==="floor"?this.root.appendChild(this.unitsDock()):this.root.appendChild(this.flatSheet()),this.root.appendChild(this.zoomStack());const t=document.createElement("div");t.className="joy-wrap",t.innerHTML='<div class="joy-base" id="joy-base"><div class="joy-knob" id="joy-knob"></div></div>',this.root.appendChild(t);const n=document.createElement("div");n.className="crosshair",n.setAttribute("aria-hidden","true"),this.root.appendChild(n),this.formOpen&&this.root.appendChild(this.form());const i=document.createElement("div");i.className="toast",this.root.appendChild(i),document.body.classList.toggle("sheet-open",this.sheetOpen&&e.kind==="flat"),document.body.classList.toggle("form-open",this.formOpen),this.syncLayoutVars()}syncLayoutVars(){requestAnimationFrame(()=>{const e=this.root.querySelector(".topbar"),t=this.root.querySelector(".dock, .sheet"),n=e?Math.ceil(e.getBoundingClientRect().height):52;let i=0;const r=window.innerHeight<520&&window.innerWidth>window.innerHeight;document.body.classList.toggle("landscape-short",r);const o=window.matchMedia("(min-width: 900px) and (min-height: 560px)").matches,a=r&&this.sheetOpen||o&&this.view.kind==="flat",c=o&&this.view.kind==="tower";if(t&&getComputedStyle(t).display!=="none"&&!a&&!c){i=Math.ceil(t.getBoundingClientRect().height);const h=Math.round(window.innerHeight*.38);r&&i>h&&(i=16)}else(a||c)&&(i=16);const l=document.documentElement;l.style.setProperty("--topbar-h",`${n}px`),l.style.setProperty("--dock-h",`${i}px`)})}topbar(){const e=document.createElement("header");e.className="topbar";const n=this.view.kind==="tower",i=this.hereLabel();return e.innerHTML=`
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
          <div class="crumb-now" title="${en(i)}">${en(i)}</div>
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
    `,e.querySelector(".crumbs-full").appendChild(this.crumbsFull()),e.querySelector(".back").addEventListener("click",()=>this.goBack()),e.querySelector(".menu-btn").addEventListener("click",()=>{this.menuOpen=!this.menuOpen,this.render()}),e.querySelectorAll("[data-action=book], [data-action=book-full]").forEach(o=>o.addEventListener("click",()=>this.openForm())),e}hereLabel(){const e=this.view;if(e.kind==="tower")return"Sample Tower";if(e.kind==="floor")return $a(e.floor);const t=this.planForUnit(e.unitId);return`${e.unitId} ${t?.name??""}`.trim()}crumbsFull(){const e=document.createElement("div");e.className="crumbs-inner";const t=this.view,n=(r,o,a=!1)=>{if(a){const c=document.createElement("span");c.className="crumb-here",c.textContent=r,e.appendChild(c)}else{const c=document.createElement("button");c.type="button",c.textContent=r,c.addEventListener("click",o),e.appendChild(c)}},i=()=>{const r=document.createElement("span");r.className="crumb-sep",r.textContent="›",e.appendChild(r)};if(n("Tower",()=>this.handlers.onGotoTower(),t.kind==="tower"),(t.kind==="floor"||t.kind==="flat")&&(i(),n($a(t.floor),()=>this.handlers.onGotoFloor(t.floor),t.kind==="floor")),t.kind==="flat"){i();const r=this.planForUnit(t.unitId);n(`${t.unitId} ${r?.name??""}`.trim(),()=>{},!0)}return e}goBack(){const e=this.view;if(this.formOpen){this.closeForm();return}if(this.menuOpen){this.menuOpen=!1,this.render();return}if(this.tour?.active){this.handlers.onTour?.("stop");return}if(this.sheetOpen){this.sheetOpen=!1,this.spec=null,this.currentRoom=null,this.render(),this.handlers.onCloseSpec?.();return}if(this.spec||this.currentRoom){this.spec=null,this.currentRoom=null,this.render(),this.handlers.onCloseSpec?.();return}if(e.kind==="flat"&&e.cam==="walk"){this.handlers.onCam("dollhouse");return}if(e.kind==="flat"){this.handlers.onGotoFloor(e.floor);return}e.kind==="floor"&&this.handlers.onGotoTower()}overflowMenu(){const e=document.createElement("div");e.className="menu-pop",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Time of day");const t=document.createElement("div");t.className="menu-k",t.textContent="Time of day",e.appendChild(t);const n=[{id:"morning",label:"Morning"},{id:"golden",label:"Golden hour"},{id:"night",label:"Night"}];for(const r of n){const o=document.createElement("button");o.type="button",o.dataset.time=r.id,o.dataset.tv=`time-${r.id}`,o.className=this.time===r.id?"on":"",o.setAttribute("aria-pressed",String(this.time===r.id)),o.textContent=r.label,o.addEventListener("click",()=>{this.menuOpen=!1,this.handlers.onTime(r.id)}),e.appendChild(o)}if(this.tv){const r=document.createElement("div");r.className="tv-badge",r.textContent="TV / kiosk mode",e.appendChild(r)}const i=document.createElement("p");return i.className="menu-hint",i.innerHTML=this.hintText(),e.appendChild(i),e}floorsDock(){const e=document.createElement("div");e.className="dock floors-dock";const t=document.createElement("div");t.className="chip-row",t.setAttribute("role","listbox"),t.setAttribute("aria-label","Floors");const n=this.view.kind==="tower"?this.view.hoverFloor:null;for(let i=1;i<=Bl+1;i++){const r=document.createElement("button");r.type="button",r.dataset.floor=String(i),r.dataset.tv=`floor-${i}`,r.setAttribute("role","option"),i===qi?(r.innerHTML='<span class="ph">PH</span>',r.title="Penthouse"):(r.innerHTML=`<span class="chip-lg">${i}</span>`,r.title=`Floor ${i}`),n===i&&r.classList.add("hov"),r.addEventListener("mouseenter",()=>this.setHoverFloor(i)),r.addEventListener("click",()=>this.handlers.onGotoFloor(i)),t.appendChild(r)}return e.appendChild(t),e.appendChild(this.dockHint(this.hintText())),e.appendChild(this.disclaimerEl()),e}unitsDock(){const e=document.createElement("div");e.className="dock units-dock";const t=this.view;if(t.kind!=="floor")return e;const n=document.createElement("div");n.className="chip-row unit-row",n.setAttribute("role","listbox"),n.setAttribute("aria-label","Flats on this floor");const i=zo(t.floor);for(const r of i){const o=Mr(t.floor,r.suffix),a=this.plans[r.planId],c=document.createElement("button");c.type="button",c.className="unit-chip",c.dataset.unit=o,c.dataset.tv=`unit-${o}`,t.hoverUnit===o&&c.classList.add("hov"),c.innerHTML=`<span class="chip-lg">${o}</span>
        <span class="chip-sub">${r.typeLabel}<br>${ff(a)}</span>`,c.addEventListener("click",()=>this.handlers.onGotoUnit(t.floor,o)),n.appendChild(c)}return e.appendChild(n),e.appendChild(this.dockHint(this.hintText())),e.appendChild(this.disclaimerEl()),e}roomDock(){const e=document.createElement("div");e.className="room-dock";const t=document.createElement("div");t.className="chip-row room-row",t.setAttribute("role","listbox"),t.setAttribute("aria-label","Rooms");const n=document.createElement("button");n.type="button",n.className="room-chip tour-btn"+(this.tour?.active?" on":""),n.dataset.tv="tour",n.dataset.action="tour",n.textContent=this.tour?.active?"End tour":"Tour",n.addEventListener("click",()=>{this.handlers.onTour?.(this.tour?.active?"stop":"start")}),t.appendChild(n);for(const i of this.rooms){const r=document.createElement("button");r.type="button",r.className="room-chip"+(this.currentRoom===i.id?" on":""),r.dataset.room=i.id,r.dataset.tv=`room-${i.id}`,r.textContent=i.short,r.title=i.name,r.addEventListener("click",()=>this.handlers.onRoom?.(i.id)),t.appendChild(r)}return e.appendChild(t),e}tourCard(e){const t=document.createElement("aside");t.className="tour-card";const n=this.rooms.length,i=this.tour?.index??0,r=this.tour?.playing??!1,o=Math.round(e.area_m2*10.7639),a=$u(e,this.prefs).map(c=>`<p class="spec-fin"><span>${en(c.label)}</span><b>${en(c.value)}</b></p>`).join("");return t.innerHTML=`
      <div class="tour-k">Guided tour · ${i+1} of ${n}</div>
      <h2>${en(e.name)}</h2>
      <p class="spec-area">${e.area_m2.toFixed(1)} m² · ${o.toLocaleString("en-IN")} sq ft</p>
      ${a}
      ${e.note?`<p class="spec-note">${en(e.note)}</p>`:""}
      <div class="tour-nav">
        <button type="button" data-act="prev" data-tv="tour-prev" ${i<=0?"disabled":""}>Back</button>
        <button type="button" data-act="toggle" data-tv="tour-play">${r?"Pause":"Play"}</button>
        <button type="button" class="cta" data-act="next" data-tv="tour-next">${i>=n-1?"Done":"Next"}</button>
      </div>
    `,t.querySelector("[data-act=prev]").addEventListener("click",()=>this.handlers.onTour?.("prev")),t.querySelector("[data-act=toggle]").addEventListener("click",()=>this.handlers.onTour?.("toggle")),t.querySelector("[data-act=next]").addEventListener("click",()=>this.handlers.onTour?.("next")),t}roomCard(e,t){const n=document.createElement("aside");n.className="tour-card room-info";const i=Math.round(e.area_m2*10.7639),r=$u(e,this.prefs).map(o=>`<p class="spec-fin"><span>${en(o.label)}</span><b>${en(o.value)}</b></p>`).join("");return n.innerHTML=`
      ${t?'<button type="button" class="spec-close" aria-label="Close" data-tv="spec-close">×</button>':""}
      <div class="tour-k">${en(e.short)}</div>
      <h2>${en(e.name)}</h2>
      <p class="spec-area">${e.area_m2.toFixed(1)} m² · ${i.toLocaleString("en-IN")} sq ft</p>
      ${r}
      ${e.note?`<p class="spec-note">${en(e.note)}</p>`:""}
    `,n.querySelector(".spec-close")?.addEventListener("click",()=>{this.revealRoomCard=!1,this.render()}),n}specCard(e){const t=document.createElement("aside");t.className="tour-card room-info";const n=Math.round(e.area_m2*10.7639);return t.innerHTML=`
      <button type="button" class="spec-close" aria-label="Close" data-tv="spec-close">×</button>
      <div class="tour-k">${e.kind==="kitchen"?"Kitchen":e.kind==="bath"?"Bathroom":"Outlook"}</div>
      <h2>${en(e.title)}</h2>
      <p class="spec-area">${e.area_m2.toFixed(1)} m² · ${n.toLocaleString("en-IN")} sq ft · as labelled on the drawing</p>
      ${this.specFinish(e)}
      ${e.note?`<p class="spec-note">${en(e.note)}</p>`:""}
    `,t.querySelector(".spec-close").addEventListener("click",()=>this.closeSpec()),t}specFinish(e){const t={white:"White",walnut:"Walnut",black:"Matte black",granite:"Granite"},n={marble:"Marble",wood:"Wood",tile:"Tile"};return e.kind==="kitchen"?`<p class="spec-fin"><span>Cabinets &amp; counter</span><b>${t[this.prefs.kitchen]}</b></p>`:e.kind==="bath"?`<p class="spec-fin"><span>Floor</span><b>${n[this.prefs.flooring]}</b></p>`:`<p class="spec-fin"><span>From the plan</span><b>${en(e.roomName)}</b></p>`}flatSheet(){const e=document.createElement("aside");e.className="sheet"+(this.sheetOpen?" open":""),e.setAttribute("aria-label","Your preferences");const t=document.createElement("button");t.type="button",t.className="sheet-handle",t.setAttribute("aria-label",this.sheetOpen?"Collapse preferences":"Expand preferences"),t.addEventListener("click",()=>this.toggleSheet()),e.appendChild(t);const n=document.createElement("div");n.className="sheet-peek";const i=document.createElement("div");i.className="seg cam-seg";const r=this.view.kind==="flat"&&this.view.cam==="walk";i.innerHTML=`
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
    `,e.querySelectorAll("[data-style]").forEach(n=>n.addEventListener("click",()=>{const i=n.dataset.style,r=Is[i];this.prefs={...this.prefs,style:i,flooring:r.flooring,wallColor:r.wall,kitchen:r.kitchen},this.handlers.onPrefs(this.prefs),this.render()})),e.querySelectorAll("[data-flooring]").forEach(n=>n.addEventListener("click",()=>{this.prefs={...this.prefs,flooring:n.dataset.flooring},this.handlers.onPrefs(this.prefs),this.render()})),e.querySelectorAll("[data-kitchen]").forEach(n=>n.addEventListener("click",()=>{this.prefs={...this.prefs,kitchen:n.dataset.kitchen},this.handlers.onPrefs(this.prefs),this.render()}));const t=e.querySelector(".swatches");for(const n of O_){const i=document.createElement("button");i.className="swatch"+(this.prefs.wallColor.toLowerCase()===n.color.toLowerCase()?" on":""),i.style.background=n.color,i.title=n.name,i.type="button",i.dataset.tv=`wall-${n.id}`,i.addEventListener("click",()=>{this.prefs={...this.prefs,wallColor:n.color},this.handlers.onPrefs(this.prefs),this.render()}),t.appendChild(i)}return e.querySelector("#fur").addEventListener("change",n=>{this.prefs={...this.prefs,furniture:n.target.checked},this.handlers.onPrefs(this.prefs)}),e}segBtn(e,t,n){const i=e==="style"&&this.prefs.style===t||e==="flooring"&&this.prefs.flooring===t||e==="kitchen"&&this.prefs.kitchen===t;return`<button type="button" data-${e}="${t}" data-tv="${e}-${t}" class="${i?"on":""}" aria-pressed="${i}">${n}</button>`}zoomStack(){const e=document.createElement("div");return e.className="zoom-stack",e.innerHTML=`
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
    `,e.querySelector("[data-z=in]").addEventListener("click",()=>this.handlers.onZoom?.(-1)),e.querySelector("[data-z=out]").addEventListener("click",()=>this.handlers.onZoom?.(1)),this.view.kind==="flat"&&this.view.cam==="walk"&&(e.hidden=!0),e}hintText(){return this.tv?this.view.kind==="tower"?"<b>TV remote</b> · ↑ ↓ a floor · <kbd>Enter</kbd> open · <kbd>Esc</kbd> back":this.view.kind==="floor"?"<b>TV remote</b> · ← → a flat · <kbd>Enter</kbd> open · <kbd>Esc</kbd> back":this.view.kind==="flat"&&this.view.cam==="walk"?"<b>TV remote</b> · ↑ walk · ↓ back · ← → rooms · <kbd>Enter</kbd> dollhouse · <kbd>Esc</kbd> back":"<b>TV remote</b> · ← → rooms · <kbd>Enter</kbd> walk through · <kbd>Esc</kbd> back":this.view.kind==="tower"?"Drag to orbit. Tap a floor to go in.":this.view.kind==="floor"?"Tap a flat to open it. Drag to orbit.":this.view.kind==="flat"&&this.view.cam==="walk"?"Tap a room to fly there. Use the joystick to walk, drag to look.":"Drag to orbit. Tap a room to walk in, or Guided tour to play through each one."}dockHint(e){const t=document.createElement("p");return t.className="dock-hint",t.innerHTML=e,t}disclaimerEl(){const e=document.createElement("p");return e.className="disclaimer",e.textContent="Illustrative visualisation, not the finished unit. Sample tower for Lead Setu — not a real project.",e}planForUnit(e){return e.endsWith("PH")?this.plans.penthouse:e.endsWith("C")?this.plans["3bhk"]:this.plans["2bhk"]}openForm(){this.currentUnit=this.unitOfInterest(),this.formOpen=!0,this.menuOpen=!1,this.render(),this.root.querySelector("#lead-name")?.focus()}closeForm(){this.formOpen=!1,this.render()}unitOfInterest(){const e=this.view;if(e.kind==="flat"){const t=this.planForUnit(e.unitId);return`${e.unitId} ${t?.name??""}`.trim()}return e.kind==="floor"?$a(e.floor):"Sample Tower (floor not chosen)"}form(){const e=document.createElement("div");return e.className="modal-bg",e.innerHTML=`
      <form class="modal" data-tv-root="form">
        <h2>Book a site visit</h2>
        <p>Leave your name and phone. In the product, this creates a lead in Lead Setu. This demo stores it only in your browser.</p>
        <label for="lead-name">Name</label>
        <input id="lead-name" name="name" required autocomplete="name" data-tv="name"/>
        <label for="lead-phone">Phone</label>
        <input id="lead-phone" name="phone" required inputmode="tel" autocomplete="tel" data-tv="phone"/>
        <label for="lead-unit">Unit of interest</label>
        <input id="lead-unit" name="unit" value="${en(this.currentUnit)}" data-tv="unit"/>
        <div class="row">
          <button type="button" class="ghost" data-action="cancel">Cancel</button>
          <button type="submit" class="cta" data-tv="submit">Send request</button>
        </div>
        <p class="hint-api">TODO: POST this payload to the Lead Setu API (name, phone, project, unit, session id) and hand the lead to the existing follow-up pipeline.</p>
      </form>
    `,e.addEventListener("click",t=>{t.target===e&&this.closeForm()}),e.querySelector("[data-action=cancel]").addEventListener("click",()=>this.closeForm()),e.querySelector("form").addEventListener("submit",t=>{t.preventDefault();const n=new FormData(t.target),i=String(n.get("name")||"").trim(),r=String(n.get("phone")||"").trim(),o=String(n.get("unit")||"").trim();!i||!r||(this.closeForm(),this.handlers.onBook({name:i,phone:r,unit:o}))}),e}}function en(s){return s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function od(s){const e="leadsetu-3d-demo-leads",t=JSON.parse(localStorage.getItem(e)||"[]"),n={...s,project:"Lead Setu Sample Tower",at:new Date().toISOString()};return t.push(n),localStorage.setItem(e,JSON.stringify(t)),console.info("[Lead Setu demo] site-visit request (local only)",n),n}const ad=5,cd=10;function kw(s,e,t,n){e.touches.ONE=Vn.ROTATE,e.touches.TWO=Vn.DOLLY_PAN;let i="none";const r=new Map;let o={x:0,y:0,dist:0,midX:0,midY:0},a={x:0,y:0,dist:0,midX:0,midY:0};const c=new nl,l=new D;function h(){l.copy(t.position).sub(e.target),c.setFromVector3(l)}function u(){c.makeSafe(),c.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,c.phi)),c.radius=Math.max(e.minDistance,Math.min(e.maxDistance,c.radius)),l.setFromSpherical(c),t.position.copy(e.target).add(l),t.lookAt(e.target),e.update()}const d=new D;function f(v,_,S){const E=s.getBoundingClientRect(),w=(v-E.left)/Math.max(1,E.width)*2-1,A=-((_-E.top)/Math.max(1,E.height))*2+1;d.set(w,A,1).unproject(t).sub(t.position).normalize();const M=t.position.distanceTo(e.target),y=Math.max(e.minDistance,Math.min(e.maxDistance,M*S)),R=M-y;t.position.addScaledVector(d,R),t.updateMatrixWorld();const k=new D(0,0,-1).transformDirection(t.matrix);e.target.copy(t.position).addScaledVector(k,y),t.lookAt(e.target),e.update()}function g(v){n.isWalk()||f(window.innerWidth/2,window.innerHeight/2,v<0?.82:1.22)}function b(){const v=[...r.values()];if(v.length<2)return{dist:0,midX:0,midY:0};const _=v[1].x-v[0].x,S=v[1].y-v[0].y;return{dist:Math.hypot(_,S),midX:(v[0].x+v[1].x)/2,midY:(v[0].y+v[1].y)/2}}const m=v=>{if(n.isUiTarget(v.target)){r.size===0&&(i="blocked");return}if(v.pointerType!=="mouse"){if(r.set(v.pointerId,{x:v.clientX,y:v.clientY}),r.size===1)i="pending",o={x:v.clientX,y:v.clientY,dist:0,midX:v.clientX,midY:v.clientY},a={...o},e.enabled=!1;else if(r.size===2){const _=b();o={x:_.midX,y:_.midY,dist:_.dist,midX:_.midX,midY:_.midY},a={...o},i="pending",e.enabled=!1}}},p=v=>{if(!r.has(v.pointerId)||i==="blocked")return;if(r.set(v.pointerId,{x:v.clientX,y:v.clientY}),n.isWalk()){if(r.size===1){const w=v.clientX-a.x,A=v.clientY-a.y,M=Math.hypot(v.clientX-o.x,v.clientY-o.y);i==="pending"&&M>ad&&(i="look",n.walker.cancelWalkTo()),i==="look"&&n.walker.look(w,A),a={...a,x:v.clientX,y:v.clientY}}return}if(r.size>=2){const w=b(),A=Math.abs(w.dist-o.dist),M=Math.hypot(w.midX-o.midX,w.midY-o.midY);if(i==="pending"&&(A>cd||M>cd)&&(i=A>=M*.85?"pinch":"pan",h()),i==="pinch"){if(a.dist>1&&w.dist>1){const y=a.dist/w.dist;f(w.midX,w.midY,y)}}else if(i==="pan"){const y=w.midX-a.midX,R=w.midY-a.midY,N=t.position.distanceTo(e.target)*.0022,I=new D,O=new D,U=new D;t.matrix.extractBasis(I,O,U),e.target.addScaledVector(I,-y*N),e.target.addScaledVector(O,R*N),u()}a={x:w.midX,y:w.midY,dist:w.dist,midX:w.midX,midY:w.midY};return}const _=v.clientX-a.x,S=v.clientY-a.y,E=Math.hypot(v.clientX-o.x,v.clientY-o.y);i==="pending"&&E>ad&&(i="orbit",h()),i==="orbit"&&(c.theta-=_*.0055,c.phi-=S*.0055,u()),a={...a,x:v.clientX,y:v.clientY}},x=v=>{if(!(v.pointerType==="mouse"&&i!=="blocked")){if(r.delete(v.pointerId),r.size===0)i="none",n.isWalk()||(e.enabled=!0);else if(r.size===1){const _=[...r.values()][0];o={x:_.x,y:_.y,dist:0,midX:_.x,midY:_.y},a={...o},i="pending"}}};return s.addEventListener("pointerdown",m,{capture:!0}),window.addEventListener("pointermove",p),window.addEventListener("pointerup",x),window.addEventListener("pointercancel",x),{zoom:g,dispose(){s.removeEventListener("pointerdown",m,{capture:!0}),window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x)}}}function ld(s){return s instanceof Element?!!s.closest("#ui, .hotspot-lab, .unit-card, .unit-chip, button, input, a, .sheet, .dock, .topbar, .modal-bg, .menu-pop, .tour-card, .spec-card, .joy-wrap, .zoom-stack"):!1}const Nw={style:"modern",flooring:Is.modern.flooring,wallColor:Is.modern.wall,kitchen:Is.modern.kitchen,furniture:!0},Uw=4200;async function Fw(){const s="./",[e,t,n]=await Promise.all([fetch(`${s}data/2bhk.json`).then(i=>i.json()),fetch(`${s}data/3bhk.json`).then(i=>i.json()),fetch(`${s}data/penthouse.json`).then(i=>i.json())]);return{"2bhk":e,"3bhk":t,penthouse:n}}class Ow{engine;mats;catalog=null;plans;tower;walker;hud;gestures;tv;prefs={...Nw};view={kind:"tower",hoverFloor:null};interiors=[];bakedUnits=[];unitLabels=[];world=new Et;interiorRoot=new Et;ray=new Mu;pointer=new ne;dragging=!1;downXY={x:0,y:0};roomLights=[];time="morning";flying=!1;roomStops=[];currentRoom=null;tour=null;tourTimer=null;introPlayed=!1;walkMarker=null;unitOutlines=new Map;constructor(){const e=new URLSearchParams(location.search);this.tv=e.get("tv")==="1"||e.get("tv")==="true"}async start(){const e=document.getElementById("scene"),t=document.getElementById("labels"),n=document.getElementById("ui");mr(.05),this.engine=R_(e,t),this.mats=await F_(this.engine.renderer,u=>mr(.05+u*.55));const i=Xy(this.engine.renderer,u=>mr(.6+u*.2)),r=D_(this.engine,"./hdris/studio_small_08_1k.hdr"),o=L_(this.engine,"./hdris/kloofendal_43d_clear_puresky_1k.hdr"),a=I_(this.engine,"./hdris/qwantani_sunset_puresky_1k.hdr"),c=k_(this.engine,"./hdris/kloppenheim_02_puresky_1k.hdr");this.plans=await Fw(),this.catalog=await i,await Promise.all([r,o,a,c]),mr(.88),this.engine.scene.add(this.world),this.engine.scene.add(this.interiorRoot),this.tower=Cy(this.mats,{mobile:this.engine.mobile}),this.tower.setEnv(this.engine.cityEnv,this.engine.cityEnvNight),await this.tower.loadTrees(),this.world.add(this.tower.group),this.walkMarker=Vw(),this.engine.scene.add(this.walkMarker),this.walker=new Dw(e),this.walker.tv=this.tv,this.gestures=kw(e,this.engine.orbit,this.engine.camera,{isWalk:()=>this.view.kind==="flat"&&this.view.cam==="walk"&&!this.flying,walker:this.walker,isUiTarget:ld}),this.hud=new Iw(n,this.prefs,this.plans,this.tv,{onGotoTower:()=>this.showTower(),onGotoFloor:u=>this.showFloor(u),onGotoUnit:(u,d)=>this.showFlat(u,d,"dollhouse"),onCam:u=>{this.view.kind==="flat"&&this.showFlat(this.view.floor,this.view.unitId,u)},onPrefs:u=>this.setPrefs(u),onBook:u=>{od(u),this.hud.toast("Request saved on this device. A sales executive would follow up in Lead Setu.")},onTime:u=>{this.setTime(u)},onRoom:u=>{this.stopTour(!1),this.goRoom(u)},onTour:u=>this.handleTour(u),onZoom:u=>this.gestures.zoom(u)}),this.bindPointer(e),this.bindKeys(),n.addEventListener("pointerdown",u=>{u.target?.closest("input, select, textarea, .sheet, .dock, .prefs, .joy-wrap, .zoom-stack, button, a, .unit-card, .hotspot-lab")&&u.stopPropagation()},!0),this.showTower(!1),this.hud.setView(this.view);const l=()=>{const u=document.getElementById("joy-base"),d=document.getElementById("joy-knob");u&&d&&!u.dataset.ready&&(u.dataset.ready="1",Lw(u,d,this.walker))};new MutationObserver(l).observe(n,{childList:!0,subtree:!0}),l(),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch"),Hw(),mr(1),Gw(),this.engine.start(u=>this.tick(u),()=>this.afterRender()),this.exposeApi(),this.introPlayed||(this.introPlayed=!0,this.playTowerIntro())}setTime(e){return this.time=e,this.hud.setTime(e),this.applySceneTime()}async applySceneTime(){P_(this.engine,this.time),this.tower.setTime(this.time);for(const i of this.interiors)i.setTime(this.time);await Promise.all(this.bakedUnits.map(i=>Promise.resolve(i.setTime(this.time==="night"))));const e=this.time==="night",t=this.time==="golden",n=this.view.kind==="flat"&&this.view.cam==="walk";for(const i of this.roomLights)i instanceof el?e?(i.color.set("#3a4c78"),i.groundColor.set("#1a1520"),i.intensity=.4):t?(i.color.set("#ffd9a8"),i.groundColor.set("#8a5a38"),i.intensity=n?.5:.35):(i.color.set("#f4efe6"),i.groundColor.set("#8a7a68"),i.intensity=n?.28:.4):i instanceof Fr&&(i.intensity=e?.18:t?n?.28:.55:n?.2:.75,i.color.set(e?"#a0b4e0":t?"#ffb060":"#fff4df"))}tick(e){this.tower.tick(e),this.updateWalkMarker(),!this.flying&&(this.view.kind==="flat"&&this.view.cam==="walk"?(this.engine.orbit.enabled=!1,this.walker.update(e),this.walker.apply(this.engine.camera)):this.flying||(this.engine.orbit.enabled=!0))}afterRender(){this.syncHotspotLabels()}updateWalkMarker(){const e=this.walkMarker;if(!e)return;const t=this.walker.getWalkTarget(),n=this.view.kind==="flat"&&this.view.cam==="walk"&&!!t;if(e.visible=n,!n||!t)return;e.position.set(t.x,.04,t.z);const i=1+.12*Math.sin(performance.now()/180);e.scale.setScalar(i)}async playTowerIntro(){const[e]=Ka();await ur(this.engine.camera,this.engine.orbit,new D(44,11,-30),new D(e,8,6),2.4)}syncHotspotLabels(){const e=this.interiors;if(!e.length)return;const t=document.body.classList.contains("compact"),n=this.view.kind==="flat"&&this.view.cam==="walk",i=this.engine.camera,r=window.innerWidth,o=window.innerHeight,a=this.chromeRects();for(const c of e)for(const l of c.hotspots){l.mesh&&(l.mesh.visible=!n);const h=l.labelEl;if(!h)continue;if(t||n){h.classList.add("is-hidden");continue}const u=l.position;if(u.clone().applyMatrix4(i.matrixWorldInverse).z>-.15){h.classList.add("is-hidden");continue}const f=u.clone().project(i);if(f.z<-1||f.z>1){h.classList.add("is-hidden");continue}let g=(f.x*.5+.5)*r,b=(-f.y*.5+.5)*o;const m=10;if(g<-30||b<-20||g>r+30||b>o+20){h.classList.add("is-hidden");continue}const x=u.clone().sub(i.position),v=x.length();x.multiplyScalar(1/(v||1)),this.ray.set(i.position,x);const _=[];if(c.group.traverse(y=>{y instanceof le&&y.name!=="hotspot"&&!y.name.startsWith("studio")&&_.push(y)}),this.ray.intersectObjects(_,!0).some(y=>y.distance<v-.45&&!zw(y.object))){h.classList.add("is-hidden");continue}const w=h.offsetWidth||80,A=h.offsetHeight||22;g=Math.max(m+w/2,Math.min(r-m-w/2,g)),b=Math.max(m+A/2,Math.min(o-m-A/2,b));const M={x:g-w/2,y:b-A/2,w,h:A};if(a.some(y=>Bw(M,y))){h.classList.add("is-hidden");continue}h.classList.remove("is-hidden")}}chromeRects(){return[...this.hud.root.querySelectorAll(".topbar, .sheet, .room-dock, .dock, .tour-card, .menu-pop, .modal-bg, .zoom-stack, .joy-wrap")].flatMap(t=>{const n=getComputedStyle(t);if(n.display==="none"||n.visibility==="hidden")return[];const i=t.getBoundingClientRect();return i.width<4||i.height<4?[]:[{x:i.x,y:i.y,w:i.width,h:i.height}]})}clearInteriors(){for(const e of this.interiors)e.dispose();this.interiors=[];for(const e of this.bakedUnits)e.dispose();this.bakedUnits=[];for(const e of this.unitLabels)e.element?.remove(),e.removeFromParent();this.unitLabels=[];for(const e of this.roomLights)e.removeFromParent();this.roomLights=[],this.interiorRoot.clear()}setPrefs(e){this.prefs=e,this.hud.setPrefs(e);for(const t of this.interiors)t.applyPrefs(e);if(this.view.kind==="flat"){const{floor:t,unitId:n,cam:i}=this.view,r=this.currentRoom;return this.showFlat(t,n,i,!0).then(()=>{r&&this.hud.setCurrentRoom(r)})}else this.view.kind==="floor"&&this.showFloor(this.view.floor,!0)}async showTower(e=!0){this.stopTour(!0),this.walker.enabled=!1,Co(),document.pointerLockElement&&document.exitPointerLock(),this.clearInteriors(),this.roomStops=[],this.currentRoom=null,this.world.visible=!0,this.tower.setIsolated(null),this.tower.highlight(null),this.hud.spec=null,this.view={kind:"tower",hoverFloor:null},this.engine.setHudLift(0),this.engine.setWalkFov(null),this.engine.aimWalkLighting(null,null,0),this.hud.setView(this.view),await this.applySceneTime(),this.engine.setOutlined([]);const[t]=Ka(),n=new D(44,11,-30),i=new D(t,8,6);e?await ur(this.engine.camera,this.engine.orbit,n,i,.55):(this.engine.camera.position.set(62,5,-52),this.engine.orbit.target.set(t,5,4),this.engine.orbit.update())}async showFloor(e,t=!1){this.stopTour(!0),this.walker.enabled=!1,Co(),document.pointerLockElement&&document.exitPointerLock(),this.clearInteriors(),this.roomStops=[],this.currentRoom=null,this.world.visible=!0,this.tower.setIsolated(e),this.tower.highlight(e),this.hud.spec=null,this.view={kind:"floor",floor:e,hoverUnit:null},this.hud.setView(this.view),this.engine.setHudLift(0),this.engine.setWalkFov(null),this.engine.aimWalkLighting(null,null,0),await this.applySceneTime();const n=Br(e),i=zo(e);for(const a of i){const c=this.plans[a.planId],l=nd(c,this.prefs,this.mats,{transform:a.transform,showCeiling:!1,y:n,cutaway:!0,catalog:this.catalog,mobile:this.engine.mobile});l.group.userData.unitId=Mr(e,a.suffix),l.group.userData.slot=a,this.interiorRoot.add(l.group),this.interiors.push(l);const h=document.createElement("button");h.type="button",h.className="unit-card",h.innerHTML=`<div class="u-id">${Mr(e,a.suffix)}</div>
        <div class="u-meta">${a.typeLabel}<br>${ff(c)}</div>`,h.addEventListener("click",b=>{b.stopPropagation(),this.showFlat(e,Mr(e,a.suffix),"dollhouse")});const u=new Ws(h),d=a.transform,[f,g]=[d.ox+d.width/2,d.oz+d.depth/2];u.position.set(f,n+2.2,g),this.interiorRoot.add(u),this.unitLabels.push(u)}const r=document.createElement("div");r.className="unit-card",r.style.pointerEvents="none",r.innerHTML='<div class="u-meta">Lifts &amp; stairs</div>';const o=new Ws(r);if(o.position.set(ji.x+ji.w/2,n+1.6,ji.z+ji.d/2),this.interiorRoot.add(o),this.unitLabels.push(o),this.installUnitOutlines(n),!t){const[a,c]=Ka();await ur(this.engine.camera,this.engine.orbit,new D(a+2.2,n+18,c+6),new D(a,n+1.2,c),.5)}}installUnitOutlines(e){this.unitOutlines.clear();for(const t of this.interiors){const n=t.group.userData.unitId;if(!n)continue;const i=new mn().setFromObject(t.group),r=i.getSize(new D),o=i.getCenter(new D),a=new Ct({color:"#f0d48a",side:Xt,transparent:!0,opacity:.8,depthWrite:!1}),c=new le(new ve(Math.max(.4,r.x)*1.05,Math.max(.8,r.y)*1.08,Math.max(.4,r.z)*1.05),a);c.position.copy(o),c.name="unit-outline",c.visible=!1,c.userData.unitId=n,t.group.add(c),this.unitOutlines.set(n,c)}}async showFlat(e,t,n,i=!1,r,o={}){document.pointerLockElement&&n!=="walk"&&document.exitPointerLock();const a=this.walker.position.clone(),c=this.walker.yaw,l=this.hud.spec?.id??null,h=this.currentRoom;this.clearInteriors(),this.world.visible=!1,this.tower.setIsolated(null),this.tower.highlight(null),this.view={kind:"flat",floor:e,unitId:t,cam:n},this.hud.setView(this.view);const u=t.replace(/^\d+/,""),d=zo(e),f=d.find(S=>S.suffix===u)??d[0],g=this.plans[f.planId],b=nd(g,this.prefs,this.mats,{transform:f.transform,showCeiling:n==="walk",y:0,cutaway:n==="dollhouse",hotspots:!0,catalog:this.catalog,mobile:this.engine.mobile});if(this.interiorRoot.add(b.group),this.interiors.push(b),this.roomStops=b.rooms,n==="dollhouse"){const S=new le(new Qo(48,48),new it({color:this.time==="night"?"#1a1e28":this.time==="golden"?"#c9a078":"#d8d2c6",roughness:.95,metalness:0}));S.rotation.x=-Math.PI/2,S.position.y=-.04,S.receiveShadow=!0,S.name="studio-ground",this.interiorRoot.add(S)}const m=new el("#f4efe6","#8a7a68",n==="walk"?.28:.4);this.interiorRoot.add(m),this.roomLights.push(m);const p=g.id??"2bhk";if(n==="walk"&&_w(p,this.prefs.style,this.prefs.wallColor))try{const S=await yw(p,this.prefs.style,f.transform,0);S&&(Rw(b.group),Cw(S.group),this.interiorRoot.add(S.group),S.setWallColor(this.prefs.wallColor),await Promise.resolve(S.setTime(this.time==="night")),this.bakedUnits.push(S))}catch(S){console.warn("baked unit failed, falling back to procedural",S)}if(n==="dollhouse"){const S=new Fr("#fff4df",.75);S.position.set(8,12,6),S.castShadow=!this.engine.mobile,this.interiorRoot.add(S),this.roomLights.push(S)}if(await this.applySceneTime(),n==="walk"){const S=b.lighting;this.engine.aimWalkLighting(S.center,S.incoming,S.radius)}else this.engine.aimWalkLighting(null,null,0);for(const S of b.hotspots)S.labelEl?.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),this.openHotspot(S)});if(l){const S=b.hotspots.find(E=>E.id===l);S?this.hud.showSpec(S):this.hud.spec=null}this.hud.setRooms(this.roomStops,h);const x=f.transform,v=x.ox+x.width/2,_=x.oz+x.depth/2;if(n==="walk"){if(this.walker.setCollisions(b.collisions,b.worldRooms),o.skipSpawn)this.walker.enabled=!1;else{let S=r?.x??b.spawn.x,E=r?.z??b.spawn.z,w=r?.yaw??b.spawn.yaw,A=r?.yaw!==void 0?-.18+Wa():(b.spawn.pitch??-.18)+Wa();i&&!r&&a.y>.5&&this.walker.isWalkable(a.x,a.z)&&(S=a.x,E=a.z,w=c,A=this.walker.pitch),this.walker.spawn(S,1.6,E,w,A),this.walker.apply(this.engine.camera),this.walker.enabled=!0}if(this.engine.orbit.enabled=!1,!this.currentRoom&&!o.skipSpawn){const S=this.roomStops.find(E=>E.type==="living")??this.roomStops.find(E=>E.type==="foyer")??this.roomStops[0];S&&(this.currentRoom=S.id,this.hud.setCurrentRoom(S.id,!1))}}else this.walker.enabled=!1,this.engine.orbit.enabled=!0,i||await ur(this.engine.camera,this.engine.orbit,new D(v+8,g.wallHeight+7,_+9),new D(v,1,_),.5);if(this.engine.setHudLift(n==="walk"?.08:0),n==="walk"){const S=this.roomStops.find(E=>E.id===this.currentRoom)??this.roomStops.find(E=>E.type==="living")??this.roomStops[0];this.engine.setWalkFov(S?.fov??70)}else this.engine.setWalkFov(null)}cameraYaw(){const e=new D;return this.engine.camera.getWorldDirection(e),Math.atan2(-e.x,-e.z)}cameraPitch(){return new zn().setFromQuaternion(this.engine.camera.quaternion,"YXZ").x}async goRoom(e){const t=this.roomStops.find(n=>n.id===e);if(!(!t||this.view.kind!=="flat")){if(this.hud.spec=null,this.currentRoom=e,this.walker.skipLockOnce=!0,document.pointerLockElement&&document.exitPointerLock(),this.view.cam!=="walk"){const{floor:n,unitId:i}=this.view;await this.showFlat(n,i,"walk",!0,void 0,{skipSpawn:!0})}await this.flyToStop(t),this.hud.setCurrentRoom(e)}}async flyToStop(e){if(this.view.kind!=="flat")return;this.engine.setWalkFov(e.fov??70),this.engine.setHudLift(.08),Co(),this.flying=!0,this.walker.enabled=!1,this.engine.orbit.enabled=!1;const t=this.engine.camera.position.clone(),n=this.cameraYaw(),i=this.cameraPitch();try{const r=e.pitch+Wa();await C_(this.engine.camera,t,n,i,e.position,e.yaw,r,.5),this.walker.spawn(e.walkX,1.6,e.walkZ,e.yaw,r,!0),this.walker.apply(this.engine.camera),this.walker.enabled=!0}finally{this.flying=!1,this.engine.orbit.enabled=!1}}handleTour(e){e==="start"?this.startTour():e==="stop"?this.stopTour(!1):e==="next"?this.tourStep(1):e==="prev"?this.tourStep(-1):e==="toggle"&&this.toggleTourPlay()}async startTour(){!this.roomStops.length||this.view.kind!=="flat"||(this.tour={active:!0,playing:!0,index:0},this.hud.setTour(this.tour),await this.goRoom(this.roomStops[0].id),this.scheduleTour())}stopTour(e=!1){this.clearTourTimer();const t=this.tour;this.tour=null,t&&!e&&this.hud.setTour(null)}toggleTourPlay(){this.tour&&(this.tour={...this.tour,playing:!this.tour.playing},this.hud.setTour(this.tour),this.tour.playing?this.scheduleTour():this.clearTourTimer())}async tourStep(e){if(!this.roomStops.length)return;this.tour||(this.tour={active:!0,playing:!1,index:0});const t=this.tour.index+e;if(!(t<0)){if(t>=this.roomStops.length){this.stopTour(!1);return}this.tour={...this.tour,index:t},this.hud.setTour(this.tour),await this.goRoom(this.roomStops[t].id),this.tour?.playing&&this.scheduleTour()}}scheduleTour(){this.clearTourTimer(),this.tour?.playing&&(this.tourTimer=window.setTimeout(()=>{this.tourStep(1)},Uw))}clearTourTimer(){this.tourTimer!==null&&(clearTimeout(this.tourTimer),this.tourTimer=null)}async openHotspot(e){this.walker.skipLockOnce=!0,document.pointerLockElement&&document.exitPointerLock(),this.hud.showSpec(e);const t=this.roomStops.find(r=>r.name===e.title||r.id===e.id.replace(/^(kitchen|bath|view)-/,"")||e.kind==="kitchen"&&r.type==="kitchen"||e.kind==="bath"&&r.type==="bathroom"||e.kind==="view"&&(r.type==="balcony"||r.type==="terrace"));if(t){this.stopTour(!1),await this.goRoom(t.id);return}if(this.flying)return;this.flying=!0;const n=e.cameraPos.clone(),i=e.lookAt.clone();try{const r=this.view.kind==="flat"&&this.view.cam==="walk";if(r&&(this.walker.enabled=!1),await ur(this.engine.camera,this.engine.orbit,n,i,.5),r){this.engine.orbit.enabled=!1;const o=Math.atan2(-(i.x-n.x),-(i.z-n.z)),a=this.walker.isWalkable(n.x,n.z);this.walker.spawn(a?n.x:e.position.x,1.6,a?n.z:e.position.z,o),this.walker.apply(this.engine.camera),this.walker.enabled=!0}}finally{this.flying=!1}}bindPointer(e){const t=r=>{this.dragging=!1,this.downXY={x:r.clientX,y:r.clientY}},n=r=>{(r.buttons||r.pressure)&&Math.hypot(r.clientX-this.downXY.x,r.clientY-this.downXY.y)>5&&(this.dragging=!0),this.pointer.x=r.clientX/window.innerWidth*2-1,this.pointer.y=-(r.clientY/window.innerHeight)*2+1,this.view.kind==="tower"&&this.hoverTower(),this.view.kind==="floor"&&this.hoverFloorUnits()},i=r=>{this.dragging||ld(r.target)||(this.pointer.x=r.clientX/window.innerWidth*2-1,this.pointer.y=-(r.clientY/window.innerHeight)*2+1,this.clickScene())};e.addEventListener("pointerdown",t),window.addEventListener("pointermove",n),e.addEventListener("pointerup",i)}hoverTower(){if(this.view.kind!=="tower")return;this.ray.setFromCamera(this.pointer,this.engine.camera);const e=this.ray.intersectObjects(this.tower.floorHits,!1),t=e.length?e[0].object.userData.floor:null;t!==this.view.hoverFloor&&(this.tower.highlight(t),this.hud.setHoverFloor(t),this.engine.setOutlined(this.tower.outlined()))}hoverFloorUnits(){if(this.view.kind!=="floor")return;this.ray.setFromCamera(this.pointer,this.engine.camera);const e=[];for(const i of this.interiors)i.group.traverse(r=>{r instanceof le&&r.name!=="unit-outline"&&e.push(r)});const t=this.ray.intersectObjects(e,!1);let n=null;if(t.length){let i=t[0].object;for(;i;){if(i.userData.unitId){n=i.userData.unitId;break}i=i.parent}}if(this.view.kind==="floor"&&n!==this.view.hoverUnit){this.view={...this.view,hoverUnit:n},this.tower.highlightUnit(n);const i=[];for(const[r,o]of this.unitOutlines)o.visible=r===n,r===n&&i.push(o.parent??o);this.engine.setOutlined(i)}}clickScene(){if(this.ray.setFromCamera(this.pointer,this.engine.camera),this.view.kind==="tower"){const e=this.ray.intersectObjects(this.tower.floorHits,!1);e.length&&this.showFloor(e[0].object.userData.floor);return}if(this.view.kind==="floor"){const e=this.interiors.flatMap(n=>{const i=[];return n.group.traverse(r=>{r instanceof le&&i.push(r)}),i}),t=this.ray.intersectObjects(e,!1);if(t.length){let n=t[0].object;for(;n;){if(n.userData.unitId){this.showFlat(this.view.floor,n.userData.unitId,"dollhouse");return}n=n.parent}}return}if(this.view.kind==="flat"){if(document.pointerLockElement)return;const e=this.interiors.flatMap(o=>o.hotspots.map(a=>a.mesh)),t=this.ray.intersectObjects(e,!0);if(t.length){let o=t[0].object;for(;o;){const a=o.userData.hotspot;if(a){this.walker.skipLockOnce=!0,this.openHotspot(a);return}o=o.parent}}const n=this.interiors.flatMap(o=>o.floorMeshes),i=this.ray.intersectObjects(n,!1);if(!i.length)return;const r=i[0].point;if(this.walker.skipLockOnce=!0,this.view.cam!=="walk"){this.showFlat(this.view.floor,this.view.unitId,"walk",!1,{x:r.x,z:r.z});return}if(!this.walker.walkTo(r.x,r.z)){const o=this.engine.camera.position;this.walker.walkTo(r.x+(o.x-r.x)*.1,r.z+(o.z-r.z)*.1)}}}bindKeys(){window.addEventListener("keydown",e=>{if(e.code==="Escape"){if(document.pointerLockElement){document.exitPointerLock();return}this.hud.goBack();return}if(!this.tv)return;const t=this.view;if(t.kind==="flat"){if(e.code==="ArrowLeft"||e.code==="ArrowRight"){if(!this.roomStops.length)return;let n=this.roomStops.findIndex(i=>i.id===this.currentRoom);n<0&&(n=0),n+=e.code==="ArrowRight"?1:-1,n=Math.max(0,Math.min(this.roomStops.length-1,n)),this.stopTour(!1),this.goRoom(this.roomStops[n].id),e.preventDefault();return}if(t.cam==="walk"&&(e.code==="Enter"||e.code==="NumpadEnter")){this.showFlat(t.floor,t.unitId,"dollhouse"),e.preventDefault();return}t.cam==="dollhouse"&&(e.code==="Enter"||e.code==="NumpadEnter")&&(this.showFlat(t.floor,t.unitId,"walk"),e.preventDefault());return}if(t.kind==="tower"){const n=t.hoverFloor??1;if(e.code==="ArrowUp"){const i=Math.min(qi,n+1);this.tower.highlight(i),this.hud.setHoverFloor(i),e.preventDefault()}if(e.code==="ArrowDown"){const i=Math.max(1,n-1);this.tower.highlight(i),this.hud.setHoverFloor(i),e.preventDefault()}(e.code==="Enter"||e.code==="NumpadEnter")&&(this.showFloor(t.hoverFloor??1),e.preventDefault())}else if(t.kind==="floor"){const i=zo(t.floor).map(o=>Mr(t.floor,o.suffix));let r=Math.max(0,i.indexOf(t.hoverUnit??i[0]));(e.code==="ArrowRight"||e.code==="ArrowLeft")&&(r=(r+(e.code==="ArrowRight"?1:i.length-1))%i.length,this.view={...t,hoverUnit:i[r]},this.hud.setView(this.view),document.querySelectorAll(".unit-card, .unit-chip").forEach(o=>{o.classList.toggle("hov",o.textContent?.includes(i[r])??!1)}),e.preventDefault()),(e.code==="Enter"||e.code==="NumpadEnter")&&(this.showFlat(t.floor,t.hoverUnit??i[0],"dollhouse"),e.preventDefault())}})}exposeApi(){const e={ready:!0,view:()=>this.view,gotoTower:()=>this.showTower(),highlightFloor:t=>{this.tower.highlight(t),this.engine.setOutlined(this.tower.outlined()),this.hud.setHoverFloor(t)},setCamPose:(t,n)=>{Co(),this.engine.camera.position.set(t[0],t[1],t[2]),this.engine.orbit.target.set(n[0],n[1],n[2]),this.engine.orbit.update()},gotoFloor:t=>this.showFloor(t),gotoFlat:(t,n,i="dollhouse")=>this.showFlat(t,n,i),setCam:t=>{if(this.view.kind==="flat")return this.showFlat(this.view.floor,this.view.unitId,t)},setTime:t=>this.setTime(t),setPrefs:t=>this.setPrefs({...this.prefs,...t}),setSheet:t=>this.hud.setSheet(t),rooms:()=>this.roomStops,goRoom:t=>this.goRoom(t),startTour:()=>this.startTour(),stopTour:()=>this.stopTour(!1),tourStep:t=>this.tourStep(t),setTourPlaying:t=>{this.tour&&(this.tour={...this.tour,playing:t},this.hud.setTour(this.tour),t?this.scheduleTour():this.clearTourTimer())},openForm:()=>this.hud.openForm(),closeForm:()=>this.hud.closeForm(),submitLead:(t,n)=>{const i=this.hud.unitOfInterest();od({name:t,phone:n,unit:i}),this.hud.closeForm(),this.hud.toast("Request saved on this device. A sales executive would follow up in Lead Setu.")},toast:t=>this.hud.toast(t),currentRoom:()=>this.currentRoom,tour:()=>this.tour,prefs:()=>this.prefs,fps:()=>this.engine.fps(),ao:()=>({enabled:this.engine.aoEnabled(),highTier:this.engine.highTier,software:this.engine.softwareGpu}),lighting:()=>this.interiors[0]?.lighting??null,camInfo:()=>({pos:this.engine.camera.position.toArray(),rot:[this.engine.camera.rotation.x,this.engine.camera.rotation.y,this.engine.camera.rotation.z],fov:this.engine.camera.fov,near:this.engine.camera.near,far:this.engine.camera.far,aspect:this.engine.camera.aspect,view:this.engine.camera.view}),rayFloor:()=>{const t=new Mu,n=[[0,-.2],[0,-.45],[.2,-.3],[-.2,-.3],[0,0]],i=[];for(const[r,o]of n){t.setFromCamera(new ne(r,o),this.engine.camera);const a=t.intersectObject(this.engine.scene,!0);i.push({ndc:[r,o],hits:a.slice(0,6).map(c=>{const l=c.object instanceof le?c.object.material:null,h=l?.map?.image;return{name:c.object.name,type:c.object.type,y:c.object.position.y,dist:Math.round(c.distance*1e3)/1e3,point:c.point.toArray().map(u=>Math.round(u*1e3)/1e3),visible:c.object.visible,mat:l?.type,color:l?.color?.getHexString?.(),map:h?.src?.slice(-40)??null,parent:c.object.parent?.name??c.object.parent?.type??null}})})}return i},paintFloors:(t,n=!1)=>{for(const i of this.interiors)for(const r of i.floorMeshes){const o=r.material;n&&o.map?r.material=new Ct({map:o.map,color:"#ffffff"}):(o.map=null,o.normalMap=null,o.roughnessMap=null,o.color.set(t),o.needsUpdate=!0)}},floorDebug:()=>{const t=[];for(const n of this.interiors)for(const i of n.floorMeshes){const r=i.material,o=r.map?.image,a=i.geometry.getAttribute("uv"),c=i.geometry.getAttribute("position"),l=i.geometry.getAttribute("normal");t.push({name:i.name,visible:i.visible,y:i.position.y,color:r.color.getHexString(),type:r.type,side:r.side,rough:r.roughness,env:r.envMapIntensity,map:r.map?{w:o?.width??0,src:String(o?.src??"").slice(-50),repeat:r.map.repeat.toArray(),wrap:r.map.wrapS,colorSpace:r.map.colorSpace}:null,uv0:a?[a.getX(0),a.getY(0),a.getX(1),a.getY(1),a.getX(2),a.getY(2)]:null,pos0:c?[c.getX(0),c.getY(0),c.getZ(0),c.getX(1),c.getY(1),c.getZ(1)]:null,n0:l?[l.getX(0),l.getY(0),l.getZ(0)]:null,verts:c?.count})}return t}};window.__leadsetu=e}}function zw(s){let e=s;for(;e;){if(e.name==="hotspot"||e.userData.hotspot)return!0;e=e.parent}return!1}function Bw(s,e){const t=Math.max(0,Math.min(s.x+s.w,e.x+e.w)-Math.max(s.x,e.x)),n=Math.max(0,Math.min(s.y+s.h,e.y+e.h)-Math.max(s.y,e.y));return t>6&&n>6}function mr(s){const e=document.getElementById("load-bar"),t=document.getElementById("load-pct"),n=Math.round(Math.max(0,Math.min(1,s))*100);e&&(e.style.width=n+"%"),t&&(t.textContent=n+"%")}function Hw(){const s=[...document.querySelectorAll("#tips .tip")],e=[...document.querySelectorAll("#tips [data-dot]")];if(!s.length)return;let t=0;const n=o=>{t=(o+s.length)%s.length,s.forEach((a,c)=>a.classList.toggle("on",c===t)),e.forEach((a,c)=>a.classList.toggle("on",c===t))};n(0),e.forEach((o,a)=>o.addEventListener("click",()=>n(a)));const i=window.setInterval(()=>n(t+1),3200),r=document.getElementById("loading");if(r){const o=new MutationObserver(()=>{r.classList.contains("done")&&(clearInterval(i),o.disconnect())});o.observe(r,{attributes:!0,attributeFilter:["class"]})}}function Gw(){const s=document.getElementById("loading"),e=document.getElementById("start-explore");e&&(e.hidden=!1);const t=new URLSearchParams(location.search).get("hold")==="1";let n=!1;const i=()=>{n||(n=!0,s?.classList.add("done"),document.body.classList.remove("booting"))};e?.addEventListener("click",i),t||window.setTimeout(i,7e3)}new Ow().start().catch(s=>{console.error(s);const e=document.querySelector(".load-sub");e&&(e.textContent="Could not load the walkthrough. Check the console.")});function Vw(){const s=new Et;s.name="walk-marker",s.visible=!1,s.renderOrder=10;const e=new le(new Xo(.22,.34,48),new Ct({color:"#e8c878",transparent:!0,opacity:.95,side:wt,depthWrite:!1}));e.rotation.x=-Math.PI/2;const t=new le(new Xo(.04,.09,28),new Ct({color:"#fff6d8",transparent:!0,opacity:.9,side:wt,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.012,s.add(e,t),s}
//# sourceMappingURL=index-CiGsuXVD.js.map
