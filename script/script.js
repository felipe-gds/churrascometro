
//Desabilitar o botão enquanto os inputs não forem preenchidos
function checkinputs(inputs) {

    var filled = true;

    inputs.forEach(function(input) {
        if(input.value === "") {
            filled = false;
        }
    });

    return filled;
}

var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");
button.disabled = true;

inputs.forEach(function(input){

    input.addEventListener("keyup", function(){

        if(checkinputs(inputs)){
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
});

let inputAdultos = document.getElementById("adultos");
let inputAdultosQueBebem = document.getElementById("adultosQueBebem");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
 
let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let adultosQueBebem = inputAdultosQueBebem.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let qntAdultos = parseInt(adultos) + parseInt(adultosQueBebem);

    let qntTotalCarne = carnePP(duracao) * qntAdultos + (carnePP(duracao)/2 * criancas);
    let qntTotalCerveja = cervejaPP(duracao) * adultosQueBebem;
    let qntTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qntTotalCarne / 1000} Kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotalCerveja / 350)} Latas de cerveja de 350ml</p>`
    resultado.innerHTML += `<p>${qntTotalBebida / 1000} Litros de bebida</p>`
    
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}
function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}