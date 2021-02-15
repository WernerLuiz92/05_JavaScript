
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
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
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    } else {
        paciente.querySelector(".info-imc").textContent = "Erro: " + err;
        paciente.classList.add("paciente-invalido");
    }

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});