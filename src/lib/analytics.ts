// Configurações de Analytics
export const analyticsConfig = {
  // Google Tag Manager ID - ID público, pode ficar no código
  gtmId: "GTM-PNKPWJ4Q",

  // Google Analytics 4 ID - ID público, pode ficar no código
  gaId: "G-7RSPL59FC4",

  // Verificar se está em produção
  isProduction: process.env.NODE_ENV === "production",

  // Habilitar analytics (sempre habilitado agora)
  enableAnalytics: true,
};

// Função para verificar se o GTM deve ser carregado
export const shouldLoadGTM = (): boolean => {
  return Boolean(analyticsConfig.gtmId);
};

// Função para verificar se o GA deve ser carregado
export const shouldLoadGA = (): boolean => {
  return Boolean(analyticsConfig.gaId);
};
