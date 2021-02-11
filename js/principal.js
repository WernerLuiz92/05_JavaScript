
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

var pesoIsValid = true;
var alturaIsValid = true;

if((peso <= 0) || (peso >= 710)) {
    err = "Peso inválido!";
    pesoIsValid = false;
}

if ((altura <= 0.5) || (altura >= 2.4)){
    err = "Altura inválida!";
    alturaIsValid = false;
}

if (alturaIsValid && pesoIsValid){
    var imc = peso / (altura * altura);
    paciente.querySelector(".info-imc").textContent = imc;
} else {
    paciente.querySelector(".info-imc").textContent = "Erro: " + err;
}

// console.log(paciente);
// console.log(altura);
// console.log(peso);
// console.log(imc);