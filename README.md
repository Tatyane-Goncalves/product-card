# 🛍️ Card de Produto Reutilizável

Componente front-end desenvolvido em **React** com **Sass (SCSS modular)** para renderização dinâmica e estilização de **cards de produto reutilizáveis**. Ideal para e-commerces ou aplicações que listem produtos com diferentes informações.  
Foco total em **responsividade**, **modularidade** e **facilidade de personalização via props e children**.

---
## ✨ Funcionalidades
- Exibição de imagem, título, preço e preço promocional
- Destaque visual no valor promocional
- Selo de desconto (opcional)
- Tag de destaque (ex: "Novo", "Frete Grátis") via props
- Avaliação com estrelas ou nota numérica
- Ações customizáveis com children (ex: botão "Comprar", "Favoritar")
- Layout responsivo com suporte a diferentes tamanhos de tela
- Estilização isolada com **Sass Modules**


---
## ## ⚙️ Props disponíveis

| Prop         | Tipo     | Descrição                                |
|--------------|----------|-------------------------------------------|
| `image`      | string   | URL da imagem do produto                  |
| `title`      | string   | Nome ou título do produto                 |
| `price`      | string   | Preço original                            |
| `promoPrice` | string   | Preço promocional (opcional)             |
| `rating`     | number   | Avaliação do produto (0–5)                |
| `tag`        | string   | Texto da tag de destaque (opcional)      |
| `discount`   | string   | Texto do selo de desconto (opcional)     |
| `children`   | node     | Elementos customizados (ex: botões)       |


---

## 🚀 Tecnologias
- **React**
- **Sass (SCSS Modules)**
- **JavaScript (ES6+)**
- **Vite** (para build e dev server rápido)

---
## 🧱 Estrutura do Projeto
```bash
product-card/
├── src
│   ├── components
│   │    ├── ProductCard/
│   │    │     ├── ProductCard.jsx
│   │    │      └── ProductCard.module.scss
│   │    ├── Loader/
│   │    │    ├── Loader.jsx
│   │    │    └── Loader.module.scss
│   │    │ 
│   │    └── Erro/
│   │         ├── Erro.jsx
│   │         └── Erro.module.scss
│   ├── App.jsx
│   ├── index.scss
│   └── main.js
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js

```

---
## ✅ Melhorias Futuras
- Animações suaves para hover/focus (ex: scale, fade-in)
- Skeleton loading (estado de carregamento)
- Suporte a múltiplas moedas e localizações
- Adição de TypeScript para validação de props
- Testes com Jest + React Testing Library
- Integração com context API para carrinho/favoritos
- Suporte a dark mode (básico)

---
## 🤝 Contribuição
Pull requests são bem-vindos!
Siga os padrões de código, prefira nomes claros e descritivos, use tipagem explícita sempre que possível.
Evite hardcoded, e priorize a reutilização do componente.
Estilos devem estar isolados usando `.module.scss` ou seguindo a metodologia BEM.

🧩 Feito com ❤️ para devs que gostam de componentes limpos, bonitos e prontos pro mundo real.

