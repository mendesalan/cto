"use client";

import Script from "next/script";
import { analyticsConfig, shouldLoadGTM } from "@/lib/analytics";

// Substitua pelo seu ID do Google Tag Manager quando estiver pronto
// const GTM_ID = 'GTM-XXXXXXXXX'

export default function Analytics() {
  return (
    <>
      {/* Google Tag Manager */}
      {shouldLoadGTM() && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${analyticsConfig.gtmId}');
          `}
        </Script>
      )}

      {/* Google Analytics 4 - Alternativa: descomente se quiser GA4 direto */}
      {/* 
      {shouldLoadGA() && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${analyticsConfig.gaId}');
            `}
          </Script>
        </>
      )}
      */}
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
