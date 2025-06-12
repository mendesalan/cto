import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CTO on Demand | Serviços de CTO Terceirizado | meuCTOdigital.com",
  description:
    "Precisa de um CTO mas não quer contratar em tempo integral? Nosso serviço de CTO on Demand oferece liderança técnica estratégica para startups e empresas digitais.",
  keywords: [
    "CTO on demand",
    "CTO terceirizado",
    "CTO as a service",
    "liderança técnica",
    "consultoria CTO",
    "CTO startup",
    "Alan Mendes CTO",
    "serviços CTO",
    "arquitetura de software",
    "estratégia técnica",
  ],
  openGraph: {
    title: "CTO on Demand | Liderança Técnica Estratégica",
    description:
      "Serviços de CTO terceirizado para startups e empresas que precisam de liderança técnica sem o custo de um funcionário full-time.",
    url: "https://meuctodigital.com/cto-on-demand",
  },
  alternates: {
    canonical: "/cto-on-demand",
  },
};

export default function CTOOnDemandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
