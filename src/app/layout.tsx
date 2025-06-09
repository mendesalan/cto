import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics, { GTMNoscript } from "./analytics";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "meuCTOdigital.com | Seu Tech de Confiança",
  description:
    "Arquitetura de software e consultoria técnica para infoprodutores e negócios digitais. CTO on demand, diagnóstico técnico e planejamento de apps escaláveis.",
  keywords: [
    "CTO on demand",
    "arquitetura de software",
    "consultoria técnica",
    "infoprodutores",
    "negócios digitais",
    "planejamento de apps",
    "sistemas escaláveis",
    "Alan Mendes",
    "Solutions Architect",
    "desenvolvimento de software",
  ],
  authors: [{ name: "Alan Mendes" }],
  creator: "Alan Mendes",
  publisher: "meuCTOdigital.com",
  metadataBase: new URL("https://meuctodigital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "meuCTOdigital.com | Seu Tech de Confiança",
    description:
      "Arquitetura de software e consultoria técnica para infoprodutores e negócios digitais. CTO on demand, diagnóstico técnico e planejamento de apps escaláveis.",
    url: "https://meuctodigital.com",
    siteName: "meuCTOdigital.com",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/aboutme.jpeg",
        width: 1200,
        height: 630,
        alt: "Alan Mendes - Solutions Architect e CTO on Demand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "meuCTOdigital.com | Seu Tech de Confiança",
    description:
      "Arquitetura de software e consultoria técnica para infoprodutores e negócios digitais.",
    images: ["/aboutme.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Adicione aqui seus códigos de verificação quando tiver:
    // google: 'seu-codigo-google-search-console',
    // yandex: 'seu-codigo-yandex',
    // bing: 'seu-codigo-bing',
  },
  category: "technology",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Analytics />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#059669" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="meuCTOdigital" />

        {/* Dados Estruturados JSON-LD - Empresa */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "meuCTOdigital.com",
              description:
                "Arquitetura de software e consultoria técnica para infoprodutores e negócios digitais",
              url: "https://meuctodigital.com",
              logo: "https://meuctodigital.com/favicon.svg",
              image: "https://meuctodigital.com/aboutme.jpeg",
              telephone: "+55-11-99999-9999", // Substitua pelo seu telefone real
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressLocality: "Brasil",
              },
              founder: {
                "@type": "Person",
                name: "Alan Mendes",
                jobTitle: "Solutions Architect",
                image: "https://meuctodigital.com/aboutme.jpeg",
                sameAs: [
                  "https://www.linkedin.com/in/mendesalan/",
                  "https://github.com/mendesalan",
                ],
              },
              areaServed: "BR",
              serviceType: [
                "CTO on Demand",
                "Diagnóstico Técnico",
                "Consultoria de Construção",
                "Arquitetura de Software",
              ],
              priceRange: "$$",
            }),
          }}
        />

        {/* Dados Estruturados JSON-LD - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "O que me diferencia de uma agência de desenvolvimento?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não sou uma agência, sou um profissional experiente que atua como seu parceiro técnico. Não tenho interesse em vender mais horas ou ferramentas desnecessárias - meu foco é trazer clareza e resultados reais para seu negócio digital.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Como funciona o processo de trabalho?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Começamos com uma conversa para entender seus objetivos. A partir daí, desenvolvemos um plano personalizado com base no tipo de solução que você precisa. Todo o processo é transparente, com comunicação clara e entregas definidas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Você também desenvolve o software?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Meu papel principal é o de arquiteto e consultor, mas tenho uma rede de desenvolvedores de confiança. Posso supervisionar a implementação do seu projeto garantindo que seja executado conforme o planejado e dentro dos padrões de qualidade.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quanto custa contratar seus serviços?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Os preços variam de acordo com o tipo de serviço e a complexidade do projeto. Ofereço desde consultorias pontuais até acompanhamento contínuo como CTO. Entre em contato para conversarmos sobre suas necessidades específicas e receber uma proposta personalizada.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <GTMNoscript />
        {children}
      </body>
    </html>
  );
}
