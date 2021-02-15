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
        var imc = calculaImc(peso, altura);
        paciente.querySelector(".info-imc").textContent = imc;
    } else {
        paciente.querySelector(".info-imc").textContent = "Erro: " + err;
        paciente.classList.add("paciente-invalido");
    }

}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}