let tmapLoadingPromise = null;

export function loadTmapScript(appKey) {
  if (window.Tmapv2) {
    return Promise.resolve(window.Tmapv2);
  }

  if (tmapLoadingPromise) {
    return tmapLoadingPromise;
  }

  tmapLoadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://apis.openapi.sk.com/tmap/jsv2?version=1&appKey=${appKey}`;
    script.async = true;
    script.onload = () => {
      if (window.Tmapv2) {
        resolve(window.Tmapv2);
      } else {
        reject(new Error('Tmap SDK 로드 실패'));
      }
    };
    script.onerror = () => reject(new Error('Tmap 스크립트 로드 실패'));
    document.head.appendChild(script);
  });

  return tmapLoadingPromise;
}