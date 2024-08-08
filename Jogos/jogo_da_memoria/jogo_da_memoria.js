const cartas_container = document.getElementById('cartas-container');

const cartas_arquivos = {
    'Cone de trânsito'          : 'cartas/cone_de_transito.svg',
    'Faixa de segurança'        : 'cartas/faixa_de_seguranca.svg',
    'Limite de velocidade'      : 'cartas/limite_de_velocidade.svg',
    'Pare'                      : 'cartas/pare.svg',
    'Proibido estacionar'       : 'cartas/proibido_estacionar.svg',
    'Proibido ultrapassagem'    : 'cartas/proibido_ultrapassagem.svg',
    'Semáforo'                  : 'cartas/semaforo.svg',
    'Sinal verde'               : 'cartas/sinal_verde.svg',
    'Sinal vermelho'            : 'cartas/sinal_vermelho.svg',    
    'Passagem de nível'         : 'cartas/trilho_de_trem.svg'
}

var cartas_objetos = new Array();
var pontos = 0;
var iniciado = false;

//Cria todas as cartas no DOM
Object.keys(cartas_arquivos).forEach(key => {
    //Para as cartas com Imagems
    var div = document.createElement("div");
    div.classList = "carta ";
    var img = document.createElement("img");
    img.src = cartas_arquivos[key];
    div.classList += key.replace(/\s+/g, '-').toLowerCase();
    div.appendChild(img);
    
    //Para as cartas com Textos
    var div2 = document.createElement("div");
    div2.classList = "carta ";
    var p = document.createElement("p");
    p.textContent = key;
    div.classList, div2.classList += key.replace(/\s+/g, '-').toLowerCase();
    div2.appendChild(p);
    
    div.addEventListener('click', (event) => girarCarta(event.target));
    div2.addEventListener('click', (event) => girarCarta(event.target));
    
    cartas_objetos.push(div);
    cartas_objetos.push(div2);
});

//Adciona a função embaralhar para todos os arrays
Array.prototype.shuffle = function() {
    let indice = this.length;
    
    while(indice) {
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [this[indice], this[indiceAleatorio]] = 
            [this[indiceAleatorio], this[indice]];
    }

    return this;
}

//Quando apertar o botão reiniciar:
document.getElementById("reiniciar").addEventListener('click', () => embaralhar());
function embaralhar() {
    iniciado = false;
    cartas_objetos.shuffle();
    
    cartas_objetos.forEach(element => {
        element.classList.remove('carta-baixo');
        element.classList.remove('carta-cima');
        element.children[0].style.display = 'block';
    });

    atualizar();
};

//Atualiza o container
function atualizar() {
    cartas_objetos.forEach(element => {
        cartas_container.append(element);
    });
}
embaralhar();

function iniciar() {
    console.log("Iniciar");
    iniciado = true;
    cartas_objetos.forEach(element => ocultarCarta(element));
}

document.getElementById("iniciar").addEventListener('click', () => iniciar());

function girarCarta(element){
    if (selecionado.length > 1 || !iniciado)
        return;

    var carta_exibida = !(element.children[0].style.display == 'none');
    console.log(carta_exibida);

    if (carta_exibida){
        if (!selecionado.includes(element))
            return;
        ocultarCarta(element);
        selecionado = new Array();
    }
    else{
        mostrarCarta(element);
        selecionado.push(element);
    }

    compararSelecionado();
}

function ocultarCarta(element){
    element.classList.remove('carta-cima');
    element.classList.add('carta-baixo');

    element.children[0].style.display = 'none';
}

function mostrarCarta(element){
    element.classList.remove('carta-baixo');
    element.classList.add('carta-cima');

    element.children[0].style.display = 'block';
}

var selecionado = new Array();

function compararSelecionado(){
    var igual = selecionado[0].classList[1] == selecionado[1].classList[1];

    if (igual){
        pontos += 2;
        selecionado =  new Array();
        if (pontos >= cartas_objetos.length)
            vitoria();
    }
    else{
        setTimeout(restaurarSelecao, 1000);
    }
}

function restaurarSelecao(){
    selecionado.forEach(element => ocultarCarta(element));
    selecionado = new Array();
}

function vitoria(){
    // Fim
}