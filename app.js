function sortear(){

    let quantidade = pegandoValores("quantidade");
    let de = pegandoValores("de");
    let ate = pegandoValores("ate");
    console.log(quantidade);
    console.log(de);
    console.log(ate);
    let numerosSorteados = gerandoNumeros(quantidade,de,ate);
    console.log(numerosSorteados);
    let textoNumerosGerados = `Números gerados: ${numerosSorteados}`;
    enviaValores("resultado",textoNumerosGerados);

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