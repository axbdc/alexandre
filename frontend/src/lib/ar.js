// AR / 3D viewer launcher.
// - iOS  → AR Quick Look via <a rel="ar" href="...usdz"><img/></a>
// - Android → Google Scene Viewer (intent://) with GLB
// - Desktop → Scene Viewer web 3D fallback in a new tab
//
// Pass { glb, usdz, title, image } — provides usdz are recommended for iOS,
// glb for Android/desktop. Either one alone still works (with a sensible
// fallback).

const isIOS = () => {
    if (typeof navigator === "undefined") return false;
    const ua = navigator.userAgent || "";
    const iPad =
        navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    return /iPad|iPhone|iPod/.test(ua) || iPad;
};

const isAndroid = () => {
    if (typeof navigator === "undefined") return false;
    return /Android/i.test(navigator.userAgent || "");
};

const absoluteUrl = (url) => {
    try {
        return new URL(url, window.location.href).href;
    } catch (_) {
        return url;
    }
};

const openIOSQuickLook = (usdz, image) => {
    const a = document.createElement("a");
    a.rel = "ar";
    a.href = usdz;
    // Quick Look requires an <img> child to recognize the rel="ar" link.
    const img = document.createElement("img");
    img.src = image || "";
    img.alt = "";
    img.style.cssText = "width:1px;height:1px;opacity:0;position:absolute;";
    a.appendChild(img);
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        if (a.parentNode) a.parentNode.removeChild(a);
    }, 800);
};

const openAndroidSceneViewer = (glb, title, fallbackUrl) => {
    const file = encodeURIComponent(absoluteUrl(glb));
    const fb = encodeURIComponent(fallbackUrl || window.location.href);
    const t = encodeURIComponent(title || "3D Model");
    const intent = `intent://arvr.google.com/scene-viewer/1.0?file=${file}&mode=ar_preferred&title=${t}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${fb};end;`;
    window.location.href = intent;
};

const openWebFallback = (glb) => {
    const file = encodeURIComponent(absoluteUrl(glb));
    const url = `https://arvr.google.com/scene-viewer/1.0?file=${file}`;
    window.open(url, "_blank", "noopener,noreferrer");
};

export const launchAR = ({ glb, usdz, title, image } = {}) => {
    if (isIOS()) {
        if (usdz) return openIOSQuickLook(usdz, image);
        if (glb) return openWebFallback(glb);
        return;
    }
    if (isAndroid()) {
        if (glb) return openAndroidSceneViewer(glb, title, window.location.href);
        return;
    }
    if (glb) return openWebFallback(glb);
};

export const hasARAssets = (project) =>
    !!(project && (project.model_glb || project.model_usdz));
