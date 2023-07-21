const RESULTADO = document.querySelector('.result');

function inserir(valor) {
    const MAX_LENGTH = 1000;
    RESULTADO.innerHTML += valor;
    if (RESULTADO.textContent.length > MAX_LENGTH) {

        RESULTADO.innerHTML = RESULTADO.textContent.slice(1);
    }
}

function limpar(){
    RESULTADO.innerHTML = '';
}

function apagar(){
    if(RESULTADO.textContent){
        let remover = document.querySelector('.result').innerHTML;
        RESULTADO.innerHTML = remover.substring(0, remover.length - 1);
    }
}

function confirmar(){
    if(RESULTADO.textContent != 'Erro'){
        document.getElementById ('resultado').innerHTML = eval(RESULTADO.innerHTML);
    }
}