(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="170",Ri={ROTATE:0,DOLLY:1,PAN:2},en={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_h=0,Pa=1,vh=2,ia=1,Ml=2,fn=3,Fn=0,Te=1,tn=2,Ln=0,Ci=1,La=2,Da=3,Ia=4,xh=5,$n=100,Mh=101,yh=102,Sh=103,wh=104,Eh=200,bh=201,Th=202,Ah=203,io=204,so=205,Rh=206,Ch=207,Ph=208,Lh=209,Dh=210,Ih=211,Uh=212,Nh=213,Fh=214,ro=0,oo=1,ao=2,Ui=3,co=4,lo=5,ho=6,uo=7,yl=0,Oh=1,kh=2,Dn=0,Bh=1,zh=2,Hh=3,Sl=4,Vh=5,Gh=6,Wh=7,wl=300,Ni=301,Fi=302,fo=303,po=304,ar=306,er=1e3,Jn=1001,mo=1002,qe=1003,Xh=1004,_s=1005,nn=1006,pr=1007,Qn=1008,_n=1009,El=1010,bl=1011,rs=1012,sa=1013,ni=1014,pn=1015,us=1016,ra=1017,oa=1018,Oi=1020,Tl=35902,Al=1021,Rl=1022,Ye=1023,Cl=1024,Pl=1025,Pi=1026,ki=1027,Ll=1028,aa=1029,Dl=1030,ca=1031,la=1033,Ys=33776,qs=33777,Zs=33778,$s=33779,go=35840,_o=35841,vo=35842,xo=35843,Mo=36196,yo=37492,So=37496,wo=37808,Eo=37809,bo=37810,To=37811,Ao=37812,Ro=37813,Co=37814,Po=37815,Lo=37816,Do=37817,Io=37818,Uo=37819,No=37820,Fo=37821,Ks=36492,Oo=36494,ko=36495,Il=36283,Bo=36284,zo=36285,Ho=36286,Yh=3200,qh=3201,Ul=0,Zh=1,Cn="",Le="srgb",oi="srgb-linear",cr="linear",te="srgb",li=7680,Ua=519,$h=512,Kh=513,jh=514,Nl=515,Jh=516,Qh=517,tu=518,eu=519,Na=35044,Fa="300 es",mn=2e3,nr=2001;class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,Vo=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function nu(i,t){return(i%t+t)%t}function mr(i,t,e){return(1-e)*i+e*t}function Xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const iu={DEG2RAD:js};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,r,o,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],u=s[6],E=s[1],S=s[4],v=s[7],P=s[2],T=s[5],A=s[8];return r[0]=o*_+a*E+c*P,r[3]=o*m+a*S+c*T,r[6]=o*u+a*v+c*A,r[1]=l*_+h*E+d*P,r[4]=l*m+h*S+d*T,r[7]=l*u+h*v+d*A,r[2]=f*_+p*E+g*P,r[5]=f*m+p*S+g*T,r[8]=f*u+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gr.makeScale(t,e)),this}rotate(t){return this.premultiply(gr.makeRotation(-t)),this}translate(t,e){return this.premultiply(gr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gr=new Ht;function Fl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function su(){const i=os("canvas");return i.style.display="block",i}const Oa={};function Ji(i){i in Oa||(Oa[i]=!0,console.warn(i))}function ru(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ou(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function au(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:oi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=gn(i.r),i.g=gn(i.g),i.b=gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?cr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ka=[.64,.33,.3,.6,.15,.06],Ba=[.2126,.7152,.0722],za=[.3127,.329],Ha=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Va=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[oi]:{primaries:ka,whitePoint:za,transfer:cr,toXYZ:Ha,fromXYZ:Va,luminanceCoefficients:Ba,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:ka,whitePoint:za,transfer:te,toXYZ:Ha,fromXYZ:Va,luminanceCoefficients:Ba,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}});let hi;class cu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=os("canvas")),hi.width=t.width,hi.height=t.height;const n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=os("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lu=0;class Ol{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_r(s[o].image)):r.push(_r(s[o]))}else r=_r(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function _r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hu=0;class Ae extends ai{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Jn,s=Jn,r=nn,o=Qn,a=Ye,c=_n,l=Ae.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Hi(),this.name="",this.source=new Ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=wl;Ae.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,v=(p+1)/2,P=(u+1)/2,T=(h+f)/4,A=(d+_)/4,I=(g+m)/4;return S>v&&S>P?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(f-h)/E,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uu extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ol(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends uu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kl extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class du extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==f||l!==p||h!==g){let m=1-a;const u=c*f+l*p+h*g+d*_,E=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const P=Math.sqrt(S),T=Math.atan2(P,u*E);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}const v=a*E;if(c=c*m+f*v,l=l*m+p*v,h=h*m+g*v,d=d*m+_*v,m===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*p-l*f,t[e+1]=c*g+h*f+l*d-a*p,t[e+2]=l*g+h*p+a*f-c*d,t[e+3]=h*g-a*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"YZX":this._x=f*h*d+l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d-f*p*g;break;case"XZY":this._x=f*h*d-l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ga.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ga.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vr.copy(this).projectOnVector(t),this.sub(vr)}reflect(t){return this.sub(vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new L,Ga=new si;class ds{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ve):Ve.fromBufferAttribute(r,o),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(t.matrixWorld),this.union(vs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),xs.subVectors(this.max,Yi),ui.subVectors(t.a,Yi),di.subVectors(t.b,Yi),fi.subVectors(t.c,Yi),yn.subVectors(di,ui),Sn.subVectors(fi,di),Hn.subVectors(ui,fi);let e=[0,-yn.z,yn.y,0,-Sn.z,Sn.y,0,-Hn.z,Hn.y,yn.z,0,-yn.x,Sn.z,0,-Sn.x,Hn.z,0,-Hn.x,-yn.y,yn.x,0,-Sn.y,Sn.x,0,-Hn.y,Hn.x,0];return!xr(e,ui,di,fi,xs)||(e=[1,0,0,0,1,0,0,0,1],!xr(e,ui,di,fi,xs))?!1:(Ms.crossVectors(yn,Sn),e=[Ms.x,Ms.y,Ms.z],xr(e,ui,di,fi,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new L,new L,new L,new L,new L,new L,new L,new L],Ve=new L,vs=new ds,ui=new L,di=new L,fi=new L,yn=new L,Sn=new L,Hn=new L,Yi=new L,xs=new L,Ms=new L,Vn=new L;function xr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vn.fromArray(i,r);const a=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),c=t.dot(Vn),l=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const fu=new ds,qi=new L,Mr=new L;class ha{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);const e=qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(Mr)),this.expandByPoint(qi.copy(t.center).sub(Mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new L,yr=new L,ys=new L,wn=new L,Sr=new L,Ss=new L,wr=new L;class ua{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yr.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(yr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ys),a=wn.dot(this.direction),c=-wn.dot(ys),l=wn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,g;if(h>0)if(d=o*c-a,f=o*a-c,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(yr).addScaledVector(ys,f),p}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){Sr.subVectors(e,t),Ss.subVectors(n,t),wr.crossVectors(Sr,Ss);let o=this.direction.dot(wr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,t);const c=a*this.direction.dot(Ss.crossVectors(wn,Ss));if(c<0)return null;const l=a*this.direction.dot(Sr.cross(wn));if(l<0||c+l>o)return null;const h=-a*wn.dot(wr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,o,a,c,l,h,d,f,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,f,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,d,f,p,g,_,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/pi.setFromMatrixColumn(t,0).length(),r=1/pi.setFromMatrixColumn(t,1).length(),o=1/pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,p=c*d,g=l*h,_=l*d;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,p=c*d,g=l*h,_=l*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,p=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*d,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pu,t,mu)}lookAt(t,e,n){const s=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),En.crossVectors(n,Ie),En.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),En.crossVectors(n,Ie)),En.normalize(),ws.crossVectors(Ie,En),s[0]=En.x,s[4]=ws.x,s[8]=Ie.x,s[1]=En.y,s[5]=ws.y,s[9]=Ie.y,s[2]=En.z,s[6]=ws.z,s[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],u=n[14],E=n[3],S=n[7],v=n[11],P=n[15],T=s[0],A=s[4],I=s[8],w=s[12],M=s[1],C=s[5],H=s[9],O=s[13],W=s[2],q=s[6],k=s[10],X=s[14],D=s[3],B=s[7],$=s[11],nt=s[15];return r[0]=o*T+a*M+c*W+l*D,r[4]=o*A+a*C+c*q+l*B,r[8]=o*I+a*H+c*k+l*$,r[12]=o*w+a*O+c*X+l*nt,r[1]=h*T+d*M+f*W+p*D,r[5]=h*A+d*C+f*q+p*B,r[9]=h*I+d*H+f*k+p*$,r[13]=h*w+d*O+f*X+p*nt,r[2]=g*T+_*M+m*W+u*D,r[6]=g*A+_*C+m*q+u*B,r[10]=g*I+_*H+m*k+u*$,r[14]=g*w+_*O+m*X+u*nt,r[3]=E*T+S*M+v*W+P*D,r[7]=E*A+S*C+v*q+P*B,r[11]=E*I+S*H+v*k+P*$,r[15]=E*w+S*O+v*X+P*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+u*(-s*a*h-e*c*d+e*a*f+s*o*d-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],u=t[15],E=d*m*l-_*f*l+_*c*p-a*m*p-d*c*u+a*f*u,S=g*f*l-h*m*l-g*c*p+o*m*p+h*c*u-o*f*u,v=h*_*l-g*d*l+g*a*p-o*_*p-h*a*u+o*d*u,P=g*d*c-h*_*c-g*a*f+o*_*f+h*a*m-o*d*m,T=e*E+n*S+s*v+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=E*A,t[1]=(_*f*r-d*m*r-_*s*p+n*m*p+d*s*u-n*f*u)*A,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*u+n*c*u)*A,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*p-n*c*p)*A,t[4]=S*A,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*u+e*f*u)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*u-e*c*u)*A,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*A,t[8]=v*A,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*u-e*d*u)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*u+e*a*u)*A,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*p-e*a*p)*A,t[12]=P*A,t[13]=(h*_*s-g*d*s+g*n*f-e*_*f-h*n*m+e*d*m)*A,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*A,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,f=r*l,p=r*h,g=r*d,_=o*h,m=o*d,u=a*d,E=c*l,S=c*h,v=c*d,P=n.x,T=n.y,A=n.z;return s[0]=(1-(_+u))*P,s[1]=(p+v)*P,s[2]=(g-S)*P,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(f+u))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+S)*A,s[9]=(m-E)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=pi.set(s[0],s[1],s[2]).length();const o=pi.set(s[4],s[5],s[6]).length(),a=pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ge.copy(this);const l=1/r,h=1/o,d=1/a;return Ge.elements[0]*=l,Ge.elements[1]*=l,Ge.elements[2]*=l,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=d,Ge.elements[9]*=d,Ge.elements[10]*=d,e.setFromRotationMatrix(Ge),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===mn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===nr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mn){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*l,p=(n+s)*h;let g,_;if(a===mn)g=(o+r)*d,_=-2*d;else if(a===nr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const pi=new L,Ge=new ie,pu=new L(0,0,0),mu=new L(1,1,1),En=new L,ws=new L,Ie=new L,Wa=new ie,Xa=new si;class $e{constructor(t=0,e=0,n=0,s=$e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$e.DEFAULT_ORDER="XYZ";class da{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gu=0;const Ya=new L,mi=new si,hn=new ie,Es=new L,Zi=new L,_u=new L,vu=new si,qa=new L(1,0,0),Za=new L(0,1,0),$a=new L(0,0,1),Ka={type:"added"},xu={type:"removed"},gi={type:"childadded",child:null},Er={type:"childremoved",child:null};class xe extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new L,e=new $e,n=new si,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ht}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.multiply(mi),this}rotateOnWorldAxis(t,e){return mi.setFromAxisAngle(t,e),this.quaternion.premultiply(mi),this}rotateX(t){return this.rotateOnAxis(qa,t)}rotateY(t){return this.rotateOnAxis(Za,t)}rotateZ(t){return this.rotateOnAxis($a,t)}translateOnAxis(t,e){return Ya.copy(t).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qa,t)}translateY(t){return this.translateOnAxis(Za,t)}translateZ(t){return this.translateOnAxis($a,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Es.copy(t):Es.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Zi,Es,this.up):hn.lookAt(Es,Zi,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),mi.setFromRotationMatrix(hn),this.quaternion.premultiply(mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ka),gi.child=t,this.dispatchEvent(gi),gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xu),Er.child=t,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ka),gi.child=t,this.dispatchEvent(gi),gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,t,_u),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,vu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new L(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new L,un=new L,br=new L,dn=new L,_i=new L,vi=new L,ja=new L,Tr=new L,Ar=new L,Rr=new L,Cr=new ne,Pr=new ne,Lr=new ne;class Xe{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),We.subVectors(t,e),s.cross(We);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){We.subVectors(s,e),un.subVectors(n,e),br.subVectors(t,e);const o=We.dot(We),a=We.dot(un),c=We.dot(br),l=un.dot(un),h=un.dot(br),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,dn.x),c.addScaledVector(o,dn.y),c.addScaledVector(a,dn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Cr.setScalar(0),Pr.setScalar(0),Lr.setScalar(0),Cr.fromBufferAttribute(t,e),Pr.fromBufferAttribute(t,n),Lr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Cr,r.x),o.addScaledVector(Pr,r.y),o.addScaledVector(Lr,r.z),o}static isFrontFacing(t,e,n,s){return We.subVectors(n,e),un.subVectors(t,e),We.cross(un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),un.subVectors(this.a,this.b),We.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;_i.subVectors(s,n),vi.subVectors(r,n),Tr.subVectors(t,n);const c=_i.dot(Tr),l=vi.dot(Tr);if(c<=0&&l<=0)return e.copy(n);Ar.subVectors(t,s);const h=_i.dot(Ar),d=vi.dot(Ar);if(h>=0&&d<=h)return e.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(_i,o);Rr.subVectors(t,r);const p=_i.dot(Rr),g=vi.dot(Rr);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(vi,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return ja.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(ja,a);const u=1/(m+_+f);return o=_*u,a=f*u,e.copy(n).addScaledVector(_i,o).addScaledVector(vi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},bs={h:0,s:0,l:0};function Dr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=nu(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Dr(o,r,t+1/3),this.g=Dr(o,r,t),this.b=Dr(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Bl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return $t.fromWorkingColorSpace(Se.copy(this),t),Math.round(ve(Se.r*255,0,255))*65536+Math.round(ve(Se.g*255,0,255))*256+Math.round(ve(Se.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Se.copy(this),e);const n=Se.r,s=Se.g,r=Se.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Se.copy(this),e),t.r=Se.r,t.g=Se.g,t.b=Se.b,t}getStyle(t=Le){$t.fromWorkingColorSpace(Se.copy(this),t);const e=Se.r,n=Se.g,s=Se.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(bs);const n=mr(bn.h,bs.h,e),s=mr(bn.s,bs.s,e),r=mr(bn.l,bs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Se=new Yt;Yt.NAMES=Bl;let Mu=0;class fs extends ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Hi(),this.name="",this.blending=Ci,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=so,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class On extends fs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new L,Ts=new rt;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Na&&(t.usage=this.usage),t}}class zl extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hl extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yu=0;const ke=new ie,Ir=new xe,xi=new L,Ue=new ds,$i=new ds,_e=new L;class Be extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fl(t)?Hl:zl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Ir.lookAt(t),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(Ue.min,$i.min),Ue.expandByPoint(_e),_e.addVectors(Ue.max,$i.max),Ue.expandByPoint(_e)):(Ue.expandByPoint($i.min),Ue.expandByPoint($i.max))}Ue.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_e.fromBufferAttribute(a,l),c&&(xi.fromBufferAttribute(t,l),_e.add(xi)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;const l=new L,h=new L,d=new L,f=new rt,p=new rt,g=new rt,_=new L,m=new L;function u(I,w,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[I].add(_),a[w].add(_),a[M].add(_),c[I].add(m),c[w].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,w=E.length;I<w;++I){const M=E[I],C=M.start,H=M.count;for(let O=C,W=C+H;O<W;O+=3)u(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new L,v=new L,P=new L,T=new L;function A(I){P.fromBufferAttribute(s,I),T.copy(P);const w=a[I];S.copy(w),S.sub(P.multiplyScalar(P.dot(w))).normalize(),v.crossVectors(T,w);const C=v.dot(c[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,C)}for(let I=0,w=E.length;I<w;++I){const M=E[I],C=M.start,H=M.count;for(let O=C,W=C+H;O<W;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let u=0;u<h;u++)f[g++]=l[p++]}return new Ze(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Be,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ja=new ie,Gn=new ua,As=new ha,Qa=new L,Rs=new L,Cs=new L,Ps=new L,Ur=new L,Ls=new L,tc=new L,Ds=new L;class ut extends xe{constructor(t=new Be,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ls.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Ur.fromBufferAttribute(d,t),o?Ls.addScaledVector(Ur,h):Ls.addScaledVector(Ur.sub(e),h))}e.add(Ls)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(As.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(As,Qa)===null||Gn.origin.distanceToSquared(Qa)>(t.far-t.near)**2))&&(Ja.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(Ja),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=o[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,P=S;v<P;v+=3){const T=a.getX(v),A=a.getX(v+1),I=a.getX(v+2);s=Is(this,u,t,n,l,h,d,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const E=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=Is(this,o,t,n,l,h,d,E,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],u=o[m.materialIndex],E=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,P=S;v<P;v+=3){const T=v,A=v+1,I=v+2;s=Is(this,u,t,n,l,h,d,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const E=m,S=m+1,v=m+2;s=Is(this,o,t,n,l,h,d,E,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Su(i,t,e,n,s,r,o,a){let c;if(t.side===Te?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Fn,a),c===null)return null;Ds.copy(a),Ds.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ds);return l<e.near||l>e.far?null:{distance:l,point:Ds.clone(),object:i}}function Is(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Rs),i.getVertexPosition(c,Cs),i.getVertexPosition(l,Ps);const h=Su(i,t,e,n,Rs,Cs,Ps,tc);if(h){const d=new L;Xe.getBarycoord(tc,Rs,Cs,Ps,d),s&&(h.uv=Xe.getInterpolatedAttribute(s,a,c,l,d,new rt)),r&&(h.uv1=Xe.getInterpolatedAttribute(r,a,c,l,d,new rt)),o&&(h.normal=Xe.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};Xe.getNormal(Rs,Cs,Ps,f.normal),h.face=f,h.barycoord=d}return h}class Xt extends Be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(d,2));function g(_,m,u,E,S,v,P,T,A,I,w){const M=v/A,C=P/I,H=v/2,O=P/2,W=T/2,q=A+1,k=I+1;let X=0,D=0;const B=new L;for(let $=0;$<k;$++){const nt=$*C-O;for(let St=0;St<q;St++){const Ft=St*M-H;B[_]=Ft*E,B[m]=nt*S,B[u]=W,l.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[u]=T>0?1:-1,h.push(B.x,B.y,B.z),d.push(St/A),d.push(1-$/I),X+=1}}for(let $=0;$<I;$++)for(let nt=0;nt<A;nt++){const St=f+nt+q*$,Ft=f+nt+q*($+1),Z=f+(nt+1)+q*($+1),et=f+(nt+1)+q*$;c.push(St,Ft,et),c.push(Ft,Z,et),D+=6}a.addGroup(p,D,w),p+=D,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ee(i){const t={};for(let e=0;e<i.length;e++){const n=Bi(i[e]);for(const s in n)t[s]=n[s]}return t}function wu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Eu={clone:Bi,merge:Ee};var bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends fs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bu,this.fragmentShader=Tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=wu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gl extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new L,ec=new rt,nc=new rt;class Fe extends Gl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,ec,nc),e.subVectors(nc,ec)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,yi=1;class Au extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fe(Mi,yi,t,e);s.layers=this.layers,this.add(s);const r=new Fe(Mi,yi,t,e);r.layers=this.layers,this.add(r);const o=new Fe(Mi,yi,t,e);o.layers=this.layers,this.add(o);const a=new Fe(Mi,yi,t,e);a.layers=this.layers,this.add(a);const c=new Fe(Mi,yi,t,e);c.layers=this.layers,this.add(c);const l=new Fe(Mi,yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wl extends Ae{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ni,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ru extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xt(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Ln});r.uniforms.tEquirect.value=e;const o=new ut(s,r),a=e.minFilter;return e.minFilter===Qn&&(e.minFilter=nn),new Au(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Nr=new L,Cu=new L,Pu=new Ht;class Rn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Nr.subVectors(n,e).cross(Cu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Nr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pu.getNormalMatrix(t),s=this.coplanarPoint(Nr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new ha,Us=new L;class fa{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],u=s[12],E=s[13],S=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-p,v-u).normalize(),n[1].setComponents(c+r,f+l,m+p,v+u).normalize(),n[2].setComponents(c+o,f+h,m+g,v+E).normalize(),n[3].setComponents(c-o,f-h,m-g,v-E).normalize(),n[4].setComponents(c-a,f-d,m-_,v-S).normalize(),e===mn)n[5].setComponents(c+a,f+d,m+_,v+S).normalize();else if(e===nr)n[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Us.x=s.normal.x>0?t.max.x:t.min.x,Us.y=s.normal.y>0?t.max.y:t.min.y,Us.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lu(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class In extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let u=0;u<h;u++){const E=u*f-o;for(let S=0;S<l;S++){const v=S*d-r;g.push(v,-E,0),_.push(0,0,1),m.push(S/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<a;E++){const S=E+l*u,v=E+l*(u+1),P=E+1+l*(u+1),T=E+1+l*u;p.push(S,v,T),p.push(v,P,T)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.width,t.height,t.widthSegments,t.heightSegments)}}var Du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iu=`#ifdef USE_ALPHAHASH
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
#endif`,Uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ku=`#ifdef USE_AOMAP
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
#endif`,Bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zu=`#ifdef USE_BATCHING
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
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
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
#endif`,Yu=`#ifdef USE_BUMPMAP
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ed=`#define PI 3.141592653589793
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
} // validated`,nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,id=`vec3 transformedNormal = objectNormal;
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
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ld=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dd=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,Md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wd=`uniform bool receiveShadow;
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
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cd=`PhysicalMaterial material;
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
#endif`,Pd=`struct PhysicalMaterial {
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
}`,Ld=`
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hd=`#if defined( USE_POINTS_UV )
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
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
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
#endif`,ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_f=`float getShadowMask() {
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
}`,vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
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
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,Sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,If=`uniform sampler2D t2D;
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`#include <common>
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
}`,Bf=`#if DEPTH_PACKING == 3200
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
}`,zf=`#define DISTANCE
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
}`,Hf=`#define DISTANCE
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
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,qf=`uniform vec3 diffuse;
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
}`,Zf=`#define LAMBERT
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
}`,$f=`#define LAMBERT
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
}`,Kf=`#define MATCAP
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
}`,jf=`#define MATCAP
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
}`,Jf=`#define NORMAL
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
}`,Qf=`#define NORMAL
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
}`,tp=`#define PHONG
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
}`,ep=`#define PHONG
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
}`,np=`#define STANDARD
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
}`,ip=`#define STANDARD
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
}`,sp=`#define TOON
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
}`,rp=`#define TOON
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
}`,op=`uniform float size;
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
}`,ap=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,lp=`uniform vec3 color;
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
}`,hp=`uniform float rotation;
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
}`,up=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:Du,alphahash_pars_fragment:Iu,alphamap_fragment:Uu,alphamap_pars_fragment:Nu,alphatest_fragment:Fu,alphatest_pars_fragment:Ou,aomap_fragment:ku,aomap_pars_fragment:Bu,batching_pars_vertex:zu,batching_vertex:Hu,begin_vertex:Vu,beginnormal_vertex:Gu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:qu,clipping_planes_pars_fragment:Zu,clipping_planes_pars_vertex:$u,clipping_planes_vertex:Ku,color_fragment:ju,color_pars_fragment:Ju,color_pars_vertex:Qu,color_vertex:td,common:ed,cube_uv_reflection_fragment:nd,defaultnormal_vertex:id,displacementmap_pars_vertex:sd,displacementmap_vertex:rd,emissivemap_fragment:od,emissivemap_pars_fragment:ad,colorspace_fragment:cd,colorspace_pars_fragment:ld,envmap_fragment:hd,envmap_common_pars_fragment:ud,envmap_pars_fragment:dd,envmap_pars_vertex:fd,envmap_physical_pars_fragment:Ed,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:_d,fog_pars_fragment:vd,gradientmap_pars_fragment:xd,lightmap_pars_fragment:Md,lights_lambert_fragment:yd,lights_lambert_pars_fragment:Sd,lights_pars_begin:wd,lights_toon_fragment:bd,lights_toon_pars_fragment:Td,lights_phong_fragment:Ad,lights_phong_pars_fragment:Rd,lights_physical_fragment:Cd,lights_physical_pars_fragment:Pd,lights_fragment_begin:Ld,lights_fragment_maps:Dd,lights_fragment_end:Id,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Nd,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Od,map_fragment:kd,map_pars_fragment:Bd,map_particle_fragment:zd,map_particle_pars_fragment:Hd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:Gd,morphinstance_vertex:Wd,morphcolor_vertex:Xd,morphnormal_vertex:Yd,morphtarget_pars_vertex:qd,morphtarget_vertex:Zd,normal_fragment_begin:$d,normal_fragment_maps:Kd,normal_pars_fragment:jd,normal_pars_vertex:Jd,normal_vertex:Qd,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:ef,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:sf,iridescence_pars_fragment:rf,opaque_fragment:of,packing:af,premultiplied_alpha_fragment:cf,project_vertex:lf,dithering_fragment:hf,dithering_pars_fragment:uf,roughnessmap_fragment:df,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:_f,skinbase_vertex:vf,skinning_pars_vertex:xf,skinning_vertex:Mf,skinnormal_vertex:yf,specularmap_fragment:Sf,specularmap_pars_fragment:wf,tonemapping_fragment:Ef,tonemapping_pars_fragment:bf,transmission_fragment:Tf,transmission_pars_fragment:Af,uv_pars_fragment:Rf,uv_pars_vertex:Cf,uv_vertex:Pf,worldpos_vertex:Lf,background_vert:Df,background_frag:If,backgroundCube_vert:Uf,backgroundCube_frag:Nf,cube_vert:Ff,cube_frag:Of,depth_vert:kf,depth_frag:Bf,distanceRGBA_vert:zf,distanceRGBA_frag:Hf,equirect_vert:Vf,equirect_frag:Gf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:Yf,meshbasic_frag:qf,meshlambert_vert:Zf,meshlambert_frag:$f,meshmatcap_vert:Kf,meshmatcap_frag:jf,meshnormal_vert:Jf,meshnormal_frag:Qf,meshphong_vert:tp,meshphong_frag:ep,meshphysical_vert:np,meshphysical_frag:ip,meshtoon_vert:sp,meshtoon_frag:rp,points_vert:op,points_frag:ap,shadow_vert:cp,shadow_frag:lp,sprite_vert:hp,sprite_frag:up},dt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Qe={basic:{uniforms:Ee([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ee([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ee([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ee([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ee([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ee([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ee([dt.points,dt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ee([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ee([dt.common,dt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ee([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ee([dt.sprite,dt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ee([dt.common,dt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ee([dt.lights,dt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Qe.physical={uniforms:Ee([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Ns={r:0,b:0,g:0},Xn=new $e,dp=new ie;function fp(i,t,e,n,s,r,o){const a=new Yt(0);let c=r===!0?0:1,l,h,d=null,f=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function _(E){let S=!1;const v=g(E);v===null?u(a,c):v&&v.isColor&&(u(v,1),S=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===ar)?(h===void 0&&(h=new ut(new Xt(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Bi(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Xn.copy(S.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(Xn)),h.material.toneMapped=$t.getTransfer(v.colorSpace)!==te,(d!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ut(new In(2,2),new kn({name:"BackgroundMaterial",uniforms:Bi(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=$t.getTransfer(v.colorSpace)!==te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,S){E.getRGB(Ns,Vl(i)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),c=S,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(a,c)},render:_,addToRenderList:m}}function pp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,C,H,O,W){let q=!1;const k=d(O,H,C);r!==k&&(r=k,l(r.object)),q=p(M,O,H,W),q&&g(M,O,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(M,C,H,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,C,H){const O=H.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let q=W[C.id];q===void 0&&(q={},W[C.id]=q);let k=q[O];return k===void 0&&(k=f(c()),q[O]=k),k}function f(M){const C=[],H=[],O=[];for(let W=0;W<e;W++)C[W]=0,H[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:O,object:M,attributes:{},index:null}}function p(M,C,H,O){const W=r.attributes,q=C.attributes;let k=0;const X=H.getAttributes();for(const D in X)if(X[D].location>=0){const $=W[D];let nt=q[D];if(nt===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),$===void 0||$.attribute!==nt||nt&&$.data!==nt.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function g(M,C,H,O){const W={},q=C.attributes;let k=0;const X=H.getAttributes();for(const D in X)if(X[D].location>=0){let $=q[D];$===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&($=M.instanceColor));const nt={};nt.attribute=$,$&&$.data&&(nt.data=$.data),W[D]=nt,k++}r.attributes=W,r.attributesNum=k,r.index=O}function _(){const M=r.newAttributes;for(let C=0,H=M.length;C<H;C++)M[C]=0}function m(M){u(M,0)}function u(M,C){const H=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;H[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),W[M]!==C&&(i.vertexAttribDivisor(M,C),W[M]=C)}function E(){const M=r.newAttributes,C=r.enabledAttributes;for(let H=0,O=C.length;H<O;H++)C[H]!==M[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function S(M,C,H,O,W,q,k){k===!0?i.vertexAttribIPointer(M,C,H,W,q):i.vertexAttribPointer(M,C,H,O,W,q)}function v(M,C,H,O){_();const W=O.attributes,q=H.getAttributes(),k=C.defaultAttributeValues;for(const X in q){const D=q[X];if(D.location>=0){let B=W[X];if(B===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(B=M.instanceColor)),B!==void 0){const $=B.normalized,nt=B.itemSize,St=t.get(B);if(St===void 0)continue;const Ft=St.buffer,Z=St.type,et=St.bytesPerElement,vt=Z===i.INT||Z===i.UNSIGNED_INT||B.gpuType===sa;if(B.isInterleavedBufferAttribute){const at=B.data,Ct=at.stride,Dt=B.offset;if(at.isInstancedInterleavedBuffer){for(let It=0;It<D.locationSize;It++)u(D.location+It,at.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let It=0;It<D.locationSize;It++)m(D.location+It);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let It=0;It<D.locationSize;It++)S(D.location+It,nt/D.locationSize,Z,$,Ct*et,(Dt+nt/D.locationSize*It)*et,vt)}else{if(B.isInstancedBufferAttribute){for(let at=0;at<D.locationSize;at++)u(D.location+at,B.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let at=0;at<D.locationSize;at++)m(D.location+at);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let at=0;at<D.locationSize;at++)S(D.location+at,nt/D.locationSize,Z,$,nt*et,nt/D.locationSize*at*et,vt)}}else if(k!==void 0){const $=k[X];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(D.location,$);break;case 3:i.vertexAttrib3fv(D.location,$);break;case 4:i.vertexAttrib4fv(D.location,$);break;default:i.vertexAttrib1fv(D.location,$)}}}}E()}function P(){I();for(const M in n){const C=n[M];for(const H in C){const O=C[H];for(const W in O)h(O[W].object),delete O[W];delete C[H]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const H in C){const O=C[H];for(const W in O)h(O[W].object),delete O[W];delete C[H]}delete n[M.id]}function A(M){for(const C in n){const H=n[C];if(H[M.id]===void 0)continue;const O=H[M.id];for(const W in O)h(O[W].object),delete O[W];delete H[M.id]}}function I(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function mp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Ye&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==_n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pn&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:P,maxSamples:T}}function _p(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Rn,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,S=E*4;let v=u.clippingState||null;c.value=v,v=h(g,f,S,p);for(let P=0;P!==S;++P)v[P]=e[P];u.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const u=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,v=p;S!==_;++S,v+=4)o.copy(d[S]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function vp(i){let t=new WeakMap;function e(o,a){return a===fo?o.mapping=Ni:a===po&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fo||a===po)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ru(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Yl extends Gl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ti=4,ic=[.125,.215,.35,.446,.526,.582],Kn=20,Fr=new Yl,sc=new Yt;let Or=null,kr=0,Br=0,zr=!1;const qn=(1+Math.sqrt(5))/2,Si=1/qn,rc=[new L(-qn,Si,0),new L(qn,Si,0),new L(-Si,0,qn),new L(Si,0,qn),new L(0,qn,-Si),new L(0,qn,Si),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Go{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Or=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Or,kr,Br),this._renderer.xr.enabled=zr,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Or=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:us,format:Ye,colorSpace:oi,depthBuffer:!1},s=oc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xp(r)),this._blurMaterial=Mp(r,t,e)}return s}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Fr)}_sceneToCubeUV(t,e,n,s){const a=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(sc),h.toneMapping=Dn,h.autoClear=!1;const p=new On({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new ut(new Xt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(sc),_=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):E===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const S=this._cubeSize;Fs(s,E*S,u>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ni||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Fs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rc[(s-r-1)%rc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ut(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const u=[];let E=0;for(let A=0;A<Kn;++A){const I=A/_,w=Math.exp(-I*I/2);u.push(w),A===0?E+=w:A<m&&(E+=2*w)}for(let A=0;A<u.length;A++)u[A]=u[A]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const v=this._sizeLods[s],P=3*v*(s>S-Ti?s-S+Ti:0),T=4*(this._cubeSize-v);Fs(e,P,T,3*v,2*v),c.setRenderTarget(e),c.render(d,Fr)}}function xp(i){const t=[],e=[],n=[];let s=i;const r=i-Ti+1+ic.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ti?c=ic[o-i+Ti-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,u=1,E=new Float32Array(_*g*p),S=new Float32Array(m*g*p),v=new Float32Array(u*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,I=T>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];E.set(w,_*g*T),S.set(f,m*g*T);const M=[T,T,T,T,T,T];v.set(M,u*g*T)}const P=new Be;P.setAttribute("position",new Ze(E,_)),P.setAttribute("uv",new Ze(S,m)),P.setAttribute("faceIndex",new Ze(v,u)),t.push(P),s>Ti&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oc(i,t,e){const n=new ii(i,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mp(i,t,e){const n=new Float32Array(Kn),s=new L(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ac(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function cc(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function pa(){return`

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
	`}function yp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===fo||c===po,h=c===Ni||c===Fi;if(l||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Go(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Go(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Sp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ji("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wp(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,u=_.length;m<u;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let S=0,v=E.length;S<v;S+=3){const P=E[S+0],T=E[S+1],A=E[S+2];f.push(P,T,T,A,A,P)}}else if(g!==void 0){const E=g.array;_=g.version;for(let S=0,v=E.length/3-1;S<v;S+=3){const P=S+0,T=S+1,A=S+2;f.push(P,T,T,A,A,P)}}else return;const m=new(Fl(f)?Hl:zl)(f,1);m.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Ep(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function d(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let u=0;for(let E=0;E<g;E++)u+=p[E]*_[E];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function bp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tp(i,t,e){const n=new WeakMap,s=new ne;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*T*4*d),I=new kl(A,P,T,d);I.type=pn,I.needsUpdate=!0;const w=v*4;for(let C=0;C<d;C++){const H=u[C],O=E[C],W=S[C],q=P*T*4*C;for(let k=0;k<H.count;k++){const X=k*w;g===!0&&(s.fromBufferAttribute(H,k),A[q+X+0]=s.x,A[q+X+1]=s.y,A[q+X+2]=s.z,A[q+X+3]=0),_===!0&&(s.fromBufferAttribute(O,k),A[q+X+4]=s.x,A[q+X+5]=s.y,A[q+X+6]=s.z,A[q+X+7]=0),m===!0&&(s.fromBufferAttribute(W,k),A[q+X+8]=s.x,A[q+X+9]=s.y,A[q+X+10]=s.z,A[q+X+11]=W.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new rt(P,T)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ap(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class ql extends Ae{constructor(t,e,n,s,r,o,a,c,l,h=Pi){if(h!==Pi&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pi&&(n=ni),n===void 0&&h===ki&&(n=Oi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zl=new Ae,lc=new ql(1,1),$l=new kl,Kl=new du,jl=new Wl,hc=[],uc=[],dc=new Float32Array(16),fc=new Float32Array(9),pc=new Float32Array(4);function Vi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=hc[s];if(r===void 0&&(r=new Float32Array(s),hc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lr(i,t){let e=uc[t];e===void 0&&(e=new Int32Array(t),uc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function Lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Dp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;pc.set(n),i.uniformMatrix2fv(this.addr,!1,pc),ge(e,n)}}function Ip(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;fc.set(n),i.uniformMatrix3fv(this.addr,!1,fc),ge(e,n)}}function Up(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;dc.set(n),i.uniformMatrix4fv(this.addr,!1,dc),ge(e,n)}}function Np(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function Bp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function Vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lc.compareFunction=Nl,r=lc):r=Zl,e.setTexture2D(t||r,s)}function Wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kl,s)}function Xp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jl,s)}function Yp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$l,s)}function qp(i){switch(i){case 5126:return Rp;case 35664:return Cp;case 35665:return Pp;case 35666:return Lp;case 35674:return Dp;case 35675:return Ip;case 35676:return Up;case 5124:case 35670:return Np;case 35667:case 35671:return Fp;case 35668:case 35672:return Op;case 35669:case 35673:return kp;case 5125:return Bp;case 36294:return zp;case 36295:return Hp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return Yp}}function Zp(i,t){i.uniform1fv(this.addr,t)}function $p(i,t){const e=Vi(t,this.size,2);i.uniform2fv(this.addr,e)}function Kp(i,t){const e=Vi(t,this.size,3);i.uniform3fv(this.addr,e)}function jp(i,t){const e=Vi(t,this.size,4);i.uniform4fv(this.addr,e)}function Jp(i,t){const e=Vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qp(i,t){const e=Vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tm(i,t){const e=Vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function em(i,t){i.uniform1iv(this.addr,t)}function nm(i,t){i.uniform2iv(this.addr,t)}function im(i,t){i.uniform3iv(this.addr,t)}function sm(i,t){i.uniform4iv(this.addr,t)}function rm(i,t){i.uniform1uiv(this.addr,t)}function om(i,t){i.uniform2uiv(this.addr,t)}function am(i,t){i.uniform3uiv(this.addr,t)}function cm(i,t){i.uniform4uiv(this.addr,t)}function lm(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zl,r[o])}function hm(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Kl,r[o])}function um(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jl,r[o])}function dm(i,t,e){const n=this.cache,s=t.length,r=lr(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$l,r[o])}function fm(i){switch(i){case 5126:return Zp;case 35664:return $p;case 35665:return Kp;case 35666:return jp;case 35674:return Jp;case 35675:return Qp;case 35676:return tm;case 5124:case 35670:return em;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return om;case 36295:return am;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}class pm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qp(e.type)}}class mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fm(e.type)}}class gm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Hr=/(\w+)(\])?(\[|\.)?/g;function mc(i,t){i.seq.push(t),i.map[t.id]=t}function _m(i,t,e){const n=i.name,s=n.length;for(Hr.lastIndex=0;;){const r=Hr.exec(n),o=Hr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){mc(e,l===void 0?new pm(a,i,t):new mm(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new gm(a),mc(e,d)),e=d}}}class Js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);_m(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function gc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const vm=37297;let xm=0;function Mm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const _c=new Ht;function ym(i){$t._getMatrix(_c,$t.workingColorSpace,i);const t=`mat3( ${_c.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case cr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function vc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mm(i.getShaderSource(t),o)}else return s}function Sm(i,t){const e=ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wm(i,t){let e;switch(t){case Bh:e="Linear";break;case zh:e="Reinhard";break;case Hh:e="Cineon";break;case Sl:e="ACESFilmic";break;case Gh:e="AgX";break;case Wh:e="Neutral";break;case Vh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Os=new L;function Em(){$t.getLuminanceCoefficients(Os);const i=Os.x.toFixed(4),t=Os.y.toFixed(4),e=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Tm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Am(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Qi(i){return i!==""}function xc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(i){return i.replace(Rm,Pm)}const Cm=new Map;function Pm(i,t){let e=Wt[t];if(e===void 0){const n=Cm.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Wo(e)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(i){return i.replace(Lm,Dm)}function Dm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Im(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ia?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ml?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Um(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function Fm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yl:t="ENVMAP_BLENDING_MULTIPLY";break;case Oh:t="ENVMAP_BLENDING_MIX";break;case kh:t="ENVMAP_BLENDING_ADD";break}return t}function Om(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function km(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Im(e),l=Um(e),h=Nm(e),d=Fm(e),f=Om(e),p=bm(e),g=Tm(r),_=s.createProgram();let m,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),u.length>0&&(u+=`
`)):(m=[Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),u=[Sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?wm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,Sm("linearToOutputTexel",e.outputColorSpace),Em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),o=Wo(o),o=xc(o,e),o=Mc(o,e),a=Wo(a),a=xc(a,e),a=Mc(a,e),o=yc(o),a=yc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=E+m+o,v=E+u+a,P=gc(s,s.VERTEX_SHADER,S),T=gc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,P),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(P).trim(),W=s.getShaderInfoLog(T).trim();let q=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,T);else{const X=vc(s,P,"vertex"),D=vc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+X+`
`+D)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||W==="")&&(k=!1);k&&(C.diagnostics={runnable:q,programLog:H,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:u}})}s.deleteShader(P),s.deleteShader(T),I=new Js(s,_),w=Am(s,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,vm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}let Bm=0;class zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hm(t),e.set(t,n)),n}}class Hm{constructor(t){this.id=Bm++,this.code=t,this.usedTimes=0}}function Vm(i,t,e,n,s,r,o){const a=new da,c=new zm,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,C,H,O){const W=H.fog,q=O.geometry,k=w.isMeshStandardMaterial?H.environment:null,X=(w.isMeshStandardMaterial?e:t).get(w.envMap||k),D=X&&X.mapping===ar?X.image.height:null,B=g[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const $=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nt=$!==void 0?$.length:0;let St=0;q.morphAttributes.position!==void 0&&(St=1),q.morphAttributes.normal!==void 0&&(St=2),q.morphAttributes.color!==void 0&&(St=3);let Ft,Z,et,vt;if(B){const Qt=Qe[B];Ft=Qt.vertexShader,Z=Qt.fragmentShader}else Ft=w.vertexShader,Z=w.fragmentShader,c.update(w),et=c.getVertexShaderID(w),vt=c.getFragmentShaderID(w);const at=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Dt=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,Vt=!!w.map,J=!!w.matcap,it=!!X,R=!!w.aoMap,Pt=!!w.lightMap,st=!!w.bumpMap,yt=!!w.normalMap,lt=!!w.displacementMap,Ut=!!w.emissiveMap,xt=!!w.metalnessMap,b=!!w.roughnessMap,x=w.anisotropy>0,z=w.clearcoat>0,K=w.dispersion>0,tt=w.iridescence>0,j=w.sheen>0,bt=w.transmission>0,ft=x&&!!w.anisotropyMap,Mt=z&&!!w.clearcoatMap,qt=z&&!!w.clearcoatNormalMap,ot=z&&!!w.clearcoatRoughnessMap,wt=tt&&!!w.iridescenceMap,Nt=tt&&!!w.iridescenceThicknessMap,Ot=j&&!!w.sheenColorMap,Et=j&&!!w.sheenRoughnessMap,Zt=!!w.specularMap,Gt=!!w.specularColorMap,se=!!w.specularIntensityMap,U=bt&&!!w.transmissionMap,pt=bt&&!!w.thicknessMap,Y=!!w.gradientMap,Q=!!w.alphaMap,_t=w.alphaTest>0,mt=!!w.alphaHash,Bt=!!w.extensions;let he=Dn;w.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(he=i.toneMapping);const Me={shaderID:B,shaderType:w.type,shaderName:w.name,vertexShader:Ft,fragmentShader:Z,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&O.instanceColor!==null,instancingMorph:Dt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:oi,alphaToCoverage:!!w.alphaToCoverage,map:Vt,matcap:J,envMap:it,envMapMode:it&&X.mapping,envMapCubeUVHeight:D,aoMap:R,lightMap:Pt,bumpMap:st,normalMap:yt,displacementMap:f&&lt,emissiveMap:Ut,normalMapObjectSpace:yt&&w.normalMapType===Zh,normalMapTangentSpace:yt&&w.normalMapType===Ul,metalnessMap:xt,roughnessMap:b,anisotropy:x,anisotropyMap:ft,clearcoat:z,clearcoatMap:Mt,clearcoatNormalMap:qt,clearcoatRoughnessMap:ot,dispersion:K,iridescence:tt,iridescenceMap:wt,iridescenceThicknessMap:Nt,sheen:j,sheenColorMap:Ot,sheenRoughnessMap:Et,specularMap:Zt,specularColorMap:Gt,specularIntensityMap:se,transmission:bt,transmissionMap:U,thicknessMap:pt,gradientMap:Y,opaque:w.transparent===!1&&w.blending===Ci&&w.alphaToCoverage===!1,alphaMap:Q,alphaTest:_t,alphaHash:mt,combine:w.combine,mapUv:Vt&&_(w.map.channel),aoMapUv:R&&_(w.aoMap.channel),lightMapUv:Pt&&_(w.lightMap.channel),bumpMapUv:st&&_(w.bumpMap.channel),normalMapUv:yt&&_(w.normalMap.channel),displacementMapUv:lt&&_(w.displacementMap.channel),emissiveMapUv:Ut&&_(w.emissiveMap.channel),metalnessMapUv:xt&&_(w.metalnessMap.channel),roughnessMapUv:b&&_(w.roughnessMap.channel),anisotropyMapUv:ft&&_(w.anisotropyMap.channel),clearcoatMapUv:Mt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(w.sheenRoughnessMap.channel),specularMapUv:Zt&&_(w.specularMap.channel),specularColorMapUv:Gt&&_(w.specularColorMap.channel),specularIntensityMapUv:se&&_(w.specularIntensityMap.channel),transmissionMapUv:U&&_(w.transmissionMap.channel),thicknessMapUv:pt&&_(w.thicknessMap.channel),alphaMapUv:Q&&_(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(yt||x),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(Vt||Q),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:St,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:Vt&&w.map.isVideoTexture===!0&&$t.getTransfer(w.map.colorSpace)===te,decodeVideoTextureEmissive:Ut&&w.emissiveMap.isVideoTexture===!0&&$t.getTransfer(w.emissiveMap.colorSpace)===te,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===tn,flipSided:w.side===Te,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function u(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const C in w.defines)M.push(C),M.push(w.defines[C]);return w.isRawShaderMaterial===!1&&(E(M,w),S(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const M=g[w.type];let C;if(M){const H=Qe[M];C=Eu.clone(H.uniforms)}else C=w.uniforms;return C}function P(w,M){let C;for(let H=0,O=h.length;H<O;H++){const W=h[H];if(W.cacheKey===M){C=W,++C.usedTimes;break}}return C===void 0&&(C=new km(i,M,w,r),h.push(C)),C}function T(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){c.remove(w)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:I}}function Gm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Wm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ec(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,p,g,_,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),t++,u}function a(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function c(d,f,p,g,_,m){const u=o(d,f,p,g,_,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||Wm),n.length>1&&n.sort(f||wc),s.length>1&&s.sort(f||wc)}function h(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Xm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ec,i.set(n,[o])):s>=r.length?(o=new Ec,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Yt};break;case"SpotLight":e={position:new L,direction:new L,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Zm=0;function $m(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Km(i){const t=new Ym,e=qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new ie,o=new ie;function a(l){let h=0,d=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,E=0,S=0,v=0,P=0,T=0,A=0;l.sort($m);for(let w=0,M=l.length;w<M;w++){const C=l[w],H=C.color,O=C.intensity,W=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*O,d+=H.g*O,f+=H.b*O;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],O);A++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,D=e.get(C);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,n.directionalShadow[p]=D,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=k,p++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(H).multiplyScalar(O),k.distance=W,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[_]=k;const X=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,X.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=X.matrix,C.castShadow){const D=e.get(C);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,n.spotShadow[_]=D,n.spotShadowMap[_]=q,v++}_++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(H).multiplyScalar(O),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const X=C.shadow,D=e.get(C);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,D.shadowCameraNear=X.camera.near,D.shadowCameraFar=X.camera.far,n.pointShadow[g]=D,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=k,g++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(O),k.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[u]=k,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==u||I.numDirectionalShadows!==E||I.numPointShadows!==S||I.numSpotShadows!==v||I.numSpotMaps!==P||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=u,I.numDirectionalShadows=E,I.numPointShadows=S,I.numSpotShadows=v,I.numSpotMaps=P,I.numLightProbes=A,n.version=Zm++)}function c(l,h){let d=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){const S=l[u];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function bc(i){const t=new Km(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function jm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new bc(i),t.set(s,[a])):r>=o.length?(a=new bc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Jm extends fs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qm extends fs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
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
}`;function n0(i,t,e){let n=new fa;const s=new rt,r=new rt,o=new ne,a=new Jm({depthPacking:qh}),c=new Qm,l={},h=e.maxTextureSize,d={[Fn]:Te,[Te]:Fn,[tn]:tn},f=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:t0,fragmentShader:e0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Be;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ia;let u=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Ln),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const O=u!==fn&&this.type===fn,W=u===fn&&this.type!==fn;for(let q=0,k=T.length;q<k;q++){const X=T[q],D=X.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const B=D.getFrameExtents();if(s.multiply(B),r.copy(D.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,D.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,D.mapSize.y=r.y)),D.map===null||O===!0||W===!0){const nt=this.type!==fn?{minFilter:qe,magFilter:qe}:{};D.map!==null&&D.map.dispose(),D.map=new ii(s.x,s.y,nt),D.map.texture.name=X.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const $=D.getViewportCount();for(let nt=0;nt<$;nt++){const St=D.getViewport(nt);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),H.viewport(o),D.updateMatrices(X,nt),n=D.getFrustum(),v(A,I,D.camera,X,this.type)}D.isPointLightShadow!==!0&&this.type===fn&&E(D,I),D.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,C)};function E(T,A){const I=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ii(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,p,_,null)}function S(T,A,I,w){let M=null;const C=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=I.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=M.uuid,O=A.uuid;let W=l[H];W===void 0&&(W={},l[H]=W);let q=W[O];q===void 0&&(q=M.clone(),W[O]=q,A.addEventListener("dispose",P)),M=q}if(M.visible=A.visible,M.wireframe=A.wireframe,w===fn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=I}return M}function v(T,A,I,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const O=t.update(T),W=T.material;if(Array.isArray(W)){const q=O.groups;for(let k=0,X=q.length;k<X;k++){const D=q[k],B=W[D.materialIndex];if(B&&B.visible){const $=S(T,B,w,M);T.onBeforeShadow(i,T,A,I,O,$,D),i.renderBufferDirect(I,null,O,$,T,D),T.onAfterShadow(i,T,A,I,O,$,D)}}}else if(W.visible){const q=S(T,W,w,M);T.onBeforeShadow(i,T,A,I,O,q,null),i.renderBufferDirect(I,null,O,q,T,null),T.onAfterShadow(i,T,A,I,O,q,null)}}const H=T.children;for(let O=0,W=H.length;O<W;O++)v(H[O],A,I,w,M)}function P(T){T.target.removeEventListener("dispose",P);for(const I in l){const w=l[I],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const i0={[ro]:oo,[ao]:ho,[co]:uo,[Ui]:lo,[oo]:ro,[ho]:ao,[uo]:co,[lo]:Ui};function s0(i,t){function e(){let U=!1;const pt=new ne;let Y=null;const Q=new ne(0,0,0,0);return{setMask:function(_t){Y!==_t&&!U&&(i.colorMask(_t,_t,_t,_t),Y=_t)},setLocked:function(_t){U=_t},setClear:function(_t,mt,Bt,he,Me){Me===!0&&(_t*=he,mt*=he,Bt*=he),pt.set(_t,mt,Bt,he),Q.equals(pt)===!1&&(i.clearColor(_t,mt,Bt,he),Q.copy(pt))},reset:function(){U=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,pt=!1,Y=null,Q=null,_t=null;return{setReversed:function(mt){if(pt!==mt){const Bt=t.get("EXT_clip_control");pt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const he=_t;_t=null,this.setClear(he)}pt=mt},getReversed:function(){return pt},setTest:function(mt){mt?at(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(mt){Y!==mt&&!U&&(i.depthMask(mt),Y=mt)},setFunc:function(mt){if(pt&&(mt=i0[mt]),Q!==mt){switch(mt){case ro:i.depthFunc(i.NEVER);break;case oo:i.depthFunc(i.ALWAYS);break;case ao:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case co:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case ho:i.depthFunc(i.GREATER);break;case uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=mt}},setLocked:function(mt){U=mt},setClear:function(mt){_t!==mt&&(pt&&(mt=1-mt),i.clearDepth(mt),_t=mt)},reset:function(){U=!1,Y=null,Q=null,_t=null,pt=!1}}}function s(){let U=!1,pt=null,Y=null,Q=null,_t=null,mt=null,Bt=null,he=null,Me=null;return{setTest:function(Qt){U||(Qt?at(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(Qt){pt!==Qt&&!U&&(i.stencilMask(Qt),pt=Qt)},setFunc:function(Qt,ze,on){(Y!==Qt||Q!==ze||_t!==on)&&(i.stencilFunc(Qt,ze,on),Y=Qt,Q=ze,_t=on)},setOp:function(Qt,ze,on){(mt!==Qt||Bt!==ze||he!==on)&&(i.stencilOp(Qt,ze,on),mt=Qt,Bt=ze,he=on)},setLocked:function(Qt){U=Qt},setClear:function(Qt){Me!==Qt&&(i.clearStencil(Qt),Me=Qt)},reset:function(){U=!1,pt=null,Y=null,Q=null,_t=null,mt=null,Bt=null,he=null,Me=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,E=null,S=null,v=null,P=null,T=null,A=new Yt(0,0,0),I=0,w=!1,M=null,C=null,H=null,O=null,W=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(D)[1]),k=X>=1):D.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),k=X>=2);let B=null,$={};const nt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Ft=new ne().fromArray(nt),Z=new ne().fromArray(St);function et(U,pt,Y,Q){const _t=new Uint8Array(4),mt=i.createTexture();i.bindTexture(U,mt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<Y;Bt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(pt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return mt}const vt={};vt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(Ui),st(!1),yt(Pa),at(i.CULL_FACE),R(Ln);function at(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ct(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Dt(U,pt){return d[U]!==pt?(i.bindFramebuffer(U,pt),d[U]=pt,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pt),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function It(U,pt){let Y=p,Q=!1;if(U){Y=f.get(pt),Y===void 0&&(Y=[],f.set(pt,Y));const _t=U.textures;if(Y.length!==_t.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Bt=_t.length;mt<Bt;mt++)Y[mt]=i.COLOR_ATTACHMENT0+mt;Y.length=_t.length,Q=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Y)}function Vt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const J={[$n]:i.FUNC_ADD,[Mh]:i.FUNC_SUBTRACT,[yh]:i.FUNC_REVERSE_SUBTRACT};J[Sh]=i.MIN,J[wh]=i.MAX;const it={[Eh]:i.ZERO,[bh]:i.ONE,[Th]:i.SRC_COLOR,[io]:i.SRC_ALPHA,[Dh]:i.SRC_ALPHA_SATURATE,[Ph]:i.DST_COLOR,[Rh]:i.DST_ALPHA,[Ah]:i.ONE_MINUS_SRC_COLOR,[so]:i.ONE_MINUS_SRC_ALPHA,[Lh]:i.ONE_MINUS_DST_COLOR,[Ch]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Uh]:i.ONE_MINUS_CONSTANT_COLOR,[Nh]:i.CONSTANT_ALPHA,[Fh]:i.ONE_MINUS_CONSTANT_ALPHA};function R(U,pt,Y,Q,_t,mt,Bt,he,Me,Qt){if(U===Ln){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(at(i.BLEND),_=!0),U!==xh){if(U!==m||Qt!==w){if((u!==$n||v!==$n)&&(i.blendEquation(i.FUNC_ADD),u=$n,v=$n),Qt)switch(U){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.ONE,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case La:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ia:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,S=null,P=null,T=null,A.set(0,0,0),I=0,m=U,w=Qt}return}_t=_t||pt,mt=mt||Y,Bt=Bt||Q,(pt!==u||_t!==v)&&(i.blendEquationSeparate(J[pt],J[_t]),u=pt,v=_t),(Y!==E||Q!==S||mt!==P||Bt!==T)&&(i.blendFuncSeparate(it[Y],it[Q],it[mt],it[Bt]),E=Y,S=Q,P=mt,T=Bt),(he.equals(A)===!1||Me!==I)&&(i.blendColor(he.r,he.g,he.b,Me),A.copy(he),I=Me),m=U,w=!1}function Pt(U,pt){U.side===tn?Ct(i.CULL_FACE):at(i.CULL_FACE);let Y=U.side===Te;pt&&(Y=!Y),st(Y),U.blending===Ci&&U.transparent===!1?R(Ln):R(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function yt(U){U!==_h?(at(i.CULL_FACE),U!==C&&(U===Pa?i.cullFace(i.BACK):U===vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),C=U}function lt(U){U!==H&&(k&&i.lineWidth(U),H=U)}function Ut(U,pt,Y){U?(at(i.POLYGON_OFFSET_FILL),(O!==pt||W!==Y)&&(i.polygonOffset(pt,Y),O=pt,W=Y)):Ct(i.POLYGON_OFFSET_FILL)}function xt(U){U?at(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function b(U){U===void 0&&(U=i.TEXTURE0+q-1),B!==U&&(i.activeTexture(U),B=U)}function x(U,pt,Y){Y===void 0&&(B===null?Y=i.TEXTURE0+q-1:Y=B);let Q=$[Y];Q===void 0&&(Q={type:void 0,texture:void 0},$[Y]=Q),(Q.type!==U||Q.texture!==pt)&&(B!==Y&&(i.activeTexture(Y),B=Y),i.bindTexture(U,pt||vt[U]),Q.type=U,Q.texture=pt)}function z(){const U=$[B];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(U){Ft.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ft.copy(U))}function Et(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function Zt(U,pt){let Y=l.get(pt);Y===void 0&&(Y=new WeakMap,l.set(pt,Y));let Q=Y.get(U);Q===void 0&&(Q=i.getUniformBlockIndex(pt,U.name),Y.set(U,Q))}function Gt(U,pt){const Q=l.get(pt).get(U);c.get(pt)!==Q&&(i.uniformBlockBinding(pt,Q,U.__bindingPointIndex),c.set(pt,Q))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},B=null,$={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,u=null,E=null,S=null,v=null,P=null,T=null,A=new Yt(0,0,0),I=0,w=!1,M=null,C=null,H=null,O=null,W=null,Ft.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Ct,bindFramebuffer:Dt,drawBuffers:It,useProgram:Vt,setBlending:R,setMaterial:Pt,setFlipSided:st,setCullFace:yt,setLineWidth:lt,setPolygonOffset:Ut,setScissorTest:xt,activeTexture:b,bindTexture:x,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:wt,texImage3D:Nt,updateUBOMapping:Zt,uniformBlockBinding:Gt,texStorage2D:qt,texStorage3D:ot,texSubImage2D:j,texSubImage3D:bt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Mt,scissor:Ot,viewport:Et,reset:se}}function Tc(i,t,e,n){const s=r0(n);switch(e){case Al:return i*t;case Cl:return i*t;case Pl:return i*t*2;case Ll:return i*t/s.components*s.byteLength;case aa:return i*t/s.components*s.byteLength;case Dl:return i*t*2/s.components*s.byteLength;case ca:return i*t*2/s.components*s.byteLength;case Rl:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case la:return i*t*4/s.components*s.byteLength;case Ys:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zs:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:case xo:return Math.max(i,16)*Math.max(t,8)/4;case go:case vo:return Math.max(i,8)*Math.max(t,8)/2;case Mo:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ks:case Oo:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Il:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zo:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function r0(i){switch(i){case _n:case El:return{byteLength:1,components:1};case rs:case bl:case us:return{byteLength:2,components:1};case ra:case oa:return{byteLength:2,components:4};case ni:case sa:case pn:return{byteLength:4,components:1};case Tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function o0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return p?new OffscreenCanvas(b,x):os("canvas")}function _(b,x,z){let K=1;const tt=xt(b);if((tt.width>z||tt.height>z)&&(K=z/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(K*tt.width),bt=Math.floor(K*tt.height);d===void 0&&(d=g(j,bt));const ft=x?g(j,bt):d;return ft.width=j,ft.height=bt,ft.getContext("2d").drawImage(b,0,0,j,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+j+"x"+bt+")."),ft}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function m(b){return b.generateMipmaps}function u(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(b,x,z,K,tt=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=x;if(x===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),x===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),x===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),x===i.RGBA){const bt=tt?cr:$t.getTransfer(K);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=bt===te?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(b,x){let z;return b?x===null||x===ni||x===Oi?z=i.DEPTH24_STENCIL8:x===pn?z=i.DEPTH32F_STENCIL8:x===rs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ni||x===Oi?z=i.DEPTH_COMPONENT24:x===pn?z=i.DEPTH_COMPONENT32F:x===rs&&(z=i.DEPTH_COMPONENT16),z}function P(b,x){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==qe&&b.minFilter!==nn?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function T(b){const x=b.target;x.removeEventListener("dispose",T),I(x),x.isVideoTexture&&h.delete(x)}function A(b){const x=b.target;x.removeEventListener("dispose",A),M(x)}function I(b){const x=n.get(b);if(x.__webglInit===void 0)return;const z=b.source,K=f.get(z);if(K){const tt=K[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(b),Object.keys(K).length===0&&f.delete(z)}n.remove(b)}function w(b){const x=n.get(b);i.deleteTexture(x.__webglTexture);const z=b.source,K=f.get(z);delete K[x.__cacheKey],o.memory.textures--}function M(b){const x=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let tt=0;tt<x.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=b.textures;for(let K=0,tt=z.length;K<tt;K++){const j=n.get(z[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(b)}let C=0;function H(){C=0}function O(){const b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function W(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function q(b,x){const z=n.get(b);if(b.isVideoTexture&&lt(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,b,x);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function k(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Z(z,b,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function X(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Z(z,b,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function D(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){et(z,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}const B={[er]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[mo]:i.MIRRORED_REPEAT},$={[qe]:i.NEAREST,[Xh]:i.NEAREST_MIPMAP_NEAREST,[_s]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[pr]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},nt={[$h]:i.NEVER,[eu]:i.ALWAYS,[Kh]:i.LESS,[Nl]:i.LEQUAL,[jh]:i.EQUAL,[tu]:i.GEQUAL,[Jh]:i.GREATER,[Qh]:i.NOTEQUAL};function St(b,x){if(x.type===pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===nn||x.magFilter===pr||x.magFilter===_s||x.magFilter===Qn||x.minFilter===nn||x.minFilter===pr||x.minFilter===_s||x.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,B[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,B[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,B[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,$[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,$[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,nt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qe||x.minFilter!==_s&&x.minFilter!==Qn||x.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ft(b,x){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",T));const K=x.source;let tt=f.get(K);tt===void 0&&(tt={},f.set(K,tt));const j=W(x);if(j!==b.__cacheKey){tt[j]===void 0&&(tt[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),tt[j].usedTimes++;const bt=tt[b.__cacheKey];bt!==void 0&&(tt[b.__cacheKey].usedTimes--,bt.usedTimes===0&&w(x)),b.__cacheKey=j,b.__webglTexture=tt[j].texture}return z}function Z(b,x,z){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const tt=Ft(b,x),j=x.source;e.bindTexture(K,b.__webglTexture,i.TEXTURE0+z);const bt=n.get(j);if(j.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+z);const ft=$t.getPrimaries($t.workingColorSpace),Mt=x.colorSpace===Cn?null:$t.getPrimaries(x.colorSpace),qt=x.colorSpace===Cn||ft===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let ot=_(x.image,!1,s.maxTextureSize);ot=Ut(x,ot);const wt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type);let Ot=S(x.internalFormat,wt,Nt,x.colorSpace,x.isVideoTexture);St(K,x);let Et;const Zt=x.mipmaps,Gt=x.isVideoTexture!==!0,se=bt.__version===void 0||tt===!0,U=j.dataReady,pt=P(x,ot);if(x.isDepthTexture)Ot=v(x.format===ki,x.type),se&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,Ot,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ot,ot.width,ot.height,0,wt,Nt,null));else if(x.isDataTexture)if(Zt.length>0){Gt&&se&&e.texStorage2D(i.TEXTURE_2D,pt,Ot,Zt[0].width,Zt[0].height);for(let Y=0,Q=Zt.length;Y<Q;Y++)Et=Zt[Y],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Nt,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Ot,Et.width,Et.height,0,wt,Nt,Et.data);x.generateMipmaps=!1}else Gt?(se&&e.texStorage2D(i.TEXTURE_2D,pt,Ot,ot.width,ot.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,wt,Nt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ot,ot.width,ot.height,0,wt,Nt,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Gt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ot,Zt[0].width,Zt[0].height,ot.depth);for(let Y=0,Q=Zt.length;Y<Q;Y++)if(Et=Zt[Y],x.format!==Ye)if(wt!==null)if(Gt){if(U)if(x.layerUpdates.size>0){const _t=Tc(Et.width,Et.height,x.format,x.type);for(const mt of x.layerUpdates){const Bt=Et.data.subarray(mt*_t/Et.data.BYTES_PER_ELEMENT,(mt+1)*_t/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,mt,Et.width,Et.height,1,wt,Bt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,ot.depth,wt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ot,Et.width,Et.height,ot.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,Et.width,Et.height,ot.depth,wt,Nt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ot,Et.width,Et.height,ot.depth,0,wt,Nt,Et.data)}else{Gt&&se&&e.texStorage2D(i.TEXTURE_2D,pt,Ot,Zt[0].width,Zt[0].height);for(let Y=0,Q=Zt.length;Y<Q;Y++)Et=Zt[Y],x.format!==Ye?wt!==null?Gt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Ot,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,Et.width,Et.height,wt,Nt,Et.data):e.texImage2D(i.TEXTURE_2D,Y,Ot,Et.width,Et.height,0,wt,Nt,Et.data)}else if(x.isDataArrayTexture)if(Gt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,Ot,ot.width,ot.height,ot.depth),U)if(x.layerUpdates.size>0){const Y=Tc(ot.width,ot.height,x.format,x.type);for(const Q of x.layerUpdates){const _t=ot.data.subarray(Q*Y/ot.data.BYTES_PER_ELEMENT,(Q+1)*Y/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,wt,Nt,_t)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,wt,Nt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,ot.width,ot.height,ot.depth,0,wt,Nt,ot.data);else if(x.isData3DTexture)Gt?(se&&e.texStorage3D(i.TEXTURE_3D,pt,Ot,ot.width,ot.height,ot.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,wt,Nt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,ot.width,ot.height,ot.depth,0,wt,Nt,ot.data);else if(x.isFramebufferTexture){if(se)if(Gt)e.texStorage2D(i.TEXTURE_2D,pt,Ot,ot.width,ot.height);else{let Y=ot.width,Q=ot.height;for(let _t=0;_t<pt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Ot,Y,Q,0,wt,Nt,null),Y>>=1,Q>>=1}}else if(Zt.length>0){if(Gt&&se){const Y=xt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,pt,Ot,Y.width,Y.height)}for(let Y=0,Q=Zt.length;Y<Q;Y++)Et=Zt[Y],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,wt,Nt,Et):e.texImage2D(i.TEXTURE_2D,Y,Ot,wt,Nt,Et);x.generateMipmaps=!1}else if(Gt){if(se){const Y=xt(ot);e.texStorage2D(i.TEXTURE_2D,pt,Ot,Y.width,Y.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Nt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ot,wt,Nt,ot);m(x)&&u(K),bt.__version=j.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function et(b,x,z){if(x.image.length!==6)return;const K=Ft(b,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);const j=n.get(tt);if(tt.version!==j.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const bt=$t.getPrimaries($t.workingColorSpace),ft=x.colorSpace===Cn?null:$t.getPrimaries(x.colorSpace),Mt=x.colorSpace===Cn||bt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const qt=x.isCompressedTexture||x.image[0].isCompressedTexture,ot=x.image[0]&&x.image[0].isDataTexture,wt=[];for(let Q=0;Q<6;Q++)!qt&&!ot?wt[Q]=_(x.image[Q],!0,s.maxCubemapSize):wt[Q]=ot?x.image[Q].image:x.image[Q],wt[Q]=Ut(x,wt[Q]);const Nt=wt[0],Ot=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),Zt=S(x.internalFormat,Ot,Et,x.colorSpace),Gt=x.isVideoTexture!==!0,se=j.__version===void 0||K===!0,U=tt.dataReady;let pt=P(x,Nt);St(i.TEXTURE_CUBE_MAP,x);let Y;if(qt){Gt&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Zt,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){Y=wt[Q].mipmaps;for(let _t=0;_t<Y.length;_t++){const mt=Y[_t];x.format!==Ye?Ot!==null?Gt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,mt.width,mt.height,Ot,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,Zt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,0,0,mt.width,mt.height,Ot,Et,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t,Zt,mt.width,mt.height,0,Ot,Et,mt.data)}}}else{if(Y=x.mipmaps,Gt&&se){Y.length>0&&pt++;const Q=xt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Zt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,wt[Q].width,wt[Q].height,Ot,Et,wt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,wt[Q].width,wt[Q].height,0,Ot,Et,wt[Q].data);for(let _t=0;_t<Y.length;_t++){const Bt=Y[_t].image[Q].image;Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,Bt.width,Bt.height,Ot,Et,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,Zt,Bt.width,Bt.height,0,Ot,Et,Bt.data)}}else{Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ot,Et,wt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,Ot,Et,wt[Q]);for(let _t=0;_t<Y.length;_t++){const mt=Y[_t];Gt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,0,0,Ot,Et,mt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_t+1,Zt,Ot,Et,mt.image[Q])}}}m(x)&&u(i.TEXTURE_CUBE_MAP),j.__version=tt.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function vt(b,x,z,K,tt,j){const bt=r.convert(z.format,z.colorSpace),ft=r.convert(z.type),Mt=S(z.internalFormat,bt,ft,z.colorSpace),qt=n.get(x),ot=n.get(z);if(ot.__renderTarget=x,!qt.__hasExternalTextures){const wt=Math.max(1,x.width>>j),Nt=Math.max(1,x.height>>j);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,Mt,wt,Nt,x.depth,0,bt,ft,null):e.texImage2D(tt,j,Mt,wt,Nt,0,bt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),yt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,ot.__webglTexture,0,st(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,ot.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(b,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){const K=x.depthTexture,tt=K&&K.isDepthTexture?K.type:null,j=v(x.stencilBuffer,tt),bt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=st(x);yt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,j,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,j,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,j,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,b)}else{const K=x.textures;for(let tt=0;tt<K.length;tt++){const j=K[tt],bt=r.convert(j.format,j.colorSpace),ft=r.convert(j.type),Mt=S(j.internalFormat,bt,ft,j.colorSpace),qt=st(x);z&&yt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Mt,x.width,x.height):yt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,Mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q(x.depthTexture,0);const tt=K.__webglTexture,j=st(x);if(x.depthTexture.format===Pi)yt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===ki)yt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Dt(b){const x=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=K}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ct(x.__webglFramebuffer,b)}else if(z){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),at(x.__webglDepthbuffer[K],b,!1);else{const tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),at(x.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(b,x,z){const K=n.get(b);x!==void 0&&vt(K.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Dt(b)}function Vt(b){const x=b.texture,z=n.get(b),K=n.get(x);b.addEventListener("dispose",A);const tt=b.textures,j=b.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let Mt=0;Mt<x.mipmaps.length;Mt++)z.__webglFramebuffer[ft][Mt]=i.createFramebuffer()}else z.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<x.mipmaps.length;ft++)z.__webglFramebuffer[ft]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ft=0,Mt=tt.length;ft<Mt;ft++){const qt=n.get(tt[ft]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&yt(b)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<tt.length;ft++){const Mt=tt[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);const qt=r.convert(Mt.format,Mt.colorSpace),ot=r.convert(Mt.type),wt=S(Mt.internalFormat,qt,ot,Mt.colorSpace,b.isXRRenderTarget===!0),Nt=st(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,wt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),at(z.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),St(i.TEXTURE_CUBE_MAP,x);for(let ft=0;ft<6;ft++)if(x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)vt(z.__webglFramebuffer[ft][Mt],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Mt);else vt(z.__webglFramebuffer[ft],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(x)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ft=0,Mt=tt.length;ft<Mt;ft++){const qt=tt[ft],ot=n.get(qt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),St(i.TEXTURE_2D,qt),vt(z.__webglFramebuffer,b,qt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(qt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ft=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,K.__webglTexture),St(ft,x),x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)vt(z.__webglFramebuffer[Mt],b,x,i.COLOR_ATTACHMENT0,ft,Mt);else vt(z.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,ft,0);m(x)&&u(ft),e.unbindTexture()}b.depthBuffer&&Dt(b)}function J(b){const x=b.textures;for(let z=0,K=x.length;z<K;z++){const tt=x[z];if(m(tt)){const j=E(b),bt=n.get(tt).__webglTexture;e.bindTexture(j,bt),u(j),e.unbindTexture()}}}const it=[],R=[];function Pt(b){if(b.samples>0){if(yt(b)===!1){const x=b.textures,z=b.width,K=b.height;let tt=i.COLOR_BUFFER_BIT;const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(b),ft=x.length>1;if(ft)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Mt]);const qt=n.get(x[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,tt,i.NEAREST),c===!0&&(it.length=0,R.length=0,it.push(i.COLOR_ATTACHMENT0+Mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(it.push(j),R.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Mt]);const qt=n.get(x[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function st(b){return Math.min(s.maxSamples,b.samples)}function yt(b){const x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function lt(b){const x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Ut(b,x){const z=b.colorSpace,K=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==oi&&z!==Cn&&($t.getTransfer(z)===te?(K!==Ye||tt!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function xt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=q,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=D,this.rebindTextures=It,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=yt}function a0(i,t){function e(n,s=Cn){let r;const o=$t.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===El)return i.BYTE;if(n===bl)return i.SHORT;if(n===rs)return i.UNSIGNED_SHORT;if(n===sa)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===us)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===Rl)return i.RGB;if(n===Ye)return i.RGBA;if(n===Cl)return i.LUMINANCE;if(n===Pl)return i.LUMINANCE_ALPHA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===aa)return i.RED_INTEGER;if(n===Dl)return i.RG;if(n===ca)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===Ys||n===qs||n===Zs||n===$s)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===_o||n===vo||n===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===yo||n===So)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mo||n===yo)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wo||n===Eo||n===bo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===To)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Do)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===No)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ks||n===Oo||n===ko)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ks)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Bo||n===zo||n===Ho)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ks)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class c0 extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ce extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l0={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),u=this._getHandJoint(l,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const h0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
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

}`;class d0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ae,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:h0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f0 extends ai{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,g=null;const _=new d0,m=e.getContextAttributes();let u=null,E=null;const S=[],v=[],P=new rt;let T=null;const A=new Fe;A.viewport=new ne;const I=new Fe;I.viewport=new ne;const w=[A,I],M=new c0;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=S[Z];return et===void 0&&(et=new Vr,S[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=S[Z];return et===void 0&&(et=new Vr,S[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=S[Z];return et===void 0&&(et=new Vr,S[Z]=et),et.getHandSpace()};function O(Z){const et=v.indexOf(Z.inputSource);if(et===-1)return;const vt=S[et];vt!==void 0&&(vt.update(Z.inputSource,Z.frame,l||o),vt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",q);for(let Z=0;Z<S.length;Z++){const et=v[Z];et!==null&&(v[Z]=null,S[Z].disconnect(et))}C=null,H=null,_.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,E=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ii(p.framebufferWidth,p.framebufferHeight,{format:Ye,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,vt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?ki:Pi,vt=m.stencil?Oi:ni);const Ct={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new ii(f.textureWidth,f.textureHeight,{format:Ye,type:_n,depthTexture:new ql(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Z){for(let et=0;et<Z.removed.length;et++){const vt=Z.removed[et],at=v.indexOf(vt);at>=0&&(v[at]=null,S[at].disconnect(vt))}for(let et=0;et<Z.added.length;et++){const vt=Z.added[et];let at=v.indexOf(vt);if(at===-1){for(let Dt=0;Dt<S.length;Dt++)if(Dt>=v.length){v.push(vt),at=Dt;break}else if(v[Dt]===null){v[Dt]=vt,at=Dt;break}if(at===-1)break}const Ct=S[at];Ct&&Ct.connect(vt)}}const k=new L,X=new L;function D(Z,et,vt){k.setFromMatrixPosition(et.matrixWorld),X.setFromMatrixPosition(vt.matrixWorld);const at=k.distanceTo(X),Ct=et.projectionMatrix.elements,Dt=vt.projectionMatrix.elements,It=Ct[14]/(Ct[10]-1),Vt=Ct[14]/(Ct[10]+1),J=(Ct[9]+1)/Ct[5],it=(Ct[9]-1)/Ct[5],R=(Ct[8]-1)/Ct[0],Pt=(Dt[8]+1)/Dt[0],st=It*R,yt=It*Pt,lt=at/(-R+Pt),Ut=lt*-R;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ut),Z.translateZ(lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ct[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const xt=It+lt,b=Vt+lt,x=st-Ut,z=yt+(at-Ut),K=J*Vt/b*xt,tt=it*Vt/b*xt;Z.projectionMatrix.makePerspective(x,z,K,tt,xt,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function B(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let et=Z.near,vt=Z.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),M.near=I.near=A.near=et,M.far=I.far=A.far=vt,(C!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,H=M.far),A.layers.mask=Z.layers.mask|2,I.layers.mask=Z.layers.mask|4,M.layers.mask=A.layers.mask|I.layers.mask;const at=Z.parent,Ct=M.cameras;B(M,at);for(let Dt=0;Dt<Ct.length;Dt++)B(Ct[Dt],at);Ct.length===2?D(M,A,I):M.projectionMatrix.copy(A.projectionMatrix),$(Z,M,at)};function $(Z,et,vt){vt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(vt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Vo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let nt=null;function St(Z,et){if(h=et.getViewerPose(l||o),g=et,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let at=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Dt=0;Dt<vt.length;Dt++){const It=vt[Dt];let Vt=null;if(p!==null)Vt=p.getViewport(It);else{const it=d.getViewSubImage(f,It);Vt=it.viewport,Dt===0&&(t.setRenderTargetTextures(E,it.colorTexture,f.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(E))}let J=w[Dt];J===void 0&&(J=new Fe,J.layers.enable(Dt),J.viewport=new ne,w[Dt]=J),J.matrix.fromArray(It.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(It.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Dt===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(J)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Dt=d.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let vt=0;vt<S.length;vt++){const at=v[vt],Ct=S[vt];at!==null&&Ct!==void 0&&Ct.update(at,et,l||o)}nt&&nt(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Ft=new Xl;Ft.setAnimationLoop(St),this.setAnimationLoop=function(Z){nt=Z},this.dispose=function(){}}}const Yn=new $e,p0=new ie;function m0(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Vl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,E,S,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,E,S):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Te&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Te&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const E=t.get(u),S=E.envMap,v=E.envMapRotation;S&&(m.envMap.value=S,Yn.copy(v),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(Yn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,E,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=S*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Te&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const E=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function g0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const v=S.program;n.uniformBlockBinding(E,v)}function l(E,S){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));const P=S.program;n.updateUBOMapping(E,P);const T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function h(E){const S=d();E.__bindingPointIndex=S;const v=i.createBuffer(),P=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const S=s[E.id],v=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=v.length;T<A;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,M=I.length;w<M;w++){const C=I[w];if(p(C,T,w,P)===!0){const H=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let q=0;q<O.length;q++){const k=O[q],X=_(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,H+W,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,S,v,P){const T=E.value,A=S+"_"+v;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{const I=P[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return P[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(E){const S=E.uniforms;let v=0;const P=16;for(let A=0,I=S.length;A<I;A++){const w=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,C=w.length;M<C;M++){const H=w[M],O=Array.isArray(H.value)?H.value:[H.value];for(let W=0,q=O.length;W<q;W++){const k=O[W],X=_(k),D=v%P,B=D%X.boundary,$=D+B;v+=B,$!==0&&P-$<X.storage&&(v+=P-$),H.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=X.storage}}}const T=v%P;return T>0&&(v+=P-T),E.__size=v,E.__cache={},this}function _(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function m(E){const S=E.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function u(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}class _0{constructor(t={}){const{canvas:e=su(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,u=null;const E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=Dn,this.toneMappingExposure=1;const v=this;let P=!1,T=0,A=0,I=null,w=-1,M=null;const C=new ne,H=new ne;let O=null;const W=new Yt(0);let q=0,k=e.width,X=e.height,D=1,B=null,$=null;const nt=new ne(0,0,k,X),St=new ne(0,0,k,X);let Ft=!1;const Z=new fa;let et=!1,vt=!1;const at=new ie,Ct=new ie,Dt=new L,It=new ne,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function it(){return I===null?D:1}let R=n;function Pt(y,N){return e.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${na}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",mt,!1),R===null){const N="webgl2";if(R=Pt(N,y),R===null)throw Pt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let st,yt,lt,Ut,xt,b,x,z,K,tt,j,bt,ft,Mt,qt,ot,wt,Nt,Ot,Et,Zt,Gt,se,U;function pt(){st=new Sp(R),st.init(),Gt=new a0(R,st),yt=new gp(R,st,t,Gt),lt=new s0(R,st),yt.reverseDepthBuffer&&f&&lt.buffers.depth.setReversed(!0),Ut=new bp(R),xt=new Gm,b=new o0(R,st,lt,xt,yt,Gt,Ut),x=new vp(v),z=new yp(v),K=new Lu(R),se=new pp(R,K),tt=new wp(R,K,Ut,se),j=new Ap(R,tt,K,Ut),Ot=new Tp(R,yt,b),ot=new _p(xt),bt=new Vm(v,x,z,st,yt,se,ot),ft=new m0(v,xt),Mt=new Xm,qt=new jm(st),Nt=new fp(v,x,z,lt,j,p,c),wt=new n0(v,j,yt),U=new g0(R,Ut,yt,lt),Et=new mp(R,st,Ut),Zt=new Ep(R,st,Ut),Ut.programs=bt.programs,v.capabilities=yt,v.extensions=st,v.properties=xt,v.renderLists=Mt,v.shadowMap=wt,v.state=lt,v.info=Ut}pt();const Y=new f0(v,R);this.xr=Y,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=st.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=st.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(y){y!==void 0&&(D=y,this.setSize(k,X,!1))},this.getSize=function(y){return y.set(k,X)},this.setSize=function(y,N,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=y,X=N,e.width=Math.floor(y*D),e.height=Math.floor(N*D),V===!0&&(e.style.width=y+"px",e.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(k*D,X*D).floor()},this.setDrawingBufferSize=function(y,N,V){k=y,X=N,D=V,e.width=Math.floor(y*V),e.height=Math.floor(N*V),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(nt)},this.setViewport=function(y,N,V,G){y.isVector4?nt.set(y.x,y.y,y.z,y.w):nt.set(y,N,V,G),lt.viewport(C.copy(nt).multiplyScalar(D).round())},this.getScissor=function(y){return y.copy(St)},this.setScissor=function(y,N,V,G){y.isVector4?St.set(y.x,y.y,y.z,y.w):St.set(y,N,V,G),lt.scissor(H.copy(St).multiplyScalar(D).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(y){lt.setScissorTest(Ft=y)},this.setOpaqueSort=function(y){B=y},this.setTransparentSort=function(y){$=y},this.getClearColor=function(y){return y.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(y=!0,N=!0,V=!0){let G=0;if(y){let F=!1;if(I!==null){const ct=I.texture.format;F=ct===la||ct===ca||ct===aa}if(F){const ct=I.texture.type,gt=ct===_n||ct===ni||ct===rs||ct===Oi||ct===ra||ct===oa,Tt=Nt.getClearColor(),At=Nt.getClearAlpha(),kt=Tt.r,zt=Tt.g,Rt=Tt.b;gt?(g[0]=kt,g[1]=zt,g[2]=Rt,g[3]=At,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=kt,_[1]=zt,_[2]=Rt,_[3]=At,R.clearBufferiv(R.COLOR,0,_))}else G|=R.COLOR_BUFFER_BIT}N&&(G|=R.DEPTH_BUFFER_BIT),V&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Mt.dispose(),qt.dispose(),xt.dispose(),x.dispose(),z.dispose(),j.dispose(),se.dispose(),U.dispose(),bt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Sa),Y.removeEventListener("sessionend",wa),zn.stop()};function Q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const y=Ut.autoReset,N=wt.enabled,V=wt.autoUpdate,G=wt.needsUpdate,F=wt.type;pt(),Ut.autoReset=y,wt.enabled=N,wt.autoUpdate=V,wt.needsUpdate=G,wt.type=F}function mt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Bt(y){const N=y.target;N.removeEventListener("dispose",Bt),he(N)}function he(y){Me(y),xt.remove(y)}function Me(y){const N=xt.get(y).programs;N!==void 0&&(N.forEach(function(V){bt.releaseProgram(V)}),y.isShaderMaterial&&bt.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,V,G,F,ct){N===null&&(N=Vt);const gt=F.isMesh&&F.matrixWorld.determinant()<0,Tt=ph(y,N,V,G,F);lt.setMaterial(G,gt);let At=V.index,kt=1;if(G.wireframe===!0){if(At=tt.getWireframeAttribute(V),At===void 0)return;kt=2}const zt=V.drawRange,Rt=V.attributes.position;let Kt=zt.start*kt,re=(zt.start+zt.count)*kt;ct!==null&&(Kt=Math.max(Kt,ct.start*kt),re=Math.min(re,(ct.start+ct.count)*kt)),At!==null?(Kt=Math.max(Kt,0),re=Math.min(re,At.count)):Rt!=null&&(Kt=Math.max(Kt,0),re=Math.min(re,Rt.count));const oe=re-Kt;if(oe<0||oe===1/0)return;se.setup(F,G,Tt,V,At);let Re,jt=Et;if(At!==null&&(Re=K.get(At),jt=Zt,jt.setIndex(Re)),F.isMesh)G.wireframe===!0?(lt.setLineWidth(G.wireframeLinewidth*it()),jt.setMode(R.LINES)):jt.setMode(R.TRIANGLES);else if(F.isLine){let Lt=G.linewidth;Lt===void 0&&(Lt=1),lt.setLineWidth(Lt*it()),F.isLineSegments?jt.setMode(R.LINES):F.isLineLoop?jt.setMode(R.LINE_LOOP):jt.setMode(R.LINE_STRIP)}else F.isPoints?jt.setMode(R.POINTS):F.isSprite&&jt.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Lt=F._multiDrawStarts,an=F._multiDrawCounts,Jt=F._multiDrawCount,He=At?K.get(At).bytesPerElement:1,ci=xt.get(G).currentProgram.getUniforms();for(let De=0;De<Jt;De++)ci.setValue(R,"_gl_DrawID",De),jt.render(Lt[De]/He,an[De])}else if(F.isInstancedMesh)jt.renderInstances(Kt,oe,F.count);else if(V.isInstancedBufferGeometry){const Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,an=Math.min(V.instanceCount,Lt);jt.renderInstances(Kt,oe,an)}else jt.render(Kt,oe)};function Qt(y,N,V){y.transparent===!0&&y.side===tn&&y.forceSinglePass===!1?(y.side=Te,y.needsUpdate=!0,gs(y,N,V),y.side=Fn,y.needsUpdate=!0,gs(y,N,V),y.side=tn):gs(y,N,V)}this.compile=function(y,N,V=null){V===null&&(V=y),u=qt.get(V),u.init(N),S.push(u),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),y!==V&&y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(u.pushLight(F),F.castShadow&&u.pushShadow(F))}),u.setupLights();const G=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ct=F.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){const Tt=ct[gt];Qt(Tt,V,F),G.add(Tt)}else Qt(ct,V,F),G.add(ct)}),S.pop(),u=null,G},this.compileAsync=function(y,N,V=null){const G=this.compile(y,N,V);return new Promise(F=>{function ct(){if(G.forEach(function(gt){xt.get(gt).currentProgram.isReady()&&G.delete(gt)}),G.size===0){F(y);return}setTimeout(ct,10)}st.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ze=null;function on(y){ze&&ze(y)}function Sa(){zn.stop()}function wa(){zn.start()}const zn=new Xl;zn.setAnimationLoop(on),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(y){ze=y,Y.setAnimationLoop(y),y===null?zn.stop():zn.start()},Y.addEventListener("sessionstart",Sa),Y.addEventListener("sessionend",wa),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,N,I),u=qt.get(y,S.length),u.init(N),S.push(u),Ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Ct),vt=this.localClippingEnabled,et=ot.init(this.clippingPlanes,vt),m=Mt.get(y,E.length),m.init(),E.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ct=v.xr.getDepthSensingMesh();ct!==null&&fr(ct,N,-1/0,v.sortObjects)}fr(y,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(B,$),J=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,J&&Nt.addToRenderList(m,y),this.info.render.frame++,et===!0&&ot.beginShadows();const V=u.state.shadowsArray;wt.render(V,y,N),et===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(u.setupLights(),N.isArrayCamera){const ct=N.cameras;if(F.length>0)for(let gt=0,Tt=ct.length;gt<Tt;gt++){const At=ct[gt];ba(G,F,y,At)}J&&Nt.render(y);for(let gt=0,Tt=ct.length;gt<Tt;gt++){const At=ct[gt];Ea(m,y,At,At.viewport)}}else F.length>0&&ba(G,F,y,N),J&&Nt.render(y),Ea(m,y,N);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(v,y,N),se.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(u=S[S.length-1],et===!0&&ot.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function fr(y,N,V,G){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)u.pushLight(y),y.castShadow&&u.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Z.intersectsSprite(y)){G&&It.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ct);const gt=j.update(y),Tt=y.material;Tt.visible&&m.push(y,gt,Tt,V,It.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Z.intersectsObject(y))){const gt=j.update(y),Tt=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),It.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),It.copy(gt.boundingSphere.center)),It.applyMatrix4(y.matrixWorld).applyMatrix4(Ct)),Array.isArray(Tt)){const At=gt.groups;for(let kt=0,zt=At.length;kt<zt;kt++){const Rt=At[kt],Kt=Tt[Rt.materialIndex];Kt&&Kt.visible&&m.push(y,gt,Kt,V,It.z,Rt)}}else Tt.visible&&m.push(y,gt,Tt,V,It.z,null)}}const ct=y.children;for(let gt=0,Tt=ct.length;gt<Tt;gt++)fr(ct[gt],N,V,G)}function Ea(y,N,V,G){const F=y.opaque,ct=y.transmissive,gt=y.transparent;u.setupLightsView(V),et===!0&&ot.setGlobalState(v.clippingPlanes,V),G&&lt.viewport(C.copy(G)),F.length>0&&ms(F,N,V),ct.length>0&&ms(ct,N,V),gt.length>0&&ms(gt,N,V),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function ba(y,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new ii(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?us:_n,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const ct=u.state.transmissionRenderTarget[G.id],gt=G.viewport||C;ct.setSize(gt.z,gt.w);const Tt=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(W),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),J&&Nt.render(V);const At=v.toneMapping;v.toneMapping=Dn;const kt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),et===!0&&ot.setGlobalState(v.clippingPlanes,G),ms(y,V,G),b.updateMultisampleRenderTarget(ct),b.updateRenderTargetMipmap(ct),st.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Rt=0,Kt=N.length;Rt<Kt;Rt++){const re=N[Rt],oe=re.object,Re=re.geometry,jt=re.material,Lt=re.group;if(jt.side===tn&&oe.layers.test(G.layers)){const an=jt.side;jt.side=Te,jt.needsUpdate=!0,Ta(oe,V,G,Re,jt,Lt),jt.side=an,jt.needsUpdate=!0,zt=!0}}zt===!0&&(b.updateMultisampleRenderTarget(ct),b.updateRenderTargetMipmap(ct))}v.setRenderTarget(Tt),v.setClearColor(W,q),kt!==void 0&&(G.viewport=kt),v.toneMapping=At}function ms(y,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ct=y.length;F<ct;F++){const gt=y[F],Tt=gt.object,At=gt.geometry,kt=G===null?gt.material:G,zt=gt.group;Tt.layers.test(V.layers)&&Ta(Tt,N,V,At,kt,zt)}}function Ta(y,N,V,G,F,ct){y.onBeforeRender(v,N,V,G,F,ct),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(v,N,V,G,y,ct),F.transparent===!0&&F.side===tn&&F.forceSinglePass===!1?(F.side=Te,F.needsUpdate=!0,v.renderBufferDirect(V,N,G,F,y,ct),F.side=Fn,F.needsUpdate=!0,v.renderBufferDirect(V,N,G,F,y,ct),F.side=tn):v.renderBufferDirect(V,N,G,F,y,ct),y.onAfterRender(v,N,V,G,F,ct)}function gs(y,N,V){N.isScene!==!0&&(N=Vt);const G=xt.get(y),F=u.state.lights,ct=u.state.shadowsArray,gt=F.state.version,Tt=bt.getParameters(y,F.state,ct,N,V),At=bt.getProgramCacheKey(Tt);let kt=G.programs;G.environment=y.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(y.isMeshStandardMaterial?z:x).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,kt===void 0&&(y.addEventListener("dispose",Bt),kt=new Map,G.programs=kt);let zt=kt.get(At);if(zt!==void 0){if(G.currentProgram===zt&&G.lightsStateVersion===gt)return Ra(y,Tt),zt}else Tt.uniforms=bt.getUniforms(y),y.onBeforeCompile(Tt,v),zt=bt.acquireProgram(Tt,At),kt.set(At,zt),G.uniforms=Tt.uniforms;const Rt=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Rt.clippingPlanes=ot.uniform),Ra(y,Tt),G.needsLights=gh(y),G.lightsStateVersion=gt,G.needsLights&&(Rt.ambientLightColor.value=F.state.ambient,Rt.lightProbe.value=F.state.probe,Rt.directionalLights.value=F.state.directional,Rt.directionalLightShadows.value=F.state.directionalShadow,Rt.spotLights.value=F.state.spot,Rt.spotLightShadows.value=F.state.spotShadow,Rt.rectAreaLights.value=F.state.rectArea,Rt.ltc_1.value=F.state.rectAreaLTC1,Rt.ltc_2.value=F.state.rectAreaLTC2,Rt.pointLights.value=F.state.point,Rt.pointLightShadows.value=F.state.pointShadow,Rt.hemisphereLights.value=F.state.hemi,Rt.directionalShadowMap.value=F.state.directionalShadowMap,Rt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Rt.spotShadowMap.value=F.state.spotShadowMap,Rt.spotLightMatrix.value=F.state.spotLightMatrix,Rt.spotLightMap.value=F.state.spotLightMap,Rt.pointShadowMap.value=F.state.pointShadowMap,Rt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=zt,G.uniformsList=null,zt}function Aa(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Js.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Ra(y,N){const V=xt.get(y);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function ph(y,N,V,G,F){N.isScene!==!0&&(N=Vt),b.resetTextureUnits();const ct=N.fog,gt=G.isMeshStandardMaterial?N.environment:null,Tt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:oi,At=(G.isMeshStandardMaterial?z:x).get(G.envMap||gt),kt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,zt=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!V.morphAttributes.position,Kt=!!V.morphAttributes.normal,re=!!V.morphAttributes.color;let oe=Dn;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(oe=v.toneMapping);const Re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,jt=Re!==void 0?Re.length:0,Lt=xt.get(G),an=u.state.lights;if(et===!0&&(vt===!0||y!==M)){const Oe=y===M&&G.id===w;ot.setState(G,y,Oe)}let Jt=!1;G.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==an.state.version||Lt.outputColorSpace!==Tt||F.isBatchedMesh&&Lt.batching===!1||!F.isBatchedMesh&&Lt.batching===!0||F.isBatchedMesh&&Lt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Lt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Lt.instancing===!1||!F.isInstancedMesh&&Lt.instancing===!0||F.isSkinnedMesh&&Lt.skinning===!1||!F.isSkinnedMesh&&Lt.skinning===!0||F.isInstancedMesh&&Lt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Lt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Lt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Lt.instancingMorph===!1&&F.morphTexture!==null||Lt.envMap!==At||G.fog===!0&&Lt.fog!==ct||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ot.numPlanes||Lt.numIntersection!==ot.numIntersection)||Lt.vertexAlphas!==kt||Lt.vertexTangents!==zt||Lt.morphTargets!==Rt||Lt.morphNormals!==Kt||Lt.morphColors!==re||Lt.toneMapping!==oe||Lt.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,Lt.__version=G.version);let He=Lt.currentProgram;Jt===!0&&(He=gs(G,N,F));let ci=!1,De=!1,Gi=!1;const ae=He.getUniforms(),je=Lt.uniforms;if(lt.useProgram(He.program)&&(ci=!0,De=!0,Gi=!0),G.id!==w&&(w=G.id,De=!0),ci||M!==y){lt.buffers.depth.getReversed()?(at.copy(y.projectionMatrix),ou(at),au(at),ae.setValue(R,"projectionMatrix",at)):ae.setValue(R,"projectionMatrix",y.projectionMatrix),ae.setValue(R,"viewMatrix",y.matrixWorldInverse);const xn=ae.map.cameraPosition;xn!==void 0&&xn.setValue(R,Dt.setFromMatrixPosition(y.matrixWorld)),yt.logarithmicDepthBuffer&&ae.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ae.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,De=!0,Gi=!0)}if(F.isSkinnedMesh){ae.setOptional(R,F,"bindMatrix"),ae.setOptional(R,F,"bindMatrixInverse");const Oe=F.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),ae.setValue(R,"boneTexture",Oe.boneTexture,b))}F.isBatchedMesh&&(ae.setOptional(R,F,"batchingTexture"),ae.setValue(R,"batchingTexture",F._matricesTexture,b),ae.setOptional(R,F,"batchingIdTexture"),ae.setValue(R,"batchingIdTexture",F._indirectTexture,b),ae.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&ae.setValue(R,"batchingColorTexture",F._colorsTexture,b));const Wi=V.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&Ot.update(F,V,He),(De||Lt.receiveShadow!==F.receiveShadow)&&(Lt.receiveShadow=F.receiveShadow,ae.setValue(R,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(je.envMap.value=At,je.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(je.envMapIntensity.value=N.environmentIntensity),De&&(ae.setValue(R,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&mh(je,Gi),ct&&G.fog===!0&&ft.refreshFogUniforms(je,ct),ft.refreshMaterialUniforms(je,G,D,X,u.state.transmissionRenderTarget[y.id]),Js.upload(R,Aa(Lt),je,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Js.upload(R,Aa(Lt),je,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ae.setValue(R,"center",F.center),ae.setValue(R,"modelViewMatrix",F.modelViewMatrix),ae.setValue(R,"normalMatrix",F.normalMatrix),ae.setValue(R,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Oe=G.uniformsGroups;for(let xn=0,Mn=Oe.length;xn<Mn;xn++){const Ca=Oe[xn];U.update(Ca,He),U.bind(Ca,He)}}return He}function mh(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function gh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,N,V){xt.get(y.texture).__webglTexture=N,xt.get(y.depthTexture).__webglTexture=V;const G=xt.get(y);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,N){const V=xt.get(y);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,V=0){I=y,T=N,A=V;let G=!0,F=null,ct=!1,gt=!1;if(y){const At=xt.get(y);if(At.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(At.__webglFramebuffer===void 0)b.setupRenderTarget(y);else if(At.__hasExternalTextures)b.rebindTextures(y,xt.get(y.texture).__webglTexture,xt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Rt=y.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&xt.has(Rt)&&(y.width!==Rt.image.width||y.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(y)}}const kt=y.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(gt=!0);const zt=xt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?F=zt[N][V]:F=zt[N],ct=!0):y.samples>0&&b.useMultisampledRTT(y)===!1?F=xt.get(y).__webglMultisampledFramebuffer:Array.isArray(zt)?F=zt[V]:F=zt,C.copy(y.viewport),H.copy(y.scissor),O=y.scissorTest}else C.copy(nt).multiplyScalar(D).floor(),H.copy(St).multiplyScalar(D).floor(),O=Ft;if(lt.bindFramebuffer(R.FRAMEBUFFER,F)&&G&&lt.drawBuffers(y,F),lt.viewport(C),lt.scissor(H),lt.setScissorTest(O),ct){const At=xt.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,At.__webglTexture,V)}else if(gt){const At=xt.get(y.texture),kt=N||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,At.__webglTexture,V||0,kt)}w=-1},this.readRenderTargetPixels=function(y,N,V,G,F,ct,gt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=xt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){lt.bindFramebuffer(R.FRAMEBUFFER,Tt);try{const At=y.texture,kt=At.format,zt=At.type;if(!yt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-G&&V>=0&&V<=y.height-F&&R.readPixels(N,V,G,F,Gt.convert(kt),Gt.convert(zt),ct)}finally{const At=I!==null?xt.get(I).__webglFramebuffer:null;lt.bindFramebuffer(R.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(y,N,V,G,F,ct,gt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=xt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){const At=y.texture,kt=At.format,zt=At.type;if(!yt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=y.width-G&&V>=0&&V<=y.height-F){lt.bindFramebuffer(R.FRAMEBUFFER,Tt);const Rt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Rt),R.bufferData(R.PIXEL_PACK_BUFFER,ct.byteLength,R.STREAM_READ),R.readPixels(N,V,G,F,Gt.convert(kt),Gt.convert(zt),0);const Kt=I!==null?xt.get(I).__webglFramebuffer:null;lt.bindFramebuffer(R.FRAMEBUFFER,Kt);const re=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ru(R,re,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Rt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ct),R.deleteBuffer(Rt),R.deleteSync(re),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,N=null,V=0){y.isTexture!==!0&&(Ji("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,y=arguments[1]);const G=Math.pow(2,-V),F=Math.floor(y.image.width*G),ct=Math.floor(y.image.height*G),gt=N!==null?N.x:0,Tt=N!==null?N.y:0;b.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,gt,Tt,F,ct),lt.unbindTexture()},this.copyTextureToTexture=function(y,N,V=null,G=null,F=0){y.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,y=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let ct,gt,Tt,At,kt,zt,Rt,Kt,re;const oe=y.isCompressedTexture?y.mipmaps[F]:y.image;V!==null?(ct=V.max.x-V.min.x,gt=V.max.y-V.min.y,Tt=V.isBox3?V.max.z-V.min.z:1,At=V.min.x,kt=V.min.y,zt=V.isBox3?V.min.z:0):(ct=oe.width,gt=oe.height,Tt=oe.depth||1,At=0,kt=0,zt=0),G!==null?(Rt=G.x,Kt=G.y,re=G.z):(Rt=0,Kt=0,re=0);const Re=Gt.convert(N.format),jt=Gt.convert(N.type);let Lt;N.isData3DTexture?(b.setTexture3D(N,0),Lt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(b.setTexture2DArray(N,0),Lt=R.TEXTURE_2D_ARRAY):(b.setTexture2D(N,0),Lt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const an=R.getParameter(R.UNPACK_ROW_LENGTH),Jt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),He=R.getParameter(R.UNPACK_SKIP_PIXELS),ci=R.getParameter(R.UNPACK_SKIP_ROWS),De=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,oe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,oe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,At),R.pixelStorei(R.UNPACK_SKIP_ROWS,kt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zt);const Gi=y.isDataArrayTexture||y.isData3DTexture,ae=N.isDataArrayTexture||N.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const je=xt.get(y),Wi=xt.get(N),Oe=xt.get(je.__renderTarget),xn=xt.get(Wi.__renderTarget);lt.bindFramebuffer(R.READ_FRAMEBUFFER,Oe.__webglFramebuffer),lt.bindFramebuffer(R.DRAW_FRAMEBUFFER,xn.__webglFramebuffer);for(let Mn=0;Mn<Tt;Mn++)Gi&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xt.get(y).__webglTexture,F,zt+Mn),y.isDepthTexture?(ae&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,xt.get(N).__webglTexture,F,re+Mn),R.blitFramebuffer(At,kt,ct,gt,Rt,Kt,ct,gt,R.DEPTH_BUFFER_BIT,R.NEAREST)):ae?R.copyTexSubImage3D(Lt,F,Rt,Kt,re+Mn,At,kt,ct,gt):R.copyTexSubImage2D(Lt,F,Rt,Kt,re+Mn,At,kt,ct,gt);lt.bindFramebuffer(R.READ_FRAMEBUFFER,null),lt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ae?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Lt,F,Rt,Kt,re,ct,gt,Tt,Re,jt,oe.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Lt,F,Rt,Kt,re,ct,gt,Tt,Re,oe.data):R.texSubImage3D(Lt,F,Rt,Kt,re,ct,gt,Tt,Re,jt,oe):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,F,Rt,Kt,ct,gt,Re,jt,oe.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,F,Rt,Kt,oe.width,oe.height,Re,oe.data):R.texSubImage2D(R.TEXTURE_2D,F,Rt,Kt,ct,gt,Re,jt,oe);R.pixelStorei(R.UNPACK_ROW_LENGTH,an),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Jt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,He),R.pixelStorei(R.UNPACK_SKIP_ROWS,ci),R.pixelStorei(R.UNPACK_SKIP_IMAGES,De),F===0&&N.generateMipmaps&&R.generateMipmap(Lt),lt.unbindTexture()},this.copyTextureToTexture3D=function(y,N,V=null,G=null,F=0){return y.isTexture!==!0&&(Ji("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,y=arguments[2],N=arguments[3],F=arguments[4]||0),Ji('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,V,G,F)},this.initRenderTarget=function(y){xt.get(y).__webglFramebuffer===void 0&&b.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?b.setTextureCube(y,0):y.isData3DTexture?b.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?b.setTexture2DArray(y,0):b.setTexture2D(y,0),lt.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,lt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Di{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new Di(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jl extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new rt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],o=[],a=new L,c=new ie;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ve(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(ve(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ma extends rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*d+this.aX,l=f*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class v0 extends ma{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ga(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+d)+(c-a)/d;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ks=new L,Gr=new ga,Wr=new ga,Xr=new ga;class x0 extends rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ks.subVectors(s[0],s[1]).add(s[0]),l=ks);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ks.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ks),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Gr.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,g,_,m),Wr.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,g,_,m),Xr.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Gr.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Wr.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Xr.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(Gr.calc(c),Wr.calc(c),Xr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ac(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function M0(i,t){const e=1-i;return e*e*t}function y0(i,t){return 2*(1-i)*i*t}function S0(i,t){return i*i*t}function ns(i,t,e,n){return M0(i,t)+y0(i,e)+S0(i,n)}function w0(i,t){const e=1-i;return e*e*e*t}function E0(i,t){const e=1-i;return 3*e*e*i*t}function b0(i,t){return 3*(1-i)*i*i*t}function T0(i,t){return i*i*i*t}function is(i,t,e,n,s){return w0(i,t)+E0(i,e)+b0(i,n)+T0(i,s)}class Ql extends rn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(is(t,s.x,r.x,o.x,a.x),is(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class A0 extends rn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(is(t,s.x,r.x,o.x,a.x),is(t,s.y,r.y,o.y,a.y),is(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class th extends rn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R0 extends rn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eh extends rn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ns(t,s.x,r.x,o.x),ns(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C0 extends rn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ns(t,s.x,r.x,o.x),ns(t,s.y,r.y,o.y),ns(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nh extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Ac(a,c.x,l.x,h.x,d.x),Ac(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var Xo=Object.freeze({__proto__:null,ArcCurve:v0,CatmullRomCurve3:x0,CubicBezierCurve:Ql,CubicBezierCurve3:A0,EllipseCurve:ma,LineCurve:th,LineCurve3:R0,QuadraticBezierCurve:eh,QuadraticBezierCurve3:C0,SplineCurve:nh});class P0 extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Xo[s.type]().fromJSON(s))}return this}}class Rc extends P0{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new th(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new eh(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ql(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new nh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new ma(t,e,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class _a extends Be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,h=new rt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ke extends Be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],p=[];let g=0;const _=[],m=n/2;let u=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(p,2));function E(){const v=new L,P=new L;let T=0;const A=(e-t)/n;for(let I=0;I<=r;I++){const w=[],M=I/r,C=M*(e-t)+t;for(let H=0;H<=s;H++){const O=H/s,W=O*c+a,q=Math.sin(W),k=Math.cos(W);P.x=C*q,P.y=-M*n+m,P.z=C*k,d.push(P.x,P.y,P.z),v.set(q,A,k).normalize(),f.push(v.x,v.y,v.z),p.push(O,1-M),w.push(g++)}_.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){const M=_[w][I],C=_[w+1][I],H=_[w+1][I+1],O=_[w][I+1];(t>0||w!==0)&&(h.push(M,C,O),T+=3),(e>0||w!==r-1)&&(h.push(C,H,O),T+=3)}l.addGroup(u,T,0),u+=T}function S(v){const P=g,T=new rt,A=new L;let I=0;const w=v===!0?t:e,M=v===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const C=g;for(let H=0;H<=s;H++){const W=H/s*c+a,q=Math.cos(W),k=Math.sin(W);A.x=w*k,A.y=m*M,A.z=w*q,d.push(A.x,A.y,A.z),f.push(0,M,0),T.x=q*.5+.5,T.y=k*.5*M+.5,p.push(T.x,T.y),g++}for(let H=0;H<s;H++){const O=P+H,W=C+H;v===!0?h.push(W,W+1,O):h.push(W+1,W,O),I+=3}l.addGroup(u,I,v===!0?1:2),u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ps extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ps(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends Rc{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Rc().fromJSON(s))}return this}}const L0={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=ih(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,d,f,p;if(n&&(r=F0(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)d=i[g],f=i[g+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return as(r,o,e,a,c,p,0),o}};function ih(i,t,e,n,s){let r,o;if(s===q0(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Cc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Cc(r,i[r],i[r+1],o);return o&&ur(o,o.next)&&(ls(o),o=o.next),o}function ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ur(e,e.next)||le(e.prev,e,e.next)===0)){if(ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function as(i,t,e,n,s,r,o){if(!i)return;!o&&r&&H0(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?I0(i,n,s,r):D0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),ls(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=U0(ri(i),t,e),as(i,t,e,n,s,r,2)):o===2&&N0(i,t,e,n,s,r):as(ri(i),t,e,n,s,r,1);break}}}function D0(i){const t=i.prev,e=i,n=i.next;if(le(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=p&&Ai(s,a,r,c,o,l,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function I0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(le(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,f=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<d?h<f?h:f:d<f?d:f,_=a>c?a>l?a:l:c>l?c:l,m=h>d?h>f?h:f:d>f?d:f,u=Yo(p,g,t,e,n),E=Yo(_,m,t,e,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=u&&v&&v.z<=E;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Ai(a,h,c,d,l,f,S.x,S.y)&&le(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ai(a,h,c,d,l,f,v.x,v.y)&&le(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=u;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Ai(a,h,c,d,l,f,S.x,S.y)&&le(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=E;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ai(a,h,c,d,l,f,v.x,v.y)&&le(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function U0(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ur(s,r)&&sh(s,n,n.next,r)&&cs(s,r)&&cs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ls(n),ls(n.next),n=i=r),n=n.next}while(n!==i);return ri(n)}function N0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&W0(o,a)){let c=rh(o,a);o=ri(o,o.next),c=ri(c,c.next),as(o,t,e,n,s,r,0),as(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function F0(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=ih(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(G0(l));for(s.sort(O0),r=0;r<s.length;r++)e=k0(s[r],e);return e}function O0(i,t){return i.x-t.x}function k0(i,t){const e=B0(i,t);if(!e)return t;const n=rh(e,i);return ri(n,n.next),ri(e,e.next)}function B0(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ai(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),cs(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&z0(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function z0(i,t){return le(i.prev,i,t.prev)<0&&le(t.next,i,i.next)<0}function H0(i,t,e,n){let s=i;do s.z===0&&(s.z=Yo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,V0(s)}function V0(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Yo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function G0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ai(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function W0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!X0(i,t)&&(cs(i,t)&&cs(t,i)&&Y0(i,t)&&(le(i.prev,i,t.prev)||le(i,t.prev,t))||ur(i,t)&&le(i.prev,i,i.next)>0&&le(t.prev,t,t.next)>0)}function le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ur(i,t){return i.x===t.x&&i.y===t.y}function sh(i,t,e,n){const s=zs(le(i,t,e)),r=zs(le(i,t,n)),o=zs(le(e,n,i)),a=zs(le(e,n,t));return!!(s!==r&&o!==a||s===0&&Bs(i,e,t)||r===0&&Bs(i,n,t)||o===0&&Bs(e,i,n)||a===0&&Bs(e,t,n))}function Bs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zs(i){return i>0?1:i<0?-1:0}function X0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&sh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function cs(i,t){return le(i.prev,i,i.next)<0?le(i,t,i.next)>=0&&le(i,i.prev,t)>=0:le(i,t,i.prev)<0||le(i,i.next,t)<0}function Y0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function rh(i,t){const e=new qo(i.i,i.x,i.y),n=new qo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Cc(i,t,e,n){const s=new qo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function q0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Un{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Un.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Pc(t),Lc(n,t);let o=t.length;e.forEach(Pc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Lc(n,e[c]);const a=L0.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Pc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Lc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class va extends Be{constructor(t=new hr([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Z0;let S,v=!1,P,T,A,I;u&&(S=u.getSpacedPoints(h),v=!0,f=!1,P=u.computeFrenetFrames(h,!1),T=new L,A=new L,I=new L),f||(m=0,p=0,g=0,_=0);const w=a.extractPoints(l);let M=w.shape;const C=w.holes;if(!Un.isClockWise(M)){M=M.reverse();for(let J=0,it=C.length;J<it;J++){const R=C[J];Un.isClockWise(R)&&(C[J]=R.reverse())}}const O=Un.triangulateShape(M,C),W=M;for(let J=0,it=C.length;J<it;J++){const R=C[J];M=M.concat(R)}function q(J,it,R){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(it,R)}const k=M.length,X=O.length;function D(J,it,R){let Pt,st,yt;const lt=J.x-it.x,Ut=J.y-it.y,xt=R.x-J.x,b=R.y-J.y,x=lt*lt+Ut*Ut,z=lt*b-Ut*xt;if(Math.abs(z)>Number.EPSILON){const K=Math.sqrt(x),tt=Math.sqrt(xt*xt+b*b),j=it.x-Ut/K,bt=it.y+lt/K,ft=R.x-b/tt,Mt=R.y+xt/tt,qt=((ft-j)*b-(Mt-bt)*xt)/(lt*b-Ut*xt);Pt=j+lt*qt-J.x,st=bt+Ut*qt-J.y;const ot=Pt*Pt+st*st;if(ot<=2)return new rt(Pt,st);yt=Math.sqrt(ot/2)}else{let K=!1;lt>Number.EPSILON?xt>Number.EPSILON&&(K=!0):lt<-Number.EPSILON?xt<-Number.EPSILON&&(K=!0):Math.sign(Ut)===Math.sign(b)&&(K=!0),K?(Pt=-Ut,st=lt,yt=Math.sqrt(x)):(Pt=lt,st=Ut,yt=Math.sqrt(x/2))}return new rt(Pt/yt,st/yt)}const B=[];for(let J=0,it=W.length,R=it-1,Pt=J+1;J<it;J++,R++,Pt++)R===it&&(R=0),Pt===it&&(Pt=0),B[J]=D(W[J],W[R],W[Pt]);const $=[];let nt,St=B.concat();for(let J=0,it=C.length;J<it;J++){const R=C[J];nt=[];for(let Pt=0,st=R.length,yt=st-1,lt=Pt+1;Pt<st;Pt++,yt++,lt++)yt===st&&(yt=0),lt===st&&(lt=0),nt[Pt]=D(R[Pt],R[yt],R[lt]);$.push(nt),St=St.concat(nt)}for(let J=0;J<m;J++){const it=J/m,R=p*Math.cos(it*Math.PI/2),Pt=g*Math.sin(it*Math.PI/2)+_;for(let st=0,yt=W.length;st<yt;st++){const lt=q(W[st],B[st],Pt);at(lt.x,lt.y,-R)}for(let st=0,yt=C.length;st<yt;st++){const lt=C[st];nt=$[st];for(let Ut=0,xt=lt.length;Ut<xt;Ut++){const b=q(lt[Ut],nt[Ut],Pt);at(b.x,b.y,-R)}}}const Ft=g+_;for(let J=0;J<k;J++){const it=f?q(M[J],St[J],Ft):M[J];v?(A.copy(P.normals[0]).multiplyScalar(it.x),T.copy(P.binormals[0]).multiplyScalar(it.y),I.copy(S[0]).add(A).add(T),at(I.x,I.y,I.z)):at(it.x,it.y,0)}for(let J=1;J<=h;J++)for(let it=0;it<k;it++){const R=f?q(M[it],St[it],Ft):M[it];v?(A.copy(P.normals[J]).multiplyScalar(R.x),T.copy(P.binormals[J]).multiplyScalar(R.y),I.copy(S[J]).add(A).add(T),at(I.x,I.y,I.z)):at(R.x,R.y,d/h*J)}for(let J=m-1;J>=0;J--){const it=J/m,R=p*Math.cos(it*Math.PI/2),Pt=g*Math.sin(it*Math.PI/2)+_;for(let st=0,yt=W.length;st<yt;st++){const lt=q(W[st],B[st],Pt);at(lt.x,lt.y,d+R)}for(let st=0,yt=C.length;st<yt;st++){const lt=C[st];nt=$[st];for(let Ut=0,xt=lt.length;Ut<xt;Ut++){const b=q(lt[Ut],nt[Ut],Pt);v?at(b.x,b.y+S[h-1].y,S[h-1].x+R):at(b.x,b.y,d+R)}}}Z(),et();function Z(){const J=s.length/3;if(f){let it=0,R=k*it;for(let Pt=0;Pt<X;Pt++){const st=O[Pt];Ct(st[2]+R,st[1]+R,st[0]+R)}it=h+m*2,R=k*it;for(let Pt=0;Pt<X;Pt++){const st=O[Pt];Ct(st[0]+R,st[1]+R,st[2]+R)}}else{for(let it=0;it<X;it++){const R=O[it];Ct(R[2],R[1],R[0])}for(let it=0;it<X;it++){const R=O[it];Ct(R[0]+k*h,R[1]+k*h,R[2]+k*h)}}n.addGroup(J,s.length/3-J,0)}function et(){const J=s.length/3;let it=0;vt(W,it),it+=W.length;for(let R=0,Pt=C.length;R<Pt;R++){const st=C[R];vt(st,it),it+=st.length}n.addGroup(J,s.length/3-J,1)}function vt(J,it){let R=J.length;for(;--R>=0;){const Pt=R;let st=R-1;st<0&&(st=J.length-1);for(let yt=0,lt=h+m*2;yt<lt;yt++){const Ut=k*yt,xt=k*(yt+1),b=it+Pt+Ut,x=it+st+Ut,z=it+st+xt,K=it+Pt+xt;Dt(b,x,z,K)}}}function at(J,it,R){c.push(J),c.push(it),c.push(R)}function Ct(J,it,R){It(J),It(it),It(R);const Pt=s.length/3,st=E.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);Vt(st[0]),Vt(st[1]),Vt(st[2])}function Dt(J,it,R,Pt){It(J),It(it),It(Pt),It(it),It(R),It(Pt);const st=s.length/3,yt=E.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);Vt(yt[0]),Vt(yt[1]),Vt(yt[3]),Vt(yt[1]),Vt(yt[2]),Vt(yt[3])}function It(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function Vt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Xo[s.type]().fromJSON(s)),new va(n,t.options)}}const Z0={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new rt(r,o),new rt(a,c),new rt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new rt(o,1-c),new rt(l,1-d),new rt(f,1-g),new rt(_,1-u)]:[new rt(a,1-c),new rt(h,1-d),new rt(p,1-g),new rt(m,1-u)]}};function $0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ir extends Be{constructor(t=new hr([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new de(s,3)),this.setAttribute("normal",new de(r,3)),this.setAttribute("uv",new de(o,2));function l(h){const d=s.length/3,f=h.extractPoints(e);let p=f.shape;const g=f.holes;Un.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,u=g.length;m<u;m++){const E=g[m];Un.isClockWise(E)===!0&&(g[m]=E.reverse())}const _=Un.triangulateShape(p,g);for(let m=0,u=g.length;m<u;m++){const E=g[m];p=p.concat(E)}for(let m=0,u=p.length;m<u;m++){const E=p[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,u=_.length;m<u;m++){const E=_[m],S=E[0]+d,v=E[1]+d,P=E[2]+d;n.push(S,v,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return K0(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new ir(n,t.curveSegments)}}function K0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Bn extends Be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new L,f=new L,p=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){const E=[],S=u/n;let v=0;u===0&&o===0?v=.5/e:u===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const T=P/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-S),E.push(l++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<e;E++){const S=h[u][E+1],v=h[u][E],P=h[u+1][E],T=h[u+1][E+1];(u!==0||o>0)&&p.push(S,v,T),(u!==n-1||c<Math.PI)&&p.push(v,P,T)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class be extends fs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yr extends be{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Dc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class oh{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const j0=new oh;class xa{constructor(t){this.manager=t!==void 0?t:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xa.DEFAULT_MATERIAL_NAME="__DEFAULT";class J0 extends xa{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Dc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=os("img");function c(){h(),Dc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Q0 extends xa{constructor(t){super(t)}load(t,e,n,s){const r=new Ae,o=new J0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class dr extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Zo extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qr=new ie,Ic=new L,Uc=new L;class ah{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ic),Uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uc),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nc=new ie,Ki=new L,Zr=new L;class tg extends ah{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ki.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ki),Zr.copy(n.position),Zr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zr),n.updateMatrixWorld(),s.makeTranslation(-Ki.x,-Ki.y,-Ki.z),Nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc)}}class ch extends dr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class eg extends ah{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sr extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new eg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ng extends dr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Fc=new ie;class ig{constructor(t,e,n=0,s=1/0){this.ray=new ua(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(t,e=!0,n=[]){return $o(t,this,n,e),n.sort(Oc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)$o(t[s],this,n,e);return n.sort(Oc),n}}function Oc(i,t){return i.distance-t.distance}function $o(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)$o(r[o],t,e,!0)}}class Ko{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sg extends ai{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);class zi extends xe{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new rt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const wi=new L,kc=new ie,Bc=new ie,zc=new L,Hc=new L;class rg{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),kc.copy(_.matrixWorldInverse),Bc.multiplyMatrices(_.projectionMatrix,kc),h(g,g,_),p(g)},this.setSize=function(g,_){n=g,s=_,r=n/2,o=s/2,c.style.width=g+"px",c.style.height=_+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)l(g.children[_])}function h(g,_,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){wi.setFromMatrixPosition(g.matrixWorld),wi.applyMatrix4(Bc);const u=wi.z>=-1&&wi.z<=1&&g.layers.test(m.layers)===!0,E=g.element;E.style.display=u===!0?"":"none",u===!0&&(g.onBeforeRender(e,_,m),E.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(wi.x*r+r)+"px,"+(-wi.y*o+o)+"px)",E.parentNode!==c&&c.appendChild(E),g.onAfterRender(e,_,m));const S={distanceToCameraSquared:d(m,g)};a.objects.set(g,S)}for(let u=0,E=g.children.length;u<E;u++)h(g.children[u],_,m)}function d(g,_){return zc.setFromMatrixPosition(g.matrixWorld),Hc.setFromMatrixPosition(_.matrixWorld),zc.distanceToSquared(Hc)}function f(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function p(g){const _=f(g).sort(function(u,E){if(u.renderOrder!==E.renderOrder)return E.renderOrder-u.renderOrder;const S=a.objects.get(u).distanceToCameraSquared,v=a.objects.get(E).distanceToCameraSquared;return S-v}),m=_.length;for(let u=0,E=_.length;u<E;u++)_[u].element.style.zIndex=m-u}}}const Vc={type:"change"},Ma={type:"start"},lh={type:"end"},Hs=new ua,Gc=new Rn,og=Math.cos(70*iu.DEG2RAD),pe=new L,Pe=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$r=1e-6;class ag extends sg{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:en.ROTATE,TWO:en.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new si,this._lastTargetPosition=new L,this._quat=new si().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ko,this._sphericalDelta=new Ko,this._scale=1,this._panOffset=new L,this._rotateStart=new rt,this._rotateEnd=new rt,this._rotateDelta=new rt,this._panStart=new rt,this._panEnd=new rt,this._panDelta=new rt,this._dollyStart=new rt,this._dollyEnd=new rt,this._dollyDelta=new rt,this._dollyDirection=new L,this._mouse=new rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lg.bind(this),this._onPointerDown=cg.bind(this),this._onPointerUp=hg.bind(this),this._onContextMenu=_g.bind(this),this._onMouseWheel=fg.bind(this),this._onKeyDown=pg.bind(this),this._onTouchStart=mg.bind(this),this._onTouchMove=gg.bind(this),this._onMouseDown=ug.bind(this),this._onMouseMove=dg.bind(this),this._interceptControlDown=vg.bind(this),this._interceptControlUp=xg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vc),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;pe.copy(e).sub(this.target),pe.applyQuaternion(this._quat),this._spherical.setFromVector3(pe),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Pe:n>Math.PI&&(n-=Pe),s<-Math.PI?s+=Pe:s>Math.PI&&(s-=Pe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(pe.setFromSpherical(this._spherical),pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=pe.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Hs.origin.copy(this.object.position),Hs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hs.direction))<og?this.object.lookAt(this.target):(Gc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hs.intersectPlane(Gc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$r||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$r||this._lastTargetPosition.distanceToSquared(this.target)>$r?(this.dispatchEvent(Vc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Pe/60*this.autoRotateSpeed*t:Pe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){pe.setFromMatrixColumn(e,0),pe.multiplyScalar(-t),this._panOffset.add(pe)}_panUp(t,e){this.screenSpacePanning===!0?pe.setFromMatrixColumn(e,1):(pe.setFromMatrixColumn(e,0),pe.crossVectors(this.object.up,pe)),pe.multiplyScalar(t),this._panOffset.add(pe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;pe.copy(s).sub(this.target);let r=pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Pe*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Pe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Pe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function cg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function lg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function hg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lh),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ug(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ri.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ee.DOLLY;break;case Ri.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}break;case Ri.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Ma)}function dg(i){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function fg(i){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(i.preventDefault(),this.dispatchEvent(Ma),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lh))}function pg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function mg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case en.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ee.TOUCH_ROTATE;break;case en.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case en.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ee.TOUCH_DOLLY_PAN;break;case en.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(Ma)}function gg(i){switch(this._trackPointer(i),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ee.NONE}}function _g(i){this.enabled!==!1&&i.preventDefault()}function vg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Mg extends Jl{constructor(){super();const t=new Xt;t.deleteAttribute("uv");const e=new be({side:Te}),n=new be,s=new ch(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ut(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ut(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ut(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new ut(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new ut(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new ut(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const d=new ut(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const f=new ut(t,Ei(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new ut(t,Ei(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new ut(t,Ei(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new ut(t,Ei(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new ut(t,Ei(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const u=new ut(t,Ei(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ei(i){const t=new On;return t.color.setScalar(i),t}function Wc(){return window.innerWidth<900||window.innerHeight<520||"ontouchstart"in window&&window.innerWidth<1200}function yg(i,t){const e=Wc(),n=new _0({canvas:i,antialias:!e,powerPreference:"high-performance",alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.setSize(window.innerWidth,window.innerHeight),n.shadowMap.enabled=!0,n.shadowMap.type=e?ia:Ml,n.toneMapping=Sl,n.toneMappingExposure=1.12,n.outputColorSpace=Le;const s=new Jl;s.background=new Yt("#b9cbe0"),s.fog=new Di("#c5d4e3",90,220);const r=new Go(n);s.environment=r.fromScene(new Mg,.06).texture,s.environmentIntensity=.55;const o=e?58:50,a=new Fe(o,window.innerWidth/window.innerHeight,.05,400);a.position.set(36,28,38);const c=new ag(a,n.domElement);c.enableDamping=!0,c.dampingFactor=.08,c.maxPolarAngle=Math.PI*.48,c.minDistance=2,c.maxDistance=90,c.target.set(13.7,8,10),c.update(),c.touches.ONE=en.ROTATE,c.touches.TWO=en.DOLLY_PAN;const l=new rg({element:t});l.setSize(window.innerWidth,window.innerHeight),Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none"});const h=new Zo("#dce7f2","#b8a890",.85);s.add(h);const d=new sr("#fff3d8",2.35);d.position.set(48,62,28),d.castShadow=!0;const f=e?1024:2048;d.shadow.mapSize.set(f,f),d.shadow.camera.near=10,d.shadow.camera.far=140,d.shadow.camera.left=-50,d.shadow.camera.right=50,d.shadow.camera.top=50,d.shadow.camera.bottom=-50,d.shadow.bias=-4e-4,d.shadow.normalBias=.04,s.add(d),s.add(d.target),d.target.position.set(13.7,0,10);const p=new sr("#c5d8ef",.35);p.position.set(-30,20,-20),s.add(p);const g=new ng("#ffffff",.12);s.add(g);let _=performance.now(),m=!1,u=()=>{},E=()=>{};function S(P){if(!m)return;requestAnimationFrame(S);const T=Math.min(.05,(P-_)/1e3);_=P,u(T),c.enabled&&c.update(),n.render(s,a),l.render(s,a),E()}function v(){const P=window.innerWidth,T=window.innerHeight;a.aspect=P/T,a.fov=Wc()?58:50,a.near=.05,a.updateProjectionMatrix(),n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),n.setSize(P,T),l.setSize(P,T)}return window.addEventListener("resize",v),{renderer:n,scene:s,camera:a,orbit:c,labels:l,sun:d,hemi:h,fill:p,mobile:e,start(P,T){u=P,E=T??(()=>{}),m=!0,_=performance.now(),requestAnimationFrame(S)},resize:v,dispose(){m=!1,window.removeEventListener("resize",v)}}}let hs=0;function Kr(){hs+=1}function Vs(i,t,e,n,s=1.15){const r=++hs,o=i.position.clone(),a=t.target.clone(),c=performance.now(),l=t.enabled;return t.enabled=!1,new Promise(h=>{function d(f){if(r!==hs){h();return}const p=Math.min(1,(f-c)/(s*1e3)),g=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;i.position.lerpVectors(o,e,g),t.target.lerpVectors(a,n,g),i.lookAt(t.target),p<1?requestAnimationFrame(d):(t.enabled=l,h())}requestAnimationFrame(d)})}function Sg(i,t,e,n,s,r,o=0,a=1.05,c){const l=++hs;let h=e,d=r;for(;d-h>Math.PI;)d-=Math.PI*2;for(;d-h<-Math.PI;)d+=Math.PI*2;const f=performance.now();return new Promise(p=>{function g(_){if(l!==hs){p();return}const m=Math.min(1,(_-f)/(a*1e3)),u=m<.5?4*m*m*m:1-Math.pow(-2*m+2,3)/2,E=new L().lerpVectors(t,s,u),S=h+(d-h)*u,v=n+(o-n)*u;i.position.copy(E),i.rotation.set(v,S,0,"YXZ"),m<1?requestAnimationFrame(g):p()}requestAnimationFrame(g)})}function wg(i,t){const{scene:e,sun:n,hemi:s,fill:r,renderer:o}=i;t==="morning"?(n.position.set(48,62,28),n.color.set("#fff6e8"),n.intensity=2.35,s.color.set("#dce7f2"),s.groundColor.set("#b8a890"),s.intensity=.85,r.color.set("#c5d8ef"),r.intensity=.35,e.background=new Yt("#b9cbe0"),e.fog=new Di("#c5d4e3",90,220),o.toneMappingExposure=1.12):t==="golden"?(n.position.set(62,16,22),n.color.set("#ffb060"),n.intensity=2.2,s.color.set("#ffd9a8"),s.groundColor.set("#8a5a38"),s.intensity=.55,r.color.set("#ff9a6a"),r.intensity=.3,e.background=new Yt("#eeb07a"),e.fog=new Di("#e0a070",70,180),o.toneMappingExposure=1.02):(n.position.set(-30,28,40),n.color.set("#b0c0e8"),n.intensity=.16,s.color.set("#1a2848"),s.groundColor.set("#0a0c12"),s.intensity=.22,r.color.set("#3a5080"),r.intensity=.08,e.background=new Yt("#0b1020"),e.fog=new Di("#101828",50,150),o.toneMappingExposure=.8),n.target.position.set(13.7,0,10)}const Eg=()=>"./textures/";function jr(i,t,e,n,s){return new Promise((r,o)=>{i.load(Eg()+t,a=>{a.wrapS=a.wrapT=er,a.repeat.set(n,n),a.anisotropy=s,a.colorSpace=e?Le:oi,a.needsUpdate=!0,r(a)},void 0,o)})}async function Je(i,t,e,n){const[s,r,o]=await Promise.all([jr(i,`${t}_diff.jpg`,!0,n,e),jr(i,`${t}_nor.jpg`,!1,n,e),jr(i,`${t}_rough.jpg`,!1,n,e)]);return{map:s,normalMap:r,roughnessMap:o}}async function bg(i,t){const e=Math.min(8,i.capabilities.getMaxAnisotropy()),n=new Q0,s=new oh;n.manager=s,s.onProgress=(m,u,E)=>t(E?u/E:0);const[r,o,a,c,l,h,d,f,p,g]=await Promise.all([Je(n,"wood",e,1),Je(n,"marble",e,1),Je(n,"tile",e,1),Je(n,"terra",e,1),Je(n,"granite",e,1),Je(n,"concrete",e,1),Je(n,"concfloor",e,1),Je(n,"plaster",e,2),Je(n,"grass",e,1),Je(n,"pave",e,1)]),_=(m,u={})=>new be({color:m,roughness:.7,metalness:.05,...u});return{wood:r,marble:o,tile:a,terra:c,granite:l,concrete:h,concfloor:d,plaster:f,grass:p,pave:g,wall:_("#f4f1ea",{roughness:.85,metalness:0,map:f.map,normalMap:f.normalMap,normalScale:new rt(.35,.35),roughnessMap:f.roughnessMap}),ceiling:_("#f7f4ee",{roughness:.9}),glass:new Yr({color:"#9ec5d8",transparent:!0,opacity:.28,roughness:.05,metalness:.05,transmission:.6,thickness:.04,ior:1.45}),glassRail:new Yr({color:"#d7e6ef",transparent:!0,opacity:.22,roughness:.04,metalness:.1,transmission:.7,thickness:.02}),frame:_("#2b2e2c",{roughness:.4,metalness:.35}),door:_("#6b4a2e",{roughness:.55,metalness:.05,map:r.map,roughnessMap:r.roughnessMap}),metal:_("#8a8e92",{roughness:.35,metalness:.8}),gold:_("#c4a265",{roughness:.3,metalness:.7}),fabric:_("#4a5560",{roughness:.85,metalness:0}),mattress:_("#ece6da",{roughness:.9}),plant:_("#2d5a3d",{roughness:.8}),soil:_("#3a2a1c",{roughness:1}),counter:_("#d8d4cc",{roughness:.35,metalness:.1}),cabinet:_("#f3f1ec",{roughness:.55}),woodFur:_("#8b5a2b",{roughness:.55,map:r.map,roughnessMap:r.roughnessMap}),ceramic:_("#f4f6f7",{roughness:.3,metalness:.05}),water:new Yr({color:"#6a9ab8",transparent:!0,opacity:.55,roughness:.15,metalness:.05,transmission:.4}),emissive:_("#fff4d8",{emissive:"#fff4d8",emissiveIntensity:.85,roughness:1})}}const ss={modern:{flooring:"wood",wall:"#f4f1ea",kitchen:"white",fabric:"#4a5560",wood:"#7a5a38"},luxury:{flooring:"marble",wall:"#f3ebe0",kitchen:"walnut",fabric:"#5c1a1a",wood:"#3f2a1a"},minimal:{flooring:"tile",wall:"#f7f7f5",kitchen:"white",fabric:"#d0cbc2",wood:"#c4b7a0"},traditional:{flooring:"marble",wall:"#f3e6d0",kitchen:"granite",fabric:"#7a2e1f",wood:"#5c3310"}},Tg=[{id:"white",color:"#f7f5f0",name:"White"},{id:"cream",color:"#f3ebe0",name:"Cream"},{id:"sage",color:"#d5ddd2",name:"Sage"},{id:"sand",color:"#e8d7bc",name:"Sand"},{id:"grey",color:"#d9d6d0",name:"Grey"},{id:"rose",color:"#ead7d3",name:"Rose"},{id:"terracotta",color:"#e2b89a",name:"Terracotta"},{id:"mint",color:"#d5e4dc",name:"Mint"}];function Xc(i,t){return t==="marble"?i.marble:t==="tile"?i.tile:i.wood}function Yc(i,t){t==="white"?(i.cabinet.color.set("#f3f1ec"),i.cabinet.map=null,i.counter.color.set("#ece9e2"),i.counter.map=null,i.counter.roughness=.3):t==="walnut"?(i.cabinet.color.set("#6b4324"),i.cabinet.map=i.wood.map,i.counter.color.set("#1f1f1f"),i.counter.map=null,i.counter.roughness=.25):t==="black"?(i.cabinet.color.set("#1e1f21"),i.cabinet.map=null,i.counter.color.set("#d8d4cc"),i.counter.map=null,i.counter.roughness=.25):(i.cabinet.color.set("#6b4324"),i.cabinet.map=i.wood.map,i.counter.color.set("#ffffff"),i.counter.map=i.granite.map,i.counter.normalMap=i.granite.normalMap,i.counter.roughnessMap=i.granite.roughnessMap,i.counter.roughness=.4),i.cabinet.needsUpdate=!0,i.counter.needsUpdate=!0}function qc(i,t){const e=ss[t.style];i.fabric.color.set(e.fabric),i.fabric.needsUpdate=!0,i.woodFur.color.set(e.wood),i.woodFur.needsUpdate=!0,t.style==="luxury"?i.mattress.color.set("#efe2cc"):t.style==="traditional"?i.mattress.color.set("#f3e6d0"):t.style==="minimal"?i.mattress.color.set("#f4f2ec"):i.mattress.color.set("#ece6da"),i.mattress.needsUpdate=!0}function Zc(i,t=.55){const e=i.attributes.position;if(!e)return;const n=new Float32Array(e.count*2);for(let s=0;s<e.count;s++){const r=e.getX(s),o=e.getZ(s);n[s*2]=r*t,n[s*2+1]=o*t}i.setAttribute("uv",new Ze(n,2))}const Pn=3.15,Qs=7,ei=8,An=.35,Ag={ox:.2,oz:10,rotY:180,mirrorX:!1,mirrorZ:!1,width:11,depth:9},Rg={ox:16.2,oz:10,rotY:0,mirrorX:!1,mirrorZ:!0,width:11,depth:9},Cg={ox:8.45,oz:0,rotY:180,mirrorX:!1,mirrorZ:!1,width:10.5,depth:10},ts={ox:(27.4-12.192)/2,oz:2.6,rotY:0,mirrorX:!1,mirrorZ:!1,width:12.192,depth:15.24},Ne={x:11.2,z:10,w:5,d:6.2},jn=[[.2,10],[.2,19.2],[27.2,19.2],[27.2,10],[18.95,10],[18.95,0],[8.45,0],[8.45,10]];function tr(i){return i===ei?[{suffix:"PH",planId:"penthouse",typeLabel:"Penthouse",transform:ts}]:[{suffix:"A",planId:"2bhk",typeLabel:"2 BHK",transform:Ag},{suffix:"B",planId:"2bhk",typeLabel:"2 BHK",transform:Rg},{suffix:"C",planId:"3bhk",typeLabel:"3 BHK",transform:Cg}]}function es(i,t){return`${i}${t}`}function vn(i,t,e){let n=e.mirrorX?e.width-i:i,s=e.mirrorZ?e.depth-t:t;const r=e.rotY*Math.PI/180,o=e.width/2,a=e.depth/2,c=n-o,l=s-a,h=Math.cos(r),d=Math.sin(r),f=c*h-l*d+o,p=c*d+l*h+a;return[e.ox+f,e.oz+p]}function $c(i,t){const e=[[i.x,i.z],[i.x+i.w,i.z],[i.x+i.w,i.z+i.d],[i.x,i.z+i.d]].map(([l,h])=>vn(l,h,t)),n=e.map(l=>l[0]),s=e.map(l=>l[1]),r=Math.min(...n),o=Math.max(...n),a=Math.min(...s),c=Math.max(...s);return{x:r,z:a,w:o-r,d:c-a}}function Pg(i){return{minX:i.x,maxX:i.x+i.w,minZ:i.z,maxZ:i.z+i.d}}function ya(i){return An+(i-1)*Pn}function Kc(){return[13.7,10.6]}function Jr(i){return i===ei?"Penthouse":`Floor ${i}`}function hh(i){return i.type==="Penthouse"&&i.terraceArea_sqft?`${i.area_sqft.toLocaleString("en-IN")} sq ft + ${i.terraceArea_sqft.toLocaleString("en-IN")} sq ft terrace`:`${i.area_sqft.toLocaleString("en-IN")} sq ft`}function Lg(){const i=new hr;i.moveTo(jn[0][0],jn[0][1]);for(let t=1;t<jn.length;t++)i.lineTo(jn[t][0],jn[t][1]);return i.closePath(),i}function ti(i,t,e){const n=new va(Lg(),{depth:t,bevelEnabled:!1});n.rotateX(-Math.PI/2);const s=new ut(n,i);return s.position.y=e,s.castShadow=!0,s.receiveShadow=!0,s}function Dg(i){const t=new ce;t.name="tower";const e=[],n=[],s=new be({color:"#c5c0b6",roughness:.86,metalness:.04}),r=new be({color:"#8d8880",roughness:.8,metalness:.06}),o=new be({color:"#e6e0d4",roughness:.72,metalness:.04}),a=new be({color:"#9ec6da",transparent:!0,opacity:.42,roughness:.08,metalness:.28,envMapIntensity:1.1}),c=i.frame,l=new be({color:"#d9d3c7",map:i.pave.map,normalMap:i.pave.normalMap,roughnessMap:i.pave.roughnessMap,roughness:.85});i.pave.map.repeat.set(14,14),i.pave.normalMap.repeat.set(14,14),i.pave.roughnessMap.repeat.set(14,14);const h=new ut(new In(48,42),l);h.rotation.x=-Math.PI/2,h.position.set(13.7,0,9),h.receiveShadow=!0,t.add(h);const d=new ut(new In(160,160),new be({color:"#6a8a4a",map:i.grass.map,normalMap:i.grass.normalMap,roughnessMap:i.grass.roughnessMap,roughness:.95}));i.grass.map.repeat.set(18,18),i.grass.normalMap.repeat.set(18,18),i.grass.roughnessMap.repeat.set(18,18),d.rotation.x=-Math.PI/2,d.position.set(13.7,-.05,9),d.receiveShadow=!0,t.add(d);const f=new ut(new In(8,36),new be({color:"#6a6e72",map:i.concfloor.map,roughnessMap:i.concfloor.roughnessMap,roughness:.9}));f.rotation.x=-Math.PI/2,f.position.set(13.7,.015,32),f.receiveShadow=!0,t.add(f);const p=new ut(new Xt(8,.2,4),i.water);p.position.set(13.7,.05,24.5),t.add(p);const g=new ut(new Xt(8.4,.28,4.4),o);g.position.set(13.7,-.05,24.5),g.receiveShadow=!0,t.add(g);for(const[k,X,D]of kg())t.add(Og(k,X,D,i));const _=new ut(new Xt(6.5,1.6,.25),r);_.position.set(4,.8,24),_.castShadow=!0,t.add(_);const m=document.createElement("div");m.className="unit-card",m.innerHTML='<div class="u-id">Sample Tower</div><div class="u-meta">Lead Setu demo · not a real project</div>',m.style.pointerEvents="none";const u=new zi(m);u.position.set(4,2.1,24),u.userData.structure=!0,t.add(u),_.userData.structure=!0;const E=ti(r,An,0);t.add(E);const S=An+Qs*Pn+4.2,v=[[.4,10.2],[.4,18.9],[11,18.9],[16.4,18.9],[27,18.9],[27,10.2],[18.75,10.2],[18.75,.3],[8.65,.3],[8.65,10.2],[11.4,10.2],[16,10.2]];for(const[k,X]of v){const D=new ut(new Xt(.45,S,.45),s);D.position.set(k,S/2,X),D.castShadow=!0,D.userData.structure=!0,t.add(D)}for(let k=1;k<=Qs;k++){const X=Ig(k,i,s,o,a,c);t.add(X),n.push(X);const D=X.getObjectByName("hit");D&&e.push(D)}const P=Ug(i,s,o,a);t.add(P),n.push(P);const T=P.getObjectByName("hit");T&&e.push(T);const A=An+Qs*Pn,I=new ut(new Xt(Ne.w-.4,A,Ne.d-.4),a);I.position.set(Ne.x+Ne.w/2,An+A/2,Ne.z+Ne.d/2),I.userData.structure=!0,I.userData.windowGlow=!0,t.add(I);for(const k of[-1.1,1.1]){const X=new ut(new Xt(1.5,.1,1.6),i.metal);X.position.set(Ne.x+Ne.w/2+k,An+1.2,Ne.z+1.4),t.add(X)}const w=new ut(new Xt(8,.18,3.2),o);w.position.set(13.7,An+3,-1.4),w.castShadow=!0,w.userData.structure=!0,t.add(w);for(const k of[-3.6,3.6]){const X=new ut(new Ke(.12,.12,3,12),r);X.position.set(13.7+k,An+1.5,-2.6),X.castShadow=!0,X.userData.structure=!0,t.add(X)}function M(k){for(const X of n){const D=X.userData.floor,B=X.getObjectByName("highlight");B&&(B.visible=k===D);const $=X.getObjectByName("floor-label");$&&($.visible=H===null&&k===D)}}const C=[];t.traverse(k=>{k.userData.structure&&C.push(k)});let H=null;function O(k){H=k;for(const X of n){const D=X.userData.floor;k===null?(X.visible=!0,X.traverse(B=>{(B.userData.facade||B.userData.hideInCutaway)&&(B.visible=!0),B.name==="floor-label"&&(B.visible=!1),B.name==="highlight"&&(B.visible=!1)})):(X.visible=D===k,X.traverse(B=>{(B.userData.facade||B.userData.hideInCutaway)&&(B.visible=!1),B.name==="floor-label"&&(B.visible=!1)}))}for(const X of C)X.visible=k===null}function W(k){const X=k==="night",D=k==="golden";t.traverse(B=>{if(!(B instanceof ut)||!B.userData.windowGlow)return;const $=B.material;X?($.emissive.set("#ffc078"),$.emissiveIntensity=3.2,$.opacity=.95,$.transparent=!0,$.color.set("#f6d7a4")):D?($.emissive.set("#ffb070"),$.emissiveIntensity=.55,$.opacity=.55,$.color.set("#9ec6da")):($.emissive.set("#000000"),$.emissiveIntensity=0,$.opacity=.42,$.color.set("#9ec6da"))})}function q(){t.removeFromParent()}return{group:t,floorHits:e,highlight:M,setIsolated:O,setTime:W,dispose:q}}function Ig(i,t,e,n,s,r){const o=new ce;o.userData.floor=i;const a=ya(i),c=ti(n,.28,a);c.userData.ghostable=!0,o.add(c);const l=ti(n,.18,a+Pn-.18);l.userData.ghostable=!0,l.userData.hideInCutaway=!0,o.add(l),Ng(o,a+.28,Pn-.5,s,r,e),jc(o,5.6,a,19.2,4.8,1.5,t,e),jc(o,16.8,a,19.2,4.8,1.5,t,e);const h=ti(new On({visible:!1}),Pn,a);h.name="hit",h.userData.floor=i,o.add(h);const d=new On({color:"#c4a265",transparent:!0,opacity:.28,depthWrite:!1,side:tn}),f=ti(d,Pn,a);f.name="highlight",f.visible=!1,o.add(f);const p=document.createElement("div");p.className="unit-card",p.style.padding="4px 8px",p.style.pointerEvents="none",p.innerHTML=`<div class="u-id">${i}</div>`;const g=new zi(p);return g.position.set(-.6,a+Pn/2,14.6),g.name="floor-label",o.add(g),o}function Ug(i,t,e,n,s){const r=new ce;r.userData.floor=ei;const o=ya(ei),a=ti(e,.22,o);a.userData.ghostable=!0,r.add(a);const c=ti(new be({color:"#c9b9a0",map:i.terra.map,roughnessMap:i.terra.roughnessMap,roughness:.8}),.04,o+.22);r.add(c),Fg(r,o+.22,1.05,t);const l=ts.width,h=ts.depth,d=ts.ox+l/2,f=ts.oz+h/2,p=3.2,g=new ut(new Xt(l,p,h),t);g.position.set(d,o+.22+p/2,f),g.castShadow=!0,g.userData.ghostable=!0,g.userData.hideInCutaway=!0,r.add(g);for(const[P,T,A,I]of[[0,h/2+.02,l*.7,.08],[0,-h/2-.02,l*.55,.08],[l/2+.02,0,.08,h*.5],[-l/2-.02,0,.08,h*.45]]){const w=new ut(new Xt(A,p*.62,I),n);w.position.set(d+P,o+.22+p*.5,f+T),w.userData.windowGlow=!0,r.add(w)}const _=new ut(new Xt(l+.5,.2,h+.5),e);_.position.set(d,o+.22+p+.1,f),_.castShadow=!0,_.userData.hideInCutaway=!0,r.add(_);const m=new ut(new Xt(28,4.2,22),new On({visible:!1}));m.position.set(13.7,o+2,10),m.name="hit",m.userData.floor=ei,r.add(m);const u=new On({color:"#c4a265",transparent:!0,opacity:.28,depthWrite:!1}),E=new ut(new Xt(28,4.2,22),u);E.position.set(13.7,o+2,10),E.name="highlight",E.visible=!1,r.add(E);const S=document.createElement("div");S.className="unit-card",S.innerHTML='<div class="u-id">PH</div><div class="u-meta">Penthouse</div>',S.style.pointerEvents="none";const v=new zi(S);return v.position.set(d,o+4.2,f),v.name="floor-label",r.add(v),r}function Ng(i,t,e,n,s,r){const o=[{x:.2,z:19.2,len:27,alongX:!0,inward:-1},{x:.2,z:10,len:8.25,alongX:!0,inward:1},{x:18.95,z:10,len:8.25,alongX:!0,inward:1},{x:8.45,z:0,len:10.5,alongX:!0,inward:1},{x:.2,z:10,len:9.2,alongX:!1,inward:1},{x:27.2,z:10,len:9.2,alongX:!1,inward:-1},{x:8.45,z:0,len:10,alongX:!1,inward:-1},{x:18.95,z:0,len:10,alongX:!1,inward:1}],a=1.5,c=1.1,l=e*.72;for(const h of o){const d=Math.max(1,Math.floor(h.len/a));for(let f=0;f<d;f++){const p=(f+.5)/d,g=h.alongX?h.x+p*h.len:h.x,_=h.alongX?h.z:h.z+p*h.len,m=h.alongX?0:h.inward*.08,u=h.alongX?h.inward*.08:0,E=new ut(new Xt(h.alongX?a-.08:.16,e,h.alongX?.16:a-.08),r);E.position.set(g,t+e/2,_),E.userData.ghostable=!0,E.userData.facade=!0,E.castShadow=!0,i.add(E);const S=new ut(new Xt(h.alongX?c:.05,l,h.alongX?.05:c),n);S.position.set(g+m,t+e*.5,_+u),S.userData.facade=!0,S.userData.windowGlow=!0,i.add(S);const v=new ut(new Xt(h.alongX?c+.06:.06,l+.06,h.alongX?.06:c+.06),s);v.position.set(g+m,t+e*.5,_+u),v.userData.facade=!0,i.add(v)}}}function jc(i,t,e,n,s,r,o,a){const c=new ut(new Xt(s,.12,r),a);c.position.set(t+s/2,e+.2,n+r/2),c.castShadow=!0,c.receiveShadow=!0,i.add(c);const l=1.05,h=new ut(new Xt(s,l,.03),o.glassRail);h.position.set(t+s/2,e+.2+l/2,n+r),i.add(h);const d=new ut(new Xt(.03,l,r),o.glassRail);d.position.set(t,e+.2+l/2,n+r/2),i.add(d);const f=new ut(new Xt(.03,l,r),o.glassRail);f.position.set(t+s,e+.2+l/2,n+r/2),i.add(f)}function Fg(i,t,e,n,s){const r=[...jn,jn[0]];for(let o=0;o<r.length-1;o++){const a=r[o],c=r[o+1],l=c[0]-a[0],h=c[1]-a[1],d=Math.hypot(l,h),f=(a[0]+c[0])/2,p=(a[1]+c[1])/2,g=Math.atan2(l,h),_=new ut(new Xt(.12,e,d),n);_.position.set(f,t+e/2,p),_.rotation.y=g,_.castShadow=!0,i.add(_)}}function Og(i,t,e,n){const s=new ce,r=new ut(new Ke(.16,.22,e*.45,8),n.woodFur);r.position.set(i,e*.225,t),r.castShadow=!0,s.add(r);const o=n.plant.clone();o.color.set("#2a5a32");const a=new ut(new Bn(e*.32,12,10),o);a.position.set(i,e*.58,t),a.scale.set(1.1,.95,1.1),a.castShadow=!0,s.add(a);const c=new ut(new Bn(e*.24,10,8),o);return c.position.set(i+.4,e*.5,t-.2),c.castShadow=!0,s.add(c),s}function kg(){return[[-6,6,5.5],[-8,16,6.2],[-5,26,5],[32,6,5.8],[34,16,6.5],[31,28,5.2],[2,34,4.8],[25,34,5.4],[13.7,40,6],[4,-8,5],[24,-8,5.6],[13.7,-10,4.6],[-10,-2,6],[36,-2,5.5]]}function sn(i,t,e,n,s,r,o=0,a=0,c=0){const l=new ut(i,t);return l.position.set(e,n,s),l.rotation.set(o,a,c),l.castShadow=!0,l.receiveShadow=!0,r.add(l),l}function ht(i,t,e,n,s,r,o,a,c=0){return sn(new Xt(i,t,e),n,s,r,o,a,0,c,0)}function ue(i,t,e,n,s,r,o){return sn(new Ke(i,i,t,16),e,n,s,r,o)}function Nn(i){const t=i.map(a=>a[0]),e=i.map(a=>a[1]),n=Math.min(...t),s=Math.max(...t),r=Math.min(...e),o=Math.max(...e);return{minX:n,maxX:s,minZ:r,maxZ:o,cx:(n+s)/2,cz:(r+o)/2,w:s-n,d:o-r}}function Bg(i,t,e,n){const s=Nn(i.polygon);if(s.w<.8||s.d<.8)return;const r=n.style;switch(i.type){case"living":zg(s,t,e,r,i.id==="lounge"),i.id==="lounge"&&tl(s,t,e,"south"),(i.name.toLowerCase().includes("kitchen")||i.id==="living")&&i.name.toLowerCase().includes("kitchen")&&tl(s,t,e,"north");break;case"kitchen":Vg(s,t,e);break;case"bedroom":Hg(s,t,e,r,/master|1/i.test(i.name));break;case"bathroom":Wg(s,t,e);break;case"utility":Xg(s,t,e);break;case"lobby":case"hall":Yg(s,t,e,r);break;case"dressing":rr(s.cx,0,s.cz,Math.min(s.w,1.6),2.2,Math.min(s.d,.6),t,e);break;case"terrace":case"balcony":qg(s,t,e,r);break;case"linen":rr(s.cx,0,s.cz,Math.min(s.w-.1,1),2,Math.min(s.d-.1,.5),t,e);break}r==="traditional"&&i.type==="living"&&$g(s,t,e)}function zg(i,t,e,n,s){const r=i.w>=i.d,o=Math.min(r?i.w*.55:i.d*.55,s?3.2:2.4);r?(jo(i.cx,i.minZ+.55,o,0,t,e),Jc(i.cx,i.maxZ-.28,Math.min(1.8,i.w*.4),0,t,e,n),Jo(i.cx,i.minZ+1.35,t,e),i.w>5?Qr(i.minX+i.w*.72,i.cz,4,0,t,e,n):i.d>4.5&&Qr(i.cx+.4,i.maxZ-1.6,4,0,t,e,n)):(jo(i.minX+.55,i.cz,o,Math.PI/2,t,e),Jc(i.maxX-.28,i.cz,Math.min(1.8,i.d*.4),Math.PI/2,t,e,n),Jo(i.minX+1.35,i.cz,t,e),i.d>5&&Qr(i.cx,i.minZ+i.d*.28,4,0,t,e,n)),Kg(i.cx,i.cz,Math.min(i.w*.5,2.6),Math.min(i.d*.45,2),t,e,n),Ii(i.maxX-.4,i.maxZ-.4,1.2,t,e),s&&Ii(i.minX+.4,i.maxZ-.4,1,t,e),Zg(i.maxX-.45,i.minZ+.55,t,e,n)}function jo(i,t,e,n,s,r){const o=new ce;o.position.set(i,0,t),o.rotation.y=n,s.add(o);const a=.9;ht(e,.12,a,r.woodFur,0,.22,0,o);for(const h of[-e/2+.08,e/2-.08])for(const d of[-a/2+.08,a/2-.08])ue(.035,.16,r.woodFur,h,.08,d,o);ht(e-.04,.18,a-.08,r.fabric,0,.38,0,o),ht(e,.52,.16,r.fabric,0,.7,-a/2+.1,o),ht(.14,.36,a-.06,r.fabric,-e/2+.08,.54,.02,o),ht(.14,.36,a-.06,r.fabric,e/2-.08,.54,.02,o);const c=Math.max(2,Math.round(e/.75)),l=(e-.4)/c-.04;for(let h=0;h<c;h++){const d=-e/2+.28+h*((e-.4)/c)+l/2;ht(l,.16,.42,r.fabric,d,.56,.06,o)}}function Jc(i,t,e,n,s,r,o){const a=new ce;a.position.set(i,0,t),a.rotation.y=n,s.add(a),ht(e,.42,.4,r.woodFur,0,.27,0,a),ht(e*.85,.55,.04,r.frame,0,1.15,-.05,a).material.color.set("#111");const l=ht(e*.85-.06,.49,.02,r.emissive.clone(),0,1.15,-.02,a);l.material.emissiveIntensity=.15,l.material.color.set("#1a2230"),l.material.emissive.set("#1a2230"),o==="luxury"&&(ht(.04,1.5,.04,r.gold,-e/2,.85,0,a),ht(.04,1.5,.04,r.gold,e/2,.85,0,a))}function Jo(i,t,e,n){ht(1.05,.06,.6,n.woodFur,i,.38,t,e);for(const[s,r]of[[-.42,-.22],[.42,-.22],[-.42,.22],[.42,.22]])ue(.03,.35,n.metal,i+s,.175,t+r,e)}function Qr(i,t,e,n,s,r,o){const a=new ce;a.position.set(i,0,t),a.rotation.y=n,s.add(a);const c=1.5,l=.9;if(o==="luxury"||o==="traditional"){ue(.07,.72,r.woodFur,0,.36,0,a),sn(new Ke(c/2,c/2,.06,32),r.woodFur,0,.74,0,a);const h=e;for(let d=0;d<h;d++){const f=d/h*Math.PI*2;ji(Math.cos(f)*.85,Math.sin(f)*.85,f+Math.PI,a,r)}}else ht(c,.06,l,r.woodFur,0,.74,0,a),ht(.08,.71,.08,r.woodFur,-c/2+.1,.355,-l/2+.1,a),ht(.08,.71,.08,r.woodFur,c/2-.1,.355,-l/2+.1,a),ht(.08,.71,.08,r.woodFur,-c/2+.1,.355,l/2-.1,a),ht(.08,.71,.08,r.woodFur,c/2-.1,.355,l/2-.1,a),ji(0,-l/2-.38,0,a,r),ji(0,l/2+.38,Math.PI,a,r),ji(-c/2+.35,-l/2-.38,0,a,r),ji(c/2-.35,l/2+.38,Math.PI,a,r),ue(.08,.015,r.ceramic,-.3,.79,-.18,a),ue(.08,.015,r.ceramic,.3,.79,.18,a)}function ji(i,t,e,n,s){const r=new ce;r.position.set(i,0,t),r.rotation.y=e,n.add(r),ht(.42,.05,.42,s.woodFur,0,.45,0,r),ht(.42,.4,.05,s.fabric,0,.68,-.18,r),ht(.4,.04,.38,s.fabric,0,.49,0,r);for(const[o,a]of[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]])ht(.04,.43,.04,s.woodFur,o,.215,a,r)}function Hg(i,t,e,n,s){const r=i.w>=i.d,o=s?1.8:1.5,a=s?2.1:2;if(r){const c=i.cx,l=i.maxZ-.15;Qc(c,l-a/2,o,a,0,t,e,n),Gs(c-o/2-.28,l-.35,t,e),Gs(c+o/2+.28,l-.35,t,e),rr(i.minX+.35,0,i.cz,.6,2.2,Math.min(1.8,i.d*.5),t,e,Math.PI/2),s&&(ht(Math.min(1.1,o*.7),.38,.4,e.woodFur,c,.22,l-a-.35,t),ht(Math.min(1.1,o*.7),.05,.4,e.fabric,c,.43,l-a-.35,t))}else{const c=i.cz,l=i.minX+.15;Qc(l+a/2,c,o,a,Math.PI/2,t,e,n),Gs(l+.35,c-o/2-.28,t,e),Gs(l+.35,c+o/2+.28,t,e),rr(i.maxX-.35,0,i.cz,.6,2.2,Math.min(1.8,i.d*.5),t,e,Math.PI/2)}}function Qc(i,t,e,n,s,r,o,a){const c=new ce;c.position.set(i,0,t),c.rotation.y=s,r.add(c),ht(e+.06,.22,n+.06,o.woodFur,0,.22,0,c),ht(e,.2,n,o.mattress,0,.42,0,c),ht(e-.08,.07,n*.65,o.fabric,0,.55,n*.12,c),ht(e*.38,.12,.32,o.mattress,-e*.2,.58,-n/2+.3,c),ht(e*.38,.12,.32,o.mattress,e*.2,.58,-n/2+.3,c);const l=a==="luxury"?1.15:a==="traditional"?1.05:.9;ht(e+.08,l,.08,a==="luxury"?o.gold:o.woodFur,0,l/2,-n/2-.02,c),a==="traditional"&&ht(e+.08,.06,.1,o.gold,0,l-.04,-n/2-.02,c)}function Gs(i,t,e,n){ht(.45,.08,.45,n.woodFur,i,.48,t,e),ht(.08,.44,.08,n.woodFur,i-.16,.22,t-.16,e),ht(.08,.44,.08,n.woodFur,i+.16,.22,t-.16,e),ht(.08,.44,.08,n.woodFur,i-.16,.22,t+.16,e),ht(.08,.44,.08,n.woodFur,i+.16,.22,t+.16,e),ue(.06,.04,n.metal,i,.54,t,e),ue(.015,.22,n.metal,i,.66,t,e),sn(new ps(.1,.16,16,1,!0),n.fabric,i,.82,t,e)}function rr(i,t,e,n,s,r,o,a,c=0){const l=new ce;l.position.set(i,0,e),l.rotation.y=c,o.add(l),ht(n,s,r,a.woodFur,0,s/2,0,l),ht(.01,s-.1,.01,a.frame,0,s/2,r/2+.005,l),ue(.015,.08,a.metal,n*.18,s/2,r/2+.02,l),ue(.015,.08,a.metal,-n*.18,s/2,r/2+.02,l)}function Vg(i,t,e){const s=i.w-.15;Qo(i.cx,i.minZ+.6/2+.05,s,.6,0,t,e,!0,!0);const r=Math.max(1.2,i.d-.6-.4);Qo(i.maxX-.6/2-.05,i.minZ+.6+r/2,r,.6,Math.PI/2,t,e,!1,!1),Gg(i.maxX-.35,i.maxZ-.4,t,e)}function tl(i,t,e,n){const r=Math.min(n==="north"||n==="south"?i.w-.5:i.d-.5,3.6);let o=i.cx,a=i.cz,c=0;n==="south"&&(a=i.minZ+.6/2+.08,c=0),n==="north"&&(a=i.maxZ-.6/2-.08,c=Math.PI),n==="east"&&(o=i.maxX-.6/2-.08,c=-Math.PI/2),n==="west"&&(o=i.minX+.6/2+.08,c=Math.PI/2),Qo(o,a,r,.6,c,t,e,!0,!0)}function Qo(i,t,e,n,s,r,o,a,c){const l=new ce;if(l.position.set(i,0,t),l.rotation.y=s,r.add(l),ht(e,.86,n,o.cabinet,0,.43,0,l),ht(e+.04,.06,n+.04,o.counter,0,.89,0,l),ht(e,.7,.35,o.cabinet,0,2.15,-n/2+.18,l),a){ht(.55,.03,.5,o.frame,-e*.18,.935,0,l);for(const h of[-.12,.12])for(const d of[-.1,.1])ue(.06,.02,o.metal,-e*.18+h,.95,d,l)}c&&(ht(.48,.08,.38,o.metal,e*.22,.9,0,l),ue(.015,.22,o.metal,e*.22,1.05,-.12,l),ht(.1,.04,.04,o.metal,e*.22,1.16,-.06,l)),ht(e,.1,n-.04,o.frame,0,.05,0,l),ht(e,.42,.02,o.ceramic,0,1.14,-n/2+.02,l),a&&(ht(.6,.46,.04,o.frame,-e*.18,.38,n/2-.01,l),ht(.54,.08,.02,o.metal,-e*.18,.38,n/2+.01,l),ht(.7,.06,.38,o.metal,-e*.18,1.72,-n/2+.22,l),ht(.08,.22,.08,o.metal,-e*.18,1.84,-n/2+.18,l))}function Gg(i,t,e,n){ht(.62,1.85,.65,n.metal,i,.925,t,e),ht(.58,.01,.01,n.frame,i,1.15,t+.33,e),ht(.02,.3,.02,n.frame,i+.26,1.05,t+.34,e)}function Wg(i,t,e){const n=i.w>=i.d,s=i.w*i.d>8;n?(el(i.minX+.4,i.cz,Math.PI/2,t,e),nl(i.cx,i.maxZ-.28,0,t,e),il(i.maxX-.55,i.minZ+.55,t,e),s&&sl(i.minX+1.35,i.minZ+.45,0,t,e)):(el(i.cx,i.minZ+.4,0,t,e),nl(i.maxX-.28,i.cz,Math.PI/2,t,e),il(i.minX+.55,i.maxZ-.55,t,e),s&&sl(i.minX+.45,i.cz+.9,Math.PI/2,t,e))}function el(i,t,e,n,s){const r=new ce;r.position.set(i,0,t),r.rotation.y=e,n.add(r),ht(.38,.42,.5,s.ceramic,0,.25,.05,r),sn(new Xt(.36,.08,.42),s.ceramic,0,.48,.04,r),ht(.36,.42,.16,s.ceramic,0,.64,-.2,r)}function nl(i,t,e,n,s){const r=new ce;r.position.set(i,0,t),r.rotation.y=e,n.add(r),ht(.55,.08,.4,s.ceramic,0,.82,0,r),ht(.5,.7,.36,s.cabinet,0,.4,0,r),ue(.012,.16,s.metal,0,.96,-.1,r),ht(.1,.03,.03,s.metal,0,1.05,-.04,r),ht(.5,.6,.02,s.metal,0,1.55,-.18,r),ht(.44,.54,.01,s.glass,0,1.55,-.17,r)}function il(i,t,e,n){ht(1,.06,1,n.ceramic,i,.05,t,e),ht(1,1.9,.02,n.glassRail,i,1,t-.5,e),ht(.02,1.9,1,n.glassRail,i-.5,1,t,e),ue(.01,.4,n.metal,i+.15,1.95,t+.15,e),sn(new Ke(.1,.1,.02,16),n.metal,i+.15,1.76,t+.15,e)}function Xg(i,t,e){ht(Math.min(i.w-.2,.65),.85,Math.min(i.d-.2,.65),e.metal,i.cx,.45,i.cz,t),ue(.16,.04,e.frame,i.cx,.7,i.cz+.3,t)}function Yg(i,t,e,n){if(i.w*i.d<4){ht(Math.min(.9,i.w*.5),.08,.32,e.woodFur,i.cx,.8,i.minZ+.28,t),ht(Math.min(.9,i.w*.5),.7,.3,e.woodFur,i.cx,.4,i.minZ+.28,t);return}ht(1.2,.42,.4,e.woodFur,i.cx,.25,i.minZ+.5,t),ht(1.2,.06,.4,e.fabric,i.cx,.48,i.minZ+.5,t),Ii(i.maxX-.4,i.maxZ-.4,1.3,t,e),n==="luxury"&&(ue(.35,.04,e.gold,i.cx,2.35,i.cz,t),ue(.01,.3,e.gold,i.cx,2.52,i.cz,t))}function qg(i,t,e,n){if(i.w<2||i.d<2){Ii(i.cx,i.cz,.7,t,e);return}if(jo(i.cx,i.minZ+.7,Math.min(2.2,i.w*.5),0,t,e),Jo(i.cx,i.minZ+1.55,t,e),Ii(i.minX+.45,i.maxZ-.45,.9,t,e),Ii(i.maxX-.45,i.maxZ-.45,.9,t,e),n==="luxury"&&i.w>5){for(let r=0;r<4;r++){const o=i.minX+.6+r*((i.w-1.2)/3);ht(.08,.08,i.d-.6,e.woodFur,o,2.4,i.cz,t)}ht(i.w-.8,.08,.08,e.woodFur,i.cx,2.4,i.minZ+.4,t),ht(i.w-.8,.08,.08,e.woodFur,i.cx,2.4,i.maxZ-.4,t)}}function sl(i,t,e,n,s){const r=new ce;r.position.set(i,0,t),r.rotation.y=e,n.add(r),ht(1.7,.45,.72,s.ceramic,0,.28,0,r),ht(1.5,.08,.54,s.water,0,.48,0,r),ue(.015,.18,s.metal,.7,.64,-.22,r),ht(.12,.03,.04,s.metal,.7,.74,-.14,r)}function Zg(i,t,e,n,s){ue(.12,.03,n.metal,i,.02,t,e),ue(.015,1.35,s==="luxury"?n.gold:n.metal,i,.7,t,e),sn(new ps(.18,.22,16,1,!0),n.fabric,i,1.48,t,e);const r=ue(.06,.04,n.emissive.clone(),i,1.38,t,e);r.material.emissiveIntensity=.4}function Ii(i,t,e,n,s){ue(.14,.28,s.soil,i,.16,t,n),ue(.16,.06,s.ceramic,i,.03,t,n),sn(new Bn(.28*(e/1.1),14,12),s.plant,i,.45+e*.25,t,n).scale.set(1,1.15+e*.15,1),sn(new Bn(.18,12,10),s.plant,i+.16,.55+e*.15,t-.05,n)}function $g(i,t,e){const n=i.minX+.35,s=i.maxZ-.22;ht(.7,.9,.22,e.woodFur,n,1.35,s,t),ht(.66,.02,.02,e.gold,n,1.15,s+.12,t),ht(.66,.02,.02,e.gold,n,1.55,s+.12,t),sn(new ps(.4,.28,4),e.woodFur,n,1.94,s,t,0,Math.PI/4,0);const r=ht(.2,.2,.04,e.gold,n,1.4,s+.1,t);r.material.emissive.set("#c4a265"),r.material.emissiveIntensity=.5}function Kg(i,t,e,n,s,r,o){const a=r.fabric.clone();o==="traditional"?a.color.set("#7a2e1f"):o==="luxury"?a.color.set("#3d2a1e"):o==="minimal"?a.color.set("#e4e0d6"):a.color.set("#6a7068");const c=ht(e,.015,n,a,i,.012,t,s);c.castShadow=!1}const ta=1.6,jg=1.28,rl={foyer:0,lobby:1,hall:2,living:3,dining:4,kitchen:5,bedroom:6,dressing:7,bathroom:8,utility:9,linen:10,balcony:11,terrace:12};function uh(i,t,e){let n=!1;const s=i.length;for(let r=0,o=s-1;r<s;o=r++){const[a,c]=i[r],[l,h]=i[o];c>e!=h>e&&t<(l-a)*(e-c)/(h-c+1e-12)+a&&(n=!n)}return n}function ea(i,t,e,n=.4){for(const s of i)if(uh(s.polygon,t,e)||n>0&&Jg(s.polygon,t,e)<=n)return!0;return!1}function Jg(i,t,e){let n=1/0;for(let s=0;s<i.length;s++){const r=i[s],o=i[(s+1)%i.length],a=Qg(t,e,r[0],r[1],o[0],o[1]);a<n&&(n=a)}return n}function Qg(i,t,e,n,s,r){const o=s-e,a=r-n,c=o*o+a*a||1;let l=((i-e)*o+(t-n)*a)/c;return l=Math.max(0,Math.min(1,l)),Math.hypot(i-(e+l*o),t-(n+l*a))}function or(i,t,e,n=.3){for(const s of i)if(t+n>s.minX&&t-n<s.maxX&&e+n>s.minZ&&e-n<s.maxZ)return!0;return!1}function dh(i,t,e,n=.32){const s=(a,c)=>!or(t,a,c,n)&&ea(e,a,c,.25);if(s(i.x,i.z))return i;const r=[.25,.45,.7,1,1.35,1.75,2.2,2.8],o=16;for(const a of r)for(let c=0;c<o;c++){const l=c/o*Math.PI*2,h=i.x+Math.cos(l)*a,d=i.z+Math.sin(l)*a;if(s(h,d))return{x:h,z:d}}for(const a of e){const c=Nn(a.polygon);if(s(c.cx,c.cz))return{x:c.cx,z:c.cz}}return i}function t_(i,t){return t?i.map(([e,n])=>vn(e,n,t)):i}function e_(i,t,e,n){return Math.atan2(-(e-i),-(n-t))}function Ws(i,t){const e=`${i} ${t}`.toLowerCase();if(/master/.test(e))return 0;const n=e.match(/(\d+)/);return n?Number(n[1]):9}function n_(i){const t=i.name.replace(/\s+area$/i,"").trim();return i.type==="lobby"||i.id==="lobby"?{name:t.toLowerCase().includes("entrance")?"Foyer":t||"Foyer",short:"Foyer",type:"foyer"}:i.type==="hall"?{name:t||"Hall",short:"Hall",type:"foyer"}:i.type==="living"?{name:"Living",short:"Living",type:"living"}:i.type==="kitchen"?{name:"Kitchen",short:"Kitchen",type:"kitchen"}:i.type==="bathroom"?{name:t||"Bathroom",short:i_(t),type:"bathroom"}:i.type==="bedroom"?{name:t||"Bedroom",short:s_(t),type:"bedroom"}:i.type==="balcony"?{name:"Balcony",short:"Balcony",type:"balcony"}:i.type==="terrace"?{name:"Terrace",short:"Terrace",type:"terrace"}:i.type==="dressing"?{name:"Dressing",short:"Dressing",type:"dressing"}:i.type==="utility"?{name:"Utility",short:"Utility",type:"utility"}:i.type==="linen"?{name:"Linen",short:"Linen",type:"linen"}:{name:t||i.id,short:t||i.id,type:i.type}}function i_(i){return/master/i.test(i)?"Master bath":/en-?suite/i.test(i)?"En-suite":/toilet\s*2/i.test(i)?"Toilet 2":/utility/i.test(i)?"Bath":i.length>14?"Bathroom":i||"Bathroom"}function s_(i){return/master/i.test(i)?"Master bed":i||"Bedroom"}function r_(i,t,e,n,s,r,o=6){let a=0;for(let c=.12;c<=o;c+=.1){const l=i+e*c,h=t+n*c;if(!uh(s,l,h)||or(r,l,h,.12))return a;a=c}return o}function to(i,t,e,n,s){const r=Nn(t),o=r.w>=r.d,a=Math.max(.42,Math.min(.9,Math.min(r.w,r.d)*.28));let c=0,l=0;e==="foyer"&&s?(c=s.x-r.cx,l=s.z-r.cz):e==="living"?o?(c=0,l=1):(c=1,l=0):e==="dining"?o?(c=0,l=-1):(c=-1,l=0):e==="kitchen"?o?(c=0,l=r.maxZ>r.cz?1:-1):(c=1,l=0):e==="bedroom"?o?(c=0,l=1):(c=-1,l=0):e==="balcony"||e==="terrace"?(c=s?r.cx-s.x:0,l=s?r.cz-s.z:1):(c=o?1:0,l=o?0:1);const h=Math.hypot(c,l)||1;c/=h,l/=h;const d=[],f=(u,E,S,v,P=0)=>{const T=dh({x:u,z:E},n,[{polygon:t}],.32),A=S-T.x,I=v-T.z,w=Math.hypot(A,I)||1,M=A/w,C=I/w,H=r_(T.x,T.z,M,C,t,n);if(H<.7)return;const O=M*c+C*l,W=H+O*1.4+P,q=Math.min(Math.max(H*.72,1.05),3.2);d.push({camX:T.x,camZ:T.z,lookX:T.x+M*q,lookZ:T.z+C*q,score:W})},p=Math.min(Math.min(r.w,r.d)*.36,1.35);f(r.cx-c*p,r.cz-l*p,r.cx+c*2.4,r.cz+l*2.4,.6);const g=a;if(f(r.minX+g,r.minZ+g,r.maxX-.35,r.maxZ-.35,.2),f(r.maxX-g,r.minZ+g,r.minX+.35,r.maxZ-.35,.2),f(r.minX+g,r.maxZ-g,r.maxX-.35,r.minZ+.35,.2),f(r.maxX-g,r.maxZ-g,r.minX+.35,r.minZ+.35,.2),f(r.cx,r.minZ+g,r.cx,r.maxZ-.3),f(r.cx,r.maxZ-g,r.cx,r.minZ+.3),f(r.minX+g,r.cz,r.maxX-.3,r.cz),f(r.maxX-g,r.cz,r.minX+.3,r.cz),d.sort((u,E)=>E.score-u.score),d.length)return d[0];const _=o?1:0,m=o?0:1;return{camX:r.cx-_*a*.4,camZ:r.cz-m*a*.4,lookX:r.cx+_,lookZ:r.cz+m}}function eo(i,t,e,n,s,r,o,a,c){const l=dh({x:r.camX,z:r.camZ},o,a),h={x:r.lookX,z:r.lookZ},d=e_(l.x,l.z,h.x,h.z);return{id:i,name:t,short:e,type:n,area_m2:s,note:c,position:new L(l.x,ta,l.z),lookAt:new L(h.x,jg,h.z),yaw:d,walkX:l.x,walkZ:l.z}}function fh(i,t,e){const n=[],s=i.rooms.map(h=>({...h,polygon:t_(h.polygon,t)}));s.filter(h=>h.type!=="terrace"&&h.type!=="balcony");const r=s,o=i.bounds;let a=(o.min[0]+o.max[0])/2,c=(o.min[1]+o.max[1])/2;if(t){const h=vn(o.min[0],o.min[1],t),d=vn(o.max[0],o.max[1],t);a=(h[0]+d[0])/2,c=(h[1]+d[1])/2}const l={x:a,z:c};for(const h of s){const d=n_(h),f=to(h,h.polygon,d.type,e,l),p=h.notes;if(n.push(eo(h.id,d.name,d.short,d.type,h.area_m2,f,e,r,p)),h.type==="living"&&/dining/i.test(h.name)&&Nn(h.polygon).w*Nn(h.polygon).d>18){Nn(h.polygon);const _=to(h,h.polygon,"dining",e,l);n.push(eo(`${h.id}-dining`,"Dining","Dining","dining",Math.round(h.area_m2*.35*10)/10,_,e,[h]))}if((h.type==="living"&&/kitchen/i.test(h.name)||i.id==="penthouse"&&h.id==="lounge")&&!s.some(_=>_.type==="kitchen")){const _=to(h,h.polygon,"kitchen",e,l),m=i.id==="penthouse"?"The first-floor plan used for this penthouse has no kitchen; an open kitchen is shown in the family lounge as an approximation.":"The 3BHK drawing combines the living room and kitchen in one space.";n.push(eo(`${h.id}-kitchen`,"Kitchen","Kitchen","kitchen",Math.round(h.area_m2*.28*10)/10,_,e,[h],m))}}return n.sort((h,d)=>{const f=rl[h.type]??50,p=rl[d.type]??50;return f!==p?f-p:h.type==="bedroom"||h.type==="bathroom"?Ws(h.name,h.id)-Ws(d.name,d.id):h.name.localeCompare(d.name)}),n}function ol(i,t){const e={modern:"Modern",luxury:"Luxury",minimal:"Minimal",traditional:"Traditional Indian"},n={marble:"Marble",wood:"Wood",tile:"Tile"},s={white:"White",walnut:"Walnut",black:"Matte black",granite:"Granite"},r=[];return r.push({label:"Style",value:e[t.style]}),i.type==="kitchen"?(r.push({label:"Cabinets & counter",value:s[t.kitchen]}),r.push({label:"Floor",value:"Tile"})):i.type==="bathroom"||i.type==="utility"?(r.push({label:"Floor",value:"Tile"}),r.push({label:"Walls",value:"Follow your wall colour"})):i.type==="balcony"||i.type==="terrace"?r.push({label:"Deck",value:"Terracotta pavers"}):i.type==="bedroom"?(r.push({label:"Floor",value:n[t.flooring]}),r.push({label:"Headboard",value:e[t.style]})):(r.push({label:"Floor",value:n[t.flooring]}),r.push({label:"Walls",value:"Your chosen wall colour"})),r}function o_(i,t,e){const n=fh(i,t,e),s=n.find(r=>r.type==="living")??n.find(r=>r.type==="foyer")??n[0];return s?{x:s.walkX,y:ta,z:s.walkZ,yaw:s.yaw}:{x:0,y:ta,z:0,yaw:0}}const al=2.1,cl=.9,ll=1.4,hl=.08;function bi(i,t="#ffffff"){const e=i.map.clone(),n=i.normalMap.clone(),s=i.roughnessMap.clone();return e.needsUpdate=n.needsUpdate=s.needsUpdate=!0,new be({color:t,map:e,normalMap:n,roughnessMap:s,roughness:.6,metalness:.04})}function ul(i){const t=new hr;t.moveTo(i[0][0],i[0][1]);for(let e=1;e<i.length;e++)t.lineTo(i[e][0],i[e][1]);return t.closePath(),t}function Zn(i,t){return t?i.map(([e,n])=>vn(e,n,t)):i}function dl(i,t,e,n={showCeiling:!1,y:0,cutaway:!1}){const s=n.transform,r=new ce;r.position.y=n.y;const o=[],a=[],c=[],l=[],h=e.wall.clone();h.color.set(t.wallColor),l.push(h),Yc(e,t.kitchen),qc(e,t);const d=bi(Xc(e,t.flooring)),f=bi(e.tile,"#e8eef0"),p=bi(e.tile,"#efeae2"),g=bi(e.terra),_=bi(e.wood);l.push(d,f,p,g,_);const m=n.cutaway?Math.min(1.15,i.wallHeight):i.wallHeight;for(const D of i.rooms){const B=Zn(D.polygon,s);if(B.length<3)continue;const $=ul(B),nt=new ir($);nt.rotateX(-Math.PI/2),Zc(nt,.55),c.push(nt);let St=d;D.type==="bathroom"||D.type==="utility"?St=f:D.type==="kitchen"?St=p:D.type==="terrace"||D.type==="balcony"?St=g:D.type==="bedroom"&&t.flooring==="marble"?St=d:(D.type==="lobby"||D.type==="hall")&&(St=p);const Ft=new ut(nt,St);Ft.position.y=.01,Ft.receiveShadow=!0,r.add(Ft),a.push(Ft)}const u=i.bounds,E=[[u.min[0],u.min[1]],[u.max[0],u.min[1]],[u.max[0],u.max[1]],[u.min[0],u.max[1]]],S=Zn(E,s),v=new ir(ul(S));v.rotateX(-Math.PI/2),Zc(v,.4),c.push(v);const P=new ut(v,e.concfloor?bi(e.concfloor,"#d0cdc6"):d);P.position.y=-.04,P.receiveShadow=!0,r.add(P),l.push(P.material);for(const D of i.walls){const B=s?$c(D,s):D;if(B.w<.02||B.d<.02)continue;const $=new Xt(B.w,m,B.d);c.push($);const nt=new ut($,h);if(nt.position.set(B.x+B.w/2,m/2,B.z+B.d/2),nt.castShadow=!0,nt.receiveShadow=!0,r.add(nt),o.push(Pg(B)),!n.cutaway){const St=new ut(new Xt(B.w+.01,hl,B.d+.01),e.woodFur);St.position.set(B.x+B.w/2,hl/2,B.z+B.d/2),St.castShadow=!1,r.add(St)}}for(const D of i.windows){const B=s?$c(D,s):D,$=B.w>=B.d,nt=$?B.w:B.d,St=Math.max($?B.d:B.w,.06),Ft=B.x+B.w/2,Z=B.z+B.d/2,et=n.cutaway?Math.min(.4,cl):cl,vt=n.cutaway?Math.min(.6,ll):ll,at=$?nt:.06,Ct=$?.06:nt,Dt=e.frame,It=new ut(new Xt(at,.05,Ct),Dt);It.position.set(Ft,et+vt,Z),r.add(It);const Vt=new ut(new Xt(at,.05,Ct),Dt);Vt.position.set(Ft,et,Z),r.add(Vt);const J=new ut(new Xt($?nt-.04:.03,vt-.04,$?.03:nt-.04),e.glass);J.position.set(Ft,et+vt/2,Z),r.add(J);const it=new ut(new Xt($?nt:St+.08,.04,$?St+.08:nt),e.woodFur);it.position.set(Ft,et-.02,Z),r.add(it)}for(const D of i.doors){const B=s?vn(D.ax,D.az,s):[D.ax,D.az],$=s?vn(D.bx,D.bz,s):[D.bx,D.bz],nt=(B[0]+$[0])/2,St=(B[1]+$[1])/2,Ft=$[0]-B[0],Z=$[1]-B[1],et=Math.hypot(Ft,Z)||D.width,vt=Math.atan2(Ft,Z),at=B[0],Ct=B[1],Dt=new ce;Dt.position.set(at,0,Ct),Dt.rotation.y=vt+Math.PI/2.6;const It=n.cutaway?Math.min(m,1.05):al,Vt=new ut(new Xt(.04,It,et*.95),e.door);Vt.position.set(0,It/2,et*.45),Vt.castShadow=!0,Dt.add(Vt);const J=new ut(new Ke(.015,.015,.1,8),e.metal);if(J.rotation.z=Math.PI/2,J.position.set(.03,1,et*.8),Dt.add(J),r.add(Dt),!n.cutaway){new ut(new Xt(fl(Ft,Z,.12),.08,fl(Z,Ft,.12)||.12),h);const it=Math.abs(Ft)>Math.abs(Z),R=new ut(new Xt(it?et:.15,.1,it?.15:et),h);R.position.set(nt,al+.05,St),r.add(R)}}for(const D of i.rooms)D.type!=="balcony"&&D.type!=="terrace"||a_(Zn(D.polygon,s),r,e,o,n.cutaway);const T=new ce;if(T.name="furniture",T.visible=t.furniture,t.furniture)for(const D of i.rooms){const B=s?{...D,polygon:Zn(D.polygon,s)}:D,$=new ce;Bg(B,$,e,t),T.add($)}r.add(T);const A=new ut(v,e.ceiling);if(A.position.y=i.wallHeight-.02,A.rotation.x=0,A.scale.y=-1,A.visible=n.showCeiling&&!n.cutaway,A.receiveShadow=!0,A.name="ceiling",r.add(A),n.showCeiling&&!n.cutaway){const D=new ut(new In(36,36),e.ceiling);D.rotation.x=Math.PI/2,D.position.y=i.wallHeight-.015,D.name="ceiling-cover",r.add(D)}const I=[],w=[];for(const D of i.rooms){if(D.type==="terrace"||D.type==="balcony")continue;const B=Nn(Zn(D.polygon,s)),$=e.emissive.clone();$.emissive.set("#ffd9a0"),$.emissiveIntensity=.35,w.push($);const nt=new ut(new Ke(.12,.12,.03,16),$);nt.position.set(B.cx,i.wallHeight-.05,B.cz),nt.visible=n.showCeiling&&!n.cutaway,r.add(nt);const St=new ch("#ffd7a3",0,Math.max(4.5,Math.min(B.w,B.d)*1.6+2),2);St.position.set(B.cx,i.wallHeight-.28,B.cz),St.visible=!1,r.add(St),I.push(St)}const M=n.hotspots?c_(i,s,n.cutaway,r):[];function C(D){const B=D==="night",$=D==="golden";for(const nt of I)nt.intensity=B?n.cutaway?1.05:1.45:$?.15:0,nt.visible=B||$,nt.color.set(B?"#ffd7a3":"#ffc888");for(const nt of w)nt.emissiveIntensity=B?2.1:$?.7:.3,nt.emissive.set(B?"#ffcc88":"#ffe8c0")}const H=i.rooms.map(D=>({...D,polygon:Zn(D.polygon,s)})),O=fh(i,s,o),q={...o_(i,s,o),y:n.y+1.6};function k(D){h.color.set(D.wallColor),Yc(e,D.kitchen),qc(e,D);const B=Xc(e,D.flooring);d.map=B.map,d.normalMap=B.normalMap,d.roughnessMap=B.roughnessMap,d.needsUpdate=!0,T.visible=D.furniture}function X(){r.traverse(D=>{const B=D.element;B&&B.parentElement&&B.remove()}),r.removeFromParent(),r.traverse(D=>{});for(const D of c)D.dispose();for(const D of l)D.dispose()}return{group:r,collisions:o,spawn:q,floorMeshes:a,wallMat:h,hotspots:M,rooms:O,worldRooms:H,applyPrefs:k,setTime:C,dispose:X}}function fl(i,t,e){return Math.abs(i)>.01?Math.abs(i):e}function a_(i,t,e,n,s){if(i.length<3)return;const r=s?.6:1.05,o=i.length;for(let a=0;a<o;a++){const c=i[a],l=i[(a+1)%o],h=l[0]-c[0],d=l[1]-c[1],f=Math.hypot(h,d);if(f<.3)continue;const p=(c[0]+l[0])/2,g=(c[1]+l[1])/2,_=Math.atan2(h,d),m=new ut(new Xt(.03,r,f),e.glassRail);m.position.set(p,r/2,g),m.rotation.y=_,t.add(m);const u=new ut(new Xt(.04,.03,f),e.metal);u.position.set(p,r,g),u.rotation.y=_,t.add(u);const E=Math.max(2,Math.floor(f/1.4)+1);for(let S=0;S<E;S++){const v=E===1?.5:S/(E-1),P=c[0]+h*v,T=c[1]+d*v,A=new ut(new Xt(.04,r,.04),e.metal);A.position.set(P,r/2,T),t.add(A)}n.push({minX:Math.min(c[0],l[0])-.06,maxX:Math.max(c[0],l[0])+.06,minZ:Math.min(c[1],l[1])-.06,maxZ:Math.max(c[1],l[1])+.06})}}function c_(i,t,e,n){const s=i.rooms,r=s.find(_=>_.type==="kitchen")??s.find(_=>/kitchen/i.test(_.name))??(i.id==="penthouse"?s.find(_=>_.id==="lounge"):void 0),o=s.filter(_=>_.type==="bathroom"),a=o.find(_=>/master|ensuite|en-suite|en suite/i.test(`${_.name} ${_.id}`))??o[0],c=s.find(_=>_.type==="terrace")??s.find(_=>_.type==="balcony"),l=[];if(r){let _;i.id==="penthouse"?_="The first-floor plan used for this penthouse has no kitchen; an open kitchen is shown in the family lounge as an approximation.":r.type==="living"&&(_="The 3BHK drawing combines the living room and kitchen in one space. The kitchen finish applies to the open-kitchen run."),l.push({kind:"kitchen",room:r,title:r.type==="living"?"Kitchen (open to living)":"Kitchen",note:_})}if(a&&l.push({kind:"bath",room:a,title:a.name.replace(/\s+area$/,"")||"Bathroom"}),c){const _=c.type==="terrace";l.push({kind:"view",room:c,title:_?"Terrace view":"Balcony view"})}const h=new be({color:"#c4a265",emissive:"#c4a265",emissiveIntensity:.45,metalness:.55,roughness:.28}),d=[],f=i.bounds;let p=(f.min[0]+f.max[0])/2,g=(f.min[1]+f.max[1])/2;if(t){const _=vn(f.min[0],f.min[1],t),m=vn(f.max[0],f.max[1],t);p=(_[0]+m[0])/2,g=(_[1]+m[1])/2}for(const _ of l){const m=Zn(_.room.polygon,t),u=Nn(m),E=e?.5:1.2;let S,v;if(_.kind==="view"){const H=u.cx-p,O=u.cz-g,W=Math.hypot(H,O)||1,q=H/W,k=O/W;S=new L(u.cx-q*.2,1.55,u.cz-k*.2),v=new L(u.cx+q*5,1.35,u.cz+k*5),e&&(S=new L(u.cx-q*2.4,3.2,u.cz-k*2.4),v=new L(u.cx+q*1.5,.8,u.cz+k*1.5))}else if(e)S=new L(u.cx,3.6,u.cz+Math.max(u.d,2)*.65),v=new L(u.cx,.45,u.cz);else{const H=Math.min(Math.max(Math.min(u.w,u.d)*.42,1.35),2.8),O=u.w>=u.d;S=new L(u.cx+(O?H:Math.min(u.w,1.1)*.25),1.55,u.cz+(O?Math.min(u.d,1.1)*.25:H)),v=new L(u.cx,E,u.cz)}const P=new ce,T=new ut(new Ke(.028,.028,.55,10),h);T.position.y=.28;const A=new ut(new Bn(.12,16,16),h);A.position.y=.62;const I=new ut(new Bn(.38,10,10),new On({visible:!1}));I.position.y=.5,P.add(T,A,I),P.position.set(u.cx,.02,u.cz),P.name="hotspot",n.add(P);const w=document.createElement("button");w.type="button",w.className="hotspot-lab",w.textContent=_.title;const M=new zi(w);M.position.set(0,.95,0),P.add(M);const C={id:`${_.kind}-${_.room.id}`,kind:_.kind,title:_.title,roomName:_.room.name,area_m2:_.room.area_m2,note:_.note,position:new L(u.cx,1.2,u.cz),cameraPos:S,lookAt:v,mesh:P,labelEl:w};P.userData.hotspot=C,d.push(C)}return d}const no=1.6,pl=.3,ml=3.4,l_=5.4;class h_{position=new L;yaw=0;pitch=0;enabled=!1;locked=!1;tv=!1;keys=new Set;joy={x:0,y:0};collisions=[];rooms=[];minY=no;walkTarget=null;canvas;onLockChange;skipLockOnce=!1;constructor(t){this.canvas=t,window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKeyUp),t.addEventListener("click",this.requestLock),document.addEventListener("pointerlockchange",this.lockChange),t.addEventListener("mousemove",this.onMouse)}setCollisions(t,e){this.collisions=t,this.rooms=e??[]}spawn(t,e,n,s){const r=this.nearestClear(t,n);this.position.set(r.x,e||no,r.z),this.minY=e||no,this.yaw=s,this.pitch=0,this.walkTarget=null}nearestClear(t,e){if(this.isWalkable(t,e))return{x:t,z:e};const n=[.3,.55,.85,1.2,1.7,2.3,3];for(const s of n)for(let r=0;r<16;r++){const o=r/16*Math.PI*2,a=t+Math.cos(o)*s,c=e+Math.sin(o)*s;if(this.isWalkable(a,c))return{x:a,z:c}}return{x:t,z:e}}isWalkable(t,e){return!(or(this.collisions,t,e,pl)||this.rooms.length&&!ea(this.rooms,t,e,.35))}walkTo(t,e){const n=this.nearestClear(t,e);return this.isWalkable(n.x,n.z)?(this.walkTarget=new L(n.x,this.minY,n.z),!0):!1}cancelWalkTo(){this.walkTarget=null}requestLock=()=>{if(this.skipLockOnce){this.skipLockOnce=!1;return}!this.enabled||this.tv||document.pointerLockElement!==this.canvas&&this.canvas.requestPointerLock().catch(()=>{})};lockChange=()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange?.(this.locked)};setOnLock(t){this.onLockChange=t}onKey=t=>{this.keys.add(t.code),this.enabled&&["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(t.code)&&(t.preventDefault(),this.walkTarget=null)};onKeyUp=t=>{this.keys.delete(t.code)};onMouse=t=>{!this.enabled||!this.locked||(this.yaw-=t.movementX*.0022,this.pitch-=t.movementY*.0022,this.pitch=Math.max(-1.15,Math.min(1.15,this.pitch)))};look(t,e){this.enabled&&(this.yaw-=t*.005,this.pitch-=e*.005,this.pitch=Math.max(-1.15,Math.min(1.15,this.pitch)))}update(t){if(!this.enabled)return;if(this.walkTarget){const h=this.walkTarget.x-this.position.x,d=this.walkTarget.z-this.position.z,f=Math.hypot(h,d);if(f<.1)this.walkTarget=null;else{const p=ml*1.15*t,g=h/f,_=d/f;let u=Math.atan2(-g,-_)-this.yaw;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;this.yaw+=u*Math.min(1,6*t);const E=Math.min(p,f);this.tryMove(g*E,0),this.tryMove(0,_*E),this.position.y=this.minY}return}let e=0,n=0;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(e+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(e-=1),this.keys.has("KeyA")&&(n-=1),this.keys.has("KeyD")&&(n+=1),this.tv||(this.keys.has("ArrowLeft")&&(n-=1),this.keys.has("ArrowRight")&&(n+=1)),e+=-this.joy.y,n+=this.joy.x;const s=Math.hypot(e,n);s>1&&(e/=s,n/=s);const r=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")?l_:ml,o=Math.sin(this.yaw),a=Math.cos(this.yaw),c=(-e*o+n*a)*r*t,l=(-e*a-n*o)*r*t;this.tryMove(c,0),this.tryMove(0,l),this.position.y=this.minY}tryMove(t,e){const n=this.position.x+t,s=this.position.z+e;or(this.collisions,n,s,pl)||this.rooms.length&&!ea(this.rooms,n,s,.35)||(this.position.x=n,this.position.z=s)}apply(t){t.position.copy(this.position),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}dispose(){window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onKeyUp),this.canvas.removeEventListener("click",this.requestLock),document.removeEventListener("pointerlockchange",this.lockChange),this.canvas.removeEventListener("mousemove",this.onMouse),document.pointerLockElement===this.canvas&&document.exitPointerLock()}}function u_(i,t,e){const n=i;let s=null;const r=(a,c,l,h)=>{let f=l-a,p=h-c;const g=Math.hypot(f,p)||1;g>42&&(f=f/g*42,p=p/g*42),t.style.transform=`translate(${f}px, ${p}px)`,e.joy.x=f/42,e.joy.y=p/42,e.cancelWalkTo()},o=()=>{t.style.transform="",e.joy.x=0,e.joy.y=0,s=null};n.addEventListener("pointerdown",a=>{a.stopPropagation(),s=a.pointerId,n.setPointerCapture(a.pointerId);const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,a.clientX,a.clientY)}),n.addEventListener("pointermove",a=>{if(s!==a.pointerId)return;a.stopPropagation();const c=n.getBoundingClientRect();r(c.left+c.width/2,c.top+c.height/2,a.clientX,a.clientY)}),n.addEventListener("pointerup",a=>{a.stopPropagation(),o()}),n.addEventListener("pointercancel",o)}class d_{root;prefs;view={kind:"tower",hoverFloor:null};tv;plans;handlers;time="morning";spec=null;rooms=[];currentRoom=null;tour=null;sheetOpen=!1;revealRoomCard=!1;formOpen=!1;currentUnit="";menuOpen=!1;constructor(t,e,n,s,r){this.root=t,this.prefs={...e},this.plans=n,this.tv=s,this.handlers=r,s&&document.body.classList.add("tv"),this.watchViewport()}watchViewport(){const t=()=>{const e=window.innerWidth<900||window.innerHeight<520;document.body.classList.toggle("compact",e),document.body.classList.toggle("landscape-short",window.innerHeight<520&&window.innerWidth>window.innerHeight),this.syncLayoutVars()};t(),window.addEventListener("resize",t)}setView(t){this.view.kind==="flat"&&(t.kind!=="flat"||t.kind==="flat"&&t.unitId!==this.view.unitId)&&(this.sheetOpen=!1,this.tour=null,this.currentRoom=null,this.rooms=[],t.kind!=="flat"&&(this.spec=null)),this.menuOpen=!1,this.view=t,document.body.classList.toggle("walking",t.kind==="flat"&&t.cam==="walk"),document.body.classList.toggle("in-flat",t.kind==="flat"),document.body.classList.toggle("sheet-open",this.sheetOpen&&t.kind==="flat"),this.render()}setHoverFloor(t){this.view.kind==="tower"&&(this.view={...this.view,hoverFloor:t},this.root.querySelectorAll(".chip-row [data-floor]").forEach(e=>{e.classList.toggle("hov",Number(e.dataset.floor)===t)}))}setTime(t){this.time=t,this.render()}setRooms(t,e){this.rooms=t,e!==void 0&&(this.currentRoom=e),this.render()}setCurrentRoom(t,e=!0){this.currentRoom=t,this.revealRoomCard=!!t&&e,this.revealRoomCard&&(this.sheetOpen=!0),this.render()}setTour(t){this.tour=t,t?.active&&(this.sheetOpen=!0),this.render()}setSheet(t){this.sheetOpen=t,this.render()}showSpec(t){this.spec=t,this.currentRoom=null,this.revealRoomCard=!1,this.view.kind==="flat"&&(this.sheetOpen=!0),this.render()}closeSpec(){this.spec=null,this.render(),this.handlers.onCloseSpec?.()}toast(t){let e=this.root.querySelector(".toast");e||(e=document.createElement("div"),e.className="toast",this.root.appendChild(e)),e.textContent=t,e.classList.add("show"),this.syncLayoutVars(),setTimeout(()=>e&&e.classList.remove("show"),3200)}render(){const t=this.view;this.root.innerHTML="",this.root.appendChild(this.topbar()),this.menuOpen&&this.root.appendChild(this.overflowMenu()),t.kind==="tower"?this.root.appendChild(this.floorsDock()):t.kind==="floor"?this.root.appendChild(this.unitsDock()):this.root.appendChild(this.flatSheet()),this.root.appendChild(this.zoomStack());const e=document.createElement("div");e.className="joy-wrap",e.innerHTML='<div class="joy-base" id="joy-base"><div class="joy-knob" id="joy-knob"></div></div>',this.root.appendChild(e);const n=document.createElement("div");n.className="crosshair",n.setAttribute("aria-hidden","true"),this.root.appendChild(n),this.formOpen&&this.root.appendChild(this.form());const s=document.createElement("div");s.className="toast",this.root.appendChild(s),document.body.classList.toggle("sheet-open",this.sheetOpen&&t.kind==="flat"),document.body.classList.toggle("form-open",this.formOpen),this.syncLayoutVars()}syncLayoutVars(){requestAnimationFrame(()=>{const t=this.root.querySelector(".topbar"),e=this.root.querySelector(".dock, .sheet"),n=t?Math.ceil(t.getBoundingClientRect().height):52;let s=0;const r=window.innerHeight<520&&window.innerWidth>window.innerHeight;document.body.classList.toggle("landscape-short",r);const o=window.matchMedia("(min-width: 900px) and (min-height: 560px)").matches,a=r&&this.sheetOpen||o&&this.view.kind==="flat",c=o&&this.view.kind==="tower";if(e&&getComputedStyle(e).display!=="none"&&!a&&!c){s=Math.ceil(e.getBoundingClientRect().height);const h=Math.round(window.innerHeight*.38);r&&s>h&&(s=16)}else(a||c)&&(s=16);const l=document.documentElement;l.style.setProperty("--topbar-h",`${n}px`),l.style.setProperty("--dock-h",`${s}px`)})}topbar(){const t=document.createElement("header");t.className="topbar";const n=this.view.kind==="tower",s=this.hereLabel();return t.innerHTML=`
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
          <div class="crumb-now" title="${we(s)}">${we(s)}</div>
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
    `,t.querySelector(".crumbs-full").appendChild(this.crumbsFull()),t.querySelector(".back").addEventListener("click",()=>this.goBack()),t.querySelector(".menu-btn").addEventListener("click",()=>{this.menuOpen=!this.menuOpen,this.render()}),t.querySelectorAll("[data-action=book], [data-action=book-full]").forEach(o=>o.addEventListener("click",()=>this.openForm())),t}hereLabel(){const t=this.view;if(t.kind==="tower")return"Sample Tower";if(t.kind==="floor")return Jr(t.floor);const e=this.planForUnit(t.unitId);return`${t.unitId} ${e?.name??""}`.trim()}crumbsFull(){const t=document.createElement("div");t.className="crumbs-inner";const e=this.view,n=(r,o,a=!1)=>{if(a){const c=document.createElement("span");c.className="crumb-here",c.textContent=r,t.appendChild(c)}else{const c=document.createElement("button");c.type="button",c.textContent=r,c.addEventListener("click",o),t.appendChild(c)}},s=()=>{const r=document.createElement("span");r.className="crumb-sep",r.textContent="›",t.appendChild(r)};if(n("Tower",()=>this.handlers.onGotoTower(),e.kind==="tower"),(e.kind==="floor"||e.kind==="flat")&&(s(),n(Jr(e.floor),()=>this.handlers.onGotoFloor(e.floor),e.kind==="floor")),e.kind==="flat"){s();const r=this.planForUnit(e.unitId);n(`${e.unitId} ${r?.name??""}`.trim(),()=>{},!0)}return t}goBack(){const t=this.view;if(this.formOpen){this.closeForm();return}if(this.menuOpen){this.menuOpen=!1,this.render();return}if(this.tour?.active){this.handlers.onTour?.("stop");return}if(this.sheetOpen){this.sheetOpen=!1,this.spec=null,this.currentRoom=null,this.render(),this.handlers.onCloseSpec?.();return}if(this.spec||this.currentRoom){this.spec=null,this.currentRoom=null,this.render(),this.handlers.onCloseSpec?.();return}if(t.kind==="flat"&&t.cam==="walk"){this.handlers.onCam("dollhouse");return}if(t.kind==="flat"){this.handlers.onGotoFloor(t.floor);return}t.kind==="floor"&&this.handlers.onGotoTower()}overflowMenu(){const t=document.createElement("div");t.className="menu-pop",t.setAttribute("role","dialog"),t.setAttribute("aria-label","Time of day");const e=document.createElement("div");e.className="menu-k",e.textContent="Time of day",t.appendChild(e);const n=[{id:"morning",label:"Morning"},{id:"golden",label:"Golden hour"},{id:"night",label:"Night"}];for(const r of n){const o=document.createElement("button");o.type="button",o.dataset.time=r.id,o.dataset.tv=`time-${r.id}`,o.className=this.time===r.id?"on":"",o.setAttribute("aria-pressed",String(this.time===r.id)),o.textContent=r.label,o.addEventListener("click",()=>{this.menuOpen=!1,this.handlers.onTime(r.id)}),t.appendChild(o)}if(this.tv){const r=document.createElement("div");r.className="tv-badge",r.textContent="TV / kiosk mode",t.appendChild(r)}const s=document.createElement("p");return s.className="menu-hint",s.innerHTML=this.hintText(),t.appendChild(s),t}floorsDock(){const t=document.createElement("div");t.className="dock floors-dock";const e=document.createElement("div");e.className="chip-row",e.setAttribute("role","listbox"),e.setAttribute("aria-label","Floors");const n=this.view.kind==="tower"?this.view.hoverFloor:null;for(let s=1;s<=Qs+1;s++){const r=document.createElement("button");r.type="button",r.dataset.floor=String(s),r.dataset.tv=`floor-${s}`,r.setAttribute("role","option"),s===ei?(r.innerHTML='<span class="ph">PH</span>',r.title="Penthouse"):(r.innerHTML=`<span class="chip-lg">${s}</span>`,r.title=`Floor ${s}`),n===s&&r.classList.add("hov"),r.addEventListener("mouseenter",()=>this.setHoverFloor(s)),r.addEventListener("click",()=>this.handlers.onGotoFloor(s)),e.appendChild(r)}return t.appendChild(e),t.appendChild(this.dockHint(this.hintText())),t.appendChild(this.disclaimerEl()),t}unitsDock(){const t=document.createElement("div");t.className="dock units-dock";const e=this.view;if(e.kind!=="floor")return t;const n=document.createElement("div");n.className="chip-row unit-row",n.setAttribute("role","listbox"),n.setAttribute("aria-label","Flats on this floor");const s=tr(e.floor);for(const r of s){const o=es(e.floor,r.suffix),a=this.plans[r.planId],c=document.createElement("button");c.type="button",c.className="unit-chip",c.dataset.unit=o,c.dataset.tv=`unit-${o}`,e.hoverUnit===o&&c.classList.add("hov"),c.innerHTML=`<span class="chip-lg">${o}</span>
        <span class="chip-sub">${r.typeLabel}<br>${hh(a)}</span>`,c.addEventListener("click",()=>this.handlers.onGotoUnit(e.floor,o)),n.appendChild(c)}return t.appendChild(n),t.appendChild(this.dockHint(this.hintText())),t.appendChild(this.disclaimerEl()),t}roomDock(){const t=document.createElement("div");t.className="room-dock";const e=document.createElement("div");e.className="chip-row room-row",e.setAttribute("role","listbox"),e.setAttribute("aria-label","Rooms");const n=document.createElement("button");n.type="button",n.className="room-chip tour-btn"+(this.tour?.active?" on":""),n.dataset.tv="tour",n.dataset.action="tour",n.textContent=this.tour?.active?"End tour":"Tour",n.addEventListener("click",()=>{this.handlers.onTour?.(this.tour?.active?"stop":"start")}),e.appendChild(n);for(const s of this.rooms){const r=document.createElement("button");r.type="button",r.className="room-chip"+(this.currentRoom===s.id?" on":""),r.dataset.room=s.id,r.dataset.tv=`room-${s.id}`,r.textContent=s.short,r.title=s.name,r.addEventListener("click",()=>this.handlers.onRoom?.(s.id)),e.appendChild(r)}return t.appendChild(e),t}tourCard(t){const e=document.createElement("aside");e.className="tour-card";const n=this.rooms.length,s=this.tour?.index??0,r=this.tour?.playing??!1,o=Math.round(t.area_m2*10.7639),a=ol(t,this.prefs).map(c=>`<p class="spec-fin"><span>${we(c.label)}</span><b>${we(c.value)}</b></p>`).join("");return e.innerHTML=`
      <div class="tour-k">Guided tour · ${s+1} of ${n}</div>
      <h2>${we(t.name)}</h2>
      <p class="spec-area">${t.area_m2.toFixed(1)} m² · ${o.toLocaleString("en-IN")} sq ft</p>
      ${a}
      ${t.note?`<p class="spec-note">${we(t.note)}</p>`:""}
      <div class="tour-nav">
        <button type="button" data-act="prev" data-tv="tour-prev" ${s<=0?"disabled":""}>Back</button>
        <button type="button" data-act="toggle" data-tv="tour-play">${r?"Pause":"Play"}</button>
        <button type="button" class="cta" data-act="next" data-tv="tour-next">${s>=n-1?"Done":"Next"}</button>
      </div>
    `,e.querySelector("[data-act=prev]").addEventListener("click",()=>this.handlers.onTour?.("prev")),e.querySelector("[data-act=toggle]").addEventListener("click",()=>this.handlers.onTour?.("toggle")),e.querySelector("[data-act=next]").addEventListener("click",()=>this.handlers.onTour?.("next")),e}roomCard(t,e){const n=document.createElement("aside");n.className="tour-card room-info";const s=Math.round(t.area_m2*10.7639),r=ol(t,this.prefs).map(o=>`<p class="spec-fin"><span>${we(o.label)}</span><b>${we(o.value)}</b></p>`).join("");return n.innerHTML=`
      ${e?'<button type="button" class="spec-close" aria-label="Close" data-tv="spec-close">×</button>':""}
      <div class="tour-k">${we(t.short)}</div>
      <h2>${we(t.name)}</h2>
      <p class="spec-area">${t.area_m2.toFixed(1)} m² · ${s.toLocaleString("en-IN")} sq ft</p>
      ${r}
      ${t.note?`<p class="spec-note">${we(t.note)}</p>`:""}
    `,n.querySelector(".spec-close")?.addEventListener("click",()=>{this.revealRoomCard=!1,this.render()}),n}specCard(t){const e=document.createElement("aside");e.className="tour-card room-info";const n=Math.round(t.area_m2*10.7639);return e.innerHTML=`
      <button type="button" class="spec-close" aria-label="Close" data-tv="spec-close">×</button>
      <div class="tour-k">${t.kind==="kitchen"?"Kitchen":t.kind==="bath"?"Bathroom":"Outlook"}</div>
      <h2>${we(t.title)}</h2>
      <p class="spec-area">${t.area_m2.toFixed(1)} m² · ${n.toLocaleString("en-IN")} sq ft · as labelled on the drawing</p>
      ${this.specFinish(t)}
      ${t.note?`<p class="spec-note">${we(t.note)}</p>`:""}
    `,e.querySelector(".spec-close").addEventListener("click",()=>this.closeSpec()),e}specFinish(t){const e={white:"White",walnut:"Walnut",black:"Matte black",granite:"Granite"},n={marble:"Marble",wood:"Wood",tile:"Tile"};return t.kind==="kitchen"?`<p class="spec-fin"><span>Cabinets &amp; counter</span><b>${e[this.prefs.kitchen]}</b></p>`:t.kind==="bath"?`<p class="spec-fin"><span>Floor</span><b>${n[this.prefs.flooring]}</b></p>`:`<p class="spec-fin"><span>From the plan</span><b>${we(t.roomName)}</b></p>`}flatSheet(){const t=document.createElement("aside");t.className="sheet"+(this.sheetOpen?" open":""),t.setAttribute("aria-label","Your preferences");const e=document.createElement("button");e.type="button",e.className="sheet-handle",e.setAttribute("aria-label",this.sheetOpen?"Collapse preferences":"Expand preferences"),e.addEventListener("click",()=>this.toggleSheet()),t.appendChild(e);const n=document.createElement("div");n.className="sheet-peek";const s=document.createElement("div");s.className="seg cam-seg";const r=this.view.kind==="flat"&&this.view.cam==="walk";s.innerHTML=`
      <button type="button" data-cam="dollhouse" data-tv="cam-dollhouse" class="${r?"":"on"}" aria-pressed="${!r}">Dollhouse</button>
      <button type="button" data-cam="walk" data-tv="cam-walk" class="${r?"on":""}" aria-pressed="${r}">Walk</button>
    `,s.querySelectorAll("[data-cam]").forEach(l=>l.addEventListener("click",()=>this.handlers.onCam(l.dataset.cam))),n.appendChild(s);const o=document.createElement("button");o.type="button",o.className="sheet-toggle"+(this.sheetOpen?" on":""),o.dataset.tv="finishes",o.setAttribute("aria-expanded",String(this.sheetOpen)),o.textContent=this.sheetOpen?"Close":"Your preferences",o.addEventListener("click",()=>this.toggleSheet()),n.appendChild(o),t.appendChild(n),this.rooms.length&&t.appendChild(this.roomDock());const a=document.createElement("div");if(a.className="sheet-info",this.tour?.active&&this.rooms[this.tour.index])a.appendChild(this.tourCard(this.rooms[this.tour.index]));else if(this.revealRoomCard&&this.currentRoom){const l=this.rooms.find(h=>h.id===this.currentRoom);l&&a.appendChild(this.roomCard(l,!0))}else this.spec&&a.appendChild(this.specCard(this.spec));a.childNodes.length&&t.appendChild(a);const c=document.createElement("div");return c.className="sheet-body",c.appendChild(this.prefsForm()),t.appendChild(c),t.appendChild(this.disclaimerEl()),t}toggleSheet(){this.sheetOpen=!this.sheetOpen,this.render()}prefsForm(){const t=document.createElement("div");t.className="prefs",t.innerHTML=`
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
    `,t.querySelectorAll("[data-style]").forEach(n=>n.addEventListener("click",()=>{const s=n.dataset.style,r=ss[s];this.prefs={...this.prefs,style:s,flooring:r.flooring,wallColor:r.wall,kitchen:r.kitchen},this.handlers.onPrefs(this.prefs),this.render()})),t.querySelectorAll("[data-flooring]").forEach(n=>n.addEventListener("click",()=>{this.prefs={...this.prefs,flooring:n.dataset.flooring},this.handlers.onPrefs(this.prefs),this.render()})),t.querySelectorAll("[data-kitchen]").forEach(n=>n.addEventListener("click",()=>{this.prefs={...this.prefs,kitchen:n.dataset.kitchen},this.handlers.onPrefs(this.prefs),this.render()}));const e=t.querySelector(".swatches");for(const n of Tg){const s=document.createElement("button");s.className="swatch"+(this.prefs.wallColor.toLowerCase()===n.color.toLowerCase()?" on":""),s.style.background=n.color,s.title=n.name,s.type="button",s.dataset.tv=`wall-${n.id}`,s.addEventListener("click",()=>{this.prefs={...this.prefs,wallColor:n.color},this.handlers.onPrefs(this.prefs),this.render()}),e.appendChild(s)}return t.querySelector("#fur").addEventListener("change",n=>{this.prefs={...this.prefs,furniture:n.target.checked},this.handlers.onPrefs(this.prefs)}),t}segBtn(t,e,n){const s=t==="style"&&this.prefs.style===e||t==="flooring"&&this.prefs.flooring===e||t==="kitchen"&&this.prefs.kitchen===e;return`<button type="button" data-${t}="${e}" data-tv="${t}-${e}" class="${s?"on":""}" aria-pressed="${s}">${n}</button>`}zoomStack(){const t=document.createElement("div");return t.className="zoom-stack",t.innerHTML=`
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
    `,t.querySelector("[data-z=in]").addEventListener("click",()=>this.handlers.onZoom?.(-1)),t.querySelector("[data-z=out]").addEventListener("click",()=>this.handlers.onZoom?.(1)),this.view.kind==="flat"&&this.view.cam==="walk"&&(t.hidden=!0),t}hintText(){return this.tv?this.view.kind==="tower"?"<b>TV remote</b> · ↑ ↓ a floor · <kbd>Enter</kbd> open · <kbd>Esc</kbd> back":this.view.kind==="floor"?"<b>TV remote</b> · ← → a flat · <kbd>Enter</kbd> open · <kbd>Esc</kbd> back":this.view.kind==="flat"&&this.view.cam==="walk"?"<b>TV remote</b> · ↑ walk · ↓ back · ← → rooms · <kbd>Enter</kbd> dollhouse · <kbd>Esc</kbd> back":"<b>TV remote</b> · ← → rooms · <kbd>Enter</kbd> walk through · <kbd>Esc</kbd> back":this.view.kind==="tower"?"Drag to orbit. Tap a floor to go in.":this.view.kind==="floor"?"Tap a flat to open it. Drag to orbit.":this.view.kind==="flat"&&this.view.cam==="walk"?"Tap a room to fly there. Use the joystick to walk, drag to look.":"Drag to orbit. Tap a room to walk in, or Guided tour to play through each one."}dockHint(t){const e=document.createElement("p");return e.className="dock-hint",e.innerHTML=t,e}disclaimerEl(){const t=document.createElement("p");return t.className="disclaimer",t.textContent="Illustrative visualisation, not the finished unit. Sample tower for Lead Setu — not a real project.",t}planForUnit(t){return t.endsWith("PH")?this.plans.penthouse:t.endsWith("C")?this.plans["3bhk"]:this.plans["2bhk"]}openForm(){this.currentUnit=this.unitOfInterest(),this.formOpen=!0,this.menuOpen=!1,this.render(),this.root.querySelector("#lead-name")?.focus()}closeForm(){this.formOpen=!1,this.render()}unitOfInterest(){const t=this.view;if(t.kind==="flat"){const e=this.planForUnit(t.unitId);return`${t.unitId} ${e?.name??""}`.trim()}return t.kind==="floor"?Jr(t.floor):"Sample Tower (floor not chosen)"}form(){const t=document.createElement("div");return t.className="modal-bg",t.innerHTML=`
      <form class="modal" data-tv-root="form">
        <h2>Book a site visit</h2>
        <p>Leave your name and phone. In the product, this creates a lead in Lead Setu. This demo stores it only in your browser.</p>
        <label for="lead-name">Name</label>
        <input id="lead-name" name="name" required autocomplete="name" data-tv="name"/>
        <label for="lead-phone">Phone</label>
        <input id="lead-phone" name="phone" required inputmode="tel" autocomplete="tel" data-tv="phone"/>
        <label for="lead-unit">Unit of interest</label>
        <input id="lead-unit" name="unit" value="${we(this.currentUnit)}" data-tv="unit"/>
        <div class="row">
          <button type="button" class="ghost" data-action="cancel">Cancel</button>
          <button type="submit" class="cta" data-tv="submit">Send request</button>
        </div>
        <p class="hint-api">TODO: POST this payload to the Lead Setu API (name, phone, project, unit, session id) and hand the lead to the existing follow-up pipeline.</p>
      </form>
    `,t.addEventListener("click",e=>{e.target===t&&this.closeForm()}),t.querySelector("[data-action=cancel]").addEventListener("click",()=>this.closeForm()),t.querySelector("form").addEventListener("submit",e=>{e.preventDefault();const n=new FormData(e.target),s=String(n.get("name")||"").trim(),r=String(n.get("phone")||"").trim(),o=String(n.get("unit")||"").trim();!s||!r||(this.closeForm(),this.handlers.onBook({name:s,phone:r,unit:o}))}),t}}function we(i){return i.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function gl(i){const t="leadsetu-3d-demo-leads",e=JSON.parse(localStorage.getItem(t)||"[]"),n={...i,project:"Lead Setu Sample Tower",at:new Date().toISOString()};return e.push(n),localStorage.setItem(t,JSON.stringify(e)),console.info("[Lead Setu demo] site-visit request (local only)",n),n}const _l=5,vl=10;function f_(i,t,e,n){t.touches.ONE=en.ROTATE,t.touches.TWO=en.DOLLY_PAN;let s="none";const r=new Map;let o={x:0,y:0,dist:0,midX:0,midY:0},a={x:0,y:0,dist:0,midX:0,midY:0};const c=new Ko,l=new L;function h(){l.copy(e.position).sub(t.target),c.setFromVector3(l)}function d(){c.makeSafe(),c.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,c.phi)),c.radius=Math.max(t.minDistance,Math.min(t.maxDistance,c.radius)),l.setFromSpherical(c),e.position.copy(t.target).add(l),e.lookAt(t.target),t.update()}function f(u){n.isWalk()||(h(),c.radius*=u<0?.82:1.22,d())}function p(){const u=[...r.values()];if(u.length<2)return{dist:0,midX:0,midY:0};const E=u[1].x-u[0].x,S=u[1].y-u[0].y;return{dist:Math.hypot(E,S),midX:(u[0].x+u[1].x)/2,midY:(u[0].y+u[1].y)/2}}const g=u=>{if(n.isUiTarget(u.target)){r.size===0&&(s="blocked");return}if(u.pointerType!=="mouse"){if(r.set(u.pointerId,{x:u.clientX,y:u.clientY}),r.size===1)s="pending",o={x:u.clientX,y:u.clientY,dist:0,midX:u.clientX,midY:u.clientY},a={...o},t.enabled=!1;else if(r.size===2){const E=p();o={x:E.midX,y:E.midY,dist:E.dist,midX:E.midX,midY:E.midY},a={...o},s="pending",t.enabled=!1}}},_=u=>{if(!r.has(u.pointerId)||s==="blocked")return;if(r.set(u.pointerId,{x:u.clientX,y:u.clientY}),n.isWalk()){if(r.size===1){const P=u.clientX-a.x,T=u.clientY-a.y,A=Math.hypot(u.clientX-o.x,u.clientY-o.y);s==="pending"&&A>_l&&(s="look",n.walker.cancelWalkTo()),s==="look"&&n.walker.look(P,T),a={...a,x:u.clientX,y:u.clientY}}return}if(r.size>=2){const P=p(),T=Math.abs(P.dist-o.dist),A=Math.hypot(P.midX-o.midX,P.midY-o.midY);if(s==="pending"&&(T>vl||A>vl)&&(s=T>=A*.85?"pinch":"pan",h()),s==="pinch"){if(a.dist>1&&P.dist>1){const I=a.dist/P.dist;c.radius*=I,d()}}else if(s==="pan"){const I=P.midX-a.midX,w=P.midY-a.midY,C=e.position.distanceTo(t.target)*.0022,H=new L,O=new L,W=new L;e.matrix.extractBasis(H,O,W),t.target.addScaledVector(H,-I*C),t.target.addScaledVector(O,w*C),d()}a={x:P.midX,y:P.midY,dist:P.dist,midX:P.midX,midY:P.midY};return}const E=u.clientX-a.x,S=u.clientY-a.y,v=Math.hypot(u.clientX-o.x,u.clientY-o.y);s==="pending"&&v>_l&&(s="orbit",h()),s==="orbit"&&(c.theta-=E*.0055,c.phi-=S*.0055,d()),a={...a,x:u.clientX,y:u.clientY}},m=u=>{if(!(u.pointerType==="mouse"&&s!=="blocked")){if(r.delete(u.pointerId),r.size===0)s="none",n.isWalk()||(t.enabled=!0);else if(r.size===1){const E=[...r.values()][0];o={x:E.x,y:E.y,dist:0,midX:E.x,midY:E.y},a={...o},s="pending"}}};return i.addEventListener("pointerdown",g,{capture:!0}),window.addEventListener("pointermove",_),window.addEventListener("pointerup",m),window.addEventListener("pointercancel",m),{zoom:f,dispose(){i.removeEventListener("pointerdown",g,{capture:!0}),window.removeEventListener("pointermove",_),window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m)}}}function xl(i){return i instanceof Element?!!i.closest("#ui, .hotspot-lab, .unit-card, .unit-chip, button, input, a, .sheet, .dock, .topbar, .modal-bg, .menu-pop, .tour-card, .spec-card, .joy-wrap, .zoom-stack"):!1}const p_={style:"modern",flooring:ss.modern.flooring,wallColor:ss.modern.wall,kitchen:ss.modern.kitchen,furniture:!0},m_=4200;async function g_(){const i="./",[t,e,n]=await Promise.all([fetch(`${i}data/2bhk.json`).then(s=>s.json()),fetch(`${i}data/3bhk.json`).then(s=>s.json()),fetch(`${i}data/penthouse.json`).then(s=>s.json())]);return{"2bhk":t,"3bhk":e,penthouse:n}}class __{engine;mats;plans;tower;walker;hud;gestures;tv;prefs={...p_};view={kind:"tower",hoverFloor:null};interiors=[];unitLabels=[];world=new ce;interiorRoot=new ce;ray=new ig;pointer=new rt;dragging=!1;downXY={x:0,y:0};roomLights=[];time="morning";flying=!1;roomStops=[];currentRoom=null;tour=null;tourTimer=null;constructor(){const t=new URLSearchParams(location.search);this.tv=t.get("tv")==="1"||t.get("tv")==="true"}async start(){const t=document.getElementById("scene"),e=document.getElementById("labels"),n=document.getElementById("ui");Xs(.05),this.engine=yg(t,e),this.mats=await bg(this.engine.renderer,o=>Xs(.05+o*.75)),this.plans=await g_(),Xs(.88),this.engine.scene.add(this.world),this.engine.scene.add(this.interiorRoot),this.tower=Dg(this.mats),this.world.add(this.tower.group),this.walker=new h_(t),this.walker.tv=this.tv,this.gestures=f_(t,this.engine.orbit,this.engine.camera,{isWalk:()=>this.view.kind==="flat"&&this.view.cam==="walk"&&!this.flying,walker:this.walker,isUiTarget:xl}),this.hud=new d_(n,this.prefs,this.plans,this.tv,{onGotoTower:()=>this.showTower(),onGotoFloor:o=>this.showFloor(o),onGotoUnit:(o,a)=>this.showFlat(o,a,"dollhouse"),onCam:o=>{this.view.kind==="flat"&&this.showFlat(this.view.floor,this.view.unitId,o)},onPrefs:o=>this.setPrefs(o),onBook:o=>{gl(o),this.hud.toast("Request saved on this device. A sales executive would follow up in Lead Setu.")},onTime:o=>this.setTime(o),onRoom:o=>{this.stopTour(!1),this.goRoom(o)},onTour:o=>this.handleTour(o),onZoom:o=>this.gestures.zoom(o)}),this.bindPointer(t),this.bindKeys(),this.showTower(!1),this.hud.setView(this.view);const s=()=>{const o=document.getElementById("joy-base"),a=document.getElementById("joy-knob");o&&a&&!o.dataset.ready&&(o.dataset.ready="1",u_(o,a,this.walker))};new MutationObserver(s).observe(n,{childList:!0,subtree:!0}),s(),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch"),M_(),Xs(1),y_(),this.engine.start(o=>this.tick(o),()=>this.afterRender()),this.exposeApi()}setTime(t){this.time=t,this.hud.setTime(t),this.applySceneTime()}applySceneTime(){wg(this.engine,this.time),this.tower.setTime(this.time);for(const s of this.interiors)s.setTime(this.time);const t=this.time==="night",e=this.time==="golden",n=this.view.kind==="flat"&&this.view.cam==="walk";for(const s of this.roomLights)s instanceof Zo?t?(s.color.set("#2a3a58"),s.groundColor.set("#161018"),s.intensity=.16):e?(s.color.set("#ffd9a8"),s.groundColor.set("#8a5a38"),s.intensity=n?.5:.35):(s.color.set("#f4efe6"),s.groundColor.set("#8a7a68"),s.intensity=n?.9:.45):s instanceof sr&&(s.intensity=t?.06:e?n?.35:.55:n?.55:.9,s.color.set(t?"#a0b4e0":e?"#ffb060":"#fff4df"))}tick(t){this.flying||(this.view.kind==="flat"&&this.view.cam==="walk"?(this.engine.orbit.enabled=!1,this.walker.update(t),this.walker.apply(this.engine.camera)):this.flying||(this.engine.orbit.enabled=!0))}afterRender(){this.syncHotspotLabels()}syncHotspotLabels(){const t=this.interiors;if(!t.length)return;const e=document.body.classList.contains("compact"),n=this.engine.camera,s=window.innerWidth,r=window.innerHeight,o=this.chromeRects();for(const a of t)for(const c of a.hotspots){const l=c.labelEl;if(!l)continue;if(e){l.classList.add("is-hidden");continue}const h=c.position;if(h.clone().applyMatrix4(n.matrixWorldInverse).z>-.15){l.classList.add("is-hidden");continue}const f=h.clone().project(n);if(f.z<-1||f.z>1){l.classList.add("is-hidden");continue}let p=(f.x*.5+.5)*s,g=(-f.y*.5+.5)*r;const _=10;if(p<-30||g<-20||p>s+30||g>r+20){l.classList.add("is-hidden");continue}const u=h.clone().sub(n.position),E=u.length();u.multiplyScalar(1/(E||1)),this.ray.set(n.position,u);const S=[];if(a.group.traverse(w=>{w instanceof ut&&w.name!=="hotspot"&&!w.name.startsWith("studio")&&S.push(w)}),this.ray.intersectObjects(S,!0).some(w=>w.distance<E-.45&&!v_(w.object))){l.classList.add("is-hidden");continue}const T=l.offsetWidth||80,A=l.offsetHeight||22;p=Math.max(_+T/2,Math.min(s-_-T/2,p)),g=Math.max(_+A/2,Math.min(r-_-A/2,g));const I={x:p-T/2,y:g-A/2,w:T,h:A};if(o.some(w=>x_(I,w))){l.classList.add("is-hidden");continue}l.classList.remove("is-hidden")}}chromeRects(){return[...this.hud.root.querySelectorAll(".topbar, .sheet, .room-dock, .dock, .tour-card, .menu-pop, .modal-bg, .zoom-stack, .joy-wrap")].flatMap(e=>{const n=getComputedStyle(e);if(n.display==="none"||n.visibility==="hidden")return[];const s=e.getBoundingClientRect();return s.width<4||s.height<4?[]:[{x:s.x,y:s.y,w:s.width,h:s.height}]})}clearInteriors(){for(const t of this.interiors)t.dispose();this.interiors=[];for(const t of this.unitLabels)t.element?.remove(),t.removeFromParent();this.unitLabels=[];for(const t of this.roomLights)t.removeFromParent();this.roomLights=[],this.interiorRoot.clear()}setPrefs(t){this.prefs=t;for(const e of this.interiors)e.applyPrefs(t);if(this.view.kind==="flat"){const{floor:e,unitId:n,cam:s}=this.view,r=this.currentRoom;this.showFlat(e,n,s,!0).then(()=>{r&&this.hud.setCurrentRoom(r)})}else this.view.kind==="floor"&&this.showFloor(this.view.floor,!0)}async showTower(t=!0){this.stopTour(!0),this.walker.enabled=!1,Kr(),document.pointerLockElement&&document.exitPointerLock(),this.clearInteriors(),this.roomStops=[],this.currentRoom=null,this.world.visible=!0,this.tower.setIsolated(null),this.tower.highlight(null),this.hud.spec=null,this.view={kind:"tower",hoverFloor:null},this.hud.setView(this.view),this.applySceneTime();const[e,n]=Kc(),s=new L(38,30,42),r=new L(e,10,n);t?await Vs(this.engine.camera,this.engine.orbit,s,r,1.1):(this.engine.camera.position.copy(s),this.engine.orbit.target.copy(r),this.engine.orbit.update())}async showFloor(t,e=!1){this.stopTour(!0),this.walker.enabled=!1,Kr(),document.pointerLockElement&&document.exitPointerLock(),this.clearInteriors(),this.roomStops=[],this.currentRoom=null,this.world.visible=!0,this.tower.setIsolated(t),this.tower.highlight(t),this.hud.spec=null,this.view={kind:"floor",floor:t,hoverUnit:null},this.hud.setView(this.view),this.applySceneTime();const n=ya(t),s=tr(t);for(const a of s){const c=this.plans[a.planId],l=dl(c,this.prefs,this.mats,{transform:a.transform,showCeiling:!1,y:n,cutaway:!0});l.group.userData.unitId=es(t,a.suffix),l.group.userData.slot=a,this.interiorRoot.add(l.group),this.interiors.push(l);const h=document.createElement("button");h.type="button",h.className="unit-card",h.innerHTML=`<div class="u-id">${es(t,a.suffix)}</div>
        <div class="u-meta">${a.typeLabel}<br>${hh(c)}</div>`,h.addEventListener("click",_=>{_.stopPropagation(),this.showFlat(t,es(t,a.suffix),"dollhouse")});const d=new zi(h),f=a.transform,[p,g]=[f.ox+f.width/2,f.oz+f.depth/2];d.position.set(p,n+2.2,g),this.interiorRoot.add(d),this.unitLabels.push(d)}const r=document.createElement("div");r.className="unit-card",r.style.pointerEvents="none",r.innerHTML='<div class="u-meta">Lifts &amp; stairs</div>';const o=new zi(r);if(o.position.set(Ne.x+Ne.w/2,n+1.6,Ne.z+Ne.d/2),this.interiorRoot.add(o),this.unitLabels.push(o),!e){const[a,c]=Kc();await Vs(this.engine.camera,this.engine.orbit,new L(a+.8,n+28,c+4.5),new L(a,n+.2,c),1)}}async showFlat(t,e,n,s=!1,r,o={}){document.pointerLockElement&&n!=="walk"&&document.exitPointerLock();const a=this.walker.position.clone(),c=this.walker.yaw,l=this.hud.spec?.id??null,h=this.currentRoom;this.clearInteriors(),this.world.visible=!1,this.tower.setIsolated(null),this.tower.highlight(null),this.view={kind:"flat",floor:t,unitId:e,cam:n},this.hud.setView(this.view);const d=e.replace(/^\d+/,""),f=tr(t),p=f.find(P=>P.suffix===d)??f[0],g=this.plans[p.planId],_=dl(g,this.prefs,this.mats,{transform:p.transform,showCeiling:n==="walk",y:0,cutaway:n==="dollhouse",hotspots:!0});if(this.interiorRoot.add(_.group),this.interiors.push(_),this.roomStops=_.rooms,n==="dollhouse"){const P=new ut(new _a(48,48),new be({color:this.time==="night"?"#1a1e28":this.time==="golden"?"#c9a078":"#d8d2c6",roughness:.95,metalness:0}));P.rotation.x=-Math.PI/2,P.position.y=-.04,P.receiveShadow=!0,P.name="studio-ground",this.interiorRoot.add(P)}const m=new Zo("#f4efe6","#8a7a68",n==="walk"?.9:.45);this.interiorRoot.add(m),this.roomLights.push(m);const u=new sr("#fff4df",n==="walk"?.55:.9);u.position.set(8,12,6),u.castShadow=n==="dollhouse"&&!this.engine.mobile,this.interiorRoot.add(u),this.roomLights.push(u),this.applySceneTime();for(const P of _.hotspots)P.labelEl?.addEventListener("click",T=>{T.preventDefault(),T.stopPropagation(),this.openHotspot(P)});if(l){const P=_.hotspots.find(T=>T.id===l);P?this.hud.showSpec(P):this.hud.spec=null}this.hud.setRooms(this.roomStops,h);const E=p.transform,S=E.ox+E.width/2,v=E.oz+E.depth/2;if(n==="walk"){if(this.walker.setCollisions(_.collisions,_.worldRooms),o.skipSpawn)this.walker.enabled=!1;else{let P=r?.x??_.spawn.x,T=r?.z??_.spawn.z,A=r?.yaw??_.spawn.yaw;s&&!r&&a.y>.5&&this.walker.isWalkable(a.x,a.z)&&(P=a.x,T=a.z,A=c),this.walker.spawn(P,1.6,T,A),this.walker.apply(this.engine.camera),this.walker.enabled=!0}if(this.engine.orbit.enabled=!1,!this.currentRoom&&!o.skipSpawn){const P=this.roomStops.find(T=>T.type==="foyer")??this.roomStops[0];P&&(this.currentRoom=P.id,this.hud.setCurrentRoom(P.id,!1))}}else this.walker.enabled=!1,this.engine.orbit.enabled=!0,s||await Vs(this.engine.camera,this.engine.orbit,new L(S+8,g.wallHeight+7,v+9),new L(S,1,v),.9)}cameraYaw(){const t=new L;return this.engine.camera.getWorldDirection(t),Math.atan2(-t.x,-t.z)}cameraPitch(){return new $e().setFromQuaternion(this.engine.camera.quaternion,"YXZ").x}async goRoom(t){const e=this.roomStops.find(n=>n.id===t);if(!(!e||this.view.kind!=="flat")){if(this.hud.spec=null,this.currentRoom=t,this.walker.skipLockOnce=!0,document.pointerLockElement&&document.exitPointerLock(),this.view.cam!=="walk"){const{floor:n,unitId:s}=this.view;await this.showFlat(n,s,"walk",!0,void 0,{skipSpawn:!0})}await this.flyToStop(e),this.hud.setCurrentRoom(t)}}async flyToStop(t){if(this.view.kind!=="flat")return;Kr(),this.flying=!0,this.walker.enabled=!1,this.engine.orbit.enabled=!1;const e=this.engine.camera.position.clone(),n=this.cameraYaw(),s=this.cameraPitch();try{await Sg(this.engine.camera,e,n,s,t.position,t.yaw,0,1.15),this.walker.spawn(t.walkX,1.6,t.walkZ,t.yaw),this.walker.apply(this.engine.camera),this.walker.enabled=!0}finally{this.flying=!1,this.engine.orbit.enabled=!1}}handleTour(t){t==="start"?this.startTour():t==="stop"?this.stopTour(!1):t==="next"?this.tourStep(1):t==="prev"?this.tourStep(-1):t==="toggle"&&this.toggleTourPlay()}async startTour(){!this.roomStops.length||this.view.kind!=="flat"||(this.tour={active:!0,playing:!0,index:0},this.hud.setTour(this.tour),await this.goRoom(this.roomStops[0].id),this.scheduleTour())}stopTour(t=!1){this.clearTourTimer();const e=this.tour;this.tour=null,e&&!t&&this.hud.setTour(null)}toggleTourPlay(){this.tour&&(this.tour={...this.tour,playing:!this.tour.playing},this.hud.setTour(this.tour),this.tour.playing?this.scheduleTour():this.clearTourTimer())}async tourStep(t){if(!this.roomStops.length)return;this.tour||(this.tour={active:!0,playing:!1,index:0});const e=this.tour.index+t;if(!(e<0)){if(e>=this.roomStops.length){this.stopTour(!1);return}this.tour={...this.tour,index:e},this.hud.setTour(this.tour),await this.goRoom(this.roomStops[e].id),this.tour?.playing&&this.scheduleTour()}}scheduleTour(){this.clearTourTimer(),this.tour?.playing&&(this.tourTimer=window.setTimeout(()=>{this.tourStep(1)},m_))}clearTourTimer(){this.tourTimer!==null&&(clearTimeout(this.tourTimer),this.tourTimer=null)}async openHotspot(t){this.walker.skipLockOnce=!0,document.pointerLockElement&&document.exitPointerLock(),this.hud.showSpec(t);const e=this.roomStops.find(r=>r.name===t.title||r.id===t.id.replace(/^(kitchen|bath|view)-/,"")||t.kind==="kitchen"&&r.type==="kitchen"||t.kind==="bath"&&r.type==="bathroom"||t.kind==="view"&&(r.type==="balcony"||r.type==="terrace"));if(e){this.stopTour(!1),await this.goRoom(e.id);return}if(this.flying)return;this.flying=!0;const n=t.cameraPos.clone(),s=t.lookAt.clone();try{const r=this.view.kind==="flat"&&this.view.cam==="walk";if(r&&(this.walker.enabled=!1),await Vs(this.engine.camera,this.engine.orbit,n,s,.8),r){this.engine.orbit.enabled=!1;const o=Math.atan2(-(s.x-n.x),-(s.z-n.z)),a=this.walker.isWalkable(n.x,n.z);this.walker.spawn(a?n.x:t.position.x,1.6,a?n.z:t.position.z,o),this.walker.apply(this.engine.camera),this.walker.enabled=!0}}finally{this.flying=!1}}bindPointer(t){const e=r=>{this.dragging=!1,this.downXY={x:r.clientX,y:r.clientY}},n=r=>{(r.buttons||r.pressure)&&Math.hypot(r.clientX-this.downXY.x,r.clientY-this.downXY.y)>5&&(this.dragging=!0),this.pointer.x=r.clientX/window.innerWidth*2-1,this.pointer.y=-(r.clientY/window.innerHeight)*2+1,this.view.kind==="tower"&&this.hoverTower()},s=r=>{this.dragging||xl(r.target)||(this.pointer.x=r.clientX/window.innerWidth*2-1,this.pointer.y=-(r.clientY/window.innerHeight)*2+1,this.clickScene())};t.addEventListener("pointerdown",e),window.addEventListener("pointermove",n),t.addEventListener("pointerup",s)}hoverTower(){if(this.view.kind!=="tower")return;this.ray.setFromCamera(this.pointer,this.engine.camera);const t=this.ray.intersectObjects(this.tower.floorHits,!1),e=t.length?t[0].object.userData.floor:null;e!==this.view.hoverFloor&&(this.tower.highlight(e),this.hud.setHoverFloor(e))}clickScene(){if(this.ray.setFromCamera(this.pointer,this.engine.camera),this.view.kind==="tower"){const t=this.ray.intersectObjects(this.tower.floorHits,!1);t.length&&this.showFloor(t[0].object.userData.floor);return}if(this.view.kind==="floor"){const t=this.interiors.flatMap(n=>{const s=[];return n.group.traverse(r=>{r instanceof ut&&s.push(r)}),s}),e=this.ray.intersectObjects(t,!1);if(e.length){let n=e[0].object;for(;n;){if(n.userData.unitId){this.showFlat(this.view.floor,n.userData.unitId,"dollhouse");return}n=n.parent}}return}if(this.view.kind==="flat"){if(document.pointerLockElement)return;const t=this.interiors.flatMap(o=>o.hotspots.map(a=>a.mesh)),e=this.ray.intersectObjects(t,!0);if(e.length){let o=e[0].object;for(;o;){const a=o.userData.hotspot;if(a){this.walker.skipLockOnce=!0,this.openHotspot(a);return}o=o.parent}}const n=this.interiors.flatMap(o=>o.floorMeshes),s=this.ray.intersectObjects(n,!1);if(!s.length)return;const r=s[0].point;if(this.walker.skipLockOnce=!0,this.view.cam!=="walk"){this.showFlat(this.view.floor,this.view.unitId,"walk",!1,{x:r.x,z:r.z});return}if(!this.walker.walkTo(r.x,r.z)){const o=this.engine.camera.position;this.walker.walkTo(r.x+(o.x-r.x)*.1,r.z+(o.z-r.z)*.1)}}}bindKeys(){window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(document.pointerLockElement){document.exitPointerLock();return}this.hud.goBack();return}if(!this.tv)return;const e=this.view;if(e.kind==="flat"){if(t.code==="ArrowLeft"||t.code==="ArrowRight"){if(!this.roomStops.length)return;let n=this.roomStops.findIndex(s=>s.id===this.currentRoom);n<0&&(n=0),n+=t.code==="ArrowRight"?1:-1,n=Math.max(0,Math.min(this.roomStops.length-1,n)),this.stopTour(!1),this.goRoom(this.roomStops[n].id),t.preventDefault();return}if(e.cam==="walk"&&(t.code==="Enter"||t.code==="NumpadEnter")){this.showFlat(e.floor,e.unitId,"dollhouse"),t.preventDefault();return}e.cam==="dollhouse"&&(t.code==="Enter"||t.code==="NumpadEnter")&&(this.showFlat(e.floor,e.unitId,"walk"),t.preventDefault());return}if(e.kind==="tower"){const n=e.hoverFloor??1;if(t.code==="ArrowUp"){const s=Math.min(ei,n+1);this.tower.highlight(s),this.hud.setHoverFloor(s),t.preventDefault()}if(t.code==="ArrowDown"){const s=Math.max(1,n-1);this.tower.highlight(s),this.hud.setHoverFloor(s),t.preventDefault()}(t.code==="Enter"||t.code==="NumpadEnter")&&(this.showFloor(e.hoverFloor??1),t.preventDefault())}else if(e.kind==="floor"){const s=tr(e.floor).map(o=>es(e.floor,o.suffix));let r=Math.max(0,s.indexOf(e.hoverUnit??s[0]));(t.code==="ArrowRight"||t.code==="ArrowLeft")&&(r=(r+(t.code==="ArrowRight"?1:s.length-1))%s.length,this.view={...e,hoverUnit:s[r]},this.hud.setView(this.view),document.querySelectorAll(".unit-card, .unit-chip").forEach(o=>{o.classList.toggle("hov",o.textContent?.includes(s[r])??!1)}),t.preventDefault()),(t.code==="Enter"||t.code==="NumpadEnter")&&(this.showFlat(e.floor,e.hoverUnit??s[0],"dollhouse"),t.preventDefault())}})}exposeApi(){const t={ready:!0,view:()=>this.view,gotoTower:()=>this.showTower(),gotoFloor:e=>this.showFloor(e),gotoFlat:(e,n,s="dollhouse")=>this.showFlat(e,n,s),setCam:e=>{if(this.view.kind==="flat")return this.showFlat(this.view.floor,this.view.unitId,e)},setTime:e=>this.setTime(e),setPrefs:e=>this.setPrefs({...this.prefs,...e}),setSheet:e=>this.hud.setSheet(e),rooms:()=>this.roomStops,goRoom:e=>this.goRoom(e),startTour:()=>this.startTour(),stopTour:()=>this.stopTour(!1),tourStep:e=>this.tourStep(e),setTourPlaying:e=>{this.tour&&(this.tour={...this.tour,playing:e},this.hud.setTour(this.tour),e?this.scheduleTour():this.clearTourTimer())},openForm:()=>this.hud.openForm(),closeForm:()=>this.hud.closeForm(),submitLead:(e,n)=>{const s=this.hud.unitOfInterest();gl({name:e,phone:n,unit:s}),this.hud.closeForm(),this.hud.toast("Request saved on this device. A sales executive would follow up in Lead Setu.")},toast:e=>this.hud.toast(e),currentRoom:()=>this.currentRoom,tour:()=>this.tour,prefs:()=>this.prefs};window.__leadsetu=t}}function v_(i){let t=i;for(;t;){if(t.name==="hotspot"||t.userData.hotspot)return!0;t=t.parent}return!1}function x_(i,t){const e=Math.max(0,Math.min(i.x+i.w,t.x+t.w)-Math.max(i.x,t.x)),n=Math.max(0,Math.min(i.y+i.h,t.y+t.h)-Math.max(i.y,t.y));return e>6&&n>6}function Xs(i){const t=document.getElementById("load-bar"),e=document.getElementById("load-pct"),n=Math.round(Math.max(0,Math.min(1,i))*100);t&&(t.style.width=n+"%"),e&&(e.textContent=n+"%")}function M_(){const i=[...document.querySelectorAll("#tips .tip")],t=[...document.querySelectorAll("#tips [data-dot]")];if(!i.length)return;let e=0;const n=o=>{e=(o+i.length)%i.length,i.forEach((a,c)=>a.classList.toggle("on",c===e)),t.forEach((a,c)=>a.classList.toggle("on",c===e))};n(0),t.forEach((o,a)=>o.addEventListener("click",()=>n(a)));const s=window.setInterval(()=>n(e+1),3200),r=document.getElementById("loading");if(r){const o=new MutationObserver(()=>{r.classList.contains("done")&&(clearInterval(s),o.disconnect())});o.observe(r,{attributes:!0,attributeFilter:["class"]})}}function y_(){const i=document.getElementById("loading"),t=document.getElementById("start-explore");t&&(t.hidden=!1);const e=new URLSearchParams(location.search).get("hold")==="1";let n=!1;const s=()=>{n||(n=!0,i?.classList.add("done"),document.body.classList.remove("booting"))};t?.addEventListener("click",s),e||window.setTimeout(s,7e3)}new __().start().catch(i=>{console.error(i);const t=document.querySelector(".load-sub");t&&(t.textContent="Could not load the walkthrough. Check the console.")});
//# sourceMappingURL=index-BNwpsZFF.js.map
