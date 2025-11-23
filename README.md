# Tech Knowledge Base - Gerador e Visualizador

Este projeto é uma aplicação web dividida em duas partes principais: um **visualizador de tecnologias** e um **gerador de conteúdo automatizado** que utiliza a API do Google Gemini.

A interface do usuário permite visualizar e pesquisar uma lista de linguagens de programação, frameworks e ferramentas de desenvolvimento. O gerador de conteúdo é um script Node.js que expande a base de conhecimento de forma automática, garantindo que o conteúdo se mantenha atualizado e relevante.

## ✨ Funcionalidades Principais

-   **Visualização de Cards:** As tecnologias são exibidas em um formato de "cards" de fácil leitura.
-   **Busca em Tempo Real:** Filtre os cards dinamicamente digitando no campo de busca. A busca é realizada no nome e na descrição das tecnologias.
-   **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
-   **Geração de Conteúdo com IA:** Um script Node.js se conecta à API do Google Gemini para gerar novas entradas para a base de conhecimento, evitando duplicatas.
-   **Estrutura Simples:** O projeto utiliza HTML, CSS e JavaScript puros no front-end, sem a necessidade de frameworks complexos.

## 🚀 Tecnologias Utilizadas

-   **Front-end:**
    -   HTML5
    -   CSS3
    -   JavaScript (Vanilla)

-   **Back-end (Gerador de Conteúdo):**
    -   Node.js
    -   **Google Gemini API:** Para a geração de conteúdo.
    -   `dotenv`: Para gerenciar as chaves de API de forma segura.

## 📂 Estrutura do Projeto

