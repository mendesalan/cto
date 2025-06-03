"use client";

// import Script from 'next/script'

// Substitua pelo seu ID do Google Analytics quando estiver pronto
// const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export default function Analytics() {
  // Descomente as linhas abaixo quando tiver o Google Analytics configurado
  return null;

  /* Descomente quando configurar o Google Analytics:
  import Script from 'next/script'
  
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
  */
}
