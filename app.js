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
        habilitaReiniciar("btn-reiniciar");
        ajustaErroPreenchimento();
    }
}
//Pega valores do usuário com base no id
function pegandoValores(id){
    let elementoHtml = document.getElementById(id);
    let valor = elementoHtml.value;
    valor = parseInt(valor);
    return valor;
}
//Gera números conforme preenchimento do usuário
function gerandoNumeros(qtdTotal,valorMinimo,valorMaximo){

    let numerosGerados = [];
    let qtdNumerosGerados = 0;
    let numeroGerado;

    while(qtdNumerosGerados<qtdTotal){

        numeroGerado = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
        //Não gera valores repetidos
        if(numerosGerados.includes(numeroGerado)){
            continue;
        } else{
            numerosGerados.push(numeroGerado);
        }

        qtdNumerosGerados++;
    }

    return numerosGerados;
}
//Envia valores para a interface do usário
function enviaValores(id,texto){

    let elementoNumSorteados = document.getElementById(id)
    elementoNumSorteados.innerHTML=`<label class="texto__paragrafo">${texto}</label>`;

}
//Muda a cor do botão do habilitar
function habilitaReiniciar(id){
    let btReiniciar =  document.getElementById(id);
    if(btReiniciar.classList.contains("container__botao-desabilitado")){
        btReiniciar.classList.remove("container__botao-desabilitado");
        btReiniciar.classList.add("container__botao");
    } else{
        btReiniciar.classList.add("container__botao-desabilitado");
    }
}
//Limpa e habilita o reiniciar
function reiniciar(){
    apagaValores("quantidade");
    apagaValores("de");
    apagaValores("ate");
    habilitaReiniciar("btn-reiniciar");
    enviaValores("resultado","Números sorteados: nenhum até agora");
}
//Apaga os valores conforme id
function apagaValores(id){
    let valorApagar = document.getElementById(id);
    valorApagar.value = "";
}
//Muda titulo para erro
function erroPreenchimento(){
    let titulo = document.querySelector("h1");
    titulo.innerHTML = `<h1>Erro<span class="container__texto-azul"> de preenchimento</span></h1>`
}
//Retorna o titulo
function ajustaErroPreenchimento(){
    let titulo = document.querySelector("h1");
    titulo.innerHTML = `<h1>Sorteador<span class="container__texto-azul"> de números</span></h1>`
}