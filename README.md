# Magda Imóveis — novo site

Site institucional + vitrine de imóveis da Magda Imóveis (Lago Sul, Brasília-DF).
Stack: [Astro](https://astro.build) + TypeScript + CSS puro. Gera HTML estático com JavaScript mínimo.

## Comandos

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:4321
npm run build     # gera ./dist
npm run preview   # serve o build
npm run check     # astro check (tipos)
```

## Onde editar

| O quê | Onde |
| --- | --- |
| Dados da empresa, contatos, horários, serviços, valores, números, menu | `src/config/site.ts` |
| Imóveis | `src/data/imoveis.json` |
| Fotos dos imóveis | `src/assets/imoveis/<slug>/01.jpg, 02.jpg…` |
| Estilos / tokens de design | `src/styles/global.css` |
| Páginas | `src/pages/` |

### Adicionar um imóvel

1. Crie a pasta `src/assets/imoveis/<slug>/` com as fotos (`01.jpg`, `02.jpg`…).
2. Adicione um item em `src/data/imoveis.json` seguindo o formato dos existentes
   (`slug`, `title`, `purpose` = `venda|aluguel`, `type`, `neighborhood`, `city`, `price`, `photos`, `description`…).
3. Use `"published": false` para ocultar sem apagar. `"featured": true` destaca na Home.

Somente informações reais devem ser cadastradas. Campos numéricos ausentes ficam `null`.

## Formulário de contato

Defina `PUBLIC_FORM_ENDPOINT` (veja `.env.example`) com a URL de um serviço de formulários
(ex.: Formspree, Web3Forms). Sem o endpoint, o formulário abre o WhatsApp com a mensagem preenchida.

## Pendências de conteúdo

- Texto da política de privacidade é provisório (`noindex`) e precisa de revisão jurídica.
- Descrições dos serviços (`SERVICES`) foram redigidas de forma genérica; validar com a cliente.
- Trocar a imagem do hero (`src/assets/brand/hero-house.jpg`, render) por uma foto real.
- Confirmar o rótulo dos números (`STATS`) com a cliente.

## Deploy

Site 100% estático: publique a pasta `dist/` (Vercel, Netlify, Cloudflare Pages…).
Ajuste `site` em `astro.config.mjs` caso o domínio mude.