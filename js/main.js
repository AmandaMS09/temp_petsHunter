// Manipulacao de dados
// Vetor de usuarios
var db_usuario_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Amanda",
            "contato": "(31)99999-9999",
            "senha": "123"
        },
        {
            "id": 2,
            "nome": "Júlio",
            "contato": "(31)90000-0000",
            "senha": "1234"
        },
        {
            "id": 3,
            "nome": "Alberto",
            "contato": "alberto@gmail.com",
            "senha": "12345"
        },
        {
            "id": 4,
            "nome": "Mariana",
            "contato": "mariana@gmail.com",
            "senha": "123456"
        }
    ]
}
// Vetor de animais
var db_animal_inicial = {
    "data": [
        {
            "id": 1,
            "situacao": "perdido",
            "data": "02/06/2022",
            "foto": "../img/pet1.jpeg",
            "descricao": "Parece uma hiena e é igual um bolo formigueiro.",
            "idade": "Entre 1 e 3 anos",
            "local": "Bairro Jardim América",
            "porte": "Medio",
            "raca": "SRD",
            "sexo": "Fêmea",
            "tipo": "Cachorro",
            "usuario_id": 1
        },
        {
            "id": 2,
            "situacao": "perdido",
            "data": "28/05/2022",
            "foto": "../img/pet2.jpeg",
            "descricao": "Foi perdida com um lacinho na cabeça.",
            "idade": "Entre 3 e 5 anos",
            "local": "Bairro Salgado filho",
            "porte": "Pequeno",
            "raca": "SRD",
            "sexo": "Fêmea",
            "tipo": "Cachorro",
            "usuario_id": 2
        },
        {
            "id": 3,
            "situacao": "encontrado",
            "data": "05/06/2022",
            "foto": "../img/pet3.jpeg",
            "descricao": "É muito sociável, foi encontrada em boas condições.",
            "idade": "Entre 1 e 3 anos",
            "local": "Bairro Nova Suiça",
            "porte": "Medio",
            "raca": "SRD",
            "sexo": "Fêmea",
            "tipo": "Gato",
            "usuario_id": 3
        },
        {
            "id": 4,
            "situacao": "perdido",
            "data": "03/06/2022",
            "foto": "../img/pet4.jpg",
            "descricao": "Saiu de casa normalmente, mas não voltou.",
            "idade": "Entre 1 e 3 anos",
            "local": "Bairro Grajaú",
            "porte": "Medio",
            "raca": "SRD",
            "sexo": "Macho",
            "tipo": "Gato",
            "usuario_id": 3
        },
        {
            "id": 5,
            "situacao": "com_o_dono",
            "data": "08/06/2022",
            "foto": "../img/pet5.jpg",
            "descricao": "Encontrado em um bairro próximo em um terreno abandonado.",
            "idade": "Entre 1 e 3 anos",
            "local": "Bairro Grajaú",
            "porte": "Grande",
            "raca": "SRD",
            "sexo": "Macho",
            "tipo": "Cachorro",
            "usuario_id": 1
        },
        {
            "id": 6,
            "situacao": "encontrado",
            "data": "05/06/2022",
            "foto": "../img/pet6.png",
            "descricao": "Encontrado junto de outros cachorros que andavam pela rua.",
            "idade": "Até 1 ano",
            "local": "Bairro Nova Suiça",
            "porte": "Grande",
            "raca": "SRD",
            "sexo": "Macho",
            "tipo": "Cachorro",
            "usuario_id": 4
        },
        {
            "id": 7,
            "situacao": "encontrado",
            "data": "05/06/2022",
            "foto": "../img/pet1.jpeg",
            "descricao": "Entrou na minha casa e ficou, está sendo bem cuidado.",
            "idade": "Entre 3 e 5 anos",
            "local": "Bairro Grajaú",
            "porte": "Pequeno",
            "raca": "SRD",
            "sexo": "Macho",
            "tipo": "Gato",
            "usuario_id": 3
        },
        {
            "id": 8,
            "situacao": "com_o_dono",
            "data": "09/06/2022",
            "foto": "../img/pet2.jpeg",
            "descricao": "Perdido em 24/05/2022, entraram em contato comigo por causa do site.",
            "idade": "Entre 1 e 3 anos",
            "local": "Bairro Salgado Filho",
            "porte": "Medio",
            "raca": "Dachshund",
            "sexo": "Macho",
            "tipo": "Cachorro",
            "usuario_id": 2
        }
    ]
}

// Caso os dados ja estejam no Local Storage, caso contrario, carrega os dados iniciais
var db_usu = JSON.parse(localStorage.getItem('db_usuario'));
if (!db_usu) {
    db_usu = db_usuario_inicial
};
var db_animal = JSON.parse(localStorage.getItem('db_animal'));
if (!db_animal) {
    db_animal = db_animal_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertAnimal(animal) {
    // Calcula novo Id a partir do ultimo codigo existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db_animal.data.length != 0) 
      novoId = db_animal.data[db_animal.data.length - 1].id + 1;
  
    let novoAnimal = {
        "id": novoId,
        "situacao": animal.situacao,
        "data" : animal.data,
        "descricao": animal.descricao,
        "idade" : animal.idade,
        "local": animal.local,
        "porte": animal.porte,
        "raca": animal.raca,
        "sexo": animal.sexo,
        "tipo": animal.tipo,
        "usuario_id": animal.usuario_id
    };

    // Insere o novo objeto no array
    db_animal.data.push(novoAnimal);
    displayMessage("Pet inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_animal', JSON.stringify(db_animal));
}

function updateAnimal(id, animal) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db_animal.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db_animal.data[index].situacao = animal.situacao,
    db_animal.data[index].data = animal.data,
    db_animal.data[index].descricao = animal.descricao,
    db_animal.data[index].idade = animal.idade,
    db_animal.data[index].local = animal.local,
    db_animal.data[index].porte = animal.porte,
    db_animal.data[index].raca = animal.raca,
    db_animal.data[index].sexo = animal.sexo,
    db_animal.data[index].tipo = animal.tipo,
    db_animal.data[index].usuario_id = animal.usuario_id

    displayMessage("Pet alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_animal', JSON.stringify(db_animal));
}

function deleteAnimal(id) {    
    // Filtra o array removendo o elemento com o id passado
    db_animal.data = db_animal.data.filter(function (element) { return element.id != id });

    displayMessage("Animal removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_animal', JSON.stringify(db_animal));
}

// Login
const fundo1 = "url(../img/fundo1.jpg)", fundo2 = "url(img/fundo2.jpg)",fundo3 = "url(img/fundo3.jpg)",fundo4 = "url(img/fundo4.jpg)",fundo5 = "url(img/fundo5.jpg)"
const login_img = [fundo1,fundo2,fundo3,fundo4,fundo5]
const doc_img = document.getElementById("img_login")

function random_img() {
    document.getElementById("img_login").style.backgroundImage = (login_img[Math.floor(Math.random() * login_img.length)])
}

document.addEventListener('DOMContentLoaded', random_img); // Acontece quando a pagina e totalmente carregada

// Barra de pesquisa
function pesquisar() {
    let input = document.getElementById('pesquisa').value
    input=input.toLowerCase();
    let animais = document.getElementsByClassName('card');
      
    for (i = 0; i < animais.length; i++) { 
        if (!animais[i].innerHTML.toLowerCase().includes(input)) {
            animais[i].style.display="none";
        }
        else {
            animais[i].style.display="flex";
        }
    }
}