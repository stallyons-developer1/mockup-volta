const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/call-to-action-BKyEVQYV.js","assets/gsap-D_956-p2.js","assets/ScrollTrigger-DB-27tMc.js","assets/utils-DaXUhbX9.js","assets/content-switcher-ucCwjBYd.js","assets/glow-image-CbCymQEE.js","assets/image-carousel-CkxlQ5GE.js","assets/navigation-Dcq8L-gs.js","assets/interactive-map-C98UvNdH.js","assets/store-C-9mW9kw.js","assets/three.module-CMqQqCRu.js","assets/person-carousel-B5h34NQv.js","assets/plan-viewer-1oY9fzhP.js","assets/utilsGL-py7MgKko.js","assets/Draggable-Bxht-im4.js","assets/project-card-DiEPHZ0M.js","assets/rippling-image-DGJ0JrNI.js","assets/scramble-text-B6hIfKXe.js","assets/SplitText-Bj_bHxnY.js","assets/site-menu-qzm9FsNC.js","assets/testimonial-carousel-B-xATIWK.js","assets/title-animation-CXSt1ewK.js","assets/parallax-DPWtnlyR.js","assets/homepage-fgiueTVp.js","assets/engineering-BvlKyEGS.js","assets/heritage-aXhU_nSD.js","assets/benchmark-CKk7ao2U.js"])))=>i.map(i=>d[i]);
import{C as e,S as t,_ as n,a as r,b as i,c as a,d as o,f as s,g as c,h as l,i as u,l as d,m as f,n as p,o as m,p as h,r as g,s as _,t as v,u as y,v as b,w as ee,x as te,y as ne}from"./utilsGL-py7MgKko.js";import{t as x}from"./gsap-D_956-p2.js";import{n as re}from"./utils-DaXUhbX9.js";import{n as ie,t as S}from"./preload-helper-kStSJ9fH.js";import{$t as w,A as ae,At as oe,C as se,Ct as T,Dt as ce,E as le,Et as E,F as D,Ft as O,Gt as ue,H as de,Ht as fe,I as k,It as pe,Jt as me,K as A,Kt as he,Lt as ge,M as j,Mt as M,Ot as _e,Pt as ve,Q as ye,Qt as N,S as be,T as xe,Tt as Se,U as Ce,Ut as we,Vt as Te,Wt as Ee,Xt as De,Y as Oe,Yt as ke,Zt as Ae,_ as P,_t as F,b as je,c as Me,ct as I,d as Ne,en as Pe,et as L,f as Fe,ft as R,g as Ie,gt as Le,h as Re,ht as ze,i as Be,it as Ve,j as z,jt as He,k as B,kt as Ue,l as We,m as Ge,mt as Ke,n as V,nn as H,nt as U,o as qe,ot as Je,p as Ye,pt as Xe,r as Ze,rt as W,t as Qe,tt as $e,u as et,vt as tt,w as nt,x as rt,y as it,yt as at}from"./three.module-CMqQqCRu.js";import{t as G}from"./store-C-9mW9kw.js";import{t as ot}from"./ScrollTrigger-DB-27tMc.js";var st=`(min-width: 768px)`,ct=document.querySelectorAll(`video`),lt=re(),ut=()=>window.matchMedia(st).matches,dt=e=>e.closest(`.has-mobile-version`)?!!(e.classList.contains(`for-desktop`)&&!ut()||e.classList.contains(`for-mobile`)&&ut()):!1;ct.forEach(e=>{let t=e.hasAttribute(`autoplay`)&&e.getAttribute(`autoplay`)!=0,n=e.hasAttribute(`data-reveal-on-load`);if(dt(e)){e.removeAttribute(`autoplay`),e.pause(),n&&(e.style.opacity=`1`);return}if(t)if(lt)e.removeAttribute(`autoplay`),e.pause();else{let t=e.dataset.threshold||.05;new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting?e.play():e.pause()})},{threshold:t}).observe(e)}if(n)if(lt)e.style.opacity=`1`;else{let t=()=>{x.to(e,{opacity:1,duration:.25,ease:`power1.out`})};e.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?t():e.addEventListener(`loadeddata`,t,{once:!0})}}),document.querySelectorAll(`[data-scroll-to-next-section]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=e.closest(`section`);if(!n)return;let r=n.nextElementSibling?.tagName.toLowerCase()===`section`?n.nextElementSibling:null;if(r){let e=r.getBoundingClientRect().top+window.pageYOffset-92;window.scrollTo({top:e,behavior:`smooth`})}})}),document.querySelectorAll(`[data-scroll-to]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault();let n=document.getElementById(e.dataset.scrollTo);if(!n)return;let r=n.getBoundingClientRect().top+window.pageYOffset-92;window.scrollTo({top:r,behavior:`smooth`})})});var ft=[`site-menu`,`rippling-image`,`scramble-text`,`glow-image`,`content-switcher`,`image-carousel`,`testimonial-carousel`,`person-carousel`,`wall-of-fame`,`person-card`,`interactive-map`,`project-card`,`plan-viewer`,`title-animation`,`call-to-action`];ft&&ft.forEach(e=>{document.querySelector(e)&&ie(Object.assign({"./custom-elements/call-to-action.js":()=>S(()=>import(`./call-to-action-BKyEVQYV.js`),__vite__mapDeps([0,1,2,3])),"./custom-elements/content-switcher.js":()=>S(()=>import(`./content-switcher-ucCwjBYd.js`),__vite__mapDeps([4,1,3])),"./custom-elements/glow-image.js":()=>S(()=>import(`./glow-image-CbCymQEE.js`),__vite__mapDeps([5,1,2])),"./custom-elements/image-carousel.js":()=>S(()=>import(`./image-carousel-CkxlQ5GE.js`),__vite__mapDeps([6,1,7])),"./custom-elements/interactive-map.js":()=>S(()=>import(`./interactive-map-C98UvNdH.js`),__vite__mapDeps([8,7,9,10])),"./custom-elements/person-card.js":()=>S(()=>import(`./person-card-DMlSuGpO.js`),[]),"./custom-elements/person-carousel.js":()=>S(()=>import(`./person-carousel-B5h34NQv.js`),__vite__mapDeps([11,1,7,9,10,3])),"./custom-elements/plan-viewer.js":()=>S(()=>import(`./plan-viewer-1oY9fzhP.js`),__vite__mapDeps([12,13,10,9,1,14,3])),"./custom-elements/project-card.js":()=>S(()=>import(`./project-card-DiEPHZ0M.js`),__vite__mapDeps([15,7,9,10])),"./custom-elements/resource-filters.js":()=>S(()=>import(`./resource-filters-C_dtoiyO.js`),[]),"./custom-elements/rippling-image.js":()=>S(()=>import(`./rippling-image-DGJ0JrNI.js`),__vite__mapDeps([16,1,2,10])),"./custom-elements/scramble-text.js":()=>S(()=>import(`./scramble-text-B6hIfKXe.js`),__vite__mapDeps([17,1,2,18,3])),"./custom-elements/site-menu.js":()=>S(()=>import(`./site-menu-qzm9FsNC.js`),__vite__mapDeps([19,1,3])),"./custom-elements/testimonial-carousel.js":()=>S(()=>import(`./testimonial-carousel-B-xATIWK.js`),__vite__mapDeps([20,7])),"./custom-elements/title-animation.js":()=>S(()=>import(`./title-animation-CXSt1ewK.js`),__vite__mapDeps([21,13,10,9,1,18,3])),"./custom-elements/wall-of-fame.js":()=>S(()=>import(`./wall-of-fame-DhyywzBR.js`),[])}),`./custom-elements/${e}.js`,3)}),[`parallax`].forEach(e=>{let t=document.querySelectorAll(`[data-animation="${e}"]`);t.length>0&&ie(Object.assign({"./animations/parallax.js":()=>S(()=>import(`./parallax-DPWtnlyR.js`),__vite__mapDeps([22,1,2,3]))}),`./animations/${e}.js`,3).then(({default:e})=>{t.forEach(t=>e.init(t))})});var pt=`#define GLSLIFY 1
attribute vec4 tangent;

varying vec3 vViewPosition;
varying vec3 vNormal;
varying vec3 vTangent;
varying vec3 vBitangent;

// From shader chunk
#ifdef USE_ENV

    vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	    return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
    }
    vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
        // dir can be either a direction vector or a normal vector
        // upper-left 3x3 of matrix is assumed to be orthogonal
        return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
    }
    
#endif

varying vec4 vWorldPosition;`,mt=`#define GLSLIFY 1
// <normal_vertex> :
objectNormal = vec3( normal );
vec3 objectTangent = vec3( tangent.xyz );

// <defaultnormal_vertex> :
vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

// <normal_vertex> :
vNormal = normalize( transformedNormal );
vTangent = normalize( transformedTangent );
vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

vec4 mvPosition = vec4( transformedPosition, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;

vViewPosition = - mvPosition.xyz;

// world pos chunk
#ifdef USE_ENV
	vec4 worldPosition = vec4( transformedPosition, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;

	vWorldPosition = worldPosition;

#endif`,ht=`#define GLSLIFY 1
float blendSoftLight(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));
}

float blendLinearDodge(float base, float blend) {
	// Note : Same implementation as BlendAddf
	return min(base+blend,1.0);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendAdd
	return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));
}

float blendLinearBurn(float base, float blend) {
	// Note : Same implementation as BlendSubtractf
	return max(base+blend-1.0,0.0);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendSubtract
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));
}

float blendLinearLight(float base, float blend) {
	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));
}

float blendLighten(float base, float blend) {
	return max(blend,base);
}

vec3 blendLighten(vec3 base, vec3 blend) {
	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));
}

float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}

float blendColorDodge(float base, float blend) {
	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));
}

float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));
}

float blendAdd(float base, float blend) {
	return min(base+blend,1.0);
}

vec3 blendAdd(vec3 base, vec3 blend) {
	return min(base+blend,vec3(1.0));
}

vec3 blendAdd(vec3 base, vec3 blend, float opacity) {
	return (blendAdd(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 blendMultiply(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));
}

varying vec3 vViewPosition;
varying vec3 vNormal;
varying vec3 vTangent;
varying vec3 vBitangent;

uniform float uDiffuseMatcapBlend;
uniform float uEnvMapBlend;

uniform vec3 uColor;
uniform int uBlendMode;

#ifdef USE_MATCAP
    uniform sampler2D tMatcap;
#endif

#ifdef USE_MATCAP_MAP
    uniform sampler2D tMatcapMap;
#endif

#ifdef USE_DIFFUSE
    uniform float uDiffuseScale;
    uniform sampler2D tDiffuse;
#endif

#ifdef USE_NORMAL
    uniform sampler2D tNormal;
    uniform float uNormalScale;
    uniform float uNormalStrength;
#endif

#ifdef USE_ROUGH
    uniform sampler2D tRoughness;
#endif

varying vec4 vWorldPosition;

#ifdef USE_ENV

    uniform sampler2D tEnvMap;
    uniform float uEnvMapStrength;
    uniform float uRoughness;
    
    // Shader chunk that handles sampling the mipmapped image
    #include <cubeUVreflectionFrag>

    // Env map common
     vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	    return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
    }
    vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
        // dir can be either a direction vector or a normal vector
        // upper-left 3x3 of matrix is assumed to be orthogonal
        return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
    }

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			vec3 reflectVec = reflect( - viewDir, normal );
			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( tEnvMap, reflectVec, roughness ); // Sample the mipmapped image
			return envMapColor.rgb * uEnvMapStrength;
	}

#endif`,gt=`#define GLSLIFY 1
#ifdef USE_DIFFUSE
	vec4 diffuseColor = texture2D( tDiffuse, vUv * uDiffuseScale );
#else
	vec4 diffuseColor = vec4(uColor, 1.0);
#endif

#if defined(USE_MATCAP) || defined(USE_ENV) || defined(USE_NORMAL)
	vec3 normal = normalize( vNormal );

	float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
	vec3 tangent = normalize( vTangent );
	vec3 bitangent = normalize( vBitangent );
	#ifdef DOUBLE_SIDED
		tangent = tangent * faceDirection;
		bitangent = bitangent * faceDirection;
	#endif
	mat3 vTBN = mat3( tangent, bitangent, normal );
#endif

#ifdef USE_NORMAL
	#ifdef OBJECTSPACE_NORMALMAP
		normal = texture2D( tNormal, vUv * uNormalScale ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals
		#ifdef FLIP_SIDED
			normal = - normal;
		#endif
		#ifdef DOUBLE_SIDED
			normal = normal * faceDirection;
		#endif
		normal = normalize( normalMatrix * normal );
	#else 
		// Tangent space normal maps
		float normalScale = uNormalStrength; // Strength
		vec3 mapN = texture2D( tNormal, vUv * uNormalScale ).xyz * 2.0 - 1.0;
		mapN.xy *= normalScale;
		normal = normalize( vTBN * mapN );
	#endif
#endif

#if defined(USE_MATCAP) || defined(USE_ENV)  
	vec3 viewDir = normalize( vViewPosition );
#endif

#ifdef USE_MATCAP
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	vec4 matcapColor = texture2D( tMatcap, uv );

	#ifdef USE_MATCAP_MAP
		vec4 matcapMap = texture2D( tMatcapMap, vUv );
		matcapColor *= matcapMap * 1.5;
	#endif

	#ifdef USE_MATCAP_EXTRA
		vec4 extraMatcap = texture2D( tMatcapExtra, uv );
	#endif
#else
    vec4 matcapColor = vec4(1.); // default if matcap is missing
#endif

#ifdef USE_ENV
	vec3 geometryNormal = normal;
	// Lights physical fragment
	// Take into account the normals of the geometry (changed by the normal map) + the roughness factor set by the uniform
	vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
	float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

	#ifdef USE_ROUGH
		// Use a roughness map, multiplied by the roughness factor for extra control
		float roughness = max( clamp(texture2D(tRoughness, vUv).r * uRoughness, 0.0, 1.0), 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
	#else 
		float roughness = max( uRoughness, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
	#endif
	
	roughness += geometryRoughness;
	roughness = min( roughness, 1.0 ); // Clamp it to 1

	vec3 specular = vec3( 0.0 ); 
	specular += getIBLRadiance( viewDir, geometryNormal, roughness ); 

#else
	vec3 specular = vec3(0.);
#endif

#ifdef USE_SHADOW
	vec4 shadowOverlay = texture2D(tShadow, vUv);
#endif

// Mix between all
#ifdef USE_MATCAP

	vec3 outgoingLight;

	if(uBlendMode == 0) {
        outgoingLight = blendSoftLight(diffuseColor.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
    } else if(uBlendMode == 1){
        outgoingLight = blendLinearLight(diffuseColor.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
    } else if(uBlendMode == 2){
        outgoingLight = blendLighten(diffuseColor.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
    } else if(uBlendMode == 3){
        outgoingLight = blendOverlay(diffuseColor.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
    } else if(uBlendMode == 4){
        outgoingLight = blendAdd(diffuseColor.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
    } else {
        outgoingLight = blendMultiply(diffuseColor.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
    }

	#ifdef USE_MATCAP_EXTRA
		outgoingLight = blendSoftLight(outgoingLight, extraMatcap.rgb, uMatcapExtraBlend);
	#endif

	#ifdef USE_SHADOW
		outgoingLight = blendMultiply(outgoingLight, shadowOverlay.rgb, uShadowBlend);
	#endif

	outgoingLight = blendAdd(outgoingLight, specular, uEnvMapBlend);

	// vec3 outgoingLight = blendAdd(blendSoftLight(diffuseColor.rgb, matcapColor.rgb, uDiffuseMatcapBlend), specular, uEnvMapBlend);
	// vec3 outgoingLight = blendAdd(blendOverlay(diffuseColor.rgb, matcapColor.rgb, uDiffuseMatcapBlend), specular, uEnvMapBlend);
#else

	vec3 outgoingLight = diffuseColor.rgb;

	#ifdef USE_SHADOW
		outgoingLight = blendMultiply(outgoingLight, shadowOverlay.rgb, uShadowBlend);
	#endif

	outgoingLight = blendAdd(outgoingLight, specular, uEnvMapBlend);

#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_t=`#define GLSLIFY 1
// These correspond to 1024 map
#define CUBEUV_TEXEL_WIDTH 0.0013020833333333333
#define CUBEUV_TEXEL_HEIGHT 0.0009765625
#define CUBEUV_MAX_MIP 8.0

#define cubeUV_minMipLevel 4.0
#define cubeUV_minTileSize 16.0

// These shader functions convert between the UV coordinates of a single face of
// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
// sampling a textureCube (not generally normalized ).

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

// RH coordinate system; PMREM face-indexing convention
vec2 getUV( vec3 direction, float face ) {

	vec2 uv;

	if ( face == 0.0 ) {

		uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

	} else if ( face == 1.0 ) {

		uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

	} else if ( face == 2.0 ) {

		uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

	} else if ( face == 3.0 ) {

		uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

	} else if ( face == 4.0 ) {

		uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

	} else {

		uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

	}

	return 0.5 * ( uv + 1.0 );

}

vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

	float face = getFace( direction );

	float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

	mipInt = max( mipInt, cubeUV_minMipLevel );

	float faceSize = exp2( mipInt );

	highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

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

		return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

	#else

		return texture2D( envMap, uv ).rgb;

	#endif

}

// These defines must match with PMREMGenerator
#define cubeUV_r0 1.0
#define cubeUV_v0 0.339
#define cubeUV_m0 - 2.0
#define cubeUV_r1 0.8
#define cubeUV_v1 0.276
#define cubeUV_m1 - 1.0
#define cubeUV_r4 0.4
#define cubeUV_v4 0.046
#define cubeUV_m4 2.0
#define cubeUV_r5 0.305
#define cubeUV_v5 0.016
#define cubeUV_m5 3.0
#define cubeUV_r6 0.21
#define cubeUV_v6 0.0038
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

		mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
	}

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
`,vt=`precision highp float;
precision highp int;
#define GLSLIFY 1

uniform mat4 modelViewMatrix;
uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec4 color;`,yt=`precision highp float;
precision highp int;
#define GLSLIFY 1
`,bt=`#define GLSLIFY 1
vec3 objectNormal = vec3( normal );
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING
    mat3 m = mat3( instanceMatrix );
    transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
    transformedNormal = m * transformedNormal;
#endif

transformedNormal = normalMatrix * transformedNormal;

vNormal = normalize( transformedNormal );`,xt=`#define GLSLIFY 1
 vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
            vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
            vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
            vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
            float snoise(vec3 v){
                const vec2 C=vec2(1.0/6.0,1.0/3.0);
                const vec4 D=vec4(0.0,0.5,1.0,2.0);
                vec3 i=floor(v+dot(v,C.yyy));
                vec3 x0=v-i+dot(i,C.xxx);
                vec3 g=step(x0.yzx,x0.xyz);
                vec3 l=1.0-g;
                vec3 i1=min(g.xyz,l.zxy);
                vec3 i2=max(g.xyz,l.zxy);
                vec3 x1=x0-i1+C.xxx;
                vec3 x2=x0-i2+C.yyy;
                vec3 x3=x0-D.yyy;
                i=mod289(i);
                vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
                float n_=0.142857142857;
                vec3 ns=n_*D.wyz-D.xzx;
                vec4 j=p-49.0*floor(p*ns.z*ns.z);
                vec4 x_=floor(j*ns.z);
                vec4 y_=floor(j-7.0*x_);
                vec4 x=x_*ns.x+ns.yyyy;
                vec4 y=y_*ns.x+ns.yyyy;
                vec4 h=1.0-abs(x)-abs(y);
                vec4 b0=vec4(x.xy,y.xy);
                vec4 b1=vec4(x.zw,y.zw);
                vec4 s0=floor(b0)*2.0+1.0;
                vec4 s1=floor(b1)*2.0+1.0;
                vec4 sh=-step(h,vec4(0.0));
                vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
                vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
                vec3 p0=vec3(a0.xy,h.x);
                vec3 p1=vec3(a0.zw,h.y);
                vec3 p2=vec3(a1.xy,h.z);
                vec3 p3=vec3(a1.zw,h.w);
                vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
                p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
                vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
                m=m*m;
                return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
            }
            
            float waterHeight(vec2 xz, float time) {
				float scale = .5;
                float n = snoise(vec3(xz * 0.15 * scale, time * 0.4 * scale));
                n += 0.5 * snoise(vec3(xz * 0.3 * scale, time * 0.5 * scale));
                n += 0.25 * snoise(vec3(xz * 0.6 * scale, time * 0.6 * scale));
                return n;
            }
// ── Hauteur de surface PARTAGÉE eau/ruban : une seule définition pour
// que le plan d'eau et le waterRibon restent synchronisés ──
// (advection vent + crêtes accentuées + houle Gerstner verticale)
const vec2 WTR_WIND = vec2(0.9191450, 0.3939193);   // normalize(vec2(0.7, 0.3))
const vec2 WTR_D1   = vec2(0.9161570, 0.4008190);   // normalize(vec2(0.8, 0.35))
const vec2 WTR_D2   = vec2(-0.4061380, 0.9138120);  // normalize(vec2(-0.4, 0.9))

float waterSurfaceHeight(vec2 xz, float tSec, float amp) {
    float h = waterHeight(xz - WTR_WIND * tSec * 2.5, tSec) * amp;
    h += pow(max(h, 0.0), 2.0) * 0.6;
    h += 1.2 * amp * sin(dot(WTR_D1, xz) * 0.10 + tSec * 1.0);
    h += 0.5 * amp * sin(dot(WTR_D2, xz) * 0.23 + tSec * 1.6);
    return h;
}

// Déplacement horizontal (choppiness) des mêmes vagues — plan d'eau seul
vec2 waterSurfaceChop(vec2 xz, float tSec, float amp) {
    vec2 chop = vec2(0.0);
    chop -= WTR_D1 * (1.2 * amp * 0.6) * cos(dot(WTR_D1, xz) * 0.10 + tSec * 1.0);
    chop -= WTR_D2 * (0.5 * amp * 0.6) * cos(dot(WTR_D2, xz) * 0.23 + tSec * 1.6);
    return chop;
}
`,St=`#define GLSLIFY 1
varying vec3 vWorldNormal;
varying vec4 vWorldPosition;
`,Ct=`#define GLSLIFY 1
vWorldNormal = (modelMatrix * vec4(transformedNormal, 0.0)).xyz;
vec4 worldPosition = vec4( transformed, 1.0 );

worldPosition = modelMatrix * worldPosition;
#ifdef USE_INSTANCING
vWorldPosition = instanceMatrix * worldPosition;
#else
vWorldPosition = worldPosition;
#endif`,wt=`#define GLSLIFY 1
varying vec3 vWorldNormal;
varying vec4 vWorldPosition;

uniform float uCausticsScale;
uniform float uCausticsSpeed;
uniform float uThreshold;
uniform float uCausticsBlendAlpha;
uniform float uCausticsStrength;
uniform float uCausticsSpreadInverse;

uniform float uSeed;

vec3 getCausticsColor(float time) {
    // Caustics shape credit: Jeremy Abel https://www.shadertoy.com/view/XtKfRG
    mat3 m = mat3(-2,-1,2, 3,-2,1, 1,2,2);

    vec2 causticsLoc = vec2(vWorldPosition.x * uCausticsScale, vWorldPosition.z * uCausticsScale);
    vec3 t = vec3(causticsLoc, time * 0.001 * uCausticsSpeed + uSeed);
    vec3 a = vec3(t * m * 0.5);
    vec3 b = vec3(a * m * 0.4);
    vec3 c = vec3(b * m * 0.3);

    return vec3(pow(
            min( min( length(.5 - fract(a)), length(.5 - fract(b)) ), length(.5 - fract(c) ) ), 
            uCausticsSpreadInverse) * uCausticsStrength);
}

float blendAdd(float base, float blend) {
	return min(base+blend,1.0);
}

vec3 blendAdd(vec3 base, vec3 blend) {
	return min(base+blend,vec3(1.0));
}

vec3 blendAdd(vec3 base, vec3 blend, float opacity) {
	return (blendAdd(base, blend) * opacity + base * (1.0 - opacity));
}`,Tt=`#define GLSLIFY 1
// Simple Caustics
vec3 causticsColor = getCausticsColor(uTime);

// Get face orientation

vec3 worldNormal = normalize(vWorldNormal);

// Smoothstep mix instead of if statements
vec3 caustics = blendAdd(outgoingLight, causticsColor, uCausticsBlendAlpha); // Blended caustic with diffuse
float way = step(0., uThreshold);
float threshold = mix(
    smoothstep(-uThreshold, 0.0, worldNormal.y),
    smoothstep(0.0, max(0.02, uThreshold), worldNormal.y),
    way
);
outgoingLight = mix(outgoingLight, caustics, threshold);

`,Et=`#define GLSLIFY 1
vec4 transformedPos = vec4( transformedPosition, 1.0 );
#ifdef USE_INSTANCING
    transformedPos = instanceMatrix * transformedPos;
#endif
vec4 worldPosition = modelMatrix * transformedPos;
vWorldPosition = worldPosition;
vec4 mvPosition = modelViewMatrix * transformedPos;
vViewPosition = - mvPosition.xyz;`,Dt=`#define GLSLIFY 1
varying vec4 vWorldPosition;
varying vec3 vViewPosition;`,K=`srgb`,Ot=`srgb-linear`,kt=`linear`,At=`srgb`,jt={},Mt=null;function Nt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function Pt(...e){e=Nt(e);let t=`THREE.`+e.shift();if(Mt)Mt(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ft(...e){let t=e.join(` `);t in jt||(jt[t]=!0,Pt(...e))}Math.PI/180,180/Math.PI;function q(e,t,n){return Math.max(t,Math.min(n,e))}function It(e,t){return(e%t+t)%t}function Lt(e,t,n){return(1-n)*e+n*t}var J=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],ee=r[5],te=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*ee,i[6]=a*g+o*y+s*te,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*ee,i[7]=c*g+l*y+u*te,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*ee,i[8]=d*g+f*y+p*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Rt.makeScale(e,t)),this}rotate(e){return this.premultiply(Rt.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rt=new J,zt=new J().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bt=new J().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vt(){let e={enabled:!0,workingColorSpace:Ot,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ut(e.r),e.g=Ut(e.g),e.b=Ut(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?kt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ft(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ft(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ot]:{primaries:t,whitePoint:r,transfer:kt,toXYZ:zt,fromXYZ:Bt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:K},outputColorSpaceConfig:{drawingBufferColorSpace:K}},[K]:{primaries:t,whitePoint:r,transfer:At,toXYZ:zt,fromXYZ:Bt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:K}}}),e}var Y=Vt();function Ht(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ut(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Wt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gt={h:0,s:0,l:0},Kt={h:0,s:0,l:0};function qt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Jt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=K){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Y.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Y.workingColorSpace){return this.r=e,this.g=t,this.b=n,Y.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Y.workingColorSpace){if(e=It(e,1),t=q(t,0,1),n=q(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=qt(i,r,e+1/3),this.g=qt(i,r,e),this.b=qt(i,r,e-1/3)}return Y.colorSpaceToWorking(this,r),this}setStyle(e,t=K){function n(t){t!==void 0&&parseFloat(t)<1&&Pt(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:Pt(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);Pt(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=K){let n=Wt[e.toLowerCase()];return n===void 0?Pt(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}copyLinearToSRGB(e){return this.r=Ut(e.r),this.g=Ut(e.g),this.b=Ut(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=K){return Y.workingToColorSpace(X.copy(this),e),Math.round(q(X.r*255,0,255))*65536+Math.round(q(X.g*255,0,255))*256+Math.round(q(X.b*255,0,255))}getHexString(e=K){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Y.workingColorSpace){Y.workingToColorSpace(X.copy(this),t);let n=X.r,r=X.g,i=X.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Y.workingColorSpace){return Y.workingToColorSpace(X.copy(this),t),e.r=X.r,e.g=X.g,e.b=X.b,e}getStyle(e=K){Y.workingToColorSpace(X.copy(this),e);let t=X.r,n=X.g,r=X.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Gt),this.setHSL(Gt.h+e,Gt.s+t,Gt.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gt),e.getHSL(Kt);let n=Lt(Gt.h,Kt.h,t),r=Lt(Gt.s,Kt.s,t),i=Lt(Gt.l,Kt.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},X=new Jt;Jt.NAMES=Wt;var Yt=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=q(this.x,e.x,t.x),this.y=q(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=q(this.x,e,t),this.y=q(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(q(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(q(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:Pt(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(q(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zt=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($t.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($t.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=q(this.x,e.x,t.x),this.y=q(this.y,e.y,t.y),this.z=q(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=q(this.x,e,t),this.y=q(this.y,e,t),this.z=q(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(q(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qt.copy(this).projectOnVector(e),this.sub(Qt)}reflect(e){return this.sub(Qt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(q(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qt=new Zt,$t=new Xt,en={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new J}},envmap:{envMap:{value:null},envMapRotation:{value:new J},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new J}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new J}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new J},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new J},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new J},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new J}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new J}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new J}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Zt},probesMax:{value:new Zt},probesResolution:{value:new Zt}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0},uvTransform:{value:new J}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new J},alphaMap:{value:null},alphaMapTransform:{value:new J},alphaTest:{value:0}}},tn=`#define GLSLIFY 1
varying vec4 vMirrorCoord;
varying float fogDepth;
uniform float uTime;
uniform float uAmplitude;
uniform float uFrequency;
uniform float uWaveSpeed;
uniform mat4 uTextureMatrix;
uniform float uProgress;
uniform float uAntiProgress;
uniform float uNoiseSpeed;

uniform vec2 uRipplesOrigin;
uniform float uRipplesFrequency;
uniform float uRipplesIntensity;
uniform float uRipplesSpeed;
uniform float uRipplesStart;
uniform float uRipplesEnd;

uniform sampler2D uRipples;
varying vec2 vRippleUv;
varying float vRippleHeight;
uniform vec2 uRippleBoundsMin;
uniform vec2 uRippleBoundsMax;

uniform float uNoiseScale;

#define HALF_PI 1.5707963267948966
#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>

varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec2 vUv;
varying float vWaterHeight;

#include <positionsPars>
#include <waterNoise>

void main() {
    vUv = uv;

    #include <begin_vertex>

    // Position monde AVANT déplacement
    vec3 worldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;

	 // Distance horizontale entre le vertex et la caméra
    vec2 camXZ = vec2(cameraPosition.x, cameraPosition.z);
    vec2 vertXZ = vec2(worldPos.x, worldPos.z);
    float distToCam = length(vertXZ - camXZ);

	float distFromCenter = length(position.xy) / 50.0;
	distFromCenter = clamp(distFromCenter, 0.0, 1.0);

    // uAmplitude proche, uAmplitude + 2 loin — transition sur 50 unités
    float ampFactor = smoothstep(6., 7., distToCam) ;
    float amplitude = uAmplitude  ;
	amplitude *= smoothstep(1.0, 0.99, distFromCenter);

    // Hauteur de surface partagée avec le waterRibon (cf. <waterNoise>) :
    // advection vent + crêtes accentuées + houle Gerstner. Échelle par
    // \`amplitude\` → même fade de bord que le noise, pas de couture avec
    // le fullMesh
    float tSec = uTime * uNoiseSpeed; // uNoiseSpeed ~0.001 → secondes
    float h = waterSurfaceHeight(worldPos.xz, tSec, amplitude);
    #if CHOP
    vec2 chop = waterSurfaceChop(worldPos.xz, tSec, amplitude);
    #else
    vec2 chop = vec2(0.0);
    #endif

    // (la normale par différences finies — 4 waterHeight() de plus — a été
    // retirée : vNormal est réécrit par <normalsVert> juste après, et le
    // fragment recalcule sa propre normale depuis les textures de bruit)

    // Déplacement en local Z (devient world Y après rotation)
    vMirrorCoord = uTextureMatrix * vec4(transformed, 1.0);

	vec2 uv01 = (worldPos.xz - uRippleBoundsMin) / (uRippleBoundsMax - uRippleBoundsMin);
	vRippleUv = vec2(uv01.x, 1.0 - uv01.y);
	#if RIPPLES
	float ripple = texture2D(uRipples, vRippleUv).r;
	#else
	float ripple = 0.0;
	#endif
	
	vRippleHeight = ripple;
	// transformed.y += ripple;

    // Vertical (local z = world y après rotation) + chop horizontal Gerstner
    transformed.z += h + vRippleHeight * 100.;
    transformed.xy += chop;
	vWaterHeight = worldPos.y + h;

	

   
	vec3 worldPosDisplaced = (modelMatrix * vec4(position, 1.0)).xyz;
    vWorldPos = worldPosDisplaced;
    vWorldPosition.xyz = worldPosDisplaced;

	
	#include <normalsVert>
    #include <project_vertex>
    #include <worldpos_vertex>
    #include <shadowmap_vertex>
    #include <fog_vertex>

	 // World pos après déplacement
    worldPosDisplaced = (modelMatrix * vec4(transformed, 1.0)).xyz;

	vViewPosition = mvPosition.xyz; 

    fogDepth = -mvPosition.z * 0.5;
}`,nn=`precision highp float;
precision highp int;
precision highp sampler2D;
#define GLSLIFY 1

#include <defaultFrag>
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <dithering_pars_fragment>

varying vec4 vMirrorCoord;
varying float fogDepth;

uniform vec3 uColor;
uniform sampler2D uNormalTexture;
uniform sampler2D uTexture;
uniform sampler2D uRefractionTexture;
uniform float uUnderwater;
uniform float uTime;

uniform vec3 uLightPos;
uniform vec3 uLightColor;
uniform float uLightIntensity;

uniform float uReflectionDistortion;
uniform float uReflectionStrength;

uniform float uNoiseScale;
uniform float uNoiseSpeed;

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vWorldPosition;

uniform sampler2D uDepthTexture;
uniform float uCameraNear;
uniform float uCameraFar;
uniform vec2 uResolution;

uniform float uFoamThreshold;
uniform vec3 uFoamColor;
uniform float uFoamStrength;

uniform vec3 uFogTop;
uniform vec3 uFogBottom;
uniform vec3 uFogTopDeep;
uniform vec3 uFogBottomDeep;
uniform float uDepth;
uniform float uFogNear;
uniform float uFogFar;

uniform vec3 uHazeColor;
uniform float uHazeStrength;
uniform float uHazeWidth;

uniform sampler2D uRipples;
uniform float uRippleTexelSize;
uniform sampler2D uDepthMap;
varying vec2 vRippleUv;
varying float vRippleHeight;
varying float vWaterHeight;

vec4 getNoise(vec2 uv, float time) {
    vec2 uv0 = (uv / 103.0) + vec2(time / 17.0, time / 29.0);
    vec2 uv1 = uv / 107.0 - vec2(time / -19.0, time / 31.0);
    vec2 uv2 = uv / vec2(8907.0, 9803.0) + vec2(time / 101.0, time / 97.0);
    vec2 uv3 = uv / vec2(1091.0, 1027.0) - vec2(time / 109.0, time / -113.0);

    vec4 noise =
        texture2D(uNormalTexture, uv0) +
        texture2D(uNormalTexture, uv1) +
        texture2D(uNormalTexture, uv2) +
        texture2D(uNormalTexture, uv3);

    return noise * 0.5 - 1.0;
}

float linearizeDepth(float depth, float near, float far) {
    float z = depth * 2.0 - 1.0;
    return (2.0 * near * far) / (far + near - z * (far - near));
}

// Pattern de bulles multi-échelles
float foamBubblePattern(vec2 uv, float time) {
    vec2 uvA = uv * .5  + vec2( time * 0.015,  time * 0.012);
    vec2 uvB = uv * 1.0  - vec2( time * 0.025,  time * 0.020);
    vec2 uvC = uv * 5.0 + vec2( time * 0.040, -time * 0.035);

    float a = texture2D(uNormalTexture, uvA).r;
    float b = texture2D(uNormalTexture, uvB).g;
    float c = texture2D(uNormalTexture, uvC).b;

    float p = a * 0.55 + b * 0.30 + c * 0.15;
    return smoothstep(0.35, 0.70, p);
}

float foamSparkle(vec2 uv, float time) {
    vec2 uvS = uv * 12.0 + vec2(time * 0.03, time * 0.025);
    float n = texture2D(uNormalTexture, uvS).r;
    return pow(n, 10.0);
}

float foamBreakup(vec2 uv, float time) {
    vec2 uvB = uv * 1.2 + vec2(time * 0.008, -time * 0.006);
    return texture2D(uNormalTexture, uvB).b;
}

void main() {

    vec2 screenCoord = gl_FragCoord.xy / uResolution;

    // --------------------------------------------------
    // MULTI-SCALE NORMALS
    // --------------------------------------------------

    vec4 noiseLarge = getNoise(
        vWorldPosition.xz * (uNoiseScale * 0.3),
        uTime * uNoiseSpeed * 0.5 * 0.5
    );

    vec4 noiseSmall = getNoise(
        vWorldPosition.xz * (uNoiseScale * 2.0),
        uTime * uNoiseSpeed * 2.0 * 0.5
    );

    vec3 surfaceNormal = normalize(
        noiseLarge.xzy * vec3(1.2, 1.0, 1.2) +
        noiseSmall.xzy * vec3(0.4, 0.2, 0.4)
    );

    // --------------------------------------------------
    // RIPPLE + CONSTANT FOAM
    // (rippleNormal et le sampling concentrique de uDepthMap ont été
    // retirés : leurs résultats — rippleNormal, distToShipNorm, notInside —
    // n'étaient lus nulle part, ~55 lectures texture/pixel pour rien)
    // --------------------------------------------------

    #if RIPPLES
    // Une seule lecture pour ripple (.r) + foam constante (.b), même texel
    vec2 rippleRB = texture2D(uRipples, vRippleUv).rb;
    float ripple = rippleRB.x;
    float constantFoamBase = rippleRB.y;

	// Bruit pour casser l'uniformité (contour déformé comme le ring)
	vec3 cfoamNoiseSample = texture2D(uNormalTexture, vWorldPosition.xz * 0.1 + uTime * 0.00002).rgb;
	float cfoamNoiseVal = cfoamNoiseSample.r * 2.0 - 1.0;

	vec4 nLow  = getNoise(vWorldPosition.xz * 1.0, uTime * uNoiseSpeed * 0.4);
	vec4 nHigh = getNoise(vWorldPosition.xz * 4.0, uTime * uNoiseSpeed * 0.8);
	float foamNoise = (nLow.r * 0.65 + nHigh.r * 0.35) * 0.5 + 0.5;

	// Threshold animé : remap la valeur diffuse en une bande déformée
	float foamCut = 0.15 + cfoamNoiseVal * 0.3;
	float constantFoam = smoothstep(foamCut, foamCut + 0.15, constantFoamBase);

	// Modulation + trous
	constantFoam *= mix(0.9, 1.3, foamNoise);
	constantFoam *= smoothstep(0.3, 0.6, foamNoise);
    #else
    // Mobile : la sim ripples ne tourne pas (textures noires) — mêmes valeurs
    // que l'échantillonnage, sans payer 11 lectures texture par pixel
    float ripple = 0.0;
    float constantFoam = 0.0;
    #endif

    // --------------------------------------------------
    // VIEW / LIGHT
    // --------------------------------------------------

    vec3 viewDir = normalize(cameraPosition - vWorldPosition.xyz);
    vec3 lightDir = normalize(uLightPos);

    // --------------------------------------------------
    // FRESNEL (Schlick)
    // --------------------------------------------------

    float NdotV = max(dot(surfaceNormal, viewDir), 0.0);

    float F0 = 0.02;
    float fresnel = F0 + (1.0 - F0) * pow(1.0 - NdotV, 5.0);
    fresnel = mix(fresnel, 1.0, 0.1);

    // --------------------------------------------------
    // SPECULAR (PBR-ish)
    // --------------------------------------------------

    vec3 halfDir = normalize(lightDir + viewDir);
    float NdotH = max(dot(surfaceNormal, halfDir), 0.0);

    float roughness = 0.08;
    float specPower = mix(20.0, 200.0, 1.0 - roughness);

    float specular = pow(NdotH, specPower) * uLightIntensity;

    // --------------------------------------------------
    // DIFFUSE + SUBSURFACE
    // --------------------------------------------------

    float NdotL = max(dot(surfaceNormal, lightDir), 0.0);

    vec3 diffuse = uColor * NdotL * 0.3;

    float subsurface = pow(1.0 - NdotV, 3.0);
    diffuse += uColor * subsurface * 0.2;

    // --------------------------------------------------
    // DEPTH WATER COLOR
    // --------------------------------------------------

    float rawDepth = unpackRGBAToDepth(texture2D(uDepthTexture, screenCoord));

    float depthFactor = 0.0;

    if (rawDepth < 0.9999) {
        float sceneDepth = linearizeDepth(rawDepth, uCameraNear, uCameraFar);
        float planeDepth = linearizeDepth(gl_FragCoord.z, uCameraNear, uCameraFar);

        depthFactor = clamp((sceneDepth - planeDepth) * 0.2, 0.0, 1.0);
    }

    vec3 deepColor = uColor * 0.2;
    vec3 shallowColor = uColor;

    vec3 waterColor = mix(shallowColor, deepColor, depthFactor);

    // --------------------------------------------------
    // REFLECTION / REFRACTION
    // --------------------------------------------------

    float reflectionDist = gl_FragCoord.z / gl_FragCoord.w;
    float normalizedReflection = smoothstep(500., 600., reflectionDist);

    vec2 distortion = surfaceNormal.xz * 0.05;

    // uUnderwater est désormais continu (0 → surface, 1 → immergé) :
    // on échantillonne les deux textures et on blende, plus de switch dur
    float underwaterBlend = clamp(uUnderwater, 0.0, 1.0);

    vec2 refractUV = clamp(screenCoord + distortion * 2.0, 0.0, 1.0);
    vec3 refractionColor = texture2D(uRefractionTexture, refractUV).rgb;

    vec2 mirrorUV = vMirrorCoord.xy / max(vMirrorCoord.w, 0.0001);
    mirrorUV = clamp((mirrorUV + distortion * (1. - normalizedReflection)), 0.0, 1.0);
    vec3 reflectionColor = vec3(0.0);
    if (vMirrorCoord.w > 0.0) {
        reflectionColor = texture2D(uTexture, mirrorUV).rgb * uReflectionStrength;
    }

    vec3 reflectRefractColor = mix(reflectionColor, refractionColor, underwaterBlend);

    // --------------------------------------------------
    // FOAM (DEPTH INTERSECTION + RIPPLE RINGS + CONSTANT)
    // --------------------------------------------------

    // Même texel que rawDepth plus haut : on réutilise au lieu de relire
    float rawDepthFoam = rawDepth;
    float foam = 0.0;

    vec3 noiseSample = texture2D(uNormalTexture, vWorldPosition.xz * 0.1 + uTime * 0.00002).rgb;
    float noiseVal = noiseSample.r * 2.0 - 1.0;
    float animatedThreshold = uFoamThreshold * 5.0 + noiseVal * uFoamThreshold * 10.0;

    // ── Foam de contact (intersection avec la géométrie) ──
    if (rawDepthFoam < 0.9999) {
        float sceneDepth = linearizeDepth(rawDepthFoam, uCameraNear, uCameraFar);
        float planeDepth = linearizeDepth(gl_FragCoord.z, uCameraNear, uCameraFar);
        float depthDiff = (sceneDepth - planeDepth) * 10.0;

        if (depthDiff > 0.0) {
            float contactFoam = 1.0 - smoothstep(0.0, animatedThreshold, depthDiff);
            foam = max(foam, clamp(contactFoam, 0.0, 1.0));
        }
    }

    // ── Foam de ring (crêtes des ripples) ──
    float rippleAmplified = ripple * 10.0;
    float ringThreshold = 0.005 + noiseVal * 0.008;
    float ringFoam = smoothstep(ringThreshold, ringThreshold + 0.01, rippleAmplified);
    foam = max(foam, ringFoam);

    // ── Foam constante autour du ship ──
    foam = max(foam, constantFoam);

    // --------------------------------------------------
    // FINAL COMPOSITION
    // --------------------------------------------------

    vec3 litColor = (diffuse + specular * uLightColor);

    // Les deux chemins (émergé / immergé) sont calculés puis blendés par
    // underwaterBlend pour une transition douce au passage de la surface
    float screenY = gl_FragCoord.y / uResolution.y;
    vec3 fogShallow = mix(uFogBottom, uFogTop, screenY);
    vec3 fogDeep    = mix(uFogBottomDeep, uFogTopDeep, screenY);
    vec3 fogColor   = mix(fogShallow, fogDeep, uDepth);

    float fragDist  = gl_FragCoord.z / gl_FragCoord.w;
    float fogFactor = smoothstep(uFogNear, uFogFar, fragDist);

    vec3 refractWithFog = mix(reflectRefractColor, fogColor, fogFactor);
    vec3 underColor = mix(litColor, refractWithFog, 0.85 + fogFactor * 0.15);
    underColor = mix(underColor, fogColor, fogFactor);

    vec3 aboveColor = mix(litColor, reflectRefractColor, fresnel);

    vec3 baseColor = mix(aboveColor, underColor, underwaterBlend);

    baseColor = clamp(baseColor, 0.0, 1.0);

    // --------------------------------------------------
    // FOAM RÉALISTE (BULLES)
    // --------------------------------------------------

    float foamMask = clamp(foam * uFoamStrength, 0.0, 1.0);

    vec3 finalColor = baseColor;

    // Pattern complet uniquement sur les pixels d'écume (branche cohérente,
    // foam ≈ 0 sur l'essentiel de la surface)
    if (foamMask > 0.001) {
        float fTime = uTime * 0.001;

        // L'écume dérive avec le vent (même direction que la houle) au lieu
        // de rester épinglée à la surface
        vec2 foamUv = (vWorldPosition.xz - vec2(0.9191, 0.3939) * fTime * 0.6) * 0.1;

        float bubbles  = foamBubblePattern(foamUv, fTime);
        float sparkle  = foamSparkle(foamUv, fTime);
        float breakup  = foamBreakup(foamUv, fTime);

        // Dentelle : seuil inversement lié à l'intensité — cœur quasi plein,
        // bords qui se dissolvent en filaments et flocons au lieu d'un
        // dégradé laiteux. C'est la signature visuelle de la vraie écume.
        float pattern = bubbles * 0.65 + breakup * 0.35;
        float cut = (1.0 - foamMask) * 0.75;
        float lace = smoothstep(cut, cut + 0.22, pattern);

        // Micro-trous : même l'écume dense n'est jamais un aplat
        lace *= mix(0.78, 1.0, breakup);

        // Volume : creux teintés eau, bosses claires
        vec3 foamShadow = mix(uFoamColor * 0.62, waterColor, 0.25);
        vec3 foamBright = min(uFoamColor + vec3(0.06), vec3(1.0));
        vec3 bubbleColor = mix(foamShadow, foamBright, bubbles);

        // Étincelles réservées à l'écume dense
        bubbleColor += vec3(sparkle) * 0.6 * lace * foamMask;

        // L'écume résiduelle fine se teinte vers l'eau (bulles éparses)
        bubbleColor = mix(bubbleColor, waterColor, (1.0 - foamMask) * 0.3);

        finalColor = mix(baseColor, bubbleColor, lace);
    }

    gl_FragColor = vec4(finalColor, 1.0);

    #include <fog_fragment>
    #include <dithering_fragment>
}`,rn=class extends O{constructor(e={}){e.scene,e=o({uniforms:{uTextureMatrix:{value:null},uTexture:{value:null},uRefractionTexture:{value:null},uUnderwater:{value:null},uNormalTexture:{value:null},uLightPos:G.WebGL.globalUniforms.uLightPosition,uLightIntensity:{value:5},uShine:{value:180},uDiffuse:{value:.4},uDiffuseColor:{value:new P(`#4d0606`)},uSpecularColor:{value:new P(`#aaccdd`)},uReflectionDistortion:{value:.25},uReflectionStrength:{value:1.2},uNoiseScale:{value:1e-4},uNoiseSpeed:{value:G.waterSpeed},uAmplitude:{value:G.waterAmp},uFrequency:{value:.5},uWaveSpeed:{value:.1},uTime:G.WebGL.globalUniforms.uTime,uColor:{value:new P(`#50b8f0`)},uLightColor:{value:new P(`#ffdddd`)},uAntiProgress:{value:0},uRipplesOrigin:{value:new N(.47,.46)},uRipplesFrequency:{value:0},uRipplesIntensity:{value:0},uRipplesSpeed:{value:1},uRipplesStart:{value:.03},uRipplesEnd:{value:.02},notGlowing:{value:0},uDepthTexture:{value:null},uCameraNear:{value:G.Underwater.camera.near},uCameraFar:{value:G.Underwater.camera.far},uResolution:G.WebGL.globalUniforms.uResolution,uFoamThreshold:{value:2},uFoamSize:{value:10},uFoamColor:{value:new P(`#FFFFFF`)},uFoamStrength:{value:1e3},uImpactPos:{value:new w(0,.5,-12)},uUnderwater:{value:0},uRipples:{value:null},uRippleTexelSize:{value:0},uRippleBoundsMin:{value:new N},uRippleBoundsMax:{value:new N},uDepthMap:{value:null},...o(en.lights),...o(en.fog),...G.Underwater.fogUniforms},defines:{USE_BELOW:!1,RIPPLES:+!G.isHandheld,CHOP:+!G.isHandheld,USE_SHADOWMAP:!1}},e),super({vertexShader:tn,fragmentShader:nn,uniforms:e.uniforms,defines:e.defines,side:2,fog:!0,lights:!0,dithering:!0}),this.globalUniforms=e.globalUniforms,this.uniforms=Object.assign(this.uniforms,this.globalUniforms)}clone(e){let t=super.clone();return t.uniforms=Object.assign(t.uniforms,this.globalUniforms),t.uniforms=Object.assign(t.uniforms,e),t}},an=`#define GLSLIFY 1
#define PI 3.141592653589793

varying vec3 vNormal;
varying vec2 vUv;
varying vec4 vViewPosition;
uniform float uCameraRotation;
uniform float uTime;
uniform float uProgress;
varying float vFade;
varying float vOpacity;
varying float vScale;
attribute float randomVal;
varying float vRandomVal;
uniform float uTranslateVal;
varying vec4 vWorldPosition;

#include <common>
#include <fog_pars_vertex>
// #include <shadowmap_pars_vertex>

mat4 rotationMatrix(vec3 axis, float angle)
{
		axis = normalize(axis);
		float s = sin(angle);
		float c = cos(angle);
		float oc = 1.0 - c;

		return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
														oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
														oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
														0.0,                                0.0,                                0.0,                                1.0);
}
mat4 translationMatrix(vec3 axis)
{

		return mat4(1., 0., 0., 0.,
					0., 1., 0., 0.,
					0., 0., 1., 0., 
					axis.r , axis.g , axis.b , 1.);
}

mat4 scaleMatrix(float val)
{

		return mat4(val, 0., 0., 0.,
					0., val, 0., 0.,
					0., 0., val, 0., 
					0., 0., 0., 1.);
}

float sineInOut(float t) {
  return -0.5 * (cos(PI * t) - 1.0);
}
float quadraticInOut(float t) {
  float p = 2.0 * t * t;
  return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
}

void main()	{
	vUv = uv;
	vRandomVal = randomVal;
	mat4 transformedMatrix = instanceMatrix;
	vNormal = normal;
	vFade = 0.5;

	#include <normalsVert>
	#include <begin_vertex>
	#include <project_vertex>
	// #include <shadowmap_vertex>
	#include <fog_vertex>
	
	vec4 newPos = vec4(position, 1.);
	vScale = 1. + max(randomVal * PI * 2. * 0.4 + sin(uTime * 0.001 + randomVal * PI * 2. * 0.2) * 0.1 + sineInOut(uProgress) * 2., 0.);
	newPos *= rotationMatrix(vec3(0., 0., 1.), uTime * 0.00002 * randomVal) * scaleMatrix(vScale) ;
	vec3 up = vec3(modelViewMatrix[0][1], modelViewMatrix[1][1], modelViewMatrix[2][1]);
	vec3 right = vec3(modelViewMatrix[0][0], modelViewMatrix[1][0], modelViewMatrix[2][0]);
	newPos.xyz = right * newPos.x + up * newPos.y;
	transformedMatrix *= translationMatrix(vec3(sign(transformedMatrix[3][1]) * 3. * quadraticInOut(uTranslateVal), 0., 0.));
	mvPosition = modelViewMatrix * transformedMatrix * newPos;
    vViewPosition = mvPosition;
	vec4 worldPosition =modelMatrix * transformedMatrix * newPos;
	vOpacity = smoothstep(5.5, 6.1, distance(cameraPosition, worldPosition.xyz));
	// vOpacity = 1.;
	
	worldPosition = newPos;
	#ifdef USE_INSTANCING
		worldPosition = transformedMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;

	vWorldPosition = worldPosition;

	vUv = uv;
	
    gl_Position = projectionMatrix * mvPosition;
}`,on=`#define GLSLIFY 1
#include <defaultFrag>
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <dithering_pars_fragment>

#define PI 3.141592653589793

varying vec2 vUv;
varying vec3 vNormal;
varying vec4 vWorldPosition;
varying vec4 vViewPosition;
varying float vFade;
varying float vOpacity;
varying float vScale;
varying float vRandomVal;

uniform float uCameraNear;
uniform float uCameraFar;
uniform vec2 uResolution;
uniform sampler2D uDepthTexture;
uniform float uDepthFade;
uniform float uDepthIntensity;
uniform sampler2D uMaskTexture;
uniform float uEnableFade;
uniform vec2 uSpriteGrid;
uniform vec3 uColor;
uniform vec3 uColorBody;
uniform vec3 uColorCore;
uniform float uAlpha;
uniform float uProgress;
uniform float uDepthProgress;
uniform samplerCube tEnvMap;

float readDepth(sampler2D depthSampler, vec2 coord) {
    float fragCoordZ = texture2D(depthSampler, coord).x;
    float viewZ = perspectiveDepthToViewZ(fragCoordZ, uCameraNear, uCameraFar);
    return viewZToOrthographicDepth(viewZ, uCameraNear, uCameraFar);
}

float sineInOut(float t) {
    return -0.5 * (cos(PI * t) - 1.0);
}

// Convert to HSL, reduce S by 30%, convert back
vec3 rgb2hsl(vec3 c) {
    float maxC = max(c.r, max(c.g, c.b));
    float minC = min(c.r, min(c.g, c.b));
    float delta = maxC - minC;
    float l = (maxC + minC) * 0.5;
    float s = delta < 0.0001 ? 0.0 : delta / (1.0 - abs(2.0 * l - 1.0));
    float h = 0.0;
    if (delta > 0.0001) {
        if (maxC == c.r)      h = mod((c.g - c.b) / delta, 6.0);
        else if (maxC == c.g) h = (c.b - c.r) / delta + 2.0;
        else                  h = (c.r - c.g) / delta + 4.0;
        h /= 6.0;
    }
    return vec3(h, s, l);
}

vec3 hsl2rgb(vec3 c) {
    float h = c.x, s = c.y, l = c.z;
    float a = s * min(l, 1.0 - l);
    vec3 f = vec3(0.0, 8.0, 4.0);
    f = mod(h * 12.0 + f, 12.0);
    return l - a * max(min(min(f - 3.0, 9.0 - f), 1.0), -1.0);
}

void main() {

    vec4 diffuseColor = vec4(uColor, uAlpha);
	// float innerDepth = 1.0 - clamp(vViewPosition.z / uCloudDepth, 0.0, 1.0);
	float posVariation = sin(vWorldPosition.x * 0.2 + vWorldPosition.z * 0.15) * 0.5 + 0.5;
	posVariation = smoothstep(0.3, 0.7, posVariation);

	vec3 cloudColor = mix(uColorCore, uColorBody, posVariation);
	// Quasiment pas de variation aléatoire — les nuages s'homogénéisent
	cloudColor = mix(cloudColor, uColor, 0.4);

	vec3 cloudHSL = rgb2hsl(cloudColor);
	cloudHSL.y *= 0.7; // -30% saturation
	cloudColor = hsl2rgb(cloudHSL);

	diffuseColor.rgb = cloudColor;

    // Soft depth intersection
    vec2 screenCoord = gl_FragCoord.xy / uResolution;
    float sceneDepth = readDepth(uDepthTexture, screenCoord);
    float currentDepth = viewZToOrthographicDepth(vViewPosition.z, uCameraNear, uCameraFar);
    float depthDiff = abs(currentDepth - sceneDepth) / uDepthIntensity;
    float depthFade = mix(1.0, clamp(depthDiff, 0.0, 1.0), uDepthFade);

    // Sprite mask
   // Mask plus agressif sur les bords
  float mask = max(texture2D(uMaskTexture, vUv).r - 0.1, 0.0);

    diffuseColor.a *= 0.95 * depthFade * mask * vOpacity;
    gl_FragColor = diffuseColor;
    gl_FragColor = diffuseColor;

    #include <fog_fragment>
    #include <dithering_fragment>
}`,sn=class extends O{constructor(e={}){e=o({uniforms:{uMaskTexture:{value:new he},uColor:{value:e.uColor},uColorBody:{value:e.uColorBody},uColorCore:{value:e.uColorCore},uAlpha:{value:.2},alphaMap:{value:e.alphaMap},uTime:G.WebGL.globalUniforms.uTime,uCameraNear:{value:0},tEnvMap:{value:null},uCameraFar:{value:0},uDepthFade:{value:1},uDepthIntensity:{value:1},uResolution:{value:new N},uDepthTexture:{value:null},uEnableFade:{value:1},uSpriteGrid:{value:new N(4,4)},notGlowing:{value:0},uProgress:{value:0},uTranslateVal:{value:0},...o(en.fog)},defines:{}},e),super({vertexShader:an,fragmentShader:on,uniforms:e.uniforms,defines:e.defines,transparent:!0,alphaTest:.1,depthWrite:!1,dithering:!0}),this.globalUniforms=e.globalUniforms,this.uniforms=Object.assign(this.uniforms,this.globalUniforms)}clone(e){let t=super.clone();return t.uniforms=Object.assign(t.uniforms,this.globalUniforms),t.uniforms=Object.assign(t.uniforms,e),t}},cn=`#define GLSLIFY 1
uniform float uTime;
uniform float uAmp;
uniform float uThickness;
uniform float uZOffset;
uniform float uCamZ;
uniform float uCamY;
uniform float uCamX;
uniform float uAspect;
uniform float uFov;
uniform float uNoiseSpeed;
uniform float uRadiusNoiseAmp;
uniform float uRadiusNoiseSpeed;
uniform vec2 uWaveCenter;
uniform vec3 uCamForward;
uniform vec3 uCamRight;
uniform vec3 uCamUp;

varying vec2 vUv;
varying vec3 vNormal;

#include <waterNoise>

void main() {
    vUv = uv;

    float halfFovRad = uFov * 0.5 * 3.14159 / 180.0;
    float halfW = tan(halfFovRad) * uZOffset * uAspect * 2.0;

    vec3 camPos = vec3(uCamX, uCamY, uCamZ);
    vec3 center = camPos + uCamForward * uZOffset;
    center.y = 0.0;

    float cylRadius = 300.0;
    vec3 worldPos = center
        + uCamRight * (position.x / cylRadius) * halfW;

    vec2 noiseCoord = vec2(worldPos.x, worldPos.z);
    float eps = 2.0;
    // waterSurfaceHeight : même formule que le plan d'eau (cf. <waterNoise>)
    // — advection vent + crêtes + Gerstner — sinon le ruban se désynchronise
    float tSec = uTime * uNoiseSpeed;

    // Même atténuation radiale que le plan (il n'ondule que dans un disque
    // de 50 unités autour de son centre) : là où le plan est plat, le ruban
    // doit l'être aussi
    float distFromCenter = clamp(length(noiseCoord - uWaveCenter) / 50.0, 0.0, 1.0);
    float amp = uAmp * smoothstep(1.0, 0.99, distFromCenter);

    float wh  = waterSurfaceHeight(noiseCoord, tSec, amp);
    float whX = waterSurfaceHeight(noiseCoord + vec2(eps, 0.0), tSec, amp);

    vec3 tangent = normalize(vec3(eps, whX - wh, 0.0));
    vec3 worldUp = vec3(0.0, 1.0, 0.0);
    vec3 binormal = normalize(cross(tangent, worldUp));

    float angle = position.y * 3.14159;

    // Noise sur le radius : varie le long du ruban (X) et dans le temps
     float radiusNoise = waterHeight(
        vec2(worldPos.x * 5., 0.0),
        uTime * uRadiusNoiseSpeed
    ) * uRadiusNoiseAmp;

    // radiusNoise += waterHeight(
    //     vec2(worldPos.x * 500.008, 10.0),
    //     uTime * uRadiusNoiseSpeed * 1.7
    // ) * uRadiusNoiseAmp * 0.5;
    float thickness = uThickness * (1.0 + radiusNoise);

    vNormal = normalize(cos(angle) * worldUp + sin(angle) * binormal) * 0.5 + 0.5;

    worldPos.y = wh + position.y * thickness;

    vec4 viewPos = viewMatrix * vec4(worldPos, 1.0);
    viewPos.z = -uZOffset;
    gl_Position = projectionMatrix * viewPos;
}`,ln=`#define GLSLIFY 1
 varying vec2 vUv;
 varying vec3 vNormal;
                
void main() {
	// UV debug colors
	gl_FragColor = vec4(vNormal, 1.0);
}`,un=class extends O{constructor(e={}){e=o({uniforms:{uTime:G.WebGL.globalUniforms.uTime,uAmp:{value:G.waterAmp},uThickness:{value:.002},uNoiseSpeed:{value:G.waterSpeed},uZOffset:{value:G.Underwater.camera.near},uCamZ:{value:25},uCamY:{value:0},uCamX:{value:0},uAspect:{value:window.innerWidth/window.innerHeight},uFov:{value:60},uCamForward:{value:new w},uCamRight:{value:new w},uCamUp:{value:new w},uRadiusNoiseAmp:{value:.5},uRadiusNoiseSpeed:{value:.003},uWaveCenter:{value:new N}},defines:{}},e),super({vertexShader:cn,fragmentShader:ln,uniforms:e.uniforms,defines:e.defines,side:2,depthTest:!0,depthWrite:!0}),this.globalUniforms=e.globalUniforms,this.uniforms=Object.assign(this.uniforms,this.globalUniforms)}clone(e){let t=super.clone();return t.uniforms=Object.assign(t.uniforms,this.globalUniforms),t.uniforms=Object.assign(t.uniforms,e),t}},dn=`#define GLSLIFY 1
varying vec3 vNormal;
varying vec2 vUv;
uniform float uTime;
uniform float uAmp;
uniform float uNoiseSpeed;

#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
#include <waterNoise>
void main()	{
	#include <normalsVert>
	vNormal = normal;
	vUv = uv;

	vec3 newPos = position;

	vec3 worldPos = (modelMatrix * vec4(newPos, 1.0)).xyz;
	vec2 noiseCoord = vec2(worldPos.x, worldPos.z);

	 // Distance horizontale entre le vertex et la caméra
    vec2 camXZ = vec2(cameraPosition.x, cameraPosition.z);
    vec2 vertXZ = vec2(worldPos.x, worldPos.z);

	float distFromCenter = length(position.xy) / 500.0;
	distFromCenter = clamp(distFromCenter, 0.0, 1.0);
    float distToCam = length(vertXZ - camXZ);

	    // uAmplitude proche, uAmplitude + 2 loin — transition sur 50 unités
    float ampFactor = smoothstep(6., 7., distToCam) ;
    float amplitude = uAmp;
	amplitude *= smoothstep(1.0, 0.99, distFromCenter);
	
	float h = waterHeight(noiseCoord, uTime * uNoiseSpeed) * amplitude;

	newPos.y += h;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPos, 1.0 );
}`,fn=`#define GLSLIFY 1
#include <defaultFrag>

uniform vec3 uColor;
uniform float uInsideCube;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
    float brightness = gl_FrontFacing ? 1.0 : 0.0; // front = blanc, back = noir
    gl_FragColor = vec4(vec3(brightness), 1.0);
}`,pn=class extends O{constructor(e={}){e=o({uniforms:{uTime:G.WebGL.globalUniforms.uTime,uNoiseSpeed:{value:G.waterSpeed},uAmp:{value:G.waterAmp},uAspect:{value:window.innerWidth/window.innerHeight},uColor:{value:new P(0)},uInsideCube:{value:0}},defines:{}},e),super({vertexShader:dn,fragmentShader:fn,uniforms:e.uniforms,defines:e.defines,side:2,transparent:!1}),this.globalUniforms=e.globalUniforms,this.uniforms=Object.assign(this.uniforms,this.globalUniforms)}clone(e){let t=super.clone();return t.uniforms=Object.assign(t.uniforms,this.globalUniforms),t.uniforms=Object.assign(t.uniforms,e),t}},mn=`#define GLSLIFY 1
varying vec3 vNormal;
varying float vWorldY;

void main()	{

	vec4 worldPos = modelMatrix * vec4(position, 1.);
	vWorldY = worldPos.y;
	
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hn=`#define GLSLIFY 1
#include <defaultFrag>

uniform vec3 uColor;
uniform vec2 uResolution;
varying vec3 vNormal;
varying vec2 vUv;
varying float vWorldNormal;
varying float vWorldY;
uniform float uTime;
uniform float uOpacity;
uniform float uIsUnderwater;

// Le voronoi procédural (2×9 cellules avec pow(x,8) par pixel plein écran)
// est baké dans uVoronoiTex, texture tileable de 32 cellules générée au
// build (GodRays._bakeVoronoiTexture) — 2 lectures remplacent tout le calcul.
uniform sampler2D uVoronoiTex;
#define VORONOI_CELLS 32.0

vec2 cart2polar(vec2 uv){
float phi=atan(uv.y,uv.x);
float r=length(uv);
return vec2(phi,r);
}

void main() {
	float time = uTime * 0.001;
    vec2 uv=gl_FragCoord.xy/uResolution;

	vec2 p=uv;
	p.x*=uResolution.x/uResolution.y;

	uv=(uv-.5)*2.;
	uv.x*=uResolution.x/uResolution.y;

	vec3 col=vec3(0.);

	uv.y-=5.;
	// uv.y *= 10.;
	uv/=100.;
	uv=cart2polar(uv);

	float n1=texture2D(uVoronoiTex,((vec2(uv.x,0.)+.04*time)*10.)/VORONOI_CELLS).r;
	float n2=texture2D(uVoronoiTex,((vec2(.1,uv.x)+.04*time*1.5)*10.)/VORONOI_CELLS).r;
	float n3=min(n1,n2);
	col=vec3(n3);

	// col=vec3(1.);
	float mask=smoothstep(.15,.86,p.y);
	float alpha=n3*mask*.8;

	col=mix(vec3(0.,.412,.580),vec3(1.),alpha);

	float aboveWater = smoothstep(-2., -10., vWorldY);   // 1.0 si y >= 0, sinon 0.0
	alpha *= mix(1., aboveWater, uIsUnderwater);

	gl_FragColor=vec4(vec3(1.), alpha * 0.3 * uOpacity);
}`,gn=class extends O{constructor(e={}){e=o({uniforms:{uColor:{value:new P(16777215)},uResolution:G.WebGL.globalUniforms.uResolution,uTime:G.WebGL.globalUniforms.uTime,uOpacity:{value:1},uIsUnderwater:{value:+(G.activeScene.name===`Underwater`)},uVoronoiTex:{value:null}},defines:{}},e),super({vertexShader:mn,fragmentShader:hn,uniforms:e.uniforms,defines:e.defines,transparent:!0,depthWrite:!1}),this.globalUniforms=e.globalUniforms,this.uniforms=Object.assign(this.uniforms,this.globalUniforms)}clone(e){let t=super.clone();return t.uniforms=Object.assign(t.uniforms,this.globalUniforms),t.uniforms=Object.assign(t.uniforms,e),t}},_n=`#define GLSLIFY 1
// #include <defaultVert>
#include <dynamicBaseVertPars>
// varying vec3 vNormal;
varying vec2 vUv;
#define PI 3.14159265359
varying vec3 vColor;
varying float vCenterDistance;
// attribute mat4 instanceMatrix;
uniform float uTime;
uniform vec2 uPos0;
uniform vec2 uPos1;
uniform float uVel;
varying vec3 worldNormal;
varying vec3 worldPosition;
varying vec3 eyeVector;
varying float vZVal;
uniform float uAppear;

// NOISE 

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}

float sdSegment( in vec2 p, in vec2 a, in vec2 b )
{
    vec2 pa = p-a, ba = b-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h );
}

float EaseInOutSine(float x)
{ 
    return -(cos(PI * x) - 1.0) / 2.0;
}

void main()	{
	vUv = uv;
	vec3 pos = position;
	vec3 objectNormal = normal;
   	eyeVector = normalize(worldPosition.xyz - cameraPosition);

	vec4 test = vec4(pos, 1.0) * rotationMatrix(vec3(0., 0., -1.), uPos0.x * 0.02) * rotationMatrix(vec3(-1., 0., 0.), uPos0.y * 0.02);
	objectNormal = vec4(vec4(objectNormal, 1.) * rotationMatrix(vec3(0., 0., -1.), uPos0.x * 0.02) * rotationMatrix(vec3(-1., 0., 0.), uPos0.y * 0.02)).rgb;
	worldNormal = normalize( modelViewMatrix * vec4(objectNormal, 0.0)).xyz;

	vec3 transformedPosition = test.rgb;
	#include <dynamicBaseVert>

	mvPosition = modelViewMatrix * test;
	vViewPosition = - mvPosition.xyz;

	gl_Position = projectionMatrix * mvPosition;
}`,vn=`#define GLSLIFY 1
#include <defaultFrag>
#include <dynamicBaseFragPars>

uniform sampler2D envMap;
uniform sampler2D backfaceMap;
uniform sampler2D matCapMap;

uniform vec2 resolution;
uniform float uFresnelVal;
uniform float uRefractPower;
uniform float uIOR;
uniform float uColorBlend;

varying vec3 worldNormal;
varying vec3 eyeVector;
varying vec2 vUv;
varying vec3 worldPosition;

float Fresnel(vec3 eye, vec3 normal) {
    return pow(1.0 - clamp(dot(-eye, normal), 0.0, 1.0), 3.0);
}

float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u * u * (3.0 - 2.0 * u);
    return mix(
        mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
        mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
        u.y
    );
}

void main() {
	float a = 0.2;
    vec2 screenUv = gl_FragCoord.xy / resolution;

    // Backface
    vec4 backface = texture2D(backfaceMap, screenUv);
    vec3 backfaceNormal = backface.rgb * 2.0 - 1.0; // remap 0→1 vers -1→1
    float backfaceDepth = backface.a;
    float frontfaceDepth = worldPosition.z;
    float thickness = max(0.0, frontfaceDepth - backfaceDepth);

    // Normale combinée front + back
    vec3 normal = normalize(worldNormal * (1.0 - a) - backfaceNormal * a);

    // Réfraction
    vec3 refracted = refract(eyeVector, normal, 1.0 / uIOR);
    vec2 refractNormal = refracted.xy * (1.0 - refracted.z * 0.85);

    // Dispersion chromatique
    vec3 refractCol = vec3(0.0);
    float slide;

    #pragma unroll_loop_start
    for (int i = 0; i < 8; i++) {
        slide = (float(UNROLLED_LOOP_INDEX) * 0.1) / 16.0 + noise(screenUv) * 0.05;
        refractCol.r += texture2D(envMap, screenUv - refractNormal * (uRefractPower + slide * 1.0)).r;
        refractCol.g += texture2D(envMap, screenUv - refractNormal * (uRefractPower + slide * 1.5)).g;
        refractCol.b += texture2D(envMap, screenUv - refractNormal * (uRefractPower + slide * 2.0)).b;
    }
    #pragma unroll_loop_end
    refractCol /= 8.0;

    // Épaisseur — léger tint sur les zones épaisses
    refractCol = mix(refractCol, vec3(0.9, 0.95, 1.0), thickness * 0.08);

    // Fresnel
    float f = Fresnel(eyeVector, normal);

    // Matcap (reflets)
    #ifdef USE_MATCAP
        vec3 viewDir = normalize(vViewPosition);
        vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
        vec3 y = cross(viewDir, x);
        vec2 uvMat = vec2(dot(x, normal), dot(y, normal)) * 0.5 + 0.5;
        vec4 matcapColor = texture2D(tMatcap, uvMat);

        vec3 outgoingLight;
        if (uBlendMode == 0)      outgoingLight = blendSoftLight(refractCol, matcapColor.rgb, uDiffuseMatcapBlend);
        else if (uBlendMode == 1) outgoingLight = blendLinearLight(refractCol, matcapColor.rgb, uDiffuseMatcapBlend);
        else if (uBlendMode == 2) outgoingLight = blendLighten(refractCol, matcapColor.rgb, uDiffuseMatcapBlend);
        else if (uBlendMode == 3) outgoingLight = blendOverlay(refractCol, matcapColor.rgb, uDiffuseMatcapBlend);
        else if (uBlendMode == 4) outgoingLight = blendAdd(refractCol, matcapColor.rgb, uDiffuseMatcapBlend);
        else                      outgoingLight = blendMultiply(refractCol, matcapColor.rgb, uDiffuseMatcapBlend);
    #else
        vec3 outgoingLight = refractCol;
    #endif

    outgoingLight = mix(outgoingLight, uColor, uColorBlend);

    // Fresnel highlight blanc sur les bords
    outgoingLight = mix(outgoingLight, vec3(1.0), f * uFresnelVal * 0.6);

    gl_FragColor = vec4(outgoingLight, 1.0);
}`,yn=class extends O{constructor(e={}){e=o({uniforms:{uColor:{value:new P(16777215)},uColorBlend:{value:.1},tDiffuse:{value:e.envMap},envMap:{value:e.envMap},resolution:{value:e.resolution},uTime:G.WebGL.globalUniforms.uTime,uAnimate:{value:0},uVel:{value:0},backfaceMap:{value:e.backfaceMap},tNormal:{value:e.tNormal},normalMap:{value:e.tNormal},tMatcap:{value:e.tMatCap},matCapMap:{value:e.tMatCap},uNormalStrength:{value:1},uNormalScale:{value:1},uRoughness:{value:0},uEnvMapBlend:{value:0},uHideZ:{value:1},uAppear:{value:1},uIOR:{value:50},uRefractPower:{value:.1},uFresnelVal:{value:.5},uDiffuseMatcapBlend:{value:.9},uBlendMode:{value:2}},defines:{SPECIAL_NORMAL:!0,USE_NORMAL:!0,USE_MATCAP:!0,USE_ROUGH:!0}},e),super({vertexShader:_n,fragmentShader:vn,uniforms:e.uniforms,defines:e.defines}),this.globalUniforms=e.globalUniforms,this.uniforms=Object.assign(this.uniforms,this.globalUniforms)}clone(e){let t=super.clone();return t.uniforms=Object.assign(t.uniforms,this.globalUniforms),t.uniforms=Object.assign(t.uniforms,e),t}},bn=`#define GLSLIFY 1
#include <defaultFrag>
#include <dynamicBaseFragPars>

varying vec3 worldNormal;
varying vec2 vUv;

void main() {
    gl_FragColor = vec4(normalize(worldNormal) * 0.5 + 0.5, 1.0);
}`,xn=class extends O{constructor(e={}){super({vertexShader:_n,fragmentShader:bn,side:1,uniforms:{uTime:G.WebGL.globalUniforms.uTime,uPos0:{value:new N},uPos1:{value:new w(0,0,0)},uAnimate:{value:0},uVel:{value:0},tNormal:{value:e.tNormal}}})}},Sn=`#define GLSLIFY 1
// #include <defaultVert>
#include <dynamicBaseVertPars>
// varying vec3 vNormal;
varying vec2 vUv;
#define PI 3.14159265359
varying vec3 vColor;
varying float vCenterDistance;
// attribute mat4 instanceMatrix;
uniform float uTime;
uniform vec2 uPos0;
uniform vec2 uPos1;
uniform float uVel;
varying vec3 worldNormal;
varying vec3 vWorldNormal;
varying vec3 worldPosition;
varying vec3 eyeVector;
varying float vZVal;
uniform float uAppear;
uniform float isFloating;
uniform float uMobile;

attribute vec3 newPosition;
attribute vec2 newUv;
attribute vec3 newNormal;
uniform float uPositionProgress;
varying float vOpacity;
varying float vWorldY;
// NOISE 

vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}
vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float n11(float p) {
    return fract(97531.2468 * sin(24680.135 * p));
}
float pnoise(vec3 P, vec3 rep) {
    vec3 Pi0 = mod(floor(P), rep);
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

const float noiseFreq = 0.5;
const float noiseStrength = 1.25;
const float noiseTime = 0.0002;

mat4 translationMatrix(vec3 axis)
{

		return mat4(1., 0., 0., 0.,
					0., 1., 0., 0.,
					0., 0., 1., 0., 
					axis.r, axis.g, axis.b, 1.);
}

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}

float sdSegment( in vec2 p, in vec2 a, in vec2 b )
{
    vec2 pa = p-a, ba = b-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h );
}

float EaseInOutSine(float x)
{ 
    return -(cos(PI * x) - 1.0) / 2.0;
}

// Hash scalaire simple
float hash12(vec2 p){
  float h = dot(p, vec2(127.1, 311.7));
  return fract(sin(h) * 43758.5453123);
}

// Value noise 2D (retourne 0..1)
float noise2d(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));

  // interpolation lissée (hermite)
  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// Variante centrée -1..1
float noise2dSigned(vec2 p){
  return noise2d(p) * 2.0 - 1.0;
}

void main()	{
	vUv = uv;
	vec3 pos = position;
	vec3 normalVal = normal;
	vec3 objectNormal = normalVal;
	

	vec4 test = vec4(pos, 1.0) * rotationMatrix(vec3(0., 0., -1.), uPos0.x * 0.02) * rotationMatrix(vec3(-1., 0., 0.), uPos0.y * 0.02);
	objectNormal = vec4(vec4(objectNormal, 1.) * rotationMatrix(vec3(0., 0., -1.), uPos0.x * 0.02) * rotationMatrix(vec3(-1., 0., 0.), uPos0.y * 0.02)).rgb;
	worldNormal = normalize( modelViewMatrix * vec4(objectNormal, 0.0)).xyz;

	vec3 transformedPosition = test.rgb;

	#include <dynamicBaseVert>

	float noise = noise2d(vec2( uTime * .25,  sin(uTime) * .25)) * .4 * isFloating;
	float rotNoise = noise2d(vec2( (uTime + 100.) * .25,  sin((uTime + 100.)) * .25)) * .4 * isFloating;

test = ( test * rotationMatrix(vec3(0., 0., 1.), rotNoise * 2. * isFloating) );
	test.y += noise;
	
	mat4 instance = instanceMatrix;
	instance[3].g += uTime * 0.001;
	vec3 displacement = vec3(
        pnoise(noiseFreq * instanceMatrix[3].rgb + vec3(0., uTime * noiseTime, 0.), vec3(101.0)) * noiseStrength,
        pnoise(noiseFreq * instanceMatrix[3].rgb + vec3(0., uTime * noiseTime, 0.), vec3(202.0)) * noiseStrength,
        pnoise(noiseFreq * instanceMatrix[3].rgb + vec3(0., uTime * noiseTime, 0.), vec3(303.0)) * noiseStrength
    );

	instance *= translationMatrix(displacement);

	instance[3].g = mix(mod(instance[3].g - cameraPosition.y * 0.05, 30.) - 15., mod(instance[3].g - cameraPosition.y * 0.05, 10.) - 5., uMobile);

	mvPosition = modelViewMatrix * instance * test;
	vViewPosition = - mvPosition.xyz;

mat3 fixedRotation = mat3(
    cos(PI * 0.5), 0.0, -sin(PI * 0.5),
    0.0,        1.0,  0.0,
    sin(PI * 0.5), 0.0,  cos(PI * 0.5)
);
	// worldNormal *= rotationMatrix;

	vec4 worldPos4 = modelMatrix * instance * test;
	worldPosition = worldPos4.xyz;
	eyeVector = normalize(worldPosition - cameraPosition);

	vOpacity =   smoothstep(6., 8., distance(cameraPosition, worldPosition.xyz));

	vec4 worldPos = modelMatrix * instance * test;
	vWorldY = worldPos.y;
	
	vWorldNormal = worldNormal;

	gl_Position = projectionMatrix * mvPosition;
}`,Cn=`#define GLSLIFY 1
uniform sampler2D envMap;
uniform sampler2D backfaceMap;
uniform sampler2D normalMap;

uniform vec2 resolution;
uniform float uRefractPower;
uniform float uFresnelVal;
uniform float uIOR;
uniform float uTime;
uniform float uNoiseStrength;
uniform float uUnderwater;

varying vec3 worldNormal;
varying vec3 eyeVector;
varying vec2 vUv;
varying vec3 worldPosition;
varying float vWorldY;

float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float hash1(float n) { return fract(sin(n) * 753.5453123); }

float noise3D(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 157.0 + 113.0 * p.z;
    return mix(
        mix(mix(hash1(n), hash1(n+1.), f.x), mix(hash1(n+157.), hash1(n+158.), f.x), f.y),
        mix(mix(hash1(n+113.), hash1(n+114.), f.x), mix(hash1(n+270.), hash1(n+271.), f.x), f.y),
        f.z
    );
}

vec3 iridescent(float p) {
    p = fract(p);
    float h = p * 6.0;
    float s = 0.7, v = 0.9;
    float i = floor(h);
    float f = fract(h);
    float q = v * (1.0 - s * f);
    float t = v * (1.0 - s * (1.0 - f));
    if (i < 1.0) return vec3(v, t, v * (1.0 - s));
    if (i < 2.0) return vec3(q, v, v * (1.0 - s));
    if (i < 3.0) return vec3(v * (1.0 - s), v, t);
    if (i < 4.0) return vec3(v * (1.0 - s), q, v);
    if (i < 5.0) return vec3(t, v * (1.0 - s), v);
    return vec3(v, v * (1.0 - s), q);
}

float circle(vec2 st, float r) {
    vec2 d = st - 0.5;
    return 1.0 - smoothstep(r - 0.01, r + 0.01, dot(d, d) * 4.0);
}

void main() {
    float t = uTime * 0.001;
    vec2 screenUv = gl_FragCoord.xy / resolution;

    vec2 c = vUv * 2.0 - 1.0;
    float r2 = dot(c, c);
    if (r2 > 1.0) discard;

    vec3 spherePos = vec3(c, sqrt(1.0 - r2));

    // Wobble normal
    float wobble = noise3D(spherePos * 2.0 + vec3(0.0, 0.0, t * 0.33)) * 2.0 - 1.0;
    vec3 normal = normalize(spherePos + wobble * 0.15 * uNoiseStrength);

    float cosTheta = abs(dot(eyeVector, normal));
    float fresnel = pow(1.0 - cosTheta, 4.25) + 0.075;

    // Réfraction
    vec3 refracted = refract(eyeVector, normal, 1.0 / uIOR);
    vec2 refractOffset = refracted.xy * uRefractPower;

    // Dispersion chromatique simple
    vec3 col;
    col.r = texture2D(envMap, screenUv + refractOffset * 1.0).r;
    col.g = texture2D(envMap, screenUv + refractOffset * 1.5).g;
    col.b = texture2D(envMap, screenUv + refractOffset * 2.0).b;

    // Iridescence
    vec3 iri = iridescent(wobble * 0.5 + 0.5);
    col += pow(fresnel, 0.85) * iri * 0.5;

    // Épaisseur
    float backfaceDepth = texture2D(backfaceMap, screenUv).a;
    float thickness = abs(backfaceDepth - worldPosition.z) * 0.1;
    col = mix(col, vec3(1.0), thickness * 0.3);

    float edgeMask = smoothstep(0.0, 1.0, length(c));
    col = mix(col, vec3(1.0), (1.0 - edgeMask) * 0.3 + edgeMask * uFresnelVal * fresnel);

    // Alpha
    float borderNoise = noise3D(spherePos * 3.0 + vec3(t)) * 2.0 - 1.0;
    float alpha = circle(vUv, 0.5 + borderNoise * 0.03 * uNoiseStrength * 2.5);

	float aboveWater = step(0.0, vWorldY) * (1. -uUnderwater);   // 1.0 si y >= 0, sinon 0.0
    alpha *= mix(0.15, 1.0, edgeMask + fresnel * 0.5) * (1. - aboveWater);

    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
}`,wn=class extends O{constructor(e={}){e=o({uniforms:{uColor:{value:new P(0)},tDiffuse:{value:e.envMap},normalMap:{value:e.normalMap},envMap:{value:e.envMap},resolution:{value:e.resolution},uTime:G.WebGL.globalUniforms.uTime,uPos0:{value:new N},uPos1:{value:new w(0,0,0)},uAnimate:{value:0},uVel:{value:0},backfaceMap:{value:e.backfaceMap},uUnderwater:{value:e.uUnderwater},tNormal:{value:e.tNormal},tMatcap:{value:e.tMatCap},matCapMap:{value:e.tMatCap},uMobile:{value:+!!G.isMobile},uNormalScale:{value:1},uBlendMode:{value:0},uRoughness:{value:1},uNoiseStrength:{value:.5},uDiffuseMatcapBlend:{value:0},uEnvMapBlend:{value:1},uHideZ:{value:0},uFade:{value:1},uAppear:{value:1},uIOR:{value:1},uRefractPower:{value:1.5},uFresnelVal:{value:.3},uPositionProgress:{value:0},uLogoProgress:{value:0},uOffsetUV:{value:new N},uProgress:{value:0},uCount:{value:0},uAlpha:{value:1},uBloom:{value:1},isFloating:{value:0},uRandom:{value:0},uForceNoBloom:{value:0}},defines:{SPECIAL_NORMAL:!0,USE_NORMAL:!0,USE_MATCAP:!0,USE_ROUGH:!1},variation:{alpha:!0}},e),super({vertexShader:Sn,fragmentShader:Cn,uniforms:e.uniforms,defines:e.defines,transparent:!0,alphaTest:.01,side:2}),this.globalUniforms=e.globalUniforms,this.uniforms=Object.assign(this.uniforms,this.globalUniforms)}clone(e){let t=super.clone();return t.uniforms=Object.assign(t.uniforms,this.globalUniforms),t.uniforms=Object.assign(t.uniforms,e),t}},Tn=`#define GLSLIFY 1
// #include <defaultVert>
#include <dynamicBaseVertPars>
// varying vec3 vNormal;
varying vec2 vUv;
#define PI 3.14159265359
varying vec3 vColor;
varying float vCenterDistance;
// attribute mat4 instanceMatrix;
uniform float uTime;
uniform vec2 uPos0;
uniform vec2 uPos1;
uniform float uVel;
varying vec3 worldNormal;
varying vec3 vWorldNormal;
varying vec3 worldPosition;
varying vec3 eyeVector;
varying float vZVal;
uniform float uAppear;
uniform float isFloating;

uniform float uRandom;

attribute vec3 newPosition;
attribute vec2 newUv;
attribute vec3 newNormal;
uniform float uPositionProgress;
// NOISE 

vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x) {
    return mod289(((x*34.0)+1.0)*x);
}
vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float n11(float p) {
    return fract(97531.2468 * sin(24680.135 * p));
}
float pnoise(vec3 P, vec3 rep) {
    vec3 Pi0 = mod(floor(P), rep);
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep);
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P);
    vec3 Pf1 = Pf0 - vec3(1.0);
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

const float noiseFreq = 1.;
const float noiseStrength = 0.15;
const float noiseTime = 0.0002;

mat4 translationMatrix(vec3 axis)
{

		return mat4(1., 0., 0., 0.,
					0., 1., 0., 0.,
					0., 0., 1., 0., 
					axis.r, axis.g, axis.b, 1.);
}

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}

float sdSegment( in vec2 p, in vec2 a, in vec2 b )
{
    vec2 pa = p-a, ba = b-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h );
}

float EaseInOutSine(float x)
{ 
    return -(cos(PI * x) - 1.0) / 2.0;
}

// Hash scalaire simple
float hash12(vec2 p){
  float h = dot(p, vec2(127.1, 311.7));
  return fract(sin(h) * 43758.5453123);
}

// Value noise 2D (retourne 0..1)
float noise2d(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);

  float a = hash12(i);
  float b = hash12(i + vec2(1.0, 0.0));
  float c = hash12(i + vec2(0.0, 1.0));
  float d = hash12(i + vec2(1.0, 1.0));

  // interpolation lissée (hermite)
  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// Variante centrée -1..1
float noise2dSigned(vec2 p){
  return noise2d(p) * 2.0 - 1.0;
}

void main()	{
	vUv = uv;
	vec3 pos = position;
	vec3 normalVal = normal;
	vec3 objectNormal = normalVal;

	vec4 test = vec4(pos, 1.0) ;

	vec3 transformedPosition = test.rgb;

	#include <dynamicBaseVert>
	
	

	// instance[3].g = mod(instance[3].g - cameraPosition.y, 10.) - 5.;
	// Récupère le scale world depuis la modelMatrix
	float scaleX = length(vec3(modelMatrix[0][0], modelMatrix[1][0], modelMatrix[2][0]));
	float scaleY = length(vec3(modelMatrix[0][1], modelMatrix[1][1], modelMatrix[2][1]));
	float scaleZ = length(vec3(modelMatrix[0][2], modelMatrix[1][2], modelMatrix[2][2]));

	mat4 billboardMV = modelViewMatrix;
	billboardMV[0][0] = scaleX; billboardMV[0][1] = 0.0;    billboardMV[0][2] = 0.0;
	billboardMV[1][0] = 0.0;    billboardMV[1][1] = scaleY; billboardMV[1][2] = 0.0;
	billboardMV[2][0] = 0.0;    billboardMV[2][1] = 0.0;    billboardMV[2][2] = scaleZ;

	vec3 instanceWorldPos = vec3(10., 10. ,10.);

	test.y += pnoise(
		noiseFreq * (instanceWorldPos + vec3(uTime * 0.0003, uTime * 0.0001, 0.0)) + uRandom,
		vec3(101.0)
	) * noiseStrength;

	mvPosition = billboardMV * test;

	// worldPosition / worldNormal / eyeVector : ces varyings n'étaient jamais
	// écrites (valeur indéfinie → flicker sur GPU mobiles). On les reconstruit
	// depuis l'espace vue : la rotation de viewMatrix étant orthonormale, son
	// inverse est sa transposée.
	mat3 invView = transpose(mat3(viewMatrix));
	worldPosition = cameraPosition + invView * mvPosition.xyz;
	eyeVector = normalize(invView * mvPosition.xyz);
	worldNormal = normalize(invView * vec3(0.0, 0.0, 1.0));

	vViewPosition = -mvPosition.xyz;

gl_Position = projectionMatrix * mvPosition;
	vViewPosition = - mvPosition.xyz;

	mat3 rotationMatrix = mat3(
		cos(PI * 0.5), 0.0, -sin(PI * 0.5),
		0.0,        1.0,  0.0,
		sin(PI * 0.5), 0.0,  cos(PI * 0.5)
	);
	// worldNormal *= rotationMatrix;

	vWorldNormal = worldNormal;
	gl_Position = projectionMatrix * mvPosition;
}`,En=`#define GLSLIFY 1
#include <defaultFrag>
#include <dynamicBaseFragPars>

uniform sampler2D envMap;
uniform sampler2D uMap;
uniform sampler2D textureMap;
uniform sampler2D normalMap;
uniform sampler2D backfaceMap;
uniform sampler2D matCapMap;
uniform sampler2D uBackground;

uniform vec2 resolution;
uniform float uProgress;
uniform float uFresnelVal;
uniform float uRefractPower;
uniform float uBackfaceTest;
uniform float uTime;
uniform float uNoiseStrength;

varying vec3 worldNormal;
varying vec3 eyeVector;
varying vec3 viewDirection;
varying vec2 vUv; 
varying vec3 worldPosition;
varying float vZVal;
uniform float uHideZ;
uniform float uAppear;
uniform float uIOR;
uniform float uBloom;
uniform float uForceNoBloom;

float diffuse = .9;
vec3 fogColor = vec3(1.0);
vec3 reflectionColor = vec3(1.0);

float circle(in vec2 _st, in float _radius){
    vec2 dist = _st - vec2(0.5);
    return 1. - smoothstep(_radius - (_radius * 0.01),
                           _radius + (_radius * 0.01),
                           dot(dist, dist) * 4.0);
}

float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u * u * (3.0 - 2.0 * u);
    float res = mix(
        mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
        mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
    return res * res;
}

float hash(vec3 p) {
    p = fract(p * vec3(443.897, 441.423, 437.195));
    p += dot(p, p.yzx + 19.19);
    return fract((p.x + p.y) * p.z);
}

float noise3D(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(mix(hash(i),               hash(i + vec3(1,0,0)), f.x),
            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
        mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
        f.z
    );
}

vec3 iridescence(float cosTheta, float thickness) {
    float phase = thickness * cosTheta;
    float r = 0.5 + 0.5 * cos(phase * 6.2831 * 1.0);
    float g = 0.5 + 0.5 * cos(phase * 6.2831 * 1.3 + 1.0);
    float b = 0.5 + 0.5 * cos(phase * 6.2831 * 1.6 + 2.0);
    return vec3(r, g, b);
}

float causticPattern(vec3 p, float t) {
    float c = 0.0;
    c += abs(sin(noise3D(p * 3.0 + t * 0.3) * 6.28318));
    c += abs(sin(noise3D(p * 5.0 + t * 0.2 + vec3(1.7, 2.3, 0.5)) * 6.28318)) * 0.5;
    c += abs(sin(noise3D(p * 8.0 + t * 0.4 + vec3(3.1, 0.7, 2.9)) * 6.28318)) * 0.25;
    return pow(c / 1.75, 3.);
}

void main() {
    float ior = uIOR;
    vec2 uv = vUv;

    float frontfaceDepth = worldPosition.z;

    // ─── Normal map + bruit animé 3D ─────────────────────────────────────────
    vec3 sphereNormal = texture2D(normalMap, vUv).rgb;

    vec2 c = vUv * 2.0 - 1.0;
	// c *= .5;
    float zSphere = sqrt(max(0.0, 1.0 - dot(c, c)));
    vec3 spherePos = vec3(c * .3, zSphere);

    float t = uTime * 0.0005;
    float noiseX = noise3D(spherePos * 2.5 + vec3(t * 0.7, 0.0, t * 0.3)) * 2.0 - 1.0;
    float noiseY = noise3D(spherePos * 2.5 + vec3(0.0, t * 0.5, t * 0.6) + vec3(31.7, 17.3, 44.1)) * 2.0 - 1.0;
    float noiseZ = noise3D(spherePos * 2.0 + vec3(t * 0.4, t * 0.8, 0.0) + vec3(53.2, 27.8, 11.4)) * 2.0 - 1.0;

    vec3 noiseNormal = vec3(noiseX, noiseY, noiseZ) * uNoiseStrength * 2.;
    vec3 combinedNormal = normalize(sphereNormal + noiseNormal);

    vec3 tangent = normalize(vTangent);
    vec3 bitangent = normalize(vBitangent);
    mat3 vTBN = mat3(tangent, bitangent, worldNormal);

    // ─── Edge mask ────────────────────────────────────────────────────────────
    float distFromCenter = length(c);
    float edgeMask = smoothstep(0.0, 1.0, distFromCenter);
    float edgeRefract = mix(0.3, 1.0, edgeMask);
    float f = edgeMask;

    // ─── Réfraction ───────────────────────────────────────────────────────────
    vec3 flatNormal = vec3(0.0, 0.0, 1.0);
    vec3 refractedFlat = refract(eyeVector, flatNormal, 1.0 / ior);
    vec3 refracted = refract(eyeVector, combinedNormal, 1.0 / ior);
    if (length(refracted) < 0.001) refracted = reflect(eyeVector, combinedNormal);

    vec2 refractOffset = (refracted.xy - refractedFlat.xy) * uRefractPower * edgeRefract;
    uv += refractOffset;

    // Thickness backface
    vec4 backface = texture2D(backfaceMap, gl_FragCoord.xy / resolution);
    float backfaceDepth = backface.a;
    float thickness = max(0.0, abs(backfaceDepth - frontfaceDepth)) * 0.1;

    // ─── Dispersion chromatique ───────────────────────────────────────────────
    vec2 refractUv = uv;
    vec2 refractNormal = refractOffset * 0.05;

    vec3 refractCol = vec3(0.0);

    float slide;
    vec2 refractUvR;
    vec2 refractUvG;
    vec2 refractUvB;
    vec2 screenUv = vUv;

    #pragma unroll_loop_start
    for (int i = 0; i < 1; i++) {
        slide = (float(UNROLLED_LOOP_INDEX) * 0.1) / 16.0 + noise(screenUv) * 0.02;

        refractUvR = refractUv + refractNormal * (uRefractPower + slide * 1.0);
        refractUvG = refractUv + refractNormal * (uRefractPower + slide * 1.5);
        refractUvB = refractUv + refractNormal * (uRefractPower + slide * 2.0);

      	refractCol.x += texture2D(uBackground, (refractUvR * 2. - vec2(0.32, 0.4)) * 0.75).x;
		refractCol.y += texture2D(uBackground, (refractUvG * 2. - vec2(0.32, 0.4)) * 0.75).y;
		refractCol.z += texture2D(uBackground, (refractUvB * 2. - vec2(0.32, 0.4)) * 0.75).z;

        // (refractMask supprimé : 3 lectures de backfaceMap jamais utilisées)
    }
    #pragma unroll_loop_end

    refractCol /= float(1);

    // ─── Noisy side fade ──────────────────────────────────────────────────────
    float fadeNoise = noise3D(spherePos * 4.0 + vec3(t * 0.3, t * 0.2, t * 0.4)) * 0.5 + 0.5;
    float noisyEdge = distFromCenter + (fadeNoise - 0.5) * 0.3;
    float sideFade = 1.0 - smoothstep(0.6, 0.8, noisyEdge);

    // ─── Mix intermédiaire ────────────────────────────────────────────────────
    refractCol = mix(refractCol, vec3(1.0), (1.0 - f) * 0.15);
    refractCol.rgb = mix(refractCol.rgb, fogColor, thickness * diffuse * 0.2);
    refractCol.rgb = mix(refractCol.rgb, vec3(0.7, 0.85, 1.0), pow(f, 3.0) * uFresnelVal);

    // ─── Iridescence ──────────────────────────────────────────────────────────
    float cosTheta = abs(dot(eyeVector, combinedNormal));
    vec3 iriColor = iridescence(cosTheta, 1.8);
    vec3 iriContrib = iriColor * pow(edgeMask, 4.0) * 0.3;

    // ─── Rim bleuté ───────────────────────────────────────────────────────────
    float rim = pow(edgeMask, 5.0);
    vec3 rimColor = mix(vec3(0.5, 0.75, 1.0), vec3(1.0), rim);

    // ─── Texture avec alpha propre + iridescence par dessus ───────────────────
    vec3 iriLayer = iriContrib + rimColor * rim * 0.5;
    vec4 refractColA = vec4(refractCol.rgb, sideFade);
    refractCol.rgb = mix(iriLayer, refractColA.rgb, refractColA.a) + iriLayer * 0.3;

    // ─── Circle + noise border ────────────────────────────────────────────────
    float t2 = uTime * 0.0005;
    float borderNoise = noise3D(spherePos * 3.0 + vec3(t2 * 0.6, t2 * 0.4, t2 * 0.5)) * 2.0 - 1.0;
    float noisyRadius = 0.5 + borderNoise * 0.06 * uNoiseStrength * 5.;

    // ─── Matcap ───────────────────────────────────────────────────────────────
    vec3 viewDir = normalize(vViewPosition);
    vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
    vec3 y = cross(viewDir, x);
    vec2 uvMat = vec2(dot(x, combinedNormal), dot(y, combinedNormal)) * 0.5 + 0.5;

    #ifdef USE_MATCAP
        vec4 matcapColor = texture2D(tMatcap, uvMat);
        #ifdef USE_MATCAP_EXTRA
            vec4 extraMatcap = texture2D(tMatcapExtra, uvMat);
        #endif
    #else
        vec4 matcapColor = vec4(1.0);
    #endif

    #ifdef USE_MATCAP
        vec3 outgoingLight;

        if(uBlendMode == 0) {
            outgoingLight = blendSoftLight(refractCol.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
        } else if(uBlendMode == 1){
            outgoingLight = blendLinearLight(refractCol.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
        } else if(uBlendMode == 2){
            outgoingLight = blendLighten(refractCol.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
        } else if(uBlendMode == 3){
            outgoingLight = blendOverlay(refractCol.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
        } else if(uBlendMode == 4){
            outgoingLight = blendAdd(refractCol.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
        } else {
            outgoingLight = blendMultiply(refractCol.rgb, matcapColor.rgb, uDiffuseMatcapBlend);
        }

        #ifdef USE_MATCAP_EXTRA
            outgoingLight = blendSoftLight(outgoingLight, extraMatcap.rgb, uMatcapExtraBlend);
        #endif

        #ifdef USE_SHADOW
            outgoingLight = blendMultiply(outgoingLight, shadowOverlay.rgb, uShadowBlend);
        #endif

    #else
        vec3 outgoingLight = refractCol.rgb;
    #endif

    // ─── Caustics ─────────────────────────────────────────────────────────────
    float causticVal = causticPattern(spherePos * 2., t);
    causticVal = pow(causticVal, 3.0);
    vec3 causticColor = mix(vec3(0.6, 0.85, 1.0), vec3(1.0, 1.0, 0.9), causticVal);
    float causticMask = circle(vUv, noisyRadius) * (1.0 - sideFade * 0.5);

	outgoingLight = mix(outgoingLight, vec3(0.6, 0.85, 1.0), causticMask * 0.5);
    outgoingLight = mix(outgoingLight , causticColor,  causticVal * causticMask * 1.5);

    // ─── Alpha ────────────────────────────────────────────────────────────────
    float alphaTexture = sideFade * circle(vUv, noisyRadius);
    float iriLuminance = dot(iriLayer, vec3(0.299, 0.587, 0.114));
    float alphaIri = iriLuminance * circle(vUv, noisyRadius);
    float alphaCaustics = causticVal * circle(vUv, noisyRadius) * 0.3;
    float outgoingLuminance = dot(outgoingLight, vec3(0.299, 0.587, 0.114));
	float alpha = clamp(alphaTexture + alphaIri, 0.0, 1.0);
	// alpha *= smoothstep(0.0, 0.1, outgoingLuminance); // si noir → alpha 0
	// alpha = pow(alpha, 0.5); // boost les zones lumineuses, écrase les sombres

    gl_FragColor = vec4(outgoingLight.rgb, alpha);

	// gl_FragColor.rgb = vec3(causticVal);
}`,Dn=class extends O{constructor(e={}){e=o({uniforms:{uColor:{value:new P(16711680)},tDiffuse:{value:e.envMap},normalMap:{value:e.normalMap},envMap:{value:e.envMap},resolution:{value:e.resolution},uNoiseStrength:{value:.1},uTime:G.WebGL.globalUniforms.uTime,uPos0:{value:new N},uPos1:{value:new w(0,0,0)},uAnimate:{value:0},uVel:{value:0},backfaceMap:{value:e.backfaceMap},tNormal:{value:e.tNormal},tMatcap:{value:e.tMatCap},matCapMap:{value:e.tMatCap},uNormalScale:{value:1},uBlendMode:{value:0},uRoughness:{value:1},uDiffuseMatcapBlend:{value:1},uBackground:{value:e.background},uEnvMapBlend:{value:1},uHideZ:{value:0},uFade:{value:1},uAppear:{value:1},uIOR:{value:5},uRefractPower:{value:.1},uFresnelVal:{value:1},uPositionProgress:{value:0},uLogoProgress:{value:0},uOffsetUV:{value:new N},uProgress:{value:0},uCount:{value:0},uAlpha:{value:1},uBloom:{value:1},isFloating:{value:0},uRandom:{value:0},uForceNoBloom:{value:0}},defines:{SPECIAL_NORMAL:!0,USE_NORMAL:!0,USE_MATCAP:!0,USE_ROUGH:!1},variation:{alpha:!0}},e),super({vertexShader:Tn,fragmentShader:En,uniforms:e.uniforms,defines:e.defines,transparent:!0,side:2}),this.globalUniforms=e.globalUniforms,this.uniforms=Object.assign(this.uniforms,this.globalUniforms)}clone(e){let t=super.clone();return t.uniforms=Object.assign(t.uniforms,this.globalUniforms),t.uniforms=Object.assign(t.uniforms,e),t}};function On(){V.defaultVert=y(vt),V.defaultFrag=y(yt),V.normalsVert=y(bt),V.cubeUVreflectionFrag=y(_t),V.dynamicBaseVertPars=y(pt),V.dynamicBaseVert=y(mt),V.dynamicBaseFragPars=y(ht),V.dynamicBaseFrag=y(gt),V.positionsVert=y(Et),V.positionsPars=y(Dt),V.causticsVertPars=y(St),V.causticsVert=y(Ct),V.causticsFragPars=y(wt),V.causticsFrag=y(Tt),V.waterNoise=y(xt)}var kn=class extends n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},An=class extends n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},jn=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new N);this._width=n.width,this._height=n.height,t=new H(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:j}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new a(l),this.copyPass.material.blending=0,this.timer=new me}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}kn!==void 0&&(r instanceof kn?n=!0:r instanceof An&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new N);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Mn=class extends be{constructor(e){super(e),this.type=j}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.HDRLoader: Read Error: `+(t||``));case 2:throw Error(`THREE.HDRLoader: Write Error: `+(t||``));case 3:throw Error(`THREE.HDRLoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.HDRLoader: Memory Error: `+(t||``))}},n=function(e,t,n){t||=1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i?(!1!==n&&(e.pos+=a+i+1),o+s.slice(0,i)):!1},r=function(e){let r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=n(e)))&&t(1,`no header found`),(u=l.match(r))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=n(e),!1!==l;){if(c.string+=l+`
`,l.charAt(0)===`#`){c.comments+=l+`
`;continue}if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break}return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},i=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},a=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},o=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=se.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=se.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=se.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=se.toHalfFloat(1)},s=new Uint8Array(e);s.pos=0;let c=r(s),l=c.width,u=c.height,d=i(s.subarray(s.pos),l,u),f,p,m;switch(this.type){case B:m=d.length/4;let e=new Float32Array(m*4);for(let t=0;t<m;t++)a(d,t*4,e,t*4);f=e,p=B;break;case j:m=d.length/4;let t=new Uint16Array(m*4);for(let e=0;e<m;e++)o(d,e*4,t,e*4);f=t,p=j;break;default:throw Error(`THREE.HDRLoader: Unsupported type: `+this.type)}return{width:l,height:u,data:f,header:c.string,gamma:c.gamma,exposure:c.exposure,type:p}}setDataType(e){return this.type=e,this}load(e,t,n,r){function i(e,n){switch(e.type){case B:case j:e.colorSpace=Oe,e.minFilter=A,e.magFilter=A,e.generateMipmaps=!1,e.flipY=!0;break}t&&t(e,n)}return super.load(e,i,n,r)}},Nn=class extends Mn{constructor(e){console.warn(`RGBELoader has been deprecated. Please use HDRLoader instead.`),super(e)}},Pn={type:`change`},Fn={type:`start`},In={type:`end`},Ln=new Ue,Rn=new Le,zn=Math.cos(70*L.DEG2RAD),Z=new w,Q=2*Math.PI,$={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bn=1e-6,Vn=class extends it{constructor(e,t=null){super(e,t),this.state=$.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:ye.ROTATE,MIDDLE:ye.DOLLY,RIGHT:ye.PAN},this.touches={ONE:ue.ROTATE,TWO:ue.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new T,this._lastTargetPosition=new w,this._quat=new T().setFromUnitVectors(e.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fe,this._sphericalDelta=new fe,this._scale=1,this._panOffset=new w,this._rotateStart=new N,this._rotateEnd=new N,this._rotateDelta=new N,this._panStart=new N,this._panEnd=new N,this._panDelta=new N,this._dollyStart=new N,this._dollyEnd=new N,this._dollyDelta=new N,this._dollyDirection=new w,this._mouse=new N,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Un.bind(this),this._onPointerDown=Hn.bind(this),this._onPointerUp=Wn.bind(this),this._onContextMenu=Zn.bind(this),this._onMouseWheel=qn.bind(this),this._onKeyDown=Jn.bind(this),this._onTouchStart=Yn.bind(this),this._onTouchMove=Xn.bind(this),this._onMouseDown=Gn.bind(this),this._onMouseMove=Kn.bind(this),this._interceptControlDown=Qn.bind(this),this._interceptControlUp=$n.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pn),this.update(),this.state=$.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Z.copy(t).sub(this.target),Z.applyQuaternion(this._quat),this._spherical.setFromVector3(Z),this.autoRotate&&this.state===$.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Q:n>Math.PI&&(n-=Q),r<-Math.PI?r+=Q:r>Math.PI&&(r-=Q),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(Z.setFromSpherical(this._spherical),Z.applyQuaternion(this._quatInverse),t.copy(this.target).add(Z),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=Z.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new w(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new w(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=Z.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(Ln.origin.copy(this.object.position),Ln.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ln.direction))<zn?this.object.lookAt(this.target):(Rn.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ln.intersectPlane(Rn,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>Bn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bn||this._lastTargetPosition.distanceToSquared(this.target)>Bn?(this.dispatchEvent(Pn),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?Q/60/60*this.autoRotateSpeed:Q/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Z.setFromMatrixColumn(t,0),Z.multiplyScalar(-e),this._panOffset.add(Z)}_panUp(e,t){this.screenSpacePanning===!0?Z.setFromMatrixColumn(t,1):(Z.setFromMatrixColumn(t,0),Z.crossVectors(this.object.up,Z)),Z.multiplyScalar(e),this._panOffset.add(Z)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Z.copy(r).sub(this.target);let i=Z.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Q*this._rotateDelta.x/t.clientHeight),this._rotateUp(Q*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Q*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Q*this._rotateDelta.x/t.clientHeight),this._rotateUp(Q*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new N,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Hn(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function Un(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Wn(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(In),this.state=$.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Gn(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=$.DOLLY;break;case ye.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=$.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=$.ROTATE}break;case ye.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=$.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=$.PAN}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(Fn)}function Kn(e){switch(this.state){case $.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case $.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case $.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function qn(e){this.enabled===!1||this.enableZoom===!1||this.state!==$.NONE||(e.preventDefault(),this.dispatchEvent(Fn),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(In))}function Jn(e){this.enabled!==!1&&this._handleKeyDown(e)}function Yn(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=$.TOUCH_ROTATE;break;case ue.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=$.TOUCH_PAN;break;default:this.state=$.NONE}break;case 2:switch(this.touches.TWO){case ue.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=$.TOUCH_DOLLY_PAN;break;case ue.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=$.TOUCH_DOLLY_ROTATE;break;default:this.state=$.NONE}break;default:this.state=$.NONE}this.state!==$.NONE&&this.dispatchEvent(Fn)}function Xn(e){switch(this._trackPointer(e),this.state){case $.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case $.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case $.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case $.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=$.NONE}}function Zn(e){this.enabled!==!1&&e.preventDefault()}function Qn(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function $n(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var er=`uniform float time;
uniform float delta;
precision highp float;
precision highp sampler2D;
#define GLSLIFY 1

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 tmpPos = texture2D(texturePosition, uv);
    vec3 position = tmpPos.xyz;
    vec3 velocity = texture2D(textureVelocity, uv).xyz;

    // W encode: groupIdx * 1000.0 + phase
    float w = tmpPos.w;
    float groupId = floor(w / 1000.0);       // récupère le groupe
    float phase = mod(w, 1000.0);            // récupère la phase

    phase = mod(
        phase + delta +
        length(velocity.xz) * delta * 3. +
        max(velocity.y, 0.0) * delta * 6.,
        62.83
    );

    // Réencoder groupId + phase dans W
    gl_FragColor = vec4(position + velocity * delta * 15., groupId * 1000.0 + phase);
}`,tr=`precision highp sampler2D;
precision highp float;
#define GLSLIFY 1

uniform float time;
uniform float testing;
uniform float delta;
uniform float separationDistance;
uniform float alignmentDistance;
uniform float cohesionDistance;
uniform float freedomFactor;
uniform vec3 predator;
uniform float predatorStrength;
uniform float targetStrength;
uniform vec3 targets[2];
uniform float nGroups;

const float width = resolution.x;
const float height = resolution.y;

const float PI = 3.141592653589793;
const float PI_2 = PI * 2.0;

float zoneRadius = 1.0;
float zoneRadiusSquared = 1.0;

float separationThresh = 0.45;
float alignmentThresh = 0.65;

const float UPPER_BOUNDS = BOUNDS;
const float LOWER_BOUNDS = -UPPER_BOUNDS;

const float SPEED_LIMIT = 0.5;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 hash3(vec3 p) {
    p = vec3(
        dot(p, vec3(127.1, 311.7, 74.7)),
        dot(p, vec3(269.5, 183.3, 246.1)),
        dot(p, vec3(113.5, 271.9, 124.6))
    );
    return fract(sin(p) * 43758.5453123) * 2.0 - 1.0;
}

float noise3D(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * (3.0 - 2.0 * f);
    
    return mix(
        mix(
            mix(dot(hash3(i + vec3(0.0, 0.0, 0.0)), f - vec3(0.0, 0.0, 0.0)),
                dot(hash3(i + vec3(1.0, 0.0, 0.0)), f - vec3(1.0, 0.0, 0.0)), u.x),
            mix(dot(hash3(i + vec3(0.0, 1.0, 0.0)), f - vec3(0.0, 1.0, 0.0)),
                dot(hash3(i + vec3(1.0, 1.0, 0.0)), f - vec3(1.0, 1.0, 0.0)), u.x), u.y),
        mix(
            mix(dot(hash3(i + vec3(0.0, 0.0, 1.0)), f - vec3(0.0, 0.0, 1.0)),
                dot(hash3(i + vec3(1.0, 0.0, 1.0)), f - vec3(1.0, 0.0, 1.0)), u.x),
            mix(dot(hash3(i + vec3(0.0, 1.0, 1.0)), f - vec3(0.0, 1.0, 1.0)),
                dot(hash3(i + vec3(1.0, 1.0, 1.0)), f - vec3(1.0, 1.0, 1.0)), u.x), u.y), u.z
    );
}

vec3 curlNoise(vec3 p) {
    float e = 0.1;
    
    float n1 = noise3D(p + vec3(0.0, e, 0.0)) - noise3D(p - vec3(0.0, e, 0.0));
    float n2 = noise3D(p + vec3(0.0, 0.0, e)) - noise3D(p - vec3(0.0, 0.0, e));
    float n3 = noise3D(p + vec3(e, 0.0, 0.0)) - noise3D(p - vec3(e, 0.0, 0.0));
    float n4 = noise3D(p + vec3(0.0, 0.0, e)) - noise3D(p - vec3(0.0, 0.0, e));
    float n5 = noise3D(p + vec3(0.0, e, 0.0)) - noise3D(p - vec3(0.0, e, 0.0));
    float n6 = noise3D(p + vec3(e, 0.0, 0.0)) - noise3D(p - vec3(e, 0.0, 0.0));
    
    return vec3(
        n1 - n2,
        n3 - n4,
        n5 - n6
    ) / (2.0 * e);
}

void main() {

    zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
    separationThresh = separationDistance / zoneRadius;
    alignmentThresh = (separationDistance + alignmentDistance) / zoneRadius;
    zoneRadiusSquared = zoneRadius * zoneRadius;

    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec3 birdPosition, birdVelocity;

    vec3 selfPosition = texture2D(texturePosition, uv).xyz;
    vec3 selfVelocity = texture2D(textureVelocity, uv).xyz;

    float dist;
    vec3 dir;
    float distSquared;

    float f;
    float percent;

    float vlen = length(selfVelocity);
    vec3 velocity = (vlen > 0.0001)
        ? selfVelocity / vlen
        : vec3(1.0, 0.0, 0.0);

    float limit = SPEED_LIMIT;

    vec4 posData = texture2D(texturePosition, uv);
    float w = posData.w;
    float groupFloat = floor(w / 1000.0);
    int groupIdx = int(groupFloat + 0.5);

    vec3 myTarget;
    if (groupIdx == 0) myTarget = targets[0];
    else myTarget = targets[1];

    // ============ NOISE ORGANIQUE ============
    float birdSeed = rand(uv) * 100000.0;
    vec3 noisePos = selfPosition * 0.05 + vec3(time * 0.0001 + birdSeed);
    vec3 turbulence = curlNoise(noisePos);
    float noiseStrength = .25 * delta;
    velocity += turbulence * noiseStrength * 2.;
    // =========================================

    // ============ SUIVI DE TRAJECTOIRE ============
    dir = myTarget - selfPosition;
    dist = length(dir);
    float noise = rand(uv + time * 0.1) * 0.5 + 0.5;
    float followStrength = smoothstep(0.0, 5.0, dist) * delta * targetStrength * noise;
    if (dist > 0.0001) velocity += (dir / dist) * followStrength;
    // ==============================================

    // Predator
    dir = predator - selfPosition;
    dir.z = 0.;
    dist = length(dir);
    distSquared = dist * dist;

    float preyRadius = predatorStrength * 100. * 5.0;
    float preyRadiusSq = preyRadius * preyRadius;

    if (dist < preyRadius) {
        f = (distSquared / preyRadiusSq - 1.0) * delta * 5.;
        if (dist > 0.0001) velocity += (dir / dist) * f;
        limit += 0.5;
    }

    // Boids loop
    for (float y = 0.0; y < height; y++) {
        for (float x = 0.0; x < width; x++) {
            vec2 ref = vec2(x + 0.5, y + 0.5) / resolution.xy;
            birdPosition = texture2D(texturePosition, ref).xyz;

            dir = birdPosition - selfPosition;
            dist = length(dir);

            if (dist < 0.0001) continue;

            distSquared = dist * dist;

            if (distSquared > zoneRadiusSquared) continue;

            percent = distSquared / zoneRadiusSquared;

            if (percent < separationThresh) {
                f = (separationThresh / percent - 1.0) * delta * 0.5;
                velocity -= (dir / dist) * f;

            } else if (percent < alignmentThresh) {
                float threshDelta = alignmentThresh - separationThresh;
                float adjustedPercent = (percent - separationThresh) / threshDelta;

                birdVelocity = texture2D(textureVelocity, ref).xyz;

                f = (0.5 - cos(adjustedPercent * PI_2) * 0.5 + 0.5) * delta * 0.5;
                float bvLen = length(birdVelocity);
                if (bvLen > 0.0001) velocity += (birdVelocity / bvLen) * f;

            } else {
                float threshDelta = 1.0 - alignmentThresh;
                float adjustedPercent;
                if (threshDelta == 0.) adjustedPercent = 1.;
                else adjustedPercent = (percent - alignmentThresh) / threshDelta;

                f = (0.5 - (cos(adjustedPercent * PI_2) * -0.5 + 0.5)) * delta * 0.5;
                velocity += (dir / dist) * f;
            }
        }
    }

    // Speed Limits
    float vFinalLen = length(velocity);
    if (vFinalLen > limit) {
        velocity = (velocity / vFinalLen) * limit;
    }

    float boundForce = 1.0 * delta;
    if (selfPosition.y > UPPER_BOUNDS) {
        velocity.y -= boundForce;
    } else if (selfPosition.y < LOWER_BOUNDS) {
        velocity.y += boundForce;
    }

    float ovLen = length(selfVelocity);
    float nvLen = length(velocity);
    vec3 oldVel = ovLen > 0.0001 ? selfVelocity / ovLen : vec3(1.0, 0.0, 0.0);
    vec3 newVel = nvLen > 0.0001 ? velocity / nvLen : vec3(1.0, 0.0, 0.0);
    float lateralChange = dot(cross(oldVel, newVel), vec3(0.0, 1.0, 0.0));
    float prevBank = texture2D(textureVelocity, uv).w;
    float targetBank = clamp(lateralChange * 8.0, -0.8, 0.8);
    float bank = mix(prevBank, targetBank, delta * 3.0);

    gl_FragColor = vec4(velocity, bank);
}`,nr=class{constructor(e,t,n){this.variables=[],this.currentTextureIndex=0;let r=B,i={passThruTexture:{value:null}},a=l(d(),i),o=new c(a);this.setDataType=function(e){return r=e,this},this.addVariable=function(e,t,n){let r={name:e,initialValueTexture:n,material:this.createShaderMaterial(t),dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:I,magFilter:I};return this.variables.push(r),r},this.setVariableDependencies=function(e,t){e.dependencies=t},this.init=function(){if(n.capabilities.maxVertexTextures===0)return`No support for vertex shader textures.`;for(let n=0;n<this.variables.length;n++){let r=this.variables[n];r.renderTargets[0]=this.createRenderTarget(e,t,r.wrapS,r.wrapT,r.minFilter,r.magFilter),r.renderTargets[1]=this.createRenderTarget(e,t,r.wrapS,r.wrapT,r.minFilter,r.magFilter),this.renderTexture(r.initialValueTexture,r.renderTargets[0]),this.renderTexture(r.initialValueTexture,r.renderTargets[1]);let i=r.material,a=i.uniforms;if(r.dependencies!==null)for(let e=0;e<r.dependencies.length;e++){let t=r.dependencies[e];if(t.name!==r.name){let e=!1;for(let n=0;n<this.variables.length;n++)if(t.name===this.variables[n].name){e=!0;break}if(!e)return`Variable dependency not found. Variable=`+r.name+`, dependency=`+t.name}a[t.name]={value:null},i.fragmentShader=`
uniform sampler2D `+t.name+`;
`+i.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){let e=this.currentTextureIndex,t=+(this.currentTextureIndex===0);for(let n=0,r=this.variables.length;n<r;n++){let r=this.variables[n];if(r.dependencies!==null){let t=r.material.uniforms;for(let n=0,i=r.dependencies.length;n<i;n++){let i=r.dependencies[n];t[i.name].value=i.renderTargets[e].texture}}this.doRenderTarget(r.material,r.renderTargets[t])}this.currentTextureIndex=t},this.getCurrentRenderTarget=function(e){return e.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(e){return e.renderTargets[+(this.currentTextureIndex===0)]},this.dispose=function(){o.dispose();let e=this.variables;for(let t=0;t<e.length;t++){let n=e[t];n.initialValueTexture&&n.initialValueTexture.dispose();let r=n.renderTargets;for(let e=0;e<r.length;e++)r[e].dispose();n.material.dispose()}};function s(n){n.defines.resolution=`vec2( `+e.toFixed(1)+`, `+t.toFixed(1)+` )`}this.addResolutionDefine=s;function l(e,t){t||={};let n=new O({name:`GPUComputationShader`,uniforms:t,vertexShader:u(),fragmentShader:e});return s(n),n}this.createShaderMaterial=l,this.createRenderTarget=function(n,i,a,o,s,c){return n||=e,i||=t,a||=1001,o||=1001,s||=1003,c||=1003,new H(n,i,{wrapS:a,wrapT:o,minFilter:s,magFilter:c,format:E,type:r,depthBuffer:!1})},this.createTexture=function(){let n=new rt(new Float32Array(e*t*4),e,t,E,B);return n.needsUpdate=!0,n},this.renderTexture=function(e,t){i.passThruTexture.value=e,this.doRenderTarget(a,t),i.passThruTexture.value=null},this.doRenderTarget=function(e,t){let r=n.getRenderTarget(),i=n.xr.enabled,s=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,o.material=e,n.setRenderTarget(t),o.render(n),o.material=a,n.xr.enabled=i,n.shadowMap.autoUpdate=s,n.setRenderTarget(r)};function u(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function d(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}},rr=new WeakMap,ir=class extends z{constructor(e){super(),this.meter=e.metters,this.oldMouse=new N,this.last=0,this.BOUNDS=5,this.BOUNDS_HALF=this.BOUNDS/2,this.targetName=e.target,this.curveData=e.curveData,this.targetStrength=e.targetStrength||1,this.speed=e.speed||1,this.fishType=e.fishType||`fish2`,this.alignment=e.alignment||.5,this.cohesion=e.cohesion||.5,this.mouse2D=new N,this.load()}build(){this.BOUNDS=G.activeScene.name===`Underwater`?5:20,this.camera=G.activeScene.scene.camera,this.renderer=G.WebGL.renderer,this.WIDTH=G.isHandheld?4:7,this.BIRDS=this.WIDTH*this.WIDTH,this.bakeAnimationTexture(),this.setCurve(),this.initGPGPU(),this.initMesh(),this.mouseInteraction(),this.target=document.querySelector(this.targetName),this.tlIn=x.timeline({scrollTrigger:{trigger:document.querySelector(this.targetName),start:`top bottom`,end:`bottom top`,scrub:.1,onToggle:e=>{if(G.activeScene?.scene?.name===`Underwater`){this.isComputing=e.isActive;for(let t of this.fishes)t.visible=e.isActive}}}}),G.activeScene?.scene?.name!==`Underwater`&&(this.isComputing=!0)}bakeAnimationTexture(){let e=this.assets.models.Fish,t=e.skeleton,n=this.assets.animations.Fish,r=rr.get(e);if(r&&r.clip===n){this.boneCount=r.boneCount,this.animationFrames=r.animationFrames,this.boneAnimationTexture=r.texture;return}let i=e;for(;i.parent;)i=i.parent;let a=new qe(i);a.clipAction(n).play();let o=n.duration,s=Math.ceil(o*30),c=t.bones.length;this.boneCount=c,this.animationFrames=s;let l=c*4,u=s,d=new Float32Array(l*u*4);for(let e=0;e<s;e++){a.setTime(e/s*o),i.updateMatrixWorld(!0),t.update();for(let n=0;n<c;n++){let r=n*16;for(let i=0;i<4;i++){let a=n*4+i,o=(e*l+a)*4;d[o+0]=t.boneMatrices[r+i*4+0],d[o+1]=t.boneMatrices[r+i*4+1],d[o+2]=t.boneMatrices[r+i*4+2],d[o+3]=t.boneMatrices[r+i*4+3]}}}let f=new rt(d,l,u,E,B);f.magFilter=I,f.minFilter=I,f.generateMipmaps=!1,f.needsUpdate=!0,this.boneAnimationTexture=f,rr.set(e,{clip:n,boneCount:c,animationFrames:s,texture:f})}initMesh(){this.fishes=[];let e=new Float32Array(this.BIRDS);for(let t=0;t<this.BIRDS;t++)e[t]=t;for(let t of this.assets.models.meshes){let n=t.geometry.clone();n.setAttribute(`instanceIndex`,new D(e,1));let r=n.getAttribute(`position`).count,i=new Float32Array(r);for(let e=0;e<r;e++)i[e]=e;n.setAttribute(`vertexIndex`,new et(i,1));let a=Array.isArray(t.material)?t.material[0]:t.material,o=new Je({map:a.map??null,normalMap:a.normalMap??null,roughnessMap:a.roughnessMap??null,metalnessMap:a.metalnessMap??null,roughness:a.roughness??.5,metalness:a.metalness??0,side:a.side??2});o.map&&(o.map.needsUpdate=!0),o.onBeforeCompile=e=>{e.uniforms.texturePosition={value:null},e.uniforms.textureVelocity={value:null},e.uniforms.boneTexture={value:this.boneAnimationTexture},e.uniforms.time={value:0},e.uniforms.size={value:this.fishType===`fusiliers`?20:30},e.uniforms.birdWidth={value:this.WIDTH},e.uniforms.boneCount={value:this.boneCount},e.uniforms.animationFrames={value:this.animationFrames},e.uniforms.uFogTop=G.activeScene.scene.fogUniforms.uFogTop,e.uniforms.uFogBottom=G.activeScene.scene.fogUniforms.uFogBottom,e.uniforms.uFogTopDeep=G.activeScene.scene.fogUniforms.uFogTopDeep,e.uniforms.uFogBottomDeep=G.activeScene.scene.fogUniforms.uFogBottomDeep,e.uniforms.uDepth=G.activeScene.scene.fogUniforms.uDepth,e.uniforms.uFogNear=G.activeScene.scene.fogUniforms.uFogNear,e.uniforms.uFogFar=G.activeScene.scene.fogUniforms.uFogFar,e.uniforms.uResolution=G.WebGL.globalUniforms.uResolution,e.vertexShader=e.vertexShader.replace(`#define STANDARD`,`#define STANDARD

          attribute vec4 skinIndex;
          attribute vec4 skinWeight;
          attribute float instanceIndex;

          uniform sampler2D texturePosition;
          uniform sampler2D textureVelocity;
          uniform sampler2D boneTexture;
          uniform float time;
          uniform float size;
          uniform float birdWidth;
          uniform float boneCount;
          uniform float animationFrames;
          varying float vWorldY;

          mat4 getBoneMatrix(float boneIndex, float frame) {
            float textureWidth = boneCount * 4.0;
            float x = boneIndex * 4.0;
            float y = frame;
            vec4 col0 = texture2D(boneTexture, vec2((x + 0.5) / textureWidth, (y + 0.5) / animationFrames));
            vec4 col1 = texture2D(boneTexture, vec2((x + 1.5) / textureWidth, (y + 0.5) / animationFrames));
            vec4 col2 = texture2D(boneTexture, vec2((x + 2.5) / textureWidth, (y + 0.5) / animationFrames));
            vec4 col3 = texture2D(boneTexture, vec2((x + 3.5) / textureWidth, (y + 0.5) / animationFrames));
            return mat4(col0, col1, col2, col3);
          }

          mat4 getBoneMatrixInterpolated(float boneIndex, float animTime) {
            ${G.isHandheld?`
            // Mobile : frame entière, sans interpolation → 2× moins de fetches
            return getBoneMatrix(boneIndex, floor(animTime));
            `:`
            float frame1 = floor(animTime);
            float frame2 = mod(frame1 + 1.0, animationFrames);
            float blend = fract(animTime);
            mat4 boneMat1 = getBoneMatrix(boneIndex, frame1);
            mat4 boneMat2 = getBoneMatrix(boneIndex, frame2);
            return boneMat1 + (boneMat2 - boneMat1) * blend;
            `}
          }
          `),e.vertexShader=e.vertexShader.replace(`#include <beginnormal_vertex>`,`
          vec3 objectNormal = vec3(normal);
          vec3 newNormal = objectNormal;
          #ifdef USE_TANGENT
            vec3 objectTangent = vec3(tangent.xyz);
          #endif
          `),e.vertexShader=e.vertexShader.replace(`#include <defaultnormal_vertex>`,`
          vec3 transformedNormal = normalMatrix * newNormal;
          #ifdef FLIP_SIDED
            transformedNormal = -transformedNormal;
          #endif
          #ifdef USE_TANGENT
            vec3 transformedTangent = normalMatrix * objectTangent;
            #ifdef FLIP_SIDED
              transformedTangent = -transformedTangent;
            #endif
          #endif
          `),e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`
          float birdIndex = instanceIndex;

          // ← demi-texel pour éviter les problèmes de sampling sur PC
          vec2 ref = vec2(
            (mod(birdIndex, birdWidth) + 0.5) / birdWidth,
            (floor(birdIndex / birdWidth) + 0.5) / birdWidth
          );

          float seed = fract(sin(birdIndex * 12.9898) * 43758.5453);

          vec3 boidPos = texture2D(texturePosition, ref).xyz;

          // ← normalize protégé contre division par zéro
          vec4 velData = texture2D(textureVelocity, ref);
          float rawVelLen = length(velData.xyz);
          vec3 velocity = rawVelLen > 0.0001 ? velData.xyz / rawVelLen : vec3(0.0, 0.0, 1.0);

          float animSpeed = 50.0 /(1. + seed * 2. ) ;
          float animTime = mod(time * animSpeed + seed * animationFrames, animationFrames);

          mat4 skinMatrix =
            skinWeight.x * getBoneMatrixInterpolated(skinIndex.x, animTime) +
            skinWeight.y * getBoneMatrixInterpolated(skinIndex.y, animTime) +
            skinWeight.z * getBoneMatrixInterpolated(skinIndex.z, animTime) +
            skinWeight.w * getBoneMatrixInterpolated(skinIndex.w, animTime);

          vec4 skinned = skinMatrix * vec4(position, 1.0);
          vec3 newPosition = skinned.xyz;

          mat3 skinMatrix3 = mat3(
            skinMatrix[0].xyz,
            skinMatrix[1].xyz,
            skinMatrix[2].xyz
          );

          // ← normalize protégé sur la normale
          vec3 skinnedNormal = skinMatrix3 * objectNormal;
          float snLen = length(skinnedNormal);
          newNormal = snLen > 0.0001 ? skinnedNormal / snLen : objectNormal;

          float finalSize =size * 0.2 + size* seed * 0.8;
          newPosition *= finalSize;

          float initAngle = 3.14159265 / 2.0;
          float cosInit = cos(initAngle);
          float sinInit = sin(initAngle);
          mat3 initRotation = mat3(
            cosInit, 0, -sinInit,
            0,       1,  0,
            sinInit, 0,  cosInit
          );
          newPosition = initRotation * newPosition;
          newNormal = initRotation * newNormal;

          velocity.z *= -1.0;
          float xz = length(velocity.xz);
          float cosry = xz > 0.001 ? velocity.x / xz : 1.0;
          float sinry = xz > 0.001 ? velocity.z / xz : 0.0;
          float vx = sqrt(max(0.0, 1.0 - velocity.y * velocity.y));
          float cosrz = vx;
          float sinrz = velocity.y;

          mat3 maty = mat3(cosry, 0, -sinry, 0, 1, 0, sinry, 0, cosry);
          mat3 matz = mat3(cosrz, sinrz, 0, -sinrz, cosrz, 0, 0, 0, 1);

          mat3 velocityRotation = maty * matz;
          newPosition = velocityRotation * newPosition;
          newNormal = velocityRotation * newNormal;

          newPosition += boidPos;

          vec3 transformed = newPosition;
          vec4 worldPos = modelMatrix * vec4(transformed, 1.0);
          vWorldY = worldPos.y;
          `),e.vertexShader=e.vertexShader.replace(`#include <skinning_pars_vertex>`,``),e.vertexShader=e.vertexShader.replace(`#include <skinning_vertex>`,``),e.vertexShader=e.vertexShader.replace(`#include <skinbase_vertex>`,``),e.vertexShader=e.vertexShader.replace(`#include <skinnormal_vertex>`,``),e.vertexShader=e.vertexShader.replace(`#include <morphnormal_vertex>`,``),e.fragmentShader=e.fragmentShader.replace(`void main() {`,`varying float vWorldY;
          uniform vec3 uFogTop;
          uniform vec3 uFogBottom;
          uniform vec3 uFogTopDeep;
          uniform vec3 uFogBottomDeep;
          uniform float uDepth;
          uniform float uFogNear;
          uniform float uFogFar;
          uniform vec2 uResolution;
          void main() {`),e.fragmentShader=e.fragmentShader.replace(`#include <dithering_fragment>`,`
          #include <dithering_fragment>
          float screenY = gl_FragCoord.y / uResolution.y;
          vec3 fogShallow = mix(uFogBottom, uFogTop, screenY);
          vec3 fogDeep    = mix(uFogBottomDeep, uFogTopDeep, screenY);
          vec3 fogColor   = mix(fogShallow, fogDeep, uDepth);
          float fragDist  = gl_FragCoord.z / gl_FragCoord.w;
          float fogFactor = smoothstep(uFogNear, uFogFar, fragDist);
          vec3 gray = vec3(dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114)));
          gl_FragColor.rgb = mix(gl_FragColor.rgb, gray, 0.6);
          float aboveWater = step(0.0, vWorldY);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
          `),o.userData.shader=e};let s=new k(n,o,this.BIRDS);s.frustumCulled=!1;let c=new R;for(let e=0;e<this.BIRDS;e++)c.updateMatrix(),s.setMatrixAt(e,c.matrix);s.instanceMatrix.needsUpdate=!0,this.fishes.push(s),this.instancedMesh=s,this.add(s)}}setCurve(){this.curve=this.curveData,G.isMobile&&this.curve.points.forEach(e=>{e=e.multiplyScalar(.2)}),this.curveProgress=0;let e=this.curve.getPoints(100),t=new Ne().setFromPoints(e);this.curveLine=new de(t,new Ce({color:255})),this.targetSphere=new U(new Te(.5,8,8),new W({color:65280}))}initGPGPU(){this.N_GROUPS=2,this.groupProgresses=[0,.5],this.gpuCompute=new nr(this.WIDTH,this.WIDTH,this.renderer),G.isHandheld&&this.gpuCompute.setDataType(j);let e=this.gpuCompute.createTexture(),t=this.gpuCompute.createTexture();this.fillPositionTexture(e),this.fillVelocityTexture(t),this.velocityVariable=this.gpuCompute.addVariable(`textureVelocity`,tr,t),this.positionVariable=this.gpuCompute.addVariable(`texturePosition`,er,e),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:this.alignment},this.velocityUniforms.cohesionDistance={value:this.cohesion},this.velocityUniforms.freedomFactor={value:20},this.velocityUniforms.predator={value:new w},this.velocityUniforms.predatorStrength={value:2},this.velocityUniforms.targetStrength={value:this.targetStrength},this.velocityUniforms.targets={value:Array.from({length:this.N_GROUPS},()=>new w)},this.velocityUniforms.nGroups={value:this.N_GROUPS},this.velocityVariable.material.defines.BOUNDS=this.BOUNDS.toFixed(2),this.velocityVariable.wrapS=M,this.velocityVariable.wrapT=M,this.positionVariable.wrapS=M,this.positionVariable.wrapT=M,this.gpuCompute.init(),[this.positionVariable,this.velocityVariable].forEach(e=>{e.renderTargets.forEach(e=>{e.texture.magFilter=I,e.texture.minFilter=I})}),this.position.y=2e4}fillPositionTexture(e){let t=e.image.data,n=t.length/4;for(let e=0;e<n;e++){let n=e%this.N_GROUPS,r=n/this.N_GROUPS+Math.random()*(1/this.N_GROUPS),i=this.curve.getPoint(r%1),a=.1,o=e*4;t[o+0]=i.x+(Math.random()-.5)*a,t[o+1]=i.y+(Math.random()-.5)*a,t[o+2]=i.z+(Math.random()-.5)*a,t[o+3]=n*1e3}}fillVelocityTexture(e){let t=e.image.data;for(let e=0;e<t.length;e+=4)t[e+0]=(Math.random()-.5)*.2,t[e+1]=(Math.random()-.5)*.2,t[e+2]=(Math.random()-.5)*.2,t[e+3]=1}mouseInteraction=()=>{this.hitPlane=new U(new F(200,200),new W({visible:!1})),this.add(this.hitPlane),this.raycaster=new oe,this.mouseWorld=new w};animate=()=>{if(!this.velocityUniforms||!this.positionUniforms||!this.isComputing)return;let e=performance.now(),t=(e-this.last)/1e3;t>1&&(t=1),this.last=e;let n=[.05*this.speed,.05*this.speed];this.groupProgresses=this.groupProgresses.map((e,r)=>(e+t*n[r])%1),this.groupProgresses.forEach((e,t)=>{this.velocityUniforms.targets.value[t].copy(this.curve.getPoint(e))}),this.targetSphere.position.copy(this.velocityUniforms.targets.value[0]),this.mouse2D.set(G.pointer.glNormalized.x,G.pointer.glNormalized.y),this.mouseVelocity=this.oldMouse.distanceTo(this.mouse2D),this.oldMouse.copy(this.mouse2D),this.velocityUniforms.predatorStrength.value=this.mouseVelocity*1,this.raycaster.setFromCamera(this.mouse2D,this.camera);let r=this.raycaster.intersectObject(this.hitPlane);r.length>0&&(this.mouseWorld.copy(r[0].point),this.worldToLocal(this.mouseWorld),this.velocityUniforms.predator.value.copy(this.mouseWorld)),this._simDt=(this._simDt||0)+t,this._simTick=(this._simTick||0)+1,this._runSim=!G.isHandheld||(this._simTick&1)==0;let i=e/1e3;this.positionUniforms.time.value=i*this.speed,this.positionUniforms.delta.value=this._simDt*this.speed,this.velocityUniforms.time.value=i*this.speed,this.velocityUniforms.delta.value=this._simDt*this.speed;let a=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,o=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;if(this.fishes)for(let e of this.fishes){let t=e.material?.userData?.shader?.uniforms;t&&(t.texturePosition&&(t.texturePosition.value=a),t.textureVelocity&&(t.textureVelocity.value=o),t.time&&(t.time.value=i))}this.isPlaced||(this.scale.setScalar(1),this.target&&this.target.getAttribute(`data-altitude`)&&(this.position.y=this.target.getAttribute(`data-altitude`),this.targetName===`.world-particles`&&(this.position.y-=10,this.isPlaced=!0))),this._runSim&&(this.gpuCompute.compute(),this._simDt=0),this.position.y>0?this.visible=!1:this.visible=!0};load(){this.assets={models:{meshes:[]},animations:{}},G.AssetLoader.loadGltf(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/models/${this.fishType}.glb`).then(e=>{e.scene.traverse(e=>{e.isSkinnedMesh&&(this.assets.models.meshes.push(e),this.assets.models.Fish||(this.assets.models.Fish=e,this.boneCount=e.skeleton.bones.length))}),e.animations.length>0&&(this.assets.animations.Fish=e.animations[0])})}},ar=class extends z{constructor(e){super(),this.meter=e.metters,this.oldMouse=new N,this.last=0,this.BOUNDS=4,this.BOUNDS_HALF=this.BOUNDS/2,this.targetName=e.target,this.curveData=e.curveData,this.targetStrength=e.targetStrength||1,this.fishType=e.fishType||`fish2`,this.alignment=e.alignment||.5,this.cohesion=e.cohesion||.5,this.mouse2D=new N,this.isComputing=!0,this.load()}build(){this.camera=G.Underwater.camera,this.renderer=G.WebGL.renderer,this.WIDTH=3,this.BIRDS=this.WIDTH*this.WIDTH,this.flyAnim=this.bakeAnimationTexture(this.assets.animations.Fish),this.planeAnim=this.bakeAnimationTexture(this.assets.animations.fishPlane),this.boneCount=this.flyAnim.boneCount,this.animationFrames=this.flyAnim.frameCount,this.setCurve(),this.initGPGPU(),this.initMesh(),this.startTime=performance.now(),setTimeout(()=>{this.position.copy(G.shipCenter),this.position.y+=10},1e3)}bakeAnimationTexture(e){let t=this.assets.models.Fish,n=t.skeleton,r=e,i=t;for(;i.parent;)i=i.parent;let a=new qe(i);a.clipAction(r).play();let o=r.duration,s=Math.ceil(o*30),c=n.bones.length;this.boneCount=c,this.animationFrames=s;let l=c*4,u=s,d=new Float32Array(l*u*4);for(let e=0;e<s;e++){a.setTime(e/s*o),i.updateMatrixWorld(!0),n.update();for(let t=0;t<c;t++){let r=t*16;for(let i=0;i<4;i++){let a=t*4+i,o=(e*l+a)*4;d[o+0]=n.boneMatrices[r+i*4+0],d[o+1]=n.boneMatrices[r+i*4+1],d[o+2]=n.boneMatrices[r+i*4+2],d[o+3]=n.boneMatrices[r+i*4+3]}}}let f=new rt(d,l,u,E,B);return f.magFilter=I,f.minFilter=I,f.generateMipmaps=!1,f.needsUpdate=!0,{texture:f,frameCount:s,boneCount:c}}initMesh(){this.fishes=[];let e=new Float32Array(this.BIRDS);for(let t=0;t<this.BIRDS;t++)e[t]=t;for(let t of this.assets.models.meshes){let n=t.geometry.clone(),r=n.getAttribute(`position`).count;n.setAttribute(`instanceIndex`,new D(e,1));let i=new Float32Array(r);for(let e=0;e<r;e++)i[e]=e;n.setAttribute(`vertexIndex`,new et(i,1));let a=Array.isArray(t.material)?t.material[0]:t.material,o=new Je({map:a.map??null,normalMap:a.normalMap??null,roughnessMap:a.roughnessMap??null,metalnessMap:a.metalnessMap??null,roughness:a.roughness??.5,metalness:a.metalness??0,side:a.side??2});o.map&&(o.map.needsUpdate=!0),o.onBeforeCompile=e=>{e.uniforms.texturePosition={value:null},e.uniforms.textureVelocity={value:null},e.uniforms.boneTexture={value:this.flyAnim.texture},e.uniforms.planeTexture={value:this.planeAnim.texture},e.uniforms.time={value:0},e.uniforms.size={value:.015*G.shipScale},e.uniforms.birdWidth={value:this.WIDTH},e.uniforms.boneCount={value:this.boneCount},e.uniforms.animationFrames={value:this.animationFrames},e.uniforms.animationFramesPlane={value:this.planeAnim.frameCount},e.uniforms.uFogTop=G.Underwater.fogUniforms.uFogTop,e.uniforms.uFogBottom=G.Underwater.fogUniforms.uFogBottom,e.uniforms.uFogTopDeep=G.Underwater.fogUniforms.uFogTopDeep,e.uniforms.uFogBottomDeep=G.Underwater.fogUniforms.uFogBottomDeep,e.uniforms.uDepth=G.Underwater.fogUniforms.uDepth,e.uniforms.uFogNear=G.Underwater.fogUniforms.uFogNear,e.uniforms.uFogFar=G.Underwater.fogUniforms.uFogFar,e.uniforms.uResolution=G.WebGL.globalUniforms.uResolution,e.vertexShader=e.vertexShader.replace(`#define STANDARD`,`#define STANDARD

  attribute vec4 skinIndex;
  attribute vec4 skinWeight;

  uniform sampler2D texturePosition;
  uniform sampler2D textureVelocity;
  uniform sampler2D boneTexture;
  uniform sampler2D planeTexture;
  uniform float time;
  uniform float size;
  uniform float birdWidth;
  uniform float boneCount;
  uniform float animationFrames;
  uniform float animationFramesPlane;
  uniform float animBlend;
  varying float vWorldY;
  attribute float instanceIndex;

  mat4 getBoneMatrix(sampler2D tex, float boneIndex, float frame, float totalFrames) {
    float textureWidth = boneCount * 4.0;
    float x = boneIndex * 4.0;
    vec4 col0 = texture2D(tex, vec2((x + 0.5) / textureWidth, (frame + 0.5) / totalFrames));
    vec4 col1 = texture2D(tex, vec2((x + 1.5) / textureWidth, (frame + 0.5) / totalFrames));
    vec4 col2 = texture2D(tex, vec2((x + 2.5) / textureWidth, (frame + 0.5) / totalFrames));
    vec4 col3 = texture2D(tex, vec2((x + 3.5) / textureWidth, (frame + 0.5) / totalFrames));
    return mat4(col0, col1, col2, col3);
  }

  mat4 getSkinMatrix(sampler2D tex, float totalFrames, vec4 sIdx, vec4 sWeight, float animTime) {
    float frame1 = floor(animTime);
    float frame2 = mod(frame1 + 1.0, totalFrames);
    float blend  = fract(animTime);
    mat4 m = mat4(
    0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0
);
    for (int i = 0; i < 4; i++) {
      float boneIdx = i == 0 ? sIdx.x : (i == 1 ? sIdx.y : (i == 2 ? sIdx.z : sIdx.w));
      float w       = i == 0 ? sWeight.x : (i == 1 ? sWeight.y : (i == 2 ? sWeight.z : sWeight.w));
      ${G.isHandheld?`
      // Mobile : frame entière, sans interpolation → 2× moins de fetches
      m += getBoneMatrix(tex, boneIdx, frame1, totalFrames) * w;
      `:`
      mat4 b1 = getBoneMatrix(tex, boneIdx, frame1, totalFrames);
      mat4 b2 = getBoneMatrix(tex, boneIdx, frame2, totalFrames);
      m += (b1 + (b2 - b1) * blend) * w;
      `}
    }
    return m;
  }
  `),e.vertexShader=e.vertexShader.replace(`#include <beginnormal_vertex>`,`
          vec3 objectNormal = vec3(normal);
          vec3 newNormal = objectNormal;
          #ifdef USE_TANGENT
            vec3 objectTangent = vec3(tangent.xyz);
          #endif
          `),e.vertexShader=e.vertexShader.replace(`#include <defaultnormal_vertex>`,`
          vec3 transformedNormal = normalMatrix * newNormal;
          #ifdef FLIP_SIDED
            transformedNormal = -transformedNormal;
          #endif
          #ifdef USE_TANGENT
            vec3 transformedTangent = normalMatrix * objectTangent;
            #ifdef FLIP_SIDED
              transformedTangent = -transformedTangent;
            #endif
          #endif
          `),e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`
  float birdIndex = instanceIndex;
  vec2 ref = vec2(
    (mod(birdIndex, birdWidth) + 0.5) / birdWidth,
    (floor(birdIndex / birdWidth) + 0.5) / birdWidth
);

  float seed = fract(sin(birdIndex * 12.9898) * 43758.5453);

  vec3 boidPos = texture2D(texturePosition, ref).xyz;
  vec4 velData = texture2D(textureVelocity, ref);
  float rawVelLen = length(velData.xyz);
vec3 velocity = rawVelLen > 0.0001 ? velData.xyz / rawVelLen : vec3(0.0, 0.0, 1.0);
  float bankAngle = velData.w;

  float animSpeed = 30.0;
  float animTime1 = mod(time * animSpeed + seed * animationFrames,      animationFrames);
  float animTime2 = mod(time * animSpeed + seed * animationFramesPlane, animationFramesPlane);

  mat4 skinMatrix1 = getSkinMatrix(boneTexture,  animationFrames,      skinIndex, skinWeight, animTime1);
  mat4 skinMatrix2 = getSkinMatrix(planeTexture, animationFramesPlane, skinIndex, skinWeight, animTime2);

  float animBlendSeed = fract(sin(seed * 127.1 + 311.7) * 43758.5453);
float animBlendFinal = fract(animBlendSeed + time * 0.05); // vitesse de cycle
float animBlendSmooth = smoothstep(0.3, 0.7, sin(animBlendFinal * 6.28318) * 0.5 + 0.5);

  mat4 skinMatrix  = skinMatrix1 + (skinMatrix2 - skinMatrix1) * animBlendSmooth;

  vec4 skinned = skinMatrix * vec4(position, 1.0);
  vec3 newPosition = skinned.xyz;

  mat3 skinMatrix3 = mat3(skinMatrix[0].xyz, skinMatrix[1].xyz, skinMatrix[2].xyz);
  vec3 skinnedNormal = skinMatrix3 * objectNormal;
float snLen = length(skinnedNormal);
newNormal = snLen > 0.0001 ? skinnedNormal / snLen : objectNormal;

  float finalSize = size + seed * size * 0.2;
  newPosition *= finalSize;

  float initAngle = 3.14159265;
  float cosInit = cos(initAngle);
  float sinInit = sin(initAngle);
  mat3 initRotation = mat3(cosInit, 0, -sinInit, 0, 1, 0, sinInit, 0, cosInit);
  newPosition = initRotation * newPosition;
  newNormal   = initRotation * newNormal;

  velocity.z *= -1.0;
  float xz    = length(velocity.xz);
  float cosry = xz > 0.001 ? velocity.x / xz : 1.0;
  float sinry = xz > 0.001 ? velocity.z / xz : 0.0;
  float vx    = sqrt(max(0.0, 1.0 - velocity.y * velocity.y));
  float cosrz = vx;
  float sinrz = velocity.y;

  mat3 maty = mat3(cosry, 0, -sinry, 0, 1, 0, sinry, 0, cosry);
  mat3 matz = mat3(cosrz, sinrz, 0, -sinrz, cosrz, 0, 0, 0, 1);

  float cosBk = cos(bankAngle);
  float sinBk = sin(bankAngle);
  mat3 matBank = mat3(1.0, 0.0, 0.0,  0.0, cosBk, sinBk,  0.0, -sinBk, cosBk);

  mat3 velocityRotation = maty * matz * matBank;
  newPosition = velocityRotation * newPosition;
  newNormal   = velocityRotation * newNormal;

  newPosition += boidPos;

  vec3 transformed = newPosition;
  vec4 worldPos = modelMatrix * vec4(transformed, 1.0);
  vWorldY = worldPos.y;
  `),e.vertexShader=e.vertexShader.replace(`#include <skinning_pars_vertex>`,``),e.vertexShader=e.vertexShader.replace(`#include <skinning_vertex>`,``),e.vertexShader=e.vertexShader.replace(`#include <skinbase_vertex>`,``),e.vertexShader=e.vertexShader.replace(`#include <skinnormal_vertex>`,``),e.vertexShader=e.vertexShader.replace(`#include <morphnormal_vertex>`,``),e.fragmentShader=e.fragmentShader.replace(`void main() {`,`
			varying float vWorldY;
			uniform vec3 uFogTop;
	
		uniform vec2 uResolution;
			void main() {
			`),e.fragmentShader=e.fragmentShader.replace(`#include <dithering_fragment>`,`
          #include <dithering_fragment>
		  float screenY = gl_FragCoord.y / uResolution.y;
		

		//   gl_FragColor.rgb *= 0.5;
		vec3 gray = vec3(dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114)));
		gl_FragColor.rgb = mix(gl_FragColor.rgb, gray, 0.6);
		  float aboveWater = step(0.0, vWorldY);   // 1.0 si y >= 0, sinon 0.0
       
          `),o.userData.shader=e};let s=new k(n,o,this.BIRDS);s.frustumCulled=!1;let c=new R;for(let e=0;e<this.BIRDS;e++)c.updateMatrix(),s.setMatrixAt(e,c.matrix);s.instanceMatrix.needsUpdate=!0,this.fishes.push(s),this.add(s)}}setCurve(){this.curve=this.curveData,this.curve.points.forEach(e=>{e.multiplyScalar(1.5)}),this.curveProgress=0;let e=this.curve.getPoints(100),t=new Ne().setFromPoints(e);this.curveLine=new de(t,new Ce({color:255})),this.targetSphere=new U(new Te(.5,8,8),new W({color:65280}))}initGPGPU(){this.N_GROUPS=2,this.groupProgresses=[0,.5],this.gpuCompute=new nr(this.WIDTH,this.WIDTH,this.renderer),G.isHandheld&&this.gpuCompute.setDataType(j);let e=this.gpuCompute.createTexture(),t=this.gpuCompute.createTexture();this.fillPositionTexture(e),this.fillVelocityTexture(t),this.velocityVariable=this.gpuCompute.addVariable(`textureVelocity`,tr,t),this.positionVariable=this.gpuCompute.addVariable(`texturePosition`,er,e),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:.1},this.velocityUniforms.alignmentDistance={value:this.alignment},this.velocityUniforms.cohesionDistance={value:this.cohesion},this.velocityUniforms.freedomFactor={value:20},this.velocityUniforms.predator={value:new w},this.velocityUniforms.predatorStrength={value:2},this.velocityUniforms.targetStrength={value:this.targetStrength},this.velocityUniforms.targets={value:Array.from({length:this.N_GROUPS},()=>new w)},this.velocityUniforms.nGroups={value:this.N_GROUPS},this.velocityVariable.material.defines.BOUNDS=this.BOUNDS.toFixed(2),this.velocityVariable.wrapS=M,this.velocityVariable.wrapT=M,this.positionVariable.wrapS=M,this.positionVariable.wrapT=M,this.gpuCompute.init(),[this.positionVariable,this.velocityVariable].forEach(e=>{e.renderTargets.forEach(e=>{e.texture.magFilter=I,e.texture.minFilter=I})})}fillPositionTexture(e){let t=e.image.data,n=t.length/4;for(let e=0;e<n;e++){let r=e%this.N_GROUPS,i=(e/n+Math.random()*.1)%1,a=this.curve.getPoint(i),o=e*4;t[o+0]=a.x+(Math.random()-.5)*2,t[o+1]=a.y+(Math.random()-.5)*2,t[o+2]=a.z+(Math.random()-.5)*2,t[o+3]=r*1e3}}fillVelocityTexture(e){let t=e.image.data;for(let e=0;e<t.length;e+=4)t[e+0]=(Math.random()-.5)*.2,t[e+1]=(Math.random()-.5)*.2,t[e+2]=(Math.random()-.5)*.2,t[e+3]=1}mouseInteraction=()=>{this.hitPlane=new U(new F(200,200),new W({visible:!1})),this.add(this.hitPlane),this.raycaster=new oe,this.mouseWorld=new w};debugGPGPU(){let e=this.gpuCompute.getCurrentRenderTarget(this.positionVariable),t=new Float32Array(this.WIDTH*this.WIDTH*4);this.renderer.readRenderTargetPixels(e,0,0,this.WIDTH,this.WIDTH,t);for(let e=0;e<this.BIRDS;e++)t[e*4+0],t[e*4+1],t[e*4+2],t[e*4+3]}animate=()=>{if(G.Underwater.camera.position.y<-5){for(let e of this.fishes)e.visible=!1;return}else for(let e of this.fishes)e.visible=!0;if(!this.velocityUniforms||!this.positionUniforms)return;let e=performance.now(),t=(e-this.last)/1e3;t>1&&(t=1),this.last=e;let n=[.1,.1];this.groupProgresses=this.groupProgresses.map((e,r)=>(e+t*n[r])%1),this.groupProgresses.forEach((e,t)=>{this.velocityUniforms.targets.value[t].copy(this.curve.getPoint(e))}),this.targetSphere.position.copy(this.velocityUniforms.targets.value[0]),this.mouse2D.set(G.pointer.glNormalized.x,G.pointer.glNormalized.y),this.mouseVelocity=this.oldMouse.distanceTo(this.mouse2D),this.oldMouse.copy(this.mouse2D),this.velocityUniforms.predatorStrength.value=this.mouseVelocity*1;let r=(e-this.startTime)/1e3;this.positionUniforms.time.value=r,this.velocityUniforms.time.value=r,this._simDt=(this._simDt||0)+t,this._simTick=(this._simTick||0)+1,this.positionUniforms.delta.value=this._simDt,this.velocityUniforms.delta.value=this._simDt,(!G.isHandheld||!(this._simTick&1))&&(this.gpuCompute.compute(),this._simDt=0),this._debugDone||(this._debugDone=!0,this.debugGPGPU());let i=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,a=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;if(this.fishes)for(let e of this.fishes){let t=e.material.userData.shader;if(!t?.uniforms)continue;t.uniforms.time.value=r;let n=e.material.userData.shader.uniforms;n&&(n.texturePosition.value=i,n.textureVelocity.value=a,n.time.value=r)}};load(){this.assets={models:{meshes:[]},animations:{}},G.AssetLoader.loadGltf(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/models/seagull.glb`).then(e=>{e.scene.traverse(e=>{e.isSkinnedMesh&&(this.assets.models.meshes.push(e),this.assets.models.Fish||(this.assets.models.Fish=e,this.boneCount=e.skeleton.bones.length))}),e.animations.length>0&&(this.assets.animations.Fish=e.animations[0],this.assets.animations.fishPlane=e.animations[4])})}},or=`#define GLSLIFY 1
uniform float uBoundX;
uniform float uInitWidth;

void main() {
  vec2 vUv = gl_FragCoord.xy / resolution.xy;

  vec3 position = texture2D(texturePosition, vUv).xyz;
  vec3 velocity = texture2D(textureVelocity, vUv).xyz;

  position += velocity;
  position = clamp(position, vec3(-50.0), vec3(50.0));

  // ← deux seeds différents pour Y et Z
  float seedY = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
  float seedZ = fract(sin(dot(vUv, vec2(93.9898, 17.415))) * 19547.3571);

  // Reset quand la particule dépasse la borne X
  if (position.x > uBoundX) {
    position.x = -uBoundX;
    position.y = (seedY - 0.5)  *  uInitWidth;
    position.z = (seedZ  - 0.5) * 2. * uInitWidth;

  }

  gl_FragColor = vec4(position, 1.0);
}`,sr=`#define GLSLIFY 1
uniform vec3 uMouse;
uniform float uMouseSpeed;
uniform float uTime;
uniform float uDelta;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uCurlStrength;
uniform float uFlowSpeed;
uniform float uFlowDirection;

float hash(float n) { return fract(sin(n) * 753.5453); }

float noise3D(vec3 x) {
  vec3 p = floor(x); vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  float n = p.x + p.y * 157.0 + 113.0 * p.z;
  return mix(
    mix(mix(hash(n),      hash(n+1.),   f.x), mix(hash(n+157.),  hash(n+158.), f.x), f.y),
    mix(mix(hash(n+113.), hash(n+114.), f.x), mix(hash(n+270.),  hash(n+271.), f.x), f.y),
    f.z
  );
}

vec3 curl(vec3 p) {
  float eps = 0.01;
  float dx  = noise3D(p + vec3(eps,0,0))  - noise3D(p - vec3(eps,0,0));
  float dy  = noise3D(p + vec3(0,eps,0))  - noise3D(p - vec3(0,eps,0));
  float dz  = noise3D(p + vec3(0,0,eps))  - noise3D(p - vec3(0,0,eps));
  float dx2 = noise3D(p + vec3(eps,0,0) + vec3(31.7,0,0)) - noise3D(p - vec3(eps,0,0) + vec3(31.7,0,0));
  float dy2 = noise3D(p + vec3(0,eps,0) + vec3(0,31.7,0)) - noise3D(p - vec3(0,eps,0) + vec3(0,31.7,0));
  float dz2 = noise3D(p + vec3(0,0,eps) + vec3(0,0,31.7)) - noise3D(p - vec3(0,0,eps) + vec3(0,0,31.7));
  return normalize(vec3(dy2-dz, dz2-dx, dx2-dy));
}

void main() {
  vec2 vUv = gl_FragCoord.xy / resolution.xy;

  vec3 position = texture2D(texturePosition, vUv).xyz;
  vec3 velocity = texture2D(textureVelocity, vUv).xyz;

  // ← plus de abs() sur noisePos.x — laisse le curl être symétrique
  vec3 noisePos = position * uNoiseScale + vec3(uTime * uNoiseSpeed * 0.7, uTime * uNoiseSpeed, uTime * uNoiseSpeed * 0.3);

    vec3 curlVel = curl(noisePos) * uCurlStrength;
  curlVel += curl(noisePos * 2.1 + vec3(17.3, 5.1, 3.7)) * uCurlStrength * 0.4;

  // ← X toujours positif, Y et Z libres avec plus d'amplitude
  curlVel.x = abs(min(curlVel.x, 1.1)* .3);
  curlVel.y *= 1.2;
  curlVel.z *= 1.2;

  curlVel *= 0.5;

  vec3 flowDir = vec3(1.0, 0.0, 0.0);
  vec3 streamVel = flowDir * uFlowSpeed + curlVel;

  velocity += streamVel * uDelta * 60.0;
  velocity.x = max(velocity.x, 0.01) * 0.2;
  velocity *= 0.97;

  // Souris
  float mouseDistance = distance(position, uMouse);
  float maxDistance = 1.5;
  if (mouseDistance < maxDistance) {
    vec3 pushDir = normalize(position - uMouse);
    float strength = 1.0 - mouseDistance / maxDistance;
    velocity += pushDir * strength * 8.0 * clamp(uMouseSpeed, 0.0, 1.0) * uDelta * 60.0;
  }

  gl_FragColor = vec4(velocity, 1.0);
}`,cr=class extends z{constructor(e){super(),this.last=0,this.WIDTH=G.isHandheld?20:100,this.BIRDS=this.WIDTH*this.WIDTH,this.SPHERE_RADIUS=5,this.type=e.type,this.load()}build(){this.camera=G.activeScene.scene.camera,this.renderer=G.WebGL.renderer,this.initGPGPU(),this.initMesh(),this.progress=0}initGPGPU(){this.gpuCompute=new nr(this.WIDTH,this.WIDTH,this.renderer),G.isHandheld&&this.gpuCompute.setDataType(j);let e=this.gpuCompute.createTexture(),t=this.gpuCompute.createTexture(),n=e.image.data,r=t.image.data;for(let e=0;e<this.BIRDS;e++){let t=e*4,i=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1),o=this.SPHERE_RADIUS*Math.cbrt(Math.random());n[t+0]=o*Math.sin(a)*Math.cos(i)*1.5,n[t+1]=o*Math.cos(a)*.3,n[t+2]=o*Math.sin(a)*Math.sin(i)*.8,n[t+3]=1,r[t+0]=0,r[t+1]=0,r[t+2]=0,r[t+3]=1}this.originalPositionTexture=new rt(new Float32Array(n),this.WIDTH,this.WIDTH,E,B),this.originalPositionTexture.minFilter=I,this.originalPositionTexture.magFilter=I,this.originalPositionTexture.needsUpdate=!0,this.positionVariable=this.gpuCompute.addVariable(`texturePosition`,or,e),this.velocityVariable=this.gpuCompute.addVariable(`textureVelocity`,sr,t),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.velocityUniforms=this.velocityVariable.material.uniforms,this.velocityUniforms.uOriginalPosition={value:this.originalPositionTexture},this.velocityUniforms.uMouse={value:new w(9999,9999,9999)},this.velocityUniforms.uMouseSpeed={value:0},this.velocityUniforms.uTime={value:0},this.velocityUniforms.uNoiseScale={value:1},this.velocityUniforms.uNoiseSpeed={value:1e-6},this.velocityUniforms.uFlowSpeed={value:0},this.velocityUniforms.uFlowDirection={value:.15},this.velocityUniforms.uTransition={value:0},this.velocityUniforms.uDelta={value:0},this.velocityUniforms.uCurlStrength={value:2e-4},this.positionUniforms=this.positionVariable.material.uniforms,this.positionUniforms.uOriginalPosition={value:this.originalPositionTexture},this.positionUniforms.uBoundX={value:7},this.positionUniforms.uTransition={value:0},this.positionUniforms.uInitWidth={value:this.type===`safety`?4:2.1},this.gpuCompute.init(),[this.positionVariable,this.velocityVariable].forEach(e=>{e.renderTargets.forEach(e=>{e.texture.magFilter=I,e.texture.minFilter=I})})}initMesh(){let e=new F(.05,.05,1),t=new Float32Array(this.BIRDS);for(let e=0;e<this.BIRDS;e++)t[e]=e;e.setAttribute(`instanceIndex`,new D(t,1));let n=new Float32Array(this.BIRDS);for(let e=0;e<this.BIRDS;e++)n[e]=1+Math.random()*2;e.setAttribute(`randomId`,new D(n,1));let r=new Je({side:2,color:new P(255),depthWrite:!1,transparent:!0});r.onBeforeCompile=e=>{e.uniforms.texturePosition={value:null},e.uniforms.birdWidth={value:this.WIDTH},e.uniforms.uFogTop=G.activeScene.scene.fogUniforms.uFogTop,e.uniforms.uFogBottom=G.activeScene.scene.fogUniforms.uFogBottom,e.uniforms.uFogTopDeep=G.activeScene.scene.fogUniforms.uFogTopDeep,e.uniforms.uFogBottomDeep=G.activeScene.scene.fogUniforms.uFogBottomDeep,e.uniforms.uDepth=G.activeScene.scene.fogUniforms.uDepth,e.uniforms.uFogNear=G.activeScene.scene.fogUniforms.uFogNear,e.uniforms.uFogFar=G.activeScene.scene.fogUniforms.uFogFar,e.uniforms.uResolution=G.WebGL.globalUniforms.uResolution,e.vertexShader=e.vertexShader.replace(`#include <clipping_planes_pars_vertex>`,`#include <clipping_planes_pars_vertex>
        uniform sampler2D texturePosition;
        uniform float birdWidth;
        attribute float instanceIndex;
        attribute float randomId;
        varying float vWorldY;
        varying vec2 vUv;
        varying float randomVal;
        `),e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`
        randomVal = randomId;
        float birdIndex = instanceIndex;

        // ← demi-texel pour éviter les problèmes de sampling sur PC
        vec2 ref = vec2(
          (mod(birdIndex, birdWidth) + 0.5) / birdWidth,
          (floor(birdIndex / birdWidth) + 0.5) / birdWidth
        );

        vec3 particlePos = texture2D(texturePosition, ref).xyz;

        vec4 particleMVPos = modelViewMatrix * vec4(particlePos, 1.0);
        vec3 transformed = position;
        vec4 mvPosition = particleMVPos + vec4(transformed, 0.0);
        `),e.vertexShader=e.vertexShader.replace(`#include <project_vertex>`,`
        vUv = uv;
        gl_Position = projectionMatrix * mvPosition;
        vec4 worldPos = modelMatrix * vec4(particlePos, 1.0);
        vWorldY = worldPos.y;
        `),e.fragmentShader=e.fragmentShader.replace(`void main() {`,`
        varying vec2 vUv;
        uniform vec3 uFogTop;
        uniform vec3 uFogBottom;
        uniform vec3 uFogTopDeep;
        uniform vec3 uFogBottomDeep;
        uniform float uDepth;
        uniform float uFogNear;
        uniform float uFogFar;
        uniform vec2 uResolution;
        varying float randomVal;
        varying float vWorldY;

        float circle(in vec2 _st, in float _radius, in float _smooth) {
          vec2 dist = _st - vec2(0.5);
          return 1. - smoothstep(
            _radius - (_radius * _smooth),
            _radius + (_radius * _smooth),
            dot(dist, dist) * 4.0
          );
        }

        void main() {
        `),e.fragmentShader=e.fragmentShader.replace(`#include <dithering_fragment>`,`
        #include <dithering_fragment>
        float alpha = circle(vUv, .8, .5);
        float color = circle(vUv, .5, 2.);
        gl_FragColor.rgb += (1. - color) * 1.5;
        float aboveWater = step(0.0, vWorldY);
        alpha *= (1.0 - aboveWater);
        gl_FragColor.a = alpha;

        float screenY = gl_FragCoord.y / uResolution.y;
        vec3 fogShallow = mix(uFogBottom, uFogTop, screenY);
        vec3 fogDeep    = mix(uFogBottomDeep, uFogTopDeep, screenY);
        vec3 fogColor   = mix(fogShallow, fogDeep, uDepth);
        float fragDist  = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep(uFogNear, uFogFar, fragDist);
        gl_FragColor.rgb = mix(gl_FragColor.rgb * randomVal, fogColor, fogFactor);
		gl_FragColor.a *= 0.5;
        `),this.materialShader=e},this.particles=new k(e,r,this.BIRDS),this.particles.frustumCulled=!1;let i=new $e;for(let e=0;e<this.BIRDS;e++)this.particles.setMatrixAt(e,i);this.particles.instanceMatrix.needsUpdate=!0,this.add(this.particles)}animate=()=>{let e=performance.now(),t=(e-this.last)/1e3;t>1&&(t=1),this.last=e,this.velocityUniforms.uTime.value=e*0,this._simDt=(this._simDt||0)+t,this._simTick=(this._simTick||0)+1,this.velocityUniforms.uDelta.value=this._simDt,(!G.isHandheld||!(this._simTick&1))&&(this.gpuCompute.compute(),this._simDt=0),this.materialShader&&(this.materialShader.uniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture),G.isMobile?this.scale.setScalar(2):this.scale.setScalar(3)};load(){this.assets={}}},lr=new WeakMap,ur=class extends z{constructor(e){super(),this.globalUniforms={uColor:{value:new P(15990671)}},this.oldMouse=new N,this.last=0,this.BOUNDS=60,this.BOUNDS_HALF=this.BOUNDS/2,this.bounds=new w(5,10,20),this.targetName=e.target,this.type=e.type,this._matrix=new R,this.load()}build(){G.activeScene.name===`Underwater`&&this.type!==`safety`&&G.isHandheld||(this.camera=G.activeScene.scene.camera,this.renderer=G.WebGL.renderer,this.WIDTH=2,this.BIRDS=this.WIDTH,this.bakeAnimationTexture(),this.initMesh(),this.mouseInteraction(),this.target=document.querySelector(this.targetName),this.target.size=this.target.getBoundingClientRect(),this.target.initScroll=G.lenis?.scroll||0,this.tlIn=x.timeline({scrollTrigger:{trigger:this.target,start:`top bottom+=500`,end:`bottom top-=500`,scrub:.1,onToggle:e=>{this.isComputing=e.isActive,this.fishes.visible=e.isActive}}}),this.points=G.cameraPoints,this.position.copy(this.points[this.points.length-6]),this.position.z-=50,this.type===`safety`&&(this.stream=new cr({type:this.type}),this.stream.build(),this.add(this.stream),this.stream.position.y=G.isMobile?6:-2,this.stream.position.z=2,this.stream.rotation.y=Math.PI*.2))}addLight(){this.light=new we(`#87CEEB`,20),this.light.position.set(0,15,10),this.light.angle=Math.PI/4,this.light.penumbra=0,this.light.decay=0,this.light.distance=50,this.light.target.position.set(0,0,0),this.add(this.light),this.add(this.light.target),this.lightHelper=new Ee(this.light),G.activeScene.scene.add(this.lightHelper)}bakeAnimationTexture(){let e=this.assets.models.Fish,t=e.skeleton,n=this.assets.animations.Fish,r=lr.get(e);if(r&&r.clip===n){this.boneCount=r.boneCount,this.animationFrames=r.animationFrames,this.boneAnimationTexture=r.texture;return}let i=e.parent||e,a=new qe(i);a.clipAction(n).play();let o=n.duration,s=Math.ceil(o*30),c=t.bones.length;this.boneCount=c,this.animationFrames=s;let l=c*4,u=s,d=new Float32Array(l*u*4);for(let e=0;e<s;e++){let n=e/s*o;a.setTime(n),i.updateMatrixWorld(!0),t.update();for(let n=0;n<c;n++){let r=n*16;for(let i=0;i<4;i++){let a=n*4+i,o=(e*l+a)*4;d[o+0]=t.boneMatrices[r+i*4+0],d[o+1]=t.boneMatrices[r+i*4+1],d[o+2]=t.boneMatrices[r+i*4+2],d[o+3]=t.boneMatrices[r+i*4+3]}}}let f=new rt(d,l,u,E,B);f.magFilter=I,f.minFilter=I,f.generateMipmaps=!1,f.needsUpdate=!0,this.boneAnimationTexture=f,lr.set(e,{clip:n,boneCount:c,animationFrames:s,texture:f})}initMesh(){let e=this.assets.models.Fish,t=e.geometry.clone(),n=t.getAttribute(`position`).count,r=new Float32Array(n);for(let e=0;e<n;e++)r[e]=e;t.setAttribute(`vertexIndex`,new et(r,1));let i=e.material,a=new Je({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,metalnessMap:i.metalnessMap,roughness:i.roughness,roughness:1,metalness:.4,envMapIntensity:0,side:i.side});a.map&&(a.map.needsUpdate=!0),a.onBeforeCompile=e=>{e.uniforms.texturePosition={value:null},e.uniforms.textureVelocity={value:null},e.uniforms.uTime=G.WebGL.globalUniforms.uTime,e.uniforms.boneTexture={value:this.boneAnimationTexture},e.uniforms.time={value:0},e.uniforms.size={value:.2},e.uniforms.birdWidth={value:this.WIDTH},e.uniforms.boneCount={value:this.boneCount},e.uniforms.animationFrames={value:this.animationFrames},e.uniforms.uCausticsBlendAlpha={value:.5},e.uniforms.uCausticsScale={value:.25},e.uniforms.uCausticsSpeed={value:.174},e.uniforms.uCausticsSpreadInverse={value:9.457},e.uniforms.uCausticsStrength={value:17.39},e.uniforms.uThreshold={value:.5},e.uniforms.uSeed={value:.1},e.uniforms.uFogTop=G.activeScene.scene.fogUniforms.uFogTop,e.uniforms.uFogBottom=G.activeScene.scene.fogUniforms.uFogBottom,e.uniforms.uFogTopDeep=G.activeScene.scene.fogUniforms.uFogTopDeep,e.uniforms.uFogBottomDeep=G.activeScene.scene.fogUniforms.uFogBottomDeep,e.uniforms.uDepth=G.activeScene.scene.fogUniforms.uDepth,e.uniforms.uFogNear=G.activeScene.scene.fogUniforms.uFogNear,e.uniforms.uFogFar=G.activeScene.scene.fogUniforms.uFogFar,e.uniforms.uResolution=G.WebGL.globalUniforms.uResolution,e.vertexShader=e.vertexShader.replace(`#define STANDARD`,`#define STANDARD

    attribute vec4 skinIndex;
    attribute vec4 skinWeight;
    
    uniform sampler2D boneTexture;
    uniform float uTime;
    uniform float time;
    uniform float size;
    uniform float birdWidth;
    uniform float boneCount;
    uniform float animationFrames;
	

    #include <causticsVertPars>

	float hashNoise(float p) {
  float h = fract(sin(p * 127.1) * 43758.5453);
  float h2 = fract(sin((p + 1.0) * 127.1) * 43758.5453);
  float t = fract(p);
  t = t * t * (3.0 - 2.0 * t); // smoothstep
  return mix(h, h2, t) * 2.0 - 1.0; // [-1, 1]
}

float noisedSin(float p, float seed) {
  // Noise continu basé sur sin — pas de floor, pas de discontinuité
  float phase = sin(seed * 43.5 + p * 0.3) * 0.8
              + sin(seed * 17.3 + p * 0.7) * 0.4;
  
  return sin(p * 0.5 + phase);
}

    // ⚡ Une seule fonction — évite la double lecture de texture
    mat4 getBoneMatrix(float boneIndex, float frame) {
      float textureWidth = boneCount * 4.0;
      float x = boneIndex * 4.0;
      float y = frame;
      vec4 col0 = texture2D(boneTexture, vec2((x + 0.5) / textureWidth, (y + 0.5) / animationFrames));
      vec4 col1 = texture2D(boneTexture, vec2((x + 1.5) / textureWidth, (y + 0.5) / animationFrames));
      vec4 col2 = texture2D(boneTexture, vec2((x + 2.5) / textureWidth, (y + 0.5) / animationFrames));
      vec4 col3 = texture2D(boneTexture, vec2((x + 3.5) / textureWidth, (y + 0.5) / animationFrames));
      return mat4(col0, col1, col2, col3);
    }
    
    // ⚡ Interpolation conservée même sur mobile : la baleine est vue en
    // gros plan, le stepping 30fps s'y verrait (contrairement aux boids)
    mat4 getBoneMatrixInterpolated(float boneIndex, float animTime) {
      float frame1 = floor(animTime);
      float frame2 = mod(frame1 + 1.0, animationFrames);
      float blend = fract(animTime);
      mat4 boneMat1 = getBoneMatrix(boneIndex, frame1);
      mat4 boneMat2 = getBoneMatrix(boneIndex, frame2);
      return boneMat1 + (boneMat2 - boneMat1) * blend;
    }
    `),e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`
  float birdIndex = float(gl_InstanceID);
  vec2 ref = vec2(
    mod(birdIndex, birdWidth) / birdWidth,
    floor(birdIndex / birdWidth) / birdWidth
  );
  
  // ⚡ seed calculé une seule fois
  float seed = fract(sin(birdIndex * 12.9898) * 43758.5453);
  
  vec3 boidPos = vec3(0.);
  vec3 velocity = vec3(0.);
  
  float animSpeed = 10.0;
  float animTime = mod(time * animSpeed + seed * animationFrames * .5, animationFrames);
  
  // ⚡ skinIndex/skinWeight lus une seule fois
  mat4 skinMatrix = 
    skinWeight.x * getBoneMatrixInterpolated(skinIndex.x, animTime) +
    skinWeight.y * getBoneMatrixInterpolated(skinIndex.y, animTime) +
    skinWeight.z * getBoneMatrixInterpolated(skinIndex.z, animTime) +
    skinWeight.w * getBoneMatrixInterpolated(skinIndex.w, animTime);
  
  vec4 skinned = skinMatrix * vec4(position, 1.0);
  vec3 newPosition = skinned.xyz;
  
  mat3 skinMatrix3 = mat3(skinMatrix[0].xyz, skinMatrix[1].xyz, skinMatrix[2].xyz);
  newNormal = normalize(skinMatrix3 * objectNormal);
  
  float finalSize = size + seed * size * 0.2;
  newPosition *= finalSize;
  
  // ⚡ Constantes précalculées
  const float initAngle = 3.14159265 / 2.0;
  const float cosInit = cos(3.14159265 / 2.0);
  const float sinInit = sin(3.14159265 / 2.0);
  mat3 initRotation = mat3(
    cosInit, 0, -sinInit,
    0,       1,  0,
    sinInit, 0,  cosInit
  );
  newPosition = initRotation * newPosition;
  newNormal = initRotation * newNormal;
  
  velocity.z *= -1.0;
  float xz = length(velocity.xz);
  float cosry = xz > 0.001 ? velocity.x / xz : 1.0;
  float sinry = xz > 0.001 ? velocity.z / xz : 0.0;
  float vx = sqrt(max(0.0, 1.0 - velocity.y * velocity.y));
  float cosrz = vx;
  float sinrz = velocity.y;
  
  mat3 maty = mat3(cosry, 0, -sinry, 0, 1, 0, sinry, 0, cosry);
  mat3 matz = mat3(cosrz, sinrz, 0, -sinrz, cosrz, 0, 0, 0, 1);
  mat3 velocityRotation = maty * matz;

  float animProgress = (animTime / animationFrames) * 6.28318530;
  float floatY = sin(uTime * 0.0008 + seed * 6.28318530) * 0.08
             + sin(uTime * 0.00013 + seed * 3.14159265) * 0.04;
	newPosition.y += floatY;
  newPosition = velocityRotation * newPosition;
  newNormal = velocityRotation * newNormal;
  
  newPosition += boidPos;
  vec3 transformed = newPosition;

  #include <causticsVert>
  `),e.vertexShader=e.vertexShader.replace(`#include <beginnormal_vertex>`,`
  vec3 objectNormal = vec3(normal);
  vec3 newNormal = objectNormal;
  #ifdef USE_TANGENT
    vec3 objectTangent = vec3(tangent.xyz);
  #endif
  `),e.vertexShader=e.vertexShader.replace(`#include <worldpos_vertex>`,``),e.vertexShader=e.vertexShader.replace(`#include <defaultnormal_vertex>`,`
  vec3 transformedNormal = normalMatrix * newNormal;
  #ifdef FLIP_SIDED
    transformedNormal = -transformedNormal;
  #endif
  #ifdef USE_TANGENT
    vec3 transformedTangent = normalMatrix * objectTangent;
    #ifdef FLIP_SIDED
      transformedTangent = -transformedTangent;
    #endif
  #endif
  `);for(let t of[`#include <skinning_pars_vertex>`,`#include <skinning_vertex>`,`#include <skinbase_vertex>`,`#include <skinnormal_vertex>`,`#include <morphnormal_vertex>`])e.vertexShader=e.vertexShader.replace(t,``);e.fragmentShader=e.fragmentShader.replace(`#include <lights_fragment_maps>`,``),e.fragmentShader=e.fragmentShader.replace(`void main() {`,`
        uniform float uTime;
		uniform vec3 uFogTop;
		uniform vec3 uFogBottom;
		uniform vec3 uFogTopDeep;
		uniform vec3 uFogBottomDeep;
		uniform float uDepth;
		uniform float uFogNear;
		uniform float uFogFar;
		uniform vec2 uResolution;
        #include <causticsFragPars>
        void main() {
        `),e.fragmentShader=e.fragmentShader.replace(`vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;`,`vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
		float screenY = gl_FragCoord.y / uResolution.y;
		vec3 fogShallow = mix(uFogBottom, uFogTop, screenY);
		vec3 fogDeep    = mix(uFogBottomDeep, uFogTopDeep, screenY);
		vec3 fogColor   = mix(fogShallow, fogDeep, uDepth);
		float fragDist  = gl_FragCoord.z / gl_FragCoord.w;
		float fogFactor = smoothstep(uFogNear, uFogFar, fragDist);

        outgoingLight = outgoingLight / (outgoingLight + vec3(1.0));
        outgoingLight *= 3.4;

		vec3 blueShift = vec3(0.3, 0.6, 1.0);
		outgoingLight.rgb = mix(outgoingLight.rgb, outgoingLight.rgb * blueShift, .8);

		outgoingLight.rgb = mix(outgoingLight.rgb, fogColor, fogFactor);
        float isUp = smoothstep(0., 1., vNormal.y);
		outgoingLight.rgb += vec3(1., 1., 1.) * isUp * 0.1;
        #include <causticsFrag>
        `),this.materialShader=e};let o=this.type===`safety`;t.computeBoundingBox(),t.size=t.boundingBox.getSize(new w),this.fishes=new k(t,a,this.BIRDS),this.fishes.frustumCulled=!1;let s=this._matrix,c=o?[[t.size.x*.25*(G.isMobile?2.5:6.5),G.isMobile?3:-2,2],[t.size.x*.25*(G.isMobile?2.5:6.5),G.isMobile?1:-9,7]]:[[G.isMobile?-1:-3,-12,-5],[G.isMobile?5:8,-8,0]],l=o?[[-Math.PI*.1,-Math.PI*.9,0],[-Math.PI*.1,-Math.PI*.9,0]]:[[-Math.PI*.1,-Math.PI*.3,0],[-Math.PI*.15,-Math.PI*.45,0]];for(let e=0;e<this.BIRDS;e++){let t=c[e]||[100,.2,0],n=l[e]||[0,0,0];s.position.set(...t),s.rotation.set(...n),s.scale.setScalar(o?G.isMobile?3:6.5:5),s.updateMatrix(),this.fishes.setMatrixAt(e,s.matrix)}this.fishes.instanceMatrix.needsUpdate=!0,this.add(this.fishes)}mouseInteraction=()=>{this.hitPlane=new U(new F(200,200),new W({visible:!1})),this.add(this.hitPlane),this.raycaster=new oe,this.mouseWorld=new w};animate=e=>{this.isComputing&&(this.materialShader&&(this.materialShader.uniforms.time.value=e/1e3),this.scale.setScalar(2),this.target.getAttribute(`data-altitude`)&&(G.activeScene.name===`Underwater`?this.position.y=G.isMobile?parseInt(this.target.getAttribute(`data-altitude`))-12:parseInt(this.target.getAttribute(`data-altitude`))-10:this.type===`heritage`?(this.position.y=parseInt(this.target.getAttribute(`data-altitude`))+(G.isMobile,20),this.position.z=G.isMobile?-30:-20):(this.position.y=parseInt(this.target.getAttribute(`data-altitude`))+(G.isMobile?-5:10),this.position.z=(G.isMobile,-30))),this.lightHelper?.update(),this.position.y>0?this.visible=!1:this.visible=!0,this.stream&&this.stream.animate())};load(){this.assets={models:{},animations:{}},G.AssetLoader.loadGltf(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/models/humpback1.glb`).then(e=>{e.scene.traverse(e=>{e.isSkinnedMesh&&(this.assets.models.Fish=e,this.boneCount=e.skeleton.bones.length)}),e.animations.length>0&&(this.assets.animations.Fish=e.animations[13])})}},dr=new WeakMap,fr=class extends z{constructor(e){super(),this.oldMouse=new N,this.BOUNDS=60,this.BOUNDS_HALF=this.BOUNDS/2,this.bounds=G.isMobile?new w(10,7,5):new w(30,15,5),this.targetName=e.target,this.type=e.type,this.curveProgress=0,this._matrixObj=new R,this.load()}build(){this.camera=G.activeScene?.scene?.camera,this.renderer=G.WebGL.renderer,this.WIDTH=G.isHandheld?2:4,this.BIRDS=this.WIDTH*this.WIDTH,this.bakeAnimationTexture(),this.initMesh(),this.target=document.querySelector(this.targetName),this.target&&(this.target.size=this.target.getBoundingClientRect(),this.target.initScroll=G.lenis?.scroll||0)}addLight(){this.light=new we(`#87CEEB`,20),this.light.position.set(0,15,10),this.light.angle=Math.PI/4,this.light.penumbra=0,this.light.decay=0,this.light.distance=50,this.light.target.position.set(0,0,0),this.add(this.light),this.add(this.light.target),this.lightHelper=new Ee(this.light),G.activeScene.scene.add(this.lightHelper)}bakeAnimationTexture(){let e=this.assets.models.Fish,t=e.skeleton,n=this.assets.animations.Fish,r=dr.get(e);if(r&&r.clip===n){this.boneCount=r.boneCount,this.animationFrames=r.animationFrames,this.boneAnimationTexture=r.texture;return}let i=e;for(;i.parent;)i=i.parent;let a=new qe(i);a.clipAction(n).play();let o=n.duration,s=Math.ceil(o*30),c=t.bones.length;this.boneCount=c,this.animationFrames=s;let l=c*4,u=new Float32Array(l*s*4);for(let e=0;e<s;e++){a.setTime(e/s*o),i.updateMatrixWorld(!0),t.update();for(let n=0;n<c;n++){let r=n*16;for(let i=0;i<4;i++){let a=(e*l+n*4+i)*4;u[a+0]=t.boneMatrices[r+i*4+0],u[a+1]=t.boneMatrices[r+i*4+1],u[a+2]=t.boneMatrices[r+i*4+2],u[a+3]=t.boneMatrices[r+i*4+3]}}}let d=new rt(u,l,s,E,B);d.magFilter=I,d.minFilter=I,d.generateMipmaps=!1,d.needsUpdate=!0,this.boneAnimationTexture=d,dr.set(e,{clip:n,boneCount:c,animationFrames:s,texture:d})}_buildShader(e,t){e.defines=e.defines||{},e.defines.USE_UV=``,e.onBeforeCompile=n=>{n.uniforms.uGlowingColor={value:new P(`#6DEAFE`)},n.uniforms.uTime=G.WebGL.globalUniforms.uTime,n.uniforms.boneTexture={value:this.boneAnimationTexture},n.uniforms.time={value:0},n.uniforms.size={value:.2},n.uniforms.birdWidth={value:this.WIDTH},n.uniforms.boneCount={value:this.boneCount},n.uniforms.animationFrames={value:this.animationFrames},n.uniforms.uEmissiveMap={value:t.map??null},n.uniforms.uEmissiveStrength={value:10},n.uniforms.uFogTop=G.activeScene.scene.fogUniforms.uFogTop,n.uniforms.uFogBottom=G.activeScene.scene.fogUniforms.uFogBottom,n.uniforms.uFogTopDeep=G.activeScene.scene.fogUniforms.uFogTopDeep,n.uniforms.uFogBottomDeep=G.activeScene.scene.fogUniforms.uFogBottomDeep,n.uniforms.uDepth=G.activeScene.scene.fogUniforms.uDepth,n.uniforms.uFogNear={value:5},n.uniforms.uFogFar={value:60},n.uniforms.uResolution=G.WebGL.globalUniforms.uResolution,n.fragmentShader=`
        uniform sampler2D uEmissiveMap;
        uniform float uEmissiveStrength;
      `+n.fragmentShader,n.vertexShader=n.vertexShader.replace(`#define STANDARD`,`#define STANDARD

        attribute vec4 skinIndex;
        attribute vec4 skinWeight;

        uniform sampler2D boneTexture;
        uniform float uTime;
        uniform float time;
        uniform float size;
        uniform float birdWidth;
        uniform float boneCount;
        uniform float animationFrames;

        mat4 getBoneMatrix(float boneIndex, float frame) {
          float textureWidth = boneCount * 4.0;
          float x = boneIndex * 4.0;
          vec4 col0 = texture2D(boneTexture, vec2((x + 0.5) / textureWidth, (frame + 0.5) / animationFrames));
          vec4 col1 = texture2D(boneTexture, vec2((x + 1.5) / textureWidth, (frame + 0.5) / animationFrames));
          vec4 col2 = texture2D(boneTexture, vec2((x + 2.5) / textureWidth, (frame + 0.5) / animationFrames));
          vec4 col3 = texture2D(boneTexture, vec2((x + 3.5) / textureWidth, (frame + 0.5) / animationFrames));
          return mat4(col0, col1, col2, col3);
        }

        // Interpolation conservée même sur mobile : mouvement lent et ample,
        // le stepping 30fps se verrait sur les méduses
        mat4 getBoneMatrixInterpolated(float boneIndex, float animTime) {
          float frame1 = floor(animTime);
          float frame2 = mod(frame1 + 1.0, animationFrames);
          float blend = fract(animTime);
          return getBoneMatrix(boneIndex, frame1) + (getBoneMatrix(boneIndex, frame2) - getBoneMatrix(boneIndex, frame1)) * blend;
        }
        `),n.vertexShader=n.vertexShader.replace(`#include <beginnormal_vertex>`,`
        vec3 objectNormal = vec3(normal);
        vec3 newNormal = objectNormal;
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3(tangent.xyz);
        #endif
        `),n.vertexShader=n.vertexShader.replace(`#include <defaultnormal_vertex>`,`
        vec3 transformedNormal = normalMatrix * newNormal;
        #ifdef FLIP_SIDED
          transformedNormal = -transformedNormal;
        #endif
        #ifdef USE_TANGENT
          vec3 transformedTangent = normalMatrix * objectTangent;
          #ifdef FLIP_SIDED
            transformedTangent = -transformedTangent;
          #endif
        #endif
        `),n.vertexShader=n.vertexShader.replace(`#include <begin_vertex>`,`
        float birdIndex = float(gl_InstanceID);
        float seed = fract(sin(birdIndex * 12.9898) * 43758.5453);

        const float animSpeed = 10.0;
        float animTime = mod(time * animSpeed + seed * animationFrames, animationFrames);

        mat4 skinMatrix =
            skinWeight.x * getBoneMatrixInterpolated(skinIndex.x, animTime) +
            skinWeight.y * getBoneMatrixInterpolated(skinIndex.y, animTime) +
            skinWeight.z * getBoneMatrixInterpolated(skinIndex.z, animTime) +
            skinWeight.w * getBoneMatrixInterpolated(skinIndex.w, animTime);

        vec4 skinned = skinMatrix * vec4(position, 1.0);
        vec3 newPosition = skinned.xyz;

        mat3 skinMatrix3 = mat3(skinMatrix[0].xyz, skinMatrix[1].xyz, skinMatrix[2].xyz);
        newNormal = normalize(skinMatrix3 * objectNormal);

        float finalSize = size + seed * size * 0.2;
        newPosition *= finalSize;

        // ⚡ Constantes précalculées à la compilation
        const float HALF_PI = 1.5707963;
        const float cosInit = cos(1.5707963);
        const float sinInit = sin(1.5707963);
        mat3 initRotation = mat3(
            1.0,     0.0,      0.0,
            0.0, cosInit, -sinInit,
            0.0, sinInit,  cosInit
        );
        newPosition = initRotation * newPosition;
        newNormal   = initRotation * newNormal;

        float floatSpeed = 0.5 + seed * 0.3;
        float floatAmp   = 0.3 + seed * 0.4;
        float t = time * floatSpeed;
        newPosition.y += sin(t * 0.45 + seed * 6.28318530) * floatAmp * 0.1;

        vec3 transformed = newPosition;
        `),n.fragmentShader=n.fragmentShader.replace(`void main() {`,`
        uniform float uTime;
		 uniform vec3 uFogTop;
          uniform vec3 uFogBottom;
          uniform vec3 uFogTopDeep;
          uniform vec3 uFogBottomDeep;
          uniform float uDepth;
          uniform float uFogNear;
          uniform float uFogFar;
		  uniform vec3 uGlowingColor;
		      uniform vec2 uResolution;
        // #include <causticsFragPars>
        void main() {
        `),n.fragmentShader=n.fragmentShader.replace(`#include <dithering_fragment>`,`
        #include <dithering_fragment>
        vec4 emissiveSample = texture2D(uEmissiveMap, vUv);
        gl_FragColor.rgb += emissiveSample.rgb * uEmissiveStrength;
        float luma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
		float screenY = gl_FragCoord.y / uResolution.y;
		vec3 fogShallow = mix(uFogBottom, uFogTop, screenY);
		vec3 fogDeep    = mix(uFogBottomDeep, uFogTopDeep, screenY);
		vec3 fogColor   = mix(fogShallow, fogDeep, uDepth);
		float fragDist  = gl_FragCoord.z / gl_FragCoord.w;
		float fogFactor = smoothstep(uFogNear, uFogFar, fragDist);

		gl_FragColor.rgb += uGlowingColor * smoothstep(0., .5, vUv.y );
		gl_FragColor.rgb *= 1.5;
		gl_FragColor.a += .25 * smoothstep(0., .5, vUv.y );
		gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);

		// gl_FragColor = mix(vec4(1., 0., 0., 1.), vec4(0., 1., 0., 1.), smoothstep(0., 1., vUv.y * 3.));

        `);for(let e of[`#include <skinning_pars_vertex>`,`#include <skinning_vertex>`,`#include <skinbase_vertex>`,`#include <skinnormal_vertex>`,`#include <morphnormal_vertex>`])n.vertexShader=n.vertexShader.replace(e,``);e.userData.shader=n}}_generateMatrices(){let e=this._matrixObj;this.instanceMatrices=[];let t=[];if(G.isMobile){this.positionMobile=[new w(3,4,0),new w(3,-3,0),new w(-3,4,0),new w(-3,-3,0)];for(let e=0;e<this.BIRDS;e++)t.push(this.positionMobile[e])}else for(let e=0;e<this.BIRDS;e++){let e,n=0;do e=new w((Math.random()<.5?-1:1)*Math.random()**.5*this.bounds.x*.5,G.activeScene.name===`Underwater`?(Math.random()-.5)*this.bounds.y+(G.isMobile?3:0):(Math.random()-.5)*this.bounds.y+15,-Math.random()*this.bounds.z),n++;while(n<30&&t.some(t=>t.distanceTo(e)<2));t.push(e)}for(let n of t)e.position.copy(n),e.rotation.x=Math.PI*.3+Math.PI*Math.random()*.4,e.rotation.y=Math.PI*Math.random()*.2-Math.PI*.1,e.scale.setScalar(Math.random()*20+15),e.updateMatrix(),this.instanceMatrices.push(e.matrix.clone())}_setMatrices(e){for(let t=0;t<this.BIRDS;t++)e.setMatrixAt(t,this.instanceMatrices[t]);e.instanceMatrix.needsUpdate=!0}initMesh(){this.fishesMeshes=[],this._generateMatrices();for(let e of this.assets.models.meshes){let t=e.geometry.clone(),n=t.getAttribute(`position`).count,r=new Float32Array(n);for(let e=0;e<n;e++)r[e]=e;t.setAttribute(`vertexIndex`,new et(r,1));let i=Array.isArray(e.material)?e.material[0]:e.material,a=new Je({map:i.map??null,normalMap:i.normalMap??null,roughnessMap:i.roughnessMap??null,metalnessMap:i.metalnessMap??null,roughness:i.roughness??.5,metalness:i.metalness??0,alphaMap:this.moonAlpha,transparent:!0,side:2,polygonOffset:!0,polygonOffsetFactor:10,polygonOffsetUnits:-1});this._buildShader(a,i);let o=new k(t,a,this.BIRDS);o.frustumCulled=!1,this._setMatrices(o),this.fishesMeshes.push(o),this.add(o)}}mouseInteraction=()=>{this.hitPlane=new U(new F(200,200),new W({visible:!1})),this.add(this.hitPlane),this.raycaster=new oe,this.mouseWorld=new w};animate=e=>{if(this.fishesMeshes){let t=e/1e3;for(let e of this.fishesMeshes){let n=e.material.userData.shader;n&&(n.uniforms.time.value=t)}}this.scale.setScalar(2),this.target&&this.target.getAttribute(`data-altitude`)&&(this.position.y=parseInt(this.target.getAttribute(`data-altitude`))-20),this.lightHelper?.update(),G.activeScene?.scene?.camera.position.y>0?this.visible=!1:this.visible=!0};load(){this.assets={models:{meshes:[]},animations:{}},G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/moon-alpha.png`).then(e=>{this.moonAlpha=e}),G.AssetLoader.loadGltf(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/models/jelly4.glb`).then(e=>{e.scene.traverse(e=>{e.isSkinnedMesh&&(this.assets.models.meshes.push(e),this.assets.models.Fish||(this.assets.models.Fish=e,this.boneCount=e.skeleton.bones.length))}),e.animations.length>0&&(this.assets.animations.Fish=e.animations[0])})}},pr=`
  attribute float aSeed;
  attribute float aWay;
  uniform float uTime;
  uniform vec3  uCameraPos;
  uniform float uBounds;
  uniform float uHalfWidth;
  varying vec2  vUv;
  varying float vSeed;
  varying float vWorldY;
  varying float vPosY;
  varying float vEdgeFade;

  void main(){
    vUv   = uv;
    vSeed = aSeed;

    // Billboarding : on ignore la rotation de instanceMatrix
    // On prend juste la translation (col 3) et le scale (longueur col 0/1)
    // instanceMatrix[3] = position locale dans le volume bounds
    // On ajoute uCameraPos pour la position world finale
    vec3 pos   = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]) ;
	vWorldY = pos.y;
	pos.y -= uCameraPos.y;

    // Demi-largeur de rebouclage : constante FIXE (calculée une seule fois
    // côté JS depuis le FOV/aspect réels de la caméra, cf. build()), jamais
    // recalculée depuis la profondeur caméra→particule en direct. Cette
    // profondeur varie sans cesse pendant que la caméra parcourt le trajet ;
    // une période de mod() qui change de valeur à chaque frame fait "sauter"
    // le point de rebouclage n'importe où, y compris au milieu de l'écran.
    // Une période fixe et assez grande garantit que ±uHalfWidth reste
    // toujours hors du frustum visible ; le fade NDC plus bas s'assure que
    // l'alpha est déjà à 0 bien avant d'atteindre ce point de toute façon.
    float wrapped = mod(pos.x + uTime * 10. * aWay, uHalfWidth * 2.0) - uHalfWidth;
    pos.x = wrapped;

    float sx   = length(vec3(instanceMatrix[0][0], instanceMatrix[0][1], instanceMatrix[0][2]));
    float sy   = length(vec3(instanceMatrix[1][0], instanceMatrix[1][1], instanceMatrix[1][2]));

    // On reconstruit la position en view space
    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    // On ajoute l'offset local en view space (face cam garantie)
    mvPos.x += position.x * sx;
    mvPos.y += position.y * sy;
    vPosY = vec4(projectionMatrix * mvPos).y;
    gl_Position = projectionMatrix * mvPos;

    // Fade basé sur la position écran (NDC), calculée APRÈS projection —
    // exact quel que soit le FOV/zoom/aspect de la caméra, contrairement à
    // une marge en unités monde. Sert de filet de sécurité : masque le
    // rebouclage de mod() (le saut de +uHalfWidth à -uHalfWidth) même si
    // celui-ci tombe un peu plus près de l'écran que prévu.
    float ndcX = gl_Position.x / gl_Position.w;
    vEdgeFade = 1.0 - smoothstep(0.8, 1.0, abs(ndcX));
  }
`,mr=`
  uniform float uTime;
  varying vec2  vUv;
  varying float vSeed;
  varying float vWorldY;
  uniform float uCamMax;
  uniform vec3 uCameraPos;
  varying float vPosY;
  varying float vEdgeFade;

  void main(){
    vec2 uv = vUv;
    float t  = 2.5 * uTime + vSeed * 0.1;

      uv.y += 0.03 * sin(8.0*uv.x - t);

    // Masque circulaire calculé avant le pattern de fumée (coûteux en trig)
    // pour permettre un discard précoce sur les coins du quad, hors du
    // cercle — f est borné dans [0.2, 1.0], donc sous ce seuil de fade
    // l'alpha final est de toute façon invisible quel que soit f
    vec2 c = uv * 2.0 - 1.0;
    float fade = smoothstep(1.0, 0.0, c.x*c.x + c.y*c.y*4.0);
    if (fade < 0.0067) discard;

    float f = 0.6 + 0.4 * sin(
      5.0*(uv.x + uv.y + cos(3.0*uv.x + 5.0*uv.y) + 0.02*t)
      + sin(20.0*(uv.x + uv.y - 0.1*t))
    );

    float alpha = fade * clamp(f * 0.9, 0.0, 1.0) * 0.5 * vEdgeFade;
    if(alpha < 0.003) discard;

    gl_FragColor = vec4(0.88, 0.94, 1.0, alpha * 0.1);

    #if IS_UNDERWATER
      gl_FragColor.a *= smoothstep(-20., -50., vWorldY);
    #else
     gl_FragColor.a *= smoothstep(uCamMax + 25., uCamMax  + 50., vWorldY);
    #endif
    #if IS_MOBILE
      gl_FragColor.a *= 2.;
    #endif

  }
`,hr=(G.isHandheld,120),gr=G.isHandheld?1.3:2,_r=class extends k{constructor(){super(new F(1,1),new O({vertexShader:pr,fragmentShader:mr,uniforms:{uTime:{value:0},uCameraPos:{value:new w},uCamMax:{value:0},uHalfWidth:{value:100}},transparent:!0,depthWrite:!1,side:2,uBounds:1,defines:{IS_UNDERWATER:+(G.activeScene?.name===`Underwater`),IS_MOBILE:+!!G.isHandheld}}),hr),this.bounds=new w(10,200,1),this.frustumCulled=!1,setTimeout(()=>{let e=+(G.activeScene?.name===`Underwater`);this.material.defines.IS_UNDERWATER!==e&&(this.material.defines.IS_UNDERWATER=e),this.material.defines.IS_MOBILE=+!!G.isHandheld,this.material.uniforms.uCamMax.value=G.minAlt,this.material.needsUpdate=!0},500),this.load()}build(){let e=new $e,t=new w,n=new T,r=new w,i=new Float32Array(hr),a=new Float32Array(hr);this.position.z=-50,this.offset=60,this.groupPos=new w(0,0,0),this.halfWidth=100,this.material.uniforms.uHalfWidth.value=100;let o=1;for(let s=0;s<hr;s++){if(s%15==0){let e=Math.round(s/15);o=-o,this.groupPos=new w(o>0?-100:100,-this.offset*e,L.randFloatSpread(this.bounds.z)*0)}a[s]=o,t.set(this.groupPos.x+L.randFloatSpread(this.bounds.x)*.2,this.groupPos.y+L.randFloatSpread(this.bounds.y)*.2,this.groupPos.z+L.randFloatSpread(this.bounds.z)*.2),r.set(L.randFloat(20,60)*gr,L.randFloat(10,20)*gr,1),e.compose(t,n,r),this.setMatrixAt(s,e),i[s]=L.randFloat(0,100)}this.instanceMatrix.needsUpdate=!0,this.geometry.setAttribute(`aSeed`,new D(i,1)),this.geometry.setAttribute(`aWay`,new D(a,1)),G.RAFCollection.add(this.onRaf,2)}onRaf=()=>{let e=G.activeScene.scene?.camera;e&&(this.position.y=e.position.y,this.material.uniforms.uCameraPos.value.copy(e.position),this.material.uniforms.uTime.value+=.005)};load(){this.assets={models:{},textures:{}}}destroy(){this.geometry.dispose(),this.material?.dispose()}},vr=class extends z{constructor(e){super(),this.globalUniforms={uColor:{value:new P(15990671)}},this.targetName=e.target,this.load()}build(e){this.meshes={},this.spots=[];let t=this.assets.models.seafloor,n=null;if(t.traverse(e=>{e.name===`middle`&&(n=e,n.visible=!1),e.name.includes(`Spot`)&&(this.spots.push(e),e.visible=!1),e.name.includes(`cableOrigin`)&&(this.cableOrigin=e)}),n){let e=n.getWorldPosition(new w);t.position.sub(e)}this.add(t),this.seafloor=t,this.applyFogToScene(t),this.rotation.y=Math.PI*1.16,this.rotation.x=G.isMobile?Math.PI*.05:0,this.points=G.cameraPoints,this.position.copy(new w(0,this.points[this.points.length-1].y-(G.isMobile?7:15),0)),this.scale.setScalar(G.isMobile?20:30),this.buildSpotCones(),this.buildCable(),setTimeout(()=>{this.tl=x.timeline({scrollTrigger:{trigger:`.site-footer`,start:`top bottom`,end:`bottom bottom`,scrub:!0,onUpdate:e=>{}}}),this.tl.to(G.activeScene.scene.fogUniforms.uFogNear,{value:30},0),this.tl.to(G.activeScene.scene.fogUniforms.uFogFar,{value:100},0),this.tl.to(this.strikeMat.uniforms.uWidth,{value:.8},0),this.tl.to(this.strikeMat.uniforms.uFalloff,{value:4},0)},1e3)}restart(){this.target=document.querySelector(this.targetName),this.tl&&this.tl.kill(),this.tl=x.timeline({scrollTrigger:{trigger:this.target,start:`top center`,end:`bottom bottom`,scrub:!0}}),this.tl.to(G.activeScene.scene.fogUniforms.uFogNear,{value:30},0),this.tl.to(G.activeScene.scene.fogUniforms.uFogFar,{value:100},0),this.tl.to(this.strikeMat.uniforms.uWidth,{value:.8},0),this.tl.to(this.strikeMat.uniforms.uFalloff,{value:4},0)}buildCable(){this.assets.models.seafloor.updateMatrixWorld(!0);let e=new w;this.cableOrigin.getWorldPosition(e);let t=this.worldToLocal(e.clone());G.cableOrigin=e;let n=G.isMobile?10:14,r=G.shipPos?e.distanceTo(G.shipPos)/this.scale.x:n,i=new je(.004,.004,r,4,G.isHandheld?50:306);i.translate(0,r/2,0);let a=new Je({map:this.assets.textures.cable.diffuse.texture,normalMap:this.assets.textures.cable.normal.texture,roughnessMap:this.assets.textures.cable.roughness.texture,normalScale:new N(100,100),metalness:1});a.onBeforeCompile=e=>{e.uniforms.uTime=G.WebGL.globalUniforms.uTime,e.uniforms.uNoiseStrength={value:.1},e.uniforms.uNoiseFreq={value:1},e.uniforms.uFadeLength={value:.15},e.uniforms.uFadeSurface={value:100},o.updateMatrixWorld(!0);let t=o.localToWorld(new w(0,r,0));e.uniforms.uCableTopWorld={value:t},e.uniforms.uWorldScale={value:o.getWorldScale(new w).y},e.uniforms.uShipPos={value:(G.shipPos?G.shipPos:t).clone()},this.shipPosUniform=e.uniforms.uShipPos,e.uniforms.uFogTop=G.activeScene.scene.fogUniforms.uFogTop,e.uniforms.uFogBottom=G.activeScene.scene.fogUniforms.uFogBottom,e.uniforms.uFogTopDeep=G.activeScene.scene.fogUniforms.uFogTopDeep,e.uniforms.uFogBottomDeep=G.activeScene.scene.fogUniforms.uFogBottomDeep,e.uniforms.uDepth=G.activeScene.scene.fogUniforms.uDepth,e.uniforms.uFogNear=G.activeScene.scene.fogUniforms.uFogNear,e.uniforms.uFogFar=G.activeScene.scene.fogUniforms.uFogFar,e.uniforms.uResolution=G.WebGL.globalUniforms.uResolution,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
     uniform float uTime;
     uniform float uNoiseStrength;
     uniform float uNoiseFreq;
     uniform float uFadeLength;
     uniform float uFadeSurface;
     uniform vec3 uShipPos;
     uniform vec3 uCableTopWorld;
     uniform float uWorldScale;
     varying float vFade;
     varying float vWorldY;
     float hash(vec2 p) {
       return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
     }
     float noise(vec2 p) {
       vec2 i = floor(p); vec2 f = fract(p);
       vec2 u = f * f * (3.0 - 2.0 * f);
       return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),
                  mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
     }
     float fbm(vec2 p) {
       float v=0.0,a=0.5;
       for(int i=0;i<4;i++){v+=a*noise(p);p*=2.0;a*=0.5;}
       return v;
     }`),e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`vec3 transformed = position;

   float t      = position.y / ${r.toFixed(1)};
   float fadeT  = smoothstep(0.0, uFadeLength, t)
                * smoothstep(1.0, 1.0 - uFadeLength, t);

   float worldY  = (modelMatrix * vec4(position, 1.0)).y;
   float fadeY   = 1.0 - smoothstep(-uFadeSurface, 0.0, worldY);

   float fade = fadeT * fadeY;
   vFade = fade;

   // Étire le sommet du câble vers store.shipPos (x/y/z) : la base (t=0,
   // cableOrigin) reste fixe, seule la portion haute (smoothstep sur t)
   // est translatée pour suivre le bateau, altitude ET x/z
   float topBlend = smoothstep(0.6, 1.0, t);
   vec3 worldDelta = uShipPos - uCableTopWorld;
   transformed += topBlend * worldDelta / uWorldScale;
   worldY += topBlend * worldDelta.y;
   vWorldY = worldY;

   vec2 nuv = vec2(position.y * uNoiseFreq * 0.1, uTime * 0.0001);
   float nx = (fbm(nuv)                - 0.5) * 2.0;
   float nz = (fbm(nuv + vec2(5.7,3.2)) - 0.5) * 2.0;
   transformed.x += nx * uNoiseStrength * fade;
   transformed.z += nz * uNoiseStrength * fade;
   `),e.fragmentShader=e.fragmentShader.replace(`void main() {`,`varying float vFade;
        varying float vWorldY;
        uniform vec3 uShipPos;
        uniform vec3 uFogTop;
        uniform vec3 uFogBottom;
        uniform vec3 uFogTopDeep;
        uniform vec3 uFogBottomDeep;
        uniform float uDepth;
        uniform float uFogNear;
        uniform float uFogFar;
        uniform vec2 uResolution;
        void main() { if (vWorldY > uShipPos.y) discard;`),e.fragmentShader=e.fragmentShader.replace(`#include <dithering_fragment>`,`
        #include <dithering_fragment>
        float screenY = gl_FragCoord.y / uResolution.y;
        vec3 fogShallow = mix(uFogBottom, uFogTop, screenY);
        vec3 fogDeep    = mix(uFogBottomDeep, uFogTopDeep, screenY);
        vec3 fogColor   = mix(fogShallow, fogDeep, uDepth);
        float fragDist  = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep(uFogNear, uFogFar, fragDist);
        gl_FragColor.rgb *= 0.7;
        gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
        `)},a.needsUpdate=!0;let o=new U(i,a);o.frustumCulled=!1,o.layers.enable(10),o.position.copy(t);let s=new T;this.getWorldQuaternion(s),o.quaternion.copy(s).invert(),this.add(o);let c=new Te(.1,12,12),l=new W({color:16711680});this.cableWaterSphere=new U(c,l),this.cableWaterSphere.layers.set(10),this.cableWaterSphere.frustumCulled=!1,G.activeScene.scene.add(this.cableWaterSphere)}buildSpotCones(){this.updateMatrixWorld(!0);let e=new O({uniforms:{uColor:{value:new P(`#ffffff`)},uOpacity:{value:.4}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
            vec3 up    = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
            vec4 worldCenter = modelMatrix * vec4(0.0, 0.0, 0.0, 1.0);
            vec3 newPos = worldCenter.xyz + right * position.x + up * position.y;
            gl_Position = projectionMatrix * viewMatrix * vec4(newPos, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
            vec2 uv = vUv - 0.5;
            float dist = length(uv) * 2.0;
            float glow = 1.0 - smoothstep(0.0, 1.0, dist);
            glow = pow(glow, 2.0);
            gl_FragColor = vec4(uColor, glow * uOpacity);
        }
      `,transparent:!0,depthWrite:!1,blending:2}),t=new O({uniforms:{uColor:{value:new P(`#ffffff`)},uOpacity:{value:.1},uTime:G.WebGL.globalUniforms.uTime,uCount:{value:6},uWidth:{value:.1},uFalloff:{value:10}},vertexShader:`
        attribute float aOffset;
        varying vec2 vUv;
        varying float vOffset;
        void main() {
          vUv = uv;
          vOffset = aOffset;
          vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
          vec3 up    = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
          vec4 worldCenter = modelMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          vec3 newPos = worldCenter.xyz + right * position.x + up * position.y;
          gl_Position = projectionMatrix * viewMatrix * vec4(newPos, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        uniform float uTime;
        uniform float uCount;
        uniform float uWidth;
        uniform float uFalloff;
        varying vec2 vUv;
        varying float vOffset;

        #define TAU 6.28318530718

        void main() {
          vec2 uv = vUv - 0.5;
          float dist = length(uv);
          if (dist < 0.01 || dist > 0.5) discard;

          float angle = atan(uv.y, uv.x) + uTime * 0.0001 + vOffset;
          float sector = TAU / uCount;
          float a = mod(angle, sector) - sector * 0.5;

          float strike = smoothstep(uWidth, 0.0, abs(a));
          float radial = pow(1.0 - dist * 2.0, uFalloff);

          float alpha = strike * radial * uOpacity;
          if (alpha < 0.001) discard;

          gl_FragColor = vec4(uColor, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:2});this.strikeMat=t;let n=new W({color:new P(`#ffffff`),side:2,transparent:!0,opacity:.8});this.spots.forEach(r=>{let i=new w,a=new T;r.getWorldPosition(i),r.getWorldQuaternion(a);let o=this.worldToLocal(i.clone());new U(new F(20,20),e).position.copy(o);let s=new F(20,20),c=new Float32Array(4).fill(Math.random()*Math.PI*2);s.setAttribute(`aOffset`,new et(c,1));let l=new U(s,t);l.position.copy(o),this.add(l);let u=.03,d=new F(u,u);d.translate(0,0,-.003);let f=new U(d,n);f.position.copy(o);let p=new T;this.getWorldQuaternion(p),p.invert(),f.quaternion.copy(a).premultiply(p),this.add(f)})}applyFogToScene(e){e.traverse(e=>{if(!e.isMesh||!e.material)return;e.material=e.material.clone();let t=e.material,n=e.name===`sol_01`;t.onBeforeCompile=e=>{e.uniforms.uFogTop=G.activeScene.scene.fogUniforms.uFogTop,e.uniforms.uFogBottom=G.activeScene.scene.fogUniforms.uFogBottom,e.uniforms.uFogTopDeep=G.activeScene.scene.fogUniforms.uFogTopDeep,e.uniforms.uFogBottomDeep=G.activeScene.scene.fogUniforms.uFogBottomDeep,e.uniforms.uDepth=G.activeScene.scene.fogUniforms.uDepth,e.uniforms.uFogNear=G.activeScene.scene.fogUniforms.uFogNear,e.uniforms.uFogFar=G.activeScene.scene.fogUniforms.uFogFar,e.uniforms.uResolution=G.WebGL.globalUniforms.uResolution,e.uniforms.uTime=G.WebGL.globalUniforms.uTime,e.uniforms.uSparkleScale={value:G.isMobile?20:2e3},e.uniforms.uSparkleSpeed={value:6e-4},e.uniforms.uSparkleStrength={value:1},e.uniforms.uHasSparks={value:+!!n},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`
        uniform vec3 uFogTop;
        uniform vec3 uFogBottom;
        uniform vec3 uFogTopDeep;
        uniform vec3 uFogBottomDeep;
        uniform float uDepth;
        uniform float uFogNear;
        uniform float uFogFar;
        uniform vec2 uResolution;
        uniform float uHasSparks;
        uniform float uTime;
        uniform float uSparkleScale;
        uniform float uSparkleSpeed;
        uniform float uSparkleStrength;

        float hash2(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
       float sparkle(vec2 uv, float t) {
  vec2 cell = floor(uv);
  float h = hash2(cell);
  float phase = h * 6.2831 + t * (0.5 + h * 1.5);
  float flicker = pow(max(0.0, sin(phase)), 12.0); // ← remet le flicker
  vec2 localUv = fract(uv) - vec2(hash2(cell + 0.1), hash2(cell + 0.2));
  float dist = length(localUv);
  float grain = smoothstep(0.08, 0.0, dist);
  return grain * flicker; // ← multiplie par flicker
}

        void main() {
        `),e.fragmentShader=e.fragmentShader.slice(0,e.fragmentShader.lastIndexOf(`}`))+`
        float screenY = gl_FragCoord.y / uResolution.y;
        vec3 fogShallow = mix(uFogBottom, uFogTop, screenY);
        vec3 fogDeep    = mix(uFogBottomDeep, uFogTopDeep, screenY);
        vec3 fogColor   = mix(fogShallow, fogDeep, uDepth);
        float fragDist  = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep(uFogNear, uFogFar, fragDist);
      

		if(uHasSparks > 0.5){
			#ifdef USE_MAP
				vec2 sparkleUv = vMapUv * uSparkleScale;
			#else
				vec2 sparkleUv = gl_FragCoord.xy / 10.0;
			#endif
			float t = uTime * uSparkleSpeed;
			float sp  = sparkle(sparkleUv, t);
			float sp2 = sparkle(sparkleUv * 0.4 + vec2(3.7, 1.3), t * 0.7);
			float sparkleVal = sp * 0.8 + sp2 * 0.4;
			vec3 sparkleColor = mix(vec3(0.6, 0.75, 1.0), vec3(1.0, 1.0, 1.0), sp);
			gl_FragColor.rgb += sparkleColor * sparkleVal * uSparkleStrength * uHasSparks;
		}
		gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
	}`,t.needsUpdate=!0}})}addLights(){let e=new Be(`#ffffff`,.4);this.add(e);let t=new xe(`#bbe4ff`,20);t.position.set(5,10,5),t.target.position.set(0,0,0),this.add(t),this.add(t.target)}animate(e){G.Underwater.camera.position.y,this.shipPosUniform&&G.shipPos&&this.shipPosUniform.value.copy(G.shipPos),this.cableWaterSphere&&G.shipPos&&this.cableWaterSphere.position.set(G.shipPos.x,0,G.shipPos.z)}load(){this.assets={models:{},textures:{cable:{roughness:{src:`roughness.jpg`},normal:{src:`normal.jpg`},diffuse:{src:`color.jpg`}}}},G.AssetLoader.loadGltf(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/models/${G.isHandheld?`seafloor-mobile`:`seafloor`}.glb`).then(e=>{this.assets.models.seafloor=e.scene});for(let e of Object.keys(this.assets.textures.cable)){let t=this.assets.textures.cable[e];G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/cable/${t.src}`,{flipY:!1,wrapS:M,wrapT:M}).then(e=>{e.wrapS=M,e.wrapT=M,e.needsUpdate=!0,e.repeat.set(1,300),t.texture=e})}}},yr=class extends z{constructor(){super(),this.globalUniforms={uColor:{value:new P(15990671)}},this.load()}build(e){this.meshes={};let t=new gn;t.uniforms.uVoronoiTex.value=this._bakeVoronoiTexture();let n=new U(new F(20,20),t);this.meshes.dummy=n,this.add(this.meshes.dummy)}_bakeVoronoiTexture(e=512,t=32){let n=e=>e-Math.floor(e),r=(e,t)=>(e%t+t)%t,i=(e,t)=>{let r=.12121212*e+.13131313*t,i=-.13131313*e+.12121212*t;return[n(n(r)*r*1e4),n(n(i)*i*1e6)]},a=new Uint8Array(e*e),o=0;for(let n=0;n<e;n++){let s=(n+.5)/e*t,c=Math.floor(s),l=s-c;for(let n=0;n<e;n++){let s=(n+.5)/e*t,u=Math.floor(s),d=s-u,f=0;for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++){let a=i(r(u+n,t),r(c+e,t)),o=n-d+a[0],s=e-l+a[1],p=o*o+s*s;f+=1/(p*p*p*p*p*p*p*p)}a[o++]=Math.round(Math.min(1,(1/f)**.0625)*255)}}let s=new rt(a,e,e,He,De);return s.wrapS=s.wrapT=M,s.magFilter=A,s.minFilter=A,s.generateMipmaps=!1,s.needsUpdate=!0,s}animate(){let e=1-this.smoothstep(-100,-300,G.activeScene.scene.camera.position.y);this.meshes.dummy.material.uniforms.uOpacity.value=e,this.visible=e>.001}smoothstep(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}smoothstep(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}load(){this.assets={models:{},textures:{}}}},br=`#define GLSLIFY 1
uniform sampler2D uOriginalPosition;
uniform float uBoundX;
uniform float uTransition;
uniform float uDelta;

void main() {
  vec2 vUv = gl_FragCoord.xy / resolution.xy;

  vec3 position = texture2D(texturePosition, vUv).xyz;
  vec3 velocity = texture2D(textureVelocity, vUv).xyz;
  vec3 original = texture2D(uOriginalPosition, vUv).xyz;

  position += velocity * (uDelta * 60.0);

  float seed  = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
  float blend = smoothstep(0.0, 1.0, uTransition);
  float hasPassed = step(original.x, position.x);

  // Reset bound : actif pour le flow pur (pas en transition attraction)
  // = toujours actif si blend < 1, ou si la particule a déjà passé original.x
  float shouldFlow = (1.0 - blend) + blend * hasPassed;

  if (position.x > uBoundX && shouldFlow > 0.5) {
    position = original;
    position.x += original.x - 10.;
    position.y += (seed * 1.7 - 0.5) * 0.3;
    position.z += (seed * 3.1 - 0.5) * 0.3;
  }

  // Snap net : seulement pour les particules en retard en mode attraction
  float isAttracting = blend * (1.0 - hasPassed);
  float dist = length(original - position);

  if (dist < 0.05 && isAttracting > 0.5) {
    position = original;
  }

  gl_FragColor = vec4(position, 1.0);
}`,xr=`#define GLSLIFY 1
uniform sampler2D uOriginalPosition;
uniform vec3 uMouse;
uniform float uMouseSpeed;
uniform float uTime;
uniform float uNoiseScale;
uniform float uNoiseSpeed;
uniform float uCurlStrength;
uniform float uFlowSpeed;
uniform float uFlowDirection;
uniform float uTransition;
uniform float uRotation;

float hash(float n) { return fract(sin(n) * 753.5453); }

float noise3D(vec3 x) {
  vec3 p = floor(x); vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  float n = p.x + p.y * 157.0 + 113.0 * p.z;
  return mix(
    mix(mix(hash(n),      hash(n+1.),   f.x), mix(hash(n+157.),  hash(n+158.), f.x), f.y),
    mix(mix(hash(n+113.), hash(n+114.), f.x), mix(hash(n+270.),  hash(n+271.), f.x), f.y),
    f.z
  );
}

vec3 curl(vec3 p) {
  float eps = 0.01;
  float dx  = noise3D(p + vec3(eps,0,0))  - noise3D(p - vec3(eps,0,0));
  float dy  = noise3D(p + vec3(0,eps,0))  - noise3D(p - vec3(0,eps,0));
  float dz  = noise3D(p + vec3(0,0,eps))  - noise3D(p - vec3(0,0,eps));
  float dx2 = noise3D(p + vec3(eps,0,0) + vec3(31.7,0,0)) - noise3D(p - vec3(eps,0,0) + vec3(31.7,0,0));
  float dy2 = noise3D(p + vec3(0,eps,0) + vec3(0,31.7,0)) - noise3D(p - vec3(0,eps,0) + vec3(0,31.7,0));
  float dz2 = noise3D(p + vec3(0,0,eps) + vec3(0,0,31.7)) - noise3D(p - vec3(0,0,eps) + vec3(0,0,31.7));
  return normalize(vec3(dy2-dz, dz2-dx, dx2-dy));
}

void main() {
  vec2 vUv = gl_FragCoord.xy / resolution.xy;

  vec3 position = texture2D(texturePosition, vUv).xyz;
  vec3 original = texture2D(uOriginalPosition, vUv).xyz;

  float c = cos(uRotation);
float s = sin(uRotation);
original = vec3(
    c * original.x + s * original.z,
    original.y,
    -s * original.x + c * original.z
);

  vec3 velocity = texture2D(textureVelocity, vUv).xyz;

  float blend = smoothstep(0.0, 1.0, uTransition);

// * (1. - step(original.x,position.x)

  // ── Stream ────────────────────────────────────────────────────────────────
  vec3 flowDir = vec3(cos(uFlowDirection), sin(uFlowDirection) * 0.2, 0.0);
  vec3 noisePos = position * uNoiseScale + vec3(0.0, uTime * uNoiseSpeed, uTime * uNoiseSpeed * 0.3);
  noisePos.x = abs( noisePos.x);
  vec3 curlVel  = curl(noisePos) * uCurlStrength;
  curlVel += curl(noisePos * 2.1 + vec3(17.3, 5.1, 3.7)) * uCurlStrength * 0.4;

   curlVel.x = abs(curlVel.x) * 2.0;
  curlVel.y *= 0.5;
  curlVel.z *= 0.5;

  vec3 streamVel = flowDir * uFlowSpeed + curlVel;

  float centerPull = 0.0001;
  streamVel.y -= position.y * centerPull;
  streamVel.z -= position.z * centerPull;

  // ── Attraction vers original ──────────────────────────────────────────────
  vec3 direction = original - position;
  vec3 attractVel = vec3(0.0);
  float dist = length(direction);
  if (dist > 0.001) {
    float forceMag = dist * 0.06;          // proportionnel à la distance
    forceMag = min(forceMag, 0.05);        // cap la vitesse max
    attractVel = normalize(direction) * forceMag;
}

// ── Blend ─────────────────────────────────────────────────────────────────
velocity += mix(streamVel, attractVel, blend);

// Damping très fort en mode attraction — freine exponentiellement
float damping = mix(0.97, 0.80, blend);

// Frein supplémentaire quand très proche de la cible
float snapDamp = 1.0 - blend * smoothstep(0.5, 0.0, dist);
velocity *= damping * snapDamp;

// Stop net si dist minuscule et en mode attraction
// if (dist < 0.01 && blend > 0.5) {
//     velocity = vec3(0.0);
// }

  // ── Souris ────────────────────────────────────────────────────────────────
  float mouseDistance = distance(position, uMouse);
  float maxDistance = 1.5;
  if (mouseDistance < maxDistance) {
    vec3 pushDir = normalize(position - uMouse);
    float strength = 1.0 - mouseDistance / maxDistance;
    velocity += pushDir * strength * 8.0 * clamp(uMouseSpeed, 0.0, 1.0);
  }

  gl_FragColor = vec4(velocity, 1.0);
}`,Sr=class extends z{constructor(e){super(),this.last=0,this.WIDTH=G.isTouch?100:150,this.BIRDS=this.WIDTH*this.WIDTH,this.SPHERE_RADIUS=5,this.targetName=e.target,this.load()}build(){if(this.camera=G.activeScene.scene.camera,this.renderer=G.WebGL.renderer,this.initGPGPU(),this.initMesh(),this.target=document.querySelector(this.targetName),!this.target)return;this.target.size=this.target.getBoundingClientRect(),this.target.initScroll=G.lenis?.scroll||0,e.on(t.RESIZE,this.onResize),this.progress=0;let n=G.activeScene.name===`Underwater`;this.tlIn=x.timeline({scrollTrigger:{trigger:document.querySelector(this.targetName),start:`top center`,end:`top+=200 top`,scrub:.1,onEnter:()=>{n&&(this.velocityUniforms.uTransition.value=.2)},onLeaveBack:()=>{}}})}restart(){this.tlIn&&this.tlIn.kill();let e=G.activeScene.name===`Underwater`;e&&(this.velocityUniforms.uTransition.value=0),this.tlIn=x.timeline({scrollTrigger:{trigger:document.querySelector(this.targetName),start:`top center`,end:`top+=200 top`,scrub:.1,onEnter:()=>{e&&(this.velocityUniforms.uTransition.value=.2)},onLeaveBack:()=>{e&&(this.velocityUniforms.uTransition.value=0)}}})}samplePositionsFromTexture(){let e=document.createElement(`canvas`),t=this.earth.image;e.width=t.width,e.height=t.height;let n=e.getContext(`2d`);n.drawImage(t,0,0);let r=n.getImageData(0,0,e.width,e.height).data,i=[];for(let t=0;t<5e4;t++){let t=Math.random(),n=Math.acos(2*Math.random()-1)/Math.PI,a=Math.floor(t*(e.width-1)),o=(Math.floor(n*(e.height-1))*e.width+a)*4,s=r[o]/255,c=r[o+1]/255,l=r[o+2]/255;if(.299*s+.587*c+.114*l<.3){let e=t*Math.PI*2,r=n*Math.PI;i.push(this.SPHERE_RADIUS*Math.sin(r)*Math.cos(e),this.SPHERE_RADIUS*Math.cos(r),this.SPHERE_RADIUS*Math.sin(r)*Math.sin(e))}}let a=i.length/3,o=[];for(let e=0;e<this.WIDTH*this.WIDTH;e++){let t=e%a*3;o.push(i[t+0]+(Math.random()-.5)*.1,i[t+1]+(Math.random()-.5)*.1,i[t+2]+(Math.random()-.5)*.1)}return o}initGPGPU(){this.gpuCompute=new nr(this.WIDTH,this.WIDTH,this.renderer),G.isTouch&&this.gpuCompute.setDataType(j);let e=this.gpuCompute.createTexture(),t=this.gpuCompute.createTexture(),n=this.samplePositionsFromTexture(),r=n.length/3,i=e.image.data,a=t.image.data;for(let e=0;e<this.BIRDS;e++){let t=e*4,o=e%Math.max(r,1)*3;i[t+0]=r>0?n[o+0]:(Math.random()-.5)*2,i[t+1]=r>0?n[o+1]:(Math.random()-.5)*2,i[t+2]=r>0?n[o+2]:(Math.random()-.5)*2,i[t+3]=1,a[t+0]=0,a[t+1]=0,a[t+2]=0,a[t+3]=1}this.originalPositionTexture=new rt(new Float32Array(i),this.WIDTH,this.WIDTH,E,B),this.originalPositionTexture.minFilter=I,this.originalPositionTexture.magFilter=I,this.originalPositionTexture.needsUpdate=!0,this.positionVariable=this.gpuCompute.addVariable(`texturePosition`,br,e),this.velocityVariable=this.gpuCompute.addVariable(`textureVelocity`,xr,t),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.velocityUniforms=this.velocityVariable.material.uniforms,this.velocityUniforms.uOriginalPosition={value:this.originalPositionTexture},this.velocityUniforms.uMouse={value:new w(9999,9999,9999)},this.velocityUniforms.uMouseSpeed={value:0},this.velocityUniforms.uTime={value:0},this.velocityUniforms.uNoiseScale={value:.3},this.velocityUniforms.uNoiseSpeed={value:1e-4},this.velocityUniforms.uCurlStrength={value:.001},this.velocityUniforms.uFlowSpeed={value:0},this.velocityUniforms.uFlowDirection={value:.15};let o=G.activeScene.name===`Underwater`?0:1;this.velocityUniforms.uTransition={value:o},this.velocityUniforms.uDelta={value:1/60},this.positionUniforms=this.positionVariable.material.uniforms,this.positionUniforms.uOriginalPosition={value:this.originalPositionTexture},this.positionUniforms.uBoundX={value:15},this.positionUniforms.uTransition={value:o},this.positionUniforms.uDelta={value:1/60},this.positionUniforms.uInitWidth={value:10},this.gpuCompute.init()}initMesh(){let e=new F(.05,.05,1),t=new Je({side:2,color:new P(255),depthWrite:!1,transparent:!0});this.opacityVal={value:1},G.activeScene.name!==`Underwater`&&(this.opacityVal.value=0,x.to(this.opacityVal,{value:1,duration:1,delay:.2})),t.onBeforeCompile=e=>{e.uniforms.texturePosition={value:null},e.uniforms.birdWidth={value:this.WIDTH},e.uniforms.uFogTop=G.activeScene.scene.fogUniforms.uFogTop,e.uniforms.uFogBottom=G.activeScene.scene.fogUniforms.uFogBottom,e.uniforms.uFogTopDeep=G.activeScene.scene.fogUniforms.uFogTopDeep,e.uniforms.uFogBottomDeep=G.activeScene.scene.fogUniforms.uFogBottomDeep,e.uniforms.uDepth=G.activeScene.scene.fogUniforms.uDepth,e.uniforms.uFogNear=G.activeScene.scene.fogUniforms.uFogNear,e.uniforms.uFogFar=G.activeScene.scene.fogUniforms.uFogFar,e.uniforms.uResolution=G.WebGL.globalUniforms.uResolution,e.uniforms.uOpacity=this.opacityVal,e.vertexShader=e.vertexShader.replace(`#include <clipping_planes_pars_vertex>`,`#include <clipping_planes_pars_vertex>
        uniform sampler2D texturePosition;
        uniform float birdWidth;
		varying float vWorldY;
		varying vec2 vUv;
		attribute float randomId;
		attribute float instanceScale;
		varying float randomVal;
		`),e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`
		randomVal = randomId;
        float birdIndex = float(gl_InstanceID);
        vec2 ref = vec2(
          mod(birdIndex, birdWidth) / birdWidth,
          floor(birdIndex / birdWidth) / birdWidth
        );
        vec3 particlePos = texture2D(texturePosition, ref).xyz;

        vec4 particleMVPos = modelViewMatrix * vec4(particlePos, 1.0);

        vec3 transformed = position * instanceScale;
        vec4 mvPosition = particleMVPos + vec4(transformed, 0.0);
        `),e.vertexShader=e.vertexShader.replace(`#include <project_vertex>`,`
		vUv = uv;
        gl_Position = projectionMatrix * mvPosition;
		vec4 worldPos = modelMatrix * vec4(particlePos, 1.0);
		vWorldY = worldPos.y;
        `),e.fragmentShader=e.fragmentShader.replace(`void main() {`,`
		varying vec2 vUv;
		uniform vec3 uFogTop;
		uniform vec3 uFogBottom;
		uniform vec3 uFogTopDeep;
		uniform vec3 uFogBottomDeep;
		uniform float uDepth;
		uniform float uFogNear;
		uniform float uFogFar;
		uniform vec2 uResolution;
    uniform float uOpacity;
		varying float randomVal;

		float circle(in vec2 _st, in float _radius, in float _smooth) {
			vec2 dist = _st - vec2(0.5);
			return 1. - smoothstep(
				_radius - (_radius * _smooth),
				_radius + (_radius * _smooth),
				dot(dist, dist) * 4.0
			);
		}
		varying float vWorldY;
		void main() {

        `),e.fragmentShader=e.fragmentShader.replace(`#include <dithering_fragment>`,`
		#include <dithering_fragment>
		float alpha = circle(vUv, .8, .5);
		float color = circle(vUv, .5, 2.);
		gl_FragColor.rgb += (1. - color) * 1.5;
		float aboveWater = step(0.0, vWorldY);
		// alpha *= (1.0 - aboveWater);
        gl_FragColor.a = alpha;

		float screenY = gl_FragCoord.y / uResolution.y;
		vec3 fogShallow = mix(uFogBottom, uFogTop, screenY);
		vec3 fogDeep    = mix(uFogBottomDeep, uFogTopDeep, screenY);
		vec3 fogColor   = mix(fogShallow, fogDeep, uDepth);
		float fragDist  = gl_FragCoord.z / gl_FragCoord.w;
		float fogFactor = smoothstep(uFogNear, uFogFar, fragDist);

		gl_FragColor.rgb = mix(gl_FragColor.rgb * randomVal * 0.9, fogColor, fogFactor);
    gl_FragColor.a *= uOpacity;

        `),this.materialShader=e};let n=new Float32Array(this.BIRDS);for(let e=0;e<this.BIRDS;e++)n[e]=1+Math.random()*2;e.setAttribute(`randomId`,new D(n,1));let r=new Float32Array(this.BIRDS);for(let e=0;e<this.BIRDS;e++)r[e]=1;e.setAttribute(`instanceScale`,new D(r,1)),this.particles=new k(e,t,this.BIRDS),this.particles.frustumCulled=!1;let i=new $e;for(let e=0;e<this.BIRDS;e++)this.particles.setMatrixAt(e,i);this.particles.instanceMatrix.needsUpdate=!0,this.add(this.particles)}mouseInteraction(){G.isTouch||(this.hitSphere=new U(new Te(this.SPHERE_RADIUS,32,32),new W({visible:!1,side:2})),this.add(this.hitSphere),this.raycaster=new oe,this.mouseWorld=new w(9999,9999,9999),this.oldMouse=new N,this.mouseSpeed=0)}animate=e=>{let t=performance.now(),n=(t-this.last)/1e3;if(n>.1&&(n=.1),n<=0&&(n=1/60),this.last=t,!this.velocityUniforms)return;this.velocityUniforms.uTime.value=t*1e-5,this.velocityUniforms.uRotation=this.velocityUniforms.uRotation||{value:0},this._rotationStart=this._rotationStart??t;let r=1+5*Math.exp(-(t-this._rotationStart)/150);this._rotationAngle=(this._rotationAngle||0)+n*.1*r,this.velocityUniforms.uRotation.value=this._rotationAngle,this._simDt=(this._simDt||0)+n,this._simTick=(this._simTick||0)+1,this.velocityUniforms.uDelta.value=this._simDt,this.positionUniforms.uDelta.value=this._simDt,(!G.isTouch||!(this._simTick&1))&&(this.gpuCompute.compute(),this._simDt=0),this.materialShader&&(this.materialShader.uniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture),G.isTouch?this.scale.setScalar(1.2):this.scale.setScalar(3),this.target&&this.target.getAttribute(`data-altitude`)&&(this.position.y=G.isTouch?this.target.getAttribute(`data-altitude`)-15:this.target.getAttribute(`data-altitude`)-10),G.activeScene?.scene?.name===`Underwater`?G.isTouch&&(this.position.y+=8):(m(this.target.size,this,this.target.initScroll),G.isTouch?this.scale.setScalar(1.5):this.scale.setScalar(3),G.isTouch&&(this.position.y+=4))};load(){this.assets={textures:{}},G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/./textures/earth.jpg`).then(e=>{this.earth=e})}onResize=()=>{this.target.size=this.target.getBoundingClientRect(),this.target.initScroll=G.lenis?.scroll||0}},Cr=class extends z{constructor(e){super(),this.globalUniforms={uColor:{value:new P(15990671)}},this.object=new R,this.count=G.isHandheld?100:200,this.balls=[],this.bodies=[],this.logos=[],this.position.z=-20,this.position.y=-10,this.setVisible=this.setVisible.bind(this),this.setMaterial=this.setMaterial.bind(this),this.onResize=this.onResize.bind(this),this.collisionSound=!0,this.load(),this.type=e.type,this.scene=e.scene,this.noise={t:0,speed:.6,amp:.4,freq:.8},this._resolutionVec=new N,G.world&&(G.world.allowSleep=!0)}load(){G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/glass2.png`).then(e=>{this.matCapToken=e}),G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/sphereNormalBubble.png`).then(e=>{this.normalMap=e})}build(){e.on(t.RESIZE,this.onResize);let n=new F(.1,.1);n.computeVertexNormals();let r=G.window.w*.1|0,i=G.window.h*.1|0;this.bounds=(G.isHandheld,20);let a=new k(n,new W({color:new P(`#FF0000`)}),this.count);for(let e=0;e<this.count;e++)this.object.position.set((Math.random()-.5)*this.bounds*(G.isMobile?.5:3),(Math.random()-.5)*this.bounds*3,-Math.random()*this.bounds*.5),this.object.scale.setScalar(.2+Math.random()*.8),this.object.updateMatrix(),a.setMatrixAt(e,this.object.matrix);a.random=Math.random()*100,a.uuid=s(10),a.BubbleMaterial=new wn({tMatCap:this.matCapToken,uUnderwater:this.type===`underWater`?0:1,resolution:new N(r,i),normalMap:this.normalMap}),a.BubbleMaterial.uniforms.isFloating.value=0,a.BubbleMaterial.uniforms.uRandom.value=a.random,a.BubbleMaterial.uniforms.uForceNoBloom.value=1,a.position.set(0,0,0),a.targetPos=a.position.clone(),a.isTaken=!1,a.BubbleMaterial.uniforms.uIOR.value=1.01,this.scene.camera.add(a),this.balls.push(a),this.ball=a,this.bboxBall=new Me().setFromObject(a),this._renderer=G.WebGL.renderer,this._scene=this.scene,this._worldComp=G.Underwater?.components?.world??null}setVisible(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n].visible=t;else e&&(e.visible=t)}setMaterial(e,t){let n=e=>e.material=t===`backface`?this.backfaceMaterial:e.BubbleMaterial;if(Array.isArray(e))for(let t=0;t<e.length;t++)n(e[t]);else e&&n(e)}animate=e=>{let t=G.activeScene.scene;this._renderer,G.activeScene.scene.camera,this.setVisible(this.balls,!1),this._worldComp&&(this._worldComp.visible=!1),this.setVisible(this.balls,!0),this._worldComp&&(this._worldComp.visible=!0);let n=this.logos;for(let e=0;e<n.length;e++)n[e].material.uniforms.uWhite.value=0;this.setMaterial(this.balls,`token`),this.setVisible(this.logos,!1),t.camera.position.y>2?this.setVisible(this.balls,!1):this.setVisible(this.balls,!0)};onResize(){if(!G.isMobile){let e=G.window.w*.5|0,t=G.window.h*.5|0;this._resolutionVec.set(e,t);for(let e=0;e<this.balls.length;e++)this.balls[e].BubbleMaterial.uniforms.resolution.value.copy(this._resolutionVec)}}},wr=class extends z{constructor(e){super(),this.globalUniforms={uColor:{value:new P(15990671)}},this.object=new R,this.count=1,this.balls=[],this.bodies=[],this.logos=[],this.tokens=[],this.meter=e.metters,this.img=e.img,this.target=e.target,this.onResize=this.onResize.bind(this),this.collisionSound=!0,this.load(),this.noise={t:0,speed:.6,amp:.4,freq:.8},G.world&&(G.world.allowSleep=!0)}load(){G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/glass.png`).then(e=>{this.matCapToken=e}),G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/sphereNormal.png`).then(e=>{this.normalMap=e}),G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/${this.img}.jpg`).then(e=>{this.background=e})}build(){this.targets=document.querySelectorAll(this.target),this.targets.forEach(e=>{e.size=e.getBoundingClientRect(),e.initScroll=G.lenis?.scroll||0}),this.visible=!1,this.tl=x.timeline({scrollTrigger:{trigger:this.targets[0],start:`top bottom`,end:`bottom top`,onToggle:e=>{this.visible=e.isActive}}}),e.on(t.RESIZE,this.onResize);let n=new F(1,1),r=G.WebGL.renderer.getPixelRatio(),i=G.window.w*r|0,a=G.window.h*r|0;this.bounds=0;for(let e=0;e<1;e++){let e=new Dn({tMatCap:this.matCapToken,resolution:new N(i,a),normalMap:this.normalMap,background:this.background,uTop:G.Underwater.fogUniforms.uFogTop,uBottom:G.Underwater.fogUniforms.uFogBottom,uTopDeep:G.Underwater.fogUniforms.uFogTopDeep,uBottomDeep:G.Underwater.fogUniforms.uFogBottomDeep,uDepth:G.Underwater.fogUniforms.uDepth}),t=new U(n,e);t.random=Math.random()*100,t.uuid=s(10),t.ImageBubbleMaterial=e,t.ImageBubbleMaterial.uniforms.isFloating.value=0,t.ImageBubbleMaterial.uniforms.uRandom.value=t.random,t.ImageBubbleMaterial.uniforms.uForceNoBloom.value=1,G.isMobile&&this.img===`image-bubble-2`?t.position.set(0,0,.5):t.position.set(0,0,.1),t.targetPos=t.position.clone(),t.isTaken=!1,t.ImageBubbleMaterial.uniforms.uIOR.value=1.01,this.add(t),this.tokens.push(t)}}animate=(e,t)=>{this.targets[0]&&m(this.targets[0].size,this,this.targets[0].initScroll,.1,t)};onResize(){if(!G.isMobile){let e=G.WebGL.renderer.getPixelRatio();G.window.w*e|0,G.window.h*e|0,this.targets.forEach(e=>{e.size=e.getBoundingClientRect(),e.initScroll=G.lenis?.scroll||0})}}},Tr=class extends z{constructor(){super(),this.globalUniforms={uColor:{value:new P(15990671)}},this._worldPos=new w,this.sizeVal=5,this.yOffset=this.sizeVal,this.load()}build(){this.meshes={};let e=this.assets.models.ship,t=G.Underwater.camera,n=new w(-64.27695634797962,13.60200753503258,-9.773028854810367),r=new w(G.cableOrigin?.x??0,0,G.cableOrigin?.z??0);r.clone().sub(n).normalize();let i=new w;t.getWorldDirection(i);let a=r.clone().sub(n).dot(i),o=t.fov*Math.PI/180,s=2*Math.tan(o/2)*a*t.aspect;e.scale.set(1,1,1),e.rotation.y=Math.PI*-.4,e.rotation.z=0,e.updateMatrixWorld(!0);let c=new Me().setFromObject(e).getSize(new w).x,l=Math.abs(s/c)*(G.isMobile?2:1.2);this.sizeVal=l,this.yOffset=l,e.scale.set(l,l,l),G.shipScale=l,e.updateMatrixWorld(!0),e.updateMatrixWorld(!0);let u=e.getObjectByName(`cableOrigin`);if(this.cableOrigin=u,u){let t=new w;u.getWorldPosition(t),e.position.sub(t),e.position.y+=this.yOffset,G.shipPos=new w(t.x,this.yOffset,t.z),e.updateMatrixWorld(!0)}setTimeout(()=>{G.cableOrigin?(this.position.set(G.cableOrigin.x,this.yOffset,G.cableOrigin.z),this.basePosition={x:G.cableOrigin.x,z:G.cableOrigin.z}):(this.position.set(0,this.yOffset,0),this.basePosition={x:0,z:0}),e.updateMatrixWorld(!0),this.meshes.dummy=e,this._rebuildInstances(e),this._mergeStatic(e),e.traverse(e=>{e.isMesh&&e.material&&this._applyFloatShader(e.material)}),this._instancedMeshes?.forEach(e=>{e.material.map===null&&(e.material.metalness=.5,e.material.envMap=G.Underwater.environment,e.material.envMapIntensity=.9),e.material.needsUpdate=!0,e.material&&this._applyFloatShader(e.material)}),this._mergedMeshes?.forEach(e=>{e.material&&this._applyFloatShader(e.material)}),this.add(e);let t=new Me().setFromObject(this);e.size=t.getSize(new w),G.shipCenter=t.getCenter(new w),G.WebGL.renderer.info},500)}_rebuildInstances(e){this._instancedMeshes=[],e.updateMatrixWorld(!0);let t=[];e.traverse(e=>{e.isMesh&&t.push(e)});let n=new Map;for(let e of t){let t=`${e.geometry.uuid}__${e.material.uuid}`;n.has(t)||n.set(t,[]),n.get(t).push(e)}for(let[e,t]of n){if(t.length<2)continue;let e=t[0],n=new k(e.geometry,e.material,t.length);n.name=`instanced_${e.name}`,t.forEach((e,t)=>{n.setMatrixAt(t,e.matrixWorld),e.removeFromParent()}),n.instanceMatrix.needsUpdate=!0,this.add(n),this._instancedMeshes.push(n)}}_mergeStatic(e){this._mergedMeshes=[];let t=new Map;e.traverse(e=>{if(!e.isMesh)return;let n=e.material.uuid;t.has(n)||t.set(n,{material:e.material,meshes:[]}),t.get(n).meshes.push(e)});for(let[,{material:e,meshes:n}]of t){if(n.length<2)continue;let t=n.map(e=>{let t=e.geometry.clone();return t.applyMatrix4(e.matrixWorld),t});try{let r=te(t,!1);if(!r)continue;let i=new U(r,e);i.name=`merged_${e.uuid.slice(0,6)}`,n.forEach(e=>e.removeFromParent()),this.add(i),this._mergedMeshes.push(i)}catch{}}}_applyFloatShader(e){let t=G.WebGL.globalUniforms.uTime,n={value:G.waterSpeed*10.5},r={value:G.waterAmp*10};e.onBeforeCompile=e=>{e.uniforms.uTime=t,e.uniforms.uNoiseSpeed=n,e.uniforms.uAmplitude=r,e.uniforms.uCausticsBlendAlpha={value:.5},e.uniforms.uCausticsScale={value:.5},e.uniforms.uCausticsSpeed={value:.174},e.uniforms.uCausticsSpreadInverse={value:9.457},e.uniforms.uCausticsStrength={value:17.39},e.uniforms.uThreshold={value:-.4},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
         #include <waterNoise>
         #include <causticsVertPars>
         uniform float uTime;
         uniform float uNoiseSpeed;
         uniform float uAmplitude;`),e.vertexShader=e.vertexShader.replace(`#include <worldpos_vertex>`,``),e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`vec3 transformed = position;
         #include <causticsVert>`),e.vertexShader=e.vertexShader.replace(`#include <beginnormal_vertex>`,`vec3 objectNormal = vec3(normal);
         vec3 newNormal = objectNormal;
         #ifdef USE_TANGENT
           vec3 objectTangent = vec3(tangent.xyz);
         #endif`),e.vertexShader=e.vertexShader.replace(`#include <defaultnormal_vertex>`,`vec3 transformedNormal = normalMatrix * newNormal;
         #ifdef FLIP_SIDED
           transformedNormal = -transformedNormal;
         #endif
         #ifdef USE_TANGENT
           vec3 transformedTangent = normalMatrix * objectTangent;
           #ifdef FLIP_SIDED
             transformedTangent = -transformedTangent;
           #endif
         #endif`),e.fragmentShader=e.fragmentShader.replace(`void main() {`,`uniform float uTime;
         #include <causticsFragPars>
         void main() {`),e.fragmentShader=e.fragmentShader.replace(`vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;`,`vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
         float isUp = smoothstep(1., 0., vNormal.y);
        //  #include <causticsFrag>
		 `)},e.needsUpdate=!0}buildCable(){let e=new w;this.cableOrigin.getWorldPosition(e);let t=this.worldToLocal(e.clone()),n=new je(.1,.1,15,8);n.translate(0,-7.5,0);let r=new U(n,new Je({map:this.assets.textures.cable.diffuse.texture,normalMap:this.assets.textures.cable.normal.texture,roughnessMap:this.assets.textures.cable.roughness.texture,normalScale:new N(100,100)}));r.position.copy(t),r.position.y+=this.yOffset*.5,this.add(r)}animate=()=>{if(!this.meshes.dummy)return;let e=G.WebGL.globalUniforms.uTime.value*G.waterSpeed*.5,t=G.waterAmp*.025,n=this.basePosition.x,r=this.basePosition.z,i=u(n,r+2,e)*t,a=u(n,r-2,e)*t,o=u(n-1,r,e)*t,s=u(n+1,r,e)*t,c=(i+a+o+s)*.25,l=Math.atan2(i-a,4)*.8,d=Math.atan2(s-o,2)*.8;this.position.set(n,c,r),this.rotation.x=l,this.rotation.z=d,this._cableAttachLocal=this._cableAttachLocal||new w,this._cableAttachLocal.set(0,this.yOffset,0),this.updateMatrixWorld(!0);let f=this.localToWorld(this._cableAttachLocal);G.shipPos=G.shipPos||new w,G.shipPos.set(f.x,c+this.yOffset,f.z),this.visible=G.Underwater.camera.position.y>=-40};load(){this.assets={models:{},textures:{cable:{roughness:{src:`roughness.jpg`},normal:{src:`normal.jpg`},diffuse:{src:`color.jpg`}}}},G.AssetLoader.loadGltf(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/models/ship4.glb`).then(e=>{this.assets.models.ship=e.scene});for(let e of Object.keys(this.assets.textures.cable)){let t=this.assets.textures.cable[e];G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/cable/${t.src}`,{flipY:!1,wrapS:M,wrapT:M}).then(e=>{e.wrapS=M,e.wrapT=M,e.needsUpdate=!0,e.repeat.set(1,300),t.texture=e})}}},Er=class extends U{constructor(e,t,n,r=!1){super(e,t),this.rotation.x=-Math.PI/2,this.name=n,this.rotateNormals=r,this.reflectObjects=[],this.waterRenderTarget=new H(G.window.w*.5,G.window.h*.5,{minFilter:A,magFilter:A,format:E}),this.waterRenderTarget.texture.wrapS=Re,this.waterRenderTarget.texture.wrapT=Re,this.refractionRenderTarget=new H(G.window.w*.5,G.window.h*.5,{minFilter:A,magFilter:A,format:E}),this.refractionRenderTarget.texture.wrapS=Re,this.refractionRenderTarget.texture.wrapT=Re,this.waterCamera=null,this.waterScene=null,this.sceneCamera=null,this.reflectorPlane=new Le,this.normal=new w,this.reflectorWorldPosition=new w,this.cameraWorldPosition=new w,this.rotationMatrix=new $e,this.lookAtPosition=new w(0,0,0),this.clipPlane=new Pe,this.view=new w,this.target=new w,this.q=new Pe,this.textureMatrix=new $e}build(){this.material.uniforms.uTextureMatrix={value:this.textureMatrix},this.material.uniforms.uTexture={value:this.waterRenderTarget.texture},this.material.uniforms.uRefractionTexture={value:this.refractionRenderTarget.texture},this.updateReflection()}animate(){G.Underwater.camera.position.y<-20||this.updateReflection()}updateReflection(){if(!this.sceneCamera)return;this.updateMatrix(),this.updateMatrixWorld(!0),this.reflectorWorldPosition.setFromMatrixPosition(this.matrixWorld),this.cameraWorldPosition.setFromMatrixPosition(this.sceneCamera.matrixWorld),this.normal.set(0,1,0),this.view.subVectors(this.reflectorWorldPosition,this.cameraWorldPosition);let e=this.view.clone().dot(this.normal)>0;if(e&&this.normal.negate(),this.material.uniforms.uUnderwater){let e=this.cameraWorldPosition.y-this.reflectorWorldPosition.y,t=Math.min(Math.max((1-e)*.5,0),1);this.material.uniforms.uUnderwater.value=t*t*(3-2*t)}this.view.reflect(this.normal).negate(),this.view.add(this.reflectorWorldPosition),this.rotationMatrix.extractRotation(this.sceneCamera.matrixWorld),this.lookAtPosition.set(0,0,-1),this.lookAtPosition.applyMatrix4(this.rotationMatrix),this.lookAtPosition.add(this.cameraWorldPosition),this.target.subVectors(this.reflectorWorldPosition,this.lookAtPosition),this.target.reflect(this.normal).negate(),this.target.add(this.reflectorWorldPosition),this.waterCamera.position.copy(this.view),this.waterCamera.up.set(0,1,0),this.waterCamera.up.applyMatrix4(this.rotationMatrix),this.waterCamera.up.reflect(this.normal),this.waterCamera.lookAt(this.target),this.waterCamera.far=this.sceneCamera.far,this.waterCamera.updateMatrixWorld(),this.waterCamera.projectionMatrix.copy(this.sceneCamera.projectionMatrix),this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.waterCamera.projectionMatrix),this.textureMatrix.multiply(this.waterCamera.matrixWorldInverse),this.textureMatrix.multiply(this.matrixWorld),this.material.uniforms.uTextureMatrix&&(this.material.uniforms.uTextureMatrix.value=this.textureMatrix),this.reflectorPlane.setFromNormalAndCoplanarPoint(this.normal,this.reflectorWorldPosition),this.reflectorPlane.applyMatrix4(this.waterCamera.matrixWorldInverse),this.clipPlane.set(this.reflectorPlane.normal.x,this.reflectorPlane.normal.y,this.reflectorPlane.normal.z,this.reflectorPlane.constant);let t=this.waterCamera.projectionMatrix;this.q.x=(Math.sign(this.clipPlane.x)+t.elements[8])/t.elements[0],this.q.y=(Math.sign(this.clipPlane.y)+t.elements[9])/t.elements[5],this.q.z=-1,this.q.w=(1+t.elements[10])/t.elements[14],this.clipPlane.multiplyScalar(2/this.clipPlane.dot(this.q)),t.elements[2]=this.clipPlane.x,t.elements[6]=this.clipPlane.y,t.elements[10]=this.clipPlane.z+1-.01,t.elements[14]=this.clipPlane.w,this.visible=!1,G.Underwater.components.cloudsLayer&&(G.Underwater.components.cloudsLayer.visible=!1),G.Underwater.components.dust&&(G.Underwater.components.dust.visible=!1),G.Underwater.components.waterRibon&&(G.Underwater.components.waterRibon.visible=!1),G.Underwater.components.godrays&&G.Underwater.components.godrays.meshes&&(G.Underwater.components.godrays.meshes.dummy.visible=!1);let n=G.WebGL.renderer.getRenderTarget();e?(G.WebGL.renderer.setRenderTarget(this.refractionRenderTarget),G.WebGL.renderer.clear(!0),G.WebGL.renderer.render(this.waterScene,this.sceneCamera),this.material.uniforms.uRefractionTexture&&(this.material.uniforms.uRefractionTexture.value=this.refractionRenderTarget.texture)):(G.Underwater.skybox&&(G.Underwater.skybox.material.uniforms.uIsReflexion.value=1),G.WebGL.renderer.setRenderTarget(this.waterRenderTarget),G.WebGL.renderer.clear(!0),G.WebGL.renderer.render(this.waterScene,this.waterCamera),G.Underwater.skybox&&(G.Underwater.skybox.material.uniforms.uIsReflexion.value=0),this.material.uniforms.uTexture&&(this.material.uniforms.uTexture.value=this.waterRenderTarget.texture)),G.WebGL.renderer.setRenderTarget(n),this.visible=!0,G.Underwater.components.cloudsLayer&&(G.Underwater.components.cloudsLayer.visible=!0),G.Underwater.components.dust&&(G.Underwater.components.dust.visible=!0),G.Underwater.components.waterRibon&&(G.Underwater.components.waterRibon.visible=!0),G.Underwater.components.godrays&&G.Underwater.components.godrays.meshes&&(G.Underwater.components.godrays.meshes.dummy.visible=!0)}updateCameraScene(e,t){this.sceneCamera=e,this.waterCamera=e.clone(),this.waterScene=t}destroy(){this.waterRenderTarget.dispose(),this.refractionRenderTarget.dispose(),this.geometry.dispose(),this.material.dispose()}},Dr=`precision highp float;
#define GLSLIFY 1

uniform sampler2D uState;
uniform sampler2D uDepthMap;
uniform vec2  uResolution;
uniform float uDamping;
uniform float uPropagation;
uniform float uImpact;
uniform float uTime;
uniform float uPulseSpeed;
uniform float uPulseRandomness;
uniform float uPulseDuration;

varying vec2 vUv;

float hash11(float n) {
  return fract(sin(n * 12.9898) * 43758.5453);
}

void main() {
  vec2 px = 1.0 / uResolution;

  // ── Sample du ship ─────────────────────────────────────────
  float dC = texture2D(uDepthMap, vUv).r;
  float dL = texture2D(uDepthMap, vUv - vec2(px.x, 0.0)).r;
  float dR = texture2D(uDepthMap, vUv + vec2(px.x, 0.0)).r;
  float dD = texture2D(uDepthMap, vUv - vec2(0.0, px.y)).r;
  float dU = texture2D(uDepthMap, vUv + vec2(0.0, px.y)).r;

  float hasC = 1.0 - smoothstep(0.997, 0.999, dC);
  float hasL = 1.0 - smoothstep(0.997, 0.999, dL);
  float hasR = 1.0 - smoothstep(0.997, 0.999, dR);
  float hasD = 1.0 - smoothstep(0.997, 0.999, dD);
  float hasU = 1.0 - smoothstep(0.997, 0.999, dU);

//   if (hasC > 0.5) {
//     gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
//     return;
//   }

  vec4 s = texture2D(uState, vUv);
  float h = s.r;
  float v = s.g;
  float prevFoam = s.b;

  // ── Laplacien du canal R (ondes) avec bord ship absorbant ──
  float hL = (hasL > 0.5) ? 0.0 : texture2D(uState, vUv - vec2(px.x, 0.0)).r;
  float hR = (hasR > 0.5) ? 0.0 : texture2D(uState, vUv + vec2(px.x, 0.0)).r;
  float hD_ = (hasD > 0.5) ? 0.0 : texture2D(uState, vUv - vec2(0.0, px.y)).r;
  float hU = (hasU > 0.5) ? 0.0 : texture2D(uState, vUv + vec2(0.0, px.y)).r;
  float lap = (hL + hR + hD_ + hU) * 0.25 - h;

  v += lap * uPropagation;
  v *= uDamping;

  // ── Bande source : 1 pixel RT du bord ──
  float neighborShip = (hasL + hasR + hasD + hasU) * 0.25;
  float nearShip = (1.0 - hasC) * smoothstep(0.05, 0.5, neighborShip);

  // ── Pulse périodique ──
float currentCycle = floor(uTime * uPulseSpeed);
float invSpeed = 1.0 / max(uPulseSpeed, 0.0001);

float pulse = 0.0;
const int PULSE_LOOKBACK = 6; // suffit tant que uPulseSpeed * uPulseDuration < ~5
for (int i = 0; i < PULSE_LOOKBACK; i++) {
  float cycleId = currentCycle - float(i);
  float rand = hash11(cycleId);

  // jitter de spawn en secondes (au lieu d'un scale sur la phase)
  float jitter = (rand - 0.5) * uPulseRandomness * invSpeed;
  float ageSec = uTime - (cycleId * invSpeed + jitter);

  // enveloppe rise/fall — ratio original conservé (0.02 / 0.07 ≈ 0.286)
  float riseTime = 0.286 * uPulseDuration;
  float p = smoothstep(0.0, riseTime, ageSec)
          * (1.0 - smoothstep(riseTime, uPulseDuration, ageSec));

  pulse = max(pulse, p);
}

  // ── Intégration ondes ──────────────────────────────────────
  h += v;

  // ── KICK SOURCE ───────────────────────────────────────────
  float kickBand = (1.0 - hasC) * smoothstep(0.05, 0.5, neighborShip);
  float sourceStrength = kickBand * pulse;
  h = mix(h, uImpact, sourceStrength);
  v = mix(v, 0.0, sourceStrength);

  if (abs(h) < 0.0001) h = 0.0;
  if (abs(v) < 0.0001) v = 0.0;

  // ── Bord du domaine ───────────────────────────────────────
  vec2 borderUv = min(vUv, 1.0 - vUv) * uResolution;
  float border = smoothstep(0.0, 4.0, min(borderUv.x, borderUv.y));
  h *= border;
  v *= border;

  // ──────────────────────────────────────────────────────────
  // FOAM CONSTANTE — diffusion sur le canal B
  // ──────────────────────────────────────────────────────────
  //
  // Au lieu d'écrire \`nearShip\` direct (1 pixel binaire),
  // on diffuse le canal B avec un laplacien + décay.
  // Résultat : la mousse "bave" naturellement autour du ship
  // sur quelques pixels, ce qui lisse le contour à la lecture.

  // Laplacien sur le canal B, en absorbant aux bords du ship
  float fbL = (hasL > 0.5) ? 0.0 : texture2D(uState, vUv - vec2(px.x, 0.0)).b;
  float fbR = (hasR > 0.5) ? 0.0 : texture2D(uState, vUv + vec2(px.x, 0.0)).b;
  float fbD = (hasD > 0.5) ? 0.0 : texture2D(uState, vUv - vec2(0.0, px.y)).b;
  float fbU = (hasU > 0.5) ? 0.0 : texture2D(uState, vUv + vec2(0.0, px.y)).b;
  float foamLap = (fbL + fbR + fbD + fbU) * 0.25 - prevFoam;

  // Diffusion + décroissance
  float foamDiffusion = 0.6;   // 0..1 — vitesse d'étalement par frame
  float foamDecay     = 0.82;  // 0..1 — survie par frame (plus bas = bande plus courte)

  float diffusedFoam = prevFoam + foamLap * foamDiffusion;
  diffusedFoam *= foamDecay;

  // Source : alimente continuellement le pixel collé au ship
  float foamSource = nearShip;

  // La mousse est le max entre ce qui diffuse et la source actuelle
  float constantFoam = max(diffusedFoam, foamSource);

  // Petit wobble temporel pour la vie
  float foamWobble = 0.85 + 0.15 * sin(uTime * 0.003 + vUv.x * 30.0 + vUv.y * 25.0);
  constantFoam *= foamWobble;

  constantFoam = clamp(constantFoam, 0.0, 1.0);
  if (constantFoam < 0.001) constantFoam = 0.0;

  constantFoam *= border;

  gl_FragColor = vec4(h, v, constantFoam, 1.0);
}`,Or=`#define GLSLIFY 1
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,kr=class{constructor({size:e=256,bounds:t,waterY:n=0,objectLayer:r=10}){this.size=e,this.bounds=t,this.waterY=n,this.objectLayer=r}build(e,t){this.renderer=e,this.scene=t;let n={type:j,format:E,minFilter:A,magFilter:A,wrapS:Re,wrapT:Re,depthBuffer:!1,stencilBuffer:!1};this.rtA=new H(this.size,this.size,n),this.rtB=new H(this.size,this.size,n),this.read=this.rtA,this.write=this.rtB;let r=new nt(this.size,this.size);r.type=Ae,this.depthRT=new H(this.size,this.size,{depthTexture:r,depthBuffer:!0});let i=this.bounds.maxX-this.bounds.minX,a=this.bounds.maxZ-this.bounds.minZ,o=(this.bounds.minX+this.bounds.maxX)*.5,s=(this.bounds.minZ+this.bounds.maxZ)*.5;this.near=-.1,this.far=1,this.camY=this.waterY+this.far*.5,this.depthCam=new Xe(-i*.5,i*.5,a*.5,-a*.5,this.near,this.far),this.depthCam.position.set(o,this.camY,s),this.depthCam.rotation.x=-Math.PI/2,this.depthCam.rotation.y=0,this.depthCam.rotation.z=0,this.depthCam.updateMatrixWorld(),this.depthCam.layers.set(this.objectLayer),this.computeMat=new O({vertexShader:Or,fragmentShader:Dr,uniforms:{uState:{value:null},uDepthMap:{value:this.depthRT.depthTexture},uResolution:{value:new N(this.size,this.size)},uImpact:{value:.005},uPropagation:{value:1.5},uDamping:{value:.5},uWaterY:{value:this.waterY},uCamY:{value:this.camY},uCamNear:{value:this.near},uCamFar:{value:this.far},uTime:{value:0},uPulseSpeed:{value:2},uPulseDuration:{value:.07/.3},uPulseRandomness:{value:1}}}),this.computeScene=new ve,this.computeScene.add(new U(new F(2,2),this.computeMat)),this.fsCam=new Xe(-1,1,1,-1,0,1)}animate(){if(store.isMobile)return;let e=this.renderer,t=e.getRenderTarget();this.computeMat.uniforms.uTime.value=performance.now()*2e-4,e.setRenderTarget(this.depthRT),e.clear(),e.render(this.scene,this.depthCam),this.computeMat.uniforms.uState.value=this.read.texture,e.setRenderTarget(this.write),e.render(this.computeScene,this.fsCam);let n=this.read;this.read=this.write,this.write=n,e.setRenderTarget(t)}get texture(){return this.read.texture}},Ar=class extends z{constructor(t){super(),this.globalUniforms={uDiffuseColor:{value:new P(6639730)},uSpecularColor:{value:new P(6639730)},uColor:{value:new P(16777215)},uLightColor:{value:new P(379898)}},this.position.set(0,0,0),this.updateMatrix(),this.scene=t.scene,this.load(),e.on(`App:start`,()=>{})}_makeWaterUniforms(e){return{uProgress:{value:0},uNormalTexture:{value:this.assets.textures.waterNormal},uDiffuseColor:{value:new P(`#2a6a8a`)},uSpecularColor:{value:new P(`#aaccdd`)},uColor:{value:new P(`#7fc7ee`)},uLightIntensity:{value:1.848},uShine:{value:1.337},uLightColor:{value:new P(`#f4e88d`)},uNoiseScale:{value:3},uNoiseSpeed:{value:G.waterSpeed},uRipplesOrigin:{value:new N(.47,.46)},uAmplitude:{value:e===void 0?G.waterAmp:e},uRipplesFrequency:{value:2.5},uRipplesIntensity:{value:.2},uRipplesSpeed:{value:2},uRipplesStart:{value:.01},uRipplesEnd:{value:.05},uReflectionDistortion:{value:3},uReflectionStrength:{value:1},uTexture:{value:null},uRefractionTexture:{value:null},uTextureMatrix:{value:null},uUnderwater:{value:0},uHazeColor:{value:new P(`#b9614e`)},uHazeStrength:{value:1},uHazeWidth:{value:1},uRipples:{value:null},uRippleTexelSize:{value:0}}}_setupWaterPlane(e){e.position.x=G.Underwater.camera.position.x,e.position.z=-G.Underwater.camera.position.y,e.build(),e.updateCameraScene(G.Underwater.camera,G.Underwater)}build(){let e=new w;G.Underwater.components.ship.getWorldPosition(e);let t=e.x,n=e.z;G.isHandheld||(this.ripples=new kr({size:2048,bounds:{minX:t-150,maxX:t+150,minZ:n-150,maxZ:n+150},waterY:0,objectLayer:10}),this.ripples.build(G.WebGL.renderer,G.Underwater));let r=new rn({uniforms:this._makeWaterUniforms(),defines:{RIPPLES:+!G.isHandheld},scene:this.scene}),i=G.isHandheld?150:600;this.water=new Er(new F(400,400,i,i),r,`AboveSurface`,!0),this.water.material.uRipples={value:null},this.water.material.uRippleTexelSize={value:400/2048},this.water.material.uniforms.uRippleBoundsMin={value:new N(t-150,n-150)},this.water.material.uniforms.uRippleBoundsMax={value:new N(t+150,n+150)},this.water.material.uniforms.uDepthMap={value:G.isHandheld?null:this.ripples.depthRT.depthTexture},this._setupWaterPlane(this.water),this.add(this.water),this.addOthers()}addOthers(){let e=new pe;e.moveTo(-5e3,-5e3),e.lineTo(5e3,-5e3),e.lineTo(5e3,5e3),e.lineTo(-5e3,5e3),e.closePath();let t=new Ke;t.moveTo(-200,-200),t.lineTo(200,-200),t.lineTo(200,200),t.lineTo(-200,200),t.closePath(),e.holes.push(t);let n=new rn({uniforms:this._makeWaterUniforms(0),defines:{RIPPLES:0},scene:this.scene});this.fullMesh=new Er(new ge(e),n,`AboveSurface`,!0),this._setupWaterPlane(this.fullMesh),this.add(this.fullMesh)}animate=()=>{let e=G.Underwater.camera.position.y<-20;this.water&&(this.water.visible=!e),this.fullMesh&&(this.fullMesh.visible=!e),!e&&(this.water&&this.water.animate(),this.fullMesh&&this.fullMesh.animate(),G.isHandheld||this.ripples.animate(),G.isHandheld||(this.water.material.uniforms.uRipples.value=this.ripples.texture))};load(){this.assets={models:{},textures:{}},G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/waternormals.jpg`,{wrapping:M}).then(e=>{this.assets.textures.waterNormal=e})}destroy(){this.water?.destroy(),this.fullMesh?.destroy()}},jr={enable:!0,enableFadeBit:1,depthFade:1,uColor:{value:new P(16777194)},uAlpha:{value:.2}},Mr=class extends k{constructor(e){super(new F(1,1),new sn({alphaMap:new he,uColor:e.uColor||new w(1,.35,.05),uColorBody:e.uColorBody||new w(1,.35,.05),uColorCore:e.uColorCore||new w(1,.92,.72),uAlpha:e.params?.uAlpha||jr.uAlpha,uDepthIntensity:e.depthIntensity}),G.isHandheld?e.count/3:e.count),this.params=e.params||jr,this.renderOrder=e.renderOrder||0,this.map=e.map,this.depthIntensity=e.depthIntensity,this.particles=[],this.spread=e.spread||2.5,this.step=e.step||1,this.dummy=new R,this.isCloud=!0,this.bounds=new w(40,10,100),this.isLayer=e.layer,this.scaleVal=e.scale||10,this.position.copy(e.pos),this.skippedInputs=[0,0,0,0,0,0],this.sceneName=e.scene,this.load()}build(){this.map?this.getCloudCoordinate():this.generateParticles(),this.material.uniforms.uMaskTexture.value=this.smoke,e.on(t.RESIZE,this.onResize)}getCloudCoordinate(){let e=document.createElement(`canvas`);e.classList.add(`cloud-map`),e.width=this.cloudMap.naturalWidth,e.height=this.cloudMap.naturalHeight,e.ctx=e.getContext(`2d`),e.ctx.translate(0,e.height),e.ctx.scale(1,-1),e.ctx.drawImage(this.cloudMap,0,0);let t=e.ctx.getImageData(0,0,e.width,e.height),n=Array.from(Array(e.height),()=>Array(e.width));e.ctx.clearRect(0,0,e.width,e.height),e.ctx.translate(0,e.height),e.ctx.scale(1,-1),e.ctx.drawImage(this.cloudMap,0,0);for(let r=0;r<e.height;r+=this.step)for(let i=0;i<e.width;i+=this.step)n[r][i]=t.data[(i+r*e.width)*4]>0;this.textureCoordinates=[];for(let t=0;t<e.height;t++)for(let r=0;r<e.width;r++)n[t][r]&&this.textureCoordinates.push({x:r-e.width*.5,y:t-e.height*.5,old:!1,toDelete:!1});this.generateParticles()}generateParticles(){if(this.map)this.particles=this.textureCoordinates.map(e=>{let t=e.x*.032*this.scaleVal,n=e.y*.032*this.scaleVal;return this.particleData(t,n)});else for(let e=0;e<this.count;e++)this.particles.push(this.particleGroupData(0,0,0));this.particles.length>this.count&&(this.particles=this.particles.slice(0,this.count)),this.createInstance()}particleData(e,t){let n={};return n.x=e+this.spread*(Math.random()-.5),n.z=-(t+this.spread*(Math.random()-.5)),n.y=Math.random()*this.spread*.1-this.spread*.05,n.isGrowing=!0,n.toDelete=!1,n.maxScale=.5+1*Math.random()**10,n.scale=n.maxScale*.5+Math.random()*n.maxScale*.5,n.deltaScale=.03+.03*Math.random(),n.age=Math.PI*Math.random(),n.ageDelta=.001+.002*Math.random(),n.rotationZ=.5*Math.random()*Math.PI,n.deltaRotation=.02*(Math.random()*.1-.05),n}particleGroupData(e,t,n){let r={},i=this.isLayer?[20*this.scaleVal,20*this.scaleVal,2]:[2,6,2];return r.x=e+(Math.random()-.5)*i[0]*this.spread,r.z=n+(Math.random()-.5)*i[1]*this.spread,r.y=t+(Math.random()-.5)*i[2]*this.spread,r.isGrowing=!0,r.toDelete=!1,r.maxScale=.5+1*Math.random()**10+i*2,r.scale=r.maxScale*.5+Math.random()*r.maxScale*.5*2,r.deltaScale=.03+.03*Math.random(),r.age=Math.PI*Math.random(),r.ageDelta=.001+.002*Math.random(),r.rotationZ=.5*Math.random()*Math.PI,r.deltaRotation=.02*(Math.random()*.1-.05),r}createInstance(){this.camera=G.Underwater.camera,this.material.uniforms.uEnableFade.value=jr.enableFadeBit,this.material.uniforms.uColor=this.params.uColor,this.material.uniforms.uAlpha=this.params.uAlpha,this.material.uniforms.uResolution.value=new N(Math.floor(G.window.w*G.WebGL.renderer.getPixelRatio()),Math.floor(G.window.h*G.WebGL.renderer.getPixelRatio())),this.material.uniforms.uCameraNear.value=this.camera.near,this.material.uniforms.uCameraFar.value=this.camera.far,this.material.uniforms.uDepthIntensity.value=this.depthIntensity||.001;let e=[];this.dummy.scale.set(1,1,1),this.particles.forEach((t,n)=>{this.dummy.position.set(t.x,t.y,t.z),this.dummy.scale.setScalar(5),this.dummy.updateMatrix(),e.push(Math.random()),this.setMatrixAt(n,this.dummy.matrix)}),this.instanceMatrix.needsUpdate=!0,this.geometry.setAttribute(`randomVal`,new D(new Float32Array(e),1))}onResize=()=>{G.isMobile||this.material.uniforms.uResolution.value.set(Math.floor(G.window.w*G.WebGL.renderer.getPixelRatio()),Math.floor(G.window.h*G.WebGL.renderer.getPixelRatio()))};load=()=>{this.map&&G.AssetLoader.loadTexture(this.map).then(e=>{this.cloudMap=e.image}),G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/smoke.png`).then(e=>{this.smoke=e})};get visible(){return this._visible}set visible(e){if(e&&this.hasSkippedUpdate){let e=this.skippedInputs;this.hasSkippedUpdate=!1,this.updateInstances(e[0],e[1],e[2],e[3],e[4],e[5])}this._visible=e}animate=()=>{let e=this.camera.position;if(!this._visible){let t=this.skippedInputs;t[0]=this.position.x,t[1]=this.position.y,t[2]=this.position.z,t[3]=e.x,t[4]=e.y,t[5]=e.z,this.hasSkippedUpdate=!0;return}this.updateInstances(this.position.x,this.position.y,this.position.z,e.x,e.y,e.z)};updateInstances(e,t,n,r,i,a){this.particles.forEach((o,s)=>{let c=o.x+e-r,l=o.y+t-i,u=o.z+n-a;Math.sqrt(c*c+l*l+u*u)<3?this.dummy.scale.setScalar(0):this.dummy.scale.setScalar(5),this.dummy.position.set(o.x,o.y,o.z),this.dummy.updateMatrix(),this.setMatrixAt(s,this.dummy.matrix)}),this.instanceMatrix.needsUpdate=!0}destroy(){this.material.uniforms.uDepthFade.value=1,this.material.uniforms.uProgress.value=0}},Nr=class extends z{constructor(){super(),this.globalUniforms={uColor:{value:new P(15990671)}},this.load()}build(e){this.meshes={};let t=G.isMobile?200:300,n=G.isHandheld?10:150,r=new je(t,t,G.isMobile?25:50,n,8,!0);this.ribon=new U(r,new un),this.add(this.ribon)}animate=()=>{let e=G.Underwater.camera,t=G.Underwater.components?.water?.water;t&&this.ribon.material.uniforms.uWaveCenter.value.set(t.position.x,t.position.z),this.ribon.material.uniforms.uCamZ.value=e.position.z,this.ribon.material.uniforms.uCamY.value=e.position.y,this.ribon.material.uniforms.uCamX.value=e.position.x,this.ribon.material.uniforms.uAspect.value=e.aspect,this.ribon.material.uniforms.uFov.value=e.fov;let n=new w(0,0,-1).applyQuaternion(e.quaternion),r=new w(1,0,0).applyQuaternion(e.quaternion),i=new w(0,1,0).applyQuaternion(e.quaternion);this.ribon.material.uniforms.uCamForward.value=n,this.ribon.material.uniforms.uCamRight.value=r,this.ribon.material.uniforms.uCamUp.value=i};load(){this.assets={models:{},textures:{}}}},Pr=class extends z{constructor(){super(),this.globalUniforms={uColor:{value:new P(15990671)}},this.load()}build(e){let t=new We(1e3,1e3,1e3,10,1,10),n=new pn({color:16777215});this.cube=new U(t,n),this.add(this.cube),this.cubeBox=new Me().setFromObject(this.cube),this.cube.position.y=this.cubeBox.max.y-.001,this.cube.position.x=G.Underwater.camera.position.x,this.cube.position.z=-G.Underwater.camera.position.y,this.cube.frustumCulled=!1,this.cube.renderOrder=999}load(){this.assets={models:{},textures:{}}}},Fr=class extends n{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new P}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Ir={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new P(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Lr=class e extends n{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new N(256,256):new N(e.x,e.y),this.clearColor=new P(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new H(i,a,{type:j}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new H(i,a,{type:j});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new H(i,a,{type:j});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Ir;this.highPassUniforms=ke.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new O({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new N(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ke.clone(l.uniforms),this.blendMaterial=new O({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new P,this._oldClearAlpha=1,this._basic=new W,this._fsQuad=new c(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new N(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new O({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new N(.5,.5)},direction:{value:new N(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new O({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Lr.BlurDirectionX=new N(1,0),Lr.BlurDirectionY=new N(0,1);var Rr=`
precision highp float;
attribute vec2 position;
attribute vec2 uv;
uniform vec2 texelSize;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
void main() {
  vUv = uv;
  vL  = uv - vec2(texelSize.x, 0.0);
  vR  = uv + vec2(texelSize.x, 0.0);
  vT  = uv + vec2(0.0, texelSize.y);
  vB  = uv - vec2(0.0, texelSize.y);
  gl_Position = vec4(position, 0.0, 1.0);
}
`,zr=`
precision highp float;
uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec3 color;
uniform vec2 point;
uniform float radius;
varying vec2 vUv;
void main() {
  vec2 p = vUv - point;
  p.x   *= aspectRatio;
  gl_FragColor = vec4(texture2D(uTarget, vUv).xyz + exp(-dot(p,p)/radius)*color, 1.0);
}
`,Br=`
precision highp float;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform vec2 dyeTexelSize;
uniform float dt;
uniform float dissipation;
varying vec2 vUv;
vec4 bilerp(sampler2D s, vec2 uv, vec2 ts) {
  vec2 f = fract(uv/ts - 0.5);
  vec2 i = floor(uv/ts - 0.5);
  return mix(
    mix(texture2D(s,(i+vec2(0.5))*ts), texture2D(s,(i+vec2(1.5,0.5))*ts), f.x),
    mix(texture2D(s,(i+vec2(0.5,1.5))*ts), texture2D(s,(i+vec2(1.5))*ts), f.x),
    f.y);
}
void main() {
  vec2 coord    = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
  gl_FragColor  = dissipation * bilerp(uSource, coord, dyeTexelSize);
  gl_FragColor.a = 1.0;
}
`,Vr=`
precision mediump float;
uniform sampler2D uVelocity;
varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
void main() {
  float L=texture2D(uVelocity,vL).x, R=texture2D(uVelocity,vR).x;
  float T=texture2D(uVelocity,vT).y, B=texture2D(uVelocity,vB).y;
  vec2  C=texture2D(uVelocity,vUv).xy;
  if(vL.x<0.0)L=-C.x; if(vR.x>1.0)R=-C.x;
  if(vT.y>1.0)T=-C.y; if(vB.y<0.0)B=-C.y;
  gl_FragColor = vec4(0.5*(R-L+T-B), 0.0, 0.0, 1.0);
}
`,Hr=`
precision mediump float;
uniform sampler2D uVelocity;
varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
void main() {
  gl_FragColor = vec4(0.5*(
    texture2D(uVelocity,vR).y - texture2D(uVelocity,vL).y -
    texture2D(uVelocity,vT).x + texture2D(uVelocity,vB).x
  ), 0.0, 0.0, 1.0);
}
`,Ur=`
precision highp float;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float curl;
uniform float dt;
varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
void main() {
  float L=texture2D(uCurl,vL).x, R=texture2D(uCurl,vR).x;
  float T=texture2D(uCurl,vT).x, B=texture2D(uCurl,vB).x;
  float C=texture2D(uCurl,vUv).x;
  vec2 force = 0.5*vec2(abs(T)-abs(B), abs(R)-abs(L));
  force = force/(length(force)+0.0001) * curl * C;
  force.y *= -1.0;
  gl_FragColor = vec4(texture2D(uVelocity,vUv).xy + force*dt, 0.0, 1.0);
}
`,Wr=`
precision mediump float;
uniform sampler2D uTexture;
uniform float value;
varying vec2 vUv;
void main() { gl_FragColor = value * texture2D(uTexture, vUv); }
`,Gr=`
precision mediump float;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
void main() {
  float div = texture2D(uDivergence, vUv).x;
  float p = (texture2D(uPressure,vL).x + texture2D(uPressure,vR).x +
             texture2D(uPressure,vB).x + texture2D(uPressure,vT).x - div) * 0.25;
  gl_FragColor = vec4(p, 0.0, 0.0, 1.0);
}
`,Kr=`
precision mediump float;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
void main() {
  vec2 vel = texture2D(uVelocity,vUv).xy - vec2(
    texture2D(uPressure,vR).x - texture2D(uPressure,vL).x,
    texture2D(uPressure,vT).x - texture2D(uPressure,vB).x
  );
  gl_FragColor = vec4(vel, 0.0, 1.0);
}
`,qr=`
precision highp float;
uniform sampler2D tDiffuse;
uniform sampler2D uMask;
uniform sampler2D tFluid;
uniform float uDistortion;
varying float vWorldY;

varying vec2 vUv;
void main() {
  vec2 vel = texture2D(tFluid, vUv).rg;
  float mask = texture2D(uMask, vUv).g;
  float aboveWater = step(0.0, vWorldY);   // 1.0 si y >= 0, sinon 0.0
  float alpha = (1.0 - aboveWater );
  gl_FragColor = texture2D(tDiffuse, vUv - vel * uDistortion * mask);

//   gl_FragColor.rgb = vec3(mask);
}
`,Jr=`
varying vec2 vUv;
varying float vWorldY;
void main() {
  vUv = uv;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldY = worldPos.y;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function Yr(){let e=new Ne;return e.setAttribute(`position`,new et(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e.setAttribute(`uv`,new et(new Float32Array([0,0,2,0,0,2]),2)),e}function Xr(e,t,n){return new _e({vertexShader:Rr,fragmentShader:e,uniforms:{texelSize:{value:n},...t},depthTest:!1,depthWrite:!1,glslVersion:`100`})}function Zr(e,t,n,r,i,a){let o=new H(e,t,{minFilter:a,magFilter:a,type:n,format:r,wrapS:Re,wrapT:Re,depthBuffer:!1,stencilBuffer:!1});return i&&(o.texture.internalFormat=i),o}function Qr(e,t,n,r,i,a){return{read:Zr(e,t,n,r,i,a),write:Zr(e,t,n,r,i,a),swap(){let e=this.read;this.read=this.write,this.write=e}}}var $r=class{constructor(e,t,n={}){this.renderer=e,this.mouse=t,this.simRes=n.simRes??64,this.dyeRes=n.dyeRes??256,this.iterations=n.iterations??3,this.densityDissipation=n.densityDissipation??.97,this.velocityDissipation=n.velocityDissipation??.98,this.pressureDissipation=n.pressureDissipation??.8,this.curlStrength=n.curlStrength??20,this.radius=n.radius??.5,this._splats=[],this._geo=Yr(),this._scene=new ve,this._camera=new Xe(-1,1,1,-1,0,1),this._mesh=new U(this._geo,null),this._scene.add(this._mesh),this._size=new N,this._build(),this._warmUp()}_warmUp(){let e=this.renderer,t=e.getRenderTarget(),n=e.autoClear;e.autoClear=!1;let r=this._mSplat.uniforms;r.color.value.set(0,0,0),r.uTarget.value=this.velocity.read.texture,this._pass(this._mSplat,this.velocity.write),this.velocity.swap(),r.uTarget.value=this.density.read.texture,this._pass(this._mSplat,this.density.write),this.density.swap(),e.autoClear=n,e.setRenderTarget(t)}_build(){let e=this.renderer.capabilities.isWebGL2,t=this.simRes,n=this.dyeRes,r=e?j:this.renderer.extensions.get(`OES_texture_half_float`)?.HALF_FLOAT_OES??1015,i=e||this.renderer.extensions.get(`OES_texture_half_float_linear`)?A:I,a=I,o=e?ce:E,s=e?He:E,c=e?`RG16F`:null,l=e?`R16F`:null,u=e?`RGBA16F`:null;this.density=Qr(n,n,r,E,u,i),this.velocity=Qr(t,t,r,o,c,i),this.pressure=Qr(t,t,r,s,l,a),this.divergence=Zr(t,t,r,s,l,a),this.curl=Zr(t,t,r,s,l,a);let d=new N(1/t,1/t),f=new N(1/n,1/n);this._mSplat=Xr(zr,{uTarget:{value:null},aspectRatio:{value:1},color:{value:new w},point:{value:new N},radius:{value:this.radius/100}},d),this._mAdvect=Xr(Br,{uVelocity:{value:null},uSource:{value:null},dyeTexelSize:{value:f.clone()},dt:{value:.016},dissipation:{value:1}},d),this._mDivergence=Xr(Vr,{uVelocity:{value:null}},d),this._mCurl=Xr(Hr,{uVelocity:{value:null}},d),this._mVorticity=Xr(Ur,{uVelocity:{value:null},uCurl:{value:null},curl:{value:this.curlStrength},dt:{value:.016}},d),this._mClear=Xr(Wr,{uTexture:{value:null},value:{value:this.pressureDissipation}},d),this._mPressure=Xr(Gr,{uPressure:{value:null},uDivergence:{value:null}},d),this._mGradient=Xr(Kr,{uPressure:{value:null},uVelocity:{value:null}},d)}_pass(e,t){this._mesh.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this._scene,this._camera)}_flushSplat(e,t,n,r){let i=this._mSplat.uniforms;this.renderer.getSize(this._size),i.aspectRatio.value=this._size.x/this._size.y,i.point.value.set(e,t),i.color.value.set(n,r,1),i.uTarget.value=this.velocity.read.texture,this._pass(this._mSplat,this.velocity.write),this.velocity.swap(),i.uTarget.value=this.density.read.texture,this._pass(this._mSplat,this.density.write),this.density.swap()}addSplat(e,t,n,r){this._splats.push(e,t,n,r)}update(e){e=Math.min(e,.033);let t=this.renderer,n=t.autoClear;t.autoClear=!1;let r=this.mouse.velocity[0],i=this.mouse.velocity[1];(r!==0||i!==0)&&(t.getSize(this._size),this._splats.push(.5+this.mouse.cursor[0],.5-this.mouse.cursor[1],r*this._size.x,i*-this._size.y));for(let e=0;e<this._splats.length;e+=4)this._flushSplat(this._splats[e],this._splats[e+1],this._splats[e+2],this._splats[e+3]);this._splats.length=0,this._mCurl.uniforms.uVelocity.value=this.velocity.read.texture,this._pass(this._mCurl,this.curl);let a=this._mVorticity.uniforms;a.uVelocity.value=this.velocity.read.texture,a.uCurl.value=this.curl.texture,a.dt.value=e,this._pass(this._mVorticity,this.velocity.write),this.velocity.swap(),this._mDivergence.uniforms.uVelocity.value=this.velocity.read.texture,this._pass(this._mDivergence,this.divergence),this._mClear.uniforms.uTexture.value=this.pressure.read.texture,this._mClear.uniforms.value.value=this.pressureDissipation,this._pass(this._mClear,this.pressure.write),this.pressure.swap();let o=this._mPressure.uniforms;o.uDivergence.value=this.divergence.texture;for(let e=0;e<this.iterations;e++)o.uPressure.value=this.pressure.read.texture,this._pass(this._mPressure,this.pressure.write),this.pressure.swap();let s=this._mGradient.uniforms;s.uPressure.value=this.pressure.read.texture,s.uVelocity.value=this.velocity.read.texture,this._pass(this._mGradient,this.velocity.write),this.velocity.swap();let c=this._mAdvect.uniforms;c.uVelocity.value=this.velocity.read.texture,c.uSource.value=this.velocity.read.texture,c.dt.value=e,c.dissipation.value=this.velocityDissipation,c.dyeTexelSize.value.x=1/this.simRes,c.dyeTexelSize.value.y=1/this.simRes,this._pass(this._mAdvect,this.velocity.write),this.velocity.swap(),c.uVelocity.value=this.velocity.read.texture,c.uSource.value=this.density.read.texture,c.dissipation.value=this.densityDissipation,c.dyeTexelSize.value.x=1/this.dyeRes,c.dyeTexelSize.value.y=1/this.dyeRes,this._pass(this._mAdvect,this.density.write),this.density.swap(),t.setRenderTarget(null),t.autoClear=n}get texture(){return this.density.read.texture}dispose(){[this.density,this.velocity,this.pressure].forEach(e=>{e.read.dispose(),e.write.dispose()}),this.divergence.dispose(),this.curl.dispose(),this._geo.dispose(),[this._mSplat,this._mAdvect,this._mDivergence,this._mCurl,this._mVorticity,this._mClear,this._mPressure,this._mGradient].forEach(e=>e.dispose())}},ei=0,ti=1,ei=0,ti=1,ni=3,ri=2,ii=class extends ve{constructor(){super(),this.cameraMove=!0,e.on(`sceneChange`,e=>{e===`index`?this.cameraMove=!0:this.cameraMove=!1}),this.name=`Underwater`,this.isStart=!0,this.skySuppressed=!1,this.options={controls:!0,mouseMoveAngle:new N(.05,.035),cameraMotionPosAmplitude:.026,cameraMotionRotAmplitude:.0132,cameraMotionPosFrequency:.21,cameraMotionRotFrequency:.59,cameraZTranslate:0,cameraYTranslate:0,cameraXTranslate:0,cameraZOffset:5,pointerNormalize1:.04,pointerNormalize2:.03},this._cameraAngle=0,this._cameraPitch=0,this.targetDeepPitch=0,this.deepPitchOffset=0,this._orbitRadius=null,this._orbitBaseAngle=null,this._orbitBasePitch=null,this._lastCamY=null,this.ocludingObjects=[],this._v3=new w,this._vCam=new w,this._rafBasePos=new w,this._rafTarget=new w,this._depthSavedVisibility=new Map,this._depthSavedMaterials=new Map,this._depthObjects=[],this.camera=new ze(45,G.window.w/G.window.h,4,1500),this.camera.position.z=10,this.camera.position.y=2,this.add(this.camera),this.backgroundIntensity=1,this.environmentIntensity=1,this.envExposure=.9,this.envRotation=139,this.cameraHelper=new Ye(this.camera),this.cameraHelper.visible=!1,this.add(this.cameraHelper),this.transitionProgress=0,G.transitionVal=1,this.devCamera=new ze(45,G.window.w/G.window.h,1,1e4),this.devCamera.position.z=10,this.devCamera.position.y=0,this.add(this.devCamera),this.controls=new Vn(this.devCamera,G.WebGL.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enabled=this.options.controls,this.controls.enableDamping=!0;let t=e=>{let t=G.cameraPoints;return t[Math.min(Math.round(t.length*e),t.length-1)]};this.components={ship:new Tr,water:new Ar({way:`above`,scene:this}),waterRibon:new Nr,seaBed:new vr({target:`.site-footer`}),mask:new Pr,seagull:new ar({target:`.understanding`,curveData:new Ge([new w(-30,L.randFloat(0,10)-5,0),new w(-20,L.randFloat(0,10)-5,-5),new w(0,L.randFloat(0,10)-5,-20),new w(15,L.randFloat(0,10)-5,-8),new w(30,L.randFloat(0,10)-5,0),new w(20,L.randFloat(0,10)-5,8),new w(0,L.randFloat(0,10)-5,20),new w(-15,L.randFloat(0,10)-5,5)],!0)}),cloudsLayer:new Mr({pos:t(2/133).clone().add(new w(0,-1,0)),layer:!0,scale:.4,step:.1,count:G.isHandheld?40:75,spread:2,depthIntensity:.01,params:{uColor:{value:new P(`#F0F4F8`)},uAlpha:{value:1}}}),cloudsLayer1:new Mr({pos:t(5/133).clone().add(new w(-10,0,-5)),layer:!0,scale:.4,step:.1,count:G.isHandheld?5:10,spread:1,depthIntensity:.05,uColor:new w(1,.92,.72),uColorBody:new w(1,.92,.72),uColorCore:new w(1,.92,.72),params:{uColor:{value:new P(`#F0F4F8`)},uAlpha:{value:1}}}),cloudsLayer2:new Mr({pos:t(5/133).clone().add(new w(10,0,-2)),layer:!0,scale:.4,step:.1,count:G.isHandheld?5:10,spread:1.5,depthIntensity:.05,uColor:new w(1,.92,.72),uColorBody:new w(1,.92,.72),uColorCore:new w(1,.92,.72),params:{uColor:{value:new P(`#F0F4F8`)},uAlpha:{value:1}}}),cloudsLayer3:new Mr({pos:t(8/133).clone().add(new w(-10,0,2)),layer:!0,scale:.4,step:.1,count:G.isHandheld?5:10,spread:2,depthIntensity:.05,uColor:new w(1,.92,.72),uColorBody:new w(1,.92,.72),uColorCore:new w(1,.92,.72),params:{uColor:{value:new P(`#F0F4F8`)},uAlpha:{value:1}}}),boids:new ir({target:`.clarity`,targetStrength:1,fishType:`fusilier`,alignment:5,cohesion:5,curveData:new Ge([new w(-30,L.randFloat(0,10)-5,0).multiplyScalar(1),new w(-20,L.randFloat(0,10)-5,-5).multiplyScalar(1),new w(0,L.randFloat(0,10)-5,-10).multiplyScalar(1),new w(15,L.randFloat(0,10)-5,-8).multiplyScalar(1),new w(30,L.randFloat(0,10)-5,0).multiplyScalar(1),new w(20,L.randFloat(0,10)-5,8).multiplyScalar(1),new w(0,L.randFloat(0,10)-5,10).multiplyScalar(1),new w(-15,L.randFloat(0,10)-5,5).multiplyScalar(1)],!0)}),imageBuble:new wr({target:`[data-image-bubble-top]`,img:`image-bubble-1`}),imageBubleBottom:new wr({target:`[data-image-bubble-bottom]`,img:`image-bubble-2`,zOffset:.3}),godrays:new yr,world:new Sr({target:`.world-particles`}),boidsUnderstanding:new ir({target:`.world-particles`,speed:.8,curveData:new Ge([new w(-30,L.randFloat(0,10)-5,0),new w(-20,L.randFloat(0,10)-5,-5),new w(0,L.randFloat(0,10)-5,-20),new w(15,L.randFloat(0,10)-5,-8),new w(30,L.randFloat(0,10)-5,0),new w(20,L.randFloat(0,10)-5,8),new w(0,L.randFloat(0,10)-5,20),new w(-15,L.randFloat(0,10)-5,5)],!0)}),whale:new ur({target:`.safety`,type:`safety`}),whaleHeritage:new ur({target:`.heritage`,type:`heritage`}),jellyFish:new fr({target:`.call-to-action`,type:`heritage`}),bubbles:new Cr({type:`home`,scene:this}),dust:new _r({nClusters:50,turbulence:.45,flow:.2,bounds:{x:-50,y:-50,z:-50,w:100,h:100,d:100}})},this.cameraHelper=new Ye(this.camera),this.cameraHelper.visible=!1,this.add(this.cameraHelper),this.brownianMotion=new d,this.brownianMotion.positionAmplitude=this.options.cameraMotionPosAmplitude,this.brownianMotion.rotationAmplitude=this.options.cameraMotionRotAmplitude,this.brownianMotion.positionFrequency=this.options.cameraMotionPosFrequency,this.brownianMotion.rotationFrequency=this.options.cameraMotionRotFrequency,this._instanceDummy=new R,this._euler=new le,this._quaternion=new T,this.smoothMouse=[new N,new N],this.load(),e.on(`AssetsLoaded`,()=>{}),this.clock=new Ie,this.pointer={cursor:[0,0],velocity:[0,0]},this.fogUniforms={uFogTop:{value:new P(`#476876`).convertLinearToSRGB()},uFogBottom:{value:new P(`#0A2740`).convertLinearToSRGB()},uFogTopDeep:{value:new P(`#06102B`).convertLinearToSRGB()},uFogBottomDeep:{value:new P(`#020217`).convertLinearToSRGB()},uDepth:{value:0},uFogNear:{value:6},uFogFar:{value:60}},g(this.fogUniforms)}start(){this.setCameraTl(),setTimeout(()=>{this.cameraTL.progress(.4)},1e3),setTimeout(()=>{if(!this.componentsCreated)this.createEl(),G.WebGL.precompileScene(this);else for(let e in this.components)this.components[e].restart&&this.components[e].restart();this.componentsCreated=!0,this.isStart=!0,this.addEvents(),this.renderPass.enabled=!0},500)}createEl(){for(let e in this.components)try{this.components[e].build(this.objectData),this.components[e].animate&&this.components[e].animate(0),this.add(this.components[e])}catch(t){console.error(`${e} failed to build, leaving it out:`,t),delete this.components[e]}if(this.components.godrays&&(this.camera.add(this.components.godrays),this.components.godrays.position.set(0,0,-8)),this.clouds=[],this.children.forEach(e=>{e.isCloud&&this.clouds.push(e)}),this.planeIntersection=new _,this.components.mask&&this.components.mask.traverse(e=>{e.isMesh&&e.layers.set(ni)}),this.blackMaterial=new W({color:new P(`#000000`)}),this.components.ship&&setTimeout(()=>{this.components.ship.traverse(e=>{e.isMesh&&e.layers.enable(10)})},3e3),this.components.waterRibon&&this.components.waterRibon.traverse(e=>{e.isMesh&&e.layers.set(ri),e.isMesh&&(e.userData=`no-occlusion`)}),this.components.water&&this.components.water.traverse(e=>{e.isMesh&&(e.userData=`no-occlusion`)}),this.components.seagull&&this.components.seagull.traverse(e=>{e.isMesh&&(e.userData=`no-occlusion`)}),this.components.waterRibon&&this.components.waterRibon.traverse(e=>{e.isMesh&&(e.userData=`no-occlusion`)}),this.components.imageBuble&&this.components.imageBuble.traverse(e=>{e.isMesh&&(e.userData=`under-water`)}),this.components.godrays&&this.components.godrays.traverse(e=>{e.isMesh&&(e.userData=`under-water`)}),this.components.dust&&this.components.dust.traverse(e=>{e.isMesh&&(e.userData=`under-water`)}),this.components.boids&&this.components.boids.traverse(e=>{e.isMesh&&(e.userData=`under-water`)}),this.components.whale&&this.components.whale.traverse(e=>{e.isMesh&&(e.userData=`under-water`)}),this.components.whaleHeritage&&this.components.whaleHeritage.traverse(e=>{e.isMesh&&(e.userData=`under-water`)}),this.components.jellyFish&&this.components.jellyFish.traverse(e=>{e.isMesh&&(e.userData=`under-water`)}),this.components.bubbles&&this.components.bubbles.traverse(e=>{e.isMesh&&(e.userData=`under-water`)}),this.components.boidsUnderstanding&&this.components.boidsUnderstanding.traverse(e=>{e.isMesh&&(e.userData=`under-water`)}),this.components.world&&this.components.world.traverse(e=>{e.isMesh&&(e.userData=`under-water`)}),this.fogTl=x.timeline({scrollTrigger:{trigger:`.clarity`,start:`bottom top`,end:`bottom+=500 top`,scrub:!0}}),this.fogTl.to(G.Underwater.fogUniforms.uFogNear,{value:5},0),this.fogTl.to(G.Underwater.fogUniforms.uFogFar,{value:60},0),!G.isHandheld&&G.Underwater.maskRenderTarget){this.lensPos=new w(80,100,-1e3);let e=r({colorGain:new P(80,80,80),flareSize:0,glareSize:.1,starBurst:!1,flareShape:0,lensPosition:this.lensPos,secondaryGhosts:!0,starPoints:0,opacity:1});e.raycast=()=>{},this.lensFlareEffect=e,this.add(e)}}pause(){this.isStart=!1}stop(){this.isStart=!1,G.RAFCollection.remove(this.onRaf,0)}restart(){this.isStart=!0,this.renderPass.enabled=!0}renderMembrane(){let e=this.components.waterRibon;e&&(this.camera.layers.set(ri),G.WebGL.renderer.setRenderTarget(this.membraneRenderTarget),G.WebGL.renderer.setClearColor(0,0),G.WebGL.renderer.clear(),G.WebGL.renderer.render(e,this.camera),G.WebGL.renderer.setRenderTarget(null),this.camera.layers.set(ei))}renderMask(){let e=this.background,t=new Map;this.components.mask.visible=!0,this.camera.layers.set(ni),this.background=new P(16777215),this.skybox&&(this.skybox.visible=!1),G.WebGL.renderer.setRenderTarget(this.maskRenderTarget),G.WebGL.renderer.setClearColor(16777215,1),G.WebGL.renderer.clear(),G.WebGL.renderer.render(this,this.camera),G.WebGL.renderer.setRenderTarget(null),t.forEach((e,t)=>{t.material=e}),this.components.mask.visible=!1,this.skybox&&(this.skybox.visible=!0),this.camera.layers.set(ei),this.background=e}setBackground(){this.bgMaterial=new O({depthWrite:!1,depthTest:!1,uniforms:{uTop:{value:new P(`#87CEEB`)},uBottom:{value:new P(`#3A5E6B`)},uTopDeep:{value:new P(`#0c1587`)},uBottomDeep:{value:new P(`#0a1174`)},uDepth:{value:0},uResolution:G.WebGL.globalUniforms.uResolution},vertexShader:`
		varying vec2 vUv;
		void main() {
		   vUv = uv;
			vec2 pos = position.xy;
			pos.y -= 1.0; // décale vers le bas, couvre y: -2 à 0 en NDC
			// gl_Position = vec4(pos, 1.0, 1.0);
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		}
	`,fragmentShader:`
		uniform vec3 uTop;
		uniform vec3 uBottom;
		uniform vec3 uTopDeep;
		uniform vec3 uBottomDeep;
		uniform vec2 uResolution;
		uniform sampler2D uMask;
		uniform float uDepth;
		varying vec2 vUv;


		void main() {
	  		vec2 screenUv = gl_FragCoord.xy / uResolution;
			float alphaMask = texture2D(uMask, screenUv).r;
			vec3 shallow = mix(uBottom, uTop, vUv.y);
			vec3 deep    = mix(uBottomDeep, uTopDeep, vUv.y);
			gl_FragColor = vec4(mix(shallow, deep, uDepth), 1.0);

			gl_FragColor.a = alphaMask;
		}
	`}),this.bgMesh=new U(new F(2,2),this.bgMaterial),this.bgMesh.frustumCulled=!1,this.bgMesh.renderOrder=-1,this.bgMesh.position.y=-.5,this.add(this.bgMesh)}build(){this.depthRenderTarget=this.setDepthRT(),this.depthMaterial=new Ve({depthPacking:Se}),this.buildDebugEnvironment(),G.waterAmp=.3,G.waterSpeed=8e-4,this.composer=new jn(G.WebGL.renderer),this.composerPasses=new b(this.composer.passes),this.composer.setSize(G.window.w,G.window.h),this.buildPasses()}initCanon(){G.world=new C.World,G.world.gravity.set(0,-10,0)}initWind(){G.wind=new Wind(this.components.pillar.meshes.cloth)}buildPasses(){this.maskRenderTarget=new H(G.window.w*.5,G.window.h*.5,{minFilter:A,magFilter:A}),this.membraneRenderTarget=new H(G.window.w*G.WebGL.renderer.getPixelRatio()*.5,G.window.h*G.WebGL.renderer.getPixelRatio()*.5,{minFilter:A,magFilter:A,depthBuffer:!1}),this.bloomPass=new Lr(new N(G.window.w,G.window.h),0,0,1),G.isTouch&&(this.bloomPass.enabled=!1),this.bloomPass.tl=x.timeline({paused:!0}),this.bloomPass.tl.to(this.bloomPass,{threshold:.9,radius:.45,strength:.45}),this.renderPass=new Fr(this,this.camera),this.renderPass.name=this.name,this.renderPass.enabled=!0;let e={uniforms:{tDiffuse:{value:null},tCustom:{value:this.membraneRenderTarget.texture},uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform sampler2D tCustom;
		uniform float uTime;
		varying vec2 vUv;

		void main() {
		vec4 scene  = texture2D(tDiffuse, vUv);
		vec4 custom = texture2D(tCustom, vUv);

		// Détecte la présence de la membrane
		float brightness = dot(custom.rgb, vec3(0.299, 0.587, 0.114));
		float membraneMask = step(0.01, brightness);

		// Remap normal 0→1 vers -1→1 et décale les UVs
		vec2 normalOffset = (custom.xy * 2.0 - 1.0) * 0.2 * membraneMask;
		vec2 refractedUV = (vUv - 0.5) * 0.9 + 0.5 + normalOffset;

		// Sample la scène avec les UVs déformés
		vec4 sceneRefracted = texture2D(tDiffuse, refractedUV);

		// Applique la refraction uniquement là où la membrane est présente
		vec4 finalColor = mix(scene, sceneRefracted, membraneMask);

		gl_FragColor = finalColor;
		}
    `};this.myPass=new a(e),this.fluid=new $r(G.WebGL.renderer,this.pointer,{simRes:12,dyeRes:64,iterations:1,densityDissipation:.97,velocityDissipation:.98,pressureDissipation:.8,curlStrength:20,radius:.5}),this.fluidPass=new a({uniforms:{tDiffuse:{value:null},tFluid:{value:null},uDistortion:{value:4e-4},uMask:{value:this.maskRenderTarget.texture}},vertexShader:Jr,fragmentShader:qr}),G.isHandheld&&(this.fluidPass.enabled=!1),G.WebGL.composerPasses.add(this.renderPass,10),G.WebGL.composerPasses.add(this.myPass,11),G.WebGL.composerPasses.add(this.bloomPass,12),G.WebGL.composerPasses.add(this.fluidPass,13)}setCameraTl(){G.minAlt=Math.abs(G.cameraPoints[G.cameraPoints.length-1].y),G.maxAlt=Math.abs(G.cameraPoints[0].y);let e=new Ge(G.cameraPoints,!1,`catmullrom`,.5),t={t:0};this.camPos=new w,this.camPos=new w,this.cameraPos=new w(0,5,10),this.cameraLookAt=new w(0,0,0),this.cameraTL=x.timeline({paused:!0}),this.targetLookAt=new w;let n=new w,r=new w,i=new w,a=new w,o=G.isMobile?p(G.cameraPoints)+.05:.52,s=.7;this.deepPitchAmount=-.2,this.tSurface=o,this.cameraTL.to(t,{t:1,ease:`none`,onUpdate:()=>{e.getPointAt(t.t,this.camPos),G.progressAlt=t.t;let c=this.cameraPos.y;r.set(0,c-10,0),G.shipCenter?n.copy(G.shipCenter):n.copy(r),i.set(0,c-10,0);let l=this.smoothstep(o-.1,o,t.t);a.lerpVectors(n,r,l);let u=this.smoothstep(s-.1,s,t.t);a.lerpVectors(a,i,u),this.targetLookAt.copy(a),this.targetDeepPitch=this.deepPitchAmount*u}})}smoothstep(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}updateCamera(t){if(G.mainTl){this.cameraTL.progress(G.mainTl.progress()),G.isMobile,this.cameraLookAt.copy(this.targetLookAt);let n=G.isTouch?1:1-Math.exp(-21.4*t);this._vCam.copy(this.camPos),this._vCam.sub(this.cameraPos),this._vCam.multiplyScalar(n),this.cameraPos.add(this._vCam),G.altitudeVal=this.cameraPos.y;let r=this.smoothstep(1,-1,this.cameraPos.y);e.emit(`waterSurface`,r)}}setOcclusion(){this.ocludingObjects.forEach(e=>{let t=e.geometry;e.occclusionMesh=new U(t,new W({color:16777215})),e.occclusionMesh.layers.set(ti),this.add(e.occclusionMesh)})}buildDebugEnvironment(){this.add(new Be(15790320,1)),this.light=new xe(`#f4e88d`,0),this.light.position.copy(G.WebGL.globalUniforms.uLightPosition.value.clone().multiplyScalar(10)),this.light.target.position.set(0,0,0),this.add(this.light.target),this.add(this.light)}addEvents(){e.on(t.RESIZE,this.onResize),G.RAFCollection.add(this.onRaf,0)}setDepthRT(){let e=G.window.w,t=G.window.h;return new H(e,t,{minFilter:I,magFilter:I,format:E,depthBuffer:!0,stencilBuffer:!1,samples:0})}depthUpdate(){let e=this.background;this.background=null,this.lensFlareEffect.visible=!1,this.components.water&&(this.components.water.visible=!1);let t=new Map,n=new Map;this.traverse(e=>{e.isMesh&&(e.userData[`no-occlusion`]||e.userData===`no-occlusion`||e.userData===`under-water`?(t.set(e,e.visible),e.visible=!1):e.material&&=(n.set(e,e.material),this.depthMaterial))}),G.WebGL.renderer.setRenderTarget(this.depthRenderTarget),G.WebGL.renderer.clear(),G.WebGL.renderer.render(this,this.camera),G.WebGL.renderer.setRenderTarget(null),n.forEach((e,t)=>{t.material=e}),t.forEach((e,t)=>{t.visible=e}),this.components.water?.water?.material;let r=this.components.water?.fullMesh?.material;r?.uniforms?.uDepthTexture&&(r.uniforms.uDepthTexture.value=this.depthRenderTarget.texture),this.components.water&&(this.components.water.visible=!0),this.lensFlareEffect.visible=!0,this.background=e}getHorizontalPlaneProgress(e,t){let n=new w(0,t,0),r=new THREE.Vector3;if(e.getWorldDirection(r),Math.abs(r.y)>.001){let i=(t-e.position.y)/r.y;i>0&&(n.x=e.position.x+r.x*i,n.z=e.position.z+r.z*i)}return n.project(e),{screenY:n.y,progress:(n.y+1)/2,isAboveScreen:n.y>1,isBelowScreen:n.y<-1}}clamp(e,t,n){return Math.min(Math.max(e,t),n)}onRaf=e=>{if(!this.isStart)return;let t=this.clock.getDelta(),n=this.clock.getElapsedTime();this.cameraMove&&this.updateCamera(t),this.controls.enabled&&this.controls.update();let r=this.camera.position.y,i=this.cameraLookAt,a=this.cameraPos;this._cameraAngle=G.isTouch?G.pointer.glNormalized.x*.1:L.damp(this._cameraAngle,G.pointer.glNormalized.x*.1,3.08,t),this._cameraPitch=G.isTouch?-G.pointer.glNormalized.y*.02:L.damp(this._cameraPitch,-G.pointer.glNormalized.y*.02,3.08,t);let o=a.x-i.x,s=a.y-i.y,c=a.z-i.z,l=Math.sqrt(o*o+s*s+c*c),u=Math.atan2(o,c),d=Math.atan2(s,Math.sqrt(o*o+c*c));this.deepPitchOffset=G.isTouch?this.targetDeepPitch:L.damp(this.deepPitchOffset,this.targetDeepPitch,3.08,t);let f=this.smoothstep(0,-5,r),p=u+this._cameraAngle*f,m=L.clamp(d+this._cameraPitch*f+this.deepPitchOffset,-.35,.35);this.camera.position.x=i.x+Math.sin(p)*Math.cos(m)*l,this.camera.position.y=i.y+Math.sin(m)*l,this.camera.position.z=i.z+Math.cos(p)*Math.cos(m)*l,this.camera.lookAt(i.x,i.y,i.z),this.camera.updateMatrixWorld();let h=this.camera.position.y;for(let r in this.components){let i=this.components[r];i.tick&&i.tick(n),i.animate&&i.animate(e,t)}let g=this.clouds,_=g.length,v=r>=10;for(let e=0;e<_;e++)g[e].visible=v;let y=this.cameraPos.y,b=L.clamp((y-0)/(-G.minAlt-0),0,1);if(!this.skySuppressed&&this.camera.position.y<-20?this.skySuppressed=!0:this.skySuppressed&&this.camera.position.y>-10&&(this.skySuppressed=!1),!G.isHandheld){let e=this.pointer.cursor[0],t=this.pointer.cursor[1];this.pointer.cursor[0]=G.pointer.glNormalized.x*.5,this.pointer.cursor[1]=-G.pointer.glNormalized.y*.5,this.pointer.velocity[0]=this.pointer.cursor[0]-e,this.pointer.velocity[1]=this.pointer.cursor[1]-t;let n=this.clock.getDelta();this.fluid.update(n),this.fluidPass.uniforms.tFluid.value=this.fluid.texture,this.fluidPass.uniforms.uMask.value=this.maskRenderTarget.texture}if(this.fogUniforms.uDepth.value=b,this.skybox){let e=this.skybox.position;e.x=this.camera.position.x,e.y=this.camera.position.y,e.z=this.camera.position.z,this.skybox.material.uniforms.uDepth.value=b,this.skybox.material.uniforms.uSkySuppressed.value=+!!this.skySuppressed}this.bloomPass.tl.progress(this.smoothstep(-120,-140,r)),h>-8&&this.renderMembrane(),!G.isHandheld&&this.components.mask&&h>-8&&this.renderMask(),this.myPass&&(this.myPass.enabled=h>-8,this.myPass.uniforms.tCustom.value=this.membraneRenderTarget.texture)};smoothstep(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}onResize=()=>{if(!G.isMobile){let e=G.window.w,t=G.window.h;this.camera.aspect=G.window.w/G.window.h,this.camera.updateProjectionMatrix(),this.depthRenderTarget.setSize(e,t);let n=this.components.water?.water?.material;n?.uniforms?.uDepthTexture&&(n.uniforms.uDepthTexture.value=this.depthRenderTarget.texture);let r=this.components.water?.fullMesh?.material;r?.uniforms?.uDepthTexture&&(r.uniforms.uDepthTexture.value=this.depthRenderTarget.texture)}};load(){this.assets={textures:{},models:{}};let e=new Qe(G.WebGL.renderer);e.compileEquirectangularShader();let t,n;G.AssetLoader.add(new Promise((e,r)=>{t=e,n=r})),new Nn().load(`/app/themes/seasgeosciences/webglAssets/textures/test9l.hdr`,n=>{n.mapping=303;let r=e.fromEquirectangular(n).texture;e.dispose(),this.environment=r,this.background=r,this.backgroundIntensity=1;let i=new O({uniforms:{map:{value:n},exposure:{value:this.envExposure},rotation:{value:this.envRotation*Math.PI/180},uResolution:G.WebGL.globalUniforms.uResolution,uTop:this.fogUniforms.uFogTop,uBottom:this.fogUniforms.uFogBottom,uTopDeep:this.fogUniforms.uFogTopDeep,uBottomDeep:this.fogUniforms.uFogBottomDeep,uDepth:{value:0},uScale:{value:1},uCompress:{value:3},uHazeColor:{value:new P(`#b9614e`)},uHazeStrength:{value:0},uHazeWidth:{value:0},uIsReflexion:{value:0},uSkySuppressed:{value:0}},vertexShader:`
        varying vec3 vWorldDirection;
		varying vec3 vWorldPos;
        varying vec2 vUv;
        void main() {
            vec4 wp = modelMatrix * vec4(position, 1.0);
            vWorldDirection = normalize(wp.xyz);
			vWorldPos = wp.xyz;
            vUv = uv;
            gl_Position = projectionMatrix * viewMatrix * wp;
        }
    `,fragmentShader:`
        uniform sampler2D map;
        uniform float exposure;
        uniform float rotation;
        uniform vec2 uResolution;
        uniform sampler2D uMask;
        uniform vec3 uTop;
        uniform vec3 uBottom;
        uniform vec3 uTopDeep;
        uniform vec3 uBottomDeep;
        uniform float uDepth;
		uniform float uScale;
        varying vec3 vWorldDirection;
        varying vec2 vUv;
		uniform float uCompress;
		uniform vec3 uHazeColor;
		uniform float uHazeStrength;
		uniform float uHazeWidth;
		varying vec3 vWorldPos;
		uniform float uIsReflexion;
		uniform float uSkySuppressed;

     vec2 sampleUV(vec3 v) {
		float x = cos(rotation) * v.x - sin(rotation) * v.z;
		float z = sin(rotation) * v.x + cos(rotation) * v.z;
		float compress = mix(1.0, uCompress, smoothstep(0.0, 1.0, v.y));
		vec3 dir = normalize(vec3(x, v.y * compress, z));
		vec2 uv = vec2(atan(dir.z, dir.x), asin(dir.y));
		uv *= vec2(0.1591, 0.3183);
		uv += 0.5;
		
		// Scale autour du centre
		uv = (uv - 0.5) / uScale + 0.5;
		
		return uv;
	}
        void main() {
            vec2 screenUv = gl_FragCoord.xy / uResolution;
            float alphaMask = texture2D(uMask, screenUv).r;

            vec3 color;

        float screenY = gl_FragCoord.y / uResolution.y;
        vec3 shallow = mix(uBottom, uTop, screenY);
        vec3 deep    = mix(uBottomDeep, uTopDeep, screenY);
        vec3 underwaterColor = mix(shallow, deep, uDepth);

   if (vWorldPos.y < -0. && uIsReflexion < 0.5) {
        color = underwaterColor;
    } else {
        vec2 uv = sampleUV(vWorldDirection);
        vec3 skyColor = texture2D(map, uv).rgb;
        skyColor = 1.0 - exp(-skyColor * exposure);

		 // Haze à l'horizon — fonctionne des deux côtés (ciel + eau)
		float horizon = abs(vWorldDirection.y);
		float haze = smoothstep(uHazeWidth, 0.0, horizon) * uHazeStrength;
		skyColor = mix(skyColor, uHazeColor, haze);

		// Hard cutoff, not a fade — blending the photo sky with the flat
		// underwater gradient looks like a washed-out mess partway through,
		// worse than an instant switch. uSkySuppressed is computed in JS
		// with hysteresis (two thresholds, not one) so slow scrolling near
		// the boundary can't make it flicker back and forth.
		color = uSkySuppressed > 0.5 ? underwaterColor : skyColor;
    }

   

    gl_FragColor = vec4(color, 1.0);
        }
    `,side:1,depthWrite:!1,depthTest:!0});this.skybox=new U(new Te(1500,10,10),i),this.add(this.skybox),this.environmentRotation=new le(0,10*Math.PI/180,0),this.backgroundRotation=new le(0,this.envRotation*Math.PI/180,0),t()},void 0,n)}},ai=class extends z{constructor(){super(),this.vel=new N,this.load(),this.renderOrder=20,this.introProgressTemp=0,this.introProgress=0}build(){this.createSingle(),G.RAFCollection.add(this.onRaf,0),this.position.set(0,.3,0),e.on(t.RESIZE,this.onResize)}createSingle(){let e=this.token;this.BackFaceGlassTokenFbo=new H(G.window.w,G.window.h),this.envTokenFbo=new H(G.window.w,G.window.h),this.GlassMaterial=new yn({backfaceMap:this.BackFaceGlassTokenFbo.texture,envMap:this.envTokenFbo.texture,tMatCap:this.matCap,resolution:new N(G.window.w*G.WebGL.renderer.getPixelRatio(),G.window.h*G.WebGL.renderer.getPixelRatio())}),this.backfaceGlassMaterial=new xn({}),this.token=new U(e,this.backfaceGlassMaterial),this.token.rotation.set(Math.PI*.5,0,0),this.token.scale.set(5,5,5),this.add(this.token)}mouseInteraction(){let e=new U(new F,new W);e.scale.setScalar(50),e.position.set(0,0,0),e.updateMatrix(),e.updateMatrixWorld();let t=new oe;this.mouse=new N;let n=new N;window.addEventListener(`mousemove`,r=>{let i=r.clientX/window.innerWidth-.5,a=r.clientY/window.innerHeight-.5;n.x=i*2,n.y=-a*2,t.setFromCamera(n,G.activeScene.scene.camera);let o=t.intersectObject(e);if(o.length>0){let e=o[0];this.mouse.x=e.point.x,this.mouse.y=e.point.y}})}movementEase=()=>{this.introProgressTemp+=(this.introProgress-this.introProgressTemp)*.3,this.introLeave(this.introProgressTemp)};_reflectionFrame=0;onRaf=e=>{this.token.rotation.z=e*5e-4,!(G.isHandheld&&(this._reflectionFrame=(this._reflectionFrame+1)%2,this._reflectionFrame!==0))&&(this.token.visible=!1,G.WebGL.renderer.setRenderTarget(this.envTokenFbo),G.WebGL.renderer.render(G.WebGL.activeScene.scene,G.WebGL.activeScene.scene.camera),this.token.visible=!0,this.token.material=this.backfaceGlassMaterial,G.WebGL.renderer.setRenderTarget(this.BackFaceGlassTokenFbo),G.WebGL.renderer.render(G.WebGL.activeScene.scene,G.WebGL.activeScene.scene.camera),G.WebGL.renderer.setRenderTarget(null),this.token.material=this.GlassMaterial,this.token.visible=!0)};load(){G.AssetLoader.loadGltf(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/models/logoGlass.glb`).then(e=>{this.token=e.scene.children[0].geometry}),G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/glass.png`).then(e=>{this.matCap=e}),G.AssetLoader.loadTexture(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/textures/diamond1.png`).then(e=>{this.matCapToken=e})}onResize=()=>{this.BackFaceGlassTokenFbo.setSize(G.window.w*G.WebGL.renderer.getPixelRatio(),G.window.h*G.WebGL.renderer.getPixelRatio()),this.envTokenFbo.setSize(G.window.w*G.WebGL.renderer.getPixelRatio(),G.window.h*G.WebGL.renderer.getPixelRatio()),this.GlassMaterial.uniforms.resolution.value=[G.window.w*G.WebGL.renderer.getPixelRatio(),G.window.h*G.WebGL.renderer.getPixelRatio()]}},oi=class extends z{constructor(e){super(),this.globalUniforms={uColor:{value:new P(15990671)}},this.logo=new ai,this.load()}build(e){this.visible=!1,this._built=!0,this.meshes={},this.uCoverage={value:+(G.activeScene.name===`OnShore`)};let t=this.assets.models.seafloor,n=null;if(t.traverse(e=>{e.name===`middle`&&(n=e,n.visible=!1)}),n){let e=n.getWorldPosition(new w);t.position.sub(e)}this.add(t),this.seafloor=t,this.applyFogToScene(t),this.rotation.y=Math.PI*1.16,this.rotation.x=G.isMobile?Math.PI*.05:0,this.points=G.cameraPoints,this.scale.setScalar(G.isMobile?15:17),this.logo.build(),this.logo.scale.setScalar(.7),this.logo.position.y=.2,this.add(this.logo),this._revealRequested&&(this.visible=!0)}pageLoaded(){this.position.y=-G.lenis.limit*G.scrollCameraRatio-5+(G.isMobile?7:0),setTimeout(()=>{this._revealRequested=!0,this._built&&(this.visible=!0)},500)}restart(){this.target=document.querySelector(this.targetName),this.tl&&this.tl.kill(),this.tl=x.timeline({scrollTrigger:{trigger:this.target,start:`top center`,end:`bottom bottom`,scrub:!0}})}applyFogToScene(e){e.traverse(e=>{if(!e.isMesh||!e.material)return;e.material=e.material.clone();let t=e.material,n=e.name===`sol_01`;t.transparent=!0,t.onBeforeCompile=e=>{e.uniforms.uCoverage=this.uCoverage,e.uniforms.uFogTop=G.activeScene.scene.fogUniforms.uFogTop,e.uniforms.uFogBottom=G.activeScene.scene.fogUniforms.uFogBottom,e.uniforms.uFogTopDeep=G.activeScene.scene.fogUniforms.uFogTopDeep,e.uniforms.uFogBottomDeep=G.activeScene.scene.fogUniforms.uFogBottomDeep,e.uniforms.uDepth=G.activeScene.scene.fogUniforms.uDepth,e.uniforms.uFogNear=G.activeScene.scene.fogUniforms.uFogNear,e.uniforms.uFogFar=G.activeScene.scene.fogUniforms.uFogFar,e.uniforms.uResolution=G.WebGL.globalUniforms.uResolution,e.uniforms.uTime=G.WebGL.globalUniforms.uTime,e.uniforms.uSparkleScale={value:2e3},e.uniforms.uSparkleSpeed={value:6e-4},e.uniforms.uSparkleStrength={value:1},e.uniforms.uHasSparks={value:+!!n},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`
        uniform vec3 uFogTop;
        uniform vec3 uFogBottom;
        uniform vec3 uFogTopDeep;
        uniform vec3 uFogBottomDeep;
        uniform float uDepth;
        uniform float uFogNear;
        uniform float uFogFar;
        uniform float uCoverage;
        uniform vec2 uResolution;
        uniform float uHasSparks;
        uniform float uTime;
        uniform float uSparkleScale;
        uniform float uSparkleSpeed;
        uniform float uSparkleStrength;

        float hash2(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
       float sparkle(vec2 uv, float t) {
  vec2 cell = floor(uv);
  float h = hash2(cell);
  float phase = h * 6.2831 + t * (0.5 + h * 1.5);
  float flicker = pow(max(0.0, sin(phase)), 12.0); // ← remet le flicker
  vec2 localUv = fract(uv) - vec2(hash2(cell + 0.1), hash2(cell + 0.2));
  float dist = length(localUv);
  float grain = smoothstep(0.08, 0.0, dist);
  return grain * flicker; // ← multiplie par flicker
}

        void main() {
        `),e.fragmentShader=e.fragmentShader.slice(0,e.fragmentShader.lastIndexOf(`}`))+`
        float screenY = gl_FragCoord.y / uResolution.y;
        vec3 fogShallow = mix(uFogBottom, uFogTop, screenY);
        vec3 fogDeep    = mix(uFogBottomDeep, uFogTopDeep, screenY);
        vec3 fogColor   = mix(fogShallow, fogDeep, uDepth);
        float fragDist  = gl_FragCoord.z / gl_FragCoord.w;
        float fogFactor = smoothstep(uFogNear, uFogFar, fragDist);
      
		// gl_FragColor.rgb = pow(uFogTop, vec3(1.0 / 2.2));

		if(uHasSparks > 0.5){
		#ifdef USE_MAP
			vec2 sparkleUv = vMapUv * uSparkleScale;
		#else
			vec2 sparkleUv = gl_FragCoord.xy / 10.0;
		#endif
		float t = uTime * uSparkleSpeed;
		float sp  = sparkle(sparkleUv, t);
		float sp2 = sparkle(sparkleUv * 0.4 + vec2(3.7, 1.3), t * 0.7);
		float sparkleVal = sp * 0.8 + sp2 * 0.4;
		vec3 sparkleColor = mix(vec3(0.6, 0.75, 1.0), vec3(1.0, 1.0, 1.0), sp);
		gl_FragColor.rgb += sparkleColor * sparkleVal * uSparkleStrength * uHasSparks;
	  }

        // Même masque que Topology/bg : le seabed ne se révèle que là où
        // le motif s'est effacé, pour rester synchro avec le reste de la scène
        float limit = 1.0 - uCoverage;
        float cut = smoothstep(limit - 0.25, limit, screenY);
        gl_FragColor.a *= (1. - cut);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
}`,t.needsUpdate=!0}})}addLights(){let e=new Be(`#ffffff`,.4);this.add(e);let t=new xe(`#bbe4ff`,20);t.position.set(5,10,5),t.target.position.set(0,0,0),this.add(t),this.add(t.target)}animate(e){}load(){this.assets={models:{},textures:{}},G.AssetLoader.loadGltf(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/models/seafloor_no-drill.glb`).then(e=>{this.assets.models.seafloor=e.scene})}},si=class extends z{constructor(e={}){super(),this.domTarget=e.domTarget||null,this.isZoomed=!1,this.isRotating=!re(),this.rotateVal=this.isRotating?.0015:0,this.globalUniforms={uColor:{value:new P(`#e88b73`)},uTime:G.WebGL.globalUniforms.uTime,uOpacity:{value:0}},this.material=new O({uniforms:this.globalUniforms,transparent:!0,depthWrite:!1,depthTest:!0,blending:2,side:2,vertexShader:`
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec3 vViewDir;
		varying vec2 vUv;


        uniform float uTime;

        void main() {
		  vUv = uv;
          vec3 pos = position;

          pos += normal * (
            sin(position.y * 20.0 + 0.003) * 0.002
          );

          #ifdef USE_INSTANCING

          mat4 im = instanceMatrix;
          vec4 worldPos = modelMatrix * im * vec4(pos, 1.0);
          vec3 worldNormal = normalize(mat3(modelMatrix * im) * normal);

          #else

          vec4 worldPos = modelMatrix * vec4(pos, 1.0);
          vec3 worldNormal = normalize(mat3(modelMatrix) * normal);

          #endif

          vWorldPos = worldPos.xyz;

          vec4 mvPosition = viewMatrix * worldPos;

          vNormal = worldNormal;
          vViewDir = normalize(-mvPosition.xyz);

          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uTime;
		varying vec2 vUv;
		uniform float uOpacity;

        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec3 vViewDir;

        float random(vec2 st) {
          return fract(
            sin(dot(st.xy, vec2(12.9898, 78.233))) *
            43758.5453123
          );
        }

        void main() {

          float fresnel = pow(
            1.0 - abs(dot(vNormal, vViewDir)),
            2.5
          );

          vec3 distortedPos = vWorldPos + vNormal;

          distortedPos.x += sin(vWorldPos.y * 4.0 + uTime * 0.001) * 0.15;
          distortedPos.z += cos(vWorldPos.x * 3.0 + uTime * 0.0015) * 0.15;

          // scan horizontal — suit les lignes UV horizontales
			float scan = sin(
			vUv.y * 1000.0
			- uTime * 0.01 * 0.
			);
			scan = smoothstep(0.8, 1.0, scan);

			// scan vertical — suit les colonnes UV
			float scanV = sin(
			vUv.x * 1000.0
			- uTime * 0.001
			);
			scanV = smoothstep(0.8, 1.0, scanV);

          float scanCombined = max(scan, scanV * 0.6);

          float noise = random(gl_FragCoord.xy * 0.01 + uTime * 0.0001);

          float alpha =
            fresnel * 0.9 +
            scanCombined * .1 +
            noise * 0.05 + .15;

			alpha *= 0.6;
          vec3 color = uColor;
          color += fresnel * 0.4;

          gl_FragColor = vec4(min(color, uColor), alpha * uOpacity);
        }
      `}),this.load()}build(t){this.meshes={},this.rebuild(this.assets.models.ship3.mesh),this._centerMesh(),this._fitMeshToCanvas(),e.on(`item-clicked`,e=>{this.clickedItem(e)}),e.on(`canvas-enter`,e=>{this.isRotating=e}),e.on(`item-reverse`,this.resetView),e.on(`dragRotate`,e=>{this.rotateVal+=e*5e-4}),e.on(`model-change`,e=>{this.zoomTl?.kill(),this.isZoomed=!1;let t={value:this.scale.x};x.to(t,{value:this.scale.x*.5,duration:.4,ease:`power2.in`,onUpdate:()=>this.scale.setScalar(t.value)}),x.to(this.globalUniforms.uOpacity,{value:0,duration:.4,ease:`power2.in`,onComplete:async()=>{this.children.slice().forEach(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.dispose()):e.material.dispose()),this.remove(e)}),this.position.set(0,0,0),this.rotation.set(0,0,0),this.scale.setScalar(1),await this._loadModel(e),this.rebuild(this.assets.models[e].mesh),this._centerMesh(),this._fitMeshToCanvas(),x.to(this.globalUniforms.uOpacity,{value:1,duration:.5,ease:`power2.out`})}})}),e.on(`hide-models`,()=>{this.zoomTl?.kill(),this._hideTl?.kill(),this._hideTl=x.timeline(),this._hideTl.to(this.globalUniforms.uOpacity,{value:0,duration:.4,ease:`power2.in`},0),this._hideTl.to(this.scale,{x:this.scale.x*.5,y:this.scale.y*.5,z:this.scale.z*.5,duration:.4,ease:`power2.in`},0)}),e.on(`show-model`,()=>{this._initialState&&(this._hideTl?.kill(),this._hideTl=x.timeline(),this._hideTl.to(this.globalUniforms.uOpacity,{value:1,duration:.5,ease:`power2.out`},0),this._hideTl.to(this.scale,{x:this._initialState.zoom,y:this._initialState.zoom,z:this._initialState.zoom,duration:.5,ease:`power2.out`},0))})}clickedItem(t){if(!this.rtCamera||!t.item)return;let n=-Math.atan2(t.item.position.x,t.item.position.z),r=this._initialState.zoom*1.5,i=this.position.clone(),a=this.rotation.y,o=this.scale.x;this.rotation.y=n,this.scale.setScalar(r),this.position.set(0,0,i.z),this.updateMatrixWorld(!0);let s=new w;t.item.getWorldPosition(s);let c=new w(-s.x,-s.y,i.z),l=c.x,u=c.y;this.position.set(l,u,i.z),this.rotation.y=n%(Math.PI*2),this.updateMatrixWorld(!0);let d=this._projectMeshToClient(t.item);this.position.copy(i),this.rotation.y=a,this.scale.setScalar(o),this.updateMatrixWorld(!0);let f={px:this.position.x,py:this.position.y,rotY:this.rotation.y,zoom:this.scale.x};this.zoomTl?.kill(),this.zoomTl=x.timeline(),this.isZoomed=!0,this.zoomTl.to(f,{px:l,py:u,rotY:n%(Math.PI*2),zoom:r,duration:1.2,ease:`elastic.out(.5, 1)`,onUpdate:()=>{this.position.x=f.px,this.position.y=f.py,this.rotation.y=f.rotY,this.scale.setScalar(f.zoom)},onComplete:()=>e.emit(`item-zoom-settled`)},0),this.zoomTl.call(()=>e.emit(`item-zoom-complete`,d),null,.4)}_projectMeshToClient(e){if(!this.rtCamera||!this.rtRenderer)return null;let t=new w;e.getWorldPosition(t),t.project(this.rtCamera);let n=this.rtRenderer.domElement.getBoundingClientRect();return{x:n.left+(t.x+1)/2*n.width,y:n.top+(-t.y+1)/2*n.height}}resetView=()=>{if(!this._initialState)return;this.isZoomed=!1;let e=this._initialState,t={px:this.position.x,py:this.position.y,rotY:this.rotation.y,zoom:this.scale.x};this.zoomTl?.kill(),x.to(t,{px:e.px,py:e.py,rotY:e.rotY,zoom:e.zoom,duration:1.2,ease:`elastic.out(1, 1)`,onUpdate:()=>{this.position.x=t.px,this.position.y=t.py,this.rotation.y=t.rotY,this.scale.setScalar(t.zoom)}})};setCanvas(e){this.rtCanvas=e,this.rtRenderer=new Ze({canvas:e,alpha:!0,antialias:!0}),this.rtRenderer.setPixelRatio(G.WebGL.renderer.getPixelRatio()),this.rtRenderer.setClearColor(0,0),this.rtCamera=new ze(45,1,.1,2e3),this.rtCamera.position.set(0,0,8),this.rtCamera.lookAt(0,0,0),this.rtScene=new ve,this.rtScene.add(this.rtCamera),this.rtScene.add(this),this._resizeObserver=new ResizeObserver(()=>this._syncToDOM()),this._resizeObserver.observe(e.parentElement),this._syncToDOM(),this._fitMeshToCanvas()}_syncToDOM(){if(!this.rtCanvas||!this.rtRenderer)return;let e=this.rtCanvas.parentElement.getBoundingClientRect();!e.width||!e.height||(this.rtRenderer.setSize(e.width,e.height,!1),this.rtCamera.aspect=e.width/e.height,this.rtCamera.updateProjectionMatrix())}renderInDOM(){!this.rtRenderer||!this.rtScene||!this.rtCamera||(G.planViewerCamera=this.rtCamera,G.planViewerRenderer=this.rtRenderer,G.planViewerScene=this.rtScene,this._syncToDOM(),this.rtRenderer.render(this.rtScene,this.rtCamera),x.to(this.globalUniforms.uOpacity,{value:1}))}rebuild(e){let t=e.clone(!0);this._rebuildInstances(t),this._mergeStatic(t),this.setDomItems(t)}setDomItems(t){G.domItem=[],t.children.forEach((e,t)=>{e.item=new U(new Te(.1,20,20),new W({color:new P(`#FFFFFF`)})),e.item.position.copy(e.position),this.add(e.item),e.item.visible=!1,G.domItem[t]=e}),e.emit(`items-set`)}_rebuildInstances(e){this._instancedMeshes=[],e.updateMatrixWorld(!0);let t=[];e.traverse(e=>{e.isMesh&&t.push(e)});let n=new Map;for(let e of t){let t=`${e.geometry.uuid}__${e.material.uuid}`;n.has(t)||n.set(t,[]),n.get(t).push(e)}for(let[,e]of n){let t=e[0];if(e.length>=2){let n=new k(t.geometry,this.material,e.length);n.name=`instanced_${t.name}`,e.forEach((e,t)=>{n.setMatrixAt(t,e.matrixWorld),e.removeFromParent()}),n.instanceMatrix.needsUpdate=!0,this.add(n),this._instancedMeshes.push(n)}else{let e=new U(t.geometry,this.material);e.name=t.name,e.matrix.copy(t.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale),t.removeFromParent(),this.add(e)}}}_centerMesh(){let e=new Me().setFromObject(this),t=new w;e.getCenter(t),this.children.forEach(e=>{e.position.sub(t)})}_fitMeshToCanvas(){if(!this.rtCamera)return;let e=new Me().setFromObject(this),t=new w,n=new w;e.getCenter(t),e.getSize(n),this.position.sub(t);let r=this.rtCamera.fov*Math.PI/180,i=this.rtCamera.position.z,a=2*Math.tan(r/2)*i/n.y*.9;this.scale.setScalar(a*.8),this._initialState={px:this.position.x,py:this.position.y,rotY:this.rotation.y,zoom:this.scale.x}}_mergeStatic(e){this._mergedMeshes=[];let t=new Map;e.traverse(e=>{if(!e.isMesh)return;let n=e.material.uuid;t.has(n)||t.set(n,{material:e.material,meshes:[]}),t.get(n).meshes.push(e)});for(let[,{material:e,meshes:n}]of t){if(n.length<2){let e=new U(n[0].geometry.clone(),this.material);e.matrix.copy(n[0].matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale),this.add(e);continue}let t=n.map(e=>{let t=e.geometry.clone();return t.applyMatrix4(e.matrixWorld),t});try{let r=te(t,!1);if(!r)continue;let i=new U(r,this.material);i.name=`merged_${e.uuid.slice(0,6)}`,n.forEach(e=>e.removeFromParent()),this.add(i),this._mergedMeshes.push(i)}catch{}}}animate(e){G.planViewerVisible!==!1&&(this.globalUniforms.uTime.value=e,this.isRotating?this.rotateVal+=(.0015-this.rotateVal)*.1:this.rotateVal*=.95,!this.isZoomed&&(this.isRotating||Math.abs(this.rotateVal)>1e-5)&&(this.rotation.y+=this.rotateVal,this.rotation.y=this.rotation.y%(Math.PI*2)),this.rtRenderer&&this.rtRenderer.render(this.rtScene,this.rtCamera))}load(){this.assets={models:{seagator:{mesh:``},ship3:{mesh:``},nautilus:{mesh:``},CPT2:{mesh:``}},textures:{}},this._loadModel(`ship3`)}_loadModel(e){let t=this.assets.models[e];return!t||t.mesh?Promise.resolve():(t._loading||=G.AssetLoader.loadGltf(`${window.location.origin}/app/themes/seasgeosciences/webglAssets/./models/${e}.glb`).then(e=>{t.mesh=e.scene.clone(!0),t._loading=null}),t._loading)}},ci=class extends ve{constructor(){super(),this.name=`DEFAULT`,this.isStart=!0,this.options={controls:!0,mouseMoveAngle:new N(.05,.035),cameraMotionPosAmplitude:.026,cameraMotionRotAmplitude:.0132,cameraMotionPosFrequency:.21,cameraMotionRotFrequency:.59,cameraZTranslate:0,cameraYTranslate:0,cameraXTranslate:0,cameraZOffset:5,pointerNormalize1:.04,pointerNormalize2:.03},this._cameraAngle=0,this._cameraPitch=0,this._orbitRadius=null,this._orbitBaseAngle=null,this._orbitBasePitch=null,this._lastCamY=null,this.ocludingObjects=[],this.camera=new ze(45,G.window.w/G.window.h,4,1500),this.camera.position.z=-33,this.camera.position.y=0,this.add(this.camera),this.backgroundIntensity=1,this.environmentIntensity=1,this.envExposure=.9,this.envRotation=129,this.cameraHelper=new Ye(this.camera),this.cameraHelper.visible=!1,this.add(this.cameraHelper),this.transitionProgress=0,G.transitionVal=1,this.devCamera=new ze(45,G.window.w/G.window.h,1,1e4),this.devCamera.position.z=10,this.devCamera.position.y=0,this.add(this.devCamera),this.controls=new Vn(this.devCamera,G.WebGL.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enabled=this.options.controls,this.controls.enableDamping=!0,this.fogUniforms={uFogTop:{value:new P(`#0B2741`).convertLinearToSRGB()},uFogBottom:{value:new P(`#0A2740`).convertLinearToSRGB()},uFogTopDeep:{value:new P(`#06102B`).convertLinearToSRGB()},uFogBottomDeep:{value:new P(`#020217`).convertLinearToSRGB()},uDepth:{value:0},uFogNear:{value:6},uFogFar:{value:60}},g(this.fogUniforms),this.components={seaBed:new oi},document.querySelector(`.plan-viewer`)&&(this.components.planViewer=new si({domTarget:document.querySelector(`.assets-viewer .canvasGrid canvas`)})),this.cameraHelper=new Ye(this.camera),this.cameraHelper.visible=!1,this.add(this.cameraHelper),this.brownianMotion=new d,this.brownianMotion.positionAmplitude=this.options.cameraMotionPosAmplitude,this.brownianMotion.rotationAmplitude=this.options.cameraMotionRotAmplitude,this.brownianMotion.positionFrequency=this.options.cameraMotionPosFrequency,this.brownianMotion.rotationFrequency=this.options.cameraMotionRotFrequency,this._instanceDummy=new R,this._euler=new le,this._quaternion=new T,this.smoothMouse=[new N,new N],this.camTarget=new w(0,0,33);let t=this.camera.fov*Math.PI/180;G.scrollCameraRatio=2*Math.abs(this.camTarget.z)*Math.tan(t/2)/G.window.h,this.load(),e.on(`AssetsLoaded`,()=>{}),setTimeout(()=>{this.camTl&&this.camTl.kill(),this.camTl=x.timeline({scrollTrigger:{target:document.body,start:`top top`,scrub:.01,end:`bottom bottom`}}),this.components.seaBed?this.components.seaBed.pageLoaded():setTimeout(()=>{this.components.seaBed.pageLoaded()},2e3),this.camTl.to(this.camTarget,{ease:`none`,y:-G.lenis.limit*G.scrollCameraRatio}),G.minAlt=-G.lenis.limit*G.scrollCameraRatio},500),this.sections=Array.from(document.querySelectorAll(`#main section`)),this.main=document.querySelector(`#main`),this.main.size=this.main.getBoundingClientRect(),this.classes=[`WebGL-fusiliers`,`WebGL-globe`,`WebGL-fish2`,`WebGL-whale—side`,`WebGL-center`,`WebGL-jellyfish`],this.mainClasses=[`WebGL-wave`,`WebGL-bubbles`,`WebGL-godrays`],this.sections.forEach((e,t)=>{let n=e.getBoundingClientRect(),r=n.top+window.scrollY+n.height*.5-window.innerHeight*.5,i=-G.scrollCameraRatio*r-10;e.setAttribute(`data-altitude`,Math.round(i)),this.setComponent(e)}),this.main.classList.forEach(e=>{if(this.mainClasses.includes(e))switch(e){case`WebGL-wave`:this.components.wave=new _r({nClusters:50,turbulence:.45,flow:.2,bounds:{x:-50,y:-50,z:-50,w:100,h:100,d:100}});break;case`WebGL-bubbles`:this.components.bubbles=new Cr({type:`activeScene.scene`,scene:this});break;case`WebGL-godrays`:this.components.godrays=new yr,this.camera.add(this.components.godrays),this.components.godrays.position.set(0,0,-8);break}}),this.clock=new Ie,this.pointer={cursor:[0,0],velocity:[0,0]}}setComponent(e){let t=e.classList,n=s(5);e.classList.add(`webgl-${n}`),t.contains(`WebGL-fusiliers`)?this.components[n]=new ir({target:`.webgl-${n}`,speed:.8,fishType:`fusilier`,curveData:new Ge([new w(-30,L.randFloat(0,10)-5+15,0),new w(-20,L.randFloat(0,10)-5+15,-5),new w(0,L.randFloat(0,10)-5+15,-20),new w(15,L.randFloat(0,10)-5+15,-8),new w(30,L.randFloat(0,10)-5+15,0),new w(20,L.randFloat(0,10)-5+15,8),new w(0,L.randFloat(0,10)-5+15,20),new w(-15,L.randFloat(0,10)-5+15,5)],!0)}):t.contains(`WebGL-globe`)?this.components[n]=new Sr({target:`.webgl-${n}`}):t.contains(`WebGL-fish2`)?this.components[n]=new ir({target:`.webgl-${n}`,speed:.8,curveData:new Ge([new w(-30,L.randFloat(0,10)-5,0),new w(-20,L.randFloat(0,10)-5,-5),new w(0,L.randFloat(0,10)-5,-20),new w(15,L.randFloat(0,10)-5,-8),new w(30,L.randFloat(0,10)-5,0),new w(20,L.randFloat(0,10)-5,8),new w(0,L.randFloat(0,10)-5,20),new w(-15,L.randFloat(0,10)-5,5)],!0)}):t.contains(`WebGL-whale—side`)?this.components[n]=new ur({target:`.webgl-${n}`,type:`safety`}):t.contains(`WebGL-center`)?this.components[n]=new ur({target:`.webgl-${n}`,type:`heritage`}):t.contains(`WebGL-jellyfish`)&&(this.components[n]=new fr({target:`.webgl-${n}`,type:`heritage`}))}start(){if(this.isStart=!0,this.renderPass.enabled=!0,this.savePass.enabled=!0,this.fluidPass.enabled=!G.isHandheld,!this.componentsCreated){for(let e in this.components)try{this.components[e].build(this.objectData),this.components[e].animate&&this.components[e].animate(0),this.add(this.components[e])}catch(t){console.error(`${e} failed to build, leaving it out:`,t),delete this.components[e]}this.componentsCreated=!0,G.WebGL.precompileScene(this)}this.components.godrays&&(this.camera.add(this.components.godrays),this.components.godrays.position.set(0,0,-8)),e.on(`dom-loaded`,this.setCanvas)}setCanvas=()=>{this.components.planViewer&&(this.components.planViewer.setCanvas(document.querySelector(`.plan-viewer canvas`)),this.components.planViewer.renderInDOM())};pause(){this.isStart=!1,this.renderPass.enabled=!1,this.savePass.enabled=!1,this.bloomPass.enabled=!G.isHandheld,this.fluidPass.enabled=!1}stop(){this.isStart=!1,this.renderPass.enabled=!1,this.savePass.enabled=!1,this.bloomPass.enabled=!G.isHandheld,this.fluidPass.enabled=!1,G.RAFCollection.remove(this.onRaf,0)}restart(){this.isStart=!0,this.renderPass.enabled=!0,this.savePass.enabled=!0,this.bloomPass.enabled=!G.isHandheld,this.fluidPass.enabled=!G.isHandheld}build(){this.buildDebugEnvironment(),this.setBackground(),this.composer=new jn(G.WebGL.renderer),this.composerPasses=new b(this.composer.passes),this.composer.setSize(G.window.w,G.window.h),this.buildPasses(),this.addEvents(),this.blackMaterial=new W({color:new P(`#000000`)})}buildPasses(){this.maskRenderTarget=new H(G.window.w,G.window.h,{minFilter:A,magFilter:A,depthBuffer:!1}),this.membraneRenderTarget=new H(G.window.w*G.WebGL.renderer.getPixelRatio(),G.window.h*G.WebGL.renderer.getPixelRatio(),{minFilter:A,magFilter:A,depthBuffer:!1}),this.bloomPass=new Lr(new N(G.window.w,G.window.h),.45,.45,.99),this.bloomPass.enabled=!G.isHandheld,this.renderPass=new Fr(this,this.camera),this.renderPass.name=this.name,this.renderPass.enabled=!0,this.savePass=new f(new H(G.window.w*G.WebGL.renderer.getPixelRatio(),G.window.h*G.WebGL.renderer.getPixelRatio(),{minFilter:A,magFilter:A,depthBuffer:!1})),this.fluid=new $r(G.WebGL.renderer,this.pointer,{simRes:12,dyeRes:64,iterations:1,densityDissipation:.97,velocityDissipation:.98,pressureDissipation:.8,curlStrength:20,radius:.5}),this.fluidPass=new a({uniforms:{tDiffuse:{value:null},tFluid:{value:null},uDistortion:{value:.001}},vertexShader:Jr,fragmentShader:qr}),this.fluidPass.enabled=!G.isHandheld,G.WebGL.composerPasses.add(this.renderPass,0),G.WebGL.composerPasses.add(this.bloomPass,2),G.WebGL.composerPasses.add(this.fluidPass,3)}buildDebugEnvironment(){this.add(new Be(15790320,6)),this.light=new tt(16777215,20,50),new at(this.light),this.grid=new ae(200,50),this.grid.position.y=-10,this.grid.material.opacity=.5,this.grid.material.transparent=!0}addEvents(){e.on(t.RESIZE,this.onResize),G.RAFCollection.add(this.onRaf,10)}clamp(e,t,n){return Math.min(Math.max(e,t),n)}onRaf=e=>{if(!this.isStart)return;this.controls.enabled&&this.controls.update();let t=this.clock.getDelta(),n=this.clock.getElapsedTime(),r=1-Math.exp(-41.6*t);this._vCam=this._vCam||new w,this._vCam.copy(this.camTarget),this._vCam.sub(this.camera.position),this._vCam.multiplyScalar(r),this.camera.position.add(this._vCam),this.camera.updateMatrixWorld();for(let r in this.components)this.components[r].tick&&this.components[r].tick(n),this.components[r].animate&&this.components[r].animate(e,t);-G.minAlt;let i=L.clamp(this.camera.position.y/(-G.lenis.limit*G.scrollCameraRatio),0,1);if(!G.isHandheld){let e=this.pointer.cursor[0],n=this.pointer.cursor[1];this.pointer.cursor[0]=G.pointer.glNormalized.x*.5,this.pointer.cursor[1]=-G.pointer.glNormalized.y*.5,this.pointer.velocity[0]=this.pointer.cursor[0]-e,this.pointer.velocity[1]=this.pointer.cursor[1]-n,this.fluid.update(t),this.fluidPass.uniforms.tFluid.value=this.fluid.texture}this.fogUniforms.uDepth.value=i,this.bgMaterial.uniforms.uDepth.value=i,this.lightHelper?.update(),this.skybox&&(this.skybox.position.x=this.camera.position.x,this.skybox.position.z=this.camera.position.z,this.skybox.position.y=this.camera.position.y,this.skybox.material.uniforms.uDepth.value=i)};smoothstep(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}setBackground(){this.bgMaterial=new O({depthWrite:!1,depthTest:!1,uniforms:{uTop:this.fogUniforms.uFogTop,uBottom:this.fogUniforms.uFogBottom,uTopDeep:this.fogUniforms.uFogTopDeep,uBottomDeep:this.fogUniforms.uFogBottomDeep,uDepth:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 1.0, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uTop;
      uniform vec3 uBottom;
      uniform vec3 uTopDeep;
      uniform vec3 uBottomDeep;
      uniform float uDepth;
      varying vec2 vUv;

      void main() {
        vec3 shallow = mix(uBottom, uTop, vUv.y);
        vec3 deep    = mix(uBottomDeep, uTopDeep, vUv.y);
        gl_FragColor = vec4(mix(shallow, deep, uDepth), 1.0);
      }
    `}),this.bgMesh=new U(new F(2,2),this.bgMaterial),this.bgMesh.frustumCulled=!1,this.bgMesh.renderOrder=-1,this.add(this.bgMesh)}onResize=()=>{this.camera.aspect=G.window.w/G.window.h,this.camera.updateProjectionMatrix()};load(){this.assets={textures:{},models:{}},new Qe(G.WebGL.renderer).compileEquirectangularShader()}},li=`
precision highp float;
varying vec2 vUv;
void main(){
  vUv = uv;
  // MVP complète : sans modelViewMatrix, les transforms (position.z, scale…)
  // étaient ignorées et le quad dégénérait en plein écran par accident (w≈0)
  gl_Position = vec4(position, 1.0);
}`,ui=`
precision highp float;
varying vec2 vUv;
uniform vec2  uRes;
uniform float uTime;
uniform float uScale;
uniform float uLevels;
uniform vec3 uBackground;
uniform vec3 uLineColor;
uniform float uScroll;
uniform float uCoverage;

vec3 mod289_3(vec3 x){ return x - floor(x*(1.0/289.0))*289.0; }
vec4 mod289_4(vec4 x){ return x - floor(x*(1.0/289.0))*289.0; }
vec4 permute4(vec4 x){ return mod289_4(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314*r; }

/* Simplex 3-D avec gradient analytique.
   Retourne vec4(noise, dn/dx, dn/dy, dn/dz). */
vec4 snoiseGrad(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g  = step(x0.yzx, x0.xyz);
  vec3 l  = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289_3(i);
  vec4 p = permute4(permute4(permute4(
      i.z + vec4(0.0,i1.z,i2.z,1.0))
    + i.y + vec4(0.0,i1.y,i2.y,1.0))
    + i.x + vec4(0.0,i1.x,i2.x,1.0));
  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j  = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x  = x_ * ns.x + ns.yyyy;
  vec4 y  = y_ * ns.x + ns.yyyy;
  vec4 h  = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m  = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
  vec4 m2 = m*m;
  vec4 m4 = m2*m2;
  vec4 pdotx = vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3));
  vec4 temp = m2*m*pdotx;
  vec3 grad = -8.0*(temp.x*x0 + temp.y*x1 + temp.z*x2 + temp.w*x3);
  grad += m4.x*p0 + m4.y*p1 + m4.z*p2 + m4.w*p3;
  grad *= 42.0;
  float noise = 42.0 * dot(m4, pdotx);
  return vec4(noise, grad);
}

void main(){
  vec2 aspect = vec2(uRes.x / uRes.y, 1.0);
  vec2 uv = (vUv - 0.5) * aspect * uScale;

  uv.y -= uScroll / (uRes.y / uScale);

  vec4 ng   = snoiseGrad(vec3(uv, uTime * 0.00001));
  float n01 = ng.x * 0.5 + 0.5;

  float gradMag  = length(ng.yz) * 0.5;
  float pixelSize = uScale / uRes.x;
  float fw = gradMag * pixelSize * uLevels * 4.;
  fw = clamp(fw, 0.004, 0.12);

  float band = n01 * uLevels;
  float f    = fract(band);
  float line = 1.0 - smoothstep(0.0, fw, f) + smoothstep(1.0 - fw, 1.0, f);

  float isMajor   = 1.0 - step(0.01, fract(floor(band) / 3.0));
  float lineAlpha = mix(0.35, 1.0, isMajor) * line;

  vec3 bgColor   =  pow(uBackground, vec3(1.0 / 2.2));
  vec3 lineColor = uLineColor;

  // Coverage vertical : 1 = plein écran, 0.5 = moitié haute — le motif
  // s'efface par le bas avec une frange douce de 0.15
  float limit = 1.0 - uCoverage;
  float cut = smoothstep(limit - 0.25, limit, vUv.y);

  gl_FragColor   = vec4(mix(bgColor, lineColor, lineAlpha * 0.1), lineAlpha * cut);
}`,di=class extends z{constructor(){super(),this.globalUniforms={uColor:{value:new P(15990671)}},this.load(),this.position.z=-1}build(e){let t=new O({vertexShader:li,fragmentShader:ui,transparent:!0,uniforms:{uRes:G.WebGL.globalUniforms.uResolution,uTime:G.WebGL.globalUniforms.uTime,uScale:{value:G.isMobile?3.3:1.3},uLevels:{value:15},uBackground:{value:new P(`#391F1D`)},uLineColor:{value:new P(`#ffffff`).convertSRGBToLinear()},uScroll:{value:0},uCoverage:{value:1}}});this.mesh=new U(new F(2,2),t),G.activeScene.scene.camera.add(this.mesh)}animate(){this.mesh.material.uniforms.uScroll.value=G.lenis?.scroll,this._fitToView()}_fitToView(){let e=G.activeScene?.scene?.camera;if(!e||!this.mesh)return;let t=this.position.z+this.mesh.position.z,n=Math.abs(e.position.z-t);if(!n)return;let r=e.fov*Math.PI/180,i=Math.tan(r/2)*n,a=i*e.aspect;this.mesh.scale.set(a,i,1)}load(){this.assets={models:{},textures:{}}}};x.registerPlugin(ot);var fi=class extends ve{constructor(){super(),this.name=`onshore`,this.isStart=!0,this.options={controls:!0,mouseMoveAngle:new N(.05,.035),cameraMotionPosAmplitude:.026,cameraMotionRotAmplitude:.0132,cameraMotionPosFrequency:.21,cameraMotionRotFrequency:.59,cameraZTranslate:0,cameraYTranslate:0,cameraXTranslate:0,cameraZOffset:5,pointerNormalize1:.04,pointerNormalize2:.03},this._cameraAngle=0,this._cameraPitch=0,this._orbitRadius=null,this._orbitBaseAngle=null,this._orbitBasePitch=null,this._lastCamY=null,this.ocludingObjects=[],this.camera=new ze(45,G.window.w/G.window.h,4,1500),this.camera.position.z=10,this.camera.position.y=2,this.add(this.camera),this.backgroundIntensity=1,this.environmentIntensity=1,this.envExposure=.9,this.envRotation=129,this.cameraHelper=new Ye(this.camera),this.cameraHelper.visible=!1,this.add(this.cameraHelper),this.transitionProgress=0,G.transitionVal=1,this.devCamera=new ze(45,G.window.w/G.window.h,1,1e4),this.devCamera.position.z=10,this.devCamera.position.y=0,this.add(this.devCamera),this.controls=new Vn(this.devCamera,G.WebGL.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enabled=this.options.controls,this.controls.enableDamping=!0,this.components={seaBed:new oi,topology:new di},this.logoTarget=document.querySelector(`.site-footer__layout`),this.logoTarget.size=this.logoTarget.getBoundingClientRect(),this.logoTarget.initScroll=G.lenis?.scroll||0,this.cameraHelper=new Ye(this.camera),this.cameraHelper.visible=!1,this.add(this.cameraHelper),this.brownianMotion=new d,this.brownianMotion.positionAmplitude=this.options.cameraMotionPosAmplitude,this.brownianMotion.rotationAmplitude=this.options.cameraMotionRotAmplitude,this.brownianMotion.positionFrequency=this.options.cameraMotionPosFrequency,this.brownianMotion.rotationFrequency=this.options.cameraMotionRotFrequency,this._instanceDummy=new R,this._euler=new le,this._quaternion=new T,this.smoothMouse=[new N,new N];let t=this.camera.fov*Math.PI/180;G.scrollCameraRatio=66*Math.tan(t/2)/G.window.h,this.load(),e.on(`AssetsLoaded`,()=>{}),this.clock=new Ie,this.pointer={cursor:[0,0],velocity:[0,0]},this.fogUniforms={uFogTop:{value:new P(`#0B2741`).convertLinearToSRGB()},uFogBottom:{value:new P(`#0A2740`).convertLinearToSRGB()},uFogTopDeep:{value:new P(`#06102B`).convertLinearToSRGB()},uFogBottomDeep:{value:new P(`#020217`).convertLinearToSRGB()},uDepth:{value:0},uFogNear:{value:10},uFogFar:{value:60}},g(this.fogUniforms)}start(){if(this.isStart=!0,this.renderPass.enabled=!0,this.savePass.enabled=!0,!this.componentsCreated){for(let e in this.components)try{this.components[e].build(this.objectData),this.components[e].animate&&this.components[e].animate(0),this.add(this.components[e])}catch(t){console.error(`${e} failed to build, leaving it out:`,t),delete this.components[e]}this.componentsCreated=!0,G.WebGL.precompileScene(this)}this.bgMaterial&&this.components.topology?.mesh&&(this.bgMaterial.uniforms.uCoverage=this.components.topology.mesh.material.uniforms.uCoverage),this.components.seaBed&&this.components.topology?.mesh&&(this.components.seaBed.uCoverage=this.components.topology.mesh.material.uniforms.uCoverage),this.camTarget=new w(0,0,33),this.camTl&&this.camTl.kill(),this.camTl=x.timeline({scrollTrigger:{target:document.body,start:`top top`,scrub:!0,end:`bottom bottom`}}),this.camTl.to(this.camTarget,{ease:`none`,y:-G.lenis.limit*G.scrollCameraRatio,duration:1},0),this.camTl.to(this.components.topology.mesh.material.uniforms.uCoverage,{ease:`none`,value:-.1,duration:.15},.85),document.readyState===`complete`?ot.refresh():window.addEventListener(`load`,()=>ot.refresh(),{once:!0})}pause(){this.isStart=!1,this.renderPass.enabled=!1,this.savePass.enabled=!1}stop(){this.isStart=!1,this.renderPass.enabled=!1,this.savePass.enabled=!1}restart(){this.isStart=!0,this.renderPass.enabled=!0,this.savePass.enabled=!0}build(){this.buildDebugEnvironment(),this.setBackground(),this.composer=new jn(G.WebGL.renderer),this.composerPasses=new b(this.composer.passes),this.composer.setSize(G.window.w,G.window.h),this.buildPasses(),this.addEvents(),this.blackMaterial=new W({color:new P(`#000000`)}),this.components.seaBed?this.components.seaBed.pageLoaded():setTimeout(()=>{this.components.seaBed.pageLoaded()},2e3)}buildPasses(){this.renderPass=new Fr(this,this.camera),this.renderPass.name=this.name,this.renderPass.enabled=!0,this.renderPass.renderToScreen=!0,this.savePass=new f(new H(G.window.w*G.WebGL.renderer.getPixelRatio(),G.window.h*G.WebGL.renderer.getPixelRatio(),{minFilter:A,magFilter:A,depthBuffer:!1})),G.WebGL.composerPasses.add(this.renderPass,1)}updateCamera(){this.cameraPath&&(this.appearing||(this.cameraPath.getPointAt(this.options.scrollPosition,this.cameraPosition),this.cameraTargetPath.getPointAt(this.options.cameraTargetPathProgress,this.cameraLookAt)),this.camera.position.copy(this.cameraPosition),this.camera.getFocalLength()!==this.options.cameraFocalLength&&this.camera.setFocalLength(this.options.cameraFocalLength),this.camera.translateZ(this.options.cameraZTranslate),this.camera.translateY(this.options.cameraYTranslate),this.camera.translateX(this.options.cameraXTranslate),!(G.mq.touch.matches||this.controls.enabled)&&(this.camera.updateMatrix(),this.camera.matrix.multiply(this.brownianMotion.matrix),this.camera.matrix.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.translateZ(-this.options.cameraZOffset),this._euler.set(this.smoothMouse[0].y*this.options.mouseMoveAngle.y,-this.smoothMouse[0].x*this.options.mouseMoveAngle.x,0),this._quaternion.setFromEuler(this._euler),this.camera.quaternion.multiply(this._quaternion),this._euler.set(0,0,(this.smoothMouse[0].x-this.smoothMouse[1].x)*-.05),this._quaternion.setFromEuler(this._euler),this.camera.translateZ(this.options.cameraZOffset),this.camera.updateMatrixWorld()))}buildDebugEnvironment(){this.add(new Be(15790320,6)),this.light=new tt(16777215,50,50),this.light.decay=.5,new at(this.light),this.grid=new ae(200,50),this.grid.position.y=-10,this.grid.material.opacity=.5,this.grid.material.transparent=!0}addEvents(){e.on(t.RESIZE,this.onResize),G.RAFCollection.add(this.onRaf,0)}clamp(e,t,n){return Math.min(Math.max(e,t),n)}onRaf=e=>{if(!this.isStart||!this.camTarget)return;let t=new w;t.copy(this.camTarget),t.sub(this.camera.position),t.multiplyScalar(.5),this.camera.position.add(t),-G.minAlt;let n=L.clamp(this.camera.position.y/(-G.lenis.limit*G.scrollCameraRatio),0,1);this.fogUniforms.uDepth.value=n,this.bgMaterial.uniforms.uDepth.value=n,this.controls.enabled&&this.controls.update();for(let t in this.components)this.components[t].tick&&this.components[t].tick(this.clock.getElapsedTime()),this.components[t].animate&&this.components[t].animate(e);this.components.logo&&(m(this.logoTarget.size,this.components.logo.token,this.logoTarget.initScroll,.9),this.components.logo.token.position.y+=2,this.components.logo.token.scale.setScalar(15))};smoothstep(e,t,n){let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}setBackground(){this.bgMaterial=new O({depthWrite:!1,depthTest:!0,transparent:!0,uniforms:{uTop:this.fogUniforms.uFogTop,uBottom:this.fogUniforms.uFogBottom,uTopDeep:this.fogUniforms.uFogTopDeep,uBottomDeep:this.fogUniforms.uFogBottomDeep,uDepth:this.fogUniforms.uDepth,uCoverage:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 1.0, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uTop;
      uniform vec3 uBottom;
      uniform vec3 uTopDeep;
      uniform vec3 uBottomDeep;
      uniform float uDepth;
      uniform float uCoverage;
      varying vec2 vUv;

      void main() {
        vec3 shallow = mix(uBottom, uTop, vUv.y);
        vec3 deep    = mix(uBottomDeep, uTopDeep, vUv.y);

        // Masque complémentaire de Topology (même limit, même frange) :
        // le bg n'est visible que là où le motif s'est effacé
        float limit = 1.0 - uCoverage;
        float cut = smoothstep(limit - 0.25, limit, vUv.y);

        // pow(1/2.2) : même encodage que le bg de DefaultOcean — les
        // fogUniforms sont linéaires et le renderer ne ré-encode pas
        gl_FragColor = vec4(mix(shallow, deep, uDepth), 1.0 - cut);
      }
    `}),this.bgMesh=new U(new F(2,2),this.bgMaterial),this.bgMesh.frustumCulled=!1,this.bgMesh.renderOrder=-1,this.add(this.bgMesh)}onResize=()=>{this.camera.aspect=G.window.w/G.window.h,this.camera.updateProjectionMatrix()};load(){this.assets={textures:{},models:{}},new Qe(G.WebGL.renderer).compileEquirectangularShader()}},pi=`1.3.23`;function mi(e,t,n){return Math.max(e,Math.min(t,n))}function hi(e,t,n){return(1-n)*e+n*t}function gi(e,t,n,r){return hi(e,t,1-Math.exp(-n*r))}function _i(e,t){return(e%t+t)%t}var vi=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=mi(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=gi(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function yi(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var bi=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=yi(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},xi=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},Si=100/6,Ci={passive:!1};function wi(e,t){return e===1?Si:e===2?t:1}var Ti=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new xi;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,Ci),this.element.addEventListener(`touchstart`,this.onTouchStart,Ci),this.element.addEventListener(`touchmove`,this.onTouchMove,Ci),this.element.addEventListener(`touchend`,this.onTouchEnd,Ci)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,Ci),this.element.removeEventListener(`touchstart`,this.onTouchStart,Ci),this.element.removeEventListener(`touchmove`,this.onTouchMove,Ci),this.element.removeEventListener(`touchend`,this.onTouchEnd,Ci)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=wi(r,this.window.width),a=wi(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Ei=e=>Math.min(1,1.001-2**(-10*e)),Di=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new vi;emitter=new xi;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:ee=!1,allowNestedScroll:te=!1,__experimental__naiveDimensions:ne=!1,naiveDimensions:x=ne,stopInertiaOnNavigate:re=!1}={}){window.lenisVersion=pi,window.lenis||(window.lenis={}),window.lenis.version=pi,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!e||e===document.documentElement)&&(e=window),typeof s==`number`&&typeof c!=`function`?c=Ei:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:ee,allowNestedScroll:te,naiveDimensions:x,stopInertiaOnNavigate:re},this.dimensions=new bi(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new Ti(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=`#${e.hash.split(`#`)[1]}`;this.scrollTo(n,t);return}}if(this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)){this.reset();return}};onPointerDown=e=>{e.button===1&&this.reset()};onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty(`overflow`);return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty(`overflow`,`clip`);return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if((this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof HTMLElement&&f?.nodeType&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=mi(0,f,this.limit);if(f===this.targetScroll){c?.(this),l?.(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=Ei:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,ee;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,ee=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,ee=u;else return!1;return!ee&&(g>=_||g<=0)?!0:(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?_i(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}};x.registerPlugin(ot);var Oi=new Di({lerp:.09,syncTouch:!0,prevent:e=>e.closest(`[data-lenis-prevent]`)!==null,allowNestedScroll:!0});Oi.on(`scroll`,ot.update),x.ticker.add(e=>{Oi.raf(e*1e3)}),x.ticker.lagSmoothing(0),Oi.stop(),G.lenis=Oi;var ki={points:[[-98.62869262695312,50.23256301879883,-256.118408203125],[-95.1008529663086,49.286827087402344,-246.5249786376953],[-91.6583251953125,48.43226623535156,-237.57467651367188],[-88.30166625976562,47.64659881591797,-229.13401794433594],[-85.03144073486328,46.90754699707031,-221.06951904296875],[-81.84821319580078,46.192832946777344,-213.24769592285156],[-78.75254821777344,45.48017501831055,-205.53506469726562],[-75.74500274658203,44.74729537963867,-197.79815673828125],[-72.82614135742188,43.9719123840332,-189.9034881591797],[-69.99652862548828,43.131752014160156,-181.7175750732422],[-67.25672149658203,42.20452880859375,-173.10693359375],[-64.60728454589844,41.167964935302734,-163.93807983398438],[-62.04878616333008,39.99978256225586,-154.07754516601562],[-61.171485900878906,39.55521774291992,-150.3859405517578],[-60.403690338134766,39.139137268066406,-146.91220092773438],[-59.73566436767578,38.74175262451172,-143.611572265625],[-59.15766525268555,38.353294372558594,-140.43931579589844],[-58.659950256347656,37.9639778137207,-137.3506622314453],[-58.23278045654297,37.56401824951172,-134.3008575439453],[-57.866416931152344,37.14364242553711,-131.24513244628906],[-57.55111312866211,36.69306182861328,-128.1387481689453],[-57.277137756347656,36.2025032043457,-124.93695068359375],[-57.03474807739258,35.66217803955078,-121.594970703125],[-56.81420135498047,35.062313079833984,-118.06806182861328],[-56.60575485229492,34.393123626708984,-114.31146240234375],[-56.35832977294922,33.37728500366211,-108.93805694580078],[-56.20188903808594,32.356754302978516,-103.91445922851562],[-56.13075637817383,31.330860137939453,-99.17119598388672],[-56.139259338378906,30.298934936523438,-94.63880157470703],[-56.22172164916992,29.260303497314453,-90.24779510498047],[-56.372474670410156,28.21430206298828,-85.9287109375],[-56.58584213256836,27.160259246826172,-81.61207580566406],[-56.85615158081055,26.097503662109375,-77.2284164428711],[-57.177730560302734,25.025365829467773,-72.70825958251953],[-57.54490661621094,23.943178176879883,-67.98213958740234],[-57.95200729370117,22.850269317626953,-62.98057174682617],[-58.39336013793945,21.745969772338867,-57.634098052978516],[-58.701332092285156,21.150020599365234,-54.61690902709961],[-59.09457778930664,20.60875701904297,-51.7943115234375],[-59.55009841918945,20.112451553344727,-49.12701416015625],[-60.04488754272461,19.65137481689453,-46.57571792602539],[-60.555946350097656,19.215801239013672,-44.10112380981445],[-61.060264587402344,18.796001434326172,-41.6639404296875],[-61.53485107421875,18.38224983215332,-39.22486877441406],[-61.956695556640625,17.964818954467773,-36.74461364746094],[-62.302799224853516,17.533981323242188,-34.183876037597656],[-62.55015563964844,17.08000946044922,-31.50336265563965],[-62.67576217651367,16.593177795410156,-28.663774490356445],[-62.656620025634766,16.06375503540039,-25.625816345214844],[-62.57606887817383,15.488341331481934,-22.25734519958496],[-62.52761459350586,14.968422889709473,-19.046178817749023],[-62.47477722167969,14.491218566894531,-15.97083854675293],[-62.381072998046875,14.0439453125,-13.009846687316895],[-62.210018157958984,13.613819122314453,-10.1417236328125],[-61.92512893676758,13.188058853149414,-7.344989776611328],[-61.48992156982422,12.753880500793457,-4.598166465759277],[-60.86791229248047,12.298501968383789,-1.879774808883667],[-60.022621154785156,11.809139251708984,.8316648006439209],[-58.917564392089844,11.27301025390625,3.557631254196167],[-57.516258239746094,10.67733383178711,6.319603443145752],[-55.78221893310547,10.00932502746582,9.139063835144043],[-53.42659378051758,9.31728458404541,12.30522346496582],[-50.897743225097656,8.866937637329102,15.08302116394043],[-48.21820831298828,8.583884239196777,17.52033233642578],[-45.4105339050293,8.39372730255127,19.6650333404541],[-42.49726104736328,8.222067832946777,21.564998626708984],[-39.50093078613281,7.994507789611816,23.268102645874023],[-36.444087982177734,7.636649131774902,24.822223663330078],[-33.349273681640625,7.074092864990234,26.275236129760742],[-30.239030838012695,6.2324419021606445,27.67501449584961],[-27.135902404785156,5.037297248840332,29.069435119628906],[-24.06243133544922,3.4142608642578125,30.50637435913086],[-21.041162490844727,1.2889366149902344,32.03370666503906],[-18.995698928833008,-.4602985382080078,33.072349548339844],[-17.152849197387695,-2.253835678100586,33.91520690917969],[-15.494035720825195,-4.101617813110352,34.58675003051758],[-14.000683784484863,-6.013586044311523,35.111454010009766],[-12.654218673706055,-7.99968147277832,35.513790130615234],[-11.436064720153809,-10.069847106933594,35.8182258605957],[-10.327646255493164,-12.234024047851562,36.04923629760742],[-9.310388565063477,-14.502155303955078,36.231292724609375],[-8.365716934204102,-16.88418197631836,36.38887023925781],[-7.475055694580078,-19.390045166015625,36.54643630981445],[-6.619828701019287,-22.02968978881836,36.72846603393555],[-5.781459808349609,-24.81305694580078,36.959434509277344],[-4.701516628265381,-28.955669403076172,37.29716873168945],[-3.9291434288024902,-32.882240295410156,37.53306198120117],[-3.4219746589660645,-36.639225006103516,37.68130111694336],[-3.1376442909240723,-40.27307891845703,37.756072998046875],[-3.0337867736816406,-43.830265045166016,37.77156448364258],[-3.0680363178253174,-47.35723876953125,37.74196243286133],[-3.1980271339416504,-50.90045928955078,37.681453704833984],[-3.3813934326171875,-54.506385803222656,37.604225158691406],[-3.5757696628570557,-58.22148132324219,37.52446365356445],[-3.7387900352478027,-62.092201232910156,37.45635223388672],[-3.8280889987945557,-66.16500091552734,37.41408157348633],[-3.8013007640838623,-70.48634338378906,37.411834716796875],[-3.631404399871826,-79.20880889892578,37.45038986206055],[-3.5172359943389893,-87.38148498535156,37.47614669799805],[-3.450911283493042,-95.11437225341797,37.49092102050781],[-3.4245455265045166,-102.51747131347656,37.49652862548828],[-3.4302546977996826,-109.70077514648438,37.494781494140625],[-3.4601542949676514,-116.77427673339844,37.48749542236328],[-3.506359815597534,-123.84797668457031,37.47648239135742],[-3.5609869956970215,-131.0318603515625,37.463558197021484],[-3.6161515712738037,-138.43592834472656,37.45053482055664],[-3.663969039916992,-146.17018127441406,37.43922805786133],[-3.6965548992156982,-154.34461975097656,37.43144989013672],[-3.7060248851776123,-163.0692138671875,37.429012298583984],[-3.7013168334960938,-173.37796020507812,37.42985153198242],[-3.698188066482544,-183.03627014160156,37.43040466308594],[-3.6964144706726074,-192.1742401123047,37.43071365356445],[-3.6957714557647705,-200.9219512939453,37.430816650390625],[-3.6960349082946777,-209.4095001220703,37.430755615234375],[-3.6969804763793945,-217.7669677734375,37.430572509765625],[-3.6983838081359863,-226.1244354248047,37.43030548095703],[-3.7000207901000977,-234.6119842529297,37.429996490478516],[-3.701666831970215,-243.35971069335938,37.4296875],[-3.7030978202819824,-252.4976806640625,37.42941665649414],[-3.704089641571045,-262.156005859375,37.429229736328125],[-3.7044177055358887,-272.4647216796875,37.429161071777344],[-3.7043588161468506,-281.66644287109375,37.42916488647461],[-3.7043204307556152,-290.2875671386719,37.429168701171875],[-3.7042994499206543,-298.4442443847656,37.42917251586914],[-3.7042930126190186,-306.2525634765625,37.42917251586914],[-3.704298257827759,-313.8286437988281,37.42917251586914],[-3.704312324523926,-321.2886047363281,37.42917251586914],[-3.7043323516845703,-328.7485656738281,37.42917251586914],[-3.704355239868164,-336.32464599609375,37.429168701171875],[-3.704378128051758,-344.1329650878906,37.42916488647461],[-3.7043981552124023,-352.2896423339844,37.42916488647461],[-3.7044122219085693,-360.9107666015625,37.42916488647461],[-3.7044177055358887,-370.11248779296875,37.429161071777344]]};new class{constructor(t){this.dom={canvas:h(`canvas#gl`)},this.isOnshore=t.classList.contains(`wp-onshore`)||t.classList.contains(`wp-geo-consulting`),this.setup(),G.RAFCollection=new ne,G.AssetLoader=new i,G.WebGL=this,G.cameraPoints=G.isMobile?v(ki.points.map(([e,t,n])=>new w(e,t,n)).slice(0,-10),G.aboveWaterScrollSplit):ki.points.map(([e,t,n])=>new w(e,t,n)),this.activeScene={},this.sceneName=``,t.classList.contains(`wp-home`)?(this.activeScene={name:`Underwater`,scene:new ii},G.Underwater=this.activeScene.scene):t.classList.contains(`wp-onshore`)||t.classList.contains(`wp-geo-consulting`)?(this.activeScene={name:`OnShore`,scene:new fi},G.OnShore=this.activeScene.scene,G.lenis.start()):(this.activeScene={name:`DefaultOcean`,scene:new ci},G.DefaultOcean=this.activeScene.scene,G.lenis.start()),G.activeScene=this.activeScene,window.store=G,G.AssetLoader.load().then(async()=>{e.emit(`App:start`),this.activeScene.scene.build(),await this.compileInto(this.activeScene.scene,this.activeScene.scene.camera,this.composer.readBuffer),this.activeScene.scene.start(),x.from(this.dom.canvas,{opacity:0,delay:.2,duration:1}),new URLSearchParams(window.location.search).has(`gui`)}),this.composer=new jn(this.renderer),this.composerPasses=new b(this.composer.passes),e.on(`App:start`,this.start),e.on(`start-scene`,()=>{this.activeScene.scene.start()})}setup(){this.renderer=new Ze({alpha:this.isOnshore,antialias:!1,canvas:this.dom.canvas,powerPreference:`high-performance`,stencil:!1}),this.isOnshore&&this.renderer.setClearColor(0,0),G.isHandheld&&G.window.w<768?this.renderer.setPixelRatio(1.5):this.renderer.setPixelRatio(G.window.dpr>=2?2:G.window.dpr),G.isTouch&&(G.window.h=ee()),this.renderer.setSize(G.window.w,G.window.h),this.renderer.toneMapping=1,this.renderer.outputColorSpace=Oe,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!1,this.renderer.shadowMap.type=2,this.renderer.toneMappingExposure=1,this.clock=new Ie,this.globalUniforms={uDelta:{value:0},uTime:{value:0},uResolution:{value:new N(G.window.w*this.renderer.getPixelRatio(),G.window.h*this.renderer.getPixelRatio())},uLightColor:{value:new P(16711680)},uLightPosition:{value:new w(1,2,-10)},uSpecularColor:{value:new P(16711680)},uDiffuseColor:{value:new P(16711680)},uColor:{value:new P(16711680)}},On()}async precompileScene(e){await this.compileInto(e,e.camera,this.composer.readBuffer),await this.uploadSceneTextures(e),await this.precompileComputeShaders(e),this.pendingWarmUp=e}drawEverythingOnce(e){let t=[];e.traverse(e=>{t.push([e,e.visible,e.frustumCulled]),e.visible=!0,e.frustumCulled=!1});try{this.composer.render()}finally{for(let[e,n,r]of t)e.visible=n,e.frustumCulled=r}}compileInto(e,t,n){let r=this.renderer.getRenderTarget();this.renderer.setRenderTarget(n);let i=this.renderer.compileAsync(e,t);return this.renderer.setRenderTarget(r),i}uploadSceneTextures(e){let t=new Set,n=e=>{e?.isTexture&&!e.isRenderTargetTexture&&!e.isVideoTexture&&t.add(e)};e.traverse(e=>{let t=Array.isArray(e.material)?e.material:[e.material];for(let e of t)e&&(Object.values(e).forEach(n),e.uniforms&&Object.values(e.uniforms).forEach(e=>n(e?.value)))});let r=[...t];return new Promise(e=>{let t=()=>{let n=r.shift();if(!n)return e();this.renderer.initTexture(n),requestAnimationFrame(t)};requestAnimationFrame(t)})}async precompileComputeShaders(e){let t=[];e.traverse(e=>{e.gpuCompute?.variables&&t.push(e.gpuCompute)}),this.computeQuad??=new F(2,2),this.computeCamera??=new Fe;for(let e of t){let t=e.variables.map(e=>e.material).filter(Boolean),n=new ve;t.forEach(e=>n.add(new U(this.computeQuad,e)));let r=e.createRenderTarget();await this.compileInto(n,this.computeCamera,r),t.forEach(t=>e.doRenderTarget(t,r)),r.dispose()}}start=()=>{this.addEvents(),this.buildPasses()};addEvents(){e.on(t.RESIZE,this.onResize),G.RAFCollection.add(this.onRaf,10),e.on(`sceneChange`,e=>{switch(this.toScene=``,e){case`Assets`:this.toScene=G.DefaultOcean;break;case`OnShore`:this.toScene=G.OnShore;break;default:this.toScene=G.Underwater;break}this.SceneTransition.transition(this.activeScene.scene,this.toScene)})}buildPasses(){t.enableRAF(!1),t.enableResize(),t.enableMousemove()}onRaf=e=>{if(this.clockDelta=this.clock.getDelta(),this.globalUniforms.uDelta.value=this.clockDelta>.016?.016:this.clockDelta,this.globalUniforms.uTime.value=e,this.pendingWarmUp){let e=this.pendingWarmUp;this.pendingWarmUp=null,this.drawEverythingOnce(e)}this.composer.render(),G.mainTl,G.WebGL.renderer.getContext()};onResize=()=>{this.renderer.setSize(G.window.w,G.window.h),this.composer.setSize(G.window.w,G.window.h),this.globalUniforms.uResolution.value=new N(G.window.w*this.renderer.getPixelRatio(),G.window.h*this.renderer.getPixelRatio())};generateTexture(e,t={},n=!1){let r=t.maxSize??(G.isHandheld?256:1/0);if(n)e?.isTexture||(e=new he(e),e.needsUpdate=!0);else{let t=null;if(e instanceof HTMLImageElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?t=e:e?.isTexture&&e.image&&(t=e.image),t){let n=t.width||t.naturalWidth,i=t.height||t.naturalHeight,a=Math.max(n,i);if(a>r){let o=r/a,s=Math.max(1,Math.round(n*o)),c=Math.max(1,Math.round(i*o)),l=document.createElement(`canvas`);l.width=s,l.height=c;let u=l.getContext(`2d`);u.imageSmoothingEnabled=!0,u.imageSmoothingQuality=`high`,u.drawImage(t,0,0,s,c),e?.isTexture?(e.image=l,e.needsUpdate=!0):(e=new he(l),e.needsUpdate=!0),typeof ImageBitmap<`u`&&t instanceof ImageBitmap&&t.close?.()}else e?.isTexture||(e=new he(t),e.needsUpdate=!0)}}return e.minFilter=t.minFilter||(n?1006:1008),e.magFilter=t.magFilter||1006,e.wrapS=e.wrapT=t.wrapping||1001,e.flipY=t.flipY===void 0?!0:t.flipY,this.renderer.initTexture(e),e}}(document.body),document.querySelector(`[data-homepage]`)&&S(()=>import(`./homepage-fgiueTVp.js`),__vite__mapDeps([23,13,10,9,1,2])),document.querySelector(`[data-engineering]`)&&S(()=>import(`./engineering-BvlKyEGS.js`),__vite__mapDeps([24,1,14,2,18,10,9,3])),document.querySelector(`[data-heritage]`)&&S(()=>import(`./heritage-aXhU_nSD.js`),__vite__mapDeps([25,1,10])),new URLSearchParams(location.search).has(`benchmark`)&&S(()=>import(`./benchmark-CKk7ao2U.js`),__vite__mapDeps([26,13,10,9]));export{ki as t};