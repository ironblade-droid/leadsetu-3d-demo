(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="170",ds={ROTATE:0,DOLLY:1,PAN:2},Pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$d=0,Al=1,Jd=2,Hc=1,Uu=2,Kn=3,ii=0,jt=1,Zt=2,kt=0,fs=1,Rl=2,Cl=3,Pl=4,Fu=5,vn=100,Qd=101,ef=102,tf=103,nf=104,Ks=200,sf=201,rf=202,of=203,Na=204,ka=205,Ua=206,af=207,Fa=208,cf=209,lf=210,hf=211,uf=212,df=213,ff=214,Oa=0,za=1,Ba=2,xs=3,Ha=4,Ga=5,Va=6,Wa=7,Ou=0,pf=1,mf=2,_i=0,zu=1,Bu=2,Hu=3,Gc=4,gf=5,Gu=6,Vu=7,Ll="attached",bf="detached",Wu=300,vs=301,ys=302,ar=303,Xa=304,Ao=306,qt=1e3,Ln=1001,vo=1002,Ut=1003,Xu=1004,Zs=1005,Lt=1006,lo=1007,Dn=1008,In=1009,ju=1010,qu=1011,cr=1012,Vc=1013,zi=1014,$t=1015,rn=1016,Wc=1017,Xc=1018,Bi=1020,Yu=35902,Ku=1021,Zu=1022,Jt=1023,$u=1024,Ju=1025,ps=1026,Hi=1027,jc=1028,qc=1029,Qu=1030,Yc=1031,Kc=1033,ho=33776,uo=33777,fo=33778,po=33779,ja=35840,qa=35841,Ya=35842,Ka=35843,Za=36196,$a=37492,Ja=37496,Qa=37808,ec=37809,tc=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,cc=37817,lc=37818,hc=37819,uc=37820,dc=37821,mo=36492,fc=36494,pc=36495,ed=36283,mc=36284,gc=36285,bc=36286,lr=2300,hr=2301,Fo=2302,Dl=2400,Il=2401,Nl=2402,_f=2500,xf=0,td=1,_c=2,vf=3200,yf=3201,Zc=0,Mf=1,Jn="",gt="srgb",It="srgb-linear",Ro="linear",ct="srgb",ji=7680,kl=519,wf=512,Sf=513,Ef=514,nd=515,Tf=516,Af=517,Rf=518,Cf=519,xc=35044,Ul="300 es",ei=2e3,yo=2001;class Wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fl=1234567;const nr=Math.PI/180,Ms=180/Math.PI;function un(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function $c(i,e){return(i%e+e)%e}function Pf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lf(i,e,t){return i!==e?(t-i)/(e-i):0}function ir(i,e,t){return(1-t)*i+t*e}function Df(i,e,t,n){return ir(i,e,1-Math.exp(-t*n))}function If(i,e=1){return e-Math.abs($c(i,e*2)-e)}function Nf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function kf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Uf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ff(i,e){return i+Math.random()*(e-i)}function Of(i){return i*(.5-Math.random())}function zf(i){i!==void 0&&(Fl=i);let e=Fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bf(i){return i*nr}function Hf(i){return i*Ms}function Gf(i){return(i&i-1)===0&&i!==0}function Vf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const id={DEG2RAD:nr,RAD2DEG:Ms,generateUUID:un,clamp:St,euclideanModulo:$c,mapLinear:Pf,inverseLerp:Lf,lerp:ir,damp:Df,pingpong:If,smoothstep:Nf,smootherstep:kf,randInt:Uf,randFloat:Ff,randFloatSpread:Of,seededRandom:zf,degToRad:Bf,radToDeg:Hf,isPowerOfTwo:Gf,ceilPowerOfTwo:Vf,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:Xf,normalize:lt,denormalize:yn};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,s,r,o,a,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],b=s[0],m=s[3],f=s[6],x=s[1],v=s[4],_=s[7],E=s[2],R=s[5],T=s[8];return r[0]=o*b+a*x+c*E,r[3]=o*m+a*v+c*R,r[6]=o*f+a*_+c*T,r[1]=l*b+h*x+u*E,r[4]=l*m+h*v+u*R,r[7]=l*f+h*_+u*T,r[2]=d*b+p*x+g*E,r[5]=d*m+p*v+g*R,r[8]=d*f+p*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=u*b,e[1]=(s*l-h*n)*b,e[2]=(a*n-s*o)*b,e[3]=d*b,e[4]=(h*t-s*c)*b,e[5]=(s*r-a*t)*b,e[6]=p*b,e[7]=(n*c-l*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new Ye;function sd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){const i=ur("canvas");return i.style.display="block",i}const Ol={};function $s(i){i in Ol||(Ol[i]=!0,console.warn(i))}function qf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Yf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:It,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ct&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ct&&(i.r=ms(i.r),i.g=ms(i.g),i.b=ms(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?Ro:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const zl=[.64,.33,.3,.6,.15,.06],Bl=[.2126,.7152,.0722],Hl=[.3127,.329],Gl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[It]:{primaries:zl,whitePoint:Hl,transfer:Ro,toXYZ:Gl,fromXYZ:Vl,luminanceCoefficients:Bl,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:zl,whitePoint:Hl,transfer:ct,toXYZ:Gl,fromXYZ:Vl,luminanceCoefficients:Bl,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}});let qi;class Zf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=ur("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $f=0;class rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zo(s[o].image)):r.push(zo(s[o]))}else r=zo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function zo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jf=0;class At extends Wi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Ln,s=Ln,r=Lt,o=Dn,a=Jt,c=In,l=At.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=un(),this.name="",this.source=new rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qt:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qt:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Wu;At.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],b=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,_=(p+1)/2,E=(f+1)/2,R=(h+d)/4,T=(u+b)/4,C=(g+m)/4;return v>_&&v>E?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=T/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=R/s,r=C/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=C/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qf extends Wi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new At(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Qf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class od extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ep extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],b=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==p||h!==g){let m=1-a;const f=c*d+l*p+h*g+u*b,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const E=Math.sqrt(v),R=Math.atan2(E,f*x);m=Math.sin(m*R)/E,a=Math.sin(a*R)/E}const _=a*x;if(c=c*m+d*_,l=l*m+p*_,h=h*m+g*_,u=u*m+b*_,m===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-a*p,e[t+2]=l*g+h*p+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new L,Wl=new Nn;class Fn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Ar.subVectors(this.max,Fs),Yi.subVectors(e.a,Fs),Ki.subVectors(e.b,Fs),Zi.subVectors(e.c,Fs),oi.subVectors(Ki,Yi),ai.subVectors(Zi,Ki),Ei.subVectors(Yi,Zi);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ei.z,Ei.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ei.z,0,-Ei.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ei.y,Ei.x,0];return!Ho(t,Yi,Ki,Zi,Ar)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,Yi,Ki,Zi,Ar))?!1:(Rr.crossVectors(oi,ai),t=[Rr.x,Rr.y,Rr.z],Ho(t,Yi,Ki,Zi,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new L,new L,new L,new L,new L,new L,new L,new L],gn=new L,Tr=new Fn,Yi=new L,Ki=new L,Zi=new L,oi=new L,ai=new L,Ei=new L,Fs=new L,Ar=new L,Rr=new L,Ti=new L;function Ho(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const tp=new Fn,Os=new L,Go=new L;class On{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Go)),this.expandByPoint(Os.copy(e.center).sub(Go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new L,Vo=new L,Cr=new L,ci=new L,Wo=new L,Pr=new L,Xo=new L;class Rs{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vo.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Vo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Cr),a=ci.dot(this.direction),c=-ci.dot(Cr),l=ci.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const b=1/h;u*=b,d*=b,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vo).addScaledVector(Cr,d),p}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,s,r){Wo.subVectors(t,e),Pr.subVectors(n,e),Xo.crossVectors(Wo,Pr);let o=this.direction.dot(Xo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const c=a*this.direction.dot(Pr.crossVectors(ci,Pr));if(c<0)return null;const l=a*this.direction.dot(Wo.cross(ci));if(l<0||c+l>o)return null;const h=-a*ci.dot(Xo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,s,r,o,a,c,l,h,u,d,p,g,b,m){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,p,g,b,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,p,g,b,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/$i.setFromMatrixColumn(e,0).length(),r=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,b=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-b*l,t[9]=-a*c,t[2]=b-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,g=l*h,b=l*u;t[0]=d+b*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=b+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,g=l*h,b=l*u;t[0]=d-b*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=b-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,b=a*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,b=a*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-b*u}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,b=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(np,e,ip)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),li.crossVectors(n,tn),li.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),li.crossVectors(n,tn)),li.normalize(),Lr.crossVectors(tn,li),s[0]=li.x,s[4]=Lr.x,s[8]=tn.x,s[1]=li.y,s[5]=Lr.y,s[9]=tn.y,s[2]=li.z,s[6]=Lr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],x=n[3],v=n[7],_=n[11],E=n[15],R=s[0],T=s[4],C=s[8],M=s[12],y=s[1],A=s[5],N=s[9],I=s[13],U=s[2],z=s[6],k=s[10],G=s[14],F=s[3],W=s[7],K=s[11],pe=s[15];return r[0]=o*R+a*y+c*U+l*F,r[4]=o*T+a*A+c*z+l*W,r[8]=o*C+a*N+c*k+l*K,r[12]=o*M+a*I+c*G+l*pe,r[1]=h*R+u*y+d*U+p*F,r[5]=h*T+u*A+d*z+p*W,r[9]=h*C+u*N+d*k+p*K,r[13]=h*M+u*I+d*G+p*pe,r[2]=g*R+b*y+m*U+f*F,r[6]=g*T+b*A+m*z+f*W,r[10]=g*C+b*N+m*k+f*K,r[14]=g*M+b*I+m*G+f*pe,r[3]=x*R+v*y+_*U+E*F,r[7]=x*T+v*A+_*z+E*W,r[11]=x*C+v*N+_*k+E*K,r[15]=x*M+v*I+_*G+E*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],b=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+b*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],b=e[13],m=e[14],f=e[15],x=u*m*l-b*d*l+b*c*p-a*m*p-u*c*f+a*d*f,v=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,_=h*b*l-g*u*l+g*a*p-o*b*p-h*a*f+o*u*f,E=g*u*c-h*b*c-g*a*d+o*b*d+h*a*m-o*u*m,R=t*x+n*v+s*_+r*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=x*T,e[1]=(b*d*r-u*m*r-b*s*p+n*m*p+u*s*f-n*d*f)*T,e[2]=(a*m*r-b*c*r+b*s*l-n*m*l-a*s*f+n*c*f)*T,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*T,e[4]=v*T,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*T,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*T,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*T,e[8]=_*T,e[9]=(g*u*r-h*b*r-g*n*p+t*b*p+h*n*f-t*u*f)*T,e[10]=(o*b*r-g*a*r+g*n*l-t*b*l-o*n*f+t*a*f)*T,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*T,e[12]=E*T,e[13]=(h*b*s-g*u*s+g*n*d-t*b*d-h*n*m+t*u*m)*T,e[14]=(g*a*s-o*b*s-g*n*c+t*b*c+o*n*m-t*a*m)*T,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,b=o*h,m=o*u,f=a*u,x=c*l,v=c*h,_=c*u,E=n.x,R=n.y,T=n.z;return s[0]=(1-(b+f))*E,s[1]=(p+_)*E,s[2]=(g-v)*E,s[3]=0,s[4]=(p-_)*R,s[5]=(1-(d+f))*R,s[6]=(m+x)*R,s[7]=0,s[8]=(g+v)*T,s[9]=(m-x)*T,s[10]=(1-(d+b))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);const l=1/r,h=1/o,u=1/a;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,t.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ei){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(a===ei)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===yo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ei){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,p=(n+s)*h;let g,b;if(a===ei)g=(o+r)*u,b=-2*u;else if(a===yo)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new L,bn=new ze,np=new L(0,0,0),ip=new L(1,1,1),li=new L,Lr=new L,tn=new L,Xl=new ze,jl=new Nn;class En{constructor(e=0,t=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sp=0;const ql=new L,Ji=new Nn,Xn=new ze,Dr=new L,zs=new L,rp=new L,op=new Nn,Yl=new L(1,0,0),Kl=new L(0,1,0),Zl=new L(0,0,1),$l={type:"added"},ap={type:"removed"},Qi={type:"childadded",child:null},jo={type:"childremoved",child:null};class bt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new L,t=new En,n=new Nn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ye}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(zs,Dr,this.up):Xn.lookAt(Dr,zs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Xn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($l),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ap),jo.child=e,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($l),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,rp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new L(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new L,jn=new L,qo=new L,qn=new L,es=new L,ts=new L,Jl=new L,Yo=new L,Ko=new L,Zo=new L,$o=new it,Jo=new it,Qo=new it;class Mn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_n.subVectors(s,t),jn.subVectors(n,t),qo.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(jn),c=_n.dot(qo),l=jn.dot(jn),h=jn.dot(qo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(o,qn.y),c.addScaledVector(a,qn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return $o.setScalar(0),Jo.setScalar(0),Qo.setScalar(0),$o.fromBufferAttribute(e,t),Jo.fromBufferAttribute(e,n),Qo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($o,r.x),o.addScaledVector(Jo,r.y),o.addScaledVector(Qo,r.z),o}static isFrontFacing(e,t,n,s){return _n.subVectors(n,t),jn.subVectors(e,t),_n.cross(jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),_n.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;es.subVectors(s,n),ts.subVectors(r,n),Yo.subVectors(e,n);const c=es.dot(Yo),l=ts.dot(Yo);if(c<=0&&l<=0)return t.copy(n);Ko.subVectors(e,s);const h=es.dot(Ko),u=ts.dot(Ko);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(es,o);Zo.subVectors(e,r);const p=es.dot(Zo),g=ts.dot(Zo);if(g>=0&&p<=g)return t.copy(r);const b=p*l-c*g;if(b<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ts,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Jl.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Jl,a);const f=1/(m+b+d);return o=b*f,a=d*f,t.copy(n).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function ea(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=$c(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ea(o,r,e+1/3),this.g=ea(o,r,e),this.b=ea(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Ze.fromWorkingColorSpace(zt.copy(this),e),Math.round(St(zt.r*255,0,255))*65536+Math.round(St(zt.g*255,0,255))*256+Math.round(St(zt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=gt){Ze.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Ir);const n=ir(hi.h,Ir.h,t),s=ir(hi.s,Ir.s,t),r=ir(hi.l,Ir.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new De;De.NAMES=ad;let cp=0;class wn extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=un(),this.name="",this.blending=fs,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=ka,this.blendEquation=vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==ka&&(n.blendDst=this.blendDst),this.blendEquation!==vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xt extends wn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qn=lp();function lp(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function hp(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=St(i,-65504,65504),Qn.floatView[0]=i;const e=Qn.uint32View[0],t=e>>23&511;return Qn.baseTable[t]+((e&8388607)>>Qn.shiftTable[t])}function up(i){const e=i>>10;return Qn.uint32View[0]=Qn.mantissaTable[Qn.offsetTable[e]+(i&1023)]+Qn.exponentTable[e],Qn.floatView[0]}const Nr={toHalfFloat:hp,fromHalfFloat:up},wt=new L,kr=new ie;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xc,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xc&&(e.usage=this.usage),e}}class cd extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ld extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dp=0;const cn=new ze,ta=new bt,ns=new L,nn=new Fn,Bs=new Fn,Pt=new L;class Nt extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sd(e)?ld:cd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return ta.lookAt(e),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(nn.min,Bs.min),nn.expandByPoint(Pt),Pt.addVectors(nn.max,Bs.max),nn.expandByPoint(Pt)):(nn.expandByPoint(Bs.min),nn.expandByPoint(Bs.max))}nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pt.fromBufferAttribute(a,l),c&&(ns.fromBufferAttribute(e,l),Pt.add(ns)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new L,c[C]=new L;const l=new L,h=new L,u=new L,d=new ie,p=new ie,g=new ie,b=new L,m=new L;function f(C,M,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(d),g.sub(d);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),a[C].add(b),a[M].add(b),a[y].add(b),c[C].add(m),c[M].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,M=x.length;C<M;++C){const y=x[C],A=y.start,N=y.count;for(let I=A,U=A+N;I<U;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const v=new L,_=new L,E=new L,R=new L;function T(C){E.fromBufferAttribute(s,C),R.copy(E);const M=a[C];v.copy(M),v.sub(E.multiplyScalar(E.dot(M))).normalize(),_.crossVectors(R,M);const A=_.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,A)}for(let C=0,M=x.length;C<M;++C){const y=x[C],A=y.start,N=y.count;for(let I=A,U=A+N;I<U;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let p=0,g=0;for(let b=0,m=c.length;b<m;b++){a.isInterleavedBufferAttribute?p=c[b]*a.data.stride+a.offset:p=c[b]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new ze,Ai=new Rs,Ur=new On,eh=new L,Fr=new L,Or=new L,zr=new L,na=new L,Br=new L,th=new L,Hr=new L;class he extends bt{constructor(e=new Nt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(na.fromBufferAttribute(u,e),o?Br.addScaledVector(na,h):Br.addScaledVector(na.sub(t),h))}t.add(Br)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(Ur.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Ur,eh)===null||Ai.origin.distanceToSquared(eh)>(e.far-e.near)**2))&&(Ql.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,E=v;_<E;_+=3){const R=a.getX(_),T=a.getX(_+1),C=a.getX(_+2);s=Gr(this,f,e,n,l,h,u,R,T,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const x=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);s=Gr(this,o,e,n,l,h,u,x,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,E=v;_<E;_+=3){const R=_,T=_+1,C=_+2;s=Gr(this,f,e,n,l,h,u,R,T,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const x=m,v=m+1,_=m+2;s=Gr(this,o,e,n,l,h,u,x,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function fp(i,e,t,n,s,r,o,a){let c;if(e.side===jt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ii,a),c===null)return null;Hr.copy(a),Hr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Hr);return l<t.near||l>t.far?null:{distance:l,point:Hr.clone(),object:i}}function Gr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Fr),i.getVertexPosition(c,Or),i.getVertexPosition(l,zr);const h=fp(i,e,t,n,Fr,Or,zr,th);if(h){const u=new L;Mn.getBarycoord(th,Fr,Or,zr,u),s&&(h.uv=Mn.getInterpolatedAttribute(s,a,c,l,u,new ie)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,a,c,l,u,new ie)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};Mn.getNormal(Fr,Or,zr,d.normal),h.face=d,h.barycoord=u}return h}class Ve extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function g(b,m,f,x,v,_,E,R,T,C,M){const y=_/T,A=E/C,N=_/2,I=E/2,U=R/2,z=T+1,k=C+1;let G=0,F=0;const W=new L;for(let K=0;K<k;K++){const pe=K*A-I;for(let j=0;j<z;j++){const ne=j*y-N;W[b]=ne*x,W[m]=pe*v,W[f]=U,l.push(W.x,W.y,W.z),W[b]=0,W[m]=0,W[f]=R>0?1:-1,h.push(W.x,W.y,W.z),u.push(j/T),u.push(1-K/C),G+=1}}for(let K=0;K<C;K++)for(let pe=0;pe<T;pe++){const j=d+pe+z*K,ne=d+pe+z*(K+1),V=d+(pe+1)+z*(K+1),$=d+(pe+1)+z*K;c.push(j,ne,$),c.push(ne,V,$),F+=6}a.addGroup(p,F,M),p+=F,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ve(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vt(i){const e={};for(let t=0;t<i.length;t++){const n=ws(i[t]);for(const s in n)e[s]=n[s]}return e}function pp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const mi={clone:ws,merge:Vt};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends wn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ud extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new L,nh=new ie,ih=new ie;class Wt extends ud{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,ss=1;class bp extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(is,ss,e,t);s.layers=this.layers,this.add(s);const r=new Wt(is,ss,e,t);r.layers=this.layers,this.add(r);const o=new Wt(is,ss,e,t);o.layers=this.layers,this.add(o);const a=new Wt(is,ss,e,t);a.layers=this.layers,this.add(a);const c=new Wt(is,ss,e,t);c.layers=this.layers,this.add(c);const l=new Wt(is,ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dd extends At{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _p extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new dd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ve(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:kt});r.uniforms.tEquirect.value=t;const o=new he(s,r),a=t.minFilter;return t.minFilter===Dn&&(t.minFilter=Lt),new bp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ia=new L,xp=new L,vp=new Ye;class pi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ia.subVectors(n,t).cross(xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vp.getNormalMatrix(e),s=this.coplanarPoint(ia).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new On,Vr=new L;class Qc{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,o=new pi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],b=s[10],m=s[11],f=s[12],x=s[13],v=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,m-p,_-f).normalize(),n[1].setComponents(c+r,d+l,m+p,_+f).normalize(),n[2].setComponents(c+o,d+h,m+g,_+x).normalize(),n[3].setComponents(c-o,d-h,m-g,_-x).normalize(),n[4].setComponents(c-a,d-u,m-b,_-v).normalize(),t===ei)n[5].setComponents(c+a,d+u,m+b,_+v).normalize();else if(t===yo)n[5].setComponents(a,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yp(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],b=u[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const b=u[p];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ni extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],g=[],b=[],m=[];for(let f=0;f<h;f++){const x=f*d-o;for(let v=0;v<l;v++){const _=v*u-r;g.push(_,-x,0),b.push(0,0,1),m.push(v/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<a;x++){const v=x+l*f,_=x+l*(f+1),E=x+1+l*(f+1),R=x+1+l*f;p.push(v,_,R),p.push(_,E,R)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(b,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
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
#endif`,Sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Lp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Up=`#ifdef USE_BUMPMAP
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
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
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
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
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
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
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xm=`PhysicalMaterial material;
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
#endif`,vm=`struct PhysicalMaterial {
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
}`,ym=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lm=`#if defined( USE_POINTS_UV )
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
#endif`,Dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
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
#endif`,Xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o0=`float getShadowMask() {
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
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,l0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,u0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
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
#endif`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,C0=`#define DISTANCE
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
}`,P0=`#define DISTANCE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
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
}`,N0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,U0=`uniform vec3 diffuse;
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
}`,F0=`#define LAMBERT
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
}`,O0=`#define LAMBERT
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
}`,z0=`#define MATCAP
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
}`,B0=`#define MATCAP
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
}`,H0=`#define NORMAL
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
}`,G0=`#define NORMAL
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
}`,V0=`#define PHONG
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
}`,W0=`#define PHONG
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
}`,X0=`#define STANDARD
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
}`,j0=`#define STANDARD
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
}`,q0=`#define TOON
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
}`,Y0=`#define TOON
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
}`,K0=`uniform float size;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,J0=`uniform vec3 color;
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
}`,Q0=`uniform float rotation;
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
}`,eg=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Mp,alphahash_pars_fragment:wp,alphamap_fragment:Sp,alphamap_pars_fragment:Ep,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Lp,begin_vertex:Dp,beginnormal_vertex:Ip,bsdfs:Np,iridescence_fragment:kp,bumpmap_pars_fragment:Up,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Bp,color_fragment:Hp,color_pars_fragment:Gp,color_pars_vertex:Vp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Yp,displacementmap_vertex:Kp,emissivemap_fragment:Zp,emissivemap_pars_fragment:$p,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:em,envmap_common_pars_fragment:tm,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:cm,gradientmap_pars_fragment:lm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:bm,lights_phong_pars_fragment:_m,lights_physical_fragment:xm,lights_physical_pars_fragment:vm,lights_fragment_begin:ym,lights_fragment_maps:Mm,lights_fragment_end:wm,logdepthbuf_fragment:Sm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Am,map_fragment:Rm,map_pars_fragment:Cm,map_particle_fragment:Pm,map_particle_pars_fragment:Lm,metalnessmap_fragment:Dm,metalnessmap_pars_fragment:Im,morphinstance_vertex:Nm,morphcolor_vertex:km,morphnormal_vertex:Um,morphtarget_pars_vertex:Fm,morphtarget_vertex:Om,normal_fragment_begin:zm,normal_fragment_maps:Bm,normal_pars_fragment:Hm,normal_pars_vertex:Gm,normal_vertex:Vm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:Xm,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Ym,opaque_fragment:Km,packing:Zm,premultiplied_alpha_fragment:$m,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:e0,roughnessmap_fragment:t0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:s0,shadowmap_vertex:r0,shadowmask_pars_fragment:o0,skinbase_vertex:a0,skinning_pars_vertex:c0,skinning_vertex:l0,skinnormal_vertex:h0,specularmap_fragment:u0,specularmap_pars_fragment:d0,tonemapping_fragment:f0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:g0,uv_pars_fragment:b0,uv_pars_vertex:_0,uv_vertex:x0,worldpos_vertex:v0,background_vert:y0,background_frag:M0,backgroundCube_vert:w0,backgroundCube_frag:S0,cube_vert:E0,cube_frag:T0,depth_vert:A0,depth_frag:R0,distanceRGBA_vert:C0,distanceRGBA_frag:P0,equirect_vert:L0,equirect_frag:D0,linedashed_vert:I0,linedashed_frag:N0,meshbasic_vert:k0,meshbasic_frag:U0,meshlambert_vert:F0,meshlambert_frag:O0,meshmatcap_vert:z0,meshmatcap_frag:B0,meshnormal_vert:H0,meshnormal_frag:G0,meshphong_vert:V0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:j0,meshtoon_vert:q0,meshtoon_frag:Y0,points_vert:K0,points_frag:Z0,shadow_vert:$0,shadow_frag:J0,sprite_vert:Q0,sprite_frag:eg},ve={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Cn={basic:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new De(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Vt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Vt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new De(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Vt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Vt([ve.points,ve.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Vt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Vt([ve.common,ve.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Vt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Vt([ve.sprite,ve.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Vt([ve.common,ve.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Vt([ve.lights,ve.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Cn.physical={uniforms:Vt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Wr={r:0,b:0,g:0},Ci=new En,tg=new ze;function ng(i,e,t,n,s,r,o){const a=new De(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function b(x){let v=!1;const _=g(x);_===null?f(a,c):_&&_.isColor&&(f(_,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const _=g(v);_&&(_.isCubeTexture||_.mapping===Ao)?(h===void 0&&(h=new he(new Ve(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:ws(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tg.makeRotationFromEuler(Ci)),h.material.toneMapped=Ze.getTransfer(_.colorSpace)!==ct,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new he(new ni(2,2),new Bt({name:"BackgroundMaterial",uniforms:ws(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,v){x.getRGB(Wr,hd(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(a,c)},render:b,addToRenderList:m}}function ig(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,A,N,I,U){let z=!1;const k=u(I,N,A);r!==k&&(r=k,l(r.object)),z=p(y,I,N,U),z&&g(y,I,N,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,_(y,A,N,I),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,A,N){const I=N.wireframe===!0;let U=n[y.id];U===void 0&&(U={},n[y.id]=U);let z=U[A.id];z===void 0&&(z={},U[A.id]=z);let k=z[I];return k===void 0&&(k=d(c()),z[I]=k),k}function d(y){const A=[],N=[],I=[];for(let U=0;U<t;U++)A[U]=0,N[U]=0,I[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:I,object:y,attributes:{},index:null}}function p(y,A,N,I){const U=r.attributes,z=A.attributes;let k=0;const G=N.getAttributes();for(const F in G)if(G[F].location>=0){const K=U[F];let pe=z[F];if(pe===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),K===void 0||K.attribute!==pe||pe&&K.data!==pe.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function g(y,A,N,I){const U={},z=A.attributes;let k=0;const G=N.getAttributes();for(const F in G)if(G[F].location>=0){let K=z[F];K===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const pe={};pe.attribute=K,K&&K.data&&(pe.data=K.data),U[F]=pe,k++}r.attributes=U,r.attributesNum=k,r.index=I}function b(){const y=r.newAttributes;for(let A=0,N=y.length;A<N;A++)y[A]=0}function m(y){f(y,0)}function f(y,A){const N=r.newAttributes,I=r.enabledAttributes,U=r.attributeDivisors;N[y]=1,I[y]===0&&(i.enableVertexAttribArray(y),I[y]=1),U[y]!==A&&(i.vertexAttribDivisor(y,A),U[y]=A)}function x(){const y=r.newAttributes,A=r.enabledAttributes;for(let N=0,I=A.length;N<I;N++)A[N]!==y[N]&&(i.disableVertexAttribArray(N),A[N]=0)}function v(y,A,N,I,U,z,k){k===!0?i.vertexAttribIPointer(y,A,N,U,z):i.vertexAttribPointer(y,A,N,I,U,z)}function _(y,A,N,I){b();const U=I.attributes,z=N.getAttributes(),k=A.defaultAttributeValues;for(const G in z){const F=z[G];if(F.location>=0){let W=U[G];if(W===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(W=y.instanceColor)),W!==void 0){const K=W.normalized,pe=W.itemSize,j=e.get(W);if(j===void 0)continue;const ne=j.buffer,V=j.type,$=j.bytesPerElement,ue=V===i.INT||V===i.UNSIGNED_INT||W.gpuType===Vc;if(W.isInterleavedBufferAttribute){const se=W.data,me=se.stride,Ce=W.offset;if(se.isInstancedInterleavedBuffer){for(let Le=0;Le<F.locationSize;Le++)f(F.location+Le,se.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Le=0;Le<F.locationSize;Le++)m(F.location+Le);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Le=0;Le<F.locationSize;Le++)v(F.location+Le,pe/F.locationSize,V,K,me*$,(Ce+pe/F.locationSize*Le)*$,ue)}else{if(W.isInstancedBufferAttribute){for(let se=0;se<F.locationSize;se++)f(F.location+se,W.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let se=0;se<F.locationSize;se++)m(F.location+se);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let se=0;se<F.locationSize;se++)v(F.location+se,pe/F.locationSize,V,K,pe*$,pe/F.locationSize*se*$,ue)}}else if(k!==void 0){const K=k[G];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(F.location,K);break;case 3:i.vertexAttrib3fv(F.location,K);break;case 4:i.vertexAttrib4fv(F.location,K);break;default:i.vertexAttrib1fv(F.location,K)}}}}x()}function E(){C();for(const y in n){const A=n[y];for(const N in A){const I=A[N];for(const U in I)h(I[U].object),delete I[U];delete A[N]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const A=n[y.id];for(const N in A){const I=A[N];for(const U in I)h(I[U].object),delete I[U];delete A[N]}delete n[y.id]}function T(y){for(const A in n){const N=n[A];if(N[y.id]===void 0)continue;const I=N[y.id];for(const U in I)h(I[U].object),delete I[U];delete N[y.id]}}function C(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function sg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*d[b];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Jt&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==In&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$t&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:E,maxSamples:R}}function og(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new pi,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,v=x*4;let _=f.clippingState||null;c.value=_,_=h(g,d,v,p);for(let E=0;E!==v;++E)_[E]=t[E];f.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const b=u!==null?u.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const f=p+b*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,_=p;v!==b;++v,_+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function ag(i){let e=new WeakMap;function t(o,a){return a===ar?o.mapping=vs:a===Xa&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ar||a===Xa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new _p(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Co extends ud{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hs=4,sh=[.125,.215,.35,.446,.526,.582],Ni=20,sa=new Co,rh=new De;let ra=null,oa=0,aa=0,ca=!1;const Ii=(1+Math.sqrt(5))/2,rs=1/Ii,oh=[new L(-Ii,rs,0),new L(Ii,rs,0),new L(-rs,0,Ii),new L(rs,0,Ii),new L(0,Ii,-rs),new L(0,Ii,rs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ra,oa,aa),this._renderer.xr.enabled=ca,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:rn,format:Jt,colorSpace:It,depthBuffer:!1},s=ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cg(r)),this._blurMaterial=lg(r,e,t)}return s}_compileMaterial(e){const t=new he(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,n,s){const a=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(rh),h.toneMapping=_i,h.autoClear=!1;const p=new Xt({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new he(new Ve,p);let b=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,b=!0):(p.color.copy(rh),b=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):x===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const v=this._cubeSize;Xr(s,x*v,f>2?v:0,v,v),h.setRenderTarget(s),b&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===vs||e.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new he(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=oh[(s-r-1)%oh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new he(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const f=[];let x=0;for(let T=0;T<Ni;++T){const C=T/b,M=Math.exp(-C*C/2);f.push(M),T===0?x+=M:T<m&&(x+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const _=this._sizeLods[s],E=3*_*(s>v-hs?s-v+hs:0),R=4*(this._cubeSize-_);Xr(t,E,R,3*_,2*_),c.setRenderTarget(t),c.render(u,sa)}}function cg(i){const e=[],t=[],n=[];let s=i;const r=i-hs+1+sh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-hs?c=sh[o-i+hs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,b=3,m=2,f=1,x=new Float32Array(b*g*p),v=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,C=R>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(M,b*g*R),v.set(d,m*g*R);const y=[R,R,R,R,R,R];_.set(y,f*g*R)}const E=new Nt;E.setAttribute("position",new Dt(x,b)),E.setAttribute("uv",new Dt(v,m)),E.setAttribute("faceIndex",new Dt(_,f)),e.push(E),s>hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ah(i,e,t){const n=new Sn(i,e,t);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lg(i,e,t){const n=new Float32Array(Ni),s=new L(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:el(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function ch(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function lh(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function el(){return`

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
	`}function hg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ar||c===Xa,h=c===vs||c===ys;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Mo(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Mo(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ug(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dg(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const b=d.morphAttributes[g];for(let m=0,f=b.length;m<f;m++)e.remove(b[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const b=p[g];for(let m=0,f=b.length;m<f;m++)e.update(b[m],i.ARRAY_BUFFER)}}function l(u){const d=[],p=u.index,g=u.attributes.position;let b=0;if(p!==null){const x=p.array;b=p.version;for(let v=0,_=x.length;v<_;v+=3){const E=x[v+0],R=x[v+1],T=x[v+2];d.push(E,R,R,T,T,E)}}else if(g!==void 0){const x=g.array;b=g.version;for(let v=0,_=x.length/3-1;v<_;v+=3){const E=v+0,R=v+1,T=v+2;d.push(E,R,R,T,T,E)}}else return;const m=new(sd(d)?ld:cd)(d,1);m.version=b;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function fg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],b[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,b,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*b[x];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function pg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mg(i,e,t){const n=new WeakMap,s=new it;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),b===!0&&(_=2),m===!0&&(_=3);let E=a.attributes.position.count*_,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*R*4*u),C=new od(T,E,R,u);C.type=$t,C.needsUpdate=!0;const M=_*4;for(let A=0;A<u;A++){const N=f[A],I=x[A],U=v[A],z=E*R*4*A;for(let k=0;k<N.count;k++){const G=k*M;g===!0&&(s.fromBufferAttribute(N,k),T[z+G+0]=s.x,T[z+G+1]=s.y,T[z+G+2]=s.z,T[z+G+3]=0),b===!0&&(s.fromBufferAttribute(I,k),T[z+G+4]=s.x,T[z+G+5]=s.y,T[z+G+6]=s.z,T[z+G+7]=0),m===!0&&(s.fromBufferAttribute(U,k),T[z+G+8]=s.x,T[z+G+9]=s.y,T[z+G+10]=s.z,T[z+G+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new ie(E,R)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const b=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function gg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class tl extends At{constructor(e,t,n,s,r,o,a,c,l,h=ps){if(h!==ps&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=zi),n===void 0&&h===Hi&&(n=Bi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ut,this.minFilter=c!==void 0?c:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const pd=new At,hh=new tl(1,1),md=new od,gd=new ep,bd=new dd,uh=[],dh=[],fh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function Cs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=uh[s];if(r===void 0&&(r=new Float32Array(s),uh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Po(i,e){let t=dh[e];t===void 0&&(t=new Int32Array(e),dh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function yg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;mh.set(n),i.uniformMatrix2fv(this.addr,!1,mh),Ct(t,n)}}function Mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;ph.set(n),i.uniformMatrix3fv(this.addr,!1,ph),Ct(t,n)}}function wg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;fh.set(n),i.uniformMatrix4fv(this.addr,!1,fh),Ct(t,n)}}function Sg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Rg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function Dg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hh.compareFunction=nd,r=hh):r=pd,t.setTexture2D(e||r,s)}function Ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||gd,s)}function Ng(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bd,s)}function kg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||md,s)}function Ug(i){switch(i){case 5126:return bg;case 35664:return _g;case 35665:return xg;case 35666:return vg;case 35674:return yg;case 35675:return Mg;case 35676:return wg;case 5124:case 35670:return Sg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return kg}}function Fg(i,e){i.uniform1fv(this.addr,e)}function Og(i,e){const t=Cs(e,this.size,2);i.uniform2fv(this.addr,t)}function zg(i,e){const t=Cs(e,this.size,3);i.uniform3fv(this.addr,t)}function Bg(i,e){const t=Cs(e,this.size,4);i.uniform4fv(this.addr,t)}function Hg(i,e){const t=Cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Gg(i,e){const t=Cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vg(i,e){const t=Cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wg(i,e){i.uniform1iv(this.addr,e)}function Xg(i,e){i.uniform2iv(this.addr,e)}function jg(i,e){i.uniform3iv(this.addr,e)}function qg(i,e){i.uniform4iv(this.addr,e)}function Yg(i,e){i.uniform1uiv(this.addr,e)}function Kg(i,e){i.uniform2uiv(this.addr,e)}function Zg(i,e){i.uniform3uiv(this.addr,e)}function $g(i,e){i.uniform4uiv(this.addr,e)}function Jg(i,e,t){const n=this.cache,s=e.length,r=Po(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||pd,r[o])}function Qg(i,e,t){const n=this.cache,s=e.length,r=Po(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||gd,r[o])}function eb(i,e,t){const n=this.cache,s=e.length,r=Po(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bd,r[o])}function tb(i,e,t){const n=this.cache,s=e.length,r=Po(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||md,r[o])}function nb(i){switch(i){case 5126:return Fg;case 35664:return Og;case 35665:return zg;case 35666:return Bg;case 35674:return Hg;case 35675:return Gg;case 35676:return Vg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return jg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Kg;case 36295:return Zg;case 36296:return $g;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return eb;case 36289:case 36303:case 36311:case 36292:return tb}}class ib{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ug(t.type)}}class sb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nb(t.type)}}class rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const la=/(\w+)(\])?(\[|\.)?/g;function gh(i,e){i.seq.push(e),i.map[e.id]=e}function ob(i,e,t){const n=i.name,s=n.length;for(la.lastIndex=0;;){const r=la.exec(n),o=la.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){gh(t,l===void 0?new ib(a,i,e):new sb(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new rb(a),gh(t,u)),t=u}}}class go{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ob(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function bh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ab=37297;let cb=0;function lb(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const _h=new Ye;function hb(i){Ze._getMatrix(_h,Ze.workingColorSpace,i);const e=`mat3( ${_h.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Ro:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+lb(i.getShaderSource(e),o)}else return s}function ub(i,e){const t=hb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function db(i,e){let t;switch(e){case zu:t="Linear";break;case Bu:t="Reinhard";break;case Hu:t="Cineon";break;case Gc:t="ACESFilmic";break;case Gu:t="AgX";break;case Vu:t="Neutral";break;case gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jr=new L;function fb(){Ze.getLuminanceCoefficients(jr);const i=jr.x.toFixed(4),e=jr.y.toFixed(4),t=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function mb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Js(i){return i!==""}function vh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(i){return i.replace(bb,xb)}const _b=new Map;function xb(i,e){let t=Ke[e];if(t===void 0){const n=_b.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}const vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mh(i){return i.replace(vb,yb)}function yb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function wb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case ys:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function Eb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ou:e="ENVMAP_BLENDING_MULTIPLY";break;case pf:e="ENVMAP_BLENDING_MIX";break;case mf:e="ENVMAP_BLENDING_ADD";break}return e}function Tb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ab(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Mb(t),l=wb(t),h=Sb(t),u=Eb(t),d=Tb(t),p=pb(t),g=mb(r),b=s.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Js).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Js).join(`
`),f.length>0&&(f+=`
`)):(m=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),f=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Ke.tonemapping_pars_fragment:"",t.toneMapping!==_i?db("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,ub("linearToOutputTexel",t.outputColorSpace),fb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=vc(o),o=vh(o,t),o=yh(o,t),a=vc(a),a=vh(a,t),a=yh(a,t),o=Mh(o),a=Mh(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+o,_=x+f+a,E=bh(s,s.VERTEX_SHADER,v),R=bh(s,s.FRAGMENT_SHADER,_);s.attachShader(b,E),s.attachShader(b,R),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function T(A){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(b).trim(),I=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(R).trim();let z=!0,k=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,E,R);else{const G=xh(s,E,"vertex"),F=xh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+G+`
`+F)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(I===""||U==="")&&(k=!1);k&&(A.diagnostics={runnable:z,programLog:N,vertexShader:{log:I,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(E),s.deleteShader(R),C=new go(s,b),M=gb(s,b)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(b,ab)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=R,this}let Rb=0;class Cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pb(e),t.set(e,n)),n}}class Pb{constructor(e){this.id=Rb++,this.code=e,this.usedTimes=0}}function Lb(i,e,t,n,s,r,o){const a=new Jc,c=new Cb,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,A,N,I){const U=N.fog,z=I.geometry,k=M.isMeshStandardMaterial?N.environment:null,G=(M.isMeshStandardMaterial?t:e).get(M.envMap||k),F=G&&G.mapping===Ao?G.image.height:null,W=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pe=K!==void 0?K.length:0;let j=0;z.morphAttributes.position!==void 0&&(j=1),z.morphAttributes.normal!==void 0&&(j=2),z.morphAttributes.color!==void 0&&(j=3);let ne,V,$,ue;if(W){const at=Cn[W];ne=at.vertexShader,V=at.fragmentShader}else ne=M.vertexShader,V=M.fragmentShader,c.update(M),$=c.getVertexShaderID(M),ue=c.getFragmentShaderID(M);const se=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ce=I.isInstancedMesh===!0,Le=I.isBatchedMesh===!0,Xe=!!M.map,te=!!M.matcap,ce=!!G,D=!!M.aoMap,Te=!!M.lightMap,ae=!!M.bumpMap,xe=!!M.normalMap,de=!!M.displacementMap,Fe=!!M.emissiveMap,Me=!!M.metalnessMap,P=!!M.roughnessMap,w=M.anisotropy>0,X=M.clearcoat>0,J=M.dispersion>0,oe=M.iridescence>0,Q=M.sheen>0,Pe=M.transmission>0,ge=w&&!!M.anisotropyMap,ye=X&&!!M.clearcoatMap,We=X&&!!M.clearcoatNormalMap,le=X&&!!M.clearcoatRoughnessMap,Ae=oe&&!!M.iridescenceMap,Oe=oe&&!!M.iridescenceThicknessMap,Be=Q&&!!M.sheenColorMap,Re=Q&&!!M.sheenRoughnessMap,Je=!!M.specularMap,He=!!M.specularColorMap,tt=!!M.specularIntensityMap,O=Pe&&!!M.transmissionMap,be=Pe&&!!M.thicknessMap,Z=!!M.gradientMap,re=!!M.alphaMap,Ee=M.alphaTest>0,we=!!M.alphaHash,je=!!M.extensions;let yt=_i;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(yt=i.toneMapping);const Ft={shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:V,defines:M.defines,customVertexShaderID:$,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Le,batchingColor:Le&&I._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&I.instanceColor!==null,instancingMorph:Ce&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:It,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:te,envMap:ce,envMapMode:ce&&G.mapping,envMapCubeUVHeight:F,aoMap:D,lightMap:Te,bumpMap:ae,normalMap:xe,displacementMap:d&&de,emissiveMap:Fe,normalMapObjectSpace:xe&&M.normalMapType===Mf,normalMapTangentSpace:xe&&M.normalMapType===Zc,metalnessMap:Me,roughnessMap:P,anisotropy:w,anisotropyMap:ge,clearcoat:X,clearcoatMap:ye,clearcoatNormalMap:We,clearcoatRoughnessMap:le,dispersion:J,iridescence:oe,iridescenceMap:Ae,iridescenceThicknessMap:Oe,sheen:Q,sheenColorMap:Be,sheenRoughnessMap:Re,specularMap:Je,specularColorMap:He,specularIntensityMap:tt,transmission:Pe,transmissionMap:O,thicknessMap:be,gradientMap:Z,opaque:M.transparent===!1&&M.blending===fs&&M.alphaToCoverage===!1,alphaMap:re,alphaTest:Ee,alphaHash:we,combine:M.combine,mapUv:Xe&&b(M.map.channel),aoMapUv:D&&b(M.aoMap.channel),lightMapUv:Te&&b(M.lightMap.channel),bumpMapUv:ae&&b(M.bumpMap.channel),normalMapUv:xe&&b(M.normalMap.channel),displacementMapUv:de&&b(M.displacementMap.channel),emissiveMapUv:Fe&&b(M.emissiveMap.channel),metalnessMapUv:Me&&b(M.metalnessMap.channel),roughnessMapUv:P&&b(M.roughnessMap.channel),anisotropyMapUv:ge&&b(M.anisotropyMap.channel),clearcoatMapUv:ye&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:We&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&b(M.sheenRoughnessMap.channel),specularMapUv:Je&&b(M.specularMap.channel),specularColorMapUv:He&&b(M.specularColorMap.channel),specularIntensityMapUv:tt&&b(M.specularIntensityMap.channel),transmissionMapUv:O&&b(M.transmissionMap.channel),thicknessMapUv:be&&b(M.thicknessMap.channel),alphaMapUv:re&&b(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xe||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Xe||re),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:me,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:j,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:yt,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:Fe&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zt,flipSided:M.side===jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:je&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&M.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)y.push(A),y.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(x(y,M),v(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function x(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const y=g[M.type];let A;if(y){const N=Cn[y];A=mi.clone(N.uniforms)}else A=M.uniforms;return A}function E(M,y){let A;for(let N=0,I=h.length;N<I;N++){const U=h[N];if(U.cacheKey===y){A=U,++A.usedTimes;break}}return A===void 0&&(A=new Ab(i,y,M,r),h.push(A)),A}function R(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:E,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:C}}function Db(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ib(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,g,b,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=b,f.group=m),e++,f}function a(u,d,p,g,b,m){const f=o(u,d,p,g,b,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,b,m){const f=o(u,d,p,g,b,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Ib),n.length>1&&n.sort(d||Sh),s.length>1&&s.sort(d||Sh)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Nb(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Eh,i.set(n,[o])):s>=r.length?(o=new Eh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function kb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new De};break;case"SpotLight":t={position:new L,direction:new L,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ub(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Fb=0;function Ob(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zb(i){const e=new kb,t=Ub(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new ze,o=new ze;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,x=0,v=0,_=0,E=0,R=0,T=0;l.sort(Ob);for(let M=0,y=l.length;M<y;M++){const A=l[M],N=A.color,I=A.intensity,U=A.distance,z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=N.r*I,u+=N.g*I,d+=N.b*I;else if(A.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(A.sh.coefficients[k],I);T++}else if(A.isDirectionalLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const G=A.shadow,F=t.get(A);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=A.shadow.matrix,x++}n.directional[p]=k,p++}else if(A.isSpotLight){const k=e.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(N).multiplyScalar(I),k.distance=U,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,n.spot[b]=k;const G=A.shadow;if(A.map&&(n.spotLightMap[E]=A.map,E++,G.updateMatrices(A),A.castShadow&&R++),n.spotLightMatrix[b]=G.matrix,A.castShadow){const F=t.get(A);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,n.spotShadow[b]=F,n.spotShadowMap[b]=z,_++}b++}else if(A.isRectAreaLight){const k=e.get(A);k.color.copy(N).multiplyScalar(I),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=k,m++}else if(A.isPointLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){const G=A.shadow,F=t.get(A);F.shadowIntensity=G.intensity,F.shadowBias=G.bias,F.shadowNormalBias=G.normalBias,F.shadowRadius=G.radius,F.shadowMapSize=G.mapSize,F.shadowCameraNear=G.camera.near,F.shadowCameraFar=G.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=A.shadow.matrix,v++}n.point[g]=k,g++}else if(A.isHemisphereLight){const k=e.get(A);k.skyColor.copy(A.color).multiplyScalar(I),k.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==x||C.numPointShadows!==v||C.numSpotShadows!==_||C.numSpotMaps!==E||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+E-R,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=b,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=x,C.numPointShadows=v,C.numSpotShadows=_,C.numSpotMaps=E,C.numLightProbes=T,n.version=Fb++)}function c(l,h){let u=0,d=0,p=0,g=0,b=0;const m=h.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const v=l[f];if(v.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(v.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:a,setupView:c,state:n}}function Th(i){const e=new zb(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Bb(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Th(i),e.set(s,[a])):r>=o.length?(a=new Th(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Hb extends wn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gb extends wn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wb=`uniform sampler2D shadow_pass;
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
}`;function Xb(i,e,t){let n=new Qc;const s=new ie,r=new ie,o=new it,a=new Hb({depthPacking:yf}),c=new Gb,l={},h=t.maxTextureSize,u={[ii]:jt,[jt]:ii,[Zt]:Zt},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Vb,fragmentShader:Wb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new he(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let f=this.type;this.render=function(R,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),N=i.state;N.setBlending(kt),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const I=f!==Kn&&this.type===Kn,U=f===Kn&&this.type!==Kn;for(let z=0,k=R.length;z<k;z++){const G=R[z],F=G.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const W=F.getFrameExtents();if(s.multiply(W),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,F.mapSize.y=r.y)),F.map===null||I===!0||U===!0){const pe=this.type!==Kn?{minFilter:Ut,magFilter:Ut}:{};F.map!==null&&F.map.dispose(),F.map=new Sn(s.x,s.y,pe),F.map.texture.name=G.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const K=F.getViewportCount();for(let pe=0;pe<K;pe++){const j=F.getViewport(pe);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),N.viewport(o),F.updateMatrices(G,pe),n=F.getFrustum(),_(T,C,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===Kn&&x(F,C),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,A)};function x(R,T){const C=e.update(b);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Sn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,b,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,C,p,b,null)}function v(R,T,C,M){let y=null;const A=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)y=A;else if(y=C.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=y.uuid,I=T.uuid;let U=l[N];U===void 0&&(U={},l[N]=U);let z=U[I];z===void 0&&(z=y.clone(),U[I]=z,T.addEventListener("dispose",E)),y=z}if(y.visible=T.visible,y.wireframe=T.wireframe,M===Kn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=C}return y}function _(R,T,C,M,y){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Kn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const I=e.update(R),U=R.material;if(Array.isArray(U)){const z=I.groups;for(let k=0,G=z.length;k<G;k++){const F=z[k],W=U[F.materialIndex];if(W&&W.visible){const K=v(R,W,M,y);R.onBeforeShadow(i,R,T,C,I,K,F),i.renderBufferDirect(C,null,I,K,R,F),R.onAfterShadow(i,R,T,C,I,K,F)}}}else if(U.visible){const z=v(R,U,M,y);R.onBeforeShadow(i,R,T,C,I,z,null),i.renderBufferDirect(C,null,I,z,R,null),R.onAfterShadow(i,R,T,C,I,z,null)}}const N=R.children;for(let I=0,U=N.length;I<U;I++)_(N[I],T,C,M,y)}function E(R){R.target.removeEventListener("dispose",E);for(const C in l){const M=l[C],y=R.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const jb={[Oa]:za,[Ba]:Va,[Ha]:Wa,[xs]:Ga,[za]:Oa,[Va]:Ba,[Wa]:Ha,[Ga]:xs};function qb(i,e){function t(){let O=!1;const be=new it;let Z=null;const re=new it(0,0,0,0);return{setMask:function(Ee){Z!==Ee&&!O&&(i.colorMask(Ee,Ee,Ee,Ee),Z=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,we,je,yt,Ft){Ft===!0&&(Ee*=yt,we*=yt,je*=yt),be.set(Ee,we,je,yt),re.equals(be)===!1&&(i.clearColor(Ee,we,je,yt),re.copy(be))},reset:function(){O=!1,Z=null,re.set(-1,0,0,0)}}}function n(){let O=!1,be=!1,Z=null,re=null,Ee=null;return{setReversed:function(we){if(be!==we){const je=e.get("EXT_clip_control");be?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const yt=Ee;Ee=null,this.setClear(yt)}be=we},getReversed:function(){return be},setTest:function(we){we?se(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(we){Z!==we&&!O&&(i.depthMask(we),Z=we)},setFunc:function(we){if(be&&(we=jb[we]),re!==we){switch(we){case Oa:i.depthFunc(i.NEVER);break;case za:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=we}},setLocked:function(we){O=we},setClear:function(we){Ee!==we&&(be&&(we=1-we),i.clearDepth(we),Ee=we)},reset:function(){O=!1,Z=null,re=null,Ee=null,be=!1}}}function s(){let O=!1,be=null,Z=null,re=null,Ee=null,we=null,je=null,yt=null,Ft=null;return{setTest:function(at){O||(at?se(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(at){be!==at&&!O&&(i.stencilMask(at),be=at)},setFunc:function(at,pn,Hn){(Z!==at||re!==pn||Ee!==Hn)&&(i.stencilFunc(at,pn,Hn),Z=at,re=pn,Ee=Hn)},setOp:function(at,pn,Hn){(we!==at||je!==pn||yt!==Hn)&&(i.stencilOp(at,pn,Hn),we=at,je=pn,yt=Hn)},setLocked:function(at){O=at},setClear:function(at){Ft!==at&&(i.clearStencil(at),Ft=at)},reset:function(){O=!1,be=null,Z=null,re=null,Ee=null,we=null,je=null,yt=null,Ft=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,x=null,v=null,_=null,E=null,R=null,T=new De(0,0,0),C=0,M=!1,y=null,A=null,N=null,I=null,U=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,G=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(F)[1]),k=G>=1):F.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),k=G>=2);let W=null,K={};const pe=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ne=new it().fromArray(pe),V=new it().fromArray(j);function $(O,be,Z,re){const Ee=new Uint8Array(4),we=i.createTexture();i.bindTexture(O,we),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<Z;je++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(be+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return we}const ue={};ue[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(xs),ae(!1),xe(Al),se(i.CULL_FACE),D(kt);function se(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function me(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ce(O,be){return u[O]!==be?(i.bindFramebuffer(O,be),u[O]=be,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=be),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=be),!0):!1}function Le(O,be){let Z=p,re=!1;if(O){Z=d.get(be),Z===void 0&&(Z=[],d.set(be,Z));const Ee=O.textures;if(Z.length!==Ee.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let we=0,je=Ee.length;we<je;we++)Z[we]=i.COLOR_ATTACHMENT0+we;Z.length=Ee.length,re=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,re=!0);re&&i.drawBuffers(Z)}function Xe(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const te={[vn]:i.FUNC_ADD,[Qd]:i.FUNC_SUBTRACT,[ef]:i.FUNC_REVERSE_SUBTRACT};te[tf]=i.MIN,te[nf]=i.MAX;const ce={[Ks]:i.ZERO,[sf]:i.ONE,[rf]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[lf]:i.SRC_ALPHA_SATURATE,[Fa]:i.DST_COLOR,[Ua]:i.DST_ALPHA,[of]:i.ONE_MINUS_SRC_COLOR,[ka]:i.ONE_MINUS_SRC_ALPHA,[cf]:i.ONE_MINUS_DST_COLOR,[af]:i.ONE_MINUS_DST_ALPHA,[hf]:i.CONSTANT_COLOR,[uf]:i.ONE_MINUS_CONSTANT_COLOR,[df]:i.CONSTANT_ALPHA,[ff]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,be,Z,re,Ee,we,je,yt,Ft,at){if(O===kt){b===!0&&(me(i.BLEND),b=!1);return}if(b===!1&&(se(i.BLEND),b=!0),O!==Fu){if(O!==m||at!==M){if((f!==vn||_!==vn)&&(i.blendEquation(i.FUNC_ADD),f=vn,_=vn),at)switch(O){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,v=null,E=null,R=null,T.set(0,0,0),C=0,m=O,M=at}return}Ee=Ee||be,we=we||Z,je=je||re,(be!==f||Ee!==_)&&(i.blendEquationSeparate(te[be],te[Ee]),f=be,_=Ee),(Z!==x||re!==v||we!==E||je!==R)&&(i.blendFuncSeparate(ce[Z],ce[re],ce[we],ce[je]),x=Z,v=re,E=we,R=je),(yt.equals(T)===!1||Ft!==C)&&(i.blendColor(yt.r,yt.g,yt.b,Ft),T.copy(yt),C=Ft),m=O,M=!1}function Te(O,be){O.side===Zt?me(i.CULL_FACE):se(i.CULL_FACE);let Z=O.side===jt;be&&(Z=!Z),ae(Z),O.blending===fs&&O.transparent===!1?D(kt):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const re=O.stencilWrite;a.setTest(re),re&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function xe(O){O!==$d?(se(i.CULL_FACE),O!==A&&(O===Al?i.cullFace(i.BACK):O===Jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),A=O}function de(O){O!==N&&(k&&i.lineWidth(O),N=O)}function Fe(O,be,Z){O?(se(i.POLYGON_OFFSET_FILL),(I!==be||U!==Z)&&(i.polygonOffset(be,Z),I=be,U=Z)):me(i.POLYGON_OFFSET_FILL)}function Me(O){O?se(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function P(O){O===void 0&&(O=i.TEXTURE0+z-1),W!==O&&(i.activeTexture(O),W=O)}function w(O,be,Z){Z===void 0&&(W===null?Z=i.TEXTURE0+z-1:Z=W);let re=K[Z];re===void 0&&(re={type:void 0,texture:void 0},K[Z]=re),(re.type!==O||re.texture!==be)&&(W!==Z&&(i.activeTexture(Z),W=Z),i.bindTexture(O,be||ue[O]),re.type=O,re.texture=be)}function X(){const O=K[W];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(O){ne.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ne.copy(O))}function Re(O){V.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),V.copy(O))}function Je(O,be){let Z=l.get(be);Z===void 0&&(Z=new WeakMap,l.set(be,Z));let re=Z.get(O);re===void 0&&(re=i.getUniformBlockIndex(be,O.name),Z.set(O,re))}function He(O,be){const re=l.get(be).get(O);c.get(be)!==re&&(i.uniformBlockBinding(be,re,O.__bindingPointIndex),c.set(be,re))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,K={},u={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,x=null,v=null,_=null,E=null,R=null,T=new De(0,0,0),C=0,M=!1,y=null,A=null,N=null,I=null,U=null,ne.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:me,bindFramebuffer:Ce,drawBuffers:Le,useProgram:Xe,setBlending:D,setMaterial:Te,setFlipSided:ae,setCullFace:xe,setLineWidth:de,setPolygonOffset:Fe,setScissorTest:Me,activeTexture:P,bindTexture:w,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:oe,texImage2D:Ae,texImage3D:Oe,updateUBOMapping:Je,uniformBlockBinding:He,texStorage2D:We,texStorage3D:le,texSubImage2D:Q,texSubImage3D:Pe,compressedTexSubImage2D:ge,compressedTexSubImage3D:ye,scissor:Be,viewport:Re,reset:tt}}function Ah(i,e,t,n){const s=Yb(n);switch(t){case Ku:return i*e;case $u:return i*e;case Ju:return i*e*2;case jc:return i*e/s.components*s.byteLength;case qc:return i*e/s.components*s.byteLength;case Qu:return i*e*2/s.components*s.byteLength;case Yc:return i*e*2/s.components*s.byteLength;case Zu:return i*e*3/s.components*s.byteLength;case Jt:return i*e*4/s.components*s.byteLength;case Kc:return i*e*4/s.components*s.byteLength;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fo:case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:case Ka:return Math.max(i,16)*Math.max(e,8)/4;case ja:case Ya:return Math.max(i,8)*Math.max(e,8)/2;case Za:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mo:case fc:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ed:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gc:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yb(i){switch(i){case In:case ju:return{byteLength:1,components:1};case cr:case qu:case rn:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case zi:case Vc:case $t:return{byteLength:4,components:1};case Yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Kb(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):ur("canvas")}function b(P,w,X){let J=1;const oe=Me(P);if((oe.width>X||oe.height>X)&&(J=X/Math.max(oe.width,oe.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(J*oe.width),Pe=Math.floor(J*oe.height);u===void 0&&(u=g(Q,Pe));const ge=w?g(Q,Pe):u;return ge.width=Q,ge.height=Pe,ge.getContext("2d").drawImage(P,0,0,Q,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Q+"x"+Pe+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,w,X,J,oe=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=w;if(w===i.RED&&(X===i.FLOAT&&(Q=i.R32F),X===i.HALF_FLOAT&&(Q=i.R16F),X===i.UNSIGNED_BYTE&&(Q=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.R8UI),X===i.UNSIGNED_SHORT&&(Q=i.R16UI),X===i.UNSIGNED_INT&&(Q=i.R32UI),X===i.BYTE&&(Q=i.R8I),X===i.SHORT&&(Q=i.R16I),X===i.INT&&(Q=i.R32I)),w===i.RG&&(X===i.FLOAT&&(Q=i.RG32F),X===i.HALF_FLOAT&&(Q=i.RG16F),X===i.UNSIGNED_BYTE&&(Q=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RG8UI),X===i.UNSIGNED_SHORT&&(Q=i.RG16UI),X===i.UNSIGNED_INT&&(Q=i.RG32UI),X===i.BYTE&&(Q=i.RG8I),X===i.SHORT&&(Q=i.RG16I),X===i.INT&&(Q=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),X===i.UNSIGNED_INT&&(Q=i.RGB32UI),X===i.BYTE&&(Q=i.RGB8I),X===i.SHORT&&(Q=i.RGB16I),X===i.INT&&(Q=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),X===i.UNSIGNED_INT&&(Q=i.RGBA32UI),X===i.BYTE&&(Q=i.RGBA8I),X===i.SHORT&&(Q=i.RGBA16I),X===i.INT&&(Q=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),w===i.RGBA){const Pe=oe?Ro:Ze.getTransfer(J);X===i.FLOAT&&(Q=i.RGBA32F),X===i.HALF_FLOAT&&(Q=i.RGBA16F),X===i.UNSIGNED_BYTE&&(Q=Pe===ct?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(P,w){let X;return P?w===null||w===zi||w===Bi?X=i.DEPTH24_STENCIL8:w===$t?X=i.DEPTH32F_STENCIL8:w===cr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===zi||w===Bi?X=i.DEPTH_COMPONENT24:w===$t?X=i.DEPTH_COMPONENT32F:w===cr&&(X=i.DEPTH_COMPONENT16),X}function E(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ut&&P.minFilter!==Lt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function R(P){const w=P.target;w.removeEventListener("dispose",R),C(w),w.isVideoTexture&&h.delete(w)}function T(P){const w=P.target;w.removeEventListener("dispose",T),y(w)}function C(P){const w=n.get(P);if(w.__webglInit===void 0)return;const X=P.source,J=d.get(X);if(J){const oe=J[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&M(P),Object.keys(J).length===0&&d.delete(X)}n.remove(P)}function M(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const X=P.source,J=d.get(X);delete J[w.__cacheKey],o.memory.textures--}function y(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let oe=0;oe<w.__webglFramebuffer[J].length;oe++)i.deleteFramebuffer(w.__webglFramebuffer[J][oe]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=P.textures;for(let J=0,oe=X.length;J<oe;J++){const Q=n.get(X[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(X[J])}n.remove(P)}let A=0;function N(){A=0}function I(){const P=A;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),A+=1,P}function U(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function z(P,w){const X=n.get(P);if(P.isVideoTexture&&de(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(X,P,w);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function k(P,w){const X=n.get(P);if(P.version>0&&X.__version!==P.version){V(X,P,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function G(P,w){const X=n.get(P);if(P.version>0&&X.__version!==P.version){V(X,P,w);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function F(P,w){const X=n.get(P);if(P.version>0&&X.__version!==P.version){$(X,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const W={[qt]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},K={[Ut]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[Dn]:i.LINEAR_MIPMAP_LINEAR},pe={[wf]:i.NEVER,[Cf]:i.ALWAYS,[Sf]:i.LESS,[nd]:i.LEQUAL,[Ef]:i.EQUAL,[Rf]:i.GEQUAL,[Tf]:i.GREATER,[Af]:i.NOTEQUAL};function j(P,w){if(w.type===$t&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Lt||w.magFilter===lo||w.magFilter===Zs||w.magFilter===Dn||w.minFilter===Lt||w.minFilter===lo||w.minFilter===Zs||w.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,W[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,W[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,W[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,K[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ut||w.minFilter!==Zs&&w.minFilter!==Dn||w.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ne(P,w){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",R));const J=w.source;let oe=d.get(J);oe===void 0&&(oe={},d.set(J,oe));const Q=U(w);if(Q!==P.__cacheKey){oe[Q]===void 0&&(oe[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),oe[Q].usedTimes++;const Pe=oe[P.__cacheKey];Pe!==void 0&&(oe[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&M(w)),P.__cacheKey=Q,P.__webglTexture=oe[Q].texture}return X}function V(P,w,X){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);const oe=ne(P,w),Q=w.source;t.bindTexture(J,P.__webglTexture,i.TEXTURE0+X);const Pe=n.get(Q);if(Q.version!==Pe.__version||oe===!0){t.activeTexture(i.TEXTURE0+X);const ge=Ze.getPrimaries(Ze.workingColorSpace),ye=w.colorSpace===Jn?null:Ze.getPrimaries(w.colorSpace),We=w.colorSpace===Jn||ge===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let le=b(w.image,!1,s.maxTextureSize);le=Fe(w,le);const Ae=r.convert(w.format,w.colorSpace),Oe=r.convert(w.type);let Be=v(w.internalFormat,Ae,Oe,w.colorSpace,w.isVideoTexture);j(J,w);let Re;const Je=w.mipmaps,He=w.isVideoTexture!==!0,tt=Pe.__version===void 0||oe===!0,O=Q.dataReady,be=E(w,le);if(w.isDepthTexture)Be=_(w.format===Hi,w.type),tt&&(He?t.texStorage2D(i.TEXTURE_2D,1,Be,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Be,le.width,le.height,0,Ae,Oe,null));else if(w.isDataTexture)if(Je.length>0){He&&tt&&t.texStorage2D(i.TEXTURE_2D,be,Be,Je[0].width,Je[0].height);for(let Z=0,re=Je.length;Z<re;Z++)Re=Je[Z],He?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Re.width,Re.height,Ae,Oe,Re.data):t.texImage2D(i.TEXTURE_2D,Z,Be,Re.width,Re.height,0,Ae,Oe,Re.data);w.generateMipmaps=!1}else He?(tt&&t.texStorage2D(i.TEXTURE_2D,be,Be,le.width,le.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le.width,le.height,Ae,Oe,le.data)):t.texImage2D(i.TEXTURE_2D,0,Be,le.width,le.height,0,Ae,Oe,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Be,Je[0].width,Je[0].height,le.depth);for(let Z=0,re=Je.length;Z<re;Z++)if(Re=Je[Z],w.format!==Jt)if(Ae!==null)if(He){if(O)if(w.layerUpdates.size>0){const Ee=Ah(Re.width,Re.height,w.format,w.type);for(const we of w.layerUpdates){const je=Re.data.subarray(we*Ee/Re.data.BYTES_PER_ELEMENT,(we+1)*Ee/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,we,Re.width,Re.height,1,Ae,je)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Re.width,Re.height,le.depth,Ae,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Be,Re.width,Re.height,le.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,Re.width,Re.height,le.depth,Ae,Oe,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Be,Re.width,Re.height,le.depth,0,Ae,Oe,Re.data)}else{He&&tt&&t.texStorage2D(i.TEXTURE_2D,be,Be,Je[0].width,Je[0].height);for(let Z=0,re=Je.length;Z<re;Z++)Re=Je[Z],w.format!==Jt?Ae!==null?He?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Be,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Re.width,Re.height,Ae,Oe,Re.data):t.texImage2D(i.TEXTURE_2D,Z,Be,Re.width,Re.height,0,Ae,Oe,Re.data)}else if(w.isDataArrayTexture)if(He){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Be,le.width,le.height,le.depth),O)if(w.layerUpdates.size>0){const Z=Ah(le.width,le.height,w.format,w.type);for(const re of w.layerUpdates){const Ee=le.data.subarray(re*Z/le.data.BYTES_PER_ELEMENT,(re+1)*Z/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,le.width,le.height,1,Ae,Oe,Ee)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ae,Oe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,le.width,le.height,le.depth,0,Ae,Oe,le.data);else if(w.isData3DTexture)He?(tt&&t.texStorage3D(i.TEXTURE_3D,be,Be,le.width,le.height,le.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ae,Oe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Be,le.width,le.height,le.depth,0,Ae,Oe,le.data);else if(w.isFramebufferTexture){if(tt)if(He)t.texStorage2D(i.TEXTURE_2D,be,Be,le.width,le.height);else{let Z=le.width,re=le.height;for(let Ee=0;Ee<be;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Be,Z,re,0,Ae,Oe,null),Z>>=1,re>>=1}}else if(Je.length>0){if(He&&tt){const Z=Me(Je[0]);t.texStorage2D(i.TEXTURE_2D,be,Be,Z.width,Z.height)}for(let Z=0,re=Je.length;Z<re;Z++)Re=Je[Z],He?O&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ae,Oe,Re):t.texImage2D(i.TEXTURE_2D,Z,Be,Ae,Oe,Re);w.generateMipmaps=!1}else if(He){if(tt){const Z=Me(le);t.texStorage2D(i.TEXTURE_2D,be,Be,Z.width,Z.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Oe,le)}else t.texImage2D(i.TEXTURE_2D,0,Be,Ae,Oe,le);m(w)&&f(J),Pe.__version=Q.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function $(P,w,X){if(w.image.length!==6)return;const J=ne(P,w),oe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const Q=n.get(oe);if(oe.version!==Q.__version||J===!0){t.activeTexture(i.TEXTURE0+X);const Pe=Ze.getPrimaries(Ze.workingColorSpace),ge=w.colorSpace===Jn?null:Ze.getPrimaries(w.colorSpace),ye=w.colorSpace===Jn||Pe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const We=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let re=0;re<6;re++)!We&&!le?Ae[re]=b(w.image[re],!0,s.maxCubemapSize):Ae[re]=le?w.image[re].image:w.image[re],Ae[re]=Fe(w,Ae[re]);const Oe=Ae[0],Be=r.convert(w.format,w.colorSpace),Re=r.convert(w.type),Je=v(w.internalFormat,Be,Re,w.colorSpace),He=w.isVideoTexture!==!0,tt=Q.__version===void 0||J===!0,O=oe.dataReady;let be=E(w,Oe);j(i.TEXTURE_CUBE_MAP,w);let Z;if(We){He&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Je,Oe.width,Oe.height);for(let re=0;re<6;re++){Z=Ae[re].mipmaps;for(let Ee=0;Ee<Z.length;Ee++){const we=Z[Ee];w.format!==Jt?Be!==null?He?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,we.width,we.height,Be,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,Je,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,0,0,we.width,we.height,Be,Re,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee,Je,we.width,we.height,0,Be,Re,we.data)}}}else{if(Z=w.mipmaps,He&&tt){Z.length>0&&be++;const re=Me(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,Je,re.width,re.height)}for(let re=0;re<6;re++)if(le){He?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae[re].width,Ae[re].height,Be,Re,Ae[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,Ae[re].width,Ae[re].height,0,Be,Re,Ae[re].data);for(let Ee=0;Ee<Z.length;Ee++){const je=Z[Ee].image[re].image;He?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,je.width,je.height,Be,Re,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,Je,je.width,je.height,0,Be,Re,je.data)}}else{He?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Be,Re,Ae[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,Be,Re,Ae[re]);for(let Ee=0;Ee<Z.length;Ee++){const we=Z[Ee];He?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,0,0,Be,Re,we.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ee+1,Je,Be,Re,we.image[re])}}}m(w)&&f(i.TEXTURE_CUBE_MAP),Q.__version=oe.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ue(P,w,X,J,oe,Q){const Pe=r.convert(X.format,X.colorSpace),ge=r.convert(X.type),ye=v(X.internalFormat,Pe,ge,X.colorSpace),We=n.get(w),le=n.get(X);if(le.__renderTarget=w,!We.__hasExternalTextures){const Ae=Math.max(1,w.width>>Q),Oe=Math.max(1,w.height>>Q);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,Q,ye,Ae,Oe,w.depth,0,Pe,ge,null):t.texImage2D(oe,Q,ye,Ae,Oe,0,Pe,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),xe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,oe,le.__webglTexture,0,ae(w)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,oe,le.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(P,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const J=w.depthTexture,oe=J&&J.isDepthTexture?J.type:null,Q=_(w.stencilBuffer,oe),Pe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=ae(w);xe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,Q,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,P)}else{const J=w.textures;for(let oe=0;oe<J.length;oe++){const Q=J[oe],Pe=r.convert(Q.format,Q.colorSpace),ge=r.convert(Q.type),ye=v(Q.internalFormat,Pe,ge,Q.colorSpace),We=ae(w);X&&xe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,ye,w.width,w.height):xe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,ye,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ye,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const oe=J.__webglTexture,Q=ae(w);if(w.depthTexture.format===ps)xe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(w.depthTexture.format===Hi)xe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ce(P){const w=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const J=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const oe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",oe)};J.addEventListener("dispose",oe),w.__depthDisposeCallback=oe}w.__boundDepthTexture=J}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");me(w.__webglFramebuffer,P)}else if(X){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),se(w.__webglDepthbuffer[J],P,!1);else{const oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),se(w.__webglDepthbuffer,P,!1);else{const J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(P,w,X){const J=n.get(P);w!==void 0&&ue(J.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ce(P)}function Xe(P){const w=P.texture,X=n.get(P),J=n.get(w);P.addEventListener("dispose",T);const oe=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Pe=oe.length>1;if(Pe||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,o.memory.textures++),Q){X.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[ge]=[];for(let ye=0;ye<w.mipmaps.length;ye++)X.__webglFramebuffer[ge][ye]=i.createFramebuffer()}else X.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ge=0;ge<w.mipmaps.length;ge++)X.__webglFramebuffer[ge]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ge=0,ye=oe.length;ge<ye;ge++){const We=n.get(oe[ge]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&xe(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ge=0;ge<oe.length;ge++){const ye=oe[ge];X.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ge]);const We=r.convert(ye.format,ye.colorSpace),le=r.convert(ye.type),Ae=v(ye.internalFormat,We,le,ye.colorSpace,P.isXRRenderTarget===!0),Oe=ae(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ae,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,X.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),se(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),j(i.TEXTURE_CUBE_MAP,w);for(let ge=0;ge<6;ge++)if(w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)ue(X.__webglFramebuffer[ge][ye],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else ue(X.__webglFramebuffer[ge],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(w)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ge=0,ye=oe.length;ge<ye;ge++){const We=oe[ge],le=n.get(We);t.bindTexture(i.TEXTURE_2D,le.__webglTexture),j(i.TEXTURE_2D,We),ue(X.__webglFramebuffer,P,We,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,0),m(We)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,J.__webglTexture),j(ge,w),w.mipmaps&&w.mipmaps.length>0)for(let ye=0;ye<w.mipmaps.length;ye++)ue(X.__webglFramebuffer[ye],P,w,i.COLOR_ATTACHMENT0,ge,ye);else ue(X.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,ge,0);m(w)&&f(ge),t.unbindTexture()}P.depthBuffer&&Ce(P)}function te(P){const w=P.textures;for(let X=0,J=w.length;X<J;X++){const oe=w[X];if(m(oe)){const Q=x(P),Pe=n.get(oe).__webglTexture;t.bindTexture(Q,Pe),f(Q),t.unbindTexture()}}}const ce=[],D=[];function Te(P){if(P.samples>0){if(xe(P)===!1){const w=P.textures,X=P.width,J=P.height;let oe=i.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(P),ge=w.length>1;if(ge)for(let ye=0;ye<w.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ye=0;ye<w.length;ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);const We=n.get(w[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,X,J,0,0,X,J,oe,i.NEAREST),c===!0&&(ce.length=0,D.length=0,ce.push(i.COLOR_ATTACHMENT0+ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ce.push(Q),D.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let ye=0;ye<w.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);const We=n.get(w[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ae(P){return Math.min(s.maxSamples,P.samples)}function xe(P){const w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function de(P){const w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function Fe(P,w){const X=P.colorSpace,J=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==It&&X!==Jn&&(Ze.getTransfer(X)===ct?(J!==Jt||oe!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function Me(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=G,this.setTextureCube=F,this.rebindTextures=Le,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=xe}function Zb(i,e){function t(n,s=Jn){let r;const o=Ze.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ju)return i.BYTE;if(n===qu)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===Vc)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===$t)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===Ku)return i.ALPHA;if(n===Zu)return i.RGB;if(n===Jt)return i.RGBA;if(n===$u)return i.LUMINANCE;if(n===Ju)return i.LUMINANCE_ALPHA;if(n===ps)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===jc)return i.RED;if(n===qc)return i.RED_INTEGER;if(n===Qu)return i.RG;if(n===Yc)return i.RG_INTEGER;if(n===Kc)return i.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ja||n===qa||n===Ya||n===Ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===$a||n===Ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===$a)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mo||n===fc||n===pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mo)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ed||n===mc||n===gc||n===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class $b extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Et extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jb={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),f=this._getHandJoint(l,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
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

}`;class t_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new At,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bt({vertexShader:Qb,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new he(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n_ extends Wi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null;const b=new t_,m=t.getContextAttributes();let f=null,x=null;const v=[],_=[],E=new ie;let R=null;const T=new Wt;T.viewport=new it;const C=new Wt;C.viewport=new it;const M=[T,C],y=new $b;let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=v[V];return $===void 0&&($=new ha,v[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=v[V];return $===void 0&&($=new ha,v[V]=$),$.getGripSpace()},this.getHand=function(V){let $=v[V];return $===void 0&&($=new ha,v[V]=$),$.getHandSpace()};function I(V){const $=_.indexOf(V.inputSource);if($===-1)return;const ue=v[$];ue!==void 0&&(ue.update(V.inputSource,V.frame,l||o),ue.dispatchEvent({type:V.type,data:V.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let V=0;V<v.length;V++){const $=_[V];$!==null&&(_[V]=null,v[V].disconnect($))}A=null,N=null,b.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,x=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Sn(p.framebufferWidth,p.framebufferHeight,{format:Jt,type:In,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ue=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?Hi:ps,ue=m.stencil?Bi:zi);const me={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Sn(d.textureWidth,d.textureHeight,{format:Jt,type:In,depthTexture:new tl(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function z(V){for(let $=0;$<V.removed.length;$++){const ue=V.removed[$],se=_.indexOf(ue);se>=0&&(_[se]=null,v[se].disconnect(ue))}for(let $=0;$<V.added.length;$++){const ue=V.added[$];let se=_.indexOf(ue);if(se===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=_.length){_.push(ue),se=Ce;break}else if(_[Ce]===null){_[Ce]=ue,se=Ce;break}if(se===-1)break}const me=v[se];me&&me.connect(ue)}}const k=new L,G=new L;function F(V,$,ue){k.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(ue.matrixWorld);const se=k.distanceTo(G),me=$.projectionMatrix.elements,Ce=ue.projectionMatrix.elements,Le=me[14]/(me[10]-1),Xe=me[14]/(me[10]+1),te=(me[9]+1)/me[5],ce=(me[9]-1)/me[5],D=(me[8]-1)/me[0],Te=(Ce[8]+1)/Ce[0],ae=Le*D,xe=Le*Te,de=se/(-D+Te),Fe=de*-D;if($.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Fe),V.translateZ(de),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),me[10]===-1)V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Me=Le+de,P=Xe+de,w=ae-Fe,X=xe+(se-Fe),J=te*Xe/P*Me,oe=ce*Xe/P*Me;V.projectionMatrix.makePerspective(w,X,J,oe,Me,P),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function W(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let $=V.near,ue=V.far;b.texture!==null&&(b.depthNear>0&&($=b.depthNear),b.depthFar>0&&(ue=b.depthFar)),y.near=C.near=T.near=$,y.far=C.far=T.far=ue,(A!==y.near||N!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,N=y.far),T.layers.mask=V.layers.mask|2,C.layers.mask=V.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;const se=V.parent,me=y.cameras;W(y,se);for(let Ce=0;Ce<me.length;Ce++)W(me[Ce],se);me.length===2?F(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),K(V,y,se)};function K(V,$,ue){ue===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(ue.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ms*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let pe=null;function j(V,$){if(h=$.getViewerPose(l||o),g=$,h!==null){const ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let se=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let Ce=0;Ce<ue.length;Ce++){const Le=ue[Ce];let Xe=null;if(p!==null)Xe=p.getViewport(Le);else{const ce=u.getViewSubImage(d,Le);Xe=ce.viewport,Ce===0&&(e.setRenderTargetTextures(x,ce.colorTexture,d.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(x))}let te=M[Ce];te===void 0&&(te=new Wt,te.layers.enable(Ce),te.viewport=new it,M[Ce]=te),te.matrix.fromArray(Le.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Le.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Ce===0&&(y.matrix.copy(te.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),se===!0&&y.cameras.push(te)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")){const Ce=u.getDepthInformation(ue[0]);Ce&&Ce.isValid&&Ce.texture&&b.init(e,Ce,s.renderState)}}for(let ue=0;ue<v.length;ue++){const se=_[ue],me=v[ue];se!==null&&me!==void 0&&me.update(se,$,l||o)}pe&&pe(V,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const ne=new fd;ne.setAnimationLoop(j),this.setAnimationLoop=function(V){pe=V},this.dispose=function(){}}}const Pi=new En,i_=new ze;function s_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,hd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,x,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,x,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===jt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===jt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),v=x.envMap,_=x.envMapRotation;v&&(m.envMap.value=v,Pi.copy(_),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(Pi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===jt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const _=v.program;n.uniformBlockBinding(x,_)}function l(x,v){let _=s[x.id];_===void 0&&(g(x),_=h(x),s[x.id]=_,x.addEventListener("dispose",m));const E=v.program;n.updateUBOMapping(x,E);const R=e.render.frame;r[x.id]!==R&&(d(x),r[x.id]=R)}function h(x){const v=u();x.__bindingPointIndex=v;const _=i.createBuffer(),E=x.__size,R=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],_=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,T=_.length;R<T;R++){const C=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,y=C.length;M<y;M++){const A=C[M];if(p(A,R,M,E)===!0){const N=A.__offset,I=Array.isArray(A.value)?A.value:[A.value];let U=0;for(let z=0;z<I.length;z++){const k=I[z],G=b(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+U,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,U),U+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,v,_,E){const R=x.value,T=v+"_"+_;if(E[T]===void 0)return typeof R=="number"||typeof R=="boolean"?E[T]=R:E[T]=R.clone(),!0;{const C=E[T];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return E[T]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(x){const v=x.uniforms;let _=0;const E=16;for(let T=0,C=v.length;T<C;T++){const M=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,A=M.length;y<A;y++){const N=M[y],I=Array.isArray(N.value)?N.value:[N.value];for(let U=0,z=I.length;U<z;U++){const k=I[U],G=b(k),F=_%E,W=F%G.boundary,K=F+W;_+=W,K!==0&&E-K<G.storage&&(_+=E-K),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=G.storage}}}const R=_%E;return R>0&&(_+=E-R),x.__size=_,x.__cache={},this}function b(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class o_{constructor(e={}){const{canvas:t=jf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,f=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this.toneMapping=_i,this.toneMappingExposure=1;const _=this;let E=!1,R=0,T=0,C=null,M=-1,y=null;const A=new it,N=new it;let I=null;const U=new De(0);let z=0,k=t.width,G=t.height,F=1,W=null,K=null;const pe=new it(0,0,k,G),j=new it(0,0,k,G);let ne=!1;const V=new Qc;let $=!1,ue=!1;const se=new ze,me=new ze,Ce=new L,Le=new it,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function ce(){return C===null?F:1}let D=n;function Te(S,B){return t.getContext(S,B)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",we,!1),D===null){const B="webgl2";if(D=Te(B,S),D===null)throw Te(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ae,xe,de,Fe,Me,P,w,X,J,oe,Q,Pe,ge,ye,We,le,Ae,Oe,Be,Re,Je,He,tt,O;function be(){ae=new ug(D),ae.init(),He=new Zb(D,ae),xe=new rg(D,ae,e,He),de=new qb(D,ae),xe.reverseDepthBuffer&&d&&de.buffers.depth.setReversed(!0),Fe=new pg(D),Me=new Db,P=new Kb(D,ae,de,Me,xe,He,Fe),w=new ag(_),X=new hg(_),J=new yp(D),tt=new ig(D,J),oe=new dg(D,J,Fe,tt),Q=new gg(D,oe,J,Fe),Be=new mg(D,xe,P),le=new og(Me),Pe=new Lb(_,w,X,ae,xe,tt,le),ge=new s_(_,Me),ye=new Nb,We=new Bb(ae),Oe=new ng(_,w,X,de,Q,p,c),Ae=new Xb(_,Q,xe),O=new r_(D,Fe,xe,de),Re=new sg(D,ae,Fe),Je=new fg(D,ae,Fe),Fe.programs=Pe.programs,_.capabilities=xe,_.extensions=ae,_.properties=Me,_.renderLists=ye,_.shadowMap=Ae,_.state=de,_.info=Fe}be();const Z=new n_(_,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(k,G,!1))},this.getSize=function(S){return S.set(k,G)},this.setSize=function(S,B,q=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,G=B,t.width=Math.floor(S*F),t.height=Math.floor(B*F),q===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(k*F,G*F).floor()},this.setDrawingBufferSize=function(S,B,q){k=S,G=B,F=q,t.width=Math.floor(S*q),t.height=Math.floor(B*q),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(pe)},this.setViewport=function(S,B,q,Y){S.isVector4?pe.set(S.x,S.y,S.z,S.w):pe.set(S,B,q,Y),de.viewport(A.copy(pe).multiplyScalar(F).round())},this.getScissor=function(S){return S.copy(j)},this.setScissor=function(S,B,q,Y){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,B,q,Y),de.scissor(N.copy(j).multiplyScalar(F).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(S){de.setScissorTest(ne=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){K=S},this.getClearColor=function(S){return S.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(S=!0,B=!0,q=!0){let Y=0;if(S){let H=!1;if(C!==null){const fe=C.texture.format;H=fe===Kc||fe===Yc||fe===qc}if(H){const fe=C.texture.type,Se=fe===In||fe===zi||fe===cr||fe===Bi||fe===Wc||fe===Xc,Ie=Oe.getClearColor(),Ne=Oe.getClearAlpha(),Ge=Ie.r,qe=Ie.g,ke=Ie.b;Se?(g[0]=Ge,g[1]=qe,g[2]=ke,g[3]=Ne,D.clearBufferuiv(D.COLOR,0,g)):(b[0]=Ge,b[1]=qe,b[2]=ke,b[3]=Ne,D.clearBufferiv(D.COLOR,0,b))}else Y|=D.COLOR_BUFFER_BIT}B&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",we,!1),ye.dispose(),We.dispose(),Me.dispose(),w.dispose(),X.dispose(),Q.dispose(),tt.dispose(),O.dispose(),Pe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",xl),Z.removeEventListener("sessionend",vl),Si.stop()};function re(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=Fe.autoReset,B=Ae.enabled,q=Ae.autoUpdate,Y=Ae.needsUpdate,H=Ae.type;be(),Fe.autoReset=S,Ae.enabled=B,Ae.autoUpdate=q,Ae.needsUpdate=Y,Ae.type=H}function we(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function je(S){const B=S.target;B.removeEventListener("dispose",je),yt(B)}function yt(S){Ft(S),Me.remove(S)}function Ft(S){const B=Me.get(S).programs;B!==void 0&&(B.forEach(function(q){Pe.releaseProgram(q)}),S.isShaderMaterial&&Pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,q,Y,H,fe){B===null&&(B=Xe);const Se=H.isMesh&&H.matrixWorld.determinant()<0,Ie=Yd(S,B,q,Y,H);de.setMaterial(Y,Se);let Ne=q.index,Ge=1;if(Y.wireframe===!0){if(Ne=oe.getWireframeAttribute(q),Ne===void 0)return;Ge=2}const qe=q.drawRange,ke=q.attributes.position;let nt=qe.start*Ge,ft=(qe.start+qe.count)*Ge;fe!==null&&(nt=Math.max(nt,fe.start*Ge),ft=Math.min(ft,(fe.start+fe.count)*Ge)),Ne!==null?(nt=Math.max(nt,0),ft=Math.min(ft,Ne.count)):ke!=null&&(nt=Math.max(nt,0),ft=Math.min(ft,ke.count));const pt=ft-nt;if(pt<0||pt===1/0)return;tt.setup(H,Y,Ie,q,Ne);let Yt,st=Re;if(Ne!==null&&(Yt=J.get(Ne),st=Je,st.setIndex(Yt)),H.isMesh)Y.wireframe===!0?(de.setLineWidth(Y.wireframeLinewidth*ce()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(H.isLine){let Ue=Y.linewidth;Ue===void 0&&(Ue=1),de.setLineWidth(Ue*ce()),H.isLineSegments?st.setMode(D.LINES):H.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else H.isPoints?st.setMode(D.POINTS):H.isSprite&&st.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)st.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))st.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ue=H._multiDrawStarts,Gn=H._multiDrawCounts,rt=H._multiDrawCount,mn=Ne?J.get(Ne).bytesPerElement:1,Xi=Me.get(Y).currentProgram.getUniforms();for(let en=0;en<rt;en++)Xi.setValue(D,"_gl_DrawID",en),st.render(Ue[en]/mn,Gn[en])}else if(H.isInstancedMesh)st.renderInstances(nt,pt,H.count);else if(q.isInstancedBufferGeometry){const Ue=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Gn=Math.min(q.instanceCount,Ue);st.renderInstances(nt,pt,Gn)}else st.render(nt,pt)};function at(S,B,q){S.transparent===!0&&S.side===Zt&&S.forceSinglePass===!1?(S.side=jt,S.needsUpdate=!0,Er(S,B,q),S.side=ii,S.needsUpdate=!0,Er(S,B,q),S.side=Zt):Er(S,B,q)}this.compile=function(S,B,q=null){q===null&&(q=S),f=We.get(q),f.init(B),v.push(f),q.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),S!==q&&S.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();const Y=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const fe=H.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const Ie=fe[Se];at(Ie,q,H),Y.add(Ie)}else at(fe,q,H),Y.add(fe)}),v.pop(),f=null,Y},this.compileAsync=function(S,B,q=null){const Y=this.compile(S,B,q);return new Promise(H=>{function fe(){if(Y.forEach(function(Se){Me.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){H(S);return}setTimeout(fe,10)}ae.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let pn=null;function Hn(S){pn&&pn(S)}function xl(){Si.stop()}function vl(){Si.start()}const Si=new fd;Si.setAnimationLoop(Hn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(S){pn=S,Z.setAnimationLoop(S),S===null?Si.stop():Si.start()},Z.addEventListener("sessionstart",xl),Z.addEventListener("sessionend",vl),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,B,C),f=We.get(S,v.length),f.init(B),v.push(f),me.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V.setFromProjectionMatrix(me),ue=this.localClippingEnabled,$=le.init(this.clippingPlanes,ue),m=ye.get(S,x.length),m.init(),x.push(m),Z.enabled===!0&&Z.isPresenting===!0){const fe=_.xr.getDepthSensingMesh();fe!==null&&Uo(fe,B,-1/0,_.sortObjects)}Uo(S,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(W,K),te=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,te&&Oe.addToRenderList(m,S),this.info.render.frame++,$===!0&&le.beginShadows();const q=f.state.shadowsArray;Ae.render(q,S,B),$===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,H=m.transmissive;if(f.setupLights(),B.isArrayCamera){const fe=B.cameras;if(H.length>0)for(let Se=0,Ie=fe.length;Se<Ie;Se++){const Ne=fe[Se];Ml(Y,H,S,Ne)}te&&Oe.render(S);for(let Se=0,Ie=fe.length;Se<Ie;Se++){const Ne=fe[Se];yl(m,S,Ne,Ne.viewport)}}else H.length>0&&Ml(Y,H,S,B),te&&Oe.render(S),yl(m,S,B);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(_,S,B),tt.resetDefaultState(),M=-1,y=null,v.pop(),v.length>0?(f=v[v.length-1],$===!0&&le.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Uo(S,B,q,Y){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){Y&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const Se=Q.update(S),Ie=S.material;Ie.visible&&m.push(S,Se,Ie,q,Le.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||V.intersectsObject(S))){const Se=Q.update(S),Ie=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Le.copy(Se.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(Ie)){const Ne=Se.groups;for(let Ge=0,qe=Ne.length;Ge<qe;Ge++){const ke=Ne[Ge],nt=Ie[ke.materialIndex];nt&&nt.visible&&m.push(S,Se,nt,q,Le.z,ke)}}else Ie.visible&&m.push(S,Se,Ie,q,Le.z,null)}}const fe=S.children;for(let Se=0,Ie=fe.length;Se<Ie;Se++)Uo(fe[Se],B,q,Y)}function yl(S,B,q,Y){const H=S.opaque,fe=S.transmissive,Se=S.transparent;f.setupLightsView(q),$===!0&&le.setGlobalState(_.clippingPlanes,q),Y&&de.viewport(A.copy(Y)),H.length>0&&Sr(H,B,q),fe.length>0&&Sr(fe,B,q),Se.length>0&&Sr(Se,B,q),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ml(S,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new Sn(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?rn:In,minFilter:Dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const fe=f.state.transmissionRenderTarget[Y.id],Se=Y.viewport||A;fe.setSize(Se.z,Se.w);const Ie=_.getRenderTarget();_.setRenderTarget(fe),_.getClearColor(U),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear(),te&&Oe.render(q);const Ne=_.toneMapping;_.toneMapping=_i;const Ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),$===!0&&le.setGlobalState(_.clippingPlanes,Y),Sr(S,q,Y),P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe),ae.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ke=0,nt=B.length;ke<nt;ke++){const ft=B[ke],pt=ft.object,Yt=ft.geometry,st=ft.material,Ue=ft.group;if(st.side===Zt&&pt.layers.test(Y.layers)){const Gn=st.side;st.side=jt,st.needsUpdate=!0,wl(pt,q,Y,Yt,st,Ue),st.side=Gn,st.needsUpdate=!0,qe=!0}}qe===!0&&(P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe))}_.setRenderTarget(Ie),_.setClearColor(U,z),Ge!==void 0&&(Y.viewport=Ge),_.toneMapping=Ne}function Sr(S,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let H=0,fe=S.length;H<fe;H++){const Se=S[H],Ie=Se.object,Ne=Se.geometry,Ge=Y===null?Se.material:Y,qe=Se.group;Ie.layers.test(q.layers)&&wl(Ie,B,q,Ne,Ge,qe)}}function wl(S,B,q,Y,H,fe){S.onBeforeRender(_,B,q,Y,H,fe),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(_,B,q,Y,S,fe),H.transparent===!0&&H.side===Zt&&H.forceSinglePass===!1?(H.side=jt,H.needsUpdate=!0,_.renderBufferDirect(q,B,Y,H,S,fe),H.side=ii,H.needsUpdate=!0,_.renderBufferDirect(q,B,Y,H,S,fe),H.side=Zt):_.renderBufferDirect(q,B,Y,H,S,fe),S.onAfterRender(_,B,q,Y,H,fe)}function Er(S,B,q){B.isScene!==!0&&(B=Xe);const Y=Me.get(S),H=f.state.lights,fe=f.state.shadowsArray,Se=H.state.version,Ie=Pe.getParameters(S,H.state,fe,B,q),Ne=Pe.getProgramCacheKey(Ie);let Ge=Y.programs;Y.environment=S.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(S.isMeshStandardMaterial?X:w).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ge===void 0&&(S.addEventListener("dispose",je),Ge=new Map,Y.programs=Ge);let qe=Ge.get(Ne);if(qe!==void 0){if(Y.currentProgram===qe&&Y.lightsStateVersion===Se)return El(S,Ie),qe}else Ie.uniforms=Pe.getUniforms(S),S.onBeforeCompile(Ie,_),qe=Pe.acquireProgram(Ie,Ne),Ge.set(Ne,qe),Y.uniforms=Ie.uniforms;const ke=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ke.clippingPlanes=le.uniform),El(S,Ie),Y.needsLights=Zd(S),Y.lightsStateVersion=Se,Y.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMap.value=H.state.directionalShadowMap,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotShadowMap.value=H.state.spotShadowMap,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMap.value=H.state.pointShadowMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=qe,Y.uniformsList=null,qe}function Sl(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=go.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function El(S,B){const q=Me.get(S);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Yd(S,B,q,Y,H){B.isScene!==!0&&(B=Xe),P.resetTextureUnits();const fe=B.fog,Se=Y.isMeshStandardMaterial?B.environment:null,Ie=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:It,Ne=(Y.isMeshStandardMaterial?X:w).get(Y.envMap||Se),Ge=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,ft=!!q.morphAttributes.color;let pt=_i;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=_.toneMapping);const Yt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,st=Yt!==void 0?Yt.length:0,Ue=Me.get(Y),Gn=f.state.lights;if($===!0&&(ue===!0||S!==y)){const an=S===y&&Y.id===M;le.setState(Y,S,an)}let rt=!1;Y.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Gn.state.version||Ue.outputColorSpace!==Ie||H.isBatchedMesh&&Ue.batching===!1||!H.isBatchedMesh&&Ue.batching===!0||H.isBatchedMesh&&Ue.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ue.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ue.instancing===!1||!H.isInstancedMesh&&Ue.instancing===!0||H.isSkinnedMesh&&Ue.skinning===!1||!H.isSkinnedMesh&&Ue.skinning===!0||H.isInstancedMesh&&Ue.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ue.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ue.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ue.instancingMorph===!1&&H.morphTexture!==null||Ue.envMap!==Ne||Y.fog===!0&&Ue.fog!==fe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==le.numPlanes||Ue.numIntersection!==le.numIntersection)||Ue.vertexAlphas!==Ge||Ue.vertexTangents!==qe||Ue.morphTargets!==ke||Ue.morphNormals!==nt||Ue.morphColors!==ft||Ue.toneMapping!==pt||Ue.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Ue.__version=Y.version);let mn=Ue.currentProgram;rt===!0&&(mn=Er(Y,B,H));let Xi=!1,en=!1,ks=!1;const mt=mn.getUniforms(),Tn=Ue.uniforms;if(de.useProgram(mn.program)&&(Xi=!0,en=!0,ks=!0),Y.id!==M&&(M=Y.id,en=!0),Xi||y!==S){de.buffers.depth.getReversed()?(se.copy(S.projectionMatrix),Yf(se),Kf(se),mt.setValue(D,"projectionMatrix",se)):mt.setValue(D,"projectionMatrix",S.projectionMatrix),mt.setValue(D,"viewMatrix",S.matrixWorldInverse);const si=mt.map.cameraPosition;si!==void 0&&si.setValue(D,Ce.setFromMatrixPosition(S.matrixWorld)),xe.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,en=!0,ks=!0)}if(H.isSkinnedMesh){mt.setOptional(D,H,"bindMatrix"),mt.setOptional(D,H,"bindMatrixInverse");const an=H.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),mt.setValue(D,"boneTexture",an.boneTexture,P))}H.isBatchedMesh&&(mt.setOptional(D,H,"batchingTexture"),mt.setValue(D,"batchingTexture",H._matricesTexture,P),mt.setOptional(D,H,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",H._indirectTexture,P),mt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",H._colorsTexture,P));const Us=q.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&Be.update(H,q,mn),(en||Ue.receiveShadow!==H.receiveShadow)&&(Ue.receiveShadow=H.receiveShadow,mt.setValue(D,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Tn.envMap.value=Ne,Tn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Tn.envMapIntensity.value=B.environmentIntensity),en&&(mt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&Kd(Tn,ks),fe&&Y.fog===!0&&ge.refreshFogUniforms(Tn,fe),ge.refreshMaterialUniforms(Tn,Y,F,G,f.state.transmissionRenderTarget[S.id]),go.upload(D,Sl(Ue),Tn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(go.upload(D,Sl(Ue),Tn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(D,"center",H.center),mt.setValue(D,"modelViewMatrix",H.modelViewMatrix),mt.setValue(D,"normalMatrix",H.normalMatrix),mt.setValue(D,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const an=Y.uniformsGroups;for(let si=0,ri=an.length;si<ri;si++){const Tl=an[si];O.update(Tl,mn),O.bind(Tl,mn)}}return mn}function Kd(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Zd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,B,q){Me.get(S.texture).__webglTexture=B,Me.get(S.depthTexture).__webglTexture=q;const Y=Me.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,B){const q=Me.get(S);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,q=0){C=S,R=B,T=q;let Y=!0,H=null,fe=!1,Se=!1;if(S){const Ne=Me.get(S);if(Ne.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Ne.__webglFramebuffer===void 0)P.setupRenderTarget(S);else if(Ne.__hasExternalTextures)P.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ke=S.depthTexture;if(Ne.__boundDepthTexture!==ke){if(ke!==null&&Me.has(ke)&&(S.width!==ke.image.width||S.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(S)}}const Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Se=!0);const qe=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qe[B])?H=qe[B][q]:H=qe[B],fe=!0):S.samples>0&&P.useMultisampledRTT(S)===!1?H=Me.get(S).__webglMultisampledFramebuffer:Array.isArray(qe)?H=qe[q]:H=qe,A.copy(S.viewport),N.copy(S.scissor),I=S.scissorTest}else A.copy(pe).multiplyScalar(F).floor(),N.copy(j).multiplyScalar(F).floor(),I=ne;if(de.bindFramebuffer(D.FRAMEBUFFER,H)&&Y&&de.drawBuffers(S,H),de.viewport(A),de.scissor(N),de.setScissorTest(I),fe){const Ne=Me.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ne.__webglTexture,q)}else if(Se){const Ne=Me.get(S.texture),Ge=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.__webglTexture,q||0,Ge)}M=-1},this.readRenderTargetPixels=function(S,B,q,Y,H,fe,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ie=Ie[Se]),Ie){de.bindFramebuffer(D.FRAMEBUFFER,Ie);try{const Ne=S.texture,Ge=Ne.format,qe=Ne.type;if(!xe.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-Y&&q>=0&&q<=S.height-H&&D.readPixels(B,q,Y,H,He.convert(Ge),He.convert(qe),fe)}finally{const Ne=C!==null?Me.get(C).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,B,q,Y,H,fe,Se){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ie=Ie[Se]),Ie){const Ne=S.texture,Ge=Ne.format,qe=Ne.type;if(!xe.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=S.width-Y&&q>=0&&q<=S.height-H){de.bindFramebuffer(D.FRAMEBUFFER,Ie);const ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.bufferData(D.PIXEL_PACK_BUFFER,fe.byteLength,D.STREAM_READ),D.readPixels(B,q,Y,H,He.convert(Ge),He.convert(qe),0);const nt=C!==null?Me.get(C).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,nt);const ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await qf(D,ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,fe),D.deleteBuffer(ke),D.deleteSync(ft),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,B=null,q=0){S.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1]);const Y=Math.pow(2,-q),H=Math.floor(S.image.width*Y),fe=Math.floor(S.image.height*Y),Se=B!==null?B.x:0,Ie=B!==null?B.y:0;P.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Se,Ie,H,fe),de.unbindTexture()},this.copyTextureToTexture=function(S,B,q=null,Y=null,H=0){S.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,S=arguments[1],B=arguments[2],H=arguments[3]||0,q=null);let fe,Se,Ie,Ne,Ge,qe,ke,nt,ft;const pt=S.isCompressedTexture?S.mipmaps[H]:S.image;q!==null?(fe=q.max.x-q.min.x,Se=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,Ge=q.min.y,qe=q.isBox3?q.min.z:0):(fe=pt.width,Se=pt.height,Ie=pt.depth||1,Ne=0,Ge=0,qe=0),Y!==null?(ke=Y.x,nt=Y.y,ft=Y.z):(ke=0,nt=0,ft=0);const Yt=He.convert(B.format),st=He.convert(B.type);let Ue;B.isData3DTexture?(P.setTexture3D(B,0),Ue=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(P.setTexture2DArray(B,0),Ue=D.TEXTURE_2D_ARRAY):(P.setTexture2D(B,0),Ue=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const Gn=D.getParameter(D.UNPACK_ROW_LENGTH),rt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mn=D.getParameter(D.UNPACK_SKIP_PIXELS),Xi=D.getParameter(D.UNPACK_SKIP_ROWS),en=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ne),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe);const ks=S.isDataArrayTexture||S.isData3DTexture,mt=B.isDataArrayTexture||B.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const Tn=Me.get(S),Us=Me.get(B),an=Me.get(Tn.__renderTarget),si=Me.get(Us.__renderTarget);de.bindFramebuffer(D.READ_FRAMEBUFFER,an.__webglFramebuffer),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let ri=0;ri<Ie;ri++)ks&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(S).__webglTexture,H,qe+ri),S.isDepthTexture?(mt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(B).__webglTexture,H,ft+ri),D.blitFramebuffer(Ne,Ge,fe,Se,ke,nt,fe,Se,D.DEPTH_BUFFER_BIT,D.NEAREST)):mt?D.copyTexSubImage3D(Ue,H,ke,nt,ft+ri,Ne,Ge,fe,Se):D.copyTexSubImage2D(Ue,H,ke,nt,ft+ri,Ne,Ge,fe,Se);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else mt?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Ue,H,ke,nt,ft,fe,Se,Ie,Yt,st,pt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(Ue,H,ke,nt,ft,fe,Se,Ie,Yt,pt.data):D.texSubImage3D(Ue,H,ke,nt,ft,fe,Se,Ie,Yt,st,pt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,H,ke,nt,fe,Se,Yt,st,pt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,H,ke,nt,pt.width,pt.height,Yt,pt.data):D.texSubImage2D(D.TEXTURE_2D,H,ke,nt,fe,Se,Yt,st,pt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Gn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,en),H===0&&B.generateMipmaps&&D.generateMipmap(Ue),de.unbindTexture()},this.copyTextureToTexture3D=function(S,B,q=null,Y=null,H=0){return S.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,S=arguments[2],B=arguments[3],H=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,B,q,Y,H)},this.initRenderTarget=function(S){Me.get(S).__webglFramebuffer===void 0&&P.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?P.setTextureCube(S,0):S.isData3DTexture?P.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?P.setTexture2DArray(S,0):P.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){R=0,T=0,C=null,de.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class gs{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new gs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _d extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class a_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xc,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new L;class nl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Rh=new L,Ch=new it,Ph=new it,c_=new L,Lh=new ze,qr=new L,ua=new On,Dh=new ze,da=new Rs;class l_ extends he{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ll,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingBox.expandByPoint(qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingSphere.expandByPoint(qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(s),e.ray.intersectsSphere(ua)!==!1&&(Dh.copy(s).invert(),da.copy(e.ray).applyMatrix4(Dh),!(this.boundingBox!==null&&da.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,da)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ll?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Ch.fromBufferAttribute(s.attributes.skinIndex,e),Ph.fromBufferAttribute(s.attributes.skinWeight,e),Rh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ph.getComponent(r);if(o!==0){const a=Ch.getComponent(r);Lh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(c_.copy(Rh).applyMatrix4(Lh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class xd extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ps extends At{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Ut,h=Ut,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ih=new ze,h_=new ze;class il{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:h_;Ih.multiplyMatrices(a,t[r]),Ih.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new il(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ps(t,e,e,Jt,$t);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new xd),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class yc extends Dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new ze,Nh=new ze,Yr=[],kh=new Fn,u_=new ze,Hs=new he,Gs=new On;class d_ extends he{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,u_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),kh.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(kh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Gs.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),e.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),Nh.multiplyMatrices(n,os),Hs.matrixWorld=Nh,Hs.raycast(e,Yr);for(let o=0,a=Yr.length;o<a;o++){const c=Yr[o];c.instanceId=r,c.object=this,t.push(c)}Yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ps(new Float32Array(s*this.count),s,this.count,jc,$t));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vd extends wn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wo=new L,So=new L,Uh=new ze,Vs=new Rs,Kr=new On,fa=new L,Fh=new L;class sl extends bt{constructor(e=new Nt,t=new vd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wo.fromBufferAttribute(t,s-1),So.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wo.distanceTo(So);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;Uh.copy(s).invert(),Vs.copy(e.ray).applyMatrix4(Uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=p,m=g-1;b<m;b+=l){const f=h.getX(b),x=h.getX(b+1),v=Zr(this,e,Vs,c,f,x);v&&t.push(v)}if(this.isLineLoop){const b=h.getX(g-1),m=h.getX(p),f=Zr(this,e,Vs,c,b,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let b=p,m=g-1;b<m;b+=l){const f=Zr(this,e,Vs,c,b,b+1);f&&t.push(f)}if(this.isLineLoop){const b=Zr(this,e,Vs,c,g-1,p);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zr(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(wo.fromBufferAttribute(o,s),So.fromBufferAttribute(o,r),t.distanceSqToSegment(wo,So,fa,Fh)>n)return;fa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(fa);if(!(c<e.near||c>e.far))return{distance:c,point:Fh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Oh=new L,zh=new L;class f_ extends sl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Oh.fromBufferAttribute(t,s),zh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Oh.distanceTo(zh);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class p_ extends sl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yd extends wn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bh=new ze,Mc=new Rs,$r=new On,Jr=new L;class m_ extends bt{constructor(e=new Nt,t=new yd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;Bh.copy(s).invert(),Mc.copy(e.ray).applyMatrix4(Bh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,b=p;g<b;g++){const m=l.getX(g);Jr.fromBufferAttribute(u,m),Hh(Jr,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,b=p;g<b;g++)Jr.fromBufferAttribute(u,g),Hh(Jr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hh(i,e,t,n,s,r,o){const a=Mc.distanceSqToPoint(i);if(a<t){const c=new L;Mc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class rl extends At{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ie:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,s=[],r=[],o=[],a=new L,c=new ze;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(St(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(St(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ol extends zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ie){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class g_ extends ol{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function al(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Qr=new L,pa=new al,ma=new al,ga=new al;class b_ extends zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Qr.subVectors(s[0],s[1]).add(s[0]),l=Qr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),b=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),pa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,m),ma.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,m),ga.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ma.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ga.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(pa.calc(c),ma.calc(c),ga.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Gh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function __(i,e){const t=1-i;return t*t*e}function x_(i,e){return 2*(1-i)*i*e}function v_(i,e){return i*i*e}function sr(i,e,t,n){return __(i,e)+x_(i,t)+v_(i,n)}function y_(i,e){const t=1-i;return t*t*t*e}function M_(i,e){const t=1-i;return 3*t*t*i*e}function w_(i,e){return 3*(1-i)*i*i*e}function S_(i,e){return i*i*i*e}function rr(i,e,t,n,s){return y_(i,e)+M_(i,t)+w_(i,n)+S_(i,s)}class Md extends zn{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(e,s.x,r.x,o.x,a.x),rr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class E_ extends zn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rr(e,s.x,r.x,o.x,a.x),rr(e,s.y,r.y,o.y,a.y),rr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wd extends zn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T_ extends zn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sd extends zn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(sr(e,s.x,r.x,o.x),sr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A_ extends zn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(sr(e,s.x,r.x,o.x),sr(e,s.y,r.y,o.y),sr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ed extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Gh(a,c.x,l.x,h.x,u.x),Gh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ie().fromArray(s))}return this}}var wc=Object.freeze({__proto__:null,ArcCurve:g_,CatmullRomCurve3:b_,CubicBezierCurve:Md,CubicBezierCurve3:E_,EllipseCurve:ol,LineCurve:wd,LineCurve3:T_,QuadraticBezierCurve:Sd,QuadraticBezierCurve3:A_,SplineCurve:Ed});class R_ extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new wc[s.type]().fromJSON(s))}return this}}class Vh extends R_{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new wd(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Sd(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Md(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ed(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new ol(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class cl extends Nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,h=new ie;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class on extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const b=[],m=n/2;let f=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(p,2));function x(){const _=new L,E=new L;let R=0;const T=(t-e)/n;for(let C=0;C<=r;C++){const M=[],y=C/r,A=y*(t-e)+e;for(let N=0;N<=s;N++){const I=N/s,U=I*c+a,z=Math.sin(U),k=Math.cos(U);E.x=A*z,E.y=-y*n+m,E.z=A*k,u.push(E.x,E.y,E.z),_.set(z,T,k).normalize(),d.push(_.x,_.y,_.z),p.push(I,1-y),M.push(g++)}b.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const y=b[M][C],A=b[M+1][C],N=b[M+1][C+1],I=b[M][C+1];(e>0||M!==0)&&(h.push(y,A,I),R+=3),(t>0||M!==r-1)&&(h.push(A,N,I),R+=3)}l.addGroup(f,R,0),f+=R}function v(_){const E=g,R=new ie,T=new L;let C=0;const M=_===!0?e:t,y=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const A=g;for(let N=0;N<=s;N++){const U=N/s*c+a,z=Math.cos(U),k=Math.sin(U);T.x=M*k,T.y=m*y,T.z=M*z,u.push(T.x,T.y,T.z),d.push(0,y,0),R.x=z*.5+.5,R.y=k*.5*y+.5,p.push(R.x,R.y),g++}for(let N=0;N<s;N++){const I=E+N,U=A+N;_===!0?h.push(U,U+1,I):h.push(U+1,U,I),C+=3}l.addGroup(f,C,_===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lo extends Vh{constructor(e){super(e),this.uuid=un(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Vh().fromJSON(s))}return this}}const C_={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Td(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=N_(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return dr(r,o,t,a,c,p,0),o}};function Td(i,e,t,n,s){let r,o;if(s===X_(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Wh(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Wh(r,i[r],i[r+1],o);return o&&Do(o,o.next)&&(pr(o),o=o.next),o}function Gi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Do(t,t.next)||vt(t.prev,t,t.next)===0)){if(pr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function dr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&z_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?L_(i,n,s,r):P_(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),pr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=D_(Gi(i),e,t),dr(i,e,t,n,s,r,2)):o===2&&I_(i,e,t,n,s,r):dr(Gi(i),e,t,n,s,r,1);break}}}function P_(i){const e=i.prev,t=i,n=i.next;if(vt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&us(s,a,r,c,o,l,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function L_(i,e,t,n){const s=i.prev,r=i,o=i.next;if(vt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,b=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=Sc(p,g,e,t,n),x=Sc(b,m,e,t,n);let v=i.prevZ,_=i.nextZ;for(;v&&v.z>=f&&_&&_.z<=x;){if(v.x>=p&&v.x<=b&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&us(a,h,c,u,l,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=p&&_.x<=b&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&us(a,h,c,u,l,d,_.x,_.y)&&vt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=f;){if(v.x>=p&&v.x<=b&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&us(a,h,c,u,l,d,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=p&&_.x<=b&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&us(a,h,c,u,l,d,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function D_(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Do(s,r)&&Ad(s,n,n.next,r)&&fr(s,r)&&fr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),pr(n),pr(n.next),n=i=r),n=n.next}while(n!==i);return Gi(n)}function I_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&G_(o,a)){let c=Rd(o,a);o=Gi(o,o.next),c=Gi(c,c.next),dr(o,e,t,n,s,r,0),dr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function N_(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Td(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(H_(l));for(s.sort(k_),r=0;r<s.length;r++)t=U_(s[r],t);return t}function k_(i,e){return i.x-e.x}function U_(i,e){const t=F_(i,e);if(!t)return e;const n=Rd(t,i);return Gi(n,n.next),Gi(t,t.next)}function F_(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&us(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),fr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&O_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function O_(i,e){return vt(i.prev,i,e.prev)<0&&vt(e.next,i,i.next)<0}function z_(i,e,t,n){let s=i;do s.z===0&&(s.z=Sc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,B_(s)}function B_(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Sc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function H_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function us(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function G_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!V_(i,e)&&(fr(i,e)&&fr(e,i)&&W_(i,e)&&(vt(i.prev,i,e.prev)||vt(i,e.prev,e))||Do(i,e)&&vt(i.prev,i,i.next)>0&&vt(e.prev,e,e.next)>0)}function vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Do(i,e){return i.x===e.x&&i.y===e.y}function Ad(i,e,t,n){const s=to(vt(i,e,t)),r=to(vt(i,e,n)),o=to(vt(t,n,i)),a=to(vt(t,n,e));return!!(s!==r&&o!==a||s===0&&eo(i,t,e)||r===0&&eo(i,n,e)||o===0&&eo(t,i,n)||a===0&&eo(t,e,n))}function eo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function to(i){return i>0?1:i<0?-1:0}function V_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ad(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function fr(i,e){return vt(i.prev,i,i.next)<0?vt(i,e,i.next)>=0&&vt(i,i.prev,e)>=0:vt(i,e,i.prev)<0||vt(i,i.next,e)<0}function W_(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Rd(i,e){const t=new Ec(i.i,i.x,i.y),n=new Ec(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wh(i,e,t,n){const s=new Ec(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ec(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function X_(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class xi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return xi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Xh(e),jh(n,e);let o=e.length;t.forEach(Xh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,jh(n,t[c]);const a=C_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Xh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function jh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ll extends Nt{constructor(e=new Lo([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:j_;let v,_=!1,E,R,T,C;f&&(v=f.getSpacedPoints(h),_=!0,d=!1,E=f.computeFrenetFrames(h,!1),R=new L,T=new L,C=new L),d||(m=0,p=0,g=0,b=0);const M=a.extractPoints(l);let y=M.shape;const A=M.holes;if(!xi.isClockWise(y)){y=y.reverse();for(let te=0,ce=A.length;te<ce;te++){const D=A[te];xi.isClockWise(D)&&(A[te]=D.reverse())}}const I=xi.triangulateShape(y,A),U=y;for(let te=0,ce=A.length;te<ce;te++){const D=A[te];y=y.concat(D)}function z(te,ce,D){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ce,D)}const k=y.length,G=I.length;function F(te,ce,D){let Te,ae,xe;const de=te.x-ce.x,Fe=te.y-ce.y,Me=D.x-te.x,P=D.y-te.y,w=de*de+Fe*Fe,X=de*P-Fe*Me;if(Math.abs(X)>Number.EPSILON){const J=Math.sqrt(w),oe=Math.sqrt(Me*Me+P*P),Q=ce.x-Fe/J,Pe=ce.y+de/J,ge=D.x-P/oe,ye=D.y+Me/oe,We=((ge-Q)*P-(ye-Pe)*Me)/(de*P-Fe*Me);Te=Q+de*We-te.x,ae=Pe+Fe*We-te.y;const le=Te*Te+ae*ae;if(le<=2)return new ie(Te,ae);xe=Math.sqrt(le/2)}else{let J=!1;de>Number.EPSILON?Me>Number.EPSILON&&(J=!0):de<-Number.EPSILON?Me<-Number.EPSILON&&(J=!0):Math.sign(Fe)===Math.sign(P)&&(J=!0),J?(Te=-Fe,ae=de,xe=Math.sqrt(w)):(Te=de,ae=Fe,xe=Math.sqrt(w/2))}return new ie(Te/xe,ae/xe)}const W=[];for(let te=0,ce=U.length,D=ce-1,Te=te+1;te<ce;te++,D++,Te++)D===ce&&(D=0),Te===ce&&(Te=0),W[te]=F(U[te],U[D],U[Te]);const K=[];let pe,j=W.concat();for(let te=0,ce=A.length;te<ce;te++){const D=A[te];pe=[];for(let Te=0,ae=D.length,xe=ae-1,de=Te+1;Te<ae;Te++,xe++,de++)xe===ae&&(xe=0),de===ae&&(de=0),pe[Te]=F(D[Te],D[xe],D[de]);K.push(pe),j=j.concat(pe)}for(let te=0;te<m;te++){const ce=te/m,D=p*Math.cos(ce*Math.PI/2),Te=g*Math.sin(ce*Math.PI/2)+b;for(let ae=0,xe=U.length;ae<xe;ae++){const de=z(U[ae],W[ae],Te);se(de.x,de.y,-D)}for(let ae=0,xe=A.length;ae<xe;ae++){const de=A[ae];pe=K[ae];for(let Fe=0,Me=de.length;Fe<Me;Fe++){const P=z(de[Fe],pe[Fe],Te);se(P.x,P.y,-D)}}}const ne=g+b;for(let te=0;te<k;te++){const ce=d?z(y[te],j[te],ne):y[te];_?(T.copy(E.normals[0]).multiplyScalar(ce.x),R.copy(E.binormals[0]).multiplyScalar(ce.y),C.copy(v[0]).add(T).add(R),se(C.x,C.y,C.z)):se(ce.x,ce.y,0)}for(let te=1;te<=h;te++)for(let ce=0;ce<k;ce++){const D=d?z(y[ce],j[ce],ne):y[ce];_?(T.copy(E.normals[te]).multiplyScalar(D.x),R.copy(E.binormals[te]).multiplyScalar(D.y),C.copy(v[te]).add(T).add(R),se(C.x,C.y,C.z)):se(D.x,D.y,u/h*te)}for(let te=m-1;te>=0;te--){const ce=te/m,D=p*Math.cos(ce*Math.PI/2),Te=g*Math.sin(ce*Math.PI/2)+b;for(let ae=0,xe=U.length;ae<xe;ae++){const de=z(U[ae],W[ae],Te);se(de.x,de.y,u+D)}for(let ae=0,xe=A.length;ae<xe;ae++){const de=A[ae];pe=K[ae];for(let Fe=0,Me=de.length;Fe<Me;Fe++){const P=z(de[Fe],pe[Fe],Te);_?se(P.x,P.y+v[h-1].y,v[h-1].x+D):se(P.x,P.y,u+D)}}}V(),$();function V(){const te=s.length/3;if(d){let ce=0,D=k*ce;for(let Te=0;Te<G;Te++){const ae=I[Te];me(ae[2]+D,ae[1]+D,ae[0]+D)}ce=h+m*2,D=k*ce;for(let Te=0;Te<G;Te++){const ae=I[Te];me(ae[0]+D,ae[1]+D,ae[2]+D)}}else{for(let ce=0;ce<G;ce++){const D=I[ce];me(D[2],D[1],D[0])}for(let ce=0;ce<G;ce++){const D=I[ce];me(D[0]+k*h,D[1]+k*h,D[2]+k*h)}}n.addGroup(te,s.length/3-te,0)}function $(){const te=s.length/3;let ce=0;ue(U,ce),ce+=U.length;for(let D=0,Te=A.length;D<Te;D++){const ae=A[D];ue(ae,ce),ce+=ae.length}n.addGroup(te,s.length/3-te,1)}function ue(te,ce){let D=te.length;for(;--D>=0;){const Te=D;let ae=D-1;ae<0&&(ae=te.length-1);for(let xe=0,de=h+m*2;xe<de;xe++){const Fe=k*xe,Me=k*(xe+1),P=ce+Te+Fe,w=ce+ae+Fe,X=ce+ae+Me,J=ce+Te+Me;Ce(P,w,X,J)}}}function se(te,ce,D){c.push(te),c.push(ce),c.push(D)}function me(te,ce,D){Le(te),Le(ce),Le(D);const Te=s.length/3,ae=x.generateTopUV(n,s,Te-3,Te-2,Te-1);Xe(ae[0]),Xe(ae[1]),Xe(ae[2])}function Ce(te,ce,D,Te){Le(te),Le(ce),Le(Te),Le(ce),Le(D),Le(Te);const ae=s.length/3,xe=x.generateSideWallUV(n,s,ae-6,ae-3,ae-2,ae-1);Xe(xe[0]),Xe(xe[1]),Xe(xe[3]),Xe(xe[1]),Xe(xe[2]),Xe(xe[3])}function Le(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function Xe(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return q_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wc[s.type]().fromJSON(s)),new ll(n,e.options)}}const j_={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ie(r,o),new ie(a,c),new ie(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],b=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ie(o,1-c),new ie(l,1-u),new ie(d,1-g),new ie(b,1-f)]:[new ie(a,1-c),new ie(h,1-u),new ie(p,1-g),new ie(m,1-f)]}};function q_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Eo extends Nt{constructor(e=new Lo([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(o,2));function l(h){const u=s.length/3,d=h.extractPoints(t);let p=d.shape;const g=d.holes;xi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){const x=g[m];xi.isClockWise(x)===!0&&(g[m]=x.reverse())}const b=xi.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){const x=g[m];p=p.concat(x)}for(let m=0,f=p.length;m<f;m++){const x=p[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,f=b.length;m<f;m++){const x=b[m],v=x[0]+u,_=x[1]+u,E=x[2]+u;n.push(v,_,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Y_(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Eo(n,e.curveSegments)}}function Y_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class kn extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,d=new L,p=[],g=[],b=[],m=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let _=0;f===0&&o===0?_=.5/t:f===n&&c===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){const R=E/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(R+_,1-v),x.push(l++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const v=h[f][x+1],_=h[f][x],E=h[f+1][x],R=h[f+1][x+1];(f!==0||o>0)&&p.push(v,_,R),(f!==n-1||c<Math.PI)&&p.push(_,E,R)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(b,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Io extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const b=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const b=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,x=(s+1)*p+g;o.push(b,m,x),o.push(m,f,x)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class K_ extends Bt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ot extends wn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zc,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mt extends ot{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Z_ extends wn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zc,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function no(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function J_(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function qh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Cd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class yr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Q_ extends yr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Il:r=e,a=2*t-n;break;case Nl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:o=e,c=2*n-t;break;case Nl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,x=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*b+.5*g,_=p*m-p*b;for(let E=0;E!==a;++E)r[E]=f*o[h+E]+x*o[l+E]+v*o[c+E]+_*o[u+E];return r}}class ex extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class tx extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=no(t,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:no(e.times,Array),values:no(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ex(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Q_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case Fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return Fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&$_(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const b=t[u+g];if(b!==t[d+g]||b!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=hr;class Ls extends Bn{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=lr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Pd extends Bn{}Pd.prototype.ValueTypeName="color";class Ss extends Bn{}Ss.prototype.ValueTypeName="number";class nx extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Nn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Es extends Bn{InterpolantFactoryMethodLinear(e){return new nx(this.times,this.values,this.getValueSize(),e)}}Es.prototype.ValueTypeName="quaternion";Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends Bn{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=lr;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends Bn{}Ts.prototype.ValueTypeName="vector";class ix{constructor(e="",t=-1,n=[],s=_f){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(rx(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=J_(c);c=qh(c,1,h),l=qh(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ss(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,b){if(p.length!==0){const m=[],f=[];Cd(p,m,f,g),m.length!==0&&b.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)p[d[g].morphTargets[b]]=-1;for(const b in p){const m=[],f=[];for(let x=0;x!==d[g].morphTargets.length;++x){const v=d[g];m.push(v.time),f.push(v.morphTarget===b?1:0)}s.push(new Ss(".morphTargetInfluence["+b+"]",m,f))}c=p.length*o}else{const p=".bones["+t[u].name+"]";n(Ts,p+".position",d,"pos",s),n(Es,p+".quaternion",d,"rot",s),n(Ts,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return Pd;case"quaternion":return Es;case"bool":case"boolean":return Ls;case"string":return Ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function rx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sx(i.type);if(i.times===void 0){const t=[],n=[];Cd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Ld{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const ox=new Ld;class wi{constructor(e){this.manager=e!==void 0?e:ox,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class ax extends Error{constructor(e,t){super(e),this.response=t}}class mr extends wi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:s});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Yn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let b=0;const m=new ReadableStream({start(f){x();function x(){u.read().then(({done:v,value:_})=>{if(v)f.close();else{b+=_.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let R=0,T=h.length;R<T;R++){const C=h[R];C.onProgress&&C.onProgress(E)}f.enqueue(_),x()}},v=>{f.error(v)})}}});return new Response(m)}else throw new ax(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{bi.add(e,l);const h=Yn[e];delete Yn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=Yn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Yn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cx extends wi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=bi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ur("img");function c(){h(),bi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class lx extends wi{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Ps,a=new mr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Ln,o.wrapT=l.wrapT!==void 0?l.wrapT:Ln,o.magFilter=l.magFilter!==void 0?l.magFilter:Lt,o.minFilter=l.minFilter!==void 0?l.minFilter:Lt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Dn),l.mipmapCount===1&&(o.minFilter=Lt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,s),o}}class Dd extends wi{constructor(e){super(e)}load(e,t,n,s){const r=new At,o=new cx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Mr extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Tc extends Mr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ba=new ze,Yh=new L,Kh=new L;class hl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hx extends hl{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ms*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Id extends Mr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new hx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zh=new ze,Ws=new L,_a=new L;class ux extends hl{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ws),_a.copy(n.position),_a.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_a),n.updateMatrixWorld(),s.makeTranslation(-Ws.x,-Ws.y,-Ws.z),Zh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh)}}class ul extends Mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ux}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dx extends hl{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gr extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new dx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fx extends Mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class or{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class px extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=bi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),bi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(e,c),r.manager.itemStart(e)}}class mx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$h();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $h(){return performance.now()}const dl="\\[\\]\\.:\\/",gx=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",bx="[^"+dl.replace("\\.","")+"]",_x=/((?:WC+[\/:])*)/.source.replace("WC",fl),xx=/(WCOD+)?/.source.replace("WCOD",bx),vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),Mx=new RegExp("^"+_x+xx+vx+yx+"$"),wx=["material","materials","bones","map"];class Sx{constructor(e,t,n){const s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gx,"")}static parseTrackName(e){const t=Mx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=Sx;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Jh=new ze;class Qh{constructor(e,t,n=0,s=1/0){this.ray=new Rs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jh),this}intersectObject(e,t=!0,n=[]){return Ac(e,this,n,t),n.sort(eu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ac(e[s],this,n,t);return n.sort(eu),n}}function eu(i,e){return i.distance-e.distance}function Ac(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ac(r[o],e,t,!0)}}class Rc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ex extends Wi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);class As extends bt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ie(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const as=new L,tu=new ze,nu=new ze,iu=new L,su=new L;class Tx{constructor(e={}){const t=this;let n,s,r,o;const a={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(g,b){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),tu.copy(b.matrixWorldInverse),nu.multiplyMatrices(b.projectionMatrix,tu),h(g,g,b),p(g)},this.setSize=function(g,b){n=g,s=b,r=n/2,o=s/2,c.style.width=g+"px",c.style.height=b+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let b=0,m=g.children.length;b<m;b++)l(g.children[b])}function h(g,b,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){as.setFromMatrixPosition(g.matrixWorld),as.applyMatrix4(nu);const f=as.z>=-1&&as.z<=1&&g.layers.test(m.layers)===!0,x=g.element;x.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(t,b,m),x.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(as.x*r+r)+"px,"+(-as.y*o+o)+"px)",x.parentNode!==c&&c.appendChild(x),g.onAfterRender(t,b,m));const v={distanceToCameraSquared:u(m,g)};a.objects.set(g,v)}for(let f=0,x=g.children.length;f<x;f++)h(g.children[f],b,m)}function u(g,b){return iu.setFromMatrixPosition(g.matrixWorld),su.setFromMatrixPosition(b.matrixWorld),iu.distanceToSquared(su)}function d(g){const b=[];return g.traverseVisible(function(m){m.isCSS2DObject&&b.push(m)}),b}function p(g){const b=d(g).sort(function(f,x){if(f.renderOrder!==x.renderOrder)return x.renderOrder-f.renderOrder;const v=a.objects.get(f).distanceToCameraSquared,_=a.objects.get(x).distanceToCameraSquared;return v-_}),m=b.length;for(let f=0,x=b.length;f<x;f++)b[f].element.style.zIndex=m-f}}}const ru={type:"change"},pl={type:"start"},Nd={type:"end"},io=new Rs,ou=new pi,Ax=Math.cos(70*id.DEG2RAD),Tt=new L,Kt=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xa=1e-6;class Rx extends Ex{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:Pn.ROTATE,TWO:Pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Nn,this._lastTargetPosition=new L,this._quat=new Nn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rc,this._sphericalDelta=new Rc,this._scale=1,this._panOffset=new L,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new L,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Px.bind(this),this._onPointerDown=Cx.bind(this),this._onPointerUp=Lx.bind(this),this._onContextMenu=Ox.bind(this),this._onMouseWheel=Nx.bind(this),this._onKeyDown=kx.bind(this),this._onTouchStart=Ux.bind(this),this._onTouchMove=Fx.bind(this),this._onMouseDown=Dx.bind(this),this._onMouseMove=Ix.bind(this),this._interceptControlDown=zx.bind(this),this._interceptControlUp=Bx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ru),this.update(),this.state=ut.NONE}update(e=null){const t=this.object.position;Tt.copy(t).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Kt:n>Math.PI&&(n-=Kt),s<-Math.PI?s+=Kt:s>Math.PI&&(s-=Kt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Tt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(io.origin.copy(this.object.position),io.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(io.direction))<Ax?this.object.lookAt(this.target):(ou.setFromNormalAndCoplanarPoint(this.object.up,this.target),io.intersectPlane(ou,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xa||this._lastTargetPosition.distanceToSquared(this.target)>xa?(this.dispatchEvent(ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Tt.setFromMatrixColumn(t,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,t){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(t,1):(Tt.setFromMatrixColumn(t,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Tt.copy(s).sub(this.target);let r=Tt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Kt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Cx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Px(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Lx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nd),this.state=ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Dx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ut.DOLLY;break;case ds.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ut.ROTATE}break;case ds.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(pl)}function Ix(i){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Nx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(i.preventDefault(),this.dispatchEvent(pl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Nd))}function kx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Ux(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Pn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ut.TOUCH_ROTATE;break;case Pn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Pn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ut.TOUCH_DOLLY_PAN;break;case Pn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(pl)}function Fx(i){switch(this._trackPointer(i),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ut.NONE}}function Ox(i){this.enabled!==!1&&i.preventDefault()}function zx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Hx extends _d{constructor(){super();const e=new Ve;e.deleteAttribute("uv");const t=new ot({side:jt}),n=new ot,s=new ul(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new he(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new he(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new he(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new he(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new he(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new he(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new he(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new he(e,cs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new he(e,cs(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new he(e,cs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const b=new he(e,cs(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const m=new he(e,cs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new he(e,cs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function cs(i){const e=new Xt;return e.color.setScalar(i),e}class kd extends lx{constructor(e){super(e),this.type=rn}parse(e){const o=function(C,M){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(M||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(M||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(M||""))}},h=`
`,u=function(C,M,y){M=M||1024;let N=C.pos,I=-1,U=0,z="",k=String.fromCharCode.apply(null,new Uint16Array(C.subarray(N,N+128)));for(;0>(I=k.indexOf(h))&&U<M&&N<C.byteLength;)z+=k,U+=k.length,N+=128,k+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(N,N+128)));return-1<I?(C.pos+=U+I+1,z+k.slice(0,I)):!1},d=function(C){const M=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,I=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,U={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,k;for((C.pos>=C.byteLength||!(z=u(C)))&&o(1,"no header found"),(k=z.match(M))||o(3,"bad initial token"),U.valid|=1,U.programtype=k[1],U.string+=z+`
`;z=u(C),z!==!1;){if(U.string+=z+`
`,z.charAt(0)==="#"){U.comments+=z+`
`;continue}if((k=z.match(y))&&(U.gamma=parseFloat(k[1])),(k=z.match(A))&&(U.exposure=parseFloat(k[1])),(k=z.match(N))&&(U.valid|=2,U.format=k[1]),(k=z.match(I))&&(U.valid|=4,U.height=parseInt(k[1],10),U.width=parseInt(k[2],10)),U.valid&2&&U.valid&4)break}return U.valid&2||o(3,"missing format specifier"),U.valid&4||o(3,"missing image size specifier"),U},p=function(C,M,y){const A=M;if(A<8||A>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);A!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");const N=new Uint8Array(4*M*y);N.length||o(4,"unable to allocate buffer space");let I=0,U=0;const z=4*A,k=new Uint8Array(4),G=new Uint8Array(z);let F=y;for(;F>0&&U<C.byteLength;){U+4>C.byteLength&&o(1),k[0]=C[U++],k[1]=C[U++],k[2]=C[U++],k[3]=C[U++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=A)&&o(3,"bad rgbe scanline format");let W=0,K;for(;W<z&&U<C.byteLength;){K=C[U++];const j=K>128;if(j&&(K-=128),(K===0||W+K>z)&&o(3,"bad scanline data"),j){const ne=C[U++];for(let V=0;V<K;V++)G[W++]=ne}else G.set(C.subarray(U,U+K),W),W+=K,U+=K}const pe=A;for(let j=0;j<pe;j++){let ne=0;N[I]=G[j+ne],ne+=A,N[I+1]=G[j+ne],ne+=A,N[I+2]=G[j+ne],ne+=A,N[I+3]=G[j+ne],I+=4}F--}return N},g=function(C,M,y,A){const N=C[M+3],I=Math.pow(2,N-128)/255;y[A+0]=C[M+0]*I,y[A+1]=C[M+1]*I,y[A+2]=C[M+2]*I,y[A+3]=1},b=function(C,M,y,A){const N=C[M+3],I=Math.pow(2,N-128)/255;y[A+0]=Nr.toHalfFloat(Math.min(C[M+0]*I,65504)),y[A+1]=Nr.toHalfFloat(Math.min(C[M+1]*I,65504)),y[A+2]=Nr.toHalfFloat(Math.min(C[M+2]*I,65504)),y[A+3]=Nr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const f=d(m),x=f.width,v=f.height,_=p(m.subarray(m.pos),x,v);let E,R,T;switch(this.type){case $t:T=_.length/4;const C=new Float32Array(T*4);for(let y=0;y<T;y++)g(_,y*4,C,y*4);E=C,R=$t;break;case rn:T=_.length/4;const M=new Uint16Array(T*4);for(let y=0;y<T;y++)b(_,y*4,M,y*4);E=M,R=rn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:x,height:v,data:E,header:f.string,gamma:f.gamma,exposure:f.exposure,type:R}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case $t:case rn:o.colorSpace=It,o.minFilter=Lt,o.magFilter=Lt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}const bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Is{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gx=new Co(-1,1,1,-1,0,1);class Vx extends Nt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}}const Wx=new Vx;class ml{constructor(e){this._mesh=new he(Wx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Xx extends Is{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mi.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ml(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class au extends Is{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class jx extends Is{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xx(bo),this.copyPass.material.blending=kt,this.clock=new mx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}au!==void 0&&(o instanceof au?n=!0:o instanceof jx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yx extends Is{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const so={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ze},cameraProjectionMatrixInverse:{value:new ze},cameraWorldMatrix:{value:new ze},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},ro={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},va={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Kx(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Zx(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],c=2*Math.PI*a/n,l=new L(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new Ps(s,e,e);return r.wrapS=qt,r.wrapT=qt,r.needsUpdate=!0,r}function Zx(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}const oo={defines:{SAMPLES:16,SAMPLE_VECTORS:Ud(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraProjectionMatrixInverse:{value:new ze},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ud(i,e,t){const n=$x(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function $x(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),o))}return n}class Jx{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,p=l-u,g=e-d,b=t-p;let m,f;g>b?(m=1,f=0):(m=0,f=1);const x=g-m+h,v=b-f+h,_=g-1+2*h,E=b-1+2*h,R=c&255,T=l&255,C=this.perm[R+this.perm[T]]%12,M=this.perm[R+m+this.perm[T+f]]%12,y=this.perm[R+1+this.perm[T+1]]%12;let A=.5-g*g-b*b;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[C],g,b));let N=.5-x*x-v*v;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[M],x,v));let I=.5-_*_-E*E;return I<0?r=0:(I*=I,r=I*I*this.dot(this.grad3[y],_,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),p=1/6,g=(h+u+d)*p,b=h-g,m=u-g,f=d-g,x=e-b,v=t-m,_=n-f;let E,R,T,C,M,y;x>=v?v>=_?(E=1,R=0,T=0,C=1,M=1,y=0):x>=_?(E=1,R=0,T=0,C=1,M=0,y=1):(E=0,R=0,T=1,C=1,M=0,y=1):v<_?(E=0,R=0,T=1,C=0,M=1,y=1):x<_?(E=0,R=1,T=0,C=0,M=1,y=1):(E=0,R=1,T=0,C=1,M=1,y=0);const A=x-E+p,N=v-R+p,I=_-T+p,U=x-C+2*p,z=v-M+2*p,k=_-y+2*p,G=x-1+3*p,F=v-1+3*p,W=_-1+3*p,K=h&255,pe=u&255,j=d&255,ne=this.perm[K+this.perm[pe+this.perm[j]]]%12,V=this.perm[K+E+this.perm[pe+R+this.perm[j+T]]]%12,$=this.perm[K+C+this.perm[pe+M+this.perm[j+y]]]%12,ue=this.perm[K+1+this.perm[pe+1+this.perm[j+1]]]%12;let se=.6-x*x-v*v-_*_;se<0?s=0:(se*=se,s=se*se*this.dot3(this.grad3[ne],x,v,_));let me=.6-A*A-N*N-I*I;me<0?r=0:(me*=me,r=me*me*this.dot3(this.grad3[V],A,N,I));let Ce=.6-U*U-z*z-k*k;Ce<0?o=0:(Ce*=Ce,o=Ce*Ce*this.dot3(this.grad3[$],U,z,k));let Le=.6-G*G-F*F-W*W;return Le<0?a=0:(Le*=Le,a=Le*Le*this.dot3(this.grad3[ue],G,F,W)),32*(s+r+o+a)}noise4d(e,t,n,s){const r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,p,g;const b=(e+t+n+s)*c,m=Math.floor(e+b),f=Math.floor(t+b),x=Math.floor(n+b),v=Math.floor(s+b),_=(m+f+x+v)*l,E=m-_,R=f-_,T=x-_,C=v-_,M=e-E,y=t-R,A=n-T,N=s-C,I=M>y?32:0,U=M>A?16:0,z=y>A?8:0,k=M>N?4:0,G=y>N?2:0,F=A>N?1:0,W=I+U+z+k+G+F,K=o[W][0]>=3?1:0,pe=o[W][1]>=3?1:0,j=o[W][2]>=3?1:0,ne=o[W][3]>=3?1:0,V=o[W][0]>=2?1:0,$=o[W][1]>=2?1:0,ue=o[W][2]>=2?1:0,se=o[W][3]>=2?1:0,me=o[W][0]>=1?1:0,Ce=o[W][1]>=1?1:0,Le=o[W][2]>=1?1:0,Xe=o[W][3]>=1?1:0,te=M-K+l,ce=y-pe+l,D=A-j+l,Te=N-ne+l,ae=M-V+2*l,xe=y-$+2*l,de=A-ue+2*l,Fe=N-se+2*l,Me=M-me+3*l,P=y-Ce+3*l,w=A-Le+3*l,X=N-Xe+3*l,J=M-1+4*l,oe=y-1+4*l,Q=A-1+4*l,Pe=N-1+4*l,ge=m&255,ye=f&255,We=x&255,le=v&255,Ae=a[ge+a[ye+a[We+a[le]]]]%32,Oe=a[ge+K+a[ye+pe+a[We+j+a[le+ne]]]]%32,Be=a[ge+V+a[ye+$+a[We+ue+a[le+se]]]]%32,Re=a[ge+me+a[ye+Ce+a[We+Le+a[le+Xe]]]]%32,Je=a[ge+1+a[ye+1+a[We+1+a[le+1]]]]%32;let He=.6-M*M-y*y-A*A-N*N;He<0?h=0:(He*=He,h=He*He*this.dot4(r[Ae],M,y,A,N));let tt=.6-te*te-ce*ce-D*D-Te*Te;tt<0?u=0:(tt*=tt,u=tt*tt*this.dot4(r[Oe],te,ce,D,Te));let O=.6-ae*ae-xe*xe-de*de-Fe*Fe;O<0?d=0:(O*=O,d=O*O*this.dot4(r[Be],ae,xe,de,Fe));let be=.6-Me*Me-P*P-w*w-X*X;be<0?p=0:(be*=be,p=be*be*this.dot4(r[Re],Me,P,w,X));let Z=.6-J*J-oe*oe-Q*Q-Pe*Pe;return Z<0?g=0:(Z*=Z,g=Z*Z*this.dot4(r[Je],J,oe,Q,Pe)),27*(h+u+d+p+g)}}class xn extends Is{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Kx(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Sn(this.width,this.height,{type:rn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Bt({defines:Object.assign({},so.defines),uniforms:mi.clone(so.uniforms),vertexShader:so.vertexShader,fragmentShader:so.fragmentShader,blending:kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Z_,this.normalMaterial.blending=kt,this.pdMaterial=new Bt({defines:Object.assign({},oo.defines),uniforms:mi.clone(oo.uniforms),vertexShader:oo.vertexShader,fragmentShader:oo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Bt({defines:Object.assign({},ro.defines),uniforms:mi.clone(ro.uniforms),vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader,blending:kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Bt({uniforms:mi.clone(bo.uniforms),vertexShader:bo.vertexShader,fragmentShader:bo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Fa,blendDst:Ks,blendEquation:vn,blendSrcAlpha:Ua,blendDstAlpha:Ks,blendEquationAlpha:vn}),this.blendMaterial=new Bt({uniforms:mi.clone(va.uniforms),vertexShader:va.vertexShader,fragmentShader:va.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Fu,blendSrc:Fa,blendDst:Ks,blendEquation:vn,blendSrcAlpha:Ua,blendDstAlpha:Ks,blendEquationAlpha:vn}),this.fsQuad=new ml(null),this.originalClearColor=new De,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new tl,this.depthTexture.format=Hi,this.depthTexture.type=Bi,this.normalRenderTarget=new Sn(this.width,this.height,{minFilter:Ut,magFilter:Ut,type:rn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ud(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case xn.OUTPUT.Off:break;case xn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case xn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case xn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case xn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case xn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case xn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new Jx,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const c=o,l=a;s[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const r=new Ps(s,e,e,Jt,In);return r.wrapS=qt,r.wrapT=qt,r.needsUpdate=!0,r}}xn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Qx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ev extends Is{constructor(){super();const e=Qx;this.uniforms=mi.clone(e.uniforms),this.material=new K_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ml(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function cu(){return window.innerWidth<900||window.innerHeight<520||"ontouchstart"in window&&window.innerWidth<1200}function tv(i){try{const e=i.getContext(),t=e.getExtension("WEBGL_debug_renderer_info");if(!t)return!1;const n=String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)||"");return/swiftshader|llvmpipe|softpipe|microsoft basic render|cpu/i.test(n)}catch{return!1}}function nv(i,e){const t=cu(),n=new o_({canvas:i,antialias:!t,powerPreference:"high-performance",alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=t?Hc:Uu,n.toneMapping=Gc,n.toneMappingExposure=1.08,n.outputColorSpace=gt;const s=tv(n),r=!t&&!s,o=new _d;o.background=new De("#b9cbe0"),o.fog=new gs("#c5d4e3",90,220);const a=new Mo(n);o.environment=a.fromScene(new Hx,.06).texture,o.environmentIntensity=.55;const c=t?58:50,l=new Wt(c,window.innerWidth/window.innerHeight,.05,400);l.position.set(36,28,38);const h=new Rx(l,n.domElement);h.enableDamping=!0,h.dampingFactor=.08,h.maxPolarAngle=Math.PI*.48,h.minDistance=2,h.maxDistance=90,h.target.set(13.7,8,10),h.update(),h.touches.ONE=Pn.ROTATE,h.touches.TWO=Pn.DOLLY_PAN;const u=new Tx({element:e});u.setSize(window.innerWidth,window.innerHeight),Object.assign(e.style,{position:"absolute",inset:"0",pointerEvents:"none"});const d=new Tc("#efe8dc","#8a7a68",.62);o.add(d);const p=new gr("#fff3d8",2.15);p.position.set(48,62,28),p.castShadow=!0;const g=t?1024:2048;p.shadow.mapSize.set(g,g),p.shadow.camera.near=4,p.shadow.camera.far=140,p.shadow.camera.left=-50,p.shadow.camera.right=50,p.shadow.camera.top=50,p.shadow.camera.bottom=-50,p.shadow.bias=-4e-4,p.shadow.normalBias=.035,p.shadow.radius=t?1:2.5,o.add(p),o.add(p.target),p.target.position.set(13.7,0,10);const b=new gr("#f0e0c4",.42);b.position.set(-30,16,-20),o.add(b);const m=new fx("#fff6ea",.08);o.add(m);let f=null,x=null,v=r,_=null;if(r){const F=window.innerWidth,W=window.innerHeight,K=new Sn(F,W,{type:rn,depthBuffer:!0});f=new qx(n,K),f.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),f.addPass(new Yx(o,l)),x=new xn(o,l,F,W),x.output=xn.OUTPUT.Default,x.blendIntensity=.8,x.updateGtaoMaterial({radius:.28,samples:12,thickness:1,distanceExponent:2,distanceFallOff:1,scale:1.15}),f.addPass(x),f.addPass(new ev)}let E=performance.now(),R=!1,T=()=>{},C=()=>{},M=60,y=0;function A(F){if(!R)return;requestAnimationFrame(A);const W=Math.min(.05,(F-E)/1e3);E=F;const K=W>1e-4?1/W:60;M=M*.9+K*.1,v&&f&&K<26?(y+=1,y>45&&(v=!1,console.info("[engine] GTAO disabled — fps fallback",M.toFixed(1)))):y=0,T(W),h.enabled&&h.update(),f&&v?f.render():n.render(o,l),u.render(o,l),C()}let N=0,I=null,U=null;function z(){const F=window.innerWidth,W=window.innerHeight,K=W>F*1.05;if(l.aspect=F/W,I!=null){const pe=I*Math.PI/180;if(K){const j=Math.round(W*1.24),ne=F/j,V=2*Math.atan(Math.tan(pe/2)/Math.max(ne,.15));l.fov=Math.min(122,Math.max(78,V*180/Math.PI));const $=j-W;l.setViewOffset(F,j,0,$,F,W)}else l.fov=I>=80?75:60,l.clearViewOffset()}else l.fov=cu()?58:50,l.clearViewOffset();l.near=.05,l.updateProjectionMatrix()}function k(F,W){if(!x)return;const K=x;K.width=F,K.height=W,K.gtaoRenderTarget.setSize(F,W),K.pdRenderTarget.setSize(F,W),K.normalRenderTarget?.setSize(F,W),K.gtaoMaterial.uniforms.resolution.value.set(F,W)}function G(){const F=window.innerWidth,W=window.innerHeight;z();const K=Math.min(window.devicePixelRatio||1,1.5);n.setPixelRatio(K),n.setSize(F,W),u.setSize(F,W),f&&(f.setPixelRatio(K),f.setSize(F,W),k(Math.round(F*K),Math.round(W*K)))}return window.addEventListener("resize",G),{renderer:n,scene:o,camera:l,orbit:h,labels:u,sun:p,hemi:d,fill:b,mobile:t,highTier:r,softwareGpu:s,get cityBg(){return _},set cityBg(F){_=F},walkLit:!1,start(F,W){T=F,C=W??(()=>{}),R=!0,E=performance.now(),requestAnimationFrame(A)},resize:G,setHudLift(F){const W=Math.max(0,Math.min(.4,F));Math.abs(W-N)<.01||(N=W,z())},setWalkFov(F){I=F,z()},fps:()=>M,aoEnabled:()=>v,setAoEnabled(F){v=F&&r},aimWalkLighting(F,W,K){if(!F||!W){U=null,this.walkLit=!1,p.position.set(48,62,28),p.target.position.set(13.7,0,10),p.target.updateMatrixWorld(),p.shadow.camera.left=-50,p.shadow.camera.right=50,p.shadow.camera.top=50,p.shadow.camera.bottom=-50,p.shadow.camera.near=4,p.shadow.camera.far=140,p.shadow.camera.updateProjectionMatrix();return}U={center:F.clone(),incoming:W.clone().normalize(),radius:K},this.walkLit=!0;const pe=U.incoming,j=.7,ne=new L(-pe.x,j,-pe.z).normalize();p.position.copy(F).addScaledVector(ne,Math.max(14,K*1.6)),p.target.position.copy(F),p.target.updateMatrixWorld(),p.castShadow=!0;const V=Math.max(6,K);p.shadow.camera.left=-V,p.shadow.camera.right=V,p.shadow.camera.top=V,p.shadow.camera.bottom=-V,p.shadow.camera.near=2,p.shadow.camera.far=Math.max(40,K*4),p.shadow.camera.updateProjectionMatrix(),b.position.copy(F).add(new L(pe.x,.5,pe.z).normalize().multiplyScalar(10)),b.position.y=F.y+6},dispose(){R=!1,window.removeEventListener("resize",G),f?.dispose()}}}let br=0;function ya(){br+=1}function ao(i,e,t,n,s=1.15){const r=++br,o=i.position.clone(),a=e.target.clone(),c=performance.now(),l=e.enabled;return e.enabled=!1,new Promise(h=>{function u(d){if(r!==br){h();return}const p=Math.min(1,(d-c)/(s*1e3)),g=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;i.position.lerpVectors(o,t,g),e.target.lerpVectors(a,n,g),i.lookAt(e.target),p<1?requestAnimationFrame(u):(e.enabled=l,h())}requestAnimationFrame(u)})}function iv(i,e,t,n,s,r,o=0,a=1.05,c){const l=++br;let h=t,u=r;for(;u-h>Math.PI;)u-=Math.PI*2;for(;u-h<-Math.PI;)u+=Math.PI*2;const d=performance.now();return new Promise(p=>{function g(b){if(l!==br){p();return}const m=Math.min(1,(b-d)/(a*1e3)),f=m<.5?4*m*m*m:1-Math.pow(-2*m+2,3)/2,x=new L().lerpVectors(e,s,f),v=h+(u-h)*f,_=n+(o-n)*f;i.position.copy(x),i.rotation.set(_,v,0,"YXZ"),m<1?requestAnimationFrame(g):p()}requestAnimationFrame(g)})}function sv(i,e){const{scene:t,sun:n,hemi:s,fill:r,renderer:o}=i;e==="morning"?(i.walkLit||n.position.set(48,62,28),n.color.set("#fff6e8"),n.intensity=2.2,s.color.set("#efe8dc"),s.groundColor.set("#8a7a68"),s.intensity=.58,r.color.set("#f0e0c4"),r.intensity=.42,o.toneMappingExposure=1.08,t.fog=new gs("#c5d4e3",110,240),i.cityBg?(t.background=i.cityBg,t.backgroundIntensity=1.05,t.backgroundBlurriness=.015,t.backgroundRotation.set(0,.35,0)):t.background=new De("#b9cbe0")):e==="golden"?(i.walkLit||n.position.set(62,16,22),n.color.set("#ffb060"),n.intensity=2.05,s.color.set("#ffd9a8"),s.groundColor.set("#8a5a38"),s.intensity=.48,r.color.set("#ffb07a"),r.intensity=.38,o.toneMappingExposure=1,t.fog=new gs("#e0a070",90,200),i.cityBg?(t.background=i.cityBg,t.backgroundIntensity=.78,t.backgroundBlurriness=.04,t.backgroundRotation.set(0,1.1,0)):t.background=new De("#eeb07a")):(i.walkLit||n.position.set(-30,28,40),n.color.set("#b0c0e8"),n.intensity=.18,s.color.set("#1a2848"),s.groundColor.set("#0a0c12"),s.intensity=.22,r.color.set("#3a5080"),r.intensity=.1,o.toneMappingExposure=.82,t.fog=new gs("#101828",60,160),i.cityBg?(t.background=i.cityBg,t.backgroundIntensity=.12,t.backgroundBlurriness=.08,t.backgroundRotation.set(0,2.2,0)):t.background=new De("#0b1020")),i.walkLit||(n.target.position.set(13.7,0,10),n.target.updateMatrixWorld())}async function rv(i,e){try{const n=await new kd().loadAsync(e);n.mapping=ar;const s=new Mo(i.renderer),r=s.fromEquirectangular(n).texture;n.dispose(),s.dispose(),i.scene.environment=r,i.scene.environmentIntensity=.58}catch(t){console.warn("[engine] HDRI failed, keeping RoomEnvironment",t)}}async function ov(i,e){try{const n=await new kd().loadAsync(e);n.mapping=ar,i.cityBg=n,i.scene.background=n,i.scene.backgroundIntensity=1.05,i.scene.backgroundBlurriness=.015,i.scene.backgroundRotation.set(0,.35,0)}catch(t){console.warn("[engine] city HDRI failed, keeping solid sky",t)}}function Ma(){return window.innerHeight>window.innerWidth*1.05?-7*Math.PI/180:0}const av=()=>"./textures/",cv={wood:2.15,marble:3.4,tile:1.7,"tile-wet":1.7,terra:2};function Ui(i,e,t,n,s){return new Promise((r,o)=>{i.load(av()+e,a=>{a.wrapS=a.wrapT=qt,a.repeat.set(n,n),a.anisotropy=s,a.colorSpace=t?gt:It,a.needsUpdate=!0,r(a)},void 0,o)})}async function An(i,e,t,n){const[s,r,o]=await Promise.all([Ui(i,`${e}_diff.jpg`,!0,n,t),Ui(i,`${e}_nor.jpg`,!1,n,t),Ui(i,`${e}_rough.jpg`,!1,n,t)]);return{map:s,normalMap:r,roughnessMap:o}}async function lv(i,e){const t=Math.min(8,i.capabilities.getMaxAnisotropy()),n=new Dd,s=new Ld;n.manager=s,s.onProgress=(x,v,_)=>e(_?v/_:0);const[r,o,a,c,l,h,u,d,p,g,b,m]=await Promise.all([An(n,"wood",t,1),An(n,"marblevein",t,1),An(n,"tile",t,1),An(n,"terra",t,1),An(n,"granite",t,1),An(n,"concrete",t,1),An(n,"concfloor",t,1),An(n,"plaster",t,2),An(n,"grass",t,1),An(n,"pave",t,1),(async()=>{const[x,v]=await Promise.all([Ui(n,"fabric_nor.jpg",!1,5,t),Ui(n,"fabric_rough.jpg",!1,5,t)]);return{map:lu(),normalMap:x,roughnessMap:v}})(),(async()=>{const[x,v]=await Promise.all([Ui(n,"brushed_nor.jpg",!1,4,t),Ui(n,"brushed_rough.jpg",!1,4,t)]);return{map:lu(),normalMap:x,roughnessMap:v}})()]),f=(x,v={})=>new ot({color:x,roughness:.7,metalness:.05,...v});return{wood:r,marble:o,tile:a,terra:c,granite:l,concrete:h,concfloor:u,plaster:d,grass:p,pave:g,fabricTex:b,brushed:m,wall:f("#f4f1ea",{roughness:.85,metalness:0,map:d.map,normalMap:d.normalMap,normalScale:new ie(.35,.35),roughnessMap:d.roughnessMap}),ceiling:f("#f7f4ee",{roughness:.92,metalness:0,envMapIntensity:.2}),glass:new Mt({color:"#eef4f8",transparent:!0,opacity:.14,roughness:.04,metalness:.02,transmission:.86,thickness:.03,ior:1.45,envMapIntensity:.35}),glassRail:new Mt({color:"#e8f0f5",transparent:!0,opacity:.16,roughness:.05,metalness:.08,transmission:.8,thickness:.02,envMapIntensity:.3}),frame:f("#2b2e2c",{roughness:.45,metalness:.35}),door:f("#6b4a2e",{roughness:.55,metalness:.05,map:r.map,roughnessMap:r.roughnessMap,normalMap:r.normalMap,normalScale:new ie(.4,.4)}),metal:f("#8a8e92",{roughness:.35,metalness:.8}),gold:f("#c4a265",{roughness:.3,metalness:.7}),brass:f("#c9a15b",{roughness:.34,metalness:.92,normalMap:m.normalMap,roughnessMap:m.roughnessMap,normalScale:new ie(.7,.25),envMapIntensity:.85}),blackMetal:f("#1c1e20",{roughness:.58,metalness:.72,normalMap:m.normalMap,roughnessMap:m.roughnessMap,normalScale:new ie(.5,.2),envMapIntensity:.4}),fabric:f("#4a5560",{roughness:.86,metalness:0,normalMap:b.normalMap,roughnessMap:b.roughnessMap,normalScale:new ie(.7,.7),envMapIntensity:.22}),mattress:f("#ece6da",{roughness:.9,normalMap:b.normalMap,normalScale:new ie(.35,.35),roughnessMap:b.roughnessMap}),plant:f("#2d5a3d",{roughness:.8}),soil:f("#3a2a1c",{roughness:1}),counter:new Mt({color:"#d8d4cc",roughness:.22,metalness:.04,clearcoat:.7,clearcoatRoughness:.12,envMapIntensity:1.05}),cabinet:f("#f3f1ec",{roughness:.55}),woodFur:f("#8b5a2b",{roughness:.58,metalness:.02,map:r.map,roughnessMap:r.roughnessMap,normalMap:r.normalMap,normalScale:new ie(.55,.55),envMapIntensity:.35}),ceramic:new Mt({color:"#f4f6f7",roughness:.2,metalness:.03,clearcoat:.8,clearcoatRoughness:.14,envMapIntensity:1}),water:new Mt({color:"#6a9ab8",transparent:!0,opacity:.55,roughness:.15,metalness:.05,transmission:.4}),emissive:f("#fff4d8",{emissive:"#fff4d8",emissiveIntensity:.85,roughness:1})}}function lu(){const i=new Uint8Array([255,255,255,255]),e=new Ps(i,1,1,Jt);return e.colorSpace=gt,e.needsUpdate=!0,e}const bs={modern:{flooring:"wood",wall:"#f4f1ea",kitchen:"white",fabric:"#4a5560",wood:"#7a5a38"},luxury:{flooring:"marble",wall:"#f3ebe0",kitchen:"walnut",fabric:"#5c1a1a",wood:"#3f2a1a"},minimal:{flooring:"tile",wall:"#f7f7f5",kitchen:"white",fabric:"#d0cbc2",wood:"#c4b7a0"},traditional:{flooring:"marble",wall:"#f3e6d0",kitchen:"granite",fabric:"#7a2e1f",wood:"#5c3310"}},hv=[{id:"white",color:"#f7f5f0",name:"White"},{id:"cream",color:"#f3ebe0",name:"Cream"},{id:"sage",color:"#d5ddd2",name:"Sage"},{id:"sand",color:"#e8d7bc",name:"Sand"},{id:"grey",color:"#d9d6d0",name:"Grey"},{id:"rose",color:"#ead7d3",name:"Rose"},{id:"terracotta",color:"#e2b89a",name:"Terracotta"},{id:"mint",color:"#d5e4dc",name:"Mint"}];function hu(i,e){return e==="marble"?i.marble:e==="tile"?i.tile:i.wood}function uu(i,e){e==="white"?(i.cabinet.color.set("#f3f1ec"),i.cabinet.map=null,i.counter.color.set("#ece9e2"),i.counter.map=null,i.counter.roughness=.18,"clearcoat"in i.counter&&(i.counter.clearcoat=.85,i.counter.clearcoatRoughness=.1)):e==="walnut"?(i.cabinet.color.set("#6b4324"),i.cabinet.map=i.wood.map,i.counter.color.set("#1f1f1f"),i.counter.map=null,i.counter.roughness=.25):e==="black"?(i.cabinet.color.set("#1e1f21"),i.cabinet.map=null,i.counter.color.set("#d8d4cc"),i.counter.map=null,i.counter.roughness=.25):(i.cabinet.color.set("#6b4324"),i.cabinet.map=i.wood.map,i.counter.color.set("#ffffff"),i.counter.map=i.granite.map,i.counter.normalMap=i.granite.normalMap,i.counter.roughnessMap=i.granite.roughnessMap,i.counter.roughness=.4),i.cabinet.needsUpdate=!0,i.counter.needsUpdate=!0}function du(i,e){const t=bs[e.style];i.fabric.color.set(t.fabric),i.fabric.needsUpdate=!0,i.woodFur.color.set(t.wood),i.woodFur.needsUpdate=!0,e.style==="luxury"?i.mattress.color.set("#efe2cc"):e.style==="traditional"?i.mattress.color.set("#f3e6d0"):e.style==="minimal"?i.mattress.color.set("#f4f2ec"):i.mattress.color.set("#ece6da"),i.mattress.needsUpdate=!0}function wa(i,e=1){const t=i.attributes.position;if(!t)return;const n=new Float32Array(t.count*2);for(let r=0;r<t.count;r++)n[r*2]=t.getX(r)*e+40,n[r*2+1]=-t.getZ(r)*e+40;i.setAttribute("uv",new Dt(n,2)),i.computeVertexNormals(),i.computeBoundingBox(),i.computeBoundingSphere();const s=i.attributes.normal;if(s&&s.getY(0)<0){for(let o=0;o<s.count;o++)s.setXYZ(o,-s.getX(o),-s.getY(o),-s.getZ(o));s.needsUpdate=!0;const r=i.index;if(r){for(let o=0;o<r.count;o+=3){const a=r.getX(o+1);r.setX(o+1,r.getX(o+2)),r.setX(o+2,a)}r.needsUpdate=!0}}}function Sa(i){return 1/(cv[i]??2)}function uv(i,e,t="#ffffff"){const n=e==="marble",s=e==="tile"||e==="tile-wet";return i.map.wrapS=i.map.wrapT=qt,i.normalMap.wrapS=i.normalMap.wrapT=qt,i.roughnessMap.wrapS=i.roughnessMap.wrapT=qt,new ot({color:t,map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:n?.28:s?.42:.62,metalness:0,envMapIntensity:n?.28:s?.2:.12,normalScale:new ie(n?.45:.7,n?.45:.7),side:Zt})}function dv(i,e){const t=e==="marble",n=e==="tile"||e==="tile-wet";i.roughness=t?.28:n?.42:.62,i.envMapIntensity=t?.28:n?.2:.12,i.metalness=0,i.normalScale&&i.normalScale.set(t?.45:.7,t?.45:.7),i.needsUpdate=!0}function fv(i,e,t){i.map=e.map,i.normalMap=e.normalMap,i.roughnessMap=e.roughnessMap,dv(i,t)}function _r(i,e){return e==="luxury"||e==="traditional"?i.brass:i.blackMetal}const gi=3.15,_o=7,Oi=8,fi=.35,pv={ox:.2,oz:10,rotY:180,mirrorX:!1,mirrorZ:!1,width:11,depth:9},mv={ox:16.2,oz:10,rotY:0,mirrorX:!1,mirrorZ:!0,width:11,depth:9},gv={ox:8.45,oz:0,rotY:180,mirrorX:!1,mirrorZ:!1,width:10.5,depth:10},Qs={ox:(27.4-12.192)/2,oz:2.6,rotY:0,mirrorX:!1,mirrorZ:!1,width:12.192,depth:15.24},sn={x:11.2,z:10,w:5,d:6.2},ki=[[.2,10],[.2,19.2],[27.2,19.2],[27.2,10],[18.95,10],[18.95,0],[8.45,0],[8.45,10]];function xo(i){return i===Oi?[{suffix:"PH",planId:"penthouse",typeLabel:"Penthouse",transform:Qs}]:[{suffix:"A",planId:"2bhk",typeLabel:"2 BHK",transform:pv},{suffix:"B",planId:"2bhk",typeLabel:"2 BHK",transform:mv},{suffix:"C",planId:"3bhk",typeLabel:"3 BHK",transform:gv}]}function er(i,e){return`${i}${e}`}function dn(i,e,t){let n=t.mirrorX?t.width-i:i,s=t.mirrorZ?t.depth-e:e;const r=t.rotY*Math.PI/180,o=t.width/2,a=t.depth/2,c=n-o,l=s-a,h=Math.cos(r),u=Math.sin(r),d=c*h-l*u+o,p=c*u+l*h+a;return[t.ox+d,t.oz+p]}function tr(i,e){const t=[[i.x,i.z],[i.x+i.w,i.z],[i.x+i.w,i.z+i.d],[i.x,i.z+i.d]].map(([l,h])=>dn(l,h,e)),n=t.map(l=>l[0]),s=t.map(l=>l[1]),r=Math.min(...n),o=Math.max(...n),a=Math.min(...s),c=Math.max(...s);return{x:r,z:a,w:o-r,d:c-a}}function bv(i){return{minX:i.x,maxX:i.x+i.w,minZ:i.z,maxZ:i.z+i.d}}function gl(i){return fi+(i-1)*gi}function fu(){return[13.7,10.6]}function Ea(i){return i===Oi?"Penthouse":`Floor ${i}`}function Fd(i){return i.type==="Penthouse"&&i.terraceArea_sqft?`${i.area_sqft.toLocaleString("en-IN")} sq ft + ${i.terraceArea_sqft.toLocaleString("en-IN")} sq ft terrace`:`${i.area_sqft.toLocaleString("en-IN")} sq ft`}function _v(){const i=new Lo;i.moveTo(ki[0][0],ki[0][1]);for(let e=1;e<ki.length;e++)i.lineTo(ki[e][0],ki[e][1]);return i.closePath(),i}function Fi(i,e,t){const n=new ll(_v(),{depth:e,bevelEnabled:!1});n.rotateX(-Math.PI/2);const s=new he(n,i);return s.position.y=t,s.castShadow=!0,s.receiveShadow=!0,s}function xv(i){const e=new Et;e.name="tower";const t=[],n=[],s=new ot({color:"#c5c0b6",roughness:.86,metalness:.04}),r=new ot({color:"#8d8880",roughness:.8,metalness:.06}),o=new ot({color:"#e6e0d4",roughness:.72,metalness:.04}),a=new ot({color:"#9ec6da",transparent:!0,opacity:.42,roughness:.08,metalness:.28,envMapIntensity:1.1}),c=i.frame,l=new ot({color:"#d9d3c7",map:i.pave.map,normalMap:i.pave.normalMap,roughnessMap:i.pave.roughnessMap,roughness:.85});i.pave.map.repeat.set(14,14),i.pave.normalMap.repeat.set(14,14),i.pave.roughnessMap.repeat.set(14,14);const h=new he(new ni(48,42),l);h.rotation.x=-Math.PI/2,h.position.set(13.7,0,9),h.receiveShadow=!0,e.add(h);const u=new he(new ni(160,160),new ot({color:"#6a8a4a",map:i.grass.map,normalMap:i.grass.normalMap,roughnessMap:i.grass.roughnessMap,roughness:.95}));i.grass.map.repeat.set(18,18),i.grass.normalMap.repeat.set(18,18),i.grass.roughnessMap.repeat.set(18,18),u.rotation.x=-Math.PI/2,u.position.set(13.7,-.05,9),u.receiveShadow=!0,e.add(u);const d=new he(new ni(8,36),new ot({color:"#6a6e72",map:i.concfloor.map,roughnessMap:i.concfloor.roughnessMap,roughness:.9}));d.rotation.x=-Math.PI/2,d.position.set(13.7,.015,32),d.receiveShadow=!0,e.add(d);const p=new he(new Ve(8,.2,4),i.water);p.position.set(13.7,.05,24.5),e.add(p);const g=new he(new Ve(8.4,.28,4.4),o);g.position.set(13.7,-.05,24.5),g.receiveShadow=!0,e.add(g);for(const[k,G,F]of Ev())e.add(Sv(k,G,F,i));const b=new he(new Ve(6.5,1.6,.25),r);b.position.set(4,.8,24),b.castShadow=!0,e.add(b);const m=document.createElement("div");m.className="unit-card",m.innerHTML='<div class="u-id">Sample Tower</div><div class="u-meta">Lead Setu demo · not a real project</div>',m.style.pointerEvents="none";const f=new As(m);f.position.set(4,2.1,24),f.userData.structure=!0,e.add(f),b.userData.structure=!0;const x=Fi(r,fi,0);e.add(x);const v=fi+_o*gi+4.2,_=[[.4,10.2],[.4,18.9],[11,18.9],[16.4,18.9],[27,18.9],[27,10.2],[18.75,10.2],[18.75,.3],[8.65,.3],[8.65,10.2],[11.4,10.2],[16,10.2]];for(const[k,G]of _){const F=new he(new Ve(.45,v,.45),s);F.position.set(k,v/2,G),F.castShadow=!0,F.userData.structure=!0,e.add(F)}for(let k=1;k<=_o;k++){const G=vv(k,i,s,o,a,c);e.add(G),n.push(G);const F=G.getObjectByName("hit");F&&t.push(F)}const E=yv(i,s,o,a);e.add(E),n.push(E);const R=E.getObjectByName("hit");R&&t.push(R);const T=fi+_o*gi,C=new he(new Ve(sn.w-.4,T,sn.d-.4),a);C.position.set(sn.x+sn.w/2,fi+T/2,sn.z+sn.d/2),C.userData.structure=!0,C.userData.windowGlow=!0,e.add(C);for(const k of[-1.1,1.1]){const G=new he(new Ve(1.5,.1,1.6),i.metal);G.position.set(sn.x+sn.w/2+k,fi+1.2,sn.z+1.4),e.add(G)}const M=new he(new Ve(8,.18,3.2),o);M.position.set(13.7,fi+3,-1.4),M.castShadow=!0,M.userData.structure=!0,e.add(M);for(const k of[-3.6,3.6]){const G=new he(new on(.12,.12,3,12),r);G.position.set(13.7+k,fi+1.5,-2.6),G.castShadow=!0,G.userData.structure=!0,e.add(G)}function y(k){for(const G of n){const F=G.userData.floor,W=G.getObjectByName("highlight");W&&(W.visible=k===F);const K=G.getObjectByName("floor-label");K&&(K.visible=N===null&&k===F)}}const A=[];e.traverse(k=>{k.userData.structure&&A.push(k)});let N=null;function I(k){N=k;for(const G of n){const F=G.userData.floor;k===null?(G.visible=!0,G.traverse(W=>{(W.userData.facade||W.userData.hideInCutaway)&&(W.visible=!0),W.name==="floor-label"&&(W.visible=!1),W.name==="highlight"&&(W.visible=!1)})):(G.visible=F===k,G.traverse(W=>{(W.userData.facade||W.userData.hideInCutaway)&&(W.visible=!1),W.name==="floor-label"&&(W.visible=!1)}))}for(const G of A)G.visible=k===null}function U(k){const G=k==="night",F=k==="golden";e.traverse(W=>{if(!(W instanceof he)||!W.userData.windowGlow)return;const K=W.material;G?(K.emissive.set("#ffc078"),K.emissiveIntensity=3.2,K.opacity=.95,K.transparent=!0,K.color.set("#f6d7a4")):F?(K.emissive.set("#ffb070"),K.emissiveIntensity=.55,K.opacity=.55,K.color.set("#9ec6da")):(K.emissive.set("#000000"),K.emissiveIntensity=0,K.opacity=.42,K.color.set("#9ec6da"))})}function z(){e.removeFromParent()}return{group:e,floorHits:t,highlight:y,setIsolated:I,setTime:U,dispose:z}}function vv(i,e,t,n,s,r){const o=new Et;o.userData.floor=i;const a=gl(i),c=Fi(n,.28,a);c.userData.ghostable=!0,o.add(c);const l=Fi(n,.18,a+gi-.18);l.userData.ghostable=!0,l.userData.hideInCutaway=!0,o.add(l),Mv(o,a+.28,gi-.5,s,r,t),pu(o,5.6,a,19.2,4.8,1.5,e,t),pu(o,16.8,a,19.2,4.8,1.5,e,t);const h=Fi(new Xt({visible:!1}),gi,a);h.name="hit",h.userData.floor=i,o.add(h);const u=new Xt({color:"#c4a265",transparent:!0,opacity:.28,depthWrite:!1,side:Zt}),d=Fi(u,gi,a);d.name="highlight",d.visible=!1,o.add(d);const p=document.createElement("div");p.className="unit-card",p.style.padding="4px 8px",p.style.pointerEvents="none",p.innerHTML=`<div class="u-id">${i}</div>`;const g=new As(p);return g.position.set(-.6,a+gi/2,14.6),g.name="floor-label",o.add(g),o}function yv(i,e,t,n,s){const r=new Et;r.userData.floor=Oi;const o=gl(Oi),a=Fi(t,.22,o);a.userData.ghostable=!0,r.add(a);const c=Fi(new ot({color:"#c9b9a0",map:i.terra.map,roughnessMap:i.terra.roughnessMap,roughness:.8}),.04,o+.22);r.add(c),wv(r,o+.22,1.05,e);const l=Qs.width,h=Qs.depth,u=Qs.ox+l/2,d=Qs.oz+h/2,p=3.2,g=new he(new Ve(l,p,h),e);g.position.set(u,o+.22+p/2,d),g.castShadow=!0,g.userData.ghostable=!0,g.userData.hideInCutaway=!0,r.add(g);for(const[E,R,T,C]of[[0,h/2+.02,l*.7,.08],[0,-h/2-.02,l*.55,.08],[l/2+.02,0,.08,h*.5],[-l/2-.02,0,.08,h*.45]]){const M=new he(new Ve(T,p*.62,C),n);M.position.set(u+E,o+.22+p*.5,d+R),M.userData.windowGlow=!0,r.add(M)}const b=new he(new Ve(l+.5,.2,h+.5),t);b.position.set(u,o+.22+p+.1,d),b.castShadow=!0,b.userData.hideInCutaway=!0,r.add(b);const m=new he(new Ve(28,4.2,22),new Xt({visible:!1}));m.position.set(13.7,o+2,10),m.name="hit",m.userData.floor=Oi,r.add(m);const f=new Xt({color:"#c4a265",transparent:!0,opacity:.28,depthWrite:!1}),x=new he(new Ve(28,4.2,22),f);x.position.set(13.7,o+2,10),x.name="highlight",x.visible=!1,r.add(x);const v=document.createElement("div");v.className="unit-card",v.innerHTML='<div class="u-id">PH</div><div class="u-meta">Penthouse</div>',v.style.pointerEvents="none";const _=new As(v);return _.position.set(u,o+4.2,d),_.name="floor-label",r.add(_),r}function Mv(i,e,t,n,s,r){const o=[{x:.2,z:19.2,len:27,alongX:!0,inward:-1},{x:.2,z:10,len:8.25,alongX:!0,inward:1},{x:18.95,z:10,len:8.25,alongX:!0,inward:1},{x:8.45,z:0,len:10.5,alongX:!0,inward:1},{x:.2,z:10,len:9.2,alongX:!1,inward:1},{x:27.2,z:10,len:9.2,alongX:!1,inward:-1},{x:8.45,z:0,len:10,alongX:!1,inward:-1},{x:18.95,z:0,len:10,alongX:!1,inward:1}],a=1.5,c=1.1,l=t*.72;for(const h of o){const u=Math.max(1,Math.floor(h.len/a));for(let d=0;d<u;d++){const p=(d+.5)/u,g=h.alongX?h.x+p*h.len:h.x,b=h.alongX?h.z:h.z+p*h.len,m=h.alongX?0:h.inward*.08,f=h.alongX?h.inward*.08:0,x=new he(new Ve(h.alongX?a-.08:.16,t,h.alongX?.16:a-.08),r);x.position.set(g,e+t/2,b),x.userData.ghostable=!0,x.userData.facade=!0,x.castShadow=!0,i.add(x);const v=new he(new Ve(h.alongX?c:.05,l,h.alongX?.05:c),n);v.position.set(g+m,e+t*.5,b+f),v.userData.facade=!0,v.userData.windowGlow=!0,i.add(v);const _=new he(new Ve(h.alongX?c+.06:.06,l+.06,h.alongX?.06:c+.06),s);_.position.set(g+m,e+t*.5,b+f),_.userData.facade=!0,i.add(_)}}}function pu(i,e,t,n,s,r,o,a){const c=new he(new Ve(s,.12,r),a);c.position.set(e+s/2,t+.2,n+r/2),c.castShadow=!0,c.receiveShadow=!0,i.add(c);const l=1.05,h=new he(new Ve(s,l,.03),o.glassRail);h.position.set(e+s/2,t+.2+l/2,n+r),i.add(h);const u=new he(new Ve(.03,l,r),o.glassRail);u.position.set(e,t+.2+l/2,n+r/2),i.add(u);const d=new he(new Ve(.03,l,r),o.glassRail);d.position.set(e+s,t+.2+l/2,n+r/2),i.add(d)}function wv(i,e,t,n,s){const r=[...ki,ki[0]];for(let o=0;o<r.length-1;o++){const a=r[o],c=r[o+1],l=c[0]-a[0],h=c[1]-a[1],u=Math.hypot(l,h),d=(a[0]+c[0])/2,p=(a[1]+c[1])/2,g=Math.atan2(l,h),b=new he(new Ve(.12,t,u),n);b.position.set(d,e+t/2,p),b.rotation.y=g,b.castShadow=!0,i.add(b)}}function Sv(i,e,t,n){const s=new Et,r=new he(new on(.16,.22,t*.45,8),n.woodFur);r.position.set(i,t*.225,e),r.castShadow=!0,s.add(r);const o=n.plant.clone();o.color.set("#2a5a32");const a=new he(new kn(t*.32,12,10),o);a.position.set(i,t*.58,e),a.scale.set(1.1,.95,1.1),a.castShadow=!0,s.add(a);const c=new he(new kn(t*.24,10,8),o);return c.position.set(i+.4,t*.5,e-.2),c.castShadow=!0,s.add(c),s}function Ev(){return[[-6,6,5.5],[-8,16,6.2],[-5,26,5],[32,6,5.8],[34,16,6.5],[31,28,5.2],[2,34,4.8],[25,34,5.4],[13.7,40,6],[4,-8,5],[24,-8,5.6],[13.7,-10,4.6],[-10,-2,6],[36,-2,5.5]]}const Xs=new L;function ln(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Xs.copy(e),Xs[n]=0,Xs.normalize();const l=.5*o/(o+a),h=1-Xs.angleTo(i)/c;return Math.sign(Xs[t])===1?h*l:a/(o+a)+l+l*(1-h)}class Tv extends Ve{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new L,b=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=ln(g,c,"z","y",r,n),d[f+1]=1-ln(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-ln(g,c,"z","y",r,n),d[f+1]=1-ln(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-ln(g,c,"x","z",r,e),d[f+1]=ln(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-ln(g,c,"x","z",r,e),d[f+1]=1-ln(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-ln(g,c,"x","y",r,e),d[f+1]=1-ln(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=ln(g,c,"x","y",r,e),d[f+1]=1-ln(g,c,"y","x",r,t);break}}}function Od(i){const e=i.map(a=>a[0]),t=i.map(a=>a[1]),n=Math.min(...e),s=Math.max(...e),r=Math.min(...t),o=Math.max(...t);return{minX:n,maxX:s,minZ:r,maxZ:o,cx:(n+s)/2,cz:(r+o)/2,w:s-n,d:o-r}}function bl(i,e,t){let n=!1;const s=i.length;for(let r=0,o=s-1;r<s;o=r++){const[a,c]=i[r],[l,h]=i[o];c>t!=h>t&&e<(l-a)*(t-c)/(h-c+1e-12)+a&&(n=!n)}return n}function yi(i){return{fx:Math.sin(i),fz:Math.cos(i)}}function To(i,e,t,n,s){const r=Math.cos(s),o=Math.sin(s);let a=1/0,c=-1/0,l=1/0,h=-1/0;for(const[u,d]of[[-t/2,-n/2],[t/2,-n/2],[t/2,n/2],[-t/2,n/2]]){const p=i+u*r+d*o,g=e-u*o+d*r;p<a&&(a=p),p>c&&(c=p),g<l&&(l=g),g>h&&(h=g)}return{minX:a,maxX:c,minZ:l,maxZ:h}}function vi(i,e){const t=Math.max(0,Math.min(i.maxX,e.maxX)-Math.max(i.minX,e.minX)),n=Math.max(0,Math.min(i.maxZ,e.maxZ)-Math.max(i.minZ,e.minZ));return t*n}function No(i,e){const t=(i.ax+i.bx)/2,n=(i.az+i.bz)/2,s=i.bx-i.ax,r=i.bz-i.az,o=Math.hypot(s,r)||1,a=-r/o,c=s/o,l=(h,u)=>bl(e,t+h*.25,n+u*.25);return l(a,c)?{mx:t,mz:n,ix:a,iz:c,width:i.width||o}:l(-a,-c)?{mx:t,mz:n,ix:-a,iz:-c,width:i.width||o}:null}function zd(i,e=.6){const t=-i.iz,n=i.ix,s=Math.max(i.width,.7)/2,r=[];for(const o of[-s,s])for(const a of[.04,e])r.push([i.mx+t*o+i.ix*a,i.mz+n*o+i.iz*a]);return{minX:Math.min(...r.map(o=>o[0])),maxX:Math.max(...r.map(o=>o[0])),minZ:Math.min(...r.map(o=>o[1])),maxZ:Math.max(...r.map(o=>o[1]))}}function Av(i,e,t,n){const s=[],r=i.filter(o=>!o.ghost);for(let o=0;o<r.length;o++)for(let a=o+1;a<r.length;a++){const c=r[o],l=r[a];if(c.group&&c.group===l.group)continue;const h=vi(c,l);h>.008&&s.push({severity:"error",a:`${c.roomId}/${c.id}`,b:`${l.roomId}/${l.id}`,kind:"overlap",message:`${c.kind} overlaps ${l.kind} by ${h.toFixed(3)} m²`})}for(const o of r)if(!o.wallHug)for(const a of e){const c=vi(o,a);c>.01&&s.push({severity:"error",a:`${o.roomId}/${o.id}`,b:"wall",kind:"wall",message:`${o.kind} intersects a wall by ${c.toFixed(3)} m²`})}for(const{poly:o,door:a}of t){const c=No(a,o);if(!c)continue;const l=zd(c,.6);for(const h of r){if(h.tight&&!["shower","wardrobe","kitchen","fridge","sofa","bed"].includes(h.kind))continue;const u=vi(h,l);u>.02&&s.push({severity:"error",a:`${h.roomId}/${h.id}`,b:"doorway",kind:"doorway",message:`${h.kind} blocks a 60 cm doorway clearance (${u.toFixed(3)} m²)`})}}for(const{sofa:o,coffee:a,gap:c}of n)(c<.38||c>.52)&&s.push({severity:"error",a:`${o.roomId}/${o.id}`,b:`${a.roomId}/${a.id}`,kind:"coffee-gap",message:`coffee table is ${c.toFixed(2)} m from the sofa front (need 0.40–0.45 m)`});return s}function Rv(i){return i.map(e=>`[${e.severity}] ${e.kind}: ${e.message} (${e.a} × ${e.b})`).join(`
`)}function Cv(i,e){const t=i.filter(n=>n.severity==="error");if(t.length)throw new Error(`Layout failed for ${e}:
${Rv(t)}`)}const ee={sofaD:.9,sofaLen:2.2,sofaLenLarge:2.45,coffeeD:.55,coffeeGap:.43,coffeeH:.38,tvD:.4,tvW:1.7,tvH:.44,armchairW:.78,armchairD:.82,table4w:1.4,table4d:.85,table6w:1.8,table6d:.9,chairW:.44,chairD:.48,chairClear:.14,bedMasterW:1.9,bedMasterD:2.1,bedW:1.5,bedD:2,nightW:.44,nightD:.4,nightGap:.08,wardD:.55,wardH:2.2,kitD:.6,fridgeW:.6,fridgeD:.64,fridgeH:1.85,basinW:.7,basinD:.46,toiletW:.4,toiletD:.68,shower:.85,loungeW:.68,loungeD:.82,plantR:.26,lampR:.16};function Cc(i){const e=To(i.x,i.z,i.w,i.d,i.rot);return{id:i.id,roomId:i.roomId,kind:i.kind,...e,group:i.group,wallHug:i.wallHug,tight:i.tight,ghost:i.ghost}}function Pv(i,e){const t=[];for(const n of e){const s=No(n,i.polygon);s&&t.push(zd(s,.6))}return t}function Lv(i,e,t){for(const n of i)if(bl(n,e,t))return!0;return!1}function Pc(i,e,t,n,s,r,o={}){if(o.ghost)return!0;const a=To(e,t,n,s,r),c=[[a.minX,a.minZ],[a.maxX,a.minZ],[a.maxX,a.maxZ],[a.minX,a.maxZ],[e,t]],l=o.wallHug?-.04:.02,{a:h}=i;if((a.minX<h.minX+l||a.maxX>h.maxX-l||a.minZ<h.minZ+l||a.maxZ>h.maxZ-l)&&(!bl(i.room.polygon,e,t)||!o.wallHug&&(a.minX<h.minX-.02||a.maxX>h.maxX+.02||a.minZ<h.minZ-.02||a.maxZ>h.maxZ+.02)))return!1;for(const[u,d]of c)if(Lv(i.avoid,u,d))return!1;if(o.tight){for(const u of i.doorBoxes)if(vi(a,u)>.04)return!1}else for(const u of i.doorBoxes)if(vi(a,u)>.015)return!1;for(const u of i.out){if(u.ghost||o.group&&u.group===o.group)continue;const d=To(u.x,u.z,u.w,u.d,u.rot);if(vi(a,d)>.008)return!1}return!0}function et(i,e){if(!Pc(i,e.x,e.z,e.w,e.d,e.rot,e))return null;const t={...e,roomId:i.room.id};return i.out.push(t),t}function Dv(i,e,t=[],n=[]){const s=Od(i.polygon);if(s.w<.8||s.d<.8)return[];const r={room:i,a:s,prefs:e,avoid:t,doorBoxes:Pv(i,n),out:[]};switch(i.type){case"living":Iv(r);break;case"kitchen":Uv(r);break;case"bedroom":Fv(r,/master|1/i.test(i.name)||i.id==="master"||i.id==="bedroom1");break;case"bathroom":zv(r);break;case"utility":break;case"lobby":case"hall":Bv(r);break;case"dressing":case"linen":Hv(r);break;case"terrace":case"balcony":Gv(r);break}if(e.style==="traditional"&&i.type==="living"&&s.w*s.d>16){for(const[o,a]of ko(s,.38))if(et(r,{id:"mandir",kind:"mandir",x:o,z:a,rot:0,w:.5,d:.28,h:1.1,wallHug:!0,tight:!0,variant:"traditional"}))break}return r.out}function ko(i,e){return[[i.maxX-e,i.maxZ-e],[i.minX+e,i.maxZ-e],[i.maxX-e,i.minZ+e],[i.minX+e,i.minZ+e]]}function Iv(i){const{a:e,prefs:t,room:n}=i,s=e.w>=e.d,r=/kitchen/i.test(n.name)||n.id==="lounge",o=n.id==="lounge"?"south":"north",a=s&&e.w>=6.2,c=Math.min(s?e.w*.4:e.d*.46,a?ee.sofaLenLarge:ee.sofaLen),l=ee.sofaD,h=a&&!r;let u,d,p,g,b,m;s&&r&&o==="south"?(u=e.cx,d=e.maxZ-.08-l/2,p=Math.PI,g=e.maxX-.08-ee.tvD/2,b=e.cz,m=-Math.PI/2):s?(u=e.cx,d=e.minZ+.08+l/2,p=0,g=e.cx,b=e.maxZ-.08-ee.tvD/2,m=Math.PI):(u=e.minX+.08+l/2,d=e.cz,p=Math.PI/2,g=e.maxX-.08-ee.tvD/2,b=e.cz,m=-Math.PI/2),Pc(i,u,d,c,l,p,{wallHug:!0,group:"sofa"})||(u=s?e.cx:e.maxX-.08-l/2,d=s?e.maxZ-.08-l/2:e.cz,p=s?Math.PI:-Math.PI/2,g=s?e.cx:e.minX+.08+ee.tvD/2,b=s?e.minZ+.08+ee.tvD/2:e.cz,m=s?0:Math.PI/2);const{fx:f,fz:x}=yi(p);et(i,{id:"sofa",kind:"sofa",x:u,z:d,rot:p,w:c,d:l,h:.82,wallHug:!0,group:"sofa",variant:h?"l-shape":t.style});let v=null;if(h){const z=yi(p-Math.PI/2),k=1.45,G=u+f*((k-l)/2)+z.fx*(c/2-.42),F=d+x*((k-l)/2)+z.fz*(c/2-.42);et(i,{id:"sofa-chaise",kind:"sofa-chaise",x:G,z:F,rot:p,w:.84,d:k,h:.82,wallHug:!0,group:"sofa",variant:t.style})&&(v=z)}const _=l/2+ee.coffeeGap+ee.coffeeD/2,E=Math.min(.95,c*.48),R=v?{fx:-v.fx,fz:-v.fz}:{fx:0,fz:0},T=v?.32:0,C=u+f*_+R.fx*T,M=d+x*_+R.fz*T;et(i,{id:"coffee",kind:"coffee",x:C,z:M,rot:p,w:E,d:ee.coffeeD,h:ee.coffeeH,variant:t.style==="luxury"?"marble":"wood"});const y=Math.min(ee.tvW,(s?e.w:e.d)*.4);et(i,{id:"tv",kind:"tv",x:g,z:b,rot:m,w:y,d:ee.tvD,h:ee.tvH,wallHug:!0,variant:t.style});const A=Math.min(e.w*.48,2.4),N=Math.min(e.d*.4,1.8);if(et(i,{id:"rug",kind:"rug",x:u+f*1.15,z:d+x*1.15,rot:p,w:A,d:N,h:.02,ghost:!0,tight:!0}),/dining/i.test(n.name)||e.w>5.4||e.d>5.4){const z=e.w*e.d>28?6:4,k=z===6?ee.table6w:ee.table4w,G=z===6?ee.table6d:ee.table4d,F=Math.max(1.65,Math.min((s?e.w:e.d)*.26,2.2)),K=(s?[[e.minX+F,e.cz],[e.maxX-F,e.cz]]:[[e.cx,e.minZ+F],[e.cx,e.maxZ-F]]).find(([pe,j])=>Pc(i,pe,j,k,G,0,{group:"dining"})&&Math.hypot(pe-u,j-d)>=2.4);K&&Nv(i,K[0],K[1],z,k,G)}if(a){const z=s?[{x:e.minX+.08+ee.armchairD/2,z:d+x*1.85,rot:Math.PI/2},{x:e.maxX-.08-ee.armchairD/2,z:d+x*1.85,rot:-Math.PI/2}]:[{x:u+f*2.2,z:e.minZ+.08+ee.armchairD/2,rot:0},{x:u+f*2.2,z:e.maxZ-.08-ee.armchairD/2,rot:Math.PI}];for(const k of z)if(!(Math.hypot(k.x-u,k.z-d)<1.6)&&et(i,{id:"armchair",kind:"armchair",x:k.x,z:k.z,rot:k.rot,w:ee.armchairW,d:ee.armchairD,h:.8,variant:t.style}))break}r&&kv(i,o);let U=0;for(const[z,k]of ko(e,.36))if(!(Math.hypot(z-u,k-d)<1.15)){if(U===0)et(i,{id:"plant",kind:"plant",x:z,z:k,rot:0,w:ee.plantR*2,d:ee.plantR*2,h:1.15,tight:!0,wallHug:!0})&&U++;else if(U===1&&n.id==="lounge")et(i,{id:"plant2",kind:"plant",x:z,z:k,rot:0,w:ee.plantR*2,d:ee.plantR*2,h:1,tight:!0,wallHug:!0})&&U++;else if(et(i,{id:"lamp",kind:"lamp",x:z,z:k,rot:0,w:ee.lampR*2,d:ee.lampR*2,h:1.5,tight:!0,wallHug:!0,variant:t.style}))break}et(i,{id:"art",kind:"art",x:s?e.minX+.04:e.cx,z:s?e.cz:e.minZ+.04,rot:s?Math.PI/2:0,w:.9,d:.04,h:.65,wallHug:!0,tight:!0,ghost:!0,variant:t.style})}function Nv(i,e,t,n,s,r){const{prefs:o}=i;et(i,{id:"dining",kind:"diningTable",x:e,z:t,rot:0,w:s,d:r,h:.75,group:"dining",variant:o.style}),(n===6?[[-s*.28,r/2+ee.chairClear+ee.chairD/2,Math.PI],[s*.28,r/2+ee.chairClear+ee.chairD/2,Math.PI],[-s*.28,-(r/2+ee.chairClear+ee.chairD/2),0],[s*.28,-(r/2+ee.chairClear+ee.chairD/2),0],[-(s/2+ee.chairClear+ee.chairD/2),0,Math.PI/2],[s/2+ee.chairClear+ee.chairD/2,0,-Math.PI/2]]:[[-s*.22,r/2+ee.chairClear+ee.chairD/2,Math.PI],[s*.22,r/2+ee.chairClear+ee.chairD/2,Math.PI],[-s*.22,-(r/2+ee.chairClear+ee.chairD/2),0],[s*.22,-(r/2+ee.chairClear+ee.chairD/2),0]]).forEach(([c,l,h],u)=>{et(i,{id:`chair-${u}`,kind:"diningChair",x:e+c,z:t+l,rot:h,w:ee.chairW,d:ee.chairD,h:.85,tight:!0,group:"dining",variant:o.style})})}function Bd(i,e,t,n,s,r){const{fx:o,fz:a}=yi(t),c=-a,l=o;let h=-n/2,u=n/2;const d=To(i,e,n,s,t);for(const b of r){if(vi(d,b)<.01)continue;const m=(b.minX+b.maxX)/2,f=(b.minZ+b.maxZ)/2,x=(m-i)*c+(f-e)*l,v=Math.max(b.maxX-b.minX,b.maxZ-b.minZ)/2+.12,_=x-v,E=x+v,R=Math.min(u,_)-h,T=u-Math.max(h,E);if(R>=T&&R>.9)u=Math.min(u,_);else if(T>.9)h=Math.max(h,E);else return null}const p=u-h;if(p<.9)return null;const g=(h+u)/2;return{x:i+c*g,z:e+l*g,len:p}}function kv(i,e){const{a:t,prefs:n}=i,s=ee.kitD;let r=Math.min(e==="north"||e==="south"?t.w-.5:t.d-.5,3.4),o=t.cx,a=t.cz,c=0;e==="south"&&(a=t.minZ+s/2+.06,c=0,o=t.cx),e==="north"&&(a=t.maxZ-s/2-.06,c=Math.PI,o=t.cx),e==="east"&&(o=t.maxX-s/2-.06,c=-Math.PI/2,a=t.cz),e==="west"&&(o=t.minX+s/2+.06,c=Math.PI/2,a=t.cz);const l=Bd(o,a,c,r,s,i.doorBoxes);if(!l)return;o=l.x,a=l.z,r=l.len,et(i,{id:"kitchen",kind:"kitchen",x:o,z:a,rot:c,w:r,d:s,h:2.2,wallHug:!0,group:"kitchen",variant:n.kitchen+"-"+n.style+"-hob"});const{fx:h,fz:u}=yi(c),d=-u,p=h;for(const g of[1,-1]){const b=o+d*g*(r/2-.32)+h*.02,m=a+p*g*(r/2-.32)+u*.02;if(et(i,{id:"fridge",kind:"fridge",x:b,z:m,rot:c,w:ee.fridgeW,d:ee.fridgeD,h:ee.fridgeH,wallHug:!0,group:"kitchen"}))break}}function Uv(i){const{a:e,prefs:t}=i,n=ee.kitD,s=[{wall:"south",primary:!0},{wall:"east",primary:!1},{wall:"north",primary:!0},{wall:"west",primary:!1}];let r=0;const o=new Set;for(const c of s){if(r>=2)break;if(o.has(c.wall))continue;let l=c.wall==="north"||c.wall==="south"?Math.max(1.8,e.w-.25):Math.max(1.15,e.d-n-.5),h=e.cx,u=e.cz,d=0;c.wall==="south"&&(u=e.minZ+n/2+.05,d=0),c.wall==="north"&&(u=e.maxZ-n/2-.05,d=Math.PI),c.wall==="east"&&(h=e.maxX-n/2-.05,d=-Math.PI/2,u=e.minZ+n+l/2),c.wall==="west"&&(h=e.minX+n/2+.05,d=Math.PI/2,u=e.minZ+n+l/2);const p=Bd(h,u,d,l,n,i.doorBoxes);!p||!et(i,{id:r===0?"kitchen-south":"kitchen-east",kind:"kitchen",x:p.x,z:p.z,rot:d,w:p.len,d:n,h:2.2,wallHug:!0,group:"kitchen",variant:t.kitchen+(r===0?"-hob":"")})||(o.add(c.wall),r++)}const a=[{x:e.maxX-ee.fridgeD/2-.06,z:e.maxZ-ee.fridgeW/2-.08,rot:-Math.PI/2},{x:e.minX+ee.fridgeD/2+.06,z:e.maxZ-ee.fridgeW/2-.08,rot:Math.PI/2},{x:e.maxX-ee.fridgeD/2-.06,z:e.minZ+ee.fridgeW/2+.08,rot:-Math.PI/2}];for(const c of a)if(et(i,{id:"fridge",kind:"fridge",x:c.x,z:c.z,rot:c.rot,w:ee.fridgeW,d:ee.fridgeD,h:ee.fridgeH,wallHug:!0,group:"kitchen"}))break}function Fv(i,e){const{a:t,prefs:n}=i,s=e?ee.bedMasterW:ee.bedW,r=e?ee.bedMasterD:ee.bedD,a=Ov(t,i.doorBoxes)!=="north",c=Math.min(r,Math.max(1.8,t.d-.7)),l=Math.min(s,t.w-1.15),h=a?t.maxZ-.06:t.minZ+.06,u=a?h-c/2:h+c/2,d=a?Math.PI:0,p=t.cx;et(i,{id:"bed",kind:"bed",x:p,z:u,rot:d,w:l,d:c,h:.95,wallHug:!0,group:"bed",variant:n.style+(e?"-master":"")});const g=a?h-.35:h+.35,b=p-l/2-ee.nightGap-ee.nightW/2,m=p+l/2+ee.nightGap+ee.nightW/2;et(i,{id:"night-l",kind:"nightstand",x:b,z:g,rot:0,w:ee.nightW,d:ee.nightD,h:.5,tight:!0,wallHug:!0,group:"bed",variant:n.style}),et(i,{id:"night-r",kind:"nightstand",x:m,z:g,rot:0,w:ee.nightW,d:ee.nightD,h:.5,tight:!0,wallHug:!0,group:"bed",variant:n.style});const f=Math.min(1.8,Math.max(1,t.d*.45)),x=[],v=a?t.minZ+.15+f/2:t.maxZ-.15-f/2,_=t.cz;x.push({x:t.minX+.05+ee.wardD/2,z:v,rot:Math.PI/2},{x:t.maxX-.05-ee.wardD/2,z:v,rot:-Math.PI/2},{x:t.minX+.05+ee.wardD/2,z:_,rot:Math.PI/2},{x:t.maxX-.05-ee.wardD/2,z:_,rot:-Math.PI/2});for(const E of x){const R=p-l/2,T=p+l/2;if(!(E.rot>0&&E.x+ee.wardD/2>R-.06)&&!(E.rot<0&&E.x-ee.wardD/2<T+.06)&&et(i,{id:"wardrobe",kind:"wardrobe",x:E.x,z:E.z,rot:E.rot,w:f,d:ee.wardD,h:ee.wardH,wallHug:!0,variant:n.style}))break}if(e&&c+.55<t.d){const E=a?u-c/2-.28:u+c/2+.28;et(i,{id:"bench",kind:"bench",x:p,z:E,rot:0,w:l*.65,d:.38,h:.42,tight:!0,group:"bed",variant:n.style})}et(i,{id:"rug",kind:"rug",x:p,z:u,rot:0,w:l+.45,d:c+.35,h:.02,ghost:!0,tight:!0})}function Ov(i,e){if(!e.length)return null;const t={south:{minX:i.minX,maxX:i.maxX,minZ:i.minZ,maxZ:i.minZ+.7},north:{minX:i.minX,maxX:i.maxX,minZ:i.maxZ-.7,maxZ:i.maxZ},west:{minX:i.minX,maxX:i.minX+.7,minZ:i.minZ,maxZ:i.maxZ},east:{minX:i.maxX-.7,maxX:i.maxX,minZ:i.minZ,maxZ:i.maxZ}};let n=null,s=0;for(const r of Object.keys(t)){let o=0;for(const a of e)o+=vi(t[r],a);o>s&&(s=o,n=r)}return s>.01?n:null}function zv(i){const{a:e,prefs:t}=i,n=Math.min(ee.shower,Math.min(e.w,e.d)*.48),s=[[e.minX+.08+n/2,e.minZ+.08+n/2],[e.maxX-.08-n/2,e.minZ+.08+n/2],[e.minX+.08+n/2,e.maxZ-.08-n/2],[e.maxX-.08-n/2,e.maxZ-.08-n/2]],r=i.doorBoxes.map(h=>({x:(h.minX+h.maxX)/2,z:(h.minZ+h.maxZ)/2})),o=(h,u)=>r.length?Math.min(...r.map(d=>Math.hypot(h-d.x,u-d.z))):10;if(s.sort((h,u)=>o(u[0],u[1])-o(h[0],h[1])),e.w*e.d>=3.2){for(const[h,u]of s)if(et(i,{id:"shower",kind:"shower",x:h,z:u,rot:0,w:n,d:n,h:2.1,wallHug:!0,tight:!0,group:"bath"}))break}const a=[{x:e.cx,z:e.maxZ-.08-ee.basinD/2,rot:Math.PI},{x:e.cx,z:e.minZ+.08+ee.basinD/2,rot:0},{x:e.maxX-.08-ee.basinD/2,z:e.cz,rot:-Math.PI/2},{x:e.minX+.08+ee.basinD/2,z:e.cz,rot:Math.PI/2}];a.sort((h,u)=>o(u.x,u.z)-o(h.x,h.z));const c=Math.min(ee.basinW,Math.min(e.w,e.d)*.55);for(const h of a)if(et(i,{id:"basin",kind:"basin",x:h.x,z:h.z,rot:h.rot,w:c,d:ee.basinD,h:1.15,wallHug:!0,tight:!0,group:"bath",variant:t.style}))break;const l=[{x:e.minX+.12+ee.toiletD/2,z:e.cz,rot:Math.PI/2},{x:e.maxX-.12-ee.toiletD/2,z:e.cz,rot:-Math.PI/2},{x:e.cx,z:e.minZ+.12+ee.toiletD/2,rot:0},{x:e.cx,z:e.maxZ-.12-ee.toiletD/2,rot:Math.PI}];l.sort((h,u)=>o(u.x,u.z)-o(h.x,h.z));for(const h of l)if(et(i,{id:"toilet",kind:"toilet",x:h.x,z:h.z,rot:h.rot,w:ee.toiletW,d:ee.toiletD,h:.8,wallHug:!0,tight:!0,group:"bath"}))break}function Bv(i){const{a:e}=i,t=[{x:e.minX+.08+.2,z:e.cz,rot:Math.PI/2},{x:e.maxX-.08-.2,z:e.cz,rot:-Math.PI/2},{x:e.cx,z:e.minZ+.08+.2,rot:0}];for(const n of t)if(et(i,{id:"console",kind:"console",x:n.x,z:n.z,rot:n.rot,w:Math.min(1.1,(n.rot===0?e.w:e.d)*.6),d:.38,h:.85,wallHug:!0,tight:!0}))break;for(const[n,s]of ko(e,.34))if(et(i,{id:"plant",kind:"plant",x:n,z:s,rot:0,w:ee.plantR*2,d:ee.plantR*2,h:1.1,tight:!0,wallHug:!0}))break}function Hv(i){const{a:e}=i,t=e.w>=e.d,n=Math.min(t?e.w-.25:e.d-.25,1.6),s=t?[{x:e.cx,z:e.minZ+.06+ee.wardD/2,rot:0},{x:e.cx,z:e.maxZ-.06-ee.wardD/2,rot:Math.PI}]:[{x:e.minX+.06+ee.wardD/2,z:e.cz,rot:Math.PI/2},{x:e.maxX-.06-ee.wardD/2,z:e.cz,rot:-Math.PI/2}];for(const r of s)if(et(i,{id:"wardrobe",kind:"wardrobe",x:r.x,z:r.z,rot:r.rot,w:n,d:ee.wardD,h:ee.wardH,wallHug:!0,variant:"modern"}))break}function Gv(i){const{a:e}=i,t=e.w>=e.d,n=t?0:Math.PI/2,{fx:s,fz:r}=yi(n),o=e.cx,a=t?e.minZ+Math.min(e.d*.42,1.15):e.cz,c=.25,l=t?.5:0,h=t?0:.5;et(i,{id:"lounge-l",kind:"loungeChair",x:o-l,z:a-h,rot:n,w:ee.loungeW,d:ee.loungeD,h:.75,group:"outdoor"}),et(i,{id:"lounge-r",kind:"loungeChair",x:o+l,z:a+h,rot:n,w:ee.loungeW,d:ee.loungeD,h:.75,group:"outdoor"}),et(i,{id:"outdoor-table",kind:"outdoorTable",x:o+s*(ee.loungeD/2+c+.28),z:a+r*(ee.loungeD/2+c+.28),rot:n,w:.7,d:.5,h:.38,group:"outdoor"});for(const[u,d]of ko(e,.36))if(et(i,{id:"plant",kind:"plant",x:u,z:d,rot:0,w:ee.plantR*2,d:ee.plantR*2,h:1.05,tight:!0,wallHug:!0}))break}function mu(i){return i.map(Cc)}function Vv(i){const e=[],t=i.filter(s=>s.kind==="sofa"),n=i.filter(s=>s.kind==="coffee");for(const s of t){const r=n.find(u=>u.roomId===s.roomId);if(!r)continue;const{fx:o,fz:a}=yi(s.rot),c=s.x*o+s.z*a+s.d/2,h=r.x*o+r.z*a-r.d/2-c;e.push({sofa:Cc(s),coffee:Cc(r),gap:h})}return e}function Wv(i,e){const[t,n]=dn(i.x,i.z,e),{fx:s,fz:r}=yi(i.rot),[o,a]=dn(i.x+s,i.z+r,e),c=Math.atan2(o-t,a-n);return{...i,x:t,z:n,rot:c}}function Xv(i,e){return e?i.doors.map(t=>{const[n,s]=dn(t.ax,t.az,e),[r,o]=dn(t.bx,t.bz,e);return{ax:n,az:s,bx:r,bz:o,width:t.width}}):i.doors}function jv(i,e){return e?i.map(([t,n])=>dn(t,n,e)):i}function qv(i,e,t){const n=[];for(const l of i.rooms){const h=l.type==="living"?i.rooms.filter(u=>u.id!==l.id).map(u=>u.polygon):[];n.push(...Dv(l,e,h,i.doors))}const s=i.walls.map(l=>({minX:l.x,maxX:l.x+l.w,minZ:l.z,maxZ:l.z+l.d})),r=i.doors.flatMap(l=>i.rooms.filter(h=>No(l,h.polygon)).map(h=>({poly:h.polygon,door:l}))),o=Av(mu(n),s,r,Vv(n)),a=t?n.map(l=>Wv(l,t)):n,c=i.rooms.map(l=>({...l,polygon:jv(l.polygon,t)}));return{placements:a,footprints:mu(a),issues:o,rooms:c}}function Mi(i){return Od(i)}function Un(i,e,t,n,s,r,o=0,a=0,c=0){const l=new he(i,e);return l.position.set(t,n,s),l.rotation.set(o,a,c),l.castShadow=!0,l.receiveShadow=!0,r.add(l),l}function _e(i,e,t,n,s,r,o,a,c=0){return Un(new Ve(i,e,t),n,s,r,o,a,0,c,0)}function _t(i,e,t,n,s,r,o,a=0,c=0){return Un(new on(i,i,e,20),t,n,s,r,o,a,0,c)}function Qe(i,e,t,n,s,r,o,a,c,l=0){const h=Math.max(.004,Math.min(n,i/2-.002,e/2-.002,t/2-.002));return Un(new Tv(i,e,t,3,h),s,r,o,a,c,0,l,0)}let js=null;function Yv(){if(js)return js;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,62);return t.addColorStop(0,"rgba(0,0,0,0.62)"),t.addColorStop(.28,"rgba(0,0,0,0.34)"),t.addColorStop(.62,"rgba(0,0,0,0.12)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),js=new rl(i),js.colorSpace=Jn,js}function Qt(i,e,t,n,s,r=0){const o=new ni(1,1),a=new Xt({map:Yv(),color:"#000000",transparent:!0,opacity:.85,depthWrite:!1,depthTest:!0}),c=new he(o,a);c.rotation.x=-Math.PI/2,c.rotation.z=r,c.position.set(i,.012,e),c.scale.set(t*1.18,n*1.18,1),c.renderOrder=1,c.castShadow=c.receiveShadow=!1,c.name="contact-ao",s.add(c)}function xt(i,e,t,n){const s=new Et;return s.position.set(i,0,e),s.rotation.y=t,n.add(s),s}function Lc(i,e){return new Mt({color:i,roughness:.58,metalness:0,sheen:1,sheenRoughness:.32,sheenColor:new De(i).lerp(new De("#ffffff"),.18),clearcoat:.05,clearcoatRoughness:.7,normalMap:e.fabric.normalMap,roughnessMap:e.fabric.roughnessMap,normalScale:new ie(.55,.55),envMapIntensity:.28})}function Ns(i,e,t=!1){if(e==="luxury"||t){const n=i.fabric.color.getStyle();return Lc(n||"#5c1a1a",i)}return i.fabric}function wr(i){return new Mt({map:i.marble.map,normalMap:i.marble.normalMap,roughnessMap:i.marble.roughnessMap,roughness:.1,metalness:.03,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.25})}function fn(i,e){return _r(i,e)}let Li=null;function Kv(){if(!Li){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#c5c9ce",t.fillRect(0,0,256,256);const n=5,s=5,r=(256-s*(n+1))/n;for(let o=0;o<n;o++)for(let a=0;a<n;a++)t.fillStyle=(o+a)%2===0?"#f4f6f8":"#e8eef2",t.fillRect(s+o*(r+s),s+a*(r+s),r,r),t.fillStyle="rgba(255,255,255,0.35)",t.fillRect(s+o*(r+s),s+a*(r+s),r,3);Li=new rl(e),Li.colorSpace=gt,Li.wrapS=Li.wrapT=qt,Li.anisotropy=8}return new ot({map:Li,roughness:.42,metalness:.04,color:"#ffffff"})}function Zv(i,e,t){const n=i.material.map;n&&(n.repeat.set(e/5,t/5),n.needsUpdate=!0)}function $v(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=i.w,o=i.d,a=Ns(t,n),c=fn(t,n),l=n==="traditional",h=l?.16:.12;for(const b of[-(r/2-.1),r/2-.1])for(const m of[-(o/2-.1),o/2-.1])l?(_t(.035,h,t.woodFur,b,h/2,m,s),_t(.045,.03,t.woodFur,b,.02,m,s)):_t(n==="luxury"?.018:.022,h,c,b,h/2,m,s);Qe(r,.1,o,.02,t.woodFur,0,h+.05,0,s);const u=Math.max(2,Math.round(r/.75)),d=o-.22;for(let b=0;b<u;b++){const f=(r-.16)/u,x=-r/2+.08+f*b+f/2;Qe(f-.04,.14,d,.04,a,x,h+.16,.04,s)}for(let b=0;b<u;b++){const m=(r-.16)/u,f=-r/2+.08+m*b+m/2;Qe(m-.05,.42,.16,.045,a,f,h+.44,-o/2+.12,s)}l&&(_e(r,.08,.06,t.woodFur,0,.92,-o/2+.04,s),_e(.05,.7,.05,t.woodFur,-r/2+.04,.55,-o/2+.04,s),_e(.05,.7,.05,t.woodFur,r/2-.04,.55,-o/2+.04,s));const p=l?.12:.11,g=.28;Qe(p,g,o-.08,.04,l?t.woodFur:a,-r/2+p/2,h+.28,.02,s),Qe(p,g,o-.08,.04,l?t.woodFur:a,r/2-p/2,h+.28,.02,s),n==="luxury"&&_e(r-.04,.012,.012,t.brass,0,.72,-o/2+.2,s),Qt(i.x,i.z,r+.15,o+.1,e,i.rot)}function Jv(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=i.w,o=i.d,a=Ns(t,n),c=.12;for(const l of[-(r/2-.08),r/2-.08])for(const h of[-(o/2-.08),o/2-.08])_t(n==="luxury"?.018:.022,c,fn(t,n),l,c/2,h,s);Qe(r,.1,o,.02,t.woodFur,0,c+.05,0,s),Qe(r-.06,.14,o-.08,.04,a,0,c+.16,.02,s),Qe(.14,.36,o-.08,.04,a,-r/2+.08,c+.38,0,s),Qt(i.x,i.z,r+.1,o+.1,e,i.rot)}function Qv(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=Ns(t,n),o=i.w,a=i.d;for(const c of[-(o/2-.08),o/2-.08])for(const l of[-(a/2-.08),a/2-.08])_t(.02,.12,fn(t,n),c,.06,l,s);Qe(o,.1,a,.02,t.woodFur,0,.17,0,s),Qe(o-.08,.14,a-.16,.04,r,0,.28,.02,s),Qe(o-.08,.4,.14,.04,r,0,.52,-a/2+.1,s),Qe(.1,.26,a-.1,.035,r,-o/2+.06,.4,0,s),Qe(.1,.26,a-.1,.035,r,o/2-.06,.4,0,s),Qt(i.x,i.z,o,a,e,i.rot)}function ey(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=i.w,o=i.d,a=i.h,c=i.variant==="marble"||n==="luxury"?wr(t):t.woodFur,l=fn(t,n);if(Qe(r,.04,o,.012,c,0,a-.02,0,s),n==="luxury"){_e(r-.04,.012,o-.04,t.brass,0,.14,0,s);for(const h of[-(r/2-.05),r/2-.05])for(const u of[-(o/2-.05),o/2-.05])_e(.018,a-.04,.018,t.brass,h,(a-.04)/2,u,s)}else for(const h of[-(r/2-.07),r/2-.07])for(const u of[-(o/2-.07),o/2-.07])_t(.022,a-.04,n==="traditional"?t.woodFur:l,h,(a-.04)/2,u,s);_e(.22,.015,.16,t.fabric,-.16,a+.01,.04,s),_e(.22,.012,.16,t.woodFur,-.15,a+.025,.05,s),_t(.07,.04,n==="luxury"?t.brass:t.ceramic,.22,a+.03,-.06,s),Qt(i.x,i.z,r,o,e,i.rot)}function ty(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=i.w,o=i.d;Qe(r,.38,o,.015,t.woodFur,0,.22,0,s),_e(.006,.28,.01,t.frame,0,.22,o/2-.005,s),n==="luxury"&&_e(r+.02,.012,o+.02,wr(t),0,.42,0,s);const a=Math.min(r*.85,1.55),c=t.frame.clone();c.color.set("#111"),c.roughness=.28,_e(a,.72,.04,c,0,.88,-o/2+.06,s);const l=t.emissive.clone();l.color.set("#151b24"),l.emissive.set("#1a2430"),l.emissiveIntensity=.18,_e(a-.05,.64,.015,l,0,.88,-o/2+.085,s);for(const h of[-(r/2-.08),r/2-.08])for(const u of[-(o/2-.06),o/2-.06])_t(.018,.06,fn(t,n),h,.03,u,s);Qt(i.x,i.z,r,o,e,i.rot)}function ny(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=i.w,o=i.d,a=i.h,c=n==="luxury"?wr(t):t.woodFur;if(Qe(r,.05,o,.015,c,0,a-.02,0,s),n==="luxury")_t(.14,a-.08,t.woodFur,0,(a-.08)/2,0,s),_t(.28,.03,t.brass,0,.04,0,s);else for(const l of[-(r/2-.1),r/2-.1])for(const h of[-(o/2-.08),o/2-.08])_e(.07,a-.06,.07,t.woodFur,l,(a-.06)/2,h,s);Qt(i.x,i.z,r,o,e,i.rot)}function iy(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=Ns(t,n),o=i.w,a=i.d;for(const c of[-(o/2-.05),o/2-.05])for(const l of[-(a/2-.05),a/2-.05])_e(.035,.42,.035,t.woodFur,c,.21,l,s);Qe(o-.04,.05,a-.04,.015,r,0,.44,0,s),Qe(o-.06,.32,.04,.015,r,0,.72,-a/2+.03,s),_e(.03,.32,.03,t.woodFur,-o/2+.05,.62,-a/2+.03,s),_e(.03,.32,.03,t.woodFur,o/2-.05,.62,-a/2+.03,s)}function sy(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=i.w,o=i.d,a=(i.variant??"").includes("hob"),c=n==="modern"||n==="minimal";_e(r,.86,o-.02,t.cabinet,0,.43,.01,s);const l=Math.max(2,Math.round(r/.55));for(let x=1;x<l;x++){const v=-r/2+r/l*x;_e(.008,.72,.01,t.frame,v,.42,o/2-.005,s)}if(!c)for(let x=0;x<l;x++){const v=-r/2+r/l*(x+.5);_e(.08,.012,.012,fn(t,n),v,.5,o/2+.01,s)}const h=n==="luxury"?wr(t):n==="traditional"?new ot({map:t.granite?.map??t.counter.map,normalMap:t.granite?.normalMap,roughnessMap:t.granite?.roughnessMap,roughness:.35,metalness:.08}):t.counter,u=new ot({color:"#e8e6e1",roughness:.28,metalness:.06}),d=n==="luxury"||n==="traditional"?h:u;_e(r+.02,.05,o+.03,d,0,.885,.01,s);const p=Kv(),g=.58,b=_e(r,g,.02,p,0,.91+g/2,-o/2+.02,s);Zv(b,Math.max(4,r*3.2),3.2);const m=.62,f=2.05;if(a){const v=(r-.85)/2;v>.35&&(_e(v-.02,m,o-.12,t.cabinet,-r/2+v/2,f,-.02,s),_e(v-.02,m,o-.12,t.cabinet,r/2-v/2,f,-.02,s)),ry(s,t,0,o,.91)}else _e(r-.04,m,o-.12,t.cabinet,0,f,-.02,s),oy(s,t,0,o,.91)}function ry(i,e,t,n,s){const r=new Mt({color:"#1a1a1c",roughness:.12,metalness:.35,clearcoat:.6,clearcoatRoughness:.15,envMapIntensity:1.1});_e(.68,.03,.5,r,t,s+.03,.02,i);const o=new ot({color:"#3a3a3e",roughness:.4,metalness:.7});for(const[l,h]of[[-.16,-.1],[.16,-.1],[-.16,.12],[.16,.12]]){const u=new Io(.07,.008,8,24),d=new he(u,o);d.rotation.x=Math.PI/2,d.position.set(t+l,s+.05,h),d.castShadow=!0,i.add(d)}const a=new ot({color:"#c5c8cc",roughness:.28,metalness:.85,envMapIntensity:1}),c=new ot({color:"#2a2c30",roughness:.35,metalness:.7});Un(new Ve(.78,.1,.48),a,t,1.58,-.02,i),Un(new Ve(.7,.08,.42),c,t,1.5,-.02,i),_e(.26,1.05,.22,a,t,2.15,-n/2+.16,i),_e(.18,.03,.01,e.brass,t,1.58,.23,i)}function oy(i,e,t,n,s){const r=new ot({color:"#c8ccd0",roughness:.25,metalness:.8});_e(.48,.12,.36,r,t,s-.04,.04,i),_e(.4,.02,.28,e.water,t,s+.02,.04,i);const o=e.blackMetal;_t(.016,.2,o,t,s+.16,-n/2+.16,i),_e(.03,.03,.16,o,t,s+.26,-n/2+.22,i),_t(.01,.08,o,t,s+.22,0,i)}function ay(i,e,t){const n=xt(i.x,i.z,i.rot,e),s=i.w,r=i.d,o=i.h,a=new ot({color:"#dfe3e8",roughness:.28,metalness:.55,envMapIntensity:.7});Qe(s,o,r,.015,a,0,o/2,0,n),_e(s-.04,.008,.01,t.frame,0,o*.72,r/2-.005,n),_e(.018,.55,.02,t.blackMetal,s/2-.08,o*.42,r/2+.01,n),_e(.12,.16,.02,t.frame,0,o*.5,r/2+.008,n),Qt(i.x,i.z,s,r,e,i.rot)}function cy(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=i.w,o=i.d,a=(i.variant??"").includes("master");Ns(t,n),Qe(r+.08,.16,o+.06,.02,t.woodFur,0,.16,0,s);for(const g of[-(r/2-.08),r/2-.08])for(const b of[-(o/2-.08),o/2-.08])_t(.03,.1,t.woodFur,g,.05,b,s);const c=t.mattress.clone();Qe(r,.24,o-.08,.04,c,0,.38,.02,s);const l=n==="luxury"?Lc("#5c1a1a",t):t.fabric.clone();l instanceof ot&&n!=="luxury"&&(l.color.set(n==="traditional"?"#7a2e1f":n==="minimal"?"#e8e4db":"#3d4f63"),l.roughness=.9),Qe(r+.04,.09,o*.7,.04,l,0,.54,o*.08,s);const h=t.fabric.clone();h.color.set(n==="luxury"?"#c4a265":"#d9c7a3"),Qe(r+.05,.05,o*.2,.025,h,0,.6,o*.32,s);const u=t.mattress.clone();u.color.set("#f4efe6"),Qe(r*.38,.14,.3,.04,u,-r*.22,.62,-o/2+.28,s),Qe(r*.38,.14,.3,.04,u,r*.22,.62,-o/2+.28,s),a&&Qe(r*.3,.1,.2,.03,l,0,.68,-o/2+.42,s);const d=a?1.15:.95,p=n==="luxury"?Lc("#3a1010",t):t.fabric.clone();if(p instanceof ot&&p.color.set(n==="minimal"?"#d0cbc2":n==="traditional"?"#5c2218":"#2c3540"),Qe(r+.14,d,.1,.03,p,0,d/2+.1,-o/2-.04,s),n==="luxury")for(let b=0;b<4;b++){const m=-r/2+r/4*(b+.5);_e(.01,d-.16,.02,t.brass,m,d/2+.1,-o/2+.02,s)}n==="traditional"&&_e(r+.16,.05,.12,t.woodFur,0,d+.1,-o/2-.04,s),Qt(i.x,i.z,r+.3,o+.2,e,i.rot)}function ly(i,e,t,n){const s=xt(i.x,i.z,i.rot,e);Qe(i.w,.42,i.d,.015,t.woodFur,0,.27,0,s),_e(i.w-.08,.008,.01,t.frame,0,.3,i.d/2-.002,s),n==="luxury"&&_e(.06,.01,.01,t.brass,0,.3,i.d/2+.01,s);const r=t.fabric.clone();r.color.set("#f0e6d4"),r.emissive=new De("#f0e6d4"),r.emissiveIntensity=.12,_t(.04,.02,fn(t,n),0,.5,0,s),_t(.01,.2,fn(t,n),0,.61,0,s),Un(new on(.09,.13,.14,16),r,0,.8,0,s),Qt(i.x,i.z,i.w,i.d,e,i.rot)}function hy(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=i.w,o=i.d,a=i.h,c=n==="luxury"?new ot({color:"#3a2a22",roughness:.45,metalness:.08,map:t.wood.map,roughnessMap:t.wood.roughnessMap}):t.cabinet;_e(r,a,o,c,0,a/2,0,s),_e(.012,a-.12,.012,t.frame,0,a/2,o/2+.004,s),_e(r+.01,.03,o+.01,t.woodFur,0,a-.01,0,s),_e(r,.06,o,t.woodFur,0,.03,0,s),n!=="modern"&&n!=="minimal"&&(_e(.012,.42,.018,fn(t,n),-.06,a*.5,o/2+.012,s),_e(.012,.42,.018,fn(t,n),.06,a*.5,o/2+.012,s)),Qt(i.x,i.z,r,o,e,i.rot)}function uy(i,e,t,n){const s=xt(i.x,i.z,i.rot,e);Qe(i.w,.08,i.d,.02,Ns(t,n),0,.38,0,s),_e(i.w-.08,.28,i.d-.08,t.woodFur,0,.18,0,s)}function _l(i){return new Mt({color:"#f4f6f7",roughness:.16,metalness:.04,clearcoat:.55,clearcoatRoughness:.2,envMapIntensity:.8})}function dy(i,e,t){const n=xt(i.x,i.z,i.rot,e),s=_l();Qe(.36,.4,.5,.06,s,0,.32,.05,n),Qe(.34,.08,.08,.02,s,0,.54,-.18,n),_e(.36,.42,.16,s,0,.72,-.26,n),_t(.028,.04,t.blackMetal,.12,.9,-.26,n),Qt(i.x,i.z,.4,.6,e,i.rot)}function fy(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=_l(),o=i.w,a=i.d;Qe(o,.06,a,.01,n==="luxury"?wr(t):t.woodFur,0,.82,0,s),_e(o-.04,.7,a-.04,t.cabinet,0,.4,0,s),Un(new on(.18,.15,.1,24),r,0,.92,.02,s),_t(.014,.16,_r(t,n),0,1.04,-a/2+.12,s),_e(.03,.025,.14,_r(t,n),0,1.12,-a/2+.18,s);const c=new Mt({color:"#cfe0ea",roughness:.04,metalness:.35,envMapIntensity:1.3});_e(o*.85,.7,.02,n==="luxury"?t.brass:t.frame,0,1.55,-a/2+.02,s),_e(o*.85-.04,.64,.015,c,0,1.55,-a/2+.035,s),Qt(i.x,i.z,o,a,e,i.rot)}function py(i,e,t){const n=xt(i.x,i.z,i.rot,e),s=i.w,r=_l();_e(s,.05,s,r,0,.03,0,n);const o=t.glassRail;_e(s,1.95,.02,o,0,1.02,-s/2+.01,n),_e(.02,1.95,s,o,-s/2+.01,1.02,0,n),_e(s,.02,.02,t.blackMetal,0,2,-s/2+.01,n),_e(.02,.02,s,t.blackMetal,-s/2+.01,2,0,n),_e(.02,2,.02,t.blackMetal,s/2-.01,1.02,-s/2+.01,n),_e(.02,2,.02,t.blackMetal,-s/2+.01,1.02,s/2-.01,n),_e(.02,2,.02,t.blackMetal,-s/2+.01,1.02,-s/2+.01,n);const a=-s/2+.12,c=-s/2+.12;_t(.012,.22,t.blackMetal,a,2.08,c,n),_e(.012,.012,s*.28,t.blackMetal,a,2.18,c+s*.14,n),_e(.22,.02,.22,t.blackMetal,a,2.17,c+s*.28,n),_t(.045,.01,t.blackMetal,0,.06,0,n)}function my(i,e,t){const n=xt(i.x,i.z,i.rot,e),s=t.woodFur,r=i.w,o=i.d;for(const c of[-(r/2-.04),r/2-.04])_e(.05,.32,o,s,c,.2,0,n),_e(.05,.45,.05,s,c,.55,-o/2+.04,n);for(let c=0;c<6;c++){const l=-o/2+.08+c*((o-.12)/5);_e(r-.06,.025,.06,s,0,.36,l,n)}for(let c=0;c<4;c++)_e(r-.06,.06,.025,s,0,.48+c*.1,-o/2+.05,n);const a=t.fabric.clone();a.color.set("#d9c7a3"),Qe(r-.12,.07,o-.16,.03,a,0,.42,.04,n),Qt(i.x,i.z,r,o,e,i.rot)}function gy(i,e,t){const n=xt(i.x,i.z,i.rot,e);Qe(i.w,.04,i.d,.015,t.woodFur,0,i.h,0,n);for(const s of[-(i.w/2-.06),i.w/2-.06])for(const r of[-(i.d/2-.06),i.d/2-.06])_t(.02,i.h,t.blackMetal,s,i.h/2,r,n)}function by(i,e,t){const n=xt(i.x,i.z,i.rot,e);Qe(i.w,.05,i.d,.015,t.woodFur,0,.8,0,n),_e(i.w-.1,.7,.04,t.woodFur,0,.4,-i.d/2+.04,n),_e(.05,.78,i.d,t.woodFur,-i.w/2+.04,.4,0,n),_e(.05,.78,i.d,t.woodFur,i.w/2-.04,.4,0,n)}function _y(i,e,t,n,s){if(n?.has("plant")){const o={x:i.x,z:i.z,y:0,rotY:i.rot,width:.55,prefs:s,mats:t},a=n.instantiate("plant",o);if(a){e.add(a),Qt(i.x,i.z,.45,.45,e);return}}const r=xt(i.x,i.z,i.rot,e);_t(.13,.22,t.ceramic,0,.11,0,r),_t(.11,.06,t.soil,0,.22,0,r);for(let o=0;o<5;o++){const a=o/5*Math.PI*2;Un(new kn(.15+o%2*.05,10,8),t.plant,Math.cos(a)*.08,.45+o*.08,Math.sin(a)*.08,r)}Un(new kn(.2,10,8),t.plant,0,.55+i.h*.2,0,r)}function xy(i,e,t,n){const s=xt(i.x,i.z,i.rot,e);_t(.13,.03,fn(t,n),0,.02,0,s),_t(.014,1.42,fn(t,n),0,.73,0,s);const r=t.fabric.clone();r.color.set("#f0e6d4"),r.emissive=new De("#f0e6d4"),r.emissiveIntensity=.2,r.side=Zt,Un(new on(.16,.22,.28,16,1,!1),r,0,1.52,0,s)}function vy(i,e,t){const n=xt(i.x,i.z,i.rot,e);_e(i.w,.7,i.d,t.woodFur,0,1.15,0,n),_e(i.w+.04,.06,i.d+.02,t.brass,0,1.52,0,n),_e(i.w+.02,.04,i.d,t.woodFur,0,.78,0,n),_e(.04,.7,.04,t.woodFur,-i.w/2+.04,1.15,i.d/2,n),_e(.04,.7,.04,t.woodFur,i.w/2-.04,1.15,i.d/2,n);const s=t.emissive.clone();s.emissive.set("#ffd27a"),s.emissiveIntensity=.85,_t(.04,.06,s,0,1.05,i.d/2-.02,n)}function yy(i,e){const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d"),s=a=>{const c=Math.sin(i*12.9898+a*78.233)*43758.5453;return c-Math.floor(c)},r=e==="luxury"?["#5c1a1a","#8a3a2a","#c4a265","#efe2cc","#2a1810"]:e==="minimal"?["#d8d2c8","#b8b2a8","#8a8680","#efece6","#5a5854"]:e==="traditional"?["#7a2e1f","#c4a265","#e8d5b0","#3a2010","#a05a30"]:["#3d5a6c","#d8c2a8","#6a8a7a","#f0ebe3","#2c3a44"];n.fillStyle=r[0],n.fillRect(0,0,512,512);for(let a=0;a<5;a++){n.fillStyle=r[Math.floor(s(a+1)*r.length)],n.globalAlpha=.45+s(a+9)*.4;const c=s(a+2)*512-40,l=s(a+3)*512-40,h=80+s(a+4)*320,u=60+s(a+5)*280;s(a+6)>.45?n.fillRect(c,l,h,u):(n.beginPath(),n.ellipse(c+h/2,l+u/2,h/2,u/2,s(a+7)*.8,0,Math.PI*2),n.fill())}n.globalAlpha=.7,n.strokeStyle=r[Math.floor(s(20)*r.length)],n.lineWidth=6+s(21)*14,n.beginPath(),n.moveTo(0,180+s(22)*200),n.quadraticCurveTo(256,80+s(23)*300,512,200+s(24)*180),n.stroke(),n.globalAlpha=1,n.strokeStyle="rgba(255,255,255,0.18)",n.lineWidth=10,n.strokeRect(16,16,480,480);const o=new rl(t);return o.colorSpace=gt,o.anisotropy=4,o}function My(i,e,t,n){const s=xt(i.x,i.z,i.rot,e),r=n==="luxury"||n==="traditional"?t.brass:t.frame;_e(i.w,i.h,.04,r,0,1.45,0,s);const o=new ot({map:yy(i.x*17+i.z*31+i.w*9,n),roughness:.82,metalness:0,envMapIntensity:.15});_e(i.w-.08,i.h-.08,.02,o,0,1.45,.015,s)}function wy(i,e,t,n){const s=n==="luxury"?"#6b1d1d":n==="traditional"?"#7a3a1a":n==="minimal"?"#d8d2c8":"#3d4a58",r=t.fabric.clone();r.color.set(s),r.roughness=.95;const o=xt(i.x,i.z,i.rot,e);_e(i.w,.015,i.d,r,0,.012,0,o)}function Rn(i,e){const{fx:t,fz:n}=yi(e.rot);return{kind:i,x:e.x,z:e.z,fx:t,fz:n,width:e.w,height:e.h,roomId:e.roomId}}function Sy(i,e,t,n,s=null){const r=[],o=n.style;for(const a of i)switch(a.kind){case"sofa":$v(a,e,t,o),r.push(Rn("sofa",a));break;case"sofa-chaise":Jv(a,e,t,o);break;case"armchair":Qv(a,e,t,o);break;case"coffee":ey(a,e,t,o);break;case"tv":ty(a,e,t,o),r.push(Rn("tv",a));break;case"diningTable":ny(a,e,t,o),r.push(Rn("dining",a));break;case"diningChair":iy(a,e,t,o);break;case"kitchen":sy(a,e,t,o),r.push(Rn("kitchen",a));break;case"fridge":ay(a,e,t);break;case"bed":cy(a,e,t,o),r.push(Rn("bed",a));break;case"nightstand":ly(a,e,t,o);break;case"wardrobe":hy(a,e,t,o),r.push(Rn("wardrobe",a));break;case"bench":uy(a,e,t,o);break;case"toilet":dy(a,e,t),r.push(Rn("bath",a));break;case"basin":fy(a,e,t,o),r.push(Rn("basin",a));break;case"shower":py(a,e,t);break;case"loungeChair":my(a,e,t),r.push(Rn("outdoor",a));break;case"outdoorTable":gy(a,e,t);break;case"console":by(a,e,t),r.push(Rn("foyer",a));break;case"plant":_y(a,e,t,s,n);break;case"lamp":xy(a,e,t,o);break;case"mandir":vy(a,e,t);break;case"art":My(a,e,t,o);break;case"rug":wy(a,e,t,o);break}return r}function Ey(i,e,t,n,s,r,o,a){const c=t>=n,l=o.fabric.clone();l.color.set(a==="luxury"?"#5c1a1a":a==="traditional"?"#7a3a1a":a==="minimal"?"#efeae2":"#3d4a58"),l.side=Zt,l.roughness=.9,l.transparent=!1,l.normalScale=new ie(.85,.85);const h=Math.min(2.15,s-.35),u=.25+h/2,d=_r(o,a),p=6,g=(b,m,f,x)=>{for(let v=0;v<p;v++){const _=(v+.5)/p,E=Math.sin(v*1.35)*.018;if(c){const R=f/p*1.2;_e(R,h,.03,l,b-f/2+_*f,u,m+E,r)}else{const R=x/p*1.2;_e(.03,h,R,l,b+E,u,m-x/2+_*x,r)}}};if(c){const b=Math.max(.2,t*.18),m=e+(n>0?.09:-.09);g(i-t/2+b/2,m,b,.04),g(i+t/2-b/2,m,b,.04),_e(t+.14,.025,.025,d,i,.25+h+.03,m,r);const f=new he(new kn(.03,10,8),d);f.position.set(i-t/2-.05,.25+h+.03,m),r.add(f);const x=f.clone();x.position.x=i+t/2+.05,r.add(x)}else{const b=Math.max(.2,n*.18),m=i+(t>0?.09:-.09);g(m,e-n/2+b/2,.04,b),g(m,e+n/2-b/2,.04,b),_e(.025,.025,n+.14,d,m,.25+h+.03,e,r);const f=new he(new kn(.03,10,8),d);f.position.set(m,.25+h+.03,e-n/2-.05),r.add(f);const x=f.clone();x.position.z=e+n/2+.05,r.add(x)}}function Hd(i){let e=0;for(let t=0,n=i.length-1;t<i.length;n=t++)e+=i[n][0]*i[t][1]-i[t][0]*i[n][1];return e}function Dc(i,e,t){const n=e[0]-i[0],s=e[1]-i[1],r=Math.hypot(n,s)||1;return[-s/r*t,n/r*t]}function Ty(i,e,t){if(!t.length)return!0;const n=.18,s=5;let r=0;for(let o=0;o<=s;o++){const a=o/s,c=i[0]+(e[0]-i[0])*a,l=i[1]+(e[1]-i[1])*a;for(const h of t)if(c>=h.x-n&&c<=h.x+h.w+n&&l>=h.z-n&&l<=h.z+h.d+n){r+=1;break}}return r>=3}function Ay(i,e,t,n,s=[]){if(i.length<3)return;const r=Hd(i)>=0?1:-1,o=.11,a=.026;for(let c=0;c<i.length;c++){const l=i[c],h=i[(c+1)%i.length],u=h[0]-l[0],d=h[1]-l[1],p=Math.hypot(u,d);if(p<.18||!Ty(l,h,s))continue;const[g,b]=Dc(l,h,r),m=(l[0]+h[0])/2+g*(a/2+.005),f=(l[1]+h[1])/2+b*(a/2+.005),x=new Ve(a,o,p-.02);n.push(x);const v=new he(x,t);v.position.set(m,o/2,f),v.rotation.y=Math.atan2(u,d),v.castShadow=!1,v.receiveShadow=!0,v.name="skirting",e.add(v)}}function Ry(i,e,t,n,s){if(i.length<3)return;const r=Hd(i)>=0?1:-1,o=.42,a=.16,c=.04,l=n.ceiling.clone();l.color.set("#f3f0ea"),l.roughness=.9,s.extraMats.push(l);const h=e-a/2;for(let x=0;x<i.length;x++){const v=i[x],_=i[(x+1)%i.length],E=_[0]-v[0],R=_[1]-v[1],T=Math.hypot(E,R);if(T<.4)continue;const[C,M]=Dc(v,_,r),y=(v[0]+_[0])/2+C*(o/2),A=(v[1]+_[1])/2+M*(o/2),N=new Ve(o,a,T-.04);s.geos.push(N);const I=new he(N,l);I.position.set(y,h,A),I.rotation.y=Math.atan2(E,R),I.castShadow=!1,I.receiveShadow=!0,I.name="cove-soffit",t.add(I);const U=(v[0]+_[0])/2+C*(o-c/2),z=(v[1]+_[1])/2+M*(o-c/2),k=new Ve(c,c,T-.08);s.geos.push(k);const G=new he(k,l);G.position.set(U,e-a-c/2,z),G.rotation.y=Math.atan2(E,R),G.name="cove-lip",t.add(G)}const u=n.emissive.clone();u.emissive.set("#fff1d0"),u.emissiveIntensity=1.4,u.color.set("#fff6e4"),s.extraMats.push(u);const d=Mi(i),p=[];for(let x=0;x<i.length;x++){const v=i[x],_=i[(x+1)%i.length],E=_[0]-v[0],R=_[1]-v[1],T=Math.hypot(E,R);if(T<1.2)continue;const[C,M]=Dc(v,_,r),y=Math.max(1,Math.floor(T/1.7));for(let A=1;A<=y;A++){const N=A/(y+1),I=v[0]+E*N+C*(o-.08),U=v[1]+R*N+M*(o-.08);p.push({x:I,z:U})}}const g=s.mobile?6:10,b=Math.max(1,Math.ceil(p.length/g));let m=0;const f=s.mobile?0:4;for(let x=0;x<p.length;x+=b){const{x:v,z:_}=p[x],E=new he(new on(.07,.075,.04,16),u);E.position.set(v,e-a+.01,_),E.name="downlight",t.add(E);const R=new he(new Io(.075,.008,6,16),n.blackMetal);if(R.rotation.x=Math.PI/2,R.position.set(v,e-a-.005,_),t.add(R),m<f){const T=new Id("#fff3d6",1.35,6.5,.42,.45,1.4);T.position.set(v,e-a-.05,_),T.target.position.set(v,0,_),T.castShadow=!1,t.add(T),t.add(T.target),s.lights.push(T),m+=1}}if(d.w*d.d>16){const x=new he(new on(.08,.085,.04,16),u);x.position.set(d.cx,e-.04,d.cz),x.name="downlight-centre",t.add(x)}}function gu(i,e){if(e===xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===_c||e===td){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===_c)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Cy extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ny(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new Yy(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=or.extractUrlBase(e);o=or.resolveURL(l,this.path)}else o=or.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new mr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gd){try{o[$e.KHR_BINARY_GLTF]=new Ky(e)}catch(u){s&&s(u);return}r=JSON.parse(o[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new cM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:o[u]=new Dy;break;case $e.KHR_DRACO_MESH_COMPRESSION:o[u]=new Zy(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:o[u]=new $y;break;case $e.KHR_MESH_QUANTIZATION:o[u]=new Jy;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Py(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ly{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new De(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],It);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new gr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ul(h),l.distance=u;break;case"spot":l=new Id(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Dy{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,n){const s=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],It),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(s)}}class Iy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Ny{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mt}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(r)}}class ky{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mt}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Uy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mt}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Fy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mt}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],It)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Oy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mt}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class zy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mt}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],It),Promise.all(r)}}class By{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mt}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Hy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mt}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],It),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,gt)),Promise.all(r)}}class Gy{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mt}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Vy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mt}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Wy{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Xy{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jy{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qy{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}}class Yy{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==hn.TRIANGLES&&l.mode!==hn.TRIANGLE_STRIP&&l.mode!==hn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(const g of u){const b=new ze,m=new L,f=new Nn,x=new L(1,1,1),v=new d_(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,b.compose(m,f,x));for(const _ in c)if(_==="_COLOR_0"){const E=c[_];v.instanceColor=new yc(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);bt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Gd="glTF",qs=12,bu={JSON:1313821514,BIN:5130562};class Ky{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-qs,r=new DataView(e,qs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===bu.JSON){const l=new Uint8Array(e,qs+o,a);this.content=n.decode(l)}else if(c===bu.BIN){const l=qs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Zy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Ic[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Ic[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=_s[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(const g in p.attributes){const b=p.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(p)},a,l,It,d)})})}}class $y{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Jy{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Vd extends yr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,p=d*u,g=e*l,b=g-l,m=-2*p+3*d,f=p-d,x=1-m,v=f-d+u;for(let _=0;_!==a;_++){const E=o[b+_+a],R=o[b+_+c]*h,T=o[g+_+a],C=o[g+_]*h;r[_]=x*E+v*R+m*T+f*C}return r}}const Qy=new Nn;class eM extends Vd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Qy.fromArray(r).normalize().toArray(r),r}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},_s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_u={9728:Ut,9729:Lt,9984:Xu,9985:lo,9986:Zs,9987:Dn},xu={33071:Ln,33648:vo,10497:qt},Ta={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ic={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tM={CUBICSPLINE:void 0,LINEAR:hr,STEP:lr},Aa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),i.DefaultMaterial}function Di(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function sM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rM(i){let e;const t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ra(t.attributes):e=i.indices+":"+Ra(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ra(i.targets[n]);return e}function Ra(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Nc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const aM=new ze;class cM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Py,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Dd(this.options.manager):this.textureLoader=new px(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Di(r,a,s),Zn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(or.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ta[s.type],a=_s[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Dt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ta[s.type],l=_s[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let b,m;if(p&&p!==u){const f=Math.floor(d/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let v=t.cache.get(x);v||(b=new l(a,f*p,s.count*p/h),v=new a_(b,p/h),t.cache.add(x,v)),m=new nl(v,c,d%p/h,g)}else a===null?b=new l(s.count*c):b=new l(a,d,s.count*c),m=new Dt(b,c,g);if(s.sparse!==void 0){const f=Ta.SCALAR,x=_s[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,E=new x(o[1],v,s.sparse.count*f),R=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=E.length;T<C;T++){const M=E[T];if(m.setX(M,R[T*c]),c>=2&&m.setY(M,R[T*c+1]),c>=3&&m.setZ(M,R[T*c+2]),c>=4&&m.setW(M,R[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=_u[d.magFilter]||Lt,h.minFilter=_u[d.minFilter]||Dn,h.wrapS=xu[d.wrapS]||qt,h.wrapT=xu[d.wrapT]||qt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==Lt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){const m=new At(b);m.needsUpdate=!0,d(m)}),t.load(or.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Zn(u,o),u.userData.mimeType=o.mimeType||oM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new yd,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new vd,wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ot}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const u=s[$e.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],It),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,gt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Zt);const h=r.alphaMode||Aa.OPAQUE;if(h===Aa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Aa.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Xt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xt){const u=r.emissiveFactor;a.emissive=new De().setRGB(u[0],u[1],u[2],It)}return r.emissiveTexture!==void 0&&o!==Xt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Zn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Di(s,u,r),u})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return vu(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=rM(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=vu(new Nt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?nM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const b=h[p],m=o[p];let f;const x=l[p];if(m.mode===hn.TRIANGLES||m.mode===hn.TRIANGLE_STRIP||m.mode===hn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new l_(b,x):new he(b,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===hn.TRIANGLE_STRIP?f.geometry=gu(f.geometry,td):m.mode===hn.TRIANGLE_FAN&&(f.geometry=gu(f.geometry,_c));else if(m.mode===hn.LINES)f=new f_(b,x);else if(m.mode===hn.LINE_STRIP)f=new sl(b,x);else if(m.mode===hn.LINE_LOOP)f=new p_(b,x);else if(m.mode===hn.POINTS)f=new m_(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&sM(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Zn(f,r),m.extensions&&Di(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Di(s,u[0],r),u[0];const d=new Et;r.extensions&&Di(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(id.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Co(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new il(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const p=s.channels[u],g=s.samplers[p.sampler],b=p.target,m=b.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],b=u[3],m=u[4],f=[];for(let x=0,v=d.length;x<v;x++){const _=d[x],E=p[x],R=g[x],T=b[x],C=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const M=n._createAnimationTracks(_,E,R,T,C);if(M)for(let y=0;y<M.length;y++)f.push(M[y])}return new ix(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,aM)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new xd:l.length>1?h=new Et:l.length===1?h=l[0]:h=new bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Zn(h,r),r.extensions&&Di(n,h,r),r.matrix!==void 0){const u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Et;n.name&&(r.name=s.createUniqueName(n.name)),Zn(r,n),n.extensions&&Di(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,p]of s.associations)(d instanceof wn||d instanceof At)&&u.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];di[r.path]===di.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(di[r.path]){case di.weights:l=Ss;break;case di.rotation:l=Es;break;case di.position:case di.scale:l=Ts;break;default:switch(n.itemSize){case 1:l=Ss;break;case 2:case 3:default:l=Ts;break}break}const h=s.interpolation!==void 0?tM[s.interpolation]:hr,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const g=new l(c[d]+"."+di[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Nc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Es?eM:Vd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function lM(i,e,t){const n=e.attributes,s=new Fn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const h=Nc(_s[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const b=Nc(_s[d.componentType]);c.multiplyScalar(b)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function vu(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Ic[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ze.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Zn(i,e),lM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?iM(i,e.targets,t):i})}const Ca=new WeakMap;class hM extends wi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){const r=new mr(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,gt,n).catch(n)}decodeDracoFile(e,t,n,s,r=It,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Ca.has(e)){const c=Ca.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Ca.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Nt;e.index&&t.setIndex(new Dt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,c=new Dt(o,a);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==gt)return;const n=new De;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),Ze.toWorkingColorSpace(n,gt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new mr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=uM.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function uM(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const p=t(u,d,new Int8Array(c),l),g=p.attributes.map(b=>b.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){const h=l.attributeIDs,u=l.attributeTypes;let d,p;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,p=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,p=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const b={index:null,attributes:[]};for(const m in h){const f=self[u[m]];let x,v;if(l.useUniqueIDs)v=h[m],x=a.GetAttributeByUniqueId(d,v);else{if(v=a.GetAttributeId(d,o[h[m]]),v===-1)continue;x=a.GetAttribute(d,v)}const _=s(o,a,d,m,f,x);m==="color"&&(_.vertexColorSpace=l.vertexColorSpace),b.attributes.push(_)}return g===o.TRIANGULAR_MESH&&(b.index=n(o,a,d)),o.destroy(d),b}function n(o,a,c){const h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);const p=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:p,itemSize:1}}function s(o,a,c,l,h,u){const d=u.num_components(),g=c.num_points()*d,b=g*h.BYTES_PER_ELEMENT,m=r(o,h),f=o._malloc(b);a.GetAttributeDataArrayForAllPoints(c,u,m,b,f);const x=new h(o.HEAPF32.buffer,f,g).slice();return o._free(f),{name:l,array:x,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var dM=function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function a(f){for(var x=new Uint8Array(f.length),v=0;v<f.length;++v){var _=f.charCodeAt(v);x[v]=_>96?_-97:_>64?_-39:_+4}for(var E=0,v=0;v<f.length;++v)x[E++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,E)}function c(f,x,v,_,E,R){var T=r.exports.sbrk,C=v+3&-4,M=T(C*_),y=T(E.length),A=new Uint8Array(r.exports.memory.buffer);A.set(E,y);var N=f(M,v,_,y,E.length);if(N==0&&R&&R(M,C,_),x.set(A.subarray(M,M+v*_)),T(M-T(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(f){var x={object:new Worker(f),pending:0,requests:{}};return x.object.onmessage=function(v){var _=v.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function g(f){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(v),E=0;E<f;++E)u[E]=p(_);URL.revokeObjectURL(_)}function b(f,x,v,_,E){for(var R=u[0],T=1;T<u.length;++T)u[T].pending<R.pending&&(R=u[T]);return new Promise(function(C,M){var y=new Uint8Array(v),A=d++;R.pending+=f,R.requests[A]={resolve:C,reject:M},R.object.postMessage({id:A,count:f,size:x,source:y,mode:_,filter:E},[y.buffer])})}function m(f){o.then(function(){var x=f.data;try{var v=new Uint8Array(x.count*x.size);c(r.exports[x.mode],v,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(_){self.postMessage({id:x.id,count:x.count,action:"reject",value:_})}})}return{ready:o,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,x,v,_,E){c(r.exports.meshopt_decodeVertexBuffer,f,x,v,_,r.exports[l[E]])},decodeIndexBuffer:function(f,x,v,_){c(r.exports.meshopt_decodeIndexBuffer,f,x,v,_)},decodeIndexSequence:function(f,x,v,_){c(r.exports.meshopt_decodeIndexSequence,f,x,v,_)},decodeGltfBuffer:function(f,x,v,_,E,R){c(r.exports[h[E]],f,x,v,_,r.exports[l[R]])},decodeGltfBufferAsync:function(f,x,v,_,E){return u.length>0?b(f,x,v,h[_],l[E]):o.then(function(){var R=new Uint8Array(f*x);return c(r.exports[h[_]],R,f,x,v,r.exports[l[E]]),R})}}}();const Pa={sofaModern:{file:"sofa_03.glb",role:"fabric",yawOffset:0,author:"Fran Calvente",source:"https://polyhaven.com/a/sofa_03"},sofaClassic:{file:"Sofa_01.glb",role:"fabric",yawOffset:0,author:"Kirill Sannikov",source:"https://polyhaven.com/a/Sofa_01"},sofaAlt:{file:"sofa_02.glb",role:"fabric",yawOffset:0,author:"Kirill Sannikov",source:"https://polyhaven.com/a/sofa_02"},coffeeModern:{file:"modern_coffee_table_01.glb",role:"wood",yawOffset:0,author:"Amin",source:"https://polyhaven.com/a/modern_coffee_table_01"},coffeeClassic:{file:"CoffeeTable_01.glb",role:"wood",yawOffset:0,author:"Fernando Quinn",source:"https://polyhaven.com/a/CoffeeTable_01"},armchair:{file:"ArmChair_01.glb",role:"fabric",yawOffset:0,author:"Kirill Sannikov",source:"https://polyhaven.com/a/ArmChair_01"},ottoman:{file:"Ottoman_01.glb",role:"fabric",yawOffset:0,author:"Caspian Fortune",source:"https://polyhaven.com/a/Ottoman_01"},diningChair:{file:"dining_chair_02.glb",role:"wood",yawOffset:0,author:"James Ray Cock",source:"https://polyhaven.com/a/dining_chair_02"},woodChair:{file:"WoodenChair_01.glb",role:"wood",yawOffset:0,author:"Jake Mobley",source:"https://polyhaven.com/a/WoodenChair_01"},diningTable:{file:"round_wooden_table_01.glb",role:"wood",yawOffset:0,author:"Ulan Cabanilla",source:"https://polyhaven.com/a/round_wooden_table_01"},woodTable:{file:"WoodenTable_01.glb",role:"wood",yawOffset:0,author:"Ethan Place",source:"https://polyhaven.com/a/WoodenTable_01"},bed:{file:"GothicBed_01.glb",role:"wood",yawOffset:0,author:"Kirill Sannikov",source:"https://polyhaven.com/a/GothicBed_01"},nightstand:{file:"ClassicNightstand_01.glb",role:"wood",yawOffset:0,author:"Kirill Sannikov",source:"https://polyhaven.com/a/ClassicNightstand_01"},console:{file:"ClassicConsole_01.glb",role:"wood",yawOffset:0,author:"Kirill Sannikov",source:"https://polyhaven.com/a/ClassicConsole_01"},sideTable:{file:"side_table_01.glb",role:"wood",yawOffset:0,author:"James Ray Cock",source:"https://polyhaven.com/a/side_table_01"},cabinet:{file:"painted_wooden_cabinet.glb",role:"wood",yawOffset:0,author:"Kirill Sannikov",source:"https://polyhaven.com/a/painted_wooden_cabinet"},frame1:{file:"hanging_picture_frame_01.glb",role:"art",yawOffset:0,author:"James Ray Cock",source:"https://polyhaven.com/a/hanging_picture_frame_01"},frame2:{file:"hanging_picture_frame_02.glb",role:"art",yawOffset:0,author:"James Ray Cock",source:"https://polyhaven.com/a/hanging_picture_frame_02"},lamp:{file:"modern_ceiling_lamp_01.glb",role:"metal",yawOffset:0,author:"James Ray Cock",source:"https://polyhaven.com/a/modern_ceiling_lamp_01"},chandelier:{file:"Chandelier_01.glb",role:"metal",yawOffset:0,author:"Kirill Sannikov",source:"https://polyhaven.com/a/Chandelier_01"},mirror:{file:"ornate_mirror_01.glb",role:"mixed",yawOffset:0,author:"James Ray Cock",source:"https://polyhaven.com/a/ornate_mirror_01"},stove:{file:"electric_stove.glb",role:"metal",yawOffset:0,author:"Kuutti Siitonen",source:"https://polyhaven.com/a/electric_stove"},plant:{file:"potted_plant_04.glb",role:"plant",yawOffset:0,author:"James Ray Cock",source:"https://polyhaven.com/a/potted_plant_04"}};let co=null,kc=null;function fM(i,e){return kc?.ready?Promise.resolve(kc):co||(co=pM(i,e),co)}async function pM(i,e){const t="./models/",n="./draco/",s=new hM;s.setDecoderPath(n),s.preload();const r=new Cy;r.setDRACOLoader(s),r.setMeshoptDecoder(dM);const o=new Map,a=Object.keys(Pa);let c=0;await Promise.all(a.map(async h=>{const u=Pa[h];try{const p=(await r.loadAsync(t+u.file)).scene;p.updateMatrixWorld(!0);const g=new Fn().setFromObject(p),b=g.getSize(new L),m=g.min.clone();p.traverse(f=>{const x=f;if(x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0,x.material)){const v=Array.isArray(x.material)?x.material:[x.material];for(const _ of v)"envMapIntensity"in _&&(_.envMapIntensity=u.role==="wood"||u.role==="fabric"?.55:.85)}}),o.set(h,{root:p,size:b,min:m})}catch(d){console.warn(`[catalog] failed to load ${h}:`,d)}finally{c+=1,e?.(c/a.length)}}));const l={ready:!0,has(h){return o.has(h)},instantiate(h,u){const d=o.get(h);if(!d)return null;const p=Pa[h],g=d.root.clone(!0);g.traverse(_=>{const E=_;E.isMesh&&(Array.isArray(E.material)?E.material=E.material.map(R=>R.clone()):E.material&&(E.material=E.material.clone()))});const b=new Et;b.name=`model:${h}`,b.userData.role=p.role,b.userData.modelId=h,b.add(g);const m=d.size.x||1,f=d.size.y||1,x=d.size.z||1;let v=1;if(u.width&&u.width>0){const _=Math.max(m,x);v=u.width/_}else u.height&&u.height>0&&(v=u.height/f);return g.scale.setScalar(v),g.position.set(-((d.min.x+d.size.x/2)*v),-d.min.y*v,-((d.min.z+d.size.z/2)*v)),b.position.set(u.x,u.y??0,u.z),b.rotation.y=u.rotY+p.yawOffset,Wd(b,p.role,u.prefs,u.mats),b}};return kc=l,l}function Wd(i,e,t,n){const s=bs[t.style],r=new De(s.fabric),o=new De(s.wood),a=new De("#c4a265");i.traverse(c=>{const l=c;if(!l.isMesh)return;const h=Array.isArray(l.material)?l.material:[l.material];for(const u of h){if(!(u instanceof ot)&&!(u instanceof Mt))continue;const d=u;d.userData.baseColor||(d.userData.baseColor=d.color.clone());const p=d.userData.baseColor;d.color.copy(p);const g=d.metalness,b=d.roughness;e==="fabric"||e==="mixed"&&g<.25&&b>.45?d.color.lerp(r,t.style==="minimal"?.35:.5):(e==="wood"||e==="mixed"&&g<.25)&&d.color.lerp(o,.4),t.style==="luxury"&&g>.45&&(d.color.lerp(a,.4),d.metalness=Math.min(1,g+.1),d.roughness=Math.max(.15,b-.1)),t.style==="traditional"&&e==="wood"&&d.color.lerp(new De("#5c3310"),.2),d.needsUpdate=!0}})}function mM(i,e,t){i.traverse(n=>{n.userData&&n.userData.role&&n.userData.modelId&&Wd(n,n.userData.role,e)})}const xr=1.6,yu={foyer:0,lobby:1,hall:2,living:3,dining:4,kitchen:5,bedroom:6,dressing:7,bathroom:8,utility:9,linen:10,balcony:11,terrace:12};function Vi(i,e,t){let n=!1;const s=i.length;for(let r=0,o=s-1;r<s;o=r++){const[a,c]=i[r],[l,h]=i[o];c>t!=h>t&&e<(l-a)*(t-c)/(h-c+1e-12)+a&&(n=!n)}return n}function Uc(i,e,t,n=.4){for(const s of i)if(Vi(s.polygon,e,t)||n>0&&Fc(s.polygon,e,t)<=n)return!0;return!1}function Fc(i,e,t){let n=1/0;for(let s=0;s<i.length;s++){const r=i[s],o=i[(s+1)%i.length],a=gM(e,t,r[0],r[1],o[0],o[1]);a<n&&(n=a)}return n}function gM(i,e,t,n,s,r){const o=s-t,a=r-n,c=o*o+a*a||1;let l=((i-t)*o+(e-n)*a)/c;return l=Math.max(0,Math.min(1,l)),Math.hypot(i-(t+l*o),e-(n+l*a))}function vr(i,e,t,n=.3){for(const s of i)if(e+n>s.minX&&e-n<s.maxX&&t+n>s.minZ&&t-n<s.maxZ)return!0;return!1}function bM(i,e,t,n=.32){const s=(a,c)=>!vr(e,a,c,n)&&Uc(t,a,c,.25);if(s(i.x,i.z))return i;const r=[.25,.45,.7,1,1.35,1.75,2.2,2.8],o=16;for(const a of r)for(let c=0;c<o;c++){const l=c/o*Math.PI*2,h=i.x+Math.cos(l)*a,u=i.z+Math.sin(l)*a;if(s(h,u))return{x:h,z:u}}for(const a of t){const c=Mi(a.polygon);if(s(c.cx,c.cz))return{x:c.cx,z:c.cz}}return i}function _M(i,e){return e?i.map(([t,n])=>dn(t,n,e)):i}function xM(i,e,t,n){return Math.atan2(-(t-i),-(n-e))}function Mu(i,e){const t=`${i} ${e}`.toLowerCase();if(/master/.test(t))return 0;const n=t.match(/(\d+)/);return n?Number(n[1]):9}function vM(i){const e=i.name.replace(/\s+area$/i,"").trim();return i.type==="lobby"||i.id==="lobby"?{name:e.toLowerCase().includes("entrance")?"Foyer":e||"Foyer",short:"Foyer",type:"foyer"}:i.type==="hall"?{name:e||"Hall",short:"Hall",type:"foyer"}:i.type==="living"?{name:"Living",short:"Living",type:"living"}:i.type==="kitchen"?{name:"Kitchen",short:"Kitchen",type:"kitchen"}:i.type==="bathroom"?{name:e||"Bathroom",short:yM(e),type:"bathroom"}:i.type==="bedroom"?{name:e||"Bedroom",short:MM(e),type:"bedroom"}:i.type==="balcony"?{name:"Balcony",short:"Balcony",type:"balcony"}:i.type==="terrace"?{name:"Terrace",short:"Terrace",type:"terrace"}:i.type==="dressing"?{name:"Dressing",short:"Dressing",type:"dressing"}:i.type==="utility"?{name:"Utility",short:"Utility",type:"utility"}:i.type==="linen"?{name:"Linen",short:"Linen",type:"linen"}:{name:e||i.id,short:e||i.id,type:i.type}}function yM(i){return/master/i.test(i)?"Master bath":/en-?suite/i.test(i)?"En-suite":/toilet\s*2/i.test(i)?"Toilet 2":/utility/i.test(i)?"Bath":i.length>14?"Bathroom":i||"Bathroom"}function MM(i){return/master/i.test(i)?"Master bed":i||"Bedroom"}const Oc=-8*Math.PI/180;function Xd(i,e){return i==="bathroom"||i==="dressing"||i==="linen"||i==="utility"||e<6}function jd(i,e){return Xd(i,e)?85:70}function La(i,e,t,n,s,r,o){const a=Mi(e),c=i.area_m2||a.w*a.d,l=Xd(t,c),h=l?Math.min(.42,Math.max(.28,Math.min(a.w,a.d)*.2)):Math.max(.5,Math.min(.75,Math.min(a.w,a.d)*.16)),u=l?.22:.28,d=t==="balcony"||t==="terrace",p=d&&Math.min(a.w,a.d)<2.3;let g=a.cx,b=a.cz;t==="kitchen"&&o&&(g=a.cx*.7+o.x*.3,b=a.cz*.7+o.z*.3),t==="foyer"&&r&&(g=a.cx*.3+r.x*.7,b=a.cz*.3+r.z*.7),d&&(g=a.cx,b=a.cz);const m=[],f=(y,A,N)=>{const I=zc(e,y,A,l?.36:.32);if(!Vi(e,I.x,I.z))return;let U=I.x,z=I.z;if(vr(n,U,z,u)){const G=U+(a.cx-U)*.3,F=z+(a.cz-z)*.3,W=zc(e,G,F,.3);if(vr(n,W.x,W.z,u*.85))return;U=W.x,z=W.z}const k=Math.hypot(g-U,b-z);m.push({x:U,z,score:N+k})};for(const y of s){const A=No(y,e);if(!A)continue;const N=l?Math.min(.5,Math.min(a.w,a.d)*.26):.65,I=A.mx+A.ix*N,U=A.mz+A.iz*N;let z=16;t==="kitchen"&&o&&Math.hypot(I-o.x,U-o.z)<2.2&&(z=-10),f(I,U,z),f(A.mx+A.ix*(N+.4),A.mz+A.iz*(N+.4),z-4)}if(f(a.minX+h,a.minZ+h,10),f(a.maxX-h,a.minZ+h,10),f(a.minX+h,a.maxZ-h,10),f(a.maxX-h,a.maxZ-h,10),f(a.cx,a.minZ+h,8),f(a.cx,a.maxZ-h,8),f(a.minX+h,a.cz,8),f(a.maxX-h,a.cz,8),d&&(a.w>=a.d?(f(a.minX+h,a.cz,28),f(a.maxX-h,a.cz,28),f(a.minX+h,a.maxZ-h*.6,22),f(a.maxX-h,a.maxZ-h*.6,22)):(f(a.cx,a.minZ+h,28),f(a.cx,a.maxZ-h,28))),t==="kitchen"){const y=o?.x??a.cx,A=o?.z??a.minZ+.4,N=y>a.cx?a.minX+h:a.maxX-h,I=A>a.cz?a.minZ+h:a.maxZ-h;f(N,I,48),f(N,a.cz,28),f((N+a.cx)/2,I,26);for(const U of m){const z=Math.hypot(U.x-y,U.z-A),k=Math.abs(U.x-y)+Math.abs(U.z-A);U.score+=z*5+k*3,z<2.2&&(U.score-=50)}g=a.cx,b=a.cz}if(t==="bedroom")for(const y of m){const A=Math.hypot(y.x-a.cx,y.z-a.cz);y.score+=A*1.6}m.sort((y,A)=>A.score-y.score);const x=m[0]??{x:a.cx,z:a.cz},v=g-x.x,_=b-x.z,E=Math.hypot(v,_)||1;if(t==="bedroom"){let y=E;for(let N=E;N<E+3;N+=.2){const I=x.x+v/E*N,U=x.z+_/E*N;if(!Vi(e,I,U))break;y=N}const A=Math.min(y*.72,E+1.2);g=x.x+v/E*A,b=x.z+_/E*A}const R=p?-20*Math.PI/180:d?-14*Math.PI/180:Oc,T=Math.hypot(g-x.x,b-x.z)||1,C=xr+Math.tan(R)*T;let M=jd(t,c);return t==="kitchen"&&c<18&&(M=80),d&&p&&(M=80),{camX:x.x,camZ:x.z,lookX:g,lookZ:b,lookY:C,fov:M,pitch:R}}function zc(i,e,t,n=.34){if(Vi(i,e,t)&&Fc(i,e,t)>=n)return{x:e,z:t};const s=Mi(i);for(let r=.08;r<=1.01;r+=.08){const o=e+(s.cx-e)*r,a=t+(s.cz-t)*r;if(Vi(i,o,a)&&Fc(i,o,a)>=Math.min(n,.22))return{x:o,z:a}}return{x:s.cx,z:s.cz}}function Da(i,e,t,n,s,r,o,a,c){let l=bM({x:r.camX,z:r.camZ},o,a,n==="bathroom"?.22:.28);const h=a.find(m=>Vi(m.polygon,r.camX,r.camZ))??a.find(m=>Vi(m.polygon,r.lookX,r.lookZ))??a[0];h&&(l=zc(h.polygon,l.x,l.z,n==="bathroom"||n==="utility"||n==="dressing"?.36:.32));const u={x:r.lookX,z:r.lookZ},d=Math.hypot(u.x-l.x,u.z-l.z)||1,p=r.lookY??xr+Math.tan(Oc)*d,g=xM(l.x,l.z,u.x,u.z),b=r.pitch??Oc;return{id:i,name:e,short:t,type:n,area_m2:s,note:c,position:new L(l.x,xr,l.z),lookAt:new L(u.x,p,u.z),yaw:g,pitch:b,walkX:l.x,walkZ:l.z,fov:r.fov??jd(n,s)}}function qd(i,e,t,n=new Map){const s=[],r=i.rooms.map(d=>({...d,polygon:_M(d.polygon,e)})),o=Xv(i,e),a=r.flatMap(d=>d.polygon.map(p=>p[0])),c=r.flatMap(d=>d.polygon.map(p=>p[1])),l={x:(Math.min(...a)+Math.max(...a))/2,z:(Math.min(...c)+Math.max(...c))/2},h=r.filter(d=>d.type!=="utility"||(d.area_m2??0)>2),u=d=>{const g=(n.get(d)??[]).find(b=>b.kind==="kitchen");return g?{x:g.x,z:g.z}:void 0};for(const d of r){if(d.type==="utility"&&(d.area_m2??0)<2)continue;const p=vM(d),g=p.type==="kitchen"?u(d.id):void 0,b=La(d,d.polygon,p.type,t,o,l,g);s.push(Da(d.id,p.name,p.short,p.type,d.area_m2,b,t,h,d.notes));const m=d.type==="living"&&/dining|kitchen/i.test(d.name);if(m&&/dining/i.test(d.name)){const f=La(d,d.polygon,"dining",t,o,l);s.push(Da(d.id+"-dining","Dining","Dining","dining",d.area_m2,f,t,h))}if(m&&/kitchen/i.test(d.name)||d.type==="living"&&d.id==="lounge"){const f=u(d.id),x=La(d,d.polygon,"kitchen",t,o,l,f);s.push(Da(d.id+"-kitchen","Kitchen","Kitchen","kitchen",d.area_m2,x,t,h))}}return s.sort((d,p)=>{const g=yu[d.type]??50,b=yu[p.type]??50;return g!==b?g-b:d.type==="bedroom"?Mu(d.name,d.id)-Mu(p.name,p.id):d.name.localeCompare(p.name)}),s}function wu(i,e){const t={modern:"Modern",luxury:"Luxury",minimal:"Minimal",traditional:"Traditional Indian"},n={marble:"Marble",wood:"Wood",tile:"Tile"},s={white:"White",walnut:"Walnut",black:"Matte black",granite:"Granite"},r=[];return r.push({label:"Style",value:t[e.style]}),i.type==="kitchen"?(r.push({label:"Cabinets & counter",value:s[e.kitchen]}),r.push({label:"Floor",value:"Tile"})):i.type==="bathroom"||i.type==="utility"?(r.push({label:"Floor",value:"Tile"}),r.push({label:"Walls",value:"Follow your wall colour"})):i.type==="balcony"||i.type==="terrace"?r.push({label:"Deck",value:"Terracotta pavers"}):i.type==="bedroom"?(r.push({label:"Floor",value:n[e.flooring]}),r.push({label:"Headboard",value:t[e.style]})):(r.push({label:"Floor",value:n[e.flooring]}),r.push({label:"Walls",value:"Your chosen wall colour"})),r}function wM(i,e,t,n=new Map){const s=qd(i,e,t,n),r=s.find(o=>o.type==="living")??s.find(o=>o.type==="foyer")??s[0];return r?{x:r.walkX,y:xr,z:r.walkZ,yaw:r.yaw,pitch:r.pitch}:{x:0,y:xr,z:0,yaw:0}}const Su=2.1,Eu=.9,Tu=1.4;function ls(i,e="wood",t="#ffffff"){return uv(i,e,t)}function SM(i){let e=0;for(let t=0,n=i.length-1;t<i.length;n=t++)e+=i[n][0]*i[t][1]-i[t][0]*i[n][1];return e}function Au(i){const e=SM(i)<0?[...i].reverse():i,t=new Lo;t.moveTo(e[0][0],e[0][1]);for(let n=1;n<e.length;n++)t.lineTo(e[n][0],e[n][1]);return t.closePath(),t}function $n(i,e){return e?i.map(([t,n])=>dn(t,n,e)):i}function Ru(i,e,t,n={showCeiling:!1,y:0,cutaway:!1}){const s=n.transform,r=new Et;r.position.y=n.y;const o=[],a=[],c=[],l=[],h=t.wall.clone();h.color.set(e.wallColor),l.push(h),uu(t,e.kitchen),du(t,e);const u=ls(hu(t,e.flooring),e.flooring),d=ls(t.tile,"tile-wet","#e8eef0"),p=ls(t.tile,"tile","#efeae2"),g=ls(t.terra,"terra"),b=ls(t.wood,"wood");l.push(u,d,p,g,b);const m=n.cutaway?Math.min(1.15,i.wallHeight):i.wallHeight,f=i.walls.map(j=>s?tr(j,s):j);for(const j of i.rooms){const ne=$n(j.polygon,s);if(ne.length<3)continue;const V=Au(ne),$=new Eo(V);$.rotateX(Math.PI/2),c.push($);let ue=u,se=e.flooring;j.type==="bathroom"||j.type==="utility"?(ue=d,se="tile-wet"):j.type==="kitchen"?(ue=p,se="tile"):j.type==="terrace"||j.type==="balcony"?(ue=g,se="terra"):j.type==="bedroom"&&e.flooring==="marble"?(ue=u,se="marble"):(j.type==="lobby"||j.type==="hall")&&(ue=p,se="tile"),wa($,Sa(se));const me=new he($,ue);me.position.y=.008,me.receiveShadow=!0,me.castShadow=!1,me.frustumCulled=!1,me.name=`floor-${j.id}`,r.add(me),a.push(me),n.cutaway||Ay(ne,r,t.woodFur,c,f)}const x=i.bounds,v=[[x.min[0],x.min[1]],[x.max[0],x.min[1]],[x.max[0],x.max[1]],[x.min[0],x.max[1]]],_=$n(v,s),E=new Eo(Au(_));E.rotateX(Math.PI/2),wa(E,Sa("tile")),c.push(E);const R=new he(E,t.concfloor?ls(t.concfloor,"wood","#d0cdc6"):u);R.position.y=-.04,R.receiveShadow=!0,r.add(R),l.push(R.material);for(const j of i.walls){const ne=s?tr(j,s):j;if(ne.w<.02||ne.d<.02)continue;const V=new Ve(ne.w,m,ne.d);c.push(V);const $=new he(V,h);$.position.set(ne.x+ne.w/2,m/2,ne.z+ne.d/2),$.castShadow=!0,$.receiveShadow=!0,r.add($),o.push(bv(ne))}for(const j of i.windows){const ne=s?tr(j,s):j,V=ne.w>=ne.d,$=V?ne.w:ne.d,ue=Math.max(V?ne.d:ne.w,.06),se=ne.x+ne.w/2,me=ne.z+ne.d/2,Ce=n.cutaway?Math.min(.4,Eu):Eu,Le=n.cutaway?Math.min(.6,Tu):Tu,Xe=V?$:.06,te=V?.06:$,ce=t.frame,D=new he(new Ve(Xe,.05,te),ce);D.position.set(se,Ce+Le,me),r.add(D);const Te=new he(new Ve(Xe,.05,te),ce);Te.position.set(se,Ce,me),r.add(Te);const ae=new he(new Ve(V?$-.04:.03,Le-.04,V?.03:$-.04),t.glass);ae.position.set(se,Ce+Le/2,me),r.add(ae);const xe=new he(new Ve(V?$:ue+.08,.04,V?ue+.08:$),t.woodFur);xe.position.set(se,Ce-.02,me),r.add(xe)}if(e.furniture&&!n.cutaway)for(const j of i.windows){const ne=s?tr(j,s):j;Ey(ne.x+ne.w/2,ne.z+ne.d/2,ne.w,ne.d,i.wallHeight,r,t,e.style)}for(const j of i.doors){const ne=s?dn(j.ax,j.az,s):[j.ax,j.az],V=s?dn(j.bx,j.bz,s):[j.bx,j.bz],$=(ne[0]+V[0])/2,ue=(ne[1]+V[1])/2,se=V[0]-ne[0],me=V[1]-ne[1],Ce=Math.hypot(se,me)||j.width,Le=Math.atan2(se,me),Xe=ne[0],te=ne[1],ce=new Et;ce.position.set(Xe,0,te),ce.rotation.y=Le+Math.PI/2.6;const D=n.cutaway?Math.min(m,1.05):Su,Te=new he(new Ve(.04,D,Ce*.95),t.door);Te.position.set(0,D/2,Ce*.45),Te.castShadow=!0,ce.add(Te);const ae=new he(new on(.015,.015,.1,8),_r(t,e.style));if(ae.rotation.z=Math.PI/2,ae.position.set(.03,1,Ce*.8),ce.add(ae),r.add(ce),!n.cutaway){new he(new Ve(Cu(se,me,.12),.08,Cu(me,se,.12)||.12),h);const xe=Math.abs(se)>Math.abs(me),de=new he(new Ve(xe?Ce:.15,.1,xe?.15:Ce),h);de.position.set($,Su+.05,ue),r.add(de)}}for(const j of i.rooms)j.type!=="balcony"&&j.type!=="terrace"||EM($n(j.polygon,s),r,t,o,n.cutaway);const T=new Et;T.name="furniture",T.visible=e.furniture;const C=new Map;if(e.furniture){const j=qv(i,e,s);Cv(j.issues,`${i.id}/${e.style}`);const ne=new Et,V=Sy(j.placements,ne,t,e,n.catalog??null);for(const $ of V){const ue=$.roomId??"";C.has(ue)||C.set(ue,[]),C.get(ue).push($)}T.add(ne);for(const $ of j.footprints)$.ghost||o.push({minX:$.minX,maxX:$.maxX,minZ:$.minZ,maxZ:$.maxZ})}r.add(T);const M=new he(E,t.ceiling);if(M.position.y=i.wallHeight-.02,M.rotation.x=0,M.scale.y=-1,M.visible=n.showCeiling&&!n.cutaway,M.receiveShadow=!0,M.name="ceiling",r.add(M),n.showCeiling&&!n.cutaway){const j=new he(new ni(36,36),t.ceiling);j.rotation.x=Math.PI/2,j.position.y=i.wallHeight-.015,j.name="ceiling-cover",r.add(j)}const y=[],A=[];for(const j of i.rooms){if(j.type==="terrace"||j.type==="balcony")continue;const ne=Mi($n(j.polygon,s)),V=t.emissive.clone();V.emissive.set("#ffd9a0"),V.emissiveIntensity=.35,A.push(V);const $=new he(new on(.12,.12,.03,16),V);$.position.set(ne.cx,i.wallHeight-.05,ne.cz),$.visible=n.showCeiling&&!n.cutaway,r.add($);const ue=new ul("#ffd7a3",0,Math.max(4.5,Math.min(ne.w,ne.d)*1.6+2),2);ue.position.set(ne.cx,i.wallHeight-.28,ne.cz),ue.visible=!1,r.add(ue),y.push(ue)}const N=[];if(n.showCeiling&&!n.cutaway)for(const j of i.rooms)j.type!=="living"&&j.type!=="bedroom"||j.area_m2<10||Ry($n(j.polygon,s),i.wallHeight,r,t,{mobile:!!n.mobile,geos:c,extraMats:l,lights:N});const I=AM(i,s),U=n.hotspots?TM(i,s,n.cutaway,r):[];function z(j){const ne=j==="night",V=j==="golden";for(const $ of y)$.intensity=ne?n.cutaway?1.05:1.45:V?.15:0,$.visible=ne||V,$.color.set(ne?"#ffd7a3":"#ffc888");for(const $ of A)$.emissiveIntensity=ne?2.1:V?.7:.3,$.emissive.set(ne?"#ffcc88":"#ffe8c0")}const k=i.rooms.map(j=>({...j,polygon:$n(j.polygon,s)})),G=qd(i,s,o,C),W={...wM(i,s,o,C),y:n.y+1.6};function K(j){h.color.set(j.wallColor),uu(t,j.kitchen),du(t,j),fv(u,hu(t,j.flooring),j.flooring);const ne=Sa(j.flooring);for(const V of a)V.material===u&&wa(V.geometry,ne);T.visible=j.furniture,mM(T,j)}function pe(){r.traverse(j=>{const ne=j.element;ne&&ne.parentElement&&ne.remove()}),r.removeFromParent(),r.traverse(j=>{});for(const j of c)j.dispose();for(const j of l)j.dispose()}return{group:r,collisions:o,spawn:W,floorMeshes:a,wallMat:h,hotspots:U,rooms:G,worldRooms:k,applyPrefs:K,setTime:z,dispose:pe,lighting:I}}function Cu(i,e,t){return Math.abs(i)>.01?Math.abs(i):t}function EM(i,e,t,n,s){if(i.length<3)return;const r=s?.6:1.05,o=i.length;for(let a=0;a<o;a++){const c=i[a],l=i[(a+1)%o],h=l[0]-c[0],u=l[1]-c[1],d=Math.hypot(h,u);if(d<.3)continue;const p=(c[0]+l[0])/2,g=(c[1]+l[1])/2,b=Math.atan2(h,u),m=new he(new Ve(.03,r,d),t.glassRail);m.position.set(p,r/2,g),m.rotation.y=b,e.add(m);const f=new he(new Ve(.04,.03,d),t.metal);f.position.set(p,r,g),f.rotation.y=b,e.add(f);const x=Math.max(2,Math.floor(d/1.4)+1);for(let v=0;v<x;v++){const _=x===1?.5:v/(x-1),E=c[0]+h*_,R=c[1]+u*_,T=new he(new Ve(.04,r,.04),t.metal);T.position.set(E,r/2,R),e.add(T)}n.push({minX:Math.min(c[0],l[0])-.06,maxX:Math.max(c[0],l[0])+.06,minZ:Math.min(c[1],l[1])-.06,maxZ:Math.max(c[1],l[1])+.06})}}function TM(i,e,t,n){const s=i.rooms,r=s.find(b=>b.type==="kitchen")??s.find(b=>/kitchen/i.test(b.name))??(i.id==="penthouse"?s.find(b=>b.id==="lounge"):void 0),o=s.filter(b=>b.type==="bathroom"),a=o.find(b=>/master|ensuite|en-suite|en suite/i.test(`${b.name} ${b.id}`))??o[0],c=s.find(b=>b.type==="terrace")??s.find(b=>b.type==="balcony"),l=[];if(r){let b;i.id==="penthouse"?b="The first-floor plan used for this penthouse has no kitchen; an open kitchen is shown in the family lounge as an approximation.":r.type==="living"&&(b="The 3BHK drawing combines the living room and kitchen in one space. The kitchen finish applies to the open-kitchen run."),l.push({kind:"kitchen",room:r,title:r.type==="living"?"Kitchen (open to living)":"Kitchen",note:b})}if(a&&l.push({kind:"bath",room:a,title:a.name.replace(/\s+area$/,"")||"Bathroom"}),c){const b=c.type==="terrace";l.push({kind:"view",room:c,title:b?"Terrace view":"Balcony view"})}const h=new ot({color:"#c4a265",emissive:"#c4a265",emissiveIntensity:.45,metalness:.55,roughness:.28}),u=[],d=i.bounds;let p=(d.min[0]+d.max[0])/2,g=(d.min[1]+d.max[1])/2;if(e){const b=dn(d.min[0],d.min[1],e),m=dn(d.max[0],d.max[1],e);p=(b[0]+m[0])/2,g=(b[1]+m[1])/2}for(const b of l){const m=$n(b.room.polygon,e),f=Mi(m),x=t?.5:1.2;let v,_;if(b.kind==="view"){const N=f.cx-p,I=f.cz-g,U=Math.hypot(N,I)||1,z=N/U,k=I/U;v=new L(f.cx-z*.2,1.55,f.cz-k*.2),_=new L(f.cx+z*5,1.35,f.cz+k*5),t&&(v=new L(f.cx-z*2.4,3.2,f.cz-k*2.4),_=new L(f.cx+z*1.5,.8,f.cz+k*1.5))}else if(t)v=new L(f.cx,3.6,f.cz+Math.max(f.d,2)*.65),_=new L(f.cx,.45,f.cz);else{const N=Math.min(Math.max(Math.min(f.w,f.d)*.42,1.35),2.8),I=f.w>=f.d;v=new L(f.cx+(I?N:Math.min(f.w,1.1)*.25),1.55,f.cz+(I?Math.min(f.d,1.1)*.25:N)),_=new L(f.cx,x,f.cz)}const E=new Et,R=new he(new on(.028,.028,.55,10),h);R.position.y=.28;const T=new he(new kn(.12,16,16),h);T.position.y=.62;const C=new he(new kn(.38,10,10),new Xt({visible:!1}));C.position.y=.5,E.add(R,T,C),E.position.set(f.cx,.02,f.cz),E.name="hotspot",n.add(E);const M=document.createElement("button");M.type="button",M.className="hotspot-lab",M.textContent=b.title;const y=new As(M);y.position.set(0,.95,0),E.add(y);const A={id:`${b.kind}-${b.room.id}`,kind:b.kind,title:b.title,roomName:b.room.name,area_m2:b.room.area_m2,note:b.note,position:new L(f.cx,1.2,f.cz),cameraPos:v,lookAt:_,mesh:E,labelEl:M};E.userData.hotspot=A,u.push(A)}return u}function AM(i,e){const n=i.rooms.filter(c=>c.type!=="terrace"&&c.type!=="balcony").map(c=>Mi($n(c.polygon,e))),s=i.rooms.flatMap(c=>$n(c.polygon,e)),r=Mi(s.length?s:[[0,0],[1,1]]),o=new L;let a=0;for(const c of i.windows){const l=e?tr(c,e):c,h=l.x+l.w/2,u=l.z+l.d/2;let d=n[0],p=1/0;for(const f of n){const x=(f.cx-h)**2+(f.cz-u)**2;x<p&&(p=x,d=f)}if(!d)continue;const g=d.cx-h,b=d.cz-u,m=Math.hypot(g,b)||1;o.x+=g/m,o.z+=b/m,a+=1}return a?o.multiplyScalar(1/a):o.set(.55,0,.45),o.y=0,o.normalize(),{center:new L(r.cx,1.45,r.cz),incoming:o,radius:Math.max(r.w,r.d)*.62+3}}const Ia=1.6,Pu=.3,Lu=3.4,RM=5.4;class CM{position=new L;yaw=0;pitch=0;enabled=!1;locked=!1;tv=!1;keys=new Set;joy={x:0,y:0};collisions=[];rooms=[];minY=Ia;walkTarget=null;canvas;onLockChange;skipLockOnce=!1;constructor(e){this.canvas=e,window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKeyUp),e.addEventListener("click",this.requestLock),document.addEventListener("pointerlockchange",this.lockChange),e.addEventListener("mousemove",this.onMouse)}setCollisions(e,t){this.collisions=e,this.rooms=t??[]}spawn(e,t,n,s,r=-.18){const o=this.nearestClear(e,n);this.position.set(o.x,t||Ia,o.z),this.minY=t||Ia,this.yaw=s,this.pitch=r,this.walkTarget=null}nearestClear(e,t){if(this.isWalkable(e,t))return{x:e,z:t};const n=[.3,.55,.85,1.2,1.7,2.3,3];for(const s of n)for(let r=0;r<16;r++){const o=r/16*Math.PI*2,a=e+Math.cos(o)*s,c=t+Math.sin(o)*s;if(this.isWalkable(a,c))return{x:a,z:c}}return{x:e,z:t}}isWalkable(e,t){return!(vr(this.collisions,e,t,Pu)||this.rooms.length&&!Uc(this.rooms,e,t,.35))}walkTo(e,t){const n=this.nearestClear(e,t);return this.isWalkable(n.x,n.z)?(this.walkTarget=new L(n.x,this.minY,n.z),!0):!1}cancelWalkTo(){this.walkTarget=null}requestLock=()=>{if(this.skipLockOnce){this.skipLockOnce=!1;return}!this.enabled||this.tv||document.pointerLockElement!==this.canvas&&this.canvas.requestPointerLock().catch(()=>{})};lockChange=()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange?.(this.locked)};setOnLock(e){this.onLockChange=e}onKey=e=>{this.keys.add(e.code),this.enabled&&["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&(e.preventDefault(),this.walkTarget=null)};onKeyUp=e=>{this.keys.delete(e.code)};onMouse=e=>{!this.enabled||!this.locked||(this.yaw-=e.movementX*.0022,this.pitch-=e.movementY*.0022,this.pitch=Math.max(-1.15,Math.min(1.15,this.pitch)))};look(e,t){this.enabled&&(this.yaw-=e*.005,this.pitch-=t*.005,this.pitch=Math.max(-1.15,Math.min(1.15,this.pitch)))}update(e){if(!this.enabled)return;if(this.walkTarget){const h=this.walkTarget.x-this.position.x,u=this.walkTarget.z-this.position.z,d=Math.hypot(h,u);if(d<.1)this.walkTarget=null;else{const p=Lu*1.15*e,g=h/d,b=u/d;let f=Math.atan2(-g,-b)-this.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;this.yaw+=f*Math.min(1,6*e);const x=Math.min(p,d);this.tryMove(g*x,0),this.tryMove(0,b*x),this.position.y=this.minY}return}let t=0,n=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(t+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(t-=1),this.keys.has("KeyA")&&(n-=1),this.keys.has("KeyD")&&(n+=1),this.tv||(this.keys.has("ArrowLeft")&&(n-=1),this.keys.has("ArrowRight")&&(n+=1)),t+=-this.joy.y,n+=this.joy.x;const s=Math.hypot(t,n);s>1&&(t/=s,n/=s);const r=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?RM:Lu,o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=(-t*o+n*a)*r*e,l=(-t*a-n*o)*r*e;this.tryMove(c,0),this.tryMove(0,l),this.position.y=this.minY}tryMove(e,t){const n=this.position.x+e,s=this.position.z+t;vr(this.collisions,n,s,Pu)||this.rooms.length&&!Uc(this.rooms,n,s,.35)||(this.position.x=n,this.position.z=s)}apply(e){e.position.copy(this.position),e.rotation.set(this.pitch,this.yaw,0,"YXZ")}dispose(){window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKeyUp),this.canvas.removeEventListener("click",this.requestLock),document.removeEventListener("pointerlockchange",this.lockChange),this.canvas.removeEventListener("mousemove",this.onMouse),document.pointerLockElement===this.canvas&&document.exitPointerLock()}}function PM(i,e,t){const n=i;let s=null;const r=(a,c,l,h)=>{let d=l-a,p=h-c;const g=Math.hypot(d,p)||1;g>42&&(d=d/g*42,p=p/g*42),e.style.transform=`translate(${d}px, ${p}px)`,t.joy.x=d/42,t.joy.y=p/42,t.cancelWalkTo()},o=()=>{e.style.transform="",t.joy.x=0,t.joy.y=0,s=null};n.addEventListener("pointerdown",a=>{a.stopPropagation(),s=a.pointerId,n.setPointerCapture(a.pointerId);const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,a.clientX,a.clientY)}),n.addEventListener("pointermove",a=>{if(s!==a.pointerId)return;a.stopPropagation();const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,a.clientX,a.clientY)}),n.addEventListener("pointerup",a=>{a.stopPropagation(),o()}),n.addEventListener("pointercancel",o)}class LM{root;prefs;view={kind:"tower",hoverFloor:null};tv;plans;handlers;time="morning";spec=null;rooms=[];currentRoom=null;tour=null;sheetOpen=!1;revealRoomCard=!1;formOpen=!1;currentUnit="";menuOpen=!1;constructor(e,t,n,s,r){this.root=e,this.prefs={...t},this.plans=n,this.tv=s,this.handlers=r,s&&document.body.classList.add("tv"),this.watchViewport()}watchViewport(){const e=()=>{const t=window.innerWidth<900||window.innerHeight<520;document.body.classList.toggle("compact",t),document.body.classList.toggle("landscape-short",window.innerHeight<520&&window.innerWidth>window.innerHeight),this.syncLayoutVars()};e(),window.addEventListener("resize",e)}setView(e){this.view.kind==="flat"&&(e.kind!=="flat"||e.kind==="flat"&&e.unitId!==this.view.unitId)&&(this.sheetOpen=!1,this.tour=null,this.currentRoom=null,this.rooms=[],e.kind!=="flat"&&(this.spec=null)),this.menuOpen=!1,this.view=e,document.body.classList.toggle("walking",e.kind==="flat"&&e.cam==="walk"),document.body.classList.toggle("in-flat",e.kind==="flat"),document.body.classList.toggle("sheet-open",this.sheetOpen&&e.kind==="flat"),this.render()}setHoverFloor(e){this.view.kind==="tower"&&(this.view={...this.view,hoverFloor:e},this.root.querySelectorAll(".chip-row [data-floor]").forEach(t=>{t.classList.toggle("hov",Number(t.dataset.floor)===e)}))}setTime(e){this.time=e,this.render()}setRooms(e,t){this.rooms=e,t!==void 0&&(this.currentRoom=t),this.render()}setCurrentRoom(e,t=!0){this.currentRoom=e,this.revealRoomCard=!!e&&t,this.render()}setTour(e){this.tour=e,this.render()}setPrefs(e){this.prefs=e}setSheet(e){this.sheetOpen=e,this.render()}showSpec(e){this.spec=e,this.currentRoom=null,this.revealRoomCard=!1,this.render()}closeSpec(){this.spec=null,this.render(),this.handlers.onCloseSpec?.()}toast(e){let t=this.root.querySelector(".toast");t||(t=document.createElement("div"),t.className="toast",this.root.appendChild(t)),t.textContent=e,t.classList.add("show"),this.syncLayoutVars(),setTimeout(()=>t&&t.classList.remove("show"),3200)}render(){const e=this.view;this.root.innerHTML="",this.root.appendChild(this.topbar()),this.menuOpen&&this.root.appendChild(this.overflowMenu()),e.kind==="tower"?this.root.appendChild(this.floorsDock()):e.kind==="floor"?this.root.appendChild(this.unitsDock()):this.root.appendChild(this.flatSheet()),this.root.appendChild(this.zoomStack());const t=document.createElement("div");t.className="joy-wrap",t.innerHTML='<div class="joy-base" id="joy-base"><div class="joy-knob" id="joy-knob"></div></div>',this.root.appendChild(t);const n=document.createElement("div");n.className="crosshair",n.setAttribute("aria-hidden","true"),this.root.appendChild(n),this.formOpen&&this.root.appendChild(this.form());const s=document.createElement("div");s.className="toast",this.root.appendChild(s),document.body.classList.toggle("sheet-open",this.sheetOpen&&e.kind==="flat"),document.body.classList.toggle("form-open",this.formOpen),this.syncLayoutVars()}syncLayoutVars(){requestAnimationFrame(()=>{const e=this.root.querySelector(".topbar"),t=this.root.querySelector(".dock, .sheet"),n=e?Math.ceil(e.getBoundingClientRect().height):52;let s=0;const r=window.innerHeight<520&&window.innerWidth>window.innerHeight;document.body.classList.toggle("landscape-short",r);const o=window.matchMedia("(min-width: 900px) and (min-height: 560px)").matches,a=r&&this.sheetOpen||o&&this.view.kind==="flat",c=o&&this.view.kind==="tower";if(t&&getComputedStyle(t).display!=="none"&&!a&&!c){s=Math.ceil(t.getBoundingClientRect().height);const h=Math.round(window.innerHeight*.38);r&&s>h&&(s=16)}else(a||c)&&(s=16);const l=document.documentElement;l.style.setProperty("--topbar-h",`${n}px`),l.style.setProperty("--dock-h",`${s}px`)})}topbar(){const e=document.createElement("header");e.className="topbar";const n=this.view.kind==="tower",s=this.hereLabel();return e.innerHTML=`
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
          <div class="crumb-now" title="${Gt(s)}">${Gt(s)}</div>
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
    `,e.querySelector(".crumbs-full").appendChild(this.crumbsFull()),e.querySelector(".back").addEventListener("click",()=>this.goBack()),e.querySelector(".menu-btn").addEventListener("click",()=>{this.menuOpen=!this.menuOpen,this.render()}),e.querySelectorAll("[data-action=book], [data-action=book-full]").forEach(o=>o.addEventListener("click",()=>this.openForm())),e}hereLabel(){const e=this.view;if(e.kind==="tower")return"Sample Tower";if(e.kind==="floor")return Ea(e.floor);const t=this.planForUnit(e.unitId);return`${e.unitId} ${t?.name??""}`.trim()}crumbsFull(){const e=document.createElement("div");e.className="crumbs-inner";const t=this.view,n=(r,o,a=!1)=>{if(a){const c=document.createElement("span");c.className="crumb-here",c.textContent=r,e.appendChild(c)}else{const c=document.createElement("button");c.type="button",c.textContent=r,c.addEventListener("click",o),e.appendChild(c)}},s=()=>{const r=document.createElement("span");r.className="crumb-sep",r.textContent="›",e.appendChild(r)};if(n("Tower",()=>this.handlers.onGotoTower(),t.kind==="tower"),(t.kind==="floor"||t.kind==="flat")&&(s(),n(Ea(t.floor),()=>this.handlers.onGotoFloor(t.floor),t.kind==="floor")),t.kind==="flat"){s();const r=this.planForUnit(t.unitId);n(`${t.unitId} ${r?.name??""}`.trim(),()=>{},!0)}return e}goBack(){const e=this.view;if(this.formOpen){this.closeForm();return}if(this.menuOpen){this.menuOpen=!1,this.render();return}if(this.tour?.active){this.handlers.onTour?.("stop");return}if(this.sheetOpen){this.sheetOpen=!1,this.spec=null,this.currentRoom=null,this.render(),this.handlers.onCloseSpec?.();return}if(this.spec||this.currentRoom){this.spec=null,this.currentRoom=null,this.render(),this.handlers.onCloseSpec?.();return}if(e.kind==="flat"&&e.cam==="walk"){this.handlers.onCam("dollhouse");return}if(e.kind==="flat"){this.handlers.onGotoFloor(e.floor);return}e.kind==="floor"&&this.handlers.onGotoTower()}overflowMenu(){const e=document.createElement("div");e.className="menu-pop",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Time of day");const t=document.createElement("div");t.className="menu-k",t.textContent="Time of day",e.appendChild(t);const n=[{id:"morning",label:"Morning"},{id:"golden",label:"Golden hour"},{id:"night",label:"Night"}];for(const r of n){const o=document.createElement("button");o.type="button",o.dataset.time=r.id,o.dataset.tv=`time-${r.id}`,o.className=this.time===r.id?"on":"",o.setAttribute("aria-pressed",String(this.time===r.id)),o.textContent=r.label,o.addEventListener("click",()=>{this.menuOpen=!1,this.handlers.onTime(r.id)}),e.appendChild(o)}if(this.tv){const r=document.createElement("div");r.className="tv-badge",r.textContent="TV / kiosk mode",e.appendChild(r)}const s=document.createElement("p");return s.className="menu-hint",s.innerHTML=this.hintText(),e.appendChild(s),e}floorsDock(){const e=document.createElement("div");e.className="dock floors-dock";const t=document.createElement("div");t.className="chip-row",t.setAttribute("role","listbox"),t.setAttribute("aria-label","Floors");const n=this.view.kind==="tower"?this.view.hoverFloor:null;for(let s=1;s<=_o+1;s++){const r=document.createElement("button");r.type="button",r.dataset.floor=String(s),r.dataset.tv=`floor-${s}`,r.setAttribute("role","option"),s===Oi?(r.innerHTML='<span class="ph">PH</span>',r.title="Penthouse"):(r.innerHTML=`<span class="chip-lg">${s}</span>`,r.title=`Floor ${s}`),n===s&&r.classList.add("hov"),r.addEventListener("mouseenter",()=>this.setHoverFloor(s)),r.addEventListener("click",()=>this.handlers.onGotoFloor(s)),t.appendChild(r)}return e.appendChild(t),e.appendChild(this.dockHint(this.hintText())),e.appendChild(this.disclaimerEl()),e}unitsDock(){const e=document.createElement("div");e.className="dock units-dock";const t=this.view;if(t.kind!=="floor")return e;const n=document.createElement("div");n.className="chip-row unit-row",n.setAttribute("role","listbox"),n.setAttribute("aria-label","Flats on this floor");const s=xo(t.floor);for(const r of s){const o=er(t.floor,r.suffix),a=this.plans[r.planId],c=document.createElement("button");c.type="button",c.className="unit-chip",c.dataset.unit=o,c.dataset.tv=`unit-${o}`,t.hoverUnit===o&&c.classList.add("hov"),c.innerHTML=`<span class="chip-lg">${o}</span>
        <span class="chip-sub">${r.typeLabel}<br>${Fd(a)}</span>`,c.addEventListener("click",()=>this.handlers.onGotoUnit(t.floor,o)),n.appendChild(c)}return e.appendChild(n),e.appendChild(this.dockHint(this.hintText())),e.appendChild(this.disclaimerEl()),e}roomDock(){const e=document.createElement("div");e.className="room-dock";const t=document.createElement("div");t.className="chip-row room-row",t.setAttribute("role","listbox"),t.setAttribute("aria-label","Rooms");const n=document.createElement("button");n.type="button",n.className="room-chip tour-btn"+(this.tour?.active?" on":""),n.dataset.tv="tour",n.dataset.action="tour",n.textContent=this.tour?.active?"End tour":"Tour",n.addEventListener("click",()=>{this.handlers.onTour?.(this.tour?.active?"stop":"start")}),t.appendChild(n);for(const s of this.rooms){const r=document.createElement("button");r.type="button",r.className="room-chip"+(this.currentRoom===s.id?" on":""),r.dataset.room=s.id,r.dataset.tv=`room-${s.id}`,r.textContent=s.short,r.title=s.name,r.addEventListener("click",()=>this.handlers.onRoom?.(s.id)),t.appendChild(r)}return e.appendChild(t),e}tourCard(e){const t=document.createElement("aside");t.className="tour-card";const n=this.rooms.length,s=this.tour?.index??0,r=this.tour?.playing??!1,o=Math.round(e.area_m2*10.7639),a=wu(e,this.prefs).map(c=>`<p class="spec-fin"><span>${Gt(c.label)}</span><b>${Gt(c.value)}</b></p>`).join("");return t.innerHTML=`
      <div class="tour-k">Guided tour · ${s+1} of ${n}</div>
      <h2>${Gt(e.name)}</h2>
      <p class="spec-area">${e.area_m2.toFixed(1)} m² · ${o.toLocaleString("en-IN")} sq ft</p>
      ${a}
      ${e.note?`<p class="spec-note">${Gt(e.note)}</p>`:""}
      <div class="tour-nav">
        <button type="button" data-act="prev" data-tv="tour-prev" ${s<=0?"disabled":""}>Back</button>
        <button type="button" data-act="toggle" data-tv="tour-play">${r?"Pause":"Play"}</button>
        <button type="button" class="cta" data-act="next" data-tv="tour-next">${s>=n-1?"Done":"Next"}</button>
      </div>
    `,t.querySelector("[data-act=prev]").addEventListener("click",()=>this.handlers.onTour?.("prev")),t.querySelector("[data-act=toggle]").addEventListener("click",()=>this.handlers.onTour?.("toggle")),t.querySelector("[data-act=next]").addEventListener("click",()=>this.handlers.onTour?.("next")),t}roomCard(e,t){const n=document.createElement("aside");n.className="tour-card room-info";const s=Math.round(e.area_m2*10.7639),r=wu(e,this.prefs).map(o=>`<p class="spec-fin"><span>${Gt(o.label)}</span><b>${Gt(o.value)}</b></p>`).join("");return n.innerHTML=`
      ${t?'<button type="button" class="spec-close" aria-label="Close" data-tv="spec-close">×</button>':""}
      <div class="tour-k">${Gt(e.short)}</div>
      <h2>${Gt(e.name)}</h2>
      <p class="spec-area">${e.area_m2.toFixed(1)} m² · ${s.toLocaleString("en-IN")} sq ft</p>
      ${r}
      ${e.note?`<p class="spec-note">${Gt(e.note)}</p>`:""}
    `,n.querySelector(".spec-close")?.addEventListener("click",()=>{this.revealRoomCard=!1,this.render()}),n}specCard(e){const t=document.createElement("aside");t.className="tour-card room-info";const n=Math.round(e.area_m2*10.7639);return t.innerHTML=`
      <button type="button" class="spec-close" aria-label="Close" data-tv="spec-close">×</button>
      <div class="tour-k">${e.kind==="kitchen"?"Kitchen":e.kind==="bath"?"Bathroom":"Outlook"}</div>
      <h2>${Gt(e.title)}</h2>
      <p class="spec-area">${e.area_m2.toFixed(1)} m² · ${n.toLocaleString("en-IN")} sq ft · as labelled on the drawing</p>
      ${this.specFinish(e)}
      ${e.note?`<p class="spec-note">${Gt(e.note)}</p>`:""}
    `,t.querySelector(".spec-close").addEventListener("click",()=>this.closeSpec()),t}specFinish(e){const t={white:"White",walnut:"Walnut",black:"Matte black",granite:"Granite"},n={marble:"Marble",wood:"Wood",tile:"Tile"};return e.kind==="kitchen"?`<p class="spec-fin"><span>Cabinets &amp; counter</span><b>${t[this.prefs.kitchen]}</b></p>`:e.kind==="bath"?`<p class="spec-fin"><span>Floor</span><b>${n[this.prefs.flooring]}</b></p>`:`<p class="spec-fin"><span>From the plan</span><b>${Gt(e.roomName)}</b></p>`}flatSheet(){const e=document.createElement("aside");e.className="sheet"+(this.sheetOpen?" open":""),e.setAttribute("aria-label","Your preferences");const t=document.createElement("button");t.type="button",t.className="sheet-handle",t.setAttribute("aria-label",this.sheetOpen?"Collapse preferences":"Expand preferences"),t.addEventListener("click",()=>this.toggleSheet()),e.appendChild(t);const n=document.createElement("div");n.className="sheet-peek";const s=document.createElement("div");s.className="seg cam-seg";const r=this.view.kind==="flat"&&this.view.cam==="walk";s.innerHTML=`
      <button type="button" data-cam="dollhouse" data-tv="cam-dollhouse" class="${r?"":"on"}" aria-pressed="${!r}">Dollhouse</button>
      <button type="button" data-cam="walk" data-tv="cam-walk" class="${r?"on":""}" aria-pressed="${r}">Walk</button>
    `,s.querySelectorAll("[data-cam]").forEach(l=>l.addEventListener("click",()=>this.handlers.onCam(l.dataset.cam))),n.appendChild(s);const o=document.createElement("button");o.type="button",o.className="sheet-toggle"+(this.sheetOpen?" on":""),o.dataset.tv="finishes",o.setAttribute("aria-expanded",String(this.sheetOpen)),o.textContent=this.sheetOpen?"Close":"Your preferences",o.addEventListener("click",()=>this.toggleSheet()),n.appendChild(o),e.appendChild(n),this.rooms.length&&e.appendChild(this.roomDock());const a=document.createElement("div");if(a.className="sheet-info",this.tour?.active&&this.rooms[this.tour.index])a.appendChild(this.tourCard(this.rooms[this.tour.index]));else if(this.revealRoomCard&&this.currentRoom){const l=this.rooms.find(h=>h.id===this.currentRoom);l&&a.appendChild(this.roomCard(l,!0))}else this.spec&&a.appendChild(this.specCard(this.spec));a.childNodes.length&&e.appendChild(a);const c=document.createElement("div");return c.className="sheet-body",c.appendChild(this.prefsForm()),e.appendChild(c),e.appendChild(this.disclaimerEl()),e}toggleSheet(){this.sheetOpen=!this.sheetOpen,this.render()}prefsForm(){const e=document.createElement("div");e.className="prefs",e.innerHTML=`
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
    `,e.querySelectorAll("[data-style]").forEach(n=>n.addEventListener("click",()=>{const s=n.dataset.style,r=bs[s];this.prefs={...this.prefs,style:s,flooring:r.flooring,wallColor:r.wall,kitchen:r.kitchen},this.handlers.onPrefs(this.prefs),this.render()})),e.querySelectorAll("[data-flooring]").forEach(n=>n.addEventListener("click",()=>{this.prefs={...this.prefs,flooring:n.dataset.flooring},this.handlers.onPrefs(this.prefs),this.render()})),e.querySelectorAll("[data-kitchen]").forEach(n=>n.addEventListener("click",()=>{this.prefs={...this.prefs,kitchen:n.dataset.kitchen},this.handlers.onPrefs(this.prefs),this.render()}));const t=e.querySelector(".swatches");for(const n of hv){const s=document.createElement("button");s.className="swatch"+(this.prefs.wallColor.toLowerCase()===n.color.toLowerCase()?" on":""),s.style.background=n.color,s.title=n.name,s.type="button",s.dataset.tv=`wall-${n.id}`,s.addEventListener("click",()=>{this.prefs={...this.prefs,wallColor:n.color},this.handlers.onPrefs(this.prefs),this.render()}),t.appendChild(s)}return e.querySelector("#fur").addEventListener("change",n=>{this.prefs={...this.prefs,furniture:n.target.checked},this.handlers.onPrefs(this.prefs)}),e}segBtn(e,t,n){const s=e==="style"&&this.prefs.style===t||e==="flooring"&&this.prefs.flooring===t||e==="kitchen"&&this.prefs.kitchen===t;return`<button type="button" data-${e}="${t}" data-tv="${e}-${t}" class="${s?"on":""}" aria-pressed="${s}">${n}</button>`}zoomStack(){const e=document.createElement("div");return e.className="zoom-stack",e.innerHTML=`
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
    `,e.querySelector("[data-z=in]").addEventListener("click",()=>this.handlers.onZoom?.(-1)),e.querySelector("[data-z=out]").addEventListener("click",()=>this.handlers.onZoom?.(1)),this.view.kind==="flat"&&this.view.cam==="walk"&&(e.hidden=!0),e}hintText(){return this.tv?this.view.kind==="tower"?"<b>TV remote</b> · ↑ ↓ a floor · <kbd>Enter</kbd> open · <kbd>Esc</kbd> back":this.view.kind==="floor"?"<b>TV remote</b> · ← → a flat · <kbd>Enter</kbd> open · <kbd>Esc</kbd> back":this.view.kind==="flat"&&this.view.cam==="walk"?"<b>TV remote</b> · ↑ walk · ↓ back · ← → rooms · <kbd>Enter</kbd> dollhouse · <kbd>Esc</kbd> back":"<b>TV remote</b> · ← → rooms · <kbd>Enter</kbd> walk through · <kbd>Esc</kbd> back":this.view.kind==="tower"?"Drag to orbit. Tap a floor to go in.":this.view.kind==="floor"?"Tap a flat to open it. Drag to orbit.":this.view.kind==="flat"&&this.view.cam==="walk"?"Tap a room to fly there. Use the joystick to walk, drag to look.":"Drag to orbit. Tap a room to walk in, or Guided tour to play through each one."}dockHint(e){const t=document.createElement("p");return t.className="dock-hint",t.innerHTML=e,t}disclaimerEl(){const e=document.createElement("p");return e.className="disclaimer",e.textContent="Illustrative visualisation, not the finished unit. Sample tower for Lead Setu — not a real project.",e}planForUnit(e){return e.endsWith("PH")?this.plans.penthouse:e.endsWith("C")?this.plans["3bhk"]:this.plans["2bhk"]}openForm(){this.currentUnit=this.unitOfInterest(),this.formOpen=!0,this.menuOpen=!1,this.render(),this.root.querySelector("#lead-name")?.focus()}closeForm(){this.formOpen=!1,this.render()}unitOfInterest(){const e=this.view;if(e.kind==="flat"){const t=this.planForUnit(e.unitId);return`${e.unitId} ${t?.name??""}`.trim()}return e.kind==="floor"?Ea(e.floor):"Sample Tower (floor not chosen)"}form(){const e=document.createElement("div");return e.className="modal-bg",e.innerHTML=`
      <form class="modal" data-tv-root="form">
        <h2>Book a site visit</h2>
        <p>Leave your name and phone. In the product, this creates a lead in Lead Setu. This demo stores it only in your browser.</p>
        <label for="lead-name">Name</label>
        <input id="lead-name" name="name" required autocomplete="name" data-tv="name"/>
        <label for="lead-phone">Phone</label>
        <input id="lead-phone" name="phone" required inputmode="tel" autocomplete="tel" data-tv="phone"/>
        <label for="lead-unit">Unit of interest</label>
        <input id="lead-unit" name="unit" value="${Gt(this.currentUnit)}" data-tv="unit"/>
        <div class="row">
          <button type="button" class="ghost" data-action="cancel">Cancel</button>
          <button type="submit" class="cta" data-tv="submit">Send request</button>
        </div>
        <p class="hint-api">TODO: POST this payload to the Lead Setu API (name, phone, project, unit, session id) and hand the lead to the existing follow-up pipeline.</p>
      </form>
    `,e.addEventListener("click",t=>{t.target===e&&this.closeForm()}),e.querySelector("[data-action=cancel]").addEventListener("click",()=>this.closeForm()),e.querySelector("form").addEventListener("submit",t=>{t.preventDefault();const n=new FormData(t.target),s=String(n.get("name")||"").trim(),r=String(n.get("phone")||"").trim(),o=String(n.get("unit")||"").trim();!s||!r||(this.closeForm(),this.handlers.onBook({name:s,phone:r,unit:o}))}),e}}function Gt(i){return i.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function Du(i){const e="leadsetu-3d-demo-leads",t=JSON.parse(localStorage.getItem(e)||"[]"),n={...i,project:"Lead Setu Sample Tower",at:new Date().toISOString()};return t.push(n),localStorage.setItem(e,JSON.stringify(t)),console.info("[Lead Setu demo] site-visit request (local only)",n),n}const Iu=5,Nu=10;function DM(i,e,t,n){e.touches.ONE=Pn.ROTATE,e.touches.TWO=Pn.DOLLY_PAN;let s="none";const r=new Map;let o={x:0,y:0,dist:0,midX:0,midY:0},a={x:0,y:0,dist:0,midX:0,midY:0};const c=new Rc,l=new L;function h(){l.copy(t.position).sub(e.target),c.setFromVector3(l)}function u(){c.makeSafe(),c.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,c.phi)),c.radius=Math.max(e.minDistance,Math.min(e.maxDistance,c.radius)),l.setFromSpherical(c),t.position.copy(e.target).add(l),t.lookAt(e.target),e.update()}function d(f){n.isWalk()||(h(),c.radius*=f<0?.82:1.22,u())}function p(){const f=[...r.values()];if(f.length<2)return{dist:0,midX:0,midY:0};const x=f[1].x-f[0].x,v=f[1].y-f[0].y;return{dist:Math.hypot(x,v),midX:(f[0].x+f[1].x)/2,midY:(f[0].y+f[1].y)/2}}const g=f=>{if(n.isUiTarget(f.target)){r.size===0&&(s="blocked");return}if(f.pointerType!=="mouse"){if(r.set(f.pointerId,{x:f.clientX,y:f.clientY}),r.size===1)s="pending",o={x:f.clientX,y:f.clientY,dist:0,midX:f.clientX,midY:f.clientY},a={...o},e.enabled=!1;else if(r.size===2){const x=p();o={x:x.midX,y:x.midY,dist:x.dist,midX:x.midX,midY:x.midY},a={...o},s="pending",e.enabled=!1}}},b=f=>{if(!r.has(f.pointerId)||s==="blocked")return;if(r.set(f.pointerId,{x:f.clientX,y:f.clientY}),n.isWalk()){if(r.size===1){const E=f.clientX-a.x,R=f.clientY-a.y,T=Math.hypot(f.clientX-o.x,f.clientY-o.y);s==="pending"&&T>Iu&&(s="look",n.walker.cancelWalkTo()),s==="look"&&n.walker.look(E,R),a={...a,x:f.clientX,y:f.clientY}}return}if(r.size>=2){const E=p(),R=Math.abs(E.dist-o.dist),T=Math.hypot(E.midX-o.midX,E.midY-o.midY);if(s==="pending"&&(R>Nu||T>Nu)&&(s=R>=T*.85?"pinch":"pan",h()),s==="pinch"){if(a.dist>1&&E.dist>1){const C=a.dist/E.dist;c.radius*=C,u()}}else if(s==="pan"){const C=E.midX-a.midX,M=E.midY-a.midY,A=t.position.distanceTo(e.target)*.0022,N=new L,I=new L,U=new L;t.matrix.extractBasis(N,I,U),e.target.addScaledVector(N,-C*A),e.target.addScaledVector(I,M*A),u()}a={x:E.midX,y:E.midY,dist:E.dist,midX:E.midX,midY:E.midY};return}const x=f.clientX-a.x,v=f.clientY-a.y,_=Math.hypot(f.clientX-o.x,f.clientY-o.y);s==="pending"&&_>Iu&&(s="orbit",h()),s==="orbit"&&(c.theta-=x*.0055,c.phi-=v*.0055,u()),a={...a,x:f.clientX,y:f.clientY}},m=f=>{if(!(f.pointerType==="mouse"&&s!=="blocked")){if(r.delete(f.pointerId),r.size===0)s="none",n.isWalk()||(e.enabled=!0);else if(r.size===1){const x=[...r.values()][0];o={x:x.x,y:x.y,dist:0,midX:x.x,midY:x.y},a={...o},s="pending"}}};return i.addEventListener("pointerdown",g,{capture:!0}),window.addEventListener("pointermove",b),window.addEventListener("pointerup",m),window.addEventListener("pointercancel",m),{zoom:d,dispose(){i.removeEventListener("pointerdown",g,{capture:!0}),window.removeEventListener("pointermove",b),window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m)}}}function ku(i){return i instanceof Element?!!i.closest("#ui, .hotspot-lab, .unit-card, .unit-chip, button, input, a, .sheet, .dock, .topbar, .modal-bg, .menu-pop, .tour-card, .spec-card, .joy-wrap, .zoom-stack"):!1}const IM={style:"modern",flooring:bs.modern.flooring,wallColor:bs.modern.wall,kitchen:bs.modern.kitchen,furniture:!0},NM=4200;async function kM(){const i="./",[e,t,n]=await Promise.all([fetch(`${i}data/2bhk.json`).then(s=>s.json()),fetch(`${i}data/3bhk.json`).then(s=>s.json()),fetch(`${i}data/penthouse.json`).then(s=>s.json())]);return{"2bhk":e,"3bhk":t,penthouse:n}}class UM{engine;mats;catalog=null;plans;tower;walker;hud;gestures;tv;prefs={...IM};view={kind:"tower",hoverFloor:null};interiors=[];unitLabels=[];world=new Et;interiorRoot=new Et;ray=new Qh;pointer=new ie;dragging=!1;downXY={x:0,y:0};roomLights=[];time="morning";flying=!1;roomStops=[];currentRoom=null;tour=null;tourTimer=null;constructor(){const e=new URLSearchParams(location.search);this.tv=e.get("tv")==="1"||e.get("tv")==="true"}async start(){const e=document.getElementById("scene"),t=document.getElementById("labels"),n=document.getElementById("ui");Ys(.05),this.engine=nv(e,t),this.mats=await lv(this.engine.renderer,l=>Ys(.05+l*.55));const s=fM(this.engine.renderer,l=>Ys(.6+l*.2)),r=rv(this.engine,"./hdris/studio_small_08_1k.hdr"),o=ov(this.engine,"./hdris/modern_buildings_2_1k.hdr");this.plans=await kM(),this.catalog=await s,await Promise.all([r,o]),Ys(.88),this.engine.scene.add(this.world),this.engine.scene.add(this.interiorRoot),this.tower=xv(this.mats),this.world.add(this.tower.group),this.walker=new CM(e),this.walker.tv=this.tv,this.gestures=DM(e,this.engine.orbit,this.engine.camera,{isWalk:()=>this.view.kind==="flat"&&this.view.cam==="walk"&&!this.flying,walker:this.walker,isUiTarget:ku}),this.hud=new LM(n,this.prefs,this.plans,this.tv,{onGotoTower:()=>this.showTower(),onGotoFloor:l=>this.showFloor(l),onGotoUnit:(l,h)=>this.showFlat(l,h,"dollhouse"),onCam:l=>{this.view.kind==="flat"&&this.showFlat(this.view.floor,this.view.unitId,l)},onPrefs:l=>this.setPrefs(l),onBook:l=>{Du(l),this.hud.toast("Request saved on this device. A sales executive would follow up in Lead Setu.")},onTime:l=>this.setTime(l),onRoom:l=>{this.stopTour(!1),this.goRoom(l)},onTour:l=>this.handleTour(l),onZoom:l=>this.gestures.zoom(l)}),this.bindPointer(e),this.bindKeys(),this.showTower(!1),this.hud.setView(this.view);const a=()=>{const l=document.getElementById("joy-base"),h=document.getElementById("joy-knob");l&&h&&!l.dataset.ready&&(l.dataset.ready="1",PM(l,h,this.walker))};new MutationObserver(a).observe(n,{childList:!0,subtree:!0}),a(),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch"),zM(),Ys(1),BM(),this.engine.start(l=>this.tick(l),()=>this.afterRender()),this.exposeApi()}setTime(e){this.time=e,this.hud.setTime(e),this.applySceneTime()}applySceneTime(){sv(this.engine,this.time),this.tower.setTime(this.time);for(const s of this.interiors)s.setTime(this.time);const e=this.time==="night",t=this.time==="golden",n=this.view.kind==="flat"&&this.view.cam==="walk";for(const s of this.roomLights)s instanceof Tc?e?(s.color.set("#2a3a58"),s.groundColor.set("#161018"),s.intensity=.16):t?(s.color.set("#ffd9a8"),s.groundColor.set("#8a5a38"),s.intensity=n?.5:.35):(s.color.set("#f4efe6"),s.groundColor.set("#8a7a68"),s.intensity=n?.28:.4):s instanceof gr&&(s.intensity=e?.06:t?n?.28:.55:n?.2:.75,s.color.set(e?"#a0b4e0":t?"#ffb060":"#fff4df"))}tick(e){this.flying||(this.view.kind==="flat"&&this.view.cam==="walk"?(this.engine.orbit.enabled=!1,this.walker.update(e),this.walker.apply(this.engine.camera)):this.flying||(this.engine.orbit.enabled=!0))}afterRender(){this.syncHotspotLabels()}syncHotspotLabels(){const e=this.interiors;if(!e.length)return;const t=document.body.classList.contains("compact"),n=this.view.kind==="flat"&&this.view.cam==="walk",s=this.engine.camera,r=window.innerWidth,o=window.innerHeight,a=this.chromeRects();for(const c of e)for(const l of c.hotspots){l.mesh&&(l.mesh.visible=!n);const h=l.labelEl;if(!h)continue;if(t||n){h.classList.add("is-hidden");continue}const u=l.position;if(u.clone().applyMatrix4(s.matrixWorldInverse).z>-.15){h.classList.add("is-hidden");continue}const p=u.clone().project(s);if(p.z<-1||p.z>1){h.classList.add("is-hidden");continue}let g=(p.x*.5+.5)*r,b=(-p.y*.5+.5)*o;const m=10;if(g<-30||b<-20||g>r+30||b>o+20){h.classList.add("is-hidden");continue}const x=u.clone().sub(s.position),v=x.length();x.multiplyScalar(1/(v||1)),this.ray.set(s.position,x);const _=[];if(c.group.traverse(y=>{y instanceof he&&y.name!=="hotspot"&&!y.name.startsWith("studio")&&_.push(y)}),this.ray.intersectObjects(_,!0).some(y=>y.distance<v-.45&&!FM(y.object))){h.classList.add("is-hidden");continue}const T=h.offsetWidth||80,C=h.offsetHeight||22;g=Math.max(m+T/2,Math.min(r-m-T/2,g)),b=Math.max(m+C/2,Math.min(o-m-C/2,b));const M={x:g-T/2,y:b-C/2,w:T,h:C};if(a.some(y=>OM(M,y))){h.classList.add("is-hidden");continue}h.classList.remove("is-hidden")}}chromeRects(){return[...this.hud.root.querySelectorAll(".topbar, .sheet, .room-dock, .dock, .tour-card, .menu-pop, .modal-bg, .zoom-stack, .joy-wrap")].flatMap(t=>{const n=getComputedStyle(t);if(n.display==="none"||n.visibility==="hidden")return[];const s=t.getBoundingClientRect();return s.width<4||s.height<4?[]:[{x:s.x,y:s.y,w:s.width,h:s.height}]})}clearInteriors(){for(const e of this.interiors)e.dispose();this.interiors=[];for(const e of this.unitLabels)e.element?.remove(),e.removeFromParent();this.unitLabels=[];for(const e of this.roomLights)e.removeFromParent();this.roomLights=[],this.interiorRoot.clear()}setPrefs(e){this.prefs=e,this.hud.setPrefs(e);for(const t of this.interiors)t.applyPrefs(e);if(this.view.kind==="flat"){const{floor:t,unitId:n,cam:s}=this.view,r=this.currentRoom;return this.showFlat(t,n,s,!0).then(()=>{r&&this.hud.setCurrentRoom(r)})}else this.view.kind==="floor"&&this.showFloor(this.view.floor,!0)}async showTower(e=!0){this.stopTour(!0),this.walker.enabled=!1,ya(),document.pointerLockElement&&document.exitPointerLock(),this.clearInteriors(),this.roomStops=[],this.currentRoom=null,this.world.visible=!0,this.tower.setIsolated(null),this.tower.highlight(null),this.hud.spec=null,this.view={kind:"tower",hoverFloor:null},this.engine.setHudLift(0),this.engine.setWalkFov(null),this.engine.aimWalkLighting(null,null,0),this.hud.setView(this.view),this.applySceneTime();const[t,n]=fu(),s=new L(38,30,42),r=new L(t,10,n);e?await ao(this.engine.camera,this.engine.orbit,s,r,1.1):(this.engine.camera.position.copy(s),this.engine.orbit.target.copy(r),this.engine.orbit.update())}async showFloor(e,t=!1){this.stopTour(!0),this.walker.enabled=!1,ya(),document.pointerLockElement&&document.exitPointerLock(),this.clearInteriors(),this.roomStops=[],this.currentRoom=null,this.world.visible=!0,this.tower.setIsolated(e),this.tower.highlight(e),this.hud.spec=null,this.view={kind:"floor",floor:e,hoverUnit:null},this.hud.setView(this.view),this.engine.setHudLift(0),this.engine.setWalkFov(null),this.engine.aimWalkLighting(null,null,0),this.applySceneTime();const n=gl(e),s=xo(e);for(const a of s){const c=this.plans[a.planId],l=Ru(c,this.prefs,this.mats,{transform:a.transform,showCeiling:!1,y:n,cutaway:!0,catalog:this.catalog,mobile:this.engine.mobile});l.group.userData.unitId=er(e,a.suffix),l.group.userData.slot=a,this.interiorRoot.add(l.group),this.interiors.push(l);const h=document.createElement("button");h.type="button",h.className="unit-card",h.innerHTML=`<div class="u-id">${er(e,a.suffix)}</div>
        <div class="u-meta">${a.typeLabel}<br>${Fd(c)}</div>`,h.addEventListener("click",b=>{b.stopPropagation(),this.showFlat(e,er(e,a.suffix),"dollhouse")});const u=new As(h),d=a.transform,[p,g]=[d.ox+d.width/2,d.oz+d.depth/2];u.position.set(p,n+2.2,g),this.interiorRoot.add(u),this.unitLabels.push(u)}const r=document.createElement("div");r.className="unit-card",r.style.pointerEvents="none",r.innerHTML='<div class="u-meta">Lifts &amp; stairs</div>';const o=new As(r);if(o.position.set(sn.x+sn.w/2,n+1.6,sn.z+sn.d/2),this.interiorRoot.add(o),this.unitLabels.push(o),!t){const[a,c]=fu();await ao(this.engine.camera,this.engine.orbit,new L(a+.8,n+28,c+4.5),new L(a,n+.2,c),1)}}async showFlat(e,t,n,s=!1,r,o={}){document.pointerLockElement&&n!=="walk"&&document.exitPointerLock();const a=this.walker.position.clone(),c=this.walker.yaw,l=this.hud.spec?.id??null,h=this.currentRoom;this.clearInteriors(),this.world.visible=!1,this.tower.setIsolated(null),this.tower.highlight(null),this.view={kind:"flat",floor:e,unitId:t,cam:n},this.hud.setView(this.view);const u=t.replace(/^\d+/,""),d=xo(e),p=d.find(_=>_.suffix===u)??d[0],g=this.plans[p.planId],b=Ru(g,this.prefs,this.mats,{transform:p.transform,showCeiling:n==="walk",y:0,cutaway:n==="dollhouse",hotspots:!0,catalog:this.catalog,mobile:this.engine.mobile});if(this.interiorRoot.add(b.group),this.interiors.push(b),this.roomStops=b.rooms,n==="dollhouse"){const _=new he(new cl(48,48),new ot({color:this.time==="night"?"#1a1e28":this.time==="golden"?"#c9a078":"#d8d2c6",roughness:.95,metalness:0}));_.rotation.x=-Math.PI/2,_.position.y=-.04,_.receiveShadow=!0,_.name="studio-ground",this.interiorRoot.add(_)}const m=new Tc("#f4efe6","#8a7a68",n==="walk"?.28:.4);if(this.interiorRoot.add(m),this.roomLights.push(m),n==="dollhouse"){const _=new gr("#fff4df",.75);_.position.set(8,12,6),_.castShadow=!this.engine.mobile,this.interiorRoot.add(_),this.roomLights.push(_)}if(this.applySceneTime(),n==="walk"){const _=b.lighting;this.engine.aimWalkLighting(_.center,_.incoming,_.radius)}else this.engine.aimWalkLighting(null,null,0);for(const _ of b.hotspots)_.labelEl?.addEventListener("click",E=>{E.preventDefault(),E.stopPropagation(),this.openHotspot(_)});if(l){const _=b.hotspots.find(E=>E.id===l);_?this.hud.showSpec(_):this.hud.spec=null}this.hud.setRooms(this.roomStops,h);const f=p.transform,x=f.ox+f.width/2,v=f.oz+f.depth/2;if(n==="walk"){if(this.walker.setCollisions(b.collisions,b.worldRooms),o.skipSpawn)this.walker.enabled=!1;else{let _=r?.x??b.spawn.x,E=r?.z??b.spawn.z,R=r?.yaw??b.spawn.yaw,T=r?.yaw!==void 0?-.18+Ma():(b.spawn.pitch??-.18)+Ma();s&&!r&&a.y>.5&&this.walker.isWalkable(a.x,a.z)&&(_=a.x,E=a.z,R=c,T=this.walker.pitch),this.walker.spawn(_,1.6,E,R,T),this.walker.apply(this.engine.camera),this.walker.enabled=!0}if(this.engine.orbit.enabled=!1,!this.currentRoom&&!o.skipSpawn){const _=this.roomStops.find(E=>E.type==="living")??this.roomStops.find(E=>E.type==="foyer")??this.roomStops[0];_&&(this.currentRoom=_.id,this.hud.setCurrentRoom(_.id,!1))}}else this.walker.enabled=!1,this.engine.orbit.enabled=!0,s||await ao(this.engine.camera,this.engine.orbit,new L(x+8,g.wallHeight+7,v+9),new L(x,1,v),.9);if(this.engine.setHudLift(n==="walk"?.08:0),n==="walk"){const _=this.roomStops.find(E=>E.id===this.currentRoom)??this.roomStops.find(E=>E.type==="living")??this.roomStops[0];this.engine.setWalkFov(_?.fov??70)}else this.engine.setWalkFov(null)}cameraYaw(){const e=new L;return this.engine.camera.getWorldDirection(e),Math.atan2(-e.x,-e.z)}cameraPitch(){return new En().setFromQuaternion(this.engine.camera.quaternion,"YXZ").x}async goRoom(e){const t=this.roomStops.find(n=>n.id===e);if(!(!t||this.view.kind!=="flat")){if(this.hud.spec=null,this.currentRoom=e,this.walker.skipLockOnce=!0,document.pointerLockElement&&document.exitPointerLock(),this.view.cam!=="walk"){const{floor:n,unitId:s}=this.view;await this.showFlat(n,s,"walk",!0,void 0,{skipSpawn:!0})}await this.flyToStop(t),this.hud.setCurrentRoom(e)}}async flyToStop(e){if(this.view.kind!=="flat")return;this.engine.setWalkFov(e.fov??70),this.engine.setHudLift(.08),ya(),this.flying=!0,this.walker.enabled=!1,this.engine.orbit.enabled=!1;const t=this.engine.camera.position.clone(),n=this.cameraYaw(),s=this.cameraPitch();try{const r=e.pitch+Ma();await iv(this.engine.camera,t,n,s,e.position,e.yaw,r,1.15),this.walker.spawn(e.walkX,1.6,e.walkZ,e.yaw,r),this.walker.apply(this.engine.camera),this.walker.enabled=!0}finally{this.flying=!1,this.engine.orbit.enabled=!1}}handleTour(e){e==="start"?this.startTour():e==="stop"?this.stopTour(!1):e==="next"?this.tourStep(1):e==="prev"?this.tourStep(-1):e==="toggle"&&this.toggleTourPlay()}async startTour(){!this.roomStops.length||this.view.kind!=="flat"||(this.tour={active:!0,playing:!0,index:0},this.hud.setTour(this.tour),await this.goRoom(this.roomStops[0].id),this.scheduleTour())}stopTour(e=!1){this.clearTourTimer();const t=this.tour;this.tour=null,t&&!e&&this.hud.setTour(null)}toggleTourPlay(){this.tour&&(this.tour={...this.tour,playing:!this.tour.playing},this.hud.setTour(this.tour),this.tour.playing?this.scheduleTour():this.clearTourTimer())}async tourStep(e){if(!this.roomStops.length)return;this.tour||(this.tour={active:!0,playing:!1,index:0});const t=this.tour.index+e;if(!(t<0)){if(t>=this.roomStops.length){this.stopTour(!1);return}this.tour={...this.tour,index:t},this.hud.setTour(this.tour),await this.goRoom(this.roomStops[t].id),this.tour?.playing&&this.scheduleTour()}}scheduleTour(){this.clearTourTimer(),this.tour?.playing&&(this.tourTimer=window.setTimeout(()=>{this.tourStep(1)},NM))}clearTourTimer(){this.tourTimer!==null&&(clearTimeout(this.tourTimer),this.tourTimer=null)}async openHotspot(e){this.walker.skipLockOnce=!0,document.pointerLockElement&&document.exitPointerLock(),this.hud.showSpec(e);const t=this.roomStops.find(r=>r.name===e.title||r.id===e.id.replace(/^(kitchen|bath|view)-/,"")||e.kind==="kitchen"&&r.type==="kitchen"||e.kind==="bath"&&r.type==="bathroom"||e.kind==="view"&&(r.type==="balcony"||r.type==="terrace"));if(t){this.stopTour(!1),await this.goRoom(t.id);return}if(this.flying)return;this.flying=!0;const n=e.cameraPos.clone(),s=e.lookAt.clone();try{const r=this.view.kind==="flat"&&this.view.cam==="walk";if(r&&(this.walker.enabled=!1),await ao(this.engine.camera,this.engine.orbit,n,s,.8),r){this.engine.orbit.enabled=!1;const o=Math.atan2(-(s.x-n.x),-(s.z-n.z)),a=this.walker.isWalkable(n.x,n.z);this.walker.spawn(a?n.x:e.position.x,1.6,a?n.z:e.position.z,o),this.walker.apply(this.engine.camera),this.walker.enabled=!0}}finally{this.flying=!1}}bindPointer(e){const t=r=>{this.dragging=!1,this.downXY={x:r.clientX,y:r.clientY}},n=r=>{(r.buttons||r.pressure)&&Math.hypot(r.clientX-this.downXY.x,r.clientY-this.downXY.y)>5&&(this.dragging=!0),this.pointer.x=r.clientX/window.innerWidth*2-1,this.pointer.y=-(r.clientY/window.innerHeight)*2+1,this.view.kind==="tower"&&this.hoverTower()},s=r=>{this.dragging||ku(r.target)||(this.pointer.x=r.clientX/window.innerWidth*2-1,this.pointer.y=-(r.clientY/window.innerHeight)*2+1,this.clickScene())};e.addEventListener("pointerdown",t),window.addEventListener("pointermove",n),e.addEventListener("pointerup",s)}hoverTower(){if(this.view.kind!=="tower")return;this.ray.setFromCamera(this.pointer,this.engine.camera);const e=this.ray.intersectObjects(this.tower.floorHits,!1),t=e.length?e[0].object.userData.floor:null;t!==this.view.hoverFloor&&(this.tower.highlight(t),this.hud.setHoverFloor(t))}clickScene(){if(this.ray.setFromCamera(this.pointer,this.engine.camera),this.view.kind==="tower"){const e=this.ray.intersectObjects(this.tower.floorHits,!1);e.length&&this.showFloor(e[0].object.userData.floor);return}if(this.view.kind==="floor"){const e=this.interiors.flatMap(n=>{const s=[];return n.group.traverse(r=>{r instanceof he&&s.push(r)}),s}),t=this.ray.intersectObjects(e,!1);if(t.length){let n=t[0].object;for(;n;){if(n.userData.unitId){this.showFlat(this.view.floor,n.userData.unitId,"dollhouse");return}n=n.parent}}return}if(this.view.kind==="flat"){if(document.pointerLockElement)return;const e=this.interiors.flatMap(o=>o.hotspots.map(a=>a.mesh)),t=this.ray.intersectObjects(e,!0);if(t.length){let o=t[0].object;for(;o;){const a=o.userData.hotspot;if(a){this.walker.skipLockOnce=!0,this.openHotspot(a);return}o=o.parent}}const n=this.interiors.flatMap(o=>o.floorMeshes),s=this.ray.intersectObjects(n,!1);if(!s.length)return;const r=s[0].point;if(this.walker.skipLockOnce=!0,this.view.cam!=="walk"){this.showFlat(this.view.floor,this.view.unitId,"walk",!1,{x:r.x,z:r.z});return}if(!this.walker.walkTo(r.x,r.z)){const o=this.engine.camera.position;this.walker.walkTo(r.x+(o.x-r.x)*.1,r.z+(o.z-r.z)*.1)}}}bindKeys(){window.addEventListener("keydown",e=>{if(e.code==="Escape"){if(document.pointerLockElement){document.exitPointerLock();return}this.hud.goBack();return}if(!this.tv)return;const t=this.view;if(t.kind==="flat"){if(e.code==="ArrowLeft"||e.code==="ArrowRight"){if(!this.roomStops.length)return;let n=this.roomStops.findIndex(s=>s.id===this.currentRoom);n<0&&(n=0),n+=e.code==="ArrowRight"?1:-1,n=Math.max(0,Math.min(this.roomStops.length-1,n)),this.stopTour(!1),this.goRoom(this.roomStops[n].id),e.preventDefault();return}if(t.cam==="walk"&&(e.code==="Enter"||e.code==="NumpadEnter")){this.showFlat(t.floor,t.unitId,"dollhouse"),e.preventDefault();return}t.cam==="dollhouse"&&(e.code==="Enter"||e.code==="NumpadEnter")&&(this.showFlat(t.floor,t.unitId,"walk"),e.preventDefault());return}if(t.kind==="tower"){const n=t.hoverFloor??1;if(e.code==="ArrowUp"){const s=Math.min(Oi,n+1);this.tower.highlight(s),this.hud.setHoverFloor(s),e.preventDefault()}if(e.code==="ArrowDown"){const s=Math.max(1,n-1);this.tower.highlight(s),this.hud.setHoverFloor(s),e.preventDefault()}(e.code==="Enter"||e.code==="NumpadEnter")&&(this.showFloor(t.hoverFloor??1),e.preventDefault())}else if(t.kind==="floor"){const s=xo(t.floor).map(o=>er(t.floor,o.suffix));let r=Math.max(0,s.indexOf(t.hoverUnit??s[0]));(e.code==="ArrowRight"||e.code==="ArrowLeft")&&(r=(r+(e.code==="ArrowRight"?1:s.length-1))%s.length,this.view={...t,hoverUnit:s[r]},this.hud.setView(this.view),document.querySelectorAll(".unit-card, .unit-chip").forEach(o=>{o.classList.toggle("hov",o.textContent?.includes(s[r])??!1)}),e.preventDefault()),(e.code==="Enter"||e.code==="NumpadEnter")&&(this.showFlat(t.floor,t.hoverUnit??s[0],"dollhouse"),e.preventDefault())}})}exposeApi(){const e={ready:!0,view:()=>this.view,gotoTower:()=>this.showTower(),gotoFloor:t=>this.showFloor(t),gotoFlat:(t,n,s="dollhouse")=>this.showFlat(t,n,s),setCam:t=>{if(this.view.kind==="flat")return this.showFlat(this.view.floor,this.view.unitId,t)},setTime:t=>this.setTime(t),setPrefs:t=>this.setPrefs({...this.prefs,...t}),setSheet:t=>this.hud.setSheet(t),rooms:()=>this.roomStops,goRoom:t=>this.goRoom(t),startTour:()=>this.startTour(),stopTour:()=>this.stopTour(!1),tourStep:t=>this.tourStep(t),setTourPlaying:t=>{this.tour&&(this.tour={...this.tour,playing:t},this.hud.setTour(this.tour),t?this.scheduleTour():this.clearTourTimer())},openForm:()=>this.hud.openForm(),closeForm:()=>this.hud.closeForm(),submitLead:(t,n)=>{const s=this.hud.unitOfInterest();Du({name:t,phone:n,unit:s}),this.hud.closeForm(),this.hud.toast("Request saved on this device. A sales executive would follow up in Lead Setu.")},toast:t=>this.hud.toast(t),currentRoom:()=>this.currentRoom,tour:()=>this.tour,prefs:()=>this.prefs,fps:()=>this.engine.fps(),ao:()=>({enabled:this.engine.aoEnabled(),highTier:this.engine.highTier,software:this.engine.softwareGpu}),lighting:()=>this.interiors[0]?.lighting??null,camInfo:()=>({pos:this.engine.camera.position.toArray(),rot:[this.engine.camera.rotation.x,this.engine.camera.rotation.y,this.engine.camera.rotation.z],fov:this.engine.camera.fov,near:this.engine.camera.near,far:this.engine.camera.far,aspect:this.engine.camera.aspect,view:this.engine.camera.view}),rayFloor:()=>{const t=new Qh,n=[[0,-.2],[0,-.45],[.2,-.3],[-.2,-.3],[0,0]],s=[];for(const[r,o]of n){t.setFromCamera(new ie(r,o),this.engine.camera);const a=t.intersectObject(this.engine.scene,!0);s.push({ndc:[r,o],hits:a.slice(0,6).map(c=>{const l=c.object instanceof he?c.object.material:null,h=l?.map?.image;return{name:c.object.name,type:c.object.type,y:c.object.position.y,dist:Math.round(c.distance*1e3)/1e3,point:c.point.toArray().map(u=>Math.round(u*1e3)/1e3),visible:c.object.visible,mat:l?.type,color:l?.color?.getHexString?.(),map:h?.src?.slice(-40)??null,parent:c.object.parent?.name??c.object.parent?.type??null}})})}return s},paintFloors:(t,n=!1)=>{for(const s of this.interiors)for(const r of s.floorMeshes){const o=r.material;n&&o.map?r.material=new Xt({map:o.map,color:"#ffffff"}):(o.map=null,o.normalMap=null,o.roughnessMap=null,o.color.set(t),o.needsUpdate=!0)}},floorDebug:()=>{const t=[];for(const n of this.interiors)for(const s of n.floorMeshes){const r=s.material,o=r.map?.image,a=s.geometry.getAttribute("uv"),c=s.geometry.getAttribute("position"),l=s.geometry.getAttribute("normal");t.push({name:s.name,visible:s.visible,y:s.position.y,color:r.color.getHexString(),type:r.type,side:r.side,rough:r.roughness,env:r.envMapIntensity,map:r.map?{w:o?.width??0,src:String(o?.src??"").slice(-50),repeat:r.map.repeat.toArray(),wrap:r.map.wrapS,colorSpace:r.map.colorSpace}:null,uv0:a?[a.getX(0),a.getY(0),a.getX(1),a.getY(1),a.getX(2),a.getY(2)]:null,pos0:c?[c.getX(0),c.getY(0),c.getZ(0),c.getX(1),c.getY(1),c.getZ(1)]:null,n0:l?[l.getX(0),l.getY(0),l.getZ(0)]:null,verts:c?.count})}return t}};window.__leadsetu=e}}function FM(i){let e=i;for(;e;){if(e.name==="hotspot"||e.userData.hotspot)return!0;e=e.parent}return!1}function OM(i,e){const t=Math.max(0,Math.min(i.x+i.w,e.x+e.w)-Math.max(i.x,e.x)),n=Math.max(0,Math.min(i.y+i.h,e.y+e.h)-Math.max(i.y,e.y));return t>6&&n>6}function Ys(i){const e=document.getElementById("load-bar"),t=document.getElementById("load-pct"),n=Math.round(Math.max(0,Math.min(1,i))*100);e&&(e.style.width=n+"%"),t&&(t.textContent=n+"%")}function zM(){const i=[...document.querySelectorAll("#tips .tip")],e=[...document.querySelectorAll("#tips [data-dot]")];if(!i.length)return;let t=0;const n=o=>{t=(o+i.length)%i.length,i.forEach((a,c)=>a.classList.toggle("on",c===t)),e.forEach((a,c)=>a.classList.toggle("on",c===t))};n(0),e.forEach((o,a)=>o.addEventListener("click",()=>n(a)));const s=window.setInterval(()=>n(t+1),3200),r=document.getElementById("loading");if(r){const o=new MutationObserver(()=>{r.classList.contains("done")&&(clearInterval(s),o.disconnect())});o.observe(r,{attributes:!0,attributeFilter:["class"]})}}function BM(){const i=document.getElementById("loading"),e=document.getElementById("start-explore");e&&(e.hidden=!1);const t=new URLSearchParams(location.search).get("hold")==="1";let n=!1;const s=()=>{n||(n=!0,i?.classList.add("done"),document.body.classList.remove("booting"))};e?.addEventListener("click",s),t||window.setTimeout(s,7e3)}new UM().start().catch(i=>{console.error(i);const e=document.querySelector(".load-sub");e&&(e.textContent="Could not load the walkthrough. Check the console.")});
//# sourceMappingURL=index-D1yfA8h0.js.map
