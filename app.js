function sortear(){

    let quantidade = pegandoValores("quantidade");
    let de = pegandoValores("de");
    let ate = pegandoValores("ate");
    console.log(quantidade);
    console.log(de);
    console.log(ate);

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)){
        erroPreenchimento();

    } else{
        let numerosSorteados = gerandoNumeros(quantidade,de,ate);
        let textoNumerosGerados = (quantidade>1) ? `Números gerados: ${numerosSorteados}`: `Número gerado: ${numerosSorteados}`;
        enviaValores("resultado",textoNumerosGerados);
        habilitaReiniciar("btn-reiniciar","container__botao");
        ajustaErroPreenchimento();
    }
}

function pegandoValores(id){
    let elementoHtml = document.getElementById(id);
    let valor = elementoHtml.value;
    valor = parseInt(valor);
    return valor;
}

function gerandoNumeros(qtdTotal,valorMinimo,valorMaximo){

    let numerosGerados = [];
    let qtdNumerosGerados = 0;
    let numeroGerado;

    while(qtdNumerosGerados<qtdTotal){

        numeroGerado = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;

        if(numerosGerados.includes(numeroGerado)){
            continue;
        } else{
            numerosGerados.push(numeroGerado);
        }

        qtdNumerosGerados++;
    }

    return numerosGerados;
}

function enviaValores(id,texto){

    let elementoNumSorteados = document.getElementById(id)
    elementoNumSorteados.innerHTML=`<label class="texto__paragrafo">${texto}</label>`;

}

function habilitaReiniciar(id,classe){
    let btReiniciar =  document.getElementById(id);
    btReiniciar.innerHTML = "";
    btReiniciar.innerHTML = `<button onclick="reiniciar()" id="btn-reiniciar" class=${classe}>Reiniciar</button>`;
}

function reiniciar(){
    apagaValores("quantidade");
    apagaValores("de");
    apagaValores("ate");
    habilitaReiniciar("btn-reiniciar","container__botao-desabilitado");
    enviaValores("resultado","Números sorteados: nenhum até agora");
}

function apagaValores(id){
    let valorApagar = document.getElementById(id);
    valorApagar.value = "";
}

function erroPreenchimento(){
    let titulo = document.querySelector("h1");
    titulo.innerHTML = `<h1>Erro<span class="container__texto-azul"> de preenchimento</span></h1>`
}

function ajustaErroPreenchimento(){
    let titulo = document.querySelector("h1");
    titulo.innerHTML = `<h1>Sorteador<span class="container__texto-azul"> de números</span></h1>`
}