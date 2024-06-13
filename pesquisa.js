function submitOnEnter(event) {
    var teste = document.getElementById("pesquisa").value;
    console.log(event);
    if (event.which === 13) {
        if (!event.repeat) {
            Pesquisar(teste)
        }
        event.preventDefault(); // Prevents the addition of a new line in the text field
    }
}

document.getElementById("pesquisa").addEventListener("keydown", submitOnEnter);

function Pesquisar(conteudo){
    console.log(conteudo);
    window.location.replace('pesquisa.html');
}