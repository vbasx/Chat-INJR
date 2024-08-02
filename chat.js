function enviarMensagem() {
    let input = document.querySelector("#caixatxt");
    
    if (input.value.trim() === "") { //input vazio
        input.value = ''; // limpa o campo de input
        return;
    }

    let divmsg = document.createElement("div"); // cria espaço para exibição da msg
    let texto = document.createElement("p"); // transforma no formato de parágrafo

    texto.innerText = input.value;
    divmsg.append(texto); // mostra a msg na tela
    divmsg.classList.add("divmsg");

    // espaço para os botões de editar e excluir
    let botoes = document.createElement("div");
    botoes.classList.add("botao-container");

    // botão de editar
    let btn_editar = document.createElement("button");
    btn_editar.innerText = "Editar";
    btn_editar.classList.add("btn_editar");
    botoes.append(btn_editar);

    btn_editar.addEventListener("click", () => { // ativação ao clicar no botão de editar
        let textoEditado = prompt("Edite a mensagem:", texto.innerText);
        if (textoEditado !== null) { // Verifica se o usuário não cancelou o prompt
            texto.innerText = textoEditado;
        }
    });

    // botão de excluir
    let btn_excluir = document.createElement("button");
    btn_excluir.innerText = "Excluir";
    btn_excluir.classList.add("btn_excluir");
    botoes.append(btn_excluir);

    btn_excluir.addEventListener("click", () => { // ativação ao clicar no botão de excluir
        divmsg.remove();
        botoes.remove();
    });

    // Adiciona divmsg de mensagem e botões no espaço para tal
    let secao = document.querySelector("#areaExibir");
    divmsg.append(botoes); // Adiciona botoes dentro do divmsg
    secao.append(divmsg);
    input.value = '';
}

let btn_enviar = document.querySelector("#btn_enviar");
btn_enviar.addEventListener("click", enviarMensagem); // ativa botão ao clicar