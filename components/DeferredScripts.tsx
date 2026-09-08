"use client";
import { useEffect, useState } from "react";

export default function DeferredScripts() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadScripts = () => {
      if (loaded) return;
      setLoaded(true);

      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("touchstart", loadScripts);

      // 1. Google Analytics (gtag.js)
      const gaScript = document.createElement("script");
      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-7NMTE5LZNR";
      gaScript.async = true;
      document.head.appendChild(gaScript);

      const gaInline = document.createElement("script");
      gaInline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-7NMTE5LZNR');
      `;
      document.head.appendChild(gaInline);

      // 2. Google Tag Manager
      const gtmScript = document.createElement("script");
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PNHZ8DPL');
      `;
      document.head.appendChild(gtmScript);

      // 3. TikTok Pixel
      const tikTokScript = document.createElement("script");
      tikTokScript.innerHTML = `
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){ttq[t]=function(){t=="instance"?ttq.instances.push(e):ttq.push([t].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq.methods[i],ttq.instances[i]);ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._scale="",ttq._i[e]._loading=!1,ttq._i[e].instanceId=e,ttq.load=e,ttq.async=!0,ttq.src=i;var n=d.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;var o=d.resolve?d.resolve("script")[0]:d.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o)};
          ttq.load('D4U48FJC77U9L5PJ11G0');
          ttq.page();
        }(window, document, 'ttq');
      `;
      document.head.appendChild(tikTokScript);
    };

    const timer = setTimeout(loadScripts, 4000);

    window.addEventListener("scroll", loadScripts, { once: true });
    window.addEventListener("mousemove", loadScripts, { once: true });
    window.addEventListener("touchstart", loadScripts, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
    };
  }, [loaded]);

  return null;
}