function sortear(){

    let quantidade = pegandoValores("quantidade");
    let de = pegandoValores("de");
    let ate = pegandoValores("ate");
    console.log(quantidade);
    console.log(de);
    console.log(ate);

}

function pegandoValores(id){
    let elementoHtml = document.getElementById(id);
    let valor = elementoHtml.value;
    return valor;
}