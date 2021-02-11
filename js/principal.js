
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var peso = paciente.querySelector(".info-peso").textContent;
var altura = paciente.querySelector(".info-altura").textContent;

var imc = peso / (altura * altura);

paciente.querySelector(".info-imc").textContent = imc

console.log(paciente);
console.log(altura);
console.log(peso);
console.log(imc);
