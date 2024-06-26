const cartas_container = document.getElementById('cartas-container');

const cartas = {
    'Cone de trânsito'          : 'cartas/cone_de_transito.svg',
    'Faixa de segurança'        : 'cartas/faixa_de_seguranca.svg',
    'Limite de velocidade'      : 'cartas/limite_de_velocidade.svg',
    'Pare'                      : 'cartas/pare.svg',
    'Proibido estacionar'       : 'cartas/proibido_estacionar.svg',
    'Proibido ultrapassagem'    : 'cartas/proibido_ultrapassagem.svg',
    'Semáforo'                  : 'cartas/semaforo.svg',
    'Sinal verde'               : 'cartas/sinal_verde.svg',
    'Sinal vermelho'            : 'cartas/sinal_vermelho.svg',    
    'Trilho de trem'            : 'cartas/trilho_de_trem.svg'
}

var cartas_visuais = new Array();
var cartas_descritivas = new Array();

var amostragem_de_cartas = new Array();

Object.keys(cartas).forEach(key => {
    //Para as cartas com Imagems
    var div = document.createElement("div");
    div.classList = "carta ";
    var img = document.createElement("img");
    img.src = cartas[key];
    div.classList += key.replace(/\s+/g, '-').toLowerCase();
    div.appendChild(img);
    
    //Para as cartas com Textos
    var div2 = document.createElement("div");
    div2.classList = "carta ";
    var p = document.createElement("p");
    p.textContent = key;
    div.classList, div2.classList += key.replace(/\s+/g, '-').toLowerCase();
    div2.appendChild(p);
    
    div.addEventListener('click', (event) => girarCarta(event));
    div2.addEventListener('click', (event) => girarCarta(event));
    
    cartas_visuais.push(div);
    cartas_descritivas.push(div2);

    console.log(key, cartas[key]);
});

cartas_visuais.forEach(element => {
    cartas_container.append(element);
});

cartas_descritivas.forEach(element => {
    cartas_container.append(element);
});

function girarCarta(event){
    var carta_exibida = !(event.target.children[0].style.display == 'none');
    console.log(carta_exibida);

    if (carta_exibida)
        ocultarCarta(event);
    else
        mostrarCarta(event);
}

function ocultarCarta(event){
    event.target.classList.remove('carta-cima');
    event.target.classList.add('carta-baixo');

    event.target.children[0].style.display = 'none';
}

function mostrarCarta(event){
    event.target.classList.remove('carta-baixo');
    event.target.classList.add('carta-cima');

    event.target.children[0].style.display = 'block';
}