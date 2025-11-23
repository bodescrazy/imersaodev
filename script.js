document.addEventListener("DOMContentLoaded", () => {
    const cardcontainer = document.querySelector(".card-container");
    const campoBusca = document.querySelector("#campo-busca"); // Usando um ID para mais especificidade
    let dados = [];

    // Adiciona o "ouvinte" de evento para o campo de busca
    if (campoBusca) {
        campoBusca.addEventListener("input", () => buscar(campoBusca.value));
    }

    // Função para carregar os dados iniciais do JSON
    async function carregarDados() {
        try {
            const resposta = await fetch("data.json");
            dados = await resposta.json();
            renderizarCards(dados); // Renderiza todos os cards inicialmente
        } catch (error) {
            console.error("Falha ao carregar dados:", error);
        }
    }

    // Função para buscar e filtrar os dados com base no termo
    function buscar(termo) {
        const termoBusca = termo.toLowerCase();
        const dadosFiltrados = dados.filter(dado =>
            dado.nome.toLowerCase().includes(termoBusca) ||
            dado.descricao.toLowerCase().includes(termoBusca)
        );
        renderizarCards(dadosFiltrados);
    }

    // Função para renderizar os cards na tela
    function renderizarCards(dadosParaRenderizar) {
        cardcontainer.innerHTML = "";
        for (const dado of dadosParaRenderizar) {
            const article = document.createElement("article");
            article.classList.add("card");
            article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>Ano: ${dado.data_criacao}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba Mais</a>
            `;
            cardcontainer.appendChild(article);
        }
    }

    // Chama a função para carregar os dados quando a página é aberta
    carregarDados();
});

