# Configuração do Google Tag Manager (GTM)

## 🚀 Passos para Implementar

### 1. Criar Conta no Google Tag Manager

1. Acesse [tagmanager.google.com](https://tagmanager.google.com)
2. Crie uma conta e um contêiner para seu website
3. Anote o **ID do contêiner** (formato: `GTM-XXXXXXX`)

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com:

```bash
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Opcional: Habilitar analytics em desenvolvimento
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

**⚠️ Importante:**

- Substitua `GTM-XXXXXXX` pelo seu ID real do GTM
- O prefixo `NEXT_PUBLIC_` é necessário para variáveis que são usadas no lado do cliente
- Por padrão, o GTM só carrega em produção

### 3. Configuração Básica no GTM

Após criar o contêiner, configure as tags básicas:

#### Google Analytics 4 (GA4)

1. No GTM, vá para **Tags** → **Nova**
2. Escolha **Configuração do Google Analytics: GA4**
3. Adicione seu **Measurement ID** do GA4 (formato: `G-XXXXXXXXXX`)
4. Configure o acionador como **All Pages**

#### Acompanhamento de Eventos Personalizados

Exemplo de configuração para rastrear cliques em botões:

```javascript
// Exemplo de evento personalizado que pode ser enviado via GTM
gtag("event", "click", {
  event_category: "engagement",
  event_label: "header_cta_button",
});
```

### 4. Testando a Implementação

#### Durante o Desenvolvimento

```bash
# Para testar em desenvolvimento, adicione no .env.local:
NEXT_PUBLIC_ENABLE_ANALYTICS=true

# Execute o projeto
npm run dev
```

#### Verificando se Está Funcionando

1. Abra as **Ferramentas do Desenvolvedor** do browser
2. Vá para a aba **Network**
3. Recarregue a página
4. Procure por requisições para `googletagmanager.com`
5. Use a extensão **Google Tag Assistant** do Chrome para validar

### 5. Deploy em Produção

1. Configure as variáveis de ambiente no seu serviço de hospedagem:

   ```bash
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

2. Faça o deploy normalmente:
   ```bash
   npm run build
   npm run start
   ```

### 6. Configurações Avançadas (Opcional)

#### Modo de Depuração

Para debug avançado, você pode habilitar o modo de visualização no GTM:

1. No GTM, clique em **Visualizar**
2. Digite a URL do seu site
3. Navegue pelo site para ver os eventos sendo disparados

#### Eventos Personalizados

Para enviar eventos personalizados do seu código React:

```typescript
// Exemplo de função para enviar eventos
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, parameters);
  }
};

// Uso em componentes
trackEvent("page_view", {
  page_title: "Homepage",
  page_location: window.location.href,
});
```

## 📊 Estrutura dos Arquivos

```
src/
├── app/
│   ├── analytics.tsx         # Componente do GTM
│   └── layout.tsx           # Layout principal (GTM integrado)
├── lib/
│   └── analytics.ts         # Configurações e utilitários
└── .env.local               # Variáveis de ambiente (não commitado)
```

## 🔍 Troubleshooting

### GTM não está carregando

- Verifique se a variável `NEXT_PUBLIC_GTM_ID` está definida
- Confirme se está em produção ou se `NEXT_PUBLIC_ENABLE_ANALYTICS=true`
- Verifique no console do browser se há erros

### Tags não estão disparando

- Use o modo de visualização do GTM para debug
- Verifique se os acionadores estão configurados corretamente
- Confirme se o GTM está publicado (não apenas salvo)

### Em desenvolvimento

- O GTM não carrega por padrão em desenvolvimento
- Para testar, defina `NEXT_PUBLIC_ENABLE_ANALYTICS=true` no `.env.local`

## 📚 Recursos Úteis

- [Documentação oficial do GTM](https://developers.google.com/tag-manager)
- [GTM com Next.js](https://nextjs.org/docs/messages/next-script-for-ga)
- [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk)
