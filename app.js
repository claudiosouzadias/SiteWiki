function search() {
    // Busca elementos HTML e armazena em variáveis
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa.trim().length === 0) {
        // Se estiver vazio, exibe mensagem de erro
        section.innerHTML = "Sem resultados, por favor insira um valor.";
        return;
    }

    // Normaliza o termo de busca (remove espaços e converte para minúsculas)
    campoPesquisa = campoPesquisa.toLowerCase().trim();

    // Inicializa as variaveis para armazenas os dados
    let title = "";
    let description = "";
    let tags = "";
    let imagem = "";

    // Inicializa variáveis para armazenar os resultados
    let result = "";

    for (let dado of dados) {

        //Inicializa variáveis para armazenas os dados
        title = dado.title.toLowerCase().trim();
        description = dado.description.toLowerCase().trim();
        tags = dado.tags.toLowerCase().trim();
        imagem = dado.tags.toLowerCase();

        // Itera sobre os dados, buscando o termo de pesquisa em títulos, descrições e tags
        if (title.includes(campoPesquisa) || description.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para exibir o resultado
            result += `
                <div class = "resultados-container"> 
                    <div class = "resultados-pesquisa">
                        <div class="item-resultado">
                            <h2><a href="#" target="_blank">${dado.title}</a></h2>
                            <p class="descricao-meta">${dado.description}</p>
                            <a href="${dado.link}" target="_blank">More info</a> 
                        </div>
                    </div>
                    <div class "imagem-resultado"> 
                        <img src = "${dado.imagem}" alt="imagem">
                    </div>
                </div>

            `;
        } 
    }
    // Se não houver resultados, exibe mensagem de erro
    if (!result) {
        result = "Nenhum resultado encontrado, por favor tente novamente!";
    }

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = result;
}

