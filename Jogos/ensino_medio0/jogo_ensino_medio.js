const words = document.querySelectorAll('.word');
const groupsContainer = document.getElementById('groups-container');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');


const wordGroups = {
    'AVENIDA': 'TIPOS DE VIAS',
    'ESTRADA': 'TIPOS DE VIAS',
    'RODOVIA': 'TIPOS DE VIAS',
    'RUA': 'TIPOS DE VIAS',
    'ESPELHO RETROVISOR': 'PARTES DO VEÍCULO',
    'FAROL': 'PARTES DO VEÍCULO',
    'PNEU': 'PARTES DO VEÍCULO',
    'VOLANTE': 'PARTES DO VEÍCULO',
    'CUIDADO ESCOLAS': 'TIPOS DE PLACAS DE TRÂNSITO',
    'PARE': 'TIPOS DE PLACAS DE TRÂNSITO',
    'PROIBIDO ESTACIONAR': 'TIPOS DE PLACAS DE TRÂNSITO',
    'VELOCIDADE MÁXIMA': 'TIPOS DE PLACAS DE TRÂNSITO',
    'AVANÇAR NO SINAL VERMELHO': 'INFRAÇÕES DE TRÂNSITO',
    'ESTACIONAR EM LOCAL PROIBIDO': 'INFRAÇÕES DE TRÂNSITO',
    'EXCESSO DE VELOCIDADE': 'INFRAÇÕES DE TRÂNSITO',
    'USO DO CELULAR': 'INFRAÇÕES DE TRÂNSITO'
};


let selectedWords = [];
let correctGroups = 0;


words.forEach(word => {
    word.addEventListener('click', () => {
        if (word.classList.contains('selected')) {
            word.classList.remove('selected');
            selectedWords = selectedWords.filter(w => w !== word);
        } else {
            word.classList.add('selected');
            selectedWords.push(word);
        }
    });
});


checkButton.addEventListener('click', () => {
    if (selectedWords.length !== 4) {
        result.textContent = 'Selecione exatamente 4 palavras para formar um grupo.';
        return;
    }


    const groupNames = selectedWords.map(word => wordGroups[word.textContent]);
    const groupName = groupNames[0];


    if (groupNames.every(name => name === groupName)) {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('group', 'correct');
        groupDiv.innerHTML = `<h2>${groupName}</h2>`;


        selectedWords.forEach(word => {
            word.classList.remove('selected');
            groupDiv.appendChild(word);
        });


        groupsContainer.appendChild(groupDiv);
        correctGroups += 1;


        result.textContent = `Você formou o grupo: ${groupName}`;
        selectedWords = [];


        if (correctGroups === 4) {
            checkButton.style.display = 'none';
            result.textContent = 'PARABÉNS VOCÊ CONSEGUIU!';
        }
    } else {
        result.className = 'resposta_errada'
        result.textContent = 'As palavras selecionadas não pertencem ao mesmo grupo. Tente novamente.';
        selectedWords.forEach(word => word.classList.remove('selected'));
        selectedWords = [];
    }
});