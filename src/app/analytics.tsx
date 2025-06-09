"use client";

import Script from "next/script";
import { analyticsConfig, shouldLoadGTM } from "@/lib/analytics";

// Substitua pelo seu ID do Google Tag Manager quando estiver pronto
// const GTM_ID = 'GTM-XXXXXXXXX'

export default function Analytics() {
  // Só carrega o GTM se estiver configurado
  if (!shouldLoadGTM()) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${analyticsConfig.gtmId}');
        `}
      </Script>
    </>
  );
}

// Componente para o noscript do GTM (usado no body)
export function GTMNoscript() {
  // Só renderiza se o GTM estiver configurado
  if (!shouldLoadGTM()) {
    return null;
  }

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${analyticsConfig.gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
